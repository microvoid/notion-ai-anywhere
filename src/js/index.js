!(function (A, I) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = I())
    : "function" == typeof define && define.amd
    ? define([], I)
    : "object" == typeof exports
    ? (exports.paddlejs = I())
    : ((A.paddlejs = A.paddlejs || {}), (A.paddlejs.ocr = I()))
})(this, function () {
  return (() => {
    var A = {
        546: function (A, I, g) {
          var C, B
          ;(B = this),
            (C = function () {
              return (B.cv =
                ((I =
                  (I =
                    "undefined" != typeof document && document.currentScript
                      ? document.currentScript.src
                      : void 0) || "/index.js"),
                (C = function (A) {
                  var C,
                    B,
                    Q = void 0 !== (A = A || {}) ? A : {}
                  Q.ready = new Promise(function (A, I) {
                    ;(C = A), (B = I)
                  })
                  var E,
                    i = {}
                  for (E in Q) Q.hasOwnProperty(E) && (i[E] = Q[E])
                  var o = [],
                    D = "./this.program",
                    n = !1,
                    t = !1,
                    a = !1,
                    s = !1
                  ;(n = "object" == typeof window),
                    (t = "function" == typeof importScripts),
                    (a =
                      "object" == typeof process &&
                      "object" == typeof process.versions &&
                      "string" == typeof process.versions.node),
                    (s = !n && !a && !t)
                  var w,
                    h,
                    e,
                    G,
                    F,
                    R = ""
                  function r(A) {
                    return Q.locateFile ? Q.locateFile(A, R) : R + A
                  }
                  a
                    ? ((R = t ? g(151).dirname(R) + "/" : "//"),
                      (w = function (A, I) {
                        var C = gB(A)
                        return C
                          ? I
                            ? C
                            : C.toString()
                          : (G || (G = g(822)),
                            F || (F = g(151)),
                            (A = F.normalize(A)),
                            G.readFileSync(A, I ? null : "utf8"))
                      }),
                      (e = function (A) {
                        var I = w(A, !0)
                        return (
                          I.buffer || (I = new Uint8Array(I)), K(I.buffer), I
                        )
                      }),
                      process.argv.length > 1 &&
                        (D = process.argv[1].replace(/\\/g, "/")),
                      (o = process.argv.slice(2)),
                      process.on("uncaughtException", function (A) {
                        if (!(A instanceof sB)) throw A
                      }),
                      process.on("unhandledRejection", YA),
                      (Q.inspect = function () {
                        return "[Emscripten Module object]"
                      }))
                    : s
                    ? ("undefined" != typeof read &&
                        (w = function (A) {
                          var I = gB(A)
                          return I ? $C(I) : read(A)
                        }),
                      (e = function (A) {
                        var I
                        return (I = gB(A))
                          ? I
                          : "function" == typeof readbuffer
                          ? new Uint8Array(readbuffer(A))
                          : (K("object" == typeof (I = read(A, "binary"))), I)
                      }),
                      "undefined" != typeof scriptArgs
                        ? (o = scriptArgs)
                        : void 0 !== arguments && (o = arguments),
                      "undefined" != typeof print &&
                        ("undefined" == typeof console && (console = {}),
                        (console.log = print),
                        (console.warn = console.error =
                          "undefined" != typeof printErr ? printErr : print)))
                    : (n || t) &&
                      (t
                        ? (R = self.location.href)
                        : document.currentScript &&
                          (R = document.currentScript.src),
                      I && (R = I),
                      (R =
                        0 !== R.indexOf("blob:")
                          ? R.substr(0, R.lastIndexOf("/") + 1)
                          : ""),
                      (w = function (A) {
                        try {
                          var I = new XMLHttpRequest()
                          return (
                            I.open("GET", A, !1), I.send(null), I.responseText
                          )
                        } catch (I) {
                          var g = gB(A)
                          if (g) return $C(g)
                          throw I
                        }
                      }),
                      t &&
                        (e = function (A) {
                          try {
                            var I = new XMLHttpRequest()
                            return (
                              I.open("GET", A, !1),
                              (I.responseType = "arraybuffer"),
                              I.send(null),
                              new Uint8Array(I.response)
                            )
                          } catch (I) {
                            var g = gB(A)
                            if (g) return g
                            throw I
                          }
                        }),
                      (h = function (A, I, g) {
                        var C = new XMLHttpRequest()
                        C.open("GET", A, !0),
                          (C.responseType = "arraybuffer"),
                          (C.onload = function () {
                            if (
                              200 == C.status ||
                              (0 == C.status && C.response)
                            )
                              I(C.response)
                            else {
                              var B = gB(A)
                              B ? I(B.buffer) : g()
                            }
                          }),
                          (C.onerror = g),
                          C.send(null)
                      }))
                  var N = Q.print || console.log.bind(console),
                    y = Q.printErr || console.warn.bind(console)
                  for (E in i) i.hasOwnProperty(E) && (Q[E] = i[E])
                  ;(i = null),
                    Q.arguments && (o = Q.arguments),
                    Q.thisProgram && (D = Q.thisProgram),
                    Q.quit && Q.quit
                  var c = 16
                  function U(A) {
                    var I = AA[oA >> 2],
                      g = (I + A + 15) & -16
                    return (AA[oA >> 2] = g), I
                  }
                  function S(A, I) {
                    return I || (I = c), Math.ceil(A / I) * I
                  }
                  function M(A) {
                    M.shown || (M.shown = {}),
                      M.shown[A] || ((M.shown[A] = 1), y(A))
                  }
                  var k,
                    J,
                    l = function (A) {}
                  Q.wasmBinary && (k = Q.wasmBinary),
                    Q.noExitRuntime && Q.noExitRuntime,
                    "object" != typeof WebAssembly &&
                      YA("no native wasm support detected")
                  var L = new WebAssembly.Table({
                      initial: 1631,
                      maximum: 1631,
                      element: "anyfunc"
                    }),
                    Y = !1
                  function K(A, I) {
                    A || YA("Assertion failed: " + I)
                  }
                  function d(A) {
                    return hA ? EB(A) : U(A)
                  }
                  var q =
                    "undefined" != typeof TextDecoder
                      ? new TextDecoder("utf8")
                      : void 0
                  function f(A, I, g) {
                    for (var C = I + g, B = I; A[B] && !(B >= C); ) ++B
                    if (B - I > 16 && A.subarray && q)
                      return q.decode(A.subarray(I, B))
                    for (var Q = ""; I < B; ) {
                      var E = A[I++]
                      if (128 & E) {
                        var i = 63 & A[I++]
                        if (192 != (224 & E)) {
                          var o = 63 & A[I++]
                          if (
                            (E =
                              224 == (240 & E)
                                ? ((15 & E) << 12) | (i << 6) | o
                                : ((7 & E) << 18) |
                                  (i << 12) |
                                  (o << 6) |
                                  (63 & A[I++])) < 65536
                          )
                            Q += String.fromCharCode(E)
                          else {
                            var D = E - 65536
                            Q += String.fromCharCode(
                              55296 | (D >> 10),
                              56320 | (1023 & D)
                            )
                          }
                        } else Q += String.fromCharCode(((31 & E) << 6) | i)
                      } else Q += String.fromCharCode(E)
                    }
                    return Q
                  }
                  function H(A, I) {
                    return A ? f(z, A, I) : ""
                  }
                  function u(A, I, g, C) {
                    if (!(C > 0)) return 0
                    for (var B = g, Q = g + C - 1, E = 0; E < A.length; ++E) {
                      var i = A.charCodeAt(E)
                      if (
                        (i >= 55296 &&
                          i <= 57343 &&
                          (i =
                            (65536 + ((1023 & i) << 10)) |
                            (1023 & A.charCodeAt(++E))),
                        i <= 127)
                      ) {
                        if (g >= Q) break
                        I[g++] = i
                      } else if (i <= 2047) {
                        if (g + 1 >= Q) break
                        ;(I[g++] = 192 | (i >> 6)), (I[g++] = 128 | (63 & i))
                      } else if (i <= 65535) {
                        if (g + 2 >= Q) break
                        ;(I[g++] = 224 | (i >> 12)),
                          (I[g++] = 128 | ((i >> 6) & 63)),
                          (I[g++] = 128 | (63 & i))
                      } else {
                        if (g + 3 >= Q) break
                        ;(I[g++] = 240 | (i >> 18)),
                          (I[g++] = 128 | ((i >> 12) & 63)),
                          (I[g++] = 128 | ((i >> 6) & 63)),
                          (I[g++] = 128 | (63 & i))
                      }
                    }
                    return (I[g] = 0), g - B
                  }
                  function p(A, I, g) {
                    return u(A, z, I, g)
                  }
                  function m(A) {
                    for (var I = 0, g = 0; g < A.length; ++g) {
                      var C = A.charCodeAt(g)
                      C >= 55296 &&
                        C <= 57343 &&
                        (C =
                          (65536 + ((1023 & C) << 10)) |
                          (1023 & A.charCodeAt(++g))),
                        C <= 127
                          ? ++I
                          : (I += C <= 2047 ? 2 : C <= 65535 ? 3 : 4)
                    }
                    return I
                  }
                  var x =
                    "undefined" != typeof TextDecoder
                      ? new TextDecoder("utf-16le")
                      : void 0
                  function V(A, I) {
                    for (
                      var g = A, C = g >> 1, B = C + I / 2;
                      !(C >= B) && $[C];

                    )
                      ++C
                    if ((g = C << 1) - A > 32 && x)
                      return x.decode(z.subarray(A, g))
                    for (var Q = 0, E = ""; ; ) {
                      var i = _[(A + 2 * Q) >> 1]
                      if (0 == i || Q == I / 2) return E
                      ++Q, (E += String.fromCharCode(i))
                    }
                  }
                  function T(A, I, g) {
                    if ((void 0 === g && (g = 2147483647), g < 2)) return 0
                    for (
                      var C = I,
                        B = (g -= 2) < 2 * A.length ? g / 2 : A.length,
                        Q = 0;
                      Q < B;
                      ++Q
                    ) {
                      var E = A.charCodeAt(Q)
                      ;(_[I >> 1] = E), (I += 2)
                    }
                    return (_[I >> 1] = 0), I - C
                  }
                  function b(A) {
                    return 2 * A.length
                  }
                  function X(A, I) {
                    for (var g = 0, C = ""; !(g >= I / 4); ) {
                      var B = AA[(A + 4 * g) >> 2]
                      if (0 == B) break
                      if ((++g, B >= 65536)) {
                        var Q = B - 65536
                        C += String.fromCharCode(
                          55296 | (Q >> 10),
                          56320 | (1023 & Q)
                        )
                      } else C += String.fromCharCode(B)
                    }
                    return C
                  }
                  function P(A, I, g) {
                    if ((void 0 === g && (g = 2147483647), g < 4)) return 0
                    for (var C = I, B = C + g - 4, Q = 0; Q < A.length; ++Q) {
                      var E = A.charCodeAt(Q)
                      if (
                        (E >= 55296 &&
                          E <= 57343 &&
                          (E =
                            (65536 + ((1023 & E) << 10)) |
                            (1023 & A.charCodeAt(++Q))),
                        (AA[I >> 2] = E),
                        (I += 4) + 4 > B)
                      )
                        break
                    }
                    return (AA[I >> 2] = 0), I - C
                  }
                  function W(A) {
                    for (var I = 0, g = 0; g < A.length; ++g) {
                      var C = A.charCodeAt(g)
                      C >= 55296 && C <= 57343 && ++g, (I += 4)
                    }
                    return I
                  }
                  function O(A, I) {
                    j.set(A, I)
                  }
                  function Z(A, I, g) {
                    for (var C = 0; C < A.length; ++C)
                      j[I++ >> 0] = A.charCodeAt(C)
                    g || (j[I >> 0] = 0)
                  }
                  var v,
                    j,
                    z,
                    _,
                    $,
                    AA,
                    IA,
                    gA,
                    CA,
                    BA = 65536
                  function QA(A, I) {
                    return A % I > 0 && (A += I - (A % I)), A
                  }
                  function EA(A) {
                    ;(v = A),
                      (Q.HEAP8 = j = new Int8Array(A)),
                      (Q.HEAP16 = _ = new Int16Array(A)),
                      (Q.HEAP32 = AA = new Int32Array(A)),
                      (Q.HEAPU8 = z = new Uint8Array(A)),
                      (Q.HEAPU16 = $ = new Uint16Array(A)),
                      (Q.HEAPU32 = IA = new Uint32Array(A)),
                      (Q.HEAPF32 = gA = new Float32Array(A)),
                      (Q.HEAPF64 = CA = new Float64Array(A))
                  }
                  var iA = 5870016,
                    oA = 626976,
                    DA = Q.INITIAL_MEMORY || 134217728
                  function nA(A) {
                    for (; A.length > 0; ) {
                      var I = A.shift()
                      if ("function" != typeof I) {
                        var g = I.func
                        "number" == typeof g
                          ? void 0 === I.arg
                            ? Q.dynCall_v(g)
                            : Q.dynCall_vi(g, I.arg)
                          : g(void 0 === I.arg ? null : I.arg)
                      } else I(Q)
                    }
                  }
                  ;(J = Q.wasmMemory
                    ? Q.wasmMemory
                    : new WebAssembly.Memory({
                        initial: DA / BA,
                        maximum: 1073741824 / BA
                      })) && (v = J.buffer),
                    (DA = v.byteLength),
                    EA(v),
                    (AA[oA >> 2] = iA)
                  var tA = [],
                    aA = [],
                    sA = [],
                    wA = [],
                    hA = !1
                  function eA() {
                    if (Q.preRun)
                      for (
                        "function" == typeof Q.preRun &&
                        (Q.preRun = [Q.preRun]);
                        Q.preRun.length;

                      )
                        rA(Q.preRun.shift())
                    nA(tA)
                  }
                  function GA() {
                    ;(hA = !0),
                      Q.noFSInit || oI.init.initialized || oI.init(),
                      EI.init(),
                      nA(aA)
                  }
                  function FA() {
                    ;(oI.ignorePermissions = !1), nA(sA)
                  }
                  function RA() {
                    if (Q.postRun)
                      for (
                        "function" == typeof Q.postRun &&
                        (Q.postRun = [Q.postRun]);
                        Q.postRun.length;

                      )
                        NA(Q.postRun.shift())
                    nA(wA)
                  }
                  function rA(A) {
                    tA.unshift(A)
                  }
                  function NA(A) {
                    wA.unshift(A)
                  }
                  var yA = Math.abs,
                    cA = Math.ceil,
                    UA = Math.floor,
                    SA = Math.min,
                    MA = 0,
                    kA = null,
                    JA = null
                  function lA(A) {
                    MA++,
                      Q.monitorRunDependencies && Q.monitorRunDependencies(MA)
                  }
                  function LA(A) {
                    if (
                      (MA--,
                      Q.monitorRunDependencies && Q.monitorRunDependencies(MA),
                      0 == MA &&
                        (null !== kA && (clearInterval(kA), (kA = null)), JA))
                    ) {
                      var I = JA
                      ;(JA = null), I()
                    }
                  }
                  function YA(A) {
                    Q.onAbort && Q.onAbort(A),
                      y((A += "")),
                      (Y = !0),
                      (A =
                        "abort(" +
                        A +
                        "). Build with -s ASSERTIONS=1 for more info.")
                    var I = new WebAssembly.RuntimeError(A)
                    throw (B(I), I)
                  }
                  function KA(A, I) {
                    return String.prototype.startsWith
                      ? A.startsWith(I)
                      : 0 === A.indexOf(I)
                  }
                  ;(Q.preloadedImages = {}), (Q.preloadedAudios = {})
                  var dA = "data:application/octet-stream;base64,"
                  function qA(A) {
                    return KA(A, dA)
                  }
                  var fA = "file://"
                  function HA(A) {
                    return KA(A, fA)
                  }
                  var uA,
                    pA,
                    mA,
                    xA =
                  function VA() {
                    try {
                      if (k) return new Uint8Array(k)
                      var A = gB(xA)
                      if (A) return A
                      if (e) return e(xA)
                      throw "both async and sync fetching of the wasm failed"
                    } catch (A) {
                      YA(A)
                    }
                  }
                  function TA() {
                    return k ||
                      (!n && !t) ||
                      "function" != typeof fetch ||
                      HA(xA)
                      ? new Promise(function (A, I) {
                          A(VA())
                        })
                      : fetch(xA, { credentials: "same-origin" })
                          .then(function (A) {
                            if (!A.ok)
                              throw (
                                "failed to load wasm binary file at '" +
                                xA +
                                "'"
                              )
                            return A.arrayBuffer()
                          })
                          .catch(function () {
                            return VA()
                          })
                  }
                  function bA() {
                    var A = { env: BB, wasi_snapshot_preview1: BB }
                    function I(A, I) {
                      var g = A.exports
                      ;(Q.asm = g), LA()
                    }
                    function g(A) {
                      I(A.instance)
                    }
                    function C(I) {
                      return TA()
                        .then(function (I) {
                          return WebAssembly.instantiate(I, A)
                        })
                        .then(I, function (A) {
                          y("failed to asynchronously prepare wasm: " + A),
                            YA(A)
                        })
                    }
                    if ((lA(), Q.instantiateWasm))
                      try {
                        return Q.instantiateWasm(A, I)
                      } catch (A) {
                        return (
                          y(
                            "Module.instantiateWasm callback failed with error: " +
                              A
                          ),
                          !1
                        )
                      }
                    return (
                      (function () {
                        if (
                          k ||
                          "function" !=
                            typeof WebAssembly.instantiateStreaming ||
                          qA(xA) ||
                          HA(xA) ||
                          "function" != typeof fetch
                        )
                          return C(g)
                        fetch(xA, { credentials: "same-origin" }).then(
                          function (I) {
                            return WebAssembly.instantiateStreaming(I, A).then(
                              g,
                              function (A) {
                                return (
                                  y("wasm streaming compile failed: " + A),
                                  y(
                                    "falling back to ArrayBuffer instantiation"
                                  ),
                                  C(g)
                                )
                              }
                            )
                          }
                        )
                      })(),
                      {}
                    )
                  }
                  function XA(A, I) {
                    if (
                      ((WA.mainLoop.timingMode = A),
                      (WA.mainLoop.timingValue = I),
                      !WA.mainLoop.func)
                    )
                      return 1
                    if (0 == A)
                      (WA.mainLoop.scheduler = function () {
                        var A =
                          0 | Math.max(0, WA.mainLoop.tickStartTime + I - mA())
                        setTimeout(WA.mainLoop.runner, A)
                      }),
                        (WA.mainLoop.method = "timeout")
                    else if (1 == A)
                      (WA.mainLoop.scheduler = function () {
                        WA.requestAnimationFrame(WA.mainLoop.runner)
                      }),
                        (WA.mainLoop.method = "rAF")
                    else if (2 == A) {
                      if ("undefined" == typeof setImmediate) {
                        var g = [],
                          C = "setimmediate"
                        addEventListener(
                          "message",
                          function (A) {
                            ;(A.data !== C && A.data.target !== C) ||
                              (A.stopPropagation(), g.shift()())
                          },
                          !0
                        ),
                          (setImmediate = function (A) {
                            g.push(A),
                              t
                                ? (void 0 === Q.setImmediates &&
                                    (Q.setImmediates = []),
                                  Q.setImmediates.push(A),
                                  postMessage({ target: C }))
                                : postMessage(C, "*")
                          })
                      }
                      ;(WA.mainLoop.scheduler = function () {
                        setImmediate(WA.mainLoop.runner)
                      }),
                        (WA.mainLoop.method = "immediate")
                    }
                    return 0
                  }
                  function PA(A, I, g, C, B) {
                    var E
                    K(
                      !WA.mainLoop.func,
                      "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
                    ),
                      (WA.mainLoop.func = A),
                      (WA.mainLoop.arg = C),
                      (E =
                        void 0 !== C
                          ? function () {
                              Q.dynCall_vi(A, C)
                            }
                          : function () {
                              Q.dynCall_v(A)
                            })
                    var i = WA.mainLoop.currentlyRunningMainloop
                    if (
                      ((WA.mainLoop.runner = function () {
                        if (!Y)
                          if (WA.mainLoop.queue.length > 0) {
                            var A = Date.now(),
                              I = WA.mainLoop.queue.shift()
                            if (
                              (I.func(I.arg), WA.mainLoop.remainingBlockers)
                            ) {
                              var g = WA.mainLoop.remainingBlockers,
                                C = g % 1 == 0 ? g - 1 : Math.floor(g)
                              I.counted
                                ? (WA.mainLoop.remainingBlockers = C)
                                : ((C += 0.5),
                                  (WA.mainLoop.remainingBlockers =
                                    (8 * g + C) / 9))
                            }
                            if (
                              (console.log(
                                'main loop blocker "' +
                                  I.name +
                                  '" took ' +
                                  (Date.now() - A) +
                                  " ms"
                              ),
                              WA.mainLoop.updateStatus(),
                              i < WA.mainLoop.currentlyRunningMainloop)
                            )
                              return
                            setTimeout(WA.mainLoop.runner, 0)
                          } else
                            i < WA.mainLoop.currentlyRunningMainloop ||
                              ((WA.mainLoop.currentFrameNumber =
                                (WA.mainLoop.currentFrameNumber + 1) | 0),
                              1 == WA.mainLoop.timingMode &&
                              WA.mainLoop.timingValue > 1 &&
                              WA.mainLoop.currentFrameNumber %
                                WA.mainLoop.timingValue !=
                                0
                                ? WA.mainLoop.scheduler()
                                : (0 == WA.mainLoop.timingMode &&
                                    (WA.mainLoop.tickStartTime = mA()),
                                  WA.mainLoop.runIter(E),
                                  i < WA.mainLoop.currentlyRunningMainloop ||
                                    ("object" == typeof SDL &&
                                      SDL.audio &&
                                      SDL.audio.queueNewAudioData &&
                                      SDL.audio.queueNewAudioData(),
                                    WA.mainLoop.scheduler())))
                      }),
                      B ||
                        (I && I > 0 ? XA(0, 1e3 / I) : XA(1, 1),
                        WA.mainLoop.scheduler()),
                      g)
                    )
                      throw "unwind"
                  }
                  qA(xA) || (xA = r(xA)),
                    aA.push({
                      func: function () {
                        QB()
                      }
                    }),
                    (mA = a
                      ? function () {
                          var A = process.hrtime()
                          return 1e3 * A[0] + A[1] / 1e6
                        }
                      : "undefined" != typeof dateNow
                      ? dateNow
                      : function () {
                          return performance.now()
                        })
                  var WA = {
                    mainLoop: {
                      scheduler: null,
                      method: "",
                      currentlyRunningMainloop: 0,
                      func: null,
                      arg: 0,
                      timingMode: 0,
                      timingValue: 0,
                      currentFrameNumber: 0,
                      queue: [],
                      pause: function () {
                        ;(WA.mainLoop.scheduler = null),
                          WA.mainLoop.currentlyRunningMainloop++
                      },
                      resume: function () {
                        WA.mainLoop.currentlyRunningMainloop++
                        var A = WA.mainLoop.timingMode,
                          I = WA.mainLoop.timingValue,
                          g = WA.mainLoop.func
                        ;(WA.mainLoop.func = null),
                          PA(g, 0, !1, WA.mainLoop.arg, !0),
                          XA(A, I),
                          WA.mainLoop.scheduler()
                      },
                      updateStatus: function () {
                        if (Q.setStatus) {
                          var A = Q.statusMessage || "Please wait...",
                            I = WA.mainLoop.remainingBlockers,
                            g = WA.mainLoop.expectedBlockers
                          I
                            ? I < g
                              ? Q.setStatus(A + " (" + (g - I) + "/" + g + ")")
                              : Q.setStatus(A)
                            : Q.setStatus("")
                        }
                      },
                      runIter: function (A) {
                        if (!Y) {
                          if (Q.preMainLoop && !1 === Q.preMainLoop()) return
                          try {
                            A()
                          } catch (A) {
                            if (A instanceof sB) return
                            throw (
                              (A &&
                                "object" == typeof A &&
                                A.stack &&
                                y("exception thrown: " + [A, A.stack]),
                              A)
                            )
                          }
                          Q.postMainLoop && Q.postMainLoop()
                        }
                      }
                    },
                    isFullscreen: !1,
                    pointerLock: !1,
                    moduleContextCreatedCallbacks: [],
                    workers: [],
                    init: function () {
                      if (
                        (Q.preloadPlugins || (Q.preloadPlugins = []),
                        !WA.initted)
                      ) {
                        WA.initted = !0
                        try {
                          new Blob(), (WA.hasBlobConstructor = !0)
                        } catch (A) {
                          ;(WA.hasBlobConstructor = !1),
                            console.log(
                              "warning: no blob constructor, cannot create blobs with mimetypes"
                            )
                        }
                        ;(WA.BlobBuilder =
                          "undefined" != typeof MozBlobBuilder
                            ? MozBlobBuilder
                            : "undefined" != typeof WebKitBlobBuilder
                            ? WebKitBlobBuilder
                            : WA.hasBlobConstructor
                            ? null
                            : console.log("warning: no BlobBuilder")),
                          (WA.URLObject =
                            "undefined" != typeof window
                              ? window.URL
                                ? window.URL
                                : window.webkitURL
                              : void 0),
                          Q.noImageDecoding ||
                            void 0 !== WA.URLObject ||
                            (console.log(
                              "warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."
                            ),
                            (Q.noImageDecoding = !0))
                        var A = {
                          canHandle: function (A) {
                            return (
                              !Q.noImageDecoding &&
                              /\.(jpg|jpeg|png|bmp)$/i.test(A)
                            )
                          },
                          handle: function (A, I, g, C) {
                            var B = null
                            if (WA.hasBlobConstructor)
                              try {
                                ;(B = new Blob([A], {
                                  type: WA.getMimetype(I)
                                })).size !== A.length &&
                                  (B = new Blob([new Uint8Array(A).buffer], {
                                    type: WA.getMimetype(I)
                                  }))
                              } catch (A) {
                                M(
                                  "Blob constructor present but fails: " +
                                    A +
                                    "; falling back to blob builder"
                                )
                              }
                            if (!B) {
                              var E = new WA.BlobBuilder()
                              E.append(new Uint8Array(A).buffer),
                                (B = E.getBlob())
                            }
                            var i = WA.URLObject.createObjectURL(B),
                              o = new Image()
                            ;(o.onload = function () {
                              K(
                                o.complete,
                                "Image " + I + " could not be decoded"
                              )
                              var C = document.createElement("canvas")
                              ;(C.width = o.width),
                                (C.height = o.height),
                                C.getContext("2d").drawImage(o, 0, 0),
                                (Q.preloadedImages[I] = C),
                                WA.URLObject.revokeObjectURL(i),
                                g && g(A)
                            }),
                              (o.onerror = function (A) {
                                console.log(
                                  "Image " + i + " could not be decoded"
                                ),
                                  C && C()
                              }),
                              (o.src = i)
                          }
                        }
                        Q.preloadPlugins.push(A)
                        var I = {
                          canHandle: function (A) {
                            return (
                              !Q.noAudioDecoding &&
                              A.substr(-4) in
                                { ".ogg": 1, ".wav": 1, ".mp3": 1 }
                            )
                          },
                          handle: function (A, I, g, C) {
                            var B = !1
                            function E(C) {
                              B ||
                                ((B = !0),
                                (Q.preloadedAudios[I] = C),
                                g && g(A))
                            }
                            function i() {
                              B ||
                                ((B = !0),
                                (Q.preloadedAudios[I] = new Audio()),
                                C && C())
                            }
                            if (!WA.hasBlobConstructor) return i()
                            try {
                              var o = new Blob([A], { type: WA.getMimetype(I) })
                            } catch (A) {
                              return i()
                            }
                            var D = WA.URLObject.createObjectURL(o),
                              n = new Audio()
                            n.addEventListener(
                              "canplaythrough",
                              function () {
                                E(n)
                              },
                              !1
                            ),
                              (n.onerror = function (g) {
                                B ||
                                  (console.log(
                                    "warning: browser could not fully decode audio " +
                                      I +
                                      ", trying slower base64 approach"
                                  ),
                                  (n.src =
                                    "data:audio/x-" +
                                    I.substr(-3) +
                                    ";base64," +
                                    (function (A) {
                                      for (
                                        var I =
                                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                          g = "",
                                          C = 0,
                                          B = 0,
                                          Q = 0;
                                        Q < A.length;
                                        Q++
                                      )
                                        for (
                                          C = (C << 8) | A[Q], B += 8;
                                          B >= 6;

                                        ) {
                                          var E = (C >> (B - 6)) & 63
                                          ;(B -= 6), (g += I[E])
                                        }
                                      return (
                                        2 == B
                                          ? ((g += I[(3 & C) << 4]),
                                            (g += "=="))
                                          : 4 == B &&
                                            ((g += I[(15 & C) << 2]),
                                            (g += "=")),
                                        g
                                      )
                                    })(A)),
                                  E(n))
                              }),
                              (n.src = D),
                              WA.safeSetTimeout(function () {
                                E(n)
                              }, 1e4)
                          }
                        }
                        Q.preloadPlugins.push(I)
                        var g = Q.canvas
                        g &&
                          ((g.requestPointerLock =
                            g.requestPointerLock ||
                            g.mozRequestPointerLock ||
                            g.webkitRequestPointerLock ||
                            g.msRequestPointerLock ||
                            function () {}),
                          (g.exitPointerLock =
                            document.exitPointerLock ||
                            document.mozExitPointerLock ||
                            document.webkitExitPointerLock ||
                            document.msExitPointerLock ||
                            function () {}),
                          (g.exitPointerLock =
                            g.exitPointerLock.bind(document)),
                          document.addEventListener("pointerlockchange", C, !1),
                          document.addEventListener(
                            "mozpointerlockchange",
                            C,
                            !1
                          ),
                          document.addEventListener(
                            "webkitpointerlockchange",
                            C,
                            !1
                          ),
                          document.addEventListener(
                            "mspointerlockchange",
                            C,
                            !1
                          ),
                          Q.elementPointerLock &&
                            g.addEventListener(
                              "click",
                              function (A) {
                                !WA.pointerLock &&
                                  Q.canvas.requestPointerLock &&
                                  (Q.canvas.requestPointerLock(),
                                  A.preventDefault())
                              },
                              !1
                            ))
                      }
                      function C() {
                        WA.pointerLock =
                          document.pointerLockElement === Q.canvas ||
                          document.mozPointerLockElement === Q.canvas ||
                          document.webkitPointerLockElement === Q.canvas ||
                          document.msPointerLockElement === Q.canvas
                      }
                    },
                    createContext: function (A, I, g, C) {
                      if (I && Q.ctx && A == Q.canvas) return Q.ctx
                      var B, E
                      if (I) {
                        var i = { antialias: !1, alpha: !1, majorVersion: 1 }
                        if (C) for (var o in C) i[o] = C[o]
                        "undefined" != typeof GL &&
                          (E = GL.createContext(A, i)) &&
                          (B = GL.getContext(E).GLctx)
                      } else B = A.getContext("2d")
                      return B
                        ? (g &&
                            (I ||
                              K(
                                "undefined" == typeof GLctx,
                                "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"
                              ),
                            (Q.ctx = B),
                            I && GL.makeContextCurrent(E),
                            (Q.useWebGL = I),
                            WA.moduleContextCreatedCallbacks.forEach(function (
                              A
                            ) {
                              A()
                            }),
                            WA.init()),
                          B)
                        : null
                    },
                    destroyContext: function (A, I, g) {},
                    fullscreenHandlersInstalled: !1,
                    lockPointer: void 0,
                    resizeCanvas: void 0,
                    requestFullscreen: function (A, I) {
                      ;(WA.lockPointer = A),
                        (WA.resizeCanvas = I),
                        void 0 === WA.lockPointer && (WA.lockPointer = !0),
                        void 0 === WA.resizeCanvas && (WA.resizeCanvas = !1)
                      var g = Q.canvas
                      function C() {
                        WA.isFullscreen = !1
                        var A = g.parentNode
                        ;(document.fullscreenElement ||
                          document.mozFullScreenElement ||
                          document.msFullscreenElement ||
                          document.webkitFullscreenElement ||
                          document.webkitCurrentFullScreenElement) === A
                          ? ((g.exitFullscreen = WA.exitFullscreen),
                            WA.lockPointer && g.requestPointerLock(),
                            (WA.isFullscreen = !0),
                            WA.resizeCanvas
                              ? WA.setFullscreenCanvasSize()
                              : WA.updateCanvasDimensions(g))
                          : (A.parentNode.insertBefore(g, A),
                            A.parentNode.removeChild(A),
                            WA.resizeCanvas
                              ? WA.setWindowedCanvasSize()
                              : WA.updateCanvasDimensions(g)),
                          Q.onFullScreen && Q.onFullScreen(WA.isFullscreen),
                          Q.onFullscreen && Q.onFullscreen(WA.isFullscreen)
                      }
                      WA.fullscreenHandlersInstalled ||
                        ((WA.fullscreenHandlersInstalled = !0),
                        document.addEventListener("fullscreenchange", C, !1),
                        document.addEventListener("mozfullscreenchange", C, !1),
                        document.addEventListener(
                          "webkitfullscreenchange",
                          C,
                          !1
                        ),
                        document.addEventListener("MSFullscreenChange", C, !1))
                      var B = document.createElement("div")
                      g.parentNode.insertBefore(B, g),
                        B.appendChild(g),
                        (B.requestFullscreen =
                          B.requestFullscreen ||
                          B.mozRequestFullScreen ||
                          B.msRequestFullscreen ||
                          (B.webkitRequestFullscreen
                            ? function () {
                                B.webkitRequestFullscreen(
                                  Element.ALLOW_KEYBOARD_INPUT
                                )
                              }
                            : null) ||
                          (B.webkitRequestFullScreen
                            ? function () {
                                B.webkitRequestFullScreen(
                                  Element.ALLOW_KEYBOARD_INPUT
                                )
                              }
                            : null)),
                        B.requestFullscreen()
                    },
                    exitFullscreen: function () {
                      return (
                        !!WA.isFullscreen &&
                        ((
                          document.exitFullscreen ||
                          document.cancelFullScreen ||
                          document.mozCancelFullScreen ||
                          document.msExitFullscreen ||
                          document.webkitCancelFullScreen ||
                          function () {}
                        ).apply(document, []),
                        !0)
                      )
                    },
                    nextRAF: 0,
                    fakeRequestAnimationFrame: function (A) {
                      var I = Date.now()
                      if (0 === WA.nextRAF) WA.nextRAF = I + 1e3 / 60
                      else for (; I + 2 >= WA.nextRAF; ) WA.nextRAF += 1e3 / 60
                      var g = Math.max(WA.nextRAF - I, 0)
                      setTimeout(A, g)
                    },
                    requestAnimationFrame: function (A) {
                      "function" != typeof requestAnimationFrame
                        ? (0, WA.fakeRequestAnimationFrame)(A)
                        : requestAnimationFrame(A)
                    },
                    safeCallback: function (A) {
                      return function () {
                        if (!Y) return A.apply(null, arguments)
                      }
                    },
                    allowAsyncCallbacks: !0,
                    queuedAsyncCallbacks: [],
                    pauseAsyncCallbacks: function () {
                      WA.allowAsyncCallbacks = !1
                    },
                    resumeAsyncCallbacks: function () {
                      if (
                        ((WA.allowAsyncCallbacks = !0),
                        WA.queuedAsyncCallbacks.length > 0)
                      ) {
                        var A = WA.queuedAsyncCallbacks
                        ;(WA.queuedAsyncCallbacks = []),
                          A.forEach(function (A) {
                            A()
                          })
                      }
                    },
                    safeRequestAnimationFrame: function (A) {
                      return WA.requestAnimationFrame(function () {
                        Y ||
                          (WA.allowAsyncCallbacks
                            ? A()
                            : WA.queuedAsyncCallbacks.push(A))
                      })
                    },
                    safeSetTimeout: function (A, I) {
                      return setTimeout(function () {
                        Y ||
                          (WA.allowAsyncCallbacks
                            ? A()
                            : WA.queuedAsyncCallbacks.push(A))
                      }, I)
                    },
                    safeSetInterval: function (A, I) {
                      return setInterval(function () {
                        Y || (WA.allowAsyncCallbacks && A())
                      }, I)
                    },
                    getMimetype: function (A) {
                      return {
                        jpg: "image/jpeg",
                        jpeg: "image/jpeg",
                        png: "image/png",
                        bmp: "image/bmp",
                        ogg: "audio/ogg",
                        wav: "audio/wav",
                        mp3: "audio/mpeg"
                      }[A.substr(A.lastIndexOf(".") + 1)]
                    },
                    getUserMedia: function (A) {
                      window.getUserMedia ||
                        (window.getUserMedia =
                          navigator.getUserMedia || navigator.mozGetUserMedia),
                        window.getUserMedia(A)
                    },
                    getMovementX: function (A) {
                      return (
                        A.movementX || A.mozMovementX || A.webkitMovementX || 0
                      )
                    },
                    getMovementY: function (A) {
                      return (
                        A.movementY || A.mozMovementY || A.webkitMovementY || 0
                      )
                    },
                    getMouseWheelDelta: function (A) {
                      var I = 0
                      switch (A.type) {
                        case "DOMMouseScroll":
                          I = A.detail / 3
                          break
                        case "mousewheel":
                          I = A.wheelDelta / 120
                          break
                        case "wheel":
                          switch (((I = A.deltaY), A.deltaMode)) {
                            case 0:
                              I /= 100
                              break
                            case 1:
                              I /= 3
                              break
                            case 2:
                              I *= 80
                              break
                            default:
                              throw (
                                "unrecognized mouse wheel delta mode: " +
                                A.deltaMode
                              )
                          }
                          break
                        default:
                          throw "unrecognized mouse wheel event: " + A.type
                      }
                      return I
                    },
                    mouseX: 0,
                    mouseY: 0,
                    mouseMovementX: 0,
                    mouseMovementY: 0,
                    touches: {},
                    lastTouches: {},
                    calculateMouseEvent: function (A) {
                      if (WA.pointerLock)
                        "mousemove" != A.type && "mozMovementX" in A
                          ? (WA.mouseMovementX = WA.mouseMovementY = 0)
                          : ((WA.mouseMovementX = WA.getMovementX(A)),
                            (WA.mouseMovementY = WA.getMovementY(A))),
                          "undefined" != typeof SDL
                            ? ((WA.mouseX = SDL.mouseX + WA.mouseMovementX),
                              (WA.mouseY = SDL.mouseY + WA.mouseMovementY))
                            : ((WA.mouseX += WA.mouseMovementX),
                              (WA.mouseY += WA.mouseMovementY))
                      else {
                        var I = Q.canvas.getBoundingClientRect(),
                          g = Q.canvas.width,
                          C = Q.canvas.height,
                          B =
                            void 0 !== window.scrollX
                              ? window.scrollX
                              : window.pageXOffset,
                          E =
                            void 0 !== window.scrollY
                              ? window.scrollY
                              : window.pageYOffset
                        if (
                          "touchstart" === A.type ||
                          "touchend" === A.type ||
                          "touchmove" === A.type
                        ) {
                          var i = A.touch
                          if (void 0 === i) return
                          var o = i.pageX - (B + I.left),
                            D = i.pageY - (E + I.top),
                            n = {
                              x: (o *= g / I.width),
                              y: (D *= C / I.height)
                            }
                          if ("touchstart" === A.type)
                            (WA.lastTouches[i.identifier] = n),
                              (WA.touches[i.identifier] = n)
                          else if (
                            "touchend" === A.type ||
                            "touchmove" === A.type
                          ) {
                            var t = WA.touches[i.identifier]
                            t || (t = n),
                              (WA.lastTouches[i.identifier] = t),
                              (WA.touches[i.identifier] = n)
                          }
                          return
                        }
                        var a = A.pageX - (B + I.left),
                          s = A.pageY - (E + I.top)
                        ;(a *= g / I.width),
                          (s *= C / I.height),
                          (WA.mouseMovementX = a - WA.mouseX),
                          (WA.mouseMovementY = s - WA.mouseY),
                          (WA.mouseX = a),
                          (WA.mouseY = s)
                      }
                    },
                    asyncLoad: function (A, I, g, C) {
                      var B = C ? "" : "al " + A
                      h(
                        A,
                        function (g) {
                          K(
                            g,
                            'Loading data file "' +
                              A +
                              '" failed (no arrayBuffer).'
                          ),
                            I(new Uint8Array(g)),
                            B && LA()
                        },
                        function (I) {
                          if (!g) throw 'Loading data file "' + A + '" failed.'
                          g()
                        }
                      ),
                        B && lA()
                    },
                    resizeListeners: [],
                    updateResizeListeners: function () {
                      var A = Q.canvas
                      WA.resizeListeners.forEach(function (I) {
                        I(A.width, A.height)
                      })
                    },
                    setCanvasSize: function (A, I, g) {
                      var C = Q.canvas
                      WA.updateCanvasDimensions(C, A, I),
                        g || WA.updateResizeListeners()
                    },
                    windowedWidth: 0,
                    windowedHeight: 0,
                    setFullscreenCanvasSize: function () {
                      if ("undefined" != typeof SDL) {
                        var A = IA[SDL.screen >> 2]
                        ;(A |= 8388608), (AA[SDL.screen >> 2] = A)
                      }
                      WA.updateCanvasDimensions(Q.canvas),
                        WA.updateResizeListeners()
                    },
                    setWindowedCanvasSize: function () {
                      if ("undefined" != typeof SDL) {
                        var A = IA[SDL.screen >> 2]
                        ;(A &= -8388609), (AA[SDL.screen >> 2] = A)
                      }
                      WA.updateCanvasDimensions(Q.canvas),
                        WA.updateResizeListeners()
                    },
                    updateCanvasDimensions: function (A, I, g) {
                      I && g
                        ? ((A.widthNative = I), (A.heightNative = g))
                        : ((I = A.widthNative), (g = A.heightNative))
                      var C = I,
                        B = g
                      if (
                        (Q.forcedAspectRatio &&
                          Q.forcedAspectRatio > 0 &&
                          (C / B < Q.forcedAspectRatio
                            ? (C = Math.round(B * Q.forcedAspectRatio))
                            : (B = Math.round(C / Q.forcedAspectRatio))),
                        (document.fullscreenElement ||
                          document.mozFullScreenElement ||
                          document.msFullscreenElement ||
                          document.webkitFullscreenElement ||
                          document.webkitCurrentFullScreenElement) ===
                          A.parentNode && "undefined" != typeof screen)
                      ) {
                        var E = Math.min(screen.width / C, screen.height / B)
                        ;(C = Math.round(C * E)), (B = Math.round(B * E))
                      }
                      WA.resizeCanvas
                        ? (A.width != C && (A.width = C),
                          A.height != B && (A.height = B),
                          void 0 !== A.style &&
                            (A.style.removeProperty("width"),
                            A.style.removeProperty("height")))
                        : (A.width != I && (A.width = I),
                          A.height != g && (A.height = g),
                          void 0 !== A.style &&
                            (C != I || B != g
                              ? (A.style.setProperty(
                                  "width",
                                  C + "px",
                                  "important"
                                ),
                                A.style.setProperty(
                                  "height",
                                  B + "px",
                                  "important"
                                ))
                              : (A.style.removeProperty("width"),
                                A.style.removeProperty("height"))))
                    },
                    wgetRequests: {},
                    nextWgetRequestHandle: 0,
                    getNextWgetRequestHandle: function () {
                      var A = WA.nextWgetRequestHandle
                      return WA.nextWgetRequestHandle++, A
                    }
                  }
                  function OA(A) {
                    if (
                      ((OA.recursionGuard = 1 + (0 | OA.recursionGuard)),
                      OA.recursionGuard > 1)
                    )
                      return A
                    var I = Q.___cxa_demangle || Q.__cxa_demangle
                    K(I)
                    var g = nB()
                    try {
                      var C = A
                      C.startsWith("__Z") && (C = C.substr(1))
                      var B = m(C) + 1,
                        E = aB(B)
                      p(C, E, B)
                      var i = aB(4),
                        o = I(E, 0, 0, i)
                      if (0 === AA[i >> 2] && o) return H(o)
                    } catch (A) {
                    } finally {
                      iB(o), tB(g), OA.recursionGuard < 2 && --OA.recursionGuard
                    }
                    return A
                  }
                  function ZA(A) {
                    return A.replace(/\b_Z[\w\d_]+/g, function (A) {
                      var I = OA(A)
                      return A === I ? A : I + " [" + A + "]"
                    })
                  }
                  function vA() {
                    var A = new Error()
                    if (!A.stack) {
                      try {
                        throw new Error()
                      } catch (I) {
                        A = I
                      }
                      if (!A.stack) return "(no stack trace available)"
                    }
                    return A.stack.toString()
                  }
                  function jA() {
                    var A = vA()
                    return (
                      Q.extraStackTrace && (A += "\n" + Q.extraStackTrace()),
                      ZA(A)
                    )
                  }
                  function zA(A) {
                    return EB(A)
                  }
                  function _A(A, I) {}
                  var $A = {}
                  function AI() {
                    return AI.uncaught_exceptions > 0
                  }
                  function II(A, I, g) {
                    throw (
                      (($A[A] = {
                        ptr: A,
                        adjusted: [A],
                        type: I,
                        destructor: g,
                        refcount: 0,
                        caught: !1,
                        rethrown: !1
                      }),
                      "uncaught_exception" in AI
                        ? AI.uncaught_exceptions++
                        : (AI.uncaught_exceptions = 1),
                      A)
                    )
                  }
                  function gI(A) {
                    return (AA[oB() >> 2] = A), A
                  }
                  function CI(A, I) {
                    return gI(63), -1
                  }
                  var BI = {
                      splitPath: function (A) {
                        return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                          .exec(A)
                          .slice(1)
                      },
                      normalizeArray: function (A, I) {
                        for (var g = 0, C = A.length - 1; C >= 0; C--) {
                          var B = A[C]
                          "." === B
                            ? A.splice(C, 1)
                            : ".." === B
                            ? (A.splice(C, 1), g++)
                            : g && (A.splice(C, 1), g--)
                        }
                        if (I) for (; g; g--) A.unshift("..")
                        return A
                      },
                      normalize: function (A) {
                        var I = "/" === A.charAt(0),
                          g = "/" === A.substr(-1)
                        return (
                          (A = BI.normalizeArray(
                            A.split("/").filter(function (A) {
                              return !!A
                            }),
                            !I
                          ).join("/")) ||
                            I ||
                            (A = "."),
                          A && g && (A += "/"),
                          (I ? "/" : "") + A
                        )
                      },
                      dirname: function (A) {
                        var I = BI.splitPath(A),
                          g = I[0],
                          C = I[1]
                        return g || C
                          ? (C && (C = C.substr(0, C.length - 1)), g + C)
                          : "."
                      },
                      basename: function (A) {
                        if ("/" === A) return "/"
                        var I = A.lastIndexOf("/")
                        return -1 === I ? A : A.substr(I + 1)
                      },
                      extname: function (A) {
                        return BI.splitPath(A)[3]
                      },
                      join: function () {
                        var A = Array.prototype.slice.call(arguments, 0)
                        return BI.normalize(A.join("/"))
                      },
                      join2: function (A, I) {
                        return BI.normalize(A + "/" + I)
                      }
                    },
                    QI = {
                      resolve: function () {
                        for (
                          var A = "", I = !1, g = arguments.length - 1;
                          g >= -1 && !I;
                          g--
                        ) {
                          var C = g >= 0 ? arguments[g] : oI.cwd()
                          if ("string" != typeof C)
                            throw new TypeError(
                              "Arguments to path.resolve must be strings"
                            )
                          if (!C) return ""
                          ;(A = C + "/" + A), (I = "/" === C.charAt(0))
                        }
                        return (
                          (I ? "/" : "") +
                            (A = BI.normalizeArray(
                              A.split("/").filter(function (A) {
                                return !!A
                              }),
                              !I
                            ).join("/")) || "."
                        )
                      },
                      relative: function (A, I) {
                        function g(A) {
                          for (var I = 0; I < A.length && "" === A[I]; I++);
                          for (
                            var g = A.length - 1;
                            g >= 0 && "" === A[g];
                            g--
                          );
                          return I > g ? [] : A.slice(I, g - I + 1)
                        }
                        ;(A = QI.resolve(A).substr(1)),
                          (I = QI.resolve(I).substr(1))
                        for (
                          var C = g(A.split("/")),
                            B = g(I.split("/")),
                            Q = Math.min(C.length, B.length),
                            E = Q,
                            i = 0;
                          i < Q;
                          i++
                        )
                          if (C[i] !== B[i]) {
                            E = i
                            break
                          }
                        var o = []
                        for (i = E; i < C.length; i++) o.push("..")
                        return (o = o.concat(B.slice(E))).join("/")
                      }
                    },
                    EI = {
                      ttys: [],
                      init: function () {},
                      shutdown: function () {},
                      register: function (A, I) {
                        ;(EI.ttys[A] = { input: [], output: [], ops: I }),
                          oI.registerDevice(A, EI.stream_ops)
                      },
                      stream_ops: {
                        open: function (A) {
                          var I = EI.ttys[A.node.rdev]
                          if (!I) throw new oI.ErrnoError(43)
                          ;(A.tty = I), (A.seekable = !1)
                        },
                        close: function (A) {
                          A.tty.ops.flush(A.tty)
                        },
                        flush: function (A) {
                          A.tty.ops.flush(A.tty)
                        },
                        read: function (A, I, g, C, B) {
                          if (!A.tty || !A.tty.ops.get_char)
                            throw new oI.ErrnoError(60)
                          for (var Q = 0, E = 0; E < C; E++) {
                            var i
                            try {
                              i = A.tty.ops.get_char(A.tty)
                            } catch (A) {
                              throw new oI.ErrnoError(29)
                            }
                            if (void 0 === i && 0 === Q)
                              throw new oI.ErrnoError(6)
                            if (null == i) break
                            Q++, (I[g + E] = i)
                          }
                          return Q && (A.node.timestamp = Date.now()), Q
                        },
                        write: function (A, I, g, C, B) {
                          if (!A.tty || !A.tty.ops.put_char)
                            throw new oI.ErrnoError(60)
                          try {
                            for (var Q = 0; Q < C; Q++)
                              A.tty.ops.put_char(A.tty, I[g + Q])
                          } catch (A) {
                            throw new oI.ErrnoError(29)
                          }
                          return C && (A.node.timestamp = Date.now()), Q
                        }
                      },
                      default_tty_ops: {
                        get_char: function (A) {
                          if (!A.input.length) {
                            var I = null
                            if (a) {
                              var g = Buffer.alloc
                                  ? Buffer.alloc(256)
                                  : new Buffer(256),
                                C = 0
                              try {
                                C = G.readSync(
                                  process.stdin.fd,
                                  g,
                                  0,
                                  256,
                                  null
                                )
                              } catch (A) {
                                if (-1 == A.toString().indexOf("EOF")) throw A
                                C = 0
                              }
                              I = C > 0 ? g.slice(0, C).toString("utf-8") : null
                            } else
                              "undefined" != typeof window &&
                              "function" == typeof window.prompt
                                ? null !== (I = window.prompt("Input: ")) &&
                                  (I += "\n")
                                : "function" == typeof readline &&
                                  null !== (I = readline()) &&
                                  (I += "\n")
                            if (!I) return null
                            A.input = _C(I, !0)
                          }
                          return A.input.shift()
                        },
                        put_char: function (A, I) {
                          null === I || 10 === I
                            ? (N(f(A.output, 0)), (A.output = []))
                            : 0 != I && A.output.push(I)
                        },
                        flush: function (A) {
                          A.output &&
                            A.output.length > 0 &&
                            (N(f(A.output, 0)), (A.output = []))
                        }
                      },
                      default_tty1_ops: {
                        put_char: function (A, I) {
                          null === I || 10 === I
                            ? (y(f(A.output, 0)), (A.output = []))
                            : 0 != I && A.output.push(I)
                        },
                        flush: function (A) {
                          A.output &&
                            A.output.length > 0 &&
                            (y(f(A.output, 0)), (A.output = []))
                        }
                      }
                    },
                    iI = {
                      ops_table: null,
                      mount: function (A) {
                        return iI.createNode(null, "/", 16895, 0)
                      },
                      createNode: function (A, I, g, C) {
                        if (oI.isBlkdev(g) || oI.isFIFO(g))
                          throw new oI.ErrnoError(63)
                        iI.ops_table ||
                          (iI.ops_table = {
                            dir: {
                              node: {
                                getattr: iI.node_ops.getattr,
                                setattr: iI.node_ops.setattr,
                                lookup: iI.node_ops.lookup,
                                mknod: iI.node_ops.mknod,
                                rename: iI.node_ops.rename,
                                unlink: iI.node_ops.unlink,
                                rmdir: iI.node_ops.rmdir,
                                readdir: iI.node_ops.readdir,
                                symlink: iI.node_ops.symlink
                              },
                              stream: { llseek: iI.stream_ops.llseek }
                            },
                            file: {
                              node: {
                                getattr: iI.node_ops.getattr,
                                setattr: iI.node_ops.setattr
                              },
                              stream: {
                                llseek: iI.stream_ops.llseek,
                                read: iI.stream_ops.read,
                                write: iI.stream_ops.write,
                                allocate: iI.stream_ops.allocate,
                                mmap: iI.stream_ops.mmap,
                                msync: iI.stream_ops.msync
                              }
                            },
                            link: {
                              node: {
                                getattr: iI.node_ops.getattr,
                                setattr: iI.node_ops.setattr,
                                readlink: iI.node_ops.readlink
                              },
                              stream: {}
                            },
                            chrdev: {
                              node: {
                                getattr: iI.node_ops.getattr,
                                setattr: iI.node_ops.setattr
                              },
                              stream: oI.chrdev_stream_ops
                            }
                          })
                        var B = oI.createNode(A, I, g, C)
                        return (
                          oI.isDir(B.mode)
                            ? ((B.node_ops = iI.ops_table.dir.node),
                              (B.stream_ops = iI.ops_table.dir.stream),
                              (B.contents = {}))
                            : oI.isFile(B.mode)
                            ? ((B.node_ops = iI.ops_table.file.node),
                              (B.stream_ops = iI.ops_table.file.stream),
                              (B.usedBytes = 0),
                              (B.contents = null))
                            : oI.isLink(B.mode)
                            ? ((B.node_ops = iI.ops_table.link.node),
                              (B.stream_ops = iI.ops_table.link.stream))
                            : oI.isChrdev(B.mode) &&
                              ((B.node_ops = iI.ops_table.chrdev.node),
                              (B.stream_ops = iI.ops_table.chrdev.stream)),
                          (B.timestamp = Date.now()),
                          A && (A.contents[I] = B),
                          B
                        )
                      },
                      getFileDataAsRegularArray: function (A) {
                        if (A.contents && A.contents.subarray) {
                          for (var I = [], g = 0; g < A.usedBytes; ++g)
                            I.push(A.contents[g])
                          return I
                        }
                        return A.contents
                      },
                      getFileDataAsTypedArray: function (A) {
                        return A.contents
                          ? A.contents.subarray
                            ? A.contents.subarray(0, A.usedBytes)
                            : new Uint8Array(A.contents)
                          : new Uint8Array(0)
                      },
                      expandFileStorage: function (A, I) {
                        var g = A.contents ? A.contents.length : 0
                        if (!(g >= I)) {
                          ;(I = Math.max(
                            I,
                            (g * (g < 1048576 ? 2 : 1.125)) >>> 0
                          )),
                            0 != g && (I = Math.max(I, 256))
                          var C = A.contents
                          ;(A.contents = new Uint8Array(I)),
                            A.usedBytes > 0 &&
                              A.contents.set(C.subarray(0, A.usedBytes), 0)
                        }
                      },
                      resizeFileStorage: function (A, I) {
                        if (A.usedBytes != I) {
                          if (0 == I)
                            return (A.contents = null), void (A.usedBytes = 0)
                          if (!A.contents || A.contents.subarray) {
                            var g = A.contents
                            return (
                              (A.contents = new Uint8Array(I)),
                              g &&
                                A.contents.set(
                                  g.subarray(0, Math.min(I, A.usedBytes))
                                ),
                              void (A.usedBytes = I)
                            )
                          }
                          if (
                            (A.contents || (A.contents = []),
                            A.contents.length > I)
                          )
                            A.contents.length = I
                          else
                            for (; A.contents.length < I; ) A.contents.push(0)
                          A.usedBytes = I
                        }
                      },
                      node_ops: {
                        getattr: function (A) {
                          var I = {}
                          return (
                            (I.dev = oI.isChrdev(A.mode) ? A.id : 1),
                            (I.ino = A.id),
                            (I.mode = A.mode),
                            (I.nlink = 1),
                            (I.uid = 0),
                            (I.gid = 0),
                            (I.rdev = A.rdev),
                            oI.isDir(A.mode)
                              ? (I.size = 4096)
                              : oI.isFile(A.mode)
                              ? (I.size = A.usedBytes)
                              : oI.isLink(A.mode)
                              ? (I.size = A.link.length)
                              : (I.size = 0),
                            (I.atime = new Date(A.timestamp)),
                            (I.mtime = new Date(A.timestamp)),
                            (I.ctime = new Date(A.timestamp)),
                            (I.blksize = 4096),
                            (I.blocks = Math.ceil(I.size / I.blksize)),
                            I
                          )
                        },
                        setattr: function (A, I) {
                          void 0 !== I.mode && (A.mode = I.mode),
                            void 0 !== I.timestamp &&
                              (A.timestamp = I.timestamp),
                            void 0 !== I.size && iI.resizeFileStorage(A, I.size)
                        },
                        lookup: function (A, I) {
                          throw oI.genericErrors[44]
                        },
                        mknod: function (A, I, g, C) {
                          return iI.createNode(A, I, g, C)
                        },
                        rename: function (A, I, g) {
                          if (oI.isDir(A.mode)) {
                            var C
                            try {
                              C = oI.lookupNode(I, g)
                            } catch (A) {}
                            if (C)
                              for (var B in C.contents)
                                throw new oI.ErrnoError(55)
                          }
                          delete A.parent.contents[A.name],
                            (A.name = g),
                            (I.contents[g] = A),
                            (A.parent = I)
                        },
                        unlink: function (A, I) {
                          delete A.contents[I]
                        },
                        rmdir: function (A, I) {
                          var g = oI.lookupNode(A, I)
                          for (var C in g.contents) throw new oI.ErrnoError(55)
                          delete A.contents[I]
                        },
                        readdir: function (A) {
                          var I = [".", ".."]
                          for (var g in A.contents)
                            A.contents.hasOwnProperty(g) && I.push(g)
                          return I
                        },
                        symlink: function (A, I, g) {
                          var C = iI.createNode(A, I, 41471, 0)
                          return (C.link = g), C
                        },
                        readlink: function (A) {
                          if (!oI.isLink(A.mode)) throw new oI.ErrnoError(28)
                          return A.link
                        }
                      },
                      stream_ops: {
                        read: function (A, I, g, C, B) {
                          var Q = A.node.contents
                          if (B >= A.node.usedBytes) return 0
                          var E = Math.min(A.node.usedBytes - B, C)
                          if (E > 8 && Q.subarray)
                            I.set(Q.subarray(B, B + E), g)
                          else for (var i = 0; i < E; i++) I[g + i] = Q[B + i]
                          return E
                        },
                        write: function (A, I, g, C, B, Q) {
                          if ((I.buffer === j.buffer && (Q = !1), !C)) return 0
                          var E = A.node
                          if (
                            ((E.timestamp = Date.now()),
                            I.subarray && (!E.contents || E.contents.subarray))
                          ) {
                            if (Q)
                              return (
                                (E.contents = I.subarray(g, g + C)),
                                (E.usedBytes = C),
                                C
                              )
                            if (0 === E.usedBytes && 0 === B)
                              return (
                                (E.contents = I.slice(g, g + C)),
                                (E.usedBytes = C),
                                C
                              )
                            if (B + C <= E.usedBytes)
                              return E.contents.set(I.subarray(g, g + C), B), C
                          }
                          if (
                            (iI.expandFileStorage(E, B + C),
                            E.contents.subarray && I.subarray)
                          )
                            E.contents.set(I.subarray(g, g + C), B)
                          else
                            for (var i = 0; i < C; i++)
                              E.contents[B + i] = I[g + i]
                          return (E.usedBytes = Math.max(E.usedBytes, B + C)), C
                        },
                        llseek: function (A, I, g) {
                          var C = I
                          if (
                            (1 === g
                              ? (C += A.position)
                              : 2 === g &&
                                oI.isFile(A.node.mode) &&
                                (C += A.node.usedBytes),
                            C < 0)
                          )
                            throw new oI.ErrnoError(28)
                          return C
                        },
                        allocate: function (A, I, g) {
                          iI.expandFileStorage(A.node, I + g),
                            (A.node.usedBytes = Math.max(
                              A.node.usedBytes,
                              I + g
                            ))
                        },
                        mmap: function (A, I, g, C, B, Q) {
                          if ((K(0 === I), !oI.isFile(A.node.mode)))
                            throw new oI.ErrnoError(43)
                          var E,
                            i,
                            o = A.node.contents
                          if (2 & Q || o.buffer !== v) {
                            if (
                              ((C > 0 || C + g < o.length) &&
                                (o = o.subarray
                                  ? o.subarray(C, C + g)
                                  : Array.prototype.slice.call(o, C, C + g)),
                              (i = !0),
                              !(E = oI.mmapAlloc(g)))
                            )
                              throw new oI.ErrnoError(48)
                            j.set(o, E)
                          } else (i = !1), (E = o.byteOffset)
                          return { ptr: E, allocated: i }
                        },
                        msync: function (A, I, g, C, B) {
                          if (!oI.isFile(A.node.mode))
                            throw new oI.ErrnoError(43)
                          return (
                            2 & B || iI.stream_ops.write(A, I, 0, C, g, !1), 0
                          )
                        }
                      }
                    },
                    oI = {
                      root: null,
                      mounts: [],
                      devices: {},
                      streams: [],
                      nextInode: 1,
                      nameTable: null,
                      currentPath: "/",
                      initialized: !1,
                      ignorePermissions: !0,
                      trackingDelegate: {},
                      tracking: { openFlags: { READ: 1, WRITE: 2 } },
                      ErrnoError: null,
                      genericErrors: {},
                      filesystems: null,
                      syncFSRequests: 0,
                      handleFSError: function (A) {
                        if (!(A instanceof oI.ErrnoError))
                          throw A + " : " + jA()
                        return gI(A.errno)
                      },
                      lookupPath: function (A, I) {
                        if (((I = I || {}), !(A = QI.resolve(oI.cwd(), A))))
                          return { path: "", node: null }
                        var g = { follow_mount: !0, recurse_count: 0 }
                        for (var C in g) void 0 === I[C] && (I[C] = g[C])
                        if (I.recurse_count > 8) throw new oI.ErrnoError(32)
                        for (
                          var B = BI.normalizeArray(
                              A.split("/").filter(function (A) {
                                return !!A
                              }),
                              !1
                            ),
                            Q = oI.root,
                            E = "/",
                            i = 0;
                          i < B.length;
                          i++
                        ) {
                          var o = i === B.length - 1
                          if (o && I.parent) break
                          if (
                            ((Q = oI.lookupNode(Q, B[i])),
                            (E = BI.join2(E, B[i])),
                            oI.isMountpoint(Q) &&
                              (!o || (o && I.follow_mount)) &&
                              (Q = Q.mounted.root),
                            !o || I.follow)
                          )
                            for (var D = 0; oI.isLink(Q.mode); ) {
                              var n = oI.readlink(E)
                              if (
                                ((E = QI.resolve(BI.dirname(E), n)),
                                (Q = oI.lookupPath(E, {
                                  recurse_count: I.recurse_count
                                }).node),
                                D++ > 40)
                              )
                                throw new oI.ErrnoError(32)
                            }
                        }
                        return { path: E, node: Q }
                      },
                      getPath: function (A) {
                        for (var I; ; ) {
                          if (oI.isRoot(A)) {
                            var g = A.mount.mountpoint
                            return I
                              ? "/" !== g[g.length - 1]
                                ? g + "/" + I
                                : g + I
                              : g
                          }
                          ;(I = I ? A.name + "/" + I : A.name), (A = A.parent)
                        }
                      },
                      hashName: function (A, I) {
                        for (var g = 0, C = 0; C < I.length; C++)
                          g = ((g << 5) - g + I.charCodeAt(C)) | 0
                        return ((A + g) >>> 0) % oI.nameTable.length
                      },
                      hashAddNode: function (A) {
                        var I = oI.hashName(A.parent.id, A.name)
                        ;(A.name_next = oI.nameTable[I]), (oI.nameTable[I] = A)
                      },
                      hashRemoveNode: function (A) {
                        var I = oI.hashName(A.parent.id, A.name)
                        if (oI.nameTable[I] === A) oI.nameTable[I] = A.name_next
                        else
                          for (var g = oI.nameTable[I]; g; ) {
                            if (g.name_next === A) {
                              g.name_next = A.name_next
                              break
                            }
                            g = g.name_next
                          }
                      },
                      lookupNode: function (A, I) {
                        var g = oI.mayLookup(A)
                        if (g) throw new oI.ErrnoError(g, A)
                        for (
                          var C = oI.hashName(A.id, I), B = oI.nameTable[C];
                          B;
                          B = B.name_next
                        ) {
                          var Q = B.name
                          if (B.parent.id === A.id && Q === I) return B
                        }
                        return oI.lookup(A, I)
                      },
                      createNode: function (A, I, g, C) {
                        var B = new oI.FSNode(A, I, g, C)
                        return oI.hashAddNode(B), B
                      },
                      destroyNode: function (A) {
                        oI.hashRemoveNode(A)
                      },
                      isRoot: function (A) {
                        return A === A.parent
                      },
                      isMountpoint: function (A) {
                        return !!A.mounted
                      },
                      isFile: function (A) {
                        return 32768 == (61440 & A)
                      },
                      isDir: function (A) {
                        return 16384 == (61440 & A)
                      },
                      isLink: function (A) {
                        return 40960 == (61440 & A)
                      },
                      isChrdev: function (A) {
                        return 8192 == (61440 & A)
                      },
                      isBlkdev: function (A) {
                        return 24576 == (61440 & A)
                      },
                      isFIFO: function (A) {
                        return 4096 == (61440 & A)
                      },
                      isSocket: function (A) {
                        return 49152 == (49152 & A)
                      },
                      flagModes: {
                        r: 0,
                        rs: 1052672,
                        "r+": 2,
                        w: 577,
                        wx: 705,
                        xw: 705,
                        "w+": 578,
                        "wx+": 706,
                        "xw+": 706,
                        a: 1089,
                        ax: 1217,
                        xa: 1217,
                        "a+": 1090,
                        "ax+": 1218,
                        "xa+": 1218
                      },
                      modeStringToFlags: function (A) {
                        var I = oI.flagModes[A]
                        if (void 0 === I)
                          throw new Error("Unknown file open mode: " + A)
                        return I
                      },
                      flagsToPermissionString: function (A) {
                        var I = ["r", "w", "rw"][3 & A]
                        return 512 & A && (I += "w"), I
                      },
                      nodePermissions: function (A, I) {
                        return oI.ignorePermissions ||
                          ((-1 === I.indexOf("r") || 292 & A.mode) &&
                            (-1 === I.indexOf("w") || 146 & A.mode) &&
                            (-1 === I.indexOf("x") || 73 & A.mode))
                          ? 0
                          : 2
                      },
                      mayLookup: function (A) {
                        return (
                          oI.nodePermissions(A, "x") ||
                          (A.node_ops.lookup ? 0 : 2)
                        )
                      },
                      mayCreate: function (A, I) {
                        try {
                          return oI.lookupNode(A, I), 20
                        } catch (A) {}
                        return oI.nodePermissions(A, "wx")
                      },
                      mayDelete: function (A, I, g) {
                        var C
                        try {
                          C = oI.lookupNode(A, I)
                        } catch (A) {
                          return A.errno
                        }
                        var B = oI.nodePermissions(A, "wx")
                        if (B) return B
                        if (g) {
                          if (!oI.isDir(C.mode)) return 54
                          if (oI.isRoot(C) || oI.getPath(C) === oI.cwd())
                            return 10
                        } else if (oI.isDir(C.mode)) return 31
                        return 0
                      },
                      mayOpen: function (A, I) {
                        return A
                          ? oI.isLink(A.mode)
                            ? 32
                            : oI.isDir(A.mode) &&
                              ("r" !== oI.flagsToPermissionString(I) || 512 & I)
                            ? 31
                            : oI.nodePermissions(
                                A,
                                oI.flagsToPermissionString(I)
                              )
                          : 44
                      },
                      MAX_OPEN_FDS: 4096,
                      nextfd: function (A, I) {
                        ;(A = A || 0), (I = I || oI.MAX_OPEN_FDS)
                        for (var g = A; g <= I; g++)
                          if (!oI.streams[g]) return g
                        throw new oI.ErrnoError(33)
                      },
                      getStream: function (A) {
                        return oI.streams[A]
                      },
                      createStream: function (A, I, g) {
                        oI.FSStream ||
                          ((oI.FSStream = function () {}),
                          (oI.FSStream.prototype = {
                            object: {
                              get: function () {
                                return this.node
                              },
                              set: function (A) {
                                this.node = A
                              }
                            },
                            isRead: {
                              get: function () {
                                return 1 != (2097155 & this.flags)
                              }
                            },
                            isWrite: {
                              get: function () {
                                return 0 != (2097155 & this.flags)
                              }
                            },
                            isAppend: {
                              get: function () {
                                return 1024 & this.flags
                              }
                            }
                          }))
                        var C = new oI.FSStream()
                        for (var B in A) C[B] = A[B]
                        A = C
                        var Q = oI.nextfd(I, g)
                        return (A.fd = Q), (oI.streams[Q] = A), A
                      },
                      closeStream: function (A) {
                        oI.streams[A] = null
                      },
                      chrdev_stream_ops: {
                        open: function (A) {
                          var I = oI.getDevice(A.node.rdev)
                          ;(A.stream_ops = I.stream_ops),
                            A.stream_ops.open && A.stream_ops.open(A)
                        },
                        llseek: function () {
                          throw new oI.ErrnoError(70)
                        }
                      },
                      major: function (A) {
                        return A >> 8
                      },
                      minor: function (A) {
                        return 255 & A
                      },
                      makedev: function (A, I) {
                        return (A << 8) | I
                      },
                      registerDevice: function (A, I) {
                        oI.devices[A] = { stream_ops: I }
                      },
                      getDevice: function (A) {
                        return oI.devices[A]
                      },
                      getMounts: function (A) {
                        for (var I = [], g = [A]; g.length; ) {
                          var C = g.pop()
                          I.push(C), g.push.apply(g, C.mounts)
                        }
                        return I
                      },
                      syncfs: function (A, I) {
                        "function" == typeof A && ((I = A), (A = !1)),
                          oI.syncFSRequests++,
                          oI.syncFSRequests > 1 &&
                            y(
                              "warning: " +
                                oI.syncFSRequests +
                                " FS.syncfs operations in flight at once, probably just doing extra work"
                            )
                        var g = oI.getMounts(oI.root.mount),
                          C = 0
                        function B(A) {
                          return oI.syncFSRequests--, I(A)
                        }
                        function Q(A) {
                          if (A)
                            return Q.errored ? void 0 : ((Q.errored = !0), B(A))
                          ++C >= g.length && B(null)
                        }
                        g.forEach(function (I) {
                          if (!I.type.syncfs) return Q(null)
                          I.type.syncfs(I, A, Q)
                        })
                      },
                      mount: function (A, I, g) {
                        var C,
                          B = "/" === g,
                          Q = !g
                        if (B && oI.root) throw new oI.ErrnoError(10)
                        if (!B && !Q) {
                          var E = oI.lookupPath(g, { follow_mount: !1 })
                          if (((g = E.path), (C = E.node), oI.isMountpoint(C)))
                            throw new oI.ErrnoError(10)
                          if (!oI.isDir(C.mode)) throw new oI.ErrnoError(54)
                        }
                        var i = { type: A, opts: I, mountpoint: g, mounts: [] },
                          o = A.mount(i)
                        return (
                          (o.mount = i),
                          (i.root = o),
                          B
                            ? (oI.root = o)
                            : C &&
                              ((C.mounted = i),
                              C.mount && C.mount.mounts.push(i)),
                          o
                        )
                      },
                      unmount: function (A) {
                        var I = oI.lookupPath(A, { follow_mount: !1 })
                        if (!oI.isMountpoint(I.node))
                          throw new oI.ErrnoError(28)
                        var g = I.node,
                          C = g.mounted,
                          B = oI.getMounts(C)
                        Object.keys(oI.nameTable).forEach(function (A) {
                          for (var I = oI.nameTable[A]; I; ) {
                            var g = I.name_next
                            ;-1 !== B.indexOf(I.mount) && oI.destroyNode(I),
                              (I = g)
                          }
                        }),
                          (g.mounted = null)
                        var Q = g.mount.mounts.indexOf(C)
                        g.mount.mounts.splice(Q, 1)
                      },
                      lookup: function (A, I) {
                        return A.node_ops.lookup(A, I)
                      },
                      mknod: function (A, I, g) {
                        var C = oI.lookupPath(A, { parent: !0 }).node,
                          B = BI.basename(A)
                        if (!B || "." === B || ".." === B)
                          throw new oI.ErrnoError(28)
                        var Q = oI.mayCreate(C, B)
                        if (Q) throw new oI.ErrnoError(Q)
                        if (!C.node_ops.mknod) throw new oI.ErrnoError(63)
                        return C.node_ops.mknod(C, B, I, g)
                      },
                      create: function (A, I) {
                        return (
                          (I = void 0 !== I ? I : 438),
                          (I &= 4095),
                          (I |= 32768),
                          oI.mknod(A, I, 0)
                        )
                      },
                      mkdir: function (A, I) {
                        return (
                          (I = void 0 !== I ? I : 511),
                          (I &= 1023),
                          (I |= 16384),
                          oI.mknod(A, I, 0)
                        )
                      },
                      mkdirTree: function (A, I) {
                        for (
                          var g = A.split("/"), C = "", B = 0;
                          B < g.length;
                          ++B
                        )
                          if (g[B]) {
                            C += "/" + g[B]
                            try {
                              oI.mkdir(C, I)
                            } catch (A) {
                              if (20 != A.errno) throw A
                            }
                          }
                      },
                      mkdev: function (A, I, g) {
                        return (
                          void 0 === g && ((g = I), (I = 438)),
                          (I |= 8192),
                          oI.mknod(A, I, g)
                        )
                      },
                      symlink: function (A, I) {
                        if (!QI.resolve(A)) throw new oI.ErrnoError(44)
                        var g = oI.lookupPath(I, { parent: !0 }).node
                        if (!g) throw new oI.ErrnoError(44)
                        var C = BI.basename(I),
                          B = oI.mayCreate(g, C)
                        if (B) throw new oI.ErrnoError(B)
                        if (!g.node_ops.symlink) throw new oI.ErrnoError(63)
                        return g.node_ops.symlink(g, C, A)
                      },
                      rename: function (A, I) {
                        var g,
                          C,
                          B = BI.dirname(A),
                          Q = BI.dirname(I),
                          E = BI.basename(A),
                          i = BI.basename(I)
                        try {
                          ;(g = oI.lookupPath(A, { parent: !0 }).node),
                            (C = oI.lookupPath(I, { parent: !0 }).node)
                        } catch (A) {
                          throw new oI.ErrnoError(10)
                        }
                        if (!g || !C) throw new oI.ErrnoError(44)
                        if (g.mount !== C.mount) throw new oI.ErrnoError(75)
                        var o,
                          D = oI.lookupNode(g, E),
                          n = QI.relative(A, Q)
                        if ("." !== n.charAt(0)) throw new oI.ErrnoError(28)
                        if ("." !== (n = QI.relative(I, B)).charAt(0))
                          throw new oI.ErrnoError(55)
                        try {
                          o = oI.lookupNode(C, i)
                        } catch (A) {}
                        if (D !== o) {
                          var t = oI.isDir(D.mode),
                            a = oI.mayDelete(g, E, t)
                          if (a) throw new oI.ErrnoError(a)
                          if (
                            (a = o ? oI.mayDelete(C, i, t) : oI.mayCreate(C, i))
                          )
                            throw new oI.ErrnoError(a)
                          if (!g.node_ops.rename) throw new oI.ErrnoError(63)
                          if (oI.isMountpoint(D) || (o && oI.isMountpoint(o)))
                            throw new oI.ErrnoError(10)
                          if (C !== g && (a = oI.nodePermissions(g, "w")))
                            throw new oI.ErrnoError(a)
                          try {
                            oI.trackingDelegate.willMovePath &&
                              oI.trackingDelegate.willMovePath(A, I)
                          } catch (g) {
                            y(
                              "FS.trackingDelegate['willMovePath']('" +
                                A +
                                "', '" +
                                I +
                                "') threw an exception: " +
                                g.message
                            )
                          }
                          oI.hashRemoveNode(D)
                          try {
                            g.node_ops.rename(D, C, i)
                          } catch (A) {
                            throw A
                          } finally {
                            oI.hashAddNode(D)
                          }
                          try {
                            oI.trackingDelegate.onMovePath &&
                              oI.trackingDelegate.onMovePath(A, I)
                          } catch (g) {
                            y(
                              "FS.trackingDelegate['onMovePath']('" +
                                A +
                                "', '" +
                                I +
                                "') threw an exception: " +
                                g.message
                            )
                          }
                        }
                      },
                      rmdir: function (A) {
                        var I = oI.lookupPath(A, { parent: !0 }).node,
                          g = BI.basename(A),
                          C = oI.lookupNode(I, g),
                          B = oI.mayDelete(I, g, !0)
                        if (B) throw new oI.ErrnoError(B)
                        if (!I.node_ops.rmdir) throw new oI.ErrnoError(63)
                        if (oI.isMountpoint(C)) throw new oI.ErrnoError(10)
                        try {
                          oI.trackingDelegate.willDeletePath &&
                            oI.trackingDelegate.willDeletePath(A)
                        } catch (I) {
                          y(
                            "FS.trackingDelegate['willDeletePath']('" +
                              A +
                              "') threw an exception: " +
                              I.message
                          )
                        }
                        I.node_ops.rmdir(I, g), oI.destroyNode(C)
                        try {
                          oI.trackingDelegate.onDeletePath &&
                            oI.trackingDelegate.onDeletePath(A)
                        } catch (I) {
                          y(
                            "FS.trackingDelegate['onDeletePath']('" +
                              A +
                              "') threw an exception: " +
                              I.message
                          )
                        }
                      },
                      readdir: function (A) {
                        var I = oI.lookupPath(A, { follow: !0 }).node
                        if (!I.node_ops.readdir) throw new oI.ErrnoError(54)
                        return I.node_ops.readdir(I)
                      },
                      unlink: function (A) {
                        var I = oI.lookupPath(A, { parent: !0 }).node,
                          g = BI.basename(A),
                          C = oI.lookupNode(I, g),
                          B = oI.mayDelete(I, g, !1)
                        if (B) throw new oI.ErrnoError(B)
                        if (!I.node_ops.unlink) throw new oI.ErrnoError(63)
                        if (oI.isMountpoint(C)) throw new oI.ErrnoError(10)
                        try {
                          oI.trackingDelegate.willDeletePath &&
                            oI.trackingDelegate.willDeletePath(A)
                        } catch (I) {
                          y(
                            "FS.trackingDelegate['willDeletePath']('" +
                              A +
                              "') threw an exception: " +
                              I.message
                          )
                        }
                        I.node_ops.unlink(I, g), oI.destroyNode(C)
                        try {
                          oI.trackingDelegate.onDeletePath &&
                            oI.trackingDelegate.onDeletePath(A)
                        } catch (I) {
                          y(
                            "FS.trackingDelegate['onDeletePath']('" +
                              A +
                              "') threw an exception: " +
                              I.message
                          )
                        }
                      },
                      readlink: function (A) {
                        var I = oI.lookupPath(A).node
                        if (!I) throw new oI.ErrnoError(44)
                        if (!I.node_ops.readlink) throw new oI.ErrnoError(28)
                        return QI.resolve(
                          oI.getPath(I.parent),
                          I.node_ops.readlink(I)
                        )
                      },
                      stat: function (A, I) {
                        var g = oI.lookupPath(A, { follow: !I }).node
                        if (!g) throw new oI.ErrnoError(44)
                        if (!g.node_ops.getattr) throw new oI.ErrnoError(63)
                        return g.node_ops.getattr(g)
                      },
                      lstat: function (A) {
                        return oI.stat(A, !0)
                      },
                      chmod: function (A, I, g) {
                        var C
                        if (
                          !(C =
                            "string" == typeof A
                              ? oI.lookupPath(A, { follow: !g }).node
                              : A).node_ops.setattr
                        )
                          throw new oI.ErrnoError(63)
                        C.node_ops.setattr(C, {
                          mode: (4095 & I) | (-4096 & C.mode),
                          timestamp: Date.now()
                        })
                      },
                      lchmod: function (A, I) {
                        oI.chmod(A, I, !0)
                      },
                      fchmod: function (A, I) {
                        var g = oI.getStream(A)
                        if (!g) throw new oI.ErrnoError(8)
                        oI.chmod(g.node, I)
                      },
                      chown: function (A, I, g, C) {
                        var B
                        if (
                          !(B =
                            "string" == typeof A
                              ? oI.lookupPath(A, { follow: !C }).node
                              : A).node_ops.setattr
                        )
                          throw new oI.ErrnoError(63)
                        B.node_ops.setattr(B, { timestamp: Date.now() })
                      },
                      lchown: function (A, I, g) {
                        oI.chown(A, I, g, !0)
                      },
                      fchown: function (A, I, g) {
                        var C = oI.getStream(A)
                        if (!C) throw new oI.ErrnoError(8)
                        oI.chown(C.node, I, g)
                      },
                      truncate: function (A, I) {
                        if (I < 0) throw new oI.ErrnoError(28)
                        var g
                        if (
                          !(g =
                            "string" == typeof A
                              ? oI.lookupPath(A, { follow: !0 }).node
                              : A).node_ops.setattr
                        )
                          throw new oI.ErrnoError(63)
                        if (oI.isDir(g.mode)) throw new oI.ErrnoError(31)
                        if (!oI.isFile(g.mode)) throw new oI.ErrnoError(28)
                        var C = oI.nodePermissions(g, "w")
                        if (C) throw new oI.ErrnoError(C)
                        g.node_ops.setattr(g, {
                          size: I,
                          timestamp: Date.now()
                        })
                      },
                      ftruncate: function (A, I) {
                        var g = oI.getStream(A)
                        if (!g) throw new oI.ErrnoError(8)
                        if (0 == (2097155 & g.flags))
                          throw new oI.ErrnoError(28)
                        oI.truncate(g.node, I)
                      },
                      utime: function (A, I, g) {
                        var C = oI.lookupPath(A, { follow: !0 }).node
                        C.node_ops.setattr(C, { timestamp: Math.max(I, g) })
                      },
                      open: function (A, I, g, C, B) {
                        if ("" === A) throw new oI.ErrnoError(44)
                        var E
                        if (
                          ((g = void 0 === g ? 438 : g),
                          (g =
                            64 &
                            (I =
                              "string" == typeof I
                                ? oI.modeStringToFlags(I)
                                : I)
                              ? (4095 & g) | 32768
                              : 0),
                          "object" == typeof A)
                        )
                          E = A
                        else {
                          A = BI.normalize(A)
                          try {
                            E = oI.lookupPath(A, { follow: !(131072 & I) }).node
                          } catch (A) {}
                        }
                        var i = !1
                        if (64 & I)
                          if (E) {
                            if (128 & I) throw new oI.ErrnoError(20)
                          } else (E = oI.mknod(A, g, 0)), (i = !0)
                        if (!E) throw new oI.ErrnoError(44)
                        if (
                          (oI.isChrdev(E.mode) && (I &= -513),
                          65536 & I && !oI.isDir(E.mode))
                        )
                          throw new oI.ErrnoError(54)
                        if (!i) {
                          var o = oI.mayOpen(E, I)
                          if (o) throw new oI.ErrnoError(o)
                        }
                        512 & I && oI.truncate(E, 0), (I &= -131713)
                        var D = oI.createStream(
                          {
                            node: E,
                            path: oI.getPath(E),
                            flags: I,
                            seekable: !0,
                            position: 0,
                            stream_ops: E.stream_ops,
                            ungotten: [],
                            error: !1
                          },
                          C,
                          B
                        )
                        D.stream_ops.open && D.stream_ops.open(D),
                          !Q.logReadFiles ||
                            1 & I ||
                            (oI.readFiles || (oI.readFiles = {}),
                            A in oI.readFiles ||
                              ((oI.readFiles[A] = 1),
                              y(
                                "FS.trackingDelegate error on read file: " + A
                              )))
                        try {
                          if (oI.trackingDelegate.onOpenFile) {
                            var n = 0
                            1 != (2097155 & I) &&
                              (n |= oI.tracking.openFlags.READ),
                              0 != (2097155 & I) &&
                                (n |= oI.tracking.openFlags.WRITE),
                              oI.trackingDelegate.onOpenFile(A, n)
                          }
                        } catch (I) {
                          y(
                            "FS.trackingDelegate['onOpenFile']('" +
                              A +
                              "', flags) threw an exception: " +
                              I.message
                          )
                        }
                        return D
                      },
                      close: function (A) {
                        if (oI.isClosed(A)) throw new oI.ErrnoError(8)
                        A.getdents && (A.getdents = null)
                        try {
                          A.stream_ops.close && A.stream_ops.close(A)
                        } catch (A) {
                          throw A
                        } finally {
                          oI.closeStream(A.fd)
                        }
                        A.fd = null
                      },
                      isClosed: function (A) {
                        return null === A.fd
                      },
                      llseek: function (A, I, g) {
                        if (oI.isClosed(A)) throw new oI.ErrnoError(8)
                        if (!A.seekable || !A.stream_ops.llseek)
                          throw new oI.ErrnoError(70)
                        if (0 != g && 1 != g && 2 != g)
                          throw new oI.ErrnoError(28)
                        return (
                          (A.position = A.stream_ops.llseek(A, I, g)),
                          (A.ungotten = []),
                          A.position
                        )
                      },
                      read: function (A, I, g, C, B) {
                        if (C < 0 || B < 0) throw new oI.ErrnoError(28)
                        if (oI.isClosed(A)) throw new oI.ErrnoError(8)
                        if (1 == (2097155 & A.flags)) throw new oI.ErrnoError(8)
                        if (oI.isDir(A.node.mode)) throw new oI.ErrnoError(31)
                        if (!A.stream_ops.read) throw new oI.ErrnoError(28)
                        var Q = void 0 !== B
                        if (Q) {
                          if (!A.seekable) throw new oI.ErrnoError(70)
                        } else B = A.position
                        var E = A.stream_ops.read(A, I, g, C, B)
                        return Q || (A.position += E), E
                      },
                      write: function (A, I, g, C, B, Q) {
                        if (C < 0 || B < 0) throw new oI.ErrnoError(28)
                        if (oI.isClosed(A)) throw new oI.ErrnoError(8)
                        if (0 == (2097155 & A.flags)) throw new oI.ErrnoError(8)
                        if (oI.isDir(A.node.mode)) throw new oI.ErrnoError(31)
                        if (!A.stream_ops.write) throw new oI.ErrnoError(28)
                        A.seekable && 1024 & A.flags && oI.llseek(A, 0, 2)
                        var E = void 0 !== B
                        if (E) {
                          if (!A.seekable) throw new oI.ErrnoError(70)
                        } else B = A.position
                        var i = A.stream_ops.write(A, I, g, C, B, Q)
                        E || (A.position += i)
                        try {
                          A.path &&
                            oI.trackingDelegate.onWriteToFile &&
                            oI.trackingDelegate.onWriteToFile(A.path)
                        } catch (I) {
                          y(
                            "FS.trackingDelegate['onWriteToFile']('" +
                              A.path +
                              "') threw an exception: " +
                              I.message
                          )
                        }
                        return i
                      },
                      allocate: function (A, I, g) {
                        if (oI.isClosed(A)) throw new oI.ErrnoError(8)
                        if (I < 0 || g <= 0) throw new oI.ErrnoError(28)
                        if (0 == (2097155 & A.flags)) throw new oI.ErrnoError(8)
                        if (!oI.isFile(A.node.mode) && !oI.isDir(A.node.mode))
                          throw new oI.ErrnoError(43)
                        if (!A.stream_ops.allocate) throw new oI.ErrnoError(138)
                        A.stream_ops.allocate(A, I, g)
                      },
                      mmap: function (A, I, g, C, B, Q) {
                        if (
                          0 != (2 & B) &&
                          0 == (2 & Q) &&
                          2 != (2097155 & A.flags)
                        )
                          throw new oI.ErrnoError(2)
                        if (1 == (2097155 & A.flags)) throw new oI.ErrnoError(2)
                        if (!A.stream_ops.mmap) throw new oI.ErrnoError(43)
                        return A.stream_ops.mmap(A, I, g, C, B, Q)
                      },
                      msync: function (A, I, g, C, B) {
                        return A && A.stream_ops.msync
                          ? A.stream_ops.msync(A, I, g, C, B)
                          : 0
                      },
                      munmap: function (A) {
                        return 0
                      },
                      ioctl: function (A, I, g) {
                        if (!A.stream_ops.ioctl) throw new oI.ErrnoError(59)
                        return A.stream_ops.ioctl(A, I, g)
                      },
                      readFile: function (A, I) {
                        if (
                          (((I = I || {}).flags = I.flags || "r"),
                          (I.encoding = I.encoding || "binary"),
                          "utf8" !== I.encoding && "binary" !== I.encoding)
                        )
                          throw new Error(
                            'Invalid encoding type "' + I.encoding + '"'
                          )
                        var g,
                          C = oI.open(A, I.flags),
                          B = oI.stat(A).size,
                          Q = new Uint8Array(B)
                        return (
                          oI.read(C, Q, 0, B, 0),
                          "utf8" === I.encoding
                            ? (g = f(Q, 0))
                            : "binary" === I.encoding && (g = Q),
                          oI.close(C),
                          g
                        )
                      },
                      writeFile: function (A, I, g) {
                        ;(g = g || {}).flags = g.flags || "w"
                        var C = oI.open(A, g.flags, g.mode)
                        if ("string" == typeof I) {
                          var B = new Uint8Array(m(I) + 1),
                            Q = u(I, B, 0, B.length)
                          oI.write(C, B, 0, Q, void 0, g.canOwn)
                        } else {
                          if (!ArrayBuffer.isView(I))
                            throw new Error("Unsupported data type")
                          oI.write(C, I, 0, I.byteLength, void 0, g.canOwn)
                        }
                        oI.close(C)
                      },
                      cwd: function () {
                        return oI.currentPath
                      },
                      chdir: function (A) {
                        var I = oI.lookupPath(A, { follow: !0 })
                        if (null === I.node) throw new oI.ErrnoError(44)
                        if (!oI.isDir(I.node.mode)) throw new oI.ErrnoError(54)
                        var g = oI.nodePermissions(I.node, "x")
                        if (g) throw new oI.ErrnoError(g)
                        oI.currentPath = I.path
                      },
                      createDefaultDirectories: function () {
                        oI.mkdir("/tmp"),
                          oI.mkdir("/home"),
                          oI.mkdir("/home/web_user")
                      },
                      createDefaultDevices: function () {
                        var A
                        if (
                          (oI.mkdir("/dev"),
                          oI.registerDevice(oI.makedev(1, 3), {
                            read: function () {
                              return 0
                            },
                            write: function (A, I, g, C, B) {
                              return C
                            }
                          }),
                          oI.mkdev("/dev/null", oI.makedev(1, 3)),
                          EI.register(oI.makedev(5, 0), EI.default_tty_ops),
                          EI.register(oI.makedev(6, 0), EI.default_tty1_ops),
                          oI.mkdev("/dev/tty", oI.makedev(5, 0)),
                          oI.mkdev("/dev/tty1", oI.makedev(6, 0)),
                          "object" == typeof crypto &&
                            "function" == typeof crypto.getRandomValues)
                        ) {
                          var I = new Uint8Array(1)
                          A = function () {
                            return crypto.getRandomValues(I), I[0]
                          }
                        } else if (a)
                          try {
                            var C = g(712)
                            A = function () {
                              return C.randomBytes(1)[0]
                            }
                          } catch (A) {}
                        A ||
                          (A = function () {
                            YA("random_device")
                          }),
                          oI.createDevice("/dev", "random", A),
                          oI.createDevice("/dev", "urandom", A),
                          oI.mkdir("/dev/shm"),
                          oI.mkdir("/dev/shm/tmp")
                      },
                      createSpecialDirectories: function () {
                        oI.mkdir("/proc"),
                          oI.mkdir("/proc/self"),
                          oI.mkdir("/proc/self/fd"),
                          oI.mount(
                            {
                              mount: function () {
                                var A = oI.createNode(
                                  "/proc/self",
                                  "fd",
                                  16895,
                                  73
                                )
                                return (
                                  (A.node_ops = {
                                    lookup: function (A, I) {
                                      var g = +I,
                                        C = oI.getStream(g)
                                      if (!C) throw new oI.ErrnoError(8)
                                      var B = {
                                        parent: null,
                                        mount: { mountpoint: "fake" },
                                        node_ops: {
                                          readlink: function () {
                                            return C.path
                                          }
                                        }
                                      }
                                      return (B.parent = B), B
                                    }
                                  }),
                                  A
                                )
                              }
                            },
                            {},
                            "/proc/self/fd"
                          )
                      },
                      createStandardStreams: function () {
                        Q.stdin
                          ? oI.createDevice("/dev", "stdin", Q.stdin)
                          : oI.symlink("/dev/tty", "/dev/stdin"),
                          Q.stdout
                            ? oI.createDevice("/dev", "stdout", null, Q.stdout)
                            : oI.symlink("/dev/tty", "/dev/stdout"),
                          Q.stderr
                            ? oI.createDevice("/dev", "stderr", null, Q.stderr)
                            : oI.symlink("/dev/tty1", "/dev/stderr"),
                          oI.open("/dev/stdin", "r"),
                          oI.open("/dev/stdout", "w"),
                          oI.open("/dev/stderr", "w")
                      },
                      ensureErrnoError: function () {
                        oI.ErrnoError ||
                          ((oI.ErrnoError = function (A, I) {
                            ;(this.node = I),
                              (this.setErrno = function (A) {
                                this.errno = A
                              }),
                              this.setErrno(A),
                              (this.message = "FS error")
                          }),
                          (oI.ErrnoError.prototype = new Error()),
                          (oI.ErrnoError.prototype.constructor = oI.ErrnoError),
                          [44].forEach(function (A) {
                            ;(oI.genericErrors[A] = new oI.ErrnoError(A)),
                              (oI.genericErrors[A].stack =
                                "<generic error, no stack>")
                          }))
                      },
                      staticInit: function () {
                        oI.ensureErrnoError(),
                          (oI.nameTable = new Array(4096)),
                          oI.mount(iI, {}, "/"),
                          oI.createDefaultDirectories(),
                          oI.createDefaultDevices(),
                          oI.createSpecialDirectories(),
                          (oI.filesystems = { MEMFS: iI })
                      },
                      init: function (A, I, g) {
                        ;(oI.init.initialized = !0),
                          oI.ensureErrnoError(),
                          (Q.stdin = A || Q.stdin),
                          (Q.stdout = I || Q.stdout),
                          (Q.stderr = g || Q.stderr),
                          oI.createStandardStreams()
                      },
                      quit: function () {
                        oI.init.initialized = !1
                        var A = Q._fflush
                        A && A(0)
                        for (var I = 0; I < oI.streams.length; I++) {
                          var g = oI.streams[I]
                          g && oI.close(g)
                        }
                      },
                      getMode: function (A, I) {
                        var g = 0
                        return A && (g |= 365), I && (g |= 146), g
                      },
                      joinPath: function (A, I) {
                        var g = BI.join.apply(null, A)
                        return I && "/" == g[0] && (g = g.substr(1)), g
                      },
                      absolutePath: function (A, I) {
                        return QI.resolve(I, A)
                      },
                      standardizePath: function (A) {
                        return BI.normalize(A)
                      },
                      findObject: function (A, I) {
                        var g = oI.analyzePath(A, I)
                        return g.exists ? g.object : (gI(g.error), null)
                      },
                      analyzePath: function (A, I) {
                        try {
                          A = (C = oI.lookupPath(A, { follow: !I })).path
                        } catch (A) {}
                        var g = {
                          isRoot: !1,
                          exists: !1,
                          error: 0,
                          name: null,
                          path: null,
                          object: null,
                          parentExists: !1,
                          parentPath: null,
                          parentObject: null
                        }
                        try {
                          var C = oI.lookupPath(A, { parent: !0 })
                          ;(g.parentExists = !0),
                            (g.parentPath = C.path),
                            (g.parentObject = C.node),
                            (g.name = BI.basename(A)),
                            (C = oI.lookupPath(A, { follow: !I })),
                            (g.exists = !0),
                            (g.path = C.path),
                            (g.object = C.node),
                            (g.name = C.node.name),
                            (g.isRoot = "/" === C.path)
                        } catch (A) {
                          g.error = A.errno
                        }
                        return g
                      },
                      createFolder: function (A, I, g, C) {
                        var B = BI.join2(
                            "string" == typeof A ? A : oI.getPath(A),
                            I
                          ),
                          Q = oI.getMode(g, C)
                        return oI.mkdir(B, Q)
                      },
                      createPath: function (A, I, g, C) {
                        A = "string" == typeof A ? A : oI.getPath(A)
                        for (var B = I.split("/").reverse(); B.length; ) {
                          var Q = B.pop()
                          if (Q) {
                            var E = BI.join2(A, Q)
                            try {
                              oI.mkdir(E)
                            } catch (A) {}
                            A = E
                          }
                        }
                        return E
                      },
                      createFile: function (A, I, g, C, B) {
                        var Q = BI.join2(
                            "string" == typeof A ? A : oI.getPath(A),
                            I
                          ),
                          E = oI.getMode(C, B)
                        return oI.create(Q, E)
                      },
                      createDataFile: function (A, I, g, C, B, Q) {
                        var E = I
                            ? BI.join2(
                                "string" == typeof A ? A : oI.getPath(A),
                                I
                              )
                            : A,
                          i = oI.getMode(C, B),
                          o = oI.create(E, i)
                        if (g) {
                          if ("string" == typeof g) {
                            for (
                              var D = new Array(g.length), n = 0, t = g.length;
                              n < t;
                              ++n
                            )
                              D[n] = g.charCodeAt(n)
                            g = D
                          }
                          oI.chmod(o, 146 | i)
                          var a = oI.open(o, "w")
                          oI.write(a, g, 0, g.length, 0, Q),
                            oI.close(a),
                            oI.chmod(o, i)
                        }
                        return o
                      },
                      createDevice: function (A, I, g, C) {
                        var B = BI.join2(
                            "string" == typeof A ? A : oI.getPath(A),
                            I
                          ),
                          Q = oI.getMode(!!g, !!C)
                        oI.createDevice.major || (oI.createDevice.major = 64)
                        var E = oI.makedev(oI.createDevice.major++, 0)
                        return (
                          oI.registerDevice(E, {
                            open: function (A) {
                              A.seekable = !1
                            },
                            close: function (A) {
                              C && C.buffer && C.buffer.length && C(10)
                            },
                            read: function (A, I, C, B, Q) {
                              for (var E = 0, i = 0; i < B; i++) {
                                var o
                                try {
                                  o = g()
                                } catch (A) {
                                  throw new oI.ErrnoError(29)
                                }
                                if (void 0 === o && 0 === E)
                                  throw new oI.ErrnoError(6)
                                if (null == o) break
                                E++, (I[C + i] = o)
                              }
                              return E && (A.node.timestamp = Date.now()), E
                            },
                            write: function (A, I, g, B, Q) {
                              for (var E = 0; E < B; E++)
                                try {
                                  C(I[g + E])
                                } catch (A) {
                                  throw new oI.ErrnoError(29)
                                }
                              return B && (A.node.timestamp = Date.now()), E
                            }
                          }),
                          oI.mkdev(B, Q, E)
                        )
                      },
                      createLink: function (A, I, g, C, B) {
                        var Q = BI.join2(
                          "string" == typeof A ? A : oI.getPath(A),
                          I
                        )
                        return oI.symlink(g, Q)
                      },
                      forceLoadFile: function (A) {
                        if (A.isDevice || A.isFolder || A.link || A.contents)
                          return !0
                        var I = !0
                        if ("undefined" != typeof XMLHttpRequest)
                          throw new Error(
                            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                          )
                        if (!w)
                          throw new Error(
                            "Cannot load without read() or XMLHttpRequest."
                          )
                        try {
                          ;(A.contents = _C(w(A.url), !0)),
                            (A.usedBytes = A.contents.length)
                        } catch (A) {
                          I = !1
                        }
                        return I || gI(29), I
                      },
                      createLazyFile: function (A, I, g, C, B) {
                        function Q() {
                          ;(this.lengthKnown = !1), (this.chunks = [])
                        }
                        if (
                          ((Q.prototype.get = function (A) {
                            if (!(A > this.length - 1 || A < 0)) {
                              var I = A % this.chunkSize,
                                g = (A / this.chunkSize) | 0
                              return this.getter(g)[I]
                            }
                          }),
                          (Q.prototype.setDataGetter = function (A) {
                            this.getter = A
                          }),
                          (Q.prototype.cacheLength = function () {
                            var A = new XMLHttpRequest()
                            if (
                              (A.open("HEAD", g, !1),
                              A.send(null),
                              !(
                                (A.status >= 200 && A.status < 300) ||
                                304 === A.status
                              ))
                            )
                              throw new Error(
                                "Couldn't load " + g + ". Status: " + A.status
                              )
                            var I,
                              C = Number(A.getResponseHeader("Content-length")),
                              B =
                                (I = A.getResponseHeader("Accept-Ranges")) &&
                                "bytes" === I,
                              Q =
                                (I = A.getResponseHeader("Content-Encoding")) &&
                                "gzip" === I,
                              E = 1048576
                            B || (E = C)
                            var i = this
                            i.setDataGetter(function (A) {
                              var I = A * E,
                                B = (A + 1) * E - 1
                              if (
                                ((B = Math.min(B, C - 1)),
                                void 0 === i.chunks[A] &&
                                  (i.chunks[A] = (function (A, I) {
                                    if (A > I)
                                      throw new Error(
                                        "invalid range (" +
                                          A +
                                          ", " +
                                          I +
                                          ") or no bytes requested!"
                                      )
                                    if (I > C - 1)
                                      throw new Error(
                                        "only " +
                                          C +
                                          " bytes available! programmer error!"
                                      )
                                    var B = new XMLHttpRequest()
                                    if (
                                      (B.open("GET", g, !1),
                                      C !== E &&
                                        B.setRequestHeader(
                                          "Range",
                                          "bytes=" + A + "-" + I
                                        ),
                                      "undefined" != typeof Uint8Array &&
                                        (B.responseType = "arraybuffer"),
                                      B.overrideMimeType &&
                                        B.overrideMimeType(
                                          "text/plain; charset=x-user-defined"
                                        ),
                                      B.send(null),
                                      !(
                                        (B.status >= 200 && B.status < 300) ||
                                        304 === B.status
                                      ))
                                    )
                                      throw new Error(
                                        "Couldn't load " +
                                          g +
                                          ". Status: " +
                                          B.status
                                      )
                                    return void 0 !== B.response
                                      ? new Uint8Array(B.response || [])
                                      : _C(B.responseText || "", !0)
                                  })(I, B)),
                                void 0 === i.chunks[A])
                              )
                                throw new Error("doXHR failed!")
                              return i.chunks[A]
                            }),
                              (!Q && C) ||
                                ((E = C = 1),
                                (C = this.getter(0).length),
                                (E = C),
                                N(
                                  "LazyFiles on gzip forces download of the whole file when length is accessed"
                                )),
                              (this._length = C),
                              (this._chunkSize = E),
                              (this.lengthKnown = !0)
                          }),
                          "undefined" != typeof XMLHttpRequest)
                        ) {
                          if (!t)
                            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"
                          var E = new Q()
                          Object.defineProperties(E, {
                            length: {
                              get: function () {
                                return (
                                  this.lengthKnown || this.cacheLength(),
                                  this._length
                                )
                              }
                            },
                            chunkSize: {
                              get: function () {
                                return (
                                  this.lengthKnown || this.cacheLength(),
                                  this._chunkSize
                                )
                              }
                            }
                          })
                          var i = { isDevice: !1, contents: E }
                        } else i = { isDevice: !1, url: g }
                        var o = oI.createFile(A, I, i, C, B)
                        i.contents
                          ? (o.contents = i.contents)
                          : i.url && ((o.contents = null), (o.url = i.url)),
                          Object.defineProperties(o, {
                            usedBytes: {
                              get: function () {
                                return this.contents.length
                              }
                            }
                          })
                        var D = {}
                        return (
                          Object.keys(o.stream_ops).forEach(function (A) {
                            var I = o.stream_ops[A]
                            D[A] = function () {
                              if (!oI.forceLoadFile(o))
                                throw new oI.ErrnoError(29)
                              return I.apply(null, arguments)
                            }
                          }),
                          (D.read = function (A, I, g, C, B) {
                            if (!oI.forceLoadFile(o))
                              throw new oI.ErrnoError(29)
                            var Q = A.node.contents
                            if (B >= Q.length) return 0
                            var E = Math.min(Q.length - B, C)
                            if (Q.slice)
                              for (var i = 0; i < E; i++) I[g + i] = Q[B + i]
                            else for (i = 0; i < E; i++) I[g + i] = Q.get(B + i)
                            return E
                          }),
                          (o.stream_ops = D),
                          o
                        )
                      },
                      createPreloadedFile: function (
                        A,
                        I,
                        g,
                        C,
                        B,
                        E,
                        i,
                        o,
                        D,
                        n
                      ) {
                        WA.init()
                        var t = I ? QI.resolve(BI.join2(A, I)) : A
                        function a(g) {
                          function a(g) {
                            n && n(),
                              o || oI.createDataFile(A, I, g, C, B, D),
                              E && E(),
                              LA()
                          }
                          var s = !1
                          Q.preloadPlugins.forEach(function (A) {
                            s ||
                              (A.canHandle(t) &&
                                (A.handle(g, t, a, function () {
                                  i && i(), LA()
                                }),
                                (s = !0)))
                          }),
                            s || a(g)
                        }
                        lA(),
                          "string" == typeof g
                            ? WA.asyncLoad(
                                g,
                                function (A) {
                                  a(A)
                                },
                                i
                              )
                            : a(g)
                      },
                      indexedDB: function () {
                        return (
                          window.indexedDB ||
                          window.mozIndexedDB ||
                          window.webkitIndexedDB ||
                          window.msIndexedDB
                        )
                      },
                      DB_NAME: function () {
                        return "EM_FS_" + window.location.pathname
                      },
                      DB_VERSION: 20,
                      DB_STORE_NAME: "FILE_DATA",
                      saveFilesToDB: function (A, I, g) {
                        ;(I = I || function () {}), (g = g || function () {})
                        var C = oI.indexedDB()
                        try {
                          var B = C.open(oI.DB_NAME(), oI.DB_VERSION)
                        } catch (A) {
                          return g(A)
                        }
                        ;(B.onupgradeneeded = function () {
                          N("creating db"),
                            B.result.createObjectStore(oI.DB_STORE_NAME)
                        }),
                          (B.onsuccess = function () {
                            var C = B.result.transaction(
                                [oI.DB_STORE_NAME],
                                "readwrite"
                              ),
                              Q = C.objectStore(oI.DB_STORE_NAME),
                              E = 0,
                              i = 0,
                              o = A.length
                            function D() {
                              0 == i ? I() : g()
                            }
                            A.forEach(function (A) {
                              var I = Q.put(
                                oI.analyzePath(A).object.contents,
                                A
                              )
                              ;(I.onsuccess = function () {
                                ++E + i == o && D()
                              }),
                                (I.onerror = function () {
                                  i++, E + i == o && D()
                                })
                            }),
                              (C.onerror = g)
                          }),
                          (B.onerror = g)
                      },
                      loadFilesFromDB: function (A, I, g) {
                        ;(I = I || function () {}), (g = g || function () {})
                        var C = oI.indexedDB()
                        try {
                          var B = C.open(oI.DB_NAME(), oI.DB_VERSION)
                        } catch (A) {
                          return g(A)
                        }
                        ;(B.onupgradeneeded = g),
                          (B.onsuccess = function () {
                            var C = B.result
                            try {
                              var Q = C.transaction(
                                [oI.DB_STORE_NAME],
                                "readonly"
                              )
                            } catch (A) {
                              return void g(A)
                            }
                            var E = Q.objectStore(oI.DB_STORE_NAME),
                              i = 0,
                              o = 0,
                              D = A.length
                            function n() {
                              0 == o ? I() : g()
                            }
                            A.forEach(function (A) {
                              var I = E.get(A)
                              ;(I.onsuccess = function () {
                                oI.analyzePath(A).exists && oI.unlink(A),
                                  oI.createDataFile(
                                    BI.dirname(A),
                                    BI.basename(A),
                                    I.result,
                                    !0,
                                    !0,
                                    !0
                                  ),
                                  ++i + o == D && n()
                              }),
                                (I.onerror = function () {
                                  o++, i + o == D && n()
                                })
                            }),
                              (Q.onerror = g)
                          }),
                          (B.onerror = g)
                      },
                      mmapAlloc: function (A) {
                        for (var I = S(A, 16384), g = EB(I); A < I; )
                          j[g + A++] = 0
                        return g
                      }
                    },
                    DI = {
                      mappings: {},
                      DEFAULT_POLLMASK: 5,
                      umask: 511,
                      calculateAt: function (A, I) {
                        if ("/" !== I[0]) {
                          var g
                          if (-100 === A) g = oI.cwd()
                          else {
                            var C = oI.getStream(A)
                            if (!C) throw new oI.ErrnoError(8)
                            g = C.path
                          }
                          I = BI.join2(g, I)
                        }
                        return I
                      },
                      doStat: function (A, I, g) {
                        try {
                          var C = A(I)
                        } catch (A) {
                          if (
                            A &&
                            A.node &&
                            BI.normalize(I) !== BI.normalize(oI.getPath(A.node))
                          )
                            return -54
                          throw A
                        }
                        return (
                          (AA[g >> 2] = C.dev),
                          (AA[(g + 4) >> 2] = 0),
                          (AA[(g + 8) >> 2] = C.ino),
                          (AA[(g + 12) >> 2] = C.mode),
                          (AA[(g + 16) >> 2] = C.nlink),
                          (AA[(g + 20) >> 2] = C.uid),
                          (AA[(g + 24) >> 2] = C.gid),
                          (AA[(g + 28) >> 2] = C.rdev),
                          (AA[(g + 32) >> 2] = 0),
                          (pA = [
                            C.size >>> 0,
                            ((uA = C.size),
                            +yA(uA) >= 1
                              ? uA > 0
                                ? (0 | SA(+UA(uA / 4294967296), 4294967295)) >>>
                                  0
                                : ~~+cA((uA - +(~~uA >>> 0)) / 4294967296) >>> 0
                              : 0)
                          ]),
                          (AA[(g + 40) >> 2] = pA[0]),
                          (AA[(g + 44) >> 2] = pA[1]),
                          (AA[(g + 48) >> 2] = 4096),
                          (AA[(g + 52) >> 2] = C.blocks),
                          (AA[(g + 56) >> 2] = (C.atime.getTime() / 1e3) | 0),
                          (AA[(g + 60) >> 2] = 0),
                          (AA[(g + 64) >> 2] = (C.mtime.getTime() / 1e3) | 0),
                          (AA[(g + 68) >> 2] = 0),
                          (AA[(g + 72) >> 2] = (C.ctime.getTime() / 1e3) | 0),
                          (AA[(g + 76) >> 2] = 0),
                          (pA = [
                            C.ino >>> 0,
                            ((uA = C.ino),
                            +yA(uA) >= 1
                              ? uA > 0
                                ? (0 | SA(+UA(uA / 4294967296), 4294967295)) >>>
                                  0
                                : ~~+cA((uA - +(~~uA >>> 0)) / 4294967296) >>> 0
                              : 0)
                          ]),
                          (AA[(g + 80) >> 2] = pA[0]),
                          (AA[(g + 84) >> 2] = pA[1]),
                          0
                        )
                      },
                      doMsync: function (A, I, g, C, B) {
                        var Q = z.slice(A, A + g)
                        oI.msync(I, Q, B, g, C)
                      },
                      doMkdir: function (A, I) {
                        return (
                          "/" === (A = BI.normalize(A))[A.length - 1] &&
                            (A = A.substr(0, A.length - 1)),
                          oI.mkdir(A, I, 0),
                          0
                        )
                      },
                      doMknod: function (A, I, g) {
                        switch (61440 & I) {
                          case 32768:
                          case 8192:
                          case 24576:
                          case 4096:
                          case 49152:
                            break
                          default:
                            return -28
                        }
                        return oI.mknod(A, I, g), 0
                      },
                      doReadlink: function (A, I, g) {
                        if (g <= 0) return -28
                        var C = oI.readlink(A),
                          B = Math.min(g, m(C)),
                          Q = j[I + B]
                        return p(C, I, g + 1), (j[I + B] = Q), B
                      },
                      doAccess: function (A, I) {
                        if (-8 & I) return -28
                        var g
                        if (!(g = oI.lookupPath(A, { follow: !0 }).node))
                          return -44
                        var C = ""
                        return (
                          4 & I && (C += "r"),
                          2 & I && (C += "w"),
                          1 & I && (C += "x"),
                          C && oI.nodePermissions(g, C) ? -2 : 0
                        )
                      },
                      doDup: function (A, I, g) {
                        var C = oI.getStream(g)
                        return C && oI.close(C), oI.open(A, I, 0, g, g).fd
                      },
                      doReadv: function (A, I, g, C) {
                        for (var B = 0, Q = 0; Q < g; Q++) {
                          var E = AA[(I + 8 * Q) >> 2],
                            i = AA[(I + (8 * Q + 4)) >> 2],
                            o = oI.read(A, j, E, i, C)
                          if (o < 0) return -1
                          if (((B += o), o < i)) break
                        }
                        return B
                      },
                      doWritev: function (A, I, g, C) {
                        for (var B = 0, Q = 0; Q < g; Q++) {
                          var E = AA[(I + 8 * Q) >> 2],
                            i = AA[(I + (8 * Q + 4)) >> 2],
                            o = oI.write(A, j, E, i, C)
                          if (o < 0) return -1
                          B += o
                        }
                        return B
                      },
                      varargs: void 0,
                      get: function () {
                        return (DI.varargs += 4), AA[(DI.varargs - 4) >> 2]
                      },
                      getStr: function (A) {
                        return H(A)
                      },
                      getStreamFromFD: function (A) {
                        var I = oI.getStream(A)
                        if (!I) throw new oI.ErrnoError(8)
                        return I
                      },
                      get64: function (A, I) {
                        return A
                      }
                    }
                  function nI(A, I) {
                    if (-1 == (0 | A) || 0 === I) return -28
                    var g = DI.mappings[A]
                    if (!g) return 0
                    if (I === g.len) {
                      var C = oI.getStream(g.fd)
                      2 & g.prot && DI.doMsync(A, C, I, g.flags, g.offset),
                        oI.munmap(C),
                        (DI.mappings[A] = null),
                        g.allocated && iB(g.malloc)
                    }
                    return 0
                  }
                  function tI(A, I) {
                    try {
                      return nI(A, I)
                    } catch (A) {
                      return (
                        (void 0 !== oI && A instanceof oI.ErrnoError) || YA(A),
                        -A.errno
                      )
                    }
                  }
                  var aI = {}
                  function sI(A) {
                    for (; A.length; ) {
                      var I = A.pop()
                      A.pop()(I)
                    }
                  }
                  function wI(A) {
                    return this.fromWireType(IA[A >> 2])
                  }
                  var hI = {},
                    eI = {},
                    GI = {},
                    FI = 48,
                    RI = 57
                  function rI(A) {
                    if (void 0 === A) return "_unknown"
                    var I = (A = A.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)
                    return I >= FI && I <= RI ? "_" + A : A
                  }
                  function NI(A, I) {
                    return (
                      (A = rI(A)),
                      new Function(
                        "body",
                        "return function " +
                          A +
                          '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
                      )(I)
                    )
                  }
                  function yI(A, I) {
                    var g = NI(I, function (A) {
                      ;(this.name = I), (this.message = A)
                      var g = new Error(A).stack
                      void 0 !== g &&
                        (this.stack =
                          this.toString() +
                          "\n" +
                          g.replace(/^Error(:[^\n]*)?\n/, ""))
                    })
                    return (
                      (g.prototype = Object.create(A.prototype)),
                      (g.prototype.constructor = g),
                      (g.prototype.toString = function () {
                        return void 0 === this.message
                          ? this.name
                          : this.name + ": " + this.message
                      }),
                      g
                    )
                  }
                  var cI = void 0
                  function UI(A) {
                    throw new cI(A)
                  }
                  function SI(A, I, g) {
                    function C(I) {
                      var C = g(I)
                      C.length !== A.length &&
                        UI("Mismatched type converter count")
                      for (var B = 0; B < A.length; ++B) fI(A[B], C[B])
                    }
                    A.forEach(function (A) {
                      GI[A] = I
                    })
                    var B = new Array(I.length),
                      Q = [],
                      E = 0
                    I.forEach(function (A, I) {
                      eI.hasOwnProperty(A)
                        ? (B[I] = eI[A])
                        : (Q.push(A),
                          hI.hasOwnProperty(A) || (hI[A] = []),
                          hI[A].push(function () {
                            ;(B[I] = eI[A]), ++E === Q.length && C(B)
                          }))
                    }),
                      0 === Q.length && C(B)
                  }
                  function MI(A) {
                    var I = aI[A]
                    delete aI[A]
                    var g = I.elements,
                      C = g.length,
                      B = g
                        .map(function (A) {
                          return A.getterReturnType
                        })
                        .concat(
                          g.map(function (A) {
                            return A.setterArgumentType
                          })
                        ),
                      Q = I.rawConstructor,
                      E = I.rawDestructor
                    SI([A], B, function (A) {
                      return (
                        g.forEach(function (I, g) {
                          var B = A[g],
                            Q = I.getter,
                            E = I.getterContext,
                            i = A[g + C],
                            o = I.setter,
                            D = I.setterContext
                          ;(I.read = function (A) {
                            return B.fromWireType(Q(E, A))
                          }),
                            (I.write = function (A, I) {
                              var g = []
                              o(D, A, i.toWireType(g, I)), sI(g)
                            })
                        }),
                        [
                          {
                            name: I.name,
                            fromWireType: function (A) {
                              for (var I = new Array(C), B = 0; B < C; ++B)
                                I[B] = g[B].read(A)
                              return E(A), I
                            },
                            toWireType: function (A, B) {
                              if (C !== B.length)
                                throw new TypeError(
                                  "Incorrect number of tuple elements for " +
                                    I.name +
                                    ": expected=" +
                                    C +
                                    ", actual=" +
                                    B.length
                                )
                              for (var i = Q(), o = 0; o < C; ++o)
                                g[o].write(i, B[o])
                              return null !== A && A.push(E, i), i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: wI,
                            destructorFunction: E
                          }
                        ]
                      )
                    })
                  }
                  var kI = {}
                  function JI(A) {
                    var I = kI[A]
                    delete kI[A]
                    var g = I.rawConstructor,
                      C = I.rawDestructor,
                      B = I.fields
                    SI(
                      [A],
                      B.map(function (A) {
                        return A.getterReturnType
                      }).concat(
                        B.map(function (A) {
                          return A.setterArgumentType
                        })
                      ),
                      function (A) {
                        var Q = {}
                        return (
                          B.forEach(function (I, g) {
                            var C = I.fieldName,
                              E = A[g],
                              i = I.getter,
                              o = I.getterContext,
                              D = A[g + B.length],
                              n = I.setter,
                              t = I.setterContext
                            Q[C] = {
                              read: function (A) {
                                return E.fromWireType(i(o, A))
                              },
                              write: function (A, I) {
                                var g = []
                                n(t, A, D.toWireType(g, I)), sI(g)
                              }
                            }
                          }),
                          [
                            {
                              name: I.name,
                              fromWireType: function (A) {
                                var I = {}
                                for (var g in Q) I[g] = Q[g].read(A)
                                return C(A), I
                              },
                              toWireType: function (A, I) {
                                for (var B in Q)
                                  if (!(B in I))
                                    throw new TypeError(
                                      'Missing field:  "' + B + '"'
                                    )
                                var E = g()
                                for (B in Q) Q[B].write(E, I[B])
                                return null !== A && A.push(C, E), E
                              },
                              argPackAdvance: 8,
                              readValueFromPointer: wI,
                              destructorFunction: C
                            }
                          ]
                        )
                      }
                    )
                  }
                  function lI(A) {
                    switch (A) {
                      case 1:
                        return 0
                      case 2:
                        return 1
                      case 4:
                        return 2
                      case 8:
                        return 3
                      default:
                        throw new TypeError("Unknown type size: " + A)
                    }
                  }
                  function LI() {
                    for (var A = new Array(256), I = 0; I < 256; ++I)
                      A[I] = String.fromCharCode(I)
                    YI = A
                  }
                  var YI = void 0
                  function KI(A) {
                    for (var I = "", g = A; z[g]; ) I += YI[z[g++]]
                    return I
                  }
                  var dI = void 0
                  function qI(A) {
                    throw new dI(A)
                  }
                  function fI(A, I, g) {
                    if (((g = g || {}), !("argPackAdvance" in I)))
                      throw new TypeError(
                        "registerType registeredInstance requires argPackAdvance"
                      )
                    var C = I.name
                    if (
                      (A ||
                        qI(
                          'type "' +
                            C +
                            '" must have a positive integer typeid pointer'
                        ),
                      eI.hasOwnProperty(A))
                    ) {
                      if (g.ignoreDuplicateRegistrations) return
                      qI("Cannot register type '" + C + "' twice")
                    }
                    if (((eI[A] = I), delete GI[A], hI.hasOwnProperty(A))) {
                      var B = hI[A]
                      delete hI[A],
                        B.forEach(function (A) {
                          A()
                        })
                    }
                  }
                  function HI(A, I, g, C, B) {
                    var Q = lI(g)
                    fI(A, {
                      name: (I = KI(I)),
                      fromWireType: function (A) {
                        return !!A
                      },
                      toWireType: function (A, I) {
                        return I ? C : B
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: function (A) {
                        var C
                        if (1 === g) C = j
                        else if (2 === g) C = _
                        else {
                          if (4 !== g)
                            throw new TypeError(
                              "Unknown boolean type size: " + I
                            )
                          C = AA
                        }
                        return this.fromWireType(C[A >> Q])
                      },
                      destructorFunction: null
                    })
                  }
                  function uI(A) {
                    if (!(this instanceof $I)) return !1
                    if (!(A instanceof $I)) return !1
                    for (
                      var I = this.$$.ptrType.registeredClass,
                        g = this.$$.ptr,
                        C = A.$$.ptrType.registeredClass,
                        B = A.$$.ptr;
                      I.baseClass;

                    )
                      (g = I.upcast(g)), (I = I.baseClass)
                    for (; C.baseClass; ) (B = C.upcast(B)), (C = C.baseClass)
                    return I === C && g === B
                  }
                  function pI(A) {
                    return {
                      count: A.count,
                      deleteScheduled: A.deleteScheduled,
                      preservePointerOnDelete: A.preservePointerOnDelete,
                      ptr: A.ptr,
                      ptrType: A.ptrType,
                      smartPtr: A.smartPtr,
                      smartPtrType: A.smartPtrType
                    }
                  }
                  function mI(A) {
                    qI(
                      A.$$.ptrType.registeredClass.name +
                        " instance already deleted"
                    )
                  }
                  var xI = !1
                  function VI(A) {}
                  function TI(A) {
                    A.smartPtr
                      ? A.smartPtrType.rawDestructor(A.smartPtr)
                      : A.ptrType.registeredClass.rawDestructor(A.ptr)
                  }
                  function bI(A) {
                    ;(A.count.value -= 1), 0 === A.count.value && TI(A)
                  }
                  function XI(A) {
                    return "undefined" == typeof FinalizationGroup
                      ? ((XI = function (A) {
                          return A
                        }),
                        A)
                      : ((xI = new FinalizationGroup(function (A) {
                          for (var I = A.next(); !I.done; I = A.next()) {
                            var g = I.value
                            g.ptr
                              ? bI(g)
                              : console.warn("object already deleted: " + g.ptr)
                          }
                        })),
                        (XI = function (A) {
                          return xI.register(A, A.$$, A.$$), A
                        }),
                        (VI = function (A) {
                          xI.unregister(A.$$)
                        }),
                        XI(A))
                  }
                  function PI() {
                    if (
                      (this.$$.ptr || mI(this), this.$$.preservePointerOnDelete)
                    )
                      return (this.$$.count.value += 1), this
                    var A = XI(
                      Object.create(Object.getPrototypeOf(this), {
                        $$: { value: pI(this.$$) }
                      })
                    )
                    return (
                      (A.$$.count.value += 1), (A.$$.deleteScheduled = !1), A
                    )
                  }
                  function WI() {
                    this.$$.ptr || mI(this),
                      this.$$.deleteScheduled &&
                        !this.$$.preservePointerOnDelete &&
                        qI("Object already scheduled for deletion"),
                      VI(this),
                      bI(this.$$),
                      this.$$.preservePointerOnDelete ||
                        ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0))
                  }
                  function OI() {
                    return !this.$$.ptr
                  }
                  var ZI = void 0,
                    vI = []
                  function jI() {
                    for (; vI.length; ) {
                      var A = vI.pop()
                      ;(A.$$.deleteScheduled = !1), A.delete()
                    }
                  }
                  function zI() {
                    return (
                      this.$$.ptr || mI(this),
                      this.$$.deleteScheduled &&
                        !this.$$.preservePointerOnDelete &&
                        qI("Object already scheduled for deletion"),
                      vI.push(this),
                      1 === vI.length && ZI && ZI(jI),
                      (this.$$.deleteScheduled = !0),
                      this
                    )
                  }
                  function _I() {
                    ;($I.prototype.isAliasOf = uI),
                      ($I.prototype.clone = PI),
                      ($I.prototype.delete = WI),
                      ($I.prototype.isDeleted = OI),
                      ($I.prototype.deleteLater = zI)
                  }
                  function $I() {}
                  var Ag = {}
                  function Ig(A, I, g) {
                    if (void 0 === A[I].overloadTable) {
                      var C = A[I]
                      ;(A[I] = function () {
                        return (
                          A[I].overloadTable.hasOwnProperty(arguments.length) ||
                            qI(
                              "Function '" +
                                g +
                                "' called with an invalid number of arguments (" +
                                arguments.length +
                                ") - expects one of (" +
                                A[I].overloadTable +
                                ")!"
                            ),
                          A[I].overloadTable[arguments.length].apply(
                            this,
                            arguments
                          )
                        )
                      }),
                        (A[I].overloadTable = []),
                        (A[I].overloadTable[C.argCount] = C)
                    }
                  }
                  function gg(A, I, g) {
                    Q.hasOwnProperty(A)
                      ? ((void 0 === g ||
                          (void 0 !== Q[A].overloadTable &&
                            void 0 !== Q[A].overloadTable[g])) &&
                          qI("Cannot register public name '" + A + "' twice"),
                        Ig(Q, A, A),
                        Q.hasOwnProperty(g) &&
                          qI(
                            "Cannot register multiple overloads of a function with the same number of arguments (" +
                              g +
                              ")!"
                          ),
                        (Q[A].overloadTable[g] = I))
                      : ((Q[A] = I), void 0 !== g && (Q[A].numArguments = g))
                  }
                  function Cg(A, I, g, C, B, Q, E, i) {
                    ;(this.name = A),
                      (this.constructor = I),
                      (this.instancePrototype = g),
                      (this.rawDestructor = C),
                      (this.baseClass = B),
                      (this.getActualType = Q),
                      (this.upcast = E),
                      (this.downcast = i),
                      (this.pureVirtualFunctions = [])
                  }
                  function Bg(A, I, g) {
                    for (; I !== g; )
                      I.upcast ||
                        qI(
                          "Expected null or instance of " +
                            g.name +
                            ", got an instance of " +
                            I.name
                        ),
                        (A = I.upcast(A)),
                        (I = I.baseClass)
                    return A
                  }
                  function Qg(A, I) {
                    if (null === I)
                      return (
                        this.isReference &&
                          qI("null is not a valid " + this.name),
                        0
                      )
                    I.$$ || qI('Cannot pass "' + Wg(I) + '" as a ' + this.name),
                      I.$$.ptr ||
                        qI(
                          "Cannot pass deleted object as a pointer of type " +
                            this.name
                        )
                    var g = I.$$.ptrType.registeredClass
                    return Bg(I.$$.ptr, g, this.registeredClass)
                  }
                  function Eg(A, I) {
                    var g
                    if (null === I)
                      return (
                        this.isReference &&
                          qI("null is not a valid " + this.name),
                        this.isSmartPointer
                          ? ((g = this.rawConstructor()),
                            null !== A && A.push(this.rawDestructor, g),
                            g)
                          : 0
                      )
                    I.$$ || qI('Cannot pass "' + Wg(I) + '" as a ' + this.name),
                      I.$$.ptr ||
                        qI(
                          "Cannot pass deleted object as a pointer of type " +
                            this.name
                        ),
                      !this.isConst &&
                        I.$$.ptrType.isConst &&
                        qI(
                          "Cannot convert argument of type " +
                            (I.$$.smartPtrType
                              ? I.$$.smartPtrType.name
                              : I.$$.ptrType.name) +
                            " to parameter type " +
                            this.name
                        )
                    var C = I.$$.ptrType.registeredClass
                    if (
                      ((g = Bg(I.$$.ptr, C, this.registeredClass)),
                      this.isSmartPointer)
                    )
                      switch (
                        (void 0 === I.$$.smartPtr &&
                          qI("Passing raw pointer to smart pointer is illegal"),
                        this.sharingPolicy)
                      ) {
                        case 0:
                          I.$$.smartPtrType === this
                            ? (g = I.$$.smartPtr)
                            : qI(
                                "Cannot convert argument of type " +
                                  (I.$$.smartPtrType
                                    ? I.$$.smartPtrType.name
                                    : I.$$.ptrType.name) +
                                  " to parameter type " +
                                  this.name
                              )
                          break
                        case 1:
                          g = I.$$.smartPtr
                          break
                        case 2:
                          if (I.$$.smartPtrType === this) g = I.$$.smartPtr
                          else {
                            var B = I.clone()
                            ;(g = this.rawShare(
                              g,
                              Xg(function () {
                                B.delete()
                              })
                            )),
                              null !== A && A.push(this.rawDestructor, g)
                          }
                          break
                        default:
                          qI("Unsupporting sharing policy")
                      }
                    return g
                  }
                  function ig(A, I) {
                    if (null === I)
                      return (
                        this.isReference &&
                          qI("null is not a valid " + this.name),
                        0
                      )
                    I.$$ || qI('Cannot pass "' + Wg(I) + '" as a ' + this.name),
                      I.$$.ptr ||
                        qI(
                          "Cannot pass deleted object as a pointer of type " +
                            this.name
                        ),
                      I.$$.ptrType.isConst &&
                        qI(
                          "Cannot convert argument of type " +
                            I.$$.ptrType.name +
                            " to parameter type " +
                            this.name
                        )
                    var g = I.$$.ptrType.registeredClass
                    return Bg(I.$$.ptr, g, this.registeredClass)
                  }
                  function og(A) {
                    return this.rawGetPointee && (A = this.rawGetPointee(A)), A
                  }
                  function Dg(A) {
                    this.rawDestructor && this.rawDestructor(A)
                  }
                  function ng(A) {
                    null !== A && A.delete()
                  }
                  function tg(A, I, g) {
                    if (I === g) return A
                    if (void 0 === g.baseClass) return null
                    var C = tg(A, I, g.baseClass)
                    return null === C ? null : g.downcast(C)
                  }
                  function ag() {
                    return Object.keys(eg).length
                  }
                  function sg() {
                    var A = []
                    for (var I in eg) eg.hasOwnProperty(I) && A.push(eg[I])
                    return A
                  }
                  function wg(A) {
                    ;(ZI = A), vI.length && ZI && ZI(jI)
                  }
                  function hg() {
                    ;(Q.getInheritedInstanceCount = ag),
                      (Q.getLiveInheritedInstances = sg),
                      (Q.flushPendingDeletes = jI),
                      (Q.setDelayFunction = wg)
                  }
                  var eg = {}
                  function Gg(A, I) {
                    for (
                      void 0 === I && qI("ptr should not be undefined");
                      A.baseClass;

                    )
                      (I = A.upcast(I)), (A = A.baseClass)
                    return I
                  }
                  function Fg(A, I) {
                    return (I = Gg(A, I)), eg[I]
                  }
                  function Rg(A, I) {
                    return (
                      (I.ptrType && I.ptr) ||
                        UI("makeClassHandle requires ptr and ptrType"),
                      !!I.smartPtrType != !!I.smartPtr &&
                        UI("Both smartPtrType and smartPtr must be specified"),
                      (I.count = { value: 1 }),
                      XI(Object.create(A, { $$: { value: I } }))
                    )
                  }
                  function rg(A) {
                    var I = this.getPointee(A)
                    if (!I) return this.destructor(A), null
                    var g = Fg(this.registeredClass, I)
                    if (void 0 !== g) {
                      if (0 === g.$$.count.value)
                        return (g.$$.ptr = I), (g.$$.smartPtr = A), g.clone()
                      var C = g.clone()
                      return this.destructor(A), C
                    }
                    function B() {
                      return this.isSmartPointer
                        ? Rg(this.registeredClass.instancePrototype, {
                            ptrType: this.pointeeType,
                            ptr: I,
                            smartPtrType: this,
                            smartPtr: A
                          })
                        : Rg(this.registeredClass.instancePrototype, {
                            ptrType: this,
                            ptr: A
                          })
                    }
                    var Q,
                      E = this.registeredClass.getActualType(I),
                      i = Ag[E]
                    if (!i) return B.call(this)
                    Q = this.isConst ? i.constPointerType : i.pointerType
                    var o = tg(I, this.registeredClass, Q.registeredClass)
                    return null === o
                      ? B.call(this)
                      : this.isSmartPointer
                      ? Rg(Q.registeredClass.instancePrototype, {
                          ptrType: Q,
                          ptr: o,
                          smartPtrType: this,
                          smartPtr: A
                        })
                      : Rg(Q.registeredClass.instancePrototype, {
                          ptrType: Q,
                          ptr: o
                        })
                  }
                  function Ng() {
                    ;(yg.prototype.getPointee = og),
                      (yg.prototype.destructor = Dg),
                      (yg.prototype.argPackAdvance = 8),
                      (yg.prototype.readValueFromPointer = wI),
                      (yg.prototype.deleteObject = ng),
                      (yg.prototype.fromWireType = rg)
                  }
                  function yg(A, I, g, C, B, Q, E, i, o, D, n) {
                    ;(this.name = A),
                      (this.registeredClass = I),
                      (this.isReference = g),
                      (this.isConst = C),
                      (this.isSmartPointer = B),
                      (this.pointeeType = Q),
                      (this.sharingPolicy = E),
                      (this.rawGetPointee = i),
                      (this.rawConstructor = o),
                      (this.rawShare = D),
                      (this.rawDestructor = n),
                      B || void 0 !== I.baseClass
                        ? (this.toWireType = Eg)
                        : C
                        ? ((this.toWireType = Qg),
                          (this.destructorFunction = null))
                        : ((this.toWireType = ig),
                          (this.destructorFunction = null))
                  }
                  function cg(A, I, g) {
                    Q.hasOwnProperty(A) ||
                      UI("Replacing nonexistant public symbol"),
                      void 0 !== Q[A].overloadTable && void 0 !== g
                        ? (Q[A].overloadTable[g] = I)
                        : ((Q[A] = I), (Q[A].argCount = g))
                  }
                  function Ug(A, I) {
                    A = KI(A)
                    var g = (function (g) {
                      for (var C = [], B = 1; B < A.length; ++B) C.push("a" + B)
                      var Q =
                        "return function dynCall_" +
                        A +
                        "_" +
                        I +
                        "(" +
                        C.join(", ") +
                        ") {\n"
                      return (
                        (Q +=
                          "    return dynCall(rawFunction" +
                          (C.length ? ", " : "") +
                          C.join(", ") +
                          ");\n"),
                        (Q += "};\n"),
                        new Function("dynCall", "rawFunction", Q)(g, I)
                      )
                    })(Q["dynCall_" + A])
                    return (
                      "function" != typeof g &&
                        qI(
                          "unknown function pointer with signature " +
                            A +
                            ": " +
                            I
                        ),
                      g
                    )
                  }
                  var Sg = void 0
                  function Mg(A) {
                    var I = DB(A),
                      g = KI(I)
                    return iB(I), g
                  }
                  function kg(A, I) {
                    var g = [],
                      C = {}
                    throw (
                      (I.forEach(function A(I) {
                        C[I] ||
                          eI[I] ||
                          (GI[I] ? GI[I].forEach(A) : (g.push(I), (C[I] = !0)))
                      }),
                      new Sg(A + ": " + g.map(Mg).join([", "])))
                    )
                  }
                  function Jg(A, I, g, C, B, Q, E, i, o, D, n, t, a) {
                    ;(n = KI(n)),
                      (Q = Ug(B, Q)),
                      i && (i = Ug(E, i)),
                      D && (D = Ug(o, D)),
                      (a = Ug(t, a))
                    var s = rI(n)
                    gg(s, function () {
                      kg("Cannot construct " + n + " due to unbound types", [C])
                    }),
                      SI([A, I, g], C ? [C] : [], function (I) {
                        var g, B
                        ;(I = I[0]),
                          (B = C
                            ? (g = I.registeredClass).instancePrototype
                            : $I.prototype)
                        var E = NI(s, function () {
                            if (Object.getPrototypeOf(this) !== o)
                              throw new dI("Use 'new' to construct " + n)
                            if (void 0 === t.constructor_body)
                              throw new dI(n + " has no accessible constructor")
                            var A = t.constructor_body[arguments.length]
                            if (void 0 === A)
                              throw new dI(
                                "Tried to invoke ctor of " +
                                  n +
                                  " with invalid number of parameters (" +
                                  arguments.length +
                                  ") - expected (" +
                                  Object.keys(t.constructor_body).toString() +
                                  ") parameters instead!"
                              )
                            return A.apply(this, arguments)
                          }),
                          o = Object.create(B, { constructor: { value: E } })
                        E.prototype = o
                        var t = new Cg(n, E, o, a, g, Q, i, D),
                          w = new yg(n, t, !0, !1, !1),
                          h = new yg(n + "*", t, !1, !1, !1),
                          e = new yg(n + " const*", t, !1, !0, !1)
                        return (
                          (Ag[A] = { pointerType: h, constPointerType: e }),
                          cg(s, E),
                          [w, h, e]
                        )
                      })
                  }
                  function lg(A, I) {
                    if (!(A instanceof Function))
                      throw new TypeError(
                        "new_ called with constructor type " +
                          typeof A +
                          " which is not a function"
                      )
                    var g = NI(A.name || "unknownFunctionName", function () {})
                    g.prototype = A.prototype
                    var C = new g(),
                      B = A.apply(C, I)
                    return B instanceof Object ? B : C
                  }
                  function Lg(A, I, g, C, B) {
                    var Q = I.length
                    Q < 2 &&
                      qI(
                        "argTypes array size mismatch! Must at least get return value and 'this' types!"
                      )
                    for (
                      var E = null !== I[1] && null !== g, i = !1, o = 1;
                      o < I.length;
                      ++o
                    )
                      if (null !== I[o] && void 0 === I[o].destructorFunction) {
                        i = !0
                        break
                      }
                    var D = "void" !== I[0].name,
                      n = "",
                      t = ""
                    for (o = 0; o < Q - 2; ++o)
                      (n += (0 !== o ? ", " : "") + "arg" + o),
                        (t += (0 !== o ? ", " : "") + "arg" + o + "Wired")
                    var a =
                      "return function " +
                      rI(A) +
                      "(" +
                      n +
                      ") {\nif (arguments.length !== " +
                      (Q - 2) +
                      ") {\nthrowBindingError('function " +
                      A +
                      " called with ' + arguments.length + ' arguments, expected " +
                      (Q - 2) +
                      " args!');\n}\n"
                    i && (a += "var destructors = [];\n")
                    var s = i ? "destructors" : "null",
                      w = [
                        "throwBindingError",
                        "invoker",
                        "fn",
                        "runDestructors",
                        "retType",
                        "classParam"
                      ],
                      h = [qI, C, B, sI, I[0], I[1]]
                    for (
                      E &&
                        (a +=
                          "var thisWired = classParam.toWireType(" +
                          s +
                          ", this);\n"),
                        o = 0;
                      o < Q - 2;
                      ++o
                    )
                      (a +=
                        "var arg" +
                        o +
                        "Wired = argType" +
                        o +
                        ".toWireType(" +
                        s +
                        ", arg" +
                        o +
                        "); // " +
                        I[o + 2].name +
                        "\n"),
                        w.push("argType" + o),
                        h.push(I[o + 2])
                    if (
                      (E && (t = "thisWired" + (t.length > 0 ? ", " : "") + t),
                      (a +=
                        (D ? "var rv = " : "") +
                        "invoker(fn" +
                        (t.length > 0 ? ", " : "") +
                        t +
                        ");\n"),
                      i)
                    )
                      a += "runDestructors(destructors);\n"
                    else
                      for (o = E ? 1 : 2; o < I.length; ++o) {
                        var e =
                          1 === o ? "thisWired" : "arg" + (o - 2) + "Wired"
                        null !== I[o].destructorFunction &&
                          ((a +=
                            e + "_dtor(" + e + "); // " + I[o].name + "\n"),
                          w.push(e + "_dtor"),
                          h.push(I[o].destructorFunction))
                      }
                    return (
                      D &&
                        (a +=
                          "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
                      (a += "}\n"),
                      w.push(a),
                      lg(Function, w).apply(null, h)
                    )
                  }
                  function Yg(A, I) {
                    for (var g = [], C = 0; C < A; C++) g.push(AA[(I >> 2) + C])
                    return g
                  }
                  function Kg(A, I, g, C, B, Q, E) {
                    var i = Yg(g, C)
                    ;(I = KI(I)),
                      (Q = Ug(B, Q)),
                      SI([], [A], function (A) {
                        var C = (A = A[0]).name + "." + I
                        function B() {
                          kg("Cannot call " + C + " due to unbound types", i)
                        }
                        var o = A.registeredClass.constructor
                        return (
                          void 0 === o[I]
                            ? ((B.argCount = g - 1), (o[I] = B))
                            : (Ig(o, I, C), (o[I].overloadTable[g - 1] = B)),
                          SI([], i, function (A) {
                            var B = [A[0], null].concat(A.slice(1)),
                              i = Lg(C, B, null, Q, E)
                            return (
                              void 0 === o[I].overloadTable
                                ? ((i.argCount = g - 1), (o[I] = i))
                                : (o[I].overloadTable[g - 1] = i),
                              []
                            )
                          }),
                          []
                        )
                      })
                  }
                  function dg(A, I, g, C, B, Q) {
                    K(I > 0)
                    var E = Yg(I, g)
                    B = Ug(C, B)
                    var i = [Q],
                      o = []
                    SI([], [A], function (A) {
                      var g = "constructor " + (A = A[0]).name
                      if (
                        (void 0 === A.registeredClass.constructor_body &&
                          (A.registeredClass.constructor_body = []),
                        void 0 !== A.registeredClass.constructor_body[I - 1])
                      )
                        throw new dI(
                          "Cannot register multiple constructors with identical number of parameters (" +
                            (I - 1) +
                            ") for class '" +
                            A.name +
                            "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                        )
                      return (
                        (A.registeredClass.constructor_body[I - 1] =
                          function () {
                            kg(
                              "Cannot construct " +
                                A.name +
                                " due to unbound types",
                              E
                            )
                          }),
                        SI([], E, function (C) {
                          return (
                            (A.registeredClass.constructor_body[I - 1] =
                              function () {
                                arguments.length !== I - 1 &&
                                  qI(
                                    g +
                                      " called with " +
                                      arguments.length +
                                      " arguments, expected " +
                                      (I - 1)
                                  ),
                                  (o.length = 0),
                                  (i.length = I)
                                for (var A = 1; A < I; ++A)
                                  i[A] = C[A].toWireType(o, arguments[A - 1])
                                var Q = B.apply(null, i)
                                return sI(o), C[0].fromWireType(Q)
                              }),
                            []
                          )
                        }),
                        []
                      )
                    })
                  }
                  function qg(A, I, g, C, B, Q, E, i) {
                    var o = Yg(g, C)
                    ;(I = KI(I)),
                      (Q = Ug(B, Q)),
                      SI([], [A], function (A) {
                        var C = (A = A[0]).name + "." + I
                        function B() {
                          kg("Cannot call " + C + " due to unbound types", o)
                        }
                        i && A.registeredClass.pureVirtualFunctions.push(I)
                        var D = A.registeredClass.instancePrototype,
                          n = D[I]
                        return (
                          void 0 === n ||
                          (void 0 === n.overloadTable &&
                            n.className !== A.name &&
                            n.argCount === g - 2)
                            ? ((B.argCount = g - 2),
                              (B.className = A.name),
                              (D[I] = B))
                            : (Ig(D, I, C), (D[I].overloadTable[g - 2] = B)),
                          SI([], o, function (B) {
                            var i = Lg(C, B, A, Q, E)
                            return (
                              void 0 === D[I].overloadTable
                                ? ((i.argCount = g - 2), (D[I] = i))
                                : (D[I].overloadTable[g - 2] = i),
                              []
                            )
                          }),
                          []
                        )
                      })
                  }
                  function fg(A, I, g) {
                    return (
                      A instanceof Object ||
                        qI(g + ' with invalid "this": ' + A),
                      A instanceof I.registeredClass.constructor ||
                        qI(
                          g +
                            ' incompatible with "this" of type ' +
                            A.constructor.name
                        ),
                      A.$$.ptr ||
                        qI(
                          "cannot call emscripten binding method " +
                            g +
                            " on deleted object"
                        ),
                      Bg(
                        A.$$.ptr,
                        A.$$.ptrType.registeredClass,
                        I.registeredClass
                      )
                    )
                  }
                  function Hg(A, I, g, C, B, Q, E, i, o, D) {
                    ;(I = KI(I)),
                      (B = Ug(C, B)),
                      SI([], [A], function (A) {
                        var C = (A = A[0]).name + "." + I,
                          n = {
                            get: function () {
                              kg(
                                "Cannot access " + C + " due to unbound types",
                                [g, E]
                              )
                            },
                            enumerable: !0,
                            configurable: !0
                          }
                        return (
                          (n.set = o
                            ? function () {
                                kg(
                                  "Cannot access " +
                                    C +
                                    " due to unbound types",
                                  [g, E]
                                )
                              }
                            : function (A) {
                                qI(C + " is a read-only property")
                              }),
                          Object.defineProperty(
                            A.registeredClass.instancePrototype,
                            I,
                            n
                          ),
                          SI([], o ? [g, E] : [g], function (g) {
                            var E = g[0],
                              n = {
                                get: function () {
                                  var I = fg(this, A, C + " getter")
                                  return E.fromWireType(B(Q, I))
                                },
                                enumerable: !0
                              }
                            if (o) {
                              o = Ug(i, o)
                              var t = g[1]
                              n.set = function (I) {
                                var g = fg(this, A, C + " setter"),
                                  B = []
                                o(D, g, t.toWireType(B, I)), sI(B)
                              }
                            }
                            return (
                              Object.defineProperty(
                                A.registeredClass.instancePrototype,
                                I,
                                n
                              ),
                              []
                            )
                          }),
                          []
                        )
                      })
                  }
                  function ug(A, I, g) {
                    ;(A = KI(A)),
                      SI([], [I], function (I) {
                        return (I = I[0]), (Q[A] = I.fromWireType(g)), []
                      })
                  }
                  var pg = [],
                    mg = [
                      {},
                      { value: void 0 },
                      { value: null },
                      { value: !0 },
                      { value: !1 }
                    ]
                  function xg(A) {
                    A > 4 &&
                      0 == --mg[A].refcount &&
                      ((mg[A] = void 0), pg.push(A))
                  }
                  function Vg() {
                    for (var A = 0, I = 5; I < mg.length; ++I)
                      void 0 !== mg[I] && ++A
                    return A
                  }
                  function Tg() {
                    for (var A = 5; A < mg.length; ++A)
                      if (void 0 !== mg[A]) return mg[A]
                    return null
                  }
                  function bg() {
                    ;(Q.count_emval_handles = Vg), (Q.get_first_emval = Tg)
                  }
                  function Xg(A) {
                    switch (A) {
                      case void 0:
                        return 1
                      case null:
                        return 2
                      case !0:
                        return 3
                      case !1:
                        return 4
                      default:
                        var I = pg.length ? pg.pop() : mg.length
                        return (mg[I] = { refcount: 1, value: A }), I
                    }
                  }
                  function Pg(A, I) {
                    fI(A, {
                      name: (I = KI(I)),
                      fromWireType: function (A) {
                        var I = mg[A].value
                        return xg(A), I
                      },
                      toWireType: function (A, I) {
                        return Xg(I)
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: wI,
                      destructorFunction: null
                    })
                  }
                  function Wg(A) {
                    if (null === A) return "null"
                    var I = typeof A
                    return "object" === I || "array" === I || "function" === I
                      ? A.toString()
                      : "" + A
                  }
                  function Og(A, I) {
                    switch (I) {
                      case 2:
                        return function (A) {
                          return this.fromWireType(gA[A >> 2])
                        }
                      case 3:
                        return function (A) {
                          return this.fromWireType(CA[A >> 3])
                        }
                      default:
                        throw new TypeError("Unknown float type: " + A)
                    }
                  }
                  function Zg(A, I, g) {
                    var C = lI(g)
                    fI(A, {
                      name: (I = KI(I)),
                      fromWireType: function (A) {
                        return A
                      },
                      toWireType: function (A, I) {
                        if ("number" != typeof I && "boolean" != typeof I)
                          throw new TypeError(
                            'Cannot convert "' + Wg(I) + '" to ' + this.name
                          )
                        return I
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: Og(I, C),
                      destructorFunction: null
                    })
                  }
                  function vg(A, I, g, C, B, Q) {
                    var E = Yg(I, g)
                    ;(A = KI(A)),
                      (B = Ug(C, B)),
                      gg(
                        A,
                        function () {
                          kg("Cannot call " + A + " due to unbound types", E)
                        },
                        I - 1
                      ),
                      SI([], E, function (g) {
                        var C = [g[0], null].concat(g.slice(1))
                        return cg(A, Lg(A, C, null, B, Q), I - 1), []
                      })
                  }
                  function jg(A, I, g) {
                    switch (I) {
                      case 0:
                        return g
                          ? function (A) {
                              return j[A]
                            }
                          : function (A) {
                              return z[A]
                            }
                      case 1:
                        return g
                          ? function (A) {
                              return _[A >> 1]
                            }
                          : function (A) {
                              return $[A >> 1]
                            }
                      case 2:
                        return g
                          ? function (A) {
                              return AA[A >> 2]
                            }
                          : function (A) {
                              return IA[A >> 2]
                            }
                      default:
                        throw new TypeError("Unknown integer type: " + A)
                    }
                  }
                  function zg(A, I, g, C, B) {
                    ;(I = KI(I)), -1 === B && (B = 4294967295)
                    var Q = lI(g),
                      E = function (A) {
                        return A
                      }
                    if (0 === C) {
                      var i = 32 - 8 * g
                      E = function (A) {
                        return (A << i) >>> i
                      }
                    }
                    var o = -1 != I.indexOf("unsigned")
                    fI(A, {
                      name: I,
                      fromWireType: E,
                      toWireType: function (A, g) {
                        if ("number" != typeof g && "boolean" != typeof g)
                          throw new TypeError(
                            'Cannot convert "' + Wg(g) + '" to ' + this.name
                          )
                        if (g < C || g > B)
                          throw new TypeError(
                            'Passing a number "' +
                              Wg(g) +
                              '" from JS side to C/C++ side to an argument of type "' +
                              I +
                              '", which is outside the valid range [' +
                              C +
                              ", " +
                              B +
                              "]!"
                          )
                        return o ? g >>> 0 : 0 | g
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: jg(I, Q, 0 !== C),
                      destructorFunction: null
                    })
                  }
                  function _g(A, I, g) {
                    var C = [
                      Int8Array,
                      Uint8Array,
                      Int16Array,
                      Uint16Array,
                      Int32Array,
                      Uint32Array,
                      Float32Array,
                      Float64Array
                    ][I]
                    function B(A) {
                      var I = IA,
                        g = I[(A >>= 2)],
                        B = I[A + 1]
                      return new C(v, B, g)
                    }
                    fI(
                      A,
                      {
                        name: (g = KI(g)),
                        fromWireType: B,
                        argPackAdvance: 8,
                        readValueFromPointer: B
                      },
                      { ignoreDuplicateRegistrations: !0 }
                    )
                  }
                  function $g(A, I) {
                    var g = "std::string" === (I = KI(I))
                    fI(A, {
                      name: I,
                      fromWireType: function (A) {
                        var I,
                          C = IA[A >> 2]
                        if (g)
                          for (var B = A + 4, Q = 0; Q <= C; ++Q) {
                            var E = A + 4 + Q
                            if (Q == C || 0 == z[E]) {
                              var i = H(B, E - B)
                              void 0 === I
                                ? (I = i)
                                : ((I += String.fromCharCode(0)), (I += i)),
                                (B = E + 1)
                            }
                          }
                        else {
                          var o = new Array(C)
                          for (Q = 0; Q < C; ++Q)
                            o[Q] = String.fromCharCode(z[A + 4 + Q])
                          I = o.join("")
                        }
                        return iB(A), I
                      },
                      toWireType: function (A, I) {
                        I instanceof ArrayBuffer && (I = new Uint8Array(I))
                        var C = "string" == typeof I
                        C ||
                          I instanceof Uint8Array ||
                          I instanceof Uint8ClampedArray ||
                          I instanceof Int8Array ||
                          qI("Cannot pass non-string to std::string")
                        var B = (
                            g && C
                              ? function () {
                                  return m(I)
                                }
                              : function () {
                                  return I.length
                                }
                          )(),
                          Q = EB(4 + B + 1)
                        if (((IA[Q >> 2] = B), g && C)) p(I, Q + 4, B + 1)
                        else if (C)
                          for (var E = 0; E < B; ++E) {
                            var i = I.charCodeAt(E)
                            i > 255 &&
                              (iB(Q),
                              qI(
                                "String has UTF-16 code units that do not fit in 8 bits"
                              )),
                              (z[Q + 4 + E] = i)
                          }
                        else for (E = 0; E < B; ++E) z[Q + 4 + E] = I[E]
                        return null !== A && A.push(iB, Q), Q
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: wI,
                      destructorFunction: function (A) {
                        iB(A)
                      }
                    })
                  }
                  function AC(A, I, g) {
                    var C, B, Q, E, i
                    ;(g = KI(g)),
                      2 === I
                        ? ((C = V),
                          (B = T),
                          (E = b),
                          (Q = function () {
                            return $
                          }),
                          (i = 1))
                        : 4 === I &&
                          ((C = X),
                          (B = P),
                          (E = W),
                          (Q = function () {
                            return IA
                          }),
                          (i = 2)),
                      fI(A, {
                        name: g,
                        fromWireType: function (A) {
                          for (
                            var g, B = IA[A >> 2], E = Q(), o = A + 4, D = 0;
                            D <= B;
                            ++D
                          ) {
                            var n = A + 4 + D * I
                            if (D == B || 0 == E[n >> i]) {
                              var t = C(o, n - o)
                              void 0 === g
                                ? (g = t)
                                : ((g += String.fromCharCode(0)), (g += t)),
                                (o = n + I)
                            }
                          }
                          return iB(A), g
                        },
                        toWireType: function (A, C) {
                          "string" != typeof C &&
                            qI("Cannot pass non-string to C++ string type " + g)
                          var Q = E(C),
                            o = EB(4 + Q + I)
                          return (
                            (IA[o >> 2] = Q >> i),
                            B(C, o + 4, Q + I),
                            null !== A && A.push(iB, o),
                            o
                          )
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: wI,
                        destructorFunction: function (A) {
                          iB(A)
                        }
                      })
                  }
                  function IC(A, I, g, C, B, Q) {
                    aI[A] = {
                      name: KI(I),
                      rawConstructor: Ug(g, C),
                      rawDestructor: Ug(B, Q),
                      elements: []
                    }
                  }
                  function gC(A, I, g, C, B, Q, E, i, o) {
                    aI[A].elements.push({
                      getterReturnType: I,
                      getter: Ug(g, C),
                      getterContext: B,
                      setterArgumentType: Q,
                      setter: Ug(E, i),
                      setterContext: o
                    })
                  }
                  function CC(A, I, g, C, B, Q) {
                    kI[A] = {
                      name: KI(I),
                      rawConstructor: Ug(g, C),
                      rawDestructor: Ug(B, Q),
                      fields: []
                    }
                  }
                  function BC(A, I, g, C, B, Q, E, i, o, D) {
                    kI[A].fields.push({
                      fieldName: KI(I),
                      getterReturnType: g,
                      getter: Ug(C, B),
                      getterContext: Q,
                      setterArgumentType: E,
                      setter: Ug(i, o),
                      setterContext: D
                    })
                  }
                  function QC(A, I) {
                    fI(A, {
                      isVoid: !0,
                      name: (I = KI(I)),
                      argPackAdvance: 0,
                      fromWireType: function () {},
                      toWireType: function (A, I) {}
                    })
                  }
                  var EC = {}
                  function iC(A) {
                    var I = EC[A]
                    return void 0 === I ? KI(A) : I
                  }
                  var oC = []
                  function DC(A) {
                    return (
                      A || qI("Cannot use deleted val. handle = " + A),
                      mg[A].value
                    )
                  }
                  function nC(A, I, g, C) {
                    ;(A = oC[A])((I = DC(I)), (g = iC(g)), null, C)
                  }
                  function tC(A) {
                    var I = oC.length
                    return oC.push(A), I
                  }
                  function aC(A, I) {
                    var g = eI[A]
                    return (
                      void 0 === g && qI(I + " has unknown type " + Mg(A)), g
                    )
                  }
                  function sC(A, I) {
                    for (var g = new Array(A), C = 0; C < A; ++C)
                      g[C] = aC(AA[(I >> 2) + C], "parameter " + C)
                    return g
                  }
                  function wC(A, I) {
                    for (
                      var g = sC(A, I),
                        C = g[0],
                        B =
                          C.name +
                          "_$" +
                          g
                            .slice(1)
                            .map(function (A) {
                              return A.name
                            })
                            .join("_") +
                          "$",
                        Q = ["retType"],
                        E = [C],
                        i = "",
                        o = 0;
                      o < A - 1;
                      ++o
                    )
                      (i += (0 !== o ? ", " : "") + "arg" + o),
                        Q.push("argType" + o),
                        E.push(g[1 + o])
                    var D =
                        "return function " +
                        rI("methodCaller_" + B) +
                        "(handle, name, destructors, args) {\n",
                      n = 0
                    for (o = 0; o < A - 1; ++o)
                      (D +=
                        "    var arg" +
                        o +
                        " = argType" +
                        o +
                        ".readValueFromPointer(args" +
                        (n ? "+" + n : "") +
                        ");\n"),
                        (n += g[o + 1].argPackAdvance)
                    for (
                      D += "    var rv = handle[name](" + i + ");\n", o = 0;
                      o < A - 1;
                      ++o
                    )
                      g[o + 1].deleteObject &&
                        (D +=
                          "    argType" + o + ".deleteObject(arg" + o + ");\n")
                    return (
                      C.isVoid ||
                        (D +=
                          "    return retType.toWireType(destructors, rv);\n"),
                      (D += "};\n"),
                      Q.push(D),
                      tC(lg(Function, Q).apply(null, E))
                    )
                  }
                  function hC(A) {
                    A > 4 && (mg[A].refcount += 1)
                  }
                  function eC() {
                    return Xg([])
                  }
                  function GC(A) {
                    return Xg(iC(A))
                  }
                  function FC(A, I, g) {
                    ;(A = DC(A)), (I = DC(I)), (g = DC(g)), (A[I] = g)
                  }
                  function RC(A, I) {
                    return Xg(
                      (A = aC(A, "_emval_take_value")).readValueFromPointer(I)
                    )
                  }
                  function rC() {
                    YA()
                  }
                  var NC = !0
                  function yC(A, I) {
                    var g
                    if (0 === A) g = Date.now()
                    else {
                      if ((1 !== A && 4 !== A) || !NC) return gI(28), -1
                      g = mA()
                    }
                    return (
                      (AA[I >> 2] = (g / 1e3) | 0),
                      (AA[(I + 4) >> 2] = ((g % 1e3) * 1e3 * 1e3) | 0),
                      0
                    )
                  }
                  function cC() {
                    return 626976
                  }
                  function UC(A, I, g) {
                    z.copyWithin(A, I, I + g)
                  }
                  function SC() {
                    return z.length
                  }
                  function MC(A) {
                    try {
                      return (
                        J.grow((A - v.byteLength + 65535) >>> 16),
                        EA(J.buffer),
                        1
                      )
                    } catch (A) {}
                  }
                  function kC(A) {
                    A >>>= 0
                    var I = SC(),
                      g = 1073741824
                    if (A > g) return !1
                    for (var C = 1; C <= 4; C *= 2) {
                      var B = I * (1 + 0.2 / C)
                      if (
                        ((B = Math.min(B, A + 100663296)),
                        MC(Math.min(g, QA(Math.max(16777216, A, B), 65536))))
                      )
                        return !0
                    }
                    return !1
                  }
                  var JC = {}
                  function lC() {
                    return D || "./this.program"
                  }
                  function LC() {
                    if (!LC.strings) {
                      var A = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG:
                          (
                            ("object" == typeof navigator &&
                              navigator.languages &&
                              navigator.languages[0]) ||
                            "C"
                          ).replace("-", "_") + ".UTF-8",
                        _: lC()
                      }
                      for (var I in JC) A[I] = JC[I]
                      var g = []
                      for (var I in A) g.push(I + "=" + A[I])
                      LC.strings = g
                    }
                    return LC.strings
                  }
                  function YC(A, I) {
                    var g = 0
                    return (
                      LC().forEach(function (C, B) {
                        var Q = I + g
                        ;(AA[(A + 4 * B) >> 2] = Q),
                          Z(C, Q),
                          (g += C.length + 1)
                      }),
                      0
                    )
                  }
                  function KC(A, I) {
                    var g = LC()
                    AA[A >> 2] = g.length
                    var C = 0
                    return (
                      g.forEach(function (A) {
                        C += A.length + 1
                      }),
                      (AA[I >> 2] = C),
                      0
                    )
                  }
                  function dC(A) {
                    try {
                      var I = DI.getStreamFromFD(A)
                      return oI.close(I), 0
                    } catch (A) {
                      return (
                        (void 0 !== oI && A instanceof oI.ErrnoError) || YA(A),
                        A.errno
                      )
                    }
                  }
                  function qC(A, I, g, C) {
                    try {
                      var B = DI.getStreamFromFD(A),
                        Q = DI.doReadv(B, I, g)
                      return (AA[C >> 2] = Q), 0
                    } catch (A) {
                      return (
                        (void 0 !== oI && A instanceof oI.ErrnoError) || YA(A),
                        A.errno
                      )
                    }
                  }
                  function fC(A, I, g, C, B) {
                    try {
                      var Q = DI.getStreamFromFD(A),
                        E = 4294967296 * g + (I >>> 0),
                        i = 9007199254740992
                      return E <= -i || E >= i
                        ? -61
                        : (oI.llseek(Q, E, C),
                          (pA = [
                            Q.position >>> 0,
                            ((uA = Q.position),
                            +yA(uA) >= 1
                              ? uA > 0
                                ? (0 | SA(+UA(uA / 4294967296), 4294967295)) >>>
                                  0
                                : ~~+cA((uA - +(~~uA >>> 0)) / 4294967296) >>> 0
                              : 0)
                          ]),
                          (AA[B >> 2] = pA[0]),
                          (AA[(B + 4) >> 2] = pA[1]),
                          Q.getdents &&
                            0 === E &&
                            0 === C &&
                            (Q.getdents = null),
                          0)
                    } catch (A) {
                      return (
                        (void 0 !== oI && A instanceof oI.ErrnoError) || YA(A),
                        A.errno
                      )
                    }
                  }
                  function HC(A, I, g, C) {
                    try {
                      var B = DI.getStreamFromFD(A),
                        Q = DI.doWritev(B, I, g)
                      return (AA[C >> 2] = Q), 0
                    } catch (A) {
                      return (
                        (void 0 !== oI && A instanceof oI.ErrnoError) || YA(A),
                        A.errno
                      )
                    }
                  }
                  function uC() {}
                  function pC() {}
                  function mC() {}
                  function xC(A) {
                    l(0 | A)
                  }
                  function VC(A) {
                    return A % 4 == 0 && (A % 100 != 0 || A % 400 == 0)
                  }
                  function TC(A, I) {
                    for (var g = 0, C = 0; C <= I; g += A[C++]);
                    return g
                  }
                  var bC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    XC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
                  function PC(A, I) {
                    for (var g = new Date(A.getTime()); I > 0; ) {
                      var C = VC(g.getFullYear()),
                        B = g.getMonth(),
                        Q = (C ? bC : XC)[B]
                      if (!(I > Q - g.getDate()))
                        return g.setDate(g.getDate() + I), g
                      ;(I -= Q - g.getDate() + 1),
                        g.setDate(1),
                        B < 11
                          ? g.setMonth(B + 1)
                          : (g.setMonth(0), g.setFullYear(g.getFullYear() + 1))
                    }
                    return g
                  }
                  function WC(A, I, g, C) {
                    var B = AA[(C + 40) >> 2],
                      Q = {
                        tm_sec: AA[C >> 2],
                        tm_min: AA[(C + 4) >> 2],
                        tm_hour: AA[(C + 8) >> 2],
                        tm_mday: AA[(C + 12) >> 2],
                        tm_mon: AA[(C + 16) >> 2],
                        tm_year: AA[(C + 20) >> 2],
                        tm_wday: AA[(C + 24) >> 2],
                        tm_yday: AA[(C + 28) >> 2],
                        tm_isdst: AA[(C + 32) >> 2],
                        tm_gmtoff: AA[(C + 36) >> 2],
                        tm_zone: B ? H(B) : ""
                      },
                      E = H(g),
                      i = {
                        "%c": "%a %b %d %H:%M:%S %Y",
                        "%D": "%m/%d/%y",
                        "%F": "%Y-%m-%d",
                        "%h": "%b",
                        "%r": "%I:%M:%S %p",
                        "%R": "%H:%M",
                        "%T": "%H:%M:%S",
                        "%x": "%m/%d/%y",
                        "%X": "%H:%M:%S",
                        "%Ec": "%c",
                        "%EC": "%C",
                        "%Ex": "%m/%d/%y",
                        "%EX": "%H:%M:%S",
                        "%Ey": "%y",
                        "%EY": "%Y",
                        "%Od": "%d",
                        "%Oe": "%e",
                        "%OH": "%H",
                        "%OI": "%I",
                        "%Om": "%m",
                        "%OM": "%M",
                        "%OS": "%S",
                        "%Ou": "%u",
                        "%OU": "%U",
                        "%OV": "%V",
                        "%Ow": "%w",
                        "%OW": "%W",
                        "%Oy": "%y"
                      }
                    for (var o in i) E = E.replace(new RegExp(o, "g"), i[o])
                    var D = [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                      ],
                      n = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                      ]
                    function t(A, I, g) {
                      for (
                        var C = "number" == typeof A ? A.toString() : A || "";
                        C.length < I;

                      )
                        C = g[0] + C
                      return C
                    }
                    function a(A, I) {
                      return t(A, I, "0")
                    }
                    function s(A, I) {
                      function g(A) {
                        return A < 0 ? -1 : A > 0 ? 1 : 0
                      }
                      var C
                      return (
                        0 === (C = g(A.getFullYear() - I.getFullYear())) &&
                          0 === (C = g(A.getMonth() - I.getMonth())) &&
                          (C = g(A.getDate() - I.getDate())),
                        C
                      )
                    }
                    function w(A) {
                      switch (A.getDay()) {
                        case 0:
                          return new Date(A.getFullYear() - 1, 11, 29)
                        case 1:
                          return A
                        case 2:
                          return new Date(A.getFullYear(), 0, 3)
                        case 3:
                          return new Date(A.getFullYear(), 0, 2)
                        case 4:
                          return new Date(A.getFullYear(), 0, 1)
                        case 5:
                          return new Date(A.getFullYear() - 1, 11, 31)
                        case 6:
                          return new Date(A.getFullYear() - 1, 11, 30)
                      }
                    }
                    function h(A) {
                      var I = PC(new Date(A.tm_year + 1900, 0, 1), A.tm_yday),
                        g = new Date(I.getFullYear(), 0, 4),
                        C = new Date(I.getFullYear() + 1, 0, 4),
                        B = w(g),
                        Q = w(C)
                      return s(B, I) <= 0
                        ? s(Q, I) <= 0
                          ? I.getFullYear() + 1
                          : I.getFullYear()
                        : I.getFullYear() - 1
                    }
                    var e = {
                      "%a": function (A) {
                        return D[A.tm_wday].substring(0, 3)
                      },
                      "%A": function (A) {
                        return D[A.tm_wday]
                      },
                      "%b": function (A) {
                        return n[A.tm_mon].substring(0, 3)
                      },
                      "%B": function (A) {
                        return n[A.tm_mon]
                      },
                      "%C": function (A) {
                        return a(((A.tm_year + 1900) / 100) | 0, 2)
                      },
                      "%d": function (A) {
                        return a(A.tm_mday, 2)
                      },
                      "%e": function (A) {
                        return t(A.tm_mday, 2, " ")
                      },
                      "%g": function (A) {
                        return h(A).toString().substring(2)
                      },
                      "%G": function (A) {
                        return h(A)
                      },
                      "%H": function (A) {
                        return a(A.tm_hour, 2)
                      },
                      "%I": function (A) {
                        var I = A.tm_hour
                        return 0 == I ? (I = 12) : I > 12 && (I -= 12), a(I, 2)
                      },
                      "%j": function (A) {
                        return a(
                          A.tm_mday +
                            TC(VC(A.tm_year + 1900) ? bC : XC, A.tm_mon - 1),
                          3
                        )
                      },
                      "%m": function (A) {
                        return a(A.tm_mon + 1, 2)
                      },
                      "%M": function (A) {
                        return a(A.tm_min, 2)
                      },
                      "%n": function () {
                        return "\n"
                      },
                      "%p": function (A) {
                        return A.tm_hour >= 0 && A.tm_hour < 12 ? "AM" : "PM"
                      },
                      "%S": function (A) {
                        return a(A.tm_sec, 2)
                      },
                      "%t": function () {
                        return "\t"
                      },
                      "%u": function (A) {
                        return A.tm_wday || 7
                      },
                      "%U": function (A) {
                        var I = new Date(A.tm_year + 1900, 0, 1),
                          g = 0 === I.getDay() ? I : PC(I, 7 - I.getDay()),
                          C = new Date(A.tm_year + 1900, A.tm_mon, A.tm_mday)
                        if (s(g, C) < 0) {
                          var B =
                              TC(
                                VC(C.getFullYear()) ? bC : XC,
                                C.getMonth() - 1
                              ) - 31,
                            Q = 31 - g.getDate() + B + C.getDate()
                          return a(Math.ceil(Q / 7), 2)
                        }
                        return 0 === s(g, I) ? "01" : "00"
                      },
                      "%V": function (A) {
                        var I,
                          g = new Date(A.tm_year + 1900, 0, 4),
                          C = new Date(A.tm_year + 1901, 0, 4),
                          B = w(g),
                          Q = w(C),
                          E = PC(new Date(A.tm_year + 1900, 0, 1), A.tm_yday)
                        return s(E, B) < 0
                          ? "53"
                          : s(Q, E) <= 0
                          ? "01"
                          : ((I =
                              B.getFullYear() < A.tm_year + 1900
                                ? A.tm_yday + 32 - B.getDate()
                                : A.tm_yday + 1 - B.getDate()),
                            a(Math.ceil(I / 7), 2))
                      },
                      "%w": function (A) {
                        return A.tm_wday
                      },
                      "%W": function (A) {
                        var I = new Date(A.tm_year, 0, 1),
                          g =
                            1 === I.getDay()
                              ? I
                              : PC(
                                  I,
                                  0 === I.getDay() ? 1 : 7 - I.getDay() + 1
                                ),
                          C = new Date(A.tm_year + 1900, A.tm_mon, A.tm_mday)
                        if (s(g, C) < 0) {
                          var B =
                              TC(
                                VC(C.getFullYear()) ? bC : XC,
                                C.getMonth() - 1
                              ) - 31,
                            Q = 31 - g.getDate() + B + C.getDate()
                          return a(Math.ceil(Q / 7), 2)
                        }
                        return 0 === s(g, I) ? "01" : "00"
                      },
                      "%y": function (A) {
                        return (A.tm_year + 1900).toString().substring(2)
                      },
                      "%Y": function (A) {
                        return A.tm_year + 1900
                      },
                      "%z": function (A) {
                        var I = A.tm_gmtoff,
                          g = I >= 0
                        return (
                          (I = ((I = Math.abs(I) / 60) / 60) * 100 + (I % 60)),
                          (g ? "+" : "-") + String("0000" + I).slice(-4)
                        )
                      },
                      "%Z": function (A) {
                        return A.tm_zone
                      },
                      "%%": function () {
                        return "%"
                      }
                    }
                    for (var o in e)
                      E.indexOf(o) >= 0 &&
                        (E = E.replace(new RegExp(o, "g"), e[o](Q)))
                    var G = _C(E, !1)
                    return G.length > I ? 0 : (O(G, A), G.length - 1)
                  }
                  function OC(A, I, g, C) {
                    return WC(A, I, g, C)
                  }
                  ;(Q.requestFullscreen = function (A, I) {
                    WA.requestFullscreen(A, I)
                  }),
                    (Q.requestAnimationFrame = function (A) {
                      WA.requestAnimationFrame(A)
                    }),
                    (Q.setCanvasSize = function (A, I, g) {
                      WA.setCanvasSize(A, I, g)
                    }),
                    (Q.pauseMainLoop = function () {
                      WA.mainLoop.pause()
                    }),
                    (Q.resumeMainLoop = function () {
                      WA.mainLoop.resume()
                    }),
                    (Q.getUserMedia = function () {
                      WA.getUserMedia()
                    }),
                    (Q.createContext = function (A, I, g, C) {
                      return WA.createContext(A, I, g, C)
                    })
                  var ZC = function (A, I, g, C) {
                      A || (A = this),
                        (this.parent = A),
                        (this.mount = A.mount),
                        (this.mounted = null),
                        (this.id = oI.nextInode++),
                        (this.name = I),
                        (this.mode = g),
                        (this.node_ops = {}),
                        (this.stream_ops = {}),
                        (this.rdev = C)
                    },
                    vC = 365,
                    jC = 146
                  Object.defineProperties(ZC.prototype, {
                    read: {
                      get: function () {
                        return (this.mode & vC) === vC
                      },
                      set: function (A) {
                        A ? (this.mode |= vC) : (this.mode &= ~vC)
                      }
                    },
                    write: {
                      get: function () {
                        return (this.mode & jC) === jC
                      },
                      set: function (A) {
                        A ? (this.mode |= jC) : (this.mode &= ~jC)
                      }
                    },
                    isFolder: {
                      get: function () {
                        return oI.isDir(this.mode)
                      }
                    },
                    isDevice: {
                      get: function () {
                        return oI.isChrdev(this.mode)
                      }
                    }
                  }),
                    (oI.FSNode = ZC),
                    oI.staticInit(),
                    (Q.FS_createFolder = oI.createFolder),
                    (Q.FS_createPath = oI.createPath),
                    (Q.FS_createDataFile = oI.createDataFile),
                    (Q.FS_createPreloadedFile = oI.createPreloadedFile),
                    (Q.FS_createLazyFile = oI.createLazyFile),
                    (Q.FS_createLink = oI.createLink),
                    (Q.FS_createDevice = oI.createDevice),
                    (Q.FS_unlink = oI.unlink),
                    (cI = Q.InternalError = yI(Error, "InternalError")),
                    LI(),
                    (dI = Q.BindingError = yI(Error, "BindingError")),
                    _I(),
                    Ng(),
                    hg(),
                    (Sg = Q.UnboundTypeError = yI(Error, "UnboundTypeError")),
                    bg()
                  var zC = !1
                  function _C(A, I, g) {
                    var C = g > 0 ? g : m(A) + 1,
                      B = new Array(C),
                      Q = u(A, B, 0, B.length)
                    return I && (B.length = Q), B
                  }
                  function $C(A) {
                    for (var I = [], g = 0; g < A.length; g++) {
                      var C = A[g]
                      C > 255 &&
                        (zC &&
                          K(
                            !1,
                            "Character code " +
                              C +
                              " (" +
                              String.fromCharCode(C) +
                              ")  at offset " +
                              g +
                              " not in 0x00-0xFF."
                          ),
                        (C &= 255)),
                        I.push(String.fromCharCode(C))
                    }
                    return I.join("")
                  }
                  var AB =
                    "function" == typeof atob
                      ? atob
                      : function (A) {
                          var I,
                            g,
                            C,
                            B,
                            Q,
                            E,
                            i =
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            o = "",
                            D = 0
                          A = A.replace(/[^A-Za-z0-9\+\/\=]/g, "")
                          do {
                            ;(I =
                              (i.indexOf(A.charAt(D++)) << 2) |
                              ((B = i.indexOf(A.charAt(D++))) >> 4)),
                              (g =
                                ((15 & B) << 4) |
                                ((Q = i.indexOf(A.charAt(D++))) >> 2)),
                              (C =
                                ((3 & Q) << 6) |
                                (E = i.indexOf(A.charAt(D++)))),
                              (o += String.fromCharCode(I)),
                              64 !== Q && (o += String.fromCharCode(g)),
                              64 !== E && (o += String.fromCharCode(C))
                          } while (D < A.length)
                          return o
                        }
                  function IB(A) {
                    if ("boolean" == typeof a && a) {
                      var I
                      try {
                        I = Buffer.from(A, "base64")
                      } catch (g) {
                        I = new Buffer(A, "base64")
                      }
                      return new Uint8Array(
                        I.buffer,
                        I.byteOffset,
                        I.byteLength
                      )
                    }
                    try {
                      for (
                        var g = AB(A), C = new Uint8Array(g.length), B = 0;
                        B < g.length;
                        ++B
                      )
                        C[B] = g.charCodeAt(B)
                      return C
                    } catch (A) {
                      throw new Error(
                        "Converting base64 string to bytes failed."
                      )
                    }
                  }
                  function gB(A) {
                    if (qA(A)) return IB(A.slice(dA.length))
                  }
                  var CB,
                    BB = {
                      __cxa_allocate_exception: zA,
                      __cxa_atexit: _A,
                      __cxa_throw: II,
                      __map_file: CI,
                      __sys_munmap: tI,
                      _embind_finalize_value_array: MI,
                      _embind_finalize_value_object: JI,
                      _embind_register_bool: HI,
                      _embind_register_class: Jg,
                      _embind_register_class_class_function: Kg,
                      _embind_register_class_constructor: dg,
                      _embind_register_class_function: qg,
                      _embind_register_class_property: Hg,
                      _embind_register_constant: ug,
                      _embind_register_emval: Pg,
                      _embind_register_float: Zg,
                      _embind_register_function: vg,
                      _embind_register_integer: zg,
                      _embind_register_memory_view: _g,
                      _embind_register_std_string: $g,
                      _embind_register_std_wstring: AC,
                      _embind_register_value_array: IC,
                      _embind_register_value_array_element: gC,
                      _embind_register_value_object: CC,
                      _embind_register_value_object_field: BC,
                      _embind_register_void: QC,
                      _emval_call_void_method: nC,
                      _emval_decref: xg,
                      _emval_get_method_caller: wC,
                      _emval_incref: hC,
                      _emval_new_array: eC,
                      _emval_new_cstring: GC,
                      _emval_set_property: FC,
                      _emval_take_value: RC,
                      abort: rC,
                      clock_gettime: yC,
                      emscripten_get_sbrk_ptr: cC,
                      emscripten_memcpy_big: UC,
                      emscripten_resize_heap: kC,
                      environ_get: YC,
                      environ_sizes_get: KC,
                      fd_close: dC,
                      fd_read: qC,
                      fd_seek: fC,
                      fd_write: HC,
                      memory: J,
                      pthread_mutexattr_destroy: uC,
                      pthread_mutexattr_init: pC,
                      pthread_mutexattr_settype: mC,
                      setTempRet0: xC,
                      strftime_l: OC,
                      table: L
                    },
                    QB =
                      (bA(),
                      (Q.___wasm_call_ctors = function () {
                        return (QB = Q.___wasm_call_ctors =
                          Q.asm.__wasm_call_ctors).apply(null, arguments)
                      })),
                    EB = (Q._malloc = function () {
                      return (EB = Q._malloc = Q.asm.malloc).apply(
                        null,
                        arguments
                      )
                    }),
                    iB = (Q._free = function () {
                      return (iB = Q._free = Q.asm.free).apply(null, arguments)
                    }),
                    oB = (Q.___errno_location = function () {
                      return (oB = Q.___errno_location =
                        Q.asm.__errno_location).apply(null, arguments)
                    }),
                    DB = (Q.___getTypeName = function () {
                      return (DB = Q.___getTypeName =
                        Q.asm.__getTypeName).apply(null, arguments)
                    }),
                    nB =
                      ((Q.___embind_register_native_and_builtin_types =
                        function () {
                          return (Q.___embind_register_native_and_builtin_types =
                            Q.asm.__embind_register_native_and_builtin_types).apply(
                            null,
                            arguments
                          )
                        }),
                      (Q._setThrew = function () {
                        return (Q._setThrew = Q.asm.setThrew).apply(
                          null,
                          arguments
                        )
                      }),
                      (Q.stackSave = function () {
                        return (nB = Q.stackSave = Q.asm.stackSave).apply(
                          null,
                          arguments
                        )
                      })),
                    tB = (Q.stackRestore = function () {
                      return (tB = Q.stackRestore = Q.asm.stackRestore).apply(
                        null,
                        arguments
                      )
                    }),
                    aB = (Q.stackAlloc = function () {
                      return (aB = Q.stackAlloc = Q.asm.stackAlloc).apply(
                        null,
                        arguments
                      )
                    })
                  function sB(A) {
                    ;(this.name = "ExitStatus"),
                      (this.message =
                        "Program terminated with exit(" + A + ")"),
                      (this.status = A)
                  }
                  function wB(A) {
                    function I() {
                      CB ||
                        ((CB = !0),
                        (Q.calledRun = !0),
                        Y ||
                          (GA(),
                          FA(),
                          C(Q),
                          Q.onRuntimeInitialized && Q.onRuntimeInitialized(),
                          RA()))
                    }
                    ;(A = A || o),
                      MA > 0 ||
                        (eA(),
                        MA > 0 ||
                          (Q.setStatus
                            ? (Q.setStatus("Running..."),
                              setTimeout(function () {
                                setTimeout(function () {
                                  Q.setStatus("")
                                }, 1),
                                  I()
                              }, 1))
                            : I()))
                  }
                  if (
                    ((Q.___cxa_demangle = function () {
                      return (Q.___cxa_demangle = Q.asm.__cxa_demangle).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q._emscripten_main_thread_process_queued_calls =
                      function () {
                        return (Q._emscripten_main_thread_process_queued_calls =
                          Q.asm.emscripten_main_thread_process_queued_calls).apply(
                          null,
                          arguments
                        )
                      }),
                    (Q.__growWasmMemory = function () {
                      return (Q.__growWasmMemory =
                        Q.asm.__growWasmMemory).apply(null, arguments)
                    }),
                    (Q.dynCall_ii = function () {
                      return (Q.dynCall_ii = Q.asm.dynCall_ii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_vi = function () {
                      return (Q.dynCall_vi = Q.asm.dynCall_vi).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_i = function () {
                      return (Q.dynCall_i = Q.asm.dynCall_i).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iii = function () {
                      return (Q.dynCall_iii = Q.asm.dynCall_iii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiii = function () {
                      return (Q.dynCall_iiii = Q.asm.dynCall_iiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiii = function () {
                      return (Q.dynCall_iiiii = Q.asm.dynCall_iiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiiii = function () {
                      return (Q.dynCall_iiiiii = Q.asm.dynCall_iiiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiiiii = function () {
                      return (Q.dynCall_iiiiiii = Q.asm.dynCall_iiiiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viii = function () {
                      return (Q.dynCall_viii = Q.asm.dynCall_viii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiii = function () {
                      return (Q.dynCall_viiii = Q.asm.dynCall_viiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_vii = function () {
                      return (Q.dynCall_vii = Q.asm.dynCall_vii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiidd = function () {
                      return (Q.dynCall_viiidd = Q.asm.dynCall_viiidd).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiidd = function () {
                      return (Q.dynCall_viiiidd = Q.asm.dynCall_viiiidd).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiid = function () {
                      return (Q.dynCall_viiid = Q.asm.dynCall_viiid).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiid = function () {
                      return (Q.dynCall_viiiid = Q.asm.dynCall_viiiid).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiii = function () {
                      return (Q.dynCall_viiiii = Q.asm.dynCall_viiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_dii = function () {
                      return (Q.dynCall_dii = Q.asm.dynCall_dii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_diii = function () {
                      return (Q.dynCall_diii = Q.asm.dynCall_diii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiid = function () {
                      return (Q.dynCall_iiiid = Q.asm.dynCall_iiiid).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_fiii = function () {
                      return (Q.dynCall_fiii = Q.asm.dynCall_fiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_fiiii = function () {
                      return (Q.dynCall_fiiii = Q.asm.dynCall_fiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_fiiiii = function () {
                      return (Q.dynCall_fiiiii = Q.asm.dynCall_fiiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_diiiii = function () {
                      return (Q.dynCall_diiiii = Q.asm.dynCall_diiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_diiii = function () {
                      return (Q.dynCall_diiii = Q.asm.dynCall_diiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viid = function () {
                      return (Q.dynCall_viid = Q.asm.dynCall_viid).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_fii = function () {
                      return (Q.dynCall_fii = Q.asm.dynCall_fii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viif = function () {
                      return (Q.dynCall_viif = Q.asm.dynCall_viif).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiiiiiiii = function () {
                      return (Q.dynCall_iiiiiiiiii =
                        Q.asm.dynCall_iiiiiiiiii).apply(null, arguments)
                    }),
                    (Q.dynCall_iiiiiiiii = function () {
                      return (Q.dynCall_iiiiiiiii =
                        Q.asm.dynCall_iiiiiiiii).apply(null, arguments)
                    }),
                    (Q.dynCall_iiiiiiii = function () {
                      return (Q.dynCall_iiiiiiii =
                        Q.asm.dynCall_iiiiiiii).apply(null, arguments)
                    }),
                    (Q.dynCall_viiif = function () {
                      return (Q.dynCall_viiif = Q.asm.dynCall_viiif).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiif = function () {
                      return (Q.dynCall_iiiif = Q.asm.dynCall_iiiif).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiiiii = function () {
                      return (Q.dynCall_viiiiiii =
                        Q.asm.dynCall_viiiiiii).apply(null, arguments)
                    }),
                    (Q.dynCall_viiiiii = function () {
                      return (Q.dynCall_viiiiii = Q.asm.dynCall_viiiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiidd = function () {
                      return (Q.dynCall_iiidd = Q.asm.dynCall_iiidd).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viidd = function () {
                      return (Q.dynCall_viidd = Q.asm.dynCall_viidd).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiiddi = function () {
                      return (Q.dynCall_viiiiddi =
                        Q.asm.dynCall_viiiiddi).apply(null, arguments)
                    }),
                    (Q.dynCall_viiiddi = function () {
                      return (Q.dynCall_viiiddi = Q.asm.dynCall_viiiddi).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiiiiii = function () {
                      return (Q.dynCall_viiiiiiii =
                        Q.asm.dynCall_viiiiiiii).apply(null, arguments)
                    }),
                    (Q.dynCall_viijii = function () {
                      return (Q.dynCall_viijii = Q.asm.dynCall_viijii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_ji = function () {
                      return (Q.dynCall_ji = Q.asm.dynCall_ji).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiiiiiii = function () {
                      return (Q.dynCall_viiiiiiiii =
                        Q.asm.dynCall_viiiiiiiii).apply(null, arguments)
                    }),
                    (Q.dynCall_viiiiiiiddi = function () {
                      return (Q.dynCall_viiiiiiiddi =
                        Q.asm.dynCall_viiiiiiiddi).apply(null, arguments)
                    }),
                    (Q.dynCall_viiiiiiiiiiddi = function () {
                      return (Q.dynCall_viiiiiiiiiiddi =
                        Q.asm.dynCall_viiiiiiiiiiddi).apply(null, arguments)
                    }),
                    (Q.dynCall_viiiiiiiiii = function () {
                      return (Q.dynCall_viiiiiiiiii =
                        Q.asm.dynCall_viiiiiiiiii).apply(null, arguments)
                    }),
                    (Q.dynCall_viidi = function () {
                      return (Q.dynCall_viidi = Q.asm.dynCall_viidi).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_vidii = function () {
                      return (Q.dynCall_vidii = Q.asm.dynCall_vidii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_v = function () {
                      return (Q.dynCall_v = Q.asm.dynCall_v).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_viiiiiiiiidd = function () {
                      return (Q.dynCall_viiiiiiiiidd =
                        Q.asm.dynCall_viiiiiiiiidd).apply(null, arguments)
                    }),
                    (Q.dynCall_jiji = function () {
                      return (Q.dynCall_jiji = Q.asm.dynCall_jiji).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iidiiii = function () {
                      return (Q.dynCall_iidiiii = Q.asm.dynCall_iidiiii).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiiij = function () {
                      return (Q.dynCall_iiiiij = Q.asm.dynCall_iiiiij).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiiid = function () {
                      return (Q.dynCall_iiiiid = Q.asm.dynCall_iiiiid).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiiijj = function () {
                      return (Q.dynCall_iiiiijj = Q.asm.dynCall_iiiiijj).apply(
                        null,
                        arguments
                      )
                    }),
                    (Q.dynCall_iiiiiijj = function () {
                      return (Q.dynCall_iiiiiijj =
                        Q.asm.dynCall_iiiiiijj).apply(null, arguments)
                    }),
                    (Q.getMemory = d),
                    (Q.addRunDependency = lA),
                    (Q.removeRunDependency = LA),
                    (Q.FS_createFolder = oI.createFolder),
                    (Q.FS_createPath = oI.createPath),
                    (Q.FS_createDataFile = oI.createDataFile),
                    (Q.FS_createPreloadedFile = oI.createPreloadedFile),
                    (Q.FS_createLazyFile = oI.createLazyFile),
                    (Q.FS_createLink = oI.createLink),
                    (Q.FS_createDevice = oI.createDevice),
                    (Q.FS_unlink = oI.unlink),
                    (JA = function A() {
                      CB || wB(), CB || (JA = A)
                    }),
                    (Q.run = wB),
                    Q.preInit)
                  )
                    for (
                      "function" == typeof Q.preInit &&
                      (Q.preInit = [Q.preInit]);
                      Q.preInit.length > 0;

                    )
                      Q.preInit.pop()()
                  function hB(A, I) {
                    ;(this.start = void 0 === A ? 0 : A),
                      (this.end = void 0 === I ? 0 : I)
                  }
                  function eB(A, I) {
                    ;(this.x = void 0 === A ? 0 : A),
                      (this.y = void 0 === I ? 0 : I)
                  }
                  function GB(A, I) {
                    ;(this.width = void 0 === A ? 0 : A),
                      (this.height = void 0 === I ? 0 : I)
                  }
                  function FB() {
                    switch (arguments.length) {
                      case 0:
                        ;(this.x = 0),
                          (this.y = 0),
                          (this.width = 0),
                          (this.height = 0)
                        break
                      case 1:
                        var A = arguments[0]
                        ;(this.x = A.x),
                          (this.y = A.y),
                          (this.width = A.width),
                          (this.height = A.height)
                        break
                      case 2:
                        var I = arguments[0],
                          g = arguments[1]
                        ;(this.x = I.x),
                          (this.y = I.y),
                          (this.width = g.width),
                          (this.height = g.height)
                        break
                      case 4:
                        ;(this.x = arguments[0]),
                          (this.y = arguments[1]),
                          (this.width = arguments[2]),
                          (this.height = arguments[3])
                        break
                      default:
                        throw new Error("Invalid arguments")
                    }
                  }
                  function RB() {
                    switch (arguments.length) {
                      case 0:
                        ;(this.center = { x: 0, y: 0 }),
                          (this.size = { width: 0, height: 0 }),
                          (this.angle = 0)
                        break
                      case 3:
                        ;(this.center = arguments[0]),
                          (this.size = arguments[1]),
                          (this.angle = arguments[2])
                        break
                      default:
                        throw new Error("Invalid arguments")
                    }
                  }
                  function rB(A, I, g, C) {
                    this.push(void 0 === A ? 0 : A),
                      this.push(void 0 === I ? 0 : I),
                      this.push(void 0 === g ? 0 : g),
                      this.push(void 0 === C ? 0 : C)
                  }
                  function NB() {
                    switch (arguments.length) {
                      case 0:
                        ;(this.minVal = 0),
                          (this.maxVal = 0),
                          (this.minLoc = new eB()),
                          (this.maxLoc = new eB())
                        break
                      case 4:
                        ;(this.minVal = arguments[0]),
                          (this.maxVal = arguments[1]),
                          (this.minLoc = arguments[2]),
                          (this.maxLoc = arguments[3])
                        break
                      default:
                        throw new Error("Invalid arguments")
                    }
                  }
                  function yB() {
                    switch (arguments.length) {
                      case 0:
                        ;(this.center = new eB()), (this.radius = 0)
                        break
                      case 2:
                        ;(this.center = arguments[0]),
                          (this.radius = arguments[1])
                        break
                      default:
                        throw new Error("Invalid arguments")
                    }
                  }
                  function cB() {
                    switch (arguments.length) {
                      case 0:
                        ;(this.type = 0),
                          (this.maxCount = 0),
                          (this.epsilon = 0)
                        break
                      case 3:
                        ;(this.type = arguments[0]),
                          (this.maxCount = arguments[1]),
                          (this.epsilon = arguments[2])
                        break
                      default:
                        throw new Error("Invalid arguments")
                    }
                  }
                  return (
                    wB(),
                    void 0 === Q.FS && void 0 !== oI && (Q.FS = oI),
                    (Q.imread = function (I) {
                      var g,
                        C = null,
                        B = null
                      if (
                        (g =
                          "string" == typeof I
                            ? document.getElementById(I)
                            : I) instanceof HTMLImageElement
                      )
                        ((C = document.createElement("canvas")).width =
                          g.width),
                          (C.height = g.height),
                          (B = C.getContext("2d")).drawImage(
                            g,
                            0,
                            0,
                            g.width,
                            g.height
                          )
                      else {
                        if (!(g instanceof HTMLCanvasElement))
                          throw new Error(
                            "Please input the valid canvas or img id."
                          )
                        B = (C = g).getContext("2d")
                      }
                      var Q = B.getImageData(0, 0, C.width, C.height)
                      return A.matFromImageData(Q)
                    }),
                    (Q.imshow = function (I, g) {
                      var C = null
                      if (
                        !(
                          (C =
                            "string" == typeof I
                              ? document.getElementById(I)
                              : I) instanceof HTMLCanvasElement
                        )
                      )
                        throw new Error(
                          "Please input the valid canvas element or id."
                        )
                      if (!(g instanceof A.Mat))
                        throw new Error(
                          "Please input the valid cv.Mat instance."
                        )
                      var B = new A.Mat(),
                        Q = g.type() % 8,
                        E = Q <= A.CV_8S ? 1 : Q <= A.CV_32S ? 1 / 256 : 255,
                        i = Q === A.CV_8S || Q === A.CV_16S ? 128 : 0
                      switch ((g.convertTo(B, A.CV_8U, E, i), B.type())) {
                        case A.CV_8UC1:
                          A.cvtColor(B, B, A.COLOR_GRAY2RGBA)
                          break
                        case A.CV_8UC3:
                          A.cvtColor(B, B, A.COLOR_RGB2RGBA)
                          break
                        case A.CV_8UC4:
                          break
                        default:
                          throw new Error(
                            "Bad number of channels (Source image must have 1, 3 or 4 channels)"
                          )
                      }
                      var o = new ImageData(
                          new Uint8ClampedArray(B.data),
                          B.cols,
                          B.rows
                        ),
                        D = C.getContext("2d")
                      D.clearRect(0, 0, C.width, C.height),
                        (C.width = o.width),
                        (C.height = o.height),
                        D.putImageData(o, 0, 0),
                        B.delete()
                    }),
                    (Q.VideoCapture = function (I) {
                      var g
                      if (
                        !(
                          (g =
                            "string" == typeof I
                              ? document.getElementById(I)
                              : I) instanceof HTMLVideoElement
                        )
                      )
                        throw new Error(
                          "Please input the valid video element or id."
                        )
                      var C = document.createElement("canvas")
                      ;(C.width = g.width), (C.height = g.height)
                      var B = C.getContext("2d")
                      ;(this.video = g),
                        (this.read = function (I) {
                          if (!(I instanceof A.Mat))
                            throw new Error(
                              "Please input the valid cv.Mat instance."
                            )
                          if (I.type() !== A.CV_8UC4)
                            throw new Error(
                              "Bad type of input mat: the type should be cv.CV_8UC4."
                            )
                          if (I.cols !== g.width || I.rows !== g.height)
                            throw new Error(
                              "Bad size of input mat: the size should be same as the video."
                            )
                          B.drawImage(g, 0, 0, g.width, g.height),
                            I.data.set(
                              B.getImageData(0, 0, g.width, g.height).data
                            )
                        })
                    }),
                    (Q.Range = hB),
                    (Q.Point = eB),
                    (Q.Size = GB),
                    (Q.Rect = FB),
                    (RB.points = function (A) {
                      return Q.rotatedRectPoints(A)
                    }),
                    (RB.boundingRect = function (A) {
                      return Q.rotatedRectBoundingRect(A)
                    }),
                    (RB.boundingRect2f = function (A) {
                      return Q.rotatedRectBoundingRect2f(A)
                    }),
                    (Q.RotatedRect = RB),
                    (rB.prototype = new Array()),
                    (rB.all = function (A) {
                      return new rB(A, A, A, A)
                    }),
                    (Q.Scalar = rB),
                    (Q.MinMaxLoc = NB),
                    (Q.Circle = yB),
                    (Q.TermCriteria = cB),
                    (Q.matFromArray = function (I, g, C, B) {
                      var Q = new A.Mat(I, g, C)
                      switch (C) {
                        case A.CV_8U:
                        case A.CV_8UC1:
                        case A.CV_8UC2:
                        case A.CV_8UC3:
                        case A.CV_8UC4:
                          Q.data.set(B)
                          break
                        case A.CV_8S:
                        case A.CV_8SC1:
                        case A.CV_8SC2:
                        case A.CV_8SC3:
                        case A.CV_8SC4:
                          Q.data8S.set(B)
                          break
                        case A.CV_16U:
                        case A.CV_16UC1:
                        case A.CV_16UC2:
                        case A.CV_16UC3:
                        case A.CV_16UC4:
                          Q.data16U.set(B)
                          break
                        case A.CV_16S:
                        case A.CV_16SC1:
                        case A.CV_16SC2:
                        case A.CV_16SC3:
                        case A.CV_16SC4:
                          Q.data16S.set(B)
                          break
                        case A.CV_32S:
                        case A.CV_32SC1:
                        case A.CV_32SC2:
                        case A.CV_32SC3:
                        case A.CV_32SC4:
                          Q.data32S.set(B)
                          break
                        case A.CV_32F:
                        case A.CV_32FC1:
                        case A.CV_32FC2:
                        case A.CV_32FC3:
                        case A.CV_32FC4:
                          Q.data32F.set(B)
                          break
                        case A.CV_64F:
                        case A.CV_64FC1:
                        case A.CV_64FC2:
                        case A.CV_64FC3:
                        case A.CV_64FC4:
                          Q.data64F.set(B)
                          break
                        default:
                          throw new Error("Type is unsupported")
                      }
                      return Q
                    }),
                    (Q.matFromImageData = function (I) {
                      var g = new A.Mat(I.height, I.width, A.CV_8UC4)
                      return g.data.set(I.data), g
                    }),
                    A
                  )
                }),
                (A.exports = C),
                "undefined" == typeof Module && (Module = {}),
                C(Module)))
              var I, C
            }.call(I, g, I, A)),
            void 0 === C || (A.exports = C)
        },
        101: function (A) {
          A.exports = (() => {
            "use strict"
            var A = {
                646: (A, I, g) => {
                  g.r(I),
                    g.d(I, {
                      GLHelper: () => N,
                      glInstance: () => rA,
                      ops: () => RA,
                      webgl_types: () => C
                    })
                  var C = {}
                  g.r(C), g.d(C, { UniformType: () => t })
                  var B = {}
                  g.r(B),
                    g.d(B, {
                      hardSigmoid: () => f,
                      leakyRelu: () => Y,
                      pow_func: () => u,
                      prelu: () => l,
                      relu6: () => L,
                      scale: () => K,
                      scaleWidthBias: () => d,
                      sigmoid: () => q,
                      sqrt: () => H,
                      tanh_func: () => p,
                      transferFromNHWCtoNCHW: () => J
                    })
                  var Q = {}
                  function E() {
                    var A
                    if ("undefined" != typeof window) A = window
                    else if (void 0 !== g.g) A = g.g
                    else {
                      if ("undefined" == typeof self)
                        throw new Error("Could not find a global object")
                      A = self
                    }
                    return A
                  }
                  function i(A, I) {
                    var g = E()
                    return g[A] || (g[A] = I), g[A]
                  }
                  g.r(Q),
                    g.d(Q, {
                      getPixelsFromTexturePos: () => T,
                      getSamplerCode: () => X,
                      getTensorPosFromArrayIndex: () => V,
                      getValueFromTensorPos: () => m,
                      getValueFromTensorPosPacking: () => x,
                      moveTexture2PosToReal: () => b
                    })
                  var o = {
                    opRegistry: { ops: {} },
                    backend: "",
                    backendInstance: null
                  }
                  o = i("GLOBALS", o)
                  var D = E()
                  D.ImageBitmap || (D.ImageBitmap = function () {})
                  const n = i(
                    "env",
                    new ((function () {
                      function A() {
                        this.ENV = {}
                      }
                      return (
                        (A.prototype.set = function (A, I) {
                          this.ENV[A] = I
                        }),
                        (A.prototype.get = function (A) {
                          return this.ENV[A]
                        }),
                        A
                      )
                    })())()
                  )
                  var t, a, s
                  function w(A) {
                    for (
                      var I = A.length,
                        g = (function () {
                          for (
                            var A = 0, I = 0, g = arguments.length;
                            I < g;
                            I++
                          )
                            A += arguments[I].length
                          var C = Array(A),
                            B = 0
                          for (I = 0; I < g; I++)
                            for (
                              var Q = arguments[I], E = 0, i = Q.length;
                              E < i;
                              E++, B++
                            )
                              C[B] = Q[E]
                          return C
                        })(A),
                        C = [];
                      I > 1;

                    )
                      g.splice(0, 1),
                        C.push(
                          g.reduce(function (A, I) {
                            return A * I
                          })
                        ),
                        I--
                    return C
                  }
                  function h(A) {
                    return A.reduce(function (A, I) {
                      return A * I
                    }, 1)
                  }
                  function e(A, I) {
                    return 0 === A.length
                      ? ""
                      : A.reduce(function (I, g, C) {
                          return (
                            I +
                            "float(" +
                            g +
                            ")" +
                            (C === A.length - 1 ? ");" : ",")
                          )
                        }, "float " + I + "[" + A.length + "] = float[](")
                  }
                  function G(A, I) {
                    if (1 === A.length)
                      return "float " + I + " = float(" + A[0] + ");"
                    for (
                      var g = A.length,
                        C =
                          "\n        vec" +
                          g +
                          " " +
                          I +
                          " = vec" +
                          g +
                          "(\n    ",
                        B = 0;
                      B < g;
                      B++
                    )
                      C += "float(" + A[B] + "),"
                    return C.slice(0, -1) + ");"
                  }
                  !(function (A) {
                    ;(A.uniform1f = "1f"),
                      (A.uniform1fv = "1fv"),
                      (A.uniform1i = "1i"),
                      (A.uniform1iv = "1iv"),
                      (A.uniform2f = "2f"),
                      (A.uniform2fv = "2fv"),
                      (A.uniform2i = "2i"),
                      (A.uniform2iv = "2iv"),
                      (A.uniform3f = "3f"),
                      (A.uniform3fv = "3fv"),
                      (A.uniform3i = "3i"),
                      (A.uniform3iv = "3iv"),
                      (A.uniform4f = "4f"),
                      (A.uniform4fv = "4fv"),
                      (A.uniform4i = "4i"),
                      (A.uniform4iv = "4iv")
                  })(t || (t = {})),
                    (function (A) {
                      ;(A[(A.VS_SHADER = 0)] = "VS_SHADER"),
                        (A[(A.FS_SHADER = 1)] = "FS_SHADER")
                    })(a || (a = {})),
                    (function (A) {
                      ;(A[(A.FLOAT_VEC2 = 35664)] = "FLOAT_VEC2"),
                        (A[(A.FLOAT_VEC3 = 35665)] = "FLOAT_VEC3"),
                        (A[(A.FLOAT_VEC4 = 35666)] = "FLOAT_VEC4"),
                        (A[(A.INT_VEC2 = 35667)] = "INT_VEC2"),
                        (A[(A.INT_VEC3 = 35668)] = "INT_VEC3"),
                        (A[(A.INT_VEC4 = 35669)] = "INT_VEC4"),
                        (A[(A.BOOL = 35670)] = "BOOL"),
                        (A[(A.BOOL_VEC2 = 35671)] = "BOOL_VEC2"),
                        (A[(A.BOOL_VEC3 = 35672)] = "BOOL_VEC3"),
                        (A[(A.BOOL_VEC4 = 35673)] = "BOOL_VEC4"),
                        (A[(A.FLOAT_MAT2 = 35674)] = "FLOAT_MAT2"),
                        (A[(A.FLOAT_MAT3 = 35675)] = "FLOAT_MAT3"),
                        (A[(A.FLOAT_MAT4 = 35676)] = "FLOAT_MAT4"),
                        (A[(A.SAMPLER_2D = 35677)] = "SAMPLER_2D"),
                        (A[(A.SAMPLER_CUBE = 35678)] = "SAMPLER_CUBE"),
                        (A[(A.FLOAT = 5126)] = "FLOAT"),
                        (A[(A.INT = 5124)] = "INT")
                    })(s || (s = {}))
                  var F,
                    R = function (A, I, g) {
                      ;(this.size = A), (this.type = I), (this.location = g)
                    },
                    r = function (A, I, g) {
                      ;(this.size = A), (this.type = I), (this.location = g)
                    },
                    N = (function () {
                      function A() {}
                      return (
                        (A.getWebglVersion = function () {
                          return n.get("webglVersion")
                        }),
                        (A.createCanvas = function () {
                          return (
                            n.get("canvas") ||
                            (document && document.createElement("canvas"))
                          )
                        }),
                        (A.setWebglVersion = function (A) {
                          n.set("webglVersion", A)
                        }),
                        (A.setWebGLRenderingContext = function (A) {
                          return (this.gl = A), A
                        }),
                        (A.getWebGLRenderingContext = function () {
                          return this.gl
                            ? this.gl
                            : this.createWebGLRenderingContext()
                        }),
                        (A.createWebGLRenderingContext = function () {
                          if (this.gl) return this.gl
                          var A = this.createCanvas()
                          if (!A) return null
                          A.addEventListener &&
                            A.addEventListener(
                              "webglcontextlost",
                              function (A) {
                                throw (
                                  (A.preventDefault(),
                                  Error("webgl context is lost~"))
                                )
                              },
                              !1
                            )
                          var I = A.getContext("webgl2", this.WEBGL_ATTRIBUTES)
                          return (
                            I
                              ? n.set("webglVersion", 2)
                              : (n.set("webglVersion", 1),
                                (I =
                                  A.getContext(
                                    "webgl",
                                    this.WEBGL_ATTRIBUTES
                                  ) ||
                                  A.getContext(
                                    "experimental-webgl",
                                    this.WEBGL_ATTRIBUTES
                                  ))),
                            I
                          )
                        }),
                        (A.printStates = function (A) {
                          console.log(
                            "1. isBlendEnable = " + A.isEnabled(A.BLEND)
                          ),
                            console.log(
                              "2. isCullFaceEnable = " +
                                A.isEnabled(A.CULL_FACE)
                            ),
                            console.log(
                              "3. isDepthTestEnable = " +
                                A.isEnabled(A.DEPTH_TEST)
                            ),
                            console.log(
                              "4. isDitherEnable = " + A.isEnabled(A.DITHER)
                            ),
                            console.log(
                              "5. isPolygonOffsetFillEnable = " +
                                A.isEnabled(A.POLYGON_OFFSET_FILL)
                            ),
                            console.log(
                              "6. isSampleAlphtToCoverageEnable = " +
                                A.isEnabled(A.SAMPLE_ALPHA_TO_COVERAGE)
                            ),
                            console.log(
                              "7. isSampleCoverageEnable = " +
                                A.isEnabled(A.SAMPLE_COVERAGE)
                            ),
                            console.log(
                              "8. isScissorTestEnable = " +
                                A.isEnabled(A.SCISSOR_TEST)
                            ),
                            console.log(
                              "9. isStencilTestEnable = " +
                                A.isEnabled(A.STENCIL_TEST)
                            )
                        }),
                        (A.printWebGLInfo = function (A) {
                          console.log(
                            "renderer = " + A.getParameter(A.RENDERER)
                          ),
                            console.log(
                              "version = " + A.getParameter(A.VERSION)
                            ),
                            console.log("vendor = " + A.getParameter(A.VENDOR)),
                            console.log(
                              "glsl version = " +
                                A.getParameter(A.SHADING_LANGUAGE_VERSION)
                            )
                        }),
                        (A.printWebGLTextureInfo = function (A) {
                          console.log(
                            "MAX_COMBINED_TEXTURE_IMAGE_UNITS = ",
                            A.getParameter(A.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
                          ),
                            console.log(
                              "MAX_TEXTURE_IMAGE_UNITS = ",
                              A.getParameter(A.MAX_TEXTURE_IMAGE_UNITS)
                            ),
                            console.log(
                              "MAX_TEXTURE_SIZE = ",
                              A.getParameter(A.MAX_TEXTURE_SIZE)
                            ),
                            console.log(
                              "MAX_CUBE_MAP_TEXTURE_SIZE = ",
                              A.getParameter(A.MAX_CUBE_MAP_TEXTURE_SIZE)
                            )
                        }),
                        (A.triggerContextLostEvent = function (A) {
                          var I = A.getExtension("WEBGL_lose_context")
                          null !== I && I.loseContext()
                        }),
                        (A.checkGLError = function (A) {
                          var I = A.getError()
                          return (
                            0 !== I && (console.log("WebGL Error NO: ", I), !0)
                          )
                        }),
                        (A.setDefaultState = function (A) {
                          A.clearColor(0, 0, 0, 0),
                            A.clearDepth(1),
                            A.enable(A.DEPTH_TEST),
                            A.enable(A.CULL_FACE),
                            A.enable(A.SCISSOR_TEST)
                        }),
                        (A.setViewport = function (A, I) {
                          A.viewport(I[0], I[1], I[2], I[3])
                        }),
                        (A.initShader = function (A, I, g) {
                          var C = this.createShader(A, I)
                          return this.compileShader(A, g, C), C
                        }),
                        (A.createShader = function (A, I) {
                          var g
                          if (
                            null ===
                            (g =
                              I === a.VS_SHADER
                                ? A.createShader(A.VERTEX_SHADER)
                                : A.createShader(A.FRAGMENT_SHADER))
                          )
                            throw new Error("WebGLShader创建失败！")
                          return g
                        }),
                        (A.compileShader = function (A, I, g) {
                          return (
                            A.shaderSource(g, I),
                            A.compileShader(g),
                            !1 !== A.getShaderParameter(g, A.COMPILE_STATUS) ||
                              (console.error(A.getShaderInfoLog(g)),
                              A.deleteShader(g),
                              !1)
                          )
                        }),
                        (A.createProgram = function (A) {
                          var I = A.createProgram()
                          if (null === I)
                            throw new Error("WebGLProgram创建失败！")
                          return I
                        }),
                        (A.linkProgram = function (A, I, g, C, B, Q) {
                          return (
                            void 0 === B && (B = null),
                            void 0 === Q && (Q = null),
                            A.attachShader(I, g),
                            A.attachShader(I, C),
                            null !== B && B(A, I),
                            A.linkProgram(I),
                            !1 === A.getProgramParameter(I, A.LINK_STATUS)
                              ? (console.error(A.getProgramInfoLog(I)),
                                A.deleteShader(g),
                                A.deleteShader(C),
                                A.deleteProgram(I),
                                !1)
                              : (A.validateProgram(I),
                                !1 ===
                                A.getProgramParameter(I, A.VALIDATE_STATUS)
                                  ? (console.error(A.getProgramInfoLog(I)),
                                    A.deleteShader(g),
                                    A.deleteShader(C),
                                    A.deleteProgram(I),
                                    !1)
                                  : (null !== Q && Q(A, I), !0))
                          )
                        }),
                        (A.getProgramActiveAttribs = function (A, I, g) {
                          for (
                            var C = A.getProgramParameter(
                                I,
                                A.ACTIVE_ATTRIBUTES
                              ),
                              B = 0;
                            B < C;
                            B++
                          ) {
                            var Q = A.getActiveAttrib(I, B)
                            Q &&
                              (g[Q.name] = new r(
                                Q.size,
                                Q.type,
                                A.getAttribLocation(I, Q.name)
                              ))
                          }
                        }),
                        (A.getProgramAtciveUniforms = function (A, I, g) {
                          for (
                            var C = A.getProgramParameter(I, A.ACTIVE_UNIFORMS),
                              B = 0;
                            B < C;
                            B++
                          ) {
                            var Q = A.getActiveUniform(I, B)
                            if (Q) {
                              var E = A.getUniformLocation(I, Q.name)
                              null !== E &&
                                (g[Q.name] = new R(Q.size, Q.type, E))
                            }
                          }
                        }),
                        (A.createBuffer = function (A) {
                          var I = A.createBuffer()
                          if (null === I)
                            throw new Error("WebGLBuffer创建失败！")
                          return I
                        }),
                        (A.getColorBufferData = function (A) {
                          var I = new Uint8Array(
                            A.drawingBufferWidth * A.drawingBufferHeight * 4
                          )
                          return (
                            A.readPixels(
                              0,
                              0,
                              A.drawingBufferWidth,
                              A.drawingBufferHeight,
                              A.RGBA,
                              A.UNSIGNED_BYTE,
                              I
                            ),
                            I
                          )
                        }),
                        (A.setUniformParam = function (A, I, g, C) {
                          switch (g) {
                            case t.uniform1f:
                              A.uniform1f(I, C)
                              break
                            case t.uniform1fv:
                              A.uniform1fv(I, C)
                              break
                            case t.uniform1i:
                              A.uniform1i(I, C)
                              break
                            case t.uniform1iv:
                              A.uniform1iv(I, C)
                              break
                            case t.uniform2f:
                              A.uniform2f(I, C[0], C[1])
                              break
                            case t.uniform2fv:
                              A.uniform2fv(I, C)
                              break
                            case t.uniform2i:
                              A.uniform2i(I, C[0], C[1])
                              break
                            case t.uniform2iv:
                              A.uniform2iv(I, C)
                              break
                            case t.uniform3f:
                              A.uniform3f(I, C[0], C[1], C[2])
                              break
                            case t.uniform3fv:
                              A.uniform3fv(I, C)
                              break
                            case t.uniform3i:
                              A.uniform3i(I, C[0], C[1], C[2])
                              break
                            case t.uniform3iv:
                              A.uniform3iv(I, C)
                              break
                            case t.uniform4f:
                              A.uniform4f(I, C[0], C[1], C[2], C[3])
                              break
                            case t.uniform4fv:
                              A.uniform4fv(I, C)
                              break
                            case t.uniform4i:
                              A.uniform4i(I, C[0], C[1], C[2], C[3])
                              break
                            case t.uniform4iv:
                              A.uniform4iv(I, C)
                              break
                            default:
                              console.error("[" + g + "]: unknown uniform type")
                          }
                        }),
                        (A.genTextureInfoFromTensorShape = function (A, I) {
                          var g = A || 4096,
                            C = I.shape,
                            B = void 0 === C ? [] : C,
                            Q = (function () {
                              for (
                                var A = 0, I = 0, g = arguments.length;
                                I < g;
                                I++
                              )
                                A += arguments[I].length
                              var C = Array(A),
                                B = 0
                              for (I = 0; I < g; I++)
                                for (
                                  var Q = arguments[I], E = 0, i = Q.length;
                                  E < i;
                                  E++, B++
                                )
                                  C[B] = Q[E]
                              return C
                            })(B).sort(function (A, I) {
                              return A - I
                            }),
                            E = Q[0],
                            i = Q[1],
                            o = Q[2],
                            D = E * Q[3],
                            t = i * o
                          if (D > g || t > g) {
                            var a = [D, t].sort(function (A, I) {
                                return A - I
                              }),
                              s = a[0],
                              w = a[1],
                              h = (function (A, I) {
                                var g = I
                                if (A % g == 0) return g
                                for (; g < A && A % g != 0; ) g++
                                return g
                              })(w, Math.ceil(w / g))
                            if (
                              ((D = s * h),
                              (t = Math.ceil(w / h)),
                              n.get("debug") &&
                                console.error("大小超限", B, [t, D]),
                              D > g || t > g)
                            )
                              throw new Error(
                                "Requested texture size [" +
                                  D +
                                  "x" +
                                  t +
                                  "] greater than WebGL maximum on this browser / GPU [" +
                                  g +
                                  "x" +
                                  g +
                                  "]."
                              )
                          }
                          I.shape_texture = [t, D]
                        }),
                        (A.WEBGL_ATTRIBUTES = {
                          alpha: !1,
                          antialias: !1,
                          premultipliedAlpha: !1,
                          preserveDrawingBuffer: !1,
                          depth: !1,
                          stencil: !1,
                          failIfMajorPerformanceCaveat: !0,
                          powerPreference: "high-performance"
                        }),
                        (A.gl = null),
                        A
                      )
                    })()
                  !(function (A) {
                    ;(A[(A.GL_REPEAT = 0)] = "GL_REPEAT"),
                      (A[(A.GL_MIRRORED_REPEAT = 1)] = "GL_MIRRORED_REPEAT"),
                      (A[(A.GL_CLAMP_TO_EDGE = 2)] = "GL_CLAMP_TO_EDGE")
                  })(F || (F = {}))
                  var y = (function () {
                      function A() {}
                      return (
                        (A.getTextureConfig = function (A) {
                          var I,
                            g,
                            C,
                            B,
                            Q,
                            E,
                            i,
                            o,
                            D = A,
                            t = !0,
                            a = !0
                          return (
                            2 === n.get("webglVersion")
                              ? ((I = D.getExtension("EXT_color_buffer_float")),
                                (C = D.HALF_FLOAT),
                                (B = D.R32F),
                                (Q = D.RGBA32F),
                                (E = D.R16F),
                                (i = D.RGBA16F),
                                (g = D.RED),
                                (o = D.RGBA32F))
                              : ((B = D.RGBA),
                                (E = D.RGBA),
                                (i = D.RGBA),
                                (Q = D.RGBA),
                                (g = D.RGBA),
                                (o = D.RGBA),
                                (I = D.getExtension("OES_texture_float")),
                                (C = D.getExtension(
                                  "OES_texture_half_float"
                                ).HALF_FLOAT_OES),
                                (t = this.isDownloadFloatTextureEnabled(D, o)),
                                (a = this.isFloatTextureReadPixelsEnabledMethod(
                                  D,
                                  1,
                                  t
                                ))),
                            {
                              textureFloat: I,
                              textureHalfFloat: C,
                              internalFormat: B,
                              internalFormatPacked: Q,
                              internalFormatHalfFloat: E,
                              internalFormatPackedHalfFloat: i,
                              textureFormat: g,
                              downloadInternalFormat: o,
                              frameBufferSupportFloat: t,
                              isFloatTextureReadPixelsEnabled: a
                            }
                          )
                        }),
                        (A.isFloatTextureReadPixelsEnabledMethod = function (
                          A,
                          I,
                          g
                        ) {
                          var C = A
                          if (0 === I) return !1
                          if (1 === I) {
                            if (null == C.getExtension("OES_texture_float"))
                              return !1
                          } else if (
                            null == C.getExtension("EXT_color_buffer_float") ||
                            null ==
                              C.getExtension("EXT_color_buffer_half_float")
                          )
                            return !1
                          var B = C.createFramebuffer(),
                            Q = C.createTexture()
                          C.bindTexture(C.TEXTURE_2D, Q)
                          var E = 2 === I ? C.RGBA32F : C.RGBA
                          C.texImage2D(
                            C.TEXTURE_2D,
                            0,
                            E,
                            1,
                            1,
                            0,
                            C.RGBA,
                            g
                              ? C.FLOAT
                              : C.getExtension("OES_texture_half_float")
                                  .HALF_FLOAT_OES,
                            null
                          ),
                            C.bindFramebuffer(C.FRAMEBUFFER, B),
                            C.framebufferTexture2D(
                              C.FRAMEBUFFER,
                              C.COLOR_ATTACHMENT0,
                              C.TEXTURE_2D,
                              Q,
                              0
                            )
                          var i =
                            C.checkFramebufferStatus(C.FRAMEBUFFER) ===
                            C.FRAMEBUFFER_COMPLETE
                          C.readPixels(
                            0,
                            0,
                            1,
                            1,
                            C.RGBA,
                            C.FLOAT,
                            new Float32Array(4)
                          )
                          var o = C.getError() === C.NO_ERROR
                          return i && o
                        }),
                        (A.isDownloadFloatTextureEnabled = function (A, I) {
                          var g = A.createTexture()
                          A.bindTexture(A.TEXTURE_2D, g),
                            A.texImage2D(
                              A.TEXTURE_2D,
                              0,
                              I,
                              1,
                              1,
                              0,
                              A.RGBA,
                              A.FLOAT,
                              null
                            )
                          var C = A.createFramebuffer()
                          A.bindFramebuffer(A.FRAMEBUFFER, C),
                            A.framebufferTexture2D(
                              A.FRAMEBUFFER,
                              A.COLOR_ATTACHMENT0,
                              A.TEXTURE_2D,
                              g,
                              0
                            )
                          var B =
                            A.checkFramebufferStatus(A.FRAMEBUFFER) ===
                            A.FRAMEBUFFER_COMPLETE
                          return (
                            A.bindTexture(A.TEXTURE_2D, null),
                            A.bindFramebuffer(A.FRAMEBUFFER, null),
                            A.deleteTexture(g),
                            A.deleteFramebuffer(C),
                            B
                          )
                        }),
                        (A.uploadDataToTexture = function (A, I, g, C) {
                          A.texParameteri(
                            A.TEXTURE_2D,
                            A.TEXTURE_MAG_FILTER,
                            A.NEAREST
                          ),
                            A.texParameteri(
                              A.TEXTURE_2D,
                              A.TEXTURE_MIN_FILTER,
                              A.NEAREST
                            ),
                            A.texParameteri(
                              A.TEXTURE_2D,
                              A.TEXTURE_WRAP_S,
                              A.CLAMP_TO_EDGE
                            ),
                            A.texParameteri(
                              A.TEXTURE_2D,
                              A.TEXTURE_WRAP_T,
                              A.CLAMP_TO_EDGE
                            )
                          var B = g.width_texture,
                            Q = g.height_texture,
                            E = g.data,
                            i = A.RGBA,
                            o = A.RGBA,
                            D = A.FLOAT,
                            t = E
                          if (
                            E instanceof Uint8Array ||
                            E instanceof Uint8ClampedArray ||
                            !(E instanceof Float32Array || E instanceof Array)
                          )
                            D = A.UNSIGNED_BYTE
                          else if (2 === n.get("webglVersion")) {
                            var a = n.get("webgl_force_half_float_texture")
                            ;(i = C
                              ? a
                                ? I.internalFormatPackedHalfFloat
                                : I.internalFormatPacked
                              : a
                              ? I.internalFormatHalfFloat
                              : I.internalFormat),
                              (o = C ? A.RGBA : I.textureFormat)
                          } else {
                            for (
                              var s = new Float32Array(B * Q * 4), w = 0;
                              w < E.length;
                              w++
                            )
                              C
                                ? (s[w] = E[w])
                                : ((s[4 * w] = E[w]),
                                  (s[4 * w + 1] = 0),
                                  (s[4 * w + 2] = 0),
                                  (s[4 * w + 3] = 0))
                            t = s
                          }
                          A.texImage2D(A.TEXTURE_2D, 0, i, B, Q, 0, o, D, t)
                        }),
                        (A.genOutputTexture = function (A, I, g, C) {
                          var B = g.interpType,
                            Q = g.width_texture,
                            E = g.height_texture,
                            i = A.createTexture()
                          A.bindTexture(A.TEXTURE_2D, i),
                            A.texParameteri(
                              A.TEXTURE_2D,
                              A.TEXTURE_MAG_FILTER,
                              "LINEAR" === B ? A.LINEAR : A.NEAREST
                            ),
                            A.texParameteri(
                              A.TEXTURE_2D,
                              A.TEXTURE_MIN_FILTER,
                              "LINEAR" === B ? A.LINEAR : A.NEAREST
                            ),
                            A.texParameteri(
                              A.TEXTURE_2D,
                              A.TEXTURE_WRAP_S,
                              A.CLAMP_TO_EDGE
                            ),
                            A.texParameteri(
                              A.TEXTURE_2D,
                              A.TEXTURE_WRAP_T,
                              A.CLAMP_TO_EDGE
                            )
                          var o = n.get("webgl_force_half_float_texture"),
                            D = o
                              ? I.internalFormatPackedHalfFloat
                              : I.internalFormatPacked,
                            t =
                              2 === n.get("webglVersion")
                                ? o
                                  ? A.HALF_FLOAT
                                  : A.FLOAT
                                : I.frameBufferSupportFloat
                                ? A.FLOAT
                                : I.textureHalfFloat,
                            a = C
                              ? I.isFloatTextureReadPixelsEnabled
                                ? t
                                : A.UNSIGNED_BYTE
                              : null
                          return (
                            A.texImage2D(
                              A.TEXTURE_2D,
                              0,
                              D,
                              Q,
                              E,
                              0,
                              A.RGBA,
                              C ? a : t,
                              null
                            ),
                            A.bindTexture(A.TEXTURE_2D, null),
                            i
                          )
                        }),
                        A
                      )
                    })(),
                    c = [
                      "\n    precision highp float;\n    precision highp int;\n\n    attribute vec4 position;\n    varying vec2 vCoord;\n\n    void main() {\n        vCoord.x = (position.x + 1.0) / 2.0;\n        vCoord.y = (position.y + 1.0) / 2.0;\n        gl_Position = position;\n    }\n    ",
                      "#version 300 es\n    in vec4 position;\n    out vec2 vCoord;\n\n    void main() {\n        vCoord.x = (position.x + 1.0) / 2.0;\n        vCoord.y = (position.y + 1.0) / 2.0;\n        gl_Position = position;\n    }\n    "
                    ],
                    U = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
                    S = [
                      "length_shape",
                      "length_unformatted_shape",
                      "width_shape",
                      "height_shape",
                      "width_texture",
                      "height_texture",
                      "offset_x",
                      "offset_y",
                      "channel",
                      "total_shape",
                      "numbers_shape"
                    ],
                    M = {
                      float: ["multi_value", "bias_value"],
                      bool: ["fuse_relu"]
                    }
                  function k() {
                    return (
                      "\n    " +
                      (n.get("useModAdaptor")
                        ? "\n            int calMod(int a, int b) {\n                float modV = mod(float(a), float(b));\n                if (modV == float(b)) {\n                    modV = 0.0;\n                }\n                return int(modV);\n            }\n        "
                        : "\n            int calMod(int a, int b) {\n                return a - a / b * b;\n            }\n        ") +
                      "\n    " +
                      (n.get("useDivisionAdaptor")
                        ? "\n            int calDivision(int a, int b) {\n                return int(float(a) / (float(b) - 0.0001));\n            }\n        "
                        : "\n            int calDivision(int a, int b) {\n                return a / b;\n            }\n        ") +
                      "\n    \n    float tanh_calc(float num) {\n        float res = (exp(2.0 * num) - 1.0) / (exp(2.0 * num) + 1.0);\n        return res;\n    }\n    \n    "
                    )
                  }
                  const J =
                    "\nivec4 transferFromNHWCtoNCHW(\n    int sumVal,\n    const int channel,\n    const int width_shape,\n    const int height_shape,\n    const int total_shape) {\n\n    int n_origin = int(total_shape/(channel * width_shape * height_shape));\n    int new_a = calMod(sumVal, width_shape);\n    sumVal = int((sumVal - new_a) / width_shape);\n    int new_b = calMod(sumVal, height_shape);\n    sumVal = int((sumVal - new_b) / height_shape);\n    int new_g = calMod(sumVal, channel);\n    sumVal = int((sumVal - new_g) / channel);\n    int new_r = calMod(sumVal, n_origin);\n    return ivec4(new_r,new_g,new_b,new_a);\n}\n"
                  var l =
                      "\nfloat prelu(float x, float p, float b) {\n    float result = x;\n    if (x < 0.0) {\n        result = x * p;\n    }\n\n    return result;\n}",
                    L =
                      "\nfloat relu6(float x, float threshold, float b) {\n    float result = min(max(0.0, x), threshold);\n    return result;\n}",
                    Y =
                      "\nfloat leakyRelu(float x, float p, float b) {\n    float result = max(x, x * p);\n    return result;\n}",
                    K =
                      "\nfloat scale(float x, float p, float b) {\n    float result = p * x + b;\n    return result;\n}",
                    d =
                      "\nfloat scaleWidthBias(float x, float p, float b) {\n    float result = p * (x + b);\n    return result;\n}",
                    q =
                      "\nfloat sigmoid(float x, float y, float z) {\n    float result = 1.0 / (1.0 + exp(-x));\n    return result;\n}",
                    f =
                      "\n    float hardSigmoid(float x, float slope, float offset) {\n        float result = max(0.0, min(1.0, slope * x + offset));\n        return result;\n    }\n",
                    H =
                      "\n    float sqrt(float x, float slope, float offset) {\n        return sqrt(x);\n    }\n",
                    u =
                      "\n    float pow_func(float x, float factor, float offset) {\n        return pow(x, factor);\n    }\n",
                    p =
                      "\nfloat tanh_func(float x, float y, float z) {\n    return tanh_calc(x);\n}"
                  function m(A, I) {
                    var g = I.width_shape,
                      C = I.height_shape,
                      B = I.channel,
                      Q = I.width_texture
                    return (
                      "\n    // 根据tensor坐标获取这个tensor位置的值\n    float getValueFromTensorPos_" +
                      A +
                      "(int n, int c, int h, int w) {\n        int index = n * " +
                      g * C * B +
                      " + c * " +
                      g * C +
                      " + h * " +
                      g +
                      " + w;\n        int pos_w = int(mod(float(index), float(" +
                      Q +
                      ")));\n        int pos_h = index / int(" +
                      Q +
                      ");\n        vec4 pixels = TEXTURE2D(texture_" +
                      A +
                      ",\n            vec2(\n                (float(pos_w)  + 0.5) / float(" +
                      Q +
                      "),\n                (float(pos_h) + 0.5) / float(" +
                      I.height_texture +
                      ")\n            )\n        );\n        // 只用了r通道\n        return pixels.r;\n    }"
                    )
                  }
                  function x(A, I) {
                    var g = I.channel,
                      C = I.height_shape,
                      B = I.width_texture,
                      Q = I.height_texture,
                      E = I.width_shape
                    return (
                      "\n    // 根据tensor坐标获取这个tensor位置的值\n    vec4 getValueFromTensorPosPacking_" +
                      A +
                      "(int n, int c, int h, int w) {\n        int index = n * " +
                      E * C * g +
                      " + c * " +
                      E * C +
                      " + h * " +
                      E +
                      " + w;\n        int pos_w = int(mod(float(index), float(" +
                      B +
                      ")));\n        int pos_h = index / int(" +
                      B +
                      ");\n        vec4 pixels = TEXTURE2D(texture_" +
                      A +
                      ",\n            vec2(\n                (float(pos_w)  + 0.5) / float(" +
                      B +
                      "),\n                (float(pos_h) + 0.5) / float(" +
                      Q +
                      ")\n            )\n        );\n        // 只用了r通道\n        return pixels;\n    }"
                    )
                  }
                  function V(A, I) {
                    var g = I.numbers_shape,
                      C = I.length_shape
                    if (1 === C)
                      return (
                        "\n            int getTensorPosFromArrayIndex_" +
                        A +
                        "(int n) {\n                return calMod(n, " +
                        g[0] +
                        ");\n            }\n        "
                      )
                    for (
                      var B = "ivec" + C + "(" + g.join(", ") + ")",
                        Q = "pos[0] = n / " + g[0] + ";",
                        E = 1;
                      E < C;
                      E++
                    )
                      Q +=
                        "\n            n = calMod(n, " +
                        g[E - 1] +
                        ");\n            pos[" +
                        E +
                        "] = calDivision(n, " +
                        g[E] +
                        ");\n        "
                    return (
                      "\n    ivec" +
                      C +
                      " shapeVec_" +
                      A +
                      " = " +
                      B +
                      ";\n    ivec" +
                      C +
                      " getTensorPosFromArrayIndex_" +
                      A +
                      "(int n) {\n        ivec" +
                      C +
                      " pos;\n        " +
                      Q +
                      "\n        return pos;\n    }\n    "
                    )
                  }
                  function T(A) {
                    return (
                      "\n    #define getPixelsFromTexturePos_" +
                      A +
                      "(pos) TEXTURE2D(texture_" +
                      A +
                      ", pos)\n    "
                    )
                  }
                  function b(A, I) {
                    return (
                      "\n    vec2 moveTexture2PosToReal_" +
                      A +
                      "(vec2 v) {\n        vec2 v2;\n        v2.x = v.x * float(" +
                      I.width_texture +
                      ");\n        v2.y = v.y * float(" +
                      I.height_texture +
                      ");\n        return v2;\n    }\n    "
                    )
                  }
                  function X(A) {
                    return "uniform sampler2D texture_" + A + ";"
                  }
                  function P(A, I, g, C, E) {
                    var i,
                      o,
                      D = "",
                      t = I.name,
                      a = I.mainFunc,
                      s = I.textureFuncConf,
                      w = void 0 === s ? {} : s,
                      h = I.commonFuncConf
                    try {
                      var e = (function (A, I, g) {
                          for (
                            var C = {},
                              B = Object.assign({}, I),
                              Q = [],
                              E = 0,
                              i = A;
                            E < i.length;
                            E++
                          ) {
                            for (
                              var o = i[E], D = o.name, n = {}, t = 0, a = S;
                              t < a.length;
                              t++
                            )
                              void 0 !== o[(F = a[t])] && (n[F] = o[F])
                            ;(C[D] = n), Q.push(D)
                          }
                          for (var s = 0, w = Object.keys(M); s < w.length; s++)
                            for (
                              var h = w[s], e = 0, G = M[h];
                              e < G.length;
                              e++
                            ) {
                              var F
                              void 0 !== I[(F = G[e])] &&
                                (B[F] = h + "(" + I[F] + ")")
                            }
                          return (
                            I.active_function &&
                              (B.active_function = I.active_function),
                            (B.runtime = g),
                            {
                              textureParams: C,
                              opParams: B,
                              active_function: I.active_function
                            }
                          )
                        })(g, C, E),
                        G = e.textureParams,
                        F = e.opParams,
                        R = e.active_function,
                        r =
                          2 === n.get("webglVersion")
                            ? " #version 300 es\n            #ifdef GL_FRAGMENT_PRECISION_HIGH\n            precision highp float;\n            precision highp int;\n        #else\n            precision mediump float;\n            precision mediump int;\n        #endif      \n        "
                            : " #ifdef GL_FRAGMENT_PRECISION_HIGH\n            precision highp float;\n            precision highp int;\n        #else\n            precision highp float;\n            precision highp int;\n        #endif\n        ",
                        N = (function (A) {
                          var I = A.frameBufferSupportFloat,
                            g = A.isFinalOp,
                            C = A.isFloatTextureReadPixelsEnabled
                          return 2 === n.get("webglVersion")
                            ? "\n        // 顶点shader透传的材质坐标\n        in vec2 vCoord;\n        out vec4 outColor;\n        void setOutput(float result) {\n            result = fuse_op(result);\n            outColor.r = result;\n        }\n        void setPackedOutput(vec4 result) {\n            outColor = result;\n        }\n        int calCeil(int a, int b) {\n            return int(ceil(float(a) / float(b)));\n        }\n        " +
                                k() +
                                "\n    "
                            : I
                            ? "\n            varying vec2 vCoord;\n            varying vec4 outColor;\n            void setOutput(float result) {\n                result = fuse_op(result);\n                gl_FragColor.r = result;\n            }\n            void setPackedOutput(vec4 result) {\n                gl_FragColor = result;\n            }\n            int calCeil(int a, int b) {\n                return int(ceil(float(a) / float(b)));\n            }\n            " +
                              k() +
                              "\n    "
                            : g && !C
                            ? "\n        varying vec2 vCoord;\n        varying vec4 outColor;\n\n        const float FLOAT_MAX = 1.70141184e38;\n        const float FLOAT_MIN = 1.17549435e-38;\n\n        #define isnan(value) isnan_custom(value)\n        bool isnan_custom(float val) {\n            return (val > 0. || val < 1. || val == 0.) ? false : true;\n        }\n\n        " +
                              k() +
                              "\n\n        int calCeil(int a, int b) {\n            return int(ceil(float(a) / float(b)));\n        }\n\n        lowp vec4 encode_float(highp float v) {\n            if (isnan(v)) {\n            return vec4(255, 255, 255, 255);\n            }\n\n            highp float av = abs(v);\n\n            if(av < FLOAT_MIN) {\n            return vec4(0.0, 0.0, 0.0, 0.0);\n            } else if(v > FLOAT_MAX) {\n            return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n            } else if(v < -FLOAT_MAX) {\n            return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n            }\n\n            highp vec4 c = vec4(0,0,0,0);\n\n            highp float e = floor(log2(av));\n            highp float m = exp2(fract(log2(av))) - 1.0;\n\n            c[2] = floor(128.0 * m);\n            m -= c[2] / 128.0;\n            c[1] = floor(32768.0 * m);\n            m -= c[1] / 32768.0;\n            c[0] = floor(8388608.0 * m);\n\n            highp float ebias = e + 127.0;\n            c[3] = floor(ebias / 2.0);\n            ebias -= c[3] * 2.0;\n            c[2] += floor(ebias) * 128.0;\n\n            c[3] += 128.0 * step(0.0, -v);\n\n            return c / 255.0;\n        }\n\n        void setOutput(float result) {\n                result = fuse_op(result);\n                gl_FragColor = encode_float(result);\n        }\n        "
                            : "\n            #define isnan(value) isnan_custom(value)\n            bool isnan_custom(float val) {\n                return (val > 0. || val < 1. || val == 0.) ? false : true;\n            }\n\n            varying vec2 vCoord;\n            varying vec4 outColor;\n            void setOutput(float result) {\n                result = fuse_op(result);\n                if(isnan(result)) {\n                    gl_FragColor.r = 0.0;\n                }else {\n                    gl_FragColor.r = result;\n                }\n            }\n\n            void setPackedOutput(vec4 result) {\n                gl_FragColor = result;\n            }\n\n            " +
                              k() +
                              "\n\n            int calCeil(int a, int b) {\n                return int(ceil(float(a) / float(b)));\n            }\n        "
                        })(A),
                        y = (function (A) {
                          var I = "",
                            g = ""
                          if (A.fuse_opt)
                            for (var C in A.fuse_opt) {
                              var Q = C,
                                E = 0,
                                i = 0
                              switch (C) {
                                case "scale":
                                  var o = A.fuse_opt.scale.bias_after_scale,
                                    D = A.fuse_opt.scale.scale
                                  ;(E = void 0 !== D ? D : 1),
                                    (i = A.fuse_opt.scale.bias || 0),
                                    !1 === o &&
                                      void 0 !== o &&
                                      (Q = "scaleWidthBias")
                                  break
                                case "relu":
                                  Q = "prelu"
                                  break
                                case "relu6":
                                  E = A.fuse_opt[C].threshold
                                  break
                                case "hard_sigmoid":
                                  ;(Q = "hardSigmoid"),
                                    (E = A.fuse_opt[C].slope || 0.2),
                                    (i = A.fuse_opt[C].offset || 0.5)
                                  break
                                case "leakyRelu":
                                  E = A.fuse_opt[C].alpha
                                  break
                                case "pow":
                                  ;(Q = "pow_func"),
                                    (E = A.fuse_opt[C].factor || 2)
                                  break
                                case "tanh":
                                  Q = "tanh_func"
                              }
                              ;(I += B[Q]),
                                (g +=
                                  "res = " +
                                  Q +
                                  "(x, float(" +
                                  E +
                                  "), float(" +
                                  i +
                                  "));")
                            }
                          return (
                            "\n        " +
                            I +
                            "\n        \n        float fuse_op(float x) {\n            float res = x;\n            " +
                            g +
                            "\n            return res;\n        }\n    "
                          )
                        })(F),
                        c = (function (A, I, g, C) {
                          if (!A) return ""
                          var B = Object.assign({}, A)
                          B["@all"] &&
                            (function (A, I) {
                              var g = I.filter(function (A) {
                                  return "out" !== A.name
                                }),
                                C = A["@all"]
                              g.forEach(function (I) {
                                var g = I.name
                                A[g] ? A[g].concat(C) : (A[g] = C)
                              }),
                                delete A["@all"]
                            })(B, C)
                          for (
                            var E = "", i = "", o = 0, D = Object.keys(B);
                            o < D.length;
                            o++
                          ) {
                            var n = D[o]
                            if (I[n]) {
                              i += X(n)
                              for (var t = 0, a = B[n]; t < a.length; t++) {
                                var s = a[t]
                                if (Q[s])
                                  try {
                                    E += Q[s](n, I[n], g)
                                  } catch (A) {
                                    console.error(A)
                                  }
                              }
                            }
                          }
                          return "\n    " + i + "\n    " + E + "\n    "
                        })(w, G, F, g),
                        U = (function (A) {
                          return void 0 === A
                            ? ""
                            : "\n        int layer_run_time = " + A + ";\n    "
                        })(E),
                        J = (function (A) {
                          var I, g, C, B, Q
                          return (
                            "\n        \n    vec2 _2d_shape_texture_out = vec2(float(" +
                            A.width_texture +
                            "), float(" +
                            A.height_texture +
                            "));\n    \n        " +
                            ((g = (I = A).height_shape),
                            (C = I.width_shape),
                            "\n    ivec4 getOutputTensorPos() {\n        vec2 outCoord = vCoord.xy * (_2d_shape_texture_out);\n        int index = int(outCoord.x) + int(outCoord.y) * int(" +
                              I.width_texture +
                              ");\n\n        int n1 = int(index / " +
                              (B = C * g * I.channel) +
                              ");\n        int c1 = int(calMod(index, " +
                              B +
                              ") / " +
                              (Q = C * g) +
                              ");\n        int h1 = int(calMod(index, " +
                              Q +
                              ") / " +
                              C +
                              ");\n        int w1 = calMod(index, " +
                              C +
                              ");\n        return ivec4(n1, c1, h1, w1);\n    }\n    \n    ")
                          )
                        })(G.out),
                        l = (function (A) {
                          if (!A) return ""
                          for (var I = "", g = 0, C = A; g < C.length; g++) {
                            var Q = C[g]
                            B[Q] && (I += B[Q])
                          }
                          return I
                        })(h)
                      ;(i = D =
                        " " +
                        r +
                        "\n            " +
                        y +
                        "\n            " +
                        N +
                        "\n            " +
                        l +
                        "\n            " +
                        (R ? B[R] : "") +
                        "\n            " +
                        c +
                        "\n            " +
                        U +
                        "\n            " +
                        J +
                        "\n            " +
                        a(G, F) +
                        "\n        "),
                        (o =
                          1 === n.get("webglVersion")
                            ? "texture2D"
                            : "texture"),
                        (D = i.replace(/\bTEXTURE2D\b/g, o))
                    } catch (A) {
                      console.error("[" + t + "]: " + A)
                    }
                    return D
                  }
                  const W = (function () {
                    function A(A, I, g, C) {
                      var B = A
                      this.vShader = I
                      try {
                        ;(this.fShader = this.initShader(B, g, "fragment")),
                          (this.shape = C && C.shape)
                        var Q = (this.program = B.createProgram())
                        B.attachShader(Q, this.vShader),
                          B.attachShader(Q, this.fShader),
                          B.linkProgram(Q)
                      } catch (A) {
                        throw new Error(A)
                      }
                    }
                    return (
                      (A.prototype.initShader = function (A, I, g) {
                        void 0 === g && (g = "vertex")
                        var C,
                          B =
                            "vertex" === g ? A.VERTEX_SHADER : A.FRAGMENT_SHADER
                        if ("vertex" === g && this.vShader) C = this.vShader
                        else if (
                          ((C = A.createShader(B)),
                          "vertex" === g && (this.vShader = C),
                          A.shaderSource(C, I),
                          A.compileShader(C),
                          !A.getShaderParameter(C, A.COMPILE_STATUS))
                        )
                          throw new Error("compile: " + A.getShaderInfoLog(C))
                        return C
                      }),
                      (A.prototype.setProgram = function (A, I, g) {
                        A.useProgram(this.program),
                          g || this.runVertexShader(A, I)
                      }),
                      (A.prototype.runVertexShader = function (A, I) {
                        var g = A.getAttribLocation(this.program, "position")
                        A.enableVertexAttribArray(g),
                          A.bindBuffer(A.ARRAY_BUFFER, I),
                          A.vertexAttribPointer(g, 2, A.FLOAT, !1, 0, 0)
                      }),
                      (A.Sampler = "uSampler"),
                      A
                    )
                  })()
                  var O,
                    Z =
                      ((O = function (A, I) {
                        return (O =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (A, I) {
                              A.__proto__ = I
                            }) ||
                          function (A, I) {
                            for (var g in I)
                              Object.prototype.hasOwnProperty.call(I, g) &&
                                (A[g] = I[g])
                          })(A, I)
                      }),
                      function (A, I) {
                        function g() {
                          this.constructor = A
                        }
                        O(A, I),
                          (A.prototype =
                            null === I
                              ? Object.create(I)
                              : ((g.prototype = I.prototype), new g()))
                      }),
                    v = function (A, I, g, C) {
                      return new (g || (g = Promise))(function (B, Q) {
                        function E(A) {
                          try {
                            o(C.next(A))
                          } catch (A) {
                            Q(A)
                          }
                        }
                        function i(A) {
                          try {
                            o(C.throw(A))
                          } catch (A) {
                            Q(A)
                          }
                        }
                        function o(A) {
                          var I
                          A.done
                            ? B(A.value)
                            : ((I = A.value),
                              I instanceof g
                                ? I
                                : new g(function (A) {
                                    A(I)
                                  })).then(E, i)
                        }
                        o((C = C.apply(A, I || [])).next())
                      })
                    },
                    j = function (A, I) {
                      var g,
                        C,
                        B,
                        Q,
                        E = {
                          label: 0,
                          sent: function () {
                            if (1 & B[0]) throw B[1]
                            return B[1]
                          },
                          trys: [],
                          ops: []
                        }
                      return (
                        (Q = { next: i(0), throw: i(1), return: i(2) }),
                        "function" == typeof Symbol &&
                          (Q[Symbol.iterator] = function () {
                            return this
                          }),
                        Q
                      )
                      function i(Q) {
                        return function (i) {
                          return (function (Q) {
                            if (g)
                              throw new TypeError(
                                "Generator is already executing."
                              )
                            for (; E; )
                              try {
                                if (
                                  ((g = 1),
                                  C &&
                                    (B =
                                      2 & Q[0]
                                        ? C.return
                                        : Q[0]
                                        ? C.throw ||
                                          ((B = C.return) && B.call(C), 0)
                                        : C.next) &&
                                    !(B = B.call(C, Q[1])).done)
                                )
                                  return B
                                switch (
                                  ((C = 0),
                                  B && (Q = [2 & Q[0], B.value]),
                                  Q[0])
                                ) {
                                  case 0:
                                  case 1:
                                    B = Q
                                    break
                                  case 4:
                                    return E.label++, { value: Q[1], done: !1 }
                                  case 5:
                                    E.label++, (C = Q[1]), (Q = [0])
                                    continue
                                  case 7:
                                    ;(Q = E.ops.pop()), E.trys.pop()
                                    continue
                                  default:
                                    if (
                                      !(
                                        (B =
                                          (B = E.trys).length > 0 &&
                                          B[B.length - 1]) ||
                                        (6 !== Q[0] && 2 !== Q[0])
                                      )
                                    ) {
                                      E = 0
                                      continue
                                    }
                                    if (
                                      3 === Q[0] &&
                                      (!B || (Q[1] > B[0] && Q[1] < B[3]))
                                    ) {
                                      E.label = Q[1]
                                      break
                                    }
                                    if (6 === Q[0] && E.label < B[1]) {
                                      ;(E.label = B[1]), (B = Q)
                                      break
                                    }
                                    if (B && E.label < B[2]) {
                                      ;(E.label = B[2]), E.ops.push(Q)
                                      break
                                    }
                                    B[2] && E.ops.pop(), E.trys.pop()
                                    continue
                                }
                                Q = I.call(A, E)
                              } catch (A) {
                                ;(Q = [6, A]), (C = 0)
                              } finally {
                                g = B = 0
                              }
                            if (5 & Q[0]) throw Q[1]
                            return { value: Q[0] ? Q[1] : void 0, done: !0 }
                          })([Q, i])
                        }
                      }
                    }
                  const z = (function (A) {
                      function I() {
                        var I = A.call(this) || this
                        return (
                          (I.cacheTextures = {}),
                          (I.uniformLocations = {}),
                          (I.texturesMap = {}),
                          (I.queryList = []),
                          (I.currentTexture = null),
                          (I.width_shape_out = 1),
                          (I.height_shape_out = 1),
                          (I.width_texture_out = 1),
                          (I.height_texture_out = 1),
                          (I.channel = 0),
                          (I.total_shape = 0),
                          I
                        )
                      }
                      return (
                        Z(I, A),
                        (I.prototype.init = function () {
                          return v(this, void 0, void 0, function () {
                            var A
                            return j(this, function (I) {
                              return (
                                (A = this.gl = N.createWebGLRenderingContext()),
                                this.gl
                                  ? ((this.glVersion = N.getWebglVersion()),
                                    (this.textureConf = y.getTextureConfig(A)),
                                    (this.MAX_TEXTURE_SIZE =
                                      n.get("MAX_TEXTURE_SIZE") ||
                                      A.getParameter(A.MAX_TEXTURE_SIZE)),
                                    A.disable(A.DEPTH_TEST),
                                    A.disable(A.STENCIL_TEST),
                                    A.disable(A.BLEND),
                                    A.disable(A.DITHER),
                                    A.disable(A.POLYGON_OFFSET_FILL),
                                    A.disable(A.SAMPLE_COVERAGE),
                                    A.enable(A.SCISSOR_TEST),
                                    A.enable(A.CULL_FACE),
                                    A.cullFace(A.BACK),
                                    (this.vertexBuffer = A.createBuffer()),
                                    A.bindBuffer(
                                      A.ARRAY_BUFFER,
                                      this.vertexBuffer
                                    ),
                                    A.bufferData(
                                      A.ARRAY_BUFFER,
                                      U,
                                      A.STATIC_DRAW
                                    ),
                                    (this.vShader = N.initShader(
                                      A,
                                      a.VS_SHADER,
                                      c[this.glVersion - 1]
                                    )),
                                    (this.frameBuffer = A.createFramebuffer()),
                                    A.bindFramebuffer(
                                      A.FRAMEBUFFER,
                                      this.frameBuffer
                                    ),
                                    (this.pbo = A.createBuffer()),
                                    [2])
                                  : [2]
                              )
                            })
                          })
                        }),
                        (I.prototype.createProgram = function (A) {
                          var I = this,
                            g = A.op,
                            C = A.outTensor,
                            B = A.inputTensors,
                            Q = A.shaderParams,
                            E = A.runtime,
                            i = A.isFinalOp,
                            o = null
                          try {
                            var D = (function () {
                              for (
                                var A = 0, I = 0, g = arguments.length;
                                I < g;
                                I++
                              )
                                A += arguments[I].length
                              var C = Array(A),
                                B = 0
                              for (I = 0; I < g; I++)
                                for (
                                  var Q = arguments[I], E = 0, i = Q.length;
                                  E < i;
                                  E++, B++
                                )
                                  C[B] = Q[E]
                              return C
                            })([C], B)
                            D.forEach(function (A) {
                              return N.genTextureInfoFromTensorShape(
                                I.MAX_TEXTURE_SIZE,
                                A
                              )
                            })
                            var n = P(this.textureConf, g, D, Q, E)
                            ;(o = new W(this.gl, this.vShader, n, C)).fsCode = n
                            var t = y.genOutputTexture(
                              this.gl,
                              this.textureConf,
                              C,
                              i
                            )
                            ;(this.texturesMap[C.tensorId] = t),
                              (this.program = o)
                          } catch (A) {
                            console.error(
                              "webgl createProgram: " + g.name + " -- " + A
                            )
                          }
                          return o
                        }),
                        (I.prototype.runProgram = function (A, I) {
                          var g = this,
                            C = (function (A, I) {
                              if (2 === I && n.get("performance")) {
                                var g = A.getExtension(
                                  "EXT_disjoint_timer_query_webgl2"
                                )
                                if (!g) return
                                var C = A.createQuery()
                                return A.beginQuery(g.TIME_ELAPSED_EXT, C), C
                              }
                              return null
                            })(this.gl, this.glVersion),
                            B = A.isPackedOp
                          A.program.forEach(function (C, Q) {
                            var E = A.outputTensors[Q],
                              i = E.tensorId
                            g.setOutProps(E),
                              "frameBuffer" === A.bufferType
                                ? g.attachFrameBuffer(i)
                                : g.attachColorBuffer(),
                              C.setProgram(g.gl, g.vertexBuffer, I),
                              (g.program = C),
                              g.render(A, I, Q, B)
                          }),
                            (A.tensorData = null),
                            C &&
                              (this.queryList.push({
                                name: A.name,
                                query: C,
                                count: 1
                              }),
                              (C = (function (A, I, g) {
                                if (2 === I && n.get("performance")) {
                                  var C = A.getExtension(
                                    "EXT_disjoint_timer_query_webgl2"
                                  )
                                  if (!C) return
                                  A.endQuery(C.TIME_ELAPSED_EXT)
                                }
                                return g
                              })(this.gl, this.glVersion, C)))
                        }),
                        (I.prototype.read = function (A) {
                          return v(this, void 0, void 0, function () {
                            var I, g, C, B
                            return j(this, function (Q) {
                              switch (Q.label) {
                                case 0:
                                  return n.get("webgl_gpu_pipeline")
                                    ? ((I = this.gl),
                                      (this.frameBuffer =
                                        I.createFramebuffer()),
                                      I.bindFramebuffer(
                                        I.FRAMEBUFFER,
                                        this.frameBuffer
                                      ),
                                      [2, []])
                                    : ((g = this.createPBO()),
                                      [4, this.createAndWaitForFence()])
                                case 1:
                                  return (
                                    Q.sent(),
                                    (C =
                                      this.downloadFloat32TensorFromBuffer(g)),
                                    (B = A ? A.shape : []),
                                    n.get("webgl_pack_output")
                                      ? [2, C.slice(0, h(B))]
                                      : [2, C]
                                  )
                              }
                            })
                          })
                        }),
                        (I.prototype.createPBO = function () {
                          var A,
                            I = this.textureConf
                          if (2 === this.glVersion) {
                            var g = this.gl,
                              C = this.pbo
                            g.bindBuffer(g.PIXEL_PACK_BUFFER, C)
                            var B =
                              16 *
                              this.width_texture_out *
                              this.height_texture_out
                            return (
                              g.bufferData(
                                g.PIXEL_PACK_BUFFER,
                                B,
                                g.STREAM_READ
                              ),
                              g.readPixels(
                                0,
                                0,
                                this.width_texture_out,
                                this.height_texture_out,
                                g.RGBA,
                                g.FLOAT,
                                0
                              ),
                              g.bindBuffer(g.PIXEL_PACK_BUFFER, null),
                              C
                            )
                          }
                          var Q = this.gl,
                            E = Q.FLOAT
                          return (
                            I.isFloatTextureReadPixelsEnabled
                              ? (A = new Float32Array(
                                  this.width_texture_out *
                                    this.height_texture_out *
                                    4
                                ))
                              : ((A = new Uint8Array(
                                  this.width_texture_out *
                                    this.height_texture_out *
                                    4
                                )),
                                (E = Q.UNSIGNED_BYTE)),
                            Q.readPixels(
                              0,
                              0,
                              this.width_texture_out,
                              this.height_texture_out,
                              Q.RGBA,
                              E,
                              A
                            ),
                            I.isFloatTextureReadPixelsEnabled
                              ? A
                              : new Float32Array(A.buffer)
                          )
                        }),
                        (I.prototype.createAndWaitForFence = function () {
                          return v(this, void 0, void 0, function () {
                            var A,
                              I,
                              g,
                              C,
                              B = this
                            return j(this, function (Q) {
                              return (
                                (A = this.gl),
                                (I = null != A.fenceSync),
                                (g = function () {
                                  return !0
                                }),
                                I &&
                                  ((C = A.fenceSync(
                                    A.SYNC_GPU_COMMANDS_COMPLETE,
                                    0
                                  )),
                                  A.flush(),
                                  (g = function () {
                                    var I = A.clientWaitSync(C, 0, 0)
                                    return (
                                      I === A.ALREADY_SIGNALED ||
                                      I === A.CONDITION_SATISFIED
                                    )
                                  })),
                                [
                                  2,
                                  new Promise(function (A) {
                                    B.pollItem(g, A)
                                  })
                                ]
                              )
                            })
                          })
                        }),
                        (I.prototype.pollItem = function (A, I) {
                          var g = function () {
                            A() ? I() : setTimeout(g, 1)
                          }
                          g()
                        }),
                        (I.prototype.downloadFloat32TensorFromBuffer =
                          function (A) {
                            var I =
                              4 *
                              this.width_texture_out *
                              this.height_texture_out
                            if (2 === this.glVersion) {
                              var g = this.gl,
                                C = new Float32Array(I)
                              g.bindBuffer(g.PIXEL_PACK_BUFFER, A),
                                g.getBufferSubData(g.PIXEL_PACK_BUFFER, 0, C),
                                g.bindBuffer(g.PIXEL_PACK_BUFFER, null)
                              var B = []
                              if (n.get("webgl_pack_output"))
                                return Array.from(C)
                              for (
                                var Q = 0;
                                Q <
                                this.width_texture_out *
                                  this.height_texture_out;
                                Q++
                              )
                                B.push(C[4 * Q])
                              return B
                            }
                            var E = A,
                              i = []
                            for (
                              Q = 0;
                              Q <
                              this.width_texture_out * this.height_texture_out;
                              Q++
                            ) {
                              var o = this.textureConf
                                .isFloatTextureReadPixelsEnabled
                                ? 4 * Q
                                : Q
                              i.push(E[o])
                            }
                            return i
                          }),
                        (I.prototype.setOutProps = function (A) {
                          var I = A.width_shape,
                            g = void 0 === I ? 1 : I,
                            C = A.height_shape,
                            B = void 0 === C ? 1 : C,
                            Q = A.width_texture,
                            E = void 0 === Q ? 1 : Q,
                            i = A.height_texture,
                            o = void 0 === i ? 1 : i,
                            D = A.channel,
                            n = void 0 === D ? 0 : D,
                            t = A.total_shape,
                            a = void 0 === t ? 0 : t
                          ;(this.width_shape_out = g),
                            (this.height_shape_out = B),
                            (this.width_texture_out = E),
                            (this.height_texture_out = o),
                            (this.channel = n),
                            (this.total_shape = a)
                        }),
                        (I.prototype.attachColorBuffer = function () {
                          var A = this.gl
                          A.bindFramebuffer(A.FRAMEBUFFER, null),
                            (A.canvas.width = this.width_shape_out),
                            (A.canvas.height = this.height_shape_out),
                            A.viewport(0, 0, A.canvas.width, A.canvas.height),
                            A.scissor(0, 0, A.canvas.width, A.canvas.height)
                        }),
                        (I.prototype.attachFrameBuffer = function (A) {
                          this.currentTexture = this.texturesMap[A]
                          var I = this.gl
                          I.framebufferTexture2D(
                            I.FRAMEBUFFER,
                            I.COLOR_ATTACHMENT0,
                            I.TEXTURE_2D,
                            this.currentTexture,
                            0
                          ),
                            I.viewport(
                              0,
                              0,
                              this.width_texture_out,
                              this.height_texture_out
                            ),
                            I.scissor(
                              0,
                              0,
                              this.width_texture_out,
                              this.height_texture_out
                            )
                        }),
                        (I.prototype.render = function (A, I, g, C) {
                          var B = this
                          void 0 === I && (I = !1), void 0 === C && (C = !1)
                          var Q = A.inputTensors,
                            E = void 0 === Q ? [] : Q,
                            i = A.uniform,
                            o = void 0 === i ? null : i,
                            D = A.iLayer,
                            n = void 0 === D ? 0 : D,
                            t = A.modelName,
                            a = this.gl,
                            s = 0
                          E.forEach(function (A) {
                            B.initTexture(s, A, C)
                            var Q = B.getUniformLoc(
                              "texture_" + A.name,
                              n,
                              I,
                              g,
                              t
                            )
                            Q && a.uniform1i(Q, s++)
                          }),
                            o && this.setUniform(o, n, I, g, t),
                            a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
                        }),
                        (I.prototype.initTexture = function (A, I, g) {
                          var C,
                            B = this.gl,
                            Q = this.textureConf,
                            E = I.tensorId,
                            i = g || I.isPacked,
                            o = I.data
                          if (I.persistable) {
                            this.cacheTextures = this.cacheTextures || {}
                            var D = this.cacheTextures[E]
                            D
                              ? ((C = D),
                                o &&
                                  N.genTextureInfoFromTensorShape(
                                    this.MAX_TEXTURE_SIZE,
                                    I
                                  ))
                              : ((C = B.createTexture()),
                                (this.cacheTextures[E] = C))
                          } else C = this.texturesMap[E]
                          B.activeTexture(B["TEXTURE" + A]),
                            B.bindTexture(B.TEXTURE_2D, C),
                            o &&
                              (y.uploadDataToTexture(B, Q, I, i),
                              (I.data = null))
                        }),
                        (I.prototype.setUniform = function (A, I, g, C, B) {
                          var Q = this,
                            E = Object.keys(A),
                            i = this.gl
                          E.forEach(function (E) {
                            var o = A[E].type,
                              D = A[E].value,
                              n = Q.getUniformLoc(E, I, g, C, B)
                            N.setUniformParam(i, n, o, D)
                          })
                        }),
                        (I.prototype.getUniformLoc = function (A, I, g, C, B) {
                          var Q = B + "_"
                          if (g) return this.uniformLocations[Q + I][A + C]
                          var E = this.gl.getUniformLocation(
                            this.program.program,
                            A
                          )
                          return (
                            (this.uniformLocations[Q + I] =
                              this.uniformLocations[Q + I] || {}),
                            (this.uniformLocations[Q + I][A + C] = E),
                            E
                          )
                        }),
                        (I.prototype.dispose = function () {}),
                        I
                      )
                    })(function () {}),
                    _ = {
                      mainFunc: function (A, I) {
                        var g = A.origin,
                          C = A.filter,
                          B = A.out,
                          Q = A.bias,
                          E = I.groups,
                          i = void 0 === E ? 1 : E,
                          o = I.strides,
                          D = void 0 === o ? [] : o,
                          n = I.paddings,
                          t = void 0 === n ? [] : n,
                          a = I.dilations,
                          s = void 0 === a ? [] : a,
                          w = I.fuse_relu,
                          h = I.filter_nearest_vec4,
                          e = I.filter_remainder_vec4,
                          G = I.act_type,
                          F = D[0],
                          R = void 0 === F ? 1 : F,
                          r = D[1],
                          N = void 0 === r ? 1 : r,
                          y = t[0],
                          c = void 0 === y ? 0 : y,
                          U = t[1],
                          S = void 0 === U ? 0 : U,
                          M = s[0],
                          k = void 0 === M ? 1 : M,
                          J = s[1],
                          l = void 0 === J ? 1 : J
                        return (
                          "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        int x = oPos.a;\n        int c = oPos.g;\n        int y = oPos.b;\n        int b = oPos.r;\n        float res = 0.0;\n\n        // 获取output的坐标\n        int oTensorChannel = (c / (" +
                          B.channel +
                          " / " +
                          i +
                          ")) * " +
                          C.channel +
                          ";\n        int oy = y * " +
                          R +
                          " - " +
                          c +
                          ";\n        for (int fy = 0; fy < " +
                          C.height_shape +
                          "; fy++) {\n            if (oy >= " +
                          g.height_shape +
                          ") {\n                break;\n            }\n            if (oy < 0) {\n                oy += " +
                          k +
                          ";\n                continue;\n            }\n            int ox = x * " +
                          N +
                          " - " +
                          S +
                          ";\n            for (int fx = 0; fx < " +
                          C.width_shape +
                          "; fx++) {\n                if (ox >= " +
                          g.width_shape +
                          ") {\n                    break;\n                }\n                if (ox < 0) {\n                    ox += " +
                          l +
                          ";\n                    continue;\n                }\n                // channel计算\n                for (int j = 0; j < " +
                          h +
                          "; j += 4) {\n                    vec4 fValues = vec4(\n                        getValueFromTensorPos_filter(c, j, fy, fx),\n                        getValueFromTensorPos_filter(c, j + 1, fy, fx),\n                        getValueFromTensorPos_filter(c, j + 2, fy, fx),\n                        getValueFromTensorPos_filter(c, j + 3, fy, fx)\n                    );\n\n                    vec4 oValues = vec4(\n                        getValueFromTensorPos_origin(b, oTensorChannel + j, oy, ox),\n                        getValueFromTensorPos_origin(b, oTensorChannel + j + 1, oy, ox),\n                        getValueFromTensorPos_origin(b, oTensorChannel + j + 2, oy, ox),\n                        getValueFromTensorPos_origin(b, oTensorChannel + j + 3, oy, ox)\n                      );\n\n                    res += dot(fValues, oValues);\n                }\n\n                if (" +
                          e +
                          " == 1) {\n                    res += dot(\n                        getValueFromTensorPos_filter(c, " +
                          h +
                          ", fy, fx),\n                        getValueFromTensorPos_origin(b, oTensorChannel + " +
                          h +
                          ", oy, ox));\n                } else if (" +
                          e +
                          " == 2) {\n                    vec2 fValues = vec2(\n                        getValueFromTensorPos_filter(c, " +
                          h +
                          ", fy, fx),\n                        getValueFromTensorPos_filter(c, " +
                          h +
                          " + 1, fy, fx)\n                    );\n                    vec2 oValues = vec2(\n                        getValueFromTensorPos_origin(b, oTensorChannel + " +
                          h +
                          ", oy, ox),\n                        getValueFromTensorPos_origin(b, oTensorChannel + " +
                          h +
                          " + 1, oy, ox)\n                      );\n                    res += dot(fValues, oValues);\n                } else if (" +
                          e +
                          " == 3) {\n                    vec3 fValues = vec3(\n                        getValueFromTensorPos_filter(c, " +
                          h +
                          ", fy, fx),\n                        getValueFromTensorPos_filter(c, " +
                          h +
                          " + 1, fy, fx),\n                        getValueFromTensorPos_filter(c, " +
                          h +
                          " + 2, fy, fx)\n                    );\n                    vec3 oValues = vec3(\n                        getValueFromTensorPos_origin(b, oTensorChannel + " +
                          h +
                          ", oy, ox),\n                        getValueFromTensorPos_origin(b, oTensorChannel + " +
                          h +
                          " + 1, oy, ox),\n                        getValueFromTensorPos_origin(b, oTensorChannel + " +
                          h +
                          " + 2, oy, ox)\n                    );\n                    res += dot(fValues, oValues);\n                }\n\n                ox += " +
                          l +
                          ";\n            }\n            oy += " +
                          k +
                          ";\n        }\n\n        " +
                          (Q
                            ? "res += getValueFromTensorPos_bias(0, 0, 0, c);"
                            : "") +
                          "\n\n        if (" +
                          w +
                          ") {\n            res = max(0.0, res);\n        }\n        else if (" +
                          ("relu6" === G) +
                          ") {\n            res = min(max(0.0, res), 6.0);\n        }\n\n        setOutput(res);\n    }\n    "
                        )
                      },
                      textureFuncConf: {
                        filter: ["getValueFromTensorPos"],
                        origin: ["getValueFromTensorPos"],
                        bias: ["getValueFromTensorPos"]
                      },
                      behaviors: [
                        "adaptPaddings",
                        "isApplySeparableConv",
                        "batchComputeConv2d",
                        "processBias"
                      ]
                    }
                  function $(A, I) {
                    var g = A[0],
                      C = A[1],
                      B = A[2],
                      Q = A[3]
                    if (1 === g && 1 === C)
                      return [[1, 1, B], 3, [Q], 1, [B, Q]]
                    var E = A.slice(0, I),
                      i = A.slice(I)
                    return [
                      E,
                      E.length,
                      i,
                      i.length,
                      [
                        E.reduce(function (A, I) {
                          return A * I
                        }),
                        i.reduce(function (A, I) {
                          return A * I
                        })
                      ]
                    ]
                  }
                  function AA(A, I, g) {
                    if (1 === g)
                      return (
                        "\n            int getTensorPosFromArrayIndex_" +
                        A +
                        "(int n) {\n                return calMod(n, " +
                        I[0] +
                        ");\n            }\n        "
                      )
                    var C = w(I)
                    return (
                      C.push(1),
                      "\n    ivec" +
                        g +
                        " shapeVec_" +
                        A +
                        " = ivec" +
                        g +
                        "(" +
                        C.join(", ") +
                        ");\n    ivec" +
                        g +
                        " getTensorPosFromArrayIndex_" +
                        A +
                        "(int n) {\n        ivec" +
                        g +
                        " pos;\n        pos[0] = n / shapeVec_" +
                        A +
                        "[0];\n        for (int i = 1; i < " +
                        g +
                        "; i++) {\n            n = calMod(n, shapeVec_" +
                        A +
                        "[i - 1]);\n            pos[i] = n / shapeVec_" +
                        A +
                        "[i];\n        }\n        return pos;\n    }\n    "
                    )
                  }
                  function IA(A) {
                    return 1 === A ? "int" : "ivec" + A
                  }
                  function gA(A) {
                    var I = A.total_shape,
                      g = A.channel,
                      C = A.height_shape,
                      B = A.width_shape
                    return [I / g / C / B, g, C, B]
                  }
                  const CA = {
                    mainFunc: function (A, I) {
                      var g = A.origin,
                        C = I.transpose_X,
                        B = void 0 !== C && C,
                        Q = I.transpose_Y,
                        E = void 0 !== Q && Q,
                        i = I.trans_x,
                        o = void 0 !== i && i,
                        D = I.trans_y,
                        n = B || o,
                        t = E || (void 0 !== D && D)
                      return (
                        "\n    void main() {\n        float res = 0.0;\n        // 获取output的坐标\n        ivec4 out_pos = getOutputTensorPos();\n        ivec4 origin_pos = out_pos;\n        if (" +
                        n +
                        ") {\n            origin_pos[3] = origin_pos[2];\n        }\n        ivec4 counter_pos = out_pos;\n        if (" +
                        t +
                        ") {\n            counter_pos[2] = counter_pos[3];\n        }\n\n        for (int j = 0; j < " +
                        (n ? g.height_shape : g.width_shape) +
                        "; j++) {\n            if (" +
                        n +
                        ") {\n                origin_pos[2] = j;\n            }\n            else {\n                origin_pos[3] = j;\n            }\n            if (" +
                        t +
                        ") {\n                counter_pos[3] = j;\n            }\n            else {\n                counter_pos[2] = j;\n            }\n            float o = getValueFromTensorPos_origin(origin_pos[0], origin_pos[1], origin_pos[2], origin_pos[3]);\n            float c = getValueFromTensorPos_counter(counter_pos[0], counter_pos[1], counter_pos[2], counter_pos[3]);\n            \n            res += c * o;\n        }\n        setOutput(res);\n    }\n    "
                      )
                    },
                    textureFuncConf: {
                      counter: ["getValueFromTensorPos"],
                      origin: ["getValueFromTensorPos"]
                    }
                  }
                  function BA(A, I) {
                    var g = A[0],
                      C = A[1],
                      B = A[2],
                      Q = A[3]
                    if (1 === g && 1 === C)
                      return [[1, 1, B], 3, [Q], 1, [B, Q]]
                    var E = A.slice(0, I),
                      i = A.slice(I)
                    return [
                      E,
                      E.length,
                      i,
                      i.length,
                      [
                        E.reduce(function (A, I) {
                          return A * I
                        }),
                        i.reduce(function (A, I) {
                          return A * I
                        })
                      ]
                    ]
                  }
                  function QA(A, I, g) {
                    if (1 === g)
                      return (
                        "\n            int getTensorPosFromArrayIndex_" +
                        A +
                        "(int n) {\n                return calMod(n, " +
                        I[0] +
                        ");\n            }\n        "
                      )
                    var C = w(I)
                    return (
                      C.push(1),
                      "\n    ivec" +
                        g +
                        " shapeVec_" +
                        A +
                        " = ivec" +
                        g +
                        "(" +
                        C.join(", ") +
                        ");\n    ivec" +
                        g +
                        " getTensorPosFromArrayIndex_" +
                        A +
                        "(int n) {\n        ivec" +
                        g +
                        " pos;\n        pos[0] = n / shapeVec_" +
                        A +
                        "[0];\n        for (int i = 1; i < " +
                        g +
                        "; i++) {\n            n = calMod(n, shapeVec_" +
                        A +
                        "[i - 1]);\n            pos[i] = n / shapeVec_" +
                        A +
                        "[i];\n        }\n        return pos;\n    }\n    "
                    )
                  }
                  function EA(A) {
                    return 1 === A ? "int" : "ivec" + A
                  }
                  function iA(A) {
                    var I = A.total_shape,
                      g = A.channel,
                      C = A.height_shape,
                      B = A.width_shape
                    return [I / g / C / B, g, C, B]
                  }
                  const oA = {
                      mainFunc: function (A, I) {
                        return (
                          "\n    // start函数\n    void main(void) {\n        vec2 outCoord = vCoord.xy * (_2d_shape_texture_out);\n        int index = int(outCoord.x) + int(outCoord.y) * int(" +
                          A.out.width_texture +
                          ");\n        ivec4 originPos = getTensorPosFromArrayIndex_origin(index);\n        float res = getValueFromTensorPos_origin(originPos[0], originPos[1], originPos[2], originPos[3]);\n        setOutput(res);\n    }\n    "
                        )
                      },
                      textureFuncConf: {
                        origin: [
                          "getTensorPosFromArrayIndex",
                          "getValueFromTensorPos"
                        ]
                      }
                    },
                    DA = {
                      mainFunc: function (A, I) {
                        var g = A.out,
                          C = A.origin,
                          B = I.align_mode,
                          Q = void 0 === B ? 1 : B,
                          E = I.align_corners,
                          i = void 0 === E || E
                        return (
                          "\n    // start函数\n\n    vec4 getData(float n, float scale, bool align_flag, int in_len) {\n        float m = align_flag ? ((n + 0.5) / scale - 0.5) : (n / scale);\n        int a1 = int(floor(m));\n        a1 = a1 > 0 ? a1 : 0;\n        int a2 = (a1 + 1) < (in_len - 1) ? (a1 + 1) : (in_len - 1);\n\n        float idx_src = (n + 0.5) / scale - 0.5;\n        idx_src = idx_src > 0.0 ? idx_src : 0.0;\n        float b1 = align_flag ? (idx_src - float(a1)) : (n / scale - float(a1));\n        float b2 = 1.0 - b1;\n        return vec4(float(a1), float(a2), b1, b2);\n    }\n\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n\n        bool align_flag = " +
                          Q +
                          " == 0 && !" +
                          i +
                          ";\n\n        float scale_x = 0.0;\n        float scale_y = 0.0;\n        if (" +
                          i +
                          ") {\n            scale_x = float(" +
                          g.width_shape +
                          " - 1) / float(" +
                          C.width_shape +
                          " - 1);\n            scale_y = float(" +
                          g.height_shape +
                          " - 1) / float(" +
                          C.height_shape +
                          " - 1);\n        }\n        else {\n            scale_x = float(" +
                          g.width_shape +
                          ") / float(" +
                          C.width_shape +
                          ");\n            scale_y = float(" +
                          g.height_shape +
                          ") / float(" +
                          C.height_shape +
                          ");\n        }\n\n        vec4 vx = getData(float(oPos.a), scale_x, align_flag, " +
                          C.width_shape +
                          ");\n        vec4 vy = getData(float(oPos.b), scale_y, align_flag, " +
                          C.height_shape +
                          ");\n\n        int x1 = int(vx.r);\n        int x2 = int(vx.g);\n        float x3 = vx.b;\n        float x4 = vx.a;\n        int y1 = int(vy.r);\n        int y2 = int(vy.g);\n        float y3 = vy.b;\n        float y4 = vy.a;\n\n        float value11 = getValueFromTensorPos_origin(oPos.r, oPos.g, y1, x1);\n        float value12 = getValueFromTensorPos_origin(oPos.r, oPos.g, y2, x1);\n        float value21 = getValueFromTensorPos_origin(oPos.r, oPos.g, y1, x2);\n        float value22 = getValueFromTensorPos_origin(oPos.r, oPos.g, y2, x2);\n        float value = x4 * y4 * value11 + x4 * y3 * value12 + x3 * y4 * value21 + x3 * y3 * value22;\n        setOutput(float(value));\n    }\n    "
                        )
                      },
                      textureFuncConf: { origin: ["getValueFromTensorPos"] }
                    },
                    nA = DA
                  var tA = {
                    relu: ["transToPrelu"],
                    relu6: ["transToRelu6"],
                    leaky_relu: ["transToLeakyrelu"],
                    transToLeakyrelu: ["transToLeakyrelu"],
                    scale: ["transToScale"],
                    sigmoid: ["transToSigmoid"],
                    hard_sigmoid: ["transToHardSigmoid"],
                    pow: ["transToPow"],
                    sqrt: ["transToSqrt"],
                    tanh: ["transToTanh"]
                  }
                  function aA(A, I) {
                    var g = I.multi_value,
                      C = void 0 === g ? 1 : g,
                      B = I.bias_value,
                      Q = void 0 === B ? 0 : B
                    return (
                      "\n    // start函数\n    void main(void) {\n        // 输出数据\n        float o = getPixelsFromTexturePos_origin(vCoord).r;\n        float res = " +
                      I.active_function +
                      "(o, float(" +
                      C +
                      "), float(" +
                      Q +
                      "));\n        setOutput(res);\n    }\n    "
                    )
                  }
                  function sA(A) {
                    return {
                      mainFunc: aA,
                      textureFuncConf: { origin: ["getPixelsFromTexturePos"] },
                      behaviors: tA[A]
                    }
                  }
                  const wA = {
                      mainFunc: function (A, I) {
                        var g = I.axes,
                          C = Array.isArray(g) ? g : [g],
                          B = [0, 1, 2, 3].filter(function (A) {
                            return A >= C.length
                          })
                        return (
                          "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float o = 0.0;\n        o = getValueFromTensorPos_origin(" +
                          [0, 1, 2, 3]
                            .map(function (A) {
                              return C.indexOf(A) > -1
                                ? 0
                                : "oPos[" + B.splice(0, 1) + "]"
                            })
                            .join(",") +
                          ");\n        setOutput(float(o));\n    }\n    "
                        )
                      },
                      textureFuncConf: { origin: ["getValueFromTensorPos"] }
                    },
                    hA = {
                      mainFunc: function (A, I) {
                        var g = A.origin,
                          C = A.out,
                          B = I.align_corners
                        return (
                          "\n    // start函数\n    int getData(float n, float scale, bool align_corners) {\n        float m = align_corners ? (n / scale + 0.5) : (n / scale);\n        return int(floor(m));\n    }\n\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        \n        float scale_x = 0.0;\n        float scale_y = 0.0;\n        if (" +
                          B +
                          ") {\n            scale_x = float(" +
                          C.width_shape +
                          " -1) / float(" +
                          g.width_shape +
                          " - 1);\n            scale_y = float(" +
                          C.height_shape +
                          " - 1) / float(" +
                          g.height_shape +
                          " - 1);\n        }\n        else {\n            scale_x = float(" +
                          C.width_shape +
                          ") / float(" +
                          g.width_shape +
                          ");\n            scale_y = float(" +
                          C.height_shape +
                          ") / float(" +
                          g.height_shape +
                          ");\n        }\n    \n        int vx = getData(float(oPos.a), scale_x, " +
                          B +
                          ");\n        int vy = getData(float(oPos.b), scale_y, " +
                          B +
                          ");\n        \n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, vy, vx);\n        setOutput(float(o));\n}\n    "
                        )
                      },
                      textureFuncConf: { origin: ["getValueFromTensorPos"] },
                      commonFuncConf: ["transferFromNHWCtoNCHW"]
                    }
                  var eA = function () {
                    for (var A = 0, I = 0, g = arguments.length; I < g; I++)
                      A += arguments[I].length
                    var C = Array(A),
                      B = 0
                    for (I = 0; I < g; I++)
                      for (
                        var Q = arguments[I], E = 0, i = Q.length;
                        E < i;
                        E++, B++
                      )
                        C[B] = Q[E]
                    return C
                  }
                  const GA = {
                      mainFunc: function (A, I) {
                        var g = A.origin,
                          C = A.image,
                          B = A.out,
                          Q = I.variances,
                          E = void 0 === Q ? [0.1, 0.1, 0.2, 0.2] : Q,
                          i = I.fixed_sizes,
                          o = I.fixed_ratios,
                          D = I.densities,
                          n = I.flatten_to_2d,
                          t = I.clip,
                          a = I.step_w,
                          s = void 0 === a ? 0 : a,
                          h = I.step_h,
                          e = void 0 === h ? 0 : h,
                          F = I.offset,
                          R = void 0 === F ? 0.5 : F,
                          r = I.runtime,
                          N = void 0 === r ? 0 : r,
                          y = C.height_shape,
                          c = C.width_shape,
                          U = g.height_shape,
                          S = g.width_shape,
                          M = B.total_shape,
                          k = B.channel,
                          J = B.height_shape,
                          l = B.width_shape,
                          L = M / k / J / l,
                          Y = w([L, k, J, l]),
                          K = s,
                          d = e
                        ;(0 !== s && 0 !== e) || ((K = c / S), (d = y / U))
                        var q = Math.round(0.5 * (K + d)),
                          f = o.map(function (A) {
                            return Math.sqrt(A)
                          }),
                          H =
                            1 === f.length
                              ? "sqrt_fixed_ratios"
                              : "sqrt_fixed_ratios[r]",
                          u = o.length,
                          p = J,
                          m = L,
                          x = k
                        n && ((m = U), (x = S), (p = J / U / S))
                        var T = w([m, x, p, l]),
                          b = V("out1", {
                            numbers_shape: eA(T, [1]),
                            length_shape: 4
                          }),
                          X = D.map(function (A) {
                            return A * A * u
                          }),
                          P = X.length,
                          W = (function (A) {
                            var I =
                                "ivec2 calRemain(int remain, int curAccIndex, int s) {",
                              g = A.length
                            if (1 === g)
                              I +=
                                "\n            int accIndex0 = density_acc_shape;\n\n            if (remain >= accIndex0) {\n                s++;\n                remain -= accIndex0;\n            }\n            else {\n                return ivec2(remain, s);\n            }\n            "
                            else
                              for (var C = 0; C < g; C++)
                                I +=
                                  "\n            int accIndex" +
                                  C +
                                  " = density_acc_shape[" +
                                  C +
                                  "];\n\n            if (remain >= accIndex" +
                                  C +
                                  ") {\n                s++;\n                remain -= accIndex" +
                                  C +
                                  ";\n            }\n            else {\n                return ivec2(remain, s);\n            }\n            "
                            return I + "\n    }\n    "
                          })(X),
                          O = t ? "v = min(max(v, 0.), 1.);" : "",
                          Z =
                            1 === P
                              ? "density_acc_shape"
                              : "density_acc_shape[0]",
                          v =
                            "\n    float getFloat4TensorVal(vec4 tensor, int index) {\n        if (index == 0) {\n            return tensor[0];\n        }\n        else if (index == 1) {\n            return tensor[1];\n        }\n        else if (index == 2) {\n            return tensor[2];\n        }\n        else if (index == 3) {\n            return tensor[3];\n        }\n    }\n    float getFloat3TensorVal(vec3 tensor, int index) {\n        if (index == 0) {\n            return tensor[0];\n        }\n        else if (index == 1) {\n            return tensor[1];\n        }\n        else if (index == 2) {\n            return tensor[2];\n        }\n    }\n    float getFloat2TensorVal(vec2 tensor, int index) {\n        if (index == 0) {\n            return tensor[0];\n        }\n        else if (index == 1) {\n            return tensor[1];\n        }\n    }\n    float getFloat1TensorVal(float tensor, int index) {\n        return tensor;\n    }\n    int getInt4TensorVal(ivec4 tensor, int index) {\n        if (index == 0) {\n            return tensor[0];\n        }\n        else if (index == 1) {\n            return tensor[1];\n        }\n        else if (index == 2) {\n            return tensor[2];\n        }\n        else if (index == 3) {\n            return tensor[3];\n        }\n    }\n    int getInt3TensorVal(ivec3 tensor, int index) {\n        if (index == 0) {\n            return tensor[0];\n        }\n        else if (index == 1) {\n            return tensor[1];\n        }\n        else if (index == 2) {\n            return tensor[2];\n        }\n    }\n    int getInt2TensorVal(ivec2 tensor, int index) {\n        if (index == 0) {\n            return tensor[0];\n        }\n        else if (index == 1) {\n            return tensor[1];\n        }\n    }\n\n    int getInt1TensorVal(int tensor, int index) {\n       return tensor;\n    }\n\n    " +
                            b +
                            "\n    \n        " +
                            G(D, "densities") +
                            "\n        " +
                            G(i, "fixed_sizes") +
                            "\n        " +
                            G(f, "sqrt_fixed_ratios") +
                            "\n        " +
                            (function (A, I) {
                              if (1 === A.length)
                                return "int " + I + " = int(" + A[0] + ");"
                              for (
                                var g = A.length,
                                  C =
                                    "\n        ivec" +
                                    g +
                                    " " +
                                    I +
                                    " = ivec" +
                                    g +
                                    "(\n    ",
                                  B = 0;
                                B < g;
                                B++
                              )
                                C += A[B] + ","
                              return C.slice(0, -1) + ");"
                            })(X, "density_acc_shape") +
                            "\n    \n    " +
                            W +
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        int rr = int(oPos.r);\n        int gg = int(oPos.g);\n        int bb = int(oPos.b);\n        int aa = int(oPos.a);\n\n        // 输出坐标转换为输入坐标\n        int index = rr * " +
                            Y[0] +
                            " + gg * " +
                            Y[1] +
                            " + bb * " +
                            Y[2] +
                            " + aa;\n        ivec4 realOutPos = getTensorPosFromArrayIndex_out1(index);\n        int h = realOutPos.r;\n        int w = realOutPos.g;\n        int b = realOutPos.b;\n        int a = realOutPos.a;\n    "
                        return 1 === N
                          ? "\n        " +
                              G(E, "variances") +
                              "\n        " +
                              v +
                              "\n        setOutput(getFloat4TensorVal(variances, aa));\n        }"
                          : "\n            " +
                              v +
                              "\n            // 求idx 对应的 s, r, di, dj\n            int s = 0;\n            int remain = b;\n            int curAccIndex = " +
                              Z +
                              ";\n\n            ivec2 remainInfo = calRemain(remain, curAccIndex, s);\n            remain = remainInfo[0];\n            s = remainInfo[1];\n            int density = int(getFloat" +
                              D.length +
                              "TensorVal(densities, s));\n            int r = int(floor(float(remain / density / density)));\n            remain -= r * density * density;\n\n            float di = floor(float(remain / density));\n            float dj = float(remain - int(di) * density);\n\n            float center_x = (float(w) + float(" +
                              R +
                              ")) * float(" +
                              K +
                              ");\n            float center_y = (float(h) + float(" +
                              R +
                              ")) * float(" +
                              d +
                              ");\n            float fixed_size = getFloat" +
                              i.length +
                              "TensorVal(fixed_sizes, s);\n            float shift = float(" +
                              q +
                              ") / float(density);\n\n            float v = 0.0;\n            if (a == 0 || a == 2) {\n                float box_width_ratio = fixed_size * " +
                              H +
                              ";\n                float density_center_x = center_x - float(" +
                              q +
                              ") / 2. + shift / 2.;\n                float center_x_temp = density_center_x + dj * shift;\n                if (a == 0) {\n                    v = max((center_x_temp - box_width_ratio / 2.) / float(" +
                              c +
                              "), 0.);\n                }\n                else {\n                    v = min((center_x_temp + box_width_ratio / 2.) / float(" +
                              c +
                              "), 1.);\n                }\n            }\n            else {\n                float box_height_ratio = fixed_size / " +
                              H +
                              ";\n                float density_center_y = center_y - float(" +
                              q +
                              ") / 2. + shift / 2.;\n                float center_y_temp = density_center_y + di * shift;\n                if (a == 1) {\n                    v = max((center_y_temp - box_height_ratio / 2.) / float(" +
                              y +
                              "), 0.);\n                }\n                else {\n                    v = min((center_y_temp + box_height_ratio / 2.) / float(" +
                              y +
                              "), 1.);\n                }\n            }\n\n            " +
                              O +
                              "\n\n            setOutput(v);\n        }\n        "
                      },
                      textureFuncConf: {
                        image: ["getValueFromTensorPos"],
                        origin: ["getValueFromTensorPos"]
                      }
                    },
                    FA = {
                      mainFunc: function (A, I) {
                        var g = A.origin,
                          C = A.image,
                          B = A.out,
                          Q = I.variances,
                          E = void 0 === Q ? [0.1, 0.1, 0.2, 0.2] : Q,
                          i = I.flip,
                          o = I.clip,
                          D = I.step_w,
                          n = void 0 === D ? 0 : D,
                          t = I.step_h,
                          a = void 0 === t ? 0 : t,
                          s = I.offset,
                          w = void 0 === s ? 0.5 : s,
                          h = I.runtime,
                          F = void 0 === h ? 0 : h,
                          R = I.min_sizes,
                          r = void 0 === R ? [] : R,
                          N = I.max_sizes,
                          y = void 0 === N ? [] : N,
                          c = I.aspect_ratios,
                          U = void 0 === c ? [] : c,
                          S = I.min_max_aspect_ratios_order,
                          M = void 0 !== S && S,
                          k = C.height_shape,
                          J = C.width_shape,
                          l = g.height_shape,
                          L = g.width_shape,
                          Y = B.channel,
                          K = B.height_shape,
                          d = n,
                          q = a
                        ;(0 !== n && 0 !== a) || ((d = J / L), (q = k / l))
                        var f = [1]
                        U.forEach(function (A) {
                          1 !== A &&
                            (f.push(Math.sqrt(A)),
                            i && f.push(Math.sqrt(1 / A)))
                        })
                        var H = f.length,
                          u = o ? "res = min(max(res, 0.), 1.);" : "",
                          p =
                            "\n    float getFloat4TensorVal(vec4 tensor, int index) {\n        if (index == 0) {\n            return tensor[0];\n        }\n        else if (index == 1) {\n            return tensor[1];\n        }\n        else if (index == 2) {\n            return tensor[2];\n        }\n        else if (index == 3) {\n            return tensor[3];\n        }\n    }\n\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        int nn = int(oPos.r);\n        int cc = int(oPos.g);\n        int hh = int(oPos.b);\n        int ww = int(oPos.a);\n\n\n        \n        " +
                            e(r, "min_sizes") +
                            "\n        " +
                            e(y, "max_sizes") +
                            "\n        " +
                            e(f, "aspect_ratios") +
                            "\n    \n\n    "
                        return 1 === F
                          ? "\n            " +
                              G(E, "variances") +
                              "\n            " +
                              p +
                              "\n            float res = 0.0;\n            res = getFloat4TensorVal(variances, ww);\n            setOutput(float(res));\n        }"
                          : "\n            " +
                              p +
                              "\n            int idx = nn * " +
                              Y * K +
                              " + cc * " +
                              K +
                              " + hh;\n            int as_num = " +
                              H +
                              ";\n            float offset = " +
                              w +
                              ";\n            \n            int feature_width = " +
                              L +
                              ";\n            int num_priors = " +
                              K +
                              ";\n            float step_width = float(" +
                              d +
                              ");\n            float step_height = float(" +
                              q +
                              ");\n\n            float im_width = float(" +
                              J +
                              ");\n            float im_height = float(" +
                              k +
                              ");\n\n            bool min_max_aspect_ratios_order = " +
                              M +
                              ";\n\n            // 求idx 对应的 h w p m\n            int h = int(idx / (num_priors * feature_width));\n            int w = (idx / num_priors) % feature_width;\n            int p = idx % num_priors;\n            int m = " +
                              (y.length > 0) +
                              " ? int(p / (as_num + 1)) : int(p / as_num);\n            float cx = (float(w) + offset) * step_width;\n            float cy = (float(h) + offset) * step_height;\n            float min_size = float(min_sizes[m]);\n            float bw = 0.0;\n            float bh = 0.0;\n\n            " +
                              (y.length > 0
                                ? "\n            int s = p % (as_num + 1);\n            if (" +
                                  !M +
                                  ") {\n                if (s < as_num) {\n                    float ar = aspect_ratios[s];\n                    bw = min_size * ar / 2.0;\n                    bh = min_size / ar / 2.0;\n                }\n                else {\n                    float max_size = float(max_sizes[m]);\n                    bw = sqrt(min_size * max_size) / 2.0;\n                    bh = bw;\n                }\n            }\n            else {\n                if (s == 0) {\n                    bh = min_size / 2.0;\n                    bw = bh;\n                }\n                else if (s == 1) {\n                    float max_size = float(max_sizes[m]);\n                    bw = sqrt(min_size * max_size) / 2.0;\n                    bh = bw;\n                }\n                else {\n                    float ar = aspect_ratios[s - 1];\n                    bw = min_size * sqrt(ar) / 2.0;\n                    bh = min_size / sqrt(ar) / 2.0;\n                }\n            }"
                                : "\n            int s = p % as_num;\n            float ar = aspect_ratios[s];\n            bw = min_size * ar / 2.0;\n            bh = min_size / ar / 2.0;\n        ") +
                              "\n            float res = 0.0;\n            if (ww == 0) {\n                res = (cx - bw) / im_width;\n            }\n            else if (ww == 1) {\n                res = (cy - bh) / im_height;\n            }\n            else if (ww == 2) {\n                res = (cx + bw) / im_width;\n            }\n            else {\n                res = (cy + bh) / im_height;\n            }\n\n            " +
                              u +
                              "\n\n            setOutput(float(res));\n        }\n        "
                      },
                      textureFuncConf: {
                        image: ["getValueFromTensorPos"],
                        origin: ["getValueFromTensorPos"]
                      },
                      behaviors: []
                    }
                  var RA = {
                      arg_max: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = I.axis,
                            B = void 0 === C ? -1 : C,
                            Q = I.flatten,
                            E = g.total_shape,
                            i = g.height_shape,
                            o = g.width_shape,
                            D = g.channel,
                            n = g.length_unformatted_shape,
                            t = E / (o * i * D),
                            a = B < 0 ? 3 : 4 - n + B,
                            s = [t, D, i, o][a]
                          return (
                            "\n\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        float o = 0.0;\n        int pos = 0;\n        if (" +
                            !Q +
                            ") {\n            if (" +
                            a +
                            " == 1) {\n                float tmp = getValueFromTensorPos_origin(oPos.g, 0, oPos.b, oPos.a);\n                for (int index = 0; index < " +
                            s +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(oPos.g, index, oPos.b, oPos.a);\n                    if (o > tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }\n            }\n            else if (" +
                            a +
                            " == 2) {\n                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, 0, oPos.a);\n                for (int index = 0; index < " +
                            s +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, index, oPos.a);\n                    if (o > tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }\n            }\n            else if (" +
                            a +
                            " == 3) {\n                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, 0);\n                for (int index = 0; index < " +
                            s +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, index);\n                    if (o > tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }\n            }\n            else {\n                float tmp = getValueFromTensorPos_origin(0, oPos.g, oPos.b, oPos.a);\n                for (int index = 0; index < " +
                            s +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(index, oPos.g, oPos.b, oPos.a);\n                    if (o > tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }\n            }\n        }\n        else {\n            int index = 0;\n            float tmp = getValueFromTensorPos_origin(0, 0, 0, 0);\n            for (int n = 0; n < " +
                            t +
                            "; n++) {\n                for (int c = 0; c < " +
                            D +
                            "; c++) {\n                    for (int h = 0; h < " +
                            i +
                            "; h++) {\n                        for (int w = 0; w < " +
                            o +
                            "; w++) {\n                            o = getValueFromTensorPos_origin(n, c, h, w);\n                            if (o > tmp) {\n                                tmp = o;\n                                pos = index;\n                            }\n                            index++;\n                        }\n                    }\n                }\n            }\n        }\n        setOutput(float(pos));\n    }"
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      arg_min: {
                        mainFunc: function (A, I) {
                          for (
                            var g = A.origin,
                              C = I.axis,
                              B = void 0 === C ? -1 : C,
                              Q = I.flatten,
                              E = g.total_shape,
                              i = g.height_shape,
                              o = g.width_shape,
                              D = g.channel,
                              n = E / (o * i * D),
                              t = [n, D, i, o],
                              a = 0,
                              s = 0;
                            s < 4 && !(t[s] > 1);
                            s++
                          )
                            a++
                          var w = B < 0 ? 4 - a + B : B,
                            h = t[(w = a + w)]
                          return (
                            "\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        float o = 0.0;\n        int pos = 0;\n        if (" +
                            !Q +
                            ") {\n            if (" +
                            w +
                            " == 1) {\n                float tmp = getValueFromTensorPos_origin(oPos.g, 0, oPos.b, oPos.a);\n                for (int index = 0; index < " +
                            h +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(oPos.g, index, oPos.b, oPos.a);\n                    if (o < tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }\n            }\n            else if (" +
                            w +
                            " == 2) {\n                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, 0, oPos.a);\n                for (int index = 0; index < " +
                            h +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, index, oPos.a);\n                    if (o < tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }\n            }\n            else if (" +
                            w +
                            " == 3) {\n                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, 0);\n                for (int index = 0; index < " +
                            h +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, index);\n                    if (o < tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }     \n            }\n            else {\n                float tmp = getValueFromTensorPos_origin(0, oPos.g, oPos.b, oPos.a);\n                for (int index = 0; index < " +
                            h +
                            "; index++) {\n                    o = getValueFromTensorPos_origin(index, oPos.g, oPos.b, oPos.a);\n                    if (o < tmp) {\n                        tmp = o;\n                        pos = index;\n                    }\n                }\n            }\n        }\n        else {\n            int index = 0;\n            float tmp = getValueFromTensorPos_origin(0, 0, 0, 0);\n            for (int n = 0; n < " +
                            n +
                            "; n++) {\n                for (int c = 0; c < " +
                            D +
                            "; c++) {\n                    for (int h = 0; h < " +
                            i +
                            "; h++) {\n                        for (int w = 0; w < " +
                            o +
                            "; w++) {\n                            o = getValueFromTensorPos_origin(n, c, h, w);\n                            if (o < tmp) {\n                                tmp = o;\n                                pos = index;\n                            }\n                            index++;\n                        }\n                    }\n                }\n            }\n        }\n        setOutput(float(pos));\n    }"
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      conv2d: _,
                      conv2d_packing: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.filter,
                            B = A.out,
                            Q = A.bias,
                            E = I.groups,
                            i = void 0 === E ? 1 : E,
                            o = I.strides,
                            D = void 0 === o ? [] : o,
                            n = I.paddings,
                            t = void 0 === n ? [] : n,
                            a = I.dilations,
                            s = void 0 === a ? [] : a,
                            w = I.fuse_relu,
                            h = I.act_type,
                            e = D[0],
                            G = void 0 === e ? 1 : e,
                            F = D[1],
                            R = void 0 === F ? 1 : F,
                            r = t[0],
                            N = void 0 === r ? 0 : r,
                            y = t[1],
                            c = void 0 === y ? 0 : y,
                            U = s[0],
                            S = void 0 === U ? 1 : U,
                            M = s[1],
                            k = void 0 === M ? 1 : M
                          return (
                            "\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        int x = oPos.a;\n        int c = oPos.g;\n        int y = oPos.b;\n        int b = oPos.r;\n        vec4 res = vec4(0.0, 0.0, 0.0, 0.0);\n\n        int oy = y * " +
                            G +
                            " - " +
                            N +
                            ";\n        for (int fy = 0; fy < " +
                            C.height_shape +
                            "; fy++) {\n            if (oy >= " +
                            g.height_shape +
                            ") {\n                break;\n            }\n            if (oy < 0) {\n                oy += " +
                            S +
                            ";\n                continue;\n            }\n            int ox = x * " +
                            R +
                            " - " +
                            c +
                            ";\n            for (int fx = 0; fx < " +
                            C.width_shape +
                            "; fx++) {\n                if (ox >= " +
                            g.width_shape +
                            ") {\n                    break;\n                }\n                if (ox < 0) {\n                    ox += " +
                            k +
                            ";\n                    continue;\n                }\n                // channel计算\n                for (int j = 0; j < " +
                            C.channel +
                            "; j += 1) {\n                    int c0 = (c / (" +
                            B.channel +
                            " * 4 / " +
                            i +
                            ")) * " +
                            C.channel +
                            " + j;\n                    vec4 fValue = getValueFromTensorPosPacking_filter(c * 4, j, fy, fx);\n                    vec4 oValue = getValueFromTensorPosPacking_origin(b, c0, oy, ox);\n\n                    for (int packed_index = 0; packed_index < 4; packed_index++) {\n                        if (packed_index == 0) {\n                            res.r += dot(fValue, oValue);\n                        } else if (packed_index == 1) {\n                            int c1 = ((c + 1) / (" +
                            B.channel +
                            " * 4 / " +
                            i +
                            ")) * " +
                            C.channel +
                            " + j;\n                            oValue = getValueFromTensorPosPacking_origin(b, c1, oy, ox);\n                            fValue = getValueFromTensorPosPacking_filter(c * 4 + 1, j, fy, fx);\n                            res.g += dot(fValue, oValue);\n                        } else if (packed_index == 2) {\n                            int c2 = ((c + 2) / (" +
                            B.channel +
                            " * 4 / " +
                            i +
                            ")) * " +
                            C.channel +
                            " + j;\n                            oValue = getValueFromTensorPosPacking_origin(b, c2, oy, ox);\n                            fValue = getValueFromTensorPosPacking_filter(c * 4 + 2, j, fy, fx);\n                            res.b += dot(fValue, oValue);\n                        } else if (packed_index == 3) {\n                            int c3 = ((c + 3) / (" +
                            B.channel +
                            " * 4 / " +
                            i +
                            ")) * " +
                            C.channel +
                            " + j;\n                            oValue = getValueFromTensorPosPacking_origin(b, c3, oy, ox);\n                            fValue = getValueFromTensorPosPacking_filter(c * 4 + 3, j, fy, fx);\n                            res.a += dot(fValue, oValue);\n                        }\n                    }\n                }\n                ox += " +
                            k +
                            ";\n            }\n            oy += " +
                            S +
                            ";\n        }\n\n        " +
                            (Q
                              ? "res += getValueFromTensorPosPacking_bias(0, c, 0, 0);"
                              : "") +
                            "\n\n        if (" +
                            w +
                            ") {\n            res = max(vec4(0.0, 0.0, 0.0, 0.0), res);\n        }\n        else if (" +
                            ("relu6" === h) +
                            ") {\n            res = min(max(vec4(0.0, 0.0, 0.0, 0.0), res), vec4(6.0, 6.0, 6.0, 6.0));\n        }\n        setPackedOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          filter: ["getValueFromTensorPosPacking"],
                          origin: ["getValueFromTensorPosPacking"],
                          bias: ["getValueFromTensorPosPacking"]
                        },
                        behaviors: [
                          "adaptPaddings",
                          "isApplySeparableConv",
                          "batchComputeConv2d",
                          "processBias"
                        ]
                      },
                      conv2d_transpose: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.filter,
                            B = A.out,
                            Q = I.groups,
                            E = void 0 === Q ? 1 : Q,
                            i = I.strides,
                            o = void 0 === i ? [] : i,
                            D = I.paddings,
                            n = void 0 === D ? [] : D,
                            t = I.dilations,
                            a = void 0 === t ? [] : t,
                            s = o[0],
                            w = void 0 === s ? 1 : s,
                            h = o[1],
                            e = void 0 === h ? 1 : h,
                            G = n[0],
                            F = void 0 === G ? 0 : G,
                            R = n[1],
                            r = void 0 === R ? 0 : R
                          ;(r = C.height_shape - r - 1),
                            (F = C.width_shape - F - 1)
                          var N = a[0],
                            y = void 0 === N ? 1 : N,
                            c = a[1],
                            U = void 0 === c ? 1 : c
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        int x = oPos.a;\n        int c = oPos.g;\n        int y = oPos.b;\n        int b = oPos.r;\n        float res = 0.0;\n        int temp_x = 0;\n        int temp_y = 0;\n        float o = 0.0;\n        float f = 0.0;\n\n        // 获取output的坐标\n        int oTensorChannel = int(c * " +
                            E +
                            " / " +
                            B.channel +
                            ") * " +
                            g.channel +
                            ";\n        int oy = y - " +
                            r +
                            ";\n        const int groupLen = int(" +
                            g.channel +
                            " / " +
                            E +
                            ");\n        int groupIndex = int(c / groupLen);\n\n        for (int fy = 0; fy < " +
                            C.height_shape +
                            "; fy++) {\n            if (oy < 0) {\n                oy += " +
                            y +
                            ";\n                continue;\n            }\n            int ox = x - " +
                            F +
                            ";\n            for (int fx = 0; fx < " +
                            C.width_shape +
                            "; fx++) {\n\n                if (ox < 0) {\n                    ox += " +
                            U +
                            ";\n                    continue;\n                }\n                // channel计算\n                for (int j = 0; j < groupLen; j++) {\n                    int curIndex = j + b * groupLen;\n                    if (calMod(ox, int(" +
                            e +
                            ")) == 0 && calMod(oy, int(" +
                            w +
                            ")) == 0) {\n                        temp_x = int(floor(float(ox) / float(" +
                            e +
                            ")));\n                        temp_y = int(floor(float(oy) / float(" +
                            w +
                            ")));\n                        if (temp_x < " +
                            g.width_shape +
                            " && temp_y < " +
                            g.height_shape +
                            ") {\n                            o = getValueFromTensorPos_origin(b, curIndex , temp_y, temp_x);\n                            f = getValueFromTensorPos_filter(\n                                curIndex,\n                                int(c / " +
                            E +
                            "),\n                                " +
                            C.height_shape +
                            "-1-fy,\n                                " +
                            C.width_shape +
                            "-1-fx\n                            );\n                            res += f * o;\n                        }\n                    }\n                }\n                ox += " +
                            U +
                            ";\n            }\n            oy += " +
                            y +
                            ";\n        }\n        setOutput(float(res));\n    }\n"
                          )
                        },
                        textureFuncConf: {
                          filter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"]
                        },
                        behaviors: [
                          "adaptPaddings",
                          "isApplySeparableConv",
                          "batchComputeConv2d",
                          "processBias"
                        ]
                      },
                      depthwise_conv2d: _,
                      conv2d_depthwise: _,
                      conv2d_elementwise_add: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.filter,
                            B = A.out,
                            Q = A.counter,
                            E = I.active_function,
                            i = I.groups,
                            o = void 0 === i ? 1 : i,
                            D = I.axis,
                            n = I.strides,
                            t = void 0 === n ? [] : n,
                            a = I.paddings,
                            s = void 0 === a ? [] : a,
                            w = I.dilations,
                            h = void 0 === w ? [] : w,
                            e = I.multi_value,
                            G = I.bias_value,
                            F = t[0],
                            R = void 0 === F ? 1 : F,
                            r = t[1],
                            N = void 0 === r ? 1 : r,
                            y = s[0],
                            c = void 0 === y ? 0 : y,
                            U = s[1],
                            S = void 0 === U ? 0 : U,
                            M = h[0],
                            k = void 0 === M ? 1 : M,
                            J = h[1],
                            l = void 0 === J ? 1 : J
                          return (
                            "\n    // start函数\n\n    float getValueFromCounter(int index) {\n        float xPos = float(index) / float(" +
                            Q.width_shape +
                            ");\n        vec4 pixels = TEXTURE2D(texture_counter, vec2(xPos, 0.5));\n        return pixels.r;\n    }\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n\n        int x = oPos.a;\n        int c = oPos.g;\n        int y = oPos.b;\n        int b = oPos.r;\n        int addAxis = oPos[" +
                            D +
                            "];\n        float res = getValueFromCounter(addAxis);\n\n        // 获取output的坐标\n        int oTensorChannel = (c / (" +
                            B.channel +
                            " / " +
                            o +
                            ")) * " +
                            C.channel +
                            ";\n        int oy = y * " +
                            R +
                            " - " +
                            c +
                            ";\n        for (int fy = 0; fy < " +
                            C.height_shape +
                            "; fy++) {\n            if (oy >= " +
                            g.height_shape +
                            ") {\n                break;\n            }\n            if (oy < 0) {\n                oy += " +
                            k +
                            ";\n                continue;\n            }\n            int ox = x * " +
                            N +
                            " - " +
                            S +
                            ";\n            for (int fx = 0; fx < " +
                            C.width_shape +
                            "; fx++) {\n                if (ox >= " +
                            g.width_shape +
                            ") {\n                    break;\n                }\n                if (ox < 0) {\n                    ox += " +
                            l +
                            ";\n                    continue;\n                }\n                // channel计算\n                for (int j = 0; j < " +
                            C.channel +
                            "; j++) {\n                    float f = getValueFromTensorPos_filter(c, j, fy, fx);\n                    float o = getValueFromTensorPos_origin(b, oTensorChannel + j, oy, ox);\n                    res += f * o;\n                }\n                ox += " +
                            l +
                            ";\n            }\n            oy += " +
                            k +
                            ";\n        }\n        setOutput(" +
                            E +
                            "(res,  " +
                            e +
                            ",  " +
                            G +
                            "));\n    }\n"
                          )
                        },
                        textureFuncConf: {
                          filter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"],
                          counter: ["getValueFromTensorPos"]
                        },
                        behaviors: [
                          "mergeAttrs",
                          "checkIsMerge",
                          "setActiveFunc"
                        ]
                      },
                      pool2d: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = I.strides,
                            B = void 0 === C ? [] : C,
                            Q = I.paddings,
                            E = void 0 === Q ? [] : Q,
                            i = I.pooling_type,
                            o = I.ksize,
                            D = B[0],
                            n = void 0 === D ? 1 : D,
                            t = B[1],
                            a = void 0 === t ? 1 : t,
                            s = E[0],
                            w = void 0 === s ? 0 : s,
                            h = E[1],
                            e = void 0 === h ? 0 : h,
                            G = o[0],
                            F = o[1]
                          return (
                            "\n    // start函数\n    void main(void) {\n        float res = 0.0;\n        if (" +
                            i +
                            " == 1) {\n            res = -1.70141184e38;\n        }\n        // 获取output的坐标\n        ivec4 out_pos = getOutputTensorPos();\n        // X、Y方向的移动步长\n        int count_pool = 0;\n        int oy_base = out_pos[2] * " +
                            n +
                            " - " +
                            w +
                            ";\n        int ox_base = out_pos[3] * " +
                            a +
                            " - " +
                            e +
                            ";\n        for (int fy = 0; fy < " +
                            G +
                            "; fy++) {\n            int oy = oy_base + fy;\n            if (oy >= " +
                            g.height_shape +
                            ") {\n                break;\n            }\n            if (oy < 0) {\n                continue;\n            }\n            for (int fx = 0; fx < " +
                            F +
                            "; fx++) {\n                int ox = ox_base + fx;\n                if (ox >= " +
                            g.width_shape +
                            ") {\n                    break;\n                }\n                if (ox < 0) {\n                    continue;\n                }\n                // origin数据\n                float curr = getValueFromTensorPos_origin(out_pos[0], out_pos[1], oy, ox);\n                if (" +
                            i +
                            " == 1) {\n                    if (curr > res) {\n                        res = curr;\n                    }\n                } else {\n                    res += curr;\n                    // 在平均池化模式忽略填充值(exclusive默认为true）\n                    count_pool++;\n                }\n            }\n        }\n        if (" +
                            i +
                            " != 1) {\n            res = res / float(count_pool);\n        }\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        behaviors: [
                          "isMax",
                          "setPacked",
                          "setAdaptive",
                          "isGlobalPooling"
                        ]
                      },
                      pool2d_max: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = I.strides,
                            B = void 0 === C ? [] : C,
                            Q = I.paddings,
                            E = void 0 === Q ? [] : Q,
                            i = I.ksize,
                            o = I.global_pooling,
                            D = I.runtime,
                            n = B[0],
                            t = void 0 === n ? 1 : n,
                            a = B[1],
                            s = void 0 === a ? 1 : a,
                            w = E[0],
                            h = void 0 === w ? 0 : w,
                            e = E[1],
                            G = void 0 === e ? 0 : e,
                            F = i[0],
                            R = i[1],
                            r = (function (A) {
                              var I = A.total_shape,
                                g = A.channel,
                                C = A.height_shape,
                                B = A.width_shape
                              return [I / g / C / B, g, C, B]
                            })(g),
                            N = "",
                            y = "setOutput(float(res));"
                          return (
                            0 === D &&
                              !0 === o &&
                              ((N =
                                "\n            if (curr > res) {\n                index = " +
                                r[2] * r[3] +
                                " * out_pos[1] + " +
                                r[3] +
                                " * oy + ox;\n            }\n        "),
                              (y = "setOutput(float(index));")),
                            "\n    // start函数\n    void main(void) {\n        float res = -1.70141184e38;\n        int index = 0;\n        // 获取output的坐标\n        ivec4 out_pos = getOutputTensorPos();\n        int b = out_pos[0];\n        int c = out_pos[1];\n        int y = out_pos[2];\n        int x = out_pos[3];\n        // X、Y方向的移动步长\n        int oy_base = out_pos[2] * " +
                              t +
                              " - " +
                              h +
                              ";\n        int ox_base = out_pos[3] * " +
                              s +
                              " - " +
                              G +
                              ";\n        for (int fy = 0; fy < " +
                              F +
                              "; fy++) {\n            int oy = oy_base + fy;\n            if (oy >= " +
                              g.height_shape +
                              ") {\n                break;\n            }\n            if (oy < 0) {\n                continue;\n            }\n            for (int fx = 0; fx < " +
                              R +
                              "; fx++) {\n                int ox = ox_base + fx;\n                if (ox >= " +
                              g.width_shape +
                              ") {\n                    break;\n                }\n                if (ox < 0) {\n                    continue;\n                }\n                // origin数据\n                float curr = getValueFromTensorPos_origin(out_pos[0], out_pos[1], oy, ox);\n                " +
                              N +
                              "\n                res = max(res, curr);\n            }\n        }\n        " +
                              y +
                              "\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        behaviors: [
                          "isMax",
                          "setPacked",
                          "setAdaptive",
                          "isGlobalPooling"
                        ]
                      },
                      pool2d_winograd: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.pool,
                            B = I.strides,
                            Q = void 0 === B ? [] : B,
                            E = I.paddings,
                            i = void 0 === E ? [] : E,
                            o = I.type_pool,
                            D = Q[0],
                            n = void 0 === D ? 1 : D,
                            t = Q[1],
                            a = void 0 === t ? 1 : t,
                            s = i[0],
                            w = void 0 === s ? 0 : s,
                            h = i[1],
                            e = void 0 === h ? 0 : h,
                            G = g.height_shape,
                            F = g.width_texture,
                            R = g.height_texture
                          return (
                            "\n\n    float getValueFromTensorPosPacked_origin(int r, int g, int b, int a) {\n        int y = b / 2;\n        int yOffset = calMod(b, 2);\n        int x = a / 2;\n        int xOffset = calMod(a, 2);\n        int height = " +
                            G +
                            " + " +
                            g.offset_y +
                            ";\n        vec4 pixels = TEXTURE2D(\n            texture_origin,\n            vec2((float(x) + 0.5) / float(" +
                            F +
                            "),\n            (float(g * height / 2 + y) + 0.5) / float(" +
                            R +
                            "))\n        );\n        int index = 0;\n        if (xOffset == 0 && yOffset == 0) {\n            return pixels[0];\n        }\n        else if (xOffset == 1 && yOffset == 0) {\n            return pixels[1];\n        }\n        else if (xOffset == 0 && yOffset == 1) {\n            return pixels[2];\n        }\n        return pixels[3];\n    }\n\n    // start函数\n    void main(void) {\n        float res = (-1.0 / exp(-20.0));\n        // 获取output的坐标\n        ivec4 out_pos = getOutputTensorPos();\n        // int b = out_pos[0];\n        // int c = out_pos[1];\n        // int y = out_pos[2];\n        // int x = out_pos[3];\n        // X、Y方向的移动步长\n        int count_pool = 0;\n        int oy_base = out_pos[2] * " +
                            n +
                            " - " +
                            w +
                            ";\n        int ox_base = out_pos[3] * " +
                            a +
                            " - " +
                            e +
                            ";\n\n        for (int fy = 0; fy < " +
                            C.height_shape +
                            "; fy++) {\n            int oy = oy_base + fy;\n            if (oy >= " +
                            g.height_shape +
                            ") {\n                break;\n            }\n            if (oy < 0) {\n                continue;\n            }\n            for (int fx = 0; fx < " +
                            C.width_shape +
                            "; fx++) {\n                int ox = ox_base + fx;\n                if (ox >= " +
                            g.width_shape +
                            ") {\n                    break;\n                }\n                if (ox < 0) {\n                    continue;\n                }\n                // origin数据\n                float curr = getValueFromTensorPosPacked_origin(out_pos[0], out_pos[1], oy, ox);\n                if (" +
                            o +
                            " == 1) {\n                    if (curr > res) {\n                        res = curr;\n                    }\n                } else {\n                    res += curr;\n                    // 在平均池化模式忽略填充值(exclusive默认为true）\n                    count_pool++;\n                }\n            }\n        }\n        if (" +
                            o +
                            " != 1) {\n            res = res / float(count_pool);\n        }\n        setOutput(res);\n    }\n    "
                          )
                        },
                        behaviors: [
                          "isMax",
                          "setPacked",
                          "setAdaptive",
                          "isGlobalPooling"
                        ]
                      },
                      elementwise_add: {
                        mainFunc: function (A, I) {
                          var g = I.counterPos,
                            C = I.Scale_y,
                            B = void 0 === C ? 1 : C,
                            Q = I.Scale_x,
                            E = void 0 === Q ? 1 : Q,
                            i = I.Scale_out,
                            o = void 0 === i ? 1 : i
                          return (
                            "\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n\n        float c = getValueFromTensorPos_counter(" +
                            g +
                            ");\n        float res = float(" +
                            o / B +
                            ") * c + float(" +
                            o / E +
                            ") * o;\n        setOutput(float(res));\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          counter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"]
                        },
                        behaviors: [
                          "processElementwiseAxis",
                          "genElementwiseCounterPos"
                        ]
                      },
                      elementwise_mul: {
                        mainFunc: function (A, I) {
                          var g = A.counter,
                            C = I.counterPos,
                            B = I.Scale_y,
                            Q = void 0 === B ? 1 : B,
                            E = I.Scale_x,
                            i = void 0 === E ? 1 : E,
                            o = I.Scale_out,
                            D = void 0 === o ? 1 : o
                          return (
                            "\n    ivec4 formatNCHW(int n, int c, int h, int w) {\n        int newN = n;\n        int newC = c;\n        int newH = h;\n        int newW = w;\n\n        if (n >= " +
                            g.height_texture / g.height_shape +
                            ") {\n            newN = int(" +
                            g.height_texture / g.height_shape +
                            ");\n        }\n        if (c >= " +
                            g.channel +
                            ") {\n            newC = int(" +
                            (g.channel - 1) +
                            ");\n        }\n        if (h >= " +
                            g.height_shape +
                            ") {\n            newH = " +
                            (g.height_shape - 1) +
                            ";\n        }\n        if (w >= " +
                            g.width_shape +
                            ") {\n            newW = " +
                            (g.width_shape - 1) +
                            ";\n        }\n        return ivec4(newN, newC, newH, newW);\n    }\n\n    // start函数\n    void main() {\n        // 输出数据\n        ivec4 oPos1 = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos1.r, oPos1.g, oPos1.b, oPos1.a);\n        ivec4 oPos = formatNCHW(oPos1.r, oPos1.g, oPos1.b, oPos1.a);\n\n        float c = getValueFromTensorPos_counter(" +
                            C +
                            ");\n        float res = float(" +
                            D / i +
                            ") * o * float(" +
                            1 / Q +
                            ") * c;\n        setOutput(float(res));\n    }\n\n    "
                          )
                        },
                        textureFuncConf: {
                          counter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"]
                        },
                        behaviors: [
                          "processElementwiseAxis",
                          "genElementwiseCounterPos"
                        ]
                      },
                      elementwise_div: {
                        mainFunc: function (A, I) {
                          var g = A.counter,
                            C = I.counterPos,
                            B = I.Scale_y,
                            Q = void 0 === B ? 1 : B,
                            E = I.Scale_x,
                            i = void 0 === E ? 1 : E,
                            o = I.Scale_out,
                            D = void 0 === o ? 1 : o
                          return (
                            "\n    ivec4 formatNCHW(int n, int c, int h, int w) {\n        int newN = n;\n        int newC = c;\n        int newH = h;\n        int newW = w;\n\n        if (n >= " +
                            g.height_texture / g.height_shape +
                            ") {\n            newN = int(" +
                            g.height_texture / g.height_shape +
                            ");\n        }\n        if (c >= " +
                            g.channel +
                            ") {\n            newC = int(" +
                            (g.channel - 1) +
                            ");\n        }\n        if (h >= " +
                            g.height_shape +
                            ") {\n            newH = " +
                            (g.height_shape - 1) +
                            ";\n        }\n        if (w >= " +
                            g.width_shape +
                            ") {\n            newW = " +
                            (g.width_shape - 1) +
                            ";\n        }\n        return ivec4(newN, newC, newH, newW);\n    }\n\n    // start函数\n    void main() {\n        // 输出数据\n        ivec4 oPos1 = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos1.r, oPos1.g, oPos1.b, oPos1.a);\n        ivec4 oPos = formatNCHW(oPos1.r, oPos1.g, oPos1.b, oPos1.a);\n\n        float c = getValueFromTensorPos_counter(" +
                            C +
                            ");\n        float res = float(" +
                            D +
                            ") * (float(" +
                            1 / i +
                            ") * o / (float(" +
                            1 / Q +
                            ") * c));\n        setOutput(float(res));\n    }\n\n    "
                          )
                        },
                        textureFuncConf: {
                          counter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"]
                        },
                        behaviors: [
                          "processElementwiseAxis",
                          "genElementwiseCounterPos"
                        ]
                      },
                      elementwise_pow: {
                        mainFunc: function (A, I) {
                          var g = I.counterPos,
                            C = I.Scale_y,
                            B = void 0 === C ? 1 : C,
                            Q = I.Scale_x,
                            E = void 0 === Q ? 1 : Q,
                            i = I.Scale_out,
                            o = void 0 === i ? 1 : i
                          return (
                            "\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n\n        float c = getValueFromTensorPos_counter(" +
                            g +
                            ");\n        float res = pow(float(" +
                            o / E +
                            ") * o, float(" +
                            o / B +
                            ") * c);\n        setOutput(float(res));\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          counter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"]
                        },
                        behaviors: [
                          "processElementwiseAxis",
                          "genElementwiseCounterPos"
                        ]
                      },
                      elementwise_sub: {
                        mainFunc: function (A, I) {
                          var g = I.counterPos,
                            C = I.Scale_y,
                            B = void 0 === C ? 1 : C,
                            Q = I.Scale_x,
                            E = void 0 === Q ? 1 : Q,
                            i = I.Scale_out,
                            o = void 0 === i ? 1 : i
                          return (
                            "\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n\n        float c = getValueFromTensorPos_counter(" +
                            g +
                            ");\n        float res = float(" +
                            o / E +
                            ") * o - float(" +
                            o / B +
                            ") * c;\n        setOutput(float(res));\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          counter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"]
                        },
                        behaviors: [
                          "processElementwiseAxis",
                          "genElementwiseCounterPos"
                        ]
                      },
                      mul: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.counter,
                            B = I.x_num_col_dims,
                            Q = I.y_num_col_dims,
                            E = gA(g),
                            i = gA(C),
                            o = $(E, B),
                            D = o[0],
                            n = o[1],
                            t = o[2],
                            a = o[3],
                            s = o[4],
                            w = $(i, Q),
                            h = w[0],
                            e = w[1],
                            G = w[2],
                            F = w[3]
                          return (
                            "\n    " +
                            AA("x1", D, n) +
                            "\n    " +
                            AA("x2", t, a) +
                            "\n    " +
                            AA("y1", h, e) +
                            "\n    " +
                            AA("y2", G, F) +
                            "\n\n    // start函数\n    void main(void) {\n        float res = 0.0;\n        // 获取output的坐标\n        ivec4 opos = getOutputTensorPos();\n        float temp = 0.0;\n\n        // output is 2D\n        int b = opos.b;\n        int a = opos.a;\n\n        " +
                            IA(n) +
                            " x1 = getTensorPosFromArrayIndex_x1(b);\n        " +
                            IA(F) +
                            " y2 = getTensorPosFromArrayIndex_y2(a);\n\n        for (int j = 0; j < " +
                            s[1] +
                            "; j++) {\n            " +
                            IA(a) +
                            " x2 = getTensorPosFromArrayIndex_x2(j);\n            " +
                            IA(e) +
                            " y1 = getTensorPosFromArrayIndex_y1(j);\n\n            ivec4 xPos = ivec4(" +
                            IA(n) +
                            "(x1), " +
                            IA(a) +
                            "(x2));\n            ivec4 yPos = ivec4(" +
                            IA(e) +
                            "(y1), " +
                            IA(F) +
                            "(y2));\n\n            float o = getValueFromTensorPos_origin(xPos.r, xPos.g, xPos.b, xPos.a);\n            float c = getValueFromTensorPos_counter(yPos.r, yPos.g, yPos.b, yPos.a);\n            res += c * o;\n        }\n\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          counter: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"]
                        }
                      },
                      matmul: CA,
                      matmul_v2: CA,
                      fc: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.weight,
                            B = I.x_num_col_dims,
                            Q = I.y_num_col_dims,
                            E = iA(g),
                            i = iA(C),
                            o = BA(E, B),
                            D = o[0],
                            n = o[1],
                            t = o[2],
                            a = o[3],
                            s = o[4],
                            w = BA(i, Q),
                            h = w[0],
                            e = w[1],
                            G = w[2],
                            F = w[3]
                          return (
                            "\n    " +
                            QA("x1", D, n) +
                            "\n    " +
                            QA("x2", t, a) +
                            "\n    " +
                            QA("y1", h, e) +
                            "\n    " +
                            QA("y2", G, F) +
                            "\n\n    // start函数\n    void main(void) {\n        float res = 0.0;\n        // 获取output的坐标\n        ivec4 opos = getOutputTensorPos();\n        float bias = getValueFromTensorPos_bias(opos.r, opos.g, opos.b, opos.a);\n        float temp = 0.0;\n\n        // output is 2D\n        int b = opos.b;\n        int a = opos.a;\n\n        " +
                            EA(n) +
                            " x1 = getTensorPosFromArrayIndex_x1(b);\n        " +
                            EA(F) +
                            " y2 = getTensorPosFromArrayIndex_y2(a);\n\n        for (int j = 0; j < " +
                            s[1] +
                            "; j++) {\n            " +
                            EA(a) +
                            " x2 = getTensorPosFromArrayIndex_x2(j);\n            " +
                            EA(e) +
                            " y1 = getTensorPosFromArrayIndex_y1(j);\n\n            ivec4 xPos = ivec4(" +
                            EA(n) +
                            "(x1), " +
                            EA(a) +
                            "(x2));\n            ivec4 yPos = ivec4(" +
                            EA(e) +
                            "(y1), " +
                            EA(F) +
                            "(y2));\n\n            float o = getValueFromTensorPos_origin(xPos.r, xPos.g, xPos.b, xPos.a);\n            float c = getValueFromTensorPos_weight(yPos.r, yPos.g, yPos.b, yPos.a);\n            res += c * o;\n        }\n\n        res = res + bias;\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          weight: ["getValueFromTensorPos"],
                          origin: ["getValueFromTensorPos"],
                          bias: ["getValueFromTensorPos"]
                        }
                      },
                      dropout: {
                        mainFunc: function (A, I) {
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float o = 0.0;\n        o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n        if (" +
                            ("downgrade_in_infer" ===
                              I.dropout_implementation) +
                            ") {\n            o = o * (1.0 - " +
                            I.dropout_prob +
                            ");\n        }\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      concat: {
                        mainFunc: function (A, I) {
                          var g = I.dim,
                            C = Object.keys(A)
                              .filter(function (A) {
                                return "out" !== A
                              })
                              .map(function (I) {
                                return A[I]
                              })
                              .map(function (A) {
                                var I = A.width_shape,
                                  C = A.height_shape,
                                  B = A.channel
                                return [A.total_shape / (I * C * B), B, C, I][g]
                              }),
                            B = C.map(function (A, I) {
                              return C.slice(0, I + 1).reduce(function (A, I) {
                                return A + I
                              }, 0)
                            }),
                            Q = ""
                          return (
                            B.forEach(function (A, I) {
                              Q +=
                                0 === I
                                  ? "\n            if (oPos[" +
                                    g +
                                    "] < " +
                                    A +
                                    ") {\n                o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n            }\n            "
                                  : "\n            else if (oPos[" +
                                    g +
                                    "] < " +
                                    A +
                                    ") {\n                oPos[" +
                                    g +
                                    "] = oPos[" +
                                    g +
                                    "] - " +
                                    B[I - 1] +
                                    ";\n                o = getValueFromTensorPos_origin_" +
                                    I +
                                    "(oPos.r, oPos.g, oPos.b, oPos.a);\n            }\n            "
                            }),
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float o = 0.0;\n        " +
                              Q +
                              "\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { "@all": ["getValueFromTensorPos"] },
                        behaviors: ["normalizeDim"]
                      },
                      concat_mul: {
                        mainFunc: function (A, I) {
                          var g = I.dim,
                            C = Object.keys(A)
                              .filter(function (A) {
                                return "out" !== A
                              })
                              .map(function (I) {
                                return A[I]
                              })
                              .map(function (A) {
                                var I = A.width_shape,
                                  C = A.height_shape,
                                  B = A.channel
                                return [A.total_shape / (I * C * B), B, C, I][g]
                              }),
                            B = C.map(function (A, I) {
                              return C.slice(0, I + 1).reduce(function (A, I) {
                                return A + I
                              }, 0)
                            }),
                            Q = ""
                          return (
                            B.forEach(function (A, I) {
                              Q +=
                                0 === I
                                  ? "\n            if (oPos[" +
                                    g +
                                    "] < " +
                                    A +
                                    ") {\n                o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n            }"
                                  : "\n            else if (oPos[" +
                                    g +
                                    "] < " +
                                    A +
                                    ") {\n                oPos[" +
                                    g +
                                    "] = oPos[" +
                                    g +
                                    "] - " +
                                    B[I - 1] +
                                    ";\n                o = getValueFromTensorPos_origin_" +
                                    I +
                                    "(oPos.r, oPos.g, oPos.b, oPos.a);\n            }\n            "
                            }),
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float o = 0.0;\n        " +
                              Q +
                              "\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { "@all": ["getValueFromTensorPos"] },
                        behaviors: ["normalizeDim"]
                      },
                      split: {
                        mainFunc: function (A, I) {
                          var g = I.target_length,
                            C = I.num,
                            B = I.dim
                          return (
                            "\n    // start函数\n    void main(void) {\n        int length = int(" +
                            g +
                            " / " +
                            C +
                            ");\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        oPos[" +
                            B +
                            "] = oPos[" +
                            B +
                            "] + layer_run_time * length;\n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        behaviors: ["normalizeDim"]
                      },
                      softmax: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = I.axis,
                            B = C
                          return (
                            (!C || C < 0) && (B = (C || -1) + 4),
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        const int n = int(" +
                              g.total_shape +
                              "/" +
                              g.channel +
                              "/" +
                              g.height_shape +
                              "/" +
                              g.width_shape +
                              ");\n        float o = getValueFromTensorPos_origin(oPos[0], oPos[1], oPos[2], oPos[3]);\n        // 输出坐标转换为输入坐标\n        float total = 0.0;\n        float res = 0.0;\n        if (" +
                              B +
                              " == 0) {\n            for (int i = 0; i < n; i++){\n            float temp = getValueFromTensorPos_origin(i, oPos[1], oPos[2], oPos[3]);\n            total += exp(temp);\n            }\n            res = exp(o) / total;\n        }\n        else if (" +
                              B +
                              " == 1) {\n            for (int i = 0; i < " +
                              g.channel +
                              "; i++){\n            float temp = getValueFromTensorPos_origin(oPos[0], i, oPos[2], oPos[3]);\n            total += exp(temp);\n            }\n            res = exp(o) / total;\n        }\n        else {\n            for (int i = 0; i < " +
                              g.width_shape +
                              "; i++){\n            float temp = getValueFromTensorPos_origin(oPos[0], oPos[1], oPos[2], i);\n            total += exp(temp);\n            }\n            res = exp(o) / total;\n        }\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      batchnorm: {
                        mainFunc: function (A, I) {
                          var g = A.bias,
                            C = A.scale,
                            B = A.mean,
                            Q = A.variance,
                            E = I.epsilon
                          return (
                            "\n    // start函数\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n\n        // 归一化数据\n        vec4 scale = getPixelsFromTexturePos_scale(vec2( float(oPos.g) / float(" +
                            C.width_texture +
                            ") + 0.00001, 0.0));\n        vec4 bias = getPixelsFromTexturePos_bias(vec2( float(oPos.g) / float(" +
                            g.width_texture +
                            ") + 0.00001, 0.0));\n        vec4 mean = getPixelsFromTexturePos_mean(vec2((float(oPos.g)) / float(" +
                            B.width_texture +
                            ")  + 0.00001, 0.0));\n        vec4 variance = getPixelsFromTexturePos_variance(\n            vec2((float(oPos.g)) / float(" +
                            Q.width_texture +
                            ") + 0.00001,\n            0.0)\n        );\n\n        float x = (o - mean[0]) / sqrt(variance[0] + " +
                            E +
                            ");\n        float res = scale[0] * x + bias[0];\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPos"],
                          scale: ["getPixelsFromTexturePos"],
                          bias: ["getPixelsFromTexturePos"],
                          mean: ["getPixelsFromTexturePos"],
                          variance: ["getPixelsFromTexturePos"]
                        }
                      },
                      reshape: oA,
                      reshape2: oA,
                      bilinear_interp: DA,
                      transpose2: {
                        mainFunc: function (A, I) {
                          var g = I.perm_arr,
                            C = I.perm_size,
                            B = g[0],
                            Q = g[1],
                            E = g[2]
                          return (
                            "\n    // start函数\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n\n        // 转置 坐标变换\n        float o = 0.0;\n        if (" +
                            C +
                            " == 1) {\n            o = getValueFromTensorPos_origin(oPos[0], oPos[1], oPos[2], oPos[3]);\n        }\n        else if (" +
                            C +
                            " == 2) {\n            o = getValueFromTensorPos_origin(\n                oPos[0], oPos[1],\n                oPos[(2 + " +
                            B +
                            ") > 3 ? 3 : (2 + " +
                            B +
                            ")],\n                oPos[(2 + " +
                            Q +
                            ") > 3 ? 3 : (2 + " +
                            Q +
                            ")]\n            );\n        }\n        else if (" +
                            C +
                            " == 3) {\n            o = getValueFromTensorPos_origin(\n                oPos[0],\n                oPos[(1 + " +
                            B +
                            ") > 3 ? 3 : (1 + " +
                            B +
                            ")],\n                oPos[(1 + " +
                            Q +
                            ") > 3 ? 3 : (1 + " +
                            Q +
                            ")],\n                oPos[(1 + " +
                            E +
                            ") > 3 ? 3 : (1 + " +
                            E +
                            ")]\n            );\n        }\n        else if (" +
                            C +
                            " == 4) {\n            o = getValueFromTensorPos_origin(\n                oPos[" +
                            B +
                            "],\n                oPos[" +
                            Q +
                            "],\n                oPos[" +
                            E +
                            "],\n                oPos[" +
                            g[3] +
                            "]\n            );\n        }\n\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        behaviors: ["normalizePerm"]
                      },
                      unpacked_2_packed: {
                        mainFunc: function (A, I) {
                          return "\n    // start函数\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        vec4 out4;\n        for (int i = 0; i < 4; i++) {\n            vec4 o = getValueFromTensorPosPacking_origin(oPos[0], oPos[1] * 4 + i, oPos[2], oPos[3]);\n            out4[i] = o[0];\n        }\n        setPackedOutput(out4);\n    }\n    "
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPosPacking"]
                        }
                      },
                      packed_2_unpacked: {
                        mainFunc: function (A, I) {
                          return "\n    // start函数\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        float res = 0.0;\n        int c1 = calMod(oPos[1], 4);\n        vec4 o = getValueFromTensorPosPacking_origin(oPos[0], oPos[1] / 4, oPos[2], oPos[3]);\n\n        if (c1 == 0) {\n            res = o.r;\n        } else if (c1 == 1) {\n            res = o.g;\n        } else if (c1 == 2) {\n            res = o.b;\n        } else if (c1 == 3) {\n            res = o.a;\n        }\n        setOutput(res);\n    }\n    "
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPosPacking"]
                        }
                      },
                      unsqueeze2: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = I.axes,
                            B = g.length_unformatted_shape,
                            Q = Array.isArray(C) ? C : [C],
                            E = 4 - B - Q.length,
                            i = Q.map(function (A) {
                              return A + E
                            }),
                            o = [0, 1, 2, 3]
                              .filter(function (A) {
                                return -1 === i.indexOf(A)
                              })
                              .map(function (A) {
                                return "oPos[" + A + "]"
                              }),
                            D = Array.from(new Array(i.length), function () {
                              return "0"
                            })
                          return (
                            o.splice.apply(
                              o,
                              (function () {
                                for (
                                  var A = 0, I = 0, g = arguments.length;
                                  I < g;
                                  I++
                                )
                                  A += arguments[I].length
                                var C = Array(A),
                                  B = 0
                                for (I = 0; I < g; I++)
                                  for (
                                    var Q = arguments[I], E = 0, i = Q.length;
                                    E < i;
                                    E++, B++
                                  )
                                    C[B] = Q[E]
                                return C
                              })([0, 0], D)
                            ),
                            "\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        float o = 0.0;\n        o = getValueFromTensorPos_origin(" +
                              o.join(",") +
                              ");\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      flatten_contiguous_range: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.out
                          return (
                            "\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        int sumVal = oPos.a\n            + oPos.b * " +
                            C.width_shape +
                            "\n            + oPos.g * " +
                            C.height_shape +
                            " * " +
                            C.width_shape +
                            "\n            + oPos.r * " +
                            C.channel +
                            " * " +
                            C.width_shape +
                            " * " +
                            C.height_shape +
                            ";\n        ivec4 new_oPos = transferFromNHWCtoNCHW(\n            sumVal,\n            " +
                            g.channel +
                            ",\n            " +
                            g.width_shape +
                            ",\n            " +
                            g.height_shape +
                            ",\n            " +
                            g.total_shape +
                            "\n        );\n        float o = getValueFromTensorPos_origin(new_oPos.r, new_oPos.g, new_oPos.b, new_oPos.a);\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        commonFuncConf: ["transferFromNHWCtoNCHW"]
                      },
                      flatten2: oA,
                      greater_than: {
                        mainFunc: function (A, I) {
                          return "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float x = getValueFromTensorPos_input(oPos.r, oPos.g, oPos.b, oPos.a);\n        float y = getValueFromTensorPos_counter(oPos.r, oPos.g, oPos.b, oPos.a);\n\n        setOutput(bool(x >= y));\n    }\n    "
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPos"],
                          counter: ["getValueFromTensorPos"]
                        }
                      },
                      reduce_sum: {
                        mainFunc: function (A, I) {
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float o = 0.0;\n        for (int i = 0; i < " +
                            I.inputs_dim +
                            "; i++) {\n            oPos[" +
                            I.dim +
                            "] = i;\n            o += getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);;\n        }\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        behaviors: ["normalizeDim"]
                      },
                      where: {
                        mainFunc: function (A, I) {
                          return "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float x = getValueFromTensorPos_input(oPos.r, oPos.g, oPos.b, oPos.a);\n        float y = getValueFromTensorPos_counter(oPos.r, oPos.g, oPos.b, oPos.a);\n        float condition = getValueFromTensorPos_condition(oPos.r, oPos.g, oPos.b, oPos.a);\n        float o = 0.0;\n\n        if (bool(condition)) {\n            o = x;\n        }\n        else {\n            o = y;\n        }\n        setOutput(o);\n    }\n    "
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPos"],
                          counter: ["getValueFromTensorPos"],
                          condition: ["getValueFromTensorPos"]
                        }
                      },
                      connect: {
                        mainFunc: function (A, I) {
                          var g = A.out,
                            C = g.total_shape,
                            B = g.width_shape,
                            Q = g.height_shape,
                            E = g.channel,
                            i = w([C / (B * Q * E), E, Q, B]),
                            o = Object.keys(A)
                              .filter(function (A) {
                                return "out" !== A
                              })
                              .map(function (I) {
                                return A[I].total_shape
                              }),
                            D = o.map(function (A, I) {
                              return o.slice(0, I + 1).reduce(function (A, I) {
                                return A + I
                              }, 0)
                            }),
                            n = ""
                          return (
                            D.forEach(function (A, I) {
                              n +=
                                0 === I
                                  ? "\n            if (sumVal < " +
                                    A +
                                    ") {\n                co = getTensorPosFromArrayIndex_origin(sumVal);\n                o = getValueFromTensorPos_origin(co.r, co.g, co.b, co.a);\n            }"
                                  : "\n            else if (sumVal < " +
                                    A +
                                    ") {\n                co = getTensorPosFromArrayIndex_origin_" +
                                    I +
                                    "(sumVal - " +
                                    D[I - 1] +
                                    ");\n                o = getValueFromTensorPos_origin_" +
                                    I +
                                    "(co.r, co.g, co.b, co.a);\n            }\n            "
                            }),
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        float o = 0.0;\n        ivec4 co;\n        int sumVal = oPos.b * " +
                              i[2] +
                              " + oPos.a;\n        " +
                              n +
                              "\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          "@all": [
                            "getValueFromTensorPos",
                            "getTensorPosFromArrayIndex"
                          ]
                        }
                      },
                      reduce_mean: {
                        mainFunc: function (A, I) {
                          var g = I.inputs_dim
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        float o = 0.0;\n        for (int i = 0; i < " +
                            g +
                            "; i++) {\n            oPos[" +
                            I.dim +
                            "] = i;\n            o += getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n        }\n        o = o / float(" +
                            g +
                            ");\n        setOutput(o);\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        behaviors: ["normalizeDim"]
                      },
                      hard_swish: {
                        mainFunc: function (A, I) {
                          var g = I.offset,
                            C = void 0 === g ? 3 : g,
                            B = I.scale,
                            Q = void 0 === B ? 6 : B,
                            E = I.threshold
                          return (
                            "\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n        float res = o * min(max(0.0, o + float(" +
                            C +
                            ")), float(" +
                            (void 0 === E ? 6 : E) +
                            ")) / float(" +
                            Q +
                            ");\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      nearest_interp: hA,
                      nearest_interp_v2: hA,
                      cast: {
                        mainFunc: function (A, I) {
                          var g = ""
                          switch (I.out_dtype) {
                            case 0:
                              g =
                                "\n            float res_bool = 0.0;\n            if (o != 0.0) {\n                res_bool = 1.0;\n            }\n            setOutput(res_bool);"
                              break
                            case 1:
                            case 2:
                            case 3:
                              g =
                                "\n            int res_int = int(o);\n            setOutput(float(res_int));"
                              break
                            default:
                              g =
                                "       \n            float res_float = o;\n            setOutput(res_float);"
                          }
                          return (
                            "\n    void main() {\n       // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n        " +
                            g +
                            "\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      fill_constant_batch_size_like: {
                        mainFunc: function (A, I) {
                          return (
                            "\n    // start函数\n    void main(void) {\n        float res = float(" +
                            I.value +
                            ");\n        setOutput(res);\n    }\n"
                          )
                        }
                      },
                      rnn_matmul: {
                        mainFunc: function (A, I) {
                          var g = A.weightlist_0,
                            C = I.input_axis,
                            B = I.state_axis,
                            Q = I.batch,
                            E = I.reverse,
                            i = void 0 !== E && E ? Q - C - 1 : C
                          return (
                            "\n    void main() {\n         float res = 0.0;\n        // 获取output的坐标\n        ivec4 out_pos = getOutputTensorPos();\n        \n        if (" +
                            (0 === C) +
                            ") {\n            res = getValueFromTensorPos_origin(out_pos[0], " +
                            i +
                            ", out_pos[2], out_pos[3]);\n            setOutput(res);\n            return;\n        }\n        \n        ivec4 origin_pos = out_pos;\n        ivec4 weight_pos = out_pos;\n\n        weight_pos[1] = 0;\n        weight_pos[2] = weight_pos[3];\n\n        float o = 0.0;\n        float w_hh = 0.0;\n        float prestate_h = 0.0;\n        res = getValueFromTensorPos_origin(out_pos[0], " +
                            i +
                            ", out_pos[2], out_pos[3]);\n        for (int j = 0; j < " +
                            g.width_shape +
                            "; j++) {\n            prestate_h = getValueFromTensorPos_prestate(origin_pos[0], origin_pos[1], origin_pos[2], j);\n            w_hh = getValueFromTensorPos_weightlist_0(out_pos[0], " +
                            B +
                            ", out_pos[3], j);\n            o += w_hh * prestate_h;\n        }\n        res += o;\n\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPos"],
                          prestate: ["getValueFromTensorPos"],
                          weightlist_0: ["getValueFromTensorPos"]
                        }
                      },
                      rnn_hidden: {
                        mainFunc: function (A, I) {
                          var g = I.state_axis,
                            C = I.hidden_size
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        float origin = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n        float cell = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + " +
                            C +
                            ");\n        float appender = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + " +
                            2 * C +
                            ");\n        float fourth = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + " +
                            3 * C +
                            ");\n        float counter  = getValueFromTensorPos_counter(oPos.r, " +
                            g +
                            ", oPos.b, oPos.a);\n        float i = 1.0 / (1.0 + exp(-origin));\n        float f = 1.0 / (1.0 + exp(-cell));\n        float o = 1.0 / (1.0 + exp(-fourth));\n        float c = f * counter + i * tanh_calc(appender);\n        float h = o * tanh_calc(c);\n        \n        setOutput(h);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPos"],
                          counter: ["getValueFromTensorPos"]
                        }
                      },
                      rnn_cell: {
                        mainFunc: function (A, I) {
                          var g = I.state_axis,
                            C = I.hidden_size
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        float origin = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);\n        float cell = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + " +
                            C +
                            ");\n        float appender = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + " +
                            2 * C +
                            ");\n        float fourth = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + " +
                            3 * C +
                            ");\n        float counter  = getValueFromTensorPos_counter(oPos.r, " +
                            g +
                            ", oPos.b, oPos.a);\n        float i = 1.0 / (1.0 + exp(-origin));\n        float f = 1.0 / (1.0 + exp(-cell));\n        float c = f * counter + i * tanh_calc(appender);\n        \n        setOutput(c);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPos"],
                          counter: ["getValueFromTensorPos"]
                        }
                      },
                      rnn_origin: {
                        mainFunc: function (A, I) {
                          var g = A.weightlist_0,
                            C = A.weightlist_1,
                            B = I.state_axis
                          return (
                            "\n    void main() {\n        float res = 0.0;\n        // 获取output的坐标\n        ivec4 out_pos = getOutputTensorPos();\n        ivec4 origin_pos = out_pos;\n        ivec4 weight_pos = out_pos;\n      \n        weight_pos[1] = 0;\n        weight_pos[2] = weight_pos[3];\n\n        float b_ih = getValueFromTensorPos_weightlist_2(0, 0, 0, out_pos[3]);\n        float b_hh = getValueFromTensorPos_weightlist_3(0, 0, 0, out_pos[3]);\n        \n        for (int j = 0; j < " +
                            g.width_shape +
                            "; j++) {\n            float o = getValueFromTensorPos_origin(origin_pos[0], origin_pos[1], 0, j);\n            float w_ih = getValueFromTensorPos_weightlist_0(0, 0, out_pos[3], j);\n            res += w_ih * o;\n        }\n        res += b_ih;\n\n        for (int j = 0; j < " +
                            C.width_shape +
                            "; j++) {\n                float prestate = getValueFromTensorPos_prestate(0, 0, 0, j);\n                float w_hh = getValueFromTensorPos_weightlist_1(0, " +
                            B +
                            ", out_pos[3], j);\n                res += w_hh * prestate;\n        }\n        res += b_hh;\n \n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPos"],
                          prestate: ["getValueFromTensorPos"],
                          weightlist_0: ["getValueFromTensorPos"],
                          weightlist_1: ["getValueFromTensorPos"],
                          weightlist_2: ["getValueFromTensorPos"],
                          weightlist_3: ["getValueFromTensorPos"]
                        }
                      },
                      pool2d_avg: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = I.strides,
                            B = void 0 === C ? [] : C,
                            Q = I.paddings,
                            E = void 0 === Q ? [] : Q,
                            i = I.ksize,
                            o = B[0],
                            D = void 0 === o ? 1 : o,
                            n = B[1],
                            t = void 0 === n ? 1 : n,
                            a = E[0],
                            s = void 0 === a ? 0 : a,
                            w = E[1],
                            h = void 0 === w ? 0 : w,
                            e = i[0],
                            G = i[1]
                          return (
                            "\n    // start函数\n    void main(void) {\n        float res = 0.0;\n        // 获取output的坐标\n        ivec4 out_pos = getOutputTensorPos();\n        // X、Y方向的移动步长\n        int oy_base = out_pos[2] * " +
                            D +
                            " - " +
                            s +
                            ";\n        int ox_base = out_pos[3] * " +
                            t +
                            " - " +
                            h +
                            ";\n        for (int fy = 0; fy < " +
                            e +
                            "; fy++) {\n            int oy = oy_base + fy;\n            if (oy >= " +
                            g.height_shape +
                            ") {\n                break;\n            }\n            if (oy < 0) {\n                continue;\n            }\n            for (int fx = 0; fx < " +
                            G +
                            "; fx++) {\n                int ox = ox_base + fx;\n                if (ox >= " +
                            g.width_shape +
                            ") {\n                    break;\n                }\n                if (ox < 0) {\n                    continue;\n                }\n                // origin数据\n                float curr = getValueFromTensorPos_origin(out_pos[0], out_pos[1], oy, ox);\n                res += curr;\n                // 在平均池化模式忽略填充值(exclusive默认为true）\n            }\n        }\n        res = res / float(" +
                            e +
                            " * " +
                            G +
                            ");\n        setOutput(res);\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        behaviors: [
                          "setPacked",
                          "setAdaptive",
                          "isGlobalPooling"
                        ]
                      },
                      prelu: sA("prelu"),
                      relu6: sA("relu6"),
                      leakyRelu: sA("leakyRelu"),
                      scale: sA("scale"),
                      sigmoid: sA("sigmoid"),
                      relu: sA("relu"),
                      hard_sigmoid: sA("hard_sigmoid"),
                      pow: sA("pow"),
                      sqrt: sA("sqrt"),
                      tanh: sA("tanh"),
                      squeeze2: wA,
                      pad3d: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = I.paddings,
                            B = I.mode,
                            Q = I.value,
                            E = (function (A) {
                              var I = A.total_shape,
                                g = A.channel,
                                C = A.height_shape,
                                B = A.width_shape
                              return [I / g / C / B, g, C, B]
                            })(g),
                            i = {
                              reflect:
                                "\n            int a;\n            int b;\n            if (oPos.a - " +
                                C[0] +
                                " < 0) {\n                a = " +
                                C[0] +
                                " - oPos.a;\n            }\n            else if (oPos.a - " +
                                C[0] +
                                " >= " +
                                E[3] +
                                ") {\n                a = " +
                                E[3] +
                                " - (oPos.a - " +
                                C[0] +
                                " - " +
                                E[3] +
                                " + 1) - 1;\n            }\n            else {\n                a = oPos.a - " +
                                C[0] +
                                ";\n            }\n            if (oPos.b - " +
                                C[2] +
                                " < 0) {\n                b = " +
                                C[2] +
                                " - oPos.b;\n            }\n            else if (oPos.b - " +
                                C[2] +
                                " >= " +
                                E[2] +
                                ") {\n                b = " +
                                E[2] +
                                " - (oPos.b - " +
                                C[2] +
                                " - " +
                                E[2] +
                                " + 1) - 1;\n            }\n            else {\n                b = oPos.b - " +
                                C[2] +
                                ";\n            }\n            o = getValueFromTensorPos_origin(oPos.r, oPos.g, b, a);\n        ",
                              replicate:
                                "\n            int a;\n            int b;\n            if (oPos.a - " +
                                C[0] +
                                " < 0) {\n                a = 0;\n            }\n            else if (oPos.a - " +
                                C[0] +
                                " >= " +
                                E[3] +
                                ") {\n                a = " +
                                E[3] +
                                " - 1;\n            }\n            else {\n                a = oPos.a - " +
                                C[0] +
                                ";\n            }\n            if (oPos.b - " +
                                C[2] +
                                " < 0) {\n                b = 0;\n            }\n            else if (oPos.b - " +
                                C[2] +
                                " >= " +
                                E[2] +
                                ") {\n                b = " +
                                E[2] +
                                " - 1;\n            }\n            else {\n                b = oPos.b - " +
                                C[2] +
                                ";\n            }\n            o = getValueFromTensorPos_origin(oPos.r, oPos.g, b, a);\n        ",
                              circular:
                                "\n            int a;\n            int b;\n            if (oPos.a - " +
                                C[0] +
                                " < 0) {\n                a = int(mod(float(" +
                                C[0] +
                                " + oPos.a - 1), float(" +
                                E[3] +
                                ")));\n            }\n            else if (oPos.a - " +
                                C[0] +
                                " >= " +
                                E[3] +
                                ") {\n                a = int(mod(float(oPos.a - " +
                                C[0] +
                                " - " +
                                E[3] +
                                "), float(" +
                                E[3] +
                                ")));\n            }\n            else {\n                a = oPos.a - " +
                                C[0] +
                                ";\n            }\n            if (oPos.b - " +
                                C[2] +
                                " < 0) {\n                b = int(mod(float(" +
                                C[2] +
                                " + oPos.b - 1), float(" +
                                E[2] +
                                ")));\n            }\n            else if (oPos.b - " +
                                C[2] +
                                " >= " +
                                E[2] +
                                ") {\n                b = int(mod(float(oPos.b - " +
                                C[2] +
                                " - " +
                                E[2] +
                                "), float(" +
                                E[2] +
                                ")));\n            }\n            else {\n                b = oPos.b - " +
                                C[2] +
                                ";\n            }\n            o = getValueFromTensorPos_origin(oPos.r, oPos.g, b, a);\n        ",
                              constant: "",
                              undefined: ""
                            }
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        float o = " +
                            (Q || "0.0") +
                            ";\n        if (oPos.a - " +
                            C[0] +
                            " >= 0\n            && oPos.b - " +
                            C[2] +
                            " >= 0\n            && oPos.a - " +
                            C[0] +
                            " < " +
                            E[3] +
                            "\n            && oPos.b - " +
                            C[2] +
                            " < " +
                            E[2] +
                            "\n        ) {\n            o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b - " +
                            C[2] +
                            ", oPos.a - " +
                            C[0] +
                            ");\n        }\n        else {\n            " +
                            i[B] +
                            "\n        }\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] }
                      },
                      bilinear_interp_v2: nA,
                      shuffle_channel: {
                        mainFunc: function (A, I) {
                          var g = A.out,
                            C = I.group,
                            B = void 0 === C ? 2 : C,
                            Q = g.total_shape,
                            E = g.height_shape,
                            i = g.width_shape,
                            o = g.channel,
                            D = [1, 0, 2, 3]
                          return (
                            "\n    // start函数\n    void main(void) {\n        // 输出数据\n        ivec4 oPos = getOutputTensorPos();\n        float o = 0.0;\n\n        int sumVal = oPos.a\n            + oPos.b * " +
                            i +
                            "\n            + oPos.g * " +
                            E +
                            " * " +
                            i +
                            "\n            + oPos.r * " +
                            o +
                            " * " +
                            i +
                            " * " +
                            E +
                            ";\n\n        ivec4 transpose_out_pos = transferFromNHWCtoNCHW(\n            sumVal,\n            " +
                            B +
                            ",\n            " +
                            i +
                            ",\n            " +
                            E +
                            ",\n            " +
                            Q +
                            "\n        );\n\n        ivec4 transpose_in_pos = ivec4(transpose_out_pos[" +
                            D[0] +
                            "],\n            transpose_out_pos[" +
                            D[1] +
                            "], transpose_out_pos[" +
                            D[2] +
                            "], transpose_out_pos[" +
                            D[3] +
                            "]);\n        int sumVal2 = transpose_in_pos.a\n            + transpose_in_pos.b * " +
                            i +
                            "\n            + transpose_in_pos.g * " +
                            E +
                            " * " +
                            i +
                            "\n            + transpose_in_pos.r * " +
                            o / B +
                            " * " +
                            i +
                            " * " +
                            E +
                            ";\n        ivec4 origin_oPos = transferFromNHWCtoNCHW(\n            sumVal2,\n            " +
                            o +
                            ",\n            " +
                            i +
                            ",\n            " +
                            E +
                            ",\n            " +
                            Q +
                            "\n        );\n\n\n        o = getValueFromTensorPos_origin(\n            origin_oPos[0],\n            origin_oPos[1],\n            origin_oPos[2],\n            origin_oPos[3]\n        );\n\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        commonFuncConf: ["transferFromNHWCtoNCHW"]
                      },
                      pack_out: {
                        mainFunc: function (A, I) {
                          return (
                            "\n\n    // start函数\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        vec2 outCoord = vCoord.xy * _2d_shape_texture_out;\n        int index = int(outCoord.x) + int(outCoord.y) * int(" +
                            A.out.width_texture +
                            ");\n\n        int first = index * 4;\n        int sec = index * 4 + 1;\n        int third = index * 4 + 2;\n        int fourth = index * 4 + 3;\n\n        ivec4 rPos = getTensorPosFromArrayIndex_origin(first);\n        ivec4 gPos = getTensorPosFromArrayIndex_origin(sec);\n        ivec4 bPos = getTensorPosFromArrayIndex_origin(third);\n        ivec4 aPos = getTensorPosFromArrayIndex_origin(fourth);\n\n        float r = getValueFromTensorPos_origin(rPos.r, rPos.g, rPos.b, rPos.a);\n        float g = getValueFromTensorPos_origin(gPos.r, gPos.g, gPos.b, gPos.a);\n        float b = getValueFromTensorPos_origin(bPos.r, bPos.g, bPos.b, bPos.a);\n        float a = getValueFromTensorPos_origin(aPos.r, aPos.g, aPos.b, aPos.a);\n\n        setPackedOutput(vec4(r, g, b, a));\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          origin: [
                            "getValueFromTensorPos",
                            "getTensorPosFromArrayIndex"
                          ]
                        }
                      },
                      nhwc_2_nchw: {
                        mainFunc: function (A, I) {
                          var g = A.origin,
                            C = A.out
                          return (
                            "\n    void main() {\n        ivec4 oPos = getOutputTensorPos();\n        // 输出坐标转换为输入坐标\n        int sumVal = oPos.a * " +
                            C.channel +
                            "\n            + oPos.b * " +
                            C.width_shape +
                            " * " +
                            C.channel +
                            "\n            + oPos.g\n            + oPos.r * " +
                            C.channel +
                            " * " +
                            C.width_shape +
                            " * " +
                            C.height_shape +
                            ";\n        ivec4 new_oPos = transferFromNHWCtoNCHW(\n            sumVal,\n            " +
                            g.channel +
                            ",\n            " +
                            g.width_shape +
                            ",\n            " +
                            g.height_shape +
                            ",\n            " +
                            g.total_shape +
                            "\n        );\n        float o = getValueFromTensorPos_origin(new_oPos.r, new_oPos.g, new_oPos.b, new_oPos.a);\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: { origin: ["getValueFromTensorPos"] },
                        commonFuncConf: ["transferFromNHWCtoNCHW"]
                      },
                      feedPost: {
                        mainFunc: function (A, I) {
                          var g = A.out,
                            C = I.mean,
                            B = void 0 === C ? [0, 0, 0] : C,
                            Q = I.std,
                            E = void 0 === Q ? [1, 1, 1] : Q,
                            i = g.total_shape,
                            o = g.height_shape,
                            D = g.width_shape,
                            n = g.channel
                          return (
                            "\n    // start函数\n    void main(void) {\n        ivec4 nhwcPos = getOutputTensorPos();\n        int sumVal = nhwcPos.a\n            + nhwcPos.b * " +
                            D +
                            "\n            + nhwcPos.g * " +
                            o +
                            " * " +
                            D +
                            "\n            + nhwcPos.r * " +
                            n +
                            " * " +
                            D +
                            " * " +
                            o +
                            ";\n\n        ivec4 oPos = transferFromNHWCtoNCHW(\n            sumVal,\n            " +
                            n +
                            ",\n            " +
                            D +
                            ",\n            " +
                            o +
                            ",\n            " +
                            i +
                            "\n        );\n        float res = 0.0;\n        int c1 = int(mod(float(oPos[1]), 4.0));\n        int c = oPos[1];\n        vec4 o = getValueFromTensorPosPacking_origin(oPos[0], c / 4, oPos[2], oPos[3]);\n\n        if (c1 == 0) {\n            res = o.r;\n        } else if (c1 == 1) {\n            res = o.g;\n        } else if (c1 == 2) {\n            res = o.b;\n        } else if (c1 == 3) {\n            res = o.a;\n        }\n\n        if (c == 0) {\n            res = (res - float(" +
                            B[0] +
                            ")) / float(" +
                            E[0] +
                            ");\n        } else if (c == 1) {\n            res = (res - float(" +
                            B[1] +
                            ")) / float(" +
                            E[1] +
                            ");\n        } else if (c == 2) {\n            res = (res - float(" +
                            B[2] +
                            ")) / float(" +
                            E[2] +
                            ");\n        }\n        setOutput(float(res));\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          origin: ["getValueFromTensorPosPacking"]
                        },
                        commonFuncConf: ["transferFromNHWCtoNCHW"]
                      },
                      imgFeed: {
                        mainFunc: function () {
                          return "\n    uniform vec2 u_scale;\n    void main(void) {\n        vec2 outCoord = vCoord.xy;\n        vec2 newPos = vCoord / u_scale;\n        vec2 startPos = (1.0 / u_scale - 1.0) / 2.0;\n        bool exceedX = u_scale.y == 1.0 && (newPos.x < startPos.x || newPos.x > (1.0 + startPos.x));\n        bool exceedY = u_scale.x == 1.0 && (newPos.y < startPos.y || newPos.y > (1.0 + startPos.y));\n        if (exceedX || exceedY) {\n            setPackedOutput(vec4(1.0, 1.0, 1.0, 1.0));\n            return;\n        }\n        newPos = newPos - startPos;\n        vec4 counter = TEXTURE2D(texture_origin, newPos);\n        setPackedOutput(counter);\n    }\n    "
                        },
                        textureFuncConf: { origin: [] }
                      },
                      box_coder: {
                        mainFunc: function (A, I) {
                          var g = "decode_center_size" === I.code_type
                          return (
                            "\n    // start函数\n    vec2 getPriorBoxData(int r, int g, int b, int m, int n) {\n        float start = getValueFromTensorPos_priorbox(r, g, b, m);\n        float end = getValueFromTensorPos_priorbox(r, g, b, n);\n        float len = end - start;\n        return vec2(start + len / 2.0, len);\n    }\n    vec2 getBoxVarData(int r, int g, int b, int m, int n) {\n        return vec2(\n            getValueFromTensorPos_priorboxvar(r, g, b, m),\n            getValueFromTensorPos_priorboxvar(r, g, b, n)\n        );\n    }\n    vec2 getTargetBoxData(int r, int g, int b, int m, int n) {\n        " +
                            (g
                              ? "\n            return vec2(\n                getValueFromTensorPos_targetbox(r, g, b, m),\n                getValueFromTensorPos_targetbox(r, g, b, n)\n            );\n        "
                              : "\n            float start = getValueFromTensorPos_targetbox(r, g, b, m);\n            float end = getValueFromTensorPos_targetbox(r, g, b, n);\n            float len = end - start;\n            return vec2(start + len / 2.0, len);\n        ") +
                            "\n    }\n\n    void main(void) {\n        ivec4 oPos = getOutputTensorPos();\n        int r = int(oPos.r);\n        int g = int(oPos.g);\n        int b = int(oPos.b);\n        int a = int(oPos.a);\n        // 输出坐标转换为输入坐标\n        float o = 0.0;\n\n        int m = 0;\n        int n = 0;\n        if (a == 0 || a == " +
                            (g ? 2 : 1) +
                            ") {\n            m = 0;\n            n = 2;\n        }\n        else {\n            m = 1;\n            n = 3;\n        }\n        vec2 priorbox = getPriorBoxData(r, g, b, m, n);\n        vec2 boxvar = getBoxVarData(r, g, b, m, n);\n        vec2 targetbox = getTargetBoxData(r, g, b, m, n);\n        float p1 = priorbox.r;\n        float p2 = priorbox.g;\n        float t1 = targetbox.r;\n        float t2 = targetbox.g;\n        float v1 = boxvar.r;\n        float v2 = boxvar.g;\n\n        " +
                            (g
                              ? "\n            float b1 = p2 * v1 * t1 + p1;\n            float b2 = exp(v2 * t2) * p2;\n            if (a == 0 || a == 1) {\n                o = b1 - b2 / 2.0 ;\n            }\n            else {\n                o = b1 + b2 / 2.0;\n            }\n        "
                              : "\n            if (a == 0 || a == 1) {\n                o = (t1 - p1) / p2 / v1;\n            }\n            else {\n                o = log(abs(t2 / p2)) / v2;\n            }\n        ") +
                            "\n        setOutput(float(o));\n    }\n    "
                          )
                        },
                        textureFuncConf: {
                          targetbox: ["getValueFromTensorPos"],
                          priorbox: ["getValueFromTensorPos"],
                          priorboxvar: ["getValueFromTensorPos"]
                        },
                        behaviors: []
                      },
                      density_prior_box: GA,
                      prior_box: FA
                    },
                    rA = new z()
                  !(function (A, I, g) {
                    ;(o.backend = A),
                      I && (o.backendInstance = I),
                      g &&
                        Object.keys(g).forEach(function (A) {
                          !(function (A, I) {
                            var g = A.conf,
                              C = A.params,
                              B = A.main,
                              Q = A.mainFunc,
                              E = A.textureFuncConf,
                              i = A.commonFuncConf,
                              D = A.behaviors,
                              n = void 0 === D ? [] : D,
                              t = o.backend + "_" + I
                            o.opRegistry.ops[t] ||
                              (o.opRegistry.ops[t] = {
                                name: I,
                                conf: g,
                                params: C,
                                main: B,
                                mainFunc: Q,
                                textureFuncConf: E,
                                commonFuncConf: i,
                                behaviors: n
                              })
                          })(g[A], A)
                        })
                  })("webgl", rA, RA)
                }
              },
              I = {}
            function g(C) {
              if (I[C]) return I[C].exports
              var B = (I[C] = { exports: {} })
              return A[C](B, B.exports, g), B.exports
            }
            return (
              (g.d = (A, I) => {
                for (var C in I)
                  g.o(I, C) &&
                    !g.o(A, C) &&
                    Object.defineProperty(A, C, { enumerable: !0, get: I[C] })
              }),
              (g.g = (function () {
                if ("object" == typeof globalThis) return globalThis
                try {
                  return this || new Function("return this")()
                } catch (A) {
                  if ("object" == typeof window) return window
                }
              })()),
              (g.o = (A, I) => Object.prototype.hasOwnProperty.call(A, I)),
              (g.r = (A) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(A, Symbol.toStringTag, {
                    value: "Module"
                  }),
                  Object.defineProperty(A, "__esModule", { value: !0 })
              }),
              g(646)
            )
          })()
        },
        459: function (A) {
          A.exports = (() => {
            var A = {
                911: (A, I) => {
                  "use strict"
                  var g = (function () {
                    if ("undefined" != typeof self) return self
                    if ("undefined" != typeof window) return window
                    if (void 0 !== g) return g
                    throw new Error("unable to locate global object")
                  })()
                  ;(A.exports = I = g.fetch),
                    g.fetch && (I.default = g.fetch.bind(g)),
                    (I.Headers = g.Headers),
                    (I.Request = g.Request),
                    (I.Response = g.Response)
                },
                994: (A, I, g) => {
                  "use strict"
                  g.r(I),
                    g.d(I, {
                      PaddlejsBackend: () => FA,
                      Runner: () => GA,
                      Transformer: () => U,
                      coreUtils: () => C,
                      env: () => t,
                      interfaces: () => B,
                      registerBackend: () => N,
                      registerOp: () => r
                    })
                  var C = {}
                  g.r(C),
                    g.d(C, {
                      AddItemToVars: () => o,
                      delUselessData: () => n,
                      findVarByKey: () => i,
                      getGlobalInterface: () => Q,
                      getOrMakeGlobalProperty: () => E,
                      traverseVars: () => D
                    })
                  var B = {}
                  function Q() {
                    var A
                    if ("undefined" != typeof window) A = window
                    else if (void 0 !== g.g) A = g.g
                    else {
                      if ("undefined" == typeof self)
                        throw new Error("Could not find a global object")
                      A = self
                    }
                    return A
                  }
                  function E(A, I) {
                    var g = Q()
                    return g[A] || (g[A] = I), g[A]
                  }
                  function i(A, I) {
                    return Array.isArray(A)
                      ? A.find(function (A) {
                          return A.name === I
                        })
                      : A[I]
                  }
                  function o(A, I) {
                    var g = Array.isArray(A),
                      C = Array.isArray(I) ? I : [I]
                    g
                      ? C.forEach(function (I) {
                          for (var g = null, C = 0; C < A.length; C++)
                            if (A[C].name === I.name) {
                              g = C
                              break
                            }
                          null !== g ? (A[g] = I) : A.push(I)
                        })
                      : C.forEach(function (I) {
                          A[I.name] = I
                        })
                  }
                  function D(A, I) {
                    Array.isArray(A)
                      ? A.forEach(function (A) {
                          I(A)
                        })
                      : Object.keys(A).forEach(function (g) {
                          I(A[g])
                        })
                  }
                  function n(A) {
                    if (((A.ops = null), A.vars instanceof Array))
                      for (var I = 0; I < A.vars.length; I++)
                        A.vars[I].data && delete A.vars[I].data
                    else
                      for (var g in A.vars)
                        A.vars[g].data && delete A.vars[g].data
                  }
                  g.r(B),
                    g.d(B, {
                      BufferType: () => h,
                      GraphType: () => F,
                      UniformType: () => G,
                      WasmMemoryType: () => e
                    })
                  const t = E(
                    "env",
                    new ((function () {
                      function A() {
                        this.ENV = {}
                      }
                      return (
                        (A.prototype.set = function (A, I) {
                          this.ENV[A] = I
                        }),
                        (A.prototype.get = function (A) {
                          return this.ENV[A]
                        }),
                        A
                      )
                    })())()
                  )
                  var a = function (A, I, g, C) {
                      return new (g || (g = Promise))(function (B, Q) {
                        function E(A) {
                          try {
                            o(C.next(A))
                          } catch (A) {
                            Q(A)
                          }
                        }
                        function i(A) {
                          try {
                            o(C.throw(A))
                          } catch (A) {
                            Q(A)
                          }
                        }
                        function o(A) {
                          var I
                          A.done
                            ? B(A.value)
                            : ((I = A.value),
                              I instanceof g
                                ? I
                                : new g(function (A) {
                                    A(I)
                                  })).then(E, i)
                        }
                        o((C = C.apply(A, I || [])).next())
                      })
                    },
                    s = function (A, I) {
                      var g,
                        C,
                        B,
                        Q,
                        E = {
                          label: 0,
                          sent: function () {
                            if (1 & B[0]) throw B[1]
                            return B[1]
                          },
                          trys: [],
                          ops: []
                        }
                      return (
                        (Q = { next: i(0), throw: i(1), return: i(2) }),
                        "function" == typeof Symbol &&
                          (Q[Symbol.iterator] = function () {
                            return this
                          }),
                        Q
                      )
                      function i(Q) {
                        return function (i) {
                          return (function (Q) {
                            if (g)
                              throw new TypeError(
                                "Generator is already executing."
                              )
                            for (; E; )
                              try {
                                if (
                                  ((g = 1),
                                  C &&
                                    (B =
                                      2 & Q[0]
                                        ? C.return
                                        : Q[0]
                                        ? C.throw ||
                                          ((B = C.return) && B.call(C), 0)
                                        : C.next) &&
                                    !(B = B.call(C, Q[1])).done)
                                )
                                  return B
                                switch (
                                  ((C = 0),
                                  B && (Q = [2 & Q[0], B.value]),
                                  Q[0])
                                ) {
                                  case 0:
                                  case 1:
                                    B = Q
                                    break
                                  case 4:
                                    return E.label++, { value: Q[1], done: !1 }
                                  case 5:
                                    E.label++, (C = Q[1]), (Q = [0])
                                    continue
                                  case 7:
                                    ;(Q = E.ops.pop()), E.trys.pop()
                                    continue
                                  default:
                                    if (
                                      !(
                                        (B =
                                          (B = E.trys).length > 0 &&
                                          B[B.length - 1]) ||
                                        (6 !== Q[0] && 2 !== Q[0])
                                      )
                                    ) {
                                      E = 0
                                      continue
                                    }
                                    if (
                                      3 === Q[0] &&
                                      (!B || (Q[1] > B[0] && Q[1] < B[3]))
                                    ) {
                                      E.label = Q[1]
                                      break
                                    }
                                    if (6 === Q[0] && E.label < B[1]) {
                                      ;(E.label = B[1]), (B = Q)
                                      break
                                    }
                                    if (B && E.label < B[2]) {
                                      ;(E.label = B[2]), E.ops.push(Q)
                                      break
                                    }
                                    B[2] && E.ops.pop(), E.trys.pop()
                                    continue
                                }
                                Q = I.call(A, E)
                              } catch (A) {
                                ;(Q = [6, A]), (C = 0)
                              } finally {
                                g = B = 0
                              }
                            if (5 & Q[0]) throw Q[1]
                            return { value: Q[0] ? Q[1] : void 0, done: !0 }
                          })([Q, i])
                        }
                      }
                    }
                  const w = (function () {
                    function A(A) {
                      ;(this.urlConf = { dir: "", main: "" }),
                        (this.separateChunk = !0),
                        (this.chunkNum = 1),
                        (this.dataType = "binary"),
                        (this.params = { type: "fetch" }),
                        (this.inNode = !1),
                        (this.isLocalFile = !1),
                        (this.realFetch = function () {
                          throw new Error("ERROR: empty fetch funciton")
                        })
                      var I = A,
                        g = "model.json"
                      if (A.endsWith(".json")) {
                        var C = A.lastIndexOf("/") + 1
                        ;(I = A.substr(0, C)), (g = A.substr(C))
                      } else "/" !== A.charAt(A.length - 1) && (I = A + "/")
                      ;(this.isLocalFile = 0 !== I.indexOf("http")),
                        (this.urlConf = {
                          dir: this.isLocalFile
                            ? "/" === I.charAt(0)
                              ? "" + I
                              : "/" + I
                            : I,
                          main: g
                        }),
                        (this.inNode = "node" === t.get("platform"))
                    }
                    return (
                      (A.prototype.load = function () {
                        return a(this, void 0, void 0, function () {
                          var I
                          return s(this, function (g) {
                            switch (g.label) {
                              case 0:
                                return [4, this.fetchModel()]
                              case 1:
                                return (
                                  (I = g.sent()),
                                  (this.separateChunk =
                                    !!I.chunkNum && I.chunkNum > 0),
                                  (this.chunkNum = this.separateChunk
                                    ? I.chunkNum
                                    : 0),
                                  this.separateChunk
                                    ? "binary" !== this.dataType
                                      ? [3, 3]
                                      : [
                                          4,
                                          this.fetchChunks().then(function (g) {
                                            return A.allocateParamsVar(
                                              I.vars,
                                              g
                                            )
                                          })
                                        ]
                                    : [3, 3]
                                )
                              case 2:
                                g.sent(), (g.label = 3)
                              case 3:
                                return [2, I]
                            }
                          })
                        })
                      }),
                      (A.prototype.fetchOneChunk = function (A) {
                        return a(this, void 0, void 0, function () {
                          return s(this, function (I) {
                            switch (I.label) {
                              case 0:
                                return t.get("fetch")
                                  ? [
                                      4,
                                      t.get("fetch")(A, { type: "arrayBuffer" })
                                    ]
                                  : [3, 2]
                              case 1:
                                return [2, I.sent()]
                              case 2:
                                return [
                                  2,
                                  this.fetch(A).then(function (A) {
                                    return A.arrayBuffer()
                                  })
                                ]
                            }
                          })
                        })
                      }),
                      (A.prototype.fetchJson = function (A) {
                        return this.fetch(A).then(function (A) {
                          return A.json()
                        })
                      }),
                      (A.prototype.getFileName = function (A) {
                        return "chunk_" + A + ".dat"
                      }),
                      (A.prototype.fetchChunks = function () {
                        return a(this, void 0, void 0, function () {
                          var A, I, g
                          return s(this, function (C) {
                            for (A = this.chunkNum, I = [], g = 1; g <= A; g++)
                              I.push(
                                this.fetchOneChunk(
                                  this.urlConf.dir + this.getFileName(g)
                                )
                              )
                            return [
                              2,
                              Promise.all(I).then(function (A) {
                                var I,
                                  g = 0,
                                  C = []
                                A.forEach(function (A) {
                                  ;(I = new Float32Array(A)),
                                    C.push(I),
                                    (g += I.length)
                                })
                                var B = new Float32Array(g),
                                  Q = 0
                                return (
                                  C.forEach(function (A) {
                                    A.forEach(function (A) {
                                      ;(B[Q] = A), (Q += 1)
                                    })
                                  }),
                                  B
                                )
                              })
                            ]
                          })
                        })
                      }),
                      (A.allocateParamsVar = function (A, I) {
                        var g,
                          C = 0
                        D(A, function (A) {
                          ;(g = A.shape.reduce(function (A, I) {
                            return A * I
                          })),
                            A.persistable &&
                              ((A.data = I.slice(C, C + g)), (C += g))
                        })
                      }),
                      (A.prototype.fetch = function (A, I) {
                        if (t.get("fetch")) return t.get("fetch")(A, I || {})
                        var C = (I || this.params).method || "get",
                          B = new (this.inNode ? g(911).Headers : Headers)()
                        return (
                          (this.realFetch = this.inNode
                            ? this.isLocalFile
                              ? this.fetchLocalFile
                              : g(911)
                            : window.fetch.bind(window)),
                          this.realFetch(A, { method: C, headers: B })
                        )
                      }),
                      (A.prototype.fetchLocalFile = function (A) {
                        var I = g(993)
                        return new Promise(function (g, C) {
                          try {
                            g(I.readFileSync(A, "utf8"))
                          } catch (A) {
                            C(A)
                          }
                        })
                      }),
                      (A.prototype.fetchModel = function () {
                        var A = this,
                          I = this.params,
                          g = this.urlConf.dir + this.urlConf.main,
                          C = null
                        return (
                          "fetch" === I.type &&
                            (C = new Promise(function (C, B) {
                              A.fetch(g, I)
                                .then(function (I) {
                                  return t.get("fetch")
                                    ? I
                                    : A.isLocalFile && A.inNode
                                    ? JSON.parse(I)
                                    : I.json()
                                })
                                .then(function (A) {
                                  return C(A)
                                })
                                .then(function (A) {
                                  return B(A)
                                })
                            })),
                          C
                        )
                      }),
                      A
                    )
                  })()
                  var h, e, G, F
                  !(function (A) {
                    ;(A.FrameBuffer = "frameBuffer"),
                      (A.ColorBuffer = "colorBuffer")
                  })(h || (h = {})),
                    (function (A) {
                      ;(A.memory100 = "100"),
                        (A.memory200 = "200"),
                        (A.memory300 = "300"),
                        (A.memory400 = "400"),
                        (A.memory500 = "500"),
                        (A.memory600 = "600"),
                        (A.memory700 = "700"),
                        (A.memory800 = "800"),
                        (A.memory900 = "900")
                    })(e || (e = {})),
                    (function (A) {
                      ;(A.uniform1f = "1f"),
                        (A.uniform1fv = "1fv"),
                        (A.uniform1i = "1i"),
                        (A.uniform1iv = "1iv"),
                        (A.uniform2f = "2f"),
                        (A.uniform2fv = "2fv"),
                        (A.uniform2i = "2i"),
                        (A.uniform2iv = "2iv"),
                        (A.uniform3f = "3f"),
                        (A.uniform3fv = "3fv"),
                        (A.uniform3i = "3i"),
                        (A.uniform3iv = "3iv"),
                        (A.uniform4f = "4f"),
                        (A.uniform4fv = "4fv"),
                        (A.uniform4i = "4i"),
                        (A.uniform4iv = "4iv")
                    })(G || (G = {})),
                    (function (A) {
                      ;(A.SingleOutput = "single"),
                        (A.MultipleOutput = "multiple"),
                        (A.MultipleInput = "multipleInput")
                    })(F || (F = {}))
                  var R = {
                    opRegistry: { ops: {} },
                    backend: "",
                    backendInstance: null
                  }
                  function r(A, I) {
                    var g = A.conf,
                      C = A.params,
                      B = A.main,
                      Q = A.mainFunc,
                      E = A.textureFuncConf,
                      i = A.commonFuncConf,
                      o = A.behaviors,
                      D = void 0 === o ? [] : o,
                      n = R.backend + "_" + I
                    R.opRegistry.ops[n] ||
                      (R.opRegistry.ops[n] = {
                        name: I,
                        conf: g,
                        params: C,
                        main: B,
                        mainFunc: Q,
                        textureFuncConf: E,
                        commonFuncConf: i,
                        behaviors: D
                      })
                  }
                  function N(A, I, g) {
                    A && (R.backend = A),
                      I && (R.backendInstance = I),
                      g &&
                        Object.keys(g).forEach(function (A) {
                          r(g[A], A)
                        })
                  }
                  R = E("GLOBALS", R)
                  var y = Q()
                  y.ImageBitmap || (y.ImageBitmap = function () {})
                  const c = (function () {
                      function A(A, I) {
                        ;(this.id = ""),
                          (this.type = ""),
                          (this.inputs = {}),
                          (this.outputs = {}),
                          (this.attrs = {}),
                          (this.subAttrs = []),
                          (this.next = ""),
                          (this.opData = null),
                          (this.isPacked = !1),
                          (this.bufferType = h.FrameBuffer),
                          (this.uniform = null)
                        var g = A.inputs,
                          C = A.outputs,
                          B = A.attrs,
                          Q = void 0 === B ? {} : B,
                          E = A.type,
                          i = A.isPacked,
                          o = void 0 !== i && i,
                          D = A.bufferType,
                          n = void 0 === D ? h.FrameBuffer : D,
                          t = A.uniform,
                          a = void 0 === t ? null : t
                        ;(this.id = E + "_" + +new Date() + "_" + I),
                          (this.inputs = g),
                          (this.outputs = C),
                          (this.attrs = Q),
                          (this.subAttrs = A["sub-attrs"] || []),
                          (this.uniform = a),
                          (this.type = E),
                          (this.isPacked = o),
                          (this.bufferType = n),
                          (this.next = ""),
                          (this.opData = null)
                      }
                      return (
                        Object.defineProperty(A.prototype, "inputsName", {
                          get: function () {
                            var A = this,
                              I = []
                            return (
                              Object.keys(this.inputs).forEach(function (g) {
                                I.push(A.inputs[g][0])
                              }),
                              I
                            )
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(A.prototype, "outputsName", {
                          get: function () {
                            return (
                              this.outputs.Output ||
                              this.outputs.Out ||
                              this.outputs.Y
                            )
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        (A.prototype.execute = function (A) {
                          R.backendInstance.runProgram(this.opData, A)
                        }),
                        A
                      )
                    })(),
                    U = function (A) {
                      this.name = A
                    }
                  var S,
                    M =
                      ((S = function (A, I) {
                        return (S =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (A, I) {
                              A.__proto__ = I
                            }) ||
                          function (A, I) {
                            for (var g in I)
                              Object.prototype.hasOwnProperty.call(I, g) &&
                                (A[g] = I[g])
                          })(A, I)
                      }),
                      function (A, I) {
                        function g() {
                          this.constructor = A
                        }
                        S(A, I),
                          (A.prototype =
                            null === I
                              ? Object.create(I)
                              : ((g.prototype = I.prototype), new g()))
                      }),
                    k = {
                      conv2d: function (A, I) {
                        var g = A.attrs.strides,
                          C = A.inputs.Input[0],
                          B = A.inputs.Filter[0]
                        if ("image" === C) return !1
                        var Q = i(I, C).shape,
                          E = i(I, B).shape
                        return (
                          !g.find(function (A) {
                            return A > 1
                          }) &&
                          Q[Q.length - 1 - 2] % 4 == 0 &&
                          4 === E.length &&
                          E[0] % 4 == 0 &&
                          E[1] % 4 == 0
                        )
                      }
                    }
                  function J(A) {
                    return {
                      type: "packed_2_unpacked",
                      attrs: {},
                      inputs: { Input: [A.inputName] },
                      outputs: { Output: [A.outputName] }
                    }
                  }
                  function l(A) {
                    return {
                      type: "unpacked_2_packed",
                      attrs: {},
                      inputs: { Input: [A.inputName] },
                      outputs: { Output: [A.outputName] }
                    }
                  }
                  function L(A, I) {
                    Object.keys(A.inputs).forEach(function (I) {
                      A.inputs[I] = [A.inputs[I] + "_packed"]
                    }),
                      Object.keys(A.outputs).forEach(function (I) {
                        A.outputs[I] = [A.outputs[I] + "_packed"]
                      }),
                      (A.type = A.type + "_packing"),
                      (A.id = A.type + "_" + +new Date() + "_" + I.length),
                      (A.isPacked = !0)
                  }
                  const Y = (function (A) {
                    function I() {
                      return A.call(this, "TexturePacking") || this
                    }
                    return (
                      M(I, A),
                      (I.prototype.transform = function () {
                        for (var A = [], I = 0; I < arguments.length; I++)
                          A[I] = arguments[I]
                        if (
                          "webgl" === R.backend &&
                          t.get("webgl_pack_channel")
                        ) {
                          var g = A[0],
                            C = A[1],
                            B = A[2],
                            Q =
                              "depthwise_conv2d" === g.type ? "conv2d" : g.type,
                            E = k[Q]
                          if (E && E(g, C)) {
                            var i = g.inputs,
                              o = g.outputs,
                              D = i.Input[0],
                              n = o.Output ? o.Output[0] : o.Out[0],
                              a = l({
                                inputName: D,
                                outputName: D + "_packed"
                              }),
                              s = B.length
                            B.push(new c(a, s)), L(g, B)
                            var w = J({
                                inputName: n + "_packed",
                                outputName: n
                              }),
                              h = B.length + 1
                            B.push(new c(w, h))
                          }
                        }
                      }),
                      I
                    )
                  })(U)
                  var K = (function () {
                    var A = function (I, g) {
                      return (A =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (A, I) {
                            A.__proto__ = I
                          }) ||
                        function (A, I) {
                          for (var g in I)
                            Object.prototype.hasOwnProperty.call(I, g) &&
                              (A[g] = I[g])
                        })(I, g)
                    }
                    return function (I, g) {
                      function C() {
                        this.constructor = I
                      }
                      A(I, g),
                        (I.prototype =
                          null === g
                            ? Object.create(g)
                            : ((C.prototype = g.prototype), new C()))
                    }
                  })()
                  const d = (function (A) {
                    function I() {
                      return A.call(this, "FormatInputsX") || this
                    }
                    return (
                      K(I, A),
                      (I.prototype.transform = function () {
                        for (var A = [], I = 0; I < arguments.length; I++)
                          A[I] = arguments[I]
                        var g = A[0]
                        if (
                          [
                            "concat",
                            "connect",
                            "fc",
                            "rnn_origin",
                            "rnn_matmul"
                          ].includes(g.type)
                        ) {
                          var C = g.inputs
                          if (
                            ("rnn_origin" === g.type ||
                              "rnn_matmul" === g.type) &&
                            C.WeightList.length > 0
                          )
                            C.WeightList.forEach(function (A, I) {
                              C["weightlist_" + I] = [A]
                            })
                          else {
                            var B = C.X || C.Input
                            B.length > 1 &&
                              (B.forEach(function (A, I) {
                                C["origin" + (I > 0 ? "_" + I : "")] = [A]
                              }),
                              delete C.X,
                              delete C.Input)
                          }
                        }
                      }),
                      I
                    )
                  })(U)
                  var q = (function () {
                      var A = function (I, g) {
                        return (A =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (A, I) {
                              A.__proto__ = I
                            }) ||
                          function (A, I) {
                            for (var g in I)
                              Object.prototype.hasOwnProperty.call(I, g) &&
                                (A[g] = I[g])
                          })(I, g)
                      }
                      return function (I, g) {
                        function C() {
                          this.constructor = I
                        }
                        A(I, g),
                          (I.prototype =
                            null === g
                              ? Object.create(g)
                              : ((C.prototype = g.prototype), new C()))
                      }
                    })(),
                    f = function () {
                      for (var A = 0, I = 0, g = arguments.length; I < g; I++)
                        A += arguments[I].length
                      var C = Array(A),
                        B = 0
                      for (I = 0; I < g; I++)
                        for (
                          var Q = arguments[I], E = 0, i = Q.length;
                          E < i;
                          E++, B++
                        )
                          C[B] = Q[E]
                      return C
                    }
                  function H(A, I) {
                    var g = i(I, A)
                    return g ? g.shape : []
                  }
                  function u(A, I, g, C) {
                    for (var B = f(I), Q = 0, E = 0, i = A; E < i.length; E++)
                      Q += H(i[E], C)[g]
                    return (
                      (B[g] = Q), { name: A[A.length - 1] + "_out", shape: B }
                    )
                  }
                  const p = (function (A) {
                    function I() {
                      return A.call(this, "splitOp") || this
                    }
                    return (
                      q(I, A),
                      (I.prototype.transform = function () {
                        for (var A, I = [], g = 0; g < arguments.length; g++)
                          I[g] = arguments[g]
                        for (
                          var C = I[0], B = I[1], Q = 0, E = C.length;
                          Q < E;
                          Q++
                        ) {
                          var i = C[Q]
                          if (
                            "concat" === i.type &&
                            (null === (A = i.inputs) || void 0 === A
                              ? void 0
                              : A.X) &&
                            !(i.inputs.X.length <= 4)
                          ) {
                            var D = i.attrs,
                              n = i.inputs,
                              t = i.outputs,
                              a = n.X,
                              s = a.length,
                              w = Math.ceil((s - 4) / 3) + 1,
                              h = t.Out[0],
                              e = H(h, B),
                              G = D.axis || 0
                            G = G > -1 ? G : e.length + G
                            for (
                              var F = [],
                                R = [],
                                r = a.slice(0, 4),
                                N = void 0,
                                y = 0;
                              y < w;
                              y++
                            ) {
                              var c =
                                  0 === y
                                    ? r
                                    : a.slice(3 * y + 1, 3 * (y + 1) + 1),
                                U = u(c, e, G, B)
                              0 !== y && c.splice(0, 0, N.name),
                                (U.shape[G] += N ? N.shape[G] : 0)
                              var S = { Out: [U.name] }
                              R.push({
                                attrs: D,
                                inputs: { X: c },
                                outputs: S,
                                type: "concat"
                              }),
                                F.push(U),
                                (N = U)
                            }
                            ;(R[w - 1].outputs.Out = [h]),
                              C.splice.apply(C, f([Q, 1], R)),
                              o(B, F)
                          }
                        }
                      }),
                      I
                    )
                  })(U)
                  var m = function () {
                    for (var A = 0, I = 0, g = arguments.length; I < g; I++)
                      A += arguments[I].length
                    var C = Array(A),
                      B = 0
                    for (I = 0; I < g; I++)
                      for (
                        var Q = arguments[I], E = 0, i = Q.length;
                        E < i;
                        E++, B++
                      )
                        C[B] = Q[E]
                    return C
                  }
                  function x(A) {
                    if (A.length < 4) {
                      for (var I = [], g = 0; g < 4 - A.length; g++) I.push(1)
                      return I.concat(A)
                    }
                    return m(A)
                  }
                  function V(A) {
                    return A.reduce(function (A, I) {
                      return A + I
                    })
                  }
                  function T(A, I) {
                    var g = A.length
                    return 4 - g + (I > -1 ? I : g + I)
                  }
                  function b(A, I) {
                    for (
                      var g = I[0],
                        C = I[1],
                        B = I[2],
                        Q = I[3],
                        E = B * Q,
                        i = C * B * Q,
                        o = [],
                        D = 0;
                      D < g;
                      D++
                    )
                      for (var n = 0; n < Q; n++)
                        for (var t = 0; t < C; t++)
                          for (var a = 0; a < B; a++)
                            o.push(A[D * i + t * E + a * Q + n])
                    return new Float32Array(o)
                  }
                  function X(A) {
                    for (
                      var I,
                        g = A.data,
                        C = A.shape,
                        B = m(C).reverse(),
                        Q = 0,
                        E = B.length - 1;
                      Q < E;
                      Q++
                    )
                      I = P(I || g, B[Q])
                    return I
                  }
                  function P(A, I) {
                    for (var g = [], C = 0, B = A.length; C < B; C += I)
                      g.push(A.slice(C, C + I))
                    return g
                  }
                  var W = (function () {
                      var A = function (I, g) {
                        return (A =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (A, I) {
                              A.__proto__ = I
                            }) ||
                          function (A, I) {
                            for (var g in I)
                              Object.prototype.hasOwnProperty.call(I, g) &&
                                (A[g] = I[g])
                          })(I, g)
                      }
                      return function (I, g) {
                        function C() {
                          this.constructor = I
                        }
                        A(I, g),
                          (I.prototype =
                            null === g
                              ? Object.create(g)
                              : ((C.prototype = g.prototype), new C()))
                      }
                    })(),
                    O = "fetch_pack"
                  const Z = (function (A) {
                    function I() {
                      return A.call(this, "PackOut") || this
                    }
                    return (
                      W(I, A),
                      (I.prototype.transform = function () {
                        for (var A = [], I = 0; I < arguments.length; I++)
                          A[I] = arguments[I]
                        if (t.get("webgl_pack_output")) {
                          var g = A[0],
                            C = A[1],
                            B = g.find(function (A) {
                              return "fetch" === A.type
                            }),
                            Q = B.inputs.X[0],
                            E = x(i(C, Q).shape),
                            D = E[0],
                            n = E[1],
                            a = E[2],
                            s = E[3],
                            w = {
                              attrs: {},
                              inputs: { X: [Q] },
                              outputs: { Y: [O] },
                              type: "pack_out"
                            },
                            h = n * s,
                            e = Math.ceil((D * a) / 4),
                            G = {
                              name: O,
                              shape: [1, 1, e, h],
                              persistable: !1
                            }
                          ;(B.inputs.X = [O]),
                            (B.attrs.origin_shape = [D, n, a, s]),
                            g.push(w),
                            o(C, [G])
                        }
                      }),
                      I
                    )
                  })(U)
                  var v = (function () {
                      var A = function (I, g) {
                        return (A =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (A, I) {
                              A.__proto__ = I
                            }) ||
                          function (A, I) {
                            for (var g in I)
                              Object.prototype.hasOwnProperty.call(I, g) &&
                                (A[g] = I[g])
                          })(I, g)
                      }
                      return function (I, g) {
                        function C() {
                          this.constructor = I
                        }
                        A(I, g),
                          (I.prototype =
                            null === g
                              ? Object.create(g)
                              : ((C.prototype = g.prototype), new C()))
                      }
                    })(),
                    j = "img_pre_processed",
                    z = "img_origin"
                  const _ = (function (A) {
                      function I() {
                        return A.call(this, "FeedProcess") || this
                      }
                      return (
                        v(I, A),
                        (I.prototype.transform = function () {
                          for (var A = [], I = 0; I < arguments.length; I++)
                            A[I] = arguments[I]
                          var g = A[0],
                            C = A[1],
                            B = A[2]
                          if (
                            B.webglFeedProcess ||
                            t.get("webgl_gpu_pipeline")
                          ) {
                            var Q = B.mean,
                              E = void 0 === Q ? [0, 0, 0] : Q,
                              D = B.std,
                              n = void 0 === D ? [1, 1, 1] : D,
                              a = B.scale,
                              s = void 0 === a ? [1, 1] : a,
                              w = B.pos,
                              h = void 0 === w ? [0, 0] : w,
                              e = B.feedShape,
                              F = i(C, "image"),
                              R = F.shape,
                              r = R[2],
                              N = R[3]
                            F.shape = [1, 1, r, N]
                            var y = Object.assign({}, F)
                            ;(y.name = j),
                              (y.shape = [1, 3, e.fh, e.fw]),
                              (y.persistable = !1),
                              delete y.data
                            var c = Object.assign({}, F)
                            ;(c.name = z),
                              (c.shape = [1, 1, e.fh, e.fw]),
                              (c.persistable = !1),
                              delete c.data,
                              o(C, [c, y])
                            var U = g.find(function (A) {
                                var I = A.inputs
                                return Object.keys(I).find(function (A) {
                                  return "image" === I[A][0]
                                })
                              }),
                              S = U.inputs
                            Object.keys(S).forEach(function (A) {
                              "image" === S[A][0] && (S[A][0] = j)
                            })
                            var M = {
                                attrs: { mean: E, std: n },
                                inputs: { X: [z] },
                                outputs: { Y: [j] },
                                type: "feedPost"
                              },
                              k = {
                                attrs: { mean: E, std: n, scale: s, pos: h },
                                inputs: { X: ["image"] },
                                outputs: { Y: [z] },
                                type: "imgFeed",
                                uniform: {
                                  u_scale: {
                                    type: G.uniform2fv,
                                    value: [1, 1]
                                  },
                                  u_pos: { type: G.uniform2fv, value: [0, 0] }
                                },
                                isPacked: !0
                              }
                            g.splice(1, 0, M), g.splice(1, 0, k)
                          }
                        }),
                        I
                      )
                    })(U),
                    $ = {
                      preTransforms: [new p(), new Z(), new _()],
                      transforms: [new d(), new Y()],
                      postTransforms: []
                    }
                  var AA,
                    IA = function () {
                      for (var A = 0, I = 0, g = arguments.length; I < g; I++)
                        A += arguments[I].length
                      var C = Array(A),
                        B = 0
                      for (I = 0; I < g; I++)
                        for (
                          var Q = arguments[I], E = 0, i = Q.length;
                          E < i;
                          E++, B++
                        )
                          C[B] = Q[E]
                      return C
                    }
                  function gA(A, I) {
                    return (A && A[I]) || []
                  }
                  !(function (A) {
                    ;(A.PreTransforms = "preTransforms"),
                      (A.Transforms = "transforms"),
                      (A.PostTransforms = "postTransforms")
                  })(AA || (AA = {}))
                  const CA = (function () {
                      function A(A, I) {
                        ;(this.weightMap = []),
                          (this.ops = []),
                          (this.vars = []),
                          (this.config = {}),
                          (this.type = F.SingleOutput),
                          (this.plugins = null),
                          (this.ops = A.ops),
                          (this.vars = A.vars),
                          (this.type = I.type || this.type),
                          (this.plugins = I.plugins),
                          (this.config = I),
                          A.feedShape && (this.config.feedShape = A.feedShape)
                      }
                      return (
                        (A.prototype.createGraph = function () {
                          return (
                            this.preTransforms(),
                            this.createOpsMap(),
                            this.arrangeMap(),
                            this.postTransforms(),
                            this.weightMap
                          )
                        }),
                        (A.prototype.preTransforms = function () {
                          var A = this
                          IA(
                            $.preTransforms,
                            gA(this.plugins, AA.PreTransforms)
                          ).forEach(function (I) {
                            I.transform(A.ops, A.vars, A.config)
                          })
                        }),
                        (A.prototype.transforms = function (A, I) {
                          var g = this
                          IA(
                            $.transforms,
                            gA(this.plugins, AA.Transforms)
                          ).forEach(function (C) {
                            C.transform(A, g.vars, I)
                          })
                        }),
                        (A.prototype.postTransforms = function () {
                          var A = this
                          IA(
                            $.postTransforms,
                            gA(this.plugins, AA.PostTransforms)
                          ).forEach(function (I) {
                            I.transform(A.weightMap, A.vars, A.type)
                          })
                        }),
                        (A.prototype.createOpsMap = function () {
                          for (var A = [], I = 0; I < this.ops.length; I++) {
                            var g = A.length,
                              C = this.ops[I],
                              B = new c(C, g)
                            this.transforms(B, A), A.push(B)
                          }
                          this.weightMap = A
                        }),
                        (A.prototype.arrangeMap = function () {
                          for (
                            var A = {},
                              I = [],
                              g = {},
                              C = function (C) {
                                for (
                                  var Q = B.weightMap[C], E = 0;
                                  E < Q.outputsName.length;
                                  E++
                                ) {
                                  var i = Q.outputsName[E]
                                  A[i] = !0
                                }
                                ;(I[C] = 0),
                                  (g[Q.id] = C),
                                  Q.inputsName.length > 1
                                    ? Q.inputsName.forEach(function (g) {
                                        !0 === A[g] && I[C]++
                                      })
                                    : (I[C] = Q.inputsName.length)
                              },
                              B = this,
                              Q = 0;
                            Q < this.weightMap.length;
                            Q++
                          )
                            C(Q)
                          this.topoSort(this.weightMap, I, g)
                        }),
                        (A.prototype.topoSort = function (A, I, g) {
                          var C = []
                          C.push(A[0])
                          for (
                            var B = A.slice(0), Q = null, E = A[0];
                            C.length > 0;

                          ) {
                            null != Q && (A[g[Q.id]].next = E.id),
                              (Q = E),
                              (E = C.pop() || {})
                            for (var i = 0; i < E.outputsName.length; i++)
                              for (var o = 0; o < B.length; o++)
                                for (var D = 0; D < B[o].inputsName.length; D++)
                                  if (
                                    B[o].inputsName[D] === E.outputsName[i] &&
                                    (I[g[B[o].id]]--, 0 === I[g[B[o].id]])
                                  ) {
                                    C.push(A[g[B[o].id]]), B.splice(o, 1), o--
                                    break
                                  }
                          }
                        }),
                        (A.prototype.getFeedExecutor = function () {
                          return this.weightMap.find(function (A) {
                            return "feed" === A.type
                          })
                        }),
                        (A.prototype.getFetchExecutor = function () {
                          return this.weightMap.find(function (A) {
                            return "fetch" === A.type
                          })
                        }),
                        (A.prototype.getExecutorById = function (A) {
                          return this.weightMap.find(function (I) {
                            return I.id === A
                          })
                        }),
                        A
                      )
                    })(),
                    BA = (function () {
                      function A(A) {
                        ;(this.opts = {}),
                          (this.isPacked = !1),
                          (this.name = ""),
                          (this.tensorId = ""),
                          (this.total = 1),
                          (this.shape = []),
                          (this.unformattedShapeLength = 0),
                          (this.shape_texture = []),
                          (this.exceedMax = !1),
                          (this.data = null),
                          (this.persistable = !1),
                          (this.interpType = "NEAREST"),
                          (this.dataLayout = ""),
                          (this.runtime = 0),
                          (this.binding = 0)
                        var I = A.isPacked,
                          g = void 0 !== I && I,
                          C = A.name,
                          B = A.runtime,
                          Q = void 0 === B ? 0 : B,
                          E = A.persistable,
                          i = void 0 !== E && E,
                          o = A.type,
                          D = A.dataLayout,
                          n = A.interpType,
                          t = void 0 === n ? "NEAREST" : n,
                          a = A.shape,
                          s = A.data,
                          w = A.binding,
                          h = void 0 === w ? 0 : w
                        ;(this.opts = A),
                          (this.isPacked = g),
                          (this.name = C),
                          (this.runtime = Q),
                          (this.binding = h),
                          (this.persistable = i),
                          (this.interpType = t),
                          (this.tensorId = o),
                          (this.dataLayout = D),
                          (this.unformattedShapeLength = a.length),
                          (this.shape = x(a)),
                          (this.total = this.shape.reduce(function (A, I) {
                            return A * I
                          })),
                          A.noLayout ||
                            (s &&
                              s.length &&
                              ((this.data = (function (A, I, g, C) {
                                if ("nhwc" === I) {
                                  var B = g[0],
                                    Q = g[1],
                                    E = b(A, [B, g[2], g[3], Q * (C ? 4 : 1)])
                                  return new Float32Array(E)
                                }
                                return new Float32Array(A)
                              })(
                                s,
                                this.dataLayout,
                                this.shape,
                                this.isPacked
                              )),
                              (A.data = null)))
                      }
                      return (
                        Object.defineProperty(A.prototype, "width_texture", {
                          get: function () {
                            var A = this.shape_texture.length
                            return this.shape_texture[A - 1] || 1
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(A.prototype, "height_texture", {
                          get: function () {
                            var A = this.shape_texture.length
                            return this.shape_texture[A - 2] || 1
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(A.prototype, "width_shape", {
                          get: function () {
                            var A = this.shape.length
                            return this.shape[A - 1]
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(A.prototype, "height_shape", {
                          get: function () {
                            var A = this.shape.length
                            return this.shape[A - 2]
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(A.prototype, "channel", {
                          get: function () {
                            var A = this.shape.length
                            return this.shape[A - 3]
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(A.prototype, "length_shape", {
                          get: function () {
                            return this.shape.length || 0
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(
                          A.prototype,
                          "length_unformatted_shape",
                          {
                            get: function () {
                              return this.unformattedShapeLength || 0
                            },
                            enumerable: !1,
                            configurable: !0
                          }
                        ),
                        Object.defineProperty(A.prototype, "total_shape", {
                          get: function () {
                            return this.total
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(A.prototype, "numbers_shape", {
                          get: function () {
                            for (
                              var A = [], I = this.shape.length, g = 0;
                              g < I - 1;
                              g++
                            ) {
                              var C = this.shape
                                .slice(g + 1)
                                .reduce(function (A, I) {
                                  return A * I
                                })
                              A.push(C)
                            }
                            return A.push(1), A
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        A
                      )
                    })(),
                    QA = {
                      adaptPaddings: function () {
                        for (var A in this.processedAttrs)
                          if (
                            Object.prototype.hasOwnProperty.call(
                              this.processedAttrs,
                              A
                            ) &&
                            "paddings" === A
                          ) {
                            var I = this.processedAttrs[A],
                              g = I[0],
                              C = I[1]
                            return void (
                              0 === g &&
                              1 === C &&
                              (this.processedAttrs[A][1] = 0)
                            )
                          }
                      },
                      setAdaptive: function () {
                        this.processedAttrs.adaptive &&
                          2 === this.processedAttrs.ksize.length &&
                          1 === this.processedAttrs.ksize[0] &&
                          1 === this.processedAttrs.ksize[1] &&
                          ((this.processedAttrs.adaptive = !1),
                          (this.processedAttrs.global_pooling = !0))
                      },
                      isGlobalPooling: function () {
                        var A,
                          I = this.tensorDataMap.origin,
                          g =
                            (null === (A = null == I ? void 0 : I.shape) ||
                            void 0 === A
                              ? void 0
                              : A.length) || 0
                        g > 2 &&
                          this.processedAttrs.global_pooling &&
                          (this.processedAttrs.ksize = [
                            I.shape[g - 2],
                            I.shape[g - 1]
                          ])
                      },
                      setPacked: function () {
                        var A = this.processedAttrs.ispacked
                        this.tensorDataMap.origin &&
                          A &&
                          this.name.indexOf("pool") > -1 &&
                          (this.name += "_winograd")
                      },
                      mergeAttrs: function () {
                        this.processedAttrs = this.subAttrs.reduce(function (
                          A,
                          I
                        ) {
                          return Object.assign(A, I)
                        },
                        {})
                      },
                      isApplySeparableConv: function () {
                        if (!this.isPackedOp) {
                          var A = this.processedAttrs.groups,
                            I = this.tensorDataMap.filter
                          if (
                            ("depthwise_conv2d" === this.name &&
                              (this.name = "conv2d"),
                            I)
                          ) {
                            var g = I.shape,
                              C = g[0],
                              B = g[1]
                            C === A && 1 === B && (this.name += "_depthwise")
                          }
                        }
                      },
                      batchComputeConv2d: function () {
                        var A = this.tensorDataMap.filter.shape[1]
                        ;(this.processedAttrs.filter_nearest_vec4 =
                          4 * Math.floor(A / 4)),
                          (this.processedAttrs.filter_remainder_vec4 = A % 4)
                      },
                      processBias: function () {
                        var A = this.tensorDataMap.bias
                        if (A && this.isPackedOp) {
                          A.packed = !0
                          var I = A.shape,
                            g = [I[I.length - 1] / 4, 1, 1]
                          A.shape = g
                        }
                      },
                      isMax: function () {
                        var A =
                          "max" === this.processedAttrs.pooling_type ? 1 : 0
                        ;(this.processedAttrs.pooling_type = A),
                          1 === A && (this.name += "_max")
                      },
                      transToPrelu: function () {
                        ;(this.processedAttrs.multi_value = "0.0"),
                          (this.processedAttrs.active_function = "prelu")
                      },
                      transToRelu6: function () {
                        ;(this.processedAttrs.multi_value =
                          this.processedAttrs.threshold),
                          (this.processedAttrs.active_function = "relu6")
                      },
                      transToHardSigmoid: function () {
                        ;(this.processedAttrs.multi_value =
                          this.processedAttrs.slope || 0.2),
                          (this.processedAttrs.bias_value =
                            this.processedAttrs.offset || 0.5),
                          (this.processedAttrs.active_function = "hardSigmoid")
                      },
                      transToLeakyrelu: function () {
                        ;(this.processedAttrs.multi_value =
                          this.processedAttrs.alpha),
                          (this.processedAttrs.active_function = "leakyRelu"),
                          (this.name = "relu")
                      },
                      transToPow: function () {
                        ;(this.processedAttrs.multi_value =
                          this.processedAttrs.factor || 2),
                          (this.processedAttrs.active_function = "pow_func"),
                          (this.name = "pow")
                      },
                      transToSigmoid: function () {
                        this.processedAttrs.active_function = "sigmoid"
                      },
                      transToSqrt: function () {
                        this.processedAttrs.active_function = "sqrt"
                      },
                      transToTanh: function () {
                        this.processedAttrs.active_function = "tanh_func"
                      },
                      transToScale: function () {
                        var A = this.processedAttrs.scale
                        ;(this.processedAttrs.multi_value =
                          void 0 !== A ? A : 1),
                          (this.processedAttrs.bias_value =
                            this.processedAttrs.bias || 0)
                        var I = this.processedAttrs.bias_after_scale
                        this.processedAttrs.active_function =
                          I || void 0 === I ? "scale" : "scaleWidthBias"
                      },
                      setActiveFunc: function () {
                        var A = this.name.replace("conv2d-elementwise_add-", "")
                        ;(this.processedAttrs = Object.assign(
                          {
                            active_function: "scale",
                            multi_value: "1.0",
                            bias_value: "0.0",
                            fuse_relu: !1
                          },
                          this.processedAttrs
                        )),
                          "leaky_relu" === A &&
                            ((this.processedAttrs.multi_value =
                              this.processedAttrs.alpha),
                            (this.processedAttrs.active_function = "leakyRelu"))
                      },
                      normalizePerm: function () {
                        var A = this.tensorDataMap.origin.shape.length,
                          I = this.processedAttrs.axis,
                          g = I.length
                        if (
                          (g - A > 0 &&
                            (g = (I = I.map(function (A) {
                              return A - 1
                            }).filter(function (A) {
                              return A >= 0
                            })).length),
                          g > 4)
                        )
                          throw Error(
                            "op transpoes2 axis length exceeds maximum length 4, get " +
                              g
                          )
                        for (var C = new Array(g).fill(0), B = 0; B < g; B++)
                          C[I[B]] = B
                        var Q = []
                        for (B = 0; B < 4; B++) Q[B] = C[B] || 0
                        ;(this.processedAttrs.perm_arr = Q),
                          (this.processedAttrs.perm_size = g)
                      },
                      normalizeDim: function () {
                        for (
                          var A = this.tensorDataMap.origin.shape,
                            I = x(A),
                            g = T(A, this.processedAttrs.axis),
                            C = [],
                            B = 0;
                          B < I[g];
                          B++
                        )
                          C[B] = B
                        ;(this.processedAttrs.target_length = C.length),
                          (this.processedAttrs.target_value = C),
                          (this.processedAttrs.inputs_dim = I[g]),
                          (this.processedAttrs.dim = g),
                          0 === this.processedAttrs.num &&
                            (this.processedAttrs.num =
                              Object.values(this.tensorDataMap).filter(
                                function (A) {
                                  return "out" === A.tensorName
                                }
                              ).length || 1)
                      },
                      processElementwiseAxis: function () {
                        var A = this.tensorDataMap.origin.shape,
                          I = this.tensorDataMap.counter.shape,
                          g = this.processedAttrs.axis || -1
                        ;(this.processedAttrs.counterLen = I.length),
                          V(A) === V(I)
                            ? ((this.processedAttrs.axis = 0),
                              (this.processedAttrs.counterLen = 4))
                            : (-1 === g && (g = A.length - I.length),
                              (this.processedAttrs.axis = T(A, g)))
                      },
                      genElementwiseCounterPos: function () {
                        for (
                          var A = this.processedAttrs,
                            I = A.counterLen,
                            g = ["0", "0", "0", "0"],
                            C = A.axis,
                            B = 4 - I;
                          B < 4;
                          B++
                        )
                          g[B] = "oPos[" + C++ + "]"
                        this.processedAttrs.counterPos = g.join(",")
                      },
                      flattenShape: function () {
                        var A = Object.values(this.tensorDataMap).find(
                          function (A) {
                            return A.shape.length > 2
                          }
                        )
                        if (A) {
                          var I = x(A.shape)
                          A.shape = [I[0] * I[2], I[1] * I[3]]
                        }
                      },
                      reshape: function () {
                        var A = this.tensorDataMap.origin,
                          I = this.tensorDataMap.counter,
                          g = this.tensorDataMap.out
                        if (I.shape.length > A.shape.length) {
                          var C = I
                          ;(I = A), (A = C)
                        }
                        if (A.shape.length > 2 && 2 === I.shape.length) {
                          var B = (function (A, I) {
                            void 0 === A && (A = []), void 0 === I && (I = [])
                            var g = A.reduce(function (A, I) {
                              return A * I
                            })
                            return 1 === I.length ? [1, g] : [I[0], g / I[0]]
                          })(A.shape, g.shape)
                          A.shape = B
                        }
                      },
                      checkIsMerge: function () {
                        var A = this.name.replace("conv2d-elementwise_add-", "")
                        ;(this.name = "conv2d_elementwise_add"),
                          "leaky_relu" === A &&
                            (this.processedAttrs.alpha &&
                              (this.processedAttrs.multi_value =
                                this.processedAttrs.alpha),
                            (this.processedAttrs.active_function = "leakyRelu"))
                      }
                    }
                  var EA = function () {
                    return (EA =
                      Object.assign ||
                      function (A) {
                        for (var I, g = 1, C = arguments.length; g < C; g++)
                          for (var B in (I = arguments[g]))
                            Object.prototype.hasOwnProperty.call(I, B) &&
                              (A[B] = I[B])
                        return A
                      }).apply(this, arguments)
                  }
                  const iA = (function () {
                    function A(A, I, g, C, B) {
                      ;(this.name = ""),
                        (this.isPackedOp = !1),
                        (this.processedAttrs = {}),
                        (this.subAttrs = []),
                        (this.uniform = null),
                        (this.inputTensors = []),
                        (this.outputTensors = []),
                        (this.dataLayout = ""),
                        (this.iLayer = 0),
                        (this.program = []),
                        (this.isFinalOp = !1),
                        (this.bufferType = h.FrameBuffer),
                        (this.tensorDataMap = {}),
                        (this.tensorData = [])
                      var Q = A.type,
                        E = A.inputs,
                        i = A.outputs,
                        o = A.attrs,
                        D = A.isPacked,
                        n = A.bufferType,
                        t = void 0 === n ? h.FrameBuffer : n,
                        a = A.uniform,
                        s = void 0 === a ? null : a
                      ;(this.modelName = B),
                        (this.subAttrs = A.subAttrs),
                        (this.name = Q),
                        (this.isPackedOp = D),
                        (this.bufferType = t),
                        (this.dataLayout = g.dataLayout || ""),
                        (this.iLayer = I),
                        (this.isFinalOp = C),
                        (this.uniform = s),
                        this.initExtendedAttrs(o),
                        this.constructTensorData(E, i, g.vars),
                        this.buildTensor()
                      var w = this.buildShaderParams()
                      this.buildProgram(w)
                    }
                    return (
                      (A.prototype.initExtendedAttrs = function (A) {
                        for (var I in A)
                          if (Object.prototype.hasOwnProperty.call(A, I)) {
                            var g = A[I]
                            this.processedAttrs[I] = g
                          }
                      }),
                      (A.prototype.constructTensorData = function (A, I, g) {
                        var C = this
                        Object.keys(I).forEach(function (A) {
                          I[A].forEach(function (B, Q) {
                            I[A][Q] = C.getTensorVar(B, g)
                          })
                        }),
                          Object.keys(A).forEach(function (I) {
                            A[I] = [C.getTensorVar(A[I][0], g)]
                          })
                        var B = function (A) {
                            if (Object.prototype.hasOwnProperty.call(I, A))
                              try {
                                var g = I[A] || [{}],
                                  B = Q.getExactTensorName(A, "output")
                                B &&
                                  g.forEach(function (A, I) {
                                    ;(A.tensorName = B),
                                      (C.tensorDataMap[B + "_" + I] = EA(
                                        EA({}, A),
                                        { tensorName: B, runtime: I }
                                      ))
                                  })
                              } catch (A) {
                                console.error(A)
                              }
                          },
                          Q = this
                        for (var E in I) B(E)
                        for (var E in A)
                          if (Object.prototype.hasOwnProperty.call(A, E)) {
                            var i = A[E].length > 0 ? A[E] : [{}],
                              o = this.getExactTensorName(E, "input")
                            if (o) {
                              var D = i[0]
                              ;(D.tensorName = o),
                                (this.tensorDataMap[o] = EA(EA({}, D), {
                                  tensorName: o
                                }))
                            }
                          }
                      }),
                      (A.prototype.getExactTensorName = function (A, I) {
                        return "input" === I
                          ? {
                              input: "origin",
                              x: "origin",
                              y: "counter",
                              w: "weight"
                            }[A.toLowerCase()] || A.toLowerCase()
                          : {
                              output: "out",
                              y: "out",
                              out: "out",
                              scale: "scale",
                              bias: "bias",
                              mean: "mean",
                              variance: "variance",
                              mask: "out",
                              boxes: "out",
                              variances: "out"
                            }[A.toLowerCase()]
                      }),
                      (A.prototype.getTensorVar = function (A, I) {
                        var g = i(I, A.replace(/_packed$/, ""))
                        return g && A.endsWith("_packed")
                          ? (function (A, I) {
                              var g =
                                  3 === A.shape.length
                                    ? m([1], A.shape)
                                    : A.shape,
                                C = g[0],
                                B = g[1],
                                Q = g[2],
                                E = g[3],
                                i = Object.assign({}, A)
                              if (((i.name = I), (i.packed = !1), B % 4 == 0)) {
                                var o = B / 4
                                ;(i.packed = !0), (i.shape = [C, o, Q, E])
                              }
                              return i
                            })(g, A)
                          : g
                      }),
                      (A.prototype.buildProgram = function (A) {
                        var I = this,
                          g = this.name,
                          C = R.backend + "_" + g,
                          B = R.opRegistry.ops[C]
                        try {
                          if (!B && "wasm" !== t.get("backend"))
                            throw new Error("[unregistered op] " + g)
                          var Q = this.inputTensors
                          this.program = this.outputTensors.map(function (
                            g,
                            C
                          ) {
                            return R.backendInstance.createProgram({
                              op: B,
                              outTensor: g,
                              inputTensors: Q,
                              shaderParams: A[C],
                              runtime: C,
                              isFinalOp: I.isFinalOp
                            })
                          })
                        } catch (A) {
                          console.error(A)
                        }
                      }),
                      (A.prototype.processTensorDataAndAttrs = function () {
                        var A = this
                        try {
                          this.name.indexOf("conv2d-elementwise_add") > -1
                            ? (this.name = "conv2d_elementwise_add")
                            : this.name.indexOf("max_pool2d_with_index") > -1 &&
                              (this.name = "pool2d_max")
                          var I = R.backend + "_" + this.name
                          ;(
                            (R.opRegistry.ops[I] &&
                              R.opRegistry.ops[I].behaviors) ||
                            []
                          ).forEach(function (I) {
                            try {
                              QA[I].call(A)
                            } catch (A) {
                              console.error(A)
                            }
                          })
                        } catch (A) {
                          console.error(A)
                        }
                      }),
                      (A.prototype.buildTensor = function () {
                        var A = this
                        this.processTensorDataAndAttrs()
                        var I = Object.values(this.tensorDataMap)
                        I.forEach(function (I, g) {
                          var C,
                            B = I.tensorName,
                            Q = new BA({
                              type: A.modelName + "_" + I.name,
                              name: B,
                              shape: I.shape,
                              data: I.data || null,
                              persistable: I.persistable || !1,
                              interpType: I.interpType || "NEAREST",
                              isPacked: A.isPackedOp || I.packed || !1,
                              binding: g,
                              noLayout:
                                null === (C = R.backendInstance) || void 0 === C
                                  ? void 0
                                  : C.noLayout,
                              dataLayout: A.dataLayout,
                              runtime: I.runtime || 0
                            })
                          "out" === B
                            ? A.outputTensors.push(Q)
                            : A.inputTensors.push(Q),
                            (I.shape = Q.shape),
                            (I.total = Q.total)
                        }),
                          (this.tensorDataMap = null),
                          (this.tensorData = I)
                      }),
                      (A.prototype.buildShaderParams = function () {
                        var A = this,
                          I = []
                        return (
                          this.outputTensors.forEach(function () {
                            var g = JSON.parse(JSON.stringify(A.processedAttrs))
                            I.push(g)
                          }),
                          I
                        )
                      }),
                      A
                    )
                  })()
                  var oA = function () {
                    return (oA =
                      Object.assign ||
                      function (A) {
                        for (var I, g = 1, C = arguments.length; g < C; g++)
                          for (var B in (I = arguments[g]))
                            Object.prototype.hasOwnProperty.call(I, B) &&
                              (A[B] = I[B])
                        return A
                      }).apply(this, arguments)
                  }
                  const DA = (function () {
                    function A() {
                      ;(this.targetContext = {}),
                        (this.gapFillWith = "#fff"),
                        (this.mean = [0, 0, 0]),
                        (this.std = [1, 1, 1]),
                        (this.bgr = !1),
                        (this.pixelWidth = 1),
                        (this.pixelHeight = 1),
                        (this.inputFeed = []),
                        (this.targetCanvas =
                          t.get("canvas2d") ||
                          document.createElement("canvas")),
                        (this.targetContext =
                          this.targetCanvas.getContext("2d"))
                    }
                    return (
                      (A.prototype.process = function (A, I, g) {
                        var C = I.fill,
                          B = I.mean,
                          Q = I.std,
                          E = I.bgr,
                          i = I.keepRatio,
                          o = void 0 === i || i,
                          D = I.scale,
                          n = void 0 === D ? 0 : D,
                          t = g.fc,
                          a = void 0 === t ? 3 : t,
                          s = g.fh,
                          w = g.fw,
                          h = A,
                          e = {
                            gapFillWith: C || this.gapFillWith,
                            mean: B || this.mean,
                            std: Q || this.std,
                            bgr: E || this.bgr,
                            keepRatio: o,
                            scale: n,
                            targetSize: { width: w, height: s },
                            targetShape: [1, a, s, w]
                          }
                        return this.fromPixels(h, e) || []
                      }),
                      (A.prototype.fromPixels = function (A, I) {
                        var g = [],
                          C = {
                            gapFillWith: I.gapFillWith,
                            dx: 0,
                            dy: 0,
                            dWidth: I.targetSize.width,
                            dHeight: I.targetSize.height
                          },
                          B = A,
                          Q = A.path && A.width && A.height
                        if (
                          !Q &&
                          !(
                            A instanceof ImageBitmap ||
                            A instanceof HTMLVideoElement ||
                            A instanceof HTMLImageElement ||
                            A instanceof HTMLCanvasElement
                          )
                        )
                          return [
                            {
                              data: g,
                              shape: I.shape || I.targetShape,
                              name: "image",
                              persistable: !0
                            }
                          ]
                        ;(this.pixelWidth = A.naturalWidth || A.width),
                          (this.pixelHeight = A.naturalHeight || A.height)
                        var E =
                          t.get("webgl_gpu_pipeline") || I.webglFeedProcess
                        return (
                          this.fitToTargetSize(
                            Q ? B.path : B,
                            C,
                            oA(oA({}, I), { inGPU: E })
                          ),
                          (g = this.getImageData(C)),
                          E
                            ? [
                                {
                                  data: (g = Float32Array.from(g.data)),
                                  shape: [1, 1, C.dHeight, C.dWidth],
                                  name: "image",
                                  persistable: !0
                                }
                              ]
                            : [
                                {
                                  data: (g = this.allReshapeToRGB(g, I)),
                                  shape: I.targetShape || I.shape,
                                  name: "image",
                                  persistable: !0
                                }
                              ]
                        )
                      }),
                      (A.prototype.allReshapeToRGB = function (A, I) {
                        for (
                          var g = I.mean,
                            C = I.std,
                            B = I.targetShape,
                            Q = I.bgr,
                            E = I.normalizeType,
                            i = void 0 === E ? 0 : E,
                            o = B[1],
                            D = B[2],
                            n = B[3],
                            t = A.data || A,
                            a = new Float32Array(D * n * o),
                            s = 0,
                            w = 0;
                          w < D;
                          ++w
                        )
                          for (var h = w * n, e = 0; e < n; ++e)
                            for (var G = h + e, F = 0; F < o; ++F) {
                              var R = Q ? 4 * G + (2 - F) : 4 * G + F
                              ;(a[s] =
                                0 === i ? t[R] / 255 : (t[R] - 128) / 128),
                                (a[s] -= g[F]),
                                (a[s] /= C[F]),
                                s++
                            }
                        return b(a, [1, D, n, o])
                      }),
                      (A.prototype.fitToTargetSize = function (A, I, g) {
                        var C = g || {},
                          B = C.keepRatio,
                          Q = void 0 === B || B,
                          E = C.inGPU,
                          i = void 0 !== E && E,
                          o = C.scale,
                          D = void 0 === o ? 0 : o,
                          n = I.dWidth,
                          t = I.dHeight,
                          a = i ? this.pixelWidth : n,
                          s = i ? this.pixelHeight : t,
                          w = i ? this.pixelWidth : n,
                          h = i ? this.pixelHeight : t,
                          e = 0,
                          G = 0
                        if (D) {
                          if (w - n < 0 || h - t < 0)
                            throw new Error(
                              "scale size smaller than target size"
                            )
                          this.pixelWidth > this.pixelHeight
                            ? ((h = D),
                              (w = Math.round(
                                (h * this.pixelWidth) / this.pixelHeight
                              )))
                            : ((w = D),
                              (h = Math.round(
                                (w * this.pixelHeight) / this.pixelWidth
                              ))),
                            (this.targetCanvas.width = a = w),
                            (this.targetCanvas.height = s = h),
                            (I.dx = (w - n) / 2),
                            (I.dy = (h - t) / 2)
                        } else
                          Q &&
                            (((n / t) * this.pixelHeight) / this.pixelWidth >= 1
                              ? i
                                ? ((a = Math.round((h * n) / t)),
                                  (e = Math.floor((a - w) / 2)))
                                : ((w = Math.round(
                                    (h * this.pixelWidth) / this.pixelHeight
                                  )),
                                  (e = Math.floor((n - w) / 2)))
                              : i
                              ? ((s = Math.round((w * t) / n)),
                                (G = Math.floor((s - h) / 2)))
                              : ((h = Math.round(
                                  (w * this.pixelHeight) / this.pixelWidth
                                )),
                                (G = Math.floor((t - h) / 2)))),
                            (this.targetCanvas.width = I.dWidth = a),
                            (this.targetCanvas.height = I.dHeight = s)
                        ;(this.targetContext.fillStyle = I.gapFillWith),
                          this.targetContext.fillRect(
                            0,
                            0,
                            this.targetCanvas.width,
                            this.targetCanvas.height
                          ),
                          this.targetContext.drawImage(A, e, G, w, h)
                      }),
                      (A.prototype.getImageData = function (A) {
                        var I = A.dx,
                          g = A.dy,
                          C = A.dWidth,
                          B = A.dHeight
                        return this.targetContext.getImageData(I, g, C, B)
                      }),
                      (A.prototype.cover = function (A, I, g, C) {
                        var B = g,
                          Q = C
                        return (
                          ((g / C) * I) / A >= 1
                            ? (B = Math.round((Q * A) / I))
                            : (Q = Math.round((B * I) / A)),
                          [B / g, Q / C]
                        )
                      }),
                      A
                    )
                  })()
                  var nA = function () {
                    return (nA =
                      Object.assign ||
                      function (A) {
                        for (var I, g = 1, C = arguments.length; g < C; g++)
                          for (var B in (I = arguments[g]))
                            Object.prototype.hasOwnProperty.call(I, B) &&
                              (A[B] = I[B])
                        return A
                      }).apply(this, arguments)
                  }
                  function tA(A, I, g) {
                    for (var C = [], B = 0, Q = A.length; B < Q; B++) {
                      var E = A[B]
                      E > I && C.push({ score: E, i: B })
                    }
                    return C.sort(function (A, I) {
                      return I.score - A.score
                    }).slice(0, g)
                  }
                  function aA(A) {
                    var I = A[0],
                      g = A[1],
                      C = A[2],
                      B = A[3]
                    return C < I || B < g ? 0 : (C - I) * (B - g)
                  }
                  function sA(A, I) {
                    if (
                      I[0] > A[2] ||
                      I[2] < A[0] ||
                      I[1] > A[3] ||
                      I[3] < A[1]
                    )
                      return 0
                    var g = aA(A),
                      C = aA(I),
                      B = (function (A, I) {
                        var g = A[0],
                          C = A[1],
                          B = A[2],
                          Q = A[3],
                          E = I[0],
                          i = I[1],
                          o = I[2],
                          D = I[3],
                          n = Math.max(g, E),
                          t = Math.max(C, i)
                        return (Math.min(B, o) - n) * (Math.min(Q, D) - t)
                      })(A, I)
                    return B / (g + C - B)
                  }
                  const wA = {
                    multiclass_nms: function (A, I) {
                      var g = A[0],
                        C = void 0 === g ? [] : g,
                        B = A[1],
                        Q = void 0 === B ? [] : B,
                        E = X(C),
                        i = X(Q)
                      if (!E || !i) return []
                      if (
                        ((E = E[0]),
                        (i = i[0]),
                        !(E && E.length && i && i.length))
                      )
                        return []
                      for (
                        var o = I.nms_top_k,
                          D = void 0 === o ? 100 : o,
                          n = I.nms_eta,
                          t = void 0 === n ? 1 : n,
                          a = I.keep_top_k,
                          s = void 0 === a ? 100 : a,
                          w = I.background_label,
                          h = void 0 === w ? 0 : w,
                          e = I.nms_threshold,
                          G = void 0 === e ? 0.3 : e,
                          F = I.score_threshold,
                          R = void 0 === F ? 0 : F,
                          r = [],
                          N = 0,
                          y = i.length;
                        N < y;
                        N++
                      ) {
                        var c = []
                        if (N !== h) {
                          var U = tA(i[N], R, D)
                          if (!U || !U.length) return []
                          var S = U.shift(),
                            M = E[S.i]
                          for (
                            c.push(nA(nA({}, S), { box: M, label: N }));
                            U.length;

                          ) {
                            var k = U.shift()
                            M = E[k.i]
                            for (var J = !0, l = 0, L = c; l < L.length; l++)
                              if (sA(M, L[l].box) > G) {
                                J = !1
                                break
                              }
                            J && c.push(nA(nA({}, k), { box: M, label: N })),
                              J && t < 1 && G > 0.5 && (G *= t)
                          }
                          r = r.concat(c)
                        }
                      }
                      var Y = r
                        .sort(function (A, I) {
                          return I.score - A.score
                        })
                        .slice(0, s)
                        .sort(function (A, I) {
                          return A.label - I.label
                        })
                        .map(function (A) {
                          return (function () {
                            for (
                              var A = 0, I = 0, g = arguments.length;
                              I < g;
                              I++
                            )
                              A += arguments[I].length
                            var C = Array(A),
                              B = 0
                            for (I = 0; I < g; I++)
                              for (
                                var Q = arguments[I], E = 0, i = Q.length;
                                E < i;
                                E++, B++
                              )
                                C[B] = Q[E]
                            return C
                          })([A.label, A.score], A.box)
                        })
                      return Y && Y.length ? Y : []
                    }
                  }
                  var hA = function (A, I, g, C) {
                      return new (g || (g = Promise))(function (B, Q) {
                        function E(A) {
                          try {
                            o(C.next(A))
                          } catch (A) {
                            Q(A)
                          }
                        }
                        function i(A) {
                          try {
                            o(C.throw(A))
                          } catch (A) {
                            Q(A)
                          }
                        }
                        function o(A) {
                          var I
                          A.done
                            ? B(A.value)
                            : ((I = A.value),
                              I instanceof g
                                ? I
                                : new g(function (A) {
                                    A(I)
                                  })).then(E, i)
                        }
                        o((C = C.apply(A, I || [])).next())
                      })
                    },
                    eA = function (A, I) {
                      var g,
                        C,
                        B,
                        Q,
                        E = {
                          label: 0,
                          sent: function () {
                            if (1 & B[0]) throw B[1]
                            return B[1]
                          },
                          trys: [],
                          ops: []
                        }
                      return (
                        (Q = { next: i(0), throw: i(1), return: i(2) }),
                        "function" == typeof Symbol &&
                          (Q[Symbol.iterator] = function () {
                            return this
                          }),
                        Q
                      )
                      function i(Q) {
                        return function (i) {
                          return (function (Q) {
                            if (g)
                              throw new TypeError(
                                "Generator is already executing."
                              )
                            for (; E; )
                              try {
                                if (
                                  ((g = 1),
                                  C &&
                                    (B =
                                      2 & Q[0]
                                        ? C.return
                                        : Q[0]
                                        ? C.throw ||
                                          ((B = C.return) && B.call(C), 0)
                                        : C.next) &&
                                    !(B = B.call(C, Q[1])).done)
                                )
                                  return B
                                switch (
                                  ((C = 0),
                                  B && (Q = [2 & Q[0], B.value]),
                                  Q[0])
                                ) {
                                  case 0:
                                  case 1:
                                    B = Q
                                    break
                                  case 4:
                                    return E.label++, { value: Q[1], done: !1 }
                                  case 5:
                                    E.label++, (C = Q[1]), (Q = [0])
                                    continue
                                  case 7:
                                    ;(Q = E.ops.pop()), E.trys.pop()
                                    continue
                                  default:
                                    if (
                                      !(
                                        (B =
                                          (B = E.trys).length > 0 &&
                                          B[B.length - 1]) ||
                                        (6 !== Q[0] && 2 !== Q[0])
                                      )
                                    ) {
                                      E = 0
                                      continue
                                    }
                                    if (
                                      3 === Q[0] &&
                                      (!B || (Q[1] > B[0] && Q[1] < B[3]))
                                    ) {
                                      E.label = Q[1]
                                      break
                                    }
                                    if (6 === Q[0] && E.label < B[1]) {
                                      ;(E.label = B[1]), (B = Q)
                                      break
                                    }
                                    if (B && E.label < B[2]) {
                                      ;(E.label = B[2]), E.ops.push(Q)
                                      break
                                    }
                                    B[2] && E.ops.pop(), E.trys.pop()
                                    continue
                                }
                                Q = I.call(A, E)
                              } catch (A) {
                                ;(Q = [6, A]), (C = 0)
                              } finally {
                                g = B = 0
                              }
                            if (5 & Q[0]) throw Q[1]
                            return { value: Q[0] ? Q[1] : void 0, done: !0 }
                          })([Q, i])
                        }
                      }
                    }
                  const GA = (function () {
                      function A(A) {
                        ;(this.runnerConfig = {}),
                          (this.isPaused = !1),
                          (this.model = {}),
                          (this.weightMap = []),
                          (this.isExecuted = !1),
                          (this.test = !1),
                          (this.graphGenerator = {}),
                          (this.mediaProcessor = null),
                          (this.needPreheat = !0),
                          (this.feedShape = {}),
                          (this.runnerConfig = Object.assign({}, A)),
                          (this.needPreheat =
                            void 0 === A.needPreheat || A.needPreheat),
                          (this.modelName =
                            A.modelName || Date.now().toString()),
                          (this.weightMap = []),
                          t.set("ns", Q()),
                          "node" !== t.get("platform") &&
                            (this.mediaProcessor = new DA())
                      }
                      return (
                        (A.prototype.init = function () {
                          return hA(this, void 0, void 0, function () {
                            var A
                            return eA(this, function (I) {
                              switch (I.label) {
                                case 0:
                                  return R.backendInstance
                                    ? ((this.isExecuted = !1),
                                      "wasm" !== t.get("backend")
                                        ? [3, 2]
                                        : [
                                            4,
                                            Promise.all([
                                              this.load(),
                                              R.backendInstance.init()
                                            ])
                                          ])
                                    : (console.error(
                                        "ERROR: Haven't register backend"
                                      ),
                                      [2])
                                case 1:
                                  return I.sent(), [3, 4]
                                case 2:
                                  return (
                                    R.backendInstance.init(),
                                    (this.isExecuted = !1),
                                    [4, this.load()]
                                  )
                                case 3:
                                  I.sent(), (I.label = 4)
                                case 4:
                                  return (
                                    this.genFeedData(),
                                    this.genGraph(),
                                    this.genOpData(),
                                    "wasm" !== t.get("backend")
                                      ? [3, 6]
                                      : ((this.model = Object.assign(
                                          this.model,
                                          this.runnerConfig
                                        )),
                                        (A = this.model),
                                        [
                                          4,
                                          R.backendInstance.initWasm(
                                            this.model,
                                            this.weightMap
                                          )
                                        ])
                                  )
                                case 5:
                                  return (A.index = I.sent()), [2, []]
                                case 6:
                                  return this.needPreheat
                                    ? [4, this.preheat()]
                                    : [3, 8]
                                case 7:
                                  return [2, I.sent()]
                                case 8:
                                  return [2]
                              }
                            })
                          })
                        }),
                        (A.prototype.load = function () {
                          return hA(this, void 0, void 0, function () {
                            var A, I, g, C, B, Q, E, i
                            return eA(this, function (o) {
                              switch (o.label) {
                                case 0:
                                  return (
                                    (A = this.runnerConfig),
                                    (I = A.modelPath),
                                    (g = A.modelObj),
                                    (C = void 0 === g ? null : g),
                                    I
                                      ? ((B = new w(I)),
                                        (Q = this),
                                        [4, B.load()])
                                      : [3, 2]
                                  )
                                case 1:
                                  return (Q.model = o.sent()), [3, 3]
                                case 2:
                                  ;(null == C ? void 0 : C.model) &&
                                    (null == C ? void 0 : C.params) &&
                                    ((E = C.model),
                                    (i = C.params),
                                    w.allocateParamsVar(E.vars, i),
                                    (this.model = E)),
                                    (o.label = 3)
                                case 3:
                                  return [2]
                              }
                            })
                          })
                        }),
                        (A.prototype.genGraph = function () {
                          ;(this.graphGenerator = new CA(
                            this.model,
                            this.runnerConfig
                          )),
                            (this.weightMap = this.graphGenerator.createGraph())
                        }),
                        (A.prototype.genOpData = function () {
                          var A = this,
                            I = 0
                          this.weightMap.forEach(function (g, C) {
                            var B = g.type
                            if ("feed" !== B && "fetch" !== B) {
                              I++
                              var Q = C === A.weightMap.length - 2,
                                E = new iA(g, I, A.model, Q, A.modelName)
                              g.opData = E
                            }
                          }),
                            n(this.model)
                        }),
                        (A.prototype.preheat = function () {
                          return hA(this, void 0, void 0, function () {
                            var A
                            return eA(this, function (I) {
                              switch (I.label) {
                                case 0:
                                  return [4, this.checkModelLoaded()]
                                case 1:
                                  return I.sent(), [4, this.execute()]
                                case 2:
                                  return (
                                    (A = I.sent()),
                                    (this.isExecuted = !0),
                                    [2, A]
                                  )
                              }
                            })
                          })
                        }),
                        (A.prototype.checkModelLoaded = function () {
                          return hA(this, void 0, void 0, function () {
                            return eA(this, function (A) {
                              switch (A.label) {
                                case 0:
                                  return 0 !== this.weightMap.length
                                    ? [3, 2]
                                    : (console.info(
                                        "It's better to preheat the model before running."
                                      ),
                                      [4, this.load()])
                                case 1:
                                  A.sent(),
                                    this.genFeedData(),
                                    this.genGraph(),
                                    this.genOpData(),
                                    (this.isExecuted = !1),
                                    (A.label = 2)
                                case 2:
                                  return [2]
                              }
                            })
                          })
                        }),
                        (A.prototype.predict = function (A, I) {
                          return hA(this, void 0, void 0, function () {
                            var g, C, B
                            return eA(this, function (Q) {
                              switch (Q.label) {
                                case 0:
                                  return this.isPaused || !this.mediaProcessor
                                    ? [2]
                                    : ((g = []),
                                      (g = this.runnerConfig.webglFeedProcess
                                        ? [A]
                                        : this.mediaProcessor.process(
                                            A,
                                            this.runnerConfig,
                                            this.feedShape
                                          )),
                                      (C = []),
                                      "wasm" !== t.get("backend")
                                        ? [3, 3]
                                        : [
                                            4,
                                            R.backendInstance.predict(
                                              g[0].data,
                                              this.model.index
                                            )
                                          ])
                                case 1:
                                  return Q.sent(), [4, this.read()]
                                case 2:
                                  return (
                                    (B = Q.sent()),
                                    (C = this.postProcess(B)),
                                    [3, 5]
                                  )
                                case 3:
                                  return (
                                    this.updateFeedData(g), [4, this.execute()]
                                  )
                                case 4:
                                  ;(C = Q.sent()), (Q.label = 5)
                                case 5:
                                  return (
                                    (this.isExecuted = !0), [2, I ? I(C) : C]
                                  )
                              }
                            })
                          })
                        }),
                        (A.prototype.predictWithFeed = function (A, I, g) {
                          var C
                          return hA(this, void 0, void 0, function () {
                            var B, Q, E, i, o, D, n, a, s, w, h, e
                            return eA(this, function (G) {
                              switch (G.label) {
                                case 0:
                                  return (
                                    (B = this.feedShape),
                                    (Q = B.fc),
                                    (E = void 0 === Q ? 3 : Q),
                                    (i = B.fw),
                                    (o = B.fh),
                                    Array.isArray(A)
                                      ? (
                                          null === (C = A[0]) || void 0 === C
                                            ? void 0
                                            : C.data
                                        )
                                        ? ((w = A[0].data) instanceof
                                            Float32Array ||
                                            (A[0].data = new Float32Array(w)),
                                          (D = A))
                                        : (D = [
                                            {
                                              data: new Float32Array(A),
                                              shape: g || [1, E, o, i],
                                              name: "image",
                                              persistable: !0
                                            }
                                          ])
                                      : ((a = (n = A).width),
                                        (s = n.height),
                                        (w = n.data),
                                        (D = [
                                          {
                                            data: new Float32Array(w),
                                            shape: g || [1, E, s || o, a || i],
                                            name: "image",
                                            persistable: !0
                                          }
                                        ])),
                                    (h = []),
                                    "wasm" !== t.get("backend")
                                      ? [3, 3]
                                      : [
                                          4,
                                          R.backendInstance.predict(
                                            D[0].data,
                                            this.model.index
                                          )
                                        ]
                                  )
                                case 1:
                                  return G.sent(), [4, this.read()]
                                case 2:
                                  return (
                                    (e = G.sent()),
                                    (h = this.postProcess(e)),
                                    [3, 5]
                                  )
                                case 3:
                                  return (
                                    this.updateFeedData(D), [4, this.execute()]
                                  )
                                case 4:
                                  ;(h = G.sent()), (G.label = 5)
                                case 5:
                                  return (
                                    (this.isExecuted = !0), [2, I ? I(h) : h]
                                  )
                              }
                            })
                          })
                        }),
                        (A.prototype.genFeedData = function () {
                          var A,
                            I = this.runnerConfig,
                            g = I.type,
                            C = I.feedShape,
                            B = I.webglFeedProcess
                          this.feedShape = this.model.feedShape || C
                          var Q,
                            E = this.feedShape,
                            D = E.fc,
                            n = void 0 === D ? 3 : D,
                            a = E.fh,
                            s = E.fw,
                            w = this.model.vars
                          if (g === F.MultipleInput) {
                            var h =
                              this.model.ops &&
                              this.model.ops[0] &&
                              (null === (A = this.model.ops[0].inputs) ||
                              void 0 === A
                                ? void 0
                                : A.X)
                            h.length > 1 &&
                              (Q = h.map(function (A) {
                                var I = i(w, A),
                                  g = I.shape.reverse(),
                                  C = g[0],
                                  B = g[1],
                                  Q = g[2],
                                  E = g[3],
                                  o = void 0 === E ? 1 : E
                                return (
                                  (I.data = new Float32Array(o * Q * B * C)), I
                                )
                              }))
                          } else {
                            var e = "wasm" !== t.get("backend") && B ? 4 : n
                            Q = i(w, "image")
                            var G = { name: "image", shape: [1, e, a, s] }
                            Q = Object.assign(G, Q, {
                              data: new Float32Array(e * a * s).fill(1),
                              persistable: !0
                            })
                          }
                          o(w, Q)
                        }),
                        (A.prototype.updateFeedData = function (A) {
                          var I = A[0],
                            g = this.weightMap.find(function (A) {
                              return A.opData
                                ? A.opData.inputTensors.find(function (A) {
                                    return A.tensorId.endsWith("_image")
                                  })
                                : null
                            }),
                            C = g.opData.inputTensors.find(function (A) {
                              return A.tensorId.endsWith("_image")
                            })
                          if (
                            ((C.data = I.data),
                            this.runnerConfig.webglFeedProcess ||
                              t.get("webgl_gpu_pipeline"))
                          ) {
                            var B = I.shape || [1, 1, I.height, I.width],
                              Q = new Uint8Array(I.data || [])
                            if (I.width && I.height && !I.data) {
                              var E = I.naturalWidth || I.width
                              ;(B = [1, 1, I.naturalHeight || I.height, E]),
                                (Q = I)
                            }
                            var i = C.opts
                            i.shape = B
                            var o = g.opData,
                              D = new BA(i)
                            ;(D.data = Q), (o.inputTensors = [D])
                            var n = B.slice(-2),
                              a = n[0],
                              s = n[1],
                              w = o.outputTensors[0].shape.slice(-2),
                              h = w[0],
                              e = w[1],
                              G = this.mediaProcessor.cover(s, a, e, h)
                            g.uniform.u_scale.value = G
                          }
                        }),
                        (A.prototype.execute = function () {
                          return hA(this, void 0, void 0, function () {
                            var A, I
                            return eA(this, function (g) {
                              switch (g.label) {
                                case 0:
                                  return (
                                    (A = this.graphGenerator.getFeedExecutor()),
                                    this.executeOp(A),
                                    [4, this.read()]
                                  )
                                case 1:
                                  return (
                                    (I = g.sent()), [2, this.postProcess(I)]
                                  )
                              }
                            })
                          })
                        }),
                        (A.prototype.postProcess = function (A) {
                          var I = "wasm" === t.get("backend")
                          if (t.get("debug")) return A
                          var g = A,
                            C = this.model,
                            B = C.multiOutputs,
                            Q = C.postOps
                          if (B)
                            if (I)
                              g = B.map(function (I, g) {
                                var C
                                return ((C = {})[I.name] = A[g]), C
                              })
                            else {
                              var E = 0
                              g = B.map(function (I) {
                                var g,
                                  C = I.shape.reduce(function (A, I) {
                                    return A * I
                                  }),
                                  B = A.slice(E, C + E)
                                return (E += C), ((g = {})[I.name] = B), g
                              })
                            }
                          if (B && Q && Q.length)
                            for (
                              var i = function (A, I) {
                                  var C = Q[A],
                                    B = C.type,
                                    E = C.attrs,
                                    i = C.inputs,
                                    o = wA[B]
                                  if (!o) return { value: void 0 }
                                  var D = (function () {
                                      for (
                                        var A = 0, I = 0, g = arguments.length;
                                        I < g;
                                        I++
                                      )
                                        A += arguments[I].length
                                      var C = Array(A),
                                        B = 0
                                      for (I = 0; I < g; I++)
                                        for (
                                          var Q = arguments[I],
                                            E = 0,
                                            i = Q.length;
                                          E < i;
                                          E++, B++
                                        )
                                          C[B] = Q[E]
                                      return C
                                    })(g),
                                    n = Object.keys(i).map(function (A) {
                                      var I = i[A],
                                        g = I.name,
                                        C = I.shape,
                                        B = D.filter(function (A) {
                                          return A[g]
                                        })
                                      return B && B[0] && B[0][g]
                                        ? {
                                            name: A,
                                            tensorId: g,
                                            data: B[0][g],
                                            shape: C
                                          }
                                        : (console.error(
                                            "未获取到" + g + "的数据"
                                          ),
                                          null)
                                    })
                                  g = o(n, E)
                                },
                                o = 0,
                                D = Q.length;
                              o < D;
                              o++
                            ) {
                              var n = i(o)
                              if ("object" == typeof n) return n.value
                            }
                          return g
                        }),
                        (A.prototype.executeOp = function (A) {
                          var I
                          if ("fetch" !== A.type)
                            if (
                              ("feed" !== A.type && A.execute(this.isExecuted),
                              t.get("debug") &&
                                (null === (I = A.opData) || void 0 === I
                                  ? void 0
                                  : I.outputTensors) &&
                                A.opData.outputTensors[
                                  A.opData.outputTensors.length - 1
                                ] &&
                                A.opData.outputTensors[
                                  A.opData.outputTensors.length - 1
                                ].tensorId ===
                                  this.modelName +
                                    "_" +
                                    (t.get("ns").layerName ||
                                      t.get("layerName")))
                            )
                              console.info(
                                A.opData.name + "_" + A.opData.iLayer,
                                "runner op"
                              )
                            else if (A.next) {
                              var g = A.next,
                                C = this.graphGenerator.getExecutorById(g)
                              this.executeOp(C)
                            }
                        }),
                        (A.prototype.read = function () {
                          return hA(this, void 0, void 0, function () {
                            var A, I, g
                            return eA(this, function (C) {
                              switch (C.label) {
                                case 0:
                                  return (
                                    (A =
                                      this.graphGenerator.getFetchExecutor()),
                                    (I = i(this.model.vars, A.inputs.X[0])),
                                    (g = {
                                      name: I.name,
                                      shape: A.attrs.origin_shape || I.shape,
                                      index: this.model.index
                                    }),
                                    [4, R.backendInstance.read(g)]
                                  )
                                case 1:
                                  return [2, C.sent()]
                              }
                            })
                          })
                        }),
                        (A.prototype.stopPredict = function () {
                          this.isPaused = !0
                        }),
                        A
                      )
                    })(),
                    FA = function () {}
                },
                993: () => {}
              },
              I = {}
            function g(C) {
              if (I[C]) return I[C].exports
              var B = (I[C] = { exports: {} })
              return A[C](B, B.exports, g), B.exports
            }
            return (
              (g.d = (A, I) => {
                for (var C in I)
                  g.o(I, C) &&
                    !g.o(A, C) &&
                    Object.defineProperty(A, C, { enumerable: !0, get: I[C] })
              }),
              (g.g = (function () {
                if ("object" == typeof globalThis) return globalThis
                try {
                  return this || new Function("return this")()
                } catch (A) {
                  if ("object" == typeof window) return window
                }
              })()),
              (g.o = (A, I) => Object.prototype.hasOwnProperty.call(A, I)),
              (g.r = (A) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(A, Symbol.toStringTag, {
                    value: "Module"
                  }),
                  Object.defineProperty(A, "__esModule", { value: !0 })
              }),
              g(994)
            )
          })()
        },
        859: (A, I, g) => {
          "use strict"
          function C(A) {
            for (var I, g = -1, C = A.length, B = A[C - 1], Q = 0; ++g < C; )
              (I = B), (B = A[g]), (Q += I[1] * B[0] - I[0] * B[1])
            return Q / 2
          }
          function B(A) {
            for (
              var I, g, C = -1, B = A.length, Q = 0, E = 0, i = A[B - 1], o = 0;
              ++C < B;

            )
              (I = i),
                (i = A[C]),
                (o += g = I[0] * i[1] - i[0] * I[1]),
                (Q += (I[0] + i[0]) * g),
                (E += (I[1] + i[1]) * g)
            return [Q / (o *= 3), E / o]
          }
          function Q(A, I) {
            return A[0] - I[0] || A[1] - I[1]
          }
          function E(A) {
            const I = A.length,
              g = [0, 1]
            let C,
              B = 2
            for (C = 2; C < I; ++C) {
              for (
                ;
                B > 1 &&
                ((Q = A[g[B - 2]]),
                (E = A[g[B - 1]]),
                (i = A[C]),
                (E[0] - Q[0]) * (i[1] - Q[1]) - (E[1] - Q[1]) * (i[0] - Q[0]) <=
                  0);

              )
                --B
              g[B++] = C
            }
            var Q, E, i
            return g.slice(0, B)
          }
          function i(A) {
            if ((g = A.length) < 3) return null
            var I,
              g,
              C = new Array(g),
              B = new Array(g)
            for (I = 0; I < g; ++I) C[I] = [+A[I][0], +A[I][1], I]
            for (C.sort(Q), I = 0; I < g; ++I) B[I] = [C[I][0], -C[I][1]]
            var i = E(C),
              o = E(B),
              D = o[0] === i[0],
              n = o[o.length - 1] === i[i.length - 1],
              t = []
            for (I = i.length - 1; I >= 0; --I) t.push(A[C[i[I]][2]])
            for (I = +D; I < o.length - n; ++I) t.push(A[C[o[I]][2]])
            return t
          }
          function o(A, I) {
            for (
              var g,
                C,
                B = A.length,
                Q = A[B - 1],
                E = I[0],
                i = I[1],
                o = Q[0],
                D = Q[1],
                n = !1,
                t = 0;
              t < B;
              ++t
            )
              (g = (Q = A[t])[0]),
                (C = Q[1]) > i != D > i &&
                  E < ((o - g) * (i - C)) / (D - C) + g &&
                  (n = !n),
                (o = g),
                (D = C)
            return n
          }
          function D(A) {
            for (
              var I,
                g,
                C = -1,
                B = A.length,
                Q = A[B - 1],
                E = Q[0],
                i = Q[1],
                o = 0;
              ++C < B;

            )
              (I = E),
                (g = i),
                (I -= E = (Q = A[C])[0]),
                (g -= i = Q[1]),
                (o += Math.hypot(I, g))
            return o
          }
          g.r(I),
            g.d(I, {
              polygonArea: () => C,
              polygonCentroid: () => B,
              polygonContains: () => o,
              polygonHull: () => i,
              polygonLength: () => D
            })
        },
        55: (A) => {
          "use strict"
          var I,
            g = {},
            C = !1
          if (
            (A.exports
              ? ((A.exports = g), (C = !0))
              : "undefined" != typeof document
              ? (window.ClipperLib = g)
              : (self.ClipperLib = g),
            C)
          )
            (B = "chrome"), (I = "Netscape")
          else {
            var B = navigator.userAgent.toString().toLowerCase()
            I = navigator.appName
          }
          var Q,
            E = {}
          function i(A, I, C) {
            ;(g.biginteger_used = 1),
              null != A &&
                ("number" == typeof A && void 0 === I
                  ? this.fromInt(A)
                  : "number" == typeof A
                  ? this.fromNumber(A, I, C)
                  : null == I && "string" != typeof A
                  ? this.fromString(A, 256)
                  : this.fromString(A, I))
          }
          function o() {
            return new i(null)
          }
          ;-1 != B.indexOf("chrome") && -1 == B.indexOf("chromium")
            ? (E.chrome = 1)
            : (E.chrome = 0),
            -1 != B.indexOf("chromium") ? (E.chromium = 1) : (E.chromium = 0),
            -1 != B.indexOf("safari") &&
            -1 == B.indexOf("chrome") &&
            -1 == B.indexOf("chromium")
              ? (E.safari = 1)
              : (E.safari = 0),
            -1 != B.indexOf("firefox") ? (E.firefox = 1) : (E.firefox = 0),
            -1 != B.indexOf("firefox/17")
              ? (E.firefox17 = 1)
              : (E.firefox17 = 0),
            -1 != B.indexOf("firefox/15")
              ? (E.firefox15 = 1)
              : (E.firefox15 = 0),
            -1 != B.indexOf("firefox/3") ? (E.firefox3 = 1) : (E.firefox3 = 0),
            -1 != B.indexOf("opera") ? (E.opera = 1) : (E.opera = 0),
            -1 != B.indexOf("msie 10") ? (E.msie10 = 1) : (E.msie10 = 0),
            -1 != B.indexOf("msie 9") ? (E.msie9 = 1) : (E.msie9 = 0),
            -1 != B.indexOf("msie 8") ? (E.msie8 = 1) : (E.msie8 = 0),
            -1 != B.indexOf("msie 7") ? (E.msie7 = 1) : (E.msie7 = 0),
            -1 != B.indexOf("msie ") ? (E.msie = 1) : (E.msie = 0),
            (g.biginteger_used = null),
            "Microsoft Internet Explorer" == I
              ? ((i.prototype.am = function (A, I, g, C, B, Q) {
                  for (var E = 32767 & I, i = I >> 15; --Q >= 0; ) {
                    var o = 32767 & this[A],
                      D = this[A++] >> 15,
                      n = i * o + D * E
                    ;(B =
                      ((o =
                        E * o +
                        ((32767 & n) << 15) +
                        g[C] +
                        (1073741823 & B)) >>>
                        30) +
                      (n >>> 15) +
                      i * D +
                      (B >>> 30)),
                      (g[C++] = 1073741823 & o)
                  }
                  return B
                }),
                (Q = 30))
              : "Netscape" != I
              ? ((i.prototype.am = function (A, I, g, C, B, Q) {
                  for (; --Q >= 0; ) {
                    var E = I * this[A++] + g[C] + B
                    ;(B = Math.floor(E / 67108864)), (g[C++] = 67108863 & E)
                  }
                  return B
                }),
                (Q = 26))
              : ((i.prototype.am = function (A, I, g, C, B, Q) {
                  for (var E = 16383 & I, i = I >> 14; --Q >= 0; ) {
                    var o = 16383 & this[A],
                      D = this[A++] >> 14,
                      n = i * o + D * E
                    ;(B =
                      ((o = E * o + ((16383 & n) << 14) + g[C] + B) >> 28) +
                      (n >> 14) +
                      i * D),
                      (g[C++] = 268435455 & o)
                  }
                  return B
                }),
                (Q = 28)),
            (i.prototype.DB = Q),
            (i.prototype.DM = (1 << Q) - 1),
            (i.prototype.DV = 1 << Q),
            (i.prototype.FV = Math.pow(2, 52)),
            (i.prototype.F1 = 52 - Q),
            (i.prototype.F2 = 2 * Q - 52)
          var D,
            n,
            t = new Array()
          for (D = "0".charCodeAt(0), n = 0; n <= 9; ++n) t[D++] = n
          for (D = "a".charCodeAt(0), n = 10; n < 36; ++n) t[D++] = n
          for (D = "A".charCodeAt(0), n = 10; n < 36; ++n) t[D++] = n
          function a(A) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(A)
          }
          function s(A, I) {
            var g = t[A.charCodeAt(I)]
            return null == g ? -1 : g
          }
          function w(A) {
            var I = o()
            return I.fromInt(A), I
          }
          function h(A) {
            var I,
              g = 1
            return (
              0 != (I = A >>> 16) && ((A = I), (g += 16)),
              0 != (I = A >> 8) && ((A = I), (g += 8)),
              0 != (I = A >> 4) && ((A = I), (g += 4)),
              0 != (I = A >> 2) && ((A = I), (g += 2)),
              0 != (I = A >> 1) && ((A = I), (g += 1)),
              g
            )
          }
          function e(A) {
            this.m = A
          }
          function G(A) {
            ;(this.m = A),
              (this.mp = A.invDigit()),
              (this.mpl = 32767 & this.mp),
              (this.mph = this.mp >> 15),
              (this.um = (1 << (A.DB - 15)) - 1),
              (this.mt2 = 2 * A.t)
          }
          function F(A, I) {
            return A & I
          }
          function R(A, I) {
            return A | I
          }
          function r(A, I) {
            return A ^ I
          }
          function N(A, I) {
            return A & ~I
          }
          function y(A) {
            if (0 == A) return -1
            var I = 0
            return (
              0 == (65535 & A) && ((A >>= 16), (I += 16)),
              0 == (255 & A) && ((A >>= 8), (I += 8)),
              0 == (15 & A) && ((A >>= 4), (I += 4)),
              0 == (3 & A) && ((A >>= 2), (I += 2)),
              0 == (1 & A) && ++I,
              I
            )
          }
          function c(A) {
            for (var I = 0; 0 != A; ) (A &= A - 1), ++I
            return I
          }
          function U() {}
          function S(A) {
            return A
          }
          function M(A) {
            ;(this.r2 = o()),
              (this.q3 = o()),
              i.ONE.dlShiftTo(2 * A.t, this.r2),
              (this.mu = this.r2.divide(A)),
              (this.m = A)
          }
          ;(e.prototype.convert = function (A) {
            return A.s < 0 || A.compareTo(this.m) >= 0 ? A.mod(this.m) : A
          }),
            (e.prototype.revert = function (A) {
              return A
            }),
            (e.prototype.reduce = function (A) {
              A.divRemTo(this.m, null, A)
            }),
            (e.prototype.mulTo = function (A, I, g) {
              A.multiplyTo(I, g), this.reduce(g)
            }),
            (e.prototype.sqrTo = function (A, I) {
              A.squareTo(I), this.reduce(I)
            }),
            (G.prototype.convert = function (A) {
              var I = o()
              return (
                A.abs().dlShiftTo(this.m.t, I),
                I.divRemTo(this.m, null, I),
                A.s < 0 && I.compareTo(i.ZERO) > 0 && this.m.subTo(I, I),
                I
              )
            }),
            (G.prototype.revert = function (A) {
              var I = o()
              return A.copyTo(I), this.reduce(I), I
            }),
            (G.prototype.reduce = function (A) {
              for (; A.t <= this.mt2; ) A[A.t++] = 0
              for (var I = 0; I < this.m.t; ++I) {
                var g = 32767 & A[I],
                  C =
                    (g * this.mpl +
                      (((g * this.mph + (A[I] >> 15) * this.mpl) & this.um) <<
                        15)) &
                    A.DM
                for (
                  A[(g = I + this.m.t)] += this.m.am(0, C, A, I, 0, this.m.t);
                  A[g] >= A.DV;

                )
                  (A[g] -= A.DV), A[++g]++
              }
              A.clamp(),
                A.drShiftTo(this.m.t, A),
                A.compareTo(this.m) >= 0 && A.subTo(this.m, A)
            }),
            (G.prototype.mulTo = function (A, I, g) {
              A.multiplyTo(I, g), this.reduce(g)
            }),
            (G.prototype.sqrTo = function (A, I) {
              A.squareTo(I), this.reduce(I)
            }),
            (i.prototype.copyTo = function (A) {
              for (var I = this.t - 1; I >= 0; --I) A[I] = this[I]
              ;(A.t = this.t), (A.s = this.s)
            }),
            (i.prototype.fromInt = function (A) {
              ;(this.t = 1),
                (this.s = A < 0 ? -1 : 0),
                A > 0
                  ? (this[0] = A)
                  : A < -1
                  ? (this[0] = A + this.DV)
                  : (this.t = 0)
            }),
            (i.prototype.fromString = function (A, I) {
              var g
              if (16 == I) g = 4
              else if (8 == I) g = 3
              else if (256 == I) g = 8
              else if (2 == I) g = 1
              else if (32 == I) g = 5
              else {
                if (4 != I) return void this.fromRadix(A, I)
                g = 2
              }
              ;(this.t = 0), (this.s = 0)
              for (var C = A.length, B = !1, Q = 0; --C >= 0; ) {
                var E = 8 == g ? 255 & A[C] : s(A, C)
                E < 0
                  ? "-" == A.charAt(C) && (B = !0)
                  : ((B = !1),
                    0 == Q
                      ? (this[this.t++] = E)
                      : Q + g > this.DB
                      ? ((this[this.t - 1] |=
                          (E & ((1 << (this.DB - Q)) - 1)) << Q),
                        (this[this.t++] = E >> (this.DB - Q)))
                      : (this[this.t - 1] |= E << Q),
                    (Q += g) >= this.DB && (Q -= this.DB))
              }
              8 == g &&
                0 != (128 & A[0]) &&
                ((this.s = -1),
                Q > 0 && (this[this.t - 1] |= ((1 << (this.DB - Q)) - 1) << Q)),
                this.clamp(),
                B && i.ZERO.subTo(this, this)
            }),
            (i.prototype.clamp = function () {
              for (
                var A = this.s & this.DM;
                this.t > 0 && this[this.t - 1] == A;

              )
                --this.t
            }),
            (i.prototype.dlShiftTo = function (A, I) {
              var g
              for (g = this.t - 1; g >= 0; --g) I[g + A] = this[g]
              for (g = A - 1; g >= 0; --g) I[g] = 0
              ;(I.t = this.t + A), (I.s = this.s)
            }),
            (i.prototype.drShiftTo = function (A, I) {
              for (var g = A; g < this.t; ++g) I[g - A] = this[g]
              ;(I.t = Math.max(this.t - A, 0)), (I.s = this.s)
            }),
            (i.prototype.lShiftTo = function (A, I) {
              var g,
                C = A % this.DB,
                B = this.DB - C,
                Q = (1 << B) - 1,
                E = Math.floor(A / this.DB),
                i = (this.s << C) & this.DM
              for (g = this.t - 1; g >= 0; --g)
                (I[g + E + 1] = (this[g] >> B) | i), (i = (this[g] & Q) << C)
              for (g = E - 1; g >= 0; --g) I[g] = 0
              ;(I[E] = i), (I.t = this.t + E + 1), (I.s = this.s), I.clamp()
            }),
            (i.prototype.rShiftTo = function (A, I) {
              I.s = this.s
              var g = Math.floor(A / this.DB)
              if (g >= this.t) I.t = 0
              else {
                var C = A % this.DB,
                  B = this.DB - C,
                  Q = (1 << C) - 1
                I[0] = this[g] >> C
                for (var E = g + 1; E < this.t; ++E)
                  (I[E - g - 1] |= (this[E] & Q) << B),
                    (I[E - g] = this[E] >> C)
                C > 0 && (I[this.t - g - 1] |= (this.s & Q) << B),
                  (I.t = this.t - g),
                  I.clamp()
              }
            }),
            (i.prototype.subTo = function (A, I) {
              for (var g = 0, C = 0, B = Math.min(A.t, this.t); g < B; )
                (C += this[g] - A[g]), (I[g++] = C & this.DM), (C >>= this.DB)
              if (A.t < this.t) {
                for (C -= A.s; g < this.t; )
                  (C += this[g]), (I[g++] = C & this.DM), (C >>= this.DB)
                C += this.s
              } else {
                for (C += this.s; g < A.t; )
                  (C -= A[g]), (I[g++] = C & this.DM), (C >>= this.DB)
                C -= A.s
              }
              ;(I.s = C < 0 ? -1 : 0),
                C < -1 ? (I[g++] = this.DV + C) : C > 0 && (I[g++] = C),
                (I.t = g),
                I.clamp()
            }),
            (i.prototype.multiplyTo = function (A, I) {
              var g = this.abs(),
                C = A.abs(),
                B = g.t
              for (I.t = B + C.t; --B >= 0; ) I[B] = 0
              for (B = 0; B < C.t; ++B) I[B + g.t] = g.am(0, C[B], I, B, 0, g.t)
              ;(I.s = 0), I.clamp(), this.s != A.s && i.ZERO.subTo(I, I)
            }),
            (i.prototype.squareTo = function (A) {
              for (var I = this.abs(), g = (A.t = 2 * I.t); --g >= 0; ) A[g] = 0
              for (g = 0; g < I.t - 1; ++g) {
                var C = I.am(g, I[g], A, 2 * g, 0, 1)
                ;(A[g + I.t] += I.am(
                  g + 1,
                  2 * I[g],
                  A,
                  2 * g + 1,
                  C,
                  I.t - g - 1
                )) >= I.DV && ((A[g + I.t] -= I.DV), (A[g + I.t + 1] = 1))
              }
              A.t > 0 && (A[A.t - 1] += I.am(g, I[g], A, 2 * g, 0, 1)),
                (A.s = 0),
                A.clamp()
            }),
            (i.prototype.divRemTo = function (A, I, g) {
              var C = A.abs()
              if (!(C.t <= 0)) {
                var B = this.abs()
                if (B.t < C.t)
                  return (
                    null != I && I.fromInt(0),
                    void (null != g && this.copyTo(g))
                  )
                null == g && (g = o())
                var Q = o(),
                  E = this.s,
                  D = A.s,
                  n = this.DB - h(C[C.t - 1])
                n > 0
                  ? (C.lShiftTo(n, Q), B.lShiftTo(n, g))
                  : (C.copyTo(Q), B.copyTo(g))
                var t = Q.t,
                  a = Q[t - 1]
                if (0 != a) {
                  var s =
                      a * (1 << this.F1) + (t > 1 ? Q[t - 2] >> this.F2 : 0),
                    w = this.FV / s,
                    e = (1 << this.F1) / s,
                    G = 1 << this.F2,
                    F = g.t,
                    R = F - t,
                    r = null == I ? o() : I
                  for (
                    Q.dlShiftTo(R, r),
                      g.compareTo(r) >= 0 && ((g[g.t++] = 1), g.subTo(r, g)),
                      i.ONE.dlShiftTo(t, r),
                      r.subTo(Q, Q);
                    Q.t < t;

                  )
                    Q[Q.t++] = 0
                  for (; --R >= 0; ) {
                    var N =
                      g[--F] == a
                        ? this.DM
                        : Math.floor(g[F] * w + (g[F - 1] + G) * e)
                    if ((g[F] += Q.am(0, N, g, R, 0, t)) < N)
                      for (Q.dlShiftTo(R, r), g.subTo(r, g); g[F] < --N; )
                        g.subTo(r, g)
                  }
                  null != I &&
                    (g.drShiftTo(t, I), E != D && i.ZERO.subTo(I, I)),
                    (g.t = t),
                    g.clamp(),
                    n > 0 && g.rShiftTo(n, g),
                    E < 0 && i.ZERO.subTo(g, g)
                }
              }
            }),
            (i.prototype.invDigit = function () {
              if (this.t < 1) return 0
              var A = this[0]
              if (0 == (1 & A)) return 0
              var I = 3 & A
              return (I =
                ((I =
                  ((I =
                    ((I = (I * (2 - (15 & A) * I)) & 15) *
                      (2 - (255 & A) * I)) &
                    255) *
                    (2 - (((65535 & A) * I) & 65535))) &
                  65535) *
                  (2 - ((A * I) % this.DV))) %
                this.DV) > 0
                ? this.DV - I
                : -I
            }),
            (i.prototype.isEven = function () {
              return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }),
            (i.prototype.exp = function (A, I) {
              if (A > 4294967295 || A < 1) return i.ONE
              var g = o(),
                C = o(),
                B = I.convert(this),
                Q = h(A) - 1
              for (B.copyTo(g); --Q >= 0; )
                if ((I.sqrTo(g, C), (A & (1 << Q)) > 0)) I.mulTo(C, B, g)
                else {
                  var E = g
                  ;(g = C), (C = E)
                }
              return I.revert(g)
            }),
            (i.prototype.toString = function (A) {
              if (this.s < 0) return "-" + this.negate().toString(A)
              var I
              if (16 == A) I = 4
              else if (8 == A) I = 3
              else if (2 == A) I = 1
              else if (32 == A) I = 5
              else {
                if (4 != A) return this.toRadix(A)
                I = 2
              }
              var g,
                C = (1 << I) - 1,
                B = !1,
                Q = "",
                E = this.t,
                i = this.DB - ((E * this.DB) % I)
              if (E-- > 0)
                for (
                  i < this.DB &&
                  (g = this[E] >> i) > 0 &&
                  ((B = !0), (Q = a(g)));
                  E >= 0;

                )
                  i < I
                    ? ((g = (this[E] & ((1 << i) - 1)) << (I - i)),
                      (g |= this[--E] >> (i += this.DB - I)))
                    : ((g = (this[E] >> (i -= I)) & C),
                      i <= 0 && ((i += this.DB), --E)),
                    g > 0 && (B = !0),
                    B && (Q += a(g))
              return B ? Q : "0"
            }),
            (i.prototype.negate = function () {
              var A = o()
              return i.ZERO.subTo(this, A), A
            }),
            (i.prototype.abs = function () {
              return this.s < 0 ? this.negate() : this
            }),
            (i.prototype.compareTo = function (A) {
              var I = this.s - A.s
              if (0 != I) return I
              var g = this.t
              if (0 != (I = g - A.t)) return this.s < 0 ? -I : I
              for (; --g >= 0; ) if (0 != (I = this[g] - A[g])) return I
              return 0
            }),
            (i.prototype.bitLength = function () {
              return this.t <= 0
                ? 0
                : this.DB * (this.t - 1) +
                    h(this[this.t - 1] ^ (this.s & this.DM))
            }),
            (i.prototype.mod = function (A) {
              var I = o()
              return (
                this.abs().divRemTo(A, null, I),
                this.s < 0 && I.compareTo(i.ZERO) > 0 && A.subTo(I, I),
                I
              )
            }),
            (i.prototype.modPowInt = function (A, I) {
              var g
              return (
                (g = A < 256 || I.isEven() ? new e(I) : new G(I)),
                this.exp(A, g)
              )
            }),
            (i.ZERO = w(0)),
            (i.ONE = w(1)),
            (U.prototype.convert = S),
            (U.prototype.revert = S),
            (U.prototype.mulTo = function (A, I, g) {
              A.multiplyTo(I, g)
            }),
            (U.prototype.sqrTo = function (A, I) {
              A.squareTo(I)
            }),
            (M.prototype.convert = function (A) {
              if (A.s < 0 || A.t > 2 * this.m.t) return A.mod(this.m)
              if (A.compareTo(this.m) < 0) return A
              var I = o()
              return A.copyTo(I), this.reduce(I), I
            }),
            (M.prototype.revert = function (A) {
              return A
            }),
            (M.prototype.reduce = function (A) {
              for (
                A.drShiftTo(this.m.t - 1, this.r2),
                  A.t > this.m.t + 1 && ((A.t = this.m.t + 1), A.clamp()),
                  this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                  this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                A.compareTo(this.r2) < 0;

              )
                A.dAddOffset(1, this.m.t + 1)
              for (A.subTo(this.r2, A); A.compareTo(this.m) >= 0; )
                A.subTo(this.m, A)
            }),
            (M.prototype.mulTo = function (A, I, g) {
              A.multiplyTo(I, g), this.reduce(g)
            }),
            (M.prototype.sqrTo = function (A, I) {
              A.squareTo(I), this.reduce(I)
            })
          var k = [
              2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
              61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
              137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197,
              199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271,
              277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353,
              359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
              439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
              521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
              607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677,
              683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769,
              773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859,
              863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
              967, 971, 977, 983, 991, 997
            ],
            J = (1 << 26) / k[k.length - 1]
          ;(i.prototype.chunkSize = function (A) {
            return Math.floor((Math.LN2 * this.DB) / Math.log(A))
          }),
            (i.prototype.toRadix = function (A) {
              if (
                (null == A && (A = 10), 0 == this.signum() || A < 2 || A > 36)
              )
                return "0"
              var I = this.chunkSize(A),
                g = Math.pow(A, I),
                C = w(g),
                B = o(),
                Q = o(),
                E = ""
              for (this.divRemTo(C, B, Q); B.signum() > 0; )
                (E = (g + Q.intValue()).toString(A).substr(1) + E),
                  B.divRemTo(C, B, Q)
              return Q.intValue().toString(A) + E
            }),
            (i.prototype.fromRadix = function (A, I) {
              this.fromInt(0), null == I && (I = 10)
              for (
                var g = this.chunkSize(I),
                  C = Math.pow(I, g),
                  B = !1,
                  Q = 0,
                  E = 0,
                  o = 0;
                o < A.length;
                ++o
              ) {
                var D = s(A, o)
                D < 0
                  ? "-" == A.charAt(o) && 0 == this.signum() && (B = !0)
                  : ((E = I * E + D),
                    ++Q >= g &&
                      (this.dMultiply(C),
                      this.dAddOffset(E, 0),
                      (Q = 0),
                      (E = 0)))
              }
              Q > 0 && (this.dMultiply(Math.pow(I, Q)), this.dAddOffset(E, 0)),
                B && i.ZERO.subTo(this, this)
            }),
            (i.prototype.fromNumber = function (A, I, g) {
              if ("number" == typeof I)
                if (A < 2) this.fromInt(1)
                else
                  for (
                    this.fromNumber(A, g),
                      this.testBit(A - 1) ||
                        this.bitwiseTo(i.ONE.shiftLeft(A - 1), R, this),
                      this.isEven() && this.dAddOffset(1, 0);
                    !this.isProbablePrime(I);

                  )
                    this.dAddOffset(2, 0),
                      this.bitLength() > A &&
                        this.subTo(i.ONE.shiftLeft(A - 1), this)
              else {
                var C = new Array(),
                  B = 7 & A
                ;(C.length = 1 + (A >> 3)),
                  I.nextBytes(C),
                  B > 0 ? (C[0] &= (1 << B) - 1) : (C[0] = 0),
                  this.fromString(C, 256)
              }
            }),
            (i.prototype.bitwiseTo = function (A, I, g) {
              var C,
                B,
                Q = Math.min(A.t, this.t)
              for (C = 0; C < Q; ++C) g[C] = I(this[C], A[C])
              if (A.t < this.t) {
                for (B = A.s & this.DM, C = Q; C < this.t; ++C)
                  g[C] = I(this[C], B)
                g.t = this.t
              } else {
                for (B = this.s & this.DM, C = Q; C < A.t; ++C)
                  g[C] = I(B, A[C])
                g.t = A.t
              }
              ;(g.s = I(this.s, A.s)), g.clamp()
            }),
            (i.prototype.changeBit = function (A, I) {
              var g = i.ONE.shiftLeft(A)
              return this.bitwiseTo(g, I, g), g
            }),
            (i.prototype.addTo = function (A, I) {
              for (var g = 0, C = 0, B = Math.min(A.t, this.t); g < B; )
                (C += this[g] + A[g]), (I[g++] = C & this.DM), (C >>= this.DB)
              if (A.t < this.t) {
                for (C += A.s; g < this.t; )
                  (C += this[g]), (I[g++] = C & this.DM), (C >>= this.DB)
                C += this.s
              } else {
                for (C += this.s; g < A.t; )
                  (C += A[g]), (I[g++] = C & this.DM), (C >>= this.DB)
                C += A.s
              }
              ;(I.s = C < 0 ? -1 : 0),
                C > 0 ? (I[g++] = C) : C < -1 && (I[g++] = this.DV + C),
                (I.t = g),
                I.clamp()
            }),
            (i.prototype.dMultiply = function (A) {
              ;(this[this.t] = this.am(0, A - 1, this, 0, 0, this.t)),
                ++this.t,
                this.clamp()
            }),
            (i.prototype.dAddOffset = function (A, I) {
              if (0 != A) {
                for (; this.t <= I; ) this[this.t++] = 0
                for (this[I] += A; this[I] >= this.DV; )
                  (this[I] -= this.DV),
                    ++I >= this.t && (this[this.t++] = 0),
                    ++this[I]
              }
            }),
            (i.prototype.multiplyLowerTo = function (A, I, g) {
              var C,
                B = Math.min(this.t + A.t, I)
              for (g.s = 0, g.t = B; B > 0; ) g[--B] = 0
              for (C = g.t - this.t; B < C; ++B)
                g[B + this.t] = this.am(0, A[B], g, B, 0, this.t)
              for (C = Math.min(A.t, I); B < C; ++B)
                this.am(0, A[B], g, B, 0, I - B)
              g.clamp()
            }),
            (i.prototype.multiplyUpperTo = function (A, I, g) {
              --I
              var C = (g.t = this.t + A.t - I)
              for (g.s = 0; --C >= 0; ) g[C] = 0
              for (C = Math.max(I - this.t, 0); C < A.t; ++C)
                g[this.t + C - I] = this.am(
                  I - C,
                  A[C],
                  g,
                  0,
                  0,
                  this.t + C - I
                )
              g.clamp(), g.drShiftTo(1, g)
            }),
            (i.prototype.modInt = function (A) {
              if (A <= 0) return 0
              var I = this.DV % A,
                g = this.s < 0 ? A - 1 : 0
              if (this.t > 0)
                if (0 == I) g = this[0] % A
                else
                  for (var C = this.t - 1; C >= 0; --C)
                    g = (I * g + this[C]) % A
              return g
            }),
            (i.prototype.millerRabin = function (A) {
              var I = this.subtract(i.ONE),
                g = I.getLowestSetBit()
              if (g <= 0) return !1
              var C = I.shiftRight(g)
              ;(A = (A + 1) >> 1) > k.length && (A = k.length)
              for (var B = o(), Q = 0; Q < A; ++Q) {
                B.fromInt(k[Math.floor(Math.random() * k.length)])
                var E = B.modPow(C, this)
                if (0 != E.compareTo(i.ONE) && 0 != E.compareTo(I)) {
                  for (var D = 1; D++ < g && 0 != E.compareTo(I); )
                    if (0 == (E = E.modPowInt(2, this)).compareTo(i.ONE))
                      return !1
                  if (0 != E.compareTo(I)) return !1
                }
              }
              return !0
            }),
            (i.prototype.clone = function () {
              var A = o()
              return this.copyTo(A), A
            }),
            (i.prototype.intValue = function () {
              if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV
                if (0 == this.t) return -1
              } else {
                if (1 == this.t) return this[0]
                if (0 == this.t) return 0
              }
              return (
                ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0]
              )
            }),
            (i.prototype.byteValue = function () {
              return 0 == this.t ? this.s : (this[0] << 24) >> 24
            }),
            (i.prototype.shortValue = function () {
              return 0 == this.t ? this.s : (this[0] << 16) >> 16
            }),
            (i.prototype.signum = function () {
              return this.s < 0
                ? -1
                : this.t <= 0 || (1 == this.t && this[0] <= 0)
                ? 0
                : 1
            }),
            (i.prototype.toByteArray = function () {
              var A = this.t,
                I = new Array()
              I[0] = this.s
              var g,
                C = this.DB - ((A * this.DB) % 8),
                B = 0
              if (A-- > 0)
                for (
                  C < this.DB &&
                  (g = this[A] >> C) != (this.s & this.DM) >> C &&
                  (I[B++] = g | (this.s << (this.DB - C)));
                  A >= 0;

                )
                  C < 8
                    ? ((g = (this[A] & ((1 << C) - 1)) << (8 - C)),
                      (g |= this[--A] >> (C += this.DB - 8)))
                    : ((g = (this[A] >> (C -= 8)) & 255),
                      C <= 0 && ((C += this.DB), --A)),
                    0 != (128 & g) && (g |= -256),
                    0 == B && (128 & this.s) != (128 & g) && ++B,
                    (B > 0 || g != this.s) && (I[B++] = g)
              return I
            }),
            (i.prototype.equals = function (A) {
              return 0 == this.compareTo(A)
            }),
            (i.prototype.min = function (A) {
              return this.compareTo(A) < 0 ? this : A
            }),
            (i.prototype.max = function (A) {
              return this.compareTo(A) > 0 ? this : A
            }),
            (i.prototype.and = function (A) {
              var I = o()
              return this.bitwiseTo(A, F, I), I
            }),
            (i.prototype.or = function (A) {
              var I = o()
              return this.bitwiseTo(A, R, I), I
            }),
            (i.prototype.xor = function (A) {
              var I = o()
              return this.bitwiseTo(A, r, I), I
            }),
            (i.prototype.andNot = function (A) {
              var I = o()
              return this.bitwiseTo(A, N, I), I
            }),
            (i.prototype.not = function () {
              for (var A = o(), I = 0; I < this.t; ++I)
                A[I] = this.DM & ~this[I]
              return (A.t = this.t), (A.s = ~this.s), A
            }),
            (i.prototype.shiftLeft = function (A) {
              var I = o()
              return A < 0 ? this.rShiftTo(-A, I) : this.lShiftTo(A, I), I
            }),
            (i.prototype.shiftRight = function (A) {
              var I = o()
              return A < 0 ? this.lShiftTo(-A, I) : this.rShiftTo(A, I), I
            }),
            (i.prototype.getLowestSetBit = function () {
              for (var A = 0; A < this.t; ++A)
                if (0 != this[A]) return A * this.DB + y(this[A])
              return this.s < 0 ? this.t * this.DB : -1
            }),
            (i.prototype.bitCount = function () {
              for (var A = 0, I = this.s & this.DM, g = 0; g < this.t; ++g)
                A += c(this[g] ^ I)
              return A
            }),
            (i.prototype.testBit = function (A) {
              var I = Math.floor(A / this.DB)
              return I >= this.t
                ? 0 != this.s
                : 0 != (this[I] & (1 << A % this.DB))
            }),
            (i.prototype.setBit = function (A) {
              return this.changeBit(A, R)
            }),
            (i.prototype.clearBit = function (A) {
              return this.changeBit(A, N)
            }),
            (i.prototype.flipBit = function (A) {
              return this.changeBit(A, r)
            }),
            (i.prototype.add = function (A) {
              var I = o()
              return this.addTo(A, I), I
            }),
            (i.prototype.subtract = function (A) {
              var I = o()
              return this.subTo(A, I), I
            }),
            (i.prototype.multiply = function (A) {
              var I = o()
              return this.multiplyTo(A, I), I
            }),
            (i.prototype.divide = function (A) {
              var I = o()
              return this.divRemTo(A, I, null), I
            }),
            (i.prototype.remainder = function (A) {
              var I = o()
              return this.divRemTo(A, null, I), I
            }),
            (i.prototype.divideAndRemainder = function (A) {
              var I = o(),
                g = o()
              return this.divRemTo(A, I, g), new Array(I, g)
            }),
            (i.prototype.modPow = function (A, I) {
              var g,
                C,
                B = A.bitLength(),
                Q = w(1)
              if (B <= 0) return Q
              ;(g = B < 18 ? 1 : B < 48 ? 3 : B < 144 ? 4 : B < 768 ? 5 : 6),
                (C = B < 8 ? new e(I) : I.isEven() ? new M(I) : new G(I))
              var E = new Array(),
                i = 3,
                D = g - 1,
                n = (1 << g) - 1
              if (((E[1] = C.convert(this)), g > 1)) {
                var t = o()
                for (C.sqrTo(E[1], t); i <= n; )
                  (E[i] = o()), C.mulTo(t, E[i - 2], E[i]), (i += 2)
              }
              var a,
                s,
                F = A.t - 1,
                R = !0,
                r = o()
              for (B = h(A[F]) - 1; F >= 0; ) {
                for (
                  B >= D
                    ? (a = (A[F] >> (B - D)) & n)
                    : ((a = (A[F] & ((1 << (B + 1)) - 1)) << (D - B)),
                      F > 0 && (a |= A[F - 1] >> (this.DB + B - D))),
                    i = g;
                  0 == (1 & a);

                )
                  (a >>= 1), --i
                if (((B -= i) < 0 && ((B += this.DB), --F), R))
                  E[a].copyTo(Q), (R = !1)
                else {
                  for (; i > 1; ) C.sqrTo(Q, r), C.sqrTo(r, Q), (i -= 2)
                  i > 0 ? C.sqrTo(Q, r) : ((s = Q), (Q = r), (r = s)),
                    C.mulTo(r, E[a], Q)
                }
                for (; F >= 0 && 0 == (A[F] & (1 << B)); )
                  C.sqrTo(Q, r),
                    (s = Q),
                    (Q = r),
                    (r = s),
                    --B < 0 && ((B = this.DB - 1), --F)
              }
              return C.revert(Q)
            }),
            (i.prototype.modInverse = function (A) {
              var I = A.isEven()
              if ((this.isEven() && I) || 0 == A.signum()) return i.ZERO
              for (
                var g = A.clone(),
                  C = this.clone(),
                  B = w(1),
                  Q = w(0),
                  E = w(0),
                  o = w(1);
                0 != g.signum();

              ) {
                for (; g.isEven(); )
                  g.rShiftTo(1, g),
                    I
                      ? ((B.isEven() && Q.isEven()) ||
                          (B.addTo(this, B), Q.subTo(A, Q)),
                        B.rShiftTo(1, B))
                      : Q.isEven() || Q.subTo(A, Q),
                    Q.rShiftTo(1, Q)
                for (; C.isEven(); )
                  C.rShiftTo(1, C),
                    I
                      ? ((E.isEven() && o.isEven()) ||
                          (E.addTo(this, E), o.subTo(A, o)),
                        E.rShiftTo(1, E))
                      : o.isEven() || o.subTo(A, o),
                    o.rShiftTo(1, o)
                g.compareTo(C) >= 0
                  ? (g.subTo(C, g), I && B.subTo(E, B), Q.subTo(o, Q))
                  : (C.subTo(g, C), I && E.subTo(B, E), o.subTo(Q, o))
              }
              return 0 != C.compareTo(i.ONE)
                ? i.ZERO
                : o.compareTo(A) >= 0
                ? o.subtract(A)
                : o.signum() < 0
                ? (o.addTo(A, o), o.signum() < 0 ? o.add(A) : o)
                : o
            }),
            (i.prototype.pow = function (A) {
              return this.exp(A, new U())
            }),
            (i.prototype.gcd = function (A) {
              var I = this.s < 0 ? this.negate() : this.clone(),
                g = A.s < 0 ? A.negate() : A.clone()
              if (I.compareTo(g) < 0) {
                var C = I
                ;(I = g), (g = C)
              }
              var B = I.getLowestSetBit(),
                Q = g.getLowestSetBit()
              if (Q < 0) return I
              for (
                B < Q && (Q = B), Q > 0 && (I.rShiftTo(Q, I), g.rShiftTo(Q, g));
                I.signum() > 0;

              )
                (B = I.getLowestSetBit()) > 0 && I.rShiftTo(B, I),
                  (B = g.getLowestSetBit()) > 0 && g.rShiftTo(B, g),
                  I.compareTo(g) >= 0
                    ? (I.subTo(g, I), I.rShiftTo(1, I))
                    : (g.subTo(I, g), g.rShiftTo(1, g))
              return Q > 0 && g.lShiftTo(Q, g), g
            }),
            (i.prototype.isProbablePrime = function (A) {
              var I,
                g = this.abs()
              if (1 == g.t && g[0] <= k[k.length - 1]) {
                for (I = 0; I < k.length; ++I) if (g[0] == k[I]) return !0
                return !1
              }
              if (g.isEven()) return !1
              for (I = 1; I < k.length; ) {
                for (var C = k[I], B = I + 1; B < k.length && C < J; )
                  C *= k[B++]
                for (C = g.modInt(C); I < B; ) if (C % k[I++] == 0) return !1
              }
              return g.millerRabin(A)
            }),
            (i.prototype.square = function () {
              var A = o()
              return this.squareTo(A), A
            })
          var l = i
          if (
            ((l.prototype.IsNegative = function () {
              return -1 == this.compareTo(l.ZERO)
            }),
            (l.op_Equality = function (A, I) {
              return 0 == A.compareTo(I)
            }),
            (l.op_Inequality = function (A, I) {
              return 0 != A.compareTo(I)
            }),
            (l.op_GreaterThan = function (A, I) {
              return A.compareTo(I) > 0
            }),
            (l.op_LessThan = function (A, I) {
              return A.compareTo(I) < 0
            }),
            (l.op_Addition = function (A, I) {
              return new l(A).add(new l(I))
            }),
            (l.op_Subtraction = function (A, I) {
              return new l(A).subtract(new l(I))
            }),
            (l.Int128Mul = function (A, I) {
              return new l(A).multiply(new l(I))
            }),
            (l.op_Division = function (A, I) {
              return A.divide(I)
            }),
            (l.prototype.ToDouble = function () {
              return parseFloat(this.toString())
            }),
            void 0 === L)
          )
            var L = function (A, I) {
              var g
              if (void 0 === Object.getOwnPropertyNames) {
                for (g in I.prototype)
                  (void 0 !== A.prototype[g] &&
                    A.prototype[g] != Object.prototype[g]) ||
                    (A.prototype[g] = I.prototype[g])
                for (g in I) void 0 === A[g] && (A[g] = I[g])
                A.$baseCtor = I
              } else {
                for (
                  var C = Object.getOwnPropertyNames(I.prototype), B = 0;
                  B < C.length;
                  B++
                )
                  void 0 ===
                    Object.getOwnPropertyDescriptor(A.prototype, C[B]) &&
                    Object.defineProperty(
                      A.prototype,
                      C[B],
                      Object.getOwnPropertyDescriptor(I.prototype, C[B])
                    )
                for (g in I) void 0 === A[g] && (A[g] = I[g])
                A.$baseCtor = I
              }
            }
          ;(g.Path = function () {
            return []
          }),
            (g.Paths = function () {
              return []
            }),
            (g.DoublePoint = function () {
              var A = arguments
              ;(this.X = 0),
                (this.Y = 0),
                1 == A.length
                  ? ((this.X = A[0].X), (this.Y = A[0].Y))
                  : 2 == A.length && ((this.X = A[0]), (this.Y = A[1]))
            }),
            (g.DoublePoint0 = function () {
              ;(this.X = 0), (this.Y = 0)
            }),
            (g.DoublePoint1 = function (A) {
              ;(this.X = A.X), (this.Y = A.Y)
            }),
            (g.DoublePoint2 = function (A, I) {
              ;(this.X = A), (this.Y = I)
            }),
            (g.PolyNode = function () {
              ;(this.m_Parent = null),
                (this.m_polygon = new g.Path()),
                (this.m_Index = 0),
                (this.m_jointype = 0),
                (this.m_endtype = 0),
                (this.m_Childs = []),
                (this.IsOpen = !1)
            }),
            (g.PolyNode.prototype.IsHoleNode = function () {
              for (var A = !0, I = this.m_Parent; null !== I; )
                (A = !A), (I = I.m_Parent)
              return A
            }),
            (g.PolyNode.prototype.ChildCount = function () {
              return this.m_Childs.length
            }),
            (g.PolyNode.prototype.Contour = function () {
              return this.m_polygon
            }),
            (g.PolyNode.prototype.AddChild = function (A) {
              var I = this.m_Childs.length
              this.m_Childs.push(A), (A.m_Parent = this), (A.m_Index = I)
            }),
            (g.PolyNode.prototype.GetNext = function () {
              return this.m_Childs.length > 0
                ? this.m_Childs[0]
                : this.GetNextSiblingUp()
            }),
            (g.PolyNode.prototype.GetNextSiblingUp = function () {
              return null === this.m_Parent
                ? null
                : this.m_Index == this.m_Parent.m_Childs.length - 1
                ? this.m_Parent.GetNextSiblingUp()
                : this.m_Parent.m_Childs[this.m_Index + 1]
            }),
            (g.PolyNode.prototype.Childs = function () {
              return this.m_Childs
            }),
            (g.PolyNode.prototype.Parent = function () {
              return this.m_Parent
            }),
            (g.PolyNode.prototype.IsHole = function () {
              return this.IsHoleNode()
            }),
            (g.PolyTree = function () {
              ;(this.m_AllPolys = []), g.PolyNode.call(this)
            }),
            (g.PolyTree.prototype.Clear = function () {
              for (var A = 0, I = this.m_AllPolys.length; A < I; A++)
                this.m_AllPolys[A] = null
              ;(this.m_AllPolys.length = 0), (this.m_Childs.length = 0)
            }),
            (g.PolyTree.prototype.GetFirst = function () {
              return this.m_Childs.length > 0 ? this.m_Childs[0] : null
            }),
            (g.PolyTree.prototype.Total = function () {
              return this.m_AllPolys.length
            }),
            L(g.PolyTree, g.PolyNode),
            (g.Math_Abs_Int64 =
              g.Math_Abs_Int32 =
              g.Math_Abs_Double =
                function (A) {
                  return Math.abs(A)
                }),
            (g.Math_Max_Int32_Int32 = function (A, I) {
              return Math.max(A, I)
            }),
            E.msie || E.opera || E.safari
              ? (g.Cast_Int32 = function (A) {
                  return 0 | A
                })
              : (g.Cast_Int32 = function (A) {
                  return ~~A
                }),
            E.chrome
              ? (g.Cast_Int64 = function (A) {
                  return A < -2147483648 || A > 2147483647
                    ? A < 0
                      ? Math.ceil(A)
                      : Math.floor(A)
                    : ~~A
                })
              : E.firefox && "function" == typeof Number.toInteger
              ? (g.Cast_Int64 = function (A) {
                  return Number.toInteger(A)
                })
              : E.msie7 || E.msie8
              ? (g.Cast_Int64 = function (A) {
                  return parseInt(A, 10)
                })
              : E.msie
              ? (g.Cast_Int64 = function (A) {
                  return A < -2147483648 || A > 2147483647
                    ? A < 0
                      ? Math.ceil(A)
                      : Math.floor(A)
                    : 0 | A
                })
              : (g.Cast_Int64 = function (A) {
                  return A < 0 ? Math.ceil(A) : Math.floor(A)
                }),
            (g.Clear = function (A) {
              A.length = 0
            }),
            (g.PI = 3.141592653589793),
            (g.PI2 = 6.283185307179586),
            (g.IntPoint = function () {
              var A = arguments,
                I = A.length
              if (((this.X = 0), (this.Y = 0), 2 == I))
                (this.X = A[0]), (this.Y = A[1])
              else if (1 == I)
                if (A[0] instanceof g.DoublePoint) {
                  var C = A[0]
                  ;(this.X = g.Clipper.Round(C.X)),
                    (this.Y = g.Clipper.Round(C.Y))
                } else {
                  var B = A[0]
                  ;(this.X = B.X), (this.Y = B.Y)
                }
              else (this.X = 0), (this.Y = 0)
            }),
            (g.IntPoint.op_Equality = function (A, I) {
              return A.X == I.X && A.Y == I.Y
            }),
            (g.IntPoint.op_Inequality = function (A, I) {
              return A.X != I.X || A.Y != I.Y
            }),
            (g.IntPoint0 = function () {
              ;(this.X = 0), (this.Y = 0)
            }),
            (g.IntPoint1 = function (A) {
              ;(this.X = A.X), (this.Y = A.Y)
            }),
            (g.IntPoint1dp = function (A) {
              ;(this.X = g.Clipper.Round(A.X)), (this.Y = g.Clipper.Round(A.Y))
            }),
            (g.IntPoint2 = function (A, I) {
              ;(this.X = A), (this.Y = I)
            }),
            (g.IntRect = function () {
              var A = arguments,
                I = A.length
              4 == I
                ? ((this.left = A[0]),
                  (this.top = A[1]),
                  (this.right = A[2]),
                  (this.bottom = A[3]))
                : 1 == I
                ? ((this.left = ir.left),
                  (this.top = ir.top),
                  (this.right = ir.right),
                  (this.bottom = ir.bottom))
                : ((this.left = 0),
                  (this.top = 0),
                  (this.right = 0),
                  (this.bottom = 0))
            }),
            (g.IntRect0 = function () {
              ;(this.left = 0),
                (this.top = 0),
                (this.right = 0),
                (this.bottom = 0)
            }),
            (g.IntRect1 = function (A) {
              ;(this.left = A.left),
                (this.top = A.top),
                (this.right = A.right),
                (this.bottom = A.bottom)
            }),
            (g.IntRect4 = function (A, I, g, C) {
              ;(this.left = A),
                (this.top = I),
                (this.right = g),
                (this.bottom = C)
            }),
            (g.ClipType = {
              ctIntersection: 0,
              ctUnion: 1,
              ctDifference: 2,
              ctXor: 3
            }),
            (g.PolyType = { ptSubject: 0, ptClip: 1 }),
            (g.PolyFillType = {
              pftEvenOdd: 0,
              pftNonZero: 1,
              pftPositive: 2,
              pftNegative: 3
            }),
            (g.JoinType = { jtSquare: 0, jtRound: 1, jtMiter: 2 }),
            (g.EndType = {
              etOpenSquare: 0,
              etOpenRound: 1,
              etOpenButt: 2,
              etClosedLine: 3,
              etClosedPolygon: 4
            }),
            (g.EdgeSide = { esLeft: 0, esRight: 1 }),
            (g.Direction = { dRightToLeft: 0, dLeftToRight: 1 }),
            (g.TEdge = function () {
              ;(this.Bot = new g.IntPoint()),
                (this.Curr = new g.IntPoint()),
                (this.Top = new g.IntPoint()),
                (this.Delta = new g.IntPoint()),
                (this.Dx = 0),
                (this.PolyTyp = g.PolyType.ptSubject),
                (this.Side = g.EdgeSide.esLeft),
                (this.WindDelta = 0),
                (this.WindCnt = 0),
                (this.WindCnt2 = 0),
                (this.OutIdx = 0),
                (this.Next = null),
                (this.Prev = null),
                (this.NextInLML = null),
                (this.NextInAEL = null),
                (this.PrevInAEL = null),
                (this.NextInSEL = null),
                (this.PrevInSEL = null)
            }),
            (g.IntersectNode = function () {
              ;(this.Edge1 = null),
                (this.Edge2 = null),
                (this.Pt = new g.IntPoint())
            }),
            (g.MyIntersectNodeSort = function () {}),
            (g.MyIntersectNodeSort.Compare = function (A, I) {
              return I.Pt.Y - A.Pt.Y
            }),
            (g.LocalMinima = function () {
              ;(this.Y = 0),
                (this.LeftBound = null),
                (this.RightBound = null),
                (this.Next = null)
            }),
            (g.Scanbeam = function () {
              ;(this.Y = 0), (this.Next = null)
            }),
            (g.OutRec = function () {
              ;(this.Idx = 0),
                (this.IsHole = !1),
                (this.IsOpen = !1),
                (this.FirstLeft = null),
                (this.Pts = null),
                (this.BottomPt = null),
                (this.PolyNode = null)
            }),
            (g.OutPt = function () {
              ;(this.Idx = 0),
                (this.Pt = new g.IntPoint()),
                (this.Next = null),
                (this.Prev = null)
            }),
            (g.Join = function () {
              ;(this.OutPt1 = null),
                (this.OutPt2 = null),
                (this.OffPt = new g.IntPoint())
            }),
            (g.ClipperBase = function () {
              ;(this.m_MinimaList = null),
                (this.m_CurrentLM = null),
                (this.m_edges = new Array()),
                (this.m_UseFullRange = !1),
                (this.m_HasOpenPaths = !1),
                (this.PreserveCollinear = !1),
                (this.m_MinimaList = null),
                (this.m_CurrentLM = null),
                (this.m_UseFullRange = !1),
                (this.m_HasOpenPaths = !1)
            }),
            (g.ClipperBase.horizontal = -9007199254740992),
            (g.ClipperBase.Skip = -2),
            (g.ClipperBase.Unassigned = -1),
            (g.ClipperBase.tolerance = 1e-20),
            (g.ClipperBase.loRange = 47453132),
            (g.ClipperBase.hiRange = 0xfffffffffffff),
            (g.ClipperBase.near_zero = function (A) {
              return A > -g.ClipperBase.tolerance && A < g.ClipperBase.tolerance
            }),
            (g.ClipperBase.IsHorizontal = function (A) {
              return 0 === A.Delta.Y
            }),
            (g.ClipperBase.prototype.PointIsVertex = function (A, I) {
              var C = I
              do {
                if (g.IntPoint.op_Equality(C.Pt, A)) return !0
                C = C.Next
              } while (C != I)
              return !1
            }),
            (g.ClipperBase.prototype.PointOnLineSegment = function (
              A,
              I,
              g,
              C
            ) {
              return C
                ? (A.X == I.X && A.Y == I.Y) ||
                    (A.X == g.X && A.Y == g.Y) ||
                    (A.X > I.X == A.X < g.X &&
                      A.Y > I.Y == A.Y < g.Y &&
                      l.op_Equality(
                        l.Int128Mul(A.X - I.X, g.Y - I.Y),
                        l.Int128Mul(g.X - I.X, A.Y - I.Y)
                      ))
                : (A.X == I.X && A.Y == I.Y) ||
                    (A.X == g.X && A.Y == g.Y) ||
                    (A.X > I.X == A.X < g.X &&
                      A.Y > I.Y == A.Y < g.Y &&
                      (A.X - I.X) * (g.Y - I.Y) == (g.X - I.X) * (A.Y - I.Y))
            }),
            (g.ClipperBase.prototype.PointOnPolygon = function (A, I, g) {
              for (var C = I; ; ) {
                if (this.PointOnLineSegment(A, C.Pt, C.Next.Pt, g)) return !0
                if ((C = C.Next) == I) break
              }
              return !1
            }),
            (g.ClipperBase.prototype.SlopesEqual = g.ClipperBase.SlopesEqual =
              function () {
                var A,
                  I,
                  C,
                  B,
                  Q,
                  E,
                  i = arguments,
                  o = i.length
                return 3 == o
                  ? ((A = i[0]),
                    (I = i[1]),
                    i[2]
                      ? l.op_Equality(
                          l.Int128Mul(A.Delta.Y, I.Delta.X),
                          l.Int128Mul(A.Delta.X, I.Delta.Y)
                        )
                      : g.Cast_Int64(A.Delta.Y * I.Delta.X) ==
                        g.Cast_Int64(A.Delta.X * I.Delta.Y))
                  : 4 == o
                  ? ((C = i[0]),
                    (B = i[1]),
                    (Q = i[2]),
                    i[3]
                      ? l.op_Equality(
                          l.Int128Mul(C.Y - B.Y, B.X - Q.X),
                          l.Int128Mul(C.X - B.X, B.Y - Q.Y)
                        )
                      : g.Cast_Int64((C.Y - B.Y) * (B.X - Q.X)) -
                          g.Cast_Int64((C.X - B.X) * (B.Y - Q.Y)) ==
                        0)
                  : ((C = i[0]),
                    (B = i[1]),
                    (Q = i[2]),
                    (E = i[3]),
                    i[4]
                      ? l.op_Equality(
                          l.Int128Mul(C.Y - B.Y, Q.X - E.X),
                          l.Int128Mul(C.X - B.X, Q.Y - E.Y)
                        )
                      : g.Cast_Int64((C.Y - B.Y) * (Q.X - E.X)) -
                          g.Cast_Int64((C.X - B.X) * (Q.Y - E.Y)) ==
                        0)
              }),
            (g.ClipperBase.SlopesEqual3 = function (A, I, C) {
              return C
                ? l.op_Equality(
                    l.Int128Mul(A.Delta.Y, I.Delta.X),
                    l.Int128Mul(A.Delta.X, I.Delta.Y)
                  )
                : g.Cast_Int64(A.Delta.Y * I.Delta.X) ==
                    g.Cast_Int64(A.Delta.X * I.Delta.Y)
            }),
            (g.ClipperBase.SlopesEqual4 = function (A, I, C, B) {
              return B
                ? l.op_Equality(
                    l.Int128Mul(A.Y - I.Y, I.X - C.X),
                    l.Int128Mul(A.X - I.X, I.Y - C.Y)
                  )
                : g.Cast_Int64((A.Y - I.Y) * (I.X - C.X)) -
                    g.Cast_Int64((A.X - I.X) * (I.Y - C.Y)) ==
                    0
            }),
            (g.ClipperBase.SlopesEqual5 = function (A, I, C, B, Q) {
              return Q
                ? l.op_Equality(
                    l.Int128Mul(A.Y - I.Y, C.X - B.X),
                    l.Int128Mul(A.X - I.X, C.Y - B.Y)
                  )
                : g.Cast_Int64((A.Y - I.Y) * (C.X - B.X)) -
                    g.Cast_Int64((A.X - I.X) * (C.Y - B.Y)) ==
                    0
            }),
            (g.ClipperBase.prototype.Clear = function () {
              this.DisposeLocalMinimaList()
              for (var A = 0, I = this.m_edges.length; A < I; ++A) {
                for (var C = 0, B = this.m_edges[A].length; C < B; ++C)
                  this.m_edges[A][C] = null
                g.Clear(this.m_edges[A])
              }
              g.Clear(this.m_edges),
                (this.m_UseFullRange = !1),
                (this.m_HasOpenPaths = !1)
            }),
            (g.ClipperBase.prototype.DisposeLocalMinimaList = function () {
              for (; null !== this.m_MinimaList; ) {
                var A = this.m_MinimaList.Next
                ;(this.m_MinimaList = null), (this.m_MinimaList = A)
              }
              this.m_CurrentLM = null
            }),
            (g.ClipperBase.prototype.RangeTest = function (A, I) {
              I.Value
                ? (A.X > g.ClipperBase.hiRange ||
                    A.Y > g.ClipperBase.hiRange ||
                    -A.X > g.ClipperBase.hiRange ||
                    -A.Y > g.ClipperBase.hiRange) &&
                  g.Error("Coordinate outside allowed range in RangeTest().")
                : (A.X > g.ClipperBase.loRange ||
                    A.Y > g.ClipperBase.loRange ||
                    -A.X > g.ClipperBase.loRange ||
                    -A.Y > g.ClipperBase.loRange) &&
                  ((I.Value = !0), this.RangeTest(A, I))
            }),
            (g.ClipperBase.prototype.InitEdge = function (A, I, g, C) {
              ;(A.Next = I),
                (A.Prev = g),
                (A.Curr.X = C.X),
                (A.Curr.Y = C.Y),
                (A.OutIdx = -1)
            }),
            (g.ClipperBase.prototype.InitEdge2 = function (A, I) {
              A.Curr.Y >= A.Next.Curr.Y
                ? ((A.Bot.X = A.Curr.X),
                  (A.Bot.Y = A.Curr.Y),
                  (A.Top.X = A.Next.Curr.X),
                  (A.Top.Y = A.Next.Curr.Y))
                : ((A.Top.X = A.Curr.X),
                  (A.Top.Y = A.Curr.Y),
                  (A.Bot.X = A.Next.Curr.X),
                  (A.Bot.Y = A.Next.Curr.Y)),
                this.SetDx(A),
                (A.PolyTyp = I)
            }),
            (g.ClipperBase.prototype.FindNextLocMin = function (A) {
              for (var I; ; ) {
                for (
                  ;
                  g.IntPoint.op_Inequality(A.Bot, A.Prev.Bot) ||
                  g.IntPoint.op_Equality(A.Curr, A.Top);

                )
                  A = A.Next
                if (
                  A.Dx != g.ClipperBase.horizontal &&
                  A.Prev.Dx != g.ClipperBase.horizontal
                )
                  break
                for (; A.Prev.Dx == g.ClipperBase.horizontal; ) A = A.Prev
                for (I = A; A.Dx == g.ClipperBase.horizontal; ) A = A.Next
                if (A.Top.Y != A.Prev.Bot.Y) {
                  I.Prev.Bot.X < A.Bot.X && (A = I)
                  break
                }
              }
              return A
            }),
            (g.ClipperBase.prototype.ProcessBound = function (A, I) {
              var C,
                B,
                Q = A,
                E = A
              if (
                (A.Dx == g.ClipperBase.horizontal &&
                  ((B = I ? A.Prev.Bot.X : A.Next.Bot.X),
                  A.Bot.X != B && this.ReverseHorizontal(A)),
                E.OutIdx != g.ClipperBase.Skip)
              )
                if (I) {
                  for (
                    ;
                    E.Top.Y == E.Next.Bot.Y &&
                    E.Next.OutIdx != g.ClipperBase.Skip;

                  )
                    E = E.Next
                  if (
                    E.Dx == g.ClipperBase.horizontal &&
                    E.Next.OutIdx != g.ClipperBase.Skip
                  ) {
                    for (C = E; C.Prev.Dx == g.ClipperBase.horizontal; )
                      C = C.Prev
                    C.Prev.Top.X == E.Next.Top.X
                      ? I || (E = C.Prev)
                      : C.Prev.Top.X > E.Next.Top.X && (E = C.Prev)
                  }
                  for (; A != E; )
                    (A.NextInLML = A.Next),
                      A.Dx == g.ClipperBase.horizontal &&
                        A != Q &&
                        A.Bot.X != A.Prev.Top.X &&
                        this.ReverseHorizontal(A),
                      (A = A.Next)
                  A.Dx == g.ClipperBase.horizontal &&
                    A != Q &&
                    A.Bot.X != A.Prev.Top.X &&
                    this.ReverseHorizontal(A),
                    (E = E.Next)
                } else {
                  for (
                    ;
                    E.Top.Y == E.Prev.Bot.Y &&
                    E.Prev.OutIdx != g.ClipperBase.Skip;

                  )
                    E = E.Prev
                  if (
                    E.Dx == g.ClipperBase.horizontal &&
                    E.Prev.OutIdx != g.ClipperBase.Skip
                  ) {
                    for (C = E; C.Next.Dx == g.ClipperBase.horizontal; )
                      C = C.Next
                    C.Next.Top.X == E.Prev.Top.X
                      ? I || (E = C.Next)
                      : C.Next.Top.X > E.Prev.Top.X && (E = C.Next)
                  }
                  for (; A != E; )
                    (A.NextInLML = A.Prev),
                      A.Dx == g.ClipperBase.horizontal &&
                        A != Q &&
                        A.Bot.X != A.Next.Top.X &&
                        this.ReverseHorizontal(A),
                      (A = A.Prev)
                  A.Dx == g.ClipperBase.horizontal &&
                    A != Q &&
                    A.Bot.X != A.Next.Top.X &&
                    this.ReverseHorizontal(A),
                    (E = E.Prev)
                }
              if (E.OutIdx == g.ClipperBase.Skip) {
                if (((A = E), I)) {
                  for (; A.Top.Y == A.Next.Bot.Y; ) A = A.Next
                  for (; A != E && A.Dx == g.ClipperBase.horizontal; )
                    A = A.Prev
                } else {
                  for (; A.Top.Y == A.Prev.Bot.Y; ) A = A.Prev
                  for (; A != E && A.Dx == g.ClipperBase.horizontal; )
                    A = A.Next
                }
                if (A == E) E = I ? A.Next : A.Prev
                else {
                  A = I ? E.Next : E.Prev
                  var i = new g.LocalMinima()
                  ;(i.Next = null),
                    (i.Y = A.Bot.Y),
                    (i.LeftBound = null),
                    (i.RightBound = A),
                    (i.RightBound.WindDelta = 0),
                    (E = this.ProcessBound(i.RightBound, I)),
                    this.InsertLocalMinima(i)
                }
              }
              return E
            }),
            (g.ClipperBase.prototype.AddPath = function (A, I, C) {
              C ||
                I != g.PolyType.ptClip ||
                g.Error("AddPath: Open paths must be subject.")
              var B = A.length - 1
              if (C) for (; B > 0 && g.IntPoint.op_Equality(A[B], A[0]); ) --B
              for (; B > 0 && g.IntPoint.op_Equality(A[B], A[B - 1]); ) --B
              if ((C && B < 2) || (!C && B < 1)) return !1
              for (var Q = new Array(), E = 0; E <= B; E++)
                Q.push(new g.TEdge())
              var i = !0
              ;(Q[1].Curr.X = A[1].X), (Q[1].Curr.Y = A[1].Y)
              var o,
                D = { Value: this.m_UseFullRange }
              for (
                this.RangeTest(A[0], D),
                  this.m_UseFullRange = D.Value,
                  D.Value = this.m_UseFullRange,
                  this.RangeTest(A[B], D),
                  this.m_UseFullRange = D.Value,
                  this.InitEdge(Q[0], Q[1], Q[B], A[0]),
                  this.InitEdge(Q[B], Q[0], Q[B - 1], A[B]),
                  E = B - 1;
                E >= 1;
                --E
              )
                (D.Value = this.m_UseFullRange),
                  this.RangeTest(A[E], D),
                  (this.m_UseFullRange = D.Value),
                  this.InitEdge(Q[E], Q[E + 1], Q[E - 1], A[E])
              for (var n = Q[0], t = n, a = n; ; )
                if (g.IntPoint.op_Equality(t.Curr, t.Next.Curr)) {
                  if (t == t.Next) break
                  t == n && (n = t.Next), (a = t = this.RemoveEdge(t))
                } else {
                  if (t.Prev == t.Next) break
                  if (
                    !C ||
                    !g.ClipperBase.SlopesEqual(
                      t.Prev.Curr,
                      t.Curr,
                      t.Next.Curr,
                      this.m_UseFullRange
                    ) ||
                    (this.PreserveCollinear &&
                      this.Pt2IsBetweenPt1AndPt3(
                        t.Prev.Curr,
                        t.Curr,
                        t.Next.Curr
                      ))
                  ) {
                    if ((t = t.Next) == a) break
                  } else
                    t == n && (n = t.Next),
                      (a = t = (t = this.RemoveEdge(t)).Prev)
                }
              if ((!C && t == t.Next) || (C && t.Prev == t.Next)) return !1
              C ||
                ((this.m_HasOpenPaths = !0),
                (n.Prev.OutIdx = g.ClipperBase.Skip)),
                (t = n)
              do {
                this.InitEdge2(t, I),
                  (t = t.Next),
                  i && t.Curr.Y != n.Curr.Y && (i = !1)
              } while (t != n)
              if (i) {
                if (C) return !1
                for (
                  t.Prev.OutIdx = g.ClipperBase.Skip,
                    t.Prev.Bot.X < t.Prev.Top.X &&
                      this.ReverseHorizontal(t.Prev),
                    (w = new g.LocalMinima()).Next = null,
                    w.Y = t.Bot.Y,
                    w.LeftBound = null,
                    w.RightBound = t,
                    w.RightBound.Side = g.EdgeSide.esRight,
                    w.RightBound.WindDelta = 0;
                  t.Next.OutIdx != g.ClipperBase.Skip;

                )
                  (t.NextInLML = t.Next),
                    t.Bot.X != t.Prev.Top.X && this.ReverseHorizontal(t),
                    (t = t.Next)
                return this.InsertLocalMinima(w), this.m_edges.push(Q), !0
              }
              this.m_edges.push(Q)
              for (var s = null; (t = this.FindNextLocMin(t)) != s; ) {
                var w
                null == s && (s = t),
                  ((w = new g.LocalMinima()).Next = null),
                  (w.Y = t.Bot.Y),
                  t.Dx < t.Prev.Dx
                    ? ((w.LeftBound = t.Prev), (w.RightBound = t), (o = !1))
                    : ((w.LeftBound = t), (w.RightBound = t.Prev), (o = !0)),
                  (w.LeftBound.Side = g.EdgeSide.esLeft),
                  (w.RightBound.Side = g.EdgeSide.esRight),
                  C
                    ? w.LeftBound.Next == w.RightBound
                      ? (w.LeftBound.WindDelta = -1)
                      : (w.LeftBound.WindDelta = 1)
                    : (w.LeftBound.WindDelta = 0),
                  (w.RightBound.WindDelta = -w.LeftBound.WindDelta),
                  (t = this.ProcessBound(w.LeftBound, o))
                var h = this.ProcessBound(w.RightBound, !o)
                w.LeftBound.OutIdx == g.ClipperBase.Skip
                  ? (w.LeftBound = null)
                  : w.RightBound.OutIdx == g.ClipperBase.Skip &&
                    (w.RightBound = null),
                  this.InsertLocalMinima(w),
                  o || (t = h)
              }
              return !0
            }),
            (g.ClipperBase.prototype.AddPaths = function (A, I, g) {
              for (var C = !1, B = 0, Q = A.length; B < Q; ++B)
                this.AddPath(A[B], I, g) && (C = !0)
              return C
            }),
            (g.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3 = function (
              A,
              I,
              C
            ) {
              return (
                !(
                  g.IntPoint.op_Equality(A, C) ||
                  g.IntPoint.op_Equality(A, I) ||
                  g.IntPoint.op_Equality(C, I)
                ) &&
                (A.X != C.X ? I.X > A.X == I.X < C.X : I.Y > A.Y == I.Y < C.Y)
              )
            }),
            (g.ClipperBase.prototype.RemoveEdge = function (A) {
              ;(A.Prev.Next = A.Next), (A.Next.Prev = A.Prev)
              var I = A.Next
              return (A.Prev = null), I
            }),
            (g.ClipperBase.prototype.SetDx = function (A) {
              ;(A.Delta.X = A.Top.X - A.Bot.X),
                (A.Delta.Y = A.Top.Y - A.Bot.Y),
                0 === A.Delta.Y
                  ? (A.Dx = g.ClipperBase.horizontal)
                  : (A.Dx = A.Delta.X / A.Delta.Y)
            }),
            (g.ClipperBase.prototype.InsertLocalMinima = function (A) {
              if (null === this.m_MinimaList) this.m_MinimaList = A
              else if (A.Y >= this.m_MinimaList.Y)
                (A.Next = this.m_MinimaList), (this.m_MinimaList = A)
              else {
                for (
                  var I = this.m_MinimaList;
                  null !== I.Next && A.Y < I.Next.Y;

                )
                  I = I.Next
                ;(A.Next = I.Next), (I.Next = A)
              }
            }),
            (g.ClipperBase.prototype.PopLocalMinima = function () {
              null !== this.m_CurrentLM &&
                (this.m_CurrentLM = this.m_CurrentLM.Next)
            }),
            (g.ClipperBase.prototype.ReverseHorizontal = function (A) {
              var I = A.Top.X
              ;(A.Top.X = A.Bot.X), (A.Bot.X = I)
            }),
            (g.ClipperBase.prototype.Reset = function () {
              if (
                ((this.m_CurrentLM = this.m_MinimaList),
                null != this.m_CurrentLM)
              )
                for (var A = this.m_MinimaList; null != A; ) {
                  var I = A.LeftBound
                  null != I &&
                    ((I.Curr.X = I.Bot.X),
                    (I.Curr.Y = I.Bot.Y),
                    (I.Side = g.EdgeSide.esLeft),
                    (I.OutIdx = g.ClipperBase.Unassigned)),
                    null != (I = A.RightBound) &&
                      ((I.Curr.X = I.Bot.X),
                      (I.Curr.Y = I.Bot.Y),
                      (I.Side = g.EdgeSide.esRight),
                      (I.OutIdx = g.ClipperBase.Unassigned)),
                    (A = A.Next)
                }
            }),
            (g.Clipper = function (A) {
              void 0 === A && (A = 0),
                (this.m_PolyOuts = null),
                (this.m_ClipType = g.ClipType.ctIntersection),
                (this.m_Scanbeam = null),
                (this.m_ActiveEdges = null),
                (this.m_SortedEdges = null),
                (this.m_IntersectList = null),
                (this.m_IntersectNodeComparer = null),
                (this.m_ExecuteLocked = !1),
                (this.m_ClipFillType = g.PolyFillType.pftEvenOdd),
                (this.m_SubjFillType = g.PolyFillType.pftEvenOdd),
                (this.m_Joins = null),
                (this.m_GhostJoins = null),
                (this.m_UsingPolyTree = !1),
                (this.ReverseSolution = !1),
                (this.StrictlySimple = !1),
                g.ClipperBase.call(this),
                (this.m_Scanbeam = null),
                (this.m_ActiveEdges = null),
                (this.m_SortedEdges = null),
                (this.m_IntersectList = new Array()),
                (this.m_IntersectNodeComparer = g.MyIntersectNodeSort.Compare),
                (this.m_ExecuteLocked = !1),
                (this.m_UsingPolyTree = !1),
                (this.m_PolyOuts = new Array()),
                (this.m_Joins = new Array()),
                (this.m_GhostJoins = new Array()),
                (this.ReverseSolution = 0 != (1 & A)),
                (this.StrictlySimple = 0 != (2 & A)),
                (this.PreserveCollinear = 0 != (4 & A))
            }),
            (g.Clipper.ioReverseSolution = 1),
            (g.Clipper.ioStrictlySimple = 2),
            (g.Clipper.ioPreserveCollinear = 4),
            (g.Clipper.prototype.Clear = function () {
              0 !== this.m_edges.length &&
                (this.DisposeAllPolyPts(),
                g.ClipperBase.prototype.Clear.call(this))
            }),
            (g.Clipper.prototype.DisposeScanbeamList = function () {
              for (; null !== this.m_Scanbeam; ) {
                var A = this.m_Scanbeam.Next
                ;(this.m_Scanbeam = null), (this.m_Scanbeam = A)
              }
            }),
            (g.Clipper.prototype.Reset = function () {
              g.ClipperBase.prototype.Reset.call(this),
                (this.m_Scanbeam = null),
                (this.m_ActiveEdges = null),
                (this.m_SortedEdges = null)
              for (var A = this.m_MinimaList; null !== A; )
                this.InsertScanbeam(A.Y), (A = A.Next)
            }),
            (g.Clipper.prototype.InsertScanbeam = function (A) {
              if (null === this.m_Scanbeam)
                (this.m_Scanbeam = new g.Scanbeam()),
                  (this.m_Scanbeam.Next = null),
                  (this.m_Scanbeam.Y = A)
              else if (A > this.m_Scanbeam.Y)
                ((C = new g.Scanbeam()).Y = A),
                  (C.Next = this.m_Scanbeam),
                  (this.m_Scanbeam = C)
              else {
                for (
                  var I = this.m_Scanbeam;
                  null !== I.Next && A <= I.Next.Y;

                )
                  I = I.Next
                if (A == I.Y) return
                var C
                ;((C = new g.Scanbeam()).Y = A), (C.Next = I.Next), (I.Next = C)
              }
            }),
            (g.Clipper.prototype.Execute = function () {
              var A = arguments,
                I = A.length,
                C = A[1] instanceof g.PolyTree
              if (4 == I && !C) {
                var B = A[0],
                  Q = A[1],
                  E = A[2],
                  i = A[3]
                if (this.m_ExecuteLocked) return !1
                this.m_HasOpenPaths &&
                  g.Error(
                    "Error: PolyTree struct is need for open path clipping."
                  ),
                  (this.m_ExecuteLocked = !0),
                  g.Clear(Q),
                  (this.m_SubjFillType = E),
                  (this.m_ClipFillType = i),
                  (this.m_ClipType = B),
                  (this.m_UsingPolyTree = !1)
                try {
                  ;(D = this.ExecuteInternal()) && this.BuildResult(Q)
                } finally {
                  this.DisposeAllPolyPts(), (this.m_ExecuteLocked = !1)
                }
                return D
              }
              if (4 == I && C) {
                B = A[0]
                var o = A[1]
                if (((E = A[2]), (i = A[3]), this.m_ExecuteLocked)) return !1
                ;(this.m_ExecuteLocked = !0),
                  (this.m_SubjFillType = E),
                  (this.m_ClipFillType = i),
                  (this.m_ClipType = B),
                  (this.m_UsingPolyTree = !0)
                try {
                  var D
                  ;(D = this.ExecuteInternal()) && this.BuildResult2(o)
                } finally {
                  this.DisposeAllPolyPts(), (this.m_ExecuteLocked = !1)
                }
                return D
              }
              return 2 != I || C
                ? 2 == I && C
                  ? ((B = A[0]),
                    (o = A[1]),
                    this.Execute(
                      B,
                      o,
                      g.PolyFillType.pftEvenOdd,
                      g.PolyFillType.pftEvenOdd
                    ))
                  : void 0
                : ((B = A[0]),
                  (Q = A[1]),
                  this.Execute(
                    B,
                    Q,
                    g.PolyFillType.pftEvenOdd,
                    g.PolyFillType.pftEvenOdd
                  ))
            }),
            (g.Clipper.prototype.FixHoleLinkage = function (A) {
              if (
                null !== A.FirstLeft &&
                (A.IsHole == A.FirstLeft.IsHole || null === A.FirstLeft.Pts)
              ) {
                for (
                  var I = A.FirstLeft;
                  null !== I && (I.IsHole == A.IsHole || null === I.Pts);

                )
                  I = I.FirstLeft
                A.FirstLeft = I
              }
            }),
            (g.Clipper.prototype.ExecuteInternal = function () {
              try {
                if ((this.Reset(), null === this.m_CurrentLM)) return !1
                var A = this.PopScanbeam()
                do {
                  if (
                    (this.InsertLocalMinimaIntoAEL(A),
                    g.Clear(this.m_GhostJoins),
                    this.ProcessHorizontals(!1),
                    null === this.m_Scanbeam)
                  )
                    break
                  var I = this.PopScanbeam()
                  if (!this.ProcessIntersections(A, I)) return !1
                  this.ProcessEdgesAtTopOfScanbeam(I), (A = I)
                } while (null !== this.m_Scanbeam || null !== this.m_CurrentLM)
                for (var C = 0, B = this.m_PolyOuts.length; C < B; C++)
                  null === (Q = this.m_PolyOuts[C]).Pts ||
                    Q.IsOpen ||
                    ((Q.IsHole ^ this.ReverseSolution) == this.Area(Q) > 0 &&
                      this.ReversePolyPtLinks(Q.Pts))
                for (
                  this.JoinCommonEdges(), C = 0, B = this.m_PolyOuts.length;
                  C < B;
                  C++
                ) {
                  var Q
                  null === (Q = this.m_PolyOuts[C]).Pts ||
                    Q.IsOpen ||
                    this.FixupOutPolygon(Q)
                }
                return this.StrictlySimple && this.DoSimplePolygons(), !0
              } finally {
                g.Clear(this.m_Joins), g.Clear(this.m_GhostJoins)
              }
            }),
            (g.Clipper.prototype.PopScanbeam = function () {
              var A = this.m_Scanbeam.Y
              return (
                this.m_Scanbeam, (this.m_Scanbeam = this.m_Scanbeam.Next), A
              )
            }),
            (g.Clipper.prototype.DisposeAllPolyPts = function () {
              for (var A = 0, I = this.m_PolyOuts.length; A < I; ++A)
                this.DisposeOutRec(A)
              g.Clear(this.m_PolyOuts)
            }),
            (g.Clipper.prototype.DisposeOutRec = function (A) {
              var I = this.m_PolyOuts[A]
              null !== I.Pts && this.DisposeOutPts(I.Pts),
                (I = null),
                (this.m_PolyOuts[A] = null)
            }),
            (g.Clipper.prototype.DisposeOutPts = function (A) {
              if (null !== A) for (A.Prev.Next = null; null !== A; ) A = A.Next
            }),
            (g.Clipper.prototype.AddJoin = function (A, I, C) {
              var B = new g.Join()
              ;(B.OutPt1 = A),
                (B.OutPt2 = I),
                (B.OffPt.X = C.X),
                (B.OffPt.Y = C.Y),
                this.m_Joins.push(B)
            }),
            (g.Clipper.prototype.AddGhostJoin = function (A, I) {
              var C = new g.Join()
              ;(C.OutPt1 = A),
                (C.OffPt.X = I.X),
                (C.OffPt.Y = I.Y),
                this.m_GhostJoins.push(C)
            }),
            (g.Clipper.prototype.InsertLocalMinimaIntoAEL = function (A) {
              for (; null !== this.m_CurrentLM && this.m_CurrentLM.Y == A; ) {
                var I = this.m_CurrentLM.LeftBound,
                  C = this.m_CurrentLM.RightBound
                this.PopLocalMinima()
                var B = null
                if (
                  (null === I
                    ? (this.InsertEdgeIntoAEL(C, null),
                      this.SetWindingCount(C),
                      this.IsContributing(C) && (B = this.AddOutPt(C, C.Bot)))
                    : null == C
                    ? (this.InsertEdgeIntoAEL(I, null),
                      this.SetWindingCount(I),
                      this.IsContributing(I) && (B = this.AddOutPt(I, I.Bot)),
                      this.InsertScanbeam(I.Top.Y))
                    : (this.InsertEdgeIntoAEL(I, null),
                      this.InsertEdgeIntoAEL(C, I),
                      this.SetWindingCount(I),
                      (C.WindCnt = I.WindCnt),
                      (C.WindCnt2 = I.WindCnt2),
                      this.IsContributing(I) &&
                        (B = this.AddLocalMinPoly(I, C, I.Bot)),
                      this.InsertScanbeam(I.Top.Y)),
                  null != C &&
                    (g.ClipperBase.IsHorizontal(C)
                      ? this.AddEdgeToSEL(C)
                      : this.InsertScanbeam(C.Top.Y)),
                  null != I && null != C)
                ) {
                  if (
                    null !== B &&
                    g.ClipperBase.IsHorizontal(C) &&
                    this.m_GhostJoins.length > 0 &&
                    0 !== C.WindDelta
                  )
                    for (var Q = 0, E = this.m_GhostJoins.length; Q < E; Q++) {
                      var i = this.m_GhostJoins[Q]
                      this.HorzSegmentsOverlap(
                        i.OutPt1.Pt,
                        i.OffPt,
                        C.Bot,
                        C.Top
                      ) && this.AddJoin(i.OutPt1, B, i.OffPt)
                    }
                  if (
                    I.OutIdx >= 0 &&
                    null !== I.PrevInAEL &&
                    I.PrevInAEL.Curr.X == I.Bot.X &&
                    I.PrevInAEL.OutIdx >= 0 &&
                    g.ClipperBase.SlopesEqual(
                      I.PrevInAEL,
                      I,
                      this.m_UseFullRange
                    ) &&
                    0 !== I.WindDelta &&
                    0 !== I.PrevInAEL.WindDelta
                  ) {
                    var o = this.AddOutPt(I.PrevInAEL, I.Bot)
                    this.AddJoin(B, o, I.Top)
                  }
                  if (I.NextInAEL != C) {
                    C.OutIdx >= 0 &&
                      C.PrevInAEL.OutIdx >= 0 &&
                      g.ClipperBase.SlopesEqual(
                        C.PrevInAEL,
                        C,
                        this.m_UseFullRange
                      ) &&
                      0 !== C.WindDelta &&
                      0 !== C.PrevInAEL.WindDelta &&
                      ((o = this.AddOutPt(C.PrevInAEL, C.Bot)),
                      this.AddJoin(B, o, C.Top))
                    var D = I.NextInAEL
                    if (null !== D)
                      for (; D != C; )
                        this.IntersectEdges(C, D, I.Curr, !1), (D = D.NextInAEL)
                  }
                }
              }
            }),
            (g.Clipper.prototype.InsertEdgeIntoAEL = function (A, I) {
              if (null === this.m_ActiveEdges)
                (A.PrevInAEL = null),
                  (A.NextInAEL = null),
                  (this.m_ActiveEdges = A)
              else if (
                null === I &&
                this.E2InsertsBeforeE1(this.m_ActiveEdges, A)
              )
                (A.PrevInAEL = null),
                  (A.NextInAEL = this.m_ActiveEdges),
                  (this.m_ActiveEdges.PrevInAEL = A),
                  (this.m_ActiveEdges = A)
              else {
                for (
                  null === I && (I = this.m_ActiveEdges);
                  null !== I.NextInAEL &&
                  !this.E2InsertsBeforeE1(I.NextInAEL, A);

                )
                  I = I.NextInAEL
                ;(A.NextInAEL = I.NextInAEL),
                  null !== I.NextInAEL && (I.NextInAEL.PrevInAEL = A),
                  (A.PrevInAEL = I),
                  (I.NextInAEL = A)
              }
            }),
            (g.Clipper.prototype.E2InsertsBeforeE1 = function (A, I) {
              return I.Curr.X == A.Curr.X
                ? I.Top.Y > A.Top.Y
                  ? I.Top.X < g.Clipper.TopX(A, I.Top.Y)
                  : A.Top.X > g.Clipper.TopX(I, A.Top.Y)
                : I.Curr.X < A.Curr.X
            }),
            (g.Clipper.prototype.IsEvenOddFillType = function (A) {
              return A.PolyTyp == g.PolyType.ptSubject
                ? this.m_SubjFillType == g.PolyFillType.pftEvenOdd
                : this.m_ClipFillType == g.PolyFillType.pftEvenOdd
            }),
            (g.Clipper.prototype.IsEvenOddAltFillType = function (A) {
              return A.PolyTyp == g.PolyType.ptSubject
                ? this.m_ClipFillType == g.PolyFillType.pftEvenOdd
                : this.m_SubjFillType == g.PolyFillType.pftEvenOdd
            }),
            (g.Clipper.prototype.IsContributing = function (A) {
              var I, C
              switch (
                (A.PolyTyp == g.PolyType.ptSubject
                  ? ((I = this.m_SubjFillType), (C = this.m_ClipFillType))
                  : ((I = this.m_ClipFillType), (C = this.m_SubjFillType)),
                I)
              ) {
                case g.PolyFillType.pftEvenOdd:
                  if (0 === A.WindDelta && 1 != A.WindCnt) return !1
                  break
                case g.PolyFillType.pftNonZero:
                  if (1 != Math.abs(A.WindCnt)) return !1
                  break
                case g.PolyFillType.pftPositive:
                  if (1 != A.WindCnt) return !1
                  break
                default:
                  if (-1 != A.WindCnt) return !1
              }
              switch (this.m_ClipType) {
                case g.ClipType.ctIntersection:
                  switch (C) {
                    case g.PolyFillType.pftEvenOdd:
                    case g.PolyFillType.pftNonZero:
                      return 0 !== A.WindCnt2
                    case g.PolyFillType.pftPositive:
                      return A.WindCnt2 > 0
                    default:
                      return A.WindCnt2 < 0
                  }
                case g.ClipType.ctUnion:
                  switch (C) {
                    case g.PolyFillType.pftEvenOdd:
                    case g.PolyFillType.pftNonZero:
                      return 0 === A.WindCnt2
                    case g.PolyFillType.pftPositive:
                      return A.WindCnt2 <= 0
                    default:
                      return A.WindCnt2 >= 0
                  }
                case g.ClipType.ctDifference:
                  if (A.PolyTyp == g.PolyType.ptSubject)
                    switch (C) {
                      case g.PolyFillType.pftEvenOdd:
                      case g.PolyFillType.pftNonZero:
                        return 0 === A.WindCnt2
                      case g.PolyFillType.pftPositive:
                        return A.WindCnt2 <= 0
                      default:
                        return A.WindCnt2 >= 0
                    }
                  else
                    switch (C) {
                      case g.PolyFillType.pftEvenOdd:
                      case g.PolyFillType.pftNonZero:
                        return 0 !== A.WindCnt2
                      case g.PolyFillType.pftPositive:
                        return A.WindCnt2 > 0
                      default:
                        return A.WindCnt2 < 0
                    }
                case g.ClipType.ctXor:
                  if (0 !== A.WindDelta) return !0
                  switch (C) {
                    case g.PolyFillType.pftEvenOdd:
                    case g.PolyFillType.pftNonZero:
                      return 0 === A.WindCnt2
                    case g.PolyFillType.pftPositive:
                      return A.WindCnt2 <= 0
                    default:
                      return A.WindCnt2 >= 0
                  }
              }
              return !0
            }),
            (g.Clipper.prototype.SetWindingCount = function (A) {
              for (
                var I = A.PrevInAEL;
                null !== I && (I.PolyTyp != A.PolyTyp || 0 === I.WindDelta);

              )
                I = I.PrevInAEL
              if (null === I)
                (A.WindCnt = 0 === A.WindDelta ? 1 : A.WindDelta),
                  (A.WindCnt2 = 0),
                  (I = this.m_ActiveEdges)
              else if (
                0 === A.WindDelta &&
                this.m_ClipType != g.ClipType.ctUnion
              )
                (A.WindCnt = 1), (A.WindCnt2 = I.WindCnt2), (I = I.NextInAEL)
              else if (this.IsEvenOddFillType(A)) {
                if (0 === A.WindDelta) {
                  for (var C = !0, B = I.PrevInAEL; null !== B; )
                    B.PolyTyp == I.PolyTyp && 0 !== B.WindDelta && (C = !C),
                      (B = B.PrevInAEL)
                  A.WindCnt = C ? 0 : 1
                } else A.WindCnt = A.WindDelta
                ;(A.WindCnt2 = I.WindCnt2), (I = I.NextInAEL)
              } else
                I.WindCnt * I.WindDelta < 0
                  ? Math.abs(I.WindCnt) > 1
                    ? I.WindDelta * A.WindDelta < 0
                      ? (A.WindCnt = I.WindCnt)
                      : (A.WindCnt = I.WindCnt + A.WindDelta)
                    : (A.WindCnt = 0 === A.WindDelta ? 1 : A.WindDelta)
                  : 0 === A.WindDelta
                  ? (A.WindCnt = I.WindCnt < 0 ? I.WindCnt - 1 : I.WindCnt + 1)
                  : I.WindDelta * A.WindDelta < 0
                  ? (A.WindCnt = I.WindCnt)
                  : (A.WindCnt = I.WindCnt + A.WindDelta),
                  (A.WindCnt2 = I.WindCnt2),
                  (I = I.NextInAEL)
              if (this.IsEvenOddAltFillType(A))
                for (; I != A; )
                  0 !== I.WindDelta && (A.WindCnt2 = 0 === A.WindCnt2 ? 1 : 0),
                    (I = I.NextInAEL)
              else
                for (; I != A; ) (A.WindCnt2 += I.WindDelta), (I = I.NextInAEL)
            }),
            (g.Clipper.prototype.AddEdgeToSEL = function (A) {
              null === this.m_SortedEdges
                ? ((this.m_SortedEdges = A),
                  (A.PrevInSEL = null),
                  (A.NextInSEL = null))
                : ((A.NextInSEL = this.m_SortedEdges),
                  (A.PrevInSEL = null),
                  (this.m_SortedEdges.PrevInSEL = A),
                  (this.m_SortedEdges = A))
            }),
            (g.Clipper.prototype.CopyAELToSEL = function () {
              var A = this.m_ActiveEdges
              for (this.m_SortedEdges = A; null !== A; )
                (A.PrevInSEL = A.PrevInAEL),
                  (A.NextInSEL = A.NextInAEL),
                  (A = A.NextInAEL)
            }),
            (g.Clipper.prototype.SwapPositionsInAEL = function (A, I) {
              if (A.NextInAEL != A.PrevInAEL && I.NextInAEL != I.PrevInAEL) {
                if (A.NextInAEL == I)
                  null !== (g = I.NextInAEL) && (g.PrevInAEL = A),
                    null !== (C = A.PrevInAEL) && (C.NextInAEL = I),
                    (I.PrevInAEL = C),
                    (I.NextInAEL = A),
                    (A.PrevInAEL = I),
                    (A.NextInAEL = g)
                else if (I.NextInAEL == A)
                  null !== (g = A.NextInAEL) && (g.PrevInAEL = I),
                    null !== (C = I.PrevInAEL) && (C.NextInAEL = A),
                    (A.PrevInAEL = C),
                    (A.NextInAEL = I),
                    (I.PrevInAEL = A),
                    (I.NextInAEL = g)
                else {
                  var g = A.NextInAEL,
                    C = A.PrevInAEL
                  ;(A.NextInAEL = I.NextInAEL),
                    null !== A.NextInAEL && (A.NextInAEL.PrevInAEL = A),
                    (A.PrevInAEL = I.PrevInAEL),
                    null !== A.PrevInAEL && (A.PrevInAEL.NextInAEL = A),
                    (I.NextInAEL = g),
                    null !== I.NextInAEL && (I.NextInAEL.PrevInAEL = I),
                    (I.PrevInAEL = C),
                    null !== I.PrevInAEL && (I.PrevInAEL.NextInAEL = I)
                }
                null === A.PrevInAEL
                  ? (this.m_ActiveEdges = A)
                  : null === I.PrevInAEL && (this.m_ActiveEdges = I)
              }
            }),
            (g.Clipper.prototype.SwapPositionsInSEL = function (A, I) {
              if (
                !(
                  (null === A.NextInSEL && null === A.PrevInSEL) ||
                  (null === I.NextInSEL && null === I.PrevInSEL)
                )
              ) {
                if (A.NextInSEL == I)
                  null !== (g = I.NextInSEL) && (g.PrevInSEL = A),
                    null !== (C = A.PrevInSEL) && (C.NextInSEL = I),
                    (I.PrevInSEL = C),
                    (I.NextInSEL = A),
                    (A.PrevInSEL = I),
                    (A.NextInSEL = g)
                else if (I.NextInSEL == A)
                  null !== (g = A.NextInSEL) && (g.PrevInSEL = I),
                    null !== (C = I.PrevInSEL) && (C.NextInSEL = A),
                    (A.PrevInSEL = C),
                    (A.NextInSEL = I),
                    (I.PrevInSEL = A),
                    (I.NextInSEL = g)
                else {
                  var g = A.NextInSEL,
                    C = A.PrevInSEL
                  ;(A.NextInSEL = I.NextInSEL),
                    null !== A.NextInSEL && (A.NextInSEL.PrevInSEL = A),
                    (A.PrevInSEL = I.PrevInSEL),
                    null !== A.PrevInSEL && (A.PrevInSEL.NextInSEL = A),
                    (I.NextInSEL = g),
                    null !== I.NextInSEL && (I.NextInSEL.PrevInSEL = I),
                    (I.PrevInSEL = C),
                    null !== I.PrevInSEL && (I.PrevInSEL.NextInSEL = I)
                }
                null === A.PrevInSEL
                  ? (this.m_SortedEdges = A)
                  : null === I.PrevInSEL && (this.m_SortedEdges = I)
              }
            }),
            (g.Clipper.prototype.AddLocalMaxPoly = function (A, I, g) {
              this.AddOutPt(A, g),
                0 == I.WindDelta && this.AddOutPt(I, g),
                A.OutIdx == I.OutIdx
                  ? ((A.OutIdx = -1), (I.OutIdx = -1))
                  : A.OutIdx < I.OutIdx
                  ? this.AppendPolygon(A, I)
                  : this.AppendPolygon(I, A)
            }),
            (g.Clipper.prototype.AddLocalMinPoly = function (A, I, C) {
              var B, Q, E
              if (
                (g.ClipperBase.IsHorizontal(I) || A.Dx > I.Dx
                  ? ((B = this.AddOutPt(A, C)),
                    (I.OutIdx = A.OutIdx),
                    (A.Side = g.EdgeSide.esLeft),
                    (I.Side = g.EdgeSide.esRight),
                    (E = (Q = A).PrevInAEL == I ? I.PrevInAEL : Q.PrevInAEL))
                  : ((B = this.AddOutPt(I, C)),
                    (A.OutIdx = I.OutIdx),
                    (A.Side = g.EdgeSide.esRight),
                    (I.Side = g.EdgeSide.esLeft),
                    (E = (Q = I).PrevInAEL == A ? A.PrevInAEL : Q.PrevInAEL)),
                null !== E &&
                  E.OutIdx >= 0 &&
                  g.Clipper.TopX(E, C.Y) == g.Clipper.TopX(Q, C.Y) &&
                  g.ClipperBase.SlopesEqual(Q, E, this.m_UseFullRange) &&
                  0 !== Q.WindDelta &&
                  0 !== E.WindDelta)
              ) {
                var i = this.AddOutPt(E, C)
                this.AddJoin(B, i, Q.Top)
              }
              return B
            }),
            (g.Clipper.prototype.CreateOutRec = function () {
              var A = new g.OutRec()
              return (
                (A.Idx = -1),
                (A.IsHole = !1),
                (A.IsOpen = !1),
                (A.FirstLeft = null),
                (A.Pts = null),
                (A.BottomPt = null),
                (A.PolyNode = null),
                this.m_PolyOuts.push(A),
                (A.Idx = this.m_PolyOuts.length - 1),
                A
              )
            }),
            (g.Clipper.prototype.AddOutPt = function (A, I) {
              var C = A.Side == g.EdgeSide.esLeft
              if (A.OutIdx < 0) {
                ;(Q = this.CreateOutRec()).IsOpen = 0 === A.WindDelta
                var B = new g.OutPt()
                return (
                  (Q.Pts = B),
                  (B.Idx = Q.Idx),
                  (B.Pt.X = I.X),
                  (B.Pt.Y = I.Y),
                  (B.Next = B),
                  (B.Prev = B),
                  Q.IsOpen || this.SetHoleState(A, Q),
                  (A.OutIdx = Q.Idx),
                  B
                )
              }
              var Q,
                E = (Q = this.m_PolyOuts[A.OutIdx]).Pts
              return C && g.IntPoint.op_Equality(I, E.Pt)
                ? E
                : !C && g.IntPoint.op_Equality(I, E.Prev.Pt)
                ? E.Prev
                : (((B = new g.OutPt()).Idx = Q.Idx),
                  (B.Pt.X = I.X),
                  (B.Pt.Y = I.Y),
                  (B.Next = E),
                  (B.Prev = E.Prev),
                  (B.Prev.Next = B),
                  (E.Prev = B),
                  C && (Q.Pts = B),
                  B)
            }),
            (g.Clipper.prototype.SwapPoints = function (A, I) {
              var C = new g.IntPoint(A.Value)
              ;(A.Value.X = I.Value.X),
                (A.Value.Y = I.Value.Y),
                (I.Value.X = C.X),
                (I.Value.Y = C.Y)
            }),
            (g.Clipper.prototype.HorzSegmentsOverlap = function (A, I, g, C) {
              return (
                A.X > g.X == A.X < C.X ||
                I.X > g.X == I.X < C.X ||
                g.X > A.X == g.X < I.X ||
                C.X > A.X == C.X < I.X ||
                (A.X == g.X && I.X == C.X) ||
                (A.X == C.X && I.X == g.X)
              )
            }),
            (g.Clipper.prototype.InsertPolyPtBetween = function (A, I, C) {
              var B = new g.OutPt()
              return (
                (B.Pt.X = C.X),
                (B.Pt.Y = C.Y),
                I == A.Next
                  ? ((A.Next = B), (I.Prev = B), (B.Next = I), (B.Prev = A))
                  : ((I.Next = B), (A.Prev = B), (B.Next = A), (B.Prev = I)),
                B
              )
            }),
            (g.Clipper.prototype.SetHoleState = function (A, I) {
              for (var g = !1, C = A.PrevInAEL; null !== C; )
                C.OutIdx >= 0 &&
                  0 != C.WindDelta &&
                  ((g = !g),
                  null === I.FirstLeft &&
                    (I.FirstLeft = this.m_PolyOuts[C.OutIdx])),
                  (C = C.PrevInAEL)
              g && (I.IsHole = !0)
            }),
            (g.Clipper.prototype.GetDx = function (A, I) {
              return A.Y == I.Y
                ? g.ClipperBase.horizontal
                : (I.X - A.X) / (I.Y - A.Y)
            }),
            (g.Clipper.prototype.FirstIsBottomPt = function (A, I) {
              for (
                var C = A.Prev;
                g.IntPoint.op_Equality(C.Pt, A.Pt) && C != A;

              )
                C = C.Prev
              var B = Math.abs(this.GetDx(A.Pt, C.Pt))
              for (C = A.Next; g.IntPoint.op_Equality(C.Pt, A.Pt) && C != A; )
                C = C.Next
              var Q = Math.abs(this.GetDx(A.Pt, C.Pt))
              for (C = I.Prev; g.IntPoint.op_Equality(C.Pt, I.Pt) && C != I; )
                C = C.Prev
              var E = Math.abs(this.GetDx(I.Pt, C.Pt))
              for (C = I.Next; g.IntPoint.op_Equality(C.Pt, I.Pt) && C != I; )
                C = C.Next
              var i = Math.abs(this.GetDx(I.Pt, C.Pt))
              return (B >= E && B >= i) || (Q >= E && Q >= i)
            }),
            (g.Clipper.prototype.GetBottomPt = function (A) {
              for (var I = null, C = A.Next; C != A; )
                C.Pt.Y > A.Pt.Y
                  ? ((A = C), (I = null))
                  : C.Pt.Y == A.Pt.Y &&
                    C.Pt.X <= A.Pt.X &&
                    (C.Pt.X < A.Pt.X
                      ? ((I = null), (A = C))
                      : C.Next != A && C.Prev != A && (I = C)),
                  (C = C.Next)
              if (null !== I)
                for (; I != C; )
                  for (
                    this.FirstIsBottomPt(C, I) || (A = I), I = I.Next;
                    g.IntPoint.op_Inequality(I.Pt, A.Pt);

                  )
                    I = I.Next
              return A
            }),
            (g.Clipper.prototype.GetLowermostRec = function (A, I) {
              null === A.BottomPt && (A.BottomPt = this.GetBottomPt(A.Pts)),
                null === I.BottomPt && (I.BottomPt = this.GetBottomPt(I.Pts))
              var g = A.BottomPt,
                C = I.BottomPt
              return g.Pt.Y > C.Pt.Y
                ? A
                : g.Pt.Y < C.Pt.Y
                ? I
                : g.Pt.X < C.Pt.X
                ? A
                : g.Pt.X > C.Pt.X || g.Next == g
                ? I
                : C.Next == C || this.FirstIsBottomPt(g, C)
                ? A
                : I
            }),
            (g.Clipper.prototype.Param1RightOfParam2 = function (A, I) {
              do {
                if ((A = A.FirstLeft) == I) return !0
              } while (null !== A)
              return !1
            }),
            (g.Clipper.prototype.GetOutRec = function (A) {
              for (var I = this.m_PolyOuts[A]; I != this.m_PolyOuts[I.Idx]; )
                I = this.m_PolyOuts[I.Idx]
              return I
            }),
            (g.Clipper.prototype.AppendPolygon = function (A, I) {
              var C,
                B = this.m_PolyOuts[A.OutIdx],
                Q = this.m_PolyOuts[I.OutIdx]
              C = this.Param1RightOfParam2(B, Q)
                ? Q
                : this.Param1RightOfParam2(Q, B)
                ? B
                : this.GetLowermostRec(B, Q)
              var E,
                i = B.Pts,
                o = i.Prev,
                D = Q.Pts,
                n = D.Prev
              A.Side == g.EdgeSide.esLeft
                ? (I.Side == g.EdgeSide.esLeft
                    ? (this.ReversePolyPtLinks(D),
                      (D.Next = i),
                      (i.Prev = D),
                      (o.Next = n),
                      (n.Prev = o),
                      (B.Pts = n))
                    : ((n.Next = i),
                      (i.Prev = n),
                      (D.Prev = o),
                      (o.Next = D),
                      (B.Pts = D)),
                  (E = g.EdgeSide.esLeft))
                : (I.Side == g.EdgeSide.esRight
                    ? (this.ReversePolyPtLinks(D),
                      (o.Next = n),
                      (n.Prev = o),
                      (D.Next = i),
                      (i.Prev = D))
                    : ((o.Next = D), (D.Prev = o), (i.Prev = n), (n.Next = i)),
                  (E = g.EdgeSide.esRight)),
                (B.BottomPt = null),
                C == Q &&
                  (Q.FirstLeft != B && (B.FirstLeft = Q.FirstLeft),
                  (B.IsHole = Q.IsHole)),
                (Q.Pts = null),
                (Q.BottomPt = null),
                (Q.FirstLeft = B)
              var t = A.OutIdx,
                a = I.OutIdx
              ;(A.OutIdx = -1), (I.OutIdx = -1)
              for (var s = this.m_ActiveEdges; null !== s; ) {
                if (s.OutIdx == a) {
                  ;(s.OutIdx = t), (s.Side = E)
                  break
                }
                s = s.NextInAEL
              }
              Q.Idx = B.Idx
            }),
            (g.Clipper.prototype.ReversePolyPtLinks = function (A) {
              if (null !== A) {
                var I, g
                I = A
                do {
                  ;(g = I.Next), (I.Next = I.Prev), (I.Prev = g), (I = g)
                } while (I != A)
              }
            }),
            (g.Clipper.SwapSides = function (A, I) {
              var g = A.Side
              ;(A.Side = I.Side), (I.Side = g)
            }),
            (g.Clipper.SwapPolyIndexes = function (A, I) {
              var g = A.OutIdx
              ;(A.OutIdx = I.OutIdx), (I.OutIdx = g)
            }),
            (g.Clipper.prototype.IntersectEdges = function (A, I, C, B) {
              var Q,
                E,
                i,
                o,
                D,
                n,
                t =
                  !B &&
                  null === A.NextInLML &&
                  A.Top.X == C.X &&
                  A.Top.Y == C.Y,
                a =
                  !B &&
                  null === I.NextInLML &&
                  I.Top.X == C.X &&
                  I.Top.Y == C.Y,
                s = A.OutIdx >= 0,
                w = I.OutIdx >= 0
              if (0 === A.WindDelta || 0 === I.WindDelta)
                return (
                  0 === A.WindDelta && 0 === I.WindDelta
                    ? (t || a) && s && w && this.AddLocalMaxPoly(A, I, C)
                    : A.PolyTyp == I.PolyTyp &&
                      A.WindDelta != I.WindDelta &&
                      this.m_ClipType == g.ClipType.ctUnion
                    ? 0 === A.WindDelta
                      ? w && (this.AddOutPt(A, C), s && (A.OutIdx = -1))
                      : s && (this.AddOutPt(I, C), w && (I.OutIdx = -1))
                    : A.PolyTyp != I.PolyTyp &&
                      (0 !== A.WindDelta ||
                      1 != Math.abs(I.WindCnt) ||
                      (this.m_ClipType == g.ClipType.ctUnion &&
                        0 !== I.WindCnt2)
                        ? 0 !== I.WindDelta ||
                          1 != Math.abs(A.WindCnt) ||
                          (this.m_ClipType == g.ClipType.ctUnion &&
                            0 !== A.WindCnt2) ||
                          (this.AddOutPt(I, C), w && (I.OutIdx = -1))
                        : (this.AddOutPt(A, C), s && (A.OutIdx = -1))),
                  t &&
                    (A.OutIdx < 0
                      ? this.DeleteFromAEL(A)
                      : g.Error("Error intersecting polylines")),
                  void (
                    a &&
                    (I.OutIdx < 0
                      ? this.DeleteFromAEL(I)
                      : g.Error("Error intersecting polylines"))
                  )
                )
              if (A.PolyTyp == I.PolyTyp)
                if (this.IsEvenOddFillType(A)) {
                  var h = A.WindCnt
                  ;(A.WindCnt = I.WindCnt), (I.WindCnt = h)
                } else
                  A.WindCnt + I.WindDelta === 0
                    ? (A.WindCnt = -A.WindCnt)
                    : (A.WindCnt += I.WindDelta),
                    I.WindCnt - A.WindDelta == 0
                      ? (I.WindCnt = -I.WindCnt)
                      : (I.WindCnt -= A.WindDelta)
              else
                this.IsEvenOddFillType(I)
                  ? (A.WindCnt2 = 0 === A.WindCnt2 ? 1 : 0)
                  : (A.WindCnt2 += I.WindDelta),
                  this.IsEvenOddFillType(A)
                    ? (I.WindCnt2 = 0 === I.WindCnt2 ? 1 : 0)
                    : (I.WindCnt2 -= A.WindDelta)
              switch (
                (A.PolyTyp == g.PolyType.ptSubject
                  ? ((Q = this.m_SubjFillType), (i = this.m_ClipFillType))
                  : ((Q = this.m_ClipFillType), (i = this.m_SubjFillType)),
                I.PolyTyp == g.PolyType.ptSubject
                  ? ((E = this.m_SubjFillType), (o = this.m_ClipFillType))
                  : ((E = this.m_ClipFillType), (o = this.m_SubjFillType)),
                Q)
              ) {
                case g.PolyFillType.pftPositive:
                  D = A.WindCnt
                  break
                case g.PolyFillType.pftNegative:
                  D = -A.WindCnt
                  break
                default:
                  D = Math.abs(A.WindCnt)
              }
              switch (E) {
                case g.PolyFillType.pftPositive:
                  n = I.WindCnt
                  break
                case g.PolyFillType.pftNegative:
                  n = -I.WindCnt
                  break
                default:
                  n = Math.abs(I.WindCnt)
              }
              if (s && w)
                t ||
                a ||
                (0 !== D && 1 != D) ||
                (0 !== n && 1 != n) ||
                (A.PolyTyp != I.PolyTyp && this.m_ClipType != g.ClipType.ctXor)
                  ? this.AddLocalMaxPoly(A, I, C)
                  : (this.AddOutPt(A, C),
                    this.AddOutPt(I, C),
                    g.Clipper.SwapSides(A, I),
                    g.Clipper.SwapPolyIndexes(A, I))
              else if (s)
                (0 !== n && 1 != n) ||
                  (this.AddOutPt(A, C),
                  g.Clipper.SwapSides(A, I),
                  g.Clipper.SwapPolyIndexes(A, I))
              else if (w)
                (0 !== D && 1 != D) ||
                  (this.AddOutPt(I, C),
                  g.Clipper.SwapSides(A, I),
                  g.Clipper.SwapPolyIndexes(A, I))
              else if (
                !((0 !== D && 1 != D) || (0 !== n && 1 != n) || t || a)
              ) {
                var e, G
                switch (i) {
                  case g.PolyFillType.pftPositive:
                    e = A.WindCnt2
                    break
                  case g.PolyFillType.pftNegative:
                    e = -A.WindCnt2
                    break
                  default:
                    e = Math.abs(A.WindCnt2)
                }
                switch (o) {
                  case g.PolyFillType.pftPositive:
                    G = I.WindCnt2
                    break
                  case g.PolyFillType.pftNegative:
                    G = -I.WindCnt2
                    break
                  default:
                    G = Math.abs(I.WindCnt2)
                }
                if (A.PolyTyp != I.PolyTyp) this.AddLocalMinPoly(A, I, C)
                else if (1 == D && 1 == n)
                  switch (this.m_ClipType) {
                    case g.ClipType.ctIntersection:
                      e > 0 && G > 0 && this.AddLocalMinPoly(A, I, C)
                      break
                    case g.ClipType.ctUnion:
                      e <= 0 && G <= 0 && this.AddLocalMinPoly(A, I, C)
                      break
                    case g.ClipType.ctDifference:
                      ;((A.PolyTyp == g.PolyType.ptClip && e > 0 && G > 0) ||
                        (A.PolyTyp == g.PolyType.ptSubject &&
                          e <= 0 &&
                          G <= 0)) &&
                        this.AddLocalMinPoly(A, I, C)
                      break
                    case g.ClipType.ctXor:
                      this.AddLocalMinPoly(A, I, C)
                  }
                else g.Clipper.SwapSides(A, I)
              }
              t != a &&
                ((t && A.OutIdx >= 0) || (a && I.OutIdx >= 0)) &&
                (g.Clipper.SwapSides(A, I), g.Clipper.SwapPolyIndexes(A, I)),
                t && this.DeleteFromAEL(A),
                a && this.DeleteFromAEL(I)
            }),
            (g.Clipper.prototype.DeleteFromAEL = function (A) {
              var I = A.PrevInAEL,
                g = A.NextInAEL
              ;(null === I && null === g && A != this.m_ActiveEdges) ||
                (null !== I ? (I.NextInAEL = g) : (this.m_ActiveEdges = g),
                null !== g && (g.PrevInAEL = I),
                (A.NextInAEL = null),
                (A.PrevInAEL = null))
            }),
            (g.Clipper.prototype.DeleteFromSEL = function (A) {
              var I = A.PrevInSEL,
                g = A.NextInSEL
              ;(null === I && null === g && A != this.m_SortedEdges) ||
                (null !== I ? (I.NextInSEL = g) : (this.m_SortedEdges = g),
                null !== g && (g.PrevInSEL = I),
                (A.NextInSEL = null),
                (A.PrevInSEL = null))
            }),
            (g.Clipper.prototype.UpdateEdgeIntoAEL = function (A) {
              null === A.NextInLML && g.Error("UpdateEdgeIntoAEL: invalid call")
              var I = A.PrevInAEL,
                C = A.NextInAEL
              return (
                (A.NextInLML.OutIdx = A.OutIdx),
                null !== I
                  ? (I.NextInAEL = A.NextInLML)
                  : (this.m_ActiveEdges = A.NextInLML),
                null !== C && (C.PrevInAEL = A.NextInLML),
                (A.NextInLML.Side = A.Side),
                (A.NextInLML.WindDelta = A.WindDelta),
                (A.NextInLML.WindCnt = A.WindCnt),
                (A.NextInLML.WindCnt2 = A.WindCnt2),
                ((A = A.NextInLML).Curr.X = A.Bot.X),
                (A.Curr.Y = A.Bot.Y),
                (A.PrevInAEL = I),
                (A.NextInAEL = C),
                g.ClipperBase.IsHorizontal(A) || this.InsertScanbeam(A.Top.Y),
                A
              )
            }),
            (g.Clipper.prototype.ProcessHorizontals = function (A) {
              for (var I = this.m_SortedEdges; null !== I; )
                this.DeleteFromSEL(I),
                  this.ProcessHorizontal(I, A),
                  (I = this.m_SortedEdges)
            }),
            (g.Clipper.prototype.GetHorzDirection = function (A, I) {
              A.Bot.X < A.Top.X
                ? ((I.Left = A.Bot.X),
                  (I.Right = A.Top.X),
                  (I.Dir = g.Direction.dLeftToRight))
                : ((I.Left = A.Top.X),
                  (I.Right = A.Bot.X),
                  (I.Dir = g.Direction.dRightToLeft))
            }),
            (g.Clipper.prototype.PrepareHorzJoins = function (A, I) {
              var C = this.m_PolyOuts[A.OutIdx].Pts
              A.Side != g.EdgeSide.esLeft && (C = C.Prev),
                I &&
                  (g.IntPoint.op_Equality(C.Pt, A.Top)
                    ? this.AddGhostJoin(C, A.Bot)
                    : this.AddGhostJoin(C, A.Top))
            }),
            (g.Clipper.prototype.ProcessHorizontal = function (A, I) {
              var C = { Dir: null, Left: null, Right: null }
              this.GetHorzDirection(A, C)
              for (
                var B = C.Dir, Q = C.Left, E = C.Right, i = A, o = null;
                null !== i.NextInLML && g.ClipperBase.IsHorizontal(i.NextInLML);

              )
                i = i.NextInLML
              for (null === i.NextInLML && (o = this.GetMaximaPair(i)); ; ) {
                for (
                  var D = A == i, n = this.GetNextInAEL(A, B);
                  null !== n &&
                  !(
                    n.Curr.X == A.Top.X &&
                    null !== A.NextInLML &&
                    n.Dx < A.NextInLML.Dx
                  );

                ) {
                  var t = this.GetNextInAEL(n, B)
                  if (
                    (B == g.Direction.dLeftToRight && n.Curr.X <= E) ||
                    (B == g.Direction.dRightToLeft && n.Curr.X >= Q)
                  ) {
                    if (
                      (A.OutIdx >= 0 &&
                        0 != A.WindDelta &&
                        this.PrepareHorzJoins(A, I),
                      n == o && D)
                    )
                      return (
                        B == g.Direction.dLeftToRight
                          ? this.IntersectEdges(A, n, n.Top, !1)
                          : this.IntersectEdges(n, A, n.Top, !1),
                        void (
                          o.OutIdx >= 0 && g.Error("ProcessHorizontal error")
                        )
                      )
                    if (B == g.Direction.dLeftToRight) {
                      var a = new g.IntPoint(n.Curr.X, A.Curr.Y)
                      this.IntersectEdges(A, n, a, !0)
                    } else
                      (a = new g.IntPoint(n.Curr.X, A.Curr.Y)),
                        this.IntersectEdges(n, A, a, !0)
                    this.SwapPositionsInAEL(A, n)
                  } else if (
                    (B == g.Direction.dLeftToRight && n.Curr.X >= E) ||
                    (B == g.Direction.dRightToLeft && n.Curr.X <= Q)
                  )
                    break
                  n = t
                }
                if (
                  (A.OutIdx >= 0 &&
                    0 !== A.WindDelta &&
                    this.PrepareHorzJoins(A, I),
                  null === A.NextInLML ||
                    !g.ClipperBase.IsHorizontal(A.NextInLML))
                )
                  break
                ;(A = this.UpdateEdgeIntoAEL(A)).OutIdx >= 0 &&
                  this.AddOutPt(A, A.Bot),
                  (C = { Dir: B, Left: Q, Right: E }),
                  this.GetHorzDirection(A, C),
                  (B = C.Dir),
                  (Q = C.Left),
                  (E = C.Right)
              }
              if (null !== A.NextInLML)
                if (A.OutIdx >= 0) {
                  var s = this.AddOutPt(A, A.Top)
                  if (0 === (A = this.UpdateEdgeIntoAEL(A)).WindDelta) return
                  var w = A.PrevInAEL
                  if (
                    ((t = A.NextInAEL),
                    null !== w &&
                      w.Curr.X == A.Bot.X &&
                      w.Curr.Y == A.Bot.Y &&
                      0 !== w.WindDelta &&
                      w.OutIdx >= 0 &&
                      w.Curr.Y > w.Top.Y &&
                      g.ClipperBase.SlopesEqual(A, w, this.m_UseFullRange))
                  ) {
                    var h = this.AddOutPt(w, A.Bot)
                    this.AddJoin(s, h, A.Top)
                  } else
                    null !== t &&
                      t.Curr.X == A.Bot.X &&
                      t.Curr.Y == A.Bot.Y &&
                      0 !== t.WindDelta &&
                      t.OutIdx >= 0 &&
                      t.Curr.Y > t.Top.Y &&
                      g.ClipperBase.SlopesEqual(A, t, this.m_UseFullRange) &&
                      ((h = this.AddOutPt(t, A.Bot)), this.AddJoin(s, h, A.Top))
                } else A = this.UpdateEdgeIntoAEL(A)
              else
                null !== o
                  ? o.OutIdx >= 0
                    ? (B == g.Direction.dLeftToRight
                        ? this.IntersectEdges(A, o, A.Top, !1)
                        : this.IntersectEdges(o, A, A.Top, !1),
                      o.OutIdx >= 0 && g.Error("ProcessHorizontal error"))
                    : (this.DeleteFromAEL(A), this.DeleteFromAEL(o))
                  : (A.OutIdx >= 0 && this.AddOutPt(A, A.Top),
                    this.DeleteFromAEL(A))
            }),
            (g.Clipper.prototype.GetNextInAEL = function (A, I) {
              return I == g.Direction.dLeftToRight ? A.NextInAEL : A.PrevInAEL
            }),
            (g.Clipper.prototype.IsMinima = function (A) {
              return (
                null !== A && A.Prev.NextInLML != A && A.Next.NextInLML != A
              )
            }),
            (g.Clipper.prototype.IsMaxima = function (A, I) {
              return null !== A && A.Top.Y == I && null === A.NextInLML
            }),
            (g.Clipper.prototype.IsIntermediate = function (A, I) {
              return A.Top.Y == I && null !== A.NextInLML
            }),
            (g.Clipper.prototype.GetMaximaPair = function (A) {
              var I = null
              return (
                g.IntPoint.op_Equality(A.Next.Top, A.Top) &&
                null === A.Next.NextInLML
                  ? (I = A.Next)
                  : g.IntPoint.op_Equality(A.Prev.Top, A.Top) &&
                    null === A.Prev.NextInLML &&
                    (I = A.Prev),
                null === I ||
                (-2 != I.OutIdx &&
                  (I.NextInAEL != I.PrevInAEL || g.ClipperBase.IsHorizontal(I)))
                  ? I
                  : null
              )
            }),
            (g.Clipper.prototype.ProcessIntersections = function (A, I) {
              if (null == this.m_ActiveEdges) return !0
              try {
                if (
                  (this.BuildIntersectList(A, I),
                  0 == this.m_IntersectList.length)
                )
                  return !0
                if (
                  1 != this.m_IntersectList.length &&
                  !this.FixupIntersectionOrder()
                )
                  return !1
                this.ProcessIntersectList()
              } catch (A) {
                ;(this.m_SortedEdges = null),
                  (this.m_IntersectList.length = 0),
                  g.Error("ProcessIntersections error")
              }
              return (this.m_SortedEdges = null), !0
            }),
            (g.Clipper.prototype.BuildIntersectList = function (A, I) {
              if (null !== this.m_ActiveEdges) {
                var C = this.m_ActiveEdges
                for (this.m_SortedEdges = C; null !== C; )
                  (C.PrevInSEL = C.PrevInAEL),
                    (C.NextInSEL = C.NextInAEL),
                    (C.Curr.X = g.Clipper.TopX(C, I)),
                    (C = C.NextInAEL)
                for (var B = !0; B && null !== this.m_SortedEdges; ) {
                  for (B = !1, C = this.m_SortedEdges; null !== C.NextInSEL; ) {
                    var Q = C.NextInSEL,
                      E = new g.IntPoint()
                    if (C.Curr.X > Q.Curr.X) {
                      !this.IntersectPoint(C, Q, E) &&
                        C.Curr.X > Q.Curr.X + 1 &&
                        g.Error("Intersection error"),
                        E.Y > A &&
                          ((E.Y = A),
                          Math.abs(C.Dx) > Math.abs(Q.Dx)
                            ? (E.X = g.Clipper.TopX(Q, A))
                            : (E.X = g.Clipper.TopX(C, A)))
                      var i = new g.IntersectNode()
                      ;(i.Edge1 = C),
                        (i.Edge2 = Q),
                        (i.Pt.X = E.X),
                        (i.Pt.Y = E.Y),
                        this.m_IntersectList.push(i),
                        this.SwapPositionsInSEL(C, Q),
                        (B = !0)
                    } else C = Q
                  }
                  if (null === C.PrevInSEL) break
                  C.PrevInSEL.NextInSEL = null
                }
                this.m_SortedEdges = null
              }
            }),
            (g.Clipper.prototype.EdgesAdjacent = function (A) {
              return (
                A.Edge1.NextInSEL == A.Edge2 || A.Edge1.PrevInSEL == A.Edge2
              )
            }),
            (g.Clipper.IntersectNodeSort = function (A, I) {
              return I.Pt.Y - A.Pt.Y
            }),
            (g.Clipper.prototype.FixupIntersectionOrder = function () {
              this.m_IntersectList.sort(this.m_IntersectNodeComparer),
                this.CopyAELToSEL()
              for (var A = this.m_IntersectList.length, I = 0; I < A; I++) {
                if (!this.EdgesAdjacent(this.m_IntersectList[I])) {
                  for (
                    var g = I + 1;
                    g < A && !this.EdgesAdjacent(this.m_IntersectList[g]);

                  )
                    g++
                  if (g == A) return !1
                  var C = this.m_IntersectList[I]
                  ;(this.m_IntersectList[I] = this.m_IntersectList[g]),
                    (this.m_IntersectList[g] = C)
                }
                this.SwapPositionsInSEL(
                  this.m_IntersectList[I].Edge1,
                  this.m_IntersectList[I].Edge2
                )
              }
              return !0
            }),
            (g.Clipper.prototype.ProcessIntersectList = function () {
              for (var A = 0, I = this.m_IntersectList.length; A < I; A++) {
                var g = this.m_IntersectList[A]
                this.IntersectEdges(g.Edge1, g.Edge2, g.Pt, !0),
                  this.SwapPositionsInAEL(g.Edge1, g.Edge2)
              }
              this.m_IntersectList.length = 0
            }),
            E.msie
              ? (g.Clipper.Round = function (A) {
                  return A < 0 ? Math.ceil(A - 0.5) : Math.round(A)
                })
              : E.chromium
              ? (g.Clipper.Round = function (A) {
                  return A < 0 ? -Math.round(Math.abs(A)) : Math.round(A)
                })
              : E.safari
              ? (g.Clipper.Round = function (A) {
                  return A < 0
                    ? (A -= 0.5) < -2147483648
                      ? Math.ceil(A)
                      : 0 | A
                    : (A += 0.5) > 2147483647
                    ? Math.floor(A)
                    : 0 | A
                })
              : (g.Clipper.Round = function (A) {
                  return A < 0 ? Math.ceil(A - 0.5) : Math.floor(A + 0.5)
                }),
            (g.Clipper.TopX = function (A, I) {
              return I == A.Top.Y
                ? A.Top.X
                : A.Bot.X + g.Clipper.Round(A.Dx * (I - A.Bot.Y))
            }),
            (g.Clipper.prototype.IntersectPoint = function (A, I, C) {
              var B, Q
              if (
                ((C.X = 0),
                (C.Y = 0),
                g.ClipperBase.SlopesEqual(A, I, this.m_UseFullRange) ||
                  A.Dx == I.Dx)
              )
                return (
                  I.Bot.Y > A.Bot.Y
                    ? ((C.X = I.Bot.X), (C.Y = I.Bot.Y))
                    : ((C.X = A.Bot.X), (C.Y = A.Bot.Y)),
                  !1
                )
              if (0 === A.Delta.X)
                (C.X = A.Bot.X),
                  g.ClipperBase.IsHorizontal(I)
                    ? (C.Y = I.Bot.Y)
                    : ((Q = I.Bot.Y - I.Bot.X / I.Dx),
                      (C.Y = g.Clipper.Round(C.X / I.Dx + Q)))
              else if (0 === I.Delta.X)
                (C.X = I.Bot.X),
                  g.ClipperBase.IsHorizontal(A)
                    ? (C.Y = A.Bot.Y)
                    : ((B = A.Bot.Y - A.Bot.X / A.Dx),
                      (C.Y = g.Clipper.Round(C.X / A.Dx + B)))
              else {
                B = A.Bot.X - A.Bot.Y * A.Dx
                var E = ((Q = I.Bot.X - I.Bot.Y * I.Dx) - B) / (A.Dx - I.Dx)
                ;(C.Y = g.Clipper.Round(E)),
                  Math.abs(A.Dx) < Math.abs(I.Dx)
                    ? (C.X = g.Clipper.Round(A.Dx * E + B))
                    : (C.X = g.Clipper.Round(I.Dx * E + Q))
              }
              if (C.Y < A.Top.Y || C.Y < I.Top.Y) {
                if (A.Top.Y > I.Top.Y)
                  return (
                    (C.Y = A.Top.Y),
                    (C.X = g.Clipper.TopX(I, A.Top.Y)),
                    C.X < A.Top.X
                  )
                ;(C.Y = I.Top.Y),
                  Math.abs(A.Dx) < Math.abs(I.Dx)
                    ? (C.X = g.Clipper.TopX(A, C.Y))
                    : (C.X = g.Clipper.TopX(I, C.Y))
              }
              return !0
            }),
            (g.Clipper.prototype.ProcessEdgesAtTopOfScanbeam = function (A) {
              for (var I = this.m_ActiveEdges; null !== I; ) {
                var C = this.IsMaxima(I, A)
                if (C) {
                  var B = this.GetMaximaPair(I)
                  C = null === B || !g.ClipperBase.IsHorizontal(B)
                }
                if (C) {
                  var Q = I.PrevInAEL
                  this.DoMaxima(I),
                    (I = null === Q ? this.m_ActiveEdges : Q.NextInAEL)
                } else {
                  if (
                    (this.IsIntermediate(I, A) &&
                    g.ClipperBase.IsHorizontal(I.NextInLML)
                      ? ((I = this.UpdateEdgeIntoAEL(I)).OutIdx >= 0 &&
                          this.AddOutPt(I, I.Bot),
                        this.AddEdgeToSEL(I))
                      : ((I.Curr.X = g.Clipper.TopX(I, A)), (I.Curr.Y = A)),
                    this.StrictlySimple &&
                      ((Q = I.PrevInAEL),
                      I.OutIdx >= 0 &&
                        0 !== I.WindDelta &&
                        null !== Q &&
                        Q.OutIdx >= 0 &&
                        Q.Curr.X == I.Curr.X &&
                        0 !== Q.WindDelta))
                  ) {
                    var E = this.AddOutPt(Q, I.Curr),
                      i = this.AddOutPt(I, I.Curr)
                    this.AddJoin(E, i, I.Curr)
                  }
                  I = I.NextInAEL
                }
              }
              for (
                this.ProcessHorizontals(!0), I = this.m_ActiveEdges;
                null !== I;

              ) {
                if (this.IsIntermediate(I, A)) {
                  ;(E = null),
                    I.OutIdx >= 0 && (E = this.AddOutPt(I, I.Top)),
                    (Q = (I = this.UpdateEdgeIntoAEL(I)).PrevInAEL)
                  var o = I.NextInAEL
                  null !== Q &&
                  Q.Curr.X == I.Bot.X &&
                  Q.Curr.Y == I.Bot.Y &&
                  null !== E &&
                  Q.OutIdx >= 0 &&
                  Q.Curr.Y > Q.Top.Y &&
                  g.ClipperBase.SlopesEqual(I, Q, this.m_UseFullRange) &&
                  0 !== I.WindDelta &&
                  0 !== Q.WindDelta
                    ? ((i = this.AddOutPt(Q, I.Bot)), this.AddJoin(E, i, I.Top))
                    : null !== o &&
                      o.Curr.X == I.Bot.X &&
                      o.Curr.Y == I.Bot.Y &&
                      null !== E &&
                      o.OutIdx >= 0 &&
                      o.Curr.Y > o.Top.Y &&
                      g.ClipperBase.SlopesEqual(I, o, this.m_UseFullRange) &&
                      0 !== I.WindDelta &&
                      0 !== o.WindDelta &&
                      ((i = this.AddOutPt(o, I.Bot)), this.AddJoin(E, i, I.Top))
                }
                I = I.NextInAEL
              }
            }),
            (g.Clipper.prototype.DoMaxima = function (A) {
              var I = this.GetMaximaPair(A)
              if (null === I)
                return (
                  A.OutIdx >= 0 && this.AddOutPt(A, A.Top),
                  void this.DeleteFromAEL(A)
                )
              for (var C = A.NextInAEL; null !== C && C != I; )
                this.IntersectEdges(A, C, A.Top, !0),
                  this.SwapPositionsInAEL(A, C),
                  (C = A.NextInAEL)
              ;-1 == A.OutIdx && -1 == I.OutIdx
                ? (this.DeleteFromAEL(A), this.DeleteFromAEL(I))
                : A.OutIdx >= 0 && I.OutIdx >= 0
                ? this.IntersectEdges(A, I, A.Top, !1)
                : 0 === A.WindDelta
                ? (A.OutIdx >= 0 && (this.AddOutPt(A, A.Top), (A.OutIdx = -1)),
                  this.DeleteFromAEL(A),
                  I.OutIdx >= 0 && (this.AddOutPt(I, A.Top), (I.OutIdx = -1)),
                  this.DeleteFromAEL(I))
                : g.Error("DoMaxima error")
            }),
            (g.Clipper.ReversePaths = function (A) {
              for (var I = 0, g = A.length; I < g; I++) A[I].reverse()
            }),
            (g.Clipper.Orientation = function (A) {
              return g.Clipper.Area(A) >= 0
            }),
            (g.Clipper.prototype.PointCount = function (A) {
              if (null === A) return 0
              var I = 0,
                g = A
              do {
                I++, (g = g.Next)
              } while (g != A)
              return I
            }),
            (g.Clipper.prototype.BuildResult = function (A) {
              g.Clear(A)
              for (var I = 0, C = this.m_PolyOuts.length; I < C; I++) {
                var B = this.m_PolyOuts[I]
                if (null !== B.Pts) {
                  var Q = B.Pts.Prev,
                    E = this.PointCount(Q)
                  if (!(E < 2)) {
                    for (var i = new Array(E), o = 0; o < E; o++)
                      (i[o] = Q.Pt), (Q = Q.Prev)
                    A.push(i)
                  }
                }
              }
            }),
            (g.Clipper.prototype.BuildResult2 = function (A) {
              A.Clear()
              for (var I = 0, C = this.m_PolyOuts.length; I < C; I++) {
                var B = this.m_PolyOuts[I],
                  Q = this.PointCount(B.Pts)
                if (!((B.IsOpen && Q < 2) || (!B.IsOpen && Q < 3))) {
                  this.FixHoleLinkage(B)
                  var E = new g.PolyNode()
                  A.m_AllPolys.push(E),
                    (B.PolyNode = E),
                    (E.m_polygon.length = Q)
                  for (var i = B.Pts.Prev, o = 0; o < Q; o++)
                    (E.m_polygon[o] = i.Pt), (i = i.Prev)
                }
              }
              for (I = 0, C = this.m_PolyOuts.length; I < C; I++)
                null !== (B = this.m_PolyOuts[I]).PolyNode &&
                  (B.IsOpen
                    ? ((B.PolyNode.IsOpen = !0), A.AddChild(B.PolyNode))
                    : null !== B.FirstLeft && null != B.FirstLeft.PolyNode
                    ? B.FirstLeft.PolyNode.AddChild(B.PolyNode)
                    : A.AddChild(B.PolyNode))
            }),
            (g.Clipper.prototype.FixupOutPolygon = function (A) {
              var I = null
              A.BottomPt = null
              for (var C = A.Pts; ; ) {
                if (C.Prev == C || C.Prev == C.Next)
                  return this.DisposeOutPts(C), void (A.Pts = null)
                if (
                  g.IntPoint.op_Equality(C.Pt, C.Next.Pt) ||
                  g.IntPoint.op_Equality(C.Pt, C.Prev.Pt) ||
                  (g.ClipperBase.SlopesEqual(
                    C.Prev.Pt,
                    C.Pt,
                    C.Next.Pt,
                    this.m_UseFullRange
                  ) &&
                    (!this.PreserveCollinear ||
                      !this.Pt2IsBetweenPt1AndPt3(C.Prev.Pt, C.Pt, C.Next.Pt)))
                )
                  (I = null),
                    (C.Prev.Next = C.Next),
                    (C.Next.Prev = C.Prev),
                    (C = C.Prev)
                else {
                  if (C == I) break
                  null === I && (I = C), (C = C.Next)
                }
              }
              A.Pts = C
            }),
            (g.Clipper.prototype.DupOutPt = function (A, I) {
              var C = new g.OutPt()
              return (
                (C.Pt.X = A.Pt.X),
                (C.Pt.Y = A.Pt.Y),
                (C.Idx = A.Idx),
                I
                  ? ((C.Next = A.Next),
                    (C.Prev = A),
                    (A.Next.Prev = C),
                    (A.Next = C))
                  : ((C.Prev = A.Prev),
                    (C.Next = A),
                    (A.Prev.Next = C),
                    (A.Prev = C)),
                C
              )
            }),
            (g.Clipper.prototype.GetOverlap = function (A, I, g, C, B) {
              return (
                A < I
                  ? g < C
                    ? ((B.Left = Math.max(A, g)), (B.Right = Math.min(I, C)))
                    : ((B.Left = Math.max(A, C)), (B.Right = Math.min(I, g)))
                  : g < C
                  ? ((B.Left = Math.max(I, g)), (B.Right = Math.min(A, C)))
                  : ((B.Left = Math.max(I, C)), (B.Right = Math.min(A, g))),
                B.Left < B.Right
              )
            }),
            (g.Clipper.prototype.JoinHorz = function (A, I, C, B, Q, E) {
              var i =
                  A.Pt.X > I.Pt.X
                    ? g.Direction.dRightToLeft
                    : g.Direction.dLeftToRight,
                o =
                  C.Pt.X > B.Pt.X
                    ? g.Direction.dRightToLeft
                    : g.Direction.dLeftToRight
              if (i == o) return !1
              if (i == g.Direction.dLeftToRight) {
                for (
                  ;
                  A.Next.Pt.X <= Q.X &&
                  A.Next.Pt.X >= A.Pt.X &&
                  A.Next.Pt.Y == Q.Y;

                )
                  A = A.Next
                E && A.Pt.X != Q.X && (A = A.Next),
                  (I = this.DupOutPt(A, !E)),
                  g.IntPoint.op_Inequality(I.Pt, Q) &&
                    (((A = I).Pt.X = Q.X),
                    (A.Pt.Y = Q.Y),
                    (I = this.DupOutPt(A, !E)))
              } else {
                for (
                  ;
                  A.Next.Pt.X >= Q.X &&
                  A.Next.Pt.X <= A.Pt.X &&
                  A.Next.Pt.Y == Q.Y;

                )
                  A = A.Next
                E || A.Pt.X == Q.X || (A = A.Next),
                  (I = this.DupOutPt(A, E)),
                  g.IntPoint.op_Inequality(I.Pt, Q) &&
                    (((A = I).Pt.X = Q.X),
                    (A.Pt.Y = Q.Y),
                    (I = this.DupOutPt(A, E)))
              }
              if (o == g.Direction.dLeftToRight) {
                for (
                  ;
                  C.Next.Pt.X <= Q.X &&
                  C.Next.Pt.X >= C.Pt.X &&
                  C.Next.Pt.Y == Q.Y;

                )
                  C = C.Next
                E && C.Pt.X != Q.X && (C = C.Next),
                  (B = this.DupOutPt(C, !E)),
                  g.IntPoint.op_Inequality(B.Pt, Q) &&
                    (((C = B).Pt.X = Q.X),
                    (C.Pt.Y = Q.Y),
                    (B = this.DupOutPt(C, !E)))
              } else {
                for (
                  ;
                  C.Next.Pt.X >= Q.X &&
                  C.Next.Pt.X <= C.Pt.X &&
                  C.Next.Pt.Y == Q.Y;

                )
                  C = C.Next
                E || C.Pt.X == Q.X || (C = C.Next),
                  (B = this.DupOutPt(C, E)),
                  g.IntPoint.op_Inequality(B.Pt, Q) &&
                    (((C = B).Pt.X = Q.X),
                    (C.Pt.Y = Q.Y),
                    (B = this.DupOutPt(C, E)))
              }
              return (
                (i == g.Direction.dLeftToRight) == E
                  ? ((A.Prev = C), (C.Next = A), (I.Next = B), (B.Prev = I))
                  : ((A.Next = C), (C.Prev = A), (I.Prev = B), (B.Next = I)),
                !0
              )
            }),
            (g.Clipper.prototype.JoinPoints = function (A, I, C) {
              var B = A.OutPt1,
                Q = new g.OutPt(),
                E = A.OutPt2,
                i = new g.OutPt(),
                o = A.OutPt1.Pt.Y == A.OffPt.Y
              if (
                o &&
                g.IntPoint.op_Equality(A.OffPt, A.OutPt1.Pt) &&
                g.IntPoint.op_Equality(A.OffPt, A.OutPt2.Pt)
              ) {
                for (
                  Q = A.OutPt1.Next;
                  Q != B && g.IntPoint.op_Equality(Q.Pt, A.OffPt);

                )
                  Q = Q.Next
                var D = Q.Pt.Y > A.OffPt.Y
                for (
                  i = A.OutPt2.Next;
                  i != E && g.IntPoint.op_Equality(i.Pt, A.OffPt);

                )
                  i = i.Next
                return (
                  D != i.Pt.Y > A.OffPt.Y &&
                  (D
                    ? ((Q = this.DupOutPt(B, !1)),
                      (i = this.DupOutPt(E, !0)),
                      (B.Prev = E),
                      (E.Next = B),
                      (Q.Next = i),
                      (i.Prev = Q),
                      (A.OutPt1 = B),
                      (A.OutPt2 = Q),
                      !0)
                    : ((Q = this.DupOutPt(B, !0)),
                      (i = this.DupOutPt(E, !1)),
                      (B.Next = E),
                      (E.Prev = B),
                      (Q.Prev = i),
                      (i.Next = Q),
                      (A.OutPt1 = B),
                      (A.OutPt2 = Q),
                      !0))
                )
              }
              if (o) {
                for (
                  Q = B;
                  B.Prev.Pt.Y == B.Pt.Y && B.Prev != Q && B.Prev != E;

                )
                  B = B.Prev
                for (; Q.Next.Pt.Y == Q.Pt.Y && Q.Next != B && Q.Next != E; )
                  Q = Q.Next
                if (Q.Next == B || Q.Next == E) return !1
                for (
                  i = E;
                  E.Prev.Pt.Y == E.Pt.Y && E.Prev != i && E.Prev != Q;

                )
                  E = E.Prev
                for (; i.Next.Pt.Y == i.Pt.Y && i.Next != E && i.Next != B; )
                  i = i.Next
                if (i.Next == E || i.Next == B) return !1
                var n = { Left: null, Right: null }
                if (!this.GetOverlap(B.Pt.X, Q.Pt.X, E.Pt.X, i.Pt.X, n))
                  return !1
                var t,
                  a = n.Left,
                  s = n.Right,
                  w = new g.IntPoint()
                return (
                  B.Pt.X >= a && B.Pt.X <= s
                    ? ((w.X = B.Pt.X), (w.Y = B.Pt.Y), (t = B.Pt.X > Q.Pt.X))
                    : E.Pt.X >= a && E.Pt.X <= s
                    ? ((w.X = E.Pt.X), (w.Y = E.Pt.Y), (t = E.Pt.X > i.Pt.X))
                    : Q.Pt.X >= a && Q.Pt.X <= s
                    ? ((w.X = Q.Pt.X), (w.Y = Q.Pt.Y), (t = Q.Pt.X > B.Pt.X))
                    : ((w.X = i.Pt.X), (w.Y = i.Pt.Y), (t = i.Pt.X > E.Pt.X)),
                  (A.OutPt1 = B),
                  (A.OutPt2 = E),
                  this.JoinHorz(B, Q, E, i, w, t)
                )
              }
              for (Q = B.Next; g.IntPoint.op_Equality(Q.Pt, B.Pt) && Q != B; )
                Q = Q.Next
              var h =
                Q.Pt.Y > B.Pt.Y ||
                !g.ClipperBase.SlopesEqual(
                  B.Pt,
                  Q.Pt,
                  A.OffPt,
                  this.m_UseFullRange
                )
              if (h) {
                for (Q = B.Prev; g.IntPoint.op_Equality(Q.Pt, B.Pt) && Q != B; )
                  Q = Q.Prev
                if (
                  Q.Pt.Y > B.Pt.Y ||
                  !g.ClipperBase.SlopesEqual(
                    B.Pt,
                    Q.Pt,
                    A.OffPt,
                    this.m_UseFullRange
                  )
                )
                  return !1
              }
              for (i = E.Next; g.IntPoint.op_Equality(i.Pt, E.Pt) && i != E; )
                i = i.Next
              var e =
                i.Pt.Y > E.Pt.Y ||
                !g.ClipperBase.SlopesEqual(
                  E.Pt,
                  i.Pt,
                  A.OffPt,
                  this.m_UseFullRange
                )
              if (e) {
                for (i = E.Prev; g.IntPoint.op_Equality(i.Pt, E.Pt) && i != E; )
                  i = i.Prev
                if (
                  i.Pt.Y > E.Pt.Y ||
                  !g.ClipperBase.SlopesEqual(
                    E.Pt,
                    i.Pt,
                    A.OffPt,
                    this.m_UseFullRange
                  )
                )
                  return !1
              }
              return !(
                Q == B ||
                i == E ||
                Q == i ||
                (I == C && h == e) ||
                (h
                  ? ((Q = this.DupOutPt(B, !1)),
                    (i = this.DupOutPt(E, !0)),
                    (B.Prev = E),
                    (E.Next = B),
                    (Q.Next = i),
                    (i.Prev = Q),
                    (A.OutPt1 = B),
                    (A.OutPt2 = Q),
                    0)
                  : ((Q = this.DupOutPt(B, !0)),
                    (i = this.DupOutPt(E, !1)),
                    (B.Next = E),
                    (E.Prev = B),
                    (Q.Prev = i),
                    (i.Next = Q),
                    (A.OutPt1 = B),
                    (A.OutPt2 = Q),
                    0))
              )
            }),
            (g.Clipper.GetBounds = function (A) {
              for (var I = 0, C = A.length; I < C && 0 == A[I].length; ) I++
              if (I == C) return new g.IntRect(0, 0, 0, 0)
              var B = new g.IntRect()
              for (
                B.left = A[I][0].X,
                  B.right = B.left,
                  B.top = A[I][0].Y,
                  B.bottom = B.top;
                I < C;
                I++
              )
                for (var Q = 0, E = A[I].length; Q < E; Q++)
                  A[I][Q].X < B.left
                    ? (B.left = A[I][Q].X)
                    : A[I][Q].X > B.right && (B.right = A[I][Q].X),
                    A[I][Q].Y < B.top
                      ? (B.top = A[I][Q].Y)
                      : A[I][Q].Y > B.bottom && (B.bottom = A[I][Q].Y)
              return B
            }),
            (g.Clipper.prototype.GetBounds2 = function (A) {
              var I = A,
                C = new g.IntRect()
              for (
                C.left = A.Pt.X,
                  C.right = A.Pt.X,
                  C.top = A.Pt.Y,
                  C.bottom = A.Pt.Y,
                  A = A.Next;
                A != I;

              )
                A.Pt.X < C.left && (C.left = A.Pt.X),
                  A.Pt.X > C.right && (C.right = A.Pt.X),
                  A.Pt.Y < C.top && (C.top = A.Pt.Y),
                  A.Pt.Y > C.bottom && (C.bottom = A.Pt.Y),
                  (A = A.Next)
              return C
            }),
            (g.Clipper.PointInPolygon = function (A, I) {
              var g = 0,
                C = I.length
              if (C < 3) return 0
              for (var B = I[0], Q = 1; Q <= C; ++Q) {
                var E = Q == C ? I[0] : I[Q]
                if (
                  E.Y == A.Y &&
                  (E.X == A.X || (B.Y == A.Y && E.X > A.X == B.X < A.X))
                )
                  return -1
                if (B.Y < A.Y != E.Y < A.Y)
                  if (B.X >= A.X)
                    if (E.X > A.X) g = 1 - g
                    else {
                      if (
                        0 ==
                        (i =
                          (B.X - A.X) * (E.Y - A.Y) - (E.X - A.X) * (B.Y - A.Y))
                      )
                        return -1
                      i > 0 == E.Y > B.Y && (g = 1 - g)
                    }
                  else if (E.X > A.X) {
                    var i
                    if (
                      0 ==
                      (i =
                        (B.X - A.X) * (E.Y - A.Y) - (E.X - A.X) * (B.Y - A.Y))
                    )
                      return -1
                    i > 0 == E.Y > B.Y && (g = 1 - g)
                  }
                B = E
              }
              return g
            }),
            (g.Clipper.prototype.PointInPolygon = function (A, I) {
              for (var g = 0, C = I; ; ) {
                var B = I.Pt.X,
                  Q = I.Pt.Y,
                  E = I.Next.Pt.X,
                  i = I.Next.Pt.Y
                if (i == A.Y && (E == A.X || (Q == A.Y && E > A.X == B < A.X)))
                  return -1
                if (Q < A.Y != i < A.Y)
                  if (B >= A.X)
                    if (E > A.X) g = 1 - g
                    else {
                      if (
                        0 == (o = (B - A.X) * (i - A.Y) - (E - A.X) * (Q - A.Y))
                      )
                        return -1
                      o > 0 == i > Q && (g = 1 - g)
                    }
                  else if (E > A.X) {
                    var o
                    if (
                      0 == (o = (B - A.X) * (i - A.Y) - (E - A.X) * (Q - A.Y))
                    )
                      return -1
                    o > 0 == i > Q && (g = 1 - g)
                  }
                if (C == (I = I.Next)) break
              }
              return g
            }),
            (g.Clipper.prototype.Poly2ContainsPoly1 = function (A, I) {
              var g = A
              do {
                var C = this.PointInPolygon(g.Pt, I)
                if (C >= 0) return 0 != C
                g = g.Next
              } while (g != A)
              return !0
            }),
            (g.Clipper.prototype.FixupFirstLefts1 = function (A, I) {
              for (var g = 0, C = this.m_PolyOuts.length; g < C; g++) {
                var B = this.m_PolyOuts[g]
                null !== B.Pts &&
                  B.FirstLeft == A &&
                  this.Poly2ContainsPoly1(B.Pts, I.Pts) &&
                  (B.FirstLeft = I)
              }
            }),
            (g.Clipper.prototype.FixupFirstLefts2 = function (A, I) {
              for (
                var g = 0, C = this.m_PolyOuts, B = C.length, Q = C[g];
                g < B;
                Q = C[++g]
              )
                Q.FirstLeft == A && (Q.FirstLeft = I)
            }),
            (g.Clipper.ParseFirstLeft = function (A) {
              for (; null != A && null == A.Pts; ) A = A.FirstLeft
              return A
            }),
            (g.Clipper.prototype.JoinCommonEdges = function () {
              for (var A = 0, I = this.m_Joins.length; A < I; A++) {
                var C,
                  B = this.m_Joins[A],
                  Q = this.GetOutRec(B.OutPt1.Idx),
                  E = this.GetOutRec(B.OutPt2.Idx)
                if (
                  null != Q.Pts &&
                  null != E.Pts &&
                  ((C =
                    Q == E
                      ? Q
                      : this.Param1RightOfParam2(Q, E)
                      ? E
                      : this.Param1RightOfParam2(E, Q)
                      ? Q
                      : this.GetLowermostRec(Q, E)),
                  this.JoinPoints(B, Q, E))
                )
                  if (Q == E) {
                    if (
                      ((Q.Pts = B.OutPt1),
                      (Q.BottomPt = null),
                      ((E = this.CreateOutRec()).Pts = B.OutPt2),
                      this.UpdateOutPtIdxs(E),
                      this.m_UsingPolyTree)
                    )
                      for (
                        var i = 0, o = this.m_PolyOuts.length;
                        i < o - 1;
                        i++
                      ) {
                        var D = this.m_PolyOuts[i]
                        null != D.Pts &&
                          g.Clipper.ParseFirstLeft(D.FirstLeft) == Q &&
                          D.IsHole != Q.IsHole &&
                          this.Poly2ContainsPoly1(D.Pts, B.OutPt2) &&
                          (D.FirstLeft = E)
                      }
                    this.Poly2ContainsPoly1(E.Pts, Q.Pts)
                      ? ((E.IsHole = !Q.IsHole),
                        (E.FirstLeft = Q),
                        this.m_UsingPolyTree && this.FixupFirstLefts2(E, Q),
                        (E.IsHole ^ this.ReverseSolution) == this.Area(E) > 0 &&
                          this.ReversePolyPtLinks(E.Pts))
                      : this.Poly2ContainsPoly1(Q.Pts, E.Pts)
                      ? ((E.IsHole = Q.IsHole),
                        (Q.IsHole = !E.IsHole),
                        (E.FirstLeft = Q.FirstLeft),
                        (Q.FirstLeft = E),
                        this.m_UsingPolyTree && this.FixupFirstLefts2(Q, E),
                        (Q.IsHole ^ this.ReverseSolution) == this.Area(Q) > 0 &&
                          this.ReversePolyPtLinks(Q.Pts))
                      : ((E.IsHole = Q.IsHole),
                        (E.FirstLeft = Q.FirstLeft),
                        this.m_UsingPolyTree && this.FixupFirstLefts1(Q, E))
                  } else
                    (E.Pts = null),
                      (E.BottomPt = null),
                      (E.Idx = Q.Idx),
                      (Q.IsHole = C.IsHole),
                      C == E && (Q.FirstLeft = E.FirstLeft),
                      (E.FirstLeft = Q),
                      this.m_UsingPolyTree && this.FixupFirstLefts2(E, Q)
              }
            }),
            (g.Clipper.prototype.UpdateOutPtIdxs = function (A) {
              var I = A.Pts
              do {
                ;(I.Idx = A.Idx), (I = I.Prev)
              } while (I != A.Pts)
            }),
            (g.Clipper.prototype.DoSimplePolygons = function () {
              for (var A = 0; A < this.m_PolyOuts.length; ) {
                var I = this.m_PolyOuts[A++],
                  C = I.Pts
                if (null !== C)
                  do {
                    for (var B = C.Next; B != I.Pts; ) {
                      if (
                        g.IntPoint.op_Equality(C.Pt, B.Pt) &&
                        B.Next != C &&
                        B.Prev != C
                      ) {
                        var Q = C.Prev,
                          E = B.Prev
                        ;(C.Prev = E),
                          (E.Next = C),
                          (B.Prev = Q),
                          (Q.Next = B),
                          (I.Pts = C)
                        var i = this.CreateOutRec()
                        ;(i.Pts = B),
                          this.UpdateOutPtIdxs(i),
                          this.Poly2ContainsPoly1(i.Pts, I.Pts)
                            ? ((i.IsHole = !I.IsHole), (i.FirstLeft = I))
                            : this.Poly2ContainsPoly1(I.Pts, i.Pts)
                            ? ((i.IsHole = I.IsHole),
                              (I.IsHole = !i.IsHole),
                              (i.FirstLeft = I.FirstLeft),
                              (I.FirstLeft = i))
                            : ((i.IsHole = I.IsHole),
                              (i.FirstLeft = I.FirstLeft)),
                          (B = C)
                      }
                      B = B.Next
                    }
                    C = C.Next
                  } while (C != I.Pts)
              }
            }),
            (g.Clipper.Area = function (A) {
              var I = A.length
              if (I < 3) return 0
              for (var g = 0, C = 0, B = I - 1; C < I; ++C)
                (g += (A[B].X + A[C].X) * (A[B].Y - A[C].Y)), (B = C)
              return 0.5 * -g
            }),
            (g.Clipper.prototype.Area = function (A) {
              var I = A.Pts
              if (null == I) return 0
              var g = 0
              do {
                ;(g += (I.Prev.Pt.X + I.Pt.X) * (I.Prev.Pt.Y - I.Pt.Y)),
                  (I = I.Next)
              } while (I != A.Pts)
              return 0.5 * g
            }),
            (g.Clipper.SimplifyPolygon = function (A, I) {
              var C = new Array(),
                B = new g.Clipper(0)
              return (
                (B.StrictlySimple = !0),
                B.AddPath(A, g.PolyType.ptSubject, !0),
                B.Execute(g.ClipType.ctUnion, C, I, I),
                C
              )
            }),
            (g.Clipper.SimplifyPolygons = function (A, I) {
              void 0 === I && (I = g.PolyFillType.pftEvenOdd)
              var C = new Array(),
                B = new g.Clipper(0)
              return (
                (B.StrictlySimple = !0),
                B.AddPaths(A, g.PolyType.ptSubject, !0),
                B.Execute(g.ClipType.ctUnion, C, I, I),
                C
              )
            }),
            (g.Clipper.DistanceSqrd = function (A, I) {
              var g = A.X - I.X,
                C = A.Y - I.Y
              return g * g + C * C
            }),
            (g.Clipper.DistanceFromLineSqrd = function (A, I, g) {
              var C = I.Y - g.Y,
                B = g.X - I.X,
                Q = C * I.X + B * I.Y
              return ((Q = C * A.X + B * A.Y - Q) * Q) / (C * C + B * B)
            }),
            (g.Clipper.SlopesNearCollinear = function (A, I, C, B) {
              return g.Clipper.DistanceFromLineSqrd(I, A, C) < B
            }),
            (g.Clipper.PointsAreClose = function (A, I, g) {
              var C = A.X - I.X,
                B = A.Y - I.Y
              return C * C + B * B <= g
            }),
            (g.Clipper.ExcludeOp = function (A) {
              var I = A.Prev
              return (I.Next = A.Next), (A.Next.Prev = I), (I.Idx = 0), I
            }),
            (g.Clipper.CleanPolygon = function (A, I) {
              void 0 === I && (I = 1.415)
              var C = A.length
              if (0 == C) return new Array()
              for (var B = new Array(C), Q = 0; Q < C; ++Q) B[Q] = new g.OutPt()
              for (Q = 0; Q < C; ++Q)
                (B[Q].Pt = A[Q]),
                  (B[Q].Next = B[(Q + 1) % C]),
                  (B[Q].Next.Prev = B[Q]),
                  (B[Q].Idx = 0)
              for (var E = I * I, i = B[0]; 0 == i.Idx && i.Next != i.Prev; )
                g.Clipper.PointsAreClose(i.Pt, i.Prev.Pt, E)
                  ? ((i = g.Clipper.ExcludeOp(i)), C--)
                  : g.Clipper.PointsAreClose(i.Prev.Pt, i.Next.Pt, E)
                  ? (g.Clipper.ExcludeOp(i.Next),
                    (i = g.Clipper.ExcludeOp(i)),
                    (C -= 2))
                  : g.Clipper.SlopesNearCollinear(i.Prev.Pt, i.Pt, i.Next.Pt, E)
                  ? ((i = g.Clipper.ExcludeOp(i)), C--)
                  : ((i.Idx = 1), (i = i.Next))
              C < 3 && (C = 0)
              var o = new Array(C)
              for (Q = 0; Q < C; ++Q)
                (o[Q] = new g.IntPoint(i.Pt)), (i = i.Next)
              return (B = null), o
            }),
            (g.Clipper.CleanPolygons = function (A, I) {
              for (var C = new Array(A.length), B = 0, Q = A.length; B < Q; B++)
                C[B] = g.Clipper.CleanPolygon(A[B], I)
              return C
            }),
            (g.Clipper.Minkowski = function (A, I, C, B) {
              var Q = B ? 1 : 0,
                E = A.length,
                i = I.length,
                o = new Array()
              if (C)
                for (var D = 0; D < i; D++) {
                  for (
                    var n = new Array(E), t = 0, a = A.length, s = A[t];
                    t < a;
                    s = A[++t]
                  )
                    n[t] = new g.IntPoint(I[D].X + s.X, I[D].Y + s.Y)
                  o.push(n)
                }
              else
                for (D = 0; D < i; D++) {
                  for (
                    n = new Array(E), t = 0, a = A.length, s = A[t];
                    t < a;
                    s = A[++t]
                  )
                    n[t] = new g.IntPoint(I[D].X - s.X, I[D].Y - s.Y)
                  o.push(n)
                }
              var w = new Array()
              for (D = 0; D < i - 1 + Q; D++)
                for (t = 0; t < E; t++) {
                  var h = new Array()
                  h.push(o[D % i][t % E]),
                    h.push(o[(D + 1) % i][t % E]),
                    h.push(o[(D + 1) % i][(t + 1) % E]),
                    h.push(o[D % i][(t + 1) % E]),
                    g.Clipper.Orientation(h) || h.reverse(),
                    w.push(h)
                }
              var e = new g.Clipper(0)
              return (
                e.AddPaths(w, g.PolyType.ptSubject, !0),
                e.Execute(
                  g.ClipType.ctUnion,
                  o,
                  g.PolyFillType.pftNonZero,
                  g.PolyFillType.pftNonZero
                ),
                o
              )
            }),
            (g.Clipper.MinkowskiSum = function () {
              var A = arguments,
                I = A.length
              if (3 == I) {
                var C = A[0],
                  B = A[1],
                  Q = A[2]
                return g.Clipper.Minkowski(C, B, !0, Q)
              }
              if (4 == I) {
                C = A[0]
                for (
                  var E = A[1],
                    i = A[2],
                    o = ((Q = A[3]), new g.Clipper()),
                    D = 0,
                    n = E.length;
                  D < n;
                  ++D
                ) {
                  var t = g.Clipper.Minkowski(C, E[D], !0, Q)
                  o.AddPaths(t, g.PolyType.ptSubject, !0)
                }
                Q && o.AddPaths(E, g.PolyType.ptClip, !0)
                var a = new g.Paths()
                return o.Execute(g.ClipType.ctUnion, a, i, i), a
              }
            }),
            (g.Clipper.MinkowskiDiff = function (A, I, C) {
              return g.Clipper.Minkowski(A, I, !1, C)
            }),
            (g.Clipper.PolyTreeToPaths = function (A) {
              var I = new Array()
              return (
                g.Clipper.AddPolyNodeToPaths(A, g.Clipper.NodeType.ntAny, I), I
              )
            }),
            (g.Clipper.AddPolyNodeToPaths = function (A, I, C) {
              var B = !0
              switch (I) {
                case g.Clipper.NodeType.ntOpen:
                  return
                case g.Clipper.NodeType.ntClosed:
                  B = !A.IsOpen
              }
              A.m_polygon.length > 0 && B && C.push(A.m_polygon)
              for (
                var Q = 0, E = A.Childs(), i = E.length, o = E[Q];
                Q < i;
                o = E[++Q]
              )
                g.Clipper.AddPolyNodeToPaths(o, I, C)
            }),
            (g.Clipper.OpenPathsFromPolyTree = function (A) {
              for (var I = new g.Paths(), C = 0, B = A.ChildCount(); C < B; C++)
                A.Childs()[C].IsOpen && I.push(A.Childs()[C].m_polygon)
              return I
            }),
            (g.Clipper.ClosedPathsFromPolyTree = function (A) {
              var I = new g.Paths()
              return (
                g.Clipper.AddPolyNodeToPaths(A, g.Clipper.NodeType.ntClosed, I),
                I
              )
            }),
            L(g.Clipper, g.ClipperBase),
            (g.Clipper.NodeType = { ntAny: 0, ntOpen: 1, ntClosed: 2 }),
            (g.ClipperOffset = function (A, I) {
              void 0 === A && (A = 2),
                void 0 === I && (I = g.ClipperOffset.def_arc_tolerance),
                (this.m_destPolys = new g.Paths()),
                (this.m_srcPoly = new g.Path()),
                (this.m_destPoly = new g.Path()),
                (this.m_normals = new Array()),
                (this.m_delta = 0),
                (this.m_sinA = 0),
                (this.m_sin = 0),
                (this.m_cos = 0),
                (this.m_miterLim = 0),
                (this.m_StepsPerRad = 0),
                (this.m_lowest = new g.IntPoint()),
                (this.m_polyNodes = new g.PolyNode()),
                (this.MiterLimit = A),
                (this.ArcTolerance = I),
                (this.m_lowest.X = -1)
            }),
            (g.ClipperOffset.two_pi = 6.28318530717959),
            (g.ClipperOffset.def_arc_tolerance = 0.25),
            (g.ClipperOffset.prototype.Clear = function () {
              g.Clear(this.m_polyNodes.Childs()), (this.m_lowest.X = -1)
            }),
            (g.ClipperOffset.Round = g.Clipper.Round),
            (g.ClipperOffset.prototype.AddPath = function (A, I, C) {
              var B = A.length - 1
              if (!(B < 0)) {
                var Q = new g.PolyNode()
                if (
                  ((Q.m_jointype = I),
                  (Q.m_endtype = C),
                  C == g.EndType.etClosedLine || C == g.EndType.etClosedPolygon)
                )
                  for (; B > 0 && g.IntPoint.op_Equality(A[0], A[B]); ) B--
                Q.m_polygon.push(A[0])
                for (var E = 0, i = 0, o = 1; o <= B; o++)
                  g.IntPoint.op_Inequality(Q.m_polygon[E], A[o]) &&
                    (E++,
                    Q.m_polygon.push(A[o]),
                    (A[o].Y > Q.m_polygon[i].Y ||
                      (A[o].Y == Q.m_polygon[i].Y &&
                        A[o].X < Q.m_polygon[i].X)) &&
                      (i = E))
                if (
                  !(
                    (C == g.EndType.etClosedPolygon && E < 2) ||
                    (C != g.EndType.etClosedPolygon && E < 0)
                  ) &&
                  (this.m_polyNodes.AddChild(Q), C == g.EndType.etClosedPolygon)
                )
                  if (this.m_lowest.X < 0) this.m_lowest = new g.IntPoint(0, i)
                  else {
                    var D =
                      this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[
                        this.m_lowest.Y
                      ]
                    ;(Q.m_polygon[i].Y > D.Y ||
                      (Q.m_polygon[i].Y == D.Y && Q.m_polygon[i].X < D.X)) &&
                      (this.m_lowest = new g.IntPoint(
                        this.m_polyNodes.ChildCount() - 1,
                        i
                      ))
                  }
              }
            }),
            (g.ClipperOffset.prototype.AddPaths = function (A, I, g) {
              for (var C = 0, B = A.length; C < B; C++) this.AddPath(A[C], I, g)
            }),
            (g.ClipperOffset.prototype.FixOrientations = function () {
              if (
                this.m_lowest.X >= 0 &&
                !g.Clipper.Orientation(
                  this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon
                )
              )
                for (var A = 0; A < this.m_polyNodes.ChildCount(); A++)
                  ((I = this.m_polyNodes.Childs()[A]).m_endtype ==
                    g.EndType.etClosedPolygon ||
                    (I.m_endtype == g.EndType.etClosedLine &&
                      g.Clipper.Orientation(I.m_polygon))) &&
                    I.m_polygon.reverse()
              else
                for (A = 0; A < this.m_polyNodes.ChildCount(); A++) {
                  var I
                  ;(I = this.m_polyNodes.Childs()[A]).m_endtype !=
                    g.EndType.etClosedLine ||
                    g.Clipper.Orientation(I.m_polygon) ||
                    I.m_polygon.reverse()
                }
            }),
            (g.ClipperOffset.GetUnitNormal = function (A, I) {
              var C = I.X - A.X,
                B = I.Y - A.Y
              if (0 == C && 0 == B) return new g.DoublePoint(0, 0)
              var Q = 1 / Math.sqrt(C * C + B * B)
              return (C *= Q), (B *= Q), new g.DoublePoint(B, -C)
            }),
            (g.ClipperOffset.prototype.DoOffset = function (A) {
              if (
                ((this.m_destPolys = new Array()),
                (this.m_delta = A),
                g.ClipperBase.near_zero(A))
              )
                for (var I = 0; I < this.m_polyNodes.ChildCount(); I++)
                  (Q = this.m_polyNodes.Childs()[I]).m_endtype ==
                    g.EndType.etClosedPolygon &&
                    this.m_destPolys.push(Q.m_polygon)
              else {
                var C
                this.MiterLimit > 2
                  ? (this.m_miterLim = 2 / (this.MiterLimit * this.MiterLimit))
                  : (this.m_miterLim = 0.5),
                  (C =
                    this.ArcTolerance <= 0
                      ? g.ClipperOffset.def_arc_tolerance
                      : this.ArcTolerance >
                        Math.abs(A) * g.ClipperOffset.def_arc_tolerance
                      ? Math.abs(A) * g.ClipperOffset.def_arc_tolerance
                      : this.ArcTolerance)
                var B = 3.14159265358979 / Math.acos(1 - C / Math.abs(A))
                for (
                  this.m_sin = Math.sin(g.ClipperOffset.two_pi / B),
                    this.m_cos = Math.cos(g.ClipperOffset.two_pi / B),
                    this.m_StepsPerRad = B / g.ClipperOffset.two_pi,
                    A < 0 && (this.m_sin = -this.m_sin),
                    I = 0;
                  I < this.m_polyNodes.ChildCount();
                  I++
                ) {
                  var Q = this.m_polyNodes.Childs()[I]
                  this.m_srcPoly = Q.m_polygon
                  var E = this.m_srcPoly.length
                  if (
                    !(
                      0 == E ||
                      (A <= 0 &&
                        (E < 3 || Q.m_endtype != g.EndType.etClosedPolygon))
                    )
                  )
                    if (((this.m_destPoly = new Array()), 1 != E)) {
                      for (this.m_normals.length = 0, a = 0; a < E - 1; a++)
                        this.m_normals.push(
                          g.ClipperOffset.GetUnitNormal(
                            this.m_srcPoly[a],
                            this.m_srcPoly[a + 1]
                          )
                        )
                      if (
                        (Q.m_endtype == g.EndType.etClosedLine ||
                        Q.m_endtype == g.EndType.etClosedPolygon
                          ? this.m_normals.push(
                              g.ClipperOffset.GetUnitNormal(
                                this.m_srcPoly[E - 1],
                                this.m_srcPoly[0]
                              )
                            )
                          : this.m_normals.push(
                              new g.DoublePoint(this.m_normals[E - 2])
                            ),
                        Q.m_endtype == g.EndType.etClosedPolygon)
                      ) {
                        var i = E - 1
                        for (a = 0; a < E; a++)
                          i = this.OffsetPoint(a, i, Q.m_jointype)
                        this.m_destPolys.push(this.m_destPoly)
                      } else if (Q.m_endtype == g.EndType.etClosedLine) {
                        for (i = E - 1, a = 0; a < E; a++)
                          i = this.OffsetPoint(a, i, Q.m_jointype)
                        this.m_destPolys.push(this.m_destPoly),
                          (this.m_destPoly = new Array())
                        var o = this.m_normals[E - 1]
                        for (a = E - 1; a > 0; a--)
                          this.m_normals[a] = new g.DoublePoint(
                            -this.m_normals[a - 1].X,
                            -this.m_normals[a - 1].Y
                          )
                        for (
                          this.m_normals[0] = new g.DoublePoint(-o.X, -o.Y),
                            i = 0,
                            a = E - 1;
                          a >= 0;
                          a--
                        )
                          i = this.OffsetPoint(a, i, Q.m_jointype)
                        this.m_destPolys.push(this.m_destPoly)
                      } else {
                        var D
                        for (i = 0, a = 1; a < E - 1; ++a)
                          i = this.OffsetPoint(a, i, Q.m_jointype)
                        for (
                          Q.m_endtype == g.EndType.etOpenButt
                            ? ((a = E - 1),
                              (D = new g.IntPoint(
                                g.ClipperOffset.Round(
                                  this.m_srcPoly[a].X + this.m_normals[a].X * A
                                ),
                                g.ClipperOffset.Round(
                                  this.m_srcPoly[a].Y + this.m_normals[a].Y * A
                                )
                              )),
                              this.m_destPoly.push(D),
                              (D = new g.IntPoint(
                                g.ClipperOffset.Round(
                                  this.m_srcPoly[a].X - this.m_normals[a].X * A
                                ),
                                g.ClipperOffset.Round(
                                  this.m_srcPoly[a].Y - this.m_normals[a].Y * A
                                )
                              )),
                              this.m_destPoly.push(D))
                            : ((a = E - 1),
                              (i = E - 2),
                              (this.m_sinA = 0),
                              (this.m_normals[a] = new g.DoublePoint(
                                -this.m_normals[a].X,
                                -this.m_normals[a].Y
                              )),
                              Q.m_endtype == g.EndType.etOpenSquare
                                ? this.DoSquare(a, i)
                                : this.DoRound(a, i)),
                            a = E - 1;
                          a > 0;
                          a--
                        )
                          this.m_normals[a] = new g.DoublePoint(
                            -this.m_normals[a - 1].X,
                            -this.m_normals[a - 1].Y
                          )
                        for (
                          this.m_normals[0] = new g.DoublePoint(
                            -this.m_normals[1].X,
                            -this.m_normals[1].Y
                          ),
                            a = (i = E - 1) - 1;
                          a > 0;
                          --a
                        )
                          i = this.OffsetPoint(a, i, Q.m_jointype)
                        Q.m_endtype == g.EndType.etOpenButt
                          ? ((D = new g.IntPoint(
                              g.ClipperOffset.Round(
                                this.m_srcPoly[0].X - this.m_normals[0].X * A
                              ),
                              g.ClipperOffset.Round(
                                this.m_srcPoly[0].Y - this.m_normals[0].Y * A
                              )
                            )),
                            this.m_destPoly.push(D),
                            (D = new g.IntPoint(
                              g.ClipperOffset.Round(
                                this.m_srcPoly[0].X + this.m_normals[0].X * A
                              ),
                              g.ClipperOffset.Round(
                                this.m_srcPoly[0].Y + this.m_normals[0].Y * A
                              )
                            )),
                            this.m_destPoly.push(D))
                          : ((i = 1),
                            (this.m_sinA = 0),
                            Q.m_endtype == g.EndType.etOpenSquare
                              ? this.DoSquare(0, 1)
                              : this.DoRound(0, 1)),
                          this.m_destPolys.push(this.m_destPoly)
                      }
                    } else {
                      if (Q.m_jointype == g.JoinType.jtRound)
                        for (var n = 1, t = 0, a = 1; a <= B; a++) {
                          this.m_destPoly.push(
                            new g.IntPoint(
                              g.ClipperOffset.Round(
                                this.m_srcPoly[0].X + n * A
                              ),
                              g.ClipperOffset.Round(this.m_srcPoly[0].Y + t * A)
                            )
                          )
                          var s = n
                          ;(n = n * this.m_cos - this.m_sin * t),
                            (t = s * this.m_sin + t * this.m_cos)
                        }
                      else {
                        ;(n = -1), (t = -1)
                        for (a = 0; a < 4; ++a)
                          this.m_destPoly.push(
                            new g.IntPoint(
                              g.ClipperOffset.Round(
                                this.m_srcPoly[0].X + n * A
                              ),
                              g.ClipperOffset.Round(this.m_srcPoly[0].Y + t * A)
                            )
                          ),
                            n < 0 ? (n = 1) : t < 0 ? (t = 1) : (n = -1)
                      }
                      this.m_destPolys.push(this.m_destPoly)
                    }
                }
              }
            }),
            (g.ClipperOffset.prototype.Execute = function () {