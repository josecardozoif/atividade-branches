const relogio = () => {
    const relogioTag = document.querySelector('time')
    let data = new Date();

    let hh = data.quaisHoras();
    let mm = data.quaisMinutos();
    let ss = data.quaisSegundos();

    hh = hh < 10 ? '0'+ hh : hh;
    mm = mm < 10 ? '0'+ mm : mm;
    ss = ss < 10 ? '0'+ ss : ss;

    relogioTag.innerHTML = hh +':'+ mm +':'+ ss;
}

relogio()
executar(relogio, 1000);