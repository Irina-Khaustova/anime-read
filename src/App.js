import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LibraryPage from "./pages/LibraryPage/Library/LibraryPage";
// import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
// import SocialPage from "./pages/SocialPage/SocialPage";
import MorePage from "./pages/MorePage/MorePage";
// import Header from "./pages/MainPage/Header/Header";
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material';

import Layout from "./components/Layout";
import AutorizationPage from "./pages/AutorizaitionPage/AutorizationPage";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#FFFFFF',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
<ThemeProvider theme={theme}>
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/library' element={<LibraryPage />} />
        <Route path="/contact" element={<MorePage />} />
        <Route path="/autorization" element={<AutorizationPage />} />
      </Routes>
    </Layout>
    </ThemeProvider>
  );
}

export default App;
