require.config({
    paths: {
        vs: "./node_modules/monaco-editor/min/vs"
    }
})

require(["vs/editor/editor.main"], function(){
    const editorDiv = document.querySelector('.editorDiv');
    const jsString = `
    const value = (function(){
        return{
            key1 : 'value',
            key2 : 'value1'
        }
    }());
    value1 = {
        key1 : 'value',
        key2 : 'value1'
    };
    var value2 = {
        key1 : 'value',
        key2 : 'value1'
    }`
    const editorOptions = {
        language : 'javascript'
    }
    const compilerOptions = {
        noImplicitUseStrict : true
    }
    const jsModel = monaco.editor.createModel(jsString,"javascript");
    const jsContainer = monaco.editor.create(editorDiv, editorOptions);
    jsContainer.setModel(jsModel);

    /**
     * This code snippet is written based on
     * https://github.com/Microsoft/monaco-editor/issues/989#issuecomment-411027528
     */
    const jsOptions = monaco.languages.typescript.javascriptDefaults.getCompilerOptions();
    for(let option in compilerOptions){
        jsOptions[option] = compilerOptions[option];
    }
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions(jsOptions);
})