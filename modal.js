define(["exports", "react", "react-dom", "op/opux/v3/opux-core"], (function(e, t, o, n) {
    "use strict";
    function r(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var a = r(t)
      , l = r(o);
    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                    Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function i(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    function u(e) {
        if (e.__esModule)
            return e;
        var t = Object.defineProperty({}, "__esModule", {
            value: !0
        });
        return Object.keys(e).forEach((function(o) {
            var n = Object.getOwnPropertyDescriptor(e, o);
            Object.defineProperty(t, o, n.get ? n : {
                enumerable: !0,
                get: function() {
                    return e[o]
                }
            })
        }
        )),
        t
    }
    var c = {
        exports: {}
    }
      , f = {}
      , d = {
        exports: {}
    };
    function p() {}
    function m() {}
    m.resetWarningCache = p;
    d.exports = function() {
        function e(e, t, o, n, r, a) {
            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l.name = "Invariant Violation",
                l
            }
        }
        function t() {
            return e
        }
        e.isRequired = e;
        var o = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: m,
            resetWarningCache: p
        };
        return o.PropTypes = o,
        o
    }();
    var h = {
        exports: {}
    }
      , v = {}
      , y = {
        exports: {}
    };
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return [].slice.call(e.querySelectorAll("*"), 0).filter(a)
        }
        ;
        var o = /input|select|textarea|button|object/;
        function n(e) {
            var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
            if (t && !e.innerHTML)
                return !0;
            try {
                var o = window.getComputedStyle(e);
                return t ? "visible" !== o.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0 : "none" == o.getPropertyValue("display")
            } catch (e) {
                return console.warn("Failed to inspect element style"),
                !1
            }
        }
        function r(e, t) {
            var r = e.nodeName.toLowerCase();
            return (o.test(r) && !e.disabled || "a" === r && e.href || t) && function(e) {
                for (var t = e; t && t !== document.body; ) {
                    if (n(t))
                        return !1;
                    t = t.parentNode
                }
                return !0
            }(e)
        }
        function a(e) {
            var t = e.getAttribute("tabindex");
            null === t && (t = void 0);
            var o = isNaN(t);
            return (o || t >= 0) && r(e, !o)
        }
        e.exports = t.default
    }(y, y.exports),
    i(y.exports),
    Object.defineProperty(v, "__esModule", {
        value: !0
    }),
    v.resetState = function() {
        C = []
    }
    ,
    v.log = function() {
        return
    }
    ,
    v.handleBlur = w,
    v.handleFocus = E,
    v.markForFocusLater = function() {
        C.push(document.activeElement)
    }
    ,
    v.returnFocus = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          , t = null;
        try {
            return void (0 !== C.length && (t = C.pop()).focus({
                preventScroll: e
            }))
        } catch (e) {
            console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "))
        }
    }
    ,
    v.popWithoutFocus = function() {
        C.length > 0 && C.pop()
    }
    ,
    v.setupScopedFocus = function(e) {
        g = e,
        window.addEventListener ? (window.addEventListener("blur", w, !1),
        document.addEventListener("focus", E, !0)) : (window.attachEvent("onBlur", w),
        document.attachEvent("onFocus", E))
    }
    ,
    v.teardownScopedFocus = function() {
        g = null,
        window.addEventListener ? (window.removeEventListener("blur", w),
        document.removeEventListener("focus", E)) : (window.detachEvent("onBlur", w),
        document.detachEvent("onFocus", E))
    }
    ;
    var b, O = (b = y.exports) && b.__esModule ? b : {
        default: b
    };
    var C = []
      , g = null
      , _ = !1;
    function w() {
        _ = !0
    }
    function E() {
        if (_) {
            if (_ = !1,
            !g)
                return;
            setTimeout((function() {
                g.contains(document.activeElement) || ((0,
                O.default)(g)[0] || g).focus()
            }
            ), 0)
        }
    }
    var S = {
        exports: {}
    };
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var n = (0,
            o.default)(e);
            if (!n.length)
                return void t.preventDefault();
            var r = void 0
              , a = t.shiftKey
              , l = n[0]
              , s = n[n.length - 1];
            if (e === document.activeElement) {
                if (!a)
                    return;
                r = s
            }
            s !== document.activeElement || a || (r = l);
            l === document.activeElement && a && (r = s);
            if (r)
                return t.preventDefault(),
                void r.focus();
            var i = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
            if (null == i || "Chrome" == i[1] || null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent))
                return;
            var u = n.indexOf(document.activeElement);
            u > -1 && (u += a ? -1 : 1);
            if (void 0 === (r = n[u]))
                return t.preventDefault(),
                void (r = a ? s : l).focus();
            t.preventDefault(),
            r.focus()
        }
        ;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(y.exports);
        e.exports = t.default
    }(S, S.exports),
    i(S.exports);
    var M, N, P, T = {}, j = function() {}, R = {}, A = {
        exports: {}
    };
    M = A,
    N = !("undefined" == typeof window || !window.document || !window.document.createElement),
    P = {
        canUseDOM: N,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: N && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: N && !!window.screen
    },
    M.exports ? M.exports = P : window.ExecutionEnvironment = P,
    Object.defineProperty(R, "__esModule", {
        value: !0
    }),
    R.canUseDOM = R.SafeNodeList = R.SafeHTMLCollection = void 0;
    var x = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(A.exports).default
      , D = x.canUseDOM ? window.HTMLElement : {};
    R.SafeHTMLCollection = x.canUseDOM ? window.HTMLCollection : {},
    R.SafeNodeList = x.canUseDOM ? window.NodeList : {},
    R.canUseDOM = x.canUseDOM,
    R.default = D,
    Object.defineProperty(T, "__esModule", {
        value: !0
    }),
    T.resetState = function() {
        U && (U.removeAttribute ? U.removeAttribute("aria-hidden") : null != U.length ? U.forEach((function(e) {
            return e.removeAttribute("aria-hidden")
        }
        )) : document.querySelectorAll(U).forEach((function(e) {
            return e.removeAttribute("aria-hidden")
        }
        )));
        U = null
    }
    ,
    T.log = function() {
        return
    }
    ,
    T.assertNodeList = L,
    T.setElement = function(e) {
        var t = e;
        if ("string" == typeof t && k.canUseDOM) {
            var o = document.querySelectorAll(t);
            L(o, t),
            t = o
        }
        return U = t || U
    }
    ,
    T.validateElement = W,
    T.hide = function(e) {
        var t = !0
          , o = !1
          , n = void 0;
        try {
            for (var r, a = W(e)[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                r.value.setAttribute("aria-hidden", "true")
            }
        } catch (e) {
            o = !0,
            n = e
        } finally {
            try {
                !t && a.return && a.return()
            } finally {
                if (o)
                    throw n
            }
        }
    }
    ,
    T.show = function(e) {
        var t = !0
          , o = !1
          , n = void 0;
        try {
            for (var r, a = W(e)[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                r.value.removeAttribute("aria-hidden")
            }
        } catch (e) {
            o = !0,
            n = e
        } finally {
            try {
                !t && a.return && a.return()
            } finally {
                if (o)
                    throw n
            }
        }
    }
    ,
    T.documentNotReadyOrSSRTesting = function() {
        U = null
    }
    ;
    var F = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(j)
      , k = R;
    var U = null;
    function L(e, t) {
        if (!e || !e.length)
            throw new Error("react-modal: No elements were found for selector " + t + ".")
    }
    function W(e) {
        var t = e || U;
        return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0,
        F.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")),
        [])
    }
    var I = {};
    Object.defineProperty(I, "__esModule", {
        value: !0
    }),
    I.resetState = function() {
        var e = document.getElementsByTagName("html")[0];
        for (var t in H)
            B(e, H[t]);
        var o = document.body;
        for (var n in q)
            B(o, q[n]);
        H = {},
        q = {}
    }
    ,
    I.log = function() {
        return
    }
    ;
    var H = {}
      , q = {};
    function B(e, t) {
        e.classList.remove(t)
    }
    I.add = function(e, t) {
        return o = e.classList,
        n = "html" == e.nodeName.toLowerCase() ? H : q,
        void t.split(" ").forEach((function(e) {
            !function(e, t) {
                e[t] || (e[t] = 0),
                e[t] += 1
            }(n, e),
            o.add(e)
        }
        ));
        var o, n
    }
    ,
    I.remove = function(e, t) {
        return o = e.classList,
        n = "html" == e.nodeName.toLowerCase() ? H : q,
        void t.split(" ").forEach((function(e) {
            !function(e, t) {
                e[t] && (e[t] -= 1)
            }(n, e),
            0 === n[e] && o.remove(e)
        }
        ));
        var o, n
    }
    ;
    var K = {};
    Object.defineProperty(K, "__esModule", {
        value: !0
    }),
    K.log = function() {
        console.log("portalOpenInstances ----------"),
        console.log(z.openInstances.length),
        z.openInstances.forEach((function(e) {
            return console.log(e)
        }
        )),
        console.log("end portalOpenInstances ----------")
    }
    ,
    K.resetState = function() {
        z = new V
    }
    ;
    var V = function e() {
        var t = this;
        !function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }(this, e),
        this.register = function(e) {
            -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e),
            t.emit("register"))
        }
        ,
        this.deregister = function(e) {
            var o = t.openInstances.indexOf(e);
            -1 !== o && (t.openInstances.splice(o, 1),
            t.emit("deregister"))
        }
        ,
        this.subscribe = function(e) {
            t.subscribers.push(e)
        }
        ,
        this.emit = function(e) {
            t.subscribers.forEach((function(o) {
                return o(e, t.openInstances.slice())
            }
            ))
        }
        ,
        this.openInstances = [],
        this.subscribers = []
    }
      , z = new V;
    K.default = z;
    var Y = {};
    Object.defineProperty(Y, "__esModule", {
        value: !0
    }),
    Y.resetState = function() {
        for (var e = [J, Q], t = 0; t < e.length; t++) {
            var o = e[t];
            o && (o.parentNode && o.parentNode.removeChild(o))
        }
        J = Q = null,
        X = []
    }
    ,
    Y.log = function() {
        console.log("bodyTrap ----------"),
        console.log(X.length);
        for (var e = [J, Q], t = 0; t < e.length; t++) {
            var o = e[t] || {};
            console.log(o.nodeName, o.className, o.id)
        }
        console.log("edn bodyTrap ----------")
    }
    ;
    var G = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(K);
    var J = void 0
      , Q = void 0
      , X = [];
    function Z() {
        0 !== X.length && X[X.length - 1].focusContent()
    }
    function $() {
        var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null != e && this.setState(e)
    }
    function ee(e) {
        this.setState(function(t) {
            var o = this.constructor.getDerivedStateFromProps(e, t);
            return null != o ? o : null
        }
        .bind(this))
    }
    function te(e, t) {
        try {
            var o = this.props
              , n = this.state;
            this.props = e,
            this.state = t,
            this.__reactInternalSnapshotFlag = !0,
            this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(o, n)
        } finally {
            this.props = o,
            this.state = n
        }
    }
    G.default.subscribe((function(e, t) {
        J || Q || ((J = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""),
        J.style.position = "absolute",
        J.style.opacity = "0",
        J.setAttribute("tabindex", "0"),
        J.addEventListener("focus", Z),
        (Q = J.cloneNode()).addEventListener("focus", Z)),
        (X = t).length > 0 ? (document.body.firstChild !== J && document.body.insertBefore(J, document.body.firstChild),
        document.body.lastChild !== Q && document.body.appendChild(Q)) : (J.parentElement && J.parentElement.removeChild(J),
        Q.parentElement && Q.parentElement.removeChild(Q))
    }
    )),
    function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                    Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
        }
          , n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, o, n) {
                return o && e(t.prototype, o),
                n && e(t, n),
                t
            }
        }()
          , l = a.default
          , s = b(d.exports)
          , i = y(v)
          , u = b(S.exports)
          , c = y(T)
          , f = y(I)
          , p = R
          , m = b(p)
          , h = b(K);
        function y(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t.default = e,
            t
        }
        function b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var O = {
            overlay: "ReactModal__Overlay",
            content: "ReactModal__Content"
        }
          , C = 0
          , g = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return o.setOverlayRef = function(e) {
                    o.overlay = e,
                    o.props.overlayRef && o.props.overlayRef(e)
                }
                ,
                o.setContentRef = function(e) {
                    o.content = e,
                    o.props.contentRef && o.props.contentRef(e)
                }
                ,
                o.afterClose = function() {
                    var e = o.props
                      , t = e.appElement
                      , n = e.ariaHideApp
                      , r = e.htmlOpenClassName
                      , a = e.bodyOpenClassName;
                    a && f.remove(document.body, a),
                    r && f.remove(document.getElementsByTagName("html")[0], r),
                    n && C > 0 && 0 === (C -= 1) && c.show(t),
                    o.props.shouldFocusAfterRender && (o.props.shouldReturnFocusAfterClose ? (i.returnFocus(o.props.preventScroll),
                    i.teardownScopedFocus()) : i.popWithoutFocus()),
                    o.props.onAfterClose && o.props.onAfterClose(),
                    h.default.deregister(o)
                }
                ,
                o.open = function() {
                    o.beforeOpen(),
                    o.state.afterOpen && o.state.beforeClose ? (clearTimeout(o.closeTimer),
                    o.setState({
                        beforeClose: !1
                    })) : (o.props.shouldFocusAfterRender && (i.setupScopedFocus(o.node),
                    i.markForFocusLater()),
                    o.setState({
                        isOpen: !0
                    }, (function() {
                        o.openAnimationFrame = requestAnimationFrame((function() {
                            o.setState({
                                afterOpen: !0
                            }),
                            o.props.isOpen && o.props.onAfterOpen && o.props.onAfterOpen({
                                overlayEl: o.overlay,
                                contentEl: o.content
                            })
                        }
                        ))
                    }
                    )))
                }
                ,
                o.close = function() {
                    o.props.closeTimeoutMS > 0 ? o.closeWithTimeout() : o.closeWithoutTimeout()
                }
                ,
                o.focusContent = function() {
                    return o.content && !o.contentHasFocus() && o.content.focus({
                        preventScroll: !0
                    })
                }
                ,
                o.closeWithTimeout = function() {
                    var e = Date.now() + o.props.closeTimeoutMS;
                    o.setState({
                        beforeClose: !0,
                        closesAt: e
                    }, (function() {
                        o.closeTimer = setTimeout(o.closeWithoutTimeout, o.state.closesAt - Date.now())
                    }
                    ))
                }
                ,
                o.closeWithoutTimeout = function() {
                    o.setState({
                        beforeClose: !1,
                        isOpen: !1,
                        afterOpen: !1,
                        closesAt: null
                    }, o.afterClose)
                }
                ,
                o.handleKeyDown = function(e) {
                    9 === e.keyCode && (0,
                    u.default)(o.content, e),
                    o.props.shouldCloseOnEsc && 27 === e.keyCode && (e.stopPropagation(),
                    o.requestClose(e))
                }
                ,
                o.handleOverlayOnClick = function(e) {
                    null === o.shouldClose && (o.shouldClose = !0),
                    o.shouldClose && o.props.shouldCloseOnOverlayClick && (o.ownerHandlesClose() ? o.requestClose(e) : o.focusContent()),
                    o.shouldClose = null
                }
                ,
                o.handleContentOnMouseUp = function() {
                    o.shouldClose = !1
                }
                ,
                o.handleOverlayOnMouseDown = function(e) {
                    o.props.shouldCloseOnOverlayClick || e.target != o.overlay || e.preventDefault()
                }
                ,
                o.handleContentOnClick = function() {
                    o.shouldClose = !1
                }
                ,
                o.handleContentOnMouseDown = function() {
                    o.shouldClose = !1
                }
                ,
                o.requestClose = function(e) {
                    return o.ownerHandlesClose() && o.props.onRequestClose(e)
                }
                ,
                o.ownerHandlesClose = function() {
                    return o.props.onRequestClose
                }
                ,
                o.shouldBeClosed = function() {
                    return !o.state.isOpen && !o.state.beforeClose
                }
                ,
                o.contentHasFocus = function() {
                    return document.activeElement === o.content || o.content.contains(document.activeElement)
                }
                ,
                o.buildClassName = function(e, t) {
                    var r = "object" === (void 0 === t ? "undefined" : n(t)) ? t : {
                        base: O[e],
                        afterOpen: O[e] + "--after-open",
                        beforeClose: O[e] + "--before-close"
                    }
                      , a = r.base;
                    return o.state.afterOpen && (a = a + " " + r.afterOpen),
                    o.state.beforeClose && (a = a + " " + r.beforeClose),
                    "string" == typeof t && t ? a + " " + t : a
                }
                ,
                o.attributesFromObject = function(e, t) {
                    return Object.keys(t).reduce((function(o, n) {
                        return o[e + "-" + n] = t[n],
                        o
                    }
                    ), {})
                }
                ,
                o.state = {
                    afterOpen: !1,
                    beforeClose: !1
                },
                o.shouldClose = null,
                o.moveFromContentToOverlay = null,
                o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            r(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.isOpen && this.open()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(),
                    this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.state.isOpen && this.afterClose(),
                    clearTimeout(this.closeTimer),
                    cancelAnimationFrame(this.openAnimationFrame)
                }
            }, {
                key: "beforeOpen",
                value: function() {
                    var e = this.props
                      , t = e.appElement
                      , o = e.ariaHideApp
                      , n = e.htmlOpenClassName
                      , r = e.bodyOpenClassName;
                    r && f.add(document.body, r),
                    n && f.add(document.getElementsByTagName("html")[0], n),
                    o && (C += 1,
                    c.hide(t)),
                    h.default.register(this)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.id
                      , n = e.className
                      , r = e.overlayClassName
                      , a = e.defaultStyles
                      , l = e.children
                      , s = n ? {} : a.content
                      , i = r ? {} : a.overlay;
                    if (this.shouldBeClosed())
                        return null;
                    var u = {
                        ref: this.setOverlayRef,
                        className: this.buildClassName("overlay", r),
                        style: o({}, i, this.props.style.overlay),
                        onClick: this.handleOverlayOnClick,
                        onMouseDown: this.handleOverlayOnMouseDown
                    }
                      , c = o({
                        id: t,
                        ref: this.setContentRef,
                        style: o({}, s, this.props.style.content),
                        className: this.buildClassName("content", n),
                        tabIndex: "-1",
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleContentOnMouseDown,
                        onMouseUp: this.handleContentOnMouseUp,
                        onClick: this.handleContentOnClick,
                        role: this.props.role,
                        "aria-label": this.props.contentLabel
                    }, this.attributesFromObject("aria", o({
                        modal: !0
                    }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
                        "data-testid": this.props.testId
                    })
                      , f = this.props.contentElement(c, l);
                    return this.props.overlayElement(u, f)
                }
            }]),
            t
        }(l.Component);
        g.defaultProps = {
            style: {
                overlay: {},
                content: {}
            },
            defaultStyles: {}
        },
        g.propTypes = {
            isOpen: s.default.bool.isRequired,
            defaultStyles: s.default.shape({
                content: s.default.object,
                overlay: s.default.object
            }),
            style: s.default.shape({
                content: s.default.object,
                overlay: s.default.object
            }),
            className: s.default.oneOfType([s.default.string, s.default.object]),
            overlayClassName: s.default.oneOfType([s.default.string, s.default.object]),
            bodyOpenClassName: s.default.string,
            htmlOpenClassName: s.default.string,
            ariaHideApp: s.default.bool,
            appElement: s.default.oneOfType([s.default.instanceOf(m.default), s.default.instanceOf(p.SafeHTMLCollection), s.default.instanceOf(p.SafeNodeList), s.default.arrayOf(s.default.instanceOf(m.default))]),
            onAfterOpen: s.default.func,
            onAfterClose: s.default.func,
            onRequestClose: s.default.func,
            closeTimeoutMS: s.default.number,
            shouldFocusAfterRender: s.default.bool,
            shouldCloseOnOverlayClick: s.default.bool,
            shouldReturnFocusAfterClose: s.default.bool,
            preventScroll: s.default.bool,
            role: s.default.string,
            contentLabel: s.default.string,
            aria: s.default.object,
            data: s.default.object,
            children: s.default.node,
            shouldCloseOnEsc: s.default.bool,
            overlayRef: s.default.func,
            contentRef: s.default.func,
            id: s.default.string,
            overlayElement: s.default.func,
            contentElement: s.default.func,
            testId: s.default.string
        },
        t.default = g,
        e.exports = t.default
    }(h, h.exports),
    i(h.exports),
    $.__suppressDeprecationWarning = !0,
    ee.__suppressDeprecationWarning = !0,
    te.__suppressDeprecationWarning = !0;
    var oe = u(Object.freeze({
        __proto__: null,
        polyfill: function(e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent)
                throw new Error("Can only polyfill class components");
            if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate)
                return e;
            var o = null
              , n = null
              , r = null;
            if ("function" == typeof t.componentWillMount ? o = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (o = "UNSAFE_componentWillMount"),
            "function" == typeof t.componentWillReceiveProps ? n = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (n = "UNSAFE_componentWillReceiveProps"),
            "function" == typeof t.componentWillUpdate ? r = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (r = "UNSAFE_componentWillUpdate"),
            null !== o || null !== n || null !== r) {
                var a = e.displayName || e.name
                  , l = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + a + " uses " + l + " but also contains the following legacy lifecycles:" + (null !== o ? "\n  " + o : "") + (null !== n ? "\n  " + n : "") + (null !== r ? "\n  " + r : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
            }
            if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = $,
            t.componentWillReceiveProps = ee),
            "function" == typeof t.getSnapshotBeforeUpdate) {
                if ("function" != typeof t.componentDidUpdate)
                    throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                t.componentWillUpdate = te;
                var s = t.componentDidUpdate;
                t.componentDidUpdate = function(e, t, o) {
                    var n = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : o;
                    s.call(this, e, t, n)
                }
            }
            return e
        }
    }));
    Object.defineProperty(f, "__esModule", {
        value: !0
    }),
    f.bodyOpenClassName = f.portalClassName = void 0;
    var ne = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
        }
        return e
    }
      , re = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , ae = a.default
      , le = me(ae)
      , se = me(l.default)
      , ie = me(d.exports)
      , ue = me(h.exports)
      , ce = function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t.default = e,
        t
    }(T)
      , fe = R
      , de = me(fe)
      , pe = oe;
    function me(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function he(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function ve(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var ye = f.portalClassName = "ReactModalPortal"
      , be = f.bodyOpenClassName = "ReactModal__Body--open"
      , Oe = fe.canUseDOM && void 0 !== se.default.createPortal
      , Ce = function(e) {
        return document.createElement(e)
    }
      , ge = function() {
        return Oe ? se.default.createPortal : se.default.unstable_renderSubtreeIntoContainer
    };
    function _e(e) {
        return e()
    }
    var we = function(e) {
        function t() {
            var e, o, n;
            he(this, t);
            for (var r = arguments.length, a = Array(r), l = 0; l < r; l++)
                a[l] = arguments[l];
            return o = n = ve(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))),
            n.removePortal = function() {
                !Oe && se.default.unmountComponentAtNode(n.node);
                var e = _e(n.props.parentSelector);
                e && e.contains(n.node) ? e.removeChild(n.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')
            }
            ,
            n.portalRef = function(e) {
                n.portal = e
            }
            ,
            n.renderPortal = function(e) {
                var o = ge()(n, le.default.createElement(ue.default, ne({
                    defaultStyles: t.defaultStyles
                }, e)), n.node);
                n.portalRef(o)
            }
            ,
            ve(n, o)
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e),
        re(t, [{
            key: "componentDidMount",
            value: function() {
                fe.canUseDOM && (Oe || (this.node = Ce("div")),
                this.node.className = this.props.portalClassName,
                _e(this.props.parentSelector).appendChild(this.node),
                !Oe && this.renderPortal(this.props))
            }
        }, {
            key: "getSnapshotBeforeUpdate",
            value: function(e) {
                return {
                    prevParent: _e(e.parentSelector),
                    nextParent: _e(this.props.parentSelector)
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t, o) {
                if (fe.canUseDOM) {
                    var n = this.props
                      , r = n.isOpen
                      , a = n.portalClassName;
                    e.portalClassName !== a && (this.node.className = a);
                    var l = o.prevParent
                      , s = o.nextParent;
                    s !== l && (l.removeChild(this.node),
                    s.appendChild(this.node)),
                    (e.isOpen || r) && !Oe && this.renderPortal(this.props)
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (fe.canUseDOM && this.node && this.portal) {
                    var e = this.portal.state
                      , t = Date.now()
                      , o = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                    o ? (e.beforeClose || this.portal.closeWithTimeout(),
                    setTimeout(this.removePortal, o - t)) : this.removePortal()
                }
            }
        }, {
            key: "render",
            value: function() {
                return fe.canUseDOM && Oe ? (!this.node && Oe && (this.node = Ce("div")),
                ge()(le.default.createElement(ue.default, ne({
                    ref: this.portalRef,
                    defaultStyles: t.defaultStyles
                }, this.props)), this.node)) : null
            }
        }], [{
            key: "setAppElement",
            value: function(e) {
                ce.setElement(e)
            }
        }]),
        t
    }(ae.Component);
    we.propTypes = {
        isOpen: ie.default.bool.isRequired,
        style: ie.default.shape({
            content: ie.default.object,
            overlay: ie.default.object
        }),
        portalClassName: ie.default.string,
        bodyOpenClassName: ie.default.string,
        htmlOpenClassName: ie.default.string,
        className: ie.default.oneOfType([ie.default.string, ie.default.shape({
            base: ie.default.string.isRequired,
            afterOpen: ie.default.string.isRequired,
            beforeClose: ie.default.string.isRequired
        })]),
        overlayClassName: ie.default.oneOfType([ie.default.string, ie.default.shape({
            base: ie.default.string.isRequired,
            afterOpen: ie.default.string.isRequired,
            beforeClose: ie.default.string.isRequired
        })]),
        appElement: ie.default.oneOfType([ie.default.instanceOf(de.default), ie.default.instanceOf(fe.SafeHTMLCollection), ie.default.instanceOf(fe.SafeNodeList), ie.default.arrayOf(ie.default.instanceOf(de.default))]),
        onAfterOpen: ie.default.func,
        onRequestClose: ie.default.func,
        closeTimeoutMS: ie.default.number,
        ariaHideApp: ie.default.bool,
        shouldFocusAfterRender: ie.default.bool,
        shouldCloseOnOverlayClick: ie.default.bool,
        shouldReturnFocusAfterClose: ie.default.bool,
        preventScroll: ie.default.bool,
        parentSelector: ie.default.func,
        aria: ie.default.object,
        data: ie.default.object,
        role: ie.default.string,
        contentLabel: ie.default.string,
        shouldCloseOnEsc: ie.default.bool,
        overlayRef: ie.default.func,
        contentRef: ie.default.func,
        id: ie.default.string,
        overlayElement: ie.default.func,
        contentElement: ie.default.func
    },
    we.defaultProps = {
        isOpen: !1,
        portalClassName: ye,
        bodyOpenClassName: be,
        role: "dialog",
        ariaHideApp: !0,
        closeTimeoutMS: 0,
        shouldFocusAfterRender: !0,
        shouldCloseOnEsc: !0,
        shouldCloseOnOverlayClick: !0,
        shouldReturnFocusAfterClose: !0,
        preventScroll: !1,
        parentSelector: function() {
            return document.body
        },
        overlayElement: function(e, t) {
            return le.default.createElement("div", e, t)
        },
        contentElement: function(e, t) {
            return le.default.createElement("div", e, t)
        }
    },
    we.defaultStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px"
        }
    },
    (0,
    pe.polyfill)(we),
    f.default = we,
    function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(f);
        t.default = o.default,
        e.exports = t.default
    }(c, c.exports);
    var Ee = i(c.exports);
    const Se = e=>a.default.createElement(n.Icon, s({}, e, {
        path: "m16 14.727 7.864-7.864a.897.897 0 0 1 1.272 0 .897.897 0 0 1 0 1.273L17.273 16l7.863 7.863a.898.898 0 0 1 0 1.273.897.897 0 0 1-1.272 0L16 17.272l-7.864 7.864a.897.897 0 0 1-1.272 0 .897.897 0 0 1 0-1.273L14.727 16 6.864 8.136a.897.897 0 0 1 0-1.273.897.897 0 0 1 1.272 0L16 14.727z"
    }))
      , Me = {
        en: {
            close: "close"
        },
        fi: {
            close: "sulje"
        },
        sv: {
            close: "stäng"
        }
    }
      , Ne = t.forwardRef(((e,o)=>{
        let {appElement: r, aria: l, children: i, className: u, footer: c, id: f, isOpen: d, large: p, onUpdate: m, shouldCloseOnOverlayClick: h=!1, showCloseButton: v, style: y, title: b, titleProps: O={}, titleTagName: C="h2"} = e
          , g = function(e, t) {
            if (null == e)
                return {};
            var o, n, r = {}, a = Object.keys(e);
            for (n = 0; n < a.length; n++)
                o = a[n],
                t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r
        }(e, ["appElement", "aria", "children", "className", "footer", "id", "isOpen", "large", "onUpdate", "shouldCloseOnOverlayClick", "showCloseButton", "style", "title", "titleProps", "titleTagName"]);
        const _ = t.useRef()
          , [w] = t.useState((()=>n.uniqueId("ds-modal-")))
          , [E,S] = t.useState(!!d)
          , M = n.useLocale()
          , N = f || w
          , P = O.id || N + "_title";
        return t.useImperativeHandle(o, (()=>({
            boxRef: _,
            close: ()=>S(!1),
            isOpen: ()=>E,
            open: ()=>S(!0)
        }))),
        t.useEffect((()=>{
            "boolean" == typeof d && S(d)
        }
        ), [d]),
        t.useEffect((()=>{
            m && m({
                open: E
            })
        }
        ), [E]),
        r && Ee.setAppElement(r),
        a.default.createElement(Ee, s({
            aria: l && l.labelledby ? l : s({}, l, {
                labelledby: b ? P : void 0
            }),
            bodyOpenClassName: "ds-modal--open",
            className: n.classNames("ds-modal", u, {
                "ds-modal--large": p
            }),
            closeTimeoutMS: 250,
            id: N,
            isOpen: E,
            onRequestClose: ()=>S(!1),
            overlayClassName: {
                afterOpen: "ds-modal__overlay--enter",
                base: p ? "ds-modal__overlay ds-modal__overlay--large" : "ds-modal__overlay",
                beforeClose: "ds-modal__overlay--exit"
            },
            ref: _,
            shouldCloseOnOverlayClick: h,
            style: y
        }, g), a.default.createElement("header", {
            className: "ds-modal__header"
        }, b && a.default.createElement(C, s({}, O, {
            className: n.classNames("ds-modal__title", O.className),
            id: P
        }), b), v && a.default.createElement(n.Button, {
            className: "ds-modal__close-button",
            ghost: !0,
            icon: Se,
            iconLabel: Me[M].close,
            iconProps: {
                type: "default"
            },
            onClick: e=>{
                e.preventDefault(),
                S(!1)
            }
            ,
            onKeyDown: e=>{
                " " !== e.key && "Enter" !== e.key || (e.preventDefault(),
                S(!1))
            }
            ,
            size: "large",
            tabIndex: "0"
        })), i && a.default.createElement("div", {
            className: "ds-modal__body"
        }, i), c && a.default.createElement("div", {
            className: "ds-modal__footer"
        }, c))
    }
    ));
    Ne.displayName = "Modal",
    e.Modal = Ne,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));

