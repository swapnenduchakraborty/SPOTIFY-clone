console.log("Welcome to Spotify")
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let songItem= Array.form(document.getElementByClassName('songItem'));
let songs=[
        {songName:"Salam-e-Ishq",filePath:"song/1.mp3", coverPath:"covers/1.jpg"};
		{songName:"Chaleya",filePath:"song/2.mp3", coverPath:"covers/2.jpg"}; 
        {songName:"junnon",filePath:"song/3.mp3", coverPath:"covers/3.jpg"};
        {songName:"Ankhiya",filePath:"song/4.mp3", coverPath:"covers/4.jpg"};
]
songs.forEach(element)=>{
	console.log(element,i);
    element.getElementByTagName("img")[0].src = songs[i].filePath 

}

let audioElement= new Audio('1.mp3');
//audioElement.play
 masterPlay.addEventListener('click', ()=>{
	 if(audioElement.paused||audioElement.currentTime<=0){
		audioElement.play();
	 }	 
 })
//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
	myProgressBar.value=progress;
})	 
myProgressBar.addEventListener('change',()=>{
	audioElement.currentTime=myProgressBar.value*audioElement;
