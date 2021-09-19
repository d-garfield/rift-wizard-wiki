import spellsList from "../../components/data/spells.json"
import SpellBox from "../../components/riftWizardComponents/spellBox";



const Spells = () => {


	let arrOfData = spellsList
	let list = arrOfData.map( (val,ind) => (
		<SpellBox 
			key={ind} 
			title={val.title} 
			schools={val.schools}
			level={val.level}
			charges={val.charges}
			range={val.range}
			/>
	) )




	return ( 
		<div className="w-80 ml-auto mr-auto">
			<h1>Spells</h1>

			<ul>
				{list}
			</ul>


		</div>
	 );
}
 
export default Spells;