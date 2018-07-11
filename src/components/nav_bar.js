import React from 'react';
import { Modal } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { toggle: false };
  }
  toggle(event) {
    console.log('hello');
    event.preventDefault();
    this.setState({
      toggle : true
    });
  }
  close(event) {
    this.setState({ toggle: false });
  }

  render() {

    var modal = [];
    modal.push(
      <div className="modal fade" style={this.state.toggle ? {display : 'block'} : {display: 'none'} }>
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h4 className="modal-title">Login</h4>
                      <button type="button" className="close" onClick={this.close}>
                          &times;
                      </button>
                  </div>
                  <div className="modal-body">
                      <form className="form-inline">
                          <div className="form-group">
                              <label className="sr-only" htmlFor="exampleInputEmail3">
                                  Email address
                              </label>
                              <input type="email" className="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email" />
                              </div>
                          <div className="form-groupr">
                              <label className="sr-only" htmlFor="exampleInputPassword3">
                                  Password
                              </label>
                              <input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password" />
                          </div>
                          <div className="form-check">
                              <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" />
                                  Remember me
                              </label>
                          </div>
                      </form>
                  </div>
                  <div className="modal-footer">
                      <Button type="button" className="btn btn-default btn-sm" onClick={this.close}>
                          Cancel
                      </Button>
                      <button type="button" className="btn btn-primary btn-sm" onClick={this.toggle}>
                          Sign in
                      </button>
                  </div>
              </div>
          </div>
      </div>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">SignUp</a>
              </li>
              <li className="nav-item btn" onClick={this.toggle}>
                Login
              </li>
            </ul>
          </div>
        </nav>
      /*  <div className="static-modal">
        <Modal show={this.state.toggle}>
                <Modal.Header>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="exampleInputEmail3">
                            Email address
                        </label>
                        <input type="email" className="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email" />
                        </div>
                    <div className="form-groupr">
                        <label className="sr-only" htmlFor="exampleInputPassword3">
                            Password
                        </label>
                        <input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" />
                            Remember me
                        </label>
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                  </Modal.Footer>
              </Modal>
</div> */
      {modal}
      </div>
    );
  }
}

export default NavBar;


// <div className="modal" style={this.state.toggle ? {display : 'block'} : {display: 'none'} }>
// <div className="modal-content">
//   <h4>Modal Header</h4>
//   <p>A bunch of text</p>
// </div>
// <div className="modal-footer">
//   <a className="btn" onClick={this.toggle}>Agree</a>
// </div>
// </div>
