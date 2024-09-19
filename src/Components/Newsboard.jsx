import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItems from './Newsitem';

const Newsboard = ({ searchTerm }) => {
    const [articles, setArticles] = useState([]);
    const apiKey = "0efa1abdcf074a54af29454af2eae3fc";

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                console.log(response);
                setArticles(response.data.articles);
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };

        // Only fetch data if searchTerm is not empty
        if (searchTerm) {
            fetchData();
        }
    }, [searchTerm]);


    return (
        <div className='px-5 py-3'>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.length === 0 && searchTerm && <p>No results found for "{searchTerm}".</p>}
            <div className='row'>{articles.map((news, index) => {
                return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}</div>
        </div>
    );
};

export default Newsboard;
