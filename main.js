noseX= "";
noseY= "";
img= "";
function preload(){
img= loadImage("lips.png")
} 
function setup(){
canvas= createCanvas(600, 600);
canvas.center();
video= createCapture(VIDEO);
video.size(600, 600);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 600, 600);
image(img, noseX, noseY, 70, 50);
}
function take_snapshot(){
save("myfilter.png");
}
function modelLoaded(){
console.log("poseNet is initialized");
}
function gotPoses(results){
if(results.length> 0){
console.log(results);
console.log("nose x=" + results[0].pose.nose.x);
console.log("nose y=" + results[0].pose.nose.y);
noseX= results[0].pose.nose.x -35;
noseY= results[0].pose.nose.y +15;
}
}