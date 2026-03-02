import { Camera } from 'lucide-react';

const images = [
  {
    src: '/image1.jpg',
    alt: 'Happy patient showing their smile',
    caption: 'Bright Smiles'
  },
  {
    src: '/image2.jpg',
    alt: 'Dental procedure in progress',
    caption: 'Gentle Care'
  },
  {
    src: '/image3.jpg',
    alt: 'Kids playing in waiting area',
    caption: 'Fun Environment'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-cyan-600">Gallery</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our happy patients and modern facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="text-white text-center">
                  <Camera className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
