import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import NavBar from "./components/NavBar"
import MainBody from "./components/MainBody"
import Footer from "./components/Footer"
import ComparisonPage from "./components/ComparisonPage"
import ScrollToTop from "./components/ScrollToTop"



function App() {
    return(
        <Router>
            <ScrollToTop />
            <div className="App">
                <NavBar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainBody />}/>
                            <Route path="/Y4-HonorsProject" element={<MainBody />}/>
                            <Route path="/0" element={<ComparisonPage />}/>
                            <Route path="/1" element={<ComparisonPage />}/>
                            <Route path="/2" element={<ComparisonPage />}/>
                            <Route path="/3" element={<ComparisonPage />}/>
                            <Route path="/4" element={<ComparisonPage />}/>
                            <Route path="/5" element={<ComparisonPage />}/>
                        </Routes>
                    </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App