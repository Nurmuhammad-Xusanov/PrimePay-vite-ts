
import { layout, styles } from '../util/style'
import { appStore, bill, google } from '../assets'
import { FC } from 'react'

const Billing: FC = ():JSX.Element => {
  return (
    <section id='features' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionReverse} flex-1 flex  justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative  `}>
        <img src={bill} alt="bill" className={`w-[100%] h-[100%] relative z-[5]`} />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        Hisob kitob va fakturial <br className='sm:block hidden'/> osongina boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut facere laborum debitis, doloremque ratione aperiam blanditiis alias expedita ab. </p>

        <div className='flex flex-row flex-wrap smm:mt-10 mt-6'>
          <img src={google} alt="google" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={appStore} alt="appStore" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
        </div>
      </div>
    </section>
  )
}
export default Billing