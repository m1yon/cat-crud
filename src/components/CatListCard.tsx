import { z } from "zod";
import { CatSchema } from "../hooks/useCatList";

type CatListCardProps = {
  cat: z.infer<typeof CatSchema>;
  onDelete: () => void;
};

const CatListCard = ({ cat, onDelete }: CatListCardProps) => {
  return (
    <div className="mb-8 text-center relative">
      <img
        className="object-cover rounded-md mb-1"
        src={cat.url}
        width={cat.width}
        height={cat.height}
      />

      <p className="text-lg">
        {cat.breeds.map((breed) => breed.name).join(", ")}
      </p>

      <div className="p-0.5 bg-white shadow-lg absolute top-4 right-4 leading-none rounded-full">
        <button className="size-6" onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CatListCard;
