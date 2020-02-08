(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/About/About.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/About/About.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; } }\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n  .one.column,\n  .one.columns {\n    width: 4.66666666667%; }\n  .two.columns {\n    width: 13.3333333333%; }\n  .three.columns {\n    width: 22%; }\n  .four.columns {\n    width: 30.6666666667%; }\n  .five.columns {\n    width: 39.3333333333%; }\n  .six.columns {\n    width: 48%; }\n  .seven.columns {\n    width: 56.6666666667%; }\n  .eight.columns {\n    width: 65.3333333333%; }\n  .nine.columns {\n    width: 74.0%; }\n  .ten.columns {\n    width: 82.6666666667%; }\n  .eleven.columns {\n    width: 91.3333333333%; }\n  .twelve.columns {\n    width: 100%;\n    margin-left: 0; }\n  .one-third.column {\n    width: 30.6666666667%; }\n  .two-thirds.column {\n    width: 65.3333333333%; }\n  .one-half.column {\n    width: 48%; }\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns {\n    margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns {\n    margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns {\n    margin-left: 26%; }\n  .offset-by-four.column,\n  .offset-by-four.columns {\n    margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns {\n    margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns {\n    margin-left: 52%; }\n  .offset-by-seven.column,\n  .offset-by-seven.columns {\n    margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns {\n    margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns {\n    margin-left: 78.0%; }\n  .offset-by-ten.column,\n  .offset-by-ten.columns {\n    margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns {\n    margin-left: 95.3333333333%; }\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns {\n    margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns {\n    margin-left: 69.3333333333%; }\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns {\n    margin-left: 52%; } }\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\n\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\n\nfieldset {\n  padding: 0;\n  border-width: 0; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\n\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\n\nol {\n  list-style: decimal inside; }\n\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\n\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\n\nli {\n  margin-bottom: 1rem; }\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\n\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\n\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\n\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\n\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\n\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.u-pull-right {\n  float: right; }\n\n.u-pull-left {\n  float: left; }\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n/* Larger than mobile */\n/* Larger than phablet (also point when grid becomes active) */\n/* Larger than tablet */\n/* Larger than desktop */\n/* Larger than Desktop HD */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n.balloonAnimationAll, .balloonAnimation1, .balloonAnimation2, .balloonAnimation3 {\n  position: relative;\n  -webkit-animation-duration: 3s;\n  /* Chrome, Safari, Opera */\n  animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n  /* Chrome, Safari, Opera */\n  animation-iteration-count: infinite; }\n\n/* First Animation */\n.balloonAnimation1 {\n  -webkit-animation-name: balloon;\n  /* Chrome, Safari, Opera */\n  animation-name: balloon; }\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes balloon {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 4px;\n    top: 0px; }\n  50% {\n    left: 7px;\n    top: 3px; }\n  75% {\n    left: 0px;\n    top: 7px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Standard syntax */\n@keyframes balloon {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 4px;\n    top: 0px; }\n  50% {\n    left: 7px;\n    top: 3px; }\n  75% {\n    left: 0px;\n    top: 7px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Second Animation */\n.balloonAnimation2 {\n  -webkit-animation-name: balloonTwo;\n  /* Chrome, Safari, Opera */\n  animation-name: balloonTwo; }\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes balloonTwo {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 0px;\n    top: 4px; }\n  50% {\n    left: 3px;\n    top: 7px; }\n  75% {\n    left: 7px;\n    top: 0px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Standard syntax */\n@keyframes balloonTwo {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 0px;\n    top: 4px; }\n  50% {\n    left: 3px;\n    top: 7px; }\n  75% {\n    left: 7px;\n    top: 0px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Third Animation */\n.balloonAnimation3 {\n  -webkit-animation-name: balloonThree;\n  /* Chrome, Safari, Opera */\n  animation-name: balloonThree; }\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes balloonThree {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 2px;\n    top: 4px; }\n  50% {\n    left: 5px;\n    top: 5px; }\n  75% {\n    left: 2px;\n    top: 5px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Standard syntax */\n@keyframes balloonThree {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 2px;\n    top: 4px; }\n  50% {\n    left: 5px;\n    top: 5px; }\n  75% {\n    left: 2px;\n    top: 5px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/*  ------ END Class for Balloon animation ------ */\n/*-------- Boje ------- */\n/*  ------ END Boje -----  */\n/* ------ Transition --------*/\n/*  --- END Transition ---  */\n/*  ------- Linear Gradient -------  */\n/*  ------- END Linear Gradient -------  */\n/*  ------ Display Flex ------- */\n/*  ------ END Display Flex ------- */\n/*  ----- Class for Balloon animation ----- */\n.balloonAnimationAll, .balloonAnimation1, .balloonAnimation2, .balloonAnimation3 {\n  position: relative;\n  -webkit-animation-duration: 3s;\n  /* Chrome, Safari, Opera */\n  animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n  /* Chrome, Safari, Opera */\n  animation-iteration-count: infinite; }\n\n/* First Animation */\n.balloonAnimation1 {\n  -webkit-animation-name: balloon;\n  /* Chrome, Safari, Opera */\n  animation-name: balloon; }\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes balloon {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 4px;\n    top: 0px; }\n  50% {\n    left: 7px;\n    top: 3px; }\n  75% {\n    left: 0px;\n    top: 7px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Standard syntax */\n@keyframes balloon {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 4px;\n    top: 0px; }\n  50% {\n    left: 7px;\n    top: 3px; }\n  75% {\n    left: 0px;\n    top: 7px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Second Animation */\n.balloonAnimation2 {\n  -webkit-animation-name: balloonTwo;\n  /* Chrome, Safari, Opera */\n  animation-name: balloonTwo; }\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes balloonTwo {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 0px;\n    top: 4px; }\n  50% {\n    left: 3px;\n    top: 7px; }\n  75% {\n    left: 7px;\n    top: 0px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Standard syntax */\n@keyframes balloonTwo {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 0px;\n    top: 4px; }\n  50% {\n    left: 3px;\n    top: 7px; }\n  75% {\n    left: 7px;\n    top: 0px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Third Animation */\n.balloonAnimation3 {\n  -webkit-animation-name: balloonThree;\n  /* Chrome, Safari, Opera */\n  animation-name: balloonThree; }\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes balloonThree {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 2px;\n    top: 4px; }\n  50% {\n    left: 5px;\n    top: 5px; }\n  75% {\n    left: 2px;\n    top: 5px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/* Standard syntax */\n@keyframes balloonThree {\n  0% {\n    left: 0px;\n    top: 0px; }\n  25% {\n    left: 2px;\n    top: 4px; }\n  50% {\n    left: 5px;\n    top: 5px; }\n  75% {\n    left: 2px;\n    top: 5px; }\n  100% {\n    left: 0px;\n    top: 0px; } }\n\n/*  ------ END Class for Balloon animation ------ */\n/*  ------ Whole website style -------  */\nbody {\n  font-family: 'Biryani', sans-serif; }\n\n.wrapper {\n  max-width: 100%;\n  margin: 0 auto; }\n\narticle {\n  text-align: center; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\na {\n  text-decoration: none; }\n\n.paragraf {\n  margin: 2% auto;\n  width: 60%; }\n\n.paragraf2 {\n  margin: 2% auto 0 auto;\n  width: 60%; }\n\np {\n  color: #292727;\n  font-size: 110%; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #292727; }\n\n.idiLevoFloat {\n  float: left; }\n\n.idiLevo {\n  text-align: left; }\n\n.idiDesno {\n  text-align: right; }\n\n.buttonProvidanCrni {\n  color: #292727;\n  padding: 9px 10px;\n  border-radius: 4px;\n  border: 1px solid #292727;\n  transition: opacity 0.4s ease-out; }\n\n.buttonProvidanCrni:hover {\n  color: #292727;\n  opacity: 0.8; }\n\n.buttonZuti {\n  color: white;\n  background-color: #efd213;\n  padding: 9px 10px;\n  border-radius: 4px;\n  transition: color 0.3s ease-in, background 0.3s ease-in; }\n\n.buttonZuti:hover {\n  color: white;\n  background: #d7bd11; }\n\n.buttonSvetloPlavi {\n  color: white;\n  background-color: #8ed4cc;\n  padding: 9px 10px;\n  border-radius: 4px;\n  transition: color 0.3s ease-in, background 0.3s ease-in; }\n\n.buttonSvetloPlavi:hover {\n  color: white;\n  background: #9ce9e0; }\n\n.buttonProvidanPlavi {\n  padding: 9px 10px;\n  border: 1px solid #70bbf7;\n  border-radius: 4px;\n  color: #70bbf7;\n  transition: color 0.3s ease-in, background 0.3s ease-in; }\n\n.buttonProvidan {\n  padding: 2px 8px;\n  border: 1px solid white;\n  border-radius: 4px;\n  color: white; }\n\n.buttonProvidanVeci {\n  padding: 9px 10px;\n  border-radius: 4px;\n  color: white;\n  border: 1px solid white;\n  transition: opacity 0.3s ease-in; }\n\n.buttonProvidanVeci:hover {\n  opacity: 0.8;\n  color: white; }\n\n.buttonPlavi {\n  padding: 9px 10px;\n  border-radius: 4px;\n  color: white;\n  background-color: #369ff4;\n  border: none;\n  transition: color 0.3s ease-in, background 0.3s ease-in; }\n\n.buttonPlavi:hover {\n  color: white;\n  background-color: #70bbf7; }\n\n.hrStyle {\n  border: 0;\n  height: 1px;\n  background-image: linear-gradient(to right, rgba(132, 132, 132, 0), rgba(132, 132, 132, 0.75), rgba(132, 132, 132, 0)); }\n\n/* ---- END -----  */\n/*  ------ Header ------  */\n.logoImg {\n  float: left;\n  padding-left: 10%;\n  width: 12%;\n  display: inline;\n  padding-top: 1%; }\n\nheader {\n  padding-top: 1%; }\n\nheader ul .whyWater {\n  margin-left: 4%; }\n\nheader ul li {\n  display: inline-block;\n  margin: 0 1% 0 1%; }\n\nheader ul li a {\n  color: white;\n  font-size: 85%;\n  transition: opacity 0.4s ease-out; }\n\nheader ul li a:hover {\n  color: white;\n  opacity: 0.7; }\n\nheader .rightNav .donateAndFundraise {\n  height: 80px; }\n\nheader .rightNav .child {\n  position: absolute;\n  display: none;\n  background: rgba(13, 13, 13, 0.8); }\n\nheader .rightNav .child li {\n  line-height: 25px;\n  text-align: left;\n  padding: 5%;\n  margin: 0;\n  display: block; }\n\nheader .rightNav .child li:hover {\n  background: #0d0d0d; }\n\nheader .rightNav .child li a:hover {\n  opacity: 1; }\n\nheader .parent li:hover .child {\n  display: block;\n  padding: 0%; }\n\n/* ---- Modal Navigation ----- */\n.modalNavigation {\n  display: none;\n  height: 100vh;\n  overflow: scroll;\n  width: 230px;\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  right: 0;\n  padding: 5% 0;\n  background-color: #151414; }\n\n.modalNavigation .signInButton {\n  padding: 2% 30%;\n  background-color: #292727;\n  border: 1px solid black;\n  border-radius: 5px; }\n\n.modalNavigation a {\n  color: white; }\n\n.modalNavigation ul {\n  margin-top: 8%;\n  list-style: none;\n  text-align: left; }\n\n.modalNavigation ul a {\n  display: inline-block;\n  width: 100%;\n  padding-left: 3%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid black;\n  transition: background 0.2s ease-in; }\n\n.modalNavigation ul a:hover {\n  background-color: #292727; }\n\n/*  ---- END Modal Navigation ---- */\n/*  ------ END Header -----  */\n/*  ----- pre Futer (4 columns) ---- */\n.preFooter {\n  margin: 0 auto;\n  margin-top: 5%;\n  width: 80%;\n  font-size: 90%; }\n\n.preFooter a {\n  color: #71716c;\n  transition: opacity 0.3s ease-out; }\n\n.preFooter a:hover {\n  opacity: 0.7; }\n\n/*  ----- END pre futer (4 columns) */\n/*  ---- Footer ----- */\nfooter {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 90%; }\n\nfooter p {\n  display: inline-block;\n  color: #71716c; }\n\nfooter a {\n  color: #71716c;\n  transition: opacity 0.3s ease-out; }\n\nfooter a:hover {\n  opacity: 0.7;\n  color: #71716c; }\n\nfooter .blueLink {\n  color: #369ff4;\n  transition: color 0.3s ease-in; }\n\nfooter .blueLink:hover {\n  color: #70bbf7; }\n\nfooter .socialIcon {\n  padding-bottom: 5%; }\n\nfooter .socialIcon a {\n  padding: 0 1%; }\n\n/*  ---------- END Footer -------  */\n/* width=\"640\" height=\"360\" */\n/*  -------- Play Video ------- */\n.videoHide {\n  display: none;\n  height: 100vh;\n  position: fixed;\n  z-index: 200;\n  top: 0;\n  right: 0;\n  left: 0;\n  background: rgba(15, 15, 15, 0.9); }\n\n.videoHide .videoContent {\n  margin-top: 3%; }\n\n.videoHide .videoContent iframe {\n  width: 840px;\n  height: 560px; }\n\n.videoHide .exitVideoHide {\n  font-weight: bold;\n  color: white;\n  font-size: 150%;\n  padding: 2%;\n  position: absolute;\n  right: 1%;\n  top: 1%;\n  cursor: pointer;\n  transition: all 0.3s ease-in; }\n\n.videoHide .exitVideoHide:hover {\n  font-size: 180%; }\n\n/*  -------- END Play Video ------- */\n/*  ------ Clearfix for floating fix ----------- */\n.clearfix {\n  clear: both; }\n\n@media screen and (max-width: 1000px) {\n  /* ----Whole ----- */\n  p {\n    font-size: 90%; }\n  .paragraf, .paragraf2 {\n    min-width: 80%; }\n  /*  -- Video Hide -- */\n  .videoHide .videoContent {\n    margin-top: 7%; }\n  .videoHide .videoContent iframe {\n    width: 700px;\n    height: 440px; }\n  /* ----Header Article ------ */\n  .headerArticle .logoImg {\n    display: none; }\n  .headerArticle .logoNoText {\n    float: left;\n    max-width: 30%;\n    padding: 1% 0 0 2%; }\n  .headerArticle .menuIcon {\n    float: right;\n    padding: 1% 4% 0 0; }\n  .headerArticle header {\n    display: none; }\n  .headerArticle .rightNav {\n    margin-top: 0; } }\n\n@media screen and (min-width: 1000px) {\n  .menuIcon {\n    display: none; } }\n\n@media screen and (max-width: 750px) {\n  /*  -- Video Hide -- */\n  .videoHide .videoContent {\n    margin-top: 10%; }\n  .videoHide .videoContent iframe {\n    width: 540px;\n    height: 350px; } }\n\n@media screen and (max-width: 550px) {\n  /*  -- Whole website -- */\n  .paragraf, .paragraf2 {\n    min-width: 85%; }\n  /* --- Pre Footer --- */\n  .preFooter div {\n    margin-bottom: 4%; }\n  /*  ---- Footer ---- */\n  footer .firstSectionFooter a, footer .firstSectionFooter p {\n    display: block;\n    margin: 2% 0; }\n  footer .firstSectionFooter span {\n    display: none; }\n  footer a {\n    font-size: 90%; }\n  /*  -- Video Hide -- */\n  .videoHide .videoContent {\n    margin-top: 15%; }\n  .videoHide .videoContent iframe {\n    width: 300px;\n    height: 190px; } }\n\n@media screen and (max-width: 1000px) {\n  /* -- Whole page -- */\n  .logoNoText {\n    min-width: 20%; }\n  /*  -- Header Article -- */\n  .headerArticle .contentHeader {\n    padding-top: 5%;\n    min-width: 80%; }\n  .headerArticle .contentHeader h1 {\n    font-size: 180%; }\n  /*  -- Three Columns Image -- */\n  .threeColumns {\n    min-width: 90%; } }\n\n@media screen and (max-width: 750px) {\n  /*  -- Header Article -- */\n  .wrapper .headerArticle {\n    background-size: cover; }\n  .wrapper .headerArticle .contentHeader {\n    min-width: 90%; }\n  .wrapper .headerArticle .contentHeader a {\n    max-width: 50%;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: 1%; }\n  /*  -- Three Columns Image -- */\n  .threeColumns {\n    min-width: 98%; }\n  .threeColumns .row {\n    padding-bottom: 13%; }\n  /*  -- Background: Read blog -- */\n  .contentReadBlog {\n    min-width: 80%; }\n  /*  -- Purchase -- */\n  .purchase img {\n    min-width: 20%; } }\n\n@media screen and (max-width: 550px) {\n  /* -- Whole page -- */\n  .logoNoText {\n    min-width: 27%; }\n  /*  -- Three Columns Image -- */\n  .wrapper .threeColumns {\n    min-width: 90%; }\n  .wrapper .threeColumns .row {\n    display: inline;\n    padding-bottom: 0; }\n  .wrapper .threeColumns .four {\n    padding-bottom: 15%; }\n  /*  -- Background: Hiring -- */\n  .wrapper .hiring .contentHiring {\n    min-width: 90%; }\n  .wrapper .hiring .contentHiring h4 {\n    color: white; }\n  .wrapper .hiring .contentHiring a {\n    display: block;\n    max-width: 50%;\n    margin: 1% auto; } }\n\n/*  ------ Whole page ----  */\n/*  ------- Header Article ------  */\n.headerArticle {\n  background-size: 100% 100%;\n  height: 100vh; }\n\n.headerArticle .logoNoText {\n  float: left;\n  padding-left: 10%;\n  width: 12%;\n  display: inline;\n  padding-top: 1%; }\n\n.headerArticle header a {\n  color: #292727; }\n\n.headerArticle header a:hover {\n  color: #292727; }\n\n.headerArticle .buttonProvidan {\n  border: 1px solid #292727;\n  color: #292727; }\n\n.headerArticle .child a {\n  color: white; }\n\n.headerArticle .child a:hover {\n  color: white; }\n\n.headerArticle .contentHeader {\n  width: 60%;\n  margin: 0 auto; }\n\n.headerArticle .contentHeader a {\n  margin: 0 1%; }\n\n/*  ------- END Header Article ------  */\n/*  ------- Three Columns Images ---------  */\n.threeColumns {\n  width: 70%;\n  margin: 0 auto;\n  padding-top: 8%; }\n\n.threeColumns img {\n  width: 65%;\n  height: 45%; }\n\n.threeColumns .row {\n  display: flex; }\n\n.threeColumns .row h6, .threeColumns .row a {\n  font-weight: bold; }\n\n.threeColumns .row h6 {\n  padding-top: 4%; }\n\n/*  ------- END Three Columns Images ---------  */\n/*  ------- Background: Read Blog -------- */\n.readBlog {\n  margin-top: 8%;\n  background: url(\"\") no-repeat;\n  background-position: center;\n  background-size: 100% 100%; }\n\n.readBlog .contentReadBlog {\n  padding: 12% 0;\n  width: 45%;\n  margin: 0 auto; }\n\n.readBlog .contentReadBlog h4 {\n  color: white; }\n\n/*  ------- END Background: Read Blog -------- */\n/*  ------- Purchase -------- */\n.purchase {\n  margin-top: 8%; }\n\n.purchase img {\n  width: 13%; }\n\n/*  ------- END Purchase -------- */\n/*  ------ Background: Hiring -------  */\n.hiring {\n  margin-top: 8%;\n  background: url(\"\") no-repeat;\n  background-position: center;\n  background-size: cover; }\n\n.hiring .contentHiring {\n  padding: 12% 0;\n  width: 60%;\n  margin: 0 auto; }\n\n.hiring .contentHiring h4 {\n  color: white; }\n\n.hiring .contentHiring a {\n  margin: 0 1%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Footer/Footer.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/Footer/Footer.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #1b1d2e;\n  font-weight: 300;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  line-height: 1.5rem;\n  color: #ececec;\n  padding: 80px 20px; }\n  @media (min-width: 767px) {\n    .footer {\n      font-size: 1.25rem;\n      letter-spacing: 1px;\n      line-height: 1.75rem; } }\n  @media (min-width: 767px) {\n    .footer {\n      padding: 40px 20px;\n      height: 390px; } }\n  .footer-container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 100%; }\n    @media (min-width: 767px) {\n      .footer-container {\n        flex-direction: row; } }\n  .footer-top {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    align-items: center;\n    width: 100%; }\n    @media (min-width: 767px) {\n      .footer-top {\n        flex-direction: row; } }\n  .footer-about {\n    text-align: center; }\n    @media (min-width: 767px) {\n      .footer-about {\n        text-align: left; } }\n  .footer-aboutTitleImg {\n    max-height: 60px;\n    height: auto;\n    margin-bottom: 10px; }\n  .footer-aboutDescription {\n    font-weight: 300;\n    font-size: 1rem;\n    letter-spacing: 0.5px;\n    line-height: 1.5rem; }\n    @media (min-width: 767px) {\n      .footer-aboutDescription {\n        font-size: 1.25rem;\n        letter-spacing: 1px;\n        line-height: 1.75rem; } }\n  .footer-socialMenu {\n    margin: 20px; }\n    @media (min-width: 767px) {\n      .footer-socialMenu {\n        margin-left: auto; } }\n  .footer-socialMenuItem {\n    padding: 15px 0; }\n  .footer-socialLink {\n    font-weight: 300;\n    font-size: 1rem;\n    letter-spacing: 0.5px;\n    line-height: 1.5rem;\n    font-weight: 400;\n    text-decoration: none;\n    color: #ececec;\n    display: flex;\n    align-items: center; }\n    @media (min-width: 767px) {\n      .footer-socialLink {\n        font-size: 1.25rem;\n        letter-spacing: 1px;\n        line-height: 1.75rem; } }\n  .footer-socialLinkIcon {\n    width: 40px;\n    margin-right: 20px; }\n  .footer-flag {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-size: 2rem;\n    padding-top: 20px; }\n    @media (min-width: 767px) {\n      .footer-flag {\n        margin-left: auto; } }\n  .footer-bottom {\n    margin-top: auto;\n    width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Home/Home.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/Home/Home.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 450px;\n  background-color: #2d3047; }\n  @media (min-width: 992px) {\n    .header {\n      height: 375px; } }\n  .header-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 40px;\n    padding-bottom: 40px; }\n    @media (min-width: 767px) {\n      .header-container {\n        flex-direction: row;\n        justify-content: space-around; } }\n  .header-image {\n    height: 150px;\n    margin-bottom: 30px; }\n    @media (min-width: 767px) {\n      .header-image {\n        height: 200px;\n        margin-bottom: 0; } }\n    @media (min-width: 992px) {\n      .header-image {\n        height: 300px; } }\n  .header-tagline {\n    font-weight: 300;\n    font-size: 1rem;\n    letter-spacing: 0.5px;\n    line-height: 1.5rem;\n    color: #ececec;\n    width: 100%;\n    text-align: center;\n    cursor: default; }\n    @media (min-width: 767px) {\n      .header-tagline {\n        font-size: 1.25rem;\n        letter-spacing: 1px;\n        line-height: 1.75rem; } }\n    @media (min-width: 767px) {\n      .header-tagline {\n        flex-basis: 430px;\n        text-align: left;\n        width: 100%;\n        align-items: flex-start; } }\n    @media (min-width: 992px) {\n      .header-tagline {\n        flex-basis: 700px;\n        text-align: center; } }\n  .header-taglinePart {\n    display: inline; }\n\n.upcomingMeetup {\n  color: #2d3047;\n  font-weight: 300;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  line-height: 1.5rem; }\n  @media (min-width: 767px) {\n    .upcomingMeetup {\n      font-size: 1.25rem;\n      letter-spacing: 1px;\n      line-height: 1.75rem; } }\n  .upcomingMeetup-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .upcomingMeetup-title {\n    font-weight: 400;\n    font-size: 1.75rem;\n    letter-spacing: 1px;\n    line-height: 3rem;\n    margin-bottom: 30px; }\n    @media (min-width: 767px) {\n      .upcomingMeetup-title {\n        font-size: 2.25rem;\n        letter-spacing: 1.2px;\n        line-height: 3.75rem; } }\n  .upcomingMeetup-detail {\n    text-align: center; }\n    .upcomingMeetup-detail--date {\n      margin-bottom: 10px; }\n  .upcomingMeetup-detailLabel {\n    font-weight: 400; }\n  .upcomingMeetup-presenters {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding: 40px 0; }\n  .upcomingMeetup-presenter {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 400px;\n    max-width: 100%;\n    padding: 20px;\n    border: 3px solid rgba(224, 164, 88, 0.2);\n    margin: 20px; }\n  .upcomingMeetup-presenterImage {\n    height: 130px;\n    border-radius: 100px;\n    margin-bottom: 10px; }\n  .upcomingMeetup-presenterName {\n    font-weight: 400;\n    margin-bottom: 5px; }\n  .upcomingMeetup-presenterPresentationTitle {\n    font-weight: 300;\n    font-size: 0.9rem;\n    letter-spacing: 0.4px;\n    line-height: 1.4rem;\n    font-weight: 400;\n    align-self: flex-start;\n    margin-bottom: 5px; }\n    @media (min-width: 767px) {\n      .upcomingMeetup-presenterPresentationTitle {\n        font-size: 1rem;\n        letter-spacing: 0.5px;\n        line-height: 1.5rem; } }\n  .upcomingMeetup-presenterDescription {\n    font-weight: 300;\n    font-size: 0.9rem;\n    letter-spacing: 0.4px;\n    line-height: 1.4rem; }\n    @media (min-width: 767px) {\n      .upcomingMeetup-presenterDescription {\n        font-size: 1rem;\n        letter-spacing: 0.5px;\n        line-height: 1.5rem; } }\n  .upcomingMeetup-mapWrapper {\n    position: relative;\n    height: 450px;\n    width: 100%; }\n  .upcomingMeetup-mapNote {\n    text-align: center;\n    margin-bottom: 10px;\n    font-weight: 300;\n    font-size: 0.9rem;\n    letter-spacing: 0.4px;\n    line-height: 1.4rem; }\n    @media (min-width: 767px) {\n      .upcomingMeetup-mapNote {\n        font-size: 1rem;\n        letter-spacing: 0.5px;\n        line-height: 1.5rem; } }\n\n.ctaBlock {\n  position: relative;\n  color: #ececec; }\n  @media (min-width: 992px) {\n    .ctaBlock {\n      height: 300px;\n      font-weight: 300;\n      font-size: 1rem;\n      letter-spacing: 0.5px;\n      line-height: 1.5rem; } }\n  @media (min-width: 992px) and (min-width: 767px) {\n    .ctaBlock {\n      font-size: 1.25rem;\n      letter-spacing: 1px;\n      line-height: 1.75rem; } }\n  .ctaBlock-pattern {\n    display: flex;\n    position: relative; }\n    @media (min-width: 992px) {\n      .ctaBlock-pattern {\n        position: absolute;\n        align-items: flex-end;\n        transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.3, 1); } }\n    .ctaBlock-pattern--first {\n      background-color: #419d78; }\n      @media (min-width: 992px) {\n        .ctaBlock-pattern--first {\n          justify-content: flex-end;\n          top: 0;\n          left: 0;\n          width: 50%;\n          height: 100%; } }\n    .ctaBlock-pattern--second {\n      background-color: #2d3047; }\n      @media (min-width: 992px) {\n        .ctaBlock-pattern--second {\n          bottom: 0;\n          right: 0;\n          width: 50%;\n          height: 100%; } }\n    .ctaBlock-pattern:hover {\n      z-index: 10;\n      box-shadow: 0 4px 15px 5px rgba(0, 0, 0, 0.25); }\n  .ctaBlock-container {\n    height: 100%;\n    position: relative; }\n  .ctaBlock-cta {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding: 40px;\n    height: 200px;\n    color: white !important; }\n    @media (min-width: 992px) {\n      .ctaBlock-cta {\n        position: absolute;\n        height: unset;\n        width: 100vw / 2; } }\n    @media (min-width: 1200px) {\n      .ctaBlock-cta {\n        width: 600px; } }\n  .ctaBlock-ctaHeading {\n    font-weight: 400;\n    font-size: 1.75rem;\n    letter-spacing: 1px;\n    line-height: 3rem; }\n    @media (min-width: 767px) {\n      .ctaBlock-ctaHeading {\n        font-size: 2.25rem;\n        letter-spacing: 1.2px;\n        line-height: 3.75rem; } }\n  .ctaBlock-ctaDescription {\n    font-weight: 300;\n    font-size: 1rem;\n    letter-spacing: 0.5px;\n    line-height: 1.5rem; }\n    @media (min-width: 767px) {\n      .ctaBlock-ctaDescription {\n        font-size: 1.25rem;\n        letter-spacing: 1px;\n        line-height: 1.75rem; } }\n    @media (min-width: 992px) {\n      .ctaBlock-ctaDescription {\n        margin-bottom: 40px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/PastEvents/EventTemplate.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/PastEvents/EventTemplate.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pastMeetups-container {\n  padding: 40px 20px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: -40px; }\n  @media (min-width: 992px) {\n    .pastMeetups-container {\n      padding: 80px 20px; } }\n\n.pastMeetups-title {\n  font-weight: 400;\n  font-size: 2rem;\n  letter-spacing: 0.5px;\n  line-height: 3rem;\n  margin-bottom: 20px;\n  text-align: center;\n  align-self: center; }\n  @media (min-width: 767px) {\n    .pastMeetups-title {\n      font-size: 2.5rem;\n      letter-spacing: 1px;\n      line-height: 3.5rem; } }\n  @media (min-width: 992px) {\n    .pastMeetups-title {\n      font-size: 3rem;\n      line-height: 4rem; } }\n  @media (min-width: 992px) {\n    .pastMeetups-title {\n      margin-bottom: 40px; } }\n\n.pastMeetups-description {\n  font-weight: 300;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  line-height: 1.5rem;\n  width: 900px;\n  max-width: 100%;\n  margin: 0 auto 20px; }\n  @media (min-width: 767px) {\n    .pastMeetups-description {\n      font-size: 1.25rem;\n      letter-spacing: 1px;\n      line-height: 1.75rem; } }\n\n.pastMeetups-meetup {\n  margin: 40px 0; }\n\n.meetup {\n  border: 3px solid rgba(224, 164, 88, 0.2);\n  padding: 10px;\n  font-weight: 300;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  line-height: 1.5rem; }\n  @media (min-width: 767px) {\n    .meetup {\n      font-size: 1.25rem;\n      letter-spacing: 1px;\n      line-height: 1.75rem; } }\n  @media (min-width: 992px) {\n    .meetup {\n      padding: 40px;\n      flex-direction: row; } }\n  .meetup-title {\n    font-weight: 400;\n    font-size: 1.75rem;\n    letter-spacing: 1px;\n    line-height: 3rem;\n    text-align: center;\n    margin-bottom: 20px; }\n    @media (min-width: 767px) {\n      .meetup-title {\n        font-size: 2.25rem;\n        letter-spacing: 1.2px;\n        line-height: 3.75rem; } }\n  .meetup-label {\n    font-weight: 400; }\n  .meetup-meta {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 30px; }\n    @media (min-width: 992px) {\n      .meetup-meta {\n        flex-direction: row; } }\n  .meetup-metaField {\n    margin: 0 20px;\n    text-align: center; }\n    .meetup-metaField--date {\n      margin-bottom: 10px; }\n      @media (min-width: 992px) {\n        .meetup-metaField--date {\n          margin-bottom: 0; } }\n  .meetup-presenters {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: -10px; }\n    @media (min-width: 992px) {\n      .meetup-presenters {\n        margin-bottom: 0x;\n        margin: 0 -20px; } }\n  .meetup-presenter {\n    display: flex;\n    align-items: flex-start;\n    padding-bottom: 30px; }\n    @media (min-width: 992px) {\n      .meetup-presenter {\n        flex-basis: 50%;\n        padding: 0 20px; } }\n  .meetup-presenterImageContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-shrink: 0;\n    margin-right: 20px;\n    flex-basis: 100px; }\n    @media (min-width: 992px) {\n      .meetup-presenterImageContainer {\n        margin-right: 20px; } }\n  .meetup-presenterInfo {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start; }\n  .meetup-presenterTitle {\n    font-weight: 400;\n    margin-bottom: 10px; }\n  .meetup-presenterImage {\n    height: 100px;\n    border-radius: calc(100px / 2);\n    margin-bottom: 10px; }\n    @media (min-width: 992px) {\n      .meetup-presenterImage {\n        height: 100px;\n        border-radius: calc(100px / 2);\n        margin-bottom: 20px; } }\n  .meetup-presenterName {\n    font-weight: 300;\n    font-size: 0.9rem;\n    letter-spacing: 0.4px;\n    line-height: 1.4rem;\n    font-weight: 400;\n    text-align: center;\n    word-break: break-word; }\n    @media (min-width: 767px) {\n      .meetup-presenterName {\n        font-size: 1rem;\n        letter-spacing: 0.5px;\n        line-height: 1.5rem; } }\n  .meetup-presenterText {\n    font-weight: 300;\n    font-size: 0.9rem;\n    letter-spacing: 0.4px;\n    line-height: 1.4rem;\n    width: 100%; }\n    @media (min-width: 767px) {\n      .meetup-presenterText {\n        font-size: 1rem;\n        letter-spacing: 0.5px;\n        line-height: 1.5rem; } }\n  .meetup-presenterLinks {\n    margin-top: 5px; }\n  .meetup-presenterLinkItem {\n    margin-bottom: 5px; }\n  .meetup-presenterLink {\n    font-weight: 300;\n    font-size: 0.9rem;\n    letter-spacing: 0.4px;\n    line-height: 1.4rem;\n    border-bottom: 2px solid #e0a458;\n    transition: all 250ms ease-in-out;\n    font-weight: 400; }\n    @media (min-width: 767px) {\n      .meetup-presenterLink {\n        font-size: 1rem;\n        letter-spacing: 0.5px;\n        line-height: 1.5rem; } }\n    .meetup-presenterLink:hover {\n      background-color: #e0a458; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/About/OurTeam.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/About/OurTeam.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section {\n\tcolor: #5c6166;\n}\n.hr.invisible_hr {\n    height: 0;\n    padding: 0;\n}\n.hr.big_size_hr {\n    margin: 30px 0;\n}\n.hr {\n    clear: both;\n    display: block;\n    font-size: 0;\n    height: 24px;\n    margin: 20px 0;\n    overflow: hidden;\n    padding: 2px 0;\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\n.highlight_secondary {\n    color: #F24046;\n}\n.team-role {\n    color: #A4A7AA;\n}\n.img-circle {\n    border-radius: 50%;\n    position: relative;\n    float: left;\n    width:  100px;\n    height: 100px;\n    background-position: 50% 50%;\n    background-repeat:   no-repeat;\n    background-size:     cover;\n}\n.img-responsive {}", ""]);

// exports


/***/ }),

/***/ "./src/About/About.js":
/*!****************************!*\
  !*** ./src/About/About.js ***!
  \****************************/
/*! exports provided: AboutTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTemplate", function() { return AboutTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.scss */ "./src/About/About.scss");
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_about1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/about1.png */ "./src/images/about1.png");
/* harmony import */ var _images_about1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_about1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_about2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/about2.png */ "./src/images/about2.png");
/* harmony import */ var _images_about2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_about2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_about3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/about3.png */ "./src/images/about3.png");
/* harmony import */ var _images_about3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_about3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OurTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OurTeam */ "./src/About/OurTeam.js");
var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/About/About.js";






var AboutTemplate = function AboutTemplate() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " About our team "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Team Tarak is a friendly fraternity of NTR fans who are committed to make a difference. Our mission is to make a positive difference in the lives of the homeless, hungry, mentally ill and needy. Come Join Us. Keep an eye out for our next event and lets put a smile on some more faces together.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      paddingTop: '35px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      backgroundColor: 'yellow'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\"\u0906 \u0924\u094D\u092E\u0935\u0924\u094D \u092E\u0928\u094D\u092F\u0947\u0924\u094D \u091C\u0917\u0924\u094D\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      backgroundColor: 'yellow'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\"Consider the world like your own self.\""))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "threeColumns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "four columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_about1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "We prove project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "We prove every project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "We track every rupee you raise, and show the projects you helped fund with photos and GPS. We are also plannning to display all details of our financials here in the website. That gives a transparency of the money spent."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/pastevents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "See Our Past Events")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "four columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_about2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Open book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "We\u2019re an open book"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "We are always available and transparent. Text us (+91-9010570537) anytime if you have a question. We welcome you with open arms and with extreme happiness."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "VIEW ALL FINANCIALS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "four columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_about3_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "100% goes to the field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Private donors cover our operating costs so 100% of your money goes to charity. However, it takes time to learn and manage funding. So the maximum amount you can donate is 100 INR. If you are funding from overseas the maximum amount is 20 USD."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "LEARN HOW IT WORKS")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hrStyle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OurTeam__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "firstSectionFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Team Tarak Trust: #####"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "made with \u2764\uFE0F : lkanagal")))));
};

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutTemplate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/About/About.scss":
/*!******************************!*\
  !*** ./src/About/About.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./About.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/About/About.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./About.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/About/About.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./About.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/About/About.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/About/OurTeam.css":
/*!*******************************!*\
  !*** ./src/About/OurTeam.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./OurTeam.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/About/OurTeam.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./OurTeam.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/About/OurTeam.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./OurTeam.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/About/OurTeam.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/About/OurTeam.js":
/*!******************************!*\
  !*** ./src/About/OurTeam.js ***!
  \******************************/
/*! exports provided: OurTeamTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamTemplate", function() { return OurTeamTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_manoj_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/manoj.jpeg */ "./src/images/manoj.jpeg");
/* harmony import */ var _images_manoj_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_manoj_jpeg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_ajay_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ajay.jpeg */ "./src/images/ajay.jpeg");
/* harmony import */ var _images_ajay_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_ajay_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_gowtham_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/gowtham.jpeg */ "./src/images/gowtham.jpeg");
/* harmony import */ var _images_gowtham_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_gowtham_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_prasanth_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/prasanth.jpeg */ "./src/images/prasanth.jpeg");
/* harmony import */ var _images_prasanth_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_prasanth_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_vikram_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/vikram.jpeg */ "./src/images/vikram.jpeg");
/* harmony import */ var _images_vikram_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_vikram_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_headshot_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/headshot.jpeg */ "./src/images/headshot.jpeg");
/* harmony import */ var _images_headshot_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_headshot_jpeg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OurTeam_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OurTeam.css */ "./src/About/OurTeam.css");
/* harmony import */ var _OurTeam_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_OurTeam_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/About/OurTeam.js";








var OurTeamTemplate = function OurTeamTemplate() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "team",
    className: "text-center section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight_secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Our"), " Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Our people are our greatest asset and biggest differentiator.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "Come Join Us. And you can also get your name and headshot here. \uD83D\uDE0D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hr big_size_hr invisible_hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hr invisible_hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      align: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-md-offset-1 col-sm-4 col-xs-6 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_manoj_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "img-circle img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Manoj")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Prakasam, West Godavari"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-sm-4 col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_ajay_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "img-circle img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Ajay")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Kadapa, Anantapur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-sm-4 col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_gowtham_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "img-circle img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Gowtham")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Nellore, Chittoor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-sm-4 col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_prasanth_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "img-circle img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Prasanth")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Hyderabad, Rangareddy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-sm-4 col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_vikram_jpeg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "img-circle img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Vikram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Krishna, Guntur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-sm-4 col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_headshot_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "img-circle img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Lokesh")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Developer - Technical Stack"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hr big_size_hr invisible_hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })))));
};

var OurTeam = function OurTeam() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OurTeamTemplate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OurTeam);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header/Header */ "./src/Header/Header.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home/Home */ "./src/Home/Home.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var _PastEvents_PastEvents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PastEvents/PastEvents */ "./src/PastEvents/PastEvents.js");
/* harmony import */ var _About_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./About/About */ "./src/About/About.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _homeResponse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homeResponse */ "./src/homeResponse.js");
/* harmony import */ var _homeResponse__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_homeResponse__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _meetupResponse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./meetupResponse */ "./src/meetupResponse.js");
/* harmony import */ var _meetupResponse__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_meetupResponse__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/App.js";










