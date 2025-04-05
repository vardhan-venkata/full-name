import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    if (formData.firstName && formData.lastName) {
      setFullName(`${formData.firstName} ${formData.lastName}`);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          required
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
        />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          required
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {fullName && <h2 style={{ marginTop: "20px" }}>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;
