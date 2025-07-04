import React from 'react';

function Rating(props) {
    const rating = props.stars;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const totalStars = 5;

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <i key={i} className="fa-solid fa-star" style={{ color: "Dodgerblue" }}></i>
        );
    }

    // Half star
    if (hasHalfStar) {
        stars.push(
            <i key="half" className="fa-solid fa-star-half-stroke" style={{ color: "Dodgerblue" }}></i>
        );
    }

    // Empty stars
    const remaining = totalStars - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remaining; i++) {
        stars.push(
            <i key={`empty-${i}`} className="fa-regular fa-star" style={{ color: "Dodgerblue" }}></i>
        );
    }

    return <>{stars}</>;
}

export default Rating;
