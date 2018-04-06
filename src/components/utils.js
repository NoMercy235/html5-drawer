export class Utils {
    static parseCommand(command) {
        const commandParts = command.split(' ');
        switch (commandParts[0]) {
            case 'rectangle':
                return { method: 'drawRect', args: { coords: [50, 50, 100, 100], color: 'blue' } };
            default:
                return { method: 'invalid' };
        }
    }
}
