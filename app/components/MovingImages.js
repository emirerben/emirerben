  // CSS in globals.css (or any other CSS file)
// MovingImages.js
export default function MovingImages({ images, text }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery image ${index}`} className="w-full h-auto" />
        ))}
      </div>
      <div className="w-screen h-48 absolute overflow-clip overlow-hidden static">
        <div className="overflow-hidden absolute text-white font-semibold text-6xl sm:text-[200px] animate-marquee whitespace-nowrap">{text}</div>
      </div>
    </div>
  );
}
