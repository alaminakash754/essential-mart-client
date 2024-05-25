import { Rating } from "@smastrom/react-rating";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const EachProductDetails = () => {
  const products = useLoaderData();
  console.log(products);
  const { name, title, image, price, productDetails, rating } = products;

  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-20">
        <div>
          <img
            className="rounded-t-md rounded-r-md border-4 border-gray-300 p-4 w-[500px] h-[350px]"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-4 mt-5">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h4 className="font-medium">{title}</h4>

          <h2 className="text-purple-700 text-2xl mt-5 font-bold">$ {price}</h2>
          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
          <h4 className="font-medium">{productDetails}</h4>
        </div>
      </div>
    </div>
  );
};

export default EachProductDetails;
