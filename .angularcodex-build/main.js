"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/role.guard */ 400);
/* harmony import */ var _core_guards_session_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/session.guard */ 4068);
/* harmony import */ var _core_guards_tab_lock_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/tab-lock.guard */ 8557);
/* harmony import */ var _shared_layouts_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/app-shell/app-shell.component */ 3708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_auth-session_auth-session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth-session/auth-session.module */ 7461)).then(module => module.AuthSessionModule)
}, {
  path: 'sesion',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_auth-session_auth-session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth-session/auth-session.module */ 7461)).then(module => module.AuthSessionModule)
}, {
  path: '',
  component: _shared_layouts_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_3__.AppShellComponent,
  canActivate: [_core_guards_tab_lock_guard__WEBPACK_IMPORTED_MODULE_2__.TabLockGuard, _core_guards_session_guard__WEBPACK_IMPORTED_MODULE_1__.SessionGuard],
  canActivateChild: [_core_guards_tab_lock_guard__WEBPACK_IMPORTED_MODULE_2__.TabLockGuard, _core_guards_session_guard__WEBPACK_IMPORTED_MODULE_1__.SessionGuard],
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 2125)).then(module => module.DashboardModule)
  }, {
    path: 'atencion',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_atencion_atencion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/atencion/atencion.module */ 6961)).then(module => module.AtencionModule)
  }, {
    path: 'avisos-operativos',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_avisos-operativos_avisos-operativos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/avisos-operativos/avisos-operativos.module */ 1733)).then(module => module.AvisosOperativosModule)
  }, {
    path: 'admin',
    canActivate: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
    canActivateChild: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
    data: {
      roles: ['administrador', 'moderador']
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/admin.module */ 6269)).then(module => module.AdminModule)
  }, {
    path: 'catalogos',
    canActivate: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
    canActivateChild: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
    data: {
      roles: ['administrador', 'moderador']
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_catalogos_catalogos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/catalogos/catalogos.module */ 6721)).then(module => module.CatalogosModule)
  }]
}, {
  path: '**',
  redirectTo: 'dashboard'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules,
        scrollPositionRestoration: 'enabled'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'MAC Express Atencion';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 8423);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 8423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _interceptors_api_error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/api-error.interceptor */ 7951);
/* harmony import */ var _interceptors_credentials_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/credentials.interceptor */ 4870);
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/loading.interceptor */ 5196);
/* harmony import */ var _interceptors_tab_lock_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/tab-lock.interceptor */ 1369);
/* harmony import */ var _services_tab_lock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/tab-lock.service */ 8861);








function initializeTabLock(tabLockService) {
  return () => tabLockService.initialize();
}
class CoreModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('CoreModule should only be imported once.');
    }
  }
  static {
    this.ɵfac = function CoreModule_Factory(t) {
      return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](CoreModule, 12));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.APP_INITIALIZER,
        useFactory: initializeTabLock,
        deps: [_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_4__.TabLockService],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _interceptors_tab_lock_interceptor__WEBPACK_IMPORTED_MODULE_3__.TabLockInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _interceptors_credentials_interceptor__WEBPACK_IMPORTED_MODULE_1__.CredentialsInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_2__.LoadingInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _interceptors_api_error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ApiErrorInterceptor,
        multi: true
      }],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
  });
})();

/***/ }),

/***/ 400:
/*!*******************************************!*\
  !*** ./src/app/core/guards/role.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleGuard: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/notification.service */ 5567);
/* harmony import */ var _services_role_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/role-access.service */ 5073);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_session_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/session-context.service */ 774);






