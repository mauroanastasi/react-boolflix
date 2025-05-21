import React from 'react'

const RankingStars = ({ vote_average, }) => {
    const stars = [1, 2, 3, 4, 5]
    const vote = (Math.ceil(vote_average / 2))
    console.log(vote);
    return (
        <div>
            <span>Valutazione:</span>
            {stars.map(star =>
                star <= vote ? (
                    <i key={star} className="fa-solid fa-star"></i>
                ) : (
                    <i key={star} className="fa-regular fa-star"></i>
                )
            )}
        </div>
    );
}

export default RankingStars