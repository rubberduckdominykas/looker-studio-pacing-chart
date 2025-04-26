!(function (e, R) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = R())
    : "function" == typeof define && define.amd
    ? define("dscc", [], R)
    : "object" == typeof exports
    ? (exports.dscc = R())
    : (e.dscc = R());
})(window, function () {
  return (
    (t = {}),
    (n.m = C =
      {
        "./src/index.ts":
          /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
          /*! no static exports found */ function (e, N, R) {
            "use strict";
            var i =
              (this && this.__assign) ||
              function () {
                return (i =
                  Object.assign ||
                  function (e) {
                    for (var R, C = 1, t = arguments.length; C < t; C++)
                      for (var n in (R = arguments[C]))
                        Object.prototype.hasOwnProperty.call(R, n) &&
                          (e[n] = R[n]);
                    return e;
                  }).apply(this, arguments);
              };
            Object.defineProperty(N, "__esModule", { value: !0 });
            /*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
            var _ = R(/*! ./types */ "./src/types.ts");
            !(function (e) {
              for (var R in e) N.hasOwnProperty(R) || (N[R] = e[R]);
            })(R(/*! ./types */ "./src/types.ts")),
              (N.getWidth = function () {
                return document.body.clientWidth;
              }),
              (N.getHeight = function () {
                return document.documentElement.clientHeight;
              }),
              (N.getComponentId = function () {
                var e = new URLSearchParams(window.location.search);
                if (null !== e.get("dscId")) return e.get("dscId");
                throw new Error(
                  "dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new"
                );
              });
            function E(e) {
              return (
                e.type === _.ConfigDataElementType.DIMENSION ||
                e.type === _.ConfigDataElementType.METRIC
              );
            }
            function r(e) {
              return e === _.ConfigDataElementType.DIMENSION ? -1 : 1;
            }
            function a(e) {
              var R = [];
              e.config.data.forEach(function (e) {
                e.elements.filter(E).forEach(function (e) {
                  R.push(e);
                });
              });
              var C,
                t =
                  ((C = function (e, R) {
                    return r(e.type) - r(R.type);
                  }),
                  R.map(function (e, R) {
                    return { item: e, index: R };
                  })
                    .sort(function (e, R) {
                      return C(e.item, R.item) || e.index - R.index;
                    })
                    .map(function (e) {
                      return e.item;
                    })),
                n = [];
              return (
                t.forEach(function (e) {
                  e.value.forEach(function () {
                    return n.push(e.id);
                  });
                }),
                n
              );
            }
            function o(R) {
              return function (e) {
                var C,
                  t,
                  n = {};
                return (
                  (t = R),
                  ((C = e).length < t.length
                    ? C.map(function (e, R) {
                        return [e, t[R]];
                      })
                    : t.map(function (e, R) {
                        return [C[R], e];
                      })
                  ).forEach(function (e) {
                    var R = e[0],
                      C = e[1];
                    void 0 === n[C] && (n[C] = []), n[C].push(R);
                  }, {}),
                  n
                );
              };
            }
            N.fieldsByConfigId = function (e) {
              var R = e.fields.reduce(function (e, R) {
                  return (e[R.id] = R), e;
                }, {}),
                C = {};
              return (
                e.config.data.forEach(function (e) {
                  e.elements.filter(E).forEach(function (e) {
                    C[e.id] = e.value.map(function (e) {
                      return R[e];
                    });
                  });
                }),
                C
              );
            };
            function U(e) {
              var R = {};
              return (
                (e.config.style || []).forEach(function (e) {
                  e.elements.forEach(function (e) {
                    if (void 0 !== R[e.id])
                      throw new Error(
                        "styleIds must be unique. Your styleId: '" +
                          e.id +
                          "' is used more than once."
                      );
                    R[e.id] = { value: e.value, defaultValue: e.defaultValue };
                  });
                }, {}),
                R
              );
            }
            function Y(e) {
              return e.config.themeStyle;
            }
            function n(e) {
              switch (e) {
                case _.DSInteractionType.FILTER:
                  return _.InteractionType.FILTER;
              }
            }
            function s(e) {
              var R = e.config.interactions;
              return void 0 === R
                ? {}
                : R.reduce(function (e, R) {
                    var C = R.supportedActions.map(n),
                      t = { type: n(R.value.type), data: R.value.data };
                    return (e[R.id] = { value: t, supportedActions: C }), e;
                  }, {});
            }
            (N.tableTransform = function (e) {
              return {
                tables:
                  ((R = e),
                  (t = N.fieldsByConfigId(R)),
                  (n = a(R)),
                  (E = {}),
                  (r = n.map(function (e) {
                    void 0 === E[e] ? (E[e] = 0) : E[e]++;
                    var R = E[e],
                      C = t[e][R];
                    return i(i({}, C), { configId: e });
                  })),
                  ((C = {})[_.TableType.DEFAULT] = { headers: [], rows: [] }),
                  (o = C),
                  R.dataResponse.tables.forEach(function (e) {
                    o[e.id] = { headers: r, rows: e.rows };
                  }),
                  o),
                fields: N.fieldsByConfigId(e),
                style: U(e),
                theme: Y(e),
                interactions: s(e),
              };
              var R, C, t, n, E, r, o;
            }),
              (N.objectTransform = function (e) {
                return {
                  tables:
                    ((t = a((R = e))),
                    ((C = {})[_.TableType.DEFAULT] = []),
                    (n = C),
                    R.dataResponse.tables.forEach(function (e) {
                      var R = e.rows.map(o(t));
                      e.id === _.TableType.DEFAULT
                        ? (n[e.id] = R)
                        : (void 0 === n[e.id] && (n[e.id] = []),
                          (n[e.id] = n[e.id].concat(R)));
                    }),
                    n),
                  fields: N.fieldsByConfigId(e),
                  style: U(e),
                  theme: Y(e),
                  interactions: s(e),
                };
                var R, C, t, n;
              });
            function u(e) {
              var R,
                C = !1;
              return (
                e === N.tableTransform || e === N.objectTransform
                  ? (C = !0)
                  : ((R = !1),
                    "identity" === e("identity") &&
                      ((R = !0),
                      console.warn(
                        "This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat."
                      )),
                    R && (C = !0)),
                C
              );
            }
            (N.subscribeToData = function (R, C) {
              if (u(C.transform)) {
                var e = function (e) {
                  e.data.type === _.MessageType.RENDER
                    ? R(C.transform(e.data))
                    : console.error(
                        "MessageType: " +
                          e.data.type +
                          " is not supported by this version of the library."
                      );
                };
                window.addEventListener("message", e);
                var t = {
                  componentId: N.getComponentId(),
                  type: _.ToDSMessageType.VIZ_READY,
                };
                return (
                  window.parent.postMessage(t, "*"),
                  function () {
                    return window.removeEventListener("message", e);
                  }
                );
              }
              throw new Error(
                "Only the built in transform functions are supported."
              );
            }),
              (N.sendInteraction = function (e, R, C) {
                var t = N.getComponentId(),
                  n = {
                    type: _.ToDSMessageType.INTERACTION,
                    id: e,
                    data: C,
                    componentId: t,
                  };
                window.parent.postMessage(n, "*");
              }),
              (N.clearInteraction = function (e, R) {
                N.sendInteraction(e, R, void 0);
              });
          },
        "./src/types.ts":
          /*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
          /*! no static exports found */ function (e, R, C) {
            "use strict";
            var t, n, E, r, o, N;
            Object.defineProperty(R, "__esModule", { value: !0 }),
              ((t = R.ConceptType || (R.ConceptType = {})).METRIC = "METRIC"),
              (t.DIMENSION = "DIMENSION"),
              ((R.MessageType || (R.MessageType = {})).RENDER = "RENDER"),
              ((n = R.FieldType || (R.FieldType = {})).YEAR = "YEAR"),
              (n.YEAR_QUARTER = "YEAR_QUARTER"),
              (n.YEAR_MONTH = "YEAR_MONTH"),
              (n.YEAR_WEEK = "YEAR_WEEK"),
              (n.YEAR_MONTH_DAY = "YEAR_MONTH_DAY"),
              (n.YEAR_MONTH_DAY_HOUR = "YEAR_MONTH_DAY_HOUR"),
              (n.QUARTER = "QUARTER"),
              (n.MONTH = "MONTH"),
              (n.WEEK = "WEEK"),
              (n.MONTH_DAY = "MONTH_DAY"),
              (n.DAY_OF_WEEK = "DAY_OF_WEEK"),
              (n.DAY = "DAY"),
              (n.HOUR = "HOUR"),
              (n.MINUTE = "MINUTE"),
              (n.DURATION = "DURATION"),
              (n.COUNTRY = "COUNTRY"),
              (n.COUNTRY_CODE = "COUNTRY_CODE"),
              (n.CONTINENT = "CONTINENT"),
              (n.CONTINENT_CODE = "CONTINENT_CODE"),
              (n.SUB_CONTINENT = "SUB_CONTINENT"),
              (n.SUB_CONTINENT_CODE = "SUB_CONTINENT_CODE"),
              (n.REGION = "REGION"),
              (n.REGION_CODE = "REGION_CODE"),
              (n.CITY = "CITY"),
              (n.CITY_CODE = "CITY_CODE"),
              (n.METRO_CODE = "METRO_CODE"),
              (n.LATITUDE_LONGITUDE = "LATITUDE_LONGITUDE"),
              (n.NUMBER = "NUMBER"),
              (n.PERCENT = "PERCENT"),
              (n.TEXT = "TEXT"),
              (n.BOOLEAN = "BOOLEAN"),
              (n.URL = "URL"),
              (n.IMAGE = "IMAGE"),
              (n.CURRENCY_AED = "CURRENCY_AED"),
              (n.CURRENCY_ALL = "CURRENCY_ALL"),
              (n.CURRENCY_ARS = "CURRENCY_ARS"),
              (n.CURRENCY_AUD = "CURRENCY_AUD"),
              (n.CURRENCY_BDT = "CURRENCY_BDT"),
              (n.CURRENCY_BGN = "CURRENCY_BGN"),
              (n.CURRENCY_BOB = "CURRENCY_BOB"),
              (n.CURRENCY_BRL = "CURRENCY_BRL"),
              (n.CURRENCY_CAD = "CURRENCY_CAD"),
              (n.CURRENCY_CDF = "CURRENCY_CDF"),
              (n.CURRENCY_CHF = "CURRENCY_CHF"),
              (n.CURRENCY_CLP = "CURRENCY_CLP"),
              (n.CURRENCY_CNY = "CURRENCY_CNY"),
              (n.CURRENCY_COP = "CURRENCY_COP"),
              (n.CURRENCY_CRC = "CURRENCY_CRC"),
              (n.CURRENCY_CZK = "CURRENCY_CZK"),
              (n.CURRENCY_DKK = "CURRENCY_DKK"),
              (n.CURRENCY_DOP = "CURRENCY_DOP"),
              (n.CURRENCY_EGP = "CURRENCY_EGP"),
              (n.CURRENCY_ETB = "CURRENCY_ETB"),
              (n.CURRENCY_EUR = "CURRENCY_EUR"),
              (n.CURRENCY_GBP = "CURRENCY_GBP"),
              (n.CURRENCY_HKD = "CURRENCY_HKD"),
              (n.CURRENCY_HRK = "CURRENCY_HRK"),
              (n.CURRENCY_HUF = "CURRENCY_HUF"),
              (n.CURRENCY_IDR = "CURRENCY_IDR"),
              (n.CURRENCY_ILS = "CURRENCY_ILS"),
              (n.CURRENCY_INR = "CURRENCY_INR"),
              (n.CURRENCY_IRR = "CURRENCY_IRR"),
              (n.CURRENCY_ISK = "CURRENCY_ISK"),
              (n.CURRENCY_JMD = "CURRENCY_JMD"),
              (n.CURRENCY_JPY = "CURRENCY_JPY"),
              (n.CURRENCY_KRW = "CURRENCY_KRW"),
              (n.CURRENCY_LKR = "CURRENCY_LKR"),
              (n.CURRENCY_LTL = "CURRENCY_LTL"),
              (n.CURRENCY_MNT = "CURRENCY_MNT"),
              (n.CURRENCY_MVR = "CURRENCY_MVR"),
              (n.CURRENCY_MXN = "CURRENCY_MXN"),
              (n.CURRENCY_MYR = "CURRENCY_MYR"),
              (n.CURRENCY_NOK = "CURRENCY_NOK"),
              (n.CURRENCY_NZD = "CURRENCY_NZD"),
              (n.CURRENCY_PAB = "CURRENCY_PAB"),
              (n.CURRENCY_PEN = "CURRENCY_PEN"),
              (n.CURRENCY_PHP = "CURRENCY_PHP"),
              (n.CURRENCY_PKR = "CURRENCY_PKR"),
              (n.CURRENCY_PLN = "CURRENCY_PLN"),
              (n.CURRENCY_RON = "CURRENCY_RON"),
              (n.CURRENCY_RSD = "CURRENCY_RSD"),
              (n.CURRENCY_RUB = "CURRENCY_RUB"),
              (n.CURRENCY_SAR = "CURRENCY_SAR"),
              (n.CURRENCY_SEK = "CURRENCY_SEK"),
              (n.CURRENCY_SGD = "CURRENCY_SGD"),
              (n.CURRENCY_THB = "CURRENCY_THB"),
              (n.CURRENCY_TRY = "CURRENCY_TRY"),
              (n.CURRENCY_TWD = "CURRENCY_TWD"),
              (n.CURRENCY_TZS = "CURRENCY_TZS"),
              (n.CURRENCY_UAH = "CURRENCY_UAH"),
              (n.CURRENCY_USD = "CURRENCY_USD"),
              (n.CURRENCY_UYU = "CURRENCY_UYU"),
              (n.CURRENCY_VEF = "CURRENCY_VEF"),
              (n.CURRENCY_VND = "CURRENCY_VND"),
              (n.CURRENCY_YER = "CURRENCY_YER"),
              (n.CURRENCY_ZAR = "CURRENCY_ZAR"),
              ((E = R.TableType || (R.TableType = {})).DEFAULT = "DEFAULT"),
              (E.COMPARISON = "COMPARISON"),
              (E.SUMMARY = "SUMMARY"),
              ((r =
                R.ConfigDataElementType ||
                (R.ConfigDataElementType = {})).METRIC = "METRIC"),
              (r.DIMENSION = "DIMENSION"),
              (r.MAX_RESULTS = "MAX_RESULTS"),
              ((o =
                R.ConfigStyleElementType ||
                (R.ConfigStyleElementType = {})).TEXTINPUT = "TEXTINPUT"),
              (o.SELECT_SINGLE = "SELECT_SINGLE"),
              (o.CHECKBOX = "CHECKBOX"),
              (o.FONT_COLOR = "FONT_COLOR"),
              (o.FONT_SIZE = "FONT_SIZE"),
              (o.FONT_FAMILY = "FONT_FAMILY"),
              (o.FILL_COLOR = "FILL_COLOR"),
              (o.BORDER_COLOR = "BORDER_COLOR"),
              (o.AXIS_COLOR = "AXIS_COLOR"),
              (o.GRID_COLOR = "GRID_COLOR"),
              (o.OPACITY = "OPACITY"),
              (o.LINE_WEIGHT = "LINE_WEIGHT"),
              (o.LINE_STYLE = "LINE_STYLE"),
              (o.BORDER_RADIUS = "BORDER_RADIUS"),
              (o.INTERVAL = "INTERVAL"),
              (o.SELECT_RADIO = "SELECT_RADIO"),
              ((R.DSInteractionType || (R.DSInteractionType = {})).FILTER =
                "FILTER"),
              ((N = R.ToDSMessageType || (R.ToDSMessageType = {})).VIZ_READY =
                "vizReady"),
              (N.INTERACTION = "vizAction"),
              ((R.InteractionType || (R.InteractionType = {})).FILTER =
                "FILTER");
          },
      }),
    (n.c = t),
    (n.d = function (e, R, C) {
      n.o(e, R) || Object.defineProperty(e, R, { enumerable: !0, get: C });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (R, e) {
      if ((1 & e && (R = n(R)), 8 & e)) return R;
      if (4 & e && "object" == typeof R && R && R.__esModule) return R;
      var C = Object.create(null);
      if (
        (n.r(C),
        Object.defineProperty(C, "default", { enumerable: !0, value: R }),
        2 & e && "string" != typeof R)
      )
        for (var t in R)
          n.d(
            C,
            t,
            function (e) {
              return R[e];
            }.bind(null, t)
          );
      return C;
    }),
    (n.n = function (e) {
      var R =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(R, "a", R), R;
    }),
    (n.o = function (e, R) {
      return Object.prototype.hasOwnProperty.call(e, R);
    }),
    (n.p = ""),
    n((n.s = "./src/index.ts"))
  );
  function n(e) {
    if (t[e]) return t[e].exports;
    var R = (t[e] = { i: e, l: !1, exports: {} });
    return C[e].call(R.exports, R, R.exports, n), (R.l = !0), R.exports;
  }
  var C, t;
});

