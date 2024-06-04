(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-news-module"],{

/***/ "BaDi":
/*!**************************************************!*\
  !*** ./src/app/modules/news/news-art.service.ts ***!
  \**************************************************/
/*! exports provided: NewsArtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsArtService", function() { return NewsArtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_article_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/article.mocks */ "nQit");



let NewsArtService = class NewsArtService {
    constructor(ArtMocks) {
        this.ArtMocks = ArtMocks;
    }
    getArticles() {
        return this.ArtMocks.getAll();
    }
};
NewsArtService.ctorParameters = () => [
    { type: src_mocks_article_mocks__WEBPACK_IMPORTED_MODULE_2__["ArticleMocks"] }
];
NewsArtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsArtService);



/***/ }),

/***/ "Q/4p":
/*!*********************************************!*\
  !*** ./src/app/modules/news/news.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.page */ "l0Le");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-routing.module */ "wZUk");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "SgPI":
/*!*********************************************!*\
  !*** ./src/app/modules/news/news.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#00138b;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.news {\n  margin-top: 20%;\n  margin-bottom: 20%;\n  margin-top: 25%;\n}\nimg {\n  width: 100%;\n}\nion-card {\n  padding: 3%;\n}\nion-icon {\n  font-size: 25px;\n}\n.share {\n  margin-left: 58%;\n}\n.left {\n  margin-left: 5%;\n}\n.content {\n  margin-top: 5%;\n  border-bottom: 1px solid #d6d6d6;\n  padding: 2%;\n}\n.date {\n  margin-top: 5%;\n}\nion-row {\n  padding: -5%;\n}\n.logo {\n  background-color: #d6d6d6;\n  color: var(--ion-color-medium-contrast);\n  font-size: 25px;\n  border-radius: 50px;\n  padding: 7px;\n}\nb {\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 4%;\n}\n.logoCol {\n  display: flex;\n  margin-bottom: 2%;\n}\n.iviLogo {\n  width: 10%;\n  height: 10%;\n  margin-top: 10px;\n}\n.photos {\n  display: flex;\n}\n.gym1 {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 6%;\n  margin-bottom: -30%;\n}\n.gym2 {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 13%;\n}\n.gym3 {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 13%;\n}\nstrong {\n  color: black;\n}\np {\n  margin-top: 2%;\n}\n.toggle {\n  margin-left: 5%;\n  width: 90%;\n  background-color: #d6d6d6;\n  border-radius: 5px;\n  padding: 1px;\n}\nbutton {\n  height: 35px;\n  width: 50%;\n  border-color: #d6d6d6 1px solid;\n  border-radius: 5px;\n  transition: 0.5s;\n}\n.cardReservation {\n  padding: -20%;\n}\np {\n  margin-left: 5%;\n  font-size: 25px;\n}\n.resItem {\n  height: 60px;\n}\n.pReservation {\n  font-size: 14px;\n  margin-bottom: 300px;\n}\n.logoStart {\n  margin-right: 20%;\n}\n.colRes {\n  background-color: var(--ion-color-medium-contrast);\n}\n.h6 {\n  top: 0px;\n  font-size: 14px;\n}\n.spanCl {\n  margin-top: 10px;\n}\n.map {\n  background-color: #d6d6d6;\n  margin-top: 10px;\n  height: 30px;\n  width: 40px;\n  border-radius: 25%;\n}\n.map-icon {\n  font-size: 30px;\n  margin-top: 0%;\n  margin-left: 13%;\n  color: var(--ion-color-medium-contrast);\n}\n.h3s {\n  margin-left: 5%;\n}\n.titreC {\n  height: 60px;\n}\n.calandrierJ {\n  font-size: 20px;\n  color: #141414;\n}\n.divC {\n  background-color: var(--ion-color-medium-contrast);\n}\n.row1 {\n  margin-right: 20%;\n  width: 100%;\n  border-bottom: 1px solid #d6d6d6;\n}\n.img1 {\n  width: 99%;\n}\n.img2 {\n  width: 49%;\n}\n.img3 {\n  width: 49%;\n  margin-left: 1%;\n}\n.difArray {\n  border-bottom: 1px solid #d6d6d6;\n}\n.iconCol1 {\n  font-size: 90px;\n}\n.iconCol2 {\n  margin-top: 5%;\n}\n.postp {\n  font-size: 14px;\n}\n.postime {\n  margin-top: 3%;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFLQTtFQUVFLG9CQUFBO0VBS0UsY0FBQTtFQUNGLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ3BCRjtBRHJERTtFQUNJLGVBQUE7QUN1RE47QURvQkE7RUFDRTs7O0lBQUE7RUFLQTtJQUNFLDRCQUFBO0lBQ0Es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QUNDLGVBQUE7QUFzUEwiLCJmaWxlIjoibmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbi8vJHNlY29uZGFyeTpyZ2IoMjE0LCAyMTQsIDIxNCkgO1xuJHNlY29uZGFyeS1jb2w6cmdiKDI0MywgMjQzLCAyNDMpO1xuJHNlY29uZGFyeTpyZ2IoMjE0LCAyMTQsIDIxNCkgO1xuJHByaW1hcnk6IzAwMTM4Yjtcbjpyb290IHtcblxuICAtLWNvbG9yLXRhYnM6IzAwMTM4YjtcblxuICBpb24taXRlbSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogJHByaW1hcnk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmOy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4Oy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmOy8vaWNpXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODsvL2ljaVxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICAqIERhcmsgQ29sb3JzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgYm9keSB7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsMTQwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwxMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LDIyMywxMTc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSw3Myw5NztcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gICAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LDI0NSwyNDg7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG5cbiAgLypcbiAgICogaU9TIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAuaW9zIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMCwwO1xuXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG5cbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cbiAgLmlvcyBpb24tbW9kYWwge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwxOCwxODtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4vKiBJbXBvcnRpbmcgQm9vdHN0cmFwIFNDU1MgZmlsZS4gKi9cbi8vQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcCc7XG4iLCJAdXNlICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcycgYXMgdjtcblxuLm5ld3N7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgICBtYXJnaW4tdG9wOiAyNSU7XG59XG5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pb24tY2FyZHtcbiAgICBwYWRkaW5nOiAzJTtcbn1cbmlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5zaGFyZXtcbiAgICBtYXJnaW4tbGVmdDogNTglO1xufVxuLmxlZnR7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdi4kc2Vjb25kYXJ5O1xuICAgIHBhZGRpbmc6MiU7XG59XG4uZGF0ZXtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbmlvbi1yb3d7XG4gICAgcGFkZGluZzogLTUlO1xufVxuLmxvZ297XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdi4kc2Vjb25kYXJ5O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiA3cHg7XG59XG5ie1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5sb2dvQ29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5pdmlMb2dve1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBob3Rvc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmd5bTF7XG4gICAgaGVpZ2h0OjEwMCUgO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDYlO1xuICAgIG1hcmdpbi1ib3R0b206IC0zMCU7XG59XG4uZ3ltMntcbiAgICBoZWlnaHQ6MTAwJSA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTMlO1xufVxuLmd5bTN7XG4gICAgaGVpZ2h0OjEwMCUgO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEzJTtcbn1cbnN0cm9uZ3tcbiAgICBjb2xvcjogYmxhY2s7XG59XG5we1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuLnRvZ2dsZXtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRzZWNvbmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFweDtcbn1cbmJ1dHRvbntcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItY29sb3I6IHYuJHNlY29uZGFyeSAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG4uY2FyZFJlc2VydmF0aW9ue1xuICAgIHBhZGRpbmc6IC0yMCU7XG59XG5we1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4ucmVzSXRlbXtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG4ucFJlc2VydmF0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMDBweDtcbn1cbi5sb2dvU3RhcnR7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG4uY29sUmVze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xufVxuLmg2e1xuICAgIHRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zcGFuQ2x7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdi4kc2Vjb25kYXJ5O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cbi5tYXAtaWNvbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG59XG4uaDNze1xuICAgIG1hcmdpbi1sZWZ0OjUlIFxufVxuLnRpdHJlQ3tcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG4uY2FsYW5kcmllckp7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XG59XG4uZGl2Q3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbn1cbi5yb3cxe1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIHYuJHNlY29uZGFyeTtcbn1cbi5pbWcxe1xuICAgIHdpZHRoOiA5OSU7XG59XG4uaW1nMntcbiAgICB3aWR0aDogNDklO1xuICAgIFxufVxuLmltZzN7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG4uZGlmQXJyYXl7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICB2LiRzZWNvbmRhcnk7XG59XG4uaWNvbkNvbDF7XG4gICAgZm9udC1zaXplOiA5MHB4O1xufVxuLmljb25Db2wye1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuLnBvc3Rwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wb3N0aW1le1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "Zl8u":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<div class=\"news\" >\n        <ion-card >\n            <div class=\"cardReservation\" >\n                <div class=\"titreC\"style=\"\">\n                    <ion-grid class=\"grid1\" >\n                        <ion-row >\n                            <ion-col size=\"8\" class=\"spanCl\">\n                                <div>\n                                    <span class=\"calandrierJ\">Calendrier du jour</span>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <div class=\"divC\" >\n                    <ion-grid class=\"grid1\" >\n                        <ion-row class=\"row1\" >\n                            <ion-col size=\"2\">\n                                <div class=\"\" >\n                                    <ion-icon class=\"logo\" name=\"calendar-clear-outline\"></ion-icon>\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"8\" class=\"colRes\">\n                                <div>\n                                    <p class=\"h6\">Reunion déquipe <br>\n                                        <span class=\"pReservation\">Dans 30 min - salle Blue</span></p>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"1\" class=\"mapLogo\">\n                                    <div class=\"map\">\n                                        <a href=\"/map\"><ion-icon class=\"map-icon\" name=\"map-outline\"></ion-icon></a> \n                                    </div>\n                                </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                <ion-grid class=\"grid1\">\n                    <ion-row>\n                        <ion-col size=\"2\">\n                            <div class=\"\" >\n                                <ion-icon class=\"logo\" name=\"calendar-clear-outline\"></ion-icon>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"8\" class=\"colRes\">\n                            <div class=\"\" >\n                                <p class=\"h6\">Validations des plans<br>\n                                    <span class=\"pReservation\">A 16h00 -Box B32</span></p>\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"1\">\n                                <div class=\"map\">\n                                    <a href=\"/map\"><ion-icon class=\"map-icon\" name=\"map-outline\"></ion-icon></a> \n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </div>\n        </ion-card>\n        <div class=\"ion\" >\n            <div *ngFor=\"let article of articles;let index = index\">\n                <ion-card class=\"\" >\n                    <div class=\"logoCol\" >\n                        <ion-icon class=\"logo\" name=\"{{article.logo}}-outline\"></ion-icon>\n                        <b>{{article.name}}</b> \n                    </div>\n                    <div *ngIf=\"arrayImg(article.images)\">\n                        <div [hidden]=\"imgItemBoolean\" class=\"images\">\n                            <img class=\"img1\" src=\"{{imgItem1}}\" alt=\"\">\n                            <img class=\"img2\" src=\"{{imgItem2}}\" alt=\"\" >\n                            <img class=\"img3\" src=\"{{imgItem3}}\" alt=\"\">\n                        </div>\n                        <div [hidden]=\"imgBoolean\">\n                            <img src=\"{{img}}\" alt=\"\" style=\"padding-bottom: 5px;\">\n                        </div>\n                    </div>\n                    <ion-icon color=\"{{article.like}}\" (click)=\"ArticleLike(article)\" name=\"heart-outline\"></ion-icon>\n                    <ion-icon  class=\"left\" (click)=\"presentAlertMultipleButtons()\"name=\"chatbubble-outline\"></ion-icon>\n                    <ion-icon  class=\"left\" name=\"share-social-outline\"></ion-icon>\n                    <ion-icon color=\"{{article.share}}\" class=\"share\" (click)=\"ArticleShare(article)\" name=\"bookmark-outline\"></ion-icon>\n                    <p style=\"font-size: 16px;\" ><strong >{{article.desc}}</strong></p>\n                    <div class=\"difArray\" *ngIf=\"arrayCheck(article.post,article)\" >\n                        <ion-grid class=\"gridM\" [hidden]=\"MeteoArt\" >\n                            <ion-row>\n                                <ion-col size=\"4\">\n                                    <ion-icon class=\"iconCol1\" name=\"{{icon}}\" ></ion-icon>\n                                </ion-col>\n                                <ion-col class=\"iconCol2\" size=\"6\" >\n                                    <strong>{{desc}}</strong>\n                                    <br>{{temp}}<br>{{autre}} \n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <p class=\"postp\"  >{{post}} </p>\n                    </div>\n                <p  class=\"postime\"  >{{article.time}}</p>\n                </ion-card>\n            </div>\n                <ion-infinite-scroll threshold=\"100px\"(ionInfinite)=\"loadData($event)\" >\n                    <ion-infinite-scroll-content\n                    loadingSpinner=\"bubbles\"\n                    loadingText=\"Charger...\">\n                    </ion-infinite-scroll-content>\n                </ion-infinite-scroll>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "l0Le":
/*!*******************************************!*\
  !*** ./src/app/modules/news/news.page.ts ***!
  \*******************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./news.page.html */ "Zl8u");
