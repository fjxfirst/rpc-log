chrome.devtools.panels.create(
  "req-log",
  "icon.png",
  "panel.html",
  function (panel) {
    console.log("Devtools面板创建成功");
  }
);
