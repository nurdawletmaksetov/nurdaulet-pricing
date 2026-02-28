import './App.css'
import {Navbar} from "@/scenes/navbar/Navbar.tsx";
import {Home} from "@/scenes/home/Home.tsx";
import {About} from "@/scenes/about/About.tsx";
import {ProjectSlide} from "@/scenes/carousel/ProjectSlide.tsx";
import {Pricing} from "@/scenes/pricing/Pricing.tsx";
import {Footer} from "@/scenes/footer/Footer.tsx";
import {AudioPlayer} from "@/shared/AudioPlayer.tsx";

function App() {

    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <ProjectSlide/>
            <Pricing/>
            <AudioPlayer/>
            <Footer/>
        </div>
    )
}

export default App
