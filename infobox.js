define(["exports", "react", "op/opux/v3/opux-core", "popperjs/core", "react-dom"], (function(e, t, n, o, s) {
    "use strict";
    function a(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var r = a(t)
      , i = a(s);
    function l() {
        return (l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function c(e, t) {
        if (null == e)
            return {};
        var n, o, s = {}, a = Object.keys(e);
        for (o = 0; o < a.length; o++)
            n = a[o],
            t.indexOf(n) >= 0 || (s[n] = e[n]);
        return s
    }
    function u() {}
    function d() {}
    d.resetWarningCache = u;
    !function() {
        function e(e, t, n, o, s, a) {
            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                var r = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw r.name = "Invariant Violation",
                r
            }
        }
        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
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
            checkPropTypes: d,
            resetWarningCache: u
        };
        n.PropTypes = n
    }();
    const p = e=>r.default.createElement(n.Icon, l({}, e, {
        path: "M16 12.391a1.41 1.41 0 1 0-.001-2.822A1.41 1.41 0 0 0 16 12.391m.279 1.61a1 1 0 0 1 1 .999v5.05L18 20a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2l1.274.05v-4.098l-.668.049a1 1 0 1 1 0-2h1.673zM6 6v20h20V6H6zm0-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
    }))
      , f = e=>r.default.createElement(n.Icon, l({}, e, {
        path: "m16 14.727 7.864-7.864a.897.897 0 0 1 1.272 0 .897.897 0 0 1 0 1.273L17.273 16l7.863 7.863a.898.898 0 0 1 0 1.273.897.897 0 0 1-1.272 0L16 17.272l-7.864 7.864a.897.897 0 0 1-1.272 0 .897.897 0 0 1 0-1.273L14.727 16 6.864 8.136a.897.897 0 0 1 0-1.273.897.897 0 0 1 1.272 0L16 14.727z"
    }));
    var m = {
        en: {
            close: "close",
            info: "more information",
            open: "open"
        },
        fi: {
            close: "sulje",
            info: "lisätietoja",
            open: "avaa"
        },
        sv: {
            close: "stäng",
            info: "tilläggsuppgifter",
            open: "öppna"
        }
    };
    function E(e) {
        let {children: t, className: o, domRef: s, fluid: a, onClose: i, onCloseIconKeydown: u, open: d, showCloseButton: p, useBoxShadow: E} = e
          , h = c(e, ["children", "className", "domRef", "fluid", "onClose", "onCloseIconKeydown", "open", "showCloseButton", "useBoxShadow"]);
        const x = n.useLocale()
          , v = n.classNames("ds-info-box", o, {
            "ds-info-box--box-shadow": E,
            "ds-info-box--fluid": a,
            "ds-info-box--open": d
        });
        return r.default.createElement("div", l({}, h, {
            className: v,
            ref: s,
            role: "tooltip"
        }), r.default.createElement("div", {
            "data-popper-arrow": "true"
        }), r.default.createElement("div", null, t), p && r.default.createElement(n.Button, {
            className: "ds-info-box__close",
            compact: !0,
            ghost: !0,
            icon: f,
            iconLabel: m[x].close,
            iconProps: {
                type: "default"
            },
            onClick: i,
            onKeyDown: u,
            tabIndex: "0"
        }))
    }
    function h(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
    function x(e, t) {
        return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)","g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    var v = !1
      , b = r.default.createContext(null)
      , g = "unmounted"
      , C = "exited"
      , y = "entering"
      , N = "entered"
      , w = "exiting"
      , S = function(e) {
        function t(t, n) {
            var o;
            o = e.call(this, t, n) || this;
            var s, a = n && !n.isMounting ? t.enter : t.appear;
            return o.appearStatus = null,
            t.in ? a ? (s = C,
            o.appearStatus = y) : s = N : s = t.unmountOnExit || t.mountOnEnter ? g : C,
            o.state = {
                status: s
            },
            o.nextCallback = null,
            o
        }
        h(t, e),
        t.getDerivedStateFromProps = function(e, t) {
            return e.in && t.status === g ? {
                status: C
            } : null
        }
        ;
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }
        ,
        n.componentDidUpdate = function(e) {
            var t = null;
            if (e !== this.props) {
                var n = this.state.status;
                this.props.in ? n !== y && n !== N && (t = y) : n !== y && n !== N || (t = w)
            }
            this.updateStatus(!1, t)
        }
        ,
        n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }
        ,
        n.getTimeouts = function() {
            var e, t, n, o = this.props.timeout;
            return e = t = n = o,
            null != o && "number" != typeof o && (e = o.exit,
            t = o.enter,
            n = void 0 !== o.appear ? o.appear : t),
            {
                exit: e,
                enter: t,
                appear: n
            }
        }
        ,
        n.updateStatus = function(e, t) {
            void 0 === e && (e = !1),
            null !== t ? (this.cancelNextCallback(),
            t === y ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === C && this.setState({
                status: g
            })
        }
        ,
        n.performEnter = function(e) {
            var t = this
              , n = this.props.enter
              , o = this.context ? this.context.isMounting : e
              , s = this.props.nodeRef ? [o] : [i.default.findDOMNode(this), o]
              , a = s[0]
              , r = s[1]
              , l = this.getTimeouts()
              , c = o ? l.appear : l.enter;
            !e && !n || v ? this.safeSetState({
                status: N
            }, (function() {
                t.props.onEntered(a)
            }
            )) : (this.props.onEnter(a, r),
            this.safeSetState({
                status: y
            }, (function() {
                t.props.onEntering(a, r),
                t.onTransitionEnd(c, (function() {
                    t.safeSetState({
                        status: N
                    }, (function() {
                        t.props.onEntered(a, r)
                    }
                    ))
                }
                ))
            }
            )))
        }
        ,
        n.performExit = function() {
            var e = this
              , t = this.props.exit
              , n = this.getTimeouts()
              , o = this.props.nodeRef ? void 0 : i.default.findDOMNode(this);
            t && !v ? (this.props.onExit(o),
            this.safeSetState({
                status: w
            }, (function() {
                e.props.onExiting(o),
                e.onTransitionEnd(n.exit, (function() {
                    e.safeSetState({
                        status: C
                    }, (function() {
                        e.props.onExited(o)
                    }
                    ))
                }
                ))
            }
            ))) : this.safeSetState({
                status: C
            }, (function() {
                e.props.onExited(o)
            }
            ))
        }
        ,
        n.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(),
            this.nextCallback = null)
        }
        ,
        n.safeSetState = function(e, t) {
            t = this.setNextCallback(t),
            this.setState(e, t)
        }
        ,
        n.setNextCallback = function(e) {
            var t = this
              , n = !0;
            return this.nextCallback = function(o) {
                n && (n = !1,
                t.nextCallback = null,
                e(o))
            }
            ,
            this.nextCallback.cancel = function() {
                n = !1
            }
            ,
            this.nextCallback
        }
        ,
        n.onTransitionEnd = function(e, t) {
            this.setNextCallback(t);
            var n = this.props.nodeRef ? this.props.nodeRef.current : i.default.findDOMNode(this)
              , o = null == e && !this.props.addEndListener;
            if (n && !o) {
                if (this.props.addEndListener) {
                    var s = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback]
                      , a = s[0]
                      , r = s[1];
                    this.props.addEndListener(a, r)
                }
                null != e && setTimeout(this.nextCallback, e)
            } else
                setTimeout(this.nextCallback, 0)
        }
        ,
        n.render = function() {
            var e = this.state.status;
            if (e === g)
                return null;
            var t = this.props
              , n = t.children;
            t.in,
            t.mountOnEnter,
            t.unmountOnExit,
            t.appear,
            t.enter,
            t.exit,
            t.timeout,
            t.addEndListener,
            t.onEnter,
            t.onEntering,
            t.onEntered,
            t.onExit,
            t.onExiting,
            t.onExited,
            t.nodeRef;
            var o = c(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return r.default.createElement(b.Provider, {
                value: null
            }, "function" == typeof n ? n(e, o) : r.default.cloneElement(r.default.Children.only(n), o))
        }
        ,
        t
    }(r.default.Component);
    function k() {}
    S.contextType = b,
    S.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: k,
        onEntering: k,
        onEntered: k,
        onExit: k,
        onExiting: k,
        onExited: k
    },
    S.UNMOUNTED = g,
    S.EXITED = C,
    S.ENTERING = y,
    S.ENTERED = N,
    S.EXITING = w;
    var O = function(e, t) {
        return e && t && t.split(" ").forEach((function(t) {
            return o = t,
            void ((n = e).classList ? n.classList.add(o) : function(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }(n, o) || ("string" == typeof n.className ? n.className = n.className + " " + o : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + o)));
            var n, o
        }
        ))
    }
      , R = function(e, t) {
        return e && t && t.split(" ").forEach((function(t) {
            return o = t,
            void ((n = e).classList ? n.classList.remove(o) : "string" == typeof n.className ? n.className = x(n.className, o) : n.setAttribute("class", x(n.className && n.className.baseVal || "", o)));
            var n, o
        }
        ))
    }
      , P = function(e) {
        function t() {
            for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
                o[s] = arguments[s];
            return (t = e.call.apply(e, [this].concat(o)) || this).appliedClasses = {
                appear: {},
                enter: {},
                exit: {}
            },
            t.onEnter = function(e, n) {
                var o = t.resolveArguments(e, n)
                  , s = o[0]
                  , a = o[1];
                t.removeClasses(s, "exit"),
                t.addClass(s, a ? "appear" : "enter", "base"),
                t.props.onEnter && t.props.onEnter(e, n)
            }
            ,
            t.onEntering = function(e, n) {
                var o = t.resolveArguments(e, n)
                  , s = o[0]
                  , a = o[1] ? "appear" : "enter";
                t.addClass(s, a, "active"),
                t.props.onEntering && t.props.onEntering(e, n)
            }
            ,
            t.onEntered = function(e, n) {
                var o = t.resolveArguments(e, n)
                  , s = o[0]
                  , a = o[1] ? "appear" : "enter";
                t.removeClasses(s, a),
                t.addClass(s, a, "done"),
                t.props.onEntered && t.props.onEntered(e, n)
            }
            ,
            t.onExit = function(e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"),
                t.removeClasses(n, "enter"),
                t.addClass(n, "exit", "base"),
                t.props.onExit && t.props.onExit(e)
            }
            ,
            t.onExiting = function(e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"),
                t.props.onExiting && t.props.onExiting(e)
            }
            ,
            t.onExited = function(e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"),
                t.addClass(n, "exit", "done"),
                t.props.onExited && t.props.onExited(e)
            }
            ,
            t.resolveArguments = function(e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
            }
            ,
            t.getClassNames = function(e) {
                var n = t.props.classNames
                  , o = "string" == typeof n
                  , s = o ? "" + (o && n ? n + "-" : "") + e : n[e];
                return {
                    baseClassName: s,
                    activeClassName: o ? s + "-active" : n[e + "Active"],
                    doneClassName: o ? s + "-done" : n[e + "Done"]
                }
            }
            ,
            t
        }
        h(t, e);
        var n = t.prototype;
        return n.addClass = function(e, t, n) {
            var o = this.getClassNames(t)[n + "ClassName"]
              , s = this.getClassNames("enter").doneClassName;
            "appear" === t && "done" === n && s && (o += " " + s),
            "active" === n && e && e.scrollTop,
            o && (this.appliedClasses[t][n] = o,
            O(e, o))
        }
        ,
        n.removeClasses = function(e, t) {
            var n = this.appliedClasses[t]
              , o = n.base
              , s = n.active
              , a = n.done;
            this.appliedClasses[t] = {},
            o && R(e, o),
            s && R(e, s),
            a && R(e, a)
        }
        ,
        n.render = function() {
            var e = this.props;
            e.classNames;
            var t = c(e, ["classNames"]);
            return r.default.createElement(S, l({}, t, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited
            }))
        }
        ,
        t
    }(r.default.Component);
    function T(e) {
        let {className: t, disabled: o, domRef: s, icon: a, iconProps: i, interactiveContent: u, label: d} = e
          , p = c(e, ["className", "disabled", "domRef", "icon", "iconProps", "interactiveContent", "label"]);
        const f = n.useLocale()
          , E = n.classNames("ds-info-box-reference", t);
        return r.default.createElement(n.Button, l({
            className: E,
            compact: !0,
            disabled: o,
            ghost: !0,
            icon: a,
            iconLabel: d || (u ? m[f].open : m[f].info),
            iconProps: l({
                size: "default",
                type: o ? "disabled" : "default"
            }, i),
            ref: s,
            tabIndex: o ? void 0 : "0",
            type: "button"
        }, p))
    }
    function L(e) {
        let {boxId: n, icon: o, iconProps: s, interactiveContent: a, onToggle: i, open: u, referenceElement: d, srcRef: p} = e
          , f = c(e, ["boxId", "icon", "iconProps", "interactiveContent", "onToggle", "open", "referenceElement", "srcRef"]);
        const m = e=>{
            e.preventDefault(),
            i()
        }
        ;
        function E(e) {
            (" " === e.key || "Enter" === e.key || "Escape" === e.key && u) && (e.preventDefault(),
            i())
        }
        const h = a ? {
            "aria-controls": n,
            "aria-expanded": u
        } : {
            "aria-describedby": n
        };
        return d ? r.default.isValidElement(d) ? t.cloneElement(d, l({}, h, {
            onClick: m,
            onKeyDown: E,
            ref: e=>{
                p.current = e;
                const t = d.ref;
                "function" == typeof t ? t(e) : t && (t.current = e)
            }
        }, f)) : null : r.default.createElement(T, l({}, h, {
            domRef: p,
            icon: o,
            iconProps: s,
            interactiveContent: a,
            onClick: m,
            onKeyDown: E
        }, f))
    }
    function I({appElement: e, children: n}) {
        const o = t.useRef("undefined" == typeof document ? null : document.createElement("div"))
          , a = void 0 === e ? document.body : e;
        return t.useEffect((()=>(a.appendChild(o.current),
        ()=>a.removeChild(o.current))), []),
        o.current ? s.createPortal(n, o.current) : null
    }
    function D(e, n, o) {
        const s = ["a[href]:not([tabindex='-1'])", "area[href]:not([tabindex='-1'])", "input:not([disabled]):not([tabindex='-1'])", "select:not([disabled]):not([tabindex='-1'])", "textarea:not([disabled]):not([tabindex='-1'])", "button:not([disabled]):not([tabindex='-1'])", "iframe:not([tabindex='-1'])", "[tabindex]:not([tabindex='-1'])", "[contentEditable=true]:not([tabindex='-1'])"].join(",");
        const a = e.current
          , r = "undefined" != typeof window && void 0 !== window.document ? function(e, t=document) {
            const n = Array.from(t.querySelectorAll(s))
              , o = n.indexOf(e);
            return o > -1 ? n[o + 1] || n[0] : void 0
        }(a) : void 0
          , i = n.current
          , l = i ? Array.from(i.querySelectorAll(s)) : []
          , c = l[0]
          , u = l[l.length - 1];
        t.useEffect((()=>{
            function e(e) {
                if ("Tab" === e.key) {
                    const t = function(e, t) {
                        if (t) {
                            if (e === r)
                                return u;
                            if (e === c)
                                return a
                        } else {
                            if (e === a)
                                return c;
                            if (e === u)
                                return r
                        }
                    }(e.target, e.shiftKey);
                    t && (e.preventDefault(),
                    t.focus())
                }
            }
            return o && document.addEventListener("keydown", e, !0),
            ()=>document.removeEventListener("keydown", e, !0)
        }
        ), [e, n, o])
    }
    P.defaultProps = {
        classNames: ""
    };
    var B = t.forwardRef((function(e, s) {
        let {appElement: a, boxProps: u, children: d, onUpdate: p, placement: f, popperOptions: m={}, referenceElement: h, showCloseButton: x, useBoxShadow: v} = e
          , b = c(e, ["appElement", "boxProps", "children", "onUpdate", "placement", "popperOptions", "referenceElement", "showCloseButton", "useBoxShadow"]);
        const g = t.useRef()
          , C = t.useRef()
          , y = t.useRef()
          , [N] = t.useState((()=>n.uniqueId("ds-ib-")))
          , w = u.id || N
          , [S,k] = t.useState(!1)
          , O = n.usePrevious(S)
          , R = "bottom" === f || "top" === f ? 0 : 12
          , T = "left" === f || "right" === f ? 12 : 0
          , B = {
            bottom: R,
            left: T,
            right: T,
            top: R
        };
        t.useImperativeHandle(s, (()=>({
            boxRef: C,
            close: ()=>k(!1),
            isOpen: ()=>S,
            open: ()=>!S && k(!0)
        })));
        const A = ()=>h instanceof Element ? h : g.current && i.default.findDOMNode(g.current);
        return t.useEffect((()=>{
            const {modifiers: e=[]} = m
              , t = c(m, ["modifiers"]);
            return y.current = o.createPopper(A(), C.current, l({
                modifiers: [{
                    name: "computeStyles",
                    options: {
                        gpuAcceleration: !1
                    }
                }, {
                    name: "arrow",
                    options: {
                        padding: B
                    }
                }, ...e],
                placement: f
            }, t)),
            ()=>{
                y.current.destroy(),
                y.current = null
            }
        }
        ), [f, m, h]),
        t.useEffect((()=>{
            y.current && y.current.update()
        }
        )),
        t.useEffect((()=>{
            function e(e) {
                const t = C.current;
                if (t && t.contains(e.target))
                    return;
                const n = A();
                n && n.contains(e.target) && (e.preventDefault(),
                e.stopPropagation(),
                document.activeElement === n && n.blur()),
                k(!1)
            }
            return p && p({
                open: S
            }),
            O && !S && g.current.focus({
                preventScroll: !0
            }),
            S && document.addEventListener("click", e, !0),
            ()=>document.removeEventListener("click", e, !0)
        }
        ), [S]),
        D(g, C, S),
        r.default.createElement(r.default.Fragment, null, r.default.createElement(L, l({
            boxId: w,
            onToggle: ()=>k((e=>!e)),
            open: S,
            referenceElement: h,
            srcRef: g
        }, b)), r.default.createElement(I, {
            appElement: a
        }, r.default.createElement(P, {
            classNames: {
                enter: "ds-info-box--enter",
                enterActive: "ds-info-box--enter-active",
                exit: "ds-info-box--exit",
                exitActive: "ds-info-box--exit-active"
            },
            in: S,
            timeout: 250
        }, r.default.createElement(E, l({
            tabIndex: "0"
        }, u, {
            domRef: C,
            id: w,
            onClose: ()=>k(!1),
            onCloseIconKeydown: e=>{
                " " !== e.key && "Enter" !== e.key && "Escape" !== e.key || (e.preventDefault(),
                k(!1))
            }
            ,
            onKeyDown: e=>{
                "Escape" === e.key && k(!1)
            }
            ,
            open: S,
            showCloseButton: x,
            useBoxShadow: v
        }), d))))
    }
    ));
    const A = (()=>{
        if ("undefined" == typeof document)
            return !1;
        const e = document.createElement("a");
        return e.style.cssText = "filter:drop-shadow(0 0)",
        !!e.style.length && (void 0 === document.documentMode || document.documentMode > 9)
    }
    )()
      , _ = t.forwardRef(((e,t)=>{
        let {boxProps: n={}, children: o, disabled: s=!1, flat: a=!1, fluid: i, icon: u=p, iconProps: d={}, placement: f="right", showCloseButton: m=!0} = e
          , h = c(e, ["boxProps", "children", "disabled", "flat", "fluid", "icon", "iconProps", "placement", "showCloseButton"]);
        return o ? a ? r.default.createElement(E, l({
            className: "ds-info-box--flat",
            "data-popper-placement": f,
            fluid: i,
            useBoxShadow: !A
        }, n, {
            showCloseButton: !1
        }), o) : r.default.createElement(B, l({}, h, {
            boxProps: l({}, n, {
                fluid: i
            }),
            disabled: s,
            icon: u,
            iconProps: d,
            placement: f,
            ref: t,
            showCloseButton: m,
            useBoxShadow: !A
        }), o) : null
    }
    ));
    _.displayName = "InfoBox",
    e.InfoBox = _,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));

