import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";

const Better = () => {
  return (
    <section id="about" style={{ padding: '20px' }}>
      <h1 className="title" style={{ color: 'white', fontSize: '2rem', textAlign: 'center', marginBottom: '50px' }}>Get To Know More About Me</h1>
      <div className="section-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section__pic-container" style={{ marginBottom: '50px', position: 'relative', padding: '15px', borderRadius: '50%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '0.5px solid white', borderRadius: '8px', overflow: 'hidden', marginRight: '20px', width: '300px', height: '300px' }}>
              <Image src="/PPDF.jpg" alt="Profile picture" className="about-pic" layout="responsive" width={300} height={300} />
            </div>
            <div style={{ border: '0.5px solid white', borderRadius: '8px', overflow: 'hidden', width: '300px', height: '300px' }}>
              <Image src="/aboutme.jpg" alt="About Me" className="about-pic" layout="responsive" width={300} height={300} />
            </div>
          </div>
          {/* Adjust width and height according to your image dimensions */}
          <div style={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderRadius: '2rem', border: '0.1rem solid rgb(231, 229, 229)', padding: '20px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '10px' }}>
                <Image src="/experience.png" alt="Experience Logo" width={30} height={30} />
              </div>
              <p style={{ color: 'white', margin: '0', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Experience</p>
              <p style={{ color: 'white', margin: '0', fontSize: '0.9rem', textAlign: 'center' }}>1 Year Junior Full Stack Engineer</p>
            </div>
            {/* Add the Education section here */}
            <div style={{ marginLeft: '20px', borderRadius: '2rem', border: '0.1rem solid rgb(231, 229, 229)', padding: '20px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '10px' }}>
                <Image src="/education.png" alt="Education Logo" width={30} height={30} />
              </div>
              <p style={{ color: 'white', margin: '0', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Education</p>
              <p style={{ color: 'white', margin: '0', fontSize: '0.9rem', textAlign: 'center' }}>Bachelors Of Computer Engineering</p>
            </div>
          </div>
        </div>
        <div className="about-details-container" style={{ width: '100%' }}>
          <div className="about-containers" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            {/* Add more details here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Better;
