import useCatList from "../hooks/useCatList";

const CatList = () => {
  const catListQuery = useCatList();

  if (catListQuery.isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="max-w-96 mx-auto mt-12">
      {catListQuery.data?.map((cat) => (
        <div className="mb-8 text-center" key={cat.id}>
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
      ))}
    </div>
  );
};

export default CatList;
