import React, { useState } from "react";

function Form() {
  const [inputData, setInputData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });
  console.log("🚀 ~ file: Form.js:8 ~ Form ~ inputData", inputData);

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setInputData({ ...inputData, [name]: value });
  }
  function HandleSubmit(event) {
    event.preventDefault();
    console.log("🚀 ~ file: Form.js:23 ~ Form ~ inputData", inputData);
  }
  return (
    <form>
      <input
        name="firstName"
        type="text"
        onChange={handleChange}
        value={inputData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={inputData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={inputData.admin}
      />
      <button onSubmit={HandleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
