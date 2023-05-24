/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/_vars.js
/* harmony default export */ const _vars = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});
;// CONCATENATED MODULE: ./src/js/components/tabs.js
class Tabs {
  constructor(selector, innerElems, starterId) {
    this.selector = selector;
    this.innerElements = innerElems;
    this.starterId = starterId;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector("." + innerElems.list);
      this.tabsBtns = this.tabList.querySelectorAll("." + innerElems.button);
      this.tabsPanels = this.tabs.querySelectorAll("." + innerElems.panel);
    } else {
      return;
    }
    this.init();
    this.events();
  }
  init() {
    this.tabList.setAttribute("role", "tablist");
    this.tabsBtns.forEach((el, i) => {
      el.setAttribute("role", "tab");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("id", `${this.selector}${i + 1}`);
      el.classList.remove(this.innerElements.button + "-active");
    });
    this.tabsPanels.forEach((el, i) => {
      el.setAttribute("role", "tabpanel");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("aria-labelledby", this.tabsBtns[i].id);
      el.classList.remove(this.innerElements.panel + "-active");
    });
    this.tabsBtns[this.starterId].classList.add(this.innerElements.button + "-active");
    this.tabsBtns[this.starterId].removeAttribute("tabindex");
    this.tabsBtns[this.starterId].setAttribute("aria-selected", "true");
    this.tabsPanels[this.starterId].classList.add(this.innerElements.panel + "-active");
  }
  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener("click", e => {
        let currentTab = this.tabList.querySelector("[aria-selected]");
        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });
      el.addEventListener("keydown", e => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);
        let dir = null;
        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = "down";
        } else {
          dir = null;
        }
        if (dir !== null) {
          if (dir === "down") {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }
  switchTabs(newTab) {
    let oldTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tabs.querySelector("[aria-selected]");
    newTab.focus();
    newTab.removeAttribute("tabindex");
    newTab.setAttribute("aria-selected", "true");
    oldTab.removeAttribute("aria-selected");
    oldTab.setAttribute("tabindex", "-1");
    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);
    this.tabsPanels[oldIndex].classList.remove(this.innerElements.panel + "-active");
    this.tabsPanels[index].classList.add(this.innerElements.panel + "-active");
    this.tabsBtns[oldIndex].classList.remove(this.innerElements.button + "-active");
    this.tabsBtns[index].classList.add(this.innerElements.button + "-active");
  }
}
const quizTabs = new Tabs("hero__tabs", {
  list: "hero__list-tabs",
  button: "hero__button-tabs",
  panel: "hero__panel"
}, 0);
;// CONCATENATED MODULE: ./src/js/_components.js

;// CONCATENATED MODULE: ./src/js/main.js




/******/ })()
;