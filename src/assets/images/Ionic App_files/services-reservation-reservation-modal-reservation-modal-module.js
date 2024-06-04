(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-reservation-reservation-modal-reservation-modal-module"],{

/***/ "5p6e":
/*!********************************************************************************************!*\
  !*** ./src/app/services/reservation/reservation-modal/reservation-modal-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ReservationModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationModalPageRoutingModule", function() { return ReservationModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reservation_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-modal.page */ "ViXO");




const routes = [
    {
        path: '',
        component: _reservation_modal_page__WEBPACK_IMPORTED_MODULE_3__["ReservationModalPage"]
    }
];
let ReservationModalPageRoutingModule = class ReservationModalPageRoutingModule {
};
ReservationModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReservationModalPageRoutingModule);



/***/ }),

/***/ "w4zS":
/*!************************************************************************************!*\
  !*** ./src/app/services/reservation/reservation-modal/reservation-modal.module.ts ***!
  \************************************************************************************/
/*! exports provided: ReservationModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationModalPageModule", function() { return ReservationModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reservation_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation-modal-routing.module */ "5p6e");






let ReservationModalPageModule = class ReservationModalPageModule {
};
ReservationModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reservation_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReservationModalPageRoutingModule"]
        ],
        declarations: []
    })
], ReservationModalPageModule);



/***/ })

}]);
//# sourceMappingURL=services-reservation-reservation-modal-reservation-modal-module.js.map