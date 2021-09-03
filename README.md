# reveal.js-jump-plugin

Plugin for reveal.js that allows to switch between slides by typing the slide number followed by enter.

The slide number configuration was changed in reveal.js version 3.1.0 and again in 3.2.0. The current version works with 3.2.0 in all possible slide number configurations. For 3.1.0 change

```
...
var isFlat = (typeof Reveal.getConfig().slideNumber === "string") ? Reveal.getConfig().slideNumber.indexOf('c') !== -1 : false;
...
```

to

```
...
var isFlat = Reveal.getConfig().slideNumber === true || (typeof Reveal.getConfig().slideNumber === "string") ? Reveal.getConfig().slideNumber.indexOf('c') !== -1 : false;
...
```

## Setup

Add the jump folder into your reveal.js plugin folder and include the following line in your dependencies list of the reveal.js initialization:

```
// Jump plugin
{ src: 'plugin/jump/jump.js', async: true }
```

## Usage

To switch to another slide simply type the number of the slide and afterwards press enter, e. g.: `12` followed by `enter` jumps to the 13th horizontal slide (zero-based numbering).

To change to a vertical slide type in the number for the horizontal slide first followed by a `-` and afterwards the number of the vertical slide and press enter, e. g.: `1-2` followed by `enter` would jump to the second vertical slide of the second horizontal slide (`1-0` would be the second horizontal slide itself).

To jump to the first or last slide in the current vertical stack press `shift` followed by `page up` for the first or `page down` for the last vertical slide in the current vertical stack.
