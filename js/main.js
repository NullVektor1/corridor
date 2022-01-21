

//Canvas 
const canvas = document.querySelector('canvas.webgl')
//Creating the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild( renderer.domElement );
cameraController = new THREE.OrbitControls(camera, canvas);

//Create the board
const squareGeom = new THREE.PlaneGeometry(1, 1);

const board = [

    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]

]




//Objects
const geometry = new THREE.BoxGeometry();

//materials
const squareMaterial = new THREE.MeshBasicMaterial({ color: 0xcf9b3c });
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x001ff0 });


//set camera position

camera.position.x =100;

console.log(board.length);
addCubes();
function addCubes() {
    var xDistance = 7.5;
    var yDistance = 7.5;
    var geometry = new THREE.BoxGeometry(12,12,10);
    var colWallGeom = new THREE.BoxGeometry(10,5,5);
    var rowWallGeom = new THREE.BoxGeometry(5,10,5)
    var material = new THREE.MeshBasicMaterial({color:0xcf9b3c});

    //initial offset so does not start in middle.
    var xOffset = -10;

    //CreateTheMap
    for(var i = 0; i < board.length; i++){
         for(var j = 0; j < board.length; j++){
             if(board[i][j]==2){
                 var mesh  = new THREE.Mesh(geometry, material);

                 mesh.position.x = (xDistance * i) + xOffset;
                 mesh.position.y = (yDistance * j);
                 
             }else if(board[i][j]==1 && (i%2 == 0 || i == 0)){
                var mesh  = new THREE.Mesh(colWallGeom, wallMaterial);
                mesh.position.x = (xDistance * i) + xOffset;
                mesh.position.y = (yDistance * j);
                mesh.position.z = (-2.5 );
                console.log(mesh)
             }else if(board[i][j]==1 && (i%2 == 1)){
                var mesh  = new THREE.Mesh(rowWallGeom, wallMaterial);
                mesh.position.x = (xDistance * i) + xOffset;
                mesh.position.y = (yDistance * j);
                mesh.position.z = (-2.5 );

             }
             scene.add(mesh);
         }
    };
}


camera.position.z = 200;



animate();



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}