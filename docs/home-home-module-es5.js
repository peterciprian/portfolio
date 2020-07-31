function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"home d-flex flex-column justify-content-center align-self-center align-items-center\">\r\n  <h1 class=\"mx-auto my-5\">Hi, I am Ciprian</h1>\r\n  <div class=\"subtitle d-flex flex-wrap mt-3 mb-5\">\r\n    <h3 class=\"mx-auto\">Web&nbsp;/&nbsp;</h3>\r\n    <h3 class=\"mx-auto\">Frontend&nbsp;/&nbsp;</h3>\r\n    <h3 class=\"mx-auto\">Angular2+ developer</h3>\r\n  </div>\r\n  <div class=\"d-flex flex-row flex-wrap justify-content-around\">\r\n    <app-button class=\"m-3\" [link]=\"'/about'\" [content]=\"'Know more about me!'\"></app-button>\r\n    <app-button class=\"m-3\" [link]=\"'/projects'\" [content]=\"'Have a look at my projects!'\"></app-button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.home {\n  color: #2f1b25;\n  min-height: calc(100vh - 50px - 50px);\n}\n\n.subtitle {\n  flex-direction: row;\n}\n\n@media only screen and (max-width: 580px) {\n  .subtitle {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHRleHQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXHN0eWxlc1xcbWFpbi5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xcT1BDXFxEb2N1bWVudHNcXF93ZWJzaXRlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXHN0eWxlc1xcY29sb3Iuc2NzcyIsInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTs7Ozs7O0VBTUUsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBQ1RBO0VBQ0UsWUFBQTtFQUNBLHlCQ0xZO0FGaUJkOztBQ1RBO0VBQ0UsWUFUYztFQVVkLCtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FEV0Y7O0FDUkE7RUFDRSxZQWhCYztFQWlCZCwrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FEV0Y7O0FDUEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURVRjs7QUd6Q0E7RUFDRSxjREhhO0VDSWIscUNBQUE7QUg0Q0Y7O0FHekNBO0VBQ0UsbUJBQUE7QUg0Q0Y7O0FHekNBO0VBQ0U7SUFDRSxzQkFBQTtFSDRDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmhvbWUge1xuICBjb2xvcjogIzJmMWIyNTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHggLSA1MHB4KTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuc3VidGl0bGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3RleHQuc2Nzcyc7XHJcblxyXG4kaGVhZGVyLWhlaWdodDogNTBweDtcclxuJGZvb3Rlci1oZWlnaHQ6IDUwcHg7XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlXHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XHJcbn1cclxuXHJcbiNteUJ0biB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OVxyXG59XHJcbiIsIiRjb2xvci1wdXJwbGU6ICMyZjFiMjU7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XHJcbiRjb2xvci1ibHVlOiAjNWQ3MzdlO1xyXG4kY29sb3Itd2hpdGU6ICNmY2ZjZmM7XHJcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xyXG4kY29sb3ItbGlnaHQ6ICNEQURERDg7XHJcbiRjb2xvci1ncmVlbjogI0QzRjlCNTtcclxuJGNvbG9yLXJlZDogI0IyNkU2MztcclxuIiwiQGltcG9ydCAnc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbi5ob21lIHtcclxuICBjb2xvcjogJGNvbG9yLXB1cnBsZTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRmb290ZXItaGVpZ2h0fSk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], HomeModule);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map