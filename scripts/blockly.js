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
          {
            "kind": "block",
            "type": "controls_for"
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
          }
        ]
      },
      {
        "kind": "category",
        "name": "Variables",
        "contents": [
          {
            "kind": "block",
            "type": "logic_boolean"
          },
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
      },
      {
        "kind": "category",
        "name": "Events",
        "contents": [
          {
            "kind": "block",
            "type": "event_onenable"
          }
        ]
      }
    ]
  }

  Blockly.Blocks["event_onenable"] = {
      init: function() {
        this.setOutput(false);
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.appendField('OnEnable');
        this.appendStatementInput('DO').appendField('do');
      }
  };

  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox
  });

  function updateCode(event) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('codeOut').innerText = code;
    //alert(code);
  }
  workspace.addChangeListener(updateCode);

})();
