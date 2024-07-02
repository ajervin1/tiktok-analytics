import { useSearchParams } from 'react-router-dom';
import SearchResults from "../components/SearchResults/SearchResults.jsx";
import { searchResults } from "../../data/mock_data.js";
import { useEffect, useState } from "react";

export default function SearchResultsPage() {


	const [ results, setResults ] = useState([])
	const [ searchParams ] = useSearchParams();
	const term = searchParams.get('term');
	useEffect(() => {
		setResults(searchResults)
	}, [])
	return <main className="results-page container">
		{results.length && <SearchResults users={results} />}

	</main>
}