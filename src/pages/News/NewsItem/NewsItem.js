import './NewsItem.scss';
import React from 'react';

const NewsItem = ({ href, text, note }) => (
  <li className="news-item accent-link-underline-trigger">
    <a
      className="news-link"
      target="_blank"
      href={href}
    >
      <div className="news-note">
        <p className="news-note-text accent-link-underline">
          {note}
        </p>
      </div>
      <p className="news-text">
        {text}
      </p>
    </a>
  </li>
);

export default NewsItem;
