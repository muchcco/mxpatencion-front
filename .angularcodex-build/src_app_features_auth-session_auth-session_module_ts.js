"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["src_app_features_auth-session_auth-session_module_ts"],{

/***/ 3140:
/*!**********************************************************************!*\
  !*** ./src/app/features/auth-session/auth-session-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthSessionRoutingModule: () => (/* binding */ AuthSessionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_guards_tab_lock_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/guards/tab-lock.guard */ 8557);
/* harmony import */ var _pages_session_blocked_session_blocked_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/session-blocked/session-blocked-page.component */ 3817);
/* harmony import */ var _pages_session_bootstrap_session_bootstrap_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/session-bootstrap/session-bootstrap-page.component */ 4085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: 'bloqueada',
  component: _pages_session_blocked_session_blocked_page_component__WEBPACK_IMPORTED_MODULE_1__.SessionBlockedPageComponent
}, {
  path: 'bootstrap',
  component: _pages_session_bootstrap_session_bootstrap_page_component__WEBPACK_IMPORTED_MODULE_2__.SessionBootstrapPageComponent,
  canActivate: [_core_guards_tab_lock_guard__WEBPACK_IMPORTED_MODULE_0__.TabLockGuard]
}, {
  path: 'callback',
  component: _pages_session_bootstrap_session_bootstrap_page_component__WEBPACK_IMPORTED_MODULE_2__.SessionBootstrapPageComponent,
  canActivate: [_core_guards_tab_lock_guard__WEBPACK_IMPORTED_MODULE_0__.TabLockGuard]
}, {
  path: '',
  component: _pages_session_bootstrap_session_bootstrap_page_component__WEBPACK_IMPORTED_MODULE_2__.SessionBootstrapPageComponent,
  canActivate: [_core_guards_tab_lock_guard__WEBPACK_IMPORTED_MODULE_0__.TabLockGuard]
}];
class AuthSessionRoutingModule {
  static {
    this.ɵfac = function AuthSessionRoutingModule_Factory(t) {
      return new (t || AuthSessionRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AuthSessionRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthSessionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7461:
/*!**************************************************************!*\
  !*** ./src/app/features/auth-session/auth-session.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthSessionModule: () => (/* binding */ AuthSessionModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _auth_session_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-session-routing.module */ 3140);
/* harmony import */ var _pages_session_blocked_session_blocked_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/session-blocked/session-blocked-page.component */ 3817);
/* harmony import */ var _pages_session_bootstrap_session_bootstrap_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/session-bootstrap/session-bootstrap-page.component */ 4085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class AuthSessionModule {
  static {
    this.ɵfac = function AuthSessionModule_Factory(t) {
      return new (t || AuthSessionModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AuthSessionModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _auth_session_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthSessionRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthSessionModule, {
    declarations: [_pages_session_blocked_session_blocked_page_component__WEBPACK_IMPORTED_MODULE_2__.SessionBlockedPageComponent, _pages_session_bootstrap_session_bootstrap_page_component__WEBPACK_IMPORTED_MODULE_3__.SessionBootstrapPageComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _auth_session_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthSessionRoutingModule]
  });
})();

/***/ }),

/***/ 3817:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/auth-session/pages/session-blocked/session-blocked-page.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionBlockedPageComponent: () => (/* binding */ SessionBlockedPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 5312);
/* harmony import */ var _core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/tab-lock.service */ 8861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/empty-state/empty-state.component */ 6619);