function drawViz(data) {
  // Container setup.
  let container = document.getElementById("svgContainer");
  if (container) {
    container.textContent = "";
    container.setAttribute("height", dscc.getHeight());
    container.setAttribute("width", dscc.getWidth());
  } else {
    container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    container.id = "svgContainer";
    container.setAttribute("height", dscc.getHeight());
    container.setAttribute("width", dscc.getWidth());
    document.body.appendChild(container);
  }

  let info_container = document.getElementById("info");
  if (!info_container) {
    info_container = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    info_container.id = "info";
    info_container.setAttributeNS(null, "pointer-events", "none");
    info_container.setAttributeNS(null, "visibility", "hidden");
    info_container.style = "overflow:visible";

    const rect_shadow0 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rect_shadow0.id = "rect_shadow0";
    rect_shadow0.setAttributeNS(null, "x", 0);
    rect_shadow0.setAttributeNS(null, "y", 0);
    rect_shadow0.setAttributeNS(null, "width", 126);
    rect_shadow0.setAttributeNS(null, "height", 56);
    rect_shadow0.setAttributeNS(null, "opacity", 0);
    rect_shadow0.setAttributeNS(null, "rx", 2);
    rect_shadow0.setAttributeNS(null, "ry", 2);

    const rect_shadow = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rect_shadow.id = "rect_shadow";
    rect_shadow.setAttributeNS(null, "x", 4);
    rect_shadow.setAttributeNS(null, "y", 4);
    rect_shadow.setAttributeNS(null, "width", 120);
    rect_shadow.setAttributeNS(null, "height", 50);
    rect_shadow.setAttributeNS(null, "fill", "black");
    rect_shadow.setAttributeNS(null, "opacity", 0.4);
    rect_shadow.setAttributeNS(null, "rx", 2);
    rect_shadow.setAttributeNS(null, "ry", 2);

    const rect_background = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rect_background.id = "rect_background";
    rect_background.setAttributeNS(null, "x", 2);
    rect_background.setAttributeNS(null, "y", 2);
    rect_background.setAttributeNS(null, "width", 120);
    rect_background.setAttributeNS(null, "height", 50);
    rect_background.setAttributeNS(null, "fill", "white");
    rect_background.setAttributeNS(null, "rx", 2);
    rect_background.setAttributeNS(null, "ry", 2);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.id = "text";
    text.setAttributeNS(null, "x", 25);
    text.setAttributeNS(null, "y", 17);
    text.setAttributeNS(null, "font-family", "Tahoma");
    text.setAttributeNS(null, "font-size", "0.75em");

    const markActual = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    markActual.setAttributeNS(null, "x", 10);
    markActual.setAttributeNS(null, "y", 25);
    markActual.setAttributeNS(null, "width", 10);
    markActual.setAttributeNS(null, "height", 10);
    markActual.setAttributeNS(
      null,
      "fill",
      data.style.actualColour.value.color
    );

    const markActualText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    markActualText.id = "markActualText";
    markActualText.setAttributeNS(null, "x", 25);
    markActualText.setAttributeNS(null, "y", 33);
    markActualText.setAttributeNS(null, "font-family", "Tahoma");
    markActualText.setAttributeNS(null, "font-size", "0.65em");

    const markTarget = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    markTarget.setAttributeNS(null, "x", 10);
    markTarget.setAttributeNS(null, "y", 40);
    markTarget.setAttributeNS(null, "width", 10);
    markTarget.setAttributeNS(null, "height", 5);
    markTarget.setAttributeNS(
      null,
      "fill",
      data.style.targetColour.value.color
    );

    const markTargetText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    markTargetText.id = "markTargetText";
    markTargetText.setAttributeNS(null, "x", 25);
    markTargetText.setAttributeNS(null, "y", 46);
    markTargetText.setAttributeNS(null, "font-family", "Tahoma");
    markTargetText.setAttributeNS(null, "font-size", "0.65em");

    info_container.appendChild(rect_shadow0);
    info_container.appendChild(rect_shadow);
    info_container.appendChild(rect_background);
    info_container.appendChild(markActual);
    info_container.appendChild(markTarget);

    info_container.appendChild(text);
    info_container.appendChild(markActualText);
    info_container.appendChild(markTargetText);
  }

  const actualColour = data.style.actualColour.value.color;
  const actualOpacity = data.style.actualOpacity.value;

  const goalColourOk = data.style.goalColourOk.value.color;
  //const goalOpacityOk = data.style.goalOpacityOk.value;
  const goalColourNok = data.style.goalColourNok.value.color;
  //const goalOpacityNok = data.style.goalOpacityNok.value;

  const targetColour = data.style.targetColour.value.color;
  const targetOpacity = data.style.targetOpacity.value;

  const goalOverSensitivity = data.style.goalOverSensitivity.value;
  const goalUnderSensitivity = data.style.goalUnderSensitivity.value;

  let containerHeight = dscc.getHeight();
  let containerWidth = dscc.getWidth();

  let max = 0;
  let maxActual = 0;
  let itemCount = data.tables.DEFAULT.length;

  data.tables.DEFAULT.forEach((row) => {
    let item = Math.max(row.actual[0], row.goal[0]);
    max = item > max ? item : max;
    maxActual = row.actual[0] > maxActual ? row.actual[0] : maxActual;
  });

  //Width of an individual column
  let width_of_col = containerWidth / itemCount;
  let spacing = 0;

  if (width_of_col < 120) {
    spacing = 0.13 * width_of_col;
  } else {
    spacing = 16;
  }

  spacing_goal = 0.4 * width_of_col;
  width_goal = 0.06 * ((containerHeight - 20) / max) * maxActual;

  width_of_col =
    Math.round(width_of_col - spacing) === 0 ? 1 : width_of_col - spacing;

  function executeDraw() {
    container.textContent = "";

    data.tables.DEFAULT.forEach((row, i) => {
      //Goal rect
      let colorGoal =
        row.goal - row.actual >= 0
          ? Math.abs(row.actual / row.goal - 1) < goalOverSensitivity / 100
            ? goalColourOk
            : goalColourNok
          : Math.abs(row.actual / row.goal - 1) < goalUnderSensitivity / 100
          ? goalColourOk
          : goalColourNok;

      /* let opacityGoal =
        Math.abs(row.actual / row.goal - 1) < 0.15
          ? goalOpacityOk
          : goalOpacityNok;
 */
      createRect(
        i * (width_of_col + spacing), //- spacing / 2,
        0,
        width_of_col + spacing + 1,
        containerHeight,
        colorGoal,
        1,
        row.dimension,
        row.actual,
        row.goal,
        i + "_background"
      );

      //Actual rect
      createRect(
        i == 0 ? spacing / 2 : i * (width_of_col + spacing) + spacing / 2,
        containerHeight - ((containerHeight - 20) / max) * row.actual,
        width_of_col,
        (containerHeight / max) * row.actual,
        actualColour,
        actualOpacity,
        row.dimension,
        row.actual,
        row.goal,
        i + "_actual"
      );

      //Target rect
      createRect(
        i == 0
          ? (spacing + spacing_goal) / 2
          : i * (width_of_col + spacing) + (spacing + spacing_goal) / 2,
        containerHeight -
          ((containerHeight - 20) / max) * row.goal -
          width_goal / 2,
        width_of_col - spacing_goal,
        width_goal,
        targetColour,
        targetOpacity,
        row.dimension,
        row.actual,
        row.goal,
        i + "_target"
      );
    });

    container.appendChild(info_container);
  }

  executeDraw();

  function createRect(
    x,
    y,
    width,
    height,
    color,
    opacity,
    date,
    actual,
    goal,
    row_no
  ) {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", color);
    rect.setAttribute("fill-opacity", opacity);
    rect.setAttribute("data-col", row_no);

    rect.onmousemove = (evt) => {
      let text_or_date = new Date(
        date[0].slice(0, 4) + "-" + date[0].slice(4, 6) + "-" + date[0].slice(6)
      ).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      text_or_date = text_or_date == "Invalid Date" ? date[0] : text_or_date;
      text.textContent = text_or_date;

      actual[0] =
        actual[0] === null
          ? "No Data"
          : actual[0].toLocaleString(undefined, { maximumFractionDigits: 2 });

      goal[0] =
        goal[0] === null
          ? "No Data"
          : goal[0].toLocaleString(undefined, { maximumFractionDigits: 2 });

      markActualText.textContent =
        data.fields.actual[0].name + ": " + actual[0];
      markTargetText.textContent = data.fields.goal[0].name + ": " + goal[0];

      let maxWidthText = Math.max(
        text.getBBox().width,
        markActualText.getBBox().width,
        markTargetText.getBBox().width
      );

      rect_shadow0.setAttributeNS(null, "width", maxWidthText + 25);
      rect_shadow.setAttributeNS(null, "width", maxWidthText + 25);
      rect_background.setAttributeNS(null, "width", maxWidthText + 25);

      let maxWidth = info_container.getBBox().width;

      let mouse = getMousePosition(evt, maxWidth + 35, 60);

      if (mouse.x < 0 && mouse.y < 0) {
        mouse = getMousePosition(evt, -(maxWidth + 35) * 0.15, -30);
      } else if (mouse.y < 0) {
        mouse = getMousePosition(evt, maxWidth + 35, -30);
      } else if (mouse.x < 0) {
        mouse = getMousePosition(evt, -(maxWidth + 35) * 0.15, 60);
      }

      if (maxWidth + x + width > containerWidth) {
        mouse.x = x + width / 2 - maxWidth;
      } else {
        mouse.x = x + width / 2;
      }

      info_container.setAttributeNS(null, "visibility", "visible");
      info_container.setAttributeNS(
        null,
        "transform",
        "translate(" + mouse.x + ", " + mouse.y + ")"
      );
    };

    rect.onmouseenter = () => {
      //highlight
      const data_col_no = row_no.slice(0, row_no.indexOf("_"));
      const data_col_actual = data_col_no + "_actual";
      const data_col_target = data_col_no + "_target";
      const rect_actual = document.querySelector(
        `rect[data-col='${data_col_actual}']`
      );
      const rect_target = document.querySelector(
        `rect[data-col='${data_col_target}']`
      );
      rect_actual.classList.add("highlight");
      rect_target.classList.add("highlight");
    };

    rect.onmouseleave = () => {
      //no highlight
      const data_col_no = row_no.slice(0, row_no.indexOf("_"));
      const data_col_actual = data_col_no + "_actual";
      const data_col_target = data_col_no + "_target";
      const rect_actual = document.querySelector(
        `rect[data-col='${data_col_actual}']`
      );
      const rect_target = document.querySelector(
        `rect[data-col='${data_col_target}']`
      );
      rect_actual.classList.remove("highlight");
      rect_target.classList.remove("highlight");
    };

    container.onmouseleave = () => {
      info_container.setAttributeNS(null, "visibility", "hidden");
    };

    container.appendChild(rect);
  }

  function getMousePosition(evt, xOffset, yOffset) {
    var CTM = container.getScreenCTM();
    return {
      x: (evt.clientX - CTM.e - xOffset) / CTM.a,
      y: (evt.clientY - CTM.f - yOffset) / CTM.d,
    };
  }
  //console.log(data);
}

// Subscribe to data and style changes. Use the table format for data.
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
