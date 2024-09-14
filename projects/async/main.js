(self["webpackChunkAsync"] = self["webpackChunkAsync"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);




const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4326);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment/environment */ 828);
/* harmony import */ var _helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/language/language.component */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loading.service */ 4471);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4202);









function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(loadingService, dialog) {
        this.loadingService = loadingService;
        this.dialog = dialog;
        this.isLoading = false;
    }
    ngOnInit() {
        this.listenToLoading();
        let storedLanguage = localStorage.getItem('language');
        _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Language = storedLanguage !== null && storedLanguage !== void 0 ? storedLanguage : _helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__.Languages.English;
        if (!storedLanguage) {
            this.dialog.open(_helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__.LanguageComponent);
        }
    }
    listenToLoading() {
        this.loadingService.loadingSub.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(0)).subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["class", "loading-container", 4, "ngIf"], [1, "loading-container"], ["color", "primary", "mode", "indeterminate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 5;\n}"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 7322);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/request.interceptor */ 1525);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 2379);
/* harmony import */ var _interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/authorization.interceptor */ 3667);
/* harmony import */ var _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/helpers.module */ 9480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'always' } },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthorizationInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_3__.RequestInterceptor, multi: true },
    ], imports: [[
            _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_6__.HelpersModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent], imports: [_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_6__.HelpersModule] }); })();


/***/ }),

/***/ 828:
/*!********************************************!*\
  !*** ./src/app/environment/environment.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Environment": () => (/* binding */ Environment)
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ 5067);

class Environment {
}
Environment.AuthorizationType = _home_home_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizationType.None;


/***/ }),

/***/ 3455:
/*!**********************************************!*\
  !*** ./src/app/helpers/extensions.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Extensions": () => (/* binding */ Extensions)
/* harmony export */ });
var Extensions;
(function (Extensions) {
    function distinct(list, getKey) {
        return list.map(getKey).filter((value, index, self) => self.indexOf(value) === index && ![null, undefined].includes(value));
    }
    Extensions.distinct = distinct;
})(Extensions || (Extensions = {}));


/***/ }),

/***/ 9480:
/*!*******************************************!*\
  !*** ./src/app/helpers/helpers.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpersModule": () => (/* binding */ HelpersModule)
/* harmony export */ });
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ 7332);
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/language.component */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);





class HelpersModule {
}
HelpersModule.ɵfac = function HelpersModule_Factory(t) { return new (t || HelpersModule)(); };
HelpersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HelpersModule });
HelpersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HelpersModule, { declarations: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent,
        _language_language_component__WEBPACK_IMPORTED_MODULE_2__.LanguageComponent], imports: [_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule], exports: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent, _language_language_component__WEBPACK_IMPORTED_MODULE_2__.LanguageComponent] }); })();


/***/ }),

/***/ 5134:
/*!********************************************************!*\
  !*** ./src/app/helpers/language/language.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent),
/* harmony export */   "Languages": () => (/* binding */ Languages)
/* harmony export */ });
/* harmony import */ var src_app_environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/environment/environment */ 828);
/* harmony import */ var _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/json/translations.json */ 7500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 7322);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 4107);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7423);











function LanguageComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.Translations[language_r1]);
} }
class LanguageComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.languages = Object.keys(Languages).map(key => key);
    }
    onDismiss() {
        localStorage.setItem('language', src_app_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Language);
        this.dialogRef.close();
    }
    get Environment() {
        return src_app_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment;
    }
    get Translations() {
        return _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_1__[src_app_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Language];
    }
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
LanguageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 11, vars: 3, consts: [[1, "mat-dialog-content"], [1, "mat-title"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "primary", "tabindex", "-1", 3, "click"], [3, "value"]], template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LanguageComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.Environment.Language = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LanguageComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LanguageComponent_Template_button_click_9_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Translations["Language"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.Environment.Language);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  text-align: center;\n}"] });
var Languages;
(function (Languages) {
    Languages["English"] = "English";
    Languages["Portuguese"] = "Portuguese";
})(Languages || (Languages = {}));


/***/ }),

/***/ 7332:
/*!****************************************************************!*\
  !*** ./src/app/helpers/notification/notification.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/environment/environment */ 828);
/* harmony import */ var _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/json/translations.json */ 7500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7423);