class RoleGuard {
  constructor(notificationService, roleAccessService, router, sessionContextService) {
    this.notificationService = notificationService;
    this.roleAccessService = roleAccessService;
    this.router = router;
    this.sessionContextService = sessionContextService;
  }
  canActivate(route, state) {
    return this.resolveAccess(route, state);
  }
  canActivateChild(route, state) {
    return this.resolveAccess(route, state);
  }
  resolveAccess(route, state) {
    const expectedRoles = route.data['roles'] || [];
    const asesor = this.sessionContextService.snapshot.asesor;
    if (expectedRoles.length === 0 || this.roleAccessService.hasAnyRole(asesor, expectedRoles)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
    }
    this.notificationService.warning('Acceso restringido', 'Tu perfil no tiene permisos para ingresar a este modulo.');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.router.createUrlTree(['/dashboard'], {
      queryParams: {
        deniedFrom: state.url
      }
    }));
  }
  static {
    this.ɵfac = function RoleGuard_Factory(t) {
      return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_role_access_service__WEBPACK_IMPORTED_MODULE_1__.RoleAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_session_context_service__WEBPACK_IMPORTED_MODULE_2__.SessionContextService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: RoleGuard,
      factory: RoleGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4068:
/*!**********************************************!*\
  !*** ./src/app/core/guards/session.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionGuard: () => (/* binding */ SessionGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _features_auth_session_services_auth_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/auth-session/services/auth-session.service */ 9713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_session_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/session-context.service */ 774);






class SessionGuard {
  constructor(authSessionService, router, sessionContextService) {
    this.authSessionService = authSessionService;
    this.router = router;
    this.sessionContextService = sessionContextService;
  }
  canActivate(route, state) {
    return this.resolveAccess(route, state);
  }
  canActivateChild(route, state) {
    return this.resolveAccess(route, state);
  }
  resolveAccess(route, state) {
    const token = route.queryParamMap.get('token');
    const rt = route.queryParamMap.get('rt');
    if (token || rt) {
      console.debug('[SSO Guard] token/rt detectado en ruta protegida', {
        hasToken: Boolean(token),
        hasRt: Boolean(rt),
        redirectTo: this.resolveCleanPath(state.url)
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.router.createUrlTree(['/auth/callback'], {
        queryParams: {
          ...(token ? {
            token
          } : {}),
          ...(rt ? {
            rt
          } : {}),
          redirectTo: this.resolveCleanPath(state.url)
        }
      }));
    }
    const session = this.sessionContextService.snapshot;
    if (session.status === 'authenticated') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    }
    if (session.status === 'loading') {
      return this.waitForResolution(state);
    }
    return this.authSessionService.ensureSession().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.redirectToBootstrap(state))));
  }
  waitForResolution(state) {
    return this.sessionContextService.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(session => session.status !== 'loading'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(session => session.status === 'authenticated' ? true : this.redirectToBootstrap(state)));
  }
  redirectToBootstrap(state) {
    return this.router.createUrlTree(['/sesion/bootstrap'], {
      queryParams: {
        redirectTo: this.resolveCleanPath(state.url)
      }
    });
  }
  resolveCleanPath(url) {
    const cleanPath = url.split('?')[0] || '/dashboard';
    return cleanPath === '/' ? '/dashboard' : cleanPath;
  }
  static {
    this.ɵfac = function SessionGuard_Factory(t) {
      return new (t || SessionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_features_auth_session_services_auth_session_service__WEBPACK_IMPORTED_MODULE_0__.AuthSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_session_context_service__WEBPACK_IMPORTED_MODULE_1__.SessionContextService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: SessionGuard,
      factory: SessionGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8557:
/*!***********************************************!*\
  !*** ./src/app/core/guards/tab-lock.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabLockGuard: () => (/* binding */ TabLockGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_tab_lock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/tab-lock.service */ 8861);




class TabLockGuard {
  constructor(router, tabLockService) {
    this.router = router;
    this.tabLockService = tabLockService;
  }
  canActivate(route, state) {
    return this.resolveAccess(state);
  }
  canActivateChild(route, state) {
    return this.resolveAccess(state);
  }
  resolveAccess(state) {
    this.tabLockService.initialize();
    if (this.tabLockService.canUseApp) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.router.createUrlTree(['/sesion/bloqueada'], {
      queryParams: {
        reason: this.tabLockService.snapshot.reason || 'active-tab',
        redirectTo: this.resolveCleanPath(state.url)
      }
    }));
  }
  resolveCleanPath(url) {
    const cleanPath = url.split('?')[0] || '/dashboard';
    return cleanPath === '/' ? '/dashboard' : cleanPath;
  }
  static {
    this.ɵfac = function TabLockGuard_Factory(t) {
      return new (t || TabLockGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_0__.TabLockService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TabLockGuard,
      factory: TabLockGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7951:
/*!************************************************************!*\
  !*** ./src/app/core/interceptors/api-error.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiErrorInterceptor: () => (/* binding */ ApiErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/http-context-tokens.model */ 387);
/* harmony import */ var _services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tab-lock.service */ 8861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-base.service */ 294);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ 5567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_session_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session-context.service */ 774);











class ApiErrorInterceptor {
  constructor(apiBaseService, notificationService, router, sessionContextService, tabLockService) {
    this.apiBaseService = apiBaseService;
    this.notificationService = notificationService;
    this.router = router;
    this.sessionContextService = sessionContextService;
    this.tabLockService = tabLockService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
      }
      const skipGlobalHandling = request.context.get(_models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__.SKIP_GLOBAL_ERROR);
      if (this.isSessionAlreadyActive(error)) {
        const shouldAlert = this.tabLockService.blockFromBackend();
        this.sessionContextService.setAnonymous(_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TAB_LOCK_BLOCKED_MESSAGE);
        if (shouldAlert) {
          window.alert(_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TAB_LOCK_BLOCKED_MESSAGE);
        }
        void this.router.navigate(['/sesion/bloqueada'], {
          queryParams: {
            reason: 'backend-session-active',
            redirectTo: this.resolveCleanPath(this.router.url)
          },
          replaceUrl: true
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
      }
      if (!skipGlobalHandling && (error.status === 401 || error.status === 419)) {
        this.sessionContextService.setAnonymous('La sesion institucional expiro o no es valida.');
        void this.router.navigate(['/sesion/bootstrap'], {
          queryParams: {
            reason: 'session-expired'
          }
        });
      }
      const shouldNotify = this.apiBaseService.isApiRequest(request.url) && !skipGlobalHandling;
      if (shouldNotify) {
        this.notificationService.error('No se pudo completar la solicitud', this.resolveMessage(error));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  resolveMessage(error) {
    if (!navigator.onLine) {
      return 'Verifica la conectividad antes de continuar.';
    }
    const apiMessage = error.error?.message ?? error.message;
    if (error.status === 0) {
      return 'No hubo respuesta del servidor o la red esta lenta.';
    }
    return apiMessage || 'Ocurrio un problema inesperado con la API.';
  }
  isSessionAlreadyActive(error) {
    if (error.status !== 409) {
      return false;
    }
    return this.resolveMetaReason(error.error) === 'SESSION_ALREADY_ACTIVE';
  }
  resolveMetaReason(errorPayload) {
    if (!errorPayload || typeof errorPayload !== 'object') {
      return null;
    }
    const meta = errorPayload.meta;
    if (!meta || typeof meta !== 'object') {
      return null;
    }
    const reason = meta.reason;
    return typeof reason === 'string' ? reason : null;
  }
  resolveCleanPath(url) {
    const cleanPath = url.split('?')[0] || '/dashboard';
    return cleanPath === '/' ? '/dashboard' : cleanPath;
  }
  static {
    this.ɵfac = function ApiErrorInterceptor_Factory(t) {
      return new (t || ApiErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_api_base_service__WEBPACK_IMPORTED_MODULE_2__.ApiBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_session_context_service__WEBPACK_IMPORTED_MODULE_4__.SessionContextService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TabLockService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: ApiErrorInterceptor,
      factory: ApiErrorInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4870:
/*!**************************************************************!*\
  !*** ./src/app/core/interceptors/credentials.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CredentialsInterceptor: () => (/* binding */ CredentialsInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api-base.service */ 294);


class CredentialsInterceptor {
  constructor(apiBaseService) {
    this.apiBaseService = apiBaseService;
  }
  intercept(request, next) {
    const isApiRequest = this.apiBaseService.isApiRequest(request.url);
    if (!isApiRequest || request.withCredentials) {
      return next.handle(request);
    }
    return next.handle(request.clone({
      withCredentials: true
    }));
  }
  static {
    this.ɵfac = function CredentialsInterceptor_Factory(t) {
      return new (t || CredentialsInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CredentialsInterceptor,
      factory: CredentialsInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 5196:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/http-context-tokens.model */ 387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_api_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-base.service */ 294);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 8660);





class LoadingInterceptor {
  constructor(apiBaseService, loadingService) {
    this.apiBaseService = apiBaseService;
    this.loadingService = loadingService;
  }
  intercept(request, next) {
    const shouldTrack = this.apiBaseService.isApiRequest(request.url) && !request.context.get(_models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__.SKIP_GLOBAL_LOADING);
    if (shouldTrack) {
      this.loadingService.show();
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
      if (shouldTrack) {
        this.loadingService.hide();
      }
    }));
  }
  static {
    this.ɵfac = function LoadingInterceptor_Factory(t) {
      return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_base_service__WEBPACK_IMPORTED_MODULE_1__.ApiBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: LoadingInterceptor,
      factory: LoadingInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 1369:
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/tab-lock.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabLockInterceptor: () => (/* binding */ TabLockInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _services_tab_lock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/tab-lock.service */ 8861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_api_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-base.service */ 294);






class TabLockInterceptor {
  constructor(apiBaseService, tabLockService) {
    this.apiBaseService = apiBaseService;
    this.tabLockService = tabLockService;
  }
  intercept(request, next) {
    this.tabLockService.initialize();
    if (this.apiBaseService.isApiRequest(request.url) && this.tabLockService.isBlocked) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse({
        error: {
          message: _services_tab_lock_service__WEBPACK_IMPORTED_MODULE_0__.TAB_LOCK_BLOCKED_MESSAGE,
          meta: {
            reason: 'TAB_LOCK_BLOCKED'
          }
        },
        status: 0,
        statusText: 'TAB_LOCK_BLOCKED',
        url: request.url
      }));
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function TabLockInterceptor_Factory(t) {
      return new (t || TabLockInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_base_service__WEBPACK_IMPORTED_MODULE_1__.ApiBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_0__.TabLockService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: TabLockInterceptor,
      factory: TabLockInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 387:
/*!**********************************************************!*\
  !*** ./src/app/core/models/http-context-tokens.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SKIP_GLOBAL_ERROR: () => (/* binding */ SKIP_GLOBAL_ERROR),
/* harmony export */   SKIP_GLOBAL_LOADING: () => (/* binding */ SKIP_GLOBAL_LOADING)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);

const SKIP_GLOBAL_LOADING = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => false);
const SKIP_GLOBAL_ERROR = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => false);

/***/ }),

/***/ 294:
/*!***************************************************!*\
  !*** ./src/app/core/services/api-base.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiBaseService: () => (/* binding */ ApiBaseService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ApiBaseService {
  constructor() {
    this.apiPrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl.replace(/\/+$/, '');
  }
  buildUrl(path) {
    const cleanPath = path.replace(/^\/+/, '');
    return `${this.apiPrefix}/${cleanPath}`;
  }
  isApiRequest(url) {
    try {
      const requestUrl = new URL(url, window.location.origin);
      const apiUrl = new URL(this.apiPrefix, window.location.origin);
      return requestUrl.pathname.startsWith(apiUrl.pathname);
    } catch {
      return url.startsWith(this.apiPrefix);
    }
  }
  unwrap(response) {
    return response.data;
  }
  static {
    this.ɵfac = function ApiBaseService_Factory(t) {
      return new (t || ApiBaseService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ApiBaseService,
      factory: ApiBaseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8660:
/*!**************************************************!*\
  !*** ./src/app/core/services/loading.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LoadingService {
  constructor() {
    this.activeRequests = 0;
    this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLoading$ = this.loadingSubject.asObservable();
  }
  show() {
    this.activeRequests += 1;
    if (!this.loadingSubject.value) {
      this.loadingSubject.next(true);
    }
  }
  hide() {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    if (this.activeRequests === 0 && this.loadingSubject.value) {
      this.loadingSubject.next(false);
    }
  }
  reset() {
    this.activeRequests = 0;
    this.loadingSubject.next(false);
  }
  static {
    this.ɵfac = function LoadingService_Factory(t) {
      return new (t || LoadingService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoadingService,
      factory: LoadingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5567:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class NotificationService {
  constructor() {
    this.toastSequence = 0;
    this.messagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.messages$ = this.messagesSubject.asObservable();
  }
  success(title, description) {
    this.push('success', title, description);
  }
  info(title, description) {
    this.push('info', title, description);
  }
  warning(title, description) {
    this.push('warning', title, description);
  }
  error(title, description) {
    this.push('danger', title, description);
  }
  dismiss(id) {
    this.messagesSubject.next(this.messagesSubject.value.filter(message => message.id !== id));
  }
  push(tone, title, description) {
    const message = {
      id: ++this.toastSequence,
      tone,
      title,
      description
    };
    this.messagesSubject.next([...this.messagesSubject.value, message]);
    window.setTimeout(() => this.dismiss(message.id), 5000);
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5073:
/*!******************************************************!*\
  !*** ./src/app/core/services/role-access.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleAccessService: () => (/* binding */ RoleAccessService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class RoleAccessService {
  canAccessAdmin(asesor) {
    return this.hasAnyRole(asesor, ['administrador', 'moderador']);
  }
  hasAnyRole(asesor, expectedRoles) {
    if (!asesor) {
      return false;
    }
    const normalizedRoles = this.resolveRoles(asesor);
    return expectedRoles.some(role => normalizedRoles.includes(this.normalizeValue(role)));
  }
  resolveRoles(asesor) {
    const roles = new Set();
    for (const role of asesor?.roles || []) {
      const normalizedRole = this.normalizeValue(role);
      if (normalizedRole) {
        roles.add(normalizedRole);
      }
    }
    const normalizedCargo = this.normalizeValue(asesor?.cargo);
    if (normalizedCargo) {
      roles.add(normalizedCargo);
    }
    for (const role of this.readPersistedRoles()) {
      const normalizedRole = this.normalizeValue(role);
      if (normalizedRole) {
        roles.add(normalizedRole);
      }
    }
    return Array.from(roles);
  }
  readPersistedRoles() {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
      return [];
    }
    try {
      const rawRoles = window.localStorage.getItem('auth_roles');
      if (!rawRoles) {
        return [];
      }
      const parsedRoles = JSON.parse(rawRoles);
      return Array.isArray(parsedRoles) ? parsedRoles.filter(role => typeof role === 'string') : [];
    } catch (error) {
      console.warn('[RoleAccessService] No se pudieron leer auth_roles', error);
      return [];
    }
  }
  normalizeValue(value) {
    return typeof value === 'string' ? value.trim().toLowerCase() : '';
  }
  static {
    this.ɵfac = function RoleAccessService_Factory(t) {
      return new (t || RoleAccessService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoleAccessService,
      factory: RoleAccessService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 774:
/*!**********************************************************!*\
  !*** ./src/app/core/services/session-context.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionContextService: () => (/* binding */ SessionContextService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


const INITIAL_SESSION_STATE = {
  status: 'idle',
  asesor: null,
  initialized: false,
  message: null
};
class SessionContextService {
  constructor() {
    this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(INITIAL_SESSION_STATE);
    this.state$ = this.stateSubject.asObservable();
  }
  get snapshot() {
    return this.stateSubject.value;
  }
  setLoading(message = 'Validando sesion institucional...') {
    this.patchState({
      status: 'loading',
      message
    });
  }
  setAuthenticated(asesor, message = 'Sesion institucional validada.') {
    this.patchState({
      status: 'authenticated',
      asesor,
      initialized: true,
      message
    });
  }
  setAnonymous(message = 'No se encontro una sesion valida.') {
    this.patchState({
      status: 'anonymous',
      asesor: null,
      initialized: true,
      message
    });
  }
  setError(message = 'No fue posible validar la sesion.') {
    this.patchState({
      status: 'error',
      initialized: true,
      message
    });
  }
  reset() {
    this.stateSubject.next(INITIAL_SESSION_STATE);
  }
  patchState(partialState) {
    this.stateSubject.next({
      ...this.stateSubject.value,
      ...partialState
    });
  }
  static {
    this.ɵfac = function SessionContextService_Factory(t) {
      return new (t || SessionContextService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SessionContextService,
      factory: SessionContextService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8861:
/*!***************************************************!*\
  !*** ./src/app/core/services/tab-lock.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TAB_LOCK_BLOCKED_MESSAGE: () => (/* binding */ TAB_LOCK_BLOCKED_MESSAGE),
/* harmony export */   TabLockService: () => (/* binding */ TabLockService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


const TAB_LOCK_BLOCKED_MESSAGE = 'La aplicación ya está abierta en otra ventana o pestaña. Cierra la otra ventana para continuar.';
const APP_ID = 'mexpres-atencion-frontend';
const TAB_ID_STORAGE_KEY = `${APP_ID}:tab-id`;
const BACKEND_BLOCKED_STORAGE_KEY = `${APP_ID}:backend-blocked`;
const LOCK_STORAGE_KEY = `${APP_ID}:active-tab-lock`;
const CHANNEL_NAME = `${APP_ID}:tab-lock`;
const HEARTBEAT_INTERVAL_MS = 7000;
const BLOCKED_RETRY_INTERVAL_MS = 5000;
const LOCK_STALE_AFTER_MS = 25000;
const INITIAL_TAB_LOCK_STATE = {
  status: 'checking',
  tabId: '',
  activeTabId: null,
  reason: null,
  message: null,
  heartbeatAt: null
};
class TabLockService {
  constructor() {
    this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(INITIAL_TAB_LOCK_STATE);
    this.state$ = this.stateSubject.asObservable();
    this.tabId = '';
    this.initialized = false;
    this.backendBlocked = false;
    this.heartbeatTimerId = null;
    this.blockedRetryTimerId = null;
    this.broadcastChannel = null;
    this.handleUnload = () => {
      this.releaseLock();
    };
    this.handlePageShow = () => {
      if (!this.backendBlocked) {
        this.tryAcquireLock();
      }
    };
    this.handleStorageEvent = event => {
      if (event.key === LOCK_STORAGE_KEY) {
        this.reconcileLockState();
      }
    };
    this.handleChannelMessage = event => {
      const message = event.data;
      if (!message || message.tabId === this.tabId) {
        return;
      }
      this.reconcileLockState();
    };
  }
  get snapshot() {
    return this.stateSubject.value;
  }
  get isBlocked() {
    return this.snapshot.status === 'blocked';
  }
  get canUseApp() {
    return this.snapshot.status === 'active';
  }
  initialize() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    this.tabId = this.resolveTabId();
    this.backendBlocked = window.sessionStorage.getItem(BACKEND_BLOCKED_STORAGE_KEY) === 'true';
    this.stateSubject.next({
      ...INITIAL_TAB_LOCK_STATE,
      tabId: this.tabId
    });
    this.registerListeners();
    if (this.backendBlocked) {
      this.blockCurrentTab('backend-session-active', TAB_LOCK_BLOCKED_MESSAGE, this.readLock()?.tabId ?? null);
      return;
    }
    this.tryAcquireLock();
  }
  retryAcquire() {
    this.initialize();
    return this.tryAcquireLock();
  }
  releaseLock() {
    this.stopHeartbeat();
    const currentLock = this.readLock();
    if (currentLock?.tabId === this.tabId) {
      window.localStorage.removeItem(LOCK_STORAGE_KEY);
      this.publish('lock-released');
    }
  }
  blockFromBackend() {
    this.initialize();
    if (this.backendBlocked && this.snapshot.reason === 'backend-session-active') {
      return false;
    }
    this.releaseLock();
    this.backendBlocked = true;
    window.sessionStorage.setItem(BACKEND_BLOCKED_STORAGE_KEY, 'true');
    this.stopBlockedRetry();
    this.blockCurrentTab('backend-session-active', TAB_LOCK_BLOCKED_MESSAGE, this.readLock()?.tabId ?? null);
    this.publish('backend-blocked');
    return true;
  }
  clearBackendBlock() {
    this.backendBlocked = false;
    window.sessionStorage.removeItem(BACKEND_BLOCKED_STORAGE_KEY);
  }
  tryAcquireLock() {
    if (this.backendBlocked) {
      this.blockCurrentTab('backend-session-active', TAB_LOCK_BLOCKED_MESSAGE, this.readLock()?.tabId ?? null);
      return false;
    }
    const now = Date.now();
    const currentLock = this.readLock();
    if (currentLock && currentLock.tabId !== this.tabId && !this.isStale(currentLock, now)) {
      this.blockCurrentTab('active-tab', TAB_LOCK_BLOCKED_MESSAGE, currentLock.tabId);
      return false;
    }
    const nextLock = {
      appId: APP_ID,
      tabId: this.tabId,
      createdAt: currentLock?.tabId === this.tabId ? currentLock.createdAt : now,
      heartbeatAt: now,
      url: window.location.href
    };
    window.localStorage.setItem(LOCK_STORAGE_KEY, JSON.stringify(nextLock));
    const confirmedLock = this.readLock();
    if (confirmedLock?.tabId !== this.tabId) {
      this.blockCurrentTab('active-tab', TAB_LOCK_BLOCKED_MESSAGE, confirmedLock?.tabId ?? currentLock?.tabId ?? null);
      return false;
    }
    this.stopBlockedRetry();
    this.startHeartbeat();
    this.stateSubject.next({
      status: 'active',
      tabId: this.tabId,
      activeTabId: this.tabId,
      reason: null,
      message: null,
      heartbeatAt: confirmedLock.heartbeatAt
    });
    this.publish('lock-acquired');
    return true;
  }
  startHeartbeat() {
    if (this.heartbeatTimerId) {
      return;
    }
    this.heartbeatTimerId = window.setInterval(() => {
      this.refreshHeartbeat();
    }, HEARTBEAT_INTERVAL_MS);
  }
  stopHeartbeat() {
    if (!this.heartbeatTimerId) {
      return;
    }
    window.clearInterval(this.heartbeatTimerId);
    this.heartbeatTimerId = null;
  }
  refreshHeartbeat() {
    const currentLock = this.readLock();
    if (currentLock?.tabId !== this.tabId) {
      this.stopHeartbeat();
      this.blockCurrentTab('active-tab', TAB_LOCK_BLOCKED_MESSAGE, currentLock?.tabId ?? null);
      return;
    }
    const nextLock = {
      ...currentLock,
      heartbeatAt: Date.now(),
      url: window.location.href
    };
    window.localStorage.setItem(LOCK_STORAGE_KEY, JSON.stringify(nextLock));
    this.stateSubject.next({
      ...this.snapshot,
      heartbeatAt: nextLock.heartbeatAt
    });
    this.publish('heartbeat');
  }
  startBlockedRetry() {
    if (this.blockedRetryTimerId || this.backendBlocked) {
      return;
    }
    this.blockedRetryTimerId = window.setInterval(() => {
      this.tryAcquireLock();
    }, BLOCKED_RETRY_INTERVAL_MS);
  }
  stopBlockedRetry() {
    if (!this.blockedRetryTimerId) {
      return;
    }
    window.clearInterval(this.blockedRetryTimerId);
    this.blockedRetryTimerId = null;
  }
  blockCurrentTab(reason, message, activeTabId) {
    this.stopHeartbeat();
    this.stateSubject.next({
      status: 'blocked',
      tabId: this.tabId,
      activeTabId,
      reason,
      message,
      heartbeatAt: this.readLock()?.heartbeatAt ?? null
    });
    if (reason === 'active-tab') {
      this.startBlockedRetry();
    }
  }
  registerListeners() {
    window.addEventListener('storage', this.handleStorageEvent);
    window.addEventListener('beforeunload', this.handleUnload);
    window.addEventListener('pagehide', this.handleUnload);
    window.addEventListener('pageshow', this.handlePageShow);
    if ('BroadcastChannel' in window) {
      this.broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
      this.broadcastChannel.addEventListener('message', this.handleChannelMessage);
    }
  }
  reconcileLockState() {
    if (this.backendBlocked) {
      return;
    }
    const currentLock = this.readLock();
    const now = Date.now();
    if (currentLock?.tabId === this.tabId) {
      if (this.snapshot.status !== 'active') {
        this.stopBlockedRetry();
        this.startHeartbeat();
        this.stateSubject.next({
          status: 'active',
          tabId: this.tabId,
          activeTabId: this.tabId,
          reason: null,
          message: null,
          heartbeatAt: currentLock.heartbeatAt
        });
      }
      return;
    }
    if (!currentLock || this.isStale(currentLock, now)) {
      this.tryAcquireLock();
      return;
    }
    this.blockCurrentTab('active-tab', TAB_LOCK_BLOCKED_MESSAGE, currentLock.tabId);
  }
  readLock() {
    const rawLock = window.localStorage.getItem(LOCK_STORAGE_KEY);
    if (!rawLock) {
      return null;
    }
    try {
      const parsedLock = JSON.parse(rawLock);
      if (parsedLock.appId !== APP_ID || typeof parsedLock.tabId !== 'string' || typeof parsedLock.heartbeatAt !== 'number' || typeof parsedLock.createdAt !== 'number') {
        return null;
      }
      return {
        appId: parsedLock.appId,
        tabId: parsedLock.tabId,
        createdAt: parsedLock.createdAt,
        heartbeatAt: parsedLock.heartbeatAt,
        url: typeof parsedLock.url === 'string' ? parsedLock.url : ''
      };
    } catch {
      window.localStorage.removeItem(LOCK_STORAGE_KEY);
      return null;
    }
  }
  isStale(lock, now) {
    return now - lock.heartbeatAt > LOCK_STALE_AFTER_MS;
  }
  publish(type) {
    this.broadcastChannel?.postMessage({
      type,
      tabId: this.tabId
    });
  }
  resolveTabId() {
    const storedTabId = window.sessionStorage.getItem(TAB_ID_STORAGE_KEY);
    if (storedTabId) {
      return storedTabId;
    }
    const nextTabId = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    window.sessionStorage.setItem(TAB_ID_STORAGE_KEY, nextTabId);
    return nextTabId;
  }
  static {
    this.ɵfac = function TabLockService_Factory(t) {
      return new (t || TabLockService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TabLockService,
      factory: TabLockService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9713:
/*!************************************************************************!*\
  !*** ./src/app/features/auth-session/services/auth-session.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthSessionService: () => (/* binding */ AuthSessionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _core_models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/models/http-context-tokens.model */ 387);
/* harmony import */ var _core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/tab-lock.service */ 8861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api-base.service */ 294);
/* harmony import */ var _core_services_session_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/session-context.service */ 774);










class AuthSessionService {
  constructor(http, apiBaseService, sessionContextService, tabLockService) {
    this.http = http;
    this.apiBaseService = apiBaseService;
    this.sessionContextService = sessionContextService;
    this.tabLockService = tabLockService;
    this.activeRequest$ = null;
  }
  ensureSession(force = false) {
    if (this.tabLockService.isBlocked) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(_core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TAB_LOCK_BLOCKED_MESSAGE));
    }
    const session = this.sessionContextService.snapshot;
    if (!force && session.status === 'authenticated' && session.asesor) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(session.asesor);
    }
    if (!force && this.activeRequest$) {
      return this.activeRequest$;
    }
    const silentContext = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpContext().set(_core_models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__.SKIP_GLOBAL_ERROR, true);
    const meEndpoint = this.apiBaseService.buildUrl('me');
    this.sessionContextService.setLoading('Validando sesion activa...');
    console.debug('[SSO] Verificando sesion actual', {
      endpoint: meEndpoint
    });
    const request$ = this.getProfileRequest(silentContext).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(asesor => {
      console.debug('[SSO] Respuesta de /me', asesor);
      this.sessionContextService.setAuthenticated(asesor, 'Sesion activa.');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('[SSO] Error al consultar /me', error);
      if (this.shouldSkipSessionStateError(error)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse && (error.status === 401 || error.status === 419)) {
        this.sessionContextService.setAnonymous('No existe una sesion activa en el backend.');
      } else {
        this.sessionContextService.setError(this.resolveErrorMessage(error, 'No fue posible validar la sesion institucional.'));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.activeRequest$ = null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    this.activeRequest$ = request$;
    return request$;
  }
  ssoCallback(payload) {
    if (this.tabLockService.isBlocked) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(_core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TAB_LOCK_BLOCKED_MESSAGE));
    }
    const requestPayload = payload.token ? {
      token: payload.token
    } : payload.rt ? {
      rt: payload.rt
    } : null;
    if (!requestPayload) {
      this.sessionContextService.setError('No se recibio token o rt en la URL de retorno SSO.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Missing SSO payload'));
    }
    if (this.activeRequest$) {
      return this.activeRequest$;
    }
    const silentContext = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpContext().set(_core_models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__.SKIP_GLOBAL_ERROR, true);
    const callbackEndpoint = this.apiBaseService.buildUrl('auth/sso/callback');
    const meEndpoint = this.apiBaseService.buildUrl('me');
    this.sessionContextService.setLoading('Resolviendo acceso SSO con el backend Laravel...');
    console.debug('[SSO] Iniciando callback SSO', {
      endpoint: callbackEndpoint,
      hasToken: Boolean(payload.token),
      hasRt: Boolean(payload.rt)
    });
    const request$ = this.http.post(callbackEndpoint, requestPayload, {
      context: silentContext,
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(response => {
      console.debug('[SSO] Respuesta del callback', response);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => this.getProfileRequest(silentContext)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(asesor => {
      console.debug('[SSO] Respuesta de /me luego del callback', asesor);
      this.sessionContextService.setAuthenticated(asesor, 'Ingreso SSO validado correctamente.');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('[SSO] Error detallado en callback SSO', error);
      if (this.shouldSkipSessionStateError(error)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }
      this.sessionContextService.setError(this.resolveSsoCallbackErrorMessage(error, callbackEndpoint, meEndpoint));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.activeRequest$ = null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    this.activeRequest$ = request$;
    return request$;
  }
  resolveSsoCallback(payload) {
    return this.ssoCallback(payload);
  }
  refreshProfile() {
    if (this.tabLockService.isBlocked) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(_core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TAB_LOCK_BLOCKED_MESSAGE));
    }
    return this.getProfileRequest().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(asesor => this.sessionContextService.setAuthenticated(asesor)));
  }
  logout() {
    if (this.tabLockService.isBlocked) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(_core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TAB_LOCK_BLOCKED_MESSAGE));
    }
    const silentContext = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpContext().set(_core_models_http_context_tokens_model__WEBPACK_IMPORTED_MODULE_0__.SKIP_GLOBAL_ERROR, true);
    return this.http.post(this.apiBaseService.buildUrl('session/logout'), {}, {
      context: silentContext,
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.sessionContextService.reset()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('[SSO] Error al cerrar sesion', error);
      this.sessionContextService.reset();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  getProfileRequest(context) {
    const meEndpoint = this.apiBaseService.buildUrl('me');
    return this.http.get(meEndpoint, {
      context,
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(response => this.normalizeAsesor(this.apiBaseService.unwrap(response))));
  }
  normalizeAsesor(asesor) {
    const rawAsesor = asesor;
    return {
      ...rawAsesor,
      id: rawAsesor.id ?? '',
      nombres: rawAsesor.nombres?.trim() || rawAsesor.nombre?.trim() || rawAsesor.name?.trim() || '',
      apellidos: rawAsesor.apellidos?.trim() || rawAsesor.apellido?.trim() || '',
      nombreCompleto: rawAsesor.nombreCompleto?.trim() || rawAsesor.nombre_completo?.trim() || rawAsesor.name_compl?.trim() || [rawAsesor.nombres, rawAsesor.apellidos].filter(Boolean).join(' ').trim(),
      email: rawAsesor.email?.trim() || rawAsesor.correo?.trim() || null,
      documento: rawAsesor.documento?.trim() || rawAsesor.dni?.trim() || rawAsesor.documento_numero?.trim() || null,
      regionCodigo: rawAsesor.regionCodigo?.trim() || rawAsesor.region_codigo?.trim() || null,
      regionNombre: rawAsesor.regionNombre?.trim() || rawAsesor.region_nombre?.trim() || null,
      sedeNombre: rawAsesor.sedeNombre?.trim() || rawAsesor.sede_nombre?.trim() || null,
      roles: this.resolveRoles(rawAsesor),
      permissions: this.resolvePermissions(rawAsesor)
    };
  }
  resolveRoles(asesor) {
    const values = [];
    const appendStringArray = input => {
      if (Array.isArray(input)) {
        input.map(item => {
          if (typeof item === 'string') {
            return item;
          }
          if (item && typeof item === 'object') {
            const roleLike = item;
            return roleLike.nombre || roleLike.name || roleLike.codigo || roleLike.role || '';
          }
          return '';
        }).filter(Boolean).forEach(item => values.push(String(item)));
      }
    };
    appendStringArray(asesor.roles);
    appendStringArray(asesor.auth_roles);
    appendStringArray(asesor.rol);
    if (typeof asesor.rol === 'string') {
      values.push(asesor.rol);
    }
    if (typeof asesor.auth_roles === 'string') {
      values.push(asesor.auth_roles);
    }
    if (typeof asesor.cargo === 'string' && asesor.cargo.trim()) {
      values.push(asesor.cargo);
    }
    return Array.from(new Set(values.map(value => value.trim()).filter(Boolean)));
  }
  resolvePermissions(asesor) {
    const values = [];
    for (const permission of asesor.permissions || []) {
      if (typeof permission === 'string') {
        values.push(permission);
        continue;
      }
      const permissionLike = permission;
      values.push(permissionLike.codigo || permissionLike.nombre || permissionLike.action || permissionLike.ActionName || '');
    }
    for (const permission of asesor.listPermission || []) {
      if (typeof permission === 'string') {
        values.push(permission);
        continue;
      }
      const permissionLike = permission;
      values.push(permissionLike.ActionName || permissionLike.ActionUrl || permissionLike.PathCode || '');
    }
    return Array.from(new Set(values.map(value => value.trim()).filter(Boolean)));
  }
  resolveErrorMessage(error, fallback) {
    if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse)) {
      return fallback;
    }
    const backendMessage = this.resolveHttpErrorPayloadMessage(error.error) ?? error.message;
    return backendMessage ? `${fallback} Detalle backend: ${backendMessage}` : `${fallback} HTTP ${error.status}.`;
  }
  resolveSsoCallbackErrorMessage(error, callbackEndpoint, meEndpoint) {
    if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse)) {
      return ['No fue posible resolver el acceso SSO con el backend.', 'status=unknown.', `url_backend=${callbackEndpoint}.`, `message=${String(error)}.`, `callback_endpoint=${callbackEndpoint}.`, `me_endpoint=${meEndpoint}.`].join(' ');
    }
    const status = Number.isFinite(error.status) ? error.status : 0;
    const backendUrl = error.url || callbackEndpoint;
    const backendMessage = this.resolveHttpErrorPayloadMessage(error.error) || error.message || 'Sin mensaje de backend.';
    return ['No fue posible resolver el acceso SSO con el backend.', `status=${status}.`, `url_backend=${backendUrl}.`, `message=${backendMessage}.`, `callback_endpoint=${callbackEndpoint}.`, `me_endpoint=${meEndpoint}.`].join(' ');
  }
  resolveHttpErrorPayloadMessage(errorPayload) {
    if (!errorPayload) {
      return null;
    }
    if (typeof errorPayload === 'string') {
      const trimmedPayload = errorPayload.trim();
      return trimmedPayload || null;
    }
    if (typeof errorPayload === 'object') {
      const messageCandidate = errorPayload.message;
      if (typeof messageCandidate === 'string') {
        const trimmedMessage = messageCandidate.trim();
        if (trimmedMessage) {
          return trimmedMessage;
        }
      }
      try {
        return JSON.stringify(errorPayload);
      } catch {
        return null;
      }
    }
    return null;
  }
  shouldSkipSessionStateError(error) {
    return this.tabLockService.isBlocked || this.isSessionAlreadyActiveError(error);
  }
  isSessionAlreadyActiveError(error) {
    if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) || error.status !== 409) {
      return false;
    }
    return this.resolveMetaReason(error.error) === 'SESSION_ALREADY_ACTIVE';
  }
  resolveMetaReason(errorPayload) {
    if (!errorPayload || typeof errorPayload !== 'object') {
      return null;
    }
    const meta = errorPayload.meta;
    if (!meta || typeof meta !== 'object') {
      return null;
    }
    const reason = meta.reason;
    return typeof reason === 'string' ? reason : null;
  }
  static {
    this.ɵfac = function AuthSessionService_Factory(t) {
      return new (t || AuthSessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_services_api_base_service__WEBPACK_IMPORTED_MODULE_2__.ApiBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_services_session_context_service__WEBPACK_IMPORTED_MODULE_3__.SessionContextService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_services_tab_lock_service__WEBPACK_IMPORTED_MODULE_1__.TabLockService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: AuthSessionService,
      factory: AuthSessionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6661:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/advisor-summary/advisor-summary.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvisorSummaryComponent: () => (/* binding */ AdvisorSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/status-badge/status-badge.component */ 8333);


class AdvisorSummaryComponent {
  constructor() {
    this.asesor = null;
    this.status = 'idle';
  }
  resolveStatusLabel() {
    switch (this.status) {
      case 'authenticated':
        return 'Sesion activa';
      case 'loading':
        return 'Validando';
      case 'error':
        return 'Con incidencia';
      case 'anonymous':
        return 'Sin sesion';
      default:
        return 'Pendiente';
    }
  }
  resolveStatusTone() {
    switch (this.status) {
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
  static {
    this.ɵfac = function AdvisorSummaryComponent_Factory(t) {
      return new (t || AdvisorSummaryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdvisorSummaryComponent,
      selectors: [["app-advisor-summary"]],
      inputs: {
        asesor: "asesor",
        status: "status"
      },
      decls: 29,
      vars: 6,
      consts: [[1, "advisor-summary", "surface-card", "surface-card--accent"], [1, "advisor-summary__header"], [1, "eyebrow"], [1, "section-title"], [3, "label", "tone"], [1, "stat-list"], [1, "stat-item"]],
      template: function AdvisorSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tu sesion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Datos del asesor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-status-badge", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Region");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6)(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sede");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6)(25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Cargo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.resolveStatusLabel())("tone", ctx.resolveStatusTone());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.asesor == null ? null : ctx.asesor.nombreCompleto) || "Pendiente de carga");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.asesor == null ? null : ctx.asesor.regionNombre) || "Por confirmar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.asesor == null ? null : ctx.asesor.sedeNombre) || "No informada");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.asesor == null ? null : ctx.asesor.cargo) || "Asesor de atencion");
        }
      },
      dependencies: [_ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.StatusBadgeComponent],
      styles: [".advisor-summary[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  background: linear-gradient(180deg, #f4f9ff 0%, #edf5ff 100%);\n}\n\n.advisor-summary__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWR2aXNvci1zdW1tYXJ5L2Fkdmlzb3Itc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsNkRBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFkdmlzb3Itc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y0ZjlmZiAwJSwgI2VkZjVmZiAxMDAlKTtcbn1cblxuLmFkdmlzb3Itc3VtbWFyeV9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8245:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/app-header/app-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppHeaderComponent: () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _features_auth_session_services_auth_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../features/auth-session/services/auth-session.service */ 9713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_role_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/role-access.service */ 5073);
/* harmony import */ var _core_services_session_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/session-context.service */ 774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/status-badge/status-badge.component */ 8333);








function AppHeaderComponent_nav_10_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Configuracion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function AppHeaderComponent_nav_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Nueva atencion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Avisos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AppHeaderComponent_nav_10_a_7_Template, 2, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const session_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.canAccessAdmin(session_r2.asesor));
  }
}
function AppHeaderComponent_section_12_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const session_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" - ", session_r4.asesor == null ? null : session_r4.asesor.sedeNombre, " ");
  }
}
function AppHeaderComponent_section_12_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_section_12_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r6.loggingOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.loggingOut ? "Saliendo..." : "Cerrar sesion", " ");
  }
}
function AppHeaderComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-status-badge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 16)(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Asesor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AppHeaderComponent_section_12_ng_container_12_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AppHeaderComponent_section_12_button_13_Template, 2, 2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const session_r4 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx_r1.resolveStatusLabel(session_r4.status))("tone", ctx_r1.resolveStatusTone(session_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.resolveInitials(session_r4.asesor == null ? null : session_r4.asesor.nombreCompleto), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((session_r4.asesor == null ? null : session_r4.asesor.nombreCompleto) || "Sesion institucional pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (session_r4.asesor == null ? null : session_r4.asesor.regionNombre) || "Region por confirmar", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", session_r4.asesor == null ? null : session_r4.asesor.sedeNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", session_r4.status === "authenticated");
  }
}
class AppHeaderComponent {
  constructor(authSessionService, router, roleAccessService, sessionContextService) {
    this.authSessionService = authSessionService;
    this.router = router;
    this.roleAccessService = roleAccessService;
    this.sessionContextService = sessionContextService;
    this.session$ = this.sessionContextService.state$;
    this.loggingOut = false;
  }
  resolveInitials(fullName) {
    if (!fullName) {
      return 'AX';
    }
    return fullName.split(' ').filter(Boolean).slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('');
  }
  resolveStatusLabel(status) {
    switch (status) {
      case 'authenticated':
        return 'Sesion activa';
      case 'loading':
        return 'Validando';
      case 'error':
        return 'Con incidencia';
      case 'anonymous':
        return 'Sin sesion';
      default:
        return 'Pendiente';
    }
  }
  resolveStatusTone(status) {
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
  canAccessAdmin(asesor) {
    return this.roleAccessService.canAccessAdmin(asesor);
  }
  logout() {
    if (this.loggingOut) {
      return;
    }
    this.loggingOut = true;
    this.authSessionService.logout().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.loggingOut = false;
    })).subscribe({
      next: () => {
        void this.router.navigate(['/sesion/bootstrap']);
      },
      error: () => {
        void this.router.navigate(['/sesion/bootstrap']);
      }
    });
  }
  static {
    this.ɵfac = function AppHeaderComponent_Factory(t) {
      return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_features_auth_session_services_auth_session_service__WEBPACK_IMPORTED_MODULE_0__.AuthSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_role_access_service__WEBPACK_IMPORTED_MODULE_1__.RoleAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_session_context_service__WEBPACK_IMPORTED_MODULE_2__.SessionContextService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppHeaderComponent,
      selectors: [["app-header"]],
      decls: 14,
      vars: 6,
      consts: [[1, "app-header"], [1, "app-header__brand"], [1, "app-header__brand-mark"], [1, "app-header__brand-copy"], ["class", "app-header__nav", "aria-label", "Navegacion principal", 4, "ngIf"], ["class", "app-header__session", 4, "ngIf"], ["aria-label", "Navegacion principal", 1, "app-header__nav"], ["routerLink", "/dashboard", "routerLinkActive", "app-header__link--active", 1, "app-header__link", 3, "routerLinkActiveOptions"], ["routerLink", "/atencion", "routerLinkActive", "app-header__link--active", 1, "app-header__link"], ["routerLink", "/avisos-operativos", "routerLinkActive", "app-header__link--active", 1, "app-header__link"], ["routerLink", "/admin", "routerLinkActive", "app-header__link--active", "class", "app-header__link", 4, "ngIf"], ["routerLink", "/admin", "routerLinkActive", "app-header__link--active", 1, "app-header__link"], [1, "app-header__session"], [3, "label", "tone"], [1, "app-header__advisor"], [1, "app-header__avatar"], [1, "app-header__advisor-copy"], [1, "app-header__advisor-label"], [4, "ngIf"], ["type", "button", "class", "app-header__logout", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "app-header__logout", 3, "disabled", "click"]],
      template: function AppHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "S");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "SISAC");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Sistema de Atencion de Servicios Ciudadanos");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AppHeaderComponent_nav_10_Template, 8, 3, "nav", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AppHeaderComponent_section_12_Template, 14, 7, "section", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 2, ctx.session$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 4, ctx.session$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__.StatusBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      styles: [".app-header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 60;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1rem 1.5rem;\n  background: linear-gradient(180deg, #0b3d78 0%, #083463 100%);\n  color: #ffffff;\n}\n\n.app-header__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.app-header__brand-mark[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.55rem;\n  height: 2.55rem;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n}\n\n.app-header__brand-mark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.app-header__brand-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n}\n\n.app-header__brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  letter-spacing: 0.02em;\n}\n\n.app-header__brand-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.78rem;\n}\n\n.app-header__nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.4rem;\n  padding: 0.25rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.app-header__link[_ngcontent-%COMP%] {\n  padding: 0.58rem 0.95rem;\n  border-radius: 999px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 600;\n  font-size: 0.92rem;\n  transition: background var(--transition-base), color var(--transition-base);\n}\n\n.app-header__link--active[_ngcontent-%COMP%], .app-header__link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n}\n\n.app-header__session[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.9rem;\n  justify-self: end;\n}\n\n.app-header__advisor[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0.45rem 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.app-header__avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.35rem;\n  height: 2.35rem;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.88);\n  color: var(--color-brand-900);\n  font-weight: 800;\n}\n\n.app-header__advisor-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.12rem;\n}\n\n.app-header__advisor-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.app-header__advisor-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n\n.app-header__advisor-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 0.8rem;\n}\n\n.app-header__logout[_ngcontent-%COMP%] {\n  min-height: 2.55rem;\n  padding: 0 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n@media (max-width: 1199px) {\n  .app-header[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    justify-items: flex-start;\n    padding: 1rem;\n  }\n  .app-header__session[_ngcontent-%COMP%] {\n    justify-self: flex-start;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyRUFBQTtBQUNGOztBQUVBOztFQUVFLHFDQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtFQUNGO0VBRUE7SUFDRSx3QkFBQTtJQUNBLGVBQUE7RUFBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDYwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG8gYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMGIzZDc4IDAlLCAjMDgzNDYzIDEwMCUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFwcC1oZWFkZXJfX2JyYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYXBwLWhlYWRlcl9fYnJhbmQtbWFyayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjU1cmVtO1xuICBoZWlnaHQ6IDIuNTVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG59XG5cbi5hcHAtaGVhZGVyX19icmFuZC1tYXJrIHNwYW4ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmFwcC1oZWFkZXJfX2JyYW5kLWNvcHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMThyZW07XG59XG5cbi5hcHAtaGVhZGVyX19icmFuZC1jb3B5IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLmFwcC1oZWFkZXJfX2JyYW5kLWNvcHkgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xufVxuXG4uYXBwLWhlYWRlcl9fbmF2IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGdhcDogMC40cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLmFwcC1oZWFkZXJfX2xpbmsge1xuICBwYWRkaW5nOiAwLjU4cmVtIDAuOTVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOTJyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKSwgY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcbn1cblxuLmFwcC1oZWFkZXJfX2xpbmstLWFjdGl2ZSxcbi5hcHAtaGVhZGVyX19saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hcHAtaGVhZGVyX19zZXNzaW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC45cmVtO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmFwcC1oZWFkZXJfX2Fkdmlzb3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuNDVyZW0gMC43NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmFwcC1oZWFkZXJfX2F2YXRhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjM1cmVtO1xuICBoZWlnaHQ6IDIuMzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTkwMCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5hcHAtaGVhZGVyX19hZHZpc29yLWNvcHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMTJyZW07XG59XG5cbi5hcHAtaGVhZGVyX19hZHZpc29yLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcbn1cblxuLmFwcC1oZWFkZXJfX2Fkdmlzb3ItY29weSBzdHJvbmcge1xuICBmb250LXNpemU6IDAuOTJyZW07XG59XG5cbi5hcHAtaGVhZGVyX19hZHZpc29yLWNvcHkgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uYXBwLWhlYWRlcl9fbG9nb3V0IHtcbiAgbWluLWhlaWdodDogMi41NXJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5hcHAtaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuYXBwLWhlYWRlcl9fc2Vzc2lvbiB7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3051:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/aviso-operativo-item/aviso-operativo-item.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisoOperativoItemComponent: () => (/* binding */ AvisoOperativoItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/status-badge/status-badge.component */ 8333);



function AvisoOperativoItemComponent_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("- ", ctx_r1.aviso.servicio, "");
  }
}
function AvisoOperativoItemComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AvisoOperativoItemComponent_div_5_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.aviso.entidad || "Entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.aviso.servicio);
  }
}
class AvisoOperativoItemComponent {
  resolveSeverityTone() {
    switch (this.aviso?.severidad) {
      case 'alta':
        return 'danger';
      case 'media':
        return 'warning';
      case 'baja':
        return 'info';
      default:
        return 'default';
    }
  }
  resolveSeverityLabel() {
    return (this.aviso?.severidad || 'informativo').toUpperCase();
  }
  resolveSeverityClass() {
    switch (this.aviso?.severidad) {
      case 'alta':
        return 'aviso-item--alta';
      case 'media':
        return 'aviso-item--media';
      case 'baja':
        return 'aviso-item--baja';
      default:
        return 'aviso-item--default';
    }
  }
  formatFecha(fecha) {
    if (!fecha) {
      return 'Reciente';
    }
    const parsedDate = new Date(fecha);
    if (Number.isNaN(parsedDate.getTime())) {
      return fecha;
    }
    return parsedDate.toLocaleString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  static {
    this.ɵfac = function AvisoOperativoItemComponent_Factory(t) {
      return new (t || AvisoOperativoItemComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AvisoOperativoItemComponent,
      selectors: [["app-aviso-operativo-item"]],
      inputs: {
        aviso: "aviso"
      },
      decls: 10,
      vars: 7,
      consts: [[1, "aviso-item", 3, "ngClass"], [1, "aviso-item__top"], [3, "label", "tone"], [1, "muted"], ["class", "aviso-item__route", 4, "ngIf"], [1, "aviso-item__route"], [4, "ngIf"]],
      template: function AvisoOperativoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-status-badge", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AvisoOperativoItemComponent_div_5_Template, 4, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.resolveSeverityClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.resolveSeverityLabel())("tone", ctx.resolveSeverityTone());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formatFecha(ctx.aviso.fecha));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.aviso.entidad || ctx.aviso.servicio);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.aviso.titulo);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.aviso.descripcion);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.StatusBadgeComponent],
      styles: [".aviso-item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n  padding: 1rem;\n  border: 1px solid #e2e9f1;\n  border-left: 4px solid rgba(27, 95, 169, 0.28);\n  border-radius: var(--radius-md);\n  background: #ffffff;\n}\n\n.aviso-item--alta[_ngcontent-%COMP%] {\n  border-left-color: rgba(197, 75, 75, 0.6);\n}\n\n.aviso-item--media[_ngcontent-%COMP%] {\n  border-left-color: rgba(204, 138, 11, 0.58);\n}\n\n.aviso-item--baja[_ngcontent-%COMP%] {\n  border-left-color: rgba(36, 93, 158, 0.45);\n}\n\n.aviso-item__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.aviso-item__route[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  color: var(--color-text-700);\n  font-size: 0.84rem;\n}\n\n.aviso-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .aviso-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.aviso-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.35;\n}\n\n.aviso-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n  font-size: 0.9rem;\n  line-height: 1.55;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXZpc28tb3BlcmF0aXZvLWl0ZW0vYXZpc28tb3BlcmF0aXZvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBOztFQUVFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZpc28taXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOWYxO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYmEoMjcsIDk1LCAxNjksIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uYXZpc28taXRlbS0tYWx0YSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDE5NywgNzUsIDc1LCAwLjYpO1xufVxuXG4uYXZpc28taXRlbS0tbWVkaWEge1xuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyMDQsIDEzOCwgMTEsIDAuNTgpO1xufVxuXG4uYXZpc28taXRlbS0tYmFqYSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDM2LCA5MywgMTU4LCAwLjQ1KTtcbn1cblxuLmF2aXNvLWl0ZW1fX3RvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hdmlzby1pdGVtX19yb3V0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjM1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC03MDApO1xuICBmb250LXNpemU6IDAuODRyZW07XG59XG5cbi5hdmlzby1pdGVtIGgzLFxuLmF2aXNvLWl0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmF2aXNvLWl0ZW0gaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xufVxuXG4uYXZpc28taXRlbSBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtNzAwKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2217:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/aviso-operativo-list/aviso-operativo-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisoOperativoListComponent: () => (/* binding */ AvisoOperativoListComponent)
/* harmony export */ });
/* harmony import */ var _utils_track_by_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by.util */ 3967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _aviso_operativo_item_aviso_operativo_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aviso-operativo-item/aviso-operativo-item.component */ 3051);
/* harmony import */ var _ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/loading-skeleton/loading-skeleton.component */ 2121);
/* harmony import */ var _ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/empty-state/empty-state.component */ 6619);






function AvisoOperativoListComponent_app_loading_skeleton_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading-skeleton", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lines", 3);
  }
}
function AvisoOperativoListComponent_div_10_app_aviso_operativo_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-aviso-operativo-item", 10);
  }
  if (rf & 2) {
    const aviso_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("aviso", aviso_r4);
  }
}
function AvisoOperativoListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AvisoOperativoListComponent_div_10_app_aviso_operativo_item_1_Template, 1, 1, "app-aviso-operativo-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.avisos)("ngForTrackBy", ctx_r1.trackById);
  }
}
function AvisoOperativoListComponent_app_empty_state_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-empty-state", 11);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r2.emptyTitle)("description", ctx_r2.emptyDescription)("compact", true);
  }
}
class AvisoOperativoListComponent {
  constructor() {
    this.avisos = [];
    this.loading = false;
    this.title = 'Avisos operativos recientes';
    this.emptyTitle = 'Sin avisos operativos recientes';
    this.emptyDescription = 'Los avisos se mostraran aqui como panel institucional, no como chat.';
    this.trackById = _utils_track_by_util__WEBPACK_IMPORTED_MODULE_0__.TrackByUtil.id;
  }
  static {
    this.ɵfac = function AvisoOperativoListComponent_Factory(t) {
      return new (t || AvisoOperativoListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AvisoOperativoListComponent,
      selectors: [["app-aviso-operativo-list"]],
      inputs: {
        avisos: "avisos",
        loading: "loading",
        title: "title",
        emptyTitle: "emptyTitle",
        emptyDescription: "emptyDescription"
      },
      decls: 12,
      vars: 5,
      consts: [[1, "aviso-list"], [1, "aviso-list__header"], [1, "eyebrow"], [1, "pill"], [3, "lines", 4, "ngIf"], ["class", "aviso-list__items", 4, "ngIf"], [3, "title", "description", "compact", 4, "ngIf"], [3, "lines"], [1, "aviso-list__items"], [3, "aviso", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "aviso"], [3, "title", "description", "compact"]],
      template: function AvisoOperativoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AvisoOperativoListComponent_app_loading_skeleton_9_Template, 1, 1, "app-loading-skeleton", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AvisoOperativoListComponent_div_10_Template, 2, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AvisoOperativoListComponent_app_empty_state_11_Template, 1, 3, "app-empty-state", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.avisos.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.avisos.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.avisos.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _aviso_operativo_item_aviso_operativo_item_component__WEBPACK_IMPORTED_MODULE_1__.AvisoOperativoItemComponent, _ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSkeletonComponent, _ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_3__.EmptyStateComponent],
      styles: [".aviso-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  min-width: 0;\n}\n\n.aviso-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.aviso-list__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n}\n\n.aviso-list__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.25;\n}\n\n.aviso-list__items[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  min-width: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXZpc28tb3BlcmF0aXZvLWxpc3QvYXZpc28tb3BlcmF0aXZvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmF2aXNvLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmF2aXNvLWxpc3RfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLmF2aXNvLWxpc3RfX2hlYWRlciA+IGRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4zcmVtO1xufVxuXG4uYXZpc28tbGlzdF9faGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG4uYXZpc28tbGlzdF9faXRlbXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuODVyZW07XG4gIG1pbi13aWR0aDogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4509:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/ciudadano-card/ciudadano-card.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CiudadanoCardComponent: () => (/* binding */ CiudadanoCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/status-badge/status-badge.component */ 8333);




function CiudadanoCardComponent_article_0_app_status_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-status-badge", 15);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx_r3.ciudadano.fuente)("tone", ctx_r3.resolveFuenteTone());
  }
}
function CiudadanoCardComponent_article_0_img_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function CiudadanoCardComponent_article_0_img_8_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onFotoError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.resolveFotoSrc() || "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CiudadanoCardComponent_article_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.resolveInitials(), " ");
  }
}
function CiudadanoCardComponent_article_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CiudadanoCardComponent_article_0_div_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.secondaryAction.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CiudadanoCardComponent_article_0_div_23_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.primaryAction.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.secondaryLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r7.primaryDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.primaryLabel, " ");
  }
}
function CiudadanoCardComponent_article_0_div_24_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.originDetail);
  }
}
function CiudadanoCardComponent_article_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CiudadanoCardComponent_article_0_div_24_span_6_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.originLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.originDetail);
  }
}
function CiudadanoCardComponent_article_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 2)(1, "div", 3)(2, "div", 4)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CiudadanoCardComponent_article_0_app_status_badge_5_Template, 1, 2, "app-status-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CiudadanoCardComponent_article_0_img_8_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CiudadanoCardComponent_article_0_ng_template_9_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Tipo y N de documento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sexo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CiudadanoCardComponent_article_0_div_23_Template, 5, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CiudadanoCardComponent_article_0_div_24_Template, 7, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.resolveHeadline());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.ciudadano.fuente);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resolveFotoSrc())("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.resolveFullName());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.ciudadano.tipoDocumento || "Documento", " ", ctx_r0.ciudadano.documento || "Sin dato", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.ciudadano.sexo || "No registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.originLabel);
  }
}
function CiudadanoCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Resultado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sin ciudadano identificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Busca al ciudadano en la base local. Si no existe, el sistema consultara PIDE solo para DNI valido y habilitara registro manual cuando corresponda. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class CiudadanoCardComponent {
  constructor() {
    this.ciudadano = null;
    this.showActions = false;
    this.primaryLabel = 'Iniciar atencion';
    this.secondaryLabel = 'Editar datos';
    this.primaryDisabled = false;
    this.originLabel = null;
    this.originDetail = null;
    this.primaryAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.secondaryAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.fotoLoadFailed = false;
  }
  resolveFuenteTone() {
    const fuente = this.ciudadano?.fuente?.toUpperCase() || '';
    if (fuente.includes('LOCAL')) {
      return 'success';
    }
    if (fuente.includes('PIDE')) {
      return 'info';
    }
    if (fuente.includes('MANUAL')) {
      return 'warning';
    }
    return 'default';
  }
  resolveInitials() {
    const ciudadano = this.ciudadano;
    if (!ciudadano) {
      return 'CI';
    }
    const source = `${ciudadano.nombres} ${ciudadano.apellidoPaterno || ciudadano.apellidos || ''}`.trim();
    const parts = source.split(/\s+/).filter(Boolean);
    return parts.slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('');
  }
  resolveFullName() {
    if (!this.ciudadano) {
      return 'Ciudadano pendiente';
    }
    return [this.ciudadano.nombres, this.ciudadano.apellidoPaterno || this.ciudadano.apellidos || '', this.ciudadano.apellidoMaterno || ''].filter(Boolean).join(' ');
  }
  resolveHeadline() {
    const fuente = this.ciudadano?.fuente?.toUpperCase() || '';
    if (fuente.includes('LOCAL')) {
      return 'Ciudadano encontrado en base local';
    }
    if (fuente.includes('PIDE')) {
      return 'Ciudadano encontrado en PIDE';
    }
    if (fuente.includes('MANUAL')) {
      return 'Ciudadano registrado manualmente';
    }
    return 'Ciudadano identificado';
  }
  ngOnChanges(changes) {
    if (changes['ciudadano']) {
      this.fotoLoadFailed = false;
    }
  }
  resolveFotoSrc() {
    if (this.fotoLoadFailed) {
      return null;
    }
    const rawUrl = this.ciudadano?.fotoUrl?.trim();
    return rawUrl || null;
  }
  onFotoError() {
    this.fotoLoadFailed = true;
  }
  static {
    this.ɵfac = function CiudadanoCardComponent_Factory(t) {
      return new (t || CiudadanoCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CiudadanoCardComponent,
      selectors: [["app-ciudadano-card"]],
      inputs: {
        ciudadano: "ciudadano",
        showActions: "showActions",
        primaryLabel: "primaryLabel",
        secondaryLabel: "secondaryLabel",
        primaryDisabled: "primaryDisabled",
        originLabel: "originLabel",
        originDetail: "originDetail"
      },
      outputs: {
        primaryAction: "primaryAction",
        secondaryAction: "secondaryAction"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [["class", "ciudadano-card", 4, "ngIf", "ngIfElse"], ["ciudadanoEmpty", ""], [1, "ciudadano-card"], [1, "ciudadano-card__band"], [1, "ciudadano-card__band-copy"], [3, "label", "tone", 4, "ngIf"], [1, "ciudadano-card__main"], [1, "ciudadano-card__avatar"], ["alt", "Foto del ciudadano", 3, "src", "error", 4, "ngIf", "ngIfElse"], ["ciudadanoAvatarInitials", ""], [1, "ciudadano-card__content"], [1, "ciudadano-card__header"], [1, "ciudadano-card__document-line"], ["class", "actions-row ciudadano-card__actions", 4, "ngIf"], ["class", "ciudadano-card__origin", 4, "ngIf"], [3, "label", "tone"], ["alt", "Foto del ciudadano", 3, "src", "error"], [1, "actions-row", "ciudadano-card__actions"], ["type", "button", 1, "button", "button--secondary", 3, "click"], ["type", "button", 1, "button", 3, "disabled", "click"], [1, "ciudadano-card__origin"], ["aria-hidden", "true", 1, "ciudadano-card__origin-icon"], [1, "ciudadano-card__origin-copy"], [4, "ngIf"], [1, "ciudadano-card", "ciudadano-card--empty"], [1, "eyebrow"]],
      template: function CiudadanoCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CiudadanoCardComponent_article_0_Template, 25, 10, "article", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CiudadanoCardComponent_ng_template_1_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ciudadano)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.StatusBadgeComponent],
      styles: [".ciudadano-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n  padding: 0.7rem;\n  border: 1px solid #d6e1ee;\n  border-radius: 0.95rem;\n  background: #ffffff;\n  box-shadow: none;\n}\n\n.ciudadano-card__band[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 0.7rem 0.8rem;\n  border: 1px solid #b9dfc7;\n  border-radius: 0.75rem;\n  background: #ecf8f0;\n}\n\n.ciudadano-card__band-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n}\n\n.ciudadano-card__main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 124px minmax(0, 1fr);\n  gap: 1rem;\n  align-items: start;\n  padding: 0.25rem 0.35rem 0;\n}\n\n.ciudadano-card__avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 124px;\n  height: 132px;\n  border-radius: 0.75rem;\n  overflow: hidden;\n  background: linear-gradient(135deg, #e6eef8 0%, #d6e4f5 100%);\n  color: #1a4f85;\n  font-size: 2rem;\n  font-weight: 800;\n}\n\n.ciudadano-card__avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.ciudadano-card__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n  padding-top: 0.08rem;\n}\n\n.ciudadano-card__header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.ciudadano-card__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.04rem;\n  letter-spacing: 0.01em;\n  text-transform: uppercase;\n}\n\n.ciudadano-card__document-line[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-700);\n  font-size: 0.91rem;\n}\n\n.ciudadano-card__document-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text-900);\n}\n\n.ciudadano-card__actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  align-items: center;\n  gap: 0.65rem;\n  margin-top: 0.1rem;\n}\n\n.ciudadano-card__actions[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  min-width: 160px;\n  min-height: 40px;\n}\n\n.ciudadano-card__origin[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2rem minmax(0, 1fr);\n  align-items: start;\n  gap: 0.45rem;\n  padding: 0.72rem 0.82rem;\n  border: 1px solid #d6e2f2;\n  border-radius: 0.75rem;\n  background: #f3f8ff;\n}\n\n.ciudadano-card__origin-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 1.2rem;\n  height: 1.2rem;\n  border-radius: 999px;\n  background: #1f63b4;\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.ciudadano-card__origin-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n}\n\n.ciudadano-card__origin-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.87rem;\n}\n\n.ciudadano-card__origin-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-text-700);\n  font-size: 0.82rem;\n  line-height: 1.35;\n  word-break: break-word;\n}\n\n.ciudadano-card--empty[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n  background: #f8fbff;\n  box-shadow: none;\n}\n\n.ciudadano-card--empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .ciudadano-card--empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 1199px) {\n  .ciudadano-card__main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ciudadano-card__avatar[_ngcontent-%COMP%] {\n    width: 108px;\n    height: 116px;\n  }\n  .ciudadano-card__actions[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    min-width: 0;\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2l1ZGFkYW5vLWNhcmQvY2l1ZGFkYW5vLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsU0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGO0VBRUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUFGO0VBR0E7SUFDRSxZQUFBO0lBQ0EsT0FBQTtFQURGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2l1ZGFkYW5vLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOXJlbTtcbiAgcGFkZGluZzogMC43cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZlMWVlO1xuICBib3JkZXItcmFkaXVzOiAwLjk1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2l1ZGFkYW5vLWNhcmRfX2JhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC45cmVtO1xuICBwYWRkaW5nOiAwLjdyZW0gMC44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjlkZmM3O1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZWNmOGYwO1xufVxuXG4uY2l1ZGFkYW5vLWNhcmRfX2JhbmQtY29weSBzdHJvbmcge1xuICBmb250LXNpemU6IDAuOThyZW07XG59XG5cbi5jaXVkYWRhbm8tY2FyZF9fbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTI0cHggbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuMzVyZW0gMDtcbn1cblxuLmNpdWRhZGFuby1jYXJkX19hdmF0YXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTI0cHg7XG4gIGhlaWdodDogMTMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNmVlZjggMCUsICNkNmU0ZjUgMTAwJSk7XG4gIGNvbG9yOiAjMWE0Zjg1O1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jaXVkYWRhbm8tY2FyZF9fYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2l1ZGFkYW5vLWNhcmRfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMDhyZW07XG59XG5cbi5jaXVkYWRhbm8tY2FyZF9faGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjQ1cmVtO1xufVxuXG4uY2l1ZGFkYW5vLWNhcmRfX2hlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjA0cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2l1ZGFkYW5vLWNhcmRfX2RvY3VtZW50LWxpbmUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcbn1cblxuLmNpdWRhZGFuby1jYXJkX19kb2N1bWVudC1saW5lIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTkwMCk7XG59XG5cbi5jaXVkYWRhbm8tY2FyZF9fYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjY1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjFyZW07XG59XG5cbi5jaXVkYWRhbm8tY2FyZF9fYWN0aW9ucyAuYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLmNpdWRhZGFuby1jYXJkX19vcmlnaW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMnJlbSBtaW5tYXgoMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBnYXA6IDAuNDVyZW07XG4gIHBhZGRpbmc6IDAuNzJyZW0gMC44MnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZTJmMjtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogI2YzZjhmZjtcbn1cblxuLmNpdWRhZGFuby1jYXJkX19vcmlnaW4taWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxLjJyZW07XG4gIGhlaWdodDogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogIzFmNjNiNDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jaXVkYWRhbm8tY2FyZF9fb3JpZ2luLWNvcHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMThyZW07XG59XG5cbi5jaXVkYWRhbm8tY2FyZF9fb3JpZ2luLWNvcHkgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44N3JlbTtcbn1cblxuLmNpdWRhZGFuby1jYXJkX19vcmlnaW4tY29weSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5jaXVkYWRhbm8tY2FyZC0tZW1wdHkge1xuICBwYWRkaW5nOiAxLjJyZW07XG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jaXVkYWRhbm8tY2FyZC0tZW1wdHkgaDMsXG4uY2l1ZGFkYW5vLWNhcmQtLWVtcHR5IHAge1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmNpdWRhZGFuby1jYXJkX19tYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5jaXVkYWRhbm8tY2FyZF9fYXZhdGFyIHtcbiAgICB3aWR0aDogMTA4cHg7XG4gICAgaGVpZ2h0OiAxMTZweDtcbiAgfVxuXG4gIC5jaXVkYWRhbm8tY2FyZF9fYWN0aW9ucyAuYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgZmxleDogMTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 927:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/entidad-card/entidad-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntidadCardComponent: () => (/* binding */ EntidadCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function EntidadCardComponent_ng_container_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function EntidadCardComponent_ng_container_1_img_3_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onLogoError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.resolveLogoSrc() || "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function EntidadCardComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.resolveInitials(ctx_r5.entidad.nombre), " ");
  }
}
function EntidadCardComponent_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Codigo: ", ctx_r6.entidad.codigo, " ");
  }
}
function EntidadCardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EntidadCardComponent_ng_container_1_img_3_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EntidadCardComponent_ng_container_1_ng_template_4_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EntidadCardComponent_ng_container_1_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntidadCardComponent_ng_container_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.selected.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resolveLogoSrc())("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.entidad.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entidad.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.entidad.descripcion || "Entidad disponible para la atencion segun la region del asesor.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.actionLabel, " ");
  }
}
function EntidadCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sin entidad cargada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "El componente queda listo para el paso de seleccion de entidad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class EntidadCardComponent {
  constructor() {
    this.entidad = null;
    this.actionLabel = 'Seleccionar entidad';
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.logoLoadFailed = false;
  }
  resolveInitials(nombre) {
    if (!nombre) {
      return 'EN';
    }
    return nombre.split(' ').filter(Boolean).slice(0, 2).map(segment => segment.charAt(0).toUpperCase()).join('');
  }
  ngOnChanges(changes) {
    if (changes['entidad']) {
      this.logoLoadFailed = false;
    }
  }
  resolveLogoSrc() {
    if (this.logoLoadFailed) {
      return null;
    }
    const rawUrl = this.entidad?.logoUrl?.trim();
    return rawUrl || null;
  }
  onLogoError() {
    this.logoLoadFailed = true;
  }
  static {
    this.ɵfac = function EntidadCardComponent_Factory(t) {
      return new (t || EntidadCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EntidadCardComponent,
      selectors: [["app-entidad-card"]],
      inputs: {
        entidad: "entidad",
        actionLabel: "actionLabel"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 2,
      consts: [[1, "entidad-card"], [4, "ngIf", "ngIfElse"], ["entidadEmpty", ""], [1, "entidad-card__top"], [1, "entidad-card__logo"], ["alt", "Logo de entidad", 3, "src", "error", 4, "ngIf", "ngIfElse"], ["entidadLogoFallback", ""], [1, "entidad-card__copy"], ["class", "entidad-card__code", 4, "ngIf"], [1, "entidad-card__footer"], [1, "entidad-card__availability"], ["type", "button", 1, "button", "button--secondary", 3, "click"], ["aria-hidden", "true"], ["alt", "Logo de entidad", 3, "src", "error"], [1, "entidad-card__code"]],
      template: function EntidadCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntidadCardComponent_ng_container_1_Template, 19, 6, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EntidadCardComponent_ng_template_2_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entidad)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".entidad-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  padding: 0.95rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: 0.9rem;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 8px 20px rgba(18, 52, 92, 0.06);\n}\n\n.entidad-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .entidad-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.entidad-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n}\n\n.entidad-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n  line-height: 1.45;\n  font-size: 0.85rem;\n}\n\n.entidad-card__top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(0, 1fr);\n  gap: 0.7rem;\n  align-items: start;\n}\n\n.entidad-card__logo[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.7rem;\n  background: linear-gradient(180deg, #e8f1ff 0%, #dce9fb 100%);\n  color: #15559c;\n  font-weight: 800;\n  display: grid;\n  place-items: center;\n  font-size: 0.78rem;\n  overflow: hidden;\n}\n\n.entidad-card__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #ffffff;\n}\n\n.entidad-card__copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n\n.entidad-card__code[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--color-text-500);\n  font-weight: 700;\n}\n\n.entidad-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.7rem;\n}\n\n.entidad-card__availability[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.45rem;\n  border-radius: 999px;\n  background: #eaf8ef;\n  color: #208355;\n  font-weight: 700;\n  font-size: 0.74rem;\n}\n\n.entidad-card__footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 0 0.75rem;\n  font-size: 0.82rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZW50aWRhZC1jYXJkL2VudGlkYWQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBOztFQUVFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lbnRpZGFkLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuODVyZW07XG4gIHBhZGRpbmc6IDAuOTVyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTgsIDUyLCA5MiwgMC4wNik7XG59XG5cbi5lbnRpZGFkLWNhcmQgaDMsXG4uZW50aWRhZC1jYXJkIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5lbnRpZGFkLWNhcmQgaDMge1xuICBmb250LXNpemU6IDAuOThyZW07XG59XG5cbi5lbnRpZGFkLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5lbnRpZGFkLWNhcmRfX3RvcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIG1pbm1heCgwLCAxZnIpO1xuICBnYXA6IDAuN3JlbTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uZW50aWRhZC1jYXJkX19sb2dvIHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2U4ZjFmZiAwJSwgI2RjZTlmYiAxMDAlKTtcbiAgY29sb3I6ICMxNTU1OWM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVudGlkYWQtY2FyZF9fbG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uZW50aWRhZC1jYXJkX19jb3B5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuXG4uZW50aWRhZC1jYXJkX19jb2RlIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC01MDApO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZW50aWRhZC1jYXJkX19mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43cmVtO1xufVxuXG4uZW50aWRhZC1jYXJkX19hdmFpbGFiaWxpdHkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4ycmVtIDAuNDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjZWFmOGVmO1xuICBjb2xvcjogIzIwODM1NTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjc0cmVtO1xufVxuXG4uZW50aWRhZC1jYXJkX19mb290ZXIgLmJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 201:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/servicio-card/servicio-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicioCardComponent: () => (/* binding */ ServicioCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function ServicioCardComponent_ng_container_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.servicio.logoUrl || "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ServicioCardComponent_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.servicio.nombre || "").slice(0, 2).toUpperCase() || "SV", " ");
  }
}
function ServicioCardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServicioCardComponent_ng_container_1_img_3_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ServicioCardComponent_ng_container_1_span_4_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicioCardComponent_ng_container_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.selected.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicioCardComponent_ng_container_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.secondaryAction.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.servicio.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.servicio.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.servicio.canal || "Atencion presencial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.servicio.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.servicio.descripcion || "Servicio operativo listo para ser seleccionado.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.servicio.disponibilidad || "Disponibilidad por confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.actionLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.secondaryLabel, " ");
  }
}
function ServicioCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sin servicio seleccionado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "El componente queda listo para mostrar catalogos y reportes operativos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ServicioCardComponent {
  constructor() {
    this.servicio = null;
    this.actionLabel = 'Seleccionar servicio';
    this.secondaryLabel = 'Reportar falla';
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.secondaryAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function ServicioCardComponent_Factory(t) {
      return new (t || ServicioCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicioCardComponent,
      selectors: [["app-servicio-card"]],
      inputs: {
        servicio: "servicio",
        actionLabel: "actionLabel",
        secondaryLabel: "secondaryLabel"
      },
      outputs: {
        selected: "selected",
        secondaryAction: "secondaryAction"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "servicio-card"], [4, "ngIf", "ngIfElse"], ["servicioEmpty", ""], [1, "servicio-card__head"], [1, "servicio-card__logo"], ["alt", "Logo del servicio", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "eyebrow"], [1, "servicio-card__footer"], [1, "actions-row"], ["type", "button", 1, "button", "button--secondary", 3, "click"], ["type", "button", 1, "button", "button--ghost", 3, "click"], ["alt", "Logo del servicio", 3, "src"]],
      template: function ServicioCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicioCardComponent_ng_container_1_Template, 19, 8, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServicioCardComponent_ng_template_2_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.servicio)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".servicio-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n  padding: 1.2rem;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: var(--shadow-card);\n}\n\n.servicio-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.servicio-card__logo[_ngcontent-%COMP%] {\n  width: 2.3rem;\n  height: 2.3rem;\n  border-radius: 0.6rem;\n  border: 1px solid #d3dfed;\n  background: #f4f8fd;\n  color: #1b5fa9;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  font-weight: 700;\n  font-size: 0.72rem;\n}\n\n.servicio-card__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #ffffff;\n}\n\n.servicio-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .servicio-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.servicio-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n  line-height: 1.6;\n}\n\n.servicio-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.servicio-card__footer[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n  font-size: 0.84rem;\n}\n\n.servicio-card__footer[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VydmljaW8tY2FyZC9zZXJ2aWNpby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2lvLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDEuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNhcmQpO1xufVxuXG4uc2VydmljaW8tY2FyZF9faGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uc2VydmljaW8tY2FyZF9fbG9nbyB7XG4gIHdpZHRoOiAyLjNyZW07XG4gIGhlaWdodDogMi4zcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2RmZWQ7XG4gIGJhY2tncm91bmQ6ICNmNGY4ZmQ7XG4gIGNvbG9yOiAjMWI1ZmE5O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuNzJyZW07XG59XG5cbi5zZXJ2aWNpby1jYXJkX19sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5zZXJ2aWNpby1jYXJkIGgzLFxuLnNlcnZpY2lvLWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlcnZpY2lvLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5zZXJ2aWNpby1jYXJkX19mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2VydmljaW8tY2FyZF9fZm9vdGVyID4gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbn1cblxuLnNlcnZpY2lvLWNhcmRfX2Zvb3RlciAuYWN0aW9ucy1yb3cge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2789:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/stepper-atencion/stepper-atencion.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepperAtencionComponent: () => (/* binding */ StepperAtencionComponent)
/* harmony export */ });
/* harmony import */ var _utils_track_by_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by.util */ 3967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function StepperAtencionComponent_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 8);
  }
}
function StepperAtencionComponent_li_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r1.hint);
  }
}
function StepperAtencionComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StepperAtencionComponent_li_1_span_4_Template, 1, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StepperAtencionComponent_li_1_span_8_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("stepper-atencion__item--active", index_r2 === ctx_r0.currentIndex)("stepper-atencion__item--done", index_r2 < ctx_r0.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](index_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r2 < ctx_r0.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", step_r1.hint);
  }
}
class StepperAtencionComponent {
  constructor() {
    this.steps = [];
    this.currentIndex = 0;
    this.trackByIndex = _utils_track_by_util__WEBPACK_IMPORTED_MODULE_0__.TrackByUtil.index;
  }
  static {
    this.ɵfac = function StepperAtencionComponent_Factory(t) {
      return new (t || StepperAtencionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StepperAtencionComponent,
      selectors: [["app-stepper-atencion"]],
      inputs: {
        steps: "steps",
        currentIndex: "currentIndex"
      },
      decls: 2,
      vars: 2,
      consts: [[1, "stepper-atencion"], ["class", "stepper-atencion__item", 3, "stepper-atencion__item--active", "stepper-atencion__item--done", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "stepper-atencion__item"], [1, "stepper-atencion__indicator"], [1, "stepper-atencion__index"], ["class", "stepper-atencion__connector", 4, "ngIf"], [1, "stepper-atencion__copy"], [4, "ngIf"], [1, "stepper-atencion__connector"]],
      template: function StepperAtencionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StepperAtencionComponent_li_1_Template, 9, 8, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackByIndex);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".stepper-atencion[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.2rem 0 0.05rem;\n  margin: 0;\n  list-style: none;\n}\n\n.stepper-atencion__item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n}\n\n.stepper-atencion__indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n\n.stepper-atencion__connector[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  border-radius: 999px;\n  background: linear-gradient(90deg, rgba(21, 85, 156, 0.24), rgba(21, 85, 156, 0.08));\n}\n\n.stepper-atencion__index[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-width: 1.72rem;\n  height: 1.72rem;\n  border-radius: 50%;\n  background: #eef2f6;\n  color: #5f7793;\n  border: 1px solid rgba(21, 85, 156, 0.16);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.stepper-atencion__item--active[_ngcontent-%COMP%]   .stepper-atencion__index[_ngcontent-%COMP%] {\n  background: #1d63b7;\n  color: #ffffff;\n  box-shadow: 0 10px 18px rgba(15, 76, 129, 0.18);\n}\n\n.stepper-atencion__item--done[_ngcontent-%COMP%]   .stepper-atencion__index[_ngcontent-%COMP%] {\n  background: rgba(29, 127, 78, 0.14);\n  color: var(--color-success);\n}\n\n.stepper-atencion__item--done[_ngcontent-%COMP%]   .stepper-atencion__connector[_ngcontent-%COMP%] {\n  background: rgba(29, 127, 78, 0.32);\n}\n\n.stepper-atencion__copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.12rem;\n}\n\n.stepper-atencion__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n\n.stepper-atencion__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-500);\n  font-size: 0.74rem;\n}\n\n@media (max-width: 1199px) {\n  .stepper-atencion[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RlcHBlci1hdGVuY2lvbi9zdGVwcGVyLWF0ZW5jaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG9GQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQUE7RUFDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXItYXRlbmNpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMC43NXJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDAgMC4wNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc3RlcHBlci1hdGVuY2lvbl9faXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC41NXJlbTtcbn1cblxuLnN0ZXBwZXItYXRlbmNpb25fX2luZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40NXJlbTtcbn1cblxuLnN0ZXBwZXItYXRlbmNpb25fX2Nvbm5lY3RvciB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIxLCA4NSwgMTU2LCAwLjI0KSwgcmdiYSgyMSwgODUsIDE1NiwgMC4wOCkpO1xufVxuXG4uc3RlcHBlci1hdGVuY2lvbl9faW5kZXgge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDEuNzJyZW07XG4gIGhlaWdodDogMS43MnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZWVmMmY2O1xuICBjb2xvcjogIzVmNzc5MztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMSwgODUsIDE1NiwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN0ZXBwZXItYXRlbmNpb25fX2l0ZW0tLWFjdGl2ZSAuc3RlcHBlci1hdGVuY2lvbl9faW5kZXgge1xuICBiYWNrZ3JvdW5kOiAjMWQ2M2I3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE4cHggcmdiYSgxNSwgNzYsIDEyOSwgMC4xOCk7XG59XG5cbi5zdGVwcGVyLWF0ZW5jaW9uX19pdGVtLS1kb25lIC5zdGVwcGVyLWF0ZW5jaW9uX19pbmRleCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDEyNywgNzgsIDAuMTQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5zdGVwcGVyLWF0ZW5jaW9uX19pdGVtLS1kb25lIC5zdGVwcGVyLWF0ZW5jaW9uX19jb25uZWN0b3Ige1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAxMjcsIDc4LCAwLjMyKTtcbn1cblxuLnN0ZXBwZXItYXRlbmNpb25fX2NvcHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMTJyZW07XG59XG5cbi5zdGVwcGVyLWF0ZW5jaW9uX19jb3B5IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbn1cblxuLnN0ZXBwZXItYXRlbmNpb25fX2NvcHkgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTUwMCk7XG4gIGZvbnQtc2l6ZTogMC43NHJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuc3RlcHBlci1hdGVuY2lvbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3708:
/*!*****************************************************************!*\
  !*** ./src/app/shared/layouts/app-shell/app-shell.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppShellComponent: () => (/* binding */ AppShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/loading.service */ 8660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/app-header/app-header.component */ 8245);
/* harmony import */ var _ui_toast_stack_toast_stack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/toast-stack/toast-stack.component */ 5119);






function AppShellComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 5);
  }
}
class AppShellComponent {
  constructor(loadingService) {
    this.loadingService = loadingService;
    this.isLoading$ = this.loadingService.isLoading$;
  }
  static {
    this.ɵfac = function AppShellComponent_Factory(t) {
      return new (t || AppShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppShellComponent,
      selectors: [["app-shell"]],
      decls: 9,
      vars: 3,
      consts: [[1, "app-shell"], ["aria-hidden", "true", 1, "app-shell__ambient"], [1, "app-shell__frame"], ["class", "app-shell__progress", 4, "ngIf"], [1, "app-shell__main"], [1, "app-shell__progress"]],
      template: function AppShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppShellComponent_div_4_Template, 1, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "main", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-toast-stack");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx.isLoading$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent, _ui_toast_stack_toast_stack_component__WEBPACK_IMPORTED_MODULE_2__.ToastStackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: [".app-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  padding: 2rem 1.5rem 2.5rem;\n}\n\n.app-shell__ambient[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  background: radial-gradient(circle at 12% 10%, rgba(25, 87, 165, 0.08), transparent 22%), radial-gradient(circle at 88% 10%, rgba(15, 59, 97, 0.08), transparent 22%), linear-gradient(180deg, rgba(240, 246, 252, 0.82), rgba(234, 242, 249, 0.5));\n}\n\n.app-shell__frame[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(1440px, 100vw - 3rem);\n  margin: 0 auto;\n  border: 1px solid rgba(15, 59, 97, 0.08);\n  border-radius: 1.2rem;\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 20px 42px rgba(15, 59, 97, 0.1);\n  overflow: hidden;\n}\n\n.app-shell__progress[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 61;\n  height: 4px;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(111, 181, 255, 0.95), rgba(255, 255, 255, 0.1));\n  background-size: 220% 100%;\n  animation: _ngcontent-%COMP%_shell-progress 1.1s linear infinite;\n}\n\n.app-shell__main[_ngcontent-%COMP%] {\n  padding: 2rem 2rem 2.5rem;\n}\n\n@keyframes _ngcontent-%COMP%_shell-progress {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: -100% 0;\n  }\n}\n@media (max-width: 1199px) {\n  .app-shell[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .app-shell__frame[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 1.25rem;\n  }\n  .app-shell__main[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xheW91dHMvYXBwLXNoZWxsL2FwcC1zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLG1QQUNFO0FBQUo7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUhBQ0U7RUFDRiwwQkFBQTtFQUNBLDhDQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSwyQkFBQTtFQUhGO0VBTUE7SUFDRSw0QkFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsYUFBQTtFQUxGO0VBUUE7SUFDRSxXQUFBO0lBQ0Esc0JBQUE7RUFORjtFQVNBO0lBQ0UsZ0JBQUE7RUFQRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zaGVsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtIDIuNXJlbTtcbn1cblxuLmFwcC1zaGVsbF9fYW1iaWVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTIlIDEwJSwgcmdiYSgyNSwgODcsIDE2NSwgMC4wOCksIHRyYW5zcGFyZW50IDIyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4OCUgMTAlLCByZ2JhKDE1LCA1OSwgOTcsIDAuMDgpLCB0cmFuc3BhcmVudCAyMiUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjQwLCAyNDYsIDI1MiwgMC44MiksIHJnYmEoMjM0LCAyNDIsIDI0OSwgMC41KSk7XG59XG5cbi5hcHAtc2hlbGxfX2ZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogbWluKDE0NDBweCwgY2FsYygxMDB2dyAtIDNyZW0pKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDU5LCA5NywgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQycHggcmdiYSgxNSwgNTksIDk3LCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXBwLXNoZWxsX19wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogNjE7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCByZ2JhKDExMSwgMTgxLCAyNTUsIDAuOTUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIyMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBzaGVsbC1wcm9ncmVzcyAxLjFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmFwcC1zaGVsbF9fbWFpbiB7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbSAyLjVyZW07XG59XG5cbkBrZXlmcmFtZXMgc2hlbGwtcHJvZ3Jlc3Mge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCUgMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5hcHAtc2hlbGwge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuYXBwLXNoZWxsX19mcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgfVxuXG4gIC5hcHAtc2hlbGxfX21haW4ge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app-header/app-header.component */ 8245);
/* harmony import */ var _components_advisor_summary_advisor_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/advisor-summary/advisor-summary.component */ 6661);
/* harmony import */ var _components_aviso_operativo_item_aviso_operativo_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aviso-operativo-item/aviso-operativo-item.component */ 3051);
/* harmony import */ var _components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/aviso-operativo-list/aviso-operativo-list.component */ 2217);
/* harmony import */ var _components_ciudadano_card_ciudadano_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ciudadano-card/ciudadano-card.component */ 4509);
/* harmony import */ var _components_entidad_card_entidad_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/entidad-card/entidad-card.component */ 927);
/* harmony import */ var _components_servicio_card_servicio_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/servicio-card/servicio-card.component */ 201);
/* harmony import */ var _components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stepper-atencion/stepper-atencion.component */ 2789);
/* harmony import */ var _layouts_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/app-shell/app-shell.component */ 3708);
/* harmony import */ var _ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/confirm-modal/confirm-modal.component */ 5367);
/* harmony import */ var _ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/empty-state/empty-state.component */ 6619);
/* harmony import */ var _ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/loading-skeleton/loading-skeleton.component */ 2121);
/* harmony import */ var _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/status-badge/status-badge.component */ 8333);
/* harmony import */ var _ui_toast_stack_toast_stack_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/toast-stack/toast-stack.component */ 5119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7580);


















