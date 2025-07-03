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
    let dt = jsonData.articles.slice(0, 12); // 12 for grid feel
    setNewsData(dt);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#CBD3F2] to-white pt-28 px-6">
      {/* pt-28 gives nice top space for the header */}
      <div className="text-center mb-10">
        {/* <h1 className="text-3xl font-bold text-gray-800">Latest Energy & Tech News</h1> */}
      </div>
      {newsData ? <Card data={newsData} /> : <p className="text-center">Loading...</p>}
    </div>
  );
};

export default Newsapp;
