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

#### is-discord-id

Validates if the given string is a Discord ID.

```typescript
const valid = isDiscordId("973608903801708634");

console.log(valid); // true
```

#### is-date-time

Validates if the given string is a date time.

```typescript
const valid = isDateTime("2021-10-01T00:00:00.000Z");

console.log(valid); // true
```

#### is-cc-number

Validates if the given string is a credit card number.

Strings with spaces and dashes are also supported.

Use `true` in second parameter to validate the the number with the Luhn algorithm. (More info: https://en.wikipedia.org/wiki/Luhn_algorithm)

```typescript
const valid = isCcNumber("4539 1488 0343 6467");

console.log(valid); // true

// Optionally use true in the second parameter to validate the Luhn algorithm
const validWithLuhn = isCcNumber("4539 1488 0343 6467", true);

console.log(validWithLuhn); // true
```

#### is-cc-exp

Validates if the given string is a credit card expiration date.

```typescript
const valid = isCcExp("10/25");

console.log(valid); // true
```

#### is-cc-cvv

Validates if the given string is a credit card CVV.

```typescript
const valid = isCcCvv("123");

console.log(valid); // true
```