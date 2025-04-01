import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import PropTypes from 'prop-types';
import style from './ForbesListItem.module.css';

const iconForbs = {
  dollar: BiDollarCircle,
  bullish: FcBullish,
  bearish: FcBearish
}

const ForbesListItem = ({ avatar, name, capital, type }) => {
  const IconComponent = iconForbs[type] || BiDollarCircle;

  return (

  <>
  <img
    className={style.avatar}
    src={avatar}
    alt="Mark Zuckerberg"
  />
  <h3 className={style.title}>{name}</h3>
  <span className={style.capital}>
    {capital}<BiDollarCircle color="#2196f3" size={22} />
  </span>
</> 
)
};

ForbesListItem.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['bullish', 'bearish']).isRequired,
    }
  )
)
}

export default ForbesListItem;
