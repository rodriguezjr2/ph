/*! OPUX @op/opux-classic@2.7.3 © OP Financial Group */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("jquery"), require("lodash"), require("moment"), require("nouislider")) : "function" == typeof define && define.amd ? define(["jquery", "lodash", "moment", "nouislider"], e) : "object" == typeof exports ? exports.opux = e(require("jquery"), require("lodash"), require("moment"), require("nouislider")) : t.opux = e(t.jquery, t.lodash, t.moment, t.nouislider)
}(window, (function(t, e, i, n) {
    return function(t) {
        var e = {};
        function i(n) {
            if (e[n])
                return e[n].exports;
            var s = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(s.exports, s, s.exports, i),
            s.l = !0,
            s.exports
        }
        return i.m = t,
        i.c = e,
        i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        i.t = function(t, e) {
            if (1 & e && (t = i(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (i.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var s in t)
                    i.d(n, s, function(e) {
                        return t[e]
                    }
                    .bind(null, s));
            return n
        }
        ,
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return i.d(e, "a", e),
            e
        }
        ,
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",
        i(i.s = 60)
    }([function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(14)
              , o = i.n(s)
              , a = i(16)
              , r = i(3);
            e.a = o.a.extend({
                el: void 0,
                $el: void 0,
                config: {},
                constructor: function(e) {
                    t.extend(this, e),
                    this.el && (this.el.jquery && (this.el = this.el[0]),
                    this.$el || (this.$el = n(this.el))),
                    this.initialize.apply(this, arguments),
                    a.a.push(this)
                },
                initialize: function(t) {},
                destruct: function() {
                    for (var t in this.el = this.$el = null,
                    this)
                        this[t] = null
                },
                render: function() {},
                version: function() {
                    return this.$el.data("version") || 1
                },
                reflow: function() {
                    try {
                        this.el.offsetWidth
                    } catch (t) {}
                }
            }, {
                transitionEnd: r.a.transitionEnd,
                id: null,
                selector: null,
                apiId: null
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(e, i) {
        e.exports = t
    }
    , function(t, i) {
        t.exports = e
    }
    , function(t, e, i) {
        "use strict";
        e.a = {
            defaultTransitionDuration: 200,
            language: "fi",
            hasTouch: "ontouchstart"in window,
            hasPointer: "msmaxtouchpoints"in window.navigator,
            transitionEnd: "transitionEnd transitionend webkitTransitionEnd oTransitionEnd otransitionend"
        }
    }
    , function(t, e, i) {
        "use strict";
        i.r(e),
        function(t) {
            i.d(e, "enable", (function() {
                return n
            }
            )),
            i.d(e, "disable", (function() {
                return s
            }
            )),
            i.d(e, "tabbable", (function() {
                return o
            }
            ));
            function n(e, i) {
                o(e).not(i).each((function() {
                    var e = t(this);
                    e.attr("tabindex", e.data("tabindex.opux") || e.attr("tabindex")).removeData("tabindex.opux").filter('[tabindex="none"]').removeAttr("tabindex")
                }
                ))
            }
            function s(e, i) {
                o(e).not(i).each((function() {
                    var e = t(this);
                    (!e.data("tabindex.opux") || e.attr("tabindex") > -1) && e.data("tabindex.opux", e.attr("tabindex") || "none").attr("tabindex", -1)
                }
                ))
            }
            function o(e, i) {
                return t(e).find("*").addBack().filter("a[href], area[href], input, button, textarea, select, iframe, object, [tabindex]").not("[disabled]" + (i ? ',[tabindex="-1"]' : ""))
            }
        }
        .call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(4)
              , a = "opux-is-open"
              , r = "opux-is-not-open"
              , l = "repaint.opux-expander";
            e.a = s.a.extend({
                openHeight: 0,
                closedHeight: 0,
                isOpen: !1,
                isAjax: !1,
                onOpen: null,
                onClosed: null,
                initialize: function() {
                    t.bindAll(this, "onToggle", "onResize", "onRepaint", "setState", "getState", "initAjax", "loadAjax", "open", "close", "repaint"),
                    this.$content = n(),
                    this.isOpen = this.$el.hasClass(a),
                    this.$el.toggleClass(a, this.isOpen).toggleClass(r, !this.isOpen),
                    n(window).on(l, this.onRepaint),
                    this.$el.on(l, this.onRepaint)
                },
                postInitialize: function() {
                    this.$el.data("expander-href") && this.initAjax(),
                    this.$content.find("img").on("load", this.repaint),
                    this.setAccessibility(),
                    this.setAriaVisibility(this.isOpen),
                    this.setState(this.isOpen, !0),
                    this.isOpen ? o.enable(this.$content) : o.disable(this.$content)
                },
                destruct: function() {
                    n(window).off(l, this.onRepaint),
                    this.$el.off(l, this.onRepaint),
                    s.a.prototype.destruct.apply(this)
                },
                onResize: function() {
                    this.repaint()
                },
                onRepaint: function(t) {
                    t.stopPropagation(),
                    this.repaint()
                },
                onToggle: function(t) {
                    return t.preventDefault(),
                    this.$el.hasClass("opux-is-non-interactive") || this.setState(!this.isOpen),
                    !1
                },
                setState: function(t, e, i) {
                    var n = this
                      , l = this.isOpen;
                    if (void 0 === i && (i = !1),
                    t !== this.isOpen || i) {
                        if (this.isOpen = null != t ? t : this.$el.hasClass(a),
                        this.$el.hasClass("opux-is-disabled"))
                            return !1;
                        this.setAriaVisibility(this.isOpen),
                        this.setHeights(),
                        this.isOpen ? (this.$el.addClass(a).removeClass(r),
                        this.$el.css("height", this.openHeight),
                        e ? setTimeout((function() {
                            n.isOpen && n.$el.css("height", "auto")
                        }
                        ), 500) : this.$el.trigger("opening"),
                        this.tEnd = 0,
                        this.$el.one(s.a.transitionEnd, (function() {
                            n.isOpen && !n.tEnd && (n.tEnd = 1,
                            n._setHeightWithoutTransition("auto"),
                            e || (n.$el.trigger("open"),
                            "function" == typeof n.onOpen && n.onOpen.call(n),
                            o.tabbable(n.$content.not(".opux-expander-content-no-autofocus"), !0).first().trigger("focus")))
                        }
                        )),
                        o.enable(this.$content),
                        this.isAjax && this.$content.hasClass("opux-expander-is-loading") && this.loadAjax()) : (Math.abs(this.$el.height() - parseInt(this.closedHeight)) > 5 && !0 === l && this._setHeightWithoutTransition(this.openHeight),
                        this.$el.addClass(r).removeClass(a),
                        this.$el.css("height", this.closedHeight),
                        e || (this.$el.trigger("closing"),
                        this.tEnd = 0,
                        this.$el.one(s.a.transitionEnd, (function() {
                            n.isOpen || n.tEnd || (n.tEnd = 1,
                            n.$el.trigger("closed"),
                            "function" == typeof n.onClosed && n.onClosed.call(n))
                        }
                        ))),
                        o.disable(this.$content),
                        this.isAjax && void 0 !== this.$el.data("expander-reload") && this.$el.one(s.a.transitionEnd, this.initAjax))
                    }
                },
                _setHeightWithoutTransition: function(t) {
                    this.$el.addClass("opux-no-transition").css("height", t),
                    this.reflow(),
                    this.$el.removeClass("opux-no-transition")
                },
                initAjax: function() {
                    this.isAjax = !0,
                    this.$content.addClass("opux-expander-is-loading").html('<i class="opux-loading"></i>')
                },
                loadAjax: function() {
                    var t = this
                      , e = this.$el.data("expander-href");
                    n.get(e).done((function(e) {
                        t.$content.removeClass("opux-expander-is-loading").html(e),
                        t.$content.find("img").on("load", t.repaint),
                        t.open()
                    }
                    ))
                },
                setHeights: function() {},
                setAccessibility: function() {
                    this.$title.attr("id") || this.$title.attr("id", this.checkRandomId(this.generateRandomId())),
                    this.$content.attr("id") || this.$content.attr("id", this.checkRandomId(this.generateRandomId())),
                    !this.$expanderController.attr("aria-controls") && this.$content.attr("id") && this.$expanderController.attr("aria-controls", this.$content.attr("id")),
                    !this.$content.attr("aria-labelledby") && this.$title.attr("id") && this.$content.attr({
                        "aria-labelledby": this.$title.attr("id"),
                        role: "region"
                    })
                },
                setAriaVisibility: function(t) {
                    this.$content.attr("aria-hidden", !1 === t),
                    this.$expanderController.attr("href") && this.$expanderController.attr("aria-expanded", !1 !== t)
                },
                checkRandomId: function(t) {
                    return 0 === n("#" + t).length ? t : this.checkRandomId(this.generateRandomId())
                },
                generateRandomId: function() {
                    return Math.random().toString(36).substring(2, 15)
                },
                open: function(t) {
                    this.onOpen = t || this.onOpen,
                    this.setState(!0)
                },
                close: function(t) {
                    this.onClosed = t || this.onClosed,
                    this.setState(!1)
                },
                repaint: function() {
                    this.setState(void 0, !0)
                },
                getState: function() {
                    return this.isOpen ? "open" : "closed"
                }
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        var n = i(65);
        n.Template = i(66).Template,
        n.template = n.Template,
        t.exports = n
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s, o, a = i(0), r = i(4), l = i(51), h = i.n(l), c = "opux-modal", u = "opux-is-not-visible", d = "opux-is-visible", p = 0, f = t(window), g = [];
            function v(e, i) {
                if (e) {
                    r.disable(t("body").children().not(i));
                    var n = r.tabbable(i, !0);
                    n.filter("[tabindex]").not('[tabindex="-1"],[tabindex="0"]').length && n.filter(":not([tabindex])").attr("tabindex", "-1"),
                    t(document).on("keydown." + s.id, (function(t) {
                        if ("Tab" === t.key) {
                            var e = !1
                              , n = r.tabbable(i, !0).toArray();
                            if (n.length > 0) {
                                var s = n[n.length - 1];
                                t.shiftKey ? (t.target || t.srcElement) === n[0] && (s.trigger("focus"),
                                e = !0) : (t.target || t.srcElement) === s && (n[0].trigger("focus"),
                                e = !0),
                                e && (t.preventDefault(),
                                t.stopPropagation())
                            }
                        }
                    }
                    ))
                } else
                    r.enable(t("body").children().not(i), ".opux-expander.opux-is-not-open .opux-expander-content *"),
                    t(document).off("keydown." + s.id)
            }
            function m(e, i) {
                e ? t(document).on("focus." + s.id, (function(e) {
                    i.hasClass(d) && !t.contains(i, e.target || e.srcElement) && (e.stopPropagation(),
                    i.trigger("focus"))
                }
                )) : (t(document).off("focus." + s.id),
                i.trigger("blur"))
            }
            s = a.a.extend({
                ajaxUrl: null,
                ajaxLoaded: !1,
                config: t.extend(!0, {}, a.a.prototype.config, {
                    escape: !0,
                    ajaxCache: !0,
                    initOPUX: !0,
                    confirmation: !1
                }),
                initialize: function(e) {
                    n.bindAll(this, "onClose", "hide", "show", "onModalVisible", "onModalHidden", "fixHeight", "fixAria"),
                    p++,
                    this.uid = c + "-" + p,
                    this.dfd = null,
                    this.result = new t.Deferred,
                    t(".opux-modal-bg").length || t('<div class="opux-modal-bg opux-modal-bg-fadeout" />').attr("aria-hidden", !0).hide().appendTo("body"),
                    this.$bg = t(".opux-modal-bg"),
                    this.config = t.extend(!0, {}, this.config, e.config),
                    e.url && (this.ajaxUrl = e.url),
                    this.el ? (this.$el.is(":visible") ? this.$el.addClass(d).removeClass(u) : this.$el.addClass(u).removeClass(d),
                    this.config.confirmation = this.$el.hasClass(c + "-confirmation")) : (this.$el = t(h()({
                        uid: this.uid,
                        content: e.content,
                        header: e.header,
                        bodyTitle: e.bodyTitle,
                        body: e.body,
                        footer: e.footer,
                        description: e.description,
                        aria: e.aria || this.uid,
                        isAlert: e.isAlert
                    })).appendTo("body").hide().addClass(u),
                    this.el = this.$el[0],
                    this.fixAria(),
                    this.config.initOPUX && window.opux && window.opux.initialize(this.$el.find(".opux-modal-content"))),
                    this.$el.data(c, this),
                    this.$el.find(".opux-modal-close").on("click", this.onClose),
                    this.$el.find(".opux-modal-body").on("touchmove", (function(t) {
                        t.stopPropagation()
                    }
                    )),
                    this._debouncedFixHeight = n.debounce(this.fixHeight, 300)
                },
                destruct: function() {
                    f.off("resize.opux-modal", this._debouncedFixHeight),
                    t(document).off("focus." + s.id + " keydown" + s.id),
                    a.a.prototype.destruct.apply(this)
                },
                windowWidth: 0,
                fixHeight: function(e) {
                    if (t(window).width() === this.windowWidth && e && "resize" === e.type)
                        return !1;
                    var i = this.$el.find(".opux-modal-header").outerHeight(!0) || 0
                      , n = this.$el.find(".opux-modal-footer").outerHeight(!0) || 0
                      , s = parseInt(this.$el.find(".opux-modal-inner").css("margin-top"), 10)
                      , o = (window.innerHeight || f.height()) - 2 * s - i - n;
                    this.$el.find(".opux-modal-body").css("max-height", o + "px"),
                    this.windowWidth = t(window).width()
                },
                _catchEscape: function(e) {
                    if (this.config.escape) {
                        var i = this;
                        e ? this.$el.on("keyup." + s.id, (function(t) {
                            "Escape" === t.key && i.onClose(t)
                        }
                        )).on("click." + s.id, (function(e) {
                            t(e.target).is(".opux-modal") && i.onClose(e)
                        }
                        )) : this.$el.off("." + s.id)
                    }
                },
                show: function() {
                    this.dfd = new t.Deferred;
                    var e, i = this;
                    o = t(":focus");
                    var n = t(".opux-modal." + d).not(this.$el).not(".opux-modal-inactive").addClass("opux-modal-inactive");
                    return n.length && g.push(n),
                    this.$el.show().attr("aria-hidden", !1),
                    this.$bg.show(),
                    t("body").children().not(this.$el).attr("aria-hidden", !0),
                    e = this.ajaxUrl ? this.loadAjaxContent().then((function() {
                        return i.dfd.promise()
                    }
                    )).fail((function(t) {
                        return clearTimeout(i.visibleTimeout),
                        i.$el.off(a.a.transitionEnd),
                        i.hide(),
                        i.onModalHidden(),
                        i.dfd.reject(t)
                    }
                    )) : this.dfd.promise(),
                    this.reflow(),
                    this.fixHeight(),
                    f.on("resize.opux-modal", this._debouncedFixHeight),
                    this.$bg.removeClass(c + "-bg-fadeout"),
                    this.$el.one(a.a.transitionEnd, this.onModalVisible).addClass(d).removeClass(u),
                    this.visibleTimeout = setTimeout(this.onModalVisible, 1),
                    e
                },
                onModalVisible: function() {
                    clearTimeout(this.visibleTimeout),
                    this.$el.off(a.a.transitionEnd),
                    this._catchEscape(1),
                    v(1, this.$el),
                    m(1, this.$el),
                    this.$el.trigger("focus").trigger("visible.opux", [this.uid]),
                    this.dfd.resolve(this.uid, "visible"),
                    t("html").addClass(c + "-open"),
                    t(document).on("touchmove." + c, (function(t) {
                        t.preventDefault()
                    }
                    ))
                },
                hide: function() {
                    return this.dfd = new t.Deferred,
                    this.$el.hasClass(d) ? (g.length ? g.pop().removeClass("opux-modal-inactive") : (this._catchEscape(0),
                    v(0, this.$el),
                    m(0, this.$el),
                    f.off("resize.opux-modal", this._debouncedFixHeight),
                    this.$bg.addClass(c + "-bg-fadeout")),
                    this.$el.one(a.a.transitionEnd, this.onModalHidden).removeClass(d).addClass(u),
                    this.dfd.promise()) : this.dfd.resolve().promise()
                },
                onModalHidden: function() {
                    this.$el.hide().attr("aria-hidden", !0).trigger("hidden.opux", [this.uid]),
                    this.dfd.resolve(this.uid, "hidden"),
                    t(".opux-modal." + d).length || (this.$bg.hide(),
                    t("body").children().not(".opux-modal,.opux-modal-bg").attr("aria-hidden", !1),
                    t("html").removeClass(c + "-open"),
                    t(document).off("touchmove." + c),
                    o.trigger("focus"))
                },
                onClose: function(e) {
                    var i = t(e.target);
                    e.preventDefault(),
                    i.is(".opux-is-disabled,[disabled]") || (this.config.confirmation && (i.is(".opux-modal-confirm") ? (this.result.resolve(),
                    this.$el.trigger("confirm"),
                    this.onConfirm && this.onConfirm.call(this)) : (i.is(".opux-modal-cancel") || "Escape" === e.key) && (this.result.reject(),
                    this.$el.trigger("cancel"),
                    this.onCancel && this.onCancel.call(this))),
                    this.hide())
                },
                loadAjaxContent: function() {
                    if (this.config.ajaxCache && this.ajaxLoaded)
                        return t.when();
                    var e = this
                      , i = this.$el.addClass(c + "-loading").find(".opux-modal-content").html('<i class="opux-loading"></i>');
                    return t.get(this.ajaxUrl).always((function() {
                        e.$el.removeClass(c + "-loading")
                    }
                    )).done((function(t) {
                        t.length && (i.html(t),
                        e.ajaxLoaded = !0,
                        e.fixHeight(),
                        e.fixAria(),
                        e.config.initOPUX && window.opux && window.opux.initialize(i),
                        i.find(".opux-modal-close").on("click", e.onClose))
                    }
                    )).fail((function(t) {
                        i.html(t),
                        e.ajaxLoaded = !1
                    }
                    ))
                },
                refreshAjaxContent: function() {
                    this.ajaxLoaded = !1,
                    this.loadAjaxContent()
                },
                fixAria: function() {
                    var e = this.$el.attr("aria-labelledby")
                      , i = this.$el.find(".opux-modal-header").length ? this.$el.find(".opux-modal-header") : this.$el.find(".opux-modal-title")
                      , n = i.attr("id")
                      , s = !!t("#" + e).length;
                    e === i.attr("id") || n || s ? e !== i.attr("id") && n && !s && this.$el.attr("aria-labelledby", n) : i.attr("id", e)
                }
            }, {
                id: c,
                selector: ".opux-modal",
                apiId: "modal"
            }),
            e.a = s
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (e = e || 0,
            t = Number(t),
            e < 0 || isNaN(t))
                return "";
            var i = Math.pow(10, e)
              , n = Math.floor(t * i + .5);
            n = (n /= i).toFixed(e).replace(/\./g, ",");
            var s = Math.abs(t)
              , o = n.indexOf(",");
            o < 0 && (o = n.length);
            for (var a = 1; s && isFinite(s) && !(s < Math.pow(1e3, a)); ) {
                var r = o - 3 * a;
                n = n.substring(0, r) + " " + n.substring(r),
                a += 1
            }
            return n
        }
        i.r(e),
        i.d(e, "number", (function() {
            return n
        }
        )),
        i.d(e, "formatNumber", (function() {
            return n
        }
        ))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            i.d(e, "a", (function() {
                return d
            }
            ));
            var s, o, a = "scroll.onvisible resize.onvisible", r = t(window), l = [];
            function h() {
                s = r.scrollTop(),
                o = s + r.height()
            }
            function c(t) {
                if (t.is(":hidden"))
                    return !1;
                var e = t.offset().top;
                return e + t.height() >= s && e <= o
            }
            function u() {
                h();
                var t = l.filter((function(t) {
                    return c(t.$el)
                }
                ));
                t.length && ((l = n.difference(l, t)).length || r.off(a),
                n.each(t, (function(t) {
                    t.cb.call(t.$el)
                }
                )))
            }
            function d(e, i) {
                e = t(e),
                o || h(),
                c(e) ? i.call(e) : 1 === l.push({
                    $el: e,
                    cb: i
                }) && r.on(a, n.throttle(u, 300))
            }
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(3)
              , o = i(5);
            e.a = o.a.extend({
                initialize: function() {
                    t.bindAll(this, "setHeights", "_fixClosedHeight"),
                    o.a.prototype.initialize.apply(this, arguments),
                    this.$title = this.$el.children(".opux-expander-title"),
                    this.$content = this.$el.children(".opux-expander-content"),
                    this.$expanderController = this.$title.children("a"),
                    this.$title.on("click.opux-expander", this.onToggle).on(s.a.transitionEnd, (function(t) {
                        t.stopPropagation()
                    }
                    )).find(".opux-expander-title-controls").on("click.opux-expander", (function(t) {
                        t.stopPropagation()
                    }
                    )),
                    n("> a", this.$title).on("click.opux-expander", (function(t) {
                        t.preventDefault()
                    }
                    )).on("focus.opux-expander blur.opux-expander", (function(t) {
                        n(this).parent().toggleClass("opux-is-focused", "focus" === t.type)
                    }
                    )).each((function() {
                        n(this).nextAll().not(".opux-expander-title-controls").length && n(this).addClass("opux-has-keywords")
                    }
                    )),
                    this.$content.on("open.opux closed.opux", this.onRepaint),
                    o.a.prototype.postInitialize.apply(this, arguments),
                    this.isOpen && setTimeout(this.repaint, 100),
                    this._debouncedFixClosedHeight = t.debounce(this._fixClosedHeight, 300),
                    n(window).on("resize.opux-expander", this._debouncedFixClosedHeight)
                },
                destruct: function() {
                    n(window).off("resize.opux-expander", this._debouncedFixClosedHeight),
                    this.$title.off(".opux-expander " + s.a.transitionEnd).find("a").off(".opux-expander"),
                    this.$title = this.$content = null,
                    o.a.prototype.destruct.apply(this, arguments)
                },
                _fixClosedHeight: function() {
                    this.isOpen || (this.setHeights(),
                    Math.abs(parseInt(this.closedHeight, 10) - (this.$el.height() || 0)) > 5 && this.$el.css("height", this.closedHeight))
                },
                setHeights: function() {
                    var t = this.$title.outerHeight(!1) || 0
                      , e = this.$content.outerHeight(!1) || 0;
                    this.closedHeight = 0 === t ? this.$el.css("height") : t + "px",
                    this.openHeight = t + e + "px"
                }
            }, {
                id: "opux-expander",
                selector: ".opux-expander",
                apiId: "expander"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, "Alert", (function() {
            return n.a
        }
        )),
        i.d(e, "Date", (function() {
            return s.a
        }
        )),
        i.d(e, "Image", (function() {
            return o.a
        }
        )),
        i.d(e, "Expander", (function() {
            return a.a
        }
        )),
        i.d(e, "SpecifyingExpander", (function() {
            return r.a
        }
        )),
        i.d(e, "Modal", (function() {
            return l.a
        }
        )),
        i.d(e, "ModalOpener", (function() {
            return h.a
        }
        )),
        i.d(e, "ConfirmationModal", (function() {
            return d
        }
        )),
        i.d(e, "MoreLess", (function() {
            return p.a
        }
        )),
        i.d(e, "Progressbar", (function() {
            return f.a
        }
        )),
        i.d(e, "ProgressTracker", (function() {
            return g.a
        }
        )),
        i.d(e, "ProgressTrackerStep", (function() {
            return C
        }
        )),
        i.d(e, "Validate", (function() {
            return k.a
        }
        )),
        i.d(e, "Tooltip", (function() {
            return _.a
        }
        )),
        i.d(e, "CharacterCounter", (function() {
            return T.a
        }
        )),
        i.d(e, "TextareaAutosize", (function() {
            return S.a
        }
        )),
        i.d(e, "InputWithUnit", (function() {
            return D.a
        }
        )),
        i.d(e, "ButtonRow", (function() {
            return A
        }
        )),
        i.d(e, "LinkAny", (function() {
            return I.a
        }
        )),
        i.d(e, "Toggle", (function() {
            return M.a
        }
        )),
        i.d(e, "Verify", (function() {
            return E.a
        }
        )),
        i.d(e, "RichSelect", (function() {
            return O.a
        }
        )),
        i.d(e, "Stepper", (function() {
            return z.a
        }
        )),
        i.d(e, "Scaleslider", (function() {
            return H.a
        }
        )),
        i.d(e, "Tabs", (function() {
            return j.a
        }
        )),
        i.d(e, "ResponsiveTabs", (function() {
            return P.a
        }
        )),
        i.d(e, "Truncate", (function() {
            return N
        }
        )),
        i.d(e, "TableClickableCell", (function() {
            return L
        }
        )),
        i.d(e, "SelectionButtonContainer", (function() {
            return q.a
        }
        )),
        i.d(e, "PreventDoubleClick", (function() {
            return V.a
        }
        )),
        i.d(e, "DialogExpander", (function() {
            return B.a
        }
        )),
        i.d(e, "DialogContainer", (function() {
            return W.a
        }
        )),
        i.d(e, "TableContainer", (function() {
            return U.a
        }
        )),
        i.d(e, "Autocomplete", (function() {
            return Y.a
        }
        )),
        i.d(e, "Icons", (function() {
            return K.a
        }
        )),
        i.d(e, "InformativeLoading", (function() {
            return X.a
        }
        )),
        i.d(e, "ResponsiveTable", (function() {
            return G.a
        }
        ));
        var n = i(20)
          , s = i(21)
          , o = i(22)
          , a = i(10)
          , r = i(23)
          , l = i(7)
          , h = i(24)
          , c = i(52)
          , u = i.n(c)
          , d = l.a.extend({
            initialize: function(t, e, i, n, s, o) {
                l.a.prototype.initialize.apply(this, [{
                    bodyTitle: t,
                    body: e,
                    footer: u()({
                        confirm: i,
                        cancel: n
                    }),
                    config: {
                        confirmation: !0
                    }
                }]),
                this.onCancel = o,
                this.onConfirm = s,
                this.show()
            }
        }, {
            apiId: "confirmation"
        })
          , p = i(25)
          , f = i(26)
          , g = i(27)
          , v = i(0)
          , m = "opux-progress-tracker-step"
          , b = "opux-progress-tracker"
          , x = 13
          , y = 15
          , w = 15
          , $ = 2
          , C = v.a.extend({
            initialize: function(t) {
                this.$tracker = this.$el.parent(),
                this.$dividedSteps = this.$el.find(".opux-progress-tracker-partial-caption"),
                this.$currentStep = this.$tracker.find(".opux-progress-tracker-current"),
                this.trackerData = this.$tracker.data(b),
                this.num = this.$tracker.find(".opux-progress-tracker-step").index(this.$el) + 1,
                this.currentStepIndex = this.$tracker.find(".opux-progress-tracker-step").index(this.$currentStep) + 1,
                this.dividedStepIndex = this.$el.attr("data-current-step") ? parseInt(this.$el.attr("data-current-step")) - 1 : 0,
                this.parentStepCount = this.trackerData.$steps.length,
                this.animTime = this.trackerData.animTime,
                this.renderCircle(),
                (this.num <= this.currentStepIndex || 1 === this.num) && (this.activate(!0),
                this.num <= this.currentStepIndex && this.renderDone())
            },
            activate: function(t) {
                this.instant = t,
                this.currentStepIndex = this.trackerData.currentStep;
                t || this.animTime;
                0 === this.$dividedSteps.length ? this.fillFull() : (this.dividedStepIndex++,
                this.fillDivision()),
                this.num - 1 === this.currentStepIndex && this.$el.addClass(b + "-current")
            },
            deactivate: function(t) {
                this.instant = t,
                this.$el.addClass(b + "-current").removeClass(b + "-done"),
                this.$dividedSteps.length > 0 && (this.dividedStepIndex--,
                this.setDivisionCaption(),
                this.$circleFill.attr("class", b + "-circle-fill fill-" + this.$dividedSteps.length + "-" + this.dividedStepIndex))
            },
            renderDone: function() {
                this.$el.removeClass(b + "-current").addClass(b + "-done"),
                this.$dividedSteps.length > 0 && this.$circleFill.attr("class", b + "-circle-fill fill-" + this.$dividedSteps.length + "-" + this.$dividedSteps.length),
                this.dividedStepIndex = this.$dividedSteps.length + 1
            },
            renderUnDone: function() {
                this.$el.removeClass(b + "-current").removeClass(b + "-done"),
                0 === this.$dividedSteps.length && this.num > 1 && this.$circleFill.attr("class", b + "-circle-fill"),
                this.$dividedSteps.length > 0 && (this.$circleFill.attr("class", b + "-circle-fill fill-" + this.$dividedSteps.length + "-0"),
                this.dividedStepIndex = 0)
            },
            fillFull: function() {
                this.$circleFill.removeClass("instant"),
                this.instant && this.$circleFill.addClass("instant"),
                this.$circleFill.attr("class", b + "-circle-fill fill-1-1")
            },
            fillDivision: function() {
                var t = this.instant ? this.dividedStepIndex + " instant" : this.dividedStepIndex;
                1 !== this.num || this.instant || (t += " delayed"),
                this.$circleFill.attr("class", b + "-circle-fill fill-" + this.$dividedSteps.length + "-" + t),
                this.dividedStepIndex <= this.$dividedSteps.length && this.setDivisionCaption()
            },
            setDivisionCaption: function() {
                var t = this.$dividedSteps.eq(this.dividedStepIndex - 1);
                this.$el.find(".opux-progress-tracker-partial-caption-main").html(t.html())
            },
            renderCircle: function() {
                this.$el.attr("data-step", "" + this.num),
                this.circle = "<div class='" + b + "-circle'><svg class='" + b + "-circle-fill' xmlns='http://www.w3.org/2000/svg' version='1.1'><circle class='" + b + "-circle-path' cx='" + y + "' cy='" + w + "' r='" + x + "' stroke='#FF6A10' stroke-width='" + $ + "' fill='none'></circle></svg><svg class='" + b + "-circle-track' xmlns='http://www.w3.org/2000/svg' version='1.1'><circle cx='" + y + "' cy='" + w + "' r='" + x + "' stroke='#999' stroke-width='" + $ + "' fill='none'></circle></svg></div>",
                this.$el.append(this.circle),
                this.$el.addClass(b + "-current-hide");
                var t = this.$dividedSteps.length > 0 ? this.$dividedSteps.length : 1;
                this.$circle = this.$el.find("." + b + "-circle"),
                this.$circle.addClass("circle-rot-" + t),
                this.$circleFill = this.$circle.find(".opux-progress-tracker-circle-fill"),
                this.$dividedSteps.length > 0 && this.setDividedSteps()
            },
            setDividedSteps: function() {
                this.$el.addClass("divided");
                this.$el.append("<div class='opux-progress-tracker-partial-caption-main opux-progress-tracker-partial-caption'></div>");
                var t = "<div class='" + b + "-circle-lines'>"
                  , e = this;
                this.$dividedSteps.each((function(i, n) {
                    t += "<div class='" + b + "-circle-line line" + e.$dividedSteps.length + "-" + (i + 1) + "'></div>"
                }
                )),
                t += "</div>",
                this.$el.addClass("divided"),
                this.$circle.append(t)
            },
            isDone: function() {
                var t = this.num - 1 <= this.currentStepIndex;
                return this.$dividedSteps.length && (t = !(this.dividedStepIndex < this.$dividedSteps.length)),
                t && this.renderDone(),
                t
            },
            isUnDone: function() {
                return (0 === this.$dividedSteps.length || this.dividedStepIndex <= 1) && (this.renderUnDone(),
                !0)
            }
        }, {
            id: m,
            selector: "." + m
        })
          , k = i(28)
          , _ = i(12)
          , T = i(29)
          , S = i(30)
          , D = i(13)
          , A = v.a.extend({
            initialize: function(t) {
                var e = this.$el.children(".opux-btn").length;
                this.$el.addClass("opux-btn-row-" + e),
                2 !== e || this.$el.children(".opux-btn-primary, .opux-btn-finish").length || this.$el.addClass("opux-btn-row-noprimary").append('<span class="opux-btn opux-btn-ghost" aria-hidden="true"></span>')
            }
        }, {
            id: "opux-btn-row",
            selector: ".opux-btn-row"
        })
          , I = i(31)
          , M = i(32)
          , E = i(33)
          , O = i(34)
          , z = i(35)
          , H = i(36)
          , j = i(38)
          , P = i(39)
          , R = i(9);
        i(67);
        function F() {
            this.dotdotdot({
                watch: window
            })
        }
        var N = v.a.extend({
            initialize: function(t) {
                Object(R.a)(this.$el, F)
            }
        }, {
            id: "opux-truncate",
            selector: ".opux-truncate"
        })
          , L = v.a.extend({
            initialize: function(t) {
                var e = this.$el.siblings("[data-opux-href]").addBack();
                e.last().addClass("opux-table-cell-last"),
                this.$el.on("mouseenter", (function() {
                    e.addClass("opux-table-cell-hover").removeClass("opux-table-cell-active")
                }
                )).on("mouseleave", (function() {
                    e.removeClass("opux-table-cell-hover")
                }
                )).on("mousedown", (function() {
                    e.addClass("opux-table-cell-active")
                }
                )).on("mouseup", (function() {
                    e.removeClass("opux-table-cell-active")
                }
                ))
            }
        }, {
            id: "opux-table-cell",
            selector: "td[data-opux-href],th[data-opux-href]"
        })
          , q = i(40)
          , V = i(41)
          , B = i(42)
          , W = i(43)
          , U = i(44)
          , Y = i(45)
          , K = i(46)
          , X = i(47)
          , G = i(48)
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s, o = i(0), a = i(3), r = i(19), l = i.n(r), h = a.a.hasPointer ? "pointer" : "mouse", c = a.a.hasTouch ? h + "up touchend" : h + "up", u = "opux-is-visible", d = "opux-tooltip-tip", p = "." + d, f = !1, g = {
                isVisible: !1,
                hasPrivateTip: !1,
                enabled: !0,
                location: "right",
                locationAdjust: !0,
                hover: !0,
                hideOnBody: !0,
                class: "",
                content: {
                    body: ""
                }
            }, v = ((s = document.createElement("a")).style.cssText = ["", "-webkit-", ""].join("filter:blur(2px); "),
            void 0 !== s.style.filter && "" !== s.style.filter || void 0 !== s.style.webkitFilter && "" !== s.style.webkitFilter);
            function m(t, e, i) {
                return t.hasOwnProperty("tooltip" + e) ? t["tooltip" + e] : i || null
            }
            function b() {
                t("body").on(c + ".opux-tooltip", (function(e) {
                    0 !== t(e.target).closest(p).length || f || (x(),
                    t(p + "." + u).removeClass(u).each((function() {
                        t(this).data("tooltip-opener").hide()
                    }
                    )),
                    t("body").off(".opux-tooltip"))
                }
                ))
            }
            function x() {
                a.a.hasTouch && (f = !0,
                setTimeout((function() {
                    f = !1
                }
                ), 100))
            }
            e.a = o.a.extend({
                initialize: function(e) {
                    var i = this.$el.data()
                      , s = t.extend(!0, {}, g);
                    s.content = m(i, "Content", s.content),
                    "string" != typeof s.content && (s.content = {
                        body: m(i, "", ""),
                        header: m(i, "Title"),
                        style: m(i, "TitleStyle"),
                        close: !!m(i, "TitleClose", !1),
                        icon: m(i, "Icon")
                    }),
                    s.hover = !!m(i, "Hover", !0),
                    s.location = m(i, "Location", "right"),
                    s.locationAdjust = !!m(i, "LocationAdjust", !i.hasOwnProperty("tooltipLocation")),
                    s.hasPrivateTip = !!m(i, "Private", !1),
                    s.class = m(i, "Class", ""),
                    this.config = t.extend(!0, s, e.config),
                    n.bindAll(this, "_onPtrUp", "_onPtrOver", "_onPtrOut"),
                    this.$el.on(c, this._onPtrUp),
                    this.$el.on(h + "over", this._onPtrOver).on(h + "out", this._onPtrOut),
                    this.$el.filter("a").on("click", (function(e) {
                        var i = t(this).attr("href");
                        i && "#" !== i.substr(0, 1) || e.preventDefault()
                    }
                    ))
                },
                destruct: function() {
                    this.hide(),
                    this.$el.off(c, this._onPtrUp),
                    o.a.prototype.destruct.apply(this)
                },
                _onPtrUp: function(t) {
                    this.config.enabled && !f && (x(),
                    this.$tooltip && this.$tooltip.hasClass(u) && this.config.isVisible ? this.hide() : this.show(),
                    t.stopPropagation())
                },
                _onPtrOver: function(t) {
                    this.config.hover && this.config.enabled && !this.config.isVisible && (x(),
                    this.show())
                },
                _onPtrOut: function(t) {
                    !f && this.config.hover && this.config.enabled && this.config.isVisible && this.hide()
                },
                createTooltip: function() {
                    this.$tooltip = t(l()({
                        wrapper: !0
                    })).appendTo("body"),
                    v && this.$tooltip.css("box-shadow", "none"),
                    this.$tooltip.on("mouseover", (function() {
                        t(this).data("hoverable") && t(this).addClass(u)
                    }
                    )).on("mouseout", (function() {
                        t(this).data("hoverable") && t(this).removeClass(u)
                    }
                    ))
                },
                setContent: function(e) {
                    void 0 !== e && (this.config.content = e,
                    "string" != typeof e || t(e).length || (this.config.content = {
                        body: e
                    })),
                    this.$tooltip && this.$tooltip.data("tooltip-opener") === this && ("string" == typeof this.config.content ? this.$tooltip.html(t(this.config.content).html()) : this.$tooltip.html(l()(this.config.content)))
                },
                show: function() {
                    var e = this
                      , i = [d];
                    if (!this.$tooltip) {
                        var s = t(p).not(p + "-private");
                        s.length ? this.$tooltip = s.eq(0) : this.createTooltip()
                    }
                    return this.$tooltip.data("tooltip-opener", this),
                    this.config.hasPrivateTip && i.push(d + "-private"),
                    this.$el.parents(".opux-modal").length && i.push(d + "-in-modal"),
                    "" !== this.config.class && i.push(this.config.class),
                    this.$tooltip.attr("class", i.join(" ")).data("hoverable", this.config.hover).css({
                        top: 0,
                        left: 0
                    }),
                    this.setContent(),
                    this.position(),
                    this.$tooltip.addClass(u),
                    this.config.isVisible = !0,
                    t("body").off(".opux-tooltip"),
                    this.config.hideOnBody && setTimeout(b, 200),
                    t(window).on("resize.opux-tooltip", n.throttle((function() {
                        e.position()
                    }
                    ), 300)),
                    this.$tooltip.find(p + "-close").off("click.opux-tooltip").on("click.opux-tooltip", (function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        e.hide()
                    }
                    )),
                    this.$el.trigger("visible.opux-tooltip"),
                    this
                },
                position: function() {
                    var e = this.config.location
                      , i = {}
                      , n = function(e) {
                        for (e = t(e); !e.is("html"); ) {
                            if ("fixed" === e.css("position"))
                                return !0;
                            e = e.offsetParent()
                        }
                        return !1
                    }(this.$el)
                      , s = window.innerWidth || t(window).width()
                      , o = window.innerHeight || t(window).height()
                      , a = t(window).scrollTop()
                      , r = this.$el.offset()
                      , l = this.$el.outerHeight() || 0
                      , h = this.$el.outerWidth() || 0
                      , c = this.$tooltip.outerHeight() || 0
                      , u = this.$tooltip.outerWidth() || 0
                      , d = {
                        top: "auto",
                        right: "auto",
                        bottom: "auto",
                        left: "auto",
                        position: n ? "fixed" : ""
                    };
                    switch (this.config.locationAdjust && ("right" === e && r.left + h + u > s - 10 && (e = "left",
                    i.r = 1),
                    "left" === e && r.left - u < 10 && (e = i.r ? "top" : "right",
                    i.l = 1),
                    "top" === e && r.top - c < a + 10 && (e = "bottom",
                    i.t = 1),
                    "bottom" === e && r.top + l + c > a + o - 10 && (e = "top",
                    i.b = 1)),
                    e) {
                    case "right":
                        d.top = Math.floor(r.top + l / 2 - c / 2),
                        d.left = r.left + h + 6 + 4;
                        break;
                    case "left":
                        d.top = Math.floor(r.top + l / 2 - c / 2),
                        d.left = r.left - u - 6 - 4;
                        break;
                    case "top":
                        d.top = r.top - c - 6 - 4,
                        d.left = Math.floor(r.left + h / 2 - u / 2);
                        break;
                    case "bottom":
                        d.top = r.top + l + 6 + 4,
                        d.left = Math.floor(r.left + h / 2 - u / 2)
                    }
                    if (n && (d.top -= a),
                    "top" === e || "bottom" === e) {
                        var p = 0;
                        d.left + u > s - 10 ? p = -(d.left + u) + (s - 10) : d.left < 10 && (p = 10 - d.left),
                        d.left += p
                    }
                    d.top += "px",
                    d.left += "px",
                    this.$tooltip.css(d).addClass("opux-tooltip-" + e)
                },
                hide: function() {
                    return this.$tooltip && (this.$tooltip.removeClass(u),
                    this.config.isVisible = !1,
                    this.$el.trigger("hidden.opux-tooltip")),
                    t(window).off("resize.opux-tooltip"),
                    this
                },
                toggle: function(t) {
                    this.config.enabled = void 0 !== t ? !!t : !this.config.enabled
                }
            }, {
                id: "opux-tooltip",
                selector: ".opux-tooltip",
                apiId: "tooltip"
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        var n = i(0);
        e.a = n.a.extend({
            initialize: function(t) {
                var e, i, n = 10;
                this.$el.parent().is(".opux-input-wrapper") ? (i = this.$el.next(".opux-input-unit")).length && (e = i.text()) : (e = this.$el.data("unit") || "",
                this.$el.wrap('<div class="opux-input-wrapper"></div>').after('<span class="opux-input-unit">' + e + "</span>"),
                i = this.$el.next(".opux-input-unit")),
                i.length && (i.width() > 0 ? n = i.width() + 15 : e.length && (n = 10 * e.replace(/&#?[a-zA-Z0-9]+;/g, "x").length + 15),
                this.$el.css("paddingRight", n + "px"))
            }
        }, {
            id: "opux-input-with-unit",
            selector: "input.opux-input:not(.opux-input-stepper)[data-unit],.opux-input-wrapper input.opux-input"
        })
    }
    , function(t, e, i) {
        (function(n) {
            var s;
            void 0 === (s = function() {
                var t = function() {};
                return t.extend = function(t, e) {
                    var i, s = this;
                    i = t && n.has(t, "constructor") ? t.constructor : function() {
                        return s.apply(this, arguments)
                    }
                    ,
                    n.extend(i, s, e);
                    var o = function() {
                        this.constructor = i
                    };
                    return o.prototype = s.prototype,
                    i.prototype = new o,
                    t && n.extend(i.prototype, t),
                    i.__super__ = s.prototype,
                    i
                }
                ,
                t
            }
            .call(e, i, e, t)) || (t.exports = s)
        }
        ).call(this, i(2))
    }
    , function(t, e, i) {
        (function(n) {
            var s;
            void 0 === (s = function() {
                return function(t) {
                    var e = this;
                    this.initialValue = t,
                    this.values = {},
                    n.isPlainObject(t) ? this.values = t : this.values.singleVal = t,
                    this.set = function(t, i, s) {
                        var o, a = i || "singleVal";
                        return o = e.values[a] !== t,
                        i = i || "singleVal",
                        e.values[i] = t,
                        o && "singleVal" !== i && !s && n(this).trigger(i + "Changed", e.values[i]),
                        !o || ("singleVal" !== i || s) && s || n(this).trigger("changed", "singleVal" !== i ? e.values : e.values[i]),
                        o || s || n(this).trigger("notChanged"),
                        e
                    }
                    ,
                    this.reset = function() {
                        n.isPlainObject(t) ? this.values = t : this.values.singleVal = t,
                        n(this).trigger("resetValue", e.values)
                    }
                    ,
                    this.deleteValue = function(t) {
                        var i = !!e.values[t];
                        delete e.values[t],
                        i && (n(this).trigger(t + "Changed", null),
                        n(this).trigger("changed", e.values))
                    }
                    ,
                    this.setAll = function(t) {
                        var i, s = !1;
                        if (n.isEmptyObject(t))
                            e.values = {},
                            s = !0;
                        else
                            for (i in t)
                                t.hasOwnProperty(i) && (s || (s = t[i] !== e[i]),
                                e.set(t[i], i, !0),
                                n(this).trigger(i + "Changed", e.values[i]));
                        return s && n(this).trigger("changed", e.values),
                        e
                    }
                    ,
                    this.get = function(t) {
                        return t || 0 !== e.values.singleVal && !1 !== e.values.singleVal && !e.values.singleVal ? t ? e.values[t] : !t && e.values.singleVal ? 0 : e.values : e.values.singleVal
                    }
                }
            }
            .call(e, i, e, t)) || (t.exports = s)
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        e.a = []
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function s(e, i) {
                var s, o, a, r = t(e), l = {};
                for (Array.isArray(i) || (i = [i]),
                a = 0; a < i.length; a++) {
                    if ("string" == typeof (s = i[a]))
                        o = r.data(s);
                    else if ("object" === n(s)) {
                        var h = Object.keys(s)[0];
                        o = r.data(h),
                        s = s[h]
                    }
                    void 0 !== o && (l[s] = o)
                }
                return l
            }
            function o(e) {
                if (!e || void 0 === e)
                    throw Error("Container not defined!");
                e.find(".opux-truncate").each((function() {
                    void 0 !== t(this).data("opux-truncate") && t(this).data("opux-truncate").initialize()
                }
                ))
            }
            i.d(e, "b", (function() {
                return s
            }
            )),
            i.d(e, "a", (function() {
                return o
            }
            ))
        }
        ).call(this, i(1))
    }
    , function(t, e) {
        t.exports = i
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("wrapper", t, e, 1), t, e, 0, 12, 94, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('<div class="opux-tooltip-tip" aria-hidden="true" role="tooltip" tabindex="-1">\r'),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.s(n.f("header", t, e, 1), t, e, 0, 123, 403, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('    <div class="opux-tooltip-tip-header'),
                        n.s(n.f("style", t, e, 1), t, e, 0, 174, 210, "{{ }}") && (n.rs(t, e, (function(t, e, i) {
                            i.b(" opux-tooltip-tip-header-"),
                            i.b(i.t(i.f("style", t, e, 0)))
                        }
                        )),
                        t.pop()),
                        n.b('">\r'),
                        n.b("\n" + i),
                        n.b("        "),
                        n.s(n.f("icon", t, e, 1), t, e, 0, 241, 277, "{{ }}") && (n.rs(t, e, (function(t, e, i) {
                            i.b('<i class="opux-icon '),
                            i.b(i.t(i.f("icon", t, e, 0))),
                            i.b('"></i>')
                        }
                        )),
                        t.pop()),
                        n.b("\r"),
                        n.b("\n" + i),
                        n.b("        "),
                        n.b(n.t(n.f("header", t, e, 0))),
                        n.b("\r"),
                        n.b("\n" + i),
                        n.b("        "),
                        n.s(n.f("close", t, e, 1), t, e, 0, 328, 375, "{{ }}") && (n.rs(t, e, (function(t, e, i) {
                            i.b('<a href="#" class="opux-tooltip-tip-close"></a>')
                        }
                        )),
                        t.pop()),
                        n.b("\r"),
                        n.b("\n" + i),
                        n.b("    </div>\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.b('    <div class="opux-tooltip-tip-content">'),
                    n.b(n.t(n.f("body", t, e, 0))),
                    n.b("</div>\r"),
                    n.b("\n" + i),
                    n.s(n.f("footer", t, e, 1), t, e, 0, 491, 558, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('    <div class="opux-tooltip-tip-footer">'),
                        n.b(n.t(n.f("footer", t, e, 0))),
                        n.b("</div>\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.s(n.f("wrapper", t, e, 1), t, e, 0, 583, 593, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b("</div>\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'{{#wrapper}}\r\n<div class="opux-tooltip-tip" aria-hidden="true" role="tooltip" tabindex="-1">\r\n{{/wrapper}}\r\n    {{#header}}\r\n    <div class="opux-tooltip-tip-header{{#style}} opux-tooltip-tip-header-{{{style}}}{{/style}}">\r\n        {{#icon}}<i class="opux-icon {{{icon}}}"></i>{{/icon}}\r\n        {{{header}}}\r\n        {{#close}}<a href="#" class="opux-tooltip-tip-close"></a>{{/close}}\r\n    </div>\r\n    {{/header}}\r\n    <div class="opux-tooltip-tip-content">{{{body}}}</div>\r\n    {{#footer}}\r\n    <div class="opux-tooltip-tip-footer">{{{footer}}}</div>\r\n    {{/footer}}\r\n{{#wrapper}}\r\n</div>\r\n{{/wrapper}}\r\n',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(17)
              , a = i(3)
              , r = {
                timeout: 5
            };
            e.a = s.a.extend({
                initialize: function(e) {
                    t.bindAll(this, "show", "hide", "dismiss"),
                    this.config = n.extend(!0, {}, r, e, Object(o.b)(this.$el, "timeout")),
                    this.isFlash = this.$el.hasClass("opux-alert-flash"),
                    this.$el.find(".opux-btn-close").on("click", this.dismiss),
                    this.$el.is(".opux-is-not-visible,.opux-is-hidden") || this.show(!0),
                    this.$el.on("show", this.show).on("hide", this.dismiss)
                },
                show: function(t) {
                    if (clearTimeout(this.to),
                    this.$el.show(),
                    !t) {
                        this.reflow();
                        var e = this.$el;
                        this.$el.one(s.a.transitionEnd, (function() {
                            e.trigger("visible")
                        }
                        ))
                    }
                    this.$el.addClass("opux-is-visible").removeClass("opux-is-hidden opux-is-not-visible"),
                    this.isFlash && (this.to = setTimeout(this.dismiss, 1e3 * this.config.timeout))
                },
                hide: function() {
                    this.dismiss()
                },
                dismiss: function(t) {
                    t && t.preventDefault(),
                    clearTimeout(this.to),
                    this.$el.addClass("opux-is-not-visible").removeClass("opux-is-visible");
                    var e = this.$el;
                    setTimeout((function() {
                        e.css("min-height", 0).slideUp(a.a.defaultTransitionDuration).trigger("hidden")
                    }
                    ), a.a.defaultTransitionDuration + 200)
                }
            }, {
                id: "opux-alert",
                selector: ".opux-alert"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(50)
              , a = i(64);
            var r = "opux-input-date";
            e.a = s.a.extend({
                initialize: function(t) {
                    var e = this;
                    if (n.bindAll(this, "_setupPicker"),
                    this.$el.parent().is(".opux-input-date-container") || this.$el.wrap('<div class="' + r + '-container"></div>').after('<a class="opux-btn opux-btn-icon opux-icon-calendar"></a>'),
                    this.$wrapper = this.$el.parent(),
                    this.$button = this.$el.next(),
                    this.$el.attr("type", "text"),
                    "function" == typeof window.moment)
                        this._setupPicker(t, window.moment);
                    else
                        try {
                            window.require(["moment"], (function(i) {
                                e._setupPicker(t, i)
                            }
                            ))
                        } catch (n) {
                            Promise.resolve().then(function(n) {
                                e._setupPicker(t, i(18))
                            }
                            .bind(null, i)).catch((function(n) {
                                e._setupPicker(t, i(18))
                            }
                            ))
                        }
                },
                destruct: function() {
                    this.picker.destroy && this.picker.destroy(),
                    s.a.prototype.destruct.apply(this)
                },
                _setupPicker: function(e, i) {
                    var s = t.extend({}, this.$el.data(), e)
                      , l = {
                        field: this.el,
                        trigger: this.$button[0],
                        position: "bottom right",
                        container: this.$el.parents(".opux-modal").length ? this.$el.parents(".opux-modal")[0] : void 0,
                        outputFormat: "D.M.YYYY",
                        inputFormat: ["D.M.YY", "D.M.YYYY"],
                        formatStrict: !1,
                        firstDay: 1,
                        i18n: Object(o.a)(i),
                        onOpen: this.onPickerOpen,
                        onClose: this.onPickerClose,
                        onDraw: function() {
                            this.adjustPosition()
                        },
                        moment: i
                    };
                    void 0 === i && window.console ? console.warn(r + " needs momentjs in order to be fully functional") : n.each(["minDate", "maxDate", "defaultDate"], (function(t) {
                        void 0 !== s[t] && ("string" == typeof s[t] && s[t].match(/^[+\-]/) || "number" == typeof s[t] ? s[t] = i().add(s[t], "d").toDate() : s[t] = i(s[t]).toDate())
                    }
                    )),
                    void 0 === a && window.console ? console.error(r + " needs Pikaday in order to be functional") : (!function(e) {
                        e.prototype.origAdjustPosition || (e.prototype.origAdjustPosition = e.prototype.adjustPosition,
                        e.prototype.adjustPosition = function() {
                            var e = this
                              , i = e._o.container
                              , n = t(e.el)
                              , s = t(e._o.field)
                              , o = !0;
                            e._o.container = void 0,
                            e.origAdjustPosition(),
                            e._o.container = i;
                            var a = parseInt(n.css("top"), 10)
                              , r = s.offset().top;
                            i && (a -= t(window).scrollTop()),
                            a < 60 && e.rOB && (a += (n.outerHeight() || 0) + (s.outerHeight() || 0),
                            o = !0),
                            a > r && (o = !0),
                            void 0 !== e.rOB ? o = e.rOB : e.rOB = o,
                            n.toggleClass("opux-input-date-bottom", o).css("top", a + "px")
                        }
                        )
                    }(a),
                    this.picker = new a(t.extend(l, s)),
                    t(this.picker.el).addClass("opux-pikaday"))
                },
                onPickerOpen: function() {
                    var e = this;
                    t(document).on("keydown.opux-input-date", (function(t) {
                        t.preventDefault();
                        var i = e.getMoment();
                        if (i) {
                            switch (t.keyCode) {
                            case 9:
                                t.shiftKey ? i.subtract(1, "d") : i.add(1, "d");
                                break;
                            case 37:
                                i.subtract(1, "d");
                                break;
                            case 39:
                                i.add(1, "d");
                                break;
                            case 38:
                                i.subtract(1, "w");
                                break;
                            case 40:
                                i.add(1, "w");
                                break;
                            case 13:
                            case 27:
                                e.hide()
                            }
                            e.setMoment(i)
                        }
                    }
                    ))
                },
                onPickerClose: function() {
                    t(document).off(".opux-input-date")
                }
            }, {
                id: r,
                selector: "input.opux-input-date",
                apiId: "date"
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(9)
              , a = "opux-image"
              , r = a + "-lazy"
              , l = t(window)
              , h = !1;
            function c() {
                t("." + r + ":not(opux-image-lazy-i9d)").addClass("opux-image-lazy-i9d").each((function() {
                    Object(o.a)(this, u)
                }
                ))
            }
            function u() {
                t(this).removeClass(r + " opux-image-lazy-i9d").find("img,source").each((function() {
                    var e = t(this);
                    e.attr("src", e.attr("data-src")).attr("srcset", e.attr("data-srcset")).removeAttr("data-src data-srcset"),
                    e.is("img") && window.picturefill && picturefill({
                        reevaluate: !0,
                        elements: [this]
                    })
                }
                ))
            }
            e.a = s.a.extend({
                initialize: function(t) {
                    this.$el.is("." + a + "-crop") && (n.bindAll(this, "checkRatio", "checkImgRatio", "imgOnLoad"),
                    this.$img = this.$el.find("img").on("load", this.imgOnLoad),
                    this.containerRatio = 1,
                    this.checkRatio(),
                    l.on("resize." + a, n.throttle(this.checkRatio, 500)).on("repaint." + a, this.checkRatio),
                    this.$el.on("repaint." + a, this.checkRatio)),
                    this.$el.is("." + r) && ("complete" === document.readyState ? c() : h || (h = !0,
                    l.on("load", c)))
                },
                destruct: function() {
                    l.off("." + a),
                    this.$el.off("." + a),
                    s.a.prototype.destruct.apply(this)
                },
                checkImgRatio: function() {
                    var t = this._getAttrDim("width")
                      , e = this._getAttrDim("height");
                    t && e || (t = this.$img.width(),
                    e = this.$img.height()),
                    this.imgRatio = t / e
                },
                checkRatio: function(t) {
                    t && t.stopPropagation(),
                    this.containerRatio = this.$el.width() / this.$el.height(),
                    this.imgRatio || this.checkImgRatio(),
                    this.$el.toggleClass(a + "-ratio-wider", this.containerRatio > this.imgRatio)
                },
                imgOnLoad: function() {
                    this.checkImgRatio(),
                    this.checkRatio()
                },
                _getAttrDim: function(t) {
                    return parseInt(this.$img.attr(t), 10) || 0
                }
            }, {
                id: a,
                selector: "." + a + "-crop,." + r
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(5)
              , o = "opux-specifying-expander"
              , a = "." + o;
            e.a = s.a.extend({
                previousEvent: null,
                initialize: function() {
                    t.bindAll(this, "_onControlChange", "_arrowPosition", "setHeights"),
                    s.a.prototype.initialize.apply(this, arguments),
                    this.$content = this.$el.find(a + "-content"),
                    this.$arrow = this.$el.find(a + "-arrow"),
                    this.$arrow.length || (this.$arrow = n('<i class="' + o + '-arrow" />').prependTo(this.$el)),
                    this.$el.data("expander-control") && (this.$control = n(this.$el.data("expander-control")),
                    this.$title = this.$control,
                    this.$expanderController = this.$control,
                    this._arrowPosition(),
                    this.$control.is("input") ? (this.$control.is(":radio") ? n('input[name="' + this.$control.attr("name") + '"]').on("change" + a, this._onControlChange) : this.$control.on("change" + a, this._onControlChange),
                    this.isOpen = this.$control.is(":checked")) : this.$control.on("tap" + a + " click" + a, this._onControlChange)),
                    this.$el.on("open.opux closed.opux", (function() {
                        n(this).parents(a + ",.opux-expander").trigger("repaint")
                    }
                    )),
                    s.a.prototype.postInitialize.apply(this, arguments),
                    this.setState(this.isOpen, !0, !0)
                },
                destruct: function() {
                    this.$control.is(":radio") ? n('input[name="' + this.$control.attr("name") + '"]').off(a, this._onControlChange) : this.$control.off(a, this._onControlChange),
                    s.a.prototype.destruct.apply(this, arguments)
                },
                _arrowPosition: function() {
                    this.$arrow.css("left", "0");
                    var t = this.$arrow.offset().left
                      , e = this.$arrow.outerWidth(!1) || 0
                      , i = this.$control.is(":radio, :checkbox") ? this.$control.siblings("label") : this.$control
                      , n = i.offset().left
                      , s = i.outerWidth(!1) || 0;
                    this.$arrow.css("left", Math.ceil(n - t + s / 2 - e / 2) + "px")
                },
                _onControlChange: function(t) {
                    var e;
                    if (this.$control.is("input"))
                        e = this.$control.is(":checked");
                    else if (this.$control.is("a")) {
                        var i = !1;
                        if (null != this.previousEvent && t.type != this.previousEvent.type && t.timeStamp - this.previousEvent.timeStamp <= 100 && (i = !0),
                        this.previousEvent = t,
                        t.preventDefault(),
                        i)
                            return;
                        e = !this.isOpen
                    }
                    this.setState(e)
                },
                setHeights: function() {
                    this.closedHeight = "0px";
                    var t = 0;
                    this.$el.children().each((function() {
                        t += n(this).outerHeight(!0) || 0
                    }
                    )),
                    t -= this.$arrow.outerHeight(!0) || 0,
                    this.openHeight = t + "px"
                },
                repaint: function() {
                    this.setState(void 0, !0),
                    this._arrowPosition()
                }
            }, {
                id: o,
                selector: a,
                apiId: "specifyingExpander"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(7);
            e.a = s.a.extend({
                config: t.extend(!0, {}, s.a.prototype.config, {
                    modalSelector: "",
                    modalUrl: "",
                    modalRemoveOriginal: !1,
                    modalConfig: {
                        escape: !0,
                        ajaxCache: !0,
                        initOPUX: !0,
                        confirmation: !1
                    },
                    mouseMoveThreshold: 50
                }),
                modal: null,
                initialize: function(e) {
                    this.config = t.extend(!0, {}, this.config),
                    n.bindAll(this, "_onClick", "_onMouseDown", "_onMouseUp"),
                    this.$el.on("click", this._onClick),
                    this.$el.on("mousedown pointerdown touchstart", this._onMouseDown),
                    this.$el.on("mouseup pointerup touchend", this._onMouseUp)
                },
                parseConfig: function() {
                    var t, e, i = this.$el.data();
                    for (e in i)
                        "" !== (t = (e.match(/^modalConfig(.+)$/) || ["", ""])[1]) ? (t = t.charAt(0).toLowerCase() + t.slice(1),
                        this.config.modalConfig[t] = i[e]) : this.config[e] = i[e]
                },
                initializeModal: function() {
                    if (this.parseConfig(),
                    this.config.modalSelector)
                        this.initializeInlineModal(this.config.modalSelector);
                    else if (this.config.modalUrl)
                        this.initializeAjaxModal(this.config.modalUrl);
                    else if (this.$el.is("a")) {
                        var t = this.$el.attr("href");
                        if (!t.length || "#" === t)
                            throw new Error("href attribute is undefined");
                        /^#.*/.test(t) ? (this.config.modalSelector = t,
                        this.initializeInlineModal(this.config.modalSelector)) : (this.config.modalUrl = t,
                        this.initializeAjaxModal(this.config.modalUrl))
                    }
                },
                initializeInlineModal: function(e) {
                    var i = t(e);
                    if (i.length) {
                        var n = i.html();
                        this.config.modalRemoveOriginal && i.remove(),
                        this.modal = new o.a({
                            content: n,
                            config: this.config.modalConfig
                        })
                    }
                },
                initializeAjaxModal: function(t) {
                    this.modal = new o.a({
                        url: t,
                        config: this.config.modalConfig
                    })
                },
                _onClick: function(t) {
                    return t.preventDefault(),
                    this.preventClick ? (this.preventClick = !1,
                    !1) : (null === this.modal && this.initializeModal(),
                    this.modal.show(),
                    !1)
                },
                _onMouseDown: function(t) {
                    this.detectingMovement || (this.mousePos = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    this.preventClick = !1,
                    this.detectingMovement = !0)
                },
                _onMouseUp: function(t) {
                    this.detectingMovement && ((Math.abs(this.mousePos.x - t.pageX) > this.config.mouseMoveThreshold || Math.abs(this.mousePos.y - t.pageY) > this.config.mouseMoveThreshold) && (this.preventClick = !0),
                    this.detectingMovement = !1)
                }
            }, {
                id: "opux-modal-opener",
                selector: ".opux-modal-opener"
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0);
            e.a = s.a.extend({
                initialize: function(e) {
                    t.bindAll(this, "showMore", "showLess", "activeButtonsChecker"),
                    this.$more = this.$el.find(".opux-more-less-button-more"),
                    this.$less = this.$el.find(".opux-more-less-button-less");
                    var i = this.$el.data("more-less-target");
                    if (void 0 === i)
                        throw new Error("MoreLess: `data-more-less-target` attribute not set.");
                    if (this.$target = n(i),
                    !this.$target.length)
                        throw new Error('MoreLess: target "' + i + '" not found.');
                    this.$resultSets = this.$target.find(".opux-more-less-result-set"),
                    this.$resultSets.length ? (this.loading = !1,
                    this.$more.prop("disabled", !1).on("click", this.showMore),
                    this.$less.prop("disabled", !0).on("click", this.showLess)) : this.$el.fadeOut(200, (function() {
                        n(this).remove()
                    }
                    ))
                },
                showMore: function(t) {
                    if (t.preventDefault(),
                    !this.loading) {
                        this.loading = !0;
                        var e = this.$resultSets.filter(":hidden");
                        if (e.length > 0) {
                            this.$less.prop("disabled", !1),
                            1 === e.length && (this.$more.prop("disabled", !0),
                            this.$less.trigger("focus")),
                            this.activeButtonsChecker();
                            var i = this;
                            e.eq(0).slideDown(200, (function() {
                                i.loading = !1
                            }
                            ))
                        }
                    }
                },
                showLess: function(t) {
                    if (t.preventDefault(),
                    !this.loading) {
                        this.loading = !0;
                        var e = this.$resultSets.filter(":visible");
                        !0 === this.$more.prop("disabled") && this.$more.css("z-index", "1"),
                        this.$more.prop("disabled", !1),
                        e.length <= 1 && (this.$less.prop("disabled", !0),
                        this.$more.trigger("focus")),
                        this.activeButtonsChecker();
                        var i = this;
                        e.eq(-1).slideUp(200, (function() {
                            i.loading = !1,
                            i.$more.css("z-index", "")
                        }
                        ))
                    }
                },
                activeButtonsChecker: function() {
                    this.$more.is(":disabled") || this.$less.is(":disabled") ? this.$el.removeClass("opux-more-less-both-buttons-visible") : this.$el.addClass("opux-more-less-both-buttons-visible")
                }
            }, {
                id: "opux-more-less",
                selector: ".opux-more-less"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0)
              , s = {
                current: 0,
                min: 0,
                max: 1,
                unit: ""
            };
            e.a = n.a.extend({
                initialize: function(e) {
                    this.values = t.extend({}, s),
                    this.parseValues(this.el.style.paddingLeft),
                    this.$el.data("value") && this.parseValues(this.$el.data("value")),
                    this.$el.data("max") && (this.values.max = parseFloat(this.$el.data("max"))),
                    this.$el.data("min") && (this.values.min = parseFloat(this.$el.data("min"))),
                    this.$el.data("unit") && (this.values.unit = this.$el.data("unit"))
                },
                render: function() {
                    this.$el.css("padding-left", 100 * this.values.current / (this.values.max - this.values.min) + "%")
                },
                parseValues: function(t) {
                    var e = parseFloat(t);
                    isNaN(e) || (this.values.current = e,
                    this.values.max = Math.pow(10, Math.ceil(Math.log(e) / Math.LN10)),
                    this.values.unit = String(t).replace(/[\d\.\,\-]/g, ""),
                    "%" === this.values.unit.trim() && (this.values.max = 100))
                },
                value: function(t) {
                    if (void 0 === t)
                        return this.values.current;
                    this.parseValues("" + t),
                    this.render()
                }
            }, {
                id: "opux-progressbar",
                selector: ".opux-progressbar"
            })
        }
        ).call(this, i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0)
              , s = "opux-progress-tracker";
            e.a = n.a.extend({
                initialize: function(t) {
                    this.$steps = this.$el.find(".opux-progress-tracker-step"),
                    this.$currentStepElem = this.$el.find(".opux-progress-tracker-current"),
                    this.currentStep = this.$steps.index(this.$currentStepElem),
                    this.animating = !1,
                    this.animTime = 500;
                    var e = 2 * this.$el.find(".opux-progress-tracker-step").length - this.$el.find(".opux-progress-tracker-first, .opux-progress-tracker-last").length;
                    this.$el.addClass(s + "-" + e),
                    this.drawTrack()
                },
                gotoNext: function(t, e) {
                    if (!0 !== this.animating) {
                        var i = this.$steps.eq(this.currentStep).data(s + "-step");
                        if (i.isDone()) {
                            if (!(this.currentStep < this.$steps.length - 1))
                                return;
                            this.currentStep++,
                            i = this.$steps.eq(this.currentStep).data(s + "-step")
                        }
                        i.activate(),
                        this.animateTrack()
                    }
                },
                gotoPrev: function() {
                    if (!0 !== this.animating) {
                        var t = this.$steps.eq(this.currentStep).data(s + "-step");
                        t.isUnDone() && this.currentStep > 0 && (this.currentStep--,
                        t = this.$steps.eq(this.currentStep).data(s + "-step")),
                        t.deactivate(),
                        this.animateTrack()
                    }
                },
                gotoStep: function(e, i) {
                    if (!0 !== this.animating)
                        if (void 0 !== e) {
                            var n = e - 1
                              , o = i - 1 || 0
                              , a = this.$steps.eq(n).data(s + "-step");
                            if (this.$steps.eq(n).length <= 0 || a.$dividedSteps.eq(o).length <= 0)
                                console.warn(s + ": either step or substep is not in range");
                            else {
                                this.currentStep = n;
                                var r = this;
                                this.$steps.each((function(e) {
                                    var i = t(this).data(s + "-step");
                                    e < r.currentStep ? (i.dividedStepIndex = i.$dividedSteps.length - 1,
                                    i.activate(!0),
                                    i.renderDone()) : e > r.currentStep && (i.dividedStepIndex = 0,
                                    i.deactivate(!0),
                                    i.renderUnDone())
                                }
                                )),
                                this.$steps.eq(this.currentStep).removeClass(s + "-done"),
                                a.dividedStepIndex = o,
                                a.activate(!0),
                                this.animateTrack(!0)
                            }
                        } else
                            console.warn(s + ": needs a step to function")
                },
                unAnimate: function() {
                    var t = this;
                    setTimeout((function() {
                        t.animating = !1
                    }
                    ), 500)
                },
                drawTrack: function() {
                    this.$el.append("<div class='track-progress'><div class='opux-progressbar' data-value='0' role='progressbar'></div></div>"),
                    this.animateTrack(!0)
                },
                animateTrack: function(t) {
                    this.animating = !0,
                    this.$el.find(".opux-progressbar").toggleClass("instant", !!t);
                    var e = this.currentStep / (this.$steps.length - 1) * 100;
                    this.currentStep <= 0 ? e = 0 : this.$steps.length > 4 && (e = this.handleExcpetionSteps(e)),
                    this.$el.find(".opux-progressbar").css("padding-left", e + "%"),
                    this.unAnimate()
                },
                handleExcpetionSteps: function(t) {
                    return 1 === this.currentStep ? t -= 2 : 4 === this.currentStep && (t += 2),
                    t
                },
                getCurrentStep: function() {
                    return this.currentStep
                }
            }, {
                id: s,
                selector: ".opux-progress-tracker"
            })
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(4)
              , a = "opux-is-visible"
              , r = "opux-validate-hidden-field"
              , l = ".opux-input-" + ["wrapper", "switch", "checkbox", "radio", "segmented"].join(",.opux-input-") + ",div.opux-input-select"
              , h = !window.ActiveXObject && "ActiveXObject"in window;
            function c(e) {
                return t(e).parent().is(l) ? t(e).parent() : t(e)
            }
            function u(e) {
                return t(e).is(l) ? t(e).find(":input") : t(e)
            }
            function d(e) {
                var i = t(e).siblings(".opux-validate-error")
                  , n = t(e).attr("id");
                return n && (i = i.add(t('.opux-validate-error[data-error-for~="' + n + '"]'))),
                i
            }
            e.a = s.a.extend({
                initialize: function() {
                    this.$submit = this.$el.find(":submit.opux-validate-submit"),
                    this.keyTimeout = null,
                    n.bindAll(this, "_onFormKeyup", "_onSubmit", "toggleHiddenFields"),
                    this.$el.on("keyup paste open.opux closed.opux", this._onFormKeyup).on("submit", this._onSubmit).find("[required],[pattern],[type=email],[type=url]").on("invalid", this._onInputInvalid).on("blur change", this._onInputBlur).on("keyup paste", this._onInputKeyup).attr("title", "").filter(":checkbox, :radio, select").on("change", this._onInputKeyup).on("change", this._onFormKeyup),
                    t(".opux-validate-error", this.$el).attr("aria-hidden", !0),
                    this.$el.find("[required]").attr("aria-required", !0),
                    1 === this.version() ? this.$submit.prop("disabled", !1).prop("disabled", !1).on("click", this._onSubmit).on("visible.opux-tooltip", (function() {
                        var e = t(this).data("opux-tooltip");
                        setTimeout((function() {
                            e.position()
                        }
                        ), 200)
                    }
                    )) : this.$submit.on("click", this._onSubmit),
                    this.toggleHiddenFields(),
                    this.$el.trigger("keyup"),
                    t(this.el.querySelectorAll('[value]:invalid:not([value=""])')).filter(":text").trigger("blur")
                },
                checkForm: function() {
                    if (this.toggleHiddenFields(),
                    t(this.el.querySelectorAll(":valid, [required]:checked")).each((function() {
                        d(c(this)).filter("." + a).addClass("opux-is-corrected").removeClass(a).css("max-height", "0")
                    }
                    )),
                    1 === this.version()) {
                        var e = this.$submit.data("opux-tooltip");
                        t(this.el.querySelectorAll(":invalid")).length ? (o.disable(this.$submit.addClass("opux-btn-disabled")),
                        e && e.toggle(!0)) : (o.enable(this.$submit.removeClass("opux-btn-disabled")),
                        e && e.toggle(!1))
                    }
                },
                toggleHiddenFields: function() {
                    var e = !1;
                    this.$el.find("[required],[pattern],[type=email],[type=url],." + r).each((function() {
                        var i = t(this)
                          , n = (i.is(":input") || i.find(":input"),
                        c(this));
                        n.is(":hidden,.opux-is-not-open *") ? n.is("." + r) || (n.addClass(r),
                        u(n).each((function() {
                            t(this).data("hidden-required", t(this).prop("required")).prop("required", !1).removeAttr("required").data("hidden-pattern", t(this).attr("pattern")).removeAttr("pattern")
                        }
                        )),
                        e = !0) : n.is("." + r) && (n.removeClass(r),
                        u(n).each((function() {
                            t(this).attr("required", t(this).data("hidden-required")).attr("pattern", t(this).data("hidden-pattern"))
                        }
                        )),
                        e = !0)
                    }
                    )),
                    e && this.$el.trigger("keyup")
                },
                _onFormKeyup: function() {
                    clearTimeout(this.keyTimeout),
                    this.keyTimeout = setTimeout(this.checkForm.bind(this), 300)
                },
                _onInputKeyup: function() {
                    setTimeout(n.bind((function() {
                        c(t(this).filter("[required]")).toggleClass("opux-input-invalid", this.validity.valueMissing),
                        "radio" === t(this)[0].type && t("input[name='" + t(this)[0].name + "']").attr("aria-invalid", !1).parent().removeClass("opux-input-invalid")
                    }
                    ), this), 1)
                },
                _onInputBlur: function(e) {
                    if ("function" == typeof this.checkValidity)
                        if (h && e && "change" === e.type)
                            setTimeout(this._onInputBlur, 1);
                        else {
                            this.checkValidity();
                            var i, n = t(this), s = d(c(n));
                            s.removeClass("opux-is-visible").css("max-height", "0").attr("aria-hidden", !0),
                            this.validity.valid ? (n.attr("aria-invalid", !1).removeClass("opux-input-invalid"),
                            "radio" === n[0].type && t("input[name='" + n[0].name + "']").attr("aria-invalid", !1).parent().removeClass("opux-input-invalid")) : (s.removeClass("opux-is-corrected"),
                            i = !0,
                            n.attr("aria-invalid", !0),
                            n.is("[required]") && this.validity.valueMissing && s.filter(".opux-validate-error-required").addClass(a).attr("aria-hidden", !1).length && (i = !1),
                            (n.is("[pattern],[type=email],[type=url]") && this.validity.patternMismatch || this.validity.typeMismatch) && s.filter(".opux-validate-error-pattern").addClass(a).attr("aria-hidden", !1).length && (i = !1),
                            i && s.addClass(a).attr("aria-hidden", !1),
                            s.filter("." + a).each((function() {
                                t(this).css("max-height", this.scrollHeight + "px")
                            }
                            )))
                        }
                },
                _onInputInvalid: function(e) {
                    e.preventDefault(),
                    t(this).is("[required]") && c(t(this)).addClass("opux-input-invalid")
                },
                _onSubmit: function(e) {
                    if (this.$submit.hasClass("opux-btn-disabled") || t(this.el.querySelectorAll(":invalid")).length) {
                        e.preventDefault();
                        var i = this;
                        this.$el.find("[required],[pattern],[type=email],[type=url]").each((function() {
                            i._onInputBlur.call(this)
                        }
                        ))
                    }
                }
            }, {
                id: "opux-validate",
                selector: ".opux-validate",
                apiId: "validate"
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0);
            e.a = s.a.extend({
                initialize: function(e) {
                    this.template = t.template(this.$el.text(), {
                        interpolate: /\{\{(.*?)\}\}/g
                    }),
                    this.$target = n(),
                    t.bindAll(this, "count"),
                    this.$el.data("counter-target") ? this.$target = n(this.$el.data("counter-target")) : this.$target = this.$el.prev("textarea,:text"),
                    this.$target.length && this.$target.attr("maxlength") && (this.$target.on("cut paste mousedown mouseup touchend focus blur input propertychange keyup change".split(" ").join(".opux-character-counter ") + ".opux-character-counter", this.count),
                    this.count(),
                    this.$el.show())
                },
                count: function() {
                    var t, e, i = Math.max(0, parseInt(this.$target.attr("maxlength"), 10) - (t = this.$target.val(),
                    e = t.match(/(\r\n|\n|\r)/g),
                    t.length + (null != e ? e.length : 0)));
                    this.$el.html(this.template({
                        count: i
                    }))
                },
                destruct: function() {
                    this.$target.off(".opux-character-counter"),
                    s.a.prototype.destruct.apply(this)
                }
            }, {
                id: "opux-character-counter",
                selector: ".opux-character-counter"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0);
            e.a = n.a.extend({
                initialize: function() {
                    t.bindAll(this, "autoheight"),
                    this.offset = parseInt(this.$el.css("paddingBottom")) + parseInt(this.$el.css("paddingTop")) || 0,
                    this.$el.val().replace(/\s/g, "").length && this.autoheight(),
                    this.$el.on("keyup input", this.autoheight)
                },
                autoheight: function() {
                    this.$el.height(0).height(this.el.scrollHeight - this.offset)
                }
            }, {
                id: "opux-textarea-autosize",
                selector: ".opux-textarea-autosize"
            })
        }
        ).call(this, i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0);
            e.a = s.a.extend({
                initialize: function(e) {
                    t.bindAll(this, "onClick"),
                    this.href = this.$el.attr("role", "link").on("click.opux-link-any", this.onClick).data("opux-href")
                },
                destruct: function() {
                    this.$el.off("click.opux-link-any", this.onClick),
                    s.a.prototype.destruct.apply(this)
                },
                onClick: function(t) {
                    t.currentTarget !== t.target && n(t.target).is("a,input,label,button,select,[data-opux-href]") || (t.preventDefault(),
                    location.href = this.href)
                }
            }, {
                id: "opux-link-any",
                selector: "[data-opux-href]"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0);
            e.a = s.a.extend({
                initialize: function(e) {
                    t.bindAll(this, "onChange", "toggle"),
                    this.$el.on("change", this.onChange),
                    this.$el.is(":radio") && n('[name="' + this.$el.attr("name") + '"]').not(this.$el).on("change", this.onChange),
                    this.toggle()
                },
                onChange: function(t) {
                    this.toggle()
                },
                toggle: function() {
                    var t = this.$el.attr("id")
                      , e = !!this.$el.data("toggle-invert") || !1
                      , i = this.$el.is(":checked")
                      , s = (this.$el.data("toggle-property") || "").match(/\S+/g) || []
                      , o = this.$el.data("toggle-class") || "";
                    e && (i = !i),
                    n('[data-toggled-by~="' + t + '"]').each((function() {
                        if (s.length)
                            for (var t in s)
                                n(this).prop(s[t], i);
                        "" !== o && n(this).toggleClass(o, i)
                    }
                    ))
                }
            }, {
                id: "opux-toggle",
                selector: ":checkbox.opux-toggle, :radio.opux-toggle"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(53)
              , a = i.n(o)
              , r = i(54)
              , l = i.n(r)
              , h = "opux-verify"
              , c = ["in-progress", "done", "disabled"];
            e.a = s.a.extend({
                initialize: function(e) {
                    t.bindAll(this, "_onInputKeyPress", "_onInputKeyUp", "_onInputKeyDown", "_onInputFocus", "_onButtonKeyDown", "setState", "error", "alert"),
                    this.$form = this.$el.find("form"),
                    this.$input = this.$el.find("input.opux-verify-input"),
                    this.$btn = this.$el.find(".opux-btn"),
                    this.$errorAfterElem = this.$input,
                    this.prevInputEvt = "",
                    this.state = "",
                    this.type = "",
                    this.setState(),
                    this.$placeholder = n('<div class="' + h + '-btn-placeholder"><span></span></div>').insertAfter(this.$btn).addClass(this.$btn.prop("class")).height(this.$btn.height() || 0).width(this.$btn.width() || 0),
                    this.$input.on("keypress", this._onInputKeyPress).on("keydown", this._onInputKeyDown).on("keyup", this._onInputKeyUp).on("focus", this._onInputFocus),
                    this.$btn.on("keydown", this._onButtonKeyDown),
                    this.el.className.indexOf("keycode") && (this.type = "keycode"),
                    "keycode" === this.type && (this.$input.prop("maxLength", this.$input.prop("maxLength") || 4),
                    this.$form.prop("noValidate", !0).prop("autocomplete", "off"),
                    this.$input.prop("pattern", "\\d*").prop("autocomplete", "off"))
                },
                _onInputKeyPress: function(t) {
                    if ("keycode" === this.type) {
                        this.prevInputEvt = "keypress";
                        var e = String.fromCharCode(t.which);
                        isNaN(e) && t.which > 46 && t.preventDefault();
                        var i = this.$input.val();
                        i.length !== this.$input[0].maxLength - 1 || isNaN(e) || (t.preventDefault(),
                        this.$btn.trigger("focus"),
                        this.$input.val(i + e).scrollLeft(0))
                    }
                },
                _onInputKeyDown: function(t) {
                    var e = this.$input[0]
                      , i = e.value.length;
                    if (this.prevInputEvt = "keydown" + i,
                    !("keycode" !== this.type || i < e.maxLength) && i === e.maxLength) {
                        var n = this.$input;
                        n.scrollLeft(0),
                        setTimeout((function() {
                            n.scrollLeft(0)
                        }
                        ), 5)
                    }
                },
                _onInputKeyUp: function(t) {
                    var e = this.$input[0];
                    if (!("keycode" !== this.type || e.value.length < e.maxLength))
                        if ("keydown3" === this.prevInputEvt)
                            this.$btn.trigger("focus");
                        else if (0 === e.scrollLeft) {
                            var i = this.$input.css("width");
                            this.$input.css("width", "auto").trigger("focus").css("width", i)
                        }
                },
                _onInputFocus: function(t) {
                    "" !== this.state && this.$input.trigger("blur")
                },
                _onButtonKeyDown: function(t) {
                    if (8 === t.which) {
                        t.preventDefault();
                        var e = this.$input.val();
                        this.$input.val(e.substring(0, 3)).trigger("focus")
                    }
                },
                setState: function(t) {
                    var e;
                    if (void 0 === t)
                        for (e in this.state = "",
                        c)
                            this.$el.hasClass(h + "-" + c[e]) && (this.state = c[e]);
                    else
                        this.state = t;
                    for (e in c)
                        this.$el.toggleClass(h + "-" + c[e], c[e] === this.state);
                    this.$input.attr("readonly", "" !== this.state)
                },
                alert: function(t, e, i) {
                    var s;
                    s = "string" == typeof t ? {
                        header: e || "",
                        content: t || "",
                        footer: i || ""
                    } : t,
                    this.$el.find(".opux-verify-alert").remove(),
                    n(a()(s)).insertAfter(this.$el.find(".opux-verify-main"))
                },
                error: function(t) {
                    this.$el.find(".opux-verify-error").remove(),
                    this.$input.removeClass("opux-input-error"),
                    t && "" !== t && (n(l()({
                        message: t
                    })).insertAfter(this.$errorAfterElem),
                    this.$input.addClass("opux-input-error"))
                }
            }, {
                id: h,
                selector: "." + h
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = (i(7),
            "opux-rich-select");
            e.a = s.a.extend({
                isOpen: 0,
                initialize: function(e) {
                    n.bindAll(this, "onToggle", "_onKeyboard", "_setFocus", "_clearFocus", "refreshWidth"),
                    this.$wrapper = this.$el.find(".opux-rich-select-wrapper"),
                    this.$options = this.$wrapper.find(".opux-rich-select-option"),
                    this.current = this.$options.index(this.getCurrent(1)),
                    this.$el.addClass("opux-is-active"),
                    this.setCurrent(),
                    this.$el.on("click", ".opux-rich-select-option,.opux-rich-select-current", this.onToggle),
                    this.$el.on("keydown", ".opux-rich-select-option,.opux-rich-select-current", this._onKeyboard),
                    this.$wrapper.on("change", (function(t) {
                        t.stopPropagation()
                    }
                    )),
                    t(window).on("resize", n.debounce(this.refreshWidth, 300))
                },
                _onKeyboard: function(t) {
                    switch (t.keyCode) {
                    case 9:
                        if (this.isOpen)
                            break;
                        return;
                    case 13:
                        return void (this.isOpen && this.onToggle("enter"));
                    case 27:
                        this.isOpen && this.onToggle("esc");
                        break;
                    case 32:
                        this.onToggle("space");
                        break;
                    case 38:
                        this.isOpen ? this._setFocus(-1) : this.onToggle("up");
                        break;
                    case 40:
                        this.isOpen ? this._setFocus(1) : this.onToggle("down");
                        break;
                    default:
                        return
                    }
                    t.preventDefault()
                },
                onToggle: function(e) {
                    var i = this;
                    e = "string" == typeof e ? e : 0,
                    this.$el.toggleClass("opux-is-open"),
                    this.$el.hasClass("opux-is-open") ? (this.isOpen = 1,
                    this.$el.parents(".opux-expander").css("overflow", "visible"),
                    this.$wrapper.offset().top + this.$wrapper.height() > window.innerHeight + t(window).scrollTop() && (this.$el.addClass(o + "-overlay"),
                    t("html").addClass(o + "-noscroll"),
                    this.$wrapper.width(this.$el.width() || 0)),
                    e && this._setFocus(),
                    this.previous = this._getCurrentIndex(1),
                    function(e) {
                        var i = t(".opux-rich-select-listener");
                        i.length || (i = t("<div />").addClass("opux-rich-select-listener").appendTo("body")),
                        i.off("click").on("click", (function() {
                            e.onToggle()
                        }
                        ))
                    }(this)) : (this.isOpen = 0,
                    this.$el.parents(".opux-expander").css("overflow", ""),
                    t(".opux-rich-select-listener").remove(),
                    this.$el.removeClass(o + "-overlay"),
                    t("html").removeClass(o + "-noscroll"),
                    this.$wrapper.width(""),
                    setTimeout((function() {
                        i.setCurrent(e),
                        i._clearFocus(),
                        i._getCurrentIndex(1) !== i.previous && i.$el.trigger({
                            type: "change",
                            index: i._getCurrentIndex(1),
                            value: i._getCurrentInput(1).val()
                        })
                    }
                    ), 10))
                },
                select: function(t) {
                    this.current = Math.max(0, Math.min(t, this.$options.length - 1)),
                    this.setCurrent(1)
                },
                refreshWidth: function() {
                    if (this.$el.hasClass("opux-is-open")) {
                        this.$wrapper.width(this.$el[0].offsetWidth - 2)
                    }
                },
                _setFocus: function(t) {
                    if (t = void 0 !== t ? t : 0,
                    this._clearFocus(),
                    t && this.handleMovementOnFocus(t),
                    !(this.current < 0)) {
                        var e = this.getCurrent().addClass("has-focus").trigger("focus")
                          , i = this.$wrapper.innerHeight() || 0
                          , n = this.$wrapper.scrollTop() || 0
                          , s = e.position().top + n
                          , o = s + (e.outerHeight() || 0);
                        return s < n && this.$wrapper.scrollTop(s),
                        o > i + n && this.$wrapper.scrollTop(o - i),
                        e
                    }
                },
                handleMovementOnFocus: function(t) {
                    var e = this.$options.length
                      , i = this.current + t;
                    this.isEnabled(i) || (i += t),
                    1 === t && i === e ? i = 0 : -1 === t && i < 0 && (i = e - 1),
                    i >= 0 && i < e && (this.current = i);
                    var n = 1 === t ? "up" : "down";
                    this.setCurrent(n),
                    this._getCurrentInput(1).trigger("click")
                },
                _clearFocus: function() {
                    return this.$options.removeClass("has-focus")
                },
                getCurrent: function(e) {
                    if (e = void 0 !== e ? e : 0) {
                        var i = this.$el.find("input:checked");
                        return i.length || (i = this.$el.find("input").first().prop("checked", 1)),
                        i.next(".opux-rich-select-option")
                    }
                    return t(this.$options[this.current])
                },
                _getCurrentIndex: function(t) {
                    return this.$options.index(this.getCurrent(t))
                },
                _getCurrentInput: function(t) {
                    return this.getCurrent(t).prev("input")
                },
                getOption: function(e) {
                    return t(this.$options[e])
                },
                getOptionInput: function(e) {
                    return t("#" + this.getOption(e).attr("for"))
                },
                isEnabled: function(t) {
                    return void 0 === t ? !this.$el.is("[disabled]") : !this.getOptionInput(t).is("[disabled]")
                },
                enable: function(t) {
                    this.toggle(t, !0)
                },
                disable: function(t) {
                    this.toggle(t, !1)
                },
                toggle: function(t, e) {
                    var i = void 0 === t ? this.$el : this.getOptionInput(t);
                    return void 0 === e && (e = i.is("[disabled]")),
                    i.prop("disabled", !e),
                    e
                },
                setCurrent: function(e) {
                    var i, n = t("<div />").addClass("opux-rich-select-current").attr("tabindex", 0);
                    return e && "esc" !== e && t("#" + this.getCurrent().attr("for")).prop("checked", 1),
                    i = this.getCurrent(1).html(),
                    this.$el.find(".opux-rich-select-current").length > 0 ? this.$el.find(".opux-rich-select-current").html(i) : this.$wrapper.before(n.html(i))
                }
            }, {
                id: o,
                selector: ".opux-rich-select",
                apiId: "richSelect"
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(3)
              , a = i(8)
              , r = i(13)
              , l = i(12)
              , h = i(15)
              , c = i.n(h)
              , u = "opux-input-stepper"
              , d = "opux-btn-disabled";
            function p(t, e) {
                e && t.hasClass(d) ? t.removeClass(d) : e || t.hasClass(d) || t.addClass(d)
            }
            function f(t, e, i) {
                var n = t.data("input").data("config");
                n.formatter;
                return p(e, i < n.max),
                p(t, i > n.min),
                i > n.max && n.max || i < n.min && n.min || i
            }
            function g(t) {
                t.data("interval") && (window.clearInterval(t.data("interval")),
                t.data("interval", null))
            }
            function v(t) {
                var e = t.data("config")
                  , i = t.data("model")
                  , n = !isNaN(i.get()) && i.get()
                  , s = e.formatter;
                f(t.data("decrease"), t.data("increase"), n),
                t.val(s.format(n))
            }
            function m(t, e, i) {
                var s = n('<button type="button" class="opux-btn opux-btn-primary opux-btn-icon">')
                  , a = t.data("config");
                e ? s.addClass(u + "-btn-dec opux-icon-minus") : s.addClass(u + "-btn-inc opux-icon-plus"),
                s.text(e ? "-" : "+"),
                s.data("isHold", !1),
                s.data("input", t),
                s.data("func", i);
                var r = o.a.hasPointer ? "pointer" : "mouse";
                return s.on(r + "down", (function(e) {
                    return e.stopPropagation(),
                    window.clearTimeout(t.data("timeout")),
                    t.data("timeout", null),
                    s.hasClass(d) || t.data("timeout", window.setTimeout((function() {
                        s.data("isHold", !0),
                        i(s),
                        t.data("interval", window.setInterval((function() {
                            i(s)
                        }
                        ), a.stepInterval || 100))
                    }
                    ), 500)),
                    !1
                }
                )).on(r + "up", (function(e) {
                    e.stopPropagation();
                    var n = t.data("timeout")
                      , o = s.data("isHold");
                    return n && !o ? i(s) : s.data("isHold") && (s.data("isHold", !1),
                    g(t)),
                    !1
                }
                )).on(r + "out", (function(e) {
                    e.stopPropagation();
                    var i = t.data("timeout")
                      , n = s.data("isHold");
                    return i && !n ? (window.clearTimeout(i),
                    i = null) : s.data("isHold") && (s.data("isHold", !1),
                    g(t)),
                    !1
                }
                )).on("doubletap", (function(t) {
                    i(s)
                }
                )).preventdoubletapzoom("doubletap"),
                s
            }
            function b(t) {
                var e, i, s = document, o = n(s.createElement("span")).addClass("opux-input-unit"), a = t.data("config").unit;
                return !function(t) {
                    var e;
                    return !!t.parent().parent().hasClass(u) && ((e = t.parent().parent()).find(".opux-btn").remove(),
                    e.find(".opux-input-stepper-unit").remove(),
                    !0)
                }(t) ? (e = n(s.createElement("div")).addClass(u),
                i = n(s.createElement("div")).addClass(u + "-container opux-input-wrapper"),
                e.append(i),
                t.after(e),
                e.find("." + u + "-container").prepend(t)) : (e = n(t).closest("div.opux-input-stepper"),
                i = n(t).closest(".opux-input-stepper-container.opux-input-wrapper"),
                e.find(".opux-input-stepper-container").append(t)),
                t.attr("type", "text"),
                a && (o.text(a),
                i.append(o),
                new r.a({
                    $el: t
                })),
                e
            }
            function x(t) {
                return !!t.data("model")
            }
            function y(t, e) {
                var i = t.hasClass(d)
                  , n = t.data("input")
                  , s = x(n) ? n.data("model") : null
                  , o = n.data("config")
                  , a = o.formatter
                  , r = s.get() || o.min
                  , l = parseFloat(a.format(parseFloat(n.val().replace(/\s/g, "").replace(/,/g, "."))).replace(/,/g, ".").replace(/\s/g, ""))
                  , h = n.data("config").step;
                if (r = parseFloat(a.format(r).replace(/,/g, ".").replace(/\s/g, "")),
                !i && n.data("timeout") && (window.clearTimeout(n.data("timeout")),
                n.data("timeout", null)),
                l && (r = l),
                i)
                    return !1;
                r = !e && r - h < o.min ? o.min : e && r + h > o.max ? o.max : e ? r + h : r - h,
                s && (r = s.set(r).get()),
                function(t, e) {
                    var i = t.data("input")
                      , n = t.data("opposite")
                      , s = i.data("config");
                    e >= s.max || e <= s.min ? (p(t, !1),
                    n.hasClass(d) && p(n, !0)) : p(n, !0)
                }(t, r)
            }
            function w(t) {
                y(n(t), !0)
            }
            function $(t) {
                y(n(t), !1)
            }
            function C(t, e, i, n) {
                return n = n || e.min,
                n = f(t.data("decrease"), t.data("increase"), n),
                i && i.set(n).get() || n
            }
            function k(t) {
                var e, i, s = n(this), o = s.data("config"), a = s.data("isHold"), r = x(s) ? s.data("model") : null, l = s.data("timeout"), h = o.sanitizer.sanitize(s.val()), c = function() {
                    switch (t.keyCode) {
                    case 107:
                        e = h + o.step,
                        h = e <= o.max ? e : o.max;
                        break;
                    case 109:
                        i = h - o.step,
                        h = i >= o.min ? i : o.min
                    }
                    C(s, o, r, h)
                };
                "keyup" === t.type && 13 !== t.keyCode ? (s.data("timeout") && (window.clearTimeout(s.data("timeout")),
                s.data("timeout", null)),
                107 === t.keyCode || 109 === t.keyCode ? (t.preventDefault(),
                g(s),
                s.data("isHold", !1)) : 9 !== t.keyCode && (s.data("timeout", window.setTimeout((function() {
                    C(s, o, r, h)
                }
                ), o.inputDelay)),
                l = s.data("timeout"))) : "keydown" === t.type ? 107 !== t.keyCode && 109 !== t.keyCode || (t.preventDefault(),
                a || (c(),
                g(s),
                window.clearTimeout(s.data("timeout")),
                s.data("isHold", !0),
                s.data("interval", window.setInterval((function() {
                    c()
                }
                ), o.stepInterval || 100)))) : "blur" === t.type ? (C(s, o, r, h),
                window.clearTimeout(l),
                window.clearInterval(s.data("interval")),
                s.data("isHold", !1)) : (window.clearTimeout(s.data("timeout")),
                C(s, o, r, h))
            }
            e.a = s.a.extend({
                initialize: function(e) {
                    if (t.bindAll(this, "enable", "disable", "toggle"),
                    !this.$el.is('input[type="text"],input[type="number"]'))
                        return !1;
                    var i = {
                        unit: null,
                        tooltip: null,
                        step: 1,
                        default: 0,
                        min: 0,
                        max: 9999999,
                        inputDelay: 900,
                        sanitizer: e.sanitizer || {
                            sanitize: function(t) {
                                var e = t.replace(/[^0-9,.]/g, "").replace(/,/g, ".").replace(/\s/g, "");
                                return e = parseInt(Math.round(parseFloat(e, 10)), 10),
                                isNaN(e) ? 0 : e
                            }
                        },
                        formatter: e.formatter || {
                            format: a.formatNumber
                        }
                    }
                      , s = this.$el.data()
                      , o = "function" == typeof e.decreaseCallback ? e.decreaseCallback : null
                      , r = "function" == typeof e.increaseCallback ? e.increaseCallback : null;
                    this.$el.stepper(n.extend(i, s, e), o, r),
                    this.$el.is(":disabled") && this.disable()
                },
                enable: function() {
                    this.toggle(!0)
                },
                disable: function() {
                    this.toggle(!1)
                },
                toggle: function(t) {
                    void 0 === t && (t = this.$el.prop("disabled")),
                    this.$el.data("increase").toggleClass(d, !t),
                    this.$el.data("decrease").toggleClass(d, !t),
                    this.$el.prop("disabled", !t),
                    t && this.$el.trigger("blur")
                }
            }, {
                id: u,
                selector: ".opux-input-stepper",
                apiId: "stepper"
            }),
            n.fn.stepper = function(t, e, i) {
                var s = t
                  , o = n(this).data("config", s)
                  , a = b(o)
                  , r = (a.find(".opux-input-stepper-container"),
                s.model || (new c.a).set(s.default))
                  , h = m(o, !1, i || w)
                  , d = m(o, !0, e || $)
                  , p = null;
                o.data("model", r),
                o.data("increase", h),
                o.data("decrease", d),
                d.data("opposite", h),
                h.data("opposite", d);
                var f;
                !isNaN(r.get()) && r.get();
                if (a.prepend(d),
                a.append(h),
                s.tooltip) {
                    p = '<div class="' + u + '-tooltip"><a class="opux-info-link opux-tooltip" data-tooltip="' + s.tooltip + '"></a></div>',
                    h.after(p);
                    var g = h.next("div." + u + "-tooltip").find(".opux-tooltip");
                    g && (o.tooltip = new l.a({
                        el: g
                    }))
                }
                return (f = o).on("focusin", (function() {
                    0 === f.data("model").get() ? (f.data("discardedAtFocus", f.val()),
                    f.val("")) : 0 !== f.data("model").get() && window.setTimeout((function() {
                        f.select()
                    }
                    ), 100)
                }
                )),
                f.on("blur keyup keydown", k),
                n(r).on("changed resetValue notChanged", (function() {
                    v(o)
                }
                )),
                v(o),
                o
            }
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(8)
              , a = "opux-input-scaleslider";
            function r(e, i, n, s) {
                if (e && void 0 !== e[i]) {
                    var o = e[i];
                    e[n] && t.isObject(e[n]) || (e[n] = {}),
                    e[n][s] = o,
                    i !== n && delete e[i]
                }
            }
            function l(t, e) {
                return "string" == typeof t && (t = t.split(",")),
                Array.isArray(t) ? t.slice(0, e) : [t]
            }
            function h(t, e, i, s) {
                var o = n('<div class="noUi-value noUi-value-' + e + ' noUi-value-large">' + i + "</div>");
                return o.css("horizontal" === e ? "left" : "top", s + "%"),
                o.appendTo(t),
                o
            }
            function c(e) {
                var i = [];
                return t.each(Array.isArray(e) ? e : [e], (function(t) {
                    var e = Number(t);
                    isNaN(e) || i.push(e)
                }
                )),
                i
            }
            e.a = s.a.extend({
                getOption: function(t, e) {
                    var i = this.scaleslider.options;
                    return i && i[t] ? i[t] : e
                },
                initialize: function(t) {
                    var e = this;
                    if (!this.$el.data(a + "-initialized")) {
                        var s = this.$el.data()
                          , h = {
                            animate: !0,
                            orientation: "horizontal",
                            connect: [!0, !1],
                            direction: "ltr",
                            start: [30],
                            step: 10,
                            format: {
                                to: function(t) {
                                    return o.formatNumber.apply(this, [t])
                                },
                                from: function(t) {
                                    return parseFloat(t.replace(/[^\d,.\-]/g, "").replace(",", "."), 10)
                                }
                            },
                            range: {
                                min: [0],
                                max: [100]
                            },
                            disableMin: !1,
                            scale: !1
                        };
                        r(s, "min", "range", "min"),
                        r(s, "max", "range", "max"),
                        r(s, "labelEl", "label", "el"),
                        r(s, "labelTemplate", "label", "template"),
                        r(s, "scale", "scale", "type"),
                        r(s, "scaleStep", "scale", "step"),
                        r(s, "scaleLabels", "scale", "labels"),
                        s && s.scale && "pips" === s.scale.type && (r(s, "scaleMode", "scale", "mode"),
                        r(s, "scaleValues", "scale", "values"),
                        s.scale.values && (s.scale.values = l(s.scale.values)),
                        r(s, "scalePositions", "scale", "positions"),
                        r(s, "scaleDensity", "scale", "density"));
                        var c = n.extend({}, h, s, t);
                        c && c.start && (c.start = l(c.start, 2)),
                        c && c.range && (c.range.min = l(c.range.min, 2),
                        c.range.max = l(c.range.max, 2)),
                        c.format || (c.format = void 0),
                        this.$container = n("<div />").addClass(a + "-container").appendTo(this.$el);
                        var u = this.$el.prop("style");
                        if (u) {
                            var d = u.height;
                            d && (this.$container.prop("style").height = d)
                        }
                        if (void 0 !== window.noUiSlider)
                            this._setupSlider(window.noUiSlider, c);
                        else
                            try {
                                window.require(["nouislider"], (function(t) {
                                    e._setupSlider(t, c)
                                }
                                ))
                            } catch (t) {
                                Promise.resolve().then(function(t) {
                                    e._setupSlider(i(37), c)
                                }
                                .bind(null, i)).catch((function(t) {
                                    e._setupSlider(i(37), c)
                                }
                                ))
                            }
                    }
                },
                destruct: function() {
                    this.$el.find(".noUi-handle").off("click." + a + " keydown." + a),
                    t.each(l(this.getOption("link", null)), (function(t) {
                        n(t).off("change." + a)
                    }
                    )),
                    this.scaleslider.destroy(),
                    this.$container.remove(),
                    s.a.prototype.destruct.apply(this)
                },
                _setupSlider: function(e, i) {
                    var s = this
                      , o = i.start
                      , r = this.scaleslider = e.create(this.$container[0], i);
                    if (this.$el.find(".noUi-handle").attr("tabindex", 0).on("click." + a, (function() {
                        this.focus()
                    }
                    )).on("keydown." + a, (function(t) {
                        var e = !1
                          , s = n(this).data("handle")
                          , o = c(r.get());
                        switch (t.keyCode) {
                        case 37:
                            o[s] -= i.step,
                            e = !0;
                            break;
                        case 39:
                            o[s] += i.step,
                            e = !0
                        }
                        e && r.set(o)
                    }
                    )),
                    this.getOption("scale", i.scale))
                        if (s.$el.addClass("scaled"),
                        "pips" === i.scale.type)
                            r.pips(n.extend({}, {
                                stepped: !0,
                                mode: "values",
                                values: [i.range.min, i.range.max]
                            }, i.scale));
                        else {
                            var u = (i.range.max - i.range.min) / (i.scale.step ? i.scale.step : i.step)
                              , d = 100 / u
                              , p = !1
                              , f = n("<div />")
                              , g = s.getOption("orientation", i.orientation)
                              , v = s.getOption("direction", i.direction);
                            f.addClass("noUi-pips noUi-pips-" + g + " custom-pips"),
                            i.scale.labels && i.scale.labels.length > 0 && (i.scale.labels = l(i.scale.labels, 3),
                            "rtl" === v && i.scale.labels.reverse(),
                            p = 3 === i.scale.labels.length);
                            for (var m = 0; m <= u; m++) {
                                var b = m * d
                                  , x = n('<div class="noUi-marker noUi-marker-' + g + ' noUi-marker-normal"></div>');
                                x.css("horizontal" === g ? "left" : "top", b + "%"),
                                x.appendTo(f),
                                i.scale.labels && (0 === b ? h(f, g, i.scale.labels[0], b).addClass("scale-start") : i.scale.labels.length > 1 && 100 === b ? h(f, g, i.scale.labels[p ? 2 : 1], b).addClass("scale-end") : p && 50 === b && h(f, g, i.scale.labels[1], 50).addClass("scale-center"))
                            }
                            s.$container.append(f)
                        }
                    var y = this.getOption("link", i.link);
                    y && (i.link = l(y),
                    t.each(i.link, (function(t, e) {
                        var i = n(t);
                        i.length && (r.on("update", (function(t, n) {
                            i.is(":input") ? i.val(t[e]) : i.text(t[e])
                        }
                        )),
                        i.on("change." + a, (function() {
                            r.set(this.value)
                        }
                        )))
                    }
                    )));
                    var w = this.getOption("label", i.label);
                    if (w && w.el) {
                        var $ = n(w.el);
                        if ($) {
                            this.label = $;
                            var C = s.getOption("start", i.start).length > 1
                              , k = "{0}";
                            i.label.template ? k = i.label.template : C && (k += " {1}"),
                            t.each(i.start, (function(e, s) {
                                r.on("update", (function(e, s) {
                                    var o, a, r;
                                    i.label.format && (e = t.map(e, i.label.format.to)),
                                    o = $,
                                    a = k,
                                    (r = e) && n.each(r, (function(t, e) {
                                        var i = "{" + t + "}";
                                        a = a.replace(i, e)
                                    }
                                    )),
                                    n(o).text(a)
                                }
                                ))
                            }
                            ))
                        }
                    }
                    if (this.getOption("disableMin", !1)) {
                        var _ = this.getOption("range", i.range);
                        this.minValue = _.min + this.getOption("step", i.step)
                    }
                    this.model = this.getOption("model", i.model),
                    this.model && (this.modelChangedCallback = this.getOption("modelChanged", i.modelChanged) || function() {
                        var e = c(s.model.get());
                        return t.isEqual(o, e) || r.set(e, !1),
                        !1
                    }
                    ,
                    n(this.model).on("changed", s.modelChangedCallback),
                    n(this.model).on("resetValue", this.getOption("modelReset", i.modelReset) || function(e, i) {
                        var n = c(i.singleVal);
                        return t.isEqual(o, n) || r.set(n, !1),
                        !1
                    }
                    ));
                    var T = this.getOption("slide", i.slide);
                    T && r.on("slide", T);
                    var S = this.getOption("change", i.change);
                    S && r.on("change", S),
                    this.setCallback = this.getOption("set", i.set) || function(e) {
                        if (e = c(e),
                        s.minValue && e[0] < s.minValue && (e[0] = s.minValue),
                        this.set(e, !1),
                        o = c(this.get()),
                        s.model) {
                            var i = c(s.model.get());
                            t.isEqual(i, o) || s.model.set(o)
                        }
                    }
                    ,
                    r.on("set." + a, this.setCallback),
                    this.$el.data(a + "-initialized", !0).addClass(a)
                }
            }, {
                id: a,
                selector: "." + a,
                apiId: "scaleslider"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e) {
        t.exports = n
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = i(17)
              , a = "opux-is-active";
            e.a = s.a.extend({
                activeTab: 0,
                config: t.extend(!0, {}, s.a.prototype.config),
                initialize: function(e) {
                    n.bindAll(this, "onSelect"),
                    this.config = t.extend(!0, {}, this.config, e.config),
                    this.$tabs = this.$el.find(".opux-tabs-item"),
                    this._getContentElements(),
                    this.$el.on("click." + this.id, ".opux-tabs-item > a", this.onSelect);
                    var i = this.$tabs.filter("." + a);
                    i.length && (this.activeTab = this.getTabId(i.find(" > a").attr("href"))),
                    this.selectTab(this.activeTab)
                },
                _callback: function(t, e) {
                    this.config.events && (e && !Array.isArray(e) && (e = [e]),
                    "function" == typeof this.config.events[t] && this.config.events[t].apply(this, e))
                },
                _getContentElements: function() {
                    var e = this;
                    this.content = [],
                    this.$tabs.each((function() {
                        var i = t(this).find(" > a").attr("href");
                        i && i.length && "#" !== i && e.content.push(i)
                    }
                    )),
                    this.$content = t(this.content.join(","))
                },
                onSelect: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget || e.target);
                    if (i.closest(".opux-tabs-item").hasClass("opux-is-disabled"))
                        return !1;
                    this._callback("beforeSelect", e);
                    var n = i.attr("href");
                    this.selectTab(n),
                    this._callback("afterSelect", e)
                },
                selectTab: function(t) {
                    if (!t && 0 !== t)
                        throw Error('Tab id "' + t + '" not found.');
                    var e, i;
                    "string" == typeof t ? (e = this.getTabId(t),
                    i = t) : (e = t,
                    i = this.getTabContentId(t)),
                    this.activeTab = e,
                    this.$tabs.removeClass(a).eq(e).addClass(a),
                    this.$content.removeClass(a).hide().filter(i).addClass(a).show().trigger("repaint"),
                    this.$content.find(".opux-truncate").length && Object(o.a)(this.$content)
                },
                getTabId: function(t) {
                    return this.content.indexOf(t)
                },
                getTabContentId: function(t) {
                    return this.content[t] ? this.content[t] : null
                },
                getActiveTab: function() {
                    return this.getTabEl(this.activeTab)
                },
                getActiveTabContent: function() {
                    return this.getTabContentEl(this.activeTab)
                },
                getTabEl: function(t) {
                    return "string" == typeof t && (t = this.getTabId(t)),
                    this.$tabs.eq(t)
                },
                getTabContentEl: function(t) {
                    return "number" == typeof t && (t = this.getTabContentId(t)),
                    this.$content.siblings(t)
                }
            }, {
                id: "opux-tabs",
                selector: ".opux-tabs-dynamic",
                apiId: "tabs"
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0);
            e.a = s.a.extend({
                initialize: function() {
                    t.bindAll(this, "_checkWidth", "_navigate");
                    var e = this.$el.find(".opux-tabs-item");
                    if (e.length > 1) {
                        var i = this.$select = n("<select>").on("change", this._navigate);
                        e.each((function(t) {
                            i.append('<option value="' + t + (n(this).hasClass("opux-is-disabled") ? '" disabled="disabled' : "") + (n(this).hasClass("opux-is-active") ? '" selected="selected' : "") + '">' + n(this).text() + "</option>")
                        }
                        )),
                        this.$el.append(n('<div class="opux-tabs-select-wrapper">').append(i)),
                        n(window).on("resize.opux-tabs-responsive", t.debounce(this._checkWidth, 500)),
                        this.$el.parents(".opux-specifying-expander").on("opening", this._checkWidth),
                        this._checkWidth()
                    }
                },
                destruct: function() {
                    n(window).off(".opux-tabs-responsive"),
                    s.a.prototype.destruct.apply(this)
                },
                _navigate: function(t) {
                    var e = this.$el.find(".opux-tabs-item > a").eq(n(t.target).val());
                    e.length && e[0].click()
                },
                _checkWidth: function() {
                    this.$el.removeClass("opux-tabs-responsive-compact");
                    var t = this.$el.find(".opux-tabs-item").eq(1).height() || 0
                      , e = this.$el.height() || 0;
                    this.$el.toggleClass("opux-tabs-responsive-compact", e > 1.5 * t)
                }
            }, {
                id: "opux-tabs-responsive",
                selector: ".opux-tabs-responsive",
                apiId: "responsiveTabs"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0);
            function o(e) {
                var i = 0;
                e.each((function() {
                    var e = t(this).height();
                    e > i && (i = e)
                }
                )).height(i)
            }
            e.a = s.a.extend({
                initialize: function(e) {
                    n.bindAll(this, "_setHeights"),
                    this._throttledSetHeights = n.throttle(this._setHeights, 500),
                    t(window).on("resize", this._throttledSetHeights).on("repaint.opux", this._setHeights),
                    this._setHeights(),
                    this.$el.on("repaint.opux", this._setHeights)
                },
                destruct: function() {
                    t(window).off("resize", this._throttledSetHeights).off("repaint.opux", this._setHeights),
                    this.$el.off("repaint.opux", this._setHeights),
                    s.a.prototype.destruct.apply(this)
                },
                _setHeights: function() {
                    var e = this.$el.find(".opux-input-selection")
                      , i = e.eq(0)
                      , n = i.position().top;
                    e.css("height", "auto").each((function() {
                        var e = t(this).position().top;
                        Math.abs(e - n) > 2 ? (o(i),
                        i = t(this),
                        n = e) : i = i.add(t(this))
                    }
                    )),
                    o(i)
                },
                repaint: function() {
                    this._setHeights()
                }
            }, {
                id: "opux-input-selection-container",
                selector: ".opux-input-selection-container"
            })
        }
        ).call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0);
            function s(e, i, n) {
                e.on(i, n);
                var s = t._data(e[0], "events");
                s && Array.isArray(s[i]) && s[i].length > 1 && (s[i].unshift(s[i].pop()),
                t._data(e[0], "events", s))
            }
            e.a = n.a.extend({
                initialize: function() {
                    this.$el.is("form") ? s(this.$el, "submit", this._handler) : s(this.$el, "click", this._handler)
                },
                _handler: function(e) {
                    t(this).data("opux-prevent-double-check") && (e.preventDefault(),
                    e.stopPropagation(),
                    e.stopImmediatePropagation(),
                    t(this).trigger({
                        type: "prevented",
                        preventedEvent: e
                    })),
                    t(this).data("opux-prevent-double-check", !0)
                },
                reset: function() {
                    this.$el.data("opux-prevent-double-check", !1)
                }
            }, {
                id: "opux-prevent-double",
                selector: ".opux-prevent-double-submit,.opux-prevent-double-click"
            })
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            i(3);
            var n = i(10);
            e.a = n.a.extend({
                initialize: function() {
                    n.a.prototype.initialize.apply(this, arguments),
                    this.$title.find(".opux-dialog-expander-summary").length || this.$title.append('<span class="opux-dialog-expander-summary"></span>'),
                    t("> a", this.$title).addClass("opux-has-keywords")
                },
                summary: function(t) {
                    this.$el.find(".opux-dialog-expander-summary").html(t)
                }
            }, {
                id: "opux-dialog-expander",
                selector: ".opux-dialog-expander",
                apiId: "dialogExpander"
            })
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0);
            e.a = s.a.extend({
                initialize: function() {
                    t.bindAll(this, "_onContinueClick"),
                    this.$exp = this.$el.find(".opux-dialog-expander"),
                    this._next(),
                    this._setStates(),
                    this.$el.find(".opux-dialog-continue").on("click", this._onContinueClick);
                    var e = this;
                    this.$exp.on("opening.opux", (function() {
                        e.$current = n(this),
                        e._setStates()
                    }
                    ))
                },
                _setStates: function() {
                    this.$exp.not(this.$current).removeClass("current").each((function() {
                        n(this).data("opux-dialog-expander").setState(!1, !0)
                    }
                    )).not(".editable").addClass("opux-is-non-interactive"),
                    this.$current.removeClass("opux-is-non-interactive").data("opux-dialog-expander").setState(!0, !0)
                },
                _onContinueClick: function(t) {
                    t.preventDefault(),
                    this._next(),
                    this._setStates()
                },
                _next: function() {
                    this.$current && this.$current.length ? this.$current = this.$current.removeClass("current").addClass("editable").trigger("next").next(".opux-dialog-expander").addClass("current editable") : (this.$current = this.$exp.filter(".current"),
                    this.$current.length || (this.$current = this.$exp.first().addClass("current")))
                }
            }, {
                id: "opux-dialog-container",
                selector: ".opux-dialog-container",
                apiId: "dialogContainer"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t, n) {
            var s = i(0)
              , o = "opux-table-container-inner";
            e.a = s.a.extend({
                initialize: function(e) {
                    this.$inner = this.$el.find("." + o),
                    this.$inner.length || (this.$inner = this.$el.wrapInner('<div class="' + o + '"></div>').find("." + o)),
                    this.$inner.on("scroll", t.throttle(this._onScroll, 200)).trigger("scroll")
                },
                _onScroll: function(t) {
                    n(this).toggleClass("left", this.scrollLeft < 5).toggleClass("right", this.scrollLeft > this.scrollWidth - this.clientWidth - 5)
                }
            }, {
                id: "opux-table-container",
                selector: ".opux-table-container"
            })
        }
        ).call(this, i(2), i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0)
              , s = i(55)
              , o = i.n(s);
            e.a = n.a.extend({
                initialize: function(e) {
                    var i = t.extend({}, e.config);
                    this.awesomplete = new o.a(this.$el[0],i),
                    this.$el.hasClass("opux-autocomplete-combobox") && this._createComboboxToggler()
                },
                _createComboboxToggler: function() {
                    var e = this;
                    this.awesomplete.minChars = 0,
                    this.$comboboxBtn = t('<button class="opux-combobox-btn"><i class="opux-icon opux-icon-chevron-d"></i></button>'),
                    t(this.$el).on("awesomplete-open", (function() {
                        e.$comboboxBtn.children("i").addClass("opux-icon-chevron-u")
                    }
                    )),
                    t(this.$el).on("awesomplete-close", (function() {
                        e.$comboboxBtn.children("i").removeClass("opux-icon-chevron-u")
                    }
                    ));
                    this.$el.after(this.$comboboxBtn),
                    this.$comboboxBtn.on("click", (function(t) {
                        0 === e.awesomplete.ul.childNodes.length ? (e.awesomplete.minChars = 0,
                        e.awesomplete.evaluate()) : e.awesomplete.ul.hasAttribute("hidden") ? e.awesomplete.open() : e.awesomplete.close()
                    }
                    ))
                }
            }, {
                id: "opux-autocomplete",
                selector: ".opux-autocomplete",
                apiId: "autocomplete"
            })
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0)
              , s = i(56)
              , o = i.n(s)
              , a = i(57)
              , r = i.n(a);
            e.a = n.a.extend({
                initialize: function(t) {
                    var e = this.checkSVGAnimation();
                    if (this.$el.length > 0) {
                        var i = this.$el.data("iconName")
                          , n = parseInt(this.$el.data("iconSize"), 10);
                        if (!0 === e)
                            switch (i) {
                            case "check":
                                this.check(this.$el, n)
                            }
                        else
                            this.$el.height(n).width(n).append('<i class="opux-icon opux-icon-circled opux-animated-icon opux-icon-' + i + '" style="font-size:' + n + 'px;"></i>')
                    }
                },
                checkSVGAnimation: function() {
                    t("body").append(r()());
                    var e = t(".svg-animation-support-check .check").css("stroke-dashoffset");
                    t(".svg-animation-support-check .check").addClass("animate");
                    var i = t(".svg-animation-support-check .check").css("stroke-dashoffset");
                    return t(".svg-animation-support-check .check.animate").remove(),
                    e !== i
                },
                check: function(t, e) {
                    var i = e || "150"
                      , n = i / 50 * 1.5;
                    t.height(i).width(i).append(o()({
                        size: i,
                        strokeWidth: n,
                        halfSize: function() {
                            return i / 2
                        },
                        radius: function() {
                            return i / 2 - n / 2
                        },
                        check: function() {
                            return "M" + i / 150 * 50.2 + "," + i / 150 * 73 + " l" + i / 150 * 21.5 + "," + i / 150 * 23.8 + " l" + i / 150 * 34 + "," + i / 150 * -43.3
                        },
                        checkDashArray: function() {
                            return i / 150 * 100
                        },
                        circleDashArray: function() {
                            return i / 150 * 500
                        }
                    }))
                }
            }, {
                id: "opux-animated-icon",
                selector: ".opux-animated-icon-container",
                apiId: "icons"
            })
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0)
              , s = [{
                start: 5e3,
                end: 1e4
            }, {
                start: 1e4,
                end: 15e3
            }, {
                start: 15e3,
                end: 2e4
            }, {
                start: 2e4,
                end: 25e3
            }, {
                start: 25e3,
                end: 3e4
            }];
            e.a = n.a.extend({
                initialize: function(e) {
                    var i = this.$el[0].dataset;
                    this.options = t.extend({}, i, e),
                    this.initStates(),
                    void 0 !== this.options.hiddenOnStart && this.options.hiddenOnStart || this.start()
                },
                start: function() {
                    var t = this;
                    void 0 === this.startTime && (this.startTime = Date.now(),
                    this.stateInterval = setInterval((function() {
                        t.update()
                    }
                    ), 5e3))
                },
                initStates: function() {
                    var t = JSON.parse(JSON.stringify(s));
                    this.states = [];
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        this.getStateText(e).length && (this.states.push(i),
                        this.renderState(i))
                    }
                    if (!this.states.length)
                        throw Error("No states defined for informative loading.");
                    this.currentState = null,
                    this.currentStateIndex = 0
                },
                renderState: function(e) {
                    e.containerEl = t('<div class="opux-loading-informative-state"></div>');
                    var i = this.states.indexOf(e);
                    e.containerEl.append('<p class="opux-loading-informative-text">' + this.getStateText(i) + "</p>"),
                    this.$el.append(e.containerEl)
                },
                update: function() {
                    var t = this.states[this.currentStateIndex];
                    if (this.currentStateIndex >= this.states.length || void 0 === t)
                        clearInterval(this.stateInterval);
                    else {
                        var e = Date.now() - this.startTime;
                        this.hasTimeSpanned(t.start, e) && this.changeState(t),
                        this.hasTimeSpanned(t.end, e) && this.currentStateIndex++
                    }
                },
                changeState: function(t) {
                    null !== this.currentState && this.currentState.containerEl.toggleClass("opux-loading-informative-state-active"),
                    t.containerEl.addClass("opux-loading-informative-state-active");
                    var e = this.$el.find(".opux-loading").height() || 0
                      , i = t.containerEl.outerHeight(!0) || 0;
                    this.$el.css("height", e + i + "px"),
                    this.currentState = t
                },
                getStateText: function(t) {
                    t++;
                    var e = this.options["stateText-" + t];
                    return void 0 !== e ? e : ""
                },
                hasTimeSpanned: function(t, e) {
                    return 1e3 * Math.round((t - e) / 1e3) <= 5e3
                }
            }, {
                id: "opux-loading-informative",
                selector: ".opux-loading-informative",
                appId: "informativeLoading"
            })
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i(0)
              , s = i(58)
              , o = i.n(s)
              , a = i(59)
              , r = i.n(a)
              , l = "opux-responsive-table";
            e.a = n.a.extend({
                initialize: function(e) {
                    var i, n, s = this;
                    t.when((i = this.$el,
                    n = new t.Deferred,
                    i.before(t(o()())),
                    n.resolve(),
                    n.promise)).then((function() {
                        s.setConfig(e);
                        var t = ["datatables.net", "datatables-responsive.net"];
                        s.$el.data().fixedHeader && t.push("datatables-fixedHeader"),
                        window.require(t, (function(t) {
                            s.initDatatable()
                        }
                        ))
                    }
                    ))
                },
                initDatatable: function() {
                    var e = this
                      , i = this;
                    this.$el.attr("width", "100%"),
                    this.$el.find("thead th").each((function() {
                        i.config.columns.push({
                            title: t(this).html(),
                            targets: t(this).index()
                        })
                    }
                    )),
                    this.config.ordering && this.initSorting(),
                    this.$el.find("tbody > tr > td > a").hasClass(l + "-action-button") && this.initActionButtons(),
                    this.config.showMore && this.initShowMore(),
                    this.config.paging && this.initPaging(),
                    this.columnControl(),
                    this.table = this.$el.DataTable(this.config),
                    this.$el.on("responsive-resize.dt", (function(t, i, n) {
                        e.onResize(n)
                    }
                    ))
                },
                setConfig: function(e) {
                    var i = this;
                    this.config = {
                        responsive: {
                            details: {
                                type: "column",
                                target: -1,
                                renderer: function(t, e, n) {
                                    return i.initExpander(t, e, n)
                                }
                            },
                            autoWidth: !0
                        },
                        columns: [],
                        searching: !1,
                        paging: !1,
                        ordering: !1,
                        lengthChange: !1,
                        processing: !1,
                        language: {
                            search: "",
                            searchPlaceholder: "Hae",
                            zeroRecords: "Ei tuloksia",
                            paginate: {
                                next: "&#xe04b;",
                                previous: "&#xe04c;"
                            }
                        },
                        dom: "frtp",
                        info: !1,
                        initComplete: function(t) {
                            i.showTable(t)
                        },
                        columnConcat: !1
                    };
                    var n = t.extend(!0, {}, {
                        moreId: "",
                        allId: "",
                        maxRows: 10,
                        addRows: 5
                    }, this.$el.data());
                    this.config.showMoreOpts = n,
                    this.config = t.extend(this.config, this.$el.data(), e)
                },
                initExpander: function(e, i, n) {
                    var s = this
                      , o = []
                      , a = (t.map(n, (function(t) {
                        t.hidden && o.push(t)
                    }
                    )),
                    t.map(n, (function(e, i) {
                        if (e.hidden) {
                            var o = s.config.ordering ? t(n[i].title).html() : e.title;
                            return '<dt class="dtr-title inner-header" data-dtr-index="' + e.columnIndex + '" data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '">' + o + '</dt><dd class="dtr-data">' + e.data + "</dd>"
                        }
                    }
                    )).join(""));
                    return !!a && t('<dl class="opux-labeled-list opux-labeled-list-smaller opux-labeled-list-noborder" />').append(a)
                },
                showTable: function(e) {
                    var i = new t.fn.dataTable.Api(e);
                    t(".opux-responsive-table, .opux-responsive-table-show-more-wrapper, .dataTables_filter").show(),
                    t(".opux-responsive-table-loading").remove(),
                    i.columns.adjust().draw(),
                    this.$el.find("[data-opux-href]").length && this.addRowAsLink(),
                    this.config.searching && (t(".dataTables_filter input").addClass("opux-input"),
                    t(".dataTables_filter input.opux-input").attr({
                        tabindex: "1",
                        type: "text",
                        id: "input-a"
                    }).css("margin-bottom", "30px")),
                    this.config.paging && this.calcButton(),
                    i.rows().draw()
                },
                onResize: function(t) {
                    this.table.columns.adjust().draw(),
                    this.$el.find("[data-opux-href]").length && this.addRowAsLink(),
                    this.config.paging && this.calcButton();
                    var e = this.$el.find("tbody> tr.parent");
                    e.next().hasClass("child") || e.removeClass("parent")
                },
                columnControl: function() {
                    var t = this.$el.find("thead tr")
                      , e = this.$el.find("tbody tr")
                      , i = this.$el.find("tfoot tr");
                    if (t.length && e.length && t.find("th").length !== e.first().find("td").length)
                        throw Error("Column amount of <thead> and <tbody> should match");
                    this.config.columns.push({
                        targets: -1,
                        className: "control",
                        responsivePriority: 0,
                        orderable: !1,
                        width: "45px"
                    }),
                    t.append("<th></th>"),
                    e.append('<td><a class="opux-btn opux-btn-mini opux-btn-icon"></a></td>'),
                    i.length && i.append("<td></td>")
                },
                initActionButtons: function() {
                    var e = l + "-action-button"
                      , i = []
                      , n = [];
                    t("." + e).each((function() {
                        i.push(t(this).attr("data-icon")),
                        n.push(t(this).attr("data-icon-text"))
                    }
                    ));
                    var s = {
                        targets: -1,
                        className: e,
                        orderable: !1,
                        render: function(s, o, a, l) {
                            var h = {
                                visible: "none" !== t("." + e).css("display"),
                                btnContent: n[l.row],
                                aContent: i[l.row]
                            };
                            return r()(h)
                        }
                    };
                    this.config.columns[this.config.columns.length - 1] = s
                },
                initSorting: function() {
                    t.fn.dataTableExt.oStdClasses.sSortDesc = "opux-table-sortable-sorted-desc",
                    t.fn.dataTableExt.oStdClasses.sSortAsc = "opux-table-sortable-sorted-asc"
                },
                initShowMore: function() {
                    var e = this.config.showMoreOpts.moreId;
                    if (void 0 === e || !e.length)
                        throw Error("Show more button not defined");
                    t("#" + this.config.showMoreOpts.moreId).on("click", (function() {
                        t(this).addClass("opux-is-non-interactive")
                    }
                    )),
                    this.rowsAdded = !1
                },
                initPaging: function() {
                    t.fn.dataTableExt.oPagination.numbers_length = 11,
                    t.fn.dataTableExt.oStdClasses = t.extend(t.fn.dataTableExt.oStdClasses, {
                        sPaging: "opux-paginate ",
                        sPageButtonPrevious: "opux-paginate-previous",
                        sPageButton: "opux-paginate-btn opux-btn opux-btn-mini",
                        sPageButtonActive: "opux-paginate-current",
                        sPageButtonDisabled: "opux-is-disabled"
                    })
                },
                addRows: function(e) {
                    this.table.rows.add(e).draw(!1),
                    t("#" + this.config.showMoreOpts.moreId).removeClass("opux-is-non-interactive");
                    var i = this.config.showMoreOpts.allId;
                    void 0 !== i && i.length && t("#" + i).hasClass("opux-is-hidden") && (t("#" + i).removeClass("opux-is-hidden"),
                    t("#" + i).on("click", (function() {
                        t(this).addClass("opux-is-non-interactive")
                    }
                    )))
                },
                addAllRows: function(e) {
                    this.addRows(e),
                    t("#" + this.config.showMoreOpts.moreId).hide(),
                    t("#" + this.config.showMoreOpts.allId).hide()
                },
                addRowAsLink: function() {
                    for (var e = void 0 !== this.table ? this.table : new t.fn.dataTable.Api(this.$el), i = function(t) {
                        return e.column(t).nodes().to$().hasClass("control") || e.column(t).nodes().to$().hasClass(l + "-action-button")
                    }, n = e.columns()[0].length - 1; n >= 0; n--)
                        if (e.column(n).responsiveHidden() && !i(n)) {
                            e.columns().nodes().flatten().to$().removeClass("opux-row-link-last-child"),
                            e.column(n).nodes().to$().addClass("opux-row-link-last-child");
                            break
                        }
                },
                calcButton: function() {
                    var e = void 0 !== this.table ? this.table : new t.fn.dataTable.Api(this.$el)
                      , i = this.$el.next().children("span")
                      , n = this.$el.width() - (t(".opux-paginate-btn.previous").width() || 0) - (t(".opux-paginate-btn.next").width() || 0) - 10
                      , s = Math.floor(n / 40);
                    s < 5 ? i.hide() : (s % 2 == 0 && s--,
                    i.show(),
                    t.fn.dataTableExt.oPagination.numbers_length = s,
                    e.draw())
                }
            }, {
                id: l,
                selector: ".opux-responsive-table",
                apiId: "responsiveTable"
            })
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        i.r(e),
        function(t, n) {
            function s() {
                return window.getComputedStyle(document.body, ":after").getPropertyValue("content").replace(/[^a-z]/gi, "").toLowerCase()
            }
            i.d(e, "breakpoint", (function() {
                return s
            }
            )),
            i.d(e, "breakpointCompare", (function() {
                return l
            }
            ));
            var o = ""
              , a = ["xs", "s", "m", "l", "xl", "xxl"];
            function r() {
                var e = s();
                e !== o && (t(window).trigger("breakpoint", {
                    current: e,
                    previous: o
                }),
                o = e)
            }
            function l(t) {
                if (!t || !t.length)
                    return null;
                var e = s()
                  , i = t.match(new RegExp("(^<=?|>=?)(?:\\s+)?(.*)"));
                if (i) {
                    var n = a.indexOf(i[2]);
                    if (n > -1)
                        switch (i[1]) {
                        case "<":
                            return a.indexOf(e) < n;
                        case "<=":
                            return a.indexOf(e) <= n;
                        case ">":
                            return a.indexOf(e) > n;
                        case ">=":
                            return a.indexOf(e) >= n
                        }
                }
                return null
            }
            t((function() {
                o = s(),
                t(window).on("resize.opux", n.throttle(r, 200))
            }
            ))
        }
        .call(this, i(1), i(2))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            i.d(e, "a", (function() {
                return s
            }
            ));
            var n = i(3);
            function s(e) {
                if ("function" == typeof e) {
                    e.locale(n.a.language);
                    var i = {
                        months: e.months(),
                        weekdays: e.weekdays(),
                        weekdaysShort: e.weekdaysShort()
                    };
                    return t.extend({}, i, {
                        fi: {
                            previousMonth: "Edellinen kuukausi",
                            nextMonth: "Seuraava kuukausi"
                        },
                        sv: {
                            previousMonth: "Förra månad",
                            nextMonth: "Nästa månad"
                        },
                        en: {
                            previousMonth: "Previous month",
                            nextMonth: "Next month"
                        }
                    }[n.a.language])
                }
                return {}
            }
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<div id="'),
                    n.b(n.v(n.f("uid", t, e, 0))),
                    n.b('" class="opux-modal" aria-hidden="true" aria-labelledby="'),
                    n.b(n.v(n.f("aria", t, e, 0))),
                    n.b('-header" '),
                    n.s(n.f("description", t, e, 1), t, e, 0, 106, 145, "{{ }}") && (n.rs(t, e, (function(t, e, i) {
                        i.b('aria-describedby="'),
                        i.b(i.v(i.f("aria", t, e, 0))),
                        i.b('-description"')
                    }
                    )),
                    t.pop()),
                    n.b(" "),
                    n.s(n.f("isAlert", t, e, 1), t, e, 0, 174, 186, "{{ }}") && (n.rs(t, e, (function(t, e, i) {
                        i.b('role="alert"')
                    }
                    )),
                    t.pop()),
                    n.b(" "),
                    n.s(n.f("isAlert", t, e, 1), t, e, 1, 0, 0, "") || n.b('role="dialog"'),
                    n.b(' tabindex="-1">\r'),
                    n.b("\n" + i),
                    n.s(n.f("description", t, e, 1), t, e, 0, 273, 373, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('        <div class="opux-screen-reader-only" id="'),
                        n.b(n.v(n.f("aria", t, e, 0))),
                        n.b('-description">'),
                        n.b(n.v(n.f("description", t, e, 0))),
                        n.b("</div>\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.b('    <div class="opux-modal-inner">\r'),
                    n.b("\n" + i),
                    n.b('        <div class="opux-modal-content">\r'),
                    n.b("\n" + i),
                    n.s(n.f("content", t, e, 1), t, e, 0, 489, 526, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b("            "),
                        n.b(n.t(n.f("content", t, e, 0))),
                        n.b("\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.s(n.f("content", t, e, 1), t, e, 1, 0, 0, "") || (n.s(n.f("header", t, e, 1), t, e, 0, 585, 687, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('                <div class="opux-modal-header" id="'),
                        n.b(n.v(n.f("aria", t, e, 0))),
                        n.b('-header">'),
                        n.b(n.t(n.f("header", t, e, 0))),
                        n.b("</div>\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.s(n.f("body", t, e, 1), t, e, 0, 721, 1024, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('                <div class="opux-modal-body">\r'),
                        n.b("\n" + i),
                        n.s(n.f("bodyTitle", t, e, 1), t, e, 0, 804, 940, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                            n.b('                    <h2 class="opux-modal-title" '),
                            n.s(n.f("header", t, e, 1), t, e, 1, 0, 0, "") || (n.b('id="'),
                            n.b(n.v(n.f("aria", t, e, 0))),
                            n.b('-header"')),
                            n.b(">"),
                            n.b(n.t(n.f("bodyTitle", t, e, 0))),
                            n.b("</h2>\r"),
                            n.b("\n" + i)
                        }
                        )),
                        t.pop()),
                        n.b("                    "),
                        n.b(n.t(n.f("body", t, e, 0))),
                        n.b("\r"),
                        n.b("\n" + i),
                        n.b("                </div>\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.s(n.f("footer", t, e, 1), t, e, 0, 1058, 1139, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('                <div class="opux-modal-footer">'),
                        n.b(n.t(n.f("footer", t, e, 0))),
                        n.b("</div>\r"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop())),
                    n.b("        </div>\r"),
                    n.b("\n" + i),
                    n.b("    </div>\r"),
                    n.b("\n" + i),
                    n.b("</div>\r"),
                    n.b("\n"),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'<div id="{{uid}}" class="opux-modal" aria-hidden="true" aria-labelledby="{{aria}}-header" {{#description}}aria-describedby="{{aria}}-description"{{/description}} {{#isAlert}}role="alert"{{/isAlert}} {{^isAlert}}role="dialog"{{/isAlert}} tabindex="-1">\r\n    {{#description}}\r\n        <div class="opux-screen-reader-only" id="{{aria}}-description">{{description}}</div>\r\n    {{/description}}\r\n    <div class="opux-modal-inner">\r\n        <div class="opux-modal-content">\r\n        {{#content}}\r\n            {{{content}}}\r\n        {{/content}}\r\n        {{^content}}\r\n            {{#header}}\r\n                <div class="opux-modal-header" id="{{aria}}-header">{{{header}}}</div>\r\n            {{/header}}\r\n            {{#body}}\r\n                <div class="opux-modal-body">\r\n                    {{#bodyTitle}}\r\n                    <h2 class="opux-modal-title" {{^header}}id="{{aria}}-header"{{/header}}>{{{bodyTitle}}}</h2>\r\n                    {{/bodyTitle}}\r\n                    {{{body}}}\r\n                </div>\r\n            {{/body}}\r\n            {{#footer}}\r\n                <div class="opux-modal-footer">{{{footer}}}</div>\r\n            {{/footer}}\r\n        {{/content}}\r\n        </div>\r\n    </div>\r\n</div>\r\n',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("cancel", t, e, 1), t, e, 0, 11, 122, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('<button class="opux-btn opux-btn-mini opux-btn-left opux-modal-close opux-modal-cancel">'),
                        n.b(n.t(n.f("cancel", t, e, 0))),
                        n.b("</button>"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.s(n.f("confirm", t, e, 1), t, e, 0, 146, 260, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('<button class="opux-btn opux-btn-mini opux-btn-right opux-modal-close opux-modal-confirm">'),
                        n.b(n.t(n.f("confirm", t, e, 0))),
                        n.b("</button>"),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'{{#cancel}}\n<button class="opux-btn opux-btn-mini opux-btn-left opux-modal-close opux-modal-cancel">{{{cancel}}}</button>\n{{/cancel}}\n{{#confirm}}\n<button class="opux-btn opux-btn-mini opux-btn-right opux-modal-close opux-modal-confirm">{{{confirm}}}</button>\n{{/confirm}}',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<div role="alert" aria-atomic="true" class="opux-verify-alert">\r'),
                    n.b("\n" + i),
                    n.b('    <div class="opux-verify-alert-header">'),
                    n.b(n.t(n.f("header", t, e, 0))),
                    n.b("</div>\r"),
                    n.b("\n" + i),
                    n.b('    <div class="opux-verify-alert-content">'),
                    n.b(n.t(n.f("content", t, e, 0))),
                    n.b("</div>\r"),
                    n.b("\n" + i),
                    n.b('    <div class="opux-verify-alert-footer">'),
                    n.b(n.t(n.f("footer", t, e, 0))),
                    n.b("</div>\r"),
                    n.b("\n" + i),
                    n.b("</div>"),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'<div role="alert" aria-atomic="true" class="opux-verify-alert">\r\n    <div class="opux-verify-alert-header">{{{header}}}</div>\r\n    <div class="opux-verify-alert-content">{{{content}}}</div>\r\n    <div class="opux-verify-alert-footer">{{{footer}}}</div>\r\n</div>',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<div role="alert" aria-atomic="true" class="opux-inline-error opux-verify-error opux-inline-error-icon">'),
                    n.b(n.t(n.f("message", t, e, 0))),
                    n.b("</div>"),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'<div role="alert" aria-atomic="true" class="opux-inline-error opux-verify-error opux-inline-error-icon">{{{message}}}</div>',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        !function() {
            var e = function(t, i) {
                var n = this;
                this.input = s(t),
                this.input.setAttribute("autocomplete", "off"),
                this.input.setAttribute("aria-autocomplete", "list"),
                i = i || {},
                function(t, e, i) {
                    for (var n in e) {
                        var s = e[n]
                          , o = t.input.getAttribute("data-" + n.toLowerCase());
                        t[n] = "number" == typeof s ? parseInt(o) : !1 === s ? null !== o : s instanceof Function ? null : o,
                        t[n] || 0 === t[n] || (t[n] = n in i ? i[n] : s)
                    }
                }(this, {
                    minChars: 2,
                    maxItems: 10,
                    autoFirst: !1,
                    data: e.DATA,
                    filter: e.FILTER_CONTAINS,
                    sort: e.SORT_BYLENGTH,
                    item: e.ITEM,
                    replace: e.REPLACE
                }, i),
                this.index = -1,
                this.container = s.create("div", {
                    className: "awesomplete",
                    around: t
                }),
                this.ul = s.create("ul", {
                    hidden: "hidden",
                    inside: this.container
                }),
                this.status = s.create("span", {
                    className: "visually-hidden",
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions",
                    inside: this.container
                }),
                s.bind(this.input, {
                    input: this.evaluate.bind(this),
                    blur: this.close.bind(this),
                    keydown: function(t) {
                        var e = t.keyCode;
                        n.opened && (13 === e && n.selected ? (t.preventDefault(),
                        n.select()) : 27 === e ? n.close() : 38 !== e && 40 !== e || (t.preventDefault(),
                        n[38 === e ? "previous" : "next"]()))
                    }
                }),
                s.bind(this.input.form, {
                    submit: this.close.bind(this)
                }),
                s.bind(this.ul, {
                    mousedown: function(t) {
                        var e = t.target;
                        if (e !== this) {
                            for (; e && !/li/i.test(e.nodeName); )
                                e = e.parentNode;
                            e && 0 === t.button && (t.preventDefault(),
                            n.select(e, t.target))
                        }
                    }
                }),
                this.input.hasAttribute("list") ? (this.list = "#" + this.input.getAttribute("list"),
                this.input.removeAttribute("list")) : this.list = this.input.getAttribute("data-list") || i.list || [],
                e.all.push(this)
            };
            function i(t) {
                var e = Array.isArray(t) ? {
                    label: t[0],
                    value: t[1]
                } : "object" == typeof t && "label"in t && "value"in t ? t : {
                    label: t,
                    value: t
                };
                this.label = e.label || e.value,
                this.value = e.value
            }
            e.prototype = {
                set list(t) {
                    if (Array.isArray(t))
                        this._list = t;
                    else if ("string" == typeof t && t.indexOf(",") > -1)
                        this._list = t.split(/\s*,\s*/);
                    else if ((t = s(t)) && t.children) {
                        var e = [];
                        n.apply(t.children).forEach((function(t) {
                            if (!t.disabled) {
                                var i = t.textContent.trim()
                                  , n = t.value || i
                                  , s = t.label || i;
                                "" !== n && e.push({
                                    label: s,
                                    value: n
                                })
                            }
                        }
                        )),
                        this._list = e
                    }
                    document.activeElement === this.input && this.evaluate()
                },
                get selected() {
                    return this.index > -1
                },
                get opened() {
                    return !this.ul.hasAttribute("hidden")
                },
                close: function() {
                    this.ul.setAttribute("hidden", ""),
                    this.index = -1,
                    s.fire(this.input, "awesomplete-close")
                },
                open: function() {
                    this.ul.removeAttribute("hidden"),
                    this.autoFirst && -1 === this.index && this.goto(0),
                    s.fire(this.input, "awesomplete-open")
                },
                next: function() {
                    var t = this.ul.children.length;
                    this.goto(this.index < t - 1 ? this.index + 1 : -1)
                },
                previous: function() {
                    var t = this.ul.children.length;
                    this.goto(this.selected ? this.index - 1 : t - 1)
                },
                goto: function(t) {
                    var e = this.ul.children;
                    this.selected && e[this.index].setAttribute("aria-selected", "false"),
                    this.index = t,
                    t > -1 && e.length > 0 && (e[t].setAttribute("aria-selected", "true"),
                    this.status.textContent = e[t].textContent,
                    s.fire(this.input, "awesomplete-highlight", {
                        text: this.suggestions[this.index]
                    }))
                },
                select: function(t, e) {
                    if (t ? this.index = s.siblingIndex(t) : t = this.ul.children[this.index],
                    t) {
                        var i = this.suggestions[this.index];
                        s.fire(this.input, "awesomplete-select", {
                            text: i,
                            origin: e || t
                        }) && (this.replace(i),
                        this.close(),
                        s.fire(this.input, "awesomplete-selectcomplete", {
                            text: i
                        }))
                    }
                },
                evaluate: function() {
                    var t = this
                      , e = this.input.value;
                    e.length >= this.minChars && this._list.length > 0 ? (this.index = -1,
                    this.ul.innerHTML = "",
                    this.suggestions = this._list.map((function(n) {
                        return new i(t.data(n, e))
                    }
                    )).filter((function(i) {
                        return t.filter(i, e)
                    }
                    )).sort(this.sort).slice(0, this.maxItems),
                    this.suggestions.forEach((function(i) {
                        t.ul.appendChild(t.item(i, e))
                    }
                    )),
                    0 === this.ul.children.length ? this.close() : this.open()) : this.close()
                }
            },
            e.all = [],
            e.FILTER_CONTAINS = function(t, e) {
                return RegExp(s.regExpEscape(e.trim()), "i").test(t)
            }
            ,
            e.FILTER_STARTSWITH = function(t, e) {
                return RegExp("^" + s.regExpEscape(e.trim()), "i").test(t)
            }
            ,
            e.SORT_BYLENGTH = function(t, e) {
                return t.length !== e.length ? t.length - e.length : t < e ? -1 : 1
            }
            ,
            e.ITEM = function(t, e) {
                var i = "" === e ? t : t.replace(RegExp(s.regExpEscape(e.trim()), "gi"), "<mark>$&</mark>");
                return s.create("li", {
                    innerHTML: i,
                    "aria-selected": "false"
                })
            }
            ,
            e.REPLACE = function(t) {
                this.input.value = t.value
            }
            ,
            e.DATA = function(t) {
                return t
            }
            ,
            Object.defineProperty(i.prototype = Object.create(String.prototype), "length", {
                get: function() {
                    return this.label.length
                }
            }),
            i.prototype.toString = i.prototype.valueOf = function() {
                return "" + this.label
            }
            ;
            var n = Array.prototype.slice;
            function s(t, e) {
                return "string" == typeof t ? (e || document).querySelector(t) : t || null
            }
            function o(t, e) {
                return n.call((e || document).querySelectorAll(t))
            }
            function a() {
                o("input.awesomplete").forEach((function(t) {
                    new e(t)
                }
                ))
            }
            s.create = function(t, e) {
                var i = document.createElement(t);
                for (var n in e) {
                    var o = e[n];
                    if ("inside" === n)
                        s(o).appendChild(i);
                    else if ("around" === n) {
                        var a = s(o);
                        a.parentNode.insertBefore(i, a),
                        i.appendChild(a)
                    } else
                        n in i ? i[n] = o : i.setAttribute(n, o)
                }
                return i
            }
            ,
            s.bind = function(t, e) {
                if (t)
                    for (var i in e) {
                        var n = e[i];
                        i.split(/\s+/).forEach((function(e) {
                            t.addEventListener(e, n)
                        }
                        ))
                    }
            }
            ,
            s.fire = function(t, e, i) {
                var n = document.createEvent("HTMLEvents");
                for (var s in n.initEvent(e, !0, !0),
                i)
                    n[s] = i[s];
                return t.dispatchEvent(n)
            }
            ,
            s.regExpEscape = function(t) {
                return t.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            ,
            s.siblingIndex = function(t) {
                for (var e = 0; t = t.previousElementSibling; e++)
                    ;
                return e
            }
            ,
            "undefined" != typeof Document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a)),
            e.$ = s,
            e.$$ = o,
            "undefined" != typeof self && (self.Awesomplete = e),
            t.exports && (t.exports = e)
        }()
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<i class="opux-animated-icon opux-animated-icon-check" style="width:'),
                    n.b(n.t(n.f("size", t, e, 0))),
                    n.b("px; height:"),
                    n.b(n.t(n.f("size", t, e, 0))),
                    n.b('px">'),
                    n.b("\n" + i),
                    n.b('    <svg width="'),
                    n.b(n.t(n.f("size", t, e, 0))),
                    n.b('" height="'),
                    n.b(n.t(n.f("size", t, e, 0))),
                    n.b('" class="opux-animated-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">'),
                    n.b("\n" + i),
                    n.b('       <circle id="circle" class="circle" cx="'),
                    n.b(n.t(n.f("halfSize", t, e, 0))),
                    n.b('" cy="'),
                    n.b(n.t(n.f("halfSize", t, e, 0))),
                    n.b('" r="'),
                    n.b(n.t(n.f("radius", t, e, 0))),
                    n.b('" style="stroke-dasharray:'),
                    n.b(n.t(n.f("circleDashArray", t, e, 0))),
                    n.b(","),
                    n.b(n.t(n.f("circleDashArray", t, e, 0))),
                    n.b("; stroke-dashoffset:-"),
                    n.b(n.t(n.f("circleDashArray", t, e, 0))),
                    n.b("; stroke-width:"),
                    n.b(n.t(n.f("strokeWidth", t, e, 0))),
                    n.b('" />'),
                    n.b("\n" + i),
                    n.b("    </svg>"),
                    n.b("\n" + i),
                    n.b('    <svg width="'),
                    n.b(n.t(n.f("size", t, e, 0))),
                    n.b('" height="'),
                    n.b(n.t(n.f("size", t, e, 0))),
                    n.b('" class="opux-animated-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">'),
                    n.b("\n" + i),
                    n.b('      <path id="check" class="check" d="'),
                    n.b(n.t(n.f("check", t, e, 0))),
                    n.b('" style="stroke-dasharray:'),
                    n.b(n.t(n.f("checkDashArray", t, e, 0))),
                    n.b(","),
                    n.b(n.t(n.f("checkDashArray", t, e, 0))),
                    n.b("; stroke-dashoffset:"),
                    n.b(n.t(n.f("checkDashArray", t, e, 0))),
                    n.b("; stroke-width:"),
                    n.b(n.t(n.f("strokeWidth", t, e, 0))),
                    n.b('" />'),
                    n.b("\n" + i),
                    n.b("    </svg>"),
                    n.b("\n" + i),
                    n.b("</i>"),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'<i class="opux-animated-icon opux-animated-icon-check" style="width:{{{size}}}px; height:{{{size}}}px">\n    <svg width="{{{size}}}" height="{{{size}}}" class="opux-animated-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">\n       <circle id="circle" class="circle" cx="{{{halfSize}}}" cy="{{{halfSize}}}" r="{{{radius}}}" style="stroke-dasharray:{{{circleDashArray}}},{{{circleDashArray}}}; stroke-dashoffset:-{{{circleDashArray}}}; stroke-width:{{{strokeWidth}}}" />\n    </svg>\n    <svg width="{{{size}}}" height="{{{size}}}" class="opux-animated-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">\n      <path id="check" class="check" d="{{{check}}}" style="stroke-dasharray:{{{checkDashArray}}},{{{checkDashArray}}}; stroke-dashoffset:{{{checkDashArray}}}; stroke-width:{{{strokeWidth}}}" />\n    </svg>\n</i>',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<i class="opux-animated-icon opux-animated-icon-check svg-animation-support-check">'),
                    n.b("\n" + i),
                    n.b('    <svg width="150" height="150" class="opux-animated-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">'),
                    n.b("\n" + i),
                    n.b('      <path id="check" class="check" d="M50.2,73 l21.5,23.8 l34,-43.3" />'),
                    n.b("\n" + i),
                    n.b("    </svg>"),
                    n.b("\n" + i),
                    n.b("</i>"),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'<i class="opux-animated-icon opux-animated-icon-check svg-animation-support-check">\n    <svg width="150" height="150" class="opux-animated-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">\n      <path id="check" class="check" d="M50.2,73 l21.5,23.8 l34,-43.3" />\n    </svg>\n</i>',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<div class="opux-responsive-table-loading">'),
                    n.b("\n" + i),
                    n.b('    <div class="opux-loading"></div>'),
                    n.b("\n" + i),
                    n.b("</div>"),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'<div class="opux-responsive-table-loading">\n    <div class="opux-loading"></div>\n</div>',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        var n = i(6);
        t.exports = function() {
            var t = new n.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("visible", t, e, 1), t, e, 0, 12, 95, "{{ }}") && (n.rs(t, e, (function(t, e, n) {
                        n.b('    <a class="opux-btn opux-btn-mini opux-btn-icon" data-icon="'),
                        n.b(n.v(n.f("aContent", t, e, 0))),
                        n.b('"></a>'),
                        n.b("\n" + i)
                    }
                    )),
                    t.pop()),
                    n.s(n.f("visible", t, e, 1), t, e, 1, 0, 0, "") || (n.b('    <button class="opux-btn opux-btn-medium">'),
                    n.b(n.v(n.f("btnContent", t, e, 0))),
                    n.b("</button>"),
                    n.b("\n" + i)),
                    n.fl()
                },
                partials: {},
                subs: {}
            },'{{#visible}}\n    <a class="opux-btn opux-btn-mini opux-btn-icon" data-icon="{{aContent}}"></a>\n{{/visible}}\n{{^visible}}\n    <button class="opux-btn opux-btn-medium">{{btnContent}}</button>\n{{/visible}}',n);
            return t.render.apply(t, arguments)
        }
    }
    , function(t, e, i) {
        "use strict";
        i.r(e),
        function(t, n) {
            i(61),
            i(62),
            i(63);
            var s = i(14)
              , o = i.n(s)
              , a = i(15)
              , r = i.n(a)
              , l = i(0)
              , h = i(8)
              , c = i(9)
              , u = i(16)
              , d = i(49)
              , p = i(4)
              , f = i(3)
              , g = i(11);
            i(68);
            function v(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            var m = function() {
                function e() {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.cls = {
                        Base: o.a,
                        Component: l.a,
                        Model: r.a
                    },
                    this.component = Object.keys(g).reduce((function(t, e) {
                        var i = g[e];
                        return i.apiId && (t[i.apiId] = i),
                        t
                    }
                    ), {}),
                    this.format = h,
                    this.onVisible = c.a,
                    this.pageComponents = [],
                    this.registry = u.a,
                    this.responsive = d,
                    this.tabindex = p,
                    this.variables = f.a,
                    this.version = "2.7.3";
                    var i = (t("html").attr("lang") || "fi").split("-")[0] || "fi";
                    this.lang(i);
                    var n = "opux-icons-loading";
                    t("html").addClass(n),
                    window.FontFaceOnload("opuxicons", {
                        glyphs: "",
                        success: function() {
                            t("." + n).removeClass(n)
                        }
                    })
                }
                var i, s, a;
                return i = e,
                (s = [{
                    key: "lang",
                    value: function(t) {
                        return void 0 !== t && (this.variables.language = t),
                        this.variables.language
                    }
                }, {
                    key: "initialize",
                    value: function(e) {
                        var i, s = this;
                        return e ? (e.jquery || (e = t(e)),
                        i = e.parent(),
                        n.isEmpty(i) && (i = t("<div/>").append(e))) : i = e = t("body"),
                        Object.keys(g).forEach((function(e) {
                            var o = g[e];
                            i.find(o.selector).each((function(e, i) {
                                var a = t(i)
                                  , r = n.result(o, "id");
                                if (!a.data(r)) {
                                    var l = new o({
                                        $el: a,
                                        el: i
                                    });
                                    l.render(),
                                    a.data(r, l),
                                    s.pageComponents.push(l)
                                }
                            }
                            ))
                        }
                        )),
                        e.trigger("initialized"),
                        window.opux || (window.opux = this),
                        e
                    }
                }, {
                    key: "destruct",
                    value: function() {
                        this.registry.forEach((function(t) {
                            t.$el.removeData(t.id),
                            t.destruct()
                        }
                        )),
                        this.registry.length = 0,
                        this.pageComponents.length = 0,
                        t("*").off(".opux")
                    }
                }]) && v(i.prototype, s),
                a && v(i, a),
                e
            }();
            e.default = new m
        }
        .call(this, i(1), i(2))
    }
    , function(t, e) {
        !function(t, e) {
            "use strict";
            var i = '<div aria-hidden="true" style="' + ["display:block", "position:absolute", "visibility:hidden", "top:0px", "left:0px", "font-size:300px", "width:auto", "height:auto", "line-height:normal", "margin:0", "padding:0", "font-variant:normal", "white-space:nowrap", "font-family:%s"].join(";") + '"></div>'
              , n = function() {
                this.appended = !1,
                this.dimensions = this.serif = this.sansSerif = this.parent = void 0
            };
            n.prototype.measure = function(t) {
                var e = this.sansSerif
                  , i = this.serif;
                this.dimensions = {
                    sansSerif: {
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    },
                    serif: {
                        width: i.offsetWidth,
                        height: i.offsetHeight
                    }
                },
                e.style.fontFamily = t + ",sans-serif",
                i.style.fontFamily = t + ",serif"
            }
            ,
            n.prototype.load = function(t, n) {
                var s = new Date
                  , o = this
                  , a = o.serif
                  , r = o.sansSerif
                  , l = o.parent
                  , h = o.appended
                  , c = o.dimensions
                  , u = n.tolerance || 2
                  , d = n.delay || 100;
                l || (l = o.parent = e.createElement("div")),
                l.innerHTML = i.replace(/\%s/, "sans-serif") + i.replace(/\%s/, "serif"),
                r = o.sansSerif = l.firstChild,
                a = o.serif = r.nextSibling,
                n.glyphs && (r.innerHTML += n.glyphs,
                a.innerHTML += n.glyphs),
                function i() {
                    !h && e.body && (h = o.appended = !0,
                    e.body.appendChild(l),
                    o.measure(t)),
                    c = o.dimensions;
                    var p = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
                      , f = p && /OS 1/.test(navigator.userAgent);
                    h && c && (Math.abs(c.sansSerif.width - r.offsetWidth) > u || Math.abs(c.serif.width - a.offsetWidth) > u || (!p || f) && (Math.abs(c.sansSerif.height - r.offsetHeight) > u || Math.abs(c.serif.height - a.offsetHeight) > u)) ? (n.success(),
                    e.body.removeChild(l)) : (new Date).getTime() - s.getTime() > n.timeout ? (n.error(),
                    e.body.removeChild(l)) : setTimeout((function() {
                        i()
                    }
                    ), d)
                }()
            }
            ,
            n.prototype.init = function(i, n) {
                var s, o = {
                    glyphs: "",
                    success: function() {},
                    error: function() {},
                    timeout: 1e4
                };
                for (var a in n || (n = {}),
                o)
                    n.hasOwnProperty(a) || (n[a] = o[a]);
                !n.glyphs && "fonts"in e ? (e.fonts.load("1em " + i).then((function() {
                    n.success(),
                    t.clearTimeout(s)
                }
                )),
                n.timeout && (s = t.setTimeout((function() {
                    n.error(),
                    e.body.removeChild(parent)
                }
                ), n.timeout))) : this.load(i, n)
            }
            ;
            t.FontFaceOnload = function(t, e) {
                var i = new n;
                return i.init(t, e),
                i
            }
        }(window, window.document)
    }
    , function(t, e, i) {
        (function(t) {
            t.event.special.tap = {
                setup: function(e, i) {
                    t(this).on("touchstart.tap", t.event.special.tap.handler).on("touchend.tap", t.event.special.tap.handler)
                },
                teardown: function(e) {
                    t(this).off("touchstart.tap", t.event.special.tap.handler).off("touchend.tap", t.event.special.tap.handler)
                },
                handler: function(e) {
                    var i = t(this);
                    i.data(e.type, {
                        x: e.originalEvent.changedTouches[0].pageX,
                        y: e.originalEvent.changedTouches[0].pageY
                    });
                    var n = 15
                      , s = i.data("touchstart")
                      , o = i.data("touchend");
                    "touchend" === e.type && s && Math.abs(s.x - o.x) < n && Math.abs(s.y - o.y) < n && (e.type = "tap",
                    t.event.dispatch.apply(this, arguments)),
                    o && (e.preventDefault(),
                    i.removeData("touchstart touchend"))
                }
            }
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        "use strict";
        (function(t) {
            var e = i(3);
            t.fn.preventdoubletapzoom = function(i) {
                return e.a.hasTouch && t(this).on("touchstart", (function(e) {
                    var n = t(this)
                      , s = e.timeStamp
                      , o = s - (n.data("ltd") || s)
                      , a = e.originalEvent.touches.length;
                    n.data("ltd", s),
                    !o || o > 500 || a > 1 || (e.preventDefault(),
                    n.trigger(i || "click tap").data("ltd", 0))
                }
                )),
                this
            }
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        (function(e) {
            /*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
            !function(n, s) {
                "use strict";
                var o;
                try {
                    o = i(18)
                } catch (t) {}
                t.exports = function(t) {
                    var i = "function" == typeof t
                      , n = !!window.addEventListener
                      , s = window.document
                      , o = window.setTimeout
                      , a = function(t, e, i, s) {
                        n ? t.addEventListener(e, i, !!s) : t.attachEvent("on" + e, i)
                    }
                      , r = function(t, e, i, s) {
                        n ? t.removeEventListener(e, i, !!s) : t.detachEvent("on" + e, i)
                    }
                      , l = function(t, e, i) {
                        var n;
                        s.createEvent ? ((n = s.createEvent("HTMLEvents")).initEvent(e, !0, !1),
                        n = v(n, i),
                        t.dispatchEvent(n)) : s.createEventObject && (n = s.createEventObject(),
                        n = v(n, i),
                        t.fireEvent("on" + e, n))
                    }
                      , h = function(t, e) {
                        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
                    }
                      , c = function(t) {
                        return /Array/.test(Object.prototype.toString.call(t))
                    }
                      , u = function(t) {
                        return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
                    }
                      , d = function(t) {
                        var e = t.getDay();
                        return 0 === e || 6 === e
                    }
                      , p = function(t) {
                        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                    }
                      , f = function(t) {
                        u(t) && t.setHours(0, 0, 0, 0)
                    }
                      , g = function(t, e) {
                        return t.getTime() === e.getTime()
                    }
                      , v = function(t, e, i) {
                        var n, s;
                        for (n in e)
                            (s = void 0 !== t[n]) && "object" == typeof e[n] && null !== e[n] && void 0 === e[n].nodeName ? u(e[n]) ? i && (t[n] = new Date(e[n].getTime())) : c(e[n]) ? i && (t[n] = e[n].slice(0)) : t[n] = v({}, e[n], i) : !i && s || (t[n] = e[n]);
                        return t
                    }
                      , m = function(t) {
                        return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12),
                        t.month += 12),
                        t.month > 11 && (t.year += Math.floor(Math.abs(t.month) / 12),
                        t.month -= 12),
                        t
                    }
                      , b = {
                        field: null,
                        bound: void 0,
                        position: "bottom left",
                        reposition: !0,
                        format: "YYYY-MM-DD",
                        outputFormat: "",
                        inputFormat: "",
                        formatStrict: !1,
                        defaultDate: null,
                        setDefaultDate: !1,
                        firstDay: 0,
                        minDate: null,
                        maxDate: null,
                        yearRange: 10,
                        showWeekNumber: !1,
                        minYear: 0,
                        maxYear: 9999,
                        minMonth: void 0,
                        maxMonth: void 0,
                        startRange: null,
                        endRange: null,
                        isRTL: !1,
                        yearSuffix: "",
                        showMonthAfterYear: !1,
                        numberOfMonths: 1,
                        mainCalendar: "left",
                        container: void 0,
                        i18n: {
                            previousMonth: "Previous Month",
                            nextMonth: "Next Month",
                            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                        },
                        theme: null,
                        onSelect: null,
                        onOpen: null,
                        onClose: null,
                        onDraw: null
                    }
                      , x = function(t, e, i) {
                        for (e += t.firstDay; e >= 7; )
                            e -= 7;
                        return i ? t.i18n.weekdaysShort[e] : t.i18n.weekdays[e]
                    }
                      , y = function(t) {
                        if (t.isEmpty)
                            return '<td class="is-empty"></td>';
                        var e = [];
                        return t.isDisabled && e.push("is-disabled"),
                        t.isToday && e.push("is-today"),
                        t.isSelected && e.push("is-selected"),
                        t.isInRange && e.push("is-inrange"),
                        t.isStartRange && e.push("is-startrange"),
                        t.isEndRange && e.push("is-endrange"),
                        '<td data-day="' + t.day + '" class="' + e.join(" ") + '"><button class="pika-button pika-day" type="button" data-pika-year="' + t.year + '" data-pika-month="' + t.month + '" data-pika-day="' + t.day + '">' + t.day + "</button></td>"
                    }
                      , w = function(t, e) {
                        return "<tr>" + (e ? t.reverse() : t).join("") + "</tr>"
                    }
                      , $ = function(t, e, i, n, s) {
                        var o, a, r, l, h, u = t._o, d = i === u.minYear, p = i === u.maxYear, f = '<div class="pika-title">', g = !0, v = !0;
                        for (r = [],
                        o = 0; o < 12; o++)
                            r.push('<option value="' + (i === s ? o - e : 12 + o - e) + '"' + (o === n ? " selected" : "") + (d && o < u.minMonth || p && o > u.maxMonth ? "disabled" : "") + ">" + u.i18n.months[o] + "</option>");
                        for (l = '<div class="pika-label">' + u.i18n.months[n] + '<select class="pika-select pika-select-month" tabindex="-1">' + r.join("") + "</select></div>",
                        c(u.yearRange) ? (o = u.yearRange[0],
                        a = u.yearRange[1] + 1) : (o = i - u.yearRange,
                        a = 1 + i + u.yearRange),
                        r = []; o < a && o <= u.maxYear; o++)
                            o >= u.minYear && r.push('<option value="' + o + '"' + (o === i ? " selected" : "") + ">" + o + "</option>");
                        return h = '<div class="pika-label">' + i + u.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + r.join("") + "</select></div>",
                        u.showMonthAfterYear ? f += h + l : f += l + h,
                        d && (0 === n || u.minMonth >= n) && (g = !1),
                        p && (11 === n || u.maxMonth <= n) && (v = !1),
                        0 === e && (f += '<button class="pika-prev' + (g ? "" : " is-disabled") + '" type="button">' + u.i18n.previousMonth + "</button>"),
                        e === t._o.numberOfMonths - 1 && (f += '<button class="pika-next' + (v ? "" : " is-disabled") + '" type="button">' + u.i18n.nextMonth + "</button>"),
                        f + "</div>"
                    }
                      , C = function(r) {
                        var l = this
                          , c = l.config(r);
                        "function" == typeof r.moment && (t = r.moment,
                        i = !0),
                        l._onMouseDown = function(t) {
                            if (l._v) {
                                var e = (t = t || window.event).target || t.srcElement;
                                if (e)
                                    if (h(e, "is-disabled") || (h(e, "pika-button") && !h(e, "is-empty") ? (l.setDate(new Date(e.getAttribute("data-pika-year"),e.getAttribute("data-pika-month"),e.getAttribute("data-pika-day"))),
                                    c.bound && o((function() {
                                        l.hide(),
                                        c.field && c.field.blur()
                                    }
                                    ), 100)) : h(e, "pika-prev") ? l.prevMonth() : h(e, "pika-next") && l.nextMonth()),
                                    h(e, "pika-select"))
                                        l._c = !0;
                                    else {
                                        if (!t.preventDefault)
                                            return t.returnValue = !1,
                                            !1;
                                        t.preventDefault()
                                    }
                            }
                        }
                        ,
                        l._onChange = function(t) {
                            var e = (t = t || window.event).target || t.srcElement;
                            e && (h(e, "pika-select-month") ? l.gotoMonth(e.value) : h(e, "pika-select-year") && l.gotoYear(e.value))
                        }
                        ,
                        l._onInputChange = function(n) {
                            var s, o = {
                                value: c.field.value
                            };
                            n.firedBy !== l && (i ? (s = t(c.field.value, c.inputFormat, c.formatStrict),
                            o.parsingFlags = s.parsingFlags(),
                            s = s && s.isValid() ? s.toDate() : null) : s = new Date(Date.parse(c.field.value)),
                            l.setDate(u(s) ? s : null),
                            o.valid = u(s),
                            e(c.field).trigger("parsedDate", o),
                            l._v || c.trigger || l.show())
                        }
                        ,
                        l._onInputFocus = function() {
                            l.show()
                        }
                        ,
                        l._onInputClick = function() {
                            l.show()
                        }
                        ,
                        l._onInputBlur = function() {
                            var t = s.activeElement;
                            do {
                                if (h(t, "pika-single"))
                                    return
                            } while (t = t.parentNode);
                            l._c || (l._b = o((function() {
                                l.hide()
                            }
                            ), 50)),
                            l._c = !1
                        }
                        ,
                        l._onClick = function(t) {
                            var e = (t = t || window.event).target || t.srcElement
                              , i = e;
                            if (e) {
                                !n && h(e, "pika-select") && (e.onchange || (e.setAttribute("onchange", "return;"),
                                a(e, "change", l._onChange)));
                                do {
                                    if (h(i, "pika-single") || i === c.trigger)
                                        return
                                } while (i = i.parentNode);
                                l._v && e !== c.trigger && i !== c.trigger && l.hide()
                            }
                        }
                        ,
                        l.el = s.createElement("div"),
                        l.el.className = "pika-single" + (c.isRTL ? " is-rtl" : "") + (c.theme ? " " + c.theme : ""),
                        a(l.el, "mousedown", l._onMouseDown, !0),
                        a(l.el, "touchend", l._onMouseDown, !0),
                        a(l.el, "change", l._onChange),
                        c.field && (c.container ? c.container.appendChild(l.el) : c.bound ? s.body.appendChild(l.el) : c.field.parentNode.insertBefore(l.el, c.field.nextSibling),
                        a(c.field, "change", l._onInputChange),
                        c.defaultDate || (i && c.field.value ? c.defaultDate = t(c.field.value, c.inputFormat).toDate() : c.defaultDate = new Date(Date.parse(c.field.value)),
                        c.setDefaultDate = !0));
                        var d = c.defaultDate;
                        u(d) ? c.setDefaultDate ? l.setDate(d, !0) : l.gotoDate(d) : l.gotoDate(new Date),
                        c.bound ? (this.hide(),
                        l.el.className += " is-bound",
                        a(c.trigger, "click", l._onInputClick),
                        a(c.trigger, "focus", l._onInputFocus),
                        a(c.trigger, "blur", l._onInputBlur)) : this.show()
                    };
                    return C.prototype = {
                        config: function(t) {
                            this._o || (this._o = v({}, b, !0));
                            var e = v(this._o, t, !0);
                            e.isRTL = !!e.isRTL,
                            e.field = e.field && e.field.nodeName ? e.field : null,
                            e.theme = "string" == typeof e.theme && e.theme ? e.theme : null,
                            e.bound = !!(void 0 !== e.bound ? e.field && e.bound : e.field),
                            e.trigger = e.trigger && e.trigger.nodeName ? e.trigger : e.field,
                            e.outputFormat = e.outputFormat || e.format,
                            e.inputFormat = e.inputFormat || e.format,
                            e.disableWeekends = !!e.disableWeekends,
                            e.disableDayFn = "function" == typeof e.disableDayFn ? e.disableDayFn : null;
                            var i = parseInt(e.numberOfMonths, 10) || 1;
                            if (e.numberOfMonths = i > 4 ? 4 : i,
                            u(e.minDate) || (e.minDate = !1),
                            u(e.maxDate) || (e.maxDate = !1),
                            e.minDate && e.maxDate && e.maxDate < e.minDate && (e.maxDate = e.minDate = !1),
                            e.minDate && this.setMinDate(e.minDate),
                            e.maxDate && this.setMaxDate(e.maxDate),
                            c(e.yearRange)) {
                                var n = (new Date).getFullYear() - 10;
                                e.yearRange[0] = parseInt(e.yearRange[0], 10) || n,
                                e.yearRange[1] = parseInt(e.yearRange[1], 10) || n
                            } else
                                e.yearRange = Math.abs(parseInt(e.yearRange, 10)) || b.yearRange,
                                e.yearRange > 100 && (e.yearRange = 100);
                            return e
                        },
                        toString: function(e) {
                            return u(this._d) ? i ? t(this._d).format(e || this._o.outputFormat) : this._d.toDateString() : ""
                        },
                        getMoment: function() {
                            return i ? t(this._d) : null
                        },
                        setMoment: function(e, n) {
                            i && t.isMoment(e) && this.setDate(e.toDate(), n)
                        },
                        getDate: function() {
                            return u(this._d) ? new Date(this._d.getTime()) : null
                        },
                        setDate: function(t, i) {
                            if (!t)
                                return this._d = null,
                                this._o.field && (this._o.field.value = "",
                                l(this._o.field, "change", {
                                    firedBy: this
                                })),
                                this.draw();
                            if ("string" == typeof t && (t = new Date(Date.parse(t))),
                            u(t)) {
                                var n = this._o.minDate
                                  , s = this._o.maxDate;
                                u(n) && t < n ? (t = n,
                                e(this._o.field).trigger("outOfBoundsDate", {
                                    min: !0,
                                    max: !1,
                                    value: this._o.field.value
                                })) : u(s) && t > s && (t = s,
                                e(this._o.field).trigger("outOfBoundsDate", {
                                    min: !1,
                                    max: !0,
                                    value: this._o.field.value
                                })),
                                this._d && this._d.getTime() === t.getTime() || (this._d = new Date(t.getTime()),
                                f(this._d),
                                this.gotoDate(this._d)),
                                this._o.field && (this._o.field.value = this.toString(),
                                l(this._o.field, "change", {
                                    firedBy: this
                                })),
                                i || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                            }
                        },
                        gotoDate: function(t) {
                            var e = !0;
                            if (u(t)) {
                                if (this.calendars) {
                                    var i = new Date(this.calendars[0].year,this.calendars[0].month,1)
                                      , n = new Date(this.calendars[this.calendars.length - 1].year,this.calendars[this.calendars.length - 1].month,1)
                                      , s = t.getTime();
                                    n.setMonth(n.getMonth() + 1),
                                    n.setDate(n.getDate() - 1),
                                    e = s < i.getTime() || n.getTime() < s
                                }
                                e && (this.calendars = [{
                                    month: t.getMonth(),
                                    year: t.getFullYear()
                                }],
                                "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)),
                                this.adjustCalendars()
                            }
                        },
                        adjustCalendars: function() {
                            this.calendars[0] = m(this.calendars[0]);
                            for (var t = 1; t < this._o.numberOfMonths; t++)
                                this.calendars[t] = m({
                                    month: this.calendars[0].month + t,
                                    year: this.calendars[0].year
                                });
                            this.draw()
                        },
                        gotoToday: function() {
                            this.gotoDate(new Date)
                        },
                        gotoMonth: function(t) {
                            isNaN(t) || (this.calendars[0].month = parseInt(t, 10),
                            this.adjustCalendars())
                        },
                        nextMonth: function() {
                            this.calendars[0].month++,
                            this.adjustCalendars()
                        },
                        prevMonth: function() {
                            this.calendars[0].month--,
                            this.adjustCalendars()
                        },
                        gotoYear: function(t) {
                            isNaN(t) || (this.calendars[0].year = parseInt(t, 10),
                            this.adjustCalendars())
                        },
                        setMinDate: function(t) {
                            f(t),
                            this._o.minDate = t,
                            this._o.minYear = t.getFullYear(),
                            this._o.minMonth = t.getMonth(),
                            this.draw()
                        },
                        setMaxDate: function(t) {
                            f(t),
                            this._o.maxDate = t,
                            this._o.maxYear = t.getFullYear(),
                            this._o.maxMonth = t.getMonth(),
                            this.draw()
                        },
                        setStartRange: function(t) {
                            this._o.startRange = t
                        },
                        setEndRange: function(t) {
                            this._o.endRange = t
                        },
                        draw: function(t) {
                            if (this._v || t) {
                                var e = this._o
                                  , i = e.minYear
                                  , n = e.maxYear
                                  , s = e.minMonth
                                  , a = e.maxMonth
                                  , r = "";
                                this._y <= i && (this._y = i,
                                !isNaN(s) && this._m < s && (this._m = s)),
                                this._y >= n && (this._y = n,
                                !isNaN(a) && this._m > a && (this._m = a));
                                for (var l = 0; l < e.numberOfMonths; l++)
                                    r += '<div class="pika-lendar">' + $(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year) + this.render(this.calendars[l].year, this.calendars[l].month) + "</div>";
                                if (this.el.innerHTML = r,
                                e.bound && "hidden" !== e.field.type && o((function() {
                                    e.trigger.focus()
                                }
                                ), 1),
                                "function" == typeof this._o.onDraw) {
                                    var h = this;
                                    o((function() {
                                        h._o.onDraw.call(h)
                                    }
                                    ), 0)
                                }
                            }
                        },
                        adjustPosition: function() {
                            var t, e, i, n, o, a, r, l, h, c;
                            if (!this._o.container) {
                                if (this.el.style.position = "absolute",
                                e = t = this._o.trigger,
                                i = this.el.offsetWidth,
                                n = this.el.offsetHeight,
                                o = window.innerWidth || s.documentElement.clientWidth,
                                a = window.innerHeight || s.documentElement.clientHeight,
                                r = window.pageYOffset || s.body.scrollTop || s.documentElement.scrollTop,
                                "function" == typeof t.getBoundingClientRect)
                                    l = (c = t.getBoundingClientRect()).left + window.pageXOffset,
                                    h = c.bottom + window.pageYOffset;
                                else
                                    for (l = e.offsetLeft,
                                    h = e.offsetTop + e.offsetHeight; e = e.offsetParent; )
                                        l += e.offsetLeft,
                                        h += e.offsetTop;
                                (this._o.reposition && l + i > o || this._o.position.indexOf("right") > -1 && l - i + t.offsetWidth > 0) && (l = l - i + t.offsetWidth),
                                (this._o.reposition && h + n > a + r || this._o.position.indexOf("top") > -1 && h - n - t.offsetHeight > 0) && (h = h - n - t.offsetHeight),
                                this.el.style.left = l + "px",
                                this.el.style.top = h + "px"
                            }
                        },
                        render: function(t, e) {
                            var i = this._o
                              , n = new Date
                              , s = function(t, e) {
                                return [31, p(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
                            }(t, e)
                              , o = new Date(t,e,1).getDay()
                              , a = []
                              , r = [];
                            f(n),
                            i.firstDay > 0 && (o -= i.firstDay) < 0 && (o += 7);
                            for (var l, h, c, v, m = s + o, b = m; b > 7; )
                                b -= 7;
                            m += 7 - b;
                            for (var $ = 0, C = 0; $ < m; $++) {
                                var k = new Date(t,e,$ - o + 1)
                                  , _ = !!u(this._d) && g(k, this._d)
                                  , T = g(k, n)
                                  , S = $ < o || $ >= s + o
                                  , D = i.startRange && g(i.startRange, k)
                                  , A = i.endRange && g(i.endRange, k)
                                  , I = i.startRange && i.endRange && i.startRange < k && k < i.endRange
                                  , M = {
                                    day: $ - o + 1,
                                    month: e,
                                    year: t,
                                    isSelected: _,
                                    isToday: T,
                                    isDisabled: i.minDate && k < i.minDate || i.maxDate && k > i.maxDate || i.disableWeekends && d(k) || i.disableDayFn && i.disableDayFn(k),
                                    isEmpty: S,
                                    isStartRange: D,
                                    isEndRange: A,
                                    isInRange: I
                                };
                                r.push(y(M)),
                                7 == ++C && (i.showWeekNumber && r.unshift((l = $ - o,
                                h = e,
                                c = t,
                                v = void 0,
                                void 0,
                                v = new Date(c,0,1),
                                '<td class="pika-week">' + Math.ceil(((new Date(c,h,l) - v) / 864e5 + v.getDay() + 1) / 7) + "</td>")),
                                a.push(w(r, i.isRTL)),
                                r = [],
                                C = 0)
                            }
                            return function(t, e) {
                                return '<table cellpadding="0" cellspacing="0" class="pika-table">' + function(t) {
                                    var e, i = [];
                                    t.showWeekNumber && i.push("<th></th>");
                                    for (e = 0; e < 7; e++)
                                        i.push('<th scope="col"><abbr title="' + x(t, e) + '">' + x(t, e, !0) + "</abbr></th>");
                                    return "<thead>" + (t.isRTL ? i.reverse() : i).join("") + "</thead>"
                                }(t) + (i = e,
                                "<tbody>" + i.join("") + "</tbody></table>");
                                var i
                            }(i, a)
                        },
                        isVisible: function() {
                            return this._v
                        },
                        show: function() {
                            if (!this._v) {
                                t = this.el,
                                e = "is-hidden",
                                t.className = (i = (" " + t.className + " ").replace(" " + e + " ", " ")).trim ? i.trim() : i.replace(/^\s+|\s+$/g, ""),
                                this._v = !0;
                                this.el.offsetWidth;
                                this.el.style.opacity = 1,
                                this.draw(),
                                this._o.bound && (a(s, "click", this._onClick),
                                this.adjustPosition()),
                                "function" == typeof this._o.onOpen && this._o.onOpen.call(this)
                            }
                            var t, e, i
                        },
                        hide: function() {
                            var t, e, i = this._v;
                            !1 !== i && (this._o.bound && r(s, "click", this._onClick),
                            this.el.style.position = "static",
                            this.el.style.left = "auto",
                            this.el.style.top = "auto",
                            this.el.style.opacity = 0,
                            t = this.el,
                            h(t, e = "is-hidden") || (t.className = "" === t.className ? e : t.className + " " + e),
                            this._v = !1,
                            void 0 !== i && "function" == typeof this._o.onClose && this._o.onClose.call(this))
                        },
                        destroy: function() {
                            this.hide(),
                            r(this.el, "mousedown", this._onMouseDown, !0),
                            r(this.el, "touchend", this._onMouseDown, !0),
                            r(this.el, "change", this._onChange),
                            this._o.field && (r(this._o.field, "change", this._onInputChange),
                            this._o.bound && (r(this._o.trigger, "click", this._onInputClick),
                            r(this._o.trigger, "focus", this._onInputFocus),
                            r(this._o.trigger, "blur", this._onInputBlur))),
                            this.el.parentNode && this.el.parentNode.removeChild(this.el)
                        }
                    },
                    C
                }(o)
            }()
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {
        !function(t) {
            var e = /\S/
              , i = /\"/g
              , n = /\n/g
              , s = /\r/g
              , o = /\\/g
              , a = /\u2028/
              , r = /\u2029/;
            function l(t) {
                "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
            }
            function h(t) {
                return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
            }
            function c(t, e, i) {
                if (e.charAt(i) != t.charAt(0))
                    return !1;
                for (var n = 1, s = t.length; n < s; n++)
                    if (e.charAt(i + n) != t.charAt(n))
                        return !1;
                return !0
            }
            t.tags = {
                "#": 1,
                "^": 2,
                "<": 3,
                $: 4,
                "/": 5,
                "!": 6,
                ">": 7,
                "=": 8,
                _v: 9,
                "{": 10,
                "&": 11,
                _t: 12
            },
            t.scan = function(i, n) {
                var s = i.length
                  , o = 0
                  , a = null
                  , r = null
                  , u = ""
                  , d = []
                  , p = !1
                  , f = 0
                  , g = 0
                  , v = "{{"
                  , m = "}}";
                function b() {
                    u.length > 0 && (d.push({
                        tag: "_t",
                        text: new String(u)
                    }),
                    u = "")
                }
                function x(i, n) {
                    if (b(),
                    i && function() {
                        for (var i = !0, n = g; n < d.length; n++)
                            if (!(i = t.tags[d[n].tag] < t.tags._v || "_t" == d[n].tag && null === d[n].text.match(e)))
                                return !1;
                        return i
                    }())
                        for (var s, o = g; o < d.length; o++)
                            d[o].text && ((s = d[o + 1]) && ">" == s.tag && (s.indent = d[o].text.toString()),
                            d.splice(o, 1));
                    else
                        n || d.push({
                            tag: "\n"
                        });
                    p = !1,
                    g = d.length
                }
                function y(t, e) {
                    var i = "=" + m
                      , n = t.indexOf(i, e)
                      , s = h(t.substring(t.indexOf("=", e) + 1, n)).split(" ");
                    return v = s[0],
                    m = s[s.length - 1],
                    n + i.length - 1
                }
                for (n && (n = n.split(" "),
                v = n[0],
                m = n[1]),
                f = 0; f < s; f++)
                    0 == o ? c(v, i, f) ? (--f,
                    b(),
                    o = 1) : "\n" == i.charAt(f) ? x(p) : u += i.charAt(f) : 1 == o ? (f += v.length - 1,
                    "=" == (a = (r = t.tags[i.charAt(f + 1)]) ? i.charAt(f + 1) : "_v") ? (f = y(i, f),
                    o = 0) : (r && f++,
                    o = 2),
                    p = f) : c(m, i, f) ? (d.push({
                        tag: a,
                        n: h(u),
                        otag: v,
                        ctag: m,
                        i: "/" == a ? p - v.length : f + m.length
                    }),
                    u = "",
                    f += m.length - 1,
                    o = 0,
                    "{" == a && ("}}" == m ? f++ : l(d[d.length - 1]))) : u += i.charAt(f);
                return x(p, !0),
                d
            }
            ;
            var u = {
                _t: !0,
                "\n": !0,
                $: !0,
                "/": !0
            };
            function d(t, e) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i].o == t.n)
                        return t.tag = "#",
                        !0
            }
            function p(t, e, i) {
                for (var n = 0, s = i.length; n < s; n++)
                    if (i[n].c == t && i[n].o == e)
                        return !0
            }
            function f(t) {
                var e = [];
                for (var i in t.partials)
                    e.push('"' + v(i) + '":{name:"' + v(t.partials[i].name) + '", ' + f(t.partials[i]) + "}");
                return "partials: {" + e.join(",") + "}, subs: " + function(t) {
                    var e = [];
                    for (var i in t)
                        e.push('"' + v(i) + '": function(c,p,t,i) {' + t[i] + "}");
                    return "{ " + e.join(",") + " }"
                }(t.subs)
            }
            t.stringify = function(e, i, n) {
                return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + f(e) + "}"
            }
            ;
            var g = 0;
            function v(t) {
                return t.replace(o, "\\\\").replace(i, '\\"').replace(n, "\\n").replace(s, "\\r").replace(a, "\\u2028").replace(r, "\\u2029")
            }
            function m(t) {
                return ~t.indexOf(".") ? "d" : "f"
            }
            function b(t, e) {
                var i = "<" + (e.prefix || "") + t.n + g++;
                return e.partials[i] = {
                    name: t.n,
                    partials: {}
                },
                e.code += 't.b(t.rp("' + v(i) + '",c,p,"' + (t.indent || "") + '"));',
                i
            }
            function x(t, e) {
                e.code += "t.b(t.t(t." + m(t.n) + '("' + v(t.n) + '",c,p,0)));'
            }
            function y(t) {
                return "t.b(" + t + ");"
            }
            t.generate = function(e, i, n) {
                g = 0;
                var s = {
                    code: "",
                    subs: {},
                    partials: {}
                };
                return t.walk(e, s),
                n.asString ? this.stringify(s, i, n) : this.makeTemplate(s, i, n)
            }
            ,
            t.wrapMain = function(t) {
                return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
            }
            ,
            t.template = t.Template,
            t.makeTemplate = function(t, e, i) {
                var n = this.makePartials(t);
                return n.code = new Function("c","p","i",this.wrapMain(t.code)),
                new this.template(n,e,this,i)
            }
            ,
            t.makePartials = function(t) {
                var e, i = {
                    subs: {},
                    partials: t.partials,
                    name: t.name
                };
                for (e in i.partials)
                    i.partials[e] = this.makePartials(i.partials[e]);
                for (e in t.subs)
                    i.subs[e] = new Function("c","p","t","i",t.subs[e]);
                return i
            }
            ,
            t.codegen = {
                "#": function(e, i) {
                    i.code += "if(t.s(t." + m(e.n) + '("' + v(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){',
                    t.walk(e.nodes, i),
                    i.code += "});c.pop();}"
                },
                "^": function(e, i) {
                    i.code += "if(!t.s(t." + m(e.n) + '("' + v(e.n) + '",c,p,1),c,p,1,0,0,"")){',
                    t.walk(e.nodes, i),
                    i.code += "};"
                },
                ">": b,
                "<": function(e, i) {
                    var n = {
                        partials: {},
                        code: "",
                        subs: {},
                        inPartial: !0
                    };
                    t.walk(e.nodes, n);
                    var s = i.partials[b(e, i)];
                    s.subs = n.subs,
                    s.partials = n.partials
                },
                $: function(e, i) {
                    var n = {
                        subs: {},
                        code: "",
                        partials: i.partials,
                        prefix: e.n
                    };
                    t.walk(e.nodes, n),
                    i.subs[e.n] = n.code,
                    i.inPartial || (i.code += 't.sub("' + v(e.n) + '",c,p,i);')
                },
                "\n": function(t, e) {
                    e.code += y('"\\n"' + (t.last ? "" : " + i"))
                },
                _v: function(t, e) {
                    e.code += "t.b(t.v(t." + m(t.n) + '("' + v(t.n) + '",c,p,0)));'
                },
                _t: function(t, e) {
                    e.code += y('"' + v(t.text) + '"')
                },
                "{": x,
                "&": x
            },
            t.walk = function(e, i) {
                for (var n, s = 0, o = e.length; s < o; s++)
                    (n = t.codegen[e[s].tag]) && n(e[s], i);
                return i
            }
            ,
            t.parse = function(e, i, n) {
                return function e(i, n, s, o) {
                    var a, r = [], l = null, h = null;
                    for (a = s[s.length - 1]; i.length > 0; ) {
                        if (h = i.shift(),
                        a && "<" == a.tag && !(h.tag in u))
                            throw new Error("Illegal content in < super tag.");
                        if (t.tags[h.tag] <= t.tags.$ || d(h, o))
                            s.push(h),
                            h.nodes = e(i, h.tag, s, o);
                        else {
                            if ("/" == h.tag) {
                                if (0 === s.length)
                                    throw new Error("Closing tag without opener: /" + h.n);
                                if (l = s.pop(),
                                h.n != l.n && !p(h.n, l.n, o))
                                    throw new Error("Nesting error: " + l.n + " vs. " + h.n);
                                return l.end = h.i,
                                r
                            }
                            "\n" == h.tag && (h.last = 0 == i.length || "\n" == i[0].tag)
                        }
                        r.push(h)
                    }
                    if (s.length > 0)
                        throw new Error("missing closing tag: " + s.pop().n);
                    return r
                }(e, 0, [], (n = n || {}).sectionTags || [])
            }
            ,
            t.cache = {},
            t.cacheKey = function(t, e) {
                return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
            }
            ,
            t.compile = function(e, i) {
                i = i || {};
                var n = t.cacheKey(e, i)
                  , s = this.cache[n];
                if (s) {
                    var o = s.partials;
                    for (var a in o)
                        delete o[a].instance;
                    return s
                }
                return s = this.generate(this.parse(this.scan(e, i.delimiters), e, i), e, i),
                this.cache[n] = s
            }
        }(e)
    }
    , function(t, e, i) {
        !function(t) {
            function e(t, e, i) {
                var n;
                return e && "object" == typeof e && (void 0 !== e[t] ? n = e[t] : i && e.get && "function" == typeof e.get && (n = e.get(t))),
                n
            }
            t.Template = function(t, e, i, n) {
                t = t || {},
                this.r = t.code || this.r,
                this.c = i,
                this.options = n || {},
                this.text = e || "",
                this.partials = t.partials || {},
                this.subs = t.subs || {},
                this.buf = ""
            }
            ,
            t.Template.prototype = {
                r: function(t, e, i) {
                    return ""
                },
                v: function(t) {
                    return t = l(t),
                    r.test(t) ? t.replace(i, "&amp;").replace(n, "&lt;").replace(s, "&gt;").replace(o, "&#39;").replace(a, "&quot;") : t
                },
                t: l,
                render: function(t, e, i) {
                    return this.ri([t], e || {}, i)
                },
                ri: function(t, e, i) {
                    return this.r(t, e, i)
                },
                ep: function(t, e) {
                    var i = this.partials[t]
                      , n = e[i.name];
                    if (i.instance && i.base == n)
                        return i.instance;
                    if ("string" == typeof n) {
                        if (!this.c)
                            throw new Error("No compiler available.");
                        n = this.c.compile(n, this.options)
                    }
                    if (!n)
                        return null;
                    if (this.partials[t].base = n,
                    i.subs) {
                        for (key in e.stackText || (e.stackText = {}),
                        i.subs)
                            e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                        n = function(t, e, i, n, s, o) {
                            function a() {}
                            function r() {}
                            var l;
                            a.prototype = t,
                            r.prototype = t.subs;
                            var h = new a;
                            for (l in h.subs = new r,
                            h.subsText = {},
                            h.buf = "",
                            n = n || {},
                            h.stackSubs = n,
                            h.subsText = o,
                            e)
                                n[l] || (n[l] = e[l]);
                            for (l in n)
                                h.subs[l] = n[l];
                            for (l in s = s || {},
                            h.stackPartials = s,
                            i)
                                s[l] || (s[l] = i[l]);
                            for (l in s)
                                h.partials[l] = s[l];
                            return h
                        }(n, i.subs, i.partials, this.stackSubs, this.stackPartials, e.stackText)
                    }
                    return this.partials[t].instance = n,
                    n
                },
                rp: function(t, e, i, n) {
                    var s = this.ep(t, i);
                    return s ? s.ri(e, i, n) : ""
                },
                rs: function(t, e, i) {
                    var n = t[t.length - 1];
                    if (h(n))
                        for (var s = 0; s < n.length; s++)
                            t.push(n[s]),
                            i(t, e, this),
                            t.pop();
                    else
                        i(t, e, this)
                },
                s: function(t, e, i, n, s, o, a) {
                    var r;
                    return (!h(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, i, n, s, o, a)),
                    r = !!t,
                    !n && r && e && e.push("object" == typeof t ? t : e[e.length - 1]),
                    r)
                },
                d: function(t, i, n, s) {
                    var o, a = t.split("."), r = this.f(a[0], i, n, s), l = this.options.modelGet, c = null;
                    if ("." === t && h(i[i.length - 2]))
                        r = i[i.length - 1];
                    else
                        for (var u = 1; u < a.length; u++)
                            void 0 !== (o = e(a[u], r, l)) ? (c = r,
                            r = o) : r = "";
                    return !(s && !r) && (s || "function" != typeof r || (i.push(c),
                    r = this.mv(r, i, n),
                    i.pop()),
                    r)
                },
                f: function(t, i, n, s) {
                    for (var o = !1, a = !1, r = this.options.modelGet, l = i.length - 1; l >= 0; l--)
                        if (void 0 !== (o = e(t, i[l], r))) {
                            a = !0;
                            break
                        }
                    return a ? (s || "function" != typeof o || (o = this.mv(o, i, n)),
                    o) : !s && ""
                },
                ls: function(t, e, i, n, s) {
                    var o = this.options.delimiters;
                    return this.options.delimiters = s,
                    this.b(this.ct(l(t.call(e, n)), e, i)),
                    this.options.delimiters = o,
                    !1
                },
                ct: function(t, e, i) {
                    if (this.options.disableLambda)
                        throw new Error("Lambda features disabled.");
                    return this.c.compile(t, this.options).render(e, i)
                },
                b: function(t) {
                    this.buf += t
                },
                fl: function() {
                    var t = this.buf;
                    return this.buf = "",
                    t
                },
                ms: function(t, e, i, n, s, o, a) {
                    var r, l = e[e.length - 1], h = t.call(l);
                    return "function" == typeof h ? !!n || (r = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text,
                    this.ls(h, l, i, r.substring(s, o), a)) : h
                },
                mv: function(t, e, i) {
                    var n = e[e.length - 1]
                      , s = t.call(n);
                    return "function" == typeof s ? this.ct(l(s.call(n)), n, i) : s
                },
                sub: function(t, e, i, n) {
                    var s = this.subs[t];
                    s && (this.activeSub = t,
                    s(e, i, this, n),
                    this.activeSub = !1)
                }
            };
            var i = /&/g
              , n = /</g
              , s = />/g
              , o = /\'/g
              , a = /\"/g
              , r = /[&<>\"\']/;
            function l(t) {
                return String(null == t ? "" : t)
            }
            var h = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }(e)
    }
    , function(t, e, i) {
        (function(t) {
            !function(t, e) {
                if (!t.fn.dotdotdot) {
                    t.fn.dotdotdot = function(e) {
                        if (0 == this.length)
                            return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'),
                            this;
                        if (this.length > 1)
                            return this.each((function() {
                                t(this).dotdotdot(e)
                            }
                            ));
                        var n = this
                          , s = n.contents();
                        n.data("dotdotdot") && n.trigger("destroy.dot"),
                        n.data("dotdotdot-style", n.attr("style") || ""),
                        n.css("word-wrap", "break-word"),
                        "nowrap" === n.css("white-space") && n.css("white-space", "normal"),
                        n.bind_events = function() {
                            return n.on("update.dot", (function(e, i) {
                                switch (n.removeClass("is-truncated"),
                                e.preventDefault(),
                                e.stopPropagation(),
                                typeof c.height) {
                                case "number":
                                    c.maxHeight = c.height;
                                    break;
                                case "function":
                                    c.maxHeight = c.height.call(n[0]);
                                    break;
                                default:
                                    c.maxHeight = function(t) {
                                        for (var e = t.innerHeight(), i = ["paddingTop", "paddingBottom"], n = 0, s = i.length; n < s; n++) {
                                            var o = parseInt(t.css(i[n]), 10);
                                            isNaN(o) && (o = 0),
                                            e -= o
                                        }
                                        return e
                                    }(n)
                                }
                                c.maxHeight += c.tolerance,
                                void 0 !== i && (("string" == typeof i || "nodeType"in i && 1 === i.nodeType) && (i = t("<div />").append(i).contents()),
                                i instanceof t && (s = i)),
                                (g = n.wrapInner('<div class="dotdotdot" />').children()).contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                                    height: "auto",
                                    width: "auto",
                                    border: "none",
                                    padding: 0,
                                    margin: 0
                                });
                                var r = !1
                                  , p = !1;
                                return d.afterElement && ((r = d.afterElement.clone(!0)).show(),
                                d.afterElement.detach()),
                                o(g, c) && (p = "children" == c.wrap ? function(t, e, i) {
                                    var n = t.children()
                                      , s = !1;
                                    t.empty();
                                    for (var a = 0, r = n.length; a < r; a++) {
                                        var l = n.eq(a);
                                        if (t.append(l),
                                        i && t.append(i),
                                        o(t, e)) {
                                            l.remove(),
                                            s = !0;
                                            break
                                        }
                                        i && i.detach()
                                    }
                                    return s
                                }(g, c, r) : function e(i, n, s, r, c) {
                                    var d = !1;
                                    return i.contents().detach().each((function() {
                                        var p = this
                                          , f = t(p);
                                        if (void 0 === p)
                                            return !0;
                                        if (f.is("script, .dotdotdot-keep"))
                                            i.append(f);
                                        else {
                                            if (d)
                                                return !0;
                                            i.append(f),
                                            !c || f.is(r.after) || f.find(r.after).length || i[i.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](c),
                                            o(s, r) && (d = 3 == p.nodeType ? function(e, i, n, s, r) {
                                                var c = e[0];
                                                if (!c)
                                                    return !1;
                                                var d = h(c)
                                                  , p = -1 !== d.indexOf(" ") ? " " : "　"
                                                  , f = "letter" == s.wrap ? "" : p
                                                  , g = d.split(f)
                                                  , v = -1
                                                  , m = -1
                                                  , b = 0
                                                  , x = g.length - 1;
                                                s.fallbackToLetter && 0 == b && 0 == x && (f = "",
                                                g = d.split(f),
                                                x = g.length - 1);
                                                for (; b <= x && (0 != b || 0 != x); ) {
                                                    var y = Math.floor((b + x) / 2);
                                                    if (y == m)
                                                        break;
                                                    m = y,
                                                    l(c, g.slice(0, m + 1).join(f) + s.ellipsis),
                                                    n.children().each((function() {
                                                        t(this).toggle().toggle()
                                                    }
                                                    )),
                                                    o(n, s) ? (x = m,
                                                    s.fallbackToLetter && 0 == b && 0 == x && (f = "",
                                                    g = g[0].split(f),
                                                    v = -1,
                                                    m = -1,
                                                    b = 0,
                                                    x = g.length - 1)) : (v = m,
                                                    b = m)
                                                }
                                                if (-1 == v || 1 == g.length && 0 == g[0].length) {
                                                    var w = e.parent();
                                                    e.detach();
                                                    var $ = r && r.closest(w).length ? r.length : 0;
                                                    if (w.contents().length > $ ? c = u(w.contents().eq(-1 - $), i) : (c = u(w, i, !0),
                                                    $ || w.detach()),
                                                    c && (d = a(h(c), s),
                                                    l(c, d),
                                                    $ && r)) {
                                                        var C = r.parent();
                                                        t(c).parent().append(r),
                                                        C.html().trim() || C.remove()
                                                    }
                                                } else
                                                    d = a(g.slice(0, v + 1).join(f), s),
                                                    l(c, d);
                                                return !0
                                            }(f, n, s, r, c) : e(f, n, s, r, c)),
                                            d || c && c.detach()
                                        }
                                    }
                                    )),
                                    n.addClass("is-truncated"),
                                    d
                                }(g, n, g, c, r)),
                                g.replaceWith(g.contents()),
                                g = null,
                                "function" == typeof c.callback && c.callback.call(n[0], p, s),
                                d.isTruncated = p,
                                p
                            }
                            )).on("isTruncated.dot", (function(t, e) {
                                return t.preventDefault(),
                                t.stopPropagation(),
                                "function" == typeof e && e.call(n[0], d.isTruncated),
                                d.isTruncated
                            }
                            )).on("originalContent.dot", (function(t, e) {
                                return t.preventDefault(),
                                t.stopPropagation(),
                                "function" == typeof e && e.call(n[0], s),
                                s
                            }
                            )).on("destroy.dot", (function(t) {
                                t.preventDefault(),
                                t.stopPropagation(),
                                n.unwatch().unbind_events().contents().detach().end().append(s).attr("style", n.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1)
                            }
                            )),
                            n
                        }
                        ,
                        n.unbind_events = function() {
                            return n.off(".dot"),
                            n
                        }
                        ,
                        n.watch = function() {
                            if (n.unwatch(),
                            "window" == c.watch) {
                                var e = t(window)
                                  , i = e.width()
                                  , s = e.height();
                                e.on("resize.dot" + d.dotId, (function() {
                                    i == e.width() && s == e.height() && c.windowResizeFix || (i = e.width(),
                                    s = e.height(),
                                    f && clearInterval(f),
                                    f = setTimeout((function() {
                                        n.trigger("update.dot")
                                    }
                                    ), 100))
                                }
                                ))
                            } else
                                p = r(n),
                                f = setInterval((function() {
                                    if (n.is(":visible")) {
                                        var t = r(n);
                                        p.width == t.width && p.height == t.height || (n.trigger("update.dot"),
                                        p = t)
                                    }
                                }
                                ), 500);
                            return n
                        }
                        ,
                        n.unwatch = function() {
                            return t(window).off("resize.dot" + d.dotId),
                            f && clearInterval(f),
                            n
                        }
                        ;
                        var c = t.extend(!0, {}, t.fn.dotdotdot.defaults, e)
                          , d = {}
                          , p = {}
                          , f = null
                          , g = null;
                        return c.lastCharacter.remove instanceof Array || (c.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove),
                        c.lastCharacter.noEllipsis instanceof Array || (c.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
                        d.afterElement = function(e, i) {
                            if (!e)
                                return !1;
                            if ("string" == typeof e)
                                return !!(e = t(e, i)).length && e;
                            return !!e.jquery && e
                        }(c.after, n),
                        d.isTruncated = !1,
                        d.dotId = i++,
                        n.data("dotdotdot", !0).bind_events().trigger("update.dot"),
                        c.watch && n.watch(),
                        n
                    }
                    ,
                    t.fn.dotdotdot.defaults = {
                        ellipsis: "... ",
                        wrap: "word",
                        fallbackToLetter: !0,
                        lastCharacter: {},
                        tolerance: 0,
                        callback: null,
                        after: null,
                        height: null,
                        watch: !1,
                        windowResizeFix: !0
                    },
                    t.fn.dotdotdot.defaultArrays = {
                        lastCharacter: {
                            remove: [" ", "　", ",", ";", ".", "!", "?"],
                            noEllipsis: []
                        }
                    },
                    t.fn.dotdotdot.debug = function(t) {}
                    ;
                    var i = 1
                      , n = t.fn.html;
                    t.fn.html = function(t) {
                        return null != t && "function" != typeof t && this.data("dotdotdot") ? this.trigger("update", [t]) : n.apply(this, arguments)
                    }
                    ;
                    var s = t.fn.text;
                    t.fn.text = function(e) {
                        return null != e && "function" != typeof e && this.data("dotdotdot") ? (e = t("<div />").text(e).html(),
                        this.trigger("update", [e])) : s.apply(this, arguments)
                    }
                }
                function o(t, e) {
                    return t.innerHeight() > e.maxHeight
                }
                function a(e, i) {
                    for (; t.inArray(e.slice(-1), i.lastCharacter.remove) > -1; )
                        e = e.slice(0, -1);
                    return t.inArray(e.slice(-1), i.lastCharacter.noEllipsis) < 0 && (e += i.ellipsis),
                    e
                }
                function r(t) {
                    return {
                        width: t.innerWidth(),
                        height: t.innerHeight()
                    }
                }
                function l(t, e) {
                    t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
                }
                function h(t) {
                    return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
                }
                function c(t) {
                    do {
                        t = t.previousSibling
                    } while (t && 1 !== t.nodeType && 3 !== t.nodeType);
                    return t
                }
                function u(e, i, n) {
                    var s, o = e && e[0];
                    if (o) {
                        if (!n) {
                            if (3 === o.nodeType)
                                return o;
                            if (e.text().trim())
                                return u(e.contents().last(), i)
                        }
                        for (s = c(o); !s; ) {
                            if ((e = e.parent()).is(i) || !e.length)
                                return !1;
                            s = c(e[0])
                        }
                        if (s)
                            return u(t(s), i)
                    }
                    return !1
                }
            }(t),
            t(document).ready((function(t) {
                t(".dot-ellipsis").each((function() {
                    var e = t(this).hasClass("dot-resize-update")
                      , i = t(this).hasClass("dot-timer-update")
                      , n = 0
                      , s = t(this).attr("class").split(/\s+/);
                    t.each(s, (function(t, e) {
                        var i = e.match(/^dot-height-(\d+)$/);
                        null !== i && (n = Number(i[1]))
                    }
                    ));
                    var o = new Object;
                    i && (o.watch = !0),
                    e && (o.watch = "window"),
                    n > 0 && (o.height = n),
                    t(this).dotdotdot(o)
                }
                ))
            }
            )),
            t(window).on("load", (function() {
                t(".dot-ellipsis.dot-load-update").trigger("update.dot")
            }
            ))
        }
        ).call(this, i(1))
    }
    , function(t, e, i) {}
    ]).default
}
));

