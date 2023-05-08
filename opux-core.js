define(["exports", "react"], (function(e, t) {
    "use strict";
    function a(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var n = a(t)
      , l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function r(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var s, i = {
        exports: {}
    };
    s = i,
    function() {
        var e = {}.hasOwnProperty;
        function t() {
            for (var a = [], n = 0; n < arguments.length; n++) {
                var l = arguments[n];
                if (l) {
                    var r = typeof l;
                    if ("string" === r || "number" === r)
                        a.push(l);
                    else if (Array.isArray(l) && l.length) {
                        var s = t.apply(null, l);
                        s && a.push(s)
                    } else if ("object" === r)
                        for (var i in l)
                            e.call(l, i) && l[i] && a.push(i)
                }
            }
            return a.join(" ")
        }
        s.exports ? (t.default = t,
        s.exports = t) : window.classNames = t
    }();
    var o = i.exports
      , d = "[object Symbol]"
      , c = "object" == typeof l && l && l.Object === Object && l
      , u = "object" == typeof self && self && self.Object === Object && self
      , f = c || u || Function("return this")()
      , m = Object.prototype
      , p = 0
      , b = m.toString
      , h = f.Symbol
      , g = h ? h.prototype : void 0
      , v = g ? g.toString : void 0;
    function F(e) {
        if ("string" == typeof e)
            return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e
            }(e) && b.call(e) == d
        }(e))
            return v ? v.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t
    }
    var E = function(e) {
        var t, a = ++p;
        return (null == (t = e) ? "" : F(t)) + a
    };
    function y() {
        return (y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function w(e, t) {
        if (null == e)
            return {};
        var a, n, l = {}, r = Object.keys(e);
        for (n = 0; n < r.length; n++)
            a = r[n],
            t.indexOf(a) >= 0 || (l[a] = e[a]);
        return l
    }
    var x = {
        exports: {}
    };
    function C() {}
    function N() {}
    N.resetWarningCache = C;
    x.exports = function() {
        function e(e, t, a, n, l, r) {
            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== r) {
                var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw s.name = "Invariant Violation",
                s
            }
        }
        function t() {
            return e
        }
        e.isRequired = e;
        var a = {
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
            checkPropTypes: N,
            resetWarningCache: C
        };
        return a.PropTypes = a,
        a
    }();
    const _ = e=>n.default.createElement(ht, y({}, e, {
        path: "m16 14.727 7.864-7.864a.897.897 0 0 1 1.272 0 .897.897 0 0 1 0 1.273L17.273 16l7.863 7.863a.898.898 0 0 1 0 1.273.897.897 0 0 1-1.272 0L16 17.272l-7.864 7.864a.897.897 0 0 1-1.272 0 .897.897 0 0 1 0-1.273L14.727 16 6.864 8.136a.897.897 0 0 1 0-1.273.897.897 0 0 1 1.272 0L16 14.727z"
    }))
      , k = e=>n.default.createElement(ht, y({}, e, {
        path: "m16 12.252 7.293 7.455a.998.998 0 0 0 1.414 0 .997.997 0 0 0 0-1.414l-8.002-8a.997.997 0 0 0-1.414 0l-7.998 8a.997.997 0 0 0 0 1.414c.199.199.353.293.707.293s.515-.101.707-.293L16 12.252z"
    }))
      , R = e=>n.default.createElement(ht, y({}, e, {
        path: "m16 19.748-7.293-7.455a.998.998 0 0 0-1.414 0 .997.997 0 0 0 0 1.414l8.002 8a.997.997 0 0 0 1.414 0l7.998-8a.997.997 0 0 0 0-1.414C24.508 12.094 24.354 12 24 12s-.515.101-.707.293L16 19.748z"
    }))
      , L = e=>n.default.createElement(ht, y({}, e, {
        path: "m19.748 16-7.455 7.293a.998.998 0 0 0 0 1.414.997.997 0 0 0 1.414 0l8-8.002a.997.997 0 0 0 0-1.414l-8-7.998a.997.997 0 0 0-1.414 0C12.094 7.492 12 7.646 12 8s.101.515.293.707L19.748 16z"
    }))
      , z = e=>n.default.createElement(ht, y({}, e, {
        path: "M22 22v-4a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4.998a1 1 0 0 1 0 2H10v12h12zm1.91-12.482-6.197 6.299a1 1 0 0 1-1.426-1.403l6.225-6.328-3.466.159a1 1 0 0 1-.092-1.998L24.37 6c.9 0 1.631.73 1.63 1.68l-.255 5.337a1 1 0 1 1-1.998-.095l.164-3.404z"
    }))
      , P = e=>n.default.createElement(ht, y({}, e, {
        path: "m19.748 16-7.455 7.293a.998.998 0 0 0 0 1.414.997.997 0 0 0 1.414 0l8-8.002a.997.997 0 0 0 0-1.414l-8-7.998a.997.997 0 0 0-1.414 0C12.094 7.492 12 7.646 12 8s.101.515.293.707L19.748 16z"
    }))
      , B = e=>n.default.createElement(ht, y({}, e, {
        path: "m12.252 16 7.455-7.293a.998.998 0 0 0 0-1.414.997.997 0 0 0-1.414 0l-8 8.002a.997.997 0 0 0 0 1.414l8 7.998a.997.997 0 0 0 1.414 0c.199-.199.293-.353.293-.707s-.101-.515-.293-.707L12.252 16z"
    }))
      , S = e=>n.default.createElement(ht, y({}, e, {
        path: "M23.753 8.658a1 1 0 0 0-1.417-1.406l-.089.09-7 8.001a1 1 0 0 0-.075 1.22l.075.097 7 7.999a1 1 0 0 0 1.582-1.218l-.076-.1-6.424-7.339 6.424-7.344zM10 7a1 1 0 0 1 .993.883L11 8v16a1 1 0 0 1-1.993.117L9 24V8a1 1 0 0 1 1-1z"
    }))
      , O = e=>n.default.createElement(ht, y({}, e, {
        path: "M16.753 16.66a1 1 0 0 0 .075-1.219l-.075-.098-7-8.001A1 1 0 0 0 8.17 8.559l.076.1 6.425 7.343-6.425 7.34a1 1 0 0 0 .005 1.322l.09.089a1 1 0 0 0 1.322-.005l.089-.09 7-7.998zM22 7a1 1 0 0 1 .993.883L23 8v16a1 1 0 0 1-1.993.117L21 24V8a1 1 0 0 1 1-1z"
    }))
      , T = e=>"en" === e || "fi" === e || "sv" === e;
    function A(e) {
        if (T(e))
            return e;
        if (e && "string" == typeof e) {
            const t = e.toLowerCase().replace(/[^a-z].*/, "");
            if (T(t))
                return t
        }
        return "en"
    }
    const D = t.createContext("en")
      , I = ()=>A(t.useContext(D));
    var M = {
        externalLink: {
            en: "Opens in a new window in another service.",
            fi: "Avataan uuteen ikkunaan ja toiseen palveluun.",
            sv: "Öppnas i nytt fönster i annan tjänst."
        }
    };
    const j = {
        brand: {
            100: "#FFF1E9",
            200: "#FFDDC9",
            300: "#FFBB91",
            400: "#FF9B5E",
            500: "#FF6A10",
            600: "#EE5A00",
            700: "#BD4700",
            800: "#933600",
            900: "#5F2100",
            950: "#250A00"
        },
        neutral: {
            100: "#DFF2FF",
            200: "#B2E1FF",
            300: "#77C7FB",
            400: "#41B5FF",
            500: "#078FE7",
            600: "#0078C6",
            700: "#0065A7",
            800: "#014977",
            900: "#012B46",
            950: "#00121F"
        },
        background: {
            default: "#FFFFFF",
            secondary: "#FAFAFA",
            tertiary: "#F0F0F0",
            disabled: "#FFFFFF",
            overlay: {
                default: "#FFFFFF",
                disabled: "rgba(235, 238, 239, .56)"
            },
            alert: {
                default: "#FFFFFF",
                flash: "#FFFFFF"
            },
            bubble: {
                default: "#FFFFFF"
            },
            button: {
                default: "#FFFFFF",
                primary: "#EE5A00",
                alternate: "#DCDCDC",
                finish: "#00A12F",
                disabled: "#FFFFFF"
            },
            datepicker: {
                default: "#FFFFFF"
            },
            dropdown: {
                default: "#FFFFFF"
            },
            input: {
                default: "#FFFFFF",
                invalid: "#FBEDED"
            },
            modal: {
                default: "#FFFFFF"
            },
            progressbar: {
                track: "#F0F0F0"
            },
            table: {
                default: "#FFFFFF",
                header: {
                    default: "#F0F0F0"
                },
                row: {
                    zebra: {
                        default: "#FAFAFA"
                    }
                }
            },
            tile: {
                default: "#FFFFFF"
            },
            tooltip: {
                default: "#FFFFFF"
            },
            topbar: {
                default: "#FFFFFF",
                float: "#FFFFFF"
            },
            inverse: {
                default: "#141414",
                secondary: "#000000",
                tertiary: "rgba(255, 255, 255, .1255)",
                disabled: "rgba(0, 0, 0, 0)",
                overlay: {
                    default: "#3A3A3A",
                    disabled: "rgba(1, 10, 15, .44)"
                },
                alert: {
                    default: "#242424",
                    flash: "#353535"
                },
                bubble: {
                    default: "#292929"
                },
                button: {
                    default: "rgba(0, 0, 0, .4392)",
                    primary: "#EE5A00",
                    alternate: "#6C6C6C",
                    finish: "#00A12F",
                    disabled: "rgba(0, 0, 0, 0)"
                },
                datepicker: {
                    default: "#292929"
                },
                dropdown: {
                    default: "#292929"
                },
                input: {
                    default: "rgba(0, 0, 0, .4392)",
                    invalid: "#290000"
                },
                modal: {
                    default: "#3A3A3A"
                },
                progressbar: {
                    track: "rgba(0, 0, 0, .4392)"
                },
                table: {
                    default: "#141414",
                    header: {
                        default: "rgba(255, 255, 255, .1255)"
                    },
                    row: {
                        zebra: {
                            default: "rgba(255, 255, 255, .0784)"
                        }
                    }
                },
                tile: {
                    default: "#242424"
                },
                tooltip: {
                    default: "#292929"
                },
                topbar: {
                    default: "#242424",
                    float: "#353535"
                },
                elevation: {
                    100: "#242424",
                    200: "#292929",
                    300: "#303030",
                    400: "#353535",
                    500: "#373737",
                    600: "#3A3A3A"
                }
            },
            elevation: {
                100: "#FFFFFF",
                200: "#FFFFFF",
                300: "#FFFFFF",
                400: "#FFFFFF",
                500: "#FFFFFF",
                600: "#FFFFFF"
            }
        },
        border: {
            default: "#DCDCDC",
            element: {
                secondary: "rgba(0, 0, 0, .0588)"
            },
            disabled: "#DCDCDC",
            button: {
                default: "#BEBEBE",
                primary: "rgba(0, 0, 0, .0588)",
                alternate: "#BEBEBE",
                finish: "rgba(0, 0, 0, .0588)",
                disabled: "#DCDCDC"
            },
            input: {
                default: "#8F8F8F",
                hover: "#EE5A00",
                invalid: "#CD212E",
                focus: "#EE5A00"
            },
            progressbar: {
                track: {
                    default: "#8F8F8F",
                    bottom: "#BEBEBE"
                }
            },
            table: {
                default: "#DCDCDC",
                row: {
                    zebra: {
                        default: "#DCDCDC"
                    }
                }
            },
            inverse: {
                default: "rgba(255, 255, 255, .1961)",
                element: {
                    secondary: "rgba(255, 255, 255, .1961)"
                },
                disabled: "rgba(255, 255, 255, .2824)",
                button: {
                    default: "rgba(255, 255, 255, .8627)",
                    primary: "rgba(0, 0, 0, 0)",
                    alternate: "rgba(255, 255, 255, .2824)",
                    finish: "rgba(0, 0, 0, 0)",
                    disabled: "rgba(255, 255, 255, .2824)"
                },
                input: {
                    default: "rgba(255, 255, 255, .8627)",
                    hover: "#FF9B5E",
                    invalid: "#F1515D",
                    focus: "#FF9B5E"
                },
                progressbar: {
                    track: {
                        default: "#6C6C6C",
                        bottom: "#BEBEBE"
                    }
                },
                table: {
                    default: "#6C6C6C",
                    row: {
                        zebra: {
                            default: "#6C6C6C"
                        }
                    }
                },
                highlight: "#FF9B5E"
            },
            highlight: "#EE5A00"
        },
        palette: {
            brand: {
                100: "#FFF1E9",
                200: "#FFDDC9",
                300: "#FFBB91",
                400: "#FF9B5E",
                500: "#FF6A10",
                600: "#EE5A00",
                700: "#BD4700",
                800: "#933600",
                900: "#5F2100",
                950: "#250A00"
            },
            neutral: {
                100: "#DFF2FF",
                200: "#B2E1FF",
                300: "#77C7FB",
                400: "#41B5FF",
                500: "#078FE7",
                600: "#0078C6",
                700: "#0065A7",
                800: "#014977",
                900: "#012B46",
                950: "#00121F"
            },
            white: "#FFFFFF",
            black: "#000000",
            grey: {
                100: "#FAFAFA",
                200: "#F0F0F0",
                300: "#DCDCDC",
                400: "#BEBEBE",
                500: "#8F8F8F",
                600: "#6C6C6C",
                700: "#484848",
                800: "#323232",
                900: "#202020",
                950: "#141414"
            },
            green: {
                100: "#D2FADD",
                200: "#93F5B0",
                300: "#4FE27B",
                400: "#31C95F",
                500: "#00A12F",
                600: "#008A28",
                700: "#007121",
                800: "#005118",
                900: "#00330E",
                950: "#001907"
            },
            red: {
                100: "#FBEDED",
                200: "#FCD4D6",
                300: "#FAB1B4",
                400: "#F58E94",
                500: "#F1515D",
                600: "#E5354A",
                700: "#CD212E",
                800: "#AF0E15",
                900: "#720002",
                950: "#290000"
            },
            overlay: {
                darken: {
                    100: "rgba(0, 0, 0, .0196)",
                    200: "rgba(0, 0, 0, .0588)",
                    300: "rgba(0, 0, 0, .1373)",
                    400: "rgba(0, 0, 0, .2549)",
                    500: "rgba(0, 0, 0, .4392)",
                    600: "rgba(0, 0, 0, .5765)",
                    700: "rgba(0, 0, 0, .7176)",
                    800: "rgba(0, 0, 0, .8039)",
                    900: "rgba(0, 0, 0, .8745)",
                    950: "rgba(0, 0, 0, .9216)"
                },
                lighten: {
                    100: "rgba(255, 255, 255, .9804)",
                    200: "rgba(255, 255, 255, .9412)",
                    300: "rgba(255, 255, 255, .8627)",
                    400: "rgba(255, 255, 255, .7451)",
                    500: "rgba(255, 255, 255, .5608)",
                    600: "rgba(255, 255, 255, .4235)",
                    700: "rgba(255, 255, 255, .2824)",
                    800: "rgba(255, 255, 255, .1961)",
                    900: "rgba(255, 255, 255, .1255)",
                    950: "rgba(255, 255, 255, .0784)"
                }
            }
        },
        divider: {
            default: "#DCDCDC",
            inverse: {
                default: "rgba(255, 255, 255, .1961)"
            }
        },
        icon: {
            default: "#6C6C6C",
            large: "#8F8F8F",
            action: "#EE5A00",
            success: "#00A12F",
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
                success: "#31C95F",
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
        },
        indicator: {
            default: "#EE5A00",
            success: "#00A12F",
            error: "#CD212E",
            neutral: "#078FE7",
            passive: "#BEBEBE",
            inverse: {
                default: "#FF9B5E",
                success: "#31C95F",
                error: "#F1515D",
                neutral: "#41B5FF",
                passive: "#8F8F8F"
            }
        },
        text: {
            default: "#323232",
            large: "#484848",
            bold: "#484848",
            secondary: "#6C6C6C",
            disabled: "#8F8F8F",
            placeholder: "#8F8F8F",
            positive: {
                small: "#007121",
                large: "#008A28"
            },
            negative: {
                small: "#CD212E",
                large: "#E5354A"
            },
            highlight: {
                small: "#BD4700",
                large: "#EE5A00"
            },
            label: {
                default: "#484848"
            },
            link: "#484848",
            tab: {
                default: "#6C6C6C",
                selected: "#141414"
            },
            menu: "#323232",
            button: {
                default: "#484848",
                primary: "#FFFFFF",
                alternate: "#484848",
                finish: "#FFFFFF",
                disabled: "#8F8F8F"
            },
            inverse: {
                default: "#FAFAFA",
                large: "#F0F0F0",
                bold: "#F0F0F0",
                secondary: "#BEBEBE",
                disabled: "#8F8F8F",
                placeholder: "#8F8F8F",
                positive: {
                    small: "#4FE27B",
                    large: "#4FE27B"
                },
                negative: {
                    small: "#F58E94",
                    large: "#F58E94"
                },
                highlight: {
                    small: "#FF9B5E",
                    large: "#FF9B5E"
                },
                label: {
                    default: "#F0F0F0"
                },
                link: "#F0F0F0",
                tab: {
                    default: "#DCDCDC",
                    selected: "#FFFFFF"
                },
                menu: "#FAFAFA",
                button: {
                    default: "#FFFFFF",
                    primary: "#FFFFFF",
                    alternate: "#FFFFFF",
                    finish: "#FFFFFF",
                    disabled: "#8F8F8F"
                }
            }
        },
        outline: {
            focus: "#6C6C6C",
            input: {
                focus: "#EE5A00"
            },
            inverse: {
                focus: "rgba(255, 255, 255, .8627)",
                input: {
                    focus: "#FF9B5E"
                }
            }
        }
    }
      , W = {
        hairline: "0.1rem",
        tiny: "0.2rem",
        shadow: {
            offset: {
                x: {
                    default: "0"
                }
            },
            spread: {
                default: "0"
            }
        },
        icon: {
            default: "2.4rem",
            small: "2rem",
            large: "3.2rem"
        }
    }
      , H = {
        family: "Chevin",
        name: {
            thin: "chevin-thin",
            default: "chevin-light",
            medium: "chevin-medium",
            bold: "chevin-demibold"
        },
        stack: {
            default: "Chevin, sans-serif"
        },
        scalefactor: "62.5%"
    }
      , q = {
        xs: {
            min: null,
            max: "679px"
        },
        sm: {
            min: "680px",
            max: "799px"
        },
        md: {
            min: "800px",
            max: "1199px"
        },
        lg: {
            min: "1200px",
            max: "1899px"
        },
        xl: {
            min: "1900px",
            max: null
        }
    }
      , V = "0.4rem"
      , K = parseFloat(V)
      , G = V.replace(/\d|\./g, "");
    var U = e=>"".concat(e * K).concat(G);
    const X = e=>{
        let {children: a, className: l, delay: r=100, fwdRef: s, hidden: i=!1, role: d="status", style: c, tagName: u="span"} = e
          , f = w(e, ["children", "className", "delay", "fwdRef", "hidden", "role", "style", "tagName"]);
        const [m,p] = t.useState(!1);
        return t.useEffect((()=>{
            const e = setTimeout((()=>p(!0)), r);
            return ()=>clearTimeout(e)
        }
        ), [r]),
        n.default.createElement(u, y({
            className: o("ds-status-message", l, {
                "ds-status-message--visually-hidden": i
            }),
            ref: s,
            role: d,
            style: y({
                transitionDelay: r + "ms"
            }, c)
        }, f), m && a)
    }
      , Y = t.forwardRef(((e,t)=>n.default.createElement(X, y({}, e, {
        fwdRef: t
    }))));
    Y.displayName = "StatusMessage";
    var J = {
        loading: {
            en: "Loading",
            fi: "Ladataan",
            sv: "Laddas"
        }
    };
    const Q = U(10)
      , Z = e=>{
        let {className: a, color: l=j.indicator.default, fwdRef: r, size: s=Q, statusMessage: i, style: d} = e
          , c = w(e, ["className", "color", "fwdRef", "size", "statusMessage", "style"]);
        const [u] = t.useState(E("ds-lgr-"))
          , f = W.icon[s] || s
          , m = f !== Q ? {
            height: f,
            width: f
        } : void 0
          , p = I()
          , b = i || !1 !== i && null !== i && J.loading[p];
        return n.default.createElement("span", y({
            className: o("ds-loading", a),
            ref: r,
            role: "status",
            style: y({}, d, m)
        }, c), n.default.createElement("svg", {
            "aria-hidden": "true",
            className: "ds-loading__spinner",
            version: "1.1",
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg"
        }, n.default.createElement("defs", null, n.default.createElement("linearGradient", {
            className: "ds-loading__gradient",
            gradientTransform: "rotate(90)",
            id: u
        }, n.default.createElement("stop", {
            offset: "5%",
            stopColor: l
        }), n.default.createElement("stop", {
            offset: "84%",
            stopColor: l
        }))), n.default.createElement("path", {
            d: "M 5 50 A 45 45 0 0 1 50 5",
            stroke: "url('#" + u + "')"
        }), n.default.createElement("path", {
            d: "M 50 5 A 45 45 0 0 1 95 50",
            stroke: l
        })), b && n.default.createElement(Y, {
            hidden: !0
        }, b))
    }
      , $ = t.forwardRef(((e,t)=>n.default.createElement(Z, y({}, e, {
        fwdRef: t
    }))));
    function ee(e) {
        let {button: t=!1, children: a, className: l, disabled: r, external: s, externalLinkText: i, fwdRef: d, href: c, icon: u, iconPos: f="right", inline: m, loading: p, nonInteractive: b, onClick: h, onKeyDown: g, rel: v, role: F, size: E="default", tabIndex: x=0, target: C} = e
          , N = w(e, ["button", "children", "className", "disabled", "external", "externalLinkText", "fwdRef", "href", "icon", "iconPos", "inline", "loading", "nonInteractive", "onClick", "onKeyDown", "rel", "role", "size", "tabIndex", "target"]);
        const _ = I()
          , k = t ? "button" : "a"
          , R = s ? z : u || L
          , P = s ? "right" : f
          , B = "medium" === E || "large" === E ? "default" : "small"
          , S = !m && r ? "disabled" : "action"
          , O = s ? i || M.externalLink[_] : void 0
          , T = !c && h && g ? g : null
          , A = c && !v ? "noopener" : v
          , D = c || F || t ? F : "button"
          , j = r || p || b ? -1 : x
          , W = s && !C ? "_blank" : C
          , H = o("ds-action", l, {
            "ds-action--disabled": !m && r,
            "ds-action--external": s,
            "ds-action--icon-left": !s && !m && "left" === P,
            "ds-action--inline": m,
            ["ds-action--" + E]: !m && "default" !== E,
            "ds-action--non-interactive": b || p
        })
          , q = ()=>!p || r || s || m ? s || !m ? n.default.createElement(R, {
            className: "ds-action__icon",
            label: O,
            size: B,
            type: S
        }) : null : n.default.createElement($, {
            className: "ds-action__icon",
            size: B
        });
        return n.default.createElement(k, y({
            "aria-busy": p,
            className: H,
            disabled: t && r,
            href: c,
            onClick: h,
            onKeyDown: T,
            ref: d,
            rel: A,
            role: D,
            tabIndex: j,
            target: W
        }, N), !m || t || s ? n.default.createElement(n.default.Fragment, null, "left" === P && n.default.createElement(q, null), n.default.createElement("span", {
            className: "ds-action__label"
        }, a), "‍", "right" === P && n.default.createElement(q, null)) : a)
    }
    $.displayName = "Loading";
    const te = t.createContext({});
    ee.Context = te;
    const ae = t.forwardRef(((e,t)=>n.default.createElement(te.Consumer, null, (({button: a, external: l, inline: r})=>{
        const s = {};
        return "boolean" == typeof a && (s.button = a),
        "boolean" == typeof l && (s.external = l),
        "boolean" == typeof r && (s.inline = r),
        n.default.createElement(ee, y({}, s, e, {
            fwdRef: t
        }))
    }
    ))));
    ae.Context = te,
    ae.displayName = "Action";
    var ne = {};
    function le(e) {
        return re = le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        le(e)
    }
    var re = le
      , se = re;
    function ie() {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap;
        return ie = function() {
            return e
        }
        ,
        e
    }
    var oe = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== se(e) && "function" != typeof e)
            return {
                default: e
            };
        var t = ie();
        if (t && t.has(e))
            return t.get(e);
        var a = {}
          , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
            if (Object.prototype.hasOwnProperty.call(e, l)) {
                var r = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                r && (r.get || r.set) ? Object.defineProperty(a, l, r) : a[l] = e[l]
            }
        return a.default = e,
        t && t.set(e, a),
        a
    };
    var de = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    function ce() {
        return ue = ce = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }
        ,
        ce.apply(this, arguments)
    }
    var ue = ce;
    var fe = function(e, t) {
        if (null == e)
            return {};
        var a, n, l = {}, r = Object.keys(e);
        for (n = 0; n < r.length; n++)
            a = r[n],
            t.indexOf(a) >= 0 || (l[a] = e[a]);
        return l
    };
    var me = function(e, t) {
        if (null == e)
            return {};
        var a, n, l = fe(e, t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            for (n = 0; n < r.length; n++)
                a = r[n],
                t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a])
        }
        return l
    };
    var pe = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    };
    function be(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var he = function(e, t, a) {
        return t && be(e.prototype, t),
        a && be(e, a),
        e
    };
    var ge = function(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
      , ve = re
      , Fe = ge;
    var Ee = function(e, t) {
        return !t || "object" !== ve(t) && "function" != typeof t ? Fe(e) : t
    };
    function ye(e) {
        return we = ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        ye(e)
    }
    var we = ye;
    function xe(e, t) {
        return Ce = xe = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        xe(e, t)
    }
    var Ce = xe
      , Ne = Ce;
    var _e = function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && Ne(e, t)
    };
    var ke = function(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a,
        e
    }
      , Re = {};
    !function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(e) {
            var t = /(\d+(?:\.\d+)?|\.\d+)(m?s)\b/i.exec(e);
            if (!t)
                throw new Error("Could not parse time from transition value");
            return Number(t[1]) * (1 === t[2].length ? 1e3 : 1)
        }
    }(Re),
    r(Re),
    function(e) {
        var t = oe
          , a = de;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var l = a(ue)
          , r = a(me)
          , s = a(pe)
          , i = a(he)
          , o = a(Ee)
          , d = a(we)
          , c = a(ge)
          , u = a(_e)
          , f = a(ke)
          , m = t(n.default)
          , p = a(x.exports)
          , b = a(Re)
          , h = function(e) {
            function t(e) {
                var a;
                return (0,
                s.default)(this, t),
                a = (0,
                o.default)(this, (0,
                d.default)(t).call(this, e)),
                (0,
                f.default)((0,
                c.default)(a), "_removeTransitionEndListener", (function() {}
                )),
                (0,
                f.default)((0,
                c.default)(a), "_main", m.createRef()),
                (0,
                f.default)((0,
                c.default)(a), "_inner", m.createRef()),
                (0,
                f.default)((0,
                c.default)(a), "_onNextTransitionEnd", (function(e, t) {
                    a._removeTransitionEndListener();
                    var n, l = function() {
                        a._removeTransitionEndListener(),
                        t()
                    };
                    a._removeTransitionEndListener = function() {
                        a._removeTransitionEndListener = function() {}
                        ,
                        clearTimeout(n),
                        e.removeEventListener("transitionend", l)
                    }
                    ,
                    e.addEventListener("transitionend", l);
                    var r = 1.1 * (0,
                    b.default)(a.props.heightTransition) + 500;
                    n = setTimeout(l, r)
                }
                )),
                a.state = {
                    renderInner: e.expanded || t._visibleWhenClosed(e),
                    closing: !1,
                    fullyClosed: !e.expanded,
                    height: e.expanded ? "auto" : e.collapsedHeight
                },
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "componentWillUnmount",
                value: function() {
                    this._removeTransitionEndListener()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var a = this;
                    if (!e.expanded && this.props.expanded) {
                        this._removeTransitionEndListener();
                        var n = this._main.current
                          , l = this._inner.current;
                        if (!n || !l)
                            throw new Error("Should not happen");
                        var r = "".concat(l.clientHeight, "px");
                        this.setState({
                            height: r
                        }),
                        this._onNextTransitionEnd(n, (function() {
                            a.setState({
                                height: "auto"
                            }, (function() {
                                a.props.onChangeEnd && a.props.onChangeEnd()
                            }
                            ))
                        }
                        ))
                    } else if (e.expanded && !this.props.expanded) {
                        if (this._removeTransitionEndListener(),
                        !this._inner.current)
                            throw new Error("Should not happen");
                        this.setState({
                            height: "".concat(this._inner.current.clientHeight, "px")
                        }, (function() {
                            var e = a._main.current;
                            if (!e)
                                throw new Error("Should not happen");
                            e.clientHeight,
                            a.setState({
                                height: a.props.collapsedHeight,
                                closing: !0
                            }),
                            a._onNextTransitionEnd(e, (function() {
                                a.setState({
                                    closing: !1,
                                    fullyClosed: !0
                                }),
                                a.props.onChangeEnd && a.props.onChangeEnd()
                            }
                            ))
                        }
                        ))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = t._visibleWhenClosed(this.props)
                      , a = this.props
                      , n = a.allowOverflowWhenOpen
                      , s = a.children;
                    a.collapsedHeight,
                    a.eagerRender,
                    a.expanded;
                    var i = a.heightTransition;
                    a.onChangeEnd;
                    var o = (0,
                    r.default)(a, ["allowOverflowWhenOpen", "children", "collapsedHeight", "eagerRender", "expanded", "heightTransition", "onChangeEnd"])
                      , d = this.state
                      , c = d.height
                      , u = d.fullyClosed
                      , f = d.renderInner ? m.createElement("div", {
                        ref: this._inner,
                        style: {
                            overflow: n && "auto" === c ? "visible" : "hidden"
                        }
                    }, s) : null;
                    return m.createElement("div", (0,
                    l.default)({}, o, {
                        ref: this._main,
                        style: {
                            height: c,
                            overflow: n && "auto" === c ? "visible" : "hidden",
                            display: u && !e ? "none" : null,
                            transition: "height ".concat(i)
                        }
                    }), f)
                }
            }], [{
                key: "_visibleWhenClosed",
                value: function(e) {
                    return e.eagerRender || 0 !== parseFloat(e.collapsedHeight)
                }
            }, {
                key: "getDerivedStateFromProps",
                value: function(e, a) {
                    return e.expanded && (a.closing || a.fullyClosed) ? {
                        closing: !1,
                        fullyClosed: !1,
                        renderInner: !0
                    } : e.expanded || !a.closing && !a.fullyClosed || a.height === e.collapsedHeight ? null : {
                        height: e.collapsedHeight,
                        renderInner: a.renderInner || t._visibleWhenClosed(e)
                    }
                }
            }]),
            t
        }(m.Component);
        e.default = h,
        (0,
        f.default)(h, "propTypes", {
            expanded: p.default.bool.isRequired,
            onChangeEnd: p.default.func,
            collapsedHeight: p.default.string,
            heightTransition: p.default.string,
            className: p.default.string,
            allowOverflowWhenOpen: p.default.bool,
            eagerRender: p.default.bool
        }),
        (0,
        f.default)(h, "defaultProps", {
            collapsedHeight: "0",
            heightTransition: ".25s ease",
            className: "",
            allowOverflowWhenOpen: !1,
            eagerRender: !1
        })
    }(ne);
    var Le = r(ne);
    const ze = e=>n.default.createElement(ht, y({}, e, {
        path: "M3.6 17.208a1.704 1.704 0 0 1 0-2.415L14.792 3.6c.333-.333.77-.5 1.208-.5.437 0 .874.167 1.207.5L28.4 14.792c.333.333.5.77.5 1.208 0 .437-.167.874-.5 1.207L17.207 28.4c-.333.333-.77.5-1.207.5-.438 0-.875-.167-1.208-.5L3.6 17.208zM16 27.062 27.062 16 16 4.938 4.938 16 16 27.062zm1.398-6.037a1.398 1.398 0 1 1-2.796 0 1.398 1.398 0 0 1 2.796 0zM16.001 11c.782 0 1.198.516 1.199 1.156 0 .057-.423 5.614-.423 5.614-.052.366-.415.546-.776.546-.362 0-.72-.212-.777-.546 0 0-.43-5.558-.429-5.61.006-.644.42-1.16 1.206-1.16z"
    }))
      , Pe = e=>n.default.createElement(ht, y({}, e, {
        path: "M26.45 24.1 16 5.814 5.55 24.1h20.9zm-23.231.453 12-21a.891.891 0 0 1 .782-.453c.304 0 .608.151.78.453l12 21A.901.901 0 0 1 28 25.9H4a.901.901 0 0 1-.781-1.347zm14.18-3.549a1.398 1.398 0 1 1-2.797 0 1.398 1.398 0 0 1 2.796 0zM16 11c.782 0 1.198.516 1.199 1.156 0 .057-.423 5.614-.423 5.614-.052.366-.415.546-.776.546-.362 0-.72-.212-.777-.546 0 0-.43-5.558-.429-5.61.006-.644.42-1.16 1.206-1.16z"
    }))
      , Be = e=>n.default.createElement(ht, y({}, e, {
        path: "M25.147 8.305a1.096 1.096 0 0 1 1.548-.158 1.097 1.097 0 0 1 .158 1.548L15.963 23c-.214.261-.594.39-.979.388-.376-.003-.755-.132-.984-.388l-6.804-7.25a1.097 1.097 0 0 1 .053-1.554 1.097 1.097 0 0 1 1.555.053l6.198 6.735L25.147 8.305z"
    }))
      , Se = ["default", "small", "large", "hero"]
      , Oe = t.createContext({
        spacing: "default",
        stacked: !1,
        visualizeRequiredFields: !1
    })
      , Te = t.createContext({
        registerPrimary: !1,
        stacked: !1
    });
    const Ae = e=>{
        const {children: a, className: l, compact: r, disabled: s, external: i, externalLinkText: d, finish: c, fwdRef: u, ghost: f, href: m, icon: p, iconLabel: b, iconPos: h="left", iconProps: g, loading: v, minified: F, nonInteractive: x, primary: C, size: N, statusMessage: _, target: k} = e
          , R = w(e, ["alternate", "children", "className", "compact", "disabled", "external", "externalLinkText", "finish", "fwdRef", "ghost", "href", "icon", "iconLabel", "iconPos", "iconProps", "loading", "minified", "nonInteractive", "primary", "size", "statusMessage", "target"])
          , L = I()
          , [P] = t.useState((()=>E("ds-status-message-")))
          , B = _ || !1 !== _ && null !== _ && (v ? J.loading[L] : void 0)
          , S = (e=>{
            const t = ["finish", "primary", "alternate", "compact"].filter((t=>e[t]))
              , a = t[0];
            return t.length > 1 && t.join(" and "),
            a
        }
        )(e)
          , {spacing: O, stacked: T} = t.useContext(Oe)
          , {registerPrimary: A, stacked: D} = t.useContext(Te)
          , W = i ? z : p
          , H = !!W && !a
          , q = N || O
          , V = "large" === q || "hero" === q ? q : void 0
          , K = r ? "small" : "large" === V || "hero" === V ? "large" : "default"
          , G = s ? "disabled" : "alternate" === S || "finish" === S || "primary" === S ? "default" : "action"
          , U = i ? "right" : h
          , X = i ? d || M.externalLink[L] : H ? b : void 0
          , Q = o("ds-button", l, {
            ["ds-button--" + S]: S,
            "ds-button--disabled": s,
            "ds-button--ghost": H && f,
            "ds-button--minified": H && (F || f),
            "ds-button--non-interactive": x || v,
            ["ds-button--icon-" + U]: W && a,
            ["ds-button--" + V]: V && !r,
            "ds-button--wide": void 0 !== D ? D : T
        })
          , Z = m ? "a" : "button"
          , ee = i && !k ? "_blank" : k;
        return t.useEffect((()=>{
            A && (C || c) && A()
        }
        ), []),
        n.default.createElement(n.default.Fragment, null, n.default.createElement(Z, y({
            "aria-busy": v,
            "aria-controls": v || void 0 !== B ? P : null,
            className: Q,
            disabled: m ? void 0 : s,
            href: m,
            ref: u,
            target: ee
        }, R), v ? n.default.createElement($, {
            className: "ds-button__loading",
            color: j.icon.button[S],
            size: K,
            statusMessage: !1
        }) : n.default.createElement(n.default.Fragment, null, W && n.default.createElement(W, y({
            className: "ds-button__icon",
            label: X,
            onDarkBg: !s && ("finish" === S || "primary" === S),
            size: K,
            type: G
        }, g)), a)), B && n.default.createElement(Y, {
            hidden: !0,
            id: P
        }, B))
    }
      , De = t.forwardRef(((e,t)=>n.default.createElement(Ae, y({}, e, {
        fwdRef: t
    }))));
    De.displayName = "Button";
    const Ie = {
        en: {
            close: "close"
        },
        fi: {
            close: "sulje"
        },
        sv: {
            close: "stäng"
        }
    };
    function Me({embedded: e, error: t, flash: a, icon: l, inline: r, style: s, success: i}) {
        let o = "neutral";
        const d = e || "large" === r ? "default" : r || a ? "small" : "large";
        return l || (t ? (l = Pe,
        o = "error") : i ? (l = Be,
        o = "success") : l = ze),
        n.default.createElement(l, {
            size: d,
            style: s,
            type: o
        })
    }
    const je = e=>{
        let {"aria-label": t, className: a, fwdRef: l, size: r, style: s} = e
          , i = w(e, ["aria-label", "className", "fwdRef", "size", "style"]);
        return n.default.createElement("svg", y({
            "aria-hidden": !t,
            "aria-label": t,
            role: "img"
        }, i, {
            className: o("ds-anim-check", a),
            ref: l,
            style: y({}, s, {
                height: r,
                width: r
            }),
            viewBox: "-48 -48 96 96"
        }), n.default.createElement("circle", {
            cx: "0",
            cy: "0",
            r: "46"
        }), n.default.createElement("path", {
            d: "M-16 -2l14 15L20 -14"
        }))
    }
      , We = t.forwardRef(((e,t)=>n.default.createElement(je, y({}, e, {
        fwdRef: t
    }))));
    We.displayName = "AnimCheck";
    const He = e=>n.default.createElement(ht, y({}, e, {
        path: "M25 15.1c.552 0 1 .403 1 .9s-.448.9-1 .9H7c-.552 0-1-.403-1-.9s.448-.9 1-.9h18z"
    }))
      , qe = e=>{
        let {alert: t, "aria-labelledby": a, badgeContent: l, badgeStyle: r, className: s, dot: i, fwdRef: d, icon: c, iconProps: u, max: f, status: m, style: p} = e
          , b = w(e, ["alert", "aria-labelledby", "badgeContent", "badgeStyle", "className", "dot", "fwdRef", "icon", "iconProps", "max", "status", "style"])
          , h = l
          , g = null;
        if (l && !isNaN(l) && f && l > f && (h = f + "+"),
        c && (h = n.default.createElement(c, y({
            size: "small"
        }, u))),
        m)
            switch (m) {
            case "ok":
                h = n.default.createElement(Be, {
                    onDarkBg: !0,
                    size: "small",
                    type: "default"
                });
                break;
            case "warning":
                h = "?";
                break;
            case "critical":
                h = "!";
                break;
            case "empty":
                h = n.default.createElement(He, {
                    size: "small",
                    type: "default"
                })
            }
        else
            t && (g = "error" === t ? n.default.createElement(Pe, {
                type: "error"
            }) : n.default.createElement(ze, {
                type: "neutral"
            }));
        return n.default.createElement("div", y({
            "aria-labelledby": a,
            className: o("ds-badge", s, {
                "ds-badge--alert": t && !m,
                "ds-badge--alert-error": "error" === t && !m,
                "ds-badge--dot": i && !c,
                ["ds-badge--status-" + m]: m && !t,
                "ds-badge--large": l && h.toString().length > 1 && !m && !i && !c
            }),
            ref: d,
            role: "ok" === m || "empty" === m ? "img" : void 0,
            style: p
        }, b), g, n.default.createElement("span", {
            style: r
        }, !i && h))
    }
      , Ve = t.forwardRef(((e,t)=>n.default.createElement(qe, y({}, e, {
        fwdRef: t
    }))));
    Ve.displayName = "Badge";
    const Ke = {
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        xsOffset: "xs--offset",
        smOffset: "sm--offset",
        mdOffset: "md--offset",
        lgOffset: "lg--offset",
        xlOffset: "xl--offset"
    }
      , Ge = e=>"number" == typeof e && isFinite(e) && Math.floor(e) === e;
    function Ue(e) {
        let {className: t, fwdRef: a, tagName: l="div"} = e
          , r = w(e, ["className", "fwdRef", "tagName"])
          , s = [t, "ds-col"];
        for (const e of Object.keys(Ke)) {
            const t = r[e];
            if (void 0 !== t) {
                const a = Ke[e];
                s.push(Ge(t) ? "ds-col--" + a + "-" + t : "ds-col--" + a),
                delete r[e]
            }
        }
        if (r.first) {
            const e = !0 === r.first ? "xs" : r.first;
            s.push("ds-col--first-" + e),
            delete r.first
        }
        if (r.last) {
            const e = !0 === r.last ? "xs" : r.last;
            s.push("ds-col--last-" + e),
            delete r.last
        }
        return r.hidden && (Array.isArray(r.hidden) ? s = s.concat(r.hidden.map((e=>"ds-col--hidden-" + e))) : s.push("ds-col--hidden-" + r.hidden),
        delete r.hidden),
        n.default.createElement(l, y({}, r, {
            className: o(s),
            ref: a
        }))
    }
    const Xe = t.forwardRef(((e,t)=>n.default.createElement(Ue, y({}, e, {
        fwdRef: t
    }))));
    Xe.displayName = "Col";
    const Ye = ["start", "center", "end", "top", "middle", "bottom", "around", "between"];
    function Je(e) {
        let {className: t, fwdRef: a, tagName: l="div"} = e
          , r = w(e, ["className", "fwdRef", "tagName"]);
        const s = [t, "ds-row"];
        for (const e of Ye) {
            const t = r[e];
            if (t) {
                const a = !0 === t ? "xs" : t;
                s.push("ds-row--" + e + "-" + a),
                delete r[e]
            }
        }
        return r.reverse && (s.push("ds-row--reverse"),
        delete r.reverse),
        n.default.createElement(l, y({}, r, {
            className: o(s),
            ref: a
        }))
    }
    const Qe = t.forwardRef(((e,t)=>n.default.createElement(Je, y({}, e, {
        fwdRef: t
    }))));
    Qe.displayName = "Row";
    const Ze = ({hint: e})=>{
        if (!e)
            return null;
        const a = Object.assign({}, e.props.boxProps);
        a.className = o("ds-form-row__hint__infobox", a.className);
        const l = o("ds-form-row__hint__button", e.props.className);
        return n.default.createElement("span", {
            className: "ds-form-row__hint"
        }, "‍", t.cloneElement(e, y({}, e.props, {
            boxProps: a,
            className: l
        })))
    }
      , $e = ({children: e, formRowId: t, group: a, id: l})=>a ? n.default.createElement("span", {
        id: l
    }, e) : n.default.createElement("label", {
        htmlFor: t,
        id: l
    }, e)
      , et = e=>{
        let {children: a, className: l, disabled: r=!1, fwdRef: s, hint: i, label: d, labelFor: c, labelId: u, required: f=!1} = e
          , m = w(e, ["children", "className", "disabled", "fwdRef", "hint", "label", "labelFor", "labelId", "required"]);
        const {spacing: p, stacked: b, visualizeRequiredFields: h} = t.useContext(Oe)
          , [g] = t.useState((()=>E("ds-fr-")))
          , [v] = t.useState((()=>E("ds-fr-label-")))
          , [F,x] = t.useState(!1)
          , C = c || g
          , N = u || v;
        return n.default.createElement(Qe, y({}, m, {
            className: o("ds-form-row", {
                "ds-form-row--disabled": r,
                "ds-form-row--required": h && f,
                ["ds-form-row--" + p]: "default" !== p,
                "ds-form-row--stacked": b
            }, l),
            ref: s
        }), n.default.createElement(Xe, {
            className: "ds-form-row__label",
            sm: b ? void 0 : 4
        }, d && n.default.createElement($e, {
            formRowId: C,
            group: F,
            id: N
        }, d), n.default.createElement(Ze, {
            hint: i
        })), n.default.createElement(Xe, {
            className: "ds-form-row__item",
            sm: b ? void 0 : 8
        }, n.default.createElement(at.Provider, {
            value: {
                disabled: r,
                id: C,
                labelId: d ? N : void 0,
                onGroup: ()=>x(!0),
                required: f
            }
        }, a)))
    }
      , tt = t.forwardRef(((e,t)=>n.default.createElement(et, y({}, e, {
        fwdRef: t
    }))));
    tt.displayName = "FormRow";
    const at = t.createContext({
        disabled: !1,
        onGroup: ()=>{}
        ,
        required: !1
    })
      , nt = o;
    function lt(e) {
        let {"aria-labelledby": a, buttons: l=!1, children: r, className: s, columns: i=1, disabled: d=!1, fwdRef: c, invalid: u=!1, size: f, wrap: m=!1} = e
          , p = w(e, ["aria-labelledby", "buttons", "children", "className", "columns", "disabled", "fwdRef", "invalid", "size", "wrap"]);
        const {spacing: b} = t.useContext(Oe)
          , {labelId: h, onGroup: g} = t.useContext(at)
          , v = nt(a, h)
          , F = f || b
          , E = o("ds-checkbox-group", s, {
            "ds-checkbox-group--buttonized": l && !m,
            "ds-checkbox-group--columned": i > 1,
            "ds-checkbox-group--wrapped": m,
            ["ds-checkbox-group--" + F]: "default" !== F
        });
        return t.useEffect((()=>g()), [g]),
        n.default.createElement("div", y({
            "aria-labelledby": v || void 0,
            className: E,
            ref: c,
            role: "group"
        }, p), n.default.createElement(st.Provider, {
            value: {
                buttons: l && !m,
                columns: i,
                disabled: d,
                invalid: u,
                size: F,
                wrap: m
            }
        }, r))
    }
    const rt = t.forwardRef(((e,t)=>n.default.createElement(lt, y({}, e, {
        fwdRef: t
    }))));
    rt.displayName = "CheckboxGroup";
    const st = t.createContext({
        buttons: !1,
        columns: 1,
        disabled: !1,
        invalid: !1,
        wrap: !1
    })
      , it = (...e)=>{
        const a = t.useRef();
        return t.useEffect((()=>{
            e.filter(Boolean).forEach((e=>{
                "function" == typeof e ? e(a.current) : e.current = a.current
            }
            ))
        }
        ), [e]),
        a
    }
    ;
    function ot(e, a) {
        const [n,l] = t.useState(!1);
        return t.useEffect((()=>{
            if ("boolean" == typeof a)
                return void (a !== n && l(a));
            const t = ()=>l(!0)
              , r = ()=>l(!1);
            return e.current.addEventListener("focus", t),
            e.current.addEventListener("blur", r),
            ()=>{
                e.current && (e.current.removeEventListener("focus", t),
                e.current.removeEventListener("blur", r))
            }
        }
        ), [a]),
        n
    }
    function dt(e) {
        const a = t.useRef(e);
        return t.useEffect((()=>{
            a.current = e
        }
        ), [e]),
        a.current
    }
    const ct = (e,a)=>{
        const n = t.useRef(!1);
        t.useEffect((()=>{
            n.current ? e() : n.current = !0
        }
        ), a)
    }
      , ut = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect;
    const ft = t.createContext({
        accordion: !1,
        contentTag: "div",
        current: null,
        embedded: !1,
        headerTag: "div",
        indented: !1,
        onClose: ()=>{}
        ,
        onOpen: ()=>{}
        ,
        registerItem: ()=>{}
        ,
        size: null,
        state: null,
        toggleExpander: ()=>{}
        ,
        wrapContent: !0
    })
      , mt = ()=>{}
      , pt = t.forwardRef(((e,a)=>{
        let {allowOverflowWhenOpen: l=!1, autoFocus: r=!1, children: s, className: i, contentId: d, contentTag: c="div", disabled: u=!1, embedded: f=!1, headerTag: m="div", indented: p=!1, initiallyOpen: b=!1, onClose: h, onOpen: g, size: v=null, title: F, wrapContent: x=!0} = e
          , C = w(e, ["allowOverflowWhenOpen", "autoFocus", "children", "className", "contentId", "contentTag", "disabled", "embedded", "headerTag", "indented", "initiallyOpen", "onClose", "onOpen", "size", "title", "wrapContent"]);
        const [N] = t.useState((()=>E("ds-expander-content-")))
          , [_,R] = t.useState(!!b)
          , L = t.useRef()
          , {accordion: z, contentTag: P, current: B, embedded: S, headerTag: O, indented: T, onClose: A, onOpen: D, registerItem: I, size: M, toggleExpander: j} = t.useContext(ft)
          , W = d || N
          , H = c || P
          , q = m || O
          , V = f || S
          , K = p || T
          , G = null !== v ? v : M
          , U = t.useMemo((()=>I()), []);
        t.useEffect((()=>{
            z && B !== U && R(!1)
        }
        ), [B]),
        t.useEffect((()=>{
            z && b && (R(!0),
            j(U))
        }
        ), []),
        t.useEffect((()=>{
            g && _ && g(),
            h && !_ && h(),
            D && _ && D(U),
            A && !_ && A(U),
            _ && z && j(U)
        }
        ), [_]),
        t.useImperativeHandle(a, (()=>({
            close: ()=>R(!1),
            open: ()=>R(!0)
        })));
        const X = o("ds-expander", i, {
            "ds-expander--disabled": u,
            "ds-expander--embedded": V,
            "ds-expander--indented": K,
            "ds-expander--open": _,
            "ds-expander--small": G && "small" === G,
            "ds-expander--tiny": G && "tiny" === G
        })
          , Y = o("ds-expander__content", {
            "ds-expander__content--embedded": V,
            "ds-expander__content--indented": K,
            "ds-expander__content--unwrapped": !x
        });
        return n.default.createElement("div", y({
            className: X
        }, C), n.default.createElement(q, {
            className: "ds-expander__header",
            onClick: e=>{
                e.preventDefault(),
                u || R((e=>!e))
            }
            ,
            onKeyDown: u ? void 0 : function(e) {
                " " !== e.key && "Enter" !== e.key || (e.preventDefault(),
                R((e=>!e)))
            }
            ,
            tabIndex: u ? "-1" : "0"
        }, n.default.createElement("a", {
            "aria-controls": W,
            "aria-expanded": _,
            className: "ds-expander__title",
            role: "button"
        }, F), n.default.createElement(k, {
            className: "ds-expander__header-action",
            tabIndex: "-1",
            type: u ? "disabled" : "action"
        })), n.default.createElement(H, null, n.default.createElement(Le, {
            allowOverflowWhenOpen: l,
            className: Y,
            expanded: _,
            id: W,
            onChangeEnd: function() {
                if (_ && r) {
                    const e = L.current._main
                      , t = e && e.current && e.current.querySelector('button, input:not([type="hidden"]), select, textarea');
                    t && t.focus()
                }
            },
            ref: L
        }, n.default.createElement(ft.Provider, {
            value: {
                contentTag: P,
                embedded: S,
                headerTag: O,
                indented: T,
                size: M,
                accordion: !1,
                current: null,
                onClose: mt,
                onOpen: mt,
                registerItem: mt,
                toggleExpander: mt
            }
        }, s))))
    }
    ))
      , bt = e=>{
        let {domRef: t, label: a, path: l} = e
          , r = w(e, ["domRef", "label", "path"]);
        return n.default.createElement("svg", y({
            "aria-hidden": !a,
            "aria-label": a,
            ref: t,
            role: "img",
            viewBox: "0 0 " + r.width + " " + r.height,
            xmlns: "http://www.w3.org/2000/svg"
        }, r), n.default.createElement("path", {
            d: l,
            fillRule: "evenodd"
        }))
    }
    ;
    function ht(e) {
        let {className: t, height: a=32, onDarkBg: l=!1, size: r="default", type: s="default", width: i=32} = e
          , d = w(e, ["className", "height", "onDarkBg", "size", "type", "width"]);
        const c = "ds-icon"
          , u = o(t, c, {
            ["ds-icon--" + r]: "default" !== r,
            ["ds-icon--" + s]: "default" !== s,
            "ds-icon--inverse": l
        });
        return n.default.createElement(bt, y({
            className: u,
            height: a,
            width: i
        }, d))
    }
    function gt(e) {
        return gt[e] || (gt[e] = new Intl.NumberFormat(e))
    }
    function vt(e, t, a) {
        return gt(e).format(t - a)
    }
    function Ft(e, t, a, n, l) {
        if ({}.hasOwnProperty.call(n, e))
            return n[e];
        t && (e -= t);
        var r = a(e, l);
        return r in n ? n[r] : n.other
    }
    function Et(e) {
        var t = !String(e).split(".")[1];
        return 1 == e && t ? "one" : "other"
    }
    const yt = Et
      , wt = Et;
    var xt = {
        en: {
            error: function(e) {
                return "Error"
            },
            full: function(e) {
                return "Text field is full"
            },
            maxLengthLabel: function(e) {
                return "Enter at most " + Ft(e.maxLength, 0, yt, {
                    one: "1 character",
                    other: vt("en", e.maxLength, 0) + " characters"
                })
            }
        },
        fi: {
            error: function(e) {
                return "Virhe"
            },
            full: function(e) {
                return "Tekstikenttä on täynnä"
            },
            maxLengthLabel: function(e) {
                return "Syötä korkeintaan " + Ft(e.maxLength, 0, wt, {
                    one: "1 merkki",
                    other: vt("fi", e.maxLength, 0) + " merkkiä"
                })
            }
        },
        sv: {
            error: function(e) {
                return "Fel"
            },
            full: function(e) {
                return "Textfältet är fullt"
            },
            maxLengthLabel: function(e) {
                return "Ange upp till " + e.maxLength + " tecken"
            }
        }
    };
    const Ct = e=>{
        let {"aria-atomic": a=!0, "aria-live": l="assertive", className: r, error: s, fwdRef: i, icon: d=Pe, success: c=!0} = e
          , u = w(e, ["aria-atomic", "aria-live", "className", "error", "fwdRef", "icon", "success"]);
        const f = I()
          , [m,p] = t.useState(!1)
          , b = dt(s)
          , {spacing: h} = t.useContext(Oe)
          , g = m || !!b || !!s
          , v = o("ds-input-error", r, {
            "ds-input-error--hero": "hero" === h
        });
        return t.useEffect((()=>{
            if (b && !s) {
                p(!0);
                const e = setTimeout((()=>p(!1)), 1e3);
                return ()=>clearTimeout(e)
            }
        }
        ), [s]),
        n.default.createElement(Le, {
            expanded: g,
            heightTransition: ".25s ease .1s"
        }, n.default.createElement("div", y({
            "aria-atomic": a,
            "aria-hidden": !s,
            "aria-live": l
        }, u, {
            className: v,
            ref: i
        }), s ? n.default.createElement(d, {
            label: xt[f].error(),
            size: "small",
            type: "error"
        }) : c && n.default.createElement(Be, {
            size: "small",
            type: "success"
        }), n.default.createElement("span", null, s instanceof Error ? s.message : s)))
    }
      , Nt = t.forwardRef(((e,t)=>n.default.createElement(Ct, y({}, e, {
        fwdRef: t
    }))));
    Nt.displayName = "InputError";
    const _t = t.createContext({
        border: !0,
        labeled: !1,
        onLabel: ()=>{}
        ,
        size: "default"
    });
    function kt(e) {
        let {border: t, children: a, className: l, contentProps: r, icon: s, interactive: i, onClick: d, renderLink: c, size: u} = e
          , f = w(e, ["border", "children", "className", "contentProps", "disabled", "icon", "interactive", "onClick", "renderLink", "size"]);
        const {className: m} = r
          , p = w(r, ["className"]);
        return n.default.createElement("li", y({}, f, {
            className: l,
            onClick: t ? d : void 0
        }), n.default.createElement(s, null), c(y({
            children: a,
            className: o({
                "ds-list-item__content": t || !t && !i
            }, m),
            size: t ? void 0 : {
                default: "default",
                large: "medium",
                small: "default",
                tiny: "small"
            }[u],
            wrapper: "span"
        }, p)))
    }
    function Rt(e) {
        let {children: t, className: a, contentProps: l, icon: r, onClick: s, renderLink: i, size: d, title: c, titleElement: u="h5", titleProps: f} = e
          , m = w(e, ["border", "children", "className", "contentProps", "disabled", "icon", "interactive", "onClick", "renderLink", "size", "title", "titleElement", "titleProps"]);
        const {className: p} = l
          , b = w(l, ["className"]);
        return n.default.createElement("li", y({}, m, {
            className: a,
            onClick: s
        }), n.default.createElement(u, y({
            className: "ds-list-item__title"
        }, f), n.default.createElement(r, null), i({
            children: c,
            size: {
                default: "default",
                large: "medium",
                small: "default",
                tiny: "small"
            }[d]
        })), n.default.createElement("div", y({
            className: o("ds-list-item__content", p)
        }, b), t))
    }
    function Lt(e) {
        let {children: t, className: a, contentProps: l, icon: r, label: s, labelProps: i, labelRef: d, onClick: c, ref: u, renderLink: f, size: m} = e
          , p = w(e, ["border", "children", "className", "contentProps", "disabled", "icon", "interactive", "label", "labelProps", "labelRef", "onClick", "ref", "renderLink", "size"]);
        const {className: b} = l
          , h = w(l, ["className"]);
        return n.default.createElement("div", y({}, p, {
            className: a,
            onClick: c
        }), n.default.createElement("dt", y({}, i, {
            className: "ds-list-item__label",
            ref: d
        }), n.default.createElement(r, null), n.default.createElement("span", {
            className: "ds-list-item__label__text"
        }, s)), n.default.createElement("dd", y({
            className: o("ds-list-item__content", b),
            ref: u
        }, h), f({
            children: t,
            size: {
                default: "medium",
                large: "large",
                small: "default",
                tiny: "small"
            }[m]
        })))
    }
    const zt = {
        en: {
            less: "Show less",
            more: "Show more"
        },
        fi: {
            less: "Näytä vähemmän",
            more: "Näytä enemmän"
        },
        sv: {
            less: "Visa mindre",
            more: "Visa mer"
        }
    }
      , Pt = e=>{
        let {button: t, className: a, fwdRef: l, lessId: r, messages: s, moreId: i, onLess: d, onMore: c, showLess: u, showMore: f} = e
          , m = w(e, ["button", "className", "fwdRef", "lessId", "messages", "moreId", "onLess", "onMore", "showLess", "showMore"]);
        const p = I()
          , {less: b, more: h} = s || zt[p]
          , g = o("ds-more-less", a)
          , v = t ? De : ae
          , F = t ? {
            compact: !0,
            iconPos: "right",
            type: "button"
        } : {
            size: "small"
        };
        return n.default.createElement("div", y({
            className: g,
            ref: l
        }, m), f && n.default.createElement(v, y({}, F, {
            "aria-controls": i,
            icon: R,
            onClick: c
        }), h), u && n.default.createElement(v, y({}, F, {
            "aria-controls": r,
            icon: k,
            onClick: d
        }), b))
    }
      , Bt = e=>{
        let {allowOverflowWhenOpen: a=!1, alwaysVisible: l=0, button: r=!1, children: s, contentId: i, eagerRender: o=!1, fwdRef: d, onChange: c, step: u=0} = e
          , f = w(e, ["allowOverflowWhenOpen", "alwaysVisible", "button", "children", "contentId", "eagerRender", "fwdRef", "onChange", "step"]);
        const m = t.useRef()
          , p = t.useRef()
          , [b,h] = t.useState(0)
          , [g] = t.useState((()=>E("ds-ml-")))
          , v = i || g
          , F = Array.isArray(s) ? s : [s]
          , x = ((e,t)=>e.reduce(((e,a,n)=>n % t == 0 ? [...e, [a]] : [...e.slice(0, -1), [...e[e.length - 1], a]]), []))(t.Children.toArray(F.slice(l)), u < 1 ? t.Children.count(F) : u)
          , C = e=>0 === u ? v : v + "-" + e;
        function N(e) {
            h(e ? 0 : Math.max(b - 1, 0))
        }
        function _(e) {
            h(e ? x.length : Math.min(b + 1, x.length))
        }
        return t.useImperativeHandle(d, (function() {
            return {
                close: N,
                contentRef: m,
                controlRef: p,
                open: _
            }
        }
        )),
        ct((()=>{
            if (c) {
                const e = Math.min(l, t.Children.count(F)) + x.slice(0, b).reduce(((e,t)=>e + t.length), 0);
                c(e)
            }
        }
        ), [b]),
        F.length ? n.default.createElement(n.default.Fragment, null, n.default.createElement("div", {
            "aria-live": "polite",
            ref: m
        }, l > 0 && t.Children.toArray(F.slice(0, l)).map(((e,t)=>n.default.cloneElement(e, {
            key: t
        }))), x.map(((e,t)=>n.default.createElement(Le, {
            allowOverflowWhenOpen: a,
            "aria-expanded": b > t,
            eagerRender: o,
            expanded: b > t,
            heightTransition: "250ms ease",
            id: C(t),
            key: t
        }, e)))), n.default.createElement(Pt, y({}, f, {
            button: r,
            fwdRef: p,
            lessId: C(b - 1),
            moreId: C(b),
            onLess: ()=>N(),
            onMore: ()=>_(),
            showLess: b > 0,
            showMore: b < x.length
        }))) : null
    }
      , St = t.forwardRef(((e,t)=>n.default.createElement(Bt, y({}, e, {
        fwdRef: t
    }))));
    St.displayName = "MoreLess";
    const Ot = o;
    function Tt(e) {
        let {"aria-labelledby": a, buttons: l=!1, children: r, className: s, columns: i=1, defaultValue: d="", disabled: c, fwdRef: u, name: f, onBlur: m, onChange: p, size: b, value: h, wrap: g} = e
          , v = w(e, ["aria-labelledby", "buttons", "children", "className", "columns", "defaultValue", "disabled", "fwdRef", "name", "onBlur", "onChange", "size", "value", "wrap"]);
        const [F] = t.useState((()=>E("ds-g-")))
          , [x,C] = t.useState("")
          , N = h || (x || d)
          , {spacing: _} = t.useContext(Oe)
          , {disabled: k, labelId: R, onGroup: L} = t.useContext(at)
          , z = Ot(a, R)
          , P = b || _
          , B = t.useCallback(((e,t)=>{
            const {value: a} = e.target;
            C(a),
            t && t(e, a),
            p && p(e, a)
        }
        ), [p]);
        return t.useEffect((()=>L()), [L]),
        t.useEffect((()=>C(h)), [h]),
        n.default.createElement("div", y({
            "aria-labelledby": z || void 0,
            role: "group"
        }, v, {
            className: o("ds-radio-group", {
                "ds-radio-group--buttonized": l && !g,
                "ds-radio-group--columned": i > 1,
                "ds-radio-group--wrapped": g,
                ["ds-radio-group--" + P]: "default" !== P
            }, s),
            ref: u
        }), n.default.createElement(Dt.Provider, {
            value: {
                buttons: l,
                columns: i,
                disabled: c || k,
                group: !0,
                handleBlur: (e,t)=>{
                    const {value: a} = e.target;
                    t && t(e, a),
                    m && m(e, a)
                }
                ,
                handleChange: B,
                name: f || F,
                selectedValue: N,
                size: P,
                wrap: g
            }
        }, r))
    }
    const At = t.forwardRef(((e,t)=>n.default.createElement(Tt, y({}, e, {
        fwdRef: t
    }))));
    At.displayName = "RadioGroup";
    const Dt = t.createContext({
        group: !1
    });
    function It(e) {
        let {children: a, id: l, inputRef: r, invalid: s, labelProps: i, labelRef: o, value: d} = e
          , c = w(e, ["children", "id", "inputRef", "invalid", "labelProps", "labelRef", "value", "wrapperProps", "wrapperRef"]);
        const [u] = t.useState(E("ds-option-"))
          , f = l || u;
        return n.default.createElement(n.default.Fragment, null, n.default.createElement("input", y({}, c, {
            "aria-invalid": s,
            id: f,
            ref: r,
            type: "radio",
            value: d
        })), n.default.createElement("label", y({}, i, {
            htmlFor: f,
            ref: o
        }), a || d))
    }
    function Mt(e) {
        let {checked: a, labelProps: l, onBlur: r, onChange: s, size: i, wrapperProps: d, wrapperRef: c} = e
          , u = w(e, ["checked", "labelProps", "onBlur", "onChange", "size", "wrapperProps", "wrapperRef"]);
        const {spacing: f} = t.useContext(Oe)
          , m = t.useContext(Dt)
          , {buttons: p, columns: b, handleBlur: h, handleChange: g, selectedValue: v, size: F, wrap: E} = m
          , x = i || F || f
          , C = b > 1 && !E && 100 / b + "%"
          , N = y({}, w(m, ["buttons", "columns", "group", "handleBlur", "handleChange", "selectedValue", "size", "wrap"]), u, {
            checked: a || void 0 !== u.value && u.value === v,
            labelProps: y({}, l, {
                className: o("ds-option__label", l.className)
            }),
            onBlur: e=>h(e, r),
            onChange: e=>g(e, s)
        })
          , _ = o("ds-option", {
            "ds-option--buttonized": p,
            "ds-option--disabled": N.disabled,
            "ds-option--invalid": N.invalid,
            ["ds-option--" + x]: "default" !== x
        }, d.className);
        return n.default.createElement("div", y({}, d, {
            className: _,
            ref: c,
            style: y({
                width: C
            }, d.style)
        }), n.default.createElement(It, N))
    }
    const jt = ({activePage: e, ariaLabel: t, children: a, index: l, onClick: r})=>{
        const s = o("ds-pagination__list__item", {
            "ds-pagination__list__item--active": e === l
        });
        return n.default.createElement("li", null, n.default.createElement(De, {
            "aria-current": e === l ? "page" : null,
            "aria-label": t,
            className: s,
            compact: !0,
            onClick: r
        }, a))
    }
    ;
    var Wt = {
        en: {
            firstButtonLabel: function(e) {
                return "first"
            },
            lastButtonLabel: function(e) {
                return "last"
            },
            nextButtonLabel: function(e) {
                return "next"
            },
            page: function(e) {
                return "page " + e.pageNumber
            },
            pagination: function(e) {
                return "pagination"
            },
            previousButtonLabel: function(e) {
                return "previous"
            }
        },
        fi: {
            firstButtonLabel: function(e) {
                return "ensimmäinen"
            },
            lastButtonLabel: function(e) {
                return "viimeinen"
            },
            nextButtonLabel: function(e) {
                return "seuraava"
            },
            page: function(e) {
                return "sivu " + e.pageNumber
            },
            pagination: function(e) {
                return "sivutus"
            },
            previousButtonLabel: function(e) {
                return "edellinen"
            }
        },
        sv: {
            firstButtonLabel: function(e) {
                return "främst"
            },
            lastButtonLabel: function(e) {
                return "sist"
            },
            nextButtonLabel: function(e) {
                return "följande"
            },
            page: function(e) {
                return "sida " + e.pageNumber
            },
            pagination: function(e) {
                return "paginering"
            },
            previousButtonLabel: function(e) {
                return "föregående"
            }
        }
    };
    const Ht = 7;
    function qt(e, t) {
        switch (t.type) {
        case "NEXT":
            return Math.min(e + 1, t.pageCount - 1);
        case "PREVIOUS":
            return Math.max(0, e - 1);
        case "FIRST":
            return 0;
        case "LAST":
            return t.pageCount - 1;
        case "PAGE":
            return t.index;
        default:
            return e
        }
    }
    function Vt(e) {
        let {activePage: a=1, arrowControls: l="prevNext", fwdRef: r, hideSegments: s=!1, indicators: i=!1, numberedControlLabels: d, onChange: c, pageCount: u, segmentCount: f=Ht, size: m="default", style: p} = e
          , b = w(e, ["activePage", "arrowControls", "className", "fwdRef", "hideSegments", "indicators", "numberedControlLabels", "onChange", "pageCount", "segmentCount", "size", "style"]);
        const h = I()
          , {firstButtonLabel: g, lastButtonLabel: v, nextButtonLabel: F, page: E, pagination: x, previousButtonLabel: C} = Wt[h]
          , N = a > u || a < 1 ? 0 : a - 1
          , [_,k] = t.useReducer(qt, N)
          , R = e=>k(y({}, e, {
            pageCount: u
        }))
          , L = t.useMemo((()=>function(e, t, a, n) {
            if (e <= a || n)
                return [...new Array(e).keys()];
            const l = Math.max(0, Math.min(e - a, t - Math.floor(a / 2)))
              , r = new Array(a);
            for (let e = 0; e < a; e += 1)
                r[e] = e + l;
            return r[0] > 0 && (r[0] = 0,
            r[1] = null),
            r[r.length - 1] < e - 1 && (r[r.length - 1] = e - 1,
            r[r.length - 2] = null),
            r
        }(u, _, f, i)), [_, u, f, i]);
        return ct((()=>{
            c && c(_ + 1)
        }
        ), [_]),
        ct((()=>{
            N !== _ && R({
                index: N,
                type: "PAGE"
            })
        }
        ), [N]),
        n.default.createElement("nav", y({
            "aria-label": x(),
            className: o("ds-pagination", {
                ["ds-pagination--" + m]: "default" !== m && !i
            }),
            ref: r,
            style: p
        }, b), ("all" === l || "prevNext" === l) && n.default.createElement("div", {
            className: "ds-pagination__button-container"
        }, "all" === l && n.default.createElement(De, {
            compact: "small" === m,
            disabled: 0 === _,
            icon: S,
            iconLabel: g(),
            minified: !0,
            onClick: ()=>R({
                type: "FIRST"
            }),
            size: "small" !== m ? m : null
        }), ("all" === l || "prevNext" === l) && n.default.createElement(De, {
            compact: "small" === m,
            disabled: 0 === _,
            icon: B,
            iconLabel: C(),
            minified: !0,
            onClick: ()=>R({
                type: "PREVIOUS"
            }),
            size: "small" !== m ? m : null
        })), !s && n.default.createElement("ul", {
            className: o("ds-pagination__list", {
                "ds-pagination__list--indicators": i,
                "ds-pagination__list--no-arrow-controls": "none" === l
            })
        }, L.map(((e,t)=>{
            const a = d && d.length === u ? d[e] : E({
                pageNumber: e + 1
            });
            return i ? n.default.createElement("li", {
                key: t
            }, n.default.createElement("div", {
                className: o("ds-pagination__list__item", "ds-pagination__list__item--indicator", {
                    "ds-pagination__list__item--active": _ === e
                })
            })) : "number" == typeof e ? n.default.createElement(jt, {
                activePage: _,
                ariaLabel: a,
                index: e,
                key: t,
                onClick: ()=>R({
                    index: e,
                    type: "PAGE"
                })
            }, e + 1) : n.default.createElement("li", {
                key: t
            }, n.default.createElement("div", {
                className: o("ds-pagination__list__item", "ds-pagination__list__item--ellipsis")
            }, "..."))
        }
        ))), ("all" === l || "prevNext" === l) && n.default.createElement("div", {
            className: o("ds-pagination__button-container")
        }, ("all" === l || "prevNext" === l) && n.default.createElement(De, {
            className: o({
                "ds-pagination__button-container__next--no-page-controls": s
            }),
            compact: "small" === m,
            disabled: _ === u - 1,
            icon: P,
            iconLabel: F(),
            minified: !0,
            onClick: ()=>R({
                type: "NEXT"
            }),
            size: "small" !== m ? m : null
        }), "all" === l && n.default.createElement(De, {
            compact: "small" === m,
            disabled: _ === u - 1,
            icon: O,
            iconLabel: v(),
            minified: !0,
            onClick: ()=>R({
                type: "LAST"
            }),
            size: "small" !== m ? m : null
        })))
    }
    const Kt = t.forwardRef(((e,t)=>n.default.createElement(Vt, y({}, e, {
        fwdRef: t
    }))));
    Kt.displayName = "Pagination";
    const Gt = o;
    function Ut(e) {
        let {"aria-labelledby": a, children: l, className: r, defaultValue: s="", disabled: i, fwdRef: d, invalid: c, name: u, onChange: f, segmentMinWidth: m, size: p, value: b} = e
          , h = w(e, ["aria-labelledby", "children", "className", "defaultValue", "disabled", "fwdRef", "invalid", "name", "onChange", "segmentMinWidth", "size", "value"]);
        const [g] = t.useState((()=>E("ds-g-")))
          , [v,F] = t.useState("")
          , {spacing: x} = t.useContext(Oe)
          , {disabled: C, labelId: N} = t.useContext(at)
          , _ = p || x
          , k = Gt(a, N);
        return t.useEffect((()=>{
            b !== v && F(b || s)
        }
        ), [b]),
        n.default.createElement("div", y({
            "aria-labelledby": k,
            className: o("ds-segmented-button", r, {
                ["ds-segmented-button--" + _]: "default" !== _
            }),
            ref: d,
            role: "group"
        }, h), t.Children.map(l, (e=>{
            const {className: a, onChange: n, value: l} = e.props
              , r = {
                checked: l === v,
                className: a,
                disabled: i || C,
                invalid: c,
                labelProps: {
                    style: {
                        minWidth: m
                    }
                },
                name: u || g,
                onChange: e=>function(e, t) {
                    F(e.target.value),
                    t && t(e, e.target.value),
                    f && f(e, e.target.value)
                }(e, n)
            };
            return t.cloneElement(e, r)
        }
        )))
    }
    const Xt = t.forwardRef(((e,t)=>n.default.createElement(Ut, y({}, e, {
        fwdRef: t
    }))));
    Xt.displayName = "SegmentedButton";
    const Yt = e=>{
        let {className: a, fwdRef: l, invalid: r, size: s} = e
          , i = w(e, ["className", "fwdRef", "invalid", "multiple", "size"]);
        const {spacing: d} = t.useContext(Oe)
          , {disabled: c, id: u, required: f} = t.useContext(at)
          , m = s || d;
        return n.default.createElement("select", y({
            "aria-invalid": !!r || void 0,
            disabled: c,
            id: u,
            required: f
        }, i, {
            className: o("ds-select", a, {
                ["ds-select--" + m]: "default" !== m,
                "ds-select--invalid": r
            }),
            ref: l
        }))
    }
      , Jt = t.forwardRef(((e,t)=>n.default.createElement(Yt, y({}, e, {
        fwdRef: t
    }))));
    Jt.displayName = "Select";
    const Qt = e=>{
        let {"aria-label": t, className: a, fwdRef: l, height: r=48, onDarkBg: s=!1, serviceName: i, serviceProps: d, style: c} = e
          , u = w(e, ["aria-label", "className", "fwdRef", "height", "onDarkBg", "serviceName", "serviceProps", "style"]);
        const f = parseFloat(H.scalefactor) / 100 * 16
          , m = .6 * r / f
          , p = .11 * r * 2 / f
          , b = m < 1.9 ? s ? j.text.inverse.default : j.text.default : s ? j.text.inverse.large : j.text.large;
        return n.default.createElement("div", y({
            "aria-label": t
        }, u, {
            className: o("ds-service-identity", a),
            ref: l,
            style: y({}, c)
        }), n.default.createElement("div", {
            className: "ds-service-identity__logo-mark",
            style: {
                height: r,
                width: r
            }
        }), n.default.createElement("span", y({}, d, {
            className: o("ds-service-identity__name"),
            style: {
                color: b,
                fontSize: m + "rem",
                lineHeight: r / f + "rem",
                marginLeft: p + "rem",
                paddingLeft: p + "rem"
            }
        }), i))
    }
      , Zt = t.forwardRef(((e,t)=>n.default.createElement(Qt, y({}, e, {
        fwdRef: t
    }))));
    Zt.displayName = "ServiceIdentity";
    const $t = e=>{
        let {children: t, className: a, fwdRef: l, onClick: r} = e
          , s = w(e, ["children", "className", "fwdRef", "onClick"]);
        return n.default.createElement("tr", y({}, s, {
            className: o("ds-table-action-row", a),
            onClick: r,
            onKeyDown: e=>function(e) {
                !r || " " !== e.key && "Space" !== e.key && "Enter" !== e.key || (e.preventDefault(),
                r(e))
            }(e),
            ref: l,
            tabIndex: "0"
        }), t)
    }
      , ea = t.forwardRef(((e,t)=>n.default.createElement($t, y({}, e, {
        fwdRef: t
    }))));
    ea.displayName = "TableActionRow";
    const ta = e=>{
        let {active: a, children: l, fwdRef: r, index: s, onKeyDown: i, onSelect: d, small: c} = e
          , u = w(e, ["active", "children", "fwdRef", "index", "label", "onKeyDown", "onSelect", "panelProps", "small", "startActive"]);
        const f = o("ds-tab", {
            "ds-tab--active": a,
            "ds-tab--small": c
        })
          , m = t.useRef(null);
        return n.default.createElement("li", y({
            className: f,
            ref: r,
            role: "presentation"
        }, u, {
            onKeyDown: e=>i(e, s)
        }), n.default.createElement("a", {
            href: "#",
            onClick: e=>{
                e.preventDefault(),
                d(e, s)
            }
            ,
            ref: m,
            tabIndex: a ? 0 : -1
        }, l))
    }
      , aa = t.forwardRef(((e,t)=>n.default.createElement(ta, y({}, e, {
        fwdRef: t
    }))));
    aa.displayName = "Tab";
    const na = -1
      , la = 1
      , ra = "undefined" != typeof window
      , sa = {
        select: {
            en: "Choose tab",
            fi: "Valitse välilehti",
            sv: "Välj flik"
        }
    };
    var ia = t.useLayoutEffect
      , oa = function(e, t) {
        "function" != typeof e ? e.current = t : e(t)
    }
      , da = {
        "min-height": "0",
        "max-height": "none",
        height: "0",
        visibility: "hidden",
        overflow: "hidden",
        position: "absolute",
        "z-index": "-1000",
        top: "0",
        right: "0"
    }
      , ca = function(e) {
        Object.keys(da).forEach((function(t) {
            e.style.setProperty(t, da[t], "important")
        }
        ))
    }
      , ua = null;
    var fa = function() {}
      , ma = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"]
      , pa = !!document.documentElement.currentStyle
      , ba = function(e) {
        var a, n, l = (a = e,
        n = t.useRef(a),
        ia((function() {
            n.current = a
        }
        )),
        n);
        t.useLayoutEffect((function() {
            var e = function(e) {
                l.current(e)
            };
            return window.addEventListener("resize", e),
            function() {
                window.removeEventListener("resize", e)
            }
        }
        ), [])
    }
      , ha = t.forwardRef((function(e, a) {
        var n = e.cacheMeasurements
          , l = e.maxRows
          , r = e.minRows
          , s = e.onChange
          , i = void 0 === s ? fa : s
          , o = e.onHeightChange
          , d = void 0 === o ? fa : o
          , c = w(e, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"])
          , u = void 0 !== c.value
          , f = t.useRef(null)
          , m = function(e, a) {
            var n = t.useRef();
            return t.useCallback((function(t) {
                e.current = t,
                n.current && oa(n.current, null),
                n.current = a,
                a && oa(a, t)
            }
            ), [a])
        }(f, a)
          , p = t.useRef(0)
          , b = t.useRef()
          , h = function() {
            var e = f.current
              , t = n && b.current ? b.current : function(e) {
                var t = window.getComputedStyle(e);
                if (null === t)
                    return null;
                var a, n = (a = t,
                ma.reduce((function(e, t) {
                    return e[t] = a[t],
                    e
                }
                ), {})), l = n.boxSizing;
                return "" === l ? null : (pa && "border-box" === l && (n.width = parseFloat(n.width) + parseFloat(n.borderRightWidth) + parseFloat(n.borderLeftWidth) + parseFloat(n.paddingRight) + parseFloat(n.paddingLeft) + "px"),
                {
                    sizingStyle: n,
                    paddingSize: parseFloat(n.paddingBottom) + parseFloat(n.paddingTop),
                    borderSize: parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth)
                })
            }(e);
            if (t) {
                b.current = t;
                var a = function(e, t, a, n) {
                    void 0 === a && (a = 1),
                    void 0 === n && (n = 1 / 0),
                    ua || ((ua = document.createElement("textarea")).setAttribute("tabindex", "-1"),
                    ua.setAttribute("aria-hidden", "true"),
                    ca(ua)),
                    null === ua.parentNode && document.body.appendChild(ua);
                    var l = e.paddingSize
                      , r = e.borderSize
                      , s = e.sizingStyle
                      , i = s.boxSizing;
                    Object.keys(s).forEach((function(e) {
                        var t = e;
                        ua.style[t] = s[t]
                    }
                    )),
                    ca(ua),
                    ua.value = t;
                    var o = function(e, t) {
                        var a = e.scrollHeight;
                        return "border-box" === t.sizingStyle.boxSizing ? a + t.borderSize : a - t.paddingSize
                    }(ua, e);
                    ua.value = "x";
                    var d = ua.scrollHeight - l
                      , c = d * a;
                    "border-box" === i && (c = c + l + r),
                    o = Math.max(c, o);
                    var u = d * n;
                    return "border-box" === i && (u = u + l + r),
                    [o = Math.min(u, o), d]
                }(t, e.value || e.placeholder || "x", r, l)
                  , s = a[0]
                  , i = a[1];
                p.current !== s && (p.current = s,
                e.style.setProperty("height", s + "px", "important"),
                d(s, {
                    rowHeight: i
                }))
            }
        };
        return t.useLayoutEffect(h),
        ba(h),
        t.createElement("textarea", y({}, c, {
            onChange: function(e) {
                u || h(),
                i(e)
            },
            ref: m
        }))
    }
    ));
    const ga = o;
    function va({className: e, inputClassName: a, inputProps: l, inputRef: r, type: s, unit: i, unitPos: d, unitProps: c, wrapperProps: u}) {
        const [f] = t.useState((()=>E("ds-ti-unit-")))
          , m = c.id || f
          , p = o(u.className, "ds-text-input", "ds-text-input--unit-" + d, "inside" === d && e)
          , b = l["aria-labelledby"];
        return n.default.createElement("div", y({}, u, {
            className: p
        }), n.default.createElement("input", y({}, l, {
            "aria-labelledby": ga(b, m),
            className: o(a, "outside" === d && e),
            ref: r,
            type: s
        })), n.default.createElement("span", y({}, c, {
            className: o("ds-text-input__unit", c.className),
            id: m
        }), i))
    }
    function Fa({counter: e, inputRef: a, maxLength: l, statusMessage: r, valueLength: s}) {
        if (!e)
            return null;
        const i = I()
          , {spacing: d} = t.useContext(Oe)
          , c = o("ds-counter", {
            "ds-counter--hero": "hero" === d
        })
          , u = r || xt[i].full();
        return "string" == typeof e ? n.default.createElement("div", {
            className: c
        }, e) : n.default.createElement("div", {
            className: c,
            onClick: ()=>a.current && a.current.focus()
        }, l ? s + " / " + l : s, l > 0 && s >= l && n.default.createElement(Y, {
            hidden: !0
        }, u))
    }
    function Ea({children: e, className: t, wrapperProps: a}) {
        return n.default.createElement("div", y({}, a, {
            className: o(t, "ds-text-input--counter")
        }), e)
    }
    function ya(e) {
        let {amount: a, "aria-describedby": l, "aria-labelledby": r, autosize: s=!1, changed: i=!1, className: d, counter: c=!1, fwdRef: u, hasFocus: f, invalid: m=!1, maxLength: p, maxRows: b, readonly: h=!1, required: g, rows: v=1, size: F, statusMessage: x, type: C="text", unit: N, unitPos: _="inside", unitProps: k={}, unitWrapProps: R={}, wrapperProps: L={}} = e
          , z = w(e, ["amount", "aria-describedby", "aria-labelledby", "autosize", "changed", "className", "counter", "fwdRef", "hasFocus", "invalid", "maxLength", "maxRows", "readonly", "required", "rows", "size", "statusMessage", "type", "unit", "unitPos", "unitProps", "unitWrapProps", "wrapperProps"]);
        const P = I()
          , B = t.useRef()
          , S = u && "function" != typeof u ? u : B
          , O = ot(S, f)
          , {spacing: T} = t.useContext(Oe)
          , {disabled: A, id: D, labelId: M, required: j} = t.useContext(at)
          , W = F || T
          , H = h ? "readOnly" : null
          , q = null != g ? g : j
          , [V] = t.useState((()=>E("ds-ti-ml-")))
          , K = a ? "number" : C
          , G = y({
            "aria-describedby": ga(l, {
                [V]: p
            }) || void 0,
            "aria-invalid": m,
            "aria-labelledby": ga(r, {
                [M]: M && (r || N)
            }) || void 0,
            "aria-required": q || void 0,
            disabled: A,
            id: D,
            maxLength: p,
            readOnly: H,
            required: q
        }, z)
          , U = o(!N && [d, "ds-text-input", {
            "ds-text-input--amount": a
        }], "ds-input-behavior", {
            "ds-input-behavior--changed": i,
            "ds-input-behavior--disabled": G.disabled,
            "ds-input-behavior--focus": O,
            "ds-input-behavior--invalid": m,
            "ds-input-behavior--readonly": h,
            ["ds-input-behavior--" + W]: "default" !== W
        })
          , X = p ? n.default.createElement("span", {
            id: V,
            style: {
                display: "none"
            }
        }, xt[P].maxLengthLabel({
            maxLength: p
        })) : null
          , Y = !N && !a && c
          , J = Y && v < 2
          , Q = N ? n.default.createElement(va, {
            className: U,
            inputClassName: d,
            inputProps: G,
            inputRef: S,
            type: K,
            unit: N,
            unitPos: _,
            unitProps: k,
            wrapperProps: y({}, R, L)
        }) : s || J ? n.default.createElement(ha, y({}, G, {
            className: o(!Y && U),
            maxRows: b,
            minRows: v || 1,
            ref: S
        })) : v > 1 ? n.default.createElement("textarea", y({}, G, {
            className: o(!Y && U),
            ref: S,
            rows: v
        })) : n.default.createElement("input", y({}, G, {
            className: o(U),
            ref: S,
            type: K
        }));
        return n.default.createElement(n.default.Fragment, null, Y ? n.default.createElement(Ea, {
            className: U,
            wrapperProps: L
        }, Q, n.default.createElement(Fa, {
            counter: Y,
            inputRef: S,
            maxLength: p,
            statusMessage: x,
            valueLength: String(G.value).length
        })) : Q, X)
    }
    const wa = t.forwardRef(((e,t)=>n.default.createElement(ya, y({}, e, {
        fwdRef: t
    }))));
    wa.displayName = "TextInput";
    const xa = e=>{
        let {className: t, fwdRef: a} = e
          , l = w(e, ["className", "fwdRef"]);
        return n.default.createElement("div", y({}, l, {
            className: o("ds-tile__content", t),
            ref: a
        }))
    }
      , Ca = t.forwardRef(((e,t)=>n.default.createElement(xa, y({}, e, {
        fwdRef: t
    }))));
    Ca.displayName = "TileContent";
    const Na = e=>{
        let {external: t, href: a} = e
          , l = w(e, ["external", "href"]);
        return n.default.createElement("a", y({
            href: a,
            role: a ? void 0 : "button",
            tabIndex: 0,
            target: t ? "_blank" : void 0
        }, l))
    }
      , _a = e=>{
        let {children: t, useWrappingLink: a} = e
          , l = w(e, ["children", "useWrappingLink"]);
        return a ? n.default.createElement(Na, y({
            className: "ds-tile__link-wrap"
        }, l), t) : t
    }
    ;
    function ka(e) {
        let {children: t, className: a, externalLink: l=!1, externalLinkText: r, fwdRef: s, href: i, imgProps: d={
            alt: ""
        }, imgSrc: c, interactiveArea: u="title", onClick: f, rel: m, tagName: p="div", title: b, titleTagName: h="h2", wrapContent: g=!0} = e
          , v = w(e, ["children", "className", "externalLink", "externalLinkText", "fwdRef", "href", "imgProps", "imgSrc", "interactiveArea", "onClick", "rel", "tagName", "title", "titleTagName", "wrapContent"]);
        const F = I()
          , E = !b && (i || f)
          , x = o([a, "ds-tile", {
            "ds-tile--link-stretched": "tile" === u,
            "ds-tile--link-wrap": E,
            "ds-tile--linked": i || f,
            "ds-tile--with-image": c
        }])
          , C = l ? z : L
          , N = l ? r || M.externalLink[F] : void 0
          , _ = g ? Ca : n.default.Fragment
          , k = i ? m || "noopener" : void 0
          , R = f && !i ? e=>(" " === e.key || "Enter" === e.key) && f() : void 0;
        return n.default.createElement(p, y({}, v, {
            className: x,
            ref: s
        }), n.default.createElement(_a, {
            external: l,
            href: i,
            onClick: f,
            onKeyDown: R,
            rel: k,
            useWrappingLink: !!E
        }, b && n.default.createElement(h, {
            className: "ds-tile__title"
        }, n.default.createElement((()=>i || f ? n.default.createElement(Na, {
            className: "ds-tile__link",
            external: l,
            href: i,
            onClick: f,
            onKeyDown: R,
            rel: k
        }, b, n.default.createElement(C, {
            className: "ds-tile__icon",
            label: N,
            type: "action"
        })) : n.default.createElement(n.default.Fragment, null, b)), null)), t && n.default.createElement(_, null, t), c && n.default.createElement("div", {
            className: "ds-tile__image"
        }, n.default.createElement("img", y({
            src: c
        }, d)))))
    }
    const Ra = t.forwardRef(((e,t)=>n.default.createElement(ka, y({}, e, {
        fwdRef: t
    }))));
    Ra.displayName = "Tile";
    const La = o
      , za = {
        empty: {
            en: "Mandatory",
            fi: "Pakollinen",
            sv: "Obligatorisk"
        }
    };
    e.Action = ae,
    e.Alert = function(e) {
        let {allowHide: a=!1, children: l, className: r, contentType: s="dynamic", embedded: i=!1, error: d=!1, flash: c=!1, focusCloseButton: u=!1, icon: f, iconStyle: m, inline: p=!1, onHide: b, success: h=!1, timeout: g, title: v=null, titleTag: F, wrapperTag: E="div"} = e
          , x = w(e, ["allowHide", "children", "className", "contentType", "embedded", "error", "flash", "focusCloseButton", "icon", "iconStyle", "inline", "onHide", "success", "timeout", "title", "titleTag", "wrapperTag"]);
        const [C,N] = t.useState(!0)
          , k = t.useCallback((e=>{
            null !== e && u && (a || c) && C && e.focus()
        }
        ), [a, c, u, C])
          , R = o("ds-alert", r, {
            "ds-alert--embedded": i,
            "ds-alert--error": d && !p,
            "ds-alert--flash": c,
            "ds-alert--inline": p,
            "ds-alert--inline-large": "large" === p,
            "ds-alert--success": h && !d && !p,
            "ds-alert--visible": C && (c || p)
        })
          , L = d ? "alert" : "status"
          , z = {
            embedded: i,
            error: d,
            flash: c,
            icon: f,
            inline: p,
            style: m,
            success: h
        }
          , P = I()
          , B = F || (i ? "h3" : "h2");
        function S(e) {
            e && e.preventDefault(),
            N(!1)
        }
        g || !c && !p || (g = c ? 5e3 : 0),
        (p || c) && (a = !1),
        (c || p) && (v = null),
        t.useEffect((()=>{
            if ((c || p) && g > 0) {
                const e = setTimeout((()=>S()), g);
                return ()=>{
                    clearTimeout(e)
                }
            }
        }
        ), []),
        t.useEffect((()=>{
            b && !C && b()
        }
        ), [C]);
        const O = n.default.createElement(n.default.Fragment, null, n.default.createElement("div", {
            className: "ds-alert__icon"
        }, n.default.createElement(Me, z)), n.default.createElement("div", {
            className: "ds-alert__body"
        }, (a || c) && n.default.createElement(De, {
            "aria-live": "off",
            className: "ds-alert__close",
            compact: c,
            ghost: !0,
            icon: _,
            iconLabel: Ie[P].close,
            iconProps: {
                type: "default"
            },
            onClick: S,
            onKeyDown: function(e) {
                " " !== e.key && "Enter" !== e.key && "Escape" !== e.key || S(e)
            },
            ref: k,
            size: "default",
            tabIndex: "0",
            type: "button"
        }), v && n.default.createElement(B, {
            className: "ds-alert__title"
        }, v), l))
          , T = "static" === s ? n.default.createElement(E, y({
            className: R,
            role: void 0
        }, x), O) : n.default.createElement(Y, y({
            className: R,
            role: L,
            tagName: E
        }, x), O);
        return a || c || p ? n.default.createElement(Le, {
            allowOverflowWhenOpen: !0,
            expanded: C
        }, T) : T
    }
    ,
    e.AnimCheck = We,
    e.Badge = Ve,
    e.Button = De,
    e.ButtonRow = function(e) {
        let {children: a, className: l, stacked: r} = e
          , s = w(e, ["children", "className", "stacked"]);
        const [i,d] = t.useState(!1)
          , {stacked: c} = t.useContext(Oe)
          , u = void 0 !== r ? r : c;
        return n.default.createElement("div", y({}, s, {
            className: o("ds-button-row", {
                "ds-button-row--primary": i,
                "ds-button-row--unstacked": !u
            }, l)
        }), n.default.createElement(Te.Provider, {
            value: {
                registerPrimary: ()=>d(!0),
                stacked: r
            }
        }, a))
    }
    ,
    e.Checkbox = function(e) {
        let {children: a, disabled: l, id: r, indeterminate: s=!1, inputRef: i, invalid: d=!1, labelProps: c={}, labelRef: u, onChange: f, size: m, wrapperProps: p={}, wrapperRef: b} = e
          , h = w(e, ["children", "disabled", "id", "indeterminate", "inputRef", "invalid", "labelProps", "labelRef", "onChange", "size", "wrapperProps", "wrapperRef"]);
        const {spacing: g} = t.useContext(Oe)
          , {disabled: v} = t.useContext(at)
          , {buttons: F, columns: x, disabled: C, invalid: N, size: _, wrap: k} = t.useContext(st)
          , R = l || C || v
          , L = !h.checked && s
          , z = n.default.useRef()
          , P = it(i, z)
          , B = d || N
          , S = m || _ || g
          , [O] = t.useState((()=>E("ds-cb-")))
          , T = r || O
          , A = o("ds-checkbox", {
            "ds-checkbox--buttonized": F && "tiny" !== S,
            "ds-checkbox--disabled": R,
            "ds-checkbox--invalid": B,
            ["ds-checkbox--" + S]: "default" !== S
        }, p.className)
          , D = x > 1 && !k && 100 / x + "%"
          , I = o("ds-checkbox__label", c.className);
        return t.useEffect((()=>{
            z.current && (z.current.indeterminate = L)
        }
        ), [L, z]),
        n.default.createElement("div", y({}, p, {
            className: A,
            ref: b,
            style: y({
                width: D
            }, p.style)
        }), n.default.createElement("input", y({}, h, {
            "aria-invalid": B,
            disabled: R,
            id: T,
            onChange: e=>{
                f && f(e, e.target.checked)
            }
            ,
            ref: P,
            type: "checkbox"
        })), n.default.createElement("label", y({}, c, {
            className: I,
            htmlFor: T,
            ref: u
        }), a))
    }
    ,
    e.CheckboxGroup = rt,
    e.CircledIcon = function(e) {
        let {className: t, height: a=68, onDarkBg: l=!1, size: r, width: s=68} = e
          , i = w(e, ["className", "height", "onDarkBg", "size", "width"]);
        const d = "ds-circled-icon"
          , c = o(t, d, {
            [d + "--" + r]: "medium" !== r,
            [d + "--inverse"]: l
        });
        return n.default.createElement(bt, y({
            className: c,
            height: a,
            width: s
        }, i))
    }
    ,
    e.Col = Xe,
    e.Expander = pt,
    e.ExpanderList = e=>{
        let {accordion: a=!1, children: l, className: r, contentTag: s, embedded: i, headerTag: d, indented: c, onClose: u, onOpen: f, size: m} = e
          , p = w(e, ["accordion", "children", "className", "contentTag", "embedded", "headerTag", "indented", "onClose", "onOpen", "size"]);
        const [b,h] = t.useState(null);
        const g = o("ds-expander-list", r);
        return n.default.createElement("div", y({}, p, {
            className: g
        }), n.default.createElement(ft.Provider, {
            value: {
                accordion: a,
                contentTag: s,
                current: b,
                embedded: i,
                headerTag: d,
                indented: c,
                onClose: e=>{
                    u && u(e)
                }
                ,
                onOpen: e=>{
                    f && f(e)
                }
                ,
                registerItem: ()=>E("expander_"),
                size: m,
                toggleExpander: e=>h(e)
            }
        }, l))
    }
    ,
    e.Form = e=>{
        let {children: t, spacing: a, stacked: l=!1, visualizeRequiredFields: r=!1} = e
          , s = w(e, ["children", "spacing", "stacked", "visualizeRequiredFields"]);
        const i = Se.includes(a) ? a : "default";
        return n.default.createElement("form", s, n.default.createElement(Oe.Provider, {
            value: {
                spacing: i,
                stacked: l,
                visualizeRequiredFields: r
            }
        }, t))
    }
    ,
    e.FormContext = Oe,
    e.FormRow = tt,
    e.FormRowContext = at,
    e.Icon = ht,
    e.InputError = Nt,
    e.List = function(e) {
        let {border: a=!0, children: l, className: r, indented: s, size: i="default", stacked: d} = e
          , c = w(e, ["border", "children", "className", "indented", "size", "stacked"]);
        const u = t.useRef(null)
          , [f,m] = t.useState(!1)
          , p = "all" === a || "none" !== a && a
          , b = o("ds-list", {
            ["ds-list--border-" + p]: "string" == typeof p,
            "ds-list--border-none": !p,
            "ds-list--indented": p && "button" !== p && s,
            "ds-list--labeled": f,
            "ds-list--stacked": f && d,
            ["ds-list--" + i]: i && "default" !== i
        }, r)
          , h = f ? "dl" : "ul";
        return n.default.createElement(h, y({}, c, {
            className: b,
            ref: u
        }), n.default.createElement(_t.Provider, {
            value: {
                border: p,
                labeled: f,
                onLabel: ()=>m(!0),
                size: i
            }
        }, l))
    }
    ,
    e.ListItem = function(e) {
        let {"aria-label": a, className: l, contentProps: r={}, controlIcon: s, controlIconLabel: i, disabled: d, external: c, href: u, icon: f, iconLabel: m, iconSize: p="default", itemRef: b, onClick: h, onFocus: g, onKeyDown: v, rel: F, role: E, tabIndex: x, target: C} = e
          , N = w(e, ["aria-label", "className", "contentProps", "controlIcon", "controlIconLabel", "disabled", "external", "href", "icon", "iconLabel", "iconSize", "itemRef", "onClick", "onFocus", "onKeyDown", "rel", "role", "tabIndex", "target"]);
        const {label: _, title: k} = N
          , {border: R, labeled: P, onLabel: B, size: S} = t.useContext(_t)
          , O = I()
          , T = !!u || !!h
          , A = T && d
          , D = u && !F ? "noopener" : F
          , j = u && c && !C ? "_blank" : C
          , W = o("ds-list-item", {
            "ds-list-item--disabled": A,
            ["ds-list-item--icon-" + p]: f,
            "ds-list-item--interactive": T
        }, l)
          , H = _ || P ? Lt : k ? Rt : kt
          , q = A ? -1 : x
          , V = c && !i ? M.externalLink[O] : i
          , K = s || (c ? z : L)
          , G = ({className: e})=>T ? n.default.createElement(K, {
            className: o("ds-list-item__link__icon", e),
            label: V,
            size: "tiny" === S ? "small" : "default",
            type: A ? "disabled" : "action"
        }) : null
          , U = !R && s ? "left" : "right";
        return ut((()=>{
            _ && B()
        }
        ), [B]),
        n.default.createElement(H, y({}, N, {
            "aria-label": T ? void 0 : a,
            border: R,
            className: W,
            contentProps: r,
            disabled: A,
            icon: ()=>f ? n.default.createElement(f, {
                className: "ds-list-item__icon",
                label: m,
                size: p,
                type: A ? "disabled" : "default"
            }) : null,
            interactive: T,
            onFocus: T ? void 0 : g,
            onKeyDown: T ? void 0 : v,
            ref: b,
            renderLink: e=>{
                let {children: t, className: l, wrapper: r} = e
                  , s = w(e, ["children", "className", "wrapper"]);
                return !R && T ? n.default.createElement(ee, y({
                    className: o("ds-list-item__action", l),
                    disabled: A,
                    external: c,
                    href: u,
                    icon: G,
                    iconPos: U,
                    onClick: h,
                    onFocus: g,
                    onKeyDown: v
                }, s), t) : u ? n.default.createElement("a", y({
                    "aria-label": a,
                    className: o("ds-list-item__link", l),
                    href: u,
                    onClick: h,
                    onFocus: g,
                    onKeyDown: v,
                    rel: D,
                    tabIndex: A ? -1 : x || 0,
                    target: j
                }, s), t, n.default.createElement(G, null)) : h ? n.default.createElement("button", y({
                    "aria-label": a,
                    className: o("ds-list-item__link", l),
                    onClick: h,
                    onFocus: g,
                    onKeyDown: v,
                    tabIndex: A ? -1 : x || 0,
                    type: "button"
                }, s), t, n.default.createElement(G, null)) : r ? n.default.createElement(r, y({
                    className: l
                }, s), t, n.default.createElement(G, null)) : n.default.createElement(n.default.Fragment, null, t, n.default.createElement(G, null))
            }
            ,
            role: E,
            size: S,
            tabIndex: T ? void 0 : q
        }))
    }
    ,
    e.Loading = $,
    e.LocaleProvider = ({children: e, locale: t})=>n.default.createElement(D.Provider, {
        value: A(t)
    }, e),
    e.MoreLess = St,
    e.Option = function(e) {
        let {invalid: a=!1, labelProps: l={}, wrapperProps: r={}} = e
          , s = w(e, ["invalid", "labelProps", "wrapperProps"]);
        const {group: i} = t.useContext(Dt)
          , o = i ? Mt : It;
        return n.default.createElement(o, y({
            invalid: a,
            labelProps: l,
            wrapperProps: r
        }, s))
    }
    ,
    e.Pagination = Kt,
    e.ProgressBar = function(e) {
        let {className: t, max: a, min: l=0, style: r, value: s} = e
          , i = w(e, ["className", "max", "min", "style", "value"]);
        const d = "string" == typeof s ? parseFloat(s) || 0 : s
          , c = "string" == typeof s && s.replace(/^\d+(\.\d*)?/, "").trim()
          , u = a || Math.pow(10, Math.ceil(Math.log(d) / Math.LN10));
        return n.default.createElement("div", y({}, i, {
            "aria-valuemax": u,
            "aria-valuemin": l,
            "aria-valuenow": d,
            "aria-valuetext": c ? s : void 0,
            className: o("ds-progress-bar", {
                "ds-progress-bar--empty": d === l
            }, t),
            role: "progressbar",
            style: y({}, r, {
                paddingLeft: (d - l) / (u - l) * 100 + "%"
            })
        }))
    }
    ,
    e.RadioGroup = At,
    e.Row = Qe,
    e.SegmentedButton = Xt,
    e.Select = Jt,
    e.ServiceIdentity = Zt,
    e.StatusMessage = Y,
    e.Tab = aa,
    e.Table = function(e) {
        let {actionRows: a=!1, caption: l=null, children: r, className: s, layout: i="default", spacing: d="default", zebra: c=null} = e
          , u = w(e, ["actionRows", "caption", "children", "className", "layout", "spacing", "zebra"]);
        const f = function() {
            let e = 0;
            return t.Children.forEach(r, (a=>{
                a && "tbody" === a.type && (e += t.Children.count(a.props.children))
            }
            )),
            e
        }()
          , m = o("ds-table", {
            "ds-table--action-rows": a,
            "ds-table--tile": "tile" === i,
            ["ds-table--" + d]: "default" !== d,
            "ds-table--zebra": "boolean" == typeof c ? c : f > 3
        }, s);
        return n.default.createElement("table", y({
            className: m
        }, u), l && n.default.createElement("caption", null, l), r)
    }
    ,
    e.TableActionRow = ea,
    e.Tabs = function(e) {
        let {active: a, children: l, className: r, id: s, label: i, onChange: d, small: c=!1, style: u} = e
          , f = w(e, ["active", "children", "className", "id", "label", "onChange", "small", "style"]);
        const [m,p] = t.useState(0)
          , [b,h] = t.useState(0)
          , [g,v] = t.useState({
            hasOverflow: !1,
            initialised: !1,
            tablist: 0,
            tabs: 0
        })
          , [F] = t.useState((()=>E("ds-tabs-")))
          , x = s || F
          , C = n.default.Children.toArray(l).filter((e=>e && null !== e))
          , N = t.useRef()
          , _ = t.useRef(C.map((()=>t.createRef())))
          , k = I();
        function R() {
            const e = _.current.map((e=>e.current.getBoundingClientRect().width)).reduce(((e,t)=>e + t), 0)
              , t = N.current.getBoundingClientRect().width;
            v({
                hasOverflow: e > t,
                initialized: !0,
                tablist: t,
                tabs: e
            })
        }
        function L(e) {
            const t = N.current.scrollLeft + e * g.tablist;
            e === na ? N.current.scrollLeft = t > 0 ? t : 0 : N.current.scrollLeft += t > N.current.scrollWidth ? N.current.scrollWidth + 3 : t
        }
        function z(e) {
            const t = N.current;
            if (e.offsetLeft <= t.scrollLeft)
                t.scrollLeft = e.offsetLeft;
            else if (e.offsetLeft + e.clientWidth >= t.scrollLeft + N.current.clientWidth) {
                const a = e.offsetLeft + e.clientWidth - (t.scrollLeft + t.clientWidth)
                  , n = t.scrollLeft;
                t.scrollLeft = 0 === n ? a + 40 : a + n + 1
            }
        }
        function S(e, t) {
            e.preventDefault(),
            z(e.target),
            p(t),
            d && d(e, t)
        }
        function O(e, t) {
            const {firstElementChild: a, lastElementChild: n} = N.current
              , {nextElementSibling: l, previousElementSibling: r} = e.currentTarget;
            let s = null;
            switch (e.key) {
            case " ":
            case "Enter":
                S(e, t);
                break;
            case "Home":
                s = a;
                break;
            case "End":
                s = n;
                break;
            case "ArrowUp":
            case "ArrowLeft":
                s = r || n;
                break;
            case "ArrowDown":
            case "ArrowRight":
                s = l || a;
                break;
            default:
                return
            }
            null != s && (e.preventDefault(),
            s.firstElementChild.focus(),
            z(s))
        }
        t.useEffect((()=>{
            if (!ra || g.initialised)
                return;
            R();
            let e = null;
            const t = ()=>{
                clearTimeout(e),
                e = setTimeout(R, 150)
            }
            ;
            return window.addEventListener("resize", t),
            ()=>{
                window.removeEventListener("resize", t),
                e && clearTimeout(e)
            }
        }
        ), []),
        t.useEffect((()=>{
            const [e] = n.default.Children.map(C, ((e,t)=>e.props.startActive && t)).filter(Boolean).slice(-1);
            p(e || 0)
        }
        ), []),
        t.useEffect((()=>{
            "number" == typeof a && a !== m && a >= 0 && a < C.length && p(a)
        }
        ), [a]),
        t.useEffect((()=>{
            const e = setTimeout((()=>{
                z(_.current[m].current)
            }
            ), 150);
            return ()=>clearTimeout(e)
        }
        ), [m, g.tablist]),
        t.useEffect((()=>{
            let e = null;
            const t = ()=>{
                clearTimeout(e),
                e = setTimeout((()=>h(N.current.scrollLeft)), 150)
            }
            ;
            return N.current.addEventListener("scroll", t),
            ()=>{
                N.current && N.current.removeEventListener("scroll", t),
                e && clearTimeout(e)
            }
        }
        ), []);
        const T = o("ds-tabs", r, {
            "ds-tabs--small": c
        })
          , A = o("ds-tabs__button", "ds-tabs__button--first", {
            "ds-tabs__button--hidden": !g.hasOverflow || 0 === b
        })
          , D = o("ds-tabs__button", "ds-tabs__button--last", {
            "ds-tabs__button--hidden": !g.hasOverflow || N.current && b === N.current.scrollWidth - N.current.clientWidth
        })
          , M = (e,t)=>e.props.id || x + "-tab-" + t
          , j = (e,t)=>e.props.panelProps && e.props.panelProps.id || x + "-panel-" + t;
        return n.default.createElement("div", y({
            className: T,
            id: x
        }, f), n.default.createElement("div", {
            className: "ds-tabs__nav",
            style: u
        }, !c && n.default.createElement(Ae, {
            "aria-hidden": "true",
            className: A,
            ghost: !0,
            icon: B,
            iconLabel: "Label",
            onClick: ()=>L(na),
            size: "default",
            tabIndex: "-1",
            type: "button"
        }), n.default.createElement("ul", {
            "aria-label": i || sa.select[k],
            className: "ds-tabs__nav__list",
            ref: N,
            role: "tablist"
        }, n.default.Children.map(C, ((e,t)=>n.default.cloneElement(e, {
            active: m === t,
            "aria-controls": j(e, t),
            "aria-expanded": m === t,
            id: M(e, t),
            index: t,
            key: t,
            onKeyDown: O,
            onSelect: S,
            ref: _.current[t],
            role: "tab",
            small: c
        }, e.props.label)))), !c && n.default.createElement(Ae, {
            "aria-hidden": "true",
            className: D,
            ghost: !0,
            icon: P,
            iconLabel: "Label",
            onClick: ()=>L(la),
            size: "default",
            tabIndex: "-1",
            type: "button"
        })), n.default.Children.map(C, ((e,t)=>n.default.createElement("div", y({
            "aria-hidden": m !== t,
            "aria-labelledby": M(e, t),
            className: "ds-tabs__panel",
            id: x + "-panel-" + t,
            key: t,
            role: "tabpanel",
            style: {
                display: m === t ? "block " : "none"
            },
            tabIndex: "0"
        }, e.props.panelProps), e.props.children))))
    }
    ,
    e.TextInput = wa,
    e.Tile = Ra,
    e.TileContent = Ca,
    e.ValidInput = function(e) {
        let {"aria-describedby": a, delayInputErrors: l=!0, error: r, errorIcon: s, errorRef: i, inputRef: o, onBlur: d, onChange: c, pretty: u=(e=>e), required: f, validate: m=(e=>e), value: p} = e
          , b = w(e, ["allowSpace", "aria-describedby", "delayInputErrors", "error", "errorIcon", "errorRef", "inputRef", "onBlur", "onChange", "pretty", "required", "validate", "value"]);
        const h = I()
          , [g] = t.useState(E("ds-ti-err-"))
          , v = t.useRef()
          , F = o && "function" != typeof o ? o : v
          , x = ot(F)
          , {required: C} = t.useContext(at)
          , N = null != f ? f : C
          , _ = String(p)
          , k = t.useRef("")
          , R = k.current
          , L = u(_, !0)
          , z = R && x && 0 !== L.length && 0 !== L.indexOf(R) ? _ : L;
        t.useEffect((()=>{
            k.current = z
        }
        ), [z]);
        const P = t.useCallback((e=>{
            const {value: t} = e.target
              , a = t && m(u(t))
              , n = k.current && m(u(k.current))
              , s = a instanceof Error
              , i = s && (!0 === l || Array.isArray(l) && -1 !== l.indexOf(a.code))
              , o = !r
              , d = !0 === r
              , f = n instanceof Error && n.code !== a.code
              , p = i && "change" === e.type && (o || d || f)
              , b = s ? p || a : N && !t ? (()=>{
                const e = new Error(N instanceof Error ? N.message : za.empty[h]);
                return e.code = "empty",
                e
            }
            )() : null
              , g = s || "blur" !== e.type ? t : a;
            c(e, g, b)
        }
        ), [r, c, u, N, m])
          , B = t.useCallback((e=>{
            P(e),
            d && d(e)
        }
        ), [P, d])
          , S = !z || m(z)
          , O = !!r || !1 === S || S instanceof Error;
        return n.default.createElement(n.default.Fragment, null, n.default.createElement(wa, y({}, b, {
            "aria-describedby": La(a, {
                [g]: r
            }) || void 0,
            hasFocus: x,
            invalid: O,
            onBlur: B,
            onChange: P,
            ref: F,
            required: !!N,
            value: z
        })), n.default.createElement(Nt, {
            error: "boolean" != typeof r && (r instanceof Error ? r.message : r),
            icon: s,
            id: g,
            ref: i,
            success: !O
        }))
    }
    ,
    e.classNames = o,
    e.getLocale = A,
    e.uniqueId = E,
    e.useBreakpoint = function(e, a=!0) {
        const [n,l] = t.useState(!a)
          , [r,s] = t.useState(!1)
          , i = ()=>{
            if (!q[e])
                return;
            if ("undefined" == typeof window)
                return;
            s(!0);
            const {max: t, min: n} = q[e];
            l(a ? !n || parseInt(n) <= window.innerWidth : !t || window.innerWidth <= parseInt(t))
        }
        ;
        return t.useEffect((()=>{
            i()
        }
        ), [e]),
        t.useEffect((()=>{
            if ("undefined" == typeof window || r)
                return;
            let e = null
              , t = !1;
            const a = ()=>{
                t || (e = setTimeout((()=>{
                    i(),
                    t = !1
                }
                ), 100)),
                t = !0
            }
            ;
            return window.addEventListener("resize", a),
            ()=>{
                window.removeEventListener("resize", a),
                e && clearTimeout(e)
            }
        }
        ), []),
        n
    }
    ,
    e.useCombinedRefs = it,
    e.useFocus = ot,
    e.useIsomorphicLayoutEffect = ut,
    e.useLocale = I,
    e.usePrevious = dt,
    e.useUpdateEffect = ct,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));

