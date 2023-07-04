import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

  const newsArticle = (heading, subtitle) => (
      <div className="widgets__article">
          <div className="widgets__articleLeft">
              <FiberManualRecordIcon/>
          </div>
          <div className="widgets__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
          </div>
      </div>
  )

  return (
      <div className="widgets">
          <div className="widgets__header">
              <h2>Atakans News</h2>
              <InfoIcon />
          </div>

          {newsArticle("How to Voice Chat with ChatGPT", "All 7 Steps..")}
          {newsArticle("How to use the useState() Hook", "Explained with code....")}
          {newsArticle("Best movie to watch in 2023", "Bollywood....")}

      </div>
  );
}

export default Widgets;
