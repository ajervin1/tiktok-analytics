import './SearchResults.css'
import { Link } from "react-router-dom";

export function truncateString( str, num ) {
	if ( str.length <= num ) {
		return str;
	}
	return str.slice(0, num) + '...';
}

export default function SearchResults( { users } ) {

	return <div className="results">
		<ul className="list-group">
			{ users.map(user => {
				return <li key={ user._id } className="list-group-item card">
					<div className="avatar-container">
						<img className={ 'avatar-img' } src={ user.avatarLarger } alt=""/>
					</div>
					<div className="user-info">
						<h4 className="text-primary font-medium mb-1">{ user.uniqueId }</h4>
						<h6 className="mb-1">{ user.nickname }</h6>
						<p className="text-secondary text-small">{ truncateString(user.sig, 30) }</p>
					</div>
					<div className="actions">
						<Link
							to={ {
								pathname: `/user/${ user.uniqueId }`,
							} }
							state={{user: user}}
							className="btn btn-primary"
						>
							View Data
						</Link></div>
				</li>
			}) }


		</ul>
	</div>
}