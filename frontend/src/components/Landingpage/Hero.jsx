import styles from "../../style";
import {Homelogo} from "../../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} w-full`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-2`}>
        <div className="flex flex-row items-center py-[4px] px-2 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2 text-white`}>
            WELCOME TO
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="flex-1 font-poppins font-semibold ss:text-[70px] text-[50px] text-yellowpro ss:leading-[70px] leading-[55px]">
            AutoCarePro<br className="sm:block hidden" />{" "}
            <span className="text-black text-[30px]">Your Premium Car Service Experts!</span>{" "}
          </h3>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Homelogo} alt="logo" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[1] w-[20%] h-[25%] top-0 orange__gradient" />
        <div className="absolute z-[1] w-[50%] h-[50%] orange__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 orange__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
