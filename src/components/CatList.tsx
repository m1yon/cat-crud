import useCatList from "../hooks/useCatList";

const CatList = () => {
  const catListQuery = useCatList();

  if (catListQuery.isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {catListQuery.data?.map((cat) => (
        <div key={cat.id}>
          <img src={cat.url} width={cat.width} height={cat.height} />
        </div>
      ))}
    </div>
  );
};

export default CatList;
