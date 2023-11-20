import React from 'react';
import PropTypes from 'prop-types';

function DisplayResults({ imgUrl, jsonResult }) {
    return (
      <section>
        <h2>Computer Vision Analysis</h2>
        <img src={imgUrl} alt="img" width={'300px'} height={'300px'}/>
        <div>
          { jsonResult && <pre>{JSON.stringify({'URL': imgUrl, ...jsonResult}, null, 2)}</pre>  } 
        </div>
      </section>
    )
  }

// Props validation
DisplayResults.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    jsonResult: PropTypes.object.isRequired
}

export default DisplayResults;