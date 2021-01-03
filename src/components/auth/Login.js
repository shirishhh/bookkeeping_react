import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginAuthAction } from "../../redux/actions/AuthAction";
import { useHistory } from "react-router";

function Login(props) {
  const [userState, setUserState] = useState();
  const { user, loginAuthAction } = props;
  const history = useHistory();

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push("/dashboard");
    }
  });

  return (
    <div className="hold-transition login-page">
      <div className="content">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>
          {/* /.login-logo */}
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginAuthAction(userState, history);
              }}
            >
              <div className="form-group has-feedback">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => {
                    const email = event.target.value;
                    setUserState({ ...userState, ...{ email } });
                  }}
                />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => {
                    const password = event.target.value;
                    setUserState({ ...userState, ...{ password } });
                  }}
                />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox ">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a
                href="#"
                className="btn btn-block btn-social btn-facebook btn-flat"
              >
                <i className="fa fa-facebook" /> Sign in using Facebook
              </a>
              <a
                href="#"
                className="btn btn-block btn-social btn-google btn-flat"
              >
                <i className="fa fa-google-plus" /> Sign in using Google+
              </a>
            </div>
            {/* /.social-auth-links */}
            <a href="#">I forgot my password</a>
            <br />
            <a href="register.html" className="text-center">
              Register a new membership
            </a>
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { user: state.auth };
};

export default connect(mapStateToProps, { loginAuthAction })(Login);
