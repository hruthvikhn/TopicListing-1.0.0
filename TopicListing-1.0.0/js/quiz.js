document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const answers = [
        "B) Plankton, Aerosol, Cloud, ocean Ecosystem",
        "C) NASA (National Aeronautics and Space Administration)",
        "C) To observe ocean ecosystems and atmospheric particles",
        "B) 2021",
        "C) Optical data related to ocean color",
        "C) By providing insights into ocean health and carbon cycling",
        "C) Multispectral imaging",
        "C) Plankton blooms, aerosols, and cloud properties",
        "B) By assessing their color and distribution in water",
        "B) It offers a global perspective on environmental changes."
    ];

    const userAnswers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked'),
        document.querySelector('input[name="q4"]:checked'),
        document.querySelector('input[name="q5"]:checked'),
        document.querySelector('input[name="q6"]:checked'),
        document.querySelector('input[name="q7"]:checked'),
        document.querySelector('input[name="q8"]:checked'),
        document.querySelector('input[name="q9"]:checked'),
        document.querySelector('input[name="q10"]:checked'),
    ];

    const answersList = document.getElementById("answersList");
    answersList.innerHTML = ""; // Clear previous results

    userAnswers.forEach((answer, index) => {
        if (answer) {
            const listItem = document.createElement("li");
            listItem.textContent = `Q${index + 1}: ${answers[index]}`;
            answersList.appendChild(listItem);
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = `Q${index + 1}: No answer selected.`;
            answersList.appendChild(listItem);
        }
    });

    document.getElementById("result").style.display = "block"; // Show results
});
