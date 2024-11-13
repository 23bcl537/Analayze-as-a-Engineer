document.getElementById("calculate").addEventListener("click", function() {
    // Input values
    const span = parseFloat(document.getElementById("span").value);
    const load = parseFloat(document.getElementById("load").value);

    if (isNaN(span) || isNaN(load)) {
        alert("Please enter valid numbers for span and load.");
        return;
    }

    // Moment Distribution Calculation (Simple Example)
    const fixedEndMoment = (load * span) / 8; // Example FEM formula
    const distributedMoment = fixedEndMoment / 2; // Example distribution

    // Display results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p><strong>Fixed End Moment:</strong> ${fixedEndMoment.toFixed(2)} kNm</p>
        <p><strong>Distributed Moment:</strong> ${distributedMoment.toFixed(2)} kNm</p>
    `;
});
