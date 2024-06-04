(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splashscreen-splashscreen-module"],{

/***/ "SoIQ":
/*!*************************************************************!*\
  !*** ./src/app/splashscreen/splashscreen-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SplashscreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPageRoutingModule", function() { return SplashscreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splashscreen.page */ "bPRL");




const routes = [
    {
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__["SplashscreenPage"]
    }
];
let SplashscreenPageRoutingModule = class SplashscreenPageRoutingModule {
};
SplashscreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashscreenPageRoutingModule);



/***/ }),

/***/ "YvKS":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/logo.png\" alt=\"\" >");

/***/ }),

/***/ "bPRL":
/*!***************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.ts ***!
  \***************************************************/
/*! exports provided: SplashscreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPage", function() { return SplashscreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splashscreen.page.html */ "YvKS");
/* harmony import */ var _splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashscreen.page.scss */ "cr9G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authentification_security_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentification/security.service */ "nKjo");







let SplashscreenPage = class SplashscreenPage {
    constructor(router, alertController, platform, sercurity) {
        this.router = router;
        this.alertController = alertController;
        this.platform = platform;
        this.sercurity = sercurity;
    }
    welcomeAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let notification = {
                category: 'Accueil',
                title: 'Message de bienvenue',
                description: 'Bienvenue sur le démonstrateur iViPlay !'
            };
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                subHeader: '',
                message: 'Bienvenue sur le démonstrateur iViPlay !',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            localStorage.setItem('notification', JSON.stringify(notification));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        let that = this;
        setTimeout(function () {
            that.welcomeAlert();
            that.router.navigate(['tabs/tab2']);
        }, 3000);
    }
};
SplashscreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _authentification_security_service__WEBPACK_IMPORTED_MODULE_6__["SecurityService"] }
];
SplashscreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splashscreen',
        template: _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashscreenPage);



/***/ }),

/***/ "cr9G":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  margin-top: 70%;\n  width: 200%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgbWFyZ2luLXRvcDogNzAlO1xuICAgIHdpZHRoOiAyMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "oEhx":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.module.ts ***!
  \*****************************************************/
/*! exports provided: SplashscreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPageModule", function() { return SplashscreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splashscreen-routing.module */ "SoIQ");
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splashscreen.page */ "bPRL");







let SplashscreenPageModule = class SplashscreenPageModule {
};
SplashscreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashscreenPageRoutingModule"]
        ],
        declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]]
    })
], SplashscreenPageModule);



/***/ })

}]);
//# sourceMappingURL=splashscreen-splashscreen-module.js.map