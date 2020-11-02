# micro-dash

micro-dash offers a subset of lodash of the functionality found in [lodash](https://github.com/lodash/lodash) 

**Note**: This is still work in progress

It is essentially a re-write of [lodash](https://github.com/lodash/lodash) (many things copied as is to keep the functionality intact) in an attempt to create a micro version of lodash that leverage on modern browser capabilities to make it more lightweight. This would also mean lesser/no support for legacy browsers.


## Methods
<table>
  <tr>
    <th>Category</th>
    <th>Method</th>
    <th>Npm module</th>
  </tr>
  <tr>
    <td>String</td>
    <td>toLowerCase</td>
    <td>
      <a href="https://www.npmjs.com/package/@micro-ux/micro-dash.tolowercase" target="_blank">@micro-ux/micro-dash.tolowercase</a>
    </td>
  </tr>
  <tr>
    <td>String</td>
    <td>toUpperCase</td>
    <td>
      <a href="https://www.npmjs.com/package/@micro-ux/micro-dash.touppercase" target="_blank">@micro-ux/micro-dash.touppercase</a>
    </td>
  </tr>
</table>

## Comparision with Lodash
<table>
  <tr>
    <th>Category</th>
    <th>Method</th>
    <th>Functionality</th>
    <th>Bundle size (min + gzip)</th>
    <th>Performance</th>
  </tr>
  <tr>
    <td>String</td>
    <td>toLowerCase</td>
    <td>Same as lodash</td>
    <td>
      <b>micro-dash</b>: <a href="https://bundlephobia.com/result?p=@micro-ux/micro-dash.tolowercase" target="_blank">426B</a><br />
      <b>lodash</b>: <a href="https://bundlephobia.com/result?p=lodash.tolower" target="_blank">447B</a>
    </td>
    <td>
      <a href="https://github.com/micro-ux/micro-dash-performance" target="_blank">Performance Benchmarking</a>
    </td>
  </tr>
  <tr>
    <td>String</td>
    <td>toUpperCase</td>
    <td>Same as lodash</td>
    <td>
      <b>micro-dash</b>: <a href="https://bundlephobia.com/result?p=@micro-ux/micro-dash.touppercase" target="_blank">426B</a><br />
      <b>lodash</b>: <a href="https://bundlephobia.com/result?p=lodash.toupper" target="_blank">440B</a>
    </td>
    <td>
      <a href="https://github.com/micro-ux/micro-dash-performance" target="_blank">Performance Benchmarking</a>
    </td>
  </tr>
</table>

## Requirements

- Node version >= 10.13.0

  [webpack 5 requires at least Node.js 10.13.0 (LTS)](https://github.com/webpack/webpack/blob/v5.0.0/package.json#L106-L108)

<h2 align="center">Special Thanks to</h2>

- [lodash](https://github.com/lodash/lodash)
- [You Dont Need Lodash Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)
- [bundlephobia.com](https://bundlephobia.com)
