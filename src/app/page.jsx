import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CartegoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";


export default function Home() {
  return (
  <div className={styles.container}>
    <Featured />
    <CartegoryList />
    <div className={styles.content}>
      <CardList />
      <Menu />
    </div>
    
  </div>
  );
}
