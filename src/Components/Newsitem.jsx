import React from "react";

const NewsItems = ({ title, description, src, url }) => {
    return (
        <div className="card col-md-3 p-2">
            <img src={src || "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    );
};

export default NewsItems;
