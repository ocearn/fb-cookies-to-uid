// Extract UID from Cookie
function extractUID(button) {
    const cookie = document.getElementById('cookieInput').value;
    const output = document.getElementById('output');

    // Show loading effect on button
    button.textContent = "Processing...";
    button.disabled = true;

    setTimeout(() => {
        const match = cookie.match(/c_user=([0-9]+)/); // Match c_user cookie
        if (match) {
            output.value = match[1];
            button.textContent = "UID Extracted!";
        } else {
            button.textContent = "No UID Found!";
        }
        button.disabled = false;

        // Reset button text after a while
        setTimeout(() => {
            button.textContent = "Extract UID";
        }, 3000);
    }, 1500); // Simulate processing time
}

// Copy UID to Clipboard
function copyToClipboard(button) {
    const output = document.getElementById('output');
    if (output.value) {
        output.select();
        document.execCommand('copy');

        // Show success message in button
        button.textContent = "Copied!";
        setTimeout(() => {
            button.textContent = "Copy UID";
        }, 2000);
    } else {
        button.textContent = "No UID to Copy!";
        setTimeout(() => {
            button.textContent = "Copy UID";
        }, 2000);
    }
}