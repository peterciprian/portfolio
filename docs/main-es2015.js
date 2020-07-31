(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/box/box.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/box/box.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\r\n  <ng-content></ng-content>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"linkButton\" (click)=\"navigate()\">{{content}}</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"{{imageSrc}}\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{title}}</h5>\r\n    <p class=\"card-text\">{{text}}</p>\r\n    <ul class=\"card-text\">Tech stack:\r\n      <li *ngFor=\"let tech of list\">{{tech}}</li>\r\n    </ul>\r\n    <app-button class=\"m-3\" [link]=\"link\" [content]=\"buttonText\"></app-button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/frame/frame.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/frame/frame.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"frame\">\r\n  <ng-content></ng-content>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-icon/social-icon.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-icon/social-icon.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>social-icon works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n  <div class=\"row\">\r\n      <div id=\"social\" class=\"col-8 offset-2\">\r\n          <div class=\"row justify-content-center\">\r\n              <div class=\"ico\">\r\n                  <a href=\"mailto:peterciprian@gmail.com\" target=\"_top\">\r\n                      <div class=\"icon gm\">\r\n                          <i class=\"fas fa-at email fa-lg\"></i>\r\n                      </div>\r\n                  </a>\r\n              </div>\r\n              <div class=\"ico\">\r\n                  <a href=\"http://www.facebook.com/peterciprian\" target=\"_blank\">\r\n                      <div class=\"icon fb\">\r\n                          <i class=\"fab fa-facebook-f fa-lg\"></i>\r\n                      </div>\r\n                  </a>\r\n              </div>\r\n              <div class=\"ico\">\r\n                  <a href=\"http://github.com/peterciprian\" target=\"_blank\">\r\n                      <div class=\"icon gh\">\r\n                          <i class=\"fab fa-github fa-lg\"></i>\r\n                      </div>\r\n                  </a>\r\n              </div>\r\n              <div class=\"ico\">\r\n                  <a href=\"https://www.linkedin.com/in/olahpeterciprian/\" target=\"_blank\">\r\n                      <div class=\"icon li\">\r\n                          <i class=\"fab fa-linkedin-in fa-lg\"></i>\r\n                      </div>\r\n                  </a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"nav-container d-flex flex-row align-items-center\">\r\n    <div class=\"nav-drop\">\r\n      <a routerLink=\"/home\">\r\n        <img src=\"assets/img/camel.png\" alt=\"OPC\">\r\n      </a>\r\n    </div>\r\n    <div class=\"nav-drop\">\r\n      <a routerLinkActive=\"active\" routerLink=\"/about\">About me</a>\r\n    </div>\r\n    <div class=\"nav-drop\">\r\n      <a routerLinkActive=\"active\" routerLink=\"/projects\">Projects</a>\r\n    </div>\r\n  </div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutModule) },
    { path: 'projects', loadChildren: () => __webpack_require__.e(/*! import() | projects-projects-module */ "projects-projects-module").then(__webpack_require__.bind(null, /*! ./projects/projects.module */ "./src/app/projects/projects.module.ts")).then(m => m.ProjectsModule) },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/box/box.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/box/box.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.box {\n  cursor: default;\n  background-color: #454851;\n  box-shadow: 1px 1px 5px #2f1b25;\n  font-weight: 800;\n  padding: 8px 12px;\n  border-radius: 8px;\n  align-items: center;\n  min-height: 32px;\n  height: auto;\n  width: auto;\n  opacity: 0.8;\n  margin: 4px;\n}\n\n.box:hover {\n  color: #ffa400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3gvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFx0ZXh0LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm94L2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib3gvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtYWluLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm94L0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXHN0eWxlc1xcY29sb3Iuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib3gvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm94XFxib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FDVEE7RUFDRSxZQUFBO0VBQ0EseUJDTFk7QUZpQmQ7O0FDVEE7RUFDRSxZQVRjO0VBVWQsK0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjs7QUNSQTtFQUNFLFlBaEJjO0VBaUJkLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFVGOztBR3pDQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUg0Q0Y7O0FHekNBO0VBQ0UsY0RqQmE7QUY2RGYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JveC9ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIG1vbm9zcGFjZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuI215QnRuIHtcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uYm94IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ODUxO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMmYxYjI1O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzMnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBvcGFjaXR5OiAwLjg7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4uYm94OmhvdmVyIHtcbiAgY29sb3I6ICNmZmE0MDA7XG59IiwiQGltcG9ydCAnLi9jb2xvci5zY3NzJztcclxuQGltcG9ydCAnLi90ZXh0LnNjc3MnO1xyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiA1MHB4O1xyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZVxyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcclxuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjtcclxuICBmb250LXNpemU6IDEzcHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRjb2xvci1wdXJwbGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyO1xyXG59XHJcblxyXG4jbXlCdG4ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgei1pbmRleDogOTlcclxufVxyXG4iLCIkY29sb3ItcHVycGxlOiAjMmYxYjI1O1xyXG4kY29sb3IteWVsbG93OiAjZmZhNDAwO1xyXG4kY29sb3ItYmx1ZTogIzVkNzM3ZTtcclxuJGNvbG9yLXdoaXRlOiAjZmNmY2ZjO1xyXG4kY29sb3ItZ3JheTogIzQ1NDg1MTtcclxuJGNvbG9yLWxpZ2h0OiAjREFEREQ4O1xyXG4kY29sb3ItZ3JlZW46ICNEM0Y5QjU7XHJcbiRjb2xvci1yZWQ6ICNCMjZFNjM7XHJcbiIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2Nzcyc7XHJcblxyXG4uYm94IHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggJGNvbG9yLXB1cnBsZTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIG1hcmdpbjogNHB4XHJcbn1cclxuXHJcbi5ib3g6aG92ZXIge1xyXG4gIGNvbG9yOiAkY29sb3IteWVsbG93O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/box/box.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/box/box.component.ts ***!
  \*************************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoxComponent = class BoxComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/box/box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./box.component.scss */ "./src/app/components/box/box.component.scss")).default]
    })
], BoxComponent);



