import React from 'react';
import { color } from 'style-value-types';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About <span style={{color:"blue"}}>Nok</span>Nok</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Introduction to “noknok” - The Home Service Application
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Home Services app is a new trend in the market of on-demand applications. But most of the Sri Lankans do not hire permanent servants to fulfill their daily tasks like cooking, washing, dusting, driving, etc.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              That is why we target the problems occurring in day-to-day life. For example, imagine we need an electrician when we get an issue in our household wiring system. Such problems are not frequently occurring. When we look through the service providers' side, think about the post of an electrician, there should be an issue in the electric side of a particular house in a particular area to receive a task for an electrician. So it is an on-demand job. So we develop "noknok" as a solution for both customers and service providers.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With proper market research, the inclusion of vital features, and appropriate marketing, the application can become successful. The traditional ways of finding help with household issues will not be a source of worry anymore. This trusted home services application connects you with professional and qualified experts who can efficiently repair and fix everything in your home.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The demand for these services has grown due to urbanization, a busy lifestyle, and the availability of affordable labor at an affordable cost. In these busy times, people are willing to pay more for reliable services without any conditions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Also, we have a great opportunity as the alternatives are using ineffective search directories, having refund issues, and dealing with constant calls from inexperienced workers.
            </p>
          </div>

          <div className="hidden md:block">
<img src="https://www.odtap.com/wp-content/uploads/2022/12/46776-scaled.jpg" alt="" />          </div>
        </div>

        <div className="mt-10">
          <p className="text-lg leading-relaxed mb-6">
            The noknok comes along with both web and mobile applications. As these problems are not occurring frequently, we designed the web application specially for the customer, but it also can be used by service providers or technicians. The mobile application is only for the service providers as they are getting tasks frequently from the customers.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Also, it contains a personality checker developed with machine learning too. So it will be an additional service that will be provided by noknok. Initially, it will be only available in major urban cities in Sri Lanka, but eventually, it will reach all cities in Sri Lanka. Additionally, this application plans to offer contract-based services to apartment complexes around the urban cities at a reasonable cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
