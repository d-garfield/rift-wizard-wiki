const SkillBox = ({title , school, level, appTo, appWhat}) => {
	return ( 
		<div className="border-box pt2 ph1 mb2  b--light-silver hover-bg-near-black w-100 v-mid dib-l ba db-m ">
			<span className="w-20 f5 v-mid dib-l db-m b">{title}</span>

			<div className="flex-l flex-row-l db-m">

            
            <span className="w-20">Type: 
                {school.map( (string,ind) => {
							if ( ind == school.length-1 )
                            {return <span key={ind}> {string}</span>}
                            {return <span key={ind}> {string}, </span>}
						}
							) }
                            </span>
				<span className="w-20">Level: {level}</span>
                
                <span className="w-20">{appTo}</span>


				<div className=" w-30 ">
					{appWhat.length>0 && 
						<div className="">
						<span className=""> </span>
						{appWhat.map( (string,ind) => {
							if ( ind == appWhat.length-1 ){return <span key={ind}> {string} </span>}{return <span key={ind}> {string}, </span>}
						}
							) }
							
						</div>
					}
			
               
			</div>
            



			<p>  </p>
		</div>
        </div>
	 );
}
 
export default SkillBox;