/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\nbutton.linkButton {\n  color: #2f1b25;\n  background-color: #DADDD8;\n  border-color: #2f1b25;\n  border: 1px solid;\n  padding: 4px;\n  border-radius: 4px;\n  width: 200px;\n  height: 60px;\n  box-shadow: 0 2px #ffa400;\n}\n\nbutton.linkButton:active {\n  outline: none;\n  border: 1px solid;\n  box-shadow: 0 0px #ffa400;\n  transform: translateY(2px);\n}\n\nbutton.linkButton:hover {\n  color: #ffa400;\n  background-color: #2f1b25;\n  border-color: #2f1b25;\n  opacity: 0.75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFx0ZXh0LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtYWluLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXHN0eWxlc1xcY29sb3Iuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FDVEE7RUFDRSxZQUFBO0VBQ0EseUJDTFk7QUZpQmQ7O0FDVEE7RUFDRSxZQVRjO0VBVWQsK0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjs7QUNSQTtFQUNFLFlBaEJjO0VBaUJkLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFVGOztBR3pDQTtFQUNFLGNESGE7RUNJYix5QkRDWTtFQ0FaLHFCRExhO0VDTWIsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FINENGOztBR3pDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUg0Q0Y7O0FHekNBO0VBQ0UsY0RyQmE7RUNzQmIseUJEdkJhO0VDd0JiLHFCRHhCYTtFQ3lCYixhQUFBO0FINENGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuYnV0dG9uLmxpbmtCdXR0b24ge1xuICBjb2xvcjogIzJmMWIyNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBREREODtcbiAgYm9yZGVyLWNvbG9yOiAjMmYxYjI1O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAjZmZhNDAwO1xufVxuXG5idXR0b24ubGlua0J1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm94LXNoYWRvdzogMCAwcHggI2ZmYTQwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5cbmJ1dHRvbi5saW5rQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmE0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjFiMjU7XG4gIGJvcmRlci1jb2xvcjogIzJmMWIyNTtcbiAgb3BhY2l0eTogMC43NTtcbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3RleHQuc2Nzcyc7XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNTBweDtcclxuJGZvb3Rlci1oZWlnaHQ6IDUwcHg7XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlXHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XHJcbn1cclxuXHJcbiNteUJ0biB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OVxyXG59XHJcbiIsIiRjb2xvci1wdXJwbGU6ICMyZjFiMjU7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XHJcbiRjb2xvci1ibHVlOiAjNWQ3MzdlO1xyXG4kY29sb3Itd2hpdGU6ICNmY2ZjZmM7XHJcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xyXG4kY29sb3ItbGlnaHQ6ICNEQURERDg7XHJcbiRjb2xvci1ncmVlbjogI0QzRjlCNTtcclxuJGNvbG9yLXJlZDogI0IyNkU2MztcclxuIiwiQGltcG9ydCAnc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbmJ1dHRvbi5saW5rQnV0dG9uIHtcclxuICBjb2xvcjogJGNvbG9yLXB1cnBsZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHVycGxlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAkY29sb3IteWVsbG93O1xyXG59XHJcblxyXG5idXR0b24ubGlua0J1dHRvbjphY3RpdmUge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggJGNvbG9yLXllbGxvdztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG5cclxuYnV0dG9uLmxpbmtCdXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAkY29sb3IteWVsbG93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wdXJwbGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHVycGxlO1xyXG4gIG9wYWNpdHk6IC43NTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ButtonComponent = class ButtonComponent {
    constructor(router) {
        this.router = router;
    }
    navigate() {
        if (this.link.startsWith('/')) {
            this.router.navigate([this.link]);
        }
        else {
            window.open(this.link, '_blank');
        }
    }
};
ButtonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "content", void 0);
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")).default]
    })
], ButtonComponent);



