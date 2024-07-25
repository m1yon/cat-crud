import useCatList from "../hooks/useCatList";
import CatListCard from "./CatListCard";

const CatList = () => {
  const catListQuery = useCatList();

  if (catListQuery.isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="max-w-96 mx-auto mt-12">
      {catListQuery.data?.map((cat) => (
        <CatListCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CatList;
