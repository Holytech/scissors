import '../assets/css/style.css';
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-44 hero" id='hero'>
      <div className="">
        <h1 className="text-center text-[48px] font-semibold">
          Optimize Your Online Experience with Our
        </h1>
        <h1 className="text-center text-[48px] font-semibold">
          Advanced <span className="text-[#005AE2]">URL Shortening</span>{' '}
          Solution
        </h1>
      </div>
      <div className="mt-10">
        <p className="text-center font-medium text-[18px] leading-relaxed">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, <br />
          branded links, and domain customization options to reinforce your
          brand presence and <br />
          enhance user engagement.
        </p>
      </div>
      <div className="w-[20%] mt-20 flex justify-between">
        <Link to="/signup" className="rounded-full bg-[#005AE2] text-white text-xl font-semibold py-1 px-6">
          Sign Up
        </Link>
        <button className="rounded-full bg-none text-[#005AE2] text-xl font-semibold hover:border hover:border-[#005AE2] py-1 px-6">
          Learn More
        </button>
      </div>
      {/* <div className="mt-28 w-[50%] py-36 hero__inner">
        <p className="text-center font-medium">
          Seamlessly transform your long URLs into concise and shareable links
          with just few clicks.
        </p>
      </div> */}
    </div>
  );
};

export default Hero;
