import React, { useRef, useState, useEffect } from 'react';
import NewsContent from './components/NewsContent';
import NavigationButton from './components/common/NavigationButton';
import Background from '../assets/images/earthVideo.mp4';
import boy from '../assets/images/boy-without-Background.png';
import newsLogo from '../assets/images/newsLogo.jpg';
import axios from 'axios';
import './News.css';

const News = () => {
  const [nationalNews, setNationalNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);
  const [marketNews, setMarketNews] = useState([]);

  const nationalRef = useRef(null);
  const internationalRef = useRef(null);
  const marketRef = useRef(null);
  
  useEffect(() => {
    fetchNationalNews();
    fetchInternationalNews();
    fetchMarketNews();
  }, []);

  const fetchNationalNews = async () => {
  try {
    const response = await axios.get('/api/national-news');
    setNationalNews(Array.isArray(response.data) ? response.data : []);
  } catch (error) {
    setNationalNews([]); // fallback to empty array on error
    console.error('Error fetching national news:', error);
  }
};

const fetchInternationalNews = async () => {
  try {
    const response = await axios.get('/api/international-news');
    setInternationalNews(Array.isArray(response.data) ? response.data : []);
  } catch (error) {
    setInternationalNews([]);
    console.error('Error fetching international news:', error);
  }
};

const fetchMarketNews = async () => {
  try {
    const response = await axios.get('/api/market-news');
    setMarketNews(Array.isArray(response.data) ? response.data : []);
  } catch (error) {
    setMarketNews([]);
    console.error('Error fetching market news:', error);
  }
};

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const news = (availabelNews) => availabelNews.map((news, index) => (
    <NewsContent key={index} title={news.heading} content={news.intro} link={news.link} />
  ));

  return (
    <>
      <div className='design'>
        <video autoPlay loop muted className ='background' type='video/mp4'>
          <source src={Background} type='video/mp4' />
        </video>
        <img src={newsLogo} className='newsLogo' />
        <img src={boy} className='boy' />
      </div>
      <div className='main'>
        <h1>Market at a Glance</h1>
        <div className='market'>
          <NavigationButton class = 'hide-on-mobile' direction='left' text='<' active = {marketNews.length > 4 ? true : false} onClick={() => scroll(marketRef, 'left')} />
          <div className='marketContent' ref={marketRef}>
            {marketNews.length > 0? news(marketNews) : <p>No News Available</p>}
          </div>
          <NavigationButton class = 'hide-on-mobile' direction='right' text='>' active = {marketNews.length > 4 ? true : false} onClick={() => scroll(marketRef, 'right')} />
        </div>
        <h1>National News</h1>
        <div className='national'>
          <NavigationButton class = 'hide-on-mobile' direction='left' text='<' active = {nationalNews.length > 4 ? true : false} onClick={() => scroll(nationalRef, 'left')} />
          <div className='nationalContent' ref={nationalRef}>
            {nationalNews.length > 0? news(nationalNews) : <p>No News Available</p>}
          </div>
          <NavigationButton class = 'hide-on-mobile' direction='right' text='>' active = {nationalNews.length > 4 ? true : false} onClick={() => scroll(nationalRef, 'right')} />
        </div>
        <h1>International News</h1>
        <div className='international'>
          <NavigationButton class = 'hide-on-mobile' direction='left' text='<' active = {internationalNews.length > 4 ? true : false} onClick={() => scroll(internationalRef, 'left')} />
          <div className='internationalContent' ref={internationalRef}>
            {internationalNews.length > 0? news(internationalNews) : <p>No News Available</p>}
          </div>
          <NavigationButton class = 'hide-on-mobile' direction='right' text='>' active = {internationalNews.length > 4 ? true : false} onClick={() => scroll(internationalRef, 'right')} />
        </div>
      </div>
    </>
  );
};

export default News;