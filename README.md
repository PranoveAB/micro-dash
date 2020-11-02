# micro-dash

micro-dash offers a subset of lodash of the functionality found in [lodash](https://github.com/lodash/lodash) 

**Note**: This is still work in progress

It is essentially a re-write of [lodash](https://github.com/lodash/lodash) (many things copied as is to keep the functionality intact) in an attempt to create a micro version of lodash that leverage on modern browser capabilities to make it more lightweight. This would also mean lesser/no support for legacy browsers.

## Comparision with Lodash
<table>
  <tr>
    <th>Category</th>
    <th>Method</th>
    <th>Functionality</th>
    <th>micro-dash Bundle size (min + gzip)</th>
    <th>lodash Bundle size (min + gzip)</th>
    <th>micro-dash performance</th>
    <th>lodash performance</th>
  </tr>
  <tr>
    <td>String</td>
    <td>toLowerCase</td>
    <td>Same as lodash</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>String</td>
    <td>toUpperCase</td>
    <td>Same as lodash</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

## Bundle Size Comparision
https://bundlephobia.com/scan-results?packages=lodash.tolower,@micro-ux/micro-dash.tolowercase&sortMode=alphabetic

## Performance Comparision
See performance benchmarking tests & results in https://github.com/micro-ux/micro-dash-performance

## Requirements

- Node version >= 10.13.0

  [webpack 5 requires at least Node.js 10.13.0 (LTS)](https://github.com/webpack/webpack/blob/v5.0.0/package.json#L106-L108)

<h2 align="center">Special Thanks to</h2>

- [lodash](https://github.com/lodash/lodash)
- [You Dont Need Lodash Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)
- [bundlephobia.com](https://bundlephobia.com)
