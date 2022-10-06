"use strict";
(self["webpackChunkburn_bluetooth1"] = self["webpackChunkburn_bluetooth1"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_java_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/java.service */ 2310);
/* harmony import */ var _services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/flamingo-store.service */ 7796);
/* harmony import */ var _services_stage_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/stage-store.service */ 8592);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _stage_stage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stage/stage.component */ 800);
/* harmony import */ var _flamingo_flamingo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flamingo/flamingo.component */ 3822);







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Did not connect to java app");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_app_stage_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-stage");
} }
function AppComponent_app_flamingo_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-flamingo");
} }
class AppComponent {
    constructor(java, flamingoService, stageService) {
        this.java = java;
        this.flamingoService = flamingoService;
        this.stageService = stageService;
        this.onStage = false;
        this.noAndroid = false;
    }
    ngOnInit() {
        this.noAndroid = !this.java.checkAndroid();
        this.java.requestStatus();
        this.java.androidMessage.subscribe(t => {
            t.split(',').forEach(this.handleAndroidMessage.bind(this));
        });
    }
    handleAndroidMessage(t) {
        const [signalType, signalBody] = t.split('=');
        const signalSubType = signalType[0];
        console.log(signalType, signalBody, signalSubType);
        switch (signalSubType) {
            case 'P':
                this.flamingoService.setColorFromSignal(signalBody);
                break;
            case 'A':
                this.stageService.setApplianceStatusFromSignal(+signalType.substring(1), signalBody);
                break;
            case 'F':
                this.flamingoService.setFlamingoFromSignal(signalBody);
                break;
            case 'Q':
                const arr = JSON.parse(signalBody);
                arr.forEach(({ name, code }) => this.stageService.setNewApplianceCode({ name, newCode: +code }));
                break;
        }
    }
    goToStage(isStage) {
        this.onStage = isStage;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_java_service__WEBPACK_IMPORTED_MODULE_0__.JavaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__.FlamingoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_stage_store_service__WEBPACK_IMPORTED_MODULE_2__.StageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 7, consts: [["class", "android", 4, "ngIf"], [1, "nav"], [1, "tab", 3, "click"], [4, "ngIf"], [1, "android"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_div_click_2_listener() { return ctx.goToStage(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_div_click_5_listener() { return ctx.goToStage(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Flamingo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_app_stage_8_Template, 1, 0, "app-stage", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_app_flamingo_9_Template, 1, 0, "app-flamingo", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.noAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", ctx.onStage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", !ctx.onStage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.onStage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.onStage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _stage_stage_component__WEBPACK_IMPORTED_MODULE_3__.StageComponent, _flamingo_flamingo_component__WEBPACK_IMPORTED_MODULE_4__.FlamingoComponent], styles: ["[_nghost-%COMP%] {\n  width: 1200px;\n  height: 1920px;\n}\n\n.android[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n  font-size: 1rem;\n  padding: 0.9rem;\n  width: 100%;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 3rem;\n}\n\n.nav[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 50%;\n  cursor: pointer;\n  text-align: center;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.1rem;\n  display: flex;\n  align-items: center;\n  height: 4rem;\n  color: #DEDEDE;\n  justify-content: center;\n}\n\n.nav[_ngcontent-%COMP%]   .tab.selected[_ngcontent-%COMP%] {\n  background: #2F2E38;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsInZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNDOUJRO0VEK0JSLHVCQUFBO0FBREo7O0FBR0k7RUFDRSxtQkNwQ0M7QURtQ1AiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcnMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTkyMHB4O1xufVxuXG4uYW5kcm9pZCB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjlyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgXG4gIC50YWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgY29sb3I6ICRmb250Q29sb3I7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JleTtcbiAgICB9XG4gIH1cbn1cbiIsIiRncmV5OiAjMkYyRTM4O1xuJGJnOiAjMDAwO1xuJGZvbnRDb2xvcjogI0RFREVERTtcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _flamingo_controller_button_controller_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flamingo/controller-button/controller-button.component */ 6963);
/* harmony import */ var _flamingo_controller_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flamingo/controller/controller.component */ 8646);
/* harmony import */ var _flamingo_flamingo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flamingo/flamingo.component */ 3822);
/* harmony import */ var _services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/flamingo-store.service */ 7796);
/* harmony import */ var _stage_code_doalog_code_doalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stage/code-doalog/code-doalog.component */ 5895);
/* harmony import */ var _stage_music_music_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stage/music/music.component */ 9683);
/* harmony import */ var _stage_stage_button_stage_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stage/stage-button/stage-button.component */ 8880);
/* harmony import */ var _stage_stage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stage/stage.component */ 800);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status/status.component */ 4278);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ 3957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_4__.FlamingoStore], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.NoopAnimationsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _flamingo_controller_controller_component__WEBPACK_IMPORTED_MODULE_2__.ControllerComponent,
        _flamingo_controller_button_controller_button_component__WEBPACK_IMPORTED_MODULE_1__.ControllerButtonComponent,
        _stage_stage_component__WEBPACK_IMPORTED_MODULE_8__.StageComponent,
        _flamingo_flamingo_component__WEBPACK_IMPORTED_MODULE_3__.FlamingoComponent,
        _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__.TabsComponent,
        _status_status_component__WEBPACK_IMPORTED_MODULE_9__.StatusComponent,
        _stage_music_music_component__WEBPACK_IMPORTED_MODULE_6__.MusicComponent,
        _stage_stage_button_stage_button_component__WEBPACK_IMPORTED_MODULE_7__.StageButtonComponent,
        _stage_code_doalog_code_doalog_component__WEBPACK_IMPORTED_MODULE_5__.CodeDoalogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.NoopAnimationsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule] }); })();


