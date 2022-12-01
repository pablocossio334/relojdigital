function bordes(binario){
    if(binario==1) 
    return "4px solid rgb(47, 219, 47)"
else
return "3px solid rgb(4, 54, 4)";
}

function marcar(digito ,lados)
{   

    digito_a="digito"+digito+"_1"
    digito_b="digito"+digito+"_2"

elemento=document.getElementById(digito_a);
elemento.style.borderTop=bordes(lados[0]);
elemento.style.borderRight=bordes(lados[1]);
elemento.style.borderBottom=bordes(lados[2]);
elemento.style.borderLeft=bordes(lados[3]);
elemento2=document.getElementById(digito_b);
elemento2.style.borderTop=bordes(lados[4]);
elemento2.style.borderRight=bordes(lados[5]);
elemento2.style.borderBottom=bordes(lados[6]);
elemento2.style.borderLeft=bordes(lados[7]);




}
let numbers=[//arriba,derecha,abajo,izquierda,arriba,derecha,abajo,izquierda

[1,1,0,1,0,1,1,1],//0
[0,1,0,0,0,1,0,0],//1
[1,1,1,0,1,0,1,1],//2
[1,1,1,0,1,1,1,0],//3
[0,1,1,1,1,1,0,0],//4
[1,0,1,1,1,1,1,0],//5
[1,0,1,1,1,1,1,1],//6
[1,1,0,0,0,1,0,0],//7
[1,1,1,1,1,1,1,1],//8
[1,1,1,1,1,1,0,0]//9
];


function imprime_hora(hora,minutos,segundos){
let digito1;
let digito2;

function digitos(numero)  {
if(numero.toString().length==1)
{ 
digito1=0;
digito2=parseInt(numero.toString())
}
else
{
digito1=parseInt(numero.toString()[0])
digito2=parseInt(numero.toString()[1])
}
}  
digitos(hora);
marcar(1,numbers[digito1]);
marcar(2,numbers[digito2]);
digitos(minutos);
marcar(3,numbers[digito1]);
marcar(4,numbers[digito2]);
digitos(segundos);
marcar(5,numbers[digito1]);
marcar(6,numbers[digito2]);
}


function actualiza_reloj()
{
let reloj=new Date();
let h=reloj.getHours();
let m=reloj.getMinutes();


let s=reloj.getSeconds();
imprime_hora(h,m,s);
}


setInterval(actualiza_reloj, 1000);









