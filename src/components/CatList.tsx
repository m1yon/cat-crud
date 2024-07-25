import { useState } from "react";
import useCatList from "../hooks/useCatList";
import CatListCard from "./CatListCard";

const CatList = () => {
  const { data, isLoading, isError, error } = useCatList();
  const [hiddenCats, setHiddenCats] = useState<string[]>([]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>error: {error.message}</p>;
  }

  const cats = data?.filter((cat) => !hiddenCats.includes(cat.id));

  return (
    <div className="max-w-96 mx-auto mt-12">
      {cats?.map((cat) => (
        <CatListCard
          key={cat.id}
          cat={cat}
          onDelete={() => setHiddenCats([...hiddenCats, cat.id])}
        />
      ))}
    </div>
  );
};

export default CatList;
