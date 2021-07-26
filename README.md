<h1 align="center">
  <img src="https://img.ideal-postcodes.co.uk/UK%20Clear%20Addressing%20Logo@3x.png" alt="UK Clear Addressing Bundled">
</h1>

> JavaScript browser bundles for uk-clear-addressing

[![npm version](https://badge.fury.io/js/%40ideal-postcodes%2Fuk-clear-addressing-bundled.svg)](https://badge.fury.io/js/%40ideal-postcodes%2Fuk-clear-addressing-bundled)
[![jscdn](https://badgen.net/jsdelivr/v/npm/@ideal-postcodes/uk-clear-addressing-bundled)](https://cdn.jsdelivr.net/npm/@ideal-postcodes/uk-clear-addressing-bundled/dist/)
![Release](https://github.com/ideal-postcodes/uk-clear-addressing-bundled/workflows/Release/badge.svg)

This package exports polyfilled, minified copies of `uk-clear-addressing` in various formats available on npm and various JavaScript CDNs. It can be readily [dropped in](#usage) on a page.

This package is a transpiled copy of [`uk-clear-addressing`](https://github.com/ideal-postcodes/uk-clear-addressing-bundled).

## Download

Latest and pinned versions of each bundle can be downloaded from [jsdelivr.com](https://www.jsdelivr.com).

### Latest Versions

- [umd.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/uk-clear-addressing-bundled/dist/umd.min.js)
- [esm.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/uk-clear-addressing-bundled/dist/esm.min.js)

## Documentation

### Usage

#### UMD

```html
<script src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/uk-clear-addressing-bundled@1"></script>

<script>
  var Address = IdealPostcodes.default.Address;
  let address = new Address({
    postcode: "WS11 5SB",
    post_town: "CANNOCK",
    thoroughfare: "Pye Green Road",
    building_name: "Flower House 189A",
    organisation_name: "S D Alcott Florists",
  });
</script>
```

#### ES Module

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/uk-clear-addressing-bundled@1/dist/esm.min.js"
></script>

<script type="module">
  import IdealPostcodes from "https://cdn.jsdelivr.net/npm/@ideal-postcodes/uk-clear-addressing-bundled/dist/esm.min.js";
  let address = new IdealPostcodes.Address({
    postcode: "WS11 5SB",
    post_town: "CANNOCK",
    thoroughfare: "Pye Green Road",
    building_name: "Flower House 189A",
    organisation_name: "S D Alcott Florists",
  });
</script>
```

## Licence

MIT
