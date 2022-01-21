//Set Globals
var scene,camera,renderer,canvas,board,cameraController;


init();

function init(){
    createScene();
    setLights();
    addCubes();
    console.log(scene);
    animate();
}




function createScene(){
//Canvas 
 canvas = document.querySelector('canvas.webgl')
//Creating the scene
 scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
 renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild( renderer.domElement );
camera.position.z = 100;
camera.position.y = -5;
camera.position.x = 0;
scene.add(camera);
cameraController = new THREE.OrbitControls(camera, canvas);
//controls.enableDamping = true

}

function setLights(){
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)
}

function addCubes() {

    var xDistance = 7.5;
    var yDistance = 7.5;
    var geometry = new THREE.BoxGeometry(10,10,10);
    var colWallGeom = new THREE.BoxGeometry(10,5,5);
    var rowWallGeom = new THREE.BoxGeometry(5,10,5)
    var material = new THREE.MeshBasicMaterial({color:0xcf9b3c});
    var wallMaterial = new THREE.MeshBasicMaterial({ color: 0x694404 });


    //Create the board

 board = [

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
    //initial offset so does not start in middle.
    var xOffset = -65;
    var yOffset = -40;

    //CreateTheMapOnScene
    for(var i = 0; i < board.length; i++){
         for(var j = 0; j < board.length; j++){
             if(board[i][j]==2){
                 var mesh  = new THREE.Mesh(geometry, material);

                 mesh.position.x = (xDistance * i) + xOffset;
                 mesh.position.y = (yDistance * j) + yOffset;
                 
             }else if(board[i][j]==1 && (i%2 == 0 || i == 0)){
                var mesh  = new THREE.Mesh(colWallGeom, wallMaterial);
                mesh.position.x = (xDistance * i) + xOffset;
                mesh.position.y = (yDistance * j) + yOffset;
                mesh.position.z = (-2.5 );
                console.log(mesh)
             }else if(board[i][j]==1 && (i%2 == 1)){
                var mesh  = new THREE.Mesh(rowWallGeom, wallMaterial);
                mesh.position.x = (xDistance * i) + xOffset;
                mesh.position.y = (yDistance * j) + yOffset;
                mesh.position.z = (-2.5 );

             }
             scene.add(mesh);
         }
    };
}

function animate() {
    requestAnimationFrame(animate);
   // camera.position.x+=0.5;
    renderer.render(scene, camera);
}
