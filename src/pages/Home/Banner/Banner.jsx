import { useState } from "react";
import banner from "../../../assets/banner.jpg";
import useItemProducts from "../../../Hooks/useItemProducts";
import AllProductCard from "../../allProducts/AllProductCard";

const Banner = () => {
  const [products] = useItemProducts();
  const [searchName, setSearchName] = useState("");
  return (
    <div>
      <div className="bg-yellow-100 w-full h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="text-center items-center mx-auto  w-full">
            <h4 className="font-medium text-2xl mb-2">---SALE FEVER---</h4>
            <h1 className="text-5xl font-bold">
              Purchase TK 200 or <br /> above & get
              <span className="text-yellow-500"> 20% off</span>
            </h1>
            <div className="flex lg:ml-44 md:ml-60 gap-4 items-center mt-5">
              <form className="mr-20">
                <input
                  onChange={(e) => setSearchName(e.target.value)}
                  className="outline-double outline-purple-700 rounded-lg p-2 w-full ml-5"
                  type="text"
                  placeholder="Search by Name"
                />
              </form>
            </div>
          </div>
          <div>
            <img className=" w-full h-screen" src={banner} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mt-10">
          {products
            .filter((product) => {
              return searchName.toLowerCase() === ""
                ? product
                : product.name.toLowerCase().includes(searchName);
            })

            .map((item) => (
              <AllProductCard key={item._id} item={item}></AllProductCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
