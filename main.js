object=[]
status=""

function preload()
{
    video=createVideo("video.mp4");

}

function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects"

}

function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
    video.loop;
    video.speed(1);
    video.volume(0);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }

    console.log(results);
    objects=results;

}

function draw()
{
    image(video,0,0,480,380);
    if(status!='')
    {
        objectDetector.detect(video.gotResult);
        for(i=0;i<objects.lenght;i++)   ;
        {
            document.getElementById("status").innerHMTL="status:objectsDetected";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are"+objects.lenght;
            fill("#eb348c");
            percent=floor(object[i].confidence*100);
            Text(objects[i].lable+""+percent+"%",objects[i].x+15,objects[i].y+15);
            nofill()
            stroke("#34ebae");
            Rect(objects[i].x,objects[i].y,object5[i].width,objects[i].height);

        }          
    }
}

   