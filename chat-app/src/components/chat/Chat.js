import React from "react";
import MessageBox from "./MessageBox/MessageBox";
import Messages from "./MessageBox/Messages/Messages";
import useChat from "./MessageBox/Messages/_useChat";

const Chat = () => {
    const {messages, sendMessage} = useChat()
    return (
        <div>
            <Messages
                messages={messages}
            />
            <MessageBox
                onSendMessage={ message => {
                    sendMessage({message})
                }}
            />
        </div>
    )
}
export default Chat;