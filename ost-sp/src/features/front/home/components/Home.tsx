import * as React from "react";
import "./Home.css";
import Header from "../../../../shared/components/Header/Header";
import { Link } from "react-router-dom";
import { MapStateToProps, connect } from "react-redux";
import { IState } from "src/shared/store";

const ProfileLink = () => (
  <Link to="/profile" className="application-btn">
    <i className="fab fa-telegram-plane" /> Create A Profile
  </Link>
);
const ApplicationLink = () => (
  <Link to="/application" className="application-btn">
    <i className="fab fa-telegram-plane" /> Start The Application
  </Link>
);
const RegisterLink = () => (
  <Link to="/auth" className="application-btn">
    <i className="fab fa-telegram-plane" /> Apply now
  </Link>
);

interface TOwnProps {}
interface TStateProps {
  userId: number;
  useruniversity: string;
  isSubmited: boolean;
  userEmail: string;
}

type Props = TStateProps;

class Home extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.isSubmited) {
      console.log(this.props.useruniversity);
    }
  }

  public render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <div className="row hero-part-row">
            <div className="overlay">
              <h1 className="my-title" id="test">
                "Big dreams start<span> with smart ideas"</span>
              </h1>
              <div className="deadline">
                <h2>Application deadline</h2>
                <div className="timing">
                  <div>
                    <h3>0</h3>
                    <p>days</p>
                  </div>
                  <div>
                    <h3>0</h3>
                    <p>hours</p>
                  </div>
                  <div>
                    <h3>0</h3>
                    <p>minutes</p>
                  </div>
                  <div>
                    <h3>0</h3>
                    <p>secondes</p>
                  </div>
                </div>

                {this.props.userId ? (
                  this.props.useruniversity ? (
                    <ApplicationLink />
                  ) : (
                    <ProfileLink />
                  )
                ) : (
                  <RegisterLink />
                )}
              </div>
            </div>
          </div>

          <div className="row my-second-part-row">
            <div className="col-sm-6 hh">
              <p className="ost-desc-title">WHAT IS OST ?</p>
              <p className="ost-desc-paragraph">
                It is a Start up Competition in partnership with Columbia
                Engineering and Business School to support Tunisian youth eager
                to open up to the world and thrive. It brings together students
                from different disciplines, across universities and regions and
                boosts their innovation and team work skills to solve global
                problems. Because we believe that together we can be change
                makers!
              </p>
            </div>
            <div className="col-sm-6 ost-desc-imag-container">
              <img src="students.svg" alt="" className="ost-desc-image" />
            </div>
          </div>
        </div>

        <footer className="container-fluid last-of-page">
          <div className="row">
            <div className="col-md-3">
              <img
                src="http://www.ost.com.tn/wp-content/uploads/ost-logo.png"
                alt=""
                className="footer logo"
              />
            </div>
            <div className="col-md-8 last-of-page-p">
              <h6>openstartuptunisia.competition@gmail.com | Newsletter </h6>

              <p>
                Copyright © 2017 OST | Concept : RRC | Conception & Réalisation
                : fullab
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const MapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  userId: state.auth.userId,
  userEmail: (state.auth.currentuser || {}).email,
  useruniversity: (state.auth.currentuser || {}).university,
  isSubmited: (state.auth.currentuser || {}).submited
});

export default connect(
  MapStateToProp,
  null
)(Home);
