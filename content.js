chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "1d6") {
      // ここに拡張機能の動作を実装する
      x = getRandomInt(1, 7);
      alert(x);
    } else if (request.action === "1d100") {
      // ここに拡張機能の動作を実装する
      x = getRandomInt(1, 101);
      alert(x);
    }
  });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
  