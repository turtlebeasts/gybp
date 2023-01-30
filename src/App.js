import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./Pages/Home";
import Navbar from "./Pages/Components/Navbar/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
