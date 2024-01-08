// MovingImages.js
export default function MovingImages({ images, text }) {
    return (
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Gallery image ${index}`} className="w-full h-auto" />
          ))}
        </div>
        <div className="absolute	bold text-8xl animate-marquee whitespace-nowrap">{text}</div>
      </div>
    );
  }
  
  // CSS in globals.css (or any other CSS file)
