import "../styles/AboutMe.css";
import "../styles/AboutMe.scss";


const AboutMe = () => {
  return (
    <div>

      <div className="w-full h-screen">
        <div className="h-20"></div>
<div className="flex flex-row h-full">
        <div className="w-1/6 "></div>


        <div className="w-5/12 bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb] p-6 flex items-center">
  <p
    className="text-lg leading-relaxed text-[#2e2e2e]"
    style={{
      fontFamily: 'Courgette, cursive',
      fontSize: '1.25rem',
      lineHeight: '2rem',
      color: '#333',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.05)'
    }}
  >
    Blending technology with design is where I find my true passion — creating elegant,
    user-friendly digital experiences that are both functional and beautiful. I thrive on
    solving complex problems through clean, efficient code and intuitive, thoughtful visuals.
  </p>
</div>

        <div className="w-5/12 bg-black">

        
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
