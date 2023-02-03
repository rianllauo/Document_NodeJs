const fs = require("fs");
const path = require("path");

const fileReadCallback = (error, data) => {
    if (error) {
        console.log("error reading file " + error);
        return;
    }

    console.log(data);
};

fs.readFile(path.resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);
