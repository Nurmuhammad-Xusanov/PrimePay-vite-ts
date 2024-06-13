import { styles } from "./util/style";
import { Navbar, Home, Statistics, Contract, Billing, Buisness, Cta, Testimonials, Clients, Footer } from "./components";
export default function App() {
  return (
    <div className=" w-full bg-primary overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Buisness />
          <Testimonials />
          <Clients/>
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
}
