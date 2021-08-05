<template>
  <canvas ref="webgl"></canvas>
</template>


<script>
import * as THREE from '//cdn.skypack.dev/three'

export default {
  mounted() {
    const canvas = this.$refs.webgl
    const scene = new THREE.Scene()

    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const meterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(geometry, meterial)
    scene.add(mesh)

    // Sizes
    const sizes = {
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    camera.position.x = 1
    scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas
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