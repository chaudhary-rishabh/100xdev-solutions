// assignment1 week-7
const Profile = () => {
    return (
        <div style={{width:"100vw", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div style={{margin:"auto", height:"60vh", width:"30vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <div style={{height:"35%", width:"100%", backgroundColor:"blue"}}>
                    <img style={{borderRadius:"100px", width:"150px", height:"150px", marginBottom:"-2 00px"}} src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile" />
                </div>
                <div style={{height:"35%", width:"100%"}}>
                    <br></br>
                    <br></br>
                    <h2>Rishabh Chaudhary</h2>
                    <p>India</p>
                </div>
                <hr style={{zIndex:"100"}}></hr>
                <div style={{height:"25%", borderTop:"2px solid gray", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <h3>80K<br></br>Followers</h3>
                    <h3>803k<br></br>Likes</h3>
                    <h3>1.4k<br/>Photos</h3>
                </div>  
            </div>
        </div>
    )
}

export default Profile