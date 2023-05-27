var runBtn = document.getElementById('run-btn');
runBtn.addEventListener('click', runCode);

function runCode() {
    var htmlCode = document.getElementById('html-editor').value;
    var cssCode = document.getElementById('css-editor').value;
    var jsCode = document.getElementById('js-editor').value;

    var output = document.getElementById('output').contentWindow.document;
    output.open();
    output.writeln('<style>' + cssCode + '</style>');
    output.writeln(htmlCode);
    output.writeln('<script>' + jsCode + '</script>');
    output.close();
}
