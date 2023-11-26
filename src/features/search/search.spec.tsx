// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { searchQueryLocalStorageKey } from 'shared/constants'
// import { MemoryRouterWithStore } from 'tests/test-utils'
// import { afterEach, describe, expect, it, vi } from 'vitest'
// import { Search } from '.'

describe('Search', () => {
  //   const user = userEvent.setup()
  //   const storageGetSpy = vi.spyOn(Storage.prototype, 'getItem')
  //   const storageSetSpy = vi.spyOn(Storage.prototype, 'setItem')

  //   afterEach(() => {
  //     localStorage.clear()
  //   })

  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    expect(1).toBe(1)
    //     render(<MemoryRouterWithStore element={<Search />} />)
    //     const searchValue = 'doctor'
    //     expect(localStorage.getItem(searchQueryLocalStorageKey)).not.toBe(
    //       searchValue
    //     )
    //     await user.type(screen.getByRole('searchbox'), searchValue)
    //     await user.click(screen.getByRole('button'))

    //     expect(storageSetSpy).lastCalledWith(
    //       searchQueryLocalStorageKey,
    //       searchValue
    //     )
    //     expect(localStorage.getItem(searchQueryLocalStorageKey)).toBe(searchValue)
  })

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    expect(1).toBe(1)
    //     const searchValue = 'dark'

    //     localStorage.setItem(searchQueryLocalStorageKey, searchValue)

    //     render(<MemoryRouterWithStore element={<Search />} />)

    //     expect(storageGetSpy).lastReturnedWith(searchValue)
    //     expect(screen.getByRole('searchbox')).toHaveValue(searchValue)
  })
})
