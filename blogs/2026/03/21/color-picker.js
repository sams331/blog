    const picker = document.getElementById('colorPicker');
    const preview = document.getElementById('previewBox');
    const hexText = document.getElementById('hexValue');
    const rgbText = document.getElementById('rgbValue');

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    picker.addEventListener('input', function() {
        const color = this.value;
        const rgbColor = hexToRgb(color);
       
        preview.style.backgroundColor = color;
        preview.style.boxShadow = `0 20px 50px ${color}33`;
        
        hexText.innerText = color.toUpperCase();
        rgbText.innerText = rgbColor;
    });

    function copyHex() {
        navigator.clipboard.writeText(hexText.innerText);
        alert('Copied: ' + hexText.innerText);
    }

    function copyRGB() {
        navigator.clipboard.writeText(rgbText.innerText);
        alert('Copied: ' + rgbText.innerText);
    }
