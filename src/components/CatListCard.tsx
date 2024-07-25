import { z } from "zod";
import { CatSchema } from "../hooks/useCatList";

type CatListCardProps = {
  cat: z.infer<typeof CatSchema>;
};

const CatListCard = ({ cat }: CatListCardProps) => {
  return (
    <div className="mb-8 text-center">
      <img
        className="object-cover rounded-md mb-1"
        src={cat.url}
        width={cat.width}
        height={cat.height}
      />

      <p className="text-lg">
        {cat.breeds.map((breed) => breed.name).join(", ")}
      </p>
    </div>
  );
};

export default CatListCard;
