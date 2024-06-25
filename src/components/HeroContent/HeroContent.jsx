import './HeroContent.css'
import SearchForm from "../SearchForm/SearchForm.jsx";
export default function HeroContent() {

	return <section className="hero">
		<div className="hero-content">
			<h1 className={ 'hero-headline' }>Powerful In-Depth Analytics for Instagram</h1>
			<p className="hero-text">
				InsTrack offers powerful in-depth analytics and actionable insights for brands,
				influencers and agencies. Trusted by millions since 2012. Powered by the official Instagram API.
			</p>
			<SearchForm />
		</div>

	</section>
}