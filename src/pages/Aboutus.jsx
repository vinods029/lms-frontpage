import aboutMainImage from "../assets/Images/aboutMainImage.png";
import apj from "../assets/Images/apj.png";
import billGates from "../assets/Images/billGates.png";
import nelsonMandela from "../assets/Images/nelsonMandela.png";
import steveJobs from "../assets/Images/steveJobs.png";
import HomeLayout from "../layouts/HomeLayout";

function Aboutus() {
  return (
    <HomeLayout>
      <div className=" bg-gray-700 flex flex-col text-white pl-20 pt-20">
        <div className=" flex   flex-row items-center gap-5 mx-10 ">
          <section className=" w-1/2 space-y-10 ">
            <h1 className=" text-5xl text-yellow-500 font-semibold ">
              Affordable and quality education
            </h1>
            <p className=" text-xl text-gray-200 ">
              Our goal is to provide the affordable and quality eductaion to the
              world. we are providing the plateform for the aspiring teachers
              and students to share their skills , creativity and knowledge to
              each other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className=" w-1/2 ">
            <img
              src={aboutMainImage}
              className=" drop-shadow-2xl "
              alt="about main page"
              id="test1"
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-10 mx-auto ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={apj}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p className="text-xl text-gray-200">
                If you fail, never give up because FAIL means{" "}
              </p>
              <h3 className="text-2xl font-semibold ">APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={steveJobs}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p className="text-xl text-gray-200">
                Innovation distinguishes between a leader and a follower.{" "}
              </p>
              <h3 className="text-2xl font-semibold ">Steve Jobs</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={billGates}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p className="text-xl text-gray-200">
                The belief that the world is getting worse, that we can't solve
                extreme poverty and disease, isn't just mistaken{" "}
              </p>
              <h3 className="text-2xl font-semibold ">Bill Gates</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={nelsonMandela}
                className="w-40 rounded-full border-2 border-gray-400 "
              />
              <p className="text-xl text-gray-200">
                Education is the most powerful weapon which you can use to
                change the world.
              </p>
              <h3 className="text-2xl font-semibold ">Nelson Mandela</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Aboutus;
