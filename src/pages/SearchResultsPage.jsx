import {useSearchParams} from 'react-router-dom';
import SearchResults from "../components/SearchResults/SearchResults.jsx";

export default function SearchResultsPage() {
	const [searchParams] = useSearchParams();
	const term = searchParams.get('term');
	return <main className="results-page container">
		<SearchResults />
	</main>
}