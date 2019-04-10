# @sweetlikepete/imagemin

[![npm version](https://badge.fury.io/js/%40sweetlikepete%2Fimagemin.svg)](https://badge.fury.io/js/%40sweetlikepete%2Fimagemin)

This package provides a shared config for imagemin and several of its plugins.

## Install

```
$ npm install imagemin
```
## Usage

```js
import imagemin from "@sweetlikepete/imagemin";

(async () => {

  const files = await imagemin(['images/*.{jpg,png}'], 'build/images');

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]

})();
```

## API

### imagemin(input, [output], [options])

Returns `Promise<Object[]>` in the format `{data: Buffer, path: string}`.

#### input

Type: `string[]`

Files to be optimized. See supported `minimatch` [patterns](https://github.com/isaacs/minimatch#usage).

#### output

Type: `string`

## Maintenance

You can run tests with `npm test`.
