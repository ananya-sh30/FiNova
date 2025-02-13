import React from 'react';
import '../styles/News.css'; 
import FinlogixWidget from "./FinLogixWidget";

function NewsInsights() {
  
  return (
    <div className='news-container'>
     <div className="finlogix-container"></div>
     <FinlogixWidget/>

{/* News Box */}
<div className="boxone">
  <div className="image1" style={{ backgroundImage: "../assets/stock.png" }}></div>
  <div className="content1">
    <div className="read">
      <div className="news">News</div>
      <div className="read2">8 min read</div>
    </div>
    <p className="heading">
      The Foundation of Wealth: Understanding Stock Varieties
    </p>
    <p className="part">
      Stocks are the cornerstone of wealth creation, but not all are the
      same. Growth stocks offer high returns but come with risk, while
      dividend stocks provide steady income. Blue-chip stocks ensure
      stability, and penny stocks carry high risk with potential rewards.
      Value stocks trade below their actual worth, making them great for
      long-term gains. Understanding these varieties helps investors
      balance risk and return, making informed decisions for financial
      growth. Whether you're a beginner or a seasoned investor, knowing
      stock types is key to building a strong investment portfolio.
      Choose wisely and invest smartly!
    </p>
   
  </div>
</div>
<div className="finovaHeader">
      {/* Header */}
     

      {/* Top Headlines */}
      <section className="headlinesWrapper">
        <div className="leftSection">
          <div className="breakingTitle"><h2>Breaking News</h2></div>
          <div className="breakingImg">
            <img
              src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg"
              alt="Breaking News"
            />
          </div>
          <div className="breakingContent">
            <h2>Global Stock Markets Plunge Amid Economic Uncertainty</h2>
            <p>
              Global stock markets have experienced a sharp decline as
              investors react to growing economic uncertainty...
            </p>
          </div>
        </div>
        <div className="rightSection">
          <div className="topHeadlinesTitle"><h2>Top Headlines</h2></div>
          <div className="newsGrid">
            <div className="newsCard">
              <img
                src="https://themeapesite.hocalwire.in/h-upload/2023/06/28/500x300_1516114-spacex-sixteennine.webp"
                alt="News"
              />
              <div className="newsText">
                <h4>
                  SpaceX successfully deployed a new satellite, advancing space communication.
                </h4>
                
              </div>
            </div>
            <div className="newsCard">
              <img
                src="https://etimg.etb2bimg.com/photo/111299715.cms"
                alt="News"
              />
              <div className="newsText">
                <h4>
                AI-driven advancements are revolutionizing medical diagnosis and patient care.
                </h4>
                
              </div>
            </div>
            <div className="newsCard">
              <img
                src="https://www.currencytransfer.com/wp-content/uploads/2022/11/ev-2-edit.min_.jpg"
                alt="News"
              />
              <div className="newsText">
                <h4>
                By 2030, EVs are expected to dominate the automobile industry.
                </h4>
              
              </div>
            </div>
            <div className="newsCard">
              <img
                src="https://www.businessoutreach.in/wp-content/uploads/2023/01/Green-Initiatives1-1-1024x1024.jpg"
                alt="News"
              />
              <div className="newsText">
                <h4>
                The government introduces new policies for a sustainable future.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>

    </div>
  );
}

export default NewsInsights;
