import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const mount = document.querySelector('#canvas');
const loading = document.querySelector('#loading');
const loadingText = document.querySelector('#loading-text');
const syncPill = document.querySelector('#sync-pill');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#14232e');
scene.fog = new THREE.Fog('#14232e', 14, 30);
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
camera.position.set(7.3, 4.4, 8.4);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
mount.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.0, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 4.5;
controls.maxDistance = 16;
controls.maxPolarAngle = Math.PI * 0.49;

scene.add(new THREE.HemisphereLight('#e5f0f5', '#29343d', 1.8));
const key = new THREE.DirectionalLight('#fff0dc', 3.1); key.position.set(5, 9, 6); scene.add(key);
const fill = new THREE.DirectionalLight('#93b8d2', 1.4); fill.position.set(-6, 4, -5); scene.add(fill);
const soft = new THREE.PointLight('#c5dfed', 65, 18); soft.position.set(1, 5, 6); scene.add(soft);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(100,100), new THREE.MeshStandardMaterial({color:'#1b2b35',roughness:.9}));
floor.rotation.x = -Math.PI/2; floor.position.y = -0.045; floor.receiveShadow = true; scene.add(floor);
const grid = new THREE.GridHelper(26,52,'#506673','#30434e'); grid.position.y = -0.035; grid.material.transparent = true; grid.material.opacity = .14; scene.add(grid);

const loader = new GLTFLoader();
let root = null;
let mixer = null;
let actions = {};
let lastAction = {};
let modelReady = false;
const partKeys = ['front-left','front-right','rear-left','rear-right','trunk'];
const partLabels = {
  'front-left':'Front Left Door', 'front-right':'Front Right Door',
  'rear-left':'Rear Left Door', 'rear-right':'Rear Right Door', trunk:'Trunk Lid'
};
const partOpen = Object.fromEntries(partKeys.map(k => [k,false]));
const canState = Object.fromEntries(partKeys.map(k => [k,null]));
const presets = {
  'three-quarter': {p:[7.3,4.4,8.4],t:[0,1,0]},
  side: {p:[0.15,2.7,11.0],t:[0,1,0]},
  front: {p:[11.5,3.0,0.1],t:[0,1,0]},
  rear: {p:[-11.5,3.0,-0.1],t:[0,1,0]}
};
let cameraTween = null;

function setLoading(text, visible=true) {
  loadingText.textContent = text;
  loading.classList.toggle('hidden', !visible);
}
function setModelStatus(text, isError=false) {
  syncPill.textContent = text;
  syncPill.style.borderColor = isError ? '#a85d50' : '';
  syncPill.style.color = isError ? '#f0b1a5' : '';
}
function setPart(key, open) {
  // Vehicle panel animation is driven exclusively by decoded CAN trace states.
  if (!partKeys.includes(key) || !modelReady || partOpen[key] === open) return;
  partOpen[key] = open;
  const clipName = `${partLabels[key]} - ${open ? 'Open' : 'Close'}`;
  const next = actions[clipName];
  if (!next) {
    console.warn(`Missing GLB animation clip: ${clipName}`);
    return;
  }
  const previous = lastAction[key];
  next.reset();
  next.enabled = true;
  next.setLoop(THREE.LoopOnce, 1);
  next.clampWhenFinished = true;
  next.setEffectiveWeight(1);
  next.setEffectiveTimeScale(1);
  next.play();
  if (previous && previous !== next) next.crossFadeFrom(previous, 0.12, false);
  lastAction[key] = next;
}
function resetVehicleView() {
  for (const key of partKeys) {
    canState[key] = null;
    if (partOpen[key]) setPart(key, false);
  }
  syncPill.textContent = modelReady ? 'CAN TRACE RESET' : 'WAITING FOR GLB';
}

window.setCanStates = function(states) {
  if (!states || typeof states !== 'object') return;
  for (const key of partKeys) {
    if (!(key in states)) continue;
    const value = states[key];
    if (value !== null && typeof value !== 'boolean') continue;
    const previousCanValue = canState[key];
    canState[key] = value;
    if (value === null) {
      // Scrubbing backwards before a signal first appeared returns that part to closed.
      if (previousCanValue !== null && partOpen[key]) setPart(key, false);
    } else {
      // The latest decoded CAN value is authoritative during trace playback.
      setPart(key, value);
    }
  }
  syncPill.textContent = 'CAN TRACE SYNCHRONIZED';
};
window.resetVehicleView = resetVehicleView;

window.loadVehicleModel = function(url, initialCanStates = null) {
  setLoading('LOADING GLB MODEL');
  loader.load(url, (gltf) => {
    if (root) scene.remove(root);
    root = gltf.scene;
    root.name = 'CAN Vehicle GLB';
    root.traverse(obj => {
      if (obj.isMesh) { obj.castShadow = true; obj.receiveShadow = true; }
    });
    scene.add(root);
    mixer = new THREE.AnimationMixer(root);
    actions = {};
    lastAction = {};
    for (const clip of gltf.animations) actions[clip.name] = mixer.clipAction(clip);
    modelReady = true;
    for (const key of partKeys) {
      partOpen[key] = false;
      canState[key] = null;
    }
    const box = new THREE.Box3().setFromObject(root);
    const center = box.getCenter(new THREE.Vector3());
    controls.target.set(center.x, Math.max(.6, center.y), center.z);
    const size = box.getSize(new THREE.Vector3());
    camera.position.set(center.x + Math.max(7,size.x*.9), center.y + Math.max(3,size.y*1.5), center.z + Math.max(7,size.x*1.0));
    controls.update();
    setModelStatus('LOADED · 10 CLIPS');
    setLoading('', false);
    if (initialCanStates) window.setCanStates(initialCanStates);
    if (gltf.animations.length < 10) console.warn('Expected 10 panel animations; found', gltf.animations.length);
  }, (progress) => {
    if (progress.total) setLoading(`LOADING GLB ${Math.round(progress.loaded/progress.total*100)}%`);
  }, (error) => {
    console.error(error);
    setModelStatus('LOAD FAILED · CHECK GLB', true);
    setLoading('COULD NOT LOAD MODEL — SELECT A VALID ANIMATED GLB');
  });
};

for (const button of document.querySelectorAll('[data-camera]')) button.addEventListener('click', () => {
  const view = presets[button.dataset.camera];
  cameraTween = {fromP:camera.position.clone(),toP:new THREE.Vector3(...view.p),fromT:controls.target.clone(),toT:new THREE.Vector3(...view.t),time:0,duration:.6};
  document.querySelectorAll('[data-camera]').forEach(b=>b.classList.toggle('active',b===button));
});

function resize() {
  const w = mount.clientWidth, h = mount.clientHeight;
  if (!w || !h) return;
  camera.aspect = w/h; camera.updateProjectionMatrix(); renderer.setSize(w,h,false);
}
new ResizeObserver(resize).observe(mount); resize();
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), .05);
  if (mixer) mixer.update(dt);
  if (cameraTween) {
    cameraTween.time += dt;
    const t = Math.min(cameraTween.time/cameraTween.duration,1), e=1-Math.pow(1-t,3);
    camera.position.lerpVectors(cameraTween.fromP,cameraTween.toP,e);
    controls.target.lerpVectors(cameraTween.fromT,cameraTween.toT,e);
    if (t>=1) cameraTween=null;
  }
  controls.update(); renderer.render(scene,camera);
}
animate();
setLoading('WAITING FOR GLB MODEL');