class NotificationComponent {
    constructor(dialogRef, notification) {
        this.dialogRef = dialogRef;
        this.notification = notification;
        this.title = '';
        this.message = '';
        this.icon = '';
        this.color = '';
        this.message = notification.message;
        this.title = notification.title;
        switch (notification.type) {
            case src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Error:
                this.title = this.Translations['ErrorTitle'];
                this.icon = 'error';
                this.color = 'warn';
                break;
            case src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Info:
                this.icon = 'info';
                this.color = 'primary';
                break;
        }
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
    get Translations() {
        return _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__[src_app_environment_environment__WEBPACK_IMPORTED_MODULE_1__.Environment.Language];
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 11, vars: 8, consts: [[1, "mat-dialog-content"], [3, "color"], ["mat-dialog-title", ""], [1, "mat-body-1"], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "tabindex", "-1", 3, "color", "click"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p")(2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_9_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("icon-", ctx.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 350px !important;\n  color: darkslategray !important;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  font-size: 80px;\n  opacity: 0.7;\n}\n\n.icon-error[_ngcontent-%COMP%] {\n  animation: spiral 700ms;\n}\n\nh1[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, Helvetica Neue, sans-serif;\n}\n\n@keyframes spiral {\n  from {\n    transform: scale(0) rotate(-360deg);\n  }\n  to {\n    transform: scale(1);\n  }\n}"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationType": () => (/* binding */ AuthorizationType),
/* harmony export */   "BodyType": () => (/* binding */ BodyType),
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent),
/* harmony export */   "RequestType": () => (/* binding */ RequestType),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/environment */ 828);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/language/language.component */ 5134);
/* harmony import */ var _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/translations.json */ 7500);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 5439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_extensions_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/extensions.module */ 3455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/request.service */ 9854);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 2313);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/notification.service */ 2013);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 9287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 4594);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 2181);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 7322);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 4107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 8833);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 7238);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/accordion */ 3262);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ 3251);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 9814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 3075);




























