import React, { useState } from 'react';
// Components
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import DisplayResults from './components/DisplayResults';
// Custom Hooks
import { useFetchComputerVision } from './hooks/useFetchComputerVision';
import { useFetchOpenAIService } from './hooks/useFetchOpenAIService';
// Helpers
import { validateUrl } from './utils/validate-url';


function App() {

  const [searchText, setSearchText] = useState('');  
  const [url, setUrl] = useState('');
  const [openaiText, setOpenaiText] = useState('');

  const { data, error, loading } = useFetchComputerVision(url);
  const { data: images, error: errorOpenAIService, loading: generatingImages } = useFetchOpenAIService(openaiText);

  const handleAnalyzeUrl = (e) => {
    e.preventDefault();

    const url = searchText?.trim();
    if (!url || !validateUrl(url)) {
      alert('Invalid URL!');
      return;
    }

    // Clear OpenAI data to show only URL data
    setOpenaiText('');

    setUrl(url);

  }

  const handleGenerateAction = (e) => {
    e.preventDefault();

    const text = searchText?.trim();
    const noAllowText = !text || text.length < 5 || text.length > 4000;
    if (noAllowText) {
      alert('Text must be a string with at least 5 characters and no more than 4000 characters!');
      return;
    }

    // Clear URL to show only OpenAI data
    setUrl('');

    setOpenaiText(text);

  }

  return (
    <>
      <Header />
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <br/>
      <button className="btn" onClick={ handleAnalyzeUrl }>Analyze</button>
      <button className="pl mt btn" onClick={ handleGenerateAction }>Generate</button>
      <br/>

      { (loading || generatingImages) && <p className='animate__animated animate__flash'>Loading...</p> }

      { (error || errorOpenAIService) && <p className="error">Error: {error?.message || errorOpenAIService?.message}</p> }

      { data && <DisplayResults title='Computer Vision Analysis' imgUrl={url} jsonResult={ {'URL': url, ...data} } /> }
      { images.length > 0 && <DisplayResults title='Image Generation' imgUrl={images[0].url} jsonResult={ {'prompt': openaiText, 'URL': images[0].url} } /> }
    
    </>
  );
}

export default App;