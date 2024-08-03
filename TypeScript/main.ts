// Interface definition.
interface User {
    id: number;
    name: string;
}

// Object creation
const user: User = {
    id: 0,
    name: "Hayes",
};

// Class creation.
class UserAccount {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const userAccount: User = new UserAccount(0, "John");
