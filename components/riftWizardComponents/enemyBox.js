import { useState } from "react";
const EnemyBox = ({name , hp, tags, resists, attacks}) => {
	const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
	
	return ( 
        <section className=" border-box pt2 ph1 mb2  b--light-silver hover-bg-near-black w-50 v-mid ba db-m " onClick={toggle}>
		<section className=" border-box pt2 ph1 mb2  b--light-silver hover-bg-near-black w-60 v-mid ba db-m " onClick={toggle}>
				<span className="w-100 f5 v-mid dib-l db-m b">{name}</span>
                </section>

				<div className="">
                


					<span className="w-10">HP: {hp}</span>
					<div className=" w-100 ">
						{tags.length > 0 &&
							<div className="w-100">
								<span className=""> </span>
								{tags.map((string, ind) => {
									if (ind == tags.length - 1) 
									{ return <span key={ind}> {string} </span>; } { return <span key={ind}> {string}, </span>; }
								}
								)}
                    
								{resists.length > 0 &&
									<div className="">
                                        <section className="w-30">
										<span>Resists:<hr/></span>
                                        </section>
										
											
											{resists.map(({ type, amount}, idx) => {
												return <span key={idx}>{type + " : " + amount+ "%"+ (idx === resists.length - 1 ? " " : " ")}<br/></span>;
											})}
                                        </div>
									
									}
							</div>}
					</div>
           





				<p>  </p>
			</div>
            
            </section>
			
	 );
}
 
export default EnemyBox;