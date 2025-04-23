let code = "";
const correctCode = "20720111"; // example date

function appendNumber(num) {
  if (code.length < 8) {
    code += num;
    document.getElementById("codeInput").value = "*".repeat(code.length);
  }
}

function clearInput() {
  code = "";
  document.getElementById("codeInput").value = "";
  document.getElementById("result").textContent = "";
}

function checkCode() {
  if (code === correctCode) {
    document.getElementById("result").textContent = "Yayyyyy You Unlocked it 💖";
    document.getElementById("result").style.color = "#28a745";

    // ✨ Redirect after short delay
    setTimeout(() => {
      window.location.href = "/anniversary/";
    }, 1500);

  } else {
    document.getElementById("result").textContent = "The date you entered is incorrect 😢";
    document.getElementById("result").style.color = "#dc3545";
  }
}
