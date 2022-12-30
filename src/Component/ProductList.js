import React from 'react';
import './SearchResult.css';

function SearchResult({ img, title, location, description, price }) {
	return (
		<div className='searchResult'>
			<img src={img} alt='' />
			<div className='searchResult__info'>
				<div className='searchResult__infoTop'>
					<h3>{title}</h3>
					<p>{location}</p>
					<p>____</p>
					<p>{description}</p>
				</div>
				<div className='searchResult__infoBottom'>
					<div className='searchResults__price'>
						<h2>{price}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchResult;
