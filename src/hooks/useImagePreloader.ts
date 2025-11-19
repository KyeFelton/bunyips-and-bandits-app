import { useState, useEffect } from "react";

/**
 * Custom hook to preload images before rendering
 * @param imageUrls - Array of image URLs to preload
 * @returns isLoading - Boolean indicating if images are still loading
 */
export function useImagePreloader(imageUrls: string[]): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If no images to load, set loading to false immediately
    if (imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    let hasError = false;
    const totalImages = imageUrls.length;

    // Timeout to prevent infinite loading state (10 seconds)
    const timeoutId = setTimeout(() => {
      console.warn("Image preload timeout - rendering app anyway");
      setIsLoading(false);
    }, 10000);

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        clearTimeout(timeoutId);
        setIsLoading(false);
      }
    };

    const handleImageError = (url: string) => {
      if (!hasError) {
        console.error(`Failed to load image: ${url}`);
        hasError = true;
      }
      loadedCount++;
      if (loadedCount === totalImages) {
        clearTimeout(timeoutId);
        setIsLoading(false);
      }
    };

    // Create Image objects and preload each URL
    const images = imageUrls.map((url) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(url);
      img.src = url;
      return img;
    });

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return isLoading;
}
