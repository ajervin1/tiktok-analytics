export default function Footer() {
	return <footer className='footer container pt-2 pb-2'>
		<div className="row justify-between">
			<div className="col-4">
				<h2 className={'text-primary mb-1'}>InsTrack</h2>
				<h6 className={'mb-1 lh-2 text-dark'}>InsTrack offers powerful analytics and in-depth actionable insights for brands, influencers and agencies.</h6>
				<h6 className="text-muted lh-15">1001 Woodward Ave, Suite 500 Detroit, MI 48226, USA</h6>
			</div>
			<div className="col-2">
				<a href="">Top Accounts</a>
			</div>
			<div className="col-2">
				<a href="">Pricing</a>
			</div>
			<div className="col-2 d-flex flex-column">
				<a href="" className={'mb-1'}>Terms of Service</a>
				<a href="" className={'mb-1'}>Privacy Policy</a>
				<a href="">Contact Us</a>
			</div>
		</div>
	</footer>
}