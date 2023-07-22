# use-ref-callback

> Handy hook to define or wrap argument callback to pass to memoized components

[![NPM](https://img.shields.io/npm/v/use-ref-callback.svg)](https://www.npmjs.com/package/use-ref-callback) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-ref-callback
```

## Usage

```tsx
import * as React from 'react'
import api from "./api"

import useRefCallback from 'use-ref-callback'
// Or: import { useRefCallback } from 'use-ref-callback'

function ExampleInput({ onChange }: { onChange?: string }) {
  // Even if onChange will be changing over time the handleChange will remain the same
  const handleChange = useRefCallback(onChange)
  // as so the render of ExampleInput won't trigger rerender of memoized children
  return <MemoizedInput onChange={handleChange} />
}
```

```tsx
function ExampleForm() {
  const [data, setData] = React.useState()

  // handleSubmit will never change, yet it will always use the latest values from the component scope
  const handleSubmit = useRefCallback((event) => {
    event.preventDefault()
    api.submit(data)
  })

  // ...
    <MemoizedForm onSubmit={handleSubmit}>
  // ...
}
```

## License

MIT © [termosa](https://github.com/termosa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
