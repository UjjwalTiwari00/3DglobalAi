import React, { useEffect, useState } from 'react';
import Card from './Cards';

const Newsapp = () => {
  const [search, setSearch] = useState(
    'Etrm,Energy,Renewable,Technology,AI,Ctrm,Commodities,Power,Gas,Wind,Solar,Hydro,Coal,Nuclear'
  );
  const [newsData, setNewsData] = useState(null);
  const API_KEY = '07ac0d291aed42259589f74e2526bad9';

  const getData = async () => {
    const query = search.split(',').join(' OR ');
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    let dt = jsonData.articles.slice(0, 10);
    setNewsData(dt);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
          Trendy News
        </h1>
        <ul className="flex gap-6 mb-4 md:mb-0">
          <a className="font-semibold text-lg text-gray-800 cursor-pointer hover:text-blue-600">
            All News
          </a>
          <a className="font-semibold text-lg text-gray-800 cursor-pointer hover:text-blue-600">
            Trending
          </a>
        </ul>
      </nav>

      <div className="text-center mt-8">
        <p className="text-xl font-semibold text-gray-700">
          Stay Updated with TrendyNews
        </p>
      </div>

      <div className="mt-10">
        {newsData ? <Card data={newsData} /> : null}
      </div>
    </div>
  );
};

export default Newsapp;
