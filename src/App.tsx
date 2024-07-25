import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CatList from "./components/CatList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatList />
    </QueryClientProvider>
  );
}

export default App;
