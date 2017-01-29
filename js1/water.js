var floor = Math.floor;
function clamp(x, min, max) {
    if(x < min) return min;
    if(x > max) return max-1;
    return x;
}

function getDataFromImage(img) {
//    canvas.width = img.width;
//    canvas.height = img.height;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0 ,0,width,height);
    return ctx.getImageData(0, 0,width,height);
}

function loadImage(src, callback) {
    var img = document.createElement('img');
    img.onload = function(){callback(img);};
    img.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwOTlmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQ1ZDFmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==';
}



function disturb(x, y, z){
    if(x < 2 || x > width-2 || y < 1 || y > height-2)
        return;
    var i = x+y*width;
    buffer0[i] += z;
    buffer0[i-1] -= z;
}

function process(){
    var img = ctx.getImageData(0, 0, width, height),
        data = img.data,
        i, x;

    // average cells to make the surface more even
    for(i=width+1;i<size-width-1;i+=2){
        for(x=1;x<width-1;x++,i++){
            buffer0[i] = (buffer0[i]+buffer0[i+1]+buffer0[i-1]+buffer0[i-width]+buffer0[i+width])/5;
        }
    }

    for(i=width+1;i<size-width-1;i+=2){
        for(x=1;x<width-1;x++,i++){
            // wave propagation
            var waveHeight = (buffer0[i-1] + buffer0[i+1] + buffer0[i+width] + buffer0[i-width])/2-buffer1[i];
            buffer1[i] = waveHeight;
            // calculate index in the texture with some fake referaction
            var ti = i+floor((buffer1[i-2]-waveHeight)*0.08)+floor((buffer1[i-width]-waveHeight)*0.08)*width;
            // clamping
            ti = ti < 0 ? 0 : ti > size ? size : ti;
            // some very fake lighting and caustics based on the wave height
            // and angle
            var light = waveHeight*1-buffer1[i-2]*0.6,
                i4 = i*4,
                ti4 = ti*4;
            // clamping
            light = light < -5 ? -5 : light > 30 ? 30 : light;
//            console.log(light);
            data[i4] = texture.data[ti4]//+light;
            data[i4+1] = texture.data[ti4+1]//+light;
            data[i4+2] = texture.data[ti4+2]//+light;
        }
    }
    // rain
//    disturb(floor(Math.random()*width), floor(Math.random()*height), Math.random()*10000);
    aux = buffer0;
    buffer0 = buffer1;
    buffer1 = aux;
    ctx.putImageData(img, 0, 0);
}
var canvas = document.getElementById('c'),
    ctx = canvas.getContext('2d'),
    width = canvas.width,
    height = canvas.height,
    size = width*height,
    buffer0 = [],
    buffer1 = [],
    aux, i, texture;

for(i=0;i<size;i++){
    buffer0.push(0);
    buffer1.push(0);
}

loadImage("images/underwater1.jpg", function(img){
    texture = getDataFromImage(img);
    canvas.width = width;
    canvas.height = height;
    ctx.fillRect(0, 0, width, height);
    setInterval(process, 1000/60);
    resizeBy(width-innerWidth, height-innerHeight);
});
var body = document.getElementsByTagName("BODY")[0];
body.onmousemove = function(e){
    disturb(
            floor(e.clientX/innerWidth*width),
            floor(e.clientY/innerHeight*height),
            15000);
}