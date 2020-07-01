'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = require('react')
var React__default = _interopDefault(React)
var PropTypes = _interopDefault(require('prop-types'))
var styled = require('styled-components')
var styled__default = _interopDefault(styled)

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }

  return obj
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }

  return _setPrototypeOf(o, p)
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === 'function') return true

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}))
    return true
  } catch (e) {
    return false
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }

  return self
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call
  }

  return _assertThisInitialized(self)
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct()

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor

      result = Reflect.construct(Super, arguments, NewTarget)
    } else {
      result = Super.apply(this, arguments)
    }

    return _possibleConstructorReturn(this, result)
  }
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }

  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw),
      },
    })
  )
}

var commonjsGlobal =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : typeof self !== 'undefined'
    ? self
    : {}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports
}

var fuse = createCommonjsModule(function(module, exports) {
  /*!
   * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
   *
   * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
   * All Rights Reserved. Apache Software License 2.0
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   */
  !(function(e, t) {
    module.exports = t()
  })(commonjsGlobal, function() {
    return (function(e) {
      var t = {}
      function r(n) {
        if (t[n]) return t[n].exports
        var o = (t[n] = { i: n, l: !1, exports: {} })
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function(e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
        }),
        (r.r = function(e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (r.t = function(e, t) {
          if ((1 & t && (e = r(e)), 8 & t)) return e
          if (4 & t && 'object' == typeof e && e && e.__esModule) return e
          var n = Object.create(null)
          if (
            (r.r(n),
            Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
            2 & t && 'string' != typeof e)
          )
            for (var o in e)
              r.d(
                n,
                o,
                function(t) {
                  return e[t]
                }.bind(null, o)
              )
          return n
        }),
        (r.n = function(e) {
          var t =
            e && e.__esModule
              ? function() {
                  return e.default
                }
              : function() {
                  return e
                }
          return r.d(t, 'a', t), t
        }),
        (r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (r.p = ''),
        r((r.s = 0))
      )
    })([
      function(e, t, r) {
        function n(e) {
          return (n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                })(e)
        }
        function o(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        var i = r(1),
          a = r(7),
          s = a.get,
          c = (a.deepValue, a.isArray),
          h = (function() {
            function e(t, r) {
              var n = r.location,
                o = void 0 === n ? 0 : n,
                i = r.distance,
                a = void 0 === i ? 100 : i,
                c = r.threshold,
                h = void 0 === c ? 0.6 : c,
                l = r.maxPatternLength,
                u = void 0 === l ? 32 : l,
                f = r.caseSensitive,
                v = void 0 !== f && f,
                p = r.tokenSeparator,
                d = void 0 === p ? / +/g : p,
                g = r.findAllMatches,
                y = void 0 !== g && g,
                m = r.minMatchCharLength,
                k = void 0 === m ? 1 : m,
                b = r.id,
                S = void 0 === b ? null : b,
                x = r.keys,
                M = void 0 === x ? [] : x,
                _ = r.shouldSort,
                w = void 0 === _ || _,
                L = r.getFn,
                A = void 0 === L ? s : L,
                O = r.sortFn,
                C =
                  void 0 === O
                    ? function(e, t) {
                        return e.score - t.score
                      }
                    : O,
                j = r.tokenize,
                P = void 0 !== j && j,
                I = r.matchAllTokens,
                F = void 0 !== I && I,
                T = r.includeMatches,
                N = void 0 !== T && T,
                z = r.includeScore,
                E = void 0 !== z && z,
                W = r.verbose,
                K = void 0 !== W && W
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, e),
                (this.options = {
                  location: o,
                  distance: a,
                  threshold: h,
                  maxPatternLength: u,
                  isCaseSensitive: v,
                  tokenSeparator: d,
                  findAllMatches: y,
                  minMatchCharLength: k,
                  id: S,
                  keys: M,
                  includeMatches: N,
                  includeScore: E,
                  shouldSort: w,
                  getFn: A,
                  sortFn: C,
                  verbose: K,
                  tokenize: P,
                  matchAllTokens: F,
                }),
                this.setCollection(t),
                this._processKeys(M)
            }
            var t, r
            return (
              (t = e),
              (r = [
                {
                  key: 'setCollection',
                  value: function(e) {
                    return (this.list = e), e
                  },
                },
                {
                  key: '_processKeys',
                  value: function(e) {
                    if (
                      ((this._keyWeights = {}),
                      (this._keyNames = []),
                      e.length && 'string' == typeof e[0])
                    )
                      for (var t = 0, r = e.length; t < r; t += 1) {
                        var n = e[t]
                        ;(this._keyWeights[n] = 1), this._keyNames.push(n)
                      }
                    else {
                      for (var a = 0, s = 0, c = e.length; s < c; s += 1) {
                        var h = e[s]
                        if (!h.hasOwnProperty('name'))
                          throw new Error(
                            'Missing "name" property in key object'
                          )
                        var l = h.name
                        if (
                          (this._keyNames.push(l), !h.hasOwnProperty('weight'))
                        )
                          throw new Error(
                            'Missing "weight" property in key object'
                          )
                        var u = h.weight
                        if (u < 0 || u > 1)
                          throw new Error(
                            '"weight" property in key must bein the range of [0, 1)'
                          )
                        ;(this._keyWeights[l] = u), (a += u)
                      }
                      if (a > 1)
                        throw new Error('Total of weights cannot exceed 1')
                    }
                  },
                },
                {
                  key: 'search',
                  value: function(e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { limit: !1 }
                    this._log('---------\nSearch pattern: "'.concat(e, '"'))
                    var r = this._prepareSearchers(e),
                      n = r.tokenSearchers,
                      o = r.fullSearcher,
                      i = this._search(n, o)
                    return (
                      this._computeScore(i),
                      this.options.shouldSort && this._sort(i),
                      t.limit &&
                        'number' == typeof t.limit &&
                        (i = i.slice(0, t.limit)),
                      this._format(i)
                    )
                  },
                },
                {
                  key: '_prepareSearchers',
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : '',
                      t = []
                    if (this.options.tokenize)
                      for (
                        var r = e.split(this.options.tokenSeparator),
                          n = 0,
                          o = r.length;
                        n < o;
                        n += 1
                      )
                        t.push(new i(r[n], this.options))
                    return {
                      tokenSearchers: t,
                      fullSearcher: new i(e, this.options),
                    }
                  },
                },
                {
                  key: '_search',
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      t = arguments.length > 1 ? arguments[1] : void 0,
                      r = this.list,
                      n = {},
                      o = []
                    if ('string' == typeof r[0]) {
                      for (var i = 0, a = r.length; i < a; i += 1)
                        this._analyze(
                          { key: '', value: r[i], record: i, index: i },
                          {
                            resultMap: n,
                            results: o,
                            tokenSearchers: e,
                            fullSearcher: t,
                          }
                        )
                      return o
                    }
                    for (var s = 0, c = r.length; s < c; s += 1)
                      for (
                        var h = r[s], l = 0, u = this._keyNames.length;
                        l < u;
                        l += 1
                      ) {
                        var f = this._keyNames[l]
                        this._analyze(
                          {
                            key: f,
                            value: this.options.getFn(h, f),
                            record: h,
                            index: s,
                          },
                          {
                            resultMap: n,
                            results: o,
                            tokenSearchers: e,
                            fullSearcher: t,
                          }
                        )
                      }
                    return o
                  },
                },
                {
                  key: '_analyze',
                  value: function(e, t) {
                    var r = this,
                      n = e.key,
                      o = e.arrayIndex,
                      i = void 0 === o ? -1 : o,
                      a = e.value,
                      s = e.record,
                      h = e.index,
                      l = t.tokenSearchers,
                      u = void 0 === l ? [] : l,
                      f = t.fullSearcher,
                      v = t.resultMap,
                      p = void 0 === v ? {} : v,
                      d = t.results,
                      g = void 0 === d ? [] : d
                    !(function e(t, o, i, a) {
                      if (null != o)
                        if ('string' == typeof o) {
                          var s = !1,
                            h = -1,
                            l = 0
                          r._log('\nKey: '.concat('' === n ? '--' : n))
                          var v = f.search(o)
                          if (
                            (r._log(
                              'Full text: "'
                                .concat(o, '", score: ')
                                .concat(v.score)
                            ),
                            r.options.tokenize)
                          ) {
                            for (
                              var d = o.split(r.options.tokenSeparator),
                                y = d.length,
                                m = [],
                                k = 0,
                                b = u.length;
                              k < b;
                              k += 1
                            ) {
                              var S = u[k]
                              r._log('\nPattern: "'.concat(S.pattern, '"'))
                              for (var x = !1, M = 0; M < y; M += 1) {
                                var _ = d[M],
                                  w = S.search(_),
                                  L = {}
                                w.isMatch
                                  ? ((L[_] = w.score),
                                    (s = !0),
                                    (x = !0),
                                    m.push(w.score))
                                  : ((L[_] = 1),
                                    r.options.matchAllTokens || m.push(1)),
                                  r._log(
                                    'Token: "'
                                      .concat(_, '", score: ')
                                      .concat(L[_])
                                  )
                              }
                              x && (l += 1)
                            }
                            h = m[0]
                            for (var A = m.length, O = 1; O < A; O += 1)
                              h += m[O]
                            ;(h /= A), r._log('Token score average:', h)
                          }
                          var C = v.score
                          h > -1 && (C = (C + h) / 2),
                            r._log('Score average:', C)
                          var j =
                            !r.options.tokenize ||
                            !r.options.matchAllTokens ||
                            l >= u.length
                          if (
                            (r._log('\nCheck Matches: '.concat(j)),
                            (s || v.isMatch) && j)
                          ) {
                            var P = {
                              key: n,
                              arrayIndex: t,
                              value: o,
                              score: C,
                            }
                            r.options.includeMatches &&
                              (P.matchedIndices = v.matchedIndices)
                            var I = p[a]
                            I
                              ? I.output.push(P)
                              : ((p[a] = { item: i, output: [P] }),
                                g.push(p[a]))
                          }
                        } else if (c(o))
                          for (var F = 0, T = o.length; F < T; F += 1)
                            e(F, o[F], i, a)
                    })(i, a, s, h)
                  },
                },
                {
                  key: '_computeScore',
                  value: function(e) {
                    this._log('\n\nComputing score:\n')
                    for (
                      var t = this._keyWeights,
                        r = !!Object.keys(t).length,
                        n = 0,
                        o = e.length;
                      n < o;
                      n += 1
                    ) {
                      for (
                        var i = e[n], a = i.output, s = a.length, c = 1, h = 0;
                        h < s;
                        h += 1
                      ) {
                        var l = a[h],
                          u = l.key,
                          f = r ? t[u] : 1,
                          v =
                            0 === l.score && t && t[u] > 0
                              ? Number.EPSILON
                              : l.score
                        c *= Math.pow(v, f)
                      }
                      ;(i.score = c), this._log(i)
                    }
                  },
                },
                {
                  key: '_sort',
                  value: function(e) {
                    this._log('\n\nSorting....'), e.sort(this.options.sortFn)
                  },
                },
                {
                  key: '_format',
                  value: function(e) {
                    var t = []
                    if (this.options.verbose) {
                      var r = []
                      this._log(
                        '\n\nOutput:\n\n',
                        JSON.stringify(
                          e,
                          function(e, t) {
                            if ('object' === n(t) && null !== t) {
                              if (-1 !== r.indexOf(t)) return
                              r.push(t)
                            }
                            return t
                          },
                          2
                        )
                      ),
                        (r = null)
                    }
                    var o = []
                    this.options.includeMatches &&
                      o.push(function(e, t) {
                        var r = e.output
                        t.matches = []
                        for (var n = 0, o = r.length; n < o; n += 1) {
                          var i = r[n]
                          if (0 !== i.matchedIndices.length) {
                            var a = {
                              indices: i.matchedIndices,
                              value: i.value,
                            }
                            i.key && (a.key = i.key),
                              i.hasOwnProperty('arrayIndex') &&
                                i.arrayIndex > -1 &&
                                (a.arrayIndex = i.arrayIndex),
                              t.matches.push(a)
                          }
                        }
                      }),
                      this.options.includeScore &&
                        o.push(function(e, t) {
                          t.score = e.score
                        })
                    for (var i = 0, a = e.length; i < a; i += 1) {
                      var s = e[i]
                      if (
                        (this.options.id &&
                          (s.item = this.options.getFn(
                            s.item,
                            this.options.id
                          )[0]),
                        o.length)
                      ) {
                        for (
                          var c = { item: s.item }, h = 0, l = o.length;
                          h < l;
                          h += 1
                        )
                          o[h](s, c)
                        t.push(c)
                      } else t.push(s.item)
                    }
                    return t
                  },
                },
                {
                  key: '_log',
                  value: function() {
                    var e
                    this.options.verbose &&
                      (e = console).log.apply(e, arguments)
                  },
                },
              ]) && o(t.prototype, r),
              e
            )
          })()
        e.exports = h
      },
      function(e, t, r) {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        var o = r(2),
          i = r(3),
          a = r(6),
          s = (function() {
            function e(t, r) {
              var n = r.location,
                o = void 0 === n ? 0 : n,
                i = r.distance,
                s = void 0 === i ? 100 : i,
                c = r.threshold,
                h = void 0 === c ? 0.6 : c,
                l = r.maxPatternLength,
                u = void 0 === l ? 32 : l,
                f = r.isCaseSensitive,
                v = void 0 !== f && f,
                p = r.tokenSeparator,
                d = void 0 === p ? / +/g : p,
                g = r.findAllMatches,
                y = void 0 !== g && g,
                m = r.minMatchCharLength,
                k = void 0 === m ? 1 : m,
                b = r.includeMatches,
                S = void 0 !== b && b
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, e),
                (this.options = {
                  location: o,
                  distance: s,
                  threshold: h,
                  maxPatternLength: u,
                  isCaseSensitive: v,
                  tokenSeparator: d,
                  findAllMatches: y,
                  includeMatches: S,
                  minMatchCharLength: k,
                }),
                (this.pattern = v ? t : t.toLowerCase()),
                this.pattern.length <= u &&
                  (this.patternAlphabet = a(this.pattern))
            }
            var t, r
            return (
              (t = e),
              (r = [
                {
                  key: 'search',
                  value: function(e) {
                    var t = this.options,
                      r = t.isCaseSensitive,
                      n = t.includeMatches
                    if ((r || (e = e.toLowerCase()), this.pattern === e)) {
                      var a = { isMatch: !0, score: 0 }
                      return n && (a.matchedIndices = [[0, e.length - 1]]), a
                    }
                    var s = this.options,
                      c = s.maxPatternLength,
                      h = s.tokenSeparator
                    if (this.pattern.length > c) return o(e, this.pattern, h)
                    var l = this.options,
                      u = l.location,
                      f = l.distance,
                      v = l.threshold,
                      p = l.findAllMatches,
                      d = l.minMatchCharLength
                    return i(e, this.pattern, this.patternAlphabet, {
                      location: u,
                      distance: f,
                      threshold: v,
                      findAllMatches: p,
                      minMatchCharLength: d,
                      includeMatches: n,
                    })
                  },
                },
              ]) && n(t.prototype, r),
              e
            )
          })()
        e.exports = s
      },
      function(e, t) {
        var r = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
        e.exports = function(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : / +/g,
            o = new RegExp(t.replace(r, '\\$&').replace(n, '|')),
            i = e.match(o),
            a = !!i,
            s = []
          if (a)
            for (var c = 0, h = i.length; c < h; c += 1) {
              var l = i[c]
              s.push([e.indexOf(l), l.length - 1])
            }
          return { score: a ? 0.5 : 1, isMatch: a, matchedIndices: s }
        }
      },
      function(e, t, r) {
        var n = r(4),
          o = r(5)
        e.exports = function(e, t, r, i) {
          for (
            var a = i.location,
              s = void 0 === a ? 0 : a,
              c = i.distance,
              h = void 0 === c ? 100 : c,
              l = i.threshold,
              u = void 0 === l ? 0.6 : l,
              f = i.findAllMatches,
              v = void 0 !== f && f,
              p = i.minMatchCharLength,
              d = void 0 === p ? 1 : p,
              g = i.includeMatches,
              y = void 0 !== g && g,
              m = s,
              k = e.length,
              b = u,
              S = e.indexOf(t, m),
              x = t.length,
              M = [],
              _ = 0;
            _ < k;
            _ += 1
          )
            M[_] = 0
          if (-1 !== S) {
            var w = n(t, {
              errors: 0,
              currentLocation: S,
              expectedLocation: m,
              distance: h,
            })
            if (((b = Math.min(w, b)), -1 !== (S = e.lastIndexOf(t, m + x)))) {
              var L = n(t, {
                errors: 0,
                currentLocation: S,
                expectedLocation: m,
                distance: h,
              })
              b = Math.min(L, b)
            }
          }
          S = -1
          for (
            var A = [],
              O = 1,
              C = x + k,
              j = 1 << (x <= 31 ? x - 1 : 30),
              P = 0;
            P < x;
            P += 1
          ) {
            for (var I = 0, F = C; I < F; ) {
              n(t, {
                errors: P,
                currentLocation: m + F,
                expectedLocation: m,
                distance: h,
              }) <= b
                ? (I = F)
                : (C = F),
                (F = Math.floor((C - I) / 2 + I))
            }
            C = F
            var T = Math.max(1, m - F + 1),
              N = v ? k : Math.min(m + F, k) + x,
              z = Array(N + 2)
            z[N + 1] = (1 << P) - 1
            for (var E = N; E >= T; E -= 1) {
              var W = E - 1,
                K = r[e.charAt(W)]
              if (
                (K && (M[W] = 1),
                (z[E] = ((z[E + 1] << 1) | 1) & K),
                0 !== P && (z[E] |= ((A[E + 1] | A[E]) << 1) | 1 | A[E + 1]),
                z[E] & j &&
                  (O = n(t, {
                    errors: P,
                    currentLocation: W,
                    expectedLocation: m,
                    distance: h,
                  })) <= b)
              ) {
                if (((b = O), (S = W) <= m)) break
                T = Math.max(1, 2 * m - S)
              }
            }
            if (
              n(t, {
                errors: P + 1,
                currentLocation: m,
                expectedLocation: m,
                distance: h,
              }) > b
            )
              break
            A = z
          }
          var $ = { isMatch: S >= 0, score: 0 === O ? 0.001 : O }
          return y && ($.matchedIndices = o(M, d)), $
        }
      },
      function(e, t) {
        e.exports = function(e, t) {
          var r = t.errors,
            n = void 0 === r ? 0 : r,
            o = t.currentLocation,
            i = void 0 === o ? 0 : o,
            a = t.expectedLocation,
            s = void 0 === a ? 0 : a,
            c = t.distance,
            h = void 0 === c ? 100 : c,
            l = n / e.length,
            u = Math.abs(s - i)
          return h ? l + u / h : u ? 1 : l
        }
      },
      function(e, t) {
        e.exports = function() {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              r = [],
              n = -1,
              o = -1,
              i = 0,
              a = e.length;
            i < a;
            i += 1
          ) {
            var s = e[i]
            s && -1 === n
              ? (n = i)
              : s ||
                -1 === n ||
                ((o = i - 1) - n + 1 >= t && r.push([n, o]), (n = -1))
          }
          return e[i - 1] && i - n >= t && r.push([n, i - 1]), r
        }
      },
      function(e, t) {
        e.exports = function(e) {
          for (var t = {}, r = e.length, n = 0; n < r; n += 1)
            t[e.charAt(n)] = 0
          for (var o = 0; o < r; o += 1) t[e.charAt(o)] |= 1 << (r - o - 1)
          return t
        }
      },
      function(e, t) {
        var r = function(e) {
            return Array.isArray
              ? Array.isArray(e)
              : '[object Array]' === Object.prototype.toString.call(e)
          },
          n = function(e) {
            return null == e
              ? ''
              : (function(e) {
                  if ('string' == typeof e) return e
                  var t = e + ''
                  return '0' == t && 1 / e == -1 / 0 ? '-0' : t
                })(e)
          },
          o = function(e) {
            return 'string' == typeof e
          },
          i = function(e) {
            return 'number' == typeof e
          }
        e.exports = {
          get: function(e, t) {
            var a = []
            return (
              (function e(t, s) {
                if (s) {
                  var c = s.indexOf('.'),
                    h = s,
                    l = null
                  ;-1 !== c && ((h = s.slice(0, c)), (l = s.slice(c + 1)))
                  var u = t[h]
                  if (null != u)
                    if (l || (!o(u) && !i(u)))
                      if (r(u))
                        for (var f = 0, v = u.length; f < v; f += 1) e(u[f], l)
                      else l && e(u, l)
                    else a.push(n(u))
                } else a.push(t)
              })(e, t),
              a
            )
          },
          isArray: r,
          isString: o,
          isNum: i,
          toString: n,
        }
      },
    ])
  })
})

