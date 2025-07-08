"use client";

import { ProductDetails } from "@/components/products/single-product/ProductDetails";
import { ProductGallery } from "@/components/products/single-product/ProductGallery";
import { ProductOverview } from "@/components/products/single-product/ProductOverview";
import { RelatedProducts } from "@/components/products/single-product/RelatedProduct";
import type React from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const productImages = [
  "/images/banner/banner_01.png",
  "/images/banner/banner_02.png",
  "/images/banner/banner_03.png",
  "/images/banner/banner_04.png",
  "/images/banner/banner_05.png",
  "/images/banner/iPad-air-8874.webp",
];

const relatedProducts = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    price: 199,
    image: "/images/banner/banner_01.png",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 299,
    image: "/images/banner/banner_02.png",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Bluetooth Speaker Max",
    price: 149,
    image: "/images/banner/banner_03.png",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Gaming Mouse Elite",
    price: 89,
    image: "/images/banner/banner_04.png",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 159,
    image: "/images/banner/banner_05.png",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 159,
    image: "/images/banner/banner_05.png",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 159,
    image: "/images/banner/banner_05.png",
    rating: 4.7,
  },
];

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Absolutely love this product! The quality is outstanding and it exceeded my expectations.",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great value for money. Fast shipping and excellent customer service.",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-08",
    comment:
      "Perfect! Exactly what I was looking for. Highly recommend to anyone.",
  },
];

const specifications = [
  { label: "Driver Size", value: "40mm" },
  { label: "Frequency Response", value: "20Hz - 20kHz" },
  { label: "Impedance", value: "32 Ohms" },
  { label: "Battery Life", value: "30 hours" },
  { label: "Charging Time", value: "2 hours" },
];

const features = [
  "Active Noise Cancellation",
  "Bluetooth 5.0 Connectivity",
  "Touch Controls",
  "Voice Assistant Support",
  "Foldable Design",
  "Premium Leather Ear Cups",
];

const whatInBox = [
  "Premium Wireless Headphones",
  "USB-C Charging Cable",
  "3.5mm Audio Cable",
  "Carrying Case",
  "Quick Start Guide",
  "Warranty Card",
];

