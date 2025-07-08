"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

interface ProductOverviewProps {
  name: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  inStock: boolean;
  description: string;
}

export function ProductOverview({
  name,
  badge,
  rating,
  reviewCount,
  price,
  originalPrice,
  discount,
  inStock,
  description,
}: ProductOverviewProps) {
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
    <div className="space-y-6">
      <div>
        {badge && (
          <Badge variant="secondary" className="mb-2">
            {badge}
          </Badge>
        )}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">{renderStars(rating)}</div>
          <span className="text-sm text-gray-600">({rating})</span>
          <span className="text-sm text-gray-600">•</span>
          <span className="text-sm text-gray-600">
            {reviewCount.toLocaleString()} reviews
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-xl text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {discount && <Badge variant="destructive">{discount}% OFF</Badge>}
        </div>
        <p className={`text-sm ${inStock ? "text-green-600" : "text-red-600"}`}>
          {inStock ? "In stock - Ready to ship" : "Out of stock"}
        </p>
      </div>

      <p className="text-gray-600 leading-relaxed">{description}</p>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button size="lg" className="flex-1" disabled={!inStock}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            {inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
          <Button variant="outline" size="lg">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          disabled={!inStock}
        >
          Buy Now
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">Free Shipping</p>
            <p className="text-xs text-gray-500">Orders over $50</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">2 Year Warranty</p>
            <p className="text-xs text-gray-500">Full coverage</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">30-Day Returns</p>
            <p className="text-xs text-gray-500">No questions asked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
