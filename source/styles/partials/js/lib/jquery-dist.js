!function(e, t) {
    function n(e) {
        var t = e.length, n = le.type(e);
        return !le.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)));
    }
    function r(e) {
        var t = Ne[e] = {};
        return le.each(e.match(fe) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function i(e, n, r, i) {
        if (le.acceptData(e)) {
            var o, a, s = le.expando, u = e.nodeType, l = u ? le.cache : e, c = u ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || r !== t || "string" != typeof n) return c || (c = u ? e[s] = te.pop() || le.guid++ : s), 
            l[c] || (l[c] = u ? {} : {
                toJSON: le.noop
            }), "object" != typeof n && "function" != typeof n || (i ? l[c] = le.extend(l[c], n) : l[c].data = le.extend(l[c].data, n)), 
            a = l[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[le.camelCase(n)] = r), 
            "string" == typeof n ? null == (o = a[n]) && (o = a[le.camelCase(n)]) : o = a, o;
        }
    }
    function o(e, t, n) {
        if (le.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? le.cache : e, u = o ? e[le.expando] : le.expando;
            if (a[u]) {
                if (t && (r = n ? a[u] : a[u].data)) {
                    i = (t = le.isArray(t) ? t.concat(le.map(t, le.camelCase)) : t in r ? [ t ] : (t = le.camelCase(t)) in r ? [ t ] : t.split(" ")).length;
                    for (;i--; ) delete r[t[i]];
                    if (n ? !s(r) : !le.isEmptyObject(r)) return;
                }
                (n || (delete a[u].data, s(a[u]))) && (o ? le.cleanData([ e ], !0) : le.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null);
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ee, "-$1").toLowerCase();
            if ("string" == typeof (r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ke.test(r) ? le.parseJSON(r) : r);
                } catch (e) {}
                le.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function u() {
        return !0;
    }
    function l() {
        return !1;
    }
    function c() {
        try {
            return G.activeElement;
        } catch (e) {}
    }
    function f(e, t) {
        do {
            e = e[t];
        } while (e && 1 !== e.nodeType);
        return e;
    }
    function p(e, t, n) {
        if (le.isFunction(t)) return le.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return le.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (We.test(t)) return le.filter(t, e, n);
            t = le.filter(t, e);
        }
        return le.grep(e, function(e) {
            return le.inArray(e, t) >= 0 !== n;
        });
    }
    function d(e) {
        var t = Xe.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function h(e, t) {
        return le.nodeName(e, "table") && le.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function g(e) {
        return e.type = (null !== le.find.attr(e, "type")) + "/" + e.type, e;
    }
    function m(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) le._data(n, "globalEval", !t || le._data(t[r], "globalEval"));
    }
    function v(e, t) {
        if (1 === t.nodeType && le.hasData(e)) {
            var n, r, i, o = le._data(e), a = le._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; r < i; r++) le.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = le.extend({}, a.data));
        }
    }
    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                i = le._data(t);
                for (r in i.events) le.removeEvent(t, r, i.handle);
                t.removeAttribute(le.expando);
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
        }
    }
    function x(e, n) {
        var r, i, o = 0, a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || le.nodeName(i, n) ? a.push(i) : le.merge(a, x(i, n));
        return n === t || n && le.nodeName(e, n) ? le.merge([ e ], a) : a;
    }
    function w(e) {
        et.test(e.type) && (e.defaultChecked = e.checked);
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Tt.length; i--; ) if ((t = Tt[i] + n) in e) return t;
        return r;
    }
    function C(e, t) {
        return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e);
    }
    function N(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) (r = e[a]).style && (o[a] = le._data(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = le._data(r, "olddisplay", A(r.nodeName)))) : o[a] || (i = C(r), 
        (n && "none" !== n || !i) && le._data(r, "olddisplay", i ? n : le.css(r, "display"))));
        for (a = 0; a < s; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function k(e, t, n) {
        var r = gt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += le.css(e, n + wt[o], !0, i)), 
        r ? ("content" === n && (a -= le.css(e, "padding" + wt[o], !0, i)), "margin" !== n && (a -= le.css(e, "border" + wt[o] + "Width", !0, i))) : (a += le.css(e, "padding" + wt[o], !0, i), 
        "padding" !== n && (a += le.css(e, "border" + wt[o] + "Width", !0, i)));
        return a;
    }
    function S(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ut(e), a = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = lt(e, t, o)) < 0 || null == i) && (i = e.style[t]), mt.test(i)) return i;
            r = a && (le.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function A(e) {
        var t = G, n = vt[e];
        return n || ("none" !== (n = j(e, t)) && n || ((t = ((st = (st || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || st[0].contentDocument).document).write("<!doctype html><html><body>"), 
        t.close(), n = j(e, t), st.detach()), vt[e] = n), n;
    }
    function j(e, t) {
        var n = le(t.createElement(e)).appendTo(t.body), r = le.css(n[0], "display");
        return n.remove(), r;
    }
    function D(e, t, n, r) {
        var i;
        if (le.isArray(t)) le.each(t, function(t, i) {
            n || Nt.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== le.type(t)) r(e, t); else for (i in t) D(e + "[" + i + "]", t[i], n, r);
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(fe) || [];
            if (le.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function H(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, le.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                i(l), !1);
            }), u;
        }
        var o = {}, a = e === Wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*");
    }
    function q(e, n) {
        var r, i, o = le.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && le.extend(!0, e, r), e;
    }
    function _(e, n, r) {
        for (var i, o, a, s, u = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break;
        }
        if (l[0] in r) a = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        if (a) return a !== l[0] && l.unshift(a), r[a];
    }
    function M(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break;
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function O() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function B() {
        return setTimeout(function() {
            Jt = t;
        }), Jt = le.now();
    }
    function P(e, t, n) {
        for (var r, i = (tn[t] || []).concat(tn["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function R(e, t, n) {
        var r, i, o = 0, a = en.length, s = le.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = Jt || B(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (s.resolveWith(e, [ l ]), 
            !1);
        }, l = s.promise({
            elem: e,
            props: le.extend({}, t),
            opts: le.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Jt || B(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = le.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [ l, t ]) : s.rejectWith(e, [ l, t ]), this;
            }
        }), c = l.props;
        for (W(c, l.opts.specialEasing); o < a; o++) if (r = en[o].call(l, e, c, l.opts)) return r;
        return le.map(c, P, l), le.isFunction(l.opts.start) && l.opts.start.call(e, l), 
        le.fx.timer(le.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function W(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = le.camelCase(n), i = t[r], o = e[n], le.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = le.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function $(e, t, n) {
        var r, i, o, a, s, u, l = this, c = {}, f = e.style, p = e.nodeType && C(e), d = le._data(e, "fxshow");
        n.queue || (null == (s = le._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || u();
        }), s.unqueued++, l.always(function() {
            l.always(function() {
                s.unqueued--, le.queue(e, "fx").length || s.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), 
        n.overflow && (f.overflow = "hidden", le.support.shrinkWrapBlocks || l.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        }));
        for (r in t) if (i = t[r], Qt.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) continue;
            c[r] = d && d[r] || le.style(e, r);
        }
        if (!le.isEmptyObject(c)) {
            d ? "hidden" in d && (p = d.hidden) : d = le._data(e, "fxshow", {}), o && (d.hidden = !p), 
            p ? le(e).show() : l.done(function() {
                le(e).hide();
            }), l.done(function() {
                var t;
                le._removeData(e, "fxshow");
                for (t in c) le.style(e, t, c[t]);
            });
            for (r in c) a = P(p ? d[r] : 0, r, l), r in d || (d[r] = a.start, p && (a.end = a.start, 
            a.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i);
    }
    function z(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = wt[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function X(e) {
        return le.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var U, V, Y = typeof t, J = e.location, G = e.document, Q = G.documentElement, K = e.jQuery, Z = e.$, ee = {}, te = [], ne = te.concat, re = te.push, ie = te.slice, oe = te.indexOf, ae = ee.toString, se = ee.hasOwnProperty, ue = "1.10.2".trim, le = function(e, t) {
        return new le.fn.init(e, t, V);
    }, ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, fe = /\S+/g, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ge = /^[\],:{}\s]*$/, me = /(?:^|:|,)(?:\s*\[)+/g, ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, be = /^-ms-/, xe = /-([\da-z])/gi, we = function(e, t) {
        return t.toUpperCase();
    }, Te = function(e) {
        (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Ce(), 
        le.ready());
    }, Ce = function() {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Te, !1), e.removeEventListener("load", Te, !1)) : (G.detachEvent("onreadystatechange", Te), 
        e.detachEvent("onload", Te));
    };
    le.fn = le.prototype = {
        jquery: "1.10.2",
        constructor: le,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : de.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), 
                    he.test(i[1]) && le.isPlainObject(n)) for (i in n) le.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if ((o = G.getElementById(i[2])) && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = G, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), le.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = le.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return le.each(this, e, t);
        },
        ready: function(e) {
            return le.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(le.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: re,
        sort: [].sort,
        splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || le.isFunction(s) || (s = {}), 
        l === u && (s = this, --u); u < l; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], 
        s !== (r = o[i]) && (c && r && (le.isPlainObject(r) || (n = le.isArray(r))) ? (n ? (n = !1, 
        a = e && le.isArray(e) ? e : []) : a = e && le.isPlainObject(e) ? e : {}, s[i] = le.extend(c, a, r)) : r !== t && (s[i] = r));
        return s;
    }, le.extend({
        expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === le && (e.$ = Z), t && e.jQuery === le && (e.jQuery = K), le;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? le.readyWait++ : le.ready(!0);
        },
        ready: function(e) {
            if (!0 === e ? !--le.readyWait : !le.isReady) {
                if (!G.body) return setTimeout(le.ready);
                le.isReady = !0, !0 !== e && --le.readyWait > 0 || (U.resolveWith(G, [ le ]), le.fn.trigger && le(G).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === le.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === le.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ee[ae.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
            try {
                if (e.constructor && !se.call(e, "constructor") && !se.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            if (le.support.ownLast) for (n in e) return se.call(e, n);
            for (n in e) ;
            return n === t || se.call(e, n);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw new Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || G;
            var r = he.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = le.buildFragment([ e ], t, i), i && le(i).remove(), 
            le.merge([], r.childNodes));
        },
        parseJSON: function(t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = le.trim(t)) && ge.test(t.replace(ye, "@").replace(ve, "]").replace(me, "")) ? new Function("return " + t)() : void le.error("Invalid JSON: " + t);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", 
                r.loadXML(n));
            } catch (e) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), 
            r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && le.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(be, "ms-").replace(xe, we);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, r) {
            var i = 0, o = e.length, a = n(e);
            if (r) {
                if (a) for (;i < o && !1 !== t.apply(e[i], r); i++) ; else for (i in e) if (!1 === t.apply(e[i], r)) break;
            } else if (a) for (;i < o && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: ue && !ue.call("\ufeff ") ? function(e) {
            return null == e ? "" : ue.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(pe, "");
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? le.merge(r, "string" == typeof e ? [ e ] : e) : re.call(r, e)), 
            r;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (oe) return oe.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;o < r; o++) e[i++] = n[o]; else for (;n[o] !== t; ) e[i++] = n[o++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r = [], i = 0, o = e.length;
            for (n = !!n; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
            return r;
        },
        map: function(e, t, r) {
            var i, o = 0, a = e.length, s = [];
            if (n(e)) for (;o < a; o++) null != (i = t(e[o], o, r)) && (s[s.length] = i); else for (o in e) null != (i = t(e[o], o, r)) && (s[s.length] = i);
            return ne.apply([], s);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), le.isFunction(e) ? (r = ie.call(arguments, 2), 
            i = function() {
                return e.apply(n || this, r.concat(ie.call(arguments)));
            }, i.guid = e.guid = e.guid || le.guid++, i) : t;
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === le.type(r)) {
                o = !0;
                for (u in r) le.access(e, n, u, r[u], !0, a, s);
            } else if (i !== t && (o = !0, le.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), 
            n = null) : (c = n, n = function(e, t, n) {
                return c.call(le(e), n);
            })), n)) for (;u < l; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        }
    }), le.ready.promise = function(t) {
        if (!U) if (U = le.Deferred(), "complete" === G.readyState) setTimeout(le.ready); else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Te, !1), 
        e.addEventListener("load", Te, !1); else {
            G.attachEvent("onreadystatechange", Te), e.attachEvent("onload", Te);
            var n = !1;
            try {
                n = null == e.frameElement && G.documentElement;
            } catch (e) {}
            n && n.doScroll && function e() {
                if (!le.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (t) {
                        return setTimeout(e, 50);
                    }
                    Ce(), le.ready();
                }
            }();
        }
        return U.promise(t);
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase();
    }), V = le(G), function(e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, u, l, p, d, h, g;
            if ((t ? t.ownerDocument || t : B) !== D && j(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (H && !r) {
                if (i = me.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (w.qsa && (!q || !q.test(e))) {
                    if (d = p = F, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = c(e), (p = t.getAttribute("id")) ? d = p.replace(be, "\\$&") : t.setAttribute("id", d), 
                        d = "[id='" + d + "'] ", u = l.length; u--; ) l[u] = d + f(l[u]);
                        h = ce.test(e) && t.parentNode || t, g = l.join(",");
                    }
                    if (g) try {
                        return Q.apply(n, h.querySelectorAll(g)), n;
                    } catch (e) {} finally {
                        p || t.removeAttribute("id");
                    }
                }
            }
            return b(e.replace(ae, "$1"), t, n, r);
        }
        function r() {
            function e(n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[F] = !0, e;
        }
        function o(e) {
            var t = D.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--; ) C.attrHandle[n[r]] = t;
        }
        function s(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function l() {}
        function c(e, t) {
            var r, i, o, a, s, u, l, c = $[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s; ) {
                r && !(i = se.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                r = !1, (i = ue.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }), s = s.slice(r.length));
                for (a in C.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), 
                o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return t ? s.length : s ? n.error(e) : $(e, u).slice(0);
        }
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function p(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = R++;
            return t.first ? function(t, n, o) {
                for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
            } : function(t, n, a) {
                var s, u, l, c = P + " " + o;
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || i) if (l = t[F] || (t[F] = {}), 
                (u = l[r]) && u[0] === c) {
                    if (!0 === (s = u[1]) || s === T) return !0 === s;
                } else if (u = l[r] = [ c ], u[1] = e(t, n, a) || T, !0 === u[1]) return !0;
            };
        }
        function d(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function g(e, t, n, r, o, a) {
            return r && !r[F] && (r = g(r)), o && !o[F] && (o = g(o, a)), i(function(i, a, s, u) {
                var l, c, f, p = [], d = [], g = a.length, m = i || v(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !i && t ? m : h(m, p, e, s, u), b = n ? o || (i ? e : g || r) ? [] : a : y;
                if (n && n(y, b, s, u), r) for (l = h(b, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (b[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--; ) (f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u);
                        }
                        for (c = b.length; c--; ) (f = b[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f));
                    }
                } else b = h(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, u) : Q.apply(a, b);
            });
        }
        function m(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                return e === t;
            }, a, !0), l = p(function(e) {
                return Z.call(t, e) > -1;
            }, a, !0), c = [ function(e, n, r) {
                return !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
            } ]; s < i; s++) if (n = C.relative[e[s].type]) c = [ p(d(c), n) ]; else {
                if ((n = C.filter[e[s].type].apply(null, e[s].matches))[F]) {
                    for (r = ++s; r < i && !C.relative[e[r].type]; r++) ;
                    return g(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(ae, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e));
                }
                c.push(n);
            }
            return d(c);
        }
        function y(e, t) {
            var r = 0, o = t.length > 0, a = e.length > 0, s = function(i, s, u, l, c) {
                var f, p, d, g = [], m = 0, y = "0", v = i && [], b = null != c, x = S, w = i || a && C.find.TAG("*", c && s.parentNode || s), N = P += null == x ? 1 : Math.random() || .1;
                for (b && (S = s !== D && s, T = r); null != (f = w[y]); y++) {
                    if (a && f) {
                        for (p = 0; d = e[p++]; ) if (d(f, s, u)) {
                            l.push(f);
                            break;
                        }
                        b && (P = N, T = ++r);
                    }
                    o && ((f = !d && f) && m--, i && v.push(f));
                }
                if (m += y, o && y !== m) {
                    for (p = 0; d = t[p++]; ) d(v, g, s, u);
                    if (i) {
                        if (m > 0) for (;y--; ) v[y] || g[y] || (g[y] = J.call(l));
                        g = h(g);
                    }
                    Q.apply(l, g), b && !i && g.length > 0 && m + t.length > 1 && n.uniqueSort(l);
                }
                return b && (P = N, S = x), v;
            };
            return o ? i(s) : s;
        }
        function v(e, t, r) {
            for (var i = 0, o = t.length; i < o; i++) n(e, t[i], r);
            return r;
        }
        function b(e, t, n, r) {
            var i, o, a, s, u, l = c(e);
            if (!r && 1 === l.length) {
                if ((o = l[0] = l[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && H && C.relative[o[1].type]) {
                    if (!(t = (C.find.ID(a.matches[0].replace(xe, we), t) || [])[0])) return n;
                    e = e.slice(o.shift().value.length);
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]); ) if ((u = C.find[s]) && (r = u(a.matches[0].replace(xe, we), ce.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                    break;
                }
            }
            return E(e, l)(r, t, !H, n, ce.test(e)), n;
        }
        var x, w, T, C, N, k, E, S, A, j, D, L, H, q, _, M, O, F = "sizzle" + -new Date(), B = e.document, P = 0, R = 0, W = r(), $ = r(), I = r(), z = !1, X = function(e, t) {
            return e === t ? (z = !0, 0) : 0;
        }, U = 1 << 31, V = {}.hasOwnProperty, Y = [], J = Y.pop, G = Y.push, Q = Y.push, K = Y.slice, Z = Y.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
            return -1;
        }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", te = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = ne.replace("w", "w#"), ie = "\\[" + te + "*(" + ne + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + te + "*\\]", oe = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)", ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"), se = new RegExp("^" + te + "*," + te + "*"), ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"), ce = new RegExp(te + "*[+~]"), fe = new RegExp("=" + te + "*([^\\]'\"]*)" + te + "*\\]", "g"), pe = new RegExp(oe), de = new RegExp("^" + re + "$"), he = {
            ID: new RegExp("^#(" + ne + ")"),
            CLASS: new RegExp("^\\.(" + ne + ")"),
            TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ee + ")$", "i"),
            needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
        }, ge = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /^(?:input|select|textarea|button)$/i, ve = /^h\d$/i, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"), we = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        };
        try {
            Q.apply(Y = K.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType;
        } catch (e) {
            Q = {
                apply: Y.length ? function(e, t) {
                    G.apply(e, K.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        k = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, w = n.support = {}, j = n.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : B, n = t.defaultView;
            return t !== D && 9 === t.nodeType && t.documentElement ? (D = t, L = t.documentElement, 
            H = !k(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                j();
            }), w.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
            }), w.getElementsByClassName = o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
                2 === e.getElementsByClassName("i").length;
            }), w.getById = o(function(e) {
                return L.appendChild(e).id = F, !t.getElementsByName || !t.getElementsByName(F).length;
            }), w.getById ? (C.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e);
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e);
            }, _ = [], q = [], (w.qsa = ge.test(t.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || q.push("\\[" + te + "*(?:value|" + ee + ")"), 
                e.querySelectorAll(":checked").length || q.push(":checked");
            }), o(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && q.push("[*^$]=" + te + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (w.matchesSelector = ge.test(M = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), _.push("!=", oe);
            }), q = q.length && new RegExp(q.join("|")), _ = _.length && new RegExp(_.join("|")), 
            O = ge.test(L.contains) || L.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, X = L.compareDocumentPosition ? function(e, n) {
                if (e === n) return z = !0, 0;
                var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return r ? 1 & r || !w.sortDetached && n.compareDocumentPosition(e) === r ? e === t || O(B, e) ? -1 : n === t || O(B, n) ? 1 : A ? Z.call(A, e) - Z.call(A, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, n) {
                var r, i = 0, o = e.parentNode, a = n.parentNode, u = [ e ], l = [ n ];
                if (e === n) return z = !0, 0;
                if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : A ? Z.call(A, e) - Z.call(A, n) : 0;
                if (o === a) return s(e, n);
                for (r = e; r = r.parentNode; ) u.unshift(r);
                for (r = n; r = r.parentNode; ) l.unshift(r);
                for (;u[i] === l[i]; ) i++;
                return i ? s(u[i], l[i]) : u[i] === B ? -1 : l[i] === B ? 1 : 0;
            }, t) : D;
        }, n.matches = function(e, t) {
            return n(e, null, null, t);
        }, n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== D && j(e), t = t.replace(fe, "='$1']"), w.matchesSelector && H && (!_ || !_.test(t)) && (!q || !q.test(t))) try {
                var r = M.call(e, t);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}
            return n(t, D, null, [ e ]).length > 0;
        }, n.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && j(e), O(e, t);
        }, n.attr = function(e, t) {
            (e.ownerDocument || e) !== D && j(e);
            var n = C.attrHandle[t.toLowerCase()], r = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 === r ? w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null : r;
        }, n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, n.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (z = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(X), z) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return e;
        }, N = n.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += N(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += N(t);
            return n;
        }, (C = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && pe.test(n) && (t = c(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (f = t; f = f[g]; ) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
                                for (d = (l = (c = m[F] || (m[F] = {}))[e] || [])[0] === P && l[1], p = l[0] === P && l[2], 
                                f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); ) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [ P, d, p ];
                                    break;
                                }
                            } else if (v && (l = (t[F] || (t[F] = {}))[e]) && l[0] === P) p = l[1]; else for (;(f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[F] || (f[F] = {}))[e] = [ P, p ]), 
                            f !== t)); ) ;
                            return (p -= i) === r || p % r == 0 && p / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[F] ? o(t) : o.length > 1 ? (r = [ e, e, "", t ], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var r, i = o(e, t), a = i.length; a--; ) e[r = Z.call(e, i[a])] = !(n[r] = i[a]);
                    }) : function(e) {
                        return o(e, 0, r);
                    }) : o;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], r = E(e.replace(ae, "$1"));
                    return r[F] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(t) {
                        return n(e, t).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return de.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === L;
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return !1 === e.disabled;
                },
                disabled: function(e) {
                    return !0 === e.disabled;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !C.pseudos.empty(e);
                },
                header: function(e) {
                    return ve.test(e.nodeName);
                },
                input: function(e) {
                    return ye.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: u(function() {
                    return [ 0 ];
                }),
                last: u(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: u(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[x] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(x);
        for (x in {
            submit: !0,
            reset: !0
        }) C.pseudos[x] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(x);
        l.prototype = C.filters = C.pseudos, C.setFilters = new l(), E = n.compile = function(e, t) {
            var n, r = [], i = [], o = I[e + " "];
            if (!o) {
                for (t || (t = c(e)), n = t.length; n--; ) (o = m(t[n]))[F] ? r.push(o) : i.push(o);
                o = I(e, y(i, r));
            }
            return o;
        }, w.sortStable = F.split("").sort(X).join("") === F, w.detectDuplicates = z, j(), 
        w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"));
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || a("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), w.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || a("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), o(function(e) {
            return null == e.getAttribute("disabled");
        }) || a(ee, function(e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value : !0 === e[t] ? t.toLowerCase() : null;
        }), le.find = n, le.expr = n.selectors, le.expr[":"] = le.expr.pseudos, le.unique = n.uniqueSort, 
        le.text = n.getText, le.isXMLDoc = n.isXML, le.contains = n.contains;
    }(e);
    var Ne = {};
    le.Callbacks = function(e) {
        var n, i, o, a, s, u, l = [], c = !(e = "string" == typeof e ? Ne[e] || r(e) : le.extend({}, e)).once && [], f = function(t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && s < a; s++) if (!1 === l[s].apply(t[0], t[1]) && e.stopOnFalse) {
                i = !1;
                break;
            }
            n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable());
        }, p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    !function t(n) {
                        le.each(n, function(n, r) {
                            var i = le.type(r);
                            "function" === i ? e.unique && p.has(r) || l.push(r) : r && r.length && "string" !== i && t(r);
                        });
                    }(arguments), n ? a = l.length : i && (u = t, f(i));
                }
                return this;
            },
            remove: function() {
                return l && le.each(arguments, function(e, t) {
                    for (var r; (r = le.inArray(t, l, r)) > -1; ) l.splice(r, 1), n && (r <= a && a--, 
                    r <= s && s--);
                }), this;
            },
            has: function(e) {
                return e ? le.inArray(e, l) > -1 : !(!l || !l.length);
            },
            empty: function() {
                return l = [], a = 0, this;
            },
            disable: function() {
                return l = c = i = t, this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                return c = t, i || p.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return !l || o && !c || (t = [ e, (t = t || []).slice ? t.slice() : t ], n ? c.push(t) : f(t)), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return p;
    }, le.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", le.Callbacks("once memory"), "resolved" ], [ "reject", "fail", le.Callbacks("once memory"), "rejected" ], [ "notify", "progress", le.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return le.Deferred(function(n) {
                        le.each(t, function(t, o) {
                            var a = o[0], s = le.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? le.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, le.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t, n, r, i = 0, o = ie.call(arguments), a = o.length, s = 1 !== a || e && le.isFunction(e.promise) ? a : 0, u = 1 === s ? e : le.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && le.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise();
        }
    }), le.support = function(t) {
        var n, r, i, o, a, s, u, l, c, f = G.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        n = f.getElementsByTagName("*") || [], !(r = f.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
        s = (o = G.createElement("select")).appendChild(G.createElement("option")), i = f.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, 
        t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, 
        t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), 
        t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), 
        t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, 
        t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, 
        t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, 
        t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, 
        t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test;
        } catch (e) {
            t.deleteExpando = !1;
        }
        (i = G.createElement("input")).setAttribute("value", ""), t.input = "" === i.getAttribute("value"), 
        i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, 
        i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (a = G.createDocumentFragment()).appendChild(i), 
        t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        f.attachEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || !1 === f.attributes[u].expando;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (c in le(t)) break;
        return t.ownLast = "0" !== c, le(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = G.getElementsByTagName("body")[0];
            a && ((n = G.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            (i = f.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", 
            t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            le.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === f.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, (r = f.appendChild(G.createElement("div"))).style.cssText = f.style.cssText = o, 
            r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", 
            t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", 
            f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), 
            a.removeChild(n), n = f = i = r = null);
        }), n = o = a = s = r = i = null, t;
    }({});
    var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ee = /([A-Z])/g;
    le.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando]) && !s(e);
        },
        data: function(e, t, n) {
            return i(e, t, n);
        },
        removeData: function(e, t) {
            return o(e, t);
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return o(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t;
        }
    }), le.fn.extend({
        data: function(e, n) {
            var r, i, o = null, s = 0, u = this[0];
            if (e === t) {
                if (this.length && (o = le.data(u), 1 === u.nodeType && !le._data(u, "parsedAttrs"))) {
                    for (r = u.attributes; s < r.length; s++) 0 === (i = r[s].name).indexOf("data-") && a(u, i = le.camelCase(i.slice(5)), o[i]);
                    le._data(u, "parsedAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                le.data(this, e);
            }) : arguments.length > 1 ? this.each(function() {
                le.data(this, e, n);
            }) : u ? a(u, e, le.data(u, e)) : null;
        },
        removeData: function(e) {
            return this.each(function() {
                le.removeData(this, e);
            });
        }
    }), le.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = le._data(e, t), n && (!r || le.isArray(n) ? r = le._data(e, t, le.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = le.queue(e, t), r = n.length, i = n.shift(), o = le._queueHooks(e, t), a = function() {
                le.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return le._data(e, n) || le._data(e, n, {
                empty: le.Callbacks("once memory").add(function() {
                    le._removeData(e, t + "queue"), le._removeData(e, n);
                })
            });
        }
    }), le.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? le.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = le.queue(this, e, n);
                le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                le.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, o = le.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) (r = le._data(a[s], e + "queueHooks")) && r.empty && (i++, 
            r.empty.add(u));
            return u(), o.promise(n);
        }
    });
    var Se, Ae, je = /[\t\r\n\f]/g, De = /\r/g, Le = /^(?:input|select|textarea|button|object)$/i, He = /^(?:a|area)$/i, qe = /^(?:checked|selected)$/i, _e = le.support.getSetAttribute, Me = le.support.input;
    le.fn.extend({
        attr: function(e, t) {
            return le.access(this, le.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                le.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return le.access(this, le.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = le.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (e) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).addClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(fe) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : " ")) {
                for (o = 0; i = t[o++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = le.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).removeClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(fe) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : "")) {
                for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                n.className = e ? le.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function(n) {
                le(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) for (var t, r = 0, i = le(this), o = e.match(fe) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else n !== Y && "boolean" !== n || (this.className && le._data(this, "__className__", this.className), 
                this.className = this.className || !1 === e ? "" : le._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(je, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = le.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, le(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : le.isArray(o) && (o = le.map(o, function(e) {
                        return null == e ? "" : e + "";
                    })), (r = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
                });
                if (o) return (r = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, 
                "string" == typeof n ? n.replace(De, "") : null == n ? "" : n);
            }
        }
    }), le.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = le.find.attr(e, "value");
                    return null != t ? t : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) if (((n = r[u]).selected || u === i) && (le.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                        if (t = le(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = le.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = le.inArray(le(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Y ? le.prop(e, n, r) : (1 === a && le.isXMLDoc(e) || (n = n.toLowerCase(), 
            i = le.attrHooks[n] || (le.expr.match.bool.test(n) ? Ae : Se)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = le.find.attr(e, n), 
            null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), 
            r) : void le.removeAttr(e, n));
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(fe);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = le.propFix[n] || n, le.expr.match.bool.test(n) ? Me && _e || !qe.test(n) ? e[r] = !1 : e[le.camelCase("default-" + n)] = e[r] = !1 : le.attr(e, n, ""), 
            e.removeAttribute(_e ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !le.isXMLDoc(e)) && (n = le.propFix[n] || n, 
            o = le.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = le.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Le.test(e.nodeName) || He.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }
    }), Ae = {
        set: function(e, t, n) {
            return !1 === t ? le.removeAttr(e, n) : Me && _e || !qe.test(n) ? e.setAttribute(!_e && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, le.each(le.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = le.expr.attrHandle[n] || le.find.attr;
        le.expr.attrHandle[n] = Me && _e || !qe.test(n) ? function(e, n, i) {
            var o = le.expr.attrHandle[n], a = i ? t : (le.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return le.expr.attrHandle[n] = o, a;
        } : function(e, n, r) {
            return r ? t : e[le.camelCase("default-" + n)] ? n.toLowerCase() : null;
        };
    }), Me && _e || (le.attrHooks.value = {
        set: function(e, t, n) {
            if (!le.nodeName(e, "input")) return Se && Se.set(e, t, n);
            e.defaultValue = t;
        }
    }), _e || (Se = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", 
            "value" === r || n === e.getAttribute(r) ? n : t;
        }
    }, le.expr.attrHandle.id = le.expr.attrHandle.name = le.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
    }, le.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t;
        },
        set: Se.set
    }, le.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Se.set(e, "" !== t && t, n);
        }
    }, le.each([ "width", "height" ], function(e, t) {
        le.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n;
            }
        };
    })), le.support.hrefNormalized || le.each([ "href", "src" ], function(e, t) {
        le.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), le.support.style || (le.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), le.support.optSelected || (le.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), le.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        le.propFix[this.toLowerCase()] = this;
    }), le.support.enctype || (le.propFix.enctype = "encoding"), le.each([ "radio", "checkbox" ], function() {
        le.valHooks[this] = {
            set: function(e, t) {
                if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) >= 0;
            }
        }, le.support.checkOn || (le.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Oe = /^(?:input|select|textarea)$/i, Fe = /^key/, Be = /^(?:mouse|contextmenu)|click/, Pe = /^(?:focusinfocus|focusoutblur)$/, Re = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = le._data(e);
            if (y) {
                for (r.handler && (r = (l = r).handler, o = l.selector), r.guid || (r.guid = le.guid++), 
                (s = y.events) || (s = y.events = {}), (f = y.handle) || ((f = y.handle = function(e) {
                    return typeof le === Y || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(f.elem, arguments);
                }).elem = e), u = (n = (n || "").match(fe) || [ "" ]).length; u--; ) h = m = (a = Re.exec(n[u]) || [])[1], 
                g = (a[2] || "").split(".").sort(), h && (c = le.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, 
                c = le.event.special[h] || {}, p = le.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && le.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, l), (d = s[h]) || ((d = s[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, g, f) || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), 
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), 
                le.event.global[h] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = le.hasData(e) && le._data(e);
            if (m && (c = m.events)) {
                for (l = (t = (t || "").match(fe) || [ "" ]).length; l--; ) if (s = Re.exec(t[l]) || [], 
                d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = le.event.special[d] || {}, p = c[d = (r ? f.delegateType : f.bindType) || d] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--; ) a = p[o], 
                    !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), 
                    a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || le.removeEvent(e, d, m.handle), 
                    delete c[d]);
                } else for (d in c) le.event.remove(e, d + t[l], n, r, !0);
                le.isEmptyObject(c) && (delete m.handle, le._removeData(e, "events"));
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [ i || G ], h = se.call(n, "type") ? n.type : n, g = se.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(h + le.event.triggered) && (h.indexOf(".") >= 0 && (h = (g = h.split(".")).shift(), 
            g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[le.expando] ? n : new le.Event(h, "object" == typeof n && n), 
            n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            n.result = t, n.target || (n.target = i), r = null == r ? [ n ] : le.makeArray(r, [ n ]), 
            c = le.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, r))) {
                if (!o && !c.noBubble && !le.isWindow(i)) {
                    for (l = c.delegateType || h, Pe.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), 
                    f = u;
                    f === (i.ownerDocument || G) && d.push(f.defaultView || f.parentWindow || e);
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped(); ) n.type = p > 1 ? l : c.bindType || h, 
                (a = (le._data(u, "events") || {})[n.type] && le._data(u, "handle")) && a.apply(u, r), 
                (a = s && u[s]) && le.acceptData(u) && a.apply && !1 === a.apply(u, r) && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), r)) && le.acceptData(i) && s && i[h] && !le.isWindow(i)) {
                    (f = i[s]) && (i[s] = null), le.event.triggered = h;
                    try {
                        i[h]();
                    } catch (e) {}
                    le.event.triggered = t, f && (i[s] = f);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = le.event.fix(e);
            var n, r, i, o, a, s = [], u = ie.call(arguments), l = (le._data(this, "events") || {})[e.type] || [], c = le.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = le.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, 
                a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped(); ) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, 
                e.data = i.data, (r = ((le.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) !== t && !1 === (e.result = r) && (e.preventDefault(), 
                e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (o = [], a = 0; a < u; a++) o[r = (i = n[a]).selector + " "] === t && (o[r] = i.needsContext ? le(r, this).index(l) >= 0 : le.find(r, this, null, [ l ]).length), 
                o[r] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return u < n.length && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s;
        },
        fix: function(e) {
            if (e[le.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Be.test(i) ? this.mouseHooks : Fe.test(i) ? this.keyHooks : {}), 
            r = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(o), t = r.length; t--; ) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (o = (i = e.target.ownerDocument || G).documentElement, 
                r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), 
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), 
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === c() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (le.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return le.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = le.extend(new le.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? le.event.trigger(i, null, t) : le.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, le.removeEvent = G.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Y && (e[r] = null), e.detachEvent(r, n));
    }, le.Event = function(e, t) {
        if (!(this instanceof le.Event)) return new le.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, 
        t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0;
    }, le.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u, this.stopPropagation();
        }
    }, le.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        le.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || le.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), le.support.submitBubbles || (le.event.special.submit = {
        setup: function() {
            if (le.nodeName(this, "form")) return !1;
            le.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form : t;
                r && !le._data(r, "submitBubbles") && (le.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), le._data(r, "submitBubbles", !0));
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            if (le.nodeName(this, "form")) return !1;
            le.event.remove(this, "._submit");
        }
    }), le.support.changeBubbles || (le.event.special.change = {
        setup: function() {
            if (Oe.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (le.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), le.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0);
            })), !1;
            le.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Oe.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0);
                }), le._data(t, "changeBubbles", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
            return le.event.remove(this, "._change"), !Oe.test(this.nodeName);
        }
    }), le.support.focusinBubbles || le.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            le.event.simulate(t, e.target, le.event.fix(e), !0);
        };
        le.event.special[t] = {
            setup: function() {
                0 == n++ && G.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 == --n && G.removeEventListener(e, r, !0);
            }
        };
    }), le.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, 
            r = t) : (i = r, r = n, n = t)), !1 === i) i = l; else if (!i) return this;
            return 1 === o && (s = i, (i = function(e) {
                return le().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = le.guid++)), this.each(function() {
                le.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = l), 
            this.each(function() {
                le.event.remove(this, e, r, n);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                le.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return le.event.trigger(e, t, n, !0);
        }
    });
    var We = /^.[^:#\[\.,]*$/, $e = /^(?:parents|prev(?:Until|All))/, Ie = le.expr.match.needsContext, ze = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    le.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(le(e).filter(function() {
                for (t = 0; t < i; t++) if (le.contains(r[t], this)) return !0;
            }));
            for (t = 0; t < i; t++) le.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? le.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        has: function(e) {
            var t, n = le(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++) if (le.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(p(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(p(this, e || [], !1));
        },
        is: function(e) {
            return !!p(this, "string" == typeof e && Ie.test(e) ? le(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Ie.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? le.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [ e ] : e), r = le.merge(this.get(), n);
            return this.pushStack(le.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), le.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return le.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return le.dir(e, "parentNode", n);
        },
        next: function(e) {
            return f(e, "nextSibling");
        },
        prev: function(e) {
            return f(e, "previousSibling");
        },
        nextAll: function(e) {
            return le.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return le.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return le.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return le.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return le.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return le.sibling(e.firstChild);
        },
        contents: function(e) {
            return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes);
        }
    }, function(e, t) {
        le.fn[e] = function(n, r) {
            var i = le.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = le.filter(r, i)), 
            this.length > 1 && (ze[e] || (i = le.unique(i)), $e.test(e) && (i = i.reverse())), 
            this.pushStack(i);
        };
    }), le.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? le.find.matchesSelector(r, e) ? [ r ] : [] : le.find.matches(e, le.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !le(o).is(r)); ) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ue = / jQuery\d+="(?:null|\d+)"/g, Ve = new RegExp("<(?:" + Xe + ")[\\s/>]", "i"), Ye = /^\s+/, Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ge = /<([\w:]+)/, Qe = /<tbody/i, Ke = /<|&#?\w+;/, Ze = /<(?:script|style|link)/i, et = /^(?:checkbox|radio)$/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^$|\/(?:java|ecma)script/i, rt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ot = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: le.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, at = d(G).appendChild(G.createElement("div"));
    ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, 
    ot.th = ot.td, le.fn.extend({
        text: function(e) {
            return le.access(this, function(e) {
                return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || h(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? le.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || le.cleanData(x(n)), 
            n.parentNode && (t && le.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && le.cleanData(x(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && le.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return le.clone(this, e, t);
            });
        },
        html: function(e) {
            return le.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ue, "") : t;
                if ("string" == typeof e && !Ze.test(e) && (le.support.htmlSerialize || !Ve.test(e)) && (le.support.leadingWhitespace || !Ye.test(e)) && !ot[(Ge.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(Je, "<$1></$2>");
                    try {
                        for (;r < i; r++) 1 === (n = this[r] || {}).nodeType && (le.cleanData(x(n, !1)), 
                        n.innerHTML = e);
                        n = 0;
                    } catch (e) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = le.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), le(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = ne.apply([], e);
            var r, i, o, a, s, u, l = 0, c = this.length, f = this, p = c - 1, d = e[0], h = le.isFunction(d);
            if (h || !(c <= 1 || "string" != typeof d || le.support.checkClone) && tt.test(d)) return this.each(function(r) {
                var i = f.eq(r);
                h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (c && (u = le.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 
            1 === u.childNodes.length && (u = r), r)) {
                for (o = (a = le.map(x(u, "script"), g)).length; l < c; l++) i = u, l !== p && (i = le.clone(i, !0, !0), 
                o && le.merge(a, x(i, "script"))), t.call(this[l], i, l);
                if (o) for (s = a[a.length - 1].ownerDocument, le.map(a, m), l = 0; l < o; l++) i = a[l], 
                nt.test(i.type || "") && !le._data(i, "globalEval") && le.contains(s, i) && (i.src ? le._evalUrl(i.src) : le.globalEval((i.text || i.textContent || i.innerHTML || "").replace(it, "")));
                u = r = null;
            }
            return this;
        }
    }), le.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        le.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = le(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), 
            le(o[r])[t](n), re.apply(i, n.get());
            return this.pushStack(i);
        };
    }), le.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = le.contains(e.ownerDocument, e);
            if (le.support.html5Clone || le.isXMLDoc(e) || !Ve.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, 
            at.removeChild(o = at.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e))) for (r = x(o), 
            s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t) if (n) for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) v(i, r[a]); else v(e, o);
            return (r = x(o, "script")).length > 0 && y(r, !u && x(e, "script")), r = s = i = null, 
            o;
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, p = d(t), h = [], g = 0; g < f; g++) if ((o = e[g]) || 0 === o) if ("object" === le.type(o)) le.merge(h, o.nodeType ? [ o ] : o); else if (Ke.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (Ge.exec(o) || [ "", "" ])[1].toLowerCase(), 
                c = ot[u] || ot._default, s.innerHTML = c[1] + o.replace(Je, "<$1></$2>") + c[2], 
                i = c[0]; i--; ) s = s.lastChild;
                if (!le.support.leadingWhitespace && Ye.test(o) && h.push(t.createTextNode(Ye.exec(o)[0])), 
                !le.support.tbody) for (i = (o = "table" !== u || Qe.test(o) ? "<table>" !== c[1] || Qe.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--; ) le.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (le.merge(h, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = p.lastChild;
            } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), le.support.appendChecked || le.grep(x(h, "input"), w), 
            g = 0; o = h[g++]; ) if ((!r || -1 === le.inArray(o, r)) && (a = le.contains(o.ownerDocument, o), 
            s = x(p.appendChild(o), "script"), a && y(s), n)) for (i = 0; o = s[i++]; ) nt.test(o.type || "") && n.push(o);
            return s = null, p;
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = le.expando, u = le.cache, l = le.support.deleteExpando, c = le.event.special; null != (n = e[a]); a++) if ((t || le.acceptData(n)) && (i = n[s], 
            o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? le.event.remove(n, r) : le.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, 
                te.push(i));
            }
        },
        _evalUrl: function(e) {
            return le.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            });
        }
    }), le.fn.extend({
        wrapAll: function(e) {
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return le.isFunction(e) ? this.each(function(t) {
                le(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = le(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = le.isFunction(e);
            return this.each(function(n) {
                le(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                le.nodeName(this, "body") || le(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var st, ut, lt, ct = /alpha\([^)]*\)/i, ft = /opacity\s*=\s*([^)]*)/, pt = /^(top|right|bottom|left)$/, dt = /^(none|table(?!-c[ea]).+)/, ht = /^margin/, gt = new RegExp("^(" + ce + ")(.*)$", "i"), mt = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"), yt = new RegExp("^([+-])=(" + ce + ")", "i"), vt = {
        BODY: "block"
    }, bt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, xt = {
        letterSpacing: 0,
        fontWeight: 400
    }, wt = [ "Top", "Right", "Bottom", "Left" ], Tt = [ "Webkit", "O", "Moz", "ms" ];
    le.fn.extend({
        css: function(e, n) {
            return le.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (le.isArray(n)) {
                    for (o = ut(e), i = n.length; s < i; s++) a[n[s]] = le.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t ? le.style(e, n, r) : le.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return N(this, !0);
        },
        hide: function() {
            return N(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                C(this) ? le(this).show() : le(this).hide();
            });
        }
    }), le.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = lt(e, "opacity");
                        return "" === n ? "1" : n;
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
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: le.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = le.camelCase(n), l = e.style;
                if (n = le.cssProps[u] || (le.cssProps[u] = T(l, u)), s = le.cssHooks[n] || le.cssHooks[u], 
                r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (!("string" === (a = typeof r) && (o = yt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(le.css(e, n)), 
                a = "number"), null == r || "number" === a && isNaN(r) || ("number" !== a || le.cssNumber[u] || (r += "px"), 
                le.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r;
                } catch (e) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = le.camelCase(n);
            return n = le.cssProps[u] || (le.cssProps[u] = T(e.style, u)), (s = le.cssHooks[n] || le.cssHooks[u]) && "get" in s && (a = s.get(e, !0, r)), 
            a === t && (a = lt(e, n, i)), "normal" === a && n in xt && (a = xt[n]), "" === r || r ? (o = parseFloat(a), 
            !0 === r || le.isNumeric(o) ? o || 0 : a) : a;
        }
    }), e.getComputedStyle ? (ut = function(t) {
        return e.getComputedStyle(t, null);
    }, lt = function(e, n, r) {
        var i, o, a, s = r || ut(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || le.contains(e.ownerDocument, e) || (u = le.style(e, n)), 
        mt.test(u) && ht.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, 
        u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u;
    }) : G.documentElement.currentStyle && (ut = function(e) {
        return e.currentStyle;
    }, lt = function(e, n, r) {
        var i, o, a, s = r || ut(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), mt.test(u) && !pt.test(n) && (i = l.left, 
        (a = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, 
        u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u;
    }), le.each([ "height", "width" ], function(e, t) {
        le.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return 0 === e.offsetWidth && dt.test(le.css(e, "display")) ? le.swap(e, bt, function() {
                    return S(e, t, r);
                }) : S(e, t, r);
            },
            set: function(e, n, r) {
                var i = r && ut(e);
                return k(e, n, r ? E(e, t, r, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), le.support.opacity || (le.cssHooks.opacity = {
        get: function(e, t) {
            return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(o.replace(ct, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || r && !r.filter) || (n.filter = ct.test(o) ? o.replace(ct, i) : o + " " + i);
        }
    }), le(function() {
        le.support.reliableMarginRight || (le.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return le.swap(e, {
                    display: "inline-block"
                }, lt, [ e, "marginRight" ]);
            }
        }), !le.support.pixelPosition && le.fn.position && le.each([ "top", "left" ], function(e, t) {
            le.cssHooks[t] = {
                get: function(e, n) {
                    if (n) return n = lt(e, t), mt.test(n) ? le(e).position()[t] + "px" : n;
                }
            };
        });
    }), le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"));
    }, le.expr.filters.visible = function(e) {
        return !le.expr.filters.hidden(e);
    }), le.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        le.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + wt[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, ht.test(e) || (le.cssHooks[e + t].set = k);
    });
    var Ct = /%20/g, Nt = /\[\]$/, kt = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i, St = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({
        serialize: function() {
            return le.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = le.prop(this, "elements");
                return e ? le.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !le(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !et.test(e));
            }).map(function(e, t) {
                var n = le(this).val();
                return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                };
            }).get();
        }
    }), le.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) D(r, e[r], n, o);
        return i.join("&").replace(Ct, "+");
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        le.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), le.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var At, jt, Dt = le.now(), Lt = /\?/, Ht = /#.*$/, qt = /([?&])_=[^&]*/, _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ot = /^(?:GET|HEAD)$/, Ft = /^\/\//, Bt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Pt = le.fn.load, Rt = {}, Wt = {}, $t = "*/".concat("*");
    try {
        jt = J.href;
    } catch (e) {
        (jt = G.createElement("a")).href = "", jt = jt.href;
    }
    At = Bt.exec(jt.toLowerCase()) || [], le.fn.load = function(e, n, r) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), le.isFunction(n) ? (r = n, 
        n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && le.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, o || [ e.responseText, t, e ]);
        }), this;
    }, le.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        le.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt,
            type: "GET",
            isLocal: Mt.test(At[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
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
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": le.parseJSON,
                "text xml": le.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? q(q(e, le.ajaxSettings), t) : q(le.ajaxSettings, e);
        },
        ajaxPrefilter: L(Rt),
        ajaxTransport: L(Wt),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, w, C = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, 
                o = e >= 200 && e < 300 || 304 === e, r && (b = _(p, T, r)), b = M(p, b, T, o), 
                o ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (le.lastModified[a] = w), 
                (w = T.getResponseHeader("etag")) && (le.etag[a] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, 
                f = b.data, o = !(v = b.error))) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (n || C) + "", o ? g.resolveWith(d, [ f, C, T ]) : g.rejectWith(d, [ T, C, v ]), 
                T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [ T, p, o ? f : v ]), 
                m.fireWith(d, [ T, C ]), l && (h.trigger("ajaxComplete", [ T, p ]), --le.active || le.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = le.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? le(d) : le.event, g = le.Deferred(), m = le.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!f) for (f = {}; t = _t.exec(s); ) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (x < 2) for (t in e) y[t] = [ y[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t), r(0, t), this;
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || jt) + "").replace(Ht, "").replace(Ft, At[1] + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = le.trim(p.dataType || "*").toLowerCase().match(fe) || [ "" ], 
            null == p.crossDomain && (i = Bt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === At[1] && i[2] === At[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = le.param(p.data, p.traditional)), 
            H(Rt, p, n, T), 2 === x) return T;
            (l = p.global) && 0 == le.active++ && le.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !Ot.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Lt.test(a) ? "&" : "?") + p.data, 
            delete p.data), !1 === p.cache && (p.url = qt.test(a) ? a.replace(qt, "$1_=" + Dt++) : a + (Lt.test(a) ? "&" : "?") + "_=" + Dt++)), 
            p.ifModified && (le.lastModified[a] && T.setRequestHeader("If-Modified-Since", le.lastModified[a]), 
            le.etag[a] && T.setRequestHeader("If-None-Match", le.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), 
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, T, p) || 2 === x)) return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](p[o]);
            if (c = H(Wt, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [ T, p ]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout");
                }, p.timeout));
                try {
                    x = 1, c.send(v, r);
                } catch (e) {
                    if (!(x < 2)) throw e;
                    r(-1, e);
                }
            } else r(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return le.get(e, t, n, "json");
        },
        getScript: function(e, n) {
            return le.get(e, t, n, "script");
        }
    }), le.each([ "get", "post" ], function(e, n) {
        le[n] = function(e, r, i, o) {
            return le.isFunction(r) && (o = o || i, i = r, r = t), le.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            });
        };
    }), le.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return le.globalEval(e), e;
            }
        }
    }), le.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), le.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = G.head || le("head")[0] || G.documentElement;
            return {
                send: function(t, i) {
                    (n = G.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
                    n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var It = [], zt = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = It.pop() || le.expando + "_" + Dt++;
            return this[e] = !0, e;
        }
    }), le.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = !1 !== n.jsonp && (zt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(n.data) && "data");
        if (u || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        u ? n[u] = n[u].replace(zt, "$1" + o) : !1 !== n.jsonp && (n.url += (Lt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return s || le.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, It.push(o)), s && le.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script";
    });
    var Xt, Ut, Vt = 0, Yt = e.ActiveXObject && function() {
        var e;
        for (e in Xt) Xt[e](t, !0);
    };
    le.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && O() || F();
    } : O, Ut = le.ajaxSettings.xhr(), le.support.cors = !!Ut && "withCredentials" in Ut, 
    (Ut = le.support.ajax = !!Ut) && le.ajaxTransport(function(n) {
        if (!n.crossDomain || le.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), 
                    n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s]);
                    } catch (e) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = le.noop, 
                            Yt && delete Xt[a]), i) 4 !== u.readyState && u.abort(); else {
                                f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText;
                                } catch (e) {
                                    c = "";
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404;
                            }
                        } catch (e) {
                            i || o(-1, e);
                        }
                        f && o(s, c, f, l);
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Vt, Yt && (Xt || (Xt = {}, 
                    le(e).unload(Yt)), Xt[a] = r), u.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var Jt, Gt, Qt = /^(?:toggle|show|hide)$/, Kt = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"), Zt = /queueHooks$/, en = [ $ ], tn = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Kt.exec(t), o = i && i[3] || (le.cssNumber[e] ? "" : "px"), a = (le.cssNumber[e] || "px" !== o && +r) && Kt.exec(le.css(n.elem, e)), s = 1, u = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do {
                    a /= s = s || ".5", le.style(n.elem, e, a + o);
                } while (s !== (s = n.cur() / r) && 1 !== s && --u);
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), 
            n;
        } ]
    };
    le.Animation = le.extend(R, {
        tweener: function(e, t) {
            le.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], tn[n] = tn[n] || [], tn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? en.unshift(e) : en.push(e);
        }
    }), le.Tween = I, I.prototype = {
        constructor: I,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (le.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, le.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = le.fn[t];
        le.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i);
        };
    }), le.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = le.isEmptyObject(e), o = le.speed(t, n, r), a = function() {
                var t = R(this, le.extend({}, e), o);
                (i || le._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = le.timers, a = le._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Zt.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), 
                t = !1, o.splice(n, 1));
                !t && r || le.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = le._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = le.timers, a = r ? r.length : 0;
                for (n.finish = !0, le.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), le.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        le.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), le.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? le.extend({}, e) : {
            complete: n || !n && t || le.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !le.isFunction(t) && t
        };
        return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default, 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            le.isFunction(r.old) && r.old.call(this), r.queue && le.dequeue(this, r.queue);
        }, r;
    }, le.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, le.timers = [], le.fx = I.prototype.init, le.fx.tick = function() {
        var e, n = le.timers, r = 0;
        for (Jt = le.now(); r < n.length; r++) (e = n[r])() || n[r] !== e || n.splice(r--, 1);
        n.length || le.fx.stop(), Jt = t;
    }, le.fx.timer = function(e) {
        e() && le.timers.push(e) && le.fx.start();
    }, le.fx.interval = 13, le.fx.start = function() {
        Gt || (Gt = setInterval(le.fx.tick, le.fx.interval));
    }, le.fx.stop = function() {
        clearInterval(Gt), Gt = null;
    }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
        return le.grep(le.timers, function(t) {
            return e === t.elem;
        }).length;
    }), le.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            le.offset.setOffset(this, e, t);
        });
        var n, r, i = {
            top: 0,
            left: 0
        }, o = this[0], a = o && o.ownerDocument;
        if (a) return n = a.documentElement, le.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), 
        r = X(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i;
    }, le.offset = {
        setOffset: function(e, t, n) {
            var r = le.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = le(e), s = a.offset(), u = le.css(e, "top"), l = le.css(e, "left"), c = {}, f = {};
            ("absolute" === r || "fixed" === r) && le.inArray("auto", [ u, l ]) > -1 ? (i = (f = a.position()).top, 
            o = f.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), le.isFunction(t) && (t = t.call(e, n, s)), 
            null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), 
            "using" in t ? t.using.call(e, c) : a.css(c);
        }
    }, le.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === le.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), 
                n.left += le.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - le.css(r, "marginTop", !0),
                    left: t.left - n.left - le.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Q; e && !le.nodeName(e, "html") && "static" === le.css(e, "position"); ) e = e.offsetParent;
                return e || Q;
            });
        }
    }), le.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        le.fn[e] = function(i) {
            return le.access(this, function(e, i, o) {
                var a = X(e);
                if (o === t) return a ? n in a ? a[n] : a.document.documentElement[i] : e[i];
                a ? a.scrollTo(r ? le(a).scrollLeft() : o, r ? o : le(a).scrollTop()) : e[i] = o;
            }, e, i, arguments.length, null);
        };
    }), le.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        le.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            le.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (!0 === i || !0 === o ? "margin" : "border");
                return le.access(this, function(n, r, i) {
                    var o;
                    return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? le.css(n, r, s) : le.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), le.fn.size = function() {
        return this.length;
    }, le.fn.andSelf = le.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = le : (e.jQuery = e.$ = le, 
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return le;
    }));
}(window);