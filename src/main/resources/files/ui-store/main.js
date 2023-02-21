"use strict";
(self["webpackChunkui_store"] = self["webpackChunkui_store"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-category-menu/product-category-menu.component */ 5428);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart-status/cart-status.component */ 2769);
/* harmony import */ var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-status/login-status.component */ 3946);






class AppComponent {
  constructor() {
    this.title = 'ui-store';
  }

  contacts() {
    alert("test");
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 21,
  vars: 0,
  consts: [[1, "page-wrapper"], [1, "menu-sidebar", "d-none", "d-lg-block"], [1, "logo"], ["routerLink", "/products"], ["src", "assets/images/logo.jpg", "alt", "luv2shop", "width", "80px", "height", "60px", 1, "img-responsive"], [1, "page-container"], [1, "header-desktop"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "header-wrap"], [1, "account-wrap"], ["href", "http://localhost:4200/about"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-product-category-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "header", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-search")(12, "app-login-status")(13, "app-cart-status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "footer")(17, "ul")(18, "li")(19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_0__.ProductCategoryMenuComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_2__.CartStatusComponent, _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_3__.LoginStatusComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 4646);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product.service */ 6082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-category-menu/product-category-menu.component */ 5428);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-details/product-details.component */ 6525);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart-status/cart-status.component */ 2769);
/* harmony import */ var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cart-details/cart-details.component */ 1201);
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkout/checkout.component */ 8149);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login-status/login-status.component */ 3946);
/* harmony import */ var src_app_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth-interceptor.service */ 2993);
/* harmony import */ var _components_members_page_members_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/members-page/members-page.component */ 5367);
/* harmony import */ var _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/order-history/order-history.component */ 8767);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/alert/alert.component */ 9803);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);






















/* import { OktaAuthModule, OktaCallbackComponent, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@Okta/okta-auth-js'; */











/* const oktaConfig = myAppConfig.oidc;

const oktaAuth = new OktaAuth(oktaConfig); */

function sendToLoginPage(injector) {
  const router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router);
  router.navigate(['/login']);
}

const routes = [{
  path: 'order-history',
  component: _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_13__.OrderHistoryComponent
  /* canActivate: [true], data: { onAuthRequired: sendToLoginPage } */

}, {
  path: 'members',
  component: _components_members_page_members_page_component__WEBPACK_IMPORTED_MODULE_12__.MembersPageComponent
  /* , canActivate: [false], data: { onAuthRequired: sendToLoginPage } */

}, {
  path: 'login/callback',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent
}, {
  path: 'alert',
  component: _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__.AlertComponent
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__.AboutComponent
}, {
  path: 'checkout',
  component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__.CheckoutComponent
}, {
  path: 'cart-details',
  component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_7__.CartDetailsComponent
}, {
  path: 'product/getInfo/:id',
  component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailsComponent
}, {
  path: 'product/getProducts/search/:keyword',
  component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: 'product/getProducts/:id',
  component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: 'product/getProducts',
  component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: '',
  redirectTo: 'product/getProducts',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'product/getProducts',
  pathMatch: 'full'
}];
class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
    useClass: src_app_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptorService,
    multi: true
  }
  /* , { provide: OKTA_CONFIG, useValue: { oktaAuth }} */
  ],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_26__.ToastrModule.forRoot()
  /* OktaAuthModule */
  ]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent, _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_3__.ProductCategoryMenuComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailsComponent, _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_6__.CartStatusComponent, _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_7__.CartDetailsComponent, _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__.CheckoutComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent, _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_10__.LoginStatusComponent, _components_members_page_members_page_component__WEBPACK_IMPORTED_MODULE_12__.MembersPageComponent, _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_13__.OrderHistoryComponent, _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__.AlertComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__.AboutComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_26__.ToastrModule]
  });
})();

/***/ }),

/***/ 593:
/*!***********************************!*\
  !*** ./src/app/common/address.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* binding */ Address)
/* harmony export */ });
class Address {}

/***/ }),

/***/ 3162:
/*!*************************************!*\
  !*** ./src/app/common/cart-item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItem": () => (/* binding */ CartItem)
/* harmony export */ });
class CartItem {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.discountPrice = product.discountPrice;
    this.quantity = 1;
  }

}

/***/ }),

/***/ 1385:
/*!************************************!*\
  !*** ./src/app/common/customer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer": () => (/* binding */ Customer)
/* harmony export */ });
class Customer {}

/***/ }),

/***/ 5447:
/*!*****************************************!*\
  !*** ./src/app/common/message-model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageModel": () => (/* binding */ MessageModel)
/* harmony export */ });
class MessageModel {}

/***/ }),

/***/ 9197:
/*!**************************************!*\
  !*** ./src/app/common/order-item.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
  constructor(cartItem) {
    this.imageUrl = cartItem.imageUrl;
    this.discountPrice = cartItem.discountPrice;
    this.unitPrice = cartItem.unitPrice;
    this.quantity = cartItem.quantity;
    this.productId = cartItem.id;
  }

}

/***/ }),

/***/ 2759:
/*!*********************************!*\
  !*** ./src/app/common/order.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {}

/***/ }),

/***/ 9658:
/*!************************************!*\
  !*** ./src/app/common/purchase.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Purchase": () => (/* binding */ Purchase)
/* harmony export */ });
class Purchase {}

/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {}

AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};

AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 24,
  vars: 0,
  consts: [["src", "assets/images/logo.jpg", 1, "center"], [1, "bi", "bi-geo"], [1, "bi", "bi-mailbox"], [1, "bi", "bi-phone"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr")(1, "hr")(2, "hr")(3, "hr")(4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nandini Cafe Treats!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Exclusive Narasus Products Available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "For Delivery and any queries, please contact 9944370922/8754084538.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div")(15, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div")(18, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " No:R-77, Ground Floor, MMDA Colony, Water Tank Road, Arumbakkam,Near Poorvika Showroom, Chennai - 600029 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " nctmegastore@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 9944370922/8754084538. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".center[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9803:
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AlertComponent {}

AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)();
};

AlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["app-alert"]],
  decls: 2,
  vars: 0,
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Order has been received.\\nWe will get back you soon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1201:
/*!*******************************************************************!*\
  !*** ./src/app/components/cart-details/cart-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartDetailsComponent": () => (/* binding */ CartDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function CartDetailsComponent_div_3_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p")(10, "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "div", 14)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const temp_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.incrementQuantity(temp_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const temp_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.decrementQuantity(temp_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div")(28, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const temp_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.remove(temp_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const temp_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", temp_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](temp_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 6, temp_r4.discountPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 9, temp_r4.unitPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", temp_r4.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Subtotal:", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 12, temp_r4.quantity * temp_r4.discountPrice, "INR"), "");
  }
}

