const monthYear = document.getElementById("monthYear");
const daysContainer = document.getElementById("days");

let currentDate = new Date();

function renderCalendar() {

    daysContainer.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0);

    monthYear.textContent =
        currentDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });

    const startDay = firstDay.getDay();

    for(let i = startDay; i > 0; i--){

        const day = document.createElement("div");

        day.classList.add("day", "inactive");

        day.textContent =
            prevMonthLastDay.getDate() - i + 1;

        daysContainer.appendChild(day);
    }

    for(let d = 1; d <= lastDay.getDate(); d++){

        const day = document.createElement("div");

        day.classList.add("day");

        day.textContent = d;

        const today = new Date();

        if(
            d === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){
            day.classList.add("today");
        }

        daysContainer.appendChild(day);
    }

    const totalCells =
        startDay + lastDay.getDate();

    const remainingCells =
        42 - totalCells;

    for(let i = 1; i <= remainingCells; i++){

        const day = document.createElement("div");

        day.classList.add("day", "inactive");

        day.textContent = i;

        daysContainer.appendChild(day);
    }
}

document
    .getElementById("prev")
    .addEventListener("click", () => {

        currentDate.setMonth(
            currentDate.getMonth() - 1
        );

        renderCalendar();
    });

document
    .getElementById("next")
    .addEventListener("click", () => {

        currentDate.setMonth(
            currentDate.getMonth() + 1
        );

        renderCalendar();
    });

renderCalendar();