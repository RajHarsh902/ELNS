import React from 'react';
import './NewsContent.css';

const NewsContent = ({ title, content, link }) => {
  return (
    <div className='newsContent'>
      <h3>
        {link ? <a href={link} target='_blank' rel='noopener noreferrer'>{title}</a> : title}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default NewsContent;