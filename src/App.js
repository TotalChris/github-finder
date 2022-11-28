import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { GitHubProvider } from "./Context/GitHub/GitHubContext";
import { AlertProvider } from "./Context/Alert/AlertContext";
import Alert from "./Components/Layout/Alert";
import User from "./pages/User";
import Repo from "./pages/Repo";

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert></Alert>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/user/:login/repo/:rname" element={<Repo />} />
                <Route path="/missing" element={<Missing />} />
                <Route path="/*" element={<Missing />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
