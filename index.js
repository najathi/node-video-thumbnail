const ffmpeg = require("fluent-ffmpeg");

const sourcePath = "./assets/BigBuckBunnyShort.mp4";

// ffmpeg
ffmpeg.setFfmpegPath("D:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("D:/ffmpeg/bin");
ffmpeg.setFlvtoolPath("D:/flvtool");

var proc = ffmpeg(sourcePath)
    // setup event handlers
    .on("filenames", function (filenames) {
        console.log("screenshots are " + filenames.join(", "));
    })
    .on("end", function () {
        console.log("screenshots were saved");
    })
    .on("error", function (err) {
        console.log("an error happened: " + err.message);
    })
    // take 2 screenshots at predefined timemarks and size
    .takeScreenshots(
        { count: 2, timemarks: ["00:00:02.000", "6"], size: "320x240" },
        "./output"
    );
