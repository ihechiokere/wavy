import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="App full-height">
      <section className="mini-box mt400 user-box">
        <div className="wrap">
          <form className="form">
            <div>
              <label
                htmlFor="f"
                className="label b400"
                style={{ fontWeight: 400 }}
              >
                Business Name
              </label>
              <input className="sub-input" type="text" />
            </div>

            <div>
              <label htmlFor="f" className="label" style={{ fontWeight: 400 }}>
                Email
              </label>
              <input className="sub-input" type="text" />
            </div>
            <div>
              <label htmlFor="f" className="label" style={{ fontWeight: 400 }}>
                Password
              </label>
              <input className="sub-input" type="text" />
            </div>
            <div>
              <label htmlFor="f" className="label" style={{ fontWeight: 400 }}>
                Confirm Password
              </label>
              <input className="sub-input" type="text" />
            </div>
            <div className="user-bottom-flex mt100">
              <Link to="/login">
                <p
                  className="fs14 b600 green mr50 no-under"
                  style={{ textDecoration: "none" }}
                >
                  Already registered?
                </p>
              </Link>
              <button style={{ margin: 0, fontSize: ".75rem" }}>
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
