const FeedbackCard = ({ name, title, img }) => (
  <div className="flex justify-center px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-full h-full" />
    </div>
  </div>
);

export default FeedbackCard;
