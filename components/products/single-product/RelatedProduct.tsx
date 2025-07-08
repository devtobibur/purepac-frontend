"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
  title?: string;
}

export function RelatedProducts({
  products,
  title = "Related Products",
}: RelatedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextProducts = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, products.length - itemsPerView)
    );
  };

  const prevProducts = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevProducts}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextProducts}
            disabled={currentIndex >= products.length - itemsPerView}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex-shrink-0 w-1/4 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <h3 className="font-medium mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600">
                    ({product.rating})
                  </span>
                </div>
                <p className="font-bold text-lg text-gray-900">
                  ${product.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile dots indicator */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {Array.from(
          { length: Math.ceil(products.length / itemsPerView) },
          (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === Math.floor(currentIndex / itemsPerView)
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index * itemsPerView)}
            />
          )
        )}
      </div>
    </div>
  );
}
