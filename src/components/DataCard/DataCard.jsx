
import './DataCard.css'

export default function DataCard({user}) {

	return <div className="card-list">
		<div className="data-card-container row">
			<article className="col-3">
				<div className="card data-card text-center">
					<h6 className={ "text-secondary mb-0" }>Total Videos</h6>
					<h2 className={ "font-semi-bold" }>{user.videoCount}</h2>
				</div>
			</article>

			<article className="col-3">
				<div className="card data-card text-center">
					<h6 className={ "text-secondary mb-0" }>Total Followers</h6>
					<h2 className={ "font-semi-bold" }>{user.followerCount}</h2>
				</div>
			</article>

			<article className="col-3">
				<div className="card data-card text-center">
					<h6 className={ "text-secondary mb-0" }>Total Likes</h6>
					<h2 className={ "font-semi-bold" }>{user.heart}</h2>
				</div>
			</article>

			<article className="col-3">
				<div className="card data-card text-center">
					<h6 className={ "text-secondary mb-0" }>Following Count</h6>
					<h2 className={ "font-semi-bold" }>{user.followingCount}</h2>
				</div>
			</article>

		</div>
	</div>
}