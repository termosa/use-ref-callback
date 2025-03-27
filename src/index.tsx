import * as React from 'react'

export function useRefCallback<T extends undefined | ((...args: any[]) => any)>(callback: T): T {
  const ref = React.useRef<T>(callback)
  ref.current = callback
  const memoized = React.useCallback(
    (...args: Parameters<T extends (...args: any[]) => any ? T : never>) =>
      ref.current?.(...args),
    []
  )
  return ref.current && (memoized as T)
}

export default useRefCallback
