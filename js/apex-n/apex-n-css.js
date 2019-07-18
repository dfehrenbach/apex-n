"use strict";

$("#overlay") >
  $("#header-source").css({
    background: "rgba(28, 32, 35, " + headerOpacity + ")"
  });
$("#overlay") >
  $("#combatant-source").css({
    background: "rgba(255, 255, 255, " + partyOpacity + ")"
  });

function constructGradient(job) {
  var colorOne = colorsByClass[job] ? colorsByClass[job].colorOne : classOne;
  var colorTwo = colorsByClass[job] ? colorsByClass[job].colorTwo : classTwo;
  return `background: linear-gradient(to right, ${colorOne}, ${colorTwo})`;
}

function constructStyles(job, dpsGradient) {
  var gradientText = dpsGradient
    ? ` -webkit-background-clip: text!important; -webkit-text-fill-color: transparent;`
    : "";
  var classGradient = constructGradient(job);
  var barStyle = `.job-${job} .bar {${classGradient}!important;}`;
  var dpsStyle = `.job-${job} .dps {${classGradient}!important;${gradientText}}`;
  var statOneStyle = `.job-${job} .statone {color: ${colorsByClass[job].colorOne}!important;}`;
  var statTwoStyle = `.job-${job} .stattwo {color: ${colorsByClass[job].colorTwo}!important;}`;
  var name = `.job-${job} .name {color: ${colorsByClass[job].fflogs}!important;}`;

  return [barStyle, dpsStyle, statOneStyle, statTwoStyle, name].join(" ");
}

if (classColors == true) {
  var gradientText = dpsGradient
    ? ` -webkit-background-clip: text!important; -webkit-text-fill-color: transparent;`
    : "";
  var healers = ["Cnj"];
  var healersJobs = ["Whm", "Sch", "Ast"];
  var tanks = ["Mrd", "Gla"];
  var tanksJobs = ["War", "Pld", "Drk", "Gnb"];
  var dps = ["Pgl", "Rog", "Lnc", "Thm", "Acn", "Arc"];
  var dpsJobs = ["Mnk", "Nin", "Drg", "Sam", "Blm", "Rdm", "Smn", "Brd", "Mch", "Dnc"];

  var allJobs = [].concat(healers, healersJobs, tanks, tanksJobs, dps, dpsJobs);

  var healersStyles = healers.map((job) => constructStyles(job, dpsGradient)).join(" ");
  var healersJobsStyles = healersJobs.map((job) => constructStyles(job, dpsGradient)).join(" ");
  var tanksStyles = tanks.map((job) => constructStyles(job, dpsGradient)).join(" ");
  var tanksJobsStyles = tanksJobs.map((job) => constructStyles(job, dpsGradient)).join(" ");
  var dpsStyles = dps.map((job) => constructStyles(job, dpsGradient)).join(" ");
  var dpsJobsStyles = dpsJobs.map((job) => constructStyles(job, dpsGradient)).join(" ");

  var overlayBar = `#overlay .bar { background: linear-gradient(to right, ${classOne},${classTwo} );}`;
  var overlayDps = `#overlay .dps { background: linear-gradient(to right, ${classOne},${classTwo} );${gradientText};}`;
  var overlayStyles = [overlayBar, overlayDps].join(" ");

  var encounterTime = `.encountertime { color: ${classColorOne}!important;}`;
  var maxHit = `.maxhit { color: ${classColorTwo}!important;}`;

  document.getElementById("classColors").innerHTML = [
    overlayStyles,
    healersStyles,
    healersJobsStyles,
    tanksStyles,
    tanksJobsStyles,
    dpsStyles,
    dpsJobsStyles,
    encounterTime,
    maxHit
  ].join(" ");
}

if (classColors == false && dpsGradient == false) {
  $("#overlay") > $(".dps").css("color", colorDps);
}
if (classColors == false && dpsGradient == true) {
  var gradientText = {
    background: "linear-gradient(to right, " + colorOne + "," + colorTwo + ")",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  };
  var gradientBar = {
    background: "linear-gradient(to right, " + colorOne + ", " + colorTwo + ")"
  };
  $("#overlay") > $(".dps").css(gradientText);
  $("#overlay") > $(".heal").css("color", colorOne);
  $("#overlay") > $(".overheal").css("color", colorTwo);
  $("#overlay") > $(".encountertime").css("color", colorOne);
  $("#overlay") > $(".maxhit").css("color", colorTwo);
  $("#overlay") >
    $(".bar").css({
      gradientBar,
      "background-size": "335px"
    });
}
if (overrideStats == true) {
  $(".statone").addClass("override");
  $(".stattwo").addClass("override");
  document.getElementById("classColors").innerHTML +=
    ".statone.override, .stattwo.override { color: " + overrideColor + "!important;}";
}
