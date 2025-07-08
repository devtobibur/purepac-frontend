import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrencyEnglish } from "@/lib/utils";
import { getBlurData } from "@/utils/blur-generator";
import type { Product } from "@/utils/types";
import { DiscountType } from "@/utils/types";
import { Weight } from "lucide-react"; // Import weight icon
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "../cart/add-to-cart-button";

export default async function ProductCard({ product }: { product: Product }) {
  const { base64 } = await getBlurData(product?.attachment?.url);

  console.log("product", product);

  const isDiscountActive =
    product.discountType &&
    product.discountValue &&
    product.discountStartDate &&
    product.discountEndDate &&
    new Date() >= new Date(product.discountStartDate) &&
    new Date() <= new Date(product.discountEndDate);

  const discountedPrice =
    isDiscountActive && product.discountType && product.discountValue
      ? product.discountType === DiscountType.PERCENTAGE
        ? product.sellingPrice -
          product.sellingPrice * (product.discountValue / 100)
        : product.sellingPrice - (product.discountValue || 0)
      : null;

  return (
    <div className="relative group text-center transition-all duration-300 bg-white bg-opacity-25 p-4 sm:p-3 flex flex-col justify-between items-center min-h-[280px] xs:min-h-[300px] sm:min-h-[320px] md:min-h-[340px] border border-gray-100">
      <Link
        href={`/products/${product.id}`}
        className="flex flex-col justify-between items-center w-full h-full"
      >
        {/* Image Container */}
        <div className="w-[120px] h-[120px] xs:w-[140px] xs:h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] relative my-2 sm:my-3">
          {/* Default Image */}
          {product?.attachment?.url && (
            <Image
              src={product.attachment.url}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
              className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              priority={false}
              blurDataURL={base64}
              placeholder="blur"
            />
          )}

          {/* Hover Image */}
          {/* {product?.gallery.attachments.length > 0 && (
            <Image
              src={product.gallery.attachments[0].url}
              alt={`${product.name} hover`}
              fill
              sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
              className="object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
              priority={false}
              blurDataURL={base64}
              placeholder="blur"
            />
          )} */}
        </div>

        {/* Stock Badge */}
        {product?.stock === 0 && (
          <Badge
            variant="destructive"
            className="absolute rounded-none top-2 right-0 text-[10px] sm:text-xs"
          >
            Out of Stock
          </Badge>
        )}

        {/* Discount Badge */}
        {isDiscountActive && product.discountType && product.discountValue && (
          <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600 text-[10px] sm:text-xs">
            {product.discountType === DiscountType.PERCENTAGE
              ? `${product.discountValue}% Off`
              : ` Save ${formatCurrencyEnglish(product.discountValue)} `}
          </Badge>
        )}

        {/* Product Name */}
        <p className="font-semibold text-xs sm:text-sm mt-4 sm:mt-5 px-2 line-clamp-2 flex items-center">
          {product.name}
        </p>

        {/* Weight Display - Added this section */}
        {product.weight && product.weight > 0 && (
          <div className="flex items-center justify-center text-xs text-muted-foreground mt-1">
            <Weight className="w-3 h-3 mr-1" />
            {`${product.weight} kg`}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-center my-2 sm:my-2 md:flex-row flex-col">
          {discountedPrice ? (
            <>
              <p className="font-semibold text-sm sm:text-md text-primary transition-colors">
                {formatCurrencyEnglish(discountedPrice)}
              </p>
              <p className="font-medium ml-2 text-[10px] sm:text-xs text-gray-500 line-through">
                {formatCurrencyEnglish(product.sellingPrice)}
              </p>
            </>
          ) : (
            <p className="font-semibold text-sm sm:text-md group-hover:text-primary transition-colors">
              {formatCurrencyEnglish(product.sellingPrice)}
            </p>
          )}
        </div>
      </Link>

      {/* Action Buttons */}
      {product?.stock ? (
        <div className="grid md:grid-cols-2 w-full mt-3 sm:mt-4">
          <Link className="md:block hidden" href={`/products/${product.id}`}>
            <Button
              size="lg"
              className="font-semibold text-[10px] xs:text-xs sm:text-sm bg-primary hover:bg-primary/90 rounded-none h-8 xs:h-7 sm:h-8 cursor-pointer"
            >
              Buy Now
            </Button>
          </Link>
          <AddToCartButton product={product} />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 w-full mt-3 sm:mt-4">
          <Link href={`/products/${product.id}`}>
            <Button
              size="lg"
              className="font-semibold text-[10px] xs:text-xs sm:text-sm bg-primary hover:bg-primary/90 rounded-none h-8 xs:h-7 sm:h-8 cursor-pointer"
            >
              Pre Book
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
