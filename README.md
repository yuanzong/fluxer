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
```

fluxer has the following interface

``` js
getMountNode(appName): dom element to mount app
getInitData(appName): original data object from server side
render(appName, Component): recreate the app
```

# install

With [npm](https://npmjs.org) do:

```
npm install --save fluxer
```

# license

MIT
