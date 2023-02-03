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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: Raleway;\n  display: flex;\n  flex: 1 1 none;\n  min-width: calc(100vw + 17px);\n  overflow-x: scroll;\n  flex-direction: column;\n}\n\n\n\n.header {\n  height: 60px;\n  margin: 0;\n  background-color: #d49d6b;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n\n.navbar-toggler {\n  margin-left: 15px;\n  border-width: 0;\n  border-radius: 7%;\n  --bs-navbar-toggler-border-radius: 0;\n  --bs-navbar-toggler-focus-width: 0;\n  transition: 0.25s;\n}\n\n.navbar-toggler:hover,\n.test:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.home-button {\n  font-size: 1.5em;\n  color: rgba(0, 0, 0, 0.55);\n  height: 38px;\n  width: 54px;\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 7%;\n  transition: 0.25s;\n}\n\n.home-button:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.content {\n  display: flex;\n  height: 100%;\n  padding-top: 60px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  background-color: #f9fafb;\n  overflow: hidden;\n  transition: 0.5s;\n  width: 200px;\n  min-width: 200px;\n}\n\n.sidebar > div {\n  margin: 0 30px;\n  min-width: 140px;\n  border-radius: 3px;\n  padding-left: 15px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  transition: 0.25s;\n}\n\n.sidebar > div:hover {\n  background-color: rgba(128, 128, 128, 0.1);\n  cursor: pointer;\n}\n\nhr {\n  border-top: 1px solid #191919;\n  width: 120px;\n  margin: -15px 30px;\n}\n\n.main-content,\n.sidebar {\n  padding-top: 30px;\n  color: #1f2937;\n}\n\n.main-content {\n  display: flex;\n  flex: 1 1 none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-width: 1070px;\n  margin-left: 30px;\n}\n\n.todo {\n  display: flex;\n  flex: 1 1 none;\n  align-items: center;\n  width: 1100px;\n  background-color: #eee;\n  margin-bottom: 20px;\n  transition: 0.2s;\n}\n\n.todo > *:not(.priority-strip) {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.todo:hover {\n    transform:scale(1.005);\n    -webkit-box-shadow: 7px 7px 10px -6px rgba(0,0,0,0.4);\n}\n\n.priority-strip {\n    min-width: 4px;\n    height: 100%;\n    margin-right: 0.75rem;\n}\n\n.priority-low {\n    background-color: green;\n}\n\n.priority-medium {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin-right: 0.75rem;\n  background-color: transparent;\n  border: 2px solid #3ba395;\n  border-radius: 5px;\n  min-height: 20px;\n  min-width: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  position: relative;\n}\n\n.todo-checkbox:checked {\n  background-color: #3ba395;\n}\n\n.todo-checkbox:checked::before {\n  content: \"✔\";\n  font-size: 12px;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.todo-title {\n  margin-right: 3rem;\n  font-size: 18px;\n  width: 42rem;\n  overflow-x: scroll;\n}\n\n.todo-details,\n.todo-date {\n  margin-right: 2rem;\n}\n\n.todo-date {\n  color: #793d05;\n  font-size: 14px;\n}\n\n.todo-details {\n  color: #3ba395;\n  border-color: #3ba395;\n  background-color: transparent;\n  border: solid 1px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  transition: 0.2s;\n  padding: 3px 15px;\n}\n\n.todo-details:hover {\n  color: white;\n  background-color: #3ba395;\n  border-color: #3ba395;\n}\n\n.todo-edit,\n.todo-delete {\n  border-width: 0;\n  color: #793d05;\n  transition: 0.1s;\n}\n\n.todo-edit:hover,\n.todo-delete:hover {\n  cursor: pointer;\n  color: #0f766e;\n}\n\n.add-task {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n  bottom: 100px;\n  right: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 0;\n  border-radius: 50%;\n  background-color: #0f766e;\n  font-size: 36px;\n  color: #f9fafb;\n}\n\n.form {\n  z-index: 3;\n  box-shadow: 0 2rem 4rem rgb(0 0 0 / 60%);\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 65%;\n  min-width: 650px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.form-header {\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  font-size: 24px;\n  background-color: #d49d6b;\n  height: 55px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.form-body {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 40px;\n  background-color: white;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.form-title,\n.form-details {\n  resize: none;\n  outline: none;\n  border-width: 0;\n}\n\n.form-title {\n  font-size: 20px;\n  height: 40px;\n}\n\n.form-details {\n  height: 200px;\n  margin-top: -30px;\n  font-size: 16px;\n}\n\n.form-priority {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.add-button {\n  margin-left: auto;\n}\n\n.checked {\n  opacity: 0.3;\n}\n\n.checked.todo-title {\n  text-decoration: line-through;\n}\n\n.details-form {\n    background-color: rgba(128, 128, 128, 0.3);\n    color: #793d05;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 640px;\n    min-width: 500px;\n    position: relative;\n    border-radius: 3px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.details-close, .form-close {\n    position: absolute;\n    right: 25px;\n    top: 10px;\n    font-size: 24px;\n    font-weight: bolder;\n}\n\n.details-close:hover {\n    color: goldenrod;\n    cursor: pointer;\n}\n\n.form-close:hover {\n    color: #693705;\n    cursor: pointer;\n}\n\n.details-project {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-priority {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-date {\n    margin-right: 2rem;\n    font-weight: 700;\n}\n\n.details-description {\n    margin-right: 1.1rem;\n    font-weight: 700;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    mix-blend-mode: multiply;\n    background-repeat: repeat;\n    pointer-events: none;\n}\n\n.overlay.enabled{\n  min-width: calc(100vw + 17px);\n  backdrop-filter: blur(6px);\n  z-index: 2;\n  margin-top: -500px;\n\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  font-size: 20px;\n  color: #191919;\n  background-color: #f9fafb;\n}\n\n.fa-github {\n  color: #191919;\n  /* color: #f9fafb; */\n  font-size: 24px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: Raleway;\n  display: flex;\n  flex: 1 1 none;\n  min-width: calc(100vw + 17px);\n  overflow-x: scroll;\n  flex-direction: column;\n}\n\n\n\n.header {\n  height: 60px;\n  margin: 0;\n  background-color: #d49d6b;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n\n.navbar-toggler {\n  margin-left: 15px;\n  border-width: 0;\n  border-radius: 7%;\n  --bs-navbar-toggler-border-radius: 0;\n  --bs-navbar-toggler-focus-width: 0;\n  transition: 0.25s;\n}\n\n.navbar-toggler:hover,\n.test:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.home-button {\n  font-size: 1.5em;\n  color: rgba(0, 0, 0, 0.55);\n  height: 38px;\n  width: 54px;\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 7%;\n  transition: 0.25s;\n}\n\n.home-button:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.content {\n  display: flex;\n  height: 100%;\n  padding-top: 60px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  background-color: #f9fafb;\n  overflow: hidden;\n  transition: 0.5s;\n  width: 200px;\n  min-width: 200px;\n}\n\n.sidebar > div {\n  margin: 0 30px;\n  min-width: 140px;\n  border-radius: 3px;\n  padding-left: 15px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  transition: 0.25s;\n}\n\n.sidebar > div:hover {\n  background-color: rgba(128, 128, 128, 0.1);\n  cursor: pointer;\n}\n\nhr {\n  border-top: 1px solid #191919;\n  width: 120px;\n  margin: -15px 30px;\n}\n\n.main-content,\n.sidebar {\n  padding-top: 30px;\n  color: #1f2937;\n}\n\n.main-content {\n  display: flex;\n  flex: 1 1 none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-width: 1070px;\n  margin-left: 30px;\n}\n\n.todo {\n  display: flex;\n  flex: 1 1 none;\n  align-items: center;\n  width: 1100px;\n  background-color: #eee;\n  margin-bottom: 20px;\n  transition: 0.2s;\n}\n\n.todo > *:not(.priority-strip) {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.todo:hover {\n    transform:scale(1.005);\n    -webkit-box-shadow: 7px 7px 10px -6px rgba(0,0,0,0.4);\n}\n\n.priority-strip {\n    min-width: 4px;\n    height: 100%;\n    margin-right: 0.75rem;\n}\n\n.priority-low {\n    background-color: green;\n}\n\n.priority-medium {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin-right: 0.75rem;\n  background-color: transparent;\n  border: 2px solid #3ba395;\n  border-radius: 5px;\n  min-height: 20px;\n  min-width: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  position: relative;\n}\n\n.todo-checkbox:checked {\n  background-color: #3ba395;\n}\n\n.todo-checkbox:checked::before {\n  content: \"✔\";\n  font-size: 12px;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.todo-title {\n  margin-right: 3rem;\n  font-size: 18px;\n  width: 42rem;\n  overflow-x: scroll;\n}\n\n.todo-details,\n.todo-date {\n  margin-right: 2rem;\n}\n\n.todo-date {\n  color: #793d05;\n  font-size: 14px;\n}\n\n.todo-details {\n  color: #3ba395;\n  border-color: #3ba395;\n  background-color: transparent;\n  border: solid 1px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  transition: 0.2s;\n  padding: 3px 15px;\n}\n\n.todo-details:hover {\n  color: white;\n  background-color: #3ba395;\n  border-color: #3ba395;\n}\n\n.todo-edit,\n.todo-delete {\n  border-width: 0;\n  color: #793d05;\n  transition: 0.1s;\n}\n\n.todo-edit:hover,\n.todo-delete:hover {\n  cursor: pointer;\n  color: #0f766e;\n}\n\n.add-task {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n  bottom: 100px;\n  right: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 0;\n  border-radius: 50%;\n  background-color: #0f766e;\n  font-size: 36px;\n  color: #f9fafb;\n}\n\n.form {\n  z-index: 3;\n  box-shadow: 0 2rem 4rem rgb(0 0 0 / 60%);\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 65%;\n  min-width: 650px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.form-header {\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  font-size: 24px;\n  background-color: #d49d6b;\n  height: 55px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.form-body {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 40px;\n  background-color: white;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.form-title,\n.form-details {\n  resize: none;\n  outline: none;\n  border-width: 0;\n}\n\n.form-title {\n  font-size: 20px;\n  height: 40px;\n}\n\n.form-details {\n  height: 200px;\n  margin-top: -30px;\n  font-size: 16px;\n}\n\n.form-priority {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.add-button {\n  margin-left: auto;\n}\n\n.checked {\n  opacity: 0.3;\n}\n\n.checked.todo-title {\n  text-decoration: line-through;\n}\n\n.details-form {\n    background-color: rgba(128, 128, 128, 0.3);\n    color: #793d05;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 640px;\n    min-width: 500px;\n    position: relative;\n    border-radius: 3px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.details-close, .form-close {\n    position: absolute;\n    right: 25px;\n    top: 10px;\n    font-size: 24px;\n    font-weight: bolder;\n}\n\n.details-close:hover {\n    color: goldenrod;\n    cursor: pointer;\n}\n\n.form-close:hover {\n    color: #693705;\n    cursor: pointer;\n}\n\n.details-project {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-priority {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-date {\n    margin-right: 2rem;\n    font-weight: 700;\n}\n\n.details-description {\n    margin-right: 1.1rem;\n    font-weight: 700;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    mix-blend-mode: multiply;\n    background-repeat: repeat;\n    pointer-events: none;\n}\n\n.overlay.enabled{\n  min-width: calc(100vw + 17px);\n  backdrop-filter: blur(6px);\n  z-index: 2;\n  margin-top: -500px;\n\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  font-size: 20px;\n  color: #191919;\n  background-color: #f9fafb;\n}\n\n.fa-github {\n  color: #191919;\n  /* color: #f9fafb; */\n  font-size: 24px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebarToggler)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const sidebar = document.querySelector(".sidebar");

function hideSidebar() {
  sidebar.style.minWidth = "0";
  sidebar.style.width = "0";
  sidebar.classList.add("hidden");
}

function showSidebar() {
  sidebar.style.minWidth = "200px";
  sidebar.style.width = "200px";
  sidebar.classList.remove("hidden");
}

//Determines whether to hide or show sidebar.
function sidebarToggler() {
  if (sidebar.classList.contains("hidden")) {
    showSidebar();
  } else {
    hideSidebar();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZTtBQUNmO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIG5vbmU7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwdncgKyAxN3B4KTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OWQ2YjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlciB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDclO1xcbiAgLS1icy1uYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAwO1xcbiAgLS1icy1uYXZiYXItdG9nZ2xlci1mb2N1cy13aWR0aDogMDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIsXFxuLnRlc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG59XFxuXFxuLmhvbWUtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gIGhlaWdodDogMzhweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItcmFkaXVzOiA3JTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4uaG9tZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2IHtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAgbWluLXdpZHRoOiAxNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxOTE5MTk7XFxuICB3aWR0aDogMTIwcHg7XFxuICBtYXJnaW46IC0xNXB4IDMwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQsXFxuLnNpZGViYXIge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBjb2xvcjogIzFmMjkzNztcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDcwcHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50b2RvID4gKjpub3QoLnByaW9yaXR5LXN0cmlwKSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDA1KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggN3B4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbi5wcmlvcml0eS1zdHJpcCB7XFxuICAgIG1pbi13aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICBtaW4td2lkdGg6IDIwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1jaGVja2JveDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxufVxcblxcbi50b2RvLWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyUXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiA0MnJlbTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyxcXG4udG9kby1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICBjb2xvcjogIzc5M2QwNTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICBjb2xvcjogIzNiYTM5NTtcXG4gIGJvcmRlci1jb2xvcjogIzNiYTM5NTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBwYWRkaW5nOiAzcHggMTVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlsczpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xcbiAgYm9yZGVyLWNvbG9yOiAjM2JhMzk1O1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLWRlbGV0ZSB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBjb2xvcjogIzc5M2QwNTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi50b2RvLWVkaXQ6aG92ZXIsXFxuLnRvZG8tZGVsZXRlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMGY3NjZlO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwMHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNzY2ZTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGNvbG9yOiAjZjlmYWZiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICB6LWluZGV4OiAzO1xcbiAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiKDAgMCAwIC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2NSU7XFxuICBtaW4td2lkdGg6IDY1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OWQ2YjtcXG4gIGhlaWdodDogNTVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZm9ybS10aXRsZSxcXG4uZm9ybS1kZXRhaWxzIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmZvcm0tZGV0YWlscyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mb3JtLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uY2hlY2tlZC50b2RvLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGV0YWlscy1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xcbiAgICBjb2xvcjogIzc5M2QwNTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogNjQwcHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZGV0YWlscy1jbG9zZSwgLmZvcm0tY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmRldGFpbHMtY2xvc2U6aG92ZXIge1xcbiAgICBjb2xvcjogZ29sZGVucm9kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWNsb3NlOmhvdmVyIHtcXG4gICAgY29sb3I6ICM2OTM3MDU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldGFpbHMtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMy4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1wcmlvcml0eSB7XFxuICAgIG1hcmdpbi1yaWdodDogMy4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheS5lbmFibGVke1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMHZ3ICsgMTdweCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gIHotaW5kZXg6IDI7XFxuICBtYXJnaW4tdG9wOiAtNTAwcHg7XFxuXFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICAvKiBjb2xvcjogI2Y5ZmFmYjsgKi9cXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOzs7O0FBSUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULHlCQUF5QjtFQUN6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b0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIG5vbmU7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwdncgKyAxN3B4KTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OWQ2YjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlciB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDclO1xcbiAgLS1icy1uYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAwO1xcbiAgLS1icy1uYXZiYXItdG9nZ2xlci1mb2N1cy13aWR0aDogMDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIsXFxuLnRlc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG59XFxuXFxuLmhvbWUtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gIGhlaWdodDogMzhweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItcmFkaXVzOiA3JTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4uaG9tZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2IHtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAgbWluLXdpZHRoOiAxNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxOTE5MTk7XFxuICB3aWR0aDogMTIwcHg7XFxuICBtYXJnaW46IC0xNXB4IDMwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQsXFxuLnNpZGViYXIge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBjb2xvcjogIzFmMjkzNztcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDcwcHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50b2RvID4gKjpub3QoLnByaW9yaXR5LXN0cmlwKSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDA1KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggN3B4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbi5wcmlvcml0eS1zdHJpcCB7XFxuICAgIG1pbi13aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICBtaW4td2lkdGg6IDIwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1jaGVja2JveDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxufVxcblxcbi50b2RvLWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyUXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiA0MnJlbTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyxcXG4udG9kby1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICBjb2xvcjogIzc5M2QwNTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICBjb2xvcjogIzNiYTM5NTtcXG4gIGJvcmRlci1jb2xvcjogIzNiYTM5NTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBwYWRkaW5nOiAzcHggMTVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlsczpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xcbiAgYm9yZGVyLWNvbG9yOiAjM2JhMzk1O1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLWRlbGV0ZSB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBjb2xvcjogIzc5M2QwNTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi50b2RvLWVkaXQ6aG92ZXIsXFxuLnRvZG8tZGVsZXRlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMGY3NjZlO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwMHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNzY2ZTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGNvbG9yOiAjZjlmYWZiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICB6LWluZGV4OiAzO1xcbiAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiKDAgMCAwIC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2NSU7XFxuICBtaW4td2lkdGg6IDY1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OWQ2YjtcXG4gIGhlaWdodDogNTVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZm9ybS10aXRsZSxcXG4uZm9ybS1kZXRhaWxzIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmZvcm0tZGV0YWlscyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mb3JtLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uY2hlY2tlZC50b2RvLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGV0YWlscy1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xcbiAgICBjb2xvcjogIzc5M2QwNTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogNjQwcHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZGV0YWlscy1jbG9zZSwgLmZvcm0tY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmRldGFpbHMtY2xvc2U6aG92ZXIge1xcbiAgICBjb2xvcjogZ29sZGVucm9kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWNsb3NlOmhvdmVyIHtcXG4gICAgY29sb3I6ICM2OTM3MDU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldGFpbHMtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMy4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1wcmlvcml0eSB7XFxuICAgIG1hcmdpbi1yaWdodDogMy4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheS5lbmFibGVke1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMHZ3ICsgMTdweCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gIHotaW5kZXg6IDI7XFxuICBtYXJnaW4tdG9wOiAtNTAwcHg7XFxuXFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICAvKiBjb2xvcjogI2Y5ZmFmYjsgKi9cXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblxuZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XG4gIHNpZGViYXIuc3R5bGUubWluV2lkdGggPSBcIjBcIjtcbiAgc2lkZWJhci5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHNob3dTaWRlYmFyKCkge1xuICBzaWRlYmFyLnN0eWxlLm1pbldpZHRoID0gXCIyMDBweFwiO1xuICBzaWRlYmFyLnN0eWxlLndpZHRoID0gXCIyMDBweFwiO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbi8vRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGhpZGUgb3Igc2hvdyBzaWRlYmFyLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhclRvZ2dsZXIoKSB7XG4gIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgIHNob3dTaWRlYmFyKCk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZVNpZGViYXIoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9