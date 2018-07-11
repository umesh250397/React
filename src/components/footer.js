import React from 'react';

const Footer = () => {
  return (
    <div>
        <footer className="font-small pt-4 mt-4 stylish-color-dark">
            <div className="container fluid text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">LEARNOGETHER</h6>
                        <p>This is a platform to develop something and learn something. DO learn and DO develop</p>
                    </div>
                    <hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                        <p><a href="#!">Prod1</a></p>
                        <p><a href="#!">Prod2</a></p>
                        <p><a href="#!">Prod3</a></p>
                        <p><a href="#!">prod4</a></p>
                    </div>
                    <hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-3 col-lg-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
                        <p><a href="#!">Your Account</a></p>
                        <p><a href="#!">Become an Affiliate</a></p>
                        <p><a href="#!">Courses</a></p>
                        <p><a href="#!">Help</a></p>
                    </div>
                    <hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i className="fa fa-home mr-3"></i> New Delhi, 110058, IN</p>
                        <p><i className="fa fa-envelope mr-3"></i> learn@gmail.com</p>
                        <p><i className="fa fa-phone mr-3"></i> + 91 963 852 7410</p>
                        <p><i className="fa fa-print mr-3"></i> + 91 987 456 0123</p>
                    </div>
                </div>
                <hr/>
                <div className="row d-flex align-items-center">
                    <div className="col-md-8 col-lg-8">
                        <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="#"> learnogether.com </a></p>
                    </div>
                    <div className="col-md-4 col-lg-4 ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
