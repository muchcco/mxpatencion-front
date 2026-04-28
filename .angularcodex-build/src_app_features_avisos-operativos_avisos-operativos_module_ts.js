"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["src_app_features_avisos-operativos_avisos-operativos_module_ts"],{

/***/ 3828:
/*!********************************************************************************!*\
  !*** ./src/app/features/avisos-operativos/avisos-operativos-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisosOperativosRoutingModule: () => (/* binding */ AvisosOperativosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_avisos_home_avisos_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/avisos-home/avisos-home-page.component */ 5166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _pages_avisos_home_avisos_home_page_component__WEBPACK_IMPORTED_MODULE_0__.AvisosHomePageComponent
}];
class AvisosOperativosRoutingModule {
  static {
    this.ɵfac = function AvisosOperativosRoutingModule_Factory(t) {
      return new (t || AvisosOperativosRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AvisosOperativosRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AvisosOperativosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1733:
/*!************************************************************************!*\
  !*** ./src/app/features/avisos-operativos/avisos-operativos.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisosOperativosModule: () => (/* binding */ AvisosOperativosModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _avisos_operativos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avisos-operativos-routing.module */ 3828);
/* harmony import */ var _pages_avisos_home_avisos_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/avisos-home/avisos-home-page.component */ 5166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class AvisosOperativosModule {
  static {
    this.ɵfac = function AvisosOperativosModule_Factory(t) {
      return new (t || AvisosOperativosModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AvisosOperativosModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _avisos_operativos_routing_module__WEBPACK_IMPORTED_MODULE_1__.AvisosOperativosRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AvisosOperativosModule, {
    declarations: [_pages_avisos_home_avisos_home_page_component__WEBPACK_IMPORTED_MODULE_2__.AvisosHomePageComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _avisos_operativos_routing_module__WEBPACK_IMPORTED_MODULE_1__.AvisosOperativosRoutingModule]
  });
})();

/***/ }),

/***/ 5166:
/*!********************************************************************************************!*\
  !*** ./src/app/features/avisos-operativos/pages/avisos-home/avisos-home-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisosHomePageComponent: () => (/* binding */ AvisosHomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/aviso-operativo-list/aviso-operativo-list.component */ 2217);


class AvisosHomePageComponent {
  constructor() {
    this.avisos = [];
  }
  static {
    this.ɵfac = function AvisosHomePageComponent_Factory(t) {
      return new (t || AvisosHomePageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AvisosHomePageComponent,
      selectors: [["app-avisos-home-page"]],
      decls: 31,
      vars: 1,
      consts: [[1, "page"], [1, "page__header"], [1, "eyebrow"], [1, "page__title"], [1, "page__subtitle"], [1, "grid", "grid--2"], [1, "surface-card"], ["emptyTitle", "Sin avisos reportados todavia", "emptyDescription", "La siguiente fase conectara el listado real, el formulario de reporte y el cambio de estado.", 3, "avisos"], [1, "surface-card", "surface-card--muted"], [1, "section-title"], [1, "stat-list"], [1, "stat-item"]],
      template: function AvisosHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Operacion de servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Panel de avisos operativos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Espacio institucional para mostrar incidencias recientes y preparar el registro de fallas por servicio sin convertir la experiencia en un chat. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "section", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-aviso-operativo-list", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "section", 8)(13, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Base lista para continuar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Endpoint");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "/api/v1/avisos-operativos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11)(22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Acciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Listar, registrar y actualizar estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11)(27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "UX objetivo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Panel claro, no invasivo y operativo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("avisos", ctx.avisos);
        }
      },
      dependencies: [_shared_components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_0__.AvisoOperativoListComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXZpc29zLW9wZXJhdGl2b3MvcGFnZXMvYXZpc29zLWhvbWUvYXZpc29zLWhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_avisos-operativos_avisos-operativos_module_ts.js.map