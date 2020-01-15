function hacerLineas(color, xInicial, yInicial, xFinal, yFinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();

}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var figura;
var color;

color = prompt("¿que color quieres que sea la figura?");
figura = prompt("¿que figura quieres que se muestre en el canvas un triangulo, un cudrado, una estrella o una estrella de ocho puntas?");

if(figura=="estrella"){

  hacerLineas(color, 150, 0, 250, 300);
  hacerLineas(color, 150, 0, 50, 300);
  hacerLineas(color, 50, 300, 300, 125);
  hacerLineas(color, 250, 300, 0, 125  );
  hacerLineas(color, 0, 125, 300, 125 );
}

else if(figura=="triangulo"){
    hacerLineas(color, 150, 0, 300, 300);
    hacerLineas(color, 150, 0, 0, 300);
    hacerLineas(color, 0, 300, 300, 300);

}

else if(figura=="cuadrado"){
    hacerLineas(color, 0 ,0, 0, 300);
    hacerLineas(color, 0, 300, 300, 300);
    hacerLineas(color, 300 , 300, 300, 0);
    hacerLineas(color, 300, 0, 0,0);

}
else if(figura=="estrella de ocho puntas"){
    hacerLineas(color, 150,0,270,260);
    hacerLineas(color, 150, 0, 30, 260);
    hacerLineas(color, 30, 260, 300, 150);
    hacerLineas(color, 300, 150, 30, 40);
    hacerLineas(color, 30, 40, 150 ,300);
    hacerLineas(color, 150, 300, 270, 40);
    hacerLineas(color, 270, 40, 0, 150);
    hacerLineas(color, 270, 260, 0, 150);
}

else{
    alert("Esa figura no existe!!");
}

