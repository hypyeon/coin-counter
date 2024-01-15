import './css/styles.scss';

const counter = (coin) => {
    return (amount) => {
        const remainder = amount % coin;
        const dividable = amount - remainder;
        const coinCount = dividable / coin;
        return [coinCount, remainder];
    };
};

const quarterCounter = counter(0.25);
const dimeCounter = counter(0.1);
const nickelCounter = counter(0.05);
const pennyCounter = counter(0.01);

function formHandler() { 
    const form = document.querySelector("form");
    const clear = document.querySelector("button[type='reset']");
    const result = document.getElementById("result");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const amount = document.getElementById("amount").value;
        const quarter = quarterCounter(amount);
        const dime = dimeCounter(quarter[1]);
        const nickel = nickelCounter(dime[1]);
        const penny = pennyCounter(nickel[1]);
        document.getElementById("quarterAmount").innerText = quarter[0];
        document.getElementById("dimeAmount").innerText = dime[0];
        document.getElementById("nickelAmount").innerText = nickel[0];
        document.getElementById("pennyAmount").innerText = penny[0];
        result.classList.remove("hidden");
    });
    clear.addEventListener("click", e => {
        e.preventDefault();
        form.reset();
        result.classList.add("hidden");
    });
}

window.onload = () => {
    formHandler();
};