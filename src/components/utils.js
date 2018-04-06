export class Utils {
    static parseCommand(command) {
        const commandParts = command.split(' ');
        switch (commandParts[0]) {
            case 'rectangle':
                return { method: 'drawRect', args: { coords: commandParts.slice(1, 5), color: commandParts[5] } };
            default:
                return { method: 'invalid' };
        }
    }
}
