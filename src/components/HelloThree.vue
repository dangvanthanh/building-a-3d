<template>
  <canvas ref="webgl"></canvas>
</template>


<script>
import * as THREE from '//cdn.skypack.dev/three'
import gsap from '//cdn.skypack.dev/gsap'

export default {
  mounted() {
    const canvas = this.$refs.webgl
    const scene = new THREE.Scene()

    // Group
    const group = new THREE.Group()
    group.scale.y = 1
    // group.rotation.y = 0.2
    scene.add(group)

    // Cube
    const cubeRed = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    cubeRed.position.x = -1.5
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

    // Clock
    const clock = new THREE.Clock()

    gsap.to(cubeGreen.position, { duration: 1, delay: 1, x: 2 })
    gsap.to(cubeGreen.position, { duration: 1, delay: 2, x: 0 })

    // Animation
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      cubeRed.rotation.y = elapsedTime
      cubeBlue.rotation.y = elapsedTime
      camera.position.x = Math.cos(elapsedTime)
      camera.position.y = Math.sin(elapsedTime)
      camera.lookAt(group.position)
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  },
}
</script>

<style>
body {
  margin: 0;
}
</style>