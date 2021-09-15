import Link from "next/link"

const RwTextLink = ({_href, text}) => {
	return ( 
		<Link href={_href}  >
			<a className=" underline-hover link pv1 ph1 ">{text}</a>
		</Link>
	 );
}
 
export default RwTextLink;