const ctcInput = document.getElementById("ctc");
const calculateBtn = document.getElementById("calculate");

const basicEl = document.getElementById("basic");
const hraEl = document.getElementById("hra");
const pfEl = document.getElementById("pf");
const taxEl = document.getElementById("tax");
const inhandEl = document.getElementById("inhand");

calculateBtn.addEventListener("click", () => {
  const ctc = Number(ctcInput.value);
  if (!ctc) return;

  const basic = ctc * 0.4;
  const hra = basic * 0.4;
  const pf = basic * 0.12;
  const tax = ctc * 0.1;

  const monthlyInHand = (ctc - pf - tax) / 12;

  basicEl.innerText = Math.round(basic);
  hraEl.innerText = Math.round(hra);
  pfEl.innerText = Math.round(pf);
  taxEl.innerText = Math.round(tax);
  inhandEl.innerText = Math.round(monthlyInHand);
});
