import React from 'react'

import { useMyHook } from 'use-last-ref'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
