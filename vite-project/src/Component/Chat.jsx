import React, { useEffect, useState } from "react";
import Login from "./Login";
import ChatList from "./ChatList";
import InputText from "./InputText";
import socketIOClient from "socket.io-client";
import { FaYoutube } from "react-icons/fa6";

const Chat = () => {
    const [user, setUser] = useState(
        null
    );
    const [chats, setChats] = useState([]);
    const socketio = socketIOClient("http://localhost:8190");

    useEffect(() => {
        socketio.on("chat", (chats) => {
            setChats(chats);
        });

        socketio.on("message", (msg) => {
            setChats((prevChats) => [...prevChats, msg]);
        });

        return () => {
            socketio.off("chat");
            socketio.off("message");
        };
    }, [socketio]);

    const addMessage = (chat) => {
        const newChat = {
            username: localStorage.getItem("user"),
            message: chat,
            avatar: localStorage.getItem("avatar"),
        };
        socketio.emit("newMessage", newChat);
    };

    const Logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("avatar");
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <div className="home">
                    <div className="chats_header">
                        <h4>Username: {user}</h4>
                        <p>
                            <FaYoutube className="chats_icon" /> Code With Yousaf
                        </p>
                        <p className="chats_logout" onClick={Logout}>
                            <strong>Logout</strong>
                        </p>
                    </div>
                    <ChatList chats={chats} />
                    <InputText addMessage={addMessage} />
                </div>
            ) : (
                <Login setUser={setUser} />
            )}
        </div>
    );
};

export default Chat;
