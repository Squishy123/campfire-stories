export default class Player {
    constructor(hp, currency) {
        this.currency = currency;
        this.hp = hp
    }

    // Function to add money.
    gainMoney(money) {
        this.currency += money;
    }

    // Function to subtract money.
    spendMoney(money) {
        this.currency -= money;
    }

    // Function to return currency.
    getMoney() {
        return this.currency
    }

    // Function to return Hp.
    getHp() {
        return this.hp
    }

    // Function to to take damage.
    damage(damage) {
        this.hp -= damage
    }
}
