
document.addEventListener('DOMContentLoaded', function () {  
    const codeEditor = document.getElementById('codeEditor');  
    const highlightedCodeDiv = document.getElementById('highlightedCode');  
    codeEditor.addEventListener('input', function () {  
        highlightCode();  
    });  
  
    function highlightCode() {  
        const code = codeEditor.value;  
        const tempDiv = document.createElement('div');  
        tempDiv.className = 'language-' + codeEditor.getAttribute('data-language'); // 设置语言类  
        tempDiv.textContent = code; 
        Prism.highlightElement(tempDiv);
        highlightedCodeDiv.innerHTML = tempDiv.innerHTML;  
    }  
  
    function previewCode() {  
        highlightCode();  

        const previewFrame = document.getElementById('previewFrame');  
        const highlightedCode = highlightedCodeDiv.innerHTML;  
  
        previewFrame.contentDocument.open();  
        previewFrame.contentDocument.write('');  
        previewFrame.contentDocument.close();  
  
        previewFrame.contentDocument.open();  
        previewFrame.contentDocument.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>预览</title><style>/* 这里可以包含一些基本的样式，比如body的margin和padding */</style></head><body>');  

        previewFrame.contentDocument.write(highlightedCode);  
        previewFrame.contentDocument.write('</body></html>');  
        previewFrame.contentDocument.close();  
    }  

   
    highlightCode();  
});

