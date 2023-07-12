import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPersonalInformation } from "../store/actions";

const PersonalInformation: React.FC = () => {
  const [date_of_birth, setdate_of_birth] = useState("");
  const [gender, setGender] = useState("");
  const [marital_status, setmarital_status] = useState("");
  const [education, setEducation] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(
      setPersonalInformation({
        date_of_birth,
        gender,
        marital_status,
        education,
        firstName: "",
        lastName: "",
        email: "",
      })
    );
    navigate("/confirmation");
  };

  const handlePrev = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label htmlFor="date_of_birth">Date of Birth:</label>
        <input
          type="date"
          id="date_of_birth"
          value={date_of_birth}
          onChange={(e) => setdate_of_birth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="marital_status">Marital Status:</label>
        <input
          type="text"
          id="marital_status"
          value={marital_status}
          onChange={(e) => setmarital_status(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="education">Education:</label>
        <input
          type="text"
          id="education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>
    </div>
  );
};

export default PersonalInformation;
