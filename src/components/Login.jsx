import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { URL } from "../utils/constants";

function Login() {
  // const [email, setEmail] = useState("prince@gmail.com");
  // const [password, setPassword] = useState("Prince@123");
  const [email, setEmail] = useState("walter@gmail.com");
  const [password, setPassword] = useState("Walter@1234");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.user || res.data));
      navigate("/feed");
    } catch (err) {
      setError(err?.response?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="card bg-indigo-400 text-primary-content w-full max-w-lg">
        <div className="card-body flex flex-col gap-4">
          <h2 className="card-title text-center">Login</h2>

          <fieldset className="fieldset p-0 w-full">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full box-border px-3 py-2"
              placeholder="example@gmail.com"
            />

            <legend className="fieldset-legend mt-3">Password</legend>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full box-border px-3 py-2"
              placeholder="••••••••••"
            />
          </fieldset>

          <p className="text-red-500 font-medium">{error}</p>
          <div className="card-actions justify-end w-full">
            <button onClick={handleLogin} className="btn mx-auto">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