function SessionBlockedPageComponent_div_0_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SessionBlockedPageComponent_div_0_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.retry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Reintentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SessionBlockedPageComponent_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SessionBlockedPageComponent_div_0_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.goToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ir al login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SessionBlockedPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "section", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sesion bloqueada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Aplicacion en uso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-empty-state", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SessionBlockedPageComponent_div_0_button_11_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SessionBlockedPageComponent_div_0_button_12_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("description", ctx_r0.resolveDetail(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isBackendBlocked(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isBackendBlocked(state_r1));
  }
}
class SessionBlockedPageComponent {
  constructor(activatedRoute, changeDetectorRef, router, tabLockService) {
    this.activatedRoute = activatedRoute;
    this.changeDetectorRef = changeDetectorRef;
    this.router = router;
    this.tabLockService = tabLockService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.state$ = this.tabLockService.state$;
    this.message = _core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TAB_LOCK_BLOCKED_MESSAGE;
    this.redirectTo = '/dashboard';
  }
  ngOnInit() {
    this.redirectTo = this.resolveRedirectTarget(this.activatedRoute.snapshot.queryParamMap.get('redirectTo'));
    this.tabLockService.initialize();
    this.tabLockService.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(state => {
      if (state.status === 'active') {
        void this.router.navigateByUrl(this.redirectTo);
        return;
      }
      this.changeDetectorRef.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  retry() {
    if (this.tabLockService.retryAcquire() && this.tabLockService.canUseApp) {
      void this.router.navigateByUrl(this.redirectTo);
    }
  }
  goToLogin() {
    this.tabLockService.clearBackendBlock();
    this.tabLockService.releaseLock();
    const loginUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authLoginUrl, window.location.origin);
    loginUrl.searchParams.set('redirectTo', this.redirectTo);
    window.location.assign(loginUrl.toString());
  }
  isBackendBlocked(state) {
    return state.reason === 'backend-session-active';
  }
  resolveDetail(state) {
    if (this.isBackendBlocked(state)) {
      return 'El backend informo que ya existe una sesion activa para este usuario. Vuelve a ingresar cuando la otra sesion se cierre.';
    }
    return 'Esta pestaña se habilitara automaticamente cuando la ventana activa cierre o cuando el heartbeat de la otra pestaña caduque.';
  }
  resolveRedirectTarget(redirectTo) {
    if (!redirectTo || redirectTo === '/' || !redirectTo.startsWith('/')) {
      return '/dashboard';
    }
    return redirectTo;
  }
  static {
    this.ɵfac = function SessionBlockedPageComponent_Factory(t) {
      return new (t || SessionBlockedPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TabLockService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SessionBlockedPageComponent,
      selectors: [["app-session-blocked-page"]],
      decls: 2,
      vars: 3,
      consts: [["class", "page session-blocked", 4, "ngIf"], [1, "page", "session-blocked"], [1, "surface-card", "surface-card--accent", "session-blocked__panel"], [1, "eyebrow"], [1, "page__title"], [1, "page__subtitle"], [1, "surface-card", "session-blocked__content"], ["title", "No se puede continuar en esta pesta\u00F1a", 3, "description"], [1, "session-blocked__actions"], ["type", "button", "class", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "button", 3, "click"]],
      template: function SessionBlockedPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SessionBlockedPageComponent_div_0_Template, 13, 4, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.state$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      styles: [".session-blocked[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem;\n  align-content: center;\n}\n\n.session-blocked__panel[_ngcontent-%COMP%], .session-blocked__content[_ngcontent-%COMP%] {\n  width: min(760px, 100%);\n  margin: 0 auto;\n}\n\n.session-blocked__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.session-blocked__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n\n@media (max-width: 1199px) {\n  .session-blocked[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .session-blocked__actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .session-blocked__actions[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC1zZXNzaW9uL3BhZ2VzL3Nlc3Npb24tYmxvY2tlZC9zZXNzaW9uLWJsb2NrZWQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQ0Y7RUFFQTtJQUNFLHdCQUFBO0VBQUY7RUFHQTtJQUNFLFdBQUE7RUFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb24tYmxvY2tlZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAycmVtO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZXNzaW9uLWJsb2NrZWRfX3BhbmVsLFxuLnNlc3Npb24tYmxvY2tlZF9fY29udGVudCB7XG4gIHdpZHRoOiBtaW4oNzYwcHgsIDEwMCUpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNlc3Npb24tYmxvY2tlZF9fY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLnNlc3Npb24tYmxvY2tlZF9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMC43NXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuc2Vzc2lvbi1ibG9ja2VkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLnNlc3Npb24tYmxvY2tlZF9fYWN0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICB9XG5cbiAgLnNlc3Npb24tYmxvY2tlZF9fYWN0aW9ucyAuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4085:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/auth-session/pages/session-bootstrap/session-bootstrap-page.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionBootstrapPageComponent: () => (/* binding */ SessionBootstrapPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-session.service */ 9713);
/* harmony import */ var _core_services_session_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/session-context.service */ 774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/loading-skeleton/loading-skeleton.component */ 2121);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui/empty-state/empty-state.component */ 6619);
/* harmony import */ var _shared_ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/status-badge/status-badge.component */ 8333);












function SessionBootstrapPageComponent_div_0_app_loading_skeleton_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading-skeleton", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("lines", 4);
  }
}
function SessionBootstrapPageComponent_div_0_section_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 21)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Su sesion ha caducado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Redirigiendo al login en ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " segundo(s). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SessionBootstrapPageComponent_div_0_section_15_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.goToLoginNow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Ir al login ahora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.countdownSeconds);
  }
}
function SessionBootstrapPageComponent_div_0_app_empty_state_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-empty-state", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function SessionBootstrapPageComponent_div_0_app_empty_state_16_Template_app_empty_state_action_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.retry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const session_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("description", session_r1.message || "Confirma que el backend Laravel este disponible y reintenta.")("actionLabel", ctx_r4.hasSsoPayload() ? "Reintentar callback" : "Reintentar verificacion");
  }
}
function SessionBootstrapPageComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24)(1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Sesion validada. Redirigiendo al flujo principal del sistema. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SessionBootstrapPageComponent_div_0_div_17_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.retry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Refrescar contexto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SessionBootstrapPageComponent_div_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Siguiente accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Redireccion a login en ", ctx_r6.countdownSeconds, "s");
  }
}
function SessionBootstrapPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "section", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "section", 7)(10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-status-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, SessionBootstrapPageComponent_div_0_app_loading_skeleton_14_Template, 1, 1, "app-loading-skeleton", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SessionBootstrapPageComponent_div_0_section_15_Template, 10, 1, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SessionBootstrapPageComponent_div_0_app_empty_state_16_Template, 1, 2, "app-empty-state", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SessionBootstrapPageComponent_div_0_div_17_Template, 5, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "section", 15)(19, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Criterios de la base implementada");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 17)(22, "div", 18)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Modo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 18)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Seguridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Cookies y sesion via backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 18)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Interceptors");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Credentials, loading y errores");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 18)(38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Objetivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Arranque rapido y sin autenticacion ficticia");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 18)(43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Destino");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, SessionBootstrapPageComponent_div_0_div_47_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const session_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.hasSsoPayload() ? "Auth callback" : "Sesion institucional", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.resolveTitle(session_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.resolveSubtitle(session_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", session_r1.status)("tone", ctx_r0.resolveTone(session_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", session_r1.message || "Preparando el contexto institucional del asesor.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.sessionExpired && (session_r1.status === "idle" || session_r1.status === "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.sessionExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.sessionExpired && (session_r1.status === "error" || session_r1.status === "anonymous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", session_r1.status === "authenticated");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.hasSsoPayload() ? "SSO callback" : "Sesion existente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.redirectTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.sessionExpired);
  }
}
class SessionBootstrapPageComponent {
  constructor(activatedRoute, authSessionService, router, sessionContextService, changeDetectorRef) {
    this.activatedRoute = activatedRoute;
    this.authSessionService = authSessionService;
    this.router = router;
    this.sessionContextService = sessionContextService;
    this.changeDetectorRef = changeDetectorRef;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.countdownTimer = null;
    this.redirectingToLogin = false;
    this.redirectingToShell = false;
    this.callbackQueryCleared = false;
    this.session$ = this.sessionContextService.state$;
    this.redirectTo = '/dashboard';
    this.mode = 'bootstrap';
    this.countdownSeconds = 10;
    this.sessionExpired = false;
    this.callbackPayload = {};
  }
  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.routeConfig?.path === 'callback' ? 'callback' : 'bootstrap';
    this.redirectTo = this.resolveRedirectTarget(this.activatedRoute.snapshot.queryParamMap.get('redirectTo'));
    this.callbackPayload = {
      token: this.activatedRoute.snapshot.queryParamMap.get('token'),
      rt: this.activatedRoute.snapshot.queryParamMap.get('rt')
    };
    console.debug('[SSO Callback] Query params recibidos', {
      mode: this.mode,
      redirectTo: this.redirectTo,
      token: this.maskValue(this.callbackPayload.token),
      rt: this.maskValue(this.callbackPayload.rt)
    });
    this.sessionContextService.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(session => {
      if (session.status === 'authenticated') {
        this.handleAuthenticatedSession();
      }
    });
    if (this.mode === 'callback' && !this.hasSsoPayload()) {
      this.startExpiredSessionFlow();
      return;
    }
    if (this.sessionContextService.snapshot.status !== 'loading' && !this.sessionExpired) {
      this.retry();
    }
  }
  ngOnDestroy() {
    this.stopCountdown();
    this.destroy$.next();
    this.destroy$.complete();
  }
  retry() {
    if (this.sessionExpired) {
      return;
    }
    const request$ = this.hasSsoPayload() ? this.authSessionService.ssoCallback(this.callbackPayload) : this.authSessionService.ensureSession(true);
    request$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe({
      error: error => {
        if (this.shouldHandleAsExpired(error)) {
          this.startExpiredSessionFlow();
        }
        return;
      }
    });
  }
  goToLoginNow() {
    if (this.redirectingToLogin) {
      return;
    }
    this.redirectingToLogin = true;
    this.stopCountdown();
    const loginUrl = this.buildLoginUrl();
    console.debug('[SSO Callback] Redirigiendo al login', {
      loginUrl,
      redirectTo: this.redirectTo
    });
    window.location.assign(loginUrl);
  }
  resolveTitle(status) {
    if (this.sessionExpired) {
      return 'Sesion expirada';
    }
    if (status === 'error' || status === 'anonymous') {
      return this.hasSsoPayload() ? 'Error al resolver acceso SSO' : 'No se pudo validar la sesion';
    }
    if (status === 'authenticated') {
      return 'Sesion validada';
    }
    return this.hasSsoPayload() ? 'Procesando acceso SSO' : 'Validando sesion institucional';
  }
  resolveSubtitle(status) {
    if (this.sessionExpired) {
      return 'Su sesion ha caducado.';
    }
    if (status === 'error' || status === 'anonymous') {
      return this.hasSsoPayload() ? 'El backend no pudo resolver el callback SSO o no emitio la sesion esperada.' : 'No se encontro una sesion activa para continuar con el shell principal.';
    }
    return this.hasSsoPayload() ? 'Angular solo captura token o rt desde la URL, los entrega al backend Laravel y espera la sesion segura resultante.' : 'El frontend verifica si ya existe una sesion/cookie valida para el asesor antes de ingresar al shell principal.';
  }
  resolveTone(status) {
    switch (status) {
      case 'authenticated':
        return 'success';
      case 'loading':
        return 'info';
      case 'error':
        return 'danger';
      case 'anonymous':
        return 'warning';
      default:
        return 'default';
    }
  }
  hasSsoPayload() {
    return Boolean(this.callbackPayload.token || this.callbackPayload.rt);
  }
  resolveRedirectTarget(redirectTo) {
    if (!redirectTo || redirectTo === '/') {
      return '/dashboard';
    }
    if (!redirectTo.startsWith('/')) {
      return '/dashboard';
    }
    return redirectTo;
  }
  shouldHandleAsExpired(error) {
    if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpErrorResponse)) {
      return false;
    }
    if (this.hasSsoPayload()) {
      return false;
    }
    if (error.status === 401 || error.status === 419) {
      return true;
    }
    return error.status === 400 || error.status === 422;
  }
  handleAuthenticatedSession() {
    if (this.redirectingToShell) {
      return;
    }
    this.redirectingToShell = true;
    console.debug('[SSO Callback] Sesion autenticada, redirigiendo', {
      redirectTo: this.redirectTo
    });
    if (this.mode === 'callback' && this.hasSsoPayload()) {
      void this.clearSensitiveQueryParams().finally(() => {
        void this.router.navigateByUrl(this.redirectTo);
      });
      return;
    }
    void this.router.navigateByUrl(this.redirectTo);
  }
  startExpiredSessionFlow() {
    if (this.sessionExpired) {
      return;
    }
    this.sessionExpired = true;
    this.countdownSeconds = 10;
    this.sessionContextService.setAnonymous('Su sesion ha caducado.');
    this.startCountdown();
    this.changeDetectorRef.markForCheck();
  }
  startCountdown() {
    this.stopCountdown();
    this.countdownTimer = window.setInterval(() => {
      if (this.countdownSeconds <= 1) {
        this.countdownSeconds = 0;
        this.changeDetectorRef.markForCheck();
        this.goToLoginNow();
        return;
      }
      this.countdownSeconds -= 1;
      this.changeDetectorRef.markForCheck();
    }, 1000);
  }
  stopCountdown() {
    if (this.countdownTimer) {
      window.clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }
  buildLoginUrl() {
    const loginUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authLoginUrl, window.location.origin);
    loginUrl.searchParams.set('redirectTo', this.redirectTo);
    return loginUrl.toString();
  }
  clearSensitiveQueryParams() {
    if (this.callbackQueryCleared) {
      return Promise.resolve(true);
    }
    this.callbackQueryCleared = true;
    console.debug('[SSO Callback] Limpiando token/rt de la URL');
    this.callbackPayload = {};
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {},
      replaceUrl: true
    });
  }
  maskValue(value) {
    if (!value) {
      return null;
    }
    if (value.length <= 12) {
      return value;
    }
    return `${value.slice(0, 6)}...${value.slice(-6)}`;
  }
  static {
    this.ɵfac = function SessionBootstrapPageComponent_Factory(t) {
      return new (t || SessionBootstrapPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_session_service__WEBPACK_IMPORTED_MODULE_1__.AuthSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_session_context_service__WEBPACK_IMPORTED_MODULE_2__.SessionContextService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: SessionBootstrapPageComponent,
      selectors: [["app-session-bootstrap-page"]],
      decls: 2,
      vars: 3,
      consts: [["class", "page session-bootstrap", 4, "ngIf"], [1, "page", "session-bootstrap"], [1, "surface-card", "surface-card--accent"], [1, "eyebrow"], [1, "page__title"], [1, "page__subtitle"], [1, "grid", "grid--2"], [1, "surface-card"], [1, "session-bootstrap__state"], [3, "label", "tone"], [1, "section-copy"], [3, "lines", 4, "ngIf"], ["class", "session-bootstrap__expired", 4, "ngIf"], ["title", "No se pudo establecer la sesion", 3, "description", "actionLabel", "action", 4, "ngIf"], ["class", "session-bootstrap__success", 4, "ngIf"], [1, "surface-card", "surface-card--muted"], [1, "section-title"], [1, "stat-list"], [1, "stat-item"], ["class", "stat-item", 4, "ngIf"], [3, "lines"], [1, "session-bootstrap__expired"], ["type", "button", 1, "button", 3, "click"], ["title", "No se pudo establecer la sesion", 3, "description", "actionLabel", "action"], [1, "session-bootstrap__success"]],
      template: function SessionBootstrapPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SessionBootstrapPageComponent_div_0_Template, 48, 13, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.session$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSkeletonComponent, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__.EmptyStateComponent, _shared_ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_5__.StatusBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
      styles: [".session-bootstrap[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n\n.session-bootstrap__state[_ngcontent-%COMP%], .session-bootstrap__success[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  margin-bottom: 1.2rem;\n}\n\n.session-bootstrap__expired[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  padding: 1rem;\n  border: 1px solid rgba(204, 138, 11, 0.24);\n  border-radius: 0.9rem;\n  background: #fff7ea;\n}\n\n.session-bootstrap__expired[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .session-bootstrap__expired[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.session-bootstrap__expired[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n}\n\n.session-bootstrap__expired[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC1zZXNzaW9uL3BhZ2VzL3Nlc3Npb24tYm9vdHN0cmFwL3Nlc3Npb24tYm9vdHN0cmFwLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb24tYm9vdHN0cmFwIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5zZXNzaW9uLWJvb3RzdHJhcF9fc3RhdGUsXG4uc2Vzc2lvbi1ib290c3RyYXBfX3N1Y2Nlc3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuODVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbn1cblxuLnNlc3Npb24tYm9vdHN0cmFwX19leHBpcmVkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNCwgMTM4LCAxMSwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjdlYTtcbn1cblxuLnNlc3Npb24tYm9vdHN0cmFwX19leHBpcmVkIHN0cm9uZyxcbi5zZXNzaW9uLWJvb3RzdHJhcF9fZXhwaXJlZCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2Vzc2lvbi1ib290c3RyYXBfX2V4cGlyZWQgcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG59XG5cbi5zZXNzaW9uLWJvb3RzdHJhcF9fZXhwaXJlZCAuYnV0dG9uIHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_auth-session_auth-session_module_ts.js.map