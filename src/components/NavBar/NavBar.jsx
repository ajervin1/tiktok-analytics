import './NavBar.css'
import { Link } from "react-router-dom";
export default function NavBar() {
	const logoUrl = "https://instrack.app/static/images/logo/logo.svg"
	return <header className="navbar">
		<div className="navbar-wrapper container">
			<div className="navbar-left">
				<div className="logo-wrapper">
					<img className={ "logo" } src={ logoUrl } alt=""/>
					<Link to={"/"} className="brand-text">TikTok Track</Link>
				</div>
			</div>
			<div className="navbar-right">
				<div className="btn btn-primary">
					Login
				</div>
			</div>
		</div>

	</header>
}