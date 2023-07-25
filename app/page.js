import styles from './page.module.css';
import List from '../components/list';

export default function Home() {
  const defaultItems = [{ name: "Chores", id: "001" }, { name: "Study", id:"002" }, { name: "Exam", id: "003" }];

  return (
    <main className={styles.main}>
      <List listItems={defaultItems} />
    </main>
  );
}

