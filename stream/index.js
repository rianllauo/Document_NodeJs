/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
    path.resolve(__dirname, "input.txt"),
    {
        highWaterMark: 15,
    }
);

readableStream.on("readable", () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
        console.log(error);
    }
});

readableStream.on("end", () => {
    console.log("Done");
});

// write Stream
const writableStream = fs.createWriteStream(
    path.resolve(__dirname, "output.txt")
);

writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.write("Ini merupakan teks baris ketiga!\n");
writableStream.end("Ini merupakan teks akhir!\n");
