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
import States from "./components/States"



function App() {
    return(
        <Router>
            <ScrollToTop />
            <div className="App">
                <NavBar />
                    <div className="content">
                        <Routes>
                            <Route path="" element={<MainBody />}/>
                            <Route path="/Y4-HonorsProject" element={<MainBody />}/>
                            <Route path="/" element={<MainBody />}/>
                            <Route path="/Y4-HonorsProject" element={<MainBody />}/>
                            <Route path="/0" element={<ComparisonPage />}/>
                            <Route path="/1" element={<ComparisonPage />}/>
                            <Route path="/2" element={<ComparisonPage />}/>
                            <Route path="/3" element={<ComparisonPage />}/>
                            <Route path="/4" element={<ComparisonPage />}/>
                            <Route path="/5" element={<ComparisonPage />}/>
                            <Route path="/100" element={<States />}/>
                            <Route path="/101" element={<States />}/>
                            <Route path="/102" element={<States />}/>
                            <Route path="/103" element={<States />}/>
                            <Route path="/104" element={<States />}/>
                            <Route path="/105" element={<States />}/>
                            <Route path="/106" element={<States />}/>
                            <Route path="/107" element={<States />}/>
                            <Route path="/108" element={<States />}/>
                            <Route path="/109" element={<States />}/>
                            <Route path="/110" element={<States />}/>
                            <Route path="/111" element={<States />}/>
                            <Route path="/112" element={<States />}/>
                            <Route path="/113" element={<States />}/>
                            <Route path="/114" element={<States />}/>
                            <Route path="/115" element={<States />}/>
                            <Route path="/116" element={<States />}/>
                            <Route path="/117" element={<States />}/>
                            <Route path="/118" element={<States />}/>
                            <Route path="/119" element={<States />}/>
                            <Route path="/120" element={<States />}/>
                            <Route path="/121" element={<States />}/>
                            <Route path="/122" element={<States />}/>
                            <Route path="/123" element={<States />}/>
                            <Route path="/124" element={<States />}/>
                            <Route path="/125" element={<States />}/>
                            <Route path="/126" element={<States />}/>
                            <Route path="/127" element={<States />}/>
                            <Route path="/128" element={<States />}/>
                            <Route path="/129" element={<States />}/>
                            <Route path="/130" element={<States />}/>
                            <Route path="/131" element={<States />}/>
                            <Route path="/132" element={<States />}/>
                            <Route path="/133" element={<States />}/>
                            <Route path="/134" element={<States />}/>
                            <Route path="/135" element={<States />}/>
                            <Route path="/136" element={<States />}/>
                            <Route path="/137" element={<States />}/>
                            <Route path="/138" element={<States />}/>
                            <Route path="/139" element={<States />}/>
                            <Route path="/140" element={<States />}/>
                            <Route path="/141" element={<States />}/>
                            <Route path="/142" element={<States />}/>
                            <Route path="/143" element={<States />}/>
                            <Route path="/144" element={<States />}/>
                            <Route path="/145" element={<States />}/>
                            <Route path="/146" element={<States />}/>
                            <Route path="/147" element={<States />}/>
                            <Route path="/148" element={<States />}/>
                            <Route path="/149" element={<States />}/>
                        </Routes>
                    </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App