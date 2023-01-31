"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs");
  const modal = require("./modules/modal");
  const timer = require("./modules/timer");
  const cards = require("./modules/cards");
  const slider = require("./modules/slider");
  const calc = require("./modules/calc");

  tabs();
  modal();
  timer();
  cards();
  slider();
  calc();
});
