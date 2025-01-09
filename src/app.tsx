import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { useIndexBooster } from "./hooks/use-index-booster";
import "react-toastify/dist/ReactToastify.css";
import { Welcome } from "./screens/welcome";
import { Projects } from "./screens/projects";
import { Blog } from "./screens/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/blog",
    element: <Blog />
  },
]);

const queryClient = new QueryClient();

function App() {
  useIndexBooster();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex w-full h-screen flex-col">
        <RouterProvider router={router} />
        <ToastContainer />
      </main>
    </QueryClientProvider>
  );
}

export default App;
