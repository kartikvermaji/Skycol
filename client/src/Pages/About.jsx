import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="bg-slate-300">
      <Navbar></Navbar>
      <div className="p-4 flex flex-col w-[90vw] md:w-[40vw] items-center container mx-auto pt-36 text-center">
        <p>
          Welcome to our custom social media platform, a dynamic and engaging
          space crafted with cutting-edge MERN stack technologies. Rooted in
          HTML, CSS, and JavaScript, our platform seamlessly integrates Node.js,
          Mongoose, and Express.js on the backend, providing a robust foundation
          for a feature-rich user experience.
        </p>
        <h1 className="mt-2 text-lg font-semibold">Vision and Mission</h1>
        <p>
          At the heart of our creation is the vision to foster meaningful
          connections and authentic interactions. We aim to provide a
          user-centric social media experience that goes beyond the ordinary,
          leveraging the power of the MERN stack to deliver a seamless and
          responsive platform.
        </p>
        <h1 className="mt-2 text-lg font-semibold">Technology Stack</h1>
        <p>
          Our choice of the MERN stack (MongoDB, Express.js, React, and Node.js)
          reflects our commitment to innovation and scalability. With a MongoDB
          database at the core, Express.js for efficient server-side
          development, and React for a dynamic and intuitive user interface,
          we've embraced a modern and versatile technology stack. The
          incorporation of Redux ensures robust state management, enhancing the
          overall performance of our application.
        </p>
        <h1 className='mt-2 text-lg font-semibold'>Security at the Core</h1>
        <p>
          Your privacy and security are our top priorities. Our platform employs
          JWT (JSON Web Token) security measures for user authentication,
          ensuring that your personal information is protected at all times.
          Feel confident as you explore, connect, and share on our platform,
          knowing that your data is in safe hands.
        </p>
        <h1 className='mt-2 text-lg font-semibold '>Features That Redefine Social Interaction</h1>
        <ul>
          <li className="text-left mt-2">
            <span className='mt-1 text-md font-semibold'>User Registration and Authentication:</span> Seamlessly create an
            account and log in securely with our JWT-based authentication
            system.
          </li>
          <li className="text-left mt-2">
            <span className='mt-1 text-md font-semibold'>Expressive Feeds:</span> Share your thoughts, experiences, and
            moments with an interactive feed where users can express their
            opinions through likes and dislikes.
          </li>
          <li className="text-left mt-2">
            <span className='mt-1 text-md font-semibold'>Friendship Management</span>Build and cultivate connections by
            adding friends to your network. Unfriend with ease, ensuring you
            have control over your social circles.
          </li>
        </ul>
        <h1  className='mt-2 text-lg font-semibold '>The Power of Connection</h1>
        <p>
          Join us on this exciting journey of connection and expression. Our
          custom social media app is more than just a platform; it's a community
          where relationships thrive, and individual voices are celebrated.
        </p>
        <p className="mt-2">
          Experience the future of social networking with us - where technology
          meets human connection in a seamless, secure, and innovative way.
          Welcome to a new era of social media. Welcome to our MERN-powered
          community!
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
