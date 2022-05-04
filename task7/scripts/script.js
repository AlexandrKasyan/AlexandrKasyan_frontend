var canvasMen = document.getElementById('canvasMen').getContext('2d');
var canvasHome = document.getElementById('canvasHome').getContext('2d');
var canvasBycicle = document.getElementById('canvasBycicle').getContext('2d');


function draw() {
    function men() {
        //frame
        canvasMen.clearRect(0,0,500,500);
        //face
        canvasMen.beginPath();
        canvasMen.lineWidth = 4;
        canvasMen.strokeStyle = '#26525F';
        canvasMen.fillStyle = '#91CBD7';
        canvasMen.ellipse(250,180,85,75, Math.PI * .01, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        //mouth
        canvasMen.beginPath();
        canvasMen.strokeStyle = '#26525F';
        canvasMen.fillStyle = '#91CBD7';
        canvasMen.ellipse(225,220,30, 10, Math.PI * .05, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        // 1 eye
        canvasMen.beginPath();
        canvasMen.strokeStyle = '#26525F';
        canvasMen.fillStyle = '#91CBD7';
        canvasMen.ellipse(200,150,15, 8, Math.PI * 1, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        // 1 pupil
        canvasMen.beginPath();
        canvasMen.strokeStyle = '#26525F';
        canvasMen.fillStyle = '#26525F';
        canvasMen.ellipse(195,150,4, 7, Math.PI * 1, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        // 2 eye
        canvasMen.beginPath();
        canvasMen.strokeStyle = '#26525F';
        canvasMen.fillStyle = '#91CBD7';
        canvasMen.ellipse(270,150,15, 8, Math.PI * 1, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        // 2 pupil
        canvasMen.beginPath();
        canvasMen.strokeStyle = '#26525F';
        canvasMen.fillStyle = '#26525F';
        canvasMen.ellipse(265,150,4, 7, Math.PI * 1, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        //nose
        canvasMen.beginPath();
        canvasMen.lineWidth = 2;
        canvasMen.strokeStyle = '#26525F';
        canvasMen.moveTo(235,150);
        canvasMen.lineTo(220,190);
        canvasMen.lineTo(235,190);
        canvasMen.stroke();
        canvasMen.closePath();
        //the base of the hat
        canvasMen.beginPath();
        canvasMen.lineWidth = 4;
        canvasMen.strokeStyle = '#1B2019';
        canvasMen.fillStyle = '#3B6595';
        canvasMen.ellipse(250,110,90, 20, Math.PI * 1, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        //cylinder
        canvasMen.beginPath();
        canvasMen.lineWidth = 4;
        canvasMen.strokeStyle = '#1B2019';
        canvasMen.fillStyle = '#3B6595';
        canvasMen.ellipse(250,95,50, 15, Math.PI * 1, 0, Math.PI * 2);
        canvasMen.rect(200,35,100,60)
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
        //top of the cylinder
        canvasMen.beginPath();
        canvasMen.lineWidth = 4;
        canvasMen.strokeStyle = '#1B2019';
        canvasMen.fillStyle = '#3B6595';
        canvasMen.ellipse(250,30,50, 20, Math.PI * 1, 0, Math.PI * 2);
        canvasMen.stroke();
        canvasMen.fill();
        canvasMen.closePath();
    }

    function home() {
        //frame
        canvasHome.clearRect(0,0,500,500)
        //head
        canvasHome.beginPath();
        canvasHome.lineWidth = 3;
        canvasHome.moveTo(250,50);
        canvasHome.lineTo(425,150);
        canvasHome.lineTo(75,150);
        canvasHome.lineTo(250,50);
        canvasHome.fillStyle='#975B5B';
        canvasHome.fill();
        canvasHome.stroke();
        //Pipe
        canvasHome.beginPath();
        canvasHome.fillStyle='#975B5B';
        canvasHome.strokeStyle = 'black';
        canvasHome.ellipse(300, 50, 30, 10, 0, 0, Math.PI*2);
        canvasHome.arc(300,100,30,0,Math.PI,false);
        canvasHome.lineTo(270,50);
        canvasHome.fill();
        canvasHome.stroke();
        //main
        canvasHome.beginPath();
        canvasHome.fillStyle = '#975B5B'
        canvasHome.strokeStyle = 'black';
        canvasHome.rect(100,150,300,300);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
        //1 window
        canvasHome.beginPath();
        canvasHome.lineWidth = 4;
        canvasHome.fillStyle='black';
        canvasHome.strokeStyle = '#975B5B';
        canvasHome.rect(125,165,75,75);
        canvasHome.moveTo(125,202,5);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.lineTo(162.5,165);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.lineTo(200,202,5);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.lineTo(162.5, 240);
        canvasHome.lineTo(162.5,202,5);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
        //2 window
        canvasHome.beginPath();
        canvasHome.lineWidth = 4;
        canvasHome.fillStyle='black';
        canvasHome.strokeStyle = '#975B5B';
        canvasHome.rect(300,165,75,75);
        canvasHome.moveTo(300,202,5);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.lineTo(337.5,165);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.lineTo(375,202,5);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.lineTo(337.5, 240);
        canvasHome.lineTo(337.5,202,5);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
        //3 window
        canvasHome.beginPath();
        canvasHome.lineWidth = 4;
        canvasHome.fillStyle='black';
        canvasHome.strokeStyle = '#975B5B';
        canvasHome.rect(300,300,75,75);
        canvasHome.moveTo(300,337,5);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.lineTo(337.5,300);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.lineTo(375,337,5);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.lineTo(337.5, 375);
        canvasHome.lineTo(337.5,337,5);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
        //door
        canvasHome.beginPath();
        canvasHome.lineWidth = 3;
        canvasHome.fillStyle='#975B5B';
        canvasHome.strokeStyle = 'black';
        canvasHome.arc(175, 350, 50, 0, Math.PI, true);
        canvasHome.rect(125, 350, 100, 99);
        canvasHome.moveTo(175, 450)
        canvasHome.lineTo(175, 350);
        canvasHome.moveTo(150, 400);
        canvasHome.arc(150, 400, 5, 0, Math.PI * 2, true);
        canvasHome.moveTo(200, 400);
        canvasHome.arc(200, 400, 5, 0, Math.PI * 2, true);
        canvasHome.closePath();
        canvasHome.fill();
        canvasHome.stroke();
    }

    function bycicle() {
        //frame
        canvasBycicle.clearRect(0,0,500,500)
        //elipse
        canvasBycicle.strokeStyle = '#5B737D';
        canvasBycicle.fillStyle='#91CBD7';
        canvasBycicle.lineWidth = 3;
        canvasBycicle.beginPath();
        canvasBycicle.arc(80, 350, 75, 0, Math.PI * 2, true);
        canvasBycicle.moveTo(240,350);
        canvasBycicle.arc(220, 350, 20, 0, Math.PI * 2, true);
        canvasBycicle.moveTo(485,350)
        canvasBycicle.arc(410, 350, 75, 0, Math.PI * 2, true);
        canvasBycicle.closePath();
        canvasBycicle.fill();
        canvasBycicle.stroke();
        //cascade + pedals
        canvasBycicle.beginPath();
        canvasBycicle.moveTo(70,350);
        canvasBycicle.lineTo(170,250);
        canvasBycicle.lineTo(350,200);
        canvasBycicle.lineTo(410,350);
        canvasBycicle.lineTo(350,200);
        canvasBycicle.lineTo(220,350);
        canvasBycicle.lineTo(260,360);
        canvasBycicle.lineTo(220,350);
        canvasBycicle.lineTo(70,350);
        canvasBycicle.moveTo(270,360);
        canvasBycicle.lineTo(240,360);
        canvasBycicle.moveTo(220,350);
        canvasBycicle.lineTo(180,340);
        canvasBycicle.moveTo(200,340);
        canvasBycicle.lineTo(170,340);
        canvasBycicle.closePath();
        canvasBycicle.stroke();
        //seat
        canvasBycicle.beginPath();
        canvasBycicle.moveTo(220,350);
        canvasBycicle.lineTo(170,250);
        canvasBycicle.lineTo(160,200);
        canvasBycicle.moveTo(190,200);
        canvasBycicle.lineTo(140,200);
        canvasBycicle.closePath();
        canvasBycicle.stroke();
        //helm
        canvasBycicle.beginPath();
        canvasBycicle.moveTo(350,200);
        canvasBycicle.lineTo(340,170);
        canvasBycicle.lineTo(390,170);
        canvasBycicle.lineTo(340,170);
        canvasBycicle.closePath();
        canvasBycicle.stroke();
    }
    men(); 
    home();
    bycicle();
}