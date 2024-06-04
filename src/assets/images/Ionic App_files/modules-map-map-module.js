(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-map-map-module"],{

/***/ "FFZD":
/*!***************************************************!*\
  !*** ./src/app/modules/map/map-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function() { return MapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "Rg0a");




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["Map"],
    }
];
let MapRoutingModule = class MapRoutingModule {
};
MapRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MapRoutingModule);



/***/ }),

/***/ "Rg0a":
/*!*****************************************!*\
  !*** ./src/app/modules/map/map.page.ts ***!
  \*****************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map.page.html */ "zhOS");
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.page.scss */ "UzcE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_4__);






let Map = class Map {
    constructor(rd, elem) {
        this.rd = rd;
        this.elem = elem;
    }
    ngOnInit() {
        this.class = document.querySelector("#mapwize").childNodes.forEach(element => {
            console.log(element);
        });
        setTimeout(() => {
            var options = {
                apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
                centerOnVenueId: '5d8a191fb99124002d154c93',
                preferredLanguage: 'fr',
                container: 'mapwize',
            };
            mapwize_ui__WEBPACK_IMPORTED_MODULE_4__["map"](options).then((map) => {
                this.elem.nativeElement.querySelectorAll('.mapboxgl-control-container').forEach(el => el.remove());
                map._container.nextElementSibling.firstElementChild.style.marginTop = "8%";
                map._container.parentElement.children[0].nextSibling.childNodes[1].childNodes[1].style.marginBottom = "20%";
                map._container.parentElement.children[0].nextSibling.childNodes[1].childNodes[1].childNodes[1].style.marginRight = "0%";
                map._container.parentElement.children[0].nextSibling.childNodes[1].childNodes[1].childNodes[1].style.width = "90%";
                map._container.parentElement.children[0].nextSibling.childNodes[1].childNodes[0].style.marginBottom = "10%";
            });
        }, 0);
    }
};
Map.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
Map = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Map);



/***/ }),

/***/ "UzcE":
/*!*******************************************!*\
  !*** ./src/app/modules/map/map.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  height: 87vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVBIiwiZmlsZSI6Im1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xuICB3aWR0aDogMTAwJTtcbn1cbiNtYXB3aXplIHtcbmhlaWdodDogODd2aDtcbndpZHRoOiAxMDAlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "rhRE":
/*!*******************************************!*\
  !*** ./src/app/modules/map/map.module.ts ***!
  \*******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "Rg0a");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-routing.module */ "FFZD");









let MapModule = class MapModule {
};
MapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _map_page__WEBPACK_IMPORTED_MODULE_6__["Map"] }]),
            _map_routing_module__WEBPACK_IMPORTED_MODULE_8__["MapRoutingModule"],
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["Map"]]
    })
], MapModule);



/***/ }),

/***/ "zhOS":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/map/map.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>\n              \n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n\n                    <div class=\"map\">\n                        <div id=\"mapwize\"></div>\n                    </div>\n      \n    </ion-content>\n</ion-app>\n\n\n\n\n\n\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=modules-map-map-module.js.map