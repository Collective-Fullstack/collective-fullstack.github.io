import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    background: '#06060e',
    text: '#fff',
    brand: {
      primary: '#FF4019',
      secondary: '#00768E',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text',
        fontFamily: '"Helvetica Neue", "Helvetica", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontWeight: '500',
      },
    },
  },
});
