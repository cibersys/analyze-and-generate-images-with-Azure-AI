import React, { useState } from 'react';
// Components
import SearchInput from './components/SearchInput';
import DisplayResults from './components/DisplayResults';
// Custom Hooks
import { useFetchComputerVision } from './hooks/useFetchComputerVision';
// Helpers
import { validateUrl } from './utils/validate-url';


function App() {

  const [searchText, setSearchText] = useState('');  
  const [url, setUrl] = useState('');

  const { data, error, loading } = useFetchComputerVision(url);

  const handleAnalyzeUrl = (e) => {
    e.preventDefault();

    const url = searchText?.trim();
    if (!url || !validateUrl(url)) {
      alert('Invalid URL!');
      return;
    }

    setUrl(url);

  }


  return (
    <>
      <h1>Computer Vision</h1>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <br/>
      <button onClick={ handleAnalyzeUrl }>Analyze</button>
      <button className="pl mt">Generate</button>
      <br/>
      
      { loading && <p>Loading...</p> }

      { error && <p>Error: {error.message}</p> }
    
      { data && <DisplayResults imgUrl={url} jsonResult={data} /> }
    
    </>
  );
}

export default App;