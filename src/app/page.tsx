import styles from './page.module.css';
import LandingPageComponent from "@/pages/LandingPage/LandingPageComponent";
import AboutMeComponent from "@/pages/LandingPage/AboutMe/AboutMeComponent";
import NavbarComponent from "@/app/component/Navbar/Navbar";
import Footer from "@/app/component/Footer/footer";

export default function Home() {
    return (
        <div>
            <main className={styles.main}>
                <NavbarComponent/>
                <LandingPageComponent/>
                <AboutMeComponent/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
