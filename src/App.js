import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LibraryPage from "./pages/LibraryPage/Library/LibraryPage";
// import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
// import SocialPage from "./pages/SocialPage/SocialPage";
import MorePage from "./pages/MorePage/MorePage";
// import Header from "./pages/MainPage/Header/Header";
import { Navigation } from "@mui/icons-material";
import { Container } from "@mui/material";
import Layout from "./components/Layout";

function App() {
  return (

    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/library' element={<LibraryPage />} />
        <Route path="/contact" element={<MorePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
