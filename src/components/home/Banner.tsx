import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-white pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Your Space with Our Beautiful Trees
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover a variety of trees and plants to enhance your garden or
                landscape. Our nursery offers the highest quality plants, expert
                advice, and exceptional service to help you create your dream
                outdoor space.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/shop"
                  className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Shop Now
                </Link>
                <a
                  href="#categoriesSection"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  See Categories <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="https://i.ibb.co/5Lr0qPK/video-banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
