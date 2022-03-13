// initialize variables
var container;
var camera, scene, renderer;
var greyParticleSystem, particleCount, particles, particle, pMaterial;
var redSpheresParticleContainerMesh;
var mouseX = 0, mouseY = 0;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var tweenRedSpheres;
var growCube;


init();
setTimeout(function(){ animate(); }, 100); // the time-outs are for making sure that all geo is loaded

function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );

    initCamera();
    initScene();
    initRenderer();
    addOrbitControls();
    addDirectionalLight1();
    addGreyParticles();
    addRedSpheres();
    addBigRedSphere();
    setTimeout(function(){ tweenCube(); }, 100); // the time-outs are for making sure that all geo is loaded
    //setTimeout(function(){ tweenRedSpheres(); }, 100); // the time-outs are for making sure that all geo is loaded
    //setTimeout(function(){ tweenGreyParticles(); }, 100); // the time-outs are for making sure that all geo is loaded



    function initCamera() {
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.z = 300;
    }


    function initScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xfdd7c5 ); //0xf7a322
        //scene.fog = new THREE.Fog( 0xf2f7ff, 1, 25000 );
        scene.add(new THREE.AmbientLight(0xffffff));
    }


    function initRenderer() {
        renderer = new THREE.WebGLRenderer({ antialias: true});
        //renderer.setClearColor( 0xfff6e6 );
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );
    }


    // helper functions
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    }


    function onProgress(xhr) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
    }


    function onError(xhr) {


    }

    function generateRandomVector(multiplier, subtractor) {
        var pX = Math.random() * multiplier - subtractor,
            pY = Math.random() * multiplier - subtractor,
            pZ = Math.random() * multiplier - subtractor;
        return new THREE.Vector3(pX, pY, pZ);
    }

    function generateRandomScalar(multiplier, subtractor) {
        return Math.random() * multiplier - subtractor;
    }

    // add light
    function addDirectionalLight1() {
        directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
        directionalLight.position.set( 5, 4, 0 );
        scene.add( directionalLight );
    }

    // load texture
    function loadTex(path) {
        var texture = new THREE.Texture();
        var loader = new THREE.ImageLoader( manager );
        loader.load( path,
            function ( image ) {
                texture.image = image;
                texture.needsUpdate = true;
                texture.anisotropy = renderer.getMaxAnisotropy();
        } );
        return texture;
    }

    // load model
    function loadGeo(path, name, texture, scale) {
        var loader = new THREE.OBJLoader();
        loader.load(path,
            function ( object ) {
                object.name = name;
                object.children[0].material.map = texture;
                object.position.y = 0;
                scale ? object.scale.set(scale,scale,scale) : object.scale = 1;
                scene.add( object );
            }, onProgress, onError );
    }



    loadGeo('geo/cube.obj', 'aCube', loadTex('tex/cube_texture.jpg'));


    function addGreyParticles() {
        // create the particle variables
        particleCount = 150,
            particles = new THREE.Geometry(),
            pMaterial = new THREE.PointsMaterial( {color: 0xeeeeee, size : 8 } );

        // now create the individual particles
        for (var p = 0; p < particleCount; p++) {

            // create a particle with random position values, -250 -> 250
            var particle = generateRandomVector(500, 250);

            // add it to the geometry
            particles.vertices.push(particle);
            particles.name = 'greyParticles';
        }

        // create the particle system
        greyParticleSystem = new THREE.Points(particles, pMaterial);
        greyParticleSystem.name = 'greyParticleSystem';

        // add it to the scene
        scene.add(greyParticleSystem);

    }


    function addRedSpheres() {

        function createSphere( name, size, position, containerMesh ) {
            var sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(size, 64, 64), new THREE.MeshPhongMaterial({color: 0xCD78E8}));
            sphereMesh.name = name;
            containerMesh.add(sphereMesh);
            sphereMesh.position.set(position.x, position.y, position.z);
        }

        var particleCount = 20;
        var redSpheresParticleContainerGeometry = new THREE.Geometry();
        redSpheresParticleContainerMesh = new THREE.Mesh(redSpheresParticleContainerGeometry);
        redSpheresParticleContainerMesh.name = 'redSpheresParticleContainerMesh';

        for (var p = 0; p < particleCount; p++) {
            particle = generateRandomVector(200, 100);
            // add it to the geometry
            redSpheresParticleContainerGeometry.vertices.push(particle);
            createSphere(`Sphere-${p}`, Math.random() * 3 + 1, particle, redSpheresParticleContainerMesh);
        }

        scene.add(redSpheresParticleContainerMesh);
    }

    function addBigRedSphere() {

        function createSphere( name, size, color, posX, posY, posZ) {
            var sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(size, 64, 64), new THREE.MeshLambertMaterial({color: color, shininess: 0}));
            sphereMesh.name = name;
            sphereMesh.position.set(posX, posY, posZ);
            scene.add(sphereMesh);
        }

        createSphere('BigRedSphere1', 100, 0xFF9089, -200, 20, -1000);
        createSphere('BigRedSphere2', 160, 0xE8B781, -300, -320, -1600);
        createSphere('BigRedSphere3', 50, 0xFFF5B2, 200, 60, -1200);
    }


    function addOrbitControls() {
        var controls = new THREE.OrbitControls( camera, renderer.domElement );
        controls.target = new THREE.Vector3(0,15,0);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        //controls.maxPolarAngle = Math.PI / 2;
    }


    function tweenCube() {
        var aCube = scene.getObjectByName( 'aCube' );

        // tween1
        var rotation = { x : 0, y: 0 };
        var target = { x : 0, y: 90, z: 0};
        var tween1 = new TWEEN.Tween(rotation).to(target, 900);
        tween1.onUpdate(function(){
            aCube.rotation.y = THREE.Math.degToRad( rotation.y );
        });
        tween1.easing(TWEEN.Easing.Elastic.Out);
        tween1.delay(4000);

        //tween2
        var target2 = { x: 90, y: 180, z: -90 };
        var tween2 = new TWEEN.Tween(rotation).to(target2, 900);
        tween2.onUpdate(function(){
            aCube.rotation.x = THREE.Math.degToRad( rotation.x );
            aCube.rotation.y = THREE.Math.degToRad( rotation.y );
        });
        tween2.easing(TWEEN.Easing.Elastic.Out);
        tween2.delay(4000);

        //tween3
        var target3 = { x: 0, y: 270, z: 0};
        var tween3 = new TWEEN.Tween(rotation).to(target3, 900);
        tween3.onUpdate(function(){
            aCube.rotation.x = THREE.Math.degToRad( rotation.x );
            aCube.rotation.y = THREE.Math.degToRad( rotation.y );
        });
        tween3.easing(TWEEN.Easing.Elastic.Out);
        tween3.delay(4000);

        //chain and start tweens
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween3.chain(tween1);
        tween1.start();
    }

    growCube = function() {
        var aCube = scene.getObjectByName( 'aCube' );

        // tween1
        var target = 1.2;
        var tween1 = new TWEEN.Tween(aCube.scale).to( {x: target, y: target, z: target}, 200);
        tween1.easing(TWEEN.Easing.Elastic.In);

        // tween2
        var target2 = 1;
        var tween2 = new TWEEN.Tween(aCube.scale).to( {x: target2, y: target2, z: target2}, 800);
        tween2.easing(TWEEN.Easing.Elastic.Out);

        //chain and start tweens
        tween1.chain(tween2);
        tween2.chain();
        tween1.start();
    }

    tweenRedSpheres = function() {
        scene.getObjectByName( 'redSpheresParticleContainerMesh' ).children.map(
            function(mesh){
                var sphere = scene.getObjectByName( mesh.name );

                // tween1
                var position = scene.getObjectByName( mesh.name ).position;
                var target = generateRandomVector(200, 100);
                var tween1 = new TWEEN.Tween(position).to(target, 1600);
                tween1.onUpdate(function(){sphere.position = position;});
                tween1.easing(TWEEN.Easing.Elastic.Out);
                tween1.delay(200);

                //tween2
                var target2 = generateRandomVector(200, 100);
                var tween2 = new TWEEN.Tween(position).to(target2, 1600);
                tween2.onUpdate(function(){sphere.position = position;});
                tween2.easing(TWEEN.Easing.Elastic.Out);
                tween2.delay(200);

                //chain and start tweens
                //tween1.chain(tween2);
                //tween2.chain(tween1);
                tween1.start();
            }
        );
    }

    function tweenGreyParticles() {
        scene.getObjectByName( 'greyParticleSystem' ).geometry.vertices.map(
            function(vertexPos){
                var dX1 = generateRandomScalar(500, 250),
                    dY1 = generateRandomScalar(500, 250),
                    dZ1 = generateRandomScalar(500, 250);

                // tween1
                var position = vertexPos;
                var target = new THREE.Vector3(dX1, dY1, dZ1);
                var tween1 = new TWEEN.Tween(position).to(target, 900);
                tween1.onUpdate(function() { vertexPos.set(dX1, dY1, dZ1) } );
                tween1.easing(TWEEN.Easing.Elastic.Out);
                tween1.delay(4000);

                particles.verticesNeedUpdate = true;

                var dX2 = generateRandomScalar(500, 250),
                    dY2 = generateRandomScalar(500, 250),
                    dZ2 = generateRandomScalar(500, 250);

                //tween2
                var target2 = (dX2, dY2, dZ2);
                var tween2 = new TWEEN.Tween(position).to(target2, 900);
                tween2.onUpdate(function() { vertexPos.set(dX2, dY2, dZ2) } );
                tween2.easing(TWEEN.Easing.Elastic.Out);
                tween2.delay(4000);

                //chain and start tweens
                tween1.chain(tween2);
                tween2.chain(tween1);
                tween1.start();
            }
        );
        particles.verticesNeedUpdate = true;
    }


    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    window.addEventListener( 'resize', onWindowResize, false );

}


