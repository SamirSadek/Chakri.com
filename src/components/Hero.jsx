import Lottie from "lottie-react";
import hero from "../assets/hero.json"



const Hero = () => {
  return (
    <section className="text-gray-400 bg-orange-50 font-mono py-32 ">
      <div className=" max-w-7xl mx-auto  flex px-5  md:flex-row flex-col items-center  md:h-[50vh] ">
        <div className="lg:flex-grow flex-1 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-orange-500">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 ">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            
          </div>
        </div>
        <div className="flex-1">
        <Lottie animationData={hero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
