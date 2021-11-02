import shrineList from "../../components/data/shrines.json"
import ShrineBox from "../../components/riftWizardComponents/shrineBox"

const Shrines = () => {


	let arrOfData = shrineList
	let list = arrOfData.map( (val,ind) => (
		<ShrineBox 
			key={ind} 
			title={val.title} 
			desc={val.desc}
			conditions={val.conditions}
			
			/>
	) )




	return ( 
		<div className="w-80 ml-auto mr-auto">
			<h1>Shrines</h1>

			<ul>
				{list}
			</ul>


		</div>
	 );
}
 
export default Shrines;