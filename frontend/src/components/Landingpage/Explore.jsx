import { service } from "../../assets";
import { layout } from "../../style";
import { Exists1 } from "./info";

const Explore = () => (
  <section id="service" className={layout.sectionFunction}>
    <div className={`${layout.sectionInfo} py-5 ml-10`}>
      <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-yellowpro mb-5">
      EXPERIENCE THE DIFFERENCE AT Best Car Services
      </h1>
      <div className="flex flex-col space-y-6">
        {Exists1.map((stat) => (
          <div key={stat.id} className="flex flex-col space-y-2">
            <h2 className="font-poppins font-semibold xs:text-[20px] text-[18px] xs:leading-[26px] leading-[24px] text-yellowpro">
              {stat.title}
            </h2>
            <p className="font-poppins font-normal xs:text-[16px] text-[14px] xs:leading-[22px] leading-[20px] text-black">
              {stat.content}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={service} alt="dangerous species" className="w-[70%] h-[50%] object-cover" />
    </div>
  </section>
);

export default Explore;
