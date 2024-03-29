import PropTypes from 'prop-types';
import s from './Notifications.module.css';

export const Notification = ({ message }) => (
    <p className={s.notification__text}>
        {message}
    </p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}