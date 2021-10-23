(this['webpackJsonpplanning-poker'] =
  this['webpackJsonpplanning-poker'] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, t) {},
    ,
    function (e, n, t) {},
    function (e, n, t) {},
    ,
    ,
    ,
    function (e, n, t) {},
    function (e, n, t) {},
    function (e, n, t) {},
    function (e, n, t) {},
    function (e, n, t) {},
    function (e, n, t) {},
    function (e, n, t) {
      'use strict';
      t.r(n);
      var i = t(1),
        c = t(6),
        a = t.n(c),
        r = t(4),
        o = t(27),
        s = t(2),
        l = t(3),
        d = (t(12), t(0)),
        u = [
          'size',
          'point',
          'isSelectable',
          'isSelected',
          'isClosed',
          'handleClick',
        ],
        p = function (e) {
          var n = e.size,
            t = e.point,
            i = e.isSelectable,
            c = e.isSelected,
            a = e.isClosed,
            r = e.handleClick,
            o = Object(s.a)(e, u);
          return Object(d.jsx)(
            'div',
            Object(l.a)(
              Object(l.a)(
                {
                  className: [
                    'card',
                    'card-' + n,
                    i ? 'card-selectable' : '',
                    c ? 'card-selected' : 'card-notselected',
                    a ? 'card-closed' : '',
                  ].join(' '),
                  onClick: function () {
                    return r(t);
                  },
                },
                o
              ),
              {},
              { children: a ? '' : t }
            )
          );
        };
      p.defaultProps = {
        size: 'medium',
        point: 0,
        isSelectable: !1,
        isSelected: !1,
        isClosed: !1,
        handleClick: function () {},
      };
      t(14);
      var b = ['isOpend', 'point', 'name'],
        j = function (e) {
          var n = e.isOpend,
            t = e.point,
            i = e.name;
          Object(s.a)(e, b);
          return Object(d.jsxs)('div', {
            className: 'estimate',
            children: [
              Object(d.jsx)(p, {
                isSelectable: !1,
                isClosed: !n,
                size: 'large',
                point: n ? String(t) : '',
              }),
              Object(d.jsx)('div', { className: 'estimate-name', children: i }),
            ],
          });
        };
      j.defaultProps = {};
      t(15);
      var f = function (e) {
        var n = e.isOpend,
          t = e.handleClick;
        console.log('begin render OpenButton.');
        return Object(d.jsx)('div', {
          className: 'openbutton',
          onClick: t,
          children: n ? 'return' : 'open',
        });
      };
      f.defaultProps = { isOpend: !1 };
      var O = t(7),
        m =
          (t(19),
          function (e) {
            var n = e.text;
            return (
              console.log('begin render CopyButton.'),
              Object(d.jsx)(O.CopyToClipboard, {
                text: n,
                children: Object(d.jsx)('div', {
                  className: 'copybutton',
                  children: 'Copy',
                }),
              })
            );
          });
      m.defaultProps = { text: void 0 };
      t(20);
      var v = ['isOpend', 'estimaters', 'handleOpenButtonClick'],
        h = function (e) {
          var n = e.isOpend,
            t = e.estimaters,
            i = e.handleOpenButtonClick;
          Object(s.a)(e, v);
          return (
            console.log('begin render Table.'),
            Object(d.jsxs)('div', {
              className: 'table',
              children: [
                Object(d.jsx)('div', {
                  className: 'table-estimaters',
                  children: Array.isArray(t)
                    ? t.map(function (e) {
                        return Object(d.jsx)(
                          j,
                          { name: e.name, point: e.point, isOpend: n },
                          e.name
                        );
                      })
                    : void 0,
                }),
                Object(d.jsx)(f, { isOpend: n, handleClick: i }),
                n && t && t.length > 0
                  ? Object(d.jsx)(m, { text: g(t) })
                  : null,
              ],
            })
          );
        };
      function g(e) {
        if (!e || 0 === e.length) return 'empty.';
        var n = new Date();
        return (
          '[' +
          n.toLocaleDateString() +
          ' ' +
          n.toLocaleTimeString() +
          '] ' +
          e
            .sort(function (e, n) {
              return e.name > n.name ? 1 : -1;
            })
            .reduce(function (e, n) {
              return (
                (e ? e + ' ' : '') + ''.concat(n.name, '(').concat(n.point, ')')
              );
            }, null)
        );
      }
      h.defaultProps = {};
      t(21);
      var C = ['name'],
        k = function (e) {
          var n = e.name,
            t = Object(s.a)(e, C);
          return (
            console.log('begin render User.'),
            Object(d.jsx)(
              'div',
              Object(l.a)(
                Object(l.a)({ className: 'user' }, t),
                {},
                { children: n }
              )
            )
          );
        };
      k.defaultProps = { name: '' };
      t(22);
      var x = ['selectedPoint', 'handleCardClick'],
        S = [
          '0',
          '1',
          '2',
          '3',
          '5',
          '8',
          '13',
          '21',
          '34',
          '55',
          '?',
          '\u221e',
        ],
        P = function (e) {
          var n = e.selectedPoint,
            t = e.handleCardClick;
          Object(s.a)(e, x);
          return (
            console.log('begin render CardSelection.'),
            Object(d.jsx)('div', {
              className: 'card-selection',
              children: S.map(function (e) {
                return Object(d.jsx)(
                  p,
                  {
                    isSelectable: !0,
                    isSelected: n === e,
                    point: String(e),
                    handleClick: t,
                  },
                  e
                );
              }),
            })
          );
        };
      P.defaultProps = { selectedPoint: '' };
      t(23);
      var w = [
          'userName',
          'isOpend',
          'estimaters',
          'handleOpenButtonClick',
          'handleSelectionCardClick',
        ],
        y = function (e) {
          var n = e.userName,
            t = e.isOpend,
            i = e.estimaters,
            c = e.handleOpenButtonClick,
            a = e.handleSelectionCardClick;
          Object(s.a)(e, w);
          console.log('begin render Page.');
          var r = i
            ? i.find(function (e) {
                return e.name === n;
              })
            : void 0;
          return Object(d.jsx)('div', {
            className: 'page',
            children: Object(d.jsxs)('div', {
              children: [
                Object(d.jsx)('h1', { children: 'Planning Poker' }),
                Object(d.jsx)(h, {
                  estimaters: i,
                  isOpend: t,
                  handleOpenButtonClick: c,
                }),
                Object(d.jsx)(k, { name: n }),
                Object(d.jsx)(P, {
                  selectedPoint: r ? r.point : void 0,
                  handleCardClick: a,
                }),
              ],
            }),
          });
        };
      y.defaultProps = {};
      t(24);
      var N = function (e) {
        var n = Object(i.useState)(),
          t = Object(r.a)(n, 2),
          c = t[0],
          a = t[1],
          s = Object(i.useState)([]),
          l = Object(r.a)(s, 2),
          u = l[0],
          p = l[1],
          b = Object(i.useState)(!1),
          j = Object(r.a)(b, 2),
          f = j[0],
          O = j[1],
          m = Object(i.useState)(void 0),
          v = Object(r.a)(m, 2),
          h = v[0],
          g = v[1],
          C = {
            select: function (e) {
              var n = u.slice(),
                t = n.find(function (n) {
                  return n.name === e.name;
                });
              t || ((t = { name: e.name }), (n[n.length] = t)),
                (t.point = String(e.point)),
                p(n);
            },
            unselect: function (e) {
              var n = u.filter(function (n) {
                return n.name !== e.name;
              });
              p(n);
            },
            open: function () {
              O(!0);
            },
            return: function () {
              p([]), O(!1);
            },
          };
        Object(i.useEffect)(function () {
          if ((console.log('begin init.'), !c))
            for (var e = c; !e; ) (e = window.prompt('your name')), a(e);
          var n;
          g(
            ((n = (function () {
              var e,
                n = window.location.search;
              if (n) e = n.substring(1);
              else {
                var t = Object(o.a)();
                (window.location.hash = t),
                  window.history.replaceState('', '', '?' + t),
                  (e = t);
              }
              return e;
            })()),
            window.io(
              'https://simple-websocket-server.herokuapp.com/?roomId=' + n
            ))
          );
        }, []),
          Object(i.useEffect)(
            function () {
              console.log('begin socket setup.'),
                h &&
                  h.on('do event', function (e) {
                    var n = C[e.type];
                    n && n(e);
                  });
            },
            [h]
          );
        return Object(d.jsx)(y, {
          userName: c,
          isOpend: f,
          estimaters: u,
          handleOpenButtonClick: function () {
            var e = 0 !== u.length && !f ? 'open' : 'return';
            h.emit('do event', { type: e });
          },
          handleSelectionCardClick: function (e) {
            var n = u.find(function (e) {
                return e.name === c;
              }),
              t = n && n.point === e,
              i = u.slice();
            if (t)
              i = u.filter(function (e) {
                return e.name !== c;
              });
            else {
              var a = u.find(function (e) {
                return e.name === c;
              });
              a || ((a = { name: c }), (i[i.length] = a)),
                (a.point = String(e));
            }
            var r = t ? 'unselect' : 'select';
            h.emit('do event', { type: r, name: c, point: String(e) });
          },
        });
      };
      a.a.render(Object(d.jsx)(N, {}), document.getElementById('root'));
    },
  ],
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.d3b486c1.chunk.js.map
