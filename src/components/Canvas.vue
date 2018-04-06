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

                this.$refs['sy-canvas'].width = this.$refs['sy-canvas'].parentElement.clientWidth - 4;
                this.$refs['sy-canvas'].height = this.$refs['sy-canvas'].parentElement.clientHeight - 4;
            },
            drawShape(command) {
                const ctx = this.canvasRef.getContext('2d');
                this[command.method](ctx, command.args);
            },
            drawRect(ctx, args) {
                ctx.strokeStyle = args.color;
                ctx.rect(...args.coords);
                ctx.stroke();
            },
            drawLine(ctx, args) {
                ctx.beginPath();
                ctx.moveTo(args.coords[0], args.coords[1]);
                ctx.lineTo(args.coords[2], args.coords[3]);
                ctx.stroke();
            },
            drawCircle(ctx, args) {
                ctx.strokeStyle = args.color;
                ctx.beginPath();
                ctx.arc(args.coords[0], args.coords[1], args.radius, 0, 2 * Math.PI);
                ctx.stroke();
            },
            clearCanvas(ctx, args) {
                ctx.fillStyle = args.color;
                ctx.fillRect(0, 0, this.canvasRef.width, this.canvasRef.height);
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
