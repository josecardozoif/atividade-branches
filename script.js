function insert(num)
{
    var numero = document.getElementsId('resultado').innerHTML;
    document.getElementsId('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementsId('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementsId('resultado').innerHTML;
    document.getElementsId('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementsId('resultado').innerHTML;
    if(resultado)
    {
        document.getElementsId('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementsId('resultado').innerHTML = "Nada..."
    }
}