/***/ }),

/***/ 6963:
/*!***************************************************************************!*\
  !*** ./src/app/flamingo/controller-button/controller-button.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControllerButtonComponent": () => (/* binding */ ControllerButtonComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _services_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/enums */ 6026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/flamingo-store.service */ 7796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../status/status.component */ 4278);







function ControllerButtonComponent_app_status_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-status", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isOn", ctx_r0.isColorOn);
} }
const _c0 = function (a0) { return { background: a0 }; };
const COLOR_CODES = {
    [_services_enums__WEBPACK_IMPORTED_MODULE_0__.COLORS.RED]: '#FF4949',
    [_services_enums__WEBPACK_IMPORTED_MODULE_0__.COLORS.BLUE]: '#1E89EB',
    [_services_enums__WEBPACK_IMPORTED_MODULE_0__.COLORS.YELLOW]: '#F4EB12',
    [_services_enums__WEBPACK_IMPORTED_MODULE_0__.COLORS.WHITE]: '#FFFFFF',
    [_services_enums__WEBPACK_IMPORTED_MODULE_0__.COLORS.GREEN]: '#00FF0A'
};
class ControllerButtonComponent {
    constructor(flamingoService, cd, flamingQuery) {
        this.flamingoService = flamingoService;
        this.cd = cd;
        this.flamingQuery = flamingQuery;
        this.isColorOn = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    get colorCode() {
        return COLOR_CODES[this.color];
    }
    onClick() {
        if (this.isControllerOn) {
            this.flamingoService.setColor(this.controllerIndex, this.color);
        }
    }
    ngOnInit() {
        this.flamingQuery
            .controller$(this.controllerIndex)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(({ colors, isOn }) => {
            this.isControllerOn = isOn;
            this.isColorOn = !!colors[this.color] && isOn;
            this.cd.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
}
ControllerButtonComponent.ɵfac = function ControllerButtonComponent_Factory(t) { return new (t || ControllerButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__.FlamingoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__.FlamingQuery)); };
ControllerButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ControllerButtonComponent, selectors: [["app-controller-button"]], hostVars: 2, hostBindings: function ControllerButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ControllerButtonComponent_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("on", ctx.isColorOn);
    } }, inputs: { color: "color", controllerIndex: "controllerIndex" }, decls: 4, vars: 5, consts: [[1, "color-circle"], [0, "xlink", "href", "#btn"], [3, "isOn", 4, "ngIf"], [3, "isOn"]], template: function ControllerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "use", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ControllerButtonComponent_app_status_3_Template, 1, 1, "app-status", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.colorCode));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isControllerOn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent], styles: ["[_nghost-%COMP%] {\n  width: 6.75rem;\n  height: 3.4rem;\n  padding: 0.5rem;\n  margin: 0.3rem;\n  border-radius: 0.9rem;\n  background: #25242D;\n  border: 1px solid #E096CB;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n}\n.on[_nghost-%COMP%] {\n  background: #424246;\n  border: 1px solid #E096CB;\n}\n.on[_nghost-%COMP%]   .color-circle[_ngcontent-%COMP%] {\n  filter: none;\n}\n.color-circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  margin-right: 0.7rem;\n  border-radius: 3rem;\n  filter: brightness(0.5);\n  align-items: center;\n  justify-items: center;\n}\n.color-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  top: 4%;\n  left: 5%;\n  position: relative;\n  display: block;\n  fill: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFGO0FBSUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBRko7QUFJSTtFQUNFLFlBQUE7QUFGTjtBQU9BO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFKRjtBQUtFO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFITiIsImZpbGUiOiJjb250cm9sbGVyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDYuNzVyZW07XG4gIGhlaWdodDogMy40cmVtO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgbWFyZ2luOiAuM3JlbTtcbiAgXG4gIGJvcmRlci1yYWRpdXM6IC45cmVtO1xuICBiYWNrZ3JvdW5kOiAjMjUyNDJEO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTA5NkNCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuICBcbiAgXG4gICYub24ge1xuICAgIGJhY2tncm91bmQ6ICM0MjQyNDY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwOTZDQjtcbiAgICBcbiAgICAuY29sb3ItY2lyY2xlIHtcbiAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbG9yLWNpcmNsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKC41KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBzdmcge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGhlaWdodDogOTAlO1xuICAgICAgdG9wOiA0JTtcbiAgICAgIGxlZnQ6IDUlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmaWxsOiBibGFjaztcbiAgICBcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 8646:
/*!*************************************************************!*\
  !*** ./src/app/flamingo/controller/controller.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControllerComponent": () => (/* binding */ ControllerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _services_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/enums */ 6026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/flamingo-store.service */ 7796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _controller_button_controller_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller-button/controller-button.component */ 6963);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../status/status.component */ 4278);











function ControllerComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Turn Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ControllerComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Turn on");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class ControllerComponent {
  constructor(flamingQuery, flamingoService, cd) {
    this.flamingQuery = flamingQuery;
    this.flamingoService = flamingoService;
    this.cd = cd;
    this.name = 'Controller 1';
    this.COLORS = _services_enums__WEBPACK_IMPORTED_MODULE_0__.COLORS;
  }

  ngOnInit() {
    this.isOn$ = this.flamingQuery.controller$(this.controllerIndex).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(c => c.isOn));
  }

  toggleController() {
    this.flamingoService.toggleController(this.controllerIndex);
  }

}

ControllerComponent.ɵfac = function ControllerComponent_Factory(t) {
  return new (t || ControllerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__.FlamingQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_1__.FlamingoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};

ControllerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ControllerComponent,
  selectors: [["app-controller"]],
  inputs: {
    name: "name",
    controllerIndex: "controllerIndex"
  },
  decls: 20,
  vars: 21,
  consts: [[1, "name"], ["mat-icon-button", "", 1, "menu-button", 3, "matMenuTriggerFor"], [0, "xlink", "href", "#dots"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [4, "ngIf"], [3, "isOn"], [1, "buttons"], [3, "color", "controllerIndex"]],
  template: function ControllerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "use", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-menu", null, 3)(7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ControllerComponent_Template_button_click_7_listener() {
        return ctx.toggleController();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ControllerComponent_span_8_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ControllerComponent_span_10_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-status", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-controller-button", 8)(16, "app-controller-button", 8)(17, "app-controller-button", 8)(18, "app-controller-button", 8)(19, "app-controller-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 15, ctx.isOn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 17, ctx.isOn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOn", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 19, ctx.isOn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.COLORS.GREEN)("controllerIndex", ctx.controllerIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.COLORS.YELLOW)("controllerIndex", ctx.controllerIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.COLORS.BLUE)("controllerIndex", ctx.controllerIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.COLORS.RED)("controllerIndex", ctx.controllerIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.COLORS.WHITE)("controllerIndex", ctx.controllerIndex);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _controller_button_controller_button_component__WEBPACK_IMPORTED_MODULE_2__.ControllerButtonComponent, _status_status_component__WEBPACK_IMPORTED_MODULE_3__.StatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  background: #1F1E25;\n  position: relative;\n  border-radius: 0.6rem;\n  padding: 2rem;\n  width: 100%;\n  display: block;\n}\n.menu-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n}\n.menu-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1em;\n  height: 1rem;\n  fill: white;\n}\n.name[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: #fff;\n  margin-bottom: 0.4rem;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 0.9rem;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFIRjtBQUlFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRko7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBRkY7QUFNQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSEYiLCJmaWxlIjoiY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzFGMUUyNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAuNnJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAmLm9uIHtcbiAgXG4gIH1cbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbiAgb3BhY2l0eTogLjU7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgZmlsbDogd2hpdGVcbiAgfVxufVxuLm5hbWUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IC40cmVtO1xufVxuXG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogLjlyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"]
});

/***/ }),

/***/ 3822:
/*!************************************************!*\
  !*** ./src/app/flamingo/flamingo.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamingoComponent": () => (/* binding */ FlamingoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/flamingo-store.service */ 7796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _controller_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/controller.component */ 8646);






function FlamingoComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Turn Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function FlamingoComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Turn on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

class FlamingoComponent {
  constructor(flamingQuery, flamingoService) {
    this.flamingQuery = flamingQuery;
    this.flamingoService = flamingoService;
    this.flamingo$ = this.flamingQuery.flamingo$;
  }

  ngOnInit() {}

  toggleFlamingo() {
    this.flamingoService.toggleFlamingo();
  }

}

FlamingoComponent.ɵfac = function FlamingoComponent_Factory(t) {
  return new (t || FlamingoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_0__.FlamingQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_flamingo_store_service__WEBPACK_IMPORTED_MODULE_0__.FlamingoService));
};

FlamingoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FlamingoComponent,
  selectors: [["app-flamingo"]],
  decls: 17,
  vars: 11,
  consts: [[1, "flamingo"], [1, "icon", 3, "matMenuTriggerFor"], [0, "xlink", "href", "#flamingo"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [4, "ngIf"], ["name", "Controller 1", "controllerIndex", "1", 1, "controller"], ["name", "Controller 2", "controllerIndex", "2", 1, "controller"], ["name", "Controller 3", "controllerIndex", "3", 1, "controller"], ["name", "Controller 4", "controllerIndex", "4", 1, "controller"]],
  template: function FlamingoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "use", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 3, 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FlamingoComponent_Template_button_click_6_listener() {
        return ctx.toggleFlamingo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FlamingoComponent_span_7_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FlamingoComponent_span_9_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Flamingo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-controller", 7)(14, "app-controller", 8)(15, "app-controller", 9)(16, "app-controller", 10);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("on", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx.flamingo$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, ctx.flamingo$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 9, ctx.flamingo$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _controller_controller_component__WEBPACK_IMPORTED_MODULE_1__.ControllerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.controller[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.flamingo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 700;\n}\n\n.icon[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.icon.on[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1pbmdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBYyxzQkFBQTtFQUNkLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFBRTtFQUNFLFVBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoiZmxhbWluZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5jb250cm9sbGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLmZsYW1pbmdvIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMFxufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IC4yO1xuICAmLm9uIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogMTVyZW07XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 6026:
/*!***********************************!*\
  !*** ./src/app/services/enums.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "ORDERED_COLORS": () => (/* binding */ ORDERED_COLORS)
/* harmony export */ });
var COLORS;
(function (COLORS) {
    COLORS["RED"] = "red";
    COLORS["YELLOW"] = "yellow";
    COLORS["BLUE"] = "blue";
    COLORS["GREEN"] = "green";
    COLORS["WHITE"] = "white";
})(COLORS || (COLORS = {}));
const ORDERED_COLORS = [
    COLORS.RED,
    COLORS.GREEN,
    COLORS.BLUE,
    COLORS.YELLOW,
    COLORS.WHITE
];


/***/ }),

/***/ 7796:
/*!****************************************************!*\
  !*** ./src/app/services/flamingo-store.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamingQuery": () => (/* binding */ FlamingQuery),
/* harmony export */   "FlamingoService": () => (/* binding */ FlamingoService),
/* harmony export */   "FlamingoStore": () => (/* binding */ FlamingoStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ 6026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _java_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./java.service */ 2310);






function createInitialState() {
    const colorsState = {
        red: false,
        blue: false,
        green: false,
        yellow: false,
        white: false,
    };
    return {
        controller1: { isOn: false, colors: { ...colorsState } },
        controller2: { isOn: true, colors: { ...colorsState } },
        controller3: { isOn: true, colors: { ...colorsState } },
        controller4: { isOn: true, colors: { ...colorsState } },
        flamingo: false
    };
}
class FlamingQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.all$ = this.select();
        this.flamingo$ = this.select('flamingo');
    }
    controller$(controllerIndex) {
        return this.select('controller' + controllerIndex);
    }
    isColorOn$(controllerIndex, color) {
        return this.controller$(controllerIndex).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(c => !!c.colors[color]));
    }
}
FlamingQuery.ɵfac = function FlamingQuery_Factory(t) { return new (t || FlamingQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](FlamingoStore)); };
FlamingQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FlamingQuery, factory: FlamingQuery.ɵfac, providedIn: 'root' });
let FlamingoStore = class FlamingoStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
FlamingoStore.ɵfac = function FlamingoStore_Factory(t) { return new (t || FlamingoStore)(); };
FlamingoStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FlamingoStore, factory: FlamingoStore.ɵfac, providedIn: 'root' });
FlamingoStore = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'flamingo' })
], FlamingoStore);

