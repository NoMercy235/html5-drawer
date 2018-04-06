export class Utils {
    static parseCommand(command) {
        const commandParts = command.split(' ');
        switch (commandParts[0]) {
            case Utils.commands.rectangle.name:
                const invalid = Utils.isInvalidRect(commandParts);
                if (invalid) return Utils.invalidCommand(invalid, Utils.commands.rectangle.helper);
                return { method: Utils.commands.rectangle.method, args: { coords: commandParts.slice(1, 5), color: commandParts[5] } };
            default:
                return Utils.invalidCommand(Utils.errors.notRecognized);
        }
    }

    static isInvalidRect(commandParts) {
        if (![5, 6].includes(commandParts.length)) return Utils.errors.args;

        const coords = commandParts.slice(1, 5);
        if (coords.some(coord => coord < 0)) return Utils.errors.invalidArgs;
        if (coords[0] > window.innerWidth || coords[1] > window.innerHeight) return Utils.errors.invalidArgs;

        return null;
    }

    static invalidCommand(invalid, helper) {
        return { method: 'invalid', message: invalid, helper: helper || Utils.commands.invalid.helper };
    }

    static errors = {
        args: 'Not enough arguments.',
        invalidArgs: 'Invalid arguments.',
        notRecognized: 'The command is not recognized.',
    };

    static commands = {
        rectangle: {
            name: 'rectangle',
            method: 'drawRect',
            query: 'rectangle',
            helper: 'Usage: rectangle x y width height [color]',
        },
        invalid: {
            name: 'invalid',
            helper: 'Choose from: rectangle, circle, line, fill, clear.',
        }
    };

}
