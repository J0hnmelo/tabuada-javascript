function calcular() {
    var numero = window.document.getElementById('i-numero').value
    var numeroTab = Number(numero)
    var multiplicadores = 0
    var seletor = window.document.getElementById('tabuada')
    var msg = window.document.getElementById('tabus')
    if (numeroTab == '') {
        window.alert('[ERROR] INSIRA ALGUM VALOR ')
        msg.innerHTML= '[ERROR]'
    }else { seletor.innerHTML= ''
            while(multiplicadores <= 10) {
                var item = document.createElement('option')/*cria uma tag option , para podermos adicionar a tag select */
                item.text = `${numeroTab} x ${multiplicadores} = ${numeroTab * multiplicadores}`
                item.value = `seletor${multiplicadores}`/*aplicador de value na tag option */
                seletor.appendChild(item) /*adiciona um filho baseado no var item ao seletor */
                multiplicadores++
            }
            
    }
}