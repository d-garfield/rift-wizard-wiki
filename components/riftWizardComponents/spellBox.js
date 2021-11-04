import { useState } from "react";
const SpellBox = ({title , schools, level, charges, range, upgrades }) => {
	const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
	
	return ( 
		<div className="border-box pt2 ph1 mb2  b--light-silver hover-bg-near-black w-50 v-mid ba db-m " onClick={toggle}>
				<span className="w-20 f5 v-mid dib-l db-m b">{title}</span>

				<div className="flex-l flex-row-l db-m">

					<div className=" w-40 ">
						{schools.length > 0 &&
							<div className="">
								<span className="">Type: </span>
								{schools.map((string, ind) => {
									if (ind == schools.length - 1) 
									{ return <span key={ind}> {string} </span>; } { return <span key={ind}> {string}, </span>; }
								}
								)}

								{upgrades.length > 0 &&
									<div className="">
										<span>Upgrades: </span>
										<div className="expand" style={{ display: showMe ? "none" : "inline-block" }}>(click to expand)</div>

										<div className="upgrades" style={{ display: showMe ? "inline-block" : "none" }}>
											<hr />
											{upgrades.map(({ title, description, cost }, idx) => {
												return <span key={idx}>{title + " - " + description + "  -  SP: " + cost + (idx === upgrades.length - 1 ? " " : " ")}<hr /></span>;
											})}
										</div>
									</div>}
							</div>}
					</div>

					<span className="w-10">SP: {level}</span>
					<span className="w-20">Charges: {charges}</span>
					<span className="w-20">Range: {range}</span>
				</div>





				<p>  </p>
			</div>
			
	 );
}
 
export default SpellBox;