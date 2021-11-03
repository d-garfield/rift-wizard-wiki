import Link from "next/link"

const RwHeader = () => {
	return ( 
		<header className="pa3 pa4-ns">
			<Link href="/" ><a className="link dim near-white b f6 f5-ns dib mr3">Unoffical Rift Wizard Wiki</a></Link>
			
			<div className="ml-auto"></div>
			{/* <a className="link dim moon-gray    f6 f5-ns dib mr3" href="#" title="Home">Spells</a>
			<a className="link dim moon-gray    f6 f5-ns dib mr3" href="#" title="About">About</a>
			<a className="link dim moon-gray    f6 f5-ns dib mr3" href="#" title="Store">Store</a>
			<a className="link dim moon-gray    f6 f5-ns dib" href="#" title="Contact">Contact</a> */}
		</header>
	 );
}
 
export default RwHeader;