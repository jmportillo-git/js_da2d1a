"use strict"

function creaColor (){
    let r= Math.floor(Math.random()*255);
    let g= Math.floor(Math.random()*255);
    let b= Math.floor(Math.random()*255);
    let rgb = "rgb(" + r + "," + g + "," + b + ")";

    return rgb;
}

function creaCelda (){
    let txtcolor=  creaColor();
    let celda="<td style='background-color:" + txtcolor + ";";
    celda += "width: 30px;" ;
    celda += "heigth: 35px;" ;
    celda += "text-align:center;" ;
    celda += "' ";
    celda += ">" + txtcolor + "</td>"
    return celda
}

function creaFila (ncolumnas) {
    let fila = "<tr>";

for (let nc= 0; nc < ncolumnas; nc++){
//        let cl= (nc%2 == 0)? c1:c2 ;
//        fila += creaCelda(nc+1,cl)
        fila += creaCelda()
    }
    fila += "</tr>";
    document.write(fila);
}

function creaTabla (nfilas, ncols){
    document.write("<table>");
    document.write("<th colspan=" + ncols + ">Tabla de DA2D1A</th>");

    for (let nf = 0; nf < nfilas; nf++){
        creaFila (ncols);
    }

    document.write("</table>");
}

let numfilas= prompt("Escribe el número de filas: ");

let numcolumnas= prompt("Escribe el número de columnas: ");

creaTabla (numfilas,numcolumnas);