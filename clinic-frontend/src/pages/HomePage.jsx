import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function HomePage() {
  return (<div>
      <h2>Home Page</h2>
      <Link to="/login">Login</Link>

      <Link to="/register">Registration </Link>

      <Link to="/patient-list">Patient List</Link>
      </div>
  );

}
export default HomePage;