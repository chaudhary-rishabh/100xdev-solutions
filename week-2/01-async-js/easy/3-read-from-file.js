// <!-- ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.  -->




const fs = require('fs').promises;   

async function  readfile(filename){
    try {
        return  await fs.readFile(filename, 'utf8');
    } catch (e) {
        console.log("error occurred reading file " + e.message);
    }
}

const main = async() => {
    try {
        const ans = await readfile("./hello.txt");
        console.log(ans);
    } catch (e) { 
        console.log("error occurred while calling function main")
    }
}

main();