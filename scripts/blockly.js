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
          },
          {
            "kind": "category",
            "name": "Variables",
            "custom": "VARIABLE"
          },
        ]
      }
    ]
  }

  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox
  });

  /*
  var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');

  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(demoWorkspace);

    console.log('resize');
  };
  window.addEventListener('resize', onresize, false);
  onresize();*/

})();
