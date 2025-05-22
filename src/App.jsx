import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
// import List from "./List";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import Timer from "./Timer";
import Search from "./Search";

function App() {
    // const fruits = [
    //     { id: 1, name: "apple", calories: 95 },
    //     { id: 2, name: "orange", calories: 80 },
    //     { id: 3, name: "banana", calories: 105 },
    //     { id: 4, name: "coconut", calories: 50 },
    //     { id: 5, name: "pineapple", calories: 40 },
    // ];
    // const vegetables = [
    //     { id: 1, name: "apple", calories: 95 },
    //     { id: 2, name: "orange", calories: 80 },
    //     { id: 3, name: "banana", calories: 105 },
    //     { id: 4, name: "coconut", calories: 50 },
    //     { id: 5, name: "pineapple", calories: 40 },
    // ];

    return (
        <>
            <Search />
            {/* <Timer /> */}
            {/* <MyComponent /> */}
            {/* <ColorPicker /> */}
            {/* <Counter /> */}
            {/* {fruits.length > 0 ? (
                <List items={fruits} category="Fruits" />
            ) : (
                <h1>Không có sản phẩm</h1>
            )}
            {vegetables.length > 0 ? (
                <List items={vegetables} category="Vegetables" />
            ) : (
                <h1>Không có sản phẩm</h1>
            )} */}
            {/* <UserGreeting isLoggedIn={true} username="tientv" /> */}
            {/* <Student name={"tientv"} age={30} isStudent={true} />
            <Student /> */}
            {/* <Header /> */}
            {/* <Card />*/}
            {/* <Footer /> */}
            {/* <Food /> */}
            {/* <Button /> */}
            {/* <ProfilePicture /> */}
        </>
    );
}

export default App;
