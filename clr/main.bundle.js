webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_host_notes_host_component__ = __webpack_require__("./src/app/notes-host/notes-host.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_form_notes_form_component__ = __webpack_require__("./src/app/notes-form/notes-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_note_component__ = __webpack_require__("./src/app/note/note.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'notes', pathMatch: 'full' },
    { path: 'notes', component: __WEBPACK_IMPORTED_MODULE_2__notes_host_notes_host_component__["a" /* NotesHostComponent */] },
    { path: 'note/:id', component: __WEBPACK_IMPORTED_MODULE_4__note_note_component__["a" /* NoteComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_3__notes_form_notes_form_component__["a" /* NotesFormComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.content-area {\n  position: relative;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <header class=\"header header-5\">\n    <div class=\"logo\">Notes</div>\n  </header>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clr_angular__ = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notes_host_notes_host_component__ = __webpack_require__("./src/app/notes-host/notes-host.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notes_form_notes_form_component__ = __webpack_require__("./src/app/notes-form/notes-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_storage_service__ = __webpack_require__("./src/app/shared/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__note_note_component__ = __webpack_require__("./src/app/note/note.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__notes_host_notes_host_component__["a" /* NotesHostComponent */],
                __WEBPACK_IMPORTED_MODULE_7__notes_form_notes_form_component__["a" /* NotesFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__note_note_component__["a" /* NoteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__clr_angular__["a" /* ClarityModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_storage_service__["a" /* StorageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/note/note.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 0;\n}\n\n.btn-group .btn {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n}"

/***/ }),

/***/ "./src/app/note/note.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n  <button class=\"btn btn-success-outline\" (click)=\"goToBack()\">Back</button>\n  <button class=\"btn btn-danger-outline\" (click)=\"delete()\">Delete</button>\n</div>\n\n<div *ngIf=\"note\">\n  <div>{{note.title}}</div>\n  <div>{{note.id}}</div>\n  <div>{{note.description}}</div>\n  <div>{{note.time}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/note/note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_storage_service__ = __webpack_require__("./src/app/shared/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteComponent = /** @class */ (function () {
    function NoteComponent(storage, router, activatedRouter) {
        this.storage = storage;
        this.router = router;
        this.activatedRouter = activatedRouter;
    }
    NoteComponent.prototype.ngOnInit = function () {
        this.selectedNote();
    };
    NoteComponent.prototype.selectedNote = function () {
        var _this = this;
        this.activatedRouter.params
            .forEach(function (params) {
            var id = Number(params['id']);
            _this.storage.getNote(id)
                .then(function (result) {
                _this.note = result;
            });
        });
    };
    NoteComponent.prototype.delete = function () {
        this.storage.deleteNote(this.note.id);
        this.goToBack();
    };
    NoteComponent.prototype.goToBack = function () {
        this.router.navigate(['']);
    };
    NoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note',
            template: __webpack_require__("./src/app/note/note.component.html"),
            styles: [__webpack_require__("./src/app/note/note.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/notes-form/notes-form.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 0;\n}\n\n.btn-group .btn {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n}\n\n.form-block {\n  margin-top: 25px;\n}\n\n.form-group {\n  margin-bottom: 20px;\n}\n\n.form-group:last-of-type {\n  margin-bottom: 0;\n}\n\n.form-group label {\n  font-size: 13px;\n}\n\n.form-group input,\n.form-group textarea {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/notes-form/notes-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n  <button class=\"btn btn-success-outline\" (click)=\"addNote()\">Add</button>\n  <button class=\"btn btn-danger-outline\" (click)=\"goToBack()\">Cancel</button>\n</div>\n\n<!-- <span>{{ data | date:'mediumDate'}}</span> -->\n\n<section class=\"form-block\">\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Enter title\" [(ngModel)]=\"title\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <textarea id=\"description\" rows=\"5\" placeholder=\"Enter description\" [(ngModel)]=\"description\"></textarea>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/notes-form/notes-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_note__ = __webpack_require__("./src/app/shared/note.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_storage_service__ = __webpack_require__("./src/app/shared/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesFormComponent = /** @class */ (function () {
    function NotesFormComponent(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    NotesFormComponent.prototype.ngOnInit = function () {
        this.getId(); // get if for new note
    };
    NotesFormComponent.prototype.addNote = function () {
        this.storage.addNote(new __WEBPACK_IMPORTED_MODULE_2__shared_note__["a" /* Note */](this.id, this.getDate(), (this.title) ? this.title : 'No title', (this.description) ? this.description : 'No description'));
        this.goToBack();
    };
    NotesFormComponent.prototype.getId = function () {
        var _this = this;
        this.storage.getNotes().then(function (result) { return _this.id = result.length; });
    };
    NotesFormComponent.prototype.getDate = function () {
        return new Date().toString();
    };
    NotesFormComponent.prototype.goToBack = function () {
        this.router.navigate(['']);
    };
    NotesFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notes-form',
            template: __webpack_require__("./src/app/notes-form/notes-form.component.html"),
            styles: [__webpack_require__("./src/app/notes-form/notes-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotesFormComponent);
    return NotesFormComponent;
}());



/***/ }),

/***/ "./src/app/notes-host/notes-host.component.css":
/***/ (function(module, exports) {

module.exports = "button.btn {\n  margin: 0;\n}\n\n.notes-list {\n  margin-top: 20px;\n}\n\n.note {\n  padding: 10px 0;\n  border-bottom: 1px solid #C1CDD4;\n  cursor: pointer;\n}\n\n.note .note-topline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.note .title {\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.note .time {\n  font-size: 13px;\n  color: #939494;\n}\n\n.note .description {\n  font-size: 15px;\n  white-space: nowrap; \n  overflow: hidden;\n  text-overflow:ellipsis;\n}\n\n.empty-tip {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 15px;\n  line-height: 18px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/notes-host/notes-host.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-block\" (click)=\"goToForm()\">add note</button>\n\n<div *ngIf=\"notes && notes.length == 0\" class=\"empty-tip\">You do not have<br>any notes</div>\n\n<ul class=\"notes-list\">\n  <li class=\"note\" *ngFor=\"let note of notes\" (click)=\"goToNote(note)\">\n    <div class=\"note-topline\">\n      <span class=\"title\">{{ note.title }}</span>\n      <span class=\"time\">{{ note.time | date:'mediumDate'}}</span>\n    </div>\n    <div class=\"description\">{{ note.description }}</div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/notes-host/notes-host.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesHostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_storage_service__ = __webpack_require__("./src/app/shared/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesHostComponent = /** @class */ (function () {
    function NotesHostComponent(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    NotesHostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getNotes().then(function (result) {
            _this.notes = result;
            console.log(_this.notes);
        });
    };
    NotesHostComponent.prototype.goToNote = function (note) {
        this.router.navigate(['note', note.id]);
    };
    NotesHostComponent.prototype.goToForm = function () {
        this.router.navigate(['form']);
    };
    NotesHostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notes-host',
            template: __webpack_require__("./src/app/notes-host/notes-host.component.html"),
            styles: [__webpack_require__("./src/app/notes-host/notes-host.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotesHostComponent);
    return NotesHostComponent;
}());



/***/ }),

/***/ "./src/app/shared/note.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = /** @class */ (function () {
    function Note(id, time, title, description) {
        this.id = id;
        this.time = time;
        this.title = title;
        this.description = description;
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/shared/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// let notesPromise = Promise.resolve(JSON.parse(localStorage.getItem(this.keyName)) || []);
var StorageService = /** @class */ (function () {
    function StorageService() {
        this.keyName = 'notes';
    }
    StorageService.prototype.getNotes = function () {
        // localStorage.clear();
        return Promise.resolve(JSON.parse(localStorage.getItem(this.keyName)) || []);
    };
    StorageService.prototype.getNote = function (id) {
        return this.getNotes().then(function (notes) { return notes.find(function (x) { return x.id === id; }); });
    };
    StorageService.prototype.addNote = function (note) {
        var _this = this;
        this.getNotes().then(function (result) {
            result.push(note);
            localStorage.setItem(_this.keyName, JSON.stringify(result));
        });
    };
    StorageService.prototype.deleteNote = function (id) {
        var _this = this;
        this.getNotes()
            .then(function (notes) { return notes.filter(function (x) { return x.id !== id; }); })
            .then(function (result) { return localStorage.setItem(_this.keyName, JSON.stringify(result)); });
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map