/* harmony import */ var _news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.page.scss */ "SgPI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _news_art_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-art.service */ "BaDi");







let Tab2Page = class Tab2Page {
    constructor(alertController, ArtServices) {
        this.alertController = alertController;
        this.ArtServices = ArtServices;
        this.today = new Date();
        this.limit = 40;
        this.truncating = false;
        this.card1 = "";
        this.card2 = "";
        this.MeteoArt = false;
        this.iconColor = '';
        this.ArrayArt = true;
        this.imgBoolean = true;
        this.imgItemBoolean = true;
        this.now = new Date().toString();
    }
    presentAlertMultipleButtons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Message',
                buttons: [{
                        text: "Commenter",
                        cssClass: 'my-alert'
                    },
                ],
                inputs: [
                    {
                        name: 'message',
                    }
                ]
            });
            yield alert.present();
        });
    }
    ArticleShare(event) {
        this.index = event.id;
        if (this.articles[this.index - 1].share == '') {
            this.articles[this.index - 1].share = 'danger';
        }
        else {
            this.articles[this.index - 1].share = '';
        }
        console.log(this.articles[this.index - 1]);
    }
    ArticleLike(event) {
        this.index = event.id;
        if (this.articles[this.index - 1].like == '') {
            this.articles[this.index - 1].like = 'danger';
        }
        else {
            this.articles[this.index - 1].like = '';
        }
        console.log(this.articles[this.index - 1]);
    }
    load() {
        this.articles.push(this.art6, this.art7);
        if (this.articles.length > 7) {
            this.articles.splice(7.2);
        }
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            this.load();
        }, 2000);
    }
    arrayCheck(article, articleDesc) {
        if (article.length < 2) {
            this.MeteoArt = false;
            for (var e of Object.keys(article)) {
                return this.icon = article[e].icon,
                    this.temp = article[e].temp,
                    this.autre = article[e].autre,
                    this.desc = article[e].desc;
            }
        }
        else {
            this.MeteoArt = true;
            this.icon = '';
            this.temp = '';
            this.autre = '';
            this.desc = '';
            return this.post = article;
        }
    }
    arrayImg(img) {
        if (img.length < 5) {
            this.imgBoolean = true;
            this.imgItemBoolean = false;
            for (var i = 0; i < img.length; i++) {
                this.imgItem1 = img[0].images;
                this.imgItem2 = img[1].images;
                this.imgItem3 = img[2].images;
                return this.imgItem1, this.imgItem2, this.imgItem3;
            }
        }
        else {
            this.imgBoolean = false;
            this.imgItemBoolean = true;
            this.img = img.images;
            return this.img;
        }
    }
    ngOnInit() {
        this.articles = this.ArtServices.getArticles();
        this.art6 = this.articles[5];
        this.art7 = this.articles[6];
        if (this.ArrayArt) {
            this.articles.splice(6);
            this.articles.splice(5);
            console.log(this.articles);
        }
        else {
            return this.articles;
        }
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _news_art_service__WEBPACK_IMPORTED_MODULE_5__["NewsArtService"] }
];
Tab2Page.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }],
    mytoggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mytoggle', { static: true },] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_news_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "nQit":
