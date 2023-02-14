// As variáveis que utilizamos para armazenar as coordenadas x e y permanecerão as mesmas.
var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

// A referência para canvas, para a variável que contém color e para a variável que contém a width, serão as mesmas.
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

// Agora, buscaremos a width da tela e a armazenamos dentro da variável. Fazemos isso, pois queremos saber qual tamanho de tela (mobile ou pc) o usuário está utilizando.
var width = screen.width;

// Agora, definiremos uma variável newWidth: ● Essa variável será utilizada para armazenar a nova width que será obtida ao subtrairmos a screen.width de 70 da width da tela do usuário.
newWidth =  screen.width - 70; 
// Agora, definiremos uma variável newHeight: ● Essa variável será utilizada para armazenar a nova height, a qual será obtida a partir da subtração de screen.height de 300 da height da tela do usuário.
newHeight = screen.height - 300;
// Escreveremos uma condição if: ○ Se o tamanho da tela for menor que 992 (ou seja, 992px), então, modifique a width e a height do canvas com as novas width e height, as quais definimos no ponto acima.
	if(width < 992)
	{
        // Agora, a width da tela é menor que 992px. Portanto, virá dentro da condição if e ajustará a width do canvas para = newWidth // width, ou seja, 730px
	document.getElementById("myCanvas").width = newWidth;
    // set the canvas height = newHeight // height, ou seja, 400px
    document.getElementById("myCanvas").height = newHeight;
    // Sintaxe: ○ document: O documento HTML ○ body:tag body ○ style: Adicionamos style à tag body. ○ overflow: Essa é a propriedade CSS. ○ hidden: Esse é o valor da propriedade.
    document.body.style.overflow = "hidden";
	}

    // touchstart event: É o mesmo que um evento mousedown, portanto, quando tocamos a tela, esse evento é executado.
	canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) 
{
    // Agora, adicione console.log(“myTouchStart”) dentro da função, para que quando tocarmos a tela, obtermos myTouchStart na tela do console. Logo, agora temos certeza de que essa função está sendo executada.
	console.log("myTouchStart");
 //Início da Atividade Adicional
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  
//Fim da Atividade Adicional
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{

	console.log("myTouchMove");
    // ➔ Agora, buscamos as coordenadas x atuais no canvas. Tocaremos e as armazenaremos dentro da variável lastPositionOfX.
    // eindica o evento. ○ touches[0]: Isso significa que, apenas, exibirá as coordenadas de um dedo. ○ clientX: Fornecerá as coordenadas x.
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    // mesmo código utilizado para a versão web
    // beginPath(): Inicia um caminho, ou reinicia o caminho atual para desenhar qualquer coisa. Diz ao canvas para iniciar o desenho de um(a) forma/objeto.
      
    ctx.beginPath();
    // ○ strokeStyle: Ajusta a cor do desenho. ■ Ajustamos o valor da variável color e ela possui a cor black, portanto, o desenho será de cor black.
    ctx.strokeStyle = color;
    // ○ lineWidth: Ajusta a width para o desenho. ■ Ajustamos o valor da variável widthLine para 2, para que a width do desenho seja 2.
    ctx.lineWidth = widthOfLine;

    console.log("Última posição das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Posição atual das coordenadas x e y = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    // Passamos last_position_of_x e last_position_of_y para dentro da função moveTo, pois, quando movemos nosso dedo sobre a tela a partir de uma coordenada (vamos manter essa coordenada como old_coordinates) para outra coordenada (vamos manter essa coordenada como new_coordinates), queremos que o desenho seja alocado entre old_coordinates e new_coordinates.
    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
    // fim do mesmo código utilizado para a versão web
}

    // mesmo código utilizado para a versão web
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // fim do mesmo código utilizado para a versão web
