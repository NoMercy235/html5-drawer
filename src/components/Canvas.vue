<template>
    <canvas ref="sy-canvas"></canvas>
</template>

<script>
    export default {
        name: 'Canvas',
        data() {
            return {
                canvasRef: null,
            };
        },
        mounted() {
            this.getCanvasRef();
        },
        methods: {
            getCanvasRef() {
                this.canvasRef = this.$refs['sy-canvas'];
                console.log(this.canvasRef);

                this.$refs['sy-canvas'].width = this.$refs['sy-canvas'].parentElement.clientWidth - 4;
                this.$refs['sy-canvas'].height = this.$refs['sy-canvas'].parentElement.clientHeight - 4;
            },
            drawShape() {
                const context = this.canvasRef.getContext('2d');
                console.log(context);
                context.beginPath();
                context.moveTo(75, 50);
                context.moveTo(75, 100);
                context.moveTo(25, 100);
                context.fill();
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
