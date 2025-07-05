import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateNews.css"; // Importing the CSS file

const UpdateNews = () => {
  const [heading, setHeading] = useState("");
  const [intro, setIntro] = useState("");
  const [link, setLink] = useState("");
  const [nationalNews, setNationalNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);
  const [marketNews, setMarketNews] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetchNationalNews();
    fetchInternationalNews();
    fetchMarketNews();
    fetchUpdates();
  }, []);

  const fetchNationalNews = async () => {
    const response = await axios.get("http://localhost:5000/api/national-news");
    setNationalNews(Array.isArray(response.data) ? response.data : []);
  };

  const fetchInternationalNews = async () => {
    const response = await axios.get("http://localhost:5000/api/international-news");
    setInternationalNews(Array.isArray(response.data) ? response.data : []);
  };

  const fetchMarketNews = async () => {
    const response = await axios.get("http://localhost:5000/api/market-news");
    setMarketNews(Array.isArray(response.data) ? response.data : []);
    console.log(response.data);
  };

  const fetchUpdates = async () => {
    const response = await axios.get("http://localhost:5000/api/updates");
    setUpdates(Array.isArray(response.data) ? response.data : []);
    console.log(response.data);
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    let news = {}
    if(type !== 'updates'){
      news = { heading, intro, link };
    } else {
      news = { heading };
    }


    await axios.post(`http://localhost:5000/api/${type}`, news);
    if (type === "national") {
      fetchNationalNews();
    } else if (type === "international") {
      fetchInternationalNews();
    } else if (type === "market") {
      fetchMarketNews();
    }
    else if (type === "updates") {
      fetchUpdates();
    }
    
    setHeading("");
    setIntro("");
    setLink("");
    e.target.reset(); // Reset the form fields
  };

  const handleDelete = async (id, type) => {
    await axios.delete(`http://localhost:5000/api/${type}/${id}`);
    if (type === "national") {
      fetchNationalNews();
    } else if (type === "international") {
      fetchInternationalNews();
    } else if (type === "market") {
      fetchMarketNews();
    } else if (type === "updates") {
      fetchUpdates(); 
    }
  };

  return (
    <div className="update-news-container">
      <h1 className="title">Update News</h1>

      {/* Forms Section */}
      <div className="forms-container">
        <div className = "news-form-container">
          <form onSubmit={(e) => handleSubmit(e, "national-news")} className="news-form">
            <h2>National News</h2>
            <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} required />
            <input type="text" placeholder="Intro" value={intro} onChange={(e) => setIntro(e.target.value)} required />
            <input type="text" placeholder="Link (optional)" value={link} onChange={(e) => setLink(e.target.value)} />
            <button type="submit" className="btn">ADD</button>
          </form>

          <form onSubmit={(e) => handleSubmit(e, "international-news")} className="news-form">
            <h2>International News</h2>
            <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} required />
            <input type="text" placeholder="Intro" value={intro} onChange={(e) => setIntro(e.target.value)} required />
            <input type="text" placeholder="Link (optional)" value={link} onChange={(e) => setLink(e.target.value)} />
            <button type="submit" className="btn">ADD</button>
          </form>

          <form onSubmit={(e) => handleSubmit(e, "market-news")} className="news-form">
            <h2>Market News</h2>
            <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} required />
            <input type="text" placeholder="Intro" value={intro} onChange={(e) => setIntro(e.target.value)} required />
            <input type="text" placeholder="Link (optional)" value={link} onChange={(e) => setLink(e.target.value)} />
            <button type="submit" className="btn">ADD</button>
          </form>
        </div>

        <div className="updates-form">
          
          <form onSubmit={(e) => handleSubmit(e, "updates")} className="news-form">
            <h2>Special Updates</h2>
            <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} required />
            <button type="submit" className="btn">ADD</button>
          </form>
        </div>

      </div>



      {/* News Lists */}
      <h2 className="section-title">National News</h2>
      <ul className="news-list">
        {nationalNews.map((news) => (
          <li key={news._id} className="news-item">
            <h3>{news.heading}</h3>
            <button onClick={() => handleDelete(news._id, "national-news")} className="delete-btn">Delete</button>
          </li>

        ))}
      </ul>

      <h2 className="section-title">International News</h2>
      <ul className="news-list">
        {internationalNews.map((news) => (
          <li key={news._id} className="news-item">
            <h3>{news.heading}</h3>
            <button onClick={() => handleDelete(news._id, "international-news")} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>

      <h2 className="section-title">Market News</h2>
      <ul className="news-list">
        {marketNews.map((news) => (
          <li key={news._id} className="news-item">
            <h3>{news.heading}</h3>
            <button onClick={() => handleDelete(news._id, "market-news")} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>

      <h2 className="section-title">Special Updates</h2>
      <ul className="news-list">
        {updates.map((update) => (
          <li key={update._id} className="news-item">
            <h3>{update.heading}</h3>
            <button onClick={() => handleDelete(update._id, "updates")} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateNews;
