import { mockListItem } from '@tests/mocks/mock-list-response'
import { render, screen, within } from '@testing-library/react'
import { Card } from '.'
import { mockRouter } from '@tests/test-utils'
import userEvent from '@testing-library/user-event'

describe('Card', () => {
  const user = userEvent.setup()

  it('Ensure that the card component renders the relevant card data', async () => {
    const { Provider } = mockRouter()
    render(
      <Provider>
        <Card {...mockListItem} />
      </Provider>
    )

    const { title, year, totalSeasons, rating } = mockListItem
    const description = screen.getByLabelText(/card description/i)
    const checklist = [year, totalSeasons, rating]

    const card = screen.getByRole('link')

    expect(within(card).getByRole('heading')).toHaveTextContent(title ?? '')
    checklist.forEach((prop) => {
      expect(description).toHaveTextContent((prop ?? '').toString())
    })
  })

  // it('Validate that clicking on a card opens a detailed card component', async () => {
  //   const { router, Provider } = mockRouter()
  //   render(
  //     <Provider>
  //       <Card {...mockListItem} />
  //     </Provider>
  //   )
  //   console.log(location.href)

  //   expect(screen.queryByRole('complementary')).toBeNull()

  //   await user.click(screen.getByRole('link'))

  //   console.log(router)

  //   // expect(router.route).toBeCalledWith('/?details=7718')
  //   // expect(await screen.findByRole('complementary')).toBeVisible()

  //   // render(
  //   //   <MemoryRouterWithStore
  //   //     element={
  //   //       <>
  //   //         <Card {...mockListItem} />
  //   //         <Outlet />
  //   //       </>
  //   //     }
  //   //     subElement={<DetailedSection />}
  //   //     subPath={`${Endpoint.DETAILS}:id`}
  //   //   />,
  //   // )

  //   // expect(screen.queryByRole('complementary')).toBeNull()
  //   // await user.click(screen.getByRole('link'))

  //   // expect(await screen.findByRole('complementary')).toBeVisible()
  // })

  // it.todo('Check that clicking triggers an additional API call to fetch detailed information', async () => {
  //   render(
  //     <MemoryRouterWithStore
  //       element={
  //         <>
  //           <Card {...mockListItem} />
  //           <Outlet />
  //         </>
  //       }
  //       subElement={<DetailedSection />}
  //       subPath={`${Endpoint.DETAILS}:id`}
  //     />
  //   )

  //   const apiCallSpy = vi.spyOn(MyShowsApiService, 'useGetByIdQuery')

  //   expect(apiCallSpy).not.toBeCalled()

  //   for (let i = 1; i <= 5; i += 1) {
  //     await user.click(screen.getByRole('link'))
  //     expect(apiCallSpy).toBeCalledTimes(i)

  //     const closeButton = screen.getByRole('button', { name: /close button/i })
  //     await user.click(closeButton)
  //   }
  // })
})
