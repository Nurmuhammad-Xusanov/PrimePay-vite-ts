import { FC } from 'react';
import { styles } from '../util/style'
interface Props {
    logo: JSX.Element;
    title: string;
}
const CleintCard: FC<Props> = ({logo, title}) => {
  return (
    <div className={`${styles.flexCenter} flex sm:min-w-[129px] min-w-[120px] m-5 cursor-pointer  `}>
        {logo}
        <p className={`${styles.paragraph} font-semibold text-gradient`}>{title}</p>
    </div>
  )
}

export default CleintCard;