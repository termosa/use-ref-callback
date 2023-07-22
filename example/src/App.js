import React from 'react'

import { useRefCallback } from 'use-ref-callback'

const App = () => {
  const example = useRefCallback(1)
  return (
    <div>
      {example.current}
    </div>
  )
}
export default App
