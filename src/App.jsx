import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/styles/index.js'
import Logo from './components/ui/Logo/Logo.jsx'
import Header from "./components/layouts/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import Footer from "./components/layouts/Footer/Footer.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
