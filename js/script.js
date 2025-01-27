document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm");

    const validateForm = () => {
        let isValid = true;

        ["firstName", "lastName", "city", "address"].forEach((field) => {
            const input = document.getElementById(field);
            const error = document.getElementById(`${field}Error`);
            if (input.value.trim() === "") {
                error.textContent = `Fusha ${field} eshtë e detyrueshme.`;
                input.classList.add("error");
                isValid = false;
            } else {
                error.textContent = "";
                input.classList.remove("error");
            }
        });

        return isValid;
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validateForm()) {
            alert("Ju lutem plotesoni te gjitha fushat e detyrueshme.");
            return;
        }

        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            city: document.getElementById("city").value,
            address: document.getElementById("address").value
        };

        fetch("Save.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    form.reset();
                    alert(data.message);
                } else {
                    alert(data.message);
                }
            })
            .catch(() => {
                alert("Gabim ne server.");
            });
    });

    document.getElementById("cancelBtn").addEventListener("click", () => {
        form.reset();
        alert("Te dhenat u anuluan me sukses.");
    });
});
