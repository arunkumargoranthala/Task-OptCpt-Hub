import './App.css';
import Header1 from './components/Header'
import LatestJobs from './components/LatestJobs'
import AdsAndRecent from './components/AdsAndRecent'
import TopResumes from './components/TopResumes'
import LatestBlogs from './components/LatestBlogs'
import Footer from './components/Footer'

const App = () => (
  <div className="app-container">
    <Header1 />
    <LatestJobs />
    <AdsAndRecent />
    <TopResumes />
    <LatestBlogs />
    <Footer />
  </div>
)

export default App;
