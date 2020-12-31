<template>
  <q-page class="flex flex-center q-pa-md">
    <Scene>
      <Camera :position="[xc, yc, zc]" ></Camera>
      <HemisphericLight diffuse="#00AA00" :direction="[-90,60,-10]"></HemisphericLight>
      <Entity :position="[0, 0, 5]">
        <Animation property="rotation.x" :duration="25" :end="Math.PI * 2"></Animation>
        <Animation property="rotation.y" :duration="25" :end="Math.PI * 2"></Animation>
        <Animation property="rotation.z" :duration="25" :end="Math.PI * 2"></Animation>
        <PointLight diffuse="#FF0000"></PointLight>
        <template v-for="x in [0, 5, -5]">
          <template v-for="y in [0, 5, -5]">
            <template v-for="z in [0, 5, -5]">
              <Sphere :position="[getXYZ(x, y, z), getXYZ(y, x, z), getXYZ(z, x, y)]" :key="`${x},${y},${z}`" >
                <Material v-if="x === 0 && y === 0 && z === 0" :key="`${x-1},${y-1},${z-1}`"
                  emissive="#E00"></Material>
              </Sphere>
            </template>
          </template>
        </template>
      </Entity>
    </Scene>
  </q-page>
</template>

<script>
import { Scene, Camera, HemisphericLight, Entity, Animation, PointLight, Sphere, Material } from 'vue-babylonjs'

export default {
  name: 'Babylon2',
  components: {
    Scene,
    Camera,
    HemisphericLight,
    Entity,
    Animation,
    PointLight,
    Sphere,
    Material
  },
  data () {
    return {
      xc: 0,
      yc: 0,
      zc: -10
    }
  },
  created () {},
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

<style lang="scss" scoped>
</style>
