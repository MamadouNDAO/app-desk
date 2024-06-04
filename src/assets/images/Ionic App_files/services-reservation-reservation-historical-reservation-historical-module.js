(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-reservation-reservation-historical-reservation-historical-module"],{

/***/ "29pb":
/*!**********************************************************************************************!*\
  !*** ./src/app/services/reservation/reservation-historical/reservation-historical.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReservationHistoricalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationHistoricalPageModule", function() { return ReservationHistoricalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reservation_historical_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation-historical-routing.module */ "k8m0");






let ReservationHistoricalPageModule = class ReservationHistoricalPageModule {
};
ReservationHistoricalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reservation_historical_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReservationHistoricalPageRoutingModule"]
        ],
        declarations: []
    })
], ReservationHistoricalPageModule);



/***/ }),

/***/ "k8m0":
/*!******************************************************************************************************!*\
  !*** ./src/app/services/reservation/reservation-historical/reservation-historical-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ReservationHistoricalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationHistoricalPageRoutingModule", function() { return ReservationHistoricalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reservation_historical_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-historical.page */ "GRI9");




const routes = [
    {
        path: '',
        component: _reservation_historical_page__WEBPACK_IMPORTED_MODULE_3__["ReservationHistoricalPage"]
    }
];
let ReservationHistoricalPageRoutingModule = class ReservationHistoricalPageRoutingModule {
};
ReservationHistoricalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReservationHistoricalPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=services-reservation-reservation-historical-reservation-historical-module.js.map