/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.card {\n  background-color: #DADDD8;\n  box-shadow: 5px 5px 10px #2f1b25;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXHN0eWxlc1xcdGV4dC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXHN0eWxlc1xcbWFpbi5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb2xvci5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7Ozs7OztFQU1FLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QUNUQTtFQUNFLFlBQUE7RUFDQSx5QkNMWTtBRmlCZDs7QUNUQTtFQUNFLFlBVGM7RUFVZCwrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBRFdGOztBQ1JBO0VBQ0UsWUFoQmM7RUFpQmQsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRFdGOztBQ1BBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEVUY7O0FHekNBO0VBQ0UseUJERVk7RUNEWixnQ0FBQTtBSDRDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFEREQ4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzJmMWIyNTtcbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3RleHQuc2Nzcyc7XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNTBweDtcclxuJGZvb3Rlci1oZWlnaHQ6IDUwcHg7XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlXHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XHJcbn1cclxuXHJcbiNteUJ0biB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OVxyXG59XHJcbiIsIiRjb2xvci1wdXJwbGU6ICMyZjFiMjU7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XHJcbiRjb2xvci1ibHVlOiAjNWQ3MzdlO1xyXG4kY29sb3Itd2hpdGU6ICNmY2ZjZmM7XHJcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xyXG4kY29sb3ItbGlnaHQ6ICNEQURERDg7XHJcbiRjb2xvci1ncmVlbjogI0QzRjlCNTtcclxuJGNvbG9yLXJlZDogI0IyNkU2MztcclxuIiwiQGltcG9ydCAnc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICRjb2xvci1wdXJwbGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "imageSrc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "list", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "buttonText", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/components/frame/frame.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/frame/frame.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.frame {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background-color: #DADDD8;\n  box-shadow: 3px 3px 8px #2f1b25;\n  border-radius: 5px;\n  width: auto;\n  padding: 20px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmFtZS9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHRleHQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mcmFtZS9mcmFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mcmFtZS9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1haW4uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mcmFtZS9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbG9yLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZnJhbWUvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZnJhbWVcXGZyYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTs7Ozs7O0VBTUUsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBQ1RBO0VBQ0UsWUFBQTtFQUNBLHlCQ0xZO0FGaUJkOztBQ1RBO0VBQ0UsWUFUYztFQVVkLCtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FEV0Y7O0FDUkE7RUFDRSxZQWhCYztFQWlCZCwrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FEV0Y7O0FDUEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURVRjs7QUd6Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJERFk7RUNFWiwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FINENGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mcmFtZS9mcmFtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jbXlCdG4ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5mcmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBREREODtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggIzJmMWIyNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4O1xufSIsIkBpbXBvcnQgJy4vY29sb3Iuc2Nzcyc7XHJcbkBpbXBvcnQgJy4vdGV4dC5zY3NzJztcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xyXG4kZm9vdGVyLWhlaWdodDogNTBweDtcclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGVcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRjb2xvci1wdXJwbGU7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XHJcbiAgZm9udC1zaXplOiAxM3B0O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjtcclxufVxyXG5cclxuI215QnRuIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDk5XHJcbn1cclxuIiwiJGNvbG9yLXB1cnBsZTogIzJmMWIyNTtcclxuJGNvbG9yLXllbGxvdzogI2ZmYTQwMDtcclxuJGNvbG9yLWJsdWU6ICM1ZDczN2U7XHJcbiRjb2xvci13aGl0ZTogI2ZjZmNmYztcclxuJGNvbG9yLWdyYXk6ICM0NTQ4NTE7XHJcbiRjb2xvci1saWdodDogI0RBREREODtcclxuJGNvbG9yLWdyZWVuOiAjRDNGOUI1O1xyXG4kY29sb3ItcmVkOiAjQjI2RTYzO1xyXG4iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuLmZyYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAkY29sb3ItcHVycGxlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/frame/frame.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/frame/frame.component.ts ***!
  \*****************************************************/
/*! exports provided: FrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameComponent", function() { return FrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrameComponent = class FrameComponent {
    constructor() { }
    ngOnInit() {
    }
};
FrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frame',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./frame.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/frame/frame.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./frame.component.scss */ "./src/app/components/frame/frame.component.scss")).default]
    })
], FrameComponent);



