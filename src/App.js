import './App.css';
import {ProfileFormAll} from './ProfileForm/ProfileFormFinal'
import ProfileGalleryMain from './ProfileGalleryMain'
import {SearchResult} from './SearchResult/SearchResult'
import ResultPage from './ResultPage/ResultPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileGalleryMain/>} />
        <Route path="/search" element={<SearchResult/>} />
        <Route path="/form" element={<ProfileFormAll/>} />
        <Route path="/resultPage" element={<ResultPage />} />
        {/* <Route path='*' element={<ErrorPage />} */}
      </Routes>
    </Router>
  );
}

export default App;
