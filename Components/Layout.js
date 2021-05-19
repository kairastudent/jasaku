import Head from "next/head";
import NavBar from "./Navbar";
function Layout({ children, title = "Jasaku" }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon-180x180.png"
          sizes="180x180"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Yuk Jasaku, Digitalisai UMKM Indonesia"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,800"
        />
      </Head>
      <NavBar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
