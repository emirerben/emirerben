import Image from "next/image";
import { CldImage } from "next-cloudinary";
const cloudinary = require('cloudinary').v2

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY
});

export default function MovingImages({ foldername, text }) {
  // Assuming that your images follow a naming pattern like '1.jpg', '2.jpg', etc.
  // Adjust the range according to the number of images in the folder
  const numberOfImages = 12; // Number of images you have in the folder
  const images = Array.from({ length: numberOfImages }, (_, index) => 
    `https://res.cloudinary.com/dh4enklg7/image/upload/v1704691428/${foldername}/${index + 1}.jpg`
  );

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <Image
            width="960"
            key={index}
            height="600"
            src={image}
            sizes="100vw"
            alt={`Image ${index}`}
            className="w-full h-auto"
          />
        ))}
      </div>
      <div className="w-screen h-48 absolute overflow-clip overlow-hidden static">
        <div className="overflow-hidden absolute text-white font-semibold text-9xl sm:text-[200px] animate-marquee whitespace-nowrap">
          {text}
        </div>
      </div>
    </div>
  );
}


