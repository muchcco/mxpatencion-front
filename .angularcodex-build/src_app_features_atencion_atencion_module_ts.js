"use strict";
(self["webpackChunkmexpres_atencion_frontend"] = self["webpackChunkmexpres_atencion_frontend"] || []).push([["src_app_features_atencion_atencion_module_ts"],{

/***/ 3440:
/*!**************************************************************!*\
  !*** ./src/app/features/atencion/atencion-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtencionRoutingModule: () => (/* binding */ AtencionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_atencion_home_atencion_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/atencion-home/atencion-home-page.component */ 6353);
/* harmony import */ var _pages_atencion_entidad_atencion_entidad_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/atencion-entidad/atencion-entidad-page.component */ 9037);
/* harmony import */ var _pages_atencion_servicio_atencion_servicio_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/atencion-servicio/atencion-servicio-page.component */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _pages_atencion_home_atencion_home_page_component__WEBPACK_IMPORTED_MODULE_0__.AtencionHomePageComponent
}, {
  path: 'entidades',
  component: _pages_atencion_entidad_atencion_entidad_page_component__WEBPACK_IMPORTED_MODULE_1__.AtencionEntidadPageComponent
}, {
  path: 'servicios',
  component: _pages_atencion_servicio_atencion_servicio_page_component__WEBPACK_IMPORTED_MODULE_2__.AtencionServicioPageComponent
}];
class AtencionRoutingModule {
  static {
    this.ɵfac = function AtencionRoutingModule_Factory(t) {
      return new (t || AtencionRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AtencionRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AtencionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6961:
/*!******************************************************!*\
  !*** ./src/app/features/atencion/atencion.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtencionModule: () => (/* binding */ AtencionModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _atencion_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atencion-routing.module */ 3440);
/* harmony import */ var _components_ciudadano_search_form_ciudadano_search_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ciudadano-search-form/ciudadano-search-form.component */ 8965);
/* harmony import */ var _pages_atencion_entidad_atencion_entidad_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/atencion-entidad/atencion-entidad-page.component */ 9037);
/* harmony import */ var _pages_atencion_home_atencion_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/atencion-home/atencion-home-page.component */ 6353);
/* harmony import */ var _pages_atencion_servicio_atencion_servicio_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/atencion-servicio/atencion-servicio-page.component */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);







class AtencionModule {
  static {
    this.ɵfac = function AtencionModule_Factory(t) {
      return new (t || AtencionModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AtencionModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _atencion_routing_module__WEBPACK_IMPORTED_MODULE_1__.AtencionRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AtencionModule, {
    declarations: [_pages_atencion_home_atencion_home_page_component__WEBPACK_IMPORTED_MODULE_4__.AtencionHomePageComponent, _pages_atencion_entidad_atencion_entidad_page_component__WEBPACK_IMPORTED_MODULE_3__.AtencionEntidadPageComponent, _pages_atencion_servicio_atencion_servicio_page_component__WEBPACK_IMPORTED_MODULE_5__.AtencionServicioPageComponent, _components_ciudadano_search_form_ciudadano_search_form_component__WEBPACK_IMPORTED_MODULE_2__.CiudadanoSearchFormComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _atencion_routing_module__WEBPACK_IMPORTED_MODULE_1__.AtencionRoutingModule]
  });
})();

/***/ }),

/***/ 8965:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/atencion/components/ciudadano-search-form/ciudadano-search-form.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CiudadanoSearchFormComponent: () => (/* binding */ CiudadanoSearchFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);





function CiudadanoSearchFormComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", tipo_r3.id_tipo_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tipo_r3.nombre, " ");
  }
}
function CiudadanoSearchFormComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccione un tipo de documento. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CiudadanoSearchFormComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingresa un numero valido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class CiudadanoSearchFormComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.tiposDocumento = [];
    this.status = 'idle';
    this.activeStage = null;
    this.searchSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.clearRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.searchForm = this.formBuilder.group({
      tipoDocumentoId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      numeroDocumento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(15)]]
    });
  }
  get busy() {
    return ['searching-local', 'searching-pide', 'saving-manual', 'starting-attention'].includes(this.status);
  }
  submitSearch() {
    const tipoDocumentoId = this.resolveTipoDocumentoId();
    const numeroDocumento = this.searchForm.controls.numeroDocumento.value?.trim() || '';
    if (!tipoDocumentoId) {
      this.searchForm.controls.tipoDocumentoId.setErrors({
        required: true
      });
    }
    if (this.searchForm.invalid || !tipoDocumentoId || !numeroDocumento) {
      this.searchForm.markAllAsTouched();
      return;
    }
    console.debug('[CiudadanoSearchForm] Tipo de documento seleccionado', {
      tipoDocumentoId
    });
    const payload = {
      tipoDocumentoId,
      numeroDocumento
    };
    console.debug('[CiudadanoSearchForm] Payload emitido', payload);
    this.searchSubmitted.emit(payload);
  }
  clear() {
    this.searchForm.reset({
      tipoDocumentoId: null,
      numeroDocumento: ''
    });
    this.clearRequested.emit();
  }
  resolveStatusLabel() {
    switch (this.status) {
      case 'searching-local':
        return 'Base local';
      case 'searching-pide':
        return 'PIDE';
      case 'manual':
      case 'saving-manual':
        return 'Manual';
      case 'starting-attention':
        return 'Iniciando atencion';
      default:
        return 'Listo';
    }
  }
  resolveStatusTone() {
    if (this.activeStage === 'MANUAL') {
      return 'warning';
    }
    return this.busy ? 'info' : 'default';
  }
  resolveStageTone(stage) {
    if (this.activeStage !== stage) {
      return 'default';
    }
    return stage === 'MANUAL' ? 'warning' : 'info';
  }
  shouldShowActivityLabel() {
    return this.status !== 'idle' && this.status !== 'found';
  }
  trackByTipoDocumento(index, item) {
    return item.id_tipo_documento ?? index;
  }
  resolveTipoDocumentoId() {
    const rawValue = this.searchForm.controls.tipoDocumentoId.value;
    if (rawValue === null || rawValue === undefined) {
      return null;
    }
    const parsedValue = Number(rawValue);
    return Number.isFinite(parsedValue) ? parsedValue : null;
  }
  static {
    this.ɵfac = function CiudadanoSearchFormComponent_Factory(t) {
      return new (t || CiudadanoSearchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CiudadanoSearchFormComponent,
      selectors: [["app-ciudadano-search-form"]],
      inputs: {
        tiposDocumento: "tiposDocumento",
        status: "status",
        activeStage: "activeStage"
      },
      outputs: {
        searchSubmitted: "searchSubmitted",
        clearRequested: "clearRequested"
      },
      decls: 37,
      vars: 21,
      consts: [[1, "ciudadano-search-form"], [1, "ciudadano-search-form__header"], [1, "section-title"], [1, "ciudadano-search-form__grid", 3, "formGroup", "ngSubmit"], [1, "ciudadano-search-form__field"], ["formControlName", "tipoDocumentoId", 3, "disabled"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["type", "text", "formControlName", "numeroDocumento", "placeholder", "Ingresa el numero", 3, "disabled"], [1, "ciudadano-search-form__actions"], ["type", "submit", 1, "button", 3, "disabled"], ["type", "button", 1, "button", "button--secondary", 3, "disabled", "click"], [1, "ciudadano-search-form__status-list"], [1, "ciudadano-search-form__status-item", "ciudadano-search-form__status-item--local"], [1, "ciudadano-search-form__status-item", "ciudadano-search-form__status-item--pide"], [1, "ciudadano-search-form__status-item", "ciudadano-search-form__status-item--manual"], [1, "ciudadano-search-form__status-item", "ciudadano-search-form__status-item--found"], [1, "ciudadano-search-form__status-item", "ciudadano-search-form__status-item--error"]],
      template: function CiudadanoSearchFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buscar ciudadano");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CiudadanoSearchFormComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submitSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4)(6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tipo de documento");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5)(9, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Seleccionar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CiudadanoSearchFormComponent_option_11_Template, 2, 2, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CiudadanoSearchFormComponent_small_12_Template, 2, 0, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4)(14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Numero de documento");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CiudadanoSearchFormComponent_small_17_Template, 2, 0, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CiudadanoSearchFormComponent_Template_button_click_21_listener() {
            return ctx.clear();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Limpiar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13)(24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Estados de busqueda");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul")(27, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Buscando en base local ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Consultando PIDE ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " PIDE no disponible ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Ciudadano encontrado ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " No encontrado ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.busy);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiposDocumento)("ngForTrackBy", ctx.trackByTipoDocumento);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchForm.controls.tipoDocumentoId.touched && ctx.searchForm.controls.tipoDocumentoId.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.busy);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchForm.controls.numeroDocumento.touched && ctx.searchForm.controls.numeroDocumento.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.busy);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.busy ? "Procesando..." : "Buscar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.busy);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ciudadano-search-form__status-item--active", ctx.status === "searching-local");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ciudadano-search-form__status-item--active", ctx.status === "searching-pide");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ciudadano-search-form__status-item--active", ctx.status === "manual" || ctx.status === "saving-manual");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ciudadano-search-form__status-item--active", ctx.status === "found");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ciudadano-search-form__status-item--active", ctx.status === "error");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.ciudadano-search-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n  width: 100%;\n}\n\n.ciudadano-search-form__header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.03rem;\n}\n\n.ciudadano-search-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  width: 100%;\n}\n\n.ciudadano-search-form__field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.34rem;\n}\n\n.ciudadano-search-form__field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #243f61;\n}\n\n.ciudadano-search-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ciudadano-search-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 40px;\n  padding: 0 0.78rem;\n  border: 1px solid #c5d4e4;\n  border-radius: 0.6rem;\n  background: #ffffff;\n  font-size: 0.9rem;\n}\n\n.ciudadano-search-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .ciudadano-search-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(21, 95, 159, 0.45);\n  box-shadow: 0 0 0 3px rgba(21, 95, 159, 0.1);\n}\n\n.ciudadano-search-form__field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: 0.76rem;\n}\n\n.ciudadano-search-form__actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.6rem;\n  margin-top: 0.3rem;\n}\n\n.ciudadano-search-form__actions[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 38px;\n}\n\n.ciudadano-search-form__status-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  margin-top: 0.35rem;\n}\n\n.ciudadano-search-form__status-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #243f61;\n}\n\n.ciudadano-search-form__status-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: grid;\n  gap: 0.36rem;\n}\n\n.ciudadano-search-form__status-item[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.6rem;\n  border-radius: 0.5rem;\n  border: 1px solid transparent;\n  font-size: 0.79rem;\n  color: #3b5f86;\n}\n\n.ciudadano-search-form__status-item--local[_ngcontent-%COMP%] {\n  background: #eaf3ff;\n}\n\n.ciudadano-search-form__status-item--pide[_ngcontent-%COMP%] {\n  background: #edf5ff;\n}\n\n.ciudadano-search-form__status-item--manual[_ngcontent-%COMP%] {\n  background: #fff4e5;\n}\n\n.ciudadano-search-form__status-item--found[_ngcontent-%COMP%] {\n  background: #eaf8ef;\n}\n\n.ciudadano-search-form__status-item--error[_ngcontent-%COMP%] {\n  background: #fdeced;\n}\n\n.ciudadano-search-form__status-item--active[_ngcontent-%COMP%] {\n  border-color: #9bbfe6;\n  font-weight: 700;\n}\n\n@media (max-width: 1199px) {\n  .ciudadano-search-form__actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXRlbmNpb24vY29tcG9uZW50cy9jaXVkYWRhbm8tc2VhcmNoLWZvcm0vY2l1ZGFkYW5vLXNlYXJjaC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBOztFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC45cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9faGVhZGVyIC5zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMDNyZW07XG59XG5cbi5jaXVkYWRhbm8tc2VhcmNoLWZvcm1fX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaXVkYWRhbm8tc2VhcmNoLWZvcm1fX2ZpZWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjM0cmVtO1xufVxuXG4uY2l1ZGFkYW5vLXNlYXJjaC1mb3JtX19maWVsZCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzI0M2Y2MTtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fZmllbGQgaW5wdXQsXG4uY2l1ZGFkYW5vLXNlYXJjaC1mb3JtX19maWVsZCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAwLjc4cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzVkNGU0O1xuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uY2l1ZGFkYW5vLXNlYXJjaC1mb3JtX19maWVsZCBpbnB1dDpmb2N1cyxcbi5jaXVkYWRhbm8tc2VhcmNoLWZvcm1fX2ZpZWxkIHNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMSwgOTUsIDE1OSwgMC40NSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIxLCA5NSwgMTU5LCAwLjEpO1xufVxuXG4uY2l1ZGFkYW5vLXNlYXJjaC1mb3JtX19maWVsZCBzbWFsbCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDAuNzZyZW07XG59XG5cbi5jaXVkYWRhbm8tc2VhcmNoLWZvcm1fX2FjdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMC42cmVtO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG59XG5cbi5jaXVkYWRhbm8tc2VhcmNoLWZvcm1fX2FjdGlvbnMgLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xufVxuXG4uY2l1ZGFkYW5vLXNlYXJjaC1mb3JtX19zdGF0dXMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC41NXJlbTtcbiAgbWFyZ2luLXRvcDogMC4zNXJlbTtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWxpc3Qgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogIzI0M2Y2MTtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWxpc3QgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4zNnJlbTtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWl0ZW0ge1xuICBwYWRkaW5nOiAwLjM4cmVtIDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAwLjc5cmVtO1xuICBjb2xvcjogIzNiNWY4Njtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWl0ZW0tLWxvY2FsIHtcbiAgYmFja2dyb3VuZDogI2VhZjNmZjtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWl0ZW0tLXBpZGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmNWZmO1xufVxuXG4uY2l1ZGFkYW5vLXNlYXJjaC1mb3JtX19zdGF0dXMtaXRlbS0tbWFudWFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjRlNTtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWl0ZW0tLWZvdW5kIHtcbiAgYmFja2dyb3VuZDogI2VhZjhlZjtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWl0ZW0tLWVycm9yIHtcbiAgYmFja2dyb3VuZDogI2ZkZWNlZDtcbn1cblxuLmNpdWRhZGFuby1zZWFyY2gtZm9ybV9fc3RhdHVzLWl0ZW0tLWFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzliYmZlNjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuY2l1ZGFkYW5vLXNlYXJjaC1mb3JtX19hY3Rpb25zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9037:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/atencion/pages/atencion-entidad/atencion-entidad-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtencionEntidadPageComponent: () => (/* binding */ AtencionEntidadPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_atencion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/atencion.service */ 4598);
/* harmony import */ var _services_atencion_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/atencion-state.service */ 8145);
/* harmony import */ var _catalogos_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../catalogos/services/catalogos.service */ 9491);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/stepper-atencion/stepper-atencion.component */ 2789);
/* harmony import */ var _shared_components_entidad_card_entidad_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/entidad-card/entidad-card.component */ 927);
/* harmony import */ var _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/ui/loading-skeleton/loading-skeleton.component */ 2121);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/ui/empty-state/empty-state.component */ 6619);