/***/ }),

/***/ "./src/app/components/social-icon/social-icon.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-icon/social-icon.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsLWljb24vc29jaWFsLWljb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/social-icon/social-icon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/social-icon/social-icon.component.ts ***!
  \*****************************************************************/
/*! exports provided: SocialIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIconComponent", function() { return SocialIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialIconComponent = class SocialIconComponent {
    constructor() { }
    ngOnInit() {
    }
};
SocialIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-icon/social-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-icon.component.scss */ "./src/app/components/social-icon/social-icon.component.scss")).default]
    })
], SocialIconComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  position: relative;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n\n.ico {\n  padding: 0;\n  margin: 2px 5px;\n}\n\n.icon > i {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  transform: translate(-50%, -50%);\n  color: whitesmoke;\n}\n\n.fb {\n  background-color: rgba(66, 103, 178, 0.9);\n}\n\n.li {\n  background-color: rgba(0, 119, 181, 0.9);\n}\n\n.gh {\n  background-color: rgba(36, 41, 46, 0.9);\n}\n\n.gm {\n  background-color: rgba(206, 62, 46, 0.9);\n}\n\n.fb:hover {\n  background-color: #4267b2;\n}\n\n.li:hover {\n  background-color: #0077b5;\n}\n\n.gh:hover {\n  background-color: #24292e;\n}\n\n.gm:hover {\n  background-color: #ce3e2e;\n}\n\na {\n  color: #0c0c0c;\n  cursor: pointer;\n}\n\na:hover {\n  text-decoration: none;\n  color: #0c0c0c;\n  cursor: pointer;\n}\n\n.social {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5pY28ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAycHggNXB4O1xyXG59XHJcblxyXG4uaWNvbj5pIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5mYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgMTAzLCAxNzgsIDAuOSk7XHJcbn1cclxuXHJcbi5saSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTksIDE4MSwgMC45KTtcclxufVxyXG5cclxuLmdoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCA0MSwgNDYsIDAuOSk7XHJcbn1cclxuXHJcbi5nbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDYyLCA0NiwgMC45KTtcclxufVxyXG5cclxuLmZiOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N2IyO1xyXG59XHJcblxyXG4ubGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3YjU7XHJcbn1cclxuXHJcbi5naDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcclxufVxyXG5cclxuLmdtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UzZTJlO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMTIsIDEyLCAxMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc29jaWFsIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiIsIi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pY28ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDJweCA1cHg7XG59XG5cbi5pY29uID4gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5mYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDEwMywgMTc4LCAwLjkpO1xufVxuXG4ubGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExOSwgMTgxLCAwLjkpO1xufVxuXG4uZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCA0MSwgNDYsIDAuOSk7XG59XG5cbi5nbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCA2MiwgNDYsIDAuOSk7XG59XG5cbi5mYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjI7XG59XG5cbi5saTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3YjU7XG59XG5cbi5naDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG5cbi5nbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTNlMmU7XG59XG5cbmEge1xuICBjb2xvcjogIzBjMGMwYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzBjMGMwYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc29jaWFsIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.nav-container {\n  height: 50px;\n  color: #2f1b25 !important;\n  background-color: #DADDD8;\n  box-shadow: 0 2px #ffa400;\n}\n\n.nav-container .nav-drop {\n  margin: 12px;\n}\n\n.nav-container .nav-drop img {\n  max-height: 40px;\n}\n\n.nav-container .nav-drop a {\n  text-decoration: none;\n  color: #2f1b25;\n}\n\n.nav-container .nav-drop:active a, .nav-container .nav-drop a.active {\n  color: #ffa400 !important;\n  outline: none;\n}\n\n.nav-container .nav-drop:hover a {\n  color: #454851 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXHN0eWxlc1xcdGV4dC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtYWluLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbG9yLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7Ozs7OztFQU1FLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QUNUQTtFQUNFLFlBQUE7RUFDQSx5QkNMWTtBRmlCZDs7QUNUQTtFQUNFLFlBVGM7RUFVZCwrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBRFdGOztBQ1JBO0VBQ0UsWUFoQmM7RUFpQmQsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRFdGOztBQ1BBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEVUY7O0FHekNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBSDRDRjs7QUcxQ0U7RUFDRSxZQUFBO0FINENKOztBRzFDSTtFQUNFLGdCQUFBO0FINENOOztBR3pDSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBSDJDTjs7QUd4Q0k7RUFFRSx5QkFBQTtFQUNBLGFBQUE7QUh5Q047O0FHdENJO0VBQ0UseUJBQUE7QUh3Q04iLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjMmYxYjI1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQURERDg7XG4gIGJveC1zaGFkb3c6IDAgMnB4ICNmZmE0MDA7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRyb3Age1xuICBtYXJnaW46IDEycHg7XG59XG4ubmF2LWNvbnRhaW5lciAubmF2LWRyb3AgaW1nIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbn1cbi5uYXYtY29udGFpbmVyIC5uYXYtZHJvcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJmMWIyNTtcbn1cbi5uYXYtY29udGFpbmVyIC5uYXYtZHJvcDphY3RpdmUgYSwgLm5hdi1jb250YWluZXIgLm5hdi1kcm9wIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmE0MDAgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXYtY29udGFpbmVyIC5uYXYtZHJvcDpob3ZlciBhIHtcbiAgY29sb3I6ICM0NTQ4NTEgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3RleHQuc2Nzcyc7XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNTBweDtcclxuJGZvb3Rlci1oZWlnaHQ6IDUwcHg7XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlXHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XHJcbn1cclxuXHJcbiNteUJ0biB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OVxyXG59XHJcbiIsIiRjb2xvci1wdXJwbGU6ICMyZjFiMjU7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XHJcbiRjb2xvci1ibHVlOiAjNWQ3MzdlO1xyXG4kY29sb3Itd2hpdGU6ICNmY2ZjZmM7XHJcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xyXG4kY29sb3ItbGlnaHQ6ICNEQURERDg7XHJcbiRjb2xvci1ncmVlbjogI0QzRjlCNTtcclxuJGNvbG9yLXJlZDogI0IyNkU2MztcclxuIiwiQGltcG9ydCAnc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJztcblxuLm5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICBjb2xvcjogJGNvbG9yLXB1cnBsZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4ICRjb2xvci15ZWxsb3c7XG5cbiAgLm5hdi1kcm9wIHtcbiAgICBtYXJnaW46IDEycHg7XG5cbiAgICBpbWcge1xuICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAmIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMyZjFiMjU7XG4gICAgfVxuXG4gICAgJjphY3RpdmUgYSxcbiAgICAmIGEuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkY29sb3IteWVsbG93ICFpbXBvcnRhbnQ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIgYSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxufVxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/social-icon/social-icon.component */ "./src/app/components/social-icon/social-icon.component.ts");
/* harmony import */ var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/frame/frame.component */ "./src/app/components/frame/frame.component.ts");
/* harmony import */ var _components_box_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/box/box.component */ "./src/app/components/box/box.component.ts");








/**
 * Components
 */
const sharedComponents = [
    _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
    _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
    _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_5__["SocialIconComponent"],
    _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_6__["FrameComponent"],
    _components_box_box_component__WEBPACK_IMPORTED_MODULE_7__["BoxComponent"]
];
/**
 * Services
 */
const sharedServices = [];
/**
 * Directives
 */
const sharedDirectives = [];
/**
 * Modules
 */
const sharedModules = [];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [sharedComponents, sharedDirectives],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            sharedModules
        ],
        exports: [
            sharedComponents, sharedDirectives, sharedModules
        ],
        providers: [
            sharedServices
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OPC\Documents\_websites\portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map