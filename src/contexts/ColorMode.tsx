/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface IColorModeProps {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext({
  // eslint-disable-next-line no-empty-function
  toggleColorMode: () => {}
});

const ColorModeProvider: React.FC<IColorModeProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#eb172f'
          }
        },
        components: {
          MuiInputLabel: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#fff' : '#121212'
              }
            }
          },
          MuiTypography: {
            variants: [
              {
                props: {
                  variant: 'subtitle1'
                },
                style: {
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.4
                }
              },
              {
                props: {
                  variant: 'body1'
                },
                style: {
                  fontSize: 14
                }
              },
              {
                props: {
                  variant: 'body2'
                },
                style: {
                  fontSize: 12
                }
              }
            ]
          }
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
