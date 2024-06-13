import { layout, styles } from '../util/style'
import { features } from '../util/constants'
import FeatureCard from './feature-card'
import Button from './button'



export default function Buisness() {
  return (
   <section id='features' className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Biznes rivojlantiring, pulni biz hal qilamiz</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa maxime iusto, quibusdam laudantium veniam perspiciatis fuga laborum ut vero? </p>
        <Button styles={'mt-10'} text={'Boshlash'} />
    </div>
    <div className={`${layout.sectionImage} flex-col`}>
      {features.map((feature, idx) => (
        <FeatureCard key={feature.id} {...feature} idx={idx}  />
      ))}
    </div>
   </section>
  )
}
