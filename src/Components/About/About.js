import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className="fs-2 text-center mt-5 mb-5 text-info"> Our Vision</h1>
            <div className="text-center">
<h2>We envision a world where anyone,<br /> anywhere has the power to transform their <br /> life through learning.</h2>
<br />
<button className="btn bg-danger border border-radious text-light fs-4"> Hear from our community </button>
            </div>
            <div className="text-center mt-5 mb-5"></div>
     <h1 className="ps-3">TourBD partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. <br /> We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</h1>
        <div>
            <Footer></Footer>
        </div>
        </div>


    );
};

export default About;