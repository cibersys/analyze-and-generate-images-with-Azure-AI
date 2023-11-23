import React from 'react';
import PropTypes from 'prop-types';

function DisplayResults({ title, imgUrl, jsonResult }) {
    return (
      <section>
        <hr/>
        <h2>{title}</h2>
        <img className="animate__animated animate__fadeIn" src={imgUrl} alt="img" width={'300px'} height={'300px'}/>
        <div>
          { jsonResult && <pre>{JSON.stringify(jsonResult, null, 2)}</pre> } 
        </div>
      </section>
    )
  }

// Props validation
DisplayResults.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    jsonResult: PropTypes.object.isRequired
}

export default DisplayResults;