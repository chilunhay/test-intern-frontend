import React, { useState } from "react";
import "./Profile.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name is Required");
    } else if (birth === "") {
      toast.error("Day Of Birth is Required");
    } else if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
    } else if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("birthDay", birth);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);

      toast.success("Update successful");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-background">
      <div className="profile-container">
        <form className="profile-form" onSubmit={handleUpdate}>
          <p className="profile-title">Profile</p>

          <label htmlFor="name">Full name:</label>
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="birth">Day Of Birth:</label>
          <input
            type="text"
            value={birth}
            id="birth"
            name="birth"
            onChange={(e) => setBirth(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            value={phone}
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <div className="profile-function">
            <button className="update-btn" type="submit" onClick={handleUpdate}>
              Update
            </button>
            <button type="submit" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
