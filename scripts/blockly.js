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
            "type": "event_hook"
          },
          {
            "kind": "block",
            "type": "event_list"
          }
        ]
      }
    ]
  }

  Blockly.Blocks["event_hook"] = {
      init: function() {
        this.setOutput(false);
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.appendValueInput('EVENT').setCheck("String").appendField('On');
        this.appendStatementInput('DO').appendField('run');
      }
  };

  Blockly.Blocks["event_list"] = {
      init: function() {
        this.setOutput(true);
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.appendDummyInput().appendField("Event").appendField(new Blockly.FieldDropdown([
          ['Enable', 'EventList.ONENABLE'],
          ['Disable', 'EventList.ONDISABLE'],
          ['Attack', 'EventList.EVENTATTACK'],
          ['Render2D', 'EventList.EVENTRENDER2D'],
          ['Render3D', 'EventList.EVENTRENDER3D'],
          ['ChatOutput', 'EventList.EVENTCHATOUTPUT'],
          ['Collide', 'EventList.EVENTCOLLIDE'],
          ['Death', 'EventList.EVENTDEATH'],
          ['Jump', 'EventList.EVENTJUMP'],
          ['KeyPress', 'EventList.EVENTKEYPRESS'],
          ['Mouse', 'EventList.EVENTMOUSE'],
          ['Move', 'EventList.EVENTMOVE'],
          ['PostMotion', 'EventList.EVENTPOSTMOTION'],
          ['PreMotion', 'EventList.EVENTPREMOTION'],
          ['RecievePacket', 'EventList.EVENTRECIEVEPACKET'],
          ['SendPacket', 'EventList.EVENTSENDPACKET'],
          ['Slowdown', 'EventList.EVENTSLOWDOWN'],
          ['Step', 'EventList.EVENTSTEP'],
          ['Teleport', 'EventList.EVENTTELEPORT'],
          ['Update', 'EventList.EVENTUPDATE'],
          ['WorldChange', 'EventList.EVENTWORLDCHANGE']
      ]), 'EVENTNAME');
      }
  }

  Blockly.JavaScript["event_hook"] = function(block) {
    eventCode = Blockly.JavaScript.statementToCode(block, 'EVENT', Blockly.JavaScript.ORDER_ATOMIC);
    func = Blockly.JavaScript.statementToCode(block, 'DO');

    var code = "module.hook(" + eventCode + ", function (event) {\n" + func + "});"

    return code;
  };

  Blockly.JavaScript["event_list"] = function(block) {
    var code = block.getFieldValue('EVENTNAME');

    return code;
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
