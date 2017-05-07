import './NewsItem.scss';
import React from 'react';
import UITableRow from 'UILibrary/table/UITableRow';

const NewsItem = ({href, text, note}) => (
    <UITableRow>
      <a target="_blank" href={href}>
        <h4>
          {note}
        </h4>
      </a>
      <a target="_blank" href={href}>
        <p className="m-bottom-0">
          {text}
        </p>
      </a>
    </UITableRow>
);

export default NewsItem;
