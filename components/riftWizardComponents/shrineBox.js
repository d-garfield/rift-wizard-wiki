const ShrineBox = ({title , desc, conditions}) => {
	return ( 
		<div className="border-box pt2 ph1 mb2  b--light-silver hover-bg-near-black w-100 v-mid dib-l ba db-m ">
			<span className="w-20 f5 v-mid dib-l db-m b">{title}</span>

			<div className="flex-l flex-row-l db-m">

				<div className=" w-20 ">
					
				</div>

			
				<span className="w-20 ph4">Description: {desc}</span>
				<span className="">Conditions: 
                {conditions.map( (string,ind) => {
							if ( ind == conditions.length-1 )
                            {return <span key={ind}> {string}</span>}
                            {return <span key={ind}> {string}, </span>}
						}
							) }
                            </span>
			</div>




			<p>  </p>
		</div>
	 );
}
 
export default ShrineBox;