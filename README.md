Fluxer
======

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
    html escaped, json.stringify(data)
  </script>
</div>
```

#### client side


``` js
var fluxer = require('fluxer')(document);
var appCtx = fluxer(appName, appComponent)
```

appCtx has format like this

``` js
{
  app: ReactElement created from appComponent and data,
  data: original data object from server side
  mountNode: dom element to mount app
}
```

typically you will simply call

``` js
React.render(appCtx.app, appCtx.mountNode);
```

# install

With [npm](https://npmjs.org) do:

```
npm install --save fluxer
```

# license

MIT