function AtencionEntidadPageComponent_div_0_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 22)(1, "div", 23)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Ciudadano");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 24)(9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Atencion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", state_r1.ciudadano.nombres, " ", state_r1.ciudadano.apellidoPaterno || state_r1.ciudadano.apellidos || "", " ", state_r1.ciudadano.apellidoMaterno || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", state_r1.ciudadano.numeroDocumento || "Sin documento", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("#", state_r1.atencion.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](state_r1.atencion.estado || "Iniciada");
  }
}
function AtencionEntidadPageComponent_div_0_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const size_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", size_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", size_r10, " entidades ");
  }
}
function AtencionEntidadPageComponent_div_0_app_loading_skeleton_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loading-skeleton", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("lines", 5);
  }
}
function AtencionEntidadPageComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No se pudieron cargar las entidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AtencionEntidadPageComponent_div_0_div_26_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.retryEntidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Reintentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.entidadesError);
  }
}
function AtencionEntidadPageComponent_div_0_div_27_app_entidad_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-entidad-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function AtencionEntidadPageComponent_div_0_div_27_app_entidad_card_1_Template_app_entidad_card_selected_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const entidad_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.onSelectEntidad(entidad_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entidad_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("entidad", ctx_r13.mapEntidadCard(entidad_r14))("actionLabel", ctx_r13.selectingEntidadId === entidad_r14.id ? "Seleccionando..." : "Seleccionar entidad");
  }
}
function AtencionEntidadPageComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AtencionEntidadPageComponent_div_0_div_27_app_entidad_card_1_Template, 1, 2, "app-entidad-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.pagedEntidades)("ngForTrackBy", ctx_r6.trackByEntidadId);
  }
}
function AtencionEntidadPageComponent_div_0_div_28_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AtencionEntidadPageComponent_div_0_div_28_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const page_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.goToPage(page_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("atencion-entidad__page-button--active", page_r18 === ctx_r17.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", page_r18, " ");
  }
}
function AtencionEntidadPageComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AtencionEntidadPageComponent_div_0_div_28_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AtencionEntidadPageComponent_div_0_div_28_button_4_Template, 2, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AtencionEntidadPageComponent_div_0_div_28_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Siguiente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r7.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.pageNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r7.currentPage === ctx_r7.totalPages);
  }
}
function AtencionEntidadPageComponent_div_0_app_empty_state_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-empty-state", 37);
  }
}
function AtencionEntidadPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "div")(3, "div", 3)(4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Pantalla 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Seleccion de entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Selecciona una entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Elige la entidad visible para continuar con la atencion del ciudadano. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-stepper-atencion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, AtencionEntidadPageComponent_div_0_section_13_Template, 15, 6, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "section", 10)(15, "label", 11)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Buscar entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AtencionEntidadPageComponent_div_0_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.searchTerm = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "label", 13)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Por pagina");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AtencionEntidadPageComponent_div_0_Template_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.onPageSizeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, AtencionEntidadPageComponent_div_0_option_23_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, AtencionEntidadPageComponent_div_0_app_loading_skeleton_25_Template, 1, 1, "app-loading-skeleton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, AtencionEntidadPageComponent_div_0_div_26_Template, 7, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, AtencionEntidadPageComponent_div_0_div_27_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, AtencionEntidadPageComponent_div_0_div_28_Template, 7, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, AtencionEntidadPageComponent_div_0_app_empty_state_29_Template, 1, 0, "app-empty-state", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("steps", ctx_r0.steps)("currentIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", state_r1.ciudadano && state_r1.atencion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.pageSizeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.entidadesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.entidadesLoading && ctx_r0.entidadesError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.entidadesLoading && !ctx_r0.entidadesError && ctx_r0.filteredEntidades.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.entidadesLoading && !ctx_r0.entidadesError && ctx_r0.filteredEntidades.length > ctx_r0.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.entidadesLoading && !ctx_r0.entidadesError && ctx_r0.filteredEntidades.length === 0);
  }
}
class AtencionEntidadPageComponent {
  constructor(atencionService, atencionStateService, catalogosService, changeDetectorRef, notificationService, router) {
    this.atencionService = atencionService;
    this.atencionStateService = atencionStateService;
    this.catalogosService = catalogosService;
    this.changeDetectorRef = changeDetectorRef;
    this.notificationService = notificationService;
    this.router = router;
    this.state$ = this.atencionStateService.state$;
    this.steps = [{
      label: 'Identificacion',
      hint: 'Busqueda del ciudadano'
    }, {
      label: 'Datos del ciudadano',
      hint: 'Validacion de datos'
    }, {
      label: 'Entidad',
      hint: 'Seleccion institucional'
    }, {
      label: 'Servicio',
      hint: 'Tramite operativo'
    }, {
      label: 'Finalizacion',
      hint: 'Cierre de atencion'
    }];
    this.entidades = [];
    this.entidadesLoading = true;
    this.entidadesError = null;
    this.pageSizeOptions = [6, 9];
    this.pageSize = 9;
    this.currentPage = 1;
    this.selectingEntidadId = null;
    this.searchTermValue = '';
  }
  ngOnInit() {
    const state = this.atencionStateService.snapshot;
    if (!state.ciudadano || !state.atencion) {
      this.notificationService.warning('Atencion no disponible', 'Primero identifica al ciudadano e inicia la atencion.');
      void this.router.navigate(['/atencion']);
      return;
    }
    this.atencionStateService.setCurrentRoute('/atencion/entidades');
    this.loadEntidades();
  }
  get searchTerm() {
    return this.searchTermValue;
  }
  set searchTerm(value) {
    this.searchTermValue = value ?? '';
    this.currentPage = 1;
  }
  get filteredEntidades() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.entidades;
    }
    return this.entidades.filter(entidad => [entidad.codigo, entidad.nombre, entidad.alcance, entidad.region, entidad.descripcion].filter(Boolean).some(value => value.toLowerCase().includes(term)));
  }
  get pagedEntidades() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredEntidades.slice(start, end);
  }
  get totalPages() {
    const pages = Math.ceil(this.filteredEntidades.length / this.pageSize);
    return Math.max(1, pages);
  }
  get pageNumbers() {
    return Array.from({
      length: this.totalPages
    }, (_, index) => index + 1);
  }
  retryEntidades() {
    this.loadEntidades(true);
  }
  onPageSizeChange(value) {
    const parsedSize = Number(value);
    if (!this.pageSizeOptions.includes(parsedSize)) {
      return;
    }
    this.pageSize = parsedSize;
    this.currentPage = 1;
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }
  nextPage() {
    this.goToPage(this.currentPage + 1);
  }
  previousPage() {
    this.goToPage(this.currentPage - 1);
  }
  onSelectEntidad(entidad) {
    const state = this.atencionStateService.snapshot;
    if (!state.atencion) {
      return;
    }
    this.selectingEntidadId = entidad.id;
    this.changeDetectorRef.markForCheck();
    this.atencionService.seleccionarEntidad(state.atencion.id, {
      entidadId: entidad.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe({
      next: atencion => {
        this.atencionStateService.setEntidadSelected(entidad, atencion, 'Entidad seleccionada. Continua con la eleccion del servicio.');
        this.atencionStateService.setCurrentRoute('/atencion/servicios');
        this.notificationService.success('Entidad seleccionada', `${entidad.nombre} quedo lista para el siguiente paso.`);
        void this.router.navigate(['/atencion/servicios']);
      },
      error: () => {
        this.notificationService.error('No se pudo seleccionar la entidad', 'Reintenta la operacion para continuar.');
      }
    }).add(() => {
      this.selectingEntidadId = null;
      this.changeDetectorRef.markForCheck();
    });
  }
  mapEntidadCard(entidad) {
    return {
      codigo: entidad.codigo,
      nombre: entidad.nombre,
      alcance: entidad.alcance,
      region: entidad.region,
      descripcion: entidad.descripcion,
      logoUrl: entidad.logoUrl
    };
  }
  trackByEntidadId(index, entidad) {
    return entidad.id ?? index;
  }
  loadEntidades(force = false) {
    this.entidadesLoading = true;
    this.entidadesError = null;
    this.changeDetectorRef.markForCheck();
    this.catalogosService.getEntidadesVisibles(force).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      console.error('[AtencionEntidadPage] Error cargando entidades', error);
      this.entidadesLoading = false;
      this.entidadesError = 'No se pudieron cargar las entidades visibles para esta atencion.';
      this.changeDetectorRef.markForCheck();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
    })).subscribe(entidades => {
      this.entidades = entidades;
      this.currentPage = 1;
      this.entidadesLoading = false;
      this.changeDetectorRef.markForCheck();
    });
  }
  static {
    this.ɵfac = function AtencionEntidadPageComponent_Factory(t) {
      return new (t || AtencionEntidadPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_atencion_service__WEBPACK_IMPORTED_MODULE_0__.AtencionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_atencion_state_service__WEBPACK_IMPORTED_MODULE_1__.AtencionStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_catalogos_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__.CatalogosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AtencionEntidadPageComponent,
      selectors: [["app-atencion-entidad-page"]],
      decls: 2,
      vars: 3,
      consts: [["class", "page atencion-entidad", 4, "ngIf"], [1, "page", "atencion-entidad"], [1, "page__header"], [1, "atencion-entidad__heading-line"], [1, "eyebrow"], [1, "atencion-entidad__heading-title"], [1, "page__title"], [1, "page__subtitle"], [3, "steps", "currentIndex"], ["class", "surface-card atencion-entidad__summary", 4, "ngIf"], [1, "surface-card", "atencion-entidad__filters"], [1, "atencion-entidad__search"], ["type", "text", "placeholder", "Buscar por codigo, nombre o region", 3, "ngModel", "ngModelChange"], [1, "atencion-entidad__scope"], [3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "surface-card"], [3, "lines", 4, "ngIf"], ["class", "atencion-entidad__notice atencion-entidad__notice--warning", 4, "ngIf"], ["class", "atencion-entidad__grid", 4, "ngIf"], ["class", "atencion-entidad__pagination", 4, "ngIf"], ["title", "Sin entidades visibles", "description", "No hay entidades disponibles con el filtro actual.", 4, "ngIf"], [1, "surface-card", "atencion-entidad__summary"], [1, "atencion-entidad__citizen"], [1, "atencion-entidad__attention"], [3, "ngValue"], [3, "lines"], [1, "atencion-entidad__notice", "atencion-entidad__notice--warning"], ["type", "button", 1, "button", "button--secondary", 3, "click"], [1, "atencion-entidad__grid"], [3, "entidad", "actionLabel", "selected", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "entidad", "actionLabel", "selected"], [1, "atencion-entidad__pagination"], ["type", "button", 1, "button", "button--secondary", 3, "disabled", "click"], [1, "atencion-entidad__page-list"], ["type", "button", "class", "atencion-entidad__page-button", 3, "atencion-entidad__page-button--active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "atencion-entidad__page-button", 3, "click"], ["title", "Sin entidades visibles", "description", "No hay entidades disponibles con el filtro actual."]],
      template: function AtencionEntidadPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AtencionEntidadPageComponent_div_0_Template, 30, 11, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.state$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _shared_components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_4__.StepperAtencionComponent, _shared_components_entidad_card_entidad_card_component__WEBPACK_IMPORTED_MODULE_5__.EntidadCardComponent, _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSkeletonComponent, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_7__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
      styles: [".atencion-entidad[_ngcontent-%COMP%] {\n  gap: 1.4rem;\n}\n\n.atencion-entidad__heading-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n\n.atencion-entidad__heading-title[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  letter-spacing: 0.02em;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: var(--color-text-900);\n}\n\n.atencion-entidad__summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.atencion-entidad__citizen[_ngcontent-%COMP%], .atencion-entidad__attention[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n}\n\n.atencion-entidad__citizen[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .atencion-entidad__attention[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.atencion-entidad__citizen[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, .atencion-entidad__attention[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--color-text-700);\n}\n\n.atencion-entidad__filters[_ngcontent-%COMP%] {\n  padding: 1rem 1.2rem;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 230px;\n  gap: 1rem;\n  align-items: end;\n}\n\n.atencion-entidad__search[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.atencion-entidad__search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.atencion-entidad__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  padding: 0 0.9rem;\n  border: 1px solid var(--color-border-strong);\n  border-radius: 0.9rem;\n}\n\n.atencion-entidad__scope[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.atencion-entidad__scope[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.atencion-entidad__scope[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  padding: 0 0.9rem;\n  border: 1px solid var(--color-border-strong);\n  border-radius: 0.9rem;\n  background: #ffffff;\n}\n\n.atencion-entidad__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.atencion-entidad__pagination[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 0.8rem;\n  align-items: center;\n}\n\n.atencion-entidad__page-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n}\n\n.atencion-entidad__page-button[_ngcontent-%COMP%] {\n  min-width: 2rem;\n  height: 2rem;\n  padding: 0 0.45rem;\n  border: 1px solid var(--color-border-strong);\n  border-radius: 0.6rem;\n  background: #ffffff;\n  color: var(--color-brand-800);\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.atencion-entidad__page-button--active[_ngcontent-%COMP%] {\n  border-color: #1c64b3;\n  background: #1c64b3;\n  color: #ffffff;\n}\n\n.atencion-entidad__notice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n  padding: 1rem;\n  border-radius: var(--radius-md);\n}\n\n.atencion-entidad__notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .atencion-entidad__notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.atencion-entidad__notice--warning[_ngcontent-%COMP%] {\n  background: #fff7ea;\n  border: 1px solid rgba(204, 138, 11, 0.2);\n}\n\n@media (max-width: 1199px) {\n  .atencion-entidad__summary[_ngcontent-%COMP%], .atencion-entidad__filters[_ngcontent-%COMP%], .atencion-entidad__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .atencion-entidad__pagination[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXRlbmNpb24vcGFnZXMvYXRlbmNpb24tZW50aWRhZC9hdGVuY2lvbi1lbnRpZGFkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZUFBQTtBQUNGOztBQUVBOztFQUVFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBOztFQUVFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFOzs7SUFHRSwwQkFBQTtFQUNGO0VBRUE7SUFDRSwwQkFBQTtFQUFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXRlbmNpb24tZW50aWRhZCB7XG4gIGdhcDogMS40cmVtO1xufVxuXG4uYXRlbmNpb24tZW50aWRhZF9faGVhZGluZy1saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43cmVtO1xufVxuXG4uYXRlbmNpb24tZW50aWRhZF9faGVhZGluZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtOTAwKTtcbn1cblxuLmF0ZW5jaW9uLWVudGlkYWRfX3N1bW1hcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbn1cblxuLmF0ZW5jaW9uLWVudGlkYWRfX2NpdGl6ZW4sXG4uYXRlbmNpb24tZW50aWRhZF9fYXR0ZW50aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjNyZW07XG59XG5cbi5hdGVuY2lvbi1lbnRpZGFkX19jaXRpemVuIHN0cm9uZyxcbi5hdGVuY2lvbi1lbnRpZGFkX19hdHRlbnRpb24gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYXRlbmNpb24tZW50aWRhZF9fY2l0aXplbiBzcGFuOmxhc3QtY2hpbGQsXG4uYXRlbmNpb24tZW50aWRhZF9fYXR0ZW50aW9uIHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG59XG5cbi5hdGVuY2lvbi1lbnRpZGFkX19maWx0ZXJzIHtcbiAgcGFkZGluZzogMXJlbSAxLjJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMjMwcHg7XG4gIGdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLmF0ZW5jaW9uLWVudGlkYWRfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC40NXJlbTtcbn1cblxuLmF0ZW5jaW9uLWVudGlkYWRfX3NlYXJjaCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmF0ZW5jaW9uLWVudGlkYWRfX3NlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiAwIDAuOXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcbn1cblxuLmF0ZW5jaW9uLWVudGlkYWRfX3Njb3BlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjQ1cmVtO1xufVxuXG4uYXRlbmNpb24tZW50aWRhZF9fc2NvcGUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hdGVuY2lvbi1lbnRpZGFkX19zY29wZSBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMCAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiAwLjlyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5hdGVuY2lvbi1lbnRpZGFkX19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5cbi5hdGVuY2lvbi1lbnRpZGFkX19wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbm1heCgwLCAxZnIpIGF1dG87XG4gIGdhcDogMC44cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXRlbmNpb24tZW50aWRhZF9fcGFnZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC40NXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYXRlbmNpb24tZW50aWRhZF9fcGFnZS1idXR0b24ge1xuICBtaW4td2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMCAwLjQ1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtODAwKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXRlbmNpb24tZW50aWRhZF9fcGFnZS1idXR0b24tLWFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzFjNjRiMztcbiAgYmFja2dyb3VuZDogIzFjNjRiMztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hdGVuY2lvbi1lbnRpZGFkX19ub3RpY2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuN3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbn1cblxuLmF0ZW5jaW9uLWVudGlkYWRfX25vdGljZSBwLFxuLmF0ZW5jaW9uLWVudGlkYWRfX25vdGljZSBzdHJvbmcge1xuICBtYXJnaW46IDA7XG59XG5cbi5hdGVuY2lvbi1lbnRpZGFkX19ub3RpY2UtLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjZmZmN2VhO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNCwgMTM4LCAxMSwgMC4yKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuYXRlbmNpb24tZW50aWRhZF9fc3VtbWFyeSxcbiAgLmF0ZW5jaW9uLWVudGlkYWRfX2ZpbHRlcnMsXG4gIC5hdGVuY2lvbi1lbnRpZGFkX19ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5hdGVuY2lvbi1lbnRpZGFkX19wYWdpbmF0aW9uIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6353:
/*!***************************************************************************************!*\
  !*** ./src/app/features/atencion/pages/atencion-home/atencion-home-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtencionHomePageComponent: () => (/* binding */ AtencionHomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_atencion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/atencion.service */ 4598);
/* harmony import */ var _services_atencion_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/atencion-state.service */ 8145);
/* harmony import */ var _avisos_operativos_services_avisos_operativos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../avisos-operativos/services/avisos-operativos.service */ 1193);
/* harmony import */ var _catalogos_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../catalogos/services/catalogos.service */ 9491);
/* harmony import */ var _services_ciudadanos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ciudadanos.service */ 9819);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/stepper-atencion/stepper-atencion.component */ 2789);
/* harmony import */ var _shared_components_ciudadano_card_ciudadano_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/ciudadano-card/ciudadano-card.component */ 4509);
/* harmony import */ var _shared_components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/aviso-operativo-list/aviso-operativo-list.component */ 2217);
/* harmony import */ var _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/ui/loading-skeleton/loading-skeleton.component */ 2121);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/ui/empty-state/empty-state.component */ 6619);
/* harmony import */ var _components_ciudadano_search_form_ciudadano_search_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ciudadano-search-form/ciudadano-search-form.component */ 8965);



















