import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { hideNotifications } from '../../redux/features/notifications/notificationsSlice';
import {
  BackDrop,
  MessageWrapper,
  NotificationButton,
} from './Notifications.styled';
import {
  selectNotificationColor,
  selectNotificationMessage,
} from 'redux/features/notifications/selectors';

export const Notifications = ({ isVisible }) => {
  const message = useSelector(selectNotificationMessage);
  const color = useSelector(selectNotificationColor);
  const dispatch = useDispatch();

  return (
    <BackDrop>
      <MessageWrapper style={{ backgroundColor: color }}>
        {message}
        <NotificationButton
          aria-label="close"
          onClick={() => dispatch(hideNotifications())}
        >
          <MdOutlineClose />
        </NotificationButton>
      </MessageWrapper>
    </BackDrop>
  );
};
