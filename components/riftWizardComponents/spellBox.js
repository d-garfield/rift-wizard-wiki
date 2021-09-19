const SpellBox = ({title , schools, level, charges, range }) => {
	return ( 
		<div className="border-box pt2 ph1 mb2  b--light-silver hover-bg-near-black w-100 v-mid dib-l ba db-m ">
			<span className="w-20 f5 v-mid dib-l db-m b">{title}</span>

			<div className="flex-l flex-row-l db-m">

				<div className=" w-40 ">
					{schools.length>0 && 
						<div className="">
						<span className="">Schools: </span>
						{schools.map( (string,ind) => {
							if ( ind == schools.length-1 ){return <span key={ind}> {string} </span>}{return <span key={ind}> {string}, </span>}
						}
							) }
						</div>
					}
				</div>

				<span className="w-10">Level: {level}</span>
				<span className="w-10">Charges: {charges}</span>
				<span className="w-10">Range: {range}</span>
			</div>




			<p>  </p>
		</div>
	 );
}
 
export default SpellBox;