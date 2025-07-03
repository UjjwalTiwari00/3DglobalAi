import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
      {data.map((item, index) => {
        if (!item.urlToImage) return null;

        return (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-5xl cursor-pointer"
          >
            <img
              src={item.urlToImage}
              alt={item.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 flex flex-col h-[200px]">
              <h2 className="text-md font-semibold mb-2 text-gray-800 line-clamp-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
