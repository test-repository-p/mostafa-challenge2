! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.3",
        m = function (a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function (a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return m.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function () {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = "length" in a && a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    } if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function (a) {
                    return a = a.replace(ca, da),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function () {
                    return [0]
                }),
                last: oa(function (a, b) {
                    return [b - 1]
                }),
                eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                    return a === b
                }, h, !0), l = sa(function (a) {
                    return J(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                } return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                } k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function (a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return m.sibling(a.firstChild)
        },
        contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function (b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function () {
                    return h && m.each(arguments, function (a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function (a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], e = 0, this
                },
                disable: function () {
                    return h = i = c = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, c || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return m.Deferred(function (c) {
                            m.each(b, function (b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function (b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function () {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function (a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function () {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function (a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function () {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
            else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function da(a) {
        var b = ea.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fa = / jQuery\d+="(?:null|\d+)"/g,
        ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
        ha = /^\s+/,
        ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ja = /<([\w:]+)/,
        ka = /<tbody/i,
        la = /<|&#?\w+;/,
        ma = /<(?:script|style|link)/i,
        na = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oa = /^$|\/(?:java|ecma)script/i,
        pa = /^true\/(.*)/,
        qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ra = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sa = da(y),
        ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

    function ua(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
                else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                    e = 0;
                    while (f = h[e++]) oa.test(f.type || "") && c.push(f)
                } return h = null, o
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        },
        html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y,
            c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    }! function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/,
        Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ia = function (a) {
        return a.currentStyle
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function La(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                },
                boxSizingReliable: function () {
                    return null == f && i(), f
                },
                pixelPosition: function () {
                    return null == e && i(), e
                },
                reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i,
        Na = /opacity\s*=\s*([^)]*)/,
        Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = new RegExp("^(" + S + ")(.*)$", "i"),
        Qa = new RegExp("^([+-])=(" + S + ")", "i"),
        Ra = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ta.length;
        while (e--)
            if (b = Ta[e] + c, b in a) return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ia(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Va(this, !0)
        },
        hide: function () {
            return Va(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/,
        bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cb = /queueHooks$/,
        db = [ib],
        eb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bb.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fb() {
        return setTimeout(function () {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = db.length,
            h = m.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $a || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
            tweener: function (a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
            },
            prefilter: function (a, b) {
                b ? db.unshift(a) : db.push(a)
            }
        }), m.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function () {
                        var b = kb(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function (a, b) {
            var c = m.fn[b];
            m.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            m.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function () {
            var a, b = m.timers,
                c = 0;
            for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $a = void 0
        }, m.fx.timer = function (a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function () {
            _a || (_a = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function () {
            clearInterval(_a), _a = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function (a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        function () {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lb = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle,
        pb = /^(?:checked|selected)$/i,
        qb = k.getSetAttribute,
        rb = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rb && qb || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i,
        tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    } return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    } return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(),
        wb = /\?/,
        xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/,
        Bb = /([?&])_=[^&]*/,
        Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hb = {},
        Ib = {},
        Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];

    function Lb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {},
            f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
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
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function (a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g,
        Rb = /\[\]$/,
        Sb = /\r?\n/g,
        Tb = /^(?:submit|button|image|reset|file)$/i,
        Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    } : Zb;
    var Wb = 0,
        Xb = {},
        Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xb) Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            } j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [],
        ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ec = a.jQuery,
        fc = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function (e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function (e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function () {
            var o = t(this),
                n = e(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function o(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        a = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.5", a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n),
                a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, a.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, o) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var m = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, r, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function () {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery);
(function ($) {
    'use strict';
    var jCarousel = $.jCarousel = {};
    jCarousel.version = '0.3.4';
    var rRelativeTarget = /^([+\-]=)?(.+)$/;
    jCarousel.parseTarget = function (target) {
        var relative = !1,
            parts = typeof target !== 'object' ? rRelativeTarget.exec(target) : null;
        if (parts) {
            target = parseInt(parts[2], 10) || 0;
            if (parts[1]) {
                relative = !0;
                if (parts[1] === '-=') {
                    target *= -1
                }
            }
        } else if (typeof target !== 'object') {
            target = parseInt(target, 10) || 0
        }
        return {
            target: target,
            relative: relative
        }
    };
    jCarousel.detectCarousel = function (element) {
        var carousel;
        while (element.length > 0) {
            carousel = element.filter('[data-jcarousel]');
            if (carousel.length > 0) {
                return carousel
            }
            carousel = element.find('[data-jcarousel]');
            if (carousel.length > 0) {
                return carousel
            }
            element = element.parent()
        }
        return null
    };
    jCarousel.base = function (pluginName) {
        return {
            version: jCarousel.version,
            _options: {},
            _element: null,
            _carousel: null,
            _init: $.noop,
            _create: $.noop,
            _destroy: $.noop,
            _reload: $.noop,
            create: function () {
                this._element.attr('data-' + pluginName.toLowerCase(), !0).data(pluginName, this);
                if (!1 === this._trigger('create')) {
                    return this
                }
                this._create();
                this._trigger('createend');
                return this
            },
            destroy: function () {
                if (!1 === this._trigger('destroy')) {
                    return this
                }
                this._destroy();
                this._trigger('destroyend');
                this._element.removeData(pluginName).removeAttr('data-' + pluginName.toLowerCase());
                return this
            },
            reload: function (options) {
                if (!1 === this._trigger('reload')) {
                    return this
                }
                if (options) {
                    this.options(options)
                }
                this._reload();
                this._trigger('reloadend');
                return this
            },
            element: function () {
                return this._element
            },
            options: function (key, value) {
                if (arguments.length === 0) {
                    return $.extend({}, this._options)
                }
                if (typeof key === 'string') {
                    if (typeof value === 'undefined') {
                        return typeof this._options[key] === 'undefined' ? null : this._options[key]
                    }
                    this._options[key] = value
                } else {
                    this._options = $.extend({}, this._options, key)
                }
                return this
            },
            carousel: function () {
                if (!this._carousel) {
                    this._carousel = jCarousel.detectCarousel(this.options('carousel') || this._element);
                    if (!this._carousel) {
                        $.error('Could not detect carousel for plugin "' + pluginName + '"')
                    }
                }
                return this._carousel
            },
            _trigger: function (type, element, data) {
                var event, defaultPrevented = !1;
                data = [this].concat(data || []);
                (element || this._element).each(function () {
                    event = $.Event((pluginName + ':' + type).toLowerCase());
                    $(this).trigger(event, data);
                    if (event.isDefaultPrevented()) {
                        defaultPrevented = !0
                    }
                });
                return !defaultPrevented
            }
        }
    };
    jCarousel.plugin = function (pluginName, pluginPrototype) {
        var Plugin = $[pluginName] = function (element, options) {
            this._element = $(element);
            this.options(options);
            this._init();
            this.create()
        };
        Plugin.fn = Plugin.prototype = $.extend({}, jCarousel.base(pluginName), pluginPrototype);
        $.fn[pluginName] = function (options) {
            var args = Array.prototype.slice.call(arguments, 1),
                returnValue = this;
            if (typeof options === 'string') {
                this.each(function () {
                    var instance = $(this).data(pluginName);
                    if (!instance) {
                        return $.error('Cannot call methods on ' + pluginName + ' prior to initialization; ' + 'attempted to call method "' + options + '"')
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                        return $.error('No such method "' + options + '" for ' + pluginName + ' instance')
                    }
                    var methodValue = instance[options].apply(instance, args);
                    if (methodValue !== instance && typeof methodValue !== 'undefined') {
                        returnValue = methodValue;
                        return !1
                    }
                })
            } else {
                this.each(function () {
                    var instance = $(this).data(pluginName);
                    if (instance instanceof Plugin) {
                        instance.reload(options)
                    } else {
                        new Plugin(this, options)
                    }
                })
            }
            return returnValue
        };
        return Plugin
    }
}(jQuery));
(function ($, window) {
    'use strict';
    var toFloat = function (val) {
        return parseFloat(val) || 0
    };
    $.jCarousel.plugin('jcarousel', {
        animating: !1,
        tail: 0,
        inTail: !1,
        resizeTimer: null,
        lt: null,
        vertical: !1,
        rtl: !1,
        circular: !1,
        underflow: !1,
        relative: !1,
        _options: {
            list: function () {
                return this.element().children().eq(0)
            },
            items: function () {
                return this.list().children()
            },
            animation: 400,
            transitions: !1,
            wrap: null,
            vertical: null,
            rtl: null,
            center: !1
        },
        _list: null,
        _items: null,
        _target: $(),
        _first: $(),
        _last: $(),
        _visible: $(),
        _fullyvisible: $(),
        _init: function () {
            var self = this;
            this.onWindowResize = function () {
                if (self.resizeTimer) {
                    clearTimeout(self.resizeTimer)
                }
                self.resizeTimer = setTimeout(function () {
                    self.reload()
                }, 100)
            };
            return this
        },
        _create: function () {
            this._reload();
            $(window).on('resize.jcarousel', this.onWindowResize)
        },
        _destroy: function () {
            $(window).off('resize.jcarousel', this.onWindowResize)
        },
        _reload: function () {
            this.vertical = this.options('vertical');
            if (this.vertical == null) {
                this.vertical = this.list().height() > this.list().width()
            }
            this.rtl = this.options('rtl');
            if (this.rtl == null) {}
            this.rtl = !1;
            this.lt = this.vertical ? 'top' : 'left';
            this.relative = this.list().css('position') === 'relative';
            this._list = null;
            this._items = null;
            var item = this.index(this._target) >= 0 ? this._target : this.closest();
            this.circular = this.options('wrap') === 'circular';
            this.underflow = !1;
            var props = {
                'left': 0,
                'top': 0
            };
            if (item.length > 0) {
                this._prepare(item);
                this.list().find('[data-jcarousel-clone]').remove();
                this._items = null;
                this.underflow = this._fullyvisible.length >= this.items().length;
                this.circular = this.circular && !this.underflow;
                props[this.lt] = this._position(item) + 'px'
            }
            this.move(props);
            return this
        },
        list: function () {
            if (this._list === null) {
                var option = this.options('list');
                this._list = $.isFunction(option) ? option.call(this) : this._element.find(option)
            }
            return this._list
        },
        items: function () {
            if (this._items === null) {
                var option = this.options('items');
                this._items = ($.isFunction(option) ? option.call(this) : this.list().find(option)).not('[data-jcarousel-clone]')
            }
            return this._items
        },
        index: function (item) {
            return this.items().index(item)
        },
        closest: function () {
            var self = this,
                pos = this.list().position()[this.lt],
                closest = $(),
                stop = !1,
                lrb = this.vertical ? 'bottom' : (this.rtl && !this.relative ? 'left' : 'right'),
                width;
            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping()
            }
            this.items().each(function () {
                closest = $(this);
                if (stop) {
                    return !1
                }
                var dim = self.dimension(closest);
                pos += dim;
                if (pos >= 0) {
                    width = dim - toFloat(closest.css('margin-' + lrb));
                    if ((Math.abs(pos) - dim + (width / 2)) <= 0) {
                        stop = !0
                    } else {
                        return !1
                    }
                }
            });
            return closest
        },
        target: function () {
            return this._target
        },
        first: function () {
            return this._first
        },
        last: function () {
            return this._last
        },
        visible: function () {
            return this._visible
        },
        fullyvisible: function () {
            return this._fullyvisible
        },
        hasNext: function () {
            if (!1 === this._trigger('hasnext')) {
                return !0
            }
            var wrap = this.options('wrap'),
                end = this.items().length - 1,
                check = this.options('center') ? this._target : this._last;
            return end >= 0 && !this.underflow && ((wrap && wrap !== 'first') || (this.index(check) < end) || (this.tail && !this.inTail)) ? !0 : !1
        },
        hasPrev: function () {
            if (!1 === this._trigger('hasprev')) {
                return !0
            }
            var wrap = this.options('wrap');
            return this.items().length > 0 && !this.underflow && ((wrap && wrap !== 'last') || (this.index(this._first) > 0) || (this.tail && this.inTail)) ? !0 : !1
        },
        clipping: function () {
            return this._element['inner' + (this.vertical ? 'Height' : 'Width')]()
        },
        dimension: function (element) {
            return element['outer' + (this.vertical ? 'Height' : 'Width')](!0)
        },
        scroll: function (target, animate, callback) {
            if (this.animating) {
                return this
            }
            if (!1 === this._trigger('scroll', null, [target, animate])) {
                return this
            }
            if ($.isFunction(animate)) {
                callback = animate;
                animate = !0
            }
            var parsed = $.jCarousel.parseTarget(target);
            if (parsed.relative) {
                var end = this.items().length - 1,
                    scroll = Math.abs(parsed.target),
                    wrap = this.options('wrap'),
                    current, first, index, start, curr, isVisible, props, i;
                if (parsed.target > 0) {
                    var last = this.index(this._last);
                    if (last >= end && this.tail) {
                        if (!this.inTail) {
                            this._scrollTail(animate, callback)
                        } else {
                            if (wrap === 'both' || wrap === 'last') {
                                this._scroll(0, animate, callback)
                            } else {
                                if ($.isFunction(callback)) {
                                    callback.call(this, !1)
                                }
                            }
                        }
                    } else {
                        current = this.index(this._target);
                        if ((this.underflow && current === end && (wrap === 'circular' || wrap === 'both' || wrap === 'last')) || (!this.underflow && last === end && (wrap === 'both' || wrap === 'last'))) {
                            this._scroll(0, animate, callback)
                        } else {
                            index = current + scroll;
                            if (this.circular && index > end) {
                                i = end;
                                curr = this.items().get(-1);
                                while (i++ < index) {
                                    curr = this.items().eq(0);
                                    isVisible = this._visible.index(curr) >= 0;
                                    if (isVisible) {
                                        curr.after(curr.clone(!0).attr('data-jcarousel-clone', !0))
                                    }
                                    this.list().append(curr);
                                    if (!isVisible) {
                                        props = {};
                                        props[this.lt] = this.dimension(curr);
                                        this.moveBy(props)
                                    }
                                    this._items = null
                                }
                                this._scroll(curr, animate, callback)
                            } else {
                                this._scroll(Math.min(index, end), animate, callback)
                            }
                        }
                    }
                } else {
                    if (this.inTail) {
                        this._scroll(Math.max((this.index(this._first) - scroll) + 1, 0), animate, callback)
                    } else {
                        first = this.index(this._first);
                        current = this.index(this._target);
                        start = this.underflow ? current : first;
                        index = start - scroll;
                        if (start <= 0 && ((this.underflow && wrap === 'circular') || wrap === 'both' || wrap === 'first')) {
                            this._scroll(end, animate, callback)
                        } else {
                            if (this.circular && index < 0) {
                                i = index;
                                curr = this.items().get(0);
                                while (i++ < 0) {
                                    curr = this.items().eq(-1);
                                    isVisible = this._visible.index(curr) >= 0;
                                    if (isVisible) {
                                        curr.after(curr.clone(!0).attr('data-jcarousel-clone', !0))
                                    }
                                    this.list().prepend(curr);
                                    this._items = null;
                                    var dim = this.dimension(curr);
                                    props = {};
                                    props[this.lt] = -dim;
                                    this.moveBy(props)
                                }
                                this._scroll(curr, animate, callback)
                            } else {
                                this._scroll(Math.max(index, 0), animate, callback)
                            }
                        }
                    }
                }
            } else {
                this._scroll(parsed.target, animate, callback)
            }
            this._trigger('scrollend');
            return this
        },
        moveBy: function (properties, opts) {
            var position = this.list().position(),
                multiplier = 1,
                correction = 0;
            if (this.rtl && !this.vertical) {
                multiplier = -1;
                if (this.relative) {
                    correction = this.list().width() - this.clipping()
                }
            }
            if (properties.left) {
                properties.left = (position.left + correction + toFloat(properties.left) * multiplier) + 'px'
            }
            if (properties.top) {
                properties.top = (position.top + correction + toFloat(properties.top) * multiplier) + 'px'
            }
            return this.move(properties, opts)
        },
        move: function (properties, opts) {
            opts = opts || {};
            var option = this.options('transitions'),
                transitions = !!option,
                transforms = !!option.transforms,
                transforms3d = !!option.transforms3d,
                duration = opts.duration || 0,
                list = this.list();
            if (!transitions && duration > 0) {
                list.animate(properties, opts);
                return
            }
            var complete = opts.complete || $.noop,
                css = {};
            if (transitions) {
                var backup = {
                        transitionDuration: list.css('transitionDuration'),
                        transitionTimingFunction: list.css('transitionTimingFunction'),
                        transitionProperty: list.css('transitionProperty')
                    },
                    oldComplete = complete;
                complete = function () {
                    $(this).css(backup);
                    oldComplete.call(this)
                };
                css = {
                    transitionDuration: (duration > 0 ? duration / 1000 : 0) + 's',
                    transitionTimingFunction: option.easing || opts.easing,
                    transitionProperty: duration > 0 ? (function () {
                        if (transforms || transforms3d) {
                            return 'all'
                        }
                        return properties.left ? 'left' : 'top'
                    })() : 'none',
                    transform: 'none'
                }
            }
            if (transforms3d) {
                css.transform = 'translate3d(' + (properties.left || 0) + ',' + (properties.top || 0) + ',0)'
            } else if (transforms) {
                css.transform = 'translate(' + (properties.left || 0) + ',' + (properties.top || 0) + ')'
            } else {
                $.extend(css, properties)
            }
            if (transitions && duration > 0) {
                list.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', complete)
            }
            list.css(css);
            if (duration <= 0) {
                list.each(function () {
                    complete.call(this)
                })
            }
        },
        _scroll: function (item, animate, callback) {
            if (this.animating) {
                if ($.isFunction(callback)) {
                    callback.call(this, !1)
                }
                return this
            }
            if (typeof item !== 'object') {
                item = this.items().eq(item)
            } else if (typeof item.jquery === 'undefined') {
                item = $(item)
            }
            if (item.length === 0) {
                if ($.isFunction(callback)) {
                    callback.call(this, !1)
                }
                return this
            }
            this.inTail = !1;
            this._prepare(item);
            var pos = this._position(item),
                currPos = this.list().position()[this.lt];
            if (pos === currPos) {
                if ($.isFunction(callback)) {
                    callback.call(this, !1)
                }
                return this
            }
            var properties = {};
            properties[this.lt] = pos + 'px';
            this._animate(properties, animate, callback);
            return this
        },
        _scrollTail: function (animate, callback) {
            if (this.animating || !this.tail) {
                if ($.isFunction(callback)) {
                    callback.call(this, !1)
                }
                return this
            }
            var pos = this.list().position()[this.lt];
            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping()
            }
            if (this.rtl && !this.vertical) {
                pos += this.tail
            } else {
                pos -= this.tail
            }
            this.inTail = !0;
            var properties = {};
            properties[this.lt] = pos + 'px';
            this._update({
                target: this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            });
            this._animate(properties, animate, callback);
            return this
        },
        _animate: function (properties, animate, callback) {
            callback = callback || $.noop;
            if (!1 === this._trigger('animate')) {
                callback.call(this, !1);
                return this
            }
            this.animating = !0;
            var animation = this.options('animation'),
                complete = $.proxy(function () {
                    this.animating = !1;
                    var c = this.list().find('[data-jcarousel-clone]');
                    if (c.length > 0) {
                        c.remove();
                        this._reload()
                    }
                    this._trigger('animateend');
                    callback.call(this, !0)
                }, this);
            var opts = typeof animation === 'object' ? $.extend({}, animation) : {
                    duration: animation
                },
                oldComplete = opts.complete || $.noop;
            if (animate === !1) {
                opts.duration = 0
            } else if (typeof $.fx.speeds[opts.duration] !== 'undefined') {
                opts.duration = $.fx.speeds[opts.duration]
            }
            opts.complete = function () {
                complete();
                oldComplete.call(this)
            };
            this.move(properties, opts);
            return this
        },
        _prepare: function (item) {
            var index = this.index(item),
                idx = index,
                wh = this.dimension(item),
                clip = this.clipping(),
                lrb = this.vertical ? 'bottom' : (this.rtl ? 'left' : 'right'),
                center = this.options('center'),
                update = {
                    target: item,
                    first: item,
                    last: item,
                    visible: item,
                    fullyvisible: wh <= clip ? item : $()
                },
                curr, isVisible, margin, dim;
            if (center) {
                wh /= 2;
                clip /= 2
            }
            if (wh < clip) {
                while (!0) {
                    curr = this.items().eq(++idx);
                    if (curr.length === 0) {
                        if (!this.circular) {
                            break
                        }
                        curr = this.items().eq(0);
                        if (item.get(0) === curr.get(0)) {
                            break
                        }
                        isVisible = this._visible.index(curr) >= 0;
                        if (isVisible) {
                            curr.after(curr.clone(!0).attr('data-jcarousel-clone', !0))
                        }
                        this.list().append(curr);
                        if (!isVisible) {
                            var props = {};
                            props[this.lt] = this.dimension(curr);
                            this.moveBy(props)
                        }
                        this._items = null
                    }
                    dim = this.dimension(curr);
                    if (dim === 0) {
                        break
                    }
                    wh += dim;
                    update.last = curr;
                    update.visible = update.visible.add(curr);
                    margin = toFloat(curr.css('margin-' + lrb));
                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr)
                    }
                    if (wh >= clip) {
                        break
                    }
                }
            }
            if (!this.circular && !center && wh < clip) {
                idx = index;
                while (!0) {
                    if (--idx < 0) {
                        break
                    }
                    curr = this.items().eq(idx);
                    if (curr.length === 0) {
                        break
                    }
                    dim = this.dimension(curr);
                    if (dim === 0) {
                        break
                    }
                    wh += dim;
                    update.first = curr;
                    update.visible = update.visible.add(curr);
                    margin = toFloat(curr.css('margin-' + lrb));
                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr)
                    }
                    if (wh >= clip) {
                        break
                    }
                }
            }
            this._update(update);
            this.tail = 0;
            if (!center && this.options('wrap') !== 'circular' && this.options('wrap') !== 'custom' && this.index(update.last) === (this.items().length - 1)) {
                wh -= toFloat(update.last.css('margin-' + lrb));
                if (wh > clip) {
                    this.tail = wh - clip
                }
            }
            return this
        },
        _position: function (item) {
            var first = this._first,
                pos = first.position()[this.lt],
                center = this.options('center'),
                centerOffset = center ? (this.clipping() / 2) - (this.dimension(first) / 2) : 0;
            if (this.rtl && !this.vertical) {
                if (this.relative) {
                    pos -= this.list().width() - this.dimension(first)
                } else {
                    pos -= this.clipping() - this.dimension(first)
                }
                pos += centerOffset
            } else {
                pos -= centerOffset
            }
            if (!center && (this.index(item) > this.index(first) || this.inTail) && this.tail) {
                pos = this.rtl && !this.vertical ? pos - this.tail : pos + this.tail;
                this.inTail = !0
            } else {
                this.inTail = !1
            }
            return -pos
        },
        _update: function (update) {
            var self = this,
                current = {
                    target: this._target,
                    first: this._first,
                    last: this._last,
                    visible: this._visible,
                    fullyvisible: this._fullyvisible
                },
                back = this.index(update.first || current.first) < this.index(current.first),
                key, doUpdate = function (key) {
                    var elIn = [],
                        elOut = [];
                    update[key].each(function () {
                        if (current[key].index(this) < 0) {
                            elIn.push(this)
                        }
                    });
                    current[key].each(function () {
                        if (update[key].index(this) < 0) {
                            elOut.push(this)
                        }
                    });
                    if (back) {
                        elIn = elIn.reverse()
                    } else {
                        elOut = elOut.reverse()
                    }
                    self._trigger(key + 'in', $(elIn));
                    self._trigger(key + 'out', $(elOut));
                    self['_' + key] = update[key]
                };
            for (key in update) {
                doUpdate(key)
            }
            return this
        }
    })
}(jQuery, window));
(function ($) {
    'use strict';
    $.jcarousel.fn.scrollIntoView = function (target, animate, callback) {
        var parsed = $.jCarousel.parseTarget(target),
            first = this.index(this._fullyvisible.first()),
            last = this.index(this._fullyvisible.last()),
            index;
        if (parsed.relative) {
            index = parsed.target < 0 ? Math.max(0, first + parsed.target) : last + parsed.target
        } else {
            index = typeof parsed.target !== 'object' ? parsed.target : this.index(parsed.target)
        }
        if (index < first) {
            return this.scroll(index, animate, callback)
        }
        if (index >= first && index <= last) {
            if ($.isFunction(callback)) {
                callback.call(this, !1)
            }
            return this
        }
        var items = this.items(),
            clip = this.clipping(),
            lrb = this.vertical ? 'bottom' : (this.rtl ? 'left' : 'right'),
            wh = 0,
            curr;
        while (!0) {
            curr = items.eq(index);
            if (curr.length === 0) {
                break
            }
            wh += this.dimension(curr);
            if (wh >= clip) {
                var margin = parseFloat(curr.css('margin-' + lrb)) || 0;
                if ((wh - margin) !== clip) {
                    index++
                }
                break
            }
            if (index <= 0) {
                break
            }
            index--
        }
        return this.scroll(index, animate, callback)
    }
}(jQuery));
(function ($) {
    'use strict';
    $.jCarousel.plugin('jcarouselControl', {
        _options: {
            target: '+=1',
            event: 'click',
            method: 'scroll'
        },
        _active: null,
        _init: function () {
            this.onDestroy = $.proxy(function () {
                this._destroy();
                this.carousel().one('jcarousel:createend', $.proxy(this._create, this))
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onEvent = $.proxy(function (e) {
                e.preventDefault();
                var method = this.options('method');
                if ($.isFunction(method)) {
                    method.call(this)
                } else {
                    this.carousel().jcarousel(this.options('method'), this.options('target'))
                }
            }, this)
        },
        _create: function () {
            this.carousel().one('jcarousel:destroy', this.onDestroy).on('jcarousel:reloadend jcarousel:scrollend', this.onReload);
            this._element.on(this.options('event') + '.jcarouselcontrol', this.onEvent);
            this._reload()
        },
        _destroy: function () {
            this._element.off('.jcarouselcontrol', this.onEvent);
            this.carousel().off('jcarousel:destroy', this.onDestroy).off('jcarousel:reloadend jcarousel:scrollend', this.onReload)
        },
        _reload: function () {
            var parsed = $.jCarousel.parseTarget(this.options('target')),
                carousel = this.carousel(),
                active;
            if (parsed.relative) {
                active = carousel.jcarousel(parsed.target > 0 ? 'hasNext' : 'hasPrev')
            } else {
                var target = typeof parsed.target !== 'object' ? carousel.jcarousel('items').eq(parsed.target) : parsed.target;
                active = carousel.jcarousel('target').index(target) >= 0
            }
            if (this._active !== active) {
                this._trigger(active ? 'active' : 'inactive');
                this._active = active
            }
            return this
        }
    })
}(jQuery));
(function ($) {
    'use strict';
    $.jCarousel.plugin('jcarouselPagination', {
        _options: {
            perPage: null,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>'
            },
            event: 'click',
            method: 'scroll'
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function () {
            this.onDestroy = $.proxy(function () {
                this._destroy();
                this.carousel().one('jcarousel:createend', $.proxy(this._create, this))
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onScroll = $.proxy(this._update, this)
        },
        _create: function () {
            this.carousel().one('jcarousel:destroy', this.onDestroy).on('jcarousel:reloadend', this.onReload).on('jcarousel:scrollend', this.onScroll);
            this._reload()
        },
        _destroy: function () {
            this._clear();
            this.carousel().off('jcarousel:destroy', this.onDestroy).off('jcarousel:reloadend', this.onReload).off('jcarousel:scrollend', this.onScroll);
            this._carouselItems = null
        },
        _reload: function () {
            var perPage = this.options('perPage');
            this._pages = {};
            this._items = {};
            if ($.isFunction(perPage)) {
                perPage = perPage.call(this)
            }
            if (perPage == null) {
                this._pages = this._calculatePages()
            } else {
                var pp = parseInt(perPage, 10) || 0,
                    items = this._getCarouselItems(),
                    page = 1,
                    i = 0,
                    curr;
                while (!0) {
                    curr = items.eq(i++);
                    if (curr.length === 0) {
                        break
                    }
                    if (!this._pages[page]) {
                        this._pages[page] = curr
                    } else {
                        this._pages[page] = this._pages[page].add(curr)
                    }
                    if (i % pp === 0) {
                        page++
                    }
                }
            }
            this._clear();
            var self = this,
                carousel = this.carousel().data('jcarousel'),
                element = this._element,
                item = this.options('item'),
                numCarouselItems = this._getCarouselItems().length;
            $.each(this._pages, function (page, carouselItems) {
                var currItem = self._items[page] = $(item.call(self, page, carouselItems));
                currItem.on(self.options('event') + '.jcarouselpagination', $.proxy(function () {
                    var target = carouselItems.eq(0);
                    if (carousel.circular) {
                        var currentIndex = carousel.index(carousel.target()),
                            newIndex = carousel.index(target);
                        if (parseFloat(page) > parseFloat(self._currentPage)) {
                            if (newIndex < currentIndex) {
                                target = '+=' + (numCarouselItems - currentIndex + newIndex)
                            }
                        } else {
                            if (newIndex > currentIndex) {
                                target = '-=' + (currentIndex + (numCarouselItems - newIndex))
                            }
                        }
                    }
                    carousel[this.options('method')](target)
                }, self));
                element.append(currItem)
            });
            this._update()
        },
        _update: function () {
            var target = this.carousel().jcarousel('target'),
                currentPage;
            $.each(this._pages, function (page, carouselItems) {
                carouselItems.each(function () {
                    if (target.is(this)) {
                        currentPage = page;
                        return !1
                    }
                });
                if (currentPage) {
                    return !1
                }
            });
            if (this._currentPage !== currentPage) {
                this._trigger('inactive', this._items[this._currentPage]);
                this._trigger('active', this._items[currentPage])
            }
            this._currentPage = currentPage
        },
        items: function () {
            return this._items
        },
        reloadCarouselItems: function () {
            this._carouselItems = null;
            return this
        },
        _clear: function () {
            this._element.empty();
            this._currentPage = null
        },
        _calculatePages: function () {
            var carousel = this.carousel().data('jcarousel'),
                items = this._getCarouselItems(),
                clip = carousel.clipping(),
                wh = 0,
                idx = 0,
                page = 1,
                pages = {},
                curr, dim;
            while (!0) {
                curr = items.eq(idx++);
                if (curr.length === 0) {
                    break
                }
                dim = carousel.dimension(curr);
                if ((wh + dim) > clip) {
                    page++;
                    wh = 0
                }
                wh += dim;
                if (!pages[page]) {
                    pages[page] = curr
                } else {
                    pages[page] = pages[page].add(curr)
                }
            }
            return pages
        },
        _getCarouselItems: function () {
            if (!this._carouselItems) {
                this._carouselItems = this.carousel().jcarousel('items')
            }
            return this._carouselItems
        }
    })
}(jQuery));
(function ($, document) {
    'use strict';
    var hiddenProp, visibilityChangeEvent, visibilityChangeEventNames = {
        hidden: 'visibilitychange',
        mozHidden: 'mozvisibilitychange',
        msHidden: 'msvisibilitychange',
        webkitHidden: 'webkitvisibilitychange'
    };
    $.each(visibilityChangeEventNames, function (key, val) {
        if (typeof document[key] !== 'undefined') {
            hiddenProp = key;
            visibilityChangeEvent = val;
            return !1
        }
    });
    $.jCarousel.plugin('jcarouselAutoscroll', {
        _options: {
            target: '+=1',
            interval: 3000,
            autostart: !0
        },
        _timer: null,
        _started: !1,
        _init: function () {
            this.onDestroy = $.proxy(function () {
                this._destroy();
                this.carousel().one('jcarousel:createend', $.proxy(this._create, this))
            }, this);
            this.onAnimateEnd = $.proxy(this._start, this);
            this.onVisibilityChange = $.proxy(function () {
                if (document[hiddenProp]) {
                    this._stop()
                } else {
                    this._start()
                }
            }, this)
        },
        _create: function () {
            this.carousel().one('jcarousel:destroy', this.onDestroy);
            $(document).on(visibilityChangeEvent, this.onVisibilityChange);
            if (this.options('autostart')) {
                this.start()
            }
        },
        _destroy: function () {
            this._stop();
            this.carousel().off('jcarousel:destroy', this.onDestroy);
            $(document).off(visibilityChangeEvent, this.onVisibilityChange)
        },
        _start: function () {
            this._stop();
            if (!this._started) {
                return
            }
            this.carousel().one('jcarousel:animateend', this.onAnimateEnd);
            this._timer = setTimeout($.proxy(function () {
                this.carousel().jcarousel('scroll', this.options('target'))
            }, this), this.options('interval'));
            return this
        },
        _stop: function () {
            if (this._timer) {
                this._timer = clearTimeout(this._timer)
            }
            this.carousel().off('jcarousel:animateend', this.onAnimateEnd);
            return this
        },
        start: function () {
            this._started = !0;
            this._start();
            return this
        },
        stop: function () {
            this._started = !1;
            this._stop();
            return this
        }
    })
}(jQuery, document));
(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel');
        jcarousel.on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();
            if (width < 600 && width >= 560) {
                width = width / 3
            } else if (width >= 600) {
                width = width / 4
            } else if (width >= 350) {
                width = width / 2
            }
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px')
        }).jcarousel({
            wrap: 'circular'
        });
        $('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'
        });
        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'
        });
        $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active')
        }).on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active')
        }).on('click', function (e) {
            e.preventDefault()
        }).jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>'
            }
        })
    })
})(jQuery);
(function ($) {
    $(function () {
        var jcarousel = $('.special_cat .jcarousel');
        jcarousel.on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();
            if (width < 600 && width >= 560) {
                width = width / 3
            } else if (width >= 600) {
                width = width / 6
            } else if (width >= 350) {
                width = width / 2
            }
            carousel.jcarousel('items').css('width', Math.ceil(width) + 17 + 'px')
        }).jcarousel({
            wrap: 'circular'
        });
        $('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'
        });
        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'
        });
        $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active')
        }).on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active')
        }).on('click', function (e) {
            e.preventDefault()
        }).jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>'
            }
        })
    })
})(jQuery);
(function ($) {
    $(function () {
        var jcarousel = $('.special_cat .catboxslider .jcarousel');
        jcarousel.on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();
            if (width < 600 && width >= 560) {
                width = width / 2
            } else if (width >= 600) {
                width = width / 4
            } else if (width >= 350) {
                width = width / 2
            }
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px')
        }).jcarousel({
            wrap: 'circular'
        });
        $('.special_cat .catboxslider .jcarousel-control-prev').jcarouselControl({
            method: 'scrollIntoView',
            target: '-=2'
        });
        $('.special_cat .catboxslider .jcarousel-control-next').jcarouselControl({
            method: 'scrollIntoView',
            target: '+=2'
        });
        $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active')
        }).on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active')
        }).on('click', function (e) {
            e.preventDefault()
        }).jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>'
            }
        })
    })
})(jQuery);
! function (e) {
    "undefined" == typeof e.fn.each2 && e.extend(e.fn, {
        each2: function (t) {
            for (var s = e([0]), i = -1, n = this.length; ++i < n && (s.context = s[0] = this[i]) && t.call(s[0], i, s) !== !1;);
            return this
        }
    })
}(jQuery),
function (e, t) {
    "use strict";

    function s(t) {
        var s = e(document.createTextNode(""));
        t.before(s), s.before(t), s.remove()
    }

    function i(e) {
        function t(e) {
            return z[e] || e
        }
        return e.replace(/[^\u0000-\u007E]/g, t)
    }

    function n(e, t) {
        for (var s = 0, i = t.length; i > s; s += 1)
            if (a(e, t[s])) return s;
        return -1
    }

    function o() {
        var t = e(j);
        t.appendTo(document.body);
        var s = {
            width: t.width() - t[0].clientWidth,
            height: t.height() - t[0].clientHeight
        };
        return t.remove(), s
    }

    function a(e, s) {
        return e === s ? !0 : e === t || s === t ? !1 : null === e || null === s ? !1 : e.constructor === String ? e + "" == s + "" : s.constructor === String ? s + "" == e + "" : !1
    }

    function r(e, t, s) {
        var i, n, o;
        if (null === e || e.length < 1) return [];
        for (i = e.split(t), n = 0, o = i.length; o > n; n += 1) i[n] = s(i[n]);
        return i
    }

    function l(e) {
        return e.outerWidth(!1) - e.width()
    }

    function c(s) {
        var i = "keyup-change-value";
        s.on("keydown", function () {
            e.data(s, i) === t && e.data(s, i, s.val())
        }), s.on("keyup", function () {
            var n = e.data(s, i);
            n !== t && s.val() !== n && (e.removeData(s, i), s.trigger("keyup-change"))
        })
    }

    function h(s) {
        s.on("mousemove", function (s) {
            var i = F;
            (i === t || i.x !== s.pageX || i.y !== s.pageY) && e(s.target).trigger("mousemove-filtered", s)
        })
    }

    function u(e, s, i) {
        i = i || t;
        var n;
        return function () {
            var t = arguments;
            window.clearTimeout(n), n = window.setTimeout(function () {
                s.apply(i, t)
            }, e)
        }
    }

    function d(e, t) {
        var s = u(e, function (e) {
            t.trigger("scroll-debounced", e)
        });
        t.on("scroll", function (e) {
            n(e.target, t.get()) >= 0 && s(e)
        })
    }

    function p(e) {
        e[0] !== document.activeElement && window.setTimeout(function () {
            var t, s = e[0],
                i = e.val().length;
            e.focus();
            var n = s.offsetWidth > 0 || s.offsetHeight > 0;
            n && s === document.activeElement && (s.setSelectionRange ? s.setSelectionRange(i, i) : s.createTextRange && (t = s.createTextRange(), t.collapse(!1), t.select()))
        }, 0)
    }

    function f(t) {
        t = e(t)[0];
        var s = 0,
            i = 0;
        if ("selectionStart" in t) s = t.selectionStart, i = t.selectionEnd - s;
        else if ("selection" in document) {
            t.focus();
            var n = document.selection.createRange();
            i = document.selection.createRange().text.length, n.moveStart("character", -t.value.length), s = n.text.length - i
        }
        return {
            offset: s,
            length: i
        }
    }

    function g(e) {
        e.preventDefault(), e.stopPropagation()
    }

    function m(e) {
        e.preventDefault(), e.stopImmediatePropagation()
    }

    function v(t) {
        if (!M) {
            var s = t[0].currentStyle || window.getComputedStyle(t[0], null);
            M = e(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: s.fontSize,
                fontFamily: s.fontFamily,
                fontStyle: s.fontStyle,
                fontWeight: s.fontWeight,
                letterSpacing: s.letterSpacing,
                textTransform: s.textTransform,
                whiteSpace: "nowrap"
            }), M.attr("class", "select2-sizer"), e(document.body).append(M)
        }
        return M.text(t.val()), M.width()
    }

    function b(t, s, i) {
        var n, o, a = [];
        n = e.trim(t.attr("class")), n && (n = "" + n, e(n.split(/\s+/)).each2(function () {
            0 === this.indexOf("select2-") && a.push(this)
        })), n = e.trim(s.attr("class")), n && (n = "" + n, e(n.split(/\s+/)).each2(function () {
            0 !== this.indexOf("select2-") && (o = i(this), o && a.push(o))
        })), t.attr("class", a.join(" "))
    }

    function w(e, t, s, n) {
        var o = i(e.toUpperCase()).indexOf(i(t.toUpperCase())),
            a = t.length;
        return 0 > o ? void s.push(n(e)) : (s.push(n(e.substring(0, o))), s.push("<span class='select2-match'>"), s.push(n(e.substring(o, o + a))), s.push("</span>"), void s.push(n(e.substring(o + a, e.length))))
    }

    function S(e) {
        var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(e).replace(/[&<>"'\/\\]/g, function (e) {
            return t[e]
        })
    }

    function C(s) {
        var i, n = null,
            o = s.quietMillis || 100,
            a = s.url,
            r = this;
        return function (l) {
            window.clearTimeout(i), i = window.setTimeout(function () {
                var i = s.data,
                    o = a,
                    c = s.transport || e.fn.select2.ajaxDefaults.transport,
                    h = {
                        type: s.type || "GET",
                        cache: s.cache || !1,
                        jsonpCallback: s.jsonpCallback || t,
                        dataType: s.dataType || "json"
                    },
                    u = e.extend({}, e.fn.select2.ajaxDefaults.params, h);
                i = i ? i.call(r, l.term, l.page, l.context) : null, o = "function" == typeof o ? o.call(r, l.term, l.page, l.context) : o, n && "function" == typeof n.abort && n.abort(), s.params && (e.isFunction(s.params) ? e.extend(u, s.params.call(r)) : e.extend(u, s.params)), e.extend(u, {
                    url: o,
                    dataType: s.dataType,
                    data: i,
                    success: function (e) {
                        var t = s.results(e, l.page, l);
                        l.callback(t)
                    },
                    error: function (e, t, s) {
                        var i = {
                            hasError: !0,
                            jqXHR: e,
                            textStatus: t,
                            errorThrown: s
                        };
                        l.callback(i)
                    }
                }), n = c.call(r, u)
            }, o)
        }
    }

    function y(t) {
        var s, i, n = t,
            o = function (e) {
                return "" + e.text
            };
        e.isArray(n) && (i = n, n = {
            results: i
        }), e.isFunction(n) === !1 && (i = n, n = function () {
            return i
        });
        var a = n();
        return a.text && (o = a.text, e.isFunction(o) || (s = a.text, o = function (e) {
                return e[s]
            })),
            function (t) {
                var s, i = t.term,
                    a = {
                        results: []
                    };
                return "" === i ? void t.callback(n()) : (s = function (n, a) {
                    var r, l;
                    if (n = n[0], n.children) {
                        r = {};
                        for (l in n) n.hasOwnProperty(l) && (r[l] = n[l]);
                        r.children = [], e(n.children).each2(function (e, t) {
                            s(t, r.children)
                        }), (r.children.length || t.matcher(i, o(r), n)) && a.push(r)
                    } else t.matcher(i, o(n), n) && a.push(n)
                }, e(n().results).each2(function (e, t) {
                    s(t, a.results)
                }), void t.callback(a))
            }
    }

    function x(s) {
        var i = e.isFunction(s);
        return function (n) {
            var o = n.term,
                a = {
                    results: []
                },
                r = i ? s(n) : s;
            e.isArray(r) && (e(r).each(function () {
                var e = this.text !== t,
                    s = e ? this.text : this;
                ("" === o || n.matcher(o, s)) && a.results.push(e ? this : {
                    id: this,
                    text: this
                })
            }), n.callback(a))
        }
    }

    function T(t, s) {
        if (e.isFunction(t)) return !0;
        if (!t) return !1;
        if ("string" == typeof t) return !0;
        throw new Error(s + " must be a string, function, or falsy value")
    }

    function E(t, s) {
        if (e.isFunction(t)) {
            var i = Array.prototype.slice.call(arguments, 2);
            return t.apply(s, i)
        }
        return t
    }

    function O(t) {
        var s = 0;
        return e.each(t, function (e, t) {
            t.children ? s += O(t.children) : s++
        }), s
    }

    function I(e, s, i, n) {
        var o, r, l, c, h, u = e,
            d = !1;
        if (!n.createSearchChoice || !n.tokenSeparators || n.tokenSeparators.length < 1) return t;
        while (!0) {
            for (r = -1, l = 0, c = n.tokenSeparators.length; c > l && (h = n.tokenSeparators[l], r = e.indexOf(h), !(r >= 0)); l++);
            if (0 > r) break;
            if (o = e.substring(0, r), e = e.substring(r + h.length), o.length > 0 && (o = n.createSearchChoice.call(this, o, s), o !== t && null !== o && n.id(o) !== t && null !== n.id(o))) {
                for (d = !1, l = 0, c = s.length; c > l; l++)
                    if (a(n.id(o), n.id(s[l]))) {
                        d = !0;
                        break
                    } d || i(o)
            }
        }
        return u !== e ? e : void 0
    }

    function P() {
        var t = this;
        e.each(arguments, function (e, s) {
            t[s].remove(), t[s] = null
        })
    }

    function k(t, s) {
        var i = function () {};
        return i.prototype = new t, i.prototype.constructor = i, i.prototype.parent = t.prototype, i.prototype = e.extend(i.prototype, s), i
    }
    if (window.Select2 === t) {
        var R, A, D, L, M, H, N, F = {
                x: 0,
                y: 0
            },
            U = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function (e) {
                    switch (e = e.which ? e.which : e) {
                        case U.LEFT:
                        case U.RIGHT:
                        case U.UP:
                        case U.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function (e) {
                    var t = e.which;
                    switch (t) {
                        case U.SHIFT:
                        case U.CTRL:
                        case U.ALT:
                            return !0
                    }
                    return e.metaKey ? !0 : !1
                },
                isFunctionKey: function (e) {
                    return e = e.which ? e.which : e, e >= 112 && 123 >= e
                }
            },
            j = "<div class='select2-measure-scrollbar'></div>",
            z = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
        H = e(document), L = function () {
            var e = 1;
            return function () {
                return e++
            }
        }(), R = k(Object, {
            bind: function (e) {
                var t = this;
                return function () {
                    e.apply(t, arguments)
                }
            },
            init: function (s) {
                var i, n, a = ".select2-results";
                this.opts = s = this.prepareOpts(s), this.id = s.id, s.element.data("select2") !== t && null !== s.element.data("select2") && s.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = e(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = e("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (s.element.attr("id") || "autogen" + L()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", s.element.attr("title")), this.body = e(document.body), b(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", s.element.attr("style")), this.container.css(E(s.containerCss, this.opts.element)), this.container.addClass(E(s.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", g), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), b(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(E(s.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", g), this.results = i = this.container.find(a), this.search = n = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", g), h(this.results), this.dropdown.on("mousemove-filtered", a, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", a, this.bind(function (e) {
                    this._touchEvent = !0, this.highlightUnderEvent(e)
                })), this.dropdown.on("touchmove", a, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", a, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function (e) {
                    this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                })), d(80, this.results), this.dropdown.on("scroll-debounced", a, this.bind(this.loadMoreIfNeeded)), e(this.container).on("change", ".select2-input", function (e) {
                    e.stopPropagation()
                }), e(this.dropdown).on("change", ".select2-input", function (e) {
                    e.stopPropagation()
                }), e.fn.mousewheel && i.mousewheel(function (e, t, s, n) {
                    var o = i.scrollTop();
                    n > 0 && 0 >= o - n ? (i.scrollTop(0), g(e)) : 0 > n && i.get(0).scrollHeight - i.scrollTop() + n <= i.height() && (i.scrollTop(i.get(0).scrollHeight - i.height()), g(e))
                }), c(n), n.on("keyup-change input paste", this.bind(this.updateResults)), n.on("focus", function () {
                    n.addClass("select2-focused")
                }), n.on("blur", function () {
                    n.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", a, this.bind(function (t) {
                    e(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t), this.selectHighlighted(t))
                })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (e) {
                    e.stopPropagation()
                }), this.lastSearchTerm = t, e.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== s.maximumInputLength && this.search.attr("maxlength", s.maximumInputLength);
                var r = s.element.prop("disabled");
                r === t && (r = !1), this.enable(!r);
                var l = s.element.prop("readonly");
                l === t && (l = !1), this.readonly(l), N = N || o(), this.autofocus = s.element.prop("autofocus"), s.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", s.searchInputPlaceholder)
            },
            destroy: function () {
                var e = this.opts.element,
                    s = e.data("select2"),
                    i = this;
                this.close(), e.length && e[0].detachEvent && i._sync && e.each(function () {
                    i._sync && this.detachEvent("onpropertychange", i._sync)
                }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, s !== t && (s.container.remove(), s.liveRegion.remove(), s.dropdown.remove(), e.removeData("select2").off(".select2"), e.is("input[type='hidden']") ? e.css("display", "") : (e.show().prop("autofocus", this.autofocus || !1), this.elementTabIndex ? e.attr({
                    tabindex: this.elementTabIndex
                }) : e.removeAttr("tabindex"), e.show())), P.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function (e) {
                return e.is("option") ? {
                    id: e.prop("value"),
                    text: e.text(),
                    element: e.get(),
                    css: e.attr("class"),
                    disabled: e.prop("disabled"),
                    locked: a(e.attr("locked"), "locked") || a(e.data("locked"), !0)
                } : e.is("optgroup") ? {
                    text: e.attr("label"),
                    children: [],
                    element: e.get(),
                    css: e.attr("class")
                } : void 0
            },
            prepareOpts: function (s) {
                var i, n, o, l, c = this;
                if (i = s.element, "select" === i.get(0).tagName.toLowerCase() && (this.select = n = s.element), n && e.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                        if (this in s) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                    }), s.debug = s.debug || e.fn.select2.defaults.debug, s.debug && console && console.warn && (null != s.id && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != s.text && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != s.sortResults && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "), null != s.selectOnBlur && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."), null != s.ajax && null != s.ajax.results && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."), null != s.formatNoResults && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."), null != s.formatSearching && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."), null != s.formatInputTooShort && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."), null != s.formatInputTooLong && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."), null != s.formatLoading && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."), null != s.formatSelectionTooBig && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."), s.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")), null != s.element.data("tags")) {
                    var h = s.element.data("tags");
                    e.isArray(h) || (h = []), s.element.data("select2Tags", h)
                }
                if (null != s.sorter && (s.sortResults = s.sorter), null != s.selectOnClose && (s.selectOnBlur = s.selectOnClose), null != s.ajax && e.isFunction(s.ajax.processResults) && (s.ajax.results = s.ajax.processResults), null != s.language) {
                    var u = s.language;
                    e.isFunction(u.noMatches) && (s.formatNoMatches = u.noMatches), e.isFunction(u.searching) && (s.formatSearching = u.searching), e.isFunction(u.inputTooShort) && (s.formatInputTooShort = u.inputTooShort), e.isFunction(u.inputTooLong) && (s.formatInputTooLong = u.inputTooLong), e.isFunction(u.loadingMore) && (s.formatLoading = u.loadingMore), e.isFunction(u.maximumSelected) && (s.formatSelectionTooBig = u.maximumSelected)
                }
                if (s = e.extend({}, {
                        populateResults: function (i, n, o) {
                            var a, r = this.opts.id,
                                l = this.liveRegion;
                            (a = function (i, n, h) {
                                var u, d, p, f, g, m, v, b, w, S;
                                i = s.sortResults(i, n, o);
                                var C = [];
                                for (u = 0, d = i.length; d > u; u += 1) p = i[u], g = p.disabled === !0, f = !g && r(p) !== t, m = p.children && p.children.length > 0, v = e("<li></li>"), v.addClass("select2-results-dept-" + h), v.addClass("select2-result"), v.addClass(f ? "select2-result-selectable" : "select2-result-unselectable"), g && v.addClass("select2-disabled"), m && v.addClass("select2-result-with-children"), v.addClass(c.opts.formatResultCssClass(p)), v.attr("role", "presentation"), b = e(document.createElement("div")), b.addClass("select2-result-label"), b.attr("id", "select2-result-label-" + L()), b.attr("role", "option"), S = s.formatResult(p, b, o, c.opts.escapeMarkup), S !== t && (b.html(S), v.append(b)), m && (w = e("<ul></ul>"), w.addClass("select2-result-sub"), a(p.children, w, h + 1), v.append(w)), v.data("select2-data", p), C.push(v[0]);
                                n.append(C), l.text(s.formatMatches(i.length))
                            })(n, i, 0)
                        }
                    }, e.fn.select2.defaults, s), "function" != typeof s.id && (o = s.id, s.id = function (e) {
                        return e[o]
                    }), e.isArray(s.element.data("select2Tags"))) {
                    if ("tags" in s) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + s.element.attr("id");
                    s.tags = s.element.data("select2Tags")
                }
                if (n ? (s.query = this.bind(function (e) {
                        var s, n, o, a = {
                                results: [],
                                more: !1
                            },
                            r = e.term;
                        o = function (t, s) {
                            var i;
                            t.is("option") ? e.matcher(r, t.text(), t) && s.push(c.optionToData(t)) : t.is("optgroup") && (i = c.optionToData(t), t.children().each2(function (e, t) {
                                o(t, i.children)
                            }), i.children.length > 0 && s.push(i))
                        }, s = i.children(), this.getPlaceholder() !== t && s.length > 0 && (n = this.getPlaceholderOption(), n && (s = s.not(n))), s.each2(function (e, t) {
                            o(t, a.results)
                        }), e.callback(a)
                    }), s.id = function (e) {
                        return e.id
                    }) : "query" in s || ("ajax" in s ? (l = s.element.data("ajax-url"), l && l.length > 0 && (s.ajax.url = l), s.query = C.call(s.element, s.ajax)) : "data" in s ? s.query = y(s.data) : "tags" in s && (s.query = x(s.tags), s.createSearchChoice === t && (s.createSearchChoice = function (t) {
                        return {
                            id: e.trim(t),
                            text: e.trim(t)
                        }
                    }), s.initSelection === t && (s.initSelection = function (t, i) {
                        var n = [];
                        e(r(t.val(), s.separator, s.transformVal)).each(function () {
                            var t = {
                                    id: this,
                                    text: this
                                },
                                i = s.tags;
                            e.isFunction(i) && (i = i()), e(i).each(function () {
                                return a(this.id, t.id) ? (t = this, !1) : void 0
                            }), n.push(t)
                        }), i(n)
                    }))), "function" != typeof s.query) throw "query function not defined for Select2 " + s.element.attr("id");
                if ("top" === s.createSearchChoicePosition) s.createSearchChoicePosition = function (e, t) {
                    e.unshift(t)
                };
                else if ("bottom" === s.createSearchChoicePosition) s.createSearchChoicePosition = function (e, t) {
                    e.push(t)
                };
                else if ("function" != typeof s.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return s
            },
            monitorSource: function () {
                var s, i = this.opts.element,
                    n = this;
                i.on("change.select2", this.bind(function (e) {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })), this._sync = this.bind(function () {
                    var e = i.prop("disabled");
                    e === t && (e = !1), this.enable(!e);
                    var s = i.prop("readonly");
                    s === t && (s = !1), this.readonly(s), this.container && (b(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(E(this.opts.containerCssClass, this.opts.element))), this.dropdown && (b(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(E(this.opts.dropdownCssClass, this.opts.element)))
                }), i.length && i[0].attachEvent && i.each(function () {
                    this.attachEvent("onpropertychange", n._sync)
                }), s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s !== t && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new s(function (t) {
                    e.each(t, n._sync)
                }), this.propertyObserver.observe(i.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function (t) {
                var s = e.Event("select2-selecting", {
                    val: this.id(t),
                    object: t,
                    choice: t
                });
                return this.opts.element.trigger(s), !s.isDefaultPrevented()
            },
            triggerChange: function (t) {
                t = t || {}, t = e.extend({}, t, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(t), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function () {
                return this.enabledInterface === !0
            },
            enableInterface: function () {
                var e = this._enabled && !this._readonly,
                    t = !e;
                return e === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = e, !0)
            },
            enable: function (e) {
                e === t && (e = !0), this._enabled !== e && (this._enabled = e, this.opts.element.prop("disabled", !e), this.enableInterface())
            },
            disable: function () {
                this.enable(!1)
            },
            readonly: function (e) {
                e === t && (e = !1), this._readonly !== e && (this._readonly = e, this.opts.element.prop("readonly", e), this.enableInterface())
            },
            opened: function () {
                return this.container ? this.container.hasClass("select2-dropdown-open") : !1
            },
            positionDropdown: function () {
                var t, s, i, n, o, a = this.dropdown,
                    r = this.container,
                    l = r.offset(),
                    c = r.outerHeight(!1),
                    h = r.outerWidth(!1),
                    u = a.outerHeight(!1),
                    d = e(window),
                    p = d.width(),
                    f = d.height(),
                    g = d.scrollLeft() + p,
                    m = d.scrollTop() + f,
                    v = l.top + c,
                    b = l.left,
                    w = m >= v + u,
                    S = l.top - u >= d.scrollTop(),
                    C = a.outerWidth(!1),
                    y = function () {
                        return g >= b + C
                    },
                    x = function () {
                        return l.left + g + r.outerWidth(!1) > C
                    },
                    T = a.hasClass("select2-drop-above");
                T ? (s = !0, !S && w && (i = !0, s = !1)) : (s = !1, !w && S && (i = !0, s = !0)), i && (a.hide(), l = this.container.offset(), c = this.container.outerHeight(!1), h = this.container.outerWidth(!1), u = a.outerHeight(!1), g = d.scrollLeft() + p, m = d.scrollTop() + f, v = l.top + c, b = l.left, C = a.outerWidth(!1), a.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (o = e(".select2-results", a)[0], a.addClass("select2-drop-auto-width"), a.css("width", ""), C = a.outerWidth(!1) + (o.scrollHeight === o.clientHeight ? 0 : N.width), C > h ? h = C : C = h, u = a.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (t = this.body.offset(), v -= t.top, b -= t.left), !y() && x() && (b = l.left + this.container.outerWidth(!1) - C), n = {
                    left: b,
                    width: h
                }, s ? (this.container.addClass("select2-drop-above"), a.addClass("select2-drop-above"), u = a.outerHeight(!1), n.top = l.top - u, n.bottom = "auto") : (n.top = v, n.bottom = "auto", this.container.removeClass("select2-drop-above"), a.removeClass("select2-drop-above")), n = e.extend(n, E(this.opts.dropdownCss, this.opts.element)), a.css(n)
            },
            shouldOpen: function () {
                var t;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (t = e.Event("select2-opening"), this.opts.element.trigger(t), !t.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function () {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            },
            open: function () {
                return this.shouldOpen() ? (this.opening(), H.on("mousemove.select2Event", function (e) {
                    F.x = e.pageX, F.y = e.pageY
                }), !0) : !1
            },
            opening: function () {
                var t, i = this.containerEventName,
                    n = "scroll." + i,
                    o = "resize." + i,
                    a = "orientationchange." + i;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), t = e("#select2-drop-mask"), 0 === t.length && (t = e(document.createElement("div")), t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), t.hide(), t.appendTo(this.body), t.on("mousedown touchstart click", function (i) {
                    s(t);
                    var n, o = e("#select2-drop");
                    o.length > 0 && (n = o.data("select2"), n.opts.selectOnBlur && n.selectHighlighted({
                        noFocus: !0
                    }), n.close(), i.preventDefault(), i.stopPropagation())
                })), this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t), e("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), t.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var r = this;
                this.container.parents().add(window).each(function () {
                    e(this).on(o + " " + n + " " + a, function (e) {
                        r.opened() && r.positionDropdown()
                    })
                })
            },
            close: function () {
                if (this.opened()) {
                    var t = this.containerEventName,
                        s = "scroll." + t,
                        i = "resize." + t,
                        n = "orientationchange." + t;
                    this.container.parents().add(window).each(function () {
                        e(this).off(s).off(i).off(n)
                    }), this.clearDropdownAlignmentPreference(), e("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), H.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.search.removeAttr("aria-activedescendant"), this.opts.element.trigger(e.Event("select2-close"))
                }
            },
            externalSearch: function (e) {
                this.open(), this.search.val(e), this.updateResults(!1)
            },
            clearSearch: function () {},
            prefillNextSearchTerm: function () {
                if ("" !== this.search.val()) return !1;
                var e = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
                return e !== t ? (this.search.val(e), this.search.select(), !0) : !1
            },
            getMaximumSelectionSize: function () {
                return E(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function () {
                var t, s, i, n, o, a, r, l, c = this.results;
                if (s = this.highlight(), !(0 > s)) {
                    if (0 == s) return void c.scrollTop(0);
                    t = this.findHighlightableChoices().find(".select2-result-label"), i = e(t[s]), l = (i.offset() || {}).top || 0, n = l + i.outerHeight(!0), s === t.length - 1 && (r = c.find("li.select2-more-results"), r.length > 0 && (n = r.offset().top + r.outerHeight(!0))), o = c.offset().top + c.outerHeight(!1), n > o && c.scrollTop(c.scrollTop() + (n - o)), a = l - c.offset().top, 0 > a && "none" != i.css("display") && c.scrollTop(c.scrollTop() + a)
                }
            },
            findHighlightableChoices: function () {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function (t) {
                for (var s = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < s.length;) {
                    i += t;
                    var n = e(s[i]);
                    if (n.hasClass("select2-result-selectable") && !n.hasClass("select2-disabled") && !n.hasClass("select2-selected")) {
                        this.highlight(i);
                        break
                    }
                }
            },
            highlight: function (t) {
                var s, i, o = this.findHighlightableChoices();
                return 0 === arguments.length ? n(o.filter(".select2-highlighted")[0], o.get()) : (t >= o.length && (t = o.length - 1), 0 > t && (t = 0), this.removeHighlight(), s = e(o[t]), s.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", s.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(s.text()), i = s.data("select2-data"), void(i && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(i),
                    choice: i
                })))
            },
            removeHighlight: function () {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function () {
                this._touchMoved = !0
            },
            clearTouchMoved: function () {
                this._touchMoved = !1
            },
            countSelectableResults: function () {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function (t) {
                var s = e(t.target).closest(".select2-result-selectable");
                if (s.length > 0 && !s.is(".select2-highlighted")) {
                    var i = this.findHighlightableChoices();
                    this.highlight(i.index(s))
                } else 0 == s.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function () {
                var e, t = this.results,
                    s = t.find("li.select2-more-results"),
                    i = this.resultsPage + 1,
                    n = this,
                    o = this.search.val(),
                    a = this.context;
                0 !== s.length && (e = s.offset().top - t.offset().top - t.height(), e <= this.opts.loadMorePadding && (s.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: o,
                    page: i,
                    context: a,
                    matcher: this.opts.matcher,
                    callback: this.bind(function (e) {
                        n.opened() && (n.opts.populateResults.call(this, t, e.results, {
                            term: o,
                            page: i,
                            context: a
                        }), n.postprocessResults(e, !1, !1), e.more === !0 ? (s.detach().appendTo(t).html(n.opts.escapeMarkup(E(n.opts.formatLoadMore, n.opts.element, i + 1))), window.setTimeout(function () {
                            n.loadMoreIfNeeded()
                        }, 10)) : s.remove(), n.positionDropdown(), n.resultsPage = i, n.context = e.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: e
                        }))
                    })
                })))
            },
            tokenize: function () {},
            updateResults: function (s) {
                function i() {
                    c.removeClass("select2-active"), d.positionDropdown(), h.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? d.liveRegion.text(h.text()) : d.liveRegion.text(d.opts.formatMatches(h.find('.select2-result-selectable:not(".select2-selected")').length))
                }

                function n(e) {
                    h.html(e), i()
                }
                var o, r, l, c = this.search,
                    h = this.results,
                    u = this.opts,
                    d = this,
                    p = c.val(),
                    f = e.data(this.container, "select2-last-term");
                if ((s === !0 || !f || !a(p, f)) && (e.data(this.container, "select2-last-term", p), s === !0 || this.showSearchInput !== !1 && this.opened())) {
                    l = ++this.queryCount;
                    var g = this.getMaximumSelectionSize();
                    if (g >= 1 && (o = this.data(), e.isArray(o) && o.length >= g && T(u.formatSelectionTooBig, "formatSelectionTooBig"))) return void n("<li class='select2-selection-limit'>" + E(u.formatSelectionTooBig, u.element, g) + "</li>");
                    if (c.val().length < u.minimumInputLength) return n(T(u.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + E(u.formatInputTooShort, u.element, c.val(), u.minimumInputLength) + "</li>" : ""), void(s && this.showSearch && this.showSearch(!0));
                    if (u.maximumInputLength && c.val().length > u.maximumInputLength) return void n(T(u.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + E(u.formatInputTooLong, u.element, c.val(), u.maximumInputLength) + "</li>" : "");
                    u.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + E(u.formatSearching, u.element) + "</li>"), c.addClass("select2-active"), this.removeHighlight(), r = this.tokenize(), r != t && null != r && c.val(r), this.resultsPage = 1, u.query({
                        element: u.element,
                        term: c.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: u.matcher,
                        callback: this.bind(function (o) {
                            var r;
                            if (l == this.queryCount) {
                                if (!this.opened()) return void this.search.removeClass("select2-active");
                                if (o.hasError !== t && T(u.formatAjaxError, "formatAjaxError")) return void n("<li class='select2-ajax-error'>" + E(u.formatAjaxError, u.element, o.jqXHR, o.textStatus, o.errorThrown) + "</li>");
                                if (this.context = o.context === t ? null : o.context, this.opts.createSearchChoice && "" !== c.val() && (r = this.opts.createSearchChoice.call(d, c.val(), o.results), r !== t && null !== r && d.id(r) !== t && null !== d.id(r) && 0 === e(o.results).filter(function () {
                                        return a(d.id(this), d.id(r))
                                    }).length && this.opts.createSearchChoicePosition(o.results, r)), 0 === o.results.length && T(u.formatNoMatches, "formatNoMatches")) return n("<li class='select2-no-results'>" + E(u.formatNoMatches, u.element, c.val()) + "</li>"), void(this.showSearch && this.showSearch(c.val()));
                                h.empty(), d.opts.populateResults.call(this, h, o.results, {
                                    term: c.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), o.more === !0 && T(u.formatLoadMore, "formatLoadMore") && (h.append("<li class='select2-more-results'>" + u.escapeMarkup(E(u.formatLoadMore, u.element, this.resultsPage)) + "</li>"), window.setTimeout(function () {
                                    d.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(o, s), i(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: o
                                })
                            }
                        })
                    })
                }
            },
            cancel: function () {
                this.close()
            },
            blur: function () {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function () {
                p(this.search)
            },
            selectHighlighted: function (e) {
                if (this._touchMoved) return void this.clearTouchMoved();
                var t = this.highlight(),
                    s = this.results.find(".select2-highlighted"),
                    i = s.closest(".select2-result").data("select2-data");
                i ? (this.highlight(t), this.onSelect(i, e)) : e && e.noFocus && this.close()
            },
            getPlaceholder: function () {
                var e;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((e = this.getPlaceholderOption()) !== t ? e.text() : t)
            },
            getPlaceholderOption: function () {
                if (this.select) {
                    var s = this.select.children("option").first();
                    if (this.opts.placeholderOption !== t) return "first" === this.opts.placeholderOption && s || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === e.trim(s.text()) && "" === s.val()) return s
                }
            },
            initContainerWidth: function () {
                function t() {
                    var t, s, i, n, o, a;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (t = this.opts.element.attr("style"), "string" == typeof t)
                            for (s = t.split(";"), n = 0, o = s.length; o > n; n += 1)
                                if (a = s[n].replace(/\s/g, ""), i = a.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== i && i.length >= 1) return i[1];
                        return "resolve" === this.opts.width ? (t = this.opts.element.css("width"), t.indexOf("%") > 0 ? t : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return e.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var s = t.call(this);
                null !== s && this.container.css("width", s)
            }
        }), A = k(R, {
            createContainer: function () {
                var t = e(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                return t
            },
            enableInterface: function () {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function () {
                var t, s, i;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), t = this.search.get(0), t.createTextRange ? (s = t.createTextRange(), s.collapse(!1), s.select()) : t.setSelectionRange && (i = this.search.val().length, t.setSelectionRange(i, i))), this.prefillNextSearchTerm(), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(e.Event("select2-open"))
            },
            close: function () {
                this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function () {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function () {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function () {
                this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function () {
                e("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), P.call(this, "selection", "focusser")
            },
            initContainer: function () {
                var t, i, n = this.container,
                    o = this.dropdown,
                    a = L();
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = t = n.find(".select2-choice"), this.focusser = n.find(".select2-focusser"), t.find(".select2-chosen").attr("id", "select2-chosen-" + a), this.focusser.attr("aria-labelledby", "select2-chosen-" + a), this.results.attr("id", "select2-results-" + a), this.search.attr("aria-owns", "select2-results-" + a), this.focusser.attr("id", "s2id_autogen" + a), i = e("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.on("focus.select2", this.bind(function () {
                    this.focus()
                })), this.focusser.prev().text(i.text()).attr("for", this.focusser.attr("id"));
                var r = this.opts.element.attr("title");
                this.opts.element.attr("title", r || i.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(e("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function (e) {
                    if (this.isInterfaceEnabled() && 229 != e.keyCode) {
                        if (e.which === U.PAGE_UP || e.which === U.PAGE_DOWN) return void g(e);
                        switch (e.which) {
                            case U.UP:
                            case U.DOWN:
                                return this.moveHighlight(e.which === U.UP ? -1 : 1), void g(e);
                            case U.ENTER:
                                return this.selectHighlighted(), void g(e);
                            case U.TAB:
                                return void this.selectHighlighted({
                                    noFocus: !0
                                });
                            case U.ESC:
                                return this.cancel(e), void g(e)
                        }
                    }
                })), this.search.on("blur", this.bind(function (e) {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function () {
                        this.opened() && this.results && this.results.length > 1 && this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function (e) {
                    if (this.isInterfaceEnabled() && e.which !== U.TAB && !U.isControl(e) && !U.isFunctionKey(e) && e.which !== U.ESC) {
                        if (this.opts.openOnEnter === !1 && e.which === U.ENTER) return void g(e);
                        if (e.which == U.DOWN || e.which == U.UP || e.which == U.ENTER && this.opts.openOnEnter) {
                            if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;
                            return this.open(), void g(e)
                        }
                        return e.which == U.DELETE || e.which == U.BACKSPACE ? (this.opts.allowClear && this.clear(), void g(e)) : void 0
                    }
                })), c(this.focusser), this.focusser.on("keyup-change input", this.bind(function (e) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (e.stopPropagation(), this.opened()) return;
                        this.open()
                    }
                })), t.on("mousedown touchstart", "abbr", this.bind(function (e) {
                    this.isInterfaceEnabled() && (this.clear(), m(e), this.close(), this.selection && this.selection.focus())
                })), t.on("mousedown touchstart", this.bind(function (i) {
                    s(t), this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), g(i)
                })), o.on("mousedown touchstart", this.bind(function () {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                })), t.on("focus", this.bind(function (e) {
                    g(e)
                })), this.focusser.on("focus", this.bind(function () {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function () {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(e.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function () {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
            },
            clear: function (t) {
                var s = this.selection.data("select2-data");
                if (s) {
                    var i = e.Event("select2-clearing");
                    if (this.opts.element.trigger(i), i.isDefaultPrevented()) return;
                    var n = this.getPlaceholderOption();
                    this.opts.element.val(n ? n.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), t !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(s),
                        choice: s
                    }), this.triggerChange({
                        removed: s
                    }))
                }
            },
            initSelection: function () {
                if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var e = this;
                    this.opts.initSelection.call(null, this.opts.element, function (s) {
                        s !== t && null !== s && (e.updateSelection(s), e.close(), e.setPlaceholder(), e.lastSearchTerm = e.search.val())
                    })
                }
            },
            isPlaceholderOptionSelected: function () {
                var e;
                return this.getPlaceholder() === t ? !1 : (e = this.getPlaceholderOption()) !== t && e.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === t || null === this.opts.element.val()
            },
            prepareOpts: function () {
                var t = this.parent.prepareOpts.apply(this, arguments),
                    s = this;
                return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function (e, t) {
                    var i = e.find("option").filter(function () {
                        return this.selected && !this.disabled
                    });
                    t(s.optionToData(i))
                } : "data" in t && (t.initSelection = t.initSelection || function (s, i) {
                    var n = s.val(),
                        o = null;
                    t.query({
                        matcher: function (e, s, i) {
                            var r = a(n, t.id(i));
                            return r && (o = i), r
                        },
                        callback: e.isFunction(i) ? function () {
                            i(o)
                        } : e.noop
                    })
                }), t
            },
            getPlaceholder: function () {
                return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function () {
                var e = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && e !== t) {
                    if (this.select && this.getPlaceholderOption() === t) return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function (e, t, s) {
                var i = 0,
                    n = this;
                if (this.findHighlightableChoices().each2(function (e, t) {
                        return a(n.id(t.data("select2-data")), n.opts.element.val()) ? (i = e, !1) : void 0
                    }), s !== !1 && (t === !0 && i >= 0 ? this.highlight(i) : this.highlight(0)), t === !0) {
                    var o = this.opts.minimumResultsForSearch;
                    o >= 0 && this.showSearch(O(e.results) >= o)
                }
            },
            showSearch: function (t) {
                this.showSearchInput !== t && (this.showSearchInput = t, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t), e(this.dropdown, this.container).toggleClass("select2-with-searchbox", t))
            },
            onSelect: function (e, t) {
                if (this.triggerSelect(e)) {
                    var s = this.opts.element.val(),
                        i = this.data();
                    this.opts.element.val(this.id(e)), this.updateSelection(e), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(e),
                        choice: e
                    }), this.lastSearchTerm = this.search.val(), this.close(), t && t.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), a(s, this.id(e)) || this.triggerChange({
                        added: e,
                        removed: i
                    })
                }
            },
            updateSelection: function (e) {
                var s, i, n = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", e), n.empty(), null !== e && (s = this.opts.formatSelection(e, n, this.opts.escapeMarkup)), s !== t && n.append(s), i = this.opts.formatSelectionCssClass(e, n), i !== t && n.addClass(i), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear")
            },
            val: function () {
                var e, s = !1,
                    i = null,
                    n = this,
                    o = this.data();
                if (0 === arguments.length) return this.opts.element.val();
                if (e = arguments[0], arguments.length > 1 && (s = arguments[1], this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')), this.select) this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'), this.select.val(e).find("option").filter(function () {
                    return this.selected
                }).each2(function (e, t) {
                    return i = n.optionToData(t), !1
                }), this.updateSelection(i), this.setPlaceholder(), s && this.triggerChange({
                    added: i,
                    removed: o
                });
                else {
                    if (!e && 0 !== e) return void this.clear(s);
                    if (this.opts.initSelection === t) throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(e), this.opts.initSelection(this.opts.element, function (e) {
                        n.opts.element.val(e ? n.id(e) : ""), n.updateSelection(e), n.setPlaceholder(), s && n.triggerChange({
                            added: e,
                            removed: o
                        })
                    })
                }
            },
            clearSearch: function () {
                this.search.val(""), this.focusser.val("")
            },
            data: function (e) {
                var s, i = !1;
                return 0 === arguments.length ? (s = this.selection.data("select2-data"), s == t && (s = null), s) : (this.opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'), arguments.length > 1 && (i = arguments[1]), e ? (s = this.data(), this.opts.element.val(e ? this.id(e) : ""), this.updateSelection(e), i && this.triggerChange({
                    added: e,
                    removed: s
                })) : this.clear(i), void 0)
            }
        }), D = k(R, {
            createContainer: function () {
                var t = e(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return t
            },
            prepareOpts: function () {
                var t = this.parent.prepareOpts.apply(this, arguments),
                    s = this;
                return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function (e, t) {
                    var i = [];
                    e.find("option").filter(function () {
                        return this.selected && !this.disabled
                    }).each2(function (e, t) {
                        i.push(s.optionToData(t))
                    }), t(i)
                } : "data" in t && (t.initSelection = t.initSelection || function (s, i) {
                    var n = r(s.val(), t.separator, t.transformVal),
                        o = [];
                    t.query({
                        matcher: function (s, i, r) {
                            var l = e.grep(n, function (e) {
                                return a(e, t.id(r))
                            }).length;
                            return l && o.push(r), l
                        },
                        callback: e.isFunction(i) ? function () {
                            for (var e = [], s = 0; s < n.length; s++)
                                for (var r = n[s], l = 0; l < o.length; l++) {
                                    var c = o[l];
                                    if (a(r, t.id(c))) {
                                        e.push(c), o.splice(l, 1);
                                        break
                                    }
                                }
                            i(e)
                        } : e.noop
                    })
                }), t
            },
            selectChoice: function (e) {
                var t = this.container.find(".select2-search-choice-focus");
                t.length && e && e[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), e && e.length && (this.close(), e.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", e)))
            },
            destroy: function () {
                e("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), P.call(this, "searchContainer", "selection")
            },
            initContainer: function () {
                var t, s = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = t = this.container.find(s);
                var i = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function (t) {
                    i.search[0].focus(), i.selectChoice(e(this))
                }), this.search.attr("id", "s2id_autogen" + L()), this.search.prev().text(e("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.on("focus.select2", this.bind(function () {
                    this.focus()
                })), this.search.on("input paste", this.bind(function () {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function (e) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var s = t.find(".select2-search-choice-focus"),
                            i = s.prev(".select2-search-choice:not(.select2-locked)"),
                            n = s.next(".select2-search-choice:not(.select2-locked)"),
                            o = f(this.search);
                        if (s.length && (e.which == U.LEFT || e.which == U.RIGHT || e.which == U.BACKSPACE || e.which == U.DELETE || e.which == U.ENTER)) {
                            var a = s;
                            return e.which == U.LEFT && i.length ? a = i : e.which == U.RIGHT ? a = n.length ? n : null : e.which === U.BACKSPACE ? this.unselect(s.first()) && (this.search.width(10), a = i.length ? i : n) : e.which == U.DELETE ? this.unselect(s.first()) && (this.search.width(10), a = n.length ? n : null) : e.which == U.ENTER && (a = null), this.selectChoice(a), g(e), void(a && a.length || this.open())
                        }
                        if ((e.which === U.BACKSPACE && 1 == this.keydowns || e.which == U.LEFT) && 0 == o.offset && !o.length) return this.selectChoice(t.find(".select2-search-choice:not(.select2-locked)").last()), void g(e);
                        if (this.selectChoice(null), this.opened()) switch (e.which) {
                            case U.UP:
                            case U.DOWN:
                                return this.moveHighlight(e.which === U.UP ? -1 : 1), void g(e);
                            case U.ENTER:
                                return this.selectHighlighted(), void g(e);
                            case U.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), void this.close();
                            case U.ESC:
                                return this.cancel(e), void g(e)
                        }
                        if (e.which !== U.TAB && !U.isControl(e) && !U.isFunctionKey(e) && e.which !== U.BACKSPACE && e.which !== U.ESC) {
                            if (e.which === U.ENTER) {
                                if (this.opts.openOnEnter === !1) return;
                                if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return
                            }
                            this.open(), (e.which === U.PAGE_UP || e.which === U.PAGE_DOWN) && g(e), e.which === U.ENTER && g(e)
                        }
                    }
                })), this.search.on("keyup", this.bind(function (e) {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function (t) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), t.stopImmediatePropagation(), this.opts.element.trigger(e.Event("select2-blur"))
                })), this.container.on("click", s, this.bind(function (t) {
                    this.isInterfaceEnabled() && (e(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.open(), this.focusSearch(), t.preventDefault()))
                })), this.container.on("focus", s, this.bind(function () {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
            },
            enableInterface: function () {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function () {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var e = this;
                    this.opts.initSelection.call(null, this.opts.element, function (s) {
                        s !== t && null !== s && (e.updateSelection(s), e.close(), e.clearSearch())
                    })
                }
            },
            clearSearch: function () {
                var e = this.getPlaceholder(),
                    s = this.getMaxSearchWidth();
                e !== t && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(e).addClass("select2-default"), this.search.width(s > 0 ? s : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function () {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function () {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.prefillNextSearchTerm(), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(e.Event("select2-open"))
            },
            close: function () {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function () {
                this.close(), this.search.focus()
            },
            isFocused: function () {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function (t) {
                var s = {},
                    i = [],
                    n = this;
                e(t).each(function () {
                    n.id(this) in s || (s[n.id(this)] = 0, i.push(this))
                }), this.selection.find(".select2-search-choice").remove(), this.addSelectedChoice(i), n.postprocessResults()
            },
            tokenize: function () {
                var e = this.search.val();
                e = this.opts.tokenizer.call(this, e, this.data(), this.bind(this.onSelect), this.opts), null != e && e != t && (this.search.val(e), e.length > 0 && this.open())
            },
            onSelect: function (e, t) {
                this.triggerSelect(e) && "" !== e.text && (this.addSelectedChoice(e), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(e),
                    choice: e
                }), this.lastSearchTerm = this.search.val(), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(e, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.prefillNextSearchTerm() && this.updateResults(), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                    added: e
                }), t && t.noFocus || this.focusSearch())
            },
            cancel: function () {
                this.close(), this.focusSearch()
            },
            addSelectedChoice: function (t) {
                var s = this.getVal(),
                    i = this;
                e(t).each(function () {
                    s.push(i.createChoice(this))
                }), this.setVal(s)
            },
            createChoice: function (s) {
                var i, n, o = !s.locked,
                    a = e("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    r = e("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    l = o ? a : r,
                    c = this.id(s);
                return i = this.opts.formatSelection(s, l.find("div"), this.opts.escapeMarkup), i != t && l.find("div").replaceWith(e("<div></div>").html(i)), n = this.opts.formatSelectionCssClass(s, l.find("div")), n != t && l.addClass(n), o && l.find(".select2-search-choice-close").on("mousedown", g).on("click dblclick", this.bind(function (t) {
                    this.isInterfaceEnabled() && (this.unselect(e(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), g(t), this.close(), this.focusSearch())
                })).on("focus", this.bind(function () {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), l.data("select2-data", s), l.insertBefore(this.searchContainer), c
            },
            unselect: function (t) {
                var s, i, o = this.getVal();
                if (t = t.closest(".select2-search-choice"), 0 === t.length) throw "Invalid argument: " + t + ". Must be .select2-search-choice";
                if (s = t.data("select2-data")) {
                    var a = e.Event("select2-removing");
                    if (a.val = this.id(s), a.choice = s, this.opts.element.trigger(a), a.isDefaultPrevented()) return !1;
                    for (;
                        (i = n(this.id(s), o)) >= 0;) o.splice(i, 1), this.setVal(o), this.select && this.postprocessResults();
                    return t.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(s),
                        choice: s
                    }), this.triggerChange({
                        removed: s
                    }), !0
                }
            },
            postprocessResults: function (e, t, s) {
                var i = this.getVal(),
                    o = this.results.find(".select2-result"),
                    a = this.results.find(".select2-result-with-children"),
                    r = this;
                o.each2(function (e, t) {
                    var s = r.id(t.data("select2-data"));
                    n(s, i) >= 0 && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"))
                }), a.each2(function (e, t) {
                    t.is(".select2-result-selectable") || 0 !== t.find(".select2-result-selectable:not(.select2-selected)").length || t.addClass("select2-selected")
                }), -1 == this.highlight() && s !== !1 && this.opts.closeOnSelect === !0 && r.highlight(0), !this.opts.createSearchChoice && !o.filter(".select2-result:not(.select2-selected)").length > 0 && (!e || e && !e.more && 0 === this.results.find(".select2-no-results").length) && T(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + E(r.opts.formatNoMatches, r.opts.element, r.search.val()) + "</li>")
            },
            getMaxSearchWidth: function () {
                return this.selection.width() - l(this.search)
            },
            resizeSearch: function () {
                var e, t, s, i, n, o = l(this.search);
                e = v(this.search) + 10, t = this.search.offset().left, s = this.selection.width(), i = this.selection.offset().left, n = s - (t - i) - o, e > n && (n = s - o), 40 > n && (n = s - o), 0 >= n && (n = e), this.search.width(Math.floor(n))
            },
            getVal: function () {
                var e;
                return this.select ? (e = this.select.val(), null === e ? [] : e) : (e = this.opts.element.val(), r(e, this.opts.separator, this.opts.transformVal))
            },
            setVal: function (t) {
                if (this.select) this.select.val(t);
                else {
                    var s = [],
                        i = {};
                    e(t).each(function () {
                        this in i || (s.push(this), i[this] = 0)
                    }), this.opts.element.val(0 === s.length ? "" : s.join(this.opts.separator))
                }
            },
            buildChangeDetails: function (e, t) {
                for (var t = t.slice(0), e = e.slice(0), s = 0; s < t.length; s++)
                    for (var i = 0; i < e.length; i++)
                        if (a(this.opts.id(t[s]), this.opts.id(e[i]))) {
                            t.splice(s, 1), s--, e.splice(i, 1);
                            break
                        } return {
                    added: t,
                    removed: e
                }
            },
            val: function (s, i) {
                var n, o = this;
                if (0 === arguments.length) return this.getVal();
                if (n = this.data(), n.length || (n = []), !s && 0 !== s) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(i && this.triggerChange({
                    added: this.data(),
                    removed: n
                }));
                if (this.setVal(s), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), i && this.triggerChange(this.buildChangeDetails(n, this.data()));
                else {
                    if (this.opts.initSelection === t) throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function (t) {
                        var s = e.map(t, o.id);
                        o.setVal(s), o.updateSelection(t), o.clearSearch(), i && o.triggerChange(o.buildChangeDetails(n, o.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function () {
                if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function () {
                var t = [],
                    s = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
                    t.push(s.opts.id(e(this).data("select2-data")))
                }), this.setVal(t), this.triggerChange()
            },
            data: function (t, s) {
                var i, n, o = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function () {
                    return e(this).data("select2-data")
                }).get() : (n = this.data(), t || (t = []), i = e.map(t, function (e) {
                    return o.opts.id(e)
                }), this.setVal(i), this.updateSelection(t), this.clearSearch(), s && this.triggerChange(this.buildChangeDetails(n, this.data())), void 0)
            }
        }), e.fn.select2 = function () {
            var s, i, o, a, r, l = Array.prototype.slice.call(arguments, 0),
                c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                h = ["opened", "isFocused", "container", "dropdown"],
                u = ["val", "data"],
                d = {
                    search: "externalSearch"
                };
            return this.each(function () {
                if (0 === l.length || "object" == typeof l[0]) s = 0 === l.length ? {} : e.extend({}, l[0]), s.element = e(this), "select" === s.element.get(0).tagName.toLowerCase() ? r = s.element.prop("multiple") : (r = s.multiple || !1, "tags" in s && (s.multiple = r = !0)), i = r ? new window.Select2["class"].multi : new window.Select2["class"].single, i.init(s);
                else {
                    if ("string" != typeof l[0]) throw "Invalid arguments to select2 plugin: " + l;
                    if (n(l[0], c) < 0) throw "Unknown method: " + l[0];
                    if (a = t, i = e(this).data("select2"), i === t) return;
                    if (o = l[0], "container" === o ? a = i.container : "dropdown" === o ? a = i.dropdown : (d[o] && (o = d[o]), a = i[o].apply(i, l.slice(1))), n(l[0], h) >= 0 || n(l[0], u) >= 0 && 1 == l.length) return !1
                }
            }), a === t ? this : a
        }, e.fn.select2.defaults = {
            debug: !1,
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function (e, t, s, i) {
                var n = [];
                return w(this.text(e), s.term, n, i), n.join("")
            },
            transformVal: function (t) {
                return e.trim(t)
            },
            formatSelection: function (e, s, i) {
                return e ? i(this.text(e)) : t
            },
            sortResults: function (e, t, s) {
                return e
            },
            formatResultCssClass: function (e) {
                return e.css
            },
            formatSelectionCssClass: function (e, s) {
                return t
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function (e) {
                return e == t ? null : e.id
            },
            text: function (t) {
                return t && this.data && this.data.text ? e.isFunction(this.data.text) ? this.data.text(t) : t[this.data.text] : t.text
            },
            matcher: function (e, t) {
                return i("" + t).toUpperCase().indexOf(i("" + e).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: I,
            escapeMarkup: S,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function (e) {
                return e
            },
            adaptDropdownCssClass: function (e) {
                return null
            },
            nextSearchTerm: function (e, s) {
                return t
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function (e) {
                var t = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
                return t && e.opts.minimumResultsForSearch < 0 ? !1 : !0
            }
        }, e.fn.select2.locales = [], e.fn.select2.locales.en = {
            formatMatches: function (e) {
                return 1 === e ? "One result is available, press enter to select it." : e + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function () {
                return "No matches found"
            },
            formatAjaxError: function (e, t, s) {
                return "Loading failed"
            },
            formatInputTooShort: function (e, t) {
                var s = t - e.length;
                return "Please enter " + s + " or more character" + (1 == s ? "" : "s")
            },
            formatInputTooLong: function (e, t) {
                var s = e.length - t;
                return "Please delete " + s + " character" + (1 == s ? "" : "s")
            },
            formatSelectionTooBig: function (e) {
                return "You can only select " + e + " item" + (1 == e ? "" : "s")
            },
            formatLoadMore: function (e) {
                return "Loading more results…"
            },
            formatSearching: function () {
                return "Searching…"
            }
        }, e.extend(e.fn.select2.defaults, e.fn.select2.locales.en), e.fn.select2.ajaxDefaults = {
            transport: e.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        }, window.Select2 = {
            query: {
                ajax: C,
                local: y,
                tags: x
            },
            util: {
                debounce: u,
                markMatch: w,
                escapeMarkup: S,
                stripDiacritics: i
            },
            "class": {
                "abstract": R,
                single: A,
                multi: D
            }
        }
    }
}(jQuery);
(function (e) {
    var y = !1,
        D = !1,
        J = 5E3,
        K = 2E3,
        x = 0,
        L = function () {
            var e = document.getElementsByTagName("script"),
                e = e[e.length - 1].src.split("?")[0];
            return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
        }();
    Array.prototype.forEach || (Array.prototype.forEach = function (e, c) {
        for (var h = 0, l = this.length; h < l; ++h) e.call(c, this[h], h, this)
    });
    var v = window.requestAnimationFrame || !1,
        w = window.cancelAnimationFrame || !1;
    ["ms", "moz", "webkit", "o"].forEach(function (e) {
        v || (v = window[e + "RequestAnimationFrame"]);
        w || (w = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"])
    });
    var z = window.MutationObserver || window.WebKitMutationObserver || !1,
        F = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: 0.3,
            rtlmode: !1,
            cursordragontouch: !1
        },
        E = !1,
        M = function () {
            if (E) return E;
            var e = document.createElement("DIV"),
                c = {
                    haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
                };
            c.isopera = "opera" in window;
            c.isopera12 = c.isopera && "getUserMedia" in navigator;
            c.isie = "all" in document && "attachEvent" in e && !c.isopera;
            c.isieold = c.isie && !("msInterpolationMode" in e.style);
            c.isie7 = c.isie && !c.isieold && (!("documentMode" in document) || 7 == document.documentMode);
            c.isie8 = c.isie && "documentMode" in document && 8 == document.documentMode;
            c.isie9 = c.isie && "performance" in window && 9 <= document.documentMode;
            c.isie10 = c.isie && "performance" in window && 10 <= document.documentMode;
            c.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
            c.isie9mobile && (c.isie9 = !1);
            c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent);
            c.ismozilla = "MozAppearance" in e.style;
            c.iswebkit = "WebkitAppearance" in e.style;
            c.ischrome = "chrome" in window;
            c.ischrome22 = c.ischrome && c.haspointerlock;
            c.ischrome26 = c.ischrome && "transition" in
                e.style;
            c.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
            c.hasmstouch = window.navigator.msPointerEnabled || !1;
            c.ismac = /^mac$/i.test(navigator.platform);
            c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
            c.isios4 = c.isios && !("seal" in Object);
            c.isandroid = /android/i.test(navigator.userAgent);
            c.trstyle = !1;
            c.hastransform = !1;
            c.hastranslate3d = !1;
            c.transitionstyle = !1;
            c.hastransition = !1;
            c.transitionend = !1;
            for (var h = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], l = 0; l < h.length; l++)
                if ("undefined" != typeof e.style[h[l]]) {
                    c.trstyle = h[l];
                    break
                } c.hastransform = !1 != c.trstyle;
            c.hastransform && (e.style[c.trstyle] = "translate3d(1px,2px,3px)", c.hastranslate3d = /translate3d/.test(e.style[c.trstyle]));
            c.transitionstyle = !1;
            c.prefixstyle = "";
            c.transitionend = !1;
            for (var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), n = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), t = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), l = 0; l < h.length; l++)
                if (h[l] in e.style) {
                    c.transitionstyle = h[l];
                    c.prefixstyle = n[l];
                    c.transitionend = t[l];
                    break
                } c.ischrome26 && (c.prefixstyle = n[1]);
            c.hastransition = c.transitionstyle;
            a: {
                h = ["-moz-grab", "-webkit-grab", "grab"];
                if (c.ischrome && !c.ischrome22 || c.isie) h = [];
                for (l = 0; l < h.length; l++)
                    if (n = h[l], e.style.cursor = n, e.style.cursor == n) {
                        h = n;
                        break a
                    } h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
            }
            c.cursorgrabvalue = h;
            c.hasmousecapture = "setCapture" in e;
            c.hasMutationObserver = !1 !== z;
            return E = c
        },
        N = function (k, c) {
            function h() {
                var d = b.win;
                if ("zIndex" in d) return d.zIndex();
                for (; 0 < d.length && 9 != d[0].nodeType;) {
                    var c = d.css("zIndex");
                    if (!isNaN(c) && 0 != c) return parseInt(c);
                    d = d.parent()
                }
                return !1
            }

            function l(d, c, g) {
                c = d.css(c);
                d = parseFloat(c);
                return isNaN(d) ? (d = u[c] || 0, g = 3 == d ? g ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && d && (d += 1), g ? d : 0) : d
            }

            function n(d, c, g, e) {
                b._bind(d, c, function (b) {
                    b = b ? b : window.event;
                    var e = {
                        original: b,
                        target: b.target || b.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function () {
                            b.preventDefault ? b.preventDefault() : b.returnValue = !1;
                            return !1
                        },
                        stopImmediatePropagation: function () {
                            b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0
                        }
                    };
                    "mousewheel" == c ? (e.deltaY = -0.025 * b.wheelDelta, b.wheelDeltaX && (e.deltaX = -0.025 * b.wheelDeltaX)) : e.deltaY = b.detail;
                    return g.call(d, e)
                }, e)
            }

            function t(d, c, g) {
                var e, f;
                0 == d.deltaMode ? (e = -Math.floor(d.deltaX * (b.opt.mousescrollstep / 54)), f = -Math.floor(d.deltaY * (b.opt.mousescrollstep / 54))) : 1 == d.deltaMode && (e = -Math.floor(d.deltaX * b.opt.mousescrollstep), f = -Math.floor(d.deltaY * b.opt.mousescrollstep));
                c && (0 == e && f) && (e = f, f = 0);
                e && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += e, b.debounced("mousewheelx", function () {
                    var d = b.lastdeltax;
                    b.lastdeltax = 0;
                    b.rail.drag || b.doScrollLeftBy(d)
                }, 120));
                if (f) {
                    if (b.opt.nativeparentscrolling && g && !b.ispage && !b.zoomactive)
                        if (0 > f) {
                            if (b.getScrollTop() >= b.page.maxh) return !0
                        } else if (0 >= b.getScrollTop()) return !0;
                    b.scrollmom && b.scrollmom.stop();
                    b.lastdeltay += f;
                    b.debounced("mousewheely", function () {
                        var d = b.lastdeltay;
                        b.lastdeltay = 0;
                        b.rail.drag || b.doScrollBy(d)
                    }, 120)
                }
                d.stopImmediatePropagation();
                return d.preventDefault()
            }
            var b = this;
            this.version = "3.4.0";
            this.name = "nicescroll";
            this.me = c;
            this.opt = {
                doc: e("body"),
                win: !1
            };
            e.extend(this.opt, F);
            this.opt.snapbackspeed = 80;
            if (k)
                for (var q in b.opt) "undefined" != typeof k[q] && (b.opt[q] = k[q]);
            this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
            this.ispage = /BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName);
            this.haswrapper = !1 !== b.opt.win;
            this.win = b.opt.win || (this.ispage ? e(window) : this.doc);
            this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
            this.body = e("body");
            this.iframe = this.isfixed = this.viewport = !1;
            this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
            this.istextarea = "TEXTAREA" == this.win[0].nodeName;
            this.forcescreen = !1;
            this.canshowonmouseevent = "scroll" != b.opt.autohidemode;
            this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
            this.scroll = {
                x: 0,
                y: 0
            };
            this.scrollratio = {
                x: 0,
                y: 0
            };
            this.cursorheight = 20;
            this.scrollvaluemax = 0;
            this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1;
            do this.id = "ascrail" + K++; while (document.getElementById(this.id));
            this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
            this.visibility = !0;
            this.hidden = this.locked = !1;
            this.cursoractive = !0;
            this.overflowx = b.opt.overflowx;
            this.overflowy = b.opt.overflowy;
            this.nativescrollingarea = !1;
            this.checkarea = 0;
            this.events = [];
            this.saved = {};
            this.delaylist = {};
            this.synclist = {};
            this.lastdeltay = this.lastdeltax = 0;
            this.detected = M();
            var f = e.extend({}, this.detected);
            this.ishwscroll = (this.canhwscroll = f.hastransform && b.opt.hwacceleration) && b.haswrapper;
            this.istouchcapable = !1;
            f.cantouch && (f.ischrome && !f.isios && !f.isandroid) && (this.istouchcapable = !0, f.cantouch = !1);
            f.cantouch && (f.ismozilla && !f.isios) && (this.istouchcapable = !0, f.cantouch = !1);
            b.opt.enablemouselockapi || (f.hasmousecapture = !1, f.haspointerlock = !1);
            this.delayed = function (d, c, g, e) {
                var f = b.delaylist[d],
                    h = (new Date).getTime();
                if (!e && f && f.tt) return !1;
                f && f.tt && clearTimeout(f.tt);
                if (f && f.last + g > h && !f.tt) b.delaylist[d] = {
                    last: h + g,
                    tt: setTimeout(function () {
                        b.delaylist[d].tt = 0;
                        c.call()
                    }, g)
                };
                else if (!f || !f.tt) b.delaylist[d] = {
                    last: h,
                    tt: 0
                }, setTimeout(function () {
                    c.call()
                }, 0)
            };
            this.debounced = function (d, c, g) {
                var f = b.delaylist[d];
                (new Date).getTime();
                b.delaylist[d] = c;
                f || setTimeout(function () {
                    var c = b.delaylist[d];
                    b.delaylist[d] = !1;
                    c.call()
                }, g)
            };
            this.synched = function (d, c) {
                b.synclist[d] = c;
                (function () {
                    b.onsync || (v(function () {
                        b.onsync = !1;
                        for (d in b.synclist) {
                            var c = b.synclist[d];
                            c && c.call(b);
                            b.synclist[d] = !1
                        }
                    }), b.onsync = !0)
                })();
                return d
            };
            this.unsynched = function (d) {
                b.synclist[d] && (b.synclist[d] = !1)
            };
            this.css = function (d, c) {
                for (var g in c) b.saved.css.push([d, g, d.css(g)]), d.css(g, c[g])
            };
            this.scrollTop = function (d) {
                return "undefined" == typeof d ? b.getScrollTop() : b.setScrollTop(d)
            };
            this.scrollLeft = function (d) {
                return "undefined" == typeof d ? b.getScrollLeft() : b.setScrollLeft(d)
            };
            BezierClass = function (b, c, g, f, e, h, l) {
                this.st = b;
                this.ed = c;
                this.spd = g;
                this.p1 = f || 0;
                this.p2 = e || 1;
                this.p3 = h || 0;
                this.p4 = l || 1;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st
            };
            BezierClass.prototype = {
                B2: function (b) {
                    return 3 * b * b * (1 - b)
                },
                B3: function (b) {
                    return 3 * b * (1 - b) * (1 - b)
                },
                B4: function (b) {
                    return (1 - b) * (1 - b) * (1 - b)
                },
                getNow: function () {
                    var b = 1 - ((new Date).getTime() - this.ts) / this.spd,
                        c = this.B2(b) + this.B3(b) + this.B4(b);
                    return 0 > b ? this.ed : this.st + Math.round(this.df * c)
                },
                update: function (b, c) {
                    this.st = this.getNow();
                    this.ed = b;
                    this.spd = c;
                    this.ts = (new Date).getTime();
                    this.df = this.ed - this.st;
                    return this
                }
            };
            if (this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                };
                f.hastranslate3d && f.isios && this.doc.css("-webkit-backface-visibility", "hidden");
                var r = function () {
                    var d = b.doc.css(f.trstyle);
                    return d && "matrix" == d.substr(0, 6) ? d.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
                };
                this.getScrollTop = function (d) {
                    if (!d) {
                        if (d = r()) return 16 == d.length ? -d[13] : -d[5];
                        if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow()
                    }
                    return b.doc.translate.y
                };
                this.getScrollLeft = function (d) {
                    if (!d) {
                        if (d = r()) return 16 == d.length ? -d[12] : -d[4];
                        if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow()
                    }
                    return b.doc.translate.x
                };
                this.notifyScrollEvent = document.createEvent ? function (b) {
                    var c = document.createEvent("UIEvents");
                    c.initUIEvent("scroll", !1, !0, window, 1);
                    b.dispatchEvent(c)
                } : document.fireEvent ? function (b) {
                    var c = document.createEventObject();
                    b.fireEvent("onscroll");
                    c.cancelBubble = !0
                } : function (b, c) {};
                f.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function (d, c) {
                    b.doc.translate.y = d;
                    b.doc.translate.ty = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
                    c || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function (d, c) {
                    b.doc.translate.x = d;
                    b.doc.translate.tx = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
                    c || b.notifyScrollEvent(b.win[0])
                }) : (this.setScrollTop = function (d, c) {
                    b.doc.translate.y = d;
                    b.doc.translate.ty = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
                    c || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function (d, c) {
                    b.doc.translate.x = d;
                    b.doc.translate.tx = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
                    c || b.notifyScrollEvent(b.win[0])
                })
            } else this.getScrollTop = function () {
                return b.docscroll.scrollTop()
            }, this.setScrollTop = function (d) {
                return b.docscroll.scrollTop(d)
            }, this.getScrollLeft = function () {
                return b.docscroll.scrollLeft()
            }, this.setScrollLeft = function (d) {
                return b.docscroll.scrollLeft(d)
            };
            this.getTarget = function (b) {
                return !b ? !1 : b.target ? b.target : b.srcElement ? b.srcElement : !1
            };
            this.hasParent = function (b, c) {
                if (!b) return !1;
                for (var g = b.target || b.srcElement || b || !1; g && g.id != c;) g = g.parentNode || !1;
                return !1 !== g
            };
            var u = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getOffset = function () {
                if (b.isfixed) return {
                    top: parseFloat(b.win.css("top")),
                    left: parseFloat(b.win.css("left"))
                };
                if (!b.viewport) return b.win.offset();
                var d = b.win.offset(),
                    c = b.viewport.offset();
                return {
                    top: d.top - c.top + b.viewport.scrollTop(),
                    left: d.left - c.left + b.viewport.scrollLeft()
                }
            };
            this.updateScrollBar = function (d) {
                if (b.ishwscroll) b.rail.css({
                    height: b.win.innerHeight()
                }), b.railh && b.railh.css({
                    width: b.win.innerWidth()
                });
                else {
                    var c = b.getOffset(),
                        g = c.top,
                        f = c.left,
                        g = g + l(b.win, "border-top-width", !0);
                    b.win.outerWidth();
                    b.win.innerWidth();
                    var f = f + (b.rail.align ? b.win.outerWidth() - l(b.win, "border-right-width") - b.rail.width : l(b.win, "border-left-width")),
                        e = b.opt.railoffset;
                    e && (e.top && (g += e.top), b.rail.align && e.left && (f += e.left));
                    b.locked || b.rail.css({
                        top: g,
                        left: f,
                        height: d ? d.h : b.win.innerHeight()
                    });
                    b.zoom && b.zoom.css({
                        top: g + 1,
                        left: 1 == b.rail.align ? f - 20 : f + b.rail.width + 4
                    });
                    b.railh && !b.locked && (g = c.top, f = c.left, d = b.railh.align ? g + l(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : g + l(b.win, "border-top-width", !0), f += l(b.win, "border-left-width"), b.railh.css({
                        top: d,
                        left: f,
                        width: b.railh.width
                    }))
                }
            };
            this.doRailClick = function (d, c, g) {
                var f;
                b.locked || (b.cancelEvent(d), c ? (c = g ? b.doScrollLeft : b.doScrollTop, f = g ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (d.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, c(f)) : (c = g ? b.doScrollLeftBy : b.doScrollBy, f = g ? b.scroll.x : b.scroll.y, d = g ? d.pageX - b.railh.offset().left : d.pageY - b.rail.offset().top, g = g ? b.view.w : b.view.h, f >= d ? c(g) : c(-g)))
            };
            b.hasanimationframe = v;
            b.hascancelanimationframe = w;
            b.hasanimationframe ? b.hascancelanimationframe || (w = function () {
                b.cancelAnimationFrame = !0
            }) : (v = function (b) {
                return setTimeout(b, 15 - Math.floor(+new Date / 1E3) % 16)
            }, w = clearInterval);
            this.init = function () {
                b.saved.css = [];
                if (f.isie7mobile) return !0;
                f.hasmstouch && b.css(b.ispage ? e("html") : b.win, {
                    "-ms-touch-action": "none"
                });
                b.zindex = "auto";
                b.zindex = !b.ispage && "auto" == b.opt.zindex ? h() || "auto" : b.opt.zindex;
                !b.ispage && "auto" != b.zindex && b.zindex > x && (x = b.zindex);
                b.isie && (0 == b.zindex && "auto" == b.opt.zindex) && (b.zindex = "auto");
                if (!b.ispage || !f.cantouch && !f.isieold && !f.isie9mobile) {
                    var d = b.docscroll;
                    b.ispage && (d = b.haswrapper ? b.win : b.doc);
                    f.isie9mobile || b.css(d, {
                        "overflow-y": "hidden"
                    });
                    b.ispage && f.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(e("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == b.doc[0].nodeName && b.css(e("body"), {
                        "overflow-y": "hidden"
                    }));
                    f.isios && (!b.ispage && !b.haswrapper) && b.css(e("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var c = e(document.createElement("div"));
                    c.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: b.opt.cursorwidth,
                        height: "0px",
                        "background-color": b.opt.cursorcolor,
                        border: b.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": b.opt.cursorborderradius,
                        "-moz-border-radius": b.opt.cursorborderradius,
                        "border-radius": b.opt.cursorborderradius
                    });
                    c.hborder = parseFloat(c.outerHeight() - c.innerHeight());
                    b.cursor = c;
                    var g = e(document.createElement("div"));
                    g.attr("id", b.id);
                    g.addClass("nicescroll-rails");
                    var l, k, n = ["left", "right"],
                        G;
                    for (G in n) k = n[G], (l = b.opt.railpadding[k]) ? g.css("padding-" + k, l + "px") : b.opt.railpadding[k] = 0;
                    g.append(c);
                    g.width = Math.max(parseFloat(b.opt.cursorwidth), c.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right;
                    g.css({
                        width: g.width + "px",
                        zIndex: b.zindex,
                        background: b.opt.background,
                        cursor: "default"
                    });
                    g.visibility = !0;
                    g.scrollable = !0;
                    g.align = "left" == b.opt.railalign ? 0 : 1;
                    b.rail = g;
                    c = b.rail.drag = !1;
                    b.opt.boxzoom && (!b.ispage && !f.isieold) && (c = document.createElement("div"), b.bind(c, "click", b.doZoom), b.zoom = e(c), b.zoom.css({
                        cursor: "pointer",
                        "z-index": b.zindex,
                        backgroundImage: "url(" + L + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), f.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function (d) {
                        1.5 < d.scale && b.doZoomIn(d);
                        0.8 > d.scale && b.doZoomOut(d);
                        return b.cancelEvent(d)
                    }, b.bind(b.win, "gestureend", b.ongesturezoom)));
                    b.railh = !1;
                    if (b.opt.horizrailenabled) {
                        b.css(d, {
                            "overflow-x": "hidden"
                        });
                        c = e(document.createElement("div"));
                        c.css({
                            position: "relative",
                            top: 0,
                            height: b.opt.cursorwidth,
                            width: "0px",
                            "background-color": b.opt.cursorcolor,
                            border: b.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": b.opt.cursorborderradius,
                            "-moz-border-radius": b.opt.cursorborderradius,
                            "border-radius": b.opt.cursorborderradius
                        });
                        c.wborder = parseFloat(c.outerWidth() - c.innerWidth());
                        b.cursorh = c;
                        var m = e(document.createElement("div"));
                        m.attr("id", b.id + "-hr");
                        m.addClass("nicescroll-rails");
                        m.height = Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight());
                        m.css({
                            height: m.height + "px",
                            zIndex: b.zindex,
                            background: b.opt.background
                        });
                        m.append(c);
                        m.visibility = !0;
                        m.scrollable = !0;
                        m.align = "top" == b.opt.railvalign ? 0 : 1;
                        b.railh = m;
                        b.railh.drag = !1
                    }
                    b.ispage ? (g.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    }), g.align ? g.css({
                        right: "0px"
                    }) : g.css({
                        left: "0px"
                    }), b.body.append(g), b.railh && (m.css({
                        position: "fixed",
                        left: "0px",
                        width: "100%"
                    }), m.align ? m.css({
                        bottom: "0px"
                    }) : m.css({
                        top: "0px"
                    }), b.body.append(m))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, {
                        position: "relative"
                    }), d = "HTML" == b.win[0].nodeName ? b.body : b.win, b.zoom && (b.zoom.css({
                        position: "absolute",
                        top: 1,
                        right: 0,
                        "margin-right": g.width + 4
                    }), d.append(b.zoom)), g.css({
                        position: "absolute",
                        top: 0
                    }), g.align ? g.css({
                        right: 0
                    }) : g.css({
                        left: 0
                    }), d.append(g), m && (m.css({
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }), m.align ? m.css({
                        bottom: 0
                    }) : m.css({
                        top: 0
                    }), d.append(m))) : (b.isfixed = "fixed" == b.win.css("position"), d = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, !1 == /relative|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {
                        position: "relative"
                    })), g.css({
                        position: d
                    }), b.zoom && b.zoom.css({
                        position: d
                    }), b.updateScrollBar(), b.body.append(g), b.zoom && b.body.append(b.zoom), b.railh && (m.css({
                        position: d
                    }), b.body.append(m))), f.isios && b.css(b.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), f.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), f.iswebkit && b.opt.disableoutline && b.win.css({
                        outline: "none"
                    }));
                    !1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({
                        opacity: b.opt.cursoropacitymax
                    }), b.railh && b.railh.css({
                        opacity: b.opt.cursoropacitymax
                    })) : !0 === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.locked = !1);
                    if (f.isie9mobile) b.scrollmom = new H(b), b.onmangotouch = function (d) {
                        d = b.getScrollTop();
                        var c = b.getScrollLeft();
                        if (d == b.scrollmom.lastscrolly && c == b.scrollmom.lastscrollx) return !0;
                        var g = d - b.mangotouch.sy,
                            f = c - b.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)))) {
                            var p = 0 > g ? -1 : 1,
                                e = 0 > f ? -1 : 1,
                                h = +new Date;
                            b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy);
                            80 < h - b.mangotouch.tm || b.mangotouch.dry != p || b.mangotouch.drx != e ? (b.scrollmom.stop(), b.scrollmom.reset(c, d), b.mangotouch.sy = d, b.mangotouch.ly = d, b.mangotouch.sx = c, b.mangotouch.lx = c, b.mangotouch.dry = p, b.mangotouch.drx = e, b.mangotouch.tm = h) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - f, b.mangotouch.sy - g), b.mangotouch.tm = h, g = Math.max(Math.abs(b.mangotouch.ly - d), Math.abs(b.mangotouch.lx - c)), b.mangotouch.ly = d, b.mangotouch.lx = c, 2 < g && (b.mangotouch.lazy = setTimeout(function () {
                                b.mangotouch.lazy = !1;
                                b.mangotouch.dry = 0;
                                b.mangotouch.drx = 0;
                                b.mangotouch.tm = 0;
                                b.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }, g = b.getScrollTop(), m = b.getScrollLeft(), b.mangotouch = {
                        sy: g,
                        ly: g,
                        dry: 0,
                        sx: m,
                        lx: m,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, b.bind(b.docscroll, "scroll", b.onmangotouch);
                    else {
                        if (f.cantouch || b.istouchcapable || b.opt.touchbehavior || f.hasmstouch) {
                            b.scrollmom = new H(b);
                            b.ontouchstart = function (d) {
                                if (d.pointerType && 2 != d.pointerType) return !1;
                                if (!b.locked) {
                                    if (f.hasmstouch)
                                        for (var c = d.target ? d.target : !1; c;) {
                                            var g = e(c).getNiceScroll();
                                            if (0 < g.length && g[0].me == b.me) break;
                                            if (0 < g.length) return !1;
                                            if ("DIV" == c.nodeName && c.id == b.id) break;
                                            c = c.parentNode ? c.parentNode : !1
                                        }
                                    b.cancelScroll();
                                    if ((c = b.getTarget(d)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return b.stopPropagation(d);
                                    !("clientX" in d) && "changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
                                    b.forcescreen && (g = d, d = {
                                        original: d.original ? d.original : d
                                    }, d.clientX = g.screenX, d.clientY = g.screenY);
                                    b.rail.drag = {
                                        x: d.clientX,
                                        y: d.clientY,
                                        sx: b.scroll.x,
                                        sy: b.scroll.y,
                                        st: b.getScrollTop(),
                                        sl: b.getScrollLeft(),
                                        pt: 2,
                                        dl: !1
                                    };
                                    if (b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";
                                    else {
                                        var g = e(window).width(),
                                            p = e(window).height(),
                                            h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                            l = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                                            p = Math.max(0, l - p),
                                            g = Math.max(0, h - g);
                                        b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? 0 < p ? "v" : !1 : b.rail.scrollable && !b.railh.scrollable ? 0 < g ? "h" : !1 : !1;
                                        b.rail.drag.ck || (b.rail.drag.dl = "f")
                                    }
                                    b.opt.touchbehavior && (b.isiframe && f.isie) && (g = b.win.position(), b.rail.drag.x += g.left, b.rail.drag.y += g.top);
                                    b.hasmoving = !1;
                                    b.lastmouseup = !1;
                                    b.scrollmom.reset(d.clientX, d.clientY);
                                    if (!f.cantouch && !this.istouchcapable && !f.hasmstouch) {
                                        if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !b.ispage && f.hasmousecapture && c.setCapture(), b.cancelEvent(d);
                                        /SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")) && (pc = {
                                            tg: c,
                                            click: !1
                                        }, b.preventclick = pc)
                                    }
                                }
                            };
                            b.ontouchend = function (d) {
                                if (d.pointerType && 2 != d.pointerType) return !1;
                                if (b.rail.drag && 2 == b.rail.drag.pt && (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.hasmoving = !1, b.lastmouseup = !0, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), !f.cantouch))) return b.cancelEvent(d)
                            };
                            var q = b.opt.touchbehavior && b.isiframe && !f.hasmousecapture;
                            b.ontouchmove = function (d, c) {
                                if (d.pointerType && 2 != d.pointerType) return !1;
                                if (b.rail.drag && 2 == b.rail.drag.pt) {
                                    if (f.cantouch && "undefined" == typeof d.original) return !0;
                                    b.hasmoving = !0;
                                    b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick);
                                    d = e.extend({
                                        original: d
                                    }, d);
                                    "changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
                                    if (b.forcescreen) {
                                        var g = d;
                                        d = {
                                            original: d.original ? d.original : d
                                        };
                                        d.clientX = g.screenX;
                                        d.clientY = g.screenY
                                    }
                                    g = ofy = 0;
                                    if (q && !c) {
                                        var p = b.win.position(),
                                            g = -p.left;
                                        ofy = -p.top
                                    }
                                    var h = d.clientY + ofy,
                                        p = h - b.rail.drag.y,
                                        l = d.clientX + g,
                                        k = l - b.rail.drag.x,
                                        s = b.rail.drag.st - p;
                                    b.ishwscroll && b.opt.bouncescroll ? 0 > s ? s = Math.round(s / 2) : s > b.page.maxh && (s = b.page.maxh + Math.round((s - b.page.maxh) / 2)) : (0 > s && (h = s = 0), s > b.page.maxh && (s = b.page.maxh, h = 0));
                                    if (b.railh && b.railh.scrollable) {
                                        var m = b.rail.drag.sl - k;
                                        b.ishwscroll && b.opt.bouncescroll ? 0 > m ? m = Math.round(m / 2) : m > b.page.maxw && (m = b.page.maxw + Math.round((m - b.page.maxw) / 2)) : (0 > m && (l = m = 0), m > b.page.maxw && (m = b.page.maxw, l = 0))
                                    }
                                    g = !1;
                                    if (b.rail.drag.dl) g = !0, "v" == b.rail.drag.dl ? m = b.rail.drag.sl : "h" == b.rail.drag.dl && (s = b.rail.drag.st);
                                    else {
                                        var p = Math.abs(p),
                                            k = Math.abs(k),
                                            n = b.opt.directionlockdeadzone;
                                        if ("v" == b.rail.drag.ck) {
                                            if (p > n && k <= 0.3 * p) return b.rail.drag = !1, !0;
                                            k > n && (b.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
                                        } else if ("h" == b.rail.drag.ck) {
                                            if (k > n && p <= 0.3 * az) return b.rail.drag = !1, !0;
                                            p > n && (b.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
                                        }
                                    }
                                    b.synched("touchmove", function () {
                                        b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(s), b.scrollmom.update(l, h), b.railh && b.railh.scrollable ? (b.setScrollLeft(m), b.showCursor(s, m)) : b.showCursor(s), f.isie10 && document.selection.clear())
                                    });
                                    f.ischrome && b.istouchcapable && (g = !1);
                                    if (g) return b.cancelEvent(d)
                                }
                            }
                        }
                        b.onmousedown = function (d, c) {
                            if (!(b.rail.drag && 1 != b.rail.drag.pt)) {
                                if (b.locked) return b.cancelEvent(d);
                                b.cancelScroll();
                                b.rail.drag = {
                                    x: d.clientX,
                                    y: d.clientY,
                                    sx: b.scroll.x,
                                    sy: b.scroll.y,
                                    pt: 1,
                                    hr: !!c
                                };
                                var g = b.getTarget(d);
                                !b.ispage && f.hasmousecapture && g.setCapture();
                                b.isiframe && !f.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
                                    "pointer-events": "none"
                                }));
                                return b.cancelEvent(d)
                            }
                        };
                        b.onmouseup = function (d) {
                            if (b.rail.drag && (f.hasmousecapture && document.releaseCapture(), b.isiframe && !f.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 1 == b.rail.drag.pt)) return b.rail.drag = !1, b.cancelEvent(d)
                        };
                        b.onmousemove = function (d) {
                            if (b.rail.drag && 1 == b.rail.drag.pt) {
                                if (f.ischrome && 0 == d.which) return b.onmouseup(d);
                                b.cursorfreezed = !0;
                                if (b.rail.drag.hr) {
                                    b.scroll.x = b.rail.drag.sx + (d.clientX - b.rail.drag.x);
                                    0 > b.scroll.x && (b.scroll.x = 0);
                                    var c = b.scrollvaluemaxw;
                                    b.scroll.x > c && (b.scroll.x = c)
                                } else b.scroll.y = b.rail.drag.sy + (d.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), c = b.scrollvaluemax, b.scroll.y > c && (b.scroll.y = c);
                                b.synched("mousemove", function () {
                                    b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
                                });
                                return b.cancelEvent(d)
                            }
                        };
                        if (f.cantouch || b.opt.touchbehavior) b.onpreventclick = function (d) {
                            if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(d)
                        }, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = f.isios ? !1 : function (d) {
                            return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(d)) : !0
                        }, b.opt.grabcursorenabled && f.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, {
                            cursor: f.cursorgrabvalue
                        }), b.css(b.rail, {
                            cursor: f.cursorgrabvalue
                        }));
                        else {
                            var r = function (d) {
                                if (b.selectiondrag) {
                                    if (d) {
                                        var c = b.win.outerHeight();
                                        d = d.pageY - b.selectiondrag.top;
                                        0 < d && d < c && (d = 0);
                                        d >= c && (d -= c);
                                        b.selectiondrag.df = d
                                    }
                                    0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function () {
                                        r()
                                    }, 50))
                                }
                            };
                            b.hasTextSelected = "getSelection" in document ? function () {
                                return 0 < document.getSelection().rangeCount
                            } : "selection" in document ? function () {
                                return "None" != document.selection.type
                            } : function () {
                                return !1
                            };
                            b.onselectionstart = function (d) {
                                b.ispage || (b.selectiondrag = b.win.offset())
                            };
                            b.onselectionend = function (d) {
                                b.selectiondrag = !1
                            };
                            b.onselectiondrag = function (d) {
                                b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function () {
                                    r(d)
                                }, 250)
                            }
                        }
                        f.hasmstouch && (b.css(b.rail, {
                            "-ms-touch-action": "none"
                        }), b.css(b.cursor, {
                            "-ms-touch-action": "none"
                        }), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function (b) {
                            b.preventDefault()
                        }), b.bind(b.cursor, "contextmenu", function (b) {
                            b.preventDefault()
                        }));
                        this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove));
                        b.bind(b.cursor, "mousedown", b.onmousedown);
                        b.bind(b.cursor, "mouseup", b.onmouseup);
                        b.railh && (b.bind(b.cursorh, "mousedown", function (d) {
                            b.onmousedown(d, !0)
                        }), b.bind(b.cursorh, "mouseup", function (d) {
                            if (!(b.rail.drag && 2 == b.rail.drag.pt)) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), b.cancelEvent(d)
                        }));
                        if (b.opt.cursordragontouch || !f.cantouch && !b.opt.touchbehavior) b.rail.css({
                            cursor: "default"
                        }), b.railh && b.railh.css({
                            cursor: "default"
                        }), b.jqbind(b.rail, "mouseenter", function () {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.rail, "mouseleave", function () {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.rail, "click", function (d) {
                            b.doRailClick(d, !1, !1)
                        }), b.bind(b.rail, "dblclick", function (d) {
                            b.doRailClick(d, !0, !1)
                        }), b.bind(b.cursor, "click", function (d) {
                            b.cancelEvent(d)
                        }), b.bind(b.cursor, "dblclick", function (d) {
                            b.cancelEvent(d)
                        })), b.railh && (b.jqbind(b.railh, "mouseenter", function () {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.railh, "mouseleave", function () {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.railh, "click", function (d) {
                            b.doRailClick(d, !1, !0)
                        }), b.bind(b.railh, "dblclick", function (d) {
                            b.doRailClick(d, !0, !0)
                        }), b.bind(b.cursorh, "click", function (d) {
                            b.cancelEvent(d)
                        }), b.bind(b.cursorh, "dblclick", function (d) {
                            b.cancelEvent(d)
                        })));
                        !f.cantouch && !b.opt.touchbehavior ? (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function () {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.zoom, "mouseleave", function () {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }))) : (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch && (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mousemove", b.onmousemove), b.cursorh && b.bind(b.cursorh, "mousedown", b.onmousedown), b.cursorh && b.bind(b.cursorh, "mousemove", b.onmousemove)));
                        b.opt.enablemousewheel && (b.isiframe || b.bind(f.isie && b.ispage ? document : b.docscroll, "mousewheel", b.onmousewheel), b.bind(b.rail, "mousewheel", b.onmousewheel), b.railh && b.bind(b.railh, "mousewheel", b.onmousewheelhr));
                        !b.ispage && (!f.cantouch && !/HTML|BODY/.test(b.win[0].nodeName)) && (b.win.attr("tabindex") || b.win.attr({
                            tabindex: J++
                        }), b.jqbind(b.win, "focus", function (d) {
                            y = b.getTarget(d).id || !0;
                            b.hasfocus = !0;
                            b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "blur", function (d) {
                            y = !1;
                            b.hasfocus = !1
                        }), b.jqbind(b.win, "mouseenter", function (d) {
                            D = b.getTarget(d).id || !0;
                            b.hasmousefocus = !0;
                            b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "mouseleave", function () {
                            D = !1;
                            b.hasmousefocus = !1
                        }))
                    }
                    b.onkeypress = function (d) {
                        if (b.locked && 0 == b.page.maxh) return !0;
                        d = d ? d : window.e;
                        var c = b.getTarget(d);
                        if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp)) return !0;
                        if (b.hasfocus || b.hasmousefocus && !y || b.ispage && !y && !D) {
                            c = d.keyCode;
                            if (b.locked && 27 != c) return b.cancelEvent(d);
                            var g = d.ctrlKey || !1,
                                p = d.shiftKey || !1,
                                f = !1;
                            switch (c) {
                                case 38:
                                case 63233:
                                    b.doScrollBy(72);
                                    f = !0;
                                    break;
                                case 40:
                                case 63235:
                                    b.doScrollBy(-72);
                                    f = !0;
                                    break;
                                case 37:
                                case 63232:
                                    b.railh && (g ? b.doScrollLeft(0) : b.doScrollLeftBy(72), f = !0);
                                    break;
                                case 39:
                                case 63234:
                                    b.railh && (g ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), f = !0);
                                    break;
                                case 33:
                                case 63276:
                                    b.doScrollBy(b.view.h);
                                    f = !0;
                                    break;
                                case 34:
                                case 63277:
                                    b.doScrollBy(-b.view.h);
                                    f = !0;
                                    break;
                                case 36:
                                case 63273:
                                    b.railh && g ? b.doScrollPos(0, 0) : b.doScrollTo(0);
                                    f = !0;
                                    break;
                                case 35:
                                case 63275:
                                    b.railh && g ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh);
                                    f = !0;
                                    break;
                                case 32:
                                    b.opt.spacebarenabled && (p ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), f = !0);
                                    break;
                                case 27:
                                    b.zoomactive && (b.doZoom(), f = !0)
                            }
                            if (f) return b.cancelEvent(d)
                        }
                    };
                    b.opt.enablekeyboard && b.bind(document, f.isopera && !f.isopera12 ? "keypress" : "keydown", b.onkeypress);
                    b.bind(window, "resize", b.lazyResize);
                    b.bind(window, "orientationchange", b.lazyResize);
                    b.bind(window, "load", b.lazyResize);
                    if (f.ischrome && !b.ispage && !b.haswrapper) {
                        var t = b.win.attr("style"),
                            g = parseFloat(b.win.css("width")) + 1;
                        b.win.css("width", g);
                        b.synched("chromefix", function () {
                            b.win.attr("style", t)
                        })
                    }
                    b.onAttributeChange = function (d) {
                        b.lazyResize(250)
                    };
                    !b.ispage && !b.haswrapper && (!1 !== z ? (b.observer = new z(function (d) {
                        d.forEach(b.onAttributeChange)
                    }), b.observer.observe(b.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), b.observerremover = new z(function (d) {
                        d.forEach(function (d) {
                            if (0 < d.removedNodes.length)
                                for (var c in d.removedNodes)
                                    if (d.removedNodes[c] == b.win[0]) return b.remove()
                        })
                    }), b.observerremover.observe(b.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (b.bind(b.win, f.isie && !f.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), f.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function (d) {
                        d.target == b.win[0] && b.remove()
                    })));
                    !b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom);
                    b.istextarea && b.bind(b.win, "mouseup", b.lazyResize);
                    b.checkrtlmode = !0;
                    b.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var I = function (d) {
                        b.iframexd = !1;
                        try {
                            var c = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                        } catch (g) {
                            b.iframexd = !0, c = !1
                        }
                        if (b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        b.forcescreen = !0;
                        b.isiframe && (b.iframe = {
                            doc: e(c),
                            html: b.doc.contents().find("html")[0],
                            body: b.doc.contents().find("body")[0]
                        }, b.getContentSize = function () {
                            return {
                                w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
                                h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
                            }
                        }, b.docscroll = e(b.iframe.body));
                        !f.isios && (b.opt.iframeautoresize && !b.isiframe) && (b.win.scrollTop(0), b.doc.height(""), d = Math.max(c.getElementsByTagName("html")[0].scrollHeight, c.body.scrollHeight), b.doc.height(d));
                        b.lazyResize(30);
                        f.isie7 && b.css(e(b.iframe.html), {
                            "overflow-y": "hidden"
                        });
                        b.css(e(b.iframe.body), {
                            "overflow-y": "hidden"
                        });
                        "contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(c, "scroll", b.onscroll);
                        b.opt.enablemousewheel && b.bind(c, "mousewheel", b.onmousewheel);
                        b.opt.enablekeyboard && b.bind(c, f.isopera ? "keypress" : "keydown", b.onkeypress);
                        if (f.cantouch || b.opt.touchbehavior) b.bind(c, "mousedown", b.onmousedown), b.bind(c, "mousemove", function (d) {
                            b.onmousemove(d, !0)
                        }), b.opt.grabcursorenabled && f.cursorgrabvalue && b.css(e(c.body), {
                            cursor: f.cursorgrabvalue
                        });
                        b.bind(c, "mouseup", b.onmouseup);
                        b.zoom && (b.opt.dblclickzoom && b.bind(c, "dblclick", b.doZoom), b.ongesturezoom && b.bind(c, "gestureend", b.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                        I.call(b.doc[0], !1)
                    }, 500);
                    b.bind(this.doc, "load", I)
                }
            };
            this.showCursor = function (d, c) {
                b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0);
                if (b.rail) {
                    b.autohidedom && (b.autohidedom.stop().css({
                        opacity: b.opt.cursoropacitymax
                    }), b.cursoractive = !0);
                    if (!b.rail.drag || 1 != b.rail.drag.pt) "undefined" != typeof d && !1 !== d && (b.scroll.y = Math.round(1 * d / b.scrollratio.y)), "undefined" != typeof c && (b.scroll.x = Math.round(1 * c / b.scrollratio.x));
                    b.cursor.css({
                        height: b.cursorheight,
                        top: b.scroll.y
                    });
                    b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({
                        width: b.cursorwidth,
                        left: b.scroll.x + b.rail.width
                    }) : b.cursorh.css({
                        width: b.cursorwidth,
                        left: b.scroll.x
                    }), b.cursoractive = !0);
                    b.zoom && b.zoom.stop().css({
                        opacity: b.opt.cursoropacitymax
                    })
                }
            };
            this.hideCursor = function (d) {
                !b.cursortimeout && (b.rail && b.autohidedom) && (b.cursortimeout = setTimeout(function () {
                    if (!b.rail.active || !b.showonmouseevent) b.autohidedom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.zoom && b.zoom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.cursoractive = !1;
                    b.cursortimeout = 0
                }, d || b.opt.hidecursordelay))
            };
            this.noticeCursor = function (d, c, g) {
                b.showCursor(c, g);
                b.rail.active || b.hideCursor(d)
            };
            this.getContentSize = b.ispage ? function () {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : b.haswrapper ? function () {
                return {
                    w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
                    h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
                }
            } : function () {
                return {
                    w: b.docscroll[0].scrollWidth,
                    h: b.docscroll[0].scrollHeight
                }
            };
            this.onResize = function (d, c) {
                if (!b.win) return !1;
                if (!b.haswrapper && !b.ispage) {
                    if ("none" == b.win.css("display")) return b.visibility && b.hideRail().hideRailHr(), !1;
                    !b.hidden && !b.visibility && b.showRail().showRailHr()
                }
                var g = b.page.maxh,
                    f = b.page.maxw,
                    e = b.view.w;
                b.view = {
                    w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
                    h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
                };
                b.page = c ? c : b.getContentSize();
                b.page.maxh = Math.max(0, b.page.h - b.view.h);
                b.page.maxw = Math.max(0, b.page.w - b.view.w);
                if (b.page.maxh == g && b.page.maxw == f && b.view.w == e) {
                    if (b.ispage) return b;
                    g = b.win.offset();
                    if (b.lastposition && (f = b.lastposition, f.top == g.top && f.left == g.left)) return b;
                    b.lastposition = g
                }
                0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0;
                0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0;
                b.locked = 0 == b.page.maxh && 0 == b.page.maxw;
                if (b.locked) return b.ispage || b.updateScrollBar(b.view), !1;
                !b.hidden && !b.visibility ? b.showRail().showRailHr() : !b.hidden && !b.railh.visibility && b.showRailHr();
                b.istextarea && (b.win.css("resize") && "none" != b.win.css("resize")) && (b.view.h -= 20);
                b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h)));
                b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight);
                b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w)));
                b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth);
                b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder;
                b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder);
                b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && 0 == b.scroll.x && b.setScrollLeft(b.page.maxw));
                b.ispage || b.updateScrollBar(b.view);
                b.scrollratio = {
                    x: b.page.maxw / b.scrollvaluemaxw,
                    y: b.page.maxh / b.scrollvaluemax
                };
                b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor());
                b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y));
                return b
            };
            this.resize = b.onResize;
            this.lazyResize = function (d) {
                d = isNaN(d) ? 30 : d;
                b.delayed("resize", b.resize, d);
                return b
            };
            this._bind = function (d, c, g, f) {
                b.events.push({
                    e: d,
                    n: c,
                    f: g,
                    b: f,
                    q: !1
                });
                d.addEventListener ? d.addEventListener(c, g, f || !1) : d.attachEvent ? d.attachEvent("on" + c, g) : d["on" + c] = g
            };
            this.jqbind = function (d, c, g) {
                b.events.push({
                    e: d,
                    n: c,
                    f: g,
                    q: !0
                });
                e(d).bind(c, g)
            };
            this.bind = function (d, c, g, e) {
                var h = "jquery" in d ? d[0] : d;
                "mousewheel" == c ? "onwheel" in b.win ? b._bind(h, "wheel", g, e || !1) : (d = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", n(h, d, g, e || !1), "DOMMouseScroll" == d && n(h, "MozMousePixelScroll", g, e || !1)) : h.addEventListener ? (f.cantouch && /mouseup|mousedown|mousemove/.test(c) && b._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove", function (b) {
                    if (b.touches) {
                        if (2 > b.touches.length) {
                            var d = b.touches.length ? b.touches[0] : b;
                            d.original = b;
                            g.call(this, d)
                        }
                    } else b.changedTouches && (d = b.changedTouches[0], d.original = b, g.call(this, d))
                }, e || !1), b._bind(h, c, g, e || !1), f.cantouch && "mouseup" == c && b._bind(h, "touchcancel", g, e || !1)) : b._bind(h, c, function (d) {
                    if ((d = d || window.event || !1) && d.srcElement) d.target = d.srcElement;
                    "pageY" in d || (d.pageX = d.clientX + document.documentElement.scrollLeft, d.pageY = d.clientY + document.documentElement.scrollTop);
                    return !1 === g.call(h, d) || !1 === e ? b.cancelEvent(d) : !0
                })
            };
            this._unbind = function (b, c, g, f) {
                b.removeEventListener ? b.removeEventListener(c, g, f) : b.detachEvent ? b.detachEvent("on" + c, g) : b["on" + c] = !1
            };
            this.unbindAll = function () {
                for (var d = 0; d < b.events.length; d++) {
                    var c = b.events[d];
                    c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b)
                }
            };
            this.cancelEvent = function (b) {
                b = b.original ? b.original : b ? b : window.event || !1;
                if (!b) return !1;
                b.preventDefault && b.preventDefault();
                b.stopPropagation && b.stopPropagation();
                b.preventManipulation && b.preventManipulation();
                b.cancelBubble = !0;
                b.cancel = !0;
                return b.returnValue = !1
            };
            this.stopPropagation = function (b) {
                b = b.original ? b.original : b ? b : window.event || !1;
                if (!b) return !1;
                if (b.stopPropagation) return b.stopPropagation();
                b.cancelBubble && (b.cancelBubble = !0);
                return !1
            };
            this.showRail = function () {
                if (0 != b.page.maxh && (b.ispage || "none" != b.win.css("display"))) b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block");
                return b
            };
            this.showRailHr = function () {
                if (!b.railh) return b;
                if (0 != b.page.maxw && (b.ispage || "none" != b.win.css("display"))) b.railh.visibility = !0, b.railh.css("display", "block");
                return b
            };
            this.hideRail = function () {
                b.visibility = !1;
                b.rail.visibility = !1;
                b.rail.css("display", "none");
                return b
            };
            this.hideRailHr = function () {
                if (!b.railh) return b;
                b.railh.visibility = !1;
                b.railh.css("display", "none");
                return b
            };
            this.show = function () {
                b.hidden = !1;
                b.locked = !1;
                return b.showRail().showRailHr()
            };
            this.hide = function () {
                b.hidden = !0;
                b.locked = !0;
                return b.hideRail().hideRailHr()
            };
            this.toggle = function () {
                return b.hidden ? b.show() : b.hide()
            };
            this.remove = function () {
                b.stop();
                b.cursortimeout && clearTimeout(b.cursortimeout);
                b.doZoomOut();
                b.unbindAll();
                !1 !== b.observer && b.observer.disconnect();
                !1 !== b.observerremover && b.observerremover.disconnect();
                b.events = [];
                b.cursor && (b.cursor.remove(), b.cursor = null);
                b.cursorh && (b.cursorh.remove(), b.cursorh = null);
                b.rail && (b.rail.remove(), b.rail = null);
                b.railh && (b.railh.remove(), b.railh = null);
                b.zoom && (b.zoom.remove(), b.zoom = null);
                for (var d = 0; d < b.saved.css.length; d++) {
                    var c = b.saved.css[d];
                    c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
                }
                b.saved = !1;
                b.me.data("__nicescroll", "");
                b.me = null;
                b.doc = null;
                b.docscroll = null;
                b.win = null;
                return b
            };
            this.scrollstart = function (d) {
                this.onscrollstart = d;
                return b
            };
            this.scrollend = function (d) {
                this.onscrollend = d;
                return b
            };
            this.scrollcancel = function (d) {
                this.onscrollcancel = d;
                return b
            };
            this.zoomin = function (d) {
                this.onzoomin = d;
                return b
            };
            this.zoomout = function (d) {
                this.onzoomout = d;
                return b
            };
            this.isScrollable = function (b) {
                b = b.target ? b.target : b;
                if ("OPTION" == b.nodeName) return !0;
                for (; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
                    var c = e(b),
                        c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                    if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight;
                    b = b.parentNode ? b.parentNode : !1
                }
                return !1
            };
            this.getViewport = function (b) {
                for (b = b && b.parentNode ? b.parentNode : !1; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
                    var c = e(b),
                        g = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                    if (/scroll|auto/.test(g) && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length) return c;
                    b = b.parentNode ? b.parentNode : !1
                }
                return !1
            };
            this.onmousewheel = function (d) {
                if (b.locked) return !0;
                if (b.rail.drag) return b.cancelEvent(d);
                if (!b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : !0;
                var c = +new Date,
                    g = !1;
                b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);
                b.checkarea = c;
                if (b.nativescrollingarea) return !0;
                if (d = t(d, !1, g)) b.checkarea = 0;
                return d
            };
            this.onmousewheelhr = function (d) {
                if (b.locked || !b.railh.scrollable) return !0;
                if (b.rail.drag) return b.cancelEvent(d);
                var c = +new Date,
                    g = !1;
                b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);
                b.checkarea = c;
                return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(d) : t(d, !0, g)
            };
            this.stop = function () {
                b.cancelScroll();
                b.scrollmon && b.scrollmon.stop();
                b.cursorfreezed = !1;
                b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
                b.noticeCursor();
                return b
            };
            this.getTransitionSpeed = function (c) {
                var f = Math.round(10 * b.opt.scrollspeed);
                c = Math.min(f, Math.round(c / 20 * b.opt.scrollspeed));
                return 20 < c ? c : 0
            };
            b.opt.smoothscroll ? b.ishwscroll && f.hastransition && b.opt.usetransition ? (this.prepareTransition = function (c, e) {
                var g = e ? 20 < c ? c : 0 : b.getTransitionSpeed(c),
                    h = g ? f.prefixstyle + "transform " + g + "ms ease-out" : "";
                if (!b.lasttransitionstyle || b.lasttransitionstyle != h) b.lasttransitionstyle = h, b.doc.css(f.transitionstyle, h);
                return g
            }, this.doScrollLeft = function (c, f) {
                var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(c, g, f)
            }, this.doScrollTop = function (c, f) {
                var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(g, c, f)
            }, this.doScrollPos = function (c, e, g) {
                var h = b.getScrollTop(),
                    l = b.getScrollLeft();
                (0 > (b.newscrolly - h) * (e - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
                !1 == b.opt.bouncescroll && (0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh), 0 > c ? c = 0 : c > b.page.maxw && (c = b.page.maxw));
                if (b.scrollrunning && c == b.newscrollx && e == b.newscrolly) return !1;
                b.newscrolly = e;
                b.newscrollx = c;
                b.newscrollspeed = g || !1;
                if (b.timer) return !1;
                b.timer = setTimeout(function () {
                    var g = b.getScrollTop(),
                        h = b.getScrollLeft(),
                        l, k;
                    l = c - h;
                    k = e - g;
                    l = Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(k, 2)));
                    l = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed : b.getTransitionSpeed(l);
                    b.newscrollspeed && 1 >= b.newscrollspeed && (l *= b.newscrollspeed);
                    b.prepareTransition(l, !0);
                    b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                    0 < l && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: h,
                            y: g
                        },
                        request: {
                            x: c,
                            y: e
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: l
                    }), f.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, f.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollEnd, l)), b.timerscroll = {
                        bz: new BezierClass(g, b.newscrolly, l, 0, 0, 0.58, 1),
                        bh: new BezierClass(h, b.newscrollx, l, 0, 0, 0.58, 1)
                    }, b.cursorfreezed || (b.timerscroll.tm = setInterval(function () {
                        b.showCursor(b.getScrollTop(), b.getScrollLeft())
                    }, 60)));
                    b.synched("doScroll-set", function () {
                        b.timer = 0;
                        b.scrollendtrapped && (b.scrollrunning = !0);
                        b.setScrollTop(b.newscrolly);
                        b.setScrollLeft(b.newscrollx);
                        if (!b.scrollendtrapped) b.onScrollEnd()
                    })
                }, 50)
            }, this.cancelScroll = function () {
                if (!b.scrollendtrapped) return !0;
                var c = b.getScrollTop(),
                    e = b.getScrollLeft();
                b.scrollrunning = !1;
                f.transitionend || clearTimeout(f.transitionend);
                b.scrollendtrapped = !1;
                b._unbind(b.doc, f.transitionend, b.onScrollEnd);
                b.prepareTransition(0);
                b.setScrollTop(c);
                b.railh && b.setScrollLeft(e);
                b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                b.timerscroll = !1;
                b.cursorfreezed = !1;
                b.showCursor(c, e);
                return b
            }, this.onScrollEnd = function () {
                b.scrollendtrapped && b._unbind(b.doc, f.transitionend, b.onScrollEnd);
                b.scrollendtrapped = !1;
                b.prepareTransition(0);
                b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                b.timerscroll = !1;
                var c = b.getScrollTop(),
                    e = b.getScrollLeft();
                b.setScrollTop(c);
                b.railh && b.setScrollLeft(e);
                b.noticeCursor(!1, c, e);
                b.cursorfreezed = !1;
                0 > c ? c = 0 : c > b.page.maxh && (c = b.page.maxh);
                0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw);
                if (c != b.newscrolly || e != b.newscrollx) return b.doScrollPos(e, c, b.opt.snapbackspeed);
                b.onscrollend && b.scrollrunning && b.onscrollend.call(b, {
                    type: "scrollend",
                    current: {
                        x: e,
                        y: c
                    },
                    end: {
                        x: b.newscrollx,
                        y: b.newscrolly
                    }
                });
                b.scrollrunning = !1
            }) : (this.doScrollLeft = function (c, f) {
                var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(c, g, f)
            }, this.doScrollTop = function (c, f) {
                var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(g, c, f)
            }, this.doScrollPos = function (c, f, g) {
                function e() {
                    if (b.cancelAnimationFrame) return !0;
                    b.scrollrunning = !0;
                    if (r = 1 - r) return b.timer = v(e) || 1;
                    var c = 0,
                        d = sy = b.getScrollTop();
                    if (b.dst.ay) {
                        var d = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly,
                            g = d - sy;
                        if (0 > g && d < b.newscrolly || 0 < g && d > b.newscrolly) d = b.newscrolly;
                        b.setScrollTop(d);
                        d == b.newscrolly && (c = 1)
                    } else c = 1;
                    var f = sx = b.getScrollLeft();
                    if (b.dst.ax) {
                        f = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx;
                        g = f - sx;
                        if (0 > g && f < b.newscrollx || 0 < g && f > b.newscrollx) f = b.newscrollx;
                        b.setScrollLeft(f);
                        f == b.newscrollx && (c += 1)
                    } else c += 1;
                    2 == c ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > d ? d = 0 : d > b.page.maxh && (d = b.page.maxh), 0 > f ? f = 0 : f > b.page.maxw && (f = b.page.maxw), f != b.newscrollx || d != b.newscrolly ? b.doScrollPos(f, d) : b.onscrollend && b.onscrollend.call(b, {
                        type: "scrollend",
                        current: {
                            x: sx,
                            y: sy
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        }
                    })) : b.timer = v(e) || 1
                }
                f = "undefined" == typeof f || !1 === f ? b.getScrollTop(!0) : f;
                if (b.timer && b.newscrolly == f && b.newscrollx == c) return !0;
                b.timer && w(b.timer);
                b.timer = 0;
                var h = b.getScrollTop(),
                    l = b.getScrollLeft();
                (0 > (b.newscrolly - h) * (f - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
                b.newscrolly = f;
                b.newscrollx = c;
                if (!b.bouncescroll || !b.rail.visibility) 0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh);
                if (!b.bouncescroll || !b.railh.visibility) 0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw);
                b.dst = {};
                b.dst.x = c - l;
                b.dst.y = f - h;
                b.dst.px = l;
                b.dst.py = h;
                var k = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
                b.dst.ax = b.dst.x / k;
                b.dst.ay = b.dst.y / k;
                var n = 0,
                    q = k;
                0 == b.dst.x ? (n = h, q = f, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (n = l, q = c, b.dst.ax = 1, b.dst.px = 0);
                k = b.getTransitionSpeed(k);
                g && 1 >= g && (k *= g);
                b.bzscroll = 0 < k ? b.bzscroll ? b.bzscroll.update(q, k) : new BezierClass(n, q, k, 0, 1, 0, 1) : !1;
                if (!b.timer) {
                    (h == b.page.maxh && f >= b.page.maxh || l == b.page.maxw && c >= b.page.maxw) && b.checkContentSize();
                    var r = 1;
                    b.cancelAnimationFrame = !1;
                    b.timer = 1;
                    b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: l,
                            y: h
                        },
                        request: {
                            x: c,
                            y: f
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: k
                    });
                    e();
                    (h == b.page.maxh && f >= h || l == b.page.maxw && c >= l) && b.checkContentSize();
                    b.noticeCursor()
                }
            }, this.cancelScroll = function () {
                b.timer && w(b.timer);
                b.timer = 0;
                b.bzscroll = !1;
                b.scrollrunning = !1;
                return b
            }) : (this.doScrollLeft = function (c, f) {
                var g = b.getScrollTop();
                b.doScrollPos(c, g, f)
            }, this.doScrollTop = function (c, f) {
                var g = b.getScrollLeft();
                b.doScrollPos(g, c, f)
            }, this.doScrollPos = function (c, f, g) {
                var e = c > b.page.maxw ? b.page.maxw : c;
                0 > e && (e = 0);
                var h = f > b.page.maxh ? b.page.maxh : f;
                0 > h && (h = 0);
                b.synched("scroll", function () {
                    b.setScrollTop(h);
                    b.setScrollLeft(e)
                })
            }, this.cancelScroll = function () {});
            this.doScrollBy = function (c, f) {
                var g = 0,
                    g = f ? Math.floor((b.scroll.y - c) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - c;
                if (b.bouncescroll) {
                    var e = Math.round(b.view.h / 2);
                    g < -e ? g = -e : g > b.page.maxh + e && (g = b.page.maxh + e)
                }
                b.cursorfreezed = !1;
                py = b.getScrollTop(!0);
                if (0 > g && 0 >= py) return b.noticeCursor();
                if (g > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor();
                b.doScrollTop(g)
            };
            this.doScrollLeftBy = function (c, f) {
                var g = 0,
                    g = f ? Math.floor((b.scroll.x - c) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - c;
                if (b.bouncescroll) {
                    var e = Math.round(b.view.w / 2);
                    g < -e ? g = -e : g > b.page.maxw + e && (g = b.page.maxw + e)
                }
                b.cursorfreezed = !1;
                px = b.getScrollLeft(!0);
                if (0 > g && 0 >= px || g > b.page.maxw && px >= b.page.maxw) return b.noticeCursor();
                b.doScrollLeft(g)
            };
            this.doScrollTo = function (c, f) {
                f && Math.round(c * b.scrollratio.y);
                b.cursorfreezed = !1;
                b.doScrollTop(c)
            };
            this.checkContentSize = function () {
                var c = b.getContentSize();
                (c.h != b.page.h || c.w != b.page.w) && b.resize(!1, c)
            };
            b.onscroll = function (c) {
                b.rail.drag || b.cursorfreezed || b.synched("scroll", function () {
                    b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
                    b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)));
                    b.noticeCursor()
                })
            };
            b.bind(b.docscroll, "scroll", b.onscroll);
            this.doZoomIn = function (c) {
                if (!b.zoomactive) {
                    b.zoomactive = !0;
                    b.zoomrestore = {
                        style: {}
                    };
                    var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                        g = b.win[0].style,
                        l;
                    for (l in h) {
                        var k = h[l];
                        b.zoomrestore.style[k] = "undefined" != typeof g[k] ? g[k] : ""
                    }
                    b.zoomrestore.style.width = b.win.css("width");
                    b.zoomrestore.style.height = b.win.css("height");
                    b.zoomrestore.padding = {
                        w: b.win.outerWidth() - b.win.width(),
                        h: b.win.outerHeight() - b.win.height()
                    };
                    f.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
                    b.win.css({
                        position: f.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": x + 100,
                        margin: "0px"
                    });
                    h = b.win.css("backgroundColor");
                    ("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && b.win.css("backgroundColor", "#fff");
                    b.rail.css({
                        "z-index": x + 101
                    });
                    b.zoom.css({
                        "z-index": x + 102
                    });
                    b.zoom.css("backgroundPosition", "0px -18px");
                    b.resizeZoom();
                    b.onzoomin && b.onzoomin.call(b);
                    return b.cancelEvent(c)
                }
            };
            this.doZoomOut = function (c) {
                if (b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), f.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({
                    "z-index": b.zindex
                }), b.zoom.css({
                    "z-index": b.zindex
                }), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(c)
            };
            this.doZoom = function (c) {
                return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c)
            };
            this.resizeZoom = function () {
                if (b.zoomactive) {
                    var c = b.getScrollTop();
                    b.win.css({
                        width: e(window).width() - b.zoomrestore.padding.w + "px",
                        height: e(window).height() - b.zoomrestore.padding.h + "px"
                    });
                    b.onResize();
                    b.setScrollTop(Math.min(b.page.maxh, c))
                }
            };
            this.init();
            e.nicescroll.push(this)
        },
        H = function (e) {
            var c = this;
            this.nc = e;
            this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
            this.snapy = this.snapx = !1;
            this.demuly = this.demulx = 0;
            this.lastscrolly = this.lastscrollx = -1;
            this.timer = this.chky = this.chkx = 0;
            this.time = function () {
                return +new Date
            };
            this.reset = function (e, l) {
                c.stop();
                var k = c.time();
                c.steptime = 0;
                c.lasttime = k;
                c.speedx = 0;
                c.speedy = 0;
                c.lastx = e;
                c.lasty = l;
                c.lastscrollx = -1;
                c.lastscrolly = -1
            };
            this.update = function (e, l) {
                var k = c.time();
                c.steptime = k - c.lasttime;
                c.lasttime = k;
                var k = l - c.lasty,
                    t = e - c.lastx,
                    b = c.nc.getScrollTop(),
                    q = c.nc.getScrollLeft(),
                    b = b + k,
                    q = q + t;
                c.snapx = 0 > q || q > c.nc.page.maxw;
                c.snapy = 0 > b || b > c.nc.page.maxh;
                c.speedx = t;
                c.speedy = k;
                c.lastx = e;
                c.lasty = l
            };
            this.stop = function () {
                c.nc.unsynched("domomentum2d");
                c.timer && clearTimeout(c.timer);
                c.timer = 0;
                c.lastscrollx = -1;
                c.lastscrolly = -1
            };
            this.doSnapy = function (e, l) {
                var k = !1;
                0 > l ? (l = 0, k = !0) : l > c.nc.page.maxh && (l = c.nc.page.maxh, k = !0);
                0 > e ? (e = 0, k = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, k = !0);
                k && c.nc.doScrollPos(e, l, c.nc.opt.snapbackspeed)
            };
            this.doMomentum = function (e) {
                var l = c.time(),
                    k = e ? l + e : c.lasttime;
                e = c.nc.getScrollLeft();
                var t = c.nc.getScrollTop(),
                    b = c.nc.page.maxh,
                    q = c.nc.page.maxw;
                c.speedx = 0 < q ? Math.min(60, c.speedx) : 0;
                c.speedy = 0 < b ? Math.min(60, c.speedy) : 0;
                k = k && 50 >= l - k;
                if (0 > t || t > b || 0 > e || e > q) k = !1;
                e = c.speedx && k ? c.speedx : !1;
                if (c.speedy && k && c.speedy || e) {
                    var f = Math.max(16, c.steptime);
                    50 < f && (e = f / 50, c.speedx *= e, c.speedy *= e, f = 50);
                    c.demulxy = 0;
                    c.lastscrollx = c.nc.getScrollLeft();
                    c.chkx = c.lastscrollx;
                    c.lastscrolly = c.nc.getScrollTop();
                    c.chky = c.lastscrolly;
                    var r = c.lastscrollx,
                        u = c.lastscrolly,
                        d = function () {
                            var e = 600 < c.time() - l ? 0.04 : 0.02;
                            if (c.speedx && (r = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = r, 0 > r || r > q)) e = 0.1;
                            if (c.speedy && (u = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = u, 0 > u || u > b)) e = 0.1;
                            c.demulxy = Math.min(1, c.demulxy + e);
                            c.nc.synched("domomentum2d", function () {
                                c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), c.chkx = r, c.nc.setScrollLeft(r));
                                c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = u, c.nc.setScrollTop(u));
                                c.timer || (c.nc.hideCursor(), c.doSnapy(r, u))
                            });
                            1 > c.demulxy ? c.timer = setTimeout(d, f) : (c.stop(), c.nc.hideCursor(), c.doSnapy(r, u))
                        };
                    d()
                } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
            }
        },
        A = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (k, c, h) {
            return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : A.call(k)
        },
        set: function (k, c) {
            var h = e.data(k, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : A.call(k, c);
            return this
        }
    };
    e.fn.scrollTop = function (k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollTop() : A.call(this)
        }
        return this.each(function () {
            var c = e.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : A.call(e(this), k)
        })
    };
    var B = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {
        get: function (k, c, h) {
            return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : B.call(k)
        },
        set: function (k, c) {
            var h = e.data(k, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c);
            return this
        }
    };
    e.fn.scrollLeft = function (k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollLeft() : B.call(this)
        }
        return this.each(function () {
            var c = e.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(e(this), k)
        })
    };
    var C = function (k) {
        var c = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function (e) {
            for (var h = 0; h < c.length; h++) e.call(c[h]);
            return c
        };
        this.push = function (e) {
            c[c.length] = e;
            c.length++
        };
        this.eq = function (e) {
            return c[e]
        };
        if (k)
            for (a = 0; a < k.length; a++) {
                var h = e.data(k[a], "__nicescroll") || !1;
                h && (this[this.length] = h, this.length++)
            }
        return this
    };
    (function (e, c, h) {
        for (var l = 0; l < c.length; l++) h(e, c[l])
    })(C.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, c) {
        e[c] = function () {
            var e = arguments;
            return this.each(function () {
                this[c].apply(this, e)
            })
        }
    });
    e.fn.getNiceScroll = function (k) {
        return "undefined" == typeof k ? new C(this) : e.data(this[k], "__nicescroll") || !1
    };
    e.extend(e.expr[":"], {
        nicescroll: function (k) {
            return e.data(k, "__nicescroll") ? !0 : !1
        }
    });
    e.fn.niceScroll = function (k, c) {
        "undefined" == typeof c && ("object" == typeof k && !("jquery" in k)) && (c = k, k = !1);
        var h = new C;
        "undefined" == typeof c && (c = {});
        k && (c.doc = e(k), c.win = e(this));
        var l = !("doc" in c);
        !l && !("win" in c) && (c.win = e(this));
        this.each(function () {
            var k = e(this).data("__nicescroll") || !1;
            k || (c.doc = l ? e(this) : c.doc, k = new N(c, e(this)), e(this).data("__nicescroll", k));
            h.push(k)
        });
        return 1 == h.length ? h[0] : h
    };
    window.NiceScroll = {
        getjQuery: function () {
            return e
        }
    };
    e.nicescroll || (e.nicescroll = new C, e.nicescroll.options = F)
})(jQuery);
! function (e) {
    e.fn.hoverIntent = function (t, n, o) {
        var r = {
            interval: 50,
            sensitivity: 6,
            timeout: 0
        };
        r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
            over: t,
            out: n,
            selector: o
        }) : e.extend(r, {
            over: t,
            out: t,
            selector: n
        });
        var v, i, u, s, h = function (e) {
                v = e.pageX, i = e.pageY
            },
            I = function (t, n) {
                return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((u - v) * (u - v) + (s - i) * (s - i)) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = !0, r.over.apply(n, [t])) : (u = v, s = i, n.hoverIntent_t = setTimeout(function () {
                    I(t, n)
                }, r.interval), void 0)
            },
            a = function (e, t) {
                return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, r.out.apply(t, [e])
            },
            c = function (t) {
                var n = e.extend({}, t),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" === t.type ? (u = n.pageX, s = n.pageY, e(o).on("mousemove.hoverIntent", h), o.hoverIntent_s || (o.hoverIntent_t = setTimeout(function () {
                    I(n, o)
                }, r.interval))) : (e(o).off("mousemove.hoverIntent", h), o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function () {
                    a(n, o)
                }, r.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": c,
            "mouseleave.hoverIntent": c
        }, r.selector)
    }
}(jQuery);
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function t(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {}
    }

    function r(n, o) {
        var i = u.raw ? n : t(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g,
        u = e.cookie = function (t, c, s) {
            if (arguments.length > 1 && !e.isFunction(c)) {
                if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
                    var a = s.expires,
                        d = s.expires = new Date;
                    d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
                }
                return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
                var x = p[l].split("="),
                    g = o(x.shift()),
                    j = x.join("=");
                if (t === g) {
                    f = r(j, c);
                    break
                }
                t || void 0 === (j = r(j)) || (f[g] = j)
            }
            return f
        };
    u.defaults = {}, e.removeCookie = function (n, o) {
        return e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n)
    }
});
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function (b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
}); /* == malihu jquery custom scrollbar plugin == Version: 3.1.1, License: MIT License (MIT) */
! function (e) {
    "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function (e) {
    ! function (t) {
        var o = "function" == typeof define && define.amd,
            a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t()
    }(function () {
        var t, o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function (t) {
                    var t = e.extend(!0, {}, i, t),
                        o = f.call(this);
                    if (t.live) {
                        var s = t.liveSelector || this.selector || n,
                            c = e(s);
                        if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function () {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
                        }, 500)
                    } else m(s);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
                        var o = e(this);
                        if (!o.data(a)) {
                            o.data(a, {
                                idx: ++r,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: o.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
                        }
                    })
                },
                update: function (t, o) {
                    var n = t || f.call(this);
                    return e(n).each(function () {
                        var t = e(this);
                        if (t.data(a)) {
                            var n = t.data(a),
                                i = n.opt,
                                r = e("#mCSB_" + n.idx + "_container"),
                                l = e("#mCSB_" + n.idx),
                                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                            if (!r.length) return;
                            n.tweenRunning && N(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (V(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && V(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (V(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && V(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), j.call(this)
                        }
                    })
                },
                scrollTo: function (t, o) {
                    if ("undefined" != typeof t && null != t) {
                        var n = f.call(this);
                        return e(n).each(function () {
                            var n = e(this);
                            if (n.data(a)) {
                                var i = n.data(a),
                                    r = i.opt,
                                    l = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    s = e.extend(!0, {}, l, o),
                                    c = q.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = Y.call(this, c[0], "y"), c[1] = Y.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = d, setTimeout(function () {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", V(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", V(n, c[1].toString(), s))
                                }, s.timeout)
                            }
                        })
                    }
                },
                stop: function () {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var t = e(this);
                        t.data(a) && N(t)
                    })
                },
                disable: function (t) {
                    var o = f.call(this);
                    return e(o).each(function () {
                        var o = e(this);
                        if (o.data(a)) {
                            {
                                o.data(a)
                            }
                            j.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3])
                        }
                    })
                },
                destroy: function () {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), j.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), K(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                        }
                    })
                }
            },
            f = function () {
                return "object" != typeof e(this) || e(this).length < 1 ? n : this
            },
            h = function (t) {
                var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
            },
            m = function (e) {
                l[e] && (clearTimeout(l[e]), K(l, e))
            },
            p = function (e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
            },
            g = function (e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
            },
            v = function () {
                var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir=" + n.langDir + " /></div>");
                var m = e("#mCSB_" + n.idx),
                    p = e("#mCSB_" + n.idx + "_container");
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
                var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            },
            x = function (t) {
                var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
                        return e(this).outerWidth(!0)
                    }).get())],
                    a = t.parent().width();
                return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
            },
            _ = function () {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    i.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                        width: r,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : i.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            },
            w = function () {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = ee(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
            },
            S = function () {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({
                    height: d,
                    "max-height": r[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": c[0] + "px"
                }), r[1].css({
                    width: u,
                    "max-width": r[1].parent().width() - 10
                })
            },
            b = function () {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = {
                    y: s[0],
                    x: s[1]
                }
            },
            C = function (e, t, o) {
                var a = o ? d[0] + "_expanded" : "",
                    n = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
            },
            y = function () {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                    s = i[0].scrollHeight,
                    c = i[0].scrollWidth;
                return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
            },
            B = function () {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                if (N(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), V(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                    var s = dx = 0;
                    "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), V(t, "_resetX")
                }
            },
            T = function () {
                function t() {
                    r = setTimeout(function () {
                        e.event.special.mousewheel ? (clearTimeout(r), E.call(o[0])) : t()
                    }, 100)
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt;
                if (!n.bindEvents) {
                    if (I.call(this), i.contentTouchScroll && D.call(this), R.call(this), i.mouseWheel.enable) {
                        var r;
                        t()
                    }
                    z.call(this), P.call(this), i.advanced.autoScrollOnFocus && A.call(this), i.scrollButtons.enable && H.call(this), i.keyboard.enable && U.call(this), n.bindEvents = !0
                }
            },
            k = function () {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), o.bindEvents && (e(document).unbind("." + i), l.each(function () {
                    e(this).unbind("." + i)
                }), clearTimeout(t[0]._focusTimeout), K(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), K(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), K(s[0], "onCompleteTimeout"), o.bindEvents = !1)
            },
            M = function (t) {
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
            },
            O = function (e) {
                var t = e.type;
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
                    default:
                        return [e.pageY, e.pageX, !1]
                }
            },
            I = function () {
                function t(e) {
                    var t = m.find("iframe");
                    if (t.length) {
                        var o = e ? "auto" : "none";
                        t.css("pointer-events", o)
                    }
                }

                function o(e, t, o, a) {
                    if (m[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === h[1]) var i = "x",
                        r = (n[0].offsetLeft - t + a) * d.scrollRatio.x;
                    else var i = "y",
                        r = (n[0].offsetTop - e + o) * d.scrollRatio.y;
                    V(l, r.toString(), {
                        dir: i,
                        drag: !0
                    })
                }
                var n, i, r, l = e(this),
                    d = l.data(a),
                    u = d.opt,
                    f = a + "_" + d.idx,
                    h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                    m = e("#mCSB_" + d.idx + "_container"),
                    p = e("#" + h[0] + ",#" + h[1]),
                    g = u.advanced.releaseDraggableSelectors ? p.add(e(u.advanced.releaseDraggableSelectors)) : p;
                p.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function (o) {
                    if (o.stopImmediatePropagation(), o.preventDefault(), Z(o)) {
                        c = !0, s && (document.onselectstart = function () {
                            return !1
                        }), t(!1), N(l), n = e(this);
                        var a = n.offset(),
                            d = O(o)[0] - a.top,
                            f = O(o)[1] - a.left,
                            h = n.height() + a.top,
                            m = n.width() + a.left;
                        h > d && d > 0 && m > f && f > 0 && (i = d, r = f), C(n, "active", u.autoExpandScrollbar)
                    }
                }).bind("touchmove." + f, function (e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var t = n.offset(),
                        a = O(e)[0] - t.top,
                        l = O(e)[1] - t.left;
                    o(i, r, a, l)
                }), e(document).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function (e) {
                    if (n) {
                        var t = n.offset(),
                            a = O(e)[0] - t.top,
                            l = O(e)[1] - t.left;
                        if (i === a && r === l) return;
                        o(i, r, a, l)
                    }
                }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function (e) {
                    n && (C(n, "active", u.autoExpandScrollbar), n = null), c = !1, s && (document.onselectstart = null), t(!0)
                })
            },
            D = function () {
                function o(e) {
                    if (!$(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
                    var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, A = [O(e)[0], O(e)[1]]
                }

                function n(e) {
                    if ($(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
                        g = G();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left,
                            n = "mcsLinearOut";
                        if (R.push(o), E.push(a), A[2] = Math.abs(O(e)[0] - A[0]), A[3] = Math.abs(O(e)[1] - A[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * A[3] < A[2] || "yx" === T.axis);
                        if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * A[2] < A[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], L, n, "y", "all", !0), B.overflowed[1] && s(w[1], L, n, "x", z, !0)
                    }
                }

                function i(e) {
                    if (!$(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), N(y), p = G();
                    var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, R = [], E = []
                }

                function r(e) {
                    if ($(e) && !c && !O(e)[2]) {
                        d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = G();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            _ = 1e3 / (v - p);
                            var n = "mcsEaseOut",
                                i = 2.5 > _,
                                r = i ? [R[R.length - 2], E[E.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                            var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                            var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", z, !1), B.overflowed[1] && s(w[1], S[1], n, "x", z, !1)
                        }
                    }
                }

                function l(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
                }

                function s(e, t, o, a, n, i) {
                    e && V(y, e.toString(), {
                        dur: t,
                        scrollEasing: o,
                        dir: a,
                        overwrite: n,
                        drag: i
                    })
                }
                var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
                    B = y.data(a),
                    T = B.opt,
                    k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx),
                    I = e("#mCSB_" + B.idx + "_container"),
                    D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                    R = [],
                    E = [],
                    L = 0,
                    z = "yx" === T.axis ? "none" : "all",
                    A = [],
                    P = I.find("iframe"),
                    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    U = void 0 !== document.body.style.touchAction;
                I.bind(H[0], function (e) {
                    o(e)
                }).bind(H[1], function (e) {
                    n(e)
                }), M.bind(H[0], function (e) {
                    i(e)
                }).bind(H[2], function (e) {
                    r(e)
                }), P.length && P.each(function () {
                    e(this).load(function () {
                        W(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
                            o(e), i(e)
                        }).bind(H[1], function (e) {
                            n(e)
                        }).bind(H[2], function (e) {
                            r(e)
                        })
                    })
                })
            },
            R = function () {
                function o() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function n(e, t, o) {
                    d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, F(r, e, t, "mcsLinearOut", o ? 60 : null)
                }
                var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + u, function (e) {
                    t || i || (i = 1, c = !0)
                }).add(document).bind("mousemove." + u, function (e) {
                    if (!t && i && o()) {
                        var a = f.offset(),
                            r = O(e)[0] - a.top + f[0].offsetTop,
                            c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                    }
                }).bind("mouseup." + u + " dragend." + u, function (e) {
                    t || (i && (i = 0, n("off", null)), c = !1)
                })
            },
            E = function () {
                function t(t, a) {
                    if (N(o), !L(o, t.target)) {
                        var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = i.scrollInertia;
                        if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                            f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            p = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = t.deltaX || t.deltaY || a;
                        else var u = "y",
                            f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            p = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(),
                            v = t.deltaY || a;
                        "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 2 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), V(o, (m - v * h).toString(), {
                            dir: u,
                            dur: d
                        }))
                    }
                }
                if (e(this).data(a)) {
                    var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function () {
                        e(this).load(function () {
                            W(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
                                t(e, o)
                            })
                        })
                    }), l.bind("mousewheel." + r, function (e, o) {
                        t(e, o)
                    })
                }
            },
            W = function (e) {
                var t = null;
                try {
                    var o = e.contentDocument || e.contentWindow.document;
                    t = o.body.innerHTML
                } catch (a) {}
                return null !== t
            },
            L = function (t, o) {
                var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = ["select", "textarea"];
                return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
            },
            z = function () {
                var t, o = e(this),
                    n = o.data(a),
                    i = a + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container"),
                    l = r.parent(),
                    s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
                s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
                    c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1)
                }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function (e) {
                    c = !1
                }).bind("click." + i, function (a) {
                    if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                        N(o);
                        var i = e(this),
                            s = i.find(".mCSB_dragger");
                        if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!n.overflowed[1]) return;
                            var c = "x",
                                u = a.pageX > s.offset().left ? -1 : 1,
                                f = Math.abs(r[0].offsetLeft) - .9 * u * l.width()
                        } else {
                            if (!n.overflowed[0]) return;
                            var c = "y",
                                u = a.pageY > s.offset().top ? -1 : 1,
                                f = Math.abs(r[0].offsetTop) - .9 * u * l.height()
                        }
                        V(o, f.toString(), {
                            dir: c,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            A = function () {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function (o) {
                    var a = e(document.activeElement),
                        i = r.find(".mCustomScrollBox").length,
                        s = 0;
                    a.is(n.advanced.autoScrollOnFocus) && (N(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (s + 17) * i : 0, t[0]._focusTimeout = setTimeout(function () {
                        var e = [te(a)[0], te(a)[1]],
                            o = [r[0].offsetTop, r[0].offsetLeft],
                            i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
                            c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
                        "x" === n.axis || i[0] || V(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        }), "y" === n.axis || i[1] || V(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        })
                    }, t[0]._focusTimer))
                })
            },
            P = function () {
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function (t) {
                    (0 !== i.scrollTop() || 0 !== i.scrollLeft()) && e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            H = function () {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar",
                    s = e(l + ">a");
                s.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
                    function r(e, o) {
                        i.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, F(t, e, o)
                    }
                    if (a.preventDefault(), Z(a)) {
                        var l = e(this).attr("class");
                        switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l);
                                break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l)
                        }
                    }
                })
            },
            U = function () {
                function t(t) {
                    function a(e, t) {
                        r.type = i.keyboard.scrollType, r.scrollAmount = i.snapAmount || i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || F(o, e, t)
                    }
                    switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = "on";
                            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
                            } else if (33 === l || 34 === l) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    N(o);
                                    var f = 34 === l ? -1 : 1;
                                    if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - .9 * f * d.width();
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - .9 * f * d.height();
                                    V(o, m.toString(), {
                                        dir: h,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                V(o, m.toString(), {
                                    dir: h,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function () {
                    e(this).load(function () {
                        W(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
                            t(e)
                        })
                    })
                }), s.attr("tabindex", "0").bind(h[0], function (e) {
                    t(e)
                })
            },
            F = function (t, o, n, i, r) {
                function l(e) {
                    var o = "stepped" !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        u = "x" === f.dir[0] ? s[1] + f.dir[1] * d[1] * n : s[0] + f.dir[1] * d[0] * n,
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        v = "auto" !== f.scrollAmount ? m : u,
                        x = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        _ = e ? !0 : !1;
                    return e && 17 > a && (v = "x" === f.dir[0] ? s[1] : s[0]), V(t, v.toString(), {
                        dir: f.dir[0],
                        scrollEasing: x,
                        dur: a,
                        onComplete: _
                    }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function () {
                        l()
                    }, a)))
                }

                function s() {
                    clearTimeout(f.step), K(f, "step"), N(t)
                }
                var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type ? !0 : !1,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], N(t), ee(n) && "stepped" === f.type) return;
                        l(m);
                        break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0)
                }
            },
            q = function (t) {
                var o = e(this).data(a).opt,
                    n = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
            },
            Y = function (t, o) {
                if (null != t && "undefined" != typeof t) {
                    var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y");
                    var d = "x" === o ? l.outerWidth(!1) : l.outerHeight(!1),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t);
                            if (!m.length) return;
                            return "x" === o ? te(m)[1] : te(m)[0];
                        case "string":
                        case "number":
                            if (ee(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var p = f + parseInt(t.split("+=")[1]);
                                return p >= 0 ? 0 : Math.abs(p)
                            }
                            if (-1 !== t.indexOf("px") && ee(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = l.find(":" + t);
                                return "x" === o ? te(m)[1] : te(m)[0]
                            }
                            return e(t).length ? "x" === o ? te(e(t))[1] : te(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
                    }
                }
            },
            j = function (t) {
                function o() {
                    return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function () {
                        return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function () {
                            n(this)
                        }))
                    }, c.advanced.autoUpdateTimeout))
                }

                function n(t) {
                    function o(e, t) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    }

                    function a() {
                        this.onload = null, e(t).addClass(d[2]), r(2)
                    }
                    if (e(t).hasClass(d[2])) return void r();
                    var n = new Image;
                    n.onload = o(n, a), n.src = t.src
                }

                function i() {
                    c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
                        e += this.offsetHeight + this.offsetWidth
                    }), e
                }

                function r(e) {
                    clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e)
                }
                var l = e(this),
                    s = l.data(a),
                    c = s.opt,
                    f = e("#mCSB_" + s.idx + "_container");
                return t ? (clearTimeout(f[0].autoUpdate), void K(f[0], "autoUpdate")) : void o()
            },
            X = function (e, t, o) {
                return Math.round(e / t) * t - o
            },
            N = function (t) {
                var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function () {
                    J.call(this)
                })
            },
            V = function (t, o, n) {
                function i(e) {
                    return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || _ >= w[0] + b, c.callbacks.alwaysTriggerOffsets || -y >= _]
                }

                function l() {
                    var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [v[0].offsetTop, v[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: o[0],
                        draggerLeft: o[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                        direction: n.dir
                    }
                }
                var s = t.data(a),
                    c = s.opt,
                    d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? q.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? q.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (s.trigger = n.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                    switch (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount && (o = X(o, c.snapAmount, c.snapOffset)), n.dir) {
                        case "x":
                            var v = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                x = "left",
                                _ = h[0].offsetLeft,
                                w = [f.width() - h.outerWidth(!1), v.parent().width() - v.width()],
                                S = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                b = p[1],
                                y = g[1],
                                B = b > 0 ? b / s.scrollRatio.x : 0,
                                T = y > 0 ? y / s.scrollRatio.x : 0;
                            break;
                        case "y":
                            var v = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                x = "top",
                                _ = h[0].offsetTop,
                                w = [f.height() - h.outerHeight(!1), v.parent().height() - v.height()],
                                S = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                b = p[0],
                                y = g[0],
                                B = b > 0 ? b / s.scrollRatio.y : 0,
                                T = y > 0 ? y / s.scrollRatio.y : 0
                    }
                    S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= w[1] ? S = [w[0], w[1]] : S[0] = -S[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), (s.tweenRunning || !(0 === _ && S[0] >= 0 || _ === w[0] && S[0] <= w[0])) && (Q(v[0], x, Math.round(S[1]), u[1], n.scrollEasing), Q(h[0], x, Math.round(S[0]), u[0], n.scrollEasing, n.overwrite, {
                        onStart: function () {
                            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(v), s.cbOffsets = r())
                        },
                        onUpdate: function () {
                            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
                        },
                        onComplete: function () {
                            if (n.callbacks && n.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function () {
                                    i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && S[1] >= w[1] - B && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && S[1] <= T && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(v, "hide")
                                }, e)
                            }
                        }
                    }))
                }
            },
            Q = function (e, t, o, a, n, i, r) {
                function l() {
                    S.stop || (x || m.call(), x = G() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call())
                }

                function s() {
                    a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call()
                }

                function c() {
                    f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
                        return s(), setTimeout(e, .01)
                    }, S.id = h(l)
                }

                function d() {
                    null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
                }

                function u(e, t, o, a, n) {
                    switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e;
                            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, h, r = r || {},
                    m = r.onStart || function () {},
                    p = r.onUpdate || function () {},
                    g = r.onComplete || function () {},
                    v = G(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t];
                "left" === t && (_ = e.offsetLeft);
                var b = o - _;
                S.stop = 0, "none" !== i && d(), c()
            },
            G = function () {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            J = function () {
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                    var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
                }
            },
            K = function (e, t) {
                try {
                    delete e[t]
                } catch (o) {
                    e[t] = null
                }
            },
            Z = function (e) {
                return !(e.which && 1 !== e.which)
            },
            $ = function (e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            },
            ee = function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            te = function (e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            };
        e.fn[o] = function (t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o] = function (t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o].defaults = i, window[o] = !0, e(window).load(function () {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function (t) {
                    var o, a, n = e(t),
                        i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + te(n)[0] >= 0 && a[0] + te(n)[0] < o.height() - n.outerHeight(!1) && a[1] + te(n)[1] >= 0 && a[1] + te(n)[1] < o.width() - n.outerWidth(!1)
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});
var originalLeave = $.fn.popover.Constructor.prototype.leave;
$.fn.popover.Constructor.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
    var container, timeout;
    originalLeave.call(this, obj);
    if (obj.currentTarget) {
        container = $(obj.currentTarget).siblings('.popover')
        timeout = self.timeout;
        container.one('mouseenter', function () {
            clearTimeout(timeout);
            container.one('mouseleave', function () {
                $.fn.popover.Constructor.prototype.leave.call(self, self)
            })
        })
    }
};
$(document).ready(function () {
    $('#likeplace').popover({
        trigger: ' hover',
        html: !0,
        title: function () {
            return $("#popover-head").html()
        },
        content: function () {
            return $("#popover-content").html()
        },
        delay: {
            show: 50,
            hide: 400
        }
    })
});
$('.likeplace').popover({
    trigger: ' hover',
    html: !0,
    title: function () {
        return $("#popover-head").html()
    },
    content: function () {
        return $("#popover-content").html()
    },
    delay: {
        show: 50,
        hide: 400
    }
});

function likecomment(id, type, showCount) {
    var url = '/like/like/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#like" + id).removeClass('chat-like');
                $("#like" + id).addClass('chat-unlike');
                if (showCount) {
                    $("#like" + id).find('span').text(data.count)
                }
                $("#like" + id).attr('onclick', "unlikecomment(  '" + id + "'  ,  '" + type + "'  ,  " + showCount + "  )")
            }
            $("#like" + id).popover('hide')
        }
    })
}

function unlikecomment(id, type, showCount) {
    var url = '/like/unlike/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#like" + id).addClass('chat-like');
                $("#like" + id).removeClass('chat-unlike');
                if (showCount) {
                    $("#like" + id).find('span').text(data.count)
                }
                $("#like" + id).attr('onclick', "likecomment(  '" + id + "'  ,  '" + type + "'  ,  " + showCount + "  )");
                $("#like" + id).popover('hide')
            }
        }
    })
}

function likeproduct(id, type, showCount, photoid) {
    var url = '/like/like/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $(".like" + id).find('div').removeClass('chat-like');
                $(".like" + id).find('div').addClass('chat-unlike');
                if (showCount) {
                    $(".like" + id).find('span').text(data.count)
                }
                $(".like" + id).attr('onclick', "unlikeproduct(  '" + id + "'  ,  '" + type + "'  ,  " + showCount + " ," + photoid + " )")
            }
        }
    })
}

function unlikeproduct(id, type, showCount, photoid) {
    var url = '/like/unlike/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $(".like" + id).find('div').addClass('chat-like');
                $(".like" + id).find('div').removeClass('chat-unlike');
                if (showCount) {
                    $(".like" + id).find('span').text(data.count)
                }
                $(".like" + id).attr('onclick', "likeproduct(  '" + id + "'  ,  '" + type + "'  ,  " + showCount + " ," + photoid + "  )")
            }
        }
    })
}

function likeajax(id, type, showCount) {
    var url = '/like/like/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#liked-ajax-" + id).removeClass('dp-thumbs-up-5');
                $("#liked-ajax-" + id).addClass('dp-thumbs-down');
                if (showCount) {
                    $("#liked-count-ajax-" + id).text(data.count)
                }
                $("#liked-ajax-" + id).attr('onclick', "unlikeajax(  '" + id + "'  ,  '" + type + "'  ,  " + showCount + "  )")
            }
        }
    })
}

function unlikeajax(id, type, showCount) {
    var url = '/like/unlike/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#liked-ajax-" + id).removeClass('dp-thumbs-down');
                $("#liked-ajax-" + id).addClass('dp-thumbs-up-5');
                if (showCount) {
                    $("#liked-count-ajax-" + id).text(data.count)
                }
                $("#liked-ajax-" + id).attr('onclick', "likeajax(  '" + id + "'  ,  '" + type + "' , " + showCount + " )")
            }
        }
    })
}

function like(id, type, showCount) {
    var url = '/like/like/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#liked-" + data.id).removeClass('dp-thumbs-up-5');
                $("#liked-" + data.id).addClass('dp-thumbs-down');
                if (showCount) {
                    $("#liked-count-" + data.id).text(data.count)
                }
                $("#liked-" + data.id).attr('onclick', "unlike(  '" + id + "'  ,  '" + type + "'  ,  " + showCount + "  )")
            }
        }
    })
}

function unlike(id, type, showCount) {
    var url = '/like/unlike/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#liked-" + data.id).removeClass('dp-thumbs-down');
                $("#liked-" + data.id).addClass('dp-thumbs-up-5');
                if (showCount) {
                    $("#liked-count-" + data.id).text(data.count)
                }
                $("#liked-" + data.id).attr('onclick', "like(  '" + id + "'  ,  '" + type + "' , " + showCount + " )")
            }
        }
    })
}

function likeajax(id, type, showCount) {
    var url = '/like/like/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#liked-ajax-" + data.id).removeClass('dp-thumbs-up-5');
                $("#liked-ajax-" + data.id).addClass('dp-thumbs-down');
                if (showCount) {
                    $("#liked-count-ajax-" + data.id).text(data.count)
                }
                $("#liked-ajax-" + data.id).attr('onclick', "unlikeajax(  '" + id + "'  ,  '" + type + "'  ,  " + showCount + "  )")
            }
        }
    })
}

function unlikeajax(id, type, showCount) {
    var url = '/like/unlike/format/json/id/' + id + '/type/' + type;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status == 'success') {
                $("#liked-ajax-" + data.id).removeClass('dp-thumbs-down');
                $("#liked-ajax-" + data.id).addClass('dp-thumbs-up-5');
                if (showCount) {
                    $("#liked-count-ajax-" + data.id).text(data.count)
                }
                $("#liked-ajax-" + data.id).attr('onclick', "likeajax(  '" + id + "'  ,  '" + type + "' , " + showCount + " )")
            }
        }
    })
}
$(function () {
    function a(a) {
        function b() {
            $(".media-holder").removeClass("has-pic")
        }
        if (a.files && a.files[0]) {
            var c = new FileReader;
            c.onload = function (a) {
                var b = $(".media-holder").hasClass("has-pic");
                1 == b && $(".has-pic img").attr("src", a.target.result)
            }, c.readAsDataURL(a.files[0]), setTimeout(b, 500)
        }
    }

    function b() {
        $(".show-product .products,.category").animate({
            top: 50
        }, "fast")
    }

    function c() {
        $(".show-product .products,.category").animate({
            top: 50
        }, "fast")
    }

    function b() {
        $(".payment .middle-box").animate({
            top: 80
        }, "fast")
    }

    function c() {
        $(".payment .middle-box").animate({
            top: 180
        }, "fast")
    }
    $("select").select2(), $('[data-toggle="tooltip"]').tooltip({
        trigger: "hover"
    }), $(".box-label").click(function () {
        var a = $(window).innerWidth();
        a < 992 && ($(this).closest(".person-box").children(".person-list-box").children(".list-content").slideToggle(), $(this).toggleClass("list-down"))
    }), $(".drop-down-header").click(function (a) {
        $(".drop-down-list-content").fadeToggle("fast"), $(".drop-down-header").toggleClass("list-droped"), a.stopPropagation()
    }), $(".drop-down-list-content").click(function (a) {
        a.stopPropagation()
    }), $("body").click(function () {
        $(".drop-down-list-content").fadeOut("fast"), $(".drop-down-header").removeClass("list-droped")
    }), $(".collapse-content-btn").click(function () {
        $(this).closest("table").children("tbody").slideToggle("fast"), $(this).children("i").toggleClass("fa-square-o").toggleClass("fa-minus")
    }), $(document).on("click", ".media-box-control", function (a) {
        $(this).closest(".media-form").children(".row").children(".media-form-content").slideToggle(), $(this).children("button").children("i").toggleClass("fa-square-o").toggleClass("fa-minus"), a.preventDefault()
    }), $(document).on("click", ".transfer-up", function () {
        var a = $(this).closest(".newbox"),
            b = a.index(),
            c = $(".newbox").eq(b - 1);
        if (b > 0) {
            a.hide().insertBefore(c).fadeIn(600), c.hide().fadeIn(600);
            var d = a.find('input[type="hidden"]').val();
            a.find('input[type="hidden"]').val(parseInt(d) - 1), c.find('input[type="hidden"]').val(parseInt(d))
        }
        $("[data-toggle='tooltip']").tooltip("hide")
    }), $(document).on("click", ".transfer-down", function () {
        var a = $(this).closest(".newbox"),
            b = a.index(),
            c = $(".newbox").eq(b + 1);
        if (item_length = $(".newbox").length - 1, b < item_length) {
            a.hide().insertAfter(c).fadeIn(600), c.hide().fadeIn(600);
            var d = a.find('input[type="hidden"]').val();
            a.find('input[type="hidden"]').val(parseInt(d) + 1), c.find('input[type="hidden"]').val(parseInt(d))
        }
        $("[data-toggle='tooltip']").tooltip("hide")
    }), $(document).on("click", ".delet-media", function () {
        var a = $(this).closest(".newbox");
        $(a).fadeOut(600, function () {
            $(this).remove()
        })
    }), $("#add-article-form").find("input,textarea").val(""), $(".add-new-form-btn").click(function () {
        var a = $(this).attr("form-target");
        $(".form-template " + a).clone(!0).hide().appendTo(".media-form-container").slideDown().find(".media-holder img").attr("src", "_images/default-image.png"), $('[data-toggle="tooltip"]').tooltip("hide")
    }), $(".upload-btn").click(function () {
        $(this).parent(".add-new-image").find(".media-upload").click(), $(this).parent(".add-new-image").find(".media-holder").addClass("has-pic")
    }), $(".media-upload").change(function () {
        a(this)
    }), $("[data-tooltip]").hover(function () {
        var a = ($(this).offset(), $(this).position()),
            b = $(this).outerHeight(),
            c = $(this).outerWidth(),
            d = $(this).attr("data-tooltip"),
            e = $(this).attr("tooltip-place");
        $("<span class='tooltip-text'></span>").insertAfter(this), $(".tooltip-text").text(d).animate({
            opacity: .9
        }, "fast");
        var f = $(".tooltip-text").outerHeight(),
            g = Math.abs((f - b) / 2);
        "right" == e ? $(".tooltip-text").addClass("tooltip-text-right").css({
            left: a.left + c + 20,
            top: a.top - g
        }) : "left" == e && $(".tooltip-text").addClass("tooltip-text-left").css({
            left: a.left - 3 * c - 15,
            top: a.top - g
        })
    }, function () {
        $(".tooltip-text").animate({
            opacity: 0
        }, "fast", function () {
            $(".tooltip-text").remove()
        })
    }), $("[data-tooltip]").click(function () {
        $(".tooltip-text").animate({
            opacity: 0
        }, "fast", function () {
            $(".tooltip-text").remove()
        })
    }), $(".show-popover").click(function (a) {
        var b = $(this).offset(),
            c = $(this).width(),
            d = $(this).parent("li").children(".in-popover").width(),
            e = $(window).innerWidth(),
            f = $(this).hasClass("pop-droped");
        e < 992 && ($(".in-popover").fadeOut("fast"), $(".show-popover").removeClass("pop-droped"), 0 == f ? $(this).addClass("pop-droped").parent("li").children(".in-popover").css("left", b.left - (d - c) / 2 + 5).fadeToggle("fast") : $(this).removeClass("pop-droped").parent("li").children(".in-popover").css("left", b.left - (d - c) / 2 + 5).fadeOut("fast"), a.preventDefault())
    }), $(".show-popover,.in-popover").click(function (a) {
        a.stopPropagation()
    }), $(".in-popover .form-group input").focus(function (a) {
        a.stopPropagation()
    }), $("body").click(function () {
        $(".in-popover").fadeOut("fast"), $(".show-popover").removeClass("pop-droped")
    });
    var d = $(".cover-holder img").attr("src");
    $(".cover-holder").attr("data-image-src", d), $(".collapse-footer-btn").click(function (a) {
        $(".footer-menu-container").fadeToggle(), $(".line-bar:first-child").toggleClass("line-bar-top"), $(".line-bar:nth-child(2)").toggleClass("line-bar-middle"), $(".line-bar:last-child").toggleClass("line-bar-bottom"), a.stopPropagation()
    }), $("body").click(function () {
        $(".footer-menu-container").removeAttr("style"), $(".line-bar:first-child").removeClass("line-bar-top"), $(".line-bar:nth-child(2)").removeClass("line-bar-middle"), $(".line-bar:last-child").removeClass("line-bar-bottom")
    }), $(window).resize(function () {
        var a = $(window).innerWidth(),
            b = $(".middle-wrap").innerWidth(),
            c = (a - b) / 2,
            d = $(".collapse-side-btn").hasClass("menu-in");
        a > 992 ? ($(".list-content").removeAttr("style"), $(".box-label").removeClass("list-down"), $(".middle-wrap,.middle-box").css({
            position: "static"
        }).removeAttr("style"), $("body,html").css({
            overflow: "initial"
        }), $(".collapse-side-btn").removeClass("menu-in")) : a > 767 && ($(".footer-menu-container").removeAttr("style"), $(".line-bar:first-child").removeClass("line-bar-top"), $(".line-bar:nth-child(2)").removeClass("line-bar-middle"), $(".line-bar:last-child").removeClass("line-bar-bottom")), a < 992 && 1 == d && $(".middle-wrap").css({
            left: -315 + c
        })
    }), $(".big-item").hoverIntent(function () {
        $(this).children(".hover-title").slideDown("fast")
    }, function () {
        $(this).children(".hover-title").slideUp("fast")
    }), $(".filter-btn button").click(function () {
        $(this).toggleClass("filter-on"), $(this).parent(".filter-btn").children(".filter-bg").toggleClass("filter-on-bg")
    });
    $(document).on("click", ".filterdata", function () {
        var a = $(this).hasClass("menu-in"),
            b = $(".middle-wrap").innerWidth(),
            c = $(window).innerWidth(),
            d = (c - b) / 2;
        0 == a ? ($(".middle-box").animate({
            display: "block"
        }, function () {
            $(".collapse-side-btn").addClass("menu-in")
        }), $(".middle-wrap").css({
            position: "relative"
        }).animate({}), $("body,html").css({}), $(".sidebar-fix-holder").scrollTop(0)) : ($(".middle-box").animate({
            display: "none"
        }, function () {
            $(".collapse-side-btn").removeClass("menu-in")
        }), $(".middle-wrap").css({
            position: "relative"
        }).animate({}), $("body,html").css({
            overflow: "visible"
        }))
    })
});
var scrollToTopShowStatus = !1;
$(window).scroll(function () {
    var o = $(window).scrollTop();
    if (o >= 100 && scrollToTopShowStatus == !1) {
        $("a.scrolltop").fadeIn(1000);
        scrollToTopShowStatus = !0
    } else if (o < 100 && scrollToTopShowStatus == !0) {
        $("a.scrolltop").fadeOut(500);
        scrollToTopShowStatus = !1
    }
});
$(function () {
    $("a.scrolltop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
});
$(document).ready(function () {
    if ($(window).width() >= 768) {
        if (Modernizr.touchevents) {
            $('.top-fix-nav-holder a.have-child').mousedown(function () {
                if (document.activeElement == this)
                    location.href = $(this).attr('href')
            }).on('click', function (e) {
                $(this).focus();
                $(this).mouseover();
                e.preventDefault();
                return !1
            })
        }
    }
});
! function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                t.formData ? r.data = t.formData : r.data = n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && (e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? l.push(e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0]) : l.push(e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]));
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function (e) {
                    x.abort(e)
                }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                },
                _ = function (t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
                f.resetForm()
            }), t.clearForm && x.push(function () {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function () {};
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                name: f,
                value: m[l]
            });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({
                    name: f,
                    value: v[l],
                    type: d.type
                });
            else a.push({
                name: f,
                value: "",
                type: d.type
            })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
(function (e) {
    "use strict";

    function t(e, t) {
        if (this.createTextRange) {
            var n = this.createTextRange();
            n.collapse(!0);
            n.moveStart("character", e);
            n.moveEnd("character", t - e);
            n.select()
        } else if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(e, t)
        }
    }

    function n(e) {
        var t = this.value.length;
        e = e.toLowerCase() == "start" ? "Start" : "End";
        if (document.selection) {
            var n = document.selection.createRange(),
                r, i, s;
            r = n.duplicate();
            r.expand("textedit");
            r.setEndPoint("EndToEnd", n);
            i = r.text.length - n.text.length;
            s = i + n.text.length;
            return e == "Start" ? i : s
        } else if (typeof this["selection" + e] != "undefined") {
            t = this["selection" + e]
        }
        return t
    }
    var r = {
        codes: {
            46: 127,
            188: 44,
            109: 45,
            190: 46,
            191: 47,
            192: 96,
            220: 92,
            222: 39,
            221: 93,
            219: 91,
            173: 45,
            187: 61,
            186: 59,
            189: 45,
            110: 46
        },
        shifts: {
            96: "~",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            48: ")",
            45: "_",
            61: "+",
            91: "{",
            93: "}",
            92: "|",
            59: ":",
            39: '"',
            44: "<",
            46: ">",
            47: "?"
        }
    };
    e.fn.number = function (i, s, o, u) {
        u = typeof u === "undefined" ? "," : u;
        o = typeof o === "undefined" ? "." : o;
        s = typeof s === "undefined" ? 0 : s;
        var a = "\\u" + ("0000" + o.charCodeAt(0).toString(16)).slice(-4),
            f = new RegExp("[^" + a + "0-9]", "g"),
            l = new RegExp(a, "g");
        if (i === !0) {
            if (this.is("input:text")) {
                return this.on({
                    "keydown.format": function (i) {
                        var a = e(this),
                            f = a.data("numFormat"),
                            l = i.keyCode ? i.keyCode : i.which,
                            c = "",
                            h = n.apply(this, ["start"]),
                            p = n.apply(this, ["end"]),
                            d = "",
                            v = !1;
                        if (r.codes.hasOwnProperty(l)) {
                            l = r.codes[l]
                        }
                        if (!i.shiftKey && l >= 65 && l <= 90) {
                            l += 32
                        } else if (!i.shiftKey && l >= 69 && l <= 105) {
                            l -= 48
                        } else if (i.shiftKey && r.shifts.hasOwnProperty(l)) {
                            c = r.shifts[l]
                        }
                        if (c == "") c = String.fromCharCode(l);
                        if (l != 8 && l != 45 && l != 127 && c != o && !c.match(/[0-9]/)) {
                            var m = i.keyCode ? i.keyCode : i.which;
                            if (m == 46 || m == 8 || m == 127 || m == 9 || m == 27 || m == 13 || (m == 65 || m == 82 || m == 80 || m == 83 || m == 70 || m == 72 || m == 66 || m == 74 || m == 84 || m == 90 || m == 61 || m == 173 || m == 48) && (i.ctrlKey || i.metaKey) === !0 || (m == 86 || m == 67 || m == 88) && (i.ctrlKey || i.metaKey) === !0 || m >= 35 && m <= 39 || m >= 112 && m <= 123) {
                                return
                            }
                            i.preventDefault();
                            return !1
                        }
                        if (h == 0 && p == this.value.length || a.val() == 0) {
                            if (l == 8) {
                                h = p = 1;
                                this.value = "";
                                f.init = s > 0 ? -1 : 0;
                                f.c = s > 0 ? -(s + 1) : 0;
                                t.apply(this, [0, 0])
                            } else if (c == o) {
                                h = p = 1;
                                this.value = "0" + o + (new Array(s + 1)).join("0");
                                f.init = s > 0 ? 1 : 0;
                                f.c = s > 0 ? -(s + 1) : 0
                            } else if (l == 45) {
                                h = p = 2;
                                this.value = "-0" + o + (new Array(s + 1)).join("0");
                                f.init = s > 0 ? 1 : 0;
                                f.c = s > 0 ? -(s + 1) : 0;
                                t.apply(this, [2, 2])
                            } else {
                                f.init = s > 0 ? -1 : 0;
                                f.c = s > 0 ? -s : 0
                            }
                        } else {
                            f.c = p - this.value.length
                        }
                        f.isPartialSelection = h == p ? false : !0;
                        if (s > 0 && c == o && h == this.value.length - s - 1) {
                            f.c++;
                            f.init = Math.max(0, f.init);
                            i.preventDefault();
                            v = this.value.length + f.c
                        } else if (l == 45 && (h != 0 || this.value.indexOf("-") == 0)) {
                            i.preventDefault()
                        } else if (c == o) {
                            f.init = Math.max(0, f.init);
                            i.preventDefault()
                        } else if (s > 0 && l == 127 && h == this.value.length - s - 1) {
                            i.preventDefault()
                        } else if (s > 0 && l == 8 && h == this.value.length - s) {
                            i.preventDefault();
                            f.c--;
                            v = this.value.length + f.c
                        } else if (s > 0 && l == 127 && h > this.value.length - s - 1) {
                            if (this.value === "") return;
                            if (this.value.slice(h, h + 1) != "0") {
                                d = this.value.slice(0, h) + "0" + this.value.slice(h + 1);
                                a.val(d)
                            }
                            i.preventDefault();
                            v = this.value.length + f.c
                        } else if (s > 0 && l == 8 && h > this.value.length - s) {
                            if (this.value === "") return;
                            if (this.value.slice(h - 1, h) != "0") {
                                d = this.value.slice(0, h - 1) + "0" + this.value.slice(h);
                                a.val(d)
                            }
                            i.preventDefault();
                            f.c--;
                            v = this.value.length + f.c
                        } else if (l == 127 && this.value.slice(h, h + 1) == u) {
                            i.preventDefault()
                        } else if (l == 8 && this.value.slice(h - 1, h) == u) {
                            i.preventDefault();
                            f.c--;
                            v = this.value.length + f.c
                        } else if (s > 0 && h == p && this.value.length > s + 1 && h > this.value.length - s - 1 && isFinite(+c) && !i.metaKey && !i.ctrlKey && !i.altKey && c.length === 1) {
                            if (p === this.value.length) {
                                d = this.value.slice(0, h - 1)
                            } else {
                                d = this.value.slice(0, h) + this.value.slice(h + 1)
                            }
                            this.value = d;
                            v = h
                        }
                        if (v !== !1) {
                            t.apply(this, [v, v])
                        }
                        a.data("numFormat", f)
                    },
                    "keyup.format": function (r) {
                        var i = e(this),
                            o = i.data("numFormat"),
                            u = r.keyCode ? r.keyCode : r.which,
                            a = n.apply(this, ["start"]),
                            f = n.apply(this, ["end"]),
                            l;
                        if (a === 0 && f === 0 && (u === 189 || u === 109)) {
                            i.val("-" + i.val());
                            a = 1;
                            o.c = 1 - this.value.length;
                            o.init = 1;
                            i.data("numFormat", o);
                            l = this.value.length + o.c;
                            t.apply(this, [l, l])
                        }
                        if (this.value === "" || (u < 48 || u > 57) && (u < 96 || u > 105) && u !== 8 && u !== 46 && u !== 110) return;
                        i.val(i.val());
                        if (s > 0) {
                            if (o.init < 1) {
                                a = this.value.length - s - (o.init < 0 ? 1 : 0);
                                o.c = a - this.value.length;
                                o.init = 1;
                                i.data("numFormat", o)
                            } else if (a > this.value.length - s && u != 8) {
                                o.c++;
                                i.data("numFormat", o)
                            }
                        }
                        if (u == 46 && !o.isPartialSelection) {
                            o.c++;
                            i.data("numFormat", o)
                        }
                        l = this.value.length + o.c;
                        t.apply(this, [l, l])
                    },
                    "paste.format": function (t) {
                        var n = e(this),
                            r = t.originalEvent,
                            i = null;
                        if (window.clipboardData && window.clipboardData.getData) {
                            i = window.clipboardData.getData("Text")
                        } else if (r.clipboardData && r.clipboardData.getData) {
                            i = r.clipboardData.getData("text/plain")
                        }
                        n.val(i);
                        t.preventDefault();
                        return !1
                    }
                }).each(function () {
                    var t = e(this).data("numFormat", {
                        c: -(s + 1),
                        decimals: s,
                        thousands_sep: u,
                        dec_point: o,
                        regex_dec_num: f,
                        regex_dec: l,
                        init: this.value.indexOf(".") ? true : !1
                    });
                    if (this.value === "") return;
                    t.val(t.val())
                })
            } else {
                return this.each(function () {
                    var t = e(this),
                        n = +t.text().replace(f, "").replace(l, ".");
                    t.number(!isFinite(n) ? 0 : +n, s, o, u)
                })
            }
        }
        return this.text(e.number.apply(window, arguments))
    };
    var i = null,
        s = null;
    if (e.isPlainObject(e.valHooks.text)) {
        if (e.isFunction(e.valHooks.text.get)) i = e.valHooks.text.get;
        if (e.isFunction(e.valHooks.text.set)) s = e.valHooks.text.set
    } else {
        e.valHooks.text = {}
    }
    e.valHooks.text.get = function (t) {
        var n = e(t),
            r, s, o = n.data("numFormat");
        if (!o) {
            if (e.isFunction(i)) {
                return i(t)
            } else {
                return undefined
            }
        } else {
            if (t.value === "") return "";
            r = +t.value.replace(o.regex_dec_num, "").replace(o.regex_dec, ".");
            return (t.value.indexOf("-") === 0 ? "-" : "") + (isFinite(r) ? r : 0)
        }
    };
    e.valHooks.text.set = function (t, n) {
        var r = e(t),
            i = r.data("numFormat");
        if (!i) {
            if (e.isFunction(s)) {
                return s(t, n)
            } else {
                return undefined
            }
        } else {
            var o = e.number(n, i.decimals, i.dec_point, i.thousands_sep);
            return t.value = o
        }
    };
    e.number = function (e, t, n, r) {
        r = typeof r === "undefined" ? "," : r;
        n = typeof n === "undefined" ? "." : n;
        t = !isFinite(+t) ? 0 : Math.abs(t);
        var i = "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4);
        var s = "\\u" + ("0000" + r.charCodeAt(0).toString(16)).slice(-4);
        e = (e + "").replace(".", n).replace(new RegExp(s, "g"), "").replace(new RegExp(i, "g"), ".").replace(new RegExp("[^0-9+-Ee.]", "g"), "");
        var o = !isFinite(+e) ? 0 : +e,
            u = "",
            a = function (e, t) {
                var n = Math.pow(10, t);
                return "" + Math.round(e * n) / n
            };
        u = (t ? a(o, t) : "" + Math.round(o)).split(".");
        if (u[0].length > 3) {
            u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)
        }
        if ((u[1] || "").length < t) {
            u[1] = u[1] || "";
            u[1] += (new Array(t - u[1].length + 1)).join("0")
        }
        return u.join(n)
    }
})(jQuery);
! function (e, n, t) {
    function o(e, n) {
        return typeof e === n
    }

    function s() {
        var e, n, t, s, a, i, r;
        for (var l in c)
            if (c.hasOwnProperty(l)) {
                if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"))
            }
    }

    function a(e) {
        var n = u.className,
            t = Modernizr._config.classPrefix || "";
        if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function r() {
        var e = n.body;
        return e || (e = i(p ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, t, o, s) {
        var a, l, f, c, d = "modernizr",
            p = i("div"),
            h = r();
        if (parseInt(o, 10))
            for (; o--;) f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
        return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l
    }
    var f = [],
        c = [],
        d = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e])
                }, 0)
            },
            addTest: function (e, n, t) {
                c.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function (e) {
                c.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = d, Modernizr = new Modernizr;
    var u = n.documentElement,
        p = "svg" === u.nodeName.toLowerCase(),
        h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    d._prefixes = h;
    var m = d.testStyles = l;
    Modernizr.addTest("touchevents", function () {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            m(o, function (e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    }), s(), a(f), delete d.addTest, delete d.addAsyncTest;
    for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
    e.Modernizr = Modernizr
}(window, document);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); + function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.$canvas = d.canvas ? a(d.canvas) : this.$element, this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.calcTransform(), this.transform || (this.$canvas = this.$element), "auto" === this.options.placement && (this.options.placement = this.calcPlacement()), this.options.recalc && (this.calcClone(), a(window).on("resize.bs.offcanvas", a.proxy(this.recalc, this))), this.options.autohide && a(document).on("click.bs.offcanvas", a.proxy(this.autohide, this));
        var e = "Microsoft Internet Explorer" == window.navigator.appName;
        if (e && this.$canvas !== this.$element) {
            var f = this.$canvas.find("*").filter(function () {
                return "fixed" === a(this).css("position")
            });
            this.$canvas = this.$canvas.add(f)
        }
        this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0,
        placement: "auto",
        autohide: !0,
        recalc: !0
    }, b.prototype.calcTransform = function () {
        if (this.transform = !1, a.support.transition || this.$canvas !== this.$element) {
            var b = a('<div style="visibility: hidden"></div>'),
                c = {
                    transform: "transform",
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform"
                };
            b.appendTo(a("body"));
            for (var d in c)
                if (void 0 !== b[0].style[d]) {
                    b[0].style[d] = "translate3d(1px,1px,1px)";
                    var e = window.getComputedStyle(b[0]).getPropertyValue(c[d]);
                    this.transform = c[d], this.translate = e.match(/^matrix3d/) ? "translate3d" : "translate";
                    break
                } b.remove()
        }
    }, b.prototype.calcPlacement = function () {
        function b(a, b) {
            if ("auto" === e.css(b)) return a;
            if ("auto" === e.css(a)) return b;
            var c = parseInt(e.css(a), 10),
                d = parseInt(e.css(b), 10);
            return c > d ? b : a
        }
        var c = a(window).width() / this.$element.width(),
            d = a(window).height() / this.$element.height(),
            e = this.$element;
        return c > d ? b("left", "right") : b("top", "bottom")
    }, b.prototype.offset = function () {
        switch (this.options.placement) {
            case "left":
            case "right":
                return this.$element.outerWidth();
            case "top":
            case "bottom":
                return this.$element.outerHeight()
        }
    }, b.prototype.slideTransform = function (b, c) {
        var d = this.options.placement,
            e = this.transform;
        b *= "right" === d || "bottom" === d ? -1 : 1;
        var f = "left" === d || "right" === d ? "{}px, 0" : "0, {}px";
        return "translate3d" === this.translate && (f += ", 0"), f = this.translate + "(" + f + ")", a.support.transition ? (this.$canvas.css(e, f.replace("{}", b)), this.$element.one(a.support.transition.end, c).emulateTransitionEnd(350), void 0) : this.$canvas.animate({
            borderSpacing: b
        }, {
            step: function (b) {
                a(this).css(e, f.replace("{}", b))
            },
            complete: c,
            duration: 350
        })
    }, b.prototype.slidePosition = function (b, c) {
        if (!a.support.transition) {
            var d = {};
            return d[this.options.placement] = b, this.$canvas.animate(d, 350, c)
        }
        this.$canvas.css(this.options.placement, b), this.$element.one(a.support.transition.end, c).emulateTransitionEnd(350)
    }, b.prototype.show = function () {
        if (!this.transitioning && !this.$canvas.hasClass("canvas-slid")) {
            var b = a.Event("show.bs.offcanvas");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = function () {
                    this.$canvas.addClass("canvas-slid").removeClass("canvas-sliding"), this.transitioning = 0, this.$element.trigger("shown.bs.offcanvas")
                };
                this.$element.is(":visible") && this.transform || this.$element.css(this.options.placement, -1 * this.offset() + "px"), this.$element.addClass("in"), this.$canvas.addClass("canvas-sliding"), this.$canvas != this.$element && a("body").css("overflow-x", "hidden"), this.transitioning = 1, this.transform ? this.slideTransform(this.offset(), a.proxy(c, this)) : this.slidePosition(0, a.proxy(c, this))
            }
        }
    }, b.prototype.hide = function (b) {
        if (!this.transitioning && this.$canvas.hasClass("canvas-slid")) {
            var c = a.Event("hide.bs.offcanvas");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = function () {
                    this.transitioning = 0, this.$element.removeClass("in").css("left", "").css("right", "").css("top", "").css("bottom", ""), this.$canvas.removeClass("canvas-sliding canvas-slid").css("transform", ""), a("body").css("overflow-x", ""), this.$element.trigger("hidden.bs.offcanvas")
                };
                if (b) return d.call(this);
                this.$canvas.removeClass("canvas-slid").addClass("canvas-sliding"), this.transitioning = 1, this.transform ? this.slideTransform(0, a.proxy(d, this)) : this.slidePosition(-1 * this.offset(), a.proxy(d, this))
            }
        }
    }, b.prototype.toggle = function () {
        this[this.$canvas.hasClass("canvas-slid") ? "hide" : "show"]()
    }, b.prototype.calcClone = function () {
        this.$calcClone = this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(a("body"))
    }, b.prototype.recalc = function () {
        "none" !== this.$calcClone.css("display") && this.hide(!0)
    }, b.prototype.autohide = function (b) {
        0 === a(b.target).closest(this.$element).length && this.hide()
    };
    var c = a.fn.offcanvas;
    a.fn.offcanvas = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.offcanvas"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.offcanvas", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.offcanvas.Constructor = b, a.fn.offcanvas.noConflict = function () {
        return a.fn.offcanvas = c, this
    }, a(document).on("click.bs.offcanvas.data-api", "[data-toggle=offcanvas]", function (b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.offcanvas"),
            h = g ? "toggle" : d.data();
        b.stopPropagation(), g ? g.toggle() : f.offcanvas(h)
    })
}(window.jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.$element.on("click.bs.rowlink", "td:not(.rowlink-skip)", a.proxy(this.click, this))
    };
    b.DEFAULTS = {
        target: "a"
    }, b.prototype.click = function (b) {
        var c = a(b.currentTarget).closest("tr").find(this.options.target)[0];
        if (a(b.target)[0] !== c)
            if (b.preventDefault(), c.click) c.click();
            else if (document.createEvent) {
            var d = document.createEvent("MouseEvents");
            d.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), c.dispatchEvent(d)
        }
    }, a.fn.rowlink = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("rowlink");
            e || d.data("rowlink", e = new b(this, c))
        })
    }, a.fn.rowlink.Constructor = b, a.fn.rowlink.noConflict = function () {
        return a.fn.inputmask = old, this
    }, a(document).on("click.bs.rowlink.data-api", '[data-link="row"]', function (b) {
        var c = a(this);
        c.data("rowlink") || (c.rowlink(c.data()), a(b.target).trigger("click.bs.rowlink"))
    })
}(window.jQuery), + function (a) {
    "use strict";
    var b = void 0 !== window.orientation,
        c = navigator.userAgent.toLowerCase().indexOf("android") > -1,
        d = "Microsoft Internet Explorer" == window.navigator.appName,
        e = function (b, d) {
            c || (this.$element = a(b), this.options = a.extend({}, e.DEFAULS, d), this.mask = String(this.options.mask), this.init(), this.listen(), this.checkVal())
        };
    e.DEFAULS = {
        mask: "",
        placeholder: "_",
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "?": "[A-Za-z0-9]",
            "*": "."
        }
    }, e.prototype.init = function () {
        var b = this.options.definitions,
            c = this.mask.length;
        this.tests = [], this.partialPosition = this.mask.length, this.firstNonMaskPos = null, a.each(this.mask.split(""), a.proxy(function (a, d) {
            "?" == d ? (c--, this.partialPosition = a) : b[d] ? (this.tests.push(new RegExp(b[d])), null === this.firstNonMaskPos && (this.firstNonMaskPos = this.tests.length - 1)) : this.tests.push(null)
        }, this)), this.buffer = a.map(this.mask.split(""), a.proxy(function (a) {
            return "?" != a ? b[a] ? this.options.placeholder : a : void 0
        }, this)), this.focusText = this.$element.val(), this.$element.data("rawMaskFn", a.proxy(function () {
            return a.map(this.buffer, function (a, b) {
                return this.tests[b] && a != this.options.placeholder ? a : null
            }).join("")
        }, this))
    }, e.prototype.listen = function () {
        if (!this.$element.attr("readonly")) {
            var b = (d ? "paste" : "input") + ".mask";
            this.$element.on("unmask.bs.inputmask", a.proxy(this.unmask, this)).on("focus.bs.inputmask", a.proxy(this.focusEvent, this)).on("blur.bs.inputmask", a.proxy(this.blurEvent, this)).on("keydown.bs.inputmask", a.proxy(this.keydownEvent, this)).on("keypress.bs.inputmask", a.proxy(this.keypressEvent, this)).on(b, a.proxy(this.pasteEvent, this))
        }
    }, e.prototype.caret = function (a, b) {
        if (0 !== this.$element.length) {
            if ("number" == typeof a) return b = "number" == typeof b ? b : a, this.$element.each(function () {
                if (this.setSelectionRange) this.setSelectionRange(a, b);
                else if (this.createTextRange) {
                    var c = this.createTextRange();
                    c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()
                }
            });
            if (this.$element[0].setSelectionRange) a = this.$element[0].selectionStart, b = this.$element[0].selectionEnd;
            else if (document.selection && document.selection.createRange) {
                var c = document.selection.createRange();
                a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length
            }
            return {
                begin: a,
                end: b
            }
        }
    }, e.prototype.seekNext = function (a) {
        for (var b = this.mask.length; ++a <= b && !this.tests[a];);
        return a
    }, e.prototype.seekPrev = function (a) {
        for (; --a >= 0 && !this.tests[a];);
        return a
    }, e.prototype.shiftL = function (a, b) {
        var c = this.mask.length;
        if (!(0 > a)) {
            for (var d = a, e = this.seekNext(b); c > d; d++)
                if (this.tests[d]) {
                    if (!(c > e && this.tests[d].test(this.buffer[e]))) break;
                    this.buffer[d] = this.buffer[e], this.buffer[e] = this.options.placeholder, e = this.seekNext(e)
                } this.writeBuffer(), this.caret(Math.max(this.firstNonMaskPos, a))
        }
    }, e.prototype.shiftR = function (a) {
        for (var b = this.mask.length, c = a, d = this.options.placeholder; b > c; c++)
            if (this.tests[c]) {
                var e = this.seekNext(c),
                    f = this.buffer[c];
                if (this.buffer[c] = d, !(b > e && this.tests[e].test(f))) break;
                d = f
            }
    }, e.prototype.unmask = function () {
        this.$element.unbind(".mask").removeData("inputmask")
    }, e.prototype.focusEvent = function () {
        this.focusText = this.$element.val();
        var a = this.mask.length,
            b = this.checkVal();
        this.writeBuffer();
        var c = this,
            d = function () {
                b == a ? c.caret(0, b) : c.caret(b)
            };
        d(), setTimeout(d, 50)
    }, e.prototype.blurEvent = function () {
        this.checkVal(), this.$element.val() !== this.focusText && this.$element.trigger("change")
    }, e.prototype.keydownEvent = function (a) {
        var c = a.which;
        if (8 == c || 46 == c || b && 127 == c) {
            var d = this.caret(),
                e = d.begin,
                f = d.end;
            return 0 === f - e && (e = 46 != c ? this.seekPrev(e) : f = this.seekNext(e - 1), f = 46 == c ? this.seekNext(f) : f), this.clearBuffer(e, f), this.shiftL(e, f - 1), !1
        }
        return 27 == c ? (this.$element.val(this.focusText), this.caret(0, this.checkVal()), !1) : void 0
    }, e.prototype.keypressEvent = function (a) {
        var b = this.mask.length,
            c = a.which,
            d = this.caret();
        if (a.ctrlKey || a.altKey || a.metaKey || 32 > c) return !0;
        if (c) {
            0 !== d.end - d.begin && (this.clearBuffer(d.begin, d.end), this.shiftL(d.begin, d.end - 1));
            var e = this.seekNext(d.begin - 1);
            if (b > e) {
                var f = String.fromCharCode(c);
                if (this.tests[e].test(f)) {
                    this.shiftR(e), this.buffer[e] = f, this.writeBuffer();
                    var g = this.seekNext(e);
                    this.caret(g)
                }
            }
            return !1
        }
    }, e.prototype.pasteEvent = function () {
        var a = this;
        setTimeout(function () {
            a.caret(a.checkVal(!0))
        }, 0)
    }, e.prototype.clearBuffer = function (a, b) {
        for (var c = this.mask.length, d = a; b > d && c > d; d++) this.tests[d] && (this.buffer[d] = this.options.placeholder)
    }, e.prototype.writeBuffer = function () {
        return this.$element.val(this.buffer.join("")).val()
    }, e.prototype.checkVal = function (a) {
        for (var b = this.mask.length, c = this.$element.val(), d = -1, e = 0, f = 0; b > e; e++)
            if (this.tests[e]) {
                for (this.buffer[e] = this.options.placeholder; f++ < c.length;) {
                    var g = c.charAt(f - 1);
                    if (this.tests[e].test(g)) {
                        this.buffer[e] = g, d = e;
                        break
                    }
                }
                if (f > c.length) break
            } else this.buffer[e] == c.charAt(f) && e != this.partialPosition && (f++, d = e);
        return !a && d + 1 < this.partialPosition ? (this.$element.val(""), this.clearBuffer(0, b)) : (a || d + 1 >= this.partialPosition) && (this.writeBuffer(), a || this.$element.val(this.$element.val().substring(0, d + 1))), this.partialPosition ? e : this.firstNonMaskPos
    };
    var f = a.fn.inputmask;
    a.fn.inputmask = function (b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("inputmask");
            d || c.data("inputmask", d = new e(this, b))
        })
    }, a.fn.inputmask.Constructor = e, a.fn.inputmask.noConflict = function () {
        return a.fn.inputmask = f, this
    }, a(document).on("focus.bs.inputmask.data-api", "[data-mask]", function () {
        var b = a(this);
        b.data("inputmask") || b.inputmask(b.data())
    })
}(window.jQuery), + function (a) {
    "use strict";
    var b = "Microsoft Internet Explorer" == window.navigator.appName,
        c = function (b, c) {
            if (this.$element = a(b), this.$input = this.$element.find(":file"), 0 !== this.$input.length) {
                this.name = this.$input.attr("name") || c.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), 0 === this.$hidden.length && (this.$hidden = a('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileinput-preview");
                var d = this.$preview.css("height");
                "inline" != this.$preview.css("display") && "0px" != d && "none" != d && this.$preview.css("line-height", d), this.original = {
                    exists: this.$element.hasClass("fileinput-exists"),
                    preview: this.$preview.html(),
                    hiddenVal: this.$hidden.val()
                }, this.listen()
            }
        };
    c.prototype.listen = function () {
        this.$input.on("change.bs.fileinput", a.proxy(this.change, this)), a(this.$input[0].form).on("reset.bs.fileinput", a.proxy(this.reset, this)), this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput", a.proxy(this.trigger, this)), this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput", a.proxy(this.clear, this))
    }, c.prototype.change = function (b) {
        if (void 0 === b.target.files && (b.target.files = b.target && b.target.value ? [{
                name: b.target.value.replace(/^.+\\/, "")
            }] : []), 0 !== b.target.files.length) {
            this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
            var c = b.target.files[0];
            if (this.$preview.length > 0 && ("undefined" != typeof c.type ? c.type.match("image.*") : c.name.match(/\.(gif|png|jpe?g)$/i)) && "undefined" != typeof FileReader) {
                var d = new FileReader,
                    e = this.$preview,
                    f = this.$element;
                d.onload = function (d) {
                    var g = a("<img>").attr("src", d.target.result);
                    b.target.files[0].result = d.target.result, f.find(".fileinput-filename").text(c.name), "none" != e.css("max-height") && g.css("max-height", parseInt(e.css("max-height"), 10) - parseInt(e.css("padding-top"), 10) - parseInt(e.css("padding-bottom"), 10) - parseInt(e.css("border-top"), 10) - parseInt(e.css("border-bottom"), 10)), e.html(g), f.addClass("fileinput-exists").removeClass("fileinput-new"), f.trigger("change.bs.fileinput", b.target.files)
                }, d.readAsDataURL(c)
            } else this.$element.find(".fileinput-filename").text(c.name), this.$preview.text(c.name), this.$element.addClass("fileinput-exists").removeClass("fileinput-new"), this.$element.trigger("change.bs.fileinput")
        }
    }, c.prototype.clear = function (a) {
        if (a && a.preventDefault(), this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", ""), b) {
            var c = this.$input.clone(!0);
            this.$input.after(c), this.$input.remove(), this.$input = c
        } else this.$input.val("");
        this.$preview.html(""), this.$element.find(".fileinput-filename").text(""), this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), a !== !1 && (this.$input.trigger("change"), this.$element.trigger("clear.bs.fileinput"))
    }, c.prototype.reset = function () {
        this.clear(!1), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.$element.find(".fileinput-filename").text(""), this.original.exists ? this.$element.addClass("fileinput-exists").removeClass("fileinput-new") : this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), this.$element.trigger("reset.bs.fileinput")
    }, c.prototype.trigger = function (a) {
        this.$input.trigger("click"), a.preventDefault()
    }, a.fn.fileinput = function (b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("fileinput");
            e || d.data("fileinput", e = new c(this, b)), "string" == typeof b && e[b]()
        })
    }, a.fn.fileinput.Constructor = c, a(document).on("click.fileinput.data-api", '[data-provides="fileinput"]', function (b) {
        var c = a(this);
        if (!c.data("fileinput")) {
            c.fileinput(c.data());
            var d = a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
            d.length > 0 && (b.preventDefault(), d.trigger("click.bs.fileinput"))
        }
    })
}(window.jQuery);
! function (a) {
    a.fn.unveil = function (b, c) {
        function j() {
            var b = h.filter(function () {
                var b = a(this);
                if (!b.is(":hidden")) {
                    var c = d.scrollTop(),
                        f = c + d.height(),
                        g = b.offset().top,
                        h = g + b.height();
                    return h >= c - e && g <= f + e
                }
            });
            i = b.trigger("unveil"), h = h.not(i)
        }
        var i, d = a(window),
            e = b || 0,
            f = window.devicePixelRatio > 1,
            g = f ? "data-src-retina" : "data-src",
            h = this;
        return this.one("unveil", function () {
            var a = this.getAttribute(g);
            a = a || this.getAttribute("data-src"), a && (this.setAttribute("src", a), "function" == typeof c && c.call(this))
        }), d.on("scroll.unveil resize.unveil lookup.unveil", j), j(), this
    }
}(window.jQuery || window.Zepto);
var Mainloading = !1;
var ajaxClassAllRequests = {};
// ajaxclass = function (options) {
//     var $t = this;
//     $t.timeout = 30000;
//     $t.timeoutfunc = $t.interval = !1;
//     $t.rerty = 3;
//     $t.currentloop = 0;
//     $t.fillobject(options)
// }



var startSearch = function () {
    var val = $('#searchformquery').val();
    val = $.trim(val);
    if (searchLastVal == val && searchContainer.is(':visible')) {
        return !0
    }
    searchLastVal = val;
    searchAjaxHandler.dataarray = {
        q: val
    };
    searchAjaxHandler.abortAll();
    searchAjaxHandler.send();
    searchContainer.show()
}
var createBox = function (res) {
    searchContainer.removeClass('khooger-loading').html('');
    searchContainer.css('opacity', 1);
    if (res.data.cats.length > 0) {
        createSearchHeaders(lang.categories);
        for (var i in res.data.cats) {
            var obj = res.data.cats[i];
            createCategoryRow(obj)
        }
    }
    createSearchHeaders(lang.products);
    for (var i in res.data.products) {
        var obj = res.data.products[i];
        createProductRow(obj)
    }
}
var createSearchHeaders = function (text) {
    var span = $(document.createElement('div'));
    span.text(text).css('margin-top', '5px');
    searchContainer.append(span);
    var hr = $(document.createElement('hr'));
    hr.css('margin', '2px');
    searchContainer.append(hr)
}
var createCategoryRow = function (obj) {
    var div = $(document.createElement('div'));
    var a = $(document.createElement('a'));
    a.attr('href', obj.url).appendTo(div);
    a.text(obj.title);
    searchContainer.append(div)
}
var createProductRow = function (obj) {
    var media = $(document.createElement('div'));
    media.addClass('media');
    var mediaLeft = $(document.createElement('div'));
    mediaLeft.addClass('media-left');
    media.append(mediaLeft);
    var a = $(document.createElement('a'));
    a.attr('href', obj.url);
    mediaLeft.append(a);
    var img = $(document.createElement('img'));
    img.attr('src', obj.image).appendTo(a);
    var mediaBody = $(document.createElement('a'));
    mediaBody.attr('href', obj.url).addClass('media-body').text(obj.xproduct_code).appendTo(media);
    var mediaHeading = $(document.createElement('h6'));
    mediaHeading.addClass('media-heading').text(obj.xproduct_name).prependTo(mediaBody);
    media.appendTo(searchContainer)
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i
    }
    return Array.from(e)
}
var _slice = Array.prototype.slice;
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery)
}(this, function (e) {
    "use strict";

    function t(e, t) {
        return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function () {
            var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(this), e.apply(t || T, i)
        }), e.parsleyAdaptedCallback
    }

    function i(e) {
        return 0 === e.lastIndexOf(D, 0) ? e.substr(D.length) : e
    }

    function n() {
        var t = this,
            i = window || global;
        e.extend(this, {
            isNativeEvent: function (e) {
                return e.originalEvent && e.originalEvent.isTrusted !== !1
            },
            fakeInputEvent: function (i) {
                t.isNativeEvent(i) && e(i.target).trigger("input")
            },
            misbehaves: function (i) {
                t.isNativeEvent(i) && (t.behavesOk(i), e(document).on("change.inputevent", i.data.selector, t.fakeInputEvent), t.fakeInputEvent(i))
            },
            behavesOk: function (i) {
                t.isNativeEvent(i) && e(document).off("input.inputevent", i.data.selector, t.behavesOk).off("change.inputevent", i.data.selector, t.misbehaves)
            },
            install: function () {
                if (!i.inputEventPatched) {
                    i.inputEventPatched = "0.0.3";
                    for (var n = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], r = 0; r < n.length; r++) {
                        var s = n[r];
                        e(document).on("input.inputevent", s, {
                            selector: s
                        }, t.behavesOk).on("change.inputevent", s, {
                            selector: s
                        }, t.misbehaves)
                    }
                }
            },
            uninstall: function () {
                delete i.inputEventPatched, e(document).off(".inputevent")
            }
        })
    }
    var r = 1,
        s = {},
        a = {
            attr: function (e, t, i) {
                var n, r, s, a = new RegExp("^" + t, "i");
                if ("undefined" == typeof i) i = {};
                else
                    for (n in i) i.hasOwnProperty(n) && delete i[n];
                if ("undefined" == typeof e || "undefined" == typeof e[0]) return i;
                for (s = e[0].attributes, n = s.length; n--;) r = s[n], r && r.specified && a.test(r.name) && (i[this.camelize(r.name.slice(t.length))] = this.deserializeValue(r.value));
                return i
            },
            checkAttr: function (e, t, i) {
                return e.is("[" + t + i + "]")
            },
            setAttr: function (e, t, i, n) {
                e[0].setAttribute(this.dasherize(t + i), String(n))
            },
            generateID: function () {
                return "" + r++
            },
            deserializeValue: function (t) {
                var i;
                try {
                    return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : isNaN(i = Number(t)) ? /^[\[\{]/.test(t) ? e.parseJSON(t) : t : i) : t
                } catch (n) {
                    return t
                }
            },
            camelize: function (e) {
                return e.replace(/-+(.)?/g, function (e, t) {
                    return t ? t.toUpperCase() : ""
                })
            },
            dasherize: function (e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            },
            warn: function () {
                var e;
                window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
            },
            warnOnce: function (e) {
                s[e] || (s[e] = !0, this.warn.apply(this, arguments))
            },
            _resetWarnings: function () {
                s = {}
            },
            trimString: function (e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            namespaceEvents: function (t, i) {
                return t = this.trimString(t || "").split(/\s+/), t[0] ? e.map(t, function (e) {
                    return e + "." + i
                }).join(" ") : ""
            },
            difference: function (t, i) {
                var n = [];
                return e.each(t, function (e, t) {
                    -1 == i.indexOf(t) && n.push(t)
                }), n
            },
            all: function (t) {
                return e.when.apply(e, _toConsumableArray(t).concat([42, 42]))
            },
            objectCreate: Object.create || function () {
                var e = function () {};
                return function (t) {
                    if (arguments.length > 1) throw Error("Second argument not supported");
                    if ("object" != typeof t) throw TypeError("Argument must be an object");
                    e.prototype = t;
                    var i = new e;
                    return e.prototype = null, i
                }
            }(),
            _SubmitSelector: 'input[type="submit"], button:submit'
        },
        o = a,
        l = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            multiple: null,
            group: null,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            triggerAfterFailure: "input",
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function (e) {},
            errorsContainer: function (e) {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        u = function () {
            this.__id__ = o.generateID()
        };
    u.prototype = {
        asyncSupport: !0,
        _pipeAccordingToValidationResult: function () {
            var t = this,
                i = function () {
                    var i = e.Deferred();
                    return !0 !== t.validationResult && i.reject(), i.resolve().promise()
                };
            return [i, i]
        },
        actualizeOptions: function () {
            return o.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
        },
        _resetOptions: function (e) {
            this.domOptions = o.objectCreate(this.parent.options), this.options = o.objectCreate(this.domOptions);
            for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
            this.actualizeOptions()
        },
        _listeners: null,
        on: function (e, t) {
            this._listeners = this._listeners || {};
            var i = this._listeners[e] = this._listeners[e] || [];
            return i.push(t), this
        },
        subscribe: function (t, i) {
            e.listenTo(this, t.toLowerCase(), i)
        },
        off: function (e, t) {
            var i = this._listeners && this._listeners[e];
            if (i)
                if (t)
                    for (var n = i.length; n--;) i[n] === t && i.splice(n, 1);
                else delete this._listeners[e];
            return this
        },
        unsubscribe: function (t, i) {
            e.unsubscribeTo(this, t.toLowerCase())
        },
        trigger: function (e, t, i) {
            t = t || this;
            var n, r = this._listeners && this._listeners[e];
            if (r)
                for (var s = r.length; s--;)
                    if (n = r[s].call(t, t, i), n === !1) return n;
            return this.parent ? this.parent.trigger(e, t, i) : !0
        },
        reset: function () {
            if ("ParsleyForm" !== this.__class__) return this._resetUI(), this._trigger("reset");
            for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
            this._trigger("reset")
        },
        destroy: function () {
            if (this._destroyUI(), "ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
            for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy")
        },
        asyncIsValid: function (e, t) {
            return o.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
                group: e,
                force: t
            })
        },
        _findRelated: function () {
            return this.options.multiple ? this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]') : this.$element
        }
    };
    var d = {
            string: function (e) {
                return e
            },
            integer: function (e) {
                if (isNaN(e)) throw 'Requirement is not an integer: "' + e + '"';
                return parseInt(e, 10)
            },
            number: function (e) {
                if (isNaN(e)) throw 'Requirement is not a number: "' + e + '"';
                return parseFloat(e)
            },
            reference: function (t) {
                var i = e(t);
                if (0 === i.length) throw 'No such reference: "' + t + '"';
                return i
            },
            "boolean": function (e) {
                return "false" !== e
            },
            object: function (e) {
                return o.deserializeValue(e)
            },
            regexp: function (e) {
                var t = "";
                return /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : e = "^" + e + "$", new RegExp(e, t)
            }
        },
        h = function (e, t) {
            var i = e.match(/^\s*\[(.*)\]\s*$/);
            if (!i) throw 'Requirement is not an array: "' + e + '"';
            var n = i[1].split(",").map(o.trimString);
            if (n.length !== t) throw "Requirement has " + n.length + " values when " + t + " are needed";
            return n
        },
        p = function (e, t) {
            var i = d[e || "string"];
            if (!i) throw 'Unknown requirement specification: "' + e + '"';
            return i(t)
        },
        c = function (e, t, i) {
            var n = null,
                r = {};
            for (var s in e)
                if (s) {
                    var a = i(s);
                    "string" == typeof a && (a = p(e[s], a)), r[s] = a
                } else n = p(e[s], t);
            return [n, r]
        },
        f = function (t) {
            e.extend(!0, this, t)
        };
    f.prototype = {
        validate: function (t, i) {
            if (this.fn) return arguments.length > 3 && (i = [].slice.call(arguments, 1, -1)), this.fn.call(this, t, i);
            if (e.isArray(t)) {
                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments)
            }
            if (this.validateNumber) return isNaN(t) ? !1 : (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
            if (this.validateString) return this.validateString.apply(this, arguments);
            throw "Validator `" + this.name + "` only handles multiple values"
        },
        parseRequirements: function (t, i) {
            if ("string" != typeof t) return e.isArray(t) ? t : [t];
            var n = this.requirementType;
            if (e.isArray(n)) {
                for (var r = h(t, n.length), s = 0; s < r.length; s++) r[s] = p(n[s], r[s]);
                return r
            }
            return e.isPlainObject(n) ? c(n, t, i) : [p(n, t)]
        },
        requirementType: "string",
        priority: 2
    };
    var m = function (e, t) {
            this.__class__ = "ParsleyValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
        },
        g = {
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
            integer: /^-?\d+$/,
            digits: /^\d+$/,
            alphanum: /^\w+$/i,
            url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i")
        };
    g.range = g.number;
    var v = function (e) {
        var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
    };
    m.prototype = {
        init: function (t, i) {
            this.catalog = i, this.validators = e.extend({}, this.validators);
            for (var n in t) this.addValidator(n, t[n].fn, t[n].priority);
            window.Parsley.trigger("parsley:validator:init")
        },
        setLocale: function (e) {
            if ("undefined" == typeof this.catalog[e]) throw new Error(e + " is not available in the catalog");
            return this.locale = e, this
        },
        addCatalog: function (e, t, i) {
            return "object" == typeof t && (this.catalog[e] = t), !0 === i ? this.setLocale(e) : this
        },
        addMessage: function (e, t, i) {
            return "undefined" == typeof this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = i, this
        },
        addMessages: function (e, t) {
            for (var i in t) this.addMessage(e, i, t[i]);
            return this
        },
        addValidator: function (e, t, i) {
            if (this.validators[e]) o.warn('Validator "' + e + '" is already defined.');
            else if (l.hasOwnProperty(e)) return void o.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments)
        },
        updateValidator: function (e, t, i) {
            return this.validators[e] ? this._setValidator.apply(this, arguments) : (o.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments))
        },
        removeValidator: function (e) {
            return this.validators[e] || o.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
        },
        _setValidator: function (e, t, i) {
            "object" != typeof t && (t = {
                fn: t,
                priority: i
            }), t.validate || (t = new f(t)), this.validators[e] = t;
            for (var n in t.messages || {}) this.addMessage(n, e, t.messages[n]);
            return this
        },
        getErrorMessage: function (e) {
            var t;
            if ("type" === e.name) {
                var i = this.catalog[this.locale][e.name] || {};
                t = i[e.requirements]
            } else t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements);
            return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
        },
        formatMessage: function (e, t) {
            if ("object" == typeof t) {
                for (var i in t) e = this.formatMessage(e, t[i]);
                return e
            }
            return "string" == typeof e ? e.replace(/%s/i, t) : ""
        },
        validators: {
            notblank: {
                validateString: function (e) {
                    return /\S/.test(e)
                },
                priority: 2
            },
            required: {
                validateMultiple: function (e) {
                    return e.length > 0
                },
                validateString: function (e) {
                    return /\S/.test(e)
                },
                priority: 512
            },
            type: {
                validateString: function (e, t) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        n = i.step,
                        r = void 0 === n ? "any" : n,
                        s = i.base,
                        a = void 0 === s ? 0 : s,
                        o = g[t];
                    if (!o) throw new Error("validator type `" + t + "` is not supported");
                    if (!o.test(e)) return !1;
                    if ("number" === t && !/^any$/i.test(r || "")) {
                        var l = Number(e),
                            u = Math.max(v(r), v(a));
                        if (v(l) > u) return !1;
                        var d = function (e) {
                            return Math.round(e * Math.pow(10, u))
                        };
                        if ((d(l) - d(a)) % d(r) != 0) return !1
                    }
                    return !0
                },
                requirementType: {
                    "": "string",
                    step: "string",
                    base: "number"
                },
                priority: 256
            },
            pattern: {
                validateString: function (e, t) {
                    return t.test(e)
                },
                requirementType: "regexp",
                priority: 64
            },
            minlength: {
                validateString: function (e, t) {
                    return e.length >= t
                },
                requirementType: "integer",
                priority: 30
            },
            maxlength: {
                validateString: function (e, t) {
                    return e.length <= t
                },
                requirementType: "integer",
                priority: 30
            },
            length: {
                validateString: function (e, t, i) {
                    return e.length >= t && e.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            mincheck: {
                validateMultiple: function (e, t) {
                    return e.length >= t
                },
                requirementType: "integer",
                priority: 30
            },
            maxcheck: {
                validateMultiple: function (e, t) {
                    return e.length <= t
                },
                requirementType: "integer",
                priority: 30
            },
            check: {
                validateMultiple: function (e, t, i) {
                    return e.length >= t && e.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            min: {
                validateNumber: function (e, t) {
                    return e >= t
                },
                requirementType: "number",
                priority: 30
            },
            max: {
                validateNumber: function (e, t) {
                    return t >= e
                },
                requirementType: "number",
                priority: 30
            },
            range: {
                validateNumber: function (e, t, i) {
                    return e >= t && i >= e
                },
                requirementType: ["number", "number"],
                priority: 30
            },
            equalto: {
                validateString: function (t, i) {
                    var n = e(i);
                    return n.length ? t === n.val() : t === i
                },
                priority: 256
            }
        }
    };
    var y = {},
        _ = function k(e, t, i) {
            for (var n = [], r = [], s = 0; s < e.length; s++) {
                for (var a = !1, o = 0; o < t.length; o++)
                    if (e[s].assert.name === t[o].assert.name) {
                        a = !0;
                        break
                    } a ? r.push(e[s]) : n.push(e[s])
            }
            return {
                kept: r,
                added: n,
                removed: i ? [] : k(t, e, !0).added
            }
        };
    y.Form = {
        _actualizeTriggers: function () {
            var e = this;
            this.$element.on("submit.Parsley", function (t) {
                e.onSubmitValidate(t)
            }), this.$element.on("click.Parsley", o._SubmitSelector, function (t) {
                e.onSubmitButton(t)
            }), !1 !== this.options.uiEnabled && this.$element.attr("novalidate", "")
        },
        focus: function () {
            if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null;
            for (var e = 0; e < this.fields.length; e++) {
                var t = this.fields[e];
                if (!0 !== t.validationResult && t.validationResult.length > 0 && "undefined" == typeof t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
            }
            return null === this._focusedField ? null : this._focusedField.focus()
        },
        _destroyUI: function () {
            this.$element.off(".Parsley")
        }
    }, y.Field = {
        _reflowUI: function () {
            if (this._buildUI(), this._ui) {
                var e = _(this.validationResult, this._ui.lastValidationResult);
                this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
            }
        },
        getErrorsMessages: function () {
            if (!0 === this.validationResult) return [];
            for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
            return e
        },
        addError: function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                n = t.assert,
                r = t.updateClass,
                s = void 0 === r ? !0 : r;
            this._buildUI(), this._addError(e, {
                message: i,
                assert: n
            }), s && this._errorClass()
        },
        updateError: function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                n = t.assert,
                r = t.updateClass,
                s = void 0 === r ? !0 : r;
            this._buildUI(), this._updateError(e, {
                message: i,
                assert: n
            }), s && this._errorClass()
        },
        removeError: function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.updateClass,
                n = void 0 === i ? !0 : i;
            this._buildUI(), this._removeError(e), n && this._manageStatusClass()
        },
        _manageStatusClass: function () {
            this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
        },
        _manageErrorsMessages: function (t) {
            if ("undefined" == typeof this.options.errorsMessagesDisabled) {
                if ("undefined" != typeof this.options.errorMessage) return t.added.length || t.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var i = 0; i < t.removed.length; i++) this._removeError(t.removed[i].assert.name);
                for (i = 0; i < t.added.length; i++) this._addError(t.added[i].assert.name, {
                    message: t.added[i].errorMessage,
                    assert: t.added[i].assert
                });
                for (i = 0; i < t.kept.length; i++) this._updateError(t.kept[i].assert.name, {
                    message: t.kept[i].errorMessage,
                    assert: t.kept[i].assert
                })
            }
        },
        _addError: function (t, i) {
            var n = i.message,
                r = i.assert;
            this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-" + t).html(n || this._getErrorMessage(r)))
        },
        _updateError: function (e, t) {
            var i = t.message,
                n = t.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(n))
        },
        _removeError: function (e) {
            this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
        },
        _getErrorMessage: function (e) {
            var t = e.name + "Message";
            return "undefined" != typeof this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
        },
        _buildUI: function () {
            if (!this._ui && !1 !== this.options.uiEnabled) {
                var t = {};
                this.$element.attr(this.options.namespace + "id", this.__id__), t.$errorClassHandler = this._manageClassHandler(), t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId), t.lastValidationResult = [], t.validationInformationVisible = !1, this._ui = t
            }
        },
        _manageClassHandler: function () {
            if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length) return e(this.options.classHandler);
            var t = this.options.classHandler.call(this, this);
            return "undefined" != typeof t && t.length ? t : this._inputHolder()
        },
        _inputHolder: function () {
            return !this.options.multiple || this.$element.is("select") ? this.$element : this.$element.parent()
        },
        _insertErrorWrapper: function () {
            var t;
            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
            if ("string" == typeof this.options.errorsContainer) {
                if (e(this.options.errorsContainer).length) return e(this.options.errorsContainer).append(this._ui.$errorsWrapper);
                o.warn("The errors container `" + this.options.errorsContainer + "` does not exist in DOM")
            } else "function" == typeof this.options.errorsContainer && (t = this.options.errorsContainer.call(this, this));
            return "undefined" != typeof t && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
        },
        _actualizeTriggers: function () {
            var e, t = this,
                i = this._findRelated();
            i.off(".Parsley"), this._failedOnce ? i.on(o.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function () {
                t._validateIfNeeded()
            }) : (e = o.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, function (e) {
                t._validateIfNeeded(e)
            })
        },
        _validateIfNeeded: function (e) {
            var t = this;
            e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function () {
                return t.validate()
            }, this.options.debounce)) : this.validate())
        },
        _resetUI: function () {
            this._failedOnce = !1, this._actualizeTriggers(), "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
        },
        _destroyUI: function () {
            this._resetUI(), "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
        },
        _successClass: function () {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
        },
        _errorClass: function () {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
        },
        _resetClass: function () {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
        }
    };
    var w = function (t, i, n) {
            this.__class__ = "ParsleyForm", this.$element = e(t), this.domOptions = i, this.options = n, this.parent = window.Parsley, this.fields = [], this.validationResult = null
        },
        b = {
            pending: null,
            resolved: !0,
            rejected: !1
        };
    w.prototype = {
        onSubmitValidate: function (e) {
            var t = this;
            if (!0 !== e.parsley) {
                var i = this._$submitSource || this.$element.find(o._SubmitSelector).first();
                if (this._$submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i.is("[formnovalidate]")) {
                    var n = this.whenValidate({
                        event: e
                    });
                    "resolved" === n.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === n.state() && n.done(function () {
                        t._submit(i)
                    }))
                }
            }
        },
        onSubmitButton: function (t) {
            this._$submitSource = e(t.currentTarget)
        },
        _submit: function (t) {
            if (!1 !== this._trigger("submit")) {
                if (t) {
                    var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === i.length && (i = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), i.attr({
                        name: t.attr("name"),
                        value: t.attr("value")
                    })
                }
                this.$element.trigger(e.extend(e.Event("submit"), {
                    parsley: !0
                }))
            }
        },
        validate: function (t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                o.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1],
                    s = i[2];
                t = {
                    group: n,
                    force: r,
                    event: s
                }
            }
            return b[this.whenValidate(t).state()]
        },
        whenValidate: function () {
            var t, i = this,
                n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = n.group,
                s = n.force,
                a = n.event;
            this.submitEvent = a, a && (this.submitEvent = e.extend({}, a, {
                preventDefault: function () {
                    o.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), i.validationResult = !1
                }
            })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
            var l = this._withoutReactualizingFormOptions(function () {
                return e.map(i.fields, function (e) {
                    return e.whenValidate({
                        force: s,
                        group: r
                    })
                })
            });
            return (t = o.all(l).done(function () {
                i._trigger("success")
            }).fail(function () {
                i.validationResult = !1, i.focus(), i._trigger("error")
            }).always(function () {
                i._trigger("validated")
            })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()))
        },
        isValid: function (t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                o.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1];
                t = {
                    group: n,
                    force: r
                }
            }
            return b[this.whenValid(t).state()]
        },
        whenValid: function () {
            var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.group,
                r = i.force;
            this._refreshFields();
            var s = this._withoutReactualizingFormOptions(function () {
                return e.map(t.fields, function (e) {
                    return e.whenValid({
                        group: n,
                        force: r
                    })
                })
            });
            return o.all(s)
        },
        _refreshFields: function () {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function () {
            var t = this,
                i = this.fields;
            return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function () {
                t.$element.find(t.options.inputs).not(t.options.excluded).each(function (e, i) {
                    var n = new window.Parsley.Factory(i, {}, t);
                    "ParsleyField" !== n.__class__ && "ParsleyFieldMultiple" !== n.__class__ || !0 === n.options.excluded || "undefined" == typeof t.fieldsMappedById[n.__class__ + "-" + n.__id__] && (t.fieldsMappedById[n.__class__ + "-" + n.__id__] = n, t.fields.push(n))
                }), e.each(o.difference(i, t.fields), function (e, t) {
                    t._trigger("reset")
                })
            }), this
        },
        _withoutReactualizingFormOptions: function (e) {
            var t = this.actualizeOptions;
            this.actualizeOptions = function () {
                return this
            };
            var i = e();
            return this.actualizeOptions = t, i
        },
        _trigger: function (e) {
            return this.trigger("form:" + e)
        }
    };
    var F = function (t, i, n, r, s) {
            if (!/ParsleyField/.test(t.__class__)) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
            var a = window.Parsley._validatorRegistry.validators[i],
                o = new f(a);
            e.extend(this, {
                validator: o,
                name: i,
                requirements: n,
                priority: r || t.options[i + "Priority"] || o.priority,
                isDomConstraint: !0 === s
            }), this._parseRequirements(t.options)
        },
        C = function (e) {
            var t = e[0].toUpperCase();
            return t + e.slice(1)
        };
    F.prototype = {
        validate: function (e, t) {
            var i;
            return (i = this.validator).validate.apply(i, [e].concat(_toConsumableArray(this.requirementList), [t]))
        },
        _parseRequirements: function (e) {
            var t = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function (i) {
                return e[t.name + C(i)]
            })
        }
    };
    var $ = function (t, i, n, r) {
            this.__class__ = "ParsleyField", this.$element = e(t), "undefined" != typeof r && (this.parent = r), this.options = n, this.domOptions = i, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
        },
        x = {
            pending: null,
            resolved: !0,
            rejected: !1
        };
    $.prototype = {
        validate: function (t) {
            arguments.length >= 1 && !e.isPlainObject(t) && (o.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), t = {
                options: t
            });
            var i = this.whenValidate(t);
            if (!i) return !0;
            switch (i.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult
            }
        },
        whenValidate: function () {
            var e, t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.force,
                r = i.group;
            return this.refreshConstraints(), !r || this._isInGroup(r) ? (this.value = this.getValue(), this._trigger("validate"), (e = this.whenValid({
                force: n,
                value: this.value,
                _refreshed: !0
            }).always(function () {
                t._reflowUI()
            }).done(function () {
                t._trigger("success")
            }).fail(function () {
                t._trigger("error")
            }).always(function () {
                t._trigger("validated")
            })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult()))) : void 0
        },
        hasConstraints: function () {
            return 0 !== this.constraints.length
        },
        needsValidation: function (e) {
            return "undefined" == typeof e && (e = this.getValue()), !(!e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty)
        },
        _isInGroup: function (t) {
            return e.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t
        },
        isValid: function (t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                o.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1];
                t = {
                    force: n,
                    value: r
                }
            }
            var s = this.whenValid(t);
            return s ? x[s.state()] : !0
        },
        whenValid: function () {
            var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.force,
                r = void 0 === n ? !1 : n,
                s = i.value,
                a = i.group,
                l = i._refreshed;
            if (l || this.refreshConstraints(), !a || this._isInGroup(a)) {
                if (this.validationResult = !0, !this.hasConstraints()) return e.when();
                if ("undefined" != typeof s && null !== s || (s = this.getValue()), !this.needsValidation(s) && !0 !== r) return e.when();
                var u = this._getGroupedConstraints(),
                    d = [];
                return e.each(u, function (i, n) {
                    var r = o.all(e.map(n, function (e) {
                        return t._validateConstraint(s, e)
                    }));
                    return d.push(r), "rejected" === r.state() ? !1 : void 0
                }), o.all(d)
            }
        },
        _validateConstraint: function (t, i) {
            var n = this,
                r = i.validate(t, this);
            return !1 === r && (r = e.Deferred().reject()), o.all([r]).fail(function (e) {
                n.validationResult instanceof Array || (n.validationResult = []), n.validationResult.push({
                    assert: i,
                    errorMessage: "string" == typeof e && e
                })
            })
        },
        getValue: function () {
            var e;
            return e = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof e || null === e ? "" : this._handleWhitespace(e)
        },
        refreshConstraints: function () {
            return this.actualizeOptions()._bindConstraints()
        },
        addConstraint: function (e, t, i, n) {
            if (window.Parsley._validatorRegistry.validators[e]) {
                var r = new F(this, e, t, i, n);
                "undefined" !== this.constraintsByName[r.name] && this.removeConstraint(r.name), this.constraints.push(r), this.constraintsByName[r.name] = r
            }
            return this
        },
        removeConstraint: function (e) {
            for (var t = 0; t < this.constraints.length; t++)
                if (e === this.constraints[t].name) {
                    this.constraints.splice(t, 1);
                    break
                } return delete this.constraintsByName[e], this
        },
        updateConstraint: function (e, t, i) {
            return this.removeConstraint(e).addConstraint(e, t, i)
        },
        _bindConstraints: function () {
            for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (e.push(this.constraints[i]), t[this.constraints[i].name] = this.constraints[i]);
            this.constraints = e, this.constraintsByName = t;
            for (var n in this.options) this.addConstraint(n, this.options[n], void 0, !0);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function () {
            this.$element.attr("required") && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "date" !== this.$element.attr("type") && "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "date" !== this.$element.attr("type") && "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "date" !== this.$element.attr("type") && "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
            var e = this.$element.attr("type");
            return "undefined" == typeof e ? this : "number" === e ? this.addConstraint("type", ["number", {
                step: this.$element.attr("step") || "1",
                base: this.$element.attr("min") || this.$element.attr("value")
            }], void 0, !0) : /^(email|url|range)$/i.test(e) ? this.addConstraint("type", e, void 0, !0) : this
        },
        _isRequired: function () {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        },
        _trigger: function (e) {
            return this.trigger("field:" + e)
        },
        _handleWhitespace: function (e) {
            return !0 === this.options.trimValue && o.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = o.trimString(e)), e
        },
        _getGroupedConstraints: function () {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
                var n = this.constraints[i].priority;
                t[n] || e.push(t[n] = []), t[n].push(this.constraints[i])
            }
            return e.sort(function (e, t) {
                return t[0].priority - e[0].priority
            }), e
        }
    };
    var E = $,
        P = function () {
            this.__class__ = "ParsleyFieldMultiple"
        };
    P.prototype = {
        addElement: function (e) {
            return this.$elements.push(e), this
        },
        refreshConstraints: function () {
            var t;
            if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
            for (var i = 0; i < this.$elements.length; i++)
                if (e("html").has(this.$elements[i]).length) {
                    t = this.$elements[i].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var n = 0; n < t.length; n++) this.addConstraint(t[n].name, t[n].requirements, t[n].priority, t[n].isDomConstraint)
                } else this.$elements.splice(i, 1);
            return this
        },
        getValue: function () {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if ("undefined" != typeof this.options.value) return this.options.value;
            if (this.$element.is("input[type=radio]")) return this._findRelated().filter(":checked").val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var t = [];
                return this._findRelated().filter(":checked").each(function () {
                    t.push(e(this).val())
                }), t
            }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function () {
            return this.$elements = [this.$element], this
        }
    };
    var V = function (t, i, n) {
        this.$element = e(t);
        var r = this.$element.data("Parsley");
        if (r) return "undefined" != typeof n && r.parent === window.Parsley && (r.parent = n, r._resetOptions(r.options)), "object" == typeof i && e.extend(r.options, i), r;
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if ("undefined" != typeof n && "ParsleyForm" !== n.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
        return this.parent = n || window.Parsley, this.init(i)
    };
    V.prototype = {
        init: function (e) {
            return this.__class__ = "Parsley", this.__version__ = "2.6.2", this.__id__ = o.generateID(), this._resetOptions(e), this.$element.is("form") || o.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
        },
        isMultiple: function () {
            return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        },
        handleMultiple: function () {
            var t, i, n = this;
            if (this.options.multiple || ("undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = t = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return o.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof t && e('input[name="' + t + '"]').each(function (t, i) {
                e(i).is("input[type=radio], input[type=checkbox]") && e(i).attr(n.options.namespace + "multiple", n.options.multiple)
            });
            for (var r = this._findRelated(), s = 0; s < r.length; s++)
                if (i = e(r.get(s)).data("Parsley"), "undefined" != typeof i) {
                    this.$element.data("ParsleyFieldMultiple") || i.addElement(this.$element);
                    break
                } return this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple")
        },
        bind: function (t, i) {
            var n;
            switch (t) {
                case "parsleyForm":
                    n = e.extend(new w(this.$element, this.domOptions, this.options), new u, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    n = e.extend(new E(this.$element, this.domOptions, this.options, this.parent), new u, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    n = e.extend(new E(this.$element, this.domOptions, this.options, this.parent), new P, new u, window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(t + "is not a supported Parsley type")
            }
            return this.options.multiple && o.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof i ? (this.$element.data("ParsleyFieldMultiple", n), n) : (this.$element.data("Parsley", n), n._actualizeTriggers(), n._trigger("init"), n)
        }
    };
    var M = e.fn.jquery.split(".");
    if (parseInt(M[0]) <= 1 && parseInt(M[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    M.forEach || o.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var O = e.extend(new u, {
        $element: e(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: V,
        version: "2.6.2"
    });
    e.extend(E.prototype, y.Field, u.prototype), e.extend(w.prototype, y.Form, u.prototype), e.extend(V.prototype, u.prototype), e.fn.parsley = e.fn.psly = function (t) {
        if (this.length > 1) {
            var i = [];
            return this.each(function () {
                i.push(e(this).parsley(t))
            }), i
        }
        return e(this).length ? new V(this, t) : void o.warn("You must bind Parsley on an existing element.")
    }, "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), O.options = e.extend(o.objectCreate(l), window.ParsleyConfig), window.ParsleyConfig = O.options, window.Parsley = window.psly = O, window.ParsleyUtils = o;
    var A = window.Parsley._validatorRegistry = new m(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {}, e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "), function (t, i) {
        window.Parsley[i] = e.proxy(A, i), window.ParsleyValidator[i] = function () {
            var e;
            return o.warnOnce("Accessing the method '" + i + "' through ParsleyValidator is deprecated. Simply call 'window.Parsley." + i + "(...)'"), (e = window.Parsley)[i].apply(e, arguments)
        }
    }), window.Parsley.UI = y, window.ParsleyUI = {
        removeError: function (e, t, i) {
            var n = !0 !== i;
            return o.warnOnce("Accessing ParsleyUI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {
                updateClass: n
            })
        },
        getErrorsMessages: function (e) {
            return o.warnOnce("Accessing ParsleyUI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
        }
    }, e.each("addError updateError".split(" "), function (e, t) {
        window.ParsleyUI[t] = function (e, i, n, r, s) {
            var a = !0 !== s;
            return o.warnOnce("Accessing ParsleyUI is deprecated. Call '" + t + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[t](i, {
                message: n,
                assert: r,
                updateClass: a
            })
        }
    }), !1 !== window.ParsleyConfig.autoBind && e(function () {
        e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
    });
    var T = e({}),
        R = function () {
            o.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
        },
        D = "parsley:";
    e.listen = function (e, n) {
        var r;
        if (R(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (r = arguments[1], n = arguments[2]), "function" != typeof n) throw new Error("Wrong parameters");
        window.Parsley.on(i(e), t(n, r))
    }, e.listenTo = function (e, n, r) {
        if (R(), !(e instanceof E || e instanceof w)) throw new Error("Must give Parsley instance");
        if ("string" != typeof n || "function" != typeof r) throw new Error("Wrong parameters");
        e.on(i(n), t(r))
    }, e.unsubscribe = function (e, t) {
        if (R(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
        window.Parsley.off(i(e), t.parsleyAdaptedCallback)
    }, e.unsubscribeTo = function (e, t) {
        if (R(), !(e instanceof E || e instanceof w)) throw new Error("Must give Parsley instance");
        e.off(i(t))
    }, e.unsubscribeAll = function (t) {
        R(), window.Parsley.off(i(t)), e("form,input,textarea,select").each(function () {
            var n = e(this).data("Parsley");
            n && n.off(i(t))
        })
    }, e.emit = function (e, t) {
        var n;
        R();
        var r = t instanceof E || t instanceof w,
            s = Array.prototype.slice.call(arguments, r ? 2 : 1);
        s.unshift(i(e)), r || (t = window.Parsley), (n = t).trigger.apply(n, _toConsumableArray(s))
    };
    e.extend(!0, O, {
        asyncValidators: {
            "default": {
                fn: function (e) {
                    return e.status >= 200 && e.status < 300
                },
                url: !1
            },
            reverse: {
                fn: function (e) {
                    return e.status < 200 || e.status >= 300
                },
                url: !1
            }
        },
        addAsyncValidator: function (e, t, i, n) {
            return O.asyncValidators[e] = {
                fn: t,
                url: i || !1,
                options: n || {}
            }, this
        }
    }), O.addValidator("remote", {
        requirementType: {
            "": "string",
            validator: "string",
            reverse: "boolean",
            options: "object"
        },
        validateString: function (t, i, n, r) {
            var s, a, o = {},
                l = n.validator || (!0 === n.reverse ? "reverse" : "default");
            if ("undefined" == typeof O.asyncValidators[l]) throw new Error("Calling an undefined async validator: `" + l + "`");
            i = O.asyncValidators[l].url || i, i.indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(t)) : o[r.$element.attr("name") || r.$element.attr("id")] = t;
            var u = e.extend(!0, n.options || {}, O.asyncValidators[l].options);
            s = e.extend(!0, {}, {
                url: i,
                data: o,
                type: "GET"
            }, u), r.trigger("field:ajaxoptions", r, s), a = e.param(s), "undefined" == typeof O._remoteCache && (O._remoteCache = {});
            var d = O._remoteCache[a] = O._remoteCache[a] || e.ajax(s),
                h = function () {
                    var t = O.asyncValidators[l].fn.call(r, d, i, n);
                    return t || (t = e.Deferred().reject()), e.when(t)
                };
            return d.then(h, h)
        },
        priority: -1
    }), O.on("form:submit", function () {
        O._remoteCache = {}
    }), window.ParsleyExtend.addAsyncValidator = function () {
        return ParsleyUtils.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), O.addAsyncValidator.apply(O, arguments)
    }, O.addMessages("en", {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }), O.setLocale("en");
    var I = new n;
    I.install();
    var q = O;
    return q
});

function khoogerRating(formID, obj, commentable, ratingmodalInfo, modaltitle, errormsg) {
    var formData = $(formID).serialize();
    $.ajax({
        type: 'POST',
        url: $(formID).attr('action'),
        data: formData,
        dataType: "json",
        success: function (data) {
            if (data.status == "FAIL") {
                showMessage('GeneralErrorMessage', data.msg)
            } else {
                if (commentable == 1) {
                    var form = $('form[name="comment-form"]');
                    form.find('[name="rating_id"]').val(data.rateID);
                    form.find('.left-user-opinion').hide();
                    $('html, body').animate({
                        scrollTop: form.offset().top - 80
                    }, 500);
                    showMessage('GeneralSuccessMessage', data.msg)
                }
            }
        },
        error: function () {
            showMessage('GeneralErrorMessage', errormsg)
        }
    })
}

function setemailidfinall(id, type, lang) {
    idee2 = id;
    typee2 = type;
    $('#EmailModalinner').load('/auth/emailtofriend/format/html/id/' + id + '/type/' + type);
    console.log('/' + lang + '/auth/emailtofriend/format/html/id/' + id + '/type/' + type)
}

function addtoemailfinal(scsMsg, failmsg) {
    var url = '/auth/emailtofriend/id/' + idee2 + '/type/' + typee2;
    $.ajax({
        type: "POST",
        url: url,
        data: $("#add-to-email-form").serialize(),
        success: function (data) {
            if (data == "SEND") {
                showMessage('GeneralSuccessMessage', scsMsg)
            } else {
                showMessage('GeneralErrorMessage', failmsg)
            }
        }
    });
    $('#EmailModal2 #emailModelBody').html('<div id="loading2" >' + '<img src="/_images/loading3.gif" alt="loading">' + '</div><br>	<br>')
}

function setidfinal(id, type, lang) {
    ids = id;
    types = type;
    console.log('/' + lang + '/ideabook/addphoto/format/html/id/' + id + '/type/' + type);
    $.ajax({
        url: '/' + lang + '/ideabook/addphoto/format/html/id/' + id + '/type/' + type,
        success: function (data) {
            $('#ideaModal #ideaModelBody').html(data)
        }
    })
}

function addtoidea() {
    var url = '/ideabook/addphoto/id/' + ids + '/type/' + types;
    $.ajax({
        type: "POST",
        url: url,
        data: $("#add-to-idea-form").serialize(),
        success: function (data) {
            if (data !== "") {} else {}
        }
    });
    $('#IdeaModal2 #ideaModelBody').html('<div id="loading2"> ' + '<img  alt=""  src="/_images/loading3.gif">' + '</div><br> <br>')
}

function tagreposition(obj) {
    tagid = $(obj).attr('tag_id');
    imageselector = $(obj).attr('image_selector');
    holderselector = $(obj).attr('holder_selector');
    var offset = $(imageselector).offset();
    var offsetBg = $(holderselector).offset();
    lastoffsetX = offset.left - offsetBg.left;
    lastoffsetY = offset.top - offsetBg.top;
    final_x = ($(imageselector).width() * $(obj).attr('coordinate-x')) / 100 + lastoffsetX;
    final_y = ($(imageselector).height() * $(obj).attr('coordinate-y')) / 100 + lastoffsetY;
    $(obj).css({
        "left": final_x + "px"
    });
    $(obj).css({
        "top": final_y + "px"
    });
    $(obj).fadeIn();
    $(obj).css('opacity', '1');
    $(obj).popover({
        trigger: 'click hover',
        html: !0,
        placement: 'auto',
        delay: {
            show: 50,
            hide: 400
        }
    })
}

function changePassword(url) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: url,
        data: $('#changepassform').serialize(),
        success: function (data) {
            $("#changepassplace").html(data)
        }
    })
}

function refreshcaptcha(dest) {
    $.ajax({
        url: '/auth/refreshcaptcha',
        dataType: 'json',
        success: function (data) {
            $(dest).find('.capthca-image').find('img').attr('src', data.src);
            $(dest).find("input[name='captcha[id]']").attr('value', data.id)
        }
    })
}
$(document).ready(function () {


    $('.login-trigger').click(function(){
        if($('body').hasClass('khooger-loading'))
        return;


        if($('#register_popup').length==0){
        $.ajax({
                url:"/api/registerpop",
                type:"GET",
                beforeSend:function(){
                },
                success:function(res,status,xhr){

                        $('body').addClass('khooger-loading');
                        $('body').append(res.data);
                        $('body').removeClass('khooger-loading');

                },
                error:function(){

                }
            });//ajax
         }


     });




     $('.customer-trigger').click(function(){
        if($('body').hasClass('khooger-loading'))
        return;


        if($('#register_popup').length==0){
        $.ajax({
                url:"/api/cutomerpop",
                type:"GET",
                data:{"userid":$(this).data('user')},
                beforeSend:function(){
                },
                success:function(res,status,xhr){

                        $('body').addClass('khooger-loading');
                        $('body').append(res.data);
                        $('body').removeClass('khooger-loading');

                },
                error:function(){

                }
            });//ajax
         }else{
            $('#register_popup').remove();
            $(this).click()
         }


     });





    $(document).on('click', '#enter-form .captcha-refresh', function () {
        refreshcaptcha('#enter-form')
    });
    $(document).on('click', '#login-form .captcha-refresh', function () {
        refreshcaptcha('#enter-form')
    });
    $(document).on('click', '#loginForm .captcha-refresh', function () {
        refreshcaptcha('#enter-form')
    });
    $(document).on('click', '#resetpassform .captcha-refresh', function () {
        refreshcaptcha('#resetpassform')
    });
    $(document).on('click', '#register .captcha-refresh', function () {
        refreshcaptcha('#register')
    })
});

function khoogerlogin(url, redirect_url) {
    $('#login-modal .modal-body').css('pointer-events', 'none');
    $('#loginForm').append('<div id="loading3" ><i class="fa fa-refresh fa-spin fa-2x fa-fw margin-bottom" aria-hidden="true"></i></div>');
    destUrl = url;
    $.ajax({
        type: "POST",
        url: destUrl,
        data: $("#loginForm").serialize(),
        success: function (data) {
            $('#login-modal .modal-body').css('pointer-events', 'auto');
            if (data.status === 'error')
                alert(data.message);
            else if (redirect_url === undefined) {
                location.href = redirect_url
            }
        }
    })
}

function setupusernamekhooger(holder, form, dest) {
    $(holder).append('<div id="loading3" ><img src="/_images/loading3.gif"></div>');
    destUrl = dest;
    $.ajax({
        type: "POST",
        url: destUrl,
        data: $(form).serialize(),
        success: function (data) {
            $(holder).html(data)
        }
    })
}

function khoogerregister(form, destUrl) {
    $.ajax({
        type: "POST",
        url: destUrl,
        data: $(form).serialize(),
        success: function (data) {
            $("#signUpModal .modal-body").html(data)
        }
    })
};
(function (e) {
    "use strict";

    function t(e, t) {
        if (this.createTextRange) {
            var n = this.createTextRange();
            n.collapse(!0);
            n.moveStart("character", e);
            n.moveEnd("character", t - e);
            n.select()
        } else if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(e, t)
        }
    }

    function n(e) {
        var t = this.value.length;
        e = e.toLowerCase() == "start" ? "Start" : "End";
        if (document.selection) {
            var n = document.selection.createRange(),
                r, i, s;
            r = n.duplicate();
            r.expand("textedit");
            r.setEndPoint("EndToEnd", n);
            i = r.text.length - n.text.length;
            s = i + n.text.length;
            return e == "Start" ? i : s
        } else if (typeof this["selection" + e] != "undefined") {
            t = this["selection" + e]
        }
        return t
    }
    var r = {
        codes: {
            46: 127,
            188: 44,
            109: 45,
            190: 46,
            191: 47,
            192: 96,
            220: 92,
            222: 39,
            221: 93,
            219: 91,
            173: 45,
            187: 61,
            186: 59,
            189: 45,
            110: 46
        },
        shifts: {
            96: "~",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            48: ")",
            45: "_",
            61: "+",
            91: "{",
            93: "}",
            92: "|",
            59: ":",
            39: '"',
            44: "<",
            46: ">",
            47: "?"
        }
    };
    e.fn.number = function (i, s, o, u) {
        u = typeof u === "undefined" ? "," : u;
        o = typeof o === "undefined" ? "." : o;
        s = typeof s === "undefined" ? 0 : s;
        var a = "\\u" + ("0000" + o.charCodeAt(0).toString(16)).slice(-4),
            f = new RegExp("[^" + a + "0-9]", "g"),
            l = new RegExp(a, "g");
        if (i === !0) {
            if (this.is("input:text")) {
                return this.on({
                    "keydown.format": function (i) {
                        var a = e(this),
                            f = a.data("numFormat"),
                            l = i.keyCode ? i.keyCode : i.which,
                            c = "",
                            h = n.apply(this, ["start"]),
                            p = n.apply(this, ["end"]),
                            d = "",
                            v = !1;
                        if (r.codes.hasOwnProperty(l)) {
                            l = r.codes[l]
                        }
                        if (!i.shiftKey && l >= 65 && l <= 90) {
                            l += 32
                        } else if (!i.shiftKey && l >= 69 && l <= 105) {
                            l -= 48
                        } else if (i.shiftKey && r.shifts.hasOwnProperty(l)) {
                            c = r.shifts[l]
                        }
                        if (c == "") c = String.fromCharCode(l);
                        if (l != 8 && l != 45 && l != 127 && c != o && !c.match(/[0-9]/)) {
                            var m = i.keyCode ? i.keyCode : i.which;
                            if (m == 46 || m == 8 || m == 127 || m == 9 || m == 27 || m == 13 || (m == 65 || m == 82 || m == 80 || m == 83 || m == 70 || m == 72 || m == 66 || m == 74 || m == 84 || m == 90 || m == 61 || m == 173 || m == 48) && (i.ctrlKey || i.metaKey) === !0 || (m == 86 || m == 67 || m == 88) && (i.ctrlKey || i.metaKey) === !0 || m >= 35 && m <= 39 || m >= 112 && m <= 123) {
                                return
                            }
                            i.preventDefault();
                            return !1
                        }
                        if (h == 0 && p == this.value.length || a.val() == 0) {
                            if (l == 8) {
                                h = p = 1;
                                this.value = "";
                                f.init = s > 0 ? -1 : 0;
                                f.c = s > 0 ? -(s + 1) : 0;
                                t.apply(this, [0, 0])
                            } else if (c == o) {
                                h = p = 1;
                                this.value = "0" + o + (new Array(s + 1)).join("0");
                                f.init = s > 0 ? 1 : 0;
                                f.c = s > 0 ? -(s + 1) : 0
                            } else if (l == 45) {
                                h = p = 2;
                                this.value = "-0" + o + (new Array(s + 1)).join("0");
                                f.init = s > 0 ? 1 : 0;
                                f.c = s > 0 ? -(s + 1) : 0;
                                t.apply(this, [2, 2])
                            } else {
                                f.init = s > 0 ? -1 : 0;
                                f.c = s > 0 ? -s : 0
                            }
                        } else {
                            f.c = p - this.value.length
                        }
                        f.isPartialSelection = h == p ? false : !0;
                        if (s > 0 && c == o && h == this.value.length - s - 1) {
                            f.c++;
                            f.init = Math.max(0, f.init);
                            i.preventDefault();
                            v = this.value.length + f.c
                        } else if (l == 45 && (h != 0 || this.value.indexOf("-") == 0)) {
                            i.preventDefault()
                        } else if (c == o) {
                            f.init = Math.max(0, f.init);
                            i.preventDefault()
                        } else if (s > 0 && l == 127 && h == this.value.length - s - 1) {
                            i.preventDefault()
                        } else if (s > 0 && l == 8 && h == this.value.length - s) {
                            i.preventDefault();
                            f.c--;
                            v = this.value.length + f.c
                        } else if (s > 0 && l == 127 && h > this.value.length - s - 1) {
                            if (this.value === "") return;
                            if (this.value.slice(h, h + 1) != "0") {
                                d = this.value.slice(0, h) + "0" + this.value.slice(h + 1);
                                a.val(d)
                            }
                            i.preventDefault();
                            v = this.value.length + f.c
                        } else if (s > 0 && l == 8 && h > this.value.length - s) {
                            if (this.value === "") return;
                            if (this.value.slice(h - 1, h) != "0") {
                                d = this.value.slice(0, h - 1) + "0" + this.value.slice(h);
                                a.val(d)
                            }
                            i.preventDefault();
                            f.c--;
                            v = this.value.length + f.c
                        } else if (l == 127 && this.value.slice(h, h + 1) == u) {
                            i.preventDefault()
                        } else if (l == 8 && this.value.slice(h - 1, h) == u) {
                            i.preventDefault();
                            f.c--;
                            v = this.value.length + f.c
                        } else if (s > 0 && h == p && this.value.length > s + 1 && h > this.value.length - s - 1 && isFinite(+c) && !i.metaKey && !i.ctrlKey && !i.altKey && c.length === 1) {
                            if (p === this.value.length) {
                                d = this.value.slice(0, h - 1)
                            } else {
                                d = this.value.slice(0, h) + this.value.slice(h + 1)
                            }
                            this.value = d;
                            v = h
                        }
                        if (v !== !1) {
                            t.apply(this, [v, v])
                        }
                        a.data("numFormat", f)
                    },
                    "keyup.format": function (r) {
                        var i = e(this),
                            o = i.data("numFormat"),
                            u = r.keyCode ? r.keyCode : r.which,
                            a = n.apply(this, ["start"]),
                            f = n.apply(this, ["end"]),
                            l;
                        if (a === 0 && f === 0 && (u === 189 || u === 109)) {
                            i.val("-" + i.val());
                            a = 1;
                            o.c = 1 - this.value.length;
                            o.init = 1;
                            i.data("numFormat", o);
                            l = this.value.length + o.c;
                            t.apply(this, [l, l])
                        }
                        if (this.value === "" || (u < 48 || u > 57) && (u < 96 || u > 105) && u !== 8 && u !== 46 && u !== 110) return;
                        i.val(i.val());
                        if (s > 0) {
                            if (o.init < 1) {
                                a = this.value.length - s - (o.init < 0 ? 1 : 0);
                                o.c = a - this.value.length;
                                o.init = 1;
                                i.data("numFormat", o)
                            } else if (a > this.value.length - s && u != 8) {
                                o.c++;
                                i.data("numFormat", o)
                            }
                        }
                        if (u == 46 && !o.isPartialSelection) {
                            o.c++;
                            i.data("numFormat", o)
                        }
                        l = this.value.length + o.c;
                        t.apply(this, [l, l])
                    },
                    "paste.format": function (t) {
                        var n = e(this),
                            r = t.originalEvent,
                            i = null;
                        if (window.clipboardData && window.clipboardData.getData) {
                            i = window.clipboardData.getData("Text")
                        } else if (r.clipboardData && r.clipboardData.getData) {
                            i = r.clipboardData.getData("text/plain")
                        }
                        n.val(i);
                        t.preventDefault();
                        return !1
                    }
                }).each(function () {
                    var t = e(this).data("numFormat", {
                        c: -(s + 1),
                        decimals: s,
                        thousands_sep: u,
                        dec_point: o,
                        regex_dec_num: f,
                        regex_dec: l,
                        init: this.value.indexOf(".") ? true : !1
                    });
                    if (this.value === "") return;
                    t.val(t.val())
                })
            } else {
                return this.each(function () {
                    var t = e(this),
                        n = +t.text().replace(f, "").replace(l, ".");
                    t.number(!isFinite(n) ? 0 : +n, s, o, u)
                })
            }
        }
        return this.text(e.number.apply(window, arguments))
    };
    var i = null,
        s = null;
    if (e.isPlainObject(e.valHooks.text)) {
        if (e.isFunction(e.valHooks.text.get)) i = e.valHooks.text.get;
        if (e.isFunction(e.valHooks.text.set)) s = e.valHooks.text.set
    } else {
        e.valHooks.text = {}
    }
    e.valHooks.text.get = function (t) {
        var n = e(t),
            r, s, o = n.data("numFormat");
        if (!o) {
            if (e.isFunction(i)) {
                return i(t)
            } else {
                return undefined
            }
        } else {
            if (t.value === "") return "";
            r = +t.value.replace(o.regex_dec_num, "").replace(o.regex_dec, ".");
            return (t.value.indexOf("-") === 0 ? "-" : "") + (isFinite(r) ? r : 0)
        }
    };
    e.valHooks.text.set = function (t, n) {
        var r = e(t),
            i = r.data("numFormat");
        if (!i) {
            if (e.isFunction(s)) {
                return s(t, n)
            } else {
                return undefined
            }
        } else {
            var o = e.number(n, i.decimals, i.dec_point, i.thousands_sep);
            return t.value = o
        }
    };
    e.number = function (e, t, n, r) {
        r = typeof r === "undefined" ? "," : r;
        n = typeof n === "undefined" ? "." : n;
        t = !isFinite(+t) ? 0 : Math.abs(t);
        var i = "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4);
        var s = "\\u" + ("0000" + r.charCodeAt(0).toString(16)).slice(-4);
        e = (e + "").replace(".", n).replace(new RegExp(s, "g"), "").replace(new RegExp(i, "g"), ".").replace(new RegExp("[^0-9+-Ee.]", "g"), "");
        var o = !isFinite(+e) ? 0 : +e,
            u = "",
            a = function (e, t) {
                var n = Math.pow(10, t);
                return "" + Math.round(e * n) / n
            };
        u = (t ? a(o, t) : "" + Math.round(o)).split(".");
        if (u[0].length > 3) {
            u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)
        }
        if ((u[1] || "").length < t) {
            u[1] = u[1] || "";
            u[1] += (new Array(t - u[1].length + 1)).join("0")
        }
        return u.join(n)
    }
})(jQuery);
! function ($) {
    var Slider = function (element, options) {
        this.element = $(element);
        this.picker = $('<div class="slider">' + '<div class="slider-track">' + '<div class="slider-selection"></div>' + '<div class="slider-handle"></div>' + '<div class="slider-handle"></div>' + '</div>' + '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' + '</div>').insertBefore(this.element).append(this.element);
        this.id = this.element.data('slider-id') || options.id;
        if (this.id) {
            this.picker[0].id = this.id
        }
        if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
            this.touchCapable = !0
        }
        var tooltip = this.element.data('slider-tooltip') || options.tooltip;
        this.tooltip = this.picker.find('.tooltip');
        this.tooltipInner = this.tooltip.find('div.tooltip-inner');
        this.orientation = this.element.data('slider-orientation') || options.orientation;
        switch (this.orientation) {
            case 'vertical':
                this.picker.addClass('slider-vertical');
                this.stylePos = 'top';
                this.mousePos = 'pageY';
                this.sizePos = 'offsetHeight';
                this.tooltip.addClass('right')[0].style.left = '100%';
                break;
            default:
                this.picker.addClass('slider-horizontal').css('width', this.element.outerWidth());
                this.orientation = 'horizontal';
                this.stylePos = 'left';
                this.mousePos = 'pageX';
                this.sizePos = 'offsetWidth';
                this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
                break
        }
        this.min = this.element.data('slider-min') || options.min;
        this.max = this.element.data('slider-max') || options.max;
        this.step = this.element.data('slider-step') || options.step;
        this.value = this.element.data('slider-value') || options.value;
        if (this.value[1]) {
            this.range = !0
        }
        this.selection = this.element.data('slider-selection') || options.selection;
        this.selectionEl = this.picker.find('.slider-selection');
        if (this.selection === 'none') {
            this.selectionEl.addClass('hide')
        }
        this.selectionElStyle = this.selectionEl[0].style;
        this.handle1 = this.picker.find('.slider-handle:first');
        this.handle1Stype = this.handle1[0].style;
        this.handle2 = this.picker.find('.slider-handle:last');
        this.handle2Stype = this.handle2[0].style;
        var handle = this.element.data('slider-handle') || options.handle;
        switch (handle) {
            case 'round':
                this.handle1.addClass('round');
                this.handle2.addClass('round');
                break
            case 'triangle':
                this.handle1.addClass('triangle');
                this.handle2.addClass('triangle');
                break
        }
        if (this.range) {
            this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
            this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))
        } else {
            this.value = [Math.max(this.min, Math.min(this.max, this.value))];
            this.handle2.addClass('hide');
            if (this.selection == 'after') {
                this.value[1] = this.max
            } else {
                this.value[1] = this.min
            }
        }
        this.diff = this.max - this.min;
        this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff];
        this.offset = this.picker.offset();
        this.size = this.picker[0][this.sizePos];
        this.formater = options.formater;
        this.layout();
        if (this.touchCapable) {
            this.picker.on({
                touchstart: $.proxy(this.mousedown, this)
            })
        } else {
            this.picker.on({
                mousedown: $.proxy(this.mousedown, this)
            })
        }
        if (tooltip === 'show') {
            this.picker.on({
                mouseenter: $.proxy(this.showTooltip, this),
                mouseleave: $.proxy(this.hideTooltip, this)
            })
        } else {
            this.tooltip.addClass('hide')
        }
    };
    Slider.prototype = {
        constructor: Slider,
        over: !1,
        inDrag: !1,
        showTooltip: function () {
            this.tooltip.addClass('in');
            this.over = !0
        },
        hideTooltip: function () {
            if (this.inDrag === !1) {
                this.tooltip.removeClass('in')
            }
            this.over = !1
        },
        layout: function () {
            var b = this.percentage[0];
            b = 100 - b + 0;
            var c = this.percentage[1];
            c = 100 - c + 0;
            this.handle1Stype[this.stylePos] = b + '%';
            this.handle2Stype[this.stylePos] = c + '%';
            if (this.orientation == 'vertical') {
                this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + '%';
                this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + '%'
            } else {
                this.selectionElStyle.right = Math.min(this.percentage[0], this.percentage[1]) + '%';
                this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + '%'
            }
            if (this.range) {
                this.tooltipInner.text(this.formater(this.value[0]) + ' : ' + this.formater(this.value[1]));
                this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px'
            } else {
                this.tooltipInner.text(this.formater(this.value[0]));
                this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px'
            }
        },
        mousedown: function (ev) {
            if (this.touchCapable && ev.type === 'touchstart') {
                ev = ev.originalEvent
            }
            this.offset = this.picker.offset();
            this.size = this.picker[0][this.sizePos];
            var percentage = this.getPercentage(ev);
            console.log(percentage);
            if (this.range) {
                var diff1 = Math.abs(this.percentage[0] - percentage);
                var diff2 = Math.abs(this.percentage[1] - percentage);
                this.dragged = (diff1 < diff2) ? 0 : 1
            } else {
                this.dragged = 0
            }
            console.log(percentage);
            this.percentage[this.dragged] = percentage;
            this.layout();
            if (this.touchCapable) {
                $(document).on({
                    touchmove: $.proxy(this.mousemove, this),
                    touchend: $.proxy(this.mouseup, this)
                })
            } else {
                $(document).on({
                    mousemove: $.proxy(this.mousemove, this),
                    mouseup: $.proxy(this.mouseup, this)
                })
            }
            this.inDrag = !0;
            var val = this.calculateValue();
            this.element.trigger({
                type: 'slideStart',
                value: val
            }).trigger({
                type: 'slide',
                value: val
            });
            return !1
        },
        mousemove: function (ev) {
            if (this.touchCapable && ev.type === 'touchmove') {
                ev = ev.originalEvent
            }
            var percentage = this.getPercentage(ev);
            console.log(percentage);
            if (this.range) {
                if (this.dragged === 0 && this.percentage[1] < percentage) {
                    this.percentage[0] = this.percentage[1];
                    this.dragged = 1
                } else if (this.dragged === 1 && this.percentage[0] > percentage) {
                    this.percentage[1] = this.percentage[0];
                    this.dragged = 0
                }
            }
            this.percentage[this.dragged] = percentage;
            this.layout();
            var val = this.calculateValue();
            this.element.trigger({
                type: 'slide',
                value: val
            }).data('value', val).prop('value', val);
            return !1
        },
        mouseup: function (ev) {
            if (this.touchCapable) {
                $(document).off({
                    touchmove: this.mousemove,
                    touchend: this.mouseup
                })
            } else {
                $(document).off({
                    mousemove: this.mousemove,
                    mouseup: this.mouseup
                })
            }
            this.inDrag = !1;
            if (this.over == !1) {
                this.hideTooltip()
            }
            this.element;
            var val = this.calculateValue();
            this.element.trigger({
                type: 'slideStop',
                value: val
            }).data('value', val).prop('value', val);
            return !1
        },
        calculateValue: function () {
            var val;
            if (this.range) {
                val = [(this.min + Math.round((this.diff * this.percentage[0] / 100) / this.step) * this.step), (this.min + Math.round((this.diff * this.percentage[1] / 100) / this.step) * this.step)];
                this.value = val
            } else {
                val = (this.min + Math.round((this.diff * this.percentage[0] / 100) / this.step) * this.step);
                this.value = [val, this.value[1]]
            }
            return val
        },
        getPercentage: function (ev) {
            if (this.touchCapable) {
                ev = ev.touches[0]
            }
            var percentage = (ev[this.mousePos] - this.offset[this.stylePos]) * 100 / this.size;
            percentage = Math.round(percentage / this.percentage[2]) * this.percentage[2];
            percentage = Math.max(0, Math.min(100, percentage));
            percentage = 100 - percentage + 0;
            return percentage
        },
        getValue: function () {
            if (this.range) {
                return this.value
            }
            return this.value[0]
        },
        setValue: function (val) {
            this.value = val;
            if (this.range) {
                this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
                this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))
            } else {
                this.value = [Math.max(this.min, Math.min(this.max, this.value))];
                this.handle2.addClass('hide');
                if (this.selection == 'after') {
                    this.value[1] = this.max
                } else {
                    this.value[1] = this.min
                }
            }
            this.diff = this.max - this.min;
            this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff];
            this.layout()
        }
    };
    $.fn.slider = function (option, val) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('slider'),
                options = typeof option === 'object' && option;
            if (!data) {
                $this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults, options))))
            }
            if (typeof option == 'string') {
                data[option](val)
            }
        })
    };
    $.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        orientation: 'horizontal',
        value: 5,
        selection: 'before',
        tooltip: 'show',
        handle: 'round',
        formater: function (value) {
            return value
        }
    };
    $.fn.slider.Constructor = Slider
}(window.jQuery);
! function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)|/g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function (a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function (b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b
        })
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function (a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function () {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function (a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function (a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function (a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                            this.load(b)
                        }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function () {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function (b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function (a, b) {
        var c = function () {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function (a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function (b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function () {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function () {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function () {
                return !!e("transform")
            },
            csstransforms3d: function () {
                return !!e("perspective")
            },
            csstransitions: function () {
                return !!e("transition")
            },
            cssanimations: function () {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
$(document).ready(function () {
    $(".owl-carousel.supplier-owl-carousel").owlCarousel({
        nav: !0,
        navText: ["<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" + "                 viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n" + "                <g>\n" + "                    <path d=\"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n" + "                        c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z\"/>\n" + "                </g>\n" + "            </svg>", "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" + "                 viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n" + "                <g>\n" + "                    <path d=\"M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n" + "                        c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n" + "                        \"/>\n" + "                </g>\n" + "            </svg>"],
        rtl: !0,
        loop: !0,
        margin: 10,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
});
(function (e) {
    e.fn.extend({
        slimScroll: function (f) {
            var a = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, f);
            this.each(function () {
                function v(d) {
                    if (r) {
                        d = d || window.event;
                        var c = 0;
                        d.wheelDelta && (c = -d.wheelDelta / 120);
                        d.detail && (c = d.detail / 3);
                        e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c, !0);
                        d.preventDefault && !k && d.preventDefault();
                        k || (d.returnValue = !1)
                    }
                }

                function n(d, g, e) {
                    k = !1;
                    var f = b.outerHeight() - c.outerHeight();
                    g && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({
                        top: g + "px"
                    }));
                    l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
                    g = l * (b[0].scrollHeight - b.outerHeight());
                    e && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f), c.css({
                        top: d + "px"
                    }));
                    b.scrollTop(g);
                    b.trigger("slimscrolling", ~~g);
                    w();
                    p()
                }

                function x() {
                    u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
                    c.css({
                        height: u + "px"
                    });
                    var a = u == b.outerHeight() ? "none" : "block";
                    c.css({
                        display: a
                    })
                }

                function w() {
                    x();
                    clearTimeout(B);
                    l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
                    C = l;
                    u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"))
                }

                function p() {
                    a.alwaysVisible || (B = setTimeout(function () {
                        a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"))
                    }, 1E3))
                }
                var r, y, z, B, A, u, l, C, k = !1,
                    b = e(this);
                if (b.parent().hasClass(a.wrapperClass)) {
                    var q = b.scrollTop(),
                        c = b.siblings("." + a.barClass),
                        m = b.siblings("." + a.railClass);
                    x();
                    if (e.isPlainObject(f)) {
                        if ("height" in f && "auto" == f.height) {
                            b.parent().css("height", "auto");
                            b.css("height", "auto");
                            var h = b.parent().parent().height();
                            b.parent().css("height", h);
                            b.css("height", h)
                        } else "height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));
                        if ("scrollTo" in f) q = parseInt(a.scrollTo);
                        else if ("scrollBy" in f) q += parseInt(a.scrollBy);
                        else if ("destroy" in f) {
                            c.remove();
                            m.remove();
                            b.unwrap();
                            return
                        }
                        n(q, !1, !0)
                    }
                } else if (!(e.isPlainObject(f) && "destroy" in f)) {
                    a.height = "auto" == a.height ? b.parent().height() : a.height;
                    q = e("<div></div>").addClass(a.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    b.css({
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    var m = e("<div></div>").addClass(a.railClass).css({
                            width: a.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: a.alwaysVisible && a.railVisible ? "block" : "none",
                            "border-radius": a.railBorderRadius,
                            background: a.railColor,
                            opacity: a.railOpacity,
                            zIndex: 90
                        }),
                        c = e("<div></div>").addClass(a.barClass).css({
                            background: a.color,
                            width: a.size,
                            position: "absolute",
                            top: 0,
                            opacity: a.opacity,
                            display: a.alwaysVisible ? "block" : "none",
                            "border-radius": a.borderRadius,
                            BorderRadius: a.borderRadius,
                            MozBorderRadius: a.borderRadius,
                            WebkitBorderRadius: a.borderRadius,
                            zIndex: 99
                        }),
                        h = "right" == a.position ? {
                            right: a.distance
                        } : {
                            left: a.distance
                        };
                    m.css(h);
                    c.css(h);
                    b.wrap(q);
                    b.parent().append(c);
                    b.parent().append(m);
                    a.railDraggable && c.bind("mousedown", function (a) {
                        var b = e(document);
                        z = !0;
                        t = parseFloat(c.css("top"));
                        pageY = a.pageY;
                        b.bind("mousemove.slimscroll", function (a) {
                            currTop = t + a.pageY - pageY;
                            c.css("top", currTop);
                            n(0, c.position().top, !1)
                        });
                        b.bind("mouseup.slimscroll", function (a) {
                            z = !1;
                            p();
                            b.unbind(".slimscroll")
                        });
                        return !1
                    }).bind("selectstart.slimscroll", function (a) {
                        a.stopPropagation();
                        a.preventDefault();
                        return !1
                    });
                    m.hover(function () {
                        w()
                    }, function () {
                        p()
                    });
                    c.hover(function () {
                        y = !0
                    }, function () {
                        y = !1
                    });
                    b.hover(function () {
                        r = !0;
                        w();
                        p()
                    }, function () {
                        r = !1;
                        p()
                    });
                    b.bind("touchstart", function (a, b) {
                        a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY)
                    });
                    b.bind("touchmove", function (b) {
                        k || b.originalEvent.preventDefault();
                        b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY)
                    });
                    x();
                    "bottom" === a.start ? (c.css({
                        top: b.outerHeight() - c.outerHeight()
                    }), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v)
                }
            });
            return this
        }
    });
    e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
})(jQuery);
$(document).ready(function () {
    if ($(window).width() > 768) {
        $('.panel-group').slimScroll({
            height: '550',
            color: 'purple',
            position: 'right'
        })
    }
});
$(document).ready(function () {
    var options = {
        numberOfShownElement: $('.category-box').data('number_of_items_to_show') || 5,
        nextButton: function nextButton() {
            var div = $(document.createElement('span'));
            div.append('<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '                 viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">\n' + '                <g>\n' + '                    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n' + '                        c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n' + '                        "/>\n' + '                </g>\n' + '            </svg>');
            return div
        },
        previousButton: function previousButton() {
            var div = $(document.createElement('span'));
            div.append('<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '                 viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">\n' + '                <g>\n' + '                    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n' + '                        c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>\n' + '                </g>\n' + '            </svg>');
            return div
        }
    }
    if ($(window).width() < 768) {
        options.numberOfShownElement = 2;
        options.touchMode = !0
    }
    $('.category-box .carousel-container').customCarousel(options)
});
'use strict';
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o
} : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
};
(function ($) {
    var customCarousel = function customCarousel(element, options) {
        var $t = this;
        $t.isTouchMode = options.touchMode;
        $t.currentSm = 0;
        $t.currentLg = 0;
        $t.scrollWidth = 0;
        $t.direction = options.textDirection;
        $t.numberOfShownElement = options.numberOfShownElement;
        $t.ul = $(element);
        $t.listItems = $t.ul.find('li');
        $t.carouselContainer = $t.createElement('div').addClass('custom-carousel-container');
        $t.element = $t.createElement('div');
        $t.carouselRight = options.nextButton().addClass(options.carouselRightClass);
        $t.carouselLeft = options.previousButton().addClass(options.carouselLeftClass);
        $t.carouselContainer.append($t.element);
        $t.element.addClass(options.containerClass);
        $t.carouselContainer.insertBefore($t.ul);
        $t.ul.appendTo($t.element);
        $t.carouselContainer.append($t.carouselRight);
        $t.carouselContainer.append($t.carouselLeft);
        $t.itemsToShow();
        $t.setUlWidth();
        $t.calculateItemWidth();
        $t.visibleItemsNumber();
        $t.onScrollHide();
        $t.directionSet();
        $t.hidePrevious();
        $t.carouselLeft.click(function () {
            if ($(this).hasClass('in-active'))
                return !1;
            if ($t.direction === 'rtl')
                $t.next();
            else if ($t.direction === 'ltr')
                $t.previous()
        });
        $t.carouselRight.click(function () {
            if ($(this).hasClass('in-active'))
                return !1;
            if ($t.direction === 'rtl')
                $t.previous();
            else if ($t.direction === 'ltr')
                $t.next()
        });
        if ($(window).width() < 993 && $t.isTouchMode) {
            $t.element.css({
                'overflow': 'scroll'
            })
        }
        $t.checkLessElement()
    };
    customCarousel.prototype = {
        constructor: customCarousel,
        hidePrevious: function () {
            var $t = this;
            if ($t.isRtl())
                $t.carouselRight.addClass('in-active');
            else if (!$t.isRtl())
                $t.carouselLeft.addClass('in-active')
        },
        hideNext: function () {
            var $t = this;
            if ($t.isRtl())
                $t.carouselLeft.addClass('in-active');
            else if (!$t.isRtl())
                $t.carouselRight.addClass('in-active')
        },
        showPrevious: function () {
            var $t = this;
            if ($t.isRtl())
                $t.carouselRight.removeClass('in-active');
            else if (!$t.isRtl())
                $t.carouselLeft.removeClass('in-active')
        },
        showNext: function () {
            var $t = this;
            if ($t.isRtl())
                $t.carouselLeft.removeClass('in-active');
            else if (!$t.isRtl())
                $t.carouselRight.removeClass('in-active')
        },
        isRtl: function () {
            var $t = this;
            if ($t.direction == 'rtl')
                return !0;
            return !1
        },
        moveToFirst: function () {
            var $t = this;
            $t.currentLg = 1;
            $t.ul.stop(!0, !0).css({
                right: 0
            });
            $t.showNext();
            $t.hidePrevious()
        },
        previous: function previous() {
            var $t = this;
            $t.showNext();
            if ($(window).width() < 993 && $t.isTouchMode) {
                var scrollLeft = $t.element.scrollLeft();
                $t.currentSm = Math.ceil(scrollLeft / $t.itemWidth);
                $t.currentSm += 1;
                $t.element.animate({
                    scrollLeft: ($t.currentSm * $t.itemWidth) - 50
                })
            } else if ($(window).width() > 992 && $t.isRtl()) {
                $t.currentLg -= 1;
                if ($t.currentLg === 0)
                    $t.hidePrevious();
                $t.ul.stop(!0, !0).animate({
                    right: '+=' + $t.itemWidth
                })
            } else if ($(window).width() > 992 && $t.direction == 'ltr') {
                $t.carouselRight.show();
                $t.currentLg -= 1;
                if ($t.currentLg === 0)
                    $t.hidePrevious();
                $t.ul.stop(!0, !0).animate({
                    left: '+=' + $t.itemWidth
                })
            }
        },
        next: function next() {
            var $t = this;
            $t.showPrevious();
            if ($(window).width() < 993 && $t.isTouchMode) {
                var scrollLeft = $t.element.scrollLeft();
                $t.currentSm = Math.floor(scrollLeft / $t.itemWidth);
                $t.currentSm -= 1;
                $t.element.animate({
                    scrollLeft: ($t.currentSm * $t.itemWidth) + 50
                })
            } else if ($(window).width() > 992 && $t.direction == 'rtl') {
                $t.currentLg += 1;
                if ($t.currentLg >= $t.listItems.length - $t.numberOfvisibleItems)
                    $t.hideNext();
                $t.ul.stop(!0, !0).animate({
                    right: '-=' + $t.itemWidth
                })
            } else if ($(window).width() > 992 && $t.direction == 'ltr') {
                $t.currentLg += 1;
                if ($t.currentLg === $t.listItems.length - $t.numberOfvisibleItems) {
                    $t.hideNext()
                }
                $t.ul.stop(!0, !0).animate({
                    left: '-=' + $t.itemWidth
                })
            }
        },
        directionSet: function directionSet() {
            var $t = this;
            if ($t.direction === 'rtl') {
                $t.carouselContainer.css({
                    direction: 'rtl'
                });
                $t.listItems.css({
                    float: 'right'
                })
            } else if ($t.direction === 'ltr') {
                $t.carouselContainer.css({
                    direction: 'ltr'
                });
                $t.listItems.css({
                    float: 'left'
                })
            }
        },
        calculateItemWidth: function calculateItemWidth() {
            var $t = this;
            if ($t.listItems.length > 0)
                $t.itemWidth = $t.listItems.outerWidth() + parseInt($t.listItems.css('margin-right').replace('px', '')) + parseInt($t.listItems.css('margin-left').replace('px', ''))
        },
        setUlWidth: function setUlWidth() {
            var $t = this;
            $t.calculateItemWidth();
            $t.ulWidth = Math.ceil($t.itemWidth * $t.listItems.length);
            if ($t.ulWidth <= $t.itemWidth * $t.numberOfShownElement)
                $t.hideNext();
            $t.ul.width($t.ulWidth + 50)
        },
        visibleItemsNumber: function visibleItemsNumber() {
            var $t = this;
            if ($t.itemWidth === undefined) {
                $t.calculateItemWidth()
            }
            $t.numberOfvisibleItems = Math.round($t.element.width() / $t.itemWidth)
        },
        itemsToShow: function itemsToShow() {
            var $t = this;
            $t.count = $t.element.outerWidth() / $t.numberOfShownElement;
            var count = $t.count;
            if ($t.listItems.length > 0)
                count -= parseInt($t.listItems.css('margin-right').replace('px', '')) - parseInt($t.listItems.css('margin-left').replace('px', ''))
            $t.listItems.each(function () {
                $(this).width(count)
            })
        },
        onScrollHide: function onScrollHide() {
            var $t = this;
            $t.ul.scroll(function () {
                if ($t.ul.scrollLeft() + $t.element.outerWidth() > $t.listItems.length * $t.listItems.width()) {
                    $t.carouselRight.hide()
                } else $t.carouselRight.show();
                if ($t.ul.scrollLeft() === 0) {
                    $t.carouselLeft.hide()
                } else $t.carouselLeft.show()
            })
        },
        createElement: function createElement(elementName) {
            return $(document.createElement(elementName))
        },
        checkLessElement: function checkLessElement() {
            var $t = this;
            $t.ul.css({
                'min-width': '100%'
            });
            if ($t.ul.width() <= $t.element.width()) {
                if ($t.direction === 'rtl')
                    $t.carouselLeft.hide();
                else if ($t.direction === 'ltr')
                    $t.carouselRight.hide()
            }
        },
        destroyCustomCarousel: function destroyCustomCarousel() {
            var $t = this;
            $t.carouselRight.unbind($t.click);
            $t.carouselLeft.unbind($t.click);
            $t.ul.removeAttr('style')
            if ($t.ul.parent().is('div')) {
                $t.ul.unwrap();
                $t.element.remove()
            }
            $t.carouselRight.remove();
            $t.carouselLeft.remove();
            $t.ul.removeData('customCarousel');
            $t.ul.insertBefore($t.carouselContainer);
            $t.carouselContainer.remove()
        }
    };
    $.fn.customCarousel = function (option, val) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('customCarousel'),
                options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option;
            if (!data) {
                $this.data('customCarousel', data = new customCarousel(this, $.extend({}, $.fn.customCarousel.defaults, options)))
            }
            if (typeof option === 'string') {
                data[option](val)
            }
        })
    };
    $.fn.customCarousel.defaults = {
        containerClass: 'carousel-container',
        touchMode: !1,
        numberOfShownElement: 1,
        textDirection: 'rtl',
        carouselRightClass: 'carousel-right',
        carouselLeftClass: 'carousel-left',
        nextButton: function nextButton() {
            return $(document.createElement('button'))
        },
        previousButton: function previousButton() {
            return $(document.createElement('button'))
        }
    };
    $.fn.customCarousel.Constructor = customCarousel
})(jQuery);
(function ($, undefined) {
    'use strict';
    var defaults = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: 'slide',
        useCSS: !0,
        cssEasing: 'ease',
        easing: 'linear',
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2000,
        keyPress: !1,
        controls: !0,
        prevHtml: '',
        nextHtml: '',
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        lastpro: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function ($el) {},
        onSliderLoad: function ($el) {},
        onBeforeSlide: function ($el, scene) {},
        onAfterSlide: function ($el, scene) {},
        onBeforeNextSlide: function ($el, scene) {},
        onBeforePrevSlide: function ($el, scene) {}
    };
    $.fn.lightSlider = function (options) {
        if (this.length === 0) {
            return this
        }
        if (this.length > 1) {
            this.each(function () {
                $(this).lightSlider(options)
            });
            return this
        }
        var plugin = {},
            settings = $.extend(!0, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;
        if (settings.mode === 'fade') {
            settings.vertical = !1
        }
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = !1,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = (settings.vertical === !0) ? 'height' : 'width',
            gutter = (settings.vertical === !0) ? 'margin-bottom' : 'margin-right',
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = ('ontouchstart' in document.documentElement);
        var refresh = {};
        refresh.chbreakpoint = function () {
            windowW = $(window).width();
            if (settings.responsive.length) {
                var item;
                if (settings.autoWidth === !1) {
                    item = settings.item
                }
                if (windowW < settings.responsive[0].breakpoint) {
                    for (var i = 0; i < settings.responsive.length; i++) {
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i]
                        }
                    }
                }
                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
                    for (var j in resposiveObj.settings) {
                        if (resposiveObj.settings.hasOwnProperty(j)) {
                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                                settingsTemp[j] = settings[j]
                            }
                            settings[j] = resposiveObj.settings[j]
                        }
                    }
                }
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                    for (var k in settingsTemp) {
                        if (settingsTemp.hasOwnProperty(k)) {
                            settings[k] = settingsTemp[k]
                        }
                    }
                }
                if (settings.autoWidth === !1) {
                    if (slideValue > 0 && slideWidth > 0) {
                        if (item !== settings.item) {
                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove))
                        }
                    }
                }
            }
        };
        refresh.calSW = function () {
            if (settings.autoWidth === !1) {
                slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item
            }
        };
        refresh.calWidth = function (cln) {
            var ln = cln === !0 ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === !1) {
                w = ln * (slideWidth + settings.slideMargin)
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) {
                    w += (parseInt($children.eq(i).width()) + settings.slideMargin)
                }
            }
            return w
        };
        plugin = {
            doCss: function () {
                var support = function () {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return !0
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return !0
                }
                return !1
            },
            keyPress: function () {
                if (settings.keyPress) {
                    $(document).on('keyup.lightslider', function (e) {
                        if (!$(':focus').is('input, textarea')) {
                            if (e.preventDefault) {
                                e.preventDefault()
                            } else {
                                e.returnValue = !1
                            }
                            if (e.keyCode === 37) {
                                $el.goToPrevSlide()
                            } else if (e.keyCode === 39) {
                                $el.goToNextSlide()
                            }
                        }
                    })
                }
            },
            controls: function () {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev"><i class="fa fa-angle-left" aria-hidden="true">' + settings.prevHtml + '</i></a><a class="lSNext"><i class="fa fa-angle-right" aria-hidden="true">' + settings.nextHtml + '</i></a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) {
                            $slide.find('.lSAction').hide()
                        }
                    } else {
                        if (refresh.calWidth(!1) < elSize) {
                            $slide.find('.lSAction').hide()
                        }
                    }
                    $slide.find('.lSAction a').on('click', function (e) {
                        if (e.preventDefault) {
                            e.preventDefault()
                        } else {
                            e.returnValue = !1
                        }
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToNextSlide()
                        } else {
                            $el.goToPrevSlide()
                        }
                        return !1
                    })
                }
            },
            initialStyle: function () {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = !1;
                    settings.slideEndAnimation = !1
                }
                if (settings.auto) {
                    settings.slideEndAnimation = !1
                }
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1
                }
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = !1
                }
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === !0) {
                    $slide.parent().addClass('lSrtl')
                }
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px')
                } else {
                    elSize = $el.outerWidth()
                }
                $children.addClass('lslide');
                if (settings.loop === !0 && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function () {
                        if (refresh.calWidth(!0) > elSize) {
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                tI++;
                                if (tWr >= (elSize + settings.slideMargin)) {
                                    break
                                }
                            }
                            var tItem = settings.autoWidth === !0 ? tI : settings.item;
                            if (tItem < $el.find('.clone.left').length) {
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                    $children.eq(i).remove()
                                }
                            }
                            if (tItem < $el.find('.clone.right').length) {
                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                    scene--;
                                    $children.eq(j).remove()
                                }
                            }
                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++
                            }
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el)
                            }
                            $children = $el.children()
                        } else {
                            if ($children.hasClass('clone')) {
                                $el.find('.clone').remove();
                                $this.move($el, 0)
                            }
                        }
                    };
                    refresh.clone()
                }
                refresh.sSW = function () {
                    length = $children.length;
                    if (settings.rtl === !0 && settings.vertical === !1) {
                        gutter = 'margin-left'
                    }
                    if (settings.autoWidth === !1) {
                        $children.css(property, slideWidth + 'px')
                    }
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(!1);
                    $el.css(property, w + 'px');
                    if (settings.loop === !0 && settings.mode === 'slide') {
                        if (on === !1) {
                            scene = $el.find('.clone.left').length
                        }
                    }
                };
                refresh.calL = function () {
                    $children = $el.children();
                    length = $children.length
                };
                if (this.doCss()) {
                    $slide.addClass('usingCss')
                }
                refresh.calL();
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === !0) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue)
                    }
                    if (settings.vertical === !1) {
                        this.setHeight($el, !1)
                    }
                } else {
                    this.setHeight($el, !0);
                    $el.addClass('lSFade');
                    if (!this.doCss()) {
                        $children.fadeOut(0);
                        $children.eq(scene).fadeIn(0)
                    }
                }
                if (settings.loop === !0 && settings.mode === 'slide') {
                    $children.eq(scene).addClass('activeit')
                } else {
                    $children.first().addClass('activeit')
                }
            },
            pager: function () {
                var $this = this;
                refresh.createPager = function () {
                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide');
                    var length = $slide.find('.lslide').length;
                    var i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide') {
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove)
                            } else {
                                v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove)
                            }
                        }
                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                        if (settings.gallery === !0) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>'
                        } else {
                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>'
                        }
                        if (settings.mode === 'slide') {
                            if ((v) >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1
                                }
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager')
                                } else {
                                    $slide.parent().removeClass('noPager')
                                }
                                break
                            }
                        }
                    }
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers);
                    if (settings.gallery === !0) {
                        if (settings.vertical === !0) {
                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px')
                        }
                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === !0) {
                            $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px')
                        }
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px')
                    }
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('activeit');
                    $pager.on('click', function () {
                        if (settings.loop === !0 && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.activeit').index())
                        } else {
                            scene = $pager.index(this)
                        }
                        $el.mode(!1);
                        if (settings.gallery === !0) {
                            $this.slideThumb()
                        }
                        return !1
                    })
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) {
                        cl = 'lSGallery'
                    }
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager()
                }
                setTimeout(function () {
                    refresh.init()
                }, 0)
            },
            setHeight: function (ob, fade) {
                var obj = null,
                    $this = this;
                if (settings.loop) {
                    obj = ob.children('.lslide ').first()
                } else {
                    obj = ob.children().first()
                }
                var setCss = function () {
                    var tH = obj.outerHeight(),
                        tP = 0,
                        tHT = tH;
                    if (fade) {
                        tH = 0;
                        tP = ((tHT) * 100) / elSize
                    }
                    ob.css({
                        'height': tH + 'px',
                        'padding-bottom': tP + '%'
                    })
                };
                setCss();
                if (obj.find('img').length) {
                    if (obj.find('img')[0].complete) {
                        setCss();
                        if (!interval) {
                            $this.auto()
                        }
                    } else {
                        obj.find('img').on('load', function () {
                            setTimeout(function () {
                                setCss();
                                if (!interval) {
                                    $this.auto()
                                }
                            }, 100)
                        })
                    }
                } else {
                    if (!interval) {
                        $this.auto()
                    }
                }
            },
            active: function (ob, t) {
                if (this.doCss() && settings.mode === 'fade') {
                    $slide.addClass('on')
                }
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('activeit');
                    if (!this.doCss() && settings.mode === 'fade' && t === !1) {
                        ob.fadeOut(settings.speed)
                    }
                    if (t === !0) {
                        sc = scene
                    } else {
                        sc = scene * settings.slideMove
                    }
                    var l, nl;
                    if (t === !0) {
                        l = ob.length;
                        nl = l - 1;
                        if (sc + 1 >= l) {
                            sc = nl
                        }
                    }
                    if (settings.loop === !0 && settings.mode === 'slide') {
                        if (t === !0) {
                            sc = scene - $el.find('.clone.left').length
                        } else {
                            sc = scene * settings.slideMove
                        }
                        if (t === !0) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 === l) {
                                sc = nl
                            } else if (sc + 1 > l) {
                                sc = 0
                            }
                        }
                    }
                    if (!this.doCss() && settings.mode === 'fade' && t === !1) {
                        ob.eq(sc).fadeIn(settings.speed)
                    }
                    ob.eq(sc).addClass('activeit')
                } else {
                    ob.removeClass('activeit');
                    ob.eq(ob.length - 1).addClass('activeit');
                    if (!this.doCss() && settings.mode === 'fade' && t === !1) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed)
                    }
                }
            },
            move: function (ob, v) {
                if (settings.rtl === !0) {
                    v = -v
                }
                if (this.doCss()) {
                    if (settings.vertical === !0) {
                        ob.css({
                            'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                        })
                    } else if (settings.lastpro === !0) {
                        ob.css({
                            'transform': 'translate3d(' + (-v + -slideWidth * 0.87) + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + (-v + -slideWidth * 0.87) + 'px, 0px, 0px)'
                        })
                    } else {
                        ob.css({
                            'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)'
                        })
                    }
                } else {
                    if (settings.vertical === !0) {
                        ob.css('position', 'relative').animate({
                            top: -v + 'px'
                        }, settings.speed, settings.easing)
                    } else {
                        ob.css('position', 'relative').animate({
                            left: -v + 'px'
                        }, settings.speed, settings.easing)
                    }
                }
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, !0)
            },
            fade: function () {
                this.active($children, !1);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, !0)
            },
            slide: function () {
                var $this = this;
                refresh.calSlide = function () {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, !1);
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin
                        } else if (slideValue < 0) {
                            slideValue = 0
                        }
                        $this.move($el, slideValue);
                        if (settings.loop === !0 && settings.mode === 'slide') {
                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                $this.resetSlide($el.find('.clone.left').length)
                            }
                            if (scene === 0) {
                                $this.resetSlide($slide.find('.lslide').length)
                            }
                        }
                    }
                };
                refresh.calSlide()
            },
            resetSlide: function (s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function () {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, !1);
                    plugin.move($el, slideValue);
                    setTimeout(function () {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled')
                    }, 50)
                }, settings.speed + 100)
            },
            slideValue: function () {
                var _sV = 0;
                if (settings.autoWidth === !1) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove)
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) {
                        _sV += (parseInt($children.eq(i).width()) + settings.slideMargin)
                    }
                }
                return _sV
            },
            slideThumb: function () {
                var position;
                switch (settings.currentPagerPosition) {
                    case 'left':
                        position = 0;
                        break;
                    case 'middle':
                        position = (elSize / 2) - (thumbWidth / 2);
                        break;
                    case 'right':
                        position = elSize - thumbWidth
                }
                var sc = scene - $el.find('.clone.left').length;
                var $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === !0) {
                    if (sc >= $pager.children().length) {
                        sc = 0
                    } else if (sc < 0) {
                        sc = $pager.children().length
                    }
                }
                var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                if ((thumbSlide + elSize) > pagerWidth) {
                    thumbSlide = pagerWidth - elSize - settings.thumbMargin
                }
                if (thumbSlide < 0) {
                    thumbSlide = 0
                }
                this.move($pager, thumbSlide)
            },
            auto: function () {
                if (settings.auto) {
                    clearInterval(interval);
                    interval = setInterval(function () {
                        $el.goToNextSlide()
                    }, settings.pause)
                }
            },
            pauseOnHover: function () {
                var $this = this;
                if (settings.auto && settings.pauseOnHover) {
                    $slide.on('mouseenter', function () {
                        $(this).addClass('ls-hover');
                        $el.pause();
                        settings.auto = !0
                    });
                    $slide.on('mouseleave', function () {
                        $(this).removeClass('ls-hover');
                        if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
                            $this.auto()
                        }
                    })
                }
            },
            touchMove: function (endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords;
                    var swipeVal = slideValue - distance;
                    if ((swipeVal) >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === !1) {
                            swipeVal = w - elSize - settings.slideMargin
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5)
                        }
                    } else if (swipeVal < 0) {
                        if (settings.freeMove === !1) {
                            swipeVal = 0
                        } else {
                            swipeVal = swipeVal / 5
                        }
                    }
                    this.move($el, swipeVal)
                }
            },
            touchEnd: function (distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                if (settings.mode === 'slide') {
                    var mxVal = !1;
                    var _next = !0;
                    slideValue = slideValue - distance;
                    if ((slideValue) > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === !1) {
                            mxVal = !0
                        }
                    } else if (slideValue < 0) {
                        slideValue = 0
                    }
                    var gC = function (next) {
                        var ad = 0;
                        if (!mxVal) {
                            if (next) {
                                ad = 1
                            }
                        }
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= (w - elSize - settings.slideMargin)) {
                                if (num % 1 !== 0) {
                                    scene++
                                }
                            }
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                scene = i + ad;
                                if (tW >= slideValue) {
                                    break
                                }
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(!1);
                        _next = !1
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(!0);
                        _next = !1
                    }
                    $el.mode(_next);
                    this.slideThumb()
                } else {
                    if (distance >= settings.swipeThreshold) {
                        $el.goToPrevSlide()
                    } else if (distance <= -settings.swipeThreshold) {
                        $el.goToNextSlide()
                    }
                }
            },
            enableDrag: function () {
                var $this = this;
                if (!isTouch) {
                    if (settings.vertical === !0) {
                        var startCoords = 0,
                            endCoords = 0,
                            isDraging = !1;
                        $slide.find('.lightSlider').addClass('lsGrab');
                        $slide.on('mousedown', function (e) {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return !1
                                }
                            }
                            if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                                startCoords = (settings.vertical === !0) ? e.pageY : e.pageX;
                                isDraging = !0;
                                if (e.preventDefault) {
                                    e.preventDefault()
                                } else {
                                    e.returnValue = !1
                                }
                                $slide.scrollLeft += 1;
                                $slide.scrollLeft -= 1;
                                $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                                clearInterval(interval)
                            }
                        });
                        $(window).on('mousemove', function (e) {
                            if (isDraging) {
                                endCoords = (settings.vertical === !0) ? e.pageY : e.pageX;
                                $this.touchMove(endCoords, startCoords)
                            }
                        });
                        $(window).on('mouseup', function (e) {
                            if (isDraging) {
                                $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                                isDraging = !1;
                                endCoords = (settings.vertical === !0) ? e.pageY : e.pageX;
                                var distance = endCoords - startCoords;
                                if (Math.abs(distance) >= settings.swipeThreshold) {
                                    $(window).on('click.ls', function (e) {
                                        if (e.preventDefault) {
                                            e.preventDefault()
                                        } else {
                                            e.returnValue = !1
                                        }
                                        e.stopImmediatePropagation();
                                        e.stopPropagation();
                                        $(window).off('click.ls')
                                    })
                                }
                                $this.touchEnd(distance)
                            }
                        })
                    } else {
                        var startCoords = 0,
                            endCoords = 0,
                            isDraging = !1;
                        $slide.find('.lightSlider').addClass('lsGrab');
                        $slide.on('mousedown', function (e) {
                            if (w < elSize) {
                                if (w !== 0) {
                                    return !1
                                }
                            }
                            if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                                startCoords = (settings.vertical === !0) ? e.pageY : e.pageX;
                                isDraging = !0;
                                if (e.preventDefault) {
                                    e.preventDefault()
                                } else {
                                    e.returnValue = !1
                                }
                                $slide.scrollLeft += 1;
                                $slide.scrollLeft -= 1;
                                $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                                clearInterval(interval)
                            }
                        });
                        $(window).on('mousemove', function (e) {
                            if (isDraging) {
                                endCoords = (settings.vertical === !0) ? e.pageY : e.pageX;
                                $this.touchMove(startCoords, endCoords)
                            }
                        });
                        $(window).on('mouseup', function (e) {
                            if (isDraging) {
                                $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                                isDraging = !1;
                                endCoords = (settings.vertical === !0) ? e.pageY : e.pageX;
                                var distance = startCoords - endCoords;
                                if (Math.abs(distance) >= settings.swipeThreshold) {
                                    $(window).on('click.ls', function (e) {
                                        if (e.preventDefault) {
                                            e.preventDefault()
                                        } else {
                                            e.returnValue = !1
                                        }
                                        e.stopImmediatePropagation();
                                        e.stopPropagation();
                                        $(window).off('click.ls')
                                    })
                                }
                                $this.touchEnd(distance)
                            }
                        })
                    }
                }
            },
            enableTouch: function () {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function (e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        clearInterval(interval)
                    });
                    $slide.on('touchmove', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return !1
                            }
                        }
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(startCoords.pageX - endCoords.pageX);
                        var yMovement = Math.abs(startCoords.pageY - endCoords.pageY);
                        if (settings.vertical === !0) {
                            if ((yMovement * 3) > xMovement) {
                                e.preventDefault()
                            }
                            $this.touchMove(startCoords.pageY, endCoords.pageY)
                        } else {
                            if ((xMovement * 3) > yMovement) {
                                e.preventDefault()
                            }
                            $this.touchMove(startCoords.pageX, endCoords.pageX)
                        }
                    });
                    $slide.on('touchend', function () {
                        var distance;
                        if (settings.vertical === !0) {
                            distance = startCoords.pageY - endCoords.pageY
                        } else {
                            distance = startCoords.pageX - endCoords.pageX
                        }
                        $this.touchEnd(distance)
                    })
                }
            },
            build: function () {
                var $this = this;
                $this.initialStyle();
                if (this.doCss()) {
                    if (settings.enableTouch === !0) {
                        $this.enableTouch()
                    }
                    if (settings.enableDrag === !0) {
                        $this.enableDrag()
                    }
                }
                $(window).on('focus', function () {
                    $this.auto()
                });
                $(window).on('blur', function () {
                    clearInterval(interval)
                });
                $this.pager();
                $this.pauseOnHover();
                $this.controls();
                $this.keyPress()
            }
        };
        plugin.build();
        refresh.init = function () {
            refresh.chbreakpoint();
            if (settings.vertical === !0) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight
                } else {
                    elSize = $children.outerHeight()
                }
                $slide.css('height', elSize + 'px')
            } else {
                elSize = $slide.outerWidth()
            }
            if (settings.loop === !0 && settings.mode === 'slide') {
                refresh.clone()
            }
            refresh.calL();
            if (settings.mode === 'slide') {
                $el.removeClass('lSSlide')
            }
            if (settings.mode === 'slide') {
                refresh.calSW();
                refresh.sSW()
            }
            setTimeout(function () {
                if (settings.mode === 'slide') {
                    $el.addClass('lSSlide')
                }
            }, 1000);
            if (settings.pager) {
                refresh.createPager()
            }
            if (settings.adaptiveHeight === !0 && settings.vertical === !1) {
                $el.css('height', $children.eq(scene).outerHeight(!0))
            }
            if (settings.adaptiveHeight === !1) {
                if (settings.mode === 'slide') {
                    if (settings.vertical === !1) {
                        plugin.setHeight($el, !1)
                    } else {
                        plugin.auto()
                    }
                } else {
                    plugin.setHeight($el, !0)
                }
            }
            if (settings.gallery === !0) {
                plugin.slideThumb()
            }
            if (settings.mode === 'slide') {
                plugin.slide()
            }
            if (settings.autoWidth === !1) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide()
                } else {
                    $slide.find('.lSAction').show()
                }
            } else {
                if ((refresh.calWidth(!1) < elSize) && (w !== 0)) {
                    $slide.find('.lSAction').hide()
                } else {
                    $slide.find('.lSAction').show()
                }
            }
        };
        $el.goToPrevSlide = function () {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(!1);
                if (settings.gallery === !0) {
                    plugin.slideThumb()
                }
            } else {
                if (settings.loop === !0) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    if (settings.mode === 'fade') {
                        var l = (length - 1);
                        scene = parseInt(l / settings.slideMove)
                    }
                    $el.mode(!1);
                    if (settings.gallery === !0) {
                        plugin.slideThumb()
                    }
                } else if (settings.slideEndAnimation === !0) {
                    $el.addClass('leftEnd');
                    setTimeout(function () {
                        $el.removeClass('leftEnd')
                    }, 400)
                }
            }
        };
        $el.goToNextSlide = function () {
            var nextI = !0;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                nextI = _slideValue < w - elSize - settings.slideMargin
            }
            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(!1);
                if (settings.gallery === !0) {
                    plugin.slideThumb()
                }
            } else {
                if (settings.loop === !0) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene = 0;
                    $el.mode(!1);
                    if (settings.gallery === !0) {
                        plugin.slideThumb()
                    }
                } else if (settings.slideEndAnimation === !0) {
                    $el.addClass('rightEnd');
                    setTimeout(function () {
                        $el.removeClass('rightEnd')
                    }, 400)
                }
            }
        };
        $el.mode = function (_touch) {
            if (settings.adaptiveHeight === !0 && settings.vertical === !1) {
                $el.css('height', $children.eq(scene).outerHeight(!0))
            }
            if (on === !1) {
                if (settings.mode === 'slide') {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') {
                            $slide.css('transition-duration', settings.speed + 'ms')
                        }
                        if (settings.cssEasing !== '') {
                            $slide.css('transition-timing-function', settings.cssEasing)
                        }
                    }
                } else {
                    if (plugin.doCss()) {
                        if (settings.speed !== '') {
                            $el.css('transition-duration', settings.speed + 'ms')
                        }
                        if (settings.cssEasing !== '') {
                            $el.css('transition-timing-function', settings.cssEasing)
                        }
                    }
                }
            }
            if (!_touch) {
                settings.onBeforeSlide.call(this, $el, scene)
            }
            if (settings.mode === 'slide') {
                plugin.slide()
            } else {
                plugin.fade()
            }
            if (!$slide.hasClass('ls-hover')) {
                plugin.auto()
            }
            setTimeout(function () {
                if (!_touch) {
                    settings.onAfterSlide.call(this, $el, scene)
                }
            }, settings.speed);
            on = !0
        };
        $el.play = function () {
            $el.goToNextSlide();
            settings.auto = !0;
            plugin.auto()
        };
        $el.pause = function () {
            settings.auto = !1;
            clearInterval(interval)
        };
        $el.refresh = function () {
            refresh.init()
        };
        $el.getCurrentSlideCount = function () {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if (scene <= cl - 1) {
                    sc = ln + (scene - cl)
                } else if (scene >= (ln + cl)) {
                    sc = scene - ln - cl
                } else {
                    sc = scene - cl
                }
            }
            return sc + 1
        };
        $el.getTotalSlideCount = function () {
            return $slide.find('.lslide').length
        };
        $el.goToSlide = function (s) {
            if (settings.loop) {
                scene = (s + $el.find('.clone.left').length - 1)
            } else {
                scene = s
            }
            $el.mode(!1);
            if (settings.gallery === !0) {
                plugin.slideThumb()
            }
        };
        $el.destroy = function () {
            if ($el.lightSlider) {
                $el.goToPrevSlide = function () {};
                $el.goToNextSlide = function () {};
                $el.mode = function () {};
                $el.play = function () {};
                $el.pause = function () {};
                $el.refresh = function () {};
                $el.getCurrentSlideCount = function () {};
                $el.getTotalSlideCount = function () {};
                $el.goToSlide = function () {};
                $el.lightSlider = null;
                refresh = {
                    init: function () {}
                };
                $el.parent().parent().find('.lSAction, .lSPager').remove();
                $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
                $el.children().removeAttr('style');
                $children.removeClass('lslide activeit');
                $el.find('.clone').remove();
                $children = null;
                interval = null;
                on = !1;
                scene = 0
            }
        };
        setTimeout(function () {
            settings.onSliderLoad.call(this, $el)
        }, 10);
        $(window).on('resize orientationchange', function (e) {
            setTimeout(function () {
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    e.returnValue = !1
                }
                refresh.init()
            }, 200)
        });
        return this
    }
}(jQuery));
$(document).ready(function () {
    $('[data-module-type]').each(function () {
        var el = $(this);
        var max = el.data('count') || 11;
        // new ajaxclass({
        //     url: '/marketing/get-user-viewed-products',
        //     method: 'POST',
        //     datatype: 'json',
        //     success: function (res) {
        //         if (res.data.length === 0) {
        //             $(".general-footer-left").removeClass("col-sm-6").addClass("col-sm-2");
        //             $(".general-footer-right").removeClass("col-sm-6").addClass("col-sm-10")
        //         }
        //         el.show();
        //         var parent = el.find('div.general-footer-right-wrapper');
        //         for (var i = 0; i < res.data.length; i++) {
        //             if (i >= max)
        //                 break;
        //             var row = res.data[i];
        //             var wrapper = $(document.createElement('div'));
        //             wrapper.addClass('col-sm-4 col-xs-6');
        //             var div = $(document.createElement('div')).appendTo(wrapper);
        //             var a = $(document.createElement('a'));
        //             a.attr('href', row.url).appendTo(div);
        //             var img = $(document.createElement('img'));
        //             img.attr('src', row.image).appendTo(a);
        //             var innerA = $(document.createElement('a'));
        //             innerA.attr('href', row.url).addClass('product-link').text(row.product_name).appendTo(div);
        //             var priceHolder = $(document.createElement('div'));
        //             priceHolder.addClass('show-price');
        //             var priceSpan = $(document.createElement('span'));
        //             priceSpan.addClass('new-price');
        //             priceSpan.text(row.price);
        //             priceHolder.append(priceSpan).appendTo(div);
        //             wrapper.appendTo(parent)
        //         }
        //     }
        // }).send()
    })
});
! function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b("undefined" != typeof exports ? require("jquery") : a.jQuery)
}(this, function (a) {
    "use strict";

    function h(b) {
        if (c.webkit && !b) return {
            height: 0,
            width: 0
        };
        if (!c.data.outer) {
            var d = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            c.data.inner = a("<div>").css(a.extend({}, d)), c.data.outer = a("<div>").css(a.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, d)).append(c.data.inner).appendTo("body")
        }
        return c.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(c.data.outer.offset().top - c.data.inner.offset().top || 0),
            width: Math.ceil(c.data.outer.offset().left - c.data.inner.offset().left || 0)
        }
    }

    function i() {
        var a = h(!0);
        return !(a.height || a.width)
    }

    function j(a) {
        var b = a.originalEvent;
        return (!b.axis || b.axis !== b.HORIZONTAL_AXIS) && !b.wheelDeltaX
    }
    var b = !1,
        c = {
            data: {
                index: 0,
                name: "scrollbar"
            },
            firefox: /firefox/i.test(navigator.userAgent),
            macosx: /mac/i.test(navigator.platform),
            msedge: /edge\/\d+/i.test(navigator.userAgent),
            msie: /(msie|trident)/i.test(navigator.userAgent),
            mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
            overlay: null,
            scroll: null,
            scrolls: [],
            webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
        };
    c.scrolls.add = function (a) {
        this.remove(a).push(a)
    }, c.scrolls.remove = function (b) {
        for (; a.inArray(b, this) >= 0;) this.splice(a.inArray(b, this), 1);
        return this
    };
    var d = {
            autoScrollSize: !0,
            autoUpdate: !0,
            debug: !1,
            disableBodyScroll: !1,
            duration: 200,
            ignoreMobile: !1,
            ignoreOverlay: !1,
            isRtl: !1,
            scrollStep: 30,
            showArrows: !1,
            stepScrolling: !0,
            scrollx: null,
            scrolly: null,
            onDestroy: null,
            onFallback: null,
            onInit: null,
            onScroll: null,
            onUpdate: null
        },
        e = function (b) {
            c.scroll || (c.overlay = i(), c.scroll = h(), g(), a(window).resize(function () {
                var a = !1;
                if (c.scroll && (c.scroll.height || c.scroll.width)) {
                    var b = h();
                    b.height === c.scroll.height && b.width === c.scroll.width || (c.scroll = b, a = !0)
                }
                g(a)
            })), this.container = b, this.namespace = ".scrollbar_" + c.data.index++, this.options = a.extend({}, d, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, b.data(c.data.name, this), c.scrolls.add(this)
        };
    e.prototype = {
        destroy: function () {
            if (this.wrapper) {
                this.container.removeData(c.data.name), c.scrolls.remove(this);
                var b = this.container.scrollLeft(),
                    d = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(b).scrollTop(d), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), a(document).add("body").off(this.namespace), a.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function (b) {
            var d = this,
                e = this.container,
                f = this.containerWrapper || e,
                g = this.namespace,
                h = a.extend(this.options, b || {}),
                i = {
                    x: this.scrollx,
                    y: this.scrolly
                },
                k = this.wrapper,
                l = {},
                m = {
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop()
                };
            if (c.mobile && h.ignoreMobile || c.overlay && h.ignoreOverlay || c.macosx && !c.webkit) return a.isFunction(h.onFallback) && h.onFallback.apply(this, [e]), !1;
            if (k) l = {
                height: "auto",
                "margin-bottom": c.scroll.height * -1 + "px",
                "max-height": ""
            }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.css(l);
            else {
                if (this.wrapper = k = a("<div>").addClass("scroll-wrapper").addClass(e.attr("class")).css("position", "absolute" === e.css("position") ? "absolute" : "relative").insertBefore(e).append(e), h.isRtl && k.addClass("scroll--rtl"), e.is("textarea") && (this.containerWrapper = f = a("<div>").insertBefore(e).append(e), k.addClass("scroll-textarea")), l = {
                        height: "auto",
                        "margin-bottom": c.scroll.height * -1 + "px",
                        "max-height": ""
                    }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.addClass("scroll-content").css(l), e.on("scroll" + g, function (b) {
                        var f = e.scrollLeft(),
                            g = e.scrollTop();
                        if (h.isRtl) switch (!0) {
                            case c.firefox:
                                f = Math.abs(f);
                            case c.msedge || c.msie:
                                f = e[0].scrollWidth - e[0].clientWidth - f
                        }
                        a.isFunction(h.onScroll) && h.onScroll.call(d, {
                            maxScroll: i.y.maxScrollOffset,
                            scroll: g,
                            size: i.y.size,
                            visible: i.y.visible
                        }, {
                            maxScroll: i.x.maxScrollOffset,
                            scroll: f,
                            size: i.x.size,
                            visible: i.x.visible
                        }), i.x.isVisible && i.x.scroll.bar.css("left", f * i.x.kx + "px"), i.y.isVisible && i.y.scroll.bar.css("top", g * i.y.kx + "px")
                    }), k.on("scroll" + g, function () {
                        k.scrollTop(0).scrollLeft(0)
                    }), h.disableBodyScroll) {
                    var n = function (a) {
                        j(a) ? i.y.isVisible && i.y.mousewheel(a) : i.x.isVisible && i.x.mousewheel(a)
                    };
                    k.on("MozMousePixelScroll" + g, n), k.on("mousewheel" + g, n), c.mobile && k.on("touchstart" + g, function (b) {
                        var c = b.originalEvent.touches && b.originalEvent.touches[0] || b,
                            d = {
                                pageX: c.pageX,
                                pageY: c.pageY
                            },
                            f = {
                                left: e.scrollLeft(),
                                top: e.scrollTop()
                            };
                        a(document).on("touchmove" + g, function (a) {
                            var b = a.originalEvent.targetTouches && a.originalEvent.targetTouches[0] || a;
                            e.scrollLeft(f.left + d.pageX - b.pageX), e.scrollTop(f.top + d.pageY - b.pageY), a.preventDefault()
                        }), a(document).on("touchend" + g, function () {
                            a(document).off(g)
                        })
                    })
                }
                a.isFunction(h.onInit) && h.onInit.apply(this, [e])
            }
            a.each(i, function (b, f) {
                var k = null,
                    l = 1,
                    m = "x" === b ? "scrollLeft" : "scrollTop",
                    n = h.scrollStep,
                    o = function () {
                        var a = e[m]();
                        e[m](a + n), 1 == l && a + n >= p && (a = e[m]()), l == -1 && a + n <= p && (a = e[m]()), e[m]() == a && k && k()
                    },
                    p = 0;
                f.scroll || (f.scroll = d._getScroll(h["scroll" + b]).addClass("scroll-" + b), h.showArrows && f.scroll.addClass("scroll-element_arrows_visible"), f.mousewheel = function (a) {
                    if (!f.isVisible || "x" === b && j(a)) return !0;
                    if ("y" === b && !j(a)) return i.x.mousewheel(a), !0;
                    var c = a.originalEvent.wheelDelta * -1 || a.originalEvent.detail,
                        g = f.size - f.visible - f.offset;
                    return c || ("x" === b && a.originalEvent.deltaX ? c = 40 * a.originalEvent.deltaX : "y" === b && a.originalEvent.deltaY && (c = 40 * a.originalEvent.deltaY)), (c > 0 && p < g || c < 0 && p > 0) && (p += c, p < 0 && (p = 0), p > g && (p = g), d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = p, setTimeout(function () {
                        d.scrollTo && (e.stop().animate(d.scrollTo, 240, "linear", function () {
                            p = e[m]()
                        }), d.scrollTo = null)
                    }, 1)), a.preventDefault(), !1
                }, f.scroll.on("MozMousePixelScroll" + g, f.mousewheel).on("mousewheel" + g, f.mousewheel).on("mouseenter" + g, function () {
                    p = e[m]()
                }), f.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + g, function (g) {
                    if (1 != g.which) return !0;
                    l = 1;
                    var i = {
                            eventOffset: g["x" === b ? "pageX" : "pageY"],
                            maxScrollValue: f.size - f.visible - f.offset,
                            scrollbarOffset: f.scroll.bar.offset()["x" === b ? "left" : "top"],
                            scrollbarSize: f.scroll.bar["x" === b ? "outerWidth" : "outerHeight"]()
                        },
                        j = 0,
                        q = 0;
                    if (a(this).hasClass("scroll-arrow")) {
                        if (l = a(this).hasClass("scroll-arrow_more") ? 1 : -1, n = h.scrollStep * l, p = l > 0 ? i.maxScrollValue : 0, h.isRtl) switch (!0) {
                            case c.firefox:
                                p = l > 0 ? 0 : i.maxScrollValue * -1;
                                break;
                            case c.msie || c.msedge:
                        }
                    } else l = i.eventOffset > i.scrollbarOffset + i.scrollbarSize ? 1 : i.eventOffset < i.scrollbarOffset ? -1 : 0, "x" === b && h.isRtl && (c.msie || c.msedge) && (l *= -1), n = Math.round(.75 * f.visible) * l, p = i.eventOffset - i.scrollbarOffset - (h.stepScrolling ? 1 == l ? i.scrollbarSize : 0 : Math.round(i.scrollbarSize / 2)), p = e[m]() + p / f.kx;
                    return d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = h.stepScrolling ? e[m]() + n : p, h.stepScrolling && (k = function () {
                        p = e[m](), clearInterval(q), clearTimeout(j), j = 0, q = 0
                    }, j = setTimeout(function () {
                        q = setInterval(o, 40)
                    }, h.duration + 100)), setTimeout(function () {
                        d.scrollTo && (e.animate(d.scrollTo, h.duration), d.scrollTo = null)
                    }, 1), d._handleMouseDown(k, g)
                }), f.scroll.bar.on("mousedown" + g, function (i) {
                    if (1 != i.which) return !0;
                    var j = i["x" === b ? "pageX" : "pageY"],
                        k = e[m]();
                    return f.scroll.addClass("scroll-draggable"), a(document).on("mousemove" + g, function (a) {
                        var d = parseInt((a["x" === b ? "pageX" : "pageY"] - j) / f.kx, 10);
                        "x" === b && h.isRtl && (c.msie || c.msedge) && (d *= -1), e[m](k + d)
                    }), d._handleMouseDown(function () {
                        f.scroll.removeClass("scroll-draggable"), p = e[m]()
                    }, i)
                }))
            }), a.each(i, function (a, b) {
                var c = "scroll-scroll" + a + "_visible",
                    d = "x" == a ? i.y : i.x;
                b.scroll.removeClass(c), d.scroll.removeClass(c), f.removeClass(c)
            }), a.each(i, function (b, c) {
                a.extend(c, "x" == b ? {
                    offset: parseInt(e.css("left"), 10) || 0,
                    size: e.prop("scrollWidth"),
                    visible: k.width()
                } : {
                    offset: parseInt(e.css("top"), 10) || 0,
                    size: e.prop("scrollHeight"),
                    visible: k.height()
                })
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), a.isFunction(h.onUpdate) && h.onUpdate.apply(this, [e]), a.each(i, function (a, b) {
                var c = "x" === a ? "left" : "top",
                    d = "x" === a ? "outerWidth" : "outerHeight",
                    f = "x" === a ? "width" : "height",
                    g = parseInt(e.css(c), 10) || 0,
                    i = b.size,
                    j = b.visible + g,
                    k = b.scroll.size[d]() + (parseInt(b.scroll.size.css(c), 10) || 0);
                h.autoScrollSize && (b.scrollbarSize = parseInt(k * j / i, 10), b.scroll.bar.css(f, b.scrollbarSize + "px")), b.scrollbarSize = b.scroll.bar[d](), b.kx = (k - b.scrollbarSize) / (i - j) || 1, b.maxScrollOffset = i - j
            }), e.scrollLeft(m.scrollLeft).scrollTop(m.scrollTop).trigger("scroll")
        },
        _getScroll: function (b) {
            var c = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return c[b] && (b = c[b]), b || (b = c.simple), b = "string" == typeof b ? a(b).appendTo(this.wrapper) : a(b), a.extend(b, {
                bar: b.find(".scroll-bar"),
                size: b.find(".scroll-element_size"),
                track: b.find(".scroll-element_track")
            }), b
        },
        _handleMouseDown: function (b, c) {
            var d = this.namespace;
            return a(document).on("blur" + d, function () {
                a(document).add("body").off(d), b && b()
            }), a(document).on("dragstart" + d, function (a) {
                return a.preventDefault(), !1
            }), a(document).on("mouseup" + d, function () {
                a(document).add("body").off(d), b && b()
            }), a("body").on("selectstart" + d, function (a) {
                return a.preventDefault(), !1
            }), c && c.preventDefault(), !1
        },
        _updateScroll: function (b, d) {
            var e = this.container,
                f = this.containerWrapper || e,
                g = "scroll-scroll" + b + "_visible",
                h = "x" === b ? this.scrolly : this.scrollx,
                i = parseInt(this.container.css("x" === b ? "left" : "top"), 10) || 0,
                j = this.wrapper,
                k = d.size,
                l = d.visible + i;
            d.isVisible = k - l > 1, d.isVisible ? (d.scroll.addClass(g), h.scroll.addClass(g), f.addClass(g)) : (d.scroll.removeClass(g), h.scroll.removeClass(g), f.removeClass(g)), "y" === b && (e.is("textarea") || k < l ? f.css({
                height: l + c.scroll.height + "px",
                "max-height": "none"
            }) : f.css({
                "max-height": l + c.scroll.height + "px"
            })), d.size == e.prop("scrollWidth") && h.size == e.prop("scrollHeight") && d.visible == j.width() && h.visible == j.height() && d.offset == (parseInt(e.css("left"), 10) || 0) && h.offset == (parseInt(e.css("top"), 10) || 0) || (a.extend(this.scrollx, {
                offset: parseInt(e.css("left"), 10) || 0,
                size: e.prop("scrollWidth"),
                visible: j.width()
            }), a.extend(this.scrolly, {
                offset: parseInt(e.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: j.height()
            }), this._updateScroll("x" === b ? "y" : "x", h))
        }
    };
    var f = e;
    a.fn.scrollbar = function (b, d) {
        return "string" != typeof b && (d = b, b = "init"), "undefined" == typeof d && (d = []), a.isArray(d) || (d = [d]), this.not("body, .scroll-wrapper").each(function () {
            var e = a(this),
                g = e.data(c.data.name);
            (g || "init" === b) && (g || (g = new f(e)), g[b] && g[b].apply(g, d))
        }), this
    }, a.fn.scrollbar.options = d;
    var g = function () {
        var a = 0,
            d = 0;
        return function (e) {
            var f, h, i, j, k, l, m;
            for (f = 0; f < c.scrolls.length; f++) j = c.scrolls[f], h = j.container, i = j.options, k = j.wrapper, l = j.scrollx, m = j.scrolly, (e || i.autoUpdate && k && k.is(":visible") && (h.prop("scrollWidth") != l.size || h.prop("scrollHeight") != m.size || k.width() != l.visible || k.height() != m.visible)) && (j.init(), i.debug && (window.console && console.log({
                scrollHeight: h.prop("scrollHeight") + ":" + j.scrolly.size,
                scrollWidth: h.prop("scrollWidth") + ":" + j.scrollx.size,
                visibleHeight: k.height() + ":" + j.scrolly.visible,
                visibleWidth: k.width() + ":" + j.scrollx.visible
            }, !0), d++));
            b && d > 10 ? (window.console && console.log("Scroll updates exceed 10"), g = function () {}) : (clearTimeout(a), a = setTimeout(g, 300))
        }
    }();
    window.angular && ! function (a) {
        a.module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
            var b = d;
            return {
                setOptions: function (c) {
                    a.extend(b, c)
                },
                $get: function () {
                    return {
                        options: a.copy(b)
                    }
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (a, b) {
            return {
                restrict: "AC",
                link: function (c, d, e) {
                    var f = b(e.jqueryScrollbar),
                        g = f(c);
                    d.scrollbar(g || a.options).on("$destroy", function () {
                        d.scrollbar("destroy")
                    })
                }
            }
        }])
    }(window.angular)
});
$(window).load(function () {});
$(document).ready(function () {
    if ($('.quick-cart-holder').length > 0) {
        loadCart()
    }
    if ($.cookie('dismiss') == undefined) {
        $('.notification-bar').removeClass('hide')
    }
    $('.notification-bar').find('.close-button').click(function () {
        $('.notification-bar').addClass('hide');
        $.cookie('dismiss', !0, {
            expires: 7
        })
    })
    $('#notification_trigger').hover(function () {
        if (!$('.notification-list-holder').hasClass('khooger-loading') || $(this).data('is_loading'))
            return !0;
        $(this).data('is_loading', !0);
        var holderParent = $('.notification-list-holder');
        new ajaxclass({
            url: '/network/api/notifications',
            type: 'post',
            loading: 'hide',
            datatype: 'json',
            success: function (res) {
                holderParent.removeClass('khooger-loading');
                var scroll = $('<div></div>').addClass('scrollbar-macosx');
                var holder = $(document.createElement('div')).addClass('content-div');
                scroll.append(holder);
                $('.notification-list-holder').append(scroll);
                var newItems = 0;
                $(res).each(function () {
                    var a = $(document.createElement('a'));
                    a.addClass('media clearfix').attr('href', this.xlink);
                    var mediaLeft = $(document.createElement('div')).addClass('media-left media-middle');
                    mediaLeft.appendTo(a);
                    var img = $(document.createElement('img')).addClass('media-object');
                    var src = 'default.png';
                    if (this.avatar != undefined) {
                        src = this.avatar
                    }
                    img.attr('src', '/_photo/userImages/30-30-' + src).appendTo(mediaLeft);
                    var dateHolder = $(document.createElement('small'));
                    dateHolder.addClass('pull-left margin-right').text(this.created_date)
                    var body = $(document.createElement('div'));
                    var span = $(document.createElement('span'));
                    span.text(this.xtitle);
                    body.addClass('media-body').append(dateHolder).append(span).appendTo(a);
                    holder.append(a);
                    if (this.xread_status == !1)
                        newItems++
                });
                if (res.length > 0) {
                    var showAll = $(document.createElement('a'));
                    showAll.addClass('show-all').text('نمایش همه').attr('href', '/network/notifications').appendTo(holder)
                }
                var number = parseInt($('#notificatiopn-count-holder').text());
                number = number - newItems;
                if (number < 0)
                    number = 0;
                $('#notificatiopn-count-holder').text(number)
                $('.notification-list-holder > div').scrollbar()
            }
        }).send()
    })
    if ($(window).width() > 991) {
        var menuCampaign = $('.menu-campaign');
        $('.header-bottom nav > ul > li:not(".no-dark")').hover(function () {
            $('.dark-page').addClass("active");
            if (!$(this).data('size-fixed')) {
                var ul = $(this).find('> ul');
                var paddingBottom = ul.css('padding-bottom').replace('px', '');
                paddingBottom = parseInt(paddingBottom);
                var ulSize = ul.height() - paddingBottom;
                var lis = $(this).find('> ul > li').not('.show-all');
                var lastLiInList = $(this).find('> ul > li:last');
                if (lis.length < 7) {
                    $(this).data('size-fixed', !0);
                    return
                }
                var lastLi = lis.eq(0);
                var lastLiHeight = lastLi.outerHeight();
                for (var i = 1; i < lis.length; i++) {
                    var h = lis.eq(i).outerHeight();
                    if (h + lastLiHeight > ulSize || lis.eq(i).find('li').not('.show-all').length < 2) {
                        lastLi = lis.eq(i);
                        lastLiHeight = h;
                        continue
                    }
                    lis.eq(i).appendTo(lastLi);
                    lastLiHeight = lastLi.outerHeight()
                }
                $(this).data('size-fixed', !0)
            }
        }, function () {
            $('.dark-page').removeClass("active")
        }).each(function () {})
        var isProductList = $('.primary-product-filter').length > 0 ? !0 : !1;
        $(window).scroll(function (e) {
            if (!isProductList) {
                if ($(this).scrollTop() > lastScroll) {
                    if (scrollLocked) {
                        scrollLocked = !1;
                        $('.header').removeClass('fixed');
                        $('body').removeClass('header-fixed ')
                    }
                } else if ($(this).scrollTop() > 200) {
                    scrollLocked = !0;
                    $('.header').addClass('fixed');
                    $('body').addClass('header-fixed ')
                } else if ($(this).scrollTop() < 200) {
                    scrollLocked = !1;
                    $('.header').removeClass('fixed');
                    $('body').removeClass('header-fixed ')
                }
                lastScroll = $(this).scrollTop();
                return
            }
            if (!scrollLocked && $(this).scrollTop() > 200) {
                scrollLocked = !0;
                $('.header').addClass('fixed');
                $('body').addClass('header-fixed ')
            } else if ($(this).scrollTop() < 200) {
                scrollLocked = !1;
                $('.header').removeClass('fixed');
                $('body').removeClass('header-fixed ')
            }
        })
    }
    $('.menu-mobile-trigger').click(function () {
        $('body').addClass('menu-open');
        $('.mobile-menu').show();
        $('.mobile-menu').addClass('open');
        $('.dark-page').show()
    })
    if ($(window).width() < 992) {
        $('.close-menu').click(function () {
            $('body').removeClass('menu-open')
            $('.mobile-menu').removeClass('open');
            $('.mobile-menu').addClass('close-menu');
            $('.dark-page').hide()
        })
        $('.mobile-search-trigger').click(function () {
            $('.search-box.main-search-box').toggle()
        })
        $('.menu-body nav a i.fa').each(function () {
            $(this).parent().click(function () {
                $(this).toggleClass('active').next().slideToggle();
                return !1
            })
        })
        $('.menu-body nav ul').each(function () {
            $(this).prev().click(function () {
                return !1
            })
        })
        $('.dark-page').click(function () {
            $('.close-menu').click()
        })
    } else {
        if ($('html').hasClass('touchevents')) {
            $('nav > ul > li > a').click(function (e) {
                if ($(this).next().css('opacity') == '0') {
                    return !1
                }
            })
        }
    }
    $('#subscribe_form').submit(function () {
        var data = {};
        $(this).find('input').each(function () {
            data[$(this).attr('name')] = $(this).val()
        })
        $(this).addClass('khooger-loading');
        new ajaxclass({
            url: $(this).attr('action'),
            data: data,
            datatype: 'json',
            type: 'POST',
            success: function (res) {
                $('#subscribe_form').removeClass('khooger-loading');
                if (res.error) {
                    showNotif(res.error, {
                        type: 'error'
                    })
                } else {
                    showNotif(res.message, {
                        type: 'success'
                    });
                    $('#subscribe_form').find('[name="email"]').each(function () {
                        $(this).val('')
                    })
                }
            }
        }).send();
        return !1
    })
    $('#dark').click(function () {
        $('#search-result').removeClass('show');
        $('#form').removeClass('active-input');
        $('#dark').fadeOut(500)
    })
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(window).scrollTop() > 160) {
                $('body').addClass('sticky-header')
            } else {
                $('body').removeClass('sticky-header')
            }
        }
    })
    $('.hamburger-box').click(function () {
        $('body').addClass('menu-open');
        $('#dark').show('slow')
    });
    $('#dark').click(function () {
        $('body').removeClass('menu-open')
    });
    if ($(window).width() <= 992) {
        $('.download-app').remove()
    }
    $('.has-children>a').click(function (e) {
        if ($(window).width() <= 991) {
            $(this).parent().find('ul:first').slideToggle();
            $(this).find('i').toggleClass('rotate');
            e.preventDefault();
            return !1
        }
    })
});
var scrollLocked = !1;
var lastScroll = 0;
var loadCart = function () {
    // new ajaxclass({
    //     url: '/cart/get-user-cart',
    //     loading: 'hide',
    //     datatype: 'json',
    //     success: function (res) {
    //         $('.quick-cart-holder .list-cart').addClass('khooger-loading')
    //         createCartFromData(res.data)
    //     }
    // }).send()
};
var createCartFromData = function (data) {
    var el = $('.quick-cart-holder');
    el.find('.list-cart').removeClass('khooger-loading')
    $('.quick-cart-holder').attr('data-count', data.items.length);
    $('.quick-cart-holder').find('.total-price p:last').text(data.total);
    if (data.items.length == 0) {
        $('.list-cart').find('.item').remove()
    } else {
        var parent = $('.list-cart');
        parent.html('');
        var items = data.items;
        $(items).each(function () {
            parent.append(createRowForCart(this, data.cart_id))
        });
        return
    }
};
var createRowForCart = function (data, cartId) {
    var parentRowDiv = $('<div></div>');
    parentRowDiv.addClass('item d-flex align-items-center');
    var flexHolderDiv = $('<div></div>');
    flexHolderDiv.addClass('d-flex align-items-center').appendTo(parentRowDiv);
    var deleteHolder = $('<div></div>');
    deleteHolder.data('row_id', data.id).data('cart_id', cartId).addClass('delete-icon').click(function () {
        removeCartRow($(this))
    }).appendTo(flexHolderDiv);
    var deleteIcon = $('<i></i>');
    deleteIcon.addClass('icon-delete').appendTo(deleteHolder);
    var imageHolder = $('<div></div>');
    imageHolder.addClass('image').appendTo(flexHolderDiv);
    if (data.image != '') {
        var img = $('<img/>');
        img.attr('src', data.image);
        imageHolder.append(img)
    }
    var titlePriceCount = $('<div></div>');
    titlePriceCount.addClass('title-price-count').appendTo(flexHolderDiv);
    var title = $('<div></div>');
    title.addClass('title').appendTo(titlePriceCount);
    var h6 = $('<h6></h6>');
    h6.appendTo(title);
    var a = $('<a></a>');
    a.text(data.title).appendTo(h6);
    if (data.url != '')
        a.attr('href', data.url);
    var countPrice = $('<div></div>');
    countPrice.addClass('count-price d-flex').appendTo(titlePriceCount);
    var count = $('<div></div>');
    count.addClass('count').appendTo(countPrice);
    var spanCount = $('<span></span>');
    spanCount.text(data.count).appendTo(count);
    var spanText = $('<span></span>');
    spanText.text('عدد').appendTo(count);
    var price = $('<div></div>');
    price.addClass('price').appendTo(countPrice);
    var priceCount = $('<span></span>');
    priceCount.text(data.price).appendTo(price);
    return parentRowDiv
};
var removeCartRow = function (el) {
    var b = confirm('از حذف این محصول مطمئن هستید؟');
    if (!b)
        return;
    $('.quick-cart-holder').find('.list-cart').addClass('khooger-loading');
    new ajaxclass({
        url: '/cart/remove-from-cart',
        data: {
            itemid: el.data('row_id'),
            cartid: el.data('cart_id')
        },
        success: function () {
            loadCart()
        }
    }).send()
};

function parsePx(input) {
    var match;
    match = input.replace('px', '');
    return parseFloat(match)
}
$.prototype.actualWidth = function () {
    var isBorderBox = (this.css("box-sizing") === "border-box");
    var width = this.width();
    if (isBorderBox) {
        width = width + parsePx(this.css("padding-left")) + parsePx(this.css("padding-right")) + parsePx(this.css("border-left-width")) + parsePx(this.css("border-right-width"))
    }
    return width
};
Parsley.addMessages('fa', {
    defaultMessage: "این مقدار صحیح نمی باشد",
    type: {
        email: "این مقدار باید یک ایمیل معتبر باشد",
        url: "این مقدار باید یک آدرس معتبر باشد",
        number: "این مقدار باید یک عدد معتبر باشد",
        integer: "این مقدار باید یک عدد صحیح معتبر باشد",
        digits: "این مقدار باید یک عدد باشد",
        alphanum: "این مقدار باید حروف الفبا باشد"
    },
    notblank: "این مقدار نباید خالی باشد",
    required: "این مقدار باید وارد شود",
    pattern: "این مقدار به نظر می رسد نامعتبر است",
    min: "این مقدیر باید بزرگتر با مساوی %s باشد",
    max: "این مقدار باید کمتر و یا مساوی %s باشد",
    range: "این مقدار باید بین %s و %s باشد",
    minlength: "این مقدار بیش از حد کوتاه است. باید %s کاراکتر یا بیشتر باشد.",
    maxlength: "این مقدار بیش از حد طولانی است. باید %s کاراکتر یا کمتر باشد.",
    length: "این مقدار نامعتبر است و باید بین %s و %s باشد",
    mincheck: "شما حداقل باید %s گزینه را انتخاب کنید.",
    maxcheck: "شما حداکثر می‌توانید %s انتخاب داشته باشید.",
    check: "باید بین %s و %s مورد انتخاب کنید",
    equalto: "این مقدار باید یکسان باشد"
});
Parsley.setLocale('fa');
var searchResult = null;
var searchTimeOut1 = null;
var createProductRow = function (obj) {
    var media = $(document.createElement('div'));
    media.addClass('media');
    var mediaLeft = $(document.createElement('div'));
    mediaLeft.addClass('media-left');
    media.append(mediaLeft);
    var a = $(document.createElement('a'));
    a.attr('href', '/' + algolang + "/products/" + obj.xfriendly_url);
    mediaLeft.append(a);
    var img = $(document.createElement('img'));
    imgnm = obj.ximage_name;
    if (imgnm === 'default') {
        imgnm = 'default.png'
    }
    img.attr('src', "/_photo/product/subimage/100-100-" + imgnm).appendTo(a);
    var mediaBody = $(document.createElement('a'));
    mediaBody.attr('href', '/' + algolang + "/product/details/productid/" + obj.xproduct_id).addClass('media-body').html(obj._highlightResult.xproduct_code.value).appendTo(media);
    var mediaHeading = $(document.createElement('h6'));
    mediaHeading.addClass('media-heading').html(obj._highlightResult.xproduct_name.value).prependTo(mediaBody);
    $('body').find('#search-result').find('.prodplace').append(media);
    $('body').find('#search-result').find('.prodplace').append('<hr>')
}
var newInitied = 0;
var prodeuctTemplate = null;

function searchCallback(err, content) {
    if (err) {
        console.error(err);
        return
    }
    $(content.hits).each(function (index, item) {
        var product = prodeuctTemplate.clone();
        var items = item.image.split('/');
        var name = items.pop();
        product.attr('href', '/' + algolang + "/product/details/productid/" + item.id)
        item.image = items.join('/') + '/300-300-' + name;
        product.find('img').attr('src', '/_photo/product/subimage/' + item.image);
        product.find('h6').text(item.name);
        $('.product-section').append(product)
    })
    if (content.hits.length === 0) {
        $('.product-section').hide()
    } else $('.product-section').show()
}

function searchCallbackCat(err, content) {
    var searchCategory = $('.search-category').find('ul');
    if (err) {
        console.error(err);
        return
    }
    $(content.hits).each(function (index, item) {
        var li = $('<li></li>').append($('<a></a>').attr('href', '/products/' + item.url).text(item.name));
        searchCategory.append(li)
    })
    if (content.hits.length === 0) {
        $('.search-category').hide()
    } else $('.search-category').show()
}

function searchSupplierCallback(err, content) {
    var sellers = $('.sellers').find('ul');
    if (err) {
        console.error(err);
        return
    }
    $(content.hits).each(function (index, item) {
        var li = $('<li></li>').append($('<a></a>').attr('href', '/brand/' + item.url).text(item.title));
        sellers.append(li)
    })
    if (content.hits.length === 0) {
        $('.sellers').hide()
    } else $('.sellers').show()
}
var searchType = 'shop';
$(document).ready(function () {
    prodeuctTemplate = $('.product-item:first').clone();
    prodeuctTemplate.removeClass('d-none');
    searchResult = $('#search-result');
    $('.dropdown-toggle').dropdown();
    $('#icon-trigger').click(function () {
        $('.search-container').toggleClass('active');
        $('#dark:visible').hide()
    })

    function startSearch() {
        searchResult.find('.cat-section').html('');
        searchResult.find('.sellers-section').html('');
        $('.product-section').html('');
        $('.network-result').html('');
        searchResult.addClass('khooger-loading-algo');
        searchResult.css('opacity', 0.5);
        if (searchType == 'shop') {
            $('#search_in_whole').attr('href', $('#search_in_whole').data('href') + $('#search-input').val())
            var b = new ajaxclass({
                url: '/index/search-ajax',
                type: 'POST',
                data: {
                    query: $('#search-input').val()
                },
                success: function (res) {
                    searchResult.find('.cat-section').html('');
                    searchResult.find('.sellers-section').html('');
                    $('.product-section').html('');
                    searchCallbackCat(!1, {
                        hits: res.cat
                    })
                    searchCallback(!1, {
                        hits: res.products
                    })
                    searchSupplierCallback(!1, {
                        hits: res.suppliers
                    })
                }
            })
            b.send()
        } else {
            var b = new ajaxclass({
                url: '/network/api/hashtags/search',
                type: 'POST',
                data: {
                    query: $('#search-input').val()
                },
                success: function (res) {
                    var ul = $('<ul></ul>');
                    if (res.length) {
                        $(res).map(function () {
                            var li = $('<li></li>');
                            var a = $('<a></a>');
                            a.attr('href', '/network/wall/' + this.text).text('#' + this.text).appendTo(li);
                            li.appendTo(ul)
                        })
                    } else {
                        var li = $('<li></li>');
                        var a = $('<a></a>');
                        a.text('نتیجه ای یافت نشد').appendTo(li);
                        li.appendTo(ul)
                    }
                    $('.network-result').append(ul)
                    console.log(res)
                }
            })
            b.send()
        }
    }
    $('#search-input').on('keyup', function () {
        var prev = '';
        var current = $(this).val();
        if (prev !== current) {}
    });
    $('#search_form').submit(function (e) {
        if (searchType != 'shop') {
            e.preventDefault();
            return !1
        }
    });
    $('#search-input').keyup(function (e) {
        if (e.keyCode == 13) {
            return !0
        }
        newInitied = 0;
        var val = $(this).val();
        val = $.trim(val);
        if (val.length < 3) {
            searchLastVal = '';
            searchResult.find('.cat-section').html('');
            searchResult.find('.sellers-section').html('');
            searchResult.removeClass('show');
            $('#form').removeClass('active-input');
            $('#dark').fadeOut(500);
            $('.product-section').html('');
            $('.notification-bar').css('display', 'none');
            return !0
        } else {
            searchResult.addClass('show');
            $('#form').addClass('active-input');
            $('#dark').fadeIn(500)
        }
        if (searchTimeOut1 !== null)
            clearTimeout(searchTimeOut1);
        searchTimeOut1 = setTimeout(startSearch, 200)
    }).attr('autocomplete', 'off');
    $(window).click(function () {
        if (document.activeElement != $('#search-input')[0] && document.activeElement != $('#search-input').parent()[0])
            searchResult.removeClass('show')
    })
    $('.choose-search-type a').click(function () {
        searchType = $(this).data('search-type');
        if (searchType == 'shop') {
            $('.network-result').hide();
            $('.shop-result').show()
        } else {
            $('.network-result').show();
            $('.shop-result').hide()
        }
        $('.choose-search-type .dropdown-toggle span').text($(this).text())
    })
});
window.Modernizr = function (a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) {
            return v.call(a, b)
        } : w = function (a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function () {
                    if (this instanceof e) {
                        var a = function () {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.cssanimations = function () {
            return D("animationName")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function (a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function (a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function () {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
                return B([a])
            }, e.testAllProps = D, e.prefixed = function (a, b, c) {
                return b ? D(a, b, c) : D(a, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function () {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function () {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function (a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function () {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function () {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function (a, b) {
            z[a] = b
        }, B.addFilter = function (a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function () {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
(function (window) {
    'use strict';

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)")
    }
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c)
        };
        addClass = function (elem, c) {
            elem.classList.add(c)
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c)
        }
    } else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className)
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ')
        }
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c)
    }
    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    if (typeof define === 'function' && define.amd) {
        define(classie)
    } else {
        window.classie = classie
    }
})(window);
(function (window) {
    'use strict';
    var docElem = window.document.documentElement,
        support = {
            animations: Modernizr.cssanimations
        },
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key]
            }
        }
        return a
    }

    function NotificationFx(options) {
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init()
    }
    NotificationFx.prototype.options = {
        wrapper: document.body,
        message: 'yo!',
        layout: 'growl',
        effect: 'slide',
        type: 'error',
        ttl: 6000,
        onClose: function () {
            return !1
        },
        onOpen: function () {
            return !1
        }
    }
    NotificationFx.prototype._init = function () {
        this.ntf = document.createElement('div');
        this.ntf.className = 'ns-box ns-' + this.options.layout + ' ns-effect-' + this.options.effect + ' ns-type-' + this.options.type;
        var strinner = '<div class="ns-box-inner">';
        strinner += this.options.message;
        strinner += '</div>';
        strinner += '<span class="ns-close"></span></div>';
        this.ntf.innerHTML = strinner;
        this.options.wrapper.insertBefore(this.ntf, this.options.wrapper.firstChild);
        var self = this;
        this.dismissttl = setTimeout(function () {
            if (self.active) {
                self.dismiss()
            }
        }, this.options.ttl);
        this._initEvents()
    }
    NotificationFx.prototype._initEvents = function () {
        var self = this;
        this.ntf.querySelector('.ns-close').addEventListener('click', function () {
            self.dismiss()
        })
    }
    NotificationFx.prototype.show = function () {
        this.active = !0;
        classie.remove(this.ntf, 'ns-hide');
        classie.add(this.ntf, 'ns-show');
        this.options.onOpen()
    }
    NotificationFx.prototype.dismiss = function () {
        var self = this;
        this.active = !1;
        clearTimeout(this.dismissttl);
        classie.remove(this.ntf, 'ns-show');
        setTimeout(function () {
            classie.add(self.ntf, 'ns-hide');
            self.options.onClose()
        }, 25);
        var onEndAnimationFn = function (ev) {
            if (support.animations) {
                if (ev.target !== self.ntf) return !1;
                this.removeEventListener(animEndEventName, onEndAnimationFn)
            }
            self.options.wrapper.removeChild(this)
        };
        if (support.animations) {
            this.ntf.addEventListener(animEndEventName, onEndAnimationFn)
        } else {
            onEndAnimationFn()
        }
    }
    window.NotificationFx = NotificationFx
})(window);

function showNotif(text, options) {
    if (options == undefined)
        options = {};
    if (options.type == undefined)
        options.type = "error";
    var html = '';
    if (options.type == "error")
        html = '<div class="ns-thumb"><img src="/_images/loan_landing/error.jpg"/></div><div class="ns-content"><p>' + text + '</p></div>';
    if (options.type == "success")
        html = '<div class="ns-thumb"><img src="/_images/loan_landing/success.jpg"/></div><div class="ns-content"><p>' + text + '</p></div>';
    if (options.type == "notice")
        html = '<div class="ns-thumb"><img src="/_images/loan_landing/info.jpg"/></div><div class="ns-content"><p>' + text + '</p></div>';
    var message = new NotificationFx({
        wrapper: document.body,
        message: html,
        effect: 'thumbslider',
        layout: 'other',
        type: options.type,
        ttl: 10000,
    });
    message.show()
};

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function initializeBirthdayClock(clock, endtime) {
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval)
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000)
}
$(document).ready(function () {
    $('.birthday-timer').find('.clockdiv').each(function () {
        var deadline = new Date('06/30/2018 00:01:00');
        initializeBirthdayClock(this, deadline)
    })
})
