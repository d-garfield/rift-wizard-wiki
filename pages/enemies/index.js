import enemyList from "../../components/data/enemies.json"
import EnemyBox from "../../components/riftWizardComponents/enemyBox"

const Enemies = () => {


	let arrOfData = enemyList
	let list = arrOfData.map( (val,ind) => (
		<EnemyBox 
			key={ind} 
			name={val.name} 
			hp={val.hp}
			tags={val.tags}
			resists={val.resists}
            attacks={val.attacks}
			/>
	) )




	return ( 
		<div className="w-80 ml-auto mr-auto">
			<h1>Enemies</h1>

			<ul className="mainList">
				{list}
			</ul>


		</div>
	 );
}
 
export default Enemies;