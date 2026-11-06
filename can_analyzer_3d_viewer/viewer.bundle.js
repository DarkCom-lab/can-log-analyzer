YªçŠx-®éÜj×¢ëiºÚ+Š§j[h‘éÜ¢éíã¿:çÏ:ëNxo+^²‰¢¶×(() => {
  // node_modules/three/build/three.core.js
  var REVISION = "180";
  var MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
  var TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
  var CullFaceNone = 0;
  var CullFaceBack = 1;
  var CullFaceFront = 2;
  var PCFShadowMap = 1;
  var PCFSoftShadowMap = 2;
  var VSMShadowMap = 3;
  var FrontSide = 0;
  var BackSide = 1;
  var DoubleSide = 2;
  var NoBlending = 0;
  var NormalBlending = 1;
  var AdditiveBlending = 2;
  var SubtractiveBlending = 3;
  var MultiplyBlending = 4;
  var CustomBlending = 5;
  var AddEquation = 100;
  var SubtractEquation = 101;
  var ReverseSubtractEquation = 102;
  var MinEquation = 103;
  var MaxEquation = 104;
  var ZeroFactor = 200;
  var OneFactor = 201;
  var SrcColorFactor = 202;
  var OneMinusSrcColorFactor = 203;
  var SrcAlphaFactor = 204;
  var OneMinusSrcAlphaFactor = 205;
  var DstAlphaFactor = 206;
  var OneMinusDstAlphaFactor = 207;
  var DstColorFactor = 208;
  var OneMinusDstColorFactor = 209;
  var SrcAlphaSaturateFactor = 210;
  var ConstantColorFactor = 211;
  var OneMinusConstantColorFactor = 212;
  var ConstantAlphaFactor = 213;
  var OneMinusConstantAlphaFactor = 214;
  var NeverDepth = 0;
  var AlwaysDepth = 1;
  var LessDepth = 2;
  var LessEqualDepth = 3;
  var EqualDepth = 4;
  var GreaterEqualDepth = 5;
  var GreaterDepth = 6;
  var NotEqualDepth = 7;
  var MultiplyOperation = 0;
  var MixOperation = 1;
  var AddOperation = 2;
  var NoToneMapping = 0;
  var LinearToneMapping = 1;
  var ReinhardToneMapping = 2;
  var CineonToneMapping = 3;
  var ACESFilmicToneMapping = 4;
  var CustomToneMapping = 5;
  var AgXToneMapping = 6;
  var NeutralToneMapping = 7;
  var AttachedBindMode = "attached";
  var DetachedBindMode = "detached";
  var UVMapping = 300;
  var CubeReflectionMapping = 301;
  var CubeRefractionMapping = 302;
  var EquirectangularReflectionMapping = 303;
  var EquirectangularRefractionMapping = 304;
  var CubeUVReflectionMapping = 306;
  var RepeatWrapping = 1e3;
  var ClampToEdgeWrapping = 1001;
  var MirroredRepeatWrapping = 1002;
  var NearestFilter = 1003;
  var NearestMipmapNearestFilter = 1004;
  var NearestMipmapLinearFilter = 1005;
  var LinearFilter = 1006;
  var LinearMipmapNearestFilter = 1007;
  var LinearMipmapLinearFilter = 1008;
  var UnsignedByteType = 1009;
  var ByteType = 1010;
  var ShortType = 1011;
  var UnsignedShortType = 1012;
  var IntType = 1013;
  var UnsignedIntType = 1014;
  var FloatType = 1015;
  var HalfFloatType = 1016;
  var UnsignedShort4444Type = 1017;
  var UnsignedShort5551Type = 1018;
  var UnsignedInt248Type = 1020;
  var UnsignedInt5999Type = 35902;
  var UnsignedInt101111Type = 35899;
  var AlphaFormat = 1021;
  var RGBFormat = 1022;
  var RGBAFormat = 1023;
  var DepthFormat = 1026;
  var DepthStencilFormat = 1027;
  var RedFormat = 1028;
  var RedIntegerFormat = 1029;
  var RGFormat = 1030;
  var RGIntegerFormat = 1031;
  var RGBAIntegerFormat = 1033;
  var RGB_S3TC_DXT1_Format = 33776;
  var RGBA_S3TC_DXT1_Format = 33777;
  var RGBA_S3TC_DXT3_Format = 33778;
  var RGBA_S3TC_DXT5_Format = 33779;
  var RGB_PVRTC_4BPPV1_Format = 35840;
  var RGB_PVRTC_2BPPV1_Format = 35841;
  var RGBA_PVRTC_4BPPV1_Format = 35842;
  var RGBA_PVRTC_2BPPV1_Format = 35843;
  var RGB_ETC1_Format = 36196;
  var RGB_ETC2_Format = 37492;
  var RGBA_ETC2_EAC_Format = 37496;
  var RGBA_ASTC_4x4_Format = 37808;
  var RGBA_ASTC_5x4_Format = 37809;
  var RGBA_ASTC_5x5_Format = 37810;
  var RGBA_ASTC_6x5_Format = 37811;
  var RGBA_ASTC_6x6_Format = 37812;
  var RGBA_ASTC_8x5_Format = 37813;
  var RGBA_ASTC_8x6_Format = 37814;
  var RGBA_ASTC_8x8_Format = 37815;
  var RGBA_ASTC_10x5_Format = 37816;
  var RGBA_ASTC_10x6_Format = 37817;
  var RGBA_ASTC_10x8_Format = 37818;
  var RGBA_ASTC_10x10_Format = 37819;
  var RGBA_ASTC_12x10_Format = 37820;
  var RGBA_ASTC_12x12_Format = 37821;
  var RGBA_BPTC_Format = 36492;
  var RGB_BPTC_SIGNED_Format = 36494;
  var RGB_BPTC_UNSIGNED_Format = 36495;
  var RED_RGTC1_Format = 36283;
  var SIGNED_RED_RGTC1_Format = 36284;
  var RED_GREEN_RGTC2_Format = 36285;
  var SIGNED_RED_GREEN_RGTC2_Format = 36286;
  var LoopOnce = 2200;
  var LoopRepeat = 2201;
  var LoopPingPong = 2202;
  var InterpolateDiscrete = 2300;
  var InterpolateLinear = 2301;
  var InterpolateSmooth = 2302;
  var ZeroCurvatureEnding = 2400;
  var ZeroSlopeEnding = 2401;
  var WrapAroundEnding = 2402;
  var NormalAnimationBlendMode = 2500;
  var AdditiveAnimationBlendMode = 2501;
  var TrianglesDrawMode = 0;
  var TriangleStripDrawMode = 1;
  var TriangleFanDrawMode = 2;
  var BasicDepthPacking = 3200;
  var RGBADepthPacking = 3201;
  var TangentSpaceNormalMap = 0;
  var ObjectSpaceNormalMap = 1;
  var NoColorSpace = "";
  var SRGBColorSpace = "srgb";
  var LinearSRGBColorSpace = "srgb-linear";
  var LinearTransfer = "linear";
  var SRGBTransfer = "srgb";
  var KeepStencilOp = 7680;
  var AlwaysStencilFunc = 519;
  var NeverCompare = 512;
  var LessCompare = 513;
  var EqualCompare = 514;
  var LessEqualCompare = 515;
  var GreaterCompare = 516;
  var NotEqualCompare = 517;
  var GreaterEqualCompare = 518;
  var AlwaysCompare = 519;
  var StaticDrawUsage = 35044;
  var GLSL3 = "300 es";
  var WebGLCoordinateSystem = 2e3;
  var WebGPUCoordinateSystem = 2001;
  var EventDispatcher = class {
    /**
     * Adds the given event listener to the given event type.
     *
     * @param {string} type - The type of event to listen to.
     * @param {Function} listener - The function that gets called when the event is fired.
     */
    addEventListener(type, listener) {
      if (this._listeners === void 0) this._listeners = {};
      const listeners = this._listeners;
      if (listeners[type] === void 0) {
        listeners[type] = [];
      }
      if (listeners[type].indexOf(listener) === -1) {
        listeners[type].push(listener);
      }
    }
    /**
     * Returns `true` if the given event listener has been added to the given event type.
     *
     * @param {string} type - The type of event.
     * @param {Function} listener - The listener to check.
     * @return {boolean} Whether the given event listener has been added to the given event type.
     */
    hasEventListener(type, listener) {
      const listeners = this._listeners;
      if (listeners === void 0) return false;
      return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
    }
    /**
     * Removes the given event listener from the given event type.
     *
     * @param {string} type - The type of event.
     * @param {Function} listener - The listener to remove.
     */
    removeEventListener(type, listener) {
      const listeners = this._listeners;
      if (listeners === void 0) return;
      const listenerArray = listeners[type];
      if (listenerArray !== void 0) {
        const index = listenerArray.indexOf(listener);
        if (index !== -1) {
          listenerArray.splice(index, 1);
        }
      }
    }
    /**
     * Dispatches an event object.
     *
     * @param {Object} event - The event that gets fired.
     */
    dispatchEvent(event) {
      const listeners = this._listeners;
      if (listeners === void 0) return;
      const listenerArray = listeners[event.type];
      if (listenerArray !== void 0) {
        event.target = this;
        const array = listenerArray.slice(0);
        for (let i = 0, l = array.length; i < l; i++) {
          array[i].call(this, event);
        }
        event.target = null;
      }
    }
  };
  var _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var _seed = 1234567;
  var DEG2RAD = Math.PI / 180;
  var RAD2DEG = 180 / Math.PI;
  function generateUUID() {
    const d0 = Math.random() * 4294967295 | 0;
    const d1 = Math.random() * 4294967295 | 0;
    const d2 = Math.random() * 4294967295 | 0;
    const d3 = Math.random() * 4294967295 | 0;
    const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
    return uuid.toLowerCase();
  }
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function euclideanModulo(n, m) {
    return (n % m + m) % m;
  }
  function mapLinear(x, a1, a2, b1, b2) {
    return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
  }
  function inverseLerp(x, y, value) {
    if (x !== y) {
      return (value - x) / (y - x);
    } else {
      return 0;
    }
  }
  function lerp(x, y, t) {
    return (1 - t) * x + t * y;
  }
  function damp(x, y, lambda, dt) {
    return lerp(x, y, 1 - Math.exp(-lambda * dt));
  }
  function pingpong(x, length = 1) {
    return length - Math.abs(euclideanModulo(x, length * 2) - length);
  }
  function smoothstep(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
  }
  function smootherstep(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
  }
  function randInt(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
  }
  function randFloat(low, high) {
    return low + Math.random() * (high - low);
  }
  function randFloatSpread(range) {
    return range * (0.5 - Math.random());
  }
  function seededRandom(s) {
    if (s !== void 0) _seed = s;
    let t = _seed += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  function degToRad(degrees) {
    return degrees * DEG2RAD;
  }
  function radToDeg(radians) {
    return radians * RAD2DEG;
  }
  function isPowerOfTwo(value) {
    return (value & value - 1) === 0 && value !== 0;
  }
  function ceilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
  }
  function floorPowerOfTwo(value) {
    return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
  }
  function setQuaternionFromProperEuler(q, a, b, c, order) {
    const cos = Math.cos;
    const sin = Math.sin;
    const c2 = cos(b / 2);
    const s2 = sin(b / 2);
    const c13 = cos((a + c) / 2);
    const s13 = sin((a + c) / 2);
    const c1_3 = cos((a - c) / 2);
    const s1_3 = sin((a - c) / 2);
    const c3_1 = cos((c - a) / 2);
    const s3_1 = sin((c - a) / 2);
    switch (order) {
      case "XYX":
        q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
        break;
      case "YZY":
        q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
        break;
      case "ZXZ":
        q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
        break;
      case "XZX":
        q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
        break;
      case "YXY":
        q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
        break;
      case "ZYZ":
        q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + order);
    }
  }
  function denormalize(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint32Array:
        return value / 4294967295;
      case Uint16Array:
        return value / 65535;
      case Uint8Array:
        return value / 255;
      case Int32Array:
        return Math.max(value / 2147483647, -1);
      case Int16Array:
        return Math.max(value / 32767, -1);
      case Int8Array:
        return Math.max(value / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function normalize(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint32Array:
        return Math.round(value * 4294967295);
      case Uint16Array:
        return Math.round(value * 65535);
      case Uint8Array:
        return Math.round(value * 255);
      case Int32Array:
        return Math.round(value * 2147483647);
      case Int16Array:
        return Math.round(value * 32767);
      case Int8Array:
        return Math.round(value * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var MathUtils = {
    DEG2RAD,
    RAD2DEG,
    /**
     * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
     * (universally unique identifier).
     *
     * @static
     * @method
     * @return {string} The UUID.
     */
    generateUUID,
    /**
     * Clamps the given value between min and max.
     *
     * @static
     * @method
     * @param {number} value - The value to clamp.
     * @param {number} min - The min value.
     * @param {number} max - The max value.
     * @return {number} The clamped value.
     */
    clamp,
    /**
     * Computes the Euclidean modulo of the given parameters that
     * is `( ( n % m ) + m ) % m`.
     *
     * @static
     * @method
     * @param {number} n - The first parameter.
     * @param {number} m - The second parameter.
     * @return {number} The Euclidean modulo.
     */
    euclideanModulo,
    /**
     * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
     * for the given value.
     *
     * @static
     * @method
     * @param {number} x - The value to be mapped.
     * @param {number} a1 - Minimum value for range A.
     * @param {number} a2 - Maximum value for range A.
     * @param {number} b1 - Minimum value for range B.
     * @param {number} b2 - Maximum value for range B.
     * @return {number} The mapped value.
     */
    mapLinear,
    /**
     * Returns the percentage in the closed interval `[0, 1]` of the given value
     * between the start and end point.
     *
     * @static
     * @method
     * @param {number} x - The start point
     * @param {number} y - The end point.
     * @param {number} value - A value between start and end.
     * @return {number} The interpolation factor.
     */
    inverseLerp,
    /**
     * Returns a value linearly interpolated from two known points based on the given interval -
     * `t = 0` will return `x` and `t = 1` will return `y`.
     *
     * @static
     * @method
     * @param {number} x - The start point
     * @param {number} y - The end point.
     * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
     * @return {number} The interpolated value.
     */
    lerp,
    /**
     * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
     * time to maintain frame rate independent movement. For details, see
     * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
     *
     * @static
     * @method
     * @param {number} x - The current point.
     * @param {number} y - The target point.
     * @param {number} lambda - A higher lambda value will make the movement more sudden,
     * and a lower value will make the movement more gradual.
     * @param {number} dt - Delta time in seconds.
     * @return {number} The interpolated value.
     */
    damp,
    /**
     * Returns a value that alternates between `0` and the given `length` parameter.
     *
     * @static
     * @method
     * @param {number} x - The value to pingpong.
     * @param {number} [length=1] - The positive value the function will pingpong to.
     * @return {number} The alternated value.
     */
    pingpong,
    /**
     * Returns a value in the range `[0,1]` that represents the percentage that `x` has
     * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
     * the `min` and `max`.
     *
     * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
     *
     * @static
     * @method
     * @param {number} x - The value to evaluate based on its position between min and max.
     * @param {number} min - The min value. Any x value below min will be `0`.
     * @param {number} max - The max value. Any x value above max will be `1`.
     * @return {number} The alternated value.
     */
    smoothstep,
    /**
     * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
     * that has zero 1st and 2nd order derivatives at x=0 and x=1.
     *
     * @static
     * @method
     * @param {number} x - The value to evaluate based on its position between min and max.
     * @param {number} min - The min value. Any x value below min will be `0`.
     * @param {number} max - The max value. Any x value above max will be `1`.
     * @return {number} The alternated value.
     */
    smootherstep,
    /**
     * Returns a random integer from `<low, high>` interval.
     *
     * @static
     * @method
     * @param {number} low - The lower value boundary.
     * @param {number} high - The upper value boundary
     * @return {number} A random integer.
     */
    randInt,
    /**
     * Returns a random float from `<low, high>` interval.
     *
     * @static
     * @method
     * @param {number} low - The lower value boundary.
     * @param {number} high - The upper value boundary
     * @return {number} A random float.
     */
    randFloat,
    /**
     * Returns a random integer from `<-range/2, range/2>` interval.
     *
     * @static
     * @method
     * @param {number} range - Defines the value range.
     * @return {number} A random float.
     */
    randFloatSpread,
    /**
     * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
     *
     * @static
     * @method
     * @param {number} [s] - The integer seed.
     * @return {number} A random float.
     */
    seededRandom,
    /**
     * Converts degrees to radians.
     *
     * @static
     * @method
     * @param {number} degrees - A value in degrees.
     * @return {number} The converted value in radians.
     */
    degToRad,
    /**
     * Converts radians to degrees.
     *
     * @static
     * @method
     * @param {number} radians - A value in radians.
     * @return {number} The converted value in degrees.
     */
    radToDeg,
    /**
     * Returns `true` if the given number is a power of two.
     *
     * @static
     * @method
     * @param {number} value - The value to check.
     * @return {boolean} Whether the given number is a power of two or not.
     */
    isPowerOfTwo,
    /**
     * Returns the smallest power of two that is greater than or equal to the given number.
     *
     * @static
     * @method
     * @param {number} value - The value to find a POT for.
     * @return {number} The smallest power of two that is greater than or equal to the given number.
     */
    ceilPowerOfTwo,
    /**
     * Returns the largest power of two that is less than or equal to the given number.
     *
     * @static
     * @method
     * @param {number} value - The value to find a POT for.
     * @return {number} The largest power of two that is less than or equal to the given number.
     */
    floorPowerOfTwo,
    /**
     * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
     * defined by the given angles and order.
     *
     * Rotations are applied to the axes in the order specified by order:
     * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
     *
     * @static
     * @method
     * @param {Quaternion} q - The quaternion to set.
     * @param {number} a - The rotation applied to the first axis, in radians.
     * @param {number} b - The rotation applied to the second axis, in radians.
     * @param {number} c - The rotation applied to the third axis, in radians.
     * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
     */
    setQuaternionFromProperEuler,
    /**
     * Normalizes the given value according to the given typed array.
     *
     * @static
     * @method
     * @param {number} value - The float value in the range `[0,1]` to normalize.
     * @param {TypedArray} array - The typed array that defines the data type of the value.
     * @return {number} The normalize value.
     */
    normalize,
    /**
     * Denormalizes the given value according to the given typed array.
     *
     * @static
     * @method
     * @param {number} value - The value to denormalize.
     * @param {TypedArray} array - The typed array that defines the data type of the value.
     * @return {number} The denormalize (float) value in the range `[0,1]`.
     */
    denormalize
  };
  var Vector2 = class _Vector2 {
    /**
     * Constructs a new 2D vector.
     *
     * @param {number} [x=0] - The x value of this vector.
     * @param {number} [y=0] - The y value of this vector.
     */
    constructor(x = 0, y = 0) {
      _Vector2.prototype.isVector2 = true;
      this.x = x;
      this.y = y;
    }
    /**
     * Alias for {@link Vector2#x}.
     *
     * @type {number}
     */
    get width() {
      return this.x;
    }
    set width(value) {
      this.x = value;
    }
    /**
     * Alias for {@link Vector2#y}.
     *
     * @type {number}
     */
    get height() {
      return this.y;
    }
    set height(value) {
      this.y = value;
    }
    /**
     * Sets the vector components.
     *
     * @param {number} x - The value of the x component.
     * @param {number} y - The value of the y component.
     * @return {Vector2} A reference to this vector.
     */
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    /**
     * Sets the vector components to the same value.
     *
     * @param {number} scalar - The value to set for all vector components.
     * @return {Vector2} A reference to this vector.
     */
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      return this;
    }
    /**
     * Sets the vector's x component to the given value
     *
     * @param {number} x - The value to set.
     * @return {Vector2} A reference to this vector.
     */
    setX(x) {
      this.x = x;
      return this;
    }
    /**
     * Sets the vector's y component to the given value
     *
     * @param {number} y - The value to set.
     * @return {Vector2} A reference to this vector.
     */
    setY(y) {
      this.y = y;
      return this;
    }
    /**
     * Allows to set a vector component with an index.
     *
     * @param {number} index - The component index. `0` equals to x, `1` equals to y.
     * @param {number} value - The value to set.
     * @return {Vector2} A reference to this vector.
     */
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    /**
     * Returns the value of the vector component which matches the given index.
     *
     * @param {number} index - The component index. `0` equals to x, `1` equals to y.
     * @return {number} A vector component value.
     */
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    /**
     * Returns a new vector with copied values from this instance.
     *
     * @return {Vector2} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.x, this.y);
    }
    /**
     * Copies the values of the given vector to this instance.
     *
     * @param {Vector2} v - The vector to copy.
     * @return {Vector2} A reference to this vector.
     */
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector2} v - The vector to add.
     * @return {Vector2} A reference to this vector.
     */
    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
    /**
     * Adds the given scalar value to all components of this instance.
     *
     * @param {number} s - The scalar to add.
     * @return {Vector2} A reference to this vector.
     */
    addScalar(s) {
      this.x += s;
      this.y += s;
      return this;
    }
    /**
     * Adds the given vectors and stores the result in this instance.
     *
     * @param {Vector2} a - The first vector.
     * @param {Vector2} b - The second vector.
     * @return {Vector2} A reference to this vector.
     */
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      return this;
    }
    /**
     * Adds the given vector scaled by the given factor to this instance.
     *
     * @param {Vector2} v - The vector.
     * @param {number} s - The factor that scales `v`.
     * @return {Vector2} A reference to this vector.
     */
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      return this;
    }
    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector2} v - The vector to subtract.
     * @return {Vector2} A reference to this vector.
     */
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
    /**
     * Subtracts the given scalar value from all components of this instance.
     *
     * @param {number} s - The scalar to subtract.
     * @return {Vector2} A reference to this vector.
     */
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      return this;
    }
    /**
     * Subtracts the given vectors and stores the result in this instance.
     *
     * @param {Vector2} a - The first vector.
     * @param {Vector2} b - The second vector.
     * @return {Vector2} A reference to this vector.
     */
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      return this;
    }
    /**
     * Multiplies the given vector with this instance.
     *
     * @param {Vector2} v - The vector to multiply.
     * @return {Vector2} A reference to this vector.
     */
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      return this;
    }
    /**
     * Multiplies the given scalar value with all components of this instance.
     *
     * @param {number} scalar - The scalar to multiply.
     * @return {Vector2} A reference to this vector.
     */
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
    /**
     * Divides this instance by the given vector.
     *
     * @param {Vector2} v - The vector to divide.
     * @return {Vector2} A reference to this vector.
     */
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      return this;
    }
    /**
     * Divides this vector by the given scalar.
     *
     * @param {number} scalar - The scalar to divide.
     * @return {Vector2} A reference to this vector.
     */
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    /**
     * Multiplies this vector (with an implicit 1 as the 3rd component) by
     * the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to apply.
     * @return {Vector2} A reference to this vector.
     */
    applyMatrix3(m) {
      const x = this.x, y = this.y;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y + e[6];
      this.y = e[1] * x + e[4] * y + e[7];
      return this;
    }
    /**
     * If this vector's x or y value is greater than the given vector's x or y
     * value, replace that value with the corresponding min value.
     *
     * @param {Vector2} v - The vector.
     * @return {Vector2} A reference to this vector.
     */
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      return this;
    }
    /**
     * If this vector's x or y value is less than the given vector's x or y
     * value, replace that value with the corresponding max value.
     *
     * @param {Vector2} v - The vector.
     * @return {Vector2} A reference to this vector.
     */
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      return this;
    }
    /**
     * If this vector's x or y value is greater than the max vector's x or y
     * value, it is replaced by the corresponding value.
     * If this vector's x or y value is less than the min vector's x or y value,
     * it is replaced by the corresponding value.
     *
     * @param {Vector2} min - The minimum x and y values.
     * @param {Vector2} max - The maximum x and y values in the desired range.
     * @return {Vector2} A reference to this vector.
     */
    clamp(min, max) {
      this.x = clamp(this.x, min.x, max.x);
      this.y = clamp(this.y, min.y, max.y);
      return this;
    }
    /**
     * If this vector's x or y values are greater than the max value, they are
     * replaced by the max value.
     * If this vector's x or y values are less than the min value, they are
     * replaced by the min value.
     *
     * @param {number} minVal - The minimum value the components will be clamped to.
     * @param {number} maxVal - The maximum value the components will be clamped to.
     * @return {Vector2} A reference to this vector.
     */
    clampScalar(minVal, maxVal) {
      this.x = clamp(this.x, minVal, maxVal);
      this.y = clamp(this.y, minVal, maxVal);
      return this;
    }
    /**
     * If this vector's length is greater than the max value, it is replaced by
     * the max value.
     * If this vector's length is less than the min value, it is replaced by the
     * min value.
     *
     * @param {number} min - The minimum value the vector length will be clamped to.
     * @param {number} max - The maximum value the vector length will be clamped to.
     * @return {Vector2} A reference to this vector.
     */
    clampLength(min, max) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
    }
    /**
     * The components of this vector are rounded down to the nearest integer value.
     *
     * @return {Vector2} A reference to this vector.
     */
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
    /**
     * The components of this vector are rounded up to the nearest integer value.
     *
     * @return {Vector2} A reference to this vector.
     */
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    }
    /**
     * The components of this vector are rounded to the nearest integer value
     *
     * @return {Vector2} A reference to this vector.
     */
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    }
    /**
     * The components of this vector are rounded towards zero (up if negative,
     * down if positive) to an integer value.
     *
     * @return {Vector2} A reference to this vector.
     */
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      return this;
    }
    /**
     * Inverts this vector - i.e. sets x = -x and y = -y.
     *
     * @return {Vector2} A reference to this vector.
     */
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
    /**
     * Calculates the dot product of the given vector with this instance.
     *
     * @param {Vector2} v - The vector to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    /**
     * Calculates the cross product of the given vector with this instance.
     *
     * @param {Vector2} v - The vector to compute the cross product with.
     * @return {number} The result of the cross product.
     */
    cross(v) {
      return this.x * v.y - this.y * v.x;
    }
    /**
     * Computes the square of the Euclidean length (straight-line length) from
     * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
     * compare the length squared instead as it is slightly more efficient to calculate.
     *
     * @return {number} The square length of this vector.
     */
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    /**
     * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
     *
     * @return {number} The length of this vector.
     */
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Computes the Manhattan length of this vector.
     *
     * @return {number} The length of this vector.
     */
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    /**
     * Converts this vector to a unit vector - that is, sets it equal to a vector
     * with the same direction as this one, but with a vector length of `1`.
     *
     * @return {Vector2} A reference to this vector.
     */
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    /**
     * Computes the angle in radians of this vector with respect to the positive x-axis.
     *
     * @return {number} The angle in radians.
     */
    angle() {
      const angle = Math.atan2(-this.y, -this.x) + Math.PI;
      return angle;
    }
    /**
     * Returns the angle between the given vector and this instance in radians.
     *
     * @param {Vector2} v - The vector to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp(theta, -1, 1));
    }
    /**
     * Computes the distance from the given vector to this instance.
     *
     * @param {Vector2} v - The vector to compute the distance to.
     * @return {number} The distance.
     */
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    /**
     * Computes the squared distance from the given vector to this instance.
     * If you are just comparing the distance with another distance, you should compare
     * the distance squared instead as it is slightly more efficient to calculate.
     *
     * @param {Vector2} v - The vector to compute the squared distance to.
     * @return {number} The squared distance.
     */
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y;
      return dx * dx + dy * dy;
    }
    /**
     * Computes the Manhattan distance from the given vector to this instance.
     *
     * @param {Vector2} v - The vector to compute the Manhattan distance to.
     * @return {number} The Manhattan distance.
     */
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    /**
     * Sets this vector to a vector with the same direction as this one, but
     * with the specified length.
     *
     * @param {number} length - The new length of this vector.
     * @return {Vector2} A reference to this vector.
     */
    setLength(length) {
      return this.normalize().multiplyScalar(length);
    }
    /**
     * Linearly interpolates between the given vector and this instance, where
     * alpha is the percent distance along the line - alpha = 0 will be this
     * vector, and alpha = 1 will be the given one.
     *
     * @param {Vector2} v - The vector to interpolate towards.
     * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
     * @return {Vector2} A reference to this vector.
     */
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given vectors, where alpha is the percent
     * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
     * be the second one. The result is stored in this instance.
     *
     * @param {Vector2} v1 - The first vector.
     * @param {Vector2} v2 - The second vector.
     * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
     * @return {Vector2} A reference to this vector.
     */
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      return this;
    }
    /**
     * Returns `true` if this vector is equal with the given one.
     *
     * @param {Vector2} v - The vector to test for equality.
     * @return {boolean} Whether this vector is equal with the given one.
     */
    equals(v) {
      return v.x === this.x && v.y === this.y;
    }
    /**
     * Sets this vector's x value to be `array[ offset ]` and y
     * value to be `array[ offset + 1 ]`.
     *
     * @param {Array<number>} array - An array holding the vector component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Vector2} A reference to this vector.
     */
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      return this;
    }
    /**
     * Writes the components of this vector to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the vector components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The vector components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      return array;
    }
    /**
     * Sets the components of this vector from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
     * @param {number} index - The index into the attribute.
     * @return {Vector2} A reference to this vector.
     */
    fromBufferAttribute(attribute, index) {
      this.x = attribute.getX(index);
      this.y = attribute.getY(index);
      return this;
    }
    /**
     * Rotates this vector around the given center by the given angle.
     *
     * @param {Vector2} center - The point around which to rotate.
     * @param {number} angle - The angle to rotate, in radians.
     * @return {Vector2} A reference to this vector.
     */
    rotateAround(center, angle) {
      const c = Math.cos(angle), s = Math.sin(angle);
      const x = this.x - center.x;
      const y = this.y - center.y;
      this.x = x * c - y * s + center.x;
      this.y = x * s + y * c + center.y;
      return this;
    }
    /**
     * Sets each component of this vector to a pseudo-random value between `0` and
     * `1`, excluding `1`.
     *
     * @return {Vector2} A reference to this vector.
     */
    random() {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
    }
  };
  var Quaternion = class {
    /**
     * Constructs a new quaternion.
     *
     * @param {number} [x=0] - The x value of this quaternion.
     * @param {number} [y=0] - The y value of this quaternion.
     * @param {number} [z=0] - The z value of this quaternion.
     * @param {number} [w=1] - The w value of this quaternion.
     */
    constructor(x = 0, y = 0, z = 0, w = 1) {
      this.isQuaternion = true;
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
    }
    /**
     * Interpolates between two quaternions via SLERP. This implementation assumes the
     * quaternion data are managed  in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @param {number} t - The interpolation factor in the range `[0,1]`.
     * @see {@link Quaternion#slerp}
     */
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
      let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
      if (t === 0) {
        dst[dstOffset + 0] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return;
      }
      if (t === 1) {
        dst[dstOffset + 0] = x1;
        dst[dstOffset + 1] = y1;
        dst[dstOffset + 2] = z1;
        dst[dstOffset + 3] = w1;
        return;
      }
      if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
        let s = 1 - t;
        const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos >= 0 ? 1 : -1, sqrSin = 1 - cos * cos;
        if (sqrSin > Number.EPSILON) {
          const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
          s = Math.sin(s * len) / sin;
          t = Math.sin(t * len) / sin;
        }
        const tDir = t * dir;
        x0 = x0 * s + x1 * tDir;
        y0 = y0 * s + y1 * tDir;
        z0 = z0 * s + z1 * tDir;
        w0 = w0 * s + w1 * tDir;
        if (s === 1 - t) {
          const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
          x0 *= f;
          y0 *= f;
          z0 *= f;
          w0 *= f;
        }
      }
      dst[dstOffset] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
    }
    /**
     * Multiplies two quaternions. This implementation assumes the quaternion data are managed
     * in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @return {Array<number>} The destination array.
     * @see {@link Quaternion#multiplyQuaternions}.
     */
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
      const x0 = src0[srcOffset0];
      const y0 = src0[srcOffset0 + 1];
      const z0 = src0[srcOffset0 + 2];
      const w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1];
      const y1 = src1[srcOffset1 + 1];
      const z1 = src1[srcOffset1 + 2];
      const w1 = src1[srcOffset1 + 3];
      dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
      dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
      dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
      dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
      return dst;
    }
    /**
     * The x value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    /**
     * The y value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    /**
     * The z value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    /**
     * The w value of this quaternion.
     *
     * @type {number}
     * @default 1
     */
    get w() {
      return this._w;
    }
    set w(value) {
      this._w = value;
      this._onChangeCallback();
    }
    /**
     * Sets the quaternion components.
     *
     * @param {number} x - The x value of this quaternion.
     * @param {number} y - The y value of this quaternion.
     * @param {number} z - The z value of this quaternion.
     * @param {number} w - The w value of this quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    set(x, y, z, w) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Returns a new quaternion with copied values from this instance.
     *
     * @return {Quaternion} A clone of this instance.
     */
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    /**
     * Copies the values of the given quaternion to this instance.
     *
     * @param {Quaternion} quaternion - The quaternion to copy.
     * @return {Quaternion} A reference to this quaternion.
     */
    copy(quaternion) {
      this._x = quaternion.x;
      this._y = quaternion.y;
      this._z = quaternion.z;
      this._w = quaternion.w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the rotation specified by the given
     * Euler angles.
     *
     * @param {Euler} euler - The Euler angles.
     * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromEuler(euler, update = true) {
      const x = euler._x, y = euler._y, z = euler._z, order = euler._order;
      const cos = Math.cos;
      const sin = Math.sin;
      const c1 = cos(x / 2);
      const c2 = cos(y / 2);
      const c3 = cos(z / 2);
      const s1 = sin(x / 2);
      const s2 = sin(y / 2);
      const s3 = sin(z / 2);
      switch (order) {
        case "XYZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "YXZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "ZXY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "ZYX":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "YZX":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "XZY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
      }
      if (update === true) this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given axis and angle.
     *
     * @param {Vector3} axis - The normalized axis.
     * @param {number} angle - The angle in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromAxisAngle(axis, angle) {
      const halfAngle = angle / 2, s = Math.sin(halfAngle);
      this._x = axis.x * s;
      this._y = axis.y * s;
      this._z = axis.z * s;
      this._w = Math.cos(halfAngle);
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given rotation matrix.
     *
     * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromRotationMatrix(m) {
      const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
      if (trace > 0) {
        const s = 0.5 / Math.sqrt(trace + 1);
        this._w = 0.25 / s;
        this._x = (m32 - m23) * s;
        this._y = (m13 - m31) * s;
        this._z = (m21 - m12) * s;
      } else if (m11 > m22 && m11 > m33) {
        const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
        this._w = (m32 - m23) / s;
        this._x = 0.25 * s;
        this._y = (m12 + m21) / s;
        this._z = (m13 + m31) / s;
      } else if (m22 > m33) {
        const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
        this._w = (m13 - m31) / s;
        this._x = (m12 + m21) / s;
        this._y = 0.25 * s;
        this._z = (m23 + m32) / s;
      } else {
        const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
        this._w = (m21 - m12) / s;
        this._x = (m13 + m31) / s;
        this._y = (m23 + m32) / s;
        this._z = 0.25 * s;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion to the rotation required to rotate the direction vector
     * `vFrom` to the direction vector `vTo`.
     *
     * @param {Vector3} vFrom - The first (normalized) direction vector.
     * @param {Vector3} vTo - The second (normalized) direction vector.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromUnitVectors(vFrom, vTo) {
      let r = vFrom.dot(vTo) + 1;
      if (r < 1e-8) {
        r = 0;
        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          this._x = -vFrom.y;
          this._y = vFrom.x;
          this._z = 0;
          this._w = r;
        } else {
          this._x = 0;
          this._y = -vFrom.z;
          this._z = vFrom.y;
          this._w = r;
        }
      } else {
        this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
        this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
        this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
        this._w = r;
      }
      return this.normalize();
    }
    /**
     * Returns the angle between this quaternion and the given one in radians.
     *
     * @param {Quaternion} q - The quaternion to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(q) {
      return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
    }
    /**
     * Rotates this quaternion by a given angular step to the given quaternion.
     * The method ensures that the final quaternion will not overshoot `q`.
     *
     * @param {Quaternion} q - The target quaternion.
     * @param {number} step - The angular step in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    rotateTowards(q, step) {
      const angle = this.angleTo(q);
      if (angle === 0) return this;
      const t = Math.min(1, step / angle);
      this.slerp(q, t);
      return this;
    }
    /**
     * Sets this quaternion to the identity quaternion; that is, to the
     * quaternion that represents "no rotation".
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    identity() {
      return this.set(0, 0, 0, 1);
    }
    /**
     * Inverts this quaternion via {@link Quaternion#conjugate}. The
     * quaternion is assumed to have unit length.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    invert() {
      return this.conjugate();
    }
    /**
     * Returns the rotational conjugate of this quaternion. The conjugate of a
     * quaternion represents the same rotation in the opposite direction about
     * the rotational axis.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    conjugate() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
    /**
     * Calculates the dot product of this quaternion and the given one.
     *
     * @param {Quaternion} v - The quaternion to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
    }
    /**
     * Computes the squared Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector. This can be useful if you are comparing the
     * lengths of two quaternions, as this is a slightly more efficient calculation than
     * {@link Quaternion#length}.
     *
     * @return {number} The squared Euclidean length.
     */
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    /**
     * Computes the Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector.
     *
     * @return {number} The Euclidean length.
     */
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    /**
     * Normalizes this quaternion - that is, calculated the quaternion that performs
     * the same rotation as this one, but has a length equal to `1`.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    normalize() {
      let l = this.length();
      if (l === 0) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        l = 1 / l;
        this._x = this._x * l;
        this._y = this._y * l;
        this._z = this._z * l;
        this._w = this._w * l;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiply(q) {
      return this.multiplyQuaternions(this, q);
    }
    /**
     * Pre-multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    premultiply(q) {
      return this.multiplyQuaternions(q, this);
    }
    /**
     * Multiplies the given quaternions and stores the result in this instance.
     *
     * @param {Quaternion} a - The first quaternion.
     * @param {Quaternion} b - The second quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiplyQuaternions(a, b) {
      const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
      const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
      this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between quaternions.
     *
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerp(qb, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(qb);
      const x = this._x, y = this._y, z = this._z, w = this._w;
      let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
      if (cosHalfTheta < 0) {
        this._w = -qb._w;
        this._x = -qb._x;
        this._y = -qb._y;
        this._z = -qb._z;
        cosHalfTheta = -cosHalfTheta;
      } else {
        this.copy(qb);
      }
      if (cosHalfTheta >= 1) {
        this._w = w;
        this._x = x;
        this._y = y;
        this._z = z;
        return this;
      }
      const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
      if (sqrSinHalfTheta <= Number.EPSILON) {
        const s = 1 - t;
        this._w = s * w + t * this._w;
        this._x = s * x + t * this._x;
        this._y = s * y + t * this._y;
        this._z = s * z + t * this._z;
        this.normalize();
        return this;
      }
      const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
      const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
      const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
      this._w = w * ratioA + this._w * ratioB;
      this._x = x * ratioA + this._x * ratioB;
      this._y = y * ratioA + this._y * ratioB;
      this._z = z * ratioA + this._z * ratioB;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between the given quaternions
     * and stores the result in this quaternion.
     *
     * @param {Quaternion} qa - The source quaternion.
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerpQuaternions(qa, qb, t) {
      return this.copy(qa).slerp(qb, t);
    }
    /**
     * Sets this quaternion to a uniformly random, normalized quaternion.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    random() {
      const theta1 = 2 * Math.PI * Math.random();
      const theta2 = 2 * Math.PI * Math.random();
      const x0 = Math.random();
      const r1 = Math.sqrt(1 - x0);
      const r2 = Math.sqrt(x0);
      return this.set(
        r1 * Math.sin(theta1),
        r1 * Math.cos(theta1),
        r2 * Math.sin(theta2),
        r2 * Math.cos(theta2)
      );
    }
    /**
     * Returns `true` if this quaternion is equal with the given one.
     *
     * @param {Quaternion} quaternion - The quaternion to test for equality.
     * @return {boolean} Whether this quaternion is equal with the given one.
     */
    equals(quaternion) {
      return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
    }
    /**
     * Sets this quaternion's components from the given array.
     *
     * @param {Array<number>} array - An array holding the quaternion component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromArray(array, offset = 0) {
      this._x = array[offset];
      this._y = array[offset + 1];
      this._z = array[offset + 2];
      this._w = array[offset + 3];
      this._onChangeCallback();
      return this;
    }
    /**
     * Writes the components of this quaternion to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The quaternion components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._w;
      return array;
    }
    /**
     * Sets the components of this quaternion from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
     * @param {number} index - The index into the attribute.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromBufferAttribute(attribute, index) {
      this._x = attribute.getX(index);
      this._y = attribute.getY(index);
      this._z = attribute.getZ(index);
      this._w = attribute.getW(index);
      this._onChangeCallback();
      return this;
    }
    /**
     * This methods defines the serialization result of this class. Returns the
     * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
     *
     * @return {Array<number>} The serialized quaternion.
     */
    toJSON() {
      return this.toArray();
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._w;
    }
  };
  var Vector3 = class _Vector3 {
    /**
     * Constructs a new 3D vector.
     *
     * @param {number} [x=0] - The x value of this vector.
     * @param {number} [y=0] - The y value of this vector.
     * @param {number} [z=0] - The z value of this vector.
     */
    constructor(x = 0, y = 0, z = 0) {
      _Vector3.prototype.isVector3 = true;
      this.x = x;
      this.y = y;
      this.z = z;
    }
    /**
     * Sets the vector components.
     *
     * @param {number} x - The value of the x component.
     * @param {number} y - The value of the y component.
     * @param {number} z - The value of the z component.
     * @return {Vector3} A reference to this vector.
     */
    set(x, y, z) {
      if (z === void 0) z = this.z;
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    /**
     * Sets the vector components to the same value.
     *
     * @param {number} scalar - The value to set for all vector components.
     * @return {Vector3} A reference to this vector.
     */
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      return this;
    }
    /**
     * Sets the vector's x component to the given value
     *
     * @param {number} x - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setX(x) {
      this.x = x;
      return this;
    }
    /**
     * Sets the vector's y component to the given value
     *
     * @param {number} y - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setY(y) {
      this.y = y;
      return this;
    }
    /**
     * Sets the vector's z component to the given value
     *
     * @param {number} z - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setZ(z) {
      this.z = z;
      return this;
    }
    /**
     * Allows to set a vector component with an index.
     *
     * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
     * @param {number} value - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    /**
     * Returns the value of the vector component which matches the given index.
     *
     * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
     * @return {number} A vector component value.
     */
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    /**
     * Returns a new vector with copied values from this instance.
     *
     * @return {Vector3} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    /**
     * Copies the values of the given vector to this instance.
     *
     * @param {Vector3} v - The vector to copy.
     * @return {Vector3} A reference to this vector.
     */
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector3} v - The vector to add.
     * @return {Vector3} A reference to this vector.
     */
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    /**
     * Adds the given scalar value to all components of this instance.
     *
     * @param {number} s - The scalar to add.
     * @return {Vector3} A reference to this vector.
     */
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      return this;
    }
    /**
     * Adds the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    }
    /**
     * Adds the given vector scaled by the given factor to this instance.
     *
     * @param {Vector3|Vector4} v - The vector.
     * @param {number} s - The factor that scales `v`.
     * @return {Vector3} A reference to this vector.
     */
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
    }
    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector3} v - The vector to subtract.
     * @return {Vector3} A reference to this vector.
     */
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    /**
     * Subtracts the given scalar value from all components of this instance.
     *
     * @param {number} s - The scalar to subtract.
     * @return {Vector3} A reference to this vector.
     */
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      return this;
    }
    /**
     * Subtracts the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    }
    /**
     * Multiplies the given vector with this instance.
     *
     * @param {Vector3} v - The vector to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }
    /**
     * Multiplies the given scalar value with all components of this instance.
     *
     * @param {number} scalar - The scalar to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    /**
     * Multiplies the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    multiplyVectors(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    }
    /**
     * Applies the given Euler rotation to this vector.
     *
     * @param {Euler} euler - The Euler angles.
     * @return {Vector3} A reference to this vector.
     */
    applyEuler(euler) {
      return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
    }
    /**
     * Applies a rotation specified by an axis and an angle to this vector.
     *
     * @param {Vector3} axis - A normalized vector representing the rotation axis.
     * @param {number} angle - The angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    applyAxisAngle(axis, angle) {
      return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
    }
    /**
     * Multiplies this vector with the given 3x3 matrix.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix3(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y + e[6] * z;
      this.y = e[1] * x + e[4] * y + e[7] * z;
      this.z = e[2] * x + e[5] * y + e[8] * z;
      return this;
    }
    /**
     * Multiplies this vector by the given normal matrix and normalizes
     * the result.
     *
     * @param {Matrix3} m - The normal matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyNormalMatrix(m) {
      return this.applyMatrix3(m).normalize();
    }
    /**
     * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
     * divides by perspective.
     *
     * @param {Matrix4} m - The matrix to apply.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix4(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
      this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
      this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
      this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
      return this;
    }
    /**
     * Applies the given Quaternion to this vector.
     *
     * @param {Quaternion} q - The Quaternion.
     * @return {Vector3} A reference to this vector.
     */
    applyQuaternion(q) {
      const vx = this.x, vy = this.y, vz = this.z;
      const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      const tx = 2 * (qy * vz - qz * vy);
      const ty = 2 * (qz * vx - qx * vz);
      const tz = 2 * (qx * vy - qy * vx);
      this.x = vx + qw * tx + qy * tz - qz * ty;
      this.y = vy + qw * ty + qz * tx - qx * tz;
      this.z = vz + qw * tz + qx * ty - qy * tx;
      return this;
    }
    /**
     * Projects this vector from world space into the camera's normalized
     * device coordinate (NDC) space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    project(camera2) {
      return this.applyMatrix4(camera2.matrixWorldInverse).applyMatrix4(camera2.projectionMatrix);
    }
    /**
     * Unprojects this vector from the camera's normalized device coordinate (NDC)
     * space into world space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    unproject(camera2) {
      return this.applyMatrix4(camera2.projectionMatrixInverse).applyMatrix4(camera2.matrixWorld);
    }
    /**
     * Transforms the direction of this vector by a matrix (the upper left 3 x 3
     * subset of the given 4x4 matrix and then normalizes the result.
     *
     * @param {Matrix4} m - The matrix.
     * @return {Vector3} A reference to this vector.
     */
    transformDirection(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[4] * y + e[8] * z;
      this.y = e[1] * x + e[5] * y + e[9] * z;
      this.z = e[2] * x + e[6] * y + e[10] * z;
      return this.normalize();
    }
    /**
     * Divides this instance by the given vector.
     *
     * @param {Vector3} v - The vector to divide.
     * @return {Vector3} A reference to this vector.
     */
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    /**
     * Divides this vector by the given scalar.
     *
     * @param {number} scalar - The scalar to divide.
     * @return {Vector3} A reference to this vector.
     */
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    /**
     * If this vector's x, y or z value is greater than the given vector's x, y or z
     * value, replace that value with the corresponding min value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is less than the given vector's x, y or z
     * value, replace that value with the corresponding max value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is greater than the max vector's x, y or z
     * value, it is replaced by the corresponding value.
     * If this vector's x, y or z value is less than the min vector's x, y or z value,
     * it is replaced by the corresponding value.
     *
     * @param {Vector3} min - The minimum x, y and z values.
     * @param {Vector3} max - The maximum x, y and z values in the desired range.
     * @return {Vector3} A reference to this vector.
     */
    clamp(min, max) {
      this.x = clamp(this.x, min.x, max.x);
      this.y = clamp(this.y, min.y, max.y);
      this.z = clamp(this.z, min.z, max.z);
      return this;
    }
    /**
     * If this vector's x, y or z values are greater than the max value, they are
     * replaced by the max value.
     * If this vector's x, y or z values are less than the min value, they are
     * replaced by the min value.
     *
     * @param {number} minVal - The minimum value the components will be clamped to.
     * @param {number} maxVal - The maximum value the components will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampScalar(minVal, maxVal) {
      this.x = clamp(this.x, minVal, maxVal);
      this.y = clamp(this.y, minVal, maxVal);
      this.z = clamp(this.z, minVal, maxVal);
      return this;
    }
    /**
     * If this vector's length is greater than the max value, it is replaced by
     * the max value.
     * If this vector's length is less than the min value, it is replaced by the
     * min value.
     *
     * @param {number} min - The minimum value the vector length will be clamped to.
     * @param {number} max - The maximum value the vector length will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampLength(min, max) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
    }
    /**
     * The components of this vector are rounded down to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded up to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded to the nearest integer value
     *
     * @return {Vector3} A reference to this vector.
     */
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded towards zero (up if negative,
     * down if positive) to an integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      return this;
    }
    /**
     * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
     *
     * @return {Vector3} A reference to this vector.
     */
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
    /**
     * Calculates the dot product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    // TODO lengthSquared?
    /**
     * Computes the square of the Euclidean length (straight-line length) from
     * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
     * compare the length squared instead as it is slightly more efficient to calculate.
     *
     * @return {number} The square length of this vector.
     */
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
     *
     * @return {number} The length of this vector.
     */
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * Computes the Manhattan length of this vector.
     *
     * @return {number} The length of this vector.
     */
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    /**
     * Converts this vector to a unit vector - that is, sets it equal to a vector
     * with the same direction as this one, but with a vector length of `1`.
     *
     * @return {Vector3} A reference to this vector.
     */
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    /**
     * Sets this vector to a vector with the same direction as this one, but
     * with the specified length.
     *
     * @param {number} length - The new length of this vector.
     * @return {Vector3} A reference to this vector.
     */
    setLength(length) {
      return this.normalize().multiplyScalar(length);
    }
    /**
     * Linearly interpolates between the given vector and this instance, where
     * alpha is the percent distance along the line - alpha = 0 will be this
     * vector, and alpha = 1 will be the given one.
     *
     * @param {Vector3} v - The vector to interpolate towards.
     * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
     * @return {Vector3} A reference to this vector.
     */
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given vectors, where alpha is the percent
     * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
     * be the second one. The result is stored in this instance.
     *
     * @param {Vector3} v1 - The first vector.
     * @param {Vector3} v2 - The second vector.
     * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
     * @return {Vector3} A reference to this vector.
     */
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      return this;
    }
    /**
     * Calculates the cross product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the cross product with.
     * @return {Vector3} The result of the cross product.
     */
    cross(v) {
      return this.crossVectors(this, v);
    }
    /**
     * Calculates the cross product of the given vectors and stores the result
     * in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    crossVectors(a, b) {
      const ax = a.x, ay = a.y, az = a.z;
      const bx = b.x, by = b.y, bz = b.z;
      this.x = ay * bz - az * by;
      this.y = az * bx - ax * bz;
      this.z = ax * by - ay * bx;
      return this;
    }
    /**
     * Projects this vector onto the given one.
     *
     * @param {Vector3} v - The vector to project to.
     * @return {Vector3} A reference to this vector.
     */
    projectOnVector(v) {
      const denominator = v.lengthSq();
      if (denominator === 0) return this.set(0, 0, 0);
      const scalar = v.dot(this) / denominator;
      return this.copy(v).multiplyScalar(scalar);
    }
    /**
     * Projects this vector onto a plane by subtracting this
     * vector projected onto the plane's normal from this vector.
     *
     * @param {Vector3} planeNormal - The plane normal.
     * @return {Vector3} A reference to this vector.
     */
    projectOnPlane(planeNormal) {
      _vector$c.copy(this).projectOnVector(planeNormal);
      return this.sub(_vector$c);
    }
    /**
     * Reflects this vector off a plane orthogonal to the given normal vector.
     *
     * @param {Vector3} normal - The (normalized) normal vector.
     * @return {Vector3} A reference to this vector.
     */
    reflect(normal) {
      return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    /**
     * Returns the angle between the given vector and this instance in radians.
     *
     * @param {Vector3} v - The vector to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp(theta, -1, 1));
    }
    /**
     * Computes the distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the distance to.
     * @return {number} The distance.
     */
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    /**
     * Computes the squared distance from the given vector to this instance.
     * If you are just comparing the distance with another distance, you should compare
     * the distance squared instead as it is slightly more efficient to calculate.
     *
     * @param {Vector3} v - The vector to compute the squared distance to.
     * @return {number} The squared distance.
     */
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    }
    /**
     * Computes the Manhattan distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the Manhattan distance to.
     * @return {number} The Manhattan distance.
     */
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {Spherical} s - The spherical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromSpherical(s) {
      return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} phi - The phi angle in radians.
     * @param {number} theta - The theta angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    setFromSphericalCoords(radius, phi, theta) {
      const sinPhiRadius = Math.sin(phi) * radius;
      this.x = sinPhiRadius * Math.sin(theta);
      this.y = Math.cos(phi) * radius;
      this.z = sinPhiRadius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {Cylindrical} c - The cylindrical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindrical(c) {
      return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} theta - The theta angle in radians.
     * @param {number} y - The y value.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindricalCoords(radius, theta, y) {
      this.x = radius * Math.sin(theta);
      this.y = y;
      this.z = radius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components to the position elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    }
    /**
     * Sets the vector components to the scale elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixScale(m) {
      const sx = this.setFromMatrixColumn(m, 0).length();
      const sy = this.setFromMatrixColumn(m, 1).length();
      const sz = this.setFromMatrixColumn(m, 2).length();
      this.x = sx;
      this.y = sy;
      this.z = sz;
      return this;
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixColumn(m, index) {
      return this.fromArray(m.elements, index * 4);
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrix3Column(m, index) {
      return this.fromArray(m.elements, index * 3);
    }
    /**
     * Sets the vector components from the given Euler angles.
     *
     * @param {Euler} e - The Euler angles to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromEuler(e) {
      this.x = e._x;
      this.y = e._y;
      this.z = e._z;
      return this;
    }
    /**
     * Sets the vector components from the RGB components of the
     * given color.
     *
     * @param {Color} c - The color to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromColor(c) {
      this.x = c.r;
      this.y = c.g;
      this.z = c.b;
      return this;
    }
    /**
     * Returns `true` if this vector is equal with the given one.
     *
     * @param {Vector3} v - The vector to test for equality.
     * @return {boolean} Whether this vector is equal with the given one.
     */
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z;
    }
    /**
     * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
     * and z value to be `array[ offset + 2 ]`.
     *
     * @param {Array<number>} array - An array holding the vector component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Vector3} A reference to this vector.
     */
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      return this;
    }
    /**
     * Writes the components of this vector to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the vector components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The vector components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      return array;
    }
    /**
     * Sets the components of this vector from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
     * @param {number} index - The index into the attribute.
     * @return {Vector3} A reference to this vector.
     */
    fromBufferAttribute(attribute, index) {
      this.x = attribute.getX(index);
      this.y = attribute.getY(index);
      this.z = attribute.getZ(index);
      return this;
    }
    /**
     * Sets each component of this vector to a pseudo-random value between `0` and
     * `1`, excluding `1`.
     *
     * @return {Vector3} A reference to this vector.
     */
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
    /**
     * Sets this vector to a uniformly random point on a unit sphere.
     *
     * @return {Vector3} A reference to this vector.
     */
    randomDirection() {
      const theta = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1;
      const c = Math.sqrt(1 - u * u);
      this.x = c * Math.cos(theta);
      this.y = u;
      this.z = c * Math.sin(theta);
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
    }
  };
  var _vector$c = /* @__PURE__ */ new Vector3();
  var _quaternion$4 = /* @__PURE__ */ new Quaternion();
  var Matrix3 = class _Matrix3 {
    /**
     * Constructs a new 3x3 matrix. The arguments are supposed to be
     * in row-major order. If no arguments are provided, the constructor
     * initializes the matrix as an identity matrix.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     */
    constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      _Matrix3.prototype.isMatrix3 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
      }
    }
    /**
     * Sets the elements of the matrix.The arguments are supposed to be
     * in row-major order.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     * @return {Matrix3} A reference to this matrix.
     */
    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      const te = this.elements;
      te[0] = n11;
      te[1] = n21;
      te[2] = n31;
      te[3] = n12;
      te[4] = n22;
      te[5] = n32;
      te[6] = n13;
      te[7] = n23;
      te[8] = n33;
      return this;
    }
    /**
     * Sets this matrix to the 3x3 identity matrix.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Copies the values of the given matrix to this instance.
     *
     * @param {Matrix3} m - The matrix to copy.
     * @return {Matrix3} A reference to this matrix.
     */
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      return this;
    }
    /**
     * Extracts the basis of this matrix into the three axis vectors provided.
     *
     * @param {Vector3} xAxis - The basis's x axis.
     * @param {Vector3} yAxis - The basis's y axis.
     * @param {Vector3} zAxis - The basis's z axis.
     * @return {Matrix3} A reference to this matrix.
     */
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrix3Column(this, 0);
      yAxis.setFromMatrix3Column(this, 1);
      zAxis.setFromMatrix3Column(this, 2);
      return this;
    }
    /**
     * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    setFromMatrix4(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[4],
        me[8],
        me[1],
        me[5],
        me[9],
        me[2],
        me[6],
        me[10]
      );
      return this;
    }
    /**
     * Post-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    /**
     * Pre-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    /**
     * Multiples the given 3x3 matrices and stores the result
     * in this matrix.
     *
     * @param {Matrix3} a - The first matrix.
     * @param {Matrix3} b - The second matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[3], a13 = ae[6];
      const a21 = ae[1], a22 = ae[4], a23 = ae[7];
      const a31 = ae[2], a32 = ae[5], a33 = ae[8];
      const b11 = be[0], b12 = be[3], b13 = be[6];
      const b21 = be[1], b22 = be[4], b23 = be[7];
      const b31 = be[2], b32 = be[5], b33 = be[8];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31;
      te[3] = a11 * b12 + a12 * b22 + a13 * b32;
      te[6] = a11 * b13 + a12 * b23 + a13 * b33;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31;
      te[4] = a21 * b12 + a22 * b22 + a23 * b32;
      te[7] = a21 * b13 + a22 * b23 + a23 * b33;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31;
      te[5] = a31 * b12 + a32 * b22 + a33 * b32;
      te[8] = a31 * b13 + a32 * b23 + a33 * b33;
      return this;
    }
    /**
     * Multiplies every component of the matrix by the given scalar.
     *
     * @param {number} s - The scalar.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[3] *= s;
      te[6] *= s;
      te[1] *= s;
      te[4] *= s;
      te[7] *= s;
      te[2] *= s;
      te[5] *= s;
      te[8] *= s;
      return this;
    }
    /**
     * Computes and returns the determinant of this matrix.
     *
     * @return {number} The determinant.
     */
    determinant() {
      const te = this.elements;
      const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
      return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
    }
    /**
     * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
     * You can not invert with a determinant of zero. If you attempt this, the method produces
     * a zero matrix instead.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n31 * n23 - n33 * n21) * detInv;
      te[2] = (n32 * n21 - n31 * n22) * detInv;
      te[3] = t12 * detInv;
      te[4] = (n33 * n11 - n31 * n13) * detInv;
      te[5] = (n31 * n12 - n32 * n11) * detInv;
      te[6] = t13 * detInv;
      te[7] = (n21 * n13 - n23 * n11) * detInv;
      te[8] = (n22 * n11 - n21 * n12) * detInv;
      return this;
    }
    /**
     * Transposes this matrix in place.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    transpose() {
      let tmp;
      const m = this.elements;
      tmp = m[1];
      m[1] = m[3];
      m[3] = tmp;
      tmp = m[2];
      m[2] = m[6];
      m[6] = tmp;
      tmp = m[5];
      m[5] = m[7];
      m[7] = tmp;
      return this;
    }
    /**
     * Computes the normal matrix which is the inverse transpose of the upper
     * left 3x3 portion of the given 4x4 matrix.
     *
     * @param {Matrix4} matrix4 - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    getNormalMatrix(matrix4) {
      return this.setFromMatrix4(matrix4).invert().transpose();
    }
    /**
     * Transposes this matrix into the supplied array, and returns itself unchanged.
     *
     * @param {Array<number>} r - An array to store the transposed matrix elements.
     * @return {Matrix3} A reference to this matrix.
     */
    transposeIntoArray(r) {
      const m = this.elements;
      r[0] = m[0];
      r[1] = m[3];
      r[2] = m[6];
      r[3] = m[1];
      r[4] = m[4];
      r[5] = m[7];
      r[6] = m[2];
      r[7] = m[5];
      r[8] = m[8];
      return this;
    }
    /**
     * Sets the UV transform matrix from offset, repeat, rotation, and center.
     *
     * @param {number} tx - Offset x.
     * @param {number} ty - Offset y.
     * @param {number} sx - Repeat x.
     * @param {number} sy - Repeat y.
     * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
     * @param {number} cx - Center x of rotation.
     * @param {number} cy - Center y of rotation
     * @return {Matrix3} A reference to this matrix.
     */
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
      const c = Math.cos(rotation);
      const s = Math.sin(rotation);
      this.set(
        sx * c,
        sx * s,
        -sx * (c * cx + s * cy) + cx + tx,
        -sy * s,
        sy * c,
        -sy * (-s * cx + c * cy) + cy + ty,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Scales this matrix with the given scalar values.
     *
     * @param {number} sx - The amount to scale in the X axis.
     * @param {number} sy - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    scale(sx, sy) {
      this.premultiply(_m3.makeScale(sx, sy));
      return this;
    }
    /**
     * Rotates this matrix by the given angle.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    rotate(theta) {
      this.premultiply(_m3.makeRotation(-theta));
      return this;
    }
    /**
     * Translates this matrix by the given scalar values.
     *
     * @param {number} tx - The amount to translate in the X axis.
     * @param {number} ty - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    translate(tx, ty) {
      this.premultiply(_m3.makeTranslation(tx, ty));
      return this;
    }
    // for 2D Transforms
    /**
     * Sets this matrix as a 2D translation transform.
     *
     * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
     * @param {number} y - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeTranslation(x, y) {
      if (x.isVector2) {
        this.set(
          1,
          0,
          x.x,
          0,
          1,
          x.y,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          x,
          0,
          1,
          y,
          0,
          0,
          1
        );
      }
      return this;
    }
    /**
     * Sets this matrix as a 2D rotational transformation.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    makeRotation(theta) {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        s,
        c,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Sets this matrix as a 2D scale transform.
     *
     * @param {number} x - The amount to scale in the X axis.
     * @param {number} y - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeScale(x, y) {
      this.set(
        x,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Returns `true` if this matrix is equal with the given one.
     *
     * @param {Matrix3} matrix - The matrix to test for equality.
     * @return {boolean} Whether this matrix is equal with the given one.
     */
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i = 0; i < 9; i++) {
        if (te[i] !== me[i]) return false;
      }
      return true;
    }
    /**
     * Sets the elements of the matrix from the given array.
     *
     * @param {Array<number>} array - The matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Matrix3} A reference to this matrix.
     */
    fromArray(array, offset = 0) {
      for (let i = 0; i < 9; i++) {
        this.elements[i] = array[i + offset];
      }
      return this;
    }
    /**
     * Writes the elements of this matrix to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The matrix elements in column-major order.
     */
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      return array;
    }
    /**
     * Returns a matrix with copied values from this instance.
     *
     * @return {Matrix3} A clone of this instance.
     */
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var _m3 = /* @__PURE__ */ new Matrix3();
  function arrayNeedsUint32(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      if (array[i] >= 65535) return true;
    }
    return false;
  }
  function createElementNS(name) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", name);
  }
  function createCanvasElement() {
    const canvas = createElementNS("canvas");
    canvas.style.display = "block";
    return canvas;
  }
  var _cache = {};
  function warnOnce(message) {
    if (message in _cache) return;
    _cache[message] = true;
    console.warn(message);
  }
  function probeAsync(gl, sync, interval) {
    return new Promise(function(resolve, reject) {
      function probe() {
        switch (gl.clientWaitSync(sync, gl.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case gl.WAIT_FAILED:
            reject();
            break;
          case gl.TIMEOUT_EXPIRED:
            setTimeout(probe, interval);
            break;
          default:
            resolve();
        }
      }
      setTimeout(probe, interval);
    });
  }
  var LINEAR_REC709_TO_XYZ = /* @__PURE__ */ new Matrix3().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  );
  var XYZ_TO_LINEAR_REC709 = /* @__PURE__ */ new Matrix3().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
  function createColorManagement() {
    const ColorManagement2 = {
      enabled: true,
      workingColorSpace: LinearSRGBColorSpace,
      /**
       * Implementations of supported color spaces.
       *
       * Required:
       *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
       *	- whitePoint: reference white [ x y ]
       *	- transfer: transfer function (pre-defined)
       *	- toXYZ: Matrix3 RGB to XYZ transform
       *	- fromXYZ: Matrix3 XYZ to RGB transform
       *	- luminanceCoefficients: RGB luminance coefficients
       *
       * Optional:
       *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
       *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
       *
       * Reference:
       * - https://www.russellcottrell.com/photo/matrixCalculator.htm
       */
      spaces: {},
      convert: function(color, sourceColorSpace, targetColorSpace) {
        if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
          return color;
        }
        if (this.spaces[sourceColorSpace].transfer === SRGBTransfer) {
          color.r = SRGBToLinear(color.r);
          color.g = SRGBToLinear(color.g);
          color.b = SRGBToLinear(color.b);
        }
        if (this.spaces[sourceColorSpace].primaries !== this.spaces[targetColorSpace].primaries) {
          color.applyMatrix3(this.spaces[sourceColorSpace].toXYZ);
          color.applyMatrix3(this.spaces[targetColorSpace].fromXYZ);
        }
        if (this.spaces[targetColorSpace].transfer === SRGBTransfer) {
          color.r = LinearToSRGB(color.r);
          color.g = LinearToSRGB(color.g);
          color.b = LinearToSRGB(color.b);
        }
        return color;
      },
      workingToColorSpace: function(color, targetColorSpace) {
        return this.convert(color, this.workingColorSpace, targetColorSpace);
      },
      colorSpaceToWorking: function(color, sourceColorSpace) {
        return this.convert(color, sourceColorSpace, this.workingColorSpace);
      },
      getPrimaries: function(colorSpace) {
        return this.spaces[colorSpace].primaries;
      },
      getTransfer: function(colorSpace) {
        if (colorSpace === NoColorSpace) return LinearTransfer;
        return this.spaces[colorSpace].transfer;
      },
      getToneMappingMode: function(colorSpace) {
        return this.spaces[colorSpace].outputColorSpaceConfig.toneMappingMode || "standard";
      },
      getLuminanceCoefficients: function(target, colorSpace = this.workingColorSpace) {
        return target.fromArray(this.spaces[colorSpace].luminanceCoefficients);
      },
      define: function(colorSpaces) {
        Object.assign(this.spaces, colorSpaces);
      },
      // Internal APIs
      _getMatrix: function(targetMatrix, sourceColorSpace, targetColorSpace) {
        return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ);
      },
      _getDrawingBufferColorSpace: function(colorSpace) {
        return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function(colorSpace = this.workingColorSpace) {
        return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace;
      },
      // Deprecated
      fromWorkingColorSpace: function(color, targetColorSpace) {
        warnOnce("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
        return ColorManagement2.workingToColorSpace(color, targetColorSpace);
      },
      toWorkingColorSpace: function(color, sourceColorSpace) {
        warnOnce("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
        return ColorManagement2.colorSpaceToWorking(color, sourceColorSpace);
      }
    };
    const REC709_PRIMARIES = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
    const REC709_LUMINANCE_COEFFICIENTS = [0.2126, 0.7152, 0.0722];
    const D65 = [0.3127, 0.329];
    ColorManagement2.define({
      [LinearSRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: LinearTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      },
      [SRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: SRGBTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      }
    });
    return ColorManagement2;
  }
  var ColorManagement = /* @__PURE__ */ createColorManagement();
  function SRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function LinearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  var _canvas;
  var ImageUtils = class {
    /**
     * Returns a data URI containing a representation of the given image.
     *
     * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
     * @param {string} [type='image/png'] - Indicates the image format.
     * @return {string} The data URI.
     */
    static getDataURL(image, type = "image/png") {
      if (/^data:/i.test(image.src)) {
        return image.src;
      }
      if (typeof HTMLCanvasElement === "undefined") {
        return image.src;
      }
      let canvas;
      if (image instanceof HTMLCanvasElement) {
        canvas = image;
      } else {
        if (_canvas === void 0) _canvas = createElementNS("canvas");
        _canvas.width = image.width;
        _canvas.height = image.height;
        const context = _canvas.getContext("2d");
        if (image instanceof ImageData) {
          context.putImageData(image, 0, 0);
        } else {
          context.drawImage(image, 0, 0, image.width, image.height);
        }
        canvas = _canvas;
      }
      return canvas.toDataURL(type);
    }
    /**
     * Converts the given sRGB image data to linear color space.
     *
     * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
     * @return {HTMLCanvasElement|Object} The converted image.
     */
    static sRGBToLinear(image) {
      if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        const canvas = createElementNS("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(0, 0, image.width, image.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i++) {
          data[i] = SRGBToLinear(data[i] / 255) * 255;
        }
        context.putImageData(imageData, 0, 0);
        return canvas;
      } else if (image.data) {
        const data = image.data.slice(0);
        for (let i = 0; i < data.length; i++) {
          if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
            data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
          } else {
            data[i] = SRGBToLinear(data[i]);
          }
        }
        return {
          data,
          width: image.width,
          height: image.height
        };
      } else {
        console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
        return image;
      }
    }
  };
  var _sourceId = 0;
  var Source = class {
    /**
     * Constructs a new video texture.
     *
     * @param {any} [data=null] - The data definition of a texture.
     */
    constructor(data = null) {
      this.isSource = true;
      Object.defineProperty(this, "id", { value: _sourceId++ });
      this.uuid = generateUUID();
      this.data = data;
      this.dataReady = true;
      this.version = 0;
    }
    /**
     * Returns the dimensions of the source into the given target vector.
     *
     * @param {(Vector2|Vector3)} target - The target object the result is written into.
     * @return {(Vector2|Vector3)} The dimensions of the source.
     */
    getSize(target) {
      const data = this.data;
      if (typeof HTMLVideoElement !== "undefined" && data instanceof HTMLVideoElement) {
        target.set(data.videoWidth, data.videoHeight, 0);
      } else if (data instanceof VideoFrame) {
        target.set(data.displayHeight, data.displayWidth, 0);
      } else if (data !== null) {
        target.set(data.width, data.height, data.depth || 0);
      } else {
        target.set(0, 0, 0);
      }
      return target;
    }
    /**
     * When the property is set to `true`, the engine allocates the memory
     * for the texture (if necessary) and triggers the actual texture upload
     * to the GPU next time the source is used.
     *
     * @type {boolean}
     * @default false
     * @param {boolean} value
     */
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    /**
     * Serializes the source into JSON.
     *
     * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
     * @return {Object} A JSON object representing the serialized source.
     * @see {@link ObjectLoader#parse}
     */
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.images[this.uuid] !== void 0) {
        return meta.images[this.uuid];
      }
      const output = {
        uuid: this.uuid,
        url: ""
      };
      const data = this.data;
      if (data !== null) {
        let url;
        if (Array.isArray(data)) {
          url = [];
          for (let i = 0, l = data.length; i < l; i++) {
            if (data[i].isDataTexture) {
              url.push(serializeImage(data[i].image));
            } else {
              url.push(serializeImage(data[i]));
            }
          }
        } else {
          url = serializeImage(data);
        }
        output.url = url;
      }
      if (!isRootObject) {
        meta.images[this.uuid] = output;
      }
      return output;
    }
  };
  function serializeImage(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      return ImageUtils.getDataURL(image);
    } else {
      if (image.data) {
        return {
          data: Array.from(image.data),
          width: image.width,
          height: image.height,
          type: image.data.constructor.name
        };
      } else {
        console.warn("THREE.Texture: Unable to serialize Texture.");
        return {};
      }
    }
  }
  var _textureId = 0;
  var _tempVec3 = /* @__PURE__ */ new Vector3();
  var Texture = class _Texture extends EventDispatcher {
    /**
     * Constructs a new texture.
     *
     * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
     * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
     * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
     * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
     * @param {number} [magFilter=LinearFilter] - The mag filter value.
     * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
     * @param {number} [format=RGBAFormat] - The texture format.
     * @param {number} [type=UnsignedByteType] - The texture type.
     * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
     * @param {string} [colorSpace=NoColorSpace] - The color space.
     */
    constructor(image = _Texture.DEFAULT_IMAGE, mapping = _Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = _Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
      super();
      this.isTexture = true;
      Object.defineProperty(this, "id", { value: _textureId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.source = new Source(image);
      this.mipmaps = [];
      this.mapping = mapping;
      this.channel = 0;
      this.wrapS = wrapS;
      this.wrapT = wrapT;
      this.magFilter = magFilter;
      this.minFilter = minFilter;
      this.anisotropy = anisotropy;
      this.format = format;
      this.internalFormat = null;
      this.type = type;
      this.offset = new Vector2(0, 0);
      this.repeat = new Vector2(1, 1);
      this.center = new Vector2(0, 0);
      this.rotation = 0;
      this.matrixAutoUpdate = true;
      this.matrix = new Matrix3();
      this.generateMipmaps = true;
      this.premultiplyAlpha = false;
      this.flipY = true;
      this.unpackAlignment = 4;
      this.colorSpace = colorSpace;
      this.userData = {};
      this.updateRanges = [];
      this.version = 0;
      this.onUpdate = null;
      this.renderTarget = null;
      this.isRenderTargetTexture = false;
      this.isArrayTexture = image && image.depth && image.depth > 1 ? true : false;
      this.pmremVersion = 0;
    }
    /**
     * The width of the texture in pixels.
     */
    get width() {
      return this.source.getSize(_tempVec3).x;
    }
    /**
     * The height of the texture in pixels.
     */
    get height() {
      return this.source.getSize(_tempVec3).y;
    }
    /**
     * The depth of the texture in pixels.
     */
    get depth() {
      return this.source.getSize(_tempVec3).z;
    }
    /**
     * The image object holding the texture data.
     *
     * @type {?Object}
     */
    get image() {
      return this.source.data;
    }
    set image(value = null) {
      this.source.data = value;
    }
    /**
     * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
     * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
     */
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    /**
     * Adds a range of data in the data texture to be updated on the GPU.
     *
     * @param {number} start - Position at which to start update.
     * @param {number} count - The number of components to update.
     */
    addUpdateRange(start, count) {
      this.updateRanges.push({ start, count });
    }
    /**
     * Clears the update ranges.
     */
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    /**
     * Returns a new texture with copied values from this instance.
     *
     * @return {Texture} A clone of this instance.
     */
    clone() {
      return new this.constructor().copy(this);
    }
    /**
     * Copies the values of the given texture to this instance.
     *
     * @param {Texture} source - The texture to copy.
     * @return {Texture} A reference to this instance.
     */
    copy(source) {
      this.name = source.name;
      this.source = source.source;
      this.mipmaps = source.mipmaps.slice(0);
      this.mapping = source.mapping;
      this.channel = source.channel;
      this.wrapS = source.wrapS;
      this.wrapT = source.wrapT;
      this.magFilter = source.magFilter;
      this.minFilter = source.minFilter;
      this.anisotropy = source.anisotropy;
      this.format = source.format;
      this.internalFormat = source.internalFormat;
      this.type = source.type;
      this.offset.copy(source.offset);
      this.repeat.copy(source.repeat);
      this.center.copy(source.center);
      this.rotation = source.rotation;
      this.matrixAutoUpdate = source.matrixAutoUpdate;
      this.matrix.copy(source.matrix);
      this.generateMipmaps = source.generateMipmaps;
      this.premultiplyAlpha = source.premultiplyAlpha;
      this.flipY = source.flipY;
      this.unpackAlignment = source.unpackAlignment;
      this.colorSpace = source.colorSpace;
      this.renderTarget = source.renderTarget;
      this.isRenderTargetTexture = source.isRenderTargetTexture;
      this.isArrayTexture = source.isArrayTexture;
      this.userData = JSON.parse(JSON.stringify(source.userData));
      this.needsUpdate = true;
      return this;
    }
    /**
     * Sets this texture's properties based on `values`.
     * @param {Object} values - A container with texture parameters.
     */
    setValues(values) {
      for (const key2 in values) {
        const newValue = values[key2];
        if (newValue === void 0) {
          console.warn(`THREE.Texture.setValues(): parameter '${key2}' has value of undefined.`);
          continue;
        }
        const currentValue = this[key2];
        if (currentValue === void 0) {
          console.warn(`THREE.Texture.setValues(): property '${key2}' does not exist.`);
          continue;
        }
        if (currentValue && newValue && (currentValue.isVector2 && newValue.isVector2)) {
          currentValue.copy(newValue);
        } else if (currentValue && newValue && (currentValue.isVector3 && newValue.isVector3)) {
          currentValue.copy(newValue);
        } else if (currentValue && newValue && (currentValue.isMatrix3 && newValue.isMatrix3)) {
          currentValue.copy(newValue);
        } else {
          this[key2] = newValue;
        }
      }
    }
    /**
     * Serializes the texture into JSON.
     *
     * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
     * @return {Object} A JSON object representing the serialized texture.
     * @see {@link ObjectLoader#parse}
     */
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.textures[this.uuid] !== void 0) {
        return meta.textures[this.uuid];
      }
      const output = {
        metadata: {
          version: 4.7,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(meta).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      if (Object.keys(this.userData).length > 0) output.userData = this.userData;
      if (!isRootObject) {
        meta.textures[this.uuid] = output;
      }
      return output;
    }
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     *
     * @fires Texture#dispose
     */
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    /**
     * Transforms the given uv vector with the textures uv transformation matrix.
     *
     * @param {Vector2} uv - The uv vector.
     * @return {Vector2} The transformed uv vector.
     */
    transformUv(uv) {
      if (this.mapping !== UVMapping) return uv;
      uv.applyMatrix3(this.matrix);
      if (uv.x < 0 || uv.x > 1) {
        switch (this.wrapS) {
          case RepeatWrapping:
            uv.x = uv.x - Math.floor(uv.x);
            break;
          case ClampToEdgeWrapping:
            uv.x = uv.x < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv.x) % 2) === 1) {
              uv.x = Math.ceil(uv.x) - uv.x;
            } else {
              uv.x = uv.x - Math.floor(uv.x);
            }
            break;
        }
      }
      if (uv.y < 0 || uv.y > 1) {
        switch (this.wrapT) {
          case RepeatWrapping:
            uv.y = uv.y - Math.floor(uv.y);
            break;
          case ClampToEdgeWrapping:
            uv.y = uv.y < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv.y) % 2) === 1) {
              uv.y = Math.ceil(uv.y) - uv.y;
            } else {
              uv.y = uv.y - Math.floor(uv.y);
            }
            break;
        }
      }
      if (this.flipY) {
        uv.y = 1 - uv.y;
      }
      return uv;
    }
    /**
     * Setting this property to `true` indicates the engine the texture
     * must be updated in the next render. This triggers a texture upload
     * to the GPU and ensures correct texture parameter configuration.
     *
     * @type {boolean}
     * @default false
     * @param {boolean} value
     */
    set needsUpdate(value) {
      if (value === true) {
        this.version++;
        this.source.needsUpdate = true;
      }
    }
    /**
     * Setting this property to `true` indicates the engine the PMREM
     * must be regenerated.
     *
     * @type {boolean}
     * @default false
     * @param {boolean} value
     */
    set needsPMREMUpdate(value) {
      if (value === true) {
        this.pmremVersion++;
      }
    }
  };
  Texture.DEFAULT_IMAGE = null;
  Texture.DEFAULT_MAPPING = UVMapping;
  Texture.DEFAULT_ANISOTROPY = 1;
  var Vector4 = class _Vector4 {
    /**
     * Constructs a new 4D vector.
     *
     * @param {number} [x=0] - The x value of this vector.
     * @param {number} [y=0] - The y value of this vector.
     * @param {number} [z=0] - The z value of this vector.
     * @param {number} [w=1] - The w value of this vector.
     */
    constructor(x = 0, y = 0, z = 0, w = 1) {
      _Vector4.prototype.isVector4 = true;
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }
    /**
     * Alias for {@link Vector4#z}.
     *
     * @type {number}
     */
    get width() {
      return this.z;
    }
    set width(value) {
      this.z = value;
    }
    /**
     * Alias for {@link Vector4#w}.
     *
     * @type {number}
     */
    get height() {
      return this.w;
    }
    set height(value) {
      this.w = value;
    }
    /**
     * Sets the vector components.
     *
     * @param {number} x - The value of the x component.
     * @param {number} y - The value of the y component.
     * @param {number} z - The value of the z component.
     * @param {number} w - The value of the w component.
     * @return {Vector4} A reference to this vector.
     */
    set(x, y, z, w) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    }
    /**
     * Sets the vector components to the same value.
     *
     * @param {number} scalar - The value to set for all vector components.
     * @return {Vector4} A reference to this vector.
     */
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      this.w = scalar;
      return this;
    }
    /**
     * Sets the vector's x component to the given value
     *
     * @param {number} x - The value to set.
     * @return {Vector4} A reference to this vector.
     */
    setX(x) {
      this.x = x;
      return this;
    }
    /**
     * Sets the vector's y component to the given value
     *
     * @param {number} y - The value to set.
     * @return {Vector4} A reference to this vector.
     */
    setY(y) {
      this.y = y;
      return this;
    }
    /**
     * Sets the vector's z component to the given value
     *
     * @param {number} z - The value to set.
     * @return {Vector4} A reference to this vector.
     */
    setZ(z) {
      this.z = z;
      return this;
    }
    /**
     * Sets the vector's w component to the given value
     *
     * @param {number} w - The value to set.
     * @return {Vector4} A reference to this vector.
     */
    setW(w) {
      this.w = w;
      return this;
    }
    /**
     * Allows to set a vector component with an index.
     *
     * @param {number} index - The component index. `0` equals to x, `1` equals to y,
     * `2` equals to z, `3` equals to w.
     * @param {number} value - The value to set.
     * @return {Vector4} A reference to this vector.
     */
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        case 3:
          this.w = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    /**
     * Returns the value of the vector component which matches the given index.
     *
     * @param {number} index - The component index. `0` equals to x, `1` equals to y,
     * `2` equals to z, `3` equals to w.
     * @return {number} A vector component value.
     */
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    /**
     * Returns a new vector with copied values from this instance.
     *
     * @return {Vector4} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    /**
     * Copies the values of the given vector to this instance.
     *
     * @param {Vector3|Vector4} v - The vector to copy.
     * @return {Vector4} A reference to this vector.
     */
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      this.w = v.w !== void 0 ? v.w : 1;
      return this;
    }
    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector4} v - The vector to add.
     * @return {Vector4} A reference to this vector.
     */
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      this.w += v.w;
      return this;
    }
    /**
     * Adds the given scalar value to all components of this instance.
     *
     * @param {number} s - The scalar to add.
     * @return {Vector4} A reference to this vector.
     */
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      this.w += s;
      return this;
    }
    /**
     * Adds the given vectors and stores the result in this instance.
     *
     * @param {Vector4} a - The first vector.
     * @param {Vector4} b - The second vector.
     * @return {Vector4} A reference to this vector.
     */
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      this.w = a.w + b.w;
      return this;
    }
    /**
     * Adds the given vector scaled by the given factor to this instance.
     *
     * @param {Vector4} v - The vector.
     * @param {number} s - The factor that scales `v`.
     * @return {Vector4} A reference to this vector.
     */
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      this.w += v.w * s;
      return this;
    }
    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector4} v - The vector to subtract.
     * @return {Vector4} A reference to this vector.
     */
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      this.w -= v.w;
      return this;
    }
    /**
     * Subtracts the given scalar value from all components of this instance.
     *
     * @param {number} s - The scalar to subtract.
     * @return {Vector4} A reference to this vector.
     */
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      this.w -= s;
      return this;
    }
    /**
     * Subtracts the given vectors and stores the result in this instance.
     *
     * @param {Vector4} a - The first vector.
     * @param {Vector4} b - The second vector.
     * @return {Vector4} A reference to this vector.
     */
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      this.w = a.w - b.w;
      return this;
    }
    /**
     * Multiplies the given vector with this instance.
     *
     * @param {Vector4} v - The vector to multiply.
     * @return {Vector4} A reference to this vector.
     */
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      this.w *= v.w;
      return this;
    }
    /**
     * Multiplies the given scalar value with all components of this instance.
     *
     * @param {number} scalar - The scalar to multiply.
     * @return {Vector4} A reference to this vector.
     */
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      this.w *= scalar;
      return this;
    }
    /**
     * Multiplies this vector with the given 4x4 matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector4} A reference to this vector.
     */
    applyMatrix4(m) {
      const x = this.x, y = this.y, z = this.z, w = this.w;
      const e = m.elements;
      this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
      this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
      this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
      this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
      return this;
    }
    /**
     * Divides this instance by the given vector.
     *
     * @param {Vector4} v - The vector to divide.
     * @return {Vector4} A reference to this vector.
     */
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      this.w /= v.w;
      return this;
    }
    /**
     * Divides this vector by the given scalar.
     *
     * @param {number} scalar - The scalar to divide.
     * @return {Vector4} A reference to this vector.
     */
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    /**
     * Sets the x, y and z components of this
     * vector to the quaternion's axis and w to the angle.
     *
     * @param {Quaternion} q - The Quaternion to set.
     * @return {Vector4} A reference to this vector.
     */
    setAxisAngleFromQuaternion(q) {
      this.w = 2 * Math.acos(q.w);
      const s = Math.sqrt(1 - q.w * q.w);
      if (s < 1e-4) {
        this.x = 1;
        this.y = 0;
        this.z = 0;
      } else {
        this.x = q.x / s;
        this.y = q.y / s;
        this.z = q.z / s;
      }
      return this;
    }
    /**
     * Sets the x, y and z components of this
     * vector to the axis of rotation and w to the angle.
     *
     * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
     * @return {Vector4} A reference to this vector.
     */
    setAxisAngleFromRotationMatrix(m) {
      let angle, x, y, z;
      const epsilon = 0.01, epsilon2 = 0.1, te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
      if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
        if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
          this.set(1, 0, 0, 0);
          return this;
        }
        angle = Math.PI;
        const xx = (m11 + 1) / 2;
        const yy = (m22 + 1) / 2;
        const zz = (m33 + 1) / 2;
        const xy = (m12 + m21) / 4;
        const xz = (m13 + m31) / 4;
        const yz = (m23 + m32) / 4;
        if (xx > yy && xx > zz) {
          if (xx < epsilon) {
            x = 0;
            y = 0.707106781;
            z = 0.707106781;
          } else {
            x = Math.sqrt(xx);
            y = xy / x;
            z = xz / x;
          }
        } else if (yy > zz) {
          if (yy < epsilon) {
            x = 0.707106781;
            y = 0;
            z = 0.707106781;
          } else {
            y = Math.sqrt(yy);
            x = xy / y;
            z = yz / y;
          }
        } else {
          if (zz < epsilon) {
            x = 0.707106781;
            y = 0.707106781;
            z = 0;
          } else {
            z = Math.sqrt(zz);
            x = xz / z;
            y = yz / z;
          }
        }
        this.set(x, y, z, angle);
        return this;
      }
      let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
      if (Math.abs(s) < 1e-3) s = 1;
      this.x = (m32 - m23) / s;
      this.y = (m13 - m31) / s;
      this.z = (m21 - m12) / s;
      this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
      return this;
    }
    /**
     * Sets the vector components to the position elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector4} A reference to this vector.
     */
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      this.w = e[15];
      return this;
    }
    /**
     * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
     * value, replace that value with the corresponding min value.
     *
     * @param {Vector4} v - The vector.
     * @return {Vector4} A reference to this vector.
     */
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      this.w = Math.min(this.w, v.w);
      return this;
    }
    /**
     * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
     * value, replace that value with the corresponding max value.
     *
     * @param {Vector4} v - The vector.
     * @return {Vector4} A reference to this vector.
     */
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      this.w = Math.max(this.w, v.w);
      return this;
    }
    /**
     * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
     * value, it is replaced by the corresponding value.
     * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
     * it is replaced by the corresponding value.
     *
     * @param {Vector4} min - The minimum x, y and z values.
     * @param {Vector4} max - The maximum x, y and z values in the desired range.
     * @return {Vector4} A reference to this vector.
     */
    clamp(min, max) {
      this.x = clamp(this.x, min.x, max.x);
      this.y = clamp(this.y, min.y, max.y);
      this.z = clamp(this.z, min.z, max.z);
      this.w = clamp(this.w, min.w, max.w);
      return this;
    }
    /**
     * If this vector's x, y, z or w values are greater than the max value, they are
     * replaced by the max value.
     * If this vector's x, y, z or w values are less than the min value, they are
     * replaced by the min value.
     *
     * @param {number} minVal - The minimum value the components will be clamped to.
     * @param {number} maxVal - The maximum value the components will be clamped to.
     * @return {Vector4} A reference to this vector.
     */
    clampScalar(minVal, maxVal) {
      this.x = clamp(this.x, minVal, maxVal);
      this.y = clamp(this.y, minVal, maxVal);
      this.z = clamp(this.z, minVal, maxVal);
      this.w = clamp(this.w, minVal, maxVal);
      return this;
    }
    /**
     * If this vector's length is greater than the max value, it is replaced by
     * the max value.
     * If this vector's length is less than the min value, it is replaced by the
     * min value.
     *
     * @param {number} min - The minimum value the vector length will be clamped to.
     * @param {number} max - The maximum value the vector length will be clamped to.
     * @return {Vector4} A reference to this vector.
     */
    clampLength(min, max) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
    }
    /**
     * The components of this vector are rounded down to the nearest integer value.
     *
     * @return {Vector4} A reference to this vector.
     */
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      this.w = Math.floor(this.w);
      return this;
    }
    /**
     * The components of this vector are rounded up to the nearest integer value.
     *
     * @return {Vector4} A reference to this vector.
     */
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      this.w = Math.ceil(this.w);
      return this;
    }
    /**
     * The components of this vector are rounded to the nearest integer value
     *
     * @return {Vector4} A reference to this vector.
     */
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      this.w = Math.round(this.w);
      return this;
    }
    /**
     * The components of this vector are rounded towards zero (up if negative,
     * down if positive) to an integer value.
     *
     * @return {Vector4} A reference to this vector.
     */
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      this.w = Math.trunc(this.w);
      return this;
    }
    /**
     * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
     *
     * @return {Vector4} A reference to this vector.
     */
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    }
    /**
     * Calculates the dot product of the given vector with this instance.
     *
     * @param {Vector4} v - The vector to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }
    /**
     * Computes the square of the Euclidean length (straight-line length) from
     * (0, 0, 0, 0) to (x, y, z, w). If you are co×­µçkh‘éì¶»§q«^v\Ë—ÛÝ]]ÛÛÜ”ÜXÙNÃBˆCBˆÙ]Ý]]ÛÛÜ”ÜXÙJÛÛÜ”ÜXÙJHÃBˆ\Ë—ÛÝ]]ÛÛÜ”ÜXÙHHÛÛÜ”ÜXÙNÃBˆÛÛœÝÛH\Ë™Ù]ÛÛ^

NÃBˆÛ™˜]Ú[™ÐY™™\ÛÛÜ”ÜXÙHHÛÛÜ“X[˜YÙ[Y[—ÙÙ]˜]Ú[™ÐY™™\ÛÛÜ”ÜXÙJÛÛÜ”ÜXÙJNÃBˆÛ[œXÚÐÛÛÜ”ÜXÙHHÛÛÜ“X[˜YÙ[Y[—ÙÙ][œXÚÐÛÛÜ”ÜXÙJ
NÃBˆCBˆNÃBƒBˆËÈ›ÙWÛ[Ù[\ËÝ™YKÙ^[\\ËÚœÛKØÛÛ›ÛËÓÜ˜š]ÛÛ›ÛËšœÃBˆ˜\ˆØÚ[™ÙQ]™[HÈ\Nˆ˜Ú[™ÙHˆNÃBˆ˜\ˆÜÝ\]™[HÈ\NˆœÝ\ˆNÃBˆ˜\ˆÙ[™]™[HÈ\Nˆ™[™ˆNÃBˆ˜\ˆÜ˜^LˆH™]È˜^J
NÃBˆ˜\ˆÜ[™HH™]È[™J
NÃBˆ˜\ˆÕSÓSRUHX]˜ÛÜÊÌ
ˆX]][Ë‘QÌ”Q
NÃBˆ˜\ˆÝˆH™]È™XÝÜŒÊ
NÃBˆ˜\ˆÝÛÔHHˆ
ˆX]”NÃBˆ˜\ˆÔÕUHHÃBˆ“Ó‘NˆLKBˆ“ÕUNˆBˆÓNˆKBˆSŽˆ‹BˆÕPÒÔ“ÕUNˆËBˆÕPÒÔSŽˆBˆÕPÒÑÓWÔSŽˆKBˆÕPÒÑÓWÔ“ÕUNˆƒBˆNÃBˆ˜\ˆÑTÈHYKMŽÃBˆ˜\ˆÜ˜š]ÛÛ›ÛÈHÛ\ÜÈ^[™ÈÛÛ›ÛÈÃBˆÊŠƒBˆ
ˆÛÛœÝXÝÈH™]ÈÛÛ›ÛÈ[œÝ[˜ÙKƒBˆ
ƒBˆ
ˆ\˜[HÓØš™XÝÑHØš™XÝHHØš™XÝ]\ÈX[˜YÙYžHHÛÛ›ÛËƒBˆ
ˆ\˜[HÏÒSÓQ[[Y[HÛQ[[Y[HHS[[Y[\ÙY›Üˆ]™[\Ý[™\œËƒBˆ
‹ÃBˆÛÛœÝXÝÜŠØš™XÝÛQ[[Y[H[
HÃBˆÝ\\ŠØš™XÝÛQ[[Y[
NÃBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆ\Ë\™Ù]H™]È™XÝÜŒÊ
NÃBˆ\Ë˜Ý\œÛÜˆH™]È™XÝÜŒÊ
NÃBˆ\Ë›Z[‘\Ý[˜ÙHHÃBˆ\Ë›X^\Ý[˜ÙHH[™š[š]NÃBˆ\Ë›Z[–›ÛÛHHÃBˆ\Ë›X^›ÛÛHH[™š[š]NÃBˆ\Ë›Z[•\™Ù]˜Y]\ÈHÃBˆ\Ë›X^\™Ù]˜Y]\ÈH[™š[š]NÃBˆ\Ë›Z[”Û\[™ÛHHÃBˆ\Ë›X^Û\[™ÛHHX]”NÃBˆ\Ë›Z[^š[]][™ÛHHR[™š[š]NÃBˆ\Ë›X^^š[]][™ÛHH[™š[š]NÃBˆ\Ë™[˜X›Q[\[™ÈH˜[ÙNÃBˆ\Ë™[\[™Ñ˜XÝÜˆHŒNÃBˆ\Ë™[˜X›V›ÛÛHHYNÃBˆ\Ëž›ÛÛTÜYYHNÃBˆ\Ë™[˜X›T›Ý]HHYNÃBˆ\Ëœ›Ý]TÜYYHNÃBˆ\ËšÙ^T›Ý]TÜYYHNÃBˆ\Ë™[˜X›T[ˆHYNÃBˆ\Ëœ[”ÜYYHNÃBˆ\ËœØÜ™Y[”ÜXÙT[›š[™ÈHYNÃBˆ\ËšÙ^T[”ÜYYHÎÃBˆ\Ëž›ÛÛUÐÝ\œÛÜˆH˜[ÙNÃBˆ\Ë˜]]Ô›Ý]HH˜[ÙNÃBˆ\Ë˜]]Ô›Ý]TÜYYHŽÃBˆ\ËšÙ^\ÈHÈQ•ˆ\œ›ÝÓY‹Tˆ\œ›ÝÕ\‹’QÒˆ\œ›ÝÔšYÚ‹“ÕÓNˆ\œ›ÝÑÝÛˆˆNÃBˆ\Ë›[Ý\ÙP]ÛœÈHÈQ•ˆSÕTÑK”“ÕUKRQNˆSÕTÑK‘ÓK’QÒˆSÕTÑK”SˆNÃBˆ\ËÝXÚ\ÈHÈÓ‘NˆÕPÒ”“ÕUKÓÎˆÕPÒ‘ÓWÔSˆNÃBˆ\Ë\™Ù]H\Ë\™Ù]˜ÛÛ™J
NÃBˆ\ËœÜÚ][ÛŒH\Ë›Øš™XÝœÜÚ][Û‹˜ÛÛ™J
NÃBˆ\Ëž›ÛÛLH\Ë›Øš™XÝž›ÛÛNÃBˆ\Ë—ÙÛQ[[Y[Ù^Q]™[ÈH[ÃBˆ\Ë—Û\ÝÜÚ][ÛˆH™]È™XÝÜŒÊ
NÃBˆ\Ë—Û\Ý]X]\›š[ÛˆH™]È]X]\›š[ÛŠ
NÃBˆ\Ë—Û\Ý\™Ù]ÜÚ][ÛˆH™]È™XÝÜŒÊ
NÃBˆ\Ë—Ü]X]H™]È]X]\›š[ÛŠ
KœÙ]œ›ÛU[š]™XÝÜœÊØš™XÝ\™]È™XÝÜŒÊK
JNÃBˆ\Ë—Ü]X][™\œÙHH\Ë—Ü]X]˜ÛÛ™J
Kš[™\

NÃBˆ\Ë—ÜÜ\šXØ[H™]ÈÜ\šXØ[

NÃBˆ\Ë—ÜÜ\šXØ[[HH™]ÈÜ\šXØ[

NÃBˆ\Ë—ÜØØ[HHNÃBˆ\Ë—Ü[“Ù™œÙ]H™]È™XÝÜŒÊ
NÃBˆ\Ë—Ü›Ý]TÝ\H™]È™XÝÜŒŠ
NÃBˆ\Ë—Ü›Ý]Q[™H™]È™XÝÜŒŠ
NÃBˆ\Ë—Ü›Ý]Q[HH™]È™XÝÜŒŠ
NÃBˆ\Ë—Ü[”Ý\H™]È™XÝÜŒŠ
NÃBˆ\Ë—Ü[‘[™H™]È™XÝÜŒŠ
NÃBˆ\Ë—Ü[‘[HH™]È™XÝÜŒŠ
NÃBˆ\Ë—ÙÛTÝ\H™]È™XÝÜŒŠ
NÃBˆ\Ë—ÙÛQ[™H™]È™XÝÜŒŠ
NÃBˆ\Ë—ÙÛQ[HH™]È™XÝÜŒŠ
NÃBˆ\Ë—ÙÛQ\™XÝ[ÛˆH™]È™XÝÜŒÊ
NÃBˆ\Ë—Û[Ý\ÙHH™]È™XÝÜŒŠ
NÃBˆ\Ë—Ü\™›Ü›PÝ\œÛÜ–›ÛÛHH˜[ÙNÃBˆ\Ë—ÜÚ[\œÈH×NÃBˆ\Ë—ÜÚ[\”ÜÚ][ÛœÈHßNÃBˆ\Ë—ØÛÛ›ÛXÝ]™HH˜[ÙNÃBˆ\Ë—ÛÛ”Ú[\“[Ý™HHÛ”Ú[\“[Ý™K˜š[™
\ÊNÃBˆ\Ë—ÛÛ”Ú[\‘ÝÛˆHÛ”Ú[\‘ÝÛ‹˜š[™
\ÊNÃBˆ\Ë—ÛÛ”Ú[\•\HÛ”Ú[\•\˜š[™
\ÊNÃBˆ\Ë—ÛÛÛÛ^Y[HHÛÛÛ^Y[K˜š[™
\ÊNÃBˆ\Ë—ÛÛ“[Ý\ÙUÚY[HÛ“[Ý\ÙUÚY[˜š[™
\ÊNÃBˆ\Ë—ÛÛ’Ù^QÝÛˆHÛ’Ù^QÝÛ‹˜š[™
\ÊNÃBˆ\Ë—ÛÛ•ÝXÚÝ\HÛ•ÝXÚÝ\˜š[™
\ÊNÃBˆ\Ë—ÛÛ•ÝXÚ[Ý™HHÛ•ÝXÚ[Ý™K˜š[™
\ÊNÃBˆ\Ë—ÛÛ“[Ý\ÙQÝÛˆHÛ“[Ý\ÙQÝÛ‹˜š[™
\ÊNÃBˆ\Ë—ÛÛ“[Ý\ÙS[Ý™HHÛ“[Ý\ÙS[Ý™K˜š[™
\ÊNÃBˆ\Ë—Ú[\˜Ù\ÛÛ›ÛÝÛˆH[\˜Ù\ÛÛ›ÛÝÛ‹˜š[™
\ÊNÃBˆ\Ë—Ú[\˜Ù\ÛÛ›Û\H[\˜Ù\ÛÛ›Û\˜š[™
\ÊNÃBˆYˆ
\Ë™ÛQ[[Y[OOH[
HÃBˆ\Ë˜ÛÛ›™XÝ
\Ë™ÛQ[[Y[
NÃBˆCBˆ\Ë\]J
NÃBˆCBˆÛÛ›™XÝ
[[Y[
HÃBˆÝ\\‹˜ÛÛ›™XÝ
[[Y[
NÃBˆ\Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹\Ë—ÛÛ”Ú[\‘ÝÛŠNÃBˆ\Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠœÚ[\˜Ø[˜Ù[‹\Ë—ÛÛ”Ú[\•\
NÃBˆ\Ë™ÛQ[[Y[˜Y]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—ÛÛÛÛ^Y[JNÃBˆ\Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠÚY[‹\Ë—ÛÛ“[Ý\ÙUÚY[È\ÜÚ]™Nˆ˜[ÙHJNÃBˆÛÛœÝØÝ[Y[ˆH\Ë™ÛQ[[Y[™Ù]›ÛÝ›ÙJ
NÃBˆØÝ[Y[‹˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—Ú[\˜Ù\ÛÛ›ÛÝÛ‹È\ÜÚ]™NˆYKØ\\™NˆYHJNÃBˆ\Ë™ÛQ[[Y[œÝ[KÝXÚXÝ[ÛˆH››Û™HŽÃBˆCBˆ\ØÛÛ›™XÝ

HÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹\Ë—ÛÛ”Ú[\‘ÝÛŠNÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›[Ý™H‹\Ë—ÛÛ”Ú[\“[Ý™JNÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\\‹\Ë—ÛÛ”Ú[\•\
NÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\˜Ø[˜Ù[‹\Ë—ÛÛ”Ú[\•\
NÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÚY[‹\Ë—ÛÛ“[Ý\ÙUÚY[
NÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—ÛÛÛÛ^Y[JNÃBˆ\ËœÝÜ\Ý[•ÒÙ^Q]™[Ê
NÃBˆÛÛœÝØÝ[Y[ˆH\Ë™ÛQ[[Y[™Ù]›ÛÝ›ÙJ
NÃBˆØÝ[Y[‹œ™[[Ý™Q]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—Ú[\˜Ù\ÛÛ›ÛÝÛ‹ÈØ\\™NˆYHJNÃBˆ\Ë™ÛQ[[Y[œÝ[KÝXÚXÝ[ÛˆH˜]]ÈŽÃBˆCBˆ\ÜÜÙJ
HÃBˆ\Ë™\ØÛÛ›™XÝ

NÃBˆCBˆÊŠƒBˆ
ˆÙ]HÝ\œ™[™\XØ[›Ý][Û‹[ˆ˜YX[œËƒBˆ
ƒBˆ
ˆ™]\›ˆÛ[X™\ŸHHÝ\œ™[™\XØ[›Ý][Û‹[ˆ˜YX[œËƒBˆ
‹ÃBˆÙ]Û\[™ÛJ
HÃBˆ™]\›ˆ\Ë—ÜÜ\šXØ[œNÃBˆCBˆÊŠƒBˆ
ˆÙ]HÝ\œ™[Üš^›Û[›Ý][Û‹[ˆ˜YX[œËƒBˆ
ƒBˆ
ˆ™]\›ˆÛ[X™\ŸHHÝ\œ™[Üš^›Û[›Ý][Û‹[ˆ˜YX[œËƒBˆ
‹ÃBˆÙ]^š[]][[™ÛJ
HÃBˆ™]\›ˆ\Ë—ÜÜ\šXØ[]NÃBˆCBˆÊŠƒBˆ
ˆ™]\›œÈH\Ý[˜ÙHœ›ÛHHØ[Y\˜HÈH\™Ù]ƒBˆ
ƒBˆ
ˆ™]\›ˆÛ[X™\ŸHH\Ý[˜ÙHœ›ÛHHØ[Y\˜HÈH\™Ù]ƒBˆ
‹ÃBˆÙ]\Ý[˜ÙJ
HÃBˆ™]\›ˆ\Ë›Øš™XÝœÜÚ][Û‹™\Ý[˜ÙUÊ\Ë\™Ù]
NÃBˆCBˆÊŠƒBˆ
ˆYÈÙ^H]™[\Ý[™\œÈÈHÚ]™[ˆÓH[[Y[ƒBˆ
ˆÚ[™ÝØ\ÈH™XÛÛ[Y[™Y\™Ý[Y[›Üˆ\Ú[™È\ÈY]ÙƒBˆ
ƒBˆ
ˆ\˜[HÒSÓQ[[Y[HÛQ[[Y[HHÓH[[Y[Bˆ
‹ÃBˆ\Ý[•ÒÙ^Q]™[ÊÛQ[[Y[
HÃBˆÛQ[[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—ÛÛ’Ù^QÝÛŠNÃBˆ\Ë—ÙÛQ[[Y[Ù^Q]™[ÈHÛQ[[Y[ÃBˆCBˆÊŠƒBˆ
ˆ™[[Ý™\ÈHÙ^H]™[\Ý[™\ˆ™]š[Ý\ÛHYš[™YÚ]\Ý[•ÒÙ^Q]™[Ê
XƒBˆ
‹ÃBˆÝÜ\Ý[•ÒÙ^Q]™[Ê
HÃBˆYˆ
\Ë—ÙÛQ[[Y[Ù^Q]™[ÈOOH[
HÃBˆ\Ë—ÙÛQ[[Y[Ù^Q]™[Ëœ™[[Ý™Q]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—ÛÛ’Ù^QÝÛŠNÃBˆ\Ë—ÙÛQ[[Y[Ù^Q]™[ÈH[ÃBˆCBˆCBˆÊŠƒBˆ
ˆØ]™HHÝ\œ™[Ý]HÙˆHÛÛ›ÛËˆ\ÈØ[ˆ]\ˆ™H™XÛÝ™\™YÚ]™\Ù]

XƒBˆ
‹ÃBˆØ]™TÝ]J
HÃBˆ\Ë\™Ù]˜ÛÜJ\Ë\™Ù]
NÃBˆ\ËœÜÚ][ÛŒ˜ÛÜJ\Ë›Øš™XÝœÜÚ][ÛŠNÃBˆ\Ëž›ÛÛLH\Ë›Øš™XÝž›ÛÛNÃBˆCBˆÊŠƒBˆ
ˆ™\Ù]HÛÛ›ÛÈÈZ\ˆÝ]Hœ›ÛHZ]\ˆH\Ý[YHHØ]™TÝ]J
XBˆ
ˆØ\ÈØ[YÜˆH[š]X[Ý]KƒBˆ
‹ÃBˆ™\Ù]

HÃBˆ\Ë\™Ù]˜ÛÜJ\Ë\™Ù]
NÃBˆ\Ë›Øš™XÝœÜÚ][Û‹˜ÛÜJ\ËœÜÚ][ÛŒ
NÃBˆ\Ë›Øš™XÝž›ÛÛHH\Ëž›ÛÛLÃBˆ\Ë›Øš™XÝ\]T›Ú™XÝ[Û“X]š^

NÃBˆ\Ë™\Ü]Ú]™[
ØÚ[™ÙQ]™[
NÃBˆ\Ë\]J
NÃBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆCBˆ\]J[U[YHH[
HÃBˆÛÛœÝÜÚ][ÛˆH\Ë›Øš™XÝœÜÚ][ÛŽÃBˆÝ‹˜ÛÜJÜÚ][ÛŠKœÝXŠ\Ë\™Ù]
NÃBˆÝ‹˜\T]X]\›š[ÛŠ\Ë—Ü]X]
NÃBˆ\Ë—ÜÜ\šXØ[œÙ]œ›ÛU™XÝÜŒÊÝŠNÃBˆYˆ
\Ë˜]]Ô›Ý]H	‰ˆ\ËœÝ]HOOHÔÕUK““Ó‘JHÃBˆ\Ë—Ü›Ý]SY
\Ë—ÙÙ]]]Ô›Ý][Û[™ÛJ[U[YJJNÃBˆCBˆYˆ
\Ë™[˜X›Q[\[™ÊHÃBˆ\Ë—ÜÜ\šXØ[]H
ÏH\Ë—ÜÜ\šXØ[[K]H
ˆ\Ë™[\[™Ñ˜XÝÜŽÃBˆ\Ë—ÜÜ\šXØ[œH
ÏH\Ë—ÜÜ\šXØ[[KœH
ˆ\Ë™[\[™Ñ˜XÝÜŽÃBˆH[ÙHÃBˆ\Ë—ÜÜ\šXØ[]H
ÏH\Ë—ÜÜ\šXØ[[K]NÃBˆ\Ë—ÜÜ\šXØ[œH
ÏH\Ë—ÜÜ\šXØ[[KœNÃBˆCBˆ]Z[ˆH\Ë›Z[^š[]][™ÛNÃBˆ]X^H\Ë›X^^š[]][™ÛNÃBˆYˆ
\Ñš[š]JZ[ŠH	‰ˆ\Ñš[š]JX^
JHÃBˆYˆ
Z[ˆSX]”JHZ[ˆ
ÏHÝÛÔNÃBˆ[ÙHYˆ
Z[ˆˆX]”JHZ[ˆOHÝÛÔNÃBˆYˆ
X^SX]”JHX^
ÏHÝÛÔNÃBˆ[ÙHYˆ
X^ˆX]”JHX^OHÝÛÔNÃBˆYˆ
Z[ˆHX^
HÃBˆ\Ë—ÜÜ\šXØ[]HHX]›X^
Z[‹X]›Z[ŠX^\Ë—ÜÜ\šXØ[]JJNÃBˆH[ÙHÃBˆ\Ë—ÜÜ\šXØ[]HH\Ë—ÜÜ\šXØ[]Hˆ
Z[ˆ
ÈX^
HÈˆÈX]›X^
Z[‹\Ë—ÜÜ\šXØ[]JHˆX]›Z[ŠX^\Ë—ÜÜ\šXØ[]JNÃBˆCBˆCBˆ\Ë—ÜÜ\šXØ[œHHX]›X^
\Ë›Z[”Û\[™ÛKX]›Z[Š\Ë›X^Û\[™ÛK\Ë—ÜÜ\šXØ[œJJNÃBˆ\Ë—ÜÜ\šXØ[›XZÙTØY™J
NÃBˆYˆ
\Ë™[˜X›Q[\[™ÈOOHYJHÃBˆ\Ë\™Ù]˜YØØ[Y™XÝÜŠ\Ë—Ü[“Ù™œÙ]\Ë™[\[™Ñ˜XÝÜŠNÃBˆH[ÙHÃBˆ\Ë\™Ù]˜Y
\Ë—Ü[“Ù™œÙ]
NÃBˆCBˆ\Ë\™Ù]œÝXŠ\Ë˜Ý\œÛÜŠNÃBˆ\Ë\™Ù]˜Û[\[™Ý
\Ë›Z[•\™Ù]˜Y]\Ë\Ë›X^\™Ù]˜Y]\ÊNÃBˆ\Ë\™Ù]˜Y
\Ë˜Ý\œÛÜŠNÃBˆ]›ÛÛPÚ[™ÙYH˜[ÙNÃBˆYˆ
\Ëž›ÛÛUÐÝ\œÛÜˆ	‰ˆ\Ë—Ü\™›Ü›PÝ\œÛÜ–›ÛÛH\Ë›Øš™XÝš\ÓÜÙÜ˜\XÐØ[Y\˜JHÃBˆ\Ë—ÜÜ\šXØ[œ˜Y]\ÈH\Ë—ØÛ[\\Ý[˜ÙJ\Ë—ÜÜ\šXØ[œ˜Y]\ÊNÃBˆH[ÙHÃBˆÛÛœÝ™]”˜Y]\ÈH\Ë—ÜÜ\šXØ[œ˜Y]\ÎÃBˆ\Ë—ÜÜ\šXØ[œ˜Y]\ÈH\Ë—ØÛ[\\Ý[˜ÙJ\Ë—ÜÜ\šXØ[œ˜Y]\È
ˆ\Ë—ÜØØ[JNÃBˆ›ÛÛPÚ[™ÙYH™]”˜Y]\ÈOH\Ë—ÜÜ\šXØ[œ˜Y]\ÎÃBˆCBˆÝ‹œÙ]œ›ÛTÜ\šXØ[
\Ë—ÜÜ\šXØ[
NÃBˆÝ‹˜\T]X]\›š[ÛŠ\Ë—Ü]X][™\œÙJNÃBˆÜÚ][Û‹˜ÛÜJ\Ë\™Ù]
K˜Y
ÝŠNÃBˆ\Ë›Øš™XÝ›ÛÚÐ]
\Ë\™Ù]
NÃBˆYˆ
\Ë™[˜X›Q[\[™ÈOOHYJHÃBˆ\Ë—ÜÜ\šXØ[[K]H
HHH\Ë™[\[™Ñ˜XÝÜŽÃBˆ\Ë—ÜÜ\šXØ[[KœH
HHH\Ë™[\[™Ñ˜XÝÜŽÃBˆ\Ë—Ü[“Ù™œÙ]›][\TØØ[\ŠHH\Ë™[\[™Ñ˜XÝÜŠNÃBˆH[ÙHÃBˆ\Ë—ÜÜ\šXØ[[KœÙ]

NÃBˆ\Ë—Ü[“Ù™œÙ]œÙ]

NÃBˆCBˆYˆ
\Ëž›ÛÛUÐÝ\œÛÜˆ	‰ˆ\Ë—Ü\™›Ü›PÝ\œÛÜ–›ÛÛJHÃBˆ]™]Ô˜Y]\ÈH[ÃBˆYˆ
\Ë›Øš™XÝš\Ô\œÜXÝ]™PØ[Y\˜JHÃBˆÛÛœÝ™]”˜Y]\ÈHÝ‹›[™Ý

NÃBˆ™]Ô˜Y]\ÈH\Ë—ØÛ[\\Ý[˜ÙJ™]”˜Y]\È
ˆ\Ë—ÜØØ[JNÃBˆÛÛœÝ˜Y]\Ñ[HH™]”˜Y]\ÈH™]Ô˜Y]\ÎÃBˆ\Ë›Øš™XÝœÜÚ][Û‹˜YØØ[Y™XÝÜŠ\Ë—ÙÛQ\™XÝ[Û‹˜Y]\Ñ[JNÃBˆ\Ë›Øš™XÝ\]SX]š^ÛÜ›

NÃBˆ›ÛÛPÚ[™ÙYHH\˜Y]\Ñ[NÃBˆH[ÙHYˆ
\Ë›Øš™XÝš\ÓÜÙÜ˜\XÐØ[Y\˜JHÃBˆÛÛœÝ[Ý\ÙP™Y›Ü™HH™]È™XÝÜŒÊ\Ë—Û[Ý\ÙKž\Ë—Û[Ý\ÙKžK
NÃBˆ[Ý\ÙP™Y›Ü™K[œ›Ú™XÝ
\Ë›Øš™XÝ
NÃBˆÛÛœÝ™]–›ÛÛHH\Ë›Øš™XÝž›ÛÛNÃBˆ\Ë›Øš™XÝž›ÛÛHHX]›X^
\Ë›Z[–›ÛÛKX]›Z[Š\Ë›X^›ÛÛK\Ë›Øš™XÝž›ÛÛHÈ\Ë—ÜØØ[JJNÃBˆ\Ë›Øš™XÝ\]T›Ú™XÝ[Û“X]š^

NÃBˆ›ÛÛPÚ[™ÙYH™]–›ÛÛHOOH\Ë›Øš™XÝž›ÛÛNÃBˆÛÛœÝ[Ý\ÙPY\ˆH™]È™XÝÜŒÊ\Ë—Û[Ý\ÙKž\Ë—Û[Ý\ÙKžK
NÃBˆ[Ý\ÙPY\‹[œ›Ú™XÝ
\Ë›Øš™XÝ
NÃBˆ\Ë›Øš™XÝœÜÚ][Û‹œÝXŠ[Ý\ÙPY\ŠK˜Y
[Ý\ÙP™Y›Ü™JNÃBˆ\Ë›Øš™XÝ\]SX]š^ÛÜ›

NÃBˆ™]Ô˜Y]\ÈHÝ‹›[™Ý

NÃBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•ÐT“’S‘ÎˆÜ˜š]ÛÛ›ÛËšœÈ[˜ÛÝ[\™Y[ˆ[šÛ›ÝÛˆØ[Y\˜H\HH›ÛÛHÈÝ\œÛÜˆ\ØX›YˆŠNÃBˆ\Ëž›ÛÛUÐÝ\œÛÜˆH˜[ÙNÃBˆCBˆYˆ
™]Ô˜Y]\ÈOOH[
HÃBˆYˆ
\ËœØÜ™Y[”ÜXÙT[›š[™ÊHÃBˆ\Ë\™Ù]œÙ]
LJK˜[œÙ›Ü›Q\™XÝ[ÛŠ\Ë›Øš™XÝ›X]š^
K›][\TØØ[\Š™]Ô˜Y]\ÊK˜Y
\Ë›Øš™XÝœÜÚ][ÛŠNÃBˆH[ÙHÃBˆÜ˜^L‹›ÜšYÚ[‹˜ÛÜJ\Ë›Øš™XÝœÜÚ][ÛŠNÃBˆÜ˜^L‹™\™XÝ[Û‹œÙ]
LJK˜[œÙ›Ü›Q\™XÝ[ÛŠ\Ë›Øš™XÝ›X]š^
NÃBˆYˆ
X]˜XœÊ\Ë›Øš™XÝ\™Ý
Ü˜^L‹™\™XÝ[ÛŠJHÕSÓSRU
HÃBˆ\Ë›Øš™XÝ›ÛÚÐ]
\Ë\™Ù]
NÃBˆH[ÙHÃBˆÜ[™KœÙ]œ›ÛS›Ü›X[[™ÛÜ[˜\”Ú[
\Ë›Øš™XÝ\\Ë\™Ù]
NÃBˆÜ˜^L‹š[\œÙXÝ[™JÜ[™K\Ë\™Ù]
NÃBˆCBˆCBˆCBˆH[ÙHYˆ
\Ë›Øš™XÝš\ÓÜÙÜ˜\XÐØ[Y\˜JHÃBˆÛÛœÝ™]–›ÛÛHH\Ë›Øš™XÝž›ÛÛNÃBˆ\Ë›Øš™XÝž›ÛÛHHX]›X^
\Ë›Z[–›ÛÛKX]›Z[Š\Ë›X^›ÛÛK\Ë›Øš™XÝž›ÛÛHÈ\Ë—ÜØØ[JJNÃBˆYˆ
™]–›ÛÛHOOH\Ë›Øš™XÝž›ÛÛJHÃBˆ\Ë›Øš™XÝ\]T›Ú™XÝ[Û“X]š^

NÃBˆ›ÛÛPÚ[™ÙYHYNÃBˆCBˆCBˆ\Ë—ÜØØ[HHNÃBˆ\Ë—Ü\™›Ü›PÝ\œÛÜ–›ÛÛHH˜[ÙNÃBˆYˆ
›ÛÛPÚ[™ÙY\Ë—Û\ÝÜÚ][Û‹™\Ý[˜ÙUÔÜ]X\™Y
\Ë›Øš™XÝœÜÚ][ÛŠHˆÑTÈ
ˆ
HH\Ë—Û\Ý]X]\›š[Û‹™Ý
\Ë›Øš™XÝœ]X]\›š[ÛŠJHˆÑTÈ\Ë—Û\Ý\™Ù]ÜÚ][Û‹™\Ý[˜ÙUÔÜ]X\™Y
\Ë\™Ù]
HˆÑTÊHÃBˆ\Ë™\Ü]Ú]™[
ØÚ[™ÙQ]™[
NÃBˆ\Ë—Û\ÝÜÚ][Û‹˜ÛÜJ\Ë›Øš™XÝœÜÚ][ÛŠNÃBˆ\Ë—Û\Ý]X]\›š[Û‹˜ÛÜJ\Ë›Øš™XÝœ]X]\›š[ÛŠNÃBˆ\Ë—Û\Ý\™Ù]ÜÚ][Û‹˜ÛÜJ\Ë\™Ù]
NÃBˆ™]\›ˆYNÃBˆCBˆ™]\›ˆ˜[ÙNÃBˆCBˆÙÙ]]]Ô›Ý][Û[™ÛJ[U[YJHÃBˆYˆ
[U[YHOOH[
HÃBˆ™]\›ˆÝÛÔHÈŒ
ˆ\Ë˜]]Ô›Ý]TÜYY
ˆ[U[YNÃBˆH[ÙHÃBˆ™]\›ˆÝÛÔHÈŒÈŒ
ˆ\Ë˜]]Ô›Ý]TÜYYÃBˆCBˆCBˆÙÙ]›ÛÛTØØ[J[JHÃBˆÛÛœÝ›Ü›X[^™Y[HHX]˜XœÊ[H
ˆŒJNÃBˆ™]\›ˆX]œÝÊŽMK\Ëž›ÛÛTÜYY
ˆ›Ü›X[^™Y[JNÃBˆCBˆÜ›Ý]SY
[™ÛJHÃBˆ\Ë—ÜÜ\šXØ[[K]HOH[™ÛNÃBˆCBˆÜ›Ý]U\
[™ÛJHÃBˆ\Ë—ÜÜ\šXØ[[KœHOH[™ÛNÃBˆCBˆÜ[“Y
\Ý[˜ÙKØš™XÝX]š^
HÃBˆÝ‹œÙ]œ›ÛSX]š^ÛÛ[[ŠØš™XÝX]š^
NÃBˆÝ‹›][\TØØ[\ŠY\Ý[˜ÙJNÃBˆ\Ë—Ü[“Ù™œÙ]˜Y
ÝŠNÃBˆCBˆÜ[•\
\Ý[˜ÙKØš™XÝX]š^
HÃBˆYˆ
\ËœØÜ™Y[”ÜXÙT[›š[™ÈOOHYJHÃBˆÝ‹œÙ]œ›ÛSX]š^ÛÛ[[ŠØš™XÝX]š^JNÃBˆH[ÙHÃBˆÝ‹œÙ]œ›ÛSX]š^ÛÛ[[ŠØš™XÝX]š^
NÃBˆÝ‹˜Ü›ÜÜÕ™XÝÜœÊ\Ë›Øš™XÝ\ÝŠNÃBˆCBˆÝ‹›][\TØØ[\Š\Ý[˜ÙJNÃBˆ\Ë—Ü[“Ù™œÙ]˜Y
ÝŠNÃBˆCBˆËÈ[V[™[VH\™H[ˆ^[ÎÈšYÚ[™ÝÛˆ\™HÜÚ]]™CBˆÜ[Š[V[VJHÃBˆÛÛœÝ[[Y[H\Ë™ÛQ[[Y[ÃBˆYˆ
\Ë›Øš™XÝš\Ô\œÜXÝ]™PØ[Y\˜JHÃBˆÛÛœÝÜÚ][ÛˆH\Ë›Øš™XÝœÜÚ][ÛŽÃBˆÝ‹˜ÛÜJÜÚ][ÛŠKœÝXŠ\Ë\™Ù]
NÃBˆ]\™Ù]\Ý[˜ÙHHÝ‹›[™Ý

NÃBˆ\™Ù]\Ý[˜ÙH
HX][Š\Ë›Øš™XÝ™›ÝˆÈˆ
ˆX]”HÈN
NÃBˆ\Ë—Ü[“Y
ˆ
ˆ[V
ˆ\™Ù]\Ý[˜ÙHÈ[[Y[˜ÛY[ZYÚ\Ë›Øš™XÝ›X]š^
NÃBˆ\Ë—Ü[•\
ˆ
ˆ[VH
ˆ\™Ù]\Ý[˜ÙHÈ[[Y[˜ÛY[ZYÚ\Ë›Øš™XÝ›X]š^
NÃBˆH[ÙHYˆ
\Ë›Øš™XÝš\ÓÜÙÜ˜\XÐØ[Y\˜JHÃBˆ\Ë—Ü[“Y
[V
ˆ
\Ë›Øš™XÝœšYÚH\Ë›Øš™XÝ›Y
HÈ\Ë›Øš™XÝž›ÛÛHÈ[[Y[˜ÛY[ÚY\Ë›Øš™XÝ›X]š^
NÃBˆ\Ë—Ü[•\
[VH
ˆ
\Ë›Øš™XÝÜH\Ë›Øš™XÝ˜›ÝÛJHÈ\Ë›Øš™XÝž›ÛÛHÈ[[Y[˜ÛY[ZYÚ\Ë›Øš™XÝ›X]š^
NÃBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•ÐT“’S‘ÎˆÜ˜š]ÛÛ›ÛËšœÈ[˜ÛÝ[\™Y[ˆ[šÛ›ÝÛˆØ[Y\˜H\HH[ˆ\ØX›YˆŠNÃBˆ\Ë™[˜X›T[ˆH˜[ÙNÃBˆCBˆCBˆÙÛSÝ]
ÛTØØ[JHÃBˆYˆ
\Ë›Øš™XÝš\Ô\œÜXÝ]™PØ[Y\˜H\Ë›Øš™XÝš\ÓÜÙÜ˜\XÐØ[Y\˜JHÃBˆ\Ë—ÜØØ[HÏHÛTØØ[NÃBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•ÐT“’S‘ÎˆÜ˜š]ÛÛ›ÛËšœÈ[˜ÛÝ[\™Y[ˆ[šÛ›ÝÛˆØ[Y\˜H\HHÛKÞ›ÛÛH\ØX›YˆŠNÃBˆ\Ë™[˜X›V›ÛÛHH˜[ÙNÃBˆCBˆCBˆÙÛR[ŠÛTØØ[JHÃBˆYˆ
\Ë›Øš™XÝš\Ô\œÜXÝ]™PØ[Y\˜H\Ë›Øš™XÝš\ÓÜÙÜ˜\XÐØ[Y\˜JHÃBˆ\Ë—ÜØØ[H
HÛTØØ[NÃBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•ÐT“’S‘ÎˆÜ˜š]ÛÛ›ÛËšœÈ[˜ÛÝ[\™Y[ˆ[šÛ›ÝÛˆØ[Y\˜H\HHÛKÞ›ÛÛH\ØX›YˆŠNÃBˆ\Ë™[˜X›V›ÛÛHH˜[ÙNÃBˆCBˆCBˆÝ\]V›ÛÛT\˜[Y]\œÊJHÃBˆYˆ
]\Ëž›ÛÛUÐÝ\œÛÜŠHÃBˆ™]\›ŽÃBˆCBˆ\Ë—Ü\™›Ü›PÝ\œÛÜ–›ÛÛHHYNÃBˆÛÛœÝ™XÝH\Ë™ÛQ[[Y[™Ù]›Ý[™[™ÐÛY[™XÝ

NÃBˆÛÛœÝHH™XÝ›YÃBˆÛÛœÝHHHH™XÝÜÃBˆÛÛœÝÈH™XÝÚYÃBˆÛÛœÝH™XÝšZYÚÃBˆ\Ë—Û[Ý\ÙKžHÈÈ
ˆˆHNÃBˆ\Ë—Û[Ý\ÙKžHHJHÈ
H
ˆˆ
ÈNÃBˆ\Ë—ÙÛQ\™XÝ[Û‹œÙ]
\Ë—Û[Ý\ÙKž\Ë—Û[Ý\ÙKžKJK[œ›Ú™XÝ
\Ë›Øš™XÝ
KœÝXŠ\Ë›Øš™XÝœÜÚ][ÛŠK››Ü›X[^™J
NÃBˆCBˆØÛ[\\Ý[˜ÙJ\Ý
HÃBˆ™]\›ˆX]›X^
\Ë›Z[‘\Ý[˜ÙKX]›Z[Š\Ë›X^\Ý[˜ÙK\Ý
JNÃBˆCBˆËÃBˆËÈ]™[Ø[˜XÚÜÈH\]HHØš™XÝÝ]CBˆËÃBˆÚ[™S[Ý\ÙQÝÛ”›Ý]J]™[
HÃBˆ\Ë—Ü›Ý]TÝ\œÙ]
]™[˜ÛY[]™[˜ÛY[JNÃBˆCBˆÚ[™S[Ý\ÙQÝÛ‘ÛJ]™[
HÃBˆ\Ë—Ý\]V›ÛÛT\˜[Y]\œÊ]™[˜ÛY[]™[˜ÛY[
NÃBˆ\Ë—ÙÛTÝ\œÙ]
]™[˜ÛY[]™[˜ÛY[JNÃBˆCBˆÚ[™S[Ý\ÙQÝÛ”[Š]™[
HÃBˆ\Ë—Ü[”Ý\œÙ]
]™[˜ÛY[]™[˜ÛY[JNÃBˆCBˆÚ[™S[Ý\ÙS[Ý™T›Ý]J]™[
HÃBˆ\Ë—Ü›Ý]Q[™œÙ]
]™[˜ÛY[]™[˜ÛY[JNÃBˆ\Ë—Ü›Ý]Q[KœÝX•™XÝÜœÊ\Ë—Ü›Ý]Q[™\Ë—Ü›Ý]TÝ\
K›][\TØØ[\Š\Ëœ›Ý]TÜYY
NÃBˆÛÛœÝ[[Y[H\Ë™ÛQ[[Y[ÃBˆ\Ë—Ü›Ý]SY
ÝÛÔH
ˆ\Ë—Ü›Ý]Q[KžÈ[[Y[˜ÛY[ZYÚ
NÃBˆ\Ë—Ü›Ý]U\
ÝÛÔH
ˆ\Ë—Ü›Ý]Q[KžHÈ[[Y[˜ÛY[ZYÚ
NÃBˆ\Ë—Ü›Ý]TÝ\˜ÛÜJ\Ë—Ü›Ý]Q[™
NÃBˆ\Ë\]J
NÃBˆCBˆÚ[™S[Ý\ÙS[Ý™QÛJ]™[
HÃBˆ\Ë—ÙÛQ[™œÙ]
]™[˜ÛY[]™[˜ÛY[JNÃBˆ\Ë—ÙÛQ[KœÝX•™XÝÜœÊ\Ë—ÙÛQ[™\Ë—ÙÛTÝ\
NÃBˆYˆ
\Ë—ÙÛQ[KžHˆ
HÃBˆ\Ë—ÙÛSÝ]
\Ë—ÙÙ]›ÛÛTØØ[J\Ë—ÙÛQ[KžJJNÃBˆH[ÙHYˆ
\Ë—ÙÛQ[KžH
HÃBˆ\Ë—ÙÛR[Š\Ë—ÙÙ]›ÛÛTØØ[J\Ë—ÙÛQ[KžJJNÃBˆCBˆ\Ë—ÙÛTÝ\˜ÛÜJ\Ë—ÙÛQ[™
NÃBˆ\Ë\]J
NÃBˆCBˆÚ[™S[Ý\ÙS[Ý™T[Š]™[
HÃBˆ\Ë—Ü[‘[™œÙ]
]™[˜ÛY[]™[˜ÛY[JNÃBˆ\Ë—Ü[‘[KœÝX•™XÝÜœÊ\Ë—Ü[‘[™\Ë—Ü[”Ý\
K›][\TØØ[\Š\Ëœ[”ÜYY
NÃBˆ\Ë—Ü[Š\Ë—Ü[‘[Kž\Ë—Ü[‘[KžJNÃBˆ\Ë—Ü[”Ý\˜ÛÜJ\Ë—Ü[‘[™
NÃBˆ\Ë\]J
NÃBˆCBˆÚ[™S[Ý\ÙUÚY[
]™[
HÃBˆ\Ë—Ý\]V›ÛÛT\˜[Y]\œÊ]™[˜ÛY[]™[˜ÛY[JNÃBˆYˆ
]™[™[VH
HÃBˆ\Ë—ÙÛR[Š\Ë—ÙÙ]›ÛÛTØØ[J]™[™[VJJNÃBˆH[ÙHYˆ
]™[™[VHˆ
HÃBˆ\Ë—ÙÛSÝ]
\Ë—ÙÙ]›ÛÛTØØ[J]™[™[VJJNÃBˆCBˆ\Ë\]J
NÃBˆCBˆÚ[™RÙ^QÝÛŠ]™[
HÃBˆ]™YYÕ\]HH˜[ÙNÃBˆÝÚ]Ú
]™[˜ÛÙJHÃBˆØ\ÙH\ËšÙ^\Ë•TƒBˆYˆ
]™[˜Ý›Ù^H]™[›Y]RÙ^H]™[œÚYÙ^JHÃBˆYˆ
\Ë™[˜X›T›Ý]JHÃBˆ\Ë—Ü›Ý]U\
ÝÛÔH
ˆ\ËšÙ^T›Ý]TÜYYÈ\Ë™ÛQ[[Y[˜ÛY[ZYÚ
NÃBˆCBˆH[ÙHÃBˆYˆ
\Ë™[˜X›T[ŠHÃBˆ\Ë—Ü[Š\ËšÙ^T[”ÜYY
NÃBˆCBˆCBˆ™YYÕ\]HHYNÃBˆœ™XZÎÃBˆØ\ÙH\ËšÙ^\Ë“ÕÓNƒBˆYˆ
]™[˜Ý›Ù^H]™[›Y]RÙ^H]™[œÚYÙ^JHÃBˆYˆ
\Ë™[˜X›T›Ý]JHÃBˆ\Ë—Ü›Ý]U\
WÝÛÔH
ˆ\ËšÙ^T›Ý]TÜYYÈ\Ë™ÛQ[[Y[˜ÛY[ZYÚ
NÃBˆCBˆH[ÙHÃBˆYˆ
\Ë™[˜X›T[ŠHÃBˆ\Ë—Ü[Š]\ËšÙ^T[”ÜYY
NÃBˆCBˆCBˆ™YYÕ\]HHYNÃBˆœ™XZÎÃBˆØ\ÙH\ËšÙ^\Ë“Q•ƒBˆYˆ
]™[˜Ý›Ù^H]™[›Y]RÙ^H]™[œÚYÙ^JHÃBˆYˆ
\Ë™[˜X›T›Ý]JHÃBˆ\Ë—Ü›Ý]SY
ÝÛÔH
ˆ\ËšÙ^T›Ý]TÜYYÈ\Ë™ÛQ[[Y[˜ÛY[ZYÚ
NÃBˆCBˆH[ÙHÃBˆYˆ
\Ë™[˜X›T[ŠHÃBˆ\Ë—Ü[Š\ËšÙ^T[”ÜYY
NÃBˆCBˆCBˆ™YYÕ\]HHYNÃBˆœ™XZÎÃBˆØ\ÙH\ËšÙ^\Ë”’QÒƒBˆYˆ
]™[˜Ý›Ù^H]™[›Y]RÙ^H]™[œÚYÙ^JHÃBˆYˆ
\Ë™[˜X›T›Ý]JHÃBˆ\Ë—Ü›Ý]SY
WÝÛÔH
ˆ\ËšÙ^T›Ý]TÜYYÈ\Ë™ÛQ[[Y[˜ÛY[ZYÚ
NÃBˆCBˆH[ÙHÃBˆYˆ
\Ë™[˜X›T[ŠHÃBˆ\Ë—Ü[Š]\ËšÙ^T[”ÜYY
NÃBˆCBˆCBˆ™YYÕ\]HHYNÃBˆœ™XZÎÃBˆCBˆYˆ
™YYÕ\]JHÃBˆ]™[œ™]™[Y˜][

NÃBˆ\Ë\]J
NÃBˆCBˆCBˆÚ[™UÝXÚÝ\›Ý]J]™[
HÃBˆYˆ
\Ë—ÜÚ[\œË›[™ÝOOHJHÃBˆ\Ë—Ü›Ý]TÝ\œÙ]
]™[œYÙV]™[œYÙVJNÃBˆH[ÙHÃBˆÛÛœÝÜÚ][ÛˆH\Ë—ÙÙ]ÙXÛÛ™Ú[\”ÜÚ][ÛŠ]™[
NÃBˆÛÛœÝHH
ˆ
]™[œYÙV
ÈÜÚ][Û‹ž
NÃBˆÛÛœÝHHH
ˆ
]™[œYÙVH
ÈÜÚ][Û‹žJNÃBˆ\Ë—Ü›Ý]TÝ\œÙ]
JNÃBˆCBˆCBˆÚ[™UÝXÚÝ\[Š]™[
HÃBˆYˆ
\Ë—ÜÚ[\œË›[™ÝOOHJHÃBˆ\Ë—Ü[”Ý\œÙ]
]™[œYÙV]™[œYÙVJNÃBˆH[ÙHÃBˆÛÛœÝÜÚ][ÛˆH\Ë—ÙÙ]ÙXÛÛ™Ú[\”ÜÚ][ÛŠ]™[
NÃBˆÛÛœÝHH
ˆ
]™[œYÙV
ÈÜÚ][Û‹ž
NÃBˆÛÛœÝHHH
ˆ
]™[œYÙVH
ÈÜÚ][Û‹žJNÃBˆ\Ë—Ü[”Ý\œÙ]
JNÃBˆCBˆCBˆÚ[™UÝXÚÝ\ÛJ]™[
HÃBˆÛÛœÝÜÚ][ÛˆH\Ë—ÙÙ]ÙXÛÛ™Ú[\”ÜÚ][ÛŠ]™[
NÃBˆÛÛœÝH]™[œYÙVHÜÚ][Û‹žÃBˆÛÛœÝHH]™[œYÙVHHÜÚ][Û‹žNÃBˆÛÛœÝ\Ý[˜ÙHHX]œÜ\

ˆ
ÈH
ˆJNÃBˆ\Ë—ÙÛTÝ\œÙ]
\Ý[˜ÙJNÃBˆCBˆÚ[™UÝXÚÝ\ÛT[Š]™[
HÃBˆYˆ
\Ë™[˜X›V›ÛÛJH\Ë—Ú[™UÝXÚÝ\ÛJ]™[
NÃBˆYˆ
\Ë™[˜X›T[ŠH\Ë—Ú[™UÝXÚÝ\[Š]™[
NÃBˆCBˆÚ[™UÝXÚÝ\ÛT›Ý]J]™[
HÃBˆYˆ
\Ë™[˜X›V›ÛÛJH\Ë—Ú[™UÝXÚÝ\ÛJ]™[
NÃBˆYˆ
\Ë™[˜X›T›Ý]JH\Ë—Ú[™UÝXÚÝ\›Ý]J]™[
NÃBˆCBˆÚ[™UÝXÚ[Ý™T›Ý]J]™[
HÃBˆYˆ
\Ë—ÜÚ[\œË›[™ÝOHJHÃBˆ\Ë—Ü›Ý]Q[™œÙ]
]™[œYÙV]™[œYÙVJNÃBˆH[ÙHÃBˆÛÛœÝÜÚ][ÛˆH\Ë—ÙÙ]ÙXÛÛ™Ú[\”ÜÚ][ÛŠ]™[
NÃBˆÛÛœÝHH
ˆ
]™[œYÙV
ÈÜÚ][Û‹ž
NÃBˆÛÛœÝHHH
ˆ
]™[œYÙVH
ÈÜÚ][Û‹žJNÃBˆ\Ë—Ü›Ý]Q[™œÙ]
JNÃBˆCBˆ\Ë—Ü›Ý]Q[KœÝX•™XÝÜœÊ\Ë—Ü›Ý]Q[™\Ë—Ü›Ý]TÝ\
K›][\TØØ[\Š\Ëœ›Ý]TÜYY
NÃBˆÛÛœÝ[[Y[H\Ë™ÛQ[[Y[ÃBˆ\Ë—Ü›Ý]SY
ÝÛÔH
ˆ\Ë—Ü›Ý]Q[KžÈ[[Y[˜ÛY[ZYÚ
NÃBˆ\Ë—Ü›Ý]U\
ÝÛÔH
ˆ\Ë—Ü›Ý]Q[KžHÈ[[Y[˜ÛY[ZYÚ
NÃBˆ\Ë—Ü›Ý]TÝ\˜ÛÜJ\Ë—Ü›Ý]Q[™
NÃBˆCBˆÚ[™UÝXÚ[Ý™T[Š]™[
HÃBˆYˆ
\Ë—ÜÚ[\œË›[™ÝOOHJHÃBˆ\Ë—Ü[‘[™œÙ]
]™[œYÙV]™[œYÙVJNÃBˆH[ÙHÃBˆÛÛœÝÜÚ][ÛˆH\Ë—ÙÙ]ÙXÛÛ™Ú[\”ÜÚ][ÛŠ]™[
NÃBˆÛÛœÝHH
ˆ
]™[œYÙV
ÈÜÚ][Û‹ž
NÃBˆÛÛœÝHHH
ˆ
]™[œYÙVH
ÈÜÚ][Û‹žJNÃBˆ\Ë—Ü[‘[™œÙ]
JNÃBˆCBˆ\Ë—Ü[‘[KœÝX•™XÝÜœÊ\Ë—Ü[‘[™\Ë—Ü[”Ý\
K›][\TØØ[\Š\Ëœ[”ÜYY
NÃBˆ\Ë—Ü[Š\Ë—Ü[‘[Kž\Ë—Ü[‘[KžJNÃBˆ\Ë—Ü[”Ý\˜ÛÜJ\Ë—Ü[‘[™
NÃBˆCBˆÚ[™UÝXÚ[Ý™QÛJ]™[
HÃBˆÛÛœÝÜÚ][ÛˆH\Ë—ÙÙ]ÙXÛÛ™Ú[\”ÜÚ][ÛŠ]™[
NÃBˆÛÛœÝH]™[œYÙVHÜÚ][Û‹žÃBˆÛÛœÝHH]™[œYÙVHHÜÚ][Û‹žNÃBˆÛÛœÝ\Ý[˜ÙHHX]œÜ\

ˆ
ÈH
ˆJNÃBˆ\Ë—ÙÛQ[™œÙ]
\Ý[˜ÙJNÃBˆ\Ë—ÙÛQ[KœÙ]
X]œÝÊ\Ë—ÙÛQ[™žHÈ\Ë—ÙÛTÝ\žK\Ëž›ÛÛTÜYY
JNÃBˆ\Ë—ÙÛSÝ]
\Ë—ÙÛQ[KžJNÃBˆ\Ë—ÙÛTÝ\˜ÛÜJ\Ë—ÙÛQ[™
NÃBˆÛÛœÝÙ[\–H
]™[œYÙV
ÈÜÚ][Û‹ž
H
ˆNÃBˆÛÛœÝÙ[\–HH
]™[œYÙVH
ÈÜÚ][Û‹žJH
ˆNÃBˆ\Ë—Ý\]V›ÛÛT\˜[Y]\œÊÙ[\–Ù[\–JNÃBˆCBˆÚ[™UÝXÚ[Ý™QÛT[Š]™[
HÃBˆYˆ
\Ë™[˜X›V›ÛÛJH\Ë—Ú[™UÝXÚ[Ý™QÛJ]™[
NÃBˆYˆ
\Ë™[˜X›T[ŠH\Ë—Ú[™UÝXÚ[Ý™T[Š]™[
NÃBˆCBˆÚ[™UÝXÚ[Ý™QÛT›Ý]J]™[
HÃBˆYˆ
\Ë™[˜X›V›ÛÛJH\Ë—Ú[™UÝXÚ[Ý™QÛJ]™[
NÃBˆYˆ
\Ë™[˜X›T›Ý]JH\Ë—Ú[™UÝXÚ[Ý™T›Ý]J]™[
NÃBˆCBˆËÈÚ[\œÃBˆØYÚ[\Š]™[
HÃBˆ\Ë—ÜÚ[\œËœ\Ú
]™[œÚ[\’Y
NÃBˆCBˆÜ™[[Ý™TÚ[\Š]™[
HÃBˆ[]H\Ë—ÜÚ[\”ÜÚ][ÛœÖÙ]™[œÚ[\’YNÃBˆ›Üˆ
]HHÈH\Ë—ÜÚ[\œË›[™ÝÈJÊÊHÃBˆYˆ
\Ë—ÜÚ[\œÖÚWHOH]™[œÚ[\’Y
HÃBˆ\Ë—ÜÚ[\œËœÜXÙJKJNÃBˆ™]\›ŽÃBˆCBˆCBˆCBˆÚ\Õ˜XÚÚ[™ÔÚ[\Š]™[
HÃBˆ›Üˆ
]HHÈH\Ë—ÜÚ[\œË›[™ÝÈJÊÊHÃBˆYˆ
\Ë—ÜÚ[\œÖÚWHOH]™[œÚ[\’Y
H™]\›ˆYNÃBˆCBˆ™]\›ˆ˜[ÙNÃBˆCBˆÝ˜XÚÔÚ[\Š]™[
HÃBˆ]ÜÚ][ÛˆH\Ë—ÜÚ[\”ÜÚ][ÛœÖÙ]™[œÚ[\’YNÃBˆYˆ
ÜÚ][ÛˆOOH›ÚY
HÃBˆÜÚ][ÛˆH™]È™XÝÜŒŠ
NÃBˆ\Ë—ÜÚ[\”ÜÚ][ÛœÖÙ]™[œÚ[\’YHHÜÚ][ÛŽÃBˆCBˆÜÚ][Û‹œÙ]
]™[œYÙV]™[œYÙVJNÃBˆCBˆÙÙ]ÙXÛÛ™Ú[\”ÜÚ][ÛŠ]™[
HÃBˆÛÛœÝÚ[\’YH]™[œÚ[\’YOOH\Ë—ÜÚ[\œÖÌHÈ\Ë—ÜÚ[\œÖÌWHˆ\Ë—ÜÚ[\œÖÌNÃBˆ™]\›ˆ\Ë—ÜÚ[\”ÜÚ][ÛœÖÜÚ[\’YNÃBˆCBˆËÃBˆØÝ\ÝÛUÚY[]™[
]™[
HÃBˆÛÛœÝ[ÙHH]™[™[S[ÙNÃBˆÛÛœÝ™]Ñ]™[HÃBˆÛY[ˆ]™[˜ÛY[BˆÛY[Nˆ]™[˜ÛY[KBˆ[VNˆ]™[™[VCBˆNÃBˆÝÚ]Ú
[ÙJHÃBˆØ\ÙHNƒBˆ™]Ñ]™[™[VH
HMŽÃBˆœ™XZÎÃBˆØ\ÙHŽƒBˆ™]Ñ]™[™[VH
HLÃBˆœ™XZÎÃBˆCBˆYˆ
]™[˜Ý›Ù^H	‰ˆ]\Ë—ØÛÛ›ÛXÝ]™JHÃBˆ™]Ñ]™[™[VH
HLÃBˆCBˆ™]\›ˆ™]Ñ]™[ÃBˆCBˆNÃBˆ[˜Ý[ÛˆÛ”Ú[\‘ÝÛŠ]™[
HÃBˆYˆ
\Ë™[˜X›YOOH˜[ÙJH™]\›ŽÃBˆYˆ
\Ë—ÜÚ[\œË›[™ÝOOH
HÃBˆ\Ë™ÛQ[[Y[œÙ]Ú[\Ø\\™J]™[œÚ[\’Y
NÃBˆ\Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠœÚ[\›[Ý™H‹\Ë—ÛÛ”Ú[\“[Ý™JNÃBˆ\Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠœÚ[\\‹\Ë—ÛÛ”Ú[\•\
NÃBˆCBˆYˆ
\Ë—Ú\Õ˜XÚÚ[™ÔÚ[\Š]™[
JH™]\›ŽÃBˆ\Ë—ØYÚ[\Š]™[
NÃBˆYˆ
]™[œÚ[\•\HOOHÝXÚŠHÃBˆ\Ë—ÛÛ•ÝXÚÝ\
]™[
NÃBˆH[ÙHÃBˆ\Ë—ÛÛ“[Ý\ÙQÝÛŠ]™[
NÃBˆCBˆCBˆ[˜Ý[ÛˆÛ”Ú[\“[Ý™J]™[
HÃBˆYˆ
\Ë™[˜X›YOOH˜[ÙJH™]\›ŽÃBˆYˆ
]™[œÚ[\•\HOOHÝXÚŠHÃBˆ\Ë—ÛÛ•ÝXÚ[Ý™J]™[
NÃBˆH[ÙHÃBˆ\Ë—ÛÛ“[Ý\ÙS[Ý™J]™[
NÃBˆCBˆCBˆ[˜Ý[ÛˆÛ”Ú[\•\
]™[
HÃBˆ\Ë—Ü™[[Ý™TÚ[\Š]™[
NÃBˆÝÚ]Ú
\Ë—ÜÚ[\œË›[™Ý
HÃBˆØ\ÙHƒBˆ\Ë™ÛQ[[Y[œ™[X\ÙTÚ[\Ø\\™J]™[œÚ[\’Y
NÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›[Ý™H‹\Ë—ÛÛ”Ú[\“[Ý™JNÃBˆ\Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\\‹\Ë—ÛÛ”Ú[\•\
NÃBˆ\Ë™\Ü]Ú]™[
Ù[™]™[
NÃBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆœ™XZÎÃBˆØ\ÙHNƒBˆÛÛœÝÚ[\’YH\Ë—ÜÚ[\œÖÌNÃBˆÛÛœÝÜÚ][ÛˆH\Ë—ÜÚ[\”ÜÚ][ÛœÖÜÚ[\’YNÃBˆ\Ë—ÛÛ•ÝXÚÝ\
ÈÚ[\’YYÙVˆÜÚ][Û‹žYÙVNˆÜÚ][Û‹žHJNÃBˆœ™XZÎÃBˆCBˆCBˆ[˜Ý[ÛˆÛ“[Ý\ÙQÝÛŠ]™[
HÃBˆ][Ý\ÙPXÝ[ÛŽÃBˆÝÚ]Ú
]™[˜]ÛŠHÃBˆØ\ÙHƒBˆ[Ý\ÙPXÝ[ÛˆH\Ë›[Ý\ÙP]ÛœË“Q•ÃBˆœ™XZÎÃBˆØ\ÙHNƒBˆ[Ý\ÙPXÝ[ÛˆH\Ë›[Ý\ÙP]ÛœË“RQNÃBˆœ™XZÎÃBˆØ\ÙHŽƒBˆ[Ý\ÙPXÝ[ÛˆH\Ë›[Ý\ÙP]ÛœË”’QÒÃBˆœ™XZÎÃBˆY˜][ƒBˆ[Ý\ÙPXÝ[ÛˆHLNÃBˆCBˆÝÚ]Ú
[Ý\ÙPXÝ[ÛŠHÃBˆØ\ÙHSÕTÑK‘ÓNƒBˆYˆ
\Ë™[˜X›V›ÛÛHOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙQÝÛ‘ÛJ]™[
NÃBˆ\ËœÝ]HHÔÕUK‘ÓNÃBˆœ™XZÎÃBˆØ\ÙHSÕTÑK”“ÕUNƒBˆYˆ
]™[˜Ý›Ù^H]™[›Y]RÙ^H]™[œÚYÙ^JHÃBˆYˆ
\Ë™[˜X›T[ˆOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙQÝÛ”[Š]™[
NÃBˆ\ËœÝ]HHÔÕUK”SŽÃBˆH[ÙHÃBˆYˆ
\Ë™[˜X›T›Ý]HOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙQÝÛ”›Ý]J]™[
NÃBˆ\ËœÝ]HHÔÕUK”“ÕUNÃBˆCBˆœ™XZÎÃBˆØ\ÙHSÕTÑK”SŽƒBˆYˆ
]™[˜Ý›Ù^H]™[›Y]RÙ^H]™[œÚYÙ^JHÃBˆYˆ
\Ë™[˜X›T›Ý]HOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙQÝÛ”›Ý]J]™[
NÃBˆ\ËœÝ]HHÔÕUK”“ÕUNÃBˆH[ÙHÃBˆYˆ
\Ë™[˜X›T[ˆOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙQÝÛ”[Š]™[
NÃBˆ\ËœÝ]HHÔÕUK”SŽÃBˆCBˆœ™XZÎÃBˆY˜][ƒBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆCBˆYˆ
\ËœÝ]HOOHÔÕUK““Ó‘JHÃBˆ\Ë™\Ü]Ú]™[
ÜÝ\]™[
NÃBˆCBˆCBˆ[˜Ý[ÛˆÛ“[Ý\ÙS[Ý™J]™[
HÃBˆÝÚ]Ú
\ËœÝ]JHÃBˆØ\ÙHÔÕUK”“ÕUNƒBˆYˆ
\Ë™[˜X›T›Ý]HOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙS[Ý™T›Ý]J]™[
NÃBˆœ™XZÎÃBˆØ\ÙHÔÕUK‘ÓNƒBˆYˆ
\Ë™[˜X›V›ÛÛHOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙS[Ý™QÛJ]™[
NÃBˆœ™XZÎÃBˆØ\ÙHÔÕUK”SŽƒBˆYˆ
\Ë™[˜X›T[ˆOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™S[Ý\ÙS[Ý™T[Š]™[
NÃBˆœ™XZÎÃBˆCBˆCBˆ[˜Ý[ÛˆÛ“[Ý\ÙUÚY[
]™[
HÃBˆYˆ
\Ë™[˜X›YOOH˜[ÙH\Ë™[˜X›V›ÛÛHOOH˜[ÙH\ËœÝ]HOOHÔÕUK““Ó‘JH™]\›ŽÃBˆ]™[œ™]™[Y˜][

NÃBˆ\Ë™\Ü]Ú]™[
ÜÝ\]™[
NÃBˆ\Ë—Ú[™S[Ý\ÙUÚY[
\Ë—ØÝ\ÝÛUÚY[]™[
]™[
JNÃBˆ\Ë™\Ü]Ú]™[
Ù[™]™[
NÃBˆCBˆ[˜Ý[ÛˆÛ’Ù^QÝÛŠ]™[
HÃBˆYˆ
\Ë™[˜X›YOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™RÙ^QÝÛŠ]™[
NÃBˆCBˆ[˜Ý[ÛˆÛ•ÝXÚÝ\
]™[
HÃBˆ\Ë—Ý˜XÚÔÚ[\Š]™[
NÃBˆÝÚ]Ú
\Ë—ÜÚ[\œË›[™Ý
HÃBˆØ\ÙHNƒBˆÝÚ]Ú
\ËÝXÚ\Ë“Ó‘JHÃBˆØ\ÙHÕPÒ”“ÕUNƒBˆYˆ
\Ë™[˜X›T›Ý]HOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚÝ\›Ý]J]™[
NÃBˆ\ËœÝ]HHÔÕUK•ÕPÒÔ“ÕUNÃBˆœ™XZÎÃBˆØ\ÙHÕPÒ”SŽƒBˆYˆ
\Ë™[˜X›T[ˆOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚÝ\[Š]™[
NÃBˆ\ËœÝ]HHÔÕUK•ÕPÒÔSŽÃBˆœ™XZÎÃBˆY˜][ƒBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆCBˆœ™XZÎÃBˆØ\ÙHŽƒBˆÝÚ]Ú
\ËÝXÚ\Ë•ÓÊHÃBˆØ\ÙHÕPÒ‘ÓWÔSŽƒBˆYˆ
\Ë™[˜X›V›ÛÛHOOH˜[ÙH	‰ˆ\Ë™[˜X›T[ˆOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚÝ\ÛT[Š]™[
NÃBˆ\ËœÝ]HHÔÕUK•ÕPÒÑÓWÔSŽÃBˆœ™XZÎÃBˆØ\ÙHÕPÒ‘ÓWÔ“ÕUNƒBˆYˆ
\Ë™[˜X›V›ÛÛHOOH˜[ÙH	‰ˆ\Ë™[˜X›T›Ý]HOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚÝ\ÛT›Ý]J]™[
NÃBˆ\ËœÝ]HHÔÕUK•ÕPÒÑÓWÔ“ÕUNÃBˆœ™XZÎÃBˆY˜][ƒBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆCBˆœ™XZÎÃBˆY˜][ƒBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆCBˆYˆ
\ËœÝ]HOOHÔÕUK““Ó‘JHÃBˆ\Ë™\Ü]Ú]™[
ÜÝ\]™[
NÃBˆCBˆCBˆ[˜Ý[ÛˆÛ•ÝXÚ[Ý™J]™[
HÃBˆ\Ë—Ý˜XÚÔÚ[\Š]™[
NÃBˆÝÚ]Ú
\ËœÝ]JHÃBˆØ\ÙHÔÕUK•ÕPÒÔ“ÕUNƒBˆYˆ
\Ë™[˜X›T›Ý]HOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚ[Ý™T›Ý]J]™[
NÃBˆ\Ë\]J
NÃBˆœ™XZÎÃBˆØ\ÙHÔÕUK•ÕPÒÔSŽƒBˆYˆ
\Ë™[˜X›T[ˆOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚ[Ý™T[Š]™[
NÃBˆ\Ë\]J
NÃBˆœ™XZÎÃBˆØ\ÙHÔÕUK•ÕPÒÑÓWÔSŽƒBˆYˆ
\Ë™[˜X›V›ÛÛHOOH˜[ÙH	‰ˆ\Ë™[˜X›T[ˆOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚ[Ý™QÛT[Š]™[
NÃBˆ\Ë\]J
NÃBˆœ™XZÎÃBˆØ\ÙHÔÕUK•ÕPÒÑÓWÔ“ÕUNƒBˆYˆ
\Ë™[˜X›V›ÛÛHOOH˜[ÙH	‰ˆ\Ë™[˜X›T›Ý]HOOH˜[ÙJH™]\›ŽÃBˆ\Ë—Ú[™UÝXÚ[Ý™QÛT›Ý]J]™[
NÃBˆ\Ë\]J
NÃBˆœ™XZÎÃBˆY˜][ƒBˆ\ËœÝ]HHÔÕUK““Ó‘NÃBˆCBˆCBˆ[˜Ý[ÛˆÛÛÛ^Y[J]™[
HÃBˆYˆ
\Ë™[˜X›YOOH˜[ÙJH™]\›ŽÃBˆ]™[œ™]™[Y˜][

NÃBˆCBˆ[˜Ý[Ûˆ[\˜Ù\ÛÛ›ÛÝÛŠ]™[
HÃBˆYˆ
]™[šÙ^HOOHÛÛ›ÛŠHÃBˆ\Ë—ØÛÛ›ÛXÝ]™HHYNÃBˆÛÛœÝØÝ[Y[ˆH\Ë™ÛQ[[Y[™Ù]›ÛÝ›ÙJ
NÃBˆØÝ[Y[‹˜Y]™[\Ý[™\ŠšÙ^]\‹\Ë—Ú[\˜Ù\ÛÛ›Û\È\ÜÚ]™NˆYKØ\\™NˆYHJNÃBˆCBˆCBˆ[˜Ý[Ûˆ[\˜Ù\ÛÛ›Û\
]™[
HÃBˆYˆ
]™[šÙ^HOOHÛÛ›ÛŠHÃBˆ\Ë—ØÛÛ›ÛXÝ]™HH˜[ÙNÃBˆÛÛœÝØÝ[Y[ˆH\Ë™ÛQ[[Y[™Ù]›ÛÝ›ÙJ
NÃBˆØÝ[Y[‹œ™[[Ý™Q]™[\Ý[™\ŠšÙ^]\‹\Ë—Ú[\˜Ù\ÛÛ›Û\È\ÜÚ]™NˆYKØ\\™NˆYHJNÃBˆCBˆCBƒBˆËÈ›ÙWÛ[Ù[\ËÝ™YKÙ^[\\ËÚœÛKÝ][ËÐY™™\‘Ù[ÛY]žU][ËšœÃBˆ[˜Ý[ÛˆÕšX[™Û\Ñ˜]Ó[ÙJÙ[ÛY]žK˜]Ó[ÙJHÃBˆYˆ
˜]Ó[ÙHOOHšX[™Û\Ñ˜]Ó[ÙJHÃBˆÛÛœÛÛKØ\›Š•‘QKY™™\‘Ù[ÛY]žU][ËÕšX[™Û\Ñ˜]Ó[ÙJ
NˆÙ[ÛY]žH[™XYHYš[™Y\ÈšX[™Û\ËˆŠNÃBˆ™]\›ˆÙ[ÛY]žNÃBˆCBˆYˆ
˜]Ó[ÙHOOHšX[™ÛQ˜[‘˜]Ó[ÙH˜]Ó[ÙHOOHšX[™ÛTÝš\˜]Ó[ÙJHÃBˆ][™^HÙ[ÛY]žK™Ù][™^

NÃBˆYˆ
[™^OOH[
HÃBˆÛÛœÝ[™XÙ\ÈH×NÃBˆÛÛœÝÜÚ][ÛˆHÙ[ÛY]žK™Ù]]šX]JœÜÚ][ÛˆŠNÃBˆYˆ
ÜÚ][ÛˆOOH›ÚY
HÃBˆ›Üˆ
]HHÈHÜÚ][Û‹˜ÛÝ[ÈJÊÊHÃBˆ[™XÙ\Ëœ\Ú
JNÃBˆCBˆÙ[ÛY]žKœÙ][™^
[™XÙ\ÊNÃBˆ[™^HÙ[ÛY]žK™Ù][™^

NÃBˆH[ÙHÃBˆÛÛœÛÛK™\œ›ÜŠ•‘QKY™™\‘Ù[ÛY]žU][ËÕšX[™Û\Ñ˜]Ó[ÙJ
Nˆ[™Yš[™YÜÚ][Ûˆ]šX]Kˆ›ØÙ\ÜÚ[™È›ÝÜÜÚX›KˆŠNÃBˆ™]\›ˆÙ[ÛY]žNÃBˆCBˆCBˆÛÛœÝ[X™\“Ù•šX[™Û\ÈH[™^˜ÛÝ[HŽÃBˆÛÛœÝ™]Ò[™XÙ\ÈH×NÃBˆYˆ
˜]Ó[ÙHOOHšX[™ÛQ˜[‘˜]Ó[ÙJHÃBˆ›Üˆ
]HHNÈHH[X™\“Ù•šX[™Û\ÎÈJÊÊHÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]

JNÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
JJNÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
H
ÈJJNÃBˆCBˆH[ÙHÃBˆ›Üˆ
]HHÈH[X™\“Ù•šX[™Û\ÎÈJÊÊHÃBˆYˆ
H	HˆOOH
HÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
JJNÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
H
ÈJJNÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
H
ÈŠJNÃBˆH[ÙHÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
H
ÈŠJNÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
H
ÈJJNÃBˆ™]Ò[™XÙ\Ëœ\Ú
[™^™Ù]
JJNÃBˆCBˆCBˆCBˆYˆ
™]Ò[™XÙ\Ë›[™ÝÈÈOOH[X™\“Ù•šX[™Û\ÊHÃBˆÛÛœÛÛK™\œ›ÜŠ•‘QKY™™\‘Ù[ÛY]žU][ËÕšX[™Û\Ñ˜]Ó[ÙJ
Nˆ[˜X›HÈÙ[™\˜]HÛÜœ™XÝ[[Ý[ÙˆšX[™Û\ËˆŠNÃBˆCBˆÛÛœÝ™]ÑÙ[ÛY]žHHÙ[ÛY]žK˜ÛÛ™J
NÃBˆ™]ÑÙ[ÛY]žKœÙ][™^
™]Ò[™XÙ\ÊNÃBˆ™]ÑÙ[ÛY]žK˜ÛX\‘Ü›Ý\Ê
NÃBˆ™]\›ˆ™]ÑÙ[ÛY]žNÃBˆH[ÙHÃBˆÛÛœÛÛK™\œ›ÜŠ•‘QKY™™\‘Ù[ÛY]žU][ËÕšX[™Û\Ñ˜]Ó[ÙJ
Nˆ[šÛ›ÝÛˆ˜]È[ÙNˆ‹˜]Ó[ÙJNÃBˆ™]\›ˆÙ[ÛY]žNÃBˆCBˆCBƒBˆËÈ›ÙWÛ[Ù[\ËÝ™YKÙ^[\\ËÚœÛKÛØY\œËÑÓ“ØY\‹šœÃBˆ˜\ˆÓ“ØY\ˆHÛ\ÜÈ^[™ÈØY\ˆÃBˆÊŠƒBˆ
ˆÛÛœÝXÝÈH™]ÈÛˆØY\‹ƒBˆ
ƒBˆ
ˆ\˜[HÓØY[™ÓX[˜YÙ\ŸHÛX[˜YÙ\—HHHØY[™ÈX[˜YÙ\‹ƒBˆ
‹ÃBˆÛÛœÝXÝÜŠX[˜YÙ\ŠHÃBˆÝ\\ŠX[˜YÙ\ŠNÃBˆ\Ë™˜XÛÓØY\ˆH[ÃBˆ\ËšÝ“ØY\ˆH[ÃBˆ\Ë›Y\ÚÜXÛÙ\ˆH[ÃBˆ\ËœYÚ[Ø[˜XÚÜÈH×NÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[ÐÛX\˜ÛØ]^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Ñ\Ü\œÚ[Û‘^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ•^\™P˜\Ú\ÕQ^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ•^\™UÙX”^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ•^\™PU’Q‘^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[ÔÚY[‘^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Õ˜[œÛZ\ÜÚ[Û‘^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Õ›Û[YQ^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Ò[Ü‘^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Ñ[Z\ÜÚ]™TÝ™[™Ý^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[ÔÜXÝ[\‘^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Ò\šY\ØÙ[˜ÙQ^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Ð[š\ÛÝ›ÜQ^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“X]\šX[Ð[\^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“YÚÑ^[œÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“Y\ÚÜÛÛ\™\ÜÚ[ÛŠ\œÙ\ŠNÃBˆJNÃBˆ\Ëœ™YÚ\Ý\Š[˜Ý[ÛŠ\œÙ\ŠHÃBˆ™]\›ˆ™]ÈÓ“Y\ÚÜR[œÝ[˜Ú[™Ê\œÙ\ŠNÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÝ\ÈØY[™Èœ›ÛHHÚ]™[ˆT“[™\ÜÙ\ÈHØYYÛˆ\ÜÙ]Bˆ
ˆÈHÛ“ØY

XØ[˜XÚËƒBˆ
ƒBˆ
ˆ\˜[HÜÝš[™ßH\›HH]ÕT“ÙˆHš[HÈ™HØYYˆ\ÈØ[ˆ[ÛÈ™HH]HT’KƒBˆ
ˆ\˜[HÙ[˜Ý[ÛŠÓ“ØY\Ÿ“ØYØš™XÝ
_HÛ“ØYH^XÝ]YÚ[ˆHØY[™È›ØÙ\ÜÈ\È™Y[ˆš[š\ÚYƒBˆ
ˆ\˜[HÛÛ”›ÙÜ™\ÜÐØ[˜XÚßHÛ”›ÙÜ™\ÜÈH^XÝ]YÚ[HHØY[™È\È[ˆ›ÙÜ™\ÜËƒBˆ
ˆ\˜[HÛÛ‘\œ›ÜØ[˜XÚßHÛ‘\œ›ÜˆH^XÝ]YÚ[ˆ\œ›ÜœÈØØÝ\‹ƒBˆ
‹ÃBˆØY
\›Û“ØYÛ”›ÙÜ™\ÜËÛ‘\œ›ÜŠHÃBˆÛÛœÝØÛÜHH\ÎÃBˆ]™\ÛÝ\˜ÙT]ÃBˆYˆ
\Ëœ™\ÛÝ\˜ÙT]OOHˆŠHÃBˆ™\ÛÝ\˜ÙT]H\Ëœ™\ÛÝ\˜ÙT]ÃBˆH[ÙHYˆ
\Ëœ]OOHˆŠHÃBˆÛÛœÝ™[]]™U\›HØY\•][Ë™^˜XÝ\›˜\ÙJ\›
NÃBˆ™\ÛÝ\˜ÙT]HØY\•][Ëœ™\ÛÛ™UT“
™[]]™U\›\Ëœ]
NÃBˆH[ÙHÃBˆ™\ÛÝ\˜ÙT]HØY\•][Ë™^˜XÝ\›˜\ÙJ\›
NÃBˆCBˆ\Ë›X[˜YÙ\‹š][TÝ\
\›
NÃBˆÛÛœÝÛÛ‘\œ›ÜˆH[˜Ý[ÛŠJHÃBˆYˆ
Û‘\œ›ÜŠHÃBˆÛ‘\œ›ÜŠJNÃBˆH[ÙHÃBˆÛÛœÛÛK™\œ›ÜŠJNÃBˆCBˆØÛÜK›X[˜YÙ\‹š][Q\œ›ÜŠ\›
NÃBˆØÛÜK›X[˜YÙ\‹š][Q[™
\›
NÃBˆNÃBˆÛÛœÝØY\ŒˆH™]Èš[SØY\Š\Ë›X[˜YÙ\ŠNÃBˆØY\Œ‹œÙ]]
\Ëœ]
NÃBˆØY\Œ‹œÙ]™\ÜÛœÙU\J˜\œ˜^XY™™\ˆŠNÃBˆØY\Œ‹œÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠNÃBˆØY\Œ‹œÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊNÃBˆØY\Œ‹›ØY
\›[˜Ý[ÛŠ]JHÃBˆžHÃBˆØÛÜKœ\œÙJ]K™\ÛÝ\˜ÙT][˜Ý[ÛŠÛŠHÃBˆÛ“ØY
ÛŠNÃBˆØÛÜK›X[˜YÙ\‹š][Q[™
\›
NÃBˆKÛÛ‘\œ›ÜŠNÃBˆHØ]Ú
JHÃBˆÛÛ‘\œ›ÜŠJNÃBˆCBˆKÛ”›ÙÜ™\ÜËÛÛ‘\œ›ÜŠNÃBˆCBˆÊŠƒBˆ
ˆÙ]ÈHÚ]™[ˆ˜XÛÈØY\ˆÈ\ÈØY\‹ˆ™\]Z\™Y›ÜˆXÛÙ[™È\ÜÙ]ÃBˆ
ˆÛÛ\™\ÜÙYÚ]HÒ—Ù˜XÛ×ÛY\ÚØÛÛ\™\ÜÚ[Û˜^[œÚ[Û‹ƒBˆ
ƒBˆ
ˆ\˜[HÑPÓÓØY\ŸH˜XÛÓØY\ˆHH˜XÛÈØY\ˆÈÙ]ƒBˆ
ˆ™]\›ˆÑÓ“ØY\ŸHH™Y™\™[˜ÙHÈ\ÈØY\‹ƒBˆ
‹ÃBˆÙ]PÓÓØY\Š˜XÛÓØY\ŠHÃBˆ\Ë™˜XÛÓØY\ˆH˜XÛÓØY\ŽÃBˆ™]\›ˆ\ÎÃBˆCBˆÊŠƒBˆ
ˆÙ]ÈHÚ]™[ˆÕˆØY\ˆÈ\ÈØY\‹ˆ™\]Z\™Y›ÜˆØY[™ÈÕƒBˆ
ˆÛÛ\™\ÜÙY^\™\ËƒBˆ
ƒBˆ
ˆ\˜[HÒÕ“ØY\ŸHÝ“ØY\ˆHHÕˆØY\ˆÈÙ]ƒBˆ
ˆ™]\›ˆÑÓ“ØY\ŸHH™Y™\™[˜ÙHÈ\ÈØY\‹ƒBˆ
‹ÃBˆÙ]Õ“ØY\ŠÝ“ØY\ŠHÃBˆ\ËšÝ“ØY\ˆHÝ“ØY\ŽÃBˆ™]\›ˆ\ÎÃBˆCBˆÊŠƒBˆ
ˆÙ]ÈHÚ]™[ˆY\ÚÜXÛÙ\‹ˆ™\]Z\™Y›ÜˆXÛÙ[™È\ÜÙ]ÃBˆ
ˆÛÛ\™\ÜÙYÚ]HVÛY\ÚÜØÛÛ\™\ÜÚ[Û˜^[œÚ[Û‹ƒBˆ
ƒBˆ
ˆ\˜[HÓØš™XÝHY\ÚÜXÛÙ\ˆHHY\ÚÜXÛÙ\ˆÈÙ]ƒBˆ
ˆ™]\›ˆÑÓ“ØY\ŸHH™Y™\™[˜ÙHÈ\ÈØY\‹ƒBˆ
‹ÃBˆÙ]Y\ÚÜXÛÙ\ŠY\ÚÜXÛÙ\ŠHÃBˆ\Ë›Y\ÚÜXÛÙ\ˆHY\ÚÜXÛÙ\ŽÃBˆ™]\›ˆ\ÎÃBˆCBˆÊŠƒBˆ
ˆ™YÚ\Ý\œÈHYÚ[ˆØ[˜XÚËˆ\ÈTH\È[\›˜[H\ÙYÈ[\[Y[H˜\š[Ý\ÃBˆ
ˆÛˆ^[œÚ[ÛœÈ]Ø[ˆ[ÛÈ\ÙYžH\™\\HÛÙHÈYY][Û˜[ÙÚXÃBˆ
ˆÈHØY\‹ƒBˆ
ƒBˆ
ˆ\˜[HÙ[˜Ý[ÛŠ\œÙ\Ž‘Ó”\œÙ\Š_HØ[˜XÚÈHHØ[˜XÚÈ[˜Ý[ÛˆÈ™YÚ\Ý\‹ƒBˆ
ˆ™]\›ˆÑÓ“ØY\ŸHH™Y™\™[˜ÙHÈ\ÈØY\‹ƒBˆ
‹ÃBˆ™YÚ\Ý\ŠØ[˜XÚÊHÃBˆYˆ
\ËœYÚ[Ø[˜XÚÜËš[™^ÙŠØ[˜XÚÊHOOHLJHÃBˆ\ËœYÚ[Ø[˜XÚÜËœ\Ú
Ø[˜XÚÊNÃBˆCBˆ™]\›ˆ\ÎÃBˆCBˆÊŠƒBˆ
ˆ[œ™YÚ\Ý\œÈHYÚ[ˆØ[˜XÚËƒBˆ
ƒBˆ
ˆ\˜[HÑ[˜Ý[ÛŸHØ[˜XÚÈHHØ[˜XÚÈ[˜Ý[ÛˆÈ[œ™YÚ\Ý\‹ƒBˆ
ˆ™]\›ˆÑÓ“ØY\ŸHH™Y™\™[˜ÙHÈ\ÈØY\‹ƒBˆ
‹ÃBˆ[œ™YÚ\Ý\ŠØ[˜XÚÊHÃBˆYˆ
\ËœYÚ[Ø[˜XÚÜËš[™^ÙŠØ[˜XÚÊHOOHLJHÃBˆ\ËœYÚ[Ø[˜XÚÜËœÜXÙJ\ËœYÚ[Ø[˜XÚÜËš[™^ÙŠØ[˜XÚÊKJNÃBˆCBˆ™]\›ˆ\ÎÃBˆCBˆÊŠƒBˆ
ˆ\œÙ\ÈHÚ]™[ˆ–]H[™™]\›œÈH™\Ý[[™ÈÜ›Ý\ƒBˆ
ƒBˆ
ˆ\˜[HÜÝš[™ß\œ˜^PY™™\ŸH]HHH˜]ÈÛˆ]KƒBˆ
ˆ\˜[HÜÝš[™ßH]HHT“˜\ÙH]ƒBˆ
ˆ\˜[HÙ[˜Ý[ÛŠÓ“ØY\Ÿ“ØYØš™XÝ
_HÛ“ØYH^XÝ]YÚ[ˆHØY[™È›ØÙ\ÜÈ\È™Y[ˆš[š\ÚYƒBˆ
ˆ\˜[HÛÛ‘\œ›ÜØ[˜XÚßHÛ‘\œ›ÜˆH^XÝ]YÚ[ˆ\œ›ÜœÈØØÝ\‹ƒBˆ
‹ÃBˆ\œÙJ]K]Û“ØYÛ‘\œ›ÜŠHÃBˆ]œÛÛŽÃBˆÛÛœÝ^[œÚ[ÛœÈHßNÃBˆÛÛœÝYÚ[œÈHßNÃBˆÛÛœÝ^XÛÙ\ˆH™]È^XÛÙ\Š
NÃBˆYˆ
\[Ùˆ]HOOHœÝš[™ÈŠHÃBˆœÛÛˆH”ÓÓ‹œ\œÙJ]JNÃBˆH[ÙHYˆ
]H[œÝ[˜Ù[Ùˆ\œ˜^PY™™\ŠHÃBˆÛÛœÝXYÚXÈH^XÛÙ\‹™XÛÙJ™]ÈZ[\œ˜^J]K
JNÃBˆYˆ
XYÚXÈOOH’ST–WÑVS”ÒSÓ—ÒPQT—ÓPQÒPÊHÃBˆžHÃBˆ^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—Ð’ST–WÑÓ—HH™]ÈÓš[˜\žQ^[œÚ[ÛŠ]JNÃBˆHØ]Ú
\œ›ÜŠHÃBˆYˆ
Û‘\œ›ÜŠHÛ‘\œ›ÜŠ\œ›ÜŠNÃBˆ™]\›ŽÃBˆCBˆœÛÛˆH”ÓÓ‹œ\œÙJ^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—Ð’ST–WÑÓ—K˜ÛÛ[
NÃBˆH[ÙHÃBˆœÛÛˆH”ÓÓ‹œ\œÙJ^XÛÙ\‹™XÛÙJ]JJNÃBˆCBˆH[ÙHÃBˆœÛÛˆH]NÃBˆCBˆYˆ
œÛÛ‹˜\ÜÙ]OOH›ÚYœÛÛ‹˜\ÜÙ]™\œÚ[Û–ÌHŠHÃBˆYˆ
Û‘\œ›ÜŠHÛ‘\œ›ÜŠ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ[œÝ\ÜY\ÜÙ]ˆÛˆ™\œÚ[ÛœÈL‹Œ\™HÝ\ÜYˆŠJNÃBˆ™]\›ŽÃBˆCBˆÛÛœÝ\œÙ\ˆH™]ÈÓ”\œÙ\ŠœÛÛ‹ÃBˆ]ˆ]\Ëœ™\ÛÝ\˜ÙT]ˆ‹BˆÜ›ÜÜÓÜšYÚ[Žˆ\Ë˜Ü›ÜÜÓÜšYÚ[‹Bˆ™\]Y\ÝXY\Žˆ\Ëœ™\]Y\ÝXY\‹BˆX[˜YÙ\Žˆ\Ë›X[˜YÙ\‹BˆÝ“ØY\Žˆ\ËšÝ“ØY\‹BˆY\ÚÜXÛÙ\Žˆ\Ë›Y\ÚÜXÛÙ\ƒBˆJNÃBˆ\œÙ\‹™š[SØY\‹œÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠNÃBˆ›Üˆ
]HHÈH\ËœYÚ[Ø[˜XÚÜË›[™ÝÈJÊÊHÃBˆÛÛœÝYÚ[ˆH\ËœYÚ[Ø[˜XÚÜÖÚWJ\œÙ\ŠNÃBˆYˆ
\YÚ[‹›˜[YJHÛÛœÛÛK™\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ[˜[YYÚ[ˆ›Ý[™ˆZ\ÜÚ[™È˜[YHŠNÃBˆYÚ[œÖÜYÚ[‹›˜[YWHHYÚ[ŽÃBˆ^[œÚ[ÛœÖÜYÚ[‹›˜[YWHHYNÃBˆCBˆYˆ
œÛÛ‹™^[œÚ[ÛœÕ\ÙY
HÃBˆ›Üˆ
]HHÈHœÛÛ‹™^[œÚ[ÛœÕ\ÙY›[™ÝÈ
ÊÚJHÃBˆÛÛœÝ^[œÚ[Û“˜[YHHœÛÛ‹™^[œÚ[ÛœÕ\ÙYÚWNÃBˆÛÛœÝ^[œÚ[ÛœÔ™\]Z\™YHœÛÛ‹™^[œÚ[ÛœÔ™\]Z\™Y×NÃBˆÝÚ]Ú
^[œÚ[Û“˜[YJHÃBˆØ\ÙHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÕS“UƒBˆ^[œÚ[ÛœÖÙ^[œÚ[Û“˜[YWHH™]ÈÓ“X]\šX[Õ[›]^[œÚ[ÛŠ
NÃBˆœ™XZÎÃBˆØ\ÙHVS”ÒSÓ”Ë’Ò—ÑPÓ×ÓQTÒÐÓÓT‘TÔÒSÓŽƒBˆ^[œÚ[ÛœÖÙ^[œÚ[Û“˜[YWHH™]ÈÓ‘˜XÛÓY\ÚÛÛ\™\ÜÚ[Û‘^[œÚ[ÛŠœÛÛ‹\Ë™˜XÛÓØY\ŠNÃBˆœ™XZÎÃBˆØ\ÙHVS”ÒSÓ”Ë’Ò—ÕVT‘WÕS”Ñ“Ô“NƒBˆ^[œÚ[ÛœÖÙ^[œÚ[Û“˜[YWHH™]ÈÓ•^\™U˜[œÙ›Ü›Q^[œÚ[ÛŠ
NÃBˆœ™XZÎÃBˆØ\ÙHVS”ÒSÓ”Ë’Ò—ÓQTÒÔUPS•VUSÓŽƒBˆ^[œÚ[ÛœÖÙ^[œÚ[Û“˜[YWHH™]ÈÓ“Y\Ú]X[^˜][Û‘^[œÚ[ÛŠ
NÃBˆœ™XZÎÃBˆY˜][ƒBˆYˆ
^[œÚ[ÛœÔ™\]Z\™Yš[™^ÙŠ^[œÚ[Û“˜[YJHH	‰ˆYÚ[œÖÙ^[œÚ[Û“˜[YWHOOH›ÚY
HÃBˆÛÛœÛÛKØ\›Š	Õ‘QK‘Ó“ØY\Žˆ[šÛ›ÝÛˆ^[œÚ[Ûˆ‰È
È^[œÚ[Û“˜[YH
È	È‹‰ÊNÃBˆCBˆCBˆCBˆCBˆ\œÙ\‹œÙ]^[œÚ[ÛœÊ^[œÚ[ÛœÊNÃBˆ\œÙ\‹œÙ]YÚ[œÊYÚ[œÊNÃBˆ\œÙ\‹œ\œÙJÛ“ØYÛ‘\œ›ÜŠNÃBˆCBˆÊŠƒBˆ
ˆ\Þ[˜È™\œÚ[ÛˆÙˆÐ[šÈÓ“ØY\ˆÜ\œÙ_KƒBˆ
ƒBˆ
ˆ\Þ[˜ÃBˆ
ˆ\˜[HÜÝš[™ß\œ˜^PY™™\ŸH]HHH˜]ÈÛˆ]KƒBˆ
ˆ\˜[HÜÝš[™ßH]HHT“˜\ÙH]ƒBˆ
ˆ™]\›ˆÔ›ÛZ\ÙOÓ“ØY\Ÿ“ØYØš™XÝŸHH›ÛZ\ÙH]™\ÛÛ™\ÈÚ]HØYYÛˆÚ[ˆH\œÚ[™È\È™Y[ˆš[š\ÚYƒBˆ
‹ÃBˆ\œÙP\Þ[˜Ê]K]
HÃBˆÛÛœÝØÛÜHH\ÎÃBˆ™]\›ˆ™]È›ÛZ\ÙJ[˜Ý[ÛŠ™\ÛÛ™K™Z™XÝ
HÃBˆØÛÜKœ\œÙJ]K]™\ÛÛ™K™Z™XÝ
NÃBˆJNÃBˆCBˆNÃBˆ[˜Ý[ÛˆÓ”™YÚ\ÝžJ
HÃBˆ]Øš™XÝÈHßNÃBˆ™]\›ˆÃBˆÙ]ˆ[˜Ý[ÛŠÙ^LŠHÃBˆ™]\›ˆØš™XÝÖÚÙ^L—NÃBˆKBˆYˆ[˜Ý[ÛŠÙ^L‹Øš™XÝ
HÃBˆØš™XÝÖÚÙ^L—HHØš™XÝÃBˆKBˆ™[[Ý™Nˆ[˜Ý[ÛŠÙ^LŠHÃBˆ[]HØš™XÝÖÚÙ^L—NÃBˆKBˆ™[[Ý™P[ˆ[˜Ý[ÛŠ
HÃBˆØš™XÝÈHßNÃBˆCBˆNÃBˆCBˆ˜\ˆVS”ÒSÓ”ÈHÃBˆÒ—Ð’ST–WÑÓŽˆ’Ò—Øš[˜\žWÙÛˆ‹BˆÒ—ÑPÓ×ÓQTÒÐÓÓT‘TÔÒSÓŽˆ’Ò—Ù˜XÛ×ÛY\ÚØÛÛ\™\ÜÚ[Ûˆ‹BˆÒ—ÓQÒ×ÔSÕPSˆ’Ò—ÛYÚ×Ü[˜ÝX[‹BˆÒ—ÓPUT’PS×ÐÓPTÓÐUˆ’Ò—ÛX]\šX[×ØÛX\˜ÛØ]‹BˆÒ—ÓPUT’PS×ÑTÔT”ÒSÓŽˆ’Ò—ÛX]\šX[×Ù\Ü\œÚ[Ûˆ‹BˆÒ—ÓPUT’PS×ÒSÔŽˆ’Ò—ÛX]\šX[×Ú[Üˆ‹BˆÒ—ÓPUT’PS×ÔÒQSŽˆ’Ò—ÛX]\šX[×ÜÚY[ˆ‹BˆÒ—ÓPUT’PS×ÔÔPÕSTŽˆ’Ò—ÛX]\šX[×ÜÜXÝ[\ˆ‹BˆÒ—ÓPUT’PS×ÕS”ÓRTÔÒSÓŽˆ’Ò—ÛX]\šX[×Ý˜[œÛZ\ÜÚ[Ûˆ‹BˆÒ—ÓPUT’PS×ÒT’QTÐÑSÑNˆ’Ò—ÛX]\šX[×Ú\šY\ØÙ[˜ÙH‹BˆÒ—ÓPUT’PS×ÐS’TÓÕ“ÔNˆ’Ò—ÛX]\šX[×Ø[š\ÛÝ›ÜH‹BˆÒ—ÓPUT’PS×ÕS“Uˆ’Ò—ÛX]\šX[×Ý[›]‹BˆÒ—ÓPUT’PS×Õ“ÓSQNˆ’Ò—ÛX]\šX[×Ý›Û[YH‹BˆÒ—ÕVT‘WÐTÒTÕNˆ’Ò—Ý^\™WØ˜\Ú\ÝH‹BˆÒ—ÕVT‘WÕS”Ñ“Ô“Nˆ’Ò—Ý^\™WÝ˜[œÙ›Ü›H‹BˆÒ—ÓQTÒÔUPS•VUSÓŽˆ’Ò—ÛY\ÚÜ]X[^˜][Ûˆ‹BˆÒ—ÓPUT’PS×ÑSRTÔÒU‘WÔÕ‘S‘Õˆ’Ò—ÛX]\šX[×Ù[Z\ÜÚ]™WÜÝ™[™Ý‹BˆVÓPUT’PS×Ð•STˆ‘VÛX]\šX[×Ø[\‹BˆVÕVT‘WÕÑP”ˆ‘VÝ^\™WÝÙXœ‹BˆVÕVT‘WÐU’QŽˆ‘VÝ^\™WØ]šYˆ‹BˆVÓQTÒÔÐÓÓT‘TÔÒSÓŽˆ‘VÛY\ÚÜØÛÛ\™\ÜÚ[Ûˆ‹BˆVÓQTÒÑÔWÒS”ÕSÒS‘Îˆ‘VÛY\ÚÙÜWÚ[œÝ[˜Ú[™ÈƒBˆNÃBˆ˜\ˆÓ“YÚÑ^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓQÒ×ÔSÕPSÃBˆ\Ë˜ØXÚHHÈ™YœÎˆßK\Ù\ÎˆßHNÃBˆCBˆÛX\šÑYœÊ
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝ›ÙQYœÈH\Ëœ\œÙ\‹šœÛÛ‹››Ù\È×NÃBˆ›Üˆ
]›ÙR[™^H›ÙS[™ÝH›ÙQYœË›[™ÝÈ›ÙR[™^›ÙS[™ÝÈ›ÙR[™^
ÊÊHÃBˆÛÛœÝ›ÙQYˆH›ÙQYœÖÛ›ÙR[™^NÃBˆYˆ
›ÙQY‹™^[œÚ[ÛœÈ	‰ˆ›ÙQY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWH	‰ˆ›ÙQY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWK›YÚOOH›ÚY
HÃBˆ\œÙ\‹—ØY›ÙT™YŠ\Ë˜ØXÚK›ÙQY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWK›YÚ
NÃBˆCBˆCBˆCBˆÛØYYÚ
YÚ[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝØXÚRÙ^HH›YÚˆˆ
ÈYÚ[™^ÃBˆ]\[™[˜ÞHH\œÙ\‹˜ØXÚK™Ù]
ØXÚRÙ^JNÃBˆYˆ
\[™[˜ÞJH™]\›ˆ\[™[˜ÞNÃBˆÛÛœÝœÛÛˆH\œÙ\‹šœÛÛŽÃBˆÛÛœÝ^[œÚ[ÛœÈHœÛÛ‹™^[œÚ[ÛœÈ	‰ˆœÛÛ‹™^[œÚ[ÛœÖÝ\Ë›˜[YWHßNÃBˆÛÛœÝYÚYœÈH^[œÚ[ÛœË›YÚÈ×NÃBˆÛÛœÝYÚYˆHYÚYœÖÛYÚ[™^NÃBˆ]YÚ›ÙNÃBˆÛÛœÝÛÛÜˆH™]ÈÛÛÜŠMÍÍÌŒMJNÃBˆYˆ
YÚY‹˜ÛÛÜˆOOH›ÚY
HÛÛÜ‹œÙ]‘ÐŠYÚY‹˜ÛÛÜ–ÌKYÚY‹˜ÛÛÜ–ÌWKYÚY‹˜ÛÛÜ–Ì—K[™X\”Ô‘ÐÛÛÜ”ÜXÙJNÃBˆÛÛœÝ˜[™ÙHHYÚY‹œ˜[™ÙHOOH›ÚYÈYÚY‹œ˜[™ÙHˆÃBˆÝÚ]Ú
YÚY‹\JHÃBˆØ\ÙH™\™XÝ[Û˜[ŽƒBˆYÚ›ÙHH™]È\™XÝ[Û˜[YÚ
ÛÛÜŠNÃBˆYÚ›ÙK\™Ù]œÜÚ][Û‹œÙ]
LJNÃBˆYÚ›ÙK˜Y
YÚ›ÙK\™Ù]
NÃBˆœ™XZÎÃBˆØ\ÙHœÚ[ŽƒBˆYÚ›ÙHH™]ÈÚ[YÚ
ÛÛÜŠNÃBˆYÚ›ÙK™\Ý[˜ÙHH˜[™ÙNÃBˆœ™XZÎÃBˆØ\ÙHœÜÝŽƒBˆYÚ›ÙHH™]ÈÜÝYÚ
ÛÛÜŠNÃBˆYÚ›ÙK™\Ý[˜ÙHH˜[™ÙNÃBˆYÚY‹œÜÝHYÚY‹œÜÝßNÃBˆYÚY‹œÜÝš[›™\ÛÛ™P[™ÛHHYÚY‹œÜÝš[›™\ÛÛ™P[™ÛHOOH›ÚYÈYÚY‹œÜÝš[›™\ÛÛ™P[™ÛHˆÃBˆYÚY‹œÜÝ›Ý]\ÛÛ™P[™ÛHHYÚY‹œÜÝ›Ý]\ÛÛ™P[™ÛHOOH›ÚYÈYÚY‹œÜÝ›Ý]\ÛÛ™P[™ÛHˆX]”HÈÃBˆYÚ›ÙK˜[™ÛHHYÚY‹œÜÝ›Ý]\ÛÛ™P[™ÛNÃBˆYÚ›ÙKœ[[Xœ˜HHHHYÚY‹œÜÝš[›™\ÛÛ™P[™ÛHÈYÚY‹œÜÝ›Ý]\ÛÛ™P[™ÛNÃBˆYÚ›ÙK\™Ù]œÜÚ][Û‹œÙ]
LJNÃBˆYÚ›ÙK˜Y
YÚ›ÙK\™Ù]
NÃBˆœ™XZÎÃBˆY˜][ƒBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ[™^XÝYYÚ\Nˆˆ
ÈYÚY‹\JNÃBˆCBˆYÚ›ÙKœÜÚ][Û‹œÙ]

NÃBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]JYÚ›ÙKYÚYŠNÃBˆYˆ
YÚY‹š[[œÚ]HOOH›ÚY
HYÚ›ÙKš[[œÚ]HHYÚY‹š[[œÚ]NÃBˆYÚ›ÙK›˜[YHH\œÙ\‹˜Ü™X]U[š\]YS˜[YJYÚY‹›˜[YH›YÚÈˆ
ÈYÚ[™^
NÃBˆ\[™[˜ÞHH›ÛZ\ÙKœ™\ÛÛ™JYÚ›ÙJNÃBˆ\œÙ\‹˜ØXÚK˜Y
ØXÚRÙ^K\[™[˜ÞJNÃBˆ™]\›ˆ\[™[˜ÞNÃBˆCBˆÙ]\[™[˜ÞJ\K[™^
HÃBˆYˆ
\HOOH›YÚŠH™]\›ŽÃBˆ™]\›ˆ\Ë—ÛØYYÚ
[™^
NÃBˆCBˆÜ™X]S›ÙP]XÚY[
›ÙR[™^
HÃBˆÛÛœÝÙ[ŒˆH\ÎÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝœÛÛˆH\œÙ\‹šœÛÛŽÃBˆÛÛœÝ›ÙQYˆHœÛÛ‹››Ù\ÖÛ›ÙR[™^NÃBˆÛÛœÝYÚYˆH›ÙQY‹™^[œÚ[ÛœÈ	‰ˆ›ÙQY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWHßNÃBˆÛÛœÝYÚ[™^HYÚY‹›YÚÃBˆYˆ
YÚ[™^OOH›ÚY
H™]\›ˆ[ÃBˆ™]\›ˆ\Ë—ÛØYYÚ
YÚ[™^
K[Š[˜Ý[ÛŠYÚ
HÃBˆ™]\›ˆ\œÙ\‹—ÙÙ]›ÙT™YŠÙ[Œ‹˜ØXÚKYÚ[™^YÚ
NÃBˆJNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Õ[›]^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ
HÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÕS“UÃBˆCBˆÙ]X]\šX[\J
HÃBˆ™]\›ˆY\Ú˜\ÚXÓX]\šX[ÃBˆCBˆ^[™\˜[\ÊX]\šX[\˜[\ËX]\šX[Y‹\œÙ\ŠHÃBˆÛÛœÝ[™[™ÈH×NÃBˆX]\šX[\˜[\Ë˜ÛÛÜˆH™]ÈÛÛÜŠKKJNÃBˆX]\šX[\˜[\Ë›ÜXÚ]HHNÃBˆÛÛœÝY][XÔ›ÝYÚ™\ÜÈHX]\šX[Y‹œœ“Y][XÔ›ÝYÚ™\ÜÎÃBˆYˆ
Y][XÔ›ÝYÚ™\ÜÊHÃBˆYˆ
\œ˜^Kš\Ð\œ˜^JY][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ‘˜XÝÜŠJHÃBˆÛÛœÝ\œ˜^HHY][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ‘˜XÝÜŽÃBˆX]\šX[\˜[\Ë˜ÛÛÜ‹œÙ]‘ÐŠ\œ˜^VÌK\œ˜^VÌWK\œ˜^VÌ—K[™X\”Ô‘ÐÛÛÜ”ÜXÙJNÃBˆX]\šX[\˜[\Ë›ÜXÚ]HH\œ˜^VÌ×NÃBˆCBˆYˆ
Y][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ•^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë›X\‹Y][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ•^\™KÔ‘ÐÛÛÜ”ÜXÙJJNÃBˆCBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Ñ[Z\ÜÚ]™TÝ™[™Ý^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÑSRTÔÒU‘WÔÕ‘S‘ÕÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[Z\ÜÚ]™TÝ™[™ÝHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWK™[Z\ÜÚ]™TÝ™[™ÝÃBˆYˆ
[Z\ÜÚ]™TÝ™[™ÝOOH›ÚY
HÃBˆX]\šX[\˜[\Ë™[Z\ÜÚ]™R[[œÚ]HH[Z\ÜÚ]™TÝ™[™ÝÃBˆCBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[ÐÛX\˜ÛØ]^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÐÓPTÓÐUÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆYˆ
^[œÚ[Û‹˜ÛX\˜ÛØ]˜XÝÜˆOOH›ÚY
HÃBˆX]\šX[\˜[\Ë˜ÛX\˜ÛØ]H^[œÚ[Û‹˜ÛX\˜ÛØ]˜XÝÜŽÃBˆCBˆYˆ
^[œÚ[Û‹˜ÛX\˜ÛØ]^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë˜ÛX\˜ÛØ]X\‹^[œÚ[Û‹˜ÛX\˜ÛØ]^\™JJNÃBˆCBˆYˆ
^[œÚ[Û‹˜ÛX\˜ÛØ]›ÝYÚ™\ÜÑ˜XÝÜˆOOH›ÚY
HÃBˆX]\šX[\˜[\Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÈH^[œÚ[Û‹˜ÛX\˜ÛØ]›ÝYÚ™\ÜÑ˜XÝÜŽÃBˆCBˆYˆ
^[œÚ[Û‹˜ÛX\˜ÛØ]›ÝYÚ™\ÜÕ^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\‹^[œÚ[Û‹˜ÛX\˜ÛØ]›ÝYÚ™\ÜÕ^\™JJNÃBˆCBˆYˆ
^[œÚ[Û‹˜ÛX\˜ÛØ]›Ü›X[^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë˜ÛX\˜ÛØ]›Ü›X[X\‹^[œÚ[Û‹˜ÛX\˜ÛØ]›Ü›X[^\™JJNÃBˆYˆ
^[œÚ[Û‹˜ÛX\˜ÛØ]›Ü›X[^\™KœØØ[HOOH›ÚY
HÃBˆÛÛœÝØØ[HH^[œÚ[Û‹˜ÛX\˜ÛØ]›Ü›X[^\™KœØØ[NÃBˆX]\šX[\˜[\Ë˜ÛX\˜ÛØ]›Ü›X[ØØ[HH™]È™XÝÜŒŠØØ[KØØ[JNÃBˆCBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Ñ\Ü\œÚ[Û‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÑTÔT”ÒSÓŽÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆX]\šX[\˜[\Ë™\Ü\œÚ[ÛˆH^[œÚ[Û‹™\Ü\œÚ[ÛˆOOH›ÚYÈ^[œÚ[Û‹™\Ü\œÚ[ÛˆˆÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Ò\šY\ØÙ[˜ÙQ^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÒT’QTÐÑSÑNÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆYˆ
^[œÚ[Û‹š\šY\ØÙ[˜ÙQ˜XÝÜˆOOH›ÚY
HÃBˆX]\šX[\˜[\Ëš\šY\ØÙ[˜ÙHH^[œÚ[Û‹š\šY\ØÙ[˜ÙQ˜XÝÜŽÃBˆCBˆYˆ
^[œÚ[Û‹š\šY\ØÙ[˜ÙU^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ëš\šY\ØÙ[˜ÙSX\‹^[œÚ[Û‹š\šY\ØÙ[˜ÙU^\™JJNÃBˆCBˆYˆ
^[œÚ[Û‹š\šY\ØÙ[˜ÙR[ÜˆOOH›ÚY
HÃBˆX]\šX[\˜[\Ëš\šY\ØÙ[˜ÙRSÔˆH^[œÚ[Û‹š\šY\ØÙ[˜ÙR[ÜŽÃBˆCBˆYˆ
X]\šX[\˜[\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙHOOH›ÚY
HÃBˆX]\šX[\˜[\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙHHÌLNÃBˆCBˆYˆ
^[œÚ[Û‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓZ[š[][HOOH›ÚY
HÃBˆX]\šX[\˜[\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙVÌHH^[œÚ[Û‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓZ[š[][NÃBˆCBˆYˆ
^[œÚ[Û‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX^[][HOOH›ÚY
HÃBˆX]\šX[\˜[\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙVÌWHH^[œÚ[Û‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX^[][NÃBˆCBˆYˆ
^[œÚ[Û‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÕ^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\‹^[œÚ[Û‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÕ^\™JJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[ÔÚY[‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÔÒQSŽÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆX]\šX[\˜[\ËœÚY[ÛÛÜˆH™]ÈÛÛÜŠ
NÃBˆX]\šX[\˜[\ËœÚY[”›ÝYÚ™\ÜÈHÃBˆX]\šX[\˜[\ËœÚY[ˆHNÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆYˆ
^[œÚ[Û‹œÚY[ÛÛÜ‘˜XÝÜˆOOH›ÚY
HÃBˆÛÛœÝÛÛÜ‘˜XÝÜˆH^[œÚ[Û‹œÚY[ÛÛÜ‘˜XÝÜŽÃBˆX]\šX[\˜[\ËœÚY[ÛÛÜ‹œÙ]‘ÐŠÛÛÜ‘˜XÝÜ–ÌKÛÛÜ‘˜XÝÜ–ÌWKÛÛÜ‘˜XÝÜ–Ì—K[™X\”Ô‘ÐÛÛÜ”ÜXÙJNÃBˆCBˆYˆ
^[œÚ[Û‹œÚY[”›ÝYÚ™\ÜÑ˜XÝÜˆOOH›ÚY
HÃBˆX]\šX[\˜[\ËœÚY[”›ÝYÚ™\ÜÈH^[œÚ[Û‹œÚY[”›ÝYÚ™\ÜÑ˜XÝÜŽÃBˆCBˆYˆ
^[œÚ[Û‹œÚY[ÛÛÜ•^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\ËœÚY[ÛÛÜ“X\‹^[œÚ[Û‹œÚY[ÛÛÜ•^\™KÔ‘ÐÛÛÜ”ÜXÙJJNÃBˆCBˆYˆ
^[œÚ[Û‹œÚY[”›ÝYÚ™\ÜÕ^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\ËœÚY[”›ÝYÚ™\ÜÓX\‹^[œÚ[Û‹œÚY[”›ÝYÚ™\ÜÕ^\™JJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Õ˜[œÛZ\ÜÚ[Û‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÕS”ÓRTÔÒSÓŽÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆYˆ
^[œÚ[Û‹˜[œÛZ\ÜÚ[Û‘˜XÝÜˆOOH›ÚY
HÃBˆX]\šX[\˜[\Ë˜[œÛZ\ÜÚ[ÛˆH^[œÚ[Û‹˜[œÛZ\ÜÚ[Û‘˜XÝÜŽÃBˆCBˆYˆ
^[œÚ[Û‹˜[œÛZ\ÜÚ[Û•^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë˜[œÛZ\ÜÚ[Û“X\‹^[œÚ[Û‹˜[œÛZ\ÜÚ[Û•^\™JJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Õ›Û[YQ^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×Õ“ÓSQNÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆX]\šX[\˜[\ËXÚÛ™\ÜÈH^[œÚ[Û‹XÚÛ™\ÜÑ˜XÝÜˆOOH›ÚYÈ^[œÚ[Û‹XÚÛ™\ÜÑ˜XÝÜˆˆÃBˆYˆ
^[œÚ[Û‹XÚÛ™\ÜÕ^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\ËXÚÛ™\ÜÓX\‹^[œÚ[Û‹XÚÛ™\ÜÕ^\™JJNÃBˆCBˆX]\šX[\˜[\Ë˜][X][Û‘\Ý[˜ÙHH^[œÚ[Û‹˜][X][Û‘\Ý[˜ÙH[™š[š]NÃBˆÛÛœÝÛÛÜ\œ˜^HH^[œÚ[Û‹˜][X][ÛÛÛÜˆÌKKWNÃBˆX]\šX[\˜[\Ë˜][X][ÛÛÛÜˆH™]ÈÛÛÜŠ
KœÙ]‘ÐŠÛÛÜ\œ˜^VÌKÛÛÜ\œ˜^VÌWKÛÛÜ\œ˜^VÌ—K[™X\”Ô‘ÐÛÛÜ”ÜXÙJNÃBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Ò[Ü‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÒSÔŽÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆX]\šX[\˜[\Ëš[ÜˆH^[œÚ[Û‹š[ÜˆOOH›ÚYÈ^[œÚ[Û‹š[ÜˆˆKNÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[ÔÜXÝ[\‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÔÔPÕSTŽÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆX]\šX[\˜[\ËœÜXÝ[\’[[œÚ]HH^[œÚ[Û‹œÜXÝ[\‘˜XÝÜˆOOH›ÚYÈ^[œÚ[Û‹œÜXÝ[\‘˜XÝÜˆˆNÃBˆYˆ
^[œÚ[Û‹œÜXÝ[\•^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\ËœÜXÝ[\’[[œÚ]SX\‹^[œÚ[Û‹œÜXÝ[\•^\™JJNÃBˆCBˆÛÛœÝÛÛÜ\œ˜^HH^[œÚ[Û‹œÜXÝ[\ÛÛÜ‘˜XÝÜˆÌKKWNÃBˆX]\šX[\˜[\ËœÜXÝ[\ÛÛÜˆH™]ÈÛÛÜŠ
KœÙ]‘ÐŠÛÛÜ\œ˜^VÌKÛÛÜ\œ˜^VÌWKÛÛÜ\œ˜^VÌ—K[™X\”Ô‘ÐÛÛÜ”ÜXÙJNÃBˆYˆ
^[œÚ[Û‹œÜXÝ[\ÛÛÜ•^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\ËœÜXÝ[\ÛÛÜ“X\‹^[œÚ[Û‹œÜXÝ[\ÛÛÜ•^\™KÔ‘ÐÛÛÜ”ÜXÙJJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Ð[\^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë‘VÓPUT’PS×Ð•STÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆX]\šX[\˜[\Ë˜[\ØØ[HH^[œÚ[Û‹˜[\˜XÝÜˆOOH›ÚYÈ^[œÚ[Û‹˜[\˜XÝÜˆˆNÃBˆYˆ
^[œÚ[Û‹˜[\^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë˜[\X\‹^[œÚ[Û‹˜[\^\™JJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ“X]\šX[Ð[š\ÛÝ›ÜQ^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÐS’TÓÕ“ÔNÃBˆCBˆÙ]X]\šX[\JX]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJH™]\›ˆ[ÃBˆ™]\›ˆY\Ú\ÚXØ[X]\šX[ÃBˆCBˆ^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊHÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝX]\šX[YˆH\œÙ\‹šœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆYˆ
[X]\šX[Y‹™^[œÚ[ÛœÈ[X]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ^[œÚ[ÛˆHX]\šX[Y‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆYˆ
^[œÚ[Û‹˜[š\ÛÝ›ÜTÝ™[™ÝOOH›ÚY
HÃBˆX]\šX[\˜[\Ë˜[š\ÛÝ›ÜHH^[œÚ[Û‹˜[š\ÛÝ›ÜTÝ™[™ÝÃBˆCBˆYˆ
^[œÚ[Û‹˜[š\ÛÝ›ÜT›Ý][ÛˆOOH›ÚY
HÃBˆX]\šX[\˜[\Ë˜[š\ÛÝ›ÜT›Ý][ÛˆH^[œÚ[Û‹˜[š\ÛÝ›ÜT›Ý][ÛŽÃBˆCBˆYˆ
^[œÚ[Û‹˜[š\ÛÝ›ÜU^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë˜[š\ÛÝ›ÜSX\‹^[œÚ[Û‹˜[š\ÛÝ›ÜU^\™JJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆNÃBˆ˜\ˆÓ•^\™P˜\Ú\ÕQ^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÕVT‘WÐTÒTÕNÃBˆCBˆØY^\™J^\™R[™^
HÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝœÛÛˆH\œÙ\‹šœÛÛŽÃBˆÛÛœÝ^\™QYˆHœÛÛ‹^\™\ÖÝ^\™R[™^NÃBˆYˆ
]^\™QY‹™^[œÚ[ÛœÈ]^\™QY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆ™]\›ˆ[ÃBˆCBˆÛÛœÝ^[œÚ[ÛˆH^\™QY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆÛÛœÝØY\ŒˆH\œÙ\‹›Ü[ÛœËšÝ“ØY\ŽÃBˆYˆ
[ØY\ŒŠHÃBˆYˆ
œÛÛ‹™^[œÚ[ÛœÔ™\]Z\™Y	‰ˆœÛÛ‹™^[œÚ[ÛœÔ™\]Z\™Yš[™^ÙŠ\Ë›˜[YJHH
HÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\ŽˆÙ]Õ“ØY\ˆ]\Ý™HØ[Y™Y›Ü™HØY[™ÈÕˆ^\™\ÈŠNÃBˆH[ÙHÃBˆ™]\›ˆ[ÃBˆCBˆCBˆ™]\›ˆ\œÙ\‹›ØY^\™R[XYÙJ^\™R[™^^[œÚ[Û‹œÛÝ\˜ÙKØY\ŒŠNÃBˆCBˆNÃBˆ˜\ˆÓ•^\™UÙX”^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë‘VÕVT‘WÕÑP”ÃBˆCBˆØY^\™J^\™R[™^
HÃBˆÛÛœÝ˜[YHH\Ë›˜[YNÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝœÛÛˆH\œÙ\‹šœÛÛŽÃBˆÛÛœÝ^\™QYˆHœÛÛ‹^\™\ÖÝ^\™R[™^NÃBˆYˆ
]^\™QY‹™^[œÚ[ÛœÈ]^\™QY‹™^[œÚ[ÛœÖÛ˜[YWJHÃBˆ™]\›ˆ[ÃBˆCBˆÛÛœÝ^[œÚ[ÛˆH^\™QY‹™^[œÚ[ÛœÖÛ˜[YWNÃBˆÛÛœÝÛÝ\˜ÙHHœÛÛ‹š[XYÙ\ÖÙ^[œÚ[Û‹œÛÝ\˜ÙWNÃBˆ]ØY\ŒˆH\œÙ\‹^\™SØY\ŽÃBˆYˆ
ÛÝ\˜ÙK\šJHÃBˆÛÛœÝ[™\ˆH\œÙ\‹›Ü[ÛœË›X[˜YÙ\‹™Ù][™\ŠÛÝ\˜ÙK\šJNÃBˆYˆ
[™\ˆOOH[
HØY\ŒˆH[™\ŽÃBˆCBˆ™]\›ˆ\œÙ\‹›ØY^\™R[XYÙJ^\™R[™^^[œÚ[Û‹œÛÝ\˜ÙKØY\ŒŠNÃBˆCBˆNÃBˆ˜\ˆÓ•^\™PU’Q‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë‘VÕVT‘WÐU’QŽÃBˆCBˆØY^\™J^\™R[™^
HÃBˆÛÛœÝ˜[YHH\Ë›˜[YNÃBˆÛÛœÝ\œÙ\ˆH\Ëœ\œÙ\ŽÃBˆÛÛœÝœÛÛˆH\œÙ\‹šœÛÛŽÃBˆÛÛœÝ^\™QYˆHœÛÛ‹^\™\ÖÝ^\™R[™^NÃBˆYˆ
]^\™QY‹™^[œÚ[ÛœÈ]^\™QY‹™^[œÚ[ÛœÖÛ˜[YWJHÃBˆ™]\›ˆ[ÃBˆCBˆÛÛœÝ^[œÚ[ÛˆH^\™QY‹™^[œÚ[ÛœÖÛ˜[YWNÃBˆÛÛœÝÛÝ\˜ÙHHœÛÛ‹š[XYÙ\ÖÙ^[œÚ[Û‹œÛÝ\˜ÙWNÃBˆ]ØY\ŒˆH\œÙ\‹^\™SØY\ŽÃBˆYˆ
ÛÝ\˜ÙK\šJHÃBˆÛÛœÝ[™\ˆH\œÙ\‹›Ü[ÛœË›X[˜YÙ\‹™Ù][™\ŠÛÝ\˜ÙK\šJNÃBˆYˆ
[™\ˆOOH[
HØY\ŒˆH[™\ŽÃBˆCBˆ™]\›ˆ\œÙ\‹›ØY^\™R[XYÙJ^\™R[™^^[œÚ[Û‹œÛÝ\˜ÙKØY\ŒŠNÃBˆCBˆNÃBˆ˜\ˆÓ“Y\ÚÜÛÛ\™\ÜÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë‘VÓQTÒÔÐÓÓT‘TÔÒSÓŽÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆCBˆØYY™™\•šY]Ê[™^
HÃBˆÛÛœÝœÛÛˆH\Ëœ\œÙ\‹šœÛÛŽÃBˆÛÛœÝY™™\•šY]ÈHœÛÛ‹˜Y™™\•šY]ÜÖÚ[™^NÃBˆYˆ
Y™™\•šY]Ë™^[œÚ[ÛœÈ	‰ˆY™™\•šY]Ë™^[œÚ[ÛœÖÝ\Ë›˜[YWJHÃBˆÛÛœÝ^[œÚ[Û‘YˆHY™™\•šY]Ë™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆÛÛœÝY™™\ˆH\Ëœ\œÙ\‹™Ù]\[™[˜ÞJ˜Y™™\ˆ‹^[œÚ[Û‘Y‹˜Y™™\ŠNÃBˆÛÛœÝXÛÙ\ˆH\Ëœ\œÙ\‹›Ü[ÛœË›Y\ÚÜXÛÙ\ŽÃBˆYˆ
YXÛÙ\ˆYXÛÙ\‹œÝ\ÜY
HÃBˆYˆ
œÛÛ‹™^[œÚ[ÛœÔ™\]Z\™Y	‰ˆœÛÛ‹™^[œÚ[ÛœÔ™\]Z\™Yš[™^ÙŠ\Ë›˜[YJHH
HÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\ŽˆÙ]Y\ÚÜXÛÙ\ˆ]\Ý™HØ[Y™Y›Ü™HØY[™ÈÛÛ\™\ÜÙYš[\ÈŠNÃBˆH[ÙHÃBˆ™]\›ˆ[ÃBˆCBˆCBˆ™]\›ˆY™™\‹[Š[˜Ý[ÛŠ™\ÊHÃBˆÛÛœÝž]SÙ™œÙ]H^[œÚ[Û‘Y‹˜ž]SÙ™œÙ]ÃBˆÛÛœÝž]S[™ÝH^[œÚ[Û‘Y‹˜ž]S[™ÝÃBˆÛÛœÝÛÝ[H^[œÚ[Û‘Y‹˜ÛÝ[ÃBˆÛÛœÝÝšYHH^[œÚ[Û‘Y‹˜ž]TÝšYNÃBˆÛÛœÝÛÝ\˜ÙHH™]ÈZ[\œ˜^J™\Ëž]SÙ™œÙ]ž]S[™Ý
NÃBˆYˆ
XÛÙ\‹™XÛÙQÛY™™\\Þ[˜ÊHÃBˆ™]\›ˆXÛÙ\‹™XÛÙQÛY™™\\Þ[˜ÊÛÝ[ÝšYKÛÝ\˜ÙK^[œÚ[Û‘Y‹›[ÙK^[œÚ[Û‘Y‹™š[\ŠK[Š[˜Ý[ÛŠ™\ÌŠHÃBˆ™]\›ˆ™\Ì‹˜Y™™\ŽÃBˆJNÃBˆH[ÙHÃBˆ™]\›ˆXÛÙ\‹œ™XYK[Š[˜Ý[ÛŠ
HÃBˆÛÛœÝ™\Ý[H™]È\œ˜^PY™™\ŠÛÝ[
ˆÝšYJNÃBˆXÛÙ\‹™XÛÙQÛY™™\Š™]ÈZ[\œ˜^J™\Ý[
KÛÝ[ÝšYKÛÝ\˜ÙK^[œÚ[Û‘Y‹›[ÙK^[œÚ[Û‘Y‹™š[\ŠNÃBˆ™]\›ˆ™\Ý[ÃBˆJNÃBˆCBˆJNÃBˆH[ÙHÃBˆ™]\›ˆ[ÃBˆCBˆCBˆNÃBˆ˜\ˆÓ“Y\ÚÜR[œÝ[˜Ú[™ÈHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ\œÙ\ŠHÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë‘VÓQTÒÑÔWÒS”ÕSÒS‘ÎÃBˆ\Ëœ\œÙ\ˆH\œÙ\ŽÃBˆCBˆÜ™X]S›ÙSY\Ú
›ÙR[™^
HÃBˆÛÛœÝœÛÛˆH\Ëœ\œÙ\‹šœÛÛŽÃBˆÛÛœÝ›ÙQYˆHœÛÛ‹››Ù\ÖÛ›ÙR[™^NÃBˆYˆ
[›ÙQY‹™^[œÚ[ÛœÈ[›ÙQY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWH›ÙQY‹›Y\ÚOOH›ÚY
HÃBˆ™]\›ˆ[ÃBˆCBˆÛÛœÝY\ÚYˆHœÛÛ‹›Y\Ú\ÖÛ›ÙQY‹›Y\ÚNÃBˆ›Üˆ
ÛÛœÝš[Z]]™HÙˆY\ÚY‹œš[Z]]™\ÊHÃBˆYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓTÈ	‰ˆš[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓWÔÕ’T	‰ˆš[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓWÑSˆ	‰ˆš[Z]]™K›[ÙHOOH›ÚY
HÃBˆ™]\›ˆ[ÃBˆCBˆCBˆÛÛœÝ^[œÚ[Û‘YˆH›ÙQY‹™^[œÚ[ÛœÖÝ\Ë›˜[YWNÃBˆÛÛœÝ]šX]\ÑYˆH^[œÚ[Û‘Y‹˜]šX]\ÎÃBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝ]šX]\ÈHßNÃBˆ›Üˆ
ÛÛœÝÙ^Lˆ[ˆ]šX]\ÑYŠHÃBˆ[™[™Ëœ\Ú
\Ëœ\œÙ\‹™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹]šX]\ÑY–ÚÙ^L—JK[Š
XØÙ\ÜÛÜŠHOˆÃBˆ]šX]\ÖÚÙ^L—HHXØÙ\ÜÛÜŽÃBˆ™]\›ˆ]šX]\ÖÚÙ^L—NÃBˆJJNÃBˆCBˆYˆ
[™[™Ë›[™ÝJHÃBˆ™]\›ˆ[ÃBˆCBˆ[™[™Ëœ\Ú
\Ëœ\œÙ\‹˜Ü™X]S›ÙSY\Ú
›ÙR[™^
JNÃBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊK[Š
™\Ý[ÊHOˆÃBˆÛÛœÝ›ÙSØš™XÝH™\Ý[ËœÜ

NÃBˆÛÛœÝY\Ú\ÈH›ÙSØš™XÝš\ÑÜ›Ý\È›ÙSØš™XÝ˜Ú[™[ˆˆÛ›ÙSØš™XÝNÃBˆÛÛœÝÛÝ[H™\Ý[ÖÌK˜ÛÝ[ÃBˆÛÛœÝ[œÝ[˜ÙYY\Ú\ÈH×NÃBˆ›Üˆ
ÛÛœÝY\ÚÙˆY\Ú\ÊHÃBˆÛÛœÝHH™]ÈX]š^

NÃBˆÛÛœÝH™]È™XÝÜŒÊ
NÃBˆÛÛœÝHH™]È]X]\›š[ÛŠ
NÃBˆÛÛœÝÈH™]È™XÝÜŒÊKKJNÃBˆÛÛœÝ[œÝ[˜ÙYY\ÚH™]È[œÝ[˜ÙYY\Ú
Y\Ú™Ù[ÛY]žKY\Ú›X]\šX[ÛÝ[
NÃBˆ›Üˆ
]HHÈHÛÝ[ÈJÊÊHÃBˆYˆ
]šX]\Ë•S”ÓUSÓŠHÃBˆ™œ›ÛPY™™\]šX]J]šX]\Ë•S”ÓUSÓ‹JNÃBˆCBˆYˆ
]šX]\Ë”“ÕUSÓŠHÃBˆK™œ›ÛPY™™\]šX]J]šX]\Ë”“ÕUSÓ‹JNÃBˆCBˆYˆ
]šX]\Ë”ÐÐSJHÃBˆË™œ›ÛPY™™\]šX]J]šX]\Ë”ÐÐSKJNÃBˆCBˆ[œÝ[˜ÙYY\ÚœÙ]X]š^]
KK˜ÛÛ\ÜÙJKÊJNÃBˆCBˆ›Üˆ
ÛÛœÝ]šX]S˜[YH[ˆ]šX]\ÊHÃBˆYˆ
]šX]S˜[YHOOH—ÐÓÓÔ—ÌŠHÃBˆÛÛœÝ]ˆH]šX]\ÖØ]šX]S˜[YWNÃBˆ[œÝ[˜ÙYY\Úš[œÝ[˜ÙPÛÛÜˆH™]È[œÝ[˜ÙYY™™\]šX]J]‹˜\œ˜^K]‹š][TÚ^™K]‹››Ü›X[^™Y
NÃBˆH[ÙHYˆ
]šX]S˜[YHOOH•S”ÓUSÓˆˆ	‰ˆ]šX]S˜[YHOOH”“ÕUSÓˆˆ	‰ˆ]šX]S˜[YHOOH”ÐÐSHŠHÃBˆY\Ú™Ù[ÛY]žKœÙ]]šX]J]šX]S˜[YK]šX]\ÖØ]šX]S˜[YWJNÃBˆCBˆCBˆØš™XÝÑœ›ÝÝ\K˜ÛÜK˜Ø[
[œÝ[˜ÙYY\ÚY\Ú
NÃBˆ\Ëœ\œÙ\‹˜\ÜÚYÛ‘š[˜[X]\šX[
[œÝ[˜ÙYY\Ú
NÃBˆ[œÝ[˜ÙYY\Ú\Ëœ\Ú
[œÝ[˜ÙYY\Ú
NÃBˆCBˆYˆ
›ÙSØš™XÝš\ÑÜ›Ý\
HÃBˆ›ÙSØš™XÝ˜ÛX\Š
NÃBˆ›ÙSØš™XÝ˜Y
‹‹š[œÝ[˜ÙYY\Ú\ÊNÃBˆ™]\›ˆ›ÙSØš™XÝÃBˆCBˆ™]\›ˆ[œÝ[˜ÙYY\Ú\ÖÌNÃBˆJNÃBˆCBˆNÃBˆ˜\ˆ’ST–WÑVS”ÒSÓ—ÒPQT—ÓPQÒPÈH™ÛˆŽÃBˆ˜\ˆ’ST–WÑVS”ÒSÓ—ÒPQT—ÓS‘ÕHLŽÃBˆ˜\ˆ’ST–WÑVS”ÒSÓ—ÐÒS’×ÕTTÈHÈ”ÓÓŽˆLÌLÎŒMLM’SŽˆLLÌMŒˆNÃBˆ˜\ˆÓš[˜\žQ^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ]JHÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—Ð’ST–WÑÓŽÃBˆ\Ë˜ÛÛ[H[ÃBˆ\Ë˜›ÙHH[ÃBˆÛÛœÝXY\•šY]ÈH™]È]UšY]Ê]K’ST–WÑVS”ÒSÓ—ÒPQT—ÓS‘Õ
NÃBˆÛÛœÝ^XÛÙ\ˆH™]È^XÛÙ\Š
NÃBˆ\ËšXY\ˆHÃBˆXYÚXÎˆ^XÛÙ\‹™XÛÙJ™]ÈZ[\œ˜^J]KœÛXÙJ
JJKBˆ™\œÚ[ÛŽˆXY\•šY]Ë™Ù]Z[ÌŠYJKBˆ[™ÝˆXY\•šY]Ë™Ù]Z[ÌŠYJCBˆNÃBˆYˆ
\ËšXY\‹›XYÚXÈOOH’ST–WÑVS”ÒSÓ—ÒPQT—ÓPQÒPÊHÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ[œÝ\ÜYÛ‹Pš[˜\žHXY\‹ˆŠNÃBˆH[ÙHYˆ
\ËšXY\‹™\œÚ[ÛˆŠHÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\ŽˆYØXÞHš[˜\žHš[H]XÝYˆŠNÃBˆCBˆÛÛœÝÚ[šÐÛÛ[Ó[™ÝH\ËšXY\‹›[™ÝH’ST–WÑVS”ÒSÓ—ÒPQT—ÓS‘ÕÃBˆÛÛœÝÚ[šÕšY]ÈH™]È]UšY]Ê]K’ST–WÑVS”ÒSÓ—ÒPQT—ÓS‘Õ
NÃBˆ]Ú[šÒ[™^HÃBˆÚ[H
Ú[šÒ[™^Ú[šÐÛÛ[Ó[™Ý
HÃBˆÛÛœÝÚ[šÓ[™ÝHÚ[šÕšY]Ë™Ù]Z[ÌŠÚ[šÒ[™^YJNÃBˆÚ[šÒ[™^
ÏHÃBˆÛÛœÝÚ[šÕ\HHÚ[šÕšY]Ë™Ù]Z[ÌŠÚ[šÒ[™^YJNÃBˆÚ[šÒ[™^
ÏHÃBˆYˆ
Ú[šÕ\HOOH’ST–WÑVS”ÒSÓ—ÐÒS’×ÕTTË’”ÓÓŠHÃBˆÛÛœÝÛÛ[\œ˜^HH™]ÈZ[\œ˜^J]K’ST–WÑVS”ÒSÓ—ÒPQT—ÓS‘Õ
ÈÚ[šÒ[™^Ú[šÓ[™Ý
NÃBˆ\Ë˜ÛÛ[H^XÛÙ\‹™XÛÙJÛÛ[\œ˜^JNÃBˆH[ÙHYˆ
Ú[šÕ\HOOH’ST–WÑVS”ÒSÓ—ÐÒS’×ÕTTË’SŠHÃBˆÛÛœÝž]SÙ™œÙ]H’ST–WÑVS”ÒSÓ—ÒPQT—ÓS‘Õ
ÈÚ[šÒ[™^ÃBˆ\Ë˜›ÙHH]KœÛXÙJž]SÙ™œÙ]ž]SÙ™œÙ]
ÈÚ[šÓ[™Ý
NÃBˆCBˆÚ[šÒ[™^
ÏHÚ[šÓ[™ÝÃBˆCBˆYˆ
\Ë˜ÛÛ[OOH[
HÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ”ÓÓˆÛÛ[›Ý›Ý[™ˆŠNÃBˆCBˆCBˆNÃBˆ˜\ˆÓ‘˜XÛÓY\ÚÛÛ\™\ÜÚ[Û‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠœÛÛ‹˜XÛÓØY\ŠHÃBˆYˆ
Y˜XÛÓØY\ŠHÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ›ÈPÓÓØY\ˆ[œÝ[˜ÙH›ÝšYYˆŠNÃBˆCBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÑPÓ×ÓQTÒÐÓÓT‘TÔÒSÓŽÃBˆ\ËšœÛÛˆHœÛÛŽÃBˆ\Ë™˜XÛÓØY\ˆH˜XÛÓØY\ŽÃBˆ\Ë™˜XÛÓØY\‹œ™[ØY

NÃBˆCBˆXÛÙTš[Z]]™Jš[Z]]™K\œÙ\ŠHÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ˜XÛÓØY\ˆH\Ë™˜XÛÓØY\ŽÃBˆÛÛœÝY™™\•šY]Ò[™^Hš[Z]]™K™^[œÚ[ÛœÖÝ\Ë›˜[YWK˜Y™™\•šY]ÎÃBˆÛÛœÝÛ]šX]SX\Hš[Z]]™K™^[œÚ[ÛœÖÝ\Ë›˜[YWK˜]šX]\ÎÃBˆÛÛœÝ™YP]šX]SX\HßNÃBˆÛÛœÝ]šX]S›Ü›X[^™YX\HßNÃBˆÛÛœÝ]šX]U\SX\HßNÃBˆ›Üˆ
ÛÛœÝ]šX]S˜[YH[ˆÛ]šX]SX\
HÃBˆÛÛœÝ™YP]šX]S˜[YHHU’P•UTÖØ]šX]S˜[YWH]šX]S˜[YKÓÝÙ\Ø\ÙJ
NÃBˆ™YP]šX]SX\Ý™YP]šX]S˜[YWHHÛ]šX]SX\Ø]šX]S˜[YWNÃBˆCBˆ›Üˆ
ÛÛœÝ]šX]S˜[YH[ˆš[Z]]™K˜]šX]\ÊHÃBˆÛÛœÝ™YP]šX]S˜[YHHU’P•UTÖØ]šX]S˜[YWH]šX]S˜[YKÓÝÙ\Ø\ÙJ
NÃBˆYˆ
Û]šX]SX\Ø]šX]S˜[YWHOOH›ÚY
HÃBˆÛÛœÝXØÙ\ÜÛÜ‘YˆHœÛÛ‹˜XØÙ\ÜÛÜœÖÜš[Z]]™K˜]šX]\ÖØ]šX]S˜[YWWNÃBˆÛÛœÝÛÛ\Û™[\HHÑP‘ÓÐÓÓTÓ‘S•ÕTTÖØXØÙ\ÜÛÜ‘Y‹˜ÛÛ\Û™[\WNÃBˆ]šX]U\SX\Ý™YP]šX]S˜[YWHHÛÛ\Û™[\K›˜[YNÃBˆ]šX]S›Ü›X[^™YX\Ý™YP]šX]S˜[YWHHXØÙ\ÜÛÜ‘Y‹››Ü›X[^™YOOHYNÃBˆCBˆCBˆ™]\›ˆ\œÙ\‹™Ù]\[™[˜ÞJ˜Y™™\•šY]È‹Y™™\•šY]Ò[™^
K[Š[˜Ý[ÛŠY™™\•šY]ÊHÃBˆ™]\›ˆ™]È›ÛZ\ÙJ[˜Ý[ÛŠ™\ÛÛ™K™Z™XÝ
HÃBˆ˜XÛÓØY\‹™XÛÙQ˜XÛÑš[JY™™\•šY]Ë[˜Ý[ÛŠÙ[ÛY]žJHÃBˆ›Üˆ
ÛÛœÝ]šX]S˜[YH[ˆÙ[ÛY]žK˜]šX]\ÊHÃBˆÛÛœÝ]šX]HHÙ[ÛY]žK˜]šX]\ÖØ]šX]S˜[YWNÃBˆÛÛœÝ›Ü›X[^™YH]šX]S›Ü›X[^™YX\Ø]šX]S˜[YWNÃBˆYˆ
›Ü›X[^™YOOH›ÚY
H]šX]K››Ü›X[^™YH›Ü›X[^™YÃBˆCBˆ™\ÛÛ™JÙ[ÛY]žJNÃBˆK™YP]šX]SX\]šX]U\SX\[™X\”Ô‘ÐÛÛÜ”ÜXÙK™Z™XÝ
NÃBˆJNÃBˆJNÃBˆCBˆNÃBˆ˜\ˆÓ•^\™U˜[œÙ›Ü›Q^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ
HÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÕVT‘WÕS”Ñ“Ô“NÃBˆCBˆ^[™^\™J^\™K˜[œÙ›Ü›JHÃBˆYˆ

˜[œÙ›Ü›K^ÛÛÜ™OOH›ÚY˜[œÙ›Ü›K^ÛÛÜ™OOH^\™K˜Ú[›™[
H	‰ˆ˜[œÙ›Ü›K›Ù™œÙ]OOH›ÚY	‰ˆ˜[œÙ›Ü›Kœ›Ý][ÛˆOOH›ÚY	‰ˆ˜[œÙ›Ü›KœØØ[HOOH›ÚY
HÃBˆ™]\›ˆ^\™NÃBˆCBˆ^\™HH^\™K˜ÛÛ™J
NÃBˆYˆ
˜[œÙ›Ü›K^ÛÛÜ™OOH›ÚY
HÃBˆ^\™K˜Ú[›™[H˜[œÙ›Ü›K^ÛÛÜ™ÃBˆCBˆYˆ
˜[œÙ›Ü›K›Ù™œÙ]OOH›ÚY
HÃBˆ^\™K›Ù™œÙ]™œ›ÛP\œ˜^J˜[œÙ›Ü›K›Ù™œÙ]
NÃBˆCBˆYˆ
˜[œÙ›Ü›Kœ›Ý][ÛˆOOH›ÚY
HÃBˆ^\™Kœ›Ý][ÛˆH˜[œÙ›Ü›Kœ›Ý][ÛŽÃBˆCBˆYˆ
˜[œÙ›Ü›KœØØ[HOOH›ÚY
HÃBˆ^\™Kœ™\X]™œ›ÛP\œ˜^J˜[œÙ›Ü›KœØØ[JNÃBˆCBˆ^\™K›™YYÕ\]HHYNÃBˆ™]\›ˆ^\™NÃBˆCBˆNÃBˆ˜\ˆÓ“Y\Ú]X[^˜][Û‘^[œÚ[ÛˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠ
HÃBˆ\Ë›˜[YHHVS”ÒSÓ”Ë’Ò—ÓQTÒÔUPS•VUSÓŽÃBˆCBˆNÃBˆ˜\ˆÓÝXšXÔÜ[™R[\œÛ[HÛ\ÜÈ^[™È[\œÛ[ÃBˆÛÛœÝXÝÜŠ\˜[Y]\”ÜÚ][ÛœËØ[\U˜[Y\ËØ[\TÚ^™K™\Ý[Y™™\ŠHÃBˆÝ\\Š\˜[Y]\”ÜÚ][ÛœËØ[\U˜[Y\ËØ[\TÚ^™K™\Ý[Y™™\ŠNÃBˆCBˆÛÜTØ[\U˜[YWÊ[™^
HÃBˆÛÛœÝ™\Ý[H\Ëœ™\Ý[Y™™\‹˜[Y\ÈH\ËœØ[\U˜[Y\Ë˜[YTÚ^™HH\Ë˜[YTÚ^™KÙ™œÙ]H[™^
ˆ˜[YTÚ^™H
ˆÈ
È˜[YTÚ^™NÃBˆ›Üˆ
]HHÈHOOH˜[YTÚ^™NÈJÊÊHÃBˆ™\Ý[ÚWHH˜[Y\ÖÛÙ™œÙ]
ÈWNÃBˆCBˆ™]\›ˆ™\Ý[ÃBˆCBˆ[\œÛ]WÊLKJHÃBˆÛÛœÝ™\Ý[H\Ëœ™\Ý[Y™™\ŽÃBˆÛÛœÝ˜[Y\ÈH\ËœØ[\U˜[Y\ÎÃBˆÛÛœÝÝšYHH\Ë˜[YTÚ^™NÃBˆÛÛœÝÝšYLˆHÝšYH
ˆŽÃBˆÛÛœÝÝšYLÈHÝšYH
ˆÎÃBˆÛÛœÝHHHÃBˆÛÛœÝH
H
HÈÃBˆÛÛœÝH
ˆÃBˆÛÛœÝH
ˆÃBˆÛÛœÝÙ™œÙ]HHLH
ˆÝšYLÎÃBˆÛÛœÝÙ™œÙ]HÙ™œÙ]HHÝšYLÎÃBˆÛÛœÝÌˆHLˆ
ˆ
ÈÈ
ˆÃBˆÛÛœÝÌÈHHÃBˆÛÛœÝÌHHHÌŽÃBˆÛÛœÝÌHHÌÈH
ÈÃBˆ›Üˆ
]HHÈHOOHÝšYNÈJÊÊHÃBˆÛÛœÝH˜[Y\ÖÛÙ™œÙ]
ÈH
ÈÝšYWNÃBˆÛÛœÝLH˜[Y\ÖÛÙ™œÙ]
ÈH
ÈÝšYL—H
ˆÃBˆÛÛœÝHH˜[Y\ÖÛÙ™œÙ]H
ÈH
ÈÝšYWNÃBˆÛÛœÝLHH˜[Y\ÖÛÙ™œÙ]H
ÈWH
ˆÃBˆ™\Ý[ÚWHHÌ
ˆ
ÈÌH
ˆL
ÈÌˆ
ˆH
ÈÌÈ
ˆLNÃBˆCBˆ™]\›ˆ™\Ý[ÃBˆCBˆNÃBˆ˜\ˆÜ]X]\›š[ÛˆH™]È]X]\›š[ÛŠ
NÃBˆ˜\ˆÓÝXšXÔÜ[™T]X]\›š[Û’[\œÛ[HÛ\ÜÈ^[™ÈÓÝXšXÔÜ[™R[\œÛ[ÃBˆ[\œÛ]WÊLKJHÃBˆÛÛœÝ™\Ý[HÝ\\‹š[\œÛ]WÊLKJNÃBˆÜ]X]\›š[Û‹™œ›ÛP\œ˜^J™\Ý[
K››Ü›X[^™J
KÐ\œ˜^J™\Ý[
NÃBˆ™]\›ˆ™\Ý[ÃBˆCBˆNÃBˆ˜\ˆÑP‘ÓÐÓÓ”ÕS•ÈHÃBˆ“ÐUˆLL‹BˆËÑ“ÐUÓPUŽˆÍMÍBˆ“ÐUÓPUÎˆÍMÍKBˆ“ÐUÓPUˆÍMÍ‹Bˆ“ÐUÕ‘PÌŽˆÍMBˆ“ÐUÕ‘PÌÎˆÍMKBˆ“ÐUÕ‘PÍˆÍM‹BˆS‘PTŽˆMÌŽKBˆ‘TPUˆLMËBˆÐSTT—Ì‘ˆÍMÎBˆÒS•ÎˆBˆS‘TÎˆKBˆS‘WÓÓÔˆ‹BˆS‘WÔÕ’TˆËBˆ’PS‘ÓTÎˆBˆ’PS‘ÓWÔÕ’TˆKBˆ’PS‘ÓWÑSŽˆ‹BˆS”ÒQÓ‘QÐ–UNˆLLŒKBˆS”ÒQÓ‘QÔÒÔ•ˆLLŒÃBˆNÃBˆ˜\ˆÑP‘ÓÐÓÓTÓ‘S•ÕTTÈHÃBˆLLŒˆ[\œ˜^KBˆLLŒNˆZ[\œ˜^KBˆLLŒŽˆ[M\œ˜^KBˆLLŒÎˆZ[M\œ˜^KBˆLLNˆZ[Ì\œ˜^KBˆLLŽˆ›Ø]Ì\œ˜^CBˆNÃBˆ˜\ˆÑP‘ÓÑ’ST”ÈHÃBˆMÌŽˆ™X\™\Ýš[\‹BˆMÌŽNˆ[™X\‘š[\‹BˆNNˆ™X\™\ÝZ\X\™X\™\Ýš[\‹BˆNNNˆ[™X\“Z\X\™X\™\Ýš[\‹BˆNNŽˆ™X\™\ÝZ\X\[™X\‘š[\‹BˆNNÎˆ[™X\“Z\X\[™X\‘š[\ƒBˆNÃBˆ˜\ˆÑP‘ÓÕÔTS‘ÔÈHÃBˆÌÌÌNˆÛ[\ÑYÙUÜ˜\[™ËBˆÌÍˆZ\œ›Ü™Y™\X]Ü˜\[™ËBˆLMÎˆ™\X]Ü˜\[™ÃBˆNÃBˆ˜\ˆÑP‘ÓÕTWÔÒV‘TÈHÃBˆ”ÐÐSTˆŽˆKBˆ•‘PÌˆŽˆ‹Bˆ•‘PÌÈŽˆËBˆ•‘PÍŽˆBˆ“PUˆŽˆBˆ“PUÈŽˆKBˆ“PUŽˆMƒBˆNÃBˆ˜\ˆU’P•UTÈHÃBˆÔÒUSÓŽˆœÜÚ][Ûˆ‹Bˆ“Ô“PSˆ››Ü›X[‹BˆS‘ÑS•ˆ[™Ù[‹BˆVÓÓÔ‘Ìˆ]ˆ‹BˆVÓÓÔ‘ÌNˆ]ŒH‹BˆVÓÓÔ‘ÌŽˆ]Œˆ‹BˆVÓÓÔ‘ÌÎˆ]ŒÈ‹BˆÓÓÔ—Ìˆ˜ÛÛÜˆ‹BˆÑRQÒ×ÌˆœÚÚ[•ÙZYÚ‹Bˆ“ÒS•×ÌˆœÚÚ[’[™^ƒBˆNÃBˆ˜\ˆUÔ“ÔT•QTÈHÃBˆØØ[NˆœØØ[H‹Bˆ˜[œÛ][ÛŽˆœÜÚ][Ûˆ‹Bˆ›Ý][ÛŽˆœ]X]\›š[Ûˆ‹BˆÙZYÚÎˆ›[Üœ\™Ù][™›Y[˜Ù\ÈƒBˆNÃBˆ˜\ˆS•T”ÓUSÓˆHÃBˆÕP’PÔÔS‘Nˆ›ÚYBˆËÈÙH\ÙHHÝ\ÝÛH[\œÛ[
ÓÝXšXÔÜ[™R[\œÛ][ÛŠH›ÜˆÕP’PÔÔS‘H˜XÚÜËˆXXÚBˆËÈÙ^Yœ˜[YH˜XÚÈÚ[™H[š]X[^™YÚ]HY˜][[\œÛ][Ûˆ\K[ˆ[ÙYšYYƒBˆS‘PTŽˆ[\œÛ]S[™X\‹BˆÕTˆ[\œÛ]Q\ØÜ™]CBˆNÃBˆ˜\ˆSWÓSÑTÈHÃBˆÔTUQNˆ“ÔTUQH‹BˆPTÒÎˆ“PTÒÈ‹Bˆ“S‘ˆ“S‘ƒBˆNÃBˆ[˜Ý[ÛˆÜ™X]QY˜][X]\šX[
ØXÚJHÃBˆYˆ
ØXÚVÈ‘Y˜][X]\šX[—HOOH›ÚY
HÃBˆØXÚVÈ‘Y˜][X]\šX[—HH™]ÈY\ÚÝ[™\™X]\šX[
ÃBˆÛÛÜŽˆMÍÍÌŒMKBˆ[Z\ÜÚ]™NˆBˆY][™\ÜÎˆKBˆ›ÝYÚ™\ÜÎˆKBˆ˜[œÜ\™[ˆ˜[ÙKBˆ\\ÝˆYKBˆÚYNˆœ›ÛÚYCBˆJNÃBˆCBˆ™]\›ˆØXÚVÈ‘Y˜][X]\šX[—NÃBˆCBˆ[˜Ý[ÛˆY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]JÛ›ÝÛ‘^[œÚ[ÛœËØš™XÝØš™XÝYŠHÃBˆ›Üˆ
ÛÛœÝ˜[YH[ˆØš™XÝY‹™^[œÚ[ÛœÊHÃBˆYˆ
Û›ÝÛ‘^[œÚ[ÛœÖÛ˜[YWHOOH›ÚY
HÃBˆØš™XÝ\Ù\‘]K™Û‘^[œÚ[ÛœÈHØš™XÝ\Ù\‘]K™Û‘^[œÚ[ÛœÈßNÃBˆØš™XÝ\Ù\‘]K™Û‘^[œÚ[ÛœÖÛ˜[YWHHØš™XÝY‹™^[œÚ[ÛœÖÛ˜[YWNÃBˆCBˆCBˆCBˆ[˜Ý[Ûˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]JØš™XÝÛ‘YŠHÃBˆYˆ
Û‘Y‹™^˜\ÈOOH›ÚY
HÃBˆYˆ
\[ÙˆÛ‘Y‹™^˜\ÈOOH›Øš™XÝŠHÃBˆØš™XÝ˜\ÜÚYÛŠØš™XÝ\Ù\‘]KÛ‘Y‹™^˜\ÊNÃBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•‘QK‘Ó“ØY\ŽˆYÛ›Üš[™Èš[Z]]™H\H™^˜\Ëˆ
ÈÛ‘Y‹™^˜\ÊNÃBˆCBˆCBˆCBˆ[˜Ý[ÛˆY[Üœ\™Ù]ÊÙ[ÛY]žK\™Ù]Ë\œÙ\ŠHÃBˆ]\Ó[ÜœÜÚ][ÛˆH˜[ÙNÃBˆ]\Ó[Üœ›Ü›X[H˜[ÙNÃBˆ]\Ó[ÜœÛÛÜˆH˜[ÙNÃBˆ›Üˆ
]HH[H\™Ù]Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝ\™Ù]H\™Ù]ÖÚWNÃBˆYˆ
\™Ù]”ÔÒUSÓˆOOH›ÚY
H\Ó[ÜœÜÚ][ÛˆHYNÃBˆYˆ
\™Ù]““Ô“PSOOH›ÚY
H\Ó[Üœ›Ü›X[HYNÃBˆYˆ
\™Ù]ÓÓÔ—ÌOOH›ÚY
H\Ó[ÜœÛÛÜˆHYNÃBˆYˆ
\Ó[ÜœÜÚ][Ûˆ	‰ˆ\Ó[Üœ›Ü›X[	‰ˆ\Ó[ÜœÛÛÜŠHœ™XZÎÃBˆCBˆYˆ
Z\Ó[ÜœÜÚ][Ûˆ	‰ˆZ\Ó[Üœ›Ü›X[	‰ˆZ\Ó[ÜœÛÛÜŠH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÙ[ÛY]žJNÃBˆÛÛœÝ[™[™ÔÜÚ][ÛXØÙ\ÜÛÜœÈH×NÃBˆÛÛœÝ[™[™Ó›Ü›X[XØÙ\ÜÛÜœÈH×NÃBˆÛÛœÝ[™[™ÐÛÛÜXØÙ\ÜÛÜœÈH×NÃBˆ›Üˆ
]HH[H\™Ù]Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝ\™Ù]H\™Ù]ÖÚWNÃBˆYˆ
\Ó[ÜœÜÚ][ÛŠHÃBˆÛÛœÝ[™[™ÐXØÙ\ÜÛÜˆH\™Ù]”ÔÒUSÓˆOOH›ÚYÈ\œÙ\‹™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹\™Ù]”ÔÒUSÓŠHˆÙ[ÛY]žK˜]šX]\ËœÜÚ][ÛŽÃBˆ[™[™ÔÜÚ][ÛXØÙ\ÜÛÜœËœ\Ú
[™[™ÐXØÙ\ÜÛÜŠNÃBˆCBˆYˆ
\Ó[Üœ›Ü›X[
HÃBˆÛÛœÝ[™[™ÐXØÙ\ÜÛÜˆH\™Ù]““Ô“PSOOH›ÚYÈ\œÙ\‹™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹\™Ù]““Ô“PS
HˆÙ[ÛY]žK˜]šX]\Ë››Ü›X[ÃBˆ[™[™Ó›Ü›X[XØÙ\ÜÛÜœËœ\Ú
[™[™ÐXØÙ\ÜÛÜŠNÃBˆCBˆYˆ
\Ó[ÜœÛÛÜŠHÃBˆÛÛœÝ[™[™ÐXØÙ\ÜÛÜˆH\™Ù]ÓÓÔ—ÌOOH›ÚYÈ\œÙ\‹™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹\™Ù]ÓÓÔ—Ì
HˆÙ[ÛY]žK˜]šX]\Ë˜ÛÛÜŽÃBˆ[™[™ÐÛÛÜXØÙ\ÜÛÜœËœ\Ú
[™[™ÐXØÙ\ÜÛÜŠNÃBˆCBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
ÃBˆ›ÛZ\ÙK˜[
[™[™ÔÜÚ][ÛXØÙ\ÜÛÜœÊKBˆ›ÛZ\ÙK˜[
[™[™Ó›Ü›X[XØÙ\ÜÛÜœÊKBˆ›ÛZ\ÙK˜[
[™[™ÐÛÛÜXØÙ\ÜÛÜœÊCBˆJK[Š[˜Ý[ÛŠXØÙ\ÜÛÜœÊHÃBˆÛÛœÝ[ÜœÜÚ][ÛœÈHXØÙ\ÜÛÜœÖÌNÃBˆÛÛœÝ[Üœ›Ü›X[ÈHXØÙ\ÜÛÜœÖÌWNÃBˆÛÛœÝ[ÜœÛÛÜœÈHXØÙ\ÜÛÜœÖÌ—NÃBˆYˆ
\Ó[ÜœÜÚ][ÛŠHÙ[ÛY]žK›[Üœ]šX]\ËœÜÚ][ÛˆH[ÜœÜÚ][ÛœÎÃBˆYˆ
\Ó[Üœ›Ü›X[
HÙ[ÛY]žK›[Üœ]šX]\Ë››Ü›X[H[Üœ›Ü›X[ÎÃBˆYˆ
\Ó[ÜœÛÛÜŠHÙ[ÛY]žK›[Üœ]šX]\Ë˜ÛÛÜˆH[ÜœÛÛÜœÎÃBˆÙ[ÛY]žK›[Üœ\™Ù]Ô™[]]™HHYNÃBˆ™]\›ˆÙ[ÛY]žNÃBˆJNÃBˆCBˆ[˜Ý[Ûˆ\]S[Üœ\™Ù]ÊY\ÚY\ÚYŠHÃBˆY\Ú\]S[Üœ\™Ù]Ê
NÃBˆYˆ
Y\ÚY‹ÙZYÚÈOOH›ÚY
HÃBˆ›Üˆ
]HH[HY\ÚY‹ÙZYÚË›[™ÝÈH[ÈJÊÊHÃBˆY\Ú›[Üœ\™Ù][™›Y[˜Ù\ÖÚWHHY\ÚY‹ÙZYÚÖÚWNÃBˆCBˆCBˆYˆ
Y\ÚY‹™^˜\È	‰ˆ\œ˜^Kš\Ð\œ˜^JY\ÚY‹™^˜\Ë\™Ù]˜[Y\ÊJHÃBˆÛÛœÝ\™Ù]˜[Y\ÈHY\ÚY‹™^˜\Ë\™Ù]˜[Y\ÎÃBˆYˆ
Y\Ú›[Üœ\™Ù][™›Y[˜Ù\Ë›[™ÝOOH\™Ù]˜[Y\Ë›[™Ý
HÃBˆY\Ú›[Üœ\™Ù]XÝ[Û˜\žHHßNÃBˆ›Üˆ
]HH[H\™Ù]˜[Y\Ë›[™ÝÈH[ÈJÊÊHÃBˆY\Ú›[Üœ\™Ù]XÝ[Û˜\žVÝ\™Ù]˜[Y\ÖÚWWHHNÃBˆCBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•‘QK‘Ó“ØY\Žˆ[˜[Y^˜\Ë\™Ù]˜[Y\È[™ÝˆYÛ›Üš[™È˜[Y\ËˆŠNÃBˆCBˆCBˆCBˆ[˜Ý[ÛˆÜ™X]Tš[Z]]™RÙ^Jš[Z]]™QYŠHÃBˆ]Ù[ÛY]žRÙ^NÃBˆÛÛœÝ˜XÛÑ^[œÚ[ÛˆHš[Z]]™QY‹™^[œÚ[ÛœÈ	‰ˆš[Z]]™QY‹™^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÑPÓ×ÓQTÒÐÓÓT‘TÔÒSÓ—NÃBˆYˆ
˜XÛÑ^[œÚ[ÛŠHÃBˆÙ[ÛY]žRÙ^HH™˜XÛÎˆˆ
È˜XÛÑ^[œÚ[Û‹˜Y™™\•šY]È
ÈŽˆˆ
È˜XÛÑ^[œÚ[Û‹š[™XÙ\È
ÈŽˆˆ
ÈÜ™X]P]šX]\ÒÙ^J˜XÛÑ^[œÚ[Û‹˜]šX]\ÊNÃBˆH[ÙHÃBˆÙ[ÛY]žRÙ^HHš[Z]]™QY‹š[™XÙ\È
ÈŽˆˆ
ÈÜ™X]P]šX]\ÒÙ^Jš[Z]]™QY‹˜]šX]\ÊH
ÈŽˆˆ
Èš[Z]]™QY‹›[ÙNÃBˆCBˆYˆ
š[Z]]™QY‹\™Ù]ÈOOH›ÚY
HÃBˆ›Üˆ
]HH[Hš[Z]]™QY‹\™Ù]Ë›[™ÝÈH[ÈJÊÊHÃBˆÙ[ÛY]žRÙ^H
ÏHŽˆˆ
ÈÜ™X]P]šX]\ÒÙ^Jš[Z]]™QY‹\™Ù]ÖÚWJNÃBˆCBˆCBˆ™]\›ˆÙ[ÛY]žRÙ^NÃBˆCBˆ[˜Ý[ÛˆÜ™X]P]šX]\ÒÙ^J]šX]\ÊHÃBˆ]]šX]\ÒÙ^HHˆŽÃBˆÛÛœÝÙ^\ÈHØš™XÝšÙ^\Ê]šX]\ÊKœÛÜ

NÃBˆ›Üˆ
]HH[HÙ^\Ë›[™ÝÈH[ÈJÊÊHÃBˆ]šX]\ÒÙ^H
ÏHÙ^\ÖÚWH
ÈŽˆˆ
È]šX]\ÖÚÙ^\ÖÚWWH
ÈŽÈŽÃBˆCBˆ™]\›ˆ]šX]\ÒÙ^NÃBˆCBˆ[˜Ý[ÛˆÙ]›Ü›X[^™YÛÛ\Û™[ØØ[JÛÛœÝXÝÜŠHÃBˆÝÚ]Ú
ÛÛœÝXÝÜŠHÃBˆØ\ÙH[\œ˜^NƒBˆ™]\›ˆHÈLÎÃBˆØ\ÙHZ[\œ˜^NƒBˆ™]\›ˆHÈMNÃBˆØ\ÙH[M\œ˜^NƒBˆ™]\›ˆHÈÌÍÎÃBˆØ\ÙHZ[M\œ˜^NƒBˆ™]\›ˆHÈMLÍNÃBˆY˜][ƒBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ[œÝ\ÜY›Ü›X[^™YXØÙ\ÜÛÜˆÛÛ\Û™[\KˆŠNÃBˆCBˆCBˆ[˜Ý[ÛˆÙ][XYÙUT’SZ[YU\J\šJHÃBˆYˆ
\šKœÙX\˜Ú
×šœOÙÊ	ÊKÚJHˆ\šKœÙX\˜Ú
×™]Wš[XYÙWÚœYËÊHOOH
H™]\›ˆš[XYÙKÚœYÈŽÃBˆYˆ
\šKœÙX\˜Ú
×ÙXœ
	ÊKÚJHˆ\šKœÙX\˜Ú
×™]Wš[XYÙWÝÙXœÊHOOH
H™]\›ˆš[XYÙKÝÙXœŽÃBˆYˆ
\šKœÙX\˜Ú
×šÝŠ	ÊKÚJHˆ\šKœÙX\˜Ú
×™]Wš[XYÙWÚÝ‹ÊHOOH
H™]\›ˆš[XYÙKÚÝˆŽÃBˆ™]\›ˆš[XYÙKÜ™ÈŽÃBˆCBˆ˜\ˆÚY[]SX]š^ˆH™]ÈX]š^

NÃBˆ˜\ˆÓ”\œÙ\ˆHÛ\ÜÈÃBˆÛÛœÝXÝÜŠœÛÛˆHßKÜ[ÛœÈHßJHÃBˆ\ËšœÛÛˆHœÛÛŽÃBˆ\Ë™^[œÚ[ÛœÈHßNÃBˆ\ËœYÚ[œÈHßNÃBˆ\Ë›Ü[ÛœÈHÜ[ÛœÎÃBˆ\Ë˜ØXÚHH™]ÈÓ”™YÚ\ÝžJ
NÃBˆ\Ë˜\ÜÛØÚX][ÛœÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÃBˆ\Ëœš[Z]]™PØXÚHHßNÃBˆ\Ë››ÙPØXÚHHßNÃBˆ\Ë›Y\ÚØXÚHHÈ™YœÎˆßK\Ù\ÎˆßHNÃBˆ\Ë˜Ø[Y\˜PØXÚHHÈ™YœÎˆßK\Ù\ÎˆßHNÃBˆ\Ë›YÚØXÚHHÈ™YœÎˆßK\Ù\ÎˆßHNÃBˆ\ËœÛÝ\˜ÙPØXÚHHßNÃBˆ\Ë^\™PØXÚHHßNÃBˆ\Ë››ÙS˜[Y\Õ\ÙYHßNÃBˆ]\ÔØY˜\šHH˜[ÙNÃBˆ]ØY˜\šU™\œÚ[ÛˆHLNÃBˆ]\Ñš\™Y›ÞH˜[ÙNÃBˆ]š\™Y›Þ™\œÚ[ÛˆHLNÃBˆYˆ
\[Ùˆ˜]šYØ]ÜˆOOH[™Yš[™YŠHÃBˆÛÛœÝ\Ù\YÙ[H˜]šYØ]Ü‹\Ù\YÙ[ÃBˆ\ÔØY˜\šHH×Š
ÈXÚ›ÛY_[™›ÚY
KŠJœØY˜\šKÚK\Ý
\Ù\YÙ[
HOOHYNÃBˆÛÛœÝØY˜\šSX]ÚH\Ù\YÙ[›X]Ú
Õ™\œÚ[Û—Ê
ÊKÊNÃBˆØY˜\šU™\œÚ[ÛˆH\ÔØY˜\šH	‰ˆØY˜\šSX]ÚÈ\œÙR[
ØY˜\šSX]ÚÌWKL
HˆLNÃBˆ\Ñš\™Y›ÞH\Ù\YÙ[š[™^ÙŠ‘š\™Y›ÞŠHˆLNÃBˆš\™Y›Þ™\œÚ[ÛˆH\Ñš\™Y›ÞÈ\Ù\YÙ[›X]Ú
Ñš\™Y›ÞÊÌNWJÊW‹ÊVÌWHˆLNÃBˆCBˆYˆ
\[ÙˆÜ™X]R[XYÙPš]X\OOH[™Yš[™Yˆ\ÔØY˜\šH	‰ˆØY˜\šU™\œÚ[ÛˆMÈ\Ñš\™Y›Þ	‰ˆš\™Y›Þ™\œÚ[ÛˆN
HÃBˆ\Ë^\™SØY\ˆH™]È^\™SØY\Š\Ë›Ü[ÛœË›X[˜YÙ\ŠNÃBˆH[ÙHÃBˆ\Ë^\™SØY\ˆH™]È[XYÙPš]X\ØY\Š\Ë›Ü[ÛœË›X[˜YÙ\ŠNÃBˆCBˆ\Ë^\™SØY\‹œÙ]Ü›ÜÜÓÜšYÚ[Š\Ë›Ü[ÛœË˜Ü›ÜÜÓÜšYÚ[ŠNÃBˆ\Ë^\™SØY\‹œÙ]™\]Y\ÝXY\Š\Ë›Ü[ÛœËœ™\]Y\ÝXY\ŠNÃBˆ\Ë™š[SØY\ˆH™]Èš[SØY\Š\Ë›Ü[ÛœË›X[˜YÙ\ŠNÃBˆ\Ë™š[SØY\‹œÙ]™\ÜÛœÙU\J˜\œ˜^XY™™\ˆŠNÃBˆYˆ
\Ë›Ü[ÛœË˜Ü›ÜÜÓÜšYÚ[ˆOOH\ÙKXÜ™Y[X[ÈŠHÃBˆ\Ë™š[SØY\‹œÙ]Ú]Ü™Y[X[ÊYJNÃBˆCBˆCBˆÙ]^[œÚ[ÛœÊ^[œÚ[ÛœÊHÃBˆ\Ë™^[œÚ[ÛœÈH^[œÚ[ÛœÎÃBˆCBˆÙ]YÚ[œÊYÚ[œÊHÃBˆ\ËœYÚ[œÈHYÚ[œÎÃBˆCBˆ\œÙJÛ“ØYÛ‘\œ›ÜŠHÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ^[œÚ[ÛœÈH\Ë™^[œÚ[ÛœÎÃBˆ\Ë˜ØXÚKœ™[[Ý™P[

NÃBˆ\Ë››ÙPØXÚHHßNÃBˆ\Ë—Ú[›ÚÙP[
[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^—ÛX\šÑYœÈ	‰ˆ^—ÛX\šÑYœÊ
NÃBˆJNÃBˆ›ÛZ\ÙK˜[
\Ë—Ú[›ÚÙP[
[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^˜™Y›Ü™T›ÛÝ	‰ˆ^˜™Y›Ü™T›ÛÝ

NÃBˆJJK[Š[˜Ý[ÛŠ
HÃBˆ™]\›ˆ›ÛZ\ÙK˜[
ÃBˆ\œÙ\‹™Ù]\[™[˜ÚY\ÊœØÙ[™HŠKBˆ\œÙ\‹™Ù]\[™[˜ÚY\Ê˜[š[X][ÛˆŠKBˆ\œÙ\‹™Ù]\[™[˜ÚY\Ê˜Ø[Y\˜HŠCBˆJNÃBˆJK[Š[˜Ý[ÛŠ\[™[˜ÚY\ÊHÃBˆÛÛœÝ™\Ý[HÃBˆØÙ[™Nˆ\[™[˜ÚY\ÖÌVÚœÛÛ‹œØÙ[™HKBˆØÙ[™\Îˆ\[™[˜ÚY\ÖÌKBˆ[š[X][ÛœÎˆ\[™[˜ÚY\ÖÌWKBˆØ[Y\˜\Îˆ\[™[˜ÚY\ÖÌ—KBˆ\ÜÙ]ˆœÛÛ‹˜\ÜÙ]Bˆ\œÙ\‹Bˆ\Ù\‘]NˆßCBˆNÃBˆY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]J^[œÚ[ÛœË™\Ý[œÛÛŠNÃBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]J™\Ý[œÛÛŠNÃBˆ™]\›ˆ›ÛZ\ÙK˜[
\œÙ\‹—Ú[›ÚÙP[
[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^˜Y\”›ÛÝ	‰ˆ^˜Y\”›ÛÝ
™\Ý[
NÃBˆJJK[Š[˜Ý[ÛŠ
HÃBˆ›Üˆ
ÛÛœÝØÙ[™LˆÙˆ™\Ý[œØÙ[™\ÊHÃBˆØÙ[™L‹\]SX]š^ÛÜ›

NÃBˆCBˆÛ“ØY
™\Ý[
NÃBˆJNÃBˆJK˜Ø]Ú
Û‘\œ›ÜŠNÃBˆCBˆÊŠƒBˆ
ˆX\šÜÈHÜXÚX[›Ù\ËÛY\Ú\È[ˆœÛÛˆ›ÜˆY™šXÚY[\œÙKƒBˆ
ƒBˆ
ˆš]˜]CBˆ
‹ÃBˆÛX\šÑYœÊ
HÃBˆÛÛœÝ›ÙQYœÈH\ËšœÛÛ‹››Ù\È×NÃBˆÛÛœÝÚÚ[‘YœÈH\ËšœÛÛ‹œÚÚ[œÈ×NÃBˆÛÛœÝY\ÚYœÈH\ËšœÛÛ‹›Y\Ú\È×NÃBˆ›Üˆ
]ÚÚ[’[™^HÚÚ[“[™ÝHÚÚ[‘YœË›[™ÝÈÚÚ[’[™^ÚÚ[“[™ÝÈÚÚ[’[™^
ÊÊHÃBˆÛÛœÝ›Ú[ÈHÚÚ[‘YœÖÜÚÚ[’[™^Kš›Ú[ÎÃBˆ›Üˆ
]HH[H›Ú[Ë›[™ÝÈH[ÈJÊÊHÃBˆ›ÙQYœÖÚ›Ú[ÖÚWWKš\Ð›Û™HHYNÃBˆCBˆCBˆ›Üˆ
]›ÙR[™^H›ÙS[™ÝH›ÙQYœË›[™ÝÈ›ÙR[™^›ÙS[™ÝÈ›ÙR[™^
ÊÊHÃBˆÛÛœÝ›ÙQYˆH›ÙQYœÖÛ›ÙR[™^NÃBˆYˆ
›ÙQY‹›Y\ÚOOH›ÚY
HÃBˆ\Ë—ØY›ÙT™YŠ\Ë›Y\ÚØXÚK›ÙQY‹›Y\Ú
NÃBˆYˆ
›ÙQY‹œÚÚ[ˆOOH›ÚY
HÃBˆY\ÚYœÖÛ›ÙQY‹›Y\ÚKš\ÔÚÚ[›™YY\ÚHYNÃBˆCBˆCBˆYˆ
›ÙQY‹˜Ø[Y\˜HOOH›ÚY
HÃBˆ\Ë—ØY›ÙT™YŠ\Ë˜Ø[Y\˜PØXÚK›ÙQY‹˜Ø[Y\˜JNÃBˆCBˆCBˆCBˆÊŠƒBˆ
ˆÛÝ[È™Y™\™[˜Ù\ÈÈÚ\™Y›ÙHÈØš™XÝÑ™\ÛÝ\˜Ù\Ëˆ\ÙH™\ÛÝ\˜Ù\ÃBˆ
ˆØ[ˆ™H™]\ÙYÜˆš[œÝ[X]Y‹]][\H›Ù\È[ˆHØÙ[™CBˆ
ˆY\˜\˜ÚKˆY\ÚØ[Y\˜K[™YÚ[œÝ[˜Ù\È\™H[œÝ[X]Y[™]\ÝBˆ
ˆ™HX\šÙYˆ›Û‹\ØÙ[™YÜ˜\™\ÛÝ\˜Ù\È
ZÙHX]\šX[ËÙ[ÛY]šY\Ë[™Bˆ
ˆ^\™\ÊHØ[ˆ™H™]\ÙY\™XÝH[™\™H›ÝX\šÙY\™KƒBˆ
ƒBˆ
ˆ^[\NˆÙ\Ú][SZ[ÕXÚÈØ[\H[Ù[™]\Ù\È•ÚY[ˆY\Ú\ËƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÓØš™XÝHØXÚCBˆ
ˆ\˜[HÓØš™XÝÑH[™^Bˆ
‹ÃBˆØY›ÙT™YŠØXÚK[™^
HÃBˆYˆ
[™^OOH›ÚY
H™]\›ŽÃBˆYˆ
ØXÚKœ™YœÖÚ[™^HOOH›ÚY
HÃBˆØXÚKœ™YœÖÚ[™^HHØXÚK\Ù\ÖÚ[™^HHÃBˆCBˆØXÚKœ™YœÖÚ[™^JÊÎÃBˆCBˆÊŠƒBˆ
ˆ™]\›œÈH™Y™\™[˜ÙHÈHÚ\™Y™\ÛÝ\˜ÙKÛÛš[™È]Yˆ™XÙ\ÜØ\žKƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÓØš™XÝHØXÚCBˆ
ˆ\˜[HÛ[X™\ŸH[™^Bˆ
ˆ\˜[HÓØš™XÝHØš™XÝBˆ
ˆ™]\›ˆÓØš™XÝCBˆ
‹ÃBˆÙÙ]›ÙT™YŠØXÚK[™^Øš™XÝ
HÃBˆYˆ
ØXÚKœ™YœÖÚ[™^HHJH™]\›ˆØš™XÝÃBˆÛÛœÝ™YˆHØš™XÝ˜ÛÛ™J
NÃBˆÛÛœÝ\]SX\[™ÜÈH
ÜšYÚ[˜[ÛÛ™JHOˆÃBˆÛÛœÝX\[™ÜÈH\Ë˜\ÜÛØÚX][ÛœË™Ù]
ÜšYÚ[˜[
NÃBˆYˆ
X\[™ÜÈOH[
HÃBˆ\Ë˜\ÜÛØÚX][ÛœËœÙ]
ÛÛ™KX\[™ÜÊNÃBˆCBˆ›Üˆ
ÛÛœÝÚKÚ[HÙˆÜšYÚ[˜[˜Ú[™[‹™[šY\Ê
JHÃBˆ\]SX\[™ÜÊÚ[ÛÛ™K˜Ú[™[–ÚWJNÃBˆCBˆNÃBˆ\]SX\[™ÜÊØš™XÝ™YŠNÃBˆ™Y‹›˜[YH
ÏH—Ú[œÝ[˜ÙWÈˆ
ÈØXÚK\Ù\ÖÚ[™^JÊÎÃBˆ™]\›ˆ™YŽÃBˆCBˆÚ[›ÚÙSÛ™J[˜ÊHÃBˆÛÛœÝ^[œÚ[ÛœÈHØš™XÝ˜[Y\Ê\ËœYÚ[œÊNÃBˆ^[œÚ[ÛœËœ\Ú
\ÊNÃBˆ›Üˆ
]HHÈH^[œÚ[ÛœË›[™ÝÈJÊÊHÃBˆÛÛœÝ™\Ý[H[˜Ê^[œÚ[ÛœÖÚWJNÃBˆYˆ
™\Ý[
H™]\›ˆ™\Ý[ÃBˆCBˆ™]\›ˆ[ÃBˆCBˆÚ[›ÚÙP[
[˜ÊHÃBˆÛÛœÝ^[œÚ[ÛœÈHØš™XÝ˜[Y\Ê\ËœYÚ[œÊNÃBˆ^[œÚ[ÛœË[œÚY
\ÊNÃBˆÛÛœÝ[™[™ÈH×NÃBˆ›Üˆ
]HHÈH^[œÚ[ÛœË›[™ÝÈJÊÊHÃBˆÛÛœÝ™\Ý[H[˜Ê^[œÚ[ÛœÖÚWJNÃBˆYˆ
™\Ý[
H[™[™Ëœ\Ú
™\Ý[
NÃBˆCBˆ™]\›ˆ[™[™ÎÃBˆCBˆÊŠƒBˆ
ˆ™\]Y\ÝÈHÜXÚYšYY\[™[˜ÞH\Þ[˜Ú›Û›Ý\ÛKÚ]ØXÚ[™ËƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÜÝš[™ßH\CBˆ
ˆ\˜[HÛ[X™\ŸH[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOØš™XÝÑX]\šX[^\™_[š[X][ÛÛ\\œ˜^PY™™\ŸØš™XÝŸCBˆ
‹ÃBˆÙ]\[™[˜ÞJ\K[™^
HÃBˆÛÛœÝØXÚRÙ^HH\H
ÈŽˆˆ
È[™^ÃBˆ]\[™[˜ÞHH\Ë˜ØXÚK™Ù]
ØXÚRÙ^JNÃBˆYˆ
Y\[™[˜ÞJHÃBˆÝÚ]Ú
\JHÃBˆØ\ÙHœØÙ[™HŽƒBˆ\[™[˜ÞHH\Ë›ØYØÙ[™J[™^
NÃBˆœ™XZÎÃBˆØ\ÙH››ÙHŽƒBˆ\[™[˜ÞHH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^›ØY›ÙH	‰ˆ^›ØY›ÙJ[™^
NÃBˆJNÃBˆœ™XZÎÃBˆØ\ÙH›Y\ÚŽƒBˆ\[™[˜ÞHH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^›ØYY\Ú	‰ˆ^›ØYY\Ú
[™^
NÃBˆJNÃBˆœ™XZÎÃBˆØ\ÙH˜XØÙ\ÜÛÜˆŽƒBˆ\[™[˜ÞHH\Ë›ØYXØÙ\ÜÛÜŠ[™^
NÃBˆœ™XZÎÃBˆØ\ÙH˜Y™™\•šY]ÈŽƒBˆ\[™[˜ÞHH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^›ØYY™™\•šY]È	‰ˆ^›ØYY™™\•šY]Ê[™^
NÃBˆJNÃBˆœ™XZÎÃBˆØ\ÙH˜Y™™\ˆŽƒBˆ\[™[˜ÞHH\Ë›ØYY™™\Š[™^
NÃBˆœ™XZÎÃBˆØ\ÙH›X]\šX[ŽƒBˆ\[™[˜ÞHH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^›ØYX]\šX[	‰ˆ^›ØYX]\šX[
[™^
NÃBˆJNÃBˆœ™XZÎÃBˆØ\ÙH^\™HŽƒBˆ\[™[˜ÞHH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^›ØY^\™H	‰ˆ^›ØY^\™J[™^
NÃBˆJNÃBˆœ™XZÎÃBˆØ\ÙHœÚÚ[ˆŽƒBˆ\[™[˜ÞHH\Ë›ØYÚÚ[Š[™^
NÃBˆœ™XZÎÃBˆØ\ÙH˜[š[X][ÛˆŽƒBˆ\[™[˜ÞHH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^›ØY[š[X][Ûˆ	‰ˆ^›ØY[š[X][ÛŠ[™^
NÃBˆJNÃBˆœ™XZÎÃBˆØ\ÙH˜Ø[Y\˜HŽƒBˆ\[™[˜ÞHH\Ë›ØYØ[Y\˜J[™^
NÃBˆœ™XZÎÃBˆY˜][ƒBˆ\[™[˜ÞHH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^OH\È	‰ˆ^™Ù]\[™[˜ÞH	‰ˆ^™Ù]\[™[˜ÞJ\K[™^
NÃBˆJNÃBˆYˆ
Y\[™[˜ÞJHÃBˆ›ÝÈ™]È\œ›ÜŠ•[šÛ›ÝÛˆ\Nˆˆ
È\JNÃBˆCBˆœ™XZÎÃBˆCBˆ\Ë˜ØXÚK˜Y
ØXÚRÙ^K\[™[˜ÞJNÃBˆCBˆ™]\›ˆ\[™[˜ÞNÃBˆCBˆÊŠƒBˆ
ˆ™\]Y\ÝÈ[\[™[˜ÚY\ÈÙˆHÜXÚYšYY\H\Þ[˜Ú›Û›Ý\ÛKÚ]ØXÚ[™ËƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÜÝš[™ßH\CBˆ
ˆ™]\›ˆÔ›ÛZ\ÙO\œ˜^OØš™XÝŸCBˆ
‹ÃBˆÙ]\[™[˜ÚY\Ê\JHÃBˆ]\[™[˜ÚY\ÈH\Ë˜ØXÚK™Ù]
\JNÃBˆYˆ
Y\[™[˜ÚY\ÊHÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝYœÈH\ËšœÛÛ–Ý\H
È
\HOOH›Y\ÚˆÈ™\ÈˆˆœÈŠWH×NÃBˆ\[™[˜ÚY\ÈH›ÛZ\ÙK˜[
YœË›X\
[˜Ý[ÛŠY‹[™^
HÃBˆ™]\›ˆ\œÙ\‹™Ù]\[™[˜ÞJ\K[™^
NÃBˆJJNÃBˆ\Ë˜ØXÚK˜Y
\K\[™[˜ÚY\ÊNÃBˆCBˆ™]\›ˆ\[™[˜ÚY\ÎÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ø›Ø‹ÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÔ‘PQQK›YØY™™\œËX[™XY™™\‹]šY]ÜÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHY™™\’[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙO\œ˜^PY™™\ŸCBˆ
‹ÃBˆØYY™™\ŠY™™\’[™^
HÃBˆÛÛœÝY™™\‘YˆH\ËšœÛÛ‹˜Y™™\œÖØY™™\’[™^NÃBˆÛÛœÝØY\ŒˆH\Ë™š[SØY\ŽÃBˆYˆ
Y™™\‘Y‹\H	‰ˆY™™\‘Y‹\HOOH˜\œ˜^XY™™\ˆŠHÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆˆ
ÈY™™\‘Y‹\H
ÈˆY™™\ˆ\H\È›ÝÝ\ÜYˆŠNÃBˆCBˆYˆ
Y™™\‘Y‹\šHOOH›ÚY	‰ˆY™™\’[™^OOH
HÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J\Ë™^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—Ð’ST–WÑÓ—K˜›ÙJNÃBˆCBˆÛÛœÝÜ[ÛœÈH\Ë›Ü[ÛœÎÃBˆ™]\›ˆ™]È›ÛZ\ÙJ[˜Ý[ÛŠ™\ÛÛ™K™Z™XÝ
HÃBˆØY\Œ‹›ØY
ØY\•][Ëœ™\ÛÛ™UT“
Y™™\‘Y‹\šKÜ[ÛœËœ]
K™\ÛÛ™K›ÚY[˜Ý[ÛŠ
HÃBˆ™Z™XÝ
™]È\œ›ÜŠ	Õ‘QK‘Ó“ØY\Žˆ˜Z[YÈØYY™™\ˆ‰È
ÈY™™\‘Y‹\šH
È	È‹‰ÊJNÃBˆJNÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ø›Ø‹ÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÔ‘PQQK›YØY™™\œËX[™XY™™\‹]šY]ÜÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHY™™\•šY]Ò[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙO\œ˜^PY™™\ŸCBˆ
‹ÃBˆØYY™™\•šY]ÊY™™\•šY]Ò[™^
HÃBˆÛÛœÝY™™\•šY]ÑYˆH\ËšœÛÛ‹˜Y™™\•šY]ÜÖØY™™\•šY]Ò[™^NÃBˆ™]\›ˆ\Ë™Ù]\[™[˜ÞJ˜Y™™\ˆ‹Y™™\•šY]ÑY‹˜Y™™\ŠK[Š[˜Ý[ÛŠY™™\ŠHÃBˆÛÛœÝž]S[™ÝHY™™\•šY]ÑY‹˜ž]S[™ÝÃBˆÛÛœÝž]SÙ™œÙ]HY™™\•šY]ÑY‹˜ž]SÙ™œÙ]ÃBˆ™]\›ˆY™™\‹œÛXÙJž]SÙ™œÙ]ž]SÙ™œÙ]
Èž]S[™Ý
NÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ø›Ø‹ÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÔ‘PQQK›YØXØÙ\ÜÛÜœÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHXØÙ\ÜÛÜ’[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOY™™\]šX]_[\›X]™YY™™\]šX]OŸCBˆ
‹ÃBˆØYXØÙ\ÜÛÜŠXØÙ\ÜÛÜ’[™^
HÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝXØÙ\ÜÛÜ‘YˆH\ËšœÛÛ‹˜XØÙ\ÜÛÜœÖØXØÙ\ÜÛÜ’[™^NÃBˆYˆ
XØÙ\ÜÛÜ‘Y‹˜Y™™\•šY]ÈOOH›ÚY	‰ˆXØÙ\ÜÛÜ‘Y‹œÜ\œÙHOOH›ÚY
HÃBˆÛÛœÝ][TÚ^™HHÑP‘ÓÕTWÔÒV‘TÖØXØÙ\ÜÛÜ‘Y‹\WNÃBˆÛÛœÝ\Y\œ˜^HHÑP‘ÓÐÓÓTÓ‘S•ÕTTÖØXØÙ\ÜÛÜ‘Y‹˜ÛÛ\Û™[\WNÃBˆÛÛœÝ›Ü›X[^™YHXØÙ\ÜÛÜ‘Y‹››Ü›X[^™YOOHYNÃBˆÛÛœÝ\œ˜^HH™]È\Y\œ˜^JXØÙ\ÜÛÜ‘Y‹˜ÛÝ[
ˆ][TÚ^™JNÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J™]ÈY™™\]šX]J\œ˜^K][TÚ^™K›Ü›X[^™Y
JNÃBˆCBˆÛÛœÝ[™[™ÐY™™\•šY]ÜÈH×NÃBˆYˆ
XØÙ\ÜÛÜ‘Y‹˜Y™™\•šY]ÈOOH›ÚY
HÃBˆ[™[™ÐY™™\•šY]ÜËœ\Ú
\Ë™Ù]\[™[˜ÞJ˜Y™™\•šY]È‹XØÙ\ÜÛÜ‘Y‹˜Y™™\•šY]ÊJNÃBˆH[ÙHÃBˆ[™[™ÐY™™\•šY]ÜËœ\Ú
[
NÃBˆCBˆYˆ
XØÙ\ÜÛÜ‘Y‹œÜ\œÙHOOH›ÚY
HÃBˆ[™[™ÐY™™\•šY]ÜËœ\Ú
\Ë™Ù]\[™[˜ÞJ˜Y™™\•šY]È‹XØÙ\ÜÛÜ‘Y‹œÜ\œÙKš[™XÙ\Ë˜Y™™\•šY]ÊJNÃBˆ[™[™ÐY™™\•šY]ÜËœ\Ú
\Ë™Ù]\[™[˜ÞJ˜Y™™\•šY]È‹XØÙ\ÜÛÜ‘Y‹œÜ\œÙK˜[Y\Ë˜Y™™\•šY]ÊJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÐY™™\•šY]ÜÊK[Š[˜Ý[ÛŠY™™\•šY]ÜÊHÃBˆÛÛœÝY™™\•šY]ÈHY™™\•šY]ÜÖÌNÃBˆÛÛœÝ][TÚ^™HHÑP‘ÓÕTWÔÒV‘TÖØXØÙ\ÜÛÜ‘Y‹\WNÃBˆÛÛœÝ\Y\œ˜^HHÑP‘ÓÐÓÓTÓ‘S•ÕTTÖØXØÙ\ÜÛÜ‘Y‹˜ÛÛ\Û™[\WNÃBˆÛÛœÝ[[Y[ž]\ÈH\Y\œ˜^K–UT×ÔT—ÑSSQS•ÃBˆÛÛœÝ][Pž]\ÈH[[Y[ž]\È
ˆ][TÚ^™NÃBˆÛÛœÝž]SÙ™œÙ]HXØÙ\ÜÛÜ‘Y‹˜ž]SÙ™œÙ]ÃBˆÛÛœÝž]TÝšYHHXØÙ\ÜÛÜ‘Y‹˜Y™™\•šY]ÈOOH›ÚYÈœÛÛ‹˜Y™™\•šY]ÜÖØXØÙ\ÜÛÜ‘Y‹˜Y™™\•šY]×K˜ž]TÝšYHˆ›ÚYÃBˆÛÛœÝ›Ü›X[^™YHXØÙ\ÜÛÜ‘Y‹››Ü›X[^™YOOHYNÃBˆ]\œ˜^KY™™\]šX]NÃBˆYˆ
ž]TÝšYH	‰ˆž]TÝšYHOOH][Pž]\ÊHÃBˆÛÛœÝX”ÛXÙHHX]™›ÛÜŠž]SÙ™œÙ]Èž]TÝšYJNÃBˆÛÛœÝXØXÚRÙ^HH’[\›X]™YY™™\Žˆˆ
ÈXØÙ\ÜÛÜ‘Y‹˜Y™™\•šY]È
ÈŽˆˆ
ÈXØÙ\ÜÛÜ‘Y‹˜ÛÛ\Û™[\H
ÈŽˆˆ
ÈX”ÛXÙH
ÈŽˆˆ
ÈXØÙ\ÜÛÜ‘Y‹˜ÛÝ[ÃBˆ]XˆH\œÙ\‹˜ØXÚK™Ù]
XØXÚRÙ^JNÃBˆYˆ
ZXŠHÃBˆ\œ˜^HH™]È\Y\œ˜^JY™™\•šY]ËX”ÛXÙH
ˆž]TÝšYKXØÙ\ÜÛÜ‘Y‹˜ÛÝ[
ˆž]TÝšYHÈ[[Y[ž]\ÊNÃBˆXˆH™]È[\›X]™YY™™\Š\œ˜^Kž]TÝšYHÈ[[Y[ž]\ÊNÃBˆ\œÙ\‹˜ØXÚK˜Y
XØXÚRÙ^KXŠNÃBˆCBˆY™™\]šX]HH™]È[\›X]™YY™™\]šX]JX‹][TÚ^™Kž]SÙ™œÙ]	Hž]TÝšYHÈ[[Y[ž]\Ë›Ü›X[^™Y
NÃBˆH[ÙHÃBˆYˆ
Y™™\•šY]ÈOOH[
HÃBˆ\œ˜^HH™]È\Y\œ˜^JXØÙ\ÜÛÜ‘Y‹˜ÛÝ[
ˆ][TÚ^™JNÃBˆH[ÙHÃBˆ\œ˜^HH™]È\Y\œ˜^JY™™\•šY]Ëž]SÙ™œÙ]XØÙ\ÜÛÜ‘Y‹˜ÛÝ[
ˆ][TÚ^™JNÃBˆCBˆY™™\]šX]HH™]ÈY™™\]šX]J\œ˜^K][TÚ^™K›Ü›X[^™Y
NÃBˆCBˆYˆ
XØÙ\ÜÛÜ‘Y‹œÜ\œÙHOOH›ÚY
HÃBˆÛÛœÝ][TÚ^™R[™XÙ\ÈHÑP‘ÓÕTWÔÒV‘TË”ÐÐSTŽÃBˆÛÛœÝ\Y\œ˜^R[™XÙ\ÈHÑP‘ÓÐÓÓTÓ‘S•ÕTTÖØXØÙ\ÜÛÜ‘Y‹œÜ\œÙKš[™XÙ\Ë˜ÛÛ\Û™[\WNÃBˆÛÛœÝž]SÙ™œÙ][™XÙ\ÈHXØÙ\ÜÛÜ‘Y‹œÜ\œÙKš[™XÙ\Ë˜ž]SÙ™œÙ]ÃBˆÛÛœÝž]SÙ™œÙ]˜[Y\ÈHXØÙ\ÜÛÜ‘Y‹œÜ\œÙK˜[Y\Ë˜ž]SÙ™œÙ]ÃBˆÛÛœÝÜ\œÙR[™XÙ\ÈH™]È\Y\œ˜^R[™XÙ\ÊY™™\•šY]ÜÖÌWKž]SÙ™œÙ][™XÙ\ËXØÙ\ÜÛÜ‘Y‹œÜ\œÙK˜ÛÝ[
ˆ][TÚ^™R[™XÙ\ÊNÃBˆÛÛœÝÜ\œÙU˜[Y\ÈH™]È\Y\œ˜^JY™™\•šY]ÜÖÌ—Kž]SÙ™œÙ]˜[Y\ËXØÙ\ÜÛÜ‘Y‹œÜ\œÙK˜ÛÝ[
ˆ][TÚ^™JNÃBˆYˆ
Y™™\•šY]ÈOOH[
HÃBˆY™™\]šX]HH™]ÈY™™\]šX]JY™™\]šX]K˜\œ˜^KœÛXÙJ
KY™™\]šX]Kš][TÚ^™KY™™\]šX]K››Ü›X[^™Y
NÃBˆCBˆY™™\]šX]K››Ü›X[^™YH˜[ÙNÃBˆ›Üˆ
]HH[HÜ\œÙR[™XÙ\Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝ[™^HÜ\œÙR[™XÙ\ÖÚWNÃBˆY™™\]šX]KœÙ]
[™^Ü\œÙU˜[Y\ÖÚH
ˆ][TÚ^™WJNÃBˆYˆ
][TÚ^™HHŠHY™™\]šX]KœÙ]J[™^Ü\œÙU˜[Y\ÖÚH
ˆ][TÚ^™H
ÈWJNÃBˆYˆ
][TÚ^™HHÊHY™™\]šX]KœÙ]Š[™^Ü\œÙU˜[Y\ÖÚH
ˆ][TÚ^™H
È—JNÃBˆYˆ
][TÚ^™HH
HY™™\]šX]KœÙ]Ê[™^Ü\œÙU˜[Y\ÖÚH
ˆ][TÚ^™H
È×JNÃBˆYˆ
][TÚ^™HHJH›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ[œÝ\ÜY][TÚ^™H[ˆÜ\œÙHY™™\]šX]KˆŠNÃBˆCBˆY™™\]šX]K››Ü›X[^™YH›Ü›X[^™YÃBˆCBˆ™]\›ˆY™™\]šX]NÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ý™YKÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÝ^\™\ÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸH^\™R[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOÕ^\™OŸCBˆ
‹ÃBˆØY^\™J^\™R[™^
HÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝÜ[ÛœÈH\Ë›Ü[ÛœÎÃBˆÛÛœÝ^\™QYˆHœÛÛ‹^\™\ÖÝ^\™R[™^NÃBˆÛÛœÝÛÝ\˜ÙR[™^H^\™QY‹œÛÝ\˜ÙNÃBˆÛÛœÝÛÝ\˜ÙQYˆHœÛÛ‹š[XYÙ\ÖÜÛÝ\˜ÙR[™^NÃBˆ]ØY\ŒˆH\Ë^\™SØY\ŽÃBˆYˆ
ÛÝ\˜ÙQY‹\šJHÃBˆÛÛœÝ[™\ˆHÜ[ÛœË›X[˜YÙ\‹™Ù][™\ŠÛÝ\˜ÙQY‹\šJNÃBˆYˆ
[™\ˆOOH[
HØY\ŒˆH[™\ŽÃBˆCBˆ™]\›ˆ\Ë›ØY^\™R[XYÙJ^\™R[™^ÛÝ\˜ÙR[™^ØY\ŒŠNÃBˆCBˆØY^\™R[XYÙJ^\™R[™^ÛÝ\˜ÙR[™^ØY\ŒŠHÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ^\™QYˆHœÛÛ‹^\™\ÖÝ^\™R[™^NÃBˆÛÛœÝÛÝ\˜ÙQYˆHœÛÛ‹š[XYÙ\ÖÜÛÝ\˜ÙR[™^NÃBˆÛÛœÝØXÚRÙ^HH
ÛÝ\˜ÙQY‹\šHÛÝ\˜ÙQY‹˜Y™™\•šY]ÊH
ÈŽˆˆ
È^\™QY‹œØ[\\ŽÃBˆYˆ
\Ë^\™PØXÚVØØXÚRÙ^WJHÃBˆ™]\›ˆ\Ë^\™PØXÚVØØXÚRÙ^WNÃBˆCBˆÛÛœÝ›ÛZ\ÙHH\Ë›ØY[XYÙTÛÝ\˜ÙJÛÝ\˜ÙR[™^ØY\ŒŠK[Š[˜Ý[ÛŠ^\™JHÃBˆ^\™K™›\HH˜[ÙNÃBˆ^\™K›˜[YHH^\™QY‹›˜[YHÛÝ\˜ÙQY‹›˜[YHˆŽÃBˆYˆ
^\™K›˜[YHOOHˆˆ	‰ˆ\[ÙˆÛÝ\˜ÙQY‹\šHOOHœÝš[™Èˆ	‰ˆÛÝ\˜ÙQY‹\šKœÝ\ÕÚ]
™]Nš[XYÙKÈŠHOOH˜[ÙJHÃBˆ^\™K›˜[YHHÛÝ\˜ÙQY‹\šNÃBˆCBˆÛÛœÝØ[\\œÈHœÛÛ‹œØ[\\œÈßNÃBˆÛÛœÝØ[\\ˆHØ[\\œÖÝ^\™QY‹œØ[\\—HßNÃBˆ^\™K›XYÑš[\ˆHÑP‘ÓÑ’ST”ÖÜØ[\\‹›XYÑš[\—H[™X\‘š[\ŽÃBˆ^\™K›Z[‘š[\ˆHÑP‘ÓÑ’ST”ÖÜØ[\\‹›Z[‘š[\—H[™X\“Z\X\[™X\‘š[\ŽÃBˆ^\™KÜ˜\ÈHÑP‘ÓÕÔTS‘ÔÖÜØ[\\‹Ü˜\×H™\X]Ü˜\[™ÎÃBˆ^\™KÜ˜\HÑP‘ÓÕÔTS‘ÔÖÜØ[\\‹Ü˜\H™\X]Ü˜\[™ÎÃBˆ^\™K™Ù[™\˜]SZ\X\ÈH]^\™Kš\ÐÛÛ\™\ÜÙY^\™H	‰ˆ^\™K›Z[‘š[\ˆOOH™X\™\Ýš[\ˆ	‰ˆ^\™K›Z[‘š[\ˆOOH[™X\‘š[\ŽÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœËœÙ]
^\™KÈ^\™\Îˆ^\™R[™^JNÃBˆ™]\›ˆ^\™NÃBˆJK˜Ø]Ú
[˜Ý[ÛŠ
HÃBˆ™]\›ˆ[ÃBˆJNÃBˆ\Ë^\™PØXÚVØØXÚRÙ^WHH›ÛZ\ÙNÃBˆ™]\›ˆ›ÛZ\ÙNÃBˆCBˆØY[XYÙTÛÝ\˜ÙJÛÝ\˜ÙR[™^ØY\ŒŠHÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝÜ[ÛœÈH\Ë›Ü[ÛœÎÃBˆYˆ
\ËœÛÝ\˜ÙPØXÚVÜÛÝ\˜ÙR[™^HOOH›ÚY
HÃBˆ™]\›ˆ\ËœÛÝ\˜ÙPØXÚVÜÛÝ\˜ÙR[™^K[Š
^\™JHOˆ^\™K˜ÛÛ™J
JNÃBˆCBˆÛÛœÝÛÝ\˜ÙQYˆHœÛÛ‹š[XYÙ\ÖÜÛÝ\˜ÙR[™^NÃBˆÛÛœÝT“HÙ[‹•T“Ù[‹ÙXšÚ]T“ÃBˆ]ÛÝ\˜ÙUT’HHÛÝ\˜ÙQY‹\šHˆŽÃBˆ]\ÓØš™XÝT“H˜[ÙNÃBˆYˆ
ÛÝ\˜ÙQY‹˜Y™™\•šY]ÈOOH›ÚY
HÃBˆÛÝ\˜ÙUT’HH\œÙ\‹™Ù]\[™[˜ÞJ˜Y™™\•šY]È‹ÛÝ\˜ÙQY‹˜Y™™\•šY]ÊK[Š[˜Ý[ÛŠY™™\•šY]ÊHÃBˆ\ÓØš™XÝT“HYNÃBˆÛÛœÝ›ØˆH™]È›ØŠØY™™\•šY]×KÈ\NˆÛÝ\˜ÙQY‹›Z[YU\HJNÃBˆÛÝ\˜ÙUT’HHT“˜Ü™X]SØš™XÝT“
›ØŠNÃBˆ™]\›ˆÛÝ\˜ÙUT’NÃBˆJNÃBˆH[ÙHYˆ
ÛÝ\˜ÙQY‹\šHOOH›ÚY
HÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆ[XYÙHˆ
ÈÛÝ\˜ÙR[™^
Èˆ\ÈZ\ÜÚ[™ÈT’H[™Y™™\•šY]ÈŠNÃBˆCBˆÛÛœÝ›ÛZ\ÙHH›ÛZ\ÙKœ™\ÛÛ™JÛÝ\˜ÙUT’JK[Š[˜Ý[ÛŠÛÝ\˜ÙUT’LŠHÃBˆ™]\›ˆ™]È›ÛZ\ÙJ[˜Ý[ÛŠ™\ÛÛ™K™Z™XÝ
HÃBˆ]Û“ØYH™\ÛÛ™NÃBˆYˆ
ØY\Œ‹š\Ò[XYÙPš]X\ØY\ˆOOHYJHÃBˆÛ“ØYH[˜Ý[ÛŠ[XYÙPš]X\
HÃBˆÛÛœÝ^\™HH™]È^\™J[XYÙPš]X\
NÃBˆ^\™K›™YYÕ\]HHYNÃBˆ™\ÛÛ™J^\™JNÃBˆNÃBˆCBˆØY\Œ‹›ØY
ØY\•][Ëœ™\ÛÛ™UT“
ÛÝ\˜ÙUT’L‹Ü[ÛœËœ]
KÛ“ØY›ÚY™Z™XÝ
NÃBˆJNÃBˆJK[Š[˜Ý[ÛŠ^\™JHÃBˆYˆ
\ÓØš™XÝT“OOHYJHÃBˆT“œ™]›ÚÙSØš™XÝT“
ÛÝ\˜ÙUT’JNÃBˆCBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]J^\™KÛÝ\˜ÙQYŠNÃBˆ^\™K\Ù\‘]K›Z[YU\HHÛÝ\˜ÙQY‹›Z[YU\HÙ][XYÙUT’SZ[YU\JÛÝ\˜ÙQY‹\šJNÃBˆ™]\›ˆ^\™NÃBˆJK˜Ø]Ú
[˜Ý[ÛŠ\œ›ÜŠHÃBˆÛÛœÛÛK™\œ›ÜŠ•‘QK‘Ó“ØY\ŽˆÛÝ[‰ÝØY^\™H‹ÛÝ\˜ÙUT’JNÃBˆ›ÝÈ\œ›ÜŽÃBˆJNÃBˆ\ËœÛÝ\˜ÙPØXÚVÜÛÝ\˜ÙR[™^HH›ÛZ\ÙNÃBˆ™]\›ˆ›ÛZ\ÙNÃBˆCBˆÊŠƒBˆ
ˆ\Þ[˜Ú›Û›Ý\ÛH\ÜÚYÛœÈH^\™HÈHÚ]™[ˆX]\šX[\˜[Y]\œËƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÓØš™XÝHX]\šX[\˜[\ÃBˆ
ˆ\˜[HÜÝš[™ßHX\˜[YCBˆ
ˆ\˜[HÓØš™XÝHX\YƒBˆ
ˆ\˜[HÜÝš[™ßHØÛÛÜ”ÜXÙWCBˆ
ˆ™]\›ˆÔ›ÛZ\ÙO^\™OŸCBˆ
‹ÃBˆ\ÜÚYÛ•^\™JX]\šX[\˜[\ËX\˜[YKX\Y‹ÛÛÜ”ÜXÙJHÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆ™]\›ˆ\Ë™Ù]\[™[˜ÞJ^\™H‹X\Y‹š[™^
K[Š[˜Ý[ÛŠ^\™JHÃBˆYˆ
]^\™JH™]\›ˆ[ÃBˆYˆ
X\Y‹^ÛÛÜ™OOH›ÚY	‰ˆX\Y‹^ÛÛÜ™ˆ
HÃBˆ^\™HH^\™K˜ÛÛ™J
NÃBˆ^\™K˜Ú[›™[HX\Y‹^ÛÛÜ™ÃBˆCBˆYˆ
\œÙ\‹™^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÕVT‘WÕS”Ñ“Ô“WJHÃBˆÛÛœÝ˜[œÙ›Ü›HHX\Y‹™^[œÚ[ÛœÈOOH›ÚYÈX\Y‹™^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÕVT‘WÕS”Ñ“Ô“WHˆ›ÚYÃBˆYˆ
˜[œÙ›Ü›JHÃBˆÛÛœÝÛ”™Y™\™[˜ÙHH\œÙ\‹˜\ÜÛØÚX][ÛœË™Ù]
^\™JNÃBˆ^\™HH\œÙ\‹™^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÕVT‘WÕS”Ñ“Ô“WK™^[™^\™J^\™K˜[œÙ›Ü›JNÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœËœÙ]
^\™KÛ”™Y™\™[˜ÙJNÃBˆCBˆCBˆYˆ
ÛÛÜ”ÜXÙHOOH›ÚY
HÃBˆ^\™K˜ÛÛÜ”ÜXÙHHÛÛÜ”ÜXÙNÃBˆCBˆX]\šX[\˜[\ÖÛX\˜[YWHH^\™NÃBˆ™]\›ˆ^\™NÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆ\ÜÚYÛœÈš[˜[X]\šX[ÈHY\Ú[™KÜˆÚ[È[œÝ[˜ÙKˆH[œÝ[˜ÙCBˆ
ˆ[™XYH\ÈHX]\šX[
Ù[™\˜]Yœ›ÛHHÛˆX]\šX[Ü[ÛœÈ[Û™JCBˆ
ˆ]™]\ÙHÙˆHØ[YHÛˆX]\šX[X^H™\]Z\™H][\H™YZœÈX]\šX[ÃBˆ
ˆÈXØÛÛ[[Ù]HY™™\™[š[Z]]™H\\ËYš[™\Ë]Ëˆ™]ÈX]\šX[ÈÚ[Bˆ
ˆ™HÜ™X]YYˆ™XÙ\ÜØ\žK[™™]\ÙYœ›ÛHHØXÚKƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÓØš™XÝÑHY\ÚY\Ú[™KÜˆÚ[È[œÝ[˜ÙKƒBˆ
‹ÃBˆ\ÜÚYÛ‘š[˜[X]\šX[
Y\Ú
HÃBˆÛÛœÝÙ[ÛY]žHHY\Ú™Ù[ÛY]žNÃBˆ]X]\šX[HY\Ú›X]\šX[ÃBˆÛÛœÝ\ÙQ\š]˜]]™U[™Ù[ÈHÙ[ÛY]žK˜]šX]\Ë[™Ù[OOH›ÚYÃBˆÛÛœÝ\ÙU™\^ÛÛÜœÈHÙ[ÛY]žK˜]šX]\Ë˜ÛÛÜˆOOH›ÚYÃBˆÛÛœÝ\ÙQ›]ÚY[™ÈHÙ[ÛY]žK˜]šX]\Ë››Ü›X[OOH›ÚYÃBˆYˆ
Y\Úš\ÔÚ[ÊHÃBˆÛÛœÝØXÚRÙ^HH”Ú[ÓX]\šX[ˆˆ
ÈX]\šX[]ZYÃBˆ]Ú[ÓX]\šX[H\Ë˜ØXÚK™Ù]
ØXÚRÙ^JNÃBˆYˆ
\Ú[ÓX]\šX[
HÃBˆÚ[ÓX]\šX[H™]ÈÚ[ÓX]\šX[

NÃBˆX]\šX[œ›ÝÝ\K˜ÛÜK˜Ø[
Ú[ÓX]\šX[X]\šX[
NÃBˆÚ[ÓX]\šX[˜ÛÛÜ‹˜ÛÜJX]\šX[˜ÛÛÜŠNÃBˆÚ[ÓX]\šX[›X\HX]\šX[›X\ÃBˆÚ[ÓX]\šX[œÚ^™P][X][ÛˆH˜[ÙNÃBˆ\Ë˜ØXÚK˜Y
ØXÚRÙ^KÚ[ÓX]\šX[
NÃBˆCBˆX]\šX[HÚ[ÓX]\šX[ÃBˆH[ÙHYˆ
Y\Úš\Ó[™JHÃBˆÛÛœÝØXÚRÙ^HH“[™P˜\ÚXÓX]\šX[ˆˆ
ÈX]\šX[]ZYÃBˆ][™SX]\šX[H\Ë˜ØXÚK™Ù]
ØXÚRÙ^JNÃBˆYˆ
[[™SX]\šX[
HÃBˆ[™SX]\šX[H™]È[™P˜\ÚXÓX]\šX[

NÃBˆX]\šX[œ›ÝÝ\K˜ÛÜK˜Ø[
[™SX]\šX[X]\šX[
NÃBˆ[™SX]\šX[˜ÛÛÜ‹˜ÛÜJX]\šX[˜ÛÛÜŠNÃBˆ[™SX]\šX[›X\HX]\šX[›X\ÃBˆ\Ë˜ØXÚK˜Y
ØXÚRÙ^K[™SX]\šX[
NÃBˆCBˆX]\šX[H[™SX]\šX[ÃBˆCBˆYˆ
\ÙQ\š]˜]]™U[™Ù[È\ÙU™\^ÛÛÜœÈ\ÙQ›]ÚY[™ÊHÃBˆ]ØXÚRÙ^HHÛÛ™YX]\šX[ˆˆ
ÈX]\šX[]ZY
ÈŽˆŽÃBˆYˆ
\ÙQ\š]˜]]™U[™Ù[ÊHØXÚRÙ^H
ÏH™\š]˜]]™K][™Ù[ÎˆŽÃBˆYˆ
\ÙU™\^ÛÛÜœÊHØXÚRÙ^H
ÏH™\^XÛÛÜœÎˆŽÃBˆYˆ
\ÙQ›]ÚY[™ÊHØXÚRÙ^H
ÏH™›]\ÚY[™ÎˆŽÃBˆ]ØXÚYX]\šX[H\Ë˜ØXÚK™Ù]
ØXÚRÙ^JNÃBˆYˆ
XØXÚYX]\šX[
HÃBˆØXÚYX]\šX[HX]\šX[˜ÛÛ™J
NÃBˆYˆ
\ÙU™\^ÛÛÜœÊHØXÚYX]\šX[™\^ÛÛÜœÈHYNÃBˆYˆ
\ÙQ›]ÚY[™ÊHØXÚYX]\šX[™›]ÚY[™ÈHYNÃBˆYˆ
\ÙQ\š]˜]]™U[™Ù[ÊHÃBˆYˆ
ØXÚYX]\šX[››Ü›X[ØØ[JHØXÚYX]\šX[››Ü›X[ØØ[KžH
HLNÃBˆYˆ
ØXÚYX]\šX[˜ÛX\˜ÛØ]›Ü›X[ØØ[JHØXÚYX]\šX[˜ÛX\˜ÛØ]›Ü›X[ØØ[KžH
HLNÃBˆCBˆ\Ë˜ØXÚK˜Y
ØXÚRÙ^KØXÚYX]\šX[
NÃBˆ\Ë˜\ÜÛØÚX][ÛœËœÙ]
ØXÚYX]\šX[\Ë˜\ÜÛØÚX][ÛœË™Ù]
X]\šX[
JNÃBˆCBˆX]\šX[HØXÚYX]\šX[ÃBˆCBˆY\Ú›X]\šX[HX]\šX[ÃBˆCBˆÙ]X]\šX[\J
HÃBˆ™]\›ˆY\ÚÝ[™\™X]\šX[ÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ø›Ø‹ÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÔ‘PQQK›YÛX]\šX[ÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHX]\šX[[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOX]\šX[ŸCBˆ
‹ÃBˆØYX]\šX[
X]\šX[[™^
HÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ^[œÚ[ÛœÈH\Ë™^[œÚ[ÛœÎÃBˆÛÛœÝX]\šX[YˆHœÛÛ‹›X]\šX[ÖÛX]\šX[[™^NÃBˆ]X]\šX[\NÃBˆÛÛœÝX]\šX[\˜[\ÈHßNÃBˆÛÛœÝX]\šX[^[œÚ[ÛœÈHX]\šX[Y‹™^[œÚ[ÛœÈßNÃBˆÛÛœÝ[™[™ÈH×NÃBˆYˆ
X]\šX[^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÕS“UJHÃBˆÛÛœÝÛ]Q^[œÚ[ÛˆH^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÓPUT’PS×ÕS“UNÃBˆX]\šX[\HHÛ]Q^[œÚ[Û‹™Ù]X]\šX[\J
NÃBˆ[™[™Ëœ\Ú
Û]Q^[œÚ[Û‹™^[™\˜[\ÊX]\šX[\˜[\ËX]\šX[Y‹\œÙ\ŠJNÃBˆH[ÙHÃBˆÛÛœÝY][XÔ›ÝYÚ™\ÜÈHX]\šX[Y‹œœ“Y][XÔ›ÝYÚ™\ÜÈßNÃBˆX]\šX[\˜[\Ë˜ÛÛÜˆH™]ÈÛÛÜŠKKJNÃBˆX]\šX[\˜[\Ë›ÜXÚ]HHNÃBˆYˆ
\œ˜^Kš\Ð\œ˜^JY][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ‘˜XÝÜŠJHÃBˆÛÛœÝ\œ˜^HHY][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ‘˜XÝÜŽÃBˆX]\šX[\˜[\Ë˜ÛÛÜ‹œÙ]‘ÐŠ\œ˜^VÌK\œ˜^VÌWK\œ˜^VÌ—K[™X\”Ô‘ÐÛÛÜ”ÜXÙJNÃBˆX]\šX[\˜[\Ë›ÜXÚ]HH\œ˜^VÌ×NÃBˆCBˆYˆ
Y][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ•^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë›X\‹Y][XÔ›ÝYÚ™\ÜË˜˜\ÙPÛÛÜ•^\™KÔ‘ÐÛÛÜ”ÜXÙJJNÃBˆCBˆX]\šX[\˜[\Ë›Y][™\ÜÈHY][XÔ›ÝYÚ™\ÜË›Y][XÑ˜XÝÜˆOOH›ÚYÈY][XÔ›ÝYÚ™\ÜË›Y][XÑ˜XÝÜˆˆNÃBˆX]\šX[\˜[\Ëœ›ÝYÚ™\ÜÈHY][XÔ›ÝYÚ™\ÜËœ›ÝYÚ™\ÜÑ˜XÝÜˆOOH›ÚYÈY][XÔ›ÝYÚ™\ÜËœ›ÝYÚ™\ÜÑ˜XÝÜˆˆNÃBˆYˆ
Y][XÔ›ÝYÚ™\ÜË›Y][XÔ›ÝYÚ™\ÜÕ^\™HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë›Y][™\ÜÓX\‹Y][XÔ›ÝYÚ™\ÜË›Y][XÔ›ÝYÚ™\ÜÕ^\™JJNÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ëœ›ÝYÚ™\ÜÓX\‹Y][XÔ›ÝYÚ™\ÜË›Y][XÔ›ÝYÚ™\ÜÕ^\™JJNÃBˆCBˆX]\šX[\HH\Ë—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^™Ù]X]\šX[\H	‰ˆ^™Ù]X]\šX[\JX]\šX[[™^
NÃBˆJNÃBˆ[™[™Ëœ\Ú
›ÛZ\ÙK˜[
\Ë—Ú[›ÚÙP[
[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^™^[™X]\šX[\˜[\È	‰ˆ^™^[™X]\šX[\˜[\ÊX]\šX[[™^X]\šX[\˜[\ÊNÃBˆJJJNÃBˆCBˆYˆ
X]\šX[Y‹™ÝX›TÚYYOOHYJHÃBˆX]\šX[\˜[\ËœÚYHHÝX›TÚYNÃBˆCBˆÛÛœÝ[S[ÙHHX]\šX[Y‹˜[S[ÙHSWÓSÑTË“ÔTUQNÃBˆYˆ
[S[ÙHOOHSWÓSÑTË“S‘
HÃBˆX]\šX[\˜[\Ë˜[œÜ\™[HYNÃBˆX]\šX[\˜[\Ë™\Üš]HH˜[ÙNÃBˆH[ÙHÃBˆX]\šX[\˜[\Ë˜[œÜ\™[H˜[ÙNÃBˆYˆ
[S[ÙHOOHSWÓSÑTË“PTÒÊHÃBˆX]\šX[\˜[\Ë˜[U\ÝHX]\šX[Y‹˜[PÝ]Ù™ˆOOH›ÚYÈX]\šX[Y‹˜[PÝ]Ù™ˆˆNÃBˆCBˆCBˆYˆ
X]\šX[Y‹››Ü›X[^\™HOOH›ÚY	‰ˆX]\šX[\HOOHY\Ú˜\ÚXÓX]\šX[
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë››Ü›X[X\‹X]\šX[Y‹››Ü›X[^\™JJNÃBˆX]\šX[\˜[\Ë››Ü›X[ØØ[HH™]È™XÝÜŒŠKJNÃBˆYˆ
X]\šX[Y‹››Ü›X[^\™KœØØ[HOOH›ÚY
HÃBˆÛÛœÝØØ[HHX]\šX[Y‹››Ü›X[^\™KœØØ[NÃBˆX]\šX[\˜[\Ë››Ü›X[ØØ[KœÙ]
ØØ[KØØ[JNÃBˆCBˆCBˆYˆ
X]\šX[Y‹›ØØÛ\Ú[Û•^\™HOOH›ÚY	‰ˆX]\šX[\HOOHY\Ú˜\ÚXÓX]\šX[
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë˜[ÓX\‹X]\šX[Y‹›ØØÛ\Ú[Û•^\™JJNÃBˆYˆ
X]\šX[Y‹›ØØÛ\Ú[Û•^\™KœÝ™[™ÝOOH›ÚY
HÃBˆX]\šX[\˜[\Ë˜[ÓX\[[œÚ]HHX]\šX[Y‹›ØØÛ\Ú[Û•^\™KœÝ™[™ÝÃBˆCBˆCBˆYˆ
X]\šX[Y‹™[Z\ÜÚ]™Q˜XÝÜˆOOH›ÚY	‰ˆX]\šX[\HOOHY\Ú˜\ÚXÓX]\šX[
HÃBˆÛÛœÝ[Z\ÜÚ]™Q˜XÝÜˆHX]\šX[Y‹™[Z\ÜÚ]™Q˜XÝÜŽÃBˆX]\šX[\˜[\Ë™[Z\ÜÚ]™HH™]ÈÛÛÜŠ
KœÙ]‘ÐŠ[Z\ÜÚ]™Q˜XÝÜ–ÌK[Z\ÜÚ]™Q˜XÝÜ–ÌWK[Z\ÜÚ]™Q˜XÝÜ–Ì—K[™X\”Ô‘ÐÛÛÜ”ÜXÙJNÃBˆCBˆYˆ
X]\šX[Y‹™[Z\ÜÚ]™U^\™HOOH›ÚY	‰ˆX]\šX[\HOOHY\Ú˜\ÚXÓX]\šX[
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹˜\ÜÚYÛ•^\™JX]\šX[\˜[\Ë™[Z\ÜÚ]™SX\‹X]\šX[Y‹™[Z\ÜÚ]™U^\™KÔ‘ÐÛÛÜ”ÜXÙJJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊK[Š[˜Ý[ÛŠ
HÃBˆÛÛœÝX]\šX[H™]ÈX]\šX[\JX]\šX[\˜[\ÊNÃBˆYˆ
X]\šX[Y‹›˜[YJHX]\šX[›˜[YHHX]\šX[Y‹›˜[YNÃBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]JX]\šX[X]\šX[YŠNÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœËœÙ]
X]\šX[ÈX]\šX[ÎˆX]\šX[[™^JNÃBˆYˆ
X]\šX[Y‹™^[œÚ[ÛœÊHY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]J^[œÚ[ÛœËX]\šX[X]\šX[YŠNÃBˆ™]\›ˆX]\šX[ÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÚ[ˆØš™XÝÑ[œÝ[˜Ù\È\™H\™Ù]YžH[š[X][Û‹^H™YY[š\]YH˜[Y\ËƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÜÝš[™ßHÜšYÚ[˜[˜[YCBˆ
ˆ™]\›ˆÜÝš[™ßCBˆ
‹ÃBˆÜ™X]U[š\]YS˜[YJÜšYÚ[˜[˜[YJHÃBˆÛÛœÝØ[š]^™Y˜[YHH›Ü\Pš[™[™ËœØ[š]^™S›ÙS˜[YJÜšYÚ[˜[˜[YHˆŠNÃBˆYˆ
Ø[š]^™Y˜[YH[ˆ\Ë››ÙS˜[Y\Õ\ÙY
HÃBˆ™]\›ˆØ[š]^™Y˜[YH
È—Èˆ
È
ÊÝ\Ë››ÙS˜[Y\Õ\ÙYÜØ[š]^™Y˜[YWNÃBˆH[ÙHÃBˆ\Ë››ÙS˜[Y\Õ\ÙYÜØ[š]^™Y˜[YWHHÃBˆ™]\›ˆØ[š]^™Y˜[YNÃBˆCBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ø›Ø‹ÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÔ‘PQQK›YÙÙ[ÛY]žCBˆ
ƒBˆ
ˆÜ™X]\ÈY™™\‘Ù[ÛY]šY\Èœ›ÛHš[Z]]™\ËƒBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÐ\œ˜^OÓ‹”š[Z]]™OŸHš[Z]]™\ÃBˆ
ˆ™]\›ˆÔ›ÛZ\ÙO\œ˜^OY™™\‘Ù[ÛY]žOŸCBˆ
‹ÃBˆØYÙ[ÛY]šY\Êš[Z]]™\ÊHÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝ^[œÚ[ÛœÈH\Ë™^[œÚ[ÛœÎÃBˆÛÛœÝØXÚHH\Ëœš[Z]]™PØXÚNÃBˆ[˜Ý[ÛˆÜ™X]Q˜XÛÔš[Z]]™Jš[Z]]™JHÃBˆ™]\›ˆ^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÑPÓ×ÓQTÒÐÓÓT‘TÔÒSÓ—K™XÛÙTš[Z]]™Jš[Z]]™K\œÙ\ŠK[Š[˜Ý[ÛŠÙ[ÛY]žJHÃBˆ™]\›ˆYš[Z]]™P]šX]\ÊÙ[ÛY]žKš[Z]]™K\œÙ\ŠNÃBˆJNÃBˆCBˆÛÛœÝ[™[™ÈH×NÃBˆ›Üˆ
]HH[Hš[Z]]™\Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝš[Z]]™HHš[Z]]™\ÖÚWNÃBˆÛÛœÝØXÚRÙ^HHÜ™X]Tš[Z]]™RÙ^Jš[Z]]™JNÃBˆÛÛœÝØXÚYHØXÚVØØXÚRÙ^WNÃBˆYˆ
ØXÚY
HÃBˆ[™[™Ëœ\Ú
ØXÚYœ›ÛZ\ÙJNÃBˆH[ÙHÃBˆ]Ù[ÛY]žT›ÛZ\ÙNÃBˆYˆ
š[Z]]™K™^[œÚ[ÛœÈ	‰ˆš[Z]]™K™^[œÚ[ÛœÖÑVS”ÒSÓ”Ë’Ò—ÑPÓ×ÓQTÒÐÓÓT‘TÔÒSÓ—JHÃBˆÙ[ÛY]žT›ÛZ\ÙHHÜ™X]Q˜XÛÔš[Z]]™Jš[Z]]™JNÃBˆH[ÙHÃBˆÙ[ÛY]žT›ÛZ\ÙHHYš[Z]]™P]šX]\Ê™]ÈY™™\‘Ù[ÛY]žJ
Kš[Z]]™K\œÙ\ŠNÃBˆCBˆØXÚVØØXÚRÙ^WHHÈš[Z]]™K›ÛZ\ÙNˆÙ[ÛY]žT›ÛZ\ÙHNÃBˆ[™[™Ëœ\Ú
Ù[ÛY]žT›ÛZ\ÙJNÃBˆCBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ø›Ø‹ÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÔ‘PQQK›YÛY\Ú\ÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHY\Ú[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOÜ›Ý\Y\ÚÚÚ[›™YY\Ú[™_Ú[ÏŸCBˆ
‹ÃBˆØYY\Ú
Y\Ú[™^
HÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ^[œÚ[ÛœÈH\Ë™^[œÚ[ÛœÎÃBˆÛÛœÝY\ÚYˆHœÛÛ‹›Y\Ú\ÖÛY\Ú[™^NÃBˆÛÛœÝš[Z]]™\ÈHY\ÚY‹œš[Z]]™\ÎÃBˆÛÛœÝ[™[™ÈH×NÃBˆ›Üˆ
]HH[Hš[Z]]™\Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝX]\šX[Hš[Z]]™\ÖÚWK›X]\šX[OOH›ÚYÈÜ™X]QY˜][X]\šX[
\Ë˜ØXÚJHˆ\Ë™Ù]\[™[˜ÞJ›X]\šX[‹š[Z]]™\ÖÚWK›X]\šX[
NÃBˆ[™[™Ëœ\Ú
X]\šX[
NÃBˆCBˆ[™[™Ëœ\Ú
\œÙ\‹›ØYÙ[ÛY]šY\Êš[Z]]™\ÊJNÃBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊK[Š[˜Ý[ÛŠ™\Ý[ÊHÃBˆÛÛœÝX]\šX[ÈH™\Ý[ËœÛXÙJ™\Ý[Ë›[™ÝHJNÃBˆÛÛœÝÙ[ÛY]šY\ÈH™\Ý[ÖÜ™\Ý[Ë›[™ÝHWNÃBˆÛÛœÝY\Ú\ÈH×NÃBˆ›Üˆ
]HH[HÙ[ÛY]šY\Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝÙ[ÛY]žHHÙ[ÛY]šY\ÖÚWNÃBˆÛÛœÝš[Z]]™HHš[Z]]™\ÖÚWNÃBˆ]Y\ÚÃBˆÛÛœÝX]\šX[HX]\šX[ÖÚWNÃBˆYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓTÈš[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓWÔÕ’Tš[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓWÑSˆš[Z]]™K›[ÙHOOH›ÚY
HÃBˆY\ÚHY\ÚY‹š\ÔÚÚ[›™YY\ÚOOHYHÈ™]ÈÚÚ[›™YY\Ú
Ù[ÛY]žKX]\šX[
Hˆ™]ÈY\Ú
Ù[ÛY]žKX]\šX[
NÃBˆYˆ
Y\Úš\ÔÚÚ[›™YY\ÚOOHYJHÃBˆY\Ú››Ü›X[^™TÚÚ[•ÙZYÚÊ
NÃBˆCBˆYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓWÔÕ’T
HÃBˆY\Ú™Ù[ÛY]žHHÕšX[™Û\Ñ˜]Ó[ÙJY\Ú™Ù[ÛY]žKšX[™ÛTÝš\˜]Ó[ÙJNÃBˆH[ÙHYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë•’PS‘ÓWÑSŠHÃBˆY\Ú™Ù[ÛY]žHHÕšX[™Û\Ñ˜]Ó[ÙJY\Ú™Ù[ÛY]žKšX[™ÛQ˜[‘˜]Ó[ÙJNÃBˆCBˆH[ÙHYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë“S‘TÊHÃBˆY\ÚH™]È[™TÙYÛY[ÊÙ[ÛY]žKX]\šX[
NÃBˆH[ÙHYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë“S‘WÔÕ’T
HÃBˆY\ÚH™]È[™JÙ[ÛY]žKX]\šX[
NÃBˆH[ÙHYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë“S‘WÓÓÔ
HÃBˆY\ÚH™]È[™SÛÜ
Ù[ÛY]žKX]\šX[
NÃBˆH[ÙHYˆ
š[Z]]™K›[ÙHOOHÑP‘ÓÐÓÓ”ÕS•Ë”ÒS•ÊHÃBˆY\ÚH™]ÈÚ[ÊÙ[ÛY]žKX]\šX[
NÃBˆH[ÙHÃBˆ›ÝÈ™]È\œ›ÜŠ•‘QK‘Ó“ØY\Žˆš[Z]]™H[ÙH[œÝ\ÜYˆˆ
Èš[Z]]™K›[ÙJNÃBˆCBˆYˆ
Øš™XÝšÙ^\ÊY\Ú™Ù[ÛY]žK›[Üœ]šX]\ÊK›[™Ýˆ
HÃBˆ\]S[Üœ\™Ù]ÊY\ÚY\ÚYŠNÃBˆCBˆY\Ú›˜[YHH\œÙ\‹˜Ü™X]U[š\]YS˜[YJY\ÚY‹›˜[YH›Y\ÚÈˆ
ÈY\Ú[™^
NÃBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]JY\ÚY\ÚYŠNÃBˆYˆ
š[Z]]™K™^[œÚ[ÛœÊHY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]J^[œÚ[ÛœËY\Úš[Z]]™JNÃBˆ\œÙ\‹˜\ÜÚYÛ‘š[˜[X]\šX[
Y\Ú
NÃBˆY\Ú\Ëœ\Ú
Y\Ú
NÃBˆCBˆ›Üˆ
]HH[HY\Ú\Ë›[™ÝÈH[ÈJÊÊHÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœËœÙ]
Y\Ú\ÖÚWKÃBˆY\Ú\ÎˆY\Ú[™^Bˆš[Z]]™\ÎˆCBˆJNÃBˆCBˆYˆ
Y\Ú\Ë›[™ÝOOHJHÃBˆYˆ
Y\ÚY‹™^[œÚ[ÛœÊHY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]J^[œÚ[ÛœËY\Ú\ÖÌKY\ÚYŠNÃBˆ™]\›ˆY\Ú\ÖÌNÃBˆCBˆÛÛœÝÜ›Ý\H™]ÈÜ›Ý\

NÃBˆYˆ
Y\ÚY‹™^[œÚ[ÛœÊHY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]J^[œÚ[ÛœËÜ›Ý\Y\ÚYŠNÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœËœÙ]
Ü›Ý\ÈY\Ú\ÎˆY\Ú[™^JNÃBˆ›Üˆ
]HH[HY\Ú\Ë›[™ÝÈH[ÈJÊÊHÃBˆÜ›Ý\˜Y
Y\Ú\ÖÚWJNÃBˆCBˆ™]\›ˆÜ›Ý\ÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ý™YKÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒØØ[Y\˜\ÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHØ[Y\˜R[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOØ[Y\˜OŸ[™Yš[™YCBˆ
‹ÃBˆØYØ[Y\˜JØ[Y\˜R[™^
HÃBˆ]Ø[Y\˜LŽÃBˆÛÛœÝØ[Y\˜QYˆH\ËšœÛÛ‹˜Ø[Y\˜\ÖØØ[Y\˜R[™^NÃBˆÛÛœÝ\˜[\ÈHØ[Y\˜QY–ØØ[Y\˜QY‹\WNÃBˆYˆ
\\˜[\ÊHÃBˆÛÛœÛÛKØ\›Š•‘QK‘Ó“ØY\ŽˆZ\ÜÚ[™ÈØ[Y\˜H\˜[Y]\œËˆŠNÃBˆ™]\›ŽÃBˆCBˆYˆ
Ø[Y\˜QY‹\HOOHœ\œÜXÝ]™HŠHÃBˆØ[Y\˜LˆH™]È\œÜXÝ]™PØ[Y\˜JX]][Ëœ˜YÑYÊ\˜[\ËžY›ÝŠK\˜[\Ë˜\ÜXÝ˜][ÈK\˜[\Ëž›™X\ˆK\˜[\Ëž™˜\ˆ™MŠNÃBˆH[ÙHYˆ
Ø[Y\˜QY‹\HOOH›ÜÙÜ˜\XÈŠHÃBˆØ[Y\˜LˆH™]ÈÜÙÜ˜\XÐØ[Y\˜J\\˜[\ËžXYË\˜[\ËžXYË\˜[\Ëž[XYË\\˜[\Ëž[XYË\˜[\Ëž›™X\‹\˜[\Ëž™˜\ŠNÃBˆCBˆYˆ
Ø[Y\˜QY‹›˜[YJHØ[Y\˜L‹›˜[YHH\Ë˜Ü™X]U[š\]YS˜[YJØ[Y\˜QY‹›˜[YJNÃBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]JØ[Y\˜L‹Ø[Y\˜QYŠNÃBˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JØ[Y\˜LŠNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ý™YKÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÜÚÚ[œÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHÚÚ[’[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOÚÙ[]ÛŸCBˆ
‹ÃBˆØYÚÚ[ŠÚÚ[’[™^
HÃBˆÛÛœÝÚÚ[‘YˆH\ËšœÛÛ‹œÚÚ[œÖÜÚÚ[’[™^NÃBˆÛÛœÝ[™[™ÈH×NÃBˆ›Üˆ
]HH[HÚÚ[‘Y‹š›Ú[Ë›[™ÝÈH[ÈJÊÊHÃBˆ[™[™Ëœ\Ú
\Ë—ÛØY›ÙTÚ[ÝÊÚÚ[‘Y‹š›Ú[ÖÚWJJNÃBˆCBˆYˆ
ÚÚ[‘Y‹š[™\œÙPš[™X]šXÙ\ÈOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\Ë™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹ÚÚ[‘Y‹š[™\œÙPš[™X]šXÙ\ÊJNÃBˆH[ÙHÃBˆ[™[™Ëœ\Ú
[
NÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊK[Š[˜Ý[ÛŠ™\Ý[ÊHÃBˆÛÛœÝ[™\œÙPš[™X]šXÙ\ÈH™\Ý[ËœÜ

NÃBˆÛÛœÝ›Ú[›Ù\ÈH™\Ý[ÎÃBˆÛÛœÝ›Û™\ÈH×NÃBˆÛÛœÝ›Û™R[™\œÙ\ÈH×NÃBˆ›Üˆ
]HH[H›Ú[›Ù\Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝ›Ú[›ÙHH›Ú[›Ù\ÖÚWNÃBˆYˆ
›Ú[›ÙJHÃBˆ›Û™\Ëœ\Ú
›Ú[›ÙJNÃBˆÛÛœÝX]H™]ÈX]š^

NÃBˆYˆ
[™\œÙPš[™X]šXÙ\ÈOOH[
HÃBˆX]™œ›ÛP\œ˜^J[™\œÙPš[™X]šXÙ\Ë˜\œ˜^KH
ˆMŠNÃBˆCBˆ›Û™R[™\œÙ\Ëœ\Ú
X]
NÃBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š	Õ‘QK‘Ó“ØY\Žˆ›Ú[‰\ÈˆÛÝ[›Ý™H›Ý[™‰ËÚÚ[‘Y‹š›Ú[ÖÚWJNÃBˆCBˆCBˆ™]\›ˆ™]ÈÚÙ[]ÛŠ›Û™\Ë›Û™R[™\œÙ\ÊNÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ý™YKÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒØ[š[X][ÛœÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸH[š[X][Û’[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙO[š[X][ÛÛ\ŸCBˆ
‹ÃBˆØY[š[X][ÛŠ[š[X][Û’[™^
HÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝ[š[X][Û‘YˆHœÛÛ‹˜[š[X][ÛœÖØ[š[X][Û’[™^NÃBˆÛÛœÝ[š[X][Û“˜[YHH[š[X][Û‘Y‹›˜[YHÈ[š[X][Û‘Y‹›˜[YHˆ˜[š[X][Û—Èˆ
È[š[X][Û’[™^ÃBˆÛÛœÝ[™[™Ó›Ù\ÈH×NÃBˆÛÛœÝ[™[™Ò[œ]XØÙ\ÜÛÜœÈH×NÃBˆÛÛœÝ[™[™ÓÝ]]XØÙ\ÜÛÜœÈH×NÃBˆÛÛœÝ[™[™ÔØ[\\œÈH×NÃBˆÛÛœÝ[™[™Õ\™Ù]ÈH×NÃBˆ›Üˆ
]HH[H[š[X][Û‘Y‹˜Ú[›™[Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝÚ[›™[H[š[X][Û‘Y‹˜Ú[›™[ÖÚWNÃBˆÛÛœÝØ[\\ˆH[š[X][Û‘Y‹œØ[\\œÖØÚ[›™[œØ[\\—NÃBˆÛÛœÝ\™Ù]HÚ[›™[\™Ù]ÃBˆÛÛœÝ˜[YHH\™Ù]››ÙNÃBˆÛÛœÝ[œ]H[š[X][Û‘Y‹œ\˜[Y]\œÈOOH›ÚYÈ[š[X][Û‘Y‹œ\˜[Y]\œÖÜØ[\\‹š[œ]HˆØ[\\‹š[œ]ÃBˆÛÛœÝÝ]]H[š[X][Û‘Y‹œ\˜[Y]\œÈOOH›ÚYÈ[š[X][Û‘Y‹œ\˜[Y]\œÖÜØ[\\‹›Ý]]HˆØ[\\‹›Ý]]ÃBˆYˆ
\™Ù]››ÙHOOH›ÚY
HÛÛ[YNÃBˆ[™[™Ó›Ù\Ëœ\Ú
\Ë™Ù]\[™[˜ÞJ››ÙH‹˜[YJJNÃBˆ[™[™Ò[œ]XØÙ\ÜÛÜœËœ\Ú
\Ë™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹[œ]
JNÃBˆ[™[™ÓÝ]]XØÙ\ÜÛÜœËœ\Ú
\Ë™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹Ý]]
JNÃBˆ[™[™ÔØ[\\œËœ\Ú
Ø[\\ŠNÃBˆ[™[™Õ\™Ù]Ëœ\Ú
\™Ù]
NÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
ÃBˆ›ÛZ\ÙK˜[
[™[™Ó›Ù\ÊKBˆ›ÛZ\ÙK˜[
[™[™Ò[œ]XØÙ\ÜÛÜœÊKBˆ›ÛZ\ÙK˜[
[™[™ÓÝ]]XØÙ\ÜÛÜœÊKBˆ›ÛZ\ÙK˜[
[™[™ÔØ[\\œÊKBˆ›ÛZ\ÙK˜[
[™[™Õ\™Ù]ÊCBˆJK[Š[˜Ý[ÛŠ\[™[˜ÚY\ÊHÃBˆÛÛœÝ›Ù\ÈH\[™[˜ÚY\ÖÌNÃBˆÛÛœÝ[œ]XØÙ\ÜÛÜœÈH\[™[˜ÚY\ÖÌWNÃBˆÛÛœÝÝ]]XØÙ\ÜÛÜœÈH\[™[˜ÚY\ÖÌ—NÃBˆÛÛœÝØ[\\œÈH\[™[˜ÚY\ÖÌ×NÃBˆÛÛœÝ\™Ù]ÈH\[™[˜ÚY\ÖÍNÃBˆÛÛœÝ˜XÚÜÈH×NÃBˆ›Üˆ
]HH[H›Ù\Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝ›ÙHH›Ù\ÖÚWNÃBˆÛÛœÝ[œ]XØÙ\ÜÛÜˆH[œ]XØÙ\ÜÛÜœÖÚWNÃBˆÛÛœÝÝ]]XØÙ\ÜÛÜˆHÝ]]XØÙ\ÜÛÜœÖÚWNÃBˆÛÛœÝØ[\\ˆHØ[\\œÖÚWNÃBˆÛÛœÝ\™Ù]H\™Ù]ÖÚWNÃBˆYˆ
›ÙHOOH›ÚY
HÛÛ[YNÃBˆYˆ
›ÙK\]SX]š^
HÃBˆ›ÙK\]SX]š^

NÃBˆCBˆÛÛœÝÜ™X]Y˜XÚÜÈH\œÙ\‹—ØÜ™X]P[š[X][Û•˜XÚÜÊ›ÙK[œ]XØÙ\ÜÛÜ‹Ý]]XØÙ\ÜÛÜ‹Ø[\\‹\™Ù]
NÃBˆYˆ
Ü™X]Y˜XÚÜÊHÃBˆ›Üˆ
]ÈHÈÈÜ™X]Y˜XÚÜË›[™ÝÈÊÊÊHÃBˆ˜XÚÜËœ\Ú
Ü™X]Y˜XÚÜÖÚ×JNÃBˆCBˆCBˆCBˆÛÛœÝ[š[X][ÛˆH™]È[š[X][ÛÛ\
[š[X][Û“˜[YK›ÚY˜XÚÜÊNÃBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]J[š[X][Û‹[š[X][Û‘YŠNÃBˆ™]\›ˆ[š[X][ÛŽÃBˆJNÃBˆCBˆÜ™X]S›ÙSY\Ú
›ÙR[™^
HÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝ›ÙQYˆHœÛÛ‹››Ù\ÖÛ›ÙR[™^NÃBˆYˆ
›ÙQY‹›Y\ÚOOH›ÚY
H™]\›ˆ[ÃBˆ™]\›ˆ\œÙ\‹™Ù]\[™[˜ÞJ›Y\Ú‹›ÙQY‹›Y\Ú
K[Š[˜Ý[ÛŠY\Ú
HÃBˆÛÛœÝ›ÙHH\œÙ\‹—ÙÙ]›ÙT™YŠ\œÙ\‹›Y\ÚØXÚK›ÙQY‹›Y\ÚY\Ú
NÃBˆYˆ
›ÙQY‹ÙZYÚÈOOH›ÚY
HÃBˆ›ÙK˜]™\œÙJ[˜Ý[ÛŠÊHÃBˆYˆ
[Ëš\ÓY\Ú
H™]\›ŽÃBˆ›Üˆ
]HH[H›ÙQY‹ÙZYÚË›[™ÝÈH[ÈJÊÊHÃBˆË›[Üœ\™Ù][™›Y[˜Ù\ÖÚWHH›ÙQY‹ÙZYÚÖÚWNÃBˆCBˆJNÃBˆCBˆ™]\›ˆ›ÙNÃBˆJNÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ý™YKÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÛ›Ù\ËX[™ZY\˜\˜ÚCBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸH›ÙR[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOØš™XÝÑŸCBˆ
‹ÃBˆØY›ÙJ›ÙR[™^
HÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝ›ÙQYˆHœÛÛ‹››Ù\ÖÛ›ÙR[™^NÃBˆÛÛœÝ›ÙT[™[™ÈH\œÙ\‹—ÛØY›ÙTÚ[ÝÊ›ÙR[™^
NÃBˆÛÛœÝÚ[[™[™ÈH×NÃBˆÛÛœÝÚ[™[‘YˆH›ÙQY‹˜Ú[™[ˆ×NÃBˆ›Üˆ
]HH[HÚ[™[‘Y‹›[™ÝÈH[ÈJÊÊHÃBˆÚ[[™[™Ëœ\Ú
\œÙ\‹™Ù]\[™[˜ÞJ››ÙH‹Ú[™[‘Y–ÚWJJNÃBˆCBˆÛÛœÝÚÙ[]Û”[™[™ÈH›ÙQY‹œÚÚ[ˆOOH›ÚYÈ›ÛZ\ÙKœ™\ÛÛ™J[
Hˆ\œÙ\‹™Ù]\[™[˜ÞJœÚÚ[ˆ‹›ÙQY‹œÚÚ[ŠNÃBˆ™]\›ˆ›ÛZ\ÙK˜[
ÃBˆ›ÙT[™[™ËBˆ›ÛZ\ÙK˜[
Ú[[™[™ÊKBˆÚÙ[]Û”[™[™ÃBˆJK[Š[˜Ý[ÛŠ™\Ý[ÊHÃBˆÛÛœÝ›ÙHH™\Ý[ÖÌNÃBˆÛÛœÝÚ[™[ˆH™\Ý[ÖÌWNÃBˆÛÛœÝÚÙ[]ÛˆH™\Ý[ÖÌ—NÃBˆYˆ
ÚÙ[]ÛˆOOH[
HÃBˆ›ÙK˜]™\œÙJ[˜Ý[ÛŠY\Ú
HÃBˆYˆ
[Y\Úš\ÔÚÚ[›™YY\Ú
H™]\›ŽÃBˆY\Ú˜š[™
ÚÙ[]Û‹ÚY[]SX]š^ŠNÃBˆJNÃBˆCBˆ›Üˆ
]HH[HÚ[™[‹›[™ÝÈH[ÈJÊÊHÃBˆ›ÙK˜Y
Ú[™[–ÚWJNÃBˆCBˆ™]\›ˆ›ÙNÃBˆJNÃBˆCBˆËÈ—ÛØY›ÙTÚ[ÝÊ
H\œÙ\ÈHÚ[™ÛH›ÙKƒBˆËÈÚÚ[ˆ[™Ú[›Ù\È\™HÜ™X]Y[™YY[ˆ›ØY›ÙJ
H
›È	×ÉÈ™Yš^
KƒBˆÛØY›ÙTÚ[ÝÊ›ÙR[™^
HÃBˆÛÛœÝœÛÛˆH\ËšœÛÛŽÃBˆÛÛœÝ^[œÚ[ÛœÈH\Ë™^[œÚ[ÛœÎÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆYˆ
\Ë››ÙPØXÚVÛ›ÙR[™^HOOH›ÚY
HÃBˆ™]\›ˆ\Ë››ÙPØXÚVÛ›ÙR[™^NÃBˆCBˆÛÛœÝ›ÙQYˆHœÛÛ‹››Ù\ÖÛ›ÙR[™^NÃBˆÛÛœÝ›ÙS˜[YHH›ÙQY‹›˜[YHÈ\œÙ\‹˜Ü™X]U[š\]YS˜[YJ›ÙQY‹›˜[YJHˆˆŽÃBˆÛÛœÝ[™[™ÈH×NÃBˆÛÛœÝY\Ú›ÛZ\ÙHH\œÙ\‹—Ú[›ÚÙSÛ™J[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^˜Ü™X]S›ÙSY\Ú	‰ˆ^˜Ü™X]S›ÙSY\Ú
›ÙR[™^
NÃBˆJNÃBˆYˆ
Y\Ú›ÛZ\ÙJHÃBˆ[™[™Ëœ\Ú
Y\Ú›ÛZ\ÙJNÃBˆCBˆYˆ
›ÙQY‹˜Ø[Y\˜HOOH›ÚY
HÃBˆ[™[™Ëœ\Ú
\œÙ\‹™Ù]\[™[˜ÞJ˜Ø[Y\˜H‹›ÙQY‹˜Ø[Y\˜JK[Š[˜Ý[ÛŠØ[Y\˜LŠHÃBˆ™]\›ˆ\œÙ\‹—ÙÙ]›ÙT™YŠ\œÙ\‹˜Ø[Y\˜PØXÚK›ÙQY‹˜Ø[Y\˜KØ[Y\˜LŠNÃBˆJJNÃBˆCBˆ\œÙ\‹—Ú[›ÚÙP[
[˜Ý[ÛŠ^
HÃBˆ™]\›ˆ^˜Ü™X]S›ÙP]XÚY[	‰ˆ^˜Ü™X]S›ÙP]XÚY[
›ÙR[™^
NÃBˆJK™›Ü‘XXÚ
[˜Ý[ÛŠ›ÛZ\ÙJHÃBˆ[™[™Ëœ\Ú
›ÛZ\ÙJNÃBˆJNÃBˆ\Ë››ÙPØXÚVÛ›ÙR[™^HH›ÛZ\ÙK˜[
[™[™ÊK[Š[˜Ý[ÛŠØš™XÝÊHÃBˆ]›ÙNÃBˆYˆ
›ÙQY‹š\Ð›Û™HOOHYJHÃBˆ›ÙHH™]È›Û™J
NÃBˆH[ÙHYˆ
Øš™XÝË›[™ÝˆJHÃBˆ›ÙHH™]ÈÜ›Ý\

NÃBˆH[ÙHYˆ
Øš™XÝË›[™ÝOOHJHÃBˆ›ÙHHØš™XÝÖÌNÃBˆH[ÙHÃBˆ›ÙHH™]ÈØš™XÝÑ

NÃBˆCBˆYˆ
›ÙHOOHØš™XÝÖÌJHÃBˆ›Üˆ
]HH[HØš™XÝË›[™ÝÈH[ÈJÊÊHÃBˆ›ÙK˜Y
Øš™XÝÖÚWJNÃBˆCBˆCBˆYˆ
›ÙQY‹›˜[YJHÃBˆ›ÙK\Ù\‘]K›˜[YHH›ÙQY‹›˜[YNÃBˆ›ÙK›˜[YHH›ÙS˜[YNÃBˆCBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]J›ÙK›ÙQYŠNÃBˆYˆ
›ÙQY‹™^[œÚ[ÛœÊHY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]J^[œÚ[ÛœË›ÙK›ÙQYŠNÃBˆYˆ
›ÙQY‹›X]š^OOH›ÚY
HÃBˆÛÛœÝX]š^H™]ÈX]š^

NÃBˆX]š^™œ›ÛP\œ˜^J›ÙQY‹›X]š^
NÃBˆ›ÙK˜\SX]š^
X]š^
NÃBˆH[ÙHÃBˆYˆ
›ÙQY‹˜[œÛ][ÛˆOOH›ÚY
HÃBˆ›ÙKœÜÚ][Û‹™œ›ÛP\œ˜^J›ÙQY‹˜[œÛ][ÛŠNÃBˆCBˆYˆ
›ÙQY‹œ›Ý][ÛˆOOH›ÚY
HÃBˆ›ÙKœ]X]\›š[Û‹™œ›ÛP\œ˜^J›ÙQY‹œ›Ý][ÛŠNÃBˆCBˆYˆ
›ÙQY‹œØØ[HOOH›ÚY
HÃBˆ›ÙKœØØ[K™œ›ÛP\œ˜^J›ÙQY‹œØØ[JNÃBˆCBˆCBˆYˆ
\\œÙ\‹˜\ÜÛØÚX][ÛœËš\Ê›ÙJJHÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœËœÙ]
›ÙKßJNÃBˆH[ÙHYˆ
›ÙQY‹›Y\ÚOOH›ÚY	‰ˆ\œÙ\‹›Y\ÚØXÚKœ™YœÖÛ›ÙQY‹›Y\ÚHˆJHÃBˆÛÛœÝX\[™ÈH\œÙ\‹˜\ÜÛØÚX][ÛœË™Ù]
›ÙJNÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœËœÙ]
›ÙKÈ‹‹›X\[™ÈJNÃBˆCBˆ\œÙ\‹˜\ÜÛØÚX][ÛœË™Ù]
›ÙJK››Ù\ÈH›ÙR[™^ÃBˆ™]\›ˆ›ÙNÃBˆJNÃBˆ™]\›ˆ\Ë››ÙPØXÚVÛ›ÙR[™^NÃBˆCBˆÊŠƒBˆ
ˆÜXÚYšXØ][ÛŽˆÎ‹ËÙÚ]X‹˜ÛÛKÒÚ›Û›ÜÑÜ›Ý\ÙÛ‹Ý™YKÛX\Ý\‹ÜÜXÚYšXØ][Û‹Ì‹ŒÜØÙ[™\ÃBˆ
ƒBˆ
ˆš]˜]CBˆ
ˆ\˜[HÛ[X™\ŸHØÙ[™R[™^Bˆ
ˆ™]\›ˆÔ›ÛZ\ÙOÜ›Ý\ŸCBˆ
‹ÃBˆØYØÙ[™JØÙ[™R[™^
HÃBˆÛÛœÝ^[œÚ[ÛœÈH\Ë™^[œÚ[ÛœÎÃBˆÛÛœÝØÙ[™QYˆH\ËšœÛÛ‹œØÙ[™\ÖÜØÙ[™R[™^NÃBˆÛÛœÝ\œÙ\ˆH\ÎÃBˆÛÛœÝØÙ[™LˆH™]ÈÜ›Ý\

NÃBˆYˆ
ØÙ[™QY‹›˜[YJHØÙ[™L‹›˜[YHH\œÙ\‹˜Ü™X]U[š\]YS˜[YJØÙ[™QY‹›˜[YJNÃBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]JØÙ[™L‹ØÙ[™QYŠNÃBˆYˆ
ØÙ[™QY‹™^[œÚ[ÛœÊHY[šÛ›ÝÛ‘^[œÚ[ÛœÕÕ\Ù\‘]J^[œÚ[ÛœËØÙ[™L‹ØÙ[™QYŠNÃBˆÛÛœÝ›ÙRYÈHØÙ[™QY‹››Ù\È×NÃBˆÛÛœÝ[™[™ÈH×NÃBˆ›Üˆ
]HH[H›ÙRYË›[™ÝÈH[ÈJÊÊHÃBˆ[™[™Ëœ\Ú
\œÙ\‹™Ù]\[™[˜ÞJ››ÙH‹›ÙRYÖÚWJJNÃBˆCBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊK[Š[˜Ý[ÛŠ›Ù\ÊHÃBˆ›Üˆ
]HH[H›Ù\Ë›[™ÝÈH[ÈJÊÊHÃBˆØÙ[™L‹˜Y
›Ù\ÖÚWJNÃBˆCBˆÛÛœÝ™YXÙP\ÜÛØÚX][ÛœÈH
›ÙJHOˆÃBˆÛÛœÝ™YXÙY\ÜÛØÚX][ÛœÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÃBˆ›Üˆ
ÛÛœÝÚÙ^L‹˜[YWHÙˆ\œÙ\‹˜\ÜÛØÚX][ÛœÊHÃBˆYˆ
Ù^Lˆ[œÝ[˜Ù[ÙˆX]\šX[Ù^Lˆ[œÝ[˜Ù[Ùˆ^\™JHÃBˆ™YXÙY\ÜÛØÚX][ÛœËœÙ]
Ù^L‹˜[YJNÃBˆCBˆCBˆ›ÙK˜]™\œÙJ
›ÙLŠHOˆÃBˆÛÛœÝX\[™ÜÈH\œÙ\‹˜\ÜÛØÚX][ÛœË™Ù]
›ÙLŠNÃBˆYˆ
X\[™ÜÈOH[
HÃBˆ™YXÙY\ÜÛØÚX][ÛœËœÙ]
›ÙL‹X\[™ÜÊNÃBˆCBˆJNÃBˆ™]\›ˆ™YXÙY\ÜÛØÚX][ÛœÎÃBˆNÃBˆ\œÙ\‹˜\ÜÛØÚX][ÛœÈH™YXÙP\ÜÛØÚX][ÛœÊØÙ[™LŠNÃBˆ™]\›ˆØÙ[™LŽÃBˆJNÃBˆCBˆØÜ™X]P[š[X][Û•˜XÚÜÊ›ÙK[œ]XØÙ\ÜÛÜ‹Ý]]XØÙ\ÜÛÜ‹Ø[\\‹\™Ù]
HÃBˆÛÛœÝ˜XÚÜÈH×NÃBˆÛÛœÝ\™Ù]˜[YHH›ÙK›˜[YHÈ›ÙK›˜[YHˆ›ÙK]ZYÃBˆÛÛœÝ\™Ù]˜[Y\ÈH×NÃBˆYˆ
UÔ“ÔT•QTÖÝ\™Ù]œ]HOOHUÔ“ÔT•QTËÙZYÚÊHÃBˆ›ÙK˜]™\œÙJ[˜Ý[ÛŠØš™XÝ
HÃBˆYˆ
Øš™XÝ›[Üœ\™Ù][™›Y[˜Ù\ÊHÃBˆ\™Ù]˜[Y\Ëœ\Ú
Øš™XÝ›˜[YHÈØš™XÝ›˜[YHˆØš™XÝ]ZY
NÃBˆCBˆJNÃBˆH[ÙHÃBˆ\™Ù]˜[Y\Ëœ\Ú
\™Ù]˜[YJNÃBˆCBˆ]\YÙ^Yœ˜[YU˜XÚÎÃBˆÝÚ]Ú
UÔ“ÔT•QTÖÝ\™Ù]œ]JHÃBˆØ\ÙHUÔ“ÔT•QTËÙZYÚÎƒBˆ\YÙ^Yœ˜[YU˜XÚÈH[X™\’Ù^Yœ˜[YU˜XÚÎÃBˆœ™XZÎÃBˆØ\ÙHUÔ“ÔT•QTËœ›Ý][ÛŽƒBˆ\YÙ^Yœ˜[YU˜XÚÈH]X]\›š[Û’Ù^Yœ˜[YU˜XÚÎÃBˆœ™XZÎÃBˆØ\ÙHUÔ“ÔT•QTË˜[œÛ][ÛŽƒBˆØ\ÙHUÔ“ÔT•QTËœØØ[NƒBˆ\YÙ^Yœ˜[YU˜XÚÈH™XÝÜ’Ù^Yœ˜[YU˜XÚÎÃBˆœ™XZÎÃBˆY˜][ƒBˆÝÚ]Ú
Ý]]XØÙ\ÜÛÜ‹š][TÚ^™JHÃBˆØ\ÙHNƒBˆ\YÙ^Yœ˜[YU˜XÚÈH[X™\’Ù^Yœ˜[YU˜XÚÎÃBˆœ™XZÎÃBˆØ\ÙHŽƒBˆØ\ÙHÎƒBˆY˜][ƒBˆ\YÙ^Yœ˜[YU˜XÚÈH™XÝÜ’Ù^Yœ˜[YU˜XÚÎÃBˆœ™XZÎÃBˆCBˆœ™XZÎÃBˆCBˆÛÛœÝ[\œÛ][ÛˆHØ[\\‹š[\œÛ][ÛˆOOH›ÚYÈS•T”ÓUSÓ–ÜØ[\\‹š[\œÛ][Û—Hˆ[\œÛ]S[™X\ŽÃBˆÛÛœÝÝ]]\œ˜^HH\Ë—ÙÙ]\œ˜^Qœ›ÛPXØÙ\ÜÛÜŠÝ]]XØÙ\ÜÛÜŠNÃBˆ›Üˆ
]ˆH›H\™Ù]˜[Y\Ë›[™ÝÈˆ›ÈŠÊÊHÃBˆÛÛœÝ˜XÚÈH™]È\YÙ^Yœ˜[YU˜XÚÊBˆ\™Ù]˜[Y\ÖÚ—H
È‹ˆˆ
ÈUÔ“ÔT•QTÖÝ\™Ù]œ]KBˆ[œ]XØÙ\ÜÛÜ‹˜\œ˜^KBˆÝ]]\œ˜^KBˆ[\œÛ][ÛƒBˆ
NÃBˆYˆ
Ø[\\‹š[\œÛ][ÛˆOOHÕP’PÔÔS‘HŠHÃBˆ\Ë—ØÜ™X]PÝXšXÔÜ[™U˜XÚÒ[\œÛ[
˜XÚÊNÃBˆCBˆ˜XÚÜËœ\Ú
˜XÚÊNÃBˆCBˆ™]\›ˆ˜XÚÜÎÃBˆCBˆÙÙ]\œ˜^Qœ›ÛPXØÙ\ÜÛÜŠXØÙ\ÜÛÜŠHÃBˆ]Ý]]\œ˜^HHXØÙ\ÜÛÜ‹˜\œ˜^NÃBˆYˆ
XØÙ\ÜÛÜ‹››Ü›X[^™Y
HÃBˆÛÛœÝØØ[HHÙ]›Ü›X[^™YÛÛ\Û™[ØØ[JÝ]]\œ˜^K˜ÛÛœÝXÝÜŠNÃBˆÛÛœÝØØ[YH™]È›Ø]Ì\œ˜^JÝ]]\œ˜^K›[™Ý
NÃBˆ›Üˆ
]ˆH›HÝ]]\œ˜^K›[™ÝÈˆ›ÈŠÊÊHÃBˆØØ[YÚ—HHÝ]]\œ˜^VÚ—H
ˆØØ[NÃBˆCBˆÝ]]\œ˜^HHØØ[YÃBˆCBˆ™]\›ˆÝ]]\œ˜^NÃBˆCBˆØÜ™X]PÝXšXÔÜ[™U˜XÚÒ[\œÛ[
˜XÚÊHÃBˆ˜XÚË˜Ü™X]R[\œÛ[H[˜Ý[Ûˆ[\œÛ[˜XÝÜžSY]ÙÓÝXšXÔÜ[™J™\Ý[
HÃBˆÛÛœÝ[\œÛ[\HH\È[œÝ[˜Ù[Ùˆ]X]\›š[Û’Ù^Yœ˜[YU˜XÚÈÈÓÝXšXÔÜ[™T]X]\›š[Û’[\œÛ[ˆÓÝXšXÔÜ[™R[\œÛ[ÃBˆ™]\›ˆ™]È[\œÛ[\J\Ë[Y\Ë\Ë˜[Y\Ë\Ë™Ù]˜[YTÚ^™J
HÈË™\Ý[
NÃBˆNÃBˆ˜XÚË˜Ü™X]R[\œÛ[š\Ò[\œÛ[˜XÝÜžSY]ÙÓÝXšXÔÜ[™HHYNÃBˆCBˆNÃBˆ[˜Ý[ÛˆÛÛ\]P›Ý[™ÊÙ[ÛY]žKš[Z]]™QY‹\œÙ\ŠHÃBˆÛÛœÝ]šX]\ÈHš[Z]]™QY‹˜]šX]\ÎÃBˆÛÛœÝ›ÞH™]È›ÞÊ
NÃBˆYˆ
]šX]\Ë”ÔÒUSÓˆOOH›ÚY
HÃBˆÛÛœÝXØÙ\ÜÛÜˆH\œÙ\‹šœÛÛ‹˜XØÙ\ÜÛÜœÖØ]šX]\Ë”ÔÒUSÓ—NÃBˆÛÛœÝZ[ˆHXØÙ\ÜÛÜ‹›Z[ŽÃBˆÛÛœÝX^HXØÙ\ÜÛÜ‹›X^ÃBˆYˆ
Z[ˆOOH›ÚY	‰ˆX^OOH›ÚY
HÃBˆ›ÞœÙ]
Bˆ™]È™XÝÜŒÊZ[–ÌKZ[–ÌWKZ[–Ì—JKBˆ™]È™XÝÜŒÊX^ÌKX^ÌWKX^Ì—JCBˆ
NÃBˆYˆ
XØÙ\ÜÛÜ‹››Ü›X[^™Y
HÃBˆÛÛœÝ›ÞØØ[HHÙ]›Ü›X[^™YÛÛ\Û™[ØØ[JÑP‘ÓÐÓÓTÓ‘S•ÕTTÖØXØÙ\ÜÛÜ‹˜ÛÛ\Û™[\WJNÃBˆ›Þ›Z[‹›][\TØØ[\Š›ÞØØ[JNÃBˆ›Þ›X^›][\TØØ[\Š›ÞØØ[JNÃBˆCBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•‘QK‘Ó“ØY\ŽˆZ\ÜÚ[™ÈZ[‹ÛX^›Ü\Y\È›ÜˆXØÙ\ÜÛÜˆÔÒUSÓ‹ˆŠNÃBˆ™]\›ŽÃBˆCBˆH[ÙHÃBˆ™]\›ŽÃBˆCBˆÛÛœÝ\™Ù]ÈHš[Z]]™QY‹\™Ù]ÎÃBˆYˆ
\™Ù]ÈOOH›ÚY
HÃBˆÛÛœÝX^\ÜXÙ[Y[H™]È™XÝÜŒÊ
NÃBˆÛÛœÝ™XÝÜˆH™]È™XÝÜŒÊ
NÃBˆ›Üˆ
]HH[H\™Ù]Ë›[™ÝÈH[ÈJÊÊHÃBˆÛÛœÝ\™Ù]H\™Ù]ÖÚWNÃBˆYˆ
\™Ù]”ÔÒUSÓˆOOH›ÚY
HÃBˆÛÛœÝXØÙ\ÜÛÜˆH\œÙ\‹šœÛÛ‹˜XØÙ\ÜÛÜœÖÝ\™Ù]”ÔÒUSÓ—NÃBˆÛÛœÝZ[ˆHXØÙ\ÜÛÜ‹›Z[ŽÃBˆÛÛœÝX^HXØÙ\ÜÛÜ‹›X^ÃBˆYˆ
Z[ˆOOH›ÚY	‰ˆX^OOH›ÚY
HÃBˆ™XÝÜ‹œÙ]
X]›X^
X]˜XœÊZ[–ÌJKX]˜XœÊX^ÌJJJNÃBˆ™XÝÜ‹œÙ]JX]›X^
X]˜XœÊZ[–ÌWJKX]˜XœÊX^ÌWJJJNÃBˆ™XÝÜ‹œÙ]ŠX]›X^
X]˜XœÊZ[–Ì—JKX]˜XœÊX^Ì—JJJNÃBˆYˆ
XØÙ\ÜÛÜ‹››Ü›X[^™Y
HÃBˆÛÛœÝ›ÞØØ[HHÙ]›Ü›X[^™YÛÛ\Û™[ØØ[JÑP‘ÓÐÓÓTÓ‘S•ÕTTÖØXØÙ\ÜÛÜ‹˜ÛÛ\Û™[\WJNÃBˆ™XÝÜ‹›][\TØØ[\Š›ÞØØ[JNÃBˆCBˆX^\ÜXÙ[Y[›X^
™XÝÜŠNÃBˆH[ÙHÃBˆÛÛœÛÛKØ\›Š•‘QK‘Ó“ØY\ŽˆZ\ÜÚ[™ÈZ[‹ÛX^›Ü\Y\È›ÜˆXØÙ\ÜÛÜˆÔÒUSÓ‹ˆŠNÃBˆCBˆCBˆCBˆ›Þ™^[™žU™XÝÜŠX^\ÜXÙ[Y[
NÃBˆCBˆÙ[ÛY]žK˜›Ý[™[™Ð›ÞH›ÞÃBˆÛÛœÝÜ\™HH™]ÈÜ\™J
NÃBˆ›Þ™Ù]Ù[\ŠÜ\™K˜Ù[\ŠNÃBˆÜ\™Kœ˜Y]\ÈH›Þ›Z[‹™\Ý[˜ÙUÊ›Þ›X^
HÈŽÃBˆÙ[ÛY]žK˜›Ý[™[™ÔÜ\™HHÜ\™NÃBˆCBˆ[˜Ý[ÛˆYš[Z]]™P]šX]\ÊÙ[ÛY]žKš[Z]]™QY‹\œÙ\ŠHÃBˆÛÛœÝ]šX]\ÈHš[Z]]™QY‹˜]šX]\ÎÃBˆÛÛœÝ[™[™ÈH×NÃBˆ[˜Ý[Ûˆ\ÜÚYÛ]šX]PXØÙ\ÜÛÜŠXØÙ\ÜÛÜ’[™^]šX]S˜[YJHÃBˆ™]\›ˆ\œÙ\‹™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹XØÙ\ÜÛÜ’[™^
K[Š[˜Ý[ÛŠXØÙ\ÜÛÜŠHÃBˆÙ[ÛY]žKœÙ]]šX]J]šX]S˜[YKXØÙ\ÜÛÜŠNÃBˆJNÃBˆCBˆ›Üˆ
ÛÛœÝÛ]šX]S˜[YH[ˆ]šX]\ÊHÃBˆÛÛœÝ™YP]šX]S˜[YHHU’P•UTÖÙÛ]šX]S˜[YWHÛ]šX]S˜[YKÓÝÙ\Ø\ÙJ
NÃBˆYˆ
™YP]šX]S˜[YH[ˆÙ[ÛY]žK˜]šX]\ÊHÛÛ[YNÃBˆ[™[™Ëœ\Ú
\ÜÚYÛ]šX]PXØÙ\ÜÛÜŠ]šX]\ÖÙÛ]šX]S˜[YWK™YP]šX]S˜[YJJNÃBˆCBˆYˆ
š[Z]]™QY‹š[™XÙ\ÈOOH›ÚY	‰ˆYÙ[ÛY]žKš[™^
HÃBˆÛÛœÝXØÙ\ÜÛÜˆH\œÙ\‹™Ù]\[™[˜ÞJ˜XØÙ\ÜÛÜˆ‹š[Z]]™QY‹š[™XÙ\ÊK[Š[˜Ý[ÛŠXØÙ\ÜÛÜŒŠHÃBˆÙ[ÛY]žKœÙ][™^
XØÙ\ÜÛÜŒŠNÃBˆJNÃBˆ[™[™Ëœ\Ú
XØÙ\ÜÛÜŠNÃBˆCBˆYˆ
ÛÛÜ“X[˜YÙ[Y[ÛÜšÚ[™ÐÛÛÜ”ÜXÙHOOH[™X\”Ô‘ÐÛÛÜ”ÜXÙH	‰ˆÓÓÔ—Ìˆ[ˆ]šX]\ÊHÃBˆÛÛœÛÛKØ\›Š‘QK‘Ó“ØY\ŽˆÛÛ™\[™È™\^ÛÛÜœÈœ›ÛHœÜ™Ø‹[[™X\ˆˆÈ‰ÐÛÛÜ“X[˜YÙ[Y[ÛÜšÚ[™ÐÛÛÜ”ÜXÙ_Hˆ›ÝÝ\ÜY˜
NÃBˆCBˆ\ÜÚYÛ‘^˜\ÕÕ\Ù\‘]JÙ[ÛY]žKš[Z]]™QYŠNÃBˆÛÛ\]P›Ý[™ÊÙ[ÛY]žKš[Z]]™QY‹\œÙ\ŠNÃBˆ™]\›ˆ›ÛZ\ÙK˜[
[™[™ÊK[Š[˜Ý[ÛŠ
HÃBˆ™]\›ˆš[Z]]™QY‹\™Ù]ÈOOH›ÚYÈY[Üœ\™Ù]ÊÙ[ÛY]žKš[Z]]™QY‹\™Ù]Ë\œÙ\ŠHˆÙ[ÛY]žNÃBˆJNÃBˆCBƒBˆËÈšY]Ù\‹šœÃBˆ˜\ˆ[Ý[HØÝ[Y[œ]Y\žTÙ[XÝÜŠˆØØ[˜\ÈŠNÃBˆ˜\ˆØY[™ÌˆHØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÛØY[™ÈŠNÃBˆ˜\ˆØY[™Õ^HØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÛØY[™Ë]^ŠNÃBˆ˜\ˆÞ[˜Ô[HØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÜÞ[˜Ë\[ŠNÃBˆ˜\ˆØÙ[™HH™]ÈØÙ[™J
NÃBˆØÙ[™K˜˜XÚÙÜ›Ý[™H™]ÈÛÛÜŠˆÌMŒÌ™HŠNÃBˆØÙ[™K™›ÙÈH™]È›ÙÊˆÌMŒÌ™H‹MÌ
NÃBˆ˜\ˆØ[Y\˜HH™]È\œÜXÝ]™PØ[Y\˜JÎKŒKL
NÃBˆØ[Y\˜KœÜÚ][Û‹œÙ]
ËŒË
NÃBˆ˜\ˆ™[™\™\ˆH™]ÈÙX‘Ó™[™\™\ŠÈ[X[X\ÎˆYK[Nˆ˜[ÙKÝÙ\”™Y™\™[˜ÙNˆšYÚ\\™›Ü›X[˜ÙHˆJNÃBˆ™[™\™\‹œÙ]^[˜][ÊX]›Z[ŠÚ[™ÝË™]šXÙT^[˜][ÈKŠJNÃBˆ™[™\™\‹›Ý]]ÛÛÜ”ÜXÙHHÔ‘ÐÛÛÜ”ÜXÙNÃBˆ™[™\™\‹Û™SX\[™ÈHPÑTÑš[ZXÕÛ™SX\[™ÎÃBˆ™[™\™\‹Û™SX\[™Ñ^ÜÝ\™HHKŒLŽÃBˆ[Ý[˜\[™Ú[
™[™\™\‹™ÛQ[[Y[
NÃBˆ˜\ˆÛÛ›ÛÈH™]ÈÜ˜š]ÛÛ›ÛÊØ[Y\˜K™[™\™\‹™ÛQ[[Y[
NÃBˆÛÛ›ÛË\™Ù]œÙ]
K
NÃBˆÛÛ›ÛË™[˜X›Q[\[™ÈHYNÃBˆÛÛ›ÛË™[\[™Ñ˜XÝÜˆHŒŽÃBˆÛÛ›ÛË›Z[‘\Ý[˜ÙHHNÃBˆÛÛ›ÛË›X^\Ý[˜ÙHHMŽÃBˆÛÛ›ÛË›X^Û\[™ÛHHX]”H
ˆNÃBˆØÙ[™K˜Y
™]È[Z\Ü\™SYÚ
ˆÙMYŒH‹ˆÌŽLÍÙ‹KŽ
JNÃBˆ˜\ˆÙ^HH™]È\™XÝ[Û˜[YÚ
ˆÙ™™ŒÈ‹ËŒJNÃBˆÙ^KœÜÚ][Û‹œÙ]
KKŠNÃBˆØÙ[™K˜Y
Ù^JNÃBˆ˜\ˆš[H™]È\™XÝ[Û˜[YÚ
ˆÎLØŽˆ‹K
NÃBˆš[œÜÚ][Û‹œÙ]
M‹MJNÃBˆØÙ[™K˜Y
š[
NÃBˆ˜\ˆÛÙH™]ÈÚ[YÚ
ˆØÍY™Y‹KN
NÃBˆÛÙœÜÚ][Û‹œÙ]
KKŠNÃBˆØÙ[™K˜Y
ÛÙ
NÃBˆ˜\ˆ›ÛÜˆH™]ÈY\Ú
™]È[™QÙ[ÛY]žJLL
K™]ÈY\ÚÝ[™\™X]\šX[
ÈÛÛÜŽˆˆÌXŒ˜ŒÍH‹›ÝYÚ™\ÜÎˆŽHJJNÃBˆ›ÛÜ‹œ›Ý][Û‹žHSX]”HÈŽÃBˆ›ÛÜ‹œÜÚ][Û‹žHHLŒNÃBˆ›ÛÜ‹œ™XÙZ]™TÚYÝÈHYNÃBˆØÙ[™K˜Y
›ÛÜŠNÃBˆ˜\ˆÜšYH™]ÈÜšY[\Š‹L‹ˆÍLÌÈ‹ˆÌÌÍHŠNÃBˆÜšYœÜÚ][Û‹žHHLŒÍNÃBˆÜšY›X]\šX[˜[œÜ\™[HYNÃBˆÜšY›X]\šX[›ÜXÚ]HHŒMÃBˆØÙ[™K˜Y
ÜšY
NÃBˆ˜\ˆØY\ˆH™]ÈÓ“ØY\Š
NÃBˆ˜\ˆ›ÛÝH[ÃBˆ˜\ˆZ^\ˆH[ÃBˆ˜\ˆXÝ[ÛœÈHßNÃBˆ˜\ˆ\ÝXÝ[ÛˆHßNÃBˆ˜\ˆ[Ù[™XYHH˜[ÙNÃBˆ˜\ˆ\Ù^\ÈHÈ™œ›Û[Y‹™œ›Û\šYÚ‹œ™X\‹[Y‹œ™X\‹\šYÚ‹[šÈ—NÃBˆ˜\ˆ\X™[ÈHÃBˆ™œ›Û[YŽˆ‘œ›ÛYÛÜˆ‹Bˆ™œ›Û\šYÚŽˆ‘œ›ÛšYÚÛÜˆ‹Bˆœ™X\‹[YŽˆ”™X\ˆYÛÜˆ‹Bˆœ™X\‹\šYÚŽˆ”™X\ˆšYÚÛÜˆ‹Bˆ[šÎˆ•[šÈYƒBˆNÃBˆ˜\ˆ\Ü[ˆHØš™XÝ™œ›ÛQ[šY\Ê\Ù^\Ë›X\

ÊHOˆÚË˜[ÙWJJNÃBˆ˜\ˆØ[”Ý]HHØš™XÝ™œ›ÛQ[šY\Ê\Ù^\Ë›X\

ÊHOˆÚË[JJNÃBˆ˜\ˆ™\Ù]ÈHÃBˆ™YK\]X\\ˆŽˆÈˆÍËŒËKˆÌKHKBˆÚYNˆÈˆÌŒMK‹ËLWKˆÌKHKBˆœ›ÛˆÈˆÌLKKËŒWKˆÌKHKBˆ™X\ŽˆÈˆËLLKKËLŒWKˆÌKHCBˆNÃBˆ˜\ˆØ[Y\˜UÙY[ˆH[ÃBˆ[˜Ý[ÛˆÙ]ØY[™Ê^š\ÚX›HHYJHÃBˆØY[™Õ^^ÛÛ[H^ÃBˆØY[™Ì‹˜Û\ÜÓ\ÝÙÙÛJšY[ˆ‹]š\ÚX›JNÃBˆCBˆ[˜Ý[ÛˆÙ][Ù[Ý]\Ê^\Ñ\œ›ÜˆH˜[ÙJHÃBˆÞ[˜Ô[^ÛÛ[H^ÃBˆÞ[˜Ô[œÝ[K˜›Ü™\ÛÛÜˆH\Ñ\œ›ÜˆÈˆØNYLˆˆˆŽÃBˆÞ[˜Ô[œÝ[K˜ÛÛÜˆH\Ñ\œ›ÜˆÈˆÙŒŒXMHˆˆˆŽÃBˆCBˆ[˜Ý[ÛˆÙ]\
Ù^L‹Ü[ŠHÃBˆYˆ
\\Ù^\Ëš[˜ÛY\ÊÙ^LŠH[[Ù[™XYH\Ü[–ÚÙ^L—HOOHÜ[ŠH™]\›ŽÃBˆ\Ü[–ÚÙ^L—HHÜ[ŽÃBˆÛÛœÝÛ\˜[YHH	Ü\X™[ÖÚÙ^L—_HH	ÛÜ[ˆÈ“Ü[ˆˆˆÛÜÙHŸXÃBˆÛÛœÝ™^HXÝ[ÛœÖØÛ\˜[YWNÃBˆYˆ
[™^
HÃBˆÛÛœÛÛKØ\›ŠZ\ÜÚ[™ÈÓˆ[š[X][ÛˆÛ\ˆ	ØÛ\˜[Y_X
NÃBˆ™]\›ŽÃBˆCBˆÛÛœÝ™]š[Ý\ÈH\ÝXÝ[Û–ÚÙ^L—NÃBˆ™^œ™\Ù]

NÃBˆ™^™[˜X›YHYNÃBˆ™^œÙ]ÛÜ
ÛÜÛ˜ÙKJNÃBˆ™^˜Û[\Ú[‘š[š\ÚYHYNÃBˆ™^œÙ]Y™™XÝ]™UÙZYÚ
JNÃBˆ™^œÙ]Y™™XÝ]™U[YTØØ[JJNÃBˆ™^œ^J
NÃBˆYˆ
™]š[Ý\È	‰ˆ™]š[Ý\ÈOOH™^
H™^˜Ü›ÜÜÑ˜YQœ›ÛJ™]š[Ý\ËŒL‹˜[ÙJNÃBˆ\ÝXÝ[Û–ÚÙ^L—HH™^ÃBˆCBˆ[˜Ý[Ûˆ™\Ù]™ZXÛUšY]Ê
HÃBˆ›Üˆ
ÛÛœÝÙ^LˆÙˆ\Ù^\ÊHÃBˆØ[”Ý]VÚÙ^L—HH[ÃBˆYˆ
\Ü[–ÚÙ^L—JHÙ]\
Ù^L‹˜[ÙJNÃBˆCBˆÞ[˜Ô[^ÛÛ[H[Ù[™XYHÈÐSˆPÑH‘TÑUˆˆ•ÐRUS‘È“ÔˆÓˆŽÃBˆCBˆÚ[™ÝËœÙ]Ø[”Ý]\ÈH[˜Ý[ÛŠÝ]\ÊHÃBˆYˆ
\Ý]\È\[ÙˆÝ]\ÈOOH›Øš™XÝŠH™]\›ŽÃBˆ›Üˆ
ÛÛœÝÙ^LˆÙˆ\Ù^\ÊHÃBˆYˆ
JÙ^Lˆ[ˆÝ]\ÊJHÛÛ[YNÃBˆÛÛœÝ˜[YHHÝ]\ÖÚÙ^L—NÃBˆYˆ
˜[YHOOH[	‰ˆ\[Ùˆ˜[YHOOH˜›ÛÛX[ˆŠHÛÛ[YNÃBˆÛÛœÝ™]š[Ý\ÐØ[•˜[YHHØ[”Ý]VÚÙ^L—NÃBˆØ[”Ý]VÚÙ^L—HH˜[YNÃBˆYˆ
˜[YHOOH[
HÃBˆYˆ
™]š[Ý\ÐØ[•˜[YHOOH[	‰ˆ\Ü[–ÚÙ^L—JHÙ]\
Ù^L‹˜[ÙJNÃBˆH[ÙHÃBˆÙ]\
Ù^L‹˜[YJNÃBˆCBˆCBˆÞ[˜Ô[^ÛÛ[HÐSˆPÑHÖSÒ“Ó’V‘QŽÃBˆNÃBˆÚ[™ÝËœ™\Ù]™ZXÛUšY]ÈH™\Ù]™ZXÛUšY]ÎÃBˆÚ[™ÝË›ØY™ZXÛS[Ù[H[˜Ý[ÛŠ\›[š]X[Ø[”Ý]\ÈH[
HÃBˆÙ]ØY[™Ê“ÐQS‘ÈÓˆSÑSŠNÃBˆØY\‹›ØY
\›
ÛŠHOˆÃBˆYˆ
›ÛÝ
HØÙ[™Kœ™[[Ý™J›ÛÝ
NÃBˆ›ÛÝHÛ‹œØÙ[™NÃBˆ›ÛÝ›˜[YHHÐSˆ™ZXÛHÓˆŽÃBˆ›ÛÝ˜]™\œÙJ
ØšŠHOˆÃBˆYˆ
Øš‹š\ÓY\Ú
HÃBˆØš‹˜Ø\ÝÚYÝÈHYNÃBˆØš‹œ™XÙZ]™TÚYÝÈHYNÃBˆCBˆJNÃBˆØÙ[™K˜Y
›ÛÝ
NÃBˆZ^\ˆH™]È[š[X][Û“Z^\Š›ÛÝ
NÃBˆXÝ[ÛœÈHßNÃBˆ\ÝXÝ[ÛˆHßNÃBˆ›Üˆ
ÛÛœÝÛ\ÙˆÛ‹˜[š[X][ÛœÊHXÝ[ÛœÖØÛ\›˜[YWHHZ^\‹˜Û\XÝ[ÛŠÛ\
NÃBˆ[Ù[™XYHHYNÃBˆ›Üˆ
ÛÛœÝÙ^LˆÙˆ\Ù^\ÊHÃBˆ\Ü[–ÚÙ^L—HH˜[ÙNÃBˆØ[”Ý]VÚÙ^L—HH[ÃBˆCBˆÛÛœÝ›ÞH™]È›ÞÊ
KœÙ]œ›ÛSØš™XÝ
›ÛÝ
NÃBˆÛÛœÝÙ[\ˆH›Þ™Ù]Ù[\Š™]È™XÝÜŒÊ
JNÃBˆÛÛ›ÛË\™Ù]œÙ]
Ù[\‹žX]›X^
‹Ù[\‹žJKÙ[\‹žŠNÃBˆÛÛœÝÚ^™HH›Þ™Ù]Ú^™J™]È™XÝÜŒÊ
JNÃBˆØ[Y\˜KœÜÚ][Û‹œÙ]
Ù[\‹ž
ÈX]›X^
ËÚ^™Kž
ˆŽJKÙ[\‹žH
ÈX]›X^
ËÚ^™KžH
ˆKJKÙ[\‹žˆ
ÈX]›X^
ËÚ^™Kž
ˆJJNÃBˆÛÛ›ÛË\]J
NÃBˆÙ][Ù[Ý]\Ê“ÐQQÈLÓTÈŠNÃBˆÙ]ØY[™Êˆ‹˜[ÙJNÃBˆYˆ
[š]X[Ø[”Ý]\ÊHÚ[™ÝËœÙ]Ø[”Ý]\Ê[š]X[Ø[”Ý]\ÊNÃBˆYˆ
Û‹˜[š[X][ÛœË›[™ÝL
HÛÛœÛÛKØ\›Š‘^XÝYL[™[[š[X][ÛœÎÈ›Ý[™‹Û‹˜[š[X][ÛœË›[™Ý
NÃBˆK
›ÙÜ™\ÜÊHOˆÃBˆYˆ
›ÙÜ™\ÜËÝ[
HÙ]ØY[™ÊÐQS‘ÈÓˆ	ÓX]œ›Ý[™
›ÙÜ™\ÜË›ØYYÈ›ÙÜ™\ÜËÝ[
ˆL
_IX
NÃBˆK
\œ›ÜŠHOˆÃBˆÛÛœÛÛK™\œ›ÜŠ\œ›ÜŠNÃBˆÙ][Ù[Ý]\Ê“ÐQRSQÈÒPÒÈÓˆ‹YJNÃBˆÙ]ØY[™ÊÓÕS“ÕÐQSÑSLŒMÑSPÕHSQS’SPUQÓˆŠNÃBˆJNÃBˆNÃBˆ›Üˆ
ÛÛœÝ]ÛˆÙˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
–Ù]KXØ[Y\˜WHŠJH]Û‹˜Y]™[\Ý[™\Š˜ÛXÚÈ‹

HOˆÃBˆÛÛœÝšY]ÈH™\Ù]ÖØ]Û‹™]\Ù]˜Ø[Y\˜WNÃBˆØ[Y\˜UÙY[ˆHÈœ›ÛTˆØ[Y\˜KœÜÚ][Û‹˜ÛÛ™J
KÔˆ™]È™XÝÜŒÊ‹‹šY]Ëœ
Kœ›ÛUˆÛÛ›ÛË\™Ù]˜ÛÛ™J
KÕˆ™]È™XÝÜŒÊ‹‹šY]Ë
K[YNˆ\˜][ÛŽˆˆNÃBˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
–Ù]KXØ[Y\˜WHŠK™›Ü‘XXÚ

ŠHOˆ‹˜Û\ÜÓ\ÝÙÙÛJ˜XÝ]™H‹ˆOOH]ÛŠJNÃBˆJNÃBˆ[˜Ý[Ûˆ™\Ú^™J
HÃBˆÛÛœÝÈH[Ý[˜ÛY[ÚYH[Ý[˜ÛY[ZYÚÃBˆYˆ
]ÈZ
H™]\›ŽÃBˆØ[Y\˜K˜\ÜXÝHÈÈÃBˆØ[Y\˜K\]T›Ú™XÝ[Û“X]š^

NÃBˆ™[™\™\‹œÙ]Ú^™JË˜[ÙJNÃBˆCBˆ™]È™\Ú^™SØœÙ\™\Š™\Ú^™JK›ØœÙ\™J[Ý[
NÃBˆ™\Ú^™J
NÃBˆ˜\ˆÛØÚÈH™]ÈÛØÚÊ
NÃBˆ[˜Ý[Ûˆ[š[X]J
HÃBˆ™\]Y\Ý[š[X][Û‘œ˜[YJ[š[X]JNÃBˆÛÛœÝHX]›Z[ŠÛØÚË™Ù][J
KŒJNÃBˆYˆ
Z^\ŠHZ^\‹\]J
NÃBˆYˆ
Ø[Y\˜UÙY[ŠHÃBˆØ[Y\˜UÙY[‹[YH
ÏHÃBˆÛÛœÝHX]›Z[ŠØ[Y\˜UÙY[‹[YHÈØ[Y\˜UÙY[‹™\˜][Û‹JKHHHHX]œÝÊHHÊNÃBˆØ[Y\˜KœÜÚ][Û‹›\œ™XÝÜœÊØ[Y\˜UÙY[‹™œ›ÛTØ[Y\˜UÙY[‹ÔJNÃBˆÛÛ›ÛË\™Ù]›\œ™XÝÜœÊØ[Y\˜UÙY[‹™œ›ÛUØ[Y\˜UÙY[‹ÕJNÃBˆYˆ
HJHØ[Y\˜UÙY[ˆH[ÃBˆCBˆÛÛ›ÛË\]J
NÃBˆ™[™\™\‹œ™[™\ŠØÙ[™KØ[Y\˜JNÃBˆCBˆ[š[X]J
NÃBˆÙ]ØY[™Ê•ÐRUS‘È“ÔˆÓˆSÑSŠNÃBŸJJ
NÃB‹ÊˆH[™YXÙ[œÙH[™›Ü›X][ÛŽƒBƒB™YKØZ[Ý™YK˜ÛÜ™KšœÎƒB™YKØZ[Ý™YK›[Ù[KšœÎƒBˆ

ŠƒBˆ
ˆXÙ[œÙCBˆ
ˆÛÜ\šYÚŒLLŒH™YKšœÈ]]ÜœÃBˆ
ˆÔSXÙ[œÙKRY[YšY\ŽˆRUBˆ
ŠCBŠ‹ÃB