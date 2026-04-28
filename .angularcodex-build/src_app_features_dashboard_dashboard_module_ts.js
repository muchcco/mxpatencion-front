"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["src_app_features_dashboard_dashboard_module_ts"],{

/***/ 2508:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_dashboard_home_dashboard_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard-home/dashboard-home-page.component */ 5612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _pages_dashboard_home_dashboard_home_page_component__WEBPACK_IMPORTED_MODULE_0__.DashboardHomePageComponent
}];
class DashboardRoutingModule {
  static {
    this.ɵfac = function DashboardRoutingModule_Factory(t) {
      return new (t || DashboardRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2125:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 2508);
/* harmony import */ var _pages_dashboard_home_dashboard_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard-home/dashboard-home-page.component */ 5612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class DashboardModule {
  static {
    this.ɵfac = function DashboardModule_Factory(t) {
      return new (t || DashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_pages_dashboard_home_dashboard_home_page_component__WEBPACK_IMPORTED_MODULE_2__.DashboardHomePageComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule]
  });
})();

/***/ }),

/***/ 5612:
/*!******************************************************************************************!*\
  !*** ./src/app/features/dashboard/pages/dashboard-home/dashboard-home-page.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardHomePageComponent: () => (/* binding */ DashboardHomePageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _avisos_operativos_services_avisos_operativos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../avisos-operativos/services/avisos-operativos.service */ 1193);
/* harmony import */ var _core_services_session_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/session-context.service */ 774);
/* harmony import */ var _atencion_services_atencion_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../atencion/services/atencion-state.service */ 8145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_advisor_summary_advisor_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/advisor-summary/advisor-summary.component */ 6661);
/* harmony import */ var _shared_components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/aviso-operativo-list/aviso-operativo-list.component */ 2217);










