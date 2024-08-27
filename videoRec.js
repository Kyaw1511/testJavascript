// video record js

// document object model;
const video = document.getElementById("video");
const start = document.getElementById("start");
const stop = document.getElementById("stop");


window.addEventListener("load", async () => {
    const parts = [];
    await navigator.mediaDevices.getUserMedia({audio: true, video:true})
    .then(stream => {
        video.srcObject = stream;

        // starting recorder 
        start.addEventListener("click", () => {
            alert("Start Record!!");

            mediaRecorder = new mediaRecorder(stream);
            mediaRecorder.start(1000);
            mediaRecorder.ondataavailable = function(e) {
                parts.push(e.data);
            }
            
            console.log("video start");

        });

        // stoping recorder
        stop.addEventListener("click", () => {
            alert("Stop Record !!");

            mediaRecorder.stop();
            const blob = new Blob(parts, {
                type: "video/webm",
            });
            const url = URL.createObjectURL(Blob);
            let a = document.createElement("a");
            a.href = url;
            a.style.display = "none";
            a.download = "record.webm";
            a.click();

            console.log("video stop");
        })

    })
})
