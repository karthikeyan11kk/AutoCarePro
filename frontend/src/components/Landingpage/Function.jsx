import { features } from "./info";
import styles, { layout } from "../../style";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-yellowpro text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-medium text-black text-[16px] leading-[24px] w-full">
        {content}
      </p>
    </div>
  </div>
);

const Function = () =>  (
  <section id="about" className={layout.section}>
    <div className={`${layout.sectionInfo} relative`}>
      <h2 className={`${styles.heading2}`}>
      Your Vehicle in Pristine Condition
      </h2>
      <p className={`${styles.paragraph} max-w-[770px] mt-5 font-medium `}>
      Our car cleaning services are performed by skilled professionals using high-quality products, ensuring that your vehicle receives the care it deserves, both inside and out.
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col p-10`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Function;
