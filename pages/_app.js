import { createGlobalStyle, ThemeProvider } from "styled-components";
// import { useEffect } from "react";
// import { register, unregister } from "next-offline/runtime";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background : #FBFBFB;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#000",
  },
};

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   register("/sw.js", { scope: "/" });
  //   return () => {
  //     unregister();
  //   };
  // }, []);
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
