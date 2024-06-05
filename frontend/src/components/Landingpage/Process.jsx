import { features } from "./info";
import styles, { layout } from "../../style";

const FeatureCard = ({ title, content, index }) => (
  <div className={`flex flex-col p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="flex flex-col m-5">
      <h4 className="font-poppins font-semibold text-yellowpro text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-medium text-black text-[16px] leading-[24px] w-full">
        {content}
      </p>
    </div>
  </div>
);

const Process = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className={`${layout.sectionInfo} relative `}>
      <h2 className={`${styles.heading2}`}>
      Your Vehicle in Pristine Condition
      </h2>
      <p className={`${styles.paragraph} max-w-[770px] mt-5 font-medium `}>
      Our car cleaning services are performed by skilled professionals using high-quality products, ensuring that your vehicle receives the care it deserves, both inside and out.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-row p-10 m-5`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Process;
