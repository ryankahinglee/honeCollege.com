import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./components/HomePage";
import "./css/colorPalette.css";
import defaultBlueTheme from "./css/colorTheme";
import NavigationHeader from "./components/Header";

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

export default function App() {
  return (
    <ThemeProvider theme={defaultBlueTheme}>
      <Router>
        <NavigationHeader/>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
