import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { useUserStore } from "./stores/user";
import { useIndexBooster } from "./hooks/use-index-booster";
import "react-toastify/dist/ReactToastify.css";
import { Welcome } from "./screens/welcome";
import { Values } from "./screens/values";
import Explore from "./screens/explore";
import Login from "./screens/login";
import Docs from "./screens/docs";

const ProtectedRoute = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { currentUser } = useUserStore();
  if (!currentUser) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

const LoggedOutRoute = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { currentUser } = useUserStore();
  if (currentUser) {
    return <Navigate to="/stores" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/docs",
    element: <Docs />
  },
  {
    path: "/values",
    element: <Values />
  },
  {
    path: "/explore",
    element: (
      <ProtectedRoute>
        <Explore />
      </ProtectedRoute>
    )
  },
  {
    path: "/sign-in",
    element: (
      <LoggedOutRoute>
        <Login />
      </LoggedOutRoute>
    )
  }
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
