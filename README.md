# reveal.js-jump-plugin

Plugin for reveal.js that allows to switch between slides by typing the slide number followed by `enter`.

The slide number configuration was changed in reveal.js version `3.1.0` and again in `3.2.0`. The current version works with `3.2.0` in all possible slide number configurations. For `3.1.0` change

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

Add the folder named `jump` into your reveal.js plugin folder and include the following line in your dependencies list in the reveal.js initialization:

```
// Jump plugin
{ src: 'plugin/jump/jump.js', async: true }
```

## Usage

In order to switch to another slide simply type the number of that slide and press enter afterwards, e. g.: to jump to slide 12 press `1` and `2` followed by `enter`.

To change to a vertical slide type in the number of the horizontal slide first followed by a `-` and then the number of the vertical slide and press enter, e. g.: `3-2` followed by `enter` would jump to the second vertical slide of the third horizontal slide (`3-1` would be the third horizontal slide itself).

To jump to the first or last slide in the current vertical stack press `shift` and `page up` simultaneously for reaching the first or likewise `page down` for reaching the last slide in the current vertical stack.
