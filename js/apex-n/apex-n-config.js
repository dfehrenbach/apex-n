/* If you have basic CSS knowledge, I strongly suggest marking
/* out the contents of this file and editing the "apex-n.css" file directly

/* I recommend https://uigradients.com/ for color combo inspiration

/* ----- GENERAL -----  */

/* Change to display your name */
var yourname = "YOU";
/* Change header bg opacity / Default = 0.87 / 0=transparent / 1=opaque */
var headerOpacity = "0.87";
/* Change party bg opacity / Default = 0.77 / 0=transparent / 1=opaque */
var partyOpacity = "0.87";
/* Change to true to enable class colors.*/
var classColors = true;
/* Set to true if you don't want to include Limit Breaks in max hit */
var ignoreLimitBreak = true;
/* Set to true if you want to include Limit Breaks in the party list */
var partyLimitBreak = true;
/* Set to false if you want change the dps number to a single color instead of gradient */
var dpsGradient = true;

/* ----- IF CLASS COLORS ARE SET TO FALSE -----  */

/* First color / Default = #2994f7 */
var colorOne = "#2994f7";
/* Second color / Default = #eb318c */
var colorTwo = "#eb318c";
/* Dps color if gradients set to false / Default = #2994f7 */
var colorDps = "#2994f7";

/* ----- IF CLASS COLORS ARE SET TO TRUE -----  */

/* First color - changes "time" - Default: #928DAB */
var classColorOne = "#928DAB";
/* Second color - changes "maxhit" - Default #928DAB */
var classColorTwo = "#928DAB";
/* By default the two displayed stats will have the same colors as your class gradients
/* You can override it here, and set them to a uniform color. true /false */
var overrideStats = false;
var overrideColor = "#1c2023";
/* Tank colors default 396AFC and 36D1DC*/
/* Healer colors default 00B09B and 96C93D*/
/* Dps colors default 4B134F*/
/* Generic colors for pets and chocobos */
var classOne = "#222528";
var classTwo = "#928DAB";
var classDps = "#222528";

var colorsByClass = {
  Whm: { colorOne: "#fff0dc", colorTwo: "#fcffdb", fflogs: "#fff0dc" },
  Cnj: { colorOne: "#fff0dc", colorTwo: "#fcffdb", fflogs: "#fff0dc" },
  Sch: { colorOne: "#8657ff", colorTwo: "#ffffff", fflogs: "#8657ff" },
  Ast: { colorOne: "#ffe74a", colorTwo: "#fcffdb", fflogs: "#ffe74a" },
  War: { colorOne: "#c31812", colorTwo: "#c37012", fflogs: "#c31812" },
  Mrd: { colorOne: "#c31812", colorTwo: "#c37012", fflogs: "#c31812" },
  Pld: { colorOne: "#a3cfe6", colorTwo: "#a3e6da", fflogs: "#a3cfe6" },
  Gla: { colorOne: "#a3cfe6", colorTwo: "#a3e6da", fflogs: "#a3cfe6" },
  Drk: { colorOne: "#d126cc", colorTwo: "#d12678", fflogs: "#d126cc" },
  Gnb: { colorOne: "#b69325", colorTwo: "#b3aa99", fflogs: "#b69325" },
  Mnk: { colorOne: "#d69c00", colorTwo: "#ffce32", fflogs: "#d69c00" },
  Pgl: { colorOne: "#d69c00", colorTwo: "#ffce32", fflogs: "#d69c00" },
  Nin: { colorOne: "#af1964", colorTwo: "#e14b96", fflogs: "#af1964" },
  Rog: { colorOne: "#af1964", colorTwo: "#e14b96", fflogs: "#af1964" },
  Drg: { colorOne: "#4164a9", colorTwo: "#4099a8", fflogs: "#4164a9" },
  Lnc: { colorOne: "#4164a9", colorTwo: "#4099a8", fflogs: "#4164a9" },
  Sam: { colorOne: "#cf6d04", colorTwo: "#ff9f36", fflogs: "#cf6d04" },
  Blm: { colorOne: "#a579d6", colorTwo: "#787cd6", fflogs: "#a579d6" },
  Thm: { colorOne: "#a579d6", colorTwo: "#787cd6", fflogs: "#a579d6" },
  Rdm: { colorOne: "#e87b7b", colorTwo: "#ffadad", fflogs: "#e87b7b" },
  Smn: { colorOne: "#209b78", colorTwo: "#20829a", fflogs: "#209b78" },
  Acn: { colorOne: "#209b78", colorTwo: "#20829a", fflogs: "#209b78" },
  Brd: { colorOne: "#91ba5e", colorTwo: "#c3ec90", fflogs: "#91ba5e" },
  Arc: { colorOne: "#91ba5e", colorTwo: "#c3ec90", fflogs: "#91ba5e" },
  Mch: { colorOne: "#6ee1d6", colorTwo: "#a0ffff", fflogs: "#6ee1d6" },
  Dnc: { colorOne: "#f8b4af", colorTwo: "#fce0de", fflogs: "#f8b4af" }
};
