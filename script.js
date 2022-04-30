const wrap = document.getElementById('wrap');
const x_coord = document.getElementById('x');
const y_coord = document.getElementById('y');
const button = document.getElementById('button');

wrap.addEventListener("mousemove", (e)=> {
    x_coord.innerHTML= e.offsetX.toString();
    y_coord.innerHTML= e.offsetY.toString();
})

button.addEventListener("mousedown", (e) => {
    e.target.classList.toggle('active')
})