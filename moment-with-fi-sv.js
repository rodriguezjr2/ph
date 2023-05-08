!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, (function() {
    "use strict";
    var e, t;
    function n() {
        return e.apply(null, arguments)
    }
    function s(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function a(e) {
        if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e)
            if (r(e, t))
                return !1;
        return !0
    }
    function o(e) {
        return void 0 === e
    }
    function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function l(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function d(e, t) {
        var n, s = [], i = e.length;
        for (n = 0; n < i; ++n)
            s.push(t(e[n], n));
        return s
    }
    function h(e, t) {
        for (var n in t)
            r(t, n) && (e[n] = t[n]);
        return r(t, "toString") && (e.toString = t.toString),
        r(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function c(e, t, n, s) {
        return Yt(e, t, n, s, !0).utc()
    }
    function f(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function m(e) {
        if (null == e._isValid) {
            var n = f(e)
              , s = t.call(n.parsedDateParts, (function(e) {
                return null != e
            }
            ))
              , i = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && s);
            if (e._strict && (i = i && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return i;
            e._isValid = i
        }
        return e._isValid
    }
    function _(e) {
        var t = c(NaN);
        return null != e ? h(f(t), e) : f(t).userInvalidated = !0,
        t
    }
    t = Array.prototype.some ? Array.prototype.some : function(e) {
        var t, n = Object(this), s = n.length >>> 0;
        for (t = 0; t < s; t++)
            if (t in n && e.call(this, n[t], t, n))
                return !0;
        return !1
    }
    ;
    var y = n.momentProperties = []
      , g = !1;
    function k(e, t) {
        var n, s, i, r = y.length;
        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        o(t._i) || (e._i = t._i),
        o(t._f) || (e._f = t._f),
        o(t._l) || (e._l = t._l),
        o(t._strict) || (e._strict = t._strict),
        o(t._tzm) || (e._tzm = t._tzm),
        o(t._isUTC) || (e._isUTC = t._isUTC),
        o(t._offset) || (e._offset = t._offset),
        o(t._pf) || (e._pf = f(t)),
        o(t._locale) || (e._locale = t._locale),
        r > 0)
            for (n = 0; n < r; n++)
                o(i = t[s = y[n]]) || (e[s] = i);
        return e
    }
    function p(e) {
        k(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === g && (g = !0,
        n.updateOffset(this),
        g = !1)
    }
    function w(e) {
        return e instanceof p || null != e && null != e._isAMomentObject
    }
    function v(e) {
        !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function M(e, t) {
        var s = !0;
        return h((function() {
            if (null != n.deprecationHandler && n.deprecationHandler(null, e),
            s) {
                var i, a, o, u = [], l = arguments.length;
                for (a = 0; a < l; a++) {
                    if (i = "",
                    "object" == typeof arguments[a]) {
                        for (o in i += "\n[" + a + "] ",
                        arguments[0])
                            r(arguments[0], o) && (i += o + ": " + arguments[0][o] + ", ");
                        i = i.slice(0, -2)
                    } else
                        i = arguments[a];
                    u.push(i)
                }
                v(e + "\nArguments: " + Array.prototype.slice.call(u).join("") + "\n" + (new Error).stack),
                s = !1
            }
            return t.apply(this, arguments)
        }
        ), t)
    }
    var Y, D = {};
    function S(e, t) {
        null != n.deprecationHandler && n.deprecationHandler(e, t),
        D[e] || (v(t),
        D[e] = !0)
    }
    function O(e) {
        return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function b(e, t) {
        var n, s = h({}, e);
        for (n in t)
            r(t, n) && (i(e[n]) && i(t[n]) ? (s[n] = {},
            h(s[n], e[n]),
            h(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e)
            r(e, n) && !r(t, n) && i(e[n]) && (s[n] = h({}, s[n]));
        return s
    }
    function T(e) {
        null != e && this.set(e)
    }
    n.suppressDeprecationWarnings = !1,
    n.deprecationHandler = null,
    Y = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e)
            r(e, t) && n.push(t);
        return n
    }
    ;
    function x(e, t, n) {
        var s = "" + Math.abs(e)
          , i = t - s.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , P = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , L = {}
      , W = {};
    function H(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]()
        }
        ),
        e && (W[e] = i),
        t && (W[t[0]] = function() {
            return x(i.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (W[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        }
        )
    }
    function R(e, t) {
        return e.isValid() ? (t = C(t, e.localeData()),
        L[t] = L[t] || function(e) {
            var t, n, s, i = e.match(N);
            for (t = 0,
            n = i.length; t < n; t++)
                W[i[t]] ? i[t] = W[i[t]] : i[t] = (s = i[t]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
            return function(t) {
                var s, r = "";
                for (s = 0; s < n; s++)
                    r += O(i[s]) ? i[s].call(t, e) : i[s];
                return r
            }
        }(t),
        L[t](e)) : e.localeData().invalidDate()
    }
    function C(e, t) {
        var n = 5;
        function s(e) {
            return t.longDateFormat(e) || e
        }
        for (P.lastIndex = 0; n >= 0 && P.test(e); )
            e = e.replace(P, s),
            P.lastIndex = 0,
            n -= 1;
        return e
    }
    var U = {};
    function F(e, t) {
        var n = e.toLowerCase();
        U[n] = U[n + "s"] = U[t] = e
    }
    function V(e) {
        return "string" == typeof e ? U[e] || U[e.toLowerCase()] : void 0
    }
    function j(e) {
        var t, n, s = {};
        for (n in e)
            r(e, n) && (t = V(n)) && (s[t] = e[n]);
        return s
    }
    var E = {};
    function G(e, t) {
        E[e] = t
    }
    function A(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function I(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function Z(e) {
        var t = +e
          , n = 0;
        return 0 !== t && isFinite(t) && (n = I(t)),
        n
    }
    function z(e, t) {
        return function(s) {
            return null != s ? (q(this, e, s),
            n.updateOffset(this, t),
            this) : $(this, e)
        }
    }
    function $(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function q(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && A(e.year()) && 1 === e.month() && 29 === e.date() ? (n = Z(n),
        e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), we(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    var B, J = /\d/, Q = /\d\d/, X = /\d{3}/, K = /\d{4}/, ee = /[+-]?\d{6}/, te = /\d\d?/, ne = /\d\d\d\d?/, se = /\d\d\d\d\d\d?/, ie = /\d{1,3}/, re = /\d{1,4}/, ae = /[+-]?\d{1,6}/, oe = /\d+/, ue = /[+-]?\d+/, le = /Z|[+-]\d\d:?\d\d/gi, de = /Z|[+-]\d\d(?::?\d\d)?/gi, he = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    function ce(e, t, n) {
        B[e] = O(t) ? t : function(e, s) {
            return e && n ? n : t
        }
    }
    function fe(e, t) {
        return r(B, e) ? B[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, s, i) {
            return t || n || s || i
        }
        ))))
    }
    function me(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    B = {};
    var _e = {};
    function ye(e, t) {
        var n, s, i = t;
        for ("string" == typeof e && (e = [e]),
        u(t) && (i = function(e, n) {
            n[t] = Z(e)
        }
        ),
        s = e.length,
        n = 0; n < s; n++)
            _e[e[n]] = i
    }
    function ge(e, t) {
        ye(e, (function(e, n, s, i) {
            s._w = s._w || {},
            t(e, s._w, s, i)
        }
        ))
    }
    function ke(e, t, n) {
        null != t && r(_e, e) && _e[e](t, n._a, n, e)
    }
    var pe;
    function we(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n, s = (t % (n = 12) + n) % n;
        return e += (t - s) / 12,
        1 === s ? A(e) ? 29 : 28 : 31 - s % 7 % 2
    }
    pe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ,
    H("M", ["MM", 2], "Mo", (function() {
        return this.month() + 1
    }
    )),
    H("MMM", 0, 0, (function(e) {
        return this.localeData().monthsShort(this, e)
    }
    )),
    H("MMMM", 0, 0, (function(e) {
        return this.localeData().months(this, e)
    }
    )),
    F("month", "M"),
    G("month", 8),
    ce("M", te),
    ce("MM", te, Q),
    ce("MMM", (function(e, t) {
        return t.monthsShortRegex(e)
    }
    )),
    ce("MMMM", (function(e, t) {
        return t.monthsRegex(e)
    }
    )),
    ye(["M", "MM"], (function(e, t) {
        t[1] = Z(e) - 1
    }
    )),
    ye(["MMM", "MMMM"], (function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[1] = i : f(n).invalidMonth = e
    }
    ));
    var ve = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , Me = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , Ye = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , De = he
      , Se = he;
    function Oe(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            s = 0; s < 12; ++s)
                r = c([2e3, s]),
                this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
                this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
        return n ? "MMM" === t ? -1 !== (i = pe.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = pe.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = pe.call(this._shortMonthsParse, a)) || -1 !== (i = pe.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = pe.call(this._longMonthsParse, a)) || -1 !== (i = pe.call(this._shortMonthsParse, a)) ? i : null
    }
    function be(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = Z(t);
            else if (!u(t = e.localeData().monthsParse(t)))
                return e;
        return n = Math.min(e.date(), we(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function Te(e) {
        return null != e ? (be(this, e),
        n.updateOffset(this, !0),
        this) : $(this, "Month")
    }
    function xe() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s = [], i = [], r = [];
        for (t = 0; t < 12; t++)
            n = c([2e3, t]),
            s.push(this.monthsShort(n, "")),
            i.push(this.months(n, "")),
            r.push(this.months(n, "")),
            r.push(this.monthsShort(n, ""));
        for (s.sort(e),
        i.sort(e),
        r.sort(e),
        t = 0; t < 12; t++)
            s[t] = me(s[t]),
            i[t] = me(i[t]);
        for (t = 0; t < 24; t++)
            r[t] = me(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
    }
    function Ne(e) {
        return A(e) ? 366 : 365
    }
    H("Y", 0, 0, (function() {
        var e = this.year();
        return e <= 9999 ? x(e, 4) : "+" + e
    }
    )),
    H(0, ["YY", 2], 0, (function() {
        return this.year() % 100
    }
    )),
    H(0, ["YYYY", 4], 0, "year"),
    H(0, ["YYYYY", 5], 0, "year"),
    H(0, ["YYYYYY", 6, !0], 0, "year"),
    F("year", "y"),
    G("year", 1),
    ce("Y", ue),
    ce("YY", te, Q),
    ce("YYYY", re, K),
    ce("YYYYY", ae, ee),
    ce("YYYYYY", ae, ee),
    ye(["YYYYY", "YYYYYY"], 0),
    ye("YYYY", (function(e, t) {
        t[0] = 2 === e.length ? n.parseTwoDigitYear(e) : Z(e)
    }
    )),
    ye("YY", (function(e, t) {
        t[0] = n.parseTwoDigitYear(e)
    }
    )),
    ye("Y", (function(e, t) {
        t[0] = parseInt(e, 10)
    }
    )),
    n.parseTwoDigitYear = function(e) {
        return Z(e) + (Z(e) > 68 ? 1900 : 2e3)
    }
    ;
    var Pe = z("FullYear", !0);
    function Le(e, t, n, s, i, r, a) {
        var o;
        return e < 100 && e >= 0 ? (o = new Date(e + 400,t,n,s,i,r,a),
        isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e,t,n,s,i,r,a),
        o
    }
    function We(e) {
        var t, n;
        return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400,
        t = new Date(Date.UTC.apply(null, n)),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
        t
    }
    function He(e, t, n) {
        var s = 7 + t - n;
        return -((7 + We(e, 0, s).getUTCDay() - t) % 7) + s - 1
    }
    function Re(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + He(e, s, i);
        return o <= 0 ? a = Ne(r = e - 1) + o : o > Ne(e) ? (r = e + 1,
        a = o - Ne(e)) : (r = e,
        a = o),
        {
            year: r,
            dayOfYear: a
        }
    }
    function Ce(e, t, n) {
        var s, i, r = He(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + Ue(i = e.year() - 1, t, n) : a > Ue(e.year(), t, n) ? (s = a - Ue(e.year(), t, n),
        i = e.year() + 1) : (i = e.year(),
        s = a),
        {
            week: s,
            year: i
        }
    }
    function Ue(e, t, n) {
        var s = He(e, t, n)
          , i = He(e + 1, t, n);
        return (Ne(e) - s + i) / 7
    }
    H("w", ["ww", 2], "wo", "week"),
    H("W", ["WW", 2], "Wo", "isoWeek"),
    F("week", "w"),
    F("isoWeek", "W"),
    G("week", 5),
    G("isoWeek", 5),
    ce("w", te),
    ce("ww", te, Q),
    ce("W", te),
    ce("WW", te, Q),
    ge(["w", "ww", "W", "WW"], (function(e, t, n, s) {
        t[s.substr(0, 1)] = Z(e)
    }
    ));
    function Fe(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    H("d", 0, "do", "day"),
    H("dd", 0, 0, (function(e) {
        return this.localeData().weekdaysMin(this, e)
    }
    )),
    H("ddd", 0, 0, (function(e) {
        return this.localeData().weekdaysShort(this, e)
    }
    )),
    H("dddd", 0, 0, (function(e) {
        return this.localeData().weekdays(this, e)
    }
    )),
    H("e", 0, 0, "weekday"),
    H("E", 0, 0, "isoWeekday"),
    F("day", "d"),
    F("weekday", "e"),
    F("isoWeekday", "E"),
    G("day", 11),
    G("weekday", 11),
    G("isoWeekday", 11),
    ce("d", te),
    ce("e", te),
    ce("E", te),
    ce("dd", (function(e, t) {
        return t.weekdaysMinRegex(e)
    }
    )),
    ce("ddd", (function(e, t) {
        return t.weekdaysShortRegex(e)
    }
    )),
    ce("dddd", (function(e, t) {
        return t.weekdaysRegex(e)
    }
    )),
    ge(["dd", "ddd", "dddd"], (function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : f(n).invalidWeekday = e
    }
    )),
    ge(["d", "e", "E"], (function(e, t, n, s) {
        t[s] = Z(e)
    }
    ));
    var Ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , je = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , Ee = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , Ge = he
      , Ae = he
      , Ie = he;
    function Ze(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            s = 0; s < 7; ++s)
                r = c([2e3, 1]).day(s),
                this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
        return n ? "dddd" === t ? -1 !== (i = pe.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = pe.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = pe.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = pe.call(this._weekdaysParse, a)) || -1 !== (i = pe.call(this._shortWeekdaysParse, a)) || -1 !== (i = pe.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = pe.call(this._shortWeekdaysParse, a)) || -1 !== (i = pe.call(this._weekdaysParse, a)) || -1 !== (i = pe.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = pe.call(this._minWeekdaysParse, a)) || -1 !== (i = pe.call(this._weekdaysParse, a)) || -1 !== (i = pe.call(this._shortWeekdaysParse, a)) ? i : null
    }
    function ze() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s, i, r, a = [], o = [], u = [], l = [];
        for (t = 0; t < 7; t++)
            n = c([2e3, 1]).day(t),
            s = me(this.weekdaysMin(n, "")),
            i = me(this.weekdaysShort(n, "")),
            r = me(this.weekdays(n, "")),
            a.push(s),
            o.push(i),
            u.push(r),
            l.push(s),
            l.push(i),
            l.push(r);
        a.sort(e),
        o.sort(e),
        u.sort(e),
        l.sort(e),
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")","i")
    }
    function $e() {
        return this.hours() % 12 || 12
    }
    function qe(e, t) {
        H(e, 0, 0, (function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        }
        ))
    }
    function Be(e, t) {
        return t._meridiemParse
    }
    H("H", ["HH", 2], 0, "hour"),
    H("h", ["hh", 2], 0, $e),
    H("k", ["kk", 2], 0, (function() {
        return this.hours() || 24
    }
    )),
    H("hmm", 0, 0, (function() {
        return "" + $e.apply(this) + x(this.minutes(), 2)
    }
    )),
    H("hmmss", 0, 0, (function() {
        return "" + $e.apply(this) + x(this.minutes(), 2) + x(this.seconds(), 2)
    }
    )),
    H("Hmm", 0, 0, (function() {
        return "" + this.hours() + x(this.minutes(), 2)
    }
    )),
    H("Hmmss", 0, 0, (function() {
        return "" + this.hours() + x(this.minutes(), 2) + x(this.seconds(), 2)
    }
    )),
    qe("a", !0),
    qe("A", !1),
    F("hour", "h"),
    G("hour", 13),
    ce("a", Be),
    ce("A", Be),
    ce("H", te),
    ce("h", te),
    ce("k", te),
    ce("HH", te, Q),
    ce("hh", te, Q),
    ce("kk", te, Q),
    ce("hmm", ne),
    ce("hmmss", se),
    ce("Hmm", ne),
    ce("Hmmss", se),
    ye(["H", "HH"], 3),
    ye(["k", "kk"], (function(e, t, n) {
        var s = Z(e);
        t[3] = 24 === s ? 0 : s
    }
    )),
    ye(["a", "A"], (function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }
    )),
    ye(["h", "hh"], (function(e, t, n) {
        t[3] = Z(e),
        f(n).bigHour = !0
    }
    )),
    ye("hmm", (function(e, t, n) {
        var s = e.length - 2;
        t[3] = Z(e.substr(0, s)),
        t[4] = Z(e.substr(s)),
        f(n).bigHour = !0
    }
    )),
    ye("hmmss", (function(e, t, n) {
        var s = e.length - 4
          , i = e.length - 2;
        t[3] = Z(e.substr(0, s)),
        t[4] = Z(e.substr(s, 2)),
        t[5] = Z(e.substr(i)),
        f(n).bigHour = !0
    }
    )),
    ye("Hmm", (function(e, t, n) {
        var s = e.length - 2;
        t[3] = Z(e.substr(0, s)),
        t[4] = Z(e.substr(s))
    }
    )),
    ye("Hmmss", (function(e, t, n) {
        var s = e.length - 4
          , i = e.length - 2;
        t[3] = Z(e.substr(0, s)),
        t[4] = Z(e.substr(s, 2)),
        t[5] = Z(e.substr(i))
    }
    ));
    var Je = z("Hours", !0);
    var Qe, Xe = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: ve,
        monthsShort: Me,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Ve,
        weekdaysMin: Ee,
        weekdaysShort: je,
        meridiemParse: /[ap]\.?m?\.?/i
    }, Ke = {}, et = {};
    function tt(e, t) {
        var n, s = Math.min(e.length, t.length);
        for (n = 0; n < s; n += 1)
            if (e[n] !== t[n])
                return n;
        return s
    }
    function nt(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function st(e) {
        var t = null;
        if (void 0 === Ke[e] && "undefined" != typeof module && module && module.exports && function(e) {
            return null != e.match("^[^/\\\\]*$")
        }(e))
            try {
                t = Qe._abbr,
                require("./locale/" + e),
                it(t)
            } catch (t) {
                Ke[e] = null
            }
        return Ke[e]
    }
    function it(e, t) {
        var n;
        return e && ((n = o(t) ? at(e) : rt(e, t)) ? Qe = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        Qe._abbr
    }
    function rt(e, t) {
        if (null !== t) {
            var n, s = Xe;
            if (t.abbr = e,
            null != Ke[e])
                S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                s = Ke[e]._config;
            else if (null != t.parentLocale)
                if (null != Ke[t.parentLocale])
                    s = Ke[t.parentLocale]._config;
                else {
                    if (null == (n = st(t.parentLocale)))
                        return et[t.parentLocale] || (et[t.parentLocale] = []),
                        et[t.parentLocale].push({
                            name: e,
                            config: t
                        }),
                        null;
                    s = n._config
                }
            return Ke[e] = new T(b(s, t)),
            et[e] && et[e].forEach((function(e) {
                rt(e.name, e.config)
            }
            )),
            it(e),
            Ke[e]
        }
        return delete Ke[e],
        null
    }
    function at(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Qe;
        if (!s(e)) {
            if (t = st(e))
                return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, s, i, r = 0; r < e.length; ) {
                for (t = (i = nt(e[r]).split("-")).length,
                n = (n = nt(e[r + 1])) ? n.split("-") : null; t > 0; ) {
                    if (s = st(i.slice(0, t).join("-")))
                        return s;
                    if (n && n.length >= t && tt(i, n) >= t - 1)
                        break;
                    t--
                }
                r++
            }
            return Qe
        }(e)
    }
    function ot(e) {
        var t, n = e._a;
        return n && -2 === f(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > we(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1,
        f(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2),
        f(e)._overflowWeeks && -1 === t && (t = 7),
        f(e)._overflowWeekday && -1 === t && (t = 8),
        f(e).overflow = t),
        e
    }
    var ut = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , lt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , dt = /Z|[+-]\d\d(?::?\d\d)?/
      , ht = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
      , ct = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
      , ft = /^\/?Date\((-?\d+)/i
      , mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
      , _t = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function yt(e) {
        var t, n, s, i, r, a, o = e._i, u = ut.exec(o) || lt.exec(o), l = ht.length, d = ct.length;
        if (u) {
            for (f(e).iso = !0,
            t = 0,
            n = l; t < n; t++)
                if (ht[t][1].exec(u[1])) {
                    i = ht[t][0],
                    s = !1 !== ht[t][2];
                    break
                }
            if (null == i)
                return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0,
                n = d; t < n; t++)
                    if (ct[t][1].exec(u[3])) {
                        r = (u[2] || " ") + ct[t][0];
                        break
                    }
                if (null == r)
                    return void (e._isValid = !1)
            }
            if (!s && null != r)
                return void (e._isValid = !1);
            if (u[4]) {
                if (!dt.exec(u[4]))
                    return void (e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""),
            vt(e)
        } else
            e._isValid = !1
    }
    function gt(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
    }
    function kt(e) {
        var t, n, s, i, r, a, o, u, l = mt.exec(e._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (l) {
            if (n = l[4],
            s = l[3],
            i = l[2],
            r = l[5],
            a = l[6],
            o = l[7],
            u = [gt(n), Me.indexOf(s), parseInt(i, 10), parseInt(r, 10), parseInt(a, 10)],
            o && u.push(parseInt(o, 10)),
            t = u,
            !function(e, t, n) {
                return !e || je.indexOf(e) === new Date(t[0],t[1],t[2]).getDay() || (f(n).weekdayMismatch = !0,
                n._isValid = !1,
                !1)
            }(l[1], t, e))
                return;
            e._a = t,
            e._tzm = function(e, t, n) {
                if (e)
                    return _t[e];
                if (t)
                    return 0;
                var s = parseInt(n, 10)
                  , i = s % 100;
                return (s - i) / 100 * 60 + i
            }(l[8], l[9], l[10]),
            e._d = We.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            f(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function pt(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function wt(e) {
        var t, s, i, r, a, o = [];
        if (!e._d) {
            for (i = function(e) {
                var t = new Date(n.now());
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e),
            e._w && null == e._a[2] && null == e._a[1] && function(e) {
                var t, n, s, i, r, a, o, u, l;
                null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1,
                a = 4,
                n = pt(t.GG, e._a[0], Ce(Dt(), 1, 4).year),
                s = pt(t.W, 1),
                ((i = pt(t.E, 1)) < 1 || i > 7) && (u = !0)) : (r = e._locale._week.dow,
                a = e._locale._week.doy,
                l = Ce(Dt(), r, a),
                n = pt(t.gg, e._a[0], l.year),
                s = pt(t.w, l.week),
                null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r,
                (t.e < 0 || t.e > 6) && (u = !0)) : i = r);
                s < 1 || s > Ue(n, r, a) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = Re(n, s, i, r, a),
                e._a[0] = o.year,
                e._dayOfYear = o.dayOfYear)
            }(e),
            null != e._dayOfYear && (a = pt(e._a[0], i[0]),
            (e._dayOfYear > Ne(a) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0),
            s = We(a, 0, e._dayOfYear),
            e._a[1] = s.getUTCMonth(),
            e._a[2] = s.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = o[t] = i[t];
            for (; t < 7; t++)
                e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0,
            e._a[3] = 0),
            e._d = (e._useUTC ? We : Le).apply(null, o),
            r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[3] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
        }
    }
    function vt(e) {
        if (e._f !== n.ISO_8601)
            if (e._f !== n.RFC_2822) {
                e._a = [],
                f(e).empty = !0;
                var t, s, i, r, a, o, u, l = "" + e._i, d = l.length, h = 0;
                for (u = (i = C(e._f, e._locale).match(N) || []).length,
                t = 0; t < u; t++)
                    r = i[t],
                    (s = (l.match(fe(r, e)) || [])[0]) && ((a = l.substr(0, l.indexOf(s))).length > 0 && f(e).unusedInput.push(a),
                    l = l.slice(l.indexOf(s) + s.length),
                    h += s.length),
                    W[r] ? (s ? f(e).empty = !1 : f(e).unusedTokens.push(r),
                    ke(r, s, e)) : e._strict && !s && f(e).unusedTokens.push(r);
                f(e).charsLeftOver = d - h,
                l.length > 0 && f(e).unusedInput.push(l),
                e._a[3] <= 12 && !0 === f(e).bigHour && e._a[3] > 0 && (f(e).bigHour = void 0),
                f(e).parsedDateParts = e._a.slice(0),
                f(e).meridiem = e._meridiem,
                e._a[3] = function(e, t, n) {
                    var s;
                    if (null == n)
                        return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((s = e.isPM(n)) && t < 12 && (t += 12),
                    s || 12 !== t || (t = 0),
                    t) : t
                }(e._locale, e._a[3], e._meridiem),
                null !== (o = f(e).era) && (e._a[0] = e._locale.erasConvertYear(o, e._a[0])),
                wt(e),
                ot(e)
            } else
                kt(e);
        else
            yt(e)
    }
    function Mt(e) {
        var t = e._i
          , r = e._f;
        return e._locale = e._locale || at(e._l),
        null === t || void 0 === r && "" === t ? _({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
        w(t) ? new p(ot(t)) : (l(t) ? e._d = t : s(r) ? function(e) {
            var t, n, s, i, r, a, o = !1, u = e._f.length;
            if (0 === u)
                return f(e).invalidFormat = !0,
                void (e._d = new Date(NaN));
            for (i = 0; i < u; i++)
                r = 0,
                a = !1,
                t = k({}, e),
                null != e._useUTC && (t._useUTC = e._useUTC),
                t._f = e._f[i],
                vt(t),
                m(t) && (a = !0),
                r += f(t).charsLeftOver,
                r += 10 * f(t).unusedTokens.length,
                f(t).score = r,
                o ? r < s && (s = r,
                n = t) : (null == s || r < s || a) && (s = r,
                n = t,
                a && (o = !0));
            h(e, n || t)
        }(e) : r ? vt(e) : function(e) {
            var t = e._i;
            o(t) ? e._d = new Date(n.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                var t = ft.exec(e._i);
                null === t ? (yt(e),
                !1 === e._isValid && (delete e._isValid,
                kt(e),
                !1 === e._isValid && (delete e._isValid,
                e._strict ? e._isValid = !1 : n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }(e) : s(t) ? (e._a = d(t.slice(0), (function(e) {
                return parseInt(e, 10)
            }
            )),
            wt(e)) : i(t) ? function(e) {
                if (!e._d) {
                    var t = j(e._i)
                      , n = void 0 === t.day ? t.date : t.day;
                    e._a = d([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                        return e && parseInt(e, 10)
                    }
                    )),
                    wt(e)
                }
            }(e) : u(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
        }(e),
        m(e) || (e._d = null),
        e))
    }
    function Yt(e, t, n, r, o) {
        var u, l = {};
        return !0 !== t && !1 !== t || (r = t,
        t = void 0),
        !0 !== n && !1 !== n || (r = n,
        n = void 0),
        (i(e) && a(e) || s(e) && 0 === e.length) && (e = void 0),
        l._isAMomentObject = !0,
        l._useUTC = l._isUTC = o,
        l._l = n,
        l._i = e,
        l._f = t,
        l._strict = r,
        (u = new p(ot(Mt(l))))._nextDay && (u.add(1, "d"),
        u._nextDay = void 0),
        u
    }
    function Dt(e, t, n, s) {
        return Yt(e, t, n, s, !1)
    }
    n.createFromInputFallback = M("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }
    )),
    n.ISO_8601 = function() {}
    ,
    n.RFC_2822 = function() {}
    ;
    var St = M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = Dt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : _()
    }
    ))
      , Ot = M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = Dt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : _()
    }
    ));
    function bt(e, t) {
        var n, i;
        if (1 === t.length && s(t[0]) && (t = t[0]),
        !t.length)
            return Dt();
        for (n = t[0],
        i = 1; i < t.length; ++i)
            t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }
    var Tt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function xt(e) {
        var t = j(e)
          , n = t.year || 0
          , s = t.quarter || 0
          , i = t.month || 0
          , a = t.week || t.isoWeek || 0
          , o = t.day || 0
          , u = t.hour || 0
          , l = t.minute || 0
          , d = t.second || 0
          , h = t.millisecond || 0;
        this._isValid = function(e) {
            var t, n, s = !1, i = Tt.length;
            for (t in e)
                if (r(e, t) && (-1 === pe.call(Tt, t) || null != e[t] && isNaN(e[t])))
                    return !1;
            for (n = 0; n < i; ++n)
                if (e[Tt[n]]) {
                    if (s)
                        return !1;
                    parseFloat(e[Tt[n]]) !== Z(e[Tt[n]]) && (s = !0)
                }
            return !0
        }(t),
        this._milliseconds = +h + 1e3 * d + 6e4 * l + 1e3 * u * 60 * 60,
        this._days = +o + 7 * a,
        this._months = +i + 3 * s + 12 * n,
        this._data = {},
        this._locale = at(),
        this._bubble()
    }
    function Nt(e) {
        return e instanceof xt
    }
    function Pt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Lt(e, t) {
        H(e, 0, 0, (function() {
            var e = this.utcOffset()
              , n = "+";
            return e < 0 && (e = -e,
            n = "-"),
            n + x(~~(e / 60), 2) + t + x(~~e % 60, 2)
        }
        ))
    }
    Lt("Z", ":"),
    Lt("ZZ", ""),
    ce("Z", de),
    ce("ZZ", de),
    ye(["Z", "ZZ"], (function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Ht(de, e)
    }
    ));
    var Wt = /([\+\-]|\d\d)/gi;
    function Ht(e, t) {
        var n, s, i = (t || "").match(e);
        return null === i ? null : 0 === (s = 60 * (n = ((i[i.length - 1] || []) + "").match(Wt) || ["-", 0, 0])[1] + Z(n[2])) ? 0 : "+" === n[0] ? s : -s
    }
    function Rt(e, t) {
        var s, i;
        return t._isUTC ? (s = t.clone(),
        i = (w(e) || l(e) ? e.valueOf() : Dt(e).valueOf()) - s.valueOf(),
        s._d.setTime(s._d.valueOf() + i),
        n.updateOffset(s, !1),
        s) : Dt(e).local()
    }
    function Ct(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    function Ut() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    n.updateOffset = function() {}
    ;
    var Ft = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
      , Vt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function jt(e, t) {
        var n, s, i, a = e, o = null;
        return Nt(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : u(e) || !isNaN(+e) ? (a = {},
        t ? a[t] = +e : a.milliseconds = +e) : (o = Ft.exec(e)) ? (n = "-" === o[1] ? -1 : 1,
        a = {
            y: 0,
            d: Z(o[2]) * n,
            h: Z(o[3]) * n,
            m: Z(o[4]) * n,
            s: Z(o[5]) * n,
            ms: Z(Pt(1e3 * o[6])) * n
        }) : (o = Vt.exec(e)) ? (n = "-" === o[1] ? -1 : 1,
        a = {
            y: Et(o[2], n),
            M: Et(o[3], n),
            w: Et(o[4], n),
            d: Et(o[5], n),
            h: Et(o[6], n),
            m: Et(o[7], n),
            s: Et(o[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from"in a || "to"in a) && (i = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
                return {
                    milliseconds: 0,
                    months: 0
                };
            t = Rt(t, e),
            e.isBefore(t) ? n = Gt(e, t) : ((n = Gt(t, e)).milliseconds = -n.milliseconds,
            n.months = -n.months);
            return n
        }(Dt(a.from), Dt(a.to)),
        (a = {}).ms = i.milliseconds,
        a.M = i.months),
        s = new xt(a),
        Nt(e) && r(e, "_locale") && (s._locale = e._locale),
        Nt(e) && r(e, "_isValid") && (s._isValid = e._isValid),
        s
    }
    function Et(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Gt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function At(e, t) {
        return function(n, s) {
            var i;
            return null === s || isNaN(+s) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            i = n,
            n = s,
            s = i),
            It(this, jt(n, s), e),
            this
        }
    }
    function It(e, t, s, i) {
        var r = t._milliseconds
          , a = Pt(t._days)
          , o = Pt(t._months);
        e.isValid() && (i = null == i || i,
        o && be(e, $(e, "Month") + o * s),
        a && q(e, "Date", $(e, "Date") + a * s),
        r && e._d.setTime(e._d.valueOf() + r * s),
        i && n.updateOffset(e, a || o))
    }
    jt.fn = xt.prototype,
    jt.invalid = function() {
        return jt(NaN)
    }
    ;
    var Zt = At(1, "add")
      , zt = At(-1, "subtract");
    function $t(e) {
        return "string" == typeof e || e instanceof String
    }
    function qt(e) {
        return w(e) || l(e) || $t(e) || u(e) || function(e) {
            var t = s(e)
              , n = !1;
            t && (n = 0 === e.filter((function(t) {
                return !u(t) && $t(e)
            }
            )).length);
            return t && n
        }(e) || function(e) {
            var t, n, s = i(e) && !a(e), o = !1, u = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], l = u.length;
            for (t = 0; t < l; t += 1)
                n = u[t],
                o = o || r(e, n);
            return s && o
        }(e) || null == e
    }
    function Bt(e) {
        var t, n = i(e) && !a(e), s = !1, o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
        for (t = 0; t < o.length; t += 1)
            s = s || r(e, o[t]);
        return n && s
    }
    function Jt(e, t) {
        if (e.date() < t.date())
            return -Jt(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
          , s = e.clone().add(n, "months");
        return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
    }
    function Qt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = at(e)) && (this._locale = t),
        this)
    }
    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xt = M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    }
    ));
    function Kt() {
        return this._locale
    }
    var en = 1e3
      , tn = 6e4
      , nn = 36e5
      , sn = 126227808e5;
    function rn(e, t) {
        return (e % t + t) % t
    }
    function an(e, t, n) {
        return e < 100 && e >= 0 ? new Date(e + 400,t,n) - sn : new Date(e,t,n).valueOf()
    }
    function on(e, t, n) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - sn : Date.UTC(e, t, n)
    }
    function un(e, t) {
        return t.erasAbbrRegex(e)
    }
    function ln() {
        var e, t, n = [], s = [], i = [], r = [], a = this.eras();
        for (e = 0,
        t = a.length; e < t; ++e)
            s.push(me(a[e].name)),
            n.push(me(a[e].abbr)),
            i.push(me(a[e].narrow)),
            r.push(me(a[e].name)),
            r.push(me(a[e].abbr)),
            r.push(me(a[e].narrow));
        this._erasRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._erasNameRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")","i"),
        this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")","i")
    }
    function dn(e, t) {
        H(0, [e, e.length], 0, t)
    }
    function hn(e, t, n, s, i) {
        var r;
        return null == e ? Ce(this, s, i).year : (t > (r = Ue(e, s, i)) && (t = r),
        cn.call(this, e, t, n, s, i))
    }
    function cn(e, t, n, s, i) {
        var r = Re(e, t, n, s, i)
          , a = We(r.year, 0, r.dayOfYear);
        return this.year(a.getUTCFullYear()),
        this.month(a.getUTCMonth()),
        this.date(a.getUTCDate()),
        this
    }
    H("N", 0, 0, "eraAbbr"),
    H("NN", 0, 0, "eraAbbr"),
    H("NNN", 0, 0, "eraAbbr"),
    H("NNNN", 0, 0, "eraName"),
    H("NNNNN", 0, 0, "eraNarrow"),
    H("y", ["y", 1], "yo", "eraYear"),
    H("y", ["yy", 2], 0, "eraYear"),
    H("y", ["yyy", 3], 0, "eraYear"),
    H("y", ["yyyy", 4], 0, "eraYear"),
    ce("N", un),
    ce("NN", un),
    ce("NNN", un),
    ce("NNNN", (function(e, t) {
        return t.erasNameRegex(e)
    }
    )),
    ce("NNNNN", (function(e, t) {
        return t.erasNarrowRegex(e)
    }
    )),
    ye(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, t, n, s) {
        var i = n._locale.erasParse(e, s, n._strict);
        i ? f(n).era = i : f(n).invalidEra = e
    }
    )),
    ce("y", oe),
    ce("yy", oe),
    ce("yyy", oe),
    ce("yyyy", oe),
    ce("yo", (function(e, t) {
        return t._eraYearOrdinalRegex || oe
    }
    )),
    ye(["y", "yy", "yyy", "yyyy"], 0),
    ye(["yo"], (function(e, t, n, s) {
        var i;
        n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse ? t[0] = n._locale.eraYearOrdinalParse(e, i) : t[0] = parseInt(e, 10)
    }
    )),
    H(0, ["gg", 2], 0, (function() {
        return this.weekYear() % 100
    }
    )),
    H(0, ["GG", 2], 0, (function() {
        return this.isoWeekYear() % 100
    }
    )),
    dn("gggg", "weekYear"),
    dn("ggggg", "weekYear"),
    dn("GGGG", "isoWeekYear"),
    dn("GGGGG", "isoWeekYear"),
    F("weekYear", "gg"),
    F("isoWeekYear", "GG"),
    G("weekYear", 1),
    G("isoWeekYear", 1),
    ce("G", ue),
    ce("g", ue),
    ce("GG", te, Q),
    ce("gg", te, Q),
    ce("GGGG", re, K),
    ce("gggg", re, K),
    ce("GGGGG", ae, ee),
    ce("ggggg", ae, ee),
    ge(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, s) {
        t[s.substr(0, 2)] = Z(e)
    }
    )),
    ge(["gg", "GG"], (function(e, t, s, i) {
        t[i] = n.parseTwoDigitYear(e)
    }
    )),
    H("Q", 0, "Qo", "quarter"),
    F("quarter", "Q"),
    G("quarter", 7),
    ce("Q", J),
    ye("Q", (function(e, t) {
        t[1] = 3 * (Z(e) - 1)
    }
    )),
    H("D", ["DD", 2], "Do", "date"),
    F("date", "D"),
    G("date", 9),
    ce("D", te),
    ce("DD", te, Q),
    ce("Do", (function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }
    )),
    ye(["D", "DD"], 2),
    ye("Do", (function(e, t) {
        t[2] = Z(e.match(te)[0])
    }
    ));
    var fn = z("Date", !0);
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    F("dayOfYear", "DDD"),
    G("dayOfYear", 4),
    ce("DDD", ie),
    ce("DDDD", X),
    ye(["DDD", "DDDD"], (function(e, t, n) {
        n._dayOfYear = Z(e)
    }
    )),
    H("m", ["mm", 2], 0, "minute"),
    F("minute", "m"),
    G("minute", 14),
    ce("m", te),
    ce("mm", te, Q),
    ye(["m", "mm"], 4);
    var mn = z("Minutes", !1);
    H("s", ["ss", 2], 0, "second"),
    F("second", "s"),
    G("second", 15),
    ce("s", te),
    ce("ss", te, Q),
    ye(["s", "ss"], 5);
    var _n, yn, gn = z("Seconds", !1);
    for (H("S", 0, 0, (function() {
        return ~~(this.millisecond() / 100)
    }
    )),
    H(0, ["SS", 2], 0, (function() {
        return ~~(this.millisecond() / 10)
    }
    )),
    H(0, ["SSS", 3], 0, "millisecond"),
    H(0, ["SSSS", 4], 0, (function() {
        return 10 * this.millisecond()
    }
    )),
    H(0, ["SSSSS", 5], 0, (function() {
        return 100 * this.millisecond()
    }
    )),
    H(0, ["SSSSSS", 6], 0, (function() {
        return 1e3 * this.millisecond()
    }
    )),
    H(0, ["SSSSSSS", 7], 0, (function() {
        return 1e4 * this.millisecond()
    }
    )),
    H(0, ["SSSSSSSS", 8], 0, (function() {
        return 1e5 * this.millisecond()
    }
    )),
    H(0, ["SSSSSSSSS", 9], 0, (function() {
        return 1e6 * this.millisecond()
    }
    )),
    F("millisecond", "ms"),
    G("millisecond", 16),
    ce("S", ie, J),
    ce("SS", ie, Q),
    ce("SSS", ie, X),
    _n = "SSSS"; _n.length <= 9; _n += "S")
        ce(_n, oe);
    function kn(e, t) {
        t[6] = Z(1e3 * ("0." + e))
    }
    for (_n = "S"; _n.length <= 9; _n += "S")
        ye(_n, kn);
    yn = z("Milliseconds", !1),
    H("z", 0, 0, "zoneAbbr"),
    H("zz", 0, 0, "zoneName");
    var pn = p.prototype;
    function wn(e) {
        return e
    }
    pn.add = Zt,
    pn.calendar = function(e, t) {
        1 === arguments.length && (arguments[0] ? qt(arguments[0]) ? (e = arguments[0],
        t = void 0) : Bt(arguments[0]) && (t = arguments[0],
        e = void 0) : (e = void 0,
        t = void 0));
        var s = e || Dt()
          , i = Rt(s, this).startOf("day")
          , r = n.calendarFormat(this, i) || "sameElse"
          , a = t && (O(t[r]) ? t[r].call(this, s) : t[r]);
        return this.format(a || this.localeData().calendar(r, this, Dt(s)))
    }
    ,
    pn.clone = function() {
        return new p(this)
    }
    ,
    pn.diff = function(e, t, n) {
        var s, i, r;
        if (!this.isValid())
            return NaN;
        if (!(s = Rt(e, this)).isValid())
            return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()),
        t = V(t)) {
        case "year":
            r = Jt(this, s) / 12;
            break;
        case "month":
            r = Jt(this, s);
            break;
        case "quarter":
            r = Jt(this, s) / 3;
            break;
        case "second":
            r = (this - s) / 1e3;
            break;
        case "minute":
            r = (this - s) / 6e4;
            break;
        case "hour":
            r = (this - s) / 36e5;
            break;
        case "day":
            r = (this - s - i) / 864e5;
            break;
        case "week":
            r = (this - s - i) / 6048e5;
            break;
        default:
            r = this - s
        }
        return n ? r : I(r)
    }
    ,
    pn.endOf = function(e) {
        var t, s;
        if (void 0 === (e = V(e)) || "millisecond" === e || !this.isValid())
            return this;
        switch (s = this._isUTC ? on : an,
        e) {
        case "year":
            t = s(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = s(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = s(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(),
            t += nn - rn(t + (this._isUTC ? 0 : this.utcOffset() * tn), nn) - 1;
            break;
        case "minute":
            t = this._d.valueOf(),
            t += tn - rn(t, tn) - 1;
            break;
        case "second":
            t = this._d.valueOf(),
            t += en - rn(t, en) - 1
        }
        return this._d.setTime(t),
        n.updateOffset(this, !0),
        this
    }
    ,
    pn.format = function(e) {
        e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var t = R(this, e);
        return this.localeData().postformat(t)
    }
    ,
    pn.from = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || Dt(e).isValid()) ? jt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    pn.fromNow = function(e) {
        return this.from(Dt(), e)
    }
    ,
    pn.to = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || Dt(e).isValid()) ? jt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    pn.toNow = function(e) {
        return this.to(Dt(), e)
    }
    ,
    pn.get = function(e) {
        return O(this[e = V(e)]) ? this[e]() : this
    }
    ,
    pn.invalidAt = function() {
        return f(this).overflow
    }
    ,
    pn.isAfter = function(e, t) {
        var n = w(e) ? e : Dt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }
    ,
    pn.isBefore = function(e, t) {
        var n = w(e) ? e : Dt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }
    ,
    pn.isBetween = function(e, t, n, s) {
        var i = w(e) ? e : Dt(e)
          , r = w(t) ? t : Dt(t);
        return !!(this.isValid() && i.isValid() && r.isValid()) && (("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n)))
    }
    ,
    pn.isSame = function(e, t) {
        var n, s = w(e) ? e : Dt(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(),
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }
    ,
    pn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    ,
    pn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    ,
    pn.isValid = function() {
        return m(this)
    }
    ,
    pn.lang = Xt,
    pn.locale = Qt,
    pn.localeData = Kt,
    pn.max = Ot,
    pn.min = St,
    pn.parsingFlags = function() {
        return h({}, f(this))
    }
    ,
    pn.set = function(e, t) {
        if ("object" == typeof e) {
            var n, s = function(e) {
                var t, n = [];
                for (t in e)
                    r(e, t) && n.push({
                        unit: t,
                        priority: E[t]
                    });
                return n.sort((function(e, t) {
                    return e.priority - t.priority
                }
                )),
                n
            }(e = j(e)), i = s.length;
            for (n = 0; n < i; n++)
                this[s[n].unit](e[s[n].unit])
        } else if (O(this[e = V(e)]))
            return this[e](t);
        return this
    }
    ,
    pn.startOf = function(e) {
        var t, s;
        if (void 0 === (e = V(e)) || "millisecond" === e || !this.isValid())
            return this;
        switch (s = this._isUTC ? on : an,
        e) {
        case "year":
            t = s(this.year(), 0, 1);
            break;
        case "quarter":
            t = s(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = s(this.year(), this.month(), 1);
            break;
        case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = s(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(),
            t -= rn(t + (this._isUTC ? 0 : this.utcOffset() * tn), nn);
            break;
        case "minute":
            t = this._d.valueOf(),
            t -= rn(t, tn);
            break;
        case "second":
            t = this._d.valueOf(),
            t -= rn(t, en)
        }
        return this._d.setTime(t),
        n.updateOffset(this, !0),
        this
    }
    ,
    pn.subtract = zt,
    pn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    ,
    pn.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    ,
    pn.toDate = function() {
        return new Date(this.valueOf())
    }
    ,
    pn.toISOString = function(e) {
        if (!this.isValid())
            return null;
        var t = !0 !== e
          , n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? R(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : O(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", R(n, "Z")) : R(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    ,
    pn.inspect = function() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e, t, n, s = "moment", i = "";
        return this.isLocal() || (s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        i = "Z"),
        e = "[" + s + '("]',
        t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        "-MM-DD[T]HH:mm:ss.SSS",
        n = i + '[")]',
        this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
    }
    ,
    "undefined" != typeof Symbol && null != Symbol.for && (pn[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }
    ),
    pn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }
    ,
    pn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    ,
    pn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }
    ,
    pn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    ,
    pn.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ,
    pn.eraName = function() {
        var e, t, n, s = this.localeData().eras();
        for (e = 0,
        t = s.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            s[e].since <= n && n <= s[e].until)
                return s[e].name;
            if (s[e].until <= n && n <= s[e].since)
                return s[e].name
        }
        return ""
    }
    ,
    pn.eraNarrow = function() {
        var e, t, n, s = this.localeData().eras();
        for (e = 0,
        t = s.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            s[e].since <= n && n <= s[e].until)
                return s[e].narrow;
            if (s[e].until <= n && n <= s[e].since)
                return s[e].narrow
        }
        return ""
    }
    ,
    pn.eraAbbr = function() {
        var e, t, n, s = this.localeData().eras();
        for (e = 0,
        t = s.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            s[e].since <= n && n <= s[e].until)
                return s[e].abbr;
            if (s[e].until <= n && n <= s[e].since)
                return s[e].abbr
        }
        return ""
    }
    ,
    pn.eraYear = function() {
        var e, t, s, i, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e)
            if (s = r[e].since <= r[e].until ? 1 : -1,
            i = this.clone().startOf("day").valueOf(),
            r[e].since <= i && i <= r[e].until || r[e].until <= i && i <= r[e].since)
                return (this.year() - n(r[e].since).year()) * s + r[e].offset;
        return this.year()
    }
    ,
    pn.year = Pe,
    pn.isLeapYear = function() {
        return A(this.year())
    }
    ,
    pn.weekYear = function(e) {
        return hn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    ,
    pn.isoWeekYear = function(e) {
        return hn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    ,
    pn.quarter = pn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    ,
    pn.month = Te,
    pn.daysInMonth = function() {
        return we(this.year(), this.month())
    }
    ,
    pn.week = pn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    pn.isoWeek = pn.isoWeeks = function(e) {
        var t = Ce(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    pn.weeksInYear = function() {
        var e = this.localeData()._week;
        return Ue(this.year(), e.dow, e.doy)
    }
    ,
    pn.weeksInWeekYear = function() {
        var e = this.localeData()._week;
        return Ue(this.weekYear(), e.dow, e.doy)
    }
    ,
    pn.isoWeeksInYear = function() {
        return Ue(this.year(), 1, 4)
    }
    ,
    pn.isoWeeksInISOWeekYear = function() {
        return Ue(this.isoWeekYear(), 1, 4)
    }
    ,
    pn.date = fn,
    pn.day = pn.days = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = function(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()),
        this.add(e - t, "d")) : t
    }
    ,
    pn.weekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    pn.isoWeekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            var t = function(e, t) {
                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
    }
    ,
    pn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    pn.hour = pn.hours = Je,
    pn.minute = pn.minutes = mn,
    pn.second = pn.seconds = gn,
    pn.millisecond = pn.milliseconds = yn,
    pn.utcOffset = function(e, t, s) {
        var i, r = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (null === (e = Ht(de, e)))
                    return this
            } else
                Math.abs(e) < 16 && !s && (e *= 60);
            return !this._isUTC && t && (i = Ct(this)),
            this._offset = e,
            this._isUTC = !0,
            null != i && this.add(i, "m"),
            r !== e && (!t || this._changeInProgress ? It(this, jt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            n.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? r : Ct(this)
    }
    ,
    pn.utc = function(e) {
        return this.utcOffset(0, e)
    }
    ,
    pn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(Ct(this), "m")),
        this
    }
    ,
    pn.parseZone = function() {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Ht(le, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    ,
    pn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Dt(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    ,
    pn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    ,
    pn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }
    ,
    pn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }
    ,
    pn.isUtc = Ut,
    pn.isUTC = Ut,
    pn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }
    ,
    pn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    ,
    pn.dates = M("dates accessor is deprecated. Use date instead.", fn),
    pn.months = M("months accessor is deprecated. Use month instead", Te),
    pn.years = M("years accessor is deprecated. Use year instead", Pe),
    pn.zone = M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }
    )),
    pn.isDSTShifted = M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
        if (!o(this._isDSTShifted))
            return this._isDSTShifted;
        var e, t = {};
        return k(t, this),
        (t = Mt(t))._a ? (e = t._isUTC ? c(t._a) : Dt(t._a),
        this._isDSTShifted = this.isValid() && function(e, t, n) {
            var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
            for (s = 0; s < i; s++)
                (n && e[s] !== t[s] || !n && Z(e[s]) !== Z(t[s])) && a++;
            return a + r
        }(t._a, e.toArray()) > 0) : this._isDSTShifted = !1,
        this._isDSTShifted
    }
    ));
    var vn = T.prototype;
    function Mn(e, t, n, s) {
        var i = at()
          , r = c().set(s, t);
        return i[n](r, e)
    }
    function Yn(e, t, n) {
        if (u(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return Mn(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++)
            i[s] = Mn(e, s, n, "month");
        return i
    }
    function Dn(e, t, n, s) {
        "boolean" == typeof e ? (u(t) && (n = t,
        t = void 0),
        t = t || "") : (n = t = e,
        e = !1,
        u(t) && (n = t,
        t = void 0),
        t = t || "");
        var i, r = at(), a = e ? r._week.dow : 0, o = [];
        if (null != n)
            return Mn(t, (n + a) % 7, s, "day");
        for (i = 0; i < 7; i++)
            o[i] = Mn(t, (i + a) % 7, s, "day");
        return o
    }
    vn.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return O(s) ? s.call(t, n) : s
    }
    ,
    vn.longDateFormat = function(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.match(N).map((function(e) {
            return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
        }
        )).join(""),
        this._longDateFormat[e])
    }
    ,
    vn.invalidDate = function() {
        return this._invalidDate
    }
    ,
    vn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }
    ,
    vn.preparse = wn,
    vn.postformat = wn,
    vn.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return O(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }
    ,
    vn.pastFuture = function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return O(n) ? n(t) : n.replace(/%s/i, t)
    }
    ,
    vn.set = function(e) {
        var t, n;
        for (n in e)
            r(e, n) && (O(t = e[n]) ? this[n] = t : this["_" + n] = t);
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    ,
    vn.eras = function(e, t) {
        var s, i, r, a = this._eras || at("en")._eras;
        for (s = 0,
        i = a.length; s < i; ++s) {
            if ("string" == typeof a[s].since)
                r = n(a[s].since).startOf("day"),
                a[s].since = r.valueOf();
            switch (typeof a[s].until) {
            case "undefined":
                a[s].until = 1 / 0;
                break;
            case "string":
                r = n(a[s].until).startOf("day").valueOf(),
                a[s].until = r.valueOf()
            }
        }
        return a
    }
    ,
    vn.erasParse = function(e, t, n) {
        var s, i, r, a, o, u = this.eras();
        for (e = e.toUpperCase(),
        s = 0,
        i = u.length; s < i; ++s)
            if (r = u[s].name.toUpperCase(),
            a = u[s].abbr.toUpperCase(),
            o = u[s].narrow.toUpperCase(),
            n)
                switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (a === e)
                        return u[s];
                    break;
                case "NNNN":
                    if (r === e)
                        return u[s];
                    break;
                case "NNNNN":
                    if (o === e)
                        return u[s]
                }
            else if ([r, a, o].indexOf(e) >= 0)
                return u[s]
    }
    ,
    vn.erasConvertYear = function(e, t) {
        var s = e.since <= e.until ? 1 : -1;
        return void 0 === t ? n(e.since).year() : n(e.since).year() + (t - e.offset) * s
    }
    ,
    vn.erasAbbrRegex = function(e) {
        return r(this, "_erasAbbrRegex") || ln.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
    }
    ,
    vn.erasNameRegex = function(e) {
        return r(this, "_erasNameRegex") || ln.call(this),
        e ? this._erasNameRegex : this._erasRegex
    }
    ,
    vn.erasNarrowRegex = function(e) {
        return r(this, "_erasNarrowRegex") || ln.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
    }
    ,
    vn.months = function(e, t) {
        return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ye).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
    }
    ,
    vn.monthsShort = function(e, t) {
        return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ye.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    ,
    vn.monthsParse = function(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact)
            return Oe.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        s = 0; s < 12; s++) {
            if (i = c([2e3, s]),
            n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
            n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
            this._monthsParse[s] = new RegExp(r.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[s].test(e))
                return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e))
                return s;
            if (!n && this._monthsParse[s].test(e))
                return s
        }
    }
    ,
    vn.monthsRegex = function(e) {
        return this._monthsParseExact ? (r(this, "_monthsRegex") || xe.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (r(this, "_monthsRegex") || (this._monthsRegex = Se),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    ,
    vn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (r(this, "_monthsRegex") || xe.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (r(this, "_monthsShortRegex") || (this._monthsShortRegex = De),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    ,
    vn.week = function(e) {
        return Ce(e, this._week.dow, this._week.doy).week
    }
    ,
    vn.firstDayOfYear = function() {
        return this._week.doy
    }
    ,
    vn.firstDayOfWeek = function() {
        return this._week.dow
    }
    ,
    vn.weekdays = function(e, t) {
        var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? Fe(n, this._week.dow) : e ? n[e.day()] : n
    }
    ,
    vn.weekdaysMin = function(e) {
        return !0 === e ? Fe(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    ,
    vn.weekdaysShort = function(e) {
        return !0 === e ? Fe(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    ,
    vn.weekdaysParse = function(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact)
            return Ze.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        s = 0; s < 7; s++) {
            if (i = c([2e3, 1]).day(s),
            n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
            this._weekdaysParse[s] = new RegExp(r.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
                return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e))
                return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e))
                return s;
            if (!n && this._weekdaysParse[s].test(e))
                return s
        }
    }
    ,
    vn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || ze.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (r(this, "_weekdaysRegex") || (this._weekdaysRegex = Ge),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    ,
    vn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || ze.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ae),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    ,
    vn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || ze.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ie),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    ,
    vn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    ,
    vn.meridiem = function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    ,
    it("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === Z(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }),
    n.lang = M("moment.lang is deprecated. Use moment.locale instead.", it),
    n.langData = M("moment.langData is deprecated. Use moment.localeData instead.", at);
    var Sn = Math.abs;
    function On(e, t, n, s) {
        var i = jt(t, n);
        return e._milliseconds += s * i._milliseconds,
        e._days += s * i._days,
        e._months += s * i._months,
        e._bubble()
    }
    function bn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function Tn(e) {
        return 4800 * e / 146097
    }
    function xn(e) {
        return 146097 * e / 4800
    }
    function Nn(e) {
        return function() {
            return this.as(e)
        }
    }
    var Pn = Nn("ms")
      , Ln = Nn("s")
      , Wn = Nn("m")
      , Hn = Nn("h")
      , Rn = Nn("d")
      , Cn = Nn("w")
      , Un = Nn("M")
      , Fn = Nn("Q")
      , Vn = Nn("y");
    function jn(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var En = jn("milliseconds")
      , Gn = jn("seconds")
      , An = jn("minutes")
      , In = jn("hours")
      , Zn = jn("days")
      , zn = jn("months")
      , $n = jn("years");
    var qn = Math.round
      , Bn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    function Jn(e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s)
    }
    var Qn = Math.abs;
    function Xn(e) {
        return (e > 0) - (e < 0) || +e
    }
    function Kn() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, t, n, s, i, r, a, o, u = Qn(this._milliseconds) / 1e3, l = Qn(this._days), d = Qn(this._months), h = this.asSeconds();
        return h ? (e = I(u / 60),
        t = I(e / 60),
        u %= 60,
        e %= 60,
        n = I(d / 12),
        d %= 12,
        s = u ? u.toFixed(3).replace(/\.?0+$/, "") : "",
        i = h < 0 ? "-" : "",
        r = Xn(this._months) !== Xn(h) ? "-" : "",
        a = Xn(this._days) !== Xn(h) ? "-" : "",
        o = Xn(this._milliseconds) !== Xn(h) ? "-" : "",
        i + "P" + (n ? r + n + "Y" : "") + (d ? r + d + "M" : "") + (l ? a + l + "D" : "") + (t || e || u ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (u ? o + s + "S" : "")) : "P0D"
    }
    var es = xt.prototype;
    es.isValid = function() {
        return this._isValid
    }
    ,
    es.abs = function() {
        var e = this._data;
        return this._milliseconds = Sn(this._milliseconds),
        this._days = Sn(this._days),
        this._months = Sn(this._months),
        e.milliseconds = Sn(e.milliseconds),
        e.seconds = Sn(e.seconds),
        e.minutes = Sn(e.minutes),
        e.hours = Sn(e.hours),
        e.months = Sn(e.months),
        e.years = Sn(e.years),
        this
    }
    ,
    es.add = function(e, t) {
        return On(this, e, t, 1)
    }
    ,
    es.subtract = function(e, t) {
        return On(this, e, t, -1)
    }
    ,
    es.as = function(e) {
        if (!this.isValid())
            return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = V(e)) || "quarter" === e || "year" === e)
            switch (t = this._days + s / 864e5,
            n = this._months + Tn(t),
            e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
            }
        else
            switch (t = this._days + Math.round(xn(this._months)),
            e) {
            case "week":
                return t / 7 + s / 6048e5;
            case "day":
                return t + s / 864e5;
            case "hour":
                return 24 * t + s / 36e5;
            case "minute":
                return 1440 * t + s / 6e4;
            case "second":
                return 86400 * t + s / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + s;
            default:
                throw new Error("Unknown unit " + e)
            }
    }
    ,
    es.asMilliseconds = Pn,
    es.asSeconds = Ln,
    es.asMinutes = Wn,
    es.asHours = Hn,
    es.asDays = Rn,
    es.asWeeks = Cn,
    es.asMonths = Un,
    es.asQuarters = Fn,
    es.asYears = Vn,
    es.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * Z(this._months / 12) : NaN
    }
    ,
    es._bubble = function() {
        var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
        return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * bn(xn(o) + a),
        a = 0,
        o = 0),
        u.milliseconds = r % 1e3,
        e = I(r / 1e3),
        u.seconds = e % 60,
        t = I(e / 60),
        u.minutes = t % 60,
        n = I(t / 60),
        u.hours = n % 24,
        a += I(n / 24),
        o += i = I(Tn(a)),
        a -= bn(xn(i)),
        s = I(o / 12),
        o %= 12,
        u.days = a,
        u.months = o,
        u.years = s,
        this
    }
    ,
    es.clone = function() {
        return jt(this)
    }
    ,
    es.get = function(e) {
        return e = V(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    ,
    es.milliseconds = En,
    es.seconds = Gn,
    es.minutes = An,
    es.hours = In,
    es.days = Zn,
    es.weeks = function() {
        return I(this.days() / 7)
    }
    ,
    es.months = zn,
    es.years = $n,
    es.humanize = function(e, t) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var n, s, i = !1, r = Bn;
        return "object" == typeof e && (t = e,
        e = !1),
        "boolean" == typeof e && (i = e),
        "object" == typeof t && (r = Object.assign({}, Bn, t),
        null != t.s && null == t.ss && (r.ss = t.s - 1)),
        s = function(e, t, n, s) {
            var i = jt(e).abs()
              , r = qn(i.as("s"))
              , a = qn(i.as("m"))
              , o = qn(i.as("h"))
              , u = qn(i.as("d"))
              , l = qn(i.as("M"))
              , d = qn(i.as("w"))
              , h = qn(i.as("y"))
              , c = r <= n.ss && ["s", r] || r < n.s && ["ss", r] || a <= 1 && ["m"] || a < n.m && ["mm", a] || o <= 1 && ["h"] || o < n.h && ["hh", o] || u <= 1 && ["d"] || u < n.d && ["dd", u];
            return null != n.w && (c = c || d <= 1 && ["w"] || d < n.w && ["ww", d]),
            (c = c || l <= 1 && ["M"] || l < n.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = t,
            c[3] = +e > 0,
            c[4] = s,
            Jn.apply(null, c)
        }(this, !i, r, n = this.localeData()),
        i && (s = n.pastFuture(+this, s)),
        n.postformat(s)
    }
    ,
    es.toISOString = Kn,
    es.toString = Kn,
    es.toJSON = Kn,
    es.locale = Qt,
    es.localeData = Kt,
    es.toIsoString = M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Kn),
    es.lang = Xt,
    H("X", 0, 0, "unix"),
    H("x", 0, 0, "valueOf"),
    ce("x", ue),
    ce("X", /[+-]?\d+(\.\d{1,3})?/),
    ye("X", (function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e))
    }
    )),
    ye("x", (function(e, t, n) {
        n._d = new Date(Z(e))
    }
    )),
    //! moment.js
    n.version = "2.29.4",
    e = Dt,
    n.fn = pn,
    n.min = function() {
        var e = [].slice.call(arguments, 0);
        return bt("isBefore", e)
    }
    ,
    n.max = function() {
        var e = [].slice.call(arguments, 0);
        return bt("isAfter", e)
    }
    ,
    n.now = function() {
        return Date.now ? Date.now() : +new Date
    }
    ,
    n.utc = c,
    n.unix = function(e) {
        return Dt(1e3 * e)
    }
    ,
    n.months = function(e, t) {
        return Yn(e, t, "months")
    }
    ,
    n.isDate = l,
    n.locale = it,
    n.invalid = _,
    n.duration = jt,
    n.isMoment = w,
    n.weekdays = function(e, t, n) {
        return Dn(e, t, n, "weekdays")
    }
    ,
    n.parseZone = function() {
        return Dt.apply(null, arguments).parseZone()
    }
    ,
    n.localeData = at,
    n.isDuration = Nt,
    n.monthsShort = function(e, t) {
        return Yn(e, t, "monthsShort")
    }
    ,
    n.weekdaysMin = function(e, t, n) {
        return Dn(e, t, n, "weekdaysMin")
    }
    ,
    n.defineLocale = rt,
    n.updateLocale = function(e, t) {
        if (null != t) {
            var n, s, i = Xe;
            null != Ke[e] && null != Ke[e].parentLocale ? Ke[e].set(b(Ke[e]._config, t)) : (null != (s = st(e)) && (i = s._config),
            t = b(i, t),
            null == s && (t.abbr = e),
            (n = new T(t)).parentLocale = Ke[e],
            Ke[e] = n),
            it(e)
        } else
            null != Ke[e] && (null != Ke[e].parentLocale ? (Ke[e] = Ke[e].parentLocale,
            e === it() && it(e)) : null != Ke[e] && delete Ke[e]);
        return Ke[e]
    }
    ,
    n.locales = function() {
        return Y(Ke)
    }
    ,
    n.weekdaysShort = function(e, t, n) {
        return Dn(e, t, n, "weekdaysShort")
    }
    ,
    n.normalizeUnits = V,
    n.relativeTimeRounding = function(e) {
        return void 0 === e ? qn : "function" == typeof e && (qn = e,
        !0)
    }
    ,
    n.relativeTimeThreshold = function(e, t) {
        return void 0 !== Bn[e] && (void 0 === t ? Bn[e] : (Bn[e] = t,
        "s" === e && (Bn.ss = t - 1),
        !0))
    }
    ,
    n.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    ,
    n.prototype = pn,
    n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    //! moment.js locale configuration
    var ts = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
      , ns = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", ts[7], ts[8], ts[9]];
    function ss(e, t, n, s) {
        var i = "";
        switch (n) {
        case "s":
            return s ? "muutaman sekunnin" : "muutama sekunti";
        case "ss":
            i = s ? "sekunnin" : "sekuntia";
            break;
        case "m":
            return s ? "minuutin" : "minuutti";
        case "mm":
            i = s ? "minuutin" : "minuuttia";
            break;
        case "h":
            return s ? "tunnin" : "tunti";
        case "hh":
            i = s ? "tunnin" : "tuntia";
            break;
        case "d":
            return s ? "päivän" : "päivä";
        case "dd":
            i = s ? "päivän" : "päivää";
            break;
        case "M":
            return s ? "kuukauden" : "kuukausi";
        case "MM":
            i = s ? "kuukauden" : "kuukautta";
            break;
        case "y":
            return s ? "vuoden" : "vuosi";
        case "yy":
            i = s ? "vuoden" : "vuotta"
        }
        return i = function(e, t) {
            return e < 10 ? t ? ns[e] : ts[e] : e
        }(e, s) + " " + i,
        i
    }
    return n.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: ss,
            ss: ss,
            m: ss,
            mm: ss,
            h: ss,
            hh: ss,
            d: ss,
            dd: ss,
            M: ss,
            MM: ss,
            y: ss,
            yy: ss
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    //! moment.js locale configuration
    n.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    n.locale("en"),
    n
}
));

