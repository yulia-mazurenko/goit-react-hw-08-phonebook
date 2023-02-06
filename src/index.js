import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from 'components/App';
import { store } from './redux/store';
// import { theme } from './constants/theme';

// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = {
//   styles: {
//     global: {
//       'html, body': {
//         margin: 0,
//         fontFamily: 'Roboto',
//         // color: 'gray.600',
//         lineHeight: 'tall',
//       },
//       a: {
//         color: 'teal.500',
//       },
//       code: {
//         fontFamily: 'monospace',
//       },
//       'h1,h2,h3,h4,h5,h6,p': {
//         margin: 0,
//       },
//       'ul,ol': {
//         padding: 0,
//         margin: 0,
//         listStyle: 'none',
//       },
//     },
//   },
// };

const theme = extendTheme(); //({colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
