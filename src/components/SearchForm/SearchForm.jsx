import './SearchForm.css'
export default function SearchForm() {

	return <form className="search-form">

		<input type="text" placeholder={ "Search TikTok Accounts" }/>
		<button className="icon-container">
			<i className={ "icon" } data-feather="search"></i>
		</button>
	</form>
}