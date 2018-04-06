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
            drawShape(command) {
                const ctx = this.canvasRef.getContext('2d');
                this[command.method](ctx, command.args);
            },
            drawRect(ctx, args) {
                ctx.fillStyle = args.color;
                ctx.fillRect(...args.coords);
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