var MEETUPS_URL = "https://933y46jk97.execute-api.us-east-1.amazonaws.com/Stage-1/events";
var HOME_URL = "https://933y46jk97.execute-api.us-east-1.amazonaws.com/Stage-1/home";

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      homeData: {},
      meetupsData: {}
    };
    return _this;
  }

  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //const home_response = await axios.get(HOME_URL);
                //const meetups_response = await axios.get(MEETUPS_URL);
                this.setState({
                  homeData: _homeResponse__WEBPACK_IMPORTED_MODULE_15__["data"]
                });
                this.setState({
                  meetupsData: _meetupResponse__WEBPACK_IMPORTED_MODULE_16__["data"]
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        headerData: this.state.homeData.navbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        exact: true,
        path: "/",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Home_Home__WEBPACK_IMPORTED_MODULE_9__["default"], {
            homeData: _this2.state.homeData,
            meetupsData: _this2.state.meetupsData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/pastevents",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PastEvents_PastEvents__WEBPACK_IMPORTED_MODULE_11__["default"], {
            eventsData: _this2.state.meetupsData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/about",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_About_About__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        footerData: this.state.homeData.footer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Footer/Footer.js":
/*!******************************!*\
  !*** ./src/Footer/Footer.js ***!
  \******************************/
/*! exports provided: FooterTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTemplate", function() { return FooterTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.scss */ "./src/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_logoImage_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logoImage.png */ "./src/images/logoImage.png");
/* harmony import */ var _images_logoImage_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_logoImage_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/Footer/Footer.js";



var FooterTemplate = function FooterTemplate(_ref) {
  var footerData = _ref.footerData;
  var socialLinks = footerData.socialLinks;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-container  container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "footer-aboutTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "footer-aboutTitleImg",
    src: _images_logoImage_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-aboutDescription",
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Your friendly fraternity of NTR fans.")), socialLinks.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer-socialMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, socialLinks.map(function (socialLink) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: socialLink.linkUrl,
      className: "footer-socialMenuItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "footer-socialLink",
      href: socialLink.linkUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "footer-socialLinkIcon",
      src: socialLink.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), socialLink.label));
  })))));
};

