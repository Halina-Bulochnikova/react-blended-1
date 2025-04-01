import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';



const Statistics = ({stats}) => {
  return (
    <>
      <h3 className={style.title}>Main Statistics</h3>

      <ul className={style.list}>

        {stats.map(({ id, icon, total, title }) => (
          <li key={id} className={style.item}>
            <StatisticsItem 
            icon={icon}
            total={total}
            title={title}
            />
          </li>
        ))
          
        }
        
      </ul>
    </>
  );
};

export default Statistics;
