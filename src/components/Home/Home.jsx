import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import styles from "./Home.module.css";

function Home() {
  return (
    <Layout>
        <div className="homeContainer">
            <div className="heroContainer"></div>
            <div className="previewShop"></div>
        </div>
    </Layout>
  );
}

export default Home;
