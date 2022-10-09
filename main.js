(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var n,r;return n=e,(r=[{key:"_check",value:function(t){return t.ok?t.json():Promise.reject("Упс, что-то пошло не так, ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"setUserInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._check(t)}))}},{key:"setUserAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})}).then((function(t){return e._check(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"addCards",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._check(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._check(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._check(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._check(t)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardTemplate=n.cardTemplate,this._cardGallery=n.cardGallery,this._cardImage=n.cardImage,this._title=n.title,this._buttonLike=n.buttonLike,this._activeLike=n.activeLike,this._numberLikes=n.numberLikes,this._buttonRemove=n.buttonRemove,this._openViewPicture=r,this._deleteCard=o,this._likeCard=i,this._userInfo=u,this._name=e.name,this._link=e.link,this._idCard=e._id,this._author=e.owner.name,this._authorId=e.owner._id,this._likes=e.likes}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){var t=document.querySelector(this._cardTemplate).content;return this._cardElement=t.querySelector(this._cardGallery).cloneNode(!0),this._pictureView=this._cardElement.querySelector(this._cardImage),this._title=this._cardElement.querySelector(this._title),this._buttonLike=this._cardElement.querySelector(this._buttonLike),this._numberLikes=this._cardElement.querySelector(this._numberLikes),this._buttonRemove=this._cardElement.querySelector(this._buttonRemove),t}},{key:"addLikeClass",value:function(){this._buttonLike.classList.add(this._activeLike)}},{key:"removeLikeClass",value:function(){this._buttonLike.classList.remove(this._activeLike)}},{key:"removeCard",value:function(){this._cardElement.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._pictureView.addEventListener("click",(function(){t._openViewPicture({name:"Автор: ".concat(t._author,". Описание: ").concat(t._name),link:t._link})})),this._buttonLike.addEventListener("click",(function(){t._likeCard(t._buttonLike,t._activeLike,t._idCard,t._numberLikes)})),this._buttonRemove.addEventListener("click",(function(){t._deleteCard(t._cardElement,t._idCard)}))}},{key:"_checkLikeCard",value:function(){var t=this;this._likes.some((function(e){return e._id===t._userInfo.getUserId()}))&&this._buttonLike.classList.add(this._activeLike)}},{key:"addCard",value:function(){return this._getTemplate(),this._pictureView.src=this._link,this._pictureView.alt=this._name,this._title.textContent=this._name,this._numberLikes.textContent=this._likes.length,this._authorId!==this._userInfo.getUserId()&&this._buttonRemove.remove(),this._setEventListeners(),this._checkLikeCard(),this._cardElement}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputs=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonSave=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_toggleButtonState",value:function(){this._inputInvalid(this._inputs)?this._buttonSave.classList.contains(this._inactiveButtonClass)||(this._buttonSave.classList.add(this._inactiveButtonClass),this._buttonSave.setAttribute("disabled",!0)):(this._buttonSave.classList.remove(this._inactiveButtonClass),this._buttonSave.removeAttribute("disabled"))}},{key:"_inputInvalid",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t,e){t.validity.valid?this._closeErrorInput(t,e):this._showErrorInput(t,e)}},{key:"_showErrorInput",value:function(t,e){t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_closeErrorInput",value:function(t,e){t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"disabledButton",value:function(){this._buttonSave.classList.add(this._inactiveButtonClass),this._buttonSave.setAttribute("disabled",!0)}},{key:"enableValidation",value:function(){var t=this;this._toggleButtonState(),this._formElement.addEventListener("input",(function(e){var n=e.target,r=t._formElement.querySelector("#".concat(n.id,"-error"));t._checkInputValidity(n,r),t._toggleButtonState()}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._closeEsc=this._exitPopup.bind(this)}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._closeEsc)}},{key:"closePopup",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeEsc)}},{key:"_exitPopup",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var t=this;this._popupSelector.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup__close-button")||e.target===e.currentTarget)&&t.closePopup()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=h(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},p.apply(this,arguments)}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function _(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._pictureView=e,r._titleView=n,r}return e=u,(n=[{key:"openPopup",value:function(t){var e=t.name,n=t.link;this._pictureView.setAttribute("src",n),this._pictureView.setAttribute("alt",e),this._titleView.textContent=e,p(y(u.prototype),"openPopup",this).call(this)}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=g(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function L(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return L(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=r,n.form=n._popupSelector.querySelector(".form"),n._inputs=n.form.querySelectorAll(".popup__input"),n._submitButton=n.form.querySelector(".popup__save-button"),n}return e=u,n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setEventListeners",value:function(){var t=this;k(S(u.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues())}))}},{key:"closePopup",value:function(){k(S(u.prototype),"closePopup",this).call(this),this.form.reset()}},{key:"isLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Подождите...";t?(this._submitButton.textContent=e,this._submitButton.disabled=!0,this._submitButton.classList.add("popup__save-button_disabled")):(this._submitButton.disabled=!1,this._submitButton.classList.remove("popup__save-button_disabled"))}}],n&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var P=function(){function t(e){var n=e.name,r=e.profession,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=n,this._userJob=r,this._avatar=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userJob.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userJob.textContent=t.about,this._avatar.src=t.avatar,this._idUser=t._id}},{key:"getUserId",value:function(){return this._idUser}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=B(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function B(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=r,n.form=n._popupSelector.querySelector(".form"),n._submitButton=n.form.querySelector(".popup__save-button"),n}return e=u,n=[{key:"openPopup",value:function(t,e){I(T(u.prototype),"openPopup",this).call(this),this._idItem=e,this._item=t}},{key:"setEventListeners",value:function(){var t=this;I(T(u.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._item,t._idItem)}))}},{key:"isLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";t?(this._submitButton.textContent=e,this._submitButton.disabled=!0,this._submitButton.classList.add("popup__save-button_disabled")):(this._submitButton.disabled=!1,this._submitButton.classList.remove("popup__save-button_disabled"))}}],n&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var U={formSelector:".form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_active"},A={cardTemplate:"#card",cardGallery:".photo-gallery__card",cardImage:".photo-gallery__image",title:".photo-gallery__title",buttonLike:".photo-gallery__like-button",activeLike:"photo-gallery__like-button_active",numberLikes:".number-of-likes",buttonRemove:".photo-gallery__remove-button"},D=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),N=document.querySelector(".overlay"),G=document.querySelector(".profile__name"),J=document.querySelector(".profile__profession"),H=document.querySelector(".profile__photo"),M=document.querySelector(".popup__input_data_name"),z=document.querySelector(".popup__input_data_description"),$=document.querySelector(".popup__input_data_avatar"),K=document.forms.addform,Q=document.forms.editform,W=document.forms.avatarform,X=(document.forms.confirmform,document.querySelector(".edit-form")),Y=document.querySelector(".add-form"),Z=document.querySelector(".avatar-form"),tt=document.querySelector(".view-photo"),et=document.querySelector(".confirmation"),nt=document.querySelector(".popup__caption-photo"),rt=document.querySelector(".popup__image"),ot=document.querySelector(".photo-gallery"),it=new e({url:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"fa8b7030-628c-4c20-88d8-1bf7f45e43a9","Content-Type":"application/json"}});Promise.all([it.getUserInfo(),it.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];yt.setUserInfo(o),lt.renderItems(i.reverse())})).catch((function(t){console.log("Ошибка: ".concat(t))}));var ut=new i(U,Q),at=new i(U,K),st=new i(U,W);function ct(t){return new r(t,A,pt,bt,vt,yt).addCard()}at.enableValidation(),ut.enableValidation(),st.enableValidation();var lt=new a({renderer:function(t){var e=ct(t);lt.addItem(e)}},ot),ft=new v(tt,rt,nt);function pt(t){var e=t.name,n=t.link;ft.openPopup({name:e,link:n})}ft.setEventListeners();var ht=new E(Y,{submitForm:function(t){ht.isLoading(!0,"Создание..."),it.addCards(t).then((function(t){lt.addItem(ct(t)),ht.closePopup()})).catch((function(t){console.log(t)})).finally((function(){return ht.isLoading(!1)}))}});ht.setEventListeners(),F.addEventListener("click",(function(){at.disabledButton(),ht.openPopup()}));var dt=new E(X,{submitForm:function(t){dt.isLoading(!0,"Сохранение..."),it.setUserInfo(t).then((function(t){yt.setUserInfo(t),dt.closePopup()})).catch((function(t){console.log(t)})).finally((function(){return dt.isLoading(!1)}))}});dt.setEventListeners(),D.addEventListener("click",(function(){var t=yt.getUserInfo(),e=t.name,n=t.profession;M.value=e,z.value=n,dt.openPopup()}));var _t=new E(Z,{submitForm:function(t){_t.isLoading(!0,"Сохранение..."),it.setUserAvatar(t).then((function(t){yt.setUserInfo(t),_t.closePopup()})).catch((function(t){console.log(t)})).finally((function(){return _t.isLoading(!1)}))}});_t.setEventListeners(),N.addEventListener("click",(function(){var t=yt.getUserInfo().avatar;$.value=t,st.disabledButton(),_t.openPopup()}));var yt=new P({name:G,profession:J,avatar:H});function vt(t,e,n,r){t.classList.contains(e)?it.deleteLike(n).then((function(t){n.removeLikeClass(),r.textContent=t.likes.length})).catch((function(t){console.log(t)})):it.putLike(n).then((function(t){n.addLikeClass(),r.textContent=t.likes.length})).catch((function(t){console.log(t)}))}function bt(t,e){mt.openPopup(t,e)}var mt=new x(et,{submitForm:function(t,e){it.deleteCard(e).then((function(){t.removeCard(),t=null})).then((function(){mt.closePopup()})).catch((function(t){console.log(t)})).finally((function(){return mt.isLoading(!1)}))}});mt.setEventListeners()})();