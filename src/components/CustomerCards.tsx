import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
export interface Product {
  title: string;
  description: string;
  url: string;
  serviceUrl: string;
  image: string;
}

const CustomerCards = ({
  title,
  description,
  url,
  serviceUrl,
  image
}: Product) => {
  return (
    <Card className="border-none flex w-full h-full flex-col gap-4 shadow-none">
      <div className="w-full relative">
        <Image
          width={600}
          height={100}
          alt={title}
          src={image}
          className="object-cover aspect-[6/4]  top-0 left-0"
        />
      </div>
      <Link href={serviceUrl} className="text-lg font-semibold hover:underline">
        {title}
      </Link>
      <span className="text-muted-foreground">
        {description}
      </span>
    </Card>
  );
};

export default CustomerCards;
