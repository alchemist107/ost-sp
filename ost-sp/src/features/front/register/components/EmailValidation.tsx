import * as React from "react";

import { Component } from "react";
import { Fragment } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouterAction, push } from "react-router-redux";
import Axios from "axios";
import { API_URL } from "../../../../data/Api";

interface ForgotMyPasswordProps {
  onDidMount: () => void;
}

class EmailValidation extends Component<ForgotMyPasswordProps> {
  componentDidMount() {
    const tokenStr = window.location.href.split("?")[1];
    Axios.get(`${API_URL}/candidates/confirm?${tokenStr}`);
    setTimeout(this.props.onDidMount, 3000);
  }
  render() {
    return (
      <Fragment>
        <div className="confirm">
          <div className="confirm-card">
            <div className="confirm-img">
              <i className="fas fa-at" />
            </div>
            <div className="confirm-text">
              <span className="confirm-title">DONE</span>
              <span className="confirm-desc">
                Your Email has been Confirmed
              </span>
              <span className="confirm-desc">
                You will be redirected to the login page shortly
              </span>
            </div>
            <div className="confirm-btn">
              <p>continue</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

interface OwnDispatchProps {
  onDidMount: () => void;
}

interface State {}

interface OwnProps {}

const mapDispatchToProp: MapDispatchToProps<OwnDispatchProps, OwnProps> = (
  dispatch: ThunkDispatch<State, void, RouterAction>
) => ({
  onDidMount: () => {
    dispatch(push("/auth"));
  }
});

export default connect(
  null,
  mapDispatchToProp
)(EmailValidation);
