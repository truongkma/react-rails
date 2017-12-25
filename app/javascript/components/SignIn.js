import React from "react"
import PropTypes from "prop-types"

class SignIn extends React.Component {
  render () {
    return (
      <div>
        <div className="middle-box text-center loginscreen  animated fadeInDown">
          <div>
            <h2>Login</h2>
            <form className="m-t" role="form" action="#">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Username" required=""/>
              </div>
              <div  className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="" />
              </div>
              <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn
