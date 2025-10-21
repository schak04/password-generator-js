function generatePassword(length, includeLower, includeUpper, includeNum, includeSym) {
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharacters = "0123456789";
    const symbolCharacters = "~`!@#$%^&*()_+-=|/\\?<>{}[],.:;'\"";

    let allowedCharacters = "";
    let password = "";

    if (includeLower) allowedCharacters += lowercaseCharacters;
    if (includeUpper) allowedCharacters += uppercaseCharacters;
    if (includeNum) allowedCharacters += numberCharacters;
    if (includeSym) allowedCharacters += symbolCharacters;

    if (length < 6) return "Error: Invalid Password Length";
    if (allowedCharacters.length === 0) return "Error: Please include at least one character type";

    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIdx];
    }

    return password;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("lengthInput").value);
    const includeLower = document.getElementById("lowercase").checked;
    const includeUpper = document.getElementById("uppercase").checked;
    const includeNum = document.getElementById("numbers").checked;
    const includeSym = document.getElementById("symbols").checked;

    const password = generatePassword(length, includeLower, includeUpper, includeNum, includeSym);
    document.getElementById("passwordOutput").textContent = password;
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const password = document.getElementById("passwordOutput").textContent;
    if (password.startsWith("Error")) return;
    navigator.clipboard.writeText(password)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password."));
});