var Footer = function Footer(props) {
  if (!props.footerData) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterTemplate, {
    footerData: props.footerData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Footer/Footer.scss":
/*!********************************!*\
  !*** ./src/Footer/Footer.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Footer.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Footer/Footer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Footer.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Footer/Footer.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Footer.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Footer/Footer.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Header/Header.js":
/*!******************************!*\
  !*** ./src/Header/Header.js ***!
  \******************************/
/*! exports provided: HeaderTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTemplate", function() { return HeaderTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_TTT_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/TTT.png */ "./src/images/TTT.png");
/* harmony import */ var _images_TTT_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_TTT_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/Header/Header.js";




var HeaderTemplate = function HeaderTemplate(_ref) {
  var menuItems = _ref.menuItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bg: "dark",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_TTT_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    alt: "TTT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "ml-auto",
    pullRight: true,
    style: {
      float: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, menuItems && menuItems.map(function (menuItem) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
      href: menuItem.linkUrl,
      key: menuItem.linkUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, menuItem.label);
  })));
};

var Header = function Header(_ref2) {
  var headerData = _ref2.headerData;

  if (!headerData || !headerData.menuItems) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTemplate, {
    menuItems: headerData.menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Home/Home.js":
/*!**************************!*\
  !*** ./src/Home/Home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_headerImageNTR_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/headerImageNTR.jpg */ "./src/images/headerImageNTR.jpg");
/* harmony import */ var _images_headerImageNTR_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_headerImageNTR_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Map */ "./src/Home/Map.js");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home.scss */ "./src/Home/Home.scss");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/Home/Home.js";






