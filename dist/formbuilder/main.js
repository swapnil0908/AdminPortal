(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <h1>Formbuilder</h1>\n    </div>\n</header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<footer>\n\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'formbuilder';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-app/edit-app.component */ "./src/app/edit-app/edit-app.component.ts");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.es5.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/@toverux/ngx-sweetalert2.es5.js");




var appRoutes = [
    { path: '', component: _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__["EditAppComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__["EditAppComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DndModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-app/edit-app.component.css":
/*!*************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYXBwL2VkaXQtYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-app/edit-app.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"model && !report\" class=\"padding20 white-bg\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"btn-cont\">\n            <button (click)=\"initReport()\" class=\"btn btn-primary pull-left\">Response</button>\n            <button (click)=\"updateForm()\" class=\"btn btn-primary pull-right\">Update</button>\n            <button routerLink=\"/application/{{model._id}}\" class=\"btn btn-primary pull-right\" style=\"margin-right:3px;\">View <i class=\"fa fa-external-link\"></i></button>\n        </div>\n    </div>\n  </div>\n  <div class=\"spacer30\"></div>\n  <div class=\"row\">\n    <div class=\"col-4\">\n\n        <div class=\"row\">\n        <label class=\"col-8\">Background Color</label>\n        <input class=\"colorpick col-4\" type=\"color\" name=\"bgColor\" [(ngModel)]=\"model.theme.bgColor\" >    \n        </div>\n        <div class=\"row\">\n        <label class=\"col-8\">Text Color</label>\n        <input class=\"colorpick col-4\" type=\"color\" name=\"textColor\" [(ngModel)]=\"model.theme.textColor\">    \n        </div>\n\n      <h4 (click)=\"test()\">Select Fields</h4>\n      <p>Customize your form by drag and drop below fields to the form area.</p>\n      <!--a draggable element-->\n      <div class=\"fields\" *ngFor=\"let item of fieldModels\">\n        <div class=\"field pointer shadow-bg\" [dndDraggable]=\"item\"\n        [dndEffectAllowed]=\"'copy'\" \n        (dndEnd)=\"onDragEnd($event)\">\n          <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n          <h5>{{item.label}}</h5>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-8\">\n\n      <div class=\"form-group\"\n      style=\"margin-bottom: 0px !important; padding: 30px 60px 5px 60px;\"\n      [style.backgroundColor]=\"model.theme.bgColor\"\n      [style.color]=\"model.theme.textColor\">\n      <h2><input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.name\" /></h2>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.description\" />\n      </div>\n\n      <!--a dropzone-->\n      <!--to allow dropping content that is not [dndDraggable] set dndAllowExternal to true-->\n      <section dndDropzone\n      (dndDragover)=\"onDragover($event)\"\n      (dndDrop)=\"onDrop($event,model.attributes)\" class=\"dndDropArea\"\n      [ngClass]=\"{'empty':model.attributes.length == 0}\"\n      [style.backgroundColor]=\"model.theme.bgColor\"\n      [style.color]=\"model.theme.textColor\"> \n\n      <div class=\"field\" *ngFor=\"let item of model.attributes;let i= index;\" \n        (dndStart)=\"onDragStart($event)\"\n        (dndCanceled)=\"onDragCanceled($event)\"\n        (dndMoved)=\"onDragged(item, model.attributes, 'move')\"\n        [dndEffectAllowed]=\"'all'\" \n        [dndDraggable]=\"item\">\n        <div class=\"row form-group\">\n          <div class=\"col-1\"><i class=\"fa fa-ellipsis-v dndHandle\" dndHandle></i></div>\n          <div class=\"col-7\">\n            <!-- <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n            <h5>{{item.label}}\n            <span *ngIf=\"item.required\" class=\"red\">*</span></h5> -->\n                  <div *ngIf=\"item.type=='text'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='email'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='phone'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='number'\">\n                      <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                      <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\" placeholder=\"{{item.placeholder}}\" >\n                    </div>\n                  <div *ngIf=\"item.type=='date'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='datetime-local'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='textarea'\">\n                      <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                      <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                      </textarea>\n                    </div>\n                  <div *ngIf=\"item.type=='file'\">\n                    <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                    <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n                  </div>\n                  <div *ngIf=\"item.type=='paragraph'\">\n                    <p class=\"form-text\">{{item.placeholder}}</p>\n                  </div>\n                  <div *ngIf=\"item.type=='autocomplete'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <select class=\"form-control\" id=\"{{item.name}}\" >\n                      <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>  \n                    </select>\n                    <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n                  </div>\n                  <div *ngIf=\"item.type=='checkbox'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                        <label class=\"cust-check-bx\">\n                          <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n                          <span class=\"checkmark\"></span>\n                        </label>\n                      </div>\n                  </div>\n                  <div *ngIf=\"item.type=='radio'\">\n                      <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                      <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                          <label class=\"cust-check-bx\">\n                            <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" > {{v.label}}\n                            <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n                    </div>\n                  <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n                    <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\" id=\"{{item.name}}\" >\n                  </div>\n          </div>\n          <div class=\"col-4\">\n            <i *ngIf=\"item.toggle\" (click)=\"item.toggle=false\" class=\"fa fa-chevron-up pull-right\"></i>\n            <i *ngIf=\"!item.toggle\" (click)=\"item.toggle=true\" class=\"fa fa-chevron-down pull-right\"></i>\n            <i (click)=\"removeField(i)\" class=\"fa fa-trash pull-right\"></i>\n          </div>\n        </div>\n        <div *ngIf=\"item.toggle\" class=\"toggle-Wrapper\">\n          <div class=\"form-group\">\n              <label>Required</label>\n              <i *ngIf=\"item.required\" (click)=\"item.required=false\" class=\"fa fa-toggle-on red\"></i>\n              <i *ngIf=\"!item.required\" (click)=\"item.required=true\" class=\"fa fa-toggle-off\"></i>\n              <span class=\"pull-right ucfirst\">{{item.type}}</span>\n          </div>\n          <div class=\"form-group\">\n              <label>Label</label>\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.label\" />\n          </div>\n          <div class=\"form-group\">\n              <label>Name</label>\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.name\" />\n          </div>\n          <div class=\"form-group\">\n              <label>Placeholder</label>\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.placeholder\" />\n          </div>\n          <div class=\"form-group\">\n            <label>Regex</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.regex\" />\n          </div>\n          <div *ngIf=\"item.regex\" class=\"form-group\">\n            <label>Error text</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.errorText\" />\n          </div>\n          \n          <!-- number -->\n          <div *ngIf=\"item.type=='number'\" class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label>Min</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.min\" />\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label>Max</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.max\" />\n                </div>\n            </div>\n          </div>\n\n          <!-- radio || checkbox || autocomplete -->\n          <div *ngIf=\"item.type=='radio'|| item.type=='checkbox' || item.type=='autocomplete'\" >\n              <div class=\"row\">\n                  <div class=\"col-5\">\n                      <div class=\"form-group\">\n                          <label>Label</label>\n                      </div>\n                  </div>\n                  <div class=\"col-5\">\n                      <div class=\"form-group\">\n                          <label>Value</label>\n                      </div>\n                  </div>\n                  <div class=\"col-2\">\n                      <div class=\"form-group\">\n                          <label>Action</label>\n                      </div>\n                  </div>\n                </div>\n              <div *ngFor=\"let i of item.values; let valueIndex=index;\" class=\"row\">\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.label\" />\n                  </div>\n              </div>\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.value\" />\n                  </div>\n              </div>\n              <div class=\"col-2\">\n                  <div class=\"form-group\">\n                      <label (click)=\"item.values.splice(valueIndex,1)\">remove</label>\n                  </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.label\" />\n                  </div>\n              </div>\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.value\" />\n                  </div>\n              </div>\n              <div class=\"col-2\">\n                  <div class=\"form-group\">\n                      <label (click)=\"addValue(item.values)\">Add</label>\n                  </div>\n              </div>\n            </div>\n          </div>\n          \n\n\n        \n        </div>\n      </div>\n      <!--optional placeholder element for dropzone-->\n      <!--will be removed from DOM on init-->\n      <div class=\"dndPlaceholder\" dndPlaceholderRef>\n      </div>\n      </section>\n\n    </div>\n  </div>\n</div>\n\n \n\n<div *ngIf=\"report\" class=\"padding20 white-bg\">\n    <div class=\"row\">\n        <div class=\"col-12 btn-cont\">\n            <button (click)=\"report=false\" class=\"btn btn-primary\"><< Back</button>\n        </div>\n        <div class=\"col-12 spacer30\"></div>\n        <!-- if records found -->\n        <div  *ngIf=\"reports?.length > 0\" class=\"col-12\">\n            <div *ngFor=\"let records of reports\" class=\"report-block\">\n                <div *ngFor=\"let record of records.attributes\">\n                    <div *ngIf=\"record.type !='button' && record.type !='paragraph'\" class=\"row\">\n                     <div class=\"col-4\">{{record.label}}</div>\n                        <div class=\"col-8\">{{record.value}}</div>\n                    </div>\n                </div>\n            </div>\n            <!-- <pre>{{reports|json}}</pre> -->\n        </div> \n        <!-- if no records found -->\n        <div *ngIf=\"reports?.length == 0\" class=\"col-12 btn-cont\">\n            No response found\n        </div>\n\n    </div>\n\n</div>\n\n<!-- <pre *ngIf=\"model\">{{model|json}}</pre> -->\n\n\n<div *ngIf=\"model\" \nclass=\"container marginT60  marginB30\" \nstyle=\"max-width:500px;\"\n>\n\n<div class=\"row\"\nstyle=\"padding:30px;\"\n[style.backgroundColor]=\"model.theme.bgColor\"\n[style.color]=\"model.theme.textColor\">\n  <div class=\"col-12\">\n    <h2>{{model.name}}</h2>  \n  </div>\n  <div class=\"col-12\">\n    <p>{{model.description}}</p>  \n  </div>\n  <div *ngIf=\"success\" class=\"col-12\">\n    <div class=\"form-group\">\n    <label>Your form has been submitted.</label>\n    </div>\n  </div>\n  <form class=\"ftheme\" >\n  <div *ngIf=\"!success\" class=\"col-12\">\n    <div *ngFor=\"let item of model.attributes\" class=\"form-group\">\n      <div *ngIf=\"item.type=='text'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='email'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='phone'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='number'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n      <div *ngIf=\"item.type=='date'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='datetime-local'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='textarea'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          </textarea>\n        </div>\n      <div *ngIf=\"item.type=='file'\">\n        <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n      </div>\n      <div *ngIf=\"item.type=='paragraph'\">\n        <p class=\"form-text\">{{item.placeholder}}</p>\n      </div>\n      <div *ngIf=\"item.type=='autocomplete'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <select class=\"form-control\" id=\"{{item.name}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\">\n          <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>  \n        </select>\n        <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n      </div>\n      <div *ngIf=\"item.type=='checkbox'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n            <label class=\"cust-check-bx\">\n              <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n      </div>\n      <div *ngIf=\"item.type=='radio'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n              <label class=\"cust-check-bx\">\n                <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n        </div>\n      <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n        <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\" id=\"{{item.name}}\" >\n      </div>\n    </div>\n\n    <p (click)=\"show=1\" class=\"marginT60 pointer\">Show developer data</p>\n\n  </div>\n  </form>\n</div>\n</div>\n\n<pre *ngIf=\"show==1 && model\">\n    {{model|json}}\n</pre>\n"

/***/ }),

/***/ "./src/app/edit-app/edit-app.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.ts ***!
  \************************************************/
/*! exports provided: EditAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppComponent", function() { return EditAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var EditAppComponent = /** @class */ (function () {
    function EditAppComponent(route) {
        this.route = route;
        this.value = {
            label: "",
            value: ""
        };
        this.success = false;
     /*   this.fieldModels = [
            {
                "type": "text",
                "icon": "fa-font",
                "label": "Text",
                "description": "Enter your name",
                "placeholder": "Enter your name",
                "className": "form-control",
                "subtype": "text",
                "regex": "",
                "handle": true
            },
            {
                "type": "email",
                "icon": "fa-envelope",
                "required": true,
                "label": "Email",
                "description": "Enter your email",
                "placeholder": "Enter your email",
                "className": "form-control",
                "subtype": "text",
                "regex": "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
                "errorText": "Please enter a valid email",
                "handle": true
            },
            {
                "type": "phone",
                "icon": "fa-phone",
                "label": "Phone",
                "description": "Enter your phone",
                "placeholder": "Enter your phone",
                "className": "form-control",
                "subtype": "text",
                "regex": "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
                "errorText": "Please enter a valid phone number",
                "handle": true
            },
            {
                "type": "number",
                "label": "Number",
                "icon": "fa-html5",
                "description": "Age",
                "placeholder": "Enter your age",
                "className": "form-control",
                "value": "20",
                "min": 12,
                "max": 90
            },
            {
                "type": "date",
                "icon": "fa-calendar",
                "label": "Date",
                "placeholder": "Date",
                "className": "form-control"
            },
            {
                "type": "datetime-local",
                "icon": "fa-calendar",
                "label": "DateTime",
                "placeholder": "Date Time",
                "className": "form-control"
            },
            {
                "type": "textarea",
                "icon": "fa-text-width",
                "label": "Textarea"
            },
            {
                "type": "paragraph",
                "icon": "fa-paragraph",
                "label": "Paragraph",
                "placeholder": "Type your text to display here only"
            },
            {
                "type": "checkbox",
                "required": true,
                "label": "Checkbox",
                "icon": "fa-list",
                "description": "Checkbox",
                "inline": true,
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    }
                ]
            },
            {
                "type": "radio",
                "icon": "fa-list-ul",
                "label": "Radio",
                "description": "Radio boxes",
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    }
                ]
            },
            {
                "type": "autocomplete",
                "icon": "fa-bars",
                "label": "Select",
                "description": "Select",
                "placeholder": "Select",
                "className": "form-control",
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    },
                    {
                        "label": "Option 3",
                        "value": "option-3"
                    }
                ]
            },
            {
                "type": "file",
                "icon": "fa-file",
                "label": "File Upload",
                "className": "form-control",
                "subtype": "file"
            },
            {
                "type": "button",
                "icon": "fa-paper-plane",
                "subtype": "submit",
                "label": "Submit"
            }
        ];*/
        this.modelFields = [];
        this.model = {
            name: 'App name...',
            description: 'App Description...',
            theme: {
                bgColor: "ffffff",
                textColor: "555555",
                bannerImage: ""
            },
            attributes: this.modelFields
        };
        this.report = false;
        this.reports = [];
    }
    EditAppComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe( params =>{
        //   console.log(params);
        //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
        //     console.log(r);
        //     this.model = r['data'];
        //   });
        // });
        // this.model = this.cs.data; 
        // console.log(this.model.data);
    };
    EditAppComponent.prototype.onDragStart = function (event) {
        console.log("drag started", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragEnd = function (event) {
        console.log("drag ended", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDraggableCopied = function (event) {
        console.log("draggable copied", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDraggableLinked = function (event) {
        console.log("draggable linked", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragged = function (item, list, effect) {
        if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
        }
    };
    EditAppComponent.prototype.onDragCanceled = function (event) {
        console.log("drag cancelled", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragover = function (event) {
        console.log("dragover", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDrop = function (event, list) {
        if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            if (event.dropEffect === "copy")
                event.data.name = event.data.type + '-' + new Date().getTime();
            var index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
    };
    EditAppComponent.prototype.addValue = function (values) {
        values.push(this.value);
        this.value = { label: "", value: "" };
    };
    EditAppComponent.prototype.removeField = function (i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: "Do you want to remove this field?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!'
        }).then(function (result) {
            if (result.value) {
                _this.model.attributes.splice(i, 1);
            }
        });
    };
    EditAppComponent.prototype.updateForm = function () {
        var input = new FormData;
        input.append('id', this.model._id);
        input.append('name', this.model.name);
        input.append('description', this.model.description);
        input.append('bannerImage', this.model.theme.bannerImage);
        input.append('bgColor', this.model.theme.bgColor);
        input.append('textColor', this.model.theme.textColor);
        input.append('attributes', JSON.stringify(this.model.attributes));
        // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','App updated successfully','success');
        // });
    };
    EditAppComponent.prototype.initReport = function () {
        this.report = true;
        var input = {
            id: this.model._id
        };
        // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
        //   this.reports = r.data;
        //   console.log('reports',this.reports);
        //   this.reports.map(records=>{
        //     return records.attributes.map(record=>{
        //       if(record.type=='checkbox'){
        //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
        //       }
        //     })
        //   });
        // });
    };
    EditAppComponent.prototype.toggleValue = function (item) {
        item.selected = !item.selected;
    };
    EditAppComponent.prototype.submit = function () {
        var valid = true;
        var validationArray = JSON.parse(JSON.stringify(this.model.attributes));
        validationArray.reverse().forEach(function (field) {
            console.log(field.label + '=>' + field.required + "=>" + field.value);
            if (field.required && !field.value && field.type != 'checkbox') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Error', 'Please enter ' + field.label, 'error');
                valid = false;
                return false;
            }
            if (field.required && field.regex) {
                var regex = new RegExp(field.regex);
                if (regex.test(field.value) == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Error', field.errorText, 'error');
                    valid = false;
                    return false;
                }
            }
            if (field.required && field.type == 'checkbox') {
                if (field.values.filter(function (r) { return r.selected; }).length == 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Error', 'Please enterrr ' + field.label, 'error');
                    valid = false;
                    return false;
                }
            }
        });
        if (!valid) {
            return false;
        }
        console.log('Save', this.model);
        var input = new FormData;
        input.append('formId', this.model._id);
        input.append('attributes', JSON.stringify(this.model.attributes));
        // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','You have contact sucessfully','success');
        //   this.success = true;
        // },error=>{
        //   swal('Error',error.message,'error');
        // });
    };
    EditAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-app',
            template: __webpack_require__(/*! ./edit-app.component.html */ "./src/app/edit-app/edit-app.component.html"),
            styles: [__webpack_require__(/*! ./edit-app.component.css */ "./src/app/edit-app/edit-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditAppComponent);
    return EditAppComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/swapnil0908/Downloads/angular-5-formbuilder-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map