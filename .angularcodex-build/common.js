"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["common"],{

/***/ 8145:
/*!**********************************************************************!*\
  !*** ./src/app/features/atencion/services/atencion-state.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtencionStateService: () => (/* binding */ AtencionStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_session_context_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/session-context.service */ 774);



const INITIAL_STATE = {
  status: 'idle',
  ciudadano: null,
  atencion: null,
  entidad: null,
  servicio: null,
  message: 'Busca al ciudadano para iniciar una atencion.',
  currentRoute: null,
  serviceMonitor: null
};
const STORAGE_KEY = 'mexpres.atencion.resume';
class AtencionStateService {
  constructor(sessionContextService) {
    this.sessionContextService = sessionContextService;
    this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(INITIAL_STATE);
    this.currentAdvisorKey = null;
    this.hydrating = false;
    this.state$ = this.stateSubject.asObservable();
    this.sessionContextService.state$.subscribe(session => {
      if (session.status !== 'authenticated' || !session.asesor) {
        this.currentAdvisorKey = null;
        return;
      }
      const advisorKey = this.resolveAdvisorKey(session.asesor);
      if (advisorKey !== this.currentAdvisorKey) {
        this.currentAdvisorKey = advisorKey;
        this.restorePersistedState();
      }
    });
  }
  get snapshot() {
    return this.stateSubject.value;
  }
  get resumeRoute() {
    const state = this.snapshot;
    if (!state.ciudadano || !state.atencion) {
      return null;
    }
    return state.currentRoute || '/atencion';
  }
  hasActiveAttention() {
    const state = this.snapshot;
    return Boolean(state.ciudadano && state.atencion);
  }
  setStatus(status, message) {
    this.patch({
      status,
      message
    });
  }
  startLookup(status, message) {
    this.patch({
      status,
      ciudadano: null,
      atencion: null,
      entidad: null,
      servicio: null,
      currentRoute: '/atencion',
      serviceMonitor: null,
      message
    });
  }
  enableManual(message) {
    this.patch({
      status: 'manual',
      ciudadano: null,
      atencion: null,
      entidad: null,
      servicio: null,
      currentRoute: '/atencion',
      serviceMonitor: null,
      message
    });
  }
  setFound(ciudadano, message) {
    this.patch({
      status: 'found',
      ciudadano,
      atencion: null,
      entidad: null,
      servicio: null,
      currentRoute: '/atencion',
      serviceMonitor: null,
      message
    });
  }
  setAttentionStarted(atencion, message) {
    this.patch({
      status: 'attention-started',
      atencion,
      entidad: null,
      servicio: null,
      serviceMonitor: null,
      message
    });
  }
  setEntidadSelected(entidad, atencion, message) {
    this.patch({
      atencion,
      entidad,
      servicio: null,
      serviceMonitor: null,
      message
    });
  }
  setServicioSelected(servicio, atencion, message) {
    this.patch({
      atencion,
      servicio,
      message
    });
  }
  setError(message) {
    this.patch({
      status: 'error',
      message
    });
  }
  setCurrentRoute(route) {
    this.patch({
      currentRoute: route
    });
  }
  setServiceMonitor(serviceMonitor) {
    this.patch({
      serviceMonitor
    });
  }
  reset() {
    this.stateSubject.next(INITIAL_STATE);
    this.persistState(INITIAL_STATE);
  }
  patch(partial) {
    const nextState = {
      ...this.stateSubject.value,
      ...partial
    };
    this.stateSubject.next(nextState);
    this.persistState(nextState);
  }
  restorePersistedState() {
    const advisorKey = this.currentAdvisorKey;
    if (!advisorKey) {
      return;
    }
    const persistedStore = this.readPersistedStore();
    const persistedState = persistedStore[advisorKey];
    if (!persistedState) {
      this.hydrating = true;
      this.stateSubject.next(INITIAL_STATE);
      this.hydrating = false;
      return;
    }
    this.hydrating = true;
    this.stateSubject.next(this.normalizeState(persistedState));
    this.hydrating = false;
  }
  persistState(state) {
    if (this.hydrating) {
      return;
    }
    const advisorKey = this.currentAdvisorKey;
    if (!advisorKey || !this.canUseStorage()) {
      return;
    }
    const persistedStore = this.readPersistedStore();
    if (!this.shouldPersistState(state)) {
      delete persistedStore[advisorKey];
      this.writePersistedStore(persistedStore);
      return;
    }
    persistedStore[advisorKey] = this.normalizeState(state);
    this.writePersistedStore(persistedStore);
  }
  shouldPersistState(state) {
    return Boolean(state.ciudadano || state.atencion || state.entidad || state.servicio);
  }
  normalizeState(state) {
    return {
      ...INITIAL_STATE,
      ...state,
      currentRoute: state.currentRoute ?? INITIAL_STATE.currentRoute,
      serviceMonitor: state.serviceMonitor ?? INITIAL_STATE.serviceMonitor
    };
  }
  readPersistedStore() {
    if (!this.canUseStorage()) {
      return {};
    }
    try {
      const rawStore = window.localStorage.getItem(STORAGE_KEY);
      if (!rawStore) {
        return {};
      }
      return JSON.parse(rawStore);
    } catch (error) {
      console.error('[AtencionStateService] Error leyendo estado persistido', error);
      return {};
    }
  }
  writePersistedStore(store) {
    if (!this.canUseStorage()) {
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (error) {
      console.error('[AtencionStateService] Error persistiendo estado', error);
    }
  }
  resolveAdvisorKey(asesor) {
    return String(asesor.email || asesor.documento || asesor.id || asesor.nombreCompleto);
  }
  canUseStorage() {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
  static {
    this.ɵfac = function AtencionStateService_Factory(t) {
      return new (t || AtencionStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_session_context_service__WEBPACK_IMPORTED_MODULE_0__.SessionContextService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AtencionStateService,
      factory: AtencionStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1193:
/*!**********************************************************************************!*\
  !*** ./src/app/features/avisos-operativos/services/avisos-operativos.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisosOperativosService: () => (/* binding */ AvisosOperativosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api-base.service */ 294);





class AvisosOperativosService {
  constructor(http, apiBaseService) {
    this.http = http;
    this.apiBaseService = apiBaseService;
    this.recentCache = new Map();
  }
  listarRecientes(limit = 6, force = false) {
    if (!force && this.recentCache.has(limit)) {
      return this.recentCache.get(limit);
    }
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('limit', String(limit));
    const request$ = this.http.get(this.apiBaseService.buildUrl('avisos-operativos'), {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => this.apiBaseService.unwrap(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
    this.recentCache.set(limit, request$);
    return request$;
  }
  crear(payload) {
    return this.http.post(this.apiBaseService.buildUrl('avisos-operativos'), payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => this.apiBaseService.unwrap(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(aviso => {
      this.recentCache.clear();
      return aviso;
    }));
  }
  actualizarEstado(avisoId, payload) {
    return this.http.patch(this.apiBaseService.buildUrl(`avisos-operativos/${avisoId}/estado`), payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => this.apiBaseService.unwrap(response)));
  }
  static {
    this.ɵfac = function AvisosOperativosService_Factory(t) {
      return new (t || AvisosOperativosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AvisosOperativosService,
      factory: AvisosOperativosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map