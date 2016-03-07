# Local scroll

This plugin adds animated scrolling to local links. jQuery is required.

## Usage

```
npm install --save local-scroll
```

```js
import LocalScroll from 'local-scroll';
new LocalScroll({
  // Options
  selector: "a[href^=#]"
});
```

## Options

```js
{
  selector: "[data-scroll]",  // Choose which items get triggered
  offset: 0,                  // Offset scroll in pixels
  duration: 400               // Animation duration
}
```
