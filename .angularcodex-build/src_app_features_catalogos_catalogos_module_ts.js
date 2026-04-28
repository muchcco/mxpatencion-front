"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["src_app_features_catalogos_catalogos_module_ts"],{

/***/ 8944:
/*!****************************************************************!*\
  !*** ./src/app/features/catalogos/catalogos-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosRoutingModule: () => (/* binding */ CatalogosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_catalogos_home_catalogos_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/catalogos-home/catalogos-home-page.component */ 2033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _pages_catalogos_home_catalogos_home_page_component__WEBPACK_IMPORTED_MODULE_0__.CatalogosHomePageComponent
}];
class CatalogosRoutingModule {
  static {
    this.ɵfac = function CatalogosRoutingModule_Factory(t) {
      return new (t || CatalogosRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CatalogosRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CatalogosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6721:
/*!********************************************************!*\
  !*** ./src/app/features/catalogos/catalogos.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosModule: () => (/* binding */ CatalogosModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _catalogos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogos-routing.module */ 8944);
/* harmony import */ var _pages_catalogos_home_catalogos_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/catalogos-home/catalogos-home-page.component */ 2033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class CatalogosModule {
  static {
    this.ɵfac = function CatalogosModule_Factory(t) {
      return new (t || CatalogosModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CatalogosModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _catalogos_routing_module__WEBPACK_IMPORTED_MODULE_1__.CatalogosRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CatalogosModule, {
    declarations: [_pages_catalogos_home_catalogos_home_page_component__WEBPACK_IMPORTED_MODULE_2__.CatalogosHomePageComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _catalogos_routing_module__WEBPACK_IMPORTED_MODULE_1__.CatalogosRoutingModule]
  });
})();

/***/ }),

/***/ 2033:
/*!******************************************************************************************!*\
  !*** ./src/app/features/catalogos/pages/catalogos-home/catalogos-home-page.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosHomePageComponent: () => (/* binding */ CatalogosHomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CatalogosHomePageComponent {
  static {
    this.ɵfac = function CatalogosHomePageComponent_Factory(t) {
      return new (t || CatalogosHomePageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatalogosHomePageComponent,
      selectors: [["app-catalogos-home-page"]],
      decls: 50,
      vars: 0,
      consts: [[1, "page"], [1, "page__header"], [1, "eyebrow"], [1, "page__title"], [1, "page__subtitle"], [1, "grid", "grid--3"], [1, "surface-card"], [1, "section-title"], [1, "section-copy"], [1, "grid", "grid--2"], [1, "surface-card", "surface-card--muted"], [1, "stat-list"], [1, "stat-item"]],
      template: function CatalogosHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Configuracion de catalogos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Entidades, servicios y cobertura");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Base de configuracion para administrar entidades visibles, servicios por entidad y reglas de cobertura regional sin sobrecargar la operacion del asesor. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "section", 6)(11, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Entidades visibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Preparado para configurar alcance central, regional y local por entidad. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 6)(16, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Servicios por entidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Base para asociar servicios, enlaces operativos y disponibilidad. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 6)(21, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cobertura por region");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Punto de control para definir que servicios aparecen segun region del asesor. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9)(26, "section", 10)(27, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Estado actual");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11)(30, "div", 12)(31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Frontend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Base de configuracion lista");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12)(36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Seguridad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Acceso restringido por rol");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12)(41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Integracion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Pendiente de CRUD backend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 6)(46, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Siguiente fase");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Con endpoints administrativos se podra mantener desde esta vista la configuracion de entidades, servicios y asignacion por region. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2F0YWxvZ29zL3BhZ2VzL2NhdGFsb2dvcy1ob21lL2NhdGFsb2dvcy1ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_catalogos_catalogos_module_ts.js.map