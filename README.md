# Simple Cookie Consent

[![npm version][npm-badge-version]][npm-link]

[npm-badge-version]: https://img.shields.io/npm/v/simple-cookie-consent.svg
[npm-link]: https://www.npmjs.com/package/simple-cookie-consent

A basic cookie consent bar to help comply with the EU GDPR regulation. Compatible with all modern browsers and IE10+.

## Installation

### Yarn

```sh
yarn add simple-cookie-consent --dev
```

### NPM

```sh
npm install simple-cookie-consent --save --dev
```

## Usage

The library relies on Javascript to build the DOM/functionality and SCSS for basic styling.

### 1. Javascript

```js
import SimpleCookieConsent from 'simple-cookie-consent';

new SimpleCookieConsent();
```

### 2. SCSS

```scss
@import '../../node_modules/simple-cookie-consent/dist/simple-cookie-consent.min.css';
```

## Parameters
### `(policyText, barClassName, additionalLink, additionalLinkText)`

<table>
    <tr>
        <th>parameter</th>
        <th>description</th>
    </tr>
    <tr>
        <th><code>policyText</code></th>
        <td>
            Type: <code>string</code><br>
            Default: <code>'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.'</code><br><br>
            The message to explain what the website cookie policy is.
        </td>
    </tr>
    <tr>
        <th><code>barClassName</code></th>
        <td>
            Type: <code>string</code><br>
            Default: <code>'c-simple-cookie-consent'</code><br><br>
            The class name of the component. <em>Note</em>, the CSS references the default parameter. If altering, you'll need to write your CSS from scratch.
        </td>
    </tr>
    <tr>
        <th><code>additionalLink</code></th>
        <td>
            Type: <code>string</code><br>
            Default: <code>''</code><br><br>
            If you require an additional button, e.g. 'Find out more', include the link to the webpage here. <em>Note</em>, it relies on <code>additionalLinkText</code> also being set.
        </td>
    </tr>
    <tr>
        <th><code>additionalLinkText</code></th>
        <td>
            Type: <code>string</code><br>
            Default: <code>''</code><br><br>
            As above, include the name of the button here. <em>Note</em>, it relies on <code>additionalLink</code> also being set.
        </td>
    </tr>
</table>

MIT © [Chris Boakes](https://twitter.com/cboakes)