var Fuse = unwrapExports(fuse)
var fuse_1 = fuse.Fuse

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-size: ',
    ';\n  padding: 10px 20px;\n  height: ',
    ';\n  border: 1px solid ',
    ';\n  border-radius: 5px;\n  color: ',
    ';\n\n  &:focus {\n    outline: none;\n  }\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}
var StyledInput = styled__default.input(
  _templateObject(),
  function(props) {
    return props.inputBoxFontSize
  },
  function(props) {
    return props.inputBoxHeight
  },
  function(props) {
    return props.inputBoxBorderColor
  },
  function(props) {
    return props.inputBoxFontColor
  }
)

var InputBox = /*#__PURE__*/ (function(_Component) {
  _inherits(InputBox, _Component)

  var _super = _createSuper(InputBox)

  function InputBox() {
    _classCallCheck(this, InputBox)

    return _super.apply(this, arguments)
  }

  _createClass(InputBox, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var autoFocus = this.props.autoFocus
        /**
         * Focusses on the input box if the autoFocus prop is true.
         */

        !!autoFocus && this.input.focus()
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this = this

        var _this$props = this.props,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          inputBoxFontColor = _this$props.inputBoxFontColor,
          inputBoxBorderColor = _this$props.inputBoxBorderColor,
          inputBoxFontSize = _this$props.inputBoxFontSize,
          inputBoxHeight = _this$props.inputBoxHeight
        return /*#__PURE__*/ React__default.createElement(StyledInput, {
          type: 'text',
          placeholder: placeholder,
          value: value,
          onChange: onChange,
          onFocus: onFocus,
          ref: function ref(input) {
            _this.input = input
          },
          inputBoxFontColor: inputBoxFontColor,
          inputBoxBorderColor: inputBoxBorderColor,
          inputBoxFontSize: inputBoxFontSize,
          inputBoxHeight: inputBoxHeight,
        })
      },
    },
  ])

  return InputBox
})(React.Component)

