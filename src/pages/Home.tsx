import HomeInfraBanner from "../components/Home/InfraBanner";
import Integration from "../components/Home/Integration";
import Logos from "../components/Home/Logos";
// import Header from "../components/Header/Header";

function Home() {
    return <div className="home">
        <div className="flex flex-col layout-content justify-center align-middle p-15 pt-20 banner-infra-banner">
            <HomeInfraBanner />
            <div className="dashboard-image w-full text text-center mt-20">
                <img src="/images/dashboard.png" className="relative inline-block" />
            </div>
            <Logos />
            <Integration />
        </div>
    </div>;
}

export default Home;