import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9ccc53',
      main: '#7cc223',
      dark: '#0f8a00',
    },
    secondary: {
      main: grey[50],
    },
  },
});

export default theme;
