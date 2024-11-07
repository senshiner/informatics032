// let saldoAwal = Number(prompt('masukan saldo awal'))
// let saldoTambahan = Number(prompt('masukan saldo tambahan'))
// const saldoAkhir= saldoAwal + saldoTambahan
// console.log(`saldo akhir anda adalah ${saldoAkhir}`)
let a = new Date()
console.log(a)

let hari = ["ahad", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
    console.log(hari[new Date().getDay()])
    
    
    // switch (twoDigit){
        //     case 1: twoDigit >=0 || twoDigit <=99
        //     console.log(`2 digit akhir dari nim anda adalah ${twoDigit}`)
        //         break
        //     default: twoDigit <0 || twoDigit >99
        //     console.log('error harap masukan nim')
        //         break
        // }


// buatkan program diskon dari 2 digit nim
let nim = prompt('masukan nim anda: ')
let digit = nim.slice(-2)
let twoDigit = parseInt(digit)
let diskon

if (isNaN(twoDigit) || twoDigit < 0 || twoDigit > 99){
    console.log('error harap masukan nim')
} else {
    console.log(`2 digit akhir dari nim anda adalah ${twoDigit}`)
    
    if(twoDigit >= 80){
        diskon = 50
    } else if(twoDigit >= 60){
        diskon = 40
    } else if(twoDigit >= 50){
        diskon = 30
    } else if(twoDigit >= 40){
        diskon = 20
    } else if(twoDigit >= 20){
        diskon = 10
    } else {
        diskon = 0
    }

    if(diskon > 0){
        console.log(`Diskon anda adalah ${diskon}%`)
    } else {
        console.log('Anda tidak mendapatkan diskon')
    }
}

