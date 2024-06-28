import './SearchResults.css'
import { searchResults } from "../../../data/mock_data.js";
export function truncateString(str, num) {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + '...';
}
export default function SearchResults() {

	return <div className="results">
		<ul className="list-group">
			{searchResults.map(author => {
				return <li key={author.id} className="list-group-item card">
					<div className="avatar-container">
						<img className={ 'avatar-img' } src={ author.avatarLarger } alt=""/>
					</div>
					<div className="user-info">
						<h4 className={ 'username' }>{author.uniqueId}</h4>
						<h6 className={ 'nickname' }>{author.nickname}</h6>
						<p className={ 'description text-small text-muted' }>{truncateString(author.signature, 50)}</p>
					</div>
					<div className="actions">
						<a href={`/user/search?uniqueid=${author.uniqueId}`} className="btn btn-primary">View Data</a>
					</div>
				</li>
			}) }


		</ul>
	</div>
}