// Object creation
var user = {
    id: 0,
    name: "Hayes",
};
// Class creation.
var UserAccount = /** @class */ (function () {
    function UserAccount(id, name) {
        this.id = id;
        this.name = name;
    }
    UserAccount.prototype.getId = function () {
        return this.id;
    };
    UserAccount.prototype.getName = function () {
        return this.name;
    };
    return UserAccount;
}());
var userAccount = new UserAccount(2, "John");
console.log(userAccount.getId());
console.log(userAccount.getName());
console.log("adsfs");
