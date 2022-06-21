import React, { useContext, useState } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { Button, Input } from '@mui/material';
import { UserContext } from '../../../App';

const MessageBox = (scroll) => {

    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBeIOYFvOh2vXiXLr1xyTLWNV4a20LqF70",
        authDomain: "authentication-is-running.firebaseapp.com",
        projectId: "authentication-is-running",
        storageBucket: "authentication-is-running.appspot.com",
        messagingSenderId: "298009180232",
        appId: "1:298009180232:web:981bba4d9d34150f79407d"
    })
const [loggedInusers, setLoggedInUsers] = useContext(UserContext);

    const db = firebaseApp.firestore()
    const auth = firebase.auth()

    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    );
};

export default MessageBox;
