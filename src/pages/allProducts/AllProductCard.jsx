import { Link } from "react-router-dom";

const AllProductCard = ({ item }) => {
  const { name, image, category, _id, price } = item;
  return (
    <Link to={`/productDetails/${_id}`}>
      <div className="rounded-lg">
        <div className="bg-white space-y-3 text-center rounded-lg">
          <img
            className=" w-full h-[300px] rounded-t-md rounded-r-md"
            src={image}
            alt=""
          />
          <h1 className="text-center text-2xl font-bold">{name}</h1>
          <h1 className="text-center text-2xl font-bold">Price: {price}</h1>
          <h3 className="mt-3 text-center text-base font-semibold pb-2">
            Category: {category}
          </h3>
          <button className="bg-purple-100 text-lg text-purple-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2">
            Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AllProductCard;
