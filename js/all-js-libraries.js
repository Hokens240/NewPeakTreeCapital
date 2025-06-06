/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = new Map
      , e = {
        set(e, i, n) {
            t.has(e) || t.set(e, new Map);
            const s = t.get(e);
            s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (e, i) => t.has(e) && t.get(e).get(i) || null,
        remove(e, i) {
            if (!t.has(e))
                return;
            const n = t.get(e);
            n.delete(i),
            0 === n.size && t.delete(e)
        }
    }
      , i = "transitionend"
      , n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ( (t, e) => `#${CSS.escape(e)}`))),
    t)
      , s = t => {
        t.dispatchEvent(new Event(i))
    }
      , o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null
      , a = t => {
        if (!o(t) || 0 === t.getClientRects().length)
            return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility")
          , i = t.closest("details:not([open])");
        if (!i)
            return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i)
                return !1;
            if (null === e)
                return !1
        }
        return e
    }
      , l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , c = t => {
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
    }
      , h = () => {}
      , d = t => {
        t.offsetHeight
    }
      , u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , f = []
      , p = () => "rtl" === document.documentElement.dir
      , m = t => {
        var e;
        e = () => {
            const e = u();
            if (e) {
                const i = t.NAME
                  , n = e.fn[i];
                e.fn[i] = t.jQueryInterface,
                e.fn[i].Constructor = t,
                e.fn[i].noConflict = () => (e.fn[i] = n,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", ( () => {
            for (const t of f)
                t()
        }
        )),
        f.push(e)) : e()
    }
      , g = (t, e=[], i=t) => "function" == typeof t ? t(...e) : i
      , _ = (t, e, n=!0) => {
        if (!n)
            return void g(t);
        const o = (t => {
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
            const n = Number.parseFloat(e)
              , s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0],
            i = i.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
        }
        )(e) + 5;
        let r = !1;
        const a = ({target: n}) => {
            n === e && (r = !0,
            e.removeEventListener(i, a),
            g(t))
        }
        ;
        e.addEventListener(i, a),
        setTimeout(( () => {
            r || s(e)
        }
        ), o)
    }
      , b = (t, e, i, n) => {
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1,
        n && (o = (o + s) % s),
        t[Math.max(0, Math.min(o, s - 1))])
    }
      , v = /[^.]*(?=\..*)\.|.*/
      , y = /\..*/
      , w = /::\d+$/
      , A = {};
    let E = 1;
    const T = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
    }
    function x(t) {
        const e = O(t);
        return t.uidEvent = e,
        A[e] = A[e] || {},
        A[e]
    }
    function k(t, e, i=null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }
    function L(t, e, i) {
        const n = "string" == typeof e
          , s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t),
        [n, s, o]
    }
    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t)
            return;
        let[o,r,a] = L(e, i, n);
        if (e in T) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            r = t(r)
        }
        const l = x(t)
          , c = l[a] || (l[a] = {})
          , h = k(c, r, o ? i : null);
        if (h)
            return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, ""))
          , u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = s; r && r !== this; r = r.parentNode)
                    for (const a of o)
                        if (a === r)
                            return P(s, {
                                delegateTarget: r
                            }),
                            n.oneOff && N.off(t, s.type, e, i),
                            i.apply(r, [s])
            }
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return P(n, {
                    delegateTarget: t
                }),
                i.oneOff && N.off(t, n.type, e),
                e.apply(t, [n])
            }
        }(t, r);
        u.delegationSelector = o ? i : null,
        u.callable = r,
        u.oneOff = s,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)),
        delete e[i][o.uidEvent])
    }
    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o,r] of Object.entries(s))
            o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
    }
    function I(t) {
        return t = t.replace(y, ""),
        T[t] || t
    }
    const N = {
        on(t, e, i, n) {
            S(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            S(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t)
                return;
            const [s,o,r] = L(e, i, n)
              , a = r !== e
              , l = x(t)
              , c = l[r] || {}
              , h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const i of Object.keys(l))
                        $(t, l, i, e.slice(1));
                for (const [i,n] of Object.entries(c)) {
                    const s = i.replace(w, "");
                    a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
                }
            } else {
                if (!Object.keys(c).length)
                    return;
                D(t, l, r, o, s ? i : null)
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            const n = u();
            let s = null
              , o = !0
              , r = !0
              , a = !1;
            e !== I(e) && n && (s = n.Event(e, i),
            n(t).trigger(s),
            o = !s.isPropagationStopped(),
            r = !s.isImmediatePropagationStopped(),
            a = s.isDefaultPrevented());
            const l = P(new Event(e,{
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(),
            r && t.dispatchEvent(l),
            l.defaultPrevented && s && s.preventDefault(),
            l
        }
    };
    function P(t, e={}) {
        for (const [i,n] of Object.entries(e))
            try {
                t[i] = n
            } catch (e) {
                Object.defineProperty(t, i, {
                    configurable: !0,
                    get: () => n
                })
            }
        return t
    }
    function j(t) {
        if ("true" === t)
            return !0;
        if ("false" === t)
            return !1;
        if (t === Number(t).toString())
            return Number(t);
        if ("" === t || "null" === t)
            return null;
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }
    function M(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    const F = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${M(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${M(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {}
              , i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = j(t.dataset[n])
            }
            return e
        },
        getDataAttribute: (t, e) => j(t.getAttribute(`data-bs-${M(e)}`))
    };
    class H {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? F.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
            for (const [n,s] of Object.entries(e)) {
                const e = t[n]
                  , r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
            }
            var i
        }
    }
    class W extends H {
        constructor(t, i) {
            super(),
            (t = r(t)) && (this._element = t,
            this._config = this._getConfig(i),
            e.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY),
            N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))
                this[t] = null
        }
        _queueCallback(t, e, i=!0) {
            _(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.3.3"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const B = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith("."))
                return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
            e = i && "#" !== i ? i.trim() : null
        }
        return e ? e.split(",").map((t => n(t))).join(",") : null
    }
      , z = {
        find: (t, e=document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e=document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
        parents(t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for (; n; )
                i.push(n),
                n = n.parentNode.closest(e);
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
            return this.find(e, t).filter((t => !l(t) && a(t)))
        },
        getSelectorFromElement(t) {
            const e = B(t);
            return e && z.findOne(e) ? e : null
        },
        getElementFromSelector(t) {
            const e = B(t);
            return e ? z.findOne(e) : null
        },
        getMultipleElementsFromSelector(t) {
            const e = B(t);
            return e ? z.find(e) : []
        }
    }
      , R = (t, e="hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`
          , n = t.NAME;
        N.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
            l(this))
                return;
            const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]()
        }
        ))
    }
      , q = ".bs.alert"
      , V = `close${q}`
      , K = `closed${q}`;
    class Q extends W {
        static get NAME() {
            return "alert"
        }
        close() {
            if (N.trigger(this._element, V).defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(( () => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            N.trigger(this._element, K),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    R(Q, "close"),
    m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    N.on(document, "click.bs.button.data-api", X, (t => {
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle()
    }
    )),
    m(Y);
    const U = ".bs.swipe"
      , G = `touchstart${U}`
      , J = `touchmove${U}`
      , Z = `touchend${U}`
      , tt = `pointerdown${U}`
      , et = `pointerup${U}`
      , it = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , nt = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class st extends H {
        constructor(t, e) {
            super(),
            this._element = t,
            t && st.isSupported() && (this._config = this._getConfig(e),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return it
        }
        static get DefaultType() {
            return nt
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            N.off(this._element, U)
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            g(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40)
                return;
            const e = t / this._deltaX;
            this._deltaX = 0,
            e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t => this._start(t))),
            N.on(this._element, et, (t => this._end(t))),
            this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t => this._start(t))),
            N.on(this._element, J, (t => this._move(t))),
            N.on(this._element, Z, (t => this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const ot = ".bs.carousel"
      , rt = ".data-api"
      , at = "next"
      , lt = "prev"
      , ct = "left"
      , ht = "right"
      , dt = `slide${ot}`
      , ut = `slid${ot}`
      , ft = `keydown${ot}`
      , pt = `mouseenter${ot}`
      , mt = `mouseleave${ot}`
      , gt = `dragstart${ot}`
      , _t = `load${ot}${rt}`
      , bt = `click${ot}${rt}`
      , vt = "carousel"
      , yt = "active"
      , wt = ".active"
      , At = ".carousel-item"
      , Et = wt + At
      , Tt = {
        ArrowLeft: ht,
        ArrowRight: ct
    }
      , Ct = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , Ot = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class xt extends W {
        constructor(t, e) {
            super(t, e),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = z.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === vt && this.cycle()
        }
        static get Default() {
            return Ct
        }
        static get DefaultType() {
            return Ot
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(at)
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }
        prev() {
            this._slide(lt)
        }
        pause() {
            this._isSliding && s(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval(( () => this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, ( () => this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void N.one(this._element, ut, ( () => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t)
                return;
            const n = t > i ? at : lt;
            this._slide(n, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval,
            t
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t => this._keydown(t))),
            "hover" === this._config.pause && (N.on(this._element, pt, ( () => this.pause())),
            N.on(this._element, mt, ( () => this._maybeEnableCycle()))),
            this._config.touch && st.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element))
                N.on(t, gt, (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(ct)),
                rightCallback: () => this._slide(this._directionToOrder(ht)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout(( () => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new st(this._element,t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = Tt[t.key];
            e && (t.preventDefault(),
            this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement)
                return;
            const e = z.findOne(wt, this._indicatorsElement);
            e.classList.remove(yt),
            e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(yt),
            i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e=null) {
            if (this._isSliding)
                return;
            const i = this._getActive()
              , n = t === at
              , s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i)
                return;
            const o = this._getItemIndex(s)
              , r = e => N.trigger(this._element, e, {
                relatedTarget: s,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(i),
                to: o
            });
            if (r(dt).defaultPrevented)
                return;
            if (!i || !s)
                return;
            const a = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(o),
            this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end"
              , c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c),
            d(s),
            i.classList.add(l),
            s.classList.add(l),
            this._queueCallback(( () => {
                s.classList.remove(l, c),
                s.classList.add(yt),
                i.classList.remove(yt, c, l),
                this._isSliding = !1,
                r(ut)
            }
            ), i, this._isAnimated()),
            a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return z.findOne(Et, this._element)
        }
        _getItems() {
            return z.find(At, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(t) {
            return p() ? t === ct ? lt : at : t === ct ? at : lt
        }
        _orderToDirection(t) {
            return p() ? t === lt ? ct : ht : t === lt ? ht : ct
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else
                    e.to(t)
            }
            ))
        }
    }
    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(vt))
            return;
        t.preventDefault();
        const i = xt.getOrCreateInstance(e)
          , n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n),
        void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(),
        void i._maybeEnableCycle()) : (i.prev(),
        void i._maybeEnableCycle())
    }
    )),
    N.on(window, _t, ( () => {
        const t = z.find('[data-bs-ride="carousel"]');
        for (const e of t)
            xt.getOrCreateInstance(e)
    }
    )),
    m(xt);
    const kt = ".bs.collapse"
      , Lt = `show${kt}`
      , St = `shown${kt}`
      , Dt = `hide${kt}`
      , $t = `hidden${kt}`
      , It = `click${kt}.data-api`
      , Nt = "show"
      , Pt = "collapse"
      , jt = "collapsing"
      , Mt = `:scope .${Pt} .${Pt}`
      , Ft = '[data-bs-toggle="collapse"]'
      , Ht = {
        parent: null,
        toggle: !0
    }
      , Wt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class Bt extends W {
        constructor(t, e) {
            super(t, e),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const i = z.find(Ft);
            for (const t of i) {
                const e = z.getSelectorFromElement(t)
                  , i = z.find(e).filter((t => t === this._element));
                null !== e && i.length && this._triggerArray.push(t)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return Ht
        }
        static get DefaultType() {
            return Wt
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => Bt.getOrCreateInstance(t, {
                toggle: !1
            })))),
            t.length && t[0]._isTransitioning)
                return;
            if (N.trigger(this._element, Lt).defaultPrevented)
                return;
            for (const e of t)
                e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Pt),
            this._element.classList.add(jt),
            this._element.style[e] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(( () => {
                this._isTransitioning = !1,
                this._element.classList.remove(jt),
                this._element.classList.add(Pt, Nt),
                this._element.style[e] = "",
                N.trigger(this._element, St)
            }
            ), this._element, !0),
            this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (N.trigger(this._element, Dt).defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            d(this._element),
            this._element.classList.add(jt),
            this._element.classList.remove(Pt, Nt);
            for (const t of this._triggerArray) {
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback(( () => {
                this._isTransitioning = !1,
                this._element.classList.remove(jt),
                this._element.classList.add(Pt),
                N.trigger(this._element, $t)
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(Nt)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle),
            t.parent = r(t.parent),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = this._getFirstLevelChildren(Ft);
            for (const e of t) {
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = z.find(Mt, this._config.parent);
            return z.find(t, this._config.parent).filter((t => !e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t)
                    i.classList.toggle("collapsed", !e),
                    i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each((function() {
                const i = Bt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }
            ))
        }
    }
    N.on(document, It, Ft, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this))
            Bt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
    }
    )),
    m(Bt);
    var zt = "top"
      , Rt = "bottom"
      , qt = "right"
      , Vt = "left"
      , Kt = "auto"
      , Qt = [zt, Rt, qt, Vt]
      , Xt = "start"
      , Yt = "end"
      , Ut = "clippingParents"
      , Gt = "viewport"
      , Jt = "popper"
      , Zt = "reference"
      , te = Qt.reduce((function(t, e) {
        return t.concat([e + "-" + Xt, e + "-" + Yt])
    }
    ), [])
      , ee = [].concat(Qt, [Kt]).reduce((function(t, e) {
        return t.concat([e, e + "-" + Xt, e + "-" + Yt])
    }
    ), [])
      , ie = "beforeRead"
      , ne = "read"
      , se = "afterRead"
      , oe = "beforeMain"
      , re = "main"
      , ae = "afterMain"
      , le = "beforeWrite"
      , ce = "write"
      , he = "afterWrite"
      , de = [ie, ne, se, oe, re, ae, le, ce, he];
    function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function fe(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element
    }
    function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement
    }
    function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
    }
    const _e = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {}
                  , n = e.attributes[t] || {}
                  , s = e.elements[t];
                me(s) && ue(s) && (Object.assign(s.style, i),
                Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper),
            e.styles = i,
            e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var n = e.elements[t]
                      , s = e.attributes[t] || {}
                      , o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    me(n) && ue(n) && (Object.assign(n.style, o),
                    Object.keys(s).forEach((function(t) {
                        n.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function be(t) {
        return t.split("-")[0]
    }
    var ve = Math.max
      , ye = Math.min
      , we = Math.round;
    function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
            return t.brand + "/" + t.version
        }
        )).join(" ") : navigator.userAgent
    }
    function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae())
    }
    function Te(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = !1);
        var n = t.getBoundingClientRect()
          , s = 1
          , o = 1;
        e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1,
        o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
        var r = (pe(t) ? fe(t) : window).visualViewport
          , a = !Ee() && i
          , l = (n.left + (a && r ? r.offsetLeft : 0)) / s
          , c = (n.top + (a && r ? r.offsetTop : 0)) / o
          , h = n.width / s
          , d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        }
    }
    function Ce(t) {
        var e = Te(t)
          , i = t.offsetWidth
          , n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width),
        Math.abs(e.height - n) <= 1 && (n = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }
    function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && ge(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n))
                    return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }
    function xe(t) {
        return fe(t).getComputedStyle(t)
    }
    function ke(t) {
        return ["table", "td", "th"].indexOf(ue(t)) >= 0
    }
    function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t)
    }
    function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null
    }
    function $e(t) {
        for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position; )
            i = De(i);
        return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position)
                return null;
            var i = Se(t);
            for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0; ) {
                var n = xe(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter)
                    return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }
    function Ie(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    function Ne(t, e, i) {
        return ve(t, ye(e, i))
    }
    function Pe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }
    function je(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t,
            e
        }
        ), {})
    }
    const Me = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = be(i.placement), l = Ie(a), c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : je(t, Qt))
                }(s.padding, i)
                  , d = Ce(o)
                  , u = "y" === l ? zt : Vt
                  , f = "y" === l ? Rt : qt
                  , p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c]
                  , m = r[l] - i.rects.reference[l]
                  , g = $e(o)
                  , _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0
                  , b = p / 2 - m / 2
                  , v = h[u]
                  , y = _ - d[c] - h[f]
                  , w = _ / 2 - d[c] / 2 + b
                  , A = Ne(v, w, y)
                  , E = l;
                i.modifiersData[n] = ((e = {})[E] = A,
                e.centerOffset = A - w,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , i = t.options.element
              , n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function Fe(t) {
        return t.split("-")[1]
    }
    var He = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function We(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({
            x: f,
            y: m
        }) : {
            x: f,
            y: m
        };
        f = g.x,
        m = g.y;
        var _ = r.hasOwnProperty("x")
          , b = r.hasOwnProperty("y")
          , v = Vt
          , y = zt
          , w = window;
        if (c) {
            var A = $e(i)
              , E = "clientHeight"
              , T = "clientWidth";
            A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight",
            T = "scrollWidth"),
            (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt,
            m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height,
            m *= l ? 1 : -1),
            s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt,
            f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width,
            f *= l ? 1 : -1)
        }
        var C, O = Object.assign({
            position: a
        }, c && He), x = !0 === h ? function(t, e) {
            var i = t.x
              , n = t.y
              , s = e.devicePixelRatio || 1;
            return {
                x: we(i * s) / s || 0,
                y: we(n * s) / s || 0
            }
        }({
            x: f,
            y: m
        }, fe(i)) : {
            x: f,
            y: m
        };
        return f = x.x,
        m = x.y,
        l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "",
        C[v] = _ ? "0" : "",
        C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)",
        C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "",
        e[v] = _ ? f + "px" : "",
        e.transform = "",
        e))
    }
    const Be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = i.gpuAcceleration
              , s = void 0 === n || n
              , o = i.adaptive
              , r = void 0 === o || o
              , a = i.roundOffsets
              , l = void 0 === a || a
              , c = {
                placement: be(e.placement),
                variation: Fe(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var ze = {
        passive: !0
    };
    const Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , i = t.instance
              , n = t.options
              , s = n.scroll
              , o = void 0 === s || s
              , r = n.resize
              , a = void 0 === r || r
              , l = fe(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                t.addEventListener("scroll", i.update, ze)
            }
            )),
            a && l.addEventListener("resize", i.update, ze),
            function() {
                o && c.forEach((function(t) {
                    t.removeEventListener("scroll", i.update, ze)
                }
                )),
                a && l.removeEventListener("resize", i.update, ze)
            }
        },
        data: {}
    };
    var qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Ve(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return qe[t]
        }
        ))
    }
    var Ke = {
        start: "end",
        end: "start"
    };
    function Qe(t) {
        return t.replace(/start|end/g, (function(t) {
            return Ke[t]
        }
        ))
    }
    function Xe(t) {
        var e = fe(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft
    }
    function Ue(t) {
        var e = xe(t)
          , i = e.overflow
          , n = e.overflowX
          , s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }
    function Ge(t) {
        return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t))
    }
    function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t)
          , s = n === (null == (i = t.ownerDocument) ? void 0 : i.body)
          , o = fe(n)
          , r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n
          , a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)))
    }
    function Ze(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function ti(t, e, i) {
        return e === Gt ? Ze(function(t, e) {
            var i = fe(t)
              , n = Le(t)
              , s = i.visualViewport
              , o = n.clientWidth
              , r = n.clientHeight
              , a = 0
              , l = 0;
            if (s) {
                o = s.width,
                r = s.height;
                var c = Ee();
                (c || !c && "fixed" === e) && (a = s.offsetLeft,
                l = s.offsetTop)
            }
            return {
                width: o,
                height: r,
                x: a + Ye(t),
                y: l
            }
        }(t, i)) : pe(e) ? function(t, e) {
            var i = Te(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop,
            i.left = i.left + t.clientLeft,
            i.bottom = i.top + t.clientHeight,
            i.right = i.left + t.clientWidth,
            i.width = t.clientWidth,
            i.height = t.clientHeight,
            i.x = i.left,
            i.y = i.top,
            i
        }(e, i) : Ze(function(t) {
            var e, i = Le(t), n = Xe(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ye(t), l = -n.scrollTop;
            return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o),
            {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(Le(t)))
    }
    function ei(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? be(s) : null, r = s ? Fe(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
        case zt:
            e = {
                x: a,
                y: i.y - n.height
            };
            break;
        case Rt:
            e = {
                x: a,
                y: i.y + i.height
            };
            break;
        case qt:
            e = {
                x: i.x + i.width,
                y: l
            };
            break;
        case Vt:
            e = {
                x: i.x - n.width,
                y: l
            };
            break;
        default:
            e = {
                x: i.x,
                y: i.y
            }
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
            case Xt:
                e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                break;
            case Yt:
                e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }
    function ii(t, e) {
        void 0 === e && (e = {});
        var i = e
          , n = i.placement
          , s = void 0 === n ? t.placement : n
          , o = i.strategy
          , r = void 0 === o ? t.strategy : o
          , a = i.boundary
          , l = void 0 === a ? Ut : a
          , c = i.rootBoundary
          , h = void 0 === c ? Gt : c
          , d = i.elementContext
          , u = void 0 === d ? Jt : d
          , f = i.altBoundary
          , p = void 0 !== f && f
          , m = i.padding
          , g = void 0 === m ? 0 : m
          , _ = Pe("number" != typeof g ? g : je(g, Qt))
          , b = u === Jt ? Zt : Jt
          , v = t.rects.popper
          , y = t.elements[p ? b : u]
          , w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = Je(Se(t))
                  , i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
                return pe(i) ? e.filter((function(t) {
                    return pe(t) && Oe(t, i) && "body" !== ue(t)
                }
                )) : []
            }(t) : [].concat(e)
              , o = [].concat(s, [i])
              , r = o[0]
              , a = o.reduce((function(e, i) {
                var s = ti(t, i, n);
                return e.top = ve(s.top, e.top),
                e.right = ye(s.right, e.right),
                e.bottom = ye(s.bottom, e.bottom),
                e.left = ve(s.left, e.left),
                e
            }
            ), ti(t, r, n));
            return a.width = a.right - a.left,
            a.height = a.bottom - a.top,
            a.x = a.left,
            a.y = a.top,
            a
        }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r)
          , A = Te(t.elements.reference)
          , E = ei({
            reference: A,
            element: v,
            strategy: "absolute",
            placement: s
        })
          , T = Ze(Object.assign({}, v, E))
          , C = u === Jt ? T : A
          , O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }
          , x = t.modifiersData.offset;
        if (u === Jt && x) {
            var k = x[s];
            Object.keys(O).forEach((function(t) {
                var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1
                  , i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e
            }
            ))
        }
        return O
    }
    function ni(t, e) {
        void 0 === e && (e = {});
        var i = e
          , n = i.placement
          , s = i.boundary
          , o = i.rootBoundary
          , r = i.padding
          , a = i.flipVariations
          , l = i.allowedAutoPlacements
          , c = void 0 === l ? ee : l
          , h = Fe(n)
          , d = h ? a ? te : te.filter((function(t) {
            return Fe(t) === h
        }
        )) : Qt
          , u = d.filter((function(t) {
            return c.indexOf(t) >= 0
        }
        ));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = ii(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[be(i)],
            e
        }
        ), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }
        ))
    }
    const si = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
                    if (be(t) === Kt)
                        return [];
                    var e = Ve(t);
                    return [Qe(t), e, Qe(e)]
                }(g) : [Ve(g)]), v = [g].concat(b).reduce((function(t, i) {
                    return t.concat(be(i) === Kt ? ni(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i)
                }
                ), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
                    var O = v[C]
                      , x = be(O)
                      , k = Fe(O) === Xt
                      , L = [zt, Rt].indexOf(x) >= 0
                      , S = L ? "width" : "height"
                      , D = ii(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    })
                      , $ = L ? k ? qt : Vt : k ? Rt : zt;
                    y[S] > w[S] && ($ = Ve($));
                    var I = Ve($)
                      , N = [];
                    if (o && N.push(D[x] <= 0),
                    a && N.push(D[$] <= 0, D[I] <= 0),
                    N.every((function(t) {
                        return t
                    }
                    ))) {
                        T = O,
                        E = !1;
                        break
                    }
                    A.set(O, N)
                }
                if (E)
                    for (var P = function(t) {
                        var e = v.find((function(e) {
                            var i = A.get(e);
                            if (i)
                                return i.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return T = e,
                            "break"
                    }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--)
                        ;
                e.placement !== T && (e.modifiersData[n]._skip = !0,
                e.placement = T,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function oi(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }
    function ri(t) {
        return [zt, qt, Rt, Vt].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    const ai = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , i = t.name
              , n = e.rects.reference
              , s = e.rects.popper
              , o = e.modifiersData.preventOverflow
              , r = ii(e, {
                elementContext: "reference"
            })
              , a = ii(e, {
                altBoundary: !0
            })
              , l = oi(r, n)
              , c = oi(a, s, o)
              , h = ri(l)
              , d = ri(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            })
        }
    }
      , li = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name
              , s = i.offset
              , o = void 0 === s ? [0, 0] : s
              , r = ee.reduce((function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = be(t)
                      , s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1
                      , o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i
                      , r = o[0]
                      , a = o[1];
                    return r = r || 0,
                    a = (a || 0) * s,
                    [Vt, qt].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    }
                }(i, e.rects, o),
                t
            }
            ), {})
              , a = r[e.placement]
              , l = a.x
              , c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
            e.modifiersData.popperOffsets.y += c),
            e.modifiersData[n] = r
        }
    }
      , ci = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , i = t.name;
            e.modifiersData[i] = ei({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    }
      , hi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name
              , s = i.mainAxis
              , o = void 0 === s || s
              , r = i.altAxis
              , a = void 0 !== r && r
              , l = i.boundary
              , c = i.rootBoundary
              , h = i.altBoundary
              , d = i.padding
              , u = i.tether
              , f = void 0 === u || u
              , p = i.tetherOffset
              , m = void 0 === p ? 0 : p
              , g = ii(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            })
              , _ = be(e.placement)
              , b = Fe(e.placement)
              , v = !b
              , y = Ie(_)
              , w = "x" === y ? "y" : "x"
              , A = e.modifiersData.popperOffsets
              , E = e.rects.reference
              , T = e.rects.popper
              , C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m
              , O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C)
              , x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
              , k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, S = "y" === y ? zt : Vt, D = "y" === y ? Rt : qt, $ = "y" === y ? "height" : "width", I = A[y], N = I + g[S], P = I - g[D], j = f ? -T[$] / 2 : 0, M = b === Xt ? E[$] : T[$], F = b === Xt ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? Ce(H) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = B[S], R = B[D], q = Ne(0, E[$], W[$]), V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis, K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis, Q = e.elements.arrow && $e(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y, G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
                    A[y] = G,
                    k[y] = G - I
                }
                if (a) {
                    var J, Z = "x" === y ? zt : Vt, tt = "x" === y ? Rt : qt, et = A[w], it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt], ot = -1 !== [zt, Vt].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = Ne(t, e, i);
                        return n > i ? i : n
                    }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
                    A[w] = ct,
                    k[w] = ct - et
                }
                e.modifiersData[n] = k
            }
        },
        requiresIfExists: ["offset"]
    };
    function di(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = me(e), r = me(e) && function(t) {
            var e = t.getBoundingClientRect()
              , i = we(e.width) / t.offsetWidth || 1
              , n = we(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n
        }(e), a = Le(e), l = Te(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Xe(n)),
        me(e) ? ((h = Te(e, !0)).x += e.clientLeft,
        h.y += e.clientTop) : a && (h.x = Ye(a))),
        {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }
    function ui(t) {
        var e = new Map
          , i = new Set
          , n = [];
        function s(t) {
            i.add(t.name),
            [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            }
            )),
            n.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            i.has(t.name) || s(t)
        }
        )),
        n
    }
    var fi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function pi() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function mi(t) {
        void 0 === t && (t = {});
        var e = t
          , i = e.defaultModifiers
          , n = void 0 === i ? [] : i
          , s = e.defaultOptions
          , o = void 0 === s ? fi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, fi, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(),
                    a.options = Object.assign({}, o, a.options, s),
                    a.scrollParents = {
                        reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                        popper: Je(e)
                    };
                    var r, c, u = function(t) {
                        var e = ui(t);
                        return de.reduce((function(t, i) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === i
                            }
                            )))
                        }
                        ), [])
                    }((r = [].concat(n, a.options.modifiers),
                    c = r.reduce((function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e,
                        t
                    }
                    ), {}),
                    Object.keys(c).map((function(t) {
                        return c[t]
                    }
                    ))));
                    return a.orderedModifiers = u.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , i = t.options
                          , n = void 0 === i ? {} : i
                          , s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {}
                            )
                        }
                    }
                    )),
                    h.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements
                          , e = t.reference
                          , i = t.popper;
                        if (pi(e, i)) {
                            a.rects = {
                                reference: di(e, $e(i), "fixed" === a.options.strategy),
                                popper: Ce(i)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var n = 0; n < a.orderedModifiers.length; n++)
                                if (!0 !== a.reset) {
                                    var s = a.orderedModifiers[n]
                                      , o = s.fn
                                      , r = s.options
                                      , l = void 0 === r ? {} : r
                                      , d = s.name;
                                    "function" == typeof o && (a = o({
                                        state: a,
                                        options: l,
                                        name: d,
                                        instance: h
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    n = -1
                        }
                    }
                },
                update: (s = function() {
                    return new Promise((function(t) {
                        h.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return r || (r = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            r = void 0,
                            t(s())
                        }
                        ))
                    }
                    ))),
                    r
                }
                ),
                destroy: function() {
                    d(),
                    c = !0
                }
            };
            if (!pi(t, e))
                return h;
            function d() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            }
            )),
            h
        }
    }
    var gi = mi()
      , _i = mi({
        defaultModifiers: [Re, ci, Be, _e]
    })
      , bi = mi({
        defaultModifiers: [Re, ci, Be, _e, li, si, hi, Me, ai]
    });
    const vi = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: ae,
        afterRead: se,
        afterWrite: he,
        applyStyles: _e,
        arrow: Me,
        auto: Kt,
        basePlacements: Qt,
        beforeMain: oe,
        beforeRead: ie,
        beforeWrite: le,
        bottom: Rt,
        clippingParents: Ut,
        computeStyles: Be,
        createPopper: bi,
        createPopperBase: gi,
        createPopperLite: _i,
        detectOverflow: ii,
        end: Yt,
        eventListeners: Re,
        flip: si,
        hide: ai,
        left: Vt,
        main: re,
        modifierPhases: de,
        offset: li,
        placements: ee,
        popper: Jt,
        popperGenerator: mi,
        popperOffsets: ci,
        preventOverflow: hi,
        read: ne,
        reference: Zt,
        right: qt,
        start: Xt,
        top: zt,
        variationPlacements: te,
        viewport: Gt,
        write: ce
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , yi = "dropdown"
      , wi = ".bs.dropdown"
      , Ai = ".data-api"
      , Ei = "ArrowUp"
      , Ti = "ArrowDown"
      , Ci = `hide${wi}`
      , Oi = `hidden${wi}`
      , xi = `show${wi}`
      , ki = `shown${wi}`
      , Li = `click${wi}${Ai}`
      , Si = `keydown${wi}${Ai}`
      , Di = `keyup${wi}${Ai}`
      , $i = "show"
      , Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , Ni = `${Ii}.${$i}`
      , Pi = ".dropdown-menu"
      , ji = p() ? "top-end" : "top-start"
      , Mi = p() ? "top-start" : "top-end"
      , Fi = p() ? "bottom-end" : "bottom-start"
      , Hi = p() ? "bottom-start" : "bottom-end"
      , Wi = p() ? "left-start" : "right-start"
      , Bi = p() ? "right-start" : "left-start"
      , zi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , Ri = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class qi extends W {
        constructor(t, e) {
            super(t, e),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return zi
        }
        static get DefaultType() {
            return Ri
        }
        static get NAME() {
            return yi
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children))
                        N.on(t, "mouseover", h);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add($i),
                this._element.classList.add($i),
                N.trigger(this._element, ki, t)
            }
        }
        hide() {
            if (l(this._element) || !this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!N.trigger(this._element, Ci, t).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove($i),
                this._element.classList.remove($i),
                this._element.setAttribute("aria-expanded", "false"),
                F.removeDataAttribute(this._menu, "popper"),
                N.trigger(this._element, Oi, t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === vi)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = bi(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains($i)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend"))
                return Wi;
            if (t.classList.contains("dropstart"))
                return Bi;
            if (t.classList.contains("dropup-center"))
                return "top";
            if (t.classList.contains("dropdown-center"))
                return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Mi : ji : e ? Hi : Fi
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"),
            t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ...g(this._config.popperConfig, [t])
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
            i.length && b(i, e, t === Ti, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
                return;
            const e = z.find(Ni);
            for (const i of e) {
                const e = qi.getInstance(i);
                if (!e || !1 === e._config.autoClose)
                    continue;
                const n = t.composedPath()
                  , s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s)
                    continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                    continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t),
                e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName)
              , i = "Escape" === t.key
              , n = [Ei, Ti].includes(t.key);
            if (!n && !i)
                return;
            if (e && !i)
                return;
            t.preventDefault();
            const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode)
              , o = qi.getOrCreateInstance(s);
            if (n)
                return t.stopPropagation(),
                o.show(),
                void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(),
            o.hide(),
            s.focus())
        }
    }
    N.on(document, Si, Ii, qi.dataApiKeydownHandler),
    N.on(document, Si, Pi, qi.dataApiKeydownHandler),
    N.on(document, Li, qi.clearMenus),
    N.on(document, Di, qi.clearMenus),
    N.on(document, Li, Ii, (function(t) {
        t.preventDefault(),
        qi.getOrCreateInstance(this).toggle()
    }
    )),
    m(qi);
    const Vi = "backdrop"
      , Ki = "show"
      , Qi = `mousedown.bs.${Vi}`
      , Xi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , Yi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Ui extends H {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return Xi
        }
        static get DefaultType() {
            return Yi
        }
        static get NAME() {
            return Vi
        }
        show(t) {
            if (!this._config.isVisible)
                return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e),
            e.classList.add(Ki),
            this._emulateAnimation(( () => {
                g(t)
            }
            ))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki),
            this._emulateAnimation(( () => {
                this.dispose(),
                g(t)
            }
            ))) : g(t)
        }
        dispose() {
            this._isAppended && (N.off(this._element, Qi),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement),
            t
        }
        _append() {
            if (this._isAppended)
                return;
            const t = this._getElement();
            this._config.rootElement.append(t),
            N.on(t, Qi, ( () => {
                g(this._config.clickCallback)
            }
            )),
            this._isAppended = !0
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Gi = ".bs.focustrap"
      , Ji = `focusin${Gi}`
      , Zi = `keydown.tab${Gi}`
      , tn = "backward"
      , en = {
        autofocus: !0,
        trapElement: null
    }
      , nn = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class sn extends H {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return en
        }
        static get DefaultType() {
            return nn
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            N.off(document, Gi),
            N.on(document, Ji, (t => this._handleFocusin(t))),
            N.on(document, Zi, (t => this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            N.off(document, Gi))
        }
        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
        }
    }
    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , rn = ".sticky-top"
      , an = "padding-right"
      , ln = "margin-right";
    class cn {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, an, (e => e + t)),
            this._setElementAttributes(on, an, (e => e + t)),
            this._setElementAttributes(rn, ln, (e => e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, an),
            this._resetElementAttributes(on, an),
            this._resetElementAttributes(rn, ln)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n)
                    return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
            }
            ))
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e),
                t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            if (o(t))
                e(t);
            else
                for (const i of z.find(t, this._element))
                    e(i)
        }
    }
    const hn = ".bs.modal"
      , dn = `hide${hn}`
      , un = `hidePrevented${hn}`
      , fn = `hidden${hn}`
      , pn = `show${hn}`
      , mn = `shown${hn}`
      , gn = `resize${hn}`
      , _n = `click.dismiss${hn}`
      , bn = `mousedown.dismiss${hn}`
      , vn = `keydown.dismiss${hn}`
      , yn = `click${hn}.data-api`
      , wn = "modal-open"
      , An = "show"
      , En = "modal-static"
      , Tn = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , Cn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class On extends W {
        constructor(t, e) {
            super(t, e),
            this._dialog = z.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new cn,
            this._addEventListeners()
        }
        static get Default() {
            return Tn
        }
        static get DefaultType() {
            return Cn
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(wn),
            this._adjustDialog(),
            this._backdrop.show(( () => this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(An),
            this._queueCallback(( () => this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            N.off(window, hn),
            N.off(this._dialog, hn),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ui({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
            d(this._element),
            this._element.classList.add(An),
            this._queueCallback(( () => {
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                N.trigger(this._element, mn, {
                    relatedTarget: t
                })
            }
            ), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            N.on(this._element, vn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            }
            )),
            N.on(window, gn, ( () => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            )),
            N.on(this._element, bn, (t => {
                N.one(this._element, _n, (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                ))
            }
            ))
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(( () => {
                document.body.classList.remove(wn),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                N.trigger(this._element, fn)
            }
            ))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(En),
            this._queueCallback(( () => {
                this._element.classList.remove(En),
                this._queueCallback(( () => {
                    this._element.style.overflowY = e
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }
            ))
        }
    }
    N.on(document, yn, '[data-bs-toggle="modal"]', (function(t) {
        const e = z.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        N.one(e, pn, (t => {
            t.defaultPrevented || N.one(e, fn, ( () => {
                a(this) && this.focus()
            }
            ))
        }
        ));
        const i = z.findOne(".modal.show");
        i && On.getInstance(i).hide(),
        On.getOrCreateInstance(e).toggle(this)
    }
    )),
    R(On),
    m(On);
    const xn = ".bs.offcanvas"
      , kn = ".data-api"
      , Ln = `load${xn}${kn}`
      , Sn = "show"
      , Dn = "showing"
      , $n = "hiding"
      , In = ".offcanvas.show"
      , Nn = `show${xn}`
      , Pn = `shown${xn}`
      , jn = `hide${xn}`
      , Mn = `hidePrevented${xn}`
      , Fn = `hidden${xn}`
      , Hn = `resize${xn}`
      , Wn = `click${xn}${kn}`
      , Bn = `keydown.dismiss${xn}`
      , zn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Rn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class qn extends W {
        constructor(t, e) {
            super(t, e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return zn
        }
        static get DefaultType() {
            return Rn
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || N.trigger(this._element, Nn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new cn).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Dn),
            this._queueCallback(( () => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add(Sn),
                this._element.classList.remove(Dn),
                N.trigger(this._element, Pn, {
                    relatedTarget: t
                })
            }
            ), this._element, !0))
        }
        hide() {
            this._isShown && (N.trigger(this._element, jn).defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add($n),
            this._backdrop.hide(),
            this._queueCallback(( () => {
                this._element.classList.remove(Sn, $n),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new cn).reset(),
                N.trigger(this._element, Fn)
            }
            ), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ui({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Mn)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            N.on(this._element, Bn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Mn))
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = z.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        l(this))
            return;
        N.one(e, Fn, ( () => {
            a(this) && this.focus()
        }
        ));
        const i = z.findOne(In);
        i && i !== e && qn.getInstance(i).hide(),
        qn.getOrCreateInstance(e).toggle(this)
    }
    )),
    N.on(window, Ln, ( () => {
        for (const t of z.find(In))
            qn.getOrCreateInstance(t).show()
    }
    )),
    N.on(window, Hn, ( () => {
        for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide()
    }
    )),
    R(qn),
    m(qn);
    const Vn = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
      , Xn = (t, e) => {
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
    }
      , Yn = {
        allowList: Vn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , Un = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , Gn = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Jn extends H {
        constructor(t) {
            super(),
            this._config = this._getConfig(t)
        }
        static get Default() {
            return Yn
        }
        static get DefaultType() {
            return Un
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t),
            this._config.content = {
                ...this._config.content,
                ...t
            },
            this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e,i] of Object.entries(this._config.content))
                this._setContent(t, i, e);
            const e = t.children[0]
              , i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")),
            e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t),
            this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e,i] of Object.entries(t))
                super._typeCheckConfig({
                    selector: e,
                    entry: i
                }, Gn)
        }
        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length)
                    return t;
                if (i && "function" == typeof i)
                    return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html")
                  , s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const n = [].concat(...t.attributes)
                      , s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)
                        Xn(e, s) || t.removeAttribute(e.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return g(t, [this])
        }
        _putElementInTemplate(t, e) {
            if (this._config.html)
                return e.innerHTML = "",
                void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Zn = new Set(["sanitize", "allowList", "sanitizeFn"])
      , ts = "fade"
      , es = "show"
      , is = ".modal"
      , ns = "hide.bs.modal"
      , ss = "hover"
      , os = "focus"
      , rs = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
    }
      , as = {
        allowList: Vn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , ls = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class cs extends W {
        constructor(t, e) {
            if (void 0 === vi)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return as
        }
        static get DefaultType() {
            return ls
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            N.off(this._element.closest(is), ns, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const t = N.trigger(this._element, this.constructor.eventName("show"))
              , e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e)
                return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {container: n} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i),
            N.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(i),
            i.classList.add(es),
            "ontouchstart"in document.documentElement)
                for (const t of [].concat(...document.body.children))
                    N.on(t, "mouseover", h);
            this._queueCallback(( () => {
                N.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            ), this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(es),
                "ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        N.off(t, "mouseover", h);
                this._activeTrigger.click = !1,
                this._activeTrigger[os] = !1,
                this._activeTrigger[ss] = !1,
                this._isHovered = null,
                this._queueCallback(( () => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    N.trigger(this._element, this.constructor.eventName("hidden")))
                }
                ), this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e)
                return null;
            e.classList.remove(ts, es),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME).toString();
            return e.setAttribute("id", i),
            this._isAnimated() && e.classList.add(ts),
            e
        }
        setContent(t) {
            this._newContent = t,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(es)
        }
        _createPopper(t) {
            const e = g(this._config.placement, [this, t, this._element])
              , i = rs[e.toUpperCase()];
            return bi(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return g(t, [this._element])
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ...g(this._config.popperConfig, [e])
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                        this._initializeOnDelegatedTarget(t).toggle()
                    }
                    ));
                else if ("manual" !== e) {
                    const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    N.on(this._element, t, this._config.selector, (t => {
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusin" === t.type ? os : ss] = !0,
                        e._enter()
                    }
                    )),
                    N.on(this._element, i, this._config.selector, (t => {
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget),
                        e._leave()
                    }
                    ))
                }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }
            ,
            N.on(this._element.closest(is), ns, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout(( () => {
                this._isHovered && this.show()
            }
            ), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout(( () => {
                this._isHovered || this.hide()
            }
            ), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e))
                Zn.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            },
            t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e,i] of Object.entries(this._config))
                this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1,
            t.trigger = "manual",
            t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    m(cs);
    const hs = {
        ...cs.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , ds = {
        ...cs.DefaultType,
        content: "(null|string|element|function)"
    };
    class us extends cs {
        static get Default() {
            return hs
        }
        static get DefaultType() {
            return ds
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    m(us);
    const fs = ".bs.scrollspy"
      , ps = `activate${fs}`
      , ms = `click${fs}`
      , gs = `load${fs}.data-api`
      , _s = "active"
      , bs = "[href]"
      , vs = ".nav-link"
      , ys = `${vs}, .nav-item > ${vs}, .list-group-item`
      , ws = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , As = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class Es extends W {
        constructor(t, e) {
            super(t, e),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return ws
        }
        static get DefaultType() {
            return As
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())
                this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body,
            t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
            "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))),
            t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms),
            N.on(this._config.target, ms, bs, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window
                      , n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo)
                        return void i.scrollTo({
                            top: n,
                            behavior: "smooth"
                        });
                    i.scrollTop = n
                }
            }
            )))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t => this._observerCallback(t)),t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`)
              , i = t => {
                this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                this._process(e(t))
            }
              , n = (this._rootElement || document.documentElement).scrollTop
              , s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o),
                    !n)
                        return
                } else
                    s || t || i(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const t = z.find(bs, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e))
                    continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e),
                this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            this._activeTarget = t,
            t.classList.add(_s),
            this._activateParents(t),
            N.trigger(this._element, ps, {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
            else
                for (const e of z.parents(t, ".nav, .list-group"))
                    for (const t of z.prev(e, ys))
                        t.classList.add(_s)
        }
        _clearActiveClass(t) {
            t.classList.remove(_s);
            const e = z.find(`${bs}.${_s}`, t);
            for (const t of e)
                t.classList.remove(_s)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    N.on(window, gs, ( () => {
        for (const t of z.find('[data-bs-spy="scroll"]'))
            Es.getOrCreateInstance(t)
    }
    )),
    m(Es);
    const Ts = ".bs.tab"
      , Cs = `hide${Ts}`
      , Os = `hidden${Ts}`
      , xs = `show${Ts}`
      , ks = `shown${Ts}`
      , Ls = `click${Ts}`
      , Ss = `keydown${Ts}`
      , Ds = `load${Ts}`
      , $s = "ArrowLeft"
      , Is = "ArrowRight"
      , Ns = "ArrowUp"
      , Ps = "ArrowDown"
      , js = "Home"
      , Ms = "End"
      , Fs = "active"
      , Hs = "fade"
      , Ws = "show"
      , Bs = ".dropdown-toggle"
      , zs = `:not(${Bs})`
      , Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`
      , Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            N.on(this._element, Ss, (t => this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t))
                return;
            const e = this._getActiveElem()
              , i = e ? N.trigger(e, Cs, {
                relatedTarget: t
            }) : null;
            N.trigger(t, xs, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t),
            this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(Fs),
            this._activate(z.getElementFromSelector(t)),
            this._queueCallback(( () => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                N.trigger(t, ks, {
                    relatedTarget: e
                })) : t.classList.add(Ws)
            }
            ), t, t.classList.contains(Hs)))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Fs),
            t.blur(),
            this._deactivate(z.getElementFromSelector(t)),
            this._queueCallback(( () => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                N.trigger(t, Os, {
                    relatedTarget: e
                })) : t.classList.remove(Ws)
            }
            ), t, t.classList.contains(Hs)))
        }
        _keydown(t) {
            if (![$s, Is, Ns, Ps, js, Ms].includes(t.key))
                return;
            t.stopPropagation(),
            t.preventDefault();
            const e = this._getChildren().filter((t => !l(t)));
            let i;
            if ([js, Ms].includes(t.key))
                i = e[t.key === js ? 0 : e.length - 1];
            else {
                const n = [Is, Ps].includes(t.key);
                i = b(e, t.target, n, !0)
            }
            i && (i.focus({
                preventScroll: !0
            }),
            Ks.getOrCreateInstance(i).show())
        }
        _getChildren() {
            return z.find(qs, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)
                this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t)
              , i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown"))
                return;
            const n = (t, n) => {
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e)
            }
            ;
            n(Bs, Fs),
            n(".dropdown-menu", Ws),
            i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(Fs)
        }
        _getInnerElement(t) {
            return t.matches(qs) ? t : z.findOne(qs, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ks.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    N.on(document, Ls, Rs, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        l(this) || Ks.getOrCreateInstance(this).show()
    }
    )),
    N.on(window, Ds, ( () => {
        for (const t of z.find(Vs))
            Ks.getOrCreateInstance(t)
    }
    )),
    m(Ks);
    const Qs = ".bs.toast"
      , Xs = `mouseover${Qs}`
      , Ys = `mouseout${Qs}`
      , Us = `focusin${Qs}`
      , Gs = `focusout${Qs}`
      , Js = `hide${Qs}`
      , Zs = `hidden${Qs}`
      , to = `show${Qs}`
      , eo = `shown${Qs}`
      , io = "hide"
      , no = "show"
      , so = "showing"
      , oo = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ro = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class ao extends W {
        constructor(t, e) {
            super(t, e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return ro
        }
        static get DefaultType() {
            return oo
        }
        static get NAME() {
            return "toast"
        }
        show() {
            N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(io),
            d(this._element),
            this._element.classList.add(no, so),
            this._queueCallback(( () => {
                this._element.classList.remove(so),
                N.trigger(this._element, eo),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so),
            this._queueCallback(( () => {
                this._element.classList.add(io),
                this._element.classList.remove(so, no),
                N.trigger(this._element, Zs)
            }
            ), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(no),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(no)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(( () => {
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            N.on(this._element, Xs, (t => this._onInteraction(t, !0))),
            N.on(this._element, Ys, (t => this._onInteraction(t, !1))),
            N.on(this._element, Us, (t => this._onInteraction(t, !0))),
            N.on(this._element, Gs, (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return R(ao),
    m(ao),
    {
        Alert: Q,
        Button: Y,
        Carousel: xt,
        Collapse: Bt,
        Dropdown: qi,
        Modal: On,
        Offcanvas: qn,
        Popover: us,
        ScrollSpy: Es,
        Tab: Ks,
        Toast: ao,
        Tooltip: cs
    }
}
));
//# sourceMappingURL=bootstrap.bundle.min.js.map
var tns = function() {
    var t = window
      , Ai = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
        return setTimeout(t, 16)
    }
      , e = window
      , Ni = e.cancelAnimationFrame || e.mozCancelAnimationFrame || function(t) {
        clearTimeout(t)
    }
    ;
    function Li() {
        for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
            if (null !== (t = arguments[a]))
                for (e in t)
                    i !== (n = t[e]) && void 0 !== n && (i[e] = n);
        return i
    }
    function Bi(t) {
        return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t
    }
    function Si(t, e, n, i) {
        if (i)
            try {
                t.setItem(e, n)
            } catch (t) {}
        return n
    }
    function Hi() {
        var t = document
          , e = t.body;
        return e || ((e = t.createElement("body")).fake = !0),
        e
    }
    var n = document.documentElement;
    function Oi(t) {
        var e = "";
        return t.fake && (e = n.style.overflow,
        t.style.background = "",
        t.style.overflow = n.style.overflow = "hidden",
        n.appendChild(t)),
        e
    }
    function Di(t, e) {
        t.fake && (t.remove(),
        n.style.overflow = e,
        n.offsetHeight)
    }
    function ki(t, e, n, i) {
        "insertRule"in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
    }
    function Ri(t) {
        return ("insertRule"in t ? t.cssRules : t.rules).length
    }
    function Ii(t, e, n) {
        for (var i = 0, a = t.length; i < a; i++)
            e.call(n, t[i], i)
    }
    var i = "classList"in document.createElement("_")
      , Pi = i ? function(t, e) {
        return t.classList.contains(e)
    }
    : function(t, e) {
        return 0 <= t.className.indexOf(e)
    }
      , zi = i ? function(t, e) {
        Pi(t, e) || t.classList.add(e)
    }
    : function(t, e) {
        Pi(t, e) || (t.className += " " + e)
    }
      , Wi = i ? function(t, e) {
        Pi(t, e) && t.classList.remove(e)
    }
    : function(t, e) {
        Pi(t, e) && (t.className = t.className.replace(e, ""))
    }
    ;
    function qi(t, e) {
        return t.hasAttribute(e)
    }
    function Fi(t, e) {
        return t.getAttribute(e)
    }
    function r(t) {
        return void 0 !== t.item
    }
    function ji(t, e) {
        if (t = r(t) || t instanceof Array ? t : [t],
        "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--; )
                for (var i in e)
                    t[n].setAttribute(i, e[i])
    }
    function Vi(t, e) {
        t = r(t) || t instanceof Array ? t : [t];
        for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--; )
            for (var a = n; a--; )
                t[i].removeAttribute(e[a])
    }
    function Gi(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++)
            e.push(t[n]);
        return e
    }
    function Qi(t, e) {
        "none" !== t.style.display && (t.style.display = "none")
    }
    function Xi(t, e) {
        "none" === t.style.display && (t.style.display = "")
    }
    function Yi(t) {
        return "none" !== window.getComputedStyle(t).display
    }
    function Ki(e) {
        if ("string" == typeof e) {
            var n = [e]
              , i = e.charAt(0).toUpperCase() + e.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach(function(t) {
                "ms" === t && "transform" !== e || n.push(t + i)
            }),
            e = n
        }
        for (var t = document.createElement("fakeelement"), a = (e.length,
        0); a < e.length; a++) {
            var r = e[a];
            if (void 0 !== t.style[r])
                return r
        }
        return !1
    }
    function Ji(t, e) {
        var n = !1;
        return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"),
        n
    }
    var a = !1;
    try {
        var o = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        window.addEventListener("test", null, o)
    } catch (t) {}
    var u = !!a && {
        passive: !0
    };
    function Ui(t, e, n) {
        for (var i in e) {
            var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
            t.addEventListener(i, e[i], a)
        }
    }
    function _i(t, e) {
        for (var n in e) {
            var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
            t.removeEventListener(n, e[n], i)
        }
    }
    function Zi() {
        return {
            topics: {},
            on: function(t, e) {
                this.topics[t] = this.topics[t] || [],
                this.topics[t].push(e)
            },
            off: function(t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) {
                            this.topics[t].splice(n, 1);
                            break
                        }
            },
            emit: function(e, n) {
                n.type = e,
                this.topics[e] && this.topics[e].forEach(function(t) {
                    t(n, e)
                })
            }
        }
    }
    Object.keys || (Object.keys = function(t) {
        var e = [];
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }
    ),
    "remove"in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }
    );
    var $i = function(H) {
        H = Li({
            container: ".slider",
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            autoWidth: !1,
            viewportMax: !1,
            slideBy: 1,
            center: !1,
            controls: !0,
            controlsPosition: "top",
            controlsText: ["prev", "next"],
            controlsContainer: !1,
            prevButton: !1,
            nextButton: !1,
            nav: !0,
            navPosition: "top",
            navContainer: !1,
            navAsThumbnails: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayPosition: "top",
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            autoplayButtonOutput: !0,
            autoplayResetOnVisibility: !0,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: !1,
            loop: !0,
            rewind: !1,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            lazyloadSelector: ".tns-lazy-img",
            touch: !0,
            mouseDrag: !1,
            swipeAngle: 15,
            nested: !1,
            preventActionWhenRunning: !1,
            preventScrollOnTouch: !1,
            freezable: !0,
            onInit: !1,
            useLocalStorage: !0,
            nonce: !1
        }, H || {});
        var O = document
          , m = window
          , a = {
            ENTER: 13,
            SPACE: 32,
            LEFT: 37,
            RIGHT: 39
        }
          , e = {}
          , n = H.useLocalStorage;
        if (n) {
            var t = navigator.userAgent
              , i = new Date;
            try {
                (e = m.localStorage) ? (e.setItem(i, i),
                n = e.getItem(i) == i,
                e.removeItem(i)) : n = !1,
                n || (e = {})
            } catch (t) {
                n = !1
            }
            n && (e.tnsApp && e.tnsApp !== t && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) {
                e.removeItem(t)
            }),
            localStorage.tnsApp = t)
        }
        var y = e.tC ? Bi(e.tC) : Si(e, "tC", function() {
            var t = document
              , e = Hi()
              , n = Oi(e)
              , i = t.createElement("div")
              , a = !1;
            e.appendChild(i);
            try {
                for (var r, o = "(10px * 10)", u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], l = 0; l < 3; l++)
                    if (r = u[l],
                    i.style.width = r,
                    100 === i.offsetWidth) {
                        a = r.replace(o, "");
                        break
                    }
            } catch (t) {}
            return e.fake ? Di(e, n) : i.remove(),
            a
        }(), n)
          , g = e.tPL ? Bi(e.tPL) : Si(e, "tPL", function() {
            var t, e = document, n = Hi(), i = Oi(n), a = e.createElement("div"), r = e.createElement("div"), o = "";
            a.className = "tns-t-subp2",
            r.className = "tns-t-ct";
            for (var u = 0; u < 70; u++)
                o += "<div></div>";
            return r.innerHTML = o,
            a.appendChild(r),
            n.appendChild(a),
            t = Math.abs(a.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2,
            n.fake ? Di(n, i) : a.remove(),
            t
        }(), n)
          , D = e.tMQ ? Bi(e.tMQ) : Si(e, "tMQ", function() {
            if (window.matchMedia || window.msMatchMedia)
                return !0;
            var t, e = document, n = Hi(), i = Oi(n), a = e.createElement("div"), r = e.createElement("style"), o = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
            return r.type = "text/css",
            a.className = "tns-mq-test",
            n.appendChild(r),
            n.appendChild(a),
            r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(e.createTextNode(o)),
            t = window.getComputedStyle ? window.getComputedStyle(a).position : a.currentStyle.position,
            n.fake ? Di(n, i) : a.remove(),
            "absolute" === t
        }(), n)
          , r = e.tTf ? Bi(e.tTf) : Si(e, "tTf", Ki("transform"), n)
          , o = e.t3D ? Bi(e.t3D) : Si(e, "t3D", function(t) {
            if (!t)
                return !1;
            if (!window.getComputedStyle)
                return !1;
            var e, n = document, i = Hi(), a = Oi(i), r = n.createElement("p"), o = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
            return o += "transform",
            i.insertBefore(r, null),
            r.style[t] = "translate3d(1px,1px,1px)",
            e = window.getComputedStyle(r).getPropertyValue(o),
            i.fake ? Di(i, a) : r.remove(),
            void 0 !== e && 0 < e.length && "none" !== e
        }(r), n)
          , x = e.tTDu ? Bi(e.tTDu) : Si(e, "tTDu", Ki("transitionDuration"), n)
          , u = e.tTDe ? Bi(e.tTDe) : Si(e, "tTDe", Ki("transitionDelay"), n)
          , b = e.tADu ? Bi(e.tADu) : Si(e, "tADu", Ki("animationDuration"), n)
          , l = e.tADe ? Bi(e.tADe) : Si(e, "tADe", Ki("animationDelay"), n)
          , s = e.tTE ? Bi(e.tTE) : Si(e, "tTE", Ji(x, "Transition"), n)
          , c = e.tAE ? Bi(e.tAE) : Si(e, "tAE", Ji(b, "Animation"), n)
          , f = m.console && "function" == typeof m.console.warn
          , d = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"]
          , v = {};
        if (d.forEach(function(t) {
            if ("string" == typeof H[t]) {
                var e = H[t]
                  , n = O.querySelector(e);
                if (v[t] = e,
                !n || !n.nodeName)
                    return void (f && console.warn("Can't find", H[t]));
                H[t] = n
            }
        }),
        !(H.container.children.length < 1)) {
            var k = H.responsive
              , R = H.nested
              , I = "carousel" === H.mode;
            if (k) {
                0 in k && (H = Li(H, k[0]),
                delete k[0]);
                var p = {};
                for (var h in k) {
                    var w = k[h];
                    w = "number" == typeof w ? {
                        items: w
                    } : w,
                    p[h] = w
                }
                k = p,
                p = null
            }
            if (I || function t(e) {
                for (var n in e)
                    I || ("slideBy" === n && (e[n] = "page"),
                    "edgePadding" === n && (e[n] = !1),
                    "autoHeight" === n && (e[n] = !1)),
                    "responsive" === n && t(e[n])
            }(H),
            !I) {
                H.axis = "horizontal",
                H.slideBy = "page",
                H.edgePadding = !1;
                var P = H.animateIn
                  , z = H.animateOut
                  , C = H.animateDelay
                  , W = H.animateNormal
            }
            var M, q, F = "horizontal" === H.axis, T = O.createElement("div"), j = O.createElement("div"), V = H.container, E = V.parentNode, A = V.outerHTML, G = V.children, Q = G.length, X = rn(), Y = !1;
            k && En(),
            I && (V.className += " tns-vpfix");
            var N, L, B, S, K, J, U, _, Z, $ = H.autoWidth, tt = sn("fixedWidth"), et = sn("edgePadding"), nt = sn("gutter"), it = un(), at = sn("center"), rt = $ ? 1 : Math.floor(sn("items")), ot = sn("slideBy"), ut = H.viewportMax || H.fixedWidthViewportWidth, lt = sn("arrowKeys"), st = sn("speed"), ct = H.rewind, ft = !ct && H.loop, dt = sn("autoHeight"), vt = sn("controls"), pt = sn("controlsText"), ht = sn("nav"), mt = sn("touch"), yt = sn("mouseDrag"), gt = sn("autoplay"), xt = sn("autoplayTimeout"), bt = sn("autoplayText"), wt = sn("autoplayHoverPause"), Ct = sn("autoplayResetOnVisibility"), Mt = (U = null,
            _ = sn("nonce"),
            Z = document.createElement("style"),
            U && Z.setAttribute("media", U),
            _ && Z.setAttribute("nonce", _),
            document.querySelector("head").appendChild(Z),
            Z.sheet ? Z.sheet : Z.styleSheet), Tt = H.lazyload, Et = H.lazyloadSelector, At = [], Nt = ft ? (K = function() {
                {
                    if ($ || tt && !ut)
                        return Q - 1;
                    var t = tt ? "fixedWidth" : "items"
                      , e = [];
                    if ((tt || H[t] < Q) && e.push(H[t]),
                    k)
                        for (var n in k) {
                            var i = k[n][t];
                            i && (tt || i < Q) && e.push(i)
                        }
                    return e.length || e.push(0),
                    Math.ceil(tt ? ut / Math.min.apply(null, e) : Math.max.apply(null, e))
                }
            }(),
            J = I ? Math.ceil((5 * K - Q) / 2) : 4 * K - Q,
            J = Math.max(K, J),
            ln("edgePadding") ? J + 1 : J) : 0, Lt = I ? Q + 2 * Nt : Q + Nt, Bt = !(!tt && !$ || ft), St = tt ? _n() : null, Ht = !I || !ft, Ot = F ? "left" : "top", Dt = "", kt = "", Rt = tt ? function() {
                return at && !ft ? Q - 1 : Math.ceil(-St / (tt + nt))
            }
            : $ ? function() {
                for (var t = 0; t < Lt; t++)
                    if (N[t] >= -St)
                        return t
            }
            : function() {
                return at && I && !ft ? Q - 1 : ft || I ? Math.max(0, Lt - Math.ceil(rt)) : Lt - 1
            }
            , It = en(sn("startIndex")), Pt = It, zt = (tn(),
            0), Wt = $ ? null : Rt(), qt = H.preventActionWhenRunning, Ft = H.swipeAngle, jt = !Ft || "?", Vt = !1, Gt = H.onInit, Qt = new Zi, Xt = " tns-slider tns-" + H.mode, Yt = V.id || (S = window.tnsId,
            window.tnsId = S ? S + 1 : 1,
            "tns" + window.tnsId), Kt = sn("disable"), Jt = !1, Ut = H.freezable, _t = !(!Ut || $) && Tn(), Zt = !1, $t = {
                click: oi,
                keydown: function(t) {
                    t = pi(t);
                    var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                    0 <= e && (0 === e ? we.disabled || oi(t, -1) : Ce.disabled || oi(t, 1))
                }
            }, te = {
                click: function(t) {
                    if (Vt) {
                        if (qt)
                            return;
                        ai()
                    }
                    var e = hi(t = pi(t));
                    for (; e !== Ae && !qi(e, "data-nav"); )
                        e = e.parentNode;
                    if (qi(e, "data-nav")) {
                        var n = Se = Number(Fi(e, "data-nav"))
                          , i = tt || $ ? n * Q / Le : n * rt
                          , a = le ? n : Math.min(Math.ceil(i), Q - 1);
                        ri(a, t),
                        He === n && (Pe && fi(),
                        Se = -1)
                    }
                },
                keydown: function(t) {
                    t = pi(t);
                    var e = O.activeElement;
                    if (!qi(e, "data-nav"))
                        return;
                    var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode)
                      , i = Number(Fi(e, "data-nav"));
                    0 <= n && (0 === n ? 0 < i && vi(Ee[i - 1]) : 1 === n ? i < Le - 1 && vi(Ee[i + 1]) : ri(Se = i, t))
                }
            }, ee = {
                mouseover: function() {
                    Pe && (li(),
                    ze = !0)
                },
                mouseout: function() {
                    ze && (ui(),
                    ze = !1)
                }
            }, ne = {
                visibilitychange: function() {
                    O.hidden ? Pe && (li(),
                    qe = !0) : qe && (ui(),
                    qe = !1)
                }
            }, ie = {
                keydown: function(t) {
                    t = pi(t);
                    var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                    0 <= e && oi(t, 0 === e ? -1 : 1)
                }
            }, ae = {
                touchstart: xi,
                touchmove: bi,
                touchend: wi,
                touchcancel: wi
            }, re = {
                mousedown: xi,
                mousemove: bi,
                mouseup: wi,
                mouseleave: wi
            }, oe = ln("controls"), ue = ln("nav"), le = !!$ || H.navAsThumbnails, se = ln("autoplay"), ce = ln("touch"), fe = ln("mouseDrag"), de = "tns-slide-active", ve = "tns-slide-cloned", pe = "tns-complete", he = {
                load: function(t) {
                    kn(hi(t))
                },
                error: function(t) {
                    e = hi(t),
                    zi(e, "failed"),
                    Rn(e);
                    var e
                }
            }, me = "force" === H.preventScrollOnTouch;
            if (oe)
                var ye, ge, xe = H.controlsContainer, be = H.controlsContainer ? H.controlsContainer.outerHTML : "", we = H.prevButton, Ce = H.nextButton, Me = H.prevButton ? H.prevButton.outerHTML : "", Te = H.nextButton ? H.nextButton.outerHTML : "";
            if (ue)
                var Ee, Ae = H.navContainer, Ne = H.navContainer ? H.navContainer.outerHTML : "", Le = $ ? Q : Mi(), Be = 0, Se = -1, He = an(), Oe = He, De = "tns-nav-active", ke = "Carousel Page ", Re = " (Current Slide)";
            if (se)
                var Ie, Pe, ze, We, qe, Fe = "forward" === H.autoplayDirection ? 1 : -1, je = H.autoplayButton, Ve = H.autoplayButton ? H.autoplayButton.outerHTML : "", Ge = ["<span class='tns-visually-hidden'>", " animation</span>"];
            if (ce || fe)
                var Qe, Xe, Ye = {}, Ke = {}, Je = !1, Ue = F ? function(t, e) {
                    return t.x - e.x
                }
                : function(t, e) {
                    return t.y - e.y
                }
                ;
            $ || $e(Kt || _t),
            r && (Ot = r,
            Dt = "translate",
            o ? (Dt += F ? "3d(" : "3d(0px, ",
            kt = F ? ", 0px, 0px)" : ", 0px)") : (Dt += F ? "X(" : "Y(",
            kt = ")")),
            I && (V.className = V.className.replace("tns-vpfix", "")),
            function() {
                ln("gutter");
                T.className = "tns-outer",
                j.className = "tns-inner",
                T.id = Yt + "-ow",
                j.id = Yt + "-iw",
                "" === V.id && (V.id = Yt);
                Xt += g || $ ? " tns-subpixel" : " tns-no-subpixel",
                Xt += y ? " tns-calc" : " tns-no-calc",
                $ && (Xt += " tns-autowidth");
                Xt += " tns-" + H.axis,
                V.className += Xt,
                I ? ((M = O.createElement("div")).id = Yt + "-mw",
                M.className = "tns-ovh",
                T.appendChild(M),
                M.appendChild(j)) : T.appendChild(j);
                if (dt) {
                    var t = M || j;
                    t.className += " tns-ah"
                }
                if (E.insertBefore(T, V),
                j.appendChild(V),
                Ii(G, function(t, e) {
                    zi(t, "tns-item"),
                    t.id || (t.id = Yt + "-item" + e),
                    !I && W && zi(t, W),
                    ji(t, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    })
                }),
                Nt) {
                    for (var e = O.createDocumentFragment(), n = O.createDocumentFragment(), i = Nt; i--; ) {
                        var a = i % Q
                          , r = G[a].cloneNode(!0);
                        if (zi(r, ve),
                        Vi(r, "id"),
                        n.insertBefore(r, n.firstChild),
                        I) {
                            var o = G[Q - 1 - a].cloneNode(!0);
                            zi(o, ve),
                            Vi(o, "id"),
                            e.appendChild(o)
                        }
                    }
                    V.insertBefore(e, V.firstChild),
                    V.appendChild(n),
                    G = V.children
                }
            }(),
            function() {
                if (!I)
                    for (var t = It, e = It + Math.min(Q, rt); t < e; t++) {
                        var n = G[t];
                        n.style.left = 100 * (t - It) / rt + "%",
                        zi(n, P),
                        Wi(n, W)
                    }
                F && (g || $ ? (ki(Mt, "#" + Yt + " > .tns-item", "font-size:" + m.getComputedStyle(G[0]).fontSize + ";", Ri(Mt)),
                ki(Mt, "#" + Yt, "font-size:0;", Ri(Mt))) : I && Ii(G, function(t, e) {
                    var n;
                    t.style.marginLeft = (n = e,
                    y ? y + "(" + 100 * n + "% / " + Lt + ")" : 100 * n / Lt + "%")
                }));
                if (D) {
                    if (x) {
                        var i = M && H.autoHeight ? hn(H.speed) : "";
                        ki(Mt, "#" + Yt + "-mw", i, Ri(Mt))
                    }
                    i = cn(H.edgePadding, H.gutter, H.fixedWidth, H.speed, H.autoHeight),
                    ki(Mt, "#" + Yt + "-iw", i, Ri(Mt)),
                    I && (i = F && !$ ? "width:" + fn(H.fixedWidth, H.gutter, H.items) + ";" : "",
                    x && (i += hn(st)),
                    ki(Mt, "#" + Yt, i, Ri(Mt))),
                    i = F && !$ ? dn(H.fixedWidth, H.gutter, H.items) : "",
                    H.gutter && (i += vn(H.gutter)),
                    I || (x && (i += hn(st)),
                    b && (i += mn(st))),
                    i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt))
                } else {
                    I && dt && (M.style[x] = st / 1e3 + "s"),
                    j.style.cssText = cn(et, nt, tt, dt),
                    I && F && !$ && (V.style.width = fn(tt, nt, rt));
                    var i = F && !$ ? dn(tt, nt, rt) : "";
                    nt && (i += vn(nt)),
                    i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt))
                }
                if (k && D)
                    for (var a in k) {
                        a = parseInt(a);
                        var r = k[a]
                          , i = ""
                          , o = ""
                          , u = ""
                          , l = ""
                          , s = ""
                          , c = $ ? null : sn("items", a)
                          , f = sn("fixedWidth", a)
                          , d = sn("speed", a)
                          , v = sn("edgePadding", a)
                          , p = sn("autoHeight", a)
                          , h = sn("gutter", a);
                        x && M && sn("autoHeight", a) && "speed"in r && (o = "#" + Yt + "-mw{" + hn(d) + "}"),
                        ("edgePadding"in r || "gutter"in r) && (u = "#" + Yt + "-iw{" + cn(v, h, f, d, p) + "}"),
                        I && F && !$ && ("fixedWidth"in r || "items"in r || tt && "gutter"in r) && (l = "width:" + fn(f, h, c) + ";"),
                        x && "speed"in r && (l += hn(d)),
                        l && (l = "#" + Yt + "{" + l + "}"),
                        ("fixedWidth"in r || tt && "gutter"in r || !I && "items"in r) && (s += dn(f, h, c)),
                        "gutter"in r && (s += vn(h)),
                        !I && "speed"in r && (x && (s += hn(d)),
                        b && (s += mn(d))),
                        s && (s = "#" + Yt + " > .tns-item{" + s + "}"),
                        (i = o + u + l + s) && Mt.insertRule("@media (min-width: " + a / 16 + "em) {" + i + "}", Mt.cssRules.length)
                    }
            }(),
            yn();
            var _e = ft ? I ? function() {
                var t = zt
                  , e = Wt;
                t += ot,
                e -= ot,
                et ? (t += 1,
                e -= 1) : tt && (it + nt) % (tt + nt) && (e -= 1),
                Nt && (e < It ? It -= Q : It < t && (It += Q))
            }
            : function() {
                if (Wt < It)
                    for (; zt + Q <= It; )
                        It -= Q;
                else if (It < zt)
                    for (; It <= Wt - Q; )
                        It += Q
            }
            : function() {
                It = Math.max(zt, Math.min(Wt, It))
            }
              , Ze = I ? function() {
                var e, n, i, a, t, r, o, u, l, s, c;
                Jn(V, ""),
                x || !st ? (ti(),
                st && Yi(V) || ai()) : (e = V,
                n = Ot,
                i = Dt,
                a = kt,
                t = Zn(),
                r = st,
                o = ai,
                u = Math.min(r, 10),
                l = 0 <= t.indexOf("%") ? "%" : "px",
                t = t.replace(l, ""),
                s = Number(e.style[n].replace(i, "").replace(a, "").replace(l, "")),
                c = (t - s) / r * u,
                setTimeout(function t() {
                    r -= u,
                    s += c,
                    e.style[n] = i + s + l + a,
                    0 < r ? setTimeout(t, u) : o()
                }, u)),
                F || Ci()
            }
            : function() {
                At = [];
                var t = {};
                t[s] = t[c] = ai,
                _i(G[Pt], t),
                Ui(G[It], t),
                ei(Pt, P, z, !0),
                ei(It, W, P),
                s && c && st && Yi(V) || ai()
            }
            ;
            return {
                version: "2.9.4",
                getInfo: Ei,
                events: Qt,
                goTo: ri,
                play: function() {
                    gt && !Pe && (ci(),
                    We = !1)
                },
                pause: function() {
                    Pe && (fi(),
                    We = !0)
                },
                isOn: Y,
                updateSliderHeight: Fn,
                refresh: yn,
                destroy: function() {
                    if (Mt.disabled = !0,
                    Mt.ownerNode && Mt.ownerNode.remove(),
                    _i(m, {
                        resize: Cn
                    }),
                    lt && _i(O, ie),
                    xe && _i(xe, $t),
                    Ae && _i(Ae, te),
                    _i(V, ee),
                    _i(V, ne),
                    je && _i(je, {
                        click: di
                    }),
                    gt && clearInterval(Ie),
                    I && s) {
                        var t = {};
                        t[s] = ai,
                        _i(V, t)
                    }
                    mt && _i(V, ae),
                    yt && _i(V, re);
                    var r = [A, be, Me, Te, Ne, Ve];
                    for (var e in d.forEach(function(t, e) {
                        var n = "container" === t ? T : H[t];
                        if ("object" == typeof n && n) {
                            var i = !!n.previousElementSibling && n.previousElementSibling
                              , a = n.parentNode;
                            n.outerHTML = r[e],
                            H[t] = i ? i.nextElementSibling : a.firstElementChild
                        }
                    }),
                    d = P = z = C = W = F = T = j = V = E = A = G = Q = q = X = $ = tt = et = nt = it = rt = ot = ut = lt = st = ct = ft = dt = Mt = Tt = N = At = Nt = Lt = Bt = St = Ht = Ot = Dt = kt = Rt = It = Pt = zt = Wt = Ft = jt = Vt = Gt = Qt = Xt = Yt = Kt = Jt = Ut = _t = Zt = $t = te = ee = ne = ie = ae = re = oe = ue = le = se = ce = fe = de = pe = he = L = vt = pt = xe = be = we = Ce = ye = ge = ht = Ae = Ne = Ee = Le = Be = Se = He = Oe = De = ke = Re = gt = xt = Fe = bt = wt = je = Ve = Ct = Ge = Ie = Pe = ze = We = qe = Ye = Ke = Qe = Je = Xe = Ue = mt = yt = null,
                    this)
                        "rebuild" !== e && (this[e] = null);
                    Y = !1
                },
                rebuild: function() {
                    return $i(Li(H, v))
                }
            }
        }
        function $e(t) {
            t && (vt = ht = mt = yt = lt = gt = wt = Ct = !1)
        }
        function tn() {
            for (var t = I ? It - Nt : It; t < 0; )
                t += Q;
            return t % Q + 1
        }
        function en(t) {
            return t = t ? Math.max(0, Math.min(ft ? Q - 1 : Q - rt, t)) : 0,
            I ? t + Nt : t
        }
        function nn(t) {
            for (null == t && (t = It),
            I && (t -= Nt); t < 0; )
                t += Q;
            return Math.floor(t % Q)
        }
        function an() {
            var t, e = nn();
            return t = le ? e : tt || $ ? Math.ceil((e + 1) * Le / Q - 1) : Math.floor(e / rt),
            !ft && I && It === Wt && (t = Le - 1),
            t
        }
        function rn() {
            return m.innerWidth || O.documentElement.clientWidth || O.body.clientWidth
        }
        function on(t) {
            return "top" === t ? "afterbegin" : "beforeend"
        }
        function un() {
            var t = et ? 2 * et - nt : 0;
            return function t(e) {
                if (null != e) {
                    var n, i, a = O.createElement("div");
                    return e.appendChild(a),
                    i = (n = a.getBoundingClientRect()).right - n.left,
                    a.remove(),
                    i || t(e.parentNode)
                }
            }(E) - t
        }
        function ln(t) {
            if (H[t])
                return !0;
            if (k)
                for (var e in k)
                    if (k[e][t])
                        return !0;
            return !1
        }
        function sn(t, e) {
            if (null == e && (e = X),
            "items" === t && tt)
                return Math.floor((it + nt) / (tt + nt)) || 1;
            var n = H[t];
            if (k)
                for (var i in k)
                    e >= parseInt(i) && t in k[i] && (n = k[i][t]);
            return "slideBy" === t && "page" === n && (n = sn("items")),
            I || "slideBy" !== t && "items" !== t || (n = Math.floor(n)),
            n
        }
        function cn(t, e, n, i, a) {
            var r = "";
            if (void 0 !== t) {
                var o = t;
                e && (o -= e),
                r = F ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;"
            } else if (e && !n) {
                var u = "-" + e + "px";
                r = "margin: 0 " + (F ? u + " 0 0" : "0 " + u + " 0") + ";"
            }
            return !I && a && x && i && (r += hn(i)),
            r
        }
        function fn(t, e, n) {
            return t ? (t + e) * Lt + "px" : y ? y + "(" + 100 * Lt + "% / " + n + ")" : 100 * Lt / n + "%"
        }
        function dn(t, e, n) {
            var i;
            if (t)
                i = t + e + "px";
            else {
                I || (n = Math.floor(n));
                var a = I ? Lt : n;
                i = y ? y + "(100% / " + a + ")" : 100 / a + "%"
            }
            return i = "width:" + i,
            "inner" !== R ? i + ";" : i + " !important;"
        }
        function vn(t) {
            var e = "";
            !1 !== t && (e = (F ? "padding-" : "margin-") + (F ? "right" : "bottom") + ": " + t + "px;");
            return e
        }
        function pn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = "-" + n + "-"),
            n
        }
        function hn(t) {
            return pn(x, 18) + "transition-duration:" + t / 1e3 + "s;"
        }
        function mn(t) {
            return pn(b, 17) + "animation-duration:" + t / 1e3 + "s;"
        }
        function yn() {
            if (ln("autoHeight") || $ || !F) {
                var t = V.querySelectorAll("img");
                Ii(t, function(t) {
                    var e = t.src;
                    Tt || (e && e.indexOf("data:image") < 0 ? (t.src = "",
                    Ui(t, he),
                    zi(t, "loading"),
                    t.src = e) : kn(t))
                }),
                Ai(function() {
                    zn(Gi(t), function() {
                        L = !0
                    })
                }),
                ln("autoHeight") && (t = In(It, Math.min(It + rt - 1, Lt - 1))),
                Tt ? gn() : Ai(function() {
                    zn(Gi(t), gn)
                })
            } else
                I && $n(),
                bn(),
                wn()
        }
        function gn() {
            if ($ && 1 < Q) {
                var i = ft ? It : Q - 1;
                !function t() {
                    var e = G[i].getBoundingClientRect().left
                      , n = G[i - 1].getBoundingClientRect().right;
                    Math.abs(e - n) <= 1 ? xn() : setTimeout(function() {
                        t()
                    }, 16)
                }()
            } else
                xn()
        }
        function xn() {
            F && !$ || (jn(),
            $ ? (St = _n(),
            Ut && (_t = Tn()),
            Wt = Rt(),
            $e(Kt || _t)) : Ci()),
            I && $n(),
            bn(),
            wn()
        }
        function bn() {
            if (Vn(),
            T.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Hn() + "</span>  of " + Q + "</div>"),
            B = T.querySelector(".tns-liveregion .current"),
            se) {
                var t = gt ? "stop" : "start";
                je ? ji(je, {
                    "data-action": t
                }) : H.autoplayButtonOutput && (T.insertAdjacentHTML(on(H.autoplayPosition), '<button type="button" data-action="' + t + '">' + Ge[0] + t + Ge[1] + bt[0] + "</button>"),
                je = T.querySelector("[data-action]")),
                je && Ui(je, {
                    click: di
                }),
                gt && (ci(),
                wt && Ui(V, ee),
                Ct && Ui(V, ne))
            }
            if (ue) {
                if (Ae)
                    ji(Ae, {
                        "aria-label": "Carousel Pagination"
                    }),
                    Ii(Ee = Ae.children, function(t, e) {
                        ji(t, {
                            "data-nav": e,
                            tabindex: "-1",
                            "aria-label": ke + (e + 1),
                            "aria-controls": Yt
                        })
                    });
                else {
                    for (var e = "", n = le ? "" : 'style="display:none"', i = 0; i < Q; i++)
                        e += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + Yt + '" ' + n + ' aria-label="' + ke + (i + 1) + '"></button>';
                    e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>",
                    T.insertAdjacentHTML(on(H.navPosition), e),
                    Ae = T.querySelector(".tns-nav"),
                    Ee = Ae.children
                }
                if (Ti(),
                x) {
                    var a = x.substring(0, x.length - 18).toLowerCase()
                      , r = "transition: all " + st / 1e3 + "s";
                    a && (r = "-" + a + "-" + r),
                    ki(Mt, "[aria-controls^=" + Yt + "-item]", r, Ri(Mt))
                }
                ji(Ee[He], {
                    "aria-label": ke + (He + 1) + Re
                }),
                Vi(Ee[He], "tabindex"),
                zi(Ee[He], De),
                Ui(Ae, te)
            }
            oe && (xe || we && Ce || (T.insertAdjacentHTML(on(H.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Yt + '">' + pt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Yt + '">' + pt[1] + "</button></div>"),
            xe = T.querySelector(".tns-controls")),
            we && Ce || (we = xe.children[0],
            Ce = xe.children[1]),
            H.controlsContainer && ji(xe, {
                "aria-label": "Carousel Navigation",
                tabindex: "0"
            }),
            (H.controlsContainer || H.prevButton && H.nextButton) && ji([we, Ce], {
                "aria-controls": Yt,
                tabindex: "-1"
            }),
            (H.controlsContainer || H.prevButton && H.nextButton) && (ji(we, {
                "data-controls": "prev"
            }),
            ji(Ce, {
                "data-controls": "next"
            })),
            ye = Qn(we),
            ge = Qn(Ce),
            Kn(),
            xe ? Ui(xe, $t) : (Ui(we, $t),
            Ui(Ce, $t))),
            An()
        }
        function wn() {
            if (I && s) {
                var t = {};
                t[s] = ai,
                Ui(V, t)
            }
            mt && Ui(V, ae, H.preventScrollOnTouch),
            yt && Ui(V, re),
            lt && Ui(O, ie),
            "inner" === R ? Qt.on("outerResized", function() {
                Mn(),
                Qt.emit("innerLoaded", Ei())
            }) : (k || tt || $ || dt || !F) && Ui(m, {
                resize: Cn
            }),
            dt && ("outer" === R ? Qt.on("innerLoaded", Pn) : Kt || Pn()),
            Dn(),
            Kt ? Bn() : _t && Ln(),
            Qt.on("indexChanged", Wn),
            "inner" === R && Qt.emit("innerLoaded", Ei()),
            "function" == typeof Gt && Gt(Ei()),
            Y = !0
        }
        function Cn(t) {
            Ai(function() {
                Mn(pi(t))
            })
        }
        function Mn(t) {
            if (Y) {
                "outer" === R && Qt.emit("outerResized", Ei(t)),
                X = rn();
                var e, n = q, i = !1;
                k && (En(),
                (e = n !== q) && Qt.emit("newBreakpointStart", Ei(t)));
                var a, r, o, u, l = rt, s = Kt, c = _t, f = lt, d = vt, v = ht, p = mt, h = yt, m = gt, y = wt, g = Ct, x = It;
                if (e) {
                    var b = tt
                      , w = dt
                      , C = pt
                      , M = at
                      , T = bt;
                    if (!D)
                        var E = nt
                          , A = et
                }
                if (lt = sn("arrowKeys"),
                vt = sn("controls"),
                ht = sn("nav"),
                mt = sn("touch"),
                at = sn("center"),
                yt = sn("mouseDrag"),
                gt = sn("autoplay"),
                wt = sn("autoplayHoverPause"),
                Ct = sn("autoplayResetOnVisibility"),
                e && (Kt = sn("disable"),
                tt = sn("fixedWidth"),
                st = sn("speed"),
                dt = sn("autoHeight"),
                pt = sn("controlsText"),
                bt = sn("autoplayText"),
                xt = sn("autoplayTimeout"),
                D || (et = sn("edgePadding"),
                nt = sn("gutter"))),
                $e(Kt),
                it = un(),
                F && !$ || Kt || (jn(),
                F || (Ci(),
                i = !0)),
                (tt || $) && (St = _n(),
                Wt = Rt()),
                (e || tt) && (rt = sn("items"),
                ot = sn("slideBy"),
                (r = rt !== l) && (tt || $ || (Wt = Rt()),
                _e())),
                e && Kt !== s && (Kt ? Bn() : function() {
                    if (!Jt)
                        return;
                    if (Mt.disabled = !1,
                    V.className += Xt,
                    $n(),
                    ft)
                        for (var t = Nt; t--; )
                            I && Xi(G[t]),
                            Xi(G[Lt - t - 1]);
                    if (!I)
                        for (var e = It, n = It + Q; e < n; e++) {
                            var i = G[e]
                              , a = e < It + rt ? P : W;
                            i.style.left = 100 * (e - It) / rt + "%",
                            zi(i, a)
                        }
                    Nn(),
                    Jt = !1
                }()),
                Ut && (e || tt || $) && (_t = Tn()) !== c && (_t ? (ti(Zn(en(0))),
                Ln()) : (!function() {
                    if (!Zt)
                        return;
                    et && D && (j.style.margin = "");
                    if (Nt)
                        for (var t = "tns-transparent", e = Nt; e--; )
                            I && Wi(G[e], t),
                            Wi(G[Lt - e - 1], t);
                    Nn(),
                    Zt = !1
                }(),
                i = !0)),
                $e(Kt || _t),
                gt || (wt = Ct = !1),
                lt !== f && (lt ? Ui(O, ie) : _i(O, ie)),
                vt !== d && (vt ? xe ? Xi(xe) : (we && Xi(we),
                Ce && Xi(Ce)) : xe ? Qi(xe) : (we && Qi(we),
                Ce && Qi(Ce))),
                ht !== v && (ht ? (Xi(Ae),
                Ti()) : Qi(Ae)),
                mt !== p && (mt ? Ui(V, ae, H.preventScrollOnTouch) : _i(V, ae)),
                yt !== h && (yt ? Ui(V, re) : _i(V, re)),
                gt !== m && (gt ? (je && Xi(je),
                Pe || We || ci()) : (je && Qi(je),
                Pe && fi())),
                wt !== y && (wt ? Ui(V, ee) : _i(V, ee)),
                Ct !== g && (Ct ? Ui(O, ne) : _i(O, ne)),
                e) {
                    if (tt === b && at === M || (i = !0),
                    dt !== w && (dt || (j.style.height = "")),
                    vt && pt !== C && (we.innerHTML = pt[0],
                    Ce.innerHTML = pt[1]),
                    je && bt !== T) {
                        var N = gt ? 1 : 0
                          , L = je.innerHTML
                          , B = L.length - T[N].length;
                        L.substring(B) === T[N] && (je.innerHTML = L.substring(0, B) + bt[N])
                    }
                } else
                    at && (tt || $) && (i = !0);
                if ((r || tt && !$) && (Le = Mi(),
                Ti()),
                (a = It !== x) ? (Qt.emit("indexChanged", Ei()),
                i = !0) : r ? a || Wn() : (tt || $) && (Dn(),
                Vn(),
                Sn()),
                r && !I && function() {
                    for (var t = It + Math.min(Q, rt), e = Lt; e--; ) {
                        var n = G[e];
                        It <= e && e < t ? (zi(n, "tns-moving"),
                        n.style.left = 100 * (e - It) / rt + "%",
                        zi(n, P),
                        Wi(n, W)) : n.style.left && (n.style.left = "",
                        zi(n, W),
                        Wi(n, P)),
                        Wi(n, z)
                    }
                    setTimeout(function() {
                        Ii(G, function(t) {
                            Wi(t, "tns-moving")
                        })
                    }, 300)
                }(),
                !Kt && !_t) {
                    if (e && !D && (et === A && nt === E || (j.style.cssText = cn(et, nt, tt, st, dt)),
                    F)) {
                        I && (V.style.width = fn(tt, nt, rt));
                        var S = dn(tt, nt, rt) + vn(nt);
                        u = Ri(o = Mt) - 1,
                        "deleteRule"in o ? o.deleteRule(u) : o.removeRule(u),
                        ki(Mt, "#" + Yt + " > .tns-item", S, Ri(Mt))
                    }
                    dt && Pn(),
                    i && ($n(),
                    Pt = It)
                }
                e && Qt.emit("newBreakpointEnd", Ei(t))
            }
        }
        function Tn() {
            if (!tt && !$)
                return Q <= (at ? rt - (rt - 1) / 2 : rt);
            var t = tt ? (tt + nt) * Q : N[Q]
              , e = et ? it + 2 * et : it + nt;
            return at && (e -= tt ? (it - tt) / 2 : (it - (N[It + 1] - N[It] - nt)) / 2),
            t <= e
        }
        function En() {
            for (var t in q = 0,
            k)
                (t = parseInt(t)) <= X && (q = t)
        }
        function An() {
            !gt && je && Qi(je),
            !ht && Ae && Qi(Ae),
            vt || (xe ? Qi(xe) : (we && Qi(we),
            Ce && Qi(Ce)))
        }
        function Nn() {
            gt && je && Xi(je),
            ht && Ae && Xi(Ae),
            vt && (xe ? Xi(xe) : (we && Xi(we),
            Ce && Xi(Ce)))
        }
        function Ln() {
            if (!Zt) {
                if (et && (j.style.margin = "0px"),
                Nt)
                    for (var t = "tns-transparent", e = Nt; e--; )
                        I && zi(G[e], t),
                        zi(G[Lt - e - 1], t);
                An(),
                Zt = !0
            }
        }
        function Bn() {
            if (!Jt) {
                if (Mt.disabled = !0,
                V.className = V.className.replace(Xt.substring(1), ""),
                Vi(V, ["style"]),
                ft)
                    for (var t = Nt; t--; )
                        I && Qi(G[t]),
                        Qi(G[Lt - t - 1]);
                if (F && I || Vi(j, ["style"]),
                !I)
                    for (var e = It, n = It + Q; e < n; e++) {
                        var i = G[e];
                        Vi(i, ["style"]),
                        Wi(i, P),
                        Wi(i, W)
                    }
                An(),
                Jt = !0
            }
        }
        function Sn() {
            var t = Hn();
            B.innerHTML !== t && (B.innerHTML = t)
        }
        function Hn() {
            var t = On()
              , e = t[0] + 1
              , n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n
        }
        function On(t) {
            null == t && (t = Zn());
            var n, i, a, r = It;
            if (at || et ? ($ || tt) && (i = -(parseFloat(t) + et),
            a = i + it + 2 * et) : $ && (i = N[It],
            a = i + it),
            $)
                N.forEach(function(t, e) {
                    e < Lt && ((at || et) && t <= i + .5 && (r = e),
                    .5 <= a - t && (n = e))
                });
            else {
                if (tt) {
                    var e = tt + nt;
                    at || et ? (r = Math.floor(i / e),
                    n = Math.ceil(a / e - 1)) : n = r + Math.ceil(it / e) - 1
                } else if (at || et) {
                    var o = rt - 1;
                    if (at ? (r -= o / 2,
                    n = It + o / 2) : n = It + o,
                    et) {
                        var u = et * rt / it;
                        r -= u,
                        n += u
                    }
                    r = Math.floor(r),
                    n = Math.ceil(n)
                } else
                    n = r + rt - 1;
                r = Math.max(r, 0),
                n = Math.min(n, Lt - 1)
            }
            return [r, n]
        }
        function Dn() {
            if (Tt && !Kt) {
                var t = On();
                t.push(Et),
                In.apply(null, t).forEach(function(t) {
                    if (!Pi(t, pe)) {
                        var e = {};
                        e[s] = function(t) {
                            t.stopPropagation()
                        }
                        ,
                        Ui(t, e),
                        Ui(t, he),
                        t.src = Fi(t, "data-src");
                        var n = Fi(t, "data-srcset");
                        n && (t.srcset = n),
                        zi(t, "loading")
                    }
                })
            }
        }
        function kn(t) {
            zi(t, "loaded"),
            Rn(t)
        }
        function Rn(t) {
            zi(t, pe),
            Wi(t, "loading"),
            _i(t, he)
        }
        function In(t, e, n) {
            var i = [];
            for (n || (n = "img"); t <= e; )
                Ii(G[t].querySelectorAll(n), function(t) {
                    i.push(t)
                }),
                t++;
            return i
        }
        function Pn() {
            var t = In.apply(null, On());
            Ai(function() {
                zn(t, Fn)
            })
        }
        function zn(n, t) {
            return L ? t() : (n.forEach(function(t, e) {
                !Tt && t.complete && Rn(t),
                Pi(t, pe) && n.splice(e, 1)
            }),
            n.length ? void Ai(function() {
                zn(n, t)
            }) : t())
        }
        function Wn() {
            Dn(),
            Vn(),
            Sn(),
            Kn(),
            function() {
                if (ht && (He = 0 <= Se ? Se : an(),
                Se = -1,
                He !== Oe)) {
                    var t = Ee[Oe]
                      , e = Ee[He];
                    ji(t, {
                        tabindex: "-1",
                        "aria-label": ke + (Oe + 1)
                    }),
                    Wi(t, De),
                    ji(e, {
                        "aria-label": ke + (He + 1) + Re
                    }),
                    Vi(e, "tabindex"),
                    zi(e, De),
                    Oe = He
                }
            }()
        }
        function qn(t, e) {
            for (var n = [], i = t, a = Math.min(t + e, Lt); i < a; i++)
                n.push(G[i].offsetHeight);
            return Math.max.apply(null, n)
        }
        function Fn() {
            var t = dt ? qn(It, rt) : qn(Nt, Q)
              , e = M || j;
            e.style.height !== t && (e.style.height = t + "px")
        }
        function jn() {
            N = [0];
            var n = F ? "left" : "top"
              , i = F ? "right" : "bottom"
              , a = G[0].getBoundingClientRect()[n];
            Ii(G, function(t, e) {
                e && N.push(t.getBoundingClientRect()[n] - a),
                e === Lt - 1 && N.push(t.getBoundingClientRect()[i] - a)
            })
        }
        function Vn() {
            var t = On()
              , n = t[0]
              , i = t[1];
            Ii(G, function(t, e) {
                n <= e && e <= i ? qi(t, "aria-hidden") && (Vi(t, ["aria-hidden", "tabindex"]),
                zi(t, de)) : qi(t, "aria-hidden") || (ji(t, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                }),
                Wi(t, de))
            })
        }
        function Gn(t) {
            return t.nodeName.toLowerCase()
        }
        function Qn(t) {
            return "button" === Gn(t)
        }
        function Xn(t) {
            return "true" === t.getAttribute("aria-disabled")
        }
        function Yn(t, e, n) {
            t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
        }
        function Kn() {
            if (vt && !ct && !ft) {
                var t = ye ? we.disabled : Xn(we)
                  , e = ge ? Ce.disabled : Xn(Ce)
                  , n = It <= zt
                  , i = !ct && Wt <= It;
                n && !t && Yn(ye, we, !0),
                !n && t && Yn(ye, we, !1),
                i && !e && Yn(ge, Ce, !0),
                !i && e && Yn(ge, Ce, !1)
            }
        }
        function Jn(t, e) {
            x && (t.style[x] = e)
        }
        function Un(t) {
            return null == t && (t = It),
            $ ? (it - (et ? nt : 0) - (N[t + 1] - N[t] - nt)) / 2 : tt ? (it - tt) / 2 : (rt - 1) / 2
        }
        function _n() {
            var t = it + (et ? nt : 0) - (tt ? (tt + nt) * Lt : N[Lt]);
            return at && !ft && (t = tt ? -(tt + nt) * (Lt - 1) - Un() : Un(Lt - 1) - N[Lt - 1]),
            0 < t && (t = 0),
            t
        }
        function Zn(t) {
            var e;
            if (null == t && (t = It),
            F && !$)
                if (tt)
                    e = -(tt + nt) * t,
                    at && (e += Un());
                else {
                    var n = r ? Lt : rt;
                    at && (t -= Un()),
                    e = 100 * -t / n
                }
            else
                e = -N[t],
                at && $ && (e += Un());
            return Bt && (e = Math.max(e, St)),
            e += !F || $ || tt ? "px" : "%"
        }
        function $n(t) {
            Jn(V, "0s"),
            ti(t)
        }
        function ti(t) {
            null == t && (t = Zn()),
            V.style[Ot] = Dt + t + kt
        }
        function ei(t, e, n, i) {
            var a = t + rt;
            ft || (a = Math.min(a, Lt));
            for (var r = t; r < a; r++) {
                var o = G[r];
                i || (o.style.left = 100 * (r - It) / rt + "%"),
                C && u && (o.style[u] = o.style[l] = C * (r - t) / 1e3 + "s"),
                Wi(o, e),
                zi(o, n),
                i && At.push(o)
            }
        }
        function ni(t, e) {
            Ht && _e(),
            (It !== Pt || e) && (Qt.emit("indexChanged", Ei()),
            Qt.emit("transitionStart", Ei()),
            dt && Pn(),
            Pe && t && 0 <= ["click", "keydown"].indexOf(t.type) && fi(),
            Vt = !0,
            Ze())
        }
        function ii(t) {
            return t.toLowerCase().replace(/-/g, "")
        }
        function ai(t) {
            if (I || Vt) {
                if (Qt.emit("transitionEnd", Ei(t)),
                !I && 0 < At.length)
                    for (var e = 0; e < At.length; e++) {
                        var n = At[e];
                        n.style.left = "",
                        l && u && (n.style[l] = "",
                        n.style[u] = ""),
                        Wi(n, z),
                        zi(n, W)
                    }
                if (!t || !I && t.target.parentNode === V || t.target === V && ii(t.propertyName) === ii(Ot)) {
                    if (!Ht) {
                        var i = It;
                        _e(),
                        It !== i && (Qt.emit("indexChanged", Ei()),
                        $n())
                    }
                    "inner" === R && Qt.emit("innerLoaded", Ei()),
                    Vt = !1,
                    Pt = It
                }
            }
        }
        function ri(t, e) {
            if (!_t)
                if ("prev" === t)
                    oi(e, -1);
                else if ("next" === t)
                    oi(e, 1);
                else {
                    if (Vt) {
                        if (qt)
                            return;
                        ai()
                    }
                    var n = nn()
                      , i = 0;
                    if ("first" === t ? i = -n : "last" === t ? i = I ? Q - rt - n : Q - 1 - n : ("number" != typeof t && (t = parseInt(t)),
                    isNaN(t) || (e || (t = Math.max(0, Math.min(Q - 1, t))),
                    i = t - n)),
                    !I && i && Math.abs(i) < rt) {
                        var a = 0 < i ? 1 : -1;
                        i += zt <= It + i - Q ? Q * a : 2 * Q * a * -1
                    }
                    It += i,
                    I && ft && (It < zt && (It += Q),
                    Wt < It && (It -= Q)),
                    nn(It) !== nn(Pt) && ni(e)
                }
        }
        function oi(t, e) {
            if (Vt) {
                if (qt)
                    return;
                ai()
            }
            var n;
            if (!e) {
                for (var i = hi(t = pi(t)); i !== xe && [we, Ce].indexOf(i) < 0; )
                    i = i.parentNode;
                var a = [we, Ce].indexOf(i);
                0 <= a && (n = !0,
                e = 0 === a ? -1 : 1)
            }
            if (ct) {
                if (It === zt && -1 === e)
                    return void ri("last", t);
                if (It === Wt && 1 === e)
                    return void ri("first", t)
            }
            e && (It += ot * e,
            $ && (It = Math.floor(It)),
            ni(n || t && "keydown" === t.type ? t : null))
        }
        function ui() {
            Ie = setInterval(function() {
                oi(null, Fe)
            }, xt),
            Pe = !0
        }
        function li() {
            clearInterval(Ie),
            Pe = !1
        }
        function si(t, e) {
            ji(je, {
                "data-action": t
            }),
            je.innerHTML = Ge[0] + t + Ge[1] + e
        }
        function ci() {
            ui(),
            je && si("stop", bt[1])
        }
        function fi() {
            li(),
            je && si("start", bt[0])
        }
        function di() {
            Pe ? (fi(),
            We = !0) : (ci(),
            We = !1)
        }
        function vi(t) {
            t.focus()
        }
        function pi(t) {
            return mi(t = t || m.event) ? t.changedTouches[0] : t
        }
        function hi(t) {
            return t.target || m.event.srcElement
        }
        function mi(t) {
            return 0 <= t.type.indexOf("touch")
        }
        function yi(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }
        function gi() {
            return a = Ke.y - Ye.y,
            r = Ke.x - Ye.x,
            t = Math.atan2(a, r) * (180 / Math.PI),
            e = Ft,
            n = !1,
            i = Math.abs(90 - Math.abs(t)),
            90 - e <= i ? n = "horizontal" : i <= e && (n = "vertical"),
            n === H.axis;
            var t, e, n, i, a, r
        }
        function xi(t) {
            if (Vt) {
                if (qt)
                    return;
                ai()
            }
            gt && Pe && li(),
            Je = !0,
            Xe && (Ni(Xe),
            Xe = null);
            var e = pi(t);
            Qt.emit(mi(t) ? "touchStart" : "dragStart", Ei(t)),
            !mi(t) && 0 <= ["img", "a"].indexOf(Gn(hi(t))) && yi(t),
            Ke.x = Ye.x = e.clientX,
            Ke.y = Ye.y = e.clientY,
            I && (Qe = parseFloat(V.style[Ot].replace(Dt, "")),
            Jn(V, "0s"))
        }
        function bi(t) {
            if (Je) {
                var e = pi(t);
                Ke.x = e.clientX,
                Ke.y = e.clientY,
                I ? Xe || (Xe = Ai(function() {
                    !function t(e) {
                        if (!jt)
                            return void (Je = !1);
                        Ni(Xe);
                        Je && (Xe = Ai(function() {
                            t(e)
                        }));
                        "?" === jt && (jt = gi());
                        if (jt) {
                            !me && mi(e) && (me = !0);
                            try {
                                e.type && Qt.emit(mi(e) ? "touchMove" : "dragMove", Ei(e))
                            } catch (t) {}
                            var n = Qe
                              , i = Ue(Ke, Ye);
                            if (!F || tt || $)
                                n += i,
                                n += "px";
                            else {
                                var a = r ? i * rt * 100 / ((it + nt) * Lt) : 100 * i / (it + nt);
                                n += a,
                                n += "%"
                            }
                            V.style[Ot] = Dt + n + kt
                        }
                    }(t)
                })) : ("?" === jt && (jt = gi()),
                jt && (me = !0)),
                ("boolean" != typeof t.cancelable || t.cancelable) && me && t.preventDefault()
            }
        }
        function wi(i) {
            if (Je) {
                Xe && (Ni(Xe),
                Xe = null),
                I && Jn(V, ""),
                Je = !1;
                var t = pi(i);
                Ke.x = t.clientX,
                Ke.y = t.clientY;
                var a = Ue(Ke, Ye);
                if (Math.abs(a)) {
                    if (!mi(i)) {
                        var n = hi(i);
                        Ui(n, {
                            click: function t(e) {
                                yi(e),
                                _i(n, {
                                    click: t
                                })
                            }
                        })
                    }
                    I ? Xe = Ai(function() {
                        if (F && !$) {
                            var t = -a * rt / (it + nt);
                            t = 0 < a ? Math.floor(t) : Math.ceil(t),
                            It += t
                        } else {
                            var e = -(Qe + a);
                            if (e <= 0)
                                It = zt;
                            else if (e >= N[Lt - 1])
                                It = Wt;
                            else
                                for (var n = 0; n < Lt && e >= N[n]; )
                                    e > N[It = n] && a < 0 && (It += 1),
                                    n++
                        }
                        ni(i, a),
                        Qt.emit(mi(i) ? "touchEnd" : "dragEnd", Ei(i))
                    }) : jt && oi(i, 0 < a ? -1 : 1)
                }
            }
            "auto" === H.preventScrollOnTouch && (me = !1),
            Ft && (jt = "?"),
            gt && !Pe && ui()
        }
        function Ci() {
            (M || j).style.height = N[It + rt] - N[It] + "px"
        }
        function Mi() {
            var t = tt ? (tt + nt) * Q / it : Q / rt;
            return Math.min(Math.ceil(t), Q)
        }
        function Ti() {
            if (ht && !le && Le !== Be) {
                var t = Be
                  , e = Le
                  , n = Xi;
                for (Le < Be && (t = Le,
                e = Be,
                n = Qi); t < e; )
                    n(Ee[t]),
                    t++;
                Be = Le
            }
        }
        function Ei(t) {
            return {
                container: V,
                slideItems: G,
                navContainer: Ae,
                navItems: Ee,
                controlsContainer: xe,
                hasControls: oe,
                prevButton: we,
                nextButton: Ce,
                items: rt,
                slideBy: ot,
                cloneCount: Nt,
                slideCount: Q,
                slideCountNew: Lt,
                index: It,
                indexCached: Pt,
                displayIndex: tn(),
                navCurrentIndex: He,
                navCurrentIndexCached: Oe,
                pages: Le,
                pagesCached: Be,
                sheet: Mt,
                isOn: Y,
                event: t || {}
            }
        }
        f && console.warn("No slides found in", H.container)
    };
    return $i
}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.counterUp = t() : e.counterUp = t()
}(self, (function() {
    return ( () => {
        "use strict";
        var e = {
            d: (t, n) => {
                for (var o in n)
                    e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: n[o]
                    })
            }
            ,
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        }
          , t = {};
        e.r(t),
        e.d(t, {
            default: () => n,
            divideNumbers: () => r
        });
        const n = (e, t={}) => {
            const {action: n="start", duration: i=1e3, delay: u=16} = t;
            if ("stop" === n)
                return void o(e);
            if (o(e),
            !/[0-9]/.test(e.innerHTML))
                return;
            const l = r(e.innerHTML, {
                duration: i || e.getAttribute("data-duration"),
                delay: u || e.getAttribute("data-delay")
            });
            e._countUpOrigInnerHTML = e.innerHTML,
            e.innerHTML = l[0] || "&nbsp;",
            e.style.visibility = "visible";
            const c = function() {
                e.innerHTML = l.shift() || "&nbsp;",
                l.length ? (clearTimeout(e.countUpTimeout),
                e.countUpTimeout = setTimeout(c, u)) : e._countUpOrigInnerHTML = void 0
            };
            e.countUpTimeout = setTimeout(c, u)
        }
          , o = e => {
            clearTimeout(e.countUpTimeout),
            e._countUpOrigInnerHTML && (e.innerHTML = e._countUpOrigInnerHTML,
            e._countUpOrigInnerHTML = void 0),
            e.style.visibility = ""
        }
          , r = (e, t={}) => {
            const {duration: n=1e3, delay: o=16} = t
              , r = n / o
              , i = e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/)
              , u = [];
            for (let e = 0; e < r; e++)
                u.push("");
            for (let e = 0; e < i.length; e++)
                if (/([0-9.][,.0-9]*[0-9]*)/.test(i[e]) && !/<[^>]+>/.test(i[e])) {
                    let t = i[e];
                    const n = [...t.matchAll(/[.,]/g)].map((e => ({
                        char: e[0],
                        i: t.length - e.index - 1
                    }))).sort(( (e, t) => e.i - t.i));
                    t = t.replace(/[.,]/g, "");
                    let o = u.length - 1;
                    for (let e = r; e >= 1; e--) {
                        let i = parseInt(t / r * e, 10);
                        i = n.reduce(( (e, {char: t, i: n}) => e.length <= n ? e : e.slice(0, -n) + t + e.slice(-n)), i.toString()),
                        u[o--] += i
                    }
                } else
                    for (let t = 0; t < r; t++)
                        u[t] += i[e];
            return u[u.length] = e.toString(),
            u
        }
        ;
        return t
    }
    )()
}
));
/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.12.0
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.baguetteBox = t()
}(this, function() {
    "use strict";
    var s, l, u, c, d, f = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', g = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', p = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>', b = {}, v = {
        captions: !0,
        buttons: "auto",
        fullScreen: !1,
        noScrollbars: !1,
        bodyClass: "baguetteBox-open",
        titleTag: !1,
        async: !1,
        preload: 2,
        animation: "slideIn",
        afterShow: null,
        afterHide: null,
        onChange: null,
        overlayBackgroundColor: "rgba(0,0,0,.8)",
        closeX: p,
        leftArrow: f,
        rightArrow: g
    }, m = {}, h = [], o = 0, n = !1, i = {}, a = !1, y = /.+\.(gif|jpe?g|png|webp)/i, w = {}, k = [], r = null, x = function(e) {
        -1 !== e.target.id.indexOf("baguette-img") && X()
    }, E = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
        q()
    }, C = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
        j()
    }, B = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
        X()
    }, T = function(e) {
        i.count++,
        1 < i.count && (i.multitouch = !0),
        i.startX = e.changedTouches[0].pageX,
        i.startY = e.changedTouches[0].pageY
    }, A = function(e) {
        if (!a && !i.multitouch) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var t = e.touches[0] || e.changedTouches[0];
            40 < t.pageX - i.startX ? (a = !0,
            q()) : t.pageX - i.startX < -40 ? (a = !0,
            j()) : 100 < i.startY - t.pageY && X()
        }
    }, L = function() {
        i.count--,
        i.count <= 0 && (i.multitouch = !1),
        a = !1
    }, N = function() {
        L()
    }, H = function(e) {
        "block" === s.style.display && s.contains && !s.contains(e.target) && (e.stopPropagation(),
        M())
    };
    function P(e) {
        if (w.hasOwnProperty(e)) {
            var t = w[e].galleries;
            [].forEach.call(t, function(e) {
                [].forEach.call(e, function(e) {
                    W(e.imageElement, "click", e.eventHandler)
                }),
                h === e && (h = [])
            }),
            delete w[e]
        }
    }
    function S(e) {
        switch (e.keyCode) {
        case 37:
            q();
            break;
        case 39:
            j();
            break;
        case 27:
            X();
            break;
        case 36:
            !function t(e) {
                e && e.preventDefault();
                return D(0)
            }(e);
            break;
        case 35:
            !function n(e) {
                e && e.preventDefault();
                return D(h.length - 1)
            }(e)
        }
    }
    function F(e, t) {
        if (h !== e) {
            for (h = e,
            function r(e) {
                e = e || {};
                for (var t in v)
                    b[t] = v[t],
                    "undefined" != typeof e[t] && (b[t] = e[t]);
                l.style.transition = l.style.webkitTransition = "fadeIn" === b.animation ? "opacity .4s ease" : "slideIn" === b.animation ? "" : "none",
                "auto" === b.buttons && ("ontouchstart"in window || 1 === h.length) && (b.buttons = !1);
                u.style.display = c.style.display = b.buttons ? "" : "none",
                d.innerHTML = b.closeX,
                b.buttons && (u.innerHTML = b.leftArrow,
                c.innerHTML = b.rightArrow);
                try {
                    s.style.backgroundColor = b.overlayBackgroundColor
                } catch (n) {}
            }(t); l.firstChild; )
                l.removeChild(l.firstChild);
            for (var n, o = [], i = [], a = k.length = 0; a < e.length; a++)
                (n = J("div")).className = "full-image",
                n.id = "baguette-img-" + a,
                k.push(n),
                o.push("baguetteBox-figure-" + a),
                i.push("baguetteBox-figcaption-" + a),
                l.appendChild(k[a]);
            s.setAttribute("aria-labelledby", o.join(" ")),
            s.setAttribute("aria-describedby", i.join(" "))
        }
    }
    function I(e) {
        b.noScrollbars && (document.documentElement.style.overflowY = "hidden",
        document.body.style.overflowY = "scroll"),
        "block" !== s.style.display && (U(document, "keydown", S),
        i = {
            count: 0,
            startX: null,
            startY: null
        },
        Y(o = e, function() {
            z(o),
            V(o)
        }),
        R(),
        s.style.display = "block",
        b.fullScreen && function t() {
            s.requestFullscreen ? s.requestFullscreen() : s.webkitRequestFullscreen ? s.webkitRequestFullscreen() : s.mozRequestFullScreen && s.mozRequestFullScreen()
        }(),
        setTimeout(function() {
            s.className = "visible",
            b.bodyClass && document.body.classList && document.body.classList.add(b.bodyClass),
            b.afterShow && b.afterShow()
        }, 50),
        b.onChange && b.onChange(o, k.length),
        r = document.activeElement,
        M(),
        n = !0)
    }
    function M() {
        b.buttons ? u.focus() : d.focus()
    }
    function X() {
        b.noScrollbars && (document.documentElement.style.overflowY = "auto",
        document.body.style.overflowY = "auto"),
        "none" !== s.style.display && (W(document, "keydown", S),
        s.className = "",
        setTimeout(function() {
            s.style.display = "none",
            document.fullscreen && function e() {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }(),
            b.bodyClass && document.body.classList && document.body.classList.remove(b.bodyClass),
            b.afterHide && b.afterHide(),
            r && r.focus(),
            n = !1
        }, 500))
    }
    function Y(t, n) {
        var e = k[t]
          , o = h[t];
        if (void 0 !== e && void 0 !== o)
            if (e.getElementsByTagName("img")[0])
                n && n();
            else {
                var i = o.imageElement
                  , a = i.getElementsByTagName("img")[0]
                  , r = "function" == typeof b.captions ? b.captions.call(h, i) : i.getAttribute("data-caption") || i.title
                  , s = function d(e) {
                    var t = e.href;
                    if (e.dataset) {
                        var n = [];
                        for (var o in e.dataset)
                            "at-" !== o.substring(0, 3) || isNaN(o.substring(3)) || (n[o.replace("at-", "")] = e.dataset[o]);
                        for (var i = Object.keys(n).sort(function(e, t) {
                            return parseInt(e, 10) < parseInt(t, 10) ? -1 : 1
                        }), a = window.innerWidth * window.devicePixelRatio, r = 0; r < i.length - 1 && i[r] < a; )
                            r++;
                        t = n[i[r]] || t
                    }
                    return t
                }(i)
                  , l = J("figure");
                if (l.id = "baguetteBox-figure-" + t,
                l.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',
                b.captions && r) {
                    var u = J("figcaption");
                    u.id = "baguetteBox-figcaption-" + t,
                    u.innerHTML = r,
                    l.appendChild(u)
                }
                e.appendChild(l);
                var c = J("img");
                c.onload = function() {
                    var e = document.querySelector("#baguette-img-" + t + " .baguetteBox-spinner");
                    l.removeChild(e),
                    !b.async && n && n()
                }
                ,
                c.setAttribute("src", s),
                c.alt = a && a.alt || "",
                b.titleTag && r && (c.title = r),
                l.appendChild(c),
                b.async && n && n()
            }
    }
    function j() {
        return D(o + 1)
    }
    function q() {
        return D(o - 1)
    }
    function D(e, t) {
        return !n && 0 <= e && e < t.length ? (F(t, b),
        I(e),
        !0) : e < 0 ? (b.animation && O("left"),
        !1) : e >= k.length ? (b.animation && O("right"),
        !1) : (Y(o = e, function() {
            z(o),
            V(o)
        }),
        R(),
        b.onChange && b.onChange(o, k.length),
        !0)
    }
    function O(e) {
        l.className = "bounce-from-" + e,
        setTimeout(function() {
            l.className = ""
        }, 400)
    }
    function R() {
        var e = 100 * -o + "%";
        "fadeIn" === b.animation ? (l.style.opacity = 0,
        setTimeout(function() {
            m.transforms ? l.style.transform = l.style.webkitTransform = "translate3d(" + e + ",0,0)" : l.style.left = e,
            l.style.opacity = 1
        }, 400)) : m.transforms ? l.style.transform = l.style.webkitTransform = "translate3d(" + e + ",0,0)" : l.style.left = e
    }
    function z(e) {
        e - o >= b.preload || Y(e + 1, function() {
            z(e + 1)
        })
    }
    function V(e) {
        o - e >= b.preload || Y(e - 1, function() {
            V(e - 1)
        })
    }
    function U(e, t, n, o) {
        e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent("on" + t, function(e) {
            (e = e || window.event).target = e.target || e.srcElement,
            n(e)
        })
    }
    function W(e, t, n, o) {
        e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent("on" + t, n)
    }
    function G(e) {
        return document.getElementById(e)
    }
    function J(e) {
        return document.createElement(e)
    }
    return [].forEach || (Array.prototype.forEach = function(e, t) {
        for (var n = 0; n < this.length; n++)
            e.call(t, this[n], n, this)
    }
    ),
    [].filter || (Array.prototype.filter = function(e, t, n, o, i) {
        for (n = this,
        o = [],
        i = 0; i < n.length; i++)
            e.call(t, n[i], i, n) && o.push(n[i]);
        return o
    }
    ),
    {
        run: function K(e, t) {
            return m.transforms = function n() {
                var e = J("div");
                return "undefined" != typeof e.style.perspective || "undefined" != typeof e.style.webkitPerspective
            }(),
            m.svg = function o() {
                var e = J("div");
                return e.innerHTML = "<svg/>",
                "http://www.w3.org/2000/svg" === (e.firstChild && e.firstChild.namespaceURI)
            }(),
            m.passiveEvents = function i() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (n) {}
                return e
            }(),
            function a() {
                if (s = G("baguetteBox-overlay"))
                    return l = G("baguetteBox-slider"),
                    u = G("previous-button"),
                    c = G("next-button"),
                    void (d = G("close-button"));
                (s = J("div")).setAttribute("role", "dialog"),
                s.id = "baguetteBox-overlay",
                document.getElementsByTagName("body")[0].appendChild(s),
                (l = J("div")).id = "baguetteBox-slider",
                s.appendChild(l),
                (u = J("button")).setAttribute("type", "button"),
                u.id = "previous-button",
                u.setAttribute("aria-label", "Previous"),
                u.innerHTML = m.svg ? f : "&lt;",
                s.appendChild(u),
                (c = J("button")).setAttribute("type", "button"),
                c.id = "next-button",
                c.setAttribute("aria-label", "Next"),
                c.innerHTML = m.svg ? g : "&gt;",
                s.appendChild(c),
                (d = J("button")).setAttribute("type", "button"),
                d.id = "close-button",
                d.setAttribute("aria-label", "Close"),
                d.innerHTML = m.svg ? p : "&times;",
                s.appendChild(d),
                u.className = c.className = d.className = "baguetteBox-button",
                function n() {
                    var e = m.passiveEvents ? {
                        passive: !1
                    } : null
                      , t = m.passiveEvents ? {
                        passive: !0
                    } : null;
                    U(s, "click", x),
                    U(u, "click", E),
                    U(c, "click", C),
                    U(d, "click", B),
                    U(l, "contextmenu", N),
                    U(s, "touchstart", T, t),
                    U(s, "touchmove", A, e),
                    U(s, "touchend", L),
                    U(document, "focus", H, !0)
                }()
            }(),
            P(e),
            function r(e, a) {
                var t = document.querySelectorAll(e)
                  , n = {
                    galleries: [],
                    nodeList: t
                };
                return w[e] = n,
                [].forEach.call(t, function(e) {
                    a && a.filter && (y = a.filter);
                    var t = [];
                    if (t = "A" === e.tagName ? [e] : e.getElementsByTagName("a"),
                    0 !== (t = [].filter.call(t, function(e) {
                        if (-1 === e.className.indexOf(a && a.ignoreClass))
                            return y.test(e.href)
                    })).length) {
                        var i = [];
                        [].forEach.call(t, function(e, t) {
                            var n = function(e) {
                                e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                                F(i, a),
                                I(t)
                            }
                              , o = {
                                eventHandler: n,
                                imageElement: e
                            };
                            U(e, "click", n),
                            i.push(o)
                        }),
                        n.galleries.push(i)
                    }
                }),
                n.galleries
            }(e, t)
        },
        show: D,
        showNext: j,
        showPrevious: q,
        hide: X,
        destroy: function e() {
            !function n() {
                var e = m.passiveEvents ? {
                    passive: !1
                } : null
                  , t = m.passiveEvents ? {
                    passive: !0
                } : null;
                W(s, "click", x),
                W(u, "click", E),
                W(c, "click", C),
                W(d, "click", B),
                W(l, "contextmenu", N),
                W(s, "touchstart", T, t),
                W(s, "touchmove", A, e),
                W(s, "touchend", L),
                W(document, "focus", H, !0)
            }(),
            function t() {
                for (var e in w)
                    w.hasOwnProperty(e) && P(e)
            }(),
            W(document, "keydown", S),
            document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),
            w = {},
            h = [],
            o = 0
        }
    }
});
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    let e = t.prototype;
    return e.on = function(t, e) {
        if (!t || !e)
            return this;
        let i = this._events = this._events || {}
          , s = i[t] = i[t] || [];
        return s.includes(e) || s.push(e),
        this
    }
    ,
    e.once = function(t, e) {
        if (!t || !e)
            return this;
        this.on(t, e);
        let i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0,
        this
    }
    ,
    e.off = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length)
            return this;
        let s = i.indexOf(e);
        return -1 != s && i.splice(s, 1),
        this
    }
    ,
    e.emitEvent = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length)
            return this;
        i = i.slice(0),
        e = e || [];
        let s = this._onceEvents && this._onceEvents[t];
        for (let n of i) {
            s && s[n] && (this.off(t, n),
            delete s[n]),
            n.apply(this, e)
        }
        return this
    }
    ,
    e.allOff = function() {
        return delete this._events,
        delete this._onceEvents,
        this
    }
    ,
    t
}
)),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function(t, e) {
    let i = t.jQuery
      , s = t.console;
    function n(t, e, o) {
        if (!(this instanceof n))
            return new n(t,e,o);
        let r = t;
        var h;
        ("string" == typeof t && (r = document.querySelectorAll(t)),
        r) ? (this.elements = (h = r,
        Array.isArray(h) ? h : "object" == typeof h && "number" == typeof h.length ? [...h] : [h]),
        this.options = {},
        "function" == typeof e ? o = e : Object.assign(this.options, e),
        o && this.on("always", o),
        this.getImages(),
        i && (this.jqDeferred = new i.Deferred),
        setTimeout(this.check.bind(this))) : s.error(`Bad element for imagesLoaded ${r || t}`)
    }
    n.prototype = Object.create(e.prototype),
    n.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ;
    const o = [1, 9, 11];
    n.prototype.addElementImages = function(t) {
        "IMG" === t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        let {nodeType: e} = t;
        if (!e || !o.includes(e))
            return;
        let i = t.querySelectorAll("img");
        for (let t of i)
            this.addImage(t);
        if ("string" == typeof this.options.background) {
            let e = t.querySelectorAll(this.options.background);
            for (let t of e)
                this.addElementBackgroundImages(t)
        }
    }
    ;
    const r = /url\((['"])?(.*?)\1\)/gi;
    function h(t) {
        this.img = t
    }
    function d(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    return n.prototype.addElementBackgroundImages = function(t) {
        let e = getComputedStyle(t);
        if (!e)
            return;
        let i = r.exec(e.backgroundImage);
        for (; null !== i; ) {
            let s = i && i[2];
            s && this.addBackground(s, t),
            i = r.exec(e.backgroundImage)
        }
    }
    ,
    n.prototype.addImage = function(t) {
        let e = new h(t);
        this.images.push(e)
    }
    ,
    n.prototype.addBackground = function(t, e) {
        let i = new d(t,e);
        this.images.push(i)
    }
    ,
    n.prototype.check = function() {
        if (this.progressedCount = 0,
        this.hasAnyBroken = !1,
        !this.images.length)
            return void this.complete();
        let t = (t, e, i) => {
            setTimeout(( () => {
                this.progress(t, e, i)
            }
            ))
        }
        ;
        this.images.forEach((function(e) {
            e.once("progress", t),
            e.check()
        }
        ))
    }
    ,
    n.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount === this.images.length && this.complete(),
        this.options.debug && s && s.log(`progress: ${i}`, t, e)
    }
    ,
    n.prototype.complete = function() {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    h.prototype = Object.create(e.prototype),
    h.prototype.check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin),
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.proxyImage.src = this.img.currentSrc || this.img.src)
    }
    ,
    h.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    h.prototype.confirm = function(t, e) {
        this.isLoaded = t;
        let {parentNode: i} = this.img
          , s = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, s, e])
    }
    ,
    h.prototype.handleEvent = function(t) {
        let e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    h.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    h.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    h.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    d.prototype = Object.create(h.prototype),
    d.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    d.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    d.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    n.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && (i = e,
        i.fn.imagesLoaded = function(t, e) {
            return new n(this,t,e).jqDeferred.promise(i(this))
        }
        )
    }
    ,
    n.makeJQueryPlugin(),
    n
}
));
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
            void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                n._init()) : (n = new s(o,e),
                a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return o(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , o = i[t] = i[t] || {};
            return o[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                  , r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)),
            s.isBoxSizeOuter = r,
            i.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , I = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + z),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i]
              , n = o + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var o = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o)
                    return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                    n.push(i[s])
            }
        }),
        n
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e]
          , n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments
              , s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e),
                delete s[n]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, o, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = o.prototype = Object.create(t.prototype);
    d.constructor = o,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , o = t[e ? "left" : "right"]
          , n = t[i ? "top" : "bottom"]
          , s = parseFloat(o)
          , r = parseFloat(n)
          , a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width),
        n.indexOf("%") != -1 && (r = r / 100 * a.height),
        s = isNaN(s) ? 0 : s,
        r = isNaN(r) ? 0 : r,
        s -= e ? a.paddingLeft : a.paddingRight,
        r -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = s,
        this.position.y = r
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , n = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom"
          , h = o ? "top" : "bottom"
          , d = o ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , o = this.position.y
          , n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        n && !this.isTransitioning)
            return void this.layoutPosition();
        var s = t - i
          , r = e - o
          , a = {};
        a.transform = this.getTranslate(s, r),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = o ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[o]),
            o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this),
                delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
        f[n] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , o = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype),
    c.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n]
              , r = new i(s,this);
            o.push(r)
        }
        return o
    }
    ,
    c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
        this[t] = o ? i(o)[e] : n) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                o.isInstant = e || t.isLayoutInstant,
                i.push(o)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function o() {
            r++,
            r == s && i()
        }
        var n = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var n = h.Event(e);
                n.type = t,
                this.$element.trigger(n, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , o = this._boundingRect
          , n = i(t)
          , s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = o.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    o.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            o.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.compatOptions = o.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(n),
        o.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        o.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    }
    ;
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = i.prototype
      , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , o = "outer" + e;
        if (this._getMeasurement(i, o),
        !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }
    ,
    o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o),
        n.prototype.constructor = n,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    o.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , n = this.containerWidth + this.gutter
          , s = n / o
          , r = o - n % o
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    o.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , o = e(i);
        this.containerWidth = o && o.innerWidth
    }
    ,
    o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
            this.colYs[h] = a;
        return r
    }
    ,
    o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    o._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
            e[o] = this._getColGroupY(o, t);
        return e
    }
    ,
    o._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    o._manageStamp = function(t) {
        var i = e(t)
          , o = this._getElementOffset(t)
          , n = this._getOption("originLeft")
          , s = n ? o.left : o.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , o = i.prototype
      , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        o
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n]
                  , r = i.sortData[s]
                  , a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            o = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t);
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return o(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }
    ,
    l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++)
                o = e[i],
                this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i,
        o
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});
/*! mediabox v1.1.3 | (c) 2018 Pedro Rogerio | https://github.com/pinceladasdaweb/mediabox */
!function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.MediaBox = t()
}(this, function() {
    "use strict";
    var e = function(t, o) {
        var i = {
            autoplay: "1"
        }
          , o = o || 0;
        return this && this instanceof e ? !!t && (this.params = Object.assign(i, o),
        this.selector = t instanceof NodeList ? t : document.querySelectorAll(t),
        this.root = document.querySelector("body"),
        void this.run()) : new e(t,o)
    };
    return e.prototype = {
        run: function() {
            Array.prototype.forEach.call(this.selector, function(e) {
                e.addEventListener("click", function(t) {
                    t.preventDefault();
                    var o = this.parseUrl(e.getAttribute("href"));
                    this.render(o),
                    this.events()
                }
                .bind(this), !1)
            }
            .bind(this)),
            this.root.addEventListener("keyup", function(e) {
                27 === (e.keyCode || e.which) && this.close(this.root.querySelector(".mediabox-wrap"))
            }
            .bind(this), !1)
        },
        template: function(e, t) {
            var o;
            for (o in t)
                t.hasOwnProperty(o) && (e = e.replace(new RegExp("{" + o + "}","g"), t[o]));
            return e
        },
        parseUrl: function(e) {
            var t, o = {};
            return (t = e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) ? (o.provider = "youtube",
            o.id = t[2]) : (t = e.match(/https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/)) ? (o.provider = "vimeo",
            o.id = t[3]) : (o.provider = "Unknown",
            o.id = ""),
            o
        },
        render: function(e) {
            var t, o, i;
            if ("youtube" === e.provider)
                t = "https://www.youtube.com/embed/" + e.id;
            else {
                if ("vimeo" !== e.provider)
                    throw new Error("Invalid video URL");
                t = "https://player.vimeo.com/video/" + e.id
            }
            i = this.serialize(this.params),
            o = this.template('<div class="mediabox-wrap" role="dialog" aria-hidden="false"><div class="mediabox-content" role="document" tabindex="0"><span id="mediabox-esc" class="mediabox-close" aria-label="close" tabindex="1"></span><iframe src="{embed}{params}" frameborder="0" allowfullscreen></iframe></div></div>', {
                embed: t,
                params: i
            }),
            this.lastFocusElement = document.activeElement,
            this.root.insertAdjacentHTML("beforeend", o),
            document.body.classList.add("stop-scroll")
        },
        events: function() {
            var e = document.querySelector(".mediabox-wrap")
              , t = document.querySelector(".mediabox-content");
            e.addEventListener("click", function(t) {
                (t.target && "SPAN" === t.target.nodeName && "mediabox-close" === t.target.className || "DIV" === t.target.nodeName && "mediabox-wrap" === t.target.className || "mediabox-content" === t.target.className && "IFRAME" !== t.target.nodeName) && this.close(e)
            }
            .bind(this), !1),
            document.addEventListener("focus", function(e) {
                t && !t.contains(e.target) && (e.stopPropagation(),
                t.focus())
            }, !0),
            t.addEventListener("keypress", function(t) {
                13 === t.keyCode && this.close(e)
            }
            .bind(this), !1)
        },
        close: function(e) {
            if (null === e)
                return !0;
            var t = null;
            t && clearTimeout(t),
            e.classList.add("mediabox-hide"),
            t = setTimeout(function() {
                var e = document.querySelector(".mediabox-wrap");
                null !== e && (document.body.classList.remove("stop-scroll"),
                this.root.removeChild(e),
                this.lastFocusElement.focus())
            }
            .bind(this), 500)
        },
        serialize: function(e) {
            return "?" + Object.keys(e).reduce(function(t, o) {
                return t.push(o + "=" + encodeURIComponent(e[o])),
                t
            }, []).join("&")
        }
    },
    e
}),
"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function(e, t) {
        "use strict";
        if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var o = Object(e), i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (null != r)
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (o[n] = r[n])
        }
        return o
    },
    writable: !0,
    configurable: !0
});
/*! WOW - v1.1.2 - 2016-04-08
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.NiceSelect = t() : e.NiceSelect = t()
}(self, ( () => ( () => {
    "use strict";
    var e = {
        d: (t, i) => {
            for (var s in i)
                e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: i[s]
                })
        }
        ,
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }
      , t = {};
    function i(e) {
        var t = document.createEvent("MouseEvents");
        t.initEvent("click", !0, !1),
        e.dispatchEvent(t)
    }
    function s(e) {
        var t = document.createEvent("HTMLEvents");
        t.initEvent("change", !0, !1),
        e.dispatchEvent(t)
    }
    function o(e) {
        var t = document.createEvent("FocusEvent");
        t.initEvent("focusin", !0, !1),
        e.dispatchEvent(t)
    }
    function n(e) {
        var t = document.createEvent("FocusEvent");
        t.initEvent("focusout", !0, !1),
        e.dispatchEvent(t)
    }
    function d(e) {
        var t = document.createEvent("UIEvent");
        t.initEvent("modalclose", !0, !1),
        e.dispatchEvent(t)
    }
    function l(e, t) {
        "invalid" == t ? (c(this.dropdown, "invalid"),
        h(this.dropdown, "valid")) : (c(this.dropdown, "valid"),
        h(this.dropdown, "invalid"))
    }
    function r(e, t) {
        return null != e[t] ? e[t] : e.getAttribute(t)
    }
    function a(e, t) {
        return !!e && e.classList.contains(t)
    }
    function c(e, t) {
        if (e)
            return e.classList.add(t)
    }
    function h(e, t) {
        if (e)
            return e.classList.remove(t)
    }
    e.r(t),
    e.d(t, {
        bind: () => f,
        default: () => u
    });
    var p = {
        data: null,
        searchable: !1,
        showSelectedItems: !1
    };
    function u(e, t) {
        this.el = e,
        this.config = Object.assign({}, p, t || {}),
        this.data = this.config.data,
        this.selectedOptions = [],
        this.placeholder = r(this.el, "placeholder") || this.config.placeholder || "Select an option",
        this.searchtext = r(this.el, "searchtext") || this.config.searchtext || "Search",
        this.selectedtext = r(this.el, "selectedtext") || this.config.selectedtext || "selected",
        this.dropdown = null,
        this.multiple = r(this.el, "multiple"),
        this.disabled = r(this.el, "disabled"),
        this.create()
    }
    function f(e, t) {
        return new u(e,t)
    }
    return u.prototype.create = function() {
        this.el.style.opacity = "0",
        this.el.style.width = "0",
        this.el.style.padding = "0",
        this.el.style.height = "0",
        this.data ? this.processData(this.data) : this.extractData(),
        this.renderDropdown(),
        this.bindEvent()
    }
    ,
    u.prototype.processData = function(e) {
        var t = [];
        e.forEach((e => {
            t.push({
                data: e,
                attributes: {
                    selected: !!e.selected,
                    disabled: !!e.disabled,
                    optgroup: "optgroup" == e.value
                }
            })
        }
        )),
        this.options = t
    }
    ,
    u.prototype.extractData = function() {
        var e = this.el.querySelectorAll("option,optgroup")
          , t = []
          , i = []
          , s = [];
        e.forEach((e => {
            if ("OPTGROUP" == e.tagName)
                var s = {
                    text: e.label,
                    value: "optgroup"
                };
            else {
                let t = e.innerText;
                null != e.dataset.display && (t = e.dataset.display),
                s = {
                    text: t,
                    value: e.value,
                    selected: null != e.getAttribute("selected"),
                    disabled: null != e.getAttribute("disabled")
                }
            }
            var o = {
                selected: null != e.getAttribute("selected"),
                disabled: null != e.getAttribute("disabled"),
                optgroup: "OPTGROUP" == e.tagName
            };
            t.push(s),
            i.push({
                data: s,
                attributes: o
            })
        }
        )),
        this.data = t,
        this.options = i,
        this.options.forEach((e => {
            e.attributes.selected && s.push(e)
        }
        )),
        this.selectedOptions = s
    }
    ,
    u.prototype.renderDropdown = function() {
        var e = ["nice-select", r(this.el, "class") || "", this.disabled ? "disabled" : "", this.multiple ? "has-multiple" : ""];
        let t = '<div class="nice-select-search-box">';
        t += `<input type="text" class="nice-select-search" placeholder="${this.searchtext}..." title="search"/>`,
        t += "</div>";
        var i = `<div class="${e.join(" ")}" tabindex="${this.disabled ? null : 0}">`;
        i += `<span class="${this.multiple ? "multiple-options" : "current"}"></span>`,
        i += '<div class="nice-select-dropdown">',
        i += `${this.config.searchable ? t : ""}`,
        i += '<ul class="list"></ul>',
        i += "</div>",
        i += "</div>",
        this.el.insertAdjacentHTML("afterend", i),
        this.dropdown = this.el.nextElementSibling,
        this._renderSelectedItems(),
        this._renderItems()
    }
    ,
    u.prototype._renderSelectedItems = function() {
        if (this.multiple) {
            var e = "";
            this.config.showSelectedItems || this.config.showSelectedItems || "auto" == window.getComputedStyle(this.dropdown).width || this.selectedOptions.length < 2 ? (this.selectedOptions.forEach((function(t) {
                e += `<span class="current">${t.data.text}</span>`
            }
            )),
            e = "" == e ? this.placeholder : e) : e = this.selectedOptions.length + " " + this.selectedtext,
            this.dropdown.querySelector(".multiple-options").innerHTML = e
        } else {
            var t = this.selectedOptions.length > 0 ? this.selectedOptions[0].data.text : this.placeholder;
            this.dropdown.querySelector(".current").innerHTML = t
        }
    }
    ,
    u.prototype._renderItems = function() {
        var e = this.dropdown.querySelector("ul");
        this.options.forEach((t => {
            e.appendChild(this._renderItem(t))
        }
        ))
    }
    ,
    u.prototype._renderItem = function(e) {
        var t = document.createElement("li");
        if (t.innerHTML = e.data.text,
        e.attributes.optgroup)
            c(t, "optgroup");
        else {
            t.setAttribute("data-value", e.data.value);
            var i = ["option", e.attributes.selected ? "selected" : null, e.attributes.disabled ? "disabled" : null];
            t.addEventListener("click", this._onItemClicked.bind(this, e)),
            t.classList.add(...i)
        }
        return e.element = t,
        t
    }
    ,
    u.prototype.update = function() {
        if (this.extractData(),
        this.dropdown) {
            var e = a(this.dropdown, "open");
            this.dropdown.parentNode.removeChild(this.dropdown),
            this.create(),
            e && i(this.dropdown)
        }
        r(this.el, "disabled") ? this.disable() : this.enable()
    }
    ,
    u.prototype.disable = function() {
        this.disabled || (this.disabled = !0,
        c(this.dropdown, "disabled"))
    }
    ,
    u.prototype.enable = function() {
        this.disabled && (this.disabled = !1,
        h(this.dropdown, "disabled"))
    }
    ,
    u.prototype.clear = function() {
        this.resetSelectValue(),
        this.selectedOptions = [],
        this._renderSelectedItems(),
        this.update(),
        s(this.el)
    }
    ,
    u.prototype.destroy = function() {
        this.dropdown && (this.dropdown.parentNode.removeChild(this.dropdown),
        this.el.style.display = "")
    }
    ,
    u.prototype.bindEvent = function() {
        this.dropdown.addEventListener("click", this._onClicked.bind(this)),
        this.dropdown.addEventListener("keydown", this._onKeyPressed.bind(this)),
        this.dropdown.addEventListener("focusin", o.bind(this, this.el)),
        this.dropdown.addEventListener("focusout", n.bind(this, this.el)),
        this.el.addEventListener("invalid", l.bind(this, this.el, "invalid")),
        window.addEventListener("click", this._onClickedOutside.bind(this)),
        this.config.searchable && this._bindSearchEvent()
    }
    ,
    u.prototype._bindSearchEvent = function() {
        var e = this.dropdown.querySelector(".nice-select-search");
        e && e.addEventListener("click", (function(e) {
            return e.stopPropagation(),
            !1
        }
        )),
        e.addEventListener("input", this._onSearchChanged.bind(this))
    }
    ,
    u.prototype._onClicked = function(e) {
        var t, i;
        if (e.preventDefault(),
        a(this.dropdown, "open") ? this.multiple || (h(this.dropdown, "open"),
        d(this.el)) : (c(this.dropdown, "open"),
        t = this.el,
        (i = document.createEvent("UIEvent")).initEvent("modalopen", !0, !1),
        t.dispatchEvent(i)),
        a(this.dropdown, "open")) {
            var s = this.dropdown.querySelector(".nice-select-search");
            s && (s.value = "",
            s.focus());
            var o = this.dropdown.querySelector(".focus");
            h(o, "focus"),
            c(o = this.dropdown.querySelector(".selected"), "focus"),
            this.dropdown.querySelectorAll("ul li").forEach((function(e) {
                e.style.display = ""
            }
            ))
        } else
            this.dropdown.focus()
    }
    ,
    u.prototype._onItemClicked = function(e, t) {
        var i = t.target;
        a(i, "disabled") || (this.multiple ? a(i, "selected") ? (h(i, "selected"),
        this.selectedOptions.splice(this.selectedOptions.indexOf(e), 1),
        this.el.querySelector(`option[value="${i.dataset.value}"]`).removeAttribute("selected")) : (c(i, "selected"),
        this.selectedOptions.push(e)) : (this.selectedOptions.forEach((function(e) {
            console.log(e),
            h(e.element, "selected")
        }
        )),
        c(i, "selected"),
        this.selectedOptions = [e]),
        this._renderSelectedItems(),
        this.updateSelectValue())
    }
    ,
    u.prototype.updateSelectValue = function() {
        if (this.multiple) {
            var e = this.el;
            this.selectedOptions.forEach((function(t) {
                var i = e.querySelector(`option[value="${t.data.value}"]`);
                i && i.setAttribute("selected", !0)
            }
            ))
        } else
            this.selectedOptions.length > 0 && (this.el.value = this.selectedOptions[0].data.value);
        s(this.el)
    }
    ,
    u.prototype.resetSelectValue = function() {
        if (this.multiple) {
            var e = this.el;
            this.selectedOptions.forEach((function(t) {
                var i = e.querySelector(`option[value="${t.data.value}"]`);
                i && i.removeAttribute("selected")
            }
            ))
        } else
            this.selectedOptions.length > 0 && (this.el.selectedIndex = -1);
        s(this.el)
    }
    ,
    u.prototype._onClickedOutside = function(e) {
        this.dropdown.contains(e.target) || (h(this.dropdown, "open"),
        d(this.el))
    }
    ,
    u.prototype._onKeyPressed = function(e) {
        var t = this.dropdown.querySelector(".focus")
          , s = a(this.dropdown, "open");
        if (13 == e.keyCode)
            i(s ? t : this.dropdown);
        else if (40 == e.keyCode) {
            if (s) {
                var o = this._findNext(t);
                o && (h(this.dropdown.querySelector(".focus"), "focus"),
                c(o, "focus"))
            } else
                i(this.dropdown);
            e.preventDefault()
        } else if (38 == e.keyCode) {
            if (s) {
                var n = this._findPrev(t);
                n && (h(this.dropdown.querySelector(".focus"), "focus"),
                c(n, "focus"))
            } else
                i(this.dropdown);
            e.preventDefault()
        } else if (27 == e.keyCode && s)
            i(this.dropdown);
        else if (32 === e.keyCode && s)
            return !1;
        return !1
    }
    ,
    u.prototype._findNext = function(e) {
        for (e = e ? e.nextElementSibling : this.dropdown.querySelector(".list .option"); e; ) {
            if (!a(e, "disabled") && "none" != e.style.display)
                return e;
            e = e.nextElementSibling
        }
        return null
    }
    ,
    u.prototype._findPrev = function(e) {
        for (e = e ? e.previousElementSibling : this.dropdown.querySelector(".list .option:last-child"); e; ) {
            if (!a(e, "disabled") && "none" != e.style.display)
                return e;
            e = e.previousElementSibling
        }
        return null
    }
    ,
    u.prototype._onSearchChanged = function(e) {
        var t = a(this.dropdown, "open")
          , i = e.target.value;
        if ("" == (i = i.toLowerCase()))
            this.options.forEach((function(e) {
                e.element.style.display = ""
            }
            ));
        else if (t) {
            var s = new RegExp(i);
            this.options.forEach((function(e) {
                var t = e.data.text.toLowerCase()
                  , i = s.test(t);
                e.element.style.display = i ? "" : "none"
            }
            ))
        }
        this.dropdown.querySelectorAll(".focus").forEach((function(e) {
            h(e, "focus")
        }
        )),
        c(this._findNext(null), "focus")
    }
    ,
    t
}
)()));
//# sourceMappingURL=nice-select2.js.map
/* plain JS slideToggle https://github.com/ericbutler555/plain-js-slidetoggle */
function slideToggle(t, e, o) {
    0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o)
}
function slideUp(t, e, o) {
    j(t, e, o)
}
function slideDown(t, e, o) {
    j(t, e, o, !0)
}
function j(t, e, o, i) {
    void 0 === e && (e = 400),
    void 0 === i && (i = !1),
    t.style.overflow = "hidden",
    i && (t.style.display = "block");
    var p, l = window.getComputedStyle(t), n = parseFloat(l.getPropertyValue("height")), a = parseFloat(l.getPropertyValue("padding-top")), s = parseFloat(l.getPropertyValue("padding-bottom")), r = parseFloat(l.getPropertyValue("margin-top")), d = parseFloat(l.getPropertyValue("margin-bottom")), g = n / e, y = a / e, m = s / e, u = r / e, h = d / e;
    window.requestAnimationFrame(function l(x) {
        void 0 === p && (p = x);
        var f = x - p;
        i ? (t.style.height = g * f + "px",
        t.style.paddingTop = y * f + "px",
        t.style.paddingBottom = m * f + "px",
        t.style.marginTop = u * f + "px",
        t.style.marginBottom = h * f + "px") : (t.style.height = n - g * f + "px",
        t.style.paddingTop = a - y * f + "px",
        t.style.paddingBottom = s - m * f + "px",
        t.style.marginTop = r - u * f + "px",
        t.style.marginBottom = d - h * f + "px"),
        f >= e ? (t.style.height = "",
        t.style.paddingTop = "",
        t.style.paddingBottom = "",
        t.style.marginTop = "",
        t.style.marginBottom = "",
        t.style.overflow = "",
        i || (t.style.display = "none"),
        "function" == typeof o && o()) : window.requestAnimationFrame(l)
    })
}
!function() {
    "use strict";
    var e = document.querySelector(".cookiealert")
      , t = document.querySelector(".acceptcookies");
    e && (e.offsetHeight,
    function(e) {
        for (var t = e + "=", o = decodeURIComponent(document.cookie).split(";"), c = 0; c < o.length; c++) {
            for (var n = o[c]; " " === n.charAt(0); )
                n = n.substring(1);
            if (0 === n.indexOf(t))
                return n.substring(t.length, n.length)
        }
        return ""
    }("acceptCookies") || e.classList.add("show"),
    t.addEventListener("click", function() {
        !function(e, t, o) {
            var c = new Date;
            c.setTime(c.getTime() + 24 * o * 60 * 60 * 1e3);
            var n = "expires=" + c.toUTCString();
            document.cookie = e + "=" + t + ";" + n + ";path=/"
        }("acceptCookies", !0, 365),
        e.classList.remove("show")
    }))
}();