_defineProperty(InputBox, 'propTypes', {
  /**
   * placeholder: The placeholder text for the input box.
   * value: The value of the input box.
   * onChange: A function which acts as a callback when the input value is changed.
   * onFocus: A function which acts as a callback when the input is focussed.
   * inputBoxFontColor: Color of the text in the input box.
   * inputBoxBorderColor: Color of the border of the input box.
   * inputBoxFontSize: Size of the font of the input box.
   * inputBoxHeight: Height of the input box.
   */
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  inputBoxFontColor: PropTypes.string,
  inputBoxBorderColor: PropTypes.string,
  inputBoxFontSize: PropTypes.string,
  inputBoxHeight: PropTypes.string,
})

function _templateObject$1() {
  var data = _taggedTemplateLiteral([
    '\n  margin: 10px 0 0;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 0, rgba(0, 0, 0, 0.1) 0px 4px 11px;\n  border-radius: 5px;\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n\n    > li {\n      padding: 10px 20px;\n      background-color: #fff;\n      border: 1px solid ',
    ';\n      height: 40px;\n      display: flex;\n      align-items: center;\n\n      &:hover {\n        background-color: ',
    ';\n        cursor: pointer;\n      }\n\n      &:first-child {\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n      }\n\n      &:last-child {\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n      }\n\n      &:not(:first-child) {\n        border-top: 0;\n      }\n    }\n  }\n',
  ])

  _templateObject$1 = function _templateObject() {
    return data
  }

  return data
}
var StyledDropdown = styled__default.div(
  _templateObject$1(),
  function(props) {
    return props.dropDownBorderColor
  },
  function(props) {
    return props.dropDownHoverColor
  }
)

