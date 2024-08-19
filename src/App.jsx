import "@mantine/core/styles.css";
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);

  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
