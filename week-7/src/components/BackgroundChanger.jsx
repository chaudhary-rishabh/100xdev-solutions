import React, { useState, useEffect } from 'react'
import "../style/common.css"


// assignment2 for week7
const BackgroundChanger = () => {

    const [changedColor, setChangedColor] = useState({
        backgroundColor: "orange",
    });

    return (
        <div style={{...changedColor, width:"60vw", height:"70vh", boxShadow:"1px 0px 3px black", margin:"100px auto", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <div style={{height:"80%", width:"100%"}}>

            </div>
            <div style={{height:"10%", width:"100%", boxShadow:"2px 0px 4px gray", borderRadius:"50px", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                <Button onClick={() =>setChangedColor({ backgroundColor: "green" })} bgColor="green"/>
                <Button onClick={() => setChangedColor({ backgroundColor: "blue" })} bgColor="blue"/>
                <Button onClick={() => setChangedColor({ backgroundColor: "red" })} bgColor="red"/>
                <Button onClick={() => setChangedColor({ backgroundColor: "pink" })} bgColor="pink"/>
                <Button onClick={() => setChangedColor({ backgroundColor: "yellow" })} bgColor="yellow"/>
                <Button onClick={() => setChangedColor({ backgroundColor: "orange" })} bgColor="orange"/>
                <Button onClick={() => setChangedColor({ backgroundColor: "black" })} bgColor="black"/>
            </div>
        </div>
    )
}

const Button = ({bgColor, onClick}) => {
    return (
        <button onClick={onClick} style={{ backgroundColor:bgColor, border:"none", padding:"5px", borderRadius:"10px", color: "white", fontWeight: "bold", cursor: "pointer", borderBottom:"1px solid black"}}>{ bgColor }</button>
    )
}

export default BackgroundChanger