import skillList from "../../components/data/skills.json"
import SkillBox from "../../components/riftWizardComponents/skillBox"

const Skills = () => {


	let arrOfData = skillList
	let list = arrOfData.map( (val,ind) => (
		<SkillBox 
			key={ind} 
			title={val.title} 
			school={val.schools}
			level={val.level}
            appTo={val.applies_to}
            appWhat={val.applies_what}
			
			/>
	) )




	return ( 
		<div className="w-80 ml-auto mr-auto">
			<h1>Skills</h1>

			<ul>
				{list}
			</ul>


		</div>
	 );
}
 
export default Skills;