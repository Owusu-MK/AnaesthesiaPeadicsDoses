"use strict";

function askWeight() {
  let ans = Number(prompt("Input weight:"));
  while (isNaN(ans)) {
    ans = askWeight();
  }
  return ans;
}
function calc_propofol(wt) {
  document.getElementById("propofol").innerHTML = `${(wt * 2).toFixed(
    2
  )}mg - ${(wt * 4).toFixed(2)}mg`;
}
function calc_ketamine(wt) {
  document.getElementById("ketamine").innerHTML = `${(wt * 1).toFixed(
    2
  )}mg - ${(wt * 2).toFixed(2)}mg`;
}
// function calc_etomidate(wt) {
//   document.getElementById("etomidate").innerHTML = `${}`;
// }
function calc_thiopental(wt) {
  document.getElementById("thiopental").innerHTML = `${(wt * 5).toFixed(
    2
  )}mg - ${(wt * 7).toFixed(2)}mg`;
}
function calc_fentanyl(wt) {
  document.getElementById("fentanyl").innerHTML = `${(wt * 1).toFixed(
    2
  )}&micro;g - ${(wt * 2).toFixed(2)}&micro;g`;
}
function calc_morphine(wt) {
  document.getElementById("morphine").innerHTML = `${(wt * 0.05).toFixed(
    2
  )}mg - ${(wt * 0.1).toFixed(2)}mg`;
}
function calc_pethidine(wt) {
  document.getElementById("pethidine").innerHTML = `${(wt * 0.5).toFixed(
    2
  )}mg - ${(wt * 1).toFixed(2)}mg`;
}
function calc_naloxone(wt) {
  document.getElementById("naloxone").innerHTML = `${(wt * 5).toFixed(
    2
  )}&micro;g - ${(wt * 10).toFixed(2)}&micro;g`;
}
function calc_pmol(wt) {
  let dose = wt < 10 ? 7.5 : 15;
  document.getElementById("pmol").innerHTML = `${(wt * dose).toFixed(2)}mg`;
}
function calc_sux(wt) {
  document.getElementById("sux").innerHTML = `${(wt * 1).toFixed(2)}mg - ${(
    wt * 2
  ).toFixed(2)}mg`;
}
function calc_vec(wt) {
  document.getElementById("vec").innerHTML = `${(wt * 0.1).toFixed(2)}mg`;
}
function calc_atropine(wt) {
  document.getElementById("atropine").innerHTML = `${(wt * 0.02).toFixed(2)}mg`;
}
function calc_neo(wt) {
  document.getElementById("neo").innerHTML = `${(wt * 0.05).toFixed(2)}mg`;
}
// function calc_ephedrine(wt) {

// }
function calc_lidocaine(wt) {
  document.getElementById("lidocaine").innerHTML = `${(wt * 3).toFixed(2)}mg`;
}
function calc_lido_adr(wt) {
  document.getElementById("lido_adr").innerHTML = `${(wt * 7).toFixed(2)}mg`;
}
function calc_bupivacaine(wt) {
  document.getElementById("bupivacaine").innerHTML = `${(wt * 2).toFixed(2)}mg`;
}
function calc() {
  let n = askWeight();
  document.getElementById("weight").innerHTML = `Weight: ${n}kg`;

  calc_propofol(n);
  calc_ketamine(n);
  // calc_etomidate(n);
  calc_thiopental(n);
  calc_fentanyl(n);
  calc_morphine(n);
  calc_pethidine(n);
  calc_naloxone(n);
  calc_pmol(n);
  calc_sux(n);
  calc_vec(n);
  calc_atropine(n);
  calc_neo(n);
  // calc_ephedrine(n);
  calc_lidocaine(n);
  calc_lido_adr(n);
  calc_bupivacaine(n);
}