var HomePageTemplate = function HomePageTemplate(_ref) {
  var homeData = _ref.homeData,
      upcomingMeetup = _ref.upcomingMeetup;

  if (!homeData || !homeData.home) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null);
  }

  var mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnGPiEpydXj18Glw90yONMDzp5XVEW-Ss&v=3.exp&libraries=geometry,drawing,places";
  var presenters = upcomingMeetup && upcomingMeetup.presenters;
  var latitude = upcomingMeetup && parseFloat(upcomingMeetup.location.latitude);
  var longitude = upcomingMeetup && parseFloat(upcomingMeetup.location.longitude);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "header-container  container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
    className: "header-image",
    src: _images_headerImageNTR_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      borderRadius: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: "header-tagline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "header-taglinePart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, homeData.home.line1)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "header-taglinePart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, homeData.home.line2)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "header-taglinePart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, homeData.home.line3)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "header-taglinePart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, homeData.home.line4))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: "upcomingMeetup  section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "upcomingMeetup-container  container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    className: "upcomingMeetup-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, 'Upcoming Events'), upcomingMeetup ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "upcomingMeetup-detail  upcomingMeetup-detail--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "upcomingMeetup-detailLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Date: "), upcomingMeetup.formattedDate), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "upcomingMeetup-detail  upcomingMeetup-detail--location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "upcomingMeetup-detailLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Location: "), upcomingMeetup.location.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "upcomingMeetup-detail  upcomingMeetup-detail--location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "upcomingMeetup-detailLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Contact: "), upcomingMeetup.phoneNumber), upcomingMeetup.presenters.length > 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "upcomingMeetup-presenters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, presenters.map(function (presenter) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "upcomingMeetup-presenter",
      key: presenter.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
      className: "upcomingMeetup-presenterImage",
      src: presenter.headshot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "upcomingMeetup-presenterName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, presenter.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "upcomingMeetup-presenterPresentationTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, presenter.presentationTitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "upcomingMeetup-presenterDescription",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, presenter.text));
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "upcomingMeetup-mapNote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, 'click cheyandi'), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "upcomingMeetup-mapWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isMarkerShown: true,
    googleMapURL: mapUrl,
    loadingElement: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }),
    containerElement: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }),
    mapElement: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }),
    link: upcomingMeetup.location.mapsLink,
    latitude: latitude,
    longitude: longitude,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "upcomingMeetup-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, homeData.home.noMeetups + '     ', "\uD83D\uDE03\uD83D\uDCAA"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: "ctaBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "/pastevents",
    className: "ctaBlock-pattern  ctaBlock-pattern--first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "ctaBlock-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "ctaBlock-ctaHeading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Previous Events"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "ctaBlock-ctaDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\u0C07\u0C02\u0C24\u0C15\u0C41 \u0C2E\u0C41\u0C02\u0C26\u0C41 \u0C1C\u0C30\u0C3F\u0C17\u0C3F\u0C28 \u0C15\u0C3E\u0C30\u0C4D\u0C2F\u0C15\u0C4D\u0C30\u0C2E\u0C3E\u0C32\u0C41"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: 'mailto:lokesh.kanagala@gmail.com',
    className: "ctaBlock-pattern  ctaBlock-pattern--second",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "ctaBlock-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "ctaBlock-ctaHeading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Come Join Us"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "ctaBlock-ctaDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "\u0C13\u0C2C\u0C3E..\u0C12\u0C15\u0C4D\u0C15\u0C21\u0C3F\u0C35\u0C47 \u0C38\u0C39\u0C3E\u0C2F\u0C02 \u0C1A\u0C47\u0C38\u0C4D\u0C24\u0C47 \u0C05\u0C26\u0C3F \u0C09\u0C2A\u0C15\u0C3E\u0C30\u0C02..\u0C2E\u0C28\u0C02 \u0C05\u0C02\u0C26\u0C30\u0C02 \u0C15\u0C32\u0C3F\u0C38\u0C3F \u0C1A\u0C47\u0C38\u0C4D\u0C24\u0C47 \u0C05\u0C26\u0C3F \u0C06 \u0C38\u0C2E\u0C4D\u0C2F\u0C38\u0C4D\u0C2F\u0C15\u0C3F \u0C2A\u0C30\u0C3F\u0C37\u0C4D\u0C15\u0C3E\u0C30\u0C02.")))));
};

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          homeData = _this$props.homeData,
          meetupsData = _this$props.meetupsData;
      var upcomingMeetup = null;

      if (meetupsData && meetupsData.meetups) {
        meetupsData && meetupsData.meetups.every(function (meetup) {
          if (meetup.next) {
            return true;
          } else {
            return false;
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HomePageTemplate, {
        homeData: homeData,
        upcomingMeetup: upcomingMeetup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Home/Home.scss":
/*!****************************!*\
  !*** ./src/Home/Home.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Home/Home.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Home/Home.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/Home/Home.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Home/Map.js":
/*!*************************!*\
  !*** ./src/Home/Map.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_location_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/location.svg */ "./src/images/location.svg");
/* harmony import */ var _images_location_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_location_svg__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/Home/Map.js";




var Map =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Map, _Component);

  function Map() {
    Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    return Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Map).apply(this, arguments));
  }

  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "render",
    value: function render() {
      var _this = this;

      if (!this.props.latitude || !this.props.longitude || !this.props.link) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMap"], {
        defaultOptions: {
          styles: exampleMapStyles
        },
        defaultZoom: 15,
        defaultCenter: {
          lat: this.props.latitude,
          lng: this.props.longitude
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["Marker"], {
        position: {
          lat: this.props.latitude,
          lng: this.props.longitude
        },
        icon: {
          url: _images_location_svg__WEBPACK_IMPORTED_MODULE_7___default.a
        },
        onClick: function onClick() {
          return window.open(_this.props.link);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withGoogleMap"])(Map)));
var exampleMapStyles = [{
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#000000"
  }, {
    lightness: 13
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#144b53"
  }, {
    lightness: 14
  }, {
    weight: 1.4
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#08304b"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#0c4152"
  }, {
    lightness: 5
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b434f"
  }, {
    lightness: 25
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b3d51"
  }, {
    lightness: 16
  }]
}, {
  featureType: "road.local",
  elementType: "geometry",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    color: "#146474"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#021019"
  }]
}];

/***/ }),

