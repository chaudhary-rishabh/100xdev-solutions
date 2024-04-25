import React, { useEffect, useState } from 'react'

const ParaGenerator = () => {

    const [text, setText] = useState();
    const [para, setPara] = useState([]);
    const [number, setNumber] = useState();
    
    var arrayOfPara = "hello good morning hope you are doing great its been a long time since we you came here today i'll tell you about the benifits of exercise specifically about weight lifting and running there are a lot of benifits including muscle building strenght training and focus and more"


    function generatePara(e) {
        e.preventDefault();
        setNumber(text);
        const paraSplit = arrayOfPara.split(" ");
        var paragraph = "";
        for (let i = 0; i < number; i++) { 
            paragraph = paragraph + " " + paraSplit[i];
        }
        setPara(paragraph)
    }

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <h1 style={{textAlign:"center"}}>Para Generator</h1>
            <form onSubmit={generatePara} style={{margin:"auto", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <input style={{border:"1px solid black", padding:"10px"}} type="number" onChange={e => setText(e.target.value)} value={text} placeholder='Enter Number of Words' required />
                <button style={{cursor:"pointer", border:"none", borderRadius:"20px", backgroundColor:"black", color:"white", padding:"10px"}} type='submit'>Submit</button>
            </form>
            <h1>Your {number} words paragraph is<br></br>  <b style={{ color: "gray", textShadow:"2px 0px 2px black"}}>{para}</b></h1>
        </div>
    )
}

export default ParaGenerator