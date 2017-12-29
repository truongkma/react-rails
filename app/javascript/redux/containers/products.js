import React from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'

class Products extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.current_user)
  }

  render () {
    return (
      <div><h3>Nguyen Dac Truong AT8A</h3></div>
    );
  }
}

Products.propTypes = {
  current_user: PropTypes.object
}

const mapStateToProps = state => ({
  current_user: state.current_user
});

export default connect(mapStateToProps)(Products);
