// 先凑活用着，w3那个太难用了

document.getElementById("preview-button").addEventListener("click", function() {
  var code = document.getElementById("code-input").value;
  var preview = document.getElementById("code-preview");
  preview.innerHTML = code;
});

var templateSelect = document.getElementById("templateSelect");

function generateTemplate() {
  var selectedTemplate = templateSelect.value;
  
  var templateContent = "";
  if (selectedTemplate === "template1") {
    templateContent = "<h1>模板1内容</h1>";
  } else if (selectedTemplate === "template2") {
    templateContent = "<h2>模板2内容</h2>";
  } else if (selectedTemplate === "template3") {
    templateContent = "<p>模板3内容</p>";
  }
  
  code.value = templateContent;
}

generateTemplate()
