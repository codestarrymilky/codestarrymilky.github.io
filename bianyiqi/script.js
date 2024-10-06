// 先凑活用着，w3那个太难用了

document.getElementById("preview-button").addEventListener("click", function() {
  var code = document.getElementById("code-input").value;
  var preview = document.getElementById("code-preview");
  preview.innerHTML = code;
});