const _c0 = ["request"];
const _c1 = ["body"];
function HomeComponent_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](type_r15);
} }
function HomeComponent_small_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.Translations["EmptyHistory"], " ");
} }
function HomeComponent_cdk_accordion_item_52_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_a_6_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const record_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r20.autofillFields(record_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 48)(8, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_a_6_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const record_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r22.shareRecord(record_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_a_6_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const record_r19 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r23.removeRecord(record_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const record_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", _r17.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](record_r19.status == ctx_r18.Status.Error ? "history-record error" : "history-record");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](record_r19.type.toLocaleLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](record_r19.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](record_r19.url);
} }
function HomeComponent_cdk_accordion_item_52_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "cdk-accordion-item", 41, 42)(2, "mat-card", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_Template_mat_card_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1); return _r17.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HomeComponent_cdk_accordion_item_52_a_6_Template, 14, 8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r16 = ctx.$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_r17.expanded ? "arrow_drop_down" : "arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", date_r16.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", date_r16.records);
} }
function HomeComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_button_53_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.getHistory(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.Translations["LoadMore"]);
} }
function HomeComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.Translations["Body"]);
} }
function HomeComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_div_65_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4); return _r28.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function HomeComponent_div_65_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r31.uploadFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r8.file.name ? ctx_r8.file == null ? null : ctx_r8.file.name : ctx_r8.Translations["ChooseFile"], " ");
} }
function HomeComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r10.Translations["Headers"]);
} }
function HomeComponent_mat_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r32 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r11.Translations[type_r32], " ");
} }
function HomeComponent_mat_form_field_78_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HomeComponent_mat_form_field_78_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.Environment.Token = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r12.Translations["BearerToken"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r12.Environment.Token);
} }
function HomeComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.Translations["Others"]);
} }
class HomeComponent {
    constructor(requestService, sanitizer, notificationService, dialog, clipboard, route, router) {
        var _a;
        this.requestService = requestService;
        this.sanitizer = sanitizer;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.clipboard = clipboard;
        this.route = route;
        this.router = router;
        this.requestType = RequestType.GET;
        this.requestTypes = Object.keys(RequestType).map(key => key);
        this.authorizationTypes = Object.keys(AuthorizationType).map(key => key);
        this.history = [];
        this.response = {};
        this.bodyType = BodyType.JSON;
        this.file = {};
        this.dates = [];
        this.showingFullHistory = false;
        this.requestRepeatCount = 0;
        this.history = JSON.parse((_a = localStorage.getItem('history')) !== null && _a !== void 0 ? _a : '[]');
        this.getHistory(3);
    }
    ngAfterViewInit() {
        var _a, _b, _c;
        const requestType = this.route.snapshot.queryParams['requestType'];
        const url = this.route.snapshot.queryParams['url'];
        const body = (_a = this.route.snapshot.queryParams['body']) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"');
        const authType = this.route.snapshot.queryParams['authType'];
        this.requestType = requestType !== null && requestType !== void 0 ? requestType : this.requestType;
        this.requestInput.nativeElement.value = url !== null && url !== void 0 ? url : (_b = this.requestInput.nativeElement.value) === null || _b === void 0 ? void 0 : _b.trim();
        this.bodyInput.nativeElement.value = body !== null && body !== void 0 ? body : (_c = this.bodyInput.nativeElement.value) === null || _c === void 0 ? void 0 : _c.trim();
        _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.AuthorizationType = authType !== null && authType !== void 0 ? authType : AuthorizationType.None;
        _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Token = undefined;
        this.beautify(this.bodyInput);
        this.router.navigate(['/async'], { relativeTo: this.route, replaceUrl: true });
    }
    sendRequest(url, body) {
        if ((url === null || url === void 0 ? void 0 : url.length) <= 0 || !url.toLowerCase().startsWith('http')) {
            this.notificationService.error(this.Translations['NoHttpProtocol']);
            return;
        }
        switch (this.bodyType) {
            case BodyType.File:
                body = this.file.body;
                break;
        }
        let requestLog = {
            type: this.requestType,
            url: url,
            body: body,
            status: Status.Pending,
            authType: _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.AuthorizationType,
            token: _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Token,
            date: new Date()
        };
        this.history.push(requestLog);
        let splitUrl = url.split('?');
        let request = splitUrl[0];
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams();
        let observe;
        let urlParams = new URLSearchParams(`${splitUrl[1]}`);
        urlParams.forEach((value, key) => {
            params = params.append(key, value);
        });
        switch (this.requestType) {
            case RequestType.GET:
                observe = this.requestService.get(request, params);
                break;
            case RequestType.PUT:
                observe = this.requestService.put(request, params, body);
                break;
            case RequestType.PATCH:
                observe = this.requestService.patch(request, params, body);
                break;
            case RequestType.POST:
                observe = this.requestService.post(request, params, body);
                break;
            case RequestType.DELETE:
                observe = this.requestService.delete(request, params, body);
                break;
        }
        let performedRequestsCount = 0;
        do {
            this.performRequest(observe, requestLog);
            performedRequestsCount++;
        } while (performedRequestsCount < this.requestRepeatCount);
    }
    performRequest(observe, requestLog) {
        observe.subscribe({
            next: (response) => {
                this.history.find(i => i == requestLog).status = Status.Success;
                this.response = response;
                localStorage.setItem('history', JSON.stringify(this.history));
                this.getHistory();
            },
            error: (error) => {
                this.history.find(i => i == requestLog).status = Status.Error;
                this.response = error;
                localStorage.setItem('history', JSON.stringify(this.history));
                this.getHistory();
            }
        });
    }
    beautify(field) {
        try {
            field.nativeElement.value = field.nativeElement.value ? JSON.stringify(JSON.parse(field.nativeElement.value), null, 4) : field.nativeElement.value;
        }
        catch (_a) { }
    }
    autofillFields(record) {
        var _a;
        this.requestType = record === null || record === void 0 ? void 0 : record.type;
        this.requestInput.nativeElement.value = record === null || record === void 0 ? void 0 : record.url;
        this.bodyInput.nativeElement.value = record === null || record === void 0 ? void 0 : record.body;
        _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.AuthorizationType = (_a = record.authType) !== null && _a !== void 0 ? _a : AuthorizationType.None;
        _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Token = record.token;
        this.beautify(this.bodyInput);
    }
    exportHistory() {
        return this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.history)));
    }
    importHistory(e) {
        let file = e.target.files[0];
        if (file && file.type != 'application/json') {
            this.notificationService.error(`${this.Translations['CannotImport']} ${file.type}.`);
            return;
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            let json = event.target.result;
            localStorage.setItem('history', json);
            this.history = JSON.parse(json);
            this.getHistory();
        });
        reader.readAsText(file, "UTF-8");
    }
    login() {
        this.notificationService.info(this.Translations['Not just yet!'], this.Translations['Very soon this feature will be available']);
    }
    changeLanguage() {
        this.dialog.open(_helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__.LanguageComponent);
    }
    getHistory(count = 0) {
        let dateList = [];
        let distinctDates = _helpers_extensions_module__WEBPACK_IMPORTED_MODULE_4__.Extensions.distinct(this.history, i => new Date(i.date).toDateString());
        count = distinctDates.length <= 3 ? 3 : count;
        distinctDates.reverse().slice(0, this.dates.length + count).forEach(date => {
            let label = new Date(date).toLocaleDateString(this.Translations['Local']);
            if (date.match(new Date().toDateString())) {
                label = this.Translations['Today'];
            }
            else if (date.match(moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-1, 'days').toDate().toDateString())) {
                label = this.Translations['Yesterday'];
            }
            dateList.push({
                label: label,
                date: date,
                records: this.history.filter(i => date.match(new Date(i.date).toDateString()))
                    .sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
            });
        });
        this.dates = dateList.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
        this.showingFullHistory = distinctDates.length == this.dates.length;
    }
    uploadFile(e) {
        let file = e.target.files[0];
        if (this.file == null) {
            this.notificationService.error(this.Translations['NoFileSelected']);
            return;
        }
        this.file.name = file.name;
        const formData = new FormData();
        formData.append('file', file);
        this.file.body = formData;
    }
    removeRecord(record) {
        this.history.splice(this.history.indexOf(record), 1);
        localStorage.setItem('history', JSON.stringify(this.history));
        this.getHistory();
        this.notificationService.notifyChange(this.Translations['Deleted']);
    }
    shareRecord(record) {
        let sharedComponent = `https://gilmarferrari.github.io/portfolio/projects/async?requestType=${record.type}&url=${record.url}&body=${record.body}&authType=${record.authType}`;
        sharedComponent = sharedComponent.replace(/\s/g, "").replace(/"/g, "'");
        this.clipboard.copy(sharedComponent);
        this.notificationService.notifyChange(this.Translations['Copied']);
    }
    get responseExplanation() {
        if (this.response.toString().includes('Method Not Allowed')) {
            return this.Translations[this.response.toString()];
        }
        else if (this.response.toString().includes('Unauthorized')) {
            return this.Translations[this.response.toString()];
        }
        else if (this.response.toString().includes('Forbidden')) {
            return this.Translations[this.response.toString()];
        }
        else if (this.response.toString().includes('Not Found')) {
            return this.Translations[this.response.toString()];
        }
        return '';
    }
    get tokenExpiration() {
        var _a;
        if (_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.AuthorizationType == AuthorizationType.None || !((_a = _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Token) === null || _a === void 0 ? void 0 : _a.split('.')[1])) {
            return { prefix: 'NoToken' };
        }
        const jwtToken = JSON.parse(atob(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Token.split('.')[1]));
        const expires = new Date((jwtToken === null || jwtToken === void 0 ? void 0 : jwtToken.exp) * 1000);
        return {
            prefix: expires <= moment__WEBPACK_IMPORTED_MODULE_3___default()().toDate() ? 'ExpiredAt' : 'ExpiresAt',
            expires: expires
        };
    }
    get Environment() {
        return _environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment;
    }
    get Status() {
        return Status;
    }
    get BodyType() {
        return BodyType;
    }
    get AuthType() {
        return AuthorizationType;
    }
    get Translations() {
        return _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__[_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Language];
    }
    get Math() {
        return Math;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.requestInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.bodyInput = _t.first);
    } }, decls: 105, vars: 41, consts: [["color", "primary"], [1, "row", "vertical-center", "gap-md"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "href", "https://github.com/gilmarferrari/Async"], [1, "primary"], ["mat-menu-item", "", "download", "async_history.json", 3, "disabled", "href"], ["mat-menu-item", "", 3, "click"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], ["dialog", ""], [1, "container"], [1, "row", "vertical-center", "gap-sm", "content"], [1, "request-field"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "full-container"], ["matInput", "", 3, "placeholder"], ["request", ""], ["matSuffix", "", "mat-icon-button", "", 3, "matTooltip", "keydown", "click"], [1, "history"], ["multi", ""], ["class", "history-record horizontal-align tip", 4, "ngIf"], ["expanded", "", 4, "ngFor", "ngForOf"], ["mat-button", "", "class", "history-load-more horizontal-align", 3, "click", 4, "ngIf"], ["dynamicHeight", "", 1, "body"], ["mat-tab-label", ""], ["color", "primary", 1, "row", "vertical-center", "gap-md", "radio-group", 3, "ngModel", "ngModelChange"], ["value", "Json"], ["value", "File"], [4, "ngIf"], ["matInput", "", "rows", "10", "id", "body", 3, "placeholder", "hidden", "input"], ["body", ""], ["matInput", "", "type", "number", "min", "0", "max", "1000", "step", "1", "maxlength", "4", 3, "ngModel", "blur", "ngModelChange"], ["repeatCount", ""], [1, "result"], ["matInput", "", "readonly", ""], [1, "tip"], [1, "mat-body-1", "background-alert"], [1, "large-icon"], [3, "value"], [1, "history-record", "horizontal-align", "tip"], ["expanded", ""], ["accordionItem", "cdkAccordionItem"], [1, "accordion-item-header", "mat-elevation-z2", 3, "click"], ["class", "row history-record-actions", 4, "ngFor", "ngForOf"], [1, "row", "history-record-actions"], ["mat-button", "", 3, "click"], [1, "light"], [1, "vertical-align", "history-actions"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", 1, "history-load-more", "horizontal-align", 3, "click"], ["type", "file", "hidden", "", 3, "change"], ["bodyDialog", ""], ["matInput", "", 3, "ngModel", "ngModelChange"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "cloud_sync");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 2)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "tune");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-menu", null, 3)(11, "a", 4)(12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 6)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](37); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_26_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_31_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_36_listener($event) { return ctx.importHistory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 10)(39, "div", 11)(40, "mat-form-field", 12)(41, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_41_listener($event) { return ctx.requestType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, HomeComponent_mat_option_42_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function HomeComponent_Template_button_keydown_46_listener() { return false; })("click", function HomeComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](45); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](67); return ctx.sendRequest(_r3.value, _r9.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "aside", 19)(50, "cdk-accordion", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, HomeComponent_small_51_Template, 2, 1, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, HomeComponent_cdk_accordion_item_52_Template, 7, 3, "cdk-accordion-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, HomeComponent_button_53_Template, 3, 1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-tab-group", 24)(55, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, HomeComponent_ng_template_56_Template, 2, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-radio-group", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_radio_group_ngModelChange_57_listener($event) { return ctx.bodyType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-radio-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-radio-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-form-field", 15)(63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, HomeComponent_div_65_Template, 5, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "textarea", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function HomeComponent_Template_textarea_input_66_listener() { return ctx.beautify(ctx.bodyInput); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, HomeComponent_ng_template_70_Template, 2, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 11)(73, "mat-form-field")(74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_76_listener($event) { return ctx.Environment.AuthorizationType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, HomeComponent_mat_option_77_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, HomeComponent_mat_form_field_78_Template, 4, 2, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](81, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, HomeComponent_ng_template_83_Template, 2, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 11)(86, "mat-form-field")(87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HomeComponent_Template_input_blur_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](90); return _r14.value = ctx.Math.round(_r14.value); })("ngModelChange", function HomeComponent_Template_input_ngModelChange_89_listener($event) { return ctx.requestRepeatCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "mat-form-field", 34)(92, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](96, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](97, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "small", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "p", 37)(101, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "screenshot_monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["SourceCode"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.history.length <= 0)("href", ctx.exportHistory(), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["ExportHistory"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["ImportHistory"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Language"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Login"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.requestType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.requestTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx.Translations["RequestPlaceholder"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", ctx.Translations["RequestButtonTooltip"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dates.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showingFullHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.bodyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["JSON"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["File"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Body"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.bodyType == ctx.BodyType.File);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx.Translations["BodyPlaceholder"])("hidden", ctx.bodyType != ctx.BodyType.JSON);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Authorization"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.Environment.AuthorizationType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.authorizationTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Environment.AuthorizationType == ctx.AuthType.Bearer);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]((ctx.tokenExpiration == null ? null : ctx.tokenExpiration.prefix) == "ExpiredAt" ? "tip delete" : "tip");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.Translations[ctx.tokenExpiration == null ? null : ctx.tokenExpiration.prefix], " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](81, 36, ctx.tokenExpiration == null ? null : ctx.tokenExpiration.expires, ctx.Translations["DateTimeFormat"]), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["RepeatRequest"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.requestRepeatCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Response"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](96, 39, ctx.response));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.responseExplanation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["UnsupportedResolution"]);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_23__.CdkAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_23__.CdkAccordionItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MaxLengthValidator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.JsonPipe], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.history[_ngcontent-%COMP%] {\n  width: 300px;\n  overflow-x: hidden;\n  border-left: 1px solid lightgray;\n  float: right;\n  position: absolute;\n  right: 5px;\n  top: 72px;\n  bottom: 5px;\n  height: calc(100% - 80px);\n  background-color: #f7f7f7b0;\n}\n\n@media (max-width: 900px) {\n  .history[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    width: calc(100% - 10px) !important;\n    margin: 0px 5px 0px 5px !important;\n  }\n  .content[_ngcontent-%COMP%]   .request-field[_ngcontent-%COMP%] {\n    width: 100px !important;\n  }\n\n  .body[_ngcontent-%COMP%] {\n    width: calc(100% - 10px) !important;\n    margin: 0px 5px 0px 5px !important;\n  }\n\n  .result[_ngcontent-%COMP%] {\n    width: calc(100% - 10px) !important;\n    margin: 0px 5px 0px 5px !important;\n  }\n}\n\n@media (max-width: 360px) {\n  .container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .background-alert[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.history-record[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: start;\n}\n\n.history-load-more[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n  height: 50px;\n}\n\n.history-record-actions[_ngcontent-%COMP%]:hover   .history-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 36px;\n  animation: fade-in 300ms forwards 200ms;\n}\n\n@keyframes fade-in {\n  to {\n    margin-right: 0px;\n  }\n}\n\n.history-actions[_ngcontent-%COMP%] {\n  display: none;\n  float: right;\n  gap: 2px;\n  flex-direction: row;\n  justify-items: center;\n  margin-right: -80px;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: calc(100% - 315px);\n  margin: 0px 310px 0px 5px;\n}\n\n.body[_ngcontent-%COMP%] {\n  width: calc(100% - 320px);\n  margin: -10px 310px 0px 5px;\n  border-radius: 5px;\n  font-size: 13px;\n}\n\n.result[_ngcontent-%COMP%] {\n  width: calc(100% - 320px);\n  height: calc(100vh - 455px);\n  margin: -10px 310px 0px 5px;\n  border-radius: 5px;\n  font-size: 13px;\n  overflow: visible;\n}\n\n.result[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: -moz-pre-wrap;\n  white-space: pre-wrap;\n  max-height: calc(100vh - 495px);\n  min-height: 60px;\n  margin: -5px 0px -10px 0px;\n  overflow: auto;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #f15c51;\n  text-decoration: line-through;\n}\n\n.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f15c51;\n}\n\n.light[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: 400;\n}\n\n.accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.accordion-item-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  height: 60px;\n  padding-left: 10px;\n}\n\n.tip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: gray;\n}\n\n#body[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.get[_ngcontent-%COMP%] {\n  color: #0cbb52;\n}\n\n.put[_ngcontent-%COMP%] {\n  color: #097bed;\n}\n\n.patch[_ngcontent-%COMP%] {\n  color: #0d788b;\n}\n\n.post[_ngcontent-%COMP%] {\n  color: #ff8800;\n}\n\n.delete[_ngcontent-%COMP%] {\n  color: #eb2013;\n}"] });
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "GET";
    RequestType["PUT"] = "PUT";
    RequestType["PATCH"] = "PATCH";
    RequestType["POST"] = "POST";
    RequestType["DELETE"] = "DELETE";
})(RequestType || (RequestType = {}));
var AuthorizationType;
(function (AuthorizationType) {
    AuthorizationType["None"] = "None";
    AuthorizationType["Bearer"] = "Bearer";
})(AuthorizationType || (AuthorizationType = {}));
var Status;
(function (Status) {
    Status["Success"] = "Success";
    Status["Error"] = "Error";
    Status["Pending"] = "Pending";
})(Status || (Status = {}));
var BodyType;
(function (BodyType) {
    BodyType["JSON"] = "Json";
    BodyType["File"] = "File";
})(BodyType || (BodyType = {}));


