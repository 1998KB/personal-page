import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Aboutme } from "./Pages/Aboutme";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./Components/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<Home setOpen={setOpen} />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
