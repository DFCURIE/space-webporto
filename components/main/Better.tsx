import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";

const Better = () => {
  return (
    <section id="about" style={{ padding: '20px' }}>
      <h1 className="title" style={{ color: 'white', fontSize: '2rem', textAlign: 'center', marginBottom: '50px' }}>Get To Know More About Me</h1>
      <div className="section-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section__pic-container" style={{ marginBottom: '50px', position: 'relative', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ border: '0.2px solid white', borderRadius: '8px', overflow: 'hidden', margin: '0 10px' }}>
            <Image src="/PPDF.jpg" alt="Profile picture" className="about-pic" layout="fixed" width={150} height={150} quality={80} loading="lazy" />
          </div>
          <div style={{ border: '0.2px solid white', borderRadius: '8px', overflow: 'hidden', margin: '0 10px' }}>
            <Image src="/aboutme.jpg" alt="About Me" className="about-pic" layout="fixed" width={150} height={150} quality={80} loading="lazy" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ borderRadius: '1rem', border: '0.05rem solid rgb(231, 229, 229)', padding: '10px 20px', marginBottom: '20px', width: '100%' }}>
            <div style={{ marginBottom: '5px', textAlign: 'center' }}>
              <Image src="/experience.png" alt="Experience Logo" width={25} height={25} />
            </div>
            <p style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center' }}>Experience</p>
            <p style={{ color: 'white', margin: '0', fontSize: '0.8rem', textAlign: 'center' }}>1 Year Junior Full Stack Engineer</p>
          </div>
          <div style={{ borderRadius: '1rem', border: '0.05rem solid rgb(231, 229, 229)', padding: '10px 20px', marginBottom: '20px', width: '100%' }}>
            <div style={{ marginBottom: '5px', textAlign: 'center' }}>
              <Image src="/education.png" alt="Education Logo" width={25} height={25} />
            </div>
            <p style={{ color: 'white', margin: '0', fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center' }}>Education</p>
            <p style={{ color: 'white', margin: '0', fontSize: '0.8rem', textAlign: 'center' }}>Bachelors Of Computer Engineering</p>
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