/***/ }),

/***/ 3667:
/*!***********************************************************!*\
  !*** ./src/app/interceptors/authorization.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationInterceptor": () => (/* binding */ AuthorizationInterceptor)
/* harmony export */ });
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/environment */ 828);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



class AuthorizationInterceptor {
    constructor() { }
    intercept(request, next) {
        if (_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.AuthorizationType != _home_home_component__WEBPACK_IMPORTED_MODULE_1__.AuthorizationType.None) {
            request = request.clone({
                setHeaders: { Authorization: `${_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.AuthorizationType} ${_environment_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.Token}` }
            });
        }
        return next.handle(request);
    }
}
AuthorizationInterceptor.ɵfac = function AuthorizationInterceptor_Factory(t) { return new (t || AuthorizationInterceptor)(); };
AuthorizationInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthorizationInterceptor, factory: AuthorizationInterceptor.ɵfac });


/***/ }),

/***/ 2379:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
            const error = (err && err.error && err.error.message) || err.statusText;
            console.error(err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 1525:
/*!*****************************************************!*\
  !*** ./src/app/interceptors/request.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestInterceptor": () => (/* binding */ RequestInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loading.service */ 4471);





class RequestInterceptor {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    intercept(request, next) {
        this.loadingService.setLoading(true, request.url);
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            this.loadingService.setLoading(false, request.url);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((evt) => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
                this.loadingService.setLoading(false, request.url);
            }
            return evt;
        }));
    }
}
RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) { return new (t || RequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService)); };
RequestInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RequestInterceptor, factory: RequestInterceptor.ɵfac });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 1079);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 7544);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 7399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 9832);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 7446);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 6688);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ 1150);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 6856);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 4834);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 288);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 3954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 8833);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 4623);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 2181);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 6087);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 5899);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 773);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 9814);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 4107);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 2638);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 8029);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2368);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 7261);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ 4847);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 8279);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 3251);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ 4594);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 7238);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tree */ 149);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2313);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3646);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/layout */ 5113);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/accordion */ 3262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);










































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__.LayoutModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__.CdkAccordionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__.LayoutModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__.CdkAccordionModule] }); })();


