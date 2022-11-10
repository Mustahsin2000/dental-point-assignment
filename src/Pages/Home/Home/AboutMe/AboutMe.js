import React from 'react';
import me from '../../../../assets/images/about.jpg'

const AboutMe = () => {
    return (
        <div className="hero min-h-29 bg-light-200 my-3 mb-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={me} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Story About Me</h1>
            <h1 className="text-2xl font-bold mt-3">And how we get to this point</h1>
            <p className="py-6">One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.</p>
            <button className="btn btn-outline btn-accent w-30 ">Details</button>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;