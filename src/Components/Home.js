import React from 'react'

function Home() {

    function myfun() {
        alert("hiiiiiiiiiiiiiii")
    }
    return (
        <>
            <div>
                <button onClick={myfun} >Click me</button>
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home
