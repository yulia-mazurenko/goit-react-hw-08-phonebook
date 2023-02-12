import { BackDrop } from 'components/Notifications/Notifications.styled';

export const Error = () => {
  return (
    <BackDrop>
      <p>
        Something went wrong :(
        <br />
        Try again
      </p>
    </BackDrop>
  );
};
