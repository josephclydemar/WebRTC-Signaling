(() => {
  var e = {
      6131: function (e, t, n) {
        "use strict";
        var s =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, s) {
                  void 0 === s && (s = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, s, r);
                }
              : function (e, t, n, s) {
                  void 0 === s && (s = n), (e[s] = t[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    s(t, e, n);
              return r(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = o(n(7046)),
          a = n(7429),
          c = i.connect("http://192.168.1.19:7800"),
          u = document.getElementById("message-input-box"),
          l = document.getElementById("send-message-button"),
          d = document.getElementById("show-id"),
          h = document.getElementById("send-sdp-button");
        (d.onclick = function () {
          document.getElementById("my-id").textContent = c.id;
        }),
          (l.onclick = function () {
            const e = u.value;
            c.emit("message", e), (u.value = "");
          }),
          (h.onclick = function () {
            c.emit("rtc_sdp", {
              client_id: c.id,
              type: "offer",
              sdp: (0, a.v4)(),
            });
          }),
          c.on("rtc_sdp_broadcast", function (e) {
            const t = document.getElementById("sdp"),
              n = document.getElementById("sdp-sender"),
              s = document.getElementById("sdp-type");
            (n.textContent = `Sender: ${e.client_id}`),
              (s.textContent = `Type: ${e.type}`),
              (t.textContent = `SDP: ${e.sdp}`),
              console.log(e);
          });
      },
      4802: (e, t, n) => {
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = "color: " + this.color;
          t.splice(1, 0, n, "color: inherit");
          let s = 0,
            r = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (s++, "%c" === e && (r = s));
          }),
            t.splice(r, 0, n);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = n(804)(t));
        const { formatters: s } = e.exports;
        s.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      804: (e, t, n) => {
        e.exports = function (e) {
          function t(e) {
            let n,
              r,
              o,
              i = null;
            function a(...e) {
              if (!a.enabled) return;
              const s = a,
                r = Number(new Date()),
                o = r - (n || r);
              (s.diff = o),
                (s.prev = n),
                (s.curr = r),
                (n = r),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let i = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r) => {
                if ("%%" === n) return "%";
                i++;
                const o = t.formatters[r];
                if ("function" == typeof o) {
                  const t = e[i];
                  (n = o.call(s, t)), e.splice(i, 1), i--;
                }
                return n;
              })),
                t.formatArgs.call(s, e),
                (s.log || t.log).apply(s, e);
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = s),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== i
                    ? i
                    : (r !== t.namespaces &&
                        ((r = t.namespaces), (o = t.enabled(e))),
                      o),
                set: (e) => {
                  i = e;
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            );
          }
          function s(e, n) {
            const s = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return (s.log = this.log), s;
          }
          function r(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(r),
                ...t.skips.map(r).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let n;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              const s = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = s.length;
              for (n = 0; n < r; n++)
                s[n] &&
                  ("-" === (e = s[n].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let n, s;
              for (n = 0, s = t.skips.length; n < s; n++)
                if (t.skips[n].test(e)) return !1;
              for (n = 0, s = t.names.length; n < s; n++)
                if (t.names[n].test(e)) return !0;
              return !1;
            }),
            (t.humanize = n(810)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              );
            }),
            Object.keys(e).forEach((n) => {
              t[n] = e[n];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let n = 0;
              for (let t = 0; t < e.length; t++)
                (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
              return t.colors[Math.abs(n) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      810: (e) => {
        var t = 1e3,
          n = 60 * t,
          s = 60 * n,
          r = 24 * s;
        function o(e, t, n, s) {
          var r = t >= 1.5 * n;
          return Math.round(e / n) + " " + s + (r ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var a,
            c,
            u = typeof e;
          if ("string" === u && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var o =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e,
                  );
                if (o) {
                  var i = parseFloat(o[1]);
                  switch ((o[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * i;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * i;
                    case "days":
                    case "day":
                    case "d":
                      return i * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return i * s;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return i * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return i * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return i;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === u && isFinite(e))
            return i.long
              ? ((a = e),
                (c = Math.abs(a)) >= r
                  ? o(a, c, r, "day")
                  : c >= s
                    ? o(a, c, s, "hour")
                    : c >= n
                      ? o(a, c, n, "minute")
                      : c >= t
                        ? o(a, c, t, "second")
                        : a + " ms")
              : (function (e) {
                  var o = Math.abs(e);
                  return o >= r
                    ? Math.round(e / r) + "d"
                    : o >= s
                      ? Math.round(e / s) + "h"
                      : o >= n
                        ? Math.round(e / n) + "m"
                        : o >= t
                          ? Math.round(e / t) + "s"
                          : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e),
          );
        };
      },
      3669: (e, t, n) => {
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = "color: " + this.color;
          t.splice(1, 0, n, "color: inherit");
          let s = 0,
            r = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (s++, "%c" === e && (r = s));
          }),
            t.splice(r, 0, n);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = n(9231)(t));
        const { formatters: s } = e.exports;
        s.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      9231: (e, t, n) => {
        e.exports = function (e) {
          function t(e) {
            let n,
              r,
              o,
              i = null;
            function a(...e) {
              if (!a.enabled) return;
              const s = a,
                r = Number(new Date()),
                o = r - (n || r);
              (s.diff = o),
                (s.prev = n),
                (s.curr = r),
                (n = r),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let i = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r) => {
                if ("%%" === n) return "%";
                i++;
                const o = t.formatters[r];
                if ("function" == typeof o) {
                  const t = e[i];
                  (n = o.call(s, t)), e.splice(i, 1), i--;
                }
                return n;
              })),
                t.formatArgs.call(s, e),
                (s.log || t.log).apply(s, e);
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = s),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== i
                    ? i
                    : (r !== t.namespaces &&
                        ((r = t.namespaces), (o = t.enabled(e))),
                      o),
                set: (e) => {
                  i = e;
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            );
          }
          function s(e, n) {
            const s = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return (s.log = this.log), s;
          }
          function r(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(r),
                ...t.skips.map(r).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let n;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              const s = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = s.length;
              for (n = 0; n < r; n++)
                s[n] &&
                  ("-" === (e = s[n].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let n, s;
              for (n = 0, s = t.skips.length; n < s; n++)
                if (t.skips[n].test(e)) return !1;
              for (n = 0, s = t.names.length; n < s; n++)
                if (t.names[n].test(e)) return !0;
              return !1;
            }),
            (t.humanize = n(4241)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              );
            }),
            Object.keys(e).forEach((n) => {
              t[n] = e[n];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let n = 0;
              for (let t = 0; t < e.length; t++)
                (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
              return t.colors[Math.abs(n) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      4241: (e) => {
        var t = 1e3,
          n = 60 * t,
          s = 60 * n,
          r = 24 * s;
        function o(e, t, n, s) {
          var r = t >= 1.5 * n;
          return Math.round(e / n) + " " + s + (r ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var a,
            c,
            u = typeof e;
          if ("string" === u && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var o =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e,
                  );
                if (o) {
                  var i = parseFloat(o[1]);
                  switch ((o[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * i;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * i;
                    case "days":
                    case "day":
                    case "d":
                      return i * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return i * s;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return i * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return i * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return i;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === u && isFinite(e))
            return i.long
              ? ((a = e),
                (c = Math.abs(a)) >= r
                  ? o(a, c, r, "day")
                  : c >= s
                    ? o(a, c, s, "hour")
                    : c >= n
                      ? o(a, c, n, "minute")
                      : c >= t
                        ? o(a, c, t, "second")
                        : a + " ms")
              : (function (e) {
                  var o = Math.abs(e);
                  return o >= r
                    ? Math.round(e / r) + "d"
                    : o >= s
                      ? Math.round(e / s) + "h"
                      : o >= n
                        ? Math.round(e / n) + "m"
                        : o >= t
                          ? Math.round(e / t) + "s"
                          : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e),
          );
        };
      },
      1618: (e, t, n) => {
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = "color: " + this.color;
          t.splice(1, 0, n, "color: inherit");
          let s = 0,
            r = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (s++, "%c" === e && (r = s));
          }),
            t.splice(r, 0, n);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = n(5224)(t));
        const { formatters: s } = e.exports;
        s.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      5224: (e, t, n) => {
        e.exports = function (e) {
          function t(e) {
            let n,
              r,
              o,
              i = null;
            function a(...e) {
              if (!a.enabled) return;
              const s = a,
                r = Number(new Date()),
                o = r - (n || r);
              (s.diff = o),
                (s.prev = n),
                (s.curr = r),
                (n = r),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let i = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r) => {
                if ("%%" === n) return "%";
                i++;
                const o = t.formatters[r];
                if ("function" == typeof o) {
                  const t = e[i];
                  (n = o.call(s, t)), e.splice(i, 1), i--;
                }
                return n;
              })),
                t.formatArgs.call(s, e),
                (s.log || t.log).apply(s, e);
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = s),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== i
                    ? i
                    : (r !== t.namespaces &&
                        ((r = t.namespaces), (o = t.enabled(e))),
                      o),
                set: (e) => {
                  i = e;
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            );
          }
          function s(e, n) {
            const s = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return (s.log = this.log), s;
          }
          function r(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(r),
                ...t.skips.map(r).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let n;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              const s = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = s.length;
              for (n = 0; n < r; n++)
                s[n] &&
                  ("-" === (e = s[n].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let n, s;
              for (n = 0, s = t.skips.length; n < s; n++)
                if (t.skips[n].test(e)) return !1;
              for (n = 0, s = t.names.length; n < s; n++)
                if (t.names[n].test(e)) return !0;
              return !1;
            }),
            (t.humanize = n(8896)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              );
            }),
            Object.keys(e).forEach((n) => {
              t[n] = e[n];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let n = 0;
              for (let t = 0; t < e.length; t++)
                (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
              return t.colors[Math.abs(n) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      8896: (e) => {
        var t = 1e3,
          n = 60 * t,
          s = 60 * n,
          r = 24 * s;
        function o(e, t, n, s) {
          var r = t >= 1.5 * n;
          return Math.round(e / n) + " " + s + (r ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var a,
            c,
            u = typeof e;
          if ("string" === u && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var o =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e,
                  );
                if (o) {
                  var i = parseFloat(o[1]);
                  switch ((o[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * i;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * i;
                    case "days":
                    case "day":
                    case "d":
                      return i * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return i * s;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return i * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return i * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return i;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === u && isFinite(e))
            return i.long
              ? ((a = e),
                (c = Math.abs(a)) >= r
                  ? o(a, c, r, "day")
                  : c >= s
                    ? o(a, c, s, "hour")
                    : c >= n
                      ? o(a, c, n, "minute")
                      : c >= t
                        ? o(a, c, t, "second")
                        : a + " ms")
              : (function (e) {
                  var o = Math.abs(e);
                  return o >= r
                    ? Math.round(e / r) + "d"
                    : o >= s
                      ? Math.round(e / s) + "h"
                      : o >= n
                        ? Math.round(e / n) + "m"
                        : o >= t
                          ? Math.round(e / t) + "s"
                          : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e),
          );
        };
      },
      7429: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "NIL", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(t, "parse", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(t, "stringify", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(t, "v1", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(t, "v3", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(t, "v4", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(t, "v5", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(t, "validate", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(t, "version", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          });
        var s = h(n(3990)),
          r = h(n(8237)),
          o = h(n(5355)),
          i = h(n(3764)),
          a = h(n(6314)),
          c = h(n(8464)),
          u = h(n(6435)),
          l = h(n(4008)),
          d = h(n(8222));
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      4163: (e, t) => {
        "use strict";
        function n(e) {
          return 14 + (((e + 64) >>> 9) << 4) + 1;
        }
        function s(e, t) {
          const n = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
        }
        function r(e, t, n, r, o, i) {
          return s(
            ((a = s(s(t, e), s(r, i))) << (c = o)) | (a >>> (32 - c)),
            n,
          );
          var a, c;
        }
        function o(e, t, n, s, o, i, a) {
          return r((t & n) | (~t & s), e, t, o, i, a);
        }
        function i(e, t, n, s, o, i, a) {
          return r((t & s) | (n & ~s), e, t, o, i, a);
        }
        function a(e, t, n, s, o, i, a) {
          return r(t ^ n ^ s, e, t, o, i, a);
        }
        function c(e, t, n, s, o, i, a) {
          return r(n ^ (t | ~s), e, t, o, i, a);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        t.default = function (e) {
          if ("string" == typeof e) {
            const t = unescape(encodeURIComponent(e));
            e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
          }
          return (function (e) {
            const t = [],
              n = 32 * e.length,
              s = "0123456789abcdef";
            for (let r = 0; r < n; r += 8) {
              const n = (e[r >> 5] >>> r % 32) & 255,
                o = parseInt(s.charAt((n >>> 4) & 15) + s.charAt(15 & n), 16);
              t.push(o);
            }
            return t;
          })(
            (function (e, t) {
              (e[t >> 5] |= 128 << t % 32), (e[n(t) - 1] = t);
              let r = 1732584193,
                u = -271733879,
                l = -1732584194,
                d = 271733878;
              for (let t = 0; t < e.length; t += 16) {
                const n = r,
                  h = u,
                  p = l,
                  f = d;
                (r = o(r, u, l, d, e[t], 7, -680876936)),
                  (d = o(d, r, u, l, e[t + 1], 12, -389564586)),
                  (l = o(l, d, r, u, e[t + 2], 17, 606105819)),
                  (u = o(u, l, d, r, e[t + 3], 22, -1044525330)),
                  (r = o(r, u, l, d, e[t + 4], 7, -176418897)),
                  (d = o(d, r, u, l, e[t + 5], 12, 1200080426)),
                  (l = o(l, d, r, u, e[t + 6], 17, -1473231341)),
                  (u = o(u, l, d, r, e[t + 7], 22, -45705983)),
                  (r = o(r, u, l, d, e[t + 8], 7, 1770035416)),
                  (d = o(d, r, u, l, e[t + 9], 12, -1958414417)),
                  (l = o(l, d, r, u, e[t + 10], 17, -42063)),
                  (u = o(u, l, d, r, e[t + 11], 22, -1990404162)),
                  (r = o(r, u, l, d, e[t + 12], 7, 1804603682)),
                  (d = o(d, r, u, l, e[t + 13], 12, -40341101)),
                  (l = o(l, d, r, u, e[t + 14], 17, -1502002290)),
                  (u = o(u, l, d, r, e[t + 15], 22, 1236535329)),
                  (r = i(r, u, l, d, e[t + 1], 5, -165796510)),
                  (d = i(d, r, u, l, e[t + 6], 9, -1069501632)),
                  (l = i(l, d, r, u, e[t + 11], 14, 643717713)),
                  (u = i(u, l, d, r, e[t], 20, -373897302)),
                  (r = i(r, u, l, d, e[t + 5], 5, -701558691)),
                  (d = i(d, r, u, l, e[t + 10], 9, 38016083)),
                  (l = i(l, d, r, u, e[t + 15], 14, -660478335)),
                  (u = i(u, l, d, r, e[t + 4], 20, -405537848)),
                  (r = i(r, u, l, d, e[t + 9], 5, 568446438)),
                  (d = i(d, r, u, l, e[t + 14], 9, -1019803690)),
                  (l = i(l, d, r, u, e[t + 3], 14, -187363961)),
                  (u = i(u, l, d, r, e[t + 8], 20, 1163531501)),
                  (r = i(r, u, l, d, e[t + 13], 5, -1444681467)),
                  (d = i(d, r, u, l, e[t + 2], 9, -51403784)),
                  (l = i(l, d, r, u, e[t + 7], 14, 1735328473)),
                  (u = i(u, l, d, r, e[t + 12], 20, -1926607734)),
                  (r = a(r, u, l, d, e[t + 5], 4, -378558)),
                  (d = a(d, r, u, l, e[t + 8], 11, -2022574463)),
                  (l = a(l, d, r, u, e[t + 11], 16, 1839030562)),
                  (u = a(u, l, d, r, e[t + 14], 23, -35309556)),
                  (r = a(r, u, l, d, e[t + 1], 4, -1530992060)),
                  (d = a(d, r, u, l, e[t + 4], 11, 1272893353)),
                  (l = a(l, d, r, u, e[t + 7], 16, -155497632)),
                  (u = a(u, l, d, r, e[t + 10], 23, -1094730640)),
                  (r = a(r, u, l, d, e[t + 13], 4, 681279174)),
                  (d = a(d, r, u, l, e[t], 11, -358537222)),
                  (l = a(l, d, r, u, e[t + 3], 16, -722521979)),
                  (u = a(u, l, d, r, e[t + 6], 23, 76029189)),
                  (r = a(r, u, l, d, e[t + 9], 4, -640364487)),
                  (d = a(d, r, u, l, e[t + 12], 11, -421815835)),
                  (l = a(l, d, r, u, e[t + 15], 16, 530742520)),
                  (u = a(u, l, d, r, e[t + 2], 23, -995338651)),
                  (r = c(r, u, l, d, e[t], 6, -198630844)),
                  (d = c(d, r, u, l, e[t + 7], 10, 1126891415)),
                  (l = c(l, d, r, u, e[t + 14], 15, -1416354905)),
                  (u = c(u, l, d, r, e[t + 5], 21, -57434055)),
                  (r = c(r, u, l, d, e[t + 12], 6, 1700485571)),
                  (d = c(d, r, u, l, e[t + 3], 10, -1894986606)),
                  (l = c(l, d, r, u, e[t + 10], 15, -1051523)),
                  (u = c(u, l, d, r, e[t + 1], 21, -2054922799)),
                  (r = c(r, u, l, d, e[t + 8], 6, 1873313359)),
                  (d = c(d, r, u, l, e[t + 15], 10, -30611744)),
                  (l = c(l, d, r, u, e[t + 6], 15, -1560198380)),
                  (u = c(u, l, d, r, e[t + 13], 21, 1309151649)),
                  (r = c(r, u, l, d, e[t + 4], 6, -145523070)),
                  (d = c(d, r, u, l, e[t + 11], 10, -1120210379)),
                  (l = c(l, d, r, u, e[t + 2], 15, 718787259)),
                  (u = c(u, l, d, r, e[t + 9], 21, -343485551)),
                  (r = s(r, n)),
                  (u = s(u, h)),
                  (l = s(l, p)),
                  (d = s(d, f));
              }
              return [r, u, l, d];
            })(
              (function (e) {
                if (0 === e.length) return [];
                const t = 8 * e.length,
                  s = new Uint32Array(n(t));
                for (let n = 0; n < t; n += 8)
                  s[n >> 5] |= (255 & e[n / 8]) << n % 32;
                return s;
              })(e),
              8 * e.length,
            ),
          );
        };
      },
      4790: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        };
        t.default = n;
      },
      6314: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          (t.default = "00000000-0000-0000-0000-000000000000");
      },
      8222: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s,
          r = (s = n(6435)) && s.__esModule ? s : { default: s };
        t.default = function (e) {
          if (!(0, r.default)(e)) throw TypeError("Invalid UUID");
          let t;
          const n = new Uint8Array(16);
          return (
            (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
            (n[1] = (t >>> 16) & 255),
            (n[2] = (t >>> 8) & 255),
            (n[3] = 255 & t),
            (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
            (n[5] = 255 & t),
            (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
            (n[7] = 255 & t),
            (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
            (n[9] = 255 & t),
            (n[10] =
              ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
            (n[11] = (t / 4294967296) & 255),
            (n[12] = (t >>> 24) & 255),
            (n[13] = (t >>> 16) & 255),
            (n[14] = (t >>> 8) & 255),
            (n[15] = 255 & t),
            n
          );
        };
      },
      58: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          (t.default =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
      },
      3319: (e, t) => {
        "use strict";
        let n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            if (
              !n &&
              ((n =
                "undefined" != typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)),
              !n)
            )
              throw new Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
              );
            return n(s);
          });
        const s = new Uint8Array(16);
      },
      3757: (e, t) => {
        "use strict";
        function n(e, t, n, s) {
          switch (e) {
            case 0:
              return (t & n) ^ (~t & s);
            case 1:
            case 3:
              return t ^ n ^ s;
            case 2:
              return (t & n) ^ (t & s) ^ (n & s);
          }
        }
        function s(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        t.default = function (e) {
          const t = [1518500249, 1859775393, 2400959708, 3395469782],
            r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
            const t = unescape(encodeURIComponent(e));
            e = [];
            for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          const o = e.length / 4 + 2,
            i = Math.ceil(o / 16),
            a = new Array(i);
          for (let t = 0; t < i; ++t) {
            const n = new Uint32Array(16);
            for (let s = 0; s < 16; ++s)
              n[s] =
                (e[64 * t + 4 * s] << 24) |
                (e[64 * t + 4 * s + 1] << 16) |
                (e[64 * t + 4 * s + 2] << 8) |
                e[64 * t + 4 * s + 3];
            a[t] = n;
          }
          (a[i - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
            (a[i - 1][14] = Math.floor(a[i - 1][14])),
            (a[i - 1][15] = (8 * (e.length - 1)) & 4294967295);
          for (let e = 0; e < i; ++e) {
            const o = new Uint32Array(80);
            for (let t = 0; t < 16; ++t) o[t] = a[e][t];
            for (let e = 16; e < 80; ++e)
              o[e] = s(o[e - 3] ^ o[e - 8] ^ o[e - 14] ^ o[e - 16], 1);
            let i = r[0],
              c = r[1],
              u = r[2],
              l = r[3],
              d = r[4];
            for (let e = 0; e < 80; ++e) {
              const r = Math.floor(e / 20),
                a = (s(i, 5) + n(r, c, u, l) + d + t[r] + o[e]) >>> 0;
              (d = l), (l = u), (u = s(c, 30) >>> 0), (c = i), (i = a);
            }
            (r[0] = (r[0] + i) >>> 0),
              (r[1] = (r[1] + c) >>> 0),
              (r[2] = (r[2] + u) >>> 0),
              (r[3] = (r[3] + l) >>> 0),
              (r[4] = (r[4] + d) >>> 0);
          }
          return [
            (r[0] >> 24) & 255,
            (r[0] >> 16) & 255,
            (r[0] >> 8) & 255,
            255 & r[0],
            (r[1] >> 24) & 255,
            (r[1] >> 16) & 255,
            (r[1] >> 8) & 255,
            255 & r[1],
            (r[2] >> 24) & 255,
            (r[2] >> 16) & 255,
            (r[2] >> 8) & 255,
            255 & r[2],
            (r[3] >> 24) & 255,
            (r[3] >> 16) & 255,
            (r[3] >> 8) & 255,
            255 & r[3],
            (r[4] >> 24) & 255,
            (r[4] >> 16) & 255,
            (r[4] >> 8) & 255,
            255 & r[4],
          ];
        };
      },
      4008: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          (t.unsafeStringify = i);
        var s,
          r = (s = n(6435)) && s.__esModule ? s : { default: s };
        const o = [];
        for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
        function i(e, t = 0) {
          return (
            o[e[t + 0]] +
            o[e[t + 1]] +
            o[e[t + 2]] +
            o[e[t + 3]] +
            "-" +
            o[e[t + 4]] +
            o[e[t + 5]] +
            "-" +
            o[e[t + 6]] +
            o[e[t + 7]] +
            "-" +
            o[e[t + 8]] +
            o[e[t + 9]] +
            "-" +
            o[e[t + 10]] +
            o[e[t + 11]] +
            o[e[t + 12]] +
            o[e[t + 13]] +
            o[e[t + 14]] +
            o[e[t + 15]]
          );
        }
        t.default = function (e, t = 0) {
          const n = i(e, t);
          if (!(0, r.default)(n))
            throw TypeError("Stringified UUID is invalid");
          return n;
        };
      },
      3990: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s,
          r = (s = n(3319)) && s.__esModule ? s : { default: s },
          o = n(4008);
        let i,
          a,
          c = 0,
          u = 0;
        t.default = function (e, t, n) {
          let s = (t && n) || 0;
          const l = t || new Array(16);
          let d = (e = e || {}).node || i,
            h = void 0 !== e.clockseq ? e.clockseq : a;
          if (null == d || null == h) {
            const t = e.random || (e.rng || r.default)();
            null == d && (d = i = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
              null == h && (h = a = 16383 & ((t[6] << 8) | t[7]));
          }
          let p = void 0 !== e.msecs ? e.msecs : Date.now(),
            f = void 0 !== e.nsecs ? e.nsecs : u + 1;
          const g = p - c + (f - u) / 1e4;
          if (
            (g < 0 && void 0 === e.clockseq && (h = (h + 1) & 16383),
            (g < 0 || p > c) && void 0 === e.nsecs && (f = 0),
            f >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (c = p), (u = f), (a = h), (p += 122192928e5);
          const y = (1e4 * (268435455 & p) + f) % 4294967296;
          (l[s++] = (y >>> 24) & 255),
            (l[s++] = (y >>> 16) & 255),
            (l[s++] = (y >>> 8) & 255),
            (l[s++] = 255 & y);
          const m = ((p / 4294967296) * 1e4) & 268435455;
          (l[s++] = (m >>> 8) & 255),
            (l[s++] = 255 & m),
            (l[s++] = ((m >>> 24) & 15) | 16),
            (l[s++] = (m >>> 16) & 255),
            (l[s++] = (h >>> 8) | 128),
            (l[s++] = 255 & h);
          for (let e = 0; e < 6; ++e) l[s + e] = d[e];
          return t || (0, o.unsafeStringify)(l);
        };
      },
      8237: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s = o(n(7925)),
          r = o(n(4163));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = (0, s.default)("v3", 48, r.default);
        t.default = i;
      },
      7925: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.URL = t.DNS = void 0),
          (t.default = function (e, t, n) {
            function s(e, s, i, a) {
              var c;
              if (
                ("string" == typeof e &&
                  (e = (function (e) {
                    e = unescape(encodeURIComponent(e));
                    const t = [];
                    for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                    return t;
                  })(e)),
                "string" == typeof s && (s = (0, o.default)(s)),
                16 !== (null === (c = s) || void 0 === c ? void 0 : c.length))
              )
                throw TypeError(
                  "Namespace must be array-like (16 iterable integer values, 0-255)",
                );
              let u = new Uint8Array(16 + e.length);
              if (
                (u.set(s),
                u.set(e, s.length),
                (u = n(u)),
                (u[6] = (15 & u[6]) | t),
                (u[8] = (63 & u[8]) | 128),
                i)
              ) {
                a = a || 0;
                for (let e = 0; e < 16; ++e) i[a + e] = u[e];
                return i;
              }
              return (0, r.unsafeStringify)(u);
            }
            try {
              s.name = e;
            } catch (e) {}
            return (s.DNS = i), (s.URL = a), s;
          });
        var s,
          r = n(4008),
          o = (s = n(8222)) && s.__esModule ? s : { default: s };
        const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        t.DNS = i;
        const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        t.URL = a;
      },
      5355: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s = i(n(4790)),
          r = i(n(3319)),
          o = n(4008);
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e, t, n) {
          if (s.default.randomUUID && !t && !e) return s.default.randomUUID();
          const i = (e = e || {}).random || (e.rng || r.default)();
          if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
            n = n || 0;
            for (let e = 0; e < 16; ++e) t[n + e] = i[e];
            return t;
          }
          return (0, o.unsafeStringify)(i);
        };
      },
      3764: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s = o(n(7925)),
          r = o(n(3757));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = (0, s.default)("v5", 80, r.default);
        t.default = i;
      },
      6435: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s,
          r = (s = n(58)) && s.__esModule ? s : { default: s };
        t.default = function (e) {
          return "string" == typeof e && r.default.test(e);
        };
      },
      8464: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var s,
          r = (s = n(6435)) && s.__esModule ? s : { default: s };
        t.default = function (e) {
          if (!(0, r.default)(e)) throw TypeError("Invalid UUID");
          return parseInt(e.slice(14, 15), 16);
        };
      },
      8419: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasCORS = void 0);
        let n = !1;
        try {
          n =
            "undefined" != typeof XMLHttpRequest &&
            "withCredentials" in new XMLHttpRequest();
        } catch (e) {}
        t.hasCORS = n;
      },
      5754: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decode = t.encode = void 0),
          (t.encode = function (e) {
            let t = "";
            for (let n in e)
              e.hasOwnProperty(n) &&
                (t.length && (t += "&"),
                (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
            return t;
          }),
          (t.decode = function (e) {
            let t = {},
              n = e.split("&");
            for (let e = 0, s = n.length; e < s; e++) {
              let s = n[e].split("=");
              t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
            }
            return t;
          });
      },
      5222: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.parse = void 0);
        const n =
            /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          s = [
            "source",
            "protocol",
            "authority",
            "userInfo",
            "user",
            "password",
            "host",
            "port",
            "relative",
            "path",
            "directory",
            "file",
            "query",
            "anchor",
          ];
        t.parse = function (e) {
          if (e.length > 2e3) throw "URI too long";
          const t = e,
            r = e.indexOf("["),
            o = e.indexOf("]");
          -1 != r &&
            -1 != o &&
            (e =
              e.substring(0, r) +
              e.substring(r, o).replace(/:/g, ";") +
              e.substring(o, e.length));
          let i = n.exec(e || ""),
            a = {},
            c = 14;
          for (; c--; ) a[s[c]] = i[c] || "";
          return (
            -1 != r &&
              -1 != o &&
              ((a.source = t),
              (a.host = a.host
                .substring(1, a.host.length - 1)
                .replace(/;/g, ":")),
              (a.authority = a.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
              (a.ipv6uri = !0)),
            (a.pathNames = (function (e, t) {
              const n = t.replace(/\/{2,9}/g, "/").split("/");
              return (
                ("/" != t.slice(0, 1) && 0 !== t.length) || n.splice(0, 1),
                "/" == t.slice(-1) && n.splice(n.length - 1, 1),
                n
              );
            })(0, a.path)),
            (a.queryKey = (function (e, t) {
              const n = {};
              return (
                t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, s) {
                  t && (n[t] = s);
                }),
                n
              );
            })(0, a.query)),
            a
          );
        };
      },
      8726: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.yeast = t.decode = t.encode = void 0);
        const n =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
              "",
            ),
          s = {};
        let r,
          o = 0,
          i = 0;
        function a(e) {
          let t = "";
          do {
            (t = n[e % 64] + t), (e = Math.floor(e / 64));
          } while (e > 0);
          return t;
        }
        for (
          t.encode = a,
            t.decode = function (e) {
              let t = 0;
              for (i = 0; i < e.length; i++) t = 64 * t + s[e.charAt(i)];
              return t;
            },
            t.yeast = function () {
              const e = a(+new Date());
              return e !== r ? ((o = 0), (r = e)) : e + "." + a(o++);
            };
          i < 64;
          i++
        )
          s[n[i]] = i;
      },
      6242: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.globalThisShim = void 0),
          (t.globalThisShim =
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
                ? window
                : Function("return this")());
      },
      4679: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.nextTick =
            t.parse =
            t.installTimerFunctions =
            t.transports =
            t.TransportError =
            t.Transport =
            t.protocol =
            t.Socket =
              void 0);
        const s = n(3481);
        Object.defineProperty(t, "Socket", {
          enumerable: !0,
          get: function () {
            return s.Socket;
          },
        }),
          (t.protocol = s.Socket.protocol);
        var r = n(9870);
        Object.defineProperty(t, "Transport", {
          enumerable: !0,
          get: function () {
            return r.Transport;
          },
        }),
          Object.defineProperty(t, "TransportError", {
            enumerable: !0,
            get: function () {
              return r.TransportError;
            },
          });
        var o = n(7385);
        Object.defineProperty(t, "transports", {
          enumerable: !0,
          get: function () {
            return o.transports;
          },
        });
        var i = n(9622);
        Object.defineProperty(t, "installTimerFunctions", {
          enumerable: !0,
          get: function () {
            return i.installTimerFunctions;
          },
        });
        var a = n(5222);
        Object.defineProperty(t, "parse", {
          enumerable: !0,
          get: function () {
            return a.parse;
          },
        });
        var c = n(5552);
        Object.defineProperty(t, "nextTick", {
          enumerable: !0,
          get: function () {
            return c.nextTick;
          },
        });
      },
      3481: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Socket = void 0);
        const r = n(7385),
          o = n(9622),
          i = n(5754),
          a = n(5222),
          c = s(n(4802)),
          u = n(5260),
          l = n(1373),
          d = n(5552),
          h = (0, c.default)("engine.io-client:socket");
        class p extends u.Emitter {
          constructor(e, t = {}) {
            super(),
              (this.binaryType = d.defaultBinaryType),
              (this.writeBuffer = []),
              e && "object" == typeof e && ((t = e), (e = null)),
              e
                ? ((e = (0, a.parse)(e)),
                  (t.hostname = e.host),
                  (t.secure = "https" === e.protocol || "wss" === e.protocol),
                  (t.port = e.port),
                  e.query && (t.query = e.query))
                : t.host && (t.hostname = (0, a.parse)(t.host).host),
              (0, o.installTimerFunctions)(this, t),
              (this.secure =
                null != t.secure
                  ? t.secure
                  : "undefined" != typeof location &&
                    "https:" === location.protocol),
              t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
              (this.hostname =
                t.hostname ||
                ("undefined" != typeof location
                  ? location.hostname
                  : "localhost")),
              (this.port =
                t.port ||
                ("undefined" != typeof location && location.port
                  ? location.port
                  : this.secure
                    ? "443"
                    : "80")),
              (this.transports = t.transports || [
                "polling",
                "websocket",
                "webtransport",
              ]),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0),
              (this.opts = Object.assign(
                {
                  path: "/engine.io",
                  agent: !1,
                  withCredentials: !1,
                  upgrade: !0,
                  timestampParam: "t",
                  rememberUpgrade: !1,
                  addTrailingSlash: !0,
                  rejectUnauthorized: !0,
                  perMessageDeflate: { threshold: 1024 },
                  transportOptions: {},
                  closeOnBeforeunload: !1,
                },
                t,
              )),
              (this.opts.path =
                this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "")),
              "string" == typeof this.opts.query &&
                (this.opts.query = (0, i.decode)(this.opts.query)),
              (this.id = null),
              (this.upgrades = null),
              (this.pingInterval = null),
              (this.pingTimeout = null),
              (this.pingTimeoutTimer = null),
              "function" == typeof addEventListener &&
                (this.opts.closeOnBeforeunload &&
                  ((this.beforeunloadEventListener = () => {
                    this.transport &&
                      (this.transport.removeAllListeners(),
                      this.transport.close());
                  }),
                  addEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1,
                  )),
                "localhost" !== this.hostname &&
                  ((this.offlineEventListener = () => {
                    this.onClose("transport close", {
                      description: "network connection lost",
                    });
                  }),
                  addEventListener("offline", this.offlineEventListener, !1))),
              this.open();
          }
          createTransport(e) {
            h('creating transport "%s"', e);
            const t = Object.assign({}, this.opts.query);
            (t.EIO = l.protocol),
              (t.transport = e),
              this.id && (t.sid = this.id);
            const n = Object.assign(
              {},
              this.opts,
              {
                query: t,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
              },
              this.opts.transportOptions[e],
            );
            return h("options: %j", n), new r.transports[e](n);
          }
          open() {
            let e;
            if (
              this.opts.rememberUpgrade &&
              p.priorWebsocketSuccess &&
              -1 !== this.transports.indexOf("websocket")
            )
              e = "websocket";
            else {
              if (0 === this.transports.length)
                return void this.setTimeoutFn(() => {
                  this.emitReserved("error", "No transports available");
                }, 0);
              e = this.transports[0];
            }
            this.readyState = "opening";
            try {
              e = this.createTransport(e);
            } catch (e) {
              return (
                h("error while creating transport: %s", e),
                this.transports.shift(),
                void this.open()
              );
            }
            e.open(), this.setTransport(e);
          }
          setTransport(e) {
            h("setting transport %s", e.name),
              this.transport &&
                (h("clearing existing transport %s", this.transport.name),
                this.transport.removeAllListeners()),
              (this.transport = e),
              e
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (e) => this.onClose("transport close", e));
          }
          probe(e) {
            h('probing transport "%s"', e);
            let t = this.createTransport(e),
              n = !1;
            p.priorWebsocketSuccess = !1;
            const s = () => {
              n ||
                (h('probe transport "%s" opened', e),
                t.send([{ type: "ping", data: "probe" }]),
                t.once("packet", (s) => {
                  if (!n)
                    if ("pong" === s.type && "probe" === s.data) {
                      if (
                        (h('probe transport "%s" pong', e),
                        (this.upgrading = !0),
                        this.emitReserved("upgrading", t),
                        !t)
                      )
                        return;
                      (p.priorWebsocketSuccess = "websocket" === t.name),
                        h(
                          'pausing current transport "%s"',
                          this.transport.name,
                        ),
                        this.transport.pause(() => {
                          n ||
                            ("closed" !== this.readyState &&
                              (h(
                                "changing transport and sending upgrade packet",
                              ),
                              u(),
                              this.setTransport(t),
                              t.send([
                                {
                                  type: "upgrade",
                                },
                              ]),
                              this.emitReserved("upgrade", t),
                              (t = null),
                              (this.upgrading = !1),
                              this.flush()));
                        });
                    } else {
                      h('probe transport "%s" failed', e);
                      const n = new Error("probe error");
                      (n.transport = t.name),
                        this.emitReserved("upgradeError", n);
                    }
                }));
            };
            function r() {
              n || ((n = !0), u(), t.close(), (t = null));
            }
            const o = (n) => {
              const s = new Error("probe error: " + n);
              (s.transport = t.name),
                r(),
                h('probe transport "%s" failed because of error: %s', e, n),
                this.emitReserved("upgradeError", s);
            };
            function i() {
              o("transport closed");
            }
            function a() {
              o("socket closed");
            }
            function c(e) {
              t &&
                e.name !== t.name &&
                (h('"%s" works - aborting "%s"', e.name, t.name), r());
            }
            const u = () => {
              t.removeListener("open", s),
                t.removeListener("error", o),
                t.removeListener("close", i),
                this.off("close", a),
                this.off("upgrading", c);
            };
            t.once("open", s),
              t.once("error", o),
              t.once("close", i),
              this.once("close", a),
              this.once("upgrading", c),
              -1 !== this.upgrades.indexOf("webtransport") &&
              "webtransport" !== e
                ? this.setTimeoutFn(() => {
                    n || t.open();
                  }, 200)
                : t.open();
          }
          onOpen() {
            if (
              (h("socket open"),
              (this.readyState = "open"),
              (p.priorWebsocketSuccess = "websocket" === this.transport.name),
              this.emitReserved("open"),
              this.flush(),
              "open" === this.readyState && this.opts.upgrade)
            ) {
              h("starting upgrade probes");
              let e = 0;
              const t = this.upgrades.length;
              for (; e < t; e++) this.probe(this.upgrades[e]);
            }
          }
          onPacket(e) {
            if (
              "opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState
            )
              switch (
                (h('socket receive: type "%s", data "%s"', e.type, e.data),
                this.emitReserved("packet", e),
                this.emitReserved("heartbeat"),
                this.resetPingTimeout(),
                e.type)
              ) {
                case "open":
                  this.onHandshake(JSON.parse(e.data));
                  break;
                case "ping":
                  this.sendPacket("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong");
                  break;
                case "error":
                  const t = new Error("server error");
                  (t.code = e.data), this.onError(t);
                  break;
                case "message":
                  this.emitReserved("data", e.data),
                    this.emitReserved("message", e.data);
              }
            else
              h('packet received with socket readyState "%s"', this.readyState);
          }
          onHandshake(e) {
            this.emitReserved("handshake", e),
              (this.id = e.sid),
              (this.transport.query.sid = e.sid),
              (this.upgrades = this.filterUpgrades(e.upgrades)),
              (this.pingInterval = e.pingInterval),
              (this.pingTimeout = e.pingTimeout),
              (this.maxPayload = e.maxPayload),
              this.onOpen(),
              "closed" !== this.readyState && this.resetPingTimeout();
          }
          resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer),
              (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
              }, this.pingInterval + this.pingTimeout)),
              this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen),
              (this.prevBufferLen = 0),
              0 === this.writeBuffer.length
                ? this.emitReserved("drain")
                : this.flush();
          }
          flush() {
            if (
              "closed" !== this.readyState &&
              this.transport.writable &&
              !this.upgrading &&
              this.writeBuffer.length
            ) {
              const e = this.getWritablePackets();
              h("flushing %d packets in socket", e.length),
                this.transport.send(e),
                (this.prevBufferLen = e.length),
                this.emitReserved("flush");
            }
          }
          getWritablePackets() {
            if (
              !(
                this.maxPayload &&
                "polling" === this.transport.name &&
                this.writeBuffer.length > 1
              )
            )
              return this.writeBuffer;
            let e = 1;
            for (let t = 0; t < this.writeBuffer.length; t++) {
              const n = this.writeBuffer[t].data;
              if (
                (n && (e += (0, o.byteLength)(n)), t > 0 && e > this.maxPayload)
              )
                return (
                  h(
                    "only send %d out of %d packets",
                    t,
                    this.writeBuffer.length,
                  ),
                  this.writeBuffer.slice(0, t)
                );
              e += 2;
            }
            return (
              h("payload size is %d (max: %d)", e, this.maxPayload),
              this.writeBuffer
            );
          }
          write(e, t, n) {
            return this.sendPacket("message", e, t, n), this;
          }
          send(e, t, n) {
            return this.sendPacket("message", e, t, n), this;
          }
          sendPacket(e, t, n, s) {
            if (
              ("function" == typeof t && ((s = t), (t = void 0)),
              "function" == typeof n && ((s = n), (n = null)),
              "closing" === this.readyState || "closed" === this.readyState)
            )
              return;
            (n = n || {}).compress = !1 !== n.compress;
            const r = { type: e, data: t, options: n };
            this.emitReserved("packetCreate", r),
              this.writeBuffer.push(r),
              s && this.once("flush", s),
              this.flush();
          }
          close() {
            const e = () => {
                this.onClose("forced close"),
                  h("socket closing - telling transport to close"),
                  this.transport.close();
              },
              t = () => {
                this.off("upgrade", t), this.off("upgradeError", t), e();
              },
              n = () => {
                this.once("upgrade", t), this.once("upgradeError", t);
              };
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                ((this.readyState = "closing"),
                this.writeBuffer.length
                  ? this.once("drain", () => {
                      this.upgrading ? n() : e();
                    })
                  : this.upgrading
                    ? n()
                    : e()),
              this
            );
          }
          onError(e) {
            h("socket error %j", e),
              (p.priorWebsocketSuccess = !1),
              this.emitReserved("error", e),
              this.onClose("transport error", e);
          }
          onClose(e, t) {
            ("opening" !== this.readyState &&
              "open" !== this.readyState &&
              "closing" !== this.readyState) ||
              (h('socket close with reason: "%s"', e),
              this.clearTimeoutFn(this.pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              "function" == typeof removeEventListener &&
                (removeEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1,
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
              (this.readyState = "closed"),
              (this.id = null),
              this.emitReserved("close", e, t),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0));
          }
          filterUpgrades(e) {
            const t = [];
            let n = 0;
            const s = e.length;
            for (; n < s; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
            return t;
          }
        }
        (t.Socket = p), (p.protocol = l.protocol);
      },
      9870: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Transport = t.TransportError = void 0);
        const r = n(1373),
          o = n(5260),
          i = n(9622),
          a = s(n(4802)),
          c = n(5754),
          u = (0, a.default)("engine.io-client:transport");
        class l extends Error {
          constructor(e, t, n) {
            super(e),
              (this.description = t),
              (this.context = n),
              (this.type = "TransportError");
          }
        }
        t.TransportError = l;
        class d extends o.Emitter {
          constructor(e) {
            super(),
              (this.writable = !1),
              (0, i.installTimerFunctions)(this, e),
              (this.opts = e),
              (this.query = e.query),
              (this.socket = e.socket);
          }
          onError(e, t, n) {
            return super.emitReserved("error", new l(e, t, n)), this;
          }
          open() {
            return (this.readyState = "opening"), this.doOpen(), this;
          }
          close() {
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                (this.doClose(), this.onClose()),
              this
            );
          }
          send(e) {
            "open" === this.readyState
              ? this.write(e)
              : u("transport is not open, discarding packets");
          }
          onOpen() {
            (this.readyState = "open"),
              (this.writable = !0),
              super.emitReserved("open");
          }
          onData(e) {
            const t = (0, r.decodePacket)(e, this.socket.binaryType);
            this.onPacket(t);
          }
          onPacket(e) {
            super.emitReserved("packet", e);
          }
          onClose(e) {
            (this.readyState = "closed"), super.emitReserved("close", e);
          }
          pause(e) {}
          createUri(e, t = {}) {
            return (
              e +
              "://" +
              this._hostname() +
              this._port() +
              this.opts.path +
              this._query(t)
            );
          }
          _hostname() {
            const e = this.opts.hostname;
            return -1 === e.indexOf(":") ? e : "[" + e + "]";
          }
          _port() {
            return this.opts.port &&
              ((this.opts.secure && Number(443 !== this.opts.port)) ||
                (!this.opts.secure && 80 !== Number(this.opts.port)))
              ? ":" + this.opts.port
              : "";
          }
          _query(e) {
            const t = (0, c.encode)(e);
            return t.length ? "?" + t : "";
          }
        }
        t.Transport = d;
      },
      7385: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.transports = void 0);
        const s = n(484),
          r = n(1308),
          o = n(1020);
        t.transports = {
          websocket: r.WS,
          webtransport: o.WT,
          polling: s.Polling,
        };
      },
      484: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Request = t.Polling = void 0);
        const r = n(9870),
          o = s(n(4802)),
          i = n(8726),
          a = n(1373),
          c = n(6666),
          u = n(5260),
          l = n(9622),
          d = n(6242),
          h = (0, o.default)("engine.io-client:polling");
        function p() {}
        const f = null != new c.XHR({ xdomain: !1 }).responseType;
        class g extends r.Transport {
          constructor(e) {
            if (
              (super(e), (this.polling = !1), "undefined" != typeof location)
            ) {
              const t = "https:" === location.protocol;
              let n = location.port;
              n || (n = t ? "443" : "80"),
                (this.xd =
                  ("undefined" != typeof location &&
                    e.hostname !== location.hostname) ||
                  n !== e.port);
            }
            const t = e && e.forceBase64;
            (this.supportsBinary = f && !t),
              this.opts.withCredentials &&
                (this.cookieJar = (0, c.createCookieJar)());
          }
          get name() {
            return "polling";
          }
          doOpen() {
            this.poll();
          }
          pause(e) {
            this.readyState = "pausing";
            const t = () => {
              h("paused"), (this.readyState = "paused"), e();
            };
            if (this.polling || !this.writable) {
              let e = 0;
              this.polling &&
                (h("we are currently polling - waiting to pause"),
                e++,
                this.once("pollComplete", function () {
                  h("pre-pause polling complete"), --e || t();
                })),
                this.writable ||
                  (h("we are currently writing - waiting to pause"),
                  e++,
                  this.once("drain", function () {
                    h("pre-pause writing complete"), --e || t();
                  }));
            } else t();
          }
          poll() {
            h("polling"),
              (this.polling = !0),
              this.doPoll(),
              this.emitReserved("poll");
          }
          onData(e) {
            h("polling got data %s", e),
              (0, a.decodePayload)(e, this.socket.binaryType).forEach((e) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === e.type &&
                    this.onOpen(),
                  "close" === e.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(e);
              }),
              "closed" !== this.readyState &&
                ((this.polling = !1),
                this.emitReserved("pollComplete"),
                "open" === this.readyState
                  ? this.poll()
                  : h('ignoring poll - transport state "%s"', this.readyState));
          }
          doClose() {
            const e = () => {
              h("writing close packet"), this.write([{ type: "close" }]);
            };
            "open" === this.readyState
              ? (h("transport open - closing"), e())
              : (h("transport not open - deferring close"),
                this.once("open", e));
          }
          write(e) {
            (this.writable = !1),
              (0, a.encodePayload)(e, (e) => {
                this.doWrite(e, () => {
                  (this.writable = !0), this.emitReserved("drain");
                });
              });
          }
          uri() {
            const e = this.opts.secure ? "https" : "http",
              t = this.query || {};
            return (
              !1 !== this.opts.timestampRequests &&
                (t[this.opts.timestampParam] = (0, i.yeast)()),
              this.supportsBinary || t.sid || (t.b64 = 1),
              this.createUri(e, t)
            );
          }
          request(e = {}) {
            return (
              Object.assign(
                e,
                { xd: this.xd, cookieJar: this.cookieJar },
                this.opts,
              ),
              new y(this.uri(), e)
            );
          }
          doWrite(e, t) {
            const n = this.request({ method: "POST", data: e });
            n.on("success", t),
              n.on("error", (e, t) => {
                this.onError("xhr post error", e, t);
              });
          }
          doPoll() {
            h("xhr poll");
            const e = this.request();
            e.on("data", this.onData.bind(this)),
              e.on("error", (e, t) => {
                this.onError("xhr poll error", e, t);
              }),
              (this.pollXhr = e);
          }
        }
        t.Polling = g;
        class y extends u.Emitter {
          constructor(e, t) {
            super(),
              (0, l.installTimerFunctions)(this, t),
              (this.opts = t),
              (this.method = t.method || "GET"),
              (this.uri = e),
              (this.data = void 0 !== t.data ? t.data : null),
              this.create();
          }
          create() {
            var e;
            const t = (0, l.pick)(
              this.opts,
              "agent",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "autoUnref",
            );
            t.xdomain = !!this.opts.xd;
            const n = (this.xhr = new c.XHR(t));
            try {
              h("xhr open %s: %s", this.method, this.uri),
                n.open(this.method, this.uri, !0);
              try {
                if (this.opts.extraHeaders) {
                  n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                  for (let e in this.opts.extraHeaders)
                    this.opts.extraHeaders.hasOwnProperty(e) &&
                      n.setRequestHeader(e, this.opts.extraHeaders[e]);
                }
              } catch (e) {}
              if ("POST" === this.method)
                try {
                  n.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8",
                  );
                } catch (e) {}
              try {
                n.setRequestHeader("Accept", "*/*");
              } catch (e) {}
              null === (e = this.opts.cookieJar) ||
                void 0 === e ||
                e.addCookies(n),
                "withCredentials" in n &&
                  (n.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                  (n.timeout = this.opts.requestTimeout),
                (n.onreadystatechange = () => {
                  var e;
                  3 === n.readyState &&
                    (null === (e = this.opts.cookieJar) ||
                      void 0 === e ||
                      e.parseCookies(n)),
                    4 === n.readyState &&
                      (200 === n.status || 1223 === n.status
                        ? this.onLoad()
                        : this.setTimeoutFn(() => {
                            this.onError(
                              "number" == typeof n.status ? n.status : 0,
                            );
                          }, 0));
                }),
                h("xhr data %s", this.data),
                n.send(this.data);
            } catch (e) {
              return void this.setTimeoutFn(() => {
                this.onError(e);
              }, 0);
            }
            "undefined" != typeof document &&
              ((this.index = y.requestsCount++),
              (y.requests[this.index] = this));
          }
          onError(e) {
            this.emitReserved("error", e, this.xhr), this.cleanup(!0);
          }
          cleanup(e) {
            if (void 0 !== this.xhr && null !== this.xhr) {
              if (((this.xhr.onreadystatechange = p), e))
                try {
                  this.xhr.abort();
                } catch (e) {}
              "undefined" != typeof document && delete y.requests[this.index],
                (this.xhr = null);
            }
          }
          onLoad() {
            const e = this.xhr.responseText;
            null !== e &&
              (this.emitReserved("data", e),
              this.emitReserved("success"),
              this.cleanup());
          }
          abort() {
            this.cleanup();
          }
        }
        if (
          ((t.Request = y),
          (y.requestsCount = 0),
          (y.requests = {}),
          "undefined" != typeof document)
        )
          if ("function" == typeof attachEvent) attachEvent("onunload", m);
          else if ("function" == typeof addEventListener) {
            const e = "onpagehide" in d.globalThisShim ? "pagehide" : "unload";
            addEventListener(e, m, !1);
          }
        function m() {
          for (let e in y.requests)
            y.requests.hasOwnProperty(e) && y.requests[e].abort();
        }
      },
      5552: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultBinaryType =
            t.usingBrowserWebSocket =
            t.WebSocket =
            t.nextTick =
              void 0);
        const s = n(6242);
        (t.nextTick =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0)),
          (t.WebSocket =
            s.globalThisShim.WebSocket || s.globalThisShim.MozWebSocket),
          (t.usingBrowserWebSocket = !0),
          (t.defaultBinaryType = "arraybuffer");
      },
      1308: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WS = void 0);
        const r = n(9870),
          o = n(8726),
          i = n(9622),
          a = n(5552),
          c = s(n(4802)),
          u = n(1373),
          l = (0, c.default)("engine.io-client:websocket"),
          d =
            "undefined" != typeof navigator &&
            "string" == typeof navigator.product &&
            "reactnative" === navigator.product.toLowerCase();
        class h extends r.Transport {
          constructor(e) {
            super(e), (this.supportsBinary = !e.forceBase64);
          }
          get name() {
            return "websocket";
          }
          doOpen() {
            if (!this.check()) return;
            const e = this.uri(),
              t = this.opts.protocols,
              n = d
                ? {}
                : (0, i.pick)(
                    this.opts,
                    "agent",
                    "perMessageDeflate",
                    "pfx",
                    "key",
                    "passphrase",
                    "cert",
                    "ca",
                    "ciphers",
                    "rejectUnauthorized",
                    "localAddress",
                    "protocolVersion",
                    "origin",
                    "maxPayload",
                    "family",
                    "checkServerIdentity",
                  );
            this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
            try {
              this.ws =
                a.usingBrowserWebSocket && !d
                  ? t
                    ? new a.WebSocket(e, t)
                    : new a.WebSocket(e)
                  : new a.WebSocket(e, t, n);
            } catch (e) {
              return this.emitReserved("error", e);
            }
            (this.ws.binaryType = this.socket.binaryType),
              this.addEventListeners();
          }
          addEventListeners() {
            (this.ws.onopen = () => {
              this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
            }),
              (this.ws.onclose = (e) =>
                this.onClose({
                  description: "websocket connection closed",
                  context: e,
                })),
              (this.ws.onmessage = (e) => this.onData(e.data)),
              (this.ws.onerror = (e) => this.onError("websocket error", e));
          }
          write(e) {
            this.writable = !1;
            for (let t = 0; t < e.length; t++) {
              const n = e[t],
                s = t === e.length - 1;
              (0, u.encodePacket)(n, this.supportsBinary, (e) => {
                const t = {};
                !a.usingBrowserWebSocket &&
                  (n.options && (t.compress = n.options.compress),
                  this.opts.perMessageDeflate) &&
                  ("string" == typeof e ? Buffer.byteLength(e) : e.length) <
                    this.opts.perMessageDeflate.threshold &&
                  (t.compress = !1);
                try {
                  a.usingBrowserWebSocket
                    ? this.ws.send(e)
                    : this.ws.send(e, t);
                } catch (e) {
                  l("websocket closed before onclose event");
                }
                s &&
                  (0, a.nextTick)(() => {
                    (this.writable = !0), this.emitReserved("drain");
                  }, this.setTimeoutFn);
              });
            }
          }
          doClose() {
            void 0 !== this.ws && (this.ws.close(), (this.ws = null));
          }
          uri() {
            const e = this.opts.secure ? "wss" : "ws",
              t = this.query || {};
            return (
              this.opts.timestampRequests &&
                (t[this.opts.timestampParam] = (0, o.yeast)()),
              this.supportsBinary || (t.b64 = 1),
              this.createUri(e, t)
            );
          }
          check() {
            return !!a.WebSocket;
          }
        }
        t.WS = h;
      },
      1020: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WT = void 0);
        const r = n(9870),
          o = n(5552),
          i = n(1373),
          a = (0, s(n(4802)).default)("engine.io-client:webtransport");
        class c extends r.Transport {
          get name() {
            return "webtransport";
          }
          doOpen() {
            "function" == typeof WebTransport &&
              ((this.transport = new WebTransport(
                this.createUri("https"),
                this.opts.transportOptions[this.name],
              )),
              this.transport.closed
                .then(() => {
                  a("transport closed gracefully"), this.onClose();
                })
                .catch((e) => {
                  a("transport closed due to %s", e),
                    this.onError("webtransport error", e);
                }),
              this.transport.ready.then(() => {
                this.transport.createBidirectionalStream().then((e) => {
                  const t = (0, i.createPacketDecoderStream)(
                      Number.MAX_SAFE_INTEGER,
                      this.socket.binaryType,
                    ),
                    n = e.readable.pipeThrough(t).getReader(),
                    s = (0, i.createPacketEncoderStream)();
                  s.readable.pipeTo(e.writable),
                    (this.writer = s.writable.getWriter());
                  const r = () => {
                    n.read()
                      .then(({ done: e, value: t }) => {
                        e
                          ? a("session is closed")
                          : (a("received chunk: %o", t), this.onPacket(t), r());
                      })
                      .catch((e) => {
                        a("an error occurred while reading: %s", e);
                      });
                  };
                  r();
                  const o = { type: "open" };
                  this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`),
                    this.writer.write(o).then(() => this.onOpen());
                });
              }));
          }
          write(e) {
            this.writable = !1;
            for (let t = 0; t < e.length; t++) {
              const n = e[t],
                s = t === e.length - 1;
              this.writer.write(n).then(() => {
                s &&
                  (0, o.nextTick)(() => {
                    (this.writable = !0), this.emitReserved("drain");
                  }, this.setTimeoutFn);
              });
            }
          }
          doClose() {
            var e;
            null === (e = this.transport) || void 0 === e || e.close();
          }
        }
        t.WT = c;
      },
      6666: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createCookieJar = t.XHR = void 0);
        const s = n(8419),
          r = n(6242);
        (t.XHR = function (e) {
          const t = e.xdomain;
          try {
            if ("undefined" != typeof XMLHttpRequest && (!t || s.hasCORS))
              return new XMLHttpRequest();
          } catch (e) {}
          if (!t)
            try {
              return new r.globalThisShim[
                ["Active"].concat("Object").join("X")
              ]("Microsoft.XMLHTTP");
            } catch (e) {}
        }),
          (t.createCookieJar = function () {});
      },
      9622: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.byteLength = t.installTimerFunctions = t.pick = void 0);
        const s = n(6242);
        t.pick = function (e, ...t) {
          return t.reduce(
            (t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t),
            {},
          );
        };
        const r = s.globalThisShim.setTimeout,
          o = s.globalThisShim.clearTimeout;
        (t.installTimerFunctions = function (e, t) {
          t.useNativeTimers
            ? ((e.setTimeoutFn = r.bind(s.globalThisShim)),
              (e.clearTimeoutFn = o.bind(s.globalThisShim)))
            : ((e.setTimeoutFn = s.globalThisShim.setTimeout.bind(
                s.globalThisShim,
              )),
              (e.clearTimeoutFn = s.globalThisShim.clearTimeout.bind(
                s.globalThisShim,
              )));
        }),
          (t.byteLength = function (e) {
            return "string" == typeof e
              ? (function (e) {
                  let t = 0,
                    n = 0;
                  for (let s = 0, r = e.length; s < r; s++)
                    (t = e.charCodeAt(s)),
                      t < 128
                        ? (n += 1)
                        : t < 2048
                          ? (n += 2)
                          : t < 55296 || t >= 57344
                            ? (n += 3)
                            : (s++, (n += 4));
                  return n;
                })(e)
              : Math.ceil(1.33 * (e.byteLength || e.size));
          });
      },
      3087: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ERROR_PACKET = t.PACKET_TYPES_REVERSE = t.PACKET_TYPES = void 0);
        const n = Object.create(null);
        (t.PACKET_TYPES = n),
          (n.open = "0"),
          (n.close = "1"),
          (n.ping = "2"),
          (n.pong = "3"),
          (n.message = "4"),
          (n.upgrade = "5"),
          (n.noop = "6");
        const s = Object.create(null);
        (t.PACKET_TYPES_REVERSE = s),
          Object.keys(n).forEach((e) => {
            s[n[e]] = e;
          }),
          (t.ERROR_PACKET = { type: "error", data: "parser error" });
      },
      2469: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decode = t.encode = void 0);
        const n =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
        for (let e = 0; e < 64; e++) s[n.charCodeAt(e)] = e;
        (t.encode = (e) => {
          let t,
            s = new Uint8Array(e),
            r = s.length,
            o = "";
          for (t = 0; t < r; t += 3)
            (o += n[s[t] >> 2]),
              (o += n[((3 & s[t]) << 4) | (s[t + 1] >> 4)]),
              (o += n[((15 & s[t + 1]) << 2) | (s[t + 2] >> 6)]),
              (o += n[63 & s[t + 2]]);
          return (
            r % 3 == 2
              ? (o = o.substring(0, o.length - 1) + "=")
              : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
            o
          );
        }),
          (t.decode = (e) => {
            let t,
              n,
              r,
              o,
              i,
              a = 0.75 * e.length,
              c = e.length,
              u = 0;
            "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
            const l = new ArrayBuffer(a),
              d = new Uint8Array(l);
            for (t = 0; t < c; t += 4)
              (n = s[e.charCodeAt(t)]),
                (r = s[e.charCodeAt(t + 1)]),
                (o = s[e.charCodeAt(t + 2)]),
                (i = s[e.charCodeAt(t + 3)]),
                (d[u++] = (n << 2) | (r >> 4)),
                (d[u++] = ((15 & r) << 4) | (o >> 2)),
                (d[u++] = ((3 & o) << 6) | (63 & i));
            return l;
          });
      },
      7572: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decodePacket = void 0);
        const s = n(3087),
          r = n(2469),
          o = "function" == typeof ArrayBuffer;
        t.decodePacket = (e, t) => {
          if ("string" != typeof e) return { type: "message", data: a(e, t) };
          const n = e.charAt(0);
          return "b" === n
            ? { type: "message", data: i(e.substring(1), t) }
            : s.PACKET_TYPES_REVERSE[n]
              ? e.length > 1
                ? {
                    type: s.PACKET_TYPES_REVERSE[n],
                    data: e.substring(1),
                  }
                : { type: s.PACKET_TYPES_REVERSE[n] }
              : s.ERROR_PACKET;
        };
        const i = (e, t) => {
            if (o) {
              const n = (0, r.decode)(e);
              return a(n, t);
            }
            return { base64: !0, data: e };
          },
          a = (e, t) =>
            "blob" === t
              ? e instanceof Blob
                ? e
                : new Blob([e])
              : e instanceof ArrayBuffer
                ? e
                : e.buffer;
      },
      3908: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.encodePacket = t.encodePacketToBinary = void 0);
        const s = n(3087),
          r =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" ===
                Object.prototype.toString.call(Blob)),
          o = "function" == typeof ArrayBuffer,
          i = (e) =>
            "function" == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer instanceof ArrayBuffer,
          a = ({ type: e, data: t }, n, a) =>
            r && t instanceof Blob
              ? n
                ? a(t)
                : c(t, a)
              : o && (t instanceof ArrayBuffer || i(t))
                ? n
                  ? a(t)
                  : c(new Blob([t]), a)
                : a(s.PACKET_TYPES[e] + (t || ""));
        t.encodePacket = a;
        const c = (e, t) => {
          const n = new FileReader();
          return (
            (n.onload = function () {
              const e = n.result.split(",")[1];
              t("b" + (e || ""));
            }),
            n.readAsDataURL(e)
          );
        };
        function u(e) {
          return e instanceof Uint8Array
            ? e
            : e instanceof ArrayBuffer
              ? new Uint8Array(e)
              : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        let l;
        t.encodePacketToBinary = function (e, t) {
          return r && e.data instanceof Blob
            ? e.data.arrayBuffer().then(u).then(t)
            : o && (e.data instanceof ArrayBuffer || i(e.data))
              ? t(u(e.data))
              : void a(e, !1, (e) => {
                  l || (l = new TextEncoder()), t(l.encode(e));
                });
        };
      },
      1373: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decodePayload =
            t.decodePacket =
            t.encodePayload =
            t.encodePacket =
            t.protocol =
            t.createPacketDecoderStream =
            t.createPacketEncoderStream =
              void 0);
        const s = n(3908);
        Object.defineProperty(t, "encodePacket", {
          enumerable: !0,
          get: function () {
            return s.encodePacket;
          },
        });
        const r = n(7572);
        Object.defineProperty(t, "decodePacket", {
          enumerable: !0,
          get: function () {
            return r.decodePacket;
          },
        });
        const o = n(3087),
          i = String.fromCharCode(30);
        let a;
        function c(e) {
          return e.reduce((e, t) => e + t.length, 0);
        }
        function u(e, t) {
          if (e[0].length === t) return e.shift();
          const n = new Uint8Array(t);
          let s = 0;
          for (let r = 0; r < t; r++)
            (n[r] = e[0][s++]), s === e[0].length && (e.shift(), (s = 0));
          return e.length && s < e[0].length && (e[0] = e[0].slice(s)), n;
        }
        (t.encodePayload = (e, t) => {
          const n = e.length,
            r = new Array(n);
          let o = 0;
          e.forEach((e, a) => {
            (0, s.encodePacket)(e, !1, (e) => {
              (r[a] = e), ++o === n && t(r.join(i));
            });
          });
        }),
          (t.decodePayload = (e, t) => {
            const n = e.split(i),
              s = [];
            for (let e = 0; e < n.length; e++) {
              const o = (0, r.decodePacket)(n[e], t);
              if ((s.push(o), "error" === o.type)) break;
            }
            return s;
          }),
          (t.createPacketEncoderStream = function () {
            return new TransformStream({
              transform(e, t) {
                (0, s.encodePacketToBinary)(e, (n) => {
                  const s = n.length;
                  let r;
                  if (s < 126)
                    (r = new Uint8Array(1)),
                      new DataView(r.buffer).setUint8(0, s);
                  else if (s < 65536) {
                    r = new Uint8Array(3);
                    const e = new DataView(r.buffer);
                    e.setUint8(0, 126), e.setUint16(1, s);
                  } else {
                    r = new Uint8Array(9);
                    const e = new DataView(r.buffer);
                    e.setUint8(0, 127), e.setBigUint64(1, BigInt(s));
                  }
                  e.data && "string" != typeof e.data && (r[0] |= 128),
                    t.enqueue(r),
                    t.enqueue(n);
                });
              },
            });
          }),
          (t.createPacketDecoderStream = function (e, t) {
            a || (a = new TextDecoder());
            const n = [];
            let s = 0,
              i = -1,
              l = !1;
            return new TransformStream({
              transform(d, h) {
                for (n.push(d); ; ) {
                  if (0 === s) {
                    if (c(n) < 1) break;
                    const e = u(n, 1);
                    (l = 128 == (128 & e[0])),
                      (i = 127 & e[0]),
                      (s = i < 126 ? 3 : 126 === i ? 1 : 2);
                  } else if (1 === s) {
                    if (c(n) < 2) break;
                    const e = u(n, 2);
                    (i = new DataView(
                      e.buffer,
                      e.byteOffset,
                      e.length,
                    ).getUint16(0)),
                      (s = 3);
                  } else if (2 === s) {
                    if (c(n) < 8) break;
                    const e = u(n, 8),
                      t = new DataView(e.buffer, e.byteOffset, e.length),
                      r = t.getUint32(0);
                    if (r > Math.pow(2, 21) - 1) {
                      h.enqueue(o.ERROR_PACKET);
                      break;
                    }
                    (i = r * Math.pow(2, 32) + t.getUint32(4)), (s = 3);
                  } else {
                    if (c(n) < i) break;
                    const e = u(n, i);
                    h.enqueue((0, r.decodePacket)(l ? e : a.decode(e), t)),
                      (s = 0);
                  }
                  if (0 === i || i > e) {
                    h.enqueue(o.ERROR_PACKET);
                    break;
                  }
                }
              },
            });
          }),
          (t.protocol = 4);
      },
      5159: (e, t) => {
        "use strict";
        function n(e) {
          (e = e || {}),
            (this.ms = e.min || 100),
            (this.max = e.max || 1e4),
            (this.factor = e.factor || 2),
            (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
            (this.attempts = 0);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Backoff = void 0),
          (t.Backoff = n),
          (n.prototype.duration = function () {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
              var t = Math.random(),
                n = Math.floor(t * this.jitter * e);
              e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
            }
            return 0 | Math.min(e, this.max);
          }),
          (n.prototype.reset = function () {
            this.attempts = 0;
          }),
          (n.prototype.setMin = function (e) {
            this.ms = e;
          }),
          (n.prototype.setMax = function (e) {
            this.max = e;
          }),
          (n.prototype.setJitter = function (e) {
            this.jitter = e;
          });
      },
      7046: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            t.connect =
            t.io =
            t.Socket =
            t.Manager =
            t.protocol =
              void 0);
        const r = n(3084),
          o = n(4168);
        Object.defineProperty(t, "Manager", {
          enumerable: !0,
          get: function () {
            return o.Manager;
          },
        });
        const i = n(8312);
        Object.defineProperty(t, "Socket", {
          enumerable: !0,
          get: function () {
            return i.Socket;
          },
        });
        const a = s(n(3669)).default("socket.io-client"),
          c = {};
        function u(e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          const n = r.url(e, t.path || "/socket.io"),
            s = n.source,
            i = n.id,
            u = n.path,
            l = c[i] && u in c[i].nsps;
          let d;
          return (
            t.forceNew || t["force new connection"] || !1 === t.multiplex || l
              ? (a("ignoring socket cache for %s", s),
                (d = new o.Manager(s, t)))
              : (c[i] ||
                  (a("new io instance for %s", s),
                  (c[i] = new o.Manager(s, t))),
                (d = c[i])),
            n.query && !t.query && (t.query = n.queryKey),
            d.socket(n.path, t)
          );
        }
        (t.io = u),
          (t.connect = u),
          (t.default = u),
          Object.assign(u, {
            Manager: o.Manager,
            Socket: i.Socket,
            io: u,
            connect: u,
          });
        var l = n(4514);
        Object.defineProperty(t, "protocol", {
          enumerable: !0,
          get: function () {
            return l.protocol;
          },
        }),
          (e.exports = u);
      },
      4168: function (e, t, n) {
        "use strict";
        var s =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, s) {
                  void 0 === s && (s = n),
                    Object.defineProperty(e, s, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, s) {
                  void 0 === s && (s = n), (e[s] = t[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    s(t, e, n);
              return r(t, e), t;
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Manager = void 0);
        const a = n(4679),
          c = n(8312),
          u = o(n(4514)),
          l = n(7149),
          d = n(5159),
          h = n(5260),
          p = i(n(3669)).default("socket.io-client:manager");
        class f extends h.Emitter {
          constructor(e, t) {
            var n;
            super(),
              (this.nsps = {}),
              (this.subs = []),
              e && "object" == typeof e && ((t = e), (e = void 0)),
              ((t = t || {}).path = t.path || "/socket.io"),
              (this.opts = t),
              a.installTimerFunctions(this, t),
              this.reconnection(!1 !== t.reconnection),
              this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
              this.reconnectionDelay(t.reconnectionDelay || 1e3),
              this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
              this.randomizationFactor(
                null !== (n = t.randomizationFactor) && void 0 !== n ? n : 0.5,
              ),
              (this.backoff = new d.Backoff({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
              })),
              this.timeout(null == t.timeout ? 2e4 : t.timeout),
              (this._readyState = "closed"),
              (this.uri = e);
            const s = t.parser || u;
            (this.encoder = new s.Encoder()),
              (this.decoder = new s.Decoder()),
              (this._autoConnect = !1 !== t.autoConnect),
              this._autoConnect && this.open();
          }
          reconnection(e) {
            return arguments.length
              ? ((this._reconnection = !!e), this)
              : this._reconnection;
          }
          reconnectionAttempts(e) {
            return void 0 === e
              ? this._reconnectionAttempts
              : ((this._reconnectionAttempts = e), this);
          }
          reconnectionDelay(e) {
            var t;
            return void 0 === e
              ? this._reconnectionDelay
              : ((this._reconnectionDelay = e),
                null === (t = this.backoff) || void 0 === t || t.setMin(e),
                this);
          }
          randomizationFactor(e) {
            var t;
            return void 0 === e
              ? this._randomizationFactor
              : ((this._randomizationFactor = e),
                null === (t = this.backoff) || void 0 === t || t.setJitter(e),
                this);
          }
          reconnectionDelayMax(e) {
            var t;
            return void 0 === e
              ? this._reconnectionDelayMax
              : ((this._reconnectionDelayMax = e),
                null === (t = this.backoff) || void 0 === t || t.setMax(e),
                this);
          }
          timeout(e) {
            return arguments.length
              ? ((this._timeout = e), this)
              : this._timeout;
          }
          maybeReconnectOnOpen() {
            !this._reconnecting &&
              this._reconnection &&
              0 === this.backoff.attempts &&
              this.reconnect();
          }
          open(e) {
            if (
              (p("readyState %s", this._readyState),
              ~this._readyState.indexOf("open"))
            )
              return this;
            p("opening %s", this.uri),
              (this.engine = new a.Socket(this.uri, this.opts));
            const t = this.engine,
              n = this;
            (this._readyState = "opening"), (this.skipReconnect = !1);
            const s = l.on(t, "open", function () {
                n.onopen(), e && e();
              }),
              r = (t) => {
                p("error"),
                  this.cleanup(),
                  (this._readyState = "closed"),
                  this.emitReserved("error", t),
                  e ? e(t) : this.maybeReconnectOnOpen();
              },
              o = l.on(t, "error", r);
            if (!1 !== this._timeout) {
              const e = this._timeout;
              p("connect attempt will timeout after %d", e);
              const n = this.setTimeoutFn(() => {
                p("connect attempt timed out after %d", e),
                  s(),
                  r(new Error("timeout")),
                  t.close();
              }, e);
              this.opts.autoUnref && n.unref(),
                this.subs.push(() => {
                  this.clearTimeoutFn(n);
                });
            }
            return this.subs.push(s), this.subs.push(o), this;
          }
          connect(e) {
            return this.open(e);
          }
          onopen() {
            p("open"),
              this.cleanup(),
              (this._readyState = "open"),
              this.emitReserved("open");
            const e = this.engine;
            this.subs.push(
              l.on(e, "ping", this.onping.bind(this)),
              l.on(e, "data", this.ondata.bind(this)),
              l.on(e, "error", this.onerror.bind(this)),
              l.on(e, "close", this.onclose.bind(this)),
              l.on(this.decoder, "decoded", this.ondecoded.bind(this)),
            );
          }
          onping() {
            this.emitReserved("ping");
          }
          ondata(e) {
            try {
              this.decoder.add(e);
            } catch (e) {
              this.onclose("parse error", e);
            }
          }
          ondecoded(e) {
            a.nextTick(() => {
              this.emitReserved("packet", e);
            }, this.setTimeoutFn);
          }
          onerror(e) {
            p("error", e), this.emitReserved("error", e);
          }
          socket(e, t) {
            let n = this.nsps[e];
            return (
              n
                ? this._autoConnect && !n.active && n.connect()
                : ((n = new c.Socket(this, e, t)), (this.nsps[e] = n)),
              n
            );
          }
          _destroy(e) {
            const t = Object.keys(this.nsps);
            for (const e of t)
              if (this.nsps[e].active)
                return void p("socket %s is still active, skipping close", e);
            this._close();
          }
          _packet(e) {
            p("writing packet %j", e);
            const t = this.encoder.encode(e);
            for (let n = 0; n < t.length; n++)
              this.engine.write(t[n], e.options);
          }
          cleanup() {
            p("cleanup"),
              this.subs.forEach((e) => e()),
              (this.subs.length = 0),
              this.decoder.destroy();
          }
          _close() {
            p("disconnect"),
              (this.skipReconnect = !0),
              (this._reconnecting = !1),
              this.onclose("forced close"),
              this.engine && this.engine.close();
          }
          disconnect() {
            return this._close();
          }
          onclose(e, t) {
            p("closed due to %s", e),
              this.cleanup(),
              this.backoff.reset(),
              (this._readyState = "closed"),
              this.emitReserved("close", e, t),
              this._reconnection && !this.skipReconnect && this.reconnect();
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            const e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              p("reconnect failed"),
                this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
            else {
              const t = this.backoff.duration();
              p("will wait %dms before reconnect attempt", t),
                (this._reconnecting = !0);
              const n = this.setTimeoutFn(() => {
                e.skipReconnect ||
                  (p("attempting reconnect"),
                  this.emitReserved("reconnect_attempt", e.backoff.attempts),
                  e.skipReconnect ||
                    e.open((t) => {
                      t
                        ? (p("reconnect attempt error"),
                          (e._reconnecting = !1),
                          e.reconnect(),
                          this.emitReserved("reconnect_error", t))
                        : (p("reconnect success"), e.onreconnect());
                    }));
              }, t);
              this.opts.autoUnref && n.unref(),
                this.subs.push(() => {
                  this.clearTimeoutFn(n);
                });
            }
          }
          onreconnect() {
            const e = this.backoff.attempts;
            (this._reconnecting = !1),
              this.backoff.reset(),
              this.emitReserved("reconnect", e);
          }
        }
        t.Manager = f;
      },
      7149: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.on = void 0),
          (t.on = function (e, t, n) {
            return (
              e.on(t, n),
              function () {
                e.off(t, n);
              }
            );
          });
      },
      8312: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Socket = void 0);
        const r = n(4514),
          o = n(7149),
          i = n(5260),
          a = s(n(3669)).default("socket.io-client:socket"),
          c = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1,
          });
        class u extends i.Emitter {
          constructor(e, t, n) {
            super(),
              (this.connected = !1),
              (this.recovered = !1),
              (this.receiveBuffer = []),
              (this.sendBuffer = []),
              (this._queue = []),
              (this._queueSeq = 0),
              (this.ids = 0),
              (this.acks = {}),
              (this.flags = {}),
              (this.io = e),
              (this.nsp = t),
              n && n.auth && (this.auth = n.auth),
              (this._opts = Object.assign({}, n)),
              this.io._autoConnect && this.open();
          }
          get disconnected() {
            return !this.connected;
          }
          subEvents() {
            if (this.subs) return;
            const e = this.io;
            this.subs = [
              o.on(e, "open", this.onopen.bind(this)),
              o.on(e, "packet", this.onpacket.bind(this)),
              o.on(e, "error", this.onerror.bind(this)),
              o.on(e, "close", this.onclose.bind(this)),
            ];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            return (
              this.connected ||
                (this.subEvents(),
                this.io._reconnecting || this.io.open(),
                "open" === this.io._readyState && this.onopen()),
              this
            );
          }
          open() {
            return this.connect();
          }
          send(...e) {
            return e.unshift("message"), this.emit.apply(this, e), this;
          }
          emit(e, ...t) {
            if (c.hasOwnProperty(e))
              throw new Error(
                '"' + e.toString() + '" is a reserved event name',
              );
            if (
              (t.unshift(e),
              this._opts.retries &&
                !this.flags.fromQueue &&
                !this.flags.volatile)
            )
              return this._addToQueue(t), this;
            const n = {
              type: r.PacketType.EVENT,
              data: t,
              options: {},
            };
            if (
              ((n.options.compress = !1 !== this.flags.compress),
              "function" == typeof t[t.length - 1])
            ) {
              const e = this.ids++;
              a("emitting packet with ack id %d", e);
              const s = t.pop();
              this._registerAckCallback(e, s), (n.id = e);
            }
            const s =
              this.io.engine &&
              this.io.engine.transport &&
              this.io.engine.transport.writable;
            return (
              !this.flags.volatile || (s && this.connected)
                ? this.connected
                  ? (this.notifyOutgoingListeners(n), this.packet(n))
                  : this.sendBuffer.push(n)
                : a(
                    "discard packet as the transport is not currently writable",
                  ),
              (this.flags = {}),
              this
            );
          }
          _registerAckCallback(e, t) {
            var n;
            const s =
              null !== (n = this.flags.timeout) && void 0 !== n
                ? n
                : this._opts.ackTimeout;
            if (void 0 === s) return void (this.acks[e] = t);
            const r = this.io.setTimeoutFn(() => {
              delete this.acks[e];
              for (let t = 0; t < this.sendBuffer.length; t++)
                this.sendBuffer[t].id === e &&
                  (a("removing packet with ack id %d from the buffer", e),
                  this.sendBuffer.splice(t, 1));
              a("event with ack id %d has timed out after %d ms", e, s),
                t.call(this, new Error("operation has timed out"));
            }, s);
            this.acks[e] = (...e) => {
              this.io.clearTimeoutFn(r), t.apply(this, [null, ...e]);
            };
          }
          emitWithAck(e, ...t) {
            const n =
              void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
            return new Promise((s, r) => {
              t.push((e, t) => (n ? (e ? r(e) : s(t)) : s(e))),
                this.emit(e, ...t);
            });
          }
          _addToQueue(e) {
            let t;
            "function" == typeof e[e.length - 1] && (t = e.pop());
            const n = {
              id: this._queueSeq++,
              tryCount: 0,
              pending: !1,
              args: e,
              flags: Object.assign({ fromQueue: !0 }, this.flags),
            };
            e.push((e, ...s) => {
              if (n === this._queue[0])
                return (
                  null !== e
                    ? n.tryCount > this._opts.retries &&
                      (a(
                        "packet [%d] is discarded after %d tries",
                        n.id,
                        n.tryCount,
                      ),
                      this._queue.shift(),
                      t && t(e))
                    : (a("packet [%d] was successfully sent", n.id),
                      this._queue.shift(),
                      t && t(null, ...s)),
                  (n.pending = !1),
                  this._drainQueue()
                );
            }),
              this._queue.push(n),
              this._drainQueue();
          }
          _drainQueue(e = !1) {
            if (
              (a("draining queue"), !this.connected || 0 === this._queue.length)
            )
              return;
            const t = this._queue[0];
            !t.pending || e
              ? ((t.pending = !0),
                t.tryCount++,
                a("sending packet [%d] (try n°%d)", t.id, t.tryCount),
                (this.flags = t.flags),
                this.emit.apply(this, t.args))
              : a(
                  "packet [%d] has already been sent and is waiting for an ack",
                  t.id,
                );
          }
          packet(e) {
            (e.nsp = this.nsp), this.io._packet(e);
          }
          onopen() {
            a("transport is open - connecting"),
              "function" == typeof this.auth
                ? this.auth((e) => {
                    this._sendConnectPacket(e);
                  })
                : this._sendConnectPacket(this.auth);
          }
          _sendConnectPacket(e) {
            this.packet({
              type: r.PacketType.CONNECT,
              data: this._pid
                ? Object.assign(
                    {
                      pid: this._pid,
                      offset: this._lastOffset,
                    },
                    e,
                  )
                : e,
            });
          }
          onerror(e) {
            this.connected || this.emitReserved("connect_error", e);
          }
          onclose(e, t) {
            a("close (%s)", e),
              (this.connected = !1),
              delete this.id,
              this.emitReserved("disconnect", e, t);
          }
          onpacket(e) {
            if (e.nsp === this.nsp)
              switch (e.type) {
                case r.PacketType.CONNECT:
                  e.data && e.data.sid
                    ? this.onconnect(e.data.sid, e.data.pid)
                    : this.emitReserved(
                        "connect_error",
                        new Error(
                          "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                        ),
                      );
                  break;
                case r.PacketType.EVENT:
                case r.PacketType.BINARY_EVENT:
                  this.onevent(e);
                  break;
                case r.PacketType.ACK:
                case r.PacketType.BINARY_ACK:
                  this.onack(e);
                  break;
                case r.PacketType.DISCONNECT:
                  this.ondisconnect();
                  break;
                case r.PacketType.CONNECT_ERROR:
                  this.destroy();
                  const t = new Error(e.data.message);
                  (t.data = e.data.data), this.emitReserved("connect_error", t);
              }
          }
          onevent(e) {
            const t = e.data || [];
            a("emitting event %j", t),
              null != e.id &&
                (a("attaching ack callback to event"), t.push(this.ack(e.id))),
              this.connected
                ? this.emitEvent(t)
                : this.receiveBuffer.push(Object.freeze(t));
          }
          emitEvent(e) {
            if (this._anyListeners && this._anyListeners.length) {
              const t = this._anyListeners.slice();
              for (const n of t) n.apply(this, e);
            }
            super.emit.apply(this, e),
              this._pid &&
                e.length &&
                "string" == typeof e[e.length - 1] &&
                (this._lastOffset = e[e.length - 1]);
          }
          ack(e) {
            const t = this;
            let n = !1;
            return function (...s) {
              n ||
                ((n = !0),
                a("sending ack %j", s),
                t.packet({
                  type: r.PacketType.ACK,
                  id: e,
                  data: s,
                }));
            };
          }
          onack(e) {
            const t = this.acks[e.id];
            "function" == typeof t
              ? (a("calling ack %s with %j", e.id, e.data),
                t.apply(this, e.data),
                delete this.acks[e.id])
              : a("bad ack %s", e.id);
          }
          onconnect(e, t) {
            a("socket connected with id %s", e),
              (this.id = e),
              (this.recovered = t && this._pid === t),
              (this._pid = t),
              (this.connected = !0),
              this.emitBuffered(),
              this.emitReserved("connect"),
              this._drainQueue(!0);
          }
          emitBuffered() {
            this.receiveBuffer.forEach((e) => this.emitEvent(e)),
              (this.receiveBuffer = []),
              this.sendBuffer.forEach((e) => {
                this.notifyOutgoingListeners(e), this.packet(e);
              }),
              (this.sendBuffer = []);
          }
          ondisconnect() {
            a("server disconnect (%s)", this.nsp),
              this.destroy(),
              this.onclose("io server disconnect");
          }
          destroy() {
            this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
              this.io._destroy(this);
          }
          disconnect() {
            return (
              this.connected &&
                (a("performing disconnect (%s)", this.nsp),
                this.packet({ type: r.PacketType.DISCONNECT })),
              this.destroy(),
              this.connected && this.onclose("io client disconnect"),
              this
            );
          }
          close() {
            return this.disconnect();
          }
          compress(e) {
            return (this.flags.compress = e), this;
          }
          get volatile() {
            return (this.flags.volatile = !0), this;
          }
          timeout(e) {
            return (this.flags.timeout = e), this;
          }
          onAny(e) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.push(e),
              this
            );
          }
          prependAny(e) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.unshift(e),
              this
            );
          }
          offAny(e) {
            if (!this._anyListeners) return this;
            if (e) {
              const t = this._anyListeners;
              for (let n = 0; n < t.length; n++)
                if (e === t[n]) return t.splice(n, 1), this;
            } else this._anyListeners = [];
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
          onAnyOutgoing(e) {
            return (
              (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
              this._anyOutgoingListeners.push(e),
              this
            );
          }
          prependAnyOutgoing(e) {
            return (
              (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
              this._anyOutgoingListeners.unshift(e),
              this
            );
          }
          offAnyOutgoing(e) {
            if (!this._anyOutgoingListeners) return this;
            if (e) {
              const t = this._anyOutgoingListeners;
              for (let n = 0; n < t.length; n++)
                if (e === t[n]) return t.splice(n, 1), this;
            } else this._anyOutgoingListeners = [];
            return this;
          }
          listenersAnyOutgoing() {
            return this._anyOutgoingListeners || [];
          }
          notifyOutgoingListeners(e) {
            if (
              this._anyOutgoingListeners &&
              this._anyOutgoingListeners.length
            ) {
              const t = this._anyOutgoingListeners.slice();
              for (const n of t) n.apply(this, e.data);
            }
          }
        }
        t.Socket = u;
      },
      3084: function (e, t, n) {
        "use strict";
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.url = void 0);
        const r = n(4679),
          o = s(n(3669)).default("socket.io-client:url");
        t.url = function (e, t = "", n) {
          let s = e;
          (n = n || ("undefined" != typeof location && location)),
            null == e && (e = n.protocol + "//" + n.host),
            "string" == typeof e &&
              ("/" === e.charAt(0) &&
                (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
              /^(https?|wss?):\/\//.test(e) ||
                (o("protocol-less url %s", e),
                (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e)),
              o("parse %s", e),
              (s = r.parse(e))),
            s.port ||
              (/^(http|ws)$/.test(s.protocol)
                ? (s.port = "80")
                : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
            (s.path = s.path || "/");
          const i = -1 !== s.host.indexOf(":") ? "[" + s.host + "]" : s.host;
          return (
            (s.id = s.protocol + "://" + i + ":" + s.port + t),
            (s.href =
              s.protocol +
              "://" +
              i +
              (n && n.port === s.port ? "" : ":" + s.port)),
            s
          );
        };
      },
      4880: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.reconstructPacket = t.deconstructPacket = void 0);
        const s = n(665);
        function r(e, t) {
          if (!e) return e;
          if ((0, s.isBinary)(e)) {
            const n = { _placeholder: !0, num: t.length };
            return t.push(e), n;
          }
          if (Array.isArray(e)) {
            const n = new Array(e.length);
            for (let s = 0; s < e.length; s++) n[s] = r(e[s], t);
            return n;
          }
          if ("object" == typeof e && !(e instanceof Date)) {
            const n = {};
            for (const s in e)
              Object.prototype.hasOwnProperty.call(e, s) && (n[s] = r(e[s], t));
            return n;
          }
          return e;
        }
        function o(e, t) {
          if (!e) return e;
          if (e && !0 === e._placeholder) {
            if ("number" == typeof e.num && e.num >= 0 && e.num < t.length)
              return t[e.num];
            throw new Error("illegal attachments");
          }
          if (Array.isArray(e))
            for (let n = 0; n < e.length; n++) e[n] = o(e[n], t);
          else if ("object" == typeof e)
            for (const n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (e[n] = o(e[n], t));
          return e;
        }
        (t.deconstructPacket = function (e) {
          const t = [],
            n = e.data,
            s = e;
          return (
            (s.data = r(n, t)),
            (s.attachments = t.length),
            { packet: s, buffers: t }
          );
        }),
          (t.reconstructPacket = function (e, t) {
            return (e.data = o(e.data, t)), delete e.attachments, e;
          });
      },
      4514: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Decoder = t.Encoder = t.PacketType = t.protocol = void 0);
        const s = n(5260),
          r = n(4880),
          o = n(665),
          i = (0, n(1618).default)("socket.io-parser"),
          a = [
            "connect",
            "connect_error",
            "disconnect",
            "disconnecting",
            "newListener",
            "removeListener",
          ];
        var c;
        function u(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
        (t.protocol = 5),
          (function (e) {
            (e[(e.CONNECT = 0)] = "CONNECT"),
              (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
              (e[(e.EVENT = 2)] = "EVENT"),
              (e[(e.ACK = 3)] = "ACK"),
              (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
              (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
              (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
          })((c = t.PacketType || (t.PacketType = {}))),
          (t.Encoder = class {
            constructor(e) {
              this.replacer = e;
            }
            encode(e) {
              return (
                i("encoding packet %j", e),
                (e.type !== c.EVENT && e.type !== c.ACK) || !(0, o.hasBinary)(e)
                  ? [this.encodeAsString(e)]
                  : this.encodeAsBinary({
                      type: e.type === c.EVENT ? c.BINARY_EVENT : c.BINARY_ACK,
                      nsp: e.nsp,
                      data: e.data,
                      id: e.id,
                    })
              );
            }
            encodeAsString(e) {
              let t = "" + e.type;
              return (
                (e.type !== c.BINARY_EVENT && e.type !== c.BINARY_ACK) ||
                  (t += e.attachments + "-"),
                e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
                null != e.id && (t += e.id),
                null != e.data && (t += JSON.stringify(e.data, this.replacer)),
                i("encoded %j as %s", e, t),
                t
              );
            }
            encodeAsBinary(e) {
              const t = (0, r.deconstructPacket)(e),
                n = this.encodeAsString(t.packet),
                s = t.buffers;
              return s.unshift(n), s;
            }
          });
        class l extends s.Emitter {
          constructor(e) {
            super(), (this.reviver = e);
          }
          add(e) {
            let t;
            if ("string" == typeof e) {
              if (this.reconstructor)
                throw new Error(
                  "got plaintext data when reconstructing a packet",
                );
              t = this.decodeString(e);
              const n = t.type === c.BINARY_EVENT;
              n || t.type === c.BINARY_ACK
                ? ((t.type = n ? c.EVENT : c.ACK),
                  (this.reconstructor = new d(t)),
                  0 === t.attachments && super.emitReserved("decoded", t))
                : super.emitReserved("decoded", t);
            } else {
              if (!(0, o.isBinary)(e) && !e.base64)
                throw new Error("Unknown type: " + e);
              if (!this.reconstructor)
                throw new Error(
                  "got binary data when not reconstructing a packet",
                );
              (t = this.reconstructor.takeBinaryData(e)),
                t &&
                  ((this.reconstructor = null),
                  super.emitReserved("decoded", t));
            }
          }
          decodeString(e) {
            let t = 0;
            const n = { type: Number(e.charAt(0)) };
            if (void 0 === c[n.type])
              throw new Error("unknown packet type " + n.type);
            if (n.type === c.BINARY_EVENT || n.type === c.BINARY_ACK) {
              const s = t + 1;
              for (; "-" !== e.charAt(++t) && t != e.length; );
              const r = e.substring(s, t);
              if (r != Number(r) || "-" !== e.charAt(t))
                throw new Error("Illegal attachments");
              n.attachments = Number(r);
            }
            if ("/" === e.charAt(t + 1)) {
              const s = t + 1;
              for (; ++t && "," !== e.charAt(t) && t !== e.length; );
              n.nsp = e.substring(s, t);
            } else n.nsp = "/";
            const s = e.charAt(t + 1);
            if ("" !== s && Number(s) == s) {
              const s = t + 1;
              for (; ++t; ) {
                const n = e.charAt(t);
                if (null == n || Number(n) != n) {
                  --t;
                  break;
                }
                if (t === e.length) break;
              }
              n.id = Number(e.substring(s, t + 1));
            }
            if (e.charAt(++t)) {
              const s = this.tryParse(e.substr(t));
              if (!l.isPayloadValid(n.type, s))
                throw new Error("invalid payload");
              n.data = s;
            }
            return i("decoded %s as %j", e, n), n;
          }
          tryParse(e) {
            try {
              return JSON.parse(e, this.reviver);
            } catch (e) {
              return !1;
            }
          }
          static isPayloadValid(e, t) {
            switch (e) {
              case c.CONNECT:
                return u(t);
              case c.DISCONNECT:
                return void 0 === t;
              case c.CONNECT_ERROR:
                return "string" == typeof t || u(t);
              case c.EVENT:
              case c.BINARY_EVENT:
                return (
                  Array.isArray(t) &&
                  ("number" == typeof t[0] ||
                    ("string" == typeof t[0] && -1 === a.indexOf(t[0])))
                );
              case c.ACK:
              case c.BINARY_ACK:
                return Array.isArray(t);
            }
          }
          destroy() {
            this.reconstructor &&
              (this.reconstructor.finishedReconstruction(),
              (this.reconstructor = null));
          }
        }
        t.Decoder = l;
        class d {
          constructor(e) {
            (this.packet = e), (this.buffers = []), (this.reconPack = e);
          }
          takeBinaryData(e) {
            if (
              (this.buffers.push(e),
              this.buffers.length === this.reconPack.attachments)
            ) {
              const e = (0, r.reconstructPacket)(this.reconPack, this.buffers);
              return this.finishedReconstruction(), e;
            }
            return null;
          }
          finishedReconstruction() {
            (this.reconPack = null), (this.buffers = []);
          }
        }
      },
      665: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasBinary = t.isBinary = void 0);
        const n = "function" == typeof ArrayBuffer,
          s = Object.prototype.toString,
          r =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" === s.call(Blob)),
          o =
            "function" == typeof File ||
            ("undefined" != typeof File &&
              "[object FileConstructor]" === s.call(File));
        function i(e) {
          return (
            (n &&
              (e instanceof ArrayBuffer ||
                ((e) =>
                  "function" == typeof ArrayBuffer.isView
                    ? ArrayBuffer.isView(e)
                    : e.buffer instanceof ArrayBuffer)(e))) ||
            (r && e instanceof Blob) ||
            (o && e instanceof File)
          );
        }
        (t.isBinary = i),
          (t.hasBinary = function e(t, n) {
            if (!t || "object" != typeof t) return !1;
            if (Array.isArray(t)) {
              for (let n = 0, s = t.length; n < s; n++) if (e(t[n])) return !0;
              return !1;
            }
            if (i(t)) return !0;
            if (
              t.toJSON &&
              "function" == typeof t.toJSON &&
              1 === arguments.length
            )
              return e(t.toJSON(), !0);
            for (const n in t)
              if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
                return !0;
            return !1;
          });
      },
      5260: (e, t, n) => {
        "use strict";
        function s(e) {
          if (e)
            return (function (e) {
              for (var t in s.prototype) e[t] = s.prototype[t];
              return e;
            })(e);
        }
        n.r(t),
          n.d(t, { Emitter: () => s }),
          (s.prototype.on = s.prototype.addEventListener =
            function (e, t) {
              return (
                (this._callbacks = this._callbacks || {}),
                (this._callbacks["$" + e] =
                  this._callbacks["$" + e] || []).push(t),
                this
              );
            }),
          (s.prototype.once = function (e, t) {
            function n() {
              this.off(e, n), t.apply(this, arguments);
            }
            return (n.fn = t), this.on(e, n), this;
          }),
          (s.prototype.off =
            s.prototype.removeListener =
            s.prototype.removeAllListeners =
            s.prototype.removeEventListener =
              function (e, t) {
                if (
                  ((this._callbacks = this._callbacks || {}),
                  0 == arguments.length)
                )
                  return (this._callbacks = {}), this;
                var n,
                  s = this._callbacks["$" + e];
                if (!s) return this;
                if (1 == arguments.length)
                  return delete this._callbacks["$" + e], this;
                for (var r = 0; r < s.length; r++)
                  if ((n = s[r]) === t || n.fn === t) {
                    s.splice(r, 1);
                    break;
                  }
                return 0 === s.length && delete this._callbacks["$" + e], this;
              }),
          (s.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            for (
              var t = new Array(arguments.length - 1),
                n = this._callbacks["$" + e],
                s = 1;
              s < arguments.length;
              s++
            )
              t[s - 1] = arguments[s];
            if (n) {
              s = 0;
              for (var r = (n = n.slice(0)).length; s < r; ++s)
                n[s].apply(this, t);
            }
            return this;
          }),
          (s.prototype.emitReserved = s.prototype.emit),
          (s.prototype.listeners = function (e) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks["$" + e] || []
            );
          }),
          (s.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length;
          });
      },
    },
    t = {};
  function n(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var o = (t[s] = { exports: {} });
    return e[s].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.d = (e, t) => {
    for (var s in t)
      n.o(t, s) &&
        !n.o(e, s) &&
        Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    n(6131);
})();
