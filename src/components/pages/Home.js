import '../../../src/style.css';

import Header from "../ui/Header";
import Navigator from "../ui/Navigator";

export const Home = () => {
    return (
        <div className="container">
            <Header/>
            <Navigator/>
        </div>
    );
}