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

// const ProtectedRoute = ({
//   children
// }: {
//   children: React.ReactNode;
//   requiresStore: boolean;
// }) => {
//   const { currentUser } = useUserStore();
//   if (!currentUser) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

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
    element: (
      <LoggedOutRoute>
        <Welcome />
      </LoggedOutRoute>
    )
  },
  {
    path: "/values",
    element: (
      <LoggedOutRoute>
        <Values />
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
