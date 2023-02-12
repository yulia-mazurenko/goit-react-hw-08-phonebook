import bgImg from '../bgimage.jpg';
import { Box, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Box style={{ backgroundImage: `url("${bgImg}")` }}>
      <Title>
        We greeting you on the main page of the phonebook application:)
      </Title>
    </Box>
  );
};

export default HomePage;
