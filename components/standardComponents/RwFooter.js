import Link from "next/link"

const RwFooter = () => {
	return ( 
		<footer className="ml-auto mr-auto w-100  ph3 ph5-m ph6-l mid-gray pt4 mt4 pb3">
			<small className="f6 db tc">© 2021 <b className="ttu">Rift Wizard Unoffical Wiki</b>., All Rights Reserved</small>
			<div className="tc mt3">
				<Link href="https://github.com/aimforbigfoot/rift-wizard-wiki" target="_blank"><a>Edit this wiki!</a></Link>
				{/* <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
				<a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
				<a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a> */  } 
			</div>
		</footer>
	 );
}
 
export default RwFooter;