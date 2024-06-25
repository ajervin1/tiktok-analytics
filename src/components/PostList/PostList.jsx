import './PostList.css'
export default function PostList() {
	const dynamicCover =  "https://p16-sign.tiktokcdn-us.com/obj/tos-useast8-p-0068-tx2/964827ea69a947a6806964614c0dd436_1719250918?lk3s=d05b14bd&nonce=44244&refresh_token=56e89c459191d6cab4b0b21f38f00900&x-expires=1719410400&x-signature=5jTFi9OgXeuhuvr2T5Ws5uLE0rE%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=20240625142620E3596C995D5132BF96C9&shp=d05b14bd&shcp=-"
	return <div className="post-list">
		<article className={'post-item card'}>
			<div className="post-left">
				<div className="image-container">
					<img src={ dynamicCover } alt="" className={ 'post-image' }/>
				</div>
				<p className={"date"}>6/24/2024, 10:41 AM</p>

			</div>
			<div className="post-data post-right">
				<article className="data-item">
					<h6 className="title">Views</h6>
					<h4 className="value">225,810</h4>
				</article>
				<article className="data-item">
					<h6 className="title">Views</h6>
					<h4 className="value">225,810</h4>
				</article>
				<article className="data-item">
					<h6 className="title">Views</h6>
					<h4 className="value">225,810</h4>
				</article>
				<article className="data-item">
					<h6 className="title">Views</h6>
					<h4 className="value">225,810</h4>
				</article>
			</div>
		</article>
	</div>
}