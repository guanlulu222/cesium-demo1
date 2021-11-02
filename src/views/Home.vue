<template>
  <vc-viewer>
    <vc-primitive-tileset
      ref="primitive"
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @readyPromise="onReadyPromise"
      @click="onClicked"
    >
    </vc-primitive-tileset>
  </vc-viewer>
</template>

<script>
import * as Cesium from 'cesium'
export default {
  name: 'Home',
  setup(props) {
    console.log(Cesium)

    // const onReadyPromise = (tileset, viewer) => {
    //   const cartographic = Cesium.Cartographic.fromCartesian(
    //     tileset.boundingSphere.center
    //   )
    //   const surface = Cesium.Cartesian3.fromRadians(
    //     cartographic.longitude,
    //     cartographic.latitude,
    //     cartographic.height
    //   )
    //   const offset = Cesium.Cartesian3.fromRadians(
    //     cartographic.longitude,
    //     cartographic.latitude,
    //     0
    //   )
    //   const translation = Cesium.Cartesian3.subtract(
    //     offset,
    //     surface,
    //     new Cesium.Cartesian3()
    //   )
    //   tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
    //   viewer.zoomTo(tileset)
    // }
    // const onClicked = (e) => {
    //   console.log(e)
    // }
    // const unload = () => {
    //   this.$refs.primitive.unload()
    // }
    // const load = () => {
    //   this.$refs.primitive.load()
    // }
    // const reload = () => {
    //   this.$refs.primitive.reload()
    // }
    return {
      // onReadyPromise,
      // onClicked,
      // unload,
      // load,
      // reload
    }
  }
}
</script>
