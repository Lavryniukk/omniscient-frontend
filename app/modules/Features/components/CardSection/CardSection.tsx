import { BsGear } from "react-icons/bs";
import Image from "next/image";
let CardSection = () => {
  return (
    // <div className="box-border grid lg:features w-3/4 lg:w-full xl:w-7/12 mx-auto grid-cols-1 gap-2 px-10 h-fit md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
    //   <div className="lg:features-container--1 features-container"></div>
    //   <div className="lg:features-container--2 features-container">
    //     <div className="w-8/12 border-accent">
    //       <h2 className="font-roboto  text-3xl text-text-300">
    //         Customizable learning path
    //       </h2>
    //       <p className="mt-5  text-base text-accent font-light font-roboto border-accent text">
    //         Pro plan allowes you to add custom-made technologies to your
    //         learning path.
    //       </p>
    //     </div>
    //     <BsGear
    //       size={"40%"}
    //       className="text-accent opacity-80 animate-spin-slow "
    //     />
    //   </div>
    //   <div className="lg:features-container--3 features-container">
    //     <div className="border-accent">
    //       <h2 className="font-roboto text-3xl text-text">
    //         Flexible learning path
    //       </h2>
    //     </div>
    //   </div>
    //   <div className="lg:features-container--4 features-container"></div>
    //   <div className="lg:features-container--5 features-container"></div>
    //   <div className="lg:features-container--6 features-container"></div>
    // </div>
    <div className=" max-w-[1200px] h-fit flex items-start  justify-center gap-5  mx-auto">
      <div className="flex gap-5 flex-col">
        <div className="features-container h-fit p-6">
          <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
            We provide a strong foundation
          </p>
          <Image
            alt="foundation"
            className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
            src="/images/features-foundation.png"
            width={300}
            height={300}
          />
        </div>
        <div className="features-container h-52"></div>

        <div className="features-container h-52"></div>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="features-container h-52"></div>

        <div className="features-container h-fit p-6">
          <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
            Any topic, anytime. Dive in.
          </p>
          <Image
            alt="foundation"
            className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
            src="/images/features-range.png"
            width={300}
            height={300}
          />
        </div>
        <div className="features-container h-52"></div>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="features-container h-52"></div>
        <div className="features-container h-fit p-6">
          <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
            Access to Artificial Mentor
          </p>
          <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
            We provide a virtual mentor for personalized guidance, feedback, and
            support throughout the learning journey.
          </p>
        </div>
        <div className="features-container h-fit p-6">
          <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
            Real-world Application
          </p>
          <Image
            alt="foundation"
            className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
            src="/images/features-practical.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
