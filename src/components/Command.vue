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
        <p v-if="error" class="sy-error">
            {{ error.message }}
            {{ error.helper }}
        </p>
    </div>
</template>

<script>
    import Autocomplete from './Autocomplete';
    import { Utils} from "./utils";

    export default {
        name: 'Command',
        data() {
            return {
                data: [{ command: 'rectangle' }, { command: 'circle' }, { command: 'line' }, { command: 'fill' }, { command: 'clear' },  ],
                error: null
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
                const parsedCommand = Utils.parseCommand(command);
                if (parsedCommand.method === 'invalid') {
                    this.error = { message: parsedCommand.message, helper: parsedCommand.helper };
                    console.log(this.error);
                } else {
                    this.error = null;
                    this.$emit('sendCommand', parsedCommand);
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sy-error {
        color: red;
        font-weight: 700;
    }
</style>
