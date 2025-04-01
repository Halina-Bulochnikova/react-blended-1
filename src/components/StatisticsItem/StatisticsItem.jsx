import style from './StatisticsItem.module.css';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';


const iconMap = {
  people: MdPeople,
  production: MdOutlineProductionQuantityLimits,
  tree: GiTreeDoor,
  trumb: FaRegThumbsUp,
};


const StatisticsItem = ( {icon, title, total} ) => {
  const IconComponent = iconMap[icon] || MdPeople;
  
  return <>
  <IconComponent size={30} className={style.icon} />
  <span className={style.counter}>{total}</span>
  <p className={style.text}>{title}</p>
</>
};

export default StatisticsItem;
