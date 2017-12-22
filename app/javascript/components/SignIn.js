import React from "react"
import PropTypes from "prop-types"
class SignIn extends React.Component {
  render () {
    return (
      <div>
        <div class="login_wrapper">
          <div class="animate form login_form">
            <section class="login_content">
              <form>
                <h1>Login</h1>
                <div>
                  <input type="text" class="form-control" placeholder="Username" required="" />
                </div>
                <div>
                  <input type="password" class="form-control" placeholder="Password" required="" />
                </div>
                <div>
                  <a class="btn btn-default submit" href="index.html">Log in</a>
                  <a class="reset_pass" href="#">Lost your password?</a>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn
