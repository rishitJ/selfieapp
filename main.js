var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition

function start()
{
    document.getElementById("textbox").innerHTML = "System is listening please speak"
    recognition.start()
}
recognition.onresult = function (event) {
console.log(event)
content = event.results[0][0].transcript
document.getElementById("textbox").innerHTML = content

if(content == "take my selfie" || content == "take my selfie." || content == "selfie"){
    speak()
}
}
camera = document.getElementById("camera")
Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 100
})
Webcam.attach(camera)

function speak()
{
    var synth = window.speechSynthesis
    speakData = "Taking selfie in 5 second, please give a nice pose"
    var utterthis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterthis)

    setTimeout(function(data_uri){
        take_snapshot()
        save()
        },5000);
}

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        console.log(data_uri)
    document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='img_1'>"
    })
}

function save()
{
    link=document.getElementById("link")
    img=document.getElementById("img_1").src
    link.href=img
    link.click()
}