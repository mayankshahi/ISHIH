img = ""
var status = ""
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640,450);
    canvas.position(625,500);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected"
}

function draw()
{
    image(img,0,0,640,420);
    
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("Cat",300,85);
    noFill();
    stroke("#FF0000");
    rect(285,70,300,350);
}

function modelLoaded()
{
    console.log("MODEL LOADED!!!");
    var status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
        console.log(results);
        objects = results;
}

