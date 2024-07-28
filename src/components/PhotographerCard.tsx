import Image from "next/image";
import { Card, Text, Badge, Quote, Heading } from "@radix-ui/themes";
import Link from "next/link";

type Photographer = {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

const PhotographerCard = ({ photographer }: { photographer: Photographer }) => {
  return (
    <Link
      href={`/photographer/${photographer.id}`}
      className="text-center block h-full"
      aria-label={`Lien vers la page de ${photographer.name}`}
    >
      <Card className="flex flex-col items-center p-0 h-full">
        <div className="relative w-full h-56">
          <Image
            src={
              require(`@/app/data/photographers/${photographer.portrait}`)
                .default
            }
            alt={`Photo de ${photographer.name}`}
            layout="fill"
            objectFit="cover"
            style={{
              backgroundColor: "var(--gray-5)",
            }}
          />
          <Badge variant="surface" className="absolute top-2 left-2 px-2 py-1">
            {photographer.price}€/jour
          </Badge>
        </div>
        <Text className="flex flex-col text-center mt-4 grow">
          <Heading as="h3" size="3">
            {photographer.city}, {photographer.country}
          </Heading>
          <Quote className="text-base">{photographer.tagline}</Quote>
        </Text>
      </Card>
    </Link>
  );
};

export default PhotographerCard;
