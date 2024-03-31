import styles from './page.module.css';
import LandingPageComponent from "@/pages/LandingPage/LandingPageComponent";
import AboutMeComponent from "@/pages/LandingPage/AboutMe/AboutMeComponent";
import NavbarComponent from "@/app/component/Navbar/Navbar";
import Footer from "@/app/component/Footer/footer";

/*
This file defines the Home component, which represents the main page of the application. It imports various components
such as NavbarComponent, LandingPageComponent, AboutMeComponent, and Footer from their respective files.
*/


// The main function component representing the Home page
export default function Home() {
    return (
        <div>
            <main className={styles.main}> {/*Render all of the imported Component*/}
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
