
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap"
      rel="stylesheet"
    />
    <link
      rel="icon"
      href="../images/syringe-doctor.png"
    />
<!--     <title>Anaesthesia&nbsp;-&nbsp; Peadiatric Doses</title> -->
    <style>
      body {
        margin: 0px;
        padding: 0px;
      }
    </style>
  </head>
  <body>
    <style>
      p {
        font-family: "Noto Sans SC", sans-serif;
      }
      p.drug {
        text-align: right;
      }
      #drugDoses {
        display: grid;
        grid-template-columns: 45% 55%;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        margin-top: 10vh;
      }
      p.dose {
        text-align: left;
      }

      #bio {
        /* border: thin blue solid; */
        position: fixed;
        top: 0px;
        left: 0px;
        height: 8vh;
        width: 100vw;
        margin: 0px;
        background-color: white;
        /* font-weight: 300; */
      }
    </style>

    <div id="bio">
      <p id="weight" onclick="calc()" style="text-align: center">Weight</p>
    </div>
    <div id="drugDoses">
      <div id="drugs">
        <p class="drug">Propofol&nbsp;-&nbsp;</p>
        <p class="drug">Ketamine&nbsp;-&nbsp;</p>
        <!-- <p class="drug">Etomidate&nbsp;-&nbsp;</p> -->
        <p class="drug">Thiopental&nbsp;-&nbsp;</p>
        <p class="drug">Fentanyl&nbsp;-&nbsp;</p>
        <p class="drug">Morphine&nbsp;-&nbsp;</p>
        <p class="drug">Pethidine&nbsp;-&nbsp;</p>
        <p class="drug">Naloxone&nbsp;-&nbsp;</p>
        <p class="drug">Paracetamol&nbsp;-&nbsp;</p>
        <p class="drug">Suxamethonium&nbsp;-&nbsp;</p>
        <p class="drug">Vecuronium&nbsp;-&nbsp;</p>
        <p class="drug">Atropine&nbsp;-&nbsp;</p>
        <p class="drug">Neostigmine&nbsp;-&nbsp;</p>
        <!-- <p class="drug">Ephedrine&nbsp;-&nbsp;</p> -->
        <p class="drug">Lidocaine&nbsp;-&nbsp;</p>
        <p class="drug">Lidocaine + Adrenaline&nbsp;-&nbsp;</p>
        <p class="drug">Bupivacaine&nbsp;-&nbsp;</p>
      </div>
      <div class="doses">
        <p class="dose" id="propofol">0.0</p>
        <p class="dose" id="ketamine">0.0</p>
        <!-- <p class="dose" id="etomidate">0.0</p> -->
        <p class="dose" id="thiopental">0.0</p>
        <p class="dose" id="fentanyl">0.0</p>
        <p class="dose" id="morphine">0.0</p>
        <p class="dose" id="pethidine">0.0</p>
        <p class="dose" id="naloxone">0.0</p>
        <p class="dose" id="pmol">0.0</p>
        <p class="dose" id="sux">0.0</p>
        <p class="dose" id="vec">0.0</p>
        <p class="dose" id="atropine">0.0</p>
        <p class="dose" id="neo">0.0</p>
        <!-- <p class="dose" id="ephedrine">0.0</p> -->
        <p class="dose" id="lidocaine">0.0</p>
        <p class="dose" id="lido_adr">0.0</p>
        <p class="dose" id="bupivacaine">0.0</p>
      </div>
    </div>
    <script>
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
        document.getElementById("pmol").innerHTML = `${(wt * dose).toFixed(
          2
        )}mg`;
      }
      function calc_sux(wt) {
        document.getElementById("sux").innerHTML = `${(wt * 1).toFixed(
          2
        )}mg - ${(wt * 2).toFixed(2)}mg`;
      }
      function calc_vec(wt) {
        document.getElementById("vec").innerHTML = `${(wt * 0.1).toFixed(2)}mg`;
      }
      function calc_atropine(wt) {
        document.getElementById("atropine").innerHTML = `${(wt * 0.02).toFixed(
          2
        )}mg`;
      }
      function calc_neo(wt) {
        document.getElementById("neo").innerHTML = `${(wt * 0.05).toFixed(
          2
        )}mg`;
      }
      // function calc_ephedrine(wt) {

      // }
      function calc_lidocaine(wt) {
        document.getElementById("lidocaine").innerHTML = `${(wt * 3).toFixed(
          2
        )}mg`;
      }
      function calc_lido_adr(wt) {
        document.getElementById("lido_adr").innerHTML = `${(wt * 7).toFixed(
          2
        )}mg`;
      }
      function calc_bupivacaine(wt) {
        document.getElementById("bupivacaine").innerHTML = `${(wt * 2).toFixed(
          2
        )}mg`;
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
    </script>
  </body>
</html>
