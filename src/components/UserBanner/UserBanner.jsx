import './UserBanner.css'



export default function UserBanner({user}) {

	return <div className="user-banner card">
		<div className="profile-container">
			<img src={ user.avatarLarger } alt=""/>
		</div>
		<div className="user-meta">
			<h2 className="font-semi-bold mb-0">{ user.uniqueId }</h2>
			<h5 className="font-medium mb-0">{ user.nickname }</h5>
			<p className="text-secondary">{ user.sig }</p>
		</div>
		<div className="user-stats stats-row">
			<article className="stat-item mb-1">
				<h6 className="mb-0 text-secondary">Total Likes</h6>
				<h3 className={ 'value' }>{ user.heart }</h3>
			</article>
			<article className="stat-item">
				<h6 className={ 'text-secondary mb-0' }>Followers</h6>
				<h3 className={ 'value' }>{ user.followerCount }</h3>
			</article>
			<article className="stat-item">
				<h6 className={ 'text-secondary mb-0' }>Total Videos</h6>
				<h3 className={ 'value' }>{ user.videoCount }</h3>
			</article>
		</div>
	</div>

}