function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}


function onDocumentMouseMove( event ) {
    mouseX = ( event.clientX - windowHalfX ) / 2;
    mouseY = ( event.clientY - windowHalfY ) / 2;
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}



function onDocumentMouseDown( event ) {
    event.preventDefault();
    //checkIntersects() === 'pCube1' ? console.log('Cube selected') : console.log('Selected item: ', checkIntersects());
    checkIntersects() === 'pCube1' ? (tweenRedSpheres(), growCube()) : console.log('Cube not selected');
}


function checkIntersects() {
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children, true);


    var name = 'nothing selected';
    intersects.map(function (i) {
        // console.log(i.object.name);
        name = (i.object.name);
    });

    return name;
}



function animate() {
    requestAnimationFrame( animate );

    function rotateElements() {
        greyParticleSystem.rotation.y += 0.001;
        redSpheresParticleContainerMesh.rotation.y -= 0.0005;
        //scene.rotation.y += 0.00005;
    }

    // update the position of the grey particles on every frame
    function updateGreyParticles() {
        particles.vertices.map(function(particle){
            var dX, dY, dZ;
            var multiplier = 1.2;
            var subtractor = 0.6;
            dX = Math.sin(Math.random() * multiplier - subtractor);
            dY = Math.sin(Math.random() * multiplier - subtractor);
            dZ = Math.sin(Math.random() * multiplier - subtractor);

            particle.add(new THREE.Vector3(dX, dY, dZ));
        });
        particles.verticesNeedUpdate = true;
    }


    rotateElements();
    //updateGreyParticles();
    TWEEN.update();

    render();
}


