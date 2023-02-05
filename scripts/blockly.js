(function() {

  const toolbox = {
    'kind': 'categoryToolbox',
    "contents": [
      {
        "kind": "category",
        "name": "Control",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind": "block",
            "type": "controls_repeat_ext"
          },
        ]
      },
      {
        "kind": "category",
        "name": "Logic",
        "contents": [
          {
            "kind": "block",
            "type": "logic_compare"
          },
          {
            "kind": "block",
            "type": "logic_operation"
          },
          {
            "kind": "block",
            "type": "logic_boolean"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Variables",
        "contents": [
          {
            "kind": "block",
            "type": "math_number",
            "fields": {"NUM": 123}
          },
          {
            "kind": "block",
            "type": "text"
          }
        ]
      }
    ]
  }

  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox
  });

  function updateCode(event) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('codeOut').value = code;
    alert('test');
  }
  workspace.addChangeListener(updateCode);

})();
