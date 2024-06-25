
import './DataCard.css'
export default function DataCard() {

	return <div className="card-list">
		<div className="card-list-container">
			<article className="data-card">
				<h2 className={ "value" }>100</h2>
				<h6 className={ "category" }>Weekly Posts</h6>
			</article>
			<article className="data-card">
				<h2 className={ "value" }>100</h2>
				<h6 className={ "category" }>Weekly Posts</h6>
			</article>
			<article className="data-card">
				<h2 className={ "value" }>100</h2>
				<h6 className={ "category" }>Weekly Posts</h6>
			</article>
		</div>
	</div>
}