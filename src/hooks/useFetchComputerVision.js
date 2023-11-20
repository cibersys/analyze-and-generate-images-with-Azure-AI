import { useState, useEffect } from 'react';
// Modules
import { analyzeImage } from '../modules/azure-image-analysis';

/**
 * Este hook se encarga de realizar la petición a la API de Azure Computer Vision haciendo uso 
 * del módulo azure-image-analysis.js
 */
export const useFetchComputerVision = (url) => {
    
    const [state, setState] = useState({ data: null, error: null, loading: false});

    useEffect(() => {

        if (!url) return;

        setState({ data: null, error: null, loading: true });

        analyzeImage(url).then(result => {
    
            if (result.error) {
                setState({ data: null, error: result.error, loading: false });
                return;
            }

            setState({ data: result, error: null, loading: false });

        }).catch(error => {
            setState({ data: null, error: error, loading: false });
        });

    }, [url])

    return state;
 }
