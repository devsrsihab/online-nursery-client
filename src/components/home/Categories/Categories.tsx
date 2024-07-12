import SectionTitle from "../../shared/SectionTitle";
import Category from "./Category";

const Categories = () => {
  return (
    <div id="categoriesSection" className="bg-white py-24">
      <SectionTitle
        firstText="Discover"
        highlightText="Breathtaking"
        lastText="Trees"
        detailsText="Elevate your garden with our stunning variety of trees, each one a testament to nature's splendor."
      />
      <div className="grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
