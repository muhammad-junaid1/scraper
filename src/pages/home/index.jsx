import { BiSearch } from "react-icons/bi";
import bgVideo from "../../assets/hero-bg.mp4";

const Home = () => {
  return (
    <div>
      <div className="h-[55vh] relative flex items-center justify-center">
        <video
          width={"100%"}
          height="100%"
          className="w-full h-full object-cover absolute top-0 left-0 -z-10"
          autoPlay
          loop
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="bg-black opacity-80 -z-5 absolute w-full h-full top-0 left-0"></div>
        <div className="w-[50%] flex relative justify-center">
          <BiSearch
            className="absolute"
            style={{
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
            }}
            size={20}
          />
          <input
            placeholder="Search here.."
            className="search-input w-full shadow-lg rounded-full py-2 pl-4"
            style={{ paddingRight: "50px" }}
            type="text"
          />
        </div>
      </div>

      <div className="px-12 py-5 bg-[#eeeeee]">
        <h1 className="font-bold" style={{ fontSize: "32px" }}>
          Explore
        </h1>
        <div className="grid grid-cols-4 gap-x-4 gap-y-6 mt-4">
          <div className="card py-4 px-5 flex justify-center shadow items-center flex-col rounded-2xl text-center text-black bg-[white] h-[200px]">
            <img
              className="rounded mx-auto"
              width={"40%"}
              src={
                "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/b0qzvaibzz5wfppzjzrn"
              }
              alt=""
            />
            <small>https://www.propertyfinder.com</small>
            <button className="buy-btn mt-3 w-full py-1 px-6 rounded text-black">
              Buy
            </button>
          </div>
  <div className="card py-4 px-5 flex justify-center shadow items-center flex-col rounded-2xl text-center text-black bg-[white] h-[200px]">
            <img
              className="rounded mx-auto"
              width={"40%"}
              src={
                "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/b0qzvaibzz5wfppzjzrn"
              }
              alt=""
            />
            <small>https://www.propertyfinder.com</small>
            <button className="buy-btn mt-3 w-full py-1 px-6 rounded text-black">
              Buy
            </button>
          </div>
            <div className="card py-4 px-5 flex justify-center shadow items-center flex-col rounded-2xl text-center text-black bg-[white] h-[200px]">
            <img
              className="rounded mx-auto"
              width={"40%"}
              src={
                "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/b0qzvaibzz5wfppzjzrn"
              }
              alt=""
            />
            <small>https://www.propertyfinder.com</small>
            <button className="buy-btn mt-3 w-full py-1 px-6 rounded text-black">
              Buy
            </button>
          </div>
            <div className="card py-4 px-5 flex justify-center shadow items-center flex-col rounded-2xl text-center text-black bg-[white] h-[200px]">
            <img
              className="rounded mx-auto"
              width={"40%"}
              src={
                "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/b0qzvaibzz5wfppzjzrn"
              }
              alt=""
            />
            <small>https://www.propertyfinder.com</small>
            <button className="buy-btn mt-3 w-full py-1 px-6 rounded text-black">
              Buy
            </button>
          </div>
            <div className="card py-4 px-5 flex justify-center shadow items-center flex-col rounded-2xl text-center text-black bg-[white] h-[200px]">
            <img
              className="rounded mx-auto"
              width={"40%"}
              src={
                "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/b0qzvaibzz5wfppzjzrn"
              }
              alt=""
            />
            <small>https://www.propertyfinder.com</small>
            <button className="buy-btn mt-3 w-full py-1 px-6 rounded text-black">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