class FlamingoService {
    constructor(store, javaService) {
        this.store = store;
        this.javaService = javaService;
    }
    toggleFlamingo() {
        this.javaService.sendToAndroid(`F=${this.store.getValue().flamingo ? '0' : '1'}`);
    }
    toggleController(controllerIndex) {
        const keyName = 'controller' + controllerIndex;
        const colors = {};
        _enums__WEBPACK_IMPORTED_MODULE_1__.ORDERED_COLORS.forEach((color) => {
            colors[color] = false;
        });
        // reset all colors
        //this.javaService.sendToAndroid(
        //	`P=${[
        //		controllerIndex,
        //		...ORDERED_COLORS.map(c => 0)
        //	].join('')}`);
        this.store.update(state => {
            const controllerState = this.store.getValue()[keyName];
            const newState = {
                ...state,
                [keyName]: { colors, isOn: !controllerState.isOn }
            };
            return newState;
        });
    }
    setFlamingoFromSignal(status) {
        this.store.update(state => {
            return { ...state, flamingo: status === '1' };
        });
    }
    setColor(controllerIndex, color) {
        const keyName = 'controller' + controllerIndex;
        const controllerState = this.store.getValue()[keyName];
        this.javaService.sendToAndroid(`P=${[
            controllerIndex,
            ..._enums__WEBPACK_IMPORTED_MODULE_1__.ORDERED_COLORS.map(c => {
                const colorTooConvert = c === color ? !controllerState.colors[c] : controllerState.colors[c];
                return colorTooConvert ? 1 : 0;
            })
        ].join('')}`);
    }
    setColorFromSignal(signal) {
        const controllerIndex = signal[0];
        const keyName = 'controller' + controllerIndex;
        const colors = {};
        _enums__WEBPACK_IMPORTED_MODULE_1__.ORDERED_COLORS.forEach((color, index) => {
            colors[color] = signal[index + 1] === '1';
        });
        this.store.update(state => {
            const controllerState = this.store.getValue()[keyName];
            const newState = {
                ...state,
                [keyName]: { ...controllerState, colors }
            };
            return newState;
        });
    }
}
FlamingoService.ɵfac = function FlamingoService_Factory(t) { return new (t || FlamingoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](FlamingoStore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_java_service__WEBPACK_IMPORTED_MODULE_2__.JavaService)); };
FlamingoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FlamingoService, factory: FlamingoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2310:
/*!******************************************!*\
  !*** ./src/app/services/java.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JavaService": () => (/* binding */ JavaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class JavaService {
    constructor() {
        this.androidMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        window['getFromAndroid'] = this.getFromAndroid.bind(this);
    }
    checkAndroid() {
        this.Android = window['Android'];
        return !!this.Android;
    }
    saveCodes(object) {
        this.sendToAndroid(`Q=${JSON.stringify(object)}`);
    }
    requestStatus() {
        this.sendToAndroid('status');
    }
    sendToAndroid(message) {
        console.log('sent to android: ', message);
        this.androidMessage.next(message);
        if (this.Android) {
            this.Android.sendMeEvent(message);
        }
    }
    getFromAndroid(s) {
        this.androidMessage.next(s);
        this.sendToAndroid('Got from android' + s);
    }
}
JavaService.ɵfac = function JavaService_Factory(t) { return new (t || JavaService)(); };
JavaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JavaService, factory: JavaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8592:
/*!*************************************************!*\
  !*** ./src/app/services/stage-store.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StageQuery": () => (/* binding */ StageQuery),
/* harmony export */   "StageService": () => (/* binding */ StageService),
/* harmony export */   "StageStore": () => (/* binding */ StageStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _java_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./java.service */ 2310);






const appliancesNames = [
    'Rainbow',
    'Easter',
    'Stage off',
    'Runway',
    'More',
    'Color',
    'Light1',
    'Light2',
    'Garland1',
    'Garland2',
    'Whatever',
    'Whatever2',
    'Whatever3',
    'Whatever4',
];
function createInitialState() {
    return {
        appliances: [
            ...((new Array(8)).fill(0).map((t, i) => ({ code: i, name: appliancesNames[i], on: false, icon: 'flare' }))),
            { code: 9, name: 'Smoke', on: false, icon: 'smoke', isEffect: true },
            { code: 10, name: 'Flickers', on: false, icon: 'flickers', isEffect: true },
            { code: 11, name: 'Bubble machine', on: false, icon: 'bubble', isEffect: true },
            { code: 12, name: 'Flickers & fan', on: false, icon: 'fan', isEffect: true }
        ],
    };
}
let StageStore = class StageStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
StageStore.ɵfac = function StageStore_Factory(t) { return new (t || StageStore)(); };
StageStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StageStore, factory: StageStore.ɵfac, providedIn: 'root' });
StageStore = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'stage' })
], StageStore);

class StageQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.all$ = this.select();
        this.appliances$ = this.select('appliances').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(a => a.filter(({ isEffect }) => !isEffect)));
        this.effects$ = this.select('appliances').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(a => a.filter(({ isEffect }) => isEffect)));
    }
    appliance(index) {
        return this.appliances$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(arr => arr[index]));
    }
}
StageQuery.ɵfac = function StageQuery_Factory(t) { return new (t || StageQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](StageStore)); };
StageQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StageQuery, factory: StageQuery.ɵfac, providedIn: 'root' });
class StageService {
    constructor(store, javaService) {
        this.store = store;
        this.javaService = javaService;
    }
    setNewApplianceCode({ name, newCode }) {
        this.store.update(state => {
            const newAppliances = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(state.appliances);
            const targetAppliance = newAppliances.find(({ name: aNAme }) => name == aNAme);
            // reset same codes for everything else
            newAppliances.filter(({ code }) => code == newCode).forEach(a => a.code = -1);
            if (targetAppliance) {
                targetAppliance.code = newCode;
            }
            this.javaService.saveCodes(newAppliances.map(({ name, code }) => ({ name, code })));
            return { ...state, appliances: newAppliances };
        });
    }
    switchAppliance(controllerCode, status) {
        this.javaService.sendToAndroid(`A${controllerCode}=${status ? 1 : 0}`);
    }
    setApplianceStatusFromSignal(applianceCode, status) {
        this.store.update(state => {
            const newAppliances = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(state.appliances);
            const targetAppliance = newAppliances.find(({ code }) => code == applianceCode);
            if (targetAppliance) {
                targetAppliance.on = status === '1';
            }
            return { ...state, appliances: newAppliances };
        });
    }
}
StageService.ɵfac = function StageService_Factory(t) { return new (t || StageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](StageStore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_java_service__WEBPACK_IMPORTED_MODULE_2__.JavaService)); };
StageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StageService, factory: StageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5895:
/*!************************************************************!*\
  !*** ./src/app/stage/code-doalog/code-doalog.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeDoalogComponent": () => (/* binding */ CodeDoalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);








class CodeDoalogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.code = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(0)]);
    }
    ngOnInit() {
        this.code.setValue(this.data.code);
    }
    close() {
        this.dialogRef.close(+(this.code.value || ''));
    }
}
CodeDoalogComponent.ɵfac = function CodeDoalogComponent_Factory(t) { return new (t || CodeDoalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
CodeDoalogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CodeDoalogComponent, selectors: [["app-code-doalog"]], decls: 12, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"]], template: function CodeDoalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Set code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CodeDoalogComponent_Template_button_click_10_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Change code for \"", ctx.data.name, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.code);
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RlLWRvYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9683:
/*!************************************************!*\
  !*** ./src/app/stage/music/music.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicComponent": () => (/* binding */ MusicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_java_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/java.service */ 2310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function MusicComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.backToStage.emit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Back to stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MusicComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.easter()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "use", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function MusicComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicComponent_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.easter()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
class MusicComponent {
    constructor(javaService) {
        this.javaService = javaService;
        this.backToStage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    stop() {
        this.javaService.sendToAndroid('BB=S');
    }
    play() {
        this.javaService.sendToAndroid('BB=P');
    }
    next() {
        this.javaService.sendToAndroid('BB=N');
    }
    easter() {
        this.javaService.sendToAndroid('BB=E');
    }
}
MusicComponent.ɵfac = function MusicComponent_Factory(t) { return new (t || MusicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_java_service__WEBPACK_IMPORTED_MODULE_0__.JavaService)); };
MusicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MusicComponent, selectors: [["app-music"]], inputs: { fullMode: "fullMode" }, outputs: { backToStage: "backToStage" }, decls: 14, vars: 3, consts: [["class", "title", 3, "click", 4, "ngIf"], [1, "buttons"], [1, "button", "stop", 3, "click"], [0, "xlink", "href", "#stop"], [1, "button", "play", 3, "click"], [1, "bg"], [0, "xlink", "href", "#play"], [1, "button", "next", 3, "click"], [0, "xlink", "href", "#next"], ["class", "button easter", 3, "click", 4, "ngIf"], ["class", "full", 4, "ngIf"], [1, "title", 3, "click"], [1, "button", "easter", 3, "click"], [0, "xlink", "href", "#easter"], [1, "full"]], template: function MusicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MusicComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicComponent_Template_div_click_2_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicComponent_Template_div_click_5_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicComponent_Template_div_click_9_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MusicComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MusicComponent_div_13_Template, 4, 0, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fullMode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 20rem;\n  background: #25242D;\n  border: 1px solid #E096CB;\n  border-radius: 1rem;\n  \n  display: block;\n  padding: 2rem;\n  flex-shrink: 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.3rem;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: #E096CB;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  order: 1;\n  flex-grow: 0;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  background: #424246;\n  border: 2px solid #E096CB;\n  border-radius: 175px;\n  display: flex;\n  width: 5rem;\n  height: 5rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 40%;\n  fill: white;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:active {\n  background: #E096CB;\n}\n\n.button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:active   svg[_ngcontent-%COMP%] {\n  fill: black;\n}\n\n.button.play[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 8rem;\n  margin: 1.7rem;\n}\n\n.button.play[_ngcontent-%COMP%]:before {\n  display: block;\n  content: \"\";\n  width: 8rem;\n  height: 8rem;\n  border: 1.1rem solid #484553;\n  position: absolute;\n  border-radius: 8rem;\n}\n\n.button.play[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: relative;\n  left: 5%;\n  width: 40%;\n  height: 40%;\n}\n\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5rem;\n}\n\n.full[_ngcontent-%COMP%]   .easter[_ngcontent-%COMP%] {\n  width: 6rem;\n  height: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7QUFKSjs7QUFNSTtFQUNFLFdBQUE7QUFKTjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVFJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5OOztBQVNJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFQTjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVRKIiwiZmlsZSI6Im11c2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgXG4gIGJhY2tncm91bmQ6ICMyNTI0MkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMDk2Q0I7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIFxuICAvKiBJbnNpZGUgYXV0byBsYXlvdXQgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0UwOTZDQjtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcmRlcjogMTtcbiAgZmxleC1ncm93OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzQyNDI0NjtcbiAgYm9yZGVyOiAycHggc29saWQgI0UwOTZDQjtcbiAgYm9yZGVyLXJhZGl1czogMTc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDQwJTtcblxuICAgIGZpbGw6IHdoaXRlO1xuICB9XG4gIFxuICAmOmhvdmVyLCAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI0UwOTZDQjtcbiAgICBcbiAgICBzdmcge1xuICAgICAgZmlsbDogYmxhY2s7XG4gICAgfVxuICB9XG4gIFxuICAmLnBsYXkge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIGhlaWdodDogOHJlbTtcbiAgICBtYXJnaW46IDEuN3JlbTtcbiAgICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgd2lkdGg6IDhyZW07XG4gICAgICBoZWlnaHQ6IDhyZW07XG4gICAgICBib3JkZXI6IDEuMXJlbSBzb2xpZCAjNDg0NTUzO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHJlbTtcbiAgICB9XG4gICAgXG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IDUlO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGhlaWdodDogNDAlO1xuICAgIH1cbiAgfVxuICBcbn1cblxuLmZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIC5lYXN0ZXIge1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 8880:
/*!**************************************************************!*\
  !*** ./src/app/stage/stage-button/stage-button.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StageButtonComponent": () => (/* binding */ StageButtonComponent)