/***/ "./src/PastEvents/EventTemplate.js":
/*!*****************************************!*\
  !*** ./src/PastEvents/EventTemplate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _EventTemplate_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventTemplate.scss */ "./src/PastEvents/EventTemplate.scss");
/* harmony import */ var _EventTemplate_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_EventTemplate_scss__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/PastEvents/EventTemplate.js";



var EventTemplate =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EventTemplate, _Component);

  function EventTemplate() {
    Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventTemplate);

    return Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EventTemplate).apply(this, arguments));
  }

  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventTemplate, [{
    key: "render",
    value: function render() {
      if (!this.props || !this.props.event) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null);
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "meetup  ".concat(this.props.className && this.props.className),
        key: this.props.event.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "meetup-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.event.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meetup-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "meetup-metaField  meetup-metaField--date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "meetup-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Date:"), " ", this.props.event.formattedDate), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "meetup-metaField  meetup-metaField--location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "meetup-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Location:"), " ", this.props.event.location.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meetup-presenters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "meetup-presenterText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.event.presenters[0].text)));
    }
  }]);

  return EventTemplate;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EventTemplate);

/***/ }),

/***/ "./src/PastEvents/EventTemplate.scss":
/*!*******************************************!*\
  !*** ./src/PastEvents/EventTemplate.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./EventTemplate.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/PastEvents/EventTemplate.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./EventTemplate.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/PastEvents/EventTemplate.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./EventTemplate.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/PastEvents/EventTemplate.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/PastEvents/PastEvents.js":
/*!**************************************!*\
  !*** ./src/PastEvents/PastEvents.js ***!
  \**************************************/