function CartDetailsComponent_div_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delivery Charges:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Applicable for below 1000 Rupees.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}

function CartDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "table", 5)(2, "tr")(3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Product Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CartDetailsComponent_div_3_tr_8_Template, 33, 15, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CartDetailsComponent_div_3_div_24_Template, 6, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx_r0.totalQuantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total MRP: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 6, ctx_r0.totalDiscount + ctx_r0.totalPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Discount: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 9, ctx_r0.totalDiscount, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Grand Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](23, 12, ctx_r0.totalPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.shippingFees);
  }
}

function CartDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your Shopping Cart is Empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

class CartDetailsComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartItems = [];
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalQuantity = 0;
    this.shippingFees = true;
  }

  ngOnInit() {
    this.listCartDetails();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalDiscount.subscribe(data => this.totalDiscount = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.computeCartTotals();

    if (this.totalPrice > 1000) {
      this.shippingFees = false;
    }
  }

  incrementQuantity(item) {
    this.cartService.addToCart(item);
  }

  decrementQuantity(item) {
    this.cartService.decrementQuantity(item);
  }

  remove(item) {
    this.cartService.remove(item);
  }

}

CartDetailsComponent.ɵfac = function CartDetailsComponent_Factory(t) {
  return new (t || CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};

CartDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CartDetailsComponent,
  selectors: [["app-cart-details"]],
  decls: 5,
  vars: 2,
  consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "50%"], ["width", "30%"], [4, "ngFor", "ngForOf"], ["colspan", "2"], ["routerLink", "/checkout", 1, "btn", "btn-primary"], ["width", "150px", 1, "image-responsive", 3, "src"], [1, "price"], [1, "items"], [1, "row", "no-gutters"], [1, "col"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fan", "fa-plus"], [1, "col", "ml-4", "mr-2"], [1, "fan", "fa-minus"], [1, "col-8"], [1, "btn", "btn-primary", "btn-sm", "mt-2", 3, "click"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
  template: function CartDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CartDetailsComponent_div_3_Template, 28, 15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CartDetailsComponent_div_4_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length == 0);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2769:
/*!*****************************************************************!*\
  !*** ./src/app/components/cart-status/cart-status.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStatusComponent": () => (/* binding */ CartStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class CartStatusComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.totalPrice = 0.00;
    this.totalDiscount = 0.00;
    this.totalQuantity = 0;
  }

  ngOnInit() {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.totalDiscount.subscribe(data => this.totalDiscount = data);
  }

}

CartStatusComponent.ɵfac = function CartStatusComponent_Factory(t) {
  return new (t || CartStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};

CartStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CartStatusComponent,
  selectors: [["app-cart-status"]],
  decls: 8,
  vars: 5,
  consts: [[1, "cart-area", "d-n"], ["routerLink", "/cart-details"], [1, "total"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
  template: function CartStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, ctx.totalPrice, "INR"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.totalQuantity, "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8149:
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/validators/shop-validators */ 1562);
/* harmony import */ var src_app_common_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/address */ 593);
/* harmony import */ var src_app_common_purchase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/purchase */ 9658);
/* harmony import */ var src_app_common_order_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/order-item */ 9197);
/* harmony import */ var src_app_common_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/order */ 2759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_shop_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shop-form.service */ 8303);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/checkout.service */ 8106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);















function CheckoutComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " First Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " First Name atLeast 2 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_14_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_14_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.firstName.errors.required || ctx_r0.firstName.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.firstName.errors.minLength);
  }
}

function CheckoutComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Last Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Last Name atLeast 1 Character Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_22_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_22_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors.required || ctx_r1.lastName.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors.minLength);
  }
}

function CheckoutComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Phone Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Phone Number must be 10 digits Long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_30_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_30_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.phone.errors.required || ctx_r2.phone.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.phone.errors.minLength);
  }
}

function CheckoutComponent_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Street is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_48_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Street atLeast 2 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_48_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_48_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.shippingAddressStreet.errors.required || ctx_r3.shippingAddressStreet.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.shippingAddressStreet.errors.minLength);
  }
}

function CheckoutComponent_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Location atLeast 2 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_56_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_56_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.shippingAddressCity.errors.required || ctx_r4.shippingAddressCity.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.shippingAddressCity.errors.minLength);
  }
}

function CheckoutComponent_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " ZipCode is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_64_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " ZipCode atLeast 6 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_64_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_64_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressZipCode.errors.required || ctx_r5.shippingAddressZipCode.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressZipCode.errors.minLength);
  }
}

function CheckoutComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Delivery Charges applicable for below 1000 Rupees.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class CheckoutComponent {
  constructor(formBuilder, shopFormService, cartService, checkoutService, router, toastr) {
    this.formBuilder = formBuilder;
    this.shopFormService = shopFormService;
    this.cartService = cartService;
    this.checkoutService = checkoutService;
    this.router = router;
    this.toastr = toastr;
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalQuantity = 0;
    this.shippingFees = true;
    this.phones = null;
    this.customerValidate = false;
    this.checkDisk = false;
    this.address = new src_app_common_address__WEBPACK_IMPORTED_MODULE_1__.Address();
    this.storage = localStorage;
  }

  ngOnInit() {
    this.reviewCartDetails();
    this.getAddressDetails();
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2), src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),
        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('[0-9]{10}')]),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('') //email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9._]+\\.[a-z]{2,4}$')])

      }),
      shippingAddress: this.formBuilder.group({
        /* country: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]), */
        street: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),
        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),

        /* state: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]), */
        zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6), src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace])
      }) //,

      /* billingAddress: this.formBuilder.group({
      country: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      street: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      city: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      state: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      zipCode: new FormControl('',[Validators.required,Validators.minLength(6),ShopValidators.notOnlyWhiteSpace]),
      }) */

      /* creditCard: this.formBuilder.group({
      cardType: new FormControl('',[Validators.required]),
      nameOnCard: new FormControl('',[Validators.required,Validators.minLength(2),ShopValidators.notOnlyWhiteSpace]),
      cardNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{16}')]),
      securityCode: new FormControl('',[Validators.required,Validators.pattern('[0-9]{3}')]),
      expirationMonth: new FormControl('',[Validators.required]),
      expirationYear: new FormControl('',[Validators.required])
      }) */

    }); //populate creditCard months

    /* const startMonth: number = new Date().getMonth()+1;
    
    this.shopFormService.getCreditCardMonths(startMonth).subscribe(
    data=>{
    this.creditCardMonths = data;
    });
    
    this.shopFormService.getCreditCardYears().subscribe(
    data=>{
    this.creditCardYears = data;
    }); */
  }

  onSubmit() {
    //alert(this.checkoutFormGroup.get('customer').value.email);
    if (this.checkoutFormGroup.invalid) {
      //alert('test');
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    this.phones = this.checkoutFormGroup.get('customer.phone').value; //this.phones = JSON.parse(this.storage.getItem('phone'));
    //alert(this.phones);

    this.checkoutService.validateCustomer(this.phones).subscribe({
      next: response => {
        if (response != null && response.identity != null && response.identity.length > 0) {
          let order = new src_app_common_order__WEBPACK_IMPORTED_MODULE_4__.Order();
          order.totalPrice = this.totalPrice;
          order.totalQuantity = this.totalQuantity;
          const cartItems = this.cartService.cartItems;
          let orderItems = cartItems.map(temp => new src_app_common_order_item__WEBPACK_IMPORTED_MODULE_3__.OrderItem(temp));
          let purchase = new src_app_common_purchase__WEBPACK_IMPORTED_MODULE_2__.Purchase();
          purchase.customer = this.checkoutFormGroup.controls['customer'].value; //purchase.customer.identity = genUniqueId();

          purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value; //const shippingState: string = JSON.parse(JSON.stringify(purchase.shippingAddress.state));

          /* const shippingCountry: string = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
          purchase.shippingAddress.state = shippingState;
          purchase.shippingAddress.country = shippingCountry;  */

          /*    purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
             const billingState: string = JSON.parse(JSON.stringify(purchase.billingAddress.state));
             const billingCountry: string = JSON.parse(JSON.stringify(purchase.billingAddress.country));
             purchase.billingAddress.state = billingState;
             purchase.billingAddress.country = billingCountry; */

          purchase.order = order;
          purchase.orderItems = orderItems;
          this.checkoutService.placeOrder(purchase).subscribe({
            next: response => {
              //alert(`Your Order has been received.\nOrder Tracking Number:${response.orderTrackingNumber}`);
              //alert(`Your Order has been received.\nWe will get back you soon.`);
              this.resetCart();
              this.toastr.success("Your Order has been received.\nWe will get back you soon.", "Ordered Successfully!");
              this.router.navigateByUrl("/order-history");
            },
            error: err => {
              //alert(`There was an error:${err.message}`);
              console.log(`There was an error:${err.message}`);
            }
          });
        } else {
          this.toastr.warning("Please Verify your mobile number.", "Need Verification!");
          this.router.navigateByUrl("login");
        }
      },
      error: err => {
        //alert(`There was an error:${err.message}`);
        console.log(`There was an error:${err.message}`);
        return;
      }
    });
  }

  get firstName() {
    return this.checkoutFormGroup.get('customer.firstName');
  }

  get lastName() {
    return this.checkoutFormGroup.get('customer.lastName');
  }

  get phone() {
    return this.checkoutFormGroup.get('customer.phone');
  }

  get email() {
    return this.checkoutFormGroup.get('customer.email');
  }

  get shippingAddressStreet() {
    return this.checkoutFormGroup.get('shippingAddress.street');
  }

  get shippingAddressCity() {
    return this.checkoutFormGroup.get('shippingAddress.city');
  }
  /* get shippingAddressState(){ return this.checkoutFormGroup.get('shippingAddress.state');} */


  get shippingAddressZipCode() {
    return this.checkoutFormGroup.get('shippingAddress.zipCode');
  }
  /* get shippingAddressCountry(){ return this.checkoutFormGroup.get('shippingAddress.country');} */

  /*
  get billingAddressStreet(){ return this.checkoutFormGroup.get('billingAddress.street');}
  get billingAddressCity(){ return this.checkoutFormGroup.get('billingAddress.city');}
  get billingAddressState(){ return this.checkoutFormGroup.get('billingAddress.state');}
  get billingAddressZipCode(){ return this.checkoutFormGroup.get('billingAddress.zipCode');}
  get billingAddressCountry(){ return this.checkoutFormGroup.get('billingAddress.country');}
   */

  /*
  get creditCardType(){ return this.checkoutFormGroup.get('creditCard.cardType');}
  get creditCardNameOnCard(){ return this.checkoutFormGroup.get('creditCard.nameOnCard');}
  get creditCardNumber(){ return this.checkoutFormGroup.get('creditCard.cardNumber');}
  get creditCardSecurityCode(){ return this.checkoutFormGroup.get('creditCard.securityCode');}
   */

  /* copyShippingAddressToBillingAddress(event){
  if(event.target.checked){
  this.checkoutFormGroup.controls.billingAddress.setValue(this.checkoutFormGroup.controls.shippingAddress.value);
  }else{
  this.checkoutFormGroup.controls.billingAddress.reset();
  }
  } */


  resetCart() {
    this.cartService.cartItems = [];
    this.cartService.totalQuantity.next(0);
    this.cartService.totalPrice.next(0);
    this.cartService.totalDiscount.next(0);
    this.checkoutFormGroup.reset();
    this.router.navigateByUrl("/product/getProducts");
  }

  handleMonthsAndYears() {
    /* const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);
    
    let startMonth: number;
    if(currentYear==selectedYear){
      startMonth = new Date().getMonth()+1;
    }else{
      startMonth = 1;
    }
    
    this.shopFormService.getCreditCardMonths(startMonth).subscribe(
    data=>{
    this.creditCardMonths = data;
    }
    ); */
  }

  reviewCartDetails() {
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalDiscount.subscribe(data => this.totalDiscount = data);

    if (this.totalPrice > 1000) {
      this.shippingFees = false;
    }
  }

  getAddressDetails() {
    this.phones = JSON.parse(this.storage.getItem('phone'));

    if (this.phones && this.phones.length > 0) {
      this.cartService.getProfile(this.phones).subscribe({
        next: response => {
          if (response != null) {
            this.address.street = response.shippingAddress.street;
            this.address.city = response.shippingAddress.city;
            this.address.zipCode = response.shippingAddress.zipCode;
            this.checkoutFormGroup.get('customer.firstName').setValue(response.customer.firstName);
            this.checkoutFormGroup.get('customer.lastName').setValue(response.customer.lastName);

            if (response.customer.phone != null) {
              this.checkDisk = true;
            }

            this.checkoutFormGroup.get('customer.phone').setValue(response.customer.phone);
            this.checkoutFormGroup.get('customer.email').setValue(response.customer.email);
            this.checkoutFormGroup.get('shippingAddress.city').setValue(response.shippingAddress.city);
            this.checkoutFormGroup.get('shippingAddress.street').setValue(response.shippingAddress.street);
            this.checkoutFormGroup.get('shippingAddress.zipCode').setValue(response.shippingAddress.zipCode);
          } else {
            this.checkoutFormGroup.get('customer.phone').setValue(this.phones);
            this.checkDisk = true;
          }
        },
        error: err => {
          //alert(`There was an error:${err.message}`);
          console.log(`There was an error:${err.message}`);
        }
      });
    }
  }

}

CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
  return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_shop_form_service__WEBPACK_IMPORTED_MODULE_5__.ShopFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_7__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
};

CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CheckoutComponent,
  selectors: [["app-checkout"]],
  decls: 77,
  vars: 14,
  consts: [[1, "main-content", "page-m"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [3, "formGroup", "ngSubmit"], ["formGroupName", "customer", 1, "form-area"], [1, "row"], [1, "col-md-2"], [1, "col-md-9"], [1, "input-space"], ["formControlName", "firstName", "type", "text"], ["class", "alert alert-danger mt-1", 4, "ngIf"], ["formControlName", "lastName", "type", "text"], ["formControlName", "phone", "type", "text", 3, "readonly"], ["formControlName", "email", "type", "text"], ["formGroupName", "shippingAddress", 1, "form-area"], ["formControlName", "street", "type", "text"], ["formControlName", "city", "type", "text"], ["formControlName", "zipCode", "type", "text"], [1, "form-area"], [4, "ngIf"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-info"], [1, "alert", "alert-danger", "mt-1"]],
  template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, CheckoutComponent_div_14_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, CheckoutComponent_div_22_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 5)(24, "div", 6)(25, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 7)(28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, CheckoutComponent_div_30_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 5)(32, "div", 6)(33, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 7)(36, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 14)(39, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Shipping Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 5)(42, "div", 6)(43, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 7)(46, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, CheckoutComponent_div_48_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 5)(50, "div", 6)(51, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 7)(54, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, CheckoutComponent_div_56_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 5)(58, "div", 6)(59, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Zip Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 7)(62, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](63, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, CheckoutComponent_div_64_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 18)(66, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Review Your Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, CheckoutComponent_div_73_Template, 6, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 20)(75, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Purchase");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.firstName.invalid && (ctx.firstName.dirty || ctx.firstName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.lastName.invalid && (ctx.lastName.dirty || ctx.lastName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.checkDisk);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.phone.invalid && (ctx.phone.dirty || ctx.phone.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingAddressStreet.invalid && (ctx.shippingAddressStreet.dirty || ctx.shippingAddressStreet.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingAddressCity.invalid && (ctx.shippingAddressCity.dirty || ctx.shippingAddressCity.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingAddressZipCode.invalid && (ctx.shippingAddressZipCode.dirty || ctx.shippingAddressZipCode.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx.totalQuantity, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](72, 11, ctx.totalPrice, "INR"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingFees);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

function genUniqueId() {
  const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

  const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

/***/ }),

/***/ 3946:
/*!*******************************************************************!*\
  !*** ./src/app/components/login-status/login-status.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginStatusComponent": () => (/* binding */ LoginStatusComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/customer */ 1385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function LoginStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Welcome Back ", ctx_r0.userFullName, "! ");
  }
}

function LoginStatusComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function LoginStatusComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function LoginStatusComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginStatusComponent_div_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
/* import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js'; */


class LoginStatusComponent {
  constructor(
  /* private oktaAuthService: OktaAuthStateService,
  @Inject(OKTA_AUTH) private oktaAuth: OktaAuth */
  route, authService, router) {
    this.route = route;
    this.authService = authService;
    this.router = router;
    this.isAuthenticated = false;
    this.userFullName = '';
    this.orderHistory = false;
    this.memberShow = false;
    this.storage = localStorage;
  }

  ngOnInit() {
    /*   this.oktaAuthService.authState$.subscribe(
        (result)=> {
          this.isAuthenticated = result.isAuthenticated;
          this.getUserDetails();
        }
      ); */
    let customer = new src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__.Customer();
    customer.phone = JSON.parse(this.storage.getItem('phone'));
    customer.identity = JSON.parse(this.storage.getItem('identity'));

    if (customer.phone == '9944370922' && customer.identity == '870306080171') {
      this.authService.getAuthenticateDetail(customer).subscribe({
        next: response => {
          this.memberShow = true;
        },
        error: err => {
          this.memberShow = false;
          console.log(`There was an error:${err.message}`);
        }
      });
    }

    this.orderHistory = JSON.parse(this.storage.getItem('orderHistory'));
  }

  getUserDetails() {
    /*   if(this.isAuthenticated){
        this.oktaAuth.getUser().then(
          (res)=> {
            this.userFullName = res.user as string;
    
            const theEmail = res.email;
            this.storage.setItem('userEmail',JSON.stringify(theEmail));
          }
        );
      } */
  }

  logout() {
    /* this.oktaAuth.signOut(); */
    this.storage.clear();
    this.memberShow = false;
    location.reload();
    this.router.navigateByUrl("product/getProducts");
  }

}

