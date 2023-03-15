### Installation

```bash
$ npm install --save super-simple-validation
```

or if you prefer yarn

```bash
$ yarn add super-simple-validation
```

### Usage

```typescript
import { isEmail } from "super-simple-validation";

console.log(isEmail("some-email@example.com")); // true
```

### API

#### is-email

Validates if the given string is an email address.

```typescript
const valid = isEmail("user@example.com");

console.log(valid); // true
```

#### is-url

Validates if the given string is a URL.

```typescript
const valid = isUrl("https://example.com");

console.log(valid); // true
```

#### is-phone

Validates if the given string is a phone number.

```typescript
const valid = isPhone("+8612345678901");

console.log(valid); // true
```

#### is-hex-color

Validates if the given string is a hex color.

```typescript
const valid = isHexColor("#ffffff");

console.log(valid); // true
```

#### is-css-color

Validates if the given string is a CSS color.

```typescript
const valid =
  isCssColor("rgb(255, 255, 255)") &&
  isCssColor("rgba(255, 255, 255, 1)") &&
  isCssColor("hsl(0, 0%, 100%)") &&
  isCssColor("hsla(0, 0%, 100%, 1)") &&
  isCssColor("hwb(0, 0%, 0%)") &&
  isCssColor("blue") &&
  isCssColor("transparent");

console.log(valid); // true
```