var DropDown = /*#__PURE__*/ (function(_Component) {
  _inherits(DropDown, _Component)

  var _super = _createSuper(DropDown)

  function DropDown() {
    _classCallCheck(this, DropDown)

    return _super.apply(this, arguments)
  }

  _createClass(DropDown, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          matchedRecords = _this$props.matchedRecords,
          _onClick = _this$props.onClick,
          dropDownHoverColor = _this$props.dropDownHoverColor,
          dropDownBorderColor = _this$props.dropDownBorderColor
        return /*#__PURE__*/ React__default.createElement(
          StyledDropdown,
          {
            className: 'react-search-box-dropdown',
            dropDownHoverColor: dropDownHoverColor,
            dropDownBorderColor: dropDownBorderColor,
          },
          /*#__PURE__*/ React__default.createElement(
            'ul',
            {
              id: 'search-ul',
            },
            matchedRecords.map(function(record) {
              return /*#__PURE__*/ React__default.createElement(
                'li',
                {
                  key: record.key,
                  className: 'react-search-box-dropdown-list-item',
                  onClick: function onClick() {
                    return _onClick(record)
                  },
                },
                record.value
              )
            })
          )
        )
      },
    },
  ])

  return DropDown
})(React.Component)

_defineProperty(DropDown, 'propTypes', {
  /**
   * onClick: A function which acts as a callback when any record is selected. It
   * is triggered once a dropdown item is clicked.
   * matchedRecords: An array of matched records.
   * dropDownHoverColor: Background color on hover of the dropdown list items.
   * dropDownBorderColor: Border color of the dropdown.
   */
  onClick: PropTypes.func,
  matchedRecords: PropTypes.array,
  dropDownHoverColor: PropTypes.string,
  dropDownBorderColor: PropTypes.string,
})