LoginStatusComponent.ɵfac = function LoginStatusComponent_Factory(t) {
  return new (t || LoginStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

LoginStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginStatusComponent,
  selectors: [["app-login-status"]],
  decls: 11,
  vars: 4,
  consts: [[1, "login-status-header"], ["class", "login-status-user-info", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "R-77,\n  Ground Floor,\n  MMDA Colony, Water Tank Road,\n  Arumbakkam,\n  Near Poorvika Showroom,\n  Chennai - 600029", 1, "security-btn"], [1, "bi", "bi-geo"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Call Us For Delivery!", 1, "security-btn", "ml-1"], [1, "bi", "bi-phone"], [4, "ngIf"], [1, "login-status-user-info"], ["routerLink", "/login", 1, "security-btn"], ["routerLink", "/members", 1, "security-btn", "ml-1"], ["routerLink", "/order-history", 1, "security-btn", "ml-3"], [1, "security-btn", 3, "click"]],
  template: function LoginStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginStatusComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "9944370922");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LoginStatusComponent_div_8_Template, 3, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginStatusComponent_div_9_Template, 3, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginStatusComponent_div_10_Template, 5, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.userFullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.orderHistory);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.memberShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orderHistory);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".security-btn[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    right:0;\r\n    min-width:95px;\r\n    color:#fff;\r\n    border:10px solid #205b8d;\r\n    border-radius:43px;\r\n    background:#205b8d\r\n}\r\n\r\n.login-status-header[_ngcontent-%COMP%]{\r\n    display:flex\r\n}\r\n\r\n.login-status-user-info[_ngcontent-%COMP%] {\r\n    line-height:43px;\r\n    border:1px;\r\n    padding:0 17px;\r\n    border-radius:3px;\r\n    transition:all .5s ease\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1zdGF0dXMvbG9naW4tc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLGNBQWM7SUFDZCxVQUFVO0lBQ1YseUJBQXlCO0lBR3pCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBS0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYztJQUdkLGlCQUFpQjtJQUlqQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3VyaXR5LWJ0biB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBtaW4td2lkdGg6OTVweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6MTBweCBzb2xpZCAjMjA1YjhkO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjQzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiMyMDViOGRcclxufVxyXG5cclxuLmxvZ2luLXN0YXR1cy1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTotd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5Oi1tb3otYm94O1xyXG4gICAgZGlzcGxheTotbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6ZmxleFxyXG59XHJcblxyXG4ubG9naW4tc3RhdHVzLXVzZXItaW5mbyB7XHJcbiAgICBsaW5lLWhlaWdodDo0M3B4O1xyXG4gICAgYm9yZGVyOjFweDtcclxuICAgIHBhZGRpbmc6MCAxN3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/message-model */ 5447);
/* harmony import */ var src_app_common_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/customer */ 1385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_otp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/otp.service */ 8369);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);











class LoginComponent {
  constructor(route, router, otpService, authService
  /* @Inject(OKTA_AUTH) private oktaAuth: OktaAuth */
  ) {
    this.route = route;
    this.router = router;
    this.otpService = otpService;
    this.authService = authService;
    /* oktaSignin: any; */

    this.username = "";
    this.password = "";
    this.phone = "";
    this.errorMsg = "Please Enter Mobile Number to Proceed.";
    this.otp = "";
    this.isDisabled = true;
    this.storage = localStorage;

    if (JSON.parse(this.storage.getItem('orderHistory'))) {
      this.router.navigateByUrl("product/getProducts");
    }
    /* this.oktaSignin = new OktaSignIn({
      logo: 'assets/images/logo.png',
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }
    }); */


    if (JSON.parse(this.storage.getItem('phone')) != null) {
      this.phone = JSON.parse(this.storage.getItem('phone'));
    }
  }

  ngOnInit() {
    /* this.oktaSignin.remove();
            this.oktaSignin.renderEl({
      el: '#okta-sign-in-widget'},
      (response: any)=>{
        if(response.status=== 'SUCCESS'){
          this.oktaAuth.signInWithRedirect();
        }
      },
      (error: any) => {
        throw error;
       }
      ); */
  }

  submit() {
    if (this.otp == "" || this.otp == null) {
      this.errorMsg = "Please Enter OTP to Proceed";
      this.storage.setItem('orderHistory', JSON.stringify("false"));
    } else {
      let message = new src_app_common_message_model__WEBPACK_IMPORTED_MODULE_0__.MessageModel();
      let customer = new src_app_common_customer__WEBPACK_IMPORTED_MODULE_1__.Customer();
      message.phone = this.phone;
      message.otp = this.otp;

      if (this.phone == "9944370922") {
        message.identity = '870306080171';
      } else {
        message.identity = genUniqueId();
      }

      customer.phone = this.phone;
      customer.identity = message.identity;

      if (message.phone == null) {
        message.phone = JSON.parse(this.storage.getItem('phone'));
      }

      this.otpService.ValidateOtp(message).subscribe({
        next: response => {
          this.storage.setItem('identity', JSON.stringify(message.identity));
          this.storage.setItem('phone', JSON.stringify(message.phone));
          this.authService.getAuthenticateDetail(customer).subscribe({
            next: response => {
              this.storage.setItem('authToken', JSON.stringify(`${response.data}`));
            },
            error: err => {
              console.log(`There was an error:${err.message}`);
              this.storage.setItem('phone', JSON.stringify(message.phone));
              return;
            }
          });
          this.storage.setItem('orderHistory', JSON.stringify("true")); //window.location.reload();

          location.reload(); //alert(`Login Successfully.${response.data}`);
        },
        error: err => {
          //alert(`There was an error:${err.message}`);
          console.log(`There was an error:${err.message}`);
          this.router.navigateByUrl("/login");
        }
      });
      this.errorMsg = "";
      this.router.navigateByUrl("product/getProducts"); //this.storage.setItem('orderHistory',JSON.stringify("true"));
    }

    this.clear();
  }

  clear() {
    this.phone = "";
    this.password = "";
  }