function AtencionHomePageComponent_ng_container_7_app_loading_skeleton_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-loading-skeleton", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("lines", 5);
  }
}
function AtencionHomePageComponent_ng_container_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "No se pudo cargar el catalogo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AtencionHomePageComponent_ng_container_7_div_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.retryTiposDocumento());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Reintentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.tiposDocumentoError);
  }
}
function AtencionHomePageComponent_ng_container_7_app_ciudadano_search_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-ciudadano-search-form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("searchSubmitted", function AtencionHomePageComponent_ng_container_7_app_ciudadano_search_form_6_Template_app_ciudadano_search_form_searchSubmitted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.onSearchSubmitted($event));
    })("clearRequested", function AtencionHomePageComponent_ng_container_7_app_ciudadano_search_form_6_Template_app_ciudadano_search_form_clearRequested_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.onClearRequested());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tiposDocumento", ctx_r4.tiposDocumento)("status", state_r1.status)("activeStage", ctx_r4.resolveActiveStage(state_r1));
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 20)(2, "div", 17)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "app-loading-skeleton", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r5.resolveNoticeTitle(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](state_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("lines", 2);
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 21)(2, "div", 17)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AtencionHomePageComponent_ng_container_7_ng_container_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r18.onClearRequested());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Limpiar busqueda ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r6.resolveNoticeTitle(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](state_r1.message);
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_10_small_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingresa los nombres del ciudadano. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_10_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingresa el apellido paterno. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_10_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingresa el apellido materno. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_10_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sexo_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", sexo_r26.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", sexo_r26.label, " ");
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_10_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Selecciona el sexo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 16)(2, "div", 17)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Registro manual habilitado");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function AtencionHomePageComponent_ng_container_7_ng_container_10_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.onSaveManual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 23)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Registro manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Completa los datos minimos para continuar con la atencion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 24)(14, "label", 25)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AtencionHomePageComponent_ng_container_7_ng_container_10_small_18_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "label", 27)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Apellido paterno");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, AtencionHomePageComponent_ng_container_7_ng_container_10_small_23_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "label", 27)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Apellido materno");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, AtencionHomePageComponent_ng_container_7_ng_container_10_small_28_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "label", 27)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Sexo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "select", 30)(33, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, AtencionHomePageComponent_ng_container_7_ng_container_10_option_35_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, AtencionHomePageComponent_ng_container_7_ng_container_10_small_36_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 33)(38, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", state_r1.message || "Complete el registro manual para continuar con la atencion.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r7.manualForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.manualForm.controls.nombres.touched && ctx_r7.manualForm.controls.nombres.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.manualForm.controls.apellidoPaterno.touched && ctx_r7.manualForm.controls.apellidoPaterno.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.manualForm.controls.apellidoMaterno.touched && ctx_r7.manualForm.controls.apellidoMaterno.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r7.sexoOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.manualForm.controls.sexo.touched && ctx_r7.manualForm.controls.sexo.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", state_r1.status === "saving-manual" ? "Guardando..." : "Guardar ciudadano", " ");
  }
}
function AtencionHomePageComponent_ng_container_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-ciudadano-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("secondaryAction", function AtencionHomePageComponent_ng_container_7_ng_container_11_Template_app_ciudadano_card_secondaryAction_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r30.onEditCitizen());
    })("primaryAction", function AtencionHomePageComponent_ng_container_7_ng_container_11_Template_app_ciudadano_card_primaryAction_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r32.onStartAttention());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ciudadano", ctx_r8.mapCiudadanoCard(state_r1.ciudadano))("showActions", true)("secondaryLabel", "Editar datos")("primaryLabel", state_r1.status === "starting-attention" ? "Iniciando..." : state_r1.status === "attention-started" ? "Atencion iniciada" : "Iniciar atencion")("primaryDisabled", !ctx_r8.canStartAttention(state_r1))("originLabel", ctx_r8.resolveOriginLabel(state_r1))("originDetail", ctx_r8.resolveOriginDetail(state_r1));
  }
}
function AtencionHomePageComponent_ng_container_7_app_empty_state_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-empty-state", 37);
  }
}
function AtencionHomePageComponent_ng_container_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "No se pudieron cargar los avisos");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r10.avisosError);
  }
}
function AtencionHomePageComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-stepper-atencion", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 6)(3, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AtencionHomePageComponent_ng_container_7_app_loading_skeleton_4_Template, 1, 1, "app-loading-skeleton", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AtencionHomePageComponent_ng_container_7_div_5_Template, 8, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AtencionHomePageComponent_ng_container_7_app_ciudadano_search_form_6_Template, 1, 3, "app-ciudadano-search-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AtencionHomePageComponent_ng_container_7_ng_container_8_Template, 8, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AtencionHomePageComponent_ng_container_7_ng_container_9_Template, 9, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AtencionHomePageComponent_ng_container_7_ng_container_10_Template, 40, 9, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AtencionHomePageComponent_ng_container_7_ng_container_11_Template, 2, 7, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AtencionHomePageComponent_ng_container_7_app_empty_state_12_Template, 1, 0, "app-empty-state", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AtencionHomePageComponent_ng_container_7_div_14_Template, 6, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-aviso-operativo-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("steps", ctx_r0.steps)("currentIndex", ctx_r0.resolveCurrentStep(state_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.tiposDocumentoLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.tiposDocumentoLoading && ctx_r0.tiposDocumentoError);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.tiposDocumentoLoading && !ctx_r0.tiposDocumentoError);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.shouldShowLookupProgress(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.shouldShowError(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.shouldShowManualForm(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.shouldShowCitizenCard(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.shouldShowLookupProgress(state_r1) && !ctx_r0.shouldShowManualForm(state_r1) && !ctx_r0.shouldShowCitizenCard(state_r1) && !ctx_r0.shouldShowError(state_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.avisosLoading && ctx_r0.avisosError);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("avisos", ctx_r0.avisos)("loading", ctx_r0.avisosLoading);
  }
}
class AtencionHomePageComponent {
  constructor(atencionService, atencionStateService, avisosOperativosService, catalogosService, ciudadanosService, formBuilder, notificationService, changeDetectorRef, router) {
    this.atencionService = atencionService;
    this.atencionStateService = atencionStateService;
    this.avisosOperativosService = avisosOperativosService;
    this.catalogosService = catalogosService;
    this.ciudadanosService = ciudadanosService;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.changeDetectorRef = changeDetectorRef;
    this.router = router;
    this.state$ = this.atencionStateService.state$;
    this.steps = [{
      label: 'Identificacion',
      hint: 'Busqueda del ciudadano'
    }, {
      label: 'Datos del ciudadano',
      hint: 'Validacion de datos'
    }, {
      label: 'Entidad',
      hint: 'Seleccion institucional'
    }, {
      label: 'Servicio',
      hint: 'Tramite operativo'
    }, {
      label: 'Finalizacion',
      hint: 'Cierre de atencion'
    }];
    this.sexoOptions = [{
      value: 'M',
      label: 'Masculino'
    }, {
      value: 'F',
      label: 'Femenino'
    }];
    this.manualForm = this.formBuilder.group({
      nombres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      apellidoPaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      apellidoMaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      sexo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
    this.avisos = [];
    this.tiposDocumento = [];
    this.tiposDocumentoLoading = true;
    this.tiposDocumentoError = null;
    this.avisosLoading = true;
    this.avisosError = null;
    this.searchPayload = null;
  }
  ngOnInit() {
    this.atencionStateService.setCurrentRoute('/atencion');
    this.loadTiposDocumento();
    this.loadAvisosRecientes();
  }
  retryTiposDocumento() {
    this.loadTiposDocumento(true);
  }
  onSearchSubmitted(payload) {
    this.searchPayload = payload;
    this.manualForm.reset({
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      sexo: null
    });
    this.atencionStateService.startLookup('searching-local', 'Buscando al ciudadano en la base local...');
    this.ciudadanosService.buscar(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe({
      next: result => {
        if (result.ciudadano) {
          const localCiudadano = this.enrichCiudadano(result.ciudadano, 'LOCAL');
          const shouldRefreshFromPide = result.nextAction === 'CONSULT_PIDE_REFRESH_PHOTO' || result.canRefreshFromPide;
          if (shouldRefreshFromPide) {
            const pideValidation = this.validatePideEligibility(payload);
            if (!pideValidation.allowed) {
              this.atencionStateService.setFound(localCiudadano, `${result.message || 'Ciudadano encontrado en la base local.'} ${pideValidation.reason}`);
              return;
            }
            this.consultarPide(payload, {
              initialMessage: result.message || 'Ciudadano encontrado en base local. Actualizando datos/foto desde PIDE...',
              fallbackCiudadano: localCiudadano
            });
            return;
          }
          this.atencionStateService.setFound(localCiudadano, result.message || 'Ciudadano encontrado en la base local.');
          return;
        }
        if (result.nextAction === 'ENABLE_MANUAL') {
          this.atencionStateService.enableManual(result.message || 'No se pudo obtener la informacion desde PIDE. Complete el registro manual.');
          return;
        }
        const pideValidation = this.validatePideEligibility(payload);
        if (!pideValidation.allowed) {
          this.atencionStateService.enableManual(`${result.message || 'No se encontro localmente.'} ${pideValidation.reason}`);
          return;
        }
        this.consultarPide(payload, {
          initialMessage: result.message
        });
      },
      error: () => {
        this.atencionStateService.setError('No fue posible consultar la base local. Verifica la conectividad e intenta nuevamente.');
      }
    });
  }
  onSaveManual() {
    if (!this.searchPayload) {
      this.notificationService.warning('Busqueda requerida', 'Primero realiza la busqueda del ciudadano para completar el registro manual.');
      return;
    }
    if (this.manualForm.invalid) {
      this.manualForm.markAllAsTouched();
      return;
    }
    const payload = {
      ...this.searchPayload,
      nombres: this.manualForm.controls.nombres.value?.trim() || '',
      apellidoPaterno: this.manualForm.controls.apellidoPaterno.value?.trim() || '',
      apellidoMaterno: this.manualForm.controls.apellidoMaterno.value?.trim() || '',
      sexo: this.manualForm.controls.sexo.value || ''
    };
    this.atencionStateService.setStatus('saving-manual', 'Guardando el registro manual del ciudadano...');
    this.ciudadanosService.registrarManual(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe({
      next: ciudadano => {
        this.atencionStateService.setFound(this.enrichCiudadano(ciudadano, 'MANUAL'), 'Ciudadano registrado manualmente.');
        this.notificationService.success('Registro manual completado', 'El ciudadano ya puede iniciar su atencion.');
      },
      error: () => {
        this.atencionStateService.enableManual('No fue posible guardar el registro manual. Revisa los datos e intenta nuevamente.');
      }
    });
  }
  onStartAttention() {
    const ciudadano = this.atencionStateService.snapshot.ciudadano;
    if (!ciudadano) {
      return;
    }
    this.atencionStateService.setStatus('starting-attention', 'Registrando la atencion para continuar con la seleccion de entidad.');
    this.atencionService.crear({
      ciudadanoId: ciudadano.id ?? null
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(atencion => this.atencionService.iniciar(atencion.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe({
      next: atencion => {
        this.atencionStateService.setAttentionStarted(atencion, 'Atencion iniciada. La siguiente fase continuara con la seleccion de entidad.');
        this.atencionStateService.setCurrentRoute('/atencion/entidades');
        this.notificationService.success('Atencion iniciada', `Atencion #${atencion.id} lista para continuar.`);
        void this.router.navigate(['/atencion/entidades']);
      },
      error: () => {
        this.atencionStateService.setError('No fue posible iniciar la atencion. Puedes intentarlo nuevamente.');
      }
    });
  }
  onClearRequested() {
    this.searchPayload = null;
    this.manualForm.reset({
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      sexo: null
    });
    this.atencionStateService.reset();
  }
  onEditCitizen() {
    this.notificationService.info('Edicion en siguiente fase', 'La edicion de datos del ciudadano se habilitara en el siguiente paso del flujo.');
  }
  resolveCurrentStep(status) {
    return status === 'attention-started' ? 1 : 0;
  }
  resolveActiveStage(state) {
    if (state.status === 'searching-local') {
      return 'LOCAL';
    }
    if (state.status === 'searching-pide') {
      return 'PIDE';
    }
    if (state.status === 'manual' || state.status === 'saving-manual') {
      return 'MANUAL';
    }
    switch (state.ciudadano?.fuente) {
      case 'LOCAL':
        return 'LOCAL';
      case 'PIDE':
        return 'PIDE';
      case 'MANUAL':
        return 'MANUAL';
      default:
        return null;
    }
  }
  shouldShowManualForm(state) {
    return state.status === 'manual' || state.status === 'saving-manual';
  }
  shouldShowCitizenCard(state) {
    return !!state.ciudadano;
  }
  shouldShowLookupProgress(state) {
    return state.status === 'searching-local' || state.status === 'searching-pide';
  }
  shouldShowError(state) {
    return state.status === 'error';
  }
  canStartAttention(state) {
    return !!state.ciudadano && state.status !== 'starting-attention';
  }
  mapCiudadanoCard(ciudadano) {
    if (!ciudadano) {
      return null;
    }
    return {
      nombres: ciudadano.nombres,
      apellidoPaterno: ciudadano.apellidoPaterno,
      apellidoMaterno: ciudadano.apellidoMaterno,
      apellidos: ciudadano.apellidos,
      documento: ciudadano.numeroDocumento,
      tipoDocumento: this.resolveTipoDocumentoLabel(ciudadano),
      sexo: this.resolveSexoLabel(ciudadano.sexo),
      direccion: ciudadano.direccion,
      fotoUrl: ciudadano.fotoUrl,
      fuente: this.resolveFuenteLabel(this.resolveDisplayFuente(ciudadano))
    };
  }
  resolveResultTone(state) {
    if (state.status === 'manual' || state.status === 'saving-manual') {
      return 'warning';
    }
    if (state.status === 'error') {
      return 'danger';
    }
    if (state.status === 'searching-local' || state.status === 'searching-pide') {
      return 'info';
    }
    if (state.ciudadano) {
      return 'success';
    }
    return 'default';
  }
  resolveResultBadgeLabel(state) {
    if (state.status === 'searching-local') {
      return 'Base local';
    }
    if (state.status === 'searching-pide') {
      return 'PIDE';
    }
    if (state.status === 'manual' || state.status === 'saving-manual') {
      return 'Manual';
    }
    return this.resolveFuenteLabel(this.resolveDisplayFuente(state.ciudadano)) || 'Pendiente';
  }
  resolveNoticeTitle(state) {
    switch (state.status) {
      case 'searching-local':
        return 'Buscando en base local';
      case 'searching-pide':
        return 'Consultando PIDE...';
      case 'manual':
      case 'saving-manual':
        return 'Registro manual habilitado';
      case 'error':
        return 'No fue posible completar la busqueda';
      default:
        return 'Listo para identificar al ciudadano';
    }
  }
  resolveOriginLabel(state) {
    if (!state.ciudadano) {
      return null;
    }
    const fuenteInicial = this.resolveAuditSourceLabel(state.ciudadano.fuenteOrigenInicial);
    const fuenteActual = this.resolveAuditSourceLabel(state.ciudadano.fuenteUltimaActualizacion);
    if (fuenteInicial && fuenteActual && fuenteInicial !== fuenteActual) {
      return `Origen auditado: ${fuenteInicial} -> ${fuenteActual}`;
    }
    if (fuenteActual) {
      return `Origen actual: ${fuenteActual}`;
    }
    if (fuenteInicial) {
      return `Origen inicial: ${fuenteInicial}`;
    }
    const fuente = this.resolveDisplayFuente(state.ciudadano);
    if (fuente === 'LOCAL') {
      return 'Origen: Base de datos local';
    }
    if (fuente === 'PIDE') {
      return 'Origen: Consulta PIDE';
    }
    if (fuente === 'MANUAL') {
      return 'Origen: Registro manual';
    }
    return 'Origen: Datos de ciudadano';
  }
  resolveOriginDetail(state) {
    if (!state.ciudadano) {
      return null;
    }
    const sourceAuditParts = this.resolveSourceAuditParts(state.ciudadano);
    if (state.status === 'attention-started' && state.atencion) {
      const attentionMessage = `Atencion #${state.atencion.id} lista para continuar con entidad y servicio.`;
      return sourceAuditParts ? `${sourceAuditParts}. ${attentionMessage}` : attentionMessage;
    }
    if (sourceAuditParts) {
      return `${sourceAuditParts}.`;
    }
    return 'Registro disponible para iniciar la atencion.';
  }
  consultarPide(payload, options) {
    const initialMessage = options?.initialMessage;
    const fallbackCiudadano = options?.fallbackCiudadano || null;
    if (fallbackCiudadano) {
      this.atencionStateService.setStatus('searching-pide', initialMessage || 'Ciudadano local encontrado. Consultando PIDE para actualizar datos y foto...');
    } else {
      this.atencionStateService.startLookup('searching-pide', initialMessage || 'No se encontro localmente. Consultando PIDE...');
    }
    this.ciudadanosService.consultarPide(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe({
      next: result => {
        if (result.ciudadano) {
          this.atencionStateService.setFound(this.enrichCiudadano(result.ciudadano, 'PIDE'), result.message || 'Ciudadano encontrado en PIDE.');
          return;
        }
        if (fallbackCiudadano) {
          this.atencionStateService.setFound(fallbackCiudadano, result.message || 'No se pudo refrescar datos desde PIDE. Se conserva el registro local.');
          return;
        }
        this.atencionStateService.enableManual(result.message || 'No se pudo obtener la informacion desde PIDE. Complete el registro manual.');
      },
      error: () => {
        if (fallbackCiudadano) {
          this.atencionStateService.setFound(fallbackCiudadano, 'No se pudo refrescar datos desde PIDE. Se conserva el registro local.');
          return;
        }
        this.atencionStateService.enableManual('No se pudo obtener la informacion desde PIDE. Complete el registro manual.');
      }
    });
  }
  loadTiposDocumento(force = false) {
    this.tiposDocumentoLoading = true;
    this.tiposDocumentoError = null;
    this.changeDetectorRef.markForCheck();
    this.catalogosService.getTiposDocumento(force).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(error => {
      console.error('[AtencionHomePage] Error cargando tipos de documento', error);
      this.tiposDocumentoError = 'No se pudo cargar el catalogo de tipos de documento.';
      this.tiposDocumentoLoading = false;
      this.changeDetectorRef.markForCheck();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
    })).subscribe(tiposDocumento => {
      this.tiposDocumento = tiposDocumento;
      this.tiposDocumentoLoading = false;
      this.changeDetectorRef.markForCheck();
    });
  }
  loadAvisosRecientes() {
    this.avisosLoading = true;
    this.avisosError = null;
    this.changeDetectorRef.markForCheck();
    this.avisosOperativosService.listarRecientes(4).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(error => {
      console.error('[AtencionHomePage] Error cargando avisos recientes', error);
      this.avisosError = 'No se pudieron cargar los avisos operativos recientes.';
      this.avisosLoading = false;
      this.changeDetectorRef.markForCheck();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
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
  enrichCiudadano(ciudadano, fuente) {
    const normalizedFuente = this.normalizeFuenteValue(ciudadano.fuente);
    const normalizedFuenteInicial = this.normalizeFuenteValue(ciudadano.fuenteOrigenInicial);
    const normalizedFuenteUltimaActualizacion = this.normalizeFuenteValue(ciudadano.fuenteUltimaActualizacion);
    return {
      ...ciudadano,
      fuente: normalizedFuente || normalizedFuenteUltimaActualizacion || normalizedFuenteInicial || fuente,
      fuenteOrigenInicial: normalizedFuenteInicial || fuente,
      fuenteUltimaActualizacion: normalizedFuenteUltimaActualizacion || normalizedFuente || normalizedFuenteInicial || fuente
    };
  }
  resolveFuenteLabel(fuente) {
    switch (fuente) {
      case 'LOCAL':
        return 'Base local';
      case 'PIDE':
        return 'PIDE';
      case 'MANUAL':
        return 'Manual';
      default:
        return fuente || 'Pendiente';
    }
  }
  resolveDisplayFuente(ciudadano) {
    if (!ciudadano) {
      return null;
    }
    return this.normalizeFuenteValue(ciudadano.fuenteUltimaActualizacion) || this.normalizeFuenteValue(ciudadano.fuente) || this.normalizeFuenteValue(ciudadano.fuenteOrigenInicial);
  }
  validatePideEligibility(payload) {
    const tipoDocumento = this.resolveTipoDocumentoById(payload.tipoDocumentoId);
    if (!tipoDocumento || !this.isDniTipoDocumento(tipoDocumento)) {
      return {
        allowed: false,
        reason: 'Solo el DNI tiene integracion con PIDE. Para Carnet de Extranjeria, Pasaporte u otros documentos, continue con registro manual.'
      };
    }
    const numeroDocumento = payload.numeroDocumento?.trim() || '';
    if (!/^\d{8}$/.test(numeroDocumento)) {
      return {
        allowed: false,
        reason: 'El DNI debe tener exactamente 8 digitos para consultar PIDE.'
      };
    }
    return {
      allowed: true,
      reason: ''
    };
  }
  resolveTipoDocumentoById(tipoDocumentoId) {
    if (tipoDocumentoId === null || tipoDocumentoId === undefined) {
      return null;
    }
    return this.tiposDocumento.find(tipo => Number(tipo.id_tipo_documento) === Number(tipoDocumentoId)) || null;
  }
  isDniTipoDocumento(tipoDocumento) {
    const codigo = tipoDocumento.codigo?.trim().toUpperCase() || '';
    const nombre = tipoDocumento.nombre?.trim().toUpperCase() || '';
    return codigo === 'DNI' || nombre.includes('DNI');
  }
  resolveSourceAuditParts(ciudadano) {
    const sourceParts = [];
    const fuenteInicial = this.resolveAuditSourceLabel(ciudadano.fuenteOrigenInicial);
    const fuenteActual = this.resolveAuditSourceLabel(ciudadano.fuenteUltimaActualizacion);
    if (fuenteInicial) {
      sourceParts.push(`Fuente inicial: ${fuenteInicial}`);
    }
    if (fuenteActual) {
      sourceParts.push(`Ultima actualizacion: ${fuenteActual}`);
    }
    return sourceParts.length ? sourceParts.join(' | ') : null;
  }
  resolveAuditSourceLabel(value) {
    const normalizedValue = this.normalizeFuenteValue(value);
    return normalizedValue ? this.resolveFuenteLabel(normalizedValue) : null;
  }
  normalizeFuenteValue(value) {
    const normalizedValue = value?.trim().toUpperCase();
    return normalizedValue || null;
  }
  resolveTipoDocumentoLabel(ciudadano) {
    const tipoDocumento = ciudadano.tipoDocumento?.trim();
    if (tipoDocumento) {
      return tipoDocumento;
    }
    const tipoDocumentoId = ciudadano.tipoDocumentoId;
    if (tipoDocumentoId === null || tipoDocumentoId === undefined) {
      return null;
    }
    const match = this.tiposDocumento.find(tipo => Number(tipo.id_tipo_documento) === Number(tipoDocumentoId));
    return match?.nombre || null;
  }
  resolveSexoLabel(sexo) {
    if (!sexo) {
      return null;
    }
    if (sexo === 'M') {
      return 'Masculino';
    }
    if (sexo === 'F') {
      return 'Femenino';
    }
    return sexo;
  }
  static {
    this.ɵfac = function AtencionHomePageComponent_Factory(t) {
      return new (t || AtencionHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_atencion_service__WEBPACK_IMPORTED_MODULE_0__.AtencionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_atencion_state_service__WEBPACK_IMPORTED_MODULE_1__.AtencionStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_avisos_operativos_services_avisos_operativos_service__WEBPACK_IMPORTED_MODULE_2__.AvisosOperativosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_catalogos_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__.CatalogosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_ciudadanos_service__WEBPACK_IMPORTED_MODULE_4__.CiudadanosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: AtencionHomePageComponent,
      selectors: [["app-atencion-home-page"]],
      decls: 9,
      vars: 3,
      consts: [[1, "page", "atencion-home"], [1, "page__header"], [1, "page__title"], [1, "page__subtitle"], [4, "ngIf"], [3, "steps", "currentIndex"], [1, "atencion-home__layout"], [1, "surface-card", "atencion-home__search"], [3, "lines", 4, "ngIf"], ["class", "atencion-home__notice atencion-home__notice--warning", 4, "ngIf"], [3, "tiposDocumento", "status", "activeStage", "searchSubmitted", "clearRequested", 4, "ngIf"], [1, "surface-card", "atencion-home__result"], ["title", "Sin resultado aun", "description", "Busca al ciudadano desde la columna izquierda para mostrar aqui sus datos o habilitar el registro manual.", 4, "ngIf"], [1, "surface-card", "atencion-home__avisos-panel"], ["title", "Avisos operativos recientes", "emptyTitle", "Sin avisos operativos recientes", "emptyDescription", "Los avisos recientes se muestran aqui como apoyo operativo para el asesor.", 3, "avisos", "loading"], [3, "lines"], [1, "atencion-home__notice", "atencion-home__notice--warning"], [1, "atencion-home__notice-copy"], ["type", "button", 1, "button", "button--secondary", 3, "click"], [3, "tiposDocumento", "status", "activeStage", "searchSubmitted", "clearRequested"], [1, "atencion-home__notice", "atencion-home__notice--info"], [1, "atencion-home__notice", "atencion-home__notice--danger"], [1, "atencion-home__manual-form", 3, "formGroup", "ngSubmit"], [1, "atencion-home__manual-header"], [1, "atencion-home__manual-grid"], [1, "atencion-home__field", "atencion-home__field--full"], ["type", "text", "formControlName", "nombres"], [1, "atencion-home__field"], ["type", "text", "formControlName", "apellidoPaterno"], ["type", "text", "formControlName", "apellidoMaterno"], ["formControlName", "sexo"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "actions-row"], ["type", "submit", 1, "button"], [3, "value"], [3, "ciudadano", "showActions", "secondaryLabel", "primaryLabel", "primaryDisabled", "originLabel", "originDetail", "secondaryAction", "primaryAction"], ["title", "Sin resultado aun", "description", "Busca al ciudadano desde la columna izquierda para mostrar aqui sus datos o habilitar el registro manual."]],
      template: function AtencionHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Atencion de ciudadano");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Busca al ciudadano para iniciar una atencion. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AtencionHomePageComponent_ng_container_7_Template, 16, 13, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 1, ctx.state$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _shared_components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_6__.StepperAtencionComponent, _shared_components_ciudadano_card_ciudadano_card_component__WEBPACK_IMPORTED_MODULE_7__.CiudadanoCardComponent, _shared_components_aviso_operativo_list_aviso_operativo_list_component__WEBPACK_IMPORTED_MODULE_8__.AvisoOperativoListComponent, _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_9__.LoadingSkeletonComponent, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__.EmptyStateComponent, _components_ciudadano_search_form_ciudadano_search_form_component__WEBPACK_IMPORTED_MODULE_11__.CiudadanoSearchFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
      styles: [".atencion-home[_ngcontent-%COMP%] {\n  gap: 1.15rem;\n}\n\n.atencion-home[_ngcontent-%COMP%]   .page__header[_ngcontent-%COMP%] {\n  gap: 0.4rem;\n}\n\n.atencion-home[_ngcontent-%COMP%]   .page__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.atencion-home[_ngcontent-%COMP%]   .page__subtitle[_ngcontent-%COMP%] {\n  max-width: 48rem;\n  margin-top: 0.2rem;\n}\n\n.atencion-home__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px minmax(0, 1fr);\n  gap: 0.95rem;\n  align-items: start;\n}\n\n.atencion-home__search[_ngcontent-%COMP%], .atencion-home__result[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.atencion-home__search[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  background: #eef4fb;\n  border-radius: 0.9rem;\n}\n\n.atencion-home__result[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  padding: 0.9rem;\n  background: #f7fbff;\n  border-radius: 0.9rem;\n  align-content: start;\n}\n\n.atencion-home__avisos-panel[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  background: #f7fbff;\n}\n\n.atencion-home__notice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  padding: 0.9rem 0.95rem;\n  border: 1px solid #dce7f2;\n  border-radius: 0.75rem;\n}\n\n.atencion-home__notice--info[_ngcontent-%COMP%] {\n  background: #eef5fd;\n}\n\n.atencion-home__notice--warning[_ngcontent-%COMP%] {\n  background: #fff7ea;\n}\n\n.atencion-home__notice--danger[_ngcontent-%COMP%] {\n  background: #fdf1f1;\n}\n\n.atencion-home__notice-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n}\n\n.atencion-home__notice-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .atencion-home__notice-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.atencion-home__notice-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n  line-height: 1.5;\n}\n\n.atencion-home__manual-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #dde6f0;\n  border-radius: 0.85rem;\n  background: #ffffff;\n}\n\n.atencion-home__manual-header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n\n.atencion-home__manual-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .atencion-home__manual-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.atencion-home__manual-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-700);\n}\n\n.atencion-home__manual-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n\n.atencion-home__field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.38rem;\n}\n\n.atencion-home__field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\n.atencion-home__field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.atencion-home__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .atencion-home__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 0.8rem;\n  border: 1px solid #c5d4e4;\n  border-radius: 0.72rem;\n  background: #ffffff;\n}\n\n.atencion-home__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .atencion-home__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(22, 95, 159, 0.42);\n  box-shadow: 0 0 0 3px rgba(22, 95, 159, 0.08);\n}\n\n.atencion-home__field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n\n@media (max-width: 1199px) {\n  .atencion-home__layout[_ngcontent-%COMP%], .atencion-home__manual-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXRlbmNpb24vcGFnZXMvYXRlbmNpb24taG9tZS9hdGVuY2lvbi1ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTs7RUFFRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsU0FBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSwwQkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXRlbmNpb24taG9tZSB7XG4gIGdhcDogMS4xNXJlbTtcbn1cblxuLmF0ZW5jaW9uLWhvbWUgLnBhZ2VfX2hlYWRlciB7XG4gIGdhcDogMC40cmVtO1xufVxuXG4uYXRlbmNpb24taG9tZSAucGFnZV9fdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5hdGVuY2lvbi1ob21lIC5wYWdlX19zdWJ0aXRsZSB7XG4gIG1heC13aWR0aDogNDhyZW07XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX2xheW91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMC45NXJlbTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uYXRlbmNpb24taG9tZV9fc2VhcmNoLFxuLmF0ZW5jaW9uLWhvbWVfX3Jlc3VsdCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX3NlYXJjaCB7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbiAgYmFja2dyb3VuZDogI2VlZjRmYjtcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xufVxuXG4uYXRlbmNpb24taG9tZV9fcmVzdWx0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjg1cmVtO1xuICBwYWRkaW5nOiAwLjlyZW07XG4gIGJhY2tncm91bmQ6ICNmN2ZiZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG59XG5cbi5hdGVuY2lvbi1ob21lX19hdmlzb3MtcGFuZWwge1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIGJhY2tncm91bmQ6ICNmN2ZiZmY7XG59XG5cbi5hdGVuY2lvbi1ob21lX19ub3RpY2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuODVyZW07XG4gIHBhZGRpbmc6IDAuOXJlbSAwLjk1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlN2YyO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xufVxuXG4uYXRlbmNpb24taG9tZV9fbm90aWNlLS1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2VlZjVmZDtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX25vdGljZS0td2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY3ZWE7XG59XG5cbi5hdGVuY2lvbi1ob21lX19ub3RpY2UtLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNmZGYxZjE7XG59XG5cbi5hdGVuY2lvbi1ob21lX19ub3RpY2UtY29weSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4zcmVtO1xufVxuXG4uYXRlbmNpb24taG9tZV9fbm90aWNlLWNvcHkgc3Ryb25nLFxuLmF0ZW5jaW9uLWhvbWVfX25vdGljZS1jb3B5IHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5hdGVuY2lvbi1ob21lX19ub3RpY2UtY29weSBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtNzAwKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX21hbnVhbC1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRlNmYwO1xuICBib3JkZXItcmFkaXVzOiAwLjg1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uYXRlbmNpb24taG9tZV9fbWFudWFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX21hbnVhbC1oZWFkZXIgaDMsXG4uYXRlbmNpb24taG9tZV9fbWFudWFsLWhlYWRlciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXRlbmNpb24taG9tZV9fbWFudWFsLWhlYWRlciBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtNzAwKTtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX21hbnVhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDAuOHJlbTtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX2ZpZWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjM4cmVtO1xufVxuXG4uYXRlbmNpb24taG9tZV9fZmllbGQtLWZ1bGwge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4uYXRlbmNpb24taG9tZV9fZmllbGQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hdGVuY2lvbi1ob21lX19maWVsZCBpbnB1dCxcbi5hdGVuY2lvbi1ob21lX19maWVsZCBzZWxlY3Qge1xuICBtaW4taGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nOiAwIDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1ZDRlNDtcbiAgYm9yZGVyLXJhZGl1czogMC43MnJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX2ZpZWxkIGlucHV0OmZvY3VzLFxuLmF0ZW5jaW9uLWhvbWVfX2ZpZWxkIHNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMiwgOTUsIDE1OSwgMC40Mik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIyLCA5NSwgMTU5LCAwLjA4KTtcbn1cblxuLmF0ZW5jaW9uLWhvbWVfX2ZpZWxkIHNtYWxsIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmF0ZW5jaW9uLWhvbWVfX2xheW91dCxcbiAgLmF0ZW5jaW9uLWhvbWVfX21hbnVhbC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3713:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/atencion/pages/atencion-servicio/atencion-servicio-page.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtencionServicioPageComponent: () => (/* binding */ AtencionServicioPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_atencion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/atencion.service */ 4598);
/* harmony import */ var _services_atencion_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/atencion-state.service */ 8145);
/* harmony import */ var _avisos_operativos_services_avisos_operativos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../avisos-operativos/services/avisos-operativos.service */ 1193);
/* harmony import */ var _catalogos_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../catalogos/services/catalogos.service */ 9491);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/stepper-atencion/stepper-atencion.component */ 2789);
/* harmony import */ var _shared_components_servicio_card_servicio_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/servicio-card/servicio-card.component */ 201);
/* harmony import */ var _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/ui/loading-skeleton/loading-skeleton.component */ 2121);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/ui/empty-state/empty-state.component */ 6619);
















const _c0 = ["reportTitleInput"];
function AtencionServicioPageComponent_div_0_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 21)(1, "div", 22)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 23)(9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Ciudadano");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](state_r1.entidad.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](state_r1.entidad.alcance || "Cobertura institucional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", state_r1.ciudadano.nombres, " ", state_r1.ciudadano.apellidoPaterno || state_r1.ciudadano.apellidos || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](state_r1.ciudadano.numeroDocumento || "Sin documento");
  }
}
function AtencionServicioPageComponent_div_0_app_loading_skeleton_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loading-skeleton", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("lines", 5);
  }
}
function AtencionServicioPageComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "No se pudieron cargar los servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AtencionServicioPageComponent_div_0_div_24_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.retryServicios());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Reintentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.serviciosError);
  }
}
function AtencionServicioPageComponent_div_0_div_25_app_servicio_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-servicio-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selected", function AtencionServicioPageComponent_div_0_div_25_app_servicio_card_1_Template_app_servicio_card_selected_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const servicio_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.onSelectServicio(servicio_r13));
    })("secondaryAction", function AtencionServicioPageComponent_div_0_div_25_app_servicio_card_1_Template_app_servicio_card_secondaryAction_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const servicio_r13 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.openReportModal(servicio_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const servicio_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("servicio", ctx_r12.mapServicioCard(servicio_r13))("actionLabel", ctx_r12.selectingServicioId === servicio_r13.id ? "Seleccionando..." : "Seleccionar servicio");
  }
}
function AtencionServicioPageComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AtencionServicioPageComponent_div_0_div_25_app_servicio_card_1_Template, 1, 2, "app-servicio-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.filteredServicios)("ngForTrackBy", ctx_r5.trackByServicioId);
  }
}
function AtencionServicioPageComponent_div_0_app_empty_state_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-empty-state", 29);
  }
}
function AtencionServicioPageComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "section", 32)(3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "header", 34)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Servicio abierto en una nueva pestana");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " El tramite externo esta en curso. Manten esta pestana abierta para monitorear el tiempo de atencion del servicio hasta finalizar la atencion. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "section", 35)(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Resumen de la atencion");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "dl", 36)(14, "div", 37)(15, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Ciudadano");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 37)(20, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 37)(25, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 37)(30, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 37)(35, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Inicio del servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 37)(40, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Tiempo transcurrido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "dd", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 39)(45, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AtencionServicioPageComponent_div_0_div_27_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.startNextAttention());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AtencionServicioPageComponent_div_0_div_27_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.finalizeAttention());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.resolveCitizenFullName());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.resolveCitizenDocument());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](state_r1.entidad.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](state_r1.servicio.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.resolveServiceStartLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r7.serviceMonitorElapsedLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r7.finalizingAttention || ctx_r7.startingNextAttention);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r7.startingNextAttention ? "Creando nueva..." : "Nueva atencion", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r7.finalizingAttention || ctx_r7.startingNextAttention);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r7.finalizingAttention ? "Terminando..." : "Terminar atencion", " ");
  }
}
function AtencionServicioPageComponent_div_0_div_28_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ingresa el tipo de falla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AtencionServicioPageComponent_div_0_div_28_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ingresa un titulo del aviso. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AtencionServicioPageComponent_div_0_div_28_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ingresa una descripcion del problema. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AtencionServicioPageComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AtencionServicioPageComponent_div_0_div_28_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.closeReportModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "section", 43)(3, "header", 44)(4, "div")(5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Aviso operativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Reportar falla del servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AtencionServicioPageComponent_div_0_div_28_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.closeReportModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function AtencionServicioPageComponent_div_0_div_28_Template_form_ngSubmit_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.submitReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 47)(15, "label", 48)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Tipo de falla");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, AtencionServicioPageComponent_div_0_div_28_small_19_Template, 2, 0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "label", 48)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Severidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "select", 51)(24, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Baja");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Media");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Alta");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "label", 48)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Titulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, AtencionServicioPageComponent_div_0_div_28_small_35_Template, 2, 0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "label", 48)(37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "textarea", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, AtencionServicioPageComponent_div_0_div_28_small_40_Template, 2, 0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "label", 48)(42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "URL reportada");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 59)(46, "div")(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div")(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 60)(57, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AtencionServicioPageComponent_div_0_div_28_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.closeReportModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Registra la incidencia para ", ctx_r8.reportingServicio.nombre, " y deja el aviso operativo listo para seguimiento. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r8.reportSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r8.reportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.reportForm.controls.tipoFalla.touched && ctx_r8.reportForm.controls.tipoFalla.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.reportTitleControl.touched && ctx_r8.reportTitleControl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.reportDescriptionControl.touched && ctx_r8.reportDescriptionControl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((state_r1.entidad == null ? null : state_r1.entidad.nombre) || "Sin entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r8.reportingServicio.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r8.reportSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r8.reportSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r8.reportSubmitting ? "Enviando..." : "Enviar reporte", " ");
  }
}
function AtencionServicioPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "div")(3, "div", 3)(4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Pantalla 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Seleccion de servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Selecciona un servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Elige el servicio de la entidad seleccionada para continuar con la atencion. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "app-stepper-atencion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, AtencionServicioPageComponent_div_0_section_13_Template, 15, 5, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "section", 10)(15, "label", 11)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Buscar servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AtencionServicioPageComponent_div_0_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.searchTerm = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 13)(20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AtencionServicioPageComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.goBackToEntidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Volver a entidades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, AtencionServicioPageComponent_div_0_app_loading_skeleton_23_Template, 1, 1, "app-loading-skeleton", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, AtencionServicioPageComponent_div_0_div_24_Template, 7, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, AtencionServicioPageComponent_div_0_div_25_Template, 2, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, AtencionServicioPageComponent_div_0_app_empty_state_26_Template, 1, 0, "app-empty-state", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, AtencionServicioPageComponent_div_0_div_27_Template, 49, 10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, AtencionServicioPageComponent_div_0_div_28_Template, 61, 11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("steps", ctx_r0.steps)("currentIndex", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", state_r1.ciudadano && state_r1.entidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.serviciosLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.serviciosLoading && ctx_r0.serviciosError);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.serviciosLoading && !ctx_r0.serviciosError && ctx_r0.filteredServicios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.serviciosLoading && !ctx_r0.serviciosError && ctx_r0.filteredServicios.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.serviceMonitorVisible && state_r1.ciudadano && state_r1.entidad && state_r1.servicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.reportModalVisible && ctx_r0.reportingServicio);
  }
}
class AtencionServicioPageComponent {
  constructor(atencionService, atencionStateService, avisosOperativosService, catalogosService, changeDetectorRef, formBuilder, notificationService, router) {
    this.atencionService = atencionService;
    this.atencionStateService = atencionStateService;
    this.avisosOperativosService = avisosOperativosService;
    this.catalogosService = catalogosService;
    this.changeDetectorRef = changeDetectorRef;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.router = router;
    this.state$ = this.atencionStateService.state$;
    this.steps = [{
      label: 'Identificacion',
      hint: 'Busqueda del ciudadano'
    }, {
      label: 'Datos del ciudadano',
      hint: 'Validacion de datos'
    }, {
      label: 'Entidad',
      hint: 'Seleccion institucional'
    }, {
      label: 'Servicio',
      hint: 'Tramite operativo'
    }, {
      label: 'Finalizacion',
      hint: 'Cierre de atencion'
    }];
    this.servicios = [];
    this.serviciosLoading = true;
    this.serviciosError = null;
    this.searchTerm = '';
    this.selectingServicioId = null;
    this.serviceMonitorVisible = false;
    this.serviceMonitorUrl = null;
    this.serviceMonitorStartedAtLabel = '';
    this.serviceMonitorElapsedLabel = '00:00:00';
    this.reportModalVisible = false;
    this.reportingServicio = null;
    this.reportSubmitting = false;
    this.finalizingAttention = false;
    this.startingNextAttention = false;
    this.reportForm = this.formBuilder.group({
      tipoFalla: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      severidad: ['media', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(120)]],
      descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(500)]],
      urlReportada: ['']
    });
    this.serviceTimerId = null;
    this.serviceStartTimeMs = null;
  }
  ngOnInit() {
    const state = this.atencionStateService.snapshot;
    if (!state.atencion || !state.entidad) {
      this.notificationService.warning('Entidad requerida', 'Primero selecciona una entidad para continuar.');
      void this.router.navigate(['/atencion/entidades']);
      return;
    }
    this.atencionStateService.setCurrentRoute('/atencion/servicios');
    this.restoreServiceMonitor(state.atencion);
    this.loadServicios(state.entidad.id);
  }
  ngOnDestroy() {
    this.stopServiceTimer();
  }
  get filteredServicios() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.servicios;
    }
    return this.servicios.filter(servicio => [servicio.nombre, servicio.descripcion, servicio.canal].filter(Boolean).some(value => value.toLowerCase().includes(term)));
  }
  retryServicios() {
    const entidadId = this.atencionStateService.snapshot.entidad?.id;
    if (entidadId !== undefined && entidadId !== null) {
      this.loadServicios(entidadId, true);
    }
  }
  goBackToEntidades() {
    if (this.serviceMonitorVisible) {
      this.notificationService.warning('Servicio en curso', 'Finaliza la atencion actual antes de volver a seleccionar entidad.');
      return;
    }
    this.atencionStateService.setCurrentRoute('/atencion/entidades');
    void this.router.navigate(['/atencion/entidades']);
  }
  onSelectServicio(servicio) {
    const state = this.atencionStateService.snapshot;
    if (!state.atencion) {
      return;
    }
    const pendingWindow = this.openPendingServiceTab();
    this.selectingServicioId = servicio.id;
    this.changeDetectorRef.markForCheck();
    this.atencionService.seleccionarServicio(state.atencion.id, {
      servicioId: servicio.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe({
      next: atencion => {
        this.atencionStateService.setServicioSelected(servicio, atencion, 'Servicio seleccionado. El tramite externo quedo listo para abrirse.');
        const redirectUrl = this.resolveRedirectUrl(servicio, atencion);
        if (redirectUrl) {
          console.debug('[AtencionServicioPage] Abriendo servicio', {
            servicioId: servicio.id,
            redirectUrl
          });
          this.navigatePendingServiceTab(pendingWindow, redirectUrl);
          this.openServiceMonitor(redirectUrl, atencion);
          this.notificationService.success('Servicio abierto', 'El tramite se abrio en una nueva pestana. El monitor de atencion quedo disponible en esta pantalla.');
          return;
        }
        this.closePendingServiceTab(pendingWindow);
        this.notificationService.warning('Servicio seleccionado sin enlace', 'El backend no devolvio una URL de redireccion para continuar con el tramite.');
      },
      error: () => {
        this.closePendingServiceTab(pendingWindow);
        this.notificationService.error('No se pudo seleccionar el servicio', 'Reintenta la operacion para continuar.');
      }
    }).add(() => {
      this.selectingServicioId = null;
      this.changeDetectorRef.markForCheck();
    });
  }
  finalizeAttention() {
    const atencion = this.atencionStateService.snapshot.atencion;
    if (!atencion || this.finalizingAttention || this.startingNextAttention) {
      return;
    }
    this.finalizingAttention = true;
    this.changeDetectorRef.markForCheck();
    this.atencionService.finalizar(atencion.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe({
      next: () => {
        this.stopServiceTimer();
        this.serviceMonitorVisible = false;
        this.atencionStateService.setServiceMonitor(null);
        this.atencionStateService.reset();
        this.notificationService.success('Atencion finalizada', 'La atencion se cerro correctamente.');
        void this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.notificationService.error('No se pudo finalizar la atencion', 'Reintenta la operacion desde el monitor del servicio.');
      }
    }).add(() => {
      this.finalizingAttention = false;
      this.changeDetectorRef.markForCheck();
    });
  }
  startNextAttention() {
    const state = this.atencionStateService.snapshot;
    const atencion = state.atencion;
    const ciudadano = state.ciudadano;
    if (!atencion || !ciudadano?.id || this.finalizingAttention || this.startingNextAttention) {
      return;
    }
    this.startingNextAttention = true;
    this.changeDetectorRef.markForCheck();
    this.atencionService.finalizar(atencion.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => this.atencionService.crear({
      ciudadanoId: ciudadano.id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(nuevaAtencion => this.atencionService.iniciar(nuevaAtencion.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe({
      next: nuevaAtencion => {
        this.stopServiceTimer();
        this.serviceMonitorVisible = false;
        this.atencionStateService.setServiceMonitor(null);
        this.atencionStateService.setAttentionStarted(nuevaAtencion, 'Nueva atencion iniciada con el mismo ciudadano.');
        this.atencionStateService.setCurrentRoute('/atencion/entidades');
        this.notificationService.success('Nueva atencion iniciada', 'Se reutilizo el ciudadano actual y la nueva atencion quedo lista para seleccionar entidad.');
        void this.router.navigate(['/atencion/entidades']);
      },
      error: () => {
        this.notificationService.error('No se pudo iniciar una nueva atencion', 'La atencion actual no pudo cerrarse o la nueva atencion no pudo abrirse.');
      }
    }).add(() => {
      this.startingNextAttention = false;
      this.changeDetectorRef.markForCheck();
    });
  }
  mapServicioCard(servicio) {
    return {
      nombre: servicio.nombre,
      descripcion: servicio.descripcion,
      canal: servicio.canal,
      disponibilidad: servicio.disponibilidad,
      logoUrl: servicio.logoUrl
    };
  }
  trackByServicioId(index, servicio) {
    return servicio.id ?? index;
  }
  openReportModal(servicio) {
    const state = this.atencionStateService.snapshot;
    this.reportingServicio = servicio;
    this.reportModalVisible = true;
    this.reportForm.reset({
      tipoFalla: '',
      severidad: 'media',
      titulo: servicio.nombre ? `Incidencia en ${servicio.nombre}` : '',
      descripcion: '',
      urlReportada: this.serviceMonitorUrl || ''
    });
    if (!state.entidad) {
      this.notificationService.warning('Entidad no disponible', 'No se encontro la entidad seleccionada para completar el reporte.');
    }
    this.changeDetectorRef.markForCheck();
    window.setTimeout(() => {
      this.reportTitleInput?.nativeElement.focus();
      this.reportTitleInput?.nativeElement.select();
    }, 0);
  }
  closeReportModal() {
    if (this.reportSubmitting) {
      return;
    }
    this.reportingServicio = null;
    this.reportModalVisible = false;
    this.reportForm.reset({
      tipoFalla: '',
      severidad: 'media',
      titulo: '',
      descripcion: '',
      urlReportada: ''
    });
    this.changeDetectorRef.markForCheck();
  }
  submitReport() {
    const state = this.atencionStateService.snapshot;
    if (!this.reportingServicio || !state.entidad || this.reportSubmitting) {
      return;
    }
    if (this.reportForm.invalid) {
      this.reportForm.markAllAsTouched();
      return;
    }
    this.reportSubmitting = true;
    this.changeDetectorRef.markForCheck();
    const formValue = this.reportForm.getRawValue();
    this.avisosOperativosService.crear({
      tipoFalla: formValue.tipoFalla?.trim() || '',
      severidad: formValue.severidad?.trim() || 'media',
      titulo: formValue.titulo?.trim() || '',
      descripcion: formValue.descripcion?.trim() || '',
      urlReportada: formValue.urlReportada?.trim() || null,
      servicioId: this.reportingServicio.id,
      entidadId: state.entidad.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe({
      next: () => {
        this.notificationService.success('Falla reportada', 'El aviso operativo se registro correctamente.');
        this.closeReportModal();
      },
      error: () => {
        this.notificationService.error('No se pudo registrar la falla', 'Revisa los datos del aviso e intenta nuevamente.');
      }
    }).add(() => {
      this.reportSubmitting = false;
      this.changeDetectorRef.markForCheck();
    });
  }
  resolveCitizenFullName() {
    const ciudadano = this.atencionStateService.snapshot.ciudadano;
    if (!ciudadano) {
      return 'Ciudadano pendiente';
    }
    return [ciudadano.nombres, ciudadano.apellidoPaterno || ciudadano.apellidos || '', ciudadano.apellidoMaterno || ''].filter(Boolean).join(' ');
  }
  resolveCitizenDocument() {
    const ciudadano = this.atencionStateService.snapshot.ciudadano;
    if (!ciudadano) {
      return 'Sin documento';
    }
    return ciudadano.numeroDocumento || 'Sin documento';
  }
  resolveServiceStartLabel() {
    return this.serviceMonitorStartedAtLabel || 'Pendiente';
  }
  get reportTitleControl() {
    return this.reportForm.controls.titulo;
  }
  get reportDescriptionControl() {
    return this.reportForm.controls.descripcion;
  }
  loadServicios(entidadId, force = false) {
    this.serviciosLoading = true;
    this.serviciosError = null;
    this.changeDetectorRef.markForCheck();
    this.catalogosService.getServicios(entidadId, force).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(error => {
      console.error('[AtencionServicioPage] Error cargando servicios', error);
      this.serviciosLoading = false;
      this.serviciosError = 'No se pudieron cargar los servicios de la entidad seleccionada.';
      this.changeDetectorRef.markForCheck();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    })).subscribe(servicios => {
      this.servicios = servicios;
      this.serviciosLoading = false;
      this.changeDetectorRef.markForCheck();
    });
  }
  openServiceMonitor(redirectUrl, atencion) {
    this.serviceMonitorUrl = redirectUrl;
    this.serviceMonitorVisible = true;
    this.serviceStartTimeMs = this.resolveServiceStartTime(atencion);
    this.serviceMonitorStartedAtLabel = this.formatDateTime(this.serviceStartTimeMs);
    this.updateElapsedTime();
    this.startServiceTimer();
    this.atencionStateService.setServiceMonitor({
      visible: true,
      url: redirectUrl,
      startedAtMs: this.serviceStartTimeMs,
      startedAtLabel: this.serviceMonitorStartedAtLabel
    });
    this.changeDetectorRef.markForCheck();
  }
  resolveRedirectUrl(servicio, atencion) {
    const candidates = [atencion.urlServicio, servicio.url, atencion.urlRetorno, servicio.urlRetorno];
    const redirectUrl = candidates.find(candidate => typeof candidate === 'string' && candidate.trim().length > 0);
    return redirectUrl ? redirectUrl.trim() : null;
  }
  openPendingServiceTab() {
    const serviceWindow = window.open('', '_blank');
    if (!serviceWindow) {
      this.notificationService.warning('Pestana bloqueada', 'El navegador podria bloquear la apertura del servicio. Si ocurre, habilita ventanas emergentes.');
      return null;
    }
    serviceWindow.document.title = 'Abriendo servicio';
    serviceWindow.document.body.innerHTML = '<div style="font-family: Aptos, Segoe UI, sans-serif; padding: 32px; color: #1d3553;">' + '<strong>Abriendo servicio institucional...</strong>' + '<p style="margin-top: 12px; color: #55708f;">Espera la confirmacion del backend para continuar.</p>' + '</div>';
    return serviceWindow;
  }
  navigatePendingServiceTab(serviceWindow, redirectUrl) {
    if (serviceWindow) {
      serviceWindow.opener = null;
      serviceWindow.location.replace(redirectUrl);
      return;
    }
    const fallbackWindow = window.open(redirectUrl, '_blank');
    if (fallbackWindow) {
      fallbackWindow.opener = null;
      return;
    }
    this.notificationService.warning('Pestana bloqueada', 'El navegador bloqueo la apertura automatica del servicio. Usa la pestana del tramite para abrirlo manualmente.');
  }
  closePendingServiceTab(serviceWindow) {
    if (serviceWindow && !serviceWindow.closed) {
      serviceWindow.close();
    }
  }
  resolveServiceStartTime(atencion) {
    const candidates = [atencion.fechaSeleccionServicio, atencion.fechaInicioAtencion];
    for (const candidate of candidates) {
      const parsedTime = this.parseBackendDate(candidate);
      if (parsedTime !== null) {
        return Math.min(parsedTime, Date.now());
      }
    }
    return Date.now();
  }
  parseBackendDate(value) {
    if (!value || typeof value !== 'string') {
      return null;
    }
    const normalizedValue = value.includes('T') ? value : value.replace(' ', 'T');
    const parsed = Date.parse(normalizedValue);
    return Number.isNaN(parsed) ? null : parsed;
  }
  formatDateTime(timestamp) {
    if (timestamp === null) {
      return 'Pendiente';
    }
    return new Intl.DateTimeFormat('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(timestamp);
  }
  startServiceTimer() {
    this.stopServiceTimer();
    this.serviceTimerId = window.setInterval(() => {
      this.updateElapsedTime();
      const viewRef = this.changeDetectorRef;
      if (!viewRef.destroyed) {
        this.changeDetectorRef.detectChanges();
      }
    }, 1000);
  }
  stopServiceTimer() {
    if (this.serviceTimerId) {
      window.clearInterval(this.serviceTimerId);
      this.serviceTimerId = null;
    }
  }
  updateElapsedTime() {
    if (this.serviceStartTimeMs === null) {
      this.serviceMonitorElapsedLabel = '00:00:00';
      return;
    }
    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - this.serviceStartTimeMs) / 1000));
    const hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor(elapsedSeconds % 3600 / 60).toString().padStart(2, '0');
    const seconds = Math.floor(elapsedSeconds % 60).toString().padStart(2, '0');
    this.serviceMonitorElapsedLabel = `${hours}:${minutes}:${seconds}`;
  }
  restoreServiceMonitor(atencion) {
    const serviceMonitor = this.atencionStateService.snapshot.serviceMonitor;
    if (!serviceMonitor?.visible) {
      return;
    }
    this.serviceMonitorVisible = true;
    this.serviceMonitorUrl = serviceMonitor.url;
    const restoredStartTimeMs = serviceMonitor.startedAtMs ?? this.resolveServiceStartTime(atencion);
    this.serviceStartTimeMs = restoredStartTimeMs === null ? Date.now() : Math.min(restoredStartTimeMs, Date.now());
    this.serviceMonitorStartedAtLabel = serviceMonitor.startedAtLabel || this.formatDateTime(this.serviceStartTimeMs);
    this.updateElapsedTime();
    this.startServiceTimer();
  }
  static {
    this.ɵfac = function AtencionServicioPageComponent_Factory(t) {
      return new (t || AtencionServicioPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_atencion_service__WEBPACK_IMPORTED_MODULE_0__.AtencionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_atencion_state_service__WEBPACK_IMPORTED_MODULE_1__.AtencionStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_avisos_operativos_services_avisos_operativos_service__WEBPACK_IMPORTED_MODULE_2__.AvisosOperativosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_catalogos_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__.CatalogosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: AtencionServicioPageComponent,
      selectors: [["app-atencion-servicio-page"]],
      viewQuery: function AtencionServicioPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.reportTitleInput = _t.first);
        }
      },
      decls: 2,
      vars: 3,
      consts: [["class", "page atencion-servicio", 4, "ngIf"], [1, "page", "atencion-servicio"], [1, "page__header"], [1, "atencion-servicio__heading-line"], [1, "eyebrow"], [1, "atencion-servicio__heading-title"], [1, "page__title"], [1, "page__subtitle"], [3, "steps", "currentIndex"], ["class", "surface-card atencion-servicio__summary", 4, "ngIf"], [1, "surface-card", "atencion-servicio__filters"], [1, "atencion-servicio__search"], ["type", "text", "placeholder", "Buscar por nombre o descripcion", 3, "ngModel", "ngModelChange"], [1, "atencion-servicio__back-action"], ["type", "button", 1, "button", "button--secondary", 3, "click"], [1, "surface-card"], [3, "lines", 4, "ngIf"], ["class", "atencion-servicio__notice atencion-servicio__notice--warning", 4, "ngIf"], ["class", "atencion-servicio__grid", 4, "ngIf"], ["title", "Sin servicios visibles", "description", "No hay servicios disponibles con el filtro actual.", 4, "ngIf"], ["class", "atencion-servicio__modal", 4, "ngIf"], [1, "surface-card", "atencion-servicio__summary"], [1, "atencion-servicio__entity"], [1, "atencion-servicio__citizen"], [3, "lines"], [1, "atencion-servicio__notice", "atencion-servicio__notice--warning"], [1, "atencion-servicio__grid"], ["secondaryLabel", "Reportar falla", 3, "servicio", "actionLabel", "selected", "secondaryAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["secondaryLabel", "Reportar falla", 3, "servicio", "actionLabel", "selected", "secondaryAction"], ["title", "Sin servicios visibles", "description", "No hay servicios disponibles con el filtro actual."], [1, "atencion-servicio__modal"], [1, "atencion-servicio__modal-backdrop"], [1, "atencion-servicio__modal-panel", "surface-card"], [1, "atencion-servicio__modal-icon"], [1, "atencion-servicio__modal-header"], [1, "atencion-servicio__monitor-card"], [1, "atencion-servicio__monitor-list"], [1, "atencion-servicio__monitor-item"], [1, "atencion-servicio__elapsed"], [1, "actions-row", "atencion-servicio__modal-actions"], ["type", "button", 1, "button", "button--secondary", 3, "disabled", "click"], ["type", "button", 1, "button", "atencion-servicio__finish-button", 3, "disabled", "click"], [1, "atencion-servicio__modal-backdrop", 3, "click"], [1, "atencion-servicio__report-modal", "surface-card"], [1, "atencion-servicio__report-header"], ["type", "button", "aria-label", "Cerrar reporte de falla", 1, "atencion-servicio__report-close", 3, "disabled", "click"], ["autocomplete", "off", 1, "atencion-servicio__report-form", 3, "formGroup", "ngSubmit"], [1, "atencion-servicio__report-grid"], [1, "atencion-servicio__field"], ["type", "text", "formControlName", "tipoFalla", "autocomplete", "off", "placeholder", "Ej. error de validacion, enlace caido"], ["class", "atencion-servicio__field-error", 4, "ngIf"], ["formControlName", "severidad"], ["value", "baja"], ["value", "media"], ["value", "alta"], ["type", "text", "formControlName", "titulo", "maxlength", "120", "autocomplete", "off", "placeholder", "Resumen corto de la falla"], ["reportTitleInput", ""], ["rows", "4", "formControlName", "descripcion", "maxlength", "500", "autocomplete", "off", "placeholder", "Describe que ocurrio y como impacta al asesor o al ciudadano"], ["type", "url", "formControlName", "urlReportada", "autocomplete", "off", "placeholder", "https://..."], [1, "atencion-servicio__report-summary"], [1, "actions-row", "atencion-servicio__report-actions"], ["type", "submit", 1, "button", 3, "disabled"], [1, "atencion-servicio__field-error"]],
      template: function AtencionServicioPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, AtencionServicioPageComponent_div_0_Template, 29, 10, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.state$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_components_stepper_atencion_stepper_atencion_component__WEBPACK_IMPORTED_MODULE_5__.StepperAtencionComponent, _shared_components_servicio_card_servicio_card_component__WEBPACK_IMPORTED_MODULE_6__.ServicioCardComponent, _shared_ui_loading_skeleton_loading_skeleton_component__WEBPACK_IMPORTED_MODULE_7__.LoadingSkeletonComponent, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_8__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
      styles: [".atencion-servicio[_ngcontent-%COMP%] {\n  gap: 1.4rem;\n}\n\n.atencion-servicio__heading-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n\n.atencion-servicio__heading-title[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  letter-spacing: 0.02em;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: var(--color-text-900);\n}\n\n.atencion-servicio__summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  background: linear-gradient(180deg, #f7fbff 0%, #f2f8ff 100%);\n}\n\n.atencion-servicio__entity[_ngcontent-%COMP%], .atencion-servicio__citizen[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n}\n\n.atencion-servicio__entity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .atencion-servicio__citizen[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.atencion-servicio__entity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, .atencion-servicio__citizen[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--color-text-700);\n}\n\n.atencion-servicio__filters[_ngcontent-%COMP%] {\n  padding: 1rem 1.2rem;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.8rem;\n  align-items: end;\n}\n\n.atencion-servicio__search[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.atencion-servicio__search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.atencion-servicio__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  padding: 0 0.9rem;\n  border: 1px solid var(--color-border-strong);\n  border-radius: 0.9rem;\n}\n\n.atencion-servicio__back-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.atencion-servicio__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.atencion-servicio__notice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n  padding: 1rem;\n  border-radius: var(--radius-md);\n}\n\n.atencion-servicio__notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .atencion-servicio__notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.atencion-servicio__notice--warning[_ngcontent-%COMP%] {\n  background: #fff7ea;\n  border: 1px solid rgba(204, 138, 11, 0.2);\n}\n\n.atencion-servicio__modal[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 95;\n  display: grid;\n  place-items: center;\n  padding: 2rem;\n}\n\n.atencion-servicio__modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(11, 31, 54, 0.58);\n  backdrop-filter: blur(4px);\n}\n\n.atencion-servicio__modal-panel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(42rem, 100%);\n  display: grid;\n  gap: 1.4rem;\n  padding: 1.9rem 1.9rem 1.6rem;\n  border-radius: 1.4rem;\n  box-shadow: 0 24px 64px rgba(14, 34, 52, 0.24);\n}\n\n.atencion-servicio__report-modal[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(40rem, 100%);\n  max-height: calc(100vh - 4rem);\n  overflow: auto;\n  display: grid;\n  gap: 1.25rem;\n  padding: 1.6rem;\n  border-radius: 1.3rem;\n  background: #ffffff;\n  box-shadow: 0 24px 64px rgba(14, 34, 52, 0.24);\n}\n\n.atencion-servicio__report-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.atencion-servicio__report-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.45rem;\n  font-size: 1.55rem;\n  line-height: 1.08;\n}\n\n.atencion-servicio__report-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-700);\n  line-height: 1.6;\n}\n\n.atencion-servicio__report-close[_ngcontent-%COMP%] {\n  width: 2.2rem;\n  height: 2.2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--color-text-700);\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.atencion-servicio__report-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.atencion-servicio__report-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.atencion-servicio__field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.atencion-servicio__field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.atencion-servicio__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .atencion-servicio__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .atencion-servicio__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  display: block;\n  padding: 0.8rem 0.95rem;\n  border: 1px solid var(--color-border-strong);\n  border-radius: 0.9rem;\n  background: #ffffff;\n  color: var(--color-text-900);\n}\n\n.atencion-servicio__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 110px;\n  resize: vertical;\n}\n\n.atencion-servicio__field-error[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: 0.82rem;\n}\n\n.atencion-servicio__report-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n  padding: 0.95rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: 1rem;\n  background: var(--color-surface-muted);\n}\n\n.atencion-servicio__report-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n\n.atencion-servicio__report-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-700);\n}\n\n.atencion-servicio__report-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.atencion-servicio__modal-icon[_ngcontent-%COMP%] {\n  width: 4.4rem;\n  height: 4.4rem;\n  margin: 0 auto;\n  display: grid;\n  place-items: center;\n  border-radius: 999px;\n  background: linear-gradient(180deg, #2566c0 0%, #1a56a7 100%);\n  color: #ffffff;\n  font-size: 2rem;\n  font-weight: 700;\n  box-shadow: 0 14px 30px rgba(27, 95, 169, 0.24);\n}\n\n.atencion-servicio__modal-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.atencion-servicio__modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.55rem;\n  font-size: 1.9rem;\n  line-height: 1.08;\n}\n\n.atencion-servicio__modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-700);\n  line-height: 1.65;\n}\n\n.atencion-servicio__monitor-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: 1.15rem 1.2rem;\n  border: 1px solid #d9e6f6;\n  border-radius: 1rem;\n  background: linear-gradient(180deg, #f5f9ff 0%, #edf4fd 100%);\n}\n\n.atencion-servicio__monitor-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.atencion-servicio__monitor-list[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 0.8rem;\n}\n\n.atencion-servicio__monitor-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10rem minmax(0, 1fr);\n  gap: 0.8rem;\n  align-items: center;\n}\n\n.atencion-servicio__monitor-item[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-700);\n  font-weight: 700;\n}\n\n.atencion-servicio__monitor-item[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: var(--color-text-900);\n}\n\n.atencion-servicio__elapsed[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--color-brand-900);\n  letter-spacing: 0.03em;\n}\n\n.atencion-servicio__modal-actions[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.atencion-servicio__finish-button[_ngcontent-%COMP%] {\n  min-width: 12.5rem;\n  background: linear-gradient(180deg, #d54e4e 0%, #be3737 100%);\n}\n\n@media (max-width: 1199px) {\n  .atencion-servicio__summary[_ngcontent-%COMP%], .atencion-servicio__filters[_ngcontent-%COMP%], .atencion-servicio__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .atencion-servicio__modal-panel[_ngcontent-%COMP%] {\n    width: min(100%, 36rem);\n  }\n  .atencion-servicio__report-grid[_ngcontent-%COMP%], .atencion-servicio__report-summary[_ngcontent-%COMP%], .atencion-servicio__monitor-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXRlbmNpb24vcGFnZXMvYXRlbmNpb24tc2VydmljaW8vYXRlbmNpb24tc2VydmljaW8tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsNkRBQUE7QUFDRjs7QUFFQTs7RUFFRSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLGVBQUE7QUFDRjs7QUFFQTs7RUFFRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsU0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTs7O0VBR0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsNkRBQUE7QUFDRjs7QUFFQTtFQUNFOzs7SUFHRSwwQkFBQTtFQUNGO0VBRUE7SUFDRSx1QkFBQTtFQUFGO0VBR0E7OztJQUdFLDBCQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hdGVuY2lvbi1zZXJ2aWNpbyB7XG4gIGdhcDogMS40cmVtO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2hlYWRpbmctbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuN3JlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19oZWFkaW5nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC05MDApO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX3N1bW1hcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y3ZmJmZiAwJSwgI2YyZjhmZiAxMDAlKTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19lbnRpdHksXG4uYXRlbmNpb24tc2VydmljaW9fX2NpdGl6ZW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuM3JlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19lbnRpdHkgc3Ryb25nLFxuLmF0ZW5jaW9uLXNlcnZpY2lvX19jaXRpemVuIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19lbnRpdHkgc3BhbjpsYXN0LWNoaWxkLFxuLmF0ZW5jaW9uLXNlcnZpY2lvX19jaXRpemVuIHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fZmlsdGVycyB7XG4gIHBhZGRpbmc6IDFyZW0gMS4ycmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG87XG4gIGdhcDogMC44cmVtO1xuICBhbGlnbi1pdGVtczogZW5kO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC40NXJlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19zZWFyY2ggc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDAgMC45cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2JhY2stYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbm90aWNlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjdyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbm90aWNlIHAsXG4uYXRlbmNpb24tc2VydmljaW9fX25vdGljZSBzdHJvbmcge1xuICBtYXJnaW46IDA7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbm90aWNlLS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjdlYTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDQsIDEzOCwgMTEsIDAuMik7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiA5NTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTEsIDMxLCA1NCwgMC41OCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX21vZGFsLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogbWluKDQycmVtLCAxMDAlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjRyZW07XG4gIHBhZGRpbmc6IDEuOXJlbSAxLjlyZW0gMS42cmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjRyZW07XG4gIGJveC1zaGFkb3c6IDAgMjRweCA2NHB4IHJnYmEoMTQsIDM0LCA1MiwgMC4yNCk7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fcmVwb3J0LW1vZGFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogbWluKDQwcmVtLCAxMDAlKTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuM3JlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDY0cHggcmdiYSgxNCwgMzQsIDUyLCAwLjI0KTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19yZXBvcnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX3JlcG9ydC1oZWFkZXIgaDIge1xuICBtYXJnaW46IDAuMzVyZW0gMCAwLjQ1cmVtO1xuICBmb250LXNpemU6IDEuNTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjA4O1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX3JlcG9ydC1oZWFkZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtNzAwKTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19yZXBvcnQtY2xvc2Uge1xuICB3aWR0aDogMi4ycmVtO1xuICBoZWlnaHQ6IDIuMnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtNzAwKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19yZXBvcnQtZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19yZXBvcnQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2ZpZWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjQ1cmVtO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2ZpZWxkIHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2ZpZWxkIGlucHV0LFxuLmF0ZW5jaW9uLXNlcnZpY2lvX19maWVsZCBzZWxlY3QsXG4uYXRlbmNpb24tc2VydmljaW9fX2ZpZWxkIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjhyZW0gMC45NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtOTAwKTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19maWVsZCB0ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDExMHB4O1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2ZpZWxkLWVycm9yIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19yZXBvcnQtc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuOTVyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS1tdXRlZCk7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fcmVwb3J0LXN1bW1hcnkgZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX3JlcG9ydC1zdW1tYXJ5IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtNzAwKTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19yZXBvcnQtYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbW9kYWwtaWNvbiB7XG4gIHdpZHRoOiA0LjRyZW07XG4gIGhlaWdodDogNC40cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyNTY2YzAgMCUsICMxYTU2YTcgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IHJnYmEoMjcsIDk1LCAxNjksIDAuMjQpO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX21vZGFsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19tb2RhbC1oZWFkZXIgaDIge1xuICBtYXJnaW46IDAgMCAwLjU1cmVtO1xuICBmb250LXNpemU6IDEuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMDg7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbW9kYWwtaGVhZGVyIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX21vbml0b3ItY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMS4xNXJlbSAxLjJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWU2ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNWY5ZmYgMCUsICNlZGY0ZmQgMTAwJSk7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbW9uaXRvci1jYXJkIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbW9uaXRvci1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19tb25pdG9yLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIG1pbm1heCgwLCAxZnIpO1xuICBnYXA6IDAuOHJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmF0ZW5jaW9uLXNlcnZpY2lvX19tb25pdG9yLWl0ZW0gZHQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTcwMCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbW9uaXRvci1pdGVtIGRkIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC05MDApO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2VsYXBzZWQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTkwMCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG5cbi5hdGVuY2lvbi1zZXJ2aWNpb19fbW9kYWwtYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXRlbmNpb24tc2VydmljaW9fX2ZpbmlzaC1idXR0b24ge1xuICBtaW4td2lkdGg6IDEyLjVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNkNTRlNGUgMCUsICNiZTM3MzcgMTAwJSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmF0ZW5jaW9uLXNlcnZpY2lvX19zdW1tYXJ5LFxuICAuYXRlbmNpb24tc2VydmljaW9fX2ZpbHRlcnMsXG4gIC5hdGVuY2lvbi1zZXJ2aWNpb19fZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuYXRlbmNpb24tc2VydmljaW9fX21vZGFsLXBhbmVsIHtcbiAgICB3aWR0aDogbWluKDEwMCUsIDM2cmVtKTtcbiAgfVxuXG4gIC5hdGVuY2lvbi1zZXJ2aWNpb19fcmVwb3J0LWdyaWQsXG4gIC5hdGVuY2lvbi1zZXJ2aWNpb19fcmVwb3J0LXN1bW1hcnksXG4gIC5hdGVuY2lvbi1zZXJ2aWNpb19fbW9uaXRvci1pdGVtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4598:
/*!****************************************************************!*\
  !*** ./src/app/features/atencion/services/atencion.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtencionService: () => (/* binding */ AtencionService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api-base.service */ 294);




class AtencionService {
  constructor(http, apiBaseService) {
    this.http = http;
    this.apiBaseService = apiBaseService;
  }
  crear(payload) {
    const finalPayload = this.buildCrearPayload(payload);
    console.debug('[AtencionService] Payload final crear', finalPayload);
    return this.http.post(this.apiBaseService.buildUrl('atenciones'), finalPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.normalizeAtencion(this.apiBaseService.unwrap(response))));
  }
  iniciar(atencionId) {
    return this.http.post(this.apiBaseService.buildUrl(`atenciones/${atencionId}/iniciar`), {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.normalizeAtencion(this.apiBaseService.unwrap(response))));
  }
  seleccionarEntidad(atencionId, payload) {
    const finalPayload = this.buildSeleccionarEntidadPayload(payload);
    return this.http.post(this.apiBaseService.buildUrl(`atenciones/${atencionId}/seleccionar-entidad`), finalPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.normalizeAtencion(this.apiBaseService.unwrap(response))));
  }
  seleccionarServicio(atencionId, payload) {
    const finalPayload = this.buildSeleccionarServicioPayload(payload);
    return this.http.post(this.apiBaseService.buildUrl(`atenciones/${atencionId}/seleccionar-servicio`), finalPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.normalizeAtencion(this.apiBaseService.unwrap(response))));
  }
  retorno(atencionId, payload) {
    const finalPayload = this.buildRetornoPayload(payload);
    return this.http.post(this.apiBaseService.buildUrl(`atenciones/${atencionId}/retorno`), finalPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.normalizeAtencion(this.apiBaseService.unwrap(response))));
  }
  finalizar(atencionId) {
    return this.http.post(this.apiBaseService.buildUrl(`atenciones/${atencionId}/finalizar`), {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.normalizeAtencion(this.apiBaseService.unwrap(response))));
  }
  buildCrearPayload(payload) {
    return {
      id_ciudadano: payload.ciudadanoId
    };
  }
  buildSeleccionarEntidadPayload(payload) {
    return {
      id_entidad: payload.entidadId
    };
  }
  buildSeleccionarServicioPayload(payload) {
    return {
      id_servicio: payload.servicioId
    };
  }
  buildRetornoPayload(payload) {
    return {
      observacion: payload.observacion ?? null,
      url_retorno: payload.urlRetorno ?? null
    };
  }
  normalizeAtencion(atencion) {
    const rawAtencion = atencion;
    return {
      ...rawAtencion,
      id: rawAtencion.id ?? rawAtencion.id_atencion ?? '',
      estado: rawAtencion.estado ?? rawAtencion.estado_actual ?? '',
      codigoAtencion: rawAtencion.codigoAtencion ?? rawAtencion.codigo_atencion ?? null,
      tokenAtencion: rawAtencion.tokenAtencion ?? rawAtencion.token_atencion ?? null,
      ciudadanoId: rawAtencion.ciudadanoId ?? rawAtencion.id_ciudadano ?? undefined,
      entidadId: rawAtencion.entidadId ?? rawAtencion.id_entidad ?? undefined,
      servicioId: rawAtencion.servicioId ?? rawAtencion.id_servicio ?? undefined,
      operadorNombre: rawAtencion.operadorNombre ?? rawAtencion.operador_nombre ?? rawAtencion.nombre_operador ?? null,
      fechaInicioAtencion: rawAtencion.fechaInicioAtencion ?? rawAtencion.fecha_inicio_atencion ?? null,
      fechaSeleccionEntidad: rawAtencion.fechaSeleccionEntidad ?? rawAtencion.fecha_seleccion_entidad ?? null,
      fechaSeleccionServicio: rawAtencion.fechaSeleccionServicio ?? rawAtencion.fecha_seleccion_servicio ?? null,
      urlServicio: rawAtencion.urlServicio ?? rawAtencion.url_servicio ?? rawAtencion.url_tramite ?? rawAtencion.url_externa ?? rawAtencion.enlace_servicio ?? null,
      urlRetorno: rawAtencion.urlRetorno ?? rawAtencion.url_retorno ?? null
    };
  }
  static {
    this.ɵfac = function AtencionService_Factory(t) {
      return new (t || AtencionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AtencionService,
      factory: AtencionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9819:
/*!******************************************************************!*\
  !*** ./src/app/features/atencion/services/ciudadanos.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CiudadanosService: () => (/* binding */ CiudadanosService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api-base.service */ 294);





class CiudadanosService {
  constructor(http, apiBaseService) {
    this.http = http;
    this.apiBaseService = apiBaseService;
  }
  buscar(payload) {
    const finalPayload = this.buildBuscarPayload(payload);
    if (!finalPayload) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Payload invalido: tipoDocumentoId y numeroDocumento son requeridos.'));
    }
    console.debug('[CiudadanosService] Payload final buscar', finalPayload);
    return this.http.post(this.apiBaseService.buildUrl('ciudadanos/buscar'), finalPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => this.mapLookupResponse(response)));
  }
  consultarPide(payload) {
    const finalPayload = this.buildBuscarPayload(payload);
    if (!finalPayload) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Payload invalido: tipoDocumentoId y numeroDocumento son requeridos.'));
    }
    console.debug('[CiudadanosService] Payload final consultarPide', finalPayload);
    return this.http.post(this.apiBaseService.buildUrl('ciudadanos/consultar-pide'), finalPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => this.mapLookupResponse(response)));
  }
  registrarManual(payload) {
    const finalPayload = this.buildManualPayload(payload);
    console.debug('[CiudadanosService] Payload final manual', finalPayload);
    return this.http.post(this.apiBaseService.buildUrl('ciudadanos/manual'), finalPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => this.normalizeCiudadano(this.apiBaseService.unwrap(response))));
  }
  mapLookupResponse(response) {
    const nextAction = this.normalizeNextAction(response.meta);
    const canRefreshFromPide = this.normalizeCanRefreshFromPide(response.meta);
    return {
      ciudadano: response.data ? this.normalizeCiudadano(response.data) : null,
      message: response.message || '',
      nextAction,
      canRefreshFromPide
    };
  }
  buildBuscarPayload(payload) {
    const tipoDocumentoId = this.normalizeId(payload.tipoDocumentoId);
    const numeroDocumento = payload.numeroDocumento?.trim();
    if (!tipoDocumentoId || !numeroDocumento) {
      return null;
    }
    return {
      tipoDocumentoId,
      numeroDocumento
    };
  }
  buildManualPayload(payload) {
    const apellidoPaterno = payload.apellidoPaterno?.trim() || '';
    const apellidoMaterno = payload.apellidoMaterno?.trim() || '';
    return {
      tipoDocumentoId: payload.tipoDocumentoId,
      numeroDocumento: payload.numeroDocumento?.trim() || '',
      nombres: payload.nombres?.trim() || '',
      apellidoPaterno,
      apellidoMaterno,
      sexo: payload.sexo?.trim() || '',
      apellidos: [apellidoPaterno, apellidoMaterno].filter(Boolean).join(' ')
    };
  }
  normalizeCiudadano(ciudadano) {
    const rawCiudadano = ciudadano;
    const apellidoPaterno = this.cleanString(rawCiudadano.apellidoPaterno ?? rawCiudadano.apellido_paterno);
    const apellidoMaterno = this.cleanString(rawCiudadano.apellidoMaterno ?? rawCiudadano.apellido_materno);
    const apellidos = this.cleanString(rawCiudadano.apellidos) || [apellidoPaterno, apellidoMaterno].filter(Boolean).join(' ') || null;
    const tipoDocumentoId = this.normalizeId(rawCiudadano.tipoDocumentoId ?? rawCiudadano.id_tipo_documento) ?? null;
    const fuenteOrigenInicial = this.cleanString(rawCiudadano.fuenteOrigenInicial ?? rawCiudadano.fuente_origen_inicial ?? rawCiudadano.fuente_origen);
    const fuenteUltimaActualizacion = this.cleanString(rawCiudadano.fuenteUltimaActualizacion ?? rawCiudadano.fuente_ultima_actualizacion);
    const fuente = this.cleanString(rawCiudadano.fuente) || fuenteUltimaActualizacion || fuenteOrigenInicial;
    return {
      ...rawCiudadano,
      id: rawCiudadano.id ?? rawCiudadano.id_ciudadano ?? undefined,
      nombres: rawCiudadano.nombres?.trim() || '',
      tipoDocumentoId,
      apellidoPaterno,
      apellidoMaterno,
      apellidos,
      numeroDocumento: this.cleanString(rawCiudadano.numeroDocumento ?? rawCiudadano.numero_documento),
      tipoDocumento: this.cleanString(rawCiudadano.tipoDocumento ?? rawCiudadano.tipo_documento),
      sexo: this.cleanString(rawCiudadano.sexo),
      direccion: this.cleanString(rawCiudadano.direccion ?? rawCiudadano.direccion_actual),
      fotoUrl: this.normalizeImageUrl(rawCiudadano.fotoUrl ?? rawCiudadano.foto_url),
      fuente: fuente || undefined,
      fuenteOrigenInicial,
      fuenteUltimaActualizacion
    };
  }
  normalizeNextAction(meta) {
    const rawValue = meta?.['next_action'] ?? meta?.['nextAction'];
    return typeof rawValue === 'string' ? rawValue : null;
  }
  normalizeCanRefreshFromPide(meta) {
    const rawValue = meta?.['can_refresh_from_pide'] ?? meta?.['canRefreshFromPide'];
    return this.normalizeBoolean(rawValue);
  }
  normalizeId(value) {
    if (value === null || value === undefined || value === '' || value === 'undefined' || value === 'null') {
      return null;
    }
    const parsedValue = Number(value);
    return Number.isFinite(parsedValue) ? parsedValue : null;
  }
  cleanString(value) {
    const normalizedValue = value?.trim();
    return normalizedValue ? normalizedValue : null;
  }
  normalizeImageUrl(value) {
    const normalizedValue = value?.trim();
    if (!normalizedValue) {
      return null;
    }
    if (/^https?:\/\//i.test(normalizedValue)) {
      return normalizedValue;
    }
    return normalizedValue;
  }
  normalizeBoolean(value) {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'number') {
      return value === 1;
    }
    if (typeof value === 'string') {
      const normalizedValue = value.trim().toLowerCase();
      return normalizedValue === '1' || normalizedValue === 'true';
    }
    return false;
  }
  static {
    this.ɵfac = function CiudadanosService_Factory(t) {
      return new (t || CiudadanosService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: CiudadanosService,
      factory: CiudadanosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9491:
/*!******************************************************************!*\
  !*** ./src/app/features/catalogos/services/catalogos.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosService: () => (/* binding */ CatalogosService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api-base.service */ 294);




class CatalogosService {
  constructor(http, apiBaseService) {
    this.http = http;
    this.apiBaseService = apiBaseService;
    this.serviciosCache = new Map();
  }
  getTiposDocumento(force = false) {
    if (!force && this.tiposDocumentoRequest$) {
      return this.tiposDocumentoRequest$;
    }
    this.tiposDocumentoRequest$ = this.http.get(this.apiBaseService.buildUrl('tipos-documento')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.apiBaseService.unwrap(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    return this.tiposDocumentoRequest$;
  }
  getEntidadesVisibles(force = false) {
    if (!force && this.entidadesRequest$) {
      return this.entidadesRequest$;
    }
    this.entidadesRequest$ = this.http.get(this.apiBaseService.buildUrl('entidades/visibles')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.apiBaseService.unwrap(response).map(item => this.normalizeEntidad(item))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    return this.entidadesRequest$;
  }
  getServicios(entidadId, force = false) {
    if (!force && this.serviciosCache.has(entidadId)) {
      return this.serviciosCache.get(entidadId);
    }
    const request$ = this.http.get(this.apiBaseService.buildUrl(`entidades/${entidadId}/servicios`)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.apiBaseService.unwrap(response).map(item => this.normalizeServicio(item))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    this.serviciosCache.set(entidadId, request$);
    return request$;
  }
  normalizeEntidad(entidad) {
    const rawEntidad = entidad;
    return {
      ...rawEntidad,
      id: rawEntidad.id ?? rawEntidad.id_entidad ?? '',
      codigo: rawEntidad.codigo?.trim() || rawEntidad.codigo_entidad?.trim() || rawEntidad.sigla?.trim() || rawEntidad.abreviatura?.trim() || null,
      nombre: rawEntidad.nombre?.trim() || rawEntidad.nombre_entidad?.trim() || 'Entidad sin nombre',
      alcance: rawEntidad.alcance || 'CENTRAL',
      region: rawEntidad.region?.trim() || rawEntidad.region_nombre?.trim() || null,
      descripcion: rawEntidad.descripcion?.trim() || rawEntidad.descripcion_entidad?.trim() || null,
      logoUrl: this.normalizeImageUrl(rawEntidad.logoUrl || rawEntidad.logo_url || rawEntidad.logo || null)
    };
  }
  normalizeServicio(servicio) {
    const rawServicio = servicio;
    return {
      ...rawServicio,
      id: rawServicio.id ?? rawServicio.id_servicio ?? '',
      nombre: rawServicio.nombre?.trim() || rawServicio.nombre_servicio?.trim() || 'Servicio sin nombre',
      descripcion: rawServicio.descripcion?.trim() || null,
      canal: rawServicio.canal?.trim() || null,
      disponibilidad: rawServicio.disponibilidad?.trim() || null,
      url: rawServicio.url?.trim() || rawServicio.url_servicio?.trim() || rawServicio.url_tramite?.trim() || rawServicio.url_externa?.trim() || rawServicio.enlace?.trim() || rawServicio.link?.trim() || null,
      urlRetorno: rawServicio.urlRetorno?.trim() || rawServicio.url_retorno?.trim() || null,
      logoUrl: this.normalizeImageUrl(rawServicio.logoUrl || rawServicio.logo_url || rawServicio.logo || rawServicio.icono_url || rawServicio.icono || null)
    };
  }
  normalizeImageUrl(value) {
    const normalizedValue = value?.trim();
    if (!normalizedValue) {
      return null;
    }
    if (/^https?:\/\//i.test(normalizedValue)) {
      return normalizedValue;
    }
    return normalizedValue;
  }
  static {
    this.ɵfac = function CatalogosService_Factory(t) {
      return new (t || CatalogosService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: CatalogosService,
      factory: CatalogosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_atencion_atencion_module_ts.js.map