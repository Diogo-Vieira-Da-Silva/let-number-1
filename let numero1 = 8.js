//let nx = 8 + 5


//console.log(nx)

// function verificationdepso (peso, altura){
//     let imc = peso / (altura * altura)
//     if (imc <= 16){
//         return "seu peso está muito baixo"
//     }else if (imc >= 18 && imc <= 24.9){
//             return "seu peso está bom"
//     }else if (imc >= 25) {
//         return "seu peso está demais"
//     }
// }
//     console.log (verificationdepeso(100, 1.75))

function retornarNumerospares (n) {
    let numerospares = []
    for (let i = 0; numerospares.length < n ;i++) {
        if (i % 2 == 0) {
            numerospares.push(i)
        }
    }
    return numerospares
}

console.log(retornarNumerospares(5))