const SHARED_DECLARATIONS = [_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__.AppHeaderComponent, _components_advisor_summary_advisor_summary_component__WEBPACK_IMPORTED_MODULE_1__.AdvisorSummaryComponent, _layouts_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_8__.AppShellComponent, _components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_7__.StepperAtencionComponent, _components_ciudadano_card_ciudadano_card_component__WEBPACK_IMPORTED_MODULE_4__.CiudadanoCardComponent, _components_entidad_card_entidad_card_component__WEBPACK_IMPORTED_MODULE_5__.EntidadCardComponent, _components_servicio_card_servicio_card_component__WEBPACK_IMPORTED_MODULE_6__.ServicioCardComponent, _components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_3__.AvisoOperativoListComponent, _components_aviso_operativo_item_aviso_operativo_item_component__WEBPACK_IMPORTED_MODULE_2__.AvisoOperativoItemComponent, _ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_11__.LoadingSkeletonComponent, _ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__.EmptyStateComponent, _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_12__.StatusBadgeComponent, _ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmModalComponent, _ui_toast_stack_toast_stack_component__WEBPACK_IMPORTED_MODULE_13__.ToastStackComponent];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__.AppHeaderComponent, _components_advisor_summary_advisor_summary_component__WEBPACK_IMPORTED_MODULE_1__.AdvisorSummaryComponent, _layouts_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_8__.AppShellComponent, _components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_7__.StepperAtencionComponent, _components_ciudadano_card_ciudadano_card_component__WEBPACK_IMPORTED_MODULE_4__.CiudadanoCardComponent, _components_entidad_card_entidad_card_component__WEBPACK_IMPORTED_MODULE_5__.EntidadCardComponent, _components_servicio_card_servicio_card_component__WEBPACK_IMPORTED_MODULE_6__.ServicioCardComponent, _components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_3__.AvisoOperativoListComponent, _components_aviso_operativo_item_aviso_operativo_item_component__WEBPACK_IMPORTED_MODULE_2__.AvisoOperativoItemComponent, _ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_11__.LoadingSkeletonComponent, _ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__.EmptyStateComponent, _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_12__.StatusBadgeComponent, _ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmModalComponent, _ui_toast_stack_toast_stack_component__WEBPACK_IMPORTED_MODULE_13__.ToastStackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__.AppHeaderComponent, _components_advisor_summary_advisor_summary_component__WEBPACK_IMPORTED_MODULE_1__.AdvisorSummaryComponent, _layouts_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_8__.AppShellComponent, _components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_7__.StepperAtencionComponent, _components_ciudadano_card_ciudadano_card_component__WEBPACK_IMPORTED_MODULE_4__.CiudadanoCardComponent, _components_entidad_card_entidad_card_component__WEBPACK_IMPORTED_MODULE_5__.EntidadCardComponent, _components_servicio_card_servicio_card_component__WEBPACK_IMPORTED_MODULE_6__.ServicioCardComponent, _components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_3__.AvisoOperativoListComponent, _components_aviso_operativo_item_aviso_operativo_item_component__WEBPACK_IMPORTED_MODULE_2__.AvisoOperativoItemComponent, _ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_11__.LoadingSkeletonComponent, _ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__.EmptyStateComponent, _ui_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_12__.StatusBadgeComponent, _ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmModalComponent, _ui_toast_stack_toast_stack_component__WEBPACK_IMPORTED_MODULE_13__.ToastStackComponent]
  });
})();

