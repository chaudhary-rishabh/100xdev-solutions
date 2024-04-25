// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require('fs').promises;

const writefile = async (filename, content) => {
    try {
        await fs.writeFile(filename, content, { encoding: "utf8" });
        console.log("File written successfully");
    } catch (e) {
        console.error("Error writing to file: " + e.message);
    }
}

const main = async () => {
    try {
        await writefile("./hello.txt", "Hey, writing in this file asynchronously using fs.writeFile");
        console.log("Content written to file successfully");
    } catch (e) {
        console.error("Error occurred while calling main function: " + e.message);
    }
}

main();
