import './App.css';
import TopNav from './Components/TopNav/TopNav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage.jsx';
import StaticProjects from './Pages/ProjectsPage/StaticProjects/StaticProjects.jsx';
import JavascriptProjects from './Pages/ProjectsPage/JavascriptProjects/JavascriptProjects.jsx';


function App() {

  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-page" element={<ProjectsPage />}>
          <Route index element={<StaticProjects />} />
          <Route path="static-projects" element={<StaticProjects />} />
          <Route path="javascript-projects" element={<JavascriptProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;