_defineProperty(DropDown, 'defaultProps', {
  /**
   * Set matchedRecords prop as an empty array in case it's not passed.
   */
  matchedRecords: [],
})

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: column;\n\n  .searchIndex {\n    background-color:#ccc !important;\n  }\n',
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral([
    '\n  * {\n    box-sizing: border-box;\n  }\n',
  ])

  _templateObject$2 = function _templateObject() {
    return data
  }

  return data
}
var GlobalStyle = styled.createGlobalStyle(_templateObject$2())
var StyledContainer = styled__default.div(_templateObject2())

var ReactSearchBox = /*#__PURE__*/ (function(_Component) {
  _inherits(ReactSearchBox, _Component)

  var _super = _createSuper(ReactSearchBox)

  function ReactSearchBox(props) {
    var _this

    _classCallCheck(this, ReactSearchBox)

    _this = _super.call(this, props)

    _defineProperty(_assertThisInitialized(_this), 'state', {
      /**
       * 'matchedRecords' stores the items when the input box's value
       * matches with any item from the 'data' prop.
       */
      value: _this.props.value ? _this.props.value : '',
      matchedRecords: [],
      searchIndex: -1,
    })

    _defineProperty(
      _assertThisInitialized(_this),
      'handleInputChange',
      function(e) {
        var onChange = _this.props.onChange
        /**
         * This function is responsible for checking if any items from the input
         * box's value matches with any item form the 'data' prop. If any item matches,
         * then that matched object is pushed into the 'matchedRecords' state. That
         * state is responsible for populating the dropdown.
         */

        var value = e.target.value
        /**
         * Check all the values from 'data' array whose 'value' matches with
         * 'value' using Fuse plugin.
         */

        var matchedRecords = _this.fuse.search(value)

        var index = _this.state.searchIndex
        var ul = document.getElementById('search-ul')

        if (ul) {
          if (
            ul.childNodes[index] &&
            ul.childNodes[index].hasAttribute('class')
          ) {
            ul.childNodes[index].removeAttribute('class')
          }
        }
        /**
         * Update 'value' state with the value from the input box.
         * Update 'matchedRecords' state with the matched records from the data array.
         */

        _this.setState({
          value: value,
          matchedRecords: matchedRecords,

          /**
           * Show the dropdown onChange of the input.
           */
          showDropdown: true,
          searchIndex: -1,
        })
        /**
         * Trigger the 'onChange' prop once the input's value changes.
         */

        !!onChange && onChange(value)
      }
    )

    _defineProperty(_assertThisInitialized(_this), 'inputNode', function() {
      /**
       * This function is responsible for rendering the input box.
       * The input box acts as a source of entry for the data from the user.
       * Once the user enters the value, it's checked if that value matches
       * with any value which is present in the 'data' prop. If any value
       * matches with the input, then that matched item appears in the dropdown.
       */
      var _this$props = _this.props,
        placeholder = _this$props.placeholder,
        onFocus = _this$props.onFocus,
        autoFocus = _this$props.autoFocus,
        inputBoxFontColor = _this$props.inputBoxFontColor,
        inputBoxBorderColor = _this$props.inputBoxBorderColor,
        inputBoxFontSize = _this$props.inputBoxFontSize,
        inputBoxHeight = _this$props.inputBoxHeight
      var value = _this.state.value
      return /*#__PURE__*/ React__default.createElement(InputBox, {
        type: 'text',
        placeholder: placeholder,
        value: value,
        onChange: _this.handleInputChange,
        autoFocus: autoFocus ? autoFocus : undefined,
        onFocus: onFocus ? onFocus : undefined,
        inputBoxFontColor: inputBoxFontColor,
        inputBoxBorderColor: inputBoxBorderColor,
        inputBoxFontSize: inputBoxFontSize,
        inputBoxHeight: inputBoxHeight,
      })
    })

    _defineProperty(
      _assertThisInitialized(_this),
      'handleDropdownItemClick',
      function(record) {
        /**
         * This function is responsible for updating the value inside the
         * input box when any dropdown item is clicked.
         *
         * The 'value' state is updated with the clicked record's value.
         */
        var value = record.value
        var _this$props2 = _this.props,
          onSelect = _this$props2.onSelect,
          onChange = _this$props2.onChange

        _this.setState({
          value: value,

          /**
           * Hide the dropdown once any dropdown item is clicked.
           */
          showDropdown: false,
          searchIndex: -1,
        })
        /**
         * Trigger the 'onSelect' prop once everything is done if it's passed.
         */

        !!onSelect && onSelect(record)
        /**
         * Trigger the 'onChange' prop since the value of the input box also changes.
         */

        !!onChange && onChange(value)
      }
    )

    _defineProperty(_assertThisInitialized(_this), 'dropdownNode', function() {
      /**
       * This function is responsible for rendering the dropdown.
       * When any value from the input box matches with any value from the
       * 'data' prop, that matched object from the 'data' array shows up
       * in the dropdown's li. The matched values are stored in the
       * 'matchedRecords' state.
       */
      var _this$state = _this.state,
        matchedRecords = _this$state.matchedRecords,
        showDropdown = _this$state.showDropdown
      var _this$props3 = _this.props,
        dropDownHoverColor = _this$props3.dropDownHoverColor,
        dropDownBorderColor = _this$props3.dropDownBorderColor
      /**
       * If there is no value present in the input box, then the dropdown
       * shouldn't appear.
       */

      if (!showDropdown) {
        return false
      }

      return /*#__PURE__*/ React__default.createElement(DropDown, {
        matchedRecords: matchedRecords.slice(0, 7),
        onClick: _this.handleDropdownItemClick,
        dropDownHoverColor: dropDownHoverColor,
        dropDownBorderColor: dropDownBorderColor,
      })
    })

    var data = props.data,
      fuseConfigs = props.fuseConfigs
    /**
     * These configs are from Fuse plugin. Check out http://fusejs.io/
     * for more details.
     */

    _this.defaultFuseConfigs = {
      /**
       * At what point does the match algorithm give up. A threshold of 0.0
       * requires a perfect match (of both letters and location), a threshold
       * of 1.0 would match anything.
       */
      threshold: 0.05,

      /**
       * Determines approximately where in the text is the pattern expected to be found.
       */
      location: 0,

      /**
       * Determines how close the match must be to the fuzzy location
       * (specified by location). An exact letter match which is distance
       * characters away from the fuzzy location would score as a complete
       * mismatch. A distance of 0 requires the match be at the exact
       * location specified, a distance of 1000 would require a perfect
       * match to be within 800 characters of the location to be found
       * using a threshold of 0.8.
       */
      distance: 100,

      /**
       * When set to include matches, only the matches whose length exceeds this
       * value will be returned. (For instance, if you want to ignore single
       * character index returns, set to 2).
       */
      minMatchCharLength: 1,

      /**
       * List of properties that will be searched. This supports nested properties,
       * weighted search, searching in arrays of strings and objects.
       */
      keys: ['value'],
    }
    /**
     this.Override defaultFuseConfigs with fuseConfigs prop
     */

    var configs = Object.assign({}, _this.defaultFuseConfigs, fuseConfigs)
    _this.fuse = new Fuse(data, configs)
    return _this
  }

  _createClass(ReactSearchBox, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var self = this
        document
          .getElementById('search-box')
          .addEventListener('keydown', function(e) {
            var ul = document.getElementById('search-ul')

            if (ul) {
              // arrow-down
              if (e.keyCode == 40) {
                var index = self.state.searchIndex + 1
                e.preventDefault()

                if (index < ul.childNodes.length) {
                  self.setState({
                    searchIndex: index,
                  })
                }

                if (ul.childNodes[index]) {
                  var att = document.createAttribute('class')
                  att.value = 'searchIndex'
                  ul.childNodes[index].setAttributeNode(att)

                  if (ul.childNodes[index].previousSibling) {
                    ul.childNodes[index].previousSibling.removeAttribute(
                      'class'
                    )
                  }
                }
              } // arrow-up

              if (e.keyCode == 38) {
                var _index = self.state.searchIndex - 1

                e.preventDefault()

                if (_index > -1) {
                  self.setState({
                    searchIndex: _index,
                  })
                }

                if (ul.childNodes[_index]) {
                  var _att = document.createAttribute('class')

                  _att.value = 'searchIndex'

                  ul.childNodes[_index].setAttributeNode(_att)

                  if (ul.childNodes[_index].nextSibling) {
                    ul.childNodes[_index].nextSibling.removeAttribute('class')
                  }
                }
              } // enter

              if (e.keyCode == 13) {
                e.preventDefault()
                var _index2 = self.state.searchIndex

                if (ul.childNodes[_index2]) {
                  self.setState({
                    value: ul.childNodes[_index2].innerHTML,
                    showDropdown: false,
                    searchIndex: -1,
                  })
                  !!self.props.onSelect &&
                    self.props.onSelect({
                      key: self.state.matchedRecords[_index2].key,
                      value: ul.childNodes[_index2].innerHTML,
                    })
                }
              } // escape

              if (e.keyCode == 27) {
                e.preventDefault()
                self.setState({
                  showDropdown: false,
                  searchIndex: -1,
                })
              }
            }
          })
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this$props4 = this.props,
          data = _this$props4.data,
          fuseConfigs = _this$props4.fuseConfigs

        if (prevProps.data !== data) {
          /**
           * Override defaultFuseConfigs with fuseConfigs prop
           */
          var configs = Object.assign({}, this.defaultFuseConfigs, fuseConfigs)
          this.fuse = new Fuse(data, configs)
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        return /*#__PURE__*/ React__default.createElement(
          StyledContainer,
          {
            id: 'search-box',
          },
          /*#__PURE__*/ React__default.createElement(GlobalStyle, null),
          this.inputNode(),
          this.dropdownNode()
        )
      },
    },
  ])

  return ReactSearchBox
})(React.Component)

