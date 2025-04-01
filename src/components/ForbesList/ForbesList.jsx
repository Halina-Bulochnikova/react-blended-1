import style from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';
import PropTypes from 'prop-types';

const ForbesList = ({ forbes }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(({ id, avatar, name, capital }) => (
          <li key={id} className={style.item}>
            <ForbesListItem
              avatar={avatar}
              name={name}
              capital={capital}
    
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForbesList;
