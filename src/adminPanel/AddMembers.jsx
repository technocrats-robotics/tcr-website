import React from "react";
import { useState, useEffect } from "react";

// mail service (email,data) => email as string and data as object
import { sendEmail } from "../services/mail/sendEmail";
import { addNewUser } from "../services/google-firebase/utilities";

// loading screen
import FullPageLoader from "../components/LoadingScreen/FullPageLoader";

//Message (automatically disappers after 3sec)
import { Warning, Success } from "../components";

function AddMembers() {
  useEffect(() => {
    document.title = "Admin Panel | Add Members";
  }, []);

  const [loadingScreen, showLoadingScreen, hideLoadingScreen] =
    FullPageLoader();
  const [warning, setWarning] = Warning();
  const [success, setSuccess] = Success();

  // dropdown menu parameters
  const Departments = ["Programming", "Electrical", "Mechanical", "Management"];
  let currentYear = new Date().getFullYear();
  const yearOfJoining = () => {
    let arr = [];
    for (let i = currentYear; i >= 2013; i--) {
      arr.push(i);
    }
    return arr;
  };

  //state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState(Departments[0]);
  const [yoj, setYoj] = useState(currentYear);

  //form submit handling
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    if (firstName && lastName && email && department && yoj) {
      showLoadingScreen();
      let new_user = await addNewUser(
        firstName,
        lastName,
        email,
        department,
        parseInt(yoj)
      );
      if (!new_user["status"]) {
        console.error(`New user creation status ${new_user["status"]}`);
        return;
      }
      // send credentials as object
      let data = {
        username: new_user["username"], // pull this from create new user function
        password: new_user["password"], // pull this from create new user function
      };
      let api_msg = await sendEmail(email, data);

      if (api_msg) setSuccess(`Credentials sent successfully to ${email}`);
      else
        setWarning(
          "Some error occured please try again!! (maybe wrong email id)"
        );

      hideLoadingScreen();
    } else {
      setWarning("Some mandatory information is missing!!");
    }
  };

  //component..
  return (
    <div className="admin__addMembers">
      {loadingScreen}
      <div className="admin__addMembersForm">
        {warning}
        {success}
        <div>
          <h1>
            <u>Add New Member</u>
          </h1>
        </div>
        <form className="ui container" onSubmit={handleFormSubmit}>
          <div className="field">
            <div className="ui fluid icon input">
              <input
                type="text"
                placeholder="First Name *"
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="ui fluid icon input">
              <input
                type="text"
                placeholder="Last Name *"
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="ui fluid icon input">
              <input
                type="text"
                placeholder="Email *"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <select
              className="ui fluid selection dropdown"
              onChange={(event) => setDepartment(event.target.value)}
              required
            >
              {Departments.map((department) => {
                return (
                  <option value={department} key={department}>
                    {department}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field">
            <select
              className="ui fluid selection dropdown"
              onChange={(event) => setYoj(event.target.value)}
              required
            >
              {yearOfJoining().map((year) => {
                return (
                  <option value={year} key={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field">
            <button className="ui secondary button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMembers;