/* harmony export */ });
/* harmony import */ var _code_doalog_code_doalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../code-doalog/code-doalog.component */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_stage_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/stage-store.service */ 8592);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);




class StageButtonComponent {
    constructor(stageService, matDialog) {
        this.stageService = stageService;
        this.matDialog = matDialog;
        this.name = 'Button';
    }
    ngOnInit() {
    }
    get iconSrc() {
        return '#' + this.icon;
    }
    editCode() {
        let dialogRef = this.matDialog.open(_code_doalog_code_doalog_component__WEBPACK_IMPORTED_MODULE_0__.CodeDoalogComponent, {
            data: { code: this.code, name: this.name }
        });
        dialogRef.afterClosed().subscribe(newCode => {
            this.stageService.setNewApplianceCode({
                name: this.name,
                newCode
            });
        });
    }
    onClick() {
        this.stageService.switchAppliance(this.code, !this.on);
    }
}
StageButtonComponent.ɵfac = function StageButtonComponent_Factory(t) { return new (t || StageButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_stage_store_service__WEBPACK_IMPORTED_MODULE_1__.StageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
StageButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StageButtonComponent, selectors: [["app-stage-button"]], hostVars: 2, hostBindings: function StageButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("on", ctx.on);
    } }, inputs: { name: "name", code: "code", icon: "icon", on: "on" }, decls: 11, vars: 5, consts: [[1, "circle", 3, "click"], [1, "icon"], [1, "title"], [1, "code", 3, "click"], [1, "edit"], [0, "xlink", "href", "#edit"]], template: function StageButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StageButtonComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StageButtonComponent_Template_div_click_6_listener() { return ctx.editCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx.iconSrc, null, "xlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.code === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("code ", ctx.code > -1 ? ctx.code : "Not set", " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n}\n.on[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background: #E096CB;\n  box-shadow: 0px 0px 29px rgba(255, 255, 255, 0.48);\n}\n.on[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: black;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  background: #363638;\n  border: 1px solid #E096CB;\n  border-radius: 4rem;\n  margin-bottom: 0.6rem;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n}\n.circle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  height: 60%;\n  fill: white;\n  background: transparent;\n}\n.circle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.3rem;\n  align-items: center;\n  text-align: center;\n  color: #DEDEDE;\n}\n.code[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  cursor: pointer;\n}\n.code.error[_ngcontent-%COMP%] {\n  color: red;\n}\n.edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUk7RUFDRSxtQkFBQTtFQUNBLGtEQUFBO0FBQU47QUFFTTtFQUNFLFdBQUE7QUFBUjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFMSjtBQU9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMTjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBUkY7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVJGO0FBU0U7RUFDRSxVQUFBO0FBUEo7QUFZRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVEoiLCJmaWxlIjoic3RhZ2UtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgXG4gICYub24ge1xuICAgIC5jaXJjbGUge1xuICAgICAgYmFja2dyb3VuZDogI0UwOTZDQjtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpO1xuICAgICAgXG4gICAgICBzdmcge1xuICAgICAgICBmaWxsOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIFxuICBiYWNrZ3JvdW5kOiAjMzYzNjM4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTA5NkNCO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBcbiAgICBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICBjb2xvcjogI0RFREVERTtcbn1cblxuLmNvZGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cblxuLmVkaXQge1xuICBzdmcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 800:
/*!******************************************!*\
  !*** ./src/app/stage/stage.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StageComponent": () => (/* binding */ StageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_stage_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/stage-store.service */ 8592);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music/music.component */ 9683);
/* harmony import */ var _stage_button_stage_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-button/stage-button.component */ 8880);






function StageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StageComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toFullMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Manual control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function StageComponent_div_2_app_stage_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-stage-button", 9);
  }

  if (rf & 2) {
    const b_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", b_r6.icon)("code", b_r6.code)("name", b_r6.name)("on", b_r6.on);
  }
}

