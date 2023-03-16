# Menscript - Tutorial

## Step 1. Creating a script

First, create a javascript file in the .minecraft/Menace/scripts folder. Then you will want to initiate the script.

{% code overflow="wrap" lineNumbers="true" %}
```javascript
var scriptmanager = new ScriptManager("ScriptName", "1.0"/*<- version*/, ["Author1", "Author2"]);
var script = scriptmanager.getScript();
```
{% endcode %}

## Step 2. Register a module/gui element

Next, register a module in the script.

{% code overflow="wrap" lineNumbers="true" %}
```javascript
var module = script.registerModule("ModuleName", "Module Description");
```
{% endcode %}

## Step 3. Register any settings you would like

Register settings with the add settings function

{% code overflow="wrap" lineNumbers="true" %}
```javascript
var booleanSetting = module.addBooleanSetting("Name", visible, currValue);
var sliderSetting = module.addSliderSetting("Name", visible, min, max, currAmt, intOnly);
var listSetting = module.addListSetting("Name", visible, "currValue", ["Option1", "Option2"]);
```
{% endcode %}

## Step 4. Hook an event

Hook your code to an event so it gets executed. You will need an event for this. [events.md](api/events.md "mention")

<pre class="language-javascript" data-overflow="wrap" data-line-numbers><code class="lang-javascript"><strong>module.hook(EventList.ONENABLE, function (event) {
</strong><strong>    //Your code goes here
</strong>});
</code></pre>

## Step 5. Load your script

After you have coded something for your script you can load it by running the command **.script reload** in game.