export default function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [relatedProductsIndex, setRelatedProductsIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isLightboxAnimating, setIsLightboxAnimating] = useState(false);
  const [lightboxAnimationPhase, setLightboxAnimationPhase] = useState<
    "entering" | "entered" | "exiting" | "exited"
  >("exited");

  const [imageTransition, setImageTransition] = useState<
    "idle" | "sliding-left" | "sliding-right" | "fading"
  >("idle");
  const [nextImageIndex, setNextImageIndex] = useState(0);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    setLightboxAnimationPhase("entering");
    setIsLightboxAnimating(true);

    // Trigger the entered phase after a brief delay
    setTimeout(() => {
      setLightboxAnimationPhase("entered");
    }, 50);
  };

  const nextLightboxImage = () => {
    const newIndex = (lightboxImageIndex + 1) % productImages.length;
    setNextImageIndex(newIndex);
    setImageTransition("sliding-left");

    setTimeout(() => {
      setLightboxImageIndex(newIndex);
      setImageTransition("idle");
    }, 300);
  };

  const prevLightboxImage = () => {
    const newIndex =
      (lightboxImageIndex - 1 + productImages.length) % productImages.length;
    setNextImageIndex(newIndex);
    setImageTransition("sliding-right");

    setTimeout(() => {
      setLightboxImageIndex(newIndex);
      setImageTransition("idle");
    }, 300);
  };

  const goToLightboxImage = (index: number) => {
    if (index === lightboxImageIndex) return;

    setNextImageIndex(index);
    setImageTransition("fading");

    setTimeout(() => {
      setLightboxImageIndex(index);
      setImageTransition("idle");
    }, 200);
  };

  const nextRelatedProducts = () => {
    setRelatedProductsIndex((prev) =>
      Math.min(prev + 1, relatedProducts.length - 4)
    );
  };

  const prevRelatedProducts = () => {
    setRelatedProductsIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsZooming(true);
    }
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
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

  const closeLightbox = () => {
    setLightboxAnimationPhase("exiting");
    setTimeout(() => {
      setIsLightboxOpen(false);
      setLightboxAnimationPhase("exited");
      setIsLightboxAnimating(false);
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <ProductGallery
          images={productImages}
          productName="Premium Wireless Bluetooth Headphones"
        />

        {/* Product Overview */}
        <ProductOverview
          name="Premium Wireless Bluetooth Headphones"
          badge="Best Seller"
          rating={4.5}
          reviewCount={1234}
          price={199.99}
          originalPrice={249.99}
          discount={20}
          inStock={true}
          description="Experience premium sound quality with our latest wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day listening."
        />
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <ProductDetails
          specifications={specifications}
          features={features}
          reviews={reviews}
          averageRating={4.5}
          totalReviews={1234}
          ratingDistribution={{ 5: 70, 4: 20, 3: 5, 2: 3, 1: 2 }}
          whatInBox={whatInBox}
          careInstructions="Clean with a soft, dry cloth. Avoid exposure to extreme temperatures and moisture. Store in the provided carrying case when not in use."
          compatibility="Compatible with all Bluetooth-enabled devices including smartphones, tablets, laptops, and desktop computers. Also works with wired connection using the included 3.5mm cable."
        />
      </div>

      {/* Related Products Carousel */}
      <RelatedProducts products={relatedProducts} />

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-300 ease-out ${
            lightboxAnimationPhase === "entering"
              ? "bg-opacity-0"
              : lightboxAnimationPhase === "entered"
              ? "bg-opacity-90"
              : lightboxAnimationPhase === "exiting"
              ? "bg-opacity-0"
              : "bg-opacity-90"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div
            className={`relative max-w-4xl max-h-full p-4 transition-all duration-300 ease-out ${
              lightboxAnimationPhase === "entering"
                ? "scale-75 opacity-0 translate-y-8"
                : lightboxAnimationPhase === "entered"
                ? "scale-100 opacity-100 translate-y-0"
                : lightboxAnimationPhase === "exiting"
                ? "scale-75 opacity-0 translate-y-8"
                : "scale-100 opacity-100 translate-y-0"
            }`}
          >
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-200"
              onClick={closeLightbox}
            >
              <X className="w-4 h-4" />
            </Button>

            <div className="relative overflow-hidden rounded-lg">
              {/* Current Image */}
              <div
                className={`relative transition-all duration-300 ease-out ${
                  imageTransition === "sliding-left"
                    ? "transform translate-x-[-100%] opacity-0"
                    : imageTransition === "sliding-right"
                    ? "transform translate-x-[100%] opacity-0"
                    : imageTransition === "fading"
                    ? "opacity-0 scale-95"
                    : "transform translate-x-0 opacity-100 scale-100"
                }`}
              >
                <Image
                  src={productImages[lightboxImageIndex] || "/placeholder.svg"}
                  alt="Product image"
                  width={800}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              {/* Next Image (for slide transitions) */}
              {(imageTransition === "sliding-left" ||
                imageTransition === "sliding-right") && (
                <div
                  className={`absolute inset-0 transition-all duration-300 ease-out ${
                    imageTransition === "sliding-left"
                      ? "transform translate-x-0 opacity-100"
                      : imageTransition === "sliding-right"
                      ? "transform translate-x-0 opacity-100"
                      : "transform translate-x-[100%] opacity-0"
                  }`}
                  style={{
                    transform:
                      imageTransition === "sliding-left"
                        ? "translateX(100%)"
                        : imageTransition === "sliding-right"
                        ? "translateX(-100%)"
                        : "translateX(0)",
                    animation:
                      imageTransition !== "idle"
                        ? `slideIn${
                            imageTransition === "sliding-left"
                              ? "Left"
                              : "Right"
                          } 0.3s ease-out forwards`
                        : "none",
                  }}
                >
                  <Image
                    src={productImages[nextImageIndex] || "/placeholder.svg"}
                    alt="Product image"
                    width={800}
                    height={800}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                </div>
              )}

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-200 hover:scale-110"
                onClick={prevLightboxImage}
                disabled={imageTransition !== "idle"}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-200 hover:scale-110"
                onClick={nextLightboxImage}
                disabled={imageTransition !== "idle"}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div
              className={`flex justify-center gap-2 mt-4 transition-all duration-300 ease-out delay-100 ${
                lightboxAnimationPhase === "entering"
                  ? "opacity-0 translate-y-4"
                  : lightboxAnimationPhase === "entered"
                  ? "opacity-100 translate-y-0"
                  : lightboxAnimationPhase === "exiting"
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {productImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === lightboxImageIndex
                      ? "bg-white shadow-lg"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => goToLightboxImage(index)}
                  disabled={imageTransition !== "idle"}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape" && isLightboxOpen) {
            closeLightbox();
          }
        };

        if (isLightboxOpen) {
          document.addEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "hidden";
        }

        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "unset";
        };
      }, [isLightboxOpen])}
    </div>
  );
}
