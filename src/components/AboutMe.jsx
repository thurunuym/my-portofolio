import styles from "./AboutMe.module.css";
import "../styles/AboutMe.scss";
import thurunu from "../assets/thurunu1.gif";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section id="about" className="mt-2 py-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 h-full">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto h-full">

          {/* Left Box */}
          <motion.div
            className={`${styles.box} ${styles.leftBox} sm:order-2 lg:order-1 sm:flex flex-1 p-6 rounded-[6px] shadow-md`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-center ">
              <p className="text-white text-m leading-relaxed text-m leading-loose">
                I am an Electronics and Computer Science undergraduate at the
                University of Kelaniya, passionate about combining technical
                expertise with <span className={styles.gradient}>creative</span> problem-solving. Throughout my academic
                journey, I’ve developed strong problem-solving abilities and a
                versatile skill set that allows me to contribute across various
                aspects of software development. I enjoy working on creating
                interactive user experiences, and building robust systems that
                deliver <span className={styles.gradient}>real</span> value. I am always eager to learn, take on new
                challenges, and grow within the ever-evolving tech landscape. I
                welcome opportunities to <span className={styles.gradient}>connect</span> with fellow innovators, tech
                enthusiasts, and industry professionals.
              </p>
            </div>
          </motion.div>

          {/* Middle Box */}
          <motion.div
            className={`${styles.box} ${styles.middleBox} sm:order-1 lg:order-2 flex-1 p-0 rounded-[6px] shadow-md`}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div className="w-full">
              <img src={thurunu} alt="myimage" className="mt-20 w-full"/>
            </div>
          </motion.div>

          {/* Right Box (Timeline) */}
          <motion.div
            className={`${styles.box} ${styles.rightBox} flex-1 p-4 sm:p-6 rounded-[6px] shadow-md order-3`}
            initial={{ opacity: 0 , x:50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="timeline w-full">
              <h2 className="timeline__item timeline__item--year">Present</h2>

              <div className="timeline__item">
                <h3 className="timeline__title">University of Kelaniya</h3>
                <p className="timeline__blurb">
                  Bcs. (Hons) in Electronics and Computer Science
                </p>
              </div>

              <h2 className="timeline__item timeline__item--year">2022</h2>

              <div className="timeline__item">
                <h3 className="timeline__title">IBA Campus</h3>
                <p className="timeline__blurb">
                  Diploma in Information Technology
                </p>
              </div>

              <h2 className="timeline__item timeline__item--year">2020</h2>

              <div className="timeline__item">
                <h3 className="timeline__title">Dharmaraja College Kandy</h3>
                <p className="timeline__blurb">GCE AL , GCE OL</p>
              </div>

              <h2 className="timeline__item timeline__item--year">2006</h2>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
