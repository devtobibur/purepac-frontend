import { HeadingPrimary } from "@/components/common/heading-primary";
import CategoriesList from "./CategoriesList";

const CategoriesSection = () => {
  return (
    <section className="md:py-10 py-5 bg-gray-50">
      <div className="container mx-auto">
        <CategoriesList endpoint="categories">
          <HeadingPrimary
            title="FEATURED CATEGORIES"
            subtitle="Get your desired product from featured category"
            className="mb-8"
          />
        </CategoriesList>
      </div>
    </section>
  );
};

export default CategoriesSection;
