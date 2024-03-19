import { useState, useContext } from "react";
import BtnCmp from "./BtnCmp";
import { userListContext } from "../App";

function FormSection() {
  const { userList, addUser } = useContext(userListContext);

  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  function submitForm() {
    let newUser: IUser = {
      username: username,
      password: password,
      email: emailAddress,
      gender: gender,
    };

    console.log(newUser);

    addUser(newUser);

    setGender("male");
    setUsername("");
    setEmailAddress("");
    setPassword("");
  }

  function handleGenderChange(event: React.ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value);
  }

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleEmailAddressChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEmailAddress(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="m-5">
        <form>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="string"
              className="form-control"
              id="usernameInput"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              onChange={handleEmailAddressChange}
              value={emailAddress}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="mb-3 form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="maleRadio"
              id="maleRadio"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="maleRadio">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="femaleRadio"
              id="femaleRadio"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="femaleRadio">
              Female
            </label>
          </div>
          <div>
            <BtnCmp
              title="Register"
              type="primary"
              onClickAction={() => {
                submitForm();
              }}
            ></BtnCmp>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormSection;
