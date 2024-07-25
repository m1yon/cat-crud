import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const CatListResponseSchema = z.array(
  z.object({
    id: z.string(),
    url: z.string(),
    width: z.number(),
    height: z.number(),
  })
);

const useCatList = () => {
  const catListQuery = useQuery({
    queryKey: ["cat-list"],
    queryFn: async () => {
      const url = new URL("https://api.thecatapi.com/v1/images/search");
      url.searchParams.set("limit", "10");
      url.searchParams.set("has_breeds", "1");

      return fetch(url, {
        headers: { "x-api-key": import.meta.env.VITE_CAT_API_KEY },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`cat list API returned error code: ${res.status}`);
          }

          return res.json();
        })
        .then(CatListResponseSchema.parse);
    },
  });

  return catListQuery;
};

export default useCatList;
