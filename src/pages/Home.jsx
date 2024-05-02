import Banner from "../components/Banner";
import HomeServices from "../components/HomeServices";
import About from "./About";

const Home = () => {
    return (
        <div className="conatiner mx-auto">
            <Banner></Banner>
            <About></About>

            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;