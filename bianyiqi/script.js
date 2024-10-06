      var templateSelect = document.getElementById("templateSelect");
      var codeInput = document.getElementById("code-input");
      var previewButton = document.getElementById("preview-button");
      var codePreview = document.getElementById("code-preview");




      function generateTemplate() {
        var selectedTemplate = templateSelect.value;

        if (selectedTemplate === "template1") {
          codeInput.value = "<!DOCTYPE html>/n<html>/n<head>/n<title>1</title>/n<style>/n/n</style>/n</head>/n<body>/n/n</body>/n</html>";
        } else if (selectedTemplate === "template2") {";
        } else if (selectedTemplate === "template2") {
          codeInput.value = "<h2>模板2内容</h2>";
        } else if (selectedTemplate === "template3") {
          codeInput.value = "<p>模板3内容</p>";
        }

        previewCode();
      }

      function previewCode() {
        var code = codeInput.value;
        codePreview.innerHTML = code;
      }


      generateTemplate()
      templateSelect.addEventListener("change", generateTemplate);
      previewButton.addEventListener("click", previewCode);
    

