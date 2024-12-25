import React from 'react'
import '../../src/style.css'
const ChatList = ({ chat }) => {
    const user = localStorage.getItem('user')
    const SenderChat = ({ message, username }) => {
        return (
            <>
                <div className='chat_sender'>
                    <img src="https://i.pinimg.com/736x/97/39/5e/97395e774f335d862cef7fc0e9b22956.jpg" alt="" />
                    <p>
                        <strong>{username}</strong>
                        {message}
                    </p>
                </div>
            </>
        )
    }



    const RecieverChat = ({ message, username }) => {
        return (
            <>
                <div className='chat_reciever'>
                    <img src="https://i.pinimg.com/474x/1d/34/b4/1d34b456e272ae30447812388d132ca6.jpg" alt="" />
                    <p>
                        <strong>{username}</strong>
                        {message}
                    </p>
                </div>
            </>
        )
    }
    return (
        <div className='chat_list'>
            {chat.map((chat, index) => {

                if (chat.user === user) {
                    return <SenderChat
                        key={index}
                        message={chat.message}
                        username={chat.user}
                    //    avatar = {chat.avatar}
                    />
                }
                if (chat.user === user) {
                    return <RecieverChat
                        key={index}
                        message={chat.message}
                        username={chat.user}
                    //    avatar = {chat.avatar}
                    />
                }






            })}


        </div>
    )
}

export default ChatList