/*! exports provided: PastEventsTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastEventsTemplate", function() { return PastEventsTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTemplate */ "./src/PastEvents/EventTemplate.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider */ "./src/PastEvents/Slider.js");
var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/PastEvents/PastEvents.js";




var PastEventsTemplate = function PastEventsTemplate(_ref) {
  var events = _ref.events;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "pastMeetups",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container  pastMeetups-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "pastMeetups-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, 'Previous Events'), events && events.map(function (event, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      className: "pastMeetups-meetup",
      event: event,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }))));
};

var PastEvents = function PastEvents(_ref2) {
  var eventsData = _ref2.eventsData;

  if (!eventsData || !eventsData.meetups) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  } // Find all the meetups that occured in the past


  var events = eventsData.meetups.filter(function (meetup) {
    return meetup.next === false;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PastEventsTemplate, {
    events: events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PastEvents);

/***/ }),

/***/ "./src/PastEvents/Slider.js":
/*!**********************************!*\
  !*** ./src/PastEvents/Slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/PastEvents/Slider.js";



var Slider =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider, _React$Component);

  function Slider(props) {
    var _this;

    Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slider);

    _this = Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider).call(this, props));
    _this.swiper = null;
    return _this;
  }

  Object(_Users_lokeshkanagala_projects_team_tarock_trust_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slider, [{
    key: "render",
    value: function render() {
      var params = {
        effect: 'coverflow',
        grabCursor: true,
        slidesPerView: 4,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        height: "50px !important",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_6___default.a, Object.assign({}, params, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetupfirst.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup1.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup2.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup3.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup4.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup5.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup6.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup7.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup8.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup9.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup10.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          height: "300px"
        },
        src: "https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup11.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }))));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/homeResponse.js":
/*!*****************************!*\
  !*** ./src/homeResponse.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  'home': {
    'line1': 'చేయి చేయి కలుపుదాం...చేయూతనిద్దాం',
    'line2': 'అడుగు అడుగు కలసివేసి... ఆనందాలని నింపుదాం',
    'line3': 'మనం చేసే ప్రతీ మంచి పనికి...తారక రాముని పేరు పెడదాం',
    'line4': 'ఈ ఉడత సహాయాలు ప్రజలకి చేస్తూ... రామునికి తోడుగా ఉందాం.',
    'noMeetups': 'No upcoming events or meetups, stay in touch for further updates'
  },
  'pastEventDescription': 'ఇంతకు ముందు జరిపిన ఈవెంట్స్ ని మీరు ఇక్కడ చూడవచ్చు. వీటిలో మీరు పాల్గొనలేదా? పేజీ కింద మీ వివరాలు తెలియజేయండి ..తదుపరి కార్యక్రమము చేసేటప్పుడు మీకు తెలియజేస్తాము.',
  'footer': {
    'socialLinks': [{
      'linkUrl': 'https://twitter.com/TeamTarakTrust',
      'image': 'https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/twitter.svg',
      'label': 'twitter.com'
    }, {
      'linkUrl': 'https://www.facebook.com/TeamTarakTrust/',
      'image': 'https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/facebook.svg',
      'label': 'facebook.com'
    }, {
      'linkUrl': 'https://example.com',
      'image': 'https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/email.svg',
      'label': 'email us'
    }]
  },
  'navbar': {
    'menuItems': [{
      'label': 'Home',
      'linkUrl': '/'
    }, {
      'label': 'Past Events',
      'linkUrl': '/pastevents'
    }, {
      'label': 'About',
      'linkUrl': '/about'
    }]
  },
  'about': {
    'title': 'Team Tarak Trust',
    'image': 'https://s3.amazonaws.com/team-tarak-trust/team-tarak-about-page.jpg',
    'description': 'Team Tarak is a Friendly Fraternity of all NTR fans. The main motto of this group is to help people primarly in the south indian states of Telangana and Andhra Pradesh who are in real need of any kind of help.'
  },
  'gallery': [{
    "image": 'https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture1.png',
    "imageAlt": 'event-1-picture-1'
  }, {
    "image": 'https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture2.png',
    "imageAlt": 'event-1-picture-2'
  }, {
    "image": 'https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture3.png',
    "imageAlt": 'event-1-picture-3'
  }]
};
module.exports = {
  data: data
};

/***/ }),

