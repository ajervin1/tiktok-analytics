import './SearchResults.css'

export default function SearchResults() {
	const avatarUrl = "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/20bae40b2b67b1c7ede9b21d74004c79~c5_100x100.jpeg?lk3s=a5d48078&nonce=7175&refresh_token=74963106801fc4ad13d7d4286129c4fd&x-expires=1719486000&x-signature=jkuaqSigXpdbO8%2BYPNO1ChpycnY%3D&shp=a5d48078&shcp=81f88b70"
	return <div className="results">
		<ul className="results-container list-group">
			<li className="list-group-item">
				<div className="user-avatar avatar">
					<img className={ 'avatar-img' } src={ avatarUrl } alt=""/>
				</div>
				<div className="user-info">
					<h4 className={ 'username' }>piper.burke</h4>
					<h6 className={ 'nickname' }>Piper Burke</h6>
					<p className={ 'description' }>Hi</p>
				</div>
				<div className="actions">
					<a href="/user/uniqueId" className="btn btn-primary">View Data</a>
				</div>
			</li>

		</ul>
	</div>
}