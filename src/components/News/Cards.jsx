import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) return null;

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={curItem.urlToImage}
              alt={curItem.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <a
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline mb-2"
              >
                {curItem.title}
              </a>
              <p className="text-gray-700 flex-grow">{curItem.description}</p>
              <button
                onClick={() => window.open(curItem.url)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
