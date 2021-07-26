'undefined' == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(['jquery'], function (e) {
          return t(e, window)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t(require('jquery'), window))
      : t(jQuery, window)
  })(function (s, n) {
    'use strict'
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1
            if (+n[i] < +o[i]) return -1
          }
          return 0
        })(s.fn.jquery, e)
      )
    }
    ;(s.migrateVersion = '3.3.2'),
      n.console &&
        n.console.log &&
        ((s && e('3.0.0')) || n.console.log('JQMIGRATE: jQuery 3.0.0+ REQUIRED'),
        s.migrateWarnings && n.console.log('JQMIGRATE: Migrate plugin loaded multiple times'),
        n.console.log(
          'JQMIGRATE: Migrate is installed' +
            (s.migrateMute ? '' : ' with logging active') +
            ', version ' +
            s.migrateVersion
        ))
    var r = {}
    function u(e) {
      var t = n.console
      ;(s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn('JQMIGRATE: ' + e), s.migrateTrace && t.trace && t.trace()))
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r
        },
        set: function (e) {
          u(n), (r = e)
        }
      })
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments)
      }
    }
    ;(s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        ;(r = {}), (s.migrateWarnings.length = 0)
      }),
      'BackCompat' === n.document.compatMode && u('jQuery is not compatible with Quirks Mode')
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments)
      return (
        'string' == typeof e &&
          '#' === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      )
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments)
      if ('string' == typeof t && f.test(t))
        try {
          n.document.querySelector(t)
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return '[' + t + r + '"' + n + '"]'
          })
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t)
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0])
          }
        }
      return p.apply(this, r)
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i])
    o(
      s.fn,
      'size',
      function () {
        return this.length
      },
      'jQuery.fn.size() is deprecated and removed; use the .length property'
    ),
      o(
        s,
        'parseJSON',
        function () {
          return JSON.parse.apply(null, arguments)
        },
        'jQuery.parseJSON is deprecated; use JSON.parse'
      ),
      o(s, 'holdReady', s.holdReady, 'jQuery.holdReady is deprecated'),
      o(s, 'unique', s.uniqueSort, 'jQuery.unique is deprecated; use jQuery.uniqueSort'),
      t(
        s.expr,
        'filters',
        s.expr.pseudos,
        'jQuery.expr.filters is deprecated; use jQuery.expr.pseudos'
      ),
      t(s.expr, ':', s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
      e('3.1.1') &&
        o(
          s,
          'trim',
          function (e) {
            return null == e ? '' : (e + '').replace(m, '')
          },
          'jQuery.trim is deprecated; use String.prototype.trim'
        ),
      e('3.2.0') &&
        (o(
          s,
          'nodeName',
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
          },
          'jQuery.nodeName is deprecated'
        ),
        o(s, 'isArray', Array.isArray, 'jQuery.isArray is deprecated; use Array.isArray')),
      e('3.3.0') &&
        (o(
          s,
          'isNumeric',
          function (e) {
            var t = typeof e
            return ('number' == t || 'string' == t) && !isNaN(e - parseFloat(e))
          },
          'jQuery.isNumeric() is deprecated'
        ),
        s.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
          function (e, t) {
            d['[object ' + t + ']'] = t.toLowerCase()
          }
        ),
        o(
          s,
          'type',
          function (e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
              ? d[Object.prototype.toString.call(e)] || 'object'
              : typeof e
          },
          'jQuery.type is deprecated'
        ),
        o(
          s,
          'isFunction',
          function (e) {
            return 'function' == typeof e
          },
          'jQuery.isFunction() is deprecated'
        ),
        o(
          s,
          'isWindow',
          function (e) {
            return null != e && e === e.window
          },
          'jQuery.isWindow() is deprecated'
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments)
          return (
            e.promise &&
              (o(e, 'success', e.done, 'jQXHR.success is deprecated and removed'),
              o(e, 'error', e.fail, 'jQXHR.error is deprecated and removed'),
              o(e, 'complete', e.always, 'jQXHR.complete is deprecated and removed')),
            e
          )
        }),
        e('4.0.0') ||
          s.ajaxPrefilter('+json', function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ('string' == typeof e.data &&
                  0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  c.test(e.data))) &&
              u('JSON-to-JSONP auto-promotion is deprecated')
          }))
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase()
      })
    }
    s.fn.removeAttr = function (e) {
      var r = this
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u('jQuery.fn.removeAttr no longer sets boolean properties: ' + t), r.prop(t, !1))
        }),
        g.apply(this, arguments)
      )
    }
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && 'boolean' != typeof t
          ? h.apply(this, arguments)
          : (u('jQuery.fn.toggleClass( boolean ) is deprecated'),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute('class')) || ''
              e && s.data(this, '__className__', e),
                this.setAttribute &&
                  this.setAttribute(
                    'class',
                    (!e && !1 !== t && s.data(this, '__className__')) || ''
                  )
            }))
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/
    s.swap &&
      s.each(['height', 'width', 'reliableMarginRight'], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get
        r &&
          (s.cssHooks[t].get = function () {
            var e
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e
          })
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {}
        for (i in (b || u('jQuery.swap() is undocumented and deprecated'), t))
          (a[i] = e.style[i]), (e.style[i] = t[i])
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i]
        return o
      }),
      e('3.4.0') &&
        'undefined' != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return u('JQMIGRATE: jQuery.cssProps is deprecated'), Reflect.set.apply(this, arguments)
          }
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this
        return e && 'object' == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t)
            }),
            this)
          : ('number' == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
            Q.apply(this, arguments))
      })
    var A,
      k,
      S,
      M,
      N = s.data
    ;(s.data = function (e, t, r) {
      var n, o, i
      if (t && 'object' == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u('jQuery.data() always sets/gets camelCased names: ' + i), (n[i] = t[i]))
            : (o[i] = t[i])
        return N.call(this, e, o), t
      }
      return t &&
        'string' == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u('jQuery.data() always sets/gets camelCased names: ' + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments)
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments)
        }),
        (A = s.fx.interval || 13),
        (k = 'jQuery.fx.interval is deprecated'),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, 'interval', {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A
            },
            set: function (e) {
              u(k), (A = e)
            }
          }))
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix
    ;(s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        'concat',
        s.event.props.concat,
        'jQuery.event.props.concat() is deprecated and removed'
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props
        if (o.length) {
          u('jQuery.event.props are deprecated and removed: ' + o.join())
          while (o.length) s.event.addProp(o.pop())
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u('jQuery.event.fixHooks are deprecated and removed: ' + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop())
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            'load' === t &&
            'complete' === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        )
      }),
      s.each(['load', 'unload', 'error'], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0)
          return 'load' === t && 'string' == typeof e[0]
            ? R.apply(this, e)
            : (u('jQuery.fn.' + t + '() is deprecated'),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this))
        }
      }),
      s.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u('jQuery.fn.' + r + '() event shorthand is deprecated'),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            )
          }
        }
      ),
      s(function () {
        s(n.document).triggerHandler('ready')
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated")
        }
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u('jQuery.fn.bind() is deprecated'), this.on(e, null, t, r)
        },
        unbind: function (e, t) {
          return u('jQuery.fn.unbind() is deprecated'), this.off(e, null, t)
        },
        delegate: function (e, t, r, n) {
          return u('jQuery.fn.delegate() is deprecated'), this.on(t, e, r, n)
        },
        undelegate: function (e, t, r) {
          return (
            u('jQuery.fn.undelegate() is deprecated'),
            1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', r)
          )
        },
        hover: function (e, t) {
          return (
            u('jQuery.fn.hover() is deprecated'), this.on('mouseenter', e).on('mouseleave', t || e)
          )
        }
      })
    function T(e) {
      var t = n.document.implementation.createHTMLDocument('')
      return (t.body.innerHTML = e), t.body && t.body.innerHTML
    }
    function P(e) {
      var t = e.replace(O, '<$1></$2>')
      t !== e && T(e) !== T(t) && u('HTML tags must be properly nested and closed: ' + e)
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter
    ;(s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, '<$1></$2>')
      }
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e)
      })
    var D,
      _ = s.fn.offset
    ;(s.fn.offset = function () {
      var e = this[0]
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u('jQuery.fn.offset() requires a valid DOM element'), arguments.length ? this : void 0)
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional
          return (
            void 0 === t &&
              r &&
              (u('jQuery.param() no longer uses jQuery.ajaxSettings.traditional'), (t = r)),
            D.call(this, e, t)
          )
        }))
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack
    return (
      (s.fn.andSelf = function () {
        return (
          u('jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()'),
          J.apply(this, arguments)
        )
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          ['resolve', 'done', s.Callbacks('once memory'), s.Callbacks('once memory'), 'resolved'],
          ['reject', 'fail', s.Callbacks('once memory'), s.Callbacks('once memory'), 'rejected'],
          ['notify', 'progress', s.Callbacks('memory'), s.Callbacks('memory')]
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise()
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments
                return (
                  u('deferred.pipe() is deprecated'),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = 'function' == typeof o[e] && o[e]
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments)
                          e && 'function' == typeof e.promise
                            ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                            : n[t[0] + 'With'](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                      }),
                        (o = null)
                    })
                    .promise()
                )
              }),
            e && e.call(i, i),
            i
          )
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    )
  })