_defineProperty(ReactSearchBox, 'propTypes', {
  /**
   * placeholder: The placeholder text for the input box.
   * data: An array of objects which acts as teh source of data for the dropdown.
   * fuseConfigs: Configs to override default Fuse configs.
   * onSelect: A function which acts as a callback when any record is selected. It
   * is triggered once a dropdown item is clicked.
   * autoFocus: Focus on the input box once the component is mounted.
   * onFocus: A function which acts as a callback when the input is focussed.
   * onChange: A function which acts as a callback when the input value is changed.
   * inputBoxFontColor: Color of the text in the input box.
   * inputBoxBorderColor: Color of the border of the input box.
   * inputBoxFontSize: Size of the font of the input box.
   * inputBoxHeight: Height of the input box.
   * dropDownHoverColor: Background color on hover of the dropdown list items.
   * dropDownBorderColor: Border color of the dropdown.
   */
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  fuseConfigs: PropTypes.object,
  autoFocus: PropTypes.bool,
  onSelect: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  inputBoxFontColor: PropTypes.string,
  inputBoxBorderColor: PropTypes.string,
  inputBoxFontSize: PropTypes.string,
  inputBoxHeight: PropTypes.string,
  dropDownHoverColor: PropTypes.string,
  dropDownBorderColor: PropTypes.string,
})

_defineProperty(ReactSearchBox, 'defaultProps', {
  /**
   * Set data prop as an empty array in case it's not passed.
   */
  data: [],

  /**
   * Don't focus on the input box when the component is mounted by default
   */
  autoFocus: false,

  /**
   * Set the placeholder as empty text by default
   */
  placeholder: '',
  inputBoxFontColor: '#000',
  inputBoxBorderColor: '#cacaca96',
  inputBoxFontSize: '14px',
  inputBoxHeight: '40px',
  dropDownHoverColor: '#ccc',
  dropDownBorderColor: '#cacaca96',
})

module.exports = ReactSearchBox
//# sourceMappingURL=index.js.map
