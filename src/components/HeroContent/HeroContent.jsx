import './HeroContent.css'
import SearchForm from "../SearchForm/SearchForm.jsx";
export default function HeroContent() {

	return <section className="hero">
		<div className="hero-content">
			<h1 className={ 'display-1 mb-1 text-center hero-text-bg' }>Powerful In-Depth Analytics for Instagram</h1>
			<p className="lead text-center font-weight-light mb-2">
				InsTrack offers powerful in-depth analytics and actionable insights for brands,
				influencers and agencies. Trusted by millions since 2012. Powered by the official Instagram API.
			</p>
			<SearchForm />
		</div>

	</section>
}