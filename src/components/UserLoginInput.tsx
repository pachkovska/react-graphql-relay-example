import React, { useState, useRef, useEffect } from 'react';
import RepoListWrapper from "./RepoListWrapper";

export default function UserLoginInput() {
    const [login, setLogin] = useState('');
    const [sendQuery, setSendQuery] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!login) setSendQuery(false);
    }, [login])

    const onPressEnter = (e) => {
        if (e.keyCode === 13) {
            if (inputRef.current) inputRef.current.blur();
            if (login) {
                setSendQuery(true);
            }
        }
    }

    return (
        <div className="m-4 grid grid-rows-3 justify-items-auto max-h-12">
            <div className="flex flex-wrap justify-center">
                <input ref={inputRef} className="mx-4 w-2/4 h-8 shadow-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent rounded-lg" type="text" value={login} onChange={(e) => setLogin(e.target.value)} onKeyUp={(e) => onPressEnter(e)}/>
                <button className="rounded-full w-48 h-8 shadow-lg bg-green-400 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50" onClick={() => setSendQuery(true)}>Get Repos</button>
            </div>
            {login && sendQuery && <RepoListWrapper login={login}/>}
        </div>
    )
}