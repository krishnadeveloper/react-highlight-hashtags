# react-highlight-hashtags 

[npm-badge]: https://img.shields.io/npm/v/react-media.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-highlight-hashtags

[`react-highlight-hashtags`](https://www.npmjs.com/package/react-highlight-hashtags) is component for React to check hashtags in text.

## Installation

Using npm:

    $ npm install --save react-highlight-hashtags

Then, use as you would anything else:

```js
// using ES modules
import Hashtags from 'react-highlight-hashtags';

```
## Basic usage

Render a `<Hashtags>` component with ot without a `text` prop whose value is a valid text. The `children` prop should be a text.

```jsx
import React from 'react';
import Hashtags from 'react-highlight-hashtags';

class App extends React.Component {
  render() {
    return (
        <Hashtags> Hi, #highlight #hash tags</Hashtags>
    );
  }
}
```

```jsx
import React from 'react';
import Hashtags from 'react-highlight-hashtags';

class App extends React.Component {
  render() {
    return (
        <Hashtags text="Hi, #highlight #hash tags" />
    );
  }
}
```

## props

There is only one optional props.

|prop|description|example|
|---|---|---|
|text|any text with or without #hashtags.|`<Hashtags text="Hi, #highlight #hash tags" />`|
|children|any text with or without #hashtags.|`<Hashtags> Hi, #highlight #hash tags</Hashtags>`|

## style

If you are using bootstrap then mark tag will appear in yellow background.

```css
mark {
	background:none;
	color:rgb(250, 93, 58);
	cursor:pointer;
}
```


## About

`react-highlight-hashtags` is developed and maintained by [Krishna Kumar](https://www.linkedin.com/in/krishnadeveloper/).