exports.JoinLobby = (e) => {
        e.preventDefault();
        console.log("hello");
        document.querySelector(".EnterRoomDiv").classList.add('active');;
};

exports.CreatePoll = () => {
    console.log("Create poll");
};

exports.Login = () => {
    console.log("Login");
};