var predict_1 ="";
var predict_2 ="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90,
});
camera = document.getElementById("camera");
Webcam.attach('#Camera');
function take_snapshot(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id = "capture_image src = "'+ data_uri + '">';
});
}
console.log('ml5version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fJrJ4X4FI/model.json',modelLoaded);
function modelLoaded(){
console.log('modelloaded');
}
function speak(){
var synth = window.speechSynthesis;
s1 = "the first prediction is " + predict_1;
s2 = "the second prediction is" + predict_2;
var utterths = new SpeechSynthesisUtterance(s1 + s2);
synth.speak(utterths);
}