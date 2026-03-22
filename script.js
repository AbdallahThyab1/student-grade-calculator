const form = document.getElementById("grade-form");
const inputs = document.getElementById("inputs");
const addbtn = document.getElementById("add-mark");
const deletebtn = document.getElementById("delete-mark");

/* ===== CALCULATE ===== */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const marks = document.querySelectorAll(".mark");
    let sum = 0;
    let count = 0;
    marks.forEach(input => {
        const value = Number(input.value);
        if (!isNaN(value) && input.value !== "") {
            sum += value;
            count++;
        }
    });
    const result = document.querySelector(".avg");
    result.textContent = count === 0
        ? "--"
        : (sum / count).toFixed(2);
});

/* ===== ADD ===== */
addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const firstInput = inputs.children[0];
    const newInput = firstInput.cloneNode(true);
    newInput.value = "";
    const newIndex = inputs.children.length + 1;
    newInput.placeholder = `Subject ${newIndex}`;
    inputs.append(newInput);
});

/* ===== DELETE ===== */
deletebtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputs.children.length > 1) {
        inputs.lastElementChild.remove();
    }
    [...inputs.children].forEach((input, i) => {
        input.placeholder = `Subject ${i + 1}`;
    });
});