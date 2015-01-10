Fluxer
======

[![Build Status](https://travis-ci.org/yuanzong/fluxer.svg?branch=master)](https://travis-ci.org/yuanzong/fluxer)

Build React/Flux app that runs seamlessly on both server side and client side

Usage
-----

``` js
var appName: a string like 'my-app';
var appComponent: MyReactComponentToRender
var data: DataNeededToInitialize appComponent
```

#### server side


``` js
var fluxer = require('fluxer');
var markup = fluxer(appName, appComponent, data)
```

place markup in your favorite template, markup has format like this

``` html
<div id='{appName}-container'>
  React rendered appComponent
  <script type='application/json' id='{appName}-data-script'>
    json serialized data
  </script>
</div>
```

#### client side


``` js
var fluxer = require('fluxer')(document);
fluxer.render(appName, Component);
```

#### with [react-router](https://github.com/rackt/react-router)

```js

// define your routes

var routes = (
  <Route handler={appComponent} path="/">
);


// on server side

var fluxer = require('fluxer');
var Router = require('react-router');

Router.run(routes, url, function(Handler) {
  res.send(fluxer(appName, Handler, data));
});


// on client side

var fluxer = require('fluxer')(document);
var Router = require('react-router');

var initData = fluxer.getInitData(appName);
var mountNode = fluxer.getMountNode(appName);

Router.run(Routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler ...initData />, mountNode);
});
```

# install

With [npm](https://npmjs.org) do:

```
npm install --save fluxer
```

# license

MIT
