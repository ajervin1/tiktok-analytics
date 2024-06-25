import './UserBanner.css'

export default function UserBanner() {
	const userAvatar = "https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/440264502_362142769567789_1900183992849157263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=7d201b&_nc_ohc=VhZbLkGBbZUQ7kNvgGaLhv7&_nc_ht=scontent-iad3-1.xx&edm=AL-3X8kEAAAA&oh=00_AYDKBDJXDcRkFll8ixspVejWzOZRQMN6a29FG3qzGcI87A&oe=66805A8E"
	return <div className="user-banner card">
		<div className="profile-image">
			<img src={ userAvatar } alt=""/>
		</div>
		<div className="user-meta">
			<h2 className="username">Avani</h2>
			<h6 className="nickname">avani</h6>
			<p className="description">if you don’t love me i love you</p>
			<p className="date text-small text-muted">Tracked since Dec, 14 2018. Updated 3 hours ago.</p>
		</div>
		<div className="user-stats stats-row">
			<article className="stat-item">
				<h6 className={ 'headline' }>Followers</h6>
				<h3 className={ 'value' }>1000</h3>
			</article>
			<article className="stat-item">
				<h6 className={ 'headline' }>Followers</h6>
				<h3 className={ 'value' }>100</h3>
			</article>
			<article className="stat-item">
				<h6 className={ 'headline' }>Followers</h6>
				<h3 className={ 'value' }>20</h3>
			</article>
		</div>
	</div>

}