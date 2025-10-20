const tips = [
  "Never share your OTP or passwords with anyone!",
  "Use a strong password with letters, numbers, and symbols.",
  "Think before you click suspicious links.",
  "Turn on 2-Step Verification for all your accounts.",
  "Don't post personal information publicly on social media.",
  "Report cyberbullying to a trusted adult or teacher.",
  "Avoid downloading apps from unknown sources.",
  "Update your phone and apps regularly for security."
];

function showDailyTip() {
  const tipElement = document.getElementById("tip");
  if (tipElement) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.textContent = randomTip;
  }
}

document.addEventListener("DOMContentLoaded", showDailyTip);
