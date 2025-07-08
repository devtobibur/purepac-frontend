"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
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
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    setLightboxAnimationPhase("entering");

    setTimeout(() => {
      setLightboxAnimationPhase("entered");
    }, 50);
  };

  const closeLightbox = () => {
    setLightboxAnimationPhase("exiting");
    setTimeout(() => {
      setIsLightboxOpen(false);
      setLightboxAnimationPhase("exited");
    }, 300);
  };

  const nextLightboxImage = () => {
    const newIndex = (lightboxImageIndex + 1) % images.length;
    setNextImageIndex(newIndex);
    setImageTransition("sliding-left");

    setTimeout(() => {
      setLightboxImageIndex(newIndex);
      setImageTransition("idle");
    }, 300);
  };

  const prevLightboxImage = () => {
    const newIndex = (lightboxImageIndex - 1 + images.length) % images.length;
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

  useEffect(() => {
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
  }, [isLightboxOpen]);

  return (
    <>
      <div className="flex gap-x-2">
        {/* Thumbnails - Left Side */}
        <div className="flex flex-col gap-2 w-20 flex-shrink-0 relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-20 h-20 cursor-pointer border rounded-lg overflow-hidden ${
                index === currentImageIndex
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - Thumbnail ${index + 1}`}
                width={80}
                height={80}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main Image - Right Side */}
        <div className="flex-1 relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
          <div
            className="relative w-full h-full cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => openLightbox(currentImageIndex)}
          >
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${productName} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-200"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={prevImage}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={nextImage}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className={`fixed inset-0 bg-black/95 z-50 flex items-center justify-center transition-all duration-300 ease-out ${
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
                  src={images[lightboxImageIndex] || "/placeholder.svg"}
                  alt={`${productName} - Image ${lightboxImageIndex + 1}`}
                  width={800}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              {/* Next Image (for slide transitions) */}
              {(imageTransition === "sliding-left" ||
                imageTransition === "sliding-right") && (
                <div
                  className={`absolute inset-0 transition-all duration-300 ease-out`}
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
                    src={images[nextImageIndex] || "/placeholder.svg"}
                    alt={`${productName} - Image ${nextImageIndex + 1}`}
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
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${
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
    </>
  );
}
