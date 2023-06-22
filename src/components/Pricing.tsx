import CheckedCircle from '../assets/vectors/CheckedCircle';
import CheckedCircleLight from '../assets/vectors/CheckedCircleLight';
const Pricing = () => {
  return (
    <div className="w-full py-12 px-36">
      <div className="mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">
          A <span className="text-[#005AE2]">price perfect</span> for your
          needs.
        </h1>
        <p className="w-[40%] mx-auto">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-12">
        <div className="border border-[#005AE2] rounded-lg w-[25%] py-10 flex justify-center items-center h-fit">
          <div className="">
            <h1 className="text-xl">Basic</h1>
            <h1 className="text-5xl font-bold mt-5">Free</h1>
            <p className="mt-3">Free plan for all users</p>
            <ul className="list-none mt-6">
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Unlimited URL Shortening
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Basic Link Analytics
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Customizable Short Links
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Standard Support
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Ad-supported
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-[#005AE2] rounded-lg w-[25%] py-20 flex justify-center items-center bg-[#1E3448] text-white">
          <div className="">
            <h1 className="text-xl">Professional </h1>
            <h1 className="text-5xl font-bold mt-5">$15/month</h1>
            <p className="mt-3">Ideal for business creators</p>
            <ul className="list-none mt-6">
              <li className="flex flex-row items-center mt-8">
                <CheckedCircleLight />
                &nbsp; Unlimited URL Shortening
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircleLight />
                &nbsp; Basic Link Analytics
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircleLight />
                &nbsp; Customizable Short Links
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircleLight />
                &nbsp; Standard Support
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircleLight />
                &nbsp; Ad-supported
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-[#005AE2] rounded-lg w-[25%] py-10 flex justify-center items-center h-fit">
          <div className="">
            <h1 className="text-xl">Basic</h1>
            <h1 className="text-5xl font-bold mt-5">Free</h1>
            <p className="mt-3">Free plan for all users</p>
            <ul className="list-none mt-6">
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Unlimited URL Shortening
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Basic Link Analytics
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Customizable Short Links
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Standard Support
              </li>
              <li className="flex flex-row items-center mt-8">
                <CheckedCircle />
                &nbsp; Ad-supported
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full my-16'>
        <button className='rounded-full bg-[#005AE2] text-white py-3 px-6'>Select Pricing</button>
      </div>
    </div>
  );
};

export default Pricing;