/***/ "./src/images/TTT.png":
/*!****************************!*\
  !*** ./src/images/TTT.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/TTT.e7e5c9a1.png";

/***/ }),

/***/ "./src/images/about1.png":
/*!*******************************!*\
  !*** ./src/images/about1.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/about1.c5006f30.png";

/***/ }),

/***/ "./src/images/about2.png":
/*!*******************************!*\
  !*** ./src/images/about2.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/about2.bba5909d.png";

/***/ }),

/***/ "./src/images/about3.png":
/*!*******************************!*\
  !*** ./src/images/about3.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/about3.80c1fb27.png";

/***/ }),

/***/ "./src/images/ajay.jpeg":
/*!******************************!*\
  !*** ./src/images/ajay.jpeg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ajay.7c700eb5.jpeg";

/***/ }),

/***/ "./src/images/gowtham.jpeg":
/*!*********************************!*\
  !*** ./src/images/gowtham.jpeg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/gowtham.a04bab58.jpeg";

/***/ }),

/***/ "./src/images/headerImageNTR.jpg":
/*!***************************************!*\
  !*** ./src/images/headerImageNTR.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/headerImageNTR.7f71d969.jpg";

/***/ }),

/***/ "./src/images/headshot.jpeg":
/*!**********************************!*\
  !*** ./src/images/headshot.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/headshot.5752ca18.jpeg";

/***/ }),

