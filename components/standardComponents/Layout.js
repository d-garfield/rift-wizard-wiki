import RwFooter from "./RwFooter";
import RwHeader from "./RwHeader";

const Layout = ( {children} ) => {
	return ( 
		<>
			<RwHeader />
			{children}
			<RwFooter />
		</>
	 );
}
 
export default Layout;