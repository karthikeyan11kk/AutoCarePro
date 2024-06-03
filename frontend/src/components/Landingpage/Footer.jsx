import styles from "../../style";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "./info";


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[100px] h-[100px] object-contain"
        />
      <h1 className="font-poppins text-[25px] font-semibold text-yellowpro">
        AutoCare<span className="text-[18px]">Pro</span>
      </h1>
        <p className={`${styles.paragraph} mt-4 max-w-[412px] font-semibold`}>
        All you have to do is drive securely and steer you right with US!
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-yellowpro">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-semibold text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                    <p> {link.val}</p>
                  </li>
                ))}
              </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-semibold text-center text-[20px] leading-[27px] text-yellowpro">
        Copyright Ⓒ 2022 SnakeHub. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[30px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
