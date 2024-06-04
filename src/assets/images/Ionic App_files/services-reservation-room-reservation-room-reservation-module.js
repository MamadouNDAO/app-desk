(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-reservation-room-reservation-room-reservation-module"],{

/***/ "5WNA":
/*!******************************************************************************************!*\
  !*** ./src/app/services/reservation/room-reservation/room-reservation-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RoomReservationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomReservationPageRoutingModule", function() { return RoomReservationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _room_reservation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-reservation.page */ "q/5c");




const routes = [
    {
        path: '',
        component: _room_reservation_page__WEBPACK_IMPORTED_MODULE_3__["RoomReservationPage"]
    }
];
let RoomReservationPageRoutingModule = class RoomReservationPageRoutingModule {
};
RoomReservationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoomReservationPageRoutingModule);



/***/ }),

/***/ "wV6K":
/*!**********************************************************************************!*\
  !*** ./src/app/services/reservation/room-reservation/room-reservation.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RoomReservationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomReservationPageModule", function() { return RoomReservationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _room_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-reservation-routing.module */ "5WNA");






let RoomReservationPageModule = class RoomReservationPageModule {
};
RoomReservationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _room_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoomReservationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: []
    })
], RoomReservationPageModule);



/***/ })

}]);
//# sourceMappingURL=services-reservation-room-reservation-room-reservation-module.js.map