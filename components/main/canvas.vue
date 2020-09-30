<template>
  <div>
    <canvas ref="canvas" v-on:mousedown="mouseDown" class="canvas"></canvas>
    <button @click.prevent="reset" class="btn btn-primary btn-block">
      CLEAR
    </button>
  </div>
</template>

<script>
import paper from 'paper'
export default {
  data() {
    return {
      path: null,
      scope: null
    }
  },
  mounted() {
    this.scope = new paper.PaperScope()
    this.scope.setup(this.$refs.canvas)
  },
  methods: {
    reset() {
      this.scope.project.activeLayer.removeChildren()
    },
    pathCreate(scope) {
      scope.activate()
      return new paper.Path({
        strokeColor: '#000000',
        strokeJoin: 'round',
        strokeWidth: 1.5
      })
    },
    createTool(scope) {
      scope.activate()
      return new paper.Tool()
    },
    mouseDown() {
      // in order to access functions in nested tool
      const self = this
      // create drawing tool
      this.tool = this.createTool(this.scope)
      this.tool.onMouseDown = event => {
        // init path
        self.path = self.pathCreate(self.scope)
        // add point to path
        self.path.add(event.point)
      }
      this.tool.onMouseDrag = event => {
        self.path.add(event)
      }
      this.tool.onMouseUp = event => {
        // line completed
        self.path.add(event.point)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  width: 900px;
  height: 300px;
  border: 2px solid rgba($color: #000, $alpha: 1);
  background-color: #eee;
}
</style>