function StageComponent_div_2_app_stage_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-stage-button", 9);
  }

  if (rf & 2) {
    const b_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", b_r7.icon)("code", b_r7.code)("name", b_r7.name)("on", b_r7.on);
  }
}

function StageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, StageComponent_div_2_app_stage_button_5_Template, 1, 4, "app-stage-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Effects");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, StageComponent_div_2_app_stage_button_11_Template, 1, 4, "app-stage-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, ctx_r1.buttons$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 4, ctx_r1.effects$));
  }
}

class StageComponent {
  constructor(stageService, stageQuery) {
    this.stageService = stageService;
    this.stageQuery = stageQuery;
    this.buttons$ = this.stageQuery.appliances$;
    this.effects$ = this.stageQuery.effects$;
    this.fullMode = false;
  }

  ngOnInit() {//this.buttons =
    //	/console.log(this.buttons);
  }

  toFullMode() {
    this.fullMode = !this.fullMode;
  }

}

StageComponent.ɵfac = function StageComponent_Factory(t) {
  return new (t || StageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_stage_store_service__WEBPACK_IMPORTED_MODULE_0__.StageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_stage_store_service__WEBPACK_IMPORTED_MODULE_0__.StageQuery));
};

StageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: StageComponent,
  selectors: [["app-stage"]],
  decls: 3,
  vars: 3,
  consts: [[3, "fullMode", "backToStage"], ["class", "manual-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "manual-btn", 3, "click"], [1, "text"], [1, "block"], [1, "title"], [1, "buttons"], ["class", "btn", 3, "icon", "code", "name", "on", 4, "ngFor", "ngForOf"], [1, "btn", 3, "icon", "code", "name", "on"]],
  template: function StageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-music", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("backToStage", function StageComponent_Template_app_music_backToStage_0_listener() {
        return ctx.toFullMode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StageComponent_div_1_Template, 3, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StageComponent_div_2_Template, 13, 6, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullMode", ctx.fullMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.fullMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fullMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _music_music_component__WEBPACK_IMPORTED_MODULE_1__.MusicComponent, _stage_button_stage_button_component__WEBPACK_IMPORTED_MODULE_2__.StageButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  margin-bottom: 15px;\n  width: 20%;\n}\n\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem 0;\n  background: #25242D;\n  border: 1px solid #E096CB;\n  border-radius: 1rem;\n  \n  display: block;\n  padding: 2rem;\n}\n\n.block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin-bottom: 2rem;\n}\n\n.manual-btn[_ngcontent-%COMP%] {\n  color: #E096CB;\n  justify-self: end;\n  align-self: center;\n  cursor: pointer;\n  flex-grow: 1;\n  display: flex;\n  position: fixed;\n  bottom: 1rem;\n  width: 100%;\n}\n\n.manual-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.2rem;\n  text-transform: uppercase;\n  width: 100%;\n  font-size: 1rem;\n  text-align: center;\n}\n\n.manual-btn[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  height: 7rem;\n  left: 50%;\n  bottom: 4rem;\n  border-left: 2px solid #E096CB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0UsY0FBQTtFQUVBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVBLDhCQUFBO0FBUEoiLCJmaWxlIjoic3RhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgXG4gIHdpZHRoOiAyMCU7XG59XG5cbi5ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgYmFja2dyb3VuZDogIzI1MjQyRDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwOTZDQjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgXG4gIC8qIEluc2lkZSBhdXRvIGxheW91dCAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMnJlbTtcbiAgXG4gIC50aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuXG4ubWFudWFsLWJ0biB7XG4gIGNvbG9yOiAjRTA5NkNCO1xuICBcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICBcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA3cmVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDRyZW07XG4gICAgXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRTA5NkNCOztcbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 4278:
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusComponent": () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StatusComponent {
    constructor() {
        this.isOn = false;
    }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["app-status"]], inputs: { isOn: "isOn" }, decls: 3, vars: 5, consts: [[1, "status"], [1, "status-text"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("on", ctx.isOn)("off", !ctx.isOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isOn ? "On" : "Off");
    } }, styles: [".status[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n  display: inline-block;\n}\n.status.on[_ngcontent-%COMP%] {\n  background: #23FF61;\n}\n.status.off[_ngcontent-%COMP%] {\n  background: #FF0000;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.3rem;\n  color: #8C8C8C;\n  margin-left: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURGO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRkY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7QUFGRiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zdGF0dXMge1xuICBcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAmLm9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjNGRjYxO1xuICB9XG4gICYub2ZmIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xuICB9XG59XG5cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uc3RhdHVzLXRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbiAgXG4gIGNvbG9yOiAjOEM4QzhDO1xuICBtYXJnaW4tbGVmdDogLjZyZW07XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 3957:
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TabsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 2, vars: 0, template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tabs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map