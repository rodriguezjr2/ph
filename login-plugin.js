/*! For license information please see login-plugin.js.LICENSE.txt */
define(["react", "op/opux/v3/opux-core", "react-dom", "op/opux-modal/v3/modal", "op/opux-infobox/v3/infobox"], (function(e, t, n, a, i) {
    return function(e) {
        var t = {};
        function n(a) {
            if (t[a])
                return t[a].exports;
           var i = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var a = Object.create(null);
            if (n.r(a),
            Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    n.d(a, i, function(t) {
                        return e[t]
                    }
                    .bind(null, i));
            return a
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 11)
    }([function(t, n) {
        t.exports = e
    }
    , function(e, n) {
        e.exports = t
    }
    , function(e, t, n) {
        var a;
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function i() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var a = arguments[t];
                    if (a) {
                        var r = typeof a;
                        if ("string" === r || "number" === r)
                            e.push(a);
                        else if (Array.isArray(a)) {
                            if (a.length) {
                                var o = i.apply(null, a);
                                o && e.push(o)
                            }
                        } else if ("object" === r)
                            if (a.toString === Object.prototype.toString)
                                for (var s in a)
                                    n.call(a, s) && a[s] && e.push(s);
                            else
                                e.push(a.toString())
                    }
                }
                return e.join(" ")
            }
            e.exports ? (i.default = i,
            e.exports = i) : void 0 === (a = function() {
                return i
            }
            .apply(t, [])) || (e.exports = a)
        }()
    }
    , function(e, t) {
        e.exports = n
    }
    , function(e, t) {
        e.exports = a
    }
    , , function(e, t, n) {
        "use strict";
        var a, i = function() {
            return void 0 === a && (a = Boolean(window && document && document.all && !window.atob)),
            a
        }, r = function() {
            var e = {};
            return function(t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                        try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                    e[t] = n
                }
                return e[t]
            }
        }(), o = [];
        function s(e) {
            for (var t = -1, n = 0; n < o.length; n++)
                if (o[n].identifier === e) {
                    t = n;
                    break
                }
            return t
        }
        function l(e, t) {
            for (var n = {}, a = [], i = 0; i < e.length; i++) {
                var r = e[i]
                  , l = t.base ? r[0] + t.base : r[0]
                  , c = n[l] || 0
                  , u = "".concat(l, " ").concat(c);
                n[l] = c + 1;
                var d = s(u)
                  , m = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
                -1 !== d ? (o[d].references++,
                o[d].updater(m)) : o.push({
                    identifier: u,
                    updater: p(m, t),
                    references: 1
                }),
                a.push(u)
            }
            return a
        }
        function c(e) {
            var t = document.createElement("style")
              , a = e.attributes || {};
            if (void 0 === a.nonce) {
                var i = n.nc;
                i && (a.nonce = i)
            }
            if (Object.keys(a).forEach((function(e) {
                t.setAttribute(e, a[e])
            }
            )),
            "function" == typeof e.insert)
                e.insert(t);
            else {
                var o = r(e.insert || "head");
                if (!o)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(t)
            }
            return t
        }
        var u, d = (u = [],
        function(e, t) {
            return u[e] = t,
            u.filter(Boolean).join("\n")
        }
        );
        function m(e, t, n, a) {
            var i = n ? "" : a.media ? "@media ".concat(a.media, " {").concat(a.css, "}") : a.css;
            if (e.styleSheet)
                e.styleSheet.cssText = d(t, i);
            else {
                var r = document.createTextNode(i)
                  , o = e.childNodes;
                o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(r, o[t]) : e.appendChild(r)
            }
        }
        function f(e, t, n) {
            var a = n.css
              , i = n.media
              , r = n.sourceMap;
            if (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
            r && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")),
            e.styleSheet)
                e.styleSheet.cssText = a;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(a))
            }
        }
        var h = null
          , b = 0;
        function p(e, t) {
            var n, a, i;
            if (t.singleton) {
                var r = b++;
                n = h || (h = c(t)),
                a = m.bind(null, n, r, !1),
                i = m.bind(null, n, r, !0)
            } else
                n = c(t),
                a = f.bind(null, n, t),
                i = function() {
                    !function(e) {
                        if (null === e.parentNode)
                            return !1;
                        e.parentNode.removeChild(e)
                    }(n)
                }
                ;
            return a(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    a(e = t)
                } else
                    i()
            }
        }
        e.exports = function(e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
            var n = l(e = e || [], t);
            return function(e) {
                if (e = e || [],
                "[object Array]" === Object.prototype.toString.call(e)) {
                    for (var a = 0; a < n.length; a++) {
                        var i = s(n[a]);
                        o[i].references--
                    }
                    for (var r = l(e, t), c = 0; c < n.length; c++) {
                        var u = s(n[c]);
                        0 === o[u].references && (o[u].updater(),
                        o.splice(u, 1))
                    }
                    n = r
                }
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var n = e(t);
                    return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                }
                )).join("")
            }
            ,
            t.i = function(e, n, a) {
                "string" == typeof e && (e = [[null, e, ""]]);
                var i = {};
                if (a)
                    for (var r = 0; r < this.length; r++) {
                        var o = this[r][0];
                        null != o && (i[o] = !0)
                    }
                for (var s = 0; s < e.length; s++) {
                    var l = [].concat(e[s]);
                    a && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n),
                    t.push(l))
                }
            }
            ,
            t
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(7)
          , i = n.n(a)()((function(e) {
            return e[1]
        }
        ));
        i.push([e.i, ".s1e9l74a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#323232;line-height:2.4rem;font-size:1.7rem;margin-top:1.6rem;margin-bottom:3.6rem;text-transform:uppercase;}.s1e9l74a:before,.s1e9l74a:after{content:'';-webkit-flex:1;-ms-flex:1;flex:1;border-bottom:0.1rem solid #DCDCDC;}.s1e9l74a:before{margin-right:0.4rem;}.s1e9l74a:after{margin-left:0.4rem;}\n@media screen and (max-width:399px){.h1mb45nn{display:none;}}\n.s15nkou8{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:52.8rem;}.s15nkou8 .ds-alert{margin-top:2.4rem;margin-bottom:0;}.s15nkou8 form{width:100%;}.s15nkou8 footer{margin:2rem 0;}\n.o1mwzxa8{margin:0 auto;}\n.h1y2mlq{white-space:nowrap;margin-bottom:0 !important;}\n.g77mtws{margin-top:3.6rem;}\n.t2p5kn .ds-tile__content{margin-right:0.8rem;}@media screen and (max-width:399px){.t2p5kn{margin-top:1.6rem;}}\n.t1edtxbv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-weight:500;font-size:1.9rem;line-height:2.4rem;}@media screen and (min-width:800px){.t1edtxbv{font-size:2.2rem;}}\n.clglbzu{display:block;margin-left:auto;margin-right:auto;}\n.s8tyd62{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.s8tyd62 p{margin:2rem 0 2.4rem;}.s8tyd62 button{width:21rem;}\n.k1x1axhw{margin:4rem 0;}\n.i6298kk{margin-left:0.4rem;padding-top:0.4rem !important;padding-bottom:0.2rem !important;}\n.i1c4xekb{z-index:1001;}\n.h1eqnlm0[tabindex]:focus{outline-color:#6C6C6C;outline-style:dotted;outline-width:0.1rem;}\n.n19h0qi2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:60rem;margin:4rem 0;}\n.huydt7b{margin:4rem auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n.sbf5dj5{margin:4rem 0;max-width:100rem;}\n.p1dqi7we{font-size:4.2rem;line-height:4.4rem;margin-bottom:2rem;}\n.sj05kqb{font-size:2.8rem;line-height:3.2rem;}\n.mtntbkz{margin-bottom:1rem;}\n.m1t6edoy{margin-bottom:3rem;}\n.s1rbj2m8{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;border-top:1px solid rgba(0,0,0,0.15);border-bottom:1px solid rgba(0,0,0,0.15);padding:3rem 0;}.ds-alert + .s1rbj2m8{border-top:0;padding-top:0;}.s1rbj2m8 ol{margin:0;}\n.fll2k4n{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 1rem;width:20rem;margin-right:1rem;}.sbf5dj5 .fll2k4n{width:22rem;margin-right:3rem;}@media screen and (max-width:679px){.fll2k4n{display:none;}}\n.s8jfrax li:not([value]):before{position:absolute;margin:0.2rem 0 0 -2.8rem;background:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMyIj48cGF0aCBzdHlsZT0iZmlsbDojMDA5ZTJlIiBkPSJNMjUuMTQ3IDguMzA1YTEuMDk2IDEuMDk2IDAgMDExLjU0OC0uMTU4IDEuMDk3IDEuMDk3IDAgMDEuMTU4IDEuNTQ4TDE1Ljk2MyAyM2MtLjIxNC4yNjEtLjU5NC4zOS0uOTc5LjM4OC0uMzc2LS4wMDMtLjc1NS0uMTMyLS45ODQtLjM4OGwtNi44MDQtNy4yNWExLjA5NyAxLjA5NyAwIDAxLjA1My0xLjU1NCAxLjA5NyAxLjA5NyAwIDAxMS41NTUuMDUzbDYuMTk4IDYuNzM1TDI1LjE0NyA4LjMwNXoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPgo=);background-repeat:no-repeat;background-size:contain;content:' ';white-space:pre;}\n.a1dxryx1{margin-top:3rem;}\n.l16m58gf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;font-size:1.6rem;width:100%;}\n.ntry4c9{font-size:2.8rem;}\n.ex2etfo{margin:0 0 0.4rem;}\n.efanki3{margin-top:0.4rem;}\n.f1xj53zn{border:solid rgba(0,0,0,0.15);border-width:1px 0;padding:2.4rem 1.6rem;}.ds-alert + .f1xj53zn{border-top:0;padding-top:0;}.f1xj53zn,.f1xj53zn label{color:#323232;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.f1xj53zn > *{margin-bottom:0.8rem;}.f1xj53zn > :last-child{margin-bottom:0;}.f1xj53zn input{margin:0.4rem 0;}.f1xj53zn button{width:21rem;}\n.chk4o15{font-size:1.4rem;line-height:2rem;margin-top:0.4rem;text-align:center;}\n.cofvtks{color:#E5354A;}\n.h1cf9lsd{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:50rem;margin:0 auto 2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.h1cf9lsd p{margin-top:3rem;max-width:44rem;}.h1cf9lsd .ds-action{display:block;margin-top:1rem;}\n.h18p02a4{margin-bottom:1rem;}\n.h1bc53v0{margin-top:1rem;}\n.neyuedu{margin-bottom:3.2rem;}.neyuedu p{margin-bottom:1rem;}\n.t6xk2qr{margin-bottom:0 !important;}\n.c1djxu0v{margin-top:3rem;max-width:30rem;}\n.m19ejyf4 .ds-modal__body{margin-top:1.8rem;}.m19ejyf4 .ds-modal__footer{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n.s1fld56r ellipse,.s1fld56r line,.s1fld56r path{fill:none;stroke:#6e6e6e;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.25;}\n.f1ukhx6a circle{fill:#6e6e6e;}\n.c1b3om85{stroke:#6e6f70;}\ninput.i1i6cocj{background:repeating-linear-gradient( to right, white, white 4.3rem, rgba(0,0,0,0.2) 4.3rem, rgba(0,0,0,0.2) 4.4rem );background-position:0 0.1rem;font-variant-numeric:tabular-nums;font-size:2.6rem;font-weight:400;-webkit-text-decoration:none;text-decoration:none;height:6rem;-webkit-letter-spacing:2.9rem;-moz-letter-spacing:2.9rem;-ms-letter-spacing:2.9rem;letter-spacing:2.9rem;padding:0.7rem 0 0.7rem 1.5rem;}\ninput.i1c753b1{background:repeating-linear-gradient( to right, rgba(255,237,237,1), rgba(255,237,237,1) 4.3rem, rgba(0,0,0,0.2) 4.3rem, rgba(0,0,0,0.2) 4.4rem );}\n.spi3ceg{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;}\n", ""]),
        t.a = i
    }
    , function(e, t, n) {
        "use strict";
        var a = n(7)
          , i = n.n(a)()((function(e) {
            return e[1]
        }
        ));
        i.push([e.i, ".g15pz2uq{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;border:1px solid rgba(0,0,0,0.2);border-width:1px 0 0 1px;line-height:2rem;max-width:740px;}.g15pz2uq li{border:1px solid rgba(0,0,0,0.2);border-width:0 1px 1px 0;min-height:12.8rem;outline:0;}\n.s9d4x37{max-width:none;}.s9d4x37 li{width:50%;}\n.m126s0u{max-width:none;}.m126s0u li{width:33.33%;}\n.weut0fb{max-width:none;}.weut0fb li{width:25%;}\n.ls8hyy5{height:100%;width:100%;display:inline-block;-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.ls8hyy5:hover,.ls8hyy5:focus{box-shadow:inset 0 0 0 1px rgba(255,106,16,0.75);}.ls8hyy5:focus{outline:0;}.ls8hyy5:active{box-shadow:inset 0 0 0 1px #ff6a10;}.ls8hyy5 div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:5rem;margin-top:2.4rem;}.ls8hyy5 img{max-width:10rem;max-height:5rem;}.ls8hyy5 span{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:4rem;margin:0 1.2rem 0.8rem;}\n.clglbzu{display:block;margin-left:auto;margin-right:auto;}\n", ""]),
        t.a = i
    }
    , function(e, t) {
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        n.r(t);
        var a = {};
        n.r(a),
        n.d(a, "common", (function() {
            return O
        }
        )),
        n.d(a, "ftn", (function() {
            return M
        }
        )),
        n.d(a, "keycode", (function() {
            return E
        }
        )),
        n.d(a, "login", (function() {
            return j
        }
        )),
        n.d(a, "mobilekey", (function() {
            return w
        }
        )),
        n.d(a, "tupas", (function() {
            return x
        }
        )),
        n.d(a, "verify", (function() {
            return C
        }
        ));
        var i = {};
        n.r(i),
        n.d(i, "common", (function() {
            return S
        }
        )),
        n.d(i, "ftn", (function() {
            return N
        }
        )),
        n.d(i, "keycode", (function() {
            return I
        }
        )),
        n.d(i, "login", (function() {
            return _
        }
        )),
        n.d(i, "mobilekey", (function() {
            return P
        }
        )),
        n.d(i, "tupas", (function() {
            return A
        }
        )),
        n.d(i, "verify", (function() {
            return T
        }
        ));
        var r = {};
        n.r(r),
        n.d(r, "common", (function() {
            return L
        }
        )),
        n.d(r, "ftn", (function() {
            return B
        }
        )),
        n.d(r, "keycode", (function() {
            return D
        }
        )),
        n.d(r, "login", (function() {
            return R
        }
        )),
        n.d(r, "mobilekey", (function() {
            return F
        }
        )),
        n.d(r, "tupas", (function() {
            return K
        }
        )),
        n.d(r, "verify", (function() {
            return V
        }
        ));
        var o = n(3)
          , s = n.n(o)
          , l = n(0)
          , c = n.n(l);
        function u(e, t) {
            if (e)
                for (let n = 0; n < t.length; ++n) {
                    if ("object" != typeof e)
                        return;
                    if (void 0 === (e = e[t[n]]))
                        return
                }
            return e
        }
        function d(e, t) {
            return e ? Array.isArray(e) ? e : t ? e.split(t) : [e] : []
        }
        function m(e, t, n) {
            const {locales: a, messages: i, onError: r, pathSep: o} = e
              , s = null == n ? a : Array.isArray(n) ? n : [n]
              , l = d(t, o);
            for (let e = 0; e < s.length; ++e) {
                const t = u(i[s[e]], l);
                if (void 0 !== t)
                    return t
            }
            return r ? r(l, "ENOMSG") : void 0
        }
        const f = {
            locales: [],
            merge: Object.assign,
            messages: {},
            pathSep: "."
        }
          , h = Object(l.createContext)(f);
        function b(e, t) {
            return function(e, t, {baseParams: n, locale: a}={}) {
                const {pathSep: i} = e
                  , r = d(t, i);
                return function(t, o) {
                    const s = r.concat(d(t, i))
                      , l = m(e, s, a);
                    return "function" != typeof l ? l : l(n ? Object.assign({}, n, o) : o)
                }
            }(Object(l.useContext)(h), e, t)
        }
        var p = n(1);
        function y(e) {
            return y[e] || (y[e] = new Intl.NumberFormat(e))
        }
        function v(e, t, n) {
            return y(e).format(t - n)
        }
        function g(e) {
            var t = !String(e).split(".")[1];
            return 1 == e && t ? "one" : "other"
        }
        const k = g;
        var O = {
            modalClose: ()=>"Close",
            confirm: {
                finish: ()=>"Confirm",
                continue: ()=>"Continue"
            },
            cancelConfirmation: {
                title: ()=>"Do you want to quit?",
                body: ()=>"If you quit, the information you provided will not be saved.",
                yes: ()=>"Quit",
                no: ()=>"Cancel"
            },
            separator: {
                or: ()=>"or"
            },
            ftn: {
                label: ()=>"Log in with another bank’s ID"
            }
        }
          , E = {
            title: ()=>"Confirm with key code list",
            sms: {
                header: e=>"We sent an SMS to your mobile phone " + e.phoneNumber + " for further confirmation.",
                steps: ()=>"Check the SMS details. On the key code list, select the key code whose serial number is in the SMS."
            },
            form: {
                header: ()=>"Key code",
                checkCode: ()=>"Check the information you entered.",
                enterCode: ()=>"Enter key code.",
                codesLeft: e=>"You have " + function(e, t, n, a, i) {
                    if ({}.hasOwnProperty.call(a, e))
                        return a[e];
                    t && (e -= t);
                    var r = n(e, i);
                    return r in a ? a[r] : a.other
                }(e.count, 0, k, {
                    one: v("en", e.count, 0) + " key code",
                    other: v("en", e.count, 0) + " key codes"
                }) + " left.",
                changeList: ()=>"Change your key code list.",
                label: {
                    screenReader: e=>"Enter the key code next to the serial number " + e.keyCode + " on the key code list."
                }
            },
            lowCodes: {
                headerLow: ()=>"You will soon run out of key codes",
                headerRunningOut: ()=>"You don’t have many key codes left",
                listSent: e=>"We have sent you a new key code list on " + e.dateSent + ".",
                changeList: ()=>"Change your key code list in time.",
                changeListNow: ()=>"Change your key code list now.",
                orderNewList: ()=>"You need to order a new key code list on op.fi. In case of any problems, please contact OP’s customer service."
            },
            help: {
                linkText: ()=>"Didn’t you get the SMS or are the details incorrect?",
                linkTextShort: ()=>"Didn’t you get the SMS?",
                badMsgHeader: ()=>"Are the SMS details incorrect?",
                badMsgBody1: ()=>"The order will be made using the details in the SMS, so please check that they are correct. The message was sent automatically from the number +358407118180. Our customer service is not available through this phone number.",
                badMsgBody2: ()=>"Cancel the confirmation if the details in the SMS are incorrect. Deactivate your user identifiers at op.fi, by calling OP customer service or by visiting an OP cooperative bank branch. Outside the customer service opening hours, deactivate your user identifiers by calling the Deactivation Service (24/7). Always notify OP of the situation.",
                noMsgHeader: ()=>"Didn’t you get the SMS?",
                noMsgBody1: ()=>"If you no longer use the phone number to which the SMS was sent, please call OP’s customer service or contact your local OP cooperative bank.",
                noMsgBody2: ()=>"If the phone number is correct but you still didn’t get the SMS, turn off your phone and restart it. Also make sure that the SMS memory capacity of your phone isn’t full.",
                noMsgBody3: ()=>"Please check your phone settings for blocked numbers and ensure that +358 40 7118180 isn’t blocked."
            },
            locked: {
                header: ()=>"Key code list has been locked",
                contactOP: ()=>"To activate a new key code list, please contact OP customer service.",
                unlock24h: ()=>"You can use the key code list again after 24 hours from the locking.",
                unlockTime: e=>"You can use the key code list again from " + e.unlockDate + " at " + e.unlockTime + " onwards.",
                unlockFaster: ()=>"To reactivate the key code list faster, please visit an OP cooperative bank branch. Please take your valid personal ID document with you."
            },
            sessionClosed: {
                header: ()=>"Identification failed",
                body: ()=>"Return to the service provider’s website and try again."
            }
        }
          , j = {
            title: {
                login: ()=>"Log in",
                authenticate: ()=>"Authenticate yourself"
            },
            selectMethod: {
                select: ()=>"Identification method",
                mobilekey: ()=>"Mobile key",
                keycode: ()=>"Key code list",
                username: {
                    forgotten: {
                        title: ()=>"Forgot your username?",
                        body1: ()=>"If you use Mobile key, you can check your username on OP-mobile (More > Settings) or on OP Business mobile (Customer profile).",
                        body2: ()=>"Otherwise, you can get new identifiers from an OP cooperative bank branch."
                    },
                    label: ()=>"Username",
                    placeholder: ()=>"Enter your OP username"
                },
                password: {
                    label: ()=>"Password",
                    placeholder: ()=>"Enter your OP password"
                },
                mobilekeyInfo: ()=>"Confirm identification with Mobile key on your phone or tablet. You will receive a confirmation request on OP-mobile or OP Business mobile.",
                continue: ()=>"Continue",
                cancel: ()=>"Cancel",
                error: {
                    mobilekey: ()=>"Check the information you entered.",
                    keycode: ()=>"Check the information you entered."
                }
            },
            cancelConfirmation: {
                body: ()=>"If you quit logging in, you can’t continue to use this service."
            },
            otherMeans: {
                back: ()=>"Back"
            }
        }
          , w = {
            title: ()=>"Confirm with Mobile key",
            top: {
                body1: ()=>"Check that the information in the confirmation request is correct.",
                body2: ()=>"If the request didn’t open, tap Confirm with Mobile key."
            },
            info: {
                header: e=>"Confirmation request identifier " + e.requestId,
                step1: ()=>"On your phone or tablet, open OP-Mobile or OP Business mobile. If the confirmation request didn’t open automatically, tap Confirm with Mobile key.",
                step2: e=>"Check that the request has ID " + e.requestId + " and that all other information is correct.",
                step2NoRequestId: ()=>"Check that information is correct.",
                step3: ()=>"Confirm with your Mobile key PIN.",
                step4a: ()=>"Check the SMS sent to you.",
                step4b: ()=>"Enter the SMS code in your app.",
                pinPrompt: ()=>"Mobile key PIN",
                pendingHeader: ()=>"The transaction requires further confirmation",
                pendingBody: ()=>"The transaction requires further confirmation in the mobile app"
            },
            success: {
                header: ()=>"Please wait a moment",
                body: ()=>"Confirmation with Mobile key succeeded, please wait a moment."
            },
            timeout: {
                header: ()=>"Confirming with the Mobile key was cancelled",
                body: ()=>"A confirmation request is only valid for a limited time. Please try again soon."
            },
            cancelled: {
                header: ()=>"You rejected the confirmation request",
                body: ()=>"Confirming with the Mobile key was cancelled."
            },
            guide: {
                linkText: ()=>"How to confirm with Mobile key",
                linkLabel: ()=>"How to confirm with Mobile key, opens in a new window.",
                header: ()=>"Information on Mobile key",
                body1: ()=>"The Mobile key is a means of identification provided by OP that is used in login and confirmation instead of a key code list.",
                body2: ()=>"To start using the Mobile key, download OP-mobile or OP Business mobile from your application store. In addition to the app, you need a key code list and a smartphone where you will receive further confirmation messages.",
                body3: ()=>"When you use the Mobile key, you will receive a confirmation request on OP-mobile or OP Business mobile. Confirm by entering a 4‒8-digit Mobile key PIN.",
                body4: ()=>"Always check the information in the confirmation request and that the unique confirmation ID, for example AB23, corresponds to the ID displayed in the service."
            },
            help: {
                header: ()=>"Did the confirmation fail?",
                body1: ()=>"On your phone or tablet, open OP-Mobile or OP Business mobile. If the confirmation request didn’t open automatically, tap Confirm with Mobile key.",
                body2: ()=>"The confirmation request is only valid for a limited time. If the confirmation request has timed out, start the confirmation again.",
                body3: ()=>"If you did not receive the confirmation request, make sure that you entered your username correctly.",
                body4: ()=>"If the identifier or details do not match, reject the confirmation request. Only confirm those requests that you yourself, in another service, have selected for confirmation with the Mobile key.",
                body5: ()=>"If further confirmation is required, you will receive a further confirmation code by SMS. Type the further confirmation code in the app after the Mobile key PIN."
            }
        }
          , x = {
            confirm: {
                header: e=>"Confirm using " + e.bank + " bank user identifiers",
                body: ()=>"Confirm the transaction with the same identifiers you used to log into the service."
            }
        }
          , M = {
            info: {
                header: ()=>"Log in with another bank’s ID",
                body: ()=>"Logging in with credentials other than OP user identifiers allows you to view your bank statements and manage your insurance and claims matters and your pension and endowment insurance."
            },
            error: ()=>"Logging in with the user ID of another bank is not unfortunately available now. Use OP’s user ID to identify yourself or try again later."
        }
          , C = {
            errors: {
                validation: {
                    VPA_VERIFICATION_ID_HMAC_MISMATCH: {
                        header: ()=>"",
                        body: ()=>"Identification failed. Please try again."
                    },
                    VPA_VERIFICATION_ID_TOO_OLD: {
                        header: ()=>"Confirmation was cancelled",
                        body: ()=>"Confirmation is only valid for a limited time. Please try again."
                    }
                }
            }
        }
          , S = {
            modalClose: ()=>"Sulje",
            confirm: {
                finish: ()=>"Vahvista",
                continue: ()=>"Jatka"
            },
            cancelConfirmation: {
                title: ()=>"Haluatko keskeyttää?",
                body: ()=>"Jos keskeytät, antamiasi tietoja ei tallenneta.",
                yes: ()=>"Keskeytä",
                no: ()=>"Peruuta"
            },
            separator: {
                or: ()=>"tai"
            },
            ftn: {
                label: ()=>"Kirjaudu muun pankin tunnuksilla"
            }
        }
          , I = {
            title: ()=>"Vahvista avainlukulistalla",
            sms: {
                header: e=>"Sinulle on lähetetty lisävahvistuksena tekstiviesti numeroon " + e.phoneNumber + ".",
                steps: ()=>"Tarkista tekstiviestin tiedot. Etsi avainlukulistalta se avainluku, jonka järjestysnumero on ilmoitettu tekstiviestissä."
            },
            form: {
                header: ()=>"Avainluku",
                checkCode: ()=>"Tarkista antamasi tiedot.",
                enterCode: ()=>"Kirjoita avainluku.",
                codesLeft: e=>"Avainlukuja on jäljellä " + v("fi", e.count, 0) + " kpl.",
                changeList: ()=>"Vaihda avainlukulistasi.",
                label: {
                    screenReader: e=>"Kirjoita avainlukulistan lukua " + e.keyCode + " vastaava luku."
                }
            },
            lowCodes: {
                headerLow: ()=>"Avainlukusi ovat loppumassa",
                headerRunningOut: ()=>"Avainlukusi ovat vähissä",
                listSent: e=>"Sinulle on lähetetty uusi avainlukulista " + e.dateSent + ".",
                changeList: ()=>"Vaihda avainlukulistasi ajoissa.",
                changeListNow: ()=>"Vaihda avainlukulistasi heti.",
                orderNewList: ()=>"Sinun tulee tilata uusi avainlukulista op.fi-palvelusta. Ongelmatilanteissa ota yhteyttä OP:n asiakaspalveluun."
            },
            help: {
                linkText: ()=>"Etkö saanut viestiä tai eivätkö tiedot ole oikein?",
                linkTextShort: ()=>"Etkö saanut viestiä?",
                badMsgHeader: ()=>"Eivätkö tekstiviestin tiedot ole oikein?",
                badMsgBody1: ()=>"Toimeksianto tehdään viestissä olevien tietojen mukaisesti, joten tarkista tietojen oikeellisuus. Viesti on lähetetty automaattisesti numerosta +358407118180. Asiakaspalvelumme ei päivystä numerossa.",
                badMsgBody2: ()=>"Keskeytä vahvistaminen, jos toimeksiannon tiedot ovat tekstiviestissä väärin. Lukitse tunnukset op.fi:ssä, soittamalla OP:n asiakaspalveluun tai asioimalla henkilökohtaisesti osuuspankin konttorissa. Asiakaspalvelun aukioloaikojen ulkopuolella lukitse tunnukset soittamalla sulkupalveluun (24h/7vrk). Ilmoita tapahtuneesta aina OP:lle.",
                noMsgHeader: ()=>"Etkö saanut tekstiviestiä?",
                noMsgBody1: ()=>"Jos puhelinnumero, johon viesti lähetettiin, ei ole enää käytössäsi, ota yhteyttä OP:n asiakaspalveluun tai omaan osuuspankkiisi.",
                noMsgBody2: ()=>"Jos puhelinnumero on oikein, mutta et saanut viestiä, sammuta ja käynnistä puhelin uudelleen. Tarkista myös, että puhelimen tekstiviestimuisti ei ole täynnä.",
                noMsgBody3: ()=>"Tarkista puhelimesi asetuksista estetyt numerot ja varmista, että numeroa +358 40 7118180 ei ole estetty."
            },
            locked: {
                header: ()=>"Avainlukulista on lukittu",
                contactOP: ()=>"Ole yhteydessä OP:n asiakaspalveluun, jotta saat uuden avainlukulistan käyttöösi.",
                unlock24h: ()=>"Avainlukulista on käytössäsi 24 tunnin kuluttua lukkiutumisesta.",
                unlockTime: e=>"Avainlukulista on käytössäsi " + e.unlockDate + " klo " + e.unlockTime + " jälkeen.",
                unlockFaster: ()=>"Saat avainlukulistan käyttöösi nopeammin, kun käyt osuuspankin konttorissa. Ota mukaan voimassa oleva henkilöllisyystodistuksesi."
            },
            sessionClosed: {
                header: ()=>"Tunnistautuminen ei onnistunut",
                body: ()=>"Palaa palveluntarjoajan sivulle ja yritä uudelleen."
            }
        }
          , _ = {
            title: {
                login: ()=>"Kirjaudu sisään",
                authenticate: ()=>"Tunnistaudu"
            },
            selectMethod: {
                select: ()=>"Tunnistustapa",
                mobilekey: ()=>"Mobiiliavain",
                keycode: ()=>"Avainlukulista",
                username: {
                    forgotten: {
                        title: ()=>"Unohditko käyttäjätunnuksen?",
                        body1: ()=>"Jos käytät Mobiiliavainta, voit tarkistaa käyttäjätunnuksesi OP-mobiilista (Muut - Asetukset) tai OP-yritysmobiilista (Asiakkuus).",
                        body2: ()=>"Muussa tapauksessa saat uudet tunnukset, kun käyt osuuspankin konttorissa."
                    },
                    label: ()=>"Käyttäjätunnus",
                    placeholder: ()=>"Kirjoita OP:n käyttäjätunnus"
                },
                password: {
                    label: ()=>"Salasana",
                    placeholder: ()=>"Kirjoita OP:n salasana"
                },
                mobilekeyInfo: ()=>"Vahvista tunnistautuminen Mobiiliavain-PINillä puhelimessa tai tabletissa. Saat vahvistuspyynnön OP-mobiiliin tai -yritysmobiiliin.",
                continue: ()=>"Jatka",
                cancel: ()=>"Keskeytä",
                error: {
                    mobilekey: ()=>"Tarkista antamasi tiedot.",
                    keycode: ()=>"Tarkista antamasi tiedot."
                }
            },
            cancelConfirmation: {
                body: ()=>"Jos keskeytät kirjautumisen, et voi jatkaa asiointia palvelussa."
            },
            otherMeans: {
                back: ()=>"Takaisin"
            }
        }
          , P = {
            title: ()=>"Vahvista Mobiiliavaimella",
            top: {
                body1: ()=>"Tarkista, että vahvistuspyynnön tiedot ovat oikein.",
                body2: ()=>"Jos pyyntö ei auennut, valitse painike Vahvista Mobiiliavaimella."
            },
            info: {
                header: e=>"Vahvistuspyynnön tunniste " + e.requestId,
                step1: ()=>"Avaa puhelimesta tai tabletista OP-mobiili tai OP-yritysmobiili. Jos vahvistuspyyntö ei auennut automaattisesti, valitse Vahvista Mobiiliavaimella.",
                step2: e=>"Tarkista, että pyynnössä on tunniste " + e.requestId + " ja että muut tiedot ovat oikein.",
                step2NoRequestId: ()=>"Tarkista, että tiedot ovat oikein.",
                step3: ()=>"Vahvista Mobiiliavain-PINillä.",
                step4a: ()=>"Tarkista sinulle lähetetty tekstiviesti.",
                step4b: ()=>"Kirjoita tekstiviestin koodi mobiilisovellukseen.",
                pinPrompt: ()=>"Mobiiliavain-PIN",
                pendingHeader: ()=>"Tapahtuma vaatii vielä lisävahvistuksen",
                pendingBody: ()=>"Tapahtuma vaatii vielä lisävahvistuksen mobiilisovelluksessa"
            },
            success: {
                header: ()=>"Odota hetki",
                body: ()=>"Mobiiliavaimella vahvistaminen onnistui, odota vielä hetki."
            },
            timeout: {
                header: ()=>"Mobiiliavaimella vahvistaminen keskeytettiin",
                body: ()=>"Vahvistuspyyntö on voimassa vain rajatun ajan. Ole hyvä ja yritä uudelleen."
            },
            cancelled: {
                header: ()=>"Hylkäsit vahvistuspyynnön",
                body: ()=>"Mobiiliavaimella vahvistaminen keskeytettiin."
            },
            guide: {
                linkText: ()=>"Näin vahvistat Mobiiliavaimella",
                linkLabel: ()=>"Näin vahvistat Mobiiliavaimella, avautuu uuteen ikkunaan.",
                header: ()=>"Tietoa Mobiiliavaimesta",
                body1: ()=>"Mobiiliavain on OP:n tarjoama tunnistusmenetelmä, jota käytetään kirjautumisessa ja vahvistamisessa avainlukulistan sijaan.",
                body2: ()=>"Mobiiliavaimen saat käyttöön, kun lataat sovelluskaupasta OP-mobiilin tai OP-yritysmobiilin. Sovelluksen lisäksi tarvitset avainlukulistan ja puhelimen, johon vastaanotat lisävahvistusviestit.",
                body3: ()=>"Kun käytät Mobiiliavainta, saat vahvistuspyynnön OP-mobiiliin tai OP-yritysmobiiliin. Vahvista syöttämällä 4‒8-numeroinen Mobiiliavain-PIN.",
                body4: ()=>"Tarkista aina vahvistuspyynnön tiedot ja että vahvistuspyynnön yksilöivä tunnus, esimerkiksi AB23, vastaa palvelussa esitettyä."
            },
            help: {
                header: ()=>"Eikö vahvistaminen onnistunut?",
                body1: ()=>"Avaa puhelimesta tai tabletista OP-mobiili tai OP-yritysmobiili. Jos vahvistuspyyntö ei auennut automaattisesti, valitse painike Vahvista Mobiiliavaimella.",
                body2: ()=>"Vahvistuspyyntö on voimassa vain rajatun ajan. Jos vahvistuspyyntö ehti vanhentua, aloita vahvistaminen uudelleen.",
                body3: ()=>"Jos et saanut vahvistuspyyntöä, varmista, että kirjoitit käyttäjätunnuksen oikein.",
                body4: ()=>"Jos tunniste tai tiedot eivät täsmää, hylkää vahvistuspyyntö. Vahvista vain pyynnöt, jotka olet itse valinnut muussa palvelussa vahvistettavaksi Mobiiliavaimella.",
                body5: ()=>"Jos lisävahvistusta vaaditaan, saat tekstiviestillä lisävahvistuskoodin. Syötä lisävahvistuskoodi sovellukseen Mobiiliavain-PINin jälkeen."
            }
        }
          , A = {
            confirm: {
                header: e=>"Vahvista " + e.bank + "-pankkitunnuksilla",
                body: ()=>"Tapahtuma vahvistetaan samoilla tunnuksilla, joilla kirjauduit palveluun."
            }
        }
          , N = {
            info: {
                header: ()=>"Kirjaudu muun pankin tunnuksilla",
                body: ()=>"Kirjautumalla muilla kuin OP:n tunnuksilla näet tiliotteesi ja voit hoitaa vakuutus- ja vahinkoasioitasi sekä eläke- ja säästöhenkivakuutuksiasi."
            },
            error: ()=>"Kirjautuminen muun pankin tunnuksilla ei valitettavasti ole nyt käytettävissä. Tunnistaudu OP:n tunnuksilla tai kokeile myöhemmin uudestaan."
        }
          , T = {
            errors: {
                validation: {
                    VPA_VERIFICATION_ID_HMAC_MISMATCH: {
                        header: ()=>"",
                        body: ()=>"Tunnistautuminen ei onnistunut. Ole hyvä ja yritä uudestaan."
                    },
                    VPA_VERIFICATION_ID_TOO_OLD: {
                        header: ()=>"Vahvistaminen keskeytettiin",
                        body: ()=>"Vahvistaminen on voimassa vain rajatun ajan. Ole hyvä ja yritä uudelleen."
                    }
                }
            }
        }
          , L = {
            modalClose: ()=>"Stäng",
            confirm: {
                finish: ()=>"Bekräfta",
                continue: ()=>"Fortsätt"
            },
            cancelConfirmation: {
                title: ()=>"Vill du avbryta?",
                body: ()=>"Om du avbryter, sparas inte de uppgifter som du gett.",
                yes: ()=>"Avbryt",
                no: ()=>"Tillbaka"
            },
            separator: {
                or: ()=>"eller"
            },
            ftn: {
                label: ()=>"Logga in med en annan banks koder"
            }
        }
          , D = {
            title: ()=>"Bekräfta med nyckeltalslistan",
            sms: {
                header: e=>"Du har fått ett textmeddelande för tilläggsbekräftelse på numret " + e.phoneNumber + ".",
                steps: ()=>"Kontrollera uppgifterna i textmeddelandet. Sök det tal på din nyckeltalslista som motsvarar det ordningstal som uppges i textmeddelandet."
            },
            form: {
                header: ()=>"Nyckeltal",
                checkCode: ()=>"Kontrollera de uppgifter du gett.",
                enterCode: ()=>"Skriv nyckeltalet.",
                codesLeft: e=>"Nyckeltal kvar " + v("sv", e.count, 0) + " st.",
                changeList: ()=>"Byt nyckeltalslista.",
                label: {
                    screenReader: e=>"Skriv det tal som motsvarar nyckeltalslistans tal " + e.keyCode + "."
                }
            },
            lowCodes: {
                headerLow: ()=>"Dina nyckeltal håller på att ta slut",
                headerRunningOut: ()=>"Dina nyckeltal tar snart slut",
                listSent: e=>"Vi har skickat en ny nyckeltalslista till dig " + e.dateSent + ".",
                changeList: ()=>"Byt nyckeltalslista i tid.",
                changeListNow: ()=>"Byt nyckeltalslista genast.",
                orderNewList: ()=>"Beställ en ny nyckeltalslista i tjänsten op.fi. Kontakta OP:s kundtjänst vid problem."
            },
            help: {
                linkText: ()=>"Fick du inget meddelande eller är uppgifterna felaktiga?",
                linkTextShort: ()=>"Fick du inget meddelande?",
                badMsgHeader: ()=>"Är uppgifterna i textmeddelandet felaktiga?",
                badMsgBody1: ()=>"Uppdraget utförs i enlighet med uppgifterna i meddelandet. Därför ska du kontrollera att uppgifterna är korrekta. Meddelandet har sänts automatiskt från numret +358407118180. Vår kundtjänst svarar inte på det här numret.",
                badMsgBody2: ()=>"Avbryt bekräftelsen om uppgifterna i textmeddelandet är felaktiga. Spärra koderna i op.fi genom att ringa OP:s kundtjänst eller besöka andelsbankens kontor personligen. Utanför kundtjänstens öppettider kan du spärra koderna genom att kontakta spärrtjänsten (24 h/alla dagar). Anmäl alltid det som hänt till OP.",
                noMsgHeader: ()=>"Fick du inget textmeddelande?",
                noMsgBody1: ()=>"Ta kontakt med OP:s kundtjänst eller din andelsbank, om du inte längre använder telefonnumret till vilket textmeddelandet sändes.",
                noMsgBody2: ()=>"Om du inte har fått meddelandet fastän telefonnumret är korrekt, ska du stänga av och starta om telefonen. Kontrollera också att telefonens textmeddelandeminne inte är fullt.",
                noMsgBody3: ()=>"Kontrollera de blockerade numren i inställningarna i din telefon och försäkra dig om att numret +358 40 7118180 inte är blockerat."
            },
            locked: {
                header: ()=>"Nyckeltalslistan är spärrad",
                contactOP: ()=>"Kontakta OP:s kundtjänst för att få en ny nyckeltalslista.",
                unlock24h: ()=>"Du kan använda nyckeltalslistan 24 timmar efter låsningen.",
                unlockTime: e=>"Du kan använda nyckeltalslistan efter " + e.unlockDate + " kl. " + e.unlockTime + ".",
                unlockFaster: ()=>"Du kan börja använda nyckeltalslistan snabbare genom att besöka andelsbankens kontor. Ta med dig ett giltigt identitetsbevis."
            },
            sessionClosed: {
                header: ()=>"Identifieringen lyckades inte",
                body: ()=>"Gå tillbaka till tjänsteleverantörens sida och försök på nytt."
            }
        }
          , R = {
            title: {
                login: ()=>"Logga in",
                authenticate: ()=>"Identifiera dig"
            },
            selectMethod: {
                select: ()=>"Identifieringssätt",
                mobilekey: ()=>"Mobilnyckel",
                keycode: ()=>"Nyckeltalslista",
                username: {
                    forgotten: {
                        title: ()=>"Glömt användarkoden?",
                        body1: ()=>"Om du använder Mobilnyckel kan du kontrollera din användarkod i OP-mobilen (Annat - Inställningar) eller i OP-företagsmobilen (Kundrelation).",
                        body2: ()=>"I annat fall får du nya koder då du besöker andelsbankens kontor."
                    },
                    label: ()=>"Användarkod",
                    placeholder: ()=>"Ge OP:s användarkod"
                },
                password: {
                    label: ()=>"Lösenord",
                    placeholder: ()=>"Ge OP:s lösenord"
                },
                mobilekeyInfo: ()=>"Bekräfta identifieringen med Mobilnyckeln i din telefon eller datorplatta. Du får en bekräftelsebegäran till OP-mobilen eller OP-företagsmobilen.",
                continue: ()=>"Fortsätt",
                cancel: ()=>"Avbryt",
                error: {
                    mobilekey: ()=>"Kontrollera de uppgifter du gett.",
                    keycode: ()=>"Kontrollera de uppgifter du gett."
                }
            },
            cancelConfirmation: {
                body: ()=>"Om du avbryter inloggningen, kan du inte fortsätta att sköta dina ärenden i tjänsten."
            },
            otherMeans: {
                back: ()=>"Tillbaka"
            }
        }
          , F = {
            title: ()=>"Bekräfta med Mobilnyckel",
            top: {
                body1: ()=>"Kontrollera att uppgifterna i bekräftelsebegäran är korrekta.",
                body2: ()=>"Om begäran inte öppnas, välj Bekräfta med Mobilnyckel."
            },
            info: {
                header: e=>"Kod för bekräftelsebegäran " + e.requestId,
                step1: ()=>"Öppna OP-mobilen eller OP-företagsmobilen i din telefon eller datorplatta. Om bekräftelsebegäran inte öppnas, välj Bekräfta med Mobilnyckel.",
                step2: e=>"Kontrollera att begäran har en kod " + e.requestId + " och att uppgifterna är korrekta.",
                step2NoRequestId: ()=>"Kontrollera att uppgifterna är korrekta.",
                step3: ()=>"Bekräfta med Mobilnyckel-PIN.",
                step4a: ()=>"Kontrollera textmeddelandet du fick.",
                step4b: ()=>"Skriv in koden från textmeddelandet i mobilappen.",
                pinPrompt: ()=>"Mobilnyckel-PIN",
                pendingHeader: ()=>"Transaktionen kräver ännu tilläggsbekräftelse",
                pendingBody: ()=>"Transaktionen kräver ännu tilläggsbekräftelse i mobilappen"
            },
            success: {
                header: ()=>"Ett ögonblick",
                body: ()=>"Bekräftelse med Mobilnyckel lyckades, vänta ännu ett ögonblick."
            },
            timeout: {
                header: ()=>"Bekräftelse med Mobilnyckel har avbrutits",
                body: ()=>"Bekräftelsebegäran gäller bara en begränsad tid. Försök på nytt."
            },
            cancelled: {
                header: ()=>"Du avvisade bekräftelsebegäran",
                body: ()=>"Bekräftelse med Mobilnyckel har avbrutits."
            },
            guide: {
                linkText: ()=>"Så här bekräftar du med Mobilnyckeln",
                linkLabel: ()=>"Så här bekräftar du med Mobilnyckeln, öppnas i ett nytt fönster.",
                header: ()=>"Information om Mobilnyckeln",
                body1: ()=>"Mobilnyckeln är en identifieringsmetod som erbjuds av OP och som används i stället för nyckeltalslistan vid inloggning och vid bekräftelse.",
                body2: ()=>"Du kan aktivera Mobilnyckeln genom att ladda ner OP-mobilen eller OP-företagsmobilen i appbutiken. Förutom appen behöver du en nyckeltalslista och en telefon till vilken du får meddelanden om tilläggsbekräftelse.",
                body3: ()=>"Då du använder Mobilnyckeln får du en bekräftelsebegäran till OP-mobilen eller OP-företagsmobilen. Bekräfta med den 4‒8 siffror långa Mobilnyckel-PIN-koden.",
                body4: ()=>"Kontrollera alltid uppgifterna i bekräftelsebegäran och att specifikationen av bekräftelsebegäran, t.ex. AB23, motsvarar specifikationen i tjänsten."
            },
            help: {
                header: ()=>"Lyckades inte bekräftelsen?",
                body1: ()=>"Öppna OP-mobilen eller OP-företagsmobilen i din telefon eller datorplatta. Om bekräftelsebegäran inte öppnades automatiskt, välj Bekräfta med Mobilnyckel.",
                body2: ()=>"Bekräftelsebegäran gäller bara en begränsad tid. Om bekräftelsebegäran hann föråldras, ska du börja bekräftelsen på nytt.",
                body3: ()=>"Om du inte fick en bekräftelsebegäran ska du kontrollera att du har skrivit användarkoden rätt.",
                body4: ()=>"Om koden eller uppgifterna inte stämmer, ska du avvisa bekräftelsebegäran. Bekräfta endast begäran som du själv i en annan tjänst har valt att bekräfta med Mobilnyckeln.",
                body5: ()=>"Om det krävs en tilläggsbekräftelse får du en tilläggsbekräftelsekod per textmeddelande. Mata in tilläggsbekräftelsekoden i appen efter Mobilnyckel-PIN."
            }
        }
          , K = {
            confirm: {
                header: e=>"Bekräfta med " + e.bank + "s bankkoder",
                body: ()=>"Transaktionen bekräftas med samma koder som du använde för att logga in i tjänsten."
            }
        }
          , B = {
            info: {
                header: ()=>"Logga in med en annan banks koder",
                body: ()=>"Genom att logga in med andra än OP:s koder ser du dina kontoutdrag och kan sköta dina försäkrings- och skadeärenden samt dina pensions- och sparlivförsäkringar."
            },
            error: ()=>"Tyvärr går det inte nu att logga in med en annan banks koder. Logga in med OP:s koder eller försök på nytt senare."
        }
          , V = {
            errors: {
                validation: {
                    VPA_VERIFICATION_ID_HMAC_MISMATCH: {
                        header: ()=>"",
                        body: ()=>"Identifieringen lyckades inte. Försök på nytt."
                    },
                    VPA_VERIFICATION_ID_TOO_OLD: {
                        header: ()=>"Bekräftelsen avbröts",
                        body: ()=>"Bekräftelsen gäller bara en begränsad tid. Försök på nytt."
                    }
                }
            }
        };
        class z {
            constructor(e, t) {
                this.handlers = {
                    error: z.defaultErrorHandler,
                    request: [],
                    response: []
                };
                const {acceptLanguages: n, csrfHeaderSelector: a, csrfTokenSelector: i, fetchInit: r, headers: o, onError: s, pathParams: l, timeout: c, wrapMethod: u} = t || {};
                if (this.csrfHeaderSelector = a || "meta[name='_csrf_header']",
                this.csrfTokenSelector = void 0 !== i ? i : "meta[name='_csrf']",
                this.defaultHeaders = new Headers,
                n) {
                    const e = n.slice();
                    let t = e.shift()
                      , a = .9;
                    for (const n of e)
                        t += `, ${n};q=${a}`,
                        a -= .1;
                    this.defaultHeaders.set("Accept-Language", t || "*")
                }
                if (o)
                    for (const [e,t] of Object.entries(o))
                        this.defaultHeaders.set(e, t);
                this.defaultInit = Object.assign({
                    cache: "default",
                    credentials: "include",
                    redirect: "follow"
                }, r),
                this.defaultPathParams = Object.assign({}, l),
                this.defaultTimeout = c || 0,
                "function" == typeof s && (this.handlers.error = s),
                this.root = e || "",
                this.wrapMethod = !!u
            }
            static defaultErrorHandler(e, {hasExpectedType: t}) {
                const n = new Error(t ? `Response with HTTP status ${e.status}` : "Response data has unexpected type");
                return n.response = e,
                Promise.reject(n)
            }
            on(e, t) {
                switch (e) {
                case "request":
                    this.handlers.request.push(t);
                    break;
                case "response":
                    this.handlers.response.push(t);
                    break;
                default:
                    throw new Error(`Unknown event type ${JSON.stringify(e)}`)
                }
            }
            off(e, t) {
                const n = this.handlers[e];
                if (!n)
                    throw new Error(`Unknown event type ${JSON.stringify(e)}`);
                const a = n.indexOf(t);
                return !(a < 0) && (n.splice(a, 1),
                !0)
            }
            buildUrl(e, {pathParams: t, query: n}) {
                let a = this.root + e;
                const i = Object.assign({}, this.defaultPathParams, t);
                for (const [e,t] of Object.entries(i))
                    a = a.replace(`{${e}}`, String(t));
                if (n) {
                    const e = [];
                    for (const [t,a] of Object.entries(n))
                        void 0 !== a && e.push(`${encodeURIComponent(t)}=${encodeURIComponent(a)}`);
                    e.length > 0 && (a += `?${e.join("&")}`)
                }
                return a
            }
            buildInit(e, {body: t, headers: n, init: a, timeout: i}) {
                const r = new Headers(this.defaultHeaders);
                if (!t || t instanceof FormData || ("object" == typeof t && (t = JSON.stringify(t)),
                r.has("Content-Type") || r.set("Content-Type", "application/json")),
                (this.wrapMethod || window.__RD_PROXY__) && "GET" !== e && "POST" !== e && (r.set("X-HTTP-Method", e),
                e = "POST"),
                this.csrfTokenSelector) {
                    const e = document.querySelector(this.csrfTokenSelector);
                    if (e) {
                        const t = e.getAttribute("content")
                          , n = document.querySelector(this.csrfHeaderSelector)
                          , a = n && n.getAttribute("content");
                        t && a && r.set(a, t)
                    }
                }
                if (n)
                    for (const [e,t] of Object.entries(n))
                        r.set(e, t);
                const o = Object.assign({
                    body: t,
                    headers: r,
                    method: e
                }, this.defaultInit, a);
                if (null == i && (i = this.defaultTimeout),
                i > 0 && "undefined" != typeof AbortController) {
                    const e = new AbortController;
                    o.signal = e.signal,
                    setTimeout((()=>e.abort()), i)
                }
                return o
            }
            fetch(e, t, n={}) {
                let a = this.buildUrl(t, n);
                const i = this.buildInit(e, n);
                for (const e of this.handlers.request) {
                    const t = e(a, i);
                    "string" == typeof t && (a = t)
                }
                let r = fetch(a, i);
                const o = null != n.timeout ? n.timeout : this.defaultTimeout;
                if (o > 0 && "undefined" == typeof AbortController) {
                    const e = r;
                    r = new Promise(((t,n)=>{
                        setTimeout((()=>n(new Error("timeout"))), o),
                        e.then(t, n)
                    }
                    ))
                }
                return r.then((e=>{
                    for (const t of this.handlers.response) {
                        const n = t(e);
                        n instanceof Response && (e = n)
                    }
                    return e
                }
                )).then((e=>{
                    const t = "0" === e.headers.get("Content-Length")
                      , a = ((e,t)=>{
                        const n = e.get("Accept");
                        if (!n || -1 !== n.indexOf("*/"))
                            return !0;
                        const a = n.split(/, */).map((e=>e.replace(/[;*].*/, "")))
                          , i = t.get("Content-Type");
                        return i && a.some((e=>0 === i.indexOf(e)))
                    }
                    )(i.headers, e.headers)
                      , r = e.headers.get("Content-Type")
                      , o = r && 0 === r.indexOf("application/json");
                    return e.ok && a ? n.rawResponse || !o ? e : t ? null : e.json().catch((t=>{
                        throw t.response = e,
                        t
                    }
                    )) : this.handlers.error(e, {
                        hasExpectedType: a,
                        isEmpty: t,
                        isJson: o
                    })
                }
                ))
            }
            get(e, t) {
                return this.fetch("GET", e, t)
            }
            post(e, t) {
                return this.fetch("POST", e, t)
            }
            put(e, t) {
                return this.fetch("PUT", e, t)
            }
            delete(e, t) {
                return this.fetch("DELETE", e, t)
            }
        }
        Error;
        const q = {
            EBADMSG: "Message with unexpected object value",
            ENOMSG: "Message not found"
        };
        class H extends Error {
            constructor(e, t, n) {
                super(`${q[t]}: ${n(e)}`),
                this.code = t,
                this.path = e
            }
        }
        function U(e, t, n, a) {
            const i = e=>e.join(t || ",");
            function r(e, t) {
                return console.warn(q[t], e),
                i(e)
            }
            if (void 0 === n) {
                if ("function" == typeof a)
                    return (e,t)=>a(`${q[t]}: ${i(e)}`);
                n = a
            }
            switch (n) {
            case "silent":
                return i;
            case "error":
                return function(e, t) {
                    throw new H(e,t,i)
                }
                ;
            case "warn":
                return r;
            default:
                if ("function" == typeof n) {
                    const e = n;
                    return (t,n)=>e(new H(t,n,i))
                }
                return e.onError || r
            }
        }
        function $({locales: e}, t) {
            const n = e.filter((e=>e !== t));
            return [t].concat(n)
        }
        function J({merge: e, messages: t}, n, a) {
            const i = Object.assign({}, t)
              , r = i[n];
            return i[n] = r && "object" == typeof r ? e({}, r, a) : a,
            i
        }
        function G(e) {
            const {children: t, context: n, debug: a, locale: i="", merge: r, messages: o, onError: s, pathSep: c} = e;
            let u = Object(l.useContext)(h);
            n ? u = n : null === n && (u = f);
            const d = Object(l.useMemo)((()=>{
                const e = function(e, t) {
                    return null === t || "string" == typeof t ? t : e.pathSep
                }(u, c);
                return {
                    locales: $(u, i),
                    merge: r || u.merge,
                    messages: J(u, i, o),
                    onError: U(u, e, s, a),
                    pathSep: e
                }
            }
            ), [u, i, r, o, c]);
            return Object(l.createElement)(h.Provider, {
                value: d
            }, t)
        }
        function Y(e, t, n) {
            const a = m(Object(l.useContext)(h), e, n);
            return "function" == typeof a ? a(null == t ? {} : t) : a
        }
        function W() {
            return W = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ,
            W.apply(this, arguments)
        }
        const Z = e=>c.a.createElement(p.Icon, W({}, e, {
            path: "M25.147 8.305a1.096 1.096 0 0 1 1.548-.158 1.097 1.097 0 0 1 .158 1.548L15.963 23c-.214.261-.594.39-.979.388-.376-.003-.755-.132-.984-.388l-6.804-7.25a1.097 1.097 0 0 1 .053-1.554 1.097 1.097 0 0 1 1.555.053l6.198 6.735L25.147 8.305z"
        }));
        var Q = n(4)
          , X = n(2)
          , ee = n.n(X);
        class te extends Error {
            constructor(e) {
                super(`Unexpected error ${e.status}`),
                this.response = e
            }
        }
        class ne extends Error {
            constructor(e, t) {
                super(e.exception || e.errorCode),
                t && (this.response = t),
                this.body = e
            }
            isInputError() {
                return "KR_false_credentials" === this.getErrorCode()
            }
            getErrorCode() {
                return this.body.errorCode
            }
        }
        function ae(e, {delay: t, maxAttempts: n}) {
            let a = !1;
            const i = {
                attempt: 0,
                abort() {
                    a = !0
                }
            };
            return function r() {
                return i.attempt += 1,
                e(i).catch((e=>{
                    if (a || i.attempt > n)
                        throw e;
                    return (e=>new Promise((t=>setTimeout(t, e))))(t).then((()=>{
                        if (a) {
                            const e = new Error("Attempt aborted");
                            throw e.code = "ATTEMPT_ABORTED",
                            e
                        }
                        return r()
                    }
                    ))
                }
                ))
            }()
        }
        function ie(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
                    t.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (n[a[i]] = e[a[i]])
            }
            return n
        }
        function re(e, t, n, a) {
            return new (n || (n = Promise))((function(i, r) {
                function o(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, s)
                }
                l((a = a.apply(e, t || [])).next())
            }
            ))
        }
        const oe = e=>{
            var {children: t, locale: n, messages: a} = e
              , i = ie(e, ["children", "locale", "messages"]);
            return c.a.createElement(p.LocaleProvider, {
                locale: n
            }, c.a.createElement(G, Object.assign({
                locale: n,
                messages: a
            }, i), t))
        }
        ;
        function se(e) {
            var {headingLevel: t, titleTag: n, children: a} = e
              , i = ie(e, ["headingLevel", "titleTag", "children"]);
            const r = Object(l.useMemo)((()=>n || t ? `h${t}` : void 0), [n, t]);
            return c.a.createElement(p.Alert, Object.assign({}, i, {
                titleTag: r
            }), a)
        }
        const le = {
            en: {
                title: "We are sorry, there is a disruption in our service",
                body: "Service is temporarily unavailable. Please try again later."
            },
            fi: {
                title: "Häiriö palvelussa, pahoittelemme",
                body: "Palvelu ei ole juuri nyt käytettävissä. Ole hyvä ja yritä myöhemmin uudelleen."
            },
            sv: {
                title: "Störning i tjänsten, vi beklagar",
                body: "Tjänsten är inte tillgänglig just nu. Var god och försök på nytt senare."
            }
        };
        function ce(e) {
            var {container: t, error: n, info: a, headingLevel: i} = e
              , r = ie(e, ["container", "error", "info", "headingLevel"]);
            const s = function(e) {
                const t = Object(p.useLocale)();
                if (e instanceof ne && e.getErrorCode()) {
                    const {localizations: n, localizedMessage: a} = e.body
                      , i = n ? n[t] : a;
                    if (i) {
                        const e = i.indexOf("\n");
                        return e > 0 ? {
                            title: i.substr(0, e),
                            body: i.substr(e + 1).trim()
                        } : {
                            body: i
                        }
                    }
                    return {}
                }
                if (!e || e instanceof Error)
                    return le[t];
                {
                    const n = e[t] || e
                      , {title: a, body: i} = n;
                    let r;
                    return Array.isArray(i) && (r = i.map(((e,t)=>c.a.createElement("p", {
                        key: t,
                        className: "opds"
                    }, e)))),
                    {
                        title: a,
                        body: r || i
                    }
                }
            }(n)
              , {body: l, title: u} = s
              , d = c.a.createElement(se, Object.assign({}, r, {
                headingLevel: i,
                error: !a,
                title: u,
                className: "login-alert-text"
            }), l);
            return t ? Object(o.createPortal)(d, t) : d
        }
        const ue = Object(l.forwardRef)((function(e, t) {
            var {finish: n, status: a, animateAfterSuccess: i} = e
              , r = ie(e, ["finish", "status", "animateAfterSuccess"]);
            const o = b("common.confirm")
              , s = !a || "active" === a || "invalid" === a || "error" === a;
            return c.a.createElement(p.Button, Object.assign({
                icon: "done" !== a || i ? void 0 : Z,
                loading: "busy" === a || "done" === a && i,
                nonInteractive: !s,
                ref: t
            }, r, {
                finish: !1 !== n,
                primary: !1 === n
            }), s && o(!1 === n ? "continue" : "finish"))
        }
        ))
          , de = {
            appElement: document.querySelector("#op-main-container") || document.body
        }
          , me = Object(l.createContext)(de);
        function fe(e) {
            var {id: t, trigger: n, closeButtonProps: a} = e
              , i = ie(e, ["id", "trigger", "closeButtonProps"]);
            const r = Object(l.useRef)(null)
              , o = a || {}
              , {id: s, onClick: u} = o
              , d = ie(o, ["id", "onClick"])
              , {appElement: m} = Object(l.useContext)(me);
            return c.a.createElement(c.a.Fragment, null, Object(l.cloneElement)(n, {
                onClick() {
                    r.current && r.current.open()
                }
            }), c.a.createElement(Q.Modal, Object.assign({
                id: t || "auth-modal",
                appElement: m,
                shouldCloseOnOverlayClick: !0
            }, i, {
                className: "opds m19ejyf4",
                footer: c.a.createElement(p.Button, Object.assign({
                    id: s || "auth-modal-close"
                }, d, {
                    compact: !0,
                    onClick: e=>{
                        r.current && (null == u || u(e),
                        r.current.close())
                    }
                }), Y("common.modalClose", {})),
                ref: r
            })))
        }
        const he = Object(l.forwardRef)((function(e, t) {
            var {children: n, className: a, focusable: i, level: r, tabIndex: o} = e
              , s = ie(e, ["children", "className", "focusable", "level", "tabIndex"]);
            (r < 1 || r > 6) && console.error('Your initial "headingLevel" property is invalid, it will result in attempt to render heading having children', n, "as", `h${r} element.`);
            const u = `h${Object(l.useMemo)((()=>{
                let e = (t = r,
                n = 1,
                a = 6,
                Math.min(Math.max(t, n), a));
                var t, n, a;
                return isNaN(e) && (e = 6),
                e
            }
            ), [r])}`;
            return n ? c.a.createElement(u, Object.assign({
                ref: t
            }, s, {
                className: ee()(a, `auth-components-${u}`, i && "h1eqnlm0"),
                tabIndex: o || i ? -1 : void 0
            }), n) : null
        }
        ));
        function be(e) {
            var {container: t, className: n} = e
              , a = ie(e, ["container", "className"]);
            const i = c.a.createElement(p.Loading, Object.assign({}, a, {
                "data-testid": "auth-loading",
                className: ee()(n, "clglbzu")
            }));
            return t ? Object(o.createPortal)(i, t) : i
        }
        const pe = e=>c.a.createElement(p.Icon, W({}, e, {
            path: "m19.748 16-7.455 7.293a.998.998 0 0 0 0 1.414.997.997 0 0 0 1.414 0l8-8.002a.997.997 0 0 0 0-1.414l-8-7.998a.997.997 0 0 0-1.414 0C12.094 7.492 12 7.646 12 8s.101.515.293.707L19.748 16z"
        }));
        var ye = n(10);
        const ve = {
            default: "#6C6C6C",
            large: "#8F8F8F",
            action: "#EE5A00",
            success: "#009F33",
            error: "#CD212E",
            neutral: "#078FE7",
            disabled: "#BEBEBE",
            button: {
                default: "#EE5A00",
                primary: "#FFFFFF",
                alternate: "#6C6C6C",
                finish: "#FFFFFF",
                disabled: "#BEBEBE"
            },
            inverse: {
                default: "#FFFFFF",
                large: "#FFFFFF",
                action: "#FF9B5E",
                success: "#39C663",
                error: "#F1515D",
                neutral: "#41B5FF",
                disabled: "#8F8F8F",
                button: {
                    default: "#FF9B5E",
                    primary: "#FFFFFF",
                    alternate: "#FFFFFF",
                    finish: "#FFFFFF",
                    disabled: "#8F8F8F"
                }
            }
        }
          , ge = {
            default: "2.4rem",
            small: "2rem",
            large: "3.2rem"
        }
          , ke = "1.6rem";
        class Oe extends z {
            constructor(e, t={}) {
                super(e, Object.assign({}, t, {
                    onError: (e,t)=>function(e, {isJson: t}) {
                        return t ? e.json().catch((({message: t, stack: n})=>{
                            const a = new te(e);
                            return a.message = t,
                            a.stack = n,
                            Promise.reject(a)
                        }
                        )).then((t=>Promise.reject(new ne(t,e)))) : Promise.reject(new te(e))
                    }(e, t)
                })),
                this.retryOptions = {
                    delay: 200,
                    maxAttempts: 3
                },
                this.startKeyCodeLogin = (e,t,n)=>this.post(`${Oe.REST_PATH}/login`, {
                    body: {
                        userid: e,
                        password: t,
                        lang: n
                    }
                }).then((e=>{
                    if (e.errorCode)
                        throw new ne(e);
                    if (e.keyCodesLeft = parseInt(e.avl_jaljella),
                    e.postituspvm_avll) {
                        const t = e.postituspvm_avll.match(/^(\d+)-0?(\d+)-0?(\d+)$/);
                        t && (e.keyCodeListSentDate = new Date(t[1],t[2] - 1,t[3]))
                    }
                    return e.authMethod.startsWith("YPT") && (e.isCorporateUser = !0),
                    e
                }
                )),
                this.startMobileKeyLogin = (e,t)=>this.post(`${Oe.REST_PATH}/create-authentication`, {
                    body: {
                        authDevice: "mobilekey",
                        userId: e,
                        language: t
                    }
                }).then((e=>{
                    if (null == e ? void 0 : e.errorCode)
                        throw new ne(e);
                    return e
                }
                ))
            }
            post(e, t) {
                return ae((n=>this.fetch("POST", e, t).catch((e=>{
                    throw e instanceof ne && n.abort(),
                    e
                }
                ))), this.retryOptions)
            }
        }
        Oe.DATA_PATH = "/authentication/additional",
        Oe.REST_PATH = "/authentication/keylist/v2/rest";
        const Ee = "399px";
        function je(e) {
            var {formRef: t, onCancel: n, onKeyCode: a, onMobileKey: i, onTouch: r, loginStyle: o, invalid: s, setInvalid: u, status: d, availableMethods: m=["mobilekey", "keycode"], requireInput: f={
                mobilekey: !0,
                keycode: !0
            }, preSelectedMethod: h="mobilekey"} = e
              , y = ie(e, ["formRef", "onCancel", "onKeyCode", "onMobileKey", "onTouch", "loginStyle", "invalid", "setInvalid", "status", "availableMethods", "requireInput", "preSelectedMethod"]);
            const v = Object(l.useMemo)((()=>m.length > 1 ? h : m[0]), [m, h])
              , [g,k] = Object(l.useState)(v)
              , [O,E] = Object(l.useState)("")
              , [j,w] = Object(l.useState)("")
              , x = Object(l.useRef)(!1)
              , M = b("login.selectMethod")
              , C = (e=>{
                const [t,n] = Object(l.useState)(!1);
                return Object(l.useEffect)((()=>{
                    const t = ({matches: e})=>{
                        n(e)
                    }
                      , a = window.matchMedia(e)
                      , i = "addEventListener"in a;
                    return i ? a.addEventListener("change", t) : a.addListener(t),
                    t(a),
                    ()=>{
                        i ? a.removeEventListener("change", t) : a.removeListener(t)
                    }
                }
                ), [e, n]),
                t
            }
            )(`(max-width: ${Ee})`)
              , S = Object(l.useRef)(null);
            Object(l.useImperativeHandle)(t, (()=>({
                reset({invalid: e, keepMethod: t}={
                    invalid: !1
                }) {
                    var n;
                    t || k(v),
                    E(""),
                    w(""),
                    u(e),
                    null === (n = S.current) || void 0 === n || n.focus()
                },
                focus() {
                    var e;
                    null === (e = S.current) || void 0 === e || e.focus()
                }
            }))),
            Object(l.useEffect)((()=>{
                r && !x.current && (g !== v || O || j) && (x.current = !0,
                r())
            }
            ), [v, r, g, O, j]);
            const I = Object(l.useCallback)(((e,t)=>{
                k(t),
                w(""),
                u(!1)
            }
            ), [u])
              , _ = Object(l.useCallback)((e=>"keycode" === e ? "kr" : e), []);
            return c.a.createElement(p.Form, Object.assign({}, y, {
                spacing: C ? "default" : "large",
                onSubmit: function(e) {
                    e.preventDefault(),
                    "busy" !== d && "done" !== d && ("keycode" === g ? a(O, j) : i(O))
                }
            }), m.length > 1 && c.a.createElement(p.FormRow, {
                label: M("select")
            }, c.a.createElement(p.RadioGroup, {
                onChange: I,
                value: g
            }, m.map((e=>c.a.createElement(p.Option, {
                key: e,
                value: e,
                id: `auth-device-radio-${_(e)}`
            }, M(e), "mobilekey" == e && c.a.createElement(Me, {
                loginStyle: o
            })))))), f[g] && c.a.createElement(c.a.Fragment, null, c.a.createElement(p.FormRow, {
                label: M("username.label"),
                required: !0,
                labelFor: `auth-device-userid-${_(g)}`,
                style: "mobilekey" === g ? {
                    marginBottom: ke
                } : void 0
            }, c.a.createElement(we, {
                focusOnInvalid: !0,
                invalid: s,
                name: "userId",
                minLength: 6,
                maxLength: 8,
                placeholder: M("username.placeholder"),
                setInvalid: u,
                setValue: e=>E(e.replace(/\s/g, "")),
                value: O,
                id: `auth-device-userid-${_(g)}`,
                "aria-describedby": "login-inline-error-container auth-device-error-validation-mobilekey",
                ref: S
            }), s && "mobilekey" === g && c.a.createElement(p.InputError, {
                error: M("error.mobilekey"),
                id: "auth-device-error-validation-mobilekey"
            })), "keycode" === g && c.a.createElement(p.FormRow, {
                label: M("password.label"),
                required: !0,
                labelFor: "auth-device-password-kr",
                style: {
                    marginBottom: ke
                }
            }, c.a.createElement(we, {
                focusOnInvalid: O.length >= 6,
                invalid: s,
                maxLength: 4,
                placeholder: M("password.placeholder"),
                setInvalid: u,
                setValue: w,
                type: "password",
                name: "password",
                value: j,
                id: "auth-device-password-kr"
            }), s && c.a.createElement(p.InputError, {
                error: M("error.keycode"),
                id: "login-inline-error-container"
            })), c.a.createElement(p.FormRow, null, c.a.createElement(fe, {
                trigger: c.a.createElement(p.Action, {
                    id: "username-forgotten",
                    inline: !0
                }, M("username.forgotten.title"))
            }, c.a.createElement("h2", null, M("username.forgotten.title")), c.a.createElement("p", null, M("username.forgotten.body1")), c.a.createElement("p", null, M("username.forgotten.body2"))))), c.a.createElement(p.ButtonRow, null, c.a.createElement(ue, {
                finish: !1,
                primary: !0,
                status: d,
                type: "submit",
                id: "keycode" === g ? "login" : "auth-device-submit-mobilekey"
            }), n && c.a.createElement(p.Button, {
                id: "auth-cancel",
                alternate: !0,
                onClick: e=>{
                    e.preventDefault(),
                    n()
                }
                ,
                type: "button"
            }, M("cancel"))))
        }
        const we = Object(l.forwardRef)((function(e, t) {
            var {focusOnInvalid: n, setInvalid: a, setValue: i} = e
              , r = ie(e, ["focusOnInvalid", "setInvalid", "setValue"]);
            const o = Object(l.useRef)(null);
            return Object(l.useImperativeHandle)(t, (()=>({
                focus() {
                    var e;
                    null === (e = o.current) || void 0 === e || e.focus()
                },
                select() {
                    var e;
                    null === (e = o.current) || void 0 === e || e.select()
                }
            }))),
            c.a.createElement(p.TextInput, Object.assign({}, r, {
                autoComplete: "off",
                ref: o,
                required: !0,
                onChange: e=>{
                    i(e.target.value),
                    a(!1)
                }
                ,
                onInvalid: e=>{
                    e.preventDefault(),
                    a(!0),
                    n && o.current && (o.current.focus(),
                    o.current.select())
                }
            }))
        }
        ))
          , xe = ye.InfoBox;
        function Me(e) {
            var {loginStyle: t} = e
              , n = ie(e, ["loginStyle"]);
            const a = b("login.selectMethod")
              , {appElement: i} = Object(l.useContext)(me);
            return c.a.createElement(xe, Object.assign({}, n, {
                id: "login-mobilekey-infobox",
                className: "i6298kk",
                appElement: i,
                boxProps: {
                    id: "login-mobilekey-infobox-content",
                    className: ee()(t && "i1c4xekb")
                }
            }), a("mobilekeyInfo"))
        }
        function Ce(e) {
            var {children: t, className: n, showAlways: a} = e
              , i = ie(e, ["children", "className", "showAlways"]);
            return c.a.createElement("div", Object.assign({}, i, {
                className: ee()("login-separator", "s1e9l74a", !a && "h1mb45nn", n)
            }), t)
        }
        function Se(e) {
            var {className: t, error: n, errorLevel: a, ErrorComponent: i, guideContent: r, loginStyle: o, status: s, setStatus: u, onClickOtherMeans: d, headingLevel: m=1} = e
              , f = ie(e, ["className", "error", "errorLevel", "ErrorComponent", "guideContent", "loginStyle", "status", "setStatus", "onClickOtherMeans", "headingLevel"]);
            const h = b("login.title")
              , y = Y("common.separator.or", [])
              , v = Y("common.ftn.label", [])
              , [g,k] = Object(l.useState)(!1)
              , O = Object(l.useCallback)((e=>"invalid" === e || "error" === e), [])
              , E = Object(l.useCallback)((e=>{
                k(e),
                !e && O(s) && (null == u || u("active"))
            }
            ), [s]);
            return Object(l.useEffect)((()=>{
                k(!!n)
            }
            ), [n]),
            c.a.createElement("section", {
                className: ee()("s15nkou8", o && "o1mwzxa8", t)
            }, c.a.createElement(he, {
                id: "auth-device-opfi-header",
                className: "h1y2mlq",
                level: m
            }, h(o ? "login" : "authenticate")), r && c.a.createElement("div", {
                className: "g77mtws"
            }, r), g && i, g && !i && n && c.a.createElement(ce, {
                error: n,
                info: "info" === a,
                headingLevel: m + 1
            }), c.a.createElement(je, Object.assign({}, f, {
                setInvalid: E,
                status: s,
                loginStyle: o,
                invalid: !n && (g || O(s))
            })), d && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ce, null, y), c.a.createElement(p.Tile, {
                className: "t2p5kn",
                interactiveArea: "tile",
                onClick: d
            }, c.a.createElement(he, {
                id: "other-means-login",
                level: m + 1,
                className: "t1edtxbv"
            }, c.a.createElement(p.Action, {
                inline: !0,
                button: !0,
                "data-test-id": "open-ftn-grid"
            }, v), c.a.createElement(pe, {
                type: "action"
            })))))
        }
        function Ie(e, t, n, a) {
            let i, r;
            const o = []
              , s = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
            o.push(s),
            a ? r = a : n && (r = new Date,
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3)),
            r && (i = `expires=${r.toUTCString()}`,
            o.push(i)),
            o.push("path=/"),
            document.cookie = o.join("; ")
        }
        const _e = "op.login.language";
        function Pe(e) {
            return e ? Ie(_e, e) : Ie(_e, "", -1)
        }
        const Ae = Object(l.forwardRef)((function({apiRootUrl: e="", apiOptions: t, appElement: n, guideContent: a, loginStyle: i, showRequestId: r, size: o, onAuthenticate: s, onCancel: u, onClickOtherMeans: d, onError: m, onTouch: f, onVerificationData: h=(()=>Promise.resolve()), onVerificationPrepared: y, onVerify: v, Verify: g, authDevice: k, availableMethods: O, preSelectedMethod: E, requireInput: j, continuingFlow: w, animateAfterSuccess: x, headingLevel: M=1}, C) {
            const S = Object(l.useMemo)((()=>({
                appElement: n || de.appElement
            })), [n])
              , I = Object(l.useMemo)((()=>new Oe(e,t)), [e, t])
              , _ = Object(l.useRef)(null)
              , P = Object(l.useRef)(null)
              , [A,N] = Object(l.useState)("active")
              , [T,L] = Object(l.useState)()
              , [D,R] = Object(l.useState)()
              , [F,K] = Object(l.useState)("error")
              , [B,V] = Object(l.useState)()
              , z = Object(l.useCallback)(((e,t)=>{
                N("active"),
                L(e),
                e && K(t || "error"),
                R(void 0),
                V(void 0)
            }
            ), [])
              , q = b("login");
            Object(l.useImperativeHandle)(C, (()=>({
                cancel: (e,t)=>re(this, void 0, void 0, (function*() {
                    if (!P.current)
                        return;
                    const n = q("cancelConfirmation.body")
                      , a = Object.assign({
                        body: n
                    }, t);
                    return P.current.cancel(e, a)
                }
                )),
                reset: ()=>{
                    var e;
                    z(),
                    null === (e = _.current) || void 0 === e || e.reset({
                        invalid: !1
                    })
                }
                ,
                showAlert: (e,t)=>{
                    var n;
                    z(e, t),
                    null === (n = _.current) || void 0 === n || n.reset({
                        invalid: !0,
                        keepMethod: !0
                    })
                }
                ,
                focus: ()=>{
                    var e, t;
                    _.current ? null === (e = _.current) || void 0 === e || e.focus() : P.current && (null === (t = P.current) || void 0 === t || t.focus())
                }
            })), [q]);
            const H = ()=>{
                var e;
                N("error"),
                null === (e = _.current) || void 0 === e || e.reset({
                    invalid: !0,
                    keepMethod: !0
                })
            }
              , U = Object(l.useCallback)((e=>m(e).then((t=>"validation" === t ? (H(),
            null) : (t && (L(e),
            K(t),
            N("active")),
            t)))), [m]);
            Object(l.useEffect)((()=>{
                k && (N("busy"),
                s(k).then((e=>{
                    V(e),
                    N("done")
                }
                )).catch(U))
            }
            ), [k, U]);
            const $ = Object(l.useCallback)((e=>{
                if (!(e instanceof ne && e.isInputError()))
                    return U(e);
                H()
            }
            ), [U])
              , J = Object(l.useCallback)(((e,t)=>(V(void 0),
            R(t),
            U(e))), [U])
              , G = Object(l.useCallback)((e=>re(this, void 0, void 0, (function*() {
                return v(e)
            }
            ))), [v, I, B])
              , Y = Object(p.useLocale)();
            Object(l.useEffect)((()=>{
                Pe(Y)
            }
            ), [Y]);
            const W = Object(l.useCallback)(((e,t)=>{
                z(),
                N("busy"),
                I.startKeyCodeLogin(e, t, Y).then((e=>s("keycode", e))).then((e=>{
                    e ? V(e) : N("done")
                }
                )).catch($)
            }
            ), [I, s, $, Y])
              , Z = Object(l.useCallback)((e=>{
                z(),
                N("busy"),
                I.startMobileKeyLogin(e, Y).then((()=>s("mobilekey"))).then((e=>{
                    V(e)
                }
                )).catch($)
            }
            ), [I, s, $, Y])
              , Q = Object(l.useCallback)(((e,t)=>h(e, t).then((()=>N("done")))), [h]);
            return c.a.createElement(me.Provider, {
                value: S
            }, c.a.createElement("section", {
                "data-testid": "login-section"
            }, k && "busy" === A && c.a.createElement(be, null), !k && ("done" !== A || !B || T) && c.a.createElement(Se, {
                guideContent: a,
                error: T,
                ErrorComponent: D,
                errorLevel: F,
                formRef: _,
                onKeyCode: W,
                onMobileKey: Z,
                onCancel: u,
                onTouch: f,
                loginStyle: i,
                requireInput: j,
                status: A,
                setStatus: N,
                availableMethods: O,
                preSelectedMethod: E,
                headingLevel: M,
                onClickOtherMeans: d
            }), !T && c.a.createElement("div", {
                "aria-live": "polite",
                style: "done" === A ? void 0 : {
                    display: "none"
                },
                "aria-hidden": "done" !== A
            }, B && g && c.a.createElement(g, {
                appElement: n,
                continuingFlow: w,
                apiRootUrl: e,
                apiOptions: t,
                onError: J,
                onSuccess: G,
                onVerificationData: Q,
                onPrepared: y,
                animateAfterSuccess: x,
                ref: P,
                showRequestId: r,
                size: o || i ? "hero" : "normal",
                verificationId: B,
                headingLevel: M
            }))))
        }
        ));
        class Ne extends Error {
            constructor(e, t) {
                super(t),
                this.verificationId = e
            }
        }
        class Te extends Ne {
        }
        class Le extends Te {
            constructor(e, {message: t, contextData: n}) {
                super(e, t),
                this.timed = "VPA_CREDENTIAL_LOCKED_24H" === t,
                this.timed && n && (this.unlockDate = n.unlockDate,
                this.unlockTime = n.unlockTime)
            }
        }
        class De extends Te {
        }
        class Re extends Ne {
        }
        class Fe extends Ne {
        }
        class Ke extends Fe {
            constructor(e, t, n) {
                super(t, function(e) {
                    switch (e) {
                    case "cancelled":
                        return "VPA_CANCELLED";
                    case "timeout":
                        return "VPA_MOBILEKEY_TIMEOUT";
                    default:
                        return "VPA_MOBILEKEY_ERROR"
                    }
                }(e)),
                this.status = e,
                this.data = n
            }
        }
        class Be extends Error {
            constructor(e, t, n) {
                super(`Unexpected error ${t.status}`),
                this.response = t,
                this.verificationId = e,
                this.body = n
            }
        }
        const Ve = e=>(t,{isJson: n})=>n ? t.json().catch((({message: n, stack: a})=>{
            const i = new Be(e,t);
            return i.message = n,
            i.stack = a,
            Promise.reject(i)
        }
        )).then((n=>Promise.reject(function(e, t) {
            const {message: n} = t;
            switch (n) {
            case "VPA_CREDENTIAL_LOCKED":
            case "VPA_CREDENTIAL_LOCKED_24H":
                return new Le(e,t);
            case "VPA_KR_SESSION_CLOSED":
                return new De(e,n)
            }
            return n.startsWith("VPA_VERIFICATION_ID_") ? new Re(e,n) : null
        }(e, n) || new Be(e,t,n)))) : Promise.reject(new Be(e,t));
        class ze extends z {
            constructor(e, t, n={}) {
                super(e + ze.PATH, Object.assign({}, n, {
                    onError: (e,n)=>Ve(t)(e, n)
                })),
                this.retryOptions = {
                    delay: 200,
                    maxAttempts: 3
                },
                this.getVerificationData = ()=>re(this, void 0, void 0, (function*() {
                    var e;
                    const t = yield this.post("/info");
                    return t.isCorporateUser = !!(null === (e = t.authMethod) || void 0 === e ? void 0 : e.startsWith("YPT")),
                    t
                }
                )),
                this.cancelVerification = (e=3e3)=>this.post("/cancel", {
                    timeout: e
                }),
                this.getSimpleData = ()=>this.post("/simple/prepare"),
                this.postSimpleVerification = ()=>this.post("/simple/process"),
                this.getKeyCodeData = e=>this.post(3 === e ? "/keycodelist-sms/prepare" : "/keycodelist/prepare").then((e=>{
                    if (e.keyCodeListSentDate) {
                        const t = e.keyCodeListSentDate.match(/^0?(\d+)\.0?(\d+)\.(\d+)$/);
                        t && (e.keyCodeListSentDate = new Date(t[3],t[2] - 1,t[1]))
                    }
                    return e
                }
                )),
                this.postKeyCodeChallenge = e=>this.post("/keycodelist/process", {
                    body: {
                        challenge: e
                    }
                }),
                this.getMobileKeyData = ()=>this.post("/mobilekey/prepare"),
                this.getMobileKeyState = (e=1e4)=>this.get(`/mobilekey/${this.id}/state`, {
                    timeout: e,
                    retryOptions: {
                        delay: 5e3
                    }
                }),
                this.getTupasData = ()=>this.post("/tupas/prepare").then((e=>{
                    const t = e.uiData.find((e=>"tupasName" === e.name));
                    return e.bankName = t && t.data || "",
                    e
                }
                )),
                this.id = t
            }
            fetch(e, t, n) {
                return super.fetch(e, t, n).catch((e=>{
                    throw e.verificationId || (e.verificationId = this.id),
                    e
                }
                )).then((e=>(!e || "object" != typeof e || e instanceof Response || e.verificationId || (e.verificationId = this.id),
                e)))
            }
            get(e, t) {
                const n = t || {}
                  , {retryOptions: a} = n
                  , i = ie(n, ["retryOptions"]);
                return ae((t=>this.fetch("GET", e, i).catch((e=>{
                    throw e instanceof Ne && t.abort(),
                    e
                }
                ))), Object.assign({}, this.retryOptions, a))
            }
            post(e, t) {
                const n = t || {}
                  , {retryOptions: a} = n
                  , i = ie(n, ["retryOptions"])
                  , r = {
                    body: {
                        verificationId: this.id
                    }
                }
                  , o = Object.assign({}, r, i);
                return (null == i ? void 0 : i.body) && (o.body = Object.assign({}, r.body, i.body)),
                ae((t=>this.fetch("POST", e, o).catch((e=>{
                    throw e instanceof Ne && t.abort(),
                    e
                }
                ))), Object.assign({}, this.retryOptions, a))
            }
        }
        ze.PATH = "/verification/eui/v3/verificationembeddedui/rest";
        function qe({data: e, disabled: t, onRedirect: n, headingLevel: a=2, continuingFlow: i=!1}) {
            const [r,o] = Object(l.useState)(!1);
            Object(l.useEffect)((()=>o(!1)), [e]);
            const s = b("tupas.confirm");
            return c.a.createElement("section", {
                className: "s8tyd62"
            }, c.a.createElement(he, {
                id: "ftn-verification-heading",
                level: a
            }, s("header", {
                bank: e.bankName
            })), c.a.createElement("p", null, s("body")), c.a.createElement(ue, {
                disabled: t,
                finish: !i,
                onClick: ()=>{
                    o(!0),
                    n(e.returnUrlToTupasIn)
                }
                ,
                status: r ? "busy" : "active",
                id: "ftn-button-continue"
            }))
        }
        var He, Ue;
        function $e() {
            return $e = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ,
            $e.apply(this, arguments)
        }
        function Je(e) {
            return l.createElement("svg", $e({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 184 213"
            }, e), He || (He = l.createElement("style", null, ".MobileKeySMS_svg__g line,.MobileKeySMS_svg__g path{fill:none;stroke:#6e6f70;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.25}.MobileKeySMS_svg__c{stroke:#6e6e6e}")), Ue || (Ue = l.createElement("g", {
                className: "MobileKeySMS_svg__g"
            }, l.createElement("path", {
                d: "M58.831 66.475l.063-54.954c.004-5.268 4.286-9.536 9.555-9.53l80.637.095c5.269.005 9.537 4.284 9.532 9.554l-.182 160.882c-.006 5.272-4.287 9.538-9.556 9.53l-80.641-.092c-5.27-.008-9.534-4.285-9.528-9.555l.027-18.336M158.249 154.607H59.09M58.879 14.889h99.657"
            }), l.createElement("path", {
                className: "MobileKeySMS_svg__c",
                d: "M114.649 173.687h-11.96a4.981 4.981 0 01-4.98-4.98v-.447a4.981 4.981 0 014.98-4.98h11.96a4.981 4.981 0 014.981 4.98v.446c0 2.751-2.23 4.981-4.981 4.981zM51.803 81.584l8.483 2.771s2.11-4.13 4.015-10.928c.081-.291.174-.58.231-.878.495-2.587-.25-4.8-2.491-6.43-.53-.386-1.145-.446-1.73-.545"
            }), l.createElement("path", {
                d: "M2.45 178.124c7.493-8.994 11.073-13.546 11.598-14.845 1.514-3.787 2.824-23.862 6.21-35.724 2.063-7.23 18.473-17.508 19.215-18.377.746-.869 14.79-33.043 16.136-36.914 3.32-9.544 8.604-8.182 10.92-7.503 7.664 2.25 5.837 14.064 2.85 25.622-3.33 12.89-6.949 20.306-7.604 24.743-1.517 10.275 6.367 31.843-10.934 51.334M107.767 182.359c-16.636 11.057-38.686 9.678-45.708 16.282-1.803 1.695-4.746 7.693-8.062 12.368M158.56 62.327c1.266-.977 2.342-1.848 2.785-2.297 2.71-2.743 6.857-8.039 2.43-13.93-1.459-1.941-3.294-2.812-5.157-3.07M158.861 116.313c2.297-1.21 15.66-8.405 16.89-9.364 3.04-2.37 7.839-7.085 4.21-13.499-3.492-6.174-11.355-3.707-13.51-2.759-.422.186-7.35 3.18-7.776 3.393M158.71 138.2c1.892-.996 11.816-6.244 12.83-7.034 2.505-1.953 6.458-5.838 3.469-11.122-2.878-5.087-9.356-3.055-11.132-2.273a590.41 590.41 0 00-5.168 2.5M158.53 90.19c2.247-1.297 16.66-10.315 17.852-11.32 2.947-2.485 7.56-7.381 3.688-13.651-3.728-6.035-11.49-3.268-13.607-2.237-.414.202-7.49 3.765-7.908 3.994M110.89 69.278H83.139s-3.456 0-3.456 3.456v32.228s0 3.456 3.456 3.456h18.613v13.923l14.006-13.923h18.612s3.457 0 3.457-3.456V88.209"
            }), l.createElement("text", {
                transform: "translate(127.813 78.051)",
                fill: "#6e6e6e",
                fontFamily: "Chevin,sans-serif",
                fontSize: 25.173,
                fontWeight: 500
            }, "!"), l.createElement("path", {
                d: "M131.009 89.397c11.094 0 20.12-9.025 20.12-20.119s-9.026-20.12-20.12-20.12c-11.094 0-20.12 9.026-20.12 20.12 0 11.094 9.026 20.12 20.12 20.12z"
            }))))
        }
        const Ge = "s1fld56r"
          , Ye = "f1ukhx6a"
          , We = "c1b3om85";
        function Ze(e) {
            var {pendingSMS: t, requestId: n} = e
              , a = ie(e, ["pendingSMS", "requestId"]);
            const i = Y("mobilekey.info.pinPrompt", {});
            return t ? c.a.createElement(Je, Object.assign({
                role: "img"
            }, a)) : c.a.createElement("svg", Object.assign({
                role: "img",
                viewBox: "0 0 184 213"
            }, a), c.a.createElement("g", {
                className: Ge
            }, c.a.createElement("g", null, c.a.createElement("ellipse", {
                cx: "108.6641",
                cy: "37.0803",
                rx: "7.0035",
                ry: "6.2254"
            }), c.a.createElement("line", {
                x1: "108.6641",
                y1: "43.3057",
                x2: "108.6641",
                y2: "61.9818"
            }), c.a.createElement("line", {
                x1: "108.6641",
                y1: "60.4254",
                x2: "112.8754",
                y2: "60.4254"
            }), c.a.createElement("line", {
                x1: "108.6641",
                y1: "54.2001",
                x2: "112.8754",
                y2: "54.2001"
            })), c.a.createElement("text", {
                style: {
                    fill: "#6e6e6e",
                    fontFamily: "Chevin, sans-serif",
                    fontWeight: 600,
                    fontSize: 10,
                    textAnchor: "middle"
                },
                transform: `matrix(1 0 0 1 108.664 ${n ? "109.418" : "93.418"})`
            }, i), n && c.a.createElement("text", {
                style: {
                    fill: "#6e6e6e",
                    fontFamily: "Chevin, sans-serif",
                    fontWeight: 300,
                    fontSize: 19.5667,
                    textAnchor: "middle"
                },
                transform: "matrix(1 0 0 1 108.664 88.2315)"
            }, n), c.a.createElement("g", null, c.a.createElement("path", {
                d: "M126.5128,137.1139H90.8155c-5.2934,0-9.5845-4.2911-9.5845-9.5845v0c0-5.2934,4.2911-9.5845,9.5845-9.5845 h35.6972c5.2934,0,9.5845,4.2911,9.5845,9.5845v0C136.0972,132.8228,131.8061,137.1139,126.5128,137.1139z"
            }), c.a.createElement("g", {
                className: Ye
            }, c.a.createElement("circle", {
                cx: "95.7582",
                cy: "127.5295",
                r: "2.7015"
            }), c.a.createElement("circle", {
                cx: "104.3621",
                cy: "127.5295",
                r: "2.7015"
            }), c.a.createElement("circle", {
                cx: "112.9661",
                cy: "127.5295",
                r: "2.7015"
            }), c.a.createElement("circle", {
                cx: "121.5701",
                cy: "127.5295",
                r: "2.7015"
            }))), c.a.createElement("path", {
                className: We,
                d: "M58.8313,66.4745l0.0626-54.9541c0.0038-5.2672,4.2859-9.5354,9.5548-9.5298l80.6375,0.095 c5.2689,0.0056,9.5372,4.2843,9.5315,9.5548l-0.1815,160.8811c-0.0057,5.2723-4.2875,9.5387-9.5564,9.5313l-80.6412-0.0933 c-5.2689-0.0074-9.5336-4.2841-9.528-9.5548l0.0279-18.336"
            }), c.a.createElement("line", {
                className: We,
                x1: "158.2491",
                y1: "154.6074",
                x2: "59.0901",
                y2: "154.6074"
            }), c.a.createElement("line", {
                className: We,
                x1: "58.879",
                y1: "14.8885",
                x2: "158.536",
                y2: "14.8885"
            }), c.a.createElement("path", {
                d: "M114.6491,173.6871H102.69c-2.751,0-4.9811-2.2301-4.9811-4.9811v-0.4458 c0-2.751,2.2301-4.9811,4.9811-4.9811h11.9591c2.751,0,4.9811,2.2301,4.9811,4.9811v0.4458 C119.6303,171.457,117.4001,173.6871,114.6491,173.6871z"
            }), c.a.createElement("path", {
                d: "M51.8035,81.5839l8.4827,2.7712c0,0,2.1108-4.1304,4.0145-10.9276c0.0817-0.2916,0.1747-0.5814,0.2315-0.8783 c0.4954-2.5872-0.2498-4.8005-2.4915-6.4307c-0.53-0.3854-1.1445-0.4453-1.7304-0.5449"
            }), c.a.createElement("path", {
                className: We,
                d: "M2.4494,178.1243c7.4939-8.9946,11.0734-13.5468,11.5983-14.8452\n            c1.5148-3.7873,2.8244-23.8617,6.2098-35.7238c2.0633-7.2297,18.4732-17.5083,19.2154-18.3773\n            c0.7463-0.8689,14.7902-33.0428,16.1366-36.9138c3.3196-9.5438,8.6037-8.1824,10.9185-7.5028\n            c7.6653,2.2501,5.8378,14.0637,2.8512,25.6217c-3.3308,12.89-6.949,20.3065-7.6042,24.7429\n            c-1.5176,10.2755,6.3668,31.8434-10.9343,51.3345"
            }), c.a.createElement("path", {
                className: We,
                d: "M107.767,182.3587c-16.6358,11.057-38.686,9.6787-45.7079,16.2822 c-1.8027,1.6948-4.7465,7.6932-8.0621,12.3684"
            }), c.a.createElement("path", {
                className: We,
                d: "M158.5607,62.3267c1.2649-0.9769,2.3413-1.8479,2.7848-2.2969c2.7088-2.7429,6.8569-8.0385,2.4294-13.9302 c-1.4584-1.9407-3.2934-2.8118-5.1573-3.0693"
            }), c.a.createElement("path", {
                className: We,
                d: "M158.8613,116.3133c2.2965-1.21,15.6597-8.4056,16.8893-9.364c3.0408-2.3699,7.8392-7.0851,4.2109-13.4992 c-3.4923-6.1737-11.3552-3.707-13.5107-2.7589c-0.4215,0.1859-7.3491,3.1798-7.7754,3.3931"
            }), c.a.createElement("path", {
                className: We,
                d: "M158.7095,138.2006c1.8921-0.997,11.8167-6.2449,12.8298-7.0346c2.5055-1.9527,6.459-5.8377,3.4695-11.1225 c-2.8775-5.0868-9.356-3.0544-11.1319-2.2731c-0.3473,0.1531-4.8161,2.3239-5.1674,2.4996"
            }), c.a.createElement("path", {
                className: We,
                d: "M158.5291,90.1905c2.2482-1.2975,16.661-10.3155,17.8527-11.3204c2.9473-2.4851,7.5606-7.3813,3.688-13.6512 c-3.7274-6.0349-11.4894-3.2676-13.6068-2.2373c-0.414,0.2019-7.4899,3.7651-7.9077,3.9946"
            })))
        }
        const Qe = Object(l.createContext)({
            pollingBlocked: 0,
            verificationLevel: -1,
            verificationType: void 0,
            incrementPollingBlock: ()=>{}
            ,
            decrementPollingBlock: ()=>{}
            ,
            setModalOpen: e=>{}
        });
        function Xe() {
            const e = b("mobilekey.help")
              , {setModalOpen: t} = Object(l.useContext)(Qe);
            return c.a.createElement(fe, {
                large: !0,
                trigger: c.a.createElement(p.Action, {
                    id: "mobilekey-instruction-link",
                    inline: !0
                }, e("header")),
                onUpdate: e=>{
                    t(e.open)
                }
            }, c.a.createElement("h2", null, e("header")), c.a.createElement("p", null, e("body1")), c.a.createElement("p", null, e("body2")), c.a.createElement("p", null, e("body3")), c.a.createElement("p", null, e("body4")), c.a.createElement("p", null, e("body5")))
        }
        const et = "sj05kqb"
          , tt = "mtntbkz"
          , nt = "m1t6edoy"
          , at = "s1rbj2m8"
          , it = "fll2k4n"
          , rt = "a1dxryx1";
        function ot({requestId: e, size: t, smsStatus: n}) {
            const a = b("mobilekey.info");
            if ("sent" === n && ("split" === t || "tiny" === t))
                return c.a.createElement("ol", {
                    className: "opds"
                }, c.a.createElement("li", null, a("step4a")), c.a.createElement("li", null, a("step4b")));
            const i = ee()(["opds", "sent" === n && "s8jfrax"]);
            return c.a.createElement("ol", {
                className: i
            }, c.a.createElement("li", null, a("step1")), c.a.createElement("li", null, e ? a("step2", {
                requestId: e
            }) : a("step2NoRequestId")), c.a.createElement("li", null, a("step3")), n && c.a.createElement("li", {
                value: 4
            }, a("step4a"), " ", a("step4b")))
        }
        const st = Object(l.forwardRef)((function(e, t) {
            var {headingLevel: n=1} = e
              , a = ie(e, ["headingLevel"]);
            const i = Object(l.useRef)(null);
            Object(l.useImperativeHandle)(t, (()=>({
                focus() {
                    var e;
                    null === (e = i.current) || void 0 === e || e.focus()
                }
            })));
            const {requestId: r, size: o, smsStatus: s} = a
              , u = Y("mobilekey.title", {})
              , d = b("mobilekey.info")
              , m = r ? d("header", {
                requestId: r
            }) : null
              , f = "sent" === s;
            switch (o) {
            case "tiny":
                return c.a.createElement("section", null, f && c.a.createElement(p.Alert, null, d("pendingBody")), c.a.createElement(he, {
                    id: "mobilekey-header-primary",
                    level: n,
                    focusable: !0,
                    ref: i
                }, u), c.a.createElement(he, {
                    id: "mobilekey-header",
                    className: ee()([et, tt]),
                    level: n + 1
                }, m), c.a.createElement(ot, Object.assign({}, a)), c.a.createElement(Xe, null));
            case "split":
                return c.a.createElement("section", {
                    className: ee()(["sbf5dj5", at])
                }, c.a.createElement(Ze, {
                    "aria-hidden": "true",
                    className: it,
                    pendingSMS: f,
                    requestId: r
                }), c.a.createElement("div", null, c.a.createElement(he, {
                    id: "mobilekey-header-primary",
                    className: ee()([et, tt]),
                    level: n,
                    focusable: !0,
                    ref: i
                }, f ? d("pendingHeader") : u), c.a.createElement(he, {
                    id: "mobilekey-header",
                    className: ee()([nt]),
                    level: n + 1
                }, m), c.a.createElement(ot, Object.assign({}, a)), c.a.createElement("footer", {
                    className: rt
                }, c.a.createElement(Xe, null))));
            default:
                return c.a.createElement("section", {
                    className: ee()(["n19h0qi2", "hero" === o && "huydt7b"])
                }, c.a.createElement(he, {
                    id: "mobilekey-header-primary",
                    className: "p1dqi7we",
                    level: n,
                    focusable: !0,
                    ref: i
                }, u), c.a.createElement(he, {
                    id: "mobilekey-header",
                    className: ee()([et, nt]),
                    level: n + 1
                }, m), f && c.a.createElement(p.Alert, null, d("pendingBody")), c.a.createElement("div", {
                    className: at
                }, c.a.createElement(Ze, {
                    "aria-hidden": "true",
                    className: it,
                    pendingSMS: f,
                    requestId: r
                }), c.a.createElement(ot, Object.assign({}, a))), c.a.createElement("footer", {
                    className: rt
                }, c.a.createElement(Xe, null)))
            }
        }
        ))
          , lt = ()=>c.a.createElement(be, {
            color: ve.neutral,
            size: ge.large
        });
        function ct(e) {
            var {headingLevel: t=2, status: n} = e
              , a = ie(e, ["headingLevel", "status"]);
            const i = b(["mobilekey", n])
              , r = "success" === n ? {
                icon: lt
            } : {
                error: !0
            };
            return c.a.createElement(se, Object.assign({}, r, a, {
                headingLevel: t,
                title: i("header")
            }), i("body"), "timeout" === n && c.a.createElement("footer", {
                style: {
                    marginTop: "1rem"
                }
            }, c.a.createElement(Xe, null)))
        }
        function ut(e) {
            var {unlock: t, unlockDate: n, unlockTime: a} = e
              , i = ie(e, ["unlock", "unlockDate", "unlockTime"]);
            const r = b("keycode.locked");
            let o;
            return o = "contact" === t ? r("contactOP") : c.a.createElement(c.a.Fragment, null, c.a.createElement("p", {
                style: {
                    marginBottom: "1rem"
                }
            }, a ? r("unlockTime", {
                unlockDate: n,
                unlockTime: a
            }) : r("unlock24h")), c.a.createElement("p", null, r("unlockFaster"))),
            c.a.createElement(se, Object.assign({}, i, {
                error: !0,
                title: r("header")
            }), o)
        }
        function dt(e) {
            const t = b("keycode.sessionClosed");
            return c.a.createElement(se, Object.assign({
                error: !0,
                title: t("header")
            }, e), t("body"))
        }
        function mt({linkKey: e}) {
            const t = b("keycode.help");
            return c.a.createElement(fe, {
                trigger: c.a.createElement(p.Action, {
                    inline: !0
                }, t(e || "linkText")),
                closeButtonProps: {
                    id: "keycodelist-instruction-close"
                }
            }, c.a.createElement("h2", null, t("noMsgHeader")), c.a.createElement("ul", null, c.a.createElement("li", null, t("noMsgBody1")), c.a.createElement("li", null, t("noMsgBody2")), c.a.createElement("li", null, t("noMsgBody3"))), c.a.createElement("h2", null, t("badMsgHeader")), c.a.createElement("p", null, t("badMsgBody1")), c.a.createElement("p", null, t("badMsgBody2")))
        }
        function ft(e) {
            var {errorCode: t} = e
              , n = ie(e, ["errorCode"]);
            const a = b("verify.errors.validation." + t)
              , {verificationLevel: i, verificationType: r} = Object(l.useContext)(Qe);
            return "mobilekey" === r && "VPA_VERIFICATION_ID_TOO_OLD" === t ? c.a.createElement(ct, Object.assign({}, n, {
                status: "timeout"
            })) : c.a.createElement(se, Object.assign({
                error: !0,
                title: a("header")
            }, n), a("body"), "VPA_VERIFICATION_ID_TOO_OLD" === t && "keycode" === r && 3 === i && c.a.createElement(mt, {
                linkKey: "linkTextShort"
            }))
        }
        function ht(e) {
            var {verifyError: t, container: n} = e
              , a = ie(e, ["verifyError", "container"]);
            let i = null;
            if (t instanceof Le)
                i = t.timed ? c.a.createElement(ut, Object.assign({}, a, {
                    unlock: "time",
                    unlockDate: t.unlockDate,
                    unlockTime: t.unlockTime
                })) : c.a.createElement(ut, Object.assign({}, a, {
                    unlock: "contact"
                }));
            else if (t instanceof De)
                i = c.a.createElement(dt, Object.assign({}, a));
            else if (t instanceof Re) {
                const e = t.message;
                ["VPA_VERIFICATION_ID_HMAC_MISMATCH", "VPA_VERIFICATION_ID_TOO_OLD"].includes(e) && (i = c.a.createElement(ft, Object.assign({
                    errorCode: e,
                    error: !0
                }, a)))
            }
            return n ? Object(o.createPortal)(i, n) : i
        }
        const bt = ["success", "timeout", "cancelled", "error"];
        function pt(e, t, n, a, i, r) {
            const [o,s] = Object(l.useState)({
                id: e,
                status: "start"
            })
              , u = Object(l.useMemo)((()=>Date.now() + (t.waitTimeMs || 9e4)), [t]);
            Object(l.useEffect)((()=>{
                o.id !== e && s({
                    id: e,
                    status: "start"
                })
            }
            ), [e, o]);
            const {pollingBlocked: d} = Object(l.useContext)(Qe);
            return Object(l.useEffect)((()=>{
                let t, l = !0;
                const m = ()=>{
                    clearTimeout(t)
                }
                ;
                if (d)
                    return void m();
                const f = (t,n,a)=>{
                    const r = "cancelled" === t ? "cancelled" : "timeout";
                    i(new Ke(r,e,n), (()=>c.a.createElement(ct, {
                        headingLevel: a,
                        status: r
                    })))
                }
                  , h = r + 1;
                return function r() {
                    if (bt.includes(o.status))
                        return;
                    const d = ()=>{
                        t = window.setTimeout(r, 5e3)
                    }
                    ;
                    n().then((t=>{
                        if (!l)
                            return;
                        const n = function(e) {
                            switch (null == e ? void 0 : e.state) {
                            case "COMPLETE":
                                return "success";
                            case "VPA_CANCELLED":
                                return "cancelled";
                            case "VPA_CREDENTIAL_LOCKED":
                            case "ERROR_2":
                                return "error";
                            case "ERROR_1":
                                return "timeout";
                            case "INFO_1":
                                return "pending";
                            case "":
                                return "start";
                            default:
                                throw new Error(`Unexpected mobile key state ${null == e ? void 0 : e.state}`)
                            }
                        }(t);
                        if (o.status !== n)
                            switch (s({
                                id: e,
                                status: n
                            }),
                            n) {
                            case "success":
                                return void a(t);
                            case "cancelled":
                            case "timeout":
                                return void f(n, t, h);
                            case "error":
                                return void i(new Ke(n,e,t), (()=>c.a.createElement(ce, {
                                    headingLevel: h
                                })))
                            }
                        Date.now() > u ? (s({
                            id: e,
                            status: "timeout"
                        }),
                        f("timeout", t, h)) : d()
                    }
                    )).catch((t=>{
                        var n;
                        if (!l)
                            return;
                        let a = !1;
                        t instanceof Be && (a = !!(null === (n = t.body) || void 0 === n ? void 0 : n.message));
                        const r = Date.now() > u;
                        r || a || t instanceof Ne ? (t.verificationId || (t.verificationId = e),
                        s({
                            id: e,
                            status: "error",
                            error: t
                        }),
                        i(new Ke(r ? "timeout" : "error",e,{
                            state: r ? "ERROR_1" : "ERROR_2",
                            verificationId: t.verificationId
                        }), (()=>ht({
                            verifyError: t,
                            headingLevel: h
                        }) || c.a.createElement(ce, {
                            headingLevel: h
                        })))) : d()
                    }
                    ))
                }(),
                ()=>{
                    l = !1,
                    m()
                }
            }
            ), [t, n, e, i, o, a, d, r, u]),
            o
        }
        const yt = Object(l.forwardRef)((function({data: e, getUpdate: t, level: n, onError: a, onSuccess: i, size: r="normal", headingLevel: o=2, showRequestId: s=!0, verificationId: u}, d) {
            const m = Object(l.useRef)(null);
            Object(l.useImperativeHandle)(d, (()=>({
                focus() {
                    var e;
                    null === (e = m.current) || void 0 === e || e.focus()
                }
            })));
            const f = pt(u, e, t, i, a, o);
            switch (f.status) {
            case "start":
            case "pending":
                return c.a.createElement(st, {
                    ref: m,
                    headingLevel: o,
                    requestId: s ? e.verificationCode : void 0,
                    size: r,
                    smsStatus: 2 === n ? void 0 : "start" === f.status ? "todo" : "sent"
                });
            case "success":
            case "cancelled":
            case "timeout":
                return c.a.createElement(ct, {
                    headingLevel: o,
                    status: f.status
                });
            default:
                return f.error && ht({
                    verifyError: f.error,
                    headingLevel: o
                }) || c.a.createElement(ce, {
                    headingLevel: o
                })
            }
        }
        ))
          , vt = 4;
        const gt = Object(l.forwardRef)((function(e, t) {
            var {length: n=vt, onChange: a, invalid: i} = e
              , r = ie(e, ["length", "onChange", "invalid"]);
            const o = Object(l.useRef)(null)
              , [s,u] = Object(l.useState)("");
            Object(l.useImperativeHandle)(t, (()=>({
                focus() {
                    o.current && o.current.focus()
                },
                reset() {
                    u("")
                }
            })));
            const d = Object(l.useCallback)((e=>{
                const t = e.target.value.replace(/[^0-9]/g, "");
                u(t),
                t.length === n && e.target.setSelectionRange(0, 0),
                a && a(e, t)
            }
            ), [n, a, u])
              , m = Object(l.useCallback)((e=>e.target.select()), []);
            return c.a.createElement(p.TextInput, Object.assign({
                "aria-live": "off"
            }, r, {
                autoComplete: "off",
                name: "keycode",
                className: ee()("i1i6cocj", i && "i1c753b1"),
                inputMode: "numeric",
                invalid: i,
                maxLength: n,
                onChange: d,
                onFocus: m,
                pattern: "[0-9]*",
                ref: o,
                style: {
                    width: 4 * n + 1.7 + "rem"
                },
                value: s
            }))
        }
        ))
          , kt = "spi3ceg"
          , Ot = "l16m58gf"
          , Et = "ntry4c9"
          , jt = "ex2etfo"
          , wt = "efanki3";
        function xt({count: e}) {
            const t = b("keycode.form");
            if ("number" != typeof e)
                return null;
            const n = ee()(["chk4o15", e < 5 && "cofvtks"]);
            return c.a.createElement("div", {
                className: n,
                id: "verification-verify-hint"
            }, c.a.createElement("span", {
                id: "verify-codes-left"
            }, t("codesLeft", {
                count: e
            })), e < 20 && c.a.createElement(c.a.Fragment, null, c.a.createElement("br", null), c.a.createElement("span", {
                id: "verify-change-list"
            }, t("changeList"))))
        }
        const Mt = Object(l.forwardRef)((function(e, t) {
            var {disabled: n, keyNumber: a, onSubmit: i, remaining: r, animateAfterSuccess: o, status: s="active", type: u="finish"} = e
              , d = ie(e, ["disabled", "keyNumber", "onSubmit", "remaining", "animateAfterSuccess", "status", "type"]);
            const m = Object(l.useRef)(null)
              , f = b("keycode.form")
              , [h,y] = Object(l.useState)("")
              , [v,g] = Object(l.useState)(null)
              , [k,O] = Object(l.useState)(!1)
              , E = Object(l.useRef)(null);
            function j() {
                E.current && E.current.focus()
            }
            function w() {
                y(""),
                g(null),
                O(a.includes("*")),
                E.current && E.current.reset()
            }
            Object(l.useImperativeHandle)(t, (()=>({
                focus: j,
                reset: w
            }))),
            Object(l.useEffect)(w, [a]),
            Object(l.useEffect)((()=>{
                var e;
                "invalid" === s && (g("checkCode"),
                null === (e = E.current) || void 0 === e || e.reset(),
                j())
            }
            ), [s]);
            const x = Object(l.useCallback)(((e,t)=>{
                y(t),
                4 === t.length && (g(null),
                m.current && m.current.focus())
            }
            ), [])
              , M = Object(l.useCallback)((e=>{
                e.preventDefault(),
                n || (/^[0-9]{4}$/.test(h) ? (i(e, h),
                m.current && m.current.blur()) : (y(""),
                g(0 === h.length ? "enterCode" : "checkCode"),
                j()))
            }
            ), [h, n, i])
              , C = n || "busy" === s || "done" === s;
            return c.a.createElement("form", Object.assign({}, d, {
                className: ee()("f1xj53zn", d.className),
                onSubmit: M
            }), c.a.createElement("label", null, c.a.createElement("div", {
                className: Ot,
                style: {
                    width: 4 * vt + 1.7 + "rem"
                }
            }, c.a.createElement("span", {
                id: "verification-verify-title",
                "aria-hidden": !0
            }, f("header")), c.a.createElement("span", {
                className: Et,
                "aria-hidden": !0,
                id: "verification_inputLabel"
            }, a), k && c.a.createElement("span", {
                className: kt
            }, f("enterCode")), !k && c.a.createElement("span", {
                id: "keycode-accessible",
                className: kt
            }, f("label.screenReader", {
                keyCode: a.split("").join(" ")
            }))), c.a.createElement(gt, {
                disabled: C,
                onChange: x,
                ref: E,
                "aria-describedby": "verify-inline-error keycode-sms-header keycode-sms-steps verify-codes-left keycode-list-sent-body",
                id: "keycode-input-1",
                invalid: !!v,
                length: vt
            }), v && c.a.createElement("div", {
                className: wt
            }, c.a.createElement(p.InputError, {
                className: jt,
                error: f(v),
                id: "verify-inline-error"
            }))), c.a.createElement(ue, {
                disabled: n,
                animateAfterSuccess: o,
                finish: "finish" === u,
                status: s,
                ref: m,
                id: "opux-verify-keycodelist",
                className: "verify-button"
            }), c.a.createElement(xt, {
                count: r
            }))
        }
        ));
        var Ct, St;
        function It() {
            return It = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ,
            It.apply(this, arguments)
        }
        function _t(e) {
            return l.createElement("svg", It({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 304.36 101.42"
            }, e), Ct || (Ct = l.createElement("defs", null, l.createElement("style", null, ".KeyCodeSMS_svg__cls-1,.KeyCodeSMS_svg__cls-3,.KeyCodeSMS_svg__cls-4,.KeyCodeSMS_svg__cls-5{fill:none}.KeyCodeSMS_svg__cls-1,.KeyCodeSMS_svg__cls-5,.KeyCodeSMS_svg__cls-6{stroke:#6e6f70}.KeyCodeSMS_svg__cls-1,.KeyCodeSMS_svg__cls-4,.KeyCodeSMS_svg__cls-5,.KeyCodeSMS_svg__cls-6{stroke-linecap:round}.KeyCodeSMS_svg__cls-1,.KeyCodeSMS_svg__cls-4,.KeyCodeSMS_svg__cls-6{stroke-linejoin:round}.KeyCodeSMS_svg__cls-1,.KeyCodeSMS_svg__cls-3,.KeyCodeSMS_svg__cls-4,.KeyCodeSMS_svg__cls-5,.KeyCodeSMS_svg__cls-6{stroke-width:1.25px}.KeyCodeSMS_svg__cls-2{font-size:18px;fill:#6e6e6e;font-family:Chevin,sans-serif;font-weight:500}.KeyCodeSMS_svg__cls-3,.KeyCodeSMS_svg__cls-4{stroke:#6e6e6e}.KeyCodeSMS_svg__cls-3,.KeyCodeSMS_svg__cls-5{stroke-miterlimit:10}.KeyCodeSMS_svg__cls-6{fill:#fff}"))), St || (St = l.createElement("g", {
                id: "KeyCodeSMS_svg__Cleaned_123",
                "data-name": "Cleaned 123",
                "aria-hidden": "true"
            }, l.createElement("rect", {
                className: "KeyCodeSMS_svg__cls-1",
                x: 215.74,
                y: 53.08,
                width: 88,
                height: 34.1,
                rx: 2.2,
                ry: 2.2
            }), l.createElement("text", {
                className: "KeyCodeSMS_svg__cls-2",
                transform: "translate(221.7 77.18)"
            }, "8"), l.createElement("text", {
                className: "KeyCodeSMS_svg__cls-2",
                transform: "translate(243.7 77.18)"
            }, "7"), l.createElement("text", {
                className: "KeyCodeSMS_svg__cls-2",
                transform: "translate(265.7 77.18)"
            }, "6"), l.createElement("text", {
                className: "KeyCodeSMS_svg__cls-2",
                transform: "translate(287.7 77.18)"
            }, "5"), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-3",
                d: "M237.74 53.08v34.1M259.74 53.08v34.1M281.74 53.08v34.1"
            }), l.createElement("ellipse", {
                className: "KeyCodeSMS_svg__cls-4",
                cx: 259.24,
                cy: 15.52,
                rx: 4,
                ry: 3.6
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-4",
                d: "M259.24 19.52v10M259.24 29.13h2.4M259.24 25.92h2.4M259.24 41.12a20 20 0 10-20-20 20 20 0 0020 20z"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-5",
                d: "M209.08 48.13c-10.84-16.78-23.79-36.78-36.5-17.23"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-1",
                d: "M203.05 46.63l6 1.51 1.09-6.14"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-6",
                d: "M96.24 10.13h44v66h-44z"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-1",
                d: "M96.24 10.13l37.5-9.5v9.5M102.74 18.63h4M110.74 18.63h4M121.74 18.63h4M129.74 18.63h4M102.74 23.63h4M110.74 23.63h4M121.74 23.63h4M129.74 23.63h4M102.74 28.63h4M110.74 28.63h4M102.74 33.63h4M110.74 33.63h4M102.74 38.63h4M102.74 43.63h4M102.74 48.63h4M102.74 53.63h4M102.74 58.63h4M102.74 63.63h4M102.74 68.63h4"
            }), l.createElement("path", {
                transform: "rotate(-45 163.663 79.049)",
                fill: "#6e6e6e",
                d: "M161.79 76.3h3.75v5.5h-3.75z"
            }), l.createElement("path", {
                transform: "rotate(-45 174.093 89.478)",
                fill: "#fff",
                d: "M170.09 77.48h8v24h-8z"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-4",
                transform: "rotate(-45 174.093 89.478)",
                d: "M170.09 77.48h8v24h-8z"
            }), l.createElement("circle", {
                className: "KeyCodeSMS_svg__cls-6",
                cx: 138.74,
                cy: 54.13,
                r: 32.5
            }), l.createElement("path", {
                d: "M145.24 36.12h14a4 4 0 011.09.18 27.56 27.56 0 012.87 4.2 4 4 0 01-4 3.62h-14a4 4 0 010-8zm0-6h7.92a27.85 27.85 0 00-11.91-3.88 4 4 0 003.99 3.88zm-4 51.89a27.72 27.72 0 0011.91-3.89h-7.92a4 4 0 00-3.98 3.88zm18-16.89h-14a4 4 0 000 8h14.07a28.66 28.66 0 003.75-5.12 4 4 0 00-3.82-2.88zm-23 4a4 4 0 00-4-4h-14a4 4 0 00-3.82 2.88 28.66 28.66 0 003.75 5.12h14.07a4 4 0 004-4zm-4-33h-14a4 4 0 00-1.09.18 27.56 27.56 0 00-2.87 4.2 4 4 0 004 3.62h14a4 4 0 000-8zm0-6a4 4 0 004-3.88 27.93 27.93 0 00-11.92 3.88zm0 48h-7.93A27.81 27.81 0 00136.23 82a4 4 0 00-3.99-3.88z",
                fill: "#969696"
            }), l.createElement("text", {
                transform: "translate(113.84 58.13)",
                fontSize: 10,
                fontFamily: "Chevin,sans-serif",
                fontWeight: 700,
                fill: "#6e6e6e"
            }, "0123"), l.createElement("text", {
                transform: "translate(141.24 58.13)",
                fill: "#f15c00",
                fontSize: 10,
                fontFamily: "Chevin,sans-serif",
                fontWeight: 700
            }, "8765"), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-5",
                d: "M65.24 65.12C76 81.79 89 101.91 101.77 83.85"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-4",
                d: "M102.29 90l-.52-6.19-6.14 1"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-1",
                d: "M46 82.81a4.34 4.34 0 01-4.34 4.34L5 87.1a4.33 4.33 0 01-4.29-4.34L.79 11.7a4.34 4.34 0 014.34-4.33h36.65a4.33 4.33 0 014.33 4.34zM45.95 73.38H.63M.78 17.47h45.29"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-1",
                d: "M26.54 80.37a3.13 3.13 0 11-3.13-3.12 3.13 3.13 0 013.13 3.12z"
            }), l.createElement("path", {
                className: "KeyCodeSMS_svg__cls-6",
                d: "M64.24 33.32V52.2a7 7 0 01-6.83 7.14h-18L32 68.17a.57.57 0 01-1-.4v-8.43H19.74a7 7 0 01-6.82-7.14V33.32a7 7 0 016.82-7.14h37.67a7 7 0 016.83 7.14z"
            }), l.createElement("text", {
                transform: "translate(25.96 49.5)",
                fontSize: 16,
                fontFamily: "Chevin,sans-serif",
                fontWeight: 500,
                fill: "#6e6e6e"
            }, "123"), l.createElement("path", {
                fill: "none",
                d: "M-22.82-19.29h350v140h-350z"
            }))))
        }
        const Pt = "h1cf9lsd";
        function At({phoneNumber: e, size: t, headingLevel: n=1}) {
            const a = Y("keycode.title", {})
              , i = b("keycode.sms");
            if (!e)
                return "hero" === t ? c.a.createElement("section", {
                    className: Pt
                }, c.a.createElement(he, {
                    id: "keycode-header",
                    level: n
                }, a)) : null;
            const r = i("header", {
                phoneNumber: e
            })
              , o = i("header", {
                phoneNumber: e.split("").join(" ")
            })
              , s = c.a.createElement(c.a.Fragment, null, c.a.createElement("span", {
                "aria-hidden": !0
            }, r), c.a.createElement("span", {
                className: kt
            }, o))
              , l = i("steps");
            switch (t) {
            case "hero":
                return c.a.createElement("section", {
                    className: Pt
                }, c.a.createElement(he, {
                    id: "keycode-header-primary",
                    level: n,
                    className: "h18p02a4"
                }, a), c.a.createElement(he, {
                    id: "keycode-sms-header",
                    level: n + 1,
                    className: "h1bc53v0"
                }, s), c.a.createElement(_t, {
                    "aria-hidden": "true",
                    className: "c1djxu0v",
                    role: "img"
                }), c.a.createElement("p", {
                    id: "keycode-sms-steps"
                }, l), c.a.createElement(mt, null));
            case "tiny":
                return c.a.createElement("p", {
                    className: ee()(["opds", "t6xk2qr"])
                }, s, " ", l, " ", c.a.createElement(mt, null));
            default:
                return c.a.createElement(p.Alert, {
                    className: "neyuedu"
                }, c.a.createElement("p", {
                    id: "keycode-sms-steps",
                    className: "opds"
                }, s, " ", l), c.a.createElement(mt, null))
            }
        }
        function Nt(e) {
            var {dateSent: t, mode: n, keyCodesRunningOut: a=!1, headingLevel: i} = e
              , r = ie(e, ["dateSent", "mode", "keyCodesRunningOut", "headingLevel"]);
            const o = b("keycode.lowCodes");
            let s, l;
            var u;
            return "manual" === n ? (s = o("orderNewList"),
            l = o("headerRunningOut")) : (s = [o(a ? "changeListNow" : "changeList")],
            t && s.unshift(o("listSent", {
                dateSent: (u = t,
                `${u.getDate()}.${u.getMonth() + 1}.${u.getFullYear()}`)
            }), " "),
            l = o(a ? "headerRunningOut" : "headerLow")),
            c.a.createElement(se, Object.assign({}, r, {
                headingLevel: i,
                title: l,
                className: "opux-verify-alert-content"
            }), c.a.createElement("p", {
                id: "keycode-list-sent-body",
                style: {
                    marginBottom: "1rem"
                }
            }, s))
        }
        function Tt({continuingFlow: e=!1, data: t, disabled: n, corporateUser: a=!1, headerContainer: i, animateAfterSuccess: r=!1, level: s, onChallenge: u, formRef: d, onError: m, onSuccess: f, size: h="normal", headingLevel: b=2, verificationId: p}) {
            const [y,v] = Object(l.useState)()
              , [g,k] = Object(l.useState)({
                id: p,
                status: "active"
            })
              , {keyCodeListSentDate: O, challenge: E, keyCodesLeft: j, phoneNumber: w} = t;
            Object(l.useEffect)((()=>{
                y && y.verificationId !== p && v(void 0),
                g.id !== p && k({
                    id: p,
                    status: "active"
                })
            }
            ), [y, p, g]),
            Object(l.useEffect)((()=>{
                var e;
                null === (e = d.current) || void 0 === e || e.reset()
            }
            ), [p, s, d]);
            const x = Object(l.useCallback)(((e,t)=>{
                k({
                    id: p,
                    status: "busy"
                }),
                u(t).then((e=>{
                    if (e.success)
                        f(e),
                        k({
                            id: p,
                            status: "done"
                        });
                    else {
                        if ("VPA_INVALID_PASSWORD" !== e.message) {
                            const t = new Error("Unexpected keycode challenge response");
                            throw t.result = e,
                            t
                        }
                        k({
                            id: p,
                            status: "invalid"
                        })
                    }
                }
                )).catch((e=>{
                    e.verificationId || (e.verificationId = p),
                    v(e),
                    m(e, (()=>ht({
                        verifyError: e,
                        headingLevel: b + 1
                    }) || c.a.createElement(ce, {
                        headingLevel: b + 1
                    })))
                }
                ))
            }
            ), [p, u, m, f])
              , M = Object(l.useMemo)((()=>y && ht({
                verifyError: y,
                headingLevel: b
            })), [y, b]);
            if (M)
                return i ? Object(o.createPortal)(M, i) : M;
            if (y)
                return c.a.createElement(ce, {
                    headingLevel: b,
                    container: i
                });
            const C = j <= 5
              , S = j < 20 && c.a.createElement(Nt, {
                keyCodesRunningOut: C,
                mode: a && !O ? "manual" : "automatic",
                dateSent: O,
                headingLevel: b
            });
            let I = c.a.createElement(At, {
                headingLevel: b,
                phoneNumber: 2 === s ? void 0 : w,
                size: h
            });
            return i && (I = Object(o.createPortal)(I, i)),
            c.a.createElement("div", {
                className: "k1x1axhw"
            }, I, S, c.a.createElement(Mt, {
                disabled: n,
                keyNumber: E,
                animateAfterSuccess: r,
                onSubmit: x,
                ref: d,
                remaining: j,
                status: g.status,
                type: e ? "continue" : "finish"
            }))
        }
        const Lt = Object(l.forwardRef)((function(e, t) {
            var {onConfirm: n, onCancel: a, children: i, title: r} = e
              , o = ie(e, ["onConfirm", "onCancel", "children", "title"]);
            const s = b("common.cancelConfirmation")
              , {setModalOpen: u} = Object(l.useContext)(Qe)
              , d = Object(l.useRef)(null)
              , [m,f] = Object(l.useState)(!1)
              , [h,y] = Object(l.useState)()
              , [v,g] = Object(l.useState)()
              , [k,O] = Object(l.useState)()
              , E = Object(l.useCallback)((()=>{
                var e, t;
                m ? null === (e = d.current) || void 0 === e || e.close() : null === (t = d.current) || void 0 === t || t.open(),
                f(!m)
            }
            ), [m])
              , {appElement: j} = Object(l.useContext)(me);
            Object(l.useImperativeHandle)(t, (()=>({
                show: (e={})=>{
                    var t;
                    return null === (t = d.current) || void 0 === t || t.open(),
                    y(e.body),
                    f(!0),
                    new Promise(((e,t)=>{
                        g((()=>e)),
                        O((()=>t))
                    }
                    ))
                }
            })), [E]),
            Object(l.useEffect)((()=>()=>{
                null == k || k()
            }
            ), []);
            const w = Object(l.useCallback)((()=>{
                E(),
                null == a || a(),
                null == k || k()
            }
            ), [k, E])
              , x = Object(l.useCallback)((()=>{
                E(),
                null == n || n(),
                null == v || v()
            }
            ), [v, E])
              , M = Object(l.useMemo)((()=>c.a.Children.count(i) ? i : h ? "string" == typeof h || h instanceof String ? c.a.createElement("p", null, h) : h : c.a.createElement("p", null, s("body"))), [h, i, s]);
            return c.a.createElement(Q.Modal, Object.assign({}, o, {
                appElement: j,
                footer: c.a.createElement("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%"
                    }
                }, c.a.createElement(p.Button, {
                    compact: !0,
                    onClick: w
                }, s("no")), c.a.createElement(p.Button, {
                    compact: !0,
                    onClick: x
                }, s("yes"))),
                onUpdate: e=>{
                    u(e.open),
                    f(e.open)
                }
                ,
                ref: d,
                title: r || s("title")
            }), c.a.createElement("div", {
                id: "cancel-confirmation-body",
                className: "opds"
            }, M))
        }
        ));
        var Dt;
        !function(e) {
            e[e.INITIAL = 0] = "INITIAL",
            e[e.API_VERIFICATION_DATA_CALLED = 1] = "API_VERIFICATION_DATA_CALLED",
            e[e.VERIFICATION_DATA_OK = 2] = "VERIFICATION_DATA_OK",
            e[e.PREPARED_OK = 3] = "PREPARED_OK",
            e[e.PRE_PROCESSED_OK = 4] = "PRE_PROCESSED_OK",
            e[e.PROCESSED_OK = 5] = "PROCESSED_OK",
            e[e.CANCELLED = 6] = "CANCELLED",
            e[e.ERROR = 10] = "ERROR"
        }(Dt || (Dt = {}));
        const Rt = Object(l.forwardRef)((function({apiRootUrl: e="", apiOptions: t, appElement: n, continuingFlow: a=!1, customUI: i, disabled: r, headerContainer: s, onError: u, onPreProcess: d, onSuccess: m, onVerificationData: f, showRequestId: h, size: b="normal", onPrepared: p, animateAfterSuccess: y, headingLevel: v=2, verificationId: g}, k) {
            const O = Object(l.useRef)(!1);
            Object(l.useEffect)((()=>(O.current = !0,
            ()=>{
                O.current = !1
            }
            )), []);
            const E = Object(l.useMemo)((()=>({
                appElement: n || de.appElement
            })), [n])
              , j = Object(l.useMemo)((()=>new ze(e,g,t)), [e, t, g])
              , w = Object(l.useRef)(null)
              , x = Object(l.useRef)(null)
              , M = Object(l.useRef)(null)
              , [C,S] = Object(l.useState)(Dt.INITIAL)
              , [I,_] = Object(l.useState)()
              , [P,A] = Object(l.useState)("error")
              , [N,T] = Object(l.useState)(-1)
              , [L,D] = Object(l.useState)()
              , [R,F] = Object(l.useState)(0)
              , [K,B] = Object(l.useState)(!1)
              , [V,z] = Object(l.useState)(!1)
              , [q,H] = Object(l.useState)()
              , [U,$] = Object(l.useState)()
              , [J,G] = Object(l.useState)()
              , [Y,W] = Object(l.useState)()
              , Z = Object(l.useRef)({});
            Object(l.useEffect)((()=>(T(-1),
            D(void 0),
            B(!1),
            F(0),
            S(Dt.INITIAL),
            ()=>{
                Z.current = {}
            }
            )), [g]);
            const Q = Object(l.useMemo)((()=>{
                const e = {
                    pollingBlocked: R,
                    verificationLevel: N,
                    verificationType: L,
                    incrementPollingBlock: ()=>{
                        F((e=>e + 1))
                    }
                    ,
                    decrementPollingBlock: ()=>{
                        F((e=>{
                            const t = e - 1;
                            return t > 0 ? t : 0
                        }
                        ))
                    }
                    ,
                    setModalOpen: t=>{
                        t ? e.incrementPollingBlock() : e.decrementPollingBlock()
                    }
                };
                return e
            }
            ), [R, N, L]);
            Object(l.useImperativeHandle)(k, (()=>({
                cancel: (e=!0,t)=>re(this, void 0, void 0, (function*() {
                    var n;
                    if (Q.incrementPollingBlock(),
                    e)
                        try {
                            yield null === (n = M.current) || void 0 === n ? void 0 : n.show(t)
                        } catch (e) {
                            return void Q.decrementPollingBlock()
                        }
                    const a = j.cancelVerification();
                    return S(Dt.CANCELLED),
                    a
                }
                )),
                focus: ()=>{
                    w.current ? w.current.focus() : x.current && x.current.focus()
                }
                ,
                reset: ()=>{
                    var e;
                    return null === (e = w.current) || void 0 === e ? void 0 : e.reset()
                }
            })), [j, Q]);
            const X = Object(l.useCallback)((e=>{
                C >= Dt.CANCELLED || (null == e ? void 0 : e.verificationId) && e.verificationId !== g || (u(e, (()=>ht({
                    verifyError: e,
                    headingLevel: v + 1
                }) || c.a.createElement(ce, {
                    headingLevel: v + 1
                }))).then((t=>{
                    O.current && t && e.verificationId === g && (_(e),
                    A(t))
                }
                )),
                S(Dt.ERROR))
            }
            ), [g, C, u, v]);
            Object(l.useEffect)((()=>{
                I && I.verificationId !== g && _(void 0),
                J && J.verificationId !== g && G(void 0),
                q && q.verificationId !== g && H(void 0),
                U && U.verificationId !== g && $(void 0),
                Y && Y.verificationId !== g && W(void 0)
            }
            ), [I, g, q, U, J, Y]);
            const ee = Object(l.useCallback)(((e,t)=>{
                switch (e) {
                case "simple":
                    return j.getSimpleData().then((e=>(O.current && G(e),
                    e)));
                case "tupas":
                    return j.getTupasData().then((e=>(O.current && W(e),
                    e)));
                case "keycode":
                    return j.getKeyCodeData(t.verificationLevel).then((e=>(O.current && H(e),
                    e)));
                case "mobilekey":
                    return j.getMobileKeyData().then((e=>(O.current && $(e),
                    e)))
                }
            }
            ), [j])
              , te = Object(l.useCallback)(((e,t)=>{
                if (e.verificationId === g && f) {
                    const n = null == f ? void 0 : f(e, t);
                    return n instanceof Promise ? (S(Dt.VERIFICATION_DATA_OK),
                    n) : (S(Dt.ERROR),
                    Promise.reject(new Error("Invalid Verify API usage: onVerificationData should return a Promise")))
                }
                return Promise.resolve()
            }
            ), [g, f]);
            Object(l.useEffect)((()=>{
                C >= Dt.API_VERIFICATION_DATA_CALLED || (Z.current.apiVerificationData || (Z.current.apiVerificationData = j.getVerificationData(),
                S(Dt.API_VERIFICATION_DATA_CALLED)),
                Z.current.apiVerificationData.then((e=>{
                    if (!O.current || e.verificationId !== g)
                        return;
                    const t = function({authMethod: e, verificationDevice: t, verificationLevel: n}) {
                        if (1 === n)
                            return "simple";
                        if ("MOBILE_APP" === t)
                            return "mobilekey";
                        if (2 === n && e && 0 === e.indexOf("TUPAS"))
                            return "tupas";
                        if (2 === n || 3 === n)
                            return "keycode";
                        throw new Error("Invalid verification data")
                    }(e);
                    return T(e.verificationLevel),
                    z(e.isCorporateUser),
                    D(t),
                    Z.current.apiPrepare = ee(t, e),
                    te(e, t).then((()=>{
                        if ((null == e ? void 0 : e.verificationId) === g)
                            return O.current && B(!0),
                            Z.current.apiPrepare
                    }
                    ))
                }
                )).then((e=>{
                    !O.current || C >= Dt.PREPARED_OK || (null == e ? void 0 : e.verificationId) !== g || (null == p || p(),
                    S(Dt.PREPARED_OK))
                }
                )).catch(X))
            }
            ), [g, j, C, te, ee, p, X]);
            const ne = Object(l.useCallback)((()=>((null == d ? void 0 : d()) || Promise.resolve()).then((()=>S(Dt.PRE_PROCESSED_OK)))), [d])
              , ae = Object(l.useCallback)((()=>{
                ne().then(j.postSimpleVerification).then((e=>{
                    !O.current || C >= Dt.PROCESSED_OK || g !== e.verificationId || (m(e),
                    S(Dt.PROCESSED_OK))
                }
                )).catch(X)
            }
            ), [g, j, C, X, ne, m])
              , ie = Object(l.useCallback)((e=>ne().then((()=>window.location.replace(e))).catch(X)), [X, ne])
              , oe = Object(l.useCallback)((e=>ne().then((()=>j.postKeyCodeChallenge(e)))), [j, ne])
              , se = Object(l.useCallback)((()=>j.getMobileKeyState()), [j]);
            if (I)
                return ht({
                    verifyError: I,
                    container: s,
                    headingLevel: v
                }) || c.a.createElement(ce, {
                    headingLevel: v,
                    container: s,
                    error: I,
                    info: "info" === P
                });
            const le = function() {
                var e, t, n, l, d, f, p, k;
                let O;
                switch (L) {
                case "simple":
                    return O = (null === (e = null == i ? void 0 : i[L]) || void 0 === e ? void 0 : e.component) || ue,
                    c.a.createElement(O, Object.assign({}, null === (t = null == i ? void 0 : i[L]) || void 0 === t ? void 0 : t.props, {
                        disabled: r,
                        onClick: ae,
                        status: J ? "active" : "busy"
                    }));
                case "tupas":
                    return Y ? (O = (null === (n = null == i ? void 0 : i.ftn) || void 0 === n ? void 0 : n.component) || qe,
                    c.a.createElement(O, Object.assign({}, null === (l = null == i ? void 0 : i.ftn) || void 0 === l ? void 0 : l.props, {
                        headingLevel: v,
                        continuingFlow: a,
                        data: Y,
                        disabled: r,
                        onRedirect: ie
                    }))) : c.a.createElement(be, {
                        container: s
                    });
                case "keycode":
                    return q ? (O = (null === (d = null == i ? void 0 : i[L]) || void 0 === d ? void 0 : d.component) || Tt,
                    c.a.createElement(O, Object.assign({}, null === (f = null == i ? void 0 : i[L]) || void 0 === f ? void 0 : f.props, {
                        headingLevel: v,
                        continuingFlow: a,
                        corporateUser: V,
                        data: q,
                        disabled: r,
                        level: N,
                        onChallenge: oe,
                        onError: u,
                        onSuccess: m,
                        size: b,
                        animateAfterSuccess: y,
                        headerContainer: s,
                        verificationId: g,
                        formRef: w
                    }))) : c.a.createElement(be, {
                        container: s
                    });
                case "mobilekey":
                    {
                        if (!U)
                            return c.a.createElement(be, {
                                container: s
                            });
                        O = (null === (p = null == i ? void 0 : i[L]) || void 0 === p ? void 0 : p.component) || yt;
                        const e = c.a.createElement(O, Object.assign({}, null === (k = null == i ? void 0 : i[L]) || void 0 === k ? void 0 : k.props, {
                            ref: x,
                            headingLevel: v,
                            data: U,
                            getUpdate: se,
                            level: N,
                            onError: u,
                            onSuccess: m,
                            showRequestId: h,
                            size: b,
                            verificationId: g
                        }));
                        return s ? Object(o.createPortal)(e, s) : e
                    }
                default:
                    return c.a.createElement(be, {
                        container: s
                    })
                }
            }();
            return c.a.createElement(me.Provider, {
                value: E
            }, c.a.createElement(Qe.Provider, {
                value: Q
            }, c.a.createElement("section", {
                "aria-live": "polite"
            }, le), c.a.createElement(Lt, {
                ref: M
            })))
        }
        ));
        class Ft extends Error {
            constructor(e) {
                super(`Unexpected error ${e.status}`),
                this.response = e
            }
        }
        class Kt extends Error {
            constructor(e, t) {
                super(e.exception || e.errorCode),
                t && (this.response = t),
                this.body = e
            }
            isInputError() {
                return "KR_false_credentials" === this.getErrorCode()
            }
            getErrorCode() {
                return this.body.errorCode
            }
        }
        class Bt extends z {
            constructor(e="", t={}) {
                super(e + Bt.PATH, Object.assign({}, t, {
                    onError: (e,t)=>function(e, {isJson: t}) {
                        return t ? e.json().catch((({message: t, stack: n})=>{
                            const a = new Ft(e);
                            return a.message = t,
                            a.stack = n,
                            Promise.reject(a)
                        }
                        )).then((t=>Promise.reject(new Kt(t,e)))) : Promise.reject(new Ft(e))
                    }(e, t)
                })),
                this.cache = {},
                this.getInitUrl = e=>`${this.root}/mvc/login/init?${new URLSearchParams(e)}`,
                this.getTupasProviders = (e="vpa_opfi")=>{
                    const t = this.cache[e];
                    return t ? Promise.resolve(t) : this.get(`/rest/serviceproviders/${e}`).then((t=>(this.cache[e] = t,
                    t)))
                }
            }
        }
        function Vt(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
                    t.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (n[a[i]] = e[a[i]])
            }
            return n
        }
        Bt.PATH = "/authentication/tupas";
        const zt = e=>{
            var {children: t, src: n} = e
              , a = Vt(e, ["children", "src"]);
            return c.a.createElement("li", {
                role: "listitem"
            }, c.a.createElement("a", Object.assign({}, a, {
                className: "ls8hyy5"
            }), c.a.createElement("div", null, c.a.createElement("img", {
                alt: "",
                src: n
            })), c.a.createElement("span", null, t)))
        }
        ;
        function qt(e) {
            var {className: t, data: {banks: n, idpDetails: a}, getProviderUrl: i, imgRoot: r, overrides: o} = e
              , s = Vt(e, ["className", "data", "getProviderUrl", "imgRoot", "overrides"]);
            const [u,d] = Object(l.useState)(4)
              , m = Object(l.useRef)(null)
              , f = Object(p.useLocale)();
            Object(l.useEffect)((()=>{
                function e() {
                    if (m.current) {
                        const {width: e} = m.current.getBoundingClientRect();
                        let t = 4;
                        e < 500 ? t = 2 : e < 740 && (t = 3),
                        d(t)
                    }
                }
                return "complete" === document.readyState ? e() : window.addEventListener("load", e, {
                    once: !0
                }),
                window.addEventListener("resize", ((e,t)=>{
                    let n = null;
                    return (...a)=>{
                        null !== n && (clearTimeout(n),
                        n = null),
                        n = setTimeout((()=>e(...a)), t)
                    }
                }
                )(e, 100)),
                ()=>window.removeEventListener("resize", e)
            }
            ), []);
            const h = [];
            for (const e of n) {
                const t = a[e]
                  , n = null == o ? void 0 : o[e];
                if (t) {
                    const a = (null == n ? void 0 : n.image) || t.image.replace(/^(opux\/img)?\//, "")
                      , o = r.endsWith("/") ? r : r + "/"
                      , s = a.startsWith("http") ? a : o + a;
                    h.push(c.a.createElement(zt, {
                        id: `tupas-link-${e}`,
                        href: i(e),
                        key: e,
                        src: s
                    }, t[f] || e))
                }
            }
            const b = ee()("g15pz2uq", 2 === u && "s9d4x37", 3 === u && "m126s0u", 4 === u && "weut0fb", t);
            return c.a.createElement("ul", Object.assign({
                className: b,
                ref: m
            }, s, {
                role: "list"
            }), h)
        }
        function Ht(e) {
            var {container: t, className: n} = e
              , a = Vt(e, ["container", "className"]);
            const i = c.a.createElement(p.Loading, Object.assign({}, a, {
                "data-testid": "auth-loading",
                className: ee()(n, "clglbzu")
            }));
            return t ? Object(o.createPortal)(i, t) : i
        }
        function Ut(e) {
            var {apiRootUrl: t, apiOptions: n, cancelUrl: a, imgRoot: i="https://www.op.fi/static/op/opux-static/v3/img", onError: r, onProviderData: o, origin: s, serviceId: u="vpa_opfi", successUrl: d, overrides: m, gridOnly: f=!1} = e
              , h = Vt(e, ["apiRootUrl", "apiOptions", "cancelUrl", "imgRoot", "onError", "onProviderData", "origin", "serviceId", "successUrl", "overrides", "gridOnly"]);
            const y = Object(l.useMemo)((()=>new Bt(t,n)), [t, n])
              , [v,g] = Object(l.useState)()
              , [k,O] = Object(l.useState)()
              , [E,j] = Object(l.useState)("error")
              , w = b("ftn")
              , x = Object(p.useLocale)()
              , [M,C] = Object(l.useState)(!1);
            Object(l.useEffect)((()=>{
                let e = !1;
                return C(!0),
                y.getTupasProviders(u).then((t=>{
                    if (!e)
                        return C(!1),
                        g(t),
                        t
                }
                )).then((e=>{
                    e && (null == o || o(e))
                }
                )).catch((t=>{
                    e || r(t).then((n=>{
                        e || (C(!1),
                        n && (O(t),
                        j(n)))
                    }
                    ))
                }
                )),
                ()=>{
                    e = !0
                }
            }
            ), [y, r, u]);
            const S = Object(l.useMemo)((()=>v && function(e) {
                const t = (new DOMParser).parseFromString(e, "text/html")
                  , n = [];
                for (const e of t.body.childNodes)
                    if (e instanceof Text)
                        n.push(e.wholeText);
                    else if (e instanceof HTMLElement) {
                        const t = e.innerText
                          , a = e.getAttribute("href");
                        "A" === e.tagName && a ? n.push(c.a.createElement(p.Action, {
                            external: "_blank" === e.getAttribute("target"),
                            href: a,
                            inline: !0,
                            key: a
                        }, t)) : n.push(t)
                    }
                return n
            }(v.privacyNotice[x])), [v, x]);
            return k ? c.a.createElement(p.Alert, {
                error: "error" === E
            }, w("error")) : c.a.createElement("section", Object.assign({}, h), M && c.a.createElement(Ht, null), v && c.a.createElement(c.a.Fragment, null, !f && c.a.createElement("header", {
                className: "opds"
            }, c.a.createElement("h2", {
                "data-test-id": "ftn-login-heading"
            }, w("info.header")), c.a.createElement("p", {
                id: "login-tupas-content"
            }, w("info.body")), c.a.createElement("p", {
                id: "login-tupas-privacy"
            }, S)), c.a.createElement(qt, {
                data: v,
                getProviderUrl: function(e) {
                    const t = {
                        bankId: e,
                        serviceId: u,
                        cancelUrl: a,
                        successUrl: d
                    };
                    return s && (t.origin = s),
                    t.language = x,
                    y.getInitUrl(t)
                },
                imgRoot: i,
                overrides: m
            })))
        }
        var $t = function(e, t, n, a) {
            return new (n || (n = Promise))((function(i, r) {
                function o(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, s)
                }
                l((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , Jt = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
                    t.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (n[a[i]] = e[a[i]])
            }
            return n
        };
        const Gt = (e,t)=>{
            if (!t)
                return e || {};
            for (const n of Object.keys(t)) {
                const a = t[n];
                if (a instanceof Object) {
                    let t = e[n];
                    t ? t = Object.assign({}, t) : (t = {},
                    e[n] = t),
                    Object.assign(a, Gt(t, a))
                }
            }
            return Object.assign(e || {}, t),
            e
        }
        ;
        function Yt(e) {
            var {apiRootUrl: t, locale: n, loginRef: o, onInitialRender: s, onClickOtherMeans: u, ftnProps: d, messages: m} = e
              , f = Jt(e, ["apiRootUrl", "locale", "loginRef", "onInitialRender", "onClickOtherMeans", "ftnProps", "messages"]);
            if (Object(l.useEffect)((()=>{
                null == s || s()
            }
            ), []),
            u && !d)
                throw new Error("'ftnProps' option is required, when 'onClickOtherMeans' is defined");
            const [h,b] = Object(l.useState)()
              , p = Object(l.useMemo)((()=>{
                const e = Gt({}, "en" === n ? a : "sv" === n ? r : i);
                return Gt(e, null == m ? void 0 : m[n])
            }
            ), [m, n])
              , y = Object(l.useMemo)((()=>u ? ()=>$t(this, void 0, void 0, (function*() {
                yield u(),
                b(!0)
            }
            )) : void 0), [u])
              , v = d || {}
              , {successUrl: g="#ftnSuccess", cancelUrl: k="#ftnCancel", onError: O} = v
              , E = Jt(v, ["successUrl", "cancelUrl", "onError"])
              , j = O || (()=>Promise.resolve("error"));
            return c.a.createElement(oe, {
                messages: p,
                locale: n
            }, h ? c.a.createElement(Wt, Object.assign({}, E, {
                apiRootUrl: t,
                onError: j,
                cancelUrl: k,
                successUrl: g,
                onClickBack: ()=>b(!1)
            })) : c.a.createElement(Ae, Object.assign({}, f, {
                apiRootUrl: t,
                Verify: Rt,
                onClickOtherMeans: y,
                ref: o
            })))
        }
        function Wt(e) {
            var {onClickBack: t} = e
              , n = Jt(e, ["onClickBack"]);
            const a = b("login.otherMeans");
            return c.a.createElement("section", {
                "aria-live": "polite"
            }, c.a.createElement(Ut, Object.assign({}, n)), c.a.createElement(p.ButtonRow, {
                id: "ftn-login-cancel",
                style: {
                    marginTop: 0
                }
            }, c.a.createElement(p.Button, {
                onClick: t
            }, a("back"))))
        }
        var Zt = n(6)
          , Qt = n.n(Zt)
          , Xt = n(8)
          , en = {
            insert: "head",
            singleton: !1
        }
          , tn = (Qt()(Xt.a, en),
        Xt.a.locals,
        n(9))
          , nn = {
            insert: "head",
            singleton: !1
        }
          , an = (Qt()(tn.a, nn),
        tn.a.locals,
        function(e, t, n, a) {
            return new (n || (n = Promise))((function(i, r) {
                function o(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, s)
                }
                l((a = a.apply(e, t || [])).next())
            }
            ))
        }
        )
          , rn = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
                    t.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (n[a[i]] = e[a[i]])
            }
            return n
        };
        var on = class {
            constructor() {
                this.loginRef = Object(l.createRef)(),
                this.LoginApiError = ne
            }
            start(e) {
                var t;
                return an(this, void 0, void 0, (function*() {
                    this.cleanup(),
                    null === (t = this.loginRef.current) || void 0 === t || t.reset(),
                    this.mergeOptions(e);
                    const n = new Promise((e=>{
                        this.resolveAuthenticationAndVerification = e
                    }
                    ))
                      , {container: a} = this.initialOptions;
                    return this.container = this.getElement(a),
                    this.render(),
                    n
                }
                ))
            }
            mergeOptions(e) {
                var t, n;
                const a = null === (t = this.initialOptions) || void 0 === t ? void 0 : t.authDeviceChooser
                  , i = null === (n = this.initialOptions) || void 0 === n ? void 0 : n.authentication;
                this.initialOptions = Object.assign({}, this.initialOptions, e),
                this.initialOptions.authDeviceChooser = Object.assign({
                    inopfi: !1
                }, a, e.authDeviceChooser),
                this.initialOptions.authentication = Object.assign({}, i, e.authentication)
            }
            cancel(e, t) {
                var n;
                return an(this, void 0, void 0, (function*() {
                    return null === (n = this.loginRef.current) || void 0 === n ? void 0 : n.cancel(e, t)
                }
                ))
            }
            reset() {
                var e;
                null === (e = this.loginRef.current) || void 0 === e || e.reset()
            }
            focus() {
                var e;
                null === (e = this.loginRef.current) || void 0 === e || e.focus()
            }
            showAlert(e, t) {
                var n;
                null === (n = this.loginRef.current) || void 0 === n || n.showAlert(e, t)
            }
            cleanup() {
                this.container && Object(o.unmountComponentAtNode)(this.container)
            }
            render() {
                if (!this.initialOptions)
                    return;
                const e = this.initialOptions
                  , {locale: t, authDeviceChooser: {inopfi: n}} = e
                  , a = rn(e, ["locale", "authDeviceChooser"]);
                this.initialOptions,
                s.a.render(c.a.createElement(Yt, Object.assign({}, a, {
                    locale: this.currentLocale || t || "fi",
                    loginStyle: n,
                    authDevice: this.getAuthDevice(),
                    availableMethods: this.getAvailableMethods(),
                    preSelectedMethod: this.getPreselectedMethod(),
                    onVerify: this.handleVerify.bind(this),
                    onError: this.handleError.bind(this),
                    loginRef: this.loginRef
                })), this.container)
            }
            changeLanguage(e) {
                e && (this.currentLocale = e,
                this.render())
            }
            handleVerify(e) {
                this.resolveAuthenticationAndVerification(e)
            }
            handleError(e) {
                var t, n;
                return an(this, void 0, void 0, (function*() {
                    const a = yield null === (n = (t = this.initialOptions).onError) || void 0 === n ? void 0 : n.call(t, e);
                    return void 0 !== a ? a : "error"
                }
                ))
            }
            getAuthDevice() {
                const {getCurrentAuthDevice: e, authentication: {currentAuthDevice: t}={}} = this.initialOptions
                  , n = e ? e() : t;
                if (n)
                    return n.toLowerCase().includes("keycode") || "kr" === n ? "keycode" : "mobilekey"
            }
            getAvailableMethods() {
                var e;
                return null === (e = this.initialOptions.authDeviceChooser.choices) || void 0 === e ? void 0 : e.map((e=>"kr" === e ? "keycode" : "mobilekey"))
            }
            getPreselectedMethod() {
                return "kr" === this.initialOptions.authDeviceChooser.preSelectedDevice ? "keycode" : "mobilekey"
            }
            getElement(e) {
                return "string" == typeof e ? document.querySelector(e) : e[0] || e
            }
        }
        ;
        t.default = new on
    }
    ]).default
}
));

