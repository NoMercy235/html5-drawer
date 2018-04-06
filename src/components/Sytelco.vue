<template>
    <div>
        <main>
            <sy-canvas></sy-canvas>
        </main>
        <footer>
            <sy-command></sy-command>
        </footer>
    </div>
</template>

<script>
    import Canvas from './Canvas';
    import Command from './Command';

    export default {
        name: 'Sytelco',
        data() {
            return {
            };
        },
        components: {
            'sy-canvas': Canvas,
            'sy-command': Command,
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
