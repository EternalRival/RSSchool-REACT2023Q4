import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from 'entities/card';
import { DetailedSection } from 'features/detailed-section';
import { Outlet } from 'react-router-dom';
import { Endpoint } from 'shared/constants';
import { mockListItem } from 'tests/mock/mock-list-response';
import { MemoryRouterWithStore } from 'tests/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('Detailed Card (section)', () => {
  const user = userEvent.setup({
    advanceTimers: () => vi.advanceTimersToNextTimer(),
  });

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    render(
      <MemoryRouterWithStore
        element={
          <>
            <Card {...mockListItem} />
            <Outlet />
          </>
        }
        subElement={<DetailedSection />}
        path={Endpoint.ROOT}
        subPath={`${Endpoint.DETAILS}:id`}
      />
    );
  });
  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('Check that a loading indicator is displayed while fetching data', async () => {
    await user.click(screen.getByRole('link'));

    const placeholder = screen.getByAltText(/image-placeholder/i);
    expect(placeholder).toBeVisible();

    expect(await screen.findByRole('complementary')).toBeVisible();
    expect(placeholder).not.toBeVisible();
  });

  it('Ensure that clicking the close button hides the component', async () => {
    await user.click(screen.getByRole('link'));

    const detailedCard = await screen.findByRole('complementary');
    expect(detailedCard).toBeVisible();

    await user.click(screen.getByRole('button', { name: /close button/i }));

    expect(detailedCard).not.toBeVisible();
  });
});
