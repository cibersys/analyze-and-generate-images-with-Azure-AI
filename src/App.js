import React from 'react';

function App() {

  return (
    <div>
      <h1>Computer Vision</h1>
      <label>Insert URL or type prompt:</label>
      <br/>
      <input className="w-100" type="text" placeholder="Enter URL to analyze or textual prompt to generate an image" />
      <br/>
      <button>Analyze</button>
      <button className="pl mt">Generate</button>
    </div>
  );
}

export default App;