  keyPress(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  check(value) {
    if (value.length == 10) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  otpCall() {
    let message = new src_app_common_message_model__WEBPACK_IMPORTED_MODULE_0__.MessageModel();
    message.phone = this.phone; //message.identity = genUniqueId();

    this.storage.setItem('phone', JSON.stringify(this.phone));
    this.otpService.RequestOtp(message).subscribe({
      next: response => {
        this.errorMsg = "OTP has been sent Successfully, Please enter the same.";
      },
      error: err => {
        //alert(`There was an error:${err.message}`);
        console.log(`There was an error:${err.message}`);
      }
    });
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_otp_service__WEBPACK_IMPORTED_MODULE_2__.OtpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 30,
  vars: 4,
  consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-main"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Enter your number", "name", "phone", 3, "ngModel", "keypress", "keyup", "ngModelChange"], ["box", ""], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["matInput", "", "placeholder", "Enter otp", "name", "otp", 3, "ngModel", "keypress", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent"], [1, "image_block"], ["src", "assets/images/products/main.jpg", "width", "1000px", "height", "500px", 1, "img-responsive"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table")(1, "tr")(2, "div", 0)(3, "mat-card")(4, "mat-card-header")(5, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Login Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-content")(8, "mat-form-field", 1)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_11_listener($event) {
        return ctx.keyPress($event);
      })("keyup", function LoginComponent_Template_input_keyup_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.check(_r0.value));
      })("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-actions", 4)(14, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
        return ctx.otpCall();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Request Otp");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-card-actions", 4)(17, "mat-card")(18, "input", 6, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_18_listener($event) {
        return ctx.keyPress($event);
      })("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.otp = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span")(23, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tr")(27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.otp);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorMsg);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle],
  styles: ["[_nghost-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 100px 0px;\r\n      }\r\n\r\n      .mat-form-field[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        min-width: 300px;\r\n      }\r\n\r\n      mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n\r\n      .error[_ngcontent-%COMP%] {\r\n        padding: 16px;\r\n        width: 300px;\r\n        color: white;\r\n        background-color: red;\r\n      }\r\n\r\n      .button[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n      }\r\n\r\n.image_block[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxXQUFXO1FBQ1gsZ0JBQWdCO01BQ2xCOztNQUVBOztRQUVFLGFBQWE7UUFDYix1QkFBdUI7TUFDekI7O01BRUE7UUFDRSxhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixxQkFBcUI7TUFDdkI7O01BRUE7UUFDRSxhQUFhO1FBQ2IseUJBQXlCO01BQzNCOztBQUVOO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTAwcHggMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1jYXJkLXRpdGxlLFxyXG4gICAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXJyb3Ige1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG5cclxuLmltYWdlX2Jsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

function genUniqueId() {
  const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

  const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

/***/ }),

/***/ 5367:
/*!*******************************************************************!*\
  !*** ./src/app/components/members-page/members-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersPageComponent": () => (/* binding */ MembersPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/order-history.service */ 6015);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function MembersPageComponent_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "td")(17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MembersPageComponent_div_5_tr_17_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const temp_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.updateStatus(temp_r3.orderTrackingNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const temp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](temp_r3.orderTrackingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 6, temp_r3.totalPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](temp_r3.totalQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 9, temp_r3.dateCreated, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](temp_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](temp_r3.phone);
  }
}

function MembersPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "table", 5)(2, "tr")(3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Order Tracking Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MembersPageComponent_div_5_tr_17_Template, 19, 12, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.orderHistoryList);
  }
}

function MembersPageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Orders Found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

class MembersPageComponent {
  constructor(orderHistoryService) {
    this.orderHistoryService = orderHistoryService;
    this.orderHistoryList = [];
  }

  ngOnInit() {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    this.orderHistoryService.getOrders().subscribe(data => {
      this.orderHistoryList = data;
    });
  }

  updateStatus(id) {
    this.orderHistoryService.updateOrder(id).subscribe(data => {
      console.log(data);
    });
    location.reload();
  }

}

MembersPageComponent.ɵfac = function MembersPageComponent_Factory(t) {
  return new (t || MembersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryService));
};

MembersPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MembersPageComponent,
  selectors: [["app-members-page"]],
  decls: 7,
  vars: 2,
  consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "10%"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
  template: function MembersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MembersPageComponent_div_5_Template, 18, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MembersPageComponent_div_6_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderHistoryList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderHistoryList.length == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8767:
/*!*********************************************************************!*\
  !*** ./src/app/components/order-history/order-history.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryComponent": () => (/* binding */ OrderHistoryComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/customer */ 1385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/order-history.service */ 6015);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function OrderHistoryComponent_div_5_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const temp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r3.orderTrackingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 5, temp_r3.totalPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r3.totalQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 8, temp_r3.dateCreated, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r3.status);
  }
}

function OrderHistoryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "table", 5)(2, "tr")(3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Order Tracking Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Total Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, OrderHistoryComponent_div_5_tr_13_Template, 13, 11, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.orderHistoryList);
  }
}

function OrderHistoryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.authError, ". ");
  }
}

class OrderHistoryComponent {
  constructor(orderHistoryService, authService, route, router) {
    this.orderHistoryService = orderHistoryService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.orderHistoryList = [];
    this.storage = localStorage;
    this.authError = "";
  }

  ngOnInit() {
    this.loadAuth();
    this.handleOrderHistory();
    this.router.navigateByUrl("/order-history");
  }

  loadAuth() {
    let customer = new src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__.Customer();
    customer.phone = JSON.parse(this.storage.getItem('phone'));
    customer.identity = JSON.parse(this.storage.getItem('identity'));
    this.authService.getAuthenticateDetail(customer).subscribe({
      next: response => {
        this.storage.setItem('authToken', JSON.stringify(`${response.data}`));
      },
      error: err => {
        console.log(`There was an error:${err.message}`);
      }
    });
  }

  handleOrderHistory() {
    const thePhone = JSON.parse(this.storage.getItem('phone'));
    /* this.orderHistoryService.getOrderHistory1(thePhone).subscribe(
      data => {
        this.orderHistoryList = data.content;
      }
    ); */

    this.orderHistoryService.getOrderHistory1(thePhone).subscribe({
      next: response => {
        this.orderHistoryList = response.content;
        this.storage.setItem('authError', JSON.stringify("false"));
        this.authError = 'No Records Found.Please Create the Order.';
      },
      error: err => {
        console.log(`There was an error:${err.message}`);

        if (err.status == 401) {
          this.storage.setItem('authError', JSON.stringify("true"));
          this.authError = 'Not Authenticated! Please login again.';
        }
      }
    });
  }

}

OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) {
  return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

OrderHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: OrderHistoryComponent,
  selectors: [["app-order-history"]],
  decls: 7,
  vars: 2,
  consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "10%"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
  template: function OrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Your Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OrderHistoryComponent_div_5_Template, 14, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrderHistoryComponent_div_6_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderHistoryList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderHistoryList.length == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5428:
/*!*************************************************************************************!*\
  !*** ./src/app/components/product-category-menu/product-category-menu.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCategoryMenuComponent": () => (/* binding */ ProductCategoryMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ProductCategoryMenuComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "product/getProducts/", category_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1.categoryName, " ");
  }
}

class ProductCategoryMenuComponent {
  constructor(productService) {
    this.productService = productService;
    this.productCategories = [];
  }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(data => {
      this.productCategories = data;
    });
  }

}

