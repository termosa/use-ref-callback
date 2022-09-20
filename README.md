# use-last-ref

> Constantly updating ref value from the argument

[![NPM](https://img.shields.io/npm/v/use-last-ref.svg)](https://www.npmjs.com/package/use-last-ref) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-last-ref
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-last-ref'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [termosa](https://github.com/termosa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
