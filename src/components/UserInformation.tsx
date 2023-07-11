import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInformation } from "../store/actions";
import userData from "../data.json";

// Inside the component, you can access the users array:

const UserInformation: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(
      setUserInformation({
        firstName,
        lastName,
        email,
        date_of_birth: "",
        gender: "",
        marital_status: "",
        education: "",
      })
    );
    navigate("/personal-information");
  };

  return (
    <div>
      <h2>User Information</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default UserInformation;
