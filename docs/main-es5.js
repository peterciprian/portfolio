(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | about-about-module */
          "about-about-module").then(__webpack_require__.bind(null,
          /*! ./about/about.module */
          "./src/app/about/about.module.ts")).then(function (m) {
            return m.AboutModule;
          });
        }
      }, {
        path: 'projects',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | projects-projects-module */
          "projects-projects-module").then(__webpack_require__.bind(null,
          /*! ./projects/projects.module */
          "./src/app/projects/projects.module.ts")).then(function (m) {
            return m.ProjectsModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'portfolio';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "d-sm-none"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer", 0);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/box/box.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/box/box.component.ts ***!
      \*************************************************/

    /*! exports provided: BoxComponent */

    /***/
    function srcAppComponentsBoxBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoxComponent", function () {
        return BoxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _c0 = ["*"];

      var BoxComponent = /*#__PURE__*/function () {
        function BoxComponent() {
          _classCallCheck(this, BoxComponent);
        }

        _createClass(BoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BoxComponent;
      }();

      BoxComponent.ɵfac = function BoxComponent_Factory(t) {
        return new (t || BoxComponent)();
      };

      BoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BoxComponent,
        selectors: [["app-box"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "box"]],
        template: function BoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.box[_ngcontent-%COMP%] {\n  cursor: default;\n  background-color: #454851;\n  box-shadow: 1px 1px 5px #2f1b25;\n  font-weight: 800;\n  padding: 8px 12px;\n  border-radius: 8px;\n  align-items: center;\n  min-height: 32px;\n  height: auto;\n  width: auto;\n  opacity: 0.8;\n  margin: 4px;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  color: #ffa400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib3gvYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7Ozs7OztFQU1FLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QUNUQTtFQUNFLFlBQUE7RUFDQSx5QkNMWTtBRmlCZDs7QUNUQTtFQUNFLFlBVGM7RUFVZCwrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBRFdGOztBQ1JBO0VBQ0UsWUFoQmM7RUFpQmQsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRFdGOztBQ1BBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEVUY7O0FBekNBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTRDRjs7QUF6Q0E7RUFDRSxjRWpCYTtBRjZEZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm94L2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIG1vbm9zcGFjZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuI215QnRuIHtcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uYm94IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ODUxO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMmYxYjI1O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzMnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBvcGFjaXR5OiAwLjg7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4uYm94OmhvdmVyIHtcbiAgY29sb3I6ICNmZmE0MDA7XG59IiwiQGltcG9ydCAnLi9jb2xvci5zY3NzJztcbkBpbXBvcnQgJy4vdGV4dC5zY3NzJztcblxuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XG4kZm9vdGVyLWhlaWdodDogNTBweDtcblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlXG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRjb2xvci1wdXJwbGU7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRjb2xvci1wdXJwbGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG4gIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyO1xufVxuXG4jbXlCdG4ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTlcbn1cbiIsIiRjb2xvci1wdXJwbGU6ICMyZjFiMjU7XG4kY29sb3IteWVsbG93OiAjZmZhNDAwO1xuJGNvbG9yLWJsdWU6ICM1ZDczN2U7XG4kY29sb3Itd2hpdGU6ICNmY2ZjZmM7XG4kY29sb3ItZ3JheTogIzQ1NDg1MTtcbiRjb2xvci1saWdodDogI0RBREREODtcbiRjb2xvci1ncmVlbjogI0QzRjlCNTtcbiRjb2xvci1yZWQ6ICNCMjZFNjM7XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-box',
            templateUrl: './box.component.html',
            styleUrls: ['./box.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/button/button.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/button/button.component.ts ***!
      \*******************************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function srcAppComponentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent(router) {
          _classCallCheck(this, ButtonComponent);

          this.router = router;
        }

        _createClass(ButtonComponent, [{
          key: "navigate",
          value: function navigate() {
            if (this.link.startsWith('/')) {
              this.router.navigate([this.link]);
            } else {
              window.open(this.link, '_blank');
            }
          }
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        inputs: {
          link: "link",
          content: "content"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "linkButton", 3, "click"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() {
              return ctx.navigate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\nbutton.linkButton[_ngcontent-%COMP%] {\n  color: #2f1b25;\n  background-color: #DADDD8;\n  border-color: #2f1b25;\n  border: 1px solid;\n  padding: 4px;\n  border-radius: 4px;\n  width: 200px;\n  height: 60px;\n  box-shadow: 0 2px #ffa400;\n}\n\nbutton.linkButton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: 1px solid;\n  box-shadow: 0 0px #ffa400;\n  transform: translateY(2px);\n}\n\nbutton.linkButton[_ngcontent-%COMP%]:hover {\n  color: #ffa400;\n  background-color: #2f1b25;\n  border-color: #2f1b25;\n  opacity: 0.75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7Ozs7OztFQU1FLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QUNUQTtFQUNFLFlBQUE7RUFDQSx5QkNMWTtBRmlCZDs7QUNUQTtFQUNFLFlBVGM7RUFVZCwrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBRFdGOztBQ1JBO0VBQ0UsWUFoQmM7RUFpQmQsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRFdGOztBQ1BBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEVUY7O0FBekNBO0VBQ0UsY0VIYTtFRkliLHlCRUNZO0VGQVoscUJFTGE7RUZNYixpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUE0Q0Y7O0FBekNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQTRDRjs7QUF6Q0E7RUFDRSxjRXJCYTtFRnNCYix5QkV2QmE7RUZ3QmIscUJFeEJhO0VGeUJiLGFBQUE7QUE0Q0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuYnV0dG9uLmxpbmtCdXR0b24ge1xuICBjb2xvcjogIzJmMWIyNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBREREODtcbiAgYm9yZGVyLWNvbG9yOiAjMmYxYjI1O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAjZmZhNDAwO1xufVxuXG5idXR0b24ubGlua0J1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm94LXNoYWRvdzogMCAwcHggI2ZmYTQwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5cbmJ1dHRvbi5saW5rQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmE0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjFiMjU7XG4gIGJvcmRlci1jb2xvcjogIzJmMWIyNTtcbiAgb3BhY2l0eTogMC43NTtcbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xuQGltcG9ydCAnLi90ZXh0LnNjc3MnO1xuXG4kaGVhZGVyLWhlaWdodDogNTBweDtcbiRmb290ZXItaGVpZ2h0OiA1MHB4O1xuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGVcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OVxufVxuIiwiJGNvbG9yLXB1cnBsZTogIzJmMWIyNTtcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XG4kY29sb3ItYmx1ZTogIzVkNzM3ZTtcbiRjb2xvci13aGl0ZTogI2ZjZmNmYztcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xuJGNvbG9yLWxpZ2h0OiAjREFEREQ4O1xuJGNvbG9yLWdyZWVuOiAjRDNGOUI1O1xuJGNvbG9yLXJlZDogI0IyNkU2MztcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-button',
            templateUrl: './button.component.html',
            styleUrls: ['./button.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/card/card.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/card/card.component.ts ***!
      \***************************************************/

    /*! exports provided: CardComponent */

    /***/
    function srcAppComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../button/button.component */
      "./src/app/components/button/button.component.ts");

      function CardComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tech_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r1);
        }
      }

      var CardComponent = function CardComponent() {
        _classCallCheck(this, CardComponent);
      };

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)();
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        inputs: {
          imageSrc: "imageSrc",
          title: "title",
          text: "text",
          link: "link",
          list: "list",
          buttonText: "buttonText"
        },
        decls: 11,
        vars: 6,
        consts: [[1, "card", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [4, "ngFor", "ngForOf"], [1, "m-3", 3, "link", "content"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tech stack: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardComponent_li_9_Template, 2, 1, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("link", ctx.link)("content", ctx.buttonText);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #DADDD8;\n  box-shadow: 5px 5px 10px #2f1b25;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTs7Ozs7O0VBTUUsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBQ1RBO0VBQ0UsWUFBQTtFQUNBLHlCQ0xZO0FGaUJkOztBQ1RBO0VBQ0UsWUFUYztFQVVkLCtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FEV0Y7O0FDUkE7RUFDRSxZQWhCYztFQWlCZCwrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FEV0Y7O0FDUEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURVRjs7QUF6Q0E7RUFDRSx5QkVFWTtFRkRaLGdDQUFBO0FBNENGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFEREQ4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzJmMWIyNTtcbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xuQGltcG9ydCAnLi90ZXh0LnNjc3MnO1xuXG4kaGVhZGVyLWhlaWdodDogNTBweDtcbiRmb290ZXItaGVpZ2h0OiA1MHB4O1xuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGVcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OVxufVxuIiwiJGNvbG9yLXB1cnBsZTogIzJmMWIyNTtcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XG4kY29sb3ItYmx1ZTogIzVkNzM3ZTtcbiRjb2xvci13aGl0ZTogI2ZjZmNmYztcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xuJGNvbG9yLWxpZ2h0OiAjREFEREQ4O1xuJGNvbG9yLWdyZWVuOiAjRDNGOUI1O1xuJGNvbG9yLXJlZDogI0IyNkU2MztcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          imageSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          buttonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/frame/frame.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/frame/frame.component.ts ***!
      \*****************************************************/

    /*! exports provided: FrameComponent */

    /***/
    function srcAppComponentsFrameFrameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FrameComponent", function () {
        return FrameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _c0 = ["*"];

      var FrameComponent = /*#__PURE__*/function () {
        function FrameComponent() {
          _classCallCheck(this, FrameComponent);
        }

        _createClass(FrameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FrameComponent;
      }();

      FrameComponent.ɵfac = function FrameComponent_Factory(t) {
        return new (t || FrameComponent)();
      };

      FrameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FrameComponent,
        selectors: [["app-frame"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "frame"]],
        template: function FrameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.frame[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background-color: #DADDD8;\n  box-shadow: 3px 3px 8px #2f1b25;\n  border-radius: 5px;\n  width: auto;\n  padding: 20px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mcmFtZS9mcmFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FDVEE7RUFDRSxZQUFBO0VBQ0EseUJDTFk7QUZpQmQ7O0FDVEE7RUFDRSxZQVRjO0VBVWQsK0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjs7QUNSQTtFQUNFLFlBaEJjO0VBaUJkLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFVGOztBQXpDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkVEWTtFRkVaLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUE0Q0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jbXlCdG4ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5mcmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBREREODtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggIzJmMWIyNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4O1xufSIsIkBpbXBvcnQgJy4vY29sb3Iuc2Nzcyc7XG5AaW1wb3J0ICcuL3RleHQuc2Nzcyc7XG5cbiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xuJGZvb3Rlci1oZWlnaHQ6IDUwcHg7XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZVxufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjtcbn1cblxuI215QnRuIHtcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5XG59XG4iLCIkY29sb3ItcHVycGxlOiAjMmYxYjI1O1xuJGNvbG9yLXllbGxvdzogI2ZmYTQwMDtcbiRjb2xvci1ibHVlOiAjNWQ3MzdlO1xuJGNvbG9yLXdoaXRlOiAjZmNmY2ZjO1xuJGNvbG9yLWdyYXk6ICM0NTQ4NTE7XG4kY29sb3ItbGlnaHQ6ICNEQURERDg7XG4kY29sb3ItZ3JlZW46ICNEM0Y5QjU7XG4kY29sb3ItcmVkOiAjQjI2RTYzO1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-frame',
            templateUrl: './frame.component.html',
            styleUrls: ['./frame.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/social-icon/social-icon.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/social-icon/social-icon.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SocialIconComponent */

    /***/
    function srcAppComponentsSocialIconSocialIconComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialIconComponent", function () {
        return SocialIconComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      var _c0 = function _c0(a0) {
        return {
          backgroundColor: a0
        };
      };

      var SocialIconComponent = /*#__PURE__*/function () {
        function SocialIconComponent() {
          _classCallCheck(this, SocialIconComponent);
        }

        _createClass(SocialIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SocialIconComponent;
      }();

      SocialIconComponent.ɵfac = function SocialIconComponent_Factory(t) {
        return new (t || SocialIconComponent)();
      };

      SocialIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SocialIconComponent,
        selectors: [["app-social-icon"]],
        inputs: {
          icon: "icon",
          bgColor: "bgColor",
          link: "link"
        },
        decls: 3,
        vars: 5,
        consts: [["target", "_blank", 3, "href"], [1, "d-flex", "flex-row", "align-items-center", "justify-content-center", "circle", 3, "ngStyle"], [3, "icon"]],
        template: function SocialIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.bgColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.circle[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  color: #fcfcfc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtaWNvbi9zb2NpYWwtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FDVEE7RUFDRSxZQUFBO0VBQ0EseUJDTFk7QUZpQmQ7O0FDVEE7RUFDRSxZQVRjO0VBVWQsK0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjs7QUNSQTtFQUNFLFlBaEJjO0VBaUJkLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFVGOztBQXpDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNFUFU7QUZtRGQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lhbC1pY29uL3NvY2lhbC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jbXlCdG4ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jaXJjbGUge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZjZmNmYztcbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xuQGltcG9ydCAnLi90ZXh0LnNjc3MnO1xuXG4kaGVhZGVyLWhlaWdodDogNTBweDtcbiRmb290ZXItaGVpZ2h0OiA1MHB4O1xuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGVcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OVxufVxuIiwiJGNvbG9yLXB1cnBsZTogIzJmMWIyNTtcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XG4kY29sb3ItYmx1ZTogIzVkNzM3ZTtcbiRjb2xvci13aGl0ZTogI2ZjZmNmYztcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xuJGNvbG9yLWxpZ2h0OiAjREFEREQ4O1xuJGNvbG9yLWdyZWVuOiAjRDNGOUI1O1xuJGNvbG9yLXJlZDogI0IyNkU2MztcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialIconComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-social-icon',
            templateUrl: './social-icon.component.html',
            styleUrls: ['./social-icon.component.scss']
          }]
        }], function () {
          return [];
        }, {
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/footer/footer.component.ts":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/social-icon/social-icon.component */
      "./src/app/components/social-icon/social-icon.component.ts");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedinIn"];
          this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
          this.faEmail = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAt"];
          this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"];
          this.colorLinkedin = '#2867B2';
          this.colorGithub = '#24292e';
          this.colorEmail = '#D44638';
          this.colorFacebook = '#4267B2';
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 6,
        vars: 12,
        consts: [[1, "nav-container", "d-flex", "flex-row", "align-items-center"], [1, "socials", "d-flex", "flex-row", "align-items-center", "justify-content-center", "mx-auto"], [1, "mx-2", 3, "icon", "bgColor", "link"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-social-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-social-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-social-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-social-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin)("bgColor", ctx.colorLinkedin)("link", "https://www.linkedin.com/in/olahpeterciprian/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub)("bgColor", ctx.colorGithub)("link", "https://github.com/peterciprian");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEmail)("bgColor", ctx.colorEmail)("link", "mailto:peterciprian@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook)("bgColor", ctx.colorFacebook)("link", "https://www.facebook.com/peterciprian");
          }
        },
        directives: [_components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_3__["SocialIconComponent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  height: 50px;\n  color: #2f1b25 !important;\n  background-color: #DADDD8;\n  box-shadow: 0 -2px #ffa400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FDVEE7RUFDRSxZQUFBO0VBQ0EseUJDTFk7QUZpQmQ7O0FDVEE7RUFDRSxZQVRjO0VBVWQsK0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjs7QUNSQTtFQUNFLFlBaEJjO0VBaUJkLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFVGOztBQXpDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUE0Q0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jbXlCdG4ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogIzJmMWIyNSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFEREQ4O1xuICBib3gtc2hhZG93OiAwIC0ycHggI2ZmYTQwMDtcbn0iLCJAaW1wb3J0ICcuL2NvbG9yLnNjc3MnO1xuQGltcG9ydCAnLi90ZXh0LnNjc3MnO1xuXG4kaGVhZGVyLWhlaWdodDogNTBweDtcbiRmb290ZXItaGVpZ2h0OiA1MHB4O1xuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGVcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGNvbG9yLXB1cnBsZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OVxufVxuIiwiJGNvbG9yLXB1cnBsZTogIzJmMWIyNTtcbiRjb2xvci15ZWxsb3c6ICNmZmE0MDA7XG4kY29sb3ItYmx1ZTogIzVkNzM3ZTtcbiRjb2xvci13aGl0ZTogI2ZjZmNmYztcbiRjb2xvci1ncmF5OiAjNDU0ODUxO1xuJGNvbG9yLWxpZ2h0OiAjREFEREQ4O1xuJGNvbG9yLWdyZWVuOiAjRDNGOUI1O1xuJGNvbG9yLXJlZDogI0IyNkU2MztcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/social-icon/social-icon.component */
      "./src/app/components/social-icon/social-icon.component.ts");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedinIn"];
          this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
          this.faEmail = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAt"];
          this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"];
          this.colorLinkedin = '#2867B2';
          this.colorGithub = '#24292e';
          this.colorEmail = '#D44638';
          this.colorFacebook = '#4267B2';
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 16,
        vars: 12,
        consts: [[1, "nav-container", "d-flex", "flex-row", "align-items-center"], [1, "nav-drop"], ["routerLinkActive", "active", "routerLink", "/home"], ["src", "assets/img/camel.png", "alt", "OPC"], ["routerLinkActive", "active", "routerLink", "/about"], ["routerLinkActive", "active", "routerLink", "/projects"], [1, "socials", "d-none", "d-sm-flex", "flex-row", "align-items-center", "justify-content-center", "ml-auto", "mr-3"], [1, "mx-2", 3, "icon", "bgColor", "link"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-social-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-social-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-social-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-social-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin)("bgColor", ctx.colorLinkedin)("link", "https://www.linkedin.com/in/olahpeterciprian/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub)("bgColor", ctx.colorGithub)("link", "https://github.com/peterciprian");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEmail)("bgColor", ctx.colorEmail)("link", "mailto:peterciprian@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook)("bgColor", ctx.colorFacebook)("link", "https://www.facebook.com/peterciprian");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_4__["SocialIconComponent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  height: 50px;\n  color: #2f1b25 !important;\n  background-color: #DADDD8;\n  box-shadow: 0 2px #ffa400;\n}\n\n.nav-container[_ngcontent-%COMP%]   .nav-drop[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n\n.nav-container[_ngcontent-%COMP%]   .nav-drop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 40px;\n}\n\n.nav-container[_ngcontent-%COMP%]   .nav-drop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #2f1b25;\n}\n\n.nav-container[_ngcontent-%COMP%]   .nav-drop[_ngcontent-%COMP%]:active   a[_ngcontent-%COMP%], .nav-container[_ngcontent-%COMP%]   .nav-drop[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #ffa400 !important;\n  outline: none;\n}\n\n.nav-container[_ngcontent-%COMP%]   .nav-drop[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #454851 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FDVEE7RUFDRSxZQUFBO0VBQ0EseUJDTFk7QUZpQmQ7O0FDVEE7RUFDRSxZQVRjO0VBVWQsK0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjs7QUNSQTtFQUNFLFlBaEJjO0VBaUJkLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFVGOztBQXpDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUE0Q0Y7O0FBMUNFO0VBQ0UsWUFBQTtBQTRDSjs7QUExQ0k7RUFDRSxnQkFBQTtBQTRDTjs7QUF6Q0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUEyQ047O0FBeENJO0VBRUUseUJBQUE7RUFDQSxhQUFBO0FBeUNOOztBQXRDSTtFQUNFLHlCQUFBO0FBd0NOIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIG1vbm9zcGFjZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuI215QnRuIHtcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICMyZjFiMjUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBREREODtcbiAgYm94LXNoYWRvdzogMCAycHggI2ZmYTQwMDtcbn1cbi5uYXYtY29udGFpbmVyIC5uYXYtZHJvcCB7XG4gIG1hcmdpbjogMTJweDtcbn1cbi5uYXYtY29udGFpbmVyIC5uYXYtZHJvcCBpbWcge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kcm9wIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMmYxYjI1O1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kcm9wOmFjdGl2ZSBhLCAubmF2LWNvbnRhaW5lciAubmF2LWRyb3AgYS5hY3RpdmUge1xuICBjb2xvcjogI2ZmYTQwMCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1kcm9wOmhvdmVyIGEge1xuICBjb2xvcjogIzQ1NDg1MSAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgJy4vY29sb3Iuc2Nzcyc7XG5AaW1wb3J0ICcuL3RleHQuc2Nzcyc7XG5cbiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xuJGZvb3Rlci1oZWlnaHQ6IDUwcHg7XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZVxufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjtcbn1cblxuI215QnRuIHtcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5XG59XG4iLCIkY29sb3ItcHVycGxlOiAjMmYxYjI1O1xuJGNvbG9yLXllbGxvdzogI2ZmYTQwMDtcbiRjb2xvci1ibHVlOiAjNWQ3MzdlO1xuJGNvbG9yLXdoaXRlOiAjZmNmY2ZjO1xuJGNvbG9yLWdyYXk6ICM0NTQ4NTE7XG4kY29sb3ItbGlnaHQ6ICNEQURERDg7XG4kY29sb3ItZ3JlZW46ICNEM0Y5QjU7XG4kY29sb3ItcmVkOiAjQjI2RTYzO1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/button/button.component */
      "./src/app/components/button/button.component.ts");
      /* harmony import */


      var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/card/card.component */
      "./src/app/components/card/card.component.ts");
      /* harmony import */


      var _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/social-icon/social-icon.component */
      "./src/app/components/social-icon/social-icon.component.ts");
      /* harmony import */


      var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/frame/frame.component */
      "./src/app/components/frame/frame.component.ts");
      /* harmony import */


      var _components_box_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/box/box.component */
      "./src/app/components/box/box.component.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
      /**
       * Components
       */


      var sharedComponents = [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_4__["SocialIconComponent"], _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__["FrameComponent"], _components_box_box_component__WEBPACK_IMPORTED_MODULE_6__["BoxComponent"]];
      /**
       * Services
       */

      var sharedServices = [];
      /**
       * Directives
       */

      var sharedDirectives = [];
      /**
       * Modules
       */

      var sharedModules = [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]];

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [sharedServices],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], sharedModules], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_4__["SocialIconComponent"], _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__["FrameComponent"], _components_box_box_component__WEBPACK_IMPORTED_MODULE_6__["BoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]],
          exports: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_4__["SocialIconComponent"], _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__["FrameComponent"], _components_box_box_component__WEBPACK_IMPORTED_MODULE_6__["BoxComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [sharedComponents, sharedDirectives],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], sharedModules],
            exports: [sharedComponents, sharedDirectives, sharedModules],
            providers: [sharedServices]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\__DEV\portfolio\portfolio\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map