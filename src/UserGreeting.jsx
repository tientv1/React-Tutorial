function UserGreeting(props) {
    const welcomeMsg = <h2>Welcome {props.username}</h2>;
    const loginPromt = <h2>Please log in to continue</h2>;

    return props.isLoggedIn ? welcomeMsg : loginPromt;
}

export default UserGreeting;
