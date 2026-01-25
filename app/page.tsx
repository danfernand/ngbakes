"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "IMG_5129.jpeg",
  "IMG_6478.jpeg",
  "IMG_0350.jpeg",
  "IMG_6674.JPG",
  "IMG_0347.jpeg",
  "IMG_8489.jpeg",
  "IMG_0104.JPG",
  "IMG_0331.JPG",
  "IMG_4789.jpeg",
  "IMG_0044.JPG",
  "IMG_8002.jpeg",
  "IMG_0324.JPG",
  "IMG_9273.jpeg",
  "IMG_2777.jpeg",
  "IMG_3852.jpeg",
  "IMG_3737.jpeg",
  "IMG_2212.jpeg",
  "IMG_2202.jpeg",
  "IMG_1652.jpeg",
  "IMG_2499.jpeg",
  "IMG_1643.jpeg",
  "IMG_0935.jpeg",
  "IMG_0891.jpeg",
  "IMG_0886.jpeg",
  "IMG_0171.jpeg",
  "IMG_3575.jpeg",
  "IMG_3442.jpeg",
  "IMG_9161.jpeg",
  "IMG_0686.jpeg",
  "IMG_0669.jpeg",
  "IMG_9808.jpeg",
  "IMG_9278.jpeg",
  "IMG_5274.jpeg",
  "IMG_9958.jpeg",
  "IMG_6880.jpeg",
  "IMG_9093.jpeg",
  "IMG_3916.jpeg",
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2">
          {/* Mobile: centered links */}
          <div className="md:hidden flex justify-center gap-6 py-2">
            <a href="#home" className="text-pink-800 hover:text-pink-600 text-sm tracking-wider uppercase">Home</a>
            <a href="#pricing" className="text-pink-800 hover:text-pink-600 text-sm tracking-wider uppercase">Pricing</a>
            <a href="#gallery" className="text-pink-800 hover:text-pink-600 text-sm tracking-wider uppercase">Gallery</a>
            <a href="#contact" className="text-pink-800 hover:text-pink-600 text-sm tracking-wider uppercase">Contact</a>
          </div>
          {/* Desktop: logo centered with menu split */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-10">
              <a href="#home" className="text-pink-800 hover:text-pink-600 tracking-widest uppercase text-sm">Home</a>
              <a href="#pricing" className="text-pink-800 hover:text-pink-600 tracking-widest uppercase text-sm">Pricing</a>
            </div>
            <a href="#home" className="mx-10">
              <Image
                src="/images/logo.png"
                alt="NG Bakes"
                width={80}
                height={80}
                className="rounded-full"
              />
            </a>
            <div className="flex items-center gap-10">
              <a href="#gallery" className="text-pink-800 hover:text-pink-600 tracking-widest uppercase text-sm">Gallery</a>
              <a href="#contact" className="text-pink-800 hover:text-pink-600 tracking-widest uppercase text-sm">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Logo */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/logo.png"
            alt="NG Bakes Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-50" />
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-800 mb-10">Flavors</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-pink-50 px-8 py-4 rounded-full shadow-sm">
              <span className="text-pink-800 tracking-wide">Classic Yellow</span>
            </div>
            <div className="bg-pink-50 px-8 py-4 rounded-full shadow-sm">
              <span className="text-pink-800 tracking-wide">Funfetti</span>
            </div>
            <div className="bg-pink-50 px-8 py-4 rounded-full shadow-sm">
              <span className="text-pink-800 tracking-wide">Chocolate</span>
            </div>
            <div className="bg-pink-50 px-8 py-4 rounded-full shadow-sm">
              <span className="text-pink-800 tracking-wide">Red Velvet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tiered Cakes */}
            <div className="bg-pink-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Tiered Cakes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>6&quot;/8&quot;</span>
                  <span className="font-semibold">$195</span>
                </li>
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>6&quot;/8&quot;/10&quot;</span>
                  <span className="font-semibold">$295</span>
                </li>
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>6&quot;/8&quot;/10&quot; (6 layers)</span>
                  <span className="font-semibold">$350</span>
                </li>
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>6&quot;/8&quot;/10&quot;/12&quot;</span>
                  <span className="font-semibold">$395</span>
                </li>
                <li className="flex justify-between">
                  <span>6&quot;/8&quot;/10&quot;/12&quot; (6 layers)</span>
                  <span className="font-semibold">$475</span>
                </li>
              </ul>
            </div>

            {/* Single Cakes */}
            <div className="bg-pink-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Single Cakes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>6&quot;</span>
                  <span className="font-semibold">$35</span>
                </li>
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>8&quot;</span>
                  <span className="font-semibold">$45</span>
                </li>
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>9&quot;</span>
                  <span className="font-semibold">$55</span>
                </li>
                <li className="flex justify-between">
                  <span>10&quot;</span>
                  <span className="font-semibold">$65</span>
                </li>
              </ul>
            </div>

            {/* Sheet Cakes */}
            <div className="bg-pink-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Sheet Cakes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>1/4 Sheet</span>
                  <span className="font-semibold">$125</span>
                </li>
                <li className="flex justify-between">
                  <span>1/2 Sheet</span>
                  <span className="font-semibold">$250</span>
                </li>
              </ul>
            </div>

            {/* Extras */}
            <div className="bg-pink-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Extras</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>Cake Tasting (per person)</span>
                  <span className="font-semibold">$20</span>
                </li>
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>Cupcakes (decorated)</span>
                  <span className="font-semibold">$3 each</span>
                </li>
                <li className="flex justify-between border-b border-pink-200 pb-2">
                  <span>FSC 4&quot;</span>
                  <span className="font-semibold">$4</span>
                </li>
                <li className="flex justify-between">
                  <span>Delivery (within 15 miles)</span>
                  <span className="font-semibold">$50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <Image
                  src={`/images/${image}`}
                  alt={`Cake ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-800 mb-8">Contact Us</h2>
          <div className="bg-pink-50 rounded-2xl p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Email</h3>
              <a href="mailto:ngbakes@email.com" className="text-lg text-gray-700 hover:text-pink-600">
                ngbakes@email.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Phone</h3>
              <a href="tel:+15551234567" className="text-lg text-gray-700 hover:text-pink-600">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} NG Bakes. All rights reserved.</p>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-pink-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={`/images/${selectedImage}`}
              alt="Cake"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
