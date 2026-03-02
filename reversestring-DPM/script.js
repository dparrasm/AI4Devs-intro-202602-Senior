const elements = {
    input: null,
    reverseButton: null,
    copyButton: null,
    resultBox: null,
    statusNote: null,
    charCounter: null
};

const state = {
    latestResult: ""
};

function reverseString(text) {
    return Array.from(text).reverse().join("");
}

function readInput() {
    return elements.input.value;
}

function updateCharacterCount() {
    const length = Array.from(readInput()).length;
    const suffix = length === 1 ? "caracter" : "caracteres";

    elements.charCounter.textContent = length + " " + suffix;
}

function updateResultBox(message, className) {
    elements.resultBox.textContent = message;
    elements.resultBox.className = "result-box " + className;
}

function renderResult(reversedText) {
    updateResultBox(reversedText, "has-result");
    elements.statusNote.textContent = "Listo. Quedo al revés, pero con dignidad.";
    elements.copyButton.hidden = false;
    elements.copyButton.disabled = false;
}

function renderEmptyState() {
    state.latestResult = "";
    updateResultBox("Escribe algo primero. Los espacios sueltos no cuentan como texto.", "is-empty");
    elements.statusNote.textContent = "Nada que invertir por ahora.";
    elements.copyButton.hidden = true;
    elements.copyButton.disabled = true;
}

function renderError(message) {
    state.latestResult = "";
    updateResultBox(message, "is-error");
    elements.statusNote.textContent = "Hubo un tropiezo suave.";
    elements.copyButton.hidden = true;
    elements.copyButton.disabled = true;
}

function handleReverse() {
    const rawText = readInput();

    if (!rawText.trim()) {
        renderEmptyState();
        return;
    }

    try {
        const reversedText = reverseString(rawText);

        state.latestResult = reversedText;
        renderResult(reversedText);
    } catch (error) {
        renderError("No pude invertir ese texto esta vez. Prueba de nuevo.");
    }
}

async function copyResult() {
    if (!state.latestResult) {
        return;
    }

    if (!navigator.clipboard || !navigator.clipboard.writeText) {
        elements.statusNote.textContent = "Tu navegador no deja copiar desde aqui.";
        return;
    }

    try {
        await navigator.clipboard.writeText(state.latestResult);
        elements.statusNote.textContent = "Resultado copiado. Pegalo donde quieras.";
    } catch (error) {
        elements.statusNote.textContent = "No pude copiarlo. Aun puedes hacerlo manualmente.";
    }
}

function bindEvents() {
    elements.reverseButton.addEventListener("click", handleReverse);

    elements.input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleReverse();
        }
    });

    elements.input.addEventListener("input", updateCharacterCount);
    elements.copyButton.addEventListener("click", copyResult);
}

function init() {
    elements.input = document.getElementById("text-input");
    elements.reverseButton = document.getElementById("reverse-button");
    elements.copyButton = document.getElementById("copy-button");
    elements.resultBox = document.getElementById("result-box");
    elements.statusNote = document.getElementById("status-note");
    elements.charCounter = document.getElementById("char-counter");

    if (
        !elements.input ||
        !elements.reverseButton ||
        !elements.copyButton ||
        !elements.resultBox ||
        !elements.statusNote ||
        !elements.charCounter
    ) {
        return;
    }

    updateCharacterCount();
    renderEmptyState();
    bindEvents();
}

init();
