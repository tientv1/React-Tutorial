import reactLogo from "./assets/react.svg";

function Card() {
    return (
        <div className="card">
            {/* <img src="https://placehold.co/150" alt="profile picture"></img> */}
            <img className="card-image" src={reactLogo}></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">
                I make Youtube videos and play video game
            </p>
        </div>
    );
}

export default Card;
