const colors = ['#FF5733', '#33FF57', '#3357FF', '#000000', '#FF8F33',];
let colorIndex = 0;

document.getElementById('colorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
