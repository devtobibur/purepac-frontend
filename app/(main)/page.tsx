import { HeadingPrimary } from "@/components/common/heading-primary";
import BrandList from "@/components/homepage/brands/brand-list";
import CategoriesSection from "@/components/homepage/section/category-section/CategoriesSection";
import HeroSection from "@/components/homepage/section/hero-section/HeroSection";
import ProductList from "@/components/products/product-list";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* Categories Section */}
      <CategoriesSection />
      {/* Best Selling Products Section */}
      <section className="md:py-10 py-5">
        <div className="container mx-auto ">
          <ProductList endpoint="products">
            <HeadingPrimary
              title="BEST SELLERS"
              subtitle="Top products loved by our customers"
              className="mb-8"
              titleClassName="text-red-600" // Add emphasis to best sellers
            />
          </ProductList>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="md:py-10 py-5 bg-gray-50">
        <div className="container mx-auto ">
          <ProductList endpoint="products">
            <HeadingPrimary
              title="FEATURED PRODUCTS"
              subtitle="Discover our most popular items"
              className="mb-8"
            />
          </ProductList>
        </div>
      </section>

      {/* Brands Section */}
      <section className="md:py-10 py-5">
        <div className="container mx-auto ">
          <BrandList endpoint="brands">
            <HeadingPrimary
              title="OUR BRANDS"
              subtitle="Shop from trusted brands you love"
              className="mb-8"
            />
          </BrandList>
        </div>
      </section>

      <section className="md:py-10 py-5 bg-gray-50">
        <div className="container mx-auto ">
          <ProductList endpoint="products/discounted?page=1&limit=20">
            <HeadingPrimary
              title="SPECIAL OFFERS"
              subtitle="Limited-time deals just for you"
              className="mb-8"
              titleClassName="text-green-600"
            />
          </ProductList>
        </div>
      </section>
    </main>
  );
}
