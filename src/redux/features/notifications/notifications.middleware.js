import {
  addNotifications,
  changeColorNotification,
  hideNotifications,
} from '../notifications/notificationsSlice';

export const notificationsMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    const contacts = getState().contacts.contacts.items;

    if (action.type === 'contacts/addContact/fulfilled') {
      if (
        !contacts.some(
          contact =>
            contact.name === action.meta.arg.name ||
            contact.number === action.meta.arg.number
        )
      ) {
        dispatch(
          addNotifications(`Contact ${action.payload.name} was added`),
          dispatch(changeColorNotification('rgb(66, 225, 170,  60%)'))
        );
        setTimeout(() => {
          dispatch(hideNotifications());
        }, 2000);
        next(action);
        return;
      }

      if (contacts.some(contact => contact.name === action.meta.arg.name)) {
        dispatch(
          addNotifications(`${action.meta.arg.name} is already in contacts`),
          dispatch(changeColorNotification('rgba(66, 153, 225, 0.6)'))
        );
        setTimeout(() => {
          dispatch(hideNotifications());
        }, 2000);
        dispatch({ type: 'contacts/addContact/rejected' });
        return;
      }

      if (contacts.some(contact => contact.number === action.meta.arg.number)) {
        dispatch(
          addNotifications(
            `Contact with number ${action.meta.arg.number} is already in contacts`
          ),
          dispatch(changeColorNotification('rgba(66, 153, 225, 0.6)'))
        );
        setTimeout(() => {
          dispatch(hideNotifications());
        }, 2000);
        dispatch({ type: 'contacts/addContact/rejected' });

        return;
      }
    }

    if (action.type === 'contacts/deleteContact/fulfilled') {
      const contactToDelete = contacts.find(
        contact => contact.id === action.payload.id
      );

      dispatch(
        addNotifications(`Contact ${contactToDelete.name} was deleted`),
        dispatch(changeColorNotification('rgb(227, 42, 73,  60%)'))
      );
      setTimeout(() => {
        dispatch(hideNotifications());
      }, 2000);
    }

    if (action.type === 'auth/login/fulfilled') {
      dispatch(addNotifications(`Login is successful`));
      dispatch(changeColorNotification('rgb(66, 225, 170,  60%)'));

      setTimeout(() => {
        dispatch(hideNotifications());
      }, 2000);
    } else if (action.type === 'auth/login/rejected') {
      dispatch(addNotifications(`Login is unsuccessful :(  Try again)`));
      dispatch(changeColorNotification('rgb(227, 42, 73,  60%)'));

      setTimeout(() => {
        dispatch(hideNotifications());
      }, 2000);
    }

    if (action.type === 'auth/register/fulfilled') {
      dispatch(addNotifications(`Register is successful`));
      dispatch(changeColorNotification('rgb(66, 225, 170,  60%)'));

      setTimeout(() => {
        dispatch(hideNotifications());
      }, 2000);
    } else if (action.type === 'auth/register/rejected') {
      dispatch(addNotifications(`Register is unsuccessful :(  Try again)`));
      dispatch(changeColorNotification('rgb(227, 42, 73,  60%)'));

      setTimeout(() => {
        dispatch(hideNotifications());
      }, 2000);
    }

    next(action);
  };
