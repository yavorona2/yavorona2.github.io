import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpoofedMessage: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ showSpoofedMessage: true });
  }
  render() {
    const spoofAction = this.state.showSpoofedMessage;
    let spoofyMessage;
    if (spoofAction)  {
      spoofyMessage = 
      <div className="spoofy-massage">
        OH NO! YOU HAVE BEEN SPOOFED BY TEAM 34!
      </div>
    };

    return (
      <div className="wrapper">
        <header>
          <div className="wrapper-header">
            <div className="identity">
              <div className="header">
                <div className="image">
                  <img
                  className="gatech-icon"
                  src="https://login.gatech.edu/cas/images/logo-gt-cropped.png" alt="Georgia Tech">
                  </img>
                </div>
                <div className="site-title">
                  Georgia Tech Login Service
                </div>
              </div>
            </div>
            <div className="menus"></div>
          </div>
        </header>
        <div className="main">
          <div className="login-wrapper">
             {spoofyMessage}
            <div className="login">
              <div>
                <div className="enter">
                Enter your GT Account and Password
                </div>
              </div>
              <div className="gt-account">
                <div className="label">
                GT Account:
                </div>
                <input className="input"/>
              </div>
              <div className="gt-password">
                <div className="label">
                Password:
                </div>
                  <input type="password" className="input"/>
              </div>
              <div className="gt-check-box">
                <input className="checkbox" type="checkbox"/>
                <span className="label-warn">
                  Warn me before logging me into other sites.
                </span>
              </div>
              <div className="login-button-row">
                <button className="login-button" onClick = {this.handleSubmit}>
                  LOGIN
                </button>
                <button className="clear-button" >clear</button>
              </div>
            </div>
            <div className="sidebar">
              <div className="login-warn">
                <b>ATTENTION</b>
                : When you are finished using all of your authenticated applications, please log out of
                this system and exit your browser to ensure you do not leave any of your applications
                (such as your e-mail) open to other users of this machine.
                <br/>
                <br/>
                <b>TERMS OF USE</b>
                <br/>
                This computer system is the property of the Georgia Institute of Technology.
                Any user of this system must comply with all Institute and Board of Regents policies,
                including the Acceptable Use Policy, Cyber Security Policy and Data Privacy Policy &nbsp;
                (
                  <a href="http://b.gatech.edu/it-policies">http://b.gatech.edu/it-policies</a>). Users should have no expectation of privacy, as
                any and all files on this system may be intercepted, monitored, recorded, copied,
                inspected, and/or disclosed to authorized personnel in order to meet Institute obligations.
                <br/>
                By using this system, I acknowledge and consent to these terms.
              </div>
              <div className="help">
                <div>
                  <div className="dont-know">
                    <a href="https://passport.gatech.edu/activation/select-affiliation">
                      I don't know my GT account
                    </a>
                  </div>
                  <div className="dont-know">
                    <a href="https://passport.gatech.edu/activation/forgot-password">
                      I don't know my password
                    </a>
                  </div>
                  <div className="dont-know">
                    <a href="https://passport.gatech.edu/?action=check-account-status">
                      My correct username and password aren't working
                    </a>
                  </div>
                  <div className="support">
                    For assistance, please contact the &nbsp;
                    <a href="https://techsupport.gatech.edu/">
                    OIT Technology Support Center
                    </a> at 404-894-7173 (Mon-Fri 8am-5:00pm ET).
                  </div>
                  <div className="additional-info">
                    <a href="https://iam.gatech.edu/iam/index.html">
                    Additional documentation including how to integrate your application with GT Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="superfooter">
          <div className="superfooter-content"></div>
        </div>
        <footer>
          <div className="footer-content">
            <div className= "gatech-footer">
               © 2021 Georgia Institute of Technology
            </div>
            <div className="link-footer">
            <ul clasName="info">
              <li>
                <a className="footer-link" href="https://www.gatech.edu/emergency/">Emergency Information</a>
              </li>
              <li>
                <a className="footer-link" href="https://www.gatech.edu/privacy/">Legal & Privacy Information</a>
              </li>
              <li>
                <a className="footer-link" href="https://www.gatech.edu/accessibility/">Accessibility</a>
              </li>
              <li>
                <a className="footer-link" href="https://www.gatech.edu/accountability/">Accountability</a>
              </li>
              <li>
                <a className="footer-link" href="https://www.gatech.edu/accreditation/">Accreditation</a>
              </li>
              <li>
                <a className="footer-link" href="https://hr.gatech.edu/employment/careers">Employment</a>
              </li>
            </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  };
};

export default App;
