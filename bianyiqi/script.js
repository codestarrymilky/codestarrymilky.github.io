var templateSelect = document.getElementById("templateSelect");
var codeInput = document.getElementById("code-input");
var previewButton = document.getElementById("preview-button");
var codePreview = document.getElementById("code-preview");

function generateTemplate() {
      var selectedTemplate = templateSelect.value;

      if (selectedTemplate === "template1") {
         codeInput.value = "<p>模板1内容</p>/n 1";
      } else if (selectedTemplate === "template2") {
         codeInput.value = "<p>模板2内容</p>";
      } else if (selectedTemplate === "template3") {
         codeInput.value = "<p>模板3内容</p>";
      }

}

function previewCode() {
      var code = codeInput.value;
      codePreview.innerHTML = code;
}

previewCode()
generateTemplate()

templateSelect.addEventListener("change", generateTemplate);
previewButton.addEventListener("click", previewCode);