ProductCategoryMenuComponent.ɵfac = function ProductCategoryMenuComponent_Factory(t) {
  return new (t || ProductCategoryMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};

ProductCategoryMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProductCategoryMenuComponent,
  selectors: [["app-product-category-menu"]],
  decls: 4,
  vars: 1,
  consts: [[1, "menu-sidebar-content", "js-scrollbar1"], [1, "navbar-sidebar"], [1, "list-unstyled", "navbar-list"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active-link", 3, "routerLink"]],
  template: function ProductCategoryMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductCategoryMenuComponent_li_3_Template, 3, 2, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productCategories);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6525:
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/cart-item */ 3162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function ProductDetailsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, ctx_r0.product.unitPrice, "INR"));
  }
}

class ProductDetailsComponent {
  constructor(productService, cartService, route, router) {
    this.productService = productService;
    this.cartService = cartService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    const theProductId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductInfo(theProductId).subscribe(data => {
      this.product = data;
    });
  }

  goHome() {
    this.router.navigateByUrl("product/getProducts");
  }

  addToCart() {
    //alert(this.product.name);
    const theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__.CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

}

ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
  return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

ProductDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductDetailsComponent,
  selectors: [["app-product-details"]],
  decls: 18,
  vars: 8,
  consts: [[1, "detail-section"], [1, "container-fluid"], [1, "detail-img", 3, "src"], [1, "price"], [4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
  template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProductDetailsComponent_div_8_Template, 4, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_9_listener() {
        return ctx.addToCart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Add to cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_16_listener() {
        return ctx.goHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Back to Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 5, ctx.product.discountPrice, "INR"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.unitPrice > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product.description);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4646:
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/cart-item */ 3162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);









function ProductListComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const prod_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, prod_r3.unitPrice, "INR"));
  }
}

function ProductListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_div_4_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const prod_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.doSearch(prod_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 20)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductListComponent_div_4_div_12_Template, 4, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_div_4_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const prod_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.addToCart(prod_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const prod_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", prod_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prod_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 4, prod_r3.discountPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", prod_r3.unitPrice > 0);
  }
}

function ProductListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No Products Found! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class ProductListComponent {
  constructor(productService, cartService, route, router) {
    this.productService = productService;
    this.cartService = cartService;
    this.route = route;
    this.router = router;
    this.products = [];
    this.currentCategoryId = 1;
    this.previousCategoryId = 1;
    this.searchMode = false;
    this.thePageNumber = 1;
    this.thePageSize = 25;
    this.theTotalElements = 0;
    this.previousKeyword = "";
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword = this.route.snapshot.paramMap.get('keyword');

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;
    this.productService.getSearchListPaginate(this.thePageNumber - 1, this.thePageSize, theKeyword).subscribe(data => {
      this.products = data.content;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    });
  }

  handleListProducts() {
    const categoryId = this.route.snapshot.paramMap.has('id');

    if (categoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;
    this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize, this.currentCategoryId).subscribe(data => {
      this.products = data.content;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    });
  }

  doSearch(value) {
    this.router.navigateByUrl(`product/getInfo/${value}`);
  }

  updatePageSize(value) {
    this.thePageSize = +value;
    this.thePageNumber = 1;
    this.listProducts();
  }

  addToCart(product) {
    const theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__.CartItem(product);
    this.cartService.addToCart(theCartItem);
  }

}

ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
  return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductListComponent,
  selectors: [["app-product-list"]],
  decls: 26,
  vars: 7,
  consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "footer-pagination"], [1, "col-md-6"], [1, "col-md-9", 2, "padding-left", "30%"], [3, "page", "pageSize", "collectionSize", "maxSize", "boundaryLinks", "pageChange", "pageSizeChange"], [1, "col-md-3", "mt-2", 2, "text-align", "right"], [1, "mr-5"], [3, "change"], ["myPageSelect", ""], ["selected", "true"], [1, "col-md-3"], [1, "product-box"], [1, "img-responsive", 3, "src"], [1, "au-btn-submit", 3, "click"], [1, "bi", "bi-info"], [1, "price"], [4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 15, 7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProductListComponent_div_5_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div", 3)(11, "div", 8)(12, "ngb-pagination", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener($event) {
        return ctx.thePageNumber = $event;
      })("pageSizeChange", function ProductListComponent_Template_ngb_pagination_pageSizeChange_12_listener($event) {
        return ctx.thePageSize = $event;
      })("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener() {
        return ctx.listProducts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Page Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProductListComponent_Template_select_change_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);

        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.updatePageSize(_r2.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.products == null ? null : ctx.products.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("page", ctx.thePageNumber)("pageSize", ctx.thePageSize)("collectionSize", ctx.theTotalElements)("maxSize", 5)("boundaryLinks", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9055:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class SearchComponent {
  constructor(router) {
    this.router = router;
  }

  ngOnInit() {}

  doSearch(value) {
    this.router.navigateByUrl(`product/getProducts/search/${value}`);
  }

}

SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};

SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 5,
  vars: 0,
  consts: [[1, "form-header"], ["type", "text", "placeholder", "Search for products ...", 1, "au-input", "au-input-xl", 3, "keyup.enter"], ["myInput", ""], [1, "au-btn-submit", 3, "click"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.doSearch(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.doSearch(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2993:
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var D_angular_ui_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);




class AuthInterceptorService {
  constructor(authService) {
    this.authService = authService; //accessToken: string= null;

    this.storage = localStorage;
  }

  intercept(req, next) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.handleAccess(req, next));
  }

  handleAccess(req, next) {
    var _this = this;

    return (0,D_angular_ui_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const urlOrder = ['order/findByCustomerPhone', 'order/findAllOrders', 'order/status/upgrade', 'order/findCustomerProfile'];

      if (urlOrder.some(url => req.urlWithParams.includes(url))) {
        /* let customer = new Customer();
        customer.phone = JSON.parse(this.storage.getItem('phone'));
        customer.identity = JSON.parse(this.storage.getItem('identity'));
         this.authService.getAuthenticateDetail(customer).subscribe({
                             next: response => {
                             this.accessToken = JSON.stringify(`${response.data}`);
                             },
                             error: err => {
                              console.log(`There was an error:${err.message}`);
                             }
                             }); */
        req = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + JSON.parse(_this.storage.getItem('authToken')) //this.accessToken

          }
        });
      }

      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(next.handle(req)).toPromise();
    })();
  }

}

AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
  return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
};

AuthInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthInterceptorService,
  factory: AuthInterceptorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 410:
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServiceService": () => (/* binding */ AuthServiceService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:8085');
class AuthServiceService {
  //private baseUrl = 'http://localhost:8085/authenticate';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/authenticate';
  }

  getAuthenticateDetail(customer) {
    return this.httpClient.post(this.authUrl, customer).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response));
  }

}

