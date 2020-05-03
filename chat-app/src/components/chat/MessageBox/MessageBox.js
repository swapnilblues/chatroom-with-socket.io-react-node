import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const MessageBox = ({onSendMessage}) => {
    const [message, setMessage] = useState("");

    return (
        <TextField
            fullWidth
            label="Message"
            multiline
            margin="normal"
            rows="4"
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => {
                if(e.key === "Enter") {
                    e.preventDefault();
                    onSendMessage(message);
                    setMessage("");
                }

            }}
            value={message}
        />
    )
}

export default MessageBox