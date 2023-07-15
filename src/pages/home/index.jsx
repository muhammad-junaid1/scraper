import { BiSearch } from "react-icons/bi";
import bgVideo from "../../assets/hero-bg.mp4";

const Home = () => {
  return (
    <div className="mb-12">
    <div className="h-[55vh] relative flex items-center justify-center">
      <video width={"100%"} height="100%" className="w-full h-full object-cover absolute top-0 left-0 -z-10" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="bg-black opacity-80 -z-5 absolute w-full h-full top-0 left-0">
      </div>
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
            <h1 className="font-bold" style={{fontSize: "32px"}}>Explore</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="card p-3 rounded-2xl text-white bg-[#16644e] h-[200px]">
                    Card
            </div>
             <div className="card p-3 rounded-2xl text-white bg-[#16644e] h-[200px]">
                    Card
            </div>
             <div className="card p-3 rounded-2xl text-white bg-[#16644e] h-[200px]">
                    Card
            </div>
             <div className="card p-3 rounded-2xl text-white bg-[#16644e] h-[200px]">
                    Card
            </div>
             <div className="card p-3 rounded-2xl text-white bg-[#16644e] h-[200px]">
                    Card
            </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
