/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #22303c;
    color: white;
    font-size: 2.5rem;
    padding: 15px 20px;
    border-bottom: 3px solid green;
}

.menu {
    cursor: pointer;
}

.icon {
    width: 2rem;
}

.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
    min-height: 85vh;
    min-width: 100vw;
}


.content .left {
    background-color: #15202b;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    color: white
}

.home {
    padding: 30px 20px 0px 20px;
}

.home h2 {
    border-bottom: 3px solid white;
}

.home .line {
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    margin: 20px 0;
    gap: 10px;
}

.home .line:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
}

.home .line.active{
    background-color: rgba(31, 141, 77, 0.5);
    border-left: 3px solid green;
}

.home .line .icon {
    width: 2rem;
}

.body {
    padding: 60px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    color: black;
}

.wrapper {
    background: #22303c;
}

.wrapper header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 25px;
    background: rgba(31, 141, 77, 0.75);
    color: white;
}

header p {
    font-size: 1.25rem;
    font-weight: bold;
}

header .icons span {
    height: 38px;
    width: 38px;
    margin: 0 1px;
    text-align: center;
    cursor: pointer;
    line-height: 38px;
    border-radius: 50%;
    color: white;
    font-size: 1.3rem;
}

header .icons span:hover{
    background: #f2f2f2;
}

header .icons span:last-child{
    margin-right: -10px;
}

.calender {
    padding-top: 5px;
    text-align: center;
    color: white;
}

.calender ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
}

.calender .days {
    margin-bottom: 20px;
}

.calender .weeks li{
    font-weight: 550;
}

.calender .days li{
    cursor: pointer;
    margin-top: 20px;
    border-radius: 10px;
}

.calender ul li{
    position: relative;
    width: calc(100%/7);
}

.days li.inactive{
    color: #aaa;
}

.days li.active{
    background: rgba(31, 141, 77, 1);
    color: white
}


.hidden {
    display: none;
}

.content .right {
    background: #192734;
    grid-column: 2 / 6;
    grid-row: 1 / 2;
    flex-grow: 1;
    color: white;
}

.right h2 {
    margin: 2rem 3rem;
    padding: 25px;
    font-size: 2rem;
    background-color: rgba(31, 141, 77, 1);
    border-radius: 0.5rem;
}

.right #panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
    height: 80vh;
}

.right #panel #left-panel {
    border-right: 3px solid white;
}

.right #panel form {
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #15202b;
    gap: 5px;
    font-size: 1rem;
}

.right #panel form.hidden {
    display: none;
}

.right #panel form #button {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.right #panel form #button input[type=submit]{
    padding: 5px 20px;
    background:rgba(31, 141, 77, 1);
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}

.right #panel form #button input[type=button]{
    padding: 5px 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}

.right .add button {
    background-color: #192734;
    color: white;
    border: none;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    margin: 2rem 3rem;
    padding: 5px;
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 33vw;
}

.right .add button:hover {
    background-color: #15202b ; 
}

.right .add button img {
    width: 33px;
}

.right #listTask {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.right .item {
    display: flex;
    align-items: center;
    margin: 0 3rem;
    gap: 10px;
    padding: 5px;
    border: 1px solid white;
    background-color: #15202b;
}

.right .item input[type="checkbox"] {
    width: 20rem;
    height: 1.5rem;
}

.right .item #text {
    margin: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    width: 1000%;
}

.right .star {
    display: flex;
    position: relative;
    text-align: center;
    align-items: center;
}

.right .star label{
    color: white;
    width: 30px;
    height: 48px;
}

.right .star input {
    display: none;
}

.right .star label:before {
    content: "\\2605";
    font-size: 35px;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
}

.right .star label:after {
    content: "\\2605";
    font-size: 35px;
    color: yellow;
    display: inline-block;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
}

.right .star input:checked ~ label:after {
    opacity: 1;
}

#vert {
    font-size: 35px;
    cursor: pointer;
}

.item #combo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
}

.item .listOption {
    display: none;
}

.item .listOption button {
    color: white;
    border: 1px solid white;
    background:#192734;
    font-size: 1rem;
    padding: 5px;
}

.item .listOption.active {
    display: flex;
    flex-direction: column;
    right: 0;
}

.footer {
    background: #22303c;
    padding: 0.95rem;
    bottom: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.footer img {
    width: 30px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #22303c;\n    color: white;\n    font-size: 2.5rem;\n    padding: 15px 20px;\n    border-bottom: 3px solid green;\n}\n\n.menu {\n    cursor: pointer;\n}\n\n.icon {\n    width: 2rem;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));\n    min-height: 85vh;\n    min-width: 100vw;\n}\n\n\n.content .left {\n    background-color: #15202b;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: white\n}\n\n.home {\n    padding: 30px 20px 0px 20px;\n}\n\n.home h2 {\n    border-bottom: 3px solid white;\n}\n\n.home .line {\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    padding: 10px 30px;\n    margin: 20px 0;\n    gap: 10px;\n}\n\n.home .line:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.home .line.active{\n    background-color: rgba(31, 141, 77, 0.5);\n    border-left: 3px solid green;\n}\n\n.home .line .icon {\n    width: 2rem;\n}\n\n.body {\n    padding: 60px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px solid white;\n    color: black;\n}\n\n.wrapper {\n    background: #22303c;\n}\n\n.wrapper header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 15px 15px 25px;\n    background: rgba(31, 141, 77, 0.75);\n    color: white;\n}\n\nheader p {\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\nheader .icons span {\n    height: 38px;\n    width: 38px;\n    margin: 0 1px;\n    text-align: center;\n    cursor: pointer;\n    line-height: 38px;\n    border-radius: 50%;\n    color: white;\n    font-size: 1.3rem;\n}\n\nheader .icons span:hover{\n    background: #f2f2f2;\n}\n\nheader .icons span:last-child{\n    margin-right: -10px;\n}\n\n.calender {\n    padding-top: 5px;\n    text-align: center;\n    color: white;\n}\n\n.calender ul {\n    display: flex;\n    list-style: none;\n    flex-wrap: wrap;\n}\n\n.calender .days {\n    margin-bottom: 20px;\n}\n\n.calender .weeks li{\n    font-weight: 550;\n}\n\n.calender .days li{\n    cursor: pointer;\n    margin-top: 20px;\n    border-radius: 10px;\n}\n\n.calender ul li{\n    position: relative;\n    width: calc(100%/7);\n}\n\n.days li.inactive{\n    color: #aaa;\n}\n\n.days li.active{\n    background: rgba(31, 141, 77, 1);\n    color: white\n}\n\n\n.hidden {\n    display: none;\n}\n\n.content .right {\n    background: #192734;\n    grid-column: 2 / 6;\n    grid-row: 1 / 2;\n    flex-grow: 1;\n    color: white;\n}\n\n.right h2 {\n    margin: 2rem 3rem;\n    padding: 25px;\n    font-size: 2rem;\n    background-color: rgba(31, 141, 77, 1);\n    border-radius: 0.5rem;\n}\n\n.right #panel {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));\n    height: 80vh;\n}\n\n.right #panel #left-panel {\n    border-right: 3px solid white;\n}\n\n.right #panel form {\n    margin: 0 3rem;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    background: #15202b;\n    gap: 5px;\n    font-size: 1rem;\n}\n\n.right #panel form.hidden {\n    display: none;\n}\n\n.right #panel form #button {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 10px;\n}\n\n.right #panel form #button input[type=submit]{\n    padding: 5px 20px;\n    background:rgba(31, 141, 77, 1);\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n.right #panel form #button input[type=button]{\n    padding: 5px 20px;\n    background-color: red;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n.right .add button {\n    background-color: #192734;\n    color: white;\n    border: none;\n    display: flex;\n    justify-content: flex-start;\n    text-align: center;\n    margin: 2rem 3rem;\n    padding: 5px;\n    gap: 1rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n    width: 33vw;\n}\n\n.right .add button:hover {\n    background-color: #15202b ; \n}\n\n.right .add button img {\n    width: 33px;\n}\n\n.right #listTask {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.right .item {\n    display: flex;\n    align-items: center;\n    margin: 0 3rem;\n    gap: 10px;\n    padding: 5px;\n    border: 1px solid white;\n    background-color: #15202b;\n}\n\n.right .item input[type=\"checkbox\"] {\n    width: 20rem;\n    height: 1.5rem;\n}\n\n.right .item #text {\n    margin: 0 0 0 10px;\n    display: flex;\n    flex-direction: column;\n    width: 1000%;\n}\n\n.right .star {\n    display: flex;\n    position: relative;\n    text-align: center;\n    align-items: center;\n}\n\n.right .star label{\n    color: white;\n    width: 30px;\n    height: 48px;\n}\n\n.right .star input {\n    display: none;\n}\n\n.right .star label:before {\n    content: \"\\2605\";\n    font-size: 35px;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.right .star label:after {\n    content: \"\\2605\";\n    font-size: 35px;\n    color: yellow;\n    display: inline-block;\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n}\n\n.right .star input:checked ~ label:after {\n    opacity: 1;\n}\n\n#vert {\n    font-size: 35px;\n    cursor: pointer;\n}\n\n.item #combo {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    width: 50%;\n}\n\n.item .listOption {\n    display: none;\n}\n\n.item .listOption button {\n    color: white;\n    border: 1px solid white;\n    background:#192734;\n    font-size: 1rem;\n    padding: 5px;\n}\n\n.item .listOption.active {\n    display: flex;\n    flex-direction: column;\n    right: 0;\n}\n\n.footer {\n    background: #22303c;\n    padding: 0.95rem;\n    bottom: 0;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.footer img {\n    width: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Idea: () => (/* binding */ Idea),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_alltask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/alltask */ "./src/page/alltask.js");
/* harmony import */ var _page_allIdea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/allIdea */ "./src/page/allIdea.js");
/* harmony import */ var _page_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/important */ "./src/page/important.js");
/* harmony import */ var _page_today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/today */ "./src/page/today.js");
/* harmony import */ var _page_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/date */ "./src/page/date.js");







