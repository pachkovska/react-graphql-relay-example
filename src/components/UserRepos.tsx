import React, { useState, useRef, useEffect } from 'react';
import RepoList from "./RepoList";

export default function UserRepos() {
    const [login, setLogin] = useState('');
    const [sendQuery, setSendQuery] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!login) setSendQuery(false);
    }, [login])

    const onPressEnter = (e) => {
        if (e.keyCode === 13) {
            inputRef.current.blur();
            setSendQuery(true);
        }
    }

    return (
        <>
            <input ref={inputRef} type="text" value={login} onChange={(e) => setLogin(e.target.value)} onKeyUp={(e) => onPressEnter(e)}/>
            {login && sendQuery && <RepoList login={login}/>}
        </>
    )
}