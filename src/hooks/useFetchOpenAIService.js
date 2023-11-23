import { useState, useEffect } from 'react';
// Modules
import { generateImage } from '../modules/openai-image-generation';

/**
 * Este hook se encarga de realizar la petición a la API de OpenAI haciendo uso 
 * del módulo openai-image-generation.js
 */
export const useFetchOpenAIService = (text, n = 1) => {

    const [state, setState] = useState({ data: [], error: null, loading: false});

    useEffect(() => {

        if (!text) return;

        setState({ data: [], error: null, loading: true });

        generateImage(text,n).then(result => {
    
            if (result.error) {
                setState({ data: [], error: result.error, loading: false });
                return;
            }

            setState({ data: result.data, error: null, loading: false });

        }).catch(error => {
            setState({ data: [], error: error, loading: false });
        });

    }, [text, n])

    return state;
 }
