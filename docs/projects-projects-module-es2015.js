(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"projects d-flex flex-column justify-content-center align-self-center align-items-center\">\r\n  <h3 class=\"mx-auto my-5\">Here are some projects from my works that I can show you, if you are intrested:</h3>\r\n  <div class=\"d-flex flex-row flex-wrap justify-content-around\">\r\n    <app-card class=\"m-4\" [imageSrc]=\"'assets/img/immobees.png'\" [title]=\"'Immobees'\" [text]=\"'Flatmate search app'\" [list]=\"['Angular 8', 'Firebase']\" [buttonText]=\"'Try it!'\" [link]=\"'https://immobees-98dcd.web.app/'\"></app-card>\r\n    <app-card class=\"m-4\" [imageSrc]=\"'assets/img/monor.png'\" [title]=\"'Smart city platform'\" [text]=\"'Smart city platform for Monor'\" [list]=\"['Angular 8', 'OpenLayers', 'Spring Boot', 'PostgreSQL']\" [buttonText]=\"'Try it!'\" [link]=\"'https://ttp.okosvaros.lechnerkozpont.hu/'\"></app-card>\r\n    <app-card class=\"m-4\" [imageSrc]=\"'assets/img/vegetables.jpg'\" [title]=\"'MyRecipes'\" [text]=\"'Serach for recipes from seasonal goods'\" [list]=\"['Angular 8', 'Firebase']\" [buttonText]=\"'Wanna see the codes?'\" [link]=\"'https://github.com/peterciprian/MyRecipes/tree/master/src'\"></app-card>\r\n    <app-card class=\"m-4\" [imageSrc]=\"'assets/img/codes.jpg'\" [title]=\"'Sample app'\" [text]=\"'It\\'s a sample app that you can inspect to see, what code am I able to produce in ~6 hours'\" [list]=\"['Angular 8', 'JSONPlaceholder API']\" [buttonText]=\"'Wanna see the codes?'\" [link]=\"'https://github.com/peterciprian/CodeSample---PostApp/blob/master/src'\"></app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");




const routes = [{ path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] }];
let ProjectsRoutingModule = class ProjectsRoutingModule {
};
ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProjectsRoutingModule);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto Mono\", monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  background-color: #fcfcfc;\n}\n\nheader {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  font-size: 13pt;\n  font-weight: 800;\n}\n\nfooter {\n  height: 50px;\n  box-shadow: 0px 0px 8px #2f1b25;\n  bottom: 0;\n  z-index: -1;\n}\n\n#myBtn {\n  opacity: 0.5;\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n}\n\n.projects {\n  color: #2f1b25;\n  min-height: calc(100vh - 50px - 50px);\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFx0ZXh0LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1haW4uc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxPUENcXERvY3VtZW50c1xcX3dlYnNpdGVzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb2xvci5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9DOlxcVXNlcnNcXE9QQ1xcRG9jdW1lbnRzXFxfd2Vic2l0ZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FDVEE7RUFDRSxZQUFBO0VBQ0EseUJDTFk7QUZpQmQ7O0FDVEE7RUFDRSxZQVRjO0VBVWQsK0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QURXRjs7QUNSQTtFQUNFLFlBaEJjO0VBaUJkLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFVGOztBR3pDQTtFQUNFLGNESGE7RUNJYixxQ0FBQTtFQUNBLGFBQUE7QUg0Q0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICMyZjFiMjU7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMmYxYjI1O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jbXlCdG4ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5wcm9qZWN0cyB7XG4gIGNvbG9yOiAjMmYxYjI1O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCAtIDUwcHgpO1xuICBwYWRkaW5nOiAyMHB4O1xufSIsIkBpbXBvcnQgJy4vY29sb3Iuc2Nzcyc7XHJcbkBpbXBvcnQgJy4vdGV4dC5zY3NzJztcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xyXG4kZm9vdGVyLWhlaWdodDogNTBweDtcclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGVcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRjb2xvci1wdXJwbGU7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XHJcbiAgZm9udC1zaXplOiAxM3B0O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkY29sb3ItcHVycGxlO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMjtcclxufVxyXG5cclxuI215QnRuIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDk5XHJcbn1cclxuIiwiJGNvbG9yLXB1cnBsZTogIzJmMWIyNTtcclxuJGNvbG9yLXllbGxvdzogI2ZmYTQwMDtcclxuJGNvbG9yLWJsdWU6ICM1ZDczN2U7XHJcbiRjb2xvci13aGl0ZTogI2ZjZmNmYztcclxuJGNvbG9yLWdyYXk6ICM0NTQ4NTE7XHJcbiRjb2xvci1saWdodDogI0RBREREODtcclxuJGNvbG9yLWdyZWVuOiAjRDNGOUI1O1xyXG4kY29sb3ItcmVkOiAjQjI2RTYzO1xyXG4iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuLnByb2plY3RzIHtcclxuICBjb2xvcjogJGNvbG9yLXB1cnBsZTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRmb290ZXItaGVpZ2h0fSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ProjectsModule);



/***/ })

}]);
//# sourceMappingURL=projects-projects-module-es2015.js.map