/***/ }),

/***/ 5367:
/*!********************************************************************!*\
  !*** ./src/app/shared/ui/confirm-modal/confirm-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmModalComponent: () => (/* binding */ ConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function ConfirmModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_div_0_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelled.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 3)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.confirmed.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_div_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.cancelled.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.confirmLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.cancelLabel, " ");
  }
}
class ConfirmModalComponent {
  constructor() {
    this.visible = false;
    this.title = 'Confirmar accion';
    this.description = 'Confirma si deseas continuar.';
    this.confirmLabel = 'Confirmar';
    this.cancelLabel = 'Cancelar';
    this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function ConfirmModalComponent_Factory(t) {
      return new (t || ConfirmModalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmModalComponent,
      selectors: [["app-confirm-modal"]],
      inputs: {
        visible: "visible",
        title: "title",
        description: "description",
        confirmLabel: "confirmLabel",
        cancelLabel: "cancelLabel"
      },
      outputs: {
        confirmed: "confirmed",
        cancelled: "cancelled"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "confirm-modal", 4, "ngIf"], [1, "confirm-modal"], [1, "confirm-modal__backdrop", 3, "click"], [1, "confirm-modal__panel"], [1, "actions-row"], ["type", "button", 1, "button", 3, "click"], ["type", "button", 1, "button", "button--secondary", 3, "click"]],
      template: function ConfirmModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmModalComponent_div_0_Template, 12, 4, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".confirm-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 80;\n  display: grid;\n  place-items: center;\n  padding: 2rem;\n}\n\n.confirm-modal__backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(14, 34, 52, 0.38);\n}\n\n.confirm-modal__panel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(32rem, 100%);\n  padding: 1.6rem;\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: var(--shadow-soft);\n}\n\n.confirm-modal__panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n}\n\n.confirm-modal__panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1.2rem;\n  color: var(--color-text-700);\n  line-height: 1.6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiA4MDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNvbmZpcm0tbW9kYWxfX2JhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNCwgMzQsIDUyLCAwLjM4KTtcbn1cblxuLmNvbmZpcm0tbW9kYWxfX3BhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogbWluKDMycmVtLCAxMDAlKTtcbiAgcGFkZGluZzogMS42cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc29mdCk7XG59XG5cbi5jb25maXJtLW1vZGFsX19wYW5lbCBoMyB7XG4gIG1hcmdpbjogMCAwIDAuNnJlbTtcbn1cblxuLmNvbmZpcm0tbW9kYWxfX3BhbmVsIHAge1xuICBtYXJnaW46IDAgMCAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6619:
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/empty-state/empty-state.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyStateComponent: () => (/* binding */ EmptyStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function EmptyStateComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmptyStateComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.action.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.actionLabel, " ");
  }
}
class EmptyStateComponent {
  constructor() {
    this.title = 'Sin informacion disponible';
    this.description = 'No hay datos para mostrar por el momento.';
    this.compact = false;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function EmptyStateComponent_Factory(t) {
      return new (t || EmptyStateComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmptyStateComponent,
      selectors: [["app-empty-state"]],
      inputs: {
        title: "title",
        description: "description",
        actionLabel: "actionLabel",
        compact: "compact"
      },
      outputs: {
        action: "action"
      },
      decls: 9,
      vars: 5,
      consts: [[1, "empty-state"], ["aria-hidden", "true", 1, "empty-state__icon"], [1, "empty-state__body"], [1, "empty-state__title"], [1, "empty-state__description"], ["type", "button", "class", "button button--secondary", 3, "click", 4, "ngIf"], ["type", "button", 1, "button", "button--secondary", 3, "click"]],
      template: function EmptyStateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmptyStateComponent_button_8_Template, 2, 1, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("empty-state--compact", ctx.compact);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionLabel);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: flex-start;\n  gap: 1rem;\n  padding: 1.1rem;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: linear-gradient(180deg, rgba(244, 249, 254, 0.96), rgba(255, 255, 255, 0.94));\n}\n\n.empty-state__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--color-brand-100);\n  color: var(--color-brand-800);\n  font-weight: 800;\n}\n\n.empty-state__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n}\n\n.empty-state__description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-700);\n  line-height: 1.55;\n}\n\n.empty-state--compact[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2VtcHR5LXN0YXRlL2VtcHR5LXN0YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLCtCQUFBO0VBQ0EseUZBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDEuMXJlbTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNvbG9yLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI0NCwgMjQ5LCAyNTQsIDAuOTYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpKTtcbn1cblxuLmVtcHR5LXN0YXRlX19pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnJhbmQtMTAwKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTgwMCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5lbXB0eS1zdGF0ZV9fdGl0bGUge1xuICBtYXJnaW46IDAgMCAwLjM1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5lbXB0eS1zdGF0ZV9fZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xufVxuXG4uZW1wdHktc3RhdGUtLWNvbXBhY3Qge1xuICBnYXA6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2121:
/*!**************************************************************************!*\
  !*** ./src/app/shared/ui/loading-skeleton/loading-skeleton.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSkeletonComponent: () => (/* binding */ LoadingSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function LoadingSkeletonComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", line_r1 === 0 ? 92 : 100 - line_r1 * 7, "%");
  }
}
class LoadingSkeletonComponent {
  constructor() {
    this.lines = 4;
    this.compact = false;
  }
  get lineIndexes() {
    return Array.from({
      length: this.lines
    }, (_, index) => index);
  }
  static {
    this.ɵfac = function LoadingSkeletonComponent_Factory(t) {
      return new (t || LoadingSkeletonComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingSkeletonComponent,
      selectors: [["app-loading-skeleton"]],
      inputs: {
        lines: "lines",
        compact: "compact"
      },
      decls: 2,
      vars: 3,
      consts: [[1, "loading-skeleton"], ["class", "loading-skeleton__line", 3, "width", 4, "ngFor", "ngForOf"], [1, "loading-skeleton__line"]],
      template: function LoadingSkeletonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoadingSkeletonComponent_span_1_Template, 1, 2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loading-skeleton--compact", ctx.compact);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lineIndexes);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".loading-skeleton[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n}\n\n.loading-skeleton__line[_ngcontent-%COMP%] {\n  display: block;\n  height: 0.95rem;\n  border-radius: 999px;\n  background: linear-gradient(90deg, rgba(219, 230, 239, 0.82), rgba(245, 249, 252, 0.96), rgba(219, 230, 239, 0.82));\n  background-size: 220% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.3s linear infinite;\n}\n\n.loading-skeleton--compact[_ngcontent-%COMP%]   .loading-skeleton__line[_ngcontent-%COMP%] {\n  height: 0.72rem;\n}\n\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: -100% 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2xvYWRpbmctc2tlbGV0b24vbG9hZGluZy1za2VsZXRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUhBQ0U7RUFNRiwwQkFBQTtFQUNBLGdEQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUNFLDJCQUFBO0VBTEY7RUFRQTtJQUNFLDRCQUFBO0VBTkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLXNrZWxldG9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjdyZW07XG59XG5cbi5sb2FkaW5nLXNrZWxldG9uX19saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMC45NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICByZ2JhKDIxOSwgMjMwLCAyMzksIDAuODIpLFxuICAgICAgcmdiYSgyNDUsIDI0OSwgMjUyLCAwLjk2KSxcbiAgICAgIHJnYmEoMjE5LCAyMzAsIDIzOSwgMC44MilcbiAgICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIyMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBza2VsZXRvbi1zaGltbWVyIDEuM3MgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubG9hZGluZy1za2VsZXRvbi0tY29tcGFjdCAubG9hZGluZy1za2VsZXRvbl9fbGluZSB7XG4gIGhlaWdodDogMC43MnJlbTtcbn1cblxuQGtleWZyYW1lcyBza2VsZXRvbi1zaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDA7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8333:
/*!******************************************************************!*\
  !*** ./src/app/shared/ui/status-badge/status-badge.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBadgeComponent: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


class StatusBadgeComponent {
  constructor() {
    this.label = 'Pendiente';
    this.tone = 'default';
  }
  static {
    this.ɵfac = function StatusBadgeComponent_Factory(t) {
      return new (t || StatusBadgeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatusBadgeComponent,
      selectors: [["app-status-badge"]],
      inputs: {
        label: "label",
        tone: "tone"
      },
      decls: 2,
      vars: 2,
      consts: [[1, "status-badge", 3, "ngClass"]],
      template: function StatusBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "status-badge--" + ctx.tone);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, "\n");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: [".status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.28rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  border: 1px solid transparent;\n}\n\n.status-badge--default[_ngcontent-%COMP%] {\n  background: var(--color-surface-muted);\n  color: var(--color-text-700);\n  border-color: var(--color-border);\n}\n\n.status-badge--success[_ngcontent-%COMP%] {\n  background: rgba(29, 127, 78, 0.12);\n  color: var(--color-success);\n  border-color: rgba(29, 127, 78, 0.18);\n}\n\n.status-badge--warning[_ngcontent-%COMP%] {\n  background: rgba(163, 106, 0, 0.12);\n  color: var(--color-warning);\n  border-color: rgba(163, 106, 0, 0.2);\n}\n\n.status-badge--danger[_ngcontent-%COMP%] {\n  background: rgba(176, 63, 63, 0.12);\n  color: var(--color-danger);\n  border-color: rgba(176, 63, 63, 0.18);\n}\n\n.status-badge--info[_ngcontent-%COMP%] {\n  background: rgba(36, 93, 158, 0.12);\n  color: var(--color-info);\n  border-color: rgba(36, 93, 158, 0.18);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3N0YXR1cy1iYWRnZS9zdGF0dXMtYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNHJlbTtcbiAgcGFkZGluZzogMC4yOHJlbSAwLjY1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnN0YXR1cy1iYWRnZS0tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtbXV0ZWQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC03MDApO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5zdGF0dXMtYmFkZ2UtLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAxMjcsIDc4LCAwLjEyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjksIDEyNywgNzgsIDAuMTgpO1xufVxuXG4uc3RhdHVzLWJhZGdlLS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjMsIDEwNiwgMCwgMC4xMik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2MywgMTA2LCAwLCAwLjIpO1xufVxuXG4uc3RhdHVzLWJhZGdlLS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NiwgNjMsIDYzLCAwLjEyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNzYsIDYzLCA2MywgMC4xOCk7XG59XG5cbi5zdGF0dXMtYmFkZ2UtLWluZm8ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCA5MywgMTU4LCAwLjEyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWluZm8pO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzYsIDkzLCAxNTgsIDAuMTgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 5119:
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/toast-stack/toast-stack.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastStackComponent: () => (/* binding */ ToastStackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function ToastStackComponent_div_0_article_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r3.description);
  }
}
function ToastStackComponent_div_0_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 3)(1, "div", 4)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ToastStackComponent_div_0_article_1_p_4_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastStackComponent_div_0_article_1_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const message_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.dismiss(message_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("toast-stack__item--success", message_r3.tone === "success")("toast-stack__item--warning", message_r3.tone === "warning")("toast-stack__item--danger", message_r3.tone === "danger")("toast-stack__item--info", message_r3.tone === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r3.description);
  }
}
function ToastStackComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastStackComponent_div_0_article_1_Template, 7, 10, "article", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const messages_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", messages_r1);
  }
}
class ToastStackComponent {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.messages$ = this.notificationService.messages$;
  }
  dismiss(id) {
    this.notificationService.dismiss(id);
  }
  static {
    this.ɵfac = function ToastStackComponent_Factory(t) {
      return new (t || ToastStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToastStackComponent,
      selectors: [["app-toast-stack"]],
      decls: 2,
      vars: 3,
      consts: [["class", "toast-stack", 4, "ngIf"], [1, "toast-stack"], ["class", "toast-stack__item", 3, "toast-stack__item--success", "toast-stack__item--warning", "toast-stack__item--danger", "toast-stack__item--info", 4, "ngFor", "ngForOf"], [1, "toast-stack__item"], [1, "toast-stack__copy"], [4, "ngIf"], ["type", "button", 1, "toast-stack__close", 3, "click"]],
      template: function ToastStackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastStackComponent_div_0_Template, 2, 1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.messages$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: [".toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 90;\n  display: grid;\n  gap: 0.75rem;\n  width: min(24rem, 100vw - 2rem);\n}\n\n.toast-stack__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  background: rgba(255, 255, 255, 0.97);\n  box-shadow: var(--shadow-soft);\n}\n\n.toast-stack__item--success[_ngcontent-%COMP%] {\n  border-color: rgba(29, 127, 78, 0.2);\n}\n\n.toast-stack__item--warning[_ngcontent-%COMP%] {\n  border-color: rgba(163, 106, 0, 0.2);\n}\n\n.toast-stack__item--danger[_ngcontent-%COMP%] {\n  border-color: rgba(176, 63, 63, 0.2);\n}\n\n.toast-stack__item--info[_ngcontent-%COMP%] {\n  border-color: rgba(36, 93, 158, 0.2);\n}\n\n.toast-stack__copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n}\n\n.toast-stack__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-700);\n}\n\n.toast-stack__close[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--color-text-500);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3RvYXN0LXN0YWNrL3RvYXN0LXN0YWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3Qtc3RhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMS41cmVtO1xuICByaWdodDogMS41cmVtO1xuICB6LWluZGV4OiA5MDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjc1cmVtO1xuICB3aWR0aDogbWluKDI0cmVtLCBjYWxjKDEwMHZ3IC0gMnJlbSkpO1xufVxuXG4udG9hc3Qtc3RhY2tfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjFyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zb2Z0KTtcbn1cblxuLnRvYXN0LXN0YWNrX19pdGVtLS1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI5LCAxMjcsIDc4LCAwLjIpO1xufVxuXG4udG9hc3Qtc3RhY2tfX2l0ZW0tLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTYzLCAxMDYsIDAsIDAuMik7XG59XG5cbi50b2FzdC1zdGFja19faXRlbS0tZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3NiwgNjMsIDYzLCAwLjIpO1xufVxuXG4udG9hc3Qtc3RhY2tfX2l0ZW0tLWluZm8ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMzYsIDkzLCAxNTgsIDAuMik7XG59XG5cbi50b2FzdC1zdGFja19fY29weSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4zNXJlbTtcbn1cblxuLnRvYXN0LXN0YWNrX19jb3B5IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG59XG5cbi50b2FzdC1zdGFja19fY2xvc2Uge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC01MDApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3967:
/*!***********************************************!*\
  !*** ./src/app/shared/utils/track-by.util.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackByUtil: () => (/* binding */ TrackByUtil)
/* harmony export */ });
class TrackByUtil {
  static index(index) {
    return index;
  }
  static id(index, item) {
    return item.id ?? index;
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiBaseUrl: '/mexpres-atencion-backend/api/v1',
  authLoginUrl: 'http://localhost/auth-server/public/'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map