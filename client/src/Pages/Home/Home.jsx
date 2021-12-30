import TopBar from "../../Components/TopBar/TopBar";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import './home.css';

export default function Home() {
    return (
        <>
            <TopBar/>
            <div className="homeContainer">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>
        </>
    )
}
