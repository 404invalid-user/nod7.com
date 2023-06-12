var videoNod1 = document.getElementById("vid-nod-1");
var videoNod2 = document.getElementById("vid-nod-2");
var videoNod3 = document.getElementById("vid-nod-3");
var videoNod4 = document.getElementById("vid-nod-4");
var videoNod5 = document.getElementById("vid-nod-5");
var videoNod6 = document.getElementById("vid-nod-6");
var videoNod7 = document.getElementById("vid-nod-7");

videoNod1.muted = false;
videoNod1.loop = true;
videoNod2.muted = true;
videoNod2.loop = true;
videoNod3.muted = true;
videoNod3.loop = true;
videoNod4.muted = true;
videoNod4.loop = true;
videoNod5.muted = true;
videoNod5.loop = true;
videoNod6.muted = true;
videoNod6.loop = true;
videoNod7.muted = true;
videoNod7.loop = true;




function clickMeBtn() {
    mixpanel.track('click me btn clicked');
    document.getElementById('full-screen').style.display = 'none';
    videoNod1.play();
    videoNod2.play();
    videoNod3.play();
    videoNod4.play();
    videoNod5.play();
    videoNod6.play();
    videoNod7.play();
}
