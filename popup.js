document.addEventListener("DOMContentLoaded", () => {
    const dice1 = document.getElementById("1 dice");
    const dice_1d100 = document.getElementById("1d100");
  
    dice1.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "1d6" });
      });
    });

    dice_1d100.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { action: "1d100" });
        });
      });
  });