import "../styles/AboutMe.css";
import "../styles/AboutMe.scss";


const AboutMe = () => {
  return (
    <div>

      <div className="w-full h-screen">
        <div className="h-20"></div>
<div className="flex flex-row h-full">
        <div className="w-1/6 "></div>


        <div className="w-5/12 bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] p-6 flex items-center">
  <p
      className="text-lg leading-relaxed text-[#2e2e2e]"
      style={{
      fontFamily: 'Courgette, cursive',
      fontSize: '1.25rem',
      lineHeight: '2rem',
      color: '#333',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.05)',
      textAlign: 'Center'
    }}
  >
    <span className="text-4xl">Blending technology with design </span> <br/> <span className="text-3xl">is where I find my true passion </span><br/><br/><br/> creating elegant,
    user-friendly digital experiences that are both functional and beautiful. I thrive on
    solving complex problems through clean, efficient code and intuitive, thoughtful visuals.
  </p>
</div>

        <div className="w-5/12 bg-[#1e041b]">

        
        <div class="timeline">
  
  <h2 class="timeline__item timeline__item--year">Present</h2>
  
  <div class="timeline__item">
    <h3 class="timeline__title">University of Kelaniya</h3>
  </div>
  
  <h2 class="timeline__item timeline__item--year">2022</h2>
  
  <div class="timeline__item">
    <h3 class="timeline__title">IBA Campus</h3>
  </div>
  
  <h2 class="timeline__item timeline__item--year">2020</h2>
  
  <div class="timeline__item">
    <h3 class="timeline__title">Dharmaraja College, Kandy</h3>
  </div>

    <h2 class="timeline__item timeline__item--year">2006</h2>



        </div>
        
        </div>
      </div>
    </div></div>
  );
};

export default AboutMe;
