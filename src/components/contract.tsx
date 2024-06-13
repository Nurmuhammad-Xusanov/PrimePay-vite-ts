import { layout, styles } from '../util/style'
import { card } from '../assets'
import Button from './button'

export default function Contract() {
  return (
    <section id='products' className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Bir necha oson qadamda <br className={`sm:block hidden`}/> kontrakt tuzish</h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius quo fugit inventore voluptas facilis ullam, voluptates quasi pariatur consequuntur?
            </p>
            <Button styles={'mt-10'} text={"Boshlash"} />
        </div>
        <div className={`${layout.sectionImage}`}>
            <img src={card} alt='card' className={`w-[100%] h-[100%]`} />
        </div>
    </section>
  )
}