AuthServiceService.ɵfac = function AuthServiceService_Factory(t) {
  return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};

AuthServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthServiceService,
  factory: AuthServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class CartService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.profileUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/order/findCustomerProfile'; //private profileUrl = "http://localhost:8085/order/findCustomerProfile";

    this.cartItems = [];
    this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.totalDiscount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.storage = localStorage;
    let data = JSON.parse(this.storage.getItem('cartItems'));

    if (data != null) {
      this.cartItems = data;
      this.computeCartTotals();
    }
  }

  getProfile(phone) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append("phone", phone);
    return this.httpClient.get(this.profileUrl, {
      params: queryParams
    });
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(theCartItem) {
    let alreadyExistInCart = false;
    let existingCartItem = undefined;

    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
      alreadyExistInCart = existingCartItem != undefined;
    }

    if (alreadyExistInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue = 0;
    let totalDiscountValue = 0;
    let totalQuantityValue = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.discountPrice;
      totalDiscountValue += currentCartItem.quantity * (currentCartItem.unitPrice - currentCartItem.discountPrice);
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalDiscount.next(totalDiscountValue);
    this.totalQuantity.next(totalQuantityValue);
    this.persistCartItems();
  }

  decrementQuantity(item) {
    item.quantity--;

    if (item.quantity == 0) {
      this.remove(item);
    } else {
      this.computeCartTotals();
    }
  }

  remove(item) {
    const itemIndex = this.cartItems.findIndex(temp => temp.id == item.id);

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }

}

CartService.ɵfac = function CartService_Factory(t) {
  return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CartService,
  factory: CartService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8106:
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutService": () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class CheckoutService {
  /* private purchaseUrl = "http://localhost:8085/checkout/purchase";
  private validateUrl = "http://localhost:8085/customer/validate/getDetail"; */
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/customer/validate/getDetail';
    this.purchaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/checkout/purchase';
  }

  placeOrder(purchase) {
    return this.httpClient.post(this.purchaseUrl, purchase);
  }

  validateCustomer(phone) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    queryParams = queryParams.append("phone", phone);
    return this.httpClient.get(this.validateUrl, {
      params: queryParams
    });
  }

}

CheckoutService.ɵfac = function CheckoutService_Factory(t) {
  return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};

CheckoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CheckoutService,
  factory: CheckoutService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6015:
/*!***************************************************!*\
  !*** ./src/app/services/order-history.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryService": () => (/* binding */ OrderHistoryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class OrderHistoryService {
  //private baseUrl = 'http://localhost:8085';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.storage = localStorage;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  /*  getOrderHistory(thePhone: string): Observable<GetResponseOrderHistory>{
      this.authToken = JSON.parse(this.storage.getItem('authToken'));
  
      const headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*,http://localhost:8085.com',
       'Authorization': `Bearer ${this.authToken}`
      })
      const orderHistoryUrl = `${this.baseUrl}/order/findByCustomerPhone/${thePhone}`;
      return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl, { headers: headers });
   } */


  getOrderHistory1(thePhone) {
    const orderHistoryUrl = `${this.baseUrl}/order/findByCustomerPhone/${thePhone}`;
    return this.httpClient.get(orderHistoryUrl);
  }

  getOrders() {
    const orderUrl = `${this.baseUrl}/order/findAllOrders`;
    return this.httpClient.get(orderUrl);
  }

  updateOrder(id) {
    return this.httpClient.post(`${this.baseUrl}/order/status/upgrade`, id);
  }

}

OrderHistoryService.ɵfac = function OrderHistoryService_Factory(t) {
  return new (t || OrderHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

OrderHistoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OrderHistoryService,
  factory: OrderHistoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8369:
/*!*****************************************!*\
  !*** ./src/app/services/otp.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpService": () => (/* binding */ OtpService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class OtpService {
  //private baseUrl = 'http://localhost:8085/mobile';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.mobileUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/mobile';
  }

  RequestOtp(message) {
    return this.httpClient.post(`${this.mobileUrl}/sendOtp`, message).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

  ValidateOtp(message) {
    return this.httpClient.post(`${this.mobileUrl}/validateOtp`, message).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

}

OtpService.ɵfac = function OtpService_Factory(t) {
  return new (t || OtpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

OtpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: OtpService,
  factory: OtpService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProductService {
  //private baseUrl = 'http://localhost:8085/nct/store';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.nctUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/nct/store';
  }

  getProductCategories() {
    const categoryUrl = `${this.nctUrl}/product/getAllCategory`;
    return this.httpClient.get(categoryUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

  getProductListPaginate(thePage, thePageSize, categoryId) {
    const searchUrl = `${this.nctUrl}/product/getProducts/${categoryId}` + `?page=${thePage}&pageSize=${thePageSize}`;
    return this.httpClient.get(searchUrl);
  }

  getSearchListPaginate(thePage, thePageSize, keyword) {
    const filterUrl = `${this.nctUrl}/product/getProducts/search/${keyword}` + `?page=${thePage}&pageSize=${thePageSize}`;
    return this.httpClient.get(filterUrl);
  }

  getProductInfo(productId) {
    const infoUrl = `${this.nctUrl}/product/getInfo/${productId}`;
    return this.httpClient.get(infoUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

}

ProductService.ɵfac = function ProductService_Factory(t) {
  return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProductService,
  factory: ProductService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8303:
/*!***********************************************!*\
  !*** ./src/app/services/shop-form.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopFormService": () => (/* binding */ ShopFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ShopFormService {
  constructor() {}

  getCreditCardMonths(startMonth) {
    let data = [];

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(data);
  }

  getCreditCardYears() {
    let data = [];
    const startYear = new Date().getFullYear();
    const endYear = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(data);
  }

}

ShopFormService.ɵfac = function ShopFormService_Factory(t) {
  return new (t || ShopFormService)();
};

ShopFormService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShopFormService,
  factory: ShopFormService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1562:
/*!***********************************************!*\
  !*** ./src/app/validators/shop-validators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopValidators": () => (/* binding */ ShopValidators)
/* harmony export */ });
class ShopValidators {
  static notOnlyWhiteSpace(control) {
    if (control.value != null && control.value.trim().length === 0) {
      return {
        'notOnlyWhiteSpace': true
      };
    } else {
      return null;
    }
  }

}

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  baseUrl: "http://localhost:8085"
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
/// <reference types="@angular/localize" />





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map