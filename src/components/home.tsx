import { styles } from "../util/style";
import { robot } from "../assets";
import Button from "./button";

export default function Home() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      {/* animation image */}
      <div className={`flex-1 ${styles.flexStart} md:my-0 my-10`}>
        <img src={robot} alt="robot" className={`w-[100%] h-[100%] rounded-sm relative`} />
      </div>
      {/* information */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6 relative`}
      >
        {/* Discount information */}
        <div className={`py-[6px] px-4 rounded-[10px] bg-slate-500 bg-discount-gradient`}>
          <p className={`${styles.paragraph}`}> <span className="text-white">20%</span> Chegirma <span className="text-white">1 Oylik</span>  Xisob Uchun</p>
        </div>

        {/* Title */}
        <div className={`w-full`}>
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br/> 
            <span className={`text-gradient`}>
            To'lov usuli
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className={`${styles.paragraph} mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem commodi consectetur nobis sunt assumenda minima nostrum placeat magni excepturi in.
        </p>

        {/* Getting Started */}
        <Button text={"Boshlash"} styles={`mt-2`}/>

        {/* Gradient background */}
        <div className={`absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient`}/>
        <div className={`absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient`}/>
        <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient`}/>
      </div>
    </section>
  );
}
