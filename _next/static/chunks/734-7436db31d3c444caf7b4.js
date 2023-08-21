(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [734],
  {
    3646: function (e, t, n) {
      var r = n(7228);
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    9713: function (e) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    6610: function (e, t, n) {
      "use strict";

      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    5991: function (e, t, n) {
      "use strict";

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }

      function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    7608: function (e, t, n) {
      "use strict";

      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    5255: function (e, t, n) {
      "use strict";

      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }

      function o(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0,
          },
        })),
          t && r(e, t);
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    3724: function (e, t, n) {
      "use strict";

      function r(e) {
        return (r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }

      function o(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    6860: function (e) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    8206: function (e) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    319: function (e, t, n) {
      var r = n(3646),
        o = n(6860),
        i = n(379),
        a = n(8206);
      e.exports = function (e) {
        return r(e) || o(e) || i(e) || a();
      };
    },
    7187: function (e) {
      "use strict";
      var t,
        n = "object" === typeof Reflect ? Reflect : null,
        r =
          n && "function" === typeof n.apply
            ? n.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      t =
        n && "function" === typeof n.ownKeys
          ? n.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var o =
        Number.isNaN ||
        function (e) {
          return e !== e;
        };

      function i() {
        i.init.call(this);
      }
      (e.exports = i),
        (e.exports.once = function (e, t) {
          return new Promise(function (n, r) {
            function o(n) {
              e.removeListener(t, i), r(n);
            }

            function i() {
              "function" === typeof e.removeListener &&
                e.removeListener("error", o),
                n([].slice.call(arguments));
            }
            v(e, t, i, {
              once: !0,
            }),
              "error" !== t &&
                (function (e, t, n) {
                  "function" === typeof e.on && v(e, "error", t, n);
                })(e, o, {
                  once: !0,
                });
          });
        }),
        (i.EventEmitter = i),
        (i.prototype._events = void 0),
        (i.prototype._eventsCount = 0),
        (i.prototype._maxListeners = void 0);
      var a = 10;

      function s(e) {
        if ("function" !== typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }

      function u(e) {
        return void 0 === e._maxListeners
          ? i.defaultMaxListeners
          : e._maxListeners;
      }

      function c(e, t, n, r) {
        var o, i, a, c;
        if (
          (s(n),
          void 0 === (i = e._events)
            ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== i.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (i = e._events)),
              (a = i[t])),
          void 0 === a)
        )
          (a = i[t] = n), ++e._eventsCount;
        else if (
          ("function" === typeof a
            ? (a = i[t] = r ? [n, a] : [a, n])
            : r
            ? a.unshift(n)
            : a.push(n),
          (o = u(e)) > 0 && a.length > o && !a.warned)
        ) {
          a.warned = !0;
          var f = new Error(
            "Possible EventEmitter memory leak detected. " +
              a.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (f.name = "MaxListenersExceededWarning"),
            (f.emitter = e),
            (f.type = t),
            (f.count = a.length),
            (c = f),
            console && console.warn && console.warn(c);
        }
        return e;
      }

      function f() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }

      function l(e, t, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n,
          },
          o = f.bind(r);
        return (o.listener = n), (r.wrapFn = o), o;
      }

      function d(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var o = r[t];
        return void 0 === o
          ? []
          : "function" === typeof o
          ? n
            ? [o.listener || o]
            : [o]
          : n
          ? (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(o)
          : h(o, o.length);
      }

      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" === typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }

      function h(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
      }

      function v(e, t, n, r) {
        if ("function" === typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else {
          if ("function" !== typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
          e.addEventListener(t, function o(i) {
            r.once && e.removeEventListener(t, o), n(i);
          });
        }
      }
      Object.defineProperty(i, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (e) {
          if ("number" !== typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          a = e;
        },
      }),
        (i.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (i.prototype.setMaxListeners = function (e) {
          if ("number" !== typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (i.prototype.getMaxListeners = function () {
          return u(this);
        }),
        (i.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var o = "error" === e,
            i = this._events;
          if (void 0 !== i) o = o && void 0 === i.error;
          else if (!o) return !1;
          if (o) {
            var a;
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var s = new Error(
              "Unhandled error." + (a ? " (" + a.message + ")" : "")
            );
            throw ((s.context = a), s);
          }
          var u = i[e];
          if (void 0 === u) return !1;
          if ("function" === typeof u) r(u, this, t);
          else {
            var c = u.length,
              f = h(u, c);
            for (n = 0; n < c; ++n) r(f[n], this, t);
          }
          return !0;
        }),
        (i.prototype.addListener = function (e, t) {
          return c(this, e, t, !1);
        }),
        (i.prototype.on = i.prototype.addListener),
        (i.prototype.prependListener = function (e, t) {
          return c(this, e, t, !0);
        }),
        (i.prototype.once = function (e, t) {
          return s(t), this.on(e, l(this, e, t)), this;
        }),
        (i.prototype.prependOnceListener = function (e, t) {
          return s(t), this.prependListener(e, l(this, e, t)), this;
        }),
        (i.prototype.removeListener = function (e, t) {
          var n, r, o, i, a;
          if ((s(t), void 0 === (r = this._events))) return this;
          if (void 0 === (n = r[e])) return this;
          if (n === t || n.listener === t)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[e],
                r.removeListener &&
                  this.emit("removeListener", e, n.listener || t));
          else if ("function" !== typeof n) {
            for (o = -1, i = n.length - 1; i >= 0; i--)
              if (n[i] === t || n[i].listener === t) {
                (a = n[i].listener), (o = i);
                break;
              }
            if (o < 0) return this;
            0 === o
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, o),
              1 === n.length && (r[e] = n[0]),
              void 0 !== r.removeListener &&
                this.emit("removeListener", e, a || t);
          }
          return this;
        }),
        (i.prototype.off = i.prototype.removeListener),
        (i.prototype.removeAllListeners = function (e) {
          var t, n, r;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 === arguments.length) {
            var o,
              i = Object.keys(n);
            for (r = 0; r < i.length; ++r)
              "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
          return this;
        }),
        (i.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (i.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (i.listenerCount = function (e, t) {
          return "function" === typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (i.prototype.listenerCount = p),
        (i.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    9917: function (e, t, n) {
      "use strict";
      var r = n(3038),
        o = n(319),
        i = n(5318);
      t.default = function (e) {
        var t = e.src,
          n = e.sizes,
          o = e.unoptimized,
          i = void 0 !== o && o,
          l = e.priority,
          p = void 0 !== l && l,
          v = e.loading,
          m = e.className,
          y = e.quality,
          g = e.width,
          b = e.height,
          w = e.objectFit,
          j = e.objectPosition,
          A = e.loader,
          S = void 0 === A ? O : A,
          L = e.placeholder,
          E = void 0 === L ? "empty" : L,
          k = e.blurDataURL,
          M = (0, a.default)(e, [
            "src",
            "sizes",
            "unoptimized",
            "priority",
            "loading",
            "className",
            "quality",
            "width",
            "height",
            "objectFit",
            "objectPosition",
            "loader",
            "placeholder",
            "blurDataURL",
          ]),
          C = n ? "responsive" : "intrinsic";
        "layout" in M && (M.layout && (C = M.layout), delete M.layout);
        var P = "";
        if (
          (function (e) {
            return (
              "object" === typeof e &&
              (h(e) ||
                (function (e) {
                  return void 0 !== e.src;
                })(e))
            );
          })(t)
        ) {
          var z = h(t) ? t.default : t;
          if (!z.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                JSON.stringify(z)
              )
            );
          if (
            ((k = k || z.blurDataURL),
            (P = z.src),
            (!C || "fill" !== C) &&
              ((b = b || z.height), (g = g || z.width), !z.height || !z.width))
          )
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                JSON.stringify(z)
              )
            );
        }
        t = "string" === typeof t ? t : P;
        var R = x(g),
          I = x(b),
          D = x(y);
        0;
        var N = !p && ("lazy" === v || "undefined" === typeof v);
        t && t.startsWith("data:") && ((i = !0), (N = !1));
        var q,
          T,
          W,
          H = (0, d.useIntersection)({
            rootMargin: "200px",
            disabled: !N,
          }),
          F = r(H, 2),
          U = F[0],
          B = F[1],
          Z = !N || B,
          V = (0, s.default)(
            {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: w,
              objectPosition: j,
            },
            "blur" === E
              ? {
                  filter: "blur(20px)",
                  backgroundSize: "cover",
                  backgroundImage: 'url("'.concat(k, '")'),
                }
              : void 0
          );
        if (
          "undefined" !== typeof R &&
          "undefined" !== typeof I &&
          "fill" !== C
        ) {
          var J = I / R,
            K = isNaN(J) ? "100%" : "".concat(100 * J, "%");
          "responsive" === C
            ? ((q = {
                display: "block",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
              }),
              (T = {
                display: "block",
                boxSizing: "border-box",
                paddingTop: K,
              }))
            : "intrinsic" === C
            ? ((q = {
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
              }),
              (T = {
                boxSizing: "border-box",
                display: "block",
                maxWidth: "100%",
              }),
              (W = '<svg width="'
                .concat(R, '" height="')
                .concat(
                  I,
                  '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                )))
            : "fixed" === C &&
              (q = {
                overflow: "hidden",
                boxSizing: "border-box",
                display: "inline-block",
                position: "relative",
                width: R,
                height: I,
              });
        } else
          "undefined" === typeof R &&
            "undefined" === typeof I &&
            "fill" === C &&
            (q = {
              display: "block",
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              margin: 0,
            });
        var Q = {
          src: "/_next/avatar.png",
          srcSet: void 0,
          sizes: void 0,
        };
        Z &&
          (Q = _({
            src: t,
            unoptimized: i,
            layout: C,
            width: R,
            quality: D,
            sizes: n,
            loader: S,
          }));
        return u.default.createElement(
          "div",
          {
            style: q,
          },
          T
            ? u.default.createElement(
                "div",
                {
                  style: T,
                },
                W
                  ? u.default.createElement("img", {
                      style: {
                        maxWidth: "100%",
                        display: "block",
                        margin: 0,
                        border: "none",
                        padding: 0,
                      },
                      alt: "",
                      "aria-hidden": !0,
                      role: "presentation",
                      src: "data:image/svg+xml;base64,".concat(
                        (0, f.toBase64)(W)
                      ),
                    })
                  : null
              )
            : null,
          !Z &&
            u.default.createElement(
              "noscript",
              null,
              u.default.createElement(
                "img",
                Object.assign(
                  {},
                  M,
                  _({
                    src: t,
                    unoptimized: i,
                    layout: C,
                    width: R,
                    quality: D,
                    sizes: n,
                    loader: S,
                  }),
                  {
                    decoding: "async",
                    style: V,
                    className: m,
                  }
                )
              )
            ),
          u.default.createElement(
            "img",
            Object.assign({}, M, Q, {
              decoding: "async",
              className: m,
              ref: function (e) {
                U(e),
                  (function (e, t) {
                    if ("blur" === t && e) {
                      var n = function () {
                        e.src.startsWith("data:") ||
                          ("decode" in e ? e.decode() : Promise.resolve())
                            .catch(function () {})
                            .then(function () {
                              (e.style.filter = "none"),
                                (e.style.backgroundSize = "none"),
                                (e.style.backgroundImage = "none");
                            });
                      };
                      e.complete ? n() : (e.onload = n);
                    }
                  })(e, E);
              },
              style: V,
            })
          ),
          p
            ? u.default.createElement(
                c.default,
                null,
                u.default.createElement("link", {
                  key: "__nimg-" + Q.src + Q.srcSet + Q.sizes,
                  rel: "preload",
                  as: "image",
                  href: Q.srcSet ? void 0 : Q.src,
                  imagesrcset: Q.srcSet,
                  imagesizes: Q.sizes,
                })
              )
            : null
        );
      };
      var a = i(n(7316)),
        s = i(n(7154)),
        u = i(n(7294)),
        c = i(n(2775)),
        f = n(8814),
        l = n(5655),
        d = n(7426);
      var p = new Map([
        [
          "imgix",
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width,
              o = e.quality,
              i = ["auto=format", "fit=max", "w=" + r],
              a = "";
            o && i.push("q=" + o);
            i.length && (a = "?" + i.join("&"));
            return "".concat(t).concat(j(n)).concat(a);
          },
        ],
        [
          "cloudinary",
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width,
              o = e.quality,
              i =
                ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(
                  ","
                ) + "/";
            return "".concat(t).concat(i).concat(j(n));
          },
        ],
        [
          "akamai",
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width;
            return "".concat(t).concat(j(n), "?imwidth=").concat(r);
          },
        ],
        [
          "default",
          function (e) {
            var t = e.root,
              n = e.src,
              r = e.width,
              o = e.quality;
            0;
            return ""
              .concat(t, "?url=")
              .concat(encodeURIComponent(n), "&w=")
              .concat(r, "&q=")
              .concat(o || 75);
          },
        ],
      ]);

      function h(e) {
        return void 0 !== e.default;
      }
      var v =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/avatar.png",
            loader: "default",
          } || l.imageConfigDefault,
        m = v.deviceSizes,
        y = v.imageSizes,
        g = v.loader,
        b = v.path,
        w = (v.domains, [].concat(o(m), o(y)));

      function _(e) {
        var t = e.src,
          n = e.unoptimized,
          r = e.layout,
          i = e.width,
          a = e.quality,
          s = e.sizes,
          u = e.loader;
        if (n)
          return {
            src: t,
            srcSet: void 0,
            sizes: void 0,
          };
        var c = (function (e, t, n) {
            if (n && ("fill" === t || "responsive" === t)) {
              for (var r, i = /(^|\s)(1?\d?\d)vw/g, a = []; (r = i.exec(n)); r)
                a.push(parseInt(r[2]));
              if (a.length) {
                var s = 0.01 * Math.min.apply(Math, a);
                return {
                  widths: w.filter(function (e) {
                    return e >= m[0] * s;
                  }),
                  kind: "w",
                };
              }
              return {
                widths: w,
                kind: "w",
              };
            }
            return "number" !== typeof e || "fill" === t || "responsive" === t
              ? {
                  widths: m,
                  kind: "w",
                }
              : {
                  widths: o(
                    new Set(
                      [e, 2 * e].map(function (e) {
                        return (
                          w.find(function (t) {
                            return t >= e;
                          }) || w[w.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(i, r, s),
          f = c.widths,
          l = c.kind,
          d = f.length - 1;
        return {
          sizes: s || "w" !== l ? s : "100vw",
          srcSet: f
            .map(function (e, n) {
              return ""
                .concat(
                  u({
                    src: t,
                    quality: a,
                    width: e,
                  }),
                  " "
                )
                .concat("w" === l ? e : n + 1)
                .concat(l);
            })
            .join(", "),
          src: u({
            src: t,
            quality: a,
            width: f[d],
          }),
        };
      }

      function x(e) {
        return "number" === typeof e
          ? e
          : "string" === typeof e
          ? parseInt(e, 10)
          : void 0;
      }

      function O(e) {
        var t = p.get(g);
        if (t)
          return t(
            (0, s.default)(
              {
                root: b,
              },
              e
            )
          );
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(l.VALID_LOADERS.join(", "), ". Received: ")
            .concat(g)
        );
      }

      function j(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      m.sort(function (e, t) {
        return e - t;
      }),
        w.sort(function (e, t) {
          return e - t;
        });
    },
    3398: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule
          ? r
          : {
              default: r,
            }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    6393: function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(o.default.useContext(i.AmpStateContext));
        });
      var r,
        o =
          (r = n(7294)) && r.__esModule
            ? r
            : {
                default: r,
              },
        i = n(3398);

      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          i = e.hasQuery,
          a = void 0 !== i && i;
        return n || (o && a);
      }
    },
    2775: function (e, t, n) {
      "use strict";
      var r = n(9713);

      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var i,
        a = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return {
              default: e,
            };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(7294)),
        s =
          (i = n(3244)) && i.__esModule
            ? i
            : {
                default: i,
              },
        u = n(3398),
        c = n(1165),
        f = n(6393);

      function l() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }

      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [
            a.default.createElement("meta", {
              charSet: "utf-8",
            }),
          ];
        return (
          e ||
            t.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }

      function p(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var h = ["name", "httpEquiv", "charSet", "itemProp"];

      function v(e, t) {
        return e
          .reduce(function (e, t) {
            var n = a.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var i = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var s = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(s) ? (i = !1) : e.add(s);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var u = 0, c = h.length; u < c; u++) {
                      var f = h[u];
                      if (o.props.hasOwnProperty(f))
                        if ("charSet" === f) n.has(f) ? (i = !1) : n.add(f);
                        else {
                          var l = o.props[f],
                            d = r[f] || new Set();
                          ("name" === f && a) || !d.has(l)
                            ? (d.add(l), (r[f] = d))
                            : (i = !1);
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, n) {
            var i = e.key || n;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var s = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (s["data-href"] = s.href),
                (s.href = void 0),
                (s["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, s)
              );
            }
            return a.default.cloneElement(e, {
              key: i,
            });
          });
      }
      var m = function (e) {
        var t = e.children,
          n = (0, a.useContext)(u.AmpStateContext),
          r = (0, a.useContext)(c.HeadManagerContext);
        return a.default.createElement(
          s.default,
          {
            reduceComponentsToState: v,
            headManager: r,
            inAmpMode: (0, f.isInAmpMode)(n),
          },
          t
        );
      };
      t.default = m;
    },
    3244: function (e, t, n) {
      "use strict";
      var r = n(319),
        o = n(4575),
        i = n(3913),
        a = (n(1506), n(2205)),
        s = n(8585),
        u = n(9754);

      function c(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = u(e);
          if (t) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return s(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var f = n(7294),
        l = (function (e) {
          a(n, e);
          var t = c(n);

          function n(e) {
            var i;
            return (
              o(this, n),
              ((i = t.call(this, e))._hasHeadManager = void 0),
              (i.emitChange = function () {
                i._hasHeadManager &&
                  i.props.headManager.updateHead(
                    i.props.reduceComponentsToState(
                      r(i.props.headManager.mountedInstances),
                      i.props
                    )
                  );
              }),
              (i._hasHeadManager =
                i.props.headManager && i.props.headManager.mountedInstances),
              i
            );
          }
          return (
            i(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(f.Component);
      t.default = l;
    },
    8814: function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t.toBase64 = function (e) {
          return window.btoa(e);
        });
    },
    5655: function (e, t) {
      "use strict";
      (t.__esModule = !0), (t.imageConfigDefault = t.VALID_LOADERS = void 0);
      t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai"];
      t.imageConfigDefault = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/avatar.png",
        loader: "default",
        domains: [],
        disableStaticImages: !1,
      };
    },
    9008: function (e, t, n) {
      e.exports = n(2775);
    },
    5675: function (e, t, n) {
      e.exports = n(9917);
    },
  },
]);
