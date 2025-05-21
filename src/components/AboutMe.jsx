import '../styles/AboutMe.css';

const AboutMe = () => {

    return(
<div>
            <div className="flex flex-row w-full h-screen">
        
            <div className="w-1/6 bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb]">
            <p className="transform -rotate-90 text-2xl font-bold tracking-widest">
About Me        </p>
        </div>
        <div className="w-5/12 bg-amber-400">
         <p className="text-lg leading-relaxed">
    I'm a passionate Full-Stack Developer with a strong interest in building engaging digital experiences.
    I specialize in JavaScript, React, and Node.js, and I'm always eager to learn new technologies and improve
    my craft. Whether it's designing clean UI or building efficient backend systems, I love turning ideas into
    real-world applications.
  </p></div>
        <div className="w-5/12 bg-amber-800"></div>

        
        </div>
</div>
    )
}

export default AboutMe;