/*!************************************!*\
  !*** ./src/mocks/article.mocks.ts ***!
  \************************************/
/*! exports provided: ArticleMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMocks", function() { return ArticleMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ArticleMocks = class ArticleMocks {
    constructor() {
        this.Picture = [
            { id: 1, base64: '', images: 'assets/images/meteoo.jpeg', },
            { id: 2, base64: '', images: 'assets/images/revue.jpeg', },
            { id: 3, base64: '', images: 'assets/images/gym1.jpeg', },
            { id: 4, base64: '', images: 'assets/images/gym2.jpeg', },
            { id: 5, base64: '', images: 'assets/images/gym3.jpeg', },
            { id: 6, base64: '', images: 'assets/images/plat1.jpeg', },
            { id: 7, base64: '', images: 'assets/images/plat2.jpeg', },
            { id: 8, base64: '', images: 'assets/images/plat3.jpeg', },
            { id: 9, base64: '', images: 'assets/images/entreprise.jpeg', },
            { id: 10, base64: '', images: 'assets/images/cyberS.jpeg', },
            { id: 11, base64: '', images: 'assets/images/gel-h.jpeg', },
        ];
        this.article = [
            {
                id: 1,
                name: 'Météo',
                desc: '',
                profile: 'Profile',
                post: [{ icon: 'sunny-outline', temp: '16%', autre: '72%', desc: 'Paris la défense' }],
                images: this.Picture[0],
                comments: 'Comment',
                time: 'il y a une heure',
                logo: 'cloud',
                like: '',
                share: '',
            },
            {
                id: 2,
                name: 'Actualité',
                desc: 'Les Bourses lancent une OPA sur la data ',
                profile: 'Profile',
                post: 'En perte de vitesse, les places boursières font le pari d’investir dans les données. En témoigne le rachat, par le London Stock Exchange,  du secteur informations et analyses financières de Reuters.',
                images: this.Picture[1],
                comments: 'Comment',
                time: 'il y a une heure',
                logo: 'globe',
                like: '',
                share: '',
            },
            {
                id: 3,
                name: 'Fitness',
                desc: 'Seance de relaxation ',
                profile: 'Profile',
                post: 'Inscrivez-vous ! 16h00-17h00 18h00-19h00',
                images: [this.Picture[2], this.Picture[3], this.Picture[4]],
                comments: 'Comment',
                time: 'il y a une heure',
                logo: 'barbell',
                like: '',
                share: '',
            },
            {
                id: 4,
                name: 'Restauration - Extrait',
                desc: 'Menu du jour ',
                profile: 'Profile',
                post: 'Plat du jour :  Salade composée - 5€50 Dessert :  poires aux amandes- 2€30',
                images: [this.Picture[5], this.Picture[6], this.Picture[7]],
                comments: 'Comment',
                time: 'il y a une heure',
                logo: 'fast-food',
                like: '',
                share: '',
            },
            {
                id: 5,
                name: 'IVIPlay Assistance',
                desc: 'Pour toute demande d\'assistance technique..',
                profile: 'Profile',
                post: 'N\'hésitez pas à nous contacter par mail : supportit@iviflo.com',
                images: this.Picture[8],
                comments: 'Comment',
                time: 'il y a une heure',
                logo: 'barbell',
                like: '',
                share: '',
            },
            {
                id: 6,
                name: 'IVIPlay Bonne Pratiques',
                desc: 'Récemment un de nos collaborateur a subit une attaque de phishing',
                profile: 'Profile',
                post: 'Merci de votre vigilance et de garder le bon réflexe de nous prévenir , comme le collaborateur aui a remonté cette alerte',
                images: this.Picture[9],
                comments: 'Comment',
                time: 'il y a une heure',
                like: '',
                share: '',
                logo: 'barbell',
            },
            {
                id: 7,
                name: 'IVIPlay Prévention',
                desc: 'Pour lasécurité de tous,veuillez respecter les gestes barriere',
                profile: 'Profile',
                post: 'Vous disposez des mesures de prévention de la Covid-19 en  cliquant sur le lien ',
                images: this.Picture[10],
                comments: 'Comment',
                time: 'il y a une heure',
                like: '',
                share: '',
                logo: 'barbell',
            },
        ];
    }
    getAll() {
        return this.article;
    }
};
ArticleMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArticleMocks);



/***/ }),

/***/ "wZUk":
/*!*****************************************************!*\
  !*** ./src/app/modules/news/news-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.page */ "l0Le");




const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-news-news-module.js.map