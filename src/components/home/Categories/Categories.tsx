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
        <Category
          name="Hibiscus"
          image="https://i.ibb.co/XV2ZLkF/Coreopsis-Moon.webp"
        />
        <Category
          name="Hosta"
          image="https://i.ibb.co/DWWNBgm/Dianthus-Fire.webp"
        />
        <Category
          name="Lavender"
          image="https://i.ibb.co/thQm4JV/Echinacea-Lakota.webp"
        />
        <Category
          name="Grass"
          image="https://i.ibb.co/qrhJzVc/Geranium-Rozann.webp"
        />
        <Category
          name="Daylily"
          image="https://i.ibb.co/PgBSfmX/Ajuga-reptans.webp"
        />
        <Category
          name="Clematis"
          image="https://i.ibb.co/xmpkdFb/American-Gold-Rush-Black.webp"
        />
        <Category
          name="Rose"
          image="https://i.ibb.co/JdcVJGq/Astilbe-Visions.webp"
        />
        <Category
          name="Peony"
          image="https://i.ibb.co/FJmQ8mv/Catmint-Cats.webp"
        />
      </div>
    </div>
  );
};

export default Categories;
