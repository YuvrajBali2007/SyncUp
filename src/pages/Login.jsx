import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();

    if (
      email === "yuvraj@gmail.com" && password === "yuvraj1234"
      

    ) {
      localStorage.setItem("LoggedIn" , "true");
      navigate("/Home");
    } else {
      alert("Wrong email or password");
      setemail("");
    setpassword("");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
      }}
    >
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">SyncUp</h2>

        <form onSubmit={handlelogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>

            <input
              className="form-control"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              background: "#334155",
              borderColor: "#334155",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

