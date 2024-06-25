import './UserBanner.css'
const userInfo = {
	"diggCount": 0,
	"followerCount": 7700000,
	"followingCount": 981,
	"friendCount": 704,
	"heart": 947300000,
	"heartCount": 947300000,
	"videoCount": 4633,
	"avatarLarger": "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/eaf66a39affdabf4b7d5c989db41bbfd~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=73860&refresh_token=a91321efbd825ed79e535cc5c5f201a2&x-expires=1719464400&x-signature=nB%2FRocl4vGQzQAtNKTWppS7i70I%3D&shp=a5d48078&shcp=81f88b70",
	"nickname": "olivia ponton",
	"sig": "☆.。.・°☆.。.:*・°☆\n🏳️‍🌈\nimg wurrrlldwide",
	"uniqueId": "iamoliviaponton",
	"userId": "MS4wLjABAAAAkHqDeyBnVyzzQuNOTvVovc8nECyp7ltnevHrJ7M4m865FlyzYPz-wglzujTcQyd6"
}
export default function UserBanner() {


	return <div className="user-banner card">
		<div className="profile-container">
			<img src={ userInfo.avatarLarger } alt=""/>
		</div>
		<div className="user-meta">
			<h2 className="username">{userInfo.uniqueId}</h2>
			<h6 className="nickname">{userInfo.nickname}</h6>
			<p className="description">{userInfo.sig}</p>
		</div>
		<div className="user-stats stats-row">
			<article className="stat-item">
				<h6 className={ 'headline' }>Total Likes</h6>
				<h3 className={ 'value' }>{userInfo.heartCount}</h3>
			</article>
			<article className="stat-item">
				<h6 className={ 'headline' }>Followers</h6>
				<h3 className={ 'value' }>{userInfo.followerCount}</h3>
			</article>
			<article className="stat-item">
				<h6 className={ 'headline' }>Total Videos</h6>
				<h3 className={ 'value' }>{userInfo.videoCount}</h3>
			</article>
		</div>
	</div>

}