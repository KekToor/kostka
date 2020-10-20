var hody = [];
var cudlik;
cudlik=document.getElementById('game');

document.getElementById('game').addEventListener('click',
    function(){
        cudlik.hidden=true;
        hod();
        audio();
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function audio(){
    var zvuk = document.getElementById('diceRoll');
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },3000);
}

function audio2(){
    var zvuk = document.getElementById('ezClap');
    zvuk.volume = 0.2;
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },8000);
}

function hod() {
    var nahodneCislo; 
    var obrazek = ["img/kostka1.png","img/kostka2.png","img/kostka3.png","img/kostka4.png","img/kostka5.png","img/kostka6.png"];
    let Interval1 = window.setInterval(function(){
        nahodneCislo = Math.floor(Math.random()*obrazek.length);
        document.getElementById('cube').src = obrazek[nahodneCislo];
    },150)
    window.setTimeout(function(){
        window.clearInterval(Interval1);
    },3000)
   
  
    window.setTimeout(function(){
        cudlik.hidden = false;
        var h = Math.ceil(Math.random() * 6);
        hody.push(h);
        if(h==6){
            audio2();
        }
        document.getElementById('cube').src='img/kostka' + h + '.png';
        document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
        document.getElementById('result').innerHTML += 
            '<p>Počet hodů: ' + hody.length + '</p>';
        document.getElementById('result').innerHTML += 
            '<p>Součet hodů: ' + suma(hody) + '</p>';
        document.getElementById('result').innerHTML += 
            '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
        document.getElementById('result').innerHTML += 
            '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
        document.getElementById('result').innerHTML += 
            '<p>Nejvyšší hod: ' + minimum(hody) + '</p>';
            if(h==1){
                document.getElementById('result').innerHTML += 
                'Ehm...';
            }
            if(h==6){
                document.getElementById('result').innerHTML += 
                'Nice One!';
            }
        document.getElementById('result2').innerHTML +=
            ' Počet hodů: <b>' + hody.length; + '</b>' + ' ';
        document.getElementById('result2').innerHTML += 
            ' Hod: ' + h ;
        document.getElementById('result2').innerHTML += 
            ' Součet hodů: ' + suma(hody); + ' ';
        document.getElementById('result2').innerHTML += 
            ' Průměr hodů: ' + average(suma(hody),hody.length); + ' ';
        document.getElementById('result2').innerHTML += 
            ' Nejvyšší hod: ' + maximum(hody); + ' ';
        document.getElementById('result2').innerHTML += 
            ' Nejvyšší hod: ' + minimum(hody) + ' ';
        document.getElementById('result2').innerHTML += 
            '<br>';    
        return h;
    },3000)
}
    