<template>
    <div>
        <sy-autocomplete
            :source="data"
            placeholder="Please type your command..."
            filter-key="command"
            :start-at="2"
            v-bind:style="{ width: windowWidth }"
            @sendCommand="commandReceived"
        >
        </sy-autocomplete>
    </div>
</template>

<script>
    import Autocomplete from './Autocomplete'

    export default {
        name: 'Command',
        data() {
            return {
                data: [{ command: 'rectangle' }, { command: 'circle' }, { command: 'line' }, { command: 'fill' }, { command: 'clear' },  ],
            };
        },
        computed: {
            windowWidth: () => (window.innerWidth - 40) + 'px',
        },
        components: {
            'sy-autocomplete': Autocomplete,
        },
        methods: {
            commandReceived(command) {
                this.$emit('sendCommand', command);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
