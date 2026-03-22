
    const textInput = document.getElementById('textInput');
    const base64Input = document.getElementById('base64Input');

    function encodeText() {
        try {
            const encoded = btoa(textInput.value);
            base64Input.value = encoded;
        } catch (e) {
            alert("Error: Input contains invalid characters for Base64 encoding.");
        }
    }

    function decodeText() {
        try {
            const decoded = atob(base64Input.value);
            textInput.value = decoded;
        } catch (e) {
            alert("Error: Invalid Base64 string.");
        }
    }

    function copyResult() {
        base64Input.select();
        document.execCommand('copy');
        alert('Copied.')
    }

	function clearInputs() {
			textInput.value = ""
			base64Input.value = ""
		}
