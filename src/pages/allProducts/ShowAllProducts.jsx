import { useState } from "react";
import useItemProducts from "../../Hooks/useItemProducts";
import AllProductCard from "./AllProductCard";
import Select from "react-select";

const ShowAllProducts = () => {
  const [products] = useItemProducts();
  const [searchCategory, setSearchCategory] = useState(null);

  const categories = Array.from(new Set(products.map((res) => res.category)));

  const categoryOption = categories.map((category) => ({
    value: category,
    label: category,
  }));
  const filterProducts = searchCategory
    ? products.filter((product) => product.category === searchCategory.value)
    : products;

  return (
    <section className="bg-slate-100">
      <div className=" w-1/2 my-10">
        <Select
          value={searchCategory}
          onChange={(selectOption) => setSearchCategory(selectOption)}
          options={categoryOption}
          placeholder="Select a category"
          isClearable
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mt-10">
        {filterProducts.map((item) => (
          <AllProductCard key={item._id} item={item}></AllProductCard>
        ))}
      </div>
    </section>
  );
};

export default ShowAllProducts;