/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);


class LoadingService {
    constructor() {
        this.loadingSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.loadingMap = new Map();
    }
    setLoading(loading, url) {
        if (loading) {
            this.loadingMap.set(url, loading);
            this.loadingSub.next(true);
        }
        else if (!loading && this.loadingMap.has(url)) {
            this.loadingMap.delete(url);
        }
        if (this.loadingMap.size === 0) {
            this.loadingSub.next(false);
        }
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService),
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType)
/* harmony export */ });
/* harmony import */ var _helpers_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/notification/notification.component */ 7332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 7261);




class NotificationService {
    constructor(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    error(message) {
        this.dialog.open(_helpers_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent, { data: { message: message, type: NotificationType.Error } });
    }
    info(title, message) {
        this.dialog.open(_helpers_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent, { data: { title: title, message: message, type: NotificationType.Info } });
    }
    notifyChange(message) {
        this.snackBar.open(message, 'OK', { duration: 2000 });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Error"] = 0] = "Error";
    NotificationType[NotificationType["Info"] = 1] = "Info";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ 9854:
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);



class RequestService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
    }
    get(request, params) {
        return this.http.get(request, { params: params }).pipe();
    }
    put(request, params, body) {
        return this.http.put(request, body, { params: params, headers: this.headers }).pipe();
    }
    patch(request, params, body) {
        return this.http.patch(request, body, { params: params, headers: this.headers }).pipe();
    }
    post(request, params, body) {
        return this.http.post(request, body, { params: params, headers: this.headers }).pipe();
    }
    delete(request, params, body) {
        return this.http.delete(request, { params: params, body: body, headers: this.headers }).pipe();
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);



(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 7088,
	"./af.js": 7088,
	"./ar": 7038,
	"./ar-dz": 2502,
	"./ar-dz.js": 2502,
	"./ar-kw": 128,
	"./ar-kw.js": 128,
	"./ar-ly": 4519,
	"./ar-ly.js": 4519,
	"./ar-ma": 5443,
	"./ar-ma.js": 5443,
	"./ar-sa": 7642,
	"./ar-sa.js": 7642,
	"./ar-tn": 8592,
	"./ar-tn.js": 8592,
	"./ar.js": 7038,
	"./az": 1213,
	"./az.js": 1213,
	"./be": 9191,
	"./be.js": 9191,
	"./bg": 322,
	"./bg.js": 322,
	"./bm": 8042,
	"./bm.js": 8042,
	"./bn": 9620,
	"./bn-bd": 5903,
	"./bn-bd.js": 5903,
	"./bn.js": 9620,
	"./bo": 9645,
	"./bo.js": 9645,
	"./br": 5020,
	"./br.js": 5020,
	"./bs": 4792,
	"./bs.js": 4792,
	"./ca": 7980,
	"./ca.js": 7980,
	"./cs": 6466,
	"./cs.js": 6466,
	"./cv": 365,
	"./cv.js": 365,
	"./cy": 2092,
	"./cy.js": 2092,
	"./da": 7387,
	"./da.js": 7387,
	"./de": 4307,
	"./de-at": 9459,
	"./de-at.js": 9459,
	"./de-ch": 3694,
	"./de-ch.js": 3694,
	"./de.js": 4307,
	"./dv": 9659,
	"./dv.js": 9659,
	"./el": 3460,
	"./el.js": 3460,
	"./en-au": 4369,
	"./en-au.js": 4369,
	"./en-ca": 530,
	"./en-ca.js": 530,
	"./en-gb": 9998,
	"./en-gb.js": 9998,
	"./en-ie": 3391,
	"./en-ie.js": 3391,
	"./en-il": 5414,
	"./en-il.js": 5414,
	"./en-in": 9615,
	"./en-in.js": 9615,
	"./en-nz": 1248,
	"./en-nz.js": 1248,
	"./en-sg": 3767,
	"./en-sg.js": 3767,
	"./eo": 4530,
	"./eo.js": 4530,
	"./es": 6866,
	"./es-do": 8944,
	"./es-do.js": 8944,
	"./es-mx": 9116,
	"./es-mx.js": 9116,
	"./es-us": 3609,
	"./es-us.js": 3609,
	"./es.js": 6866,
	"./et": 6725,
	"./et.js": 6725,
	"./eu": 7931,
	"./eu.js": 7931,
	"./fa": 6417,
	"./fa.js": 6417,
	"./fi": 944,
	"./fi.js": 944,
	"./fil": 1766,
	"./fil.js": 1766,
	"./fo": 5867,
	"./fo.js": 5867,
	"./fr": 1636,
	"./fr-ca": 6848,
	"./fr-ca.js": 6848,
	"./fr-ch": 7773,
	"./fr-ch.js": 7773,
	"./fr.js": 1636,
	"./fy": 4940,
	"./fy.js": 4940,
	"./ga": 1402,
	"./ga.js": 1402,
	"./gd": 6924,
	"./gd.js": 6924,
	"./gl": 6398,
	"./gl.js": 6398,
	"./gom-deva": 2457,
	"./gom-deva.js": 2457,
	"./gom-latn": 2545,
	"./gom-latn.js": 2545,
	"./gu": 2641,
	"./gu.js": 2641,
	"./he": 7536,
	"./he.js": 7536,
	"./hi": 6335,
	"./hi.js": 6335,
	"./hr": 7458,
	"./hr.js": 7458,
	"./hu": 6540,
	"./hu.js": 6540,
	"./hy-am": 5283,
	"./hy-am.js": 5283,
	"./id": 8780,
	"./id.js": 8780,
	"./is": 4205,
	"./is.js": 4205,
	"./it": 4211,
	"./it-ch": 9985,
	"./it-ch.js": 9985,
	"./it.js": 4211,
	"./ja": 1003,
	"./ja.js": 1003,
	"./jv": 420,
	"./jv.js": 420,
	"./ka": 851,
	"./ka.js": 851,
	"./kk": 6074,
	"./kk.js": 6074,
	"./km": 3343,
	"./km.js": 3343,
	"./kn": 4799,
	"./kn.js": 4799,
	"./ko": 3549,
	"./ko.js": 3549,
	"./ku": 1037,
	"./ku.js": 1037,
	"./ky": 3125,
	"./ky.js": 3125,
	"./lb": 9586,
	"./lb.js": 9586,
	"./lo": 2349,
	"./lo.js": 2349,
	"./lt": 2400,
	"./lt.js": 2400,
	"./lv": 9991,
	"./lv.js": 9991,
	"./me": 8477,
	"./me.js": 8477,
	"./mi": 5118,
	"./mi.js": 5118,
	"./mk": 5943,
	"./mk.js": 5943,
	"./ml": 3849,
	"./ml.js": 3849,
	"./mn": 1977,
	"./mn.js": 1977,
	"./mr": 6184,
	"./mr.js": 6184,
	"./ms": 485,
	"./ms-my": 4524,
	"./ms-my.js": 4524,
	"./ms.js": 485,
	"./mt": 6681,
	"./mt.js": 6681,
	"./my": 2024,
	"./my.js": 2024,
	"./nb": 2688,
	"./nb.js": 2688,
	"./ne": 8914,
	"./ne.js": 8914,
	"./nl": 1758,
	"./nl-be": 2272,
	"./nl-be.js": 2272,
	"./nl.js": 1758,
	"./nn": 1510,
	"./nn.js": 1510,
	"./oc-lnc": 2797,
	"./oc-lnc.js": 2797,
	"./pa-in": 7944,
	"./pa-in.js": 7944,
	"./pl": 1605,
	"./pl.js": 1605,
	"./pt": 4225,
	"./pt-br": 3840,
	"./pt-br.js": 3840,
	"./pt.js": 4225,
	"./ro": 5128,
	"./ro.js": 5128,
	"./ru": 5127,
	"./ru.js": 5127,
	"./sd": 2525,
	"./sd.js": 2525,
	"./se": 9893,
	"./se.js": 9893,
	"./si": 3123,
	"./si.js": 3123,
	"./sk": 3027,
	"./sk.js": 3027,
	"./sl": 8106,
	"./sl.js": 8106,
	"./sq": 8799,
	"./sq.js": 8799,
	"./sr": 7949,
	"./sr-cyrl": 2872,
	"./sr-cyrl.js": 2872,
	"./sr.js": 7949,
	"./ss": 6167,
	"./ss.js": 6167,
	"./sv": 9713,
	"./sv.js": 9713,
	"./sw": 1982,
	"./sw.js": 1982,
	"./ta": 2732,
	"./ta.js": 2732,
	"./te": 3636,
	"./te.js": 3636,
	"./tet": 2115,
	"./tet.js": 2115,
	"./tg": 9801,
	"./tg.js": 9801,
	"./th": 2868,
	"./th.js": 2868,
	"./tk": 1310,
	"./tk.js": 1310,
	"./tl-ph": 2360,
	"./tl-ph.js": 2360,
	"./tlh": 6645,
	"./tlh.js": 6645,
	"./tr": 8374,
	"./tr.js": 8374,
	"./tzl": 256,
	"./tzl.js": 256,
	"./tzm": 1595,
	"./tzm-latn": 1631,
	"./tzm-latn.js": 1631,
	"./tzm.js": 1595,
	"./ug-cn": 6050,
	"./ug-cn.js": 6050,
	"./uk": 5610,
	"./uk.js": 5610,
	"./ur": 6077,
	"./ur.js": 6077,
	"./uz": 2862,
	"./uz-latn": 2207,
	"./uz-latn.js": 2207,
	"./uz.js": 2862,
	"./vi": 8093,
	"./vi.js": 8093,
	"./x-pseudo": 5590,
	"./x-pseudo.js": 5590,
	"./yo": 9058,
	"./yo.js": 9058,
	"./zh-cn": 7908,
	"./zh-cn.js": 7908,
	"./zh-hk": 8867,
	"./zh-hk.js": 8867,
	"./zh-mo": 1133,
	"./zh-mo.js": 1133,
	"./zh-tw": 3291,
	"./zh-tw.js": 3291
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 7500:
/*!*******************************************!*\
  !*** ./src/assets/json/translations.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"English":{"Body":"Body","Headers":"Headers","Others":"Others","Response":"Response","Authorization":"Authorization","BearerToken":"Bearer Token","RepeatRequest":"Repeat Request","Language":"Language","Login":"Login","JSON":"JSON","File":"File","None":"None","Bearer":"Bearer","RequestPlaceholder":"Enter your request here","RequestButtonTooltip":"Send request","BodyPlaceholder":"Build the body here...","ChooseFile":"Choose File","ExportHistory":"Export History","ImportHistory":"Import History","NoFileSelected":"No file was selected","CannotImport":"Cannot import","ErrorTitle":"Oops! An error has occurred","NoToken":"No token","ExpiredAt":"Expired at","ExpiresAt":"Expires at","LoadMore":"Load more","Yesterday":"Yesterday","Today":"Today","Copied":"Request copied","Deleted":"Deleted","Not just yet!":"Not just yet!","Very soon this feature will be available":"Very soon this feature will be available","EmptyHistory":"No records were found in your history","SourceCode":"Source Code","UnsupportedResolution":"This website does not support this resolution","NoHttpProtocol":"Missing HTTP protocol","Method Not Allowed":"Usually, this means that the request type doesn\'t exist in the API.","Unauthorized":"This means that an authentication is required. Probably your token is unset or expired.","Forbidden":"This means you are not allowed to access this feature.","Not Found":"Usually, this means that no records match your request.","DateFormat":"MM/dd/yyyy","DateTimeFormat":"MM/dd/yyyy hh:mm a","Local":"en-US","English":"English","Portuguese":"Portuguese"},"Portuguese":{"Body":"Corpo","Headers":"Cabeçalho","Others":"Outros","Response":"Resposta","Authorization":"Autorização","BearerToken":"Token Bearer","RepeatRequest":"Repetir requisição","Language":"Idioma","Login":"Entrar","JSON":"JSON","File":"Arquivo","None":"Nenhum","Bearer":"Bearer","RequestPlaceholder":"Escreva sua requisição aqui","RequestButtonTooltip":"Enviar requisição","BodyPlaceholder":"Construa o corpo aqui...","ChooseFile":"Escolher arquivo","ExportHistory":"Exportar Histórico","ImportHistory":"Importar Histórico","NoFileSelected":"Nenhum arquivo foi selecionado","CannotImport":"Não é possível importar","ErrorTitle":"Oops! Ocorreu um erro","NoToken":"Sem token","ExpiredAt":"Expirou em","ExpiresAt":"Expira em","LoadMore":"Carregar mais","Yesterday":"Ontem","Today":"Hoje","Copied":"Requisição copiada","Deleted":"Excluído","Not just yet!":"Acalma o coração!","Very soon this feature will be available":"Em breve esta funcionalidade estará disponível","EmptyHistory":"Nenhum registro foi encontrado no seu histórico","SourceCode":"Código Fonte","UnsupportedResolution":"Esse site não oferece suporte a essa resolução","NoHttpProtocol":"Faltando protocolo HTTP","Method Not Allowed":"Normalmente, isso significa que o tipo dessa requisição não existe na API.","Unauthorized":"Isso significa que uma autenticação é necessária. Provavelmente seu token não foi definido ou expirou.","Forbidden":"Isso significa que você não tem permissão para acessar essa funcionalidade.","Not Found":"Normalmente, isso significa que nenhum registro foi encontrado com a sua requisição.","DateFormat":"dd/MM/yyyy","DateTimeFormat":"dd/MM/yyyy HH:mm","Local":"pt-BR","English":"Inglês","Portuguese":"Português"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);