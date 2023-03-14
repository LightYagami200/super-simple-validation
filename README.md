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

console.log(isEmail('some-email@example.com')); // true
```

### API

#### is-email
Validates if the given string is an email address.

```typescript
const valid = isEmail('user@example.com');

console.log(valid); // true
```

#### is-phone
Validates if the given string is a phone number.

```typescript
const valid = isPhone('+8612345678901');

console.log(valid); // true
```

#### is-hex-color
Validates if the given string is a hex color.

```typescript
const valid = isHexColor('#ffffff');

console.log(valid); // true
```