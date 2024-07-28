import { fetchPhotographerData, fetchMediaData } from "@/lib/fetchData";
import Image from "next/image";

type Photographer = {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

type Media = {
  name: string;
  type: string;
  url: string;
};

interface Props {
  params: { id: string };
}

export default async function PhotographerPage({ params }: Props) {
  const { id } = params;
  const photographer = await fetchPhotographerData(id);
  const medias = await fetchMediaData(id);

  if (!photographer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-dm-sans">
      <main
        id="main"
        aria-hidden="false"
        className="photographer_section flex justify-center flex-wrap gap-8 my-20"
      >
        <div className="text-center">
          <h1 className="text-red-700">{photographer.name}</h1>
          <p className="text-custom-gray">{photographer.tagline}</p>
          <p>
            {photographer.city}, {photographer.country}
          </p>
          <p>{photographer.price}€/jour</p>
          <Image
            src={`/app/data/photographers/${photographer.portrait}`}
            alt={photographer.name}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <div className="media_section flex flex-wrap justify-center gap-4 mt-8">
          {medias.map((media, index) => (
            <div key={index} className="media_item">
              {media.type === "image" ? (
                <Image
                  src={media.url}
                  alt={media.name}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              ) : (
                <video controls width="300" className="rounded-lg">
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
