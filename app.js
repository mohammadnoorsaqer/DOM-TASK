const bold = document.getElementById('boldBTN');
const italic = document.getElementById('italicBTN');
const textleft = document.getElementById('textleftBTN');
const textcenter = document.getElementById('textcenterBTN');
const textright = document.getElementById('textrightBTN');
const upper = document.getElementById('upperBTN');
const lower = document.getElementById('lowerBTN');
const capital = document.getElementById('capitalBTN');
const CLEAR = document.getElementById('clearBTN');
const colorPicker = document.getElementById('colorPicker');
const printBTN = document.getElementById('printBTN');

const text_area = document.getElementById('text');

bold.addEventListener('click', () => {
    text_area.style.fontWeight = text_area.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

italic.addEventListener('click', () => {
    text_area.style.fontStyle = text_area.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

textleft.addEventListener('click', () => {
    text_area.style.textAlign = 'left';
});

textcenter.addEventListener('click', () => {
    text_area.style.textAlign = 'center';
});

textright.addEventListener('click', () => {
    text_area.style.textAlign = 'right';
});

upper.addEventListener('click', () => {
    text_area.style.textTransform = text_area.style.textTransform === 'uppercase' ? 'none' : 'uppercase';
});

lower.addEventListener('click', () => {
    text_area.style.textTransform = text_area.style.textTransform === 'lowercase' ? 'none' : 'lowercase';
});

capital.addEventListener('click', () => {
    text_area.style.textTransform = text_area.style.textTransform === 'capitalize' ? 'none' : 'capitalize';
});

colorPicker.addEventListener('input', () => {
    text_area.style.color = colorPicker.value;
});
brush.addEventListener('click', () => {
    if (colorPicker.style.display === 'none' || colorPicker.style.display === '') {
        colorPicker.style.display = 'block';
    } else {
        colorPicker.style.display = 'none';
    }
});
CLEAR.addEventListener('click', () => {
    text_area.value = ''; 
});
printBTN.addEventListener('click', () => {
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write('<pre>' + text_area.value + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});