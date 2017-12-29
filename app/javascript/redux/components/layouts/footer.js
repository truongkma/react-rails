import React from "react"
import PropTypes from "prop-types"

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div className="pull-right">
          Nguyen Dac Truong
        </div>
        <div>
          <strong>Copyright</strong> &copy; TruongKMA 2017-2018
        </div>
      </div>
    );
  }
}

export default Footer
