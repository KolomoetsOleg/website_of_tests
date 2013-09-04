/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */


function timer(t, e, n) {
    var i = document.getElementById("timer"),
        o = (new Date).setHours(t, e, n);
    setInterval(function () {
        var t = Math.round((o - new Date) / 1e3),
            e = "";
        0 > t ? location.replace("/test_using/finish?time=out") : e = Math.floor(t / 3600) + " час. " + Math.floor(t / 60) % 60 + " мин." + Math.floor(t) % 60 + " сек.", i.innerHTML = e
    }, 1e3)
}! function (t, e) {
    function n(t) {
        var e = t.length,
            n = le.type(t);
        return le.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t) {
        var e = Te[t] = {};
        return le.each(t.match(ce) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function o(t, n, i, o) {
        if (le.acceptData(t)) {
            var r, s, a = le.expando,
                l = "string" == typeof n,
                u = t.nodeType,
                c = u ? le.cache : t,
                f = u ? t[a] : t[a] && a;
            if (f && c[f] && (o || c[f].data) || !l || i !== e) return f || (u ? t[a] = f = Z.pop() || le.guid++ : f = a), c[f] || (c[f] = {}, u || (c[f].toJSON = le.noop)), ("object" == typeof n || "function" == typeof n) && (o ? c[f] = le.extend(c[f], n) : c[f].data = le.extend(c[f].data, n)), r = c[f], o || (r.data || (r.data = {}), r = r.data), i !== e && (r[le.camelCase(n)] = i), l ? (s = r[n], null == s && (s = r[le.camelCase(n)])) : s = r, s
        }
    }

    function r(t, e, n) {
        if (le.acceptData(t)) {
            var i, o, r, s = t.nodeType,
                l = s ? le.cache : t,
                u = s ? t[le.expando] : le.expando;
            if (l[u]) {
                if (e && (r = n ? l[u] : l[u].data)) {
                    le.isArray(e) ? e = e.concat(le.map(e, le.camelCase)) : e in r ? e = [e] : (e = le.camelCase(e), e = e in r ? [e] : e.split(" "));
                    for (i = 0, o = e.length; o > i; i++) delete r[e[i]];
                    if (!(n ? a : le.isEmptyObject)(r)) return
                }(n || (delete l[u].data, a(l[u]))) && (s ? le.cleanData([t], !0) : le.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
            }
        }
    }

    function s(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var o = "data-" + n.replace($e, "-$1").toLowerCase();
            if (i = t.getAttribute(o), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ke.test(i) ? le.parseJSON(i) : i
                } catch (r) {}
                le.data(t, n, i)
            } else i = e
        }
        return i
    }

    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e || !le.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function f(t, e, n) {
        if (e = e || 0, le.isFunction(e)) return le.grep(t, function (t, i) {
            var o = !! e.call(t, i, t);
            return o === n
        });
        if (e.nodeType) return le.grep(t, function (t) {
            return t === e === n
        });
        if ("string" == typeof e) {
            var i = le.grep(t, function (t) {
                return 1 === t.nodeType
            });
            if (Ie.test(e)) return le.filter(e, i, !n);
            e = le.filter(e, i)
        }
        return le.grep(t, function (t) {
            return le.inArray(t, e) >= 0 === n
        })
    }

    function d(t) {
        var e = Qe.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function h(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }

    function p(t) {
        var e = t.getAttributeNode("type");
        return t.type = (e && e.specified) + "/" + t.type, t
    }

    function m(t) {
        var e = rn.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) le._data(n, "globalEval", !e || le._data(e[i], "globalEval"))
    }

    function v(t, e) {
        if (1 === e.nodeType && le.hasData(t)) {
            var n, i, o, r = le._data(t),
                s = le._data(e, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++) le.event.add(e, n, a[n][i])
            }
            s.data && (s.data = le.extend({}, s.data))
        }
    }

    function y(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !le.support.noCloneEvent && e[le.expando]) {
                o = le._data(e);
                for (i in o.events) le.removeEvent(e, i, o.handle);
                e.removeAttribute(le.expando)
            }
            "script" === n && e.text !== t.text ? (p(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), le.support.html5Clone && t.innerHTML && !le.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function b(t, n) {
        var i, o, r = 0,
            s = typeof t.getElementsByTagName !== U ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== U ? t.querySelectorAll(n || "*") : e;
        if (!s)
            for (s = [], i = t.childNodes || t; null != (o = i[r]); r++)!n || le.nodeName(o, n) ? s.push(o) : le.merge(s, b(o, n));
        return n === e || n && le.nodeName(t, n) ? le.merge([t], s) : s
    }

    function x(t) {
        en.test(t.type) && (t.defaultChecked = t.checked)
    }

    function w(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = $n.length; o--;)
            if (e = $n[o] + n, e in t) return e;
        return i
    }

    function C(t, e) {
        return t = e || t, "none" === le.css(t, "display") || !le.contains(t.ownerDocument, t)
    }

    function T(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = le._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (r[s] = le._data(i, "olddisplay", N(i.nodeName)))) : r[s] || (o = C(i), (n && "none" !== n || !o) && le._data(i, "olddisplay", o ? n : le.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function k(t, e, n) {
        var i = yn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function $(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += le.css(t, n + kn[r], !0, o)), i ? ("content" === n && (s -= le.css(t, "padding" + kn[r], !0, o)), "margin" !== n && (s -= le.css(t, "border" + kn[r] + "Width", !0, o))) : (s += le.css(t, "padding" + kn[r], !0, o), "padding" !== n && (s += le.css(t, "border" + kn[r] + "Width", !0, o)));
        return s
    }

    function E(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = fn(t),
            s = le.support.boxSizing && "border-box" === le.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = dn(t, e, r), (0 > o || null == o) && (o = t.style[e]), bn.test(o)) return o;
            i = s && (le.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + $(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function N(t) {
        var e = V,
            n = wn[t];
        return n || (n = S(t, e), "none" !== n && n || (cn = (cn || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = S(t, e), cn.detach()), wn[t] = n), n
    }

    function S(t, e) {
        var n = le(e.createElement(t)).appendTo(e.body),
            i = le.css(n[0], "display");
        return n.remove(), i
    }

    function j(t, e, n, i) {
        var o;
        if (le.isArray(e)) le.each(e, function (e, o) {
            n || Nn.test(t) ? i(t, o) : j(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== le.type(e)) i(t, e);
        else
            for (o in e) j(t + "[" + o + "]", e[o], n, i)
    }

    function A(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(ce) || [];
            if (le.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function D(t, e, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, le.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {}, s = t === zn;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function L(t, n) {
        var i, o, r = le.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== e && ((r[o] ? t : i || (i = {}))[o] = n[o]);
        return i && le.extend(!0, t, i), t
    }

    function H(t, n, i) {
        var o, r, s, a, l = t.contents,
            u = t.dataTypes,
            c = t.responseFields;
        for (a in c) a in i && (n[c[a]] = i[a]);
        for (;
            "*" === u[0];) u.shift(), r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
        if (r)
            for (a in l)
                if (l[a] && l[a].test(r)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in i) s = u[0];
        else {
            for (a in i) {
                if (!u[0] || t.converters[a + " " + u[0]]) {
                    s = a;
                    break
                }
                o || (o = a)
            }
            s = s || o
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : void 0
    }

    function q(t, e) {
        var n, i, o, r, s = {}, a = 0,
            l = t.dataTypes.slice(),
            u = l[0];
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
            for (o in t.converters) s[o.toLowerCase()] = t.converters[o];
        for (; i = l[++a];)
            if ("*" !== i) {
                if ("*" !== u && u !== i) {
                    if (o = s[u + " " + i] || s["* " + i], !o)
                        for (n in s)
                            if (r = n.split(" "), r[1] === i && (o = s[u + " " + r[0]] || s["* " + r[0]])) {
                                o === !0 ? o = s[n] : s[n] !== !0 && (i = r[0], l.splice(a--, 0, i));
                                break
                            }
                    if (o !== !0)
                        if (o && t["throws"]) e = o(e);
                        else try {
                            e = o(e)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: o ? c : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: e
        }
    }

    function M() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function P() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function F() {
        return setTimeout(function () {
            Zn = e
        }), Zn = le.now()
    }

    function _(t, e) {
        le.each(e, function (e, n) {
            for (var i = (ri[e] || []).concat(ri["*"]), o = 0, r = i.length; r > o; o++)
                if (i[o].call(t, e, n)) return
        })
    }

    function O(t, e, n) {
        var i, o, r = 0,
            s = oi.length,
            a = le.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var e = Zn || F(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, n]), 1 > r && l ? n : (a.resolveWith(t, [u]), !1)
            }, u = a.promise({
                elem: t,
                props: le.extend({}, e),
                opts: le.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Zn || F(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = le.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (B(c, u.opts.specialEasing); s > r; r++)
            if (i = oi[r].call(u, t, c, u.opts)) return i;
        return _(u, c), le.isFunction(u.opts.start) && u.opts.start.call(t, u), le.fx.timer(le.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(t, e) {
        var n, i, o, r, s;
        for (o in t)
            if (i = le.camelCase(o), r = e[i], n = t[o], le.isArray(n) && (r = n[1], n = t[o] = n[0]), o !== i && (t[i] = n, delete t[o]), s = le.cssHooks[i], s && "expand" in s) {
                n = s.expand(n), delete t[i];
                for (o in n) o in t || (t[o] = n[o], e[o] = r)
            } else e[i] = r
    }

    function W(t, e, n) {
        var i, o, r, s, a, l, u, c, f, d = this,
            h = t.style,
            p = {}, m = [],
            g = t.nodeType && C(t);
        n.queue || (c = le._queueHooks(t, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
            c.unqueued || f()
        }), c.unqueued++, d.always(function () {
            d.always(function () {
                c.unqueued--, le.queue(t, "fx").length || c.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === le.css(t, "display") && "none" === le.css(t, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", le.support.shrinkWrapBlocks || d.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (o in e)
            if (s = e[o], ei.exec(s)) {
                if (delete e[o], l = l || "toggle" === s, s === (g ? "hide" : "show")) continue;
                m.push(o)
            }
        if (r = m.length) {
            a = le._data(t, "fxshow") || le._data(t, "fxshow", {}), "hidden" in a && (g = a.hidden), l && (a.hidden = !g), g ? le(t).show() : d.done(function () {
                le(t).hide()
            }), d.done(function () {
                var e;
                le._removeData(t, "fxshow");
                for (e in p) le.style(t, e, p[e])
            });
            for (o = 0; r > o; o++) i = m[o], u = d.createTween(i, g ? a[i] : 0), p[i] = a[i] || le.style(t, i), i in a || (a[i] = u.start, g && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function R(t, e, n, i, o) {
        return new R.prototype.init(t, e, n, i, o)
    }

    function I(t, e) {
        var n, i = {
                height: t
            }, o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = kn[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function z(t) {
        return le.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var X, Q, U = typeof e,
        V = t.document,
        Y = t.location,
        J = t.jQuery,
        K = t.$,
        G = {}, Z = [],
        te = "1.9.1",
        ee = Z.concat,
        ne = Z.push,
        ie = Z.slice,
        oe = Z.indexOf,
        re = G.toString,
        se = G.hasOwnProperty,
        ae = te.trim,
        le = function (t, e) {
            return new le.fn.init(t, e, Q)
        }, ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ce = /\S+/g,
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        de = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^[\],:{}\s]*$/,
        me = /(?:^|:|,)(?:\s*\[)+/g,
        ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ye = /^-ms-/,
        be = /-([\da-z])/gi,
        xe = function (t, e) {
            return e.toUpperCase()
        }, we = function (t) {
            (V.addEventListener || "load" === t.type || "complete" === V.readyState) && (Ce(), le.ready())
        }, Ce = function () {
            V.addEventListener ? (V.removeEventListener("DOMContentLoaded", we, !1), t.removeEventListener("load", we, !1)) : (V.detachEvent("onreadystatechange", we), t.detachEvent("onload", we))
        };
    le.fn = le.prototype = {
        jquery: te,
        constructor: le,
        init: function (t, n, i) {
            var o, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : de.exec(t), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                if (o[1]) {
                    if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), he.test(o[1]) && le.isPlainObject(n))
                        for (o in n) le.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                if (r = V.getElementById(o[2]), r && r.parentNode) {
                    if (r.id !== o[2]) return i.find(t);
                    this.length = 1, this[0] = r
                }
                return this.context = V, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : le.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), le.makeArray(t, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return ie.call(this)
        },
        get: function (t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        },
        pushStack: function (t) {
            var e = le.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return le.each(this, t, e)
        },
        ready: function (t) {
            return le.ready.promise().done(t), this
        },
        slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        map: function (t) {
            return this.pushStack(le.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: ne,
        sort: [].sort,
        splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function () {
        var t, n, i, o, r, s, a = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || le.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
            if (null != (r = arguments[l]))
                for (o in r) t = a[o], i = r[o], a !== i && (c && i && (le.isPlainObject(i) || (n = le.isArray(i))) ? (n ? (n = !1, s = t && le.isArray(t) ? t : []) : s = t && le.isPlainObject(t) ? t : {}, a[o] = le.extend(c, s, i)) : i !== e && (a[o] = i));
        return a
    }, le.extend({
        noConflict: function (e) {
            return t.$ === le && (t.$ = K), e && t.jQuery === le && (t.jQuery = J), le
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? le.readyWait++ : le.ready(!0)
        },
        ready: function (t) {
            if (t === !0 ? !--le.readyWait : !le.isReady) {
                if (!V.body) return setTimeout(le.ready);
                le.isReady = !0, t !== !0 && --le.readyWait > 0 || (X.resolveWith(V, [le]), le.fn.trigger && le(V).trigger("ready").off("ready"))
            }
        },
        isFunction: function (t) {
            return "function" === le.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === le.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function (t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? G[re.call(t)] || "object" : typeof t
        },
        isPlainObject: function (t) {
            if (!t || "object" !== le.type(t) || t.nodeType || le.isWindow(t)) return !1;
            try {
                if (t.constructor && !se.call(t, "constructor") && !se.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var i;
            for (i in t);
            return i === e || se.call(t, i)
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        error: function (t) {
            throw new Error(t)
        },
        parseHTML: function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || V;
            var i = he.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = le.buildFragment([t], e, o), o && le(o).remove(), le.merge([], i.childNodes))
        },
        parseJSON: function (e) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = le.trim(e), e && pe.test(e.replace(ge, "@").replace(ve, "]").replace(me, ""))) ? new Function("return " + e)() : (le.error("Invalid JSON: " + e), void 0)
        },
        parseXML: function (n) {
            var i, o;
            if (!n || "string" != typeof n) return null;
            try {
                t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (r) {
                i = e
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), i
        },
        noop: function () {},
        globalEval: function (e) {
            e && le.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(ye, "ms-").replace(be, xe)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, i) {
            var o, r = 0,
                s = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.apply(t[r], i), o === !1) break
            } else if (a)
                for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]), o === !1) break; return t
        },
        trim: ae && !ae.call("﻿ ") ? function (t) {
            return null == t ? "" : ae.call(t)
        } : function (t) {
            return null == t ? "" : (t + "").replace(fe, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? le.merge(i, "string" == typeof t ? [t] : t) : ne.call(i, t)), i
        },
        inArray: function (t, e, n) {
            var i;
            if (e) {
                if (oe) return oe.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function (t, n) {
            var i = n.length,
                o = t.length,
                r = 0;
            if ("number" == typeof i)
                for (; i > r; r++) t[o++] = n[r];
            else
                for (; n[r] !== e;) t[o++] = n[r++];
            return t.length = o, t
        },
        grep: function (t, e, n) {
            var i, o = [],
                r = 0,
                s = t.length;
            for (n = !! n; s > r; r++) i = !! e(t[r], r), n !== i && o.push(t[r]);
            return o
        },
        map: function (t, e, i) {
            var o, r = 0,
                s = t.length,
                a = n(t),
                l = [];
            if (a)
                for (; s > r; r++) o = e(t[r], r, i), null != o && (l[l.length] = o);
            else
                for (r in t) o = e(t[r], r, i), null != o && (l[l.length] = o);
            return ee.apply([], l)
        },
        guid: 1,
        proxy: function (t, n) {
            var i, o, r;
            return "string" == typeof n && (r = t[n], n = t, t = r), le.isFunction(t) ? (i = ie.call(arguments, 2), o = function () {
                return t.apply(n || this, i.concat(ie.call(arguments)))
            }, o.guid = t.guid = t.guid || le.guid++, o) : e
        },
        access: function (t, n, i, o, r, s, a) {
            var l = 0,
                u = t.length,
                c = null == i;
            if ("object" === le.type(i)) {
                r = !0;
                for (l in i) le.access(t, n, l, i[l], !0, s, a)
            } else if (o !== e && (r = !0, le.isFunction(o) || (a = !0), c && (a ? (n.call(t, o), n = null) : (c = n, n = function (t, e, n) {
                return c.call(le(t), n)
            })), n))
                for (; u > l; l++) n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
            return r ? t : c ? n.call(t) : u ? n(t[0], i) : s
        },
        now: function () {
            return (new Date).getTime()
        }
    }), le.ready.promise = function (e) {
        if (!X)
            if (X = le.Deferred(), "complete" === V.readyState) setTimeout(le.ready);
            else if (V.addEventListener) V.addEventListener("DOMContentLoaded", we, !1), t.addEventListener("load", we, !1);
        else {
            V.attachEvent("onreadystatechange", we), t.attachEvent("onload", we);
            var n = !1;
            try {
                n = null == t.frameElement && V.documentElement
            } catch (i) {}
            n && n.doScroll && function o() {
                if (!le.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(o, 50)
                    }
                    Ce(), le.ready()
                }
            }()
        }
        return X.promise(e)
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        G["[object " + e + "]"] = e.toLowerCase()
    }), Q = le(V);
    var Te = {};
    le.Callbacks = function (t) {
        t = "string" == typeof t ? Te[t] || i(t) : le.extend({}, t);
        var n, o, r, s, a, l, u = [],
            c = !t.once && [],
            f = function (e) {
                for (o = t.memory && e, r = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)
                    if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        o = !1;
                        break
                    }
                n = !1, u && (c ? c.length && f(c.shift()) : o ? u = [] : d.disable())
            }, d = {
                add: function () {
                    if (u) {
                        var e = u.length;
                        ! function i(e) {
                            le.each(e, function (e, n) {
                                var o = le.type(n);
                                "function" === o ? t.unique && d.has(n) || u.push(n) : n && n.length && "string" !== o && i(n)
                            })
                        }(arguments), n ? s = u.length : o && (l = e, f(o))
                    }
                    return this
                },
                remove: function () {
                    return u && le.each(arguments, function (t, e) {
                        for (var i;
                            (i = le.inArray(e, u, i)) > -1;) u.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                    }), this
                },
                has: function (t) {
                    return t ? le.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], this
                },
                disable: function () {
                    return u = c = o = e, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return c = e, o || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (t, e) {
                    return e = e || [], e = [t, e.slice ? e.slice() : e], !u || r && !c || (n ? c.push(e) : f(e)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return d
    }, le.extend({
        Deferred: function (t) {
            var e = [
                ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                ["notify", "progress", le.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return le.Deferred(function (n) {
                            le.each(e, function (e, r) {
                                var s = r[0],
                                    a = le.isFunction(t[e]) && t[e];
                                o[r[1]](function () {
                                    var t = a && a.apply(this, arguments);
                                    t && le.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? le.extend(t, i) : i
                    }
                }, o = {};
            return i.pipe = i.then, le.each(e, function (t, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (t) {
            var e, n, i, o = 0,
                r = ie.call(arguments),
                s = r.length,
                a = 1 !== s || t && le.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : le.Deferred(),
                u = function (t, n, i) {
                    return function (o) {
                        n[t] = this, i[t] = arguments.length > 1 ? ie.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && le.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    }), le.support = function () {
        var e, n, i, o, r, s, a, l, u, c, f = V.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), i = f.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
        r = V.createElement("select"), a = r.appendChild(V.createElement("option")), o = f.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !! f.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !! i.style.cssFloat,
            checkOn: !! o.value,
            optSelected: a.selected,
            enctype: !! V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete f.test
        } catch (d) {
            e.deleteExpando = !1
        }
        o = V.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = V.createDocumentFragment(), s.appendChild(o), e.appendChecked = o.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            e.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || f.attributes[l].expando === !1;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === f.style.backgroundClip, le(function () {
            var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = V.getElementsByTagName("body")[0];
            s && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = f.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === o[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === f.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(f, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(f, null) || {
                width: "4px"
            }).width, i = f.appendChild(V.createElement("div")), i.style.cssText = f.style.cssText = r, i.style.marginRight = i.style.width = "0", f.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof f.style.zoom !== U && (f.innerHTML = "", f.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== f.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = f = o = i = null)
        }), n = r = s = a = i = o = null, e
    }();
    var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        $e = /([A-Z])/g;
    le.extend({
        cache: {},
        expando: "jQuery" + (te + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (t) {
            return t = t.nodeType ? le.cache[t[le.expando]] : t[le.expando], !! t && !a(t)
        },
        data: function (t, e, n) {
            return o(t, e, n)
        },
        removeData: function (t, e) {
            return r(t, e)
        },
        _data: function (t, e, n) {
            return o(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return r(t, e, !0)
        },
        acceptData: function (t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && le.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), le.fn.extend({
        data: function (t, n) {
            var i, o, r = this[0],
                a = 0,
                l = null;
            if (t === e) {
                if (this.length && (l = le.data(r), 1 === r.nodeType && !le._data(r, "parsedAttrs"))) {
                    for (i = r.attributes; a < i.length; a++) o = i[a].name, o.indexOf("data-") || (o = le.camelCase(o.slice(5)), s(r, o, l[o]));
                    le._data(r, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof t ? this.each(function () {
                le.data(this, t)
            }) : le.access(this, function (n) {
                return n === e ? r ? s(r, t, le.data(r, t)) : null : (this.each(function () {
                    le.data(this, t, n)
                }), void 0)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                le.removeData(this, t)
            })
        }
    }), le.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = le._data(t, e), n && (!i || le.isArray(n) ? i = le._data(t, e, le.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = le.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = le._queueHooks(t, e),
                s = function () {
                    le.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), r.cur = o, o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return le._data(t, n) || le._data(t, n, {
                empty: le.Callbacks("once memory").add(function () {
                    le._removeData(t, e + "queue"), le._removeData(t, n)
                })
            })
        }
    }), le.fn.extend({
        queue: function (t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? le.queue(this[0], t) : n === e ? this : this.each(function () {
                var e = le.queue(this, t, n);
                le._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && le.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                le.dequeue(this, t)
            })
        },
        delay: function (t, e) {
            return t = le.fx ? le.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, n) {
            var i, o = 1,
                r = le.Deferred(),
                s = this,
                a = this.length,
                l = function () {
                    --o || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = le._data(s[a], t + "queueHooks"), i && i.empty && (o++, i.empty.add(l));
            return l(), r.promise(n)
        }
    });
    var Ee, Ne, Se = /[\t\r\n]/g,
        je = /\r/g,
        Ae = /^(?:input|select|textarea|button|object)$/i,
        De = /^(?:a|area)$/i,
        Le = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        He = /^(?:checked|selected)$/i,
        qe = le.support.getSetAttribute,
        Me = le.support.input;
    le.fn.extend({
        attr: function (t, e) {
            return le.access(this, le.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                le.removeAttr(this, t)
            })
        },
        prop: function (t, e) {
            return le.access(this, le.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = le.propFix[t] || t, this.each(function () {
                try {
                    this[t] = e, delete this[t]
                } catch (n) {}
            })
        },
        addClass: function (t) {
            var e, n, i, o, r, s = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (le.isFunction(t)) return this.each(function (e) {
                le(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ce) || []; a > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Se, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        n.className = le.trim(i)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, o, r, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (le.isFunction(t)) return this.each(function (e) {
                le(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ce) || []; a > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Se, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        n.className = t ? le.trim(i) : ""
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t,
                i = "boolean" == typeof e;
            return le.isFunction(t) ? this.each(function (n) {
                le(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function () {
                if ("string" === n)
                    for (var o, r = 0, s = le(this), a = e, l = t.match(ce) || []; o = l[r++];) a = i ? a : !s.hasClass(o), s[a ? "addClass" : "removeClass"](o);
                else(n === U || "boolean" === n) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : le._data(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Se, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function (t) {
            var n, i, o, r = this[0]; {
                if (arguments.length) return o = le.isFunction(t), this.each(function (n) {
                    var r, s = le(this);
                    1 === this.nodeType && (r = o ? t.call(this, n, s.val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : le.isArray(r) && (r = le.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), i = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== e || (this.value = r))
                });
                if (r) return i = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (n = i.get(r, "value")) !== e ? n : (n = r.value, "string" == typeof n ? n.replace(je, "") : null == n ? "" : n)
            }
        }
    }), le.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (le.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && le.nodeName(n.parentNode, "optgroup"))) {
                            if (e = le(n).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (t, e) {
                    var n = le.makeArray(e);
                    return le(t).find("option").each(function () {
                        this.selected = le.inArray(le(this).val(), n) >= 0
                    }), n.length || (t.selectedIndex = -1), n
                }
            }
        },
        attr: function (t, n, i) {
            var o, r, s, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === U ? le.prop(t, n, i) : (r = 1 !== a || !le.isXMLDoc(t), r && (n = n.toLowerCase(), o = le.attrHooks[n] || (Le.test(n) ? Ne : Ee)), i === e ? o && r && "get" in o && null !== (s = o.get(t, n)) ? s : (typeof t.getAttribute !== U && (s = t.getAttribute(n)), null == s ? e : s) : null !== i ? o && r && "set" in o && (s = o.set(t, i, n)) !== e ? s : (t.setAttribute(n, i + ""), i) : (le.removeAttr(t, n), void 0))
        },
        removeAttr: function (t, e) {
            var n, i, o = 0,
                r = e && e.match(ce);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = le.propFix[n] || n, Le.test(n) ? !qe && He.test(n) ? t[le.camelCase("default-" + n)] = t[i] = !1 : t[i] = !1 : le.attr(t, n, ""), t.removeAttribute(qe ? n : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!le.support.radioValue && "radio" === e && le.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (t, n, i) {
            var o, r, s, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !le.isXMLDoc(t), s && (n = le.propFix[n] || n, r = le.propHooks[n]), i !== e ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : t[n] = i : r && "get" in r && null !== (o = r.get(t, n)) ? o : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var n = t.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Ae.test(t.nodeName) || De.test(t.nodeName) && t.href ? 0 : e
                }
            }
        }
    }), Ne = {
        get: function (t, n) {
            var i = le.prop(t, n),
                o = "boolean" == typeof i && t.getAttribute(n),
                r = "boolean" == typeof i ? Me && qe ? null != o : He.test(n) ? t[le.camelCase("default-" + n)] : !! o : t.getAttributeNode(n);
            return r && r.value !== !1 ? n.toLowerCase() : e
        },
        set: function (t, e, n) {
            return e === !1 ? le.removeAttr(t, n) : Me && qe || !He.test(n) ? t.setAttribute(!qe && le.propFix[n] || n, n) : t[le.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, Me && qe || (le.attrHooks.value = {
        get: function (t, n) {
            var i = t.getAttributeNode(n);
            return le.nodeName(t, "input") ? t.defaultValue : i && i.specified ? i.value : e
        },
        set: function (t, e, n) {
            return le.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Ee && Ee.set(t, e, n)
        }
    }), qe || (Ee = le.valHooks.button = {
        get: function (t, n) {
            var i = t.getAttributeNode(n);
            return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : e
        },
        set: function (t, n, i) {
            var o = t.getAttributeNode(i);
            return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
        }
    }, le.attrHooks.contenteditable = {
        get: Ee.get,
        set: function (t, e, n) {
            Ee.set(t, "" === e ? !1 : e, n)
        }
    }, le.each(["width", "height"], function (t, e) {
        le.attrHooks[e] = le.extend(le.attrHooks[e], {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        })
    })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function (t, n) {
        le.attrHooks[n] = le.extend(le.attrHooks[n], {
            get: function (t) {
                var i = t.getAttribute(n, 2);
                return null == i ? e : i
            }
        })
    }), le.each(["href", "src"], function (t, e) {
        le.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    })), le.support.style || (le.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || e
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function () {
        le.valHooks[this] = {
            get: function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }), le.each(["radio", "checkbox"], function () {
        le.valHooks[this] = le.extend(le.valHooks[this], {
            set: function (t, e) {
                return le.isArray(e) ? t.checked = le.inArray(le(t).val(), e) >= 0 : void 0
            }
        })
    });
    var Pe = /^(?:input|select|textarea)$/i,
        Fe = /^key/,
        _e = /^(?:mouse|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        Be = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
        global: {},
        add: function (t, n, i, o, r) {
            var s, a, l, u, c, f, d, h, p, m, g, v = le._data(t);
            if (v) {
                for (i.handler && (u = i, i = u.handler, r = u.selector), i.guid || (i.guid = le.guid++), (a = v.events) || (a = v.events = {}), (f = v.handle) || (f = v.handle = function (t) {
                    return typeof le === U || t && le.event.triggered === t.type ? e : le.event.dispatch.apply(f.elem, arguments)
                }, f.elem = t), n = (n || "").match(ce) || [""], l = n.length; l--;) s = Be.exec(n[l]) || [], p = g = s[1], m = (s[2] || "").split(".").sort(), c = le.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = le.event.special[p] || {}, d = le.extend({
                    type: p,
                    origType: g,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && le.expr.match.needsContext.test(r),
                    namespace: m.join(".")
                }, u), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, o, m, f) !== !1 || (t.addEventListener ? t.addEventListener(p, f, !1) : t.attachEvent && t.attachEvent("on" + p, f))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), le.event.global[p] = !0;
                t = null
            }
        },
        remove: function (t, e, n, i, o) {
            var r, s, a, l, u, c, f, d, h, p, m, g = le.hasData(t) && le._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(ce) || [""], u = e.length; u--;)
                    if (a = Be.exec(e[u]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = le.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, d = c[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) s = d[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(r, 1), s.selector && d.delegateCount--, f.remove && f.remove.call(t, s));
                        l && !d.length && (f.teardown && f.teardown.call(t, p, g.handle) !== !1 || le.removeEvent(t, h, g.handle), delete c[h])
                    } else
                        for (h in c) le.event.remove(t, h + e[u], n, i, !0);
                le.isEmptyObject(c) && (delete g.handle, le._removeData(t, "events"))
            }
        },
        trigger: function (n, i, o, r) {
            var s, a, l, u, c, f, d, h = [o || V],
                p = se.call(n, "type") ? n.type : n,
                m = se.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = o = o || V, 3 !== o.nodeType && 8 !== o.nodeType && !Oe.test(p + le.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), a = p.indexOf(":") < 0 && "on" + p, n = n[le.expando] ? n : new le.Event(p, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : le.makeArray(i, [n]), c = le.event.special[p] || {}, r || !c.trigger || c.trigger.apply(o, i) !== !1)) {
                if (!r && !c.noBubble && !le.isWindow(o)) {
                    for (u = c.delegateType || p, Oe.test(u + p) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                    f === (o.ownerDocument || V) && h.push(f.defaultView || f.parentWindow || t)
                }
                for (d = 0;
                    (l = h[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? u : c.bindType || p, s = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"), s && s.apply(l, i), s = a && l[a], s && le.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
                if (n.type = p, !(r || n.isDefaultPrevented() || c._default && c._default.apply(o.ownerDocument, i) !== !1 || "click" === p && le.nodeName(o, "a") || !le.acceptData(o) || !a || !o[p] || le.isWindow(o))) {
                    f = o[a], f && (o[a] = null), le.event.triggered = p;
                    try {
                        o[p]()
                    } catch (g) {}
                    le.event.triggered = e, f && (o[a] = f)
                }
                return n.result
            }
        },
        dispatch: function (t) {
            t = le.event.fix(t);
            var n, i, o, r, s, a = [],
                l = ie.call(arguments),
                u = (le._data(this, "events") || {})[t.type] || [],
                c = le.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = le.event.handlers.call(this, t, u), n = 0;
                    (r = a[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, s = 0;
                        (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((le.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, n) {
            var i, o, r, s, a = [],
                l = n.delegateCount,
                u = t.target;
            if (l && u.nodeType && (!t.button || "click" !== t.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], s = 0; l > s; s++) o = n[s], i = o.selector + " ", r[i] === e && (r[i] = o.needsContext ? le(i, this).index(u) >= 0 : le.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return l < n.length && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        fix: function (t) {
            if (t[le.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = _e.test(o) ? this.mouseHooks : Fe.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new le.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || V), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, s.filter ? s.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, n) {
                var i, o, r, s = n.button,
                    a = n.fromElement;
                return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || V, r = o.documentElement, i = o.body, t.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            },
            focus: {
                trigger: function () {
                    if (this !== V.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, i) {
            var o = le.extend(new le.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? le.event.trigger(o, null, e) : le.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, le.removeEvent = V.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === U && (t[i] = null), t.detachEvent(i, n))
    }, le.Event = function (t, e) {
        return this instanceof le.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, e && le.extend(this, e), this.timeStamp = t && t.timeStamp || le.now(), this[le.expando] = !0, void 0) : new le.Event(t, e)
    }, le.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, le.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (t, e) {
        le.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== i && !le.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), le.support.submitBubbles || (le.event.special.submit = {
        setup: function () {
            return le.nodeName(this, "form") ? !1 : (le.event.add(this, "click._submit keypress._submit", function (t) {
                var n = t.target,
                    i = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form : e;
                i && !le._data(i, "submitBubbles") && (le.event.add(i, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), le._data(i, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && le.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
            return le.nodeName(this, "form") ? !1 : (le.event.remove(this, "._submit"), void 0)
        }
    }), le.support.changeBubbles || (le.event.special.change = {
        setup: function () {
            return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), le.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, t, !0)
            })), !1) : (le.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Pe.test(e.nodeName) && !le._data(e, "changeBubbles") && (le.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || le.event.simulate("change", this.parentNode, t, !0)
                }), le._data(e, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return le.event.remove(this, "._change"), !Pe.test(this.nodeName)
        }
    }), le.support.focusinBubbles || le.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = 0,
            i = function (t) {
                le.event.simulate(e, t.target, le.event.fix(t), !0)
            };
        le.event.special[e] = {
            setup: function () {
                0 === n++ && V.addEventListener(t, i, !0)
            },
            teardown: function () {
                0 === --n && V.removeEventListener(t, i, !0)
            }
        }
    }), le.fn.extend({
        on: function (t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (s in t) this.on(s, n, i, t[s], r);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o === !1) o = u;
            else if (!o) return this;
            return 1 === r && (a = o, o = function (t) {
                return le().off(t), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = le.guid++)), this.each(function () {
                le.event.add(this, t, o, i, n)
            })
        },
        one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function (t, n, i) {
            var o, r;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, le(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, n, t[r]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = u), this.each(function () {
                le.event.remove(this, t, i, n)
            })
        },
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        trigger: function (t, e) {
            return this.each(function () {
                le.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? le.event.trigger(t, e, n, !0) : void 0
        }
    }),

    function (t, e) {
        function n(t) {
            return pe.test(t + "")
        }

        function i() {
            var t, e = [];
            return t = function (n, i) {
                return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = i
            }
        }

        function o(t) {
            return t[O] = !0, t
        }

        function r(t) {
            var e = D.createElement("div");
            try {
                return t(e)
            } catch (n) {
                return !1
            } finally {
                e = null
            }
        }

        function s(t, e, n, i) {
            var o, r, s, a, l, u, c, h, p, m;
            if ((e ? e.ownerDocument || e : B) !== D && A(e), e = e || D, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (!H && !i) {
                if (o = me.exec(t))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && F(e, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return K.apply(n, G.call(e.getElementsByTagName(t), 0)), n;
                        if ((s = o[3]) && W.getByClassName && e.getElementsByClassName) return K.apply(n, G.call(e.getElementsByClassName(s), 0)), n
                    }
                if (W.qsa && !q.test(t)) {
                    if (c = !0, h = O, p = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = f(t), (c = e.getAttribute("id")) ? h = c.replace(ye, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + d(u[l]);
                        p = he.test(t) && e.parentNode || e, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(n, G.call(p.querySelectorAll(m), 0)), n
                    } catch (g) {} finally {
                        c || e.removeAttribute("id")
                    }
                }
            }
            return x(t.replace(se, "$1"), e, n, i)
        }

        function a(t, e) {
            var n = e && t,
                i = n && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return o(function (e) {
                return e = +e, o(function (n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function f(t, e) {
            var n, i, o, r, a, l, u, c = X[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], u = k.preFilter; a;) {
                (!n || (i = ae.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = ue.exec(a)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(se, " ")
                }), a = a.slice(n.length));
                for (r in k.filter)!(i = de[r].exec(a)) || u[r] && !(i = u[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? s.error(t) : X(t, l).slice(0)
        }

        function d(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function h(t, e, n) {
            var i = e.dir,
                o = n && "parentNode" === i,
                r = I++;
            return e.first ? function (e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, r)
            } : function (e, n, s) {
                var a, l, u, c = R + " " + r;
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o)
                            if (u = e[O] || (e[O] = {}), (l = u[i]) && l[0] === c) {
                                if ((a = l[1]) === !0 || a === T) return a === !0
                            } else if (l = u[i] = [c], l[1] = t(e, n, s) || T, l[1] === !0) return !0
            }
        }

        function p(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), u && e.push(a));
            return s
        }

        function g(t, e, n, i, r, s) {
            return i && !i[O] && (i = g(i)), r && !r[O] && (r = g(r, s)), o(function (o, s, a, l) {
                var u, c, f, d = [],
                    h = [],
                    p = s.length,
                    g = o || b(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !o && e ? g : m(g, d, t, a, l),
                    y = n ? r || (o ? t : p || i) ? [] : s : v;
                if (n && n(v, y, a, l), i)
                    for (u = m(y, h), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (y[h[c]] = !(v[h[c]] = f));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = y.length; c--;)(f = y[c]) && u.push(v[c] = f);
                            r(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (u = r ? Z.call(o, f) : d[c]) > -1 && (o[u] = !(s[u] = f))
                    }
                } else y = m(y === s ? y.splice(p, y.length) : y), r ? r(null, s, y, l) : K.apply(s, y)
            })
        }

        function v(t) {
            for (var e, n, i, o = t.length, r = k.relative[t[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = h(function (t) {
                    return t === e
                }, s, !0), u = h(function (t) {
                    return Z.call(e, t) > -1
                }, s, !0), c = [
                    function (t, n, i) {
                        return !r && (i || n !== j) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                    }
                ]; o > a; a++)
                if (n = k.relative[t[a].type]) c = [h(p(c), n)];
                else {
                    if (n = k.filter[t[a].type].apply(null, t[a].matches), n[O]) {
                        for (i = ++a; o > i && !k.relative[t[i].type]; i++);
                        return g(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1)).replace(se, "$1"), n, i > a && v(t.slice(a, i)), o > i && v(t = t.slice(i)), o > i && d(t))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function y(t, e) {
            var n = 0,
                i = e.length > 0,
                r = t.length > 0,
                a = function (o, a, l, u, c) {
                    var f, d, h, p = [],
                        g = 0,
                        v = "0",
                        y = o && [],
                        b = null != c,
                        x = j,
                        w = o || r && k.find.TAG("*", c && a.parentNode || a),
                        C = R += null == x ? 1 : Math.random() || .1;
                    for (b && (j = a !== D && a, T = n); null != (f = w[v]); v++) {
                        if (r && f) {
                            for (d = 0; h = t[d++];)
                                if (h(f, a, l)) {
                                    u.push(f);
                                    break
                                }
                            b && (R = C, T = ++n)
                        }
                        i && ((f = !h && f) && g--, o && y.push(f))
                    }
                    if (g += v, i && v !== g) {
                        for (d = 0; h = e[d++];) h(y, p, a, l);
                        if (o) {
                            if (g > 0)
                                for (; v--;) y[v] || p[v] || (p[v] = J.call(u));
                            p = m(p)
                        }
                        K.apply(u, p), b && !o && p.length > 0 && g + e.length > 1 && s.uniqueSort(u)
                    }
                    return b && (R = C, j = x), y
                };
            return i ? o(a) : a
        }

        function b(t, e, n) {
            for (var i = 0, o = e.length; o > i; i++) s(t, e[i], n);
            return n
        }

        function x(t, e, n, i) {
            var o, r, s, a, l, u = f(t);
            if (!i && 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === e.nodeType && !H && k.relative[r[1].type]) {
                    if (e = k.find.ID(s.matches[0].replace(xe, we), e)[0], !e) return n;
                    t = t.slice(r.shift().value.length)
                }
                for (o = de.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (i = l(s.matches[0].replace(xe, we), he.test(r[0].type) && e.parentNode || e))) {
                        if (r.splice(o, 1), t = i.length && d(r), !t) return K.apply(n, G.call(i, 0)), n;
                        break
                    }
            }
            return N(t, u)(i, e, H, n, he.test(t)), n
        }

        function w() {}
        var C, T, k, $, E, N, S, j, A, D, L, H, q, M, P, F, _, O = "sizzle" + -new Date,
            B = t.document,
            W = {}, R = 0,
            I = 0,
            z = i(),
            X = i(),
            Q = i(),
            U = typeof e,
            V = 1 << 31,
            Y = [],
            J = Y.pop,
            K = Y.push,
            G = Y.slice,
            Z = Y.indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            }, te = "[\\x20\\t\\r\\n\\f]",
            ee = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = ee.replace("w", "w#"),
            ie = "([*^$|!~]?=)",
            oe = "\\[" + te + "*(" + ee + ")" + te + "*(?:" + ie + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + te + "*\\]",
            re = ":(" + ee + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
            se = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
            ae = new RegExp("^" + te + "*," + te + "*"),
            ue = new RegExp("^" + te + "*([\\x20\\t\\r\\n\\f>+~])" + te + "*"),
            ce = new RegExp(re),
            fe = new RegExp("^" + ne + "$"),
            de = {
                ID: new RegExp("^#(" + ee + ")"),
                CLASS: new RegExp("^\\.(" + ee + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + ee + ")['\"]?\\]"),
                TAG: new RegExp("^(" + ee.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
            }, he = /[\x20\t\r\n\f]*[+~]/,
            pe = /^[^{]+\{\s*\[native code/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ye = /'|\\/g,
            be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            we = function (t, e) {
                var n = "0x" + e - 65536;
                return n !== n ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            G.call(B.documentElement.childNodes, 0)[0].nodeType
        } catch (Ce) {
            G = function (t) {
                for (var e, n = []; e = this[t++];) n.push(e);
                return n
            }
        }
        E = s.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, A = s.setDocument = function (t) {
            var i = t ? t.ownerDocument || t : B;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, L = i.documentElement, H = E(i), W.tagNameNoComments = r(function (t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), W.attributes = r(function (t) {
                t.innerHTML = "<select></select>";
                var e = typeof t.lastChild.getAttribute("multiple");
                return "boolean" !== e && "string" !== e
            }), W.getByClassName = r(function (t) {
                return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
            }), W.getByName = r(function (t) {
                t.id = O + 0, t.innerHTML = "<a name='" + O + "'></a><div name='" + O + "'></div>", L.insertBefore(t, L.firstChild);
                var e = i.getElementsByName && i.getElementsByName(O).length === 2 + i.getElementsByName(O + 0).length;
                return W.getIdNotName = !i.getElementById(O), L.removeChild(t), e
            }), k.attrHandle = r(function (t) {
                return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== U && "#" === t.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (t) {
                    return t.getAttribute("href", 2)
                },
                type: function (t) {
                    return t.getAttribute("type")
                }
            }, W.getIdNotName ? (k.find.ID = function (t, e) {
                if (typeof e.getElementById !== U && !H) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (k.find.ID = function (t, n) {
                if (typeof n.getElementById !== U && !H) {
                    var i = n.getElementById(t);
                    return i ? i.id === t || typeof i.getAttributeNode !== U && i.getAttributeNode("id").value === t ? [i] : e : []
                }
            }, k.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    var n = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), k.find.TAG = W.tagNameNoComments ? function (t, e) {
                return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, k.find.NAME = W.getByName && function (t, e) {
                return typeof e.getElementsByName !== U ? e.getElementsByName(name) : void 0
            }, k.find.CLASS = W.getByClassName && function (t, e) {
                return typeof e.getElementsByClassName === U || H ? void 0 : e.getElementsByClassName(t)
            }, M = [], q = [":focus"], (W.qsa = n(i.querySelectorAll)) && (r(function (t) {
                t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || q.push("\\[" + te + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || q.push(":checked")
            }), r(function (t) {
                t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && q.push("[*^$]=" + te + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), q.push(",.*:")
            })), (W.matchesSelector = n(P = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (t) {
                W.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), M.push("!=", re)
            }), q = new RegExp(q.join("|")), M = new RegExp(M.join("|")), F = n(L.contains) || L.compareDocumentPosition ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, _ = L.compareDocumentPosition ? function (t, e) {
                var n;
                return t === e ? (S = !0, 0) : (n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & n || t.parentNode && 11 === t.parentNode.nodeType ? t === i || F(B, t) ? -1 : e === i || F(B, e) ? 1 : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
            } : function (t, e) {
                var n, o = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    l = [t],
                    u = [e];
                if (t === e) return S = !0, 0;
                if (!r || !s) return t === i ? -1 : e === i ? 1 : r ? -1 : s ? 1 : 0;
                if (r === s) return a(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; l[o] === u[o];) o++;
                return o ? a(l[o], u[o]) : l[o] === B ? -1 : u[o] === B ? 1 : 0
            }, S = !1, [0, 0].sort(_), W.detectDuplicates = S, D) : D
        }, s.matches = function (t, e) {
            return s(t, null, null, e)
        }, s.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== D && A(t), e = e.replace(be, "='$1']"), !(!W.matchesSelector || H || M && M.test(e) || q.test(e))) try {
                var n = P.call(t, e);
                if (n || W.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (i) {}
            return s(e, D, null, [t]).length > 0
        }, s.contains = function (t, e) {
            return (t.ownerDocument || t) !== D && A(t), F(t, e)
        }, s.attr = function (t, e) {
            var n;
            return (t.ownerDocument || t) !== D && A(t), H || (e = e.toLowerCase()), (n = k.attrHandle[e]) ? n(t) : H || W.attributes ? t.getAttribute(e) : ((n = t.getAttributeNode(e)) || t.getAttribute(e)) && t[e] === !0 ? e : n && n.specified ? n.value : null
        }, s.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, s.uniqueSort = function (t) {
            var e, n = [],
                i = 1,
                o = 0;
            if (S = !W.detectDuplicates, t.sort(_), S) {
                for (; e = t[i]; i++) e === t[i - 1] && (o = n.push(i));
                for (; o--;) t.splice(n[o], 1)
            }
            return t
        }, $ = s.getText = function (t) {
            var e, n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += $(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[i]; i++) n += $(e);
            return n
        }, k = s.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: de,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(xe, we), t[3] = (t[4] || t[5] || "").replace(xe, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || s.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && s.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[5] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : n && ce.test(n) && (e = f(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    return "*" === t ? function () {
                        return !0
                    } : (t = t.replace(xe, we).toLowerCase(), function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    })
                },
                CLASS: function (t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + te + ")" + t + "(" + te + "|$)")) && z(t, function (t) {
                        return e.test(t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, e, n) {
                    return function (i) {
                        var o = s.attr(i, t);
                        return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o + " ").indexOf(n) > -1 : "|=" === e ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === o ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, f, d, h, p, m = r !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (f = e; f = f[m];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (c = g[O] || (g[O] = {}), u = c[t] || [], h = u[0] === R && u[1], d = u[0] === R && u[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (d = h = 0) || p.pop();)
                                    if (1 === f.nodeType && ++d && f === e) {
                                        c[t] = [R, h, d];
                                        break
                                    }
                            } else if (y && (u = (e[O] || (e[O] = {}))[t]) && u[0] === R) d = u[1];
                            else
                                for (;
                                    (f = ++h && f && f[m] || (d = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[O] || (f[O] = {}))[t] = [R, d]), f !== e)););
                            return d -= o, d === i || 0 === d % i && d / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, e) {
                    var n, i = k.pseudos[t] || k.setFilters[t.toLowerCase()] || s.error("unsupported pseudo: " + t);
                    return i[O] ? i(e) : i.length > 1 ? (n = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function (t, n) {
                        for (var o, r = i(t, e), s = r.length; s--;) o = Z.call(t, r[s]), t[o] = !(n[o] = r[s])
                    }) : function (t) {
                        return i(t, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: o(function (t) {
                    var e = [],
                        n = [],
                        i = N(t.replace(se, "$1"));
                    return i[O] ? o(function (t, e, n, o) {
                        for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, o, r) {
                        return e[0] = t, i(e, null, r, n), !n.pop()
                    }
                }),
                has: o(function (t) {
                    return function (e) {
                        return s(t, e).length > 0
                    }
                }),
                contains: o(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || $(e)).indexOf(t) > -1
                    }
                }),
                lang: o(function (t) {
                    return fe.test(t || "") || s.error("unsupported lang: " + t), t = t.replace(xe, we).toLowerCase(),

                    function (e) {
                        var n;
                        do
                            if (n = H ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === L
                },
                focus: function (t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !! t.checked || "option" === e && !! t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                    return !0
                },
                parent: function (t) {
                    return !k.pseudos.empty(t)
                },
                header: function (t) {
                    return ve.test(t.nodeName)
                },
                input: function (t) {
                    return ge.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (t, e) {
                    return [e - 1]
                }),
                eq: c(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        };
        for (C in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[C] = l(C);
        for (C in {
            submit: !0,
            reset: !0
        }) k.pseudos[C] = u(C);
        N = s.compile = function (t, e) {
            var n, i = [],
                o = [],
                r = Q[t + " "];
            if (!r) {
                for (e || (e = f(t)), n = e.length; n--;) r = v(e[n]), r[O] ? i.push(r) : o.push(r);
                r = Q(t, y(o, i))
            }
            return r
        }, k.pseudos.nth = k.pseudos.eq, k.filters = w.prototype = k.pseudos, k.setFilters = new w, A(), s.attr = le.attr, le.find = s, le.expr = s.selectors, le.expr[":"] = le.expr.pseudos, le.unique = s.uniqueSort, le.text = s.getText, le.isXMLDoc = s.isXML, le.contains = s.contains
    }(t);
    var We = /Until$/,
        Re = /^(?:parents|prev(?:Until|All))/,
        Ie = /^.[^:#\[\.,]*$/,
        ze = le.expr.match.needsContext,
        Xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    le.fn.extend({
        find: function (t) {
            var e, n, i, o = this.length;
            if ("string" != typeof t) return i = this, this.pushStack(le(t).filter(function () {
                for (e = 0; o > e; e++)
                    if (le.contains(i[e], this)) return !0
            }));
            for (n = [], e = 0; o > e; e++) le.find(t, this[e], n);
            return n = this.pushStack(o > 1 ? le.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + t, n
        },
        has: function (t) {
            var e, n = le(t, this),
                i = n.length;
            return this.filter(function () {
                for (e = 0; i > e; e++)
                    if (le.contains(this, n[e])) return !0
            })
        },
        not: function (t) {
            return this.pushStack(f(this, t, !1))
        },
        filter: function (t) {
            return this.pushStack(f(this, t, !0))
        },
        is: function (t) {
            return !!t && ("string" == typeof t ? ze.test(t) ? le(t, this.context).index(this[0]) >= 0 : le.filter(t, this).length > 0 : this.filter(t).length > 0)
        },
        closest: function (t, e) {
            for (var n, i = 0, o = this.length, r = [], s = ze.test(t) || "string" != typeof t ? le(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType;) {
                    if (s ? s.index(n) > -1 : le.find.matchesSelector(n, t)) {
                        r.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(r.length > 1 ? le.unique(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? le.inArray(this[0], le(t)) : le.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            var n = "string" == typeof t ? le(t, e) : le.makeArray(t && t.nodeType ? [t] : t),
                i = le.merge(this.get(), n);
            return this.pushStack(le.unique(i))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), le.fn.andSelf = le.fn.addBack, le.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return le.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return le.dir(t, "parentNode", n)
        },
        next: function (t) {
            return c(t, "nextSibling")
        },
        prev: function (t) {
            return c(t, "previousSibling")
        },
        nextAll: function (t) {
            return le.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return le.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return le.dir(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return le.dir(t, "previousSibling", n)
        },
        siblings: function (t) {
            return le.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return le.sibling(t.firstChild)
        },
        contents: function (t) {
            return le.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : le.merge([], t.childNodes)
        }
    }, function (t, e) {
        le.fn[t] = function (n, i) {
            var o = le.map(this, e, n);
            return We.test(t) || (i = n), i && "string" == typeof i && (o = le.filter(i, o)), o = this.length > 1 && !Xe[t] ? le.unique(o) : o, this.length > 1 && Re.test(t) && (o = o.reverse()), this.pushStack(o)
        }
    }), le.extend({
        filter: function (t, e, n) {
            return n && (t = ":not(" + t + ")"), 1 === e.length ? le.find.matchesSelector(e[0], t) ? [e[0]] : [] : le.find.matches(t, e)
        },
        dir: function (t, n, i) {
            for (var o = [], r = t[n]; r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !le(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
            return o
        },
        sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var Qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ue = / jQuery\d+="(?:null|\d+)"/g,
        Ve = new RegExp("<(?:" + Qe + ")[\\s/>]", "i"),
        Ye = /^\s+/,
        Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ke = /<([\w:]+)/,
        Ge = /<tbody/i,
        Ze = /<|&#?\w+;/,
        tn = /<(?:script|style|link)/i,
        en = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        on = /^$|\/(?:java|ecma)script/i,
        rn = /^true\/(.*)/,
        sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        an = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, ln = d(V),
        un = ln.appendChild(V.createElement("div"));
    an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, le.fn.extend({
        text: function (t) {
            return le.access(this, function (t) {
                return t === e ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function (t) {
            if (le.isFunction(t)) return this.each(function (e) {
                le(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = le(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return le.isFunction(t) ? this.each(function (e) {
                le(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = le(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = le.isFunction(t);
            return this.each(function (n) {
                le(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var n, i = 0; null != (n = this[i]); i++)(!t || le.filter(t, [n]).length > 0) && (e || 1 !== n.nodeType || le.cleanData(b(n)), n.parentNode && (e && le.contains(n.ownerDocument, n) && g(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && le.cleanData(b(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && le.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return le.clone(this, t, e)
            })
        },
        html: function (t) {
            return le.access(this, function (t) {
                var n = this[0] || {}, i = 0,
                    o = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Ue, "") : e;
                if (!("string" != typeof t || tn.test(t) || !le.support.htmlSerialize && Ve.test(t) || !le.support.leadingWhitespace && Ye.test(t) || an[(Ke.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Je, "<$1></$2>");
                    try {
                        for (; o > i; i++) n = this[i] || {}, 1 === n.nodeType && (le.cleanData(b(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (r) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function (t) {
            var e = le.isFunction(t);
            return e || "string" == typeof t || (t = le(t).not(this).detach()), this.domManip([t], !0, function (t) {
                var e = this.nextSibling,
                    n = this.parentNode;
                n && (le(this).remove(), n.insertBefore(t, e))
            })
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, n, i) {
            t = ee.apply([], t);
            var o, r, s, a, l, u, c = 0,
                f = this.length,
                d = this,
                g = f - 1,
                v = t[0],
                y = le.isFunction(v);
            if (y || !(1 >= f || "string" != typeof v || le.support.checkClone) && nn.test(v)) return this.each(function (o) {
                var r = d.eq(o);
                y && (t[0] = v.call(this, o, n ? r.html() : e)), r.domManip(t, n, i)
            });
            if (f && (u = le.buildFragment(t, this[0].ownerDocument, !1, this), o = u.firstChild, 1 === u.childNodes.length && (u = o), o)) {
                for (n = n && le.nodeName(o, "tr"), a = le.map(b(u, "script"), p), s = a.length; f > c; c++) r = u, c !== g && (r = le.clone(r, !0, !0), s && le.merge(a, b(r, "script"))), i.call(n && le.nodeName(this[c], "table") ? h(this[c], "tbody") : this[c], r, c);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, le.map(a, m), c = 0; s > c; c++) r = a[c], on.test(r.type || "") && !le._data(r, "globalEval") && le.contains(l, r) && (r.src ? le.ajax({
                        url: r.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : le.globalEval((r.text || r.textContent || r.innerHTML || "").replace(sn, "")));
                u = o = null
            }
            return this
        }
    }), le.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        le.fn[t] = function (t) {
            for (var n, i = 0, o = [], r = le(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), le(r[i])[e](n), ne.apply(o, n.get());
            return this.pushStack(o)
        }
    }), le.extend({
        clone: function (t, e, n) {
            var i, o, r, s, a, l = le.contains(t.ownerDocument, t);
            if (le.support.html5Clone || le.isXMLDoc(t) || !Ve.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (un.innerHTML = t.outerHTML, un.removeChild(r = un.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || le.isXMLDoc(t)))
                for (i = b(r), a = b(t), s = 0; null != (o = a[s]); ++s) i[s] && y(o, i[s]);
            if (e)
                if (n)
                    for (a = a || b(t), i = i || b(r), s = 0; null != (o = a[s]); s++) v(o, i[s]);
                else v(t, r);
            return i = b(r, "script"), i.length > 0 && g(i, !l && b(t, "script")), i = a = o = null, r
        },
        buildFragment: function (t, e, n, i) {
            for (var o, r, s, a, l, u, c, f = t.length, h = d(e), p = [], m = 0; f > m; m++)
                if (r = t[m], r || 0 === r)
                    if ("object" === le.type(r)) le.merge(p, r.nodeType ? [r] : r);
                    else if (Ze.test(r)) {
                for (a = a || h.appendChild(e.createElement("div")), l = (Ke.exec(r) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + r.replace(Je, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                if (!le.support.leadingWhitespace && Ye.test(r) && p.push(e.createTextNode(Ye.exec(r)[0])), !le.support.tbody)
                    for (r = "table" !== l || Ge.test(r) ? "<table>" !== c[1] || Ge.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) le.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (le.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else p.push(e.createTextNode(r));
            for (a && h.removeChild(a), le.support.appendChecked || le.grep(b(p, "input"), x), m = 0; r = p[m++];)
                if ((!i || -1 === le.inArray(r, i)) && (s = le.contains(r.ownerDocument, r), a = b(h.appendChild(r), "script"), s && g(a), n))
                    for (o = 0; r = a[o++];) on.test(r.type || "") && n.push(r);
            return a = null, h
        },
        cleanData: function (t, e) {
            for (var n, i, o, r, s = 0, a = le.expando, l = le.cache, u = le.support.deleteExpando, c = le.event.special; null != (n = t[s]); s++)
                if ((e || le.acceptData(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? le.event.remove(n, i) : le.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u ? delete n[a] : typeof n.removeAttribute !== U ? n.removeAttribute(a) : n[a] = null, Z.push(o))
                }
        }
    });
    var cn, fn, dn, hn = /alpha\([^)]*\)/i,
        pn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        gn = /^(none|table(?!-c[ea]).+)/,
        vn = /^margin/,
        yn = new RegExp("^(" + ue + ")(.*)$", "i"),
        bn = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"),
        xn = new RegExp("^([+-])=(" + ue + ")", "i"),
        wn = {
            BODY: "block"
        }, Cn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Tn = {
            letterSpacing: 0,
            fontWeight: 400
        }, kn = ["Top", "Right", "Bottom", "Left"],
        $n = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function (t, n) {
            return le.access(this, function (t, n, i) {
                var o, r, s = {}, a = 0;
                if (le.isArray(n)) {
                    for (r = fn(t), o = n.length; o > a; a++) s[n[a]] = le.css(t, n[a], !1, r);
                    return s
                }
                return i !== e ? le.style(t, n, i) : le.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function () {
            return T(this, !0)
        },
        hide: function () {
            return T(this)
        },
        toggle: function (t) {
            var e = "boolean" == typeof t;
            return this.each(function () {
                (e ? t : C(this)) ? le(this).show() : le(this).hide()
            })
        }
    }), le.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = dn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": le.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, a, l = le.camelCase(n),
                    u = t.style;
                if (n = le.cssProps[l] || (le.cssProps[l] = w(u, l)), a = le.cssHooks[n] || le.cssHooks[l], i === e) return a && "get" in a && (r = a.get(t, !1, o)) !== e ? r : u[n];
                if (s = typeof i, "string" === s && (r = xn.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(le.css(t, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || le.cssNumber[l] || (i += "px"), le.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(t, i, o)) === e))) try {
                    u[n] = i
                } catch (c) {}
            }
        },
        css: function (t, n, i, o) {
            var r, s, a, l = le.camelCase(n);
            return n = le.cssProps[l] || (le.cssProps[l] = w(t.style, l)), a = le.cssHooks[n] || le.cssHooks[l], a && "get" in a && (s = a.get(t, !0, i)), s === e && (s = dn(t, n, o)), "normal" === s && n in Tn && (s = Tn[n]), "" === i || i ? (r = parseFloat(s), i === !0 || le.isNumeric(r) ? r || 0 : s) : s
        },
        swap: function (t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = s[r];
            return o
        }
    }), t.getComputedStyle ? (fn = function (e) {
        return t.getComputedStyle(e, null)
    }, dn = function (t, n, i) {
        var o, r, s, a = i || fn(t),
            l = a ? a.getPropertyValue(n) || a[n] : e,
            u = t.style;
        return a && ("" !== l || le.contains(t.ownerDocument, t) || (l = le.style(t, n)), bn.test(l) && vn.test(n) && (o = u.width, r = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = o, u.minWidth = r, u.maxWidth = s)), l
    }) : V.documentElement.currentStyle && (fn = function (t) {
        return t.currentStyle
    }, dn = function (t, n, i) {
        var o, r, s, a = i || fn(t),
            l = a ? a[n] : e,
            u = t.style;
        return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (o = u.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = o, s && (r.left = s)), "" === l ? "auto" : l
    }), le.each(["height", "width"], function (t, e) {
        le.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? 0 === t.offsetWidth && gn.test(le.css(t, "display")) ? le.swap(t, Cn, function () {
                    return E(t, e, i)
                }) : E(t, e, i) : void 0
            },
            set: function (t, n, i) {
                var o = i && fn(t);
                return k(t, n, i ? $(t, e, i, le.support.boxSizing && "border-box" === le.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), le.support.opacity || (le.cssHooks.opacity = {
        get: function (t, e) {
            return pn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = le.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === le.trim(r.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = hn.test(r) ? r.replace(hn, o) : r + " " + o)
        }
    }), le(function () {
        le.support.reliableMarginRight || (le.cssHooks.marginRight = {
            get: function (t, e) {
                return e ? le.swap(t, {
                    display: "inline-block"
                }, dn, [t, "marginRight"]) : void 0
            }
        }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function (t, e) {
            le.cssHooks[e] = {
                get: function (t, n) {
                    return n ? (n = dn(t, e), bn.test(n) ? le(t).position()[e] + "px" : n) : void 0
                }
            }
        })
    }), le.expr && le.expr.filters && (le.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !le.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || le.css(t, "display"))
    }, le.expr.filters.visible = function (t) {
        return !le.expr.filters.hidden(t)
    }), le.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        le.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + kn[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, vn.test(t) || (le.cssHooks[t + e].set = k)
    });
    var En = /%20/g,
        Nn = /\[\]$/,
        Sn = /\r?\n/g,
        jn = /^(?:submit|button|image|reset|file)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({
        serialize: function () {
            return le.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = le.prop(this, "elements");
                return t ? le.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !le(this).is(":disabled") && An.test(this.nodeName) && !jn.test(t) && (this.checked || !en.test(t))
            }).map(function (t, e) {
                var n = le(this).val();
                return null == n ? null : le.isArray(n) ? le.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Sn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }), le.param = function (t, n) {
        var i, o = [],
            r = function (t, e) {
                e = le.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (n === e && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(t) || t.jquery && !le.isPlainObject(t)) le.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (i in t) j(i, t[i], n, r);
        return o.join("&").replace(En, "+")
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        le.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), le.fn.hover = function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    };
    var Dn, Ln, Hn = le.now(),
        qn = /\?/,
        Mn = /#.*$/,
        Pn = /([?&])_=[^&]*/,
        Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        _n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        On = /^(?:GET|HEAD)$/,
        Bn = /^\/\//,
        Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Rn = le.fn.load,
        In = {}, zn = {}, Xn = "*/".concat("*");
    try {
        Ln = Y.href
    } catch (Qn) {
        Ln = V.createElement("a"), Ln.href = "", Ln = Ln.href
    }
    Dn = Wn.exec(Ln.toLowerCase()) || [], le.fn.load = function (t, n, i) {
        if ("string" != typeof t && Rn) return Rn.apply(this, arguments);
        var o, r, s, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), le.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && le.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: n
        }).done(function (t) {
            r = arguments, a.html(o ? le("<div>").append(le.parseHTML(t)).find(o) : t)
        }).complete(i && function (t, e) {
            a.each(i, r || [t.responseText, e, t])
        }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        le.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), le.each(["get", "post"], function (t, n) {
        le[n] = function (t, i, o, r) {
            return le.isFunction(i) && (r = r || o, o = i, i = e), le.ajax({
                url: t,
                type: n,
                dataType: r,
                data: i,
                success: o
            })
        }
    }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ln,
            type: "GET",
            isLocal: _n.test(Dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": le.parseJSON,
                "text xml": le.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? L(L(t, le.ajaxSettings), e) : L(le.ajaxSettings, t)
        },
        ajaxPrefilter: A(In),
        ajaxTransport: A(zn),
        ajax: function (t, n) {
            function i(t, n, i, o) {
                var r, f, y, b, w, T = n;
                2 !== x && (x = 2, l && clearTimeout(l), c = e, a = o || "", C.readyState = t > 0 ? 4 : 0, i && (b = H(d, C, i)), t >= 200 && 300 > t || 304 === t ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (le.lastModified[s] = w), w = C.getResponseHeader("etag"), w && (le.etag[s] = w)), 204 === t ? (r = !0, T = "nocontent") : 304 === t ? (r = !0, T = "notmodified") : (r = q(d, b), T = r.state, f = r.data, y = r.error, r = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || T) + "", r ? m.resolveWith(h, [f, T, C]) : m.rejectWith(h, [C, T, y]), C.statusCode(v), v = e, u && p.trigger(r ? "ajaxSuccess" : "ajaxError", [C, d, r ? f : y]), g.fireWith(h, [C, T]), u && (p.trigger("ajaxComplete", [C, d]), --le.active || le.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var o, r, s, a, l, u, c, f, d = le.ajaxSetup({}, n),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? le(h) : le.event,
                m = le.Deferred(),
                g = le.Callbacks("once memory"),
                v = d.statusCode || {}, y = {}, b = {}, x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === x) {
                            if (!f)
                                for (f = {}; e = Fn.exec(a);) f[e[1].toLowerCase()] = e[2];
                            e = f[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return x || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return x || (d.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) v[e] = [v[e], t[e]];
                            else C.always(t[C.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, d.url = ((t || d.url || Ln) + "").replace(Mn, "").replace(Bn, Dn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = le.trim(d.dataType || "*").toLowerCase().match(ce) || [""], null == d.crossDomain && (o = Wn.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === Dn[1] && o[2] === Dn[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == (Dn[3] || ("http:" === Dn[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = le.param(d.data, d.traditional)), D(In, d, n, C), 2 === x) return C;
            u = d.global, u && 0 === le.active++ && le.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !On.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (qn.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Pn.test(s) ? s.replace(Pn, "$1_=" + Hn++) : s + (qn.test(s) ? "&" : "?") + "_=" + Hn++)), d.ifModified && (le.lastModified[s] && C.setRequestHeader("If-Modified-Since", le.lastModified[s]), le.etag[s] && C.setRequestHeader("If-None-Match", le.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) C.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, C, d) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) C[r](d[r]);
            if (c = D(zn, d, n, C)) {
                C.readyState = 1, u && p.trigger("ajaxSend", [C, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    C.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, c.send(y, i)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return C
        },
        getScript: function (t, n) {
            return le.get(t, e, n, "script")
        },
        getJSON: function (t, e, n) {
            return le.get(t, e, n, "json")
        }
    }), le.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return le.globalEval(t), t
            }
        }
    }), le.ajaxPrefilter("script", function (t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), le.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var n, i = V.head || le("head")[0] || V.documentElement;
            return {
                send: function (e, o) {
                    n = V.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e) {
                        (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function () {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var Un = [],
        Vn = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Un.pop() || le.expando + "_" + Hn++;
            return this[t] = !0, t
        }
    }), le.ajaxPrefilter("json jsonp", function (n, i, o) {
        var r, s, a, l = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vn, "$1" + r) : n.jsonp !== !1 && (n.url += (qn.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function () {
            return a || le.error(r + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = t[r], t[r] = function () {
            a = arguments
        }, o.always(function () {
            t[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, Un.push(r)), a && le.isFunction(s) && s(a[0]), a = s = e
        }), "script") : void 0
    });
    var Yn, Jn, Kn = 0,
        Gn = t.ActiveXObject && function () {
            var t;
            for (t in Yn) Yn[t](e, !0)
        };
    le.ajaxSettings.xhr = t.ActiveXObject ? function () {
        return !this.isLocal && M() || P()
    } : M, Jn = le.ajaxSettings.xhr(), le.support.cors = !! Jn && "withCredentials" in Jn, Jn = le.support.ajax = !! Jn, Jn && le.ajaxTransport(function (n) {
        if (!n.crossDomain || le.support.cors) {
            var i;
            return {
                send: function (o, r) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in o) l.setRequestHeader(a, o[a])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), i = function (t, o) {
                        var a, u, c, f;
                        try {
                            if (i && (o || 4 === l.readyState))
                                if (i = e, s && (l.onreadystatechange = le.noop, Gn && delete Yn[s]), o) 4 !== l.readyState && l.abort();
                                else {
                                    f = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (d) {
                                        c = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = f.text ? 200 : 404
                                }
                        } catch (h) {
                            o || r(-1, h)
                        }
                        f && r(a, c, f, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Kn, Gn && (Yn || (Yn = {}, le(t).unload(Gn)), Yn[s] = i), l.onreadystatechange = i) : i()
                },
                abort: function () {
                    i && i(e, !0)
                }
            }
        }
    });
    var Zn, ti, ei = /^(?:toggle|show|hide)$/,
        ni = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
        ii = /queueHooks$/,
        oi = [W],
        ri = {
            "*": [
                function (t, e) {
                    var n, i, o = this.createTween(t, e),
                        r = ni.exec(e),
                        s = o.cur(),
                        a = +s || 0,
                        l = 1,
                        u = 20;
                    if (r) {
                        if (n = +r[2], i = r[3] || (le.cssNumber[t] ? "" : "px"), "px" !== i && a) {
                            a = le.css(o.elem, t, !0) || n || 1;
                            do l = l || ".5", a /= l, le.style(o.elem, t, a + i); while (l !== (l = o.cur() / s) && 1 !== l && --u)
                        }
                        o.unit = i, o.start = a, o.end = r[1] ? a + (r[1] + 1) * n : n
                    }
                    return o
                }
            ]
        };
    le.Animation = le.extend(O, {
        tweener: function (t, e) {
            le.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; o > i; i++) n = t[i], ri[n] = ri[n] || [], ri[n].unshift(e)
        },
        prefilter: function (t, e) {
            e ? oi.unshift(t) : oi.push(t)
        }
    }), le.Tween = R, R.prototype = {
        constructor: R,
        init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (le.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = R.propHooks[this.prop];
            return t && t.get ? t.get(this) : R.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = R.propHooks[this.prop];
            return this.pos = e = this.options.duration ? le.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = le.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                le.fx.step[t.prop] ? le.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[le.cssProps[t.prop]] || le.cssHooks[t.prop]) ? le.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, le.each(["toggle", "show", "hide"], function (t, e) {
        var n = le.fn[e];
        le.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, i, o)
        }
    }), le.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (t, e, n, i) {
            var o = le.isEmptyObject(t),
                r = le.speed(e, n, i),
                s = function () {
                    var e = O(this, le.extend({}, t), r);
                    s.finish = function () {
                        e.stop(!0)
                    }, (o || le._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (t, n, i) {
            var o = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0,
                    n = null != t && t + "queueHooks",
                    r = le.timers,
                    s = le._data(this);
                if (n) s[n] && s[n].stop && o(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && ii.test(n) && o(s[n]);
                for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                (e || !i) && le.dequeue(this, t)
            })
        },
        finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = le._data(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = le.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, le.queue(this, t, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), le.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        le.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), le.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? le.extend({}, t) : {
            complete: n || !n && e || le.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !le.isFunction(e) && e
        };
        return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
        }, i
    }, le.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, le.timers = [], le.fx = R.prototype.init, le.fx.tick = function () {
        var t, n = le.timers,
            i = 0;
        for (Zn = le.now(); i < n.length; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
        n.length || le.fx.stop(), Zn = e
    }, le.fx.timer = function (t) {
        t() && le.timers.push(t) && le.fx.start()
    }, le.fx.interval = 13, le.fx.start = function () {
        ti || (ti = setInterval(le.fx.tick, le.fx.interval))
    }, le.fx.stop = function () {
        clearInterval(ti), ti = null
    }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function (t) {
        return le.grep(le.timers, function (e) {
            return t === e.elem
        }).length
    }), le.fn.offset = function (t) {
        if (arguments.length) return t === e ? this : this.each(function (e) {
            le.offset.setOffset(this, t, e)
        });
        var n, i, o = {
                top: 0,
                left: 0
            }, r = this[0],
            s = r && r.ownerDocument;
        if (s) return n = s.documentElement, le.contains(n, r) ? (typeof r.getBoundingClientRect !== U && (o = r.getBoundingClientRect()), i = z(s), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, le.offset = {
        setOffset: function (t, e, n) {
            var i = le.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var o, r, s = le(t),
                a = s.offset(),
                l = le.css(t, "top"),
                u = le.css(t, "left"),
                c = ("absolute" === i || "fixed" === i) && le.inArray("auto", [l, u]) > -1,
                f = {}, d = {};
            c ? (d = s.position(), o = d.top, r = d.left) : (o = parseFloat(l) || 0, r = parseFloat(u) || 0), le.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : s.css(f)
        }
    }, le.fn.extend({
        position: function () {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                return "fixed" === le.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), le.nodeName(t[0], "html") || (n = t.offset()), n.top += le.css(t[0], "borderTopWidth", !0), n.left += le.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - le.css(i, "marginTop", !0),
                    left: e.left - n.left - le.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || V.documentElement; t && !le.nodeName(t, "html") && "static" === le.css(t, "position");) t = t.offsetParent;
                return t || V.documentElement
            })
        }
    }), le.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, n) {
        var i = /Y/.test(n);
        le.fn[t] = function (o) {
            return le.access(this, function (t, o, r) {
                var s = z(t);
                return r === e ? s ? n in s ? s[n] : s.document.documentElement[o] : t[o] : (s ? s.scrollTo(i ? le(s).scrollLeft() : r, i ? r : le(s).scrollTop()) : t[o] = r, void 0)
            }, t, o, arguments.length, null)
        }
    }), le.each({
        Height: "height",
        Width: "width"
    }, function (t, n) {
        le.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function (i, o) {
            le.fn[o] = function (o, r) {
                var s = arguments.length && (i || "boolean" != typeof o),
                    a = i || (o === !0 || r === !0 ? "margin" : "border");
                return le.access(this, function (n, i, o) {
                    var r;
                    return le.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? le.css(n, i, a) : le.style(n, i, o, a)
                }, n, s ? o : e, s, null)
            }
        })
    }), t.jQuery = t.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return le
    })
}(window),

function (t, e) {
    var n = function () {
        var e = t._data(document, "events");
        return e && e.click && t.grep(e.click, function (t) {
            return "rails" === t.namespace
        }).length
    };
    n() && t.error("jquery-ujs has already been loaded!");
    var i;
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (e, n, i) {
            var o = t.Event(n);
            return e.trigger(o, i), o.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t.attr("href")
        },
        handleRemote: function (n) {
            var o, r, s, a, l, u, c, f;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null : a, u = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    o = n.attr("method"), r = n.attr("action"), s = n.serializeArray();
                    var d = n.data("ujs:submit-button");
                    d && (s.push(d), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (o = n.data("method"), r = n.data("url"), s = n.serialize(), n.data("params") && (s = s + "&" + n.data("params"))) : (o = n.data("method"), r = i.href(n), s = n.data("params") || null);
                f = {
                    type: o || "GET",
                    data: s,
                    dataType: c,
                    beforeSend: function (t, o) {
                        return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), i.fire(n, "ajax:beforeSend", [t, o])
                    },
                    success: function (t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function (t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function (t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                }, u && (f.xhrFields = {
                    withCredentials: u
                }), r && (f.url = r);
                var h = i.ajax(f);
                return n.trigger("ajax:send", h), h
            }
            return !1
        },
        handleMethod: function (n) {
            var o = i.href(n),
                r = n.data("method"),
                s = n.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                u = t('<form method="post" action="' + o + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        disableFormElements: function (e) {
            e.find(i.disableSelector).each(function () {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function (e) {
            e.find(i.enableSelector).each(function () {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function (t) {
            var e, n = t.data("confirm"),
                o = !1;
            return n ? (i.fire(t, "confirm") && (o = i.confirm(n), e = i.fire(t, "confirm:complete", [o])), o && e) : !0
        },
        blankInputs: function (e, n, i) {
            var o, r, s = t(),
                a = n || "input,textarea",
                l = e.find(a);
            return l.each(function () {
                if (o = t(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                    s = s.add(o)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function (t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, i) {
            var o = n.data("events"),
                r = !0;
            return o !== e && o.submit !== e && t.each(o.submit, function (t, e) {
                return "function" == typeof e.handler ? r = e.handler(i) : void 0
            }), r
        },
        disableElement: function (t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.data("ujs:enable-with", !1)), t.unbind("click.railsDisable")
        }
    }, i.fire(t(document), "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), t(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(t(this))
    }), t(document).delegate(i.linkClickSelector, "click.rails", function (n) {
        var o = t(this),
            r = o.data("method"),
            s = o.data("params");
        if (!i.allowAction(o)) return i.stopEverything(n);
        if (o.is(i.linkDisableSelector) && i.disableElement(o), o.data("remote") !== e) {
            if (!(!n.metaKey && !n.ctrlKey || r && "GET" !== r || s)) return !0;
            var a = i.handleRemote(o);
            return a === !1 ? i.enableElement(o) : a.error(function () {
                i.enableElement(o)
            }), !1
        }
        return o.data("method") ? (i.handleMethod(o), !1) : void 0
    }), t(document).delegate(i.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), t(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var o = t(this),
            r = o.data("remote") !== e,
            s = i.blankInputs(o, i.requiredInputSelector),
            a = i.nonBlankInputs(o, i.fileInputSelector);
        if (!i.allowAction(o)) return i.stopEverything(n);
        if (s && o.attr("novalidate") == e && i.fire(o, "ajax:aborted:required", [s])) return i.stopEverything(n);
        if (r) {
            if (a) {
                setTimeout(function () {
                    i.disableFormElements(o)
                }, 13);
                var l = i.fire(o, "ajax:aborted:file", [a]);
                return l || setTimeout(function () {
                    i.enableFormElements(o)
                }, 13), l
            }
            return !t.support.submitBubbles && t().jquery < "1.7" && i.callFormSubmitBindings(o, n) === !1 ? i.stopEverything(n) : (i.handleRemote(o), !1)
        }
        setTimeout(function () {
            i.disableFormElements(o)
        }, 13)
    }), t(document).delegate(i.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var o = n.attr("name"),
            r = o ? {
                name: o,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", r)
    }), t(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
        this == e.target && i.disableFormElements(t(this))
    }), t(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function () {
        var e = t("meta[name=csrf-token]").attr("content"),
            n = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + n + '"]').val(e)
    }))
}



(jQuery), $(document).ready(function () {
    $("#add").click(function () {
        $("#content, #form_data").empty(), $(".answers, .quest, .inputs, #send").empty(), $("#form_data").append('<p align="center"> Выбирите тип вопроса:<ul class="unstyled"><li>Один ответ: <input type="radio" name="quest[tip_vop]" value="1"  /></li><li>Несколько ответов: <input type="radio" name="quest[tip_vop]" value="2" /></li><li>Ответ словом: <input type="radio" name="quest[tip_vop]" value="3" /></li><li>С загрузкой файла: <input type="radio" name="quest[tip_vop]" value="4" /></li></ul>').fadeIn("slow"), $("#form_data input:radio").click(function () {
            var t = 0;
            $(".answers, .quest, .inputs, #send").empty();
            var e = $("input:radio:checked").val();
            switch (e) {
            case "1":
                type = "radio";
                break;
            case "2":
                type = "checkbox";
                break;
            case "3":
                type = "hidden";
                break;
            case "4":
                type = "file";
            }
            if ("4" == e) {
                var n = $("#task_id input:hidden").attr("value");
                $(".answers").append('<iframe src="../upload/' + n + '/new_load"></iframe>').fadeIn("slow");
            } else {
                for ($(".quest").append('<span>Введите вопрос:</span><br><input id="title"  type="text" name="quest[title]" value = ""/><br><span>Введите вес вопроса:</span><br><input id="title"  type="number" step="0.1" min="0.1" max="1" name="quest[cost]" value = "0.1"/><br>').fadeIn("slow"), $(".answers").append("<span>Ответ :</span> <br>").fadeIn("slow"), "hidden" == type && (t = 4); 5 > t; t++) $(".answers").append('<li id="' + t + '"><input name="status[]" value="' + t + '"  type="' + type + '"/> ' + '<input name="answer[]" type="text"/>' + "</li>").fadeIn("slow");
                "hidden" != type && $("#send").append('<a href="#" id="add_answer" class="btn btn-info">+</a> <a href="#" id="remove" class="btn btn-info">-</a>').fadeIn("slow"), $("#send").append(' <input name="submit" type="submit" class="submit btn btn-primary" value="Готово"><br/><br/>').fadeIn("slow");
            }
            $("#remove").click(function () {
                t > 1 && ($("#" + (t - 1)).remove(), t--)
            }), $("#add_answer").click(function () {
                10 > t && ($(".answers").append('<li id="' + t + '"><input name="status[]" value="' + t + '"  type="' + type + '"/> ' + '<input name="answer[]" type="text"/></li>').fadeIn("slow"), t++)
            }), $(".submit").click(function (t) {

                var e = $("meta[name='csrf-token']").attr("content");
                $.ajaxSetup({
                    headers: {
                        "X-CSRF-Token": e
                    }
                }), t.preventDefault();
                var n = $("#form_data, #task_id, #answers, .quest").find("input").serialize();
                
                console.log(n), $.ajax({

                    type: 'POST',
                    data: n,
                    success: function () {
                        console.log("done")
                    }
                }), location.reload()
            })
        })
    }), $(".update").click(function () {
        $(".answers, .quest, .inputs, #send, #form_data").empty();
        var t = $("meta[name='csrf-token']").attr("content");
        $.ajaxSetup({
            headers: {
                "X-CSRF-Token": t
            }
        }), $.ajax({
            url: "/admin/quests/" + $(this).attr("name") + "/edit",
            type: "get",
            success: function (t) {
                $("#content").html(t)
            }
        })
    })
}),

function () {}.call(this),





!function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),/* ==========================================================
 * bootstrap-alert.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,o=t(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=t(r),e&&e.preventDefault(),i.length||(i=o.hasClass("alert")?o:o.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),o=i.data("alert");o||i.data("alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),/* ============================================================
 * bootstrap-button.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),o=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[o]()),n[o](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),o=i.data("button"),r="object"==typeof n&&n;o||i.data("button",o=new e(this,r)),"toggle"==n?o.toggle():n&&o.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),/* ==========================================================
 * bootstrap-carousel.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var n=this.getActiveIndex(),i=this;if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,n){var i,o=this.$element.find(".item.active"),r=n||o[e](),s=this.interval,a="next"==e?"left":"right",l="next"==e?"first":"last",u=this;if(this.sliding=!0,s&&this.pause(),r=r.length?r:this.$element.find(".item")[l](),i=t.Event("slide",{relatedTarget:r[0],direction:a}),!r.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(u.$indicators.children()[u.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;r.addClass(e),r[0].offsetWidth,o.addClass(a),r.addClass(a),this.$element.one(t.support.transition.end,function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("carousel"),r=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),s="string"==typeof n?n:r.slide;o||i.data("carousel",o=new e(this,r)),"number"==typeof n?o.to(n):s?o[s]():r.interval&&o.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i,o=t(this),r=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},r.data(),o.data());r.carousel(s),(i=o.attr("data-slide-to"))&&r.data("carousel").pause().to(i).cycle(),e.preventDefault()})}(window.jQuery),/* =============================================================
 * bootstrap-collapse.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,n),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){var e,n,i,o;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),n=t.camelCase(["scroll",e].join("-")),i=this.$parent&&this.$parent.find("> .accordion-group > .in"),i&&i.length){if(o=i.data("collapse"),o&&o.transitioning)return;i.collapse("hide"),o||i.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][n])}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,n,i){var o=this,r=function(){"show"==n.type&&o.reset(),o.transitioning=0,o.$element.trigger(i)};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,r):r())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),o=i.data("collapse"),r=t.extend({},t.fn.collapse.defaults,i.data(),"object"==typeof n&&n);o||i.data("collapse",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),r=t(o).data("collapse")?"toggle":i.data();i[t(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(o).collapse(r)})}(window.jQuery),/* ============================================================
 * bootstrap-dropdown.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";function e(){t(i).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,i=e.attr("data-target");return i||(i=e.attr("href"),i=i&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),n=i&&t(i),n&&n.length||(n=e.parent()),n}var i="[data-toggle=dropdown]",o=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(){var i,o,r=t(this);if(!r.is(".disabled, :disabled"))return i=n(r),o=i.hasClass("open"),e(),o||i.toggleClass("open"),r.focus(),!1},keydown:function(e){var o,r,s,a,l;if(/(38|40|27)/.test(e.keyCode)&&(o=t(this),e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled"))){if(s=n(o),a=s.hasClass("open"),!a||a&&27==e.keyCode)return 27==e.which&&s.find(i).focus(),o.click();r=t("[role=menu] li:not(.divider):visible a",s),r.length&&(l=r.index(r.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus())}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("dropdown");i||n.data("dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown-menu",function(t){t.stopPropagation()}).on("click.dropdown.data-api",i,o.prototype.toggle).on("keydown.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(window.jQuery),/* =========================================================
 * bootstrap-modal.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),o=i.data("modal"),r=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);o||i.data("modal",o=new e(this,r)),"string"==typeof n?o[n]():r.show&&o.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),o=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),r=o.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),n.data());e.preventDefault(),o.modal(r).one("hide",function(){n.focus()})})}(window.jQuery),/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,i){var o,r,s,a,l;for(this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.enabled=!0,s=this.options.trigger.split(" "),l=s.length;l--;)a=s[l],"click"==a?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(o="hover"==a?"mouseenter":"focus",r="hover"==a?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var n,i=t.fn[this.type].defaults,o={};return this._options&&t.each(this._options,function(t,e){i[t]!=e&&(o[t]=e)},this),n=t(e.currentTarget)[this.type](o).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},show:function(){var e,n,i,o,r,s,a=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),r="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),i=e[0].offsetWidth,o=e[0].offsetHeight,r){case"bottom":s={top:n.top+n.height,left:n.left+n.width/2-i/2};break;case"top":s={top:n.top-o,left:n.left+n.width/2-i/2};break;case"left":s={top:n.top+n.height/2-o/2,left:n.left-i};break;case"right":s={top:n.top+n.height/2-o/2,left:n.left+n.width}}this.applyPlacement(s,r),this.$element.trigger("shown")}},applyPlacement:function(t,e){var n,i,o,r,s=this.tip(),a=s[0].offsetWidth,l=s[0].offsetHeight;s.offset(t).addClass(e).addClass("in"),n=s[0].offsetWidth,i=s[0].offsetHeight,"top"==e&&i!=l&&(t.top=t.top+l-i,r=!0),"bottom"==e||"top"==e?(o=0,t.left<0&&(o=-2*t.left,t.left=0,s.offset(t),n=s[0].offsetWidth,i=s[0].offsetHeight),this.replaceArrow(o-a+n,n,"left")):this.replaceArrow(i-l,i,"top"),r&&s.offset(t)},replaceArrow:function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){n.off(t.support.transition.end).detach()},500);n.one(t.support.transition.end,function(){clearTimeout(e),n.detach()})}var n=this.tip(),i=t.Event("hide");return this.$element.trigger(i),i.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():n.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var n=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var i=t(this),o=i.data("tooltip"),r="object"==typeof n&&n;o||i.data("tooltip",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(window.jQuery),/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,n=this.options;return t=("function"==typeof n.content?n.content.call(e[0]):n.content)||e.attr("data-content")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var i=t(this),o=i.data("popover"),r="object"==typeof n&&n;o||i.data("popover",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(window.jQuery),/* =============================================================
 * bootstrap-scrollspy.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */
!function(t){"use strict";function e(e,n){var i,o=t.proxy(this.process,this),r=t(e).is("body")?t(window):t(e);this.options=t.extend({},t.fn.scrollspy.defaults,n),this.$scrollElement=r.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(i=t(e).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e,n=this;this.offsets=t([]),this.targets=t([]),e=this.$body.find(this.selector).map(function(){var e=t(this),i=e.data("target")||e.attr("href"),o=/^#\w/.test(i)&&t(i);return o&&o.length&&[[o.position().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;if(e>=i)return s!=(t=r.last()[0])&&this.activate(t);for(t=o.length;t--;)s!=r[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(r[t])},activate:function(e){var n,i;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var i=t(this),o=i.data("scrollspy"),r="object"==typeof n&&n;o||i.data("scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),/* ========================================================
 * bootstrap-tab.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */
!function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,n,i,o=this.element,r=o.closest("ul:not(.dropdown-menu)"),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),o.parent("li").hasClass("active")||(e=r.find(".active:last a")[0],i=t.Event("show",{relatedTarget:e}),o.trigger(i),i.isDefaultPrevented()||(n=t(s),this.activate(o.parent("li"),r),this.activate(n,n.parent(),function(){o.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&t.support.transition&&r.hasClass("fade");s?r.one(t.support.transition.end,o):o(),r.removeClass("in")}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),o=i.data("tab");o||i.data("tab",o=new e(this)),"string"==typeof n&&o[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),/* =============================================================
 * bootstrap-typeahead.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=t(this.options.menu),this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:e.top+e.height,left:e.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)},process:function(e){var n=this;return e=t.grep(e,function(t){return n.matcher(t)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],i=[],o=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?i.push(e):o.push(e):n.push(e);return n.concat(i,o)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var n=this;return e=t(e).map(function(e,i){return e=t(n.options.item).attr("data-value",i),e.find("a").html(n.highlighter(i)),e[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),n=e.next();n.length||(n=t(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",t.proxy(this.focus,this)).on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this)).on("mouseleave","li",t.proxy(this.mouseleave,this))},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(){this.focused=!0},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=t.fn.typeahead;t.fn.typeahead=function(n){return this.each(function(){var i=t(this),o=i.data("typeahead"),r="object"==typeof n&&n;o||i.data("typeahead",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=n,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var e=t(this);e.data("typeahead")||e.typeahead(e.data())})}(window.jQuery),/* ==========================================================
 * bootstrap-affix.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(e,n){this.options=t.extend({},t.fn.affix.defaults,n),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,n=t(document).height(),i=this.$window.scrollTop(),o=this.$element.offset(),r=this.options.offset,s=r.bottom,a=r.top,l="affix affix-top affix-bottom";"object"!=typeof r&&(s=a=r),"function"==typeof a&&(a=r.top()),"function"==typeof s&&(s=r.bottom()),e=null!=this.unpin&&i+this.unpin<=o.top?!1:null!=s&&o.top+this.$element.height()>=n-s?"bottom":null!=a&&a>=i?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?o.top-i:null,this.$element.removeClass(l).addClass("affix"+(e?"-"+e:"")))}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var i=t(this),o=i.data("affix"),r="object"==typeof n&&n;o||i.data("affix",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)})})}(window.jQuery),/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),!function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,o=t(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=t(r),e&&e.preventDefault(),i.length||(i=o.hasClass("alert")?o:o.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),o=i.data("alert");o||i.data("alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),o=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[o]()),n[o](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),o=i.data("button"),r="object"==typeof n&&n;o||i.data("button",o=new e(this,r)),"toggle"==n?o.toggle():n&&o.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var n=this.getActiveIndex(),i=this;if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,n){var i,o=this.$element.find(".item.active"),r=n||o[e](),s=this.interval,a="next"==e?"left":"right",l="next"==e?"first":"last",u=this;if(this.sliding=!0,s&&this.pause(),r=r.length?r:this.$element.find(".item")[l](),i=t.Event("slide",{relatedTarget:r[0],direction:a}),!r.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(u.$indicators.children()[u.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;r.addClass(e),r[0].offsetWidth,o.addClass(a),r.addClass(a),this.$element.one(t.support.transition.end,function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("carousel"),r=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),s="string"==typeof n?n:r.slide;o||i.data("carousel",o=new e(this,r)),"number"==typeof n?o.to(n):s?o[s]():r.interval&&o.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i,o=t(this),r=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},r.data(),o.data());r.carousel(s),(i=o.attr("data-slide-to"))&&r.data("carousel").pause().to(i).cycle(),e.preventDefault()})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,n),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){var e,n,i,o;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),n=t.camelCase(["scroll",e].join("-")),i=this.$parent&&this.$parent.find("> .accordion-group > .in"),i&&i.length){if(o=i.data("collapse"),o&&o.transitioning)return;i.collapse("hide"),o||i.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][n])}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,n,i){var o=this,r=function(){"show"==n.type&&o.reset(),o.transitioning=0,o.$element.trigger(i)};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,r):r())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),o=i.data("collapse"),r=t.extend({},t.fn.collapse.defaults,i.data(),"object"==typeof n&&n);o||i.data("collapse",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),r=t(o).data("collapse")?"toggle":i.data();i[t(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(o).collapse(r)})}(window.jQuery),!function(t){"use strict";function e(){t(i).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,i=e.attr("data-target");return i||(i=e.attr("href"),i=i&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),n=i&&t(i),n&&n.length||(n=e.parent()),n}var i="[data-toggle=dropdown]",o=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(){var i,o,r=t(this);if(!r.is(".disabled, :disabled"))return i=n(r),o=i.hasClass("open"),e(),o||i.toggleClass("open"),r.focus(),!1},keydown:function(e){var o,r,s,a,l;if(/(38|40|27)/.test(e.keyCode)&&(o=t(this),e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled"))){if(s=n(o),a=s.hasClass("open"),!a||a&&27==e.keyCode)return 27==e.which&&s.find(i).focus(),o.click();r=t("[role=menu] li:not(.divider):visible a",s),r.length&&(l=r.index(r.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus())}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("dropdown");i||n.data("dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown-menu",function(t){t.stopPropagation()}).on("click.dropdown.data-api",i,o.prototype.toggle).on("keydown.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]!==t.target&&!e.$element.has(t.target).length&&e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),o=i.data("modal"),r=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);o||i.data("modal",o=new e(this,r)),"string"==typeof n?o[n]():r.show&&o.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),o=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),r=o.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),n.data());e.preventDefault(),o.modal(r).one("hide",function(){n.focus()})})}(window.jQuery),!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,i){var o,r,s,a,l;for(this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.enabled=!0,s=this.options.trigger.split(" "),l=s.length;l--;)a=s[l],"click"==a?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(o="hover"==a?"mouseenter":"focus",r="hover"==a?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var n,i=t.fn[this.type].defaults,o={};return this._options&&t.each(this._options,function(t,e){i[t]!=e&&(o[t]=e)},this),n=t(e.currentTarget)[this.type](o).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},show:function(){var e,n,i,o,r,s,a=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),r="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),i=e[0].offsetWidth,o=e[0].offsetHeight,r){case"bottom":s={top:n.top+n.height,left:n.left+n.width/2-i/2};break;case"top":s={top:n.top-o,left:n.left+n.width/2-i/2};break;case"left":s={top:n.top+n.height/2-o/2,left:n.left-i};break;case"right":s={top:n.top+n.height/2-o/2,left:n.left+n.width}}this.applyPlacement(s,r),this.$element.trigger("shown")}},applyPlacement:function(t,e){var n,i,o,r,s=this.tip(),a=s[0].offsetWidth,l=s[0].offsetHeight;s.offset(t).addClass(e).addClass("in"),n=s[0].offsetWidth,i=s[0].offsetHeight,"top"==e&&i!=l&&(t.top=t.top+l-i,r=!0),"bottom"==e||"top"==e?(o=0,t.left<0&&(o=-2*t.left,t.left=0,s.offset(t),n=s[0].offsetWidth,i=s[0].offsetHeight),this.replaceArrow(o-a+n,n,"left")):this.replaceArrow(i-l,i,"top"),r&&s.offset(t)},replaceArrow:function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){n.off(t.support.transition.end).detach()},500);n.one(t.support.transition.end,function(){clearTimeout(e),n.detach()})}var n=this.tip(),i=t.Event("hide");return this.$element.trigger(i),i.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():n.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var n=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var i=t(this),o=i.data("tooltip"),r="object"==typeof n&&n;o||i.data("tooltip",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(window.jQuery),!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,n=this.options;return t=("function"==typeof n.content?n.content.call(e[0]):n.content)||e.attr("data-content")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var i=t(this),o=i.data("popover"),r="object"==typeof n&&n;o||i.data("popover",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(window.jQuery),!function(t){"use strict";function e(e,n){var i,o=t.proxy(this.process,this),r=t(e).is("body")?t(window):t(e);this.options=t.extend({},t.fn.scrollspy.defaults,n),this.$scrollElement=r.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(i=t(e).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e,n=this;this.offsets=t([]),this.targets=t([]),e=this.$body.find(this.selector).map(function(){var e=t(this),i=e.data("target")||e.attr("href"),o=/^#\w/.test(i)&&t(i);return o&&o.length&&[[o.position().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;if(e>=i)return s!=(t=r.last()[0])&&this.activate(t);for(t=o.length;t--;)s!=r[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(r[t])},activate:function(e){var n,i;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var i=t(this),o=i.data("scrollspy"),r="object"==typeof n&&n;o||i.data("scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),!function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,n,i,o=this.element,r=o.closest("ul:not(.dropdown-menu)"),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),o.parent("li").hasClass("active")||(e=r.find(".active:last a")[0],i=t.Event("show",{relatedTarget:e}),o.trigger(i),i.isDefaultPrevented()||(n=t(s),this.activate(o.parent("li"),r),this.activate(n,n.parent(),function(){o.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&t.support.transition&&r.hasClass("fade");s?r.one(t.support.transition.end,o):o(),r.removeClass("in")}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),o=i.data("tab");o||i.data("tab",o=new e(this)),"string"==typeof n&&o[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=t(this.options.menu),this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:e.top+e.height,left:e.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)},process:function(e){var n=this;return e=t.grep(e,function(t){return n.matcher(t)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],i=[],o=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?i.push(e):o.push(e):n.push(e);return n.concat(i,o)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var n=this;return e=t(e).map(function(e,i){return e=t(n.options.item).attr("data-value",i),e.find("a").html(n.highlighter(i)),e[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),n=e.next();n.length||(n=t(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",t.proxy(this.focus,this)).on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this)).on("mouseleave","li",t.proxy(this.mouseleave,this))},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(){this.focused=!0},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=t.fn.typeahead;t.fn.typeahead=function(n){return this.each(function(){var i=t(this),o=i.data("typeahead"),r="object"==typeof n&&n;o||i.data("typeahead",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=n,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var e=t(this);e.data("typeahead")||e.typeahead(e.data())})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.options=t.extend({},t.fn.affix.defaults,n),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,n=t(document).height(),i=this.$window.scrollTop(),o=this.$element.offset(),r=this.options.offset,s=r.bottom,a=r.top,l="affix affix-top affix-bottom";"object"!=typeof r&&(s=a=r),"function"==typeof a&&(a=r.top()),"function"==typeof s&&(s=r.bottom()),e=null!=this.unpin&&i+this.unpin<=o.top?!1:null!=s&&o.top+this.$element.height()>=n-s?"bottom":null!=a&&a>=i?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?o.top-i:null,this.$element.removeClass(l).addClass("affix"+(e?"-"+e:"")))}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var i=t(this),o=i.data("affix"),r="object"==typeof n&&n;o||i.data("affix",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)})})}(window.jQuery),function(){}.call(this),function(t,e){function n(t){var e=pe[t]={};return G.each(t.split(ee),function(t,n){e[n]=!0}),e}function i(t,n,i){if(i===e&&1===t.nodeType){var o="data-"+n.replace(ge,"-$1").toLowerCase();if(i=t.getAttribute(o),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:+i+""===i?+i:me.test(i)?G.parseJSON(i):i}catch(r){}G.data(t,n,i)}else i=e}return i}function o(t){var e;for(e in t)if(("data"!==e||!G.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function r(){return!1}function s(){return!0}function a(t){return!t||!t.parentNode||11===t.parentNode.nodeType}function l(t,e){do t=t[e];while(t&&1!==t.nodeType);return t}function u(t,e,n){if(e=e||0,G.isFunction(e))return G.grep(t,function(t,i){var o=!!e.call(t,i,t);return o===n});if(e.nodeType)return G.grep(t,function(t){return t===e===n});if("string"==typeof e){var i=G.grep(t,function(t){return 1===t.nodeType});if(Pe.test(e))return G.filter(e,i,!n);e=G.filter(e,i)}return G.grep(t,function(t){return G.inArray(t,e)>=0===n})}function c(t){var e=Oe.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());return n}function f(t,e){return t.getElementsByTagName(e)[0]||t.appendChild(t.ownerDocument.createElement(e))}function d(t,e){if(1===e.nodeType&&G.hasData(t)){var n,i,o,r=G._data(t),s=G._data(e,r),a=r.events;if(a){delete s.handle,s.events={};for(n in a)for(i=0,o=a[n].length;o>i;i++)G.event.add(e,n,a[n][i])}s.data&&(s.data=G.extend({},s.data))}}function h(t,e){var n;1===e.nodeType&&(e.clearAttributes&&e.clearAttributes(),e.mergeAttributes&&e.mergeAttributes(t),n=e.nodeName.toLowerCase(),"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),G.support.html5Clone&&t.innerHTML&&!G.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&Ye.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.selected=t.defaultSelected:"input"===n||"textarea"===n?e.defaultValue=t.defaultValue:"script"===n&&e.text!==t.text&&(e.text=t.text),e.removeAttribute(G.expando))}function p(t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName("*"):"undefined"!=typeof t.querySelectorAll?t.querySelectorAll("*"):[]}function m(t){Ye.test(t.type)&&(t.defaultChecked=t.checked)}function g(t,e){if(e in t)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),i=e,o=yn.length;o--;)if(e=yn[o]+n,e in t)return e;return i}function v(t,e){return t=e||t,"none"===G.css(t,"display")||!G.contains(t.ownerDocument,t)}function y(t,e){for(var n,i,o=[],r=0,s=t.length;s>r;r++)n=t[r],n.style&&(o[r]=G._data(n,"olddisplay"),e?(!o[r]&&"none"===n.style.display&&(n.style.display=""),""===n.style.display&&v(n)&&(o[r]=G._data(n,"olddisplay",C(n.nodeName)))):(i=nn(n,"display"),!o[r]&&"none"!==i&&G._data(n,"olddisplay",i)));for(r=0;s>r;r++)n=t[r],n.style&&(e&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=e?o[r]||"":"none"));return t}function b(t,e,n){var i=fn.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function x(t,e,n,i){for(var o=n===(i?"border":"content")?4:"width"===e?1:0,r=0;4>o;o+=2)"margin"===n&&(r+=G.css(t,n+vn[o],!0)),i?("content"===n&&(r-=parseFloat(nn(t,"padding"+vn[o]))||0),"margin"!==n&&(r-=parseFloat(nn(t,"border"+vn[o]+"Width"))||0)):(r+=parseFloat(nn(t,"padding"+vn[o]))||0,"padding"!==n&&(r+=parseFloat(nn(t,"border"+vn[o]+"Width"))||0));return r}function w(t,e,n){var i="width"===e?t.offsetWidth:t.offsetHeight,o=!0,r=G.support.boxSizing&&"border-box"===G.css(t,"boxSizing");if(0>=i||null==i){if(i=nn(t,e),(0>i||null==i)&&(i=t.style[e]),dn.test(i))return i;o=r&&(G.support.boxSizingReliable||i===t.style[e]),i=parseFloat(i)||0}return i+x(t,e,n||(r?"border":"content"),o)+"px"}function C(t){if(pn[t])return pn[t];var e=G("<"+t+">").appendTo(W.body),n=e.css("display");return e.remove(),("none"===n||""===n)&&(on=W.body.appendChild(on||G.extend(W.createElement("iframe"),{frameBorder:0,width:0,height:0})),rn&&on.createElement||(rn=(on.contentWindow||on.contentDocument).document,rn.write("<!doctype html><html><body>"),rn.close()),e=rn.body.appendChild(rn.createElement(t)),n=nn(e,"display"),W.body.removeChild(on)),pn[t]=n,n}function T(t,e,n,i){var o;if(G.isArray(e))G.each(e,function(e,o){n||wn.test(t)?i(t,o):T(t+"["+("object"==typeof o?e:"")+"]",o,n,i)});else if(n||"object"!==G.type(e))i(t,e);else for(o in e)T(t+"["+o+"]",e[o],n,i)}function k(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o,r,s=e.toLowerCase().split(ee),a=0,l=s.length;if(G.isFunction(n))for(;l>a;a++)i=s[a],r=/^\+/.test(i),r&&(i=i.substr(1)||"*"),o=t[i]=t[i]||[],o[r?"unshift":"push"](n)
}}function $(t,n,i,o,r,s){r=r||n.dataTypes[0],s=s||{},s[r]=!0;for(var a,l=t[r],u=0,c=l?l.length:0,f=t===Fn;c>u&&(f||!a);u++)a=l[u](n,i,o),"string"==typeof a&&(!f||s[a]?a=e:(n.dataTypes.unshift(a),a=$(t,n,i,o,a,s)));return(f||!a)&&!s["*"]&&(a=$(t,n,i,o,"*",s)),a}function E(t,n){var i,o,r=G.ajaxSettings.flatOptions||{};for(i in n)n[i]!==e&&((r[i]?t:o||(o={}))[i]=n[i]);o&&G.extend(!0,t,o)}function N(t,n,i){var o,r,s,a,l=t.contents,u=t.dataTypes,c=t.responseFields;for(r in c)r in i&&(n[c[r]]=i[r]);for(;"*"===u[0];)u.shift(),o===e&&(o=t.mimeType||n.getResponseHeader("content-type"));if(o)for(r in l)if(l[r]&&l[r].test(o)){u.unshift(r);break}if(u[0]in i)s=u[0];else{for(r in i){if(!u[0]||t.converters[r+" "+u[0]]){s=r;break}a||(a=r)}s=s||a}return s?(s!==u[0]&&u.unshift(s),i[s]):void 0}function S(t,e){var n,i,o,r,s=t.dataTypes.slice(),a=s[0],l={},u=0;if(t.dataFilter&&(e=t.dataFilter(e,t.dataType)),s[1])for(n in t.converters)l[n.toLowerCase()]=t.converters[n];for(;o=s[++u];)if("*"!==o){if("*"!==a&&a!==o){if(n=l[a+" "+o]||l["* "+o],!n)for(i in l)if(r=i.split(" "),r[1]===o&&(n=l[a+" "+r[0]]||l["* "+r[0]])){n===!0?n=l[i]:l[i]!==!0&&(o=r[0],s.splice(u--,0,o));break}if(n!==!0)if(n&&t["throws"])e=n(e);else try{e=n(e)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+a+" to "+o}}}a=o}return{state:"success",data:e}}function j(){try{return new t.XMLHttpRequest}catch(e){}}function A(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function D(){return setTimeout(function(){Vn=e},0),Vn=G.now()}function L(t,e){G.each(e,function(e,n){for(var i=(ti[e]||[]).concat(ti["*"]),o=0,r=i.length;r>o;o++)if(i[o].call(t,e,n))return})}function H(t,e,n){var i,o=0,r=Zn.length,s=G.Deferred().always(function(){delete a.elem}),a=function(){for(var e=Vn||D(),n=Math.max(0,l.startTime+l.duration-e),i=1-(n/l.duration||0),o=0,r=l.tweens.length;r>o;o++)l.tweens[o].run(i);return s.notifyWith(t,[l,i,n]),1>i&&r?n:(s.resolveWith(t,[l]),!1)},l=s.promise({elem:t,props:G.extend({},e),opts:G.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:Vn||D(),duration:n.duration,tweens:[],createTween:function(e,n){var i=G.Tween(t,l.opts,e,n,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(i),i},stop:function(e){for(var n=0,i=e?l.tweens.length:0;i>n;n++)l.tweens[n].run(1);return e?s.resolveWith(t,[l,e]):s.rejectWith(t,[l,e]),this}}),u=l.props;for(q(u,l.opts.specialEasing);r>o;o++)if(i=Zn[o].call(l,t,u,l.opts))return i;return L(l,u),G.isFunction(l.opts.start)&&l.opts.start.call(t,l),G.fx.timer(G.extend(a,{anim:l,queue:l.opts.queue,elem:t})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function q(t,e){var n,i,o,r,s;for(n in t)if(i=G.camelCase(n),o=e[i],r=t[n],G.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),s=G.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete t[i];for(n in r)n in t||(t[n]=r[n],e[n]=o)}else e[i]=o}function M(t,e,n){var i,o,r,s,a,l,u,c,f=this,d=t.style,h={},p=[],m=t.nodeType&&v(t);n.queue||(u=G._queueHooks(t,"fx"),null==u.unqueued&&(u.unqueued=0,c=u.empty.fire,u.empty.fire=function(){u.unqueued||c()}),u.unqueued++,f.always(function(){f.always(function(){u.unqueued--,G.queue(t,"fx").length||u.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===G.css(t,"display")&&"none"===G.css(t,"float")&&(G.support.inlineBlockNeedsLayout&&"inline"!==C(t.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",G.support.shrinkWrapBlocks||f.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in e)if(r=e[i],Jn.exec(r)){if(delete e[i],r===(m?"hide":"show"))continue;p.push(i)}if(s=p.length)for(a=G._data(t,"fxshow")||G._data(t,"fxshow",{}),m?G(t).show():f.done(function(){G(t).hide()}),f.done(function(){var e;G.removeData(t,"fxshow",!0);for(e in h)G.style(t,e,h[e])}),i=0;s>i;i++)o=p[i],l=f.createTween(o,m?a[o]:0),h[o]=a[o]||G.style(t,o),o in a||(a[o]=l.start,m&&(l.end=l.start,l.start="width"===o||"height"===o?1:0))}function P(t,e,n,i,o){return new P.prototype.init(t,e,n,i,o)}function F(t,e){var n,i={height:t},o=0;for(e=e?1:0;4>o;o+=2-e)n=vn[o],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function _(t){return G.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1}var O,B,W=t.document,R=t.location,I=t.navigator,z=t.jQuery,X=t.$,Q=Array.prototype.push,U=Array.prototype.slice,V=Array.prototype.indexOf,Y=Object.prototype.toString,J=Object.prototype.hasOwnProperty,K=String.prototype.trim,G=function(t,e){return new G.fn.init(t,e,O)},Z=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,te=/\S/,ee=/\s+/,ne=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ie=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,oe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,re=/^[\],:{}\s]*$/,se=/(?:^|:|,)(?:\s*\[)+/g,ae=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,le=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,ue=/^-ms-/,ce=/-([\da-z])/gi,fe=function(t,e){return(e+"").toUpperCase()},de=function(){W.addEventListener?(W.removeEventListener("DOMContentLoaded",de,!1),G.ready()):"complete"===W.readyState&&(W.detachEvent("onreadystatechange",de),G.ready())},he={};G.fn=G.prototype={constructor:G,init:function(t,n,i){var o,r,s;if(!t)return this;if(t.nodeType)return this.context=this[0]=t,this.length=1,this;if("string"==typeof t){if(o="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:ie.exec(t),o&&(o[1]||!n)){if(o[1])return n=n instanceof G?n[0]:n,s=n&&n.nodeType?n.ownerDocument||n:W,t=G.parseHTML(o[1],s,!0),oe.test(o[1])&&G.isPlainObject(n)&&this.attr.call(t,n,!0),G.merge(this,t);if(r=W.getElementById(o[2]),r&&r.parentNode){if(r.id!==o[2])return i.find(t);this.length=1,this[0]=r}return this.context=W,this.selector=t,this}return!n||n.jquery?(n||i).find(t):this.constructor(n).find(t)}return G.isFunction(t)?i.ready(t):(t.selector!==e&&(this.selector=t.selector,this.context=t.context),G.makeArray(t,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return U.call(this)},get:function(t){return null==t?this.toArray():0>t?this[this.length+t]:this[t]},pushStack:function(t,e,n){var i=G.merge(this.constructor(),t);return i.prevObject=this,i.context=this.context,"find"===e?i.selector=this.selector+(this.selector?" ":"")+n:e&&(i.selector=this.selector+"."+e+"("+n+")"),i},each:function(t,e){return G.each(this,t,e)},ready:function(t){return G.ready.promise().done(t),this},eq:function(t){return t=+t,-1===t?this.slice(t):this.slice(t,t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(U.apply(this,arguments),"slice",U.call(arguments).join(","))},map:function(t){return this.pushStack(G.map(this,function(e,n){return t.call(e,n,e)}))},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:[].sort,splice:[].splice},G.fn.init.prototype=G.fn,G.extend=G.fn.extend=function(){var t,n,i,o,r,s,a=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[1]||{},l=2),"object"!=typeof a&&!G.isFunction(a)&&(a={}),u===l&&(a=this,--l);u>l;l++)if(null!=(t=arguments[l]))for(n in t)i=a[n],o=t[n],a!==o&&(c&&o&&(G.isPlainObject(o)||(r=G.isArray(o)))?(r?(r=!1,s=i&&G.isArray(i)?i:[]):s=i&&G.isPlainObject(i)?i:{},a[n]=G.extend(c,s,o)):o!==e&&(a[n]=o));return a},G.extend({noConflict:function(e){return t.$===G&&(t.$=X),e&&t.jQuery===G&&(t.jQuery=z),G},isReady:!1,readyWait:1,holdReady:function(t){t?G.readyWait++:G.ready(!0)},ready:function(t){if(t===!0?!--G.readyWait:!G.isReady){if(!W.body)return setTimeout(G.ready,1);G.isReady=!0,t!==!0&&--G.readyWait>0||(B.resolveWith(W,[G]),G.fn.trigger&&G(W).trigger("ready").off("ready"))}},isFunction:function(t){return"function"===G.type(t)},isArray:Array.isArray||function(t){return"array"===G.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},type:function(t){return null==t?String(t):he[Y.call(t)]||"object"},isPlainObject:function(t){if(!t||"object"!==G.type(t)||t.nodeType||G.isWindow(t))return!1;try{if(t.constructor&&!J.call(t,"constructor")&&!J.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var i;for(i in t);return i===e||J.call(t,i)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},error:function(t){throw new Error(t)},parseHTML:function(t,e,n){var i;return t&&"string"==typeof t?("boolean"==typeof e&&(n=e,e=0),e=e||W,(i=oe.exec(t))?[e.createElement(i[1])]:(i=G.buildFragment([t],e,n?null:[]),G.merge([],(i.cacheable?G.clone(i.fragment):i.fragment).childNodes))):null},parseJSON:function(e){return e&&"string"==typeof e?(e=G.trim(e),t.JSON&&t.JSON.parse?t.JSON.parse(e):re.test(e.replace(ae,"@").replace(le,"]").replace(se,""))?new Function("return "+e)():(G.error("Invalid JSON: "+e),void 0)):null},parseXML:function(n){var i,o;if(!n||"string"!=typeof n)return null;try{t.DOMParser?(o=new DOMParser,i=o.parseFromString(n,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n))}catch(r){i=e}return(!i||!i.documentElement||i.getElementsByTagName("parsererror").length)&&G.error("Invalid XML: "+n),i},noop:function(){},globalEval:function(e){e&&te.test(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(ue,"ms-").replace(ce,fe)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,n,i){var o,r=0,s=t.length,a=s===e||G.isFunction(t);if(i)if(a){for(o in t)if(n.apply(t[o],i)===!1)break}else for(;s>r&&n.apply(t[r++],i)!==!1;);else if(a){for(o in t)if(n.call(t[o],o,t[o])===!1)break}else for(;s>r&&n.call(t[r],r,t[r++])!==!1;);return t},trim:K&&!K.call(" ")?function(t){return null==t?"":K.call(t)}:function(t){return null==t?"":(t+"").replace(ne,"")},makeArray:function(t,e){var n,i=e||[];return null!=t&&(n=G.type(t),null==t.length||"string"===n||"function"===n||"regexp"===n||G.isWindow(t)?Q.call(i,t):G.merge(i,t)),i},inArray:function(t,e,n){var i;if(e){if(V)return V.call(e,t,n);for(i=e.length,n=n?0>n?Math.max(0,i+n):n:0;i>n;n++)if(n in e&&e[n]===t)return n}return-1},merge:function(t,n){var i=n.length,o=t.length,r=0;if("number"==typeof i)for(;i>r;r++)t[o++]=n[r];else for(;n[r]!==e;)t[o++]=n[r++];return t.length=o,t},grep:function(t,e,n){var i,o=[],r=0,s=t.length;for(n=!!n;s>r;r++)i=!!e(t[r],r),n!==i&&o.push(t[r]);return o},map:function(t,n,i){var o,r,s=[],a=0,l=t.length,u=t instanceof G||l!==e&&"number"==typeof l&&(l>0&&t[0]&&t[l-1]||0===l||G.isArray(t));if(u)for(;l>a;a++)o=n(t[a],a,i),null!=o&&(s[s.length]=o);else for(r in t)o=n(t[r],r,i),null!=o&&(s[s.length]=o);return s.concat.apply([],s)},guid:1,proxy:function(t,n){var i,o,r;return"string"==typeof n&&(i=t[n],n=t,t=i),G.isFunction(t)?(o=U.call(arguments,2),r=function(){return t.apply(n,o.concat(U.call(arguments)))},r.guid=t.guid=t.guid||G.guid++,r):e},access:function(t,n,i,o,r,s,a){var l,u=null==i,c=0,f=t.length;if(i&&"object"==typeof i){for(c in i)G.access(t,n,c,i[c],1,s,o);r=1}else if(o!==e){if(l=a===e&&G.isFunction(o),u&&(l?(l=n,n=function(t,e,n){return l.call(G(t),n)}):(n.call(t,o),n=null)),n)for(;f>c;c++)n(t[c],i,l?o.call(t[c],c,n(t[c],i)):o,a);r=1}return r?t:u?n.call(t):f?n(t[0],i):s},now:function(){return(new Date).getTime()}}),G.ready.promise=function(e){if(!B)if(B=G.Deferred(),"complete"===W.readyState)setTimeout(G.ready,1);else if(W.addEventListener)W.addEventListener("DOMContentLoaded",de,!1),t.addEventListener("load",G.ready,!1);else{W.attachEvent("onreadystatechange",de),t.attachEvent("onload",G.ready);var n=!1;try{n=null==t.frameElement&&W.documentElement}catch(i){}n&&n.doScroll&&function o(){if(!G.isReady){try{n.doScroll("left")}catch(t){return setTimeout(o,50)}G.ready()}}()}return B.promise(e)},G.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(t,e){he["[object "+e+"]"]=e.toLowerCase()}),O=G(W);var pe={};G.Callbacks=function(t){t="string"==typeof t?pe[t]||n(t):G.extend({},t);var i,o,r,s,a,l,u=[],c=!t.once&&[],f=function(e){for(i=t.memory&&e,o=!0,l=s||0,s=0,a=u.length,r=!0;u&&a>l;l++)if(u[l].apply(e[0],e[1])===!1&&t.stopOnFalse){i=!1;break}r=!1,u&&(c?c.length&&f(c.shift()):i?u=[]:d.disable())},d={add:function(){if(u){var e=u.length;!function n(e){G.each(e,function(e,i){var o=G.type(i);"function"!==o||t.unique&&d.has(i)?i&&i.length&&"string"!==o&&n(i):u.push(i)})}(arguments),r?a=u.length:i&&(s=e,f(i))}return this},remove:function(){return u&&G.each(arguments,function(t,e){for(var n;(n=G.inArray(e,u,n))>-1;)u.splice(n,1),r&&(a>=n&&a--,l>=n&&l--)}),this},has:function(t){return G.inArray(t,u)>-1},empty:function(){return u=[],this},disable:function(){return u=c=i=e,this},disabled:function(){return!u},lock:function(){return c=e,i||d.disable(),this},locked:function(){return!c},fireWith:function(t,e){return e=e||[],e=[t,e.slice?e.slice():e],u&&(!o||c)&&(r?c.push(e):f(e)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!o}};return d},G.extend({Deferred:function(t){var e=[["resolve","done",G.Callbacks("once memory"),"resolved"],["reject","fail",G.Callbacks("once memory"),"rejected"],["notify","progress",G.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return G.Deferred(function(n){G.each(e,function(e,i){var r=i[0],s=t[e];o[i[1]](G.isFunction(s)?function(){var t=s.apply(this,arguments);t&&G.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r+"With"](this===o?n:this,[t])}:n[r])}),t=null}).promise()},promise:function(t){return null!=t?G.extend(t,i):i}},o={};return i.pipe=i.then,G.each(e,function(t,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=s.fire,o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,r=U.call(arguments),s=r.length,a=1!==s||t&&G.isFunction(t.promise)?s:0,l=1===a?t:G.Deferred(),u=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?U.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(e=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&G.isFunction(r[o].promise)?r[o].promise().done(u(o,i,r)).fail(l.reject).progress(u(o,n,e)):--a;return a||l.resolveWith(i,r),l.promise()}}),G.support=function(){var e,n,i,o,r,s,a,l,u,c,f,d=W.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),i=d.getElementsByTagName("a")[0],i.style.cssText="top:1px;float:left;opacity:.5",!n||!n.length)return{};o=W.createElement("select"),r=o.appendChild(W.createElement("option")),s=d.getElementsByTagName("input")[0],e={leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:"on"===s.value,optSelected:r.selected,getSetAttribute:"t"!==d.className,enctype:!!W.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==W.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===W.compatMode,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,e.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,e.optDisabled=!r.disabled;try{delete d.test}catch(h){e.deleteExpando=!1}if(!d.addEventListener&&d.attachEvent&&d.fireEvent&&(d.attachEvent("onclick",f=function(){e.noCloneEvent=!1}),d.cloneNode(!0).fireEvent("onclick"),d.detachEvent("onclick",f)),s=W.createElement("input"),s.value="t",s.setAttribute("type","radio"),e.radioValue="t"===s.value,s.setAttribute("checked","checked"),s.setAttribute("name","t"),d.appendChild(s),a=W.createDocumentFragment(),a.appendChild(d.lastChild),e.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,e.appendChecked=s.checked,a.removeChild(s),a.appendChild(d),d.attachEvent)for(u in{submit:!0,change:!0,focusin:!0})l="on"+u,c=l in d,c||(d.setAttribute(l,"return;"),c="function"==typeof d[l]),e[u+"Bubbles"]=c;return G(function(){var n,i,o,r,s="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=W.getElementsByTagName("body")[0];a&&(n=W.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),i=W.createElement("div"),n.appendChild(i),i.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=i.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",e.reliableHiddenOffsets=c&&0===o[0].offsetHeight,i.innerHTML="",i.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",e.boxSizing=4===i.offsetWidth,e.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,t.getComputedStyle&&(e.pixelPosition="1%"!==(t.getComputedStyle(i,null)||{}).top,e.boxSizingReliable="4px"===(t.getComputedStyle(i,null)||{width:"4px"}).width,r=W.createElement("div"),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",i.appendChild(r),e.reliableMarginRight=!parseFloat((t.getComputedStyle(r,null)||{}).marginRight)),"undefined"!=typeof i.style.zoom&&(i.innerHTML="",i.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=3===i.offsetWidth,i.style.display="block",i.style.overflow="visible",i.innerHTML="<div></div>",i.firstChild.style.width="5px",e.shrinkWrapBlocks=3!==i.offsetWidth,n.style.zoom=1),a.removeChild(n),n=i=o=r=null)}),a.removeChild(d),n=i=o=r=s=a=d=null,e}();var me=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,ge=/([A-Z])/g;G.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(G.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(t){return t=t.nodeType?G.cache[t[G.expando]]:t[G.expando],!!t&&!o(t)},data:function(t,n,i,o){if(G.acceptData(t)){var r,s,a=G.expando,l="string"==typeof n,u=t.nodeType,c=u?G.cache:t,f=u?t[a]:t[a]&&a;if(f&&c[f]&&(o||c[f].data)||!l||i!==e)return f||(u?t[a]=f=G.deletedIds.pop()||G.guid++:f=a),c[f]||(c[f]={},u||(c[f].toJSON=G.noop)),("object"==typeof n||"function"==typeof n)&&(o?c[f]=G.extend(c[f],n):c[f].data=G.extend(c[f].data,n)),r=c[f],o||(r.data||(r.data={}),r=r.data),i!==e&&(r[G.camelCase(n)]=i),l?(s=r[n],null==s&&(s=r[G.camelCase(n)])):s=r,s}},removeData:function(t,e,n){if(G.acceptData(t)){var i,r,s,a=t.nodeType,l=a?G.cache:t,u=a?t[G.expando]:G.expando;if(l[u]){if(e&&(i=n?l[u]:l[u].data)){G.isArray(e)||(e in i?e=[e]:(e=G.camelCase(e),e=e in i?[e]:e.split(" ")));for(r=0,s=e.length;s>r;r++)delete i[e[r]];if(!(n?o:G.isEmptyObject)(i))return}(n||(delete l[u].data,o(l[u])))&&(a?G.cleanData([t],!0):G.support.deleteExpando||l!=l.window?delete l[u]:l[u]=null)}}},_data:function(t,e,n){return G.data(t,e,n,!0)},acceptData:function(t){var e=t.nodeName&&G.noData[t.nodeName.toLowerCase()];return!e||e!==!0&&t.getAttribute("classid")===e}}),G.fn.extend({data:function(t,n){var o,r,s,a,l,u=this[0],c=0,f=null;if(t===e){if(this.length&&(f=G.data(u),1===u.nodeType&&!G._data(u,"parsedAttrs"))){for(s=u.attributes,l=s.length;l>c;c++)a=s[c].name,a.indexOf("data-")||(a=G.camelCase(a.substring(5)),i(u,a,f[a]));G._data(u,"parsedAttrs",!0)}return f}return"object"==typeof t?this.each(function(){G.data(this,t)}):(o=t.split(".",2),o[1]=o[1]?"."+o[1]:"",r=o[1]+"!",G.access(this,function(n){return n===e?(f=this.triggerHandler("getData"+r,[o[0]]),f===e&&u&&(f=G.data(u,t),f=i(u,t,f)),f===e&&o[1]?this.data(o[0]):f):(o[1]=n,this.each(function(){var e=G(this);e.triggerHandler("setData"+r,o),G.data(this,t,n),e.triggerHandler("changeData"+r,o)}),void 0)},null,n,arguments.length>1,null,!1))},removeData:function(t){return this.each(function(){G.removeData(this,t)})}}),G.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=G._data(t,e),n&&(!i||G.isArray(n)?i=G._data(t,e,G.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=G.queue(t,e),i=n.length,o=n.shift(),r=G._queueHooks(t,e),s=function(){G.dequeue(t,e)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return G._data(t,n)||G._data(t,n,{empty:G.Callbacks("once memory").add(function(){G.removeData(t,e+"queue",!0),G.removeData(t,n,!0)})})}}),G.fn.extend({queue:function(t,n){var i=2;return"string"!=typeof t&&(n=t,t="fx",i--),arguments.length<i?G.queue(this[0],t):n===e?this:this.each(function(){var e=G.queue(this,t,n);G._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&G.dequeue(this,t)})},dequeue:function(t){return this.each(function(){G.dequeue(this,t)})},delay:function(t,e){return t=G.fx?G.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var i=setTimeout(e,t);n.stop=function(){clearTimeout(i)}})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,n){var i,o=1,r=G.Deferred(),s=this,a=this.length,l=function(){--o||r.resolveWith(s,[s])};for("string"!=typeof t&&(n=t,t=e),t=t||"fx";a--;)i=G._data(s[a],t+"queueHooks"),i&&i.empty&&(o++,i.empty.add(l));return l(),r.promise(n)}});var ve,ye,be,xe=/[\t\r\n]/g,we=/\r/g,Ce=/^(?:button|input)$/i,Te=/^(?:button|input|object|select|textarea)$/i,ke=/^a(?:rea|)$/i,$e=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Ee=G.support.getSetAttribute;G.fn.extend({attr:function(t,e){return G.access(this,G.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){G.removeAttr(this,t)})},prop:function(t,e){return G.access(this,G.prop,t,e,arguments.length>1)},removeProp:function(t){return t=G.propFix[t]||t,this.each(function(){try{this[t]=e,delete this[t]}catch(n){}})},addClass:function(t){var e,n,i,o,r,s,a;if(G.isFunction(t))return this.each(function(e){G(this).addClass(t.call(this,e,this.className))});if(t&&"string"==typeof t)for(e=t.split(ee),n=0,i=this.length;i>n;n++)if(o=this[n],1===o.nodeType)if(o.className||1!==e.length){for(r=" "+o.className+" ",s=0,a=e.length;a>s;s++)r.indexOf(" "+e[s]+" ")<0&&(r+=e[s]+" ");o.className=G.trim(r)}else o.className=t;return this},removeClass:function(t){var n,i,o,r,s,a,l;if(G.isFunction(t))return this.each(function(e){G(this).removeClass(t.call(this,e,this.className))});if(t&&"string"==typeof t||t===e)for(n=(t||"").split(ee),a=0,l=this.length;l>a;a++)if(o=this[a],1===o.nodeType&&o.className){for(i=(" "+o.className+" ").replace(xe," "),r=0,s=n.length;s>r;r++)for(;i.indexOf(" "+n[r]+" ")>=0;)i=i.replace(" "+n[r]+" "," ");o.className=t?G.trim(i):""}return this},toggleClass:function(t,e){var n=typeof t,i="boolean"==typeof e;return G.isFunction(t)?this.each(function(n){G(this).toggleClass(t.call(this,n,this.className,e),e)}):this.each(function(){if("string"===n)for(var o,r=0,s=G(this),a=e,l=t.split(ee);o=l[r++];)a=i?a:!s.hasClass(o),s[a?"addClass":"removeClass"](o);else("undefined"===n||"boolean"===n)&&(this.className&&G._data(this,"__className__",this.className),this.className=this.className||t===!1?"":G._data(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(xe," ").indexOf(e)>=0)return!0;return!1},val:function(t){var n,i,o,r=this[0];{if(arguments.length)return o=G.isFunction(t),this.each(function(i){var r,s=G(this);1===this.nodeType&&(r=o?t.call(this,i,s.val()):t,null==r?r="":"number"==typeof r?r+="":G.isArray(r)&&(r=G.map(r,function(t){return null==t?"":t+""})),n=G.valHooks[this.type]||G.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,r,"value")!==e||(this.value=r))});if(r)return n=G.valHooks[r.type]||G.valHooks[r.nodeName.toLowerCase()],n&&"get"in n&&(i=n.get(r,"value"))!==e?i:(i=r.value,"string"==typeof i?i.replace(we,""):null==i?"":i)}}}),G.extend({valHooks:{option:{get:function(t){var e=t.attributes.value;return!e||e.specified?t.value:t.text}},select:{get:function(t){var e,n,i,o,r=t.selectedIndex,s=[],a=t.options,l="select-one"===t.type;if(0>r)return null;for(n=l?r:0,i=l?r+1:a.length;i>n;n++)if(o=a[n],!(!o.selected||(G.support.optDisabled?o.disabled:null!==o.getAttribute("disabled"))||o.parentNode.disabled&&G.nodeName(o.parentNode,"optgroup"))){if(e=G(o).val(),l)return e;s.push(e)}return l&&!s.length&&a.length?G(a[r]).val():s},set:function(t,e){var n=G.makeArray(e);return G(t).find("option").each(function(){this.selected=G.inArray(G(this).val(),n)>=0}),n.length||(t.selectedIndex=-1),n}}},attrFn:{},attr:function(t,n,i,o){var r,s,a,l=t.nodeType;if(t&&3!==l&&8!==l&&2!==l)return o&&G.isFunction(G.fn[n])?G(t)[n](i):"undefined"==typeof t.getAttribute?G.prop(t,n,i):(a=1!==l||!G.isXMLDoc(t),a&&(n=n.toLowerCase(),s=G.attrHooks[n]||($e.test(n)?ye:ve)),i!==e?null===i?(G.removeAttr(t,n),void 0):s&&"set"in s&&a&&(r=s.set(t,i,n))!==e?r:(t.setAttribute(n,i+""),i):s&&"get"in s&&a&&null!==(r=s.get(t,n))?r:(r=t.getAttribute(n),null===r?e:r))},removeAttr:function(t,e){var n,i,o,r,s=0;if(e&&1===t.nodeType)for(i=e.split(ee);s<i.length;s++)o=i[s],o&&(n=G.propFix[o]||o,r=$e.test(o),r||G.attr(t,o,""),t.removeAttribute(Ee?o:n),r&&n in t&&(t[n]=!1))},attrHooks:{type:{set:function(t,e){if(Ce.test(t.nodeName)&&t.parentNode)G.error("type property can't be changed");else if(!G.support.radioValue&&"radio"===e&&G.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}},value:{get:function(t,e){return ve&&G.nodeName(t,"button")?ve.get(t,e):e in t?t.value:null},set:function(t,e,n){return ve&&G.nodeName(t,"button")?ve.set(t,e,n):(t.value=e,void 0)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(t,n,i){var o,r,s,a=t.nodeType;if(t&&3!==a&&8!==a&&2!==a)return s=1!==a||!G.isXMLDoc(t),s&&(n=G.propFix[n]||n,r=G.propHooks[n]),i!==e?r&&"set"in r&&(o=r.set(t,i,n))!==e?o:t[n]=i:r&&"get"in r&&null!==(o=r.get(t,n))?o:t[n]},propHooks:{tabIndex:{get:function(t){var n=t.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):Te.test(t.nodeName)||ke.test(t.nodeName)&&t.href?0:e}}}}),ye={get:function(t,n){var i,o=G.prop(t,n);return o===!0||"boolean"!=typeof o&&(i=t.getAttributeNode(n))&&i.nodeValue!==!1?n.toLowerCase():e},set:function(t,e,n){var i;return e===!1?G.removeAttr(t,n):(i=G.propFix[n]||n,i in t&&(t[i]=!0),t.setAttribute(n,n.toLowerCase())),n}},Ee||(be={name:!0,id:!0,coords:!0},ve=G.valHooks.button={get:function(t,n){var i;return i=t.getAttributeNode(n),i&&(be[n]?""!==i.value:i.specified)?i.value:e},set:function(t,e,n){var i=t.getAttributeNode(n);return i||(i=W.createAttribute(n),t.setAttributeNode(i)),i.value=e+""}},G.each(["width","height"],function(t,e){G.attrHooks[e]=G.extend(G.attrHooks[e],{set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0}})}),G.attrHooks.contenteditable={get:ve.get,set:function(t,e,n){""===e&&(e="false"),ve.set(t,e,n)}}),G.support.hrefNormalized||G.each(["href","src","width","height"],function(t,n){G.attrHooks[n]=G.extend(G.attrHooks[n],{get:function(t){var i=t.getAttribute(n,2);return null===i?e:i}})}),G.support.style||(G.attrHooks.style={get:function(t){return t.style.cssText.toLowerCase()||e},set:function(t,e){return t.style.cssText=e+""}}),G.support.optSelected||(G.propHooks.selected=G.extend(G.propHooks.selected,{get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}})),G.support.enctype||(G.propFix.enctype="encoding"),G.support.checkOn||G.each(["radio","checkbox"],function(){G.valHooks[this]={get:function(t){return null===t.getAttribute("value")?"on":t.value}}}),G.each(["radio","checkbox"],function(){G.valHooks[this]=G.extend(G.valHooks[this],{set:function(t,e){return G.isArray(e)?t.checked=G.inArray(G(t).val(),e)>=0:void 0}})});var Ne=/^(?:textarea|input|select)$/i,Se=/^([^\.]*|)(?:\.(.+)|)$/,je=/(?:^|\s)hover(\.\S+|)\b/,Ae=/^key/,De=/^(?:mouse|contextmenu)|click/,Le=/^(?:focusinfocus|focusoutblur)$/,He=function(t){return G.event.special.hover?t:t.replace(je,"mouseenter$1 mouseleave$1")};G.event={add:function(t,n,i,o,r){var s,a,l,u,c,f,d,h,p,m,g;if(3!==t.nodeType&&8!==t.nodeType&&n&&i&&(s=G._data(t))){for(i.handler&&(p=i,i=p.handler,r=p.selector),i.guid||(i.guid=G.guid++),l=s.events,l||(s.events=l={}),a=s.handle,a||(s.handle=a=function(t){return"undefined"==typeof G||t&&G.event.triggered===t.type?e:G.event.dispatch.apply(a.elem,arguments)},a.elem=t),n=G.trim(He(n)).split(" "),u=0;u<n.length;u++)c=Se.exec(n[u])||[],f=c[1],d=(c[2]||"").split(".").sort(),g=G.event.special[f]||{},f=(r?g.delegateType:g.bindType)||f,g=G.event.special[f]||{},h=G.extend({type:f,origType:c[1],data:o,handler:i,guid:i.guid,selector:r,needsContext:r&&G.expr.match.needsContext.test(r),namespace:d.join(".")},p),m=l[f],m||(m=l[f]=[],m.delegateCount=0,g.setup&&g.setup.call(t,o,d,a)!==!1||(t.addEventListener?t.addEventListener(f,a,!1):t.attachEvent&&t.attachEvent("on"+f,a))),g.add&&(g.add.call(t,h),h.handler.guid||(h.handler.guid=i.guid)),r?m.splice(m.delegateCount++,0,h):m.push(h),G.event.global[f]=!0;t=null}},global:{},remove:function(t,e,n,i,o){var r,s,a,l,u,c,f,d,h,p,m,g=G.hasData(t)&&G._data(t);if(g&&(d=g.events)){for(e=G.trim(He(e||"")).split(" "),r=0;r<e.length;r++)if(s=Se.exec(e[r])||[],a=l=s[1],u=s[2],a){for(h=G.event.special[a]||{},a=(i?h.delegateType:h.bindType)||a,p=d[a]||[],c=p.length,u=u?new RegExp("(^|\\.)"+u.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f=0;f<p.length;f++)m=p[f],!(!o&&l!==m.origType||n&&n.guid!==m.guid||u&&!u.test(m.namespace)||i&&i!==m.selector&&("**"!==i||!m.selector)||(p.splice(f--,1),m.selector&&p.delegateCount--,!h.remove||!h.remove.call(t,m)));0===p.length&&c!==p.length&&((!h.teardown||h.teardown.call(t,u,g.handle)===!1)&&G.removeEvent(t,a,g.handle),delete d[a])}else for(a in d)G.event.remove(t,a+e[r],n,i,!0);G.isEmptyObject(d)&&(delete g.handle,G.removeData(t,"events",!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,i,o,r){if(!o||3!==o.nodeType&&8!==o.nodeType){var s,a,l,u,c,f,d,h,p,m,g=n.type||n,v=[];if(Le.test(g+G.event.triggered))return;if(g.indexOf("!")>=0&&(g=g.slice(0,-1),a=!0),g.indexOf(".")>=0&&(v=g.split("."),g=v.shift(),v.sort()),(!o||G.event.customEvent[g])&&!G.event.global[g])return;if(n="object"==typeof n?n[G.expando]?n:new G.Event(g,n):new G.Event(g),n.type=g,n.isTrigger=!0,n.exclusive=a,n.namespace=v.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f=g.indexOf(":")<0?"on"+g:"",!o){s=G.cache;for(l in s)s[l].events&&s[l].events[g]&&G.event.trigger(n,i,s[l].handle.elem,!0);return}if(n.result=e,n.target||(n.target=o),i=null!=i?G.makeArray(i):[],i.unshift(n),d=G.event.special[g]||{},d.trigger&&d.trigger.apply(o,i)===!1)return;if(p=[[o,d.bindType||g]],!r&&!d.noBubble&&!G.isWindow(o)){for(m=d.delegateType||g,u=Le.test(m+g)?o:o.parentNode,c=o;u;u=u.parentNode)p.push([u,m]),c=u;c===(o.ownerDocument||W)&&p.push([c.defaultView||c.parentWindow||t,m])}for(l=0;l<p.length&&!n.isPropagationStopped();l++)u=p[l][0],n.type=p[l][1],h=(G._data(u,"events")||{})[n.type]&&G._data(u,"handle"),h&&h.apply(u,i),h=f&&u[f],h&&G.acceptData(u)&&h.apply&&h.apply(u,i)===!1&&n.preventDefault();return n.type=g,!(r||n.isDefaultPrevented()||d._default&&d._default.apply(o.ownerDocument,i)!==!1||"click"===g&&G.nodeName(o,"a")||!G.acceptData(o)||!f||!o[g]||("focus"===g||"blur"===g)&&0===n.target.offsetWidth||G.isWindow(o)||(c=o[f],c&&(o[f]=null),G.event.triggered=g,o[g](),G.event.triggered=e,!c||!(o[f]=c))),n.result}},dispatch:function(n){n=G.event.fix(n||t.event);var i,o,r,s,a,l,u,c,f,d=(G._data(this,"events")||{})[n.type]||[],h=d.delegateCount,p=U.call(arguments),m=!n.exclusive&&!n.namespace,g=G.event.special[n.type]||{},v=[];if(p[0]=n,n.delegateTarget=this,!g.preDispatch||g.preDispatch.call(this,n)!==!1){if(h&&(!n.button||"click"!==n.type))for(r=n.target;r!=this;r=r.parentNode||this)if(r.disabled!==!0||"click"!==n.type){for(a={},u=[],i=0;h>i;i++)c=d[i],f=c.selector,a[f]===e&&(a[f]=c.needsContext?G(f,this).index(r)>=0:G.find(f,this,null,[r]).length),a[f]&&u.push(c);u.length&&v.push({elem:r,matches:u})
}for(d.length>h&&v.push({elem:this,matches:d.slice(h)}),i=0;i<v.length&&!n.isPropagationStopped();i++)for(l=v[i],n.currentTarget=l.elem,o=0;o<l.matches.length&&!n.isImmediatePropagationStopped();o++)c=l.matches[o],(m||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))&&(n.data=c.data,n.handleObj=c,s=((G.event.special[c.origType]||{}).handle||c.handler).apply(l.elem,p),s!==e&&(n.result=s,s===!1&&(n.preventDefault(),n.stopPropagation())));return g.postDispatch&&g.postDispatch.call(this,n),n.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,n){var i,o,r,s=n.button,a=n.fromElement;return null==t.pageX&&null!=n.clientX&&(i=t.target.ownerDocument||W,o=i.documentElement,r=i.body,t.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),t.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!t.relatedTarget&&a&&(t.relatedTarget=a===t.target?n.toElement:a),!t.which&&s!==e&&(t.which=1&s?1:2&s?3:4&s?2:0),t}},fix:function(t){if(t[G.expando])return t;var e,n,i=t,o=G.event.fixHooks[t.type]||{},r=o.props?this.props.concat(o.props):this.props;for(t=G.Event(i),e=r.length;e;)n=r[--e],t[n]=i[n];return t.target||(t.target=i.srcElement||W),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,o.filter?o.filter(t,i):t},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(t,e,n){G.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(t,e){this.onbeforeunload===e&&(this.onbeforeunload=null)}}},simulate:function(t,e,n,i){var o=G.extend(new G.Event,n,{type:t,isSimulated:!0,originalEvent:{}});i?G.event.trigger(o,null,e):G.event.dispatch.call(e,o),o.isDefaultPrevented()&&n.preventDefault()}},G.event.handle=G.event.dispatch,G.removeEvent=W.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)}:function(t,e,n){var i="on"+e;t.detachEvent&&("undefined"==typeof t[i]&&(t[i]=null),t.detachEvent(i,n))},G.Event=function(t,e){return this instanceof G.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.returnValue===!1||t.getPreventDefault&&t.getPreventDefault()?s:r):this.type=t,e&&G.extend(this,e),this.timeStamp=t&&t.timeStamp||G.now(),this[G.expando]=!0,void 0):new G.Event(t,e)},G.Event.prototype={preventDefault:function(){this.isDefaultPrevented=s;var t=this.originalEvent;t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=s;var t=this.originalEvent;t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=s,this.stopPropagation()},isDefaultPrevented:r,isPropagationStopped:r,isImmediatePropagationStopped:r},G.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,e){G.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return r.selector,(!o||o!==i&&!G.contains(i,o))&&(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}}),G.support.submitBubbles||(G.event.special.submit={setup:function(){return G.nodeName(this,"form")?!1:(G.event.add(this,"click._submit keypress._submit",function(t){var n=t.target,i=G.nodeName(n,"input")||G.nodeName(n,"button")?n.form:e;i&&!G._data(i,"_submit_attached")&&(G.event.add(i,"submit._submit",function(t){t._submit_bubble=!0}),G._data(i,"_submit_attached",!0))}),void 0)},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&G.event.simulate("submit",this.parentNode,t,!0))},teardown:function(){return G.nodeName(this,"form")?!1:(G.event.remove(this,"._submit"),void 0)}}),G.support.changeBubbles||(G.event.special.change={setup:function(){return Ne.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(G.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)}),G.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),G.event.simulate("change",this,t,!0)})),!1):(G.event.add(this,"beforeactivate._change",function(t){var e=t.target;Ne.test(e.nodeName)&&!G._data(e,"_change_attached")&&(G.event.add(e,"change._change",function(t){this.parentNode&&!t.isSimulated&&!t.isTrigger&&G.event.simulate("change",this.parentNode,t,!0)}),G._data(e,"_change_attached",!0))}),void 0)},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return G.event.remove(this,"._change"),!Ne.test(this.nodeName)}}),G.support.focusinBubbles||G.each({focus:"focusin",blur:"focusout"},function(t,e){var n=0,i=function(t){G.event.simulate(e,t.target,G.event.fix(t),!0)};G.event.special[e]={setup:function(){0===n++&&W.addEventListener(t,i,!0)},teardown:function(){0===--n&&W.removeEventListener(t,i,!0)}}}),G.fn.extend({on:function(t,n,i,o,s){var a,l;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=e);for(l in t)this.on(l,n,i,t[l],s);return this}if(null==i&&null==o?(o=n,i=n=e):null==o&&("string"==typeof n?(o=i,i=e):(o=i,i=n,n=e)),o===!1)o=r;else if(!o)return this;return 1===s&&(a=o,o=function(t){return G().off(t),a.apply(this,arguments)},o.guid=a.guid||(a.guid=G.guid++)),this.each(function(){G.event.add(this,t,o,i,n)})},one:function(t,e,n,i){return this.on(t,e,n,i,1)},off:function(t,n,i){var o,s;if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,G(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"==typeof t){for(s in t)this.off(s,n,t[s]);return this}return(n===!1||"function"==typeof n)&&(i=n,n=e),i===!1&&(i=r),this.each(function(){G.event.remove(this,t,i,n)})},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},live:function(t,e,n){return G(this.context).on(t,this.selector,e,n),this},die:function(t,e){return G(this.context).off(t,this.selector||"**",e),this},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},trigger:function(t,e){return this.each(function(){G.event.trigger(t,e,this)})},triggerHandler:function(t,e){return this[0]?G.event.trigger(t,e,this[0],!0):void 0},toggle:function(t){var e=arguments,n=t.guid||G.guid++,i=0,o=function(n){var o=(G._data(this,"lastToggle"+t.guid)||0)%i;return G._data(this,"lastToggle"+t.guid,o+1),n.preventDefault(),e[o].apply(this,arguments)||!1};for(o.guid=n;i<e.length;)e[i++].guid=n;return this.click(o)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),G.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){G.fn[e]=function(t,n){return null==n&&(n=t,t=null),arguments.length>0?this.on(e,null,t,n):this.trigger(e)},Ae.test(e)&&(G.event.fixHooks[e]=G.event.keyHooks),De.test(e)&&(G.event.fixHooks[e]=G.event.mouseHooks)}),function(t,e){function n(t,e,n,i){n=n||[],e=e||D;var o,r,s,a,l=e.nodeType;if(!t||"string"!=typeof t)return n;if(1!==l&&9!==l)return[];if(s=w(e),!s&&!i&&(o=ne.exec(t)))if(a=o[1]){if(9===l){if(r=e.getElementById(a),!r||!r.parentNode)return n;if(r.id===a)return n.push(r),n}else if(e.ownerDocument&&(r=e.ownerDocument.getElementById(a))&&C(e,r)&&r.id===a)return n.push(r),n}else{if(o[2])return P.apply(n,F.call(e.getElementsByTagName(t),0)),n;if((a=o[3])&&de&&e.getElementsByClassName)return P.apply(n,F.call(e.getElementsByClassName(a),0)),n}return m(t.replace(K,"$1"),e,n,i,s)}function i(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function o(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function r(t){return O(function(e){return e=+e,O(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function s(t,e,n){if(t===e)return n;for(var i=t.nextSibling;i;){if(i===e)return-1;i=i.nextSibling}return 1}function a(t,e){var i,o,r,s,a,l,u,c=R[j][t];if(c)return e?0:c.slice(0);for(a=t,l=[],u=b.preFilter;a;){(!i||(o=Z.exec(a)))&&(o&&(a=a.slice(o[0].length)),l.push(r=[])),i=!1,(o=te.exec(a))&&(r.push(i=new A(o.shift())),a=a.slice(i.length),i.type=o[0].replace(K," "));for(s in b.filter)(o=ae[s].exec(a))&&(!u[s]||(o=u[s](o,D,!0)))&&(r.push(i=new A(o.shift())),a=a.slice(i.length),i.type=s,i.matches=o);if(!i)break}return e?a.length:a?n.error(t):R(t,l).slice(0)}function l(t,e,n){var i=e.dir,o=n&&"parentNode"===e.dir,r=q++;return e.first?function(e,n,r){for(;e=e[i];)if(o||1===e.nodeType)return t(e,n,r)}:function(e,n,s){if(s){for(;e=e[i];)if((o||1===e.nodeType)&&t(e,n,s))return e}else for(var a,l=H+" "+r+" ",u=l+v;e=e[i];)if(o||1===e.nodeType){if((a=e[j])===u)return e.sizset;if("string"==typeof a&&0===a.indexOf(l)){if(e.sizset)return e}else{if(e[j]=u,t(e,n,s))return e.sizset=!0,e;e.sizset=!1}}}}function u(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function c(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,u=null!=e;l>a;a++)(r=t[a])&&(!n||n(r,i,o))&&(s.push(r),u&&e.push(a));return s}function f(t,e,n,i,o,r){return i&&!i[j]&&(i=f(i)),o&&!o[j]&&(o=f(o,r)),O(function(r,s,a,l){if(!r||!o){var u,f,d,h=[],m=[],g=s.length,v=r||p(e||"*",a.nodeType?[a]:a,[],r),y=!t||!r&&e?v:c(v,h,t,a,l),b=n?o||(r?t:g||i)?[]:s:y;if(n&&n(y,b,a,l),i)for(d=c(b,m),i(d,[],a,l),u=d.length;u--;)(f=d[u])&&(b[m[u]]=!(y[m[u]]=f));if(r)for(u=t&&b.length;u--;)(f=b[u])&&(r[h[u]]=!(s[h[u]]=f));else b=c(b===s?b.splice(g,b.length):b),o?o(null,s,b,l):P.apply(s,b)}})}function d(t){for(var e,n,i,o=t.length,r=b.relative[t[0].type],s=r||b.relative[" "],a=r?1:0,c=l(function(t){return t===e},s,!0),h=l(function(t){return _.call(e,t)>-1},s,!0),p=[function(t,n,i){return!r&&(i||n!==E)||((e=n).nodeType?c(t,n,i):h(t,n,i))}];o>a;a++)if(n=b.relative[t[a].type])p=[l(u(p),n)];else{if(n=b.filter[t[a].type].apply(null,t[a].matches),n[j]){for(i=++a;o>i&&!b.relative[t[i].type];i++);return f(a>1&&u(p),a>1&&t.slice(0,a-1).join("").replace(K,"$1"),n,i>a&&d(t.slice(a,i)),o>i&&d(t=t.slice(i)),o>i&&t.join(""))}p.push(n)}return u(p)}function h(t,e){var i=e.length>0,o=t.length>0,r=function(s,a,l,u,f){var d,h,p,m=[],g=0,y="0",x=s&&[],w=null!=f,C=E,T=s||o&&b.find.TAG("*",f&&a.parentNode||a),k=H+=null==C?1:Math.E;for(w&&(E=a!==D&&a,v=r.el);null!=(d=T[y]);y++){if(o&&d){for(h=0;p=t[h];h++)if(p(d,a,l)){u.push(d);break}w&&(H=k,v=++r.el)}i&&((d=!p&&d)&&g--,s&&x.push(d))}if(g+=y,i&&y!==g){for(h=0;p=e[h];h++)p(x,m,a,l);if(s){if(g>0)for(;y--;)!x[y]&&!m[y]&&(m[y]=M.call(u));m=c(m)}P.apply(u,m),w&&!s&&m.length>0&&g+e.length>1&&n.uniqueSort(u)}return w&&(H=k,E=C),x};return r.el=0,i?O(r):r}function p(t,e,i,o){for(var r=0,s=e.length;s>r;r++)n(t,e[r],i,o);return i}function m(t,e,n,i,o){var r,s,l,u,c,f=a(t);if(f.length,!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(l=s[0]).type&&9===e.nodeType&&!o&&b.relative[s[1].type]){if(e=b.find.ID(l.matches[0].replace(se,""),e,o)[0],!e)return n;t=t.slice(s.shift().length)}for(r=ae.POS.test(t)?-1:s.length-1;r>=0&&(l=s[r],!b.relative[u=l.type]);r--)if((c=b.find[u])&&(i=c(l.matches[0].replace(se,""),ie.test(s[0].type)&&e.parentNode||e,o))){if(s.splice(r,1),t=i.length&&s.join(""),!t)return P.apply(n,F.call(i,0)),n;break}}return T(t,f)(i,e,o,n,ie.test(t)),n}function g(){}var v,y,b,x,w,C,T,k,$,E,N=!0,S="undefined",j=("sizcache"+Math.random()).replace(".",""),A=String,D=t.document,L=D.documentElement,H=0,q=0,M=[].pop,P=[].push,F=[].slice,_=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;return-1},O=function(t,e){return t[j]=null==e||e,t},B=function(){var t={},e=[];return O(function(n,i){return e.push(n)>b.cacheLength&&delete t[e.shift()],t[n]=i},t)},W=B(),R=B(),I=B(),z="[\\x20\\t\\r\\n\\f]",X="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",Q=X.replace("w","w#"),U="([*^$|!~]?=)",V="\\["+z+"*("+X+")"+z+"*(?:"+U+z+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+Q+")|)|)"+z+"*\\]",Y=":("+X+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+V+")|[^:]|\\\\.)*|.*))\\)|)",J=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+z+"*((?:-\\d)?\\d*)"+z+"*\\)|)(?=[^-]|$)",K=new RegExp("^"+z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+z+"+$","g"),Z=new RegExp("^"+z+"*,"+z+"*"),te=new RegExp("^"+z+"*([\\x20\\t\\r\\n\\f>+~])"+z+"*"),ee=new RegExp(Y),ne=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ie=/[\x20\t\r\n\f]*[+~]/,oe=/h\d/i,re=/input|select|textarea|button/i,se=/\\(?!\\)/g,ae={ID:new RegExp("^#("+X+")"),CLASS:new RegExp("^\\.("+X+")"),NAME:new RegExp("^\\[name=['\"]?("+X+")['\"]?\\]"),TAG:new RegExp("^("+X.replace("w","w*")+")"),ATTR:new RegExp("^"+V),PSEUDO:new RegExp("^"+Y),POS:new RegExp(J,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+z+"*(even|odd|(([+-]|)(\\d*)n|)"+z+"*(?:([+-]|)"+z+"*(\\d+)|))"+z+"*\\)|)","i"),needsContext:new RegExp("^"+z+"*[>+~]|"+J,"i")},le=function(t){var e=D.createElement("div");try{return t(e)}catch(n){return!1}finally{e=null}},ue=le(function(t){return t.appendChild(D.createComment("")),!t.getElementsByTagName("*").length}),ce=le(function(t){return t.innerHTML="<a href='#'></a>",t.firstChild&&typeof t.firstChild.getAttribute!==S&&"#"===t.firstChild.getAttribute("href")}),fe=le(function(t){t.innerHTML="<select></select>";var e=typeof t.lastChild.getAttribute("multiple");return"boolean"!==e&&"string"!==e}),de=le(function(t){return t.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",t.getElementsByClassName&&t.getElementsByClassName("e").length?(t.lastChild.className="e",2===t.getElementsByClassName("e").length):!1}),he=le(function(t){t.id=j+0,t.innerHTML="<a name='"+j+"'></a><div name='"+j+"'></div>",L.insertBefore(t,L.firstChild);var e=D.getElementsByName&&D.getElementsByName(j).length===2+D.getElementsByName(j+0).length;return y=!D.getElementById(j),L.removeChild(t),e});try{F.call(L.childNodes,0)[0].nodeType}catch(pe){F=function(t){for(var e,n=[];e=this[t];t++)n.push(e);return n}}n.matches=function(t,e){return n(t,null,null,e)},n.matchesSelector=function(t,e){return n(e,null,null,[t]).length>0},x=n.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=x(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i];i++)n+=x(e);return n},w=n.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},C=n.contains=L.contains?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!!(i&&1===i.nodeType&&n.contains&&n.contains(i))}:L.compareDocumentPosition?function(t,e){return e&&!!(16&t.compareDocumentPosition(e))}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1},n.attr=function(t,e){var n,i=w(t);return i||(e=e.toLowerCase()),(n=b.attrHandle[e])?n(t):i||fe?t.getAttribute(e):(n=t.getAttributeNode(e),n?"boolean"==typeof t[e]?t[e]?e:null:n.specified?n.value:null:null)},b=n.selectors={cacheLength:50,createPseudo:O,match:ae,attrHandle:ce?{}:{href:function(t){return t.getAttribute("href",2)},type:function(t){return t.getAttribute("type")}},find:{ID:y?function(t,e,n){if(typeof e.getElementById!==S&&!n){var i=e.getElementById(t);return i&&i.parentNode?[i]:[]}}:function(t,n,i){if(typeof n.getElementById!==S&&!i){var o=n.getElementById(t);return o?o.id===t||typeof o.getAttributeNode!==S&&o.getAttributeNode("id").value===t?[o]:e:[]}},TAG:ue?function(t,e){return typeof e.getElementsByTagName!==S?e.getElementsByTagName(t):void 0}:function(t,e){var n=e.getElementsByTagName(t);if("*"===t){for(var i,o=[],r=0;i=n[r];r++)1===i.nodeType&&o.push(i);return o}return n},NAME:he&&function(t,e){return typeof e.getElementsByName!==S?e.getElementsByName(name):void 0},CLASS:de&&function(t,e,n){return typeof e.getElementsByClassName===S||n?void 0:e.getElementsByClassName(t)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(se,""),t[3]=(t[4]||t[5]||"").replace(se,""),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1]?(t[2]||n.error(t[0]),t[3]=+(t[3]?t[4]+(t[5]||1):2*("even"===t[2]||"odd"===t[2])),t[4]=+(t[6]+t[7]||"odd"===t[2])):t[2]&&n.error(t[0]),t},PSEUDO:function(t){var e,n;return ae.CHILD.test(t[0])?null:(t[3]?t[2]=t[3]:(e=t[4])&&(ee.test(e)&&(n=a(e,!0))&&(n=e.indexOf(")",e.length-n)-e.length)&&(e=e.slice(0,n),t[0]=t[0].slice(0,n)),t[2]=e),t.slice(0,3))}},filter:{ID:y?function(t){return t=t.replace(se,""),function(e){return e.getAttribute("id")===t}}:function(t){return t=t.replace(se,""),function(e){var n=typeof e.getAttributeNode!==S&&e.getAttributeNode("id");return n&&n.value===t}},TAG:function(t){return"*"===t?function(){return!0}:(t=t.replace(se,"").toLowerCase(),function(e){return e.nodeName&&e.nodeName.toLowerCase()===t})},CLASS:function(t){var e=W[j][t];return e||(e=W(t,new RegExp("(^|"+z+")"+t+"("+z+"|$)"))),function(t){return e.test(t.className||typeof t.getAttribute!==S&&t.getAttribute("class")||"")}},ATTR:function(t,e,i){return function(o){var r=n.attr(o,t);return null==r?"!="===e:e?(r+="","="===e?r===i:"!="===e?r!==i:"^="===e?i&&0===r.indexOf(i):"*="===e?i&&r.indexOf(i)>-1:"$="===e?i&&r.substr(r.length-i.length)===i:"~="===e?(" "+r+" ").indexOf(i)>-1:"|="===e?r===i||r.substr(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i){return"nth"===t?function(t){var e,o,r=t.parentNode;if(1===n&&0===i)return!0;if(r)for(o=0,e=r.firstChild;e&&(1!==e.nodeType||(o++,t!==e));e=e.nextSibling);return o-=i,o===n||0===o%n&&o/n>=0}:function(e){var n=e;switch(t){case"only":case"first":for(;n=n.previousSibling;)if(1===n.nodeType)return!1;if("first"===t)return!0;n=e;case"last":for(;n=n.nextSibling;)if(1===n.nodeType)return!1;return!0}}},PSEUDO:function(t,e){var i,o=b.pseudos[t]||b.setFilters[t.toLowerCase()]||n.error("unsupported pseudo: "+t);return o[j]?o(e):o.length>1?(i=[t,t,"",e],b.setFilters.hasOwnProperty(t.toLowerCase())?O(function(t,n){for(var i,r=o(t,e),s=r.length;s--;)i=_.call(t,r[s]),t[i]=!(n[i]=r[s])}):function(t){return o(t,0,i)}):o}},pseudos:{not:O(function(t){var e=[],n=[],i=T(t.replace(K,"$1"));return i[j]?O(function(t,e,n,o){for(var r,s=i(t,null,o,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,o,r){return e[0]=t,i(e,null,r,n),!n.pop()}}),has:O(function(t){return function(e){return n(t,e).length>0}}),contains:O(function(t){return function(e){return(e.textContent||e.innerText||x(e)).indexOf(t)>-1}}),enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},parent:function(t){return!b.pseudos.empty(t)},empty:function(t){var e;for(t=t.firstChild;t;){if(t.nodeName>"@"||3===(e=t.nodeType)||4===e)return!1;t=t.nextSibling}return!0},header:function(t){return oe.test(t.nodeName)},text:function(t){var e,n;return"input"===t.nodeName.toLowerCase()&&"text"===(e=t.type)&&(null==(n=t.getAttribute("type"))||n.toLowerCase()===e)},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:o("submit"),reset:o("reset"),button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},input:function(t){return re.test(t.nodeName)},focus:function(t){var e=t.ownerDocument;return!(t!==e.activeElement||e.hasFocus&&!e.hasFocus()||!t.type&&!t.href)},active:function(t){return t===t.ownerDocument.activeElement},first:r(function(){return[0]}),last:r(function(t,e){return[e-1]}),eq:r(function(t,e,n){return[0>n?n+e:n]}),even:r(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:r(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:r(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:r(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},k=L.compareDocumentPosition?function(t,e){return t===e?($=!0,0):(t.compareDocumentPosition&&e.compareDocumentPosition?4&t.compareDocumentPosition(e):t.compareDocumentPosition)?-1:1}:function(t,e){if(t===e)return $=!0,0;if(t.sourceIndex&&e.sourceIndex)return t.sourceIndex-e.sourceIndex;var n,i,o=[],r=[],a=t.parentNode,l=e.parentNode,u=a;if(a===l)return s(t,e);if(!a)return-1;if(!l)return 1;for(;u;)o.unshift(u),u=u.parentNode;for(u=l;u;)r.unshift(u),u=u.parentNode;n=o.length,i=r.length;for(var c=0;n>c&&i>c;c++)if(o[c]!==r[c])return s(o[c],r[c]);return c===n?s(t,r[c],-1):s(o[c],e,1)},[0,0].sort(k),N=!$,n.uniqueSort=function(t){var e,n=1;if($=N,t.sort(k),$)for(;e=t[n];n++)e===t[n-1]&&t.splice(n--,1);return t},n.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},T=n.compile=function(t,e){var n,i=[],o=[],r=I[j][t];if(!r){for(e||(e=a(t)),n=e.length;n--;)r=d(e[n]),r[j]?i.push(r):o.push(r);r=I(t,h(o,i))}return r},D.querySelectorAll&&function(){var t,e=m,i=/'|\\/g,o=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,r=[":focus"],s=[":active",":focus"],l=L.matchesSelector||L.mozMatchesSelector||L.webkitMatchesSelector||L.oMatchesSelector||L.msMatchesSelector;le(function(t){t.innerHTML="<select><option selected=''></option></select>",t.querySelectorAll("[selected]").length||r.push("\\["+z+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),t.querySelectorAll(":checked").length||r.push(":checked")}),le(function(t){t.innerHTML="<p test=''></p>",t.querySelectorAll("[test^='']").length&&r.push("[*^$]="+z+"*(?:\"\"|'')"),t.innerHTML="<input type='hidden'/>",t.querySelectorAll(":enabled").length||r.push(":enabled",":disabled")}),r=new RegExp(r.join("|")),m=function(t,n,o,s,l){if(!(s||l||r&&r.test(t))){var u,c,f=!0,d=j,h=n,p=9===n.nodeType&&t;if(1===n.nodeType&&"object"!==n.nodeName.toLowerCase()){for(u=a(t),(f=n.getAttribute("id"))?d=f.replace(i,"\\$&"):n.setAttribute("id",d),d="[id='"+d+"'] ",c=u.length;c--;)u[c]=d+u[c].join("");h=ie.test(t)&&n.parentNode||n,p=u.join(",")}if(p)try{return P.apply(o,F.call(h.querySelectorAll(p),0)),o}catch(m){}finally{f||n.removeAttribute("id")}}return e(t,n,o,s,l)},l&&(le(function(e){t=l.call(e,"div");try{l.call(e,"[test!='']:sizzle"),s.push("!=",Y)}catch(n){}}),s=new RegExp(s.join("|")),n.matchesSelector=function(e,i){if(i=i.replace(o,"='$1']"),!(w(e)||s.test(i)||r&&r.test(i)))try{var a=l.call(e,i);if(a||t||e.document&&11!==e.document.nodeType)return a}catch(u){}return n(i,null,null,[e]).length>0})}(),b.pseudos.nth=b.pseudos.eq,b.filters=g.prototype=b.pseudos,b.setFilters=new g,n.attr=G.attr,G.find=n,G.expr=n.selectors,G.expr[":"]=G.expr.pseudos,G.unique=n.uniqueSort,G.text=n.getText,G.isXMLDoc=n.isXML,G.contains=n.contains}(t);var qe=/Until$/,Me=/^(?:parents|prev(?:Until|All))/,Pe=/^.[^:#\[\.,]*$/,Fe=G.expr.match.needsContext,_e={children:!0,contents:!0,next:!0,prev:!0};G.fn.extend({find:function(t){var e,n,i,o,r,s,a=this;if("string"!=typeof t)return G(t).filter(function(){for(e=0,n=a.length;n>e;e++)if(G.contains(a[e],this))return!0});for(s=this.pushStack("","find",t),e=0,n=this.length;n>e;e++)if(i=s.length,G.find(t,this[e],s),e>0)for(o=i;o<s.length;o++)for(r=0;i>r;r++)if(s[r]===s[o]){s.splice(o--,1);break}return s},has:function(t){var e,n=G(t,this),i=n.length;return this.filter(function(){for(e=0;i>e;e++)if(G.contains(this,n[e]))return!0})},not:function(t){return this.pushStack(u(this,t,!1),"not",t)},filter:function(t){return this.pushStack(u(this,t,!0),"filter",t)},is:function(t){return!!t&&("string"==typeof t?Fe.test(t)?G(t,this.context).index(this[0])>=0:G.filter(t,this).length>0:this.filter(t).length>0)},closest:function(t,e){for(var n,i=0,o=this.length,r=[],s=Fe.test(t)||"string"!=typeof t?G(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n.ownerDocument&&n!==e&&11!==n.nodeType;){if(s?s.index(n)>-1:G.find.matchesSelector(n,t)){r.push(n);break}n=n.parentNode}return r=r.length>1?G.unique(r):r,this.pushStack(r,"closest",t)},index:function(t){return t?"string"==typeof t?G.inArray(this[0],G(t)):G.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(t,e){var n="string"==typeof t?G(t,e):G.makeArray(t&&t.nodeType?[t]:t),i=G.merge(this.get(),n);return this.pushStack(a(n[0])||a(i[0])?i:G.unique(i))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),G.fn.andSelf=G.fn.addBack,G.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return G.dir(t,"parentNode")},parentsUntil:function(t,e,n){return G.dir(t,"parentNode",n)},next:function(t){return l(t,"nextSibling")},prev:function(t){return l(t,"previousSibling")},nextAll:function(t){return G.dir(t,"nextSibling")},prevAll:function(t){return G.dir(t,"previousSibling")},nextUntil:function(t,e,n){return G.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return G.dir(t,"previousSibling",n)},siblings:function(t){return G.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return G.sibling(t.firstChild)},contents:function(t){return G.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:G.merge([],t.childNodes)}},function(t,e){G.fn[t]=function(n,i){var o=G.map(this,e,n);return qe.test(t)||(i=n),i&&"string"==typeof i&&(o=G.filter(i,o)),o=this.length>1&&!_e[t]?G.unique(o):o,this.length>1&&Me.test(t)&&(o=o.reverse()),this.pushStack(o,t,U.call(arguments).join(","))}}),G.extend({filter:function(t,e,n){return n&&(t=":not("+t+")"),1===e.length?G.find.matchesSelector(e[0],t)?[e[0]]:[]:G.find.matches(t,e)},dir:function(t,n,i){for(var o=[],r=t[n];r&&9!==r.nodeType&&(i===e||1!==r.nodeType||!G(r).is(i));)1===r.nodeType&&o.push(r),r=r[n];return o},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}});var Oe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Be=/ jQuery\d+="(?:null|\d+)"/g,We=/^\s+/,Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ie=/<([\w:]+)/,ze=/<tbody/i,Xe=/<|&#?\w+;/,Qe=/<(?:script|style|link)/i,Ue=/<(?:script|object|embed|option|style)/i,Ve=new RegExp("<(?:"+Oe+")[\\s/>]","i"),Ye=/^(?:checkbox|radio)$/,Je=/checked\s*(?:[^=]|=\s*.checked.)/i,Ke=/\/(java|ecma)script/i,Ge=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Ze={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},tn=c(W),en=tn.appendChild(W.createElement("div"));Ze.optgroup=Ze.option,Ze.tbody=Ze.tfoot=Ze.colgroup=Ze.caption=Ze.thead,Ze.th=Ze.td,G.support.htmlSerialize||(Ze._default=[1,"X<div>","</div>"]),G.fn.extend({text:function(t){return G.access(this,function(t){return t===e?G.text(this):this.empty().append((this[0]&&this[0].ownerDocument||W).createTextNode(t))},null,t,arguments.length)},wrapAll:function(t){if(G.isFunction(t))return this.each(function(e){G(this).wrapAll(t.call(this,e))});if(this[0]){var e=G(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t}).append(this)}return this},wrapInner:function(t){return G.isFunction(t)?this.each(function(e){G(this).wrapInner(t.call(this,e))}):this.each(function(){var e=G(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=G.isFunction(t);return this.each(function(n){G(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){G.nodeName(this,"body")||G(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(t){(1===this.nodeType||11===this.nodeType)&&this.appendChild(t)})},prepend:function(){return this.domManip(arguments,!0,function(t){(1===this.nodeType||11===this.nodeType)&&this.insertBefore(t,this.firstChild)})},before:function(){if(!a(this[0]))return this.domManip(arguments,!1,function(t){this.parentNode.insertBefore(t,this)});if(arguments.length){var t=G.clean(arguments);return this.pushStack(G.merge(t,this),"before",this.selector)}},after:function(){if(!a(this[0]))return this.domManip(arguments,!1,function(t){this.parentNode.insertBefore(t,this.nextSibling)});if(arguments.length){var t=G.clean(arguments);return this.pushStack(G.merge(this,t),"after",this.selector)}},remove:function(t,e){for(var n,i=0;null!=(n=this[i]);i++)(!t||G.filter(t,[n]).length)&&(!e&&1===n.nodeType&&(G.cleanData(n.getElementsByTagName("*")),G.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)for(1===t.nodeType&&G.cleanData(t.getElementsByTagName("*"));t.firstChild;)t.removeChild(t.firstChild);return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return G.clone(this,t,e)})},html:function(t){return G.access(this,function(t){var n=this[0]||{},i=0,o=this.length;if(t===e)return 1===n.nodeType?n.innerHTML.replace(Be,""):e;if(!("string"!=typeof t||Qe.test(t)||!G.support.htmlSerialize&&Ve.test(t)||!G.support.leadingWhitespace&&We.test(t)||Ze[(Ie.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(Re,"<$1></$2>");try{for(;o>i;i++)n=this[i]||{},1===n.nodeType&&(G.cleanData(n.getElementsByTagName("*")),n.innerHTML=t);n=0}catch(r){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(t){return a(this[0])?this.length?this.pushStack(G(G.isFunction(t)?t():t),"replaceWith",t):this:G.isFunction(t)?this.each(function(e){var n=G(this),i=n.html();n.replaceWith(t.call(this,e,i))}):("string"!=typeof t&&(t=G(t).detach()),this.each(function(){var e=this.nextSibling,n=this.parentNode;G(this).remove(),e?G(e).before(t):G(n).append(t)}))},detach:function(t){return this.remove(t,!0)},domManip:function(t,n,i){t=[].concat.apply([],t);var o,r,s,a,l=0,u=t[0],c=[],d=this.length;if(!G.support.checkClone&&d>1&&"string"==typeof u&&Je.test(u))return this.each(function(){G(this).domManip(t,n,i)});if(G.isFunction(u))return this.each(function(o){var r=G(this);t[0]=u.call(this,o,n?r.html():e),r.domManip(t,n,i)});if(this[0]){if(o=G.buildFragment(t,this,c),s=o.fragment,r=s.firstChild,1===s.childNodes.length&&(s=r),r)for(n=n&&G.nodeName(r,"tr"),a=o.cacheable||d-1;d>l;l++)i.call(n&&G.nodeName(this[l],"table")?f(this[l],"tbody"):this[l],l===a?s:G.clone(s,!0,!0));s=r=null,c.length&&G.each(c,function(t,e){e.src?G.ajax?G.ajax({url:e.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):G.error("no ajax"):G.globalEval((e.text||e.textContent||e.innerHTML||"").replace(Ge,"")),e.parentNode&&e.parentNode.removeChild(e)})}return this}}),G.buildFragment=function(t,n,i){var o,r,s,a=t[0];return n=n||W,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,1===t.length&&"string"==typeof a&&a.length<512&&n===W&&"<"===a.charAt(0)&&!Ue.test(a)&&(G.support.checkClone||!Je.test(a))&&(G.support.html5Clone||!Ve.test(a))&&(r=!0,o=G.fragments[a],s=o!==e),o||(o=n.createDocumentFragment(),G.clean(t,n,o,i),r&&(G.fragments[a]=s&&o)),{fragment:o,cacheable:r}},G.fragments={},G.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){G.fn[t]=function(n){var i,o=0,r=[],s=G(n),a=s.length,l=1===this.length&&this[0].parentNode;if((null==l||l&&11===l.nodeType&&1===l.childNodes.length)&&1===a)return s[e](this[0]),this;for(;a>o;o++)i=(o>0?this.clone(!0):this).get(),G(s[o])[e](i),r=r.concat(i);return this.pushStack(r,t,s.selector)}}),G.extend({clone:function(t,e,n){var i,o,r,s;if(G.support.html5Clone||G.isXMLDoc(t)||!Ve.test("<"+t.nodeName+">")?s=t.cloneNode(!0):(en.innerHTML=t.outerHTML,en.removeChild(s=en.firstChild)),!(G.support.noCloneEvent&&G.support.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||G.isXMLDoc(t)))for(h(t,s),i=p(t),o=p(s),r=0;i[r];++r)o[r]&&h(i[r],o[r]);if(e&&(d(t,s),n))for(i=p(t),o=p(s),r=0;i[r];++r)d(i[r],o[r]);return i=o=null,s
},clean:function(t,e,n,i){var o,r,s,a,l,u,f,d,h,p,g,v=e===W&&tn,y=[];for(e&&"undefined"!=typeof e.createDocumentFragment||(e=W),o=0;null!=(s=t[o]);o++)if("number"==typeof s&&(s+=""),s){if("string"==typeof s)if(Xe.test(s)){for(v=v||c(e),f=e.createElement("div"),v.appendChild(f),s=s.replace(Re,"<$1></$2>"),a=(Ie.exec(s)||["",""])[1].toLowerCase(),l=Ze[a]||Ze._default,u=l[0],f.innerHTML=l[1]+s+l[2];u--;)f=f.lastChild;if(!G.support.tbody)for(d=ze.test(s),h="table"!==a||d?"<table>"!==l[1]||d?[]:f.childNodes:f.firstChild&&f.firstChild.childNodes,r=h.length-1;r>=0;--r)G.nodeName(h[r],"tbody")&&!h[r].childNodes.length&&h[r].parentNode.removeChild(h[r]);!G.support.leadingWhitespace&&We.test(s)&&f.insertBefore(e.createTextNode(We.exec(s)[0]),f.firstChild),s=f.childNodes,f.parentNode.removeChild(f)}else s=e.createTextNode(s);s.nodeType?y.push(s):G.merge(y,s)}if(f&&(s=f=v=null),!G.support.appendChecked)for(o=0;null!=(s=y[o]);o++)G.nodeName(s,"input")?m(s):"undefined"!=typeof s.getElementsByTagName&&G.grep(s.getElementsByTagName("input"),m);if(n)for(p=function(t){return!t.type||Ke.test(t.type)?i?i.push(t.parentNode?t.parentNode.removeChild(t):t):n.appendChild(t):void 0},o=0;null!=(s=y[o]);o++)G.nodeName(s,"script")&&p(s)||(n.appendChild(s),"undefined"!=typeof s.getElementsByTagName&&(g=G.grep(G.merge([],s.getElementsByTagName("script")),p),y.splice.apply(y,[o+1,0].concat(g)),o+=g.length));return y},cleanData:function(t,e){for(var n,i,o,r,s=0,a=G.expando,l=G.cache,u=G.support.deleteExpando,c=G.event.special;null!=(o=t[s]);s++)if((e||G.acceptData(o))&&(i=o[a],n=i&&l[i])){if(n.events)for(r in n.events)c[r]?G.event.remove(o,r):G.removeEvent(o,r,n.handle);l[i]&&(delete l[i],u?delete o[a]:o.removeAttribute?o.removeAttribute(a):o[a]=null,G.deletedIds.push(i))}}}),function(){var t,e;G.uaMatch=function(t){t=t.toLowerCase();var e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}},t=G.uaMatch(I.userAgent),e={},t.browser&&(e[t.browser]=!0,e.version=t.version),e.chrome?e.webkit=!0:e.webkit&&(e.safari=!0),G.browser=e,G.sub=function(){function t(e,n){return new t.fn.init(e,n)}G.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function n(n,i){return i&&i instanceof G&&!(i instanceof t)&&(i=t(i)),G.fn.init.call(this,n,i,e)},t.fn.init.prototype=t.fn;var e=t(W);return t}}();var nn,on,rn,sn=/alpha\([^)]*\)/i,an=/opacity=([^)]*)/,ln=/^(top|right|bottom|left)$/,un=/^(none|table(?!-c[ea]).+)/,cn=/^margin/,fn=new RegExp("^("+Z+")(.*)$","i"),dn=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),hn=new RegExp("^([-+])=("+Z+")","i"),pn={},mn={position:"absolute",visibility:"hidden",display:"block"},gn={letterSpacing:0,fontWeight:400},vn=["Top","Right","Bottom","Left"],yn=["Webkit","O","Moz","ms"],bn=G.fn.toggle;G.fn.extend({css:function(t,n){return G.access(this,function(t,n,i){return i!==e?G.style(t,n,i):G.css(t,n)},t,n,arguments.length>1)},show:function(){return y(this,!0)},hide:function(){return y(this)},toggle:function(t,e){var n="boolean"==typeof t;return G.isFunction(t)&&G.isFunction(e)?bn.apply(this,arguments):this.each(function(){(n?t:v(this))?G(this).show():G(this).hide()})}}),G.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=nn(t,"opacity");return""===n?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":G.support.cssFloat?"cssFloat":"styleFloat"},style:function(t,n,i,o){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,s,a,l=G.camelCase(n),u=t.style;if(n=G.cssProps[l]||(G.cssProps[l]=g(u,l)),a=G.cssHooks[n]||G.cssHooks[l],i===e)return a&&"get"in a&&(r=a.get(t,!1,o))!==e?r:u[n];if(s=typeof i,"string"===s&&(r=hn.exec(i))&&(i=(r[1]+1)*r[2]+parseFloat(G.css(t,n)),s="number"),!(null==i||"number"===s&&isNaN(i)||("number"===s&&!G.cssNumber[l]&&(i+="px"),a&&"set"in a&&(i=a.set(t,i,o))===e)))try{u[n]=i}catch(c){}}},css:function(t,n,i,o){var r,s,a,l=G.camelCase(n);return n=G.cssProps[l]||(G.cssProps[l]=g(t.style,l)),a=G.cssHooks[n]||G.cssHooks[l],a&&"get"in a&&(r=a.get(t,!0,o)),r===e&&(r=nn(t,n)),"normal"===r&&n in gn&&(r=gn[n]),i||o!==e?(s=parseFloat(r),i||G.isNumeric(s)?s||0:r):r},swap:function(t,e,n){var i,o,r={};for(o in e)r[o]=t.style[o],t.style[o]=e[o];i=n.call(t);for(o in e)t.style[o]=r[o];return i}}),t.getComputedStyle?nn=function(e,n){var i,o,r,s,a=t.getComputedStyle(e,null),l=e.style;return a&&(i=a[n],""===i&&!G.contains(e.ownerDocument,e)&&(i=G.style(e,n)),dn.test(i)&&cn.test(n)&&(o=l.width,r=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=i,i=a.width,l.width=o,l.minWidth=r,l.maxWidth=s)),i}:W.documentElement.currentStyle&&(nn=function(t,e){var n,i,o=t.currentStyle&&t.currentStyle[e],r=t.style;return null==o&&r&&r[e]&&(o=r[e]),dn.test(o)&&!ln.test(e)&&(n=r.left,i=t.runtimeStyle&&t.runtimeStyle.left,i&&(t.runtimeStyle.left=t.currentStyle.left),r.left="fontSize"===e?"1em":o,o=r.pixelLeft+"px",r.left=n,i&&(t.runtimeStyle.left=i)),""===o?"auto":o}),G.each(["height","width"],function(t,e){G.cssHooks[e]={get:function(t,n,i){return n?0===t.offsetWidth&&un.test(nn(t,"display"))?G.swap(t,mn,function(){return w(t,e,i)}):w(t,e,i):void 0},set:function(t,n,i){return b(t,n,i?x(t,e,i,G.support.boxSizing&&"border-box"===G.css(t,"boxSizing")):0)}}}),G.support.opacity||(G.cssHooks.opacity={get:function(t,e){return an.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""},set:function(t,e){var n=t.style,i=t.currentStyle,o=G.isNumeric(e)?"alpha(opacity="+100*e+")":"",r=i&&i.filter||n.filter||"";n.zoom=1,e>=1&&""===G.trim(r.replace(sn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),i&&!i.filter)||(n.filter=sn.test(r)?r.replace(sn,o):r+" "+o)}}),G(function(){G.support.reliableMarginRight||(G.cssHooks.marginRight={get:function(t,e){return G.swap(t,{display:"inline-block"},function(){return e?nn(t,"marginRight"):void 0})}}),!G.support.pixelPosition&&G.fn.position&&G.each(["top","left"],function(t,e){G.cssHooks[e]={get:function(t,n){if(n){var i=nn(t,e);return dn.test(i)?G(t).position()[e]+"px":i}}}})}),G.expr&&G.expr.filters&&(G.expr.filters.hidden=function(t){return 0===t.offsetWidth&&0===t.offsetHeight||!G.support.reliableHiddenOffsets&&"none"===(t.style&&t.style.display||nn(t,"display"))},G.expr.filters.visible=function(t){return!G.expr.filters.hidden(t)}),G.each({margin:"",padding:"",border:"Width"},function(t,e){G.cssHooks[t+e]={expand:function(n){var i,o="string"==typeof n?n.split(" "):[n],r={};for(i=0;4>i;i++)r[t+vn[i]+e]=o[i]||o[i-2]||o[0];return r}},cn.test(t)||(G.cssHooks[t+e].set=b)});var xn=/%20/g,wn=/\[\]$/,Cn=/\r?\n/g,Tn=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,kn=/^(?:select|textarea)/i;G.fn.extend({serialize:function(){return G.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?G.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||kn.test(this.nodeName)||Tn.test(this.type))}).map(function(t,e){var n=G(this).val();return null==n?null:G.isArray(n)?G.map(n,function(t){return{name:e.name,value:t.replace(Cn,"\r\n")}}):{name:e.name,value:n.replace(Cn,"\r\n")}}).get()}}),G.param=function(t,n){var i,o=[],r=function(t,e){e=G.isFunction(e)?e():null==e?"":e,o[o.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(n===e&&(n=G.ajaxSettings&&G.ajaxSettings.traditional),G.isArray(t)||t.jquery&&!G.isPlainObject(t))G.each(t,function(){r(this.name,this.value)});else for(i in t)T(i,t[i],n,r);return o.join("&").replace(xn,"+")};var $n,En,Nn=/#.*$/,Sn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,jn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,An=/^(?:GET|HEAD)$/,Dn=/^\/\//,Ln=/\?/,Hn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,qn=/([?&])_=[^&]*/,Mn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Pn=G.fn.load,Fn={},_n={},On=["*/"]+["*"];try{En=R.href}catch(Bn){En=W.createElement("a"),En.href="",En=En.href}$n=Mn.exec(En.toLowerCase())||[],G.fn.load=function(t,n,i){if("string"!=typeof t&&Pn)return Pn.apply(this,arguments);if(!this.length)return this;var o,r,s,a=this,l=t.indexOf(" ");return l>=0&&(o=t.slice(l,t.length),t=t.slice(0,l)),G.isFunction(n)?(i=n,n=e):n&&"object"==typeof n&&(r="POST"),G.ajax({url:t,type:r,dataType:"html",data:n,complete:function(t,e){i&&a.each(i,s||[t.responseText,e,t])}}).done(function(t){s=arguments,a.html(o?G("<div>").append(t.replace(Hn,"")).find(o):t)}),this},G.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(t,e){G.fn[e]=function(t){return this.on(e,t)}}),G.each(["get","post"],function(t,n){G[n]=function(t,i,o,r){return G.isFunction(i)&&(r=r||o,o=i,i=e),G.ajax({type:n,url:t,data:i,success:o,dataType:r})}}),G.extend({getScript:function(t,n){return G.get(t,e,n,"script")},getJSON:function(t,e,n){return G.get(t,e,n,"json")},ajaxSetup:function(t,e){return e?E(t,G.ajaxSettings):(e=t,t=G.ajaxSettings),E(t,e),t},ajaxSettings:{url:En,isLocal:jn.test($n[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":On},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":t.String,"text html":!0,"text json":G.parseJSON,"text xml":G.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:k(Fn),ajaxTransport:k(_n),ajax:function(t,n){function i(t,n,i,s){var u,f,y,b,w,T=n;2!==x&&(x=2,l&&clearTimeout(l),a=e,r=s||"",C.readyState=t>0?4:0,i&&(b=N(d,C,i)),t>=200&&300>t||304===t?(d.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(G.lastModified[o]=w),w=C.getResponseHeader("Etag"),w&&(G.etag[o]=w)),304===t?(T="notmodified",u=!0):(u=S(d,b),T=u.state,f=u.data,y=u.error,u=!y)):(y=T,(!T||t)&&(T="error",0>t&&(t=0))),C.status=t,C.statusText=(n||T)+"",u?m.resolveWith(h,[f,T,C]):m.rejectWith(h,[C,T,y]),C.statusCode(v),v=e,c&&p.trigger("ajax"+(u?"Success":"Error"),[C,d,u?f:y]),g.fireWith(h,[C,T]),c&&(p.trigger("ajaxComplete",[C,d]),--G.active||G.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=e),n=n||{};var o,r,s,a,l,u,c,f,d=G.ajaxSetup({},n),h=d.context||d,p=h!==d&&(h.nodeType||h instanceof G)?G(h):G.event,m=G.Deferred(),g=G.Callbacks("once memory"),v=d.statusCode||{},y={},b={},x=0,w="canceled",C={readyState:0,setRequestHeader:function(t,e){if(!x){var n=t.toLowerCase();t=b[n]=b[n]||t,y[t]=e}return this},getAllResponseHeaders:function(){return 2===x?r:null},getResponseHeader:function(t){var n;if(2===x){if(!s)for(s={};n=Sn.exec(r);)s[n[1].toLowerCase()]=n[2];n=s[t.toLowerCase()]}return n===e?null:n},overrideMimeType:function(t){return x||(d.mimeType=t),this},abort:function(t){return t=t||w,a&&a.abort(t),i(0,t),this}};if(m.promise(C),C.success=C.done,C.error=C.fail,C.complete=g.add,C.statusCode=function(t){if(t){var e;if(2>x)for(e in t)v[e]=[v[e],t[e]];else e=t[C.status],C.always(e)}return this},d.url=((t||d.url)+"").replace(Nn,"").replace(Dn,$n[1]+"//"),d.dataTypes=G.trim(d.dataType||"*").toLowerCase().split(ee),null==d.crossDomain&&(u=Mn.exec(d.url.toLowerCase())||!1,d.crossDomain=u&&u.join(":")+(u[3]?"":"http:"===u[1]?80:443)!==$n.join(":")+($n[3]?"":"http:"===$n[1]?80:443)),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=G.param(d.data,d.traditional)),$(Fn,d,n,C),2===x)return C;if(c=d.global,d.type=d.type.toUpperCase(),d.hasContent=!An.test(d.type),c&&0===G.active++&&G.event.trigger("ajaxStart"),!d.hasContent&&(d.data&&(d.url+=(Ln.test(d.url)?"&":"?")+d.data,delete d.data),o=d.url,d.cache===!1)){var T=G.now(),k=d.url.replace(qn,"$1_="+T);d.url=k+(k===d.url?(Ln.test(d.url)?"&":"?")+"_="+T:"")}(d.data&&d.hasContent&&d.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(o=o||d.url,G.lastModified[o]&&C.setRequestHeader("If-Modified-Since",G.lastModified[o]),G.etag[o]&&C.setRequestHeader("If-None-Match",G.etag[o])),C.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+On+"; q=0.01":""):d.accepts["*"]);for(f in d.headers)C.setRequestHeader(f,d.headers[f]);if(!d.beforeSend||d.beforeSend.call(h,C,d)!==!1&&2!==x){w="abort";for(f in{success:1,error:1,complete:1})C[f](d[f]);if(a=$(_n,d,n,C)){C.readyState=1,c&&p.trigger("ajaxSend",[C,d]),d.async&&d.timeout>0&&(l=setTimeout(function(){C.abort("timeout")},d.timeout));try{x=1,a.send(y,i)}catch(E){if(!(2>x))throw E;i(-1,E)}}else i(-1,"No Transport");return C}return C.abort()},active:0,lastModified:{},etag:{}});var Wn=[],Rn=/\?/,In=/(=)\?(?=&|$)|\?\?/,zn=G.now();G.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Wn.pop()||G.expando+"_"+zn++;return this[t]=!0,t}}),G.ajaxPrefilter("json jsonp",function(n,i,o){var r,s,a,l=n.data,u=n.url,c=n.jsonp!==!1,f=c&&In.test(u),d=c&&!f&&"string"==typeof l&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&In.test(l);return"jsonp"===n.dataTypes[0]||f||d?(r=n.jsonpCallback=G.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,s=t[r],f?n.url=u.replace(In,"$1"+r):d?n.data=l.replace(In,"$1"+r):c&&(n.url+=(Rn.test(u)?"&":"?")+n.jsonp+"="+r),n.converters["script json"]=function(){return a||G.error(r+" was not called"),a[0]},n.dataTypes[0]="json",t[r]=function(){a=arguments},o.always(function(){t[r]=s,n[r]&&(n.jsonpCallback=i.jsonpCallback,Wn.push(r)),a&&G.isFunction(s)&&s(a[0]),a=s=e}),"script"):void 0}),G.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(t){return G.globalEval(t),t}}}),G.ajaxPrefilter("script",function(t){t.cache===e&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),G.ajaxTransport("script",function(t){if(t.crossDomain){var n,i=W.head||W.getElementsByTagName("head")[0]||W.documentElement;return{send:function(o,r){n=W.createElement("script"),n.async="async",t.scriptCharset&&(n.charset=t.scriptCharset),n.src=t.url,n.onload=n.onreadystatechange=function(t,o){(o||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,i&&n.parentNode&&i.removeChild(n),n=e,o||r(200,"success"))},i.insertBefore(n,i.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Xn,Qn=t.ActiveXObject?function(){for(var t in Xn)Xn[t](0,1)}:!1,Un=0;G.ajaxSettings.xhr=t.ActiveXObject?function(){return!this.isLocal&&j()||A()}:j,function(t){G.extend(G.support,{ajax:!!t,cors:!!t&&"withCredentials"in t})}(G.ajaxSettings.xhr()),G.support.ajax&&G.ajaxTransport(function(n){if(!n.crossDomain||G.support.cors){var i;return{send:function(o,r){var s,a,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(a in n.xhrFields)l[a]=n.xhrFields[a];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),!n.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");try{for(a in o)l.setRequestHeader(a,o[a])}catch(u){}l.send(n.hasContent&&n.data||null),i=function(t,o){var a,u,c,f,d;try{if(i&&(o||4===l.readyState))if(i=e,s&&(l.onreadystatechange=G.noop,Qn&&delete Xn[s]),o)4!==l.readyState&&l.abort();else{a=l.status,c=l.getAllResponseHeaders(),f={},d=l.responseXML,d&&d.documentElement&&(f.xml=d);try{f.text=l.responseText}catch(t){}try{u=l.statusText}catch(h){u=""}a||!n.isLocal||n.crossDomain?1223===a&&(a=204):a=f.text?200:404}}catch(p){o||r(-1,p)}f&&r(a,u,f,c)},n.async?4===l.readyState?setTimeout(i,0):(s=++Un,Qn&&(Xn||(Xn={},G(t).unload(Qn)),Xn[s]=i),l.onreadystatechange=i):i()},abort:function(){i&&i(0,1)}}}});var Vn,Yn,Jn=/^(?:toggle|show|hide)$/,Kn=new RegExp("^(?:([-+])=|)("+Z+")([a-z%]*)$","i"),Gn=/queueHooks$/,Zn=[M],ti={"*":[function(t,e){var n,i,o=this.createTween(t,e),r=Kn.exec(e),s=o.cur(),a=+s||0,l=1,u=20;if(r){if(n=+r[2],i=r[3]||(G.cssNumber[t]?"":"px"),"px"!==i&&a){a=G.css(o.elem,t,!0)||n||1;do l=l||".5",a/=l,G.style(o.elem,t,a+i);while(l!==(l=o.cur()/s)&&1!==l&&--u)}o.unit=i,o.start=a,o.end=r[1]?a+(r[1]+1)*n:n}return o}]};G.Animation=G.extend(H,{tweener:function(t,e){G.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var n,i=0,o=t.length;o>i;i++)n=t[i],ti[n]=ti[n]||[],ti[n].unshift(e)},prefilter:function(t,e){e?Zn.unshift(t):Zn.push(t)}}),G.Tween=P,P.prototype={constructor:P,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||"swing",this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(G.cssNumber[n]?"":"px")},cur:function(){var t=P.propHooks[this.prop];return t&&t.get?t.get(this):P.propHooks._default.get(this)},run:function(t){var e,n=P.propHooks[this.prop];return this.pos=e=this.options.duration?G.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):P.propHooks._default.set(this),this}},P.prototype.init.prototype=P.prototype,P.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=G.css(t.elem,t.prop,!1,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){G.fx.step[t.prop]?G.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[G.cssProps[t.prop]]||G.cssHooks[t.prop])?G.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},P.propHooks.scrollTop=P.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},G.each(["toggle","show","hide"],function(t,e){var n=G.fn[e];G.fn[e]=function(i,o,r){return null==i||"boolean"==typeof i||!t&&G.isFunction(i)&&G.isFunction(o)?n.apply(this,arguments):this.animate(F(e,!0),i,o,r)}}),G.fn.extend({fadeTo:function(t,e,n,i){return this.filter(v).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=G.isEmptyObject(t),r=G.speed(e,n,i),s=function(){var e=H(this,G.extend({},t),r);o&&e.stop(!0)};return o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(t,n,i){var o=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=n,n=t,t=e),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,n=null!=t&&t+"queueHooks",r=G.timers,s=G._data(this);if(n)s[n]&&s[n].stop&&o(s[n]);else for(n in s)s[n]&&s[n].stop&&Gn.test(n)&&o(s[n]);for(n=r.length;n--;)r[n].elem===this&&(null==t||r[n].queue===t)&&(r[n].anim.stop(i),e=!1,r.splice(n,1));(e||!i)&&G.dequeue(this,t)})}}),G.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){G.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),G.speed=function(t,e,n){var i=t&&"object"==typeof t?G.extend({},t):{complete:n||!n&&e||G.isFunction(t)&&t,duration:t,easing:n&&e||e&&!G.isFunction(e)&&e};return i.duration=G.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in G.fx.speeds?G.fx.speeds[i.duration]:G.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){G.isFunction(i.old)&&i.old.call(this),i.queue&&G.dequeue(this,i.queue)},i},G.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},G.timers=[],G.fx=P.prototype.init,G.fx.tick=function(){for(var t,e=G.timers,n=0;n<e.length;n++)t=e[n],!t()&&e[n]===t&&e.splice(n--,1);e.length||G.fx.stop()},G.fx.timer=function(t){t()&&G.timers.push(t)&&!Yn&&(Yn=setInterval(G.fx.tick,G.fx.interval))},G.fx.interval=13,G.fx.stop=function(){clearInterval(Yn),Yn=null},G.fx.speeds={slow:600,fast:200,_default:400},G.fx.step={},G.expr&&G.expr.filters&&(G.expr.filters.animated=function(t){return G.grep(G.timers,function(e){return t===e.elem}).length});var ei=/^(?:body|html)$/i;G.fn.offset=function(t){if(arguments.length)return t===e?this:this.each(function(e){G.offset.setOffset(this,t,e)});var n,i,o,r,s,a,l,u={top:0,left:0},c=this[0],f=c&&c.ownerDocument;if(f)return(i=f.body)===c?G.offset.bodyOffset(c):(n=f.documentElement,G.contains(n,c)?("undefined"!=typeof c.getBoundingClientRect&&(u=c.getBoundingClientRect()),o=_(f),r=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,a=o.pageYOffset||n.scrollTop,l=o.pageXOffset||n.scrollLeft,{top:u.top+a-r,left:u.left+l-s}):u)},G.offset={bodyOffset:function(t){var e=t.offsetTop,n=t.offsetLeft;return G.support.doesNotIncludeMarginInBodyOffset&&(e+=parseFloat(G.css(t,"marginTop"))||0,n+=parseFloat(G.css(t,"marginLeft"))||0),{top:e,left:n}},setOffset:function(t,e,n){var i=G.css(t,"position");"static"===i&&(t.style.position="relative");var o,r,s=G(t),a=s.offset(),l=G.css(t,"top"),u=G.css(t,"left"),c=("absolute"===i||"fixed"===i)&&G.inArray("auto",[l,u])>-1,f={},d={};c?(d=s.position(),o=d.top,r=d.left):(o=parseFloat(l)||0,r=parseFloat(u)||0),G.isFunction(e)&&(e=e.call(t,n,a)),null!=e.top&&(f.top=e.top-a.top+o),null!=e.left&&(f.left=e.left-a.left+r),"using"in e?e.using.call(t,f):s.css(f)}},G.fn.extend({position:function(){if(this[0]){var t=this[0],e=this.offsetParent(),n=this.offset(),i=ei.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(G.css(t,"marginTop"))||0,n.left-=parseFloat(G.css(t,"marginLeft"))||0,i.top+=parseFloat(G.css(e[0],"borderTopWidth"))||0,i.left+=parseFloat(G.css(e[0],"borderLeftWidth"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||W.body;t&&!ei.test(t.nodeName)&&"static"===G.css(t,"position");)t=t.offsetParent;return t||W.body})}}),G.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i=/Y/.test(n);G.fn[t]=function(o){return G.access(this,function(t,o,r){var s=_(t);return r===e?s?n in s?s[n]:s.document.documentElement[o]:t[o]:(s?s.scrollTo(i?G(s).scrollLeft():r,i?r:G(s).scrollTop()):t[o]=r,void 0)},t,o,arguments.length,null)}}),G.each({Height:"height",Width:"width"},function(t,n){G.each({padding:"inner"+t,content:n,"":"outer"+t},function(i,o){G.fn[o]=function(o,r){var s=arguments.length&&(i||"boolean"!=typeof o),a=i||(o===!0||r===!0?"margin":"border");return G.access(this,function(n,i,o){var r;return G.isWindow(n)?n.document.documentElement["client"+t]:9===n.nodeType?(r=n.documentElement,Math.max(n.body["scroll"+t],r["scroll"+t],n.body["offset"+t],r["offset"+t],r["client"+t])):o===e?G.css(n,i,o,a):G.style(n,i,o,a)},n,s?o:e,s,null)}})}),t.jQuery=t.$=G,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return G})}(window),function(){}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this),/* ===================================================
 * bootstrap-transition.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),/* ==========================================================
 * bootstrap-alert.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,o=t(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=t(r),e&&e.preventDefault(),i.length||(i=o.hasClass("alert")?o:o.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),o=i.data("alert");o||i.data("alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),/* =========================================================
 * bootstrap-modal.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),o=i.data("modal"),r=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);o||i.data("modal",o=new e(this,r)),"string"==typeof n?o[n]():r.show&&o.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),o=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),r=o.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),n.data());e.preventDefault(),o.modal(r).one("hide",function(){n.focus()})})}(window.jQuery),/* ============================================================
 * bootstrap-dropdown.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";function e(){t(i).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,i=e.attr("data-target");return i||(i=e.attr("href"),i=i&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),n=i&&t(i),n&&n.length||(n=e.parent()),n}var i="[data-toggle=dropdown]",o=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(){var i,o,r=t(this);if(!r.is(".disabled, :disabled"))return i=n(r),o=i.hasClass("open"),e(),o||i.toggleClass("open"),r.focus(),!1},keydown:function(e){var o,r,s,a,l;if(/(38|40|27)/.test(e.keyCode)&&(o=t(this),e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled"))){if(s=n(o),a=s.hasClass("open"),!a||a&&27==e.keyCode)return 27==e.which&&s.find(i).focus(),o.click();r=t("[role=menu] li:not(.divider):visible a",s),r.length&&(l=r.index(r.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus())}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("dropdown");i||n.data("dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown-menu",function(t){t.stopPropagation()}).on("click.dropdown.data-api",i,o.prototype.toggle).on("keydown.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(window.jQuery),/* =============================================================
 * bootstrap-scrollspy.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */
!function(t){"use strict";function e(e,n){var i,o=t.proxy(this.process,this),r=t(e).is("body")?t(window):t(e);this.options=t.extend({},t.fn.scrollspy.defaults,n),this.$scrollElement=r.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(i=t(e).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e,n=this;this.offsets=t([]),this.targets=t([]),e=this.$body.find(this.selector).map(function(){var e=t(this),i=e.data("target")||e.attr("href"),o=/^#\w/.test(i)&&t(i);return o&&o.length&&[[o.position().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;if(e>=i)return s!=(t=r.last()[0])&&this.activate(t);for(t=o.length;t--;)s!=r[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(r[t])},activate:function(e){var n,i;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var i=t(this),o=i.data("scrollspy"),r="object"==typeof n&&n;o||i.data("scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),/* ========================================================
 * bootstrap-tab.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */
!function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,n,i,o=this.element,r=o.closest("ul:not(.dropdown-menu)"),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),o.parent("li").hasClass("active")||(e=r.find(".active:last a")[0],i=t.Event("show",{relatedTarget:e}),o.trigger(i),i.isDefaultPrevented()||(n=t(s),this.activate(o.parent("li"),r),this.activate(n,n.parent(),function(){o.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&t.support.transition&&r.hasClass("fade");s?r.one(t.support.transition.end,o):o(),r.removeClass("in")}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),o=i.data("tab");o||i.data("tab",o=new e(this)),"string"==typeof n&&o[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,i){var o,r,s,a,l;for(this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.enabled=!0,s=this.options.trigger.split(" "),l=s.length;l--;)a=s[l],"click"==a?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(o="hover"==a?"mouseenter":"focus",r="hover"==a?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var n,i=t.fn[this.type].defaults,o={};return this._options&&t.each(this._options,function(t,e){i[t]!=e&&(o[t]=e)},this),n=t(e.currentTarget)[this.type](o).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},show:function(){var e,n,i,o,r,s,a=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),r="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),i=e[0].offsetWidth,o=e[0].offsetHeight,r){case"bottom":s={top:n.top+n.height,left:n.left+n.width/2-i/2};break;case"top":s={top:n.top-o,left:n.left+n.width/2-i/2};break;case"left":s={top:n.top+n.height/2-o/2,left:n.left-i};break;case"right":s={top:n.top+n.height/2-o/2,left:n.left+n.width}}this.applyPlacement(s,r),this.$element.trigger("shown")}},applyPlacement:function(t,e){var n,i,o,r,s=this.tip(),a=s[0].offsetWidth,l=s[0].offsetHeight;s.offset(t).addClass(e).addClass("in"),n=s[0].offsetWidth,i=s[0].offsetHeight,"top"==e&&i!=l&&(t.top=t.top+l-i,r=!0),"bottom"==e||"top"==e?(o=0,t.left<0&&(o=-2*t.left,t.left=0,s.offset(t),n=s[0].offsetWidth,i=s[0].offsetHeight),this.replaceArrow(o-a+n,n,"left")):this.replaceArrow(i-l,i,"top"),r&&s.offset(t)},replaceArrow:function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){n.off(t.support.transition.end).detach()},500);n.one(t.support.transition.end,function(){clearTimeout(e),n.detach()})}var n=this.tip(),i=t.Event("hide");return this.$element.trigger(i),i.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():n.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var n=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var i=t(this),o=i.data("tooltip"),r="object"==typeof n&&n;o||i.data("tooltip",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(window.jQuery),/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,n=this.options;return t=("function"==typeof n.content?n.content.call(e[0]):n.content)||e.attr("data-content")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var i=t(this),o=i.data("popover"),r="object"==typeof n&&n;o||i.data("popover",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(window.jQuery),/* ============================================================
 * bootstrap-button.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),o=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[o]()),n[o](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),o=i.data("button"),r="object"==typeof n&&n;o||i.data("button",o=new e(this,r)),"toggle"==n?o.toggle():n&&o.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),/* =============================================================
 * bootstrap-collapse.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,n),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){var e,n,i,o;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),n=t.camelCase(["scroll",e].join("-")),i=this.$parent&&this.$parent.find("> .accordion-group > .in"),i&&i.length){if(o=i.data("collapse"),o&&o.transitioning)return;i.collapse("hide"),o||i.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][n])}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,n,i){var o=this,r=function(){"show"==n.type&&o.reset(),o.transitioning=0,o.$element.trigger(i)};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,r):r())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),o=i.data("collapse"),r=t.extend({},t.fn.collapse.defaults,i.data(),"object"==typeof n&&n);o||i.data("collapse",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),r=t(o).data("collapse")?"toggle":i.data();i[t(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(o).collapse(r)})}(window.jQuery),/* ==========================================================
 * bootstrap-carousel.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var n=this.getActiveIndex(),i=this;if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,n){var i,o=this.$element.find(".item.active"),r=n||o[e](),s=this.interval,a="next"==e?"left":"right",l="next"==e?"first":"last",u=this;if(this.sliding=!0,s&&this.pause(),r=r.length?r:this.$element.find(".item")[l](),i=t.Event("slide",{relatedTarget:r[0],direction:a}),!r.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(u.$indicators.children()[u.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;r.addClass(e),r[0].offsetWidth,o.addClass(a),r.addClass(a),this.$element.one(t.support.transition.end,function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("carousel"),r=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),s="string"==typeof n?n:r.slide;o||i.data("carousel",o=new e(this,r)),"number"==typeof n?o.to(n):s?o[s]():r.interval&&o.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i,o=t(this),r=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},r.data(),o.data());r.carousel(s),(i=o.attr("data-slide-to"))&&r.data("carousel").pause().to(i).cycle(),e.preventDefault()})}(window.jQuery),/* =============================================================
 * bootstrap-typeahead.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=t(this.options.menu),this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:e.top+e.height,left:e.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)},process:function(e){var n=this;return e=t.grep(e,function(t){return n.matcher(t)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],i=[],o=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?i.push(e):o.push(e):n.push(e);return n.concat(i,o)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var n=this;return e=t(e).map(function(e,i){return e=t(n.options.item).attr("data-value",i),e.find("a").html(n.highlighter(i)),e[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),n=e.next();n.length||(n=t(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",t.proxy(this.focus,this)).on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this)).on("mouseleave","li",t.proxy(this.mouseleave,this))},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(){this.focused=!0},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=t.fn.typeahead;t.fn.typeahead=function(n){return this.each(function(){var i=t(this),o=i.data("typeahead"),r="object"==typeof n&&n;o||i.data("typeahead",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=n,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var e=t(this);e.data("typeahead")||e.typeahead(e.data())})}(window.jQuery),/* ==========================================================
 * bootstrap-affix.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(e,n){this.options=t.extend({},t.fn.affix.defaults,n),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,n=t(document).height(),i=this.$window.scrollTop(),o=this.$element.offset(),r=this.options.offset,s=r.bottom,a=r.top,l="affix affix-top affix-bottom";"object"!=typeof r&&(s=a=r),"function"==typeof a&&(a=r.top()),"function"==typeof s&&(s=r.bottom()),e=null!=this.unpin&&i+this.unpin<=o.top?!1:null!=s&&o.top+this.$element.height()>=n-s?"bottom":null!=a&&a>=i?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?o.top-i:null,this.$element.removeClass(l).addClass("affix"+(e?"-"+e:"")))}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var i=t(this),o=i.data("affix"),r="object"==typeof n&&n;o||i.data("affix",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)})})}(window.jQuery);