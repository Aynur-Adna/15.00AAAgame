const siyahi = ["kagiz.png", "scissors.png", "stone.png"]
const kagiz = document.getElementById('kagiz')
const scissors = document.getElementById('qayci')
const das = document.getElementById('das')

const komputerinSecimi = document.getElementById('komputer-secim')
const netice = document.getElementById('netice')

kagiz.onclick = seciminiEt
scissors.onclick = seciminiEt
das.onclick = seciminiEt
function seciminiEt() {
    const komputer = RandomSecim()
    const menimSecimim = this.dataset.id
    if (komputer == 0 && menimSecimim == 0) {
        netice = "her ikiniz eyni secimi etdiniz.yeeniden cehd edin"
    }
    else if (komputer == 0 && menimSecimim == 1) {
        netice = "siz qalib oldunuz.qayci kagizi kesir"
    }
    else if (komputer == 0 && menimSecimim == 2) {
        netice = "uduzdunuz.kagiz dasi bukur"
    }
    else if (komputer == 1 && menimSecimim == 0) {
        netice = "uduzdunuz. qayci kagizi kesir"
    }
    else if (komputer == 1 && menimSecimim == 1) {
        netice = "beraber"
    }
    else if (komputer == 1 && menimSecimim == 2) {
        netice = "tebrikler"

    }
    else if (komputer == 1 && menimSecimim ==) {

    }



}
function RabdomSecim() {
    const say = Math.round(Math.random() * 2)
    komputerinSecimi.src = `img/${siyahi[say]}`
}