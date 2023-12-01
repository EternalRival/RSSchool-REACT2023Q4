import { FC } from 'react'

export const UncontrolledComponentsPage: FC = () => (
  <main>
    <form>
      <fieldset>
        <legend>Uncontrolled Components Form</legend>

        {/* name (validate for first uppercased letter) */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        {/* age (should be number, no negative values) */}
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />

        {/* email (validate for email) */}
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />

        {/* 2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character) */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="password-confirm">Password Confirm:</label>
        <input type="password" id="password-confirm" name="password-confirm" />

        {/* gender (you can use radio buttons or select control) */}
        <label htmlFor="gender">Gender: TODO</label>
        <select name="gender" id="gender">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        {/* accept T&C (checkbox) */}
        <label htmlFor="terms">Terms & Conditions:</label>
        <input type="checkbox" id="terms" name="terms" />

        {/* input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64) */}
        <label htmlFor="picture">Picture:</label>
        <input type="file" id="picture" name="picture" />

        {/* autocomplete control to select country (all countries shoudl be stored in the Redux store)  */}
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" />
      </fieldset>
    </form>
  </main>
)
