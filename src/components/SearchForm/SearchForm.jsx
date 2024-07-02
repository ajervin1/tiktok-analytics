import './SearchForm.css'
import { useNavigate } from 'react-router-dom';

import { useEffect, useRef } from "react";
export default function SearchForm() {
	const navigate = useNavigate();
	const inputRef = useRef();
	function handleSubmit(e) {
		e.preventDefault();
		const term = inputRef.current.value;
		navigate(`/search?term=${term}`)
	}

	return <form className="search-form" onSubmit={handleSubmit}>
		<input  ref={inputRef} type="text" placeholder={ "Search TikTok Accounts" }/>
		<button className="icon-container" type={ 'submit' }>
			<i className="fas fa-search fa-lg"></i>
		</button>
	</form>
}