function insert(num)
{
    var numero = document.getElementsByClassName('resultado').innerHTML;
    document.getElementsByClassName('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementsByClassName('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementsByClassName('resultado').innerHTML;
    document.getElementsByClassName('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementsByClassName('resultado').innerHTML;
    if(resultado)
    {
        document.getElementsByClassName('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementsByClassName('resultado').innerHTML = "Nada..."
    }
}