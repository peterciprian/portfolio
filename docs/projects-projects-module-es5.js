(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
    /***/
    "./src/app/projects/projects-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/projects/projects-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProjectsRoutingModule */

    /***/
    function srcAppProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function () {
        return ProjectsRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projects.component */
      "./src/app/projects/projects.component.ts");

      var routes = [{
        path: '',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]
      }];

      var ProjectsRoutingModule = function ProjectsRoutingModule() {
        _classCallCheck(this, ProjectsRoutingModule);
      };

      ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProjectsRoutingModule
      });
      ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProjectsRoutingModule_Factory(t) {
          return new (t || ProjectsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/projects/projects.component.ts":
    /*!************************************************!*\
      !*** ./src/app/projects/projects.component.ts ***!
      \************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/card/card.component */
      "./src/app/components/card/card.component.ts");

      var _c0 = function _c0() {
        return ["React", "JavaScript", "OpenLayers", "Next.js", "AWS"];
      };

      var _c1 = function _c1() {
        return ["Angular 8", "Firebase"];
      };

      var _c2 = function _c2() {
        return ["Angular 8", "OpenLayers", "Spring Boot", "PostgreSQL"];
      };

      var _c3 = function _c3() {
        return ["Angular 8", "JSONPlaceholder API"];
      };

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent() {
          _classCallCheck(this, ProjectsComponent);
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)();
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        decls: 9,
        vars: 35,
        consts: [[1, "projects", "d-flex", "flex-column", "justify-content-center", "align-self-center", "align-items-center"], [1, "mx-auto", "my-5"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-around"], [1, "m-4", 3, "imageSrc", "title", "text", "list", "buttonText", "link"]],
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here are some projects from my works that I can show you, if you are intrested:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageSrc", "assets/img/tdg.jpg")("title", "Transcend Design Generator")("text", "Edison Awarded Design generator platform")("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0))("buttonText", "Try it!")("link", "https://try.transcendh2o.com/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageSrc", "assets/img/immobees.png")("title", "Immobees")("text", "Flatmate search app")("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c1))("buttonText", "Try it!")("link", "https://immobees-98dcd.web.app/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageSrc", "assets/img/monor.png")("title", "Smart city platform")("text", "Smart city platform for Monor")("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c2))("buttonText", "Try it!")("link", "https://ttp.okosvaros.lechnerkozpont.hu/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageSrc", "assets/img/vegetables.jpg")("title", "MyRecipes")("text", "Serach for recipes from seasonal goods")("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c1))("buttonText", "Wanna see the codes?")("link", "https://github.com/peterciprian/MyRecipes/tree/master/src");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageSrc", "assets/img/codes.jpg")("title", "Sample app")("text", "It's a sample app that you can inspect to see, what code am I able to produce in ~6 hours")("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c3))("buttonText", "Wanna see the codes?")("link", "https://github.com/peterciprian/CodeSample---PostApp/blob/master/src");
          }
        },
        directives: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.projects[_ngcontent-%COMP%] {\n  color: #2f1b25;\n  min-height: calc(100vh - 50px - 50px);\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3RleHQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTs7Ozs7O0VBTUUsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBQ1RBO0VBQ0UsWUFBQTtFQUNBLHlCQ0xZO0FGaUJkOztBQ1RBO0VBQ0UsWUFUYztFQVVkLCtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FEV0Y7O0FDUkE7RUFDRSxZQWhCYztFQWlCZCwrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FEV0Y7O0FDUEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURVRjs7QUF6Q0E7RUFDRSxjRUhhO0VGSWIscUNBQUE7RUFDQSxhQUFBO0FBNENGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzJmMWIyNTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNteUJ0biB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLnByb2plY3RzIHtcbiAgY29sb3I6ICMyZjFiMjU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4IC0gNTBweCk7XG4gIHBhZGRpbmc6IDIwcHg7XG59IiwiQGltcG9ydCAnLi9jb2xvci5zY3NzJztcbkBpbXBvcnQgJy4vdGV4dC5zY3NzJztcblxuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XG4kZm9vdGVyLWhlaWdodDogNTBweDtcblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlXG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRjb2xvci1wdXJwbGU7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRjb2xvci1wdXJwbGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG4gIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyO1xufVxuXG4jbXlCdG4ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTlcbn1cbiIsIiRjb2xvci1wdXJwbGU6ICMyZjFiMjU7XG4kY29sb3IteWVsbG93OiAjZmZhNDAwO1xuJGNvbG9yLWJsdWU6ICM1ZDczN2U7XG4kY29sb3Itd2hpdGU6ICNmY2ZjZmM7XG4kY29sb3ItZ3JheTogIzQ1NDg1MTtcbiRjb2xvci1saWdodDogI0RBREREODtcbiRjb2xvci1ncmVlbjogI0QzRjlCNTtcbiRjb2xvci1yZWQ6ICNCMjZFNjM7XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/projects/projects.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/projects/projects.module.ts ***!
      \*********************************************/

    /*! exports provided: ProjectsModule */

    /***/
    function srcAppProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () {
        return ProjectsModule;
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


      var _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projects-routing.module */
      "./src/app/projects/projects-routing.module.ts");
      /* harmony import */


      var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./projects.component */
      "./src/app/projects/projects.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var ProjectsModule = function ProjectsModule() {
        _classCallCheck(this, ProjectsModule);
      };

      ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProjectsModule
      });
      ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProjectsModule_Factory(t) {
          return new (t || ProjectsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, {
          declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projects-projects-module-es5.js.map