function DashboardHomePageComponent_div_0_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No se pudieron cargar los avisos recientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardHomePageComponent_div_0_div_62_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.retryAvisos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Reintentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.avisosError);
  }
}
function DashboardHomePageComponent_div_0_app_aviso_operativo_list_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-aviso-operativo-list", 27);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("avisos", ctx_r3.avisos)("loading", ctx_r3.avisosLoading);
  }
}
function DashboardHomePageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Inicio de jornada");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Desde aqui puedes iniciar una nueva atencion, continuar una atencion pendiente y revisar avisos operativos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardHomePageComponent_div_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.startAttentionFlow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardHomePageComponent_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.goToAvisos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Ver avisos operativos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "app-advisor-summary", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "section", 13)(19, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Guia rapida");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 15)(22, "div", 16)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "1. Identifica al ciudadano");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Ingresa documento y busca primero en base local.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 16)(28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "2. Selecciona entidad y servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Elige la entidad visible y luego el servicio requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 16)(33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "3. Finaliza la atencion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Cierra la atencion cuando el tramite termine.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "section", 17)(38, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Estado operativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 18)(41, "div", 19)(42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Total avisos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 20)(47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Alta prioridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 21)(52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Prioridad media");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 22)(57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Prioridad baja");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, DashboardHomePageComponent_div_0_div_62_Template, 7, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, DashboardHomePageComponent_div_0_app_aviso_operativo_list_63_Template, 1, 2, "app-aviso-operativo-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const session_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Hola, ", (session_r1.asesor == null ? null : session_r1.asesor.nombreCompleto) || "asesor", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.nowLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.hasPendingAttention ? "Continuar atencion" : "Nueva atencion", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("asesor", session_r1.asesor)("status", session_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.totalAvisos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.highSeverityCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.mediumSeverityCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.lowSeverityCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.avisosLoading && ctx_r0.avisosError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.avisosError);
  }
}
class DashboardHomePageComponent {
  constructor(avisosOperativosService, sessionContextService, changeDetectorRef, atencionStateService, router) {
    this.avisosOperativosService = avisosOperativosService;
    this.sessionContextService = sessionContextService;
    this.changeDetectorRef = changeDetectorRef;
    this.atencionStateService = atencionStateService;
    this.router = router;
    this.session$ = this.sessionContextService.state$;
    this.avisos = [];
    this.avisosLoading = true;
    this.avisosError = null;
    this.nowLabel = '';
    this.pendingRoute = null;
    this.clockTimerId = null;
  }
  ngOnInit() {
    const resumeRoute = this.atencionStateService.resumeRoute;
    this.pendingRoute = resumeRoute && resumeRoute !== '/dashboard' ? resumeRoute : null;
    this.refreshNowLabel();
    this.startClock();
    this.loadAvisosRecientes();
  }
  ngOnDestroy() {
    this.stopClock();
  }
  get hasPendingAttention() {
    return Boolean(this.pendingRoute);
  }
  get totalAvisos() {
    return this.avisos.length;
  }
  get highSeverityCount() {
    return this.avisos.filter(aviso => aviso.severidad === 'alta').length;
  }
  get mediumSeverityCount() {
    return this.avisos.filter(aviso => aviso.severidad === 'media').length;
  }
  get lowSeverityCount() {
    return this.avisos.filter(aviso => aviso.severidad === 'baja').length;
  }
  startAttentionFlow() {
    const route = this.pendingRoute || '/atencion';
    void this.router.navigateByUrl(route);
  }
  goToAvisos() {
    void this.router.navigate(['/avisos-operativos']);
  }
  retryAvisos() {
    this.loadAvisosRecientes(true);
  }
  loadAvisosRecientes(force = false) {
    this.avisosLoading = true;
    this.avisosError = null;
    this.changeDetectorRef.markForCheck();
    this.avisosOperativosService.listarRecientes(4, force).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.error('[DashboardHomePage] Error cargando avisos operativos', error);
      this.avisosLoading = false;
      this.avisosError = 'No se pudieron cargar los avisos operativos recientes.';
      this.changeDetectorRef.markForCheck();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    })).subscribe(avisos => {
      this.avisosLoading = false;
      this.avisos = avisos.map(aviso => ({
        id: aviso.id,
        titulo: aviso.titulo,
        descripcion: aviso.descripcion,
        severidad: aviso.severidad === 'alta' || aviso.severidad === 'media' || aviso.severidad === 'baja' ? aviso.severidad : 'media',
        entidad: aviso.entidadNombre,
        servicio: aviso.servicioNombre,
        fecha: aviso.createdAt
      }));
      this.changeDetectorRef.markForCheck();
    });
  }
  refreshNowLabel() {
    this.nowLabel = new Intl.DateTimeFormat('es-PE', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date());
    this.changeDetectorRef.markForCheck();
  }
  startClock() {
    this.stopClock();
    this.clockTimerId = window.setInterval(() => {
      this.refreshNowLabel();
    }, 60000);
  }
  stopClock() {
    if (this.clockTimerId) {
      window.clearInterval(this.clockTimerId);
      this.clockTimerId = null;
    }
  }
  static {
    this.ɵfac = function DashboardHomePageComponent_Factory(t) {
      return new (t || DashboardHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_avisos_operativos_services_avisos_operativos_service__WEBPACK_IMPORTED_MODULE_0__.AvisosOperativosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_session_context_service__WEBPACK_IMPORTED_MODULE_1__.SessionContextService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_atencion_services_atencion_state_service__WEBPACK_IMPORTED_MODULE_2__.AtencionStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DashboardHomePageComponent,
      selectors: [["app-dashboard-home-page"]],
      decls: 2,
      vars: 3,
      consts: [["class", "page dashboard-home", 4, "ngIf"], [1, "page", "dashboard-home"], [1, "surface-card", "dashboard-home__hero"], [1, "dashboard-home__hero-copy"], [1, "eyebrow"], [1, "page__title"], [1, "page__subtitle"], [1, "dashboard-home__date"], [1, "dashboard-home__hero-actions"], ["type", "button", 1, "button", 3, "click"], ["type", "button", 1, "button", "button--secondary", 3, "click"], [1, "dashboard-home__grid"], [3, "asesor", "status"], [1, "surface-card", "dashboard-home__steps"], [1, "section-title"], [1, "dashboard-home__step-list"], [1, "dashboard-home__step-item"], [1, "surface-card", "dashboard-home__ops"], [1, "dashboard-home__ops-grid"], [1, "dashboard-home__ops-card"], [1, "dashboard-home__ops-card", "dashboard-home__ops-card--danger"], [1, "dashboard-home__ops-card", "dashboard-home__ops-card--warning"], [1, "dashboard-home__ops-card", "dashboard-home__ops-card--info"], [1, "surface-card", "dashboard-home__avisos"], ["class", "dashboard-home__notice dashboard-home__notice--warning", 4, "ngIf"], ["emptyTitle", "Sin avisos recientes", "emptyDescription", "No hay incidencias registradas por el momento.", 3, "avisos", "loading", 4, "ngIf"], [1, "dashboard-home__notice", "dashboard-home__notice--warning"], ["emptyTitle", "Sin avisos recientes", "emptyDescription", "No hay incidencias registradas por el momento.", 3, "avisos", "loading"]],
      template: function DashboardHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DashboardHomePageComponent_div_0_Template, 64, 11, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.session$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_advisor_summary_advisor_summary_component__WEBPACK_IMPORTED_MODULE_3__.AdvisorSummaryComponent, _shared_components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_4__.AvisoOperativoListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.dashboard-home[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n\n.dashboard-home__hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 1rem;\n  align-items: center;\n  background: linear-gradient(180deg, #f4f9ff 0%, #edf5ff 100%);\n}\n\n.dashboard-home__hero-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n}\n\n.dashboard-home__hero-copy[_ngcontent-%COMP%]   .page__title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.dashboard-home__hero-copy[_ngcontent-%COMP%]   .page__subtitle[_ngcontent-%COMP%] {\n  margin-top: 0;\n  max-width: 52rem;\n}\n\n.dashboard-home__date[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.86rem;\n  color: var(--color-text-700);\n  text-transform: capitalize;\n}\n\n.dashboard-home__hero-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.6rem;\n}\n\n.dashboard-home__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.dashboard-home__steps[_ngcontent-%COMP%], .dashboard-home__ops[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.dashboard-home__step-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n}\n\n.dashboard-home__step-item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid var(--color-border);\n  border-radius: 0.75rem;\n  background: #f8fbff;\n}\n\n.dashboard-home__step-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.dashboard-home__step-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n  font-size: 0.84rem;\n  line-height: 1.4;\n}\n\n.dashboard-home__ops-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.7rem;\n}\n\n.dashboard-home__ops-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  padding: 0.8rem 0.85rem;\n  border: 1px solid #d9e5f2;\n  border-radius: 0.75rem;\n  background: #f5f9ff;\n}\n\n.dashboard-home__ops-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n  font-size: 0.8rem;\n}\n\n.dashboard-home__ops-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.dashboard-home__ops-card--danger[_ngcontent-%COMP%] {\n  background: #fff3f3;\n}\n\n.dashboard-home__ops-card--warning[_ngcontent-%COMP%] {\n  background: #fff8ed;\n}\n\n.dashboard-home__ops-card--info[_ngcontent-%COMP%] {\n  background: #edf6ff;\n}\n\n.dashboard-home__avisos[_ngcontent-%COMP%] {\n  background: #f9fcff;\n}\n\n.dashboard-home__notice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n  padding: 1rem;\n  border-radius: var(--radius-md);\n}\n\n.dashboard-home__notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dashboard-home__notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.dashboard-home__notice--warning[_ngcontent-%COMP%] {\n  background: #fff7ea;\n  border: 1px solid rgba(204, 138, 11, 0.2);\n}\n\n@media (max-width: 1199px) {\n  .dashboard-home__hero[_ngcontent-%COMP%], .dashboard-home__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dashboard-home__hero-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3BhZ2VzL2Rhc2hib2FyZC1ob21lL2Rhc2hib2FyZC1ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBOztFQUVFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFOztJQUVFLDBCQUFBO0VBQ0Y7RUFFQTtJQUNFLDBCQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kYXNoYm9hcmQtaG9tZSB7XG4gIGdhcDogMXJlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19oZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBhdXRvO1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNGY5ZmYgMCUsICNlZGY1ZmYgMTAwJSk7XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9faGVyby1jb3B5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjM1cmVtO1xufVxuXG4uZGFzaGJvYXJkLWhvbWVfX2hlcm8tY29weSAucGFnZV9fdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19oZXJvLWNvcHkgLnBhZ2VfX3N1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWF4LXdpZHRoOiA1MnJlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19kYXRlIHtcbiAgbWFyZ2luOiAwLjI1cmVtIDAgMDtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC03MDApO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19oZXJvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNnJlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9fc3RlcHMsXG4uZGFzaGJvYXJkLWhvbWVfX29wcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19zdGVwLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuN3JlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19zdGVwLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMnJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAwLjg1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xufVxuXG4uZGFzaGJvYXJkLWhvbWVfX3N0ZXAtaXRlbSBzdHJvbmcge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19zdGVwLWl0ZW0gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmRhc2hib2FyZC1ob21lX19vcHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAwLjdyZW07XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9fb3BzLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMnJlbTtcbiAgcGFkZGluZzogMC44cmVtIDAuODVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWU1ZjI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNmNWY5ZmY7XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9fb3BzLWNhcmQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZGFzaGJvYXJkLWhvbWVfX29wcy1jYXJkIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmRhc2hib2FyZC1ob21lX19vcHMtY2FyZC0tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjNmMztcbn1cblxuLmRhc2hib2FyZC1ob21lX19vcHMtY2FyZC0td2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY4ZWQ7XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9fb3BzLWNhcmQtLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZWRmNmZmO1xufVxuXG4uZGFzaGJvYXJkLWhvbWVfX2F2aXNvcyB7XG4gIGJhY2tncm91bmQ6ICNmOWZjZmY7XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9fbm90aWNlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjdyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9fbm90aWNlIHAsXG4uZGFzaGJvYXJkLWhvbWVfX25vdGljZSBzdHJvbmcge1xuICBtYXJnaW46IDA7XG59XG5cbi5kYXNoYm9hcmQtaG9tZV9fbm90aWNlLS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjdlYTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDQsIDEzOCwgMTEsIDAuMik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmRhc2hib2FyZC1ob21lX19oZXJvLFxuICAuZGFzaGJvYXJkLWhvbWVfX2dyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmRhc2hib2FyZC1ob21lX19oZXJvLWFjdGlvbnMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_module_ts.js.map