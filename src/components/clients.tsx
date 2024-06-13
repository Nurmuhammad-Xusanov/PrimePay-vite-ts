import { styles } from '../util/style'
import { clients } from '../util/constants'
import CleintCard from './client-card'

export default function Clients() {
  return (
    <div className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client, idx) => (
                <CleintCard key={idx} {...client}/>
            ))}
        </div>
    </div>
  )
}
