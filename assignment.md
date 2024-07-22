# TODO

- [ ] Create a separate branch for this task from the previous branch task.
- [ ] Redux Integration
  - [ ] Integrate Redux into your application. You'll need to set up the Redux store and reducers using Redux Toolkit.
- [ ] Connect Components. Connect the relevant components to the Redux store. Components should be able to access and modify the following data:
  - [ ] Save search value on CTA (Call to Action) button click.
  - [ ] Save items per page.
  - [ ] Save view mode value.
  - [ ] RTK Query Implementation: Use Redux Toolkit Query (RTK Query) to make API calls and cache the results. This will modify your previous API call implementation.
- [ ] Loading Flags
  - [ ] Implement separate loading flags in the Redux store for the main page and details page. These flags should indicate whether data is being loaded.
- [ ] Test Updates
  - [ ] Update your tests to accommodate the changes introduced by Redux and RTK Query.
  - [ ] Test the functionality related to Redux state and API calls.

---

- [ ] Redux is integrated to the app with the help of Redux Toolkit - 25 points
- [ ] Search is saved in the store - 5 points
- [ ] Items per page is saved in the store - 5 points
- [ ] View mode is saved in the store - 10 points
- [ ] Loading indicators are shown, loading flags are saved in the store, - 10 points
- [ ] When either search or items per page is changed, application makes a new call using RTK Query to fetch the data - 25 points
- [ ] Tests had been modified to test the functionality using Redux and RTK Query - 20 points
