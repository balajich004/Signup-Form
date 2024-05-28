
const inputs = document.querySelectorAll("input"); 

const obj = {
    firstname: /^\w{5,10}$/i,
    lastname: /^\w{5,10}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})$/i,
    phone: /^\d{10}$/i,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/i,
};

const validate = (field, exp) => {
    if (exp.test(field.value)) {
        field.classList.add("valid");
        field.classList.remove("invalid");
    } else {
        field.classList.add("invalid");
        field.classList.remove("valid");
    }
};

Array.from(inputs).forEach(input => {
    input.addEventListener("keyup", (e) => {
        const validationPattern = obj[e.target.name];
        if (validationPattern) {
            validate(e.target, validationPattern);
        }
        console.log(e.target.name);
    });
});
