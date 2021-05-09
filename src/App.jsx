import React, {useState} from 'react';
import Footer from './components/Footer';
import HeaderMainPage from './components/Header';
import MainPageMovieContainer from './components/MainPageMovieContainer';


function App() {
  const [update, setUpdate] = useState(false)
  const [query, setQuery] = useState()
  return (
    <>    
      <HeaderMainPage setUpdate={setUpdate} setQuery={setQuery}/>
      <MainPageMovieContainer update={update} query={query}/>
      <Footer />
    </>
  );
}

export default App;
