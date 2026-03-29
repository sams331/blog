    const rotInput = document.getElementById('rotInput');
    function rot13(str) {
        return str.replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode(
                (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
            );
        });
    }

    rotInput.addEventListener('input', () => {
        const originalText = rotInput.value;
        if(originalText === "") return;
    });

    function convert() {
            rotInput.value = rot13(rotInput.value);
	}
	
    function copyRot() {
        rotInput.select();
        document.execCommand('copy');
        alert("Copied.");
    }

    function clearRot() {
        rotInput.value = '';
    }


