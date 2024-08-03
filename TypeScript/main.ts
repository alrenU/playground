// SECTION - START
// interface definition
interface User {
    id: number;
    name: string;
}

// object creation by type
const user: User = {
    id: 0,
    name: "Hayes",
};

// class creation
class UserAccount {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const userAccount: User = new UserAccount(0, "John");
// SECTION - END