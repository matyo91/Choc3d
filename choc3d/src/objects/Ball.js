/**
 * @author Mathieu Ledru
 */

Choc3D.Ball = function ( geometry, material ) {

    geometry = geometry || new THREE.SphereGeometry(0.5, 16, 16);
    material = material || new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });

    Choc3D.Object.call( this, new THREE.Mesh( geometry, material ) );

    this.radius = geometry.radius;

};

Choc3D.Ball.prototype = Object.create( Choc3D.Object.prototype );
