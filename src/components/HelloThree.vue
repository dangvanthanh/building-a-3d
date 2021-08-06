<template>
  <canvas ref="webgl"></canvas>
</template>


<script>
import * as THREE from '//cdn.skypack.dev/three'

export default {
  mounted() {
    const canvas = this.$refs.webgl
    const scene = new THREE.Scene()

    // Group
    const group = new THREE.Group()
    group.scale.y = 2
    group.rotation.y = 0.2
    scene.add(group)

    // Cube
    const cubeRed = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    cubeRed.position.x = - 1.5
    group.add(cubeRed)
    const cubeGreen = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
    cubeGreen.position.x = 0
    group.add(cubeGreen)
    const cubeBlue = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }))
    cubeBlue.position.x = 1.5
    group.add(cubeBlue)

    // Axes helpers
    const axesHelper = new THREE.AxesHelper()
    scene.add(axesHelper)

    // Sizes
    const sizes = {
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    scene.add(camera)

    camera.lookAt(new THREE.Vector3(0, 0, 0))

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
    })

    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera)
  },
}
</script>

<style>
body {
  margin: 0;
}
</style>