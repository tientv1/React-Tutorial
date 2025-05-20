import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
    return (
        <>
            <UserGreeting isLoggedIn={true} username="tientv" />
            {/* <Student name={"tientv"} age={30} isStudent={true} />
            <Student /> */}
            {/* <Header /> */}
            {/* <Card />*/}
            {/* <Footer /> */}
            {/* <Food /> */}
            {/* <Button /> */}
        </>
    );
}

export default App;