// make the left panel disappear and appear
const leftPanel = document.querySelector('.left');
const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    if (leftPanel.classList == "left") {
        leftPanel.classList.add('hidden')
    } else {
        leftPanel.classList.remove('hidden')
    }
})
// make the calender in the bottom of left panel
const currentDate = document.querySelector('.current-date');
const dateTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.icons span')

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

let now = new Date().toLocaleDateString('en-GB')

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December']
 
const renderCalendar = () => {
    let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(); // get first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getinng last date of previous month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofLastMonth).getDay(); //getting last day of month
    let liTag = "";

    for ( let i = firstDateofMonth; i > 0 ; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for ( let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                            && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class ="${isToday}">${i}</li>`
    }

    for ( let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li id="last" class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerHTML = `${month[currMonth]} ${currYear}`
    dateTag.innerHTML = liTag
    //--------------------------------
    const wholeMonth = document.querySelector('.days').children
    let everyDay = []
    for (let i = 0 ; i < wholeMonth.length ; i++) {
        everyDay.push(wholeMonth[i])
    }
    
    everyDay.forEach((date) => {
        date.addEventListener('click', () => {
            let timing
            if(date.classList == 'inactive' && date.id == 'last') {
                timing = `${date.innerHTML}/${currMonth + 2}/${currYear}`
            } else if (date.classList == 'inactive' && !date.id) {
                timing = `${date.innerHTML}/${currMonth}/${currYear}`
            } else {
                timing = `${date.innerHTML}/${currMonth + 1}/${currYear}`
            }
            //------------
            
            if(timing == now) {
                rightBody.innerHTML = ''

                const todayTitle = document.createElement('h2')
                todayTitle.id = 'title'
                todayTitle.innerHTML = 'Today'

                rightBody.appendChild(todayTitle)

                rightBody.appendChild((0,_page_today__WEBPACK_IMPORTED_MODULE_4__.addToday)())

                today.classList.add("active")
                allTask.classList.remove("active")
                allIdea.classList.remove("active")
                important.classList.remove("active")
            } else {
                rightBody.innerHTML = ''

                const todayTitle = document.createElement('h2')
                todayTitle.id = 'title'
                todayTitle.innerHTML = timing

                rightBody.appendChild(todayTitle)

                rightBody.appendChild((0,_page_date__WEBPACK_IMPORTED_MODULE_5__.showDate)(timing))

                today.classList.remove("active")
                allTask.classList.remove("active")
                allIdea.classList.remove("active")
                important.classList.remove("active")
            }

        })
        
    })

}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar()
    })
})

class Task {
    constructor (title, describtion, done, important, date) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
        this.date = date == null ? now : date
    }

    beDone() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.done = !this.done
                myTask[i].done = !myTask[i].done
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    beImportant() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.important = !this.important
                myTask[i].important = !myTask[i].important
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    reName(newName) {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.title = newName
                myTask[i].title = newName
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    reDes(newDes) {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.describtion = newDes
                myTask[i].describtion = newDes
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    addToLocalStorage() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        myTask.push(task)
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    deleteFromLocalStorage() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                myTask.splice(i, 1)
            }
        }
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }
}

class Idea {
    constructor (title, describtion, done, important, date) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
        this.date = date == null ? now : date
    }

    beDone() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date }
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.done = !this.done
                myIdea[i].done = !myIdea[i].done
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    beImportant() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date }
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.important = !this.important
                myIdea[i].important = !myIdea[i].important
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    reName(newName) {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.title = newName
                myIdea[i].title = newName
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    reDes(newDes) {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.describtion = newDes
                myIdea[i].describtion = newDes
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    addToLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        myIdea.push(idea)
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    deleteFromLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                myIdea.splice(i, 1)
            }
        }
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }
}
//select right area
const rightBody = document.querySelector('.right')

const today = document.getElementById('Today');
today.classList.add("active")

const todayTitle = document.createElement('h2')
todayTitle.id = 'title'
todayTitle.innerHTML = 'Today'

rightBody.appendChild(todayTitle)
rightBody.appendChild((0,_page_today__WEBPACK_IMPORTED_MODULE_4__.addToday)())

today.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'Today'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_today__WEBPACK_IMPORTED_MODULE_4__.addToday)())

    today.classList.add("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
})

// add eventlistener to create new right panel
const allTask = document.getElementById('Task');
allTask.addEventListener('click',  () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'All Task'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_alltask__WEBPACK_IMPORTED_MODULE_1__.showAllTask)())

    today.classList.remove("active")
    allTask.classList.add("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
});

const allIdea = document.getElementById('Idea');
allIdea.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'All Idea'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_allIdea__WEBPACK_IMPORTED_MODULE_2__.showAllIdea)())
    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.add("active")
    important.classList.remove("active")
});

const important = document.getElementById('Important');
important.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'Important'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_important__WEBPACK_IMPORTED_MODULE_3__.showImportant)())

    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.add("active")
});



/***/ }),

/***/ "./src/page/allIdea.js":
/*!*****************************!*\
  !*** ./src/page/allIdea.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAllIdea: () => (/* binding */ showAllIdea)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function undoneTask(list) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)
            if (idea.done === false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, idea)
            }
        }
    }
}

function showAllIdea() {
    const content = document.createElement('div')
    content.id = 'panel'

    const listItem = document.createElement('div')
    listItem.id = 'listIdea'

    undoneTask(listItem)
    content.appendChild(listItem)

    return content
}

/***/ }),

/***/ "./src/page/alltask.js":
/*!*****************************!*\
  !*** ./src/page/alltask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAllTask: () => (/* binding */ showAllTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function undoneTask(list) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)
            if (task.done === false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, task)
            }
        }
    }
}

function showAllTask() {
    const content = document.createElement('div')
    content.id = 'panel'

    const listItem = document.createElement('div')
    listItem.id = 'listTask'

    undoneTask(listItem)
    content.appendChild(listItem)

    return content
}

/***/ }),

/***/ "./src/page/date.js":
/*!**************************!*\
  !*** ./src/page/date.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDate: () => (/* binding */ showDate)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function createLeftPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    oldTask(listTask, timing)
    content.appendChild(listTask)

    return content
}

function createRightPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    oldIdea(listTask, timing)
    content.appendChild(listTask)
    
    return content
}

function oldTask(list, timing) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if (task.date == timing && task.done == false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, task)
            } 
            
        }
    }
}

function oldIdea(list, timing) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)  
            if (idea.date == timing && idea.done == false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, idea)
            } 
            console.log(idea.date)
            console.log(timing)
        }
    }
}

function showDate(timing) {
    const content = document.createElement('div')
    content.id = 'panel'

    const leftPanel = createLeftPanel(timing)
    content.appendChild(leftPanel)

    const rightPanel = createRightPanel(timing)
    content.appendChild(rightPanel)

    return content
}

/***/ }),

/***/ "./src/page/important.js":
/*!*******************************!*\
  !*** ./src/page/important.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showImportant: () => (/* binding */ showImportant)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function createLeftPanel() {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    importantTask(listTask)
    content.appendChild(listTask)

    return content
}

function createRightPanel() {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    importantIdea(listTask)
    content.appendChild(listTask)
    
    return content
}

function importantTask(list) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if (task.done === false && task.important === true) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, task)
            } 
            
        }
    }
}

function importantIdea(list) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)  
            if (idea.done === false && idea.important === true) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, idea)
            } 
            
        }
    }
}



function showImportant() {
    const content = document.createElement('div')
    content.id = 'panel'

    const leftPanel = createLeftPanel()
    content.appendChild(leftPanel)

    const rightPanel = createRightPanel()
    content.appendChild(rightPanel)

    return content
}

/***/ }),

/***/ "./src/page/today.js":
/*!***************************!*\
  !*** ./src/page/today.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToday: () => (/* binding */ addToday),
/* harmony export */   createItem: () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");

//Create Form
function createForm(type) {
    const content = document.createElement('div')
    content.classList = 'form'
    content.id = `this${type}`

    const form = document.createElement('form')
    form.id = `${type}`
    form.classList = 'hidden'

    const title = document.createElement('label')
    title.innerHTML = 'Title'
    const inputTitle = document.createElement('input')
    inputTitle.type = 'text'
    inputTitle.id = `${type}Title`
    inputTitle.placeholder = 'What you gonna do ?'
    form.appendChild(title)
    form.appendChild(inputTitle)

    const details = document.createElement('label')
    details.innerHTML = 'Details'
    const inputDetails = document.createElement('textarea')
    inputDetails.id = `${type}Details`
    inputDetails.rows = '2'
    inputDetails.cols = '50'
    inputDetails.placeholder = 'Anything that make you understand why you have to do it'
    form.appendChild(details)
    form.appendChild(inputDetails)

    const twoButton = document.createElement('div')
    twoButton.id = 'button'

    const addButton = document.createElement('input')
    addButton.type = 'submit'
    addButton.id = `${type}Submit`
    addButton.value = 'Add'



    const cancelButton = document.createElement('input')
    cancelButton.type = 'button'
    cancelButton.id = `${type}Cancel`
    cancelButton.value = 'Cancel'

    cancelButton.addEventListener('click', () => {
        form.classList.add('hidden')
    })

    twoButton.appendChild(addButton)
    twoButton.appendChild(cancelButton)

    form.appendChild(twoButton)
    content.appendChild(form)

    return content
}

function createAdd(type) {
    const content = document.createElement('div')
    content.classList = 'add'

    const button = document.createElement('button')
    button.id = `${type}Add`

    const image = document.createElement('img')
    image.src = "./images/plus.png"

    const text = document.createElement('p')
    text.innerHTML = `Add ${type}`

    button.appendChild(image)
    button.appendChild(text)

    button.addEventListener('click', () => {
        let form = document.getElementById(`${type}`)
        form.classList.remove('hidden')
    })

    content.appendChild(button)
    return content
}

function createLeftPanel() {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const form = createForm('task')
    content.appendChild(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        let titleInput = document.getElementById('taskTitle') 
        let describtionInput = document.getElementById('taskDetails')

        const task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(titleInput.value, describtionInput.value, false, false)
        task.addToLocalStorage()

        createItem(listTask, task)

        titleInput.value = ""
        describtionInput.value = ""
        document.getElementById('task').classList.add("hidden")
    })

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    avaialbleTask(listTask)
    content.appendChild(listTask)

    const addButton = createAdd('task')
    content.appendChild(addButton)

    return content
}

function createRightPanel() {
    const content = document.createElement('div')
    content.id = 'right-panel'

    const form = createForm('idea')
    content.appendChild(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        let titleInput = document.getElementById('ideaTitle') 
        let describtionInput = document.getElementById('ideaDetails')

        const idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(titleInput.value, describtionInput.value, false, false)
        idea.addToLocalStorage()

        createItem(listIdea, idea)

        titleInput.value = ""
        describtionInput.value = ""
        document.getElementById('idea').classList.add("hidden")
    })

    const listIdea = document.createElement('div')
    listIdea.id = 'listIdea' 

    availableIdea(listIdea)
    content.appendChild(listIdea)

    const addButton = createAdd('idea')
    content.appendChild(addButton)

    return content
}

let newItem = (function newItem () {
    const baseID = 'item'
    let count = 0
    return function (type = 'div') {
        let item = document.createElement(type)
        item.classList = baseID
        item.id = count
        count += 1
        return item
    }
}())

function createItem(listItem, task) {


    const item = newItem('div')
    const itemID = Number(item.id)

    const done = document.createElement('input')
    done.type = "checkbox";
    done.name = "done"
    done.setAttribute('id', 'done')
    item.appendChild(done)

    done.defaultChecked = task.done == true ? true : false

    //make button done change status
    done.addEventListener('click', () => {
        task.beDone()
    })

    let text = document.createElement('div')
    text.setAttribute('id', 'text')
    let h3 = document.createElement('h3')
    h3.innerHTML = task.title
    text.appendChild(h3)
    let p = document.createElement('p')
    p.innerHTML = task.describtion
    text.appendChild(p)
    item.appendChild(text)

    let combo = document.createElement('div')
    combo.id = "combo"

    const star = document.createElement('div')
    star.classList = 'star' 
    const starBox = document.createElement('input')
    starBox.type = "checkbox"
    starBox.setAttribute('id', `important${itemID}`)
    const starLabel = document.createElement('label')
    starLabel.setAttribute('for', `important${itemID}`)
    star.appendChild(starBox)
    star.appendChild(starLabel)
    combo.appendChild(star)

    starBox.defaultChecked = task.important == true ? true : false

    starBox.addEventListener('click', () => {
        task.beImportant()
    })

    const edit = document.createElement('div')
    edit.setAttribute('id', 'editContainer')
    const editSpan = document.createElement('span')
    editSpan.setAttribute('id', 'vert')
    editSpan.classList = "material-symbols-outlined"
    editSpan.textContent = "more_vert"
    edit.appendChild(editSpan)
    combo.appendChild(edit)

    const list = document.createElement('div')
    list.classList = 'listOption'
    const buttonEdit = document.createElement('button')
    buttonEdit.classList = 'edit'
    buttonEdit.innerHTML = "Edit"
    const buttonDelete = document.createElement('button')
    buttonDelete.classList = 'detele'
    buttonDelete.innerHTML = "Delete"
    list.appendChild(buttonEdit)
    list.appendChild(buttonDelete)
    combo.appendChild(list)

    item.appendChild(combo)

    edit.addEventListener('click', () => {
    if (list.classList.contains("active")) {
        list.classList.remove('active')
    } else {
        list.classList.add("active")
    }
    })

    buttonDelete.addEventListener('click', () => {
        task.deleteFromLocalStorage();
        item.remove();
    })
    //edit button should create another kind of form
    buttonEdit.addEventListener('click', () => {
        item.style.display = "none"
        createEditForm(listItem)

        const editForm = document.getElementById('editTask')
        const cancelButton = document.getElementById('editCancel')
        cancelButton.addEventListener('click', () => {
            editForm.remove()
            item.style.display = null
            list.classList.remove('active')
        })

        const editButton = document.getElementById('edit')
        let titleInput = document.getElementById('inputEdit')
        titleInput.value = h3.innerHTML
        let describtionInput = document.getElementById('detailsEdit')
        describtionInput.value = p.innerHTML

        editButton.addEventListener('click', () => {
            h3.innerHTML = titleInput.value
            p.innerHTML = describtionInput.value
            task.reName(`${titleInput.value}`)
            task.reDes(`${describtionInput.value}`)
            editForm.remove()
            item.style.display = null
            list.classList.remove('active')
        })
    })
    listItem.appendChild(item)
}

function createEditForm(list) {

    const place = list.id === 'listIdea' ? document.getElementById('thisidea') : document.getElementById('thistask')
    
    const form = document.createElement('form')
    form.id = "editTask"

    const title = document.createElement('label')
    title.setAttribute('for', 'title')
    title.textContent = "Title:"
    form.appendChild(title)

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'title')
    input.setAttribute('placeholder', 'What you gonna do ?')
    input.id = "inputEdit"
    form.appendChild(input)

    const details = document.createElement('label')
    details.setAttribute('for', 'details')
    details.textContent = "Details:"
    form.appendChild(details)

    const textArea = document.createElement('textarea')
    textArea.setAttribute('rows', '2')
    textArea.setAttribute('cols', '50')
    textArea.setAttribute('name', 'details')
    textArea.setAttribute('placeholder', 'Anything that make you understand why you have to do it')
    textArea.id = "detailsEdit"
    form.appendChild(textArea)

    const twoButton = document.createElement('div')
    twoButton.id = "button"

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('name', 'submit')
    submit.setAttribute('value', 'Edit')
    submit.id = "edit"
    twoButton.appendChild(submit)

    const cancel = document.createElement('input')
    cancel.setAttribute('type', 'button')
    cancel.setAttribute('name', 'cancel')
    cancel.setAttribute('value', 'Cancel')
    cancel.id = "editCancel"
    twoButton.appendChild(cancel)

    form.appendChild(twoButton)
    place.appendChild(form)
}

function avaialbleTask(list) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)   
            createItem(list, task)
        }
    }
}

function availableIdea(list) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)
            createItem(list, idea)
        }   
    }
}


function addToday(type) {
    const content = document.createElement('div')
    content.id = 'panel'

    const left = createLeftPanel()
    content.appendChild(left)

    const right = createRightPanel()
    content.appendChild(right)

    return content
}







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDLDJCQUEyQixtQ0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0MsMkJBQTJCLG1DQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztVQ3BYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UvYWxsSWRlYS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS9hbGx0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UvaW1wb3J0YW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMjIzMDNjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xufVxuXG4ubWVudSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjB2dywgMWZyKSk7XG4gICAgbWluLWhlaWdodDogODV2aDtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG5cbi5jb250ZW50IC5sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgY29sb3I6IHdoaXRlXG59XG5cbi5ob21lIHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5ob21lIGgyIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XG59XG5cbi5ob21lIC5saW5lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmhvbWUgLmxpbmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob21lIC5saW5lLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAxNDEsIDc3LCAwLjUpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XG59XG5cbi5ob21lIC5saW5lIC5pY29uIHtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLmJvZHkge1xuICAgIHBhZGRpbmc6IDYwcHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICMyMjMwM2M7XG59XG5cbi53cmFwcGVyIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMjVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAxNDEsIDc3LCAwLjc1KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmhlYWRlciAuaWNvbnMgc3BhbiB7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIG1hcmdpbjogMCAxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5oZWFkZXIgLmljb25zIHNwYW46aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuaGVhZGVyIC5pY29ucyBzcGFuOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLmNhbGVuZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYWxlbmRlciB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhbGVuZGVyIC5kYXlzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2FsZW5kZXIgLndlZWtzIGxpe1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5cbi5jYWxlbmRlciAuZGF5cyBsaXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FsZW5kZXIgdWwgbGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUvNyk7XG59XG5cbi5kYXlzIGxpLmluYWN0aXZle1xuICAgIGNvbG9yOiAjYWFhO1xufVxuXG4uZGF5cyBsaS5hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTQxLCA3NywgMSk7XG4gICAgY29sb3I6IHdoaXRlXG59XG5cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRlbnQgLnJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMTkyNzM0O1xuICAgIGdyaWQtY29sdW1uOiAyIC8gNjtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0IGgyIHtcbiAgICBtYXJnaW46IDJyZW0gM3JlbTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAxNDEsIDc3LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5yaWdodCAjcGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MHZ3LCAxZnIpKTtcbiAgICBoZWlnaHQ6IDgwdmg7XG59XG5cbi5yaWdodCAjcGFuZWwgI2xlZnQtcGFuZWwge1xuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xufVxuXG4ucmlnaHQgI3BhbmVsIGZvcm0ge1xuICAgIG1hcmdpbjogMCAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNTIwMmI7XG4gICAgZ2FwOiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucmlnaHQgI3BhbmVsIGZvcm0uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmlnaHQgI3BhbmVsIGZvcm0gI2J1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnJpZ2h0ICNwYW5lbCBmb3JtICNidXR0b24gaW5wdXRbdHlwZT1zdWJtaXRde1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6cmdiYSgzMSwgMTQxLCA3NywgMSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWdodCAjcGFuZWwgZm9ybSAjYnV0dG9uIGlucHV0W3R5cGU9YnV0dG9uXXtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWdodCAuYWRkIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW0gM3JlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDMzdnc7XG59XG5cbi5yaWdodCAuYWRkIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYiA7IFxufVxuXG4ucmlnaHQgLmFkZCBidXR0b24gaW1nIHtcbiAgICB3aWR0aDogMzNweDtcbn1cblxuLnJpZ2h0ICNsaXN0VGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4ucmlnaHQgLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgM3JlbTtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XG59XG5cbi5yaWdodCAuaXRlbSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnJpZ2h0IC5pdGVtICN0ZXh0IHtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAwJTtcbn1cblxuLnJpZ2h0IC5zdGFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJpZ2h0IC5zdGFyIGxhYmVse1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5yaWdodCAuc3RhciBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJpZ2h0IC5zdGFyIGxhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXFxcMjYwNVwiO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4ucmlnaHQgLnN0YXIgbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxcXDI2MDVcIjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5yaWdodCAuc3RhciBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiN2ZXJ0IHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbSAjY29tYm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5pdGVtIC5saXN0T3B0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaXRlbSAubGlzdE9wdGlvbiBidXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiMxOTI3MzQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLml0ZW0gLmxpc3RPcHRpb24uYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyMjMwM2M7XG4gICAgcGFkZGluZzogMC45NXJlbTtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLmZvb3RlciBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLGtC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N0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzIyMzAzYztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5tZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjB2dywgMWZyKSk7XFxuICAgIG1pbi1oZWlnaHQ6IDg1dmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcblxcbi5jb250ZW50IC5sZWZ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGNvbG9yOiB3aGl0ZVxcbn1cXG5cXG4uaG9tZSB7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweCAwcHggMjBweDtcXG59XFxuXFxuLmhvbWUgaDIge1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5ob21lIC5saW5lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmhvbWUgLmxpbmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvbWUgLmxpbmUuYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAxNDEsIDc3LCAwLjUpO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uaG9tZSAubGluZSAuaWNvbiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uYm9keSB7XFxuICAgIHBhZGRpbmc6IDYwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyMjMwM2M7XFxufVxcblxcbi53cmFwcGVyIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDE0MSwgNzcsIDAuNzUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaGVhZGVyIC5pY29ucyBzcGFuIHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICB3aWR0aDogMzhweDtcXG4gICAgbWFyZ2luOiAwIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmhlYWRlciAuaWNvbnMgc3Bhbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG59XFxuXFxuaGVhZGVyIC5pY29ucyBzcGFuOmxhc3QtY2hpbGR7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi5jYWxlbmRlciB7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FsZW5kZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jYWxlbmRlciAuZGF5cyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5jYWxlbmRlciAud2Vla3MgbGl7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi5jYWxlbmRlciAuZGF5cyBsaXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FsZW5kZXIgdWwgbGl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS83KTtcXG59XFxuXFxuLmRheXMgbGkuaW5hY3RpdmV7XFxuICAgIGNvbG9yOiAjYWFhO1xcbn1cXG5cXG4uZGF5cyBsaS5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDE0MSwgNzcsIDEpO1xcbiAgICBjb2xvcjogd2hpdGVcXG59XFxuXFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250ZW50IC5yaWdodCB7XFxuICAgIGJhY2tncm91bmQ6ICMxOTI3MzQ7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJpZ2h0IGgyIHtcXG4gICAgbWFyZ2luOiAycmVtIDNyZW07XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMTQxLCA3NywgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnJpZ2h0ICNwYW5lbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDB2dywgMWZyKSk7XFxuICAgIGhlaWdodDogODB2aDtcXG59XFxuXFxuLnJpZ2h0ICNwYW5lbCAjbGVmdC1wYW5lbCB7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucmlnaHQgI3BhbmVsIGZvcm0ge1xcbiAgICBtYXJnaW46IDAgM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZDogIzE1MjAyYjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnJpZ2h0ICNwYW5lbCBmb3JtLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodCAjcGFuZWwgZm9ybSAjYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJpZ2h0ICNwYW5lbCBmb3JtICNidXR0b24gaW5wdXRbdHlwZT1zdWJtaXRde1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDMxLCAxNDEsIDc3LCAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yaWdodCAjcGFuZWwgZm9ybSAjYnV0dG9uIGlucHV0W3R5cGU9YnV0dG9uXXtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yaWdodCAuYWRkIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAycmVtIDNyZW07XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDMzdnc7XFxufVxcblxcbi5yaWdodCAuYWRkIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmIgOyBcXG59XFxuXFxuLnJpZ2h0IC5hZGQgYnV0dG9uIGltZyB7XFxuICAgIHdpZHRoOiAzM3B4O1xcbn1cXG5cXG4ucmlnaHQgI2xpc3RUYXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5yaWdodCAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAzcmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XFxufVxcblxcbi5yaWdodCAuaXRlbSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnJpZ2h0IC5pdGVtICN0ZXh0IHtcXG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwMCU7XFxufVxcblxcbi5yaWdodCAuc3RhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHQgLnN0YXIgbGFiZWx7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNDhweDtcXG59XFxuXFxuLnJpZ2h0IC5zdGFyIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0IC5zdGFyIGxhYmVsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjYwNVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnJpZ2h0IC5zdGFyIGxhYmVsOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNjA1XFxcIjtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ucmlnaHQgLnN0YXIgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuI3ZlcnQge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLml0ZW0gI2NvbWJvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLml0ZW0gLmxpc3RPcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaXRlbSAubGlzdE9wdGlvbiBidXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiMxOTI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaXRlbSAubGlzdE9wdGlvbi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyMjMwM2M7XFxuICAgIHBhZGRpbmc6IDAuOTVyZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNob3dBbGxUYXNrIH0gZnJvbSAnLi9wYWdlL2FsbHRhc2snO1xuaW1wb3J0IHsgc2hvd0FsbElkZWEgfSBmcm9tICcuL3BhZ2UvYWxsSWRlYSc7XG5pbXBvcnQgeyBzaG93SW1wb3J0YW50IH0gZnJvbSAnLi9wYWdlL2ltcG9ydGFudCc7XG5pbXBvcnQgeyBhZGRUb2RheSB9IGZyb20gJy4vcGFnZS90b2RheSc7XG5pbXBvcnQgeyBzaG93RGF0ZSB9IGZyb20gJy4vcGFnZS9kYXRlJztcblxuLy8gbWFrZSB0aGUgbGVmdCBwYW5lbCBkaXNhcHBlYXIgYW5kIGFwcGVhclxuY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQnKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChsZWZ0UGFuZWwuY2xhc3NMaXN0ID09IFwibGVmdFwiKSB7XG4gICAgICAgIGxlZnRQYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIH1cbn0pXG4vLyBtYWtlIHRoZSBjYWxlbmRlciBpbiB0aGUgYm90dG9tIG9mIGxlZnQgcGFuZWxcbmNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtZGF0ZScpO1xuY29uc3QgZGF0ZVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyk7XG5jb25zdCBwcmV2TmV4dEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbnMgc3BhbicpXG5cbmxldCBkYXRlID0gbmV3IERhdGUoKSxcbmN1cnJZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuY3Vyck1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuXG5sZXQgbm93ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUdCJylcblxuY29uc3QgbW9udGggPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsXG4gICAgICAgICAgICAgICAgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG4gXG5jb25zdCByZW5kZXJDYWxlbmRhciA9ICgpID0+IHtcbiAgICBsZXQgZmlyc3REYXRlb2ZNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIDEpLmdldERheSgpOyAvLyBnZXQgZmlyc3QgZGF5IG9mIG1vbnRoXG4gICAgbGV0IGxhc3REYXRlb2ZNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGggKyAxLCAwKS5nZXREYXRlKCk7IC8vIGdldHRpbmcgbGFzdCBkYXkgb2YgbW9udGhcbiAgICBsZXQgbGFzdERhdGVvZkxhc3RNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIDApLmdldERhdGUoKTsgLy9nZXRpbm5nIGxhc3QgZGF0ZSBvZiBwcmV2aW91cyBtb250aFxuICAgIGxldCBsYXN0RGF5b2ZNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIGxhc3REYXRlb2ZMYXN0TW9udGgpLmdldERheSgpOyAvL2dldHRpbmcgbGFzdCBkYXkgb2YgbW9udGhcbiAgICBsZXQgbGlUYWcgPSBcIlwiO1xuXG4gICAgZm9yICggbGV0IGkgPSBmaXJzdERhdGVvZk1vbnRoOyBpID4gMCA7IGktLSkge1xuICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzPVwiaW5hY3RpdmVcIj4ke2xhc3REYXRlb2ZMYXN0TW9udGggLSBpICsgMX08L2xpPmBcbiAgICB9XG5cbiAgICBmb3IgKCBsZXQgaSA9IDE7IGkgPD0gbGFzdERhdGVvZk1vbnRoOyBpKyspIHtcbiAgICAgICAgbGV0IGlzVG9kYXkgPSBpID09PSBkYXRlLmdldERhdGUoKSAmJiBjdXJyTW9udGggPT09IG5ldyBEYXRlKCkuZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGN1cnJZZWFyID09PSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzID1cIiR7aXNUb2RheX1cIj4ke2l9PC9saT5gXG4gICAgfVxuXG4gICAgZm9yICggbGV0IGkgPSBsYXN0RGF5b2ZNb250aDsgaSA8IDY7IGkrKykge1xuICAgICAgICBsaVRhZyArPSBgPGxpIGlkPVwibGFzdFwiIGNsYXNzPVwiaW5hY3RpdmVcIj4ke2kgLSBsYXN0RGF5b2ZNb250aCArIDF9PC9saT5gXG4gICAgfVxuXG4gICAgY3VycmVudERhdGUuaW5uZXJIVE1MID0gYCR7bW9udGhbY3Vyck1vbnRoXX0gJHtjdXJyWWVhcn1gXG4gICAgZGF0ZVRhZy5pbm5lckhUTUwgPSBsaVRhZ1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCB3aG9sZU1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMnKS5jaGlsZHJlblxuICAgIGxldCBldmVyeURheSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgd2hvbGVNb250aC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgZXZlcnlEYXkucHVzaCh3aG9sZU1vbnRoW2ldKVxuICAgIH1cbiAgICBcbiAgICBldmVyeURheS5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICAgIGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGltaW5nXG4gICAgICAgICAgICBpZihkYXRlLmNsYXNzTGlzdCA9PSAnaW5hY3RpdmUnICYmIGRhdGUuaWQgPT0gJ2xhc3QnKSB7XG4gICAgICAgICAgICAgICAgdGltaW5nID0gYCR7ZGF0ZS5pbm5lckhUTUx9LyR7Y3Vyck1vbnRoICsgMn0vJHtjdXJyWWVhcn1gXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGUuY2xhc3NMaXN0ID09ICdpbmFjdGl2ZScgJiYgIWRhdGUuaWQpIHtcbiAgICAgICAgICAgICAgICB0aW1pbmcgPSBgJHtkYXRlLmlubmVySFRNTH0vJHtjdXJyTW9udGh9LyR7Y3VyclllYXJ9YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aW1pbmcgPSBgJHtkYXRlLmlubmVySFRNTH0vJHtjdXJyTW9udGggKyAxfS8ke2N1cnJZZWFyfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRpbWluZyA9PSBub3cpIHtcbiAgICAgICAgICAgICAgICByaWdodEJvZHkuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICAgICAgICAgdG9kYXlUaXRsZS5pZCA9ICd0aXRsZSdcbiAgICAgICAgICAgICAgICB0b2RheVRpdGxlLmlubmVySFRNTCA9ICdUb2RheSdcblxuICAgICAgICAgICAgICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKVxuXG4gICAgICAgICAgICAgICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKGFkZFRvZGF5KCkpXG5cbiAgICAgICAgICAgICAgICB0b2RheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgYWxsVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgYWxsSWRlYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmlnaHRCb2R5LmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgICAgICAgIHRvZGF5VGl0bGUuaWQgPSAndGl0bGUnXG4gICAgICAgICAgICAgICAgdG9kYXlUaXRsZS5pbm5lckhUTUwgPSB0aW1pbmdcblxuICAgICAgICAgICAgICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKVxuXG4gICAgICAgICAgICAgICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKHNob3dEYXRlKHRpbWluZykpXG5cbiAgICAgICAgICAgICAgICB0b2RheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgYWxsVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgYWxsSWRlYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9KVxuXG59XG5cbnJlbmRlckNhbGVuZGFyKCk7XG5cbnByZXZOZXh0SWNvbi5mb3JFYWNoKGljb24gPT4ge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJNb250aCA9IGljb24uaWQgPT09IFwicHJldlwiID8gY3Vyck1vbnRoIC0gMSA6IGN1cnJNb250aCArIDE7XG5cbiAgICAgICAgaWYgKGN1cnJNb250aCA8IDAgfHwgY3Vyck1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoKTtcbiAgICAgICAgICAgIGN1cnJZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgY3Vyck1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyQ2FsZW5kYXIoKVxuICAgIH0pXG59KVxuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlidGlvbiwgZG9uZSwgaW1wb3J0YW50LCBkYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaWJ0aW9uID0gZGVzY3JpYnRpb25cbiAgICAgICAgdGhpcy5kb25lID0gZG9uZVxuICAgICAgICB0aGlzLmltcG9ydGFudCA9IGltcG9ydGFudFxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlID09IG51bGwgPyBub3cgOiBkYXRlXG4gICAgfVxuXG4gICAgYmVEb25lKCkge1xuICAgICAgICBsZXQgbXlUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJykpXG4gICAgICAgIGxldCB0YXNrID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkobXlUYXNrW2ldKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFzaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSAhdGhpcy5kb25lXG4gICAgICAgICAgICAgICAgbXlUYXNrW2ldLmRvbmUgPSAhbXlUYXNrW2ldLmRvbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VGFzaycsIEpTT04uc3RyaW5naWZ5KG15VGFzaykpXG4gICAgfVxuXG4gICAgYmVJbXBvcnRhbnQoKSB7XG4gICAgICAgIGxldCBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSlcbiAgICAgICAgbGV0IHRhc2sgPSB7J3RpdGxlJzogdGhpcy50aXRsZSwgJ2Rlc2NyaWJ0aW9uJzogdGhpcy5kZXNjcmlidGlvbiwgJ2RvbmUnOiB0aGlzLmRvbmUsICdpbXBvcnRhbnQnOiB0aGlzLmltcG9ydGFudCwgJ2RhdGUnOiB0aGlzLmRhdGV9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShteVRhc2tbaV0pID09PSBKU09OLnN0cmluZ2lmeSh0YXNrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0YW50ID0gIXRoaXMuaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgbXlUYXNrW2ldLmltcG9ydGFudCA9ICFteVRhc2tbaV0uaW1wb3J0YW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBKU09OLnN0cmluZ2lmeShteVRhc2spKVxuICAgIH1cblxuICAgIHJlTmFtZShuZXdOYW1lKSB7XG4gICAgICAgIGxldCBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSlcbiAgICAgICAgbGV0IHRhc2sgPSB7J3RpdGxlJzogdGhpcy50aXRsZSwgJ2Rlc2NyaWJ0aW9uJzogdGhpcy5kZXNjcmlidGlvbiwgJ2RvbmUnOiB0aGlzLmRvbmUsICdpbXBvcnRhbnQnOiB0aGlzLmltcG9ydGFudCwgJ2RhdGUnOiB0aGlzLmRhdGV9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShteVRhc2tbaV0pID09PSBKU09OLnN0cmluZ2lmeSh0YXNrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBuZXdOYW1lXG4gICAgICAgICAgICAgICAgbXlUYXNrW2ldLnRpdGxlID0gbmV3TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgSlNPTi5zdHJpbmdpZnkobXlUYXNrKSlcbiAgICB9XG5cbiAgICByZURlcyhuZXdEZXMpIHtcbiAgICAgICAgbGV0IG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKVxuICAgICAgICBsZXQgdGFzayA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15VGFza1tpXSkgPT09IEpTT04uc3RyaW5naWZ5KHRhc2spKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlidGlvbiA9IG5ld0Rlc1xuICAgICAgICAgICAgICAgIG15VGFza1tpXS5kZXNjcmlidGlvbiA9IG5ld0Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgSlNPTi5zdHJpbmdpZnkobXlUYXNrKSlcbiAgICB9XG5cbiAgICBhZGRUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKVxuICAgICAgICBsZXQgdGFzayA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgbXlUYXNrLnB1c2godGFzaylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VGFzaycsIEpTT04uc3RyaW5naWZ5KG15VGFzaykpXG4gICAgfVxuXG4gICAgZGVsZXRlRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKVxuICAgICAgICBsZXQgdGFzayA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15VGFza1tpXSkgPT09IEpTT04uc3RyaW5naWZ5KHRhc2spKSB7XG4gICAgICAgICAgICAgICAgbXlUYXNrLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBKU09OLnN0cmluZ2lmeShteVRhc2spKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZWEge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpYnRpb24sIGRvbmUsIGltcG9ydGFudCwgZGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlidGlvbiA9IGRlc2NyaWJ0aW9uXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICAgICAgdGhpcy5pbXBvcnRhbnQgPSBpbXBvcnRhbnRcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSA9PSBudWxsID8gbm93IDogZGF0ZVxuICAgIH1cblxuICAgIGJlRG9uZSgpIHtcbiAgICAgICAgbGV0IG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBsZXQgaWRlYSA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZSB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlJZGVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShteUlkZWFbaV0pID09PSBKU09OLnN0cmluZ2lmeShpZGVhKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9ICF0aGlzLmRvbmVcbiAgICAgICAgICAgICAgICBteUlkZWFbaV0uZG9uZSA9ICFteUlkZWFbaV0uZG9uZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlJZGVhJywgSlNPTi5zdHJpbmdpZnkobXlJZGVhKSlcbiAgICB9XG5cbiAgICBiZUltcG9ydGFudCgpIHtcbiAgICAgICAgbGV0IG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBsZXQgaWRlYSA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZSB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlJZGVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShteUlkZWFbaV0pID09PSBKU09OLnN0cmluZ2lmeShpZGVhKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0YW50ID0gIXRoaXMuaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgbXlJZGVhW2ldLmltcG9ydGFudCA9ICFteUlkZWFbaV0uaW1wb3J0YW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBKU09OLnN0cmluZ2lmeShteUlkZWEpKVxuICAgIH1cblxuICAgIHJlTmFtZShuZXdOYW1lKSB7XG4gICAgICAgIGxldCBteUlkZWEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUlkZWEnKSlcbiAgICAgICAgbGV0IGlkZWEgPSB7J3RpdGxlJzogdGhpcy50aXRsZSwgJ2Rlc2NyaWJ0aW9uJzogdGhpcy5kZXNjcmlidGlvbiwgJ2RvbmUnOiB0aGlzLmRvbmUsICdpbXBvcnRhbnQnOiB0aGlzLmltcG9ydGFudCwgJ2RhdGUnOiB0aGlzLmRhdGV9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlJZGVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShteUlkZWFbaV0pID09PSBKU09OLnN0cmluZ2lmeShpZGVhKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBuZXdOYW1lXG4gICAgICAgICAgICAgICAgbXlJZGVhW2ldLnRpdGxlID0gbmV3TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlJZGVhJywgSlNPTi5zdHJpbmdpZnkobXlJZGVhKSlcbiAgICB9XG5cbiAgICByZURlcyhuZXdEZXMpIHtcbiAgICAgICAgbGV0IG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBsZXQgaWRlYSA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUlkZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15SWRlYVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KGlkZWEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlidGlvbiA9IG5ld0Rlc1xuICAgICAgICAgICAgICAgIG15SWRlYVtpXS5kZXNjcmlidGlvbiA9IG5ld0Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlJZGVhJywgSlNPTi5zdHJpbmdpZnkobXlJZGVhKSlcbiAgICB9XG5cbiAgICBhZGRUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBsZXQgaWRlYSA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgbXlJZGVhLnB1c2goaWRlYSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215SWRlYScsIEpTT04uc3RyaW5naWZ5KG15SWRlYSkpXG4gICAgfVxuXG4gICAgZGVsZXRlRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBsZXQgaWRlYSA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUlkZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15SWRlYVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KGlkZWEpKSB7XG4gICAgICAgICAgICAgICAgbXlJZGVhLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBKU09OLnN0cmluZ2lmeShteUlkZWEpKVxuICAgIH1cbn1cbi8vc2VsZWN0IHJpZ2h0IGFyZWFcbmNvbnN0IHJpZ2h0Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpXG5cbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1RvZGF5Jyk7XG50b2RheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG5cbmNvbnN0IHRvZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG50b2RheVRpdGxlLmlkID0gJ3RpdGxlJ1xudG9kYXlUaXRsZS5pbm5lckhUTUwgPSAnVG9kYXknXG5cbnJpZ2h0Qm9keS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKVxucmlnaHRCb2R5LmFwcGVuZENoaWxkKGFkZFRvZGF5KCkpXG5cbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgcmlnaHRCb2R5LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCB0b2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRvZGF5VGl0bGUuaWQgPSAndGl0bGUnXG4gICAgdG9kYXlUaXRsZS5pbm5lckhUTUwgPSAnVG9kYXknXG5cbiAgICByaWdodEJvZHkuYXBwZW5kQ2hpbGQodG9kYXlUaXRsZSlcblxuICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZChhZGRUb2RheSgpKVxuXG4gICAgdG9kYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGFsbFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGFsbElkZWEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG59KVxuXG4vLyBhZGQgZXZlbnRsaXN0ZW5lciB0byBjcmVhdGUgbmV3IHJpZ2h0IHBhbmVsXG5jb25zdCBhbGxUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Rhc2snKTtcbmFsbFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCkgPT4ge1xuXG4gICAgcmlnaHRCb2R5LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCB0b2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRvZGF5VGl0bGUuaWQgPSAndGl0bGUnXG4gICAgdG9kYXlUaXRsZS5pbm5lckhUTUwgPSAnQWxsIFRhc2snXG5cbiAgICByaWdodEJvZHkuYXBwZW5kQ2hpbGQodG9kYXlUaXRsZSlcblxuICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZChzaG93QWxsVGFzaygpKVxuXG4gICAgdG9kYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGFsbFRhc2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGFsbElkZWEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG59KTtcblxuY29uc3QgYWxsSWRlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJZGVhJyk7XG5hbGxJZGVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgcmlnaHRCb2R5LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCB0b2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRvZGF5VGl0bGUuaWQgPSAndGl0bGUnXG4gICAgdG9kYXlUaXRsZS5pbm5lckhUTUwgPSAnQWxsIElkZWEnXG5cbiAgICByaWdodEJvZHkuYXBwZW5kQ2hpbGQodG9kYXlUaXRsZSlcblxuICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZChzaG93QWxsSWRlYSgpKVxuICAgIHRvZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBhbGxUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBhbGxJZGVhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufSk7XG5cbmNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbXBvcnRhbnQnKTtcbmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIHJpZ2h0Qm9keS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0b2RheVRpdGxlLmlkID0gJ3RpdGxlJ1xuICAgIHRvZGF5VGl0bGUuaW5uZXJIVE1MID0gJ0ltcG9ydGFudCdcblxuICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKVxuXG4gICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKHNob3dJbXBvcnRhbnQoKSlcblxuICAgIHRvZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBhbGxUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBhbGxJZGVhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxufSk7XG5cbiIsImltcG9ydCB7IElkZWEgfSBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuL3RvZGF5XCJcblxuZnVuY3Rpb24gdW5kb25lVGFzayhsaXN0KSB7XG4gICAgbGV0IG15SWRlYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUlkZWEnKVxuICAgIGlmIChteUlkZWEgPT0gbnVsbCApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215SWRlYScsIFwiW11cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBteUlkZWEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUlkZWEnKSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUlkZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpZGVhID0gbmV3IElkZWEobXlJZGVhW2ldLnRpdGxlLCBteUlkZWFbaV0uZGVzY3JpYnRpb24sIG15SWRlYVtpXS5kb25lLCBteUlkZWFbaV0uaW1wb3J0YW50LCBteUlkZWFbaV0uZGF0ZSlcbiAgICAgICAgICAgIGlmIChpZGVhLmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbShsaXN0LCBpZGVhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsbElkZWEoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5pZCA9ICdwYW5lbCdcblxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsaXN0SXRlbS5pZCA9ICdsaXN0SWRlYSdcblxuICAgIHVuZG9uZVRhc2sobGlzdEl0ZW0pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcblxuICAgIHJldHVybiBjb250ZW50XG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLlwiXG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vdG9kYXlcIlxuXG5mdW5jdGlvbiB1bmRvbmVUYXNrKGxpc3QpIHtcbiAgICBsZXQgbXlUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpXG4gICAgaWYgKG15VGFzayA9PSBudWxsICkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgXCJbXVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayhteVRhc2tbaV0udGl0bGUsIG15VGFza1tpXS5kZXNjcmlidGlvbiwgbXlUYXNrW2ldLmRvbmUsIG15VGFza1tpXS5pbXBvcnRhbnQsIG15VGFza1tpXS5kYXRlKVxuICAgICAgICAgICAgaWYgKHRhc2suZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtKGxpc3QsIHRhc2spXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsVGFzaygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ3BhbmVsJ1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxpc3RJdGVtLmlkID0gJ2xpc3RUYXNrJ1xuXG4gICAgdW5kb25lVGFzayhsaXN0SXRlbSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn0iLCJpbXBvcnQgeyBUYXNrLCBJZGVhIH0gZnJvbSBcIi4uXCJcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi90b2RheVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZUxlZnRQYW5lbCh0aW1pbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ2xlZnQtcGFuZWwnXG5cbiAgICBjb25zdCBsaXN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdFRhc2suaWQgPSAnbGlzdFRhc2snIFxuXG4gICAgb2xkVGFzayhsaXN0VGFzaywgdGltaW5nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdFRhc2spXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodFBhbmVsKHRpbWluZykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAnbGVmdC1wYW5lbCdcblxuICAgIGNvbnN0IGxpc3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsaXN0VGFzay5pZCA9ICdsaXN0VGFzaycgXG5cbiAgICBvbGRJZGVhKGxpc3RUYXNrLCB0aW1pbmcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0VGFzaylcbiAgICBcbiAgICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBvbGRUYXNrKGxpc3QsIHRpbWluZykge1xuICAgIGxldCBteVRhc2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJylcbiAgICBpZiAobXlUYXNrID09IG51bGwgKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBcIltdXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJykpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKG15VGFza1tpXS50aXRsZSwgbXlUYXNrW2ldLmRlc2NyaWJ0aW9uLCBteVRhc2tbaV0uZG9uZSwgbXlUYXNrW2ldLmltcG9ydGFudCwgbXlUYXNrW2ldLmRhdGUpICBcbiAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT0gdGltaW5nICYmIHRhc2suZG9uZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW0obGlzdCwgdGFzaylcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gb2xkSWRlYShsaXN0LCB0aW1pbmcpIHtcbiAgICBsZXQgbXlJZGVhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpXG4gICAgaWYgKG15SWRlYSA9PSBudWxsICkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlJZGVhJywgXCJbXVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15SWRlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGlkZWEgPSBuZXcgSWRlYShteUlkZWFbaV0udGl0bGUsIG15SWRlYVtpXS5kZXNjcmlidGlvbiwgbXlJZGVhW2ldLmRvbmUsIG15SWRlYVtpXS5pbXBvcnRhbnQsIG15SWRlYVtpXS5kYXRlKSAgXG4gICAgICAgICAgICBpZiAoaWRlYS5kYXRlID09IHRpbWluZyAmJiBpZGVhLmRvbmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtKGxpc3QsIGlkZWEpXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgY29uc29sZS5sb2coaWRlYS5kYXRlKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGltaW5nKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGUodGltaW5nKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5pZCA9ICdwYW5lbCdcblxuICAgIGNvbnN0IGxlZnRQYW5lbCA9IGNyZWF0ZUxlZnRQYW5lbCh0aW1pbmcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsZWZ0UGFuZWwpXG5cbiAgICBjb25zdCByaWdodFBhbmVsID0gY3JlYXRlUmlnaHRQYW5lbCh0aW1pbmcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyaWdodFBhbmVsKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn0iLCJpbXBvcnQgeyBUYXNrLCBJZGVhIH0gZnJvbSBcIi4uXCJcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi90b2RheVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZUxlZnRQYW5lbCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ2xlZnQtcGFuZWwnXG5cbiAgICBjb25zdCBsaXN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdFRhc2suaWQgPSAnbGlzdFRhc2snIFxuXG4gICAgaW1wb3J0YW50VGFzayhsaXN0VGFzaylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3RUYXNrKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRQYW5lbCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ2xlZnQtcGFuZWwnXG5cbiAgICBjb25zdCBsaXN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdFRhc2suaWQgPSAnbGlzdFRhc2snIFxuXG4gICAgaW1wb3J0YW50SWRlYShsaXN0VGFzaylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3RUYXNrKVxuICAgIFxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmZ1bmN0aW9uIGltcG9ydGFudFRhc2sobGlzdCkge1xuICAgIGxldCBteVRhc2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJylcbiAgICBpZiAobXlUYXNrID09IG51bGwgKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBcIltdXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJykpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKG15VGFza1tpXS50aXRsZSwgbXlUYXNrW2ldLmRlc2NyaWJ0aW9uLCBteVRhc2tbaV0uZG9uZSwgbXlUYXNrW2ldLmltcG9ydGFudCwgbXlUYXNrW2ldLmRhdGUpICBcbiAgICAgICAgICAgIGlmICh0YXNrLmRvbmUgPT09IGZhbHNlICYmIHRhc2suaW1wb3J0YW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbShsaXN0LCB0YXNrKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbXBvcnRhbnRJZGVhKGxpc3QpIHtcbiAgICBsZXQgbXlJZGVhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpXG4gICAgaWYgKG15SWRlYSA9PSBudWxsICkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlJZGVhJywgXCJbXVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15SWRlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGlkZWEgPSBuZXcgSWRlYShteUlkZWFbaV0udGl0bGUsIG15SWRlYVtpXS5kZXNjcmlidGlvbiwgbXlJZGVhW2ldLmRvbmUsIG15SWRlYVtpXS5pbXBvcnRhbnQsIG15SWRlYVtpXS5kYXRlKSAgXG4gICAgICAgICAgICBpZiAoaWRlYS5kb25lID09PSBmYWxzZSAmJiBpZGVhLmltcG9ydGFudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW0obGlzdCwgaWRlYSlcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93SW1wb3J0YW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAncGFuZWwnXG5cbiAgICBjb25zdCBsZWZ0UGFuZWwgPSBjcmVhdGVMZWZ0UGFuZWwoKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdFBhbmVsKVxuXG4gICAgY29uc3QgcmlnaHRQYW5lbCA9IGNyZWF0ZVJpZ2h0UGFuZWwoKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRQYW5lbClcblxuICAgIHJldHVybiBjb250ZW50XG59IiwiaW1wb3J0IHsgVGFzaywgSWRlYSB9IGZyb20gXCIuLlwiXG4vL0NyZWF0ZSBGb3JtXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHR5cGUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdCA9ICdmb3JtJ1xuICAgIGNvbnRlbnQuaWQgPSBgdGhpcyR7dHlwZX1gXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5pZCA9IGAke3R5cGV9YFxuICAgIGZvcm0uY2xhc3NMaXN0ID0gJ2hpZGRlbidcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdUaXRsZSdcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0J1xuICAgIGlucHV0VGl0bGUuaWQgPSBgJHt0eXBlfVRpdGxlYFxuICAgIGlucHV0VGl0bGUucGxhY2Vob2xkZXIgPSAnV2hhdCB5b3UgZ29ubmEgZG8gPydcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSlcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZGV0YWlscy5pbm5lckhUTUwgPSAnRGV0YWlscydcbiAgICBjb25zdCBpbnB1dERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXREZXRhaWxzLmlkID0gYCR7dHlwZX1EZXRhaWxzYFxuICAgIGlucHV0RGV0YWlscy5yb3dzID0gJzInXG4gICAgaW5wdXREZXRhaWxzLmNvbHMgPSAnNTAnXG4gICAgaW5wdXREZXRhaWxzLnBsYWNlaG9sZGVyID0gJ0FueXRoaW5nIHRoYXQgbWFrZSB5b3UgdW5kZXJzdGFuZCB3aHkgeW91IGhhdmUgdG8gZG8gaXQnXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXRhaWxzKVxuXG4gICAgY29uc3QgdHdvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0d29CdXR0b24uaWQgPSAnYnV0dG9uJ1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcbiAgICBhZGRCdXR0b24uaWQgPSBgJHt0eXBlfVN1Ym1pdGBcbiAgICBhZGRCdXR0b24udmFsdWUgPSAnQWRkJ1xuXG5cblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgY2FuY2VsQnV0dG9uLmlkID0gYCR7dHlwZX1DYW5jZWxgXG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gJ0NhbmNlbCdcblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0pXG5cbiAgICB0d29CdXR0b24uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgIHR3b0J1dHRvbi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHR3b0J1dHRvbilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGQodHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0ID0gJ2FkZCdcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmlkID0gYCR7dHlwZX1BZGRgXG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9wbHVzLnBuZ1wiXG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGV4dC5pbm5lckhUTUwgPSBgQWRkICR7dHlwZX1gXG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX1gKVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSlcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxlZnRQYW5lbCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ2xlZnQtcGFuZWwnXG5cbiAgICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybSgndGFzaycpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpIFxuICAgICAgICBsZXQgZGVzY3JpYnRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlscycpXG5cbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaWJ0aW9uSW5wdXQudmFsdWUsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgdGFzay5hZGRUb0xvY2FsU3RvcmFnZSgpXG5cbiAgICAgICAgY3JlYXRlSXRlbShsaXN0VGFzaywgdGFzaylcblxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBkZXNjcmlidGlvbklucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICB9KVxuXG4gICAgY29uc3QgbGlzdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxpc3RUYXNrLmlkID0gJ2xpc3RUYXNrJyBcblxuICAgIGF2YWlhbGJsZVRhc2sobGlzdFRhc2spXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0VGFzaylcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUFkZCgndGFzaycpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodFBhbmVsKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAncmlnaHQtcGFuZWwnXG5cbiAgICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybSgnaWRlYScpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkZWFUaXRsZScpIFxuICAgICAgICBsZXQgZGVzY3JpYnRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZGVhRGV0YWlscycpXG5cbiAgICAgICAgY29uc3QgaWRlYSA9IG5ldyBJZGVhKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaWJ0aW9uSW5wdXQudmFsdWUsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgaWRlYS5hZGRUb0xvY2FsU3RvcmFnZSgpXG5cbiAgICAgICAgY3JlYXRlSXRlbShsaXN0SWRlYSwgaWRlYSlcblxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBkZXNjcmlidGlvbklucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRlYScpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICB9KVxuXG4gICAgY29uc3QgbGlzdElkZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxpc3RJZGVhLmlkID0gJ2xpc3RJZGVhJyBcblxuICAgIGF2YWlsYWJsZUlkZWEobGlzdElkZWEpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0SWRlYSlcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUFkZCgnaWRlYScpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5sZXQgbmV3SXRlbSA9IChmdW5jdGlvbiBuZXdJdGVtICgpIHtcbiAgICBjb25zdCBiYXNlSUQgPSAnaXRlbSdcbiAgICBsZXQgY291bnQgPSAwXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlID0gJ2RpdicpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gYmFzZUlEXG4gICAgICAgIGl0ZW0uaWQgPSBjb3VudFxuICAgICAgICBjb3VudCArPSAxXG4gICAgICAgIHJldHVybiBpdGVtXG4gICAgfVxufSgpKVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSXRlbShsaXN0SXRlbSwgdGFzaykge1xuXG5cbiAgICBjb25zdCBpdGVtID0gbmV3SXRlbSgnZGl2JylcbiAgICBjb25zdCBpdGVtSUQgPSBOdW1iZXIoaXRlbS5pZClcblxuICAgIGNvbnN0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZG9uZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGRvbmUubmFtZSA9IFwiZG9uZVwiXG4gICAgZG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RvbmUnKVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG9uZSlcblxuICAgIGRvbmUuZGVmYXVsdENoZWNrZWQgPSB0YXNrLmRvbmUgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZVxuXG4gICAgLy9tYWtlIGJ1dHRvbiBkb25lIGNoYW5nZSBzdGF0dXNcbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLmJlRG9uZSgpXG4gICAgfSlcblxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dCcpXG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGgzLmlubmVySFRNTCA9IHRhc2sudGl0bGVcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGgzKVxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcC5pbm5lckhUTUwgPSB0YXNrLmRlc2NyaWJ0aW9uXG4gICAgdGV4dC5hcHBlbmRDaGlsZChwKVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIGxldCBjb21ibyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29tYm8uaWQgPSBcImNvbWJvXCJcblxuICAgIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN0YXIuY2xhc3NMaXN0ID0gJ3N0YXInIFxuICAgIGNvbnN0IHN0YXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgc3RhckJveC50eXBlID0gXCJjaGVja2JveFwiXG4gICAgc3RhckJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGltcG9ydGFudCR7aXRlbUlEfWApXG4gICAgY29uc3Qgc3RhckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHN0YXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBpbXBvcnRhbnQke2l0ZW1JRH1gKVxuICAgIHN0YXIuYXBwZW5kQ2hpbGQoc3RhckJveClcbiAgICBzdGFyLmFwcGVuZENoaWxkKHN0YXJMYWJlbClcbiAgICBjb21iby5hcHBlbmRDaGlsZChzdGFyKVxuXG4gICAgc3RhckJveC5kZWZhdWx0Q2hlY2tlZCA9IHRhc2suaW1wb3J0YW50ID09IHRydWUgPyB0cnVlIDogZmFsc2VcblxuICAgIHN0YXJCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2suYmVJbXBvcnRhbnQoKVxuICAgIH0pXG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlZGl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdENvbnRhaW5lcicpXG4gICAgY29uc3QgZWRpdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBlZGl0U3Bhbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZlcnQnKVxuICAgIGVkaXRTcGFuLmNsYXNzTGlzdCA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiXG4gICAgZWRpdFNwYW4udGV4dENvbnRlbnQgPSBcIm1vcmVfdmVydFwiXG4gICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0U3BhbilcbiAgICBjb21iby5hcHBlbmRDaGlsZChlZGl0KVxuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdC5jbGFzc0xpc3QgPSAnbGlzdE9wdGlvbidcbiAgICBjb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b25FZGl0LmNsYXNzTGlzdCA9ICdlZGl0J1xuICAgIGJ1dHRvbkVkaXQuaW5uZXJIVE1MID0gXCJFZGl0XCJcbiAgICBjb25zdCBidXR0b25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbkRlbGV0ZS5jbGFzc0xpc3QgPSAnZGV0ZWxlJ1xuICAgIGJ1dHRvbkRlbGV0ZS5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiXG4gICAgbGlzdC5hcHBlbmRDaGlsZChidXR0b25FZGl0KVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlKVxuICAgIGNvbWJvLmFwcGVuZENoaWxkKGxpc3QpXG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGNvbWJvKVxuXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH1cbiAgICB9KVxuXG4gICAgYnV0dG9uRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLmRlbGV0ZUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICB9KVxuICAgIC8vZWRpdCBidXR0b24gc2hvdWxkIGNyZWF0ZSBhbm90aGVyIGtpbmQgb2YgZm9ybVxuICAgIGJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGNyZWF0ZUVkaXRGb3JtKGxpc3RJdGVtKVxuXG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrJylcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRDYW5jZWwnKVxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKVxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gbnVsbFxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdCcpXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RWRpdCcpXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBoMy5pbm5lckhUTUxcbiAgICAgICAgbGV0IGRlc2NyaWJ0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsc0VkaXQnKVxuICAgICAgICBkZXNjcmlidGlvbklucHV0LnZhbHVlID0gcC5pbm5lckhUTUxcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaDMuaW5uZXJIVE1MID0gdGl0bGVJbnB1dC52YWx1ZVxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlidGlvbklucHV0LnZhbHVlXG4gICAgICAgICAgICB0YXNrLnJlTmFtZShgJHt0aXRsZUlucHV0LnZhbHVlfWApXG4gICAgICAgICAgICB0YXNrLnJlRGVzKGAke2Rlc2NyaWJ0aW9uSW5wdXQudmFsdWV9YClcbiAgICAgICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBudWxsXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybShsaXN0KSB7XG5cbiAgICBjb25zdCBwbGFjZSA9IGxpc3QuaWQgPT09ICdsaXN0SWRlYScgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpc2lkZWEnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzdGFzaycpXG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uaWQgPSBcImVkaXRUYXNrXCJcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXaGF0IHlvdSBnb25uYSBkbyA/JylcbiAgICBpbnB1dC5pZCA9IFwiaW5wdXRFZGl0XCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RldGFpbHMnKVxuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBcIkRldGFpbHM6XCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpXG5cbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMicpXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgJzUwJylcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGV0YWlscycpXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBbnl0aGluZyB0aGF0IG1ha2UgeW91IHVuZGVyc3RhbmQgd2h5IHlvdSBoYXZlIHRvIGRvIGl0JylcbiAgICB0ZXh0QXJlYS5pZCA9IFwiZGV0YWlsc0VkaXRcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dEFyZWEpXG5cbiAgICBjb25zdCB0d29CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHR3b0J1dHRvbi5pZCA9IFwiYnV0dG9uXCJcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdWJtaXQnKVxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0VkaXQnKVxuICAgIHN1Ym1pdC5pZCA9IFwiZWRpdFwiXG4gICAgdHdvQnV0dG9uLmFwcGVuZENoaWxkKHN1Ym1pdClcblxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYW5jZWwnKVxuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0NhbmNlbCcpXG4gICAgY2FuY2VsLmlkID0gXCJlZGl0Q2FuY2VsXCJcbiAgICB0d29CdXR0b24uYXBwZW5kQ2hpbGQoY2FuY2VsKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0d29CdXR0b24pXG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQoZm9ybSlcbn1cblxuZnVuY3Rpb24gYXZhaWFsYmxlVGFzayhsaXN0KSB7XG4gICAgbGV0IG15VGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKVxuICAgIGlmIChteVRhc2sgPT0gbnVsbCApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VGFzaycsIFwiW11cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sobXlUYXNrW2ldLnRpdGxlLCBteVRhc2tbaV0uZGVzY3JpYnRpb24sIG15VGFza1tpXS5kb25lLCBteVRhc2tbaV0uaW1wb3J0YW50LCBteVRhc2tbaV0uZGF0ZSkgICBcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0obGlzdCwgdGFzaylcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXZhaWxhYmxlSWRlYShsaXN0KSB7XG4gICAgbGV0IG15SWRlYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUlkZWEnKVxuICAgIGlmIChteUlkZWEgPT0gbnVsbCApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215SWRlYScsIFwiW11cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBteUlkZWEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUlkZWEnKSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUlkZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpZGVhID0gbmV3IElkZWEobXlJZGVhW2ldLnRpdGxlLCBteUlkZWFbaV0uZGVzY3JpYnRpb24sIG15SWRlYVtpXS5kb25lLCBteUlkZWFbaV0uaW1wb3J0YW50LCBteUlkZWFbaV0uZGF0ZSlcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW0obGlzdCwgaWRlYSlcbiAgICAgICAgfSAgIFxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kYXkodHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAncGFuZWwnXG5cbiAgICBjb25zdCBsZWZ0ID0gY3JlYXRlTGVmdFBhbmVsKClcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxlZnQpXG5cbiAgICBjb25zdCByaWdodCA9IGNyZWF0ZVJpZ2h0UGFuZWwoKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHQpXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9