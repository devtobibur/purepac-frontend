"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Star } from "lucide-react";

interface Specification {
  label: string;
  value: string;
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface ProductDetailsProps {
  specifications: Specification[];
  features: string[];
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  ratingDistribution: { [key: number]: number };
  videoUrl?: string;
  whatInBox: string[];
  careInstructions: string;
  compatibility: string;
}

export function ProductDetails({
  specifications,
  features,
  reviews,
  averageRating,
  totalReviews,
  ratingDistribution,
  videoUrl,
  whatInBox,
  careInstructions,
  compatibility,
}: ProductDetailsProps) {
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
    <div className="w-full">
      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
          <TabsTrigger value="more">More Info</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">
                    Technical Specifications
                  </h3>
                  <dl className="space-y-2">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between">
                        <dt className="text-gray-600">{spec.label}:</dt>
                        <dd className="font-medium">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    {features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold">{averageRating}</div>
                  <div>
                    <div className="flex items-center mb-1">
                      {renderStars(averageRating)}
                    </div>
                    <p className="text-sm text-gray-600">
                      Based on {totalReviews.toLocaleString()} reviews
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="text-sm w-8">{stars}</span>
                      <Star className="w-4 h-4 text-yellow-400" />
                      <Progress
                        value={ratingDistribution[stars] || 0}
                        className="flex-1"
                      />
                      <span className="text-sm text-gray-600 w-12">
                        {ratingDistribution[stars] || 0}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage
                          src={review.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium">{review.name}</h4>
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="video" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Button variant="outline" size="lg">
                  <Play className="w-6 h-6 mr-2" />
                  Play Product Demo
                </Button>
              </div>
              <h3 className="font-semibold mb-2">Product Demonstration</h3>
              <p className="text-gray-600">
                Watch our comprehensive product demonstration to see all the
                features and capabilities in action.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="more" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What's in the Box</h3>
                  <ul className="text-gray-600 space-y-1">
                    {whatInBox.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Care Instructions</h3>
                  <p className="text-gray-600">{careInstructions}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Compatibility</h3>
                  <p className="text-gray-600">{compatibility}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
