import { useState } from "react";
import "./Login.css";

function Login() {
  const [loginState, setLoginState] = useState("number");
  const onLoginClickEvent = () => {
    setLoginState(() => "otp");
  };
  return (
    <>
      <div className="card mx-auto mt-5" style={{ width: "25rem" }}>
        <div className="card-body border border-2">
          <h5 className="card-title text-center">Login</h5>
          <div
            id="mobileNumberEntrance"
            style={{ display: loginState == "number" ? "block" : "none" }}
          >
            <div className="mt-5 mb-3">
              <label htmlFor="inputMobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputMobileNumber"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={onLoginClickEvent}>
                Login
              </button>
            </div>
          </div>
          <div
            id="otpEntrance"
            style={{ display: loginState == "otp" ? "block" : "none" }}
          >
            <div className="mt-5 mb-3">
              <label htmlFor="inputOtp" className="form-label">
                OTP
              </label>
              <input type="text" className="form-control" id="inputOtp" />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={onLoginClickEvent}>
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
