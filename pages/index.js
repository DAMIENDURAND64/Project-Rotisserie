import Body from "../src/Components/Body";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rotisserie Harana</title>
        <meta
          name="google-site-verification"
          content="fOXnzzGM8BauGzG8631OhoU4A7uKD-3-EDSX7dIKNa8"
        />
        <meta
          name="description"
          content="Rotisserie qui propose des poulets fermiers à la rotissoire"
        />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
