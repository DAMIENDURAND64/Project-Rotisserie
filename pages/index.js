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
          content="Rotisserie qui propose des poulets fermiers à la rotissoire ainsi que de l'échine de porc Manex et du jarret de porc Manex en provence de la ferme Belarrea. Present du mercredi au Samedi à Bassussarry au rond point Durruty (10min de Bayonne, Anglet et Biarritz ou BAB) avec le marchand de fruit et legumes de chez Lolo et le Dimanche à la boulangerie d'Osses."
        />
      </Head>
      <div className="flex flex-col-reverse">
        <Footer />
        <Body />
        <Header />
      </div>
    </div>
  );
}
