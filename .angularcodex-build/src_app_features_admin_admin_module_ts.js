"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["src_app_features_admin_admin_module_ts"],{

/***/ 5436:
/*!********************************************************!*\
  !*** ./src/app/features/admin/admin-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_admin_home_admin_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/admin-home/admin-home-page.component */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _pages_admin_home_admin_home_page_component__WEBPACK_IMPORTED_MODULE_0__.AdminHomePageComponent
}];
class AdminRoutingModule {
  static {
    this.ɵfac = function AdminRoutingModule_Factory(t) {
      return new (t || AdminRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6269:
/*!************************************************!*\
  !*** ./src/app/features/admin/admin.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ 5436);
/* harmony import */ var _pages_admin_home_admin_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin-home/admin-home-page.component */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class AdminModule {
  static {
    this.ɵfac = function AdminModule_Factory(t) {
      return new (t || AdminModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_pages_admin_home_admin_home_page_component__WEBPACK_IMPORTED_MODULE_2__.AdminHomePageComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 8824:
/*!******************************************************************************!*\
  !*** ./src/app/features/admin/pages/admin-home/admin-home-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminHomePageComponent: () => (/* binding */ AdminHomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_session_context_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/session-context.service */ 774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




const _c0 = function () {
  return [];
};
function AdminHomePageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "div")(3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Configuracion operativa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Administracion institucional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Espacio reservado para administradores y moderadores. Desde aqui se preparan las reglas operativas de entidades, servicios y cobertura por region. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "section", 7)(11, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Entidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Base para configurar entidades visibles, alcance institucional y estado operativo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Ver catalogos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 7)(19, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Base para administrar servicios por entidad, enlaces externos y disponibilidad. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "section", 7)(24, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cobertura por region");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Punto de control para definir que entidades y servicios son visibles por region del asesor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12)(29, "section", 13)(30, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Perfil actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14)(33, "div", 15)(34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 15)(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "section", 7)(49, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Integraciones pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 14)(52, "div", 15)(53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "CRUD entidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Pendiente de endpoint backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 15)(58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "CRUD servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Pendiente de endpoint backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 15)(63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Asignacion regional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Pendiente de endpoint backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const session_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((session_r1.asesor == null ? null : session_r1.asesor.nombreCompleto) || "Sin dato");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](((session_r1.asesor == null ? null : session_r1.asesor.roles) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0)).join(", ") || "Sin roles informados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((session_r1.asesor == null ? null : session_r1.asesor.regionNombre) || "Sin region");
  }
}
class AdminHomePageComponent {
  constructor(sessionContextService) {
    this.sessionContextService = sessionContextService;
    this.session$ = this.sessionContextService.state$;
  }
  static {
    this.ɵfac = function AdminHomePageComponent_Factory(t) {
      return new (t || AdminHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_session_context_service__WEBPACK_IMPORTED_MODULE_0__.SessionContextService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminHomePageComponent,
      selectors: [["app-admin-home-page"]],
      decls: 2,
      vars: 3,
      consts: [["class", "page", 4, "ngIf"], [1, "page"], [1, "page__header"], [1, "eyebrow"], [1, "page__title"], [1, "page__subtitle"], [1, "grid", "grid--3"], [1, "surface-card"], [1, "section-title"], [1, "section-copy"], [1, "actions-row", "admin-home__actions"], ["routerLink", "/catalogos", 1, "button", "button--secondary"], [1, "grid", "grid--2"], [1, "surface-card", "surface-card--muted"], [1, "stat-list"], [1, "stat-item"]],
      template: function AdminHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminHomePageComponent_div_0_Template, 67, 4, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.session$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.admin-home__actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvYWRtaW4taG9tZS9hZG1pbi1ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkbWluLWhvbWVfX2FjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_admin_admin_module_ts.js.map