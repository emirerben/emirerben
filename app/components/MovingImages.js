    // CSS in globals.css (or any other CSS file)
  // MovingImages.js
  'use client'
  import { CldImage } from "next-cloudinary";
  import { useEffect, useState } from "react";

  export default function MovingImages({ foldername, text }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
          const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image/folder/${foldername}`);
          const data = await response.json();
          setImages(data.resources);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

      fetchImages();
    }, [foldername]);

    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <CldImage
              width="960"
              key={index}
              height="600"
              src={image.secure_url}
              sizes="100vw"
              alt="Description of my image"
              className="w-full h-auto"
            />
          ))} 
        </div>
        <div className="w-screen h-48 absolute overflow-clip overlow-hidden static">
          <div className="overflow-hidden absolute text-white font-semibold text-6xl sm:text-[200px] animate-marquee whitespace-nowrap">
            {text}
          </div>
        </div>
      </div>
    );
  }
