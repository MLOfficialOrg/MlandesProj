// Import Modules
import { BrowserRouter } from "react-router-dom";

// Import Components
import Layout from "./components/layouts/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
