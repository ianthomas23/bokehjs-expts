# webpack-bokehjs

Builds on webpack-simple to draw a BokehJS plot.

1. To build and run:
```
npm install
npx webpack-dev-server
```
2. Open http://localhost:4500/ in web browser.

If you look in the browser console you will see that the code fails because the `data_source._select` is undefined. This is set in `ColumnarDataSource.initialize()` (https://github.com/bokeh/bokeh/blob/b0a6b984732421ba4c3766511ce5fb6aa862117b/bokehjs/src/lib/models/sources/columnar_data_source.ts#L75) which is called in the base class `HasProps` constructor, here before it has been allocated.

As a workaround, uncomment line 8 of `index.ts` to re-`initialize` the data source. Now the plot is displayed, points can be added using the button, and the width of the plot can be changed by changing the width of the browser window. But the plot cannot be zoomed as `DataRange1d` has some member variables that are assigned in `DataRange1d.initialize()` and hence are undefined when read.

Note that unlike the `webpack-simple` example, we cannot avoid the problem by targetting `ES2018` or `ES2020`.