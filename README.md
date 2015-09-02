# reveal.js-jump-plugin

Plugin for reveal.js that allows to switch between slides by typing the slide number followed by enter.

The slide number configuration was changed in reveal.js version 3.1.0 to be flat by default and to start at one. Therefore this plugin isn't visually compatible with the default configuration (`slideNumber: true`). You need to set the option to something like `slideNumber: 'h - v'` (this was previously the default). Support for the current default will be added in the future.

## Setup

Add the jump folder into your reveal.js plugin folder and include the following line in your dependencies list of the reveal.js initialization:

```
// Jump plugin
{ src: 'plugin/jump/jump.js', async: true }
```

## Usage

To switch to another slide simply type the number of the slide and afterwards press enter, e. g.: `12` followed by `enter` jumps to the 13th horizontal slide (zero-based numbering).

To change to a vertical slide type in the number for the horizontal slide first followed by a `-` and afterwards the number of the vertical slide and press enter, e. g.: `1-2` followed by `enter` would jump to the second vertical slide of the second horizontal slide (`1-0` would be the second horizontal slide itself).
