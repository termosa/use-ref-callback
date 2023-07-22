import { useRefCallback } from './'
import { renderHook } from '@testing-library/react-hooks'

describe('useRefCallback', () => {
  it('calls and returns the value of the very last passed function', () => {
    const firstCb = jest.fn().mockReturnValue(0)
    const { result, rerender } = renderHook<() => number, () => number>(
      (cb) => useRefCallback(cb),
      { initialProps: firstCb }
    )

    const secondCb = jest.fn().mockReturnValue(1)
    rerender(secondCb)

    expect(result.current()).toBe(1)
    expect(firstCb).not.toHaveBeenCalled()
    expect(secondCb).toHaveBeenCalledTimes(1)

    const thirdCb = jest.fn().mockReturnValue(2)
    rerender(thirdCb)

    expect(result.current()).toBe(2)
    expect(firstCb).not.toHaveBeenCalled()
    expect(secondCb).toHaveBeenCalledTimes(1)
    expect(thirdCb).toHaveBeenCalledTimes(1)
  })

  it('always returns the same reference of the function (memoized)', () => {
    const { result, rerender } = renderHook<() => number, () => number>(
      (cb) => useRefCallback(cb),
      { initialProps: () => 0 }
    )

    const firstResult = result.current;

    rerender(() => 1);
    const secondResult = result.current;
    secondResult();

    rerender(() => 2);
    const thirdResult = result.current;

    expect(firstResult).toBe(secondResult);
    expect(secondResult).toBe(thirdResult);
  })
})
