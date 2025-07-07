import styles from "./AboutMe.module.css";
import "../styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <section id="about" className="mt-2 py-20 h-screen">
      <div className="container mx-auto px-10 h-full">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto h-full">
          <div
            className={`${styles.box} ${styles.leftBox} hidden sm:flex flex-1 p-6 rounded-[6px] shadow-md`}
          >
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-white">My Journey</h3>
              <p className="text-white">
                I’m a passionate developer with a love for creating impactful
                web solutions. My journey started with a curiosity for code and
                has grown into a career of building user-focused applications.
              </p>
            </div>
          </div>
          <div
            className={`${styles.box} ${styles.middleBox} flex-1 p-6 rounded-[6px] shadow-md`}
          >
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-[#050228] mb-4">
                About Me
              </h3>
              <p className="text">
                I am an Electronics and Computer Science undergraduate at the University of Kelaniya, 
                passionate about combining technical expertise with creative problem-solving. 
                Throughout my academic journey, I’ve developed
                 strong problem-solving abilities and a versatile skill set that allows me to contribute
                  across various aspects of software development. I enjoy working on creating interactive user experiences, 
                  and building robust systems that deliver real value. I am always eager to learn, 
                  take on new challenges, and grow within the ever-evolving tech landscape. I welcome opportunities to 
                  connect with fellow innovators, tech enthusiasts, and industry professionals.
              </p>
            </div>
          </div>

          <div
            className={`${styles.box} ${styles.rightBox} flex-1 p-6 rounded-[6px] shadow-md`}
          >
            <div className="flex flex-coPl items-center text-center px-0">
              <div class="timeline">

                <h2 class="timeline__item timeline__item--year">Present</h2>

                <div class="timeline__item">
                  <h3 class="timeline__title">University of Kelaniya</h3>
                  <p class="timeline__blurb">
                    Bcs. (Hons) in Electronics and Computer Science 
                  </p>
                </div>

                <h2 class="timeline__item timeline__item--year">2022</h2>

                <div class="timeline__item">
                  <h3 class="timeline__title">IBA Campus</h3>
                  <p class="timeline__blurb">Diploma in Information Technology</p>
                </div>

                <h2 class="timeline__item timeline__item--year">2020</h2>

                <div class="timeline__item">
                  <h3 class="timeline__title">Dharmaraja College Kandy</h3>
                  <p class="timeline__blurb">
                    GCE AL , GCE OL 
                  </p>
                </div>

                <h2 class="timeline__item timeline__item--year">2006</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
