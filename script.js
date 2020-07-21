const video = document.getElementById("video");
const play = document.getElementById("play");
const stops = document.getElementById("stops");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play and pause the video
function toggleVideoStatus(){
    if (video.paused) {
        video.play();
    } else{
        video.pause();
    }
}

//update the play and pause icon
function updatePlayIcon(){
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Update the progress and timestamp
function updateProgress() {
    progress.value=(video.currentTime/video.duration)*100;  // this will tell us the time when the video runs on the timestamp

// Get minutes
    let mins = Math.floor(video.currentTime / 60); // this tells the minutes remaining
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // Get seconds
    let secs = Math.floor(video.currentTime % 60);// this tells the seconds remaining
    if (secs < 10){
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;  // this will show the timestamp
}

//setting video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value*video.duration)/100;  //can change the video current time to the changed time while scrolling
}

//To stop the video
function stopVideo(){
    video.currentTime=0;
    video.pause();
}

// Event listeners
video.addEventListener("click",toggleVideoStatus); // play the video if it pasued or stopped or paused the video it is playing
video.addEventListener("pause",updatePlayIcon); // icon changes when play and pause
video.addEventListener("play",updatePlayIcon);  // icon changes when play and pause
video.addEventListener("timeupdate",updateProgress); //continiously calls this ti update the time

play.addEventListener("click",toggleVideoStatus);

stops.addEventListener("click", stopVideo);

progress.addEventListener("change",setVideoProgress);