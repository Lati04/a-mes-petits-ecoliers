import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Seo from "./components/Seo";

const App: React.FC = () => (
  <>
    <Seo />
    <Header />
    <main className="w-full min-h-screen">
      <Home />
    </main>
    <Footer />
  </>
);

export default App;
