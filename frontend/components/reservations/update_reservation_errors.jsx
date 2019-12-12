import { connect } from 'react-redux';

class UpdateReservationErrors extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                
            </div>
        )
    }

}

const msp = state => ({
  errors: state.errors.reservation
});

const mdp = dispatch => ({
  clearErrors: "x"
});

export default connect(msp, mdp)(Modal);
