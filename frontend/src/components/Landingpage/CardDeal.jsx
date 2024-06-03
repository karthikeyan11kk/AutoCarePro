import styles from "../../style";
import { Link } from "react-router-dom";

const CardDeal = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col box-shadow rounded-[50px]`}>
    <div className="flex-1 flex flex-col">
     <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-yellowpro  xs:leading-[76.8px] leading-[66.8px] w-full">Book Your Slot</h2>
      <p className={`font-poppins font-normal text-black text-[18px] leading-[30.8px] w-full mt-2`}>
        Choose and book a seamless car service experience and get upto Rs 750 OFF.Offer Closes Soon !!
      </p>
      <Link
          to="/login"
          className="bg-yellowpro hover:bg-yellowprolight text-white font-bold mt-5 p-2 rounded text-center focus:outline-none focus:shadow-outline w-[150px]"
        >
          Book Now
        </Link>
    </div>
  </section>
);

export default CardDeal;
