import './PostList.css'
import { postsResults } from "../../../data/mock_data.js";
import { truncateString } from "../SearchResults/SearchResults.jsx";

export default function PostList({posts}) {
	const dynamicCover = "https://p16-sign.tiktokcdn-us.com/obj/tos-useast8-p-0068-tx2/964827ea69a947a6806964614c0dd436_1719250918?lk3s=d05b14bd&nonce=44244&refresh_token=56e89c459191d6cab4b0b21f38f00900&x-expires=1719410400&x-signature=5jTFi9OgXeuhuvr2T5Ws5uLE0rE%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=20240625142620E3596C995D5132BF96C9&shp=d05b14bd&shcp=-"
	return <div className="post-list pb-2">
		{ posts.map(post => {
			return <article key={ post.id } className={ 'post-item card' }>
				<div className="post-left">
					<div className="image-container">
						<img src={ post.video.dynamicCover } alt="" className={ 'post-image' }/>
					</div>
					{/*<p className={ "date" }>{ new Date(post.createdAt).toLocaleDateString() }</p>*/}
				</div>
				<div className="post-middle">
					<p className="text-small">
						{truncateString(post.desc, 100)}
					</p>
				</div>
				<div className="post-data post-right">
					<article className="data-item">
						<h6 className="font-semi-bold text-secondary mb-0">Views</h6>
						<h5 className="value">{ post.stats.playCount }</h5>
					</article>
					<article className="data-item">
						<h6 className="font-semi-bold text-secondary mb-0">Likes</h6>
						<h5 className="value">{ post.stats.diggCount }</h5>
					</article>
					<article className="data-item">
						<h6 className="font-semi-bold text-secondary mb-0">Comment</h6>
						<h5 className="value">{ post.stats.commentCount }</h5>
					</article>
					<article className="data-item">
						<h6 className="font-semi-bold text-secondary mb-0">Shares</h6>
						<h5 className="value">{ post.stats.shareCount }</h5>
					</article>
				</div>
			</article>
		}) }

	</div>
}