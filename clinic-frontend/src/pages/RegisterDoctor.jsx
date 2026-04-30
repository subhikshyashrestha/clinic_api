import { useState } from "react";
import { registerDoctor } from "../services/api";

function RegisterDoctor() {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    registerDoctor({ name, specialization })
      .then(() => {
        alert("Doctor registered!");
      })
      .catch(() => {
        alert("Error");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Doctor</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Specialization"
        onChange={(e) => setSpecialization(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterDoctor;