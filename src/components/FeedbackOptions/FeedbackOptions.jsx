import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

// Import your emoji images
import goodEmoji from '../images/good.png';
import neutralEmoji from '../images/neutral.png';
import badEmoji from '../images/bad.png';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [hoverState, setHoverState] = useState('');

  const emojis = {
    good: goodEmoji,
    neutral: neutralEmoji,
    bad: badEmoji
  };

  return (
    <div className={s.feedback__container}> 
      {Object.keys(options).map(option => (
        <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        onMouseEnter={() => setHoverState(option)}
        onMouseLeave={() => setHoverState('')}
        className={`${s.feedback__btn} ${s[option]}`}
    >
    {hoverState === option ? (
      <img src={emojis[option]} alt={option} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} 
      onLoad={(e) => e.target.classList.add('loaded')} />
    ) : (
      option
    )}
  </button>
))}

    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
