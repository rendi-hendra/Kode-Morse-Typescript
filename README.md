## Installation

```sh
npm install --save sandi-morse-typescript
```

## Usage

```js
import { encode, decode } from "sandi-morse";

// Sandi Morse ke Alfabet
const sandi_morse = decode(".... . .-.. .-.. --- * .-- --- .-. .-.. -..");
console.log(sandi_morse); // "hello world"

// Alfabet ke Sandi Morse
const hello = encode("hello world");
console.log(hello); // ".... . .-.. .-.. --- * .-- --- .-. .-.. -.."
```

## Symbol

```

"*" = Space

```
