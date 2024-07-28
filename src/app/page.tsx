"use client";

import { useEffect, useState } from "react";
import PhotographerCard from "@/components/PhotographerCard";

type Photographer = {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

export default function Home() {
  const [photographers, setPhotographers] = useState<Photographer[]>([]);

  useEffect(() => {
    fetch("/api/photographers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPhotographers(data))
      .catch((error) => console.error("Error fetching photographers:", error));
  }, []);

  return (
    <div
      id="main"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20"
    >
      {photographers.map((photographer) => (
        <PhotographerCard key={photographer.id} photographer={photographer} />
      ))}
    </div>
  );
}
