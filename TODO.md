# TODO

- Tests for the **Card List** component
  - Verify that the component renders the specified number of cards;
  - Check that an appropriate message is displayed if no cards are present.
- Tests for the **Card** component
  - Ensure that the card component renders the relevant card data;
  - Validate that clicking on a card opens a detailed card component;
  - Check that clicking triggers an additional API call to fetch detailed information.
- Tests for the **Detailed Card** component
  - Check that a loading indicator is displayed while fetching data;
  - Make sure the detailed card component correctly displays the detailed card data;
  - Ensure that clicking the close button hides the component.
- Tests for the **Pagination** component
  - Make sure the component updates URL query parameter when page changes.
- Tests for the **Search** component
  - Verify that clicking the Search button saves the entered value to the local storage;
  - Check that the component retrieves the value from the local storage upon mounting.
- Tests for the **404 Page** component
  - Ensure that the 404 page is displayed when navigating to an invalid route.
