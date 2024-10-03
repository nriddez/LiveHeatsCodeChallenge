document.getElementById("raceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const raceName = document.getElementById("raceName").value;
    const studentCount = document.getElementById("students").value;
    // const LaneCount = document.getElementById("lane").value;

    let studentInputHtml = "";
    for (let i = 1; i <= studentCount; i++) {
        studentInputHtml += `
            <label><span class="lane-label">Lane ${i}.<br></span> Name:</label>
            <input type="text" class="studentName" required><br>
            <label>Place:</label>
            <input type="number" class="studentPlace" min="1" max="${studentCount}" required><br><br>
        `;
    }

    document.getElementById("studentInput").innerHTML = studentInputHtml;
    document.getElementById("raceSection").style.display = "block";
});

document.getElementById("submitRace").addEventListener("click", function () {
    const raceName = document.getElementById("raceName").value;
    const students = document.getElementsByClassName("studentName");
    const places = document.getElementsByClassName("studentPlace");

    const resultsTable = document.querySelector("#resultsTable tbody");
    for (let i = 0; i < students.length; i++) {
        const row = resultsTable.insertRow();
        row.insertCell(0).innerText = raceName;
        row.insertCell(1).innerText = i + 1;
        row.insertCell(2).innerText = students[i].value;
        row.insertCell(3).innerText = places[i].value;
    }

    document.getElementById("raceSection").style.display = "none";
});