/***/ "./src/images/location.svg":
/*!*********************************!*\
  !*** ./src/images/location.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/location.c32322e7.svg";

/***/ }),

/***/ "./src/images/logoImage.png":
/*!**********************************!*\
  !*** ./src/images/logoImage.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logoImage.86c03ceb.png";

/***/ }),

/***/ "./src/images/manoj.jpeg":
/*!*******************************!*\
  !*** ./src/images/manoj.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/manoj.8cf3ef81.jpeg";

/***/ }),

/***/ "./src/images/prasanth.jpeg":
/*!**********************************!*\
  !*** ./src/images/prasanth.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/prasanth.7d2a575c.jpeg";

/***/ }),

/***/ "./src/images/vikram.jpeg":
/*!********************************!*\
  !*** ./src/images/vikram.jpeg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vikram.23dca97a.jpeg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/lokeshkanagala/projects/team-tarock-trust/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/meetupResponse.js":
/*!*******************************!*\
  !*** ./src/meetupResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  'meetups': [{
    'title': 'Sankalp',
    'next': false,
    'date': '24/02/2019',
    'formattedDate': '24 February, 2019',
    'location': {
      'name': 'Sankalp Foundation, LIG, HUDA colony, Chandanagar, Hyderabad.',
      'mapsLink': 'https://www.google.com/maps/place/Sankalp+Foundation/@17.4877646,78.3238201,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x3bcb92ed4875e99b:0x3d29c6d9b018451d!2sSankalp+Foundation!8m2!3d17.4877595!4d78.3260088!3m4!1s0x3bcb92ed4875e99b:0x3d29c6d9b018451d!8m2!3d17.4877595!4d78.3260088',
      'latitude': '17.4877646',
      'longitude': '78.3238201'
    },
    'phoneNumber': '+(91)-6300465845',
    'presenters': [{
      'text': 'Successfully completed our 2nd charity event at Sankalp orphanage, Hyderabad. Donated study materials, beds and contributed for one day food expenses for our brothers and sisters in Sankalp.',
      'headshot': 'https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture1.png',
      'presentationTitle': 'Sankalp'
    }]
  }, {
    'title': 'Help the Elderly',
    'next': false,
    'date': '27/01/2019',
    'formattedDate': '27 January, 2019',
    'location': {
      'name': 'Pragathi Youth Sangham',
      'mapsLink': 'https://www.google.com/maps/place/Stambalagaruvu,+Guntur,+Andhra+Pradesh+522006,+India/@16.3156749,80.4072706,15z',
      'latitude': '16.3156749',
      'longitude': '80.4072706'
    },
    'phoneNumber': '+(91)-6300465845',
    'presenters': [{
      'text': 'On behalf of our team, we donated 25 beds and some everyday groceries to the elderly home taken care by Pragathi Youth Sangham. The elderly home is running from the past 38 years. We are extremely happy for all your generous support and we really had a good time with all those amazing mothers.',
      'headshot': 'https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture1.png',
      'presentationTitle': 'Help the elderly'
    }]
  }]
};
module.exports = {
  data: data
};

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/lokeshkanagala/projects/team-tarock-trust/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/lokeshkanagala/projects/team-tarock-trust/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map