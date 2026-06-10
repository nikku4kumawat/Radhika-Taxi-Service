const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pickup = document.getElementById("pickup").value.trim();
    const drop = document.getElementById("drop").value.trim();
    const date = document.getElementById("date").value.trim();
    const car = document.getElementById("car").value.trim();

    /* Validation */

    if(
        name === "" ||
        phone === "" ||
        pickup === "" ||
        drop === "" ||
        date === "" ||
        car === ""
    ){
        alert("⚠ Please fill all booking details first.");
        return;
    }

    const message =
`🚖 Radhika Taxi Service Booking

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Car Type: ${car}`;

    const whatsappNumber = "919828676243";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});


flatpickr("#date", {
    dateFormat: "d-m-Y",
    allowInput: true,
    disableMobile: true
});
