import Image from "next/image"
import mainImage from "../public/librarycapsule.png"
import RwTextLink from "../components/standardComponents/RwTextLink"

export default function Home() {
  return (
    <div>

      <div className='tc'>
        <p>Welcome to the...</p>
        <h1>Unoffical Rift Wizard Wiki</h1>
        {/* <p className="f7 mt0 pt0">hopefully</p>
        <p>Below are some links that might help you out on your wizardly journey</p> */
        /* <Image layout="intrinsic"  src={mainImage} alt="Epic Rift Wizard Image"></Image> */}
      </div>

      <div id="linkSection" className="pt3 tc">
          <RwTextLink _href="/spells" text="Spells"></RwTextLink> <br />
          <RwTextLink _href="/Shrines" text="Shrines"></RwTextLink><br />
          <RwTextLink _href="/Skills" text="Skills"></RwTextLink><br />

        
      </div>


    </div>

  )
}
