
import styles, { layout } from "../../style";
import { Species1, Species2, Species3 } from "./info";

const Quality = () => (
  <section className={`${layout.sectionReverse} mb-10`}>
    <div className={layout.sectionInfo}>
      <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-yellowpro">
      Quality Car Repair And Maintenance
      </h1>
      <div className="flex flex-col md:flex-row mt-10">
        {Species1.map((stat) => (
          <div key={stat.id} className="flex items-center m-3">
            <img src={stat.img} alt={stat.title} className="w-[50px] h-[50px]" />
            <p className={`${styles.paragraph}xs:text-[20px] text-[15px] xs:leading-[26px] leading-[10px] text-black mt-2 ml-4`}>
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Quality;
