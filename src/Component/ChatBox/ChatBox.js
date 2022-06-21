import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../App';
// import firebase from 'firebase'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import MessageBox from './MessageBox/MessageBox';
import Navbar from '../Navbar/Navbar';
const ChatBox = () => {

    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBeIOYFvOh2vXiXLr1xyTLWNV4a20LqF70",
        authDomain: "authentication-is-running.firebaseapp.com",
        projectId: "authentication-is-running",
        storageBucket: "authentication-is-running.appspot.com",
        messagingSenderId: "298009180232",
        appId: "1:298009180232:web:981bba4d9d34150f79407d"
    })

    const db = firebaseApp.firestore()
    const auth = firebase.auth()


    const [conmessage, setConmessage] = useContext(UserContext);

    const scroll = useRef()
    const [messages, setMessages] = useState([])
    console.log(messages)

    // if (messages.uid === auth.currentUser.uid) {
    //     setConmessage(auth.currentUser.uid.length)
    // }
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'received' : 'sent'}`}>
                            <img className="imgs" src={photoURL} alt="" />
                            <p className="mx-3">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <MessageBox scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    );
};

export default ChatBox;
