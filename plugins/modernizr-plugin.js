/* eslint-disable */
// if (process.browser) {}

/*! modernizr 3.11.3 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-webp-setclasses !*/
!(function(e, n, t, o) {
  function i(e, n) {
    return typeof e === n
  }
  function a(e) {
    var n = p.className,
      t = Modernizr._config.classPrefix || ''
    if ((h && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)')
      n = n.replace(o, '$1' + t + 'js$2')
    }
    Modernizr._config.enableClasses &&
      (e.length > 0 && (n += ' ' + t + e.join(' ' + t)),
      h ? (p.className.baseVal = n) : (p.className = n))
  }
  function r() {
    return 'function' != typeof t.createElement
      ? t.createElement(arguments[0])
      : h
      ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
      : t.createElement.apply(t, arguments)
  }
  function A() {
    var e = t.body
    return e || ((e = r(h ? 'svg' : 'body')), (e.fake = !0)), e
  }
  function s(e, n, o, i) {
    var a,
      s,
      l,
      u,
      f = 'modernizr',
      c = r('div'),
      d = A()
    if (parseInt(o, 10))
      for (; o--; )
        (l = r('div')), (l.id = i ? i[o] : f + (o + 1)), c.appendChild(l)
    return (
      (a = r('style')),
      (a.type = 'text/css'),
      (a.id = 's' + f),
      (d.fake ? d : c).appendChild(a),
      d.appendChild(c),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(t.createTextNode(e)),
      (c.id = f),
      d.fake &&
        ((d.style.background = ''),
        (d.style.overflow = 'hidden'),
        (u = p.style.overflow),
        (p.style.overflow = 'hidden'),
        p.appendChild(d)),
      (s = n(c, e)),
      d.fake
        ? (d.parentNode.removeChild(d), (p.style.overflow = u), p.offsetHeight)
        : c.parentNode.removeChild(c),
      !!s
    )
  }
  function l(e, t, o) {
    var i
    if ('getComputedStyle' in n) {
      i = getComputedStyle.call(n, e, t)
      var a = n.console
      if (null !== i) o && (i = i.getPropertyValue(o))
      else if (a) {
        var r = a.error ? 'error' : 'log'
        a[r].call(
          a,
          'getComputedStyle returning null, its possible modernizr test results are inaccurate'
        )
      }
    } else i = !t && e.currentStyle && e.currentStyle[o]
    return i
  }
  function u(e, n) {
    if ('object' == typeof e) for (var t in e) g(e, t) && u(t, e[t])
    else {
      e = e.toLowerCase()
      var o = e.split('.'),
        i = Modernizr[o[0]]
      if ((2 === o.length && (i = i[o[1]]), void 0 !== i)) return Modernizr
      ;(n = 'function' == typeof n ? n() : n),
        1 === o.length
          ? (Modernizr[o[0]] = n)
          : (!Modernizr[o[0]] ||
              Modernizr[o[0]] instanceof Boolean ||
              (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
            (Modernizr[o[0]][o[1]] = n)),
        a([(n && !1 !== n ? '' : 'no-') + o.join('-')]),
        Modernizr._trigger(e, n)
    }
    return Modernizr
  }
  var f = [],
    c = {
      _version: '3.11.3',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        f.push({ name: e, fn: n, options: t })
      },
      addAsyncTest: function(e) {
        f.push({ name: null, fn: e })
      }
    },
    Modernizr = function() {}
  ;(Modernizr.prototype = c), (Modernizr = new Modernizr())
  var d = [],
    p = t.documentElement,
    h = 'svg' === p.nodeName.toLowerCase(),
    m = c._config.usePrefixes
      ? ' -webkit- -moz- -o- -ms- '.split(' ')
      : ['', '']
  c._prefixes = m
  var v = (function() {
    var e = n.matchMedia || n.msMatchMedia
    return e
      ? function(n) {
          var t = e(n)
          return (t && t.matches) || !1
        }
      : function(e) {
          var n = !1
          return (
            s(
              '@media ' + e + ' { #modernizr { position: absolute; } }',
              function(e) {
                n = 'absolute' === l(e, null, 'position')
              }
            ),
            n
          )
        }
  })()
  ;(c.mq = v),
    Modernizr.addTest('touchevents', function() {
      if (
        'ontouchstart' in n ||
        n.TouchEvent ||
        (n.DocumentTouch && t instanceof DocumentTouch)
      )
        return !0
      var e = ['(', m.join('touch-enabled),('), 'heartz', ')'].join('')
      return v(e)
    })
  var g
  !(function() {
    var e = {}.hasOwnProperty
    g =
      i(e, 'undefined') || i(e.call, 'undefined')
        ? function(e, n) {
            return n in e && i(e.constructor.prototype[n], 'undefined')
          }
        : function(n, t) {
            return e.call(n, t)
          }
  })(),
    (c._l = {}),
    (c.on = function(e, n) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(n),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
          }, 0)
    }),
    (c._trigger = function(e, n) {
      if (this._l[e]) {
        var t = this._l[e]
        setTimeout(function() {
          var e
          for (e = 0; e < t.length; e++) (0, t[e])(n)
        }, 0),
          delete this._l[e]
      }
    }),
    Modernizr._q.push(function() {
      c.addTest = u
    }),
    Modernizr.addAsyncTest(function() {
      function e(e, n, t) {
        function o(n) {
          var o = !(!n || 'load' !== n.type) && 1 === i.width
          u(e, 'webp' === e && o ? new Boolean(o) : o), t && t(n)
        }
        var i = new Image()
        ;(i.onerror = o), (i.onload = o), (i.src = n)
      }
      var n = [
          {
            uri:
              'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
            name: 'webp'
          },
          {
            uri:
              'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
            name: 'webp.alpha'
          },
          {
            uri:
              'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
            name: 'webp.animation'
          },
          {
            uri:
              'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
            name: 'webp.lossless'
          }
        ],
        t = n.shift()
      e(t.name, t.uri, function(t) {
        if (t && 'load' === t.type)
          for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri)
      })
    }),
    (function() {
      var e, n, t, o, a, r, A
      for (var s in f)
        if (f.hasOwnProperty(s)) {
          if (
            ((e = []),
            (n = f[s]),
            n.name &&
              (e.push(n.name.toLowerCase()),
              n.options && n.options.aliases && n.options.aliases.length))
          )
            for (t = 0; t < n.options.aliases.length; t++)
              e.push(n.options.aliases[t].toLowerCase())
          for (
            o = i(n.fn, 'function') ? n.fn() : n.fn, a = 0;
            a < e.length;
            a++
          )
            (r = e[a]),
              (A = r.split('.')),
              1 === A.length
                ? (Modernizr[A[0]] = o)
                : ((Modernizr[A[0]] &&
                    (!Modernizr[A[0]] || Modernizr[A[0]] instanceof Boolean)) ||
                    (Modernizr[A[0]] = new Boolean(Modernizr[A[0]])),
                  (Modernizr[A[0]][A[1]] = o)),
              d.push((o ? '' : 'no-') + A.join('-'))
        }
    })(),
    a(d),
    delete c.addTest,
    delete c.addAsyncTest
  for (var w = 0; w < Modernizr._q.length; w++) Modernizr._q[w]()
  e.Modernizr = Modernizr
})(window, window, document)
