import { RenderResult, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { searchQueryLocalStorageKey } from 'shared/constants';
import { renderWithRouter } from 'tests/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Search } from '.';

describe('Search', () => {
  const user = userEvent.setup();
  const renderSearch = (): RenderResult => {
    return renderWithRouter(<Search />);
  };

  const storageGetSpy = vi.spyOn(Storage.prototype, 'getItem');
  const storageSetSpy = vi.spyOn(Storage.prototype, 'setItem');

  beforeEach(() => {
    renderSearch();
  });

  afterEach(() => {
    localStorage.clear();
    cleanup();
    vi.clearAllMocks();
  });

  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    const searchValue = 'doctor';

    localStorage.setItem(searchQueryLocalStorageKey, '');
    expect(localStorage.getItem(searchQueryLocalStorageKey)).not.toBe(
      searchValue
    );
    await user.type(screen.getByRole('searchbox'), searchValue);
    await user.click(screen.getByRole('button'));

    expect(storageSetSpy).lastCalledWith(
      searchQueryLocalStorageKey,
      searchValue
    );
    expect(localStorage.getItem(searchQueryLocalStorageKey)).toBe(searchValue);
  });

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    const searchValue = 'dark';

    cleanup();

    localStorage.setItem(searchQueryLocalStorageKey, searchValue);

    renderSearch();

    expect(storageGetSpy).lastReturnedWith(searchValue);
    expect(screen.getByRole('searchbox')).toHaveValue(searchValue);
  });
});
