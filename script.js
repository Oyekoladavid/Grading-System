// var dinput = Number(score.value);

function grademe() {
    if 
    (score.value >= 0 && score.value <= 39) {
        show.innerHTML = 'F - Fail'
        var fsong = new Audio('audio/satani.unknown')
        fsong.play()
    }
    else if (score.value >= 40 && score.value <= 44){
        show.innerHTML = 'E - Pass'
        var hsong = new Audio('audio/dey play.mp3')
        hsong.play()
    }else if (score.value >= 45 && score.value <=49) {
        show.innerHTML = 'D - Average'
        var asong = new Audio('audio/Hi.mp3')
        asong.play()
    }else if (score.value >= 50 && score.value <=59) {
        show.innerHTML = 'C - Credit'
        var failsong = new Audio('audio/deyw.mp3')
        failsong.play()
    }else if (score.value >= 60 && score.value <=69) {
        show.innerHTML = 'B - Good'
        var bsong = new Audio('audio/Hello.mp3')
        bsong.play()
    }else if (score.value >= 70 && score.value <= 100) {
        show.innerHTML = 'A Excellent'
        var passsong = new Audio('audio/Whats.mp3')
        passsong.play()
    }else if (score.value > 100) {
        show.innerHTML = 'Are you Okay??'
        var dsong = new Audio('audio/bro shagi.mp3')
        dsong.play()
    }else if (score.value < 0) {
        show.innerHTML = 'Invalid'
        var msong = new Audio('audio/Nonesense.mp3')
        msong.play()
    }
}