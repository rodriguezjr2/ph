require(["jquery", "lodash", "@op/opux-classic", "moment"], (function(e, n, t, r) {
    return (window.webpackJsonpop_identity_provider = window.webpackJsonpop_identity_provider || []).push([[0], {
        0: function(n, t) {
            n.exports = e
        },
        158: function(e, n, t) {},
        159: function(e, n, t) {
            "use strict";
            t.r(n);
            t(25),
            t(31),
            t(33);
            var r = t(74)
              , i = t.n(r)
              , a = t(0)
              , o = t.n(a)
              , l = "/authentication/ui"
              , u = {
                checkVerificationResult: function(e) {
                    return "/authentication/eai/authorizationeai/rest/login-events/".concat(e, "/status")
                },
                initState: "".concat(l, "/init"),
                initVerification: "".concat(l, "/init-verification"),
                serverSideLogout: "".concat(l, "/ServerSideLogout"),
                checkSession: "".concat(l, "/checkSession"),
                checkAgreement: "".concat(l, "/checkAgreement"),
                base: "".concat(l)
            }
              , c = (t(40),
            t(43),
            t(46),
            t(47),
            t(48),
            t(75));
            function s(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o)
                      , u = l.value
                } catch (e) {
                    return void t(e)
                }
                l.done ? n(u) : Promise.resolve(u).then(r, i)
            }
            function p(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }
                    ))),
                    t.push.apply(t, r)
                }
                return t
            }
            function d(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t,
                e
            }
            var f = function(e, n, t, r) {
                return new Promise((function(i, a) {
                    o.a.ajax(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2 ? p(Object(t), !0).forEach((function(n) {
                                d(e, n, t[n])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                            }
                            ))
                        }
                        return e
                    }({
                        url: n,
                        method: e,
                        data: null != t ? JSON.stringify(t) : void 0,
                        contentType: "application/json; charset=UTF-8"
                    }, r)).then((function(e) {
                        null != e && e.errorCode && a(e),
                        i(e)
                    }
                    )).fail((function(e, n, t) {
                        a((null == e ? void 0 : e.responseJSON) || t || e)
                    }
                    ))
                }
                ))
            }
              , h = function(e, n, t) {
                return f("POST", e, n, t)
            }
              , v = function(e, n, t) {
                return f("GET", e, n, t)
            };
            var m = function(e) {
                return e instanceof Function
            }
              , y = function(e) {
                return new Promise((function(n, t) {
                    requirejs([g(e)], n, t)
                }
                ))
            };
            function g(e) {
                var n = {};
                try {
                    n = {
                        "login-plugin": "/authentication/ui/js/wrappers/login-plugin.js",
                        "trustnetwork-plugin": "/authentication/ui/js/wrappers/js/trustnetwork-plugin-bundle.js"
                    } || {}
                } catch (e) {}
                return n[e] || e
            }
            var b = function() {
                var e, n = (e = regeneratorRuntime.mark((function e(n, t) {
                    var r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(i = n) || "[object Promise]" !== Object.prototype.toString.call(i)) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", n);
                            case 5:
                                if (!m(n)) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", n());
                            case 9:
                                if ("string" != typeof n) {
                                    e.next = 12;
                                    break
                                }
                                return r = function() {
                                    return y(n)
                                }
                                ,
                                e.abrupt("return", Object(c.a)(r, t));
                            case 12:
                                throw Error("Invalid plugin definition, must be a String, Promise or a function");
                            case 13:
                            case "end":
                                return e.stop()
                            }
                        var i
                    }
                    ), e)
                }
                )),
                function() {
                    var n = this
                      , t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);
                        function o(e) {
                            s(a, r, i, o, l, "next", e)
                        }
                        function l(e) {
                            s(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                );
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }();
            t(126),
            t(68);
            var k = t(5)
              , x = t.n(k)
              , w = t(76)
              , O = t.n(w)
              , P = t(77)
              , j = t.n(P)
              , S = t(78)
              , C = t.n(S)
              , I = t(79)
              , E = t.n(I)
              , L = t(80)
              , D = t.n(L)
              , A = t(81)
              , R = t.n(A)
              , T = t(82)
              , _ = t.n(T);
            function M(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var K = new (function() {
                function e() {
                    !function(e, n) {
                        if (!(e instanceof n))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.locale = void 0,
                    this.authDevice = "",
                    this.authLevel = void 0,
                    this.authMethod = "",
                    this.avl_jaljella = void 0,
                    this.firstLogin = !1,
                    this.orderKeyList = !1,
                    this.postituspvm_avll = void 0,
                    this.representationType = "",
                    this.authDeviceChoices = [],
                    this.errorUrl = "",
                    this.cancelUrl = "",
                    this.ftnErrorCode = void 0,
                    this.loginUrlHost = "",
                    this.verificationPluginCalled = !1,
                    this.preSelectedDevice = "kr",
                    this.isCancelled = !1,
                    this.notifications = [],
                    this.relayState = void 0,
                    this.responseSaml = void 0,
                    this.loginIsSuccessfull = !0,
                    this.timeout = 0,
                    this.isSessionOk = !0,
                    this.verificationId = void 0,
                    this.verificationDevice = void 0,
                    this.cancelSaml = void 0,
                    this.reset()
                }
                var n, t, r;
                return n = e,
                r = [{
                    key: "validate",
                    value: function(e) {
                        return !0
                    }
                }],
                (t = [{
                    key: "reset",
                    value: function() {
                        this.locale = void 0,
                        this.authDevice = "",
                        this.authLevel = void 0,
                        this.authMethod = "",
                        this.avl_jaljella = void 0,
                        this.firstLogin = !1,
                        this.orderKeyList = !1,
                        this.postituspvm_avll = void 0,
                        this.representationType = "",
                        this.authDeviceChoices = [],
                        this.errorUrl = "",
                        this.cancelUrl = "",
                        this.ftnErrorCode = void 0,
                        this.loginUrlHost = "",
                        this.verificationPluginCalled = !1,
                        this.preSelectedDevice = "kr",
                        this.isCancelled = !1,
                        this.notifications = [],
                        this.relayState = void 0,
                        this.responseSaml = void 0,
                        this.loginIsSuccessfull = !0,
                        this.timeout = 0,
                        this.isSessionOk = !0,
                        this.verificationId = void 0,
                        this.verificationDevice = void 0,
                        this.cancelSaml = void 0
                    }
                }, {
                    key: "save",
                    value: function(n) {
                        return e.validate(n),
                        x.a.merge(this, n),
                        this.avl_jaljella && (this.avl_jaljella = parseInt(this.avl_jaljella, 10)),
                        this.postituspvm_avll && (this.postituspvm_avll = _()(this.postituspvm_avll, "YYYY-MM-DD").format("D.M.YYYY")),
                        this
                    }
                }]) && M(n.prototype, t),
                r && M(n, r),
                e
            }())
              , U = "op.ftn.lang";
            function Y() {
                return function(e) {
                    for (var n = encodeURIComponent(e) + "=", t = document.cookie.split(";"), r = 0; r < t.length; r++) {
                        for (var i = t[r]; " " === i.charAt(0); )
                            i = i.substring(1, i.length);
                        if (0 === i.indexOf(n))
                            return decodeURIComponent(i.substring(n.length, i.length))
                    }
                    return ""
                }(U).split(":")[0]
            }
            function V(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }
                    ))),
                    t.push.apply(t, r)
                }
                return t
            }
            function H(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? V(Object(t), !0).forEach((function(n) {
                        B(e, n, t[n])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }
                    ))
                }
                return e
            }
            function B(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t,
                e
            }
            var N = ["fi", "sv", "en"]
              , F = {
                fi: H(H({}, D.a), {}, {
                    errors: j.a
                }),
                sv: H(H({}, R.a), {}, {
                    errors: C.a
                }),
                en: H(H({}, E.a), {}, {
                    errors: O.a
                })
            }
              , G = function() {
                return K.locale || Q()
            }
              , W = function e(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return x()(n).mapValues((function(n) {
                    return m(n) ? n(t) : e(n, t)
                }
                )).value()
            }
              , J = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G()
                  , n = arguments.length > 1 ? arguments[1] : void 0
                  , t = H(H({}, K), n)
                  , r = W(F[e], t);
                return r.notifications = K.notifications[e],
                {
                    i18n: r
                }
            };
            function z(e) {
                var n, t;
                K.locale = e,
                "sv" === (n = e) ? t = "sv" : "en" === n ? t = "en" : "fi" === n && (t = "fi"),
                document.cookie = "op.ftn.lang=" + t + "; path=/"
            }
            function q(e, n) {
                e && X(e) ? z(e) : K.locale = Q(),
                function(e) {
                    K.notifications = e
                }(n)
            }
            function Q() {
                var e = Y();
                return "" !== e && X(e) || (e = "fi"),
                z(e),
                e
            }
            function X(e) {
                return e = Z(e),
                !!N.includes(e)
            }
            function Z(e) {
                return e.split("_")[0]
            }
            function $(e) {
                if (!e)
                    throw new Error("setLocale called with undefined locale");
                var n = Z(e);
                X(n) || (n = "fi"),
                z(n)
            }
            t(134),
            t(135);
            var ee = t(92)
              , ne = t(51)
              , te = t(85)
              , re = t.n(te)
              , ie = t(86)
              , ae = t.n(ie)
              , oe = t(87)
              , le = t.n(oe)
              , ue = t(88)
              , ce = t.n(ue)
              , se = t(89)
              , pe = t.n(se)
              , de = t(90)
              , fe = t.n(de)
              , he = t(52)
              , ve = t.n(he)
              , me = t(91)
              , ye = t.n(me);
            function ge(e, n) {
                if (null == e)
                    return {};
                var t, r, i = function(e, n) {
                    if (null == e)
                        return {};
                    var t, r, i = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        t = a[r],
                        n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        t = a[r],
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                }
                return i
            }
            function be(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o)
                      , u = l.value
                } catch (e) {
                    return void t(e)
                }
                l.done ? n(u) : Promise.resolve(u).then(r, i)
            }
            function ke(e) {
                return function() {
                    var n = this
                      , t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);
                        function o(e) {
                            be(a, r, i, o, l, "next", e)
                        }
                        function l(e) {
                            be(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
            }
            function xe(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }
                    ))),
                    t.push.apply(t, r)
                }
                return t
            }
            function we(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? xe(Object(t), !0).forEach((function(n) {
                        Oe(e, n, t[n])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xe(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }
                    ))
                }
                return e
            }
            function Oe(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t,
                e
            }
            var Pe = new ee.a(u.base);
            function je() {
                return we(we({}, K), J())
            }
            function Se(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                K.reset(),
                K.save(n),
                He(e, n.locale),
                K.responseSaml = n.responseSaml,
                K.errorUrl = n.errorUrl,
                K.ftnErrorCode ? Fe(n.relayState, n.responseSaml, K.ftnErrorCode) : Fe(n.relayState, n.responseSaml)
            }
            function Ce(e) {
                return Ie.apply(this, arguments)
            }
            function Ie() {
                return (Ie = ke(regeneratorRuntime.mark((function e(n) {
                    var t, r, i, a, l, c, s = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 1 && void 0 !== s[1] ? s[1] : {},
                                K.reset(),
                                i = t.verificationOptions,
                                a = ge(t, ["verificationOptions"]),
                                K.save(a),
                                Ze(K.timeout),
                                He(n, a.locale),
                                e.prev = 7,
                                e.next = 10,
                                b("@op/login-wrapper");
                            case 10:
                                return r = e.sent,
                                e.next = 13,
                                _e(r, n, a);
                            case 13:
                                return e.next = 15,
                                Ye(K.verificationId);
                            case 15:
                                if (!(l = ze())) {
                                    e.next = 18;
                                    break
                                }
                                return e.abrupt("return", Ne(l));
                            case 18:
                                return e.next = 20,
                                qe();
                            case 20:
                                if (c = e.sent,
                                "MOBILE_APP" !== K.verificationDevice || !1 !== c) {
                                    e.next = 27;
                                    break
                                }
                                return K.ftnErrorCode = "invalidAccount",
                                K.loginIsSuccessfull = !1,
                                e.abrupt("return", Ne("invalidAccount"));
                            case 27:
                                if ("error" !== c) {
                                    e.next = 32;
                                    break
                                }
                                return K.loginIsSuccessfull = !1,
                                o()("#idp-verification-cancel").remove(),
                                o()("#opidentityprovider-subheader").remove(),
                                e.abrupt("return", Ne("general"));
                            case 32:
                                e.next = 61;
                                break;
                            case 34:
                                return e.prev = 34,
                                e.t0 = e.catch(7),
                                e.prev = 37,
                                e.next = 40,
                                v(u.checkSession);
                            case 40:
                                K.isSessionOk = e.sent,
                                e.next = 46;
                                break;
                            case 43:
                                e.prev = 43,
                                e.t1 = e.catch(37),
                                K.isSessionOk = !1;
                            case 46:
                                if (!0 !== K.isCancelled) {
                                    e.next = 51;
                                    break
                                }
                                Le(),
                                e.next = 61;
                                break;
                            case 51:
                                if (!r || null !== e.t0 && void 0 !== e.t0 && e.t0.isFatal || !K.isSessionOk) {
                                    e.next = 57;
                                    break
                                }
                                return e.next = 55,
                                Ce(n, we({
                                    isRetry: !0,
                                    verificationOptions: i
                                }, a));
                            case 55:
                                e.next = 61;
                                break;
                            case 57:
                                h(u.serverSideLogout, {
                                    errorCode: "GENERAL",
                                    locale: K.locale
                                }),
                                K.loginIsSuccessfull = !1,
                                Se("#opidentityprovider-container", t);
                            case 61:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[7, 34], [37, 43]])
                }
                )))).apply(this, arguments)
            }
            function Ee(e) {
                o()("body").on("click.idp", "#idp-verification-cancel", ke(regeneratorRuntime.mark((function n() {
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (o()("#idp-verification-cancel").attr("disabled", "disabled"),
                                n.prev = 1,
                                K.isCancelled) {
                                    n.next = 6;
                                    break
                                }
                                return n.next = 5,
                                e.cancel(!1);
                            case 5:
                                K.isCancelled = !0;
                            case 6:
                                return n.next = 8,
                                Le();
                            case 8:
                                n.next = 14;
                                break;
                            case 10:
                                throw n.prev = 10,
                                n.t0 = n.catch(1),
                                o()("#idp-verification-cancel").removeAttr("disabled"),
                                n.t0;
                            case 14:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 10]])
                }
                ))))
            }
            function Le() {
                return h(u.serverSideLogout, {
                    errorCode: "CANCELLED",
                    locale: K.locale
                }).then((function(e) {
                    !function(e) {
                        var n = document.createElement("form");
                        for (var t in n.method = "post",
                        n.action = K.cancelUrl,
                        e)
                            if (e.hasOwnProperty(t)) {
                                var r = document.createElement("input");
                                r.type = "hidden",
                                r.name = t,
                                r.value = e[t],
                                n.appendChild(r)
                            }
                        document.body.appendChild(n),
                        n.submit()
                    }({
                        RelayState: K.relayState,
                        SAMLResponse: K.cancelSaml
                    })
                }
                ))
            }
            function De(e, n, t) {
                var r = {};
                N.forEach((function(e) {
                    var t = J(e).i18n.errors[n];
                    r[e] = {
                        title: t.header,
                        body: t.text
                    }
                }
                )),
                e.showAlert(r, t)
            }
            function Ae() {
                o()("#opidentityprovider-privacy").remove()
            }
            function Re() {
                o()("#opidentityprovider-container").before(fe()(je()))
            }
            function Te(e) {
                o()("#opidentityprovider-error-header").remove(),
                o()("#opidentityprovider-container").before(le()(e))
            }
            function _e(e, n, t) {
                return Me.apply(this, arguments)
            }
            function Me() {
                return (Me = ke(regeneratorRuntime.mark((function e(n, t, r) {
                    var i, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return Re(),
                                i = n.start(x.a.merge({
                                    container: o()(t),
                                    headingLevel: 2,
                                    authDeviceChooser: {
                                        choices: K.authDeviceChoices,
                                        showCancelConfirmation: !1
                                    },
                                    onCancel: function() {
                                        return K.isCancelled = !0,
                                        o()("#auth-cancel").attr("disabled", "disabled"),
                                        Le().then(null, (function() {
                                            o()("#auth-cancel").removeAttr("disabled")
                                        }
                                        ))
                                    },
                                    onVerificationPrepared: function() {
                                        K.verificationPluginCalled = !0,
                                        Je(),
                                        We(),
                                        Ee(n)
                                    },
                                    onVerificationData: function() {
                                        var e = ke(regeneratorRuntime.mark((function e(n, t) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        n && K.save(x.a.pick(n, "verificationDevice"));
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(n, t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    onError: function() {
                                        var e = ke(regeneratorRuntime.mark((function e(t) {
                                            var r, i;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!(r = t.body)) {
                                                            e.next = 15;
                                                            break
                                                        }
                                                        if ("FTN_not_enough_keycodes" !== r.errorCode) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        return De(n, "notEnoughKeycodes", "info"),
                                                        e.abrupt("return", null);
                                                    case 5:
                                                        if ("KR_account_unavailable" !== r.errorCode) {
                                                            e.next = 9;
                                                            break
                                                        }
                                                        return K.errorCode = r.errorCode,
                                                        De(n, "expiredAccount", "error"),
                                                        e.abrupt("return", null);
                                                    case 9:
                                                        if ("TUPAS_agreement_disabled" !== r.errorCode) {
                                                            e.next = 13;
                                                            break
                                                        }
                                                        return K.errorCode = r.errorCode,
                                                        De(n, "invalidAccount", "error"),
                                                        e.abrupt("return", null);
                                                    case 13:
                                                        e.next = 15;
                                                        break;
                                                    case 15:
                                                        return $e(t),
                                                        en(),
                                                        Xe(r) || (i = (null == r ? void 0 : r.status) || "GENERAL",
                                                        h(u.serverSideLogout, {
                                                            errorCode: i,
                                                            locale: K.locale
                                                        })),
                                                        e.abrupt("return", "error");
                                                    case 19:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    onAuthenticate: function() {
                                        var e = ke(regeneratorRuntime.mark((function e(t, r) {
                                            var i;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        if (K.save(x.a.pick(r, "authDevice", "authMethod", "firstLogin", "orderKeyList", "avl_jaljella", "postituspvm_avll")),
                                                        K.save({
                                                            authDevice: t
                                                        }),
                                                        !(i = ze())) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        return e.abrupt("return", Ne(i));
                                                    case 5:
                                                        return e.abrupt("return", Ke(n));
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(n, t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()
                                }, r)),
                                x.a.delay((function() {
                                    return o()("#username-forgotten").attr("href", "#")
                                }
                                ), 1e3),
                                e.next = 6,
                                i;
                            case 6:
                                a = e.sent,
                                K.save(x.a.pick(a, "authDevice", "authMethod", "firstLogin", "orderKeyList", "avl_jaljella", "postituspvm_avll"));
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function Ke(e) {
                return Ue.apply(this, arguments)
            }
            function Ue() {
                return (Ue = ke(regeneratorRuntime.mark((function e(n) {
                    var t, r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1,
                                e.next = 4,
                                h(u.initVerification, {
                                    authDevice: K.authDevice,
                                    locale: G(),
                                    spname: K.spname
                                });
                            case 4:
                                return t = e.sent,
                                r = t.verificationId,
                                K.verificationId = r,
                                e.abrupt("return", r);
                            case 11:
                                throw e.prev = 11,
                                e.t0 = e.catch(1),
                                n.showError(e.t0),
                                e.t0;
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 11]])
                }
                )))).apply(this, arguments)
            }
            function Ye(e) {
                return Ve.apply(this, arguments)
            }
            function Ve() {
                return (Ve = ke(regeneratorRuntime.mark((function e(n) {
                    var t, r, i;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                b("@op/login-wrapper");
                            case 2:
                                return i = e.sent,
                                e.prev = 3,
                                e.next = 6,
                                v(u.checkVerificationResult(n));
                            case 6:
                                t = e.sent,
                                K.save(x.a.pick(t, "authMethod", "authLevel", "authDevice")),
                                "MOBILEKEY" === K.authDevice && ne.a.captureMessage("Mobile verification result checked", {
                                    level: "info"
                                }),
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(3),
                                r = e.t0;
                            case 15:
                                if (!r && null != K.authMethod && null != K.authLevel && null != K.authDevice) {
                                    e.next = 19;
                                    break
                                }
                                throw r = r || new Error("Final verification status check result invalid"),
                                i.showError(r),
                                r;
                            case 19:
                                return e.abrupt("return", t);
                            case 20:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[3, 12]])
                }
                )))).apply(this, arguments)
            }
            function He(e, n) {
                o()(e).html('<div class="opux-loading"></div>'),
                Be(n),
                Ge()
            }
            function Be(e) {
                var n = je();
                !function(e) {
                    o()("#idp-header").remove(),
                    o()("body").prepend(ae()(e)),
                    window.document.title = e.i18n.header.text
                }(n),
                function(e) {
                    o()("#idp-footer").remove(),
                    o()("body").append(pe()(e))
                }(n),
                function(e) {
                    var n = e || G();
                    N.forEach((function(e) {
                        document.getElementById(e).classList.add("language-link"),
                        document.getElementById(e).setAttribute("aria-selected", !1)
                    }
                    )),
                    document.getElementById(n).classList.remove("language-link"),
                    document.getElementById(n).classList.add("active-language"),
                    document.getElementById(n).setAttribute("aria-selected", !0),
                    We()
                }(e)
            }
            function Ne(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error";
                K.isCancelled = !0,
                h(u.serverSideLogout, {
                    errorCode: "GENERAL",
                    locale: K.locale
                }).then((function(t) {
                    K.ftnErrorCode = e,
                    K.responseSaml = t.responseSaml,
                    Fe(K.relayState, t.responseSaml, e, n)
                }
                ))
            }
            function Fe() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "general", i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "error", a = J().i18n, l = je();
                Te(l),
                e = K.errorUrl && n && t ? ye()({
                    alertType: i,
                    icon: "error",
                    headerId: "full-page-error-header",
                    alertHeader: a.errors[r].header,
                    alertMessage: a.errors[r].text,
                    returnLink: K.errorUrl,
                    returnLinkText: a.errors.returnlink,
                    samlResponse: t,
                    relayState: n
                }) : ve()({
                    alertType: i,
                    icon: "error",
                    headerId: "full-page-error-header",
                    alertHeader: a.errors[r].header,
                    alertMessages: [a.errors[r].text]
                }),
                Ae(),
                o()("#opidentityprovider-container").html("<div></div>"),
                o()("#opidentityprovider-container").append(e),
                window.document.title = l.i18n.header.text + " " + a.errors.short.header
            }
            function Ge() {
                var e = J().i18n;
                for (var n in o()("#opidentityprovider-notification-container").html(""),
                e.notifications) {
                    var t = e.notifications[n];
                    o()("#opidentityprovider-notification-container").append(ve()({
                        alertType: "notification",
                        icon: "alert",
                        headerId: "notification-header-" + n,
                        alertHeader: t.header,
                        alertMessages: [t.message]
                    }))
                }
            }
            function We() {
                K.verificationPluginCalled && (o()("#idp-cancel-container").remove(),
                o()("#opidentityprovider-container").after(re()(je())))
            }
            function Je() {
                "keycode" === K.authDevice && (o()("#opidentityprovider-subheader").remove(),
                o()("#opidentityprovider-container").before(ce()(J())))
            }
            function ze() {
                return K.firstLogin ? "firstTimeLogin" : K.authMethod.startsWith("YPT") || "TUPAS_agreement_disabled" === K.errorCode ? "invalidAccount" : null
            }
            function qe() {
                return Qe.apply(this, arguments)
            }
            function Qe() {
                return (Qe = ke(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                v(u.checkAgreement);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.prev = 6,
                                e.t0 = e.catch(0),
                                e.abrupt("return", "error");
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 6]])
                }
                )))).apply(this, arguments)
            }
            function Xe(e) {
                return !e || "VALIDATION" === e.type || "BUSINESS" === e.type
            }
            function Ze(e) {
                setTimeout((function() {
                    K.ftnErrorCode = "timeout",
                    en(),
                    Ne("timeout", "notification")
                }
                ), e)
            }
            function $e(e) {
                o()("#idp-verification-cancel").length && "timeout" === e.status && (K.verificationPluginCalled = !1,
                o()("#idp-verification-cancel").remove())
            }
            function en() {
                o()("#idp-verification-cancel").length && (K.verificationPluginCalled = !1,
                o()("#idp-verification-cancel").remove()),
                o()("#opidentityprovider-subheader").length && o()("#opidentityprovider-subheader").remove()
            }
            ne.a.config(Pe, {
                dataCallback: function(e) {
                    return e.level || (e.level = "error"),
                    e
                }
            }).install();
            var nn;
            t(158);
            function tn(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o)
                      , u = l.value
                } catch (e) {
                    return void t(e)
                }
                l.done ? n(u) : Promise.resolve(u).then(r, i)
            }
            o()((function() {
                i.a.initialize(),
                N.forEach(function() {
                    var e = ke(regeneratorRuntime.mark((function e(n) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    o()("body").on("click.idp", "#" + n, ke(regeneratorRuntime.mark((function e() {
                                        var t, r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if ($(n),
                                                    o()("html").attr("lang", n),
                                                    Be(n),
                                                    Ge(),
                                                    !K.ftnErrorCode) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    t = "timeout" === K.ftnErrorCode ? "notification" : "error",
                                                    Fe(K.relayState, K.responseSaml, K.ftnErrorCode, t),
                                                    e.next = 17;
                                                    break;
                                                case 9:
                                                    return e.next = 11,
                                                    b("@op/login-wrapper");
                                                case 11:
                                                    return r = e.sent,
                                                    e.next = 14,
                                                    r.changeLanguage(n);
                                                case 14:
                                                    We(),
                                                    o()("#opidentityprovider-privacy").length > 0 && (Ae(),
                                                    Re()),
                                                    o()("#opidentityprovider-subheader").length && Je();
                                                case 17:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    ))));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }())
            }
            )),
            (nn = regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return setTimeout((function() {
                                o()(".opux-loading").attr("aria-live", "polite").attr("aria-label", je().i18n.loading)
                            }
                            ), 1e3),
                            n = {
                                ftnErrorCode: "general"
                            },
                            e.prev = 3,
                            e.next = 6,
                            v(u.initState);
                        case 6:
                            n = e.sent,
                            K.preSelectedDevice = n.preSelectedDevice,
                            K.cookieDomain = n.cookieDomain,
                            K.spname = n.spname,
                            q(n.locale, n.notifications),
                            n.locale = G(),
                            e.next = 17;
                            break;
                        case 14:
                            e.prev = 14,
                            e.t0 = e.catch(3);
                        case 17:
                            if (!n.ftnErrorCode) {
                                e.next = 21;
                                break
                            }
                            Se("#opidentityprovider-container", n),
                            e.next = 24;
                            break;
                        case 21:
                            return e.next = 23,
                            Ce("#opidentityprovider-container", n);
                        case 23:
                            !K.isCancelled && K.loginIsSuccessfull && (t = n.loginUrlHost + "/authentication/ui/returnToSpStepup",
                            r = void 0,
                            i = void 0,
                            a = void 0,
                            l = void 0,
                            c = void 0,
                            t && (i = t,
                            a = window.location.protocol,
                            c = a || "",
                            ((l = null == i ? "" : i).length < c.length || l.substring(0, c.length).toLowerCase() !== c.toLowerCase() ? window.location.href !== t : window.location.pathname !== t) ? window.location.href = t : r && window.location.reload()));
                        case 24:
                        case "end":
                            return e.stop()
                        }
                    var t, r, i, a, l, c
                }
                ), e, null, [[3, 14]])
            }
            )),
            function() {
                var e = this
                  , n = arguments;
                return new Promise((function(t, r) {
                    var i = nn.apply(e, n);
                    function a(e) {
                        tn(i, t, r, a, o, "next", e)
                    }
                    function o(e) {
                        tn(i, t, r, a, o, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
            )()
        },
        5: function(e, t) {
            e.exports = n
        },
        52: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                1: function(e, n, t, r, i) {
                    var a, o, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return null != (a = "function" == typeof (o = null != (o = l(t, "alertType") || (null != n ? l(n, "alertType") : n)) ? o : e.hooks.helperMissing) ? o.call(null != n ? n : e.nullContext || {}, {
                        name: "alertType",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 1,
                                column: 61
                            },
                            end: {
                                line: 1,
                                column: 76
                            }
                        }
                    }) : o) ? a : ""
                },
                3: function(e, n, t, r, i) {
                    return "notification"
                },
                5: function(e, n, t, r, i) {
                    var a, o, l = null != n ? n : e.nullContext || {}, u = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '            <h2 role="alert" ' + (null != (a = u(t, "if").call(l, null != n ? u(n, "headerId") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(6, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 7,
                                column: 29
                            },
                            end: {
                                line: 7,
                                column: 72
                            }
                        }
                    })) ? a : "") + ">" + (null != (a = "function" == typeof (o = null != (o = u(t, "alertHeader") || (null != n ? u(n, "alertHeader") : n)) ? o : e.hooks.helperMissing) ? o.call(l, {
                        name: "alertHeader",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 7,
                                column: 73
                            },
                            end: {
                                line: 7,
                                column: 92
                            }
                        }
                    }) : o) ? a : "") + "</h2>\n"
                },
                6: function(e, n, t, r, i) {
                    var a, o, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return ' id="' + (null != (a = "function" == typeof (o = null != (o = l(t, "headerId") || (null != n ? l(n, "headerId") : n)) ? o : e.hooks.helperMissing) ? o.call(null != n ? n : e.nullContext || {}, {
                        name: "headerId",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 7,
                                column: 50
                            },
                            end: {
                                line: 7,
                                column: 64
                            }
                        }
                    }) : o) ? a : "") + '"'
                },
                8: function(e, n, t, r, i) {
                    var a, o, l = null != n ? n : e.nullContext || {}, u = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return "            <p" + (null != (a = u(t, "if").call(l, null != n ? u(n, "bodyId") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(9, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 10,
                                column: 14
                            },
                            end: {
                                line: 10,
                                column: 53
                            }
                        }
                    })) ? a : "") + ' class="idp-alert-text">' + (null != (a = "function" == typeof (o = null != (o = u(t, "alertMessage") || (null != n ? u(n, "alertMessage") : n)) ? o : e.hooks.helperMissing) ? o.call(l, {
                        name: "alertMessage",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 10,
                                column: 77
                            },
                            end: {
                                line: 10,
                                column: 95
                            }
                        }
                    }) : o) ? a : "") + "</p>\n"
                },
                9: function(e, n, t, r, i) {
                    var a, o, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return ' id="' + (null != (a = "function" == typeof (o = null != (o = l(t, "bodyId") || (null != n ? l(n, "bodyId") : n)) ? o : e.hooks.helperMissing) ? o.call(null != n ? n : e.nullContext || {}, {
                        name: "bodyId",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 10,
                                column: 33
                            },
                            end: {
                                line: 10,
                                column: 45
                            }
                        }
                    }) : o) ? a : "") + '"'
                },
                11: function(e, n, t, r, i) {
                    var a, o = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return null != (a = o(t, "each").call(null != n ? n : e.nullContext || {}, null != n ? o(n, "alertMessages") : n, {
                        name: "each",
                        hash: {},
                        fn: e.program(12, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 13,
                                column: 12
                            },
                            end: {
                                line: 15,
                                column: 21
                            }
                        }
                    })) ? a : ""
                },
                12: function(e, n, t, r, i) {
                    var a;
                    return '                <p class="idp-alert-text">' + (null != (a = e.lambda(n, n)) ? a : "") + "</p>\n"
                },
                14: function(e, n, t, r, i) {
                    var a, o = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return null != (a = e.invokePartial(o(r, "@partial-block"), n, {
                        name: "@partial-block",
                        data: i,
                        indent: "            ",
                        helpers: t,
                        partials: r,
                        decorators: e.decorators
                    })) ? a : ""
                },
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o, l = null != n ? n : e.nullContext || {}, u = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<div class="idp-alert opux-alert opux-alert-' + (null != (a = u(t, "if").call(l, null != n ? u(n, "alertType") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.program(3, i, 0),
                        data: i,
                        loc: {
                            start: {
                                line: 1,
                                column: 44
                            },
                            end: {
                                line: 1,
                                column: 103
                            }
                        }
                    })) ? a : "") + ' opux-align-left" role="alert">\n    <div class="opux-alert-icon">\n        <i class="opux-icon opux-icon-' + e.escapeExpression("function" == typeof (o = null != (o = u(t, "icon") || (null != n ? u(n, "icon") : n)) ? o : e.hooks.helperMissing) ? o.call(l, {
                        name: "icon",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 3,
                                column: 38
                            },
                            end: {
                                line: 3,
                                column: 48
                            }
                        }
                    }) : o) + '"></i>\n    </div>\n    <div class="opux-alert-body">\n' + (null != (a = u(t, "if").call(l, null != n ? u(n, "alertHeader") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(5, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 6,
                                column: 8
                            },
                            end: {
                                line: 8,
                                column: 15
                            }
                        }
                    })) ? a : "") + (null != (a = u(t, "if").call(l, null != n ? u(n, "alertMessage") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(8, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 9,
                                column: 8
                            },
                            end: {
                                line: 11,
                                column: 15
                            }
                        }
                    })) ? a : "") + (null != (a = u(t, "if").call(l, null != n ? u(n, "alertMessages") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(11, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 12,
                                column: 8
                            },
                            end: {
                                line: 16,
                                column: 15
                            }
                        }
                    })) ? a : "") + (null != (a = u(t, "if").call(l, i && u(i, "partial-block"), {
                        name: "if",
                        hash: {},
                        fn: e.program(14, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 17,
                                column: 8
                            },
                            end: {
                                line: 19,
                                column: 15
                            }
                        }
                    })) ? a : "") + "    </div>\n</div>"
                },
                usePartial: !0,
                useData: !0
            })
        },
        74: function(e, n) {
            e.exports = t
        },
        76: function(e, n) {
            e.exports = {
                general: {
                    header: function(e) {
                        return "Error occurred in the service."
                    },
                    text: function(e) {
                        return "Information you gave was not forwarded. If necessary, please contact your OP cooperative bank or OP's customer service."
                    }
                },
                short: {
                    header: function(e) {
                        return "General error"
                    }
                },
                invalidAccount: {
                    header: function(e) {
                        return "Authentication failed"
                    },
                    text: function(e) {
                        return "You cannot log in using the credentials you entered. Please contact your OP cooperative bank or OP's customer service."
                    }
                },
                expiredAccount: {
                    header: function(e) {
                        return "Authentication failed"
                    },
                    text: function(e) {
                        return "You're trying to log in with user identifiers that are no longer valid. Please contact your OP cooperative bank."
                    }
                },
                firstTimeLogin: {
                    header: function(e) {
                        return "Authentication failed"
                    },
                    text: function(e) {
                        return "You must change your password. Change the password at op.fi or OP Accessible."
                    }
                },
                sessionIsAlreadyInUse: {
                    header: function(e) {
                        return "Authentication failed"
                    },
                    text: function(e) {
                        return "On the same browser, you can log into the service with only one username at a time."
                    }
                },
                timeout: {
                    header: function(e) {
                        return "Authentication cancelled"
                    },
                    text: function(e) {
                        return "Information you gave was not forwarded."
                    }
                },
                returnlink: function(e) {
                    return "Return to the service provider's website"
                },
                notEnoughKeycodes: {
                    header: function(e) {
                        return "You cannot continue, no key codes left."
                    },
                    text: function(e) {
                        return "You have used up your key codes. Please contact OP's customer service."
                    }
                }
            }
        },
        77: function(e, n) {
            e.exports = {
                general: {
                    header: function(e) {
                        return "Palvelussa tapahtui virhe"
                    },
                    text: function(e) {
                        return "Antamiasi tietoja ei välitetty. Tarvittaessa ota yhteyttä omaan osuuspankkiisi tai OP:n asiakaspalveluun."
                    }
                },
                short: {
                    header: function(e) {
                        return "Yleinen virhe"
                    }
                },
                invalidAccount: {
                    header: function(e) {
                        return "Tunnistautuminen ei onnistu"
                    },
                    text: function(e) {
                        return "Antamallasi tunnuksella ei voi kirjautua tähän palveluun. Tarvittaessa ota yhteyttä omaan osuuspankkiisi tai OP:n asiakaspalveluun."
                    }
                },
                expiredAccount: {
                    header: function(e) {
                        return "Tunnistautuminen ei onnistu"
                    },
                    text: function(e) {
                        return "Yrität kirjautua tunnuksilla, jotka eivät ole enää voimassa. Ole yhteydessä osuuspankkiisi."
                    }
                },
                firstTimeLogin: {
                    header: function(e) {
                        return "Tunnistautuminen ei onnistu"
                    },
                    text: function(e) {
                        return "Salasanasi on vaihdettava. Vaihda salasana op.fi- tai OP Saavutettava -palvelussa."
                    }
                },
                sessionIsAlreadyInUse: {
                    header: function(e) {
                        return "Tunnistautuminen ei onnistu"
                    },
                    text: function(e) {
                        return "Voit kirjautua palveluun samalla selaimella vain yhdellä käyttäjätunnuksella kerrallaan."
                    }
                },
                timeout: {
                    header: function(e) {
                        return "Tunnistautuminen keskeytettiin"
                    },
                    text: function(e) {
                        return "Antamiasi tietoja ei välitetty."
                    }
                },
                returnlink: function(e) {
                    return "Palaa palveluntarjoajan sivulle"
                },
                notEnoughKeycodes: {
                    header: function(e) {
                        return "Et voi jatkaa, avainluvut loppu."
                    },
                    text: function(e) {
                        return "Olet käyttänyt avainlukusi loppuun. Ole yhteydessä OP:n asiakaspalveluun."
                    }
                }
            }
        },
        78: function(e, n) {
            e.exports = {
                general: {
                    header: function(e) {
                        return "Det har skett ett fel i tjänsten."
                    },
                    text: function(e) {
                        return "Dina uppgifter förmedlades inte. Kontakta vid behov din andelsbank eller OP:s kundtjänst."
                    }
                },
                short: {
                    header: function(e) {
                        return "Allmän fel"
                    }
                },
                invalidAccount: {
                    header: function(e) {
                        return "Identifieringen lyckas inte"
                    },
                    text: function(e) {
                        return "Det går inte att logga in i den här tjänsten med den kod du har gett. Kontakta vid behov din andelsbank eller OP:s kundtjänst."
                    }
                },
                expiredAccount: {
                    header: function(e) {
                        return "Identifieringen lyckas inte"
                    },
                    text: function(e) {
                        return "Du försöker logga in med koder som inte längre är i kraft. Kontakta din andelsbank."
                    }
                },
                firstTimeLogin: {
                    header: function(e) {
                        return "Identifieringen lyckas inte"
                    },
                    text: function(e) {
                        return "Du måste byta lösenord. Byt lösenord i tjänsten op.fi eller OP Tillgänglig."
                    }
                },
                sessionIsAlreadyInUse: {
                    header: function(e) {
                        return "Identifieringen lyckas inte"
                    },
                    text: function(e) {
                        return "Du kan logga in i tjänsten via samma webbläsare med endast en användarkod åt gången."
                    }
                },
                timeout: {
                    header: function(e) {
                        return "Identifieringen avbröts"
                    },
                    text: function(e) {
                        return "Dina uppgifter förmedlades inte."
                    }
                },
                returnlink: function(e) {
                    return "Tillbaka till tjänsteleverantörens sida"
                },
                notEnoughKeycodes: {
                    header: function(e) {
                        return "Du kan inte fortsätta, nyckeltalen är slut."
                    },
                    text: function(e) {
                        return "Du har använt alla dina nyckeltal. Kontakta OP:s kundtjänst."
                    }
                }
            }
        },
        79: function(e, n) {
            e.exports = {
                keyCodesLow: {
                    p1a: function(e) {
                        return "You will soon run out of key codes."
                    },
                    p1b: function(e) {
                        return "We have sent you a new key code list on " + e.postituspvm_avll + "."
                    },
                    p1c: function(e) {
                        return "Continue to service and change your key code list."
                    },
                    p2: function(e) {
                        return "In case of any problems, please contact OP's customer service."
                    }
                },
                cancel: function(e) {
                    return "Cancel"
                },
                continue: function(e) {
                    return "Continue"
                },
                header: {
                    text: function(e) {
                        return "OP Identity Provider Service"
                    },
                    language: function(e) {
                        return "Language"
                    }
                },
                footer: {
                    text: function(e) {
                        return "OP Financial Group"
                    }
                },
                verifyWithKeycode: function(e) {
                    return "Confirm with key code list"
                },
                jumpLink: function(e) {
                    return "Go directly to content"
                },
                loading: function(e) {
                    return "Loading"
                },
                serviceProviderSummary: function(e) {
                    return "Identify yourself to "
                },
                privacyPolicySummary: function(e) {
                    return "We will forward the following information to the identification service provider: personal ID code, name"
                },
                a11y: {
                    statement: function(e) {
                        return "Accessibility statement"
                    },
                    tooltip: function(e) {
                        return "Accessibility statement, opens in a new window."
                    },
                    link: function(e) {
                        return "www.op.fi/accessibility/identification-accessibility-statement"
                    }
                }
            }
        },
        80: function(e, n) {
            e.exports = {
                keyCodesLow: {
                    p1a: function(e) {
                        return "Avainlukusi ovat loppumassa."
                    },
                    p1b: function(e) {
                        return "Sinulle on lähetetty uusi avainlukulista " + e.postituspvm_avll + "."
                    },
                    p1c: function(e) {
                        return "Jatka palveluun ja vaihda avainlukulistasi."
                    },
                    p2: function(e) {
                        return "Ongelmatilanteissa ota yhteyttä OP:n asiakaspalveluun."
                    }
                },
                cancel: function(e) {
                    return "Keskeytä"
                },
                continue: function(e) {
                    return "Jatka"
                },
                header: {
                    text: function(e) {
                        return "OP Tunnistuspalvelu"
                    },
                    language: function(e) {
                        return "Kieli"
                    }
                },
                footer: {
                    text: function(e) {
                        return "OP Ryhmä"
                    }
                },
                verifyWithKeycode: function(e) {
                    return "Vahvista avainlukulistalla"
                },
                jumpLink: function(e) {
                    return "Siirry suoraan sisältöön"
                },
                loading: function(e) {
                    return "Ladataaan"
                },
                serviceProviderSummary: function(e) {
                    return "Tunnistaudu palveluun "
                },
                privacyPolicySummary: function(e) {
                    return "Välitämme tunnistuksen tarjoajalle seuraavat tiedot: henkilötunnus, nimi."
                },
                a11y: {
                    statement: function(e) {
                        return "Saavutettavuusseloste"
                    },
                    tooltip: function(e) {
                        return "Saavutettavuusseloste, avautuu uuteen ikkunaan."
                    },
                    link: function(e) {
                        return "www.op.fi/saavutettavuus/tunnistautuminen-saavutettavuusseloste"
                    }
                }
            }
        },
        81: function(e, n) {
            e.exports = {
                keyCodesLow: {
                    p1a: function(e) {
                        return "Dina nyckeltal håller på att ta slut."
                    },
                    p1b: function(e) {
                        return "Vi har skickat en ny nyckeltalslista till dig " + e.postituspvm_avll + "."
                    },
                    p1c: function(e) {
                        return "Fortsätt till tjänsten och byt nyckeltalslista."
                    },
                    p2: function(e) {
                        return "Kontakta OP:s kundtjänst vid problem."
                    }
                },
                cancel: function(e) {
                    return "Ångra"
                },
                continue: function(e) {
                    return "Fortsätt"
                },
                header: {
                    text: function(e) {
                        return "OP Identifieringstjänsten"
                    },
                    language: function(e) {
                        return "Språk"
                    }
                },
                footer: {
                    text: function(e) {
                        return "OP Gruppen"
                    }
                },
                verifyWithKeycode: function(e) {
                    return "Bekräfta med nyckeltalslistan"
                },
                jumpLink: function(e) {
                    return "Gå direkt till innehåll"
                },
                loading: function(e) {
                    return "Laddar"
                },
                serviceProviderSummary: function(e) {
                    return "Identifiera dig i tjänsten "
                },
                privacyPolicySummary: function(e) {
                    return "Vi förmedlar följande uppgifter till tillhandahållaren av identifieringstjänsten: personbeteckning, namn."
                },
                a11y: {
                    statement: function(e) {
                        return "Tillgänglighetsutlåtande"
                    },
                    tooltip: function(e) {
                        return "Tillgänglighetsutlåtande, öppnas i ett nytt fönster."
                    },
                    link: function(e) {
                        return "www.op.fi/tillganglighet/identifiering-tillganglighetsutlatande"
                    }
                }
            }
        },
        82: function(e, n) {
            e.exports = r
        },
        85: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<div id="idp-cancel-container" class="opux-form-group">\n    <section>\n        <button id="idp-verification-cancel" type="button" class="opux-btn opux-btn-secondary">' + e.escapeExpression(e.lambda(null != (a = null != n ? o(n, "i18n") : n) ? o(a, "cancel") : a, n)) + "</button>\n    </section>\n</div>\n"
                },
                useData: !0
            })
        },
        86: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o = e.lambda, l = e.escapeExpression, u = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<header id="idp-header">\n        <section class="tp-header-content tp-ktss">\n            <div class="op-logo with-text"></div>\n        <a class="main-content-link" href="#opidentityprovider-container">' + l(o(null != (a = null != n ? u(n, "i18n") : n) ? u(a, "jumpLink") : a, n)) + '</a>\n        <ul role="navigation" aria-label="' + l(o(null != (a = null != (a = null != n ? u(n, "i18n") : n) ? u(a, "header") : a) ? u(a, "language") : a, n)) + '" class="languages">\n            <li><a id="fi" class="active-language" lang="fi" title="suomeksi" href="#">FI</a>\n            </li>\n            <li><a id="sv" class="language-link" lang="sv" title="på svenska" href="#">SV</a>\n            </li>\n            <li><a id="en" class="language-link" lang="en" title="in English" href="#">EN</a>\n            </li>\n        </ul>\n        </section>\n</header>\n'
                },
                useData: !0
            })
        },
        87: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<div id="opidentityprovider-error-header">\n  <section>\n  \t<h1 class="op-logo-service-header" id="op_error_service_header">' + e.escapeExpression(e.lambda(null != (a = null != (a = null != n ? o(n, "i18n") : n) ? o(a, "header") : a) ? o(a, "text") : a, n)) + "</h1>\n  </section>\n</div>"
                },
                useData: !0
            })
        },
        88: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<div id="opidentityprovider-subheader">\n    <section>\n        <h2 class="auth-device-header">' + e.escapeExpression(e.lambda(null != (a = null != n ? o(n, "i18n") : n) ? o(a, "verifyWithKeycode") : a, n)) + "</h2>\n    </section>\n</div>\n"
                },
                useData: !0
            })
        },
        89: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o = e.lambda, l = e.escapeExpression, u = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<footer id="idp-footer">\n    <div class="footer-content">\n        <p style="margin-bottom: 20px;">\n            <a class="ds-action ds-action--external" href="https://' + l(o(null != (a = null != (a = null != n ? u(n, "i18n") : n) ? u(a, "a11y") : a) ? u(a, "link") : a, n)) + '" aria-label="' + l(o(null != (a = null != (a = null != n ? u(n, "i18n") : n) ? u(a, "a11y") : a) ? u(a, "tooltip") : a, n)) + '" target="_blank">\n              <span class="ds-action__label">' + l(o(null != (a = null != (a = null != n ? u(n, "i18n") : n) ? u(a, "a11y") : a) ? u(a, "statement") : a, n)) + '</span>\n              <svg aria-hidden="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="ds-action__icon ds-icon ds-icon--small ds-icon--action" height="32" width="32"><path d="M22 22v-4a1 1 0 012 0v5a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1h4.998a1 1 0 010 2H10v12h12zm1.91-12.482l-6.197 6.299a1 1 0 01-1.426-1.403l6.225-6.328-3.466.159a1 1 0 01-.092-1.998L24.37 6c.9 0 1.631.73 1.63 1.68l-.255 5.337a1 1 0 11-1.998-.095l.164-3.404z" fill-rule="evenodd"></path></svg>\n            </a>\n        </p>\n        <p class="copy">\n            &copy; ' + l(o(null != (a = null != (a = null != n ? u(n, "i18n") : n) ? u(a, "footer") : a) ? u(a, "text") : a, n)) + "\n        </p>\n    </div>\n</footer>\n"
                },
                useData: !0
            })
        },
        90: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o, l = e.lambda, u = e.escapeExpression, c = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<div id="opidentityprovider-privacy">\n  <section>\n  \t<h1 class="op-logo-service-header" id="op_service_header">' + u(l(null != (a = null != (a = null != n ? c(n, "i18n") : n) ? c(a, "header") : a) ? c(a, "text") : a, n)) + "</h1>\n    <p>" + u(l(null != (a = null != n ? c(n, "i18n") : n) ? c(a, "serviceProviderSummary") : a, n)) + "<strong>" + u("function" == typeof (o = null != (o = c(t, "spname") || (null != n ? c(n, "spname") : n)) ? o : e.hooks.helperMissing) ? o.call(null != n ? n : e.nullContext || {}, {
                        name: "spname",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 4,
                                column: 46
                            },
                            end: {
                                line: 4,
                                column: 56
                            }
                        }
                    }) : o) + "</strong>. " + u(l(null != (a = null != n ? c(n, "i18n") : n) ? c(a, "privacyPolicySummary") : a, n)) + "</p>\n  </section>\n</div>"
                },
                useData: !0
            })
        },
        91: function(e, n, t) {
            var r = t(11);
            e.exports = (r.default || r).template({
                1: function(e, n, t, r, i) {
                    var a, o, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return null != (a = "function" == typeof (o = null != (o = l(t, "alertType") || (null != n ? l(n, "alertType") : n)) ? o : e.hooks.helperMissing) ? o.call(null != n ? n : e.nullContext || {}, {
                        name: "alertType",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 1,
                                column: 61
                            },
                            end: {
                                line: 1,
                                column: 76
                            }
                        }
                    }) : o) ? a : ""
                },
                3: function(e, n, t, r, i) {
                    return "notification"
                },
                5: function(e, n, t, r, i) {
                    var a, o, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return ' id="' + (null != (a = "function" == typeof (o = null != (o = l(t, "headerId") || (null != n ? l(n, "headerId") : n)) ? o : e.hooks.helperMissing) ? o.call(null != n ? n : e.nullContext || {}, {
                        name: "headerId",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 6,
                                column: 46
                            },
                            end: {
                                line: 6,
                                column: 60
                            }
                        }
                    }) : o) ? a : "") + '"'
                },
                7: function(e, n, t, r, i) {
                    var a, o, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return ' id="' + (null != (a = "function" == typeof (o = null != (o = l(t, "bodyId") || (null != n ? l(n, "bodyId") : n)) ? o : e.hooks.helperMissing) ? o.call(null != n ? n : e.nullContext || {}, {
                        name: "bodyId",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 7,
                                column: 29
                            },
                            end: {
                                line: 7,
                                column: 41
                            }
                        }
                    }) : o) ? a : "") + '"'
                },
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, r, i) {
                    var a, o, l = null != n ? n : e.nullContext || {}, u = e.hooks.helperMissing, c = "function", s = e.escapeExpression, p = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n))
                            return e[n]
                    }
                    ;
                    return '<div class="idp-alert opux-alert opux-alert-' + (null != (a = p(t, "if").call(l, null != n ? p(n, "alertType") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.program(3, i, 0),
                        data: i,
                        loc: {
                            start: {
                                line: 1,
                                column: 44
                            },
                            end: {
                                line: 1,
                                column: 103
                            }
                        }
                    })) ? a : "") + ' opux-align-left" role="alert">\n    <div class="opux-alert-icon">\n        <i class="opux-icon opux-icon-' + s(typeof (o = null != (o = p(t, "icon") || (null != n ? p(n, "icon") : n)) ? o : u) === c ? o.call(l, {
                        name: "icon",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 3,
                                column: 38
                            },
                            end: {
                                line: 3,
                                column: 48
                            }
                        }
                    }) : o) + '"></i>\n    </div>\n    <div class="opux-alert-body">\n        <h2 role="alert" ' + (null != (a = p(t, "if").call(l, null != n ? p(n, "headerId") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(5, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 6,
                                column: 25
                            },
                            end: {
                                line: 6,
                                column: 68
                            }
                        }
                    })) ? a : "") + ">" + (null != (a = typeof (o = null != (o = p(t, "alertHeader") || (null != n ? p(n, "alertHeader") : n)) ? o : u) === c ? o.call(l, {
                        name: "alertHeader",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 6,
                                column: 69
                            },
                            end: {
                                line: 6,
                                column: 86
                            }
                        }
                    }) : o) ? a : "") + "</h2>\n        <p" + (null != (a = p(t, "if").call(l, null != n ? p(n, "bodyId") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(7, i, 0),
                        inverse: e.noop,
                        data: i,
                        loc: {
                            start: {
                                line: 7,
                                column: 10
                            },
                            end: {
                                line: 7,
                                column: 49
                            }
                        }
                    })) ? a : "") + ' class="idp-alert-text">' + (null != (a = typeof (o = null != (o = p(t, "alertMessage") || (null != n ? p(n, "alertMessage") : n)) ? o : u) === c ? o.call(l, {
                        name: "alertMessage",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 7,
                                column: 73
                            },
                            end: {
                                line: 7,
                                column: 91
                            }
                        }
                    }) : o) ? a : "") + '</p>\n        <form method="post" action="' + s(typeof (o = null != (o = p(t, "returnLink") || (null != n ? p(n, "returnLink") : n)) ? o : u) === c ? o.call(l, {
                        name: "returnLink",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 8,
                                column: 36
                            },
                            end: {
                                line: 8,
                                column: 50
                            }
                        }
                    }) : o) + '">\n            <input id="SAMLResponse" name="SAMLResponse" type="hidden" value="' + s(typeof (o = null != (o = p(t, "samlResponse") || (null != n ? p(n, "samlResponse") : n)) ? o : u) === c ? o.call(l, {
                        name: "samlResponse",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 9,
                                column: 78
                            },
                            end: {
                                line: 9,
                                column: 94
                            }
                        }
                    }) : o) + '">\n            <input id="RelayState"   name="RelayState"   type="hidden" value="' + s(typeof (o = null != (o = p(t, "relayState") || (null != n ? p(n, "relayState") : n)) ? o : u) === c ? o.call(l, {
                        name: "relayState",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 10,
                                column: 78
                            },
                            end: {
                                line: 10,
                                column: 92
                            }
                        }
                    }) : o) + '">\n            <input type="submit" value="' + s(typeof (o = null != (o = p(t, "returnLinkText") || (null != n ? p(n, "returnLinkText") : n)) ? o : u) === c ? o.call(l, {
                        name: "returnLinkText",
                        hash: {},
                        data: i,
                        loc: {
                            start: {
                                line: 11,
                                column: 40
                            },
                            end: {
                                line: 11,
                                column: 58
                            }
                        }
                    }) : o) + '" class="ds-action ds-action__external corsSubmitLink">\n                <svg aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="ds-action__icon ds-icon ds-icon--small ds-icon--action" height="32" width="32"><path d="M19.748 16l-7.455 7.293a.998.998 0 000 1.414.997.997 0 001.414 0l8-8.002a.997.997 0 000-1.414l-8-7.998a.997.997 0 00-1.414 0C12.094 7.492 12 7.646 12 8s.101.515.293.707L19.748 16z" fill-rule="evenodd"></path></svg>\n            </input>\n        </form>\n    </div>\n</div>\n'
                },
                useData: !0
            })
        }
    }, [[159, 1, 2]]]).default
}
));

