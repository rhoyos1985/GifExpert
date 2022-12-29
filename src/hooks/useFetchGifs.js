import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs';

const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const gifts = await getGifts(category);
      setImages(gifts);
      setIsLoading(false)
    };
  
    useEffect(() => {
      getImages();
    }, []);
  return {
    images,
    isLoading
  }
}

export default useFetchGifs