// constants used in the cameraRotationControl
const MIN_WIDTH = 320;
const MAX_WIDTH = 1600;
const MIN_DIVIDER = 4;
const MAX_DIVIDER = 12;

function render() {

    // control the amount of camera rotation in ratio to the viewport size
    function cameraRotationControl() {
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        var innerWidthDivider = innerWidth > innerHeight ? innerWidth / innerHeight : 1;
        var innerHeightDivider = innerHeight > innerWidth ? innerHeight / innerWidth : 1;

        var mouseDivider = MIN_DIVIDER + ((MAX_DIVIDER - MIN_DIVIDER) / (MAX_WIDTH - MIN_WIDTH) * (innerWidth - MIN_WIDTH));

        if (mouseDivider < MIN_DIVIDER) {
            mouseDivider = MIN_DIVIDER;
        }

        if (mouseDivider > MAX_DIVIDER) {
            mouseDivider = MAX_DIVIDER;
        }

        camera.position.x += ( ( mouseX / mouseDivider / (innerWidthDivider) ) - camera.position.x );
        camera.position.y += ( ( - mouseY / mouseDivider / (innerHeightDivider) ) - camera.position.y );
        camera.lookAt( scene.position );
    }

    cameraRotationControl();

    renderer.render( scene, camera );

}