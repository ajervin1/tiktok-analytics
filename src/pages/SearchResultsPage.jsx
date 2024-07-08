import { useSearchParams } from 'react-router-dom';
import SearchResults from "../components/SearchResults/SearchResults.jsx";
import { searchResults } from "../../data/mock_data.js";
import { useEffect, useState } from "react";
import { searchUser } from "../../api/api.js";

export default function SearchResultsPage() {


	const [ results, setResults ] = useState([])
	const [ searchParams ] = useSearchParams();
	const username = searchParams.get('username');
	useEffect( () => {
		async function fetchResults(){
			const searchResults = await searchUser(username);
			setResults(searchResults);
		}
		fetchResults()
	}, [])
	return <main className="results-page container">
		{results.length && <SearchResults users={results} />}

	</main>
}