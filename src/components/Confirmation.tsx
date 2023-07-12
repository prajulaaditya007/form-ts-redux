import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

const Confirmation: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Confirmation</h2>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Date of Birth: {user.date_of_birth}</p>
      <p>Gender: {user.gender}</p>
      <p>Marital Status: {user.marital_status}</p>
      <p>Education: {user.education}</p>
      <button onClick={() => navigate("/")}>Back to Step 1</button>
      <button onClick={() => console.log(JSON.stringify(user))}>
        Confirm and Show Response JSON
      </button>
      {user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.date_of_birth === "" ||
      user.gender === "" ||
      user.marital_status === "" ||
      user.education === "" ? (
        <p style={{ color: "red" }}>Please fill out all fields</p>
      ) : null}
    </div>
  );
};

export default Confirmation;
