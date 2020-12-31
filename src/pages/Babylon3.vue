<template>
  <q-page class="flex flex-center q-pa-md">
    <canvas id="renderCanvas" class="fit"></canvas>
  </q-page>
</template>

<script>
import * as BABYLON from '@babylonjs/core/Legacy/legacy'
// import { Engine } from '@babylonjs/core/Engines/engine'
// import { Scene } from '@babylonjs/core/scene'
// import { Vector3 } from '@babylonjs/core/Maths/math'
// import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera'
// import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'
// import { Mesh } from '@babylonjs/core/Meshes/mesh'

// // Side-effects only imports allowing the standard material to be used as default.
// import '@babylonjs/core/Materials/standardMaterial'
// // Side-effects only imports allowing Mesh to create default shapes (to enhance tree shaking, the construction methods on mesh are not available if the meshbuilder has not been imported).
// import '@babylonjs/core/Meshes/Builders/sphereBuilder'
// import '@babylonjs/core/Meshes/Builders/boxBuilder'
// import '@babylonjs/core/Meshes/Builders/groundBuilder'

export default {
  name: 'Babylon3',
  data () {
    return {
      // canvas: null,
      // engine: null,
      // scene: null
    }
  },
  mounted () {
    const canvas = document.getElementById('renderCanvas')
    const engine = new BABYLON.Engine(canvas)
    var scene = new BABYLON.Scene(engine)

    // This creates and positions a free camera (non-mesh)
    // var camera = new BABYLON.FollowCamera('camera1', new BABYLON.Vector3(0, 0, -15), scene)
    // var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -15), scene)
    var camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, -15, new BABYLON.Vector3(0, 0, 0), scene)

    // This targets the camera to scene origin
    // camera.setTarget(BABYLON.Vector3.Zero())

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true)

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(-2, 0, 2), scene)
    const pointLight = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 0, 0), scene)

    // Default intensity is 1. Let's dim the light a small amount
    light.diffuse = new BABYLON.Color3(0, 0.7, 0)
    pointLight.diffuse = new BABYLON.Color3(1, 0, 0)
    // console.log('pointLight', pointLight)

    // var animationGroup1 = new BABYLON.AnimationGroup('Group1')

    for (const x of [0, 5, -5]) {
      for (const y of [0, 5, -5]) {
        for (const z of [0, 5, -5]) {
          // console.log(`sphere_${x},${y},${z}`)
          // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
          // const sphere = new BABYLON.MeshBuilder.CreateSphere(`sphere_${x},${y},${z}`, 32, 0.5, scene)
          const sphere = BABYLON.MeshBuilder.CreateSphere(`sphere_${x},${y},${z}`, { segments: 32, diameter: 1 }, scene)

          // animationGroup1.addTargetedAnimation(animation1, sphere)

          // Move the sphere upward 1/2 its height
          // sphere.position = new BABYLON.Vector3(this.getXYZ(x, y, z), this.getXYZ(y, x, z), this.getXYZ(z, x, y))
          sphere.position.x = this.getXYZ(x, y, z)
          sphere.position.y = this.getXYZ(y, x, z)
          sphere.position.z = this.getXYZ(z, x, y)

          var myMaterial = new BABYLON.StandardMaterial('myMaterial', scene)
          var emissiveMaterial = new BABYLON.StandardMaterial('emissiveMaterial', scene)
          emissiveMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0)
          if (+x === 0 && +y === 0 && +z === 0) {
            sphere.material = emissiveMaterial
          } else {
            sphere.material = myMaterial
          }
        }
      }
    }

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    // Mesh.CreateGround('ground1', 6, 6, 2, scene)

    // <HemisphericLight diffuse="#00AA00" :direction="[-90,60,-10]"></HemisphericLight>
    //   <Entity :position="[0, 0, 5]">
    //     <Animation property="rotation.x" :duration="25" :end="Math.PI * 2"></Animation>
    //     <Animation property="rotation.y" :duration="25" :end="Math.PI * 2"></Animation>
    //     <Animation property="rotation.z" :duration="25" :end="Math.PI * 2"></Animation>
    //     <PointLight diffuse="#FF0000"></PointLight>
    //     for="x in [0, 5, -5]">
    //       <template v-for="y in [0, 5, -5]">
    //         <template v-for="z in [0, 5, -5]">
    //           <Sphere :position="[getXYZ(x, y, z), getXYZ(y, x, z), getXYZ(z, x, y)]" :key="`${x},${y},${z}`" >
    //             <Material v-if="x === 0 && y === 0 && z === 0" :key="`${x-1},${y-1},${z-1}`"
    //               emissive="#E00"></Material>
    //           </Sphere>
    //         </template>
    //       </template>
    //     </template>
    //   </Entity>

    engine.runRenderLoop(() => {
      scene.render()
    })
  },
  methods: {
    getXYZ (a1, a2, a3) {
      let ar = 0
      if (a1 === 0) {
        ar = 0
      } else if (a2 !== 0 && a3 !== 0) {
        ar = Math.cos(Math.asin(Math.sqrt(2 / 3))) * a1
      } else if (a2 === 0 && a3 === 0) {
        ar = a1
      } else {
        ar = Math.cos(45 * (Math.PI / 180)) * a1
      }
      return ar
    }
  }
}
</script>

<style lang="scss">
</style>
