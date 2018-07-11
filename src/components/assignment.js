import React from 'react';

const Assignment = () => {
  return (
    <div>
        <div className="row">
              <div className="col-md-10">
                  <div className="card bg-dark text-white">
                      <img className="card-img" id="runners" src="http://via.placeholder.com/400X400" alt="Card image" />
                      <div className="card-img-overlay marg">
                          <div className="offset-md-6 offset-sm-4 offset-4 col-md-5 col-sm-6 col-6 align-self-center">
                              <div className="row">
                                  <h2 className="justify-content-center">
                                      Assignment
                                  </h2>
                              </div>
                              <div className="row">
                                  para over learning
                              </div>
                              <div className="row">
                                  <button className="btn btn-danger">EXPLORE</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
        <div className="row">
              <div className="offset-md-2 col-md-10">
                  <div className="card bg-dark text-white">
                      <img className="card-img" id="runners" src="http://via.placeholder.com/400X400" alt="Card image" />
                      <div className="card-img-overlay marg">
                          <div className="offset-md-6 offset-sm-4 offset-4 col-md-5 col-sm-6 col-6 align-self-center">
                              <div className="row">
                                  <h2 className="justify-content-center">
                                      gain credits
                                  </h2>
                              </div>
                              <div className="row">
                                  para over learning
                              </div>
                              <div className="row">
                                  <button className="btn btn-danger">EXPLORE</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  